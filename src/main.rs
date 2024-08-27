use base64::{engine::general_purpose, Engine as _}; // 用于Base64解码
use reqwest; // HTTP 客户端库
use std::error::Error; // 错误处理
use std::fs::File; // 文件操作
use std::io::Write; // 写入操作


// 主函数，使用 #[tokio::main] 宏标记为异步函数
#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // 下载 GFWList 内容
    let gfwlist_content = download_gfwlist("https://gitlab.com/gfwlist/gfwlist/raw/master/gfwlist.txt".parse().unwrap()).await?;
    // 解析 GFWList 内容，生成规则列表
    let rules = parse_gfwlist(&gfwlist_content);
    // 生成 PAC 文件内容
    let pac_content = generate_pac(&rules);

    // 创建 PAC 文件并写入内容
    let mut file = File::create("gfwlist.pac")?;
    file.write_all(pac_content.as_bytes())?;

    // 打印成功消息
    println!("PAC file generated successfully.");
    Ok(()) // 返回成功结果
}

// 异步函数，用于下载 GFWList
async fn download_gfwlist(string: String) -> Result<String, Box<dyn Error>> {
    // GFWList 的 URL
    let url = string;
    let response = reqwest::get(url).await?.text().await?;
    println!("Response length: {}", response.len());

    // 移除所有非 Base64 字符（包括换行符）
    let cleaned_response: String = response.chars()
        .filter(|c| c.is_ascii_alphanumeric() || *c == '+' || *c == '/' || *c == '=')
        .collect();

    println!("Cleaned response length: {}", cleaned_response.len());

    match general_purpose::STANDARD.decode(cleaned_response) {
        Ok(decoded) => {
            println!("Decoded successfully, length: {}", decoded.len());
            Ok(String::from_utf8(decoded)?)
        },
        Err(e) => {
            println!("Decoding error: {:?}", e);
            Err(Box::new(e))
        }
    }
}

fn parse_gfwlist(content: &str) -> Vec<String> {
    let mut rules = Vec::new();
    for line in content.lines() {
        if line.starts_with('!') || line.starts_with('[') || line.is_empty() {
            continue;
        }
        if line.starts_with("||") {
            // 域名规则
            rules.push(format!("shExpMatch(host, \"*{}\")", &line[2..]));
        } else if line.starts_with('/') && line.ends_with('/') {
            // 正则表达式规则
            rules.push(format!("{}.test(url)", line));
        } else if line.starts_with('|') {
            // URL 开始匹配
            rules.push(format!("url.indexOf(\"{}\") === 0", &line[1..]));
        } else if line.contains('*') {
            // 通配符规则
            rules.push(format!("shExpMatch(url, \"{}\")", line));
        } else {
            // 普通 URL 规则
            rules.push(format!("url.indexOf(\"{}\") !== -1", line));
        }
    }
    rules
}

fn generate_pac(rules: &[String]) -> String {
    let rules_str = rules.join(" ||\n        ");
    format!(
        r#"
function FindProxyForURL(url, host) {{
    var proxy = "PROXY 127.0.0.1:%mixed-port%; SOCKS5 127.0.0.1:%mixed-port%; DIRECT;";

    if (
        {}
    ) {{
        return proxy;
    }}

    return "DIRECT";
}}

// 辅助函数
function shExpMatch(text, pattern) {{
    var pChar, tChar;
    var pIndex = 0, tIndex = 0;
    var pLength = pattern.length, tLength = text.length;
    while (pIndex < pLength && tIndex < tLength) {{
        pChar = pattern.charAt(pIndex);
        tChar = text.charAt(tIndex);
        if (pChar === '*') {{
            pIndex++;
            while (pIndex < pLength && pattern.charAt(pIndex) === '*') {{
                pIndex++;
            }}
            if (pIndex === pLength) {{
                return true;
            }}
            while (tIndex < tLength && !shExpMatch(text.substring(tIndex), pattern.substring(pIndex))) {{
                tIndex++;
            }}
            if (tIndex === tLength) {{
                return false;
            }}
        }} else if (pChar === '?' || pChar === tChar) {{
            pIndex++;
            tIndex++;
        }} else {{
            return false;
        }}
    }}
    while (pIndex < pLength && pattern.charAt(pIndex) === '*') {{
        pIndex++;
    }}
    return pIndex === pLength && tIndex === tLength;
}}
"#,
        rules_str
    )
}

