
function FindProxyForURL(url, host) {
    var proxy = "PROXY 127.0.0.1:%mixed-port%; SOCKS5 127.0.0.1:%mixed-port%; DIRECT;";

    if (
        url.indexOf("http://85.17.73.31/") === 0 ||
        shExpMatch(host, "*afreecatv.com") ||
        shExpMatch(host, "*agnesb.fr") ||
        shExpMatch(host, "*akiba-web.com") ||
        shExpMatch(host, "*altrec.com") ||
        shExpMatch(host, "*angela-merkel.de") ||
        shExpMatch(host, "*angola.org") ||
        shExpMatch(host, "*anthropic.com") ||
        shExpMatch(host, "*apartmentratings.com") ||
        shExpMatch(host, "*apartments.com") ||
        shExpMatch(host, "*arena.taipei") ||
        shExpMatch(host, "*asianspiss.com") ||
        shExpMatch(host, "*assimp.org") ||
        shExpMatch(host, "*athenaeizou.com") ||
        shExpMatch(host, "*azubu.tv") ||
        shExpMatch(host, "*bankmobilevibe.com") ||
        shExpMatch(host, "*banorte.com") ||
        shExpMatch(host, "*beeg.com") ||
        shExpMatch(host, "*global.bing.com") ||
        shExpMatch(host, "*booktopia.com.au") ||
        shExpMatch(host, "*boysmaster.com") ||
        shExpMatch(host, "*bynet.co.il") ||
        shExpMatch(host, "*byrut.org") ||
        shExpMatch(host, "*carfax.com") ||
        url.indexOf(".casinobellini.com") !== -1 ||
        shExpMatch(host, "*casinobellini.com") ||
        shExpMatch(host, "*centauro.com.br") ||
        shExpMatch(host, "*chobit.cc") ||
        shExpMatch(host, "*ciciai.com") ||
        shExpMatch(host, "*claude.ai") ||
        shExpMatch(host, "*clearsurance.com") ||
        shExpMatch(host, "*images.comico.tw") ||
        shExpMatch(host, "*static.comico.tw") ||
        shExpMatch(host, "*counter.social") ||
        shExpMatch(host, "*costco.com") ||
        shExpMatch(host, "*coze.com") ||
        shExpMatch(host, "*crossfire.co.kr") ||
        shExpMatch(host, "*crunchyroll.com") ||
        shExpMatch(host, "*d2pass.com") ||
        shExpMatch(host, "*darpa.mil") ||
        shExpMatch(host, "*dawangidc.com") ||
        shExpMatch(host, "*deezer.com") ||
        shExpMatch(host, "*desipro.de") ||
        shExpMatch(host, "*dingchin.com.tw") ||
        shExpMatch(host, "*discord.com") ||
        shExpMatch(host, "*discord.gg") ||
        shExpMatch(host, "*discordapp.com") ||
        shExpMatch(host, "*discordapp.net") ||
        shExpMatch(host, "*dish.com") ||
        url.indexOf("http://img.dlsite.jp/") === 0 ||
        shExpMatch(host, "*dm530.net") ||
        url.indexOf("share.dmhy.org") !== -1 ||
        shExpMatch(host, "*dmhy.org") ||
        shExpMatch(host, "*dmm.co.jp") ||
        url.indexOf("http://www.dmm.com/netgame") === 0 ||
        shExpMatch(host, "*dnvod.tv") ||
        shExpMatch(host, "*dubox.com") ||
        shExpMatch(host, "*dvdpac.com") ||
        shExpMatch(host, "*eesti.ee") ||
        shExpMatch(host, "*esurance.com") ||
        url.indexOf(".expekt.com") !== -1 ||
        shExpMatch(host, "*expekt.com") ||
        url.indexOf(".extmatrix.com") !== -1 ||
        shExpMatch(host, "*extmatrix.com") ||
        shExpMatch(host, "*fakku.net") ||
        shExpMatch(host, "*fastpic.ru") ||
        shExpMatch(host, "*filesor.com") ||
        shExpMatch(host, "*financetwitter.com") ||
        shExpMatch(host, "*flipboard.com") ||
        shExpMatch(host, "*flitto.com") ||
        shExpMatch(host, "*fnac.be") ||
        shExpMatch(host, "*fnac.com") ||
        shExpMatch(host, "*funkyimg.com") ||
        shExpMatch(host, "*fxnetworks.com") ||
        shExpMatch(host, "*g-area.org") ||
        shExpMatch(host, "*gettyimages.com") ||
        shExpMatch(host, "*getuploader.com") ||
        shExpMatch(host, "*ghidra-sre.org") ||
        shExpMatch(host, "*glass8.eu") ||
        shExpMatch(host, "*glype.com") ||
        shExpMatch(host, "*go141.com") ||
        shExpMatch(host, "*guo.media") ||
        shExpMatch(host, "*hautelook.com") ||
        shExpMatch(host, "*hautelookcdn.com") ||
        shExpMatch(host, "*wego.here.com") ||
        shExpMatch(host, "*gamer-cds.cdn.hinet.net") ||
        shExpMatch(host, "*gamer2-cds.cdn.hinet.net") ||
        shExpMatch(host, "*hmoegirl.com") ||
        shExpMatch(host, "*hmvdigital.ca") ||
        shExpMatch(host, "*hmvdigital.com") ||
        shExpMatch(host, "*homedepot.com") ||
        shExpMatch(host, "*hoovers.com") ||
        shExpMatch(host, "*hulu.com") ||
        shExpMatch(host, "*huluim.com") ||
        url.indexOf("http://secure.hustler.com") === 0 ||
        url.indexOf("http://hustlercash.com") === 0 ||
        url.indexOf("http://www.hustlercash.com") === 0 ||
        shExpMatch(host, "*hybrid-analysis.com") ||
        shExpMatch(host, "*cdn*.i-scmp.com") ||
        shExpMatch(host, "*ilbe.com") ||
        shExpMatch(host, "*ilovelongtoes.com") ||
        url.indexOf("http://imgmega.com/*.gif.html") === 0 ||
        url.indexOf("http://imgmega.com/*.jpg.html") === 0 ||
        url.indexOf("http://imgmega.com/*.jpeg.html") === 0 ||
        url.indexOf("http://imgmega.com/*.png.html") === 0 ||
        shExpMatch(host, "*imlive.com") ||
        shExpMatch(host, "*tw.iqiyi.com") ||
        shExpMatch(host, "*javhub.net") ||
        shExpMatch(host, "*javhuge.com") ||
        url.indexOf(".javlibrary.com") !== -1 ||
        shExpMatch(host, "*javlibrary.com") ||
        shExpMatch(host, "*jcpenney.com") ||
        shExpMatch(host, "*jims.net") ||
        shExpMatch(host, "*tv.jtbc.joins.com") ||
        shExpMatch(host, "*jukujo-club.com") ||
        shExpMatch(host, "*juliepost.com") ||
        shExpMatch(host, "*kawaiikawaii.jp") ||
        shExpMatch(host, "*kendatire.com") ||
        shExpMatch(host, "*khatrimaza.org") ||
        shExpMatch(host, "*kkbox.com") ||
        shExpMatch(host, "*leisurepro.com") ||
        shExpMatch(host, "*lifemiles.com") ||
        shExpMatch(host, "*longtoes.com") ||
        shExpMatch(host, "*lovetvshow.com") ||
        url.indexOf("http://www.m-sport.co.uk") === 0 ||
        shExpMatch(host, "*macgamestore.com") ||
        shExpMatch(host, "*madonna-av.com") ||
        shExpMatch(host, "*mandiant.com") ||
        shExpMatch(host, "*mangafox.com") ||
        shExpMatch(host, "*mangafox.me") ||
        shExpMatch(host, "*manta.com") ||
        shExpMatch(host, "*matome-plus.com") ||
        shExpMatch(host, "*matome-plus.net") ||
        shExpMatch(host, "*mattwilcox.net") ||
        shExpMatch(host, "*metarthunter.com") ||
        shExpMatch(host, "*mfxmedia.com") ||
        shExpMatch(host, "*mojim.com") ||
        shExpMatch(host, "*kb.monitorware.com") ||
        shExpMatch(host, "*monster.com") ||
        shExpMatch(host, "*moodyz.com") ||
        shExpMatch(host, "*moonbingo.com") ||
        shExpMatch(host, "*mos.ru") ||
        shExpMatch(host, "*msha.gov") ||
        shExpMatch(host, "*muzu.tv") ||
        shExpMatch(host, "*mvg.jp") ||
        url.indexOf(".mybet.com") !== -1 ||
        shExpMatch(host, "*mybet.com") ||
        shExpMatch(host, "*mypikpak.com") ||
        shExpMatch(host, "*nationwide.com") ||
        url.indexOf("http://www.nbc.com/live") === 0 ||
        shExpMatch(host, "*neo-miracle.com") ||
        shExpMatch(host, "*netflix.com") ||
        shExpMatch(host, "*netflix.net") ||
        shExpMatch(host, "*nflximg.com") ||
        shExpMatch(host, "*nflximg.net") ||
        shExpMatch(host, "*nflxext.com") ||
        shExpMatch(host, "*nflxso.net") ||
        shExpMatch(host, "*nflxvideo.net") ||
        shExpMatch(host, "*nic.gov") ||
        url.indexOf("http://mo.nightlife141.com") === 0 ||
        shExpMatch(host, "*purpose.nike.com") ||
        shExpMatch(host, "*noxinfluencer.com") ||
        url.indexOf("@@||cn.noxinfluencer.com") !== -1 ||
        shExpMatch(host, "*nordstrom.com") ||
        shExpMatch(host, "*nordstromimage.com") ||
        shExpMatch(host, "*nordstromrack.com") ||
        shExpMatch(host, "*nottinghampost.com") ||
        shExpMatch(host, "*npsboost.com") ||
        shExpMatch(host, "*ntdtv.cz") ||
        shExpMatch(host, "*s1.nudezz.com") ||
        shExpMatch(host, "*nusatrip.com") ||
        shExpMatch(host, "*nuuvem.com") ||
        shExpMatch(host, "*olehdtv.com") ||
        shExpMatch(host, "*omni7.jp") ||
        shExpMatch(host, "*onapp.com") ||
        shExpMatch(host, "*ontrac.com") ||
        url.indexOf("@@|http://blog.ontrac.com") !== -1 ||
        shExpMatch(host, "*openai.com") ||
        shExpMatch(host, "*pandora.com") ||
        url.indexOf(".pandora.tv") !== -1 ||
        shExpMatch(host, "*parkansky.com") ||
        shExpMatch(host, "*phmsociety.org") ||
        url.indexOf("http://*.pimg.tw/") === 0 ||
        shExpMatch(host, "*podcast.co") ||
        shExpMatch(host, "*pure18.com") ||
        shExpMatch(host, "*pytorch.org") ||
        shExpMatch(host, "*qq.co.za") ||
        shExpMatch(host, "*r18.com") ||
        url.indexOf("http://radiko.jp") === 0 ||
        shExpMatch(host, "*ramcity.com.au") ||
        shExpMatch(host, "*rateyourmusic.com") ||
        shExpMatch(host, "*rd.com") ||
        shExpMatch(host, "*rdio.com") ||
        url.indexOf("https://riseup.net") === 0 ||
        shExpMatch(host, "*sadistic-v.com") ||
        shExpMatch(host, "*isc.sans.edu") ||
        url.indexOf("http://cdn*.search.xxx/") === 0 ||
        shExpMatch(host, "*shiksha.com") ||
        shExpMatch(host, "*slacker.com") ||
        shExpMatch(host, "*sm-miracle.com") ||
        shExpMatch(host, "*softnology.biz") ||
        shExpMatch(host, "*soylentnews.org") ||
        shExpMatch(host, "*spotify.com") ||
        shExpMatch(host, "*spreadshirt.es") ||
        shExpMatch(host, "*springboardplatform.com") ||
        shExpMatch(host, "*sprite.org") ||
        url.indexOf("@@|http://store.sprite.org") !== -1 ||
        shExpMatch(host, "*superokayama.com") ||
        shExpMatch(host, "*superpages.com") ||
        shExpMatch(host, "*swagbucks.com") ||
        shExpMatch(host, "*switch1.jp") ||
        shExpMatch(host, "*tapanwap.com") ||
        shExpMatch(host, "*gsp.target.com") ||
        shExpMatch(host, "*login.target.com") ||
        shExpMatch(host, "*rcam.target.com") ||
        shExpMatch(host, "*technews.tw") ||
        shExpMatch(host, "*terabox.com") ||
        shExpMatch(host, "*thinkgeek.com") ||
        shExpMatch(host, "*thebodyshop-usa.com") ||
        shExpMatch(host, "*tiktok.com") ||
        shExpMatch(host, "*tma.co.jp") ||
        shExpMatch(host, "*tracfone.com") ||
        shExpMatch(host, "*tryheart.jp") ||
        shExpMatch(host, "*turntable.fm") ||
        shExpMatch(host, "*twerkingbutt.com") ||
        shExpMatch(host, "*ulop.net") ||
        shExpMatch(host, "*uukanshu.com") ||
        shExpMatch(host, "*vegasred.com") ||
        shExpMatch(host, "*vevo.com") ||
        shExpMatch(host, "*vip-enterprise.com") ||
        url.indexOf("http://viu.tv/ch/") === 0 ||
        url.indexOf("http://viu.tv/encore/") === 0 ||
        shExpMatch(host, "*vmpsoft.com") ||
        url.indexOf("http://ecsm.vs.com/") === 0 ||
        shExpMatch(host, "*wanz-factory.com") ||
        shExpMatch(host, "*ssl.webpack.de") ||
        shExpMatch(host, "*wheretowatch.com") ||
        shExpMatch(host, "*wingamestore.com") ||
        shExpMatch(host, "*wizcrafts.net") ||
        shExpMatch(host, "*wowhead.com") ||
        shExpMatch(host, "*vod.wwe.com") ||
        shExpMatch(host, "*xfinity.com") ||
        shExpMatch(host, "*xiaomi.eu") ||
        shExpMatch(host, "*youwin.com") ||
        shExpMatch(host, "*ytn.co.kr") ||
        shExpMatch(host, "*zamimg.com") ||
        shExpMatch(host, "*zattoo.com") ||
        shExpMatch(host, "*zim.vn") ||
        shExpMatch(host, "*zozotown.com") ||
        url.indexOf("14.102.250.18") !== -1 ||
        url.indexOf("14.102.250.19") !== -1 ||
        url.indexOf("50.7.31.230:8898") !== -1 ||
        url.indexOf("174.142.105.153") !== -1 ||
        url.indexOf("69.65.19.160") !== -1 ||
        shExpMatch(host, "*xn--4gq171p.com") ||
        shExpMatch(host, "*xn--czq75pvv1aj5c.org") ||
        shExpMatch(host, "*xn--i2ru8q2qg.com") ||
        shExpMatch(host, "*xn--oiq.cc") ||
        shExpMatch(host, "*xn--p8j9a0d9c9a.xn--q9jyb4c") ||
        shExpMatch(host, "*xn--9pr62r24a.com") ||
        shExpMatch(host, "*abebooks.com") ||
        url.indexOf("https://*.s3.amazonaws.com") === 0 ||
        shExpMatch(host, "*s3-ap-southeast-2.amazonaws.com") ||
        shExpMatch(host, "*43110.cf") ||
        shExpMatch(host, "*9cache.com") ||
        shExpMatch(host, "*9gag.com") ||
        shExpMatch(host, "*agro.hk") ||
        shExpMatch(host, "*share.america.gov") ||
        shExpMatch(host, "*apkmirror.com") ||
        shExpMatch(host, "*arte.tv") ||
        shExpMatch(host, "*artstation.com") ||
        shExpMatch(host, "*bangdream.space") ||
        shExpMatch(host, "*behance.net") ||
        shExpMatch(host, "*bird.so") ||
        shExpMatch(host, "*bitterwinter.org") ||
        shExpMatch(host, "*bnn.co") ||
        shExpMatch(host, "*businessinsider.com") ||
        shExpMatch(host, "*boomssr.com") ||
        shExpMatch(host, "*bwgyhw.com") ||
        shExpMatch(host, "*castbox.fm") ||
        shExpMatch(host, "*chinatimes.com") ||
        shExpMatch(host, "*clyp.it") ||
        shExpMatch(host, "*cmcn.org") ||
        shExpMatch(host, "*cmx.im") ||
        shExpMatch(host, "*dailyview.tw") ||
        shExpMatch(host, "*daum.net") ||
        shExpMatch(host, "*depositphotos.com") ||
        shExpMatch(host, "*disconnect.me") ||
        shExpMatch(host, "*documentingreality.com") ||
        shExpMatch(host, "*doubibackup.com") ||
        shExpMatch(host, "*doubmirror.cf") ||
        shExpMatch(host, "*encyclopedia.com") ||
        shExpMatch(host, "*fangeqiang.com") ||
        shExpMatch(host, "*fanqiangdang.com") ||
        shExpMatch(host, "*feedly.com") ||
        shExpMatch(host, "*feedx.net") ||
        shExpMatch(host, "*flyzy2005.com") ||
        shExpMatch(host, "*foreignpolicy.com") ||
        shExpMatch(host, "*free-ss.site") ||
        shExpMatch(host, "*freehongkong.org") ||
        shExpMatch(host, "*blog.fuckgfw233.org") ||
        shExpMatch(host, "*g0v.social") ||
        shExpMatch(host, "*globalvoices.org") ||
        shExpMatch(host, "*glorystar.me") ||
        shExpMatch(host, "*goregrish.com") ||
        shExpMatch(host, "*guangnianvpn.com") ||
        shExpMatch(host, "*hanime.tv") ||
        shExpMatch(host, "*hbo.com") ||
        shExpMatch(host, "*spaces.hightail.com") ||
        shExpMatch(host, "*hkgalden.com") ||
        shExpMatch(host, "*hkgolden.com") ||
        shExpMatch(host, "*hudson.org") ||
        shExpMatch(host, "*ipfs.io") ||
        shExpMatch(host, "*japantimes.co.jp") ||
        shExpMatch(host, "*jiji.com") ||
        shExpMatch(host, "*jintian.net") ||
        shExpMatch(host, "*jinx.com") ||
        shExpMatch(host, "*joinmastodon.org") ||
        shExpMatch(host, "*liangzhichuanmei.com") ||
        shExpMatch(host, "*lighti.me") ||
        shExpMatch(host, "*lightyearvpn.com") ||
        shExpMatch(host, "*lihkg.com") ||
        shExpMatch(host, "*line-scdn.net") ||
        shExpMatch(host, "*i.lithium.com") ||
        shExpMatch(host, "*cloud.mail.ru") ||
        shExpMatch(host, "*cdn-images.mailchimp.com") ||
        shExpMatch(host, "*mastodon.cloud") ||
        shExpMatch(host, "*mastodon.host") ||
        shExpMatch(host, "*mastodon.social") ||
        shExpMatch(host, "*mastodon.xyz") ||
        shExpMatch(host, "*matters.news") ||
        shExpMatch(host, "*me.me") ||
        shExpMatch(host, "*metart.com") ||
        shExpMatch(host, "*mohu.club") ||
        shExpMatch(host, "*mohu.ml") ||
        shExpMatch(host, "*motiyun.com") ||
        shExpMatch(host, "*msa-it.org") ||
        shExpMatch(host, "*goo.ne.jp") ||
        shExpMatch(host, "*go.nesnode.com") ||
        shExpMatch(host, "*international-news.newsmagazine.asia") ||
        shExpMatch(host, "*nikkei.com") ||
        shExpMatch(host, "*nitter.cc") ||
        shExpMatch(host, "*nitter.net") ||
        shExpMatch(host, "*niu.moe") ||
        shExpMatch(host, "*nofile.io") ||
        shExpMatch(host, "*now.com") ||
        shExpMatch(host, "*openvpn.org") ||
        shExpMatch(host, "*onejav.com") ||
        shExpMatch(host, "*paste.ee") ||
        shExpMatch(host, "*my.pcloud.com") ||
        shExpMatch(host, "*picacomic.com") ||
        shExpMatch(host, "*pincong.rocks") ||
        shExpMatch(host, "*pixiv.net") ||
        shExpMatch(host, "*potato.im") ||
        shExpMatch(host, "*premproxy.com") ||
        shExpMatch(host, "*prism-break.org") ||
        shExpMatch(host, "*proton.me") ||
        shExpMatch(host, "*protonvpn.com") ||
        shExpMatch(host, "*api.pureapk.com") ||
        shExpMatch(host, "*quora.com") ||
        shExpMatch(host, "*quoracdn.net") ||
        shExpMatch(host, "*qz.com") ||
        shExpMatch(host, "*cdn.seatguru.com") ||
        shExpMatch(host, "*secure.raxcdn.com") ||
        shExpMatch(host, "*redd.it") ||
        shExpMatch(host, "*reddit.com") ||
        url.indexOf(".redditlist.com") !== -1 ||
        url.indexOf("http://redditlist.com") === 0 ||
        shExpMatch(host, "*redditmedia.com") ||
        shExpMatch(host, "*redditstatic.com") ||
        shExpMatch(host, "*rixcloud.com") ||
        shExpMatch(host, "*rixcloud.us") ||
        shExpMatch(host, "*rsdlmonitor.com") ||
        shExpMatch(host, "*shadowsocks.be") ||
        shExpMatch(host, "*shadowsocks9.com") ||
        shExpMatch(host, "*tn1.shemalez.com") ||
        shExpMatch(host, "*tn2.shemalez.com") ||
        shExpMatch(host, "*tn3.shemalez.com") ||
        shExpMatch(host, "*static.shemalez.com") ||
        shExpMatch(host, "*six-degrees.io") ||
        shExpMatch(host, "*softfamous.com") ||
        shExpMatch(host, "*softsmirror.cf") ||
        shExpMatch(host, "*sosreader.com") ||
        shExpMatch(host, "*sspanel.net") ||
        shExpMatch(host, "*sulian.me") ||
        shExpMatch(host, "*supchina.com") ||
        shExpMatch(host, "*teddysun.com") ||
        shExpMatch(host, "*textnow.me") ||
        shExpMatch(host, "*tineye.com") ||
        shExpMatch(host, "*top10vpn.com") ||
        shExpMatch(host, "*tubepornclassic.com") ||
        shExpMatch(host, "*uku.im") ||
        shExpMatch(host, "*unseen.is") ||
        shExpMatch(host, "*cn.uptodown.com") ||
        shExpMatch(host, "*uraban.me") ||
        shExpMatch(host, "*vrsmash.com") ||
        shExpMatch(host, "*vultryhw.com") ||
        shExpMatch(host, "*scache.vzw.com") ||
        shExpMatch(host, "*scache1.vzw.com") ||
        shExpMatch(host, "*scache2.vzw.com") ||
        shExpMatch(host, "*ss7.vzw.com") ||
        shExpMatch(host, "*ssr.tools") ||
        shExpMatch(host, "*steemit.com") ||
        shExpMatch(host, "*taiwanjustice.net") ||
        shExpMatch(host, "*tinc-vpn.org") ||
        shExpMatch(host, "*u15.info") ||
        shExpMatch(host, "*washingtonpost.com") ||
        shExpMatch(host, "*wenzhao.ca") ||
        shExpMatch(host, "*whatsonweibo.com") ||
        shExpMatch(host, "*wire.com") ||
        shExpMatch(host, "*blog.workflow.is") ||
        shExpMatch(host, "*xm.com") ||
        shExpMatch(host, "*xuehua.us") ||
        shExpMatch(host, "*yes-news.com") ||
        shExpMatch(host, "*yigeni.com") ||
        shExpMatch(host, "*you-get.org") ||
        shExpMatch(host, "*zzcloud.me") ||
        shExpMatch(host, "*aex.com") ||
        shExpMatch(host, "*allcoin.com") ||
        shExpMatch(host, "*adcex.com") ||
        shExpMatch(host, "*bcex.ca") ||
        shExpMatch(host, "*bibox.com") ||
        shExpMatch(host, "*big.one") ||
        shExpMatch(host, "*bigone.com") ||
        shExpMatch(host, "*binance.com") ||
        shExpMatch(host, "*bit-z.com") ||
        shExpMatch(host, "*bitz.ai") ||
        shExpMatch(host, "*bitbay.net") ||
        shExpMatch(host, "*bitcoinworld.com") ||
        shExpMatch(host, "*bitfinex.com") ||
        shExpMatch(host, "*bithumb.com") ||
        shExpMatch(host, "*bitinka.com.ar") ||
        shExpMatch(host, "*bitmex.com") ||
        shExpMatch(host, "*bnbstatic.com") ||
        shExpMatch(host, "*btc98.com") ||
        shExpMatch(host, "*btcbank.bank") ||
        shExpMatch(host, "*btctrade.im") ||
        shExpMatch(host, "*bybit.com") ||
        shExpMatch(host, "*c2cx.com") ||
        shExpMatch(host, "*chaoex.com") ||
        shExpMatch(host, "*cobinhood.com") ||
        shExpMatch(host, "*coin2co.in") ||
        shExpMatch(host, "*coinbene.com") ||
        url.indexOf(".coinegg.com") !== -1 ||
        shExpMatch(host, "*coinegg.com") ||
        shExpMatch(host, "*coinex.com") ||
        shExpMatch(host, "*coingecko.com") ||
        shExpMatch(host, "*coingi.com") ||
        shExpMatch(host, "*coinmarketcap.com") ||
        shExpMatch(host, "*coinrail.co.kr") ||
        shExpMatch(host, "*cointiger.com") ||
        shExpMatch(host, "*cointobe.com") ||
        shExpMatch(host, "*coinut.com") ||
        shExpMatch(host, "*discoins.com") ||
        shExpMatch(host, "*dragonex.io") ||
        shExpMatch(host, "*ebtcbank.com") ||
        shExpMatch(host, "*etherdelta.com") ||
        shExpMatch(host, "*ethermine.org") ||
        shExpMatch(host, "*etherscan.io") ||
        shExpMatch(host, "*exmo.com") ||
        shExpMatch(host, "*exrates.me") ||
        shExpMatch(host, "*exx.com") ||
        shExpMatch(host, "*f2pool.com") ||
        shExpMatch(host, "*fatbtc.com") ||
        shExpMatch(host, "*ftx.com") ||
        shExpMatch(host, "*gate.io") ||
        shExpMatch(host, "*gatecoin.com") ||
        shExpMatch(host, "*hbg.com") ||
        shExpMatch(host, "*hitbtc.com") ||
        shExpMatch(host, "*hotcoin.com") ||
        shExpMatch(host, "*huobi.co") ||
        shExpMatch(host, "*huobi.com") ||
        shExpMatch(host, "*huobi.me") ||
        shExpMatch(host, "*huobi.pro") ||
        shExpMatch(host, "*huobi.sc") ||
        shExpMatch(host, "*huobipro.com") ||
        shExpMatch(host, "*bx.in.th") ||
        shExpMatch(host, "*jex.com") ||
        shExpMatch(host, "*kex.com") ||
        shExpMatch(host, "*kraken.com") ||
        shExpMatch(host, "*kspcoin.com") ||
        shExpMatch(host, "*kucoin.com") ||
        shExpMatch(host, "*lbank.info") ||
        shExpMatch(host, "*liquiditytp.com") ||
        shExpMatch(host, "*livecoin.net") ||
        shExpMatch(host, "*localbitcoins.com") ||
        shExpMatch(host, "*mercatox.com") ||
        shExpMatch(host, "*oanda.com") ||
        shExpMatch(host, "*obyte.org") ||
        shExpMatch(host, "*oex.com") ||
        shExpMatch(host, "*okex.com") ||
        shExpMatch(host, "*okx.com") ||
        shExpMatch(host, "*opensea.io") ||
        shExpMatch(host, "*otcbtc.com") ||
        shExpMatch(host, "*paxful.com") ||
        shExpMatch(host, "*poolin.com") ||
        shExpMatch(host, "*rightbtc.com") ||
        shExpMatch(host, "*solv.finance") ||
        shExpMatch(host, "*topbtc.com") ||
        shExpMatch(host, "*tronscan.org") ||
        shExpMatch(host, "*xbtce.com") ||
        shExpMatch(host, "*yobit.net") ||
        shExpMatch(host, "*zb.com") ||
        shExpMatch(host, "*read01.com") ||
        shExpMatch(host, "*kknews.cc") ||
        url.indexOf("china-mmm.jp.net") !== -1 ||
        url.indexOf(".lsxszzg.com") !== -1 ||
        url.indexOf(".china-mmm.net") !== -1 ||
        shExpMatch(host, "*china-mmm.net") ||
        url.indexOf("china-mmm.sa.com") !== -1 ||
        url.indexOf(".allowed.org") !== -1 ||
        url.indexOf(".now.im") !== -1 ||
        shExpMatch(host, "*amazon.co.jp") ||
        url.indexOf(".amazon.com/Dalai-Lama") !== -1 ||
        url.indexOf("amazon.com/Prisoner-State-Secret-Journal-Premier") !== -1 ||
        url.indexOf("s3-ap-northeast-1.amazonaws.com") !== -1 ||
        shExpMatch(host, "*aolchannels.aol.com") ||
        url.indexOf("video.aol.ca/video-detail") !== -1 ||
        url.indexOf("video.aol.co.uk/video-detail") !== -1 ||
        url.indexOf("video.aol.com") !== -1 ||
        shExpMatch(host, "*video.aol.com") ||
        shExpMatch(host, "*search.aol.com") ||
        url.indexOf("www.aolnews.com") !== -1 ||
        url.indexOf(".avmo.pw") !== -1 ||
        url.indexOf(".avmoo.com") !== -1 ||
        url.indexOf("http://avmoo.com") === 0 ||
        url.indexOf(".avmoo.net") !== -1 ||
        url.indexOf("http://avmoo.net") === 0 ||
        shExpMatch(host, "*avmoo.pw") ||
        url.indexOf(".javmoo.xyz") !== -1 ||
        url.indexOf("http://javmoo.xyz") === 0 ||
        url.indexOf(".javtag.com") !== -1 ||
        url.indexOf("http://javtag.com") === 0 ||
        url.indexOf(".javzoo.com") !== -1 ||
        url.indexOf("http://javzoo.com") === 0 ||
        url.indexOf(".tellme.pw") !== -1 ||
        url.indexOf(".bbc.com") !== -1 ||
        shExpMatch(host, "*bbc.com") ||
        url.indexOf(".bbc.co.uk") !== -1 ||
        shExpMatch(host, "*bbc.co.uk") ||
        shExpMatch(host, "*bbci.co.uk") ||
        url.indexOf(".bbcchinese.com") !== -1 ||
        shExpMatch(host, "*bbcchinese.com") ||
        url.indexOf("http://bbc.in") === 0 ||
        url.indexOf(".bloomberg.cn") !== -1 ||
        shExpMatch(host, "*bloomberg.cn") ||
        url.indexOf(".bloomberg.com") !== -1 ||
        shExpMatch(host, "*bloomberg.com") ||
        url.indexOf("bloomberg.de") !== -1 ||
        shExpMatch(host, "*bloomberg.de") ||
        shExpMatch(host, "*bloombergview.com") ||
        url.indexOf(".businessweek.com") !== -1 ||
        url.indexOf(".1dumb.com") !== -1 ||
        url.indexOf(".25u.com") !== -1 ||
        url.indexOf(".2waky.com") !== -1 ||
        url.indexOf(".3-a.net") !== -1 ||
        url.indexOf(".4dq.com") !== -1 ||
        url.indexOf(".4mydomain.com") !== -1 ||
        url.indexOf(".4pu.com") !== -1 ||
        url.indexOf(".acmetoy.com") !== -1 ||
        url.indexOf(".almostmy.com") !== -1 ||
        url.indexOf(".americanunfinished.com") !== -1 ||
        url.indexOf(".authorizeddns.net") !== -1 ||
        url.indexOf(".authorizeddns.org") !== -1 ||
        url.indexOf(".authorizeddns.us") !== -1 ||
        url.indexOf(".bigmoney.biz") !== -1 ||
        url.indexOf(".changeip.name") !== -1 ||
        url.indexOf(".changeip.net") !== -1 ||
        url.indexOf(".changeip.org") !== -1 ||
        url.indexOf(".cleansite.biz") !== -1 ||
        url.indexOf(".cleansite.info") !== -1 ||
        url.indexOf(".cleansite.us") !== -1 ||
        url.indexOf(".compress.to") !== -1 ||
        url.indexOf(".ddns.info") !== -1 ||
        url.indexOf(".ddns.me.uk") !== -1 ||
        url.indexOf(".ddns.mobi") !== -1 ||
        url.indexOf(".ddns.ms") !== -1 ||
        url.indexOf(".ddns.name") !== -1 ||
        url.indexOf(".ddns.us") !== -1 ||
        url.indexOf(".dhcp.biz") !== -1 ||
        url.indexOf(".dns-dns.com") !== -1 ||
        url.indexOf(".dns-stuff.com") !== -1 ||
        url.indexOf(".dns04.com") !== -1 ||
        url.indexOf(".dns05.com") !== -1 ||
        url.indexOf(".dns1.us") !== -1 ||
        url.indexOf(".dns2.us") !== -1 ||
        url.indexOf(".dnset.com") !== -1 ||
        url.indexOf(".dnsrd.com") !== -1 ||
        url.indexOf(".dsmtp.com") !== -1 ||
        url.indexOf(".dumb1.com") !== -1 ||
        url.indexOf(".dynamic-dns.net") !== -1 ||
        url.indexOf(".dynamicdns.biz") !== -1 ||
        url.indexOf(".dynamicdns.co.uk") !== -1 ||
        url.indexOf(".dynamicdns.me.uk") !== -1 ||
        url.indexOf(".dynamicdns.org.uk") !== -1 ||
        url.indexOf(".dyndns.pro") !== -1 ||
        url.indexOf(".dynssl.com") !== -1 ||
        url.indexOf(".edns.biz") !== -1 ||
        url.indexOf(".epac.to") !== -1 ||
        url.indexOf(".esmtp.biz") !== -1 ||
        url.indexOf(".ezua.com") !== -1 ||
        url.indexOf(".faqserv.com") !== -1 ||
        url.indexOf(".fartit.com") !== -1 ||
        url.indexOf(".freeddns.com") !== -1 ||
        url.indexOf(".freetcp.com") !== -1 ||
        url.indexOf(".freewww.biz") !== -1 ||
        url.indexOf(".freewww.info") !== -1 ||
        url.indexOf(".ftp1.biz") !== -1 ||
        url.indexOf(".ftpserver.biz") !== -1 ||
        url.indexOf(".gettrials.com") !== -1 ||
        url.indexOf(".got-game.org") !== -1 ||
        url.indexOf(".gr8domain.biz") !== -1 ||
        url.indexOf(".gr8name.biz") !== -1 ||
        url.indexOf(".https443.net") !== -1 ||
        url.indexOf(".https443.org") !== -1 ||
        url.indexOf(".ikwb.com") !== -1 ||
        url.indexOf(".instanthq.com") !== -1 ||
        url.indexOf(".iownyour.biz") !== -1 ||
        url.indexOf(".iownyour.org") !== -1 ||
        url.indexOf(".isasecret.com") !== -1 ||
        url.indexOf(".itemdb.com") !== -1 ||
        url.indexOf(".itsaol.com") !== -1 ||
        url.indexOf(".jetos.com") !== -1 ||
        url.indexOf(".jkub.com") !== -1 ||
        url.indexOf(".jungleheart.com") !== -1 ||
        url.indexOf(".justdied.com") !== -1 ||
        url.indexOf(".lflink.com") !== -1 ||
        url.indexOf(".lflinkup.com") !== -1 ||
        url.indexOf(".lflinkup.net") !== -1 ||
        url.indexOf(".lflinkup.org") !== -1 ||
        url.indexOf(".longmusic.com") !== -1 ||
        url.indexOf(".mefound.com") !== -1 ||
        url.indexOf(".moneyhome.biz") !== -1 ||
        url.indexOf(".mrbasic.com") !== -1 ||
        url.indexOf(".mrbonus.com") !== -1 ||
        url.indexOf(".mrface.com") !== -1 ||
        url.indexOf(".mrslove.com") !== -1 ||
        url.indexOf(".my03.com") !== -1 ||
        url.indexOf(".mydad.info") !== -1 ||
        url.indexOf(".myddns.com") !== -1 ||
        url.indexOf(".myftp.info") !== -1 ||
        url.indexOf(".myftp.name") !== -1 ||
        url.indexOf(".mylftv.com") !== -1 ||
        url.indexOf(".mymom.info") !== -1 ||
        url.indexOf(".mynetav.net") !== -1 ||
        url.indexOf(".mynetav.org") !== -1 ||
        url.indexOf(".mynumber.org") !== -1 ||
        url.indexOf(".mypicture.info") !== -1 ||
        url.indexOf(".mypop3.net") !== -1 ||
        url.indexOf(".mypop3.org") !== -1 ||
        url.indexOf(".mysecondarydns.com") !== -1 ||
        url.indexOf(".mywww.biz") !== -1 ||
        url.indexOf(".myz.info") !== -1 ||
        url.indexOf(".ninth.biz") !== -1 ||
        url.indexOf(".ns01.biz") !== -1 ||
        url.indexOf(".ns01.info") !== -1 ||
        url.indexOf(".ns01.us") !== -1 ||
        url.indexOf(".ns02.biz") !== -1 ||
        url.indexOf(".ns02.info") !== -1 ||
        url.indexOf(".ns02.us") !== -1 ||
        url.indexOf(".ns1.name") !== -1 ||
        url.indexOf(".ns2.name") !== -1 ||
        url.indexOf(".ns3.name") !== -1 ||
        url.indexOf(".ocry.com") !== -1 ||
        url.indexOf(".onedumb.com") !== -1 ||
        url.indexOf(".onmypc.biz") !== -1 ||
        url.indexOf(".onmypc.info") !== -1 ||
        url.indexOf(".onmypc.net") !== -1 ||
        url.indexOf(".onmypc.org") !== -1 ||
        url.indexOf(".onmypc.us") !== -1 ||
        url.indexOf(".organiccrap.com") !== -1 ||
        url.indexOf(".otzo.com") !== -1 ||
        url.indexOf(".ourhobby.com") !== -1 ||
        url.indexOf(".pcanywhere.net") !== -1 ||
        url.indexOf(".port25.biz") !== -1 ||
        url.indexOf(".proxydns.com") !== -1 ||
        url.indexOf(".qhigh.com") !== -1 ||
        url.indexOf(".qpoe.com") !== -1 ||
        url.indexOf(".rebatesrule.net") !== -1 ||
        url.indexOf(".sellclassics.com") !== -1 ||
        url.indexOf(".sendsmtp.com") !== -1 ||
        url.indexOf(".serveuser.com") !== -1 ||
        url.indexOf(".serveusers.com") !== -1 ||
        url.indexOf(".sexidude.com") !== -1 ||
        url.indexOf(".sexxxy.biz") !== -1 ||
        url.indexOf(".sixth.biz") !== -1 ||
        url.indexOf(".squirly.info") !== -1 ||
        url.indexOf(".ssl443.org") !== -1 ||
        url.indexOf(".toh.info") !== -1 ||
        url.indexOf(".toythieves.com") !== -1 ||
        url.indexOf(".trickip.net") !== -1 ||
        url.indexOf(".trickip.org") !== -1 ||
        url.indexOf(".vizvaz.com") !== -1 ||
        url.indexOf(".wha.la") !== -1 ||
        url.indexOf(".wikaba.com") !== -1 ||
        url.indexOf(".www1.biz") !== -1 ||
        url.indexOf(".wwwhost.biz") !== -1 ||
        url.indexOf("@@|http://xx.wwwhost.biz") !== -1 ||
        url.indexOf(".x24hr.com") !== -1 ||
        url.indexOf(".xxuz.com") !== -1 ||
        url.indexOf(".xxxy.biz") !== -1 ||
        url.indexOf(".xxxy.info") !== -1 ||
        url.indexOf(".ygto.com") !== -1 ||
        url.indexOf(".youdontcare.com") !== -1 ||
        url.indexOf(".yourtrap.com") !== -1 ||
        url.indexOf(".zyns.com") !== -1 ||
        url.indexOf(".zzux.com") !== -1 ||
        url.indexOf("d1b183sg0nvnuh.cloudfront.net") !== -1 ||
        url.indexOf("https://d1b183sg0nvnuh.cloudfront.net") === 0 ||
        url.indexOf("d1c37gjwa26taa.cloudfront.net") !== -1 ||
        url.indexOf("https://d1c37gjwa26taa.cloudfront.net") === 0 ||
        url.indexOf("d3c33hcgiwev3.cloudfront.net") !== -1 ||
        url.indexOf("https://d3c33hcgiwev3.cloudfront.net") === 0 ||
        shExpMatch(host, "*d3rhr7kgmtrq1v.cloudfront.net") ||
        url.indexOf(".3d-game.com") !== -1 ||
        url.indexOf(".4irc.com") !== -1 ||
        url.indexOf(".b0ne.com") !== -1 ||
        url.indexOf(".chatnook.com") !== -1 ||
        url.indexOf(".darktech.org") !== -1 ||
        url.indexOf(".deaftone.com") !== -1 ||
        url.indexOf(".dtdns.net") !== -1 ||
        url.indexOf(".effers.com") !== -1 ||
        url.indexOf(".etowns.net") !== -1 ||
        url.indexOf(".etowns.org") !== -1 ||
        url.indexOf(".flnet.org") !== -1 ||
        url.indexOf(".gotgeeks.com") !== -1 ||
        url.indexOf(".scieron.com") !== -1 ||
        url.indexOf(".slyip.com") !== -1 ||
        url.indexOf(".slyip.net") !== -1 ||
        url.indexOf(".suroot.com") !== -1 ||
        url.indexOf(".blogdns.org") !== -1 ||
        url.indexOf(".dyndns.org") !== -1 ||
        url.indexOf(".dyndns-ip.com") !== -1 ||
        url.indexOf(".dyndns-pics.com") !== -1 ||
        url.indexOf(".from-sd.com") !== -1 ||
        url.indexOf(".from-pr.com") !== -1 ||
        url.indexOf(".is-a-hunter.com") !== -1 ||
        url.indexOf(".dynu.com") !== -1 ||
        shExpMatch(host, "*dynu.com") ||
        url.indexOf(".dynu.net") !== -1 ||
        url.indexOf(".freeddns.org") !== -1 ||
        shExpMatch(host, "*accountkit.com") ||
        url.indexOf("cdninstagram.com") !== -1 ||
        shExpMatch(host, "*cdninstagram.com") ||
        shExpMatch(host, "*f8.com") ||
        shExpMatch(host, "*facebook.br") ||
        url.indexOf(".facebook.com") !== -1 ||
        shExpMatch(host, "*facebook.com") ||
        url.indexOf("@@||v6.facebook.com") !== -1 ||
        shExpMatch(host, "*facebook.design") ||
        shExpMatch(host, "*connect.facebook.net") ||
        shExpMatch(host, "*facebook.hu") ||
        shExpMatch(host, "*facebook.in") ||
        shExpMatch(host, "*facebook.nl") ||
        shExpMatch(host, "*facebook.se") ||
        shExpMatch(host, "*facebookmail.com") ||
        shExpMatch(host, "*fb.com") ||
        shExpMatch(host, "*fb.me") ||
        shExpMatch(host, "*fb.watch") ||
        shExpMatch(host, "*fbcdn.net") ||
        shExpMatch(host, "*fbsbx.com") ||
        shExpMatch(host, "*fbaddins.com") ||
        shExpMatch(host, "*fbworkmail.com") ||
        url.indexOf(".instagram.com") !== -1 ||
        shExpMatch(host, "*instagram.com") ||
        shExpMatch(host, "*m.me") ||
        shExpMatch(host, "*messenger.com") ||
        shExpMatch(host, "*oculus.com") ||
        shExpMatch(host, "*oculuscdn.com") ||
        shExpMatch(host, "*rocksdb.org") ||
        url.indexOf("@@||ip6.static.sl-reverse.com") !== -1 ||
        shExpMatch(host, "*parse.com") ||
        shExpMatch(host, "*thefacebook.com") ||
        shExpMatch(host, "*threads.net") ||
        shExpMatch(host, "*whatsapp.com") ||
        shExpMatch(host, "*whatsapp.net") ||
        shExpMatch(host, "*auntology.fandom.com") ||
        shExpMatch(host, "*hongkong.fandom.com") ||
        url.indexOf(".ftchinese.com") !== -1 ||
        shExpMatch(host, "*ftchinese.com") ||
        shExpMatch(host, "*1e100.net") ||
        shExpMatch(host, "*466453.com") ||
        shExpMatch(host, "*abc.xyz") ||
        shExpMatch(host, "*about.google") ||
        shExpMatch(host, "*admob.com") ||
        shExpMatch(host, "*adsense.com") ||
        shExpMatch(host, "*advertisercommunity.com") ||
        shExpMatch(host, "*agoogleaday.com") ||
        shExpMatch(host, "*ai.google") ||
        shExpMatch(host, "*ampproject.org") ||
        url.indexOf("@@|https://www.ampproject.org") !== -1 ||
        url.indexOf("@@|https://cdn.ampproject.org") !== -1 ||
        shExpMatch(host, "*android.com") ||
        shExpMatch(host, "*androidify.com") ||
        shExpMatch(host, "*androidtv.com") ||
        shExpMatch(host, "*api.ai") ||
        url.indexOf(".appspot.com") !== -1 ||
        shExpMatch(host, "*appspot.com") ||
        shExpMatch(host, "*autodraw.com") ||
        shExpMatch(host, "*blog.google") ||
        shExpMatch(host, "*blogblog.com") ||
        url.indexOf("blogspot.com") !== -1 ||
        /^https?:\/\/[^\/]+blogspot\.(.*)/.test(url) ||
        url.indexOf(".blogspot.hk") !== -1 ||
        url.indexOf(".blogspot.jp") !== -1 ||
        url.indexOf(".blogspot.tw") !== -1 ||
        shExpMatch(host, "*business.page") ||
        shExpMatch(host, "*certificate-transparency.org") ||
        shExpMatch(host, "*chrome.com") ||
        shExpMatch(host, "*chromecast.com") ||
        shExpMatch(host, "*chromeenterprise.google") ||
        shExpMatch(host, "*chromeexperiments.com") ||
        shExpMatch(host, "*chromercise.com") ||
        shExpMatch(host, "*chromestatus.com") ||
        shExpMatch(host, "*chromium.org") ||
        shExpMatch(host, "*cloudfunctions.net") ||
        shExpMatch(host, "*com.google") ||
        shExpMatch(host, "*crbug.com") ||
        shExpMatch(host, "*creativelab5.com") ||
        shExpMatch(host, "*crisisresponse.google") ||
        shExpMatch(host, "*crrev.com") ||
        shExpMatch(host, "*data-vocabulary.org") ||
        shExpMatch(host, "*debug.com") ||
        shExpMatch(host, "*deepmind.com") ||
        shExpMatch(host, "*deja.com") ||
        shExpMatch(host, "*design.google") ||
        shExpMatch(host, "*digisfera.com") ||
        shExpMatch(host, "*dns.google") ||
        shExpMatch(host, "*hub.docker.com") ||
        shExpMatch(host, "*domains.google") ||
        shExpMatch(host, "*duck.com") ||
        shExpMatch(host, "*environment.google") ||
        shExpMatch(host, "*feedburner.com") ||
        shExpMatch(host, "*firebaseio.com") ||
        shExpMatch(host, "*g.co") ||
        shExpMatch(host, "*gcr.io") ||
        shExpMatch(host, "*get.app") ||
        shExpMatch(host, "*get.dev") ||
        shExpMatch(host, "*get.how") ||
        shExpMatch(host, "*get.page") ||
        shExpMatch(host, "*getmdl.io") ||
        shExpMatch(host, "*getoutline.org") ||
        shExpMatch(host, "*ggpht.com") ||
        shExpMatch(host, "*gmail.com") ||
        shExpMatch(host, "*gmodules.com") ||
        shExpMatch(host, "*godoc.org") ||
        shExpMatch(host, "*golang.org") ||
        shExpMatch(host, "*goo.gl") ||
        shExpMatch(host, "*goo.gle") ||
        url.indexOf(".google.ae") !== -1 ||
        url.indexOf(".google.as") !== -1 ||
        url.indexOf(".google.am") !== -1 ||
        url.indexOf(".google.at") !== -1 ||
        url.indexOf(".google.az") !== -1 ||
        url.indexOf(".google.ba") !== -1 ||
        url.indexOf(".google.be") !== -1 ||
        url.indexOf(".google.bg") !== -1 ||
        url.indexOf(".google.ca") !== -1 ||
        url.indexOf(".google.cd") !== -1 ||
        url.indexOf(".google.ci") !== -1 ||
        url.indexOf(".google.co.id") !== -1 ||
        url.indexOf(".google.co.jp") !== -1 ||
        url.indexOf(".google.co.kr") !== -1 ||
        url.indexOf(".google.co.ma") !== -1 ||
        url.indexOf(".google.co.uk") !== -1 ||
        url.indexOf(".google.com") !== -1 ||
        url.indexOf(".google.de") !== -1 ||
        shExpMatch(host, "*google.dev") ||
        url.indexOf(".google.dj") !== -1 ||
        url.indexOf(".google.dk") !== -1 ||
        url.indexOf(".google.es") !== -1 ||
        url.indexOf(".google.fi") !== -1 ||
        url.indexOf(".google.fm") !== -1 ||
        url.indexOf(".google.fr") !== -1 ||
        url.indexOf(".google.gg") !== -1 ||
        url.indexOf(".google.gl") !== -1 ||
        url.indexOf(".google.gr") !== -1 ||
        url.indexOf(".google.ie") !== -1 ||
        url.indexOf(".google.is") !== -1 ||
        url.indexOf(".google.it") !== -1 ||
        url.indexOf(".google.jo") !== -1 ||
        url.indexOf(".google.kz") !== -1 ||
        url.indexOf(".google.lv") !== -1 ||
        url.indexOf(".google.mn") !== -1 ||
        url.indexOf(".google.ms") !== -1 ||
        url.indexOf(".google.nl") !== -1 ||
        url.indexOf(".google.nu") !== -1 ||
        url.indexOf(".google.no") !== -1 ||
        url.indexOf(".google.ro") !== -1 ||
        url.indexOf(".google.ru") !== -1 ||
        url.indexOf(".google.rw") !== -1 ||
        url.indexOf(".google.sc") !== -1 ||
        url.indexOf(".google.sh") !== -1 ||
        url.indexOf(".google.sk") !== -1 ||
        url.indexOf(".google.sm") !== -1 ||
        url.indexOf(".google.sn") !== -1 ||
        url.indexOf(".google.tk") !== -1 ||
        url.indexOf(".google.tm") !== -1 ||
        url.indexOf(".google.to") !== -1 ||
        url.indexOf(".google.tt") !== -1 ||
        url.indexOf(".google.vu") !== -1 ||
        url.indexOf(".google.ws") !== -1 ||
        /^https?:\/\/([^\/]+\.)*google\.(ac|ad|ae|af|ai|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cat|cd|cf|cg|ch|ci|cl|cm|co.ao|co.bw|co.ck|co.cr|co.id|co.il|co.in|co.jp|co.ke|co.kr|co.ls|co.ma|com|com.af|com.ag|com.ai|com.ar|com.au|com.bd|com.bh|com.bn|com.bo|com.br|com.bz|com.co|com.cu|com.cy|com.do|com.ec|com.eg|com.et|com.fj|com.gh|com.gi|com.gt|com.hk|com.jm|com.kh|com.kw|com.lb|com.ly|com.mm|com.mt|com.mx|com.my|com.na|com.nf|com.ng|com.ni|com.np|com.om|com.pa|com.pe|com.pg|com.ph|com.pk|com.pr|com.py|com.qa|com.sa|com.sb|com.sg|com.sl|com.sv|com.tj|com.tr|com.tw|com.ua|com.uy|com.vc|com.vn|co.mz|co.nz|co.th|co.tz|co.ug|co.uk|co.uz|co.ve|co.vi|co.za|co.zm|co.zw|cv|cz|de|dj|dk|dm|dz|ee|es|eu|fi|fm|fr|ga|ge|gg|gl|gm|gp|gr|gy|hk|hn|hr|ht|hu|ie|im|iq|is|it|it.ao|je|jo|kg|ki|kz|la|li|lk|lt|lu|lv|md|me|mg|mk|ml|mn|ms|mu|mv|mw|mx|ne|nl|no|nr|nu|org|pl|pn|ps|pt|ro|rs|ru|rw|sc|se|sh|si|sk|sm|sn|so|sr|st|td|tg|tk|tl|tm|tn|to|tt|us|vg|vn|vu|ws)\/.*/.test(url) ||
        shExpMatch(host, "*googleapis.cn") ||
        shExpMatch(host, "*googleapis.com") ||
        shExpMatch(host, "*googleapps.com") ||
        shExpMatch(host, "*googleartproject.com") ||
        shExpMatch(host, "*googleblog.com") ||
        shExpMatch(host, "*googlebot.com") ||
        shExpMatch(host, "*googlechinawebmaster.com") ||
        shExpMatch(host, "*googlecode.com") ||
        shExpMatch(host, "*googlecommerce.com") ||
        shExpMatch(host, "*googledomains.com") ||
        shExpMatch(host, "*googlearth.com") ||
        shExpMatch(host, "*googleearth.com") ||
        shExpMatch(host, "*googledrive.com") ||
        shExpMatch(host, "*googlefiber.net") ||
        shExpMatch(host, "*googlegroups.com") ||
        shExpMatch(host, "*googlehosted.com") ||
        shExpMatch(host, "*googleideas.com") ||
        shExpMatch(host, "*googleinsidesearch.com") ||
        shExpMatch(host, "*googlelabs.com") ||
        shExpMatch(host, "*googlemail.com") ||
        shExpMatch(host, "*googlemashups.com") ||
        shExpMatch(host, "*googlepagecreator.com") ||
        shExpMatch(host, "*googleplay.com") ||
        shExpMatch(host, "*googleplus.com") ||
        shExpMatch(host, "*googlescholar.comUSA") ||
        shExpMatch(host, "*googlesource.com") ||
        shExpMatch(host, "*googleusercontent.com") ||
        url.indexOf(".googlevideo.com") !== -1 ||
        shExpMatch(host, "*googlevideo.com") ||
        shExpMatch(host, "*googleweblight.com") ||
        shExpMatch(host, "*googlezip.net") ||
        shExpMatch(host, "*groups.google.cn") ||
        shExpMatch(host, "*grow.google") ||
        shExpMatch(host, "*gstatic.com") ||
        shExpMatch(host, "*gvt0.com") ||
        shExpMatch(host, "*gvt1.com") ||
        url.indexOf("@@||redirector.gvt1.com") !== -1 ||
        shExpMatch(host, "*gvt3.com") ||
        shExpMatch(host, "*gwtproject.org") ||
        shExpMatch(host, "*html5rocks.com") ||
        shExpMatch(host, "*iam.soy") ||
        shExpMatch(host, "*igoogle.com") ||
        shExpMatch(host, "*itasoftware.com") ||
        shExpMatch(host, "*lers.google") ||
        shExpMatch(host, "*like.com") ||
        shExpMatch(host, "*madewithcode.com") ||
        shExpMatch(host, "*material.io") ||
        shExpMatch(host, "*nic.google") ||
        shExpMatch(host, "*on2.com") ||
        shExpMatch(host, "*opensource.google") ||
        shExpMatch(host, "*panoramio.com") ||
        shExpMatch(host, "*picasaweb.com") ||
        shExpMatch(host, "*pki.goog") ||
        shExpMatch(host, "*plus.codes") ||
        shExpMatch(host, "*polymer-project.org") ||
        shExpMatch(host, "*pride.google") ||
        shExpMatch(host, "*questvisual.com") ||
        shExpMatch(host, "*admin.recaptcha.net") ||
        shExpMatch(host, "*api.recaptcha.net") ||
        shExpMatch(host, "*api-secure.recaptcha.net") ||
        shExpMatch(host, "*api-verify.recaptcha.net") ||
        shExpMatch(host, "*redhotlabs.com") ||
        shExpMatch(host, "*registry.google") ||
        shExpMatch(host, "*research.google") ||
        shExpMatch(host, "*safety.google") ||
        shExpMatch(host, "*savethedate.foo") ||
        shExpMatch(host, "*schema.org") ||
        shExpMatch(host, "*shattered.io") ||
        url.indexOf("http://sipml5.org/") === 0 ||
        shExpMatch(host, "*stories.google") ||
        shExpMatch(host, "*sustainability.google") ||
        shExpMatch(host, "*synergyse.com") ||
        shExpMatch(host, "*teachparentstech.org") ||
        shExpMatch(host, "*tensorflow.org") ||
        shExpMatch(host, "*tfhub.dev") ||
        shExpMatch(host, "*thinkwithgoogle.com") ||
        shExpMatch(host, "*tiltbrush.com") ||
        shExpMatch(host, "*translate.goog") ||
        shExpMatch(host, "*tv.google") ||
        shExpMatch(host, "*urchin.com") ||
        shExpMatch(host, "*waveprotocol.org") ||
        shExpMatch(host, "*waymo.com") ||
        shExpMatch(host, "*web.dev") ||
        shExpMatch(host, "*webmproject.org") ||
        shExpMatch(host, "*webpkgcache.com") ||
        shExpMatch(host, "*webrtc.org") ||
        shExpMatch(host, "*whatbrowser.org") ||
        shExpMatch(host, "*widevine.com") ||
        shExpMatch(host, "*withgoogle.com") ||
        shExpMatch(host, "*withyoutube.com") ||
        shExpMatch(host, "*x.company") ||
        shExpMatch(host, "*xn--ngstr-lra8j.com") ||
        shExpMatch(host, "*youtu.be") ||
        url.indexOf(".youtube.com") !== -1 ||
        shExpMatch(host, "*youtube.com") ||
        shExpMatch(host, "*youtube-nocookie.com") ||
        shExpMatch(host, "*youtubeeducation.com") ||
        shExpMatch(host, "*youtubegaming.com") ||
        shExpMatch(host, "*youtubekids.com") ||
        shExpMatch(host, "*yt.be") ||
        shExpMatch(host, "*ytimg.com") ||
        shExpMatch(host, "*zynamics.com") ||
        shExpMatch(host, "*naughtyamerica.com") ||
        url.indexOf("static01.nyt.com") !== -1 ||
        shExpMatch(host, "*nyt.com") ||
        url.indexOf("nytchina.com") !== -1 ||
        url.indexOf("nytcn.me") !== -1 ||
        shExpMatch(host, "*nytcn.me") ||
        shExpMatch(host, "*nytco.com") ||
        url.indexOf("http://nyti.ms/") === 0 ||
        url.indexOf(".nytimes.com") !== -1 ||
        shExpMatch(host, "*nytimes.com") ||
        shExpMatch(host, "*nytimg.com") ||
        url.indexOf("userapi.nytlog.com") !== -1 ||
        url.indexOf("cn.nytstyle.com") !== -1 ||
        shExpMatch(host, "*nytstyle.com") ||
        url.indexOf(".steamcommunity.com") !== -1 ||
        shExpMatch(host, "*steamcommunity.com") ||
        shExpMatch(host, "*store.steampowered.com") ||
        shExpMatch(host, "*cdn-telegram.org") ||
        shExpMatch(host, "*comments.app") ||
        shExpMatch(host, "*graph.org") ||
        shExpMatch(host, "*quiz.directory") ||
        shExpMatch(host, "*t.me") ||
        shExpMatch(host, "*updates.tdesktop.com") ||
        shExpMatch(host, "*telegram.dog") ||
        shExpMatch(host, "*telegram.me") ||
        shExpMatch(host, "*telegram.org") ||
        shExpMatch(host, "*telegram.space") ||
        shExpMatch(host, "*telegram-cdn.org") ||
        shExpMatch(host, "*telegramdownload.com") ||
        shExpMatch(host, "*telegra.ph") ||
        shExpMatch(host, "*telesco.pe") ||
        shExpMatch(host, "*jtvnw.net") ||
        shExpMatch(host, "*ttvnw.net") ||
        shExpMatch(host, "*twitch.tv") ||
        shExpMatch(host, "*twitchcdn.net") ||
        shExpMatch(host, "*periscope.tv") ||
        url.indexOf(".pscp.tv") !== -1 ||
        shExpMatch(host, "*pscp.tv") ||
        url.indexOf(".t.co") !== -1 ||
        shExpMatch(host, "*t.co") ||
        url.indexOf(".tweetdeck.com") !== -1 ||
        shExpMatch(host, "*tweetdeck.com") ||
        shExpMatch(host, "*twimg.com") ||
        url.indexOf(".twitpic.com") !== -1 ||
        shExpMatch(host, "*twitpic.com") ||
        url.indexOf(".twitter.com") !== -1 ||
        shExpMatch(host, "*twitter.com") ||
        shExpMatch(host, "*twitter.jp") ||
        shExpMatch(host, "*vine.co") ||
        shExpMatch(host, "*x.com") ||
        shExpMatch(host, "*gov.taipei") ||
        url.indexOf(".gov.tw") !== -1 ||
        url.indexOf("https://aiss.anws.gov.tw") === 0 ||
        shExpMatch(host, "*archives.gov.tw") ||
        shExpMatch(host, "*tacc.cwb.gov.tw") ||
        shExpMatch(host, "*data.gov.tw") ||
        shExpMatch(host, "*epa.gov.tw") ||
        shExpMatch(host, "*fa.gov.tw") ||
        shExpMatch(host, "*fda.gov.tw") ||
        shExpMatch(host, "*hpa.gov.tw") ||
        shExpMatch(host, "*immigration.gov.tw") ||
        shExpMatch(host, "*itaiwan.gov.tw") ||
        shExpMatch(host, "*li.taipei") ||
        shExpMatch(host, "*mjib.gov.tw") ||
        shExpMatch(host, "*moeaic.gov.tw") ||
        shExpMatch(host, "*mofa.gov.tw") ||
        shExpMatch(host, "*mol.gov.tw") ||
        shExpMatch(host, "*mvdis.gov.tw") ||
        shExpMatch(host, "*nat.gov.tw") ||
        shExpMatch(host, "*nhi.gov.tw") ||
        shExpMatch(host, "*npa.gov.tw") ||
        shExpMatch(host, "*nsc.gov.tw") ||
        shExpMatch(host, "*ntbk.gov.tw") ||
        shExpMatch(host, "*ntbna.gov.tw") ||
        shExpMatch(host, "*ntbt.gov.tw") ||
        shExpMatch(host, "*ntsna.gov.tw") ||
        shExpMatch(host, "*pcc.gov.tw") ||
        shExpMatch(host, "*stat.gov.tw") ||
        shExpMatch(host, "*taipei.gov.tw") ||
        shExpMatch(host, "*taiwanjobs.gov.tw") ||
        shExpMatch(host, "*thb.gov.tw") ||
        shExpMatch(host, "*tipo.gov.tw") ||
        shExpMatch(host, "*wda.gov.tw") ||
        shExpMatch(host, "*teco-hk.org") ||
        shExpMatch(host, "*teco-mo.org") ||
        url.indexOf("@@||aftygh.gov.tw") !== -1 ||
        url.indexOf("@@||aide.gov.tw") !== -1 ||
        url.indexOf("@@||tpde.aide.gov.tw") !== -1 ||
        url.indexOf("@@||arte.gov.tw") !== -1 ||
        url.indexOf("@@||chukuang.gov.tw") !== -1 ||
        url.indexOf("@@||cwb.gov.tw") !== -1 ||
        url.indexOf("@@||cycab.gov.tw") !== -1 ||
        url.indexOf("@@||dbnsa.gov.tw") !== -1 ||
        url.indexOf("@@||df.gov.tw") !== -1 ||
        url.indexOf("@@||eastcoast-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||erv-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||grb.gov.tw") !== -1 ||
        url.indexOf("@@||gysd.nyc.gov.tw") !== -1 ||
        url.indexOf("@@||hchcc.gov.tw") !== -1 ||
        url.indexOf("@@||hsinchu-cc.gov.tw") !== -1 ||
        url.indexOf("@@||iner.gov.tw") !== -1 ||
        url.indexOf("@@||klsio.gov.tw") !== -1 ||
        url.indexOf("@@||kmseh.gov.tw") !== -1 ||
        url.indexOf("@@||lungtanhr.gov.tw") !== -1 ||
        url.indexOf("@@||maolin-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||matsu-news.gov.tw") !== -1 ||
        url.indexOf("@@||matsu-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||matsucc.gov.tw") !== -1 ||
        url.indexOf("@@||moe.gov.tw") !== -1 ||
        url.indexOf("@@||nankan.gov.tw") !== -1 ||
        url.indexOf("@@||ncree.gov.tw") !== -1 ||
        url.indexOf("@@||necoast-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||siraya-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||cromotc.nat.gov.tw") !== -1 ||
        url.indexOf("@@||tax.nat.gov.tw") !== -1 ||
        url.indexOf("@@||necoast-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||ner.gov.tw") !== -1 ||
        url.indexOf("@@||nmmba.gov.tw") !== -1 ||
        url.indexOf("@@||nmp.gov.tw") !== -1 ||
        url.indexOf("@@||nmvttc.gov.tw") !== -1 ||
        url.indexOf("@@||northguan-nsa.gov.tw") !== -1 ||
        shExpMatch(host, "*npm.gov.tw") ||
        url.indexOf("@@||nstm.gov.tw") !== -1 ||
        url.indexOf("@@||ntdmh.gov.tw") !== -1 ||
        url.indexOf("@@||ntl.gov.tw") !== -1 ||
        url.indexOf("@@||ntsec.gov.tw") !== -1 ||
        url.indexOf("@@||ntuh.gov.tw") !== -1 ||
        url.indexOf("@@||nvri.gov.tw") !== -1 ||
        url.indexOf("@@||penghu-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||post.gov.tw") !== -1 ||
        url.indexOf("@@||siraya-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||stdtime.gov.tw") !== -1 ||
        url.indexOf("@@||sunmoonlake.gov.tw") !== -1 ||
        url.indexOf("@@||taitung-house.gov.tw") !== -1 ||
        url.indexOf("@@||taoyuan.gov.tw") !== -1 ||
        url.indexOf("@@||tphcc.gov.tw") !== -1 ||
        url.indexOf("@@||trimt-nsa.gov.tw") !== -1 ||
        url.indexOf("@@||vghtpe.gov.tw") !== -1 ||
        url.indexOf("@@||vghks.gov.tw") !== -1 ||
        url.indexOf("@@||vghtc.gov.tw") !== -1 ||
        url.indexOf("@@||wanfang.gov.tw") !== -1 ||
        url.indexOf("@@||yatsen.gov.tw") !== -1 ||
        url.indexOf("@@||yda.gov.tw") !== -1 ||
        shExpMatch(host, "*kinmen.org.tw") ||
        url.indexOf("http://www.americorps.gov") === 0 ||
        shExpMatch(host, "*jpl.nasa.gov") ||
        shExpMatch(host, "*pds.nasa.gov") ||
        shExpMatch(host, "*solarsystem.nasa.gov") ||
        url.indexOf("iipdigital.usembassy.gov") !== -1 ||
        shExpMatch(host, "*usfk.mil") ||
        shExpMatch(host, "*usmc.mil") ||
        url.indexOf("http://tarr.uspto.gov/") === 0 ||
        shExpMatch(host, "*tsdr.uspto.gov") ||
        shExpMatch(host, "*v2ex.com") ||
        url.indexOf("cn.voa.mobi") !== -1 ||
        url.indexOf("tw.voa.mobi") !== -1 ||
        shExpMatch(host, "*voacambodia.com") ||
        url.indexOf(".voachineseblog.com") !== -1 ||
        shExpMatch(host, "*voachineseblog.com") ||
        url.indexOf(".voacantonese.com") !== -1 ||
        shExpMatch(host, "*voacantonese.com") ||
        url.indexOf("voachinese.com") !== -1 ||
        shExpMatch(host, "*voachinese.com") ||
        url.indexOf("voagd.com") !== -1 ||
        shExpMatch(host, "*voaindonesia.com") ||
        url.indexOf(".voanews.com") !== -1 ||
        shExpMatch(host, "*voanews.com") ||
        url.indexOf("voatibetan.com") !== -1 ||
        shExpMatch(host, "*voatibetan.com") ||
        url.indexOf(".voatibetanenglish.com") !== -1 ||
        shExpMatch(host, "*voatibetanenglish.com") ||
        shExpMatch(host, "*zh.ecdm.wikia.com") ||
        shExpMatch(host, "*evchk.wikia.com") ||
        url.indexOf("fq.wikia.com") !== -1 ||
        url.indexOf("zh.pttpedia.wikia.com/wiki/%E7%BF%92%E5%8C%85%E5%AD%90%E4%B9%8B%E4%BA%82") !== -1 ||
        url.indexOf("cn.uncyclopedia.wikia.com") !== -1 ||
        url.indexOf("zh.uncyclopedia.wikia.com") !== -1 ||
        shExpMatch(host, "*wikimedia.org") ||
        url.indexOf("http://zh.wikisource.org") === 0 ||
        shExpMatch(host, "*zh.wikiquote.org") ||
        shExpMatch(host, "*zh.wikinews.org") ||
        shExpMatch(host, "*ja.wikipedia.org") ||
        shExpMatch(host, "*wikipedia.org") ||
        shExpMatch(host, "*data.flurry.com") ||
        shExpMatch(host, "*page.bid.yahoo.com") ||
        shExpMatch(host, "*tw.bid.yahoo.com") ||
        shExpMatch(host, "*auctions.yahoo.co.jp") ||
        shExpMatch(host, "*blogs.yahoo.co.jp") ||
        shExpMatch(host, "*search.yahoo.co.jp") ||
        shExpMatch(host, "*buy.yahoo.com.tw") ||
        shExpMatch(host, "*hk.yahoo.com") ||
        shExpMatch(host, "*hk.knowledge.yahoo.com") ||
        shExpMatch(host, "*tw.money.yahoo.com") ||
        shExpMatch(host, "*hk.myblog.yahoo.com") ||
        url.indexOf("news.yahoo.com/china-blocks-bbc") !== -1 ||
        shExpMatch(host, "*hk.news.yahoo.com") ||
        url.indexOf("hk.rd.yahoo.com") !== -1 ||
        url.indexOf("hk.search.yahoo.com/search") !== -1 ||
        url.indexOf("hk.video.news.yahoo.com/video") !== -1 ||
        url.indexOf("meme.yahoo.com") !== -1 ||
        url.indexOf("tw.answers.yahoo.com") !== -1 ||
        url.indexOf("https://tw.answers.yahoo.com") === 0 ||
        shExpMatch(host, "*tw.knowledge.yahoo.com") ||
        shExpMatch(host, "*tw.mall.yahoo.com") ||
        url.indexOf("tw.yahoo.com") !== -1 ||
        shExpMatch(host, "*tw.mobi.yahoo.com") ||
        url.indexOf("tw.myblog.yahoo.com") !== -1 ||
        shExpMatch(host, "*tw.news.yahoo.com") ||
        url.indexOf("pulse.yahoo.com") !== -1 ||
        shExpMatch(host, "*search.yahoo.com") ||
        url.indexOf("upcoming.yahoo.com") !== -1 ||
        url.indexOf("video.yahoo.com") !== -1 ||
        shExpMatch(host, "*yahoo.com.hk") ||
        shExpMatch(host, "*duckduckgo-owned-server.yahoo.net") ||
        shExpMatch(host, "*000webhost.com") ||
        url.indexOf(".030buy.com") !== -1 ||
        url.indexOf(".0rz.tw") !== -1 ||
        url.indexOf("http://0rz.tw") === 0 ||
        url.indexOf("1-apple.com.tw") !== -1 ||
        shExpMatch(host, "*1-apple.com.tw") ||
        url.indexOf(".10.tt") !== -1 ||
        url.indexOf(".100ke.org") !== -1 ||
        url.indexOf(".1000giri.net") !== -1 ||
        shExpMatch(host, "*1000giri.net") ||
        shExpMatch(host, "*10beasts.net") ||
        url.indexOf(".10conditionsoflove.com") !== -1 ||
        shExpMatch(host, "*10musume.com") ||
        url.indexOf("123rf.com") !== -1 ||
        url.indexOf(".12bet.com") !== -1 ||
        shExpMatch(host, "*12bet.com") ||
        url.indexOf(".12vpn.com") !== -1 ||
        url.indexOf(".12vpn.net") !== -1 ||
        shExpMatch(host, "*12vpn.com") ||
        shExpMatch(host, "*12vpn.net") ||
        shExpMatch(host, "*1337x.to") ||
        url.indexOf(".138.com") !== -1 ||
        url.indexOf("141hongkong.com/forum") !== -1 ||
        shExpMatch(host, "*141jj.com") ||
        url.indexOf(".141tube.com") !== -1 ||
        shExpMatch(host, "*1688.com.au") ||
        url.indexOf(".173ng.com") !== -1 ||
        shExpMatch(host, "*173ng.com") ||
        url.indexOf(".177pic.info") !== -1 ||
        url.indexOf(".17t17p.com") !== -1 ||
        shExpMatch(host, "*18board.com") ||
        shExpMatch(host, "*18board.info") ||
        url.indexOf("18onlygirls.com") !== -1 ||
        url.indexOf(".18p2p.com") !== -1 ||
        url.indexOf(".18virginsex.com") !== -1 ||
        url.indexOf(".1949er.org") !== -1 ||
        url.indexOf("zhao.1984.city") !== -1 ||
        shExpMatch(host, "*zhao.1984.city") ||
        url.indexOf("1984bbs.com") !== -1 ||
        shExpMatch(host, "*1984bbs.com") ||
        url.indexOf(".1984bbs.org") !== -1 ||
        shExpMatch(host, "*1984bbs.org") ||
        url.indexOf(".1991way.com") !== -1 ||
        shExpMatch(host, "*1991way.com") ||
        url.indexOf(".1998cdp.org") !== -1 ||
        url.indexOf(".1bao.org") !== -1 ||
        url.indexOf("http://1bao.org") === 0 ||
        url.indexOf(".1eew.com") !== -1 ||
        url.indexOf(".1mobile.com") !== -1 ||
        url.indexOf("http://*.1mobile.tw") === 0 ||
        shExpMatch(host, "*1pondo.tv") ||
        url.indexOf(".2-hand.info") !== -1 ||
        url.indexOf(".2000fun.com/bbs") !== -1 ||
        url.indexOf(".2008xianzhang.info") !== -1 ||
        shExpMatch(host, "*2008xianzhang.info") ||
        shExpMatch(host, "*2017.hk") ||
        shExpMatch(host, "*2021hkcharter.com") ||
        shExpMatch(host, "*2047.name") ||
        url.indexOf("21andy.com/blog") !== -1 ||
        url.indexOf(".21join.com") !== -1 ||
        url.indexOf(".21pron.com") !== -1 ||
        url.indexOf("21sextury.com") !== -1 ||
        url.indexOf(".228.net.tw") !== -1 ||
        shExpMatch(host, "*233abc.com") ||
        shExpMatch(host, "*24hrs.ca") ||
        url.indexOf("24smile.org") !== -1 ||
        url.indexOf("2lipstube.com") !== -1 ||
        url.indexOf(".2shared.com") !== -1 ||
        url.indexOf("30boxes.com") !== -1 ||
        url.indexOf(".315lz.com") !== -1 ||
        shExpMatch(host, "*32red.com") ||
        shExpMatch(host, "*36rain.com") ||
        url.indexOf(".3a5a.com") !== -1 ||
        url.indexOf("3arabtv.com") !== -1 ||
        url.indexOf(".3boys2girls.com") !== -1 ||
        url.indexOf(".3proxy.ru") !== -1 ||
        url.indexOf(".3ren.ca") !== -1 ||
        url.indexOf(".3tui.net") !== -1 ||
        shExpMatch(host, "*404museum.com") ||
        shExpMatch(host, "*4bluestones.biz") ||
        url.indexOf(".4chan.com") !== -1 ||
        url.indexOf(".4everproxy.com") !== -1 ||
        shExpMatch(host, "*4everproxy.com") ||
        shExpMatch(host, "*4rbtv.com") ||
        shExpMatch(host, "*4shared.com") ||
        url.indexOf("taiwannation.50webs.com") !== -1 ||
        shExpMatch(host, "*51.ca") ||
        shExpMatch(host, "*51jav.org") ||
        url.indexOf(".51luoben.com") !== -1 ||
        shExpMatch(host, "*51luoben.com") ||
        shExpMatch(host, "*5278.cc") ||
        url.indexOf(".5299.tv") !== -1 ||
        url.indexOf("5aimiku.com") !== -1 ||
        url.indexOf("5i01.com") !== -1 ||
        url.indexOf(".5isotoi5.org") !== -1 ||
        url.indexOf(".5maodang.com") !== -1 ||
        shExpMatch(host, "*63i.com") ||
        url.indexOf(".64museum.org") !== -1 ||
        url.indexOf("64tianwang.com") !== -1 ||
        url.indexOf("64wiki.com") !== -1 ||
        url.indexOf(".66.ca") !== -1 ||
        url.indexOf("666kb.com") !== -1 ||
        shExpMatch(host, "*6do.news") ||
        url.indexOf(".6park.com") !== -1 ||
        shExpMatch(host, "*6park.com") ||
        shExpMatch(host, "*6parkbbs.com") ||
        shExpMatch(host, "*6parker.com") ||
        shExpMatch(host, "*6parknews.com") ||
        shExpMatch(host, "*7capture.com") ||
        url.indexOf(".7cow.com") !== -1 ||
        url.indexOf(".8-d.com") !== -1 ||
        url.indexOf("http://8-d.com") === 0 ||
        url.indexOf("85cc.net") !== -1 ||
        url.indexOf(".85cc.us") !== -1 ||
        url.indexOf("http://85cc.us") === 0 ||
        url.indexOf("http://85st.com") === 0 ||
        url.indexOf(".881903.com/page/zh-tw/") !== -1 ||
        shExpMatch(host, "*881903.com") ||
        url.indexOf(".888.com") !== -1 ||
        url.indexOf(".888poker.com") !== -1 ||
        url.indexOf("89.64.charter.constitutionalism.solutions") !== -1 ||
        url.indexOf("89-64.org") !== -1 ||
        shExpMatch(host, "*89-64.org") ||
        shExpMatch(host, "*8964museum.com") ||
        url.indexOf(".8news.com.tw") !== -1 ||
        url.indexOf(".8z1.net") !== -1 ||
        shExpMatch(host, "*8z1.net") ||
        url.indexOf(".9001700.com") !== -1 ||
        url.indexOf("http://908taiwan.org/") === 0 ||
        shExpMatch(host, "*91porn.com") ||
        shExpMatch(host, "*91vps.club") ||
        url.indexOf(".92ccav.com") !== -1 ||
        url.indexOf(".991.com") !== -1 ||
        url.indexOf("http://991.com") === 0 ||
        url.indexOf(".99btgc01.com") !== -1 ||
        shExpMatch(host, "*99btgc01.com") ||
        url.indexOf(".99cn.info") !== -1 ||
        url.indexOf("http://99cn.info") === 0 ||
        shExpMatch(host, "*9bis.com") ||
        shExpMatch(host, "*9bis.net") ||
        shExpMatch(host, "*9news.com.au") ||
        url.indexOf(".tibet.a.se") !== -1 ||
        url.indexOf("http://tibet.a.se") === 0 ||
        shExpMatch(host, "*a-normal-day.com") ||
        url.indexOf("a5.com.ru") !== -1 ||
        url.indexOf("http://aamacau.com") === 0 ||
        url.indexOf(".abc.com") !== -1 ||
        url.indexOf(".abc.net.au") !== -1 ||
        shExpMatch(host, "*abc.net.au") ||
        url.indexOf(".abchinese.com") !== -1 ||
        url.indexOf("abclite.net") !== -1 ||
        url.indexOf("https://www.abclite.net") === 0 ||
        url.indexOf(".ablwang.com") !== -1 ||
        url.indexOf(".aboluowang.com") !== -1 ||
        shExpMatch(host, "*aboluowang.com") ||
        shExpMatch(host, "*about.me") ||
        url.indexOf(".aboutgfw.com") !== -1 ||
        url.indexOf(".abs.edu") !== -1 ||
        shExpMatch(host, "*acast.com") ||
        url.indexOf(".accim.org") !== -1 ||
        url.indexOf(".aceros-de-hispania.com") !== -1 ||
        url.indexOf(".acevpn.com") !== -1 ||
        shExpMatch(host, "*acevpn.com") ||
        url.indexOf(".acg18.me") !== -1 ||
        url.indexOf("http://acg18.me") === 0 ||
        shExpMatch(host, "*acgbox.org") ||
        shExpMatch(host, "*acgkj.com") ||
        shExpMatch(host, "*acgnx.se") ||
        url.indexOf(".acmedia365.com") !== -1 ||
        url.indexOf(".acnw.com.au") !== -1 ||
        url.indexOf("actfortibet.org") !== -1 ||
        url.indexOf("actimes.com.au") !== -1 ||
        url.indexOf("activpn.com") !== -1 ||
        shExpMatch(host, "*activpn.com") ||
        shExpMatch(host, "*aculo.us") ||
        shExpMatch(host, "*addictedtocoffee.de") ||
        shExpMatch(host, "*addyoutube.com") ||
        url.indexOf(".adelaidebbs.com/bbs") !== -1 ||
        url.indexOf(".adpl.org.hk") !== -1 ||
        url.indexOf("http://adpl.org.hk") === 0 ||
        url.indexOf(".adult-sex-games.com") !== -1 ||
        shExpMatch(host, "*adult-sex-games.com") ||
        url.indexOf("adultfriendfinder.com") !== -1 ||
        url.indexOf("adultkeep.net/peepshow/members/main.htm") !== -1 ||
        shExpMatch(host, "*advanscene.com") ||
        shExpMatch(host, "*advertfan.com") ||
        url.indexOf(".ae.org") !== -1 ||
        shExpMatch(host, "*aei.org") ||
        shExpMatch(host, "*aenhancers.com") ||
        shExpMatch(host, "*af.mil") ||
        url.indexOf(".afantibbs.com") !== -1 ||
        url.indexOf("http://afantibbs.com") === 0 ||
        shExpMatch(host, "*afr.com") ||
        url.indexOf(".ai-kan.net") !== -1 ||
        shExpMatch(host, "*ai-kan.net") ||
        url.indexOf("ai-wen.net") !== -1 ||
        url.indexOf(".aiph.net") !== -1 ||
        shExpMatch(host, "*aiph.net") ||
        url.indexOf(".airasia.com") !== -1 ||
        shExpMatch(host, "*airconsole.com") ||
        url.indexOf("http://download.aircrack-ng.org") === 0 ||
        url.indexOf(".airvpn.org") !== -1 ||
        shExpMatch(host, "*airvpn.org") ||
        url.indexOf(".aisex.com") !== -1 ||
        shExpMatch(host, "*ait.org.tw") ||
        url.indexOf("aiweiwei.com") !== -1 ||
        url.indexOf(".aiweiweiblog.com") !== -1 ||
        shExpMatch(host, "*aiweiweiblog.com") ||
        shExpMatch(host, "*www.ajsands.com") ||
        url.indexOf("a248.e.akamai.net") !== -1 ||
        shExpMatch(host, "*a248.e.akamai.net") ||
        url.indexOf("rfalive1.akacast.akamaistream.net") !== -1 ||
        url.indexOf("voa-11.akacast.akamaistream.net") !== -1 ||
        shExpMatch(host, "*abematv.akamaized.net") ||
        shExpMatch(host, "*linear-abematv.akamaized.net") ||
        shExpMatch(host, "*vod-abematv.akamaized.net") ||
        url.indexOf("https://fbcdn*.akamaihd.net/") === 0 ||
        url.indexOf("rthklive2-lh.akamaihd.net") !== -1 ||
        url.indexOf(".akademiye.org/ug") !== -1 ||
        url.indexOf("http://akademiye.org/ug") === 0 ||
        shExpMatch(host, "*akiba-online.com") ||
        shExpMatch(host, "*akow.org") ||
        url.indexOf(".al-islam.com") !== -1 ||
        shExpMatch(host, "*al-qimmah.net") ||
        shExpMatch(host, "*alabout.com") ||
        url.indexOf(".alanhou.com") !== -1 ||
        url.indexOf("http://alanhou.com") === 0 ||
        url.indexOf(".alarab.qa") !== -1 ||
        shExpMatch(host, "*alasbarricadas.org") ||
        url.indexOf("alexlur.org") !== -1 ||
        shExpMatch(host, "*alforattv.net") ||
        url.indexOf(".alhayat.com") !== -1 ||
        url.indexOf(".alicejapan.co.jp") !== -1 ||
        url.indexOf("aliengu.com") !== -1 ||
        shExpMatch(host, "*alive.bar") ||
        shExpMatch(host, "*alkasir.com") ||
        shExpMatch(host, "*all4mom.org") ||
        shExpMatch(host, "*allconnected.co") ||
        url.indexOf(".alldrawnsex.com") !== -1 ||
        shExpMatch(host, "*alldrawnsex.com") ||
        url.indexOf(".allervpn.com") !== -1 ||
        shExpMatch(host, "*allfinegirls.com") ||
        url.indexOf(".allgirlmassage.com") !== -1 ||
        url.indexOf("allgirlsallowed.org") !== -1 ||
        url.indexOf(".allgravure.com") !== -1 ||
        url.indexOf("alliance.org.hk") !== -1 ||
        url.indexOf(".allinfa.com") !== -1 ||
        shExpMatch(host, "*allinfa.com") ||
        url.indexOf(".alljackpotscasino.com") !== -1 ||
        shExpMatch(host, "*allmovie.com") ||
        shExpMatch(host, "*almasdarnews.com") ||
        url.indexOf(".alphaporno.com") !== -1 ||
        shExpMatch(host, "*alternate-tools.com") ||
        url.indexOf("alternativeto.net/software") !== -1 ||
        url.indexOf("alvinalexander.com") !== -1 ||
        url.indexOf("alwaysdata.com") !== -1 ||
        shExpMatch(host, "*alwaysdata.com") ||
        shExpMatch(host, "*alwaysdata.net") ||
        url.indexOf(".alwaysvpn.com") !== -1 ||
        shExpMatch(host, "*alwaysvpn.com") ||
        shExpMatch(host, "*am730.com.hk") ||
        url.indexOf("ameblo.jp") !== -1 ||
        shExpMatch(host, "*ameblo.jp") ||
        url.indexOf("www1.american.edu/ted/ice/tibet") !== -1 ||
        shExpMatch(host, "*americangreencard.com") ||
        shExpMatch(host, "*amiblockedornot.com") ||
        url.indexOf(".amigobbs.net") !== -1 ||
        url.indexOf(".amitabhafoundation.us") !== -1 ||
        url.indexOf("http://amitabhafoundation.us") === 0 ||
        url.indexOf(".amnesty.org") !== -1 ||
        shExpMatch(host, "*amnesty.org") ||
        shExpMatch(host, "*amnesty.org.hk") ||
        url.indexOf(".amnesty.tw") !== -1 ||
        url.indexOf(".amnestyusa.org") !== -1 ||
        shExpMatch(host, "*amnestyusa.org") ||
        url.indexOf(".amnyemachen.org") !== -1 ||
        url.indexOf(".amoiist.com") !== -1 ||
        url.indexOf(".amtb-taipei.org") !== -1 ||
        url.indexOf("androidplus.co/apk") !== -1 ||
        url.indexOf(".andygod.com") !== -1 ||
        url.indexOf("http://andygod.com") === 0 ||
        url.indexOf("annatam.com/chinese") !== -1 ||
        shExpMatch(host, "*anchor.fm") ||
        shExpMatch(host, "*anchorfree.com") ||
        shExpMatch(host, "*ancsconf.org") ||
        shExpMatch(host, "*andfaraway.net") ||
        shExpMatch(host, "*android-x86.org") ||
        url.indexOf("angelfire.com/hi/hayashi") !== -1 ||
        shExpMatch(host, "*angularjs.org") ||
        url.indexOf("animecrazy.net") !== -1 ||
        url.indexOf("aniscartujo.com") !== -1 ||
        shExpMatch(host, "*aniscartujo.com") ||
        shExpMatch(host, "*anobii.com") ||
        shExpMatch(host, "*anonfiles.com") ||
        url.indexOf(".anonymitynetwork.com") !== -1 ||
        url.indexOf(".anonymizer.com") !== -1 ||
        url.indexOf(".anonymouse.org") !== -1 ||
        shExpMatch(host, "*anonymouse.org") ||
        url.indexOf("anontext.com") !== -1 ||
        url.indexOf(".anpopo.com") !== -1 ||
        url.indexOf(".answering-islam.org") !== -1 ||
        url.indexOf("http://www.antd.org") === 0 ||
        shExpMatch(host, "*anthonycalzadilla.com") ||
        url.indexOf(".anti1984.com") !== -1 ||
        url.indexOf("antichristendom.com") !== -1 ||
        url.indexOf(".antiwave.net") !== -1 ||
        url.indexOf("http://antiwave.net") === 0 ||
        url.indexOf(".anyporn.com") !== -1 ||
        url.indexOf(".anysex.com") !== -1 ||
        url.indexOf("http://anysex.com") === 0 ||
        url.indexOf(".ao3.org") !== -1 ||
        shExpMatch(host, "*ao3.org") ||
        shExpMatch(host, "*aobo.com.au") ||
        url.indexOf(".aofriend.com") !== -1 ||
        url.indexOf("http://aofriend.com") === 0 ||
        url.indexOf(".aofriend.com.au") !== -1 ||
        url.indexOf(".aojiao.org") !== -1 ||
        shExpMatch(host, "*aomiwang.com") ||
        url.indexOf("video.ap.org") !== -1 ||
        shExpMatch(host, "*apat1989.org") ||
        url.indexOf(".apetube.com") !== -1 ||
        shExpMatch(host, "*apiary.io") ||
        url.indexOf(".apigee.com") !== -1 ||
        shExpMatch(host, "*apigee.com") ||
        shExpMatch(host, "*apk.support") ||
        shExpMatch(host, "*apk-dl.com") ||
        shExpMatch(host, "*apkcombo.com") ||
        url.indexOf(".apkmonk.com/app") !== -1 ||
        shExpMatch(host, "*apkmonk.com") ||
        shExpMatch(host, "*apkplz.com") ||
        shExpMatch(host, "*apkpure.com") ||
        shExpMatch(host, "*apkpure.net") ||
        url.indexOf(".aplusvpn.com") !== -1 ||
        shExpMatch(host, "*appbrain.com") ||
        url.indexOf(".appdownloader.net/Android") !== -1 ||
        url.indexOf(".appledaily.com") !== -1 ||
        shExpMatch(host, "*appledaily.com") ||
        url.indexOf("appledaily.com.hk") !== -1 ||
        shExpMatch(host, "*appledaily.com.hk") ||
        url.indexOf("appledaily.com.tw") !== -1 ||
        shExpMatch(host, "*appledaily.com.tw") ||
        url.indexOf(".appshopper.com") !== -1 ||
        url.indexOf("http://appshopper.com") === 0 ||
        shExpMatch(host, "*appsocks.net") ||
        shExpMatch(host, "*appsto.re") ||
        url.indexOf(".aptoide.com") !== -1 ||
        shExpMatch(host, "*aptoide.com") ||
        shExpMatch(host, "*archives.gov") ||
        url.indexOf(".archive.fo") !== -1 ||
        shExpMatch(host, "*archive.fo") ||
        url.indexOf(".archive.is") !== -1 ||
        shExpMatch(host, "*archive.is") ||
        url.indexOf(".archive.li") !== -1 ||
        shExpMatch(host, "*archive.li") ||
        shExpMatch(host, "*archive.md") ||
        shExpMatch(host, "*archive.org") ||
        shExpMatch(host, "*archive.ph") ||
        url.indexOf("archive.today") !== -1 ||
        url.indexOf("https://archive.today") === 0 ||
        shExpMatch(host, "*archiveofourown.com") ||
        shExpMatch(host, "*archiveofourown.org") ||
        url.indexOf(".arctosia.com") !== -1 ||
        url.indexOf("http://arctosia.com") === 0 ||
        shExpMatch(host, "*areca-backup.org") ||
        url.indexOf(".arethusa.su") !== -1 ||
        shExpMatch(host, "*arethusa.su") ||
        shExpMatch(host, "*arlingtoncemetery.mil") ||
        shExpMatch(host, "*army.mil") ||
        url.indexOf(".art4tibet1998.org") !== -1 ||
        url.indexOf("artofpeacefoundation.org") !== -1 ||
        url.indexOf("artsy.net") !== -1 ||
        shExpMatch(host, "*asacp.org") ||
        url.indexOf("asdfg.jp/dabr") !== -1 ||
        url.indexOf("asg.to") !== -1 ||
        url.indexOf(".asia-gaming.com") !== -1 ||
        url.indexOf(".asiaharvest.org") !== -1 ||
        shExpMatch(host, "*asiaharvest.org") ||
        shExpMatch(host, "*asianage.com") ||
        shExpMatch(host, "*asianews.it") ||
        url.indexOf("http://japanfirst.asianfreeforum.com/") === 0 ||
        shExpMatch(host, "*asiansexdiary.com") ||
        shExpMatch(host, "*asianwomensfilm.de") ||
        shExpMatch(host, "*asiaone.com") ||
        url.indexOf(".asiatgp.com") !== -1 ||
        url.indexOf(".asiatoday.us") !== -1 ||
        shExpMatch(host, "*askstudent.com") ||
        url.indexOf(".askynz.net") !== -1 ||
        shExpMatch(host, "*askynz.net") ||
        shExpMatch(host, "*aspi.org.au") ||
        shExpMatch(host, "*aspistrategist.org.au") ||
        shExpMatch(host, "*assembla.com") ||
        shExpMatch(host, "*astrill.com") ||
        shExpMatch(host, "*atc.org.au") ||
        url.indexOf(".atchinese.com") !== -1 ||
        url.indexOf("http://atchinese.com") === 0 ||
        url.indexOf("atgfw.org") !== -1 ||
        url.indexOf(".atlaspost.com") !== -1 ||
        shExpMatch(host, "*atlaspost.com") ||
        shExpMatch(host, "*atdmt.com") ||
        url.indexOf(".atlanta168.com") !== -1 ||
        shExpMatch(host, "*atlanta168.com") ||
        url.indexOf(".atnext.com") !== -1 ||
        shExpMatch(host, "*atnext.com") ||
        url.indexOf("ice.audionow.com") !== -1 ||
        url.indexOf(".av.com") !== -1 ||
        shExpMatch(host, "*av.movie") ||
        url.indexOf(".av-e-body.com") !== -1 ||
        url.indexOf("avaaz.org") !== -1 ||
        shExpMatch(host, "*avaaz.org") ||
        url.indexOf(".avbody.tv") !== -1 ||
        url.indexOf(".avcity.tv") !== -1 ||
        url.indexOf(".avcool.com") !== -1 ||
        url.indexOf(".avdb.in") !== -1 ||
        shExpMatch(host, "*avdb.in") ||
        url.indexOf(".avdb.tv") !== -1 ||
        shExpMatch(host, "*avdb.tv") ||
        url.indexOf(".avfantasy.com") !== -1 ||
        shExpMatch(host, "*avg.com") ||
        url.indexOf(".avgle.com") !== -1 ||
        shExpMatch(host, "*avgle.com") ||
        shExpMatch(host, "*avidemux.org") ||
        shExpMatch(host, "*avoision.com") ||
        url.indexOf(".avyahoo.com") !== -1 ||
        shExpMatch(host, "*axios.com") ||
        shExpMatch(host, "*axureformac.com") ||
        url.indexOf(".azerbaycan.tv") !== -1 ||
        url.indexOf("azerimix.com") !== -1 ||
        shExpMatch(host, "*azirevpn.com") ||
        shExpMatch(url, "boxun*.azurewebsites.net") ||
        shExpMatch(host, "*boxun*.azurewebsites.net") ||
        shExpMatch(host, "*b-ok.cc") ||
        url.indexOf("forum.baby-kingdom.com") !== -1 ||
        shExpMatch(host, "*babylonbee.com") ||
        url.indexOf("babynet.com.hk") !== -1 ||
        url.indexOf("backchina.com") !== -1 ||
        shExpMatch(host, "*backchina.com") ||
        url.indexOf(".backpackers.com.tw/forum") !== -1 ||
        url.indexOf("backtotiananmen.com") !== -1 ||
        shExpMatch(host, "*bad.news") ||
        url.indexOf(".badiucao.com") !== -1 ||
        shExpMatch(host, "*badiucao.com") ||
        url.indexOf(".badjojo.com") !== -1 ||
        url.indexOf("badoo.com") !== -1 ||
        url.indexOf("http://*2.bahamut.com.tw") === 0 ||
        shExpMatch(host, "*baidu.jp") ||
        url.indexOf(".baijie.org") !== -1 ||
        shExpMatch(host, "*baijie.org") ||
        shExpMatch(host, "*bailandaily.com") ||
        shExpMatch(host, "*baixing.me") ||
        shExpMatch(host, "*baizhi.org") ||
        shExpMatch(host, "*bakgeekhome.tk") ||
        url.indexOf(".banana-vpn.com") !== -1 ||
        shExpMatch(host, "*banana-vpn.com") ||
        url.indexOf(".band.us") !== -1 ||
        shExpMatch(host, "*bandcamp.com") ||
        url.indexOf(".bandwagonhost.com") !== -1 ||
        shExpMatch(host, "*bandwagonhost.com") ||
        url.indexOf(".bangbrosnetwork.com") !== -1 ||
        url.indexOf(".bangchen.net") !== -1 ||
        url.indexOf("http://bangchen.net") === 0 ||
        shExpMatch(host, "*bangkokpost.com") ||
        shExpMatch(host, "*bangyoulater.com") ||
        url.indexOf("bannedbook.org") !== -1 ||
        shExpMatch(host, "*bannedbook.org") ||
        url.indexOf(".bannednews.org") !== -1 ||
        url.indexOf(".baramangaonline.com") !== -1 ||
        url.indexOf("http://baramangaonline.com") === 0 ||
        url.indexOf(".barenakedislam.com") !== -1 ||
        shExpMatch(host, "*barnabu.co.uk") ||
        shExpMatch(host, "*barton.de") ||
        url.indexOf(".bastillepost.com") !== -1 ||
        shExpMatch(host, "*bastillepost.com") ||
        url.indexOf("bayvoice.net") !== -1 ||
        shExpMatch(host, "*bayvoice.net") ||
        url.indexOf("dajusha.baywords.com") !== -1 ||
        shExpMatch(host, "*bbchat.tv") ||
        shExpMatch(host, "*bb-chat.tv") ||
        url.indexOf(".bbg.gov") !== -1 ||
        url.indexOf(".bbkz.com/forum") !== -1 ||
        url.indexOf(".bbnradio.org") !== -1 ||
        url.indexOf("bbs-tw.com") !== -1 ||
        url.indexOf(".bbsdigest.com/thread") !== -1 ||
        shExpMatch(host, "*bbsfeed.com") ||
        url.indexOf("bbsland.com") !== -1 ||
        url.indexOf(".bbsmo.com") !== -1 ||
        url.indexOf(".bbsone.com") !== -1 ||
        url.indexOf("bbtoystore.com") !== -1 ||
        url.indexOf(".bcast.co.nz") !== -1 ||
        url.indexOf(".bcc.com.tw/board") !== -1 ||
        url.indexOf(".bcchinese.net") !== -1 ||
        url.indexOf(".bcmorning.com") !== -1 ||
        url.indexOf("bdsmvideos.net") !== -1 ||
        url.indexOf(".beaconevents.com") !== -1 ||
        url.indexOf(".bebo.com") !== -1 ||
        shExpMatch(host, "*bebo.com") ||
        url.indexOf(".beevpn.com") !== -1 ||
        shExpMatch(host, "*beevpn.com") ||
        url.indexOf(".behindkink.com") !== -1 ||
        shExpMatch(host, "*beijing1989.com") ||
        shExpMatch(host, "*beijing2022.art") ||
        url.indexOf("beijingspring.com") !== -1 ||
        shExpMatch(host, "*beijingspring.com") ||
        url.indexOf(".beijingzx.org") !== -1 ||
        url.indexOf("http://beijingzx.org") === 0 ||
        url.indexOf(".belamionline.com") !== -1 ||
        url.indexOf(".bell.wiki") !== -1 ||
        url.indexOf("http://bell.wiki") === 0 ||
        url.indexOf("bemywife.cc") !== -1 ||
        url.indexOf("beric.me") !== -1 ||
        shExpMatch(host, "*berlinerbericht.de") ||
        url.indexOf(".berlintwitterwall.com") !== -1 ||
        shExpMatch(host, "*berlintwitterwall.com") ||
        url.indexOf(".berm.co.nz") !== -1 ||
        url.indexOf(".bestforchina.org") !== -1 ||
        shExpMatch(host, "*bestforchina.org") ||
        url.indexOf(".bestgore.com") !== -1 ||
        url.indexOf(".bestpornstardb.com") !== -1 ||
        shExpMatch(host, "*bestvpn.com") ||
        url.indexOf(".bestvpnanalysis.com") !== -1 ||
        url.indexOf(".bestvpnserver.com") !== -1 ||
        url.indexOf(".bestvpnservice.com") !== -1 ||
        url.indexOf(".bestvpnusa.com") !== -1 ||
        shExpMatch(host, "*bet365.com") ||
        url.indexOf(".betfair.com") !== -1 ||
        shExpMatch(host, "*betternet.co") ||
        url.indexOf(".bettervpn.com") !== -1 ||
        shExpMatch(host, "*bettervpn.com") ||
        url.indexOf(".bettween.com") !== -1 ||
        shExpMatch(host, "*bettween.com") ||
        shExpMatch(host, "*betvictor.com") ||
        url.indexOf(".bewww.net") !== -1 ||
        url.indexOf(".beyondfirewall.com") !== -1 ||
        shExpMatch(host, "*bfnn.org") ||
        shExpMatch(host, "*bfsh.hk") ||
        url.indexOf(".bgvpn.com") !== -1 ||
        shExpMatch(host, "*bgvpn.com") ||
        url.indexOf(".bianlei.com") !== -1 ||
        url.indexOf("@@||bianlei.com") !== -1 ||
        url.indexOf("biantailajiao.com") !== -1 ||
        url.indexOf("biantailajiao.in") !== -1 ||
        url.indexOf(".biblesforamerica.org") !== -1 ||
        url.indexOf("http://biblesforamerica.org") === 0 ||
        url.indexOf(".bic2011.org") !== -1 ||
        shExpMatch(host, "*biedian.me") ||
        url.indexOf("bigfools.com") !== -1 ||
        shExpMatch(host, "*bigjapanesesex.com") ||
        url.indexOf(".bignews.org") !== -1 ||
        shExpMatch(host, "*bignews.org") ||
        url.indexOf(".bigsound.org") !== -1 ||
        shExpMatch(host, "*bild.de") ||
        url.indexOf(".biliworld.com") !== -1 ||
        url.indexOf("http://biliworld.com") === 0 ||
        url.indexOf("http://billypan.com/wiki") === 0 ||
        url.indexOf(".binux.me") !== -1 ||
        url.indexOf("ai.binwang.me/couplet") !== -1 ||
        url.indexOf(".bit.do") !== -1 ||
        url.indexOf("http://bit.do") === 0 ||
        url.indexOf(".bit.ly") !== -1 ||
        url.indexOf("http://bit.ly") === 0 ||
        shExpMatch(host, "*bitchute.com") ||
        shExpMatch(host, "*bitcointalk.org") ||
        url.indexOf(".bitshare.com") !== -1 ||
        shExpMatch(host, "*bitshare.com") ||
        url.indexOf("bitsnoop.com") !== -1 ||
        url.indexOf(".bitvise.com") !== -1 ||
        shExpMatch(host, "*bitvise.com") ||
        url.indexOf("bizhat.com") !== -1 ||
        shExpMatch(host, "*bl-doujinsouko.com") ||
        url.indexOf(".bjnewlife.org") !== -1 ||
        url.indexOf(".bjs.org") !== -1 ||
        url.indexOf("bjzc.org") !== -1 ||
        shExpMatch(host, "*bjzc.org") ||
        url.indexOf(".blacklogic.com") !== -1 ||
        url.indexOf(".blackvpn.com") !== -1 ||
        shExpMatch(host, "*blackvpn.com") ||
        url.indexOf("blewpass.com") !== -1 ||
        url.indexOf("tor.blingblingsquad.net") !== -1 ||
        url.indexOf(".blinkx.com") !== -1 ||
        shExpMatch(host, "*blinkx.com") ||
        url.indexOf("blinw.com") !== -1 ||
        url.indexOf(".blip.tv") !== -1 ||
        shExpMatch(host, "*blip.tv/") ||
        shExpMatch(host, "*blockcast.it") ||
        url.indexOf(".blockcn.com") !== -1 ||
        shExpMatch(host, "*blockcn.com") ||
        shExpMatch(host, "*blockedbyhk.com") ||
        shExpMatch(host, "*blockless.com") ||
        shExpMatch(host, "*blog.de") ||
        url.indexOf(".blog.jp") !== -1 ||
        url.indexOf("http://blog.jp") === 0 ||
        url.indexOf("@@||jpush.cn") !== -1 ||
        url.indexOf(".blogcatalog.com") !== -1 ||
        shExpMatch(host, "*blogcatalog.com") ||
        shExpMatch(host, "*blogcity.me") ||
        url.indexOf(".blogger.com") !== -1 ||
        shExpMatch(host, "*blogger.com") ||
        url.indexOf("blogimg.jp") !== -1 ||
        shExpMatch(host, "*blog.kangye.org") ||
        url.indexOf(".bloglines.com") !== -1 ||
        shExpMatch(host, "*bloglines.com") ||
        shExpMatch(host, "*bloglovin.com") ||
        url.indexOf("rconversation.blogs.com") !== -1 ||
        url.indexOf("blogtd.net") !== -1 ||
        url.indexOf(".blogtd.org") !== -1 ||
        url.indexOf("http://blogtd.org") === 0 ||
        shExpMatch(host, "*bloodshed.net") ||
        shExpMatch(host, "*assets.bwbx.io") ||
        shExpMatch(host, "*bloomfortune.com") ||
        url.indexOf("blueangellive.com") !== -1 ||
        shExpMatch(host, "*blubrry.com") ||
        url.indexOf(".bmfinn.com") !== -1 ||
        url.indexOf(".bnews.co") !== -1 ||
        shExpMatch(host, "*bnews.co") ||
        shExpMatch(host, "*bnext.com.tw") ||
        shExpMatch(host, "*bnrmetal.com") ||
        url.indexOf("boardreader.com/thread") !== -1 ||
        shExpMatch(host, "*boardreader.com") ||
        url.indexOf(".bod.asia") !== -1 ||
        shExpMatch(host, "*bod.asia") ||
        url.indexOf(".bodog88.com") !== -1 ||
        url.indexOf(".bolehvpn.net") !== -1 ||
        shExpMatch(host, "*bolehvpn.net") ||
        url.indexOf("bonbonme.com") !== -1 ||
        url.indexOf(".bonbonsex.com") !== -1 ||
        url.indexOf(".bonfoundation.org") !== -1 ||
        url.indexOf(".bongacams.com") !== -1 ||
        shExpMatch(host, "*boobstagram.com") ||
        shExpMatch(host, "*book.com.tw") ||
        shExpMatch(host, "*bookdepository.com") ||
        url.indexOf("bookepub.com") !== -1 ||
        shExpMatch(host, "*books.com.tw") ||
        shExpMatch(host, "*borgenmagazine.com") ||
        shExpMatch(host, "*botanwang.com") ||
        url.indexOf(".bot.nu") !== -1 ||
        url.indexOf(".bowenpress.com") !== -1 ||
        shExpMatch(host, "*bowenpress.com") ||
        shExpMatch(host, "*app.box.com") ||
        url.indexOf("dl.box.net") !== -1 ||
        shExpMatch(host, "*dl.box.net") ||
        url.indexOf(".boxpn.com") !== -1 ||
        shExpMatch(host, "*boxpn.com") ||
        url.indexOf("boxun.com") !== -1 ||
        shExpMatch(host, "*boxun.com") ||
        url.indexOf(".boxun.tv") !== -1 ||
        shExpMatch(host, "*boxun.tv") ||
        url.indexOf("boxunblog.com") !== -1 ||
        shExpMatch(host, "*boxunblog.com") ||
        url.indexOf(".boxunclub.com") !== -1 ||
        url.indexOf("boyangu.com") !== -1 ||
        url.indexOf(".boyfriendtv.com") !== -1 ||
        url.indexOf(".boysfood.com") !== -1 ||
        shExpMatch(host, "*br.st") ||
        url.indexOf(".brainyquote.com/quotes/authors/d/dalai_lama") !== -1 ||
        shExpMatch(host, "*brandonhutchinson.com") ||
        shExpMatch(host, "*braumeister.org") ||
        shExpMatch(host, "*brave.com") ||
        url.indexOf(".bravotube.net") !== -1 ||
        shExpMatch(host, "*bravotube.net") ||
        url.indexOf(".brazzers.com") !== -1 ||
        shExpMatch(host, "*brazzers.com") ||
        shExpMatch(host, "*breached.to") ||
        url.indexOf(".break.com") !== -1 ||
        shExpMatch(host, "*break.com") ||
        url.indexOf("breakgfw.com") !== -1 ||
        shExpMatch(host, "*breakgfw.com") ||
        url.indexOf("breaking911.com") !== -1 ||
        url.indexOf(".breakingtweets.com") !== -1 ||
        shExpMatch(host, "*breakingtweets.com") ||
        shExpMatch(host, "*breakwall.net") ||
        url.indexOf("briian.com/6511/freegate") !== -1 ||
        url.indexOf(".briefdream.com/%E7%B4%A0%E6%A3%BA") !== -1 ||
        shExpMatch(host, "*brill.com") ||
        url.indexOf("brizzly.com") !== -1 ||
        shExpMatch(host, "*brizzly.com") ||
        shExpMatch(host, "*brkmd.com") ||
        url.indexOf("broadbook.com") !== -1 ||
        url.indexOf(".broadpressinc.com") !== -1 ||
        shExpMatch(host, "*broadpressinc.com") ||
        url.indexOf("bbs.brockbbs.com") !== -1 ||
        shExpMatch(host, "*brookings.edu") ||
        url.indexOf("brucewang.net") !== -1 ||
        url.indexOf(".brutaltgp.com") !== -1 ||
        shExpMatch(host, "*brutaltgp.com") ||
        url.indexOf(".bt2mag.com") !== -1 ||
        shExpMatch(host, "*bt95.com") ||
        url.indexOf(".btaia.com") !== -1 ||
        url.indexOf(".btbtav.com") !== -1 ||
        shExpMatch(host, "*btdig.com") ||
        shExpMatch(host, "*btdigg.org") ||
        url.indexOf(".btku.me") !== -1 ||
        shExpMatch(host, "*btku.me") ||
        shExpMatch(host, "*btku.org") ||
        url.indexOf(".btspread.com") !== -1 ||
        url.indexOf(".btsynckeys.com") !== -1 ||
        url.indexOf(".budaedu.org") !== -1 ||
        shExpMatch(host, "*budaedu.org") ||
        url.indexOf(".buddhanet.com.tw/zfrop/tibet") !== -1 ||
        shExpMatch(host, "*buffered.com") ||
        shExpMatch(host, "*bullguard.com") ||
        url.indexOf(".bullog.org") !== -1 ||
        shExpMatch(host, "*bullog.org") ||
        url.indexOf(".bullogger.com") !== -1 ||
        shExpMatch(host, "*bullogger.com") ||
        shExpMatch(host, "*bumingbai.net") ||
        shExpMatch(host, "*bunbunhk.com") ||
        url.indexOf(".busayari.com") !== -1 ||
        url.indexOf("http://busayari.com") === 0 ||
        shExpMatch(host, "*business-humanrights.org") ||
        url.indexOf(".businessinsider.com/bing-could-be-censoring-search-results-2014") !== -1 ||
        url.indexOf(".businessinsider.com/china-banks-preparing-for-debt-implosion-2014") !== -1 ||
        url.indexOf(".businessinsider.com/hong-kong-activists-defy-police-tear-gas-as-protests-continue-overnight-2014") !== -1 ||
        url.indexOf(".businessinsider.com/internet-outages-reported-in-north-korea-2014") !== -1 ||
        url.indexOf(".businessinsider.com/iphone-6-is-approved-for-sale-in-china-2014") !== -1 ||
        url.indexOf(".businessinsider.com/nfl-announcers-surface-tablets-2014") !== -1 ||
        url.indexOf(".businessinsider.com/panama-papers") !== -1 ||
        url.indexOf(".businessinsider.com/umbrella-man-hong-kong-2014") !== -1 ||
        url.indexOf("http://www.businessinsider.com.au/*") === 0 ||
        url.indexOf(".businesstoday.com.tw") !== -1 ||
        shExpMatch(host, "*businesstoday.com.tw") ||
        url.indexOf(".busu.org/news") !== -1 ||
        url.indexOf("http://busu.org/news") === 0 ||
        url.indexOf("busytrade.com") !== -1 ||
        url.indexOf(".buugaa.com") !== -1 ||
        url.indexOf(".buzzhand.com") !== -1 ||
        url.indexOf(".buzzhand.net") !== -1 ||
        url.indexOf(".buzzorange.com") !== -1 ||
        shExpMatch(host, "*buzzorange.com") ||
        shExpMatch(host, "*bvpn.com") ||
        shExpMatch(host, "*bwh1.net") ||
        url.indexOf("bwsj.hk") !== -1 ||
        shExpMatch(host, "*bx.tl") ||
        shExpMatch(host, "*bypasscensorship.org") ||
        shExpMatch(host, "*c-span.org") ||
        url.indexOf(".c-spanvideo.org") !== -1 ||
        shExpMatch(host, "*c-spanvideo.org") ||
        shExpMatch(host, "*c-est-simple.com") ||
        url.indexOf(".c100tibet.org") !== -1 ||
        shExpMatch(host, "*cableav.tv") ||
        shExpMatch(host, "*cablegatesearch.net") ||
        url.indexOf(".cachinese.com") !== -1 ||
        url.indexOf(".cacnw.com") !== -1 ||
        url.indexOf("http://cacnw.com") === 0 ||
        url.indexOf(".cactusvpn.com") !== -1 ||
        shExpMatch(host, "*cactusvpn.com") ||
        url.indexOf(".cafepress.com") !== -1 ||
        url.indexOf(".cahr.org.tw") !== -1 ||
        url.indexOf(".caijinglengyan.com") !== -1 ||
        shExpMatch(host, "*caijinglengyan.com") ||
        url.indexOf(".calameo.com/books") !== -1 ||
        shExpMatch(host, "*calendarz.com") ||
        url.indexOf(".calgarychinese.ca") !== -1 ||
        url.indexOf(".calgarychinese.com") !== -1 ||
        url.indexOf(".calgarychinese.net") !== -1 ||
        url.indexOf("http://blog.calibre-ebook.com") === 0 ||
        url.indexOf("falun.caltech.edu") !== -1 ||
        url.indexOf(".its.caltech.edu/~falun/") !== -1 ||
        url.indexOf(".cam4.com") !== -1 ||
        url.indexOf(".cam4.jp") !== -1 ||
        url.indexOf(".cam4.sg") !== -1 ||
        url.indexOf(".camfrog.com") !== -1 ||
        shExpMatch(host, "*camfrog.com") ||
        shExpMatch(host, "*campaignforuyghurs.org") ||
        shExpMatch(host, "*cams.com") ||
        url.indexOf(".cams.org.sg") !== -1 ||
        url.indexOf("canadameet.com") !== -1 ||
        url.indexOf(".canalporno.com") !== -1 ||
        url.indexOf("http://bbs.cantonese.asia/") === 0 ||
        url.indexOf(".canyu.org") !== -1 ||
        shExpMatch(host, "*canyu.org") ||
        url.indexOf(".cao.im") !== -1 ||
        url.indexOf(".caobian.info") !== -1 ||
        shExpMatch(host, "*caobian.info") ||
        url.indexOf("caochangqing.com") !== -1 ||
        shExpMatch(host, "*caochangqing.com") ||
        url.indexOf(".cap.org.hk") !== -1 ||
        shExpMatch(host, "*cap.org.hk") ||
        url.indexOf(".carabinasypistolas.com") !== -1 ||
        url.indexOf("cardinalkungfoundation.org") !== -1 ||
        shExpMatch(host, "*posts.careerengine.us") ||
        url.indexOf("carmotorshow.com") !== -1 ||
        shExpMatch(host, "*carrd.co") ||
        url.indexOf("ss.carryzhou.com") !== -1 ||
        url.indexOf(".cartoonmovement.com") !== -1 ||
        shExpMatch(host, "*cartoonmovement.com") ||
        url.indexOf(".casadeltibetbcn.org") !== -1 ||
        url.indexOf(".casatibet.org.mx") !== -1 ||
        url.indexOf("http://casatibet.org.mx") === 0 ||
        url.indexOf(".cari.com.my") !== -1 ||
        shExpMatch(host, "*cari.com.my") ||
        shExpMatch(host, "*caribbeancom.com") ||
        url.indexOf(".casinoking.com") !== -1 ||
        url.indexOf(".casinoriva.com") !== -1 ||
        shExpMatch(host, "*catch22.net") ||
        url.indexOf(".catchgod.com") !== -1 ||
        url.indexOf("http://catchgod.com") === 0 ||
        shExpMatch(host, "*catfightpayperview.xxx") ||
        url.indexOf(".catholic.org.hk") !== -1 ||
        shExpMatch(host, "*catholic.org.hk") ||
        url.indexOf("catholic.org.tw") !== -1 ||
        shExpMatch(host, "*catholic.org.tw") ||
        url.indexOf(".cathvoice.org.tw") !== -1 ||
        shExpMatch(host, "*cato.org") ||
        shExpMatch(host, "*cattt.com") ||
        url.indexOf(".cbc.ca") !== -1 ||
        shExpMatch(host, "*cbc.ca") ||
        url.indexOf(".cbsnews.com/video") !== -1 ||
        url.indexOf(".cbtc.org.hk") !== -1 ||
        shExpMatch(host, "*southpark.cc.com") ||
        shExpMatch(host, "*cccat.cc") ||
        shExpMatch(host, "*cccat.co") ||
        url.indexOf(".ccdtr.org") !== -1 ||
        shExpMatch(host, "*ccdtr.org") ||
        url.indexOf(".cchere.com") !== -1 ||
        shExpMatch(host, "*cchere.com") ||
        url.indexOf(".ccim.org") !== -1 ||
        url.indexOf(".cclife.ca") !== -1 ||
        url.indexOf("cclife.org") !== -1 ||
        shExpMatch(host, "*cclife.org") ||
        url.indexOf("cclifefl.org") !== -1 ||
        shExpMatch(host, "*cclifefl.org") ||
        url.indexOf(".ccthere.com") !== -1 ||
        shExpMatch(host, "*ccthere.com") ||
        shExpMatch(host, "*ccthere.net") ||
        url.indexOf(".cctmweb.net") !== -1 ||
        url.indexOf(".cctongbao.com/article/2078732") !== -1 ||
        url.indexOf("ccue.ca") !== -1 ||
        url.indexOf("ccue.com") !== -1 ||
        url.indexOf(".ccvoice.ca") !== -1 ||
        url.indexOf(".ccw.org.tw") !== -1 ||
        url.indexOf(".cgdepot.org") !== -1 ||
        url.indexOf("http://cgdepot.org") === 0 ||
        shExpMatch(host, "*cdbook.org") ||
        url.indexOf(".cdcparty.com") !== -1 ||
        url.indexOf(".cdef.org") !== -1 ||
        shExpMatch(host, "*cdef.org") ||
        shExpMatch(host, "*cdig.info") ||
        url.indexOf("cdjp.org") !== -1 ||
        shExpMatch(host, "*cdjp.org") ||
        url.indexOf(".cdnews.com.tw") !== -1 ||
        url.indexOf("cdp1989.org") !== -1 ||
        url.indexOf("cdp1998.org") !== -1 ||
        shExpMatch(host, "*cdp1998.org") ||
        url.indexOf("cdp2006.org") !== -1 ||
        shExpMatch(host, "*cdp2006.org") ||
        url.indexOf(".cdpa.url.tw") !== -1 ||
        url.indexOf("cdpeu.org") !== -1 ||
        url.indexOf("cdpusa.org") !== -1 ||
        url.indexOf("cdpweb.org") !== -1 ||
        shExpMatch(host, "*cdpweb.org") ||
        url.indexOf("cdpwu.org") !== -1 ||
        shExpMatch(host, "*cdpwu.org") ||
        shExpMatch(host, "*cdw.com") ||
        url.indexOf(".cecc.gov") !== -1 ||
        shExpMatch(host, "*cecc.gov") ||
        shExpMatch(host, "*cellulo.info") ||
        shExpMatch(host, "*cenews.eu") ||
        shExpMatch(host, "*centerforhumanreprod.com") ||
        shExpMatch(host, "*centralnation.com") ||
        url.indexOf(".centurys.net") !== -1 ||
        url.indexOf("http://centurys.net") === 0 ||
        url.indexOf(".cfhks.org.hk") !== -1 ||
        url.indexOf(".cfos.de") !== -1 ||
        shExpMatch(host, "*cfr.org") ||
        url.indexOf(".cftfc.com") !== -1 ||
        url.indexOf(".cgst.edu") !== -1 ||
        url.indexOf(".change.org") !== -1 ||
        shExpMatch(host, "*change.org") ||
        url.indexOf(".changp.com") !== -1 ||
        shExpMatch(host, "*changp.com") ||
        url.indexOf(".changsa.net") !== -1 ||
        url.indexOf("http://changsa.net") === 0 ||
        shExpMatch(host, "*channelnewsasia.com") ||
        url.indexOf(".chapm25.com") !== -1 ||
        shExpMatch(host, "*chatgpt.com") ||
        url.indexOf(".chaturbate.com") !== -1 ||
        shExpMatch(host, "*chaturbate.com") ||
        url.indexOf(".chuang-yen.org") !== -1 ||
        shExpMatch(host, "*checkgfw.com") ||
        url.indexOf("chengmingmag.com") !== -1 ||
        url.indexOf(".chenguangcheng.com") !== -1 ||
        shExpMatch(host, "*chenguangcheng.com") ||
        url.indexOf(".chenpokong.com") !== -1 ||
        shExpMatch(host, "*chenpokong.com") ||
        url.indexOf(".chenpokong.net") !== -1 ||
        url.indexOf("http://chenpokong.net") === 0 ||
        shExpMatch(host, "*chenpokongvip.com") ||
        shExpMatch(host, "*cherrysave.com") ||
        url.indexOf(".chhongbi.org") !== -1 ||
        url.indexOf("chicagoncmtv.com") !== -1 ||
        url.indexOf("http://chicagoncmtv.com") === 0 ||
        url.indexOf(".china-week.com") !== -1 ||
        url.indexOf("china101.com") !== -1 ||
        shExpMatch(host, "*china101.com") ||
        shExpMatch(host, "*china18.org") ||
        shExpMatch(host, "*china21.com") ||
        url.indexOf("china21.org") !== -1 ||
        shExpMatch(host, "*china21.org") ||
        url.indexOf(".china5000.us") !== -1 ||
        url.indexOf("chinaaffairs.org") !== -1 ||
        shExpMatch(host, "*chinaaffairs.org") ||
        shExpMatch(host, "*chinaaid.me") ||
        url.indexOf("chinaaid.us") !== -1 ||
        url.indexOf("chinaaid.org") !== -1 ||
        url.indexOf("chinaaid.net") !== -1 ||
        shExpMatch(host, "*chinaaid.net") ||
        url.indexOf("chinacomments.org") !== -1 ||
        shExpMatch(host, "*chinacomments.org") ||
        url.indexOf(".chinachange.org") !== -1 ||
        shExpMatch(host, "*chinachange.org") ||
        url.indexOf("chinachannel.hk") !== -1 ||
        shExpMatch(host, "*chinachannel.hk") ||
        url.indexOf(".chinacitynews.be") !== -1 ||
        url.indexOf(".chinadialogue.net") !== -1 ||
        url.indexOf(".chinadigitaltimes.net") !== -1 ||
        shExpMatch(host, "*chinadigitaltimes.net") ||
        url.indexOf(".chinaelections.org") !== -1 ||
        shExpMatch(host, "*chinaelections.org") ||
        url.indexOf(".chinaeweekly.com") !== -1 ||
        shExpMatch(host, "*chinaeweekly.com") ||
        shExpMatch(host, "*chinafile.com") ||
        shExpMatch(host, "*chinafreepress.org") ||
        url.indexOf(".chinagate.com") !== -1 ||
        url.indexOf("chinageeks.org") !== -1 ||
        url.indexOf("chinagfw.org") !== -1 ||
        shExpMatch(host, "*chinagfw.org") ||
        url.indexOf(".chinagonet.com") !== -1 ||
        url.indexOf(".chinagreenparty.org") !== -1 ||
        shExpMatch(host, "*chinagreenparty.org") ||
        url.indexOf(".chinahorizon.org") !== -1 ||
        shExpMatch(host, "*chinahorizon.org") ||
        url.indexOf(".chinahush.com") !== -1 ||
        url.indexOf(".chinainperspective.com") !== -1 ||
        shExpMatch(host, "*chinainterimgov.org") ||
        url.indexOf("chinalaborwatch.org") !== -1 ||
        url.indexOf("chinalawtranslate.com") !== -1 ||
        url.indexOf(".chinapost.com.tw/taiwan/national/national-news") !== -1 ||
        url.indexOf("chinaxchina.com/howto") !== -1 ||
        url.indexOf("chinalawandpolicy.com") !== -1 ||
        url.indexOf(".chinamule.com") !== -1 ||
        shExpMatch(host, "*chinamule.com") ||
        url.indexOf("chinamz.org") !== -1 ||
        url.indexOf(".chinanewscenter.com") !== -1 ||
        url.indexOf("https://chinanewscenter.com") === 0 ||
        url.indexOf(".chinapress.com.my") !== -1 ||
        shExpMatch(host, "*chinapress.com.my") ||
        url.indexOf(".china-review.com.ua") !== -1 ||
        url.indexOf("http://china-review.com.ua") === 0 ||
        url.indexOf(".chinarightsia.org") !== -1 ||
        url.indexOf("chinasmile.net/forums") !== -1 ||
        url.indexOf("chinasocialdemocraticparty.com") !== -1 ||
        shExpMatch(host, "*chinasocialdemocraticparty.com") ||
        url.indexOf("chinasoul.org") !== -1 ||
        shExpMatch(host, "*chinasoul.org") ||
        url.indexOf(".chinasucks.net") !== -1 ||
        shExpMatch(host, "*chinatopsex.com") ||
        url.indexOf(".chinatown.com.au") !== -1 ||
        url.indexOf("chinatweeps.com") !== -1 ||
        url.indexOf("chinaway.org") !== -1 ||
        url.indexOf(".chinaworker.info") !== -1 ||
        shExpMatch(host, "*chinaworker.info") ||
        url.indexOf("chinayouth.org.hk") !== -1 ||
        url.indexOf("chinayuanmin.org") !== -1 ||
        shExpMatch(host, "*chinayuanmin.org") ||
        url.indexOf(".chinese-hermit.net") !== -1 ||
        url.indexOf("chinese-leaders.org") !== -1 ||
        url.indexOf("chinese-memorial.org") !== -1 ||
        url.indexOf(".chinesedaily.com") !== -1 ||
        shExpMatch(host, "*chinesedailynews.com") ||
        url.indexOf(".chinesedemocracy.com") !== -1 ||
        shExpMatch(host, "*chinesedemocracy.com") ||
        shExpMatch(host, "*chinesegay.org") ||
        url.indexOf(".chinesen.de") !== -1 ||
        shExpMatch(host, "*chinesen.de") ||
        url.indexOf(".chinesenews.net.au/") !== -1 ||
        url.indexOf(".chinesepen.org") !== -1 ||
        shExpMatch(host, "*chineseradioseattle.com") ||
        url.indexOf(".chinesetalks.net/ch") !== -1 ||
        shExpMatch(host, "*chineseupress.com") ||
        url.indexOf(".chingcheong.com") !== -1 ||
        shExpMatch(host, "*chingcheong.com") ||
        url.indexOf(".chinman.net") !== -1 ||
        url.indexOf("http://chinman.net") === 0 ||
        url.indexOf("chithu.org") !== -1 ||
        shExpMatch(host, "*cnnews.chosun.com") ||
        url.indexOf(".chrdnet.com") !== -1 ||
        url.indexOf("http://chrdnet.com") === 0 ||
        url.indexOf(".christianfreedom.org") !== -1 ||
        shExpMatch(host, "*christianfreedom.org") ||
        url.indexOf("christianstudy.com") !== -1 ||
        shExpMatch(host, "*christianstudy.com") ||
        url.indexOf("christusrex.org/www1/sdc") !== -1 ||
        url.indexOf(".chubold.com") !== -1 ||
        url.indexOf("chubun.com") !== -1 ||
        shExpMatch(host, "*christiantimes.org.hk") ||
        url.indexOf(".chrlawyers.hk") !== -1 ||
        shExpMatch(host, "*chrlawyers.hk") ||
        url.indexOf(".churchinhongkong.org/b5/index.php") !== -1 ||
        url.indexOf("http://churchinhongkong.org/b5/index.php") === 0 ||
        url.indexOf(".chushigangdrug.ch") !== -1 ||
        url.indexOf(".cienen.com") !== -1 ||
        url.indexOf(".cineastentreff.de") !== -1 ||
        url.indexOf(".cipfg.org") !== -1 ||
        shExpMatch(host, "*circlethebayfortibet.org") ||
        shExpMatch(host, "*cirosantilli.com") ||
        url.indexOf(".citizencn.com") !== -1 ||
        shExpMatch(host, "*citizencn.com") ||
        shExpMatch(host, "*citizenlab.ca") ||
        shExpMatch(host, "*citizenlab.org") ||
        shExpMatch(host, "*citizenscommission.hk") ||
        url.indexOf(".citizenlab.org") !== -1 ||
        url.indexOf("citizensradio.org") !== -1 ||
        url.indexOf(".city365.ca") !== -1 ||
        url.indexOf("http://city365.ca") === 0 ||
        url.indexOf("city9x.com") !== -1 ||
        shExpMatch(host, "*citypopulation.de") ||
        url.indexOf(".citytalk.tw/event") !== -1 ||
        url.indexOf(".civicparty.hk") !== -1 ||
        shExpMatch(host, "*civicparty.hk") ||
        url.indexOf(".civildisobediencemovement.org") !== -1 ||
        url.indexOf("civilhrfront.org") !== -1 ||
        shExpMatch(host, "*civilhrfront.org") ||
        url.indexOf(".civiliangunner.com") !== -1 ||
        url.indexOf(".civilmedia.tw") !== -1 ||
        shExpMatch(host, "*civilmedia.tw") ||
        url.indexOf("psiphon.civisec.org") !== -1 ||
        shExpMatch(host, "*civitai.com") ||
        url.indexOf(".ck101.com") !== -1 ||
        shExpMatch(host, "*ck101.com") ||
        url.indexOf(".clarionproject.org/news/islamic-state-isis-isil-propaganda") !== -1 ||
        shExpMatch(host, "*classicalguitarblog.net") ||
        url.indexOf(".clb.org.hk") !== -1 ||
        url.indexOf("clearharmony.net") !== -1 ||
        url.indexOf("clearwisdom.net") !== -1 ||
        shExpMatch(host, "*clinica-tibet.ru") ||
        url.indexOf(".clipfish.de") !== -1 ||
        url.indexOf("cloakpoint.com") !== -1 ||
        shExpMatch(host, "*app.cloudcone.com") ||
        shExpMatch(host, "*cloudflare-ipfs.com") ||
        shExpMatch(host, "*club1069.com") ||
        shExpMatch(host, "*clubhouseapi.com") ||
        shExpMatch(host, "*cmegroup.com") ||
        shExpMatch(host, "*cmi.org.tw") ||
        url.indexOf("http://www.cmoinc.org") === 0 ||
        url.indexOf("cmp.hku.hk") !== -1 ||
        url.indexOf("hkupop.hku.hk") !== -1 ||
        shExpMatch(host, "*cmule.com") ||
        shExpMatch(host, "*cmule.org") ||
        shExpMatch(host, "*cms.gov") ||
        url.indexOf("http://vpn.cmu.edu") === 0 ||
        url.indexOf("http://vpn.sv.cmu.edu") === 0 ||
        url.indexOf(".cn6.eu") !== -1 ||
        url.indexOf(".cna.com.tw") !== -1 ||
        shExpMatch(host, "*cna.com.tw") ||
        url.indexOf(".cnabc.com") !== -1 ||
        url.indexOf(".cnd.org") !== -1 ||
        shExpMatch(host, "*cnd.org") ||
        url.indexOf("download.cnet.com") !== -1 ||
        url.indexOf(".cnex.org.cn") !== -1 ||
        url.indexOf(".cnineu.com") !== -1 ||
        url.indexOf("wiki.cnitter.com") !== -1 ||
        url.indexOf(".cnn.com/video") !== -1 ||
        url.indexOf(".cnpolitics.org") !== -1 ||
        shExpMatch(host, "*cnpolitics.org") ||
        url.indexOf(".cn-proxy.com") !== -1 ||
        url.indexOf("http://cn-proxy.com") === 0 ||
        url.indexOf(".cnproxy.com") !== -1 ||
        url.indexOf("blog.cnyes.com") !== -1 ||
        url.indexOf("news.cnyes.com") !== -1 ||
        shExpMatch(host, "*coat.co.jp") ||
        url.indexOf(".cochina.co") !== -1 ||
        shExpMatch(host, "*cochina.co") ||
        shExpMatch(host, "*cochina.org") ||
        url.indexOf(".code1984.com/64") !== -1 ||
        url.indexOf("http://goagent.codeplex.com") === 0 ||
        shExpMatch(host, "*codeshare.io") ||
        shExpMatch(host, "*codeskulptor.org") ||
        shExpMatch(host, "*conoha.jp") ||
        url.indexOf("http://tosh.comedycentral.com") === 0 ||
        url.indexOf("comefromchina.com") !== -1 ||
        shExpMatch(host, "*comefromchina.com") ||
        url.indexOf(".comic-mega.me") !== -1 ||
        url.indexOf("commandarms.com") !== -1 ||
        shExpMatch(host, "*commentshk.com") ||
        url.indexOf(".communistcrimes.org") !== -1 ||
        shExpMatch(host, "*communistcrimes.org") ||
        shExpMatch(host, "*communitychoicecu.com") ||
        shExpMatch(host, "*comparitech.com") ||
        shExpMatch(host, "*compileheart.com") ||
        shExpMatch(host, "*conoha.jp") ||
        url.indexOf(".contactmagazine.net") !== -1 ||
        url.indexOf(".convio.net") !== -1 ||
        url.indexOf(".coobay.com") !== -1 ||
        shExpMatch(host, "*cool18.com") ||
        url.indexOf(".coolaler.com") !== -1 ||
        shExpMatch(host, "*coolaler.com") ||
        url.indexOf("coolder.com") !== -1 ||
        shExpMatch(host, "*coolder.com") ||
        shExpMatch(host, "*coolloud.org.tw") ||
        url.indexOf(".coolncute.com") !== -1 ||
        shExpMatch(host, "*coolstuffinc.com") ||
        url.indexOf("corumcollege.com") !== -1 ||
        url.indexOf(".cos-moe.com") !== -1 ||
        url.indexOf("http://cos-moe.com") === 0 ||
        url.indexOf(".cosplayjav.pl") !== -1 ||
        url.indexOf("http://cosplayjav.pl") === 0 ||
        url.indexOf(".cotweet.com") !== -1 ||
        shExpMatch(host, "*cotweet.com") ||
        url.indexOf(".coursehero.com") !== -1 ||
        shExpMatch(host, "*coursehero.com") ||
        url.indexOf("cpj.org") !== -1 ||
        shExpMatch(host, "*cpj.org") ||
        url.indexOf(".cq99.us") !== -1 ||
        url.indexOf("http://cq99.us") === 0 ||
        url.indexOf("crackle.com") !== -1 ||
        shExpMatch(host, "*crackle.com") ||
        url.indexOf(".crazys.cc") !== -1 ||
        url.indexOf(".crazyshit.com") !== -1 ||
        shExpMatch(host, "*crazyshit.com") ||
        shExpMatch(host, "*crchina.org") ||
        url.indexOf("crd-net.org") !== -1 ||
        url.indexOf("creaders.net") !== -1 ||
        shExpMatch(host, "*creaders.net") ||
        url.indexOf(".creadersnet.com") !== -1 ||
        shExpMatch(host, "*cristyli.com") ||
        shExpMatch(host, "*croxyproxy.com") ||
        url.indexOf(".crocotube.com") !== -1 ||
        url.indexOf("http://crocotube.com") === 0 ||
        url.indexOf(".crossthewall.net") !== -1 ||
        shExpMatch(host, "*crossthewall.net") ||
        url.indexOf(".crossvpn.net") !== -1 ||
        shExpMatch(host, "*crossvpn.net") ||
        shExpMatch(host, "*crucial.com") ||
        shExpMatch(host, "*blog.cryptographyengineering.com") ||
        url.indexOf("csdparty.com") !== -1 ||
        shExpMatch(host, "*csdparty.com") ||
        shExpMatch(host, "*csis.org") ||
        shExpMatch(host, "*csmonitor.com") ||
        shExpMatch(host, "*csuchen.de") ||
        url.indexOf(".csw.org.uk") !== -1 ||
        url.indexOf(".ct.org.tw") !== -1 ||
        shExpMatch(host, "*ct.org.tw") ||
        url.indexOf(".ctao.org") !== -1 ||
        url.indexOf(".ctfriend.net") !== -1 ||
        url.indexOf(".ctitv.com.tw") !== -1 ||
        shExpMatch(host, "*ctowc.org") ||
        url.indexOf(".cts.com.tw") !== -1 ||
        shExpMatch(host, "*cts.com.tw") ||
        shExpMatch(host, "*ctwant.com") ||
        url.indexOf("http://library.usc.cuhk.edu.hk/") === 0 ||
        url.indexOf("http://mjlsh.usc.cuhk.edu.hk/") === 0 ||
        url.indexOf(".cuhkacs.org/~benng") !== -1 ||
        url.indexOf(".cuihua.org") !== -1 ||
        shExpMatch(host, "*cuihua.org") ||
        url.indexOf(".cuiweiping.net") !== -1 ||
        shExpMatch(host, "*cuiweiping.net") ||
        shExpMatch(host, "*culture.tw") ||
        url.indexOf(".cumlouder.com") !== -1 ||
        shExpMatch(host, "*cumlouder.com") ||
        shExpMatch(host, "*curvefish.com") ||
        shExpMatch(host, "*cusp.hk") ||
        url.indexOf(".cusu.hk") !== -1 ||
        shExpMatch(host, "*cusu.hk") ||
        url.indexOf(".cutscenes.net") !== -1 ||
        shExpMatch(host, "*cutscenes.net") ||
        url.indexOf(".cw.com.tw") !== -1 ||
        shExpMatch(host, "*cw.com.tw") ||
        url.indexOf("http://forum.cyberctm.com") === 0 ||
        url.indexOf("cyberghostvpn.com") !== -1 ||
        shExpMatch(host, "*cyberghostvpn.com") ||
        shExpMatch(host, "*cynscribe.com") ||
        url.indexOf("cytode.us") !== -1 ||
        shExpMatch(host, "*ifan.cz.cc") ||
        shExpMatch(host, "*mike.cz.cc") ||
        shExpMatch(host, "*nic.cz.cc") ||
        url.indexOf(".d-fukyu.com") !== -1 ||
        url.indexOf("http://d-fukyu.com") === 0 ||
        url.indexOf("cl.d0z.net") !== -1 ||
        url.indexOf(".d100.net") !== -1 ||
        shExpMatch(host, "*d100.net") ||
        url.indexOf(".d2bay.com") !== -1 ||
        url.indexOf("http://d2bay.com") === 0 ||
        url.indexOf(".dabr.co.uk") !== -1 ||
        shExpMatch(host, "*dabr.co.uk") ||
        url.indexOf("dabr.eu") !== -1 ||
        url.indexOf("dabr.mobi") !== -1 ||
        shExpMatch(host, "*dabr.mobi") ||
        shExpMatch(host, "*dabr.me") ||
        url.indexOf("dadazim.com") !== -1 ||
        shExpMatch(host, "*dadazim.com") ||
        url.indexOf(".dadi360.com") !== -1 ||
        url.indexOf(".dafabet.com") !== -1 ||
        url.indexOf("dafagood.com") !== -1 ||
        url.indexOf("dafahao.com") !== -1 ||
        url.indexOf(".dafoh.org") !== -1 ||
        url.indexOf(".daftporn.com") !== -1 ||
        url.indexOf(".dagelijksestandaard.nl") !== -1 ||
        url.indexOf(".daidostup.ru") !== -1 ||
        url.indexOf("http://daidostup.ru") === 0 ||
        url.indexOf(".dailidaili.com") !== -1 ||
        shExpMatch(host, "*dailidaili.com") ||
        shExpMatch(host, "*dailymail.co.uk") ||
        url.indexOf(".dailymotion.com") !== -1 ||
        shExpMatch(host, "*dailymotion.com") ||
        shExpMatch(host, "*dailysabah.com") ||
        url.indexOf("daiphapinfo.net") !== -1 ||
        url.indexOf(".dajiyuan.com") !== -1 ||
        shExpMatch(host, "*dajiyuan.de") ||
        url.indexOf("dajiyuan.eu") !== -1 ||
        url.indexOf("dalailama.com") !== -1 ||
        url.indexOf(".dalailama.mn") !== -1 ||
        url.indexOf("http://dalailama.mn") === 0 ||
        url.indexOf(".dalailama.ru") !== -1 ||
        shExpMatch(host, "*dalailama.ru") ||
        url.indexOf("dalailama80.org") !== -1 ||
        url.indexOf(".dalailama-archives.org") !== -1 ||
        url.indexOf(".dalailamacenter.org") !== -1 ||
        url.indexOf("http://dalailamacenter.org") === 0 ||
        url.indexOf("dalailamafellows.org") !== -1 ||
        url.indexOf(".dalailamafilm.com") !== -1 ||
        url.indexOf(".dalailamafoundation.org") !== -1 ||
        url.indexOf(".dalailamahindi.com") !== -1 ||
        url.indexOf(".dalailamainaustralia.org") !== -1 ||
        url.indexOf(".dalailamajapanese.com") !== -1 ||
        url.indexOf(".dalailamaprotesters.info") !== -1 ||
        url.indexOf(".dalailamaquotes.org") !== -1 ||
        url.indexOf(".dalailamatrust.org") !== -1 ||
        url.indexOf(".dalailamavisit.org.nz") !== -1 ||
        url.indexOf(".dalailamaworld.com") !== -1 ||
        shExpMatch(host, "*dalailamaworld.com") ||
        url.indexOf("dalianmeng.org") !== -1 ||
        shExpMatch(host, "*dalianmeng.org") ||
        url.indexOf(".daliulian.org") !== -1 ||
        shExpMatch(host, "*daliulian.org") ||
        url.indexOf(".danke4china.net") !== -1 ||
        shExpMatch(host, "*danke4china.net") ||
        url.indexOf("daolan.net") !== -1 ||
        url.indexOf("darktoy.net") !== -1 ||
        shExpMatch(host, "*darrenliuwei.com") ||
        shExpMatch(host, "*dastrassi.org") ||
        shExpMatch(host, "*daum.net") ||
        url.indexOf(".david-kilgour.com") !== -1 ||
        url.indexOf("http://david-kilgour.com") === 0 ||
        url.indexOf("daxa.cn") !== -1 ||
        shExpMatch(host, "*daxa.cn") ||
        url.indexOf("cn.dayabook.com") !== -1 ||
        url.indexOf(".daylife.com/topic/dalai_lama") !== -1 ||
        shExpMatch(host, "*db.tt") ||
        url.indexOf(".dbc.hk/main") !== -1 ||
        shExpMatch(host, "*dbgjd.com") ||
        shExpMatch(host, "*dcard.tw") ||
        url.indexOf("dcmilitary.com") !== -1 ||
        url.indexOf(".ddc.com.tw") !== -1 ||
        url.indexOf(".ddhw.info") !== -1 ||
        shExpMatch(host, "*de-sci.org") ||
        url.indexOf(".de-sci.org") !== -1 ||
        shExpMatch(host, "*deadline.com") ||
        shExpMatch(host, "*decodet.co") ||
        url.indexOf(".definebabe.com") !== -1 ||
        shExpMatch(host, "*delcamp.net") ||
        url.indexOf("delicious.com/GFWbookmark") !== -1 ||
        url.indexOf(".democrats.org") !== -1 ||
        shExpMatch(host, "*democrats.org") ||
        url.indexOf(".demosisto.hk") !== -1 ||
        shExpMatch(host, "*demosisto.hk") ||
        shExpMatch(host, "*desc.se") ||
        shExpMatch(host, "*dessci.com") ||
        url.indexOf(".destroy-china.jp") !== -1 ||
        shExpMatch(host, "*deutsche-welle.de") ||
        shExpMatch(host, "*deviantart.com") ||
        shExpMatch(host, "*deviantart.net") ||
        shExpMatch(host, "*devio.us") ||
        shExpMatch(host, "*devpn.com") ||
        shExpMatch(host, "*devv.ai") ||
        shExpMatch(host, "*dfas.mil") ||
        url.indexOf("dfn.org") !== -1 ||
        url.indexOf("dharmakara.net") !== -1 ||
        url.indexOf(".dharamsalanet.com") !== -1 ||
        url.indexOf(".diaoyuislands.org") !== -1 ||
        shExpMatch(host, "*diaoyuislands.org") ||
        url.indexOf(".difangwenge.org") !== -1 ||
        url.indexOf("http://digiland.tw/") === 0 ||
        shExpMatch(host, "*digitalnomadsproject.org") ||
        url.indexOf(".diigo.com") !== -1 ||
        shExpMatch(host, "*diigo.com") ||
        shExpMatch(host, "*dilber.se") ||
        shExpMatch(host, "*furl.net") ||
        url.indexOf(".dipity.com") !== -1 ||
        shExpMatch(host, "*directcreative.com") ||
        url.indexOf(".discuss.com.hk") !== -1 ||
        shExpMatch(host, "*discuss.com.hk") ||
        url.indexOf(".discuss4u.com") !== -1 ||
        url.indexOf("disp.cc") !== -1 ||
        url.indexOf(".disqus.com") !== -1 ||
        shExpMatch(host, "*disqus.com") ||
        url.indexOf(".dit-inc.us") !== -1 ||
        shExpMatch(host, "*dit-inc.us") ||
        url.indexOf(".dizhidizhi.com") !== -1 ||
        shExpMatch(host, "*dizhuzhishang.com") ||
        url.indexOf("djangosnippets.org") !== -1 ||
        url.indexOf(".djorz.com") !== -1 ||
        shExpMatch(host, "*djorz.com") ||
        shExpMatch(host, "*dl-laby.jp") ||
        shExpMatch(host, "*dlive.tv") ||
        shExpMatch(host, "*dlsite.com") ||
        shExpMatch(host, "*dlyoutube.com") ||
        shExpMatch(host, "*dmc.nico") ||
        shExpMatch(host, "*dmcdn.net") ||
        url.indexOf(".dnscrypt.org") !== -1 ||
        shExpMatch(host, "*dnscrypt.org") ||
        shExpMatch(host, "*dns2go.com") ||
        shExpMatch(host, "*dnssec.net") ||
        url.indexOf("doctorvoice.org") !== -1 ||
        url.indexOf(".dogfartnetwork.com/tour") !== -1 ||
        url.indexOf("gloryhole.com") !== -1 ||
        url.indexOf(".dojin.com") !== -1 ||
        url.indexOf(".dok-forum.net") !== -1 ||
        shExpMatch(host, "*dolc.de") ||
        shExpMatch(host, "*dolf.org.hk") ||
        shExpMatch(host, "*dollf.com") ||
        url.indexOf(".domain.club.tw") !== -1 ||
        url.indexOf(".domaintoday.com.au") !== -1 ||
        url.indexOf("chinese.donga.com") !== -1 ||
        url.indexOf("dongtaiwang.com") !== -1 ||
        shExpMatch(host, "*dongtaiwang.com") ||
        url.indexOf(".dongtaiwang.net") !== -1 ||
        shExpMatch(host, "*dongtaiwang.net") ||
        url.indexOf(".dongyangjing.com") !== -1 ||
        url.indexOf("http://danbooru.donmai.us") === 0 ||
        url.indexOf(".dontfilter.us") !== -1 ||
        shExpMatch(host, "*dontmovetochina.com") ||
        url.indexOf(".dorjeshugden.com") !== -1 ||
        url.indexOf(".dotplane.com") !== -1 ||
        shExpMatch(host, "*dotplane.com") ||
        shExpMatch(host, "*dotsub.com") ||
        url.indexOf(".dotvpn.com") !== -1 ||
        shExpMatch(host, "*dotvpn.com") ||
        url.indexOf(".doub.io") !== -1 ||
        shExpMatch(host, "*doub.io") ||
        shExpMatch(host, "*doublethinklab.org") ||
        shExpMatch(host, "*dougscripts.com") ||
        shExpMatch(host, "*douhokanko.net") ||
        shExpMatch(host, "*doujincafe.com") ||
        url.indexOf("dowei.org") !== -1 ||
        url.indexOf("https://bartender.dowjones.com") === 0 ||
        url.indexOf("dphk.org") !== -1 ||
        url.indexOf("dpp.org.tw") !== -1 ||
        shExpMatch(host, "*dpp.org.tw") ||
        shExpMatch(host, "*dpr.info") ||
        shExpMatch(host, "*dragonsprings.org") ||
        url.indexOf(".dreamamateurs.com") !== -1 ||
        url.indexOf(".drepung.org") !== -1 ||
        shExpMatch(host, "*drgan.net") ||
        url.indexOf(".drmingxia.org") !== -1 ||
        url.indexOf("http://drmingxia.org") === 0 ||
        shExpMatch(host, "*dropbooks.tv") ||
        shExpMatch(host, "*dropbox.com") ||
        shExpMatch(host, "*api.dropboxapi.com") ||
        shExpMatch(host, "*notify.dropboxapi.com") ||
        shExpMatch(host, "*dropboxusercontent.com") ||
        url.indexOf("drsunacademy.com") !== -1 ||
        url.indexOf(".drtuber.com") !== -1 ||
        url.indexOf(".dscn.info") !== -1 ||
        url.indexOf("http://dscn.info") === 0 ||
        url.indexOf(".dstk.dk") !== -1 ||
        url.indexOf("http://dstk.dk") === 0 ||
        shExpMatch(host, "*dtiblog.com") ||
        shExpMatch(host, "*dtic.mil") ||
        url.indexOf(".dtwang.org") !== -1 ||
        url.indexOf(".duanzhihu.com") !== -1 ||
        url.indexOf(".duckdns.org") !== -1 ||
        url.indexOf("http://duckdns.org") === 0 ||
        url.indexOf(".duckduckgo.com") !== -1 ||
        shExpMatch(host, "*duckduckgo.com") ||
        url.indexOf(".duckload.com/download") !== -1 ||
        shExpMatch(host, "*duckmylife.com") ||
        url.indexOf(".duga.jp") !== -1 ||
        url.indexOf("http://duga.jp") === 0 ||
        url.indexOf(".duihua.org") !== -1 ||
        shExpMatch(host, "*duihua.org") ||
        shExpMatch(host, "*duihuahrjournal.org") ||
        url.indexOf(".dunyabulteni.net") !== -1 ||
        url.indexOf(".duoweitimes.com") !== -1 ||
        shExpMatch(host, "*duoweitimes.com") ||
        url.indexOf("duping.net") !== -1 ||
        shExpMatch(host, "*duplicati.com") ||
        url.indexOf("dupola.com") !== -1 ||
        url.indexOf("dupola.net") !== -1 ||
        url.indexOf(".dushi.ca") !== -1 ||
        shExpMatch(host, "*duyaoss.com") ||
        shExpMatch(host, "*dvorak.org") ||
        url.indexOf(".dw.com") !== -1 ||
        shExpMatch(host, "*dw.com") ||
        shExpMatch(host, "*dw.de") ||
        url.indexOf(".dw-world.com") !== -1 ||
        shExpMatch(host, "*dw-world.com") ||
        url.indexOf(".dw-world.de") !== -1 ||
        url.indexOf("http://dw-world.de") === 0 ||
        url.indexOf("www.dwheeler.com") !== -1 ||
        url.indexOf("dwnews.com") !== -1 ||
        shExpMatch(host, "*dwnews.com") ||
        url.indexOf("dwnews.net") !== -1 ||
        shExpMatch(host, "*dwnews.net") ||
        url.indexOf("xys.dxiong.com") !== -1 ||
        shExpMatch(host, "*dynawebinc.com") ||
        shExpMatch(host, "*dysfz.cc") ||
        url.indexOf(".dzze.com") !== -1 ||
        shExpMatch(host, "*e-classical.com.tw") ||
        shExpMatch(host, "*e-gold.com") ||
        url.indexOf(".e-gold.com") !== -1 ||
        url.indexOf(".e-hentai.org") !== -1 ||
        shExpMatch(host, "*e-hentai.org") ||
        url.indexOf(".e-hentaidb.com") !== -1 ||
        url.indexOf("http://e-hentaidb.com") === 0 ||
        url.indexOf("e-info.org.tw") !== -1 ||
        url.indexOf(".e-traderland.net/board") !== -1 ||
        url.indexOf(".e-zone.com.hk/discuz") !== -1 ||
        url.indexOf("http://e-zone.com.hk/discuz") === 0 ||
        url.indexOf(".e123.hk") !== -1 ||
        shExpMatch(host, "*e123.hk") ||
        url.indexOf(".earlytibet.com") !== -1 ||
        url.indexOf("http://earlytibet.com") === 0 ||
        url.indexOf(".earthcam.com") !== -1 ||
        url.indexOf(".earthvpn.com") !== -1 ||
        shExpMatch(host, "*earthvpn.com") ||
        url.indexOf("eastern-ark.com") !== -1 ||
        url.indexOf(".easternlightning.org") !== -1 ||
        url.indexOf(".eastturkestan.com") !== -1 ||
        url.indexOf("http://www.eastturkistan.net/") === 0 ||
        url.indexOf(".eastturkistan-gov.org") !== -1 ||
        url.indexOf(".eastturkistancc.org") !== -1 ||
        url.indexOf(".eastturkistangovernmentinexile.us") !== -1 ||
        shExpMatch(host, "*eastturkistangovernmentinexile.us") ||
        url.indexOf(".easyca.ca") !== -1 ||
        url.indexOf(".easypic.com") !== -1 ||
        shExpMatch(host, "*fnc.ebc.net.tw") ||
        shExpMatch(host, "*news.ebc.net.tw") ||
        url.indexOf(".ebony-beauty.com") !== -1 ||
        url.indexOf("ebookbrowse.com") !== -1 ||
        url.indexOf("ebookee.com") !== -1 ||
        shExpMatch(host, "*ecfa.org.tw") ||
        url.indexOf("ushuarencity.echainhost.com") !== -1 ||
        shExpMatch(host, "*ecimg.tw") ||
        url.indexOf("ecministry.net") !== -1 ||
        url.indexOf(".economist.com") !== -1 ||
        url.indexOf("bbs.ecstart.com") !== -1 ||
        url.indexOf("edgecastcdn.net") !== -1 ||
        shExpMatch(host, "*edgecastcdn.net") ||
        /twimg\.edgesuite\.net\/\/?appledaily/.test(url) ||
        url.indexOf("edicypages.com") !== -1 ||
        url.indexOf(".edmontonchina.cn") !== -1 ||
        url.indexOf(".edmontonservice.com") !== -1 ||
        url.indexOf("edoors.com") !== -1 ||
        url.indexOf(".edubridge.com") !== -1 ||
        shExpMatch(host, "*edubridge.com") ||
        url.indexOf(".edupro.org") !== -1 ||
        shExpMatch(host, "*eevpn.com") ||
        url.indexOf("efcc.org.hk") !== -1 ||
        url.indexOf(".efukt.com") !== -1 ||
        url.indexOf("http://efukt.com") === 0 ||
        shExpMatch(host, "*eic-av.com") ||
        shExpMatch(host, "*eireinikotaerukai.com") ||
        url.indexOf(".eisbb.com") !== -1 ||
        url.indexOf(".eksisozluk.com") !== -1 ||
        shExpMatch(host, "*eksisozluk.com") ||
        url.indexOf("electionsmeter.com") !== -1 ||
        shExpMatch(host, "*elgoog.im") ||
        url.indexOf(".ellawine.org") !== -1 ||
        url.indexOf(".elpais.com") !== -1 ||
        shExpMatch(host, "*elpais.com") ||
        url.indexOf(".eltondisney.com") !== -1 ||
        url.indexOf(".emaga.com/info/3407") !== -1 ||
        url.indexOf("emilylau.org.hk") !== -1 ||
        url.indexOf(".emanna.com/chineseTraditional") !== -1 ||
        url.indexOf("bitc.bme.emory.edu/~lzhou/blogs") !== -1 ||
        url.indexOf(".empfil.com") !== -1 ||
        url.indexOf(".emule-ed2k.com") !== -1 ||
        url.indexOf("http://emule-ed2k.com") === 0 ||
        url.indexOf(".emulefans.com") !== -1 ||
        url.indexOf("http://emulefans.com") === 0 ||
        url.indexOf(".emuparadise.me") !== -1 ||
        url.indexOf(".enanyang.my") !== -1 ||
        shExpMatch(host, "*encrypt.me") ||
        shExpMatch(host, "*enewstree.com") ||
        url.indexOf(".enfal.de") !== -1 ||
        shExpMatch(host, "*chinese.engadget.com") ||
        shExpMatch(host, "*engagedaily.org") ||
        url.indexOf("englishforeveryone.org") !== -1 ||
        shExpMatch(host, "*englishfromengland.co.uk") ||
        url.indexOf("englishpen.org") !== -1 ||
        url.indexOf(".enlighten.org.tw") !== -1 ||
        shExpMatch(host, "*entermap.com") ||
        shExpMatch(host, "*app.evozi.com") ||
        url.indexOf(".episcopalchurch.org") !== -1 ||
        url.indexOf(".epochhk.com") !== -1 ||
        shExpMatch(host, "*epochhk.com") ||
        url.indexOf("epochtimes-bg.com") !== -1 ||
        shExpMatch(host, "*epochtimes-bg.com") ||
        url.indexOf("epochtimes-romania.com") !== -1 ||
        shExpMatch(host, "*epochtimes-romania.com") ||
        url.indexOf("epochtimes.co.il") !== -1 ||
        shExpMatch(host, "*epochtimes.co.il") ||
        url.indexOf("epochtimes.co.kr") !== -1 ||
        shExpMatch(host, "*epochtimes.co.kr") ||
        url.indexOf("epochtimes.com") !== -1 ||
        shExpMatch(host, "*epochtimes.com") ||
        url.indexOf(".epochtimes.cz") !== -1 ||
        shExpMatch(host, "*epochtimes.de") ||
        shExpMatch(host, "*epochtimes.fr") ||
        shExpMatch(host, "*epochtimes.ie") ||
        shExpMatch(host, "*epochtimes.it") ||
        shExpMatch(host, "*epochtimes.jp") ||
        shExpMatch(host, "*epochtimes.ru") ||
        shExpMatch(host, "*epochtimes.se") ||
        shExpMatch(host, "*epochtimestr.com") ||
        url.indexOf(".epochweek.com") !== -1 ||
        shExpMatch(host, "*epochweek.com") ||
        shExpMatch(host, "*epochweekly.com") ||
        url.indexOf(".eporner.com") !== -1 ||
        url.indexOf(".equinenow.com") !== -1 ||
        url.indexOf("erabaru.net") !== -1 ||
        url.indexOf(".eracom.com.tw") !== -1 ||
        url.indexOf(".eraysoft.com.tr") !== -1 ||
        url.indexOf(".erepublik.com") !== -1 ||
        url.indexOf(".erights.net") !== -1 ||
        shExpMatch(host, "*erights.net") ||
        url.indexOf(".erktv.com") !== -1 ||
        url.indexOf("http://erktv.com") === 0 ||
        shExpMatch(host, "*ernestmandel.org") ||
        shExpMatch(host, "*erodaizensyu.com") ||
        shExpMatch(host, "*erodoujinlog.com") ||
        shExpMatch(host, "*erodoujinworld.com") ||
        shExpMatch(host, "*eromanga-kingdom.com") ||
        shExpMatch(host, "*eromangadouzin.com") ||
        url.indexOf(".eromon.net") !== -1 ||
        url.indexOf("http://eromon.net") === 0 ||
        url.indexOf(".eroprofile.com") !== -1 ||
        url.indexOf(".eroticsaloon.net") !== -1 ||
        url.indexOf(".eslite.com") !== -1 ||
        shExpMatch(host, "*eslite.com") ||
        url.indexOf("wiki.esu.im/%E8%9B%A4%E8%9B%A4%E8%AF%AD%E5%BD%95") !== -1 ||
        shExpMatch(host, "*esu.dog") ||
        url.indexOf(".etaa.org.au") !== -1 ||
        url.indexOf(".etadult.com") !== -1 ||
        url.indexOf("etaiwannews.com") !== -1 ||
        shExpMatch(host, "*etizer.org") ||
        shExpMatch(host, "*etokki.com") ||
        shExpMatch(host, "*etsy.com") ||
        url.indexOf(".ettoday.net/news/20151216/614081") !== -1 ||
        url.indexOf("etvonline.hk") !== -1 ||
        url.indexOf(".eu.org") !== -1 ||
        shExpMatch(host, "*eu.org") ||
        url.indexOf(".eucasino.com") !== -1 ||
        url.indexOf(".eulam.com") !== -1 ||
        url.indexOf(".eurekavpt.com") !== -1 ||
        shExpMatch(host, "*eurekavpt.com") ||
        url.indexOf(".euronews.com") !== -1 ||
        shExpMatch(host, "*euronews.com") ||
        url.indexOf("eeas.europa.eu/delegations/china/press_corner/all_news/news/2015/20150716_zh") !== -1 ||
        url.indexOf("eeas.europa.eu/statements-eeas/2015/151022") !== -1 ||
        shExpMatch(host, "*apps.evozi.com") ||
        shExpMatch(host, "*evschool.net") ||
        shExpMatch(host, "*exblog.jp") ||
        shExpMatch(host, "*blog.exblog.co.jp") ||
        url.indexOf("@@||www.exblog.jp") !== -1 ||
        url.indexOf(".exchristian.hk") !== -1 ||
        shExpMatch(host, "*exchristian.hk") ||
        url.indexOf("http://blog.excite.co.jp") === 0 ||
        shExpMatch(host, "*exhentai.org") ||
        shExpMatch(host, "*exmormon.org") ||
        shExpMatch(host, "*expatshield.com") ||
        url.indexOf(".expecthim.com") !== -1 ||
        shExpMatch(host, "*expecthim.com") ||
        url.indexOf("experts-univers.com") !== -1 ||
        shExpMatch(host, "*exploader.net") ||
        url.indexOf(".expressvpn.com") !== -1 ||
        shExpMatch(host, "*expressvpn.com") ||
        url.indexOf(".extremetube.com") !== -1 ||
        url.indexOf("eyevio.jp") !== -1 ||
        shExpMatch(host, "*eyevio.jp") ||
        url.indexOf(".eyny.com") !== -1 ||
        shExpMatch(host, "*eyny.com") ||
        url.indexOf(".ezpc.tk/category/soft") !== -1 ||
        url.indexOf(".ezpeer.com") !== -1 ||
        shExpMatch(host, "*facebookquotes4u.com") ||
        url.indexOf(".faceless.me") !== -1 ||
        shExpMatch(host, "*faceless.me") ||
        url.indexOf("http://facesoftibetanselfimmolators.info") === 0 ||
        shExpMatch(host, "*facesofnyfw.com") ||
        shExpMatch(host, "*factpedia.org") ||
        url.indexOf(".faith100.org") !== -1 ||
        url.indexOf("http://faith100.org") === 0 ||
        url.indexOf(".faithfuleye.com") !== -1 ||
        shExpMatch(host, "*faiththedog.info") ||
        url.indexOf(".fakku.net") !== -1 ||
        shExpMatch(host, "*fallenark.com") ||
        url.indexOf(".falsefire.com") !== -1 ||
        shExpMatch(host, "*falsefire.com") ||
        url.indexOf("falun-co.org") !== -1 ||
        url.indexOf("falunart.org") !== -1 ||
        shExpMatch(host, "*falunasia.info") ||
        url.indexOf("http://falunau.org") === 0 ||
        url.indexOf(".falunaz.net") !== -1 ||
        url.indexOf("falundafa.org") !== -1 ||
        url.indexOf("falundafa-dc.org") !== -1 ||
        shExpMatch(host, "*falundafa-florida.org") ||
        shExpMatch(host, "*falundafa-nc.org") ||
        shExpMatch(host, "*falundafa-pa.net") ||
        shExpMatch(host, "*falundafa-sacramento.org") ||
        url.indexOf("falun-ny.net") !== -1 ||
        shExpMatch(host, "*falundafaindia.org") ||
        url.indexOf("falundafamuseum.org") !== -1 ||
        url.indexOf(".falungong.club") !== -1 ||
        url.indexOf(".falungong.de") !== -1 ||
        url.indexOf("falungong.org.uk") !== -1 ||
        shExpMatch(host, "*falunhr.org") ||
        url.indexOf("faluninfo.de") !== -1 ||
        url.indexOf("faluninfo.net") !== -1 ||
        url.indexOf(".falunpilipinas.net") !== -1 ||
        shExpMatch(host, "*falunworld.net") ||
        url.indexOf("familyfed.org") !== -1 ||
        url.indexOf(".fangeming.com") !== -1 ||
        shExpMatch(host, "*fanglizhi.info") ||
        shExpMatch(host, "*fangong.org") ||
        url.indexOf("fangongheike.com") !== -1 ||
        shExpMatch(host, "*fanhaolou.com") ||
        url.indexOf(".fanqiang.tk") !== -1 ||
        url.indexOf("fanqianghou.com") !== -1 ||
        shExpMatch(host, "*fanqianghou.com") ||
        url.indexOf(".fanqiangzhe.com") !== -1 ||
        shExpMatch(host, "*fanqiangzhe.com") ||
        shExpMatch(host, "*fantv.hk") ||
        url.indexOf("fapdu.com") !== -1 ||
        url.indexOf("faproxy.com") !== -1 ||
        url.indexOf(".fawanghuihui.org") !== -1 ||
        url.indexOf("fanqiangyakexi.net") !== -1 ||
        url.indexOf("fail.hk") !== -1 ||
        shExpMatch(host, "*famunion.com") ||
        url.indexOf(".fan-qiang.com") !== -1 ||
        url.indexOf(".fangbinxing.com") !== -1 ||
        shExpMatch(host, "*fangbinxing.com") ||
        url.indexOf("fangeming.com") !== -1 ||
        url.indexOf(".fangmincn.org") !== -1 ||
        shExpMatch(host, "*fangmincn.org") ||
        url.indexOf(".fanhaodang.com") !== -1 ||
        shExpMatch(host, "*fanqiang.network") ||
        shExpMatch(host, "*fanswong.com") ||
        url.indexOf(".fanyue.info") !== -1 ||
        url.indexOf(".farwestchina.com") !== -1 ||
        url.indexOf("en.favotter.net") !== -1 ||
        url.indexOf("nytimes.map.fastly.net") !== -1 ||
        shExpMatch(host, "*nytimes.map.fastly.net") ||
        shExpMatch(host, "*fast.wistia.com") ||
        shExpMatch(host, "*fastestvpn.com") ||
        shExpMatch(host, "*fastssh.com") ||
        shExpMatch(host, "*faststone.org") ||
        url.indexOf("favstar.fm") !== -1 ||
        shExpMatch(host, "*favstar.fm") ||
        url.indexOf("faydao.com/weblog") !== -1 ||
        shExpMatch(host, "*faz.net") ||
        url.indexOf(".fc2.com") !== -1 ||
        url.indexOf(".fc2china.com") !== -1 ||
        url.indexOf(".fc2cn.com") !== -1 ||
        shExpMatch(host, "*fc2cn.com") ||
        url.indexOf("fc2blog.net") !== -1 ||
        url.indexOf("http://uygur.fc2web.com/") === 0 ||
        url.indexOf("video.fdbox.com") !== -1 ||
        url.indexOf(".fdc64.de") !== -1 ||
        url.indexOf(".fdc64.org") !== -1 ||
        url.indexOf(".fdc89.jp") !== -1 ||
        shExpMatch(host, "*fourface.nodesnoop.com") ||
        shExpMatch(host, "*feeder.co") ||
        shExpMatch(host, "*feelssh.com") ||
        url.indexOf("feer.com") !== -1 ||
        url.indexOf(".feifeiss.com") !== -1 ||
        url.indexOf("http://feitianacademy.org") === 0 ||
        url.indexOf(".feitian-california.org") !== -1 ||
        shExpMatch(host, "*feixiaohao.com") ||
        shExpMatch(host, "*feministteacher.com") ||
        url.indexOf(".fengzhenghu.com") !== -1 ||
        shExpMatch(host, "*fengzhenghu.com") ||
        url.indexOf(".fengzhenghu.net") !== -1 ||
        shExpMatch(host, "*fengzhenghu.net") ||
        url.indexOf(".fevernet.com") !== -1 ||
        url.indexOf("http://ff.im") === 0 ||
        url.indexOf("fffff.at") !== -1 ||
        url.indexOf("fflick.com") !== -1 ||
        url.indexOf(".ffvpn.com") !== -1 ||
        url.indexOf("fgmtv.net") !== -1 ||
        url.indexOf(".fgmtv.org") !== -1 ||
        url.indexOf(".fhreports.net") !== -1 ||
        url.indexOf("http://fhreports.net") === 0 ||
        url.indexOf(".figprayer.com") !== -1 ||
        shExpMatch(host, "*figprayer.com") ||
        url.indexOf(".fileflyer.com") !== -1 ||
        shExpMatch(host, "*fileflyer.com") ||
        url.indexOf("http://feeds.fileforum.com") === 0 ||
        url.indexOf(".files2me.com") !== -1 ||
        url.indexOf(".fileserve.com/file") !== -1 ||
        url.indexOf("fillthesquare.org") !== -1 ||
        url.indexOf("filmingfortibet.org") !== -1 ||
        url.indexOf(".filthdump.com") !== -1 ||
        url.indexOf(".finchvpn.com") !== -1 ||
        shExpMatch(host, "*finchvpn.com") ||
        url.indexOf("findmespot.com") !== -1 ||
        shExpMatch(host, "*findyoutube.com") ||
        shExpMatch(host, "*findyoutube.net") ||
        url.indexOf(".fingerdaily.com") !== -1 ||
        url.indexOf("finler.net") !== -1 ||
        url.indexOf(".firearmsworld.net") !== -1 ||
        url.indexOf("http://firearmsworld.net") === 0 ||
        shExpMatch(host, "*relay.firefox.com") ||
        url.indexOf(".fireofliberty.org") !== -1 ||
        shExpMatch(host, "*fireofliberty.org") ||
        url.indexOf(".firetweet.io") !== -1 ||
        shExpMatch(host, "*firetweet.io") ||
        shExpMatch(host, "*firstpost.com") ||
        shExpMatch(host, "*firstrade.com") ||
        url.indexOf(".flagsonline.it") !== -1 ||
        url.indexOf("fleshbot.com") !== -1 ||
        url.indexOf(".fleursdeslettres.com") !== -1 ||
        url.indexOf("http://fleursdeslettres.com") === 0 ||
        shExpMatch(host, "*flgg.us") ||
        shExpMatch(host, "*flgjustice.org") ||
        shExpMatch(host, "*flickr.com") ||
        shExpMatch(host, "*staticflickr.com") ||
        url.indexOf("flickrhivemind.net") !== -1 ||
        url.indexOf(".flickriver.com") !== -1 ||
        url.indexOf(".fling.com") !== -1 ||
        shExpMatch(host, "*flipkart.com") ||
        shExpMatch(host, "*flog.tw") ||
        url.indexOf(".flyvpn.com") !== -1 ||
        shExpMatch(host, "*flyvpn.com") ||
        url.indexOf("http://cn.fmnnow.com") === 0 ||
        url.indexOf("fofldfradio.org") !== -1 ||
        url.indexOf("blog.foolsmountain.com") !== -1 ||
        url.indexOf(".forum4hk.com") !== -1 ||
        url.indexOf("fangong.forums-free.com") !== -1 ||
        url.indexOf("pioneer-worker.forums-free.com") !== -1 ||
        url.indexOf("https://ss*.4sqi.net") === 0 ||
        url.indexOf("video.foxbusiness.com") !== -1 ||
        url.indexOf("http://foxgay.com") === 0 ||
        shExpMatch(host, "*fringenetwork.com") ||
        shExpMatch(host, "*flecheinthepeche.fr") ||
        url.indexOf(".fochk.org") !== -1 ||
        shExpMatch(host, "*fochk.org") ||
        shExpMatch(host, "*focustaiwan.tw") ||
        url.indexOf(".focusvpn.com") !== -1 ||
        shExpMatch(host, "*fofg.org") ||
        url.indexOf(".fofg-europe.net") !== -1 ||
        url.indexOf(".fooooo.com") !== -1 ||
        shExpMatch(host, "*fooooo.com") ||
        shExpMatch(host, "*foreignaffairs.com") ||
        url.indexOf(".fotile.me") !== -1 ||
        shExpMatch(host, "*fourthinternational.org") ||
        shExpMatch(host, "*foxdie.us") ||
        shExpMatch(host, "*foxsub.com") ||
        url.indexOf("foxtang.com") !== -1 ||
        url.indexOf(".fpmt.org") !== -1 ||
        url.indexOf("http://fpmt.org") === 0 ||
        url.indexOf(".fpmt.tw") !== -1 ||
        url.indexOf(".fpmt-osel.org") !== -1 ||
        shExpMatch(host, "*fpmtmexico.org") ||
        url.indexOf("fqok.org") !== -1 ||
        shExpMatch(host, "*fqrouter.com") ||
        shExpMatch(host, "*franklc.com") ||
        url.indexOf(".freakshare.com") !== -1 ||
        url.indexOf("http://freakshare.com") === 0 ||
        shExpMatch(host, "*free4u.com.ar") ||
        url.indexOf("free-gate.org") !== -1 ||
        url.indexOf(".free-hada-now.org") !== -1 ||
        url.indexOf("free-proxy.cz") !== -1 ||
        url.indexOf(".free.fr/adsl") !== -1 ||
        url.indexOf("kineox.free.fr") !== -1 ||
        url.indexOf("tibetlibre.free.fr") !== -1 ||
        shExpMatch(host, "*freealim.com") ||
        url.indexOf("whitebear.freebearblog.org") !== -1 ||
        shExpMatch(host, "*freebrowser.org") ||
        url.indexOf(".freechal.com") !== -1 ||
        url.indexOf(".freedomchina.info") !== -1 ||
        shExpMatch(host, "*freedomchina.info") ||
        url.indexOf(".freedomhouse.org") !== -1 ||
        shExpMatch(host, "*freedomhouse.org") ||
        url.indexOf(".freedomsherald.org") !== -1 ||
        shExpMatch(host, "*freedomsherald.org") ||
        url.indexOf(".freefq.com") !== -1 ||
        url.indexOf(".freefuckvids.com") !== -1 ||
        url.indexOf(".freegao.com") !== -1 ||
        shExpMatch(host, "*freegao.com") ||
        url.indexOf("freeilhamtohti.org") !== -1 ||
        shExpMatch(host, "*freekazakhs.org") ||
        url.indexOf(".freekwonpyong.org") !== -1 ||
        shExpMatch(host, "*saveliuxiaobo.com") ||
        url.indexOf(".freelotto.com") !== -1 ||
        shExpMatch(host, "*freelotto.com") ||
        url.indexOf("freeman2.com") !== -1 ||
        url.indexOf(".freeopenvpn.com") !== -1 ||
        url.indexOf("freemoren.com") !== -1 ||
        url.indexOf("freemorenews.com") !== -1 ||
        url.indexOf("freemuse.org/archives/789") !== -1 ||
        url.indexOf("freenet-china.org") !== -1 ||
        url.indexOf("freenewscn.com") !== -1 ||
        url.indexOf("cn.freeones.com") !== -1 ||
        url.indexOf(".freeoz.org/bbs") !== -1 ||
        shExpMatch(host, "*freeoz.org") ||
        shExpMatch(host, "*freessh.us") ||
        url.indexOf("free4u.com.ar") !== -1 ||
        url.indexOf(".free-ssh.com") !== -1 ||
        shExpMatch(host, "*free-ssh.com") ||
        shExpMatch(host, "*freebeacon.com") ||
        url.indexOf(".freechina.news") !== -1 ||
        shExpMatch(host, "*freechinaforum.org") ||
        shExpMatch(host, "*freechinaweibo.com") ||
        url.indexOf(".freedomcollection.org/interviews/rebiya_kadeer") !== -1 ||
        url.indexOf(".freeforums.org") !== -1 ||
        shExpMatch(host, "*freenetproject.org") ||
        url.indexOf(".freeoz.org") !== -1 ||
        url.indexOf(".freetibet.net") !== -1 ||
        shExpMatch(host, "*freetibet.org") ||
        url.indexOf(".freetibetanheroes.org") !== -1 ||
        url.indexOf("http://freetibetanheroes.org") === 0 ||
        shExpMatch(host, "*freetribe.me") ||
        url.indexOf(".freeviewmovies.com") !== -1 ||
        url.indexOf(".freevpn.me") !== -1 ||
        url.indexOf("http://freevpn.me") === 0 ||
        shExpMatch(host, "*freewallpaper4.me") ||
        url.indexOf(".freewebs.com") !== -1 ||
        url.indexOf(".freewechat.com") !== -1 ||
        shExpMatch(host, "*freewechat.com") ||
        url.indexOf("freeweibo.com") !== -1 ||
        shExpMatch(host, "*freeweibo.com") ||
        url.indexOf(".freexinwen.com") !== -1 ||
        url.indexOf(".freeyoutubeproxy.net") !== -1 ||
        shExpMatch(host, "*freeyoutubeproxy.net") ||
        url.indexOf("friendfeed.com") !== -1 ||
        url.indexOf("friendfeed-media.com/e99a4ebe2fb4c1985c2a58775eb4422961aa5a2e") !== -1 ||
        url.indexOf("friends-of-tibet.org") !== -1 ||
        url.indexOf(".friendsoftibet.org") !== -1 ||
        shExpMatch(host, "*friendsoftibet.org") ||
        url.indexOf("freechina.net") !== -1 ||
        url.indexOf("http://www.zensur.freerk.com/") === 0 ||
        url.indexOf("freevpn.nl") !== -1 ||
        url.indexOf("freeyellow.com") !== -1 ||
        url.indexOf("hk.frienddy.com/hk") !== -1 ||
        url.indexOf("http://adult.friendfinder.com/") === 0 ||
        url.indexOf(".fring.com") !== -1 ||
        shExpMatch(host, "*fring.com") ||
        url.indexOf(".fromchinatousa.net") !== -1 ||
        shExpMatch(host, "*frommel.net") ||
        url.indexOf(".frontlinedefenders.org") !== -1 ||
        shExpMatch(host, "*frontlinedefenders.org") ||
        url.indexOf(".frootvpn.com") !== -1 ||
        shExpMatch(host, "*frootvpn.com") ||
        shExpMatch(host, "*fscked.org") ||
        url.indexOf(".fsurf.com") !== -1 ||
        url.indexOf(".ftv.com.tw") !== -1 ||
        shExpMatch(host, "*ftv.com.tw") ||
        shExpMatch(host, "*ftvnews.com.tw") ||
        url.indexOf("fucd.com") !== -1 ||
        url.indexOf(".fuckcnnic.net") !== -1 ||
        shExpMatch(host, "*fuckcnnic.net") ||
        url.indexOf("fuckgfw.org") !== -1 ||
        url.indexOf(".fulione.com") !== -1 ||
        url.indexOf("https://fulione.com") === 0 ||
        shExpMatch(host, "*fullerconsideration.com") ||
        url.indexOf("fulue.com") !== -1 ||
        url.indexOf(".funf.tw") !== -1 ||
        url.indexOf("funp.com") !== -1 ||
        url.indexOf(".fuq.com") !== -1 ||
        url.indexOf(".furhhdl.org") !== -1 ||
        shExpMatch(host, "*furinkan.com") ||
        url.indexOf(".futurechinaforum.org") !== -1 ||
        shExpMatch(host, "*futuremessage.org") ||
        url.indexOf(".fux.com") !== -1 ||
        url.indexOf(".fuyin.net") !== -1 ||
        url.indexOf(".fuyindiantai.org") !== -1 ||
        url.indexOf(".fuyu.org.tw") !== -1 ||
        shExpMatch(host, "*fw.cm") ||
        url.indexOf(".fxcm-chinese.com") !== -1 ||
        shExpMatch(host, "*fxcm-chinese.com") ||
        url.indexOf("fzh999.com") !== -1 ||
        url.indexOf("fzh999.net") !== -1 ||
        url.indexOf("fzlm.com") !== -1 ||
        url.indexOf(".g6hentai.com") !== -1 ||
        url.indexOf("http://g6hentai.com") === 0 ||
        shExpMatch(host, "*g-queen.com") ||
        shExpMatch(host, "*gab.com") ||
        shExpMatch(host, "*gabocorp.com") ||
        url.indexOf(".gaeproxy.com") !== -1 ||
        url.indexOf(".gaforum.org") !== -1 ||
        url.indexOf(".gagaoolala.com") !== -1 ||
        shExpMatch(host, "*gagaoolala.com") ||
        url.indexOf(".galaxymacau.com") !== -1 ||
        shExpMatch(host, "*galenwu.com") ||
        url.indexOf(".galstars.net") !== -1 ||
        shExpMatch(host, "*game735.com") ||
        url.indexOf("gamebase.com.tw") !== -1 ||
        url.indexOf("gamejolt.com") !== -1 ||
        url.indexOf("http://wiki.gamerp.jp") === 0 ||
        shExpMatch(host, "*gamer.com.tw") ||
        url.indexOf(".gamer.com.tw") !== -1 ||
        url.indexOf(".gamez.com.tw") !== -1 ||
        shExpMatch(host, "*gamez.com.tw") ||
        url.indexOf(".gamousa.com") !== -1 ||
        url.indexOf(".gaoming.net") !== -1 ||
        shExpMatch(host, "*gaoming.net") ||
        url.indexOf("ganges.com") !== -1 ||
        shExpMatch(host, "*ganjing.com") ||
        shExpMatch(host, "*ganjingworld.com") ||
        url.indexOf(".gaopi.net") !== -1 ||
        url.indexOf("http://gaopi.net") === 0 ||
        url.indexOf(".gaozhisheng.org") !== -1 ||
        url.indexOf(".gaozhisheng.net") !== -1 ||
        url.indexOf("gardennetworks.com") !== -1 ||
        shExpMatch(host, "*gardennetworks.org") ||
        url.indexOf("72.52.81.22") !== -1 ||
        shExpMatch(host, "*gartlive.com") ||
        shExpMatch(host, "*gate-project.com") ||
        shExpMatch(host, "*gather.com") ||
        url.indexOf(".gatherproxy.com") !== -1 ||
        url.indexOf("gati.org.tw") !== -1 ||
        url.indexOf(".gaybubble.com") !== -1 ||
        url.indexOf(".gaycn.net") !== -1 ||
        url.indexOf(".gayhub.com") !== -1 ||
        shExpMatch(host, "*gaymap.cc") ||
        url.indexOf(".gaymenring.com") !== -1 ||
        url.indexOf(".gaytube.com") !== -1 ||
        shExpMatch(host, "*images-gaytube.com") ||
        url.indexOf(".gaywatch.com") !== -1 ||
        url.indexOf("http://gaywatch.com") === 0 ||
        url.indexOf(".gazotube.com") !== -1 ||
        shExpMatch(host, "*gazotube.com") ||
        shExpMatch(host, "*gcc.org.hk") ||
        shExpMatch(host, "*gclooney.com") ||
        shExpMatch(host, "*gclubs.com") ||
        shExpMatch(host, "*gcmasia.com") ||
        url.indexOf(".gcpnews.com") !== -1 ||
        url.indexOf("http://gcpnews.com") === 0 ||
        url.indexOf(".gdbt.net/forum") !== -1 ||
        url.indexOf("gdzf.org") !== -1 ||
        shExpMatch(host, "*geek-art.net") ||
        url.indexOf("geekerhome.com/2010/03/xixiang-project-cross-gfw") !== -1 ||
        shExpMatch(host, "*geekheart.info") ||
        url.indexOf(".gekikame.com") !== -1 ||
        url.indexOf("http://gekikame.com") === 0 ||
        url.indexOf(".gelbooru.com") !== -1 ||
        url.indexOf("http://gelbooru.com") === 0 ||
        shExpMatch(host, "*generated.photos") ||
        shExpMatch(host, "*genius.com") ||
        url.indexOf(".geocities.co.jp") !== -1 ||
        url.indexOf(".geocities.com/SiliconValley/Circuit/5683/download.html") !== -1 ||
        url.indexOf("hk.geocities.com") !== -1 ||
        url.indexOf("geocities.jp") !== -1 ||
        shExpMatch(host, "*geph.io") ||
        url.indexOf(".gerefoundation.org") !== -1 ||
        shExpMatch(host, "*getastrill.com") ||
        url.indexOf(".getchu.com") !== -1 ||
        url.indexOf(".getcloak.com") !== -1 ||
        shExpMatch(host, "*getcloak.com") ||
        shExpMatch(host, "*getfoxyproxy.org") ||
        url.indexOf(".getfreedur.com") !== -1 ||
        shExpMatch(host, "*getgom.com") ||
        url.indexOf(".geti2p.net") !== -1 ||
        shExpMatch(host, "*geti2p.net") ||
        url.indexOf("getiton.com") !== -1 ||
        url.indexOf(".getjetso.com/forum") !== -1 ||
        url.indexOf(".getlantern.org") !== -1 ||
        shExpMatch(host, "*getlantern.org") ||
        shExpMatch(host, "*getmalus.com") ||
        url.indexOf(".getsocialscope.com") !== -1 ||
        shExpMatch(host, "*getsync.com") ||
        shExpMatch(host, "*gettr.com") ||
        url.indexOf("gfbv.de") !== -1 ||
        url.indexOf(".gfgold.com.hk") !== -1 ||
        url.indexOf(".gfsale.com") !== -1 ||
        shExpMatch(host, "*gfsale.com") ||
        url.indexOf("gfw.org.ua") !== -1 ||
        url.indexOf(".gfw.press") !== -1 ||
        shExpMatch(host, "*gfw.press") ||
        shExpMatch(host, "*gfw.report") ||
        url.indexOf(".ggssl.com") !== -1 ||
        shExpMatch(host, "*ggssl.com") ||
        url.indexOf(".ghostpath.com") !== -1 ||
        shExpMatch(host, "*ghostpath.com") ||
        shExpMatch(host, "*ghut.org") ||
        url.indexOf(".giantessnight.com") !== -1 ||
        url.indexOf("http://giantessnight.com") === 0 ||
        url.indexOf(".gifree.com") !== -1 ||
        shExpMatch(host, "*giga-web.jp") ||
        url.indexOf("tw.gigacircle.com") !== -1 ||
        url.indexOf("http://cn.giganews.com/") === 0 ||
        url.indexOf("gigporno.ru") !== -1 ||
        shExpMatch(host, "*girlbanker.com") ||
        url.indexOf(".git.io") !== -1 ||
        shExpMatch(host, "*git.io") ||
        url.indexOf("http://softwaredownload.gitbooks.io") === 0 ||
        shExpMatch(host, "*raw.githack.com") ||
        shExpMatch(host, "*github.blog") ||
        shExpMatch(host, "*github.com") ||
        url.indexOf(".github.io") !== -1 ||
        shExpMatch(host, "*github.io") ||
        shExpMatch(host, "*githubusercontent.com") ||
        shExpMatch(host, "*githubassets.com") ||
        url.indexOf(".gizlen.net") !== -1 ||
        shExpMatch(host, "*gizlen.net") ||
        url.indexOf(".gjczz.com") !== -1 ||
        shExpMatch(host, "*gjczz.com") ||
        url.indexOf("globaljihad.net") !== -1 ||
        url.indexOf("globalmediaoutreach.com") !== -1 ||
        url.indexOf("globalmuseumoncommunism.org") !== -1 ||
        shExpMatch(host, "*globalrescue.net") ||
        url.indexOf(".globaltm.org") !== -1 ||
        url.indexOf(".globalvoicesonline.org") !== -1 ||
        shExpMatch(host, "*globalvoicesonline.org") ||
        shExpMatch(host, "*globalvpn.net") ||
        url.indexOf(".glock.com") !== -1 ||
        url.indexOf("gluckman.com/DalaiLama") !== -1 ||
        shExpMatch(host, "*gmgard.com") ||
        shExpMatch(host, "*gmhz.org") ||
        url.indexOf("http://www.gmiddle.com") === 0 ||
        url.indexOf("http://www.gmiddle.net") === 0 ||
        url.indexOf(".gmll.org") !== -1 ||
        shExpMatch(host, "*suche.gmx.net") ||
        shExpMatch(host, "*gnci.org.hk") ||
        shExpMatch(host, "*gnews.org") ||
        url.indexOf("go-pki.com") !== -1 ||
        shExpMatch(host, "*goagent.biz") ||
        shExpMatch(host, "*goagentplus.com") ||
        url.indexOf("gobet.cc") !== -1 ||
        shExpMatch(host, "*godaddy.com") ||
        url.indexOf("godfootsteps.org") !== -1 ||
        shExpMatch(host, "*godfootsteps.org") ||
        url.indexOf("godns.work") !== -1 ||
        url.indexOf("godsdirectcontact.co.uk") !== -1 ||
        url.indexOf(".godsdirectcontact.org") !== -1 ||
        url.indexOf("godsdirectcontact.org.tw") !== -1 ||
        url.indexOf(".godsimmediatecontact.com") !== -1 ||
        shExpMatch(host, "*gofundme.com") ||
        url.indexOf(".gogotunnel.com") !== -1 ||
        shExpMatch(host, "*gohappy.com.tw") ||
        url.indexOf(".gokbayrak.com") !== -1 ||
        url.indexOf(".goldbet.com") !== -1 ||
        shExpMatch(host, "*goldbetsports.com") ||
        shExpMatch(host, "*golden-ages.org") ||
        shExpMatch(host, "*goldeneyevault.com") ||
        url.indexOf(".goldenfrog.com") !== -1 ||
        shExpMatch(host, "*goldenfrog.com") ||
        url.indexOf(".goldjizz.com") !== -1 ||
        url.indexOf("http://goldjizz.com") === 0 ||
        url.indexOf(".goldstep.net") !== -1 ||
        shExpMatch(host, "*goldwave.com") ||
        url.indexOf("gongmeng.info") !== -1 ||
        url.indexOf("gongm.in") !== -1 ||
        url.indexOf("gongminliliang.com") !== -1 ||
        url.indexOf(".gongwt.com") !== -1 ||
        url.indexOf("http://gongwt.com") === 0 ||
        url.indexOf("blog.goo.ne.jp/duck-tail_2009") !== -1 ||
        url.indexOf(".gooday.xyz") !== -1 ||
        shExpMatch(host, "*gooday.xyz") ||
        shExpMatch(host, "*goodhope.school") ||
        url.indexOf(".goodreads.com") !== -1 ||
        shExpMatch(host, "*goodreads.com") ||
        url.indexOf(".goodreaders.com") !== -1 ||
        shExpMatch(host, "*goodreaders.com") ||
        url.indexOf(".goodtv.com.tw") !== -1 ||
        url.indexOf(".goodtv.tv") !== -1 ||
        shExpMatch(host, "*goofind.com") ||
        url.indexOf(".googlesile.com") !== -1 ||
        url.indexOf(".gopetition.com") !== -1 ||
        shExpMatch(host, "*gopetition.com") ||
        url.indexOf(".goproxing.net") !== -1 ||
        shExpMatch(host, "*goreforum.com") ||
        url.indexOf(".gotrusted.com") !== -1 ||
        shExpMatch(host, "*gotrusted.com") ||
        shExpMatch(host, "*gotw.ca") ||
        shExpMatch(host, "*grammaly.com") ||
        url.indexOf("grandtrial.org") !== -1 ||
        url.indexOf(".graphis.ne.jp") !== -1 ||
        shExpMatch(host, "*graphis.ne.jp") ||
        shExpMatch(host, "*graphql.org") ||
        shExpMatch(host, "*gravatar.com") ||
        url.indexOf("greatfirewall.biz") !== -1 ||
        shExpMatch(host, "*greatfirewallofchina.net") ||
        url.indexOf(".greatfirewallofchina.org") !== -1 ||
        shExpMatch(host, "*greatfirewallofchina.org") ||
        shExpMatch(host, "*greenfieldbookstore.com.hk") ||
        url.indexOf(".greenparty.org.tw") !== -1 ||
        shExpMatch(host, "*greenpeace.org") ||
        url.indexOf(".greenreadings.com/forum") !== -1 ||
        url.indexOf("great-firewall.com") !== -1 ||
        url.indexOf("great-roc.org") !== -1 ||
        url.indexOf("greatroc.org") !== -1 ||
        url.indexOf("greatzhonghua.org") !== -1 ||
        url.indexOf(".greenpeace.com.tw") !== -1 ||
        url.indexOf(".greenvpn.net") !== -1 ||
        shExpMatch(host, "*greenvpn.net") ||
        url.indexOf(".greenvpn.org") !== -1 ||
        shExpMatch(host, "*grindr.com") ||
        shExpMatch(host, "*grotty-monday.com") ||
        url.indexOf("gs-discuss.com") !== -1 ||
        shExpMatch(host, "*gsearch.media") ||
        shExpMatch(host, "*gtricks.com") ||
        url.indexOf("guancha.org") !== -1 ||
        url.indexOf("guaneryu.com") !== -1 ||
        url.indexOf(".guardster.com") !== -1 ||
        url.indexOf(".gun-world.net") !== -1 ||
        url.indexOf("gunsandammo.com") !== -1 ||
        shExpMatch(host, "*gutteruncensored.com") ||
        shExpMatch(host, "*gvm.com.tw") ||
        shExpMatch(host, "*gwins.org") ||
        url.indexOf(".gzm.tv") !== -1 ||
        shExpMatch(host, "*gzone-anime.info") ||
        shExpMatch(host, "*clementine-player.org") ||
        url.indexOf("echofon.com") !== -1 ||
        shExpMatch(host, "*www.klip.me") ||
        url.indexOf("@@||site.locql.com") !== -1 ||
        shExpMatch(host, "*stephaniered.com") ||
        url.indexOf("@@||download.syniumsoftware.com") !== -1 ||
        url.indexOf("http://ub0.cc") === 0 ||
        url.indexOf("wozy.in") !== -1 ||
        url.indexOf("gospelherald.com") !== -1 ||
        shExpMatch(host, "*gospelherald.com") ||
        url.indexOf("http://hk.gradconnection.com/") === 0 ||
        shExpMatch(host, "*grangorz.org") ||
        url.indexOf("greatfire.org") !== -1 ||
        shExpMatch(host, "*greatfire.org") ||
        url.indexOf("greatfirewallofchina.org") !== -1 ||
        shExpMatch(host, "*greatroc.tw") ||
        url.indexOf(".gts-vpn.com") !== -1 ||
        url.indexOf("http://gts-vpn.com") === 0 ||
        shExpMatch(host, "*gtv.org") ||
        shExpMatch(host, "*gtv1.org") ||
        url.indexOf(".gu-chu-sum.org") !== -1 ||
        url.indexOf("http://gu-chu-sum.org") === 0 ||
        url.indexOf(".guaguass.com") !== -1 ||
        url.indexOf("http://guaguass.com") === 0 ||
        url.indexOf(".guaguass.org") !== -1 ||
        url.indexOf("http://guaguass.org") === 0 ||
        url.indexOf(".guangming.com.my") !== -1 ||
        url.indexOf("guishan.org") !== -1 ||
        shExpMatch(host, "*guishan.org") ||
        url.indexOf(".gumroad.com") !== -1 ||
        shExpMatch(host, "*gumroad.com") ||
        shExpMatch(host, "*gunsamerica.com") ||
        url.indexOf("guruonline.hk") !== -1 ||
        url.indexOf("http://gvlib.com") === 0 ||
        url.indexOf(".gyalwarinpoche.com") !== -1 ||
        url.indexOf(".gyatsostudio.com") !== -1 ||
        url.indexOf(".h528.com") !== -1 ||
        url.indexOf(".h5dm.com") !== -1 ||
        url.indexOf(".h5galgame.me") !== -1 ||
        shExpMatch(host, "*h-china.org") ||
        url.indexOf(".h-moe.com") !== -1 ||
        url.indexOf("http://h-moe.com") === 0 ||
        url.indexOf("h1n1china.org") !== -1 ||
        url.indexOf(".hacg.club") !== -1 ||
        shExpMatch(host, "*hacg.club") ||
        url.indexOf(".hacg.in") !== -1 ||
        url.indexOf("http://hacg.in") === 0 ||
        url.indexOf(".hacg.li") !== -1 ||
        url.indexOf("http://hacg.li") === 0 ||
        url.indexOf(".hacg.me") !== -1 ||
        url.indexOf("http://hacg.me") === 0 ||
        url.indexOf(".hacg.red") !== -1 ||
        url.indexOf("http://hacg.red") === 0 ||
        url.indexOf(".hacken.cc/bbs") !== -1 ||
        url.indexOf(".hacker.org") !== -1 ||
        shExpMatch(host, "*hackmd.io") ||
        shExpMatch(host, "*hackthatphone.net") ||
        url.indexOf("hahlo.com") !== -1 ||
        shExpMatch(host, "*hakkatv.org.tw") ||
        url.indexOf(".handcraftedsoftware.org") !== -1 ||
        url.indexOf("http://bbs.hanminzu.org/") === 0 ||
        url.indexOf(".hanunyi.com") !== -1 ||
        url.indexOf(".hao.news/news") !== -1 ||
        url.indexOf("http://ae.hao123.com") === 0 ||
        url.indexOf("http://ar.hao123.com") === 0 ||
        url.indexOf("http://br.hao123.com") === 0 ||
        url.indexOf("http://en.hao123.com") === 0 ||
        url.indexOf("http://id.hao123.com") === 0 ||
        url.indexOf("http://jp.hao123.com") === 0 ||
        url.indexOf("http://ma.hao123.com") === 0 ||
        url.indexOf("http://mx.hao123.com") === 0 ||
        url.indexOf("http://sa.hao123.com") === 0 ||
        url.indexOf("http://th.hao123.com") === 0 ||
        url.indexOf("http://tw.hao123.com") === 0 ||
        url.indexOf("http://vn.hao123.com") === 0 ||
        url.indexOf("http://hk.hao123img.com") === 0 ||
        url.indexOf("http://ld.hao123img.com") === 0 ||
        shExpMatch(host, "*happy-vpn.com") ||
        url.indexOf(".haproxy.org") !== -1 ||
        shExpMatch(host, "*hardsextube.com") ||
        url.indexOf(".harunyahya.com") !== -1 ||
        url.indexOf("http://harunyahya.com") === 0 ||
        url.indexOf("bbs.hasi.wang") !== -1 ||
        url.indexOf("have8.com") !== -1 ||
        url.indexOf("@@||haygo.com") !== -1 ||
        url.indexOf(".hclips.com") !== -1 ||
        shExpMatch(host, "*hdlt.me") ||
        shExpMatch(host, "*hdtvb.net") ||
        url.indexOf(".hdzog.com") !== -1 ||
        url.indexOf("http://hdzog.com") === 0 ||
        shExpMatch(host, "*ordns.he.net") ||
        shExpMatch(host, "*heartyit.com") ||
        url.indexOf(".heavy-r.com") !== -1 ||
        url.indexOf(".hec.su") !== -1 ||
        url.indexOf("http://hec.su") === 0 ||
        url.indexOf(".hecaitou.net") !== -1 ||
        shExpMatch(host, "*hecaitou.net") ||
        url.indexOf(".hechaji.com") !== -1 ||
        shExpMatch(host, "*hechaji.com") ||
        shExpMatch(host, "*heeact.edu.tw") ||
        url.indexOf(".hegre-art.com") !== -1 ||
        url.indexOf("http://hegre-art.com") === 0 ||
        shExpMatch(host, "*cdn.helixstudios.net") ||
        shExpMatch(host, "*helplinfen.com") ||
        shExpMatch(host, "*helpuyghursnow.org") ||
        shExpMatch(host, "*helloandroid.com") ||
        shExpMatch(host, "*helloqueer.com") ||
        url.indexOf(".helloss.pw") !== -1 ||
        url.indexOf("hellotxt.com") !== -1 ||
        shExpMatch(host, "*hellotxt.com") ||
        url.indexOf(".hentai.to") !== -1 ||
        url.indexOf(".hellouk.org/forum/lofiversion") !== -1 ||
        url.indexOf(".helpeachpeople.com") !== -1 ||
        shExpMatch(host, "*helpeachpeople.com") ||
        shExpMatch(host, "*helpster.de") ||
        url.indexOf(".helpzhuling.org") !== -1 ||
        url.indexOf("hentaitube.tv") !== -1 ||
        url.indexOf(".hentaivideoworld.com") !== -1 ||
        shExpMatch(host, "*id.heroku.com") ||
        url.indexOf("heqinglian.net") !== -1 ||
        shExpMatch(host, "*heqinglian.net") ||
        shExpMatch(host, "*heritage.org") ||
        shExpMatch(host, "*heungkongdiscuss.com") ||
        url.indexOf(".hexieshe.com") !== -1 ||
        shExpMatch(host, "*hexieshe.com") ||
        shExpMatch(host, "*hexieshe.xyz") ||
        shExpMatch(host, "*hexxeh.net") ||
        shExpMatch(host, "*heyuedi.com") ||
        url.indexOf("app.heywire.com") !== -1 ||
        url.indexOf(".heyzo.com") !== -1 ||
        url.indexOf(".hgseav.com") !== -1 ||
        url.indexOf(".hhdcb3office.org") !== -1 ||
        url.indexOf(".hhthesakyatrizin.org") !== -1 ||
        url.indexOf("hi-on.org.tw") !== -1 ||
        shExpMatch(host, "*hiccears.com") ||
        url.indexOf("hidden-advent.org") !== -1 ||
        shExpMatch(host, "*hidden-advent.org") ||
        url.indexOf("hidecloud.com/blog/2008/07/29/fuck-beijing-olympics.html") !== -1 ||
        shExpMatch(host, "*hide.me") ||
        url.indexOf(".hidein.net") !== -1 ||
        url.indexOf(".hideipvpn.com") !== -1 ||
        shExpMatch(host, "*hideipvpn.com") ||
        url.indexOf(".hideman.net") !== -1 ||
        shExpMatch(host, "*hideman.net") ||
        url.indexOf("hideme.nl") !== -1 ||
        shExpMatch(host, "*hidemy.name") ||
        url.indexOf(".hidemyass.com") !== -1 ||
        shExpMatch(host, "*hidemyass.com") ||
        url.indexOf("hidemycomp.com") !== -1 ||
        shExpMatch(host, "*hidemycomp.com") ||
        url.indexOf(".hihiforum.com") !== -1 ||
        url.indexOf(".hihistory.net") !== -1 ||
        shExpMatch(host, "*hihistory.net") ||
        url.indexOf(".higfw.com") !== -1 ||
        url.indexOf("highpeakspureearth.com") !== -1 ||
        shExpMatch(host, "*highrockmedia.com") ||
        shExpMatch(host, "*hiitch.com") ||
        shExpMatch(host, "*hikinggfw.org") ||
        url.indexOf(".hilive.tv") !== -1 ||
        url.indexOf(".himalayan-foundation.org") !== -1 ||
        shExpMatch(host, "*himalayan-foundation.org") ||
        url.indexOf("himalayanglacier.com") !== -1 ||
        url.indexOf(".himemix.com") !== -1 ||
        shExpMatch(host, "*himemix.com") ||
        url.indexOf(".himemix.net") !== -1 ||
        url.indexOf("times.hinet.net") !== -1 ||
        url.indexOf(".hitomi.la") !== -1 ||
        url.indexOf("http://hitomi.la") === 0 ||
        url.indexOf(".hiwifi.com") !== -1 ||
        url.indexOf("@@||hiwifi.com") !== -1 ||
        url.indexOf("hizbuttahrir.org") !== -1 ||
        url.indexOf("hizb-ut-tahrir.info") !== -1 ||
        url.indexOf("hizb-ut-tahrir.org") !== -1 ||
        url.indexOf(".hjclub.info") !== -1 ||
        url.indexOf(".hk-pub.com/forum") !== -1 ||
        url.indexOf("http://hk-pub.com") === 0 ||
        url.indexOf(".hk01.com") !== -1 ||
        shExpMatch(host, "*hk01.com") ||
        url.indexOf(".hk32168.com") !== -1 ||
        shExpMatch(host, "*hk32168.com") ||
        shExpMatch(host, "*hkacg.com") ||
        shExpMatch(host, "*hkacg.net") ||
        url.indexOf(".hkatvnews.com") !== -1 ||
        url.indexOf("hkbc.net") !== -1 ||
        url.indexOf(".hkbf.org") !== -1 ||
        url.indexOf(".hkbookcity.com") !== -1 ||
        shExpMatch(host, "*hkbookcity.com") ||
        shExpMatch(host, "*hkchronicles.com") ||
        url.indexOf(".hkchurch.org") !== -1 ||
        url.indexOf("hkci.org.hk") !== -1 ||
        url.indexOf(".hkcmi.edu") !== -1 ||
        shExpMatch(host, "*hkcnews.com") ||
        shExpMatch(host, "*hkcoc.com") ||
        shExpMatch(host, "*hkctu.org.hk") ||
        url.indexOf("hkday.net") !== -1 ||
        url.indexOf(".hkdailynews.com.hk/china.php") !== -1 ||
        shExpMatch(host, "*hkdc.us") ||
        url.indexOf("hkdf.org") !== -1 ||
        url.indexOf(".hkej.com") !== -1 ||
        url.indexOf(".hkepc.com/forum/viewthread.php?tid=1153322") !== -1 ||
        shExpMatch(host, "*hket.com") ||
        shExpMatch(host, "*hkfaa.com") ||
        url.indexOf("hkfreezone.com") !== -1 ||
        url.indexOf("hkfront.org") !== -1 ||
        url.indexOf("m.hkgalden.com") !== -1 ||
        url.indexOf("https://m.hkgalden.com") === 0 ||
        url.indexOf(".hkgreenradio.org/home") !== -1 ||
        shExpMatch(host, "*hkgpao.com") ||
        shExpMatch(url, ".hkheadline.com*blog") ||
        url.indexOf(".hkheadline.com/instantnews") !== -1 ||
        url.indexOf("hkhkhk.com") !== -1 ||
        url.indexOf("hkhrc.org.hk") !== -1 ||
        url.indexOf("hkhrm.org.hk") !== -1 ||
        shExpMatch(host, "*hkip.org.uk") ||
        url.indexOf("1989report.hkja.org.hk") !== -1 ||
        url.indexOf("hkjc.com") !== -1 ||
        url.indexOf(".hkjp.org") !== -1 ||
        url.indexOf(".hklft.com") !== -1 ||
        url.indexOf(".hklts.org.hk") !== -1 ||
        shExpMatch(host, "*hklts.org.hk") ||
        shExpMatch(host, "*hkmap.live") ||
        shExpMatch(host, "*hkopentv.com") ||
        shExpMatch(host, "*hkpeanut.com") ||
        url.indexOf("hkptu.org") !== -1 ||
        url.indexOf(".hkreporter.com") !== -1 ||
        shExpMatch(host, "*hkreporter.com") ||
        url.indexOf("http://hkupop.hku.hk/") === 0 ||
        url.indexOf(".hkusu.net") !== -1 ||
        shExpMatch(host, "*hkusu.net") ||
        url.indexOf(".hkvwet.com") !== -1 ||
        url.indexOf(".hkwcc.org.hk") !== -1 ||
        shExpMatch(host, "*hkzone.org") ||
        url.indexOf(".hmonghot.com") !== -1 ||
        url.indexOf("http://hmonghot.com") === 0 ||
        url.indexOf(".hmv.co.jp/") !== -1 ||
        url.indexOf("hnjhj.com") !== -1 ||
        shExpMatch(host, "*hnjhj.com") ||
        url.indexOf(".hnntube.com") !== -1 ||
        shExpMatch(host, "*hojemacau.com.mo") ||
        shExpMatch(host, "*hola.com") ||
        shExpMatch(host, "*hola.org") ||
        url.indexOf("holymountaincn.com") !== -1 ||
        url.indexOf("holyspiritspeaks.org") !== -1 ||
        shExpMatch(host, "*holyspiritspeaks.org") ||
        shExpMatch(host, "*derekhsu.homeip.net") ||
        url.indexOf(".homeperversion.com") !== -1 ||
        url.indexOf("http://homeservershow.com") === 0 ||
        url.indexOf("http://old.honeynet.org/scans/scan31/sub/doug_eric/spam_translation.html") === 0 ||
        url.indexOf(".hongkongfp.com") !== -1 ||
        shExpMatch(host, "*hongkongfp.com") ||
        url.indexOf("hongmeimei.com") !== -1 ||
        shExpMatch(host, "*hongzhi.li") ||
        shExpMatch(host, "*honven.xyz") ||
        url.indexOf(".hootsuite.com") !== -1 ||
        shExpMatch(host, "*hootsuite.com") ||
        shExpMatch(host, "*hoover.org") ||
        url.indexOf(".hopedialogue.org") !== -1 ||
        url.indexOf("http://hopedialogue.org") === 0 ||
        url.indexOf(".hopto.org") !== -1 ||
        url.indexOf(".hornygamer.com") !== -1 ||
        url.indexOf(".hornytrip.com") !== -1 ||
        url.indexOf("http://hornytrip.com") === 0 ||
        shExpMatch(host, "*horrorporn.com") ||
        shExpMatch(host, "*hostloc.com") ||
        shExpMatch(host, "*hotair.com") ||
        url.indexOf(".hotav.tv") !== -1 ||
        url.indexOf(".hotels.cn") !== -1 ||
        url.indexOf("hotfrog.com.tw") !== -1 ||
        url.indexOf("hotgoo.com") !== -1 ||
        url.indexOf(".hotpornshow.com") !== -1 ||
        url.indexOf("hotpot.hk") !== -1 ||
        url.indexOf(".hotshame.com") !== -1 ||
        shExpMatch(host, "*hotspotshield.com") ||
        shExpMatch(host, "*hottg.com") ||
        url.indexOf(".hotvpn.com") !== -1 ||
        shExpMatch(host, "*hotvpn.com") ||
        shExpMatch(host, "*hougaige.com") ||
        shExpMatch(host, "*howtoforge.com") ||
        shExpMatch(host, "*hoxx.com") ||
        url.indexOf(".hqcdp.org") !== -1 ||
        shExpMatch(host, "*hqcdp.org") ||
        shExpMatch(host, "*hqjapanesesex.com") ||
        url.indexOf("hqmovies.com") !== -1 ||
        url.indexOf(".hrcir.com") !== -1 ||
        url.indexOf(".hrcchina.org") !== -1 ||
        url.indexOf(".hrea.org") !== -1 ||
        url.indexOf(".hrichina.org") !== -1 ||
        shExpMatch(host, "*hrichina.org") ||
        shExpMatch(host, "*hrntt.org") ||
        url.indexOf(".hrtsea.com") !== -1 ||
        url.indexOf(".hrw.org") !== -1 ||
        shExpMatch(host, "*hrw.org") ||
        url.indexOf("hrweb.org") !== -1 ||
        shExpMatch(host, "*hsjp.net") ||
        shExpMatch(host, "*hsselite.com") ||
        url.indexOf("http://hst.net.tw") === 0 ||
        url.indexOf(".hstern.net") !== -1 ||
        url.indexOf(".hstt.net") !== -1 ||
        url.indexOf(".htkou.net") !== -1 ||
        shExpMatch(host, "*htkou.net") ||
        url.indexOf(".hua-yue.net") !== -1 ||
        url.indexOf(".huaglad.com") !== -1 ||
        shExpMatch(host, "*huaglad.com") ||
        url.indexOf(".huanghuagang.org") !== -1 ||
        shExpMatch(host, "*huanghuagang.org") ||
        url.indexOf(".huangyiyu.com") !== -1 ||
        url.indexOf(".huaren.us") !== -1 ||
        shExpMatch(host, "*huaren.us") ||
        url.indexOf(".huaren4us.com") !== -1 ||
        url.indexOf(".huashangnews.com") !== -1 ||
        url.indexOf("http://huashangnews.com") === 0 ||
        url.indexOf("bbs.huasing.org") !== -1 ||
        url.indexOf("huaxia-news.com") !== -1 ||
        url.indexOf("huaxiabao.org") !== -1 ||
        url.indexOf("huaxin.ph") !== -1 ||
        shExpMatch(host, "*huayuworld.org") ||
        shExpMatch(host, "*huffingtonpost.com") ||
        shExpMatch(host, "*huffpost.com") ||
        shExpMatch(host, "*huggingface.co") ||
        shExpMatch(host, "*hugoroy.eu") ||
        shExpMatch(host, "*huhaitai.com") ||
        shExpMatch(host, "*huhamhire.com") ||
        url.indexOf(".huhangfei.com") !== -1 ||
        shExpMatch(host, "*huhangfei.com") ||
        url.indexOf("huiyi.in") !== -1 ||
        url.indexOf(".hulkshare.com") !== -1 ||
        shExpMatch(host, "*humanparty.me") ||
        shExpMatch(host, "*humanrightspressawards.org") ||
        shExpMatch(host, "*hung-ya.com") ||
        shExpMatch(host, "*hungerstrikeforaids.org") ||
        shExpMatch(host, "*huping.net") ||
        url.indexOf("hurgokbayrak.com") !== -1 ||
        url.indexOf(".hurriyet.com.tr") !== -1 ||
        url.indexOf(".hut2.ru") !== -1 ||
        shExpMatch(host, "*hutianyi.net") ||
        url.indexOf("hutong9.net") !== -1 ||
        url.indexOf("huyandex.com") !== -1 ||
        url.indexOf(".hwadzan.tw") !== -1 ||
        shExpMatch(host, "*hwayue.org.tw") ||
        shExpMatch(host, "*hwinfo.com") ||
        shExpMatch(host, "*hxwk.org") ||
        url.indexOf("hxwq.org") !== -1 ||
        shExpMatch(host, "*hyperrate.com") ||
        url.indexOf("ebook.hyread.com.tw") !== -1 ||
        shExpMatch(host, "*ebook.hyread.com.tw") ||
        shExpMatch(host, "*i1.hk") ||
        shExpMatch(host, "*i2p2.de") ||
        shExpMatch(host, "*i2runner.com") ||
        shExpMatch(host, "*i818hk.com") ||
        url.indexOf(".i-cable.com") !== -1 ||
        url.indexOf(".i-part.com.tw") !== -1 ||
        url.indexOf(".iamtopone.com") !== -1 ||
        url.indexOf("iask.ca") !== -1 ||
        shExpMatch(host, "*iask.ca") ||
        url.indexOf("iask.bz") !== -1 ||
        shExpMatch(host, "*iask.bz") ||
        url.indexOf(".iav19.com") !== -1 ||
        url.indexOf("ibiblio.org/pub/packages/ccic") !== -1 ||
        shExpMatch(host, "*ibit.am") ||
        url.indexOf(".iblist.com") !== -1 ||
        shExpMatch(host, "*iblogserv-f.net") ||
        url.indexOf("ibros.org") !== -1 ||
        url.indexOf("http://cn.ibtimes.com") === 0 ||
        url.indexOf(".ibvpn.com") !== -1 ||
        shExpMatch(host, "*ibvpn.com") ||
        url.indexOf("icams.com") !== -1 ||
        shExpMatch(host, "*icedrive.net") ||
        url.indexOf(".icij.org") !== -1 ||
        shExpMatch(host, "*icij.org") ||
        shExpMatch(host, "*icl-fi.org") ||
        url.indexOf(".icoco.com") !== -1 ||
        shExpMatch(host, "*icoco.com") ||
        shExpMatch(host, "*furbo.org") ||
        shExpMatch(host, "*warbler.iconfactory.net") ||
        shExpMatch(host, "*iconpaper.org") ||
        shExpMatch(host, "*icu-project.org") ||
        url.indexOf("w.idaiwan.com/forum") !== -1 ||
        url.indexOf("idemocracy.asia") !== -1 ||
        url.indexOf(".identi.ca") !== -1 ||
        shExpMatch(host, "*identi.ca") ||
        shExpMatch(host, "*idiomconnection.com") ||
        url.indexOf("http://www.idlcoyote.com") === 0 ||
        url.indexOf(".idouga.com") !== -1 ||
        url.indexOf(".idreamx.com") !== -1 ||
        url.indexOf("forum.idsam.com") !== -1 ||
        url.indexOf(".idv.tw") !== -1 ||
        url.indexOf(".ieasy5.com") !== -1 ||
        url.indexOf("http://ieasy5.com") === 0 ||
        url.indexOf(".ied2k.net") !== -1 ||
        url.indexOf(".ienergy1.com") !== -1 ||
        shExpMatch(host, "*iepl.us") ||
        shExpMatch(host, "*ift.tt") ||
        url.indexOf("ifanqiang.com") !== -1 ||
        url.indexOf(".ifcss.org") !== -1 ||
        shExpMatch(host, "*ifcss.org") ||
        url.indexOf("ifjc.org") !== -1 ||
        url.indexOf(".ift.tt") !== -1 ||
        url.indexOf("http://ift.tt") === 0 ||
        shExpMatch(host, "*ifreewares.com") ||
        shExpMatch(host, "*igcd.net") ||
        url.indexOf(".igfw.net") !== -1 ||
        shExpMatch(host, "*igfw.net") ||
        url.indexOf(".igfw.tech") !== -1 ||
        shExpMatch(host, "*igfw.tech") ||
        url.indexOf(".igmg.de") !== -1 ||
        shExpMatch(host, "*ignitedetroit.net") ||
        url.indexOf(".igotmail.com.tw") !== -1 ||
        shExpMatch(host, "*igvita.com") ||
        shExpMatch(host, "*ihakka.net") ||
        url.indexOf(".ihao.org/dz5") !== -1 ||
        shExpMatch(host, "*iicns.com") ||
        url.indexOf(".ikstar.com") !== -1 ||
        shExpMatch(host, "*ilhamtohtiinstitute.org") ||
        shExpMatch(host, "*illusionfactory.com") ||
        shExpMatch(host, "*ilove80.be") ||
        shExpMatch(host, "*im.tv") ||
        url.indexOf("@@||myvlog.im.tv") !== -1 ||
        shExpMatch(host, "*im88.tw") ||
        shExpMatch(host, "*imgchili.net") ||
        url.indexOf(".imageab.com") !== -1 ||
        url.indexOf(".imagefap.com") !== -1 ||
        shExpMatch(host, "*imagefap.com") ||
        shExpMatch(host, "*imageflea.com") ||
        shExpMatch(host, "*imageglass.org") ||
        shExpMatch(host, "*imageshack.us") ||
        shExpMatch(host, "*imagevenue.com") ||
        shExpMatch(host, "*imagezilla.net") ||
        url.indexOf(".imb.org") !== -1 ||
        url.indexOf("http://imb.org") === 0 ||
        url.indexOf("http://www.imdb.com/name/nm0482730") === 0 ||
        url.indexOf(".imdb.com/title/tt0819354") !== -1 ||
        url.indexOf(".imdb.com/title/tt1540068") !== -1 ||
        url.indexOf(".imdb.com/title/tt4908644") !== -1 ||
        url.indexOf(".img.ly") !== -1 ||
        shExpMatch(host, "*img.ly") ||
        shExpMatch(host, "*imgasd.com") ||
        url.indexOf(".imgur.com") !== -1 ||
        shExpMatch(host, "*imgur.com") ||
        url.indexOf(".imkev.com") !== -1 ||
        shExpMatch(host, "*imkev.com") ||
        url.indexOf(".imlive.com") !== -1 ||
        url.indexOf(".immoral.jp") !== -1 ||
        url.indexOf("impact.org.au") !== -1 ||
        url.indexOf("impp.mn") !== -1 ||
        url.indexOf("http://tech2.in.com/video/") === 0 ||
        url.indexOf("in99.org") !== -1 ||
        url.indexOf("in-disguise.com") !== -1 ||
        url.indexOf(".incapdns.net") !== -1 ||
        url.indexOf(".incloak.com") !== -1 ||
        shExpMatch(host, "*incloak.com") ||
        shExpMatch(host, "*incredibox.fr") ||
        shExpMatch(host, "*independent.co.uk") ||
        shExpMatch(host, "*indiablooms.com") ||
        shExpMatch(host, "*indiandefensenews.in") ||
        shExpMatch(host, "*indianarrative.com") ||
        shExpMatch(host, "*timesofindia.indiatimes.com") ||
        url.indexOf(".indiemerch.com") !== -1 ||
        shExpMatch(host, "*indiemerch.com") ||
        shExpMatch(host, "*info-graf.fr") ||
        url.indexOf("website.informer.com") !== -1 ||
        shExpMatch(host, "*initiativesforchina.org") ||
        shExpMatch(host, "*inkbunny.net") ||
        shExpMatch(host, "*inkui.com") ||
        shExpMatch(host, "*inmediahk.net") ||
        shExpMatch(host, "*inmediahk.net") ||
        shExpMatch(host, "*innermongolia.org") ||
        shExpMatch(host, "*inoreader.com") ||
        shExpMatch(host, "*inote.tw") ||
        shExpMatch(host, "*insecam.org") ||
        url.indexOf("http://insecam.org") === 0 ||
        shExpMatch(host, "*inside.com.tw") ||
        shExpMatch(host, "*insidevoa.com") ||
        shExpMatch(host, "*institut-tibetain.org") ||
        shExpMatch(host, "*interactivebrokers.com") ||
        shExpMatch(host, "*internet.org") ||
        url.indexOf("internetdefenseleague.org") !== -1 ||
        url.indexOf("internetfreedom.org") !== -1 ||
        shExpMatch(host, "*internetpopculture.com") ||
        url.indexOf(".inthenameofconfuciusmovie.com") !== -1 ||
        shExpMatch(host, "*inthenameofconfuciusmovie.com") ||
        url.indexOf("inxian.com") !== -1 ||
        shExpMatch(host, "*inxian.com") ||
        url.indexOf("ipalter.com") !== -1 ||
        shExpMatch(host, "*ipfire.org") ||
        shExpMatch(host, "*iphone4hongkong.com") ||
        shExpMatch(host, "*iphonehacks.com") ||
        shExpMatch(host, "*iphonetaiwan.org") ||
        shExpMatch(host, "*iphonix.fr") ||
        shExpMatch(host, "*ipicture.ru") ||
        url.indexOf(".ipjetable.net") !== -1 ||
        shExpMatch(host, "*ipjetable.net") ||
        url.indexOf(".ipobar.com/read.php?") !== -1 ||
        url.indexOf("ipoock.com/img") !== -1 ||
        url.indexOf(".iportal.me") !== -1 ||
        url.indexOf("http://iportal.me") === 0 ||
        shExpMatch(host, "*ippotv.com") ||
        url.indexOf(".ipredator.se") !== -1 ||
        shExpMatch(host, "*ipredator.se") ||
        url.indexOf(".iptv.com.tw") !== -1 ||
        shExpMatch(host, "*iptvbin.com") ||
        shExpMatch(host, "*ipvanish.com") ||
        url.indexOf("iredmail.org") !== -1 ||
        url.indexOf("chinese.irib.ir") !== -1 ||
        shExpMatch(host, "*ironbigfools.compython.net") ||
        shExpMatch(host, "*ironpython.net") ||
        url.indexOf(".ironsocket.com") !== -1 ||
        shExpMatch(host, "*ironsocket.com") ||
        url.indexOf(".is.gd") !== -1 ||
        url.indexOf(".islahhaber.net") !== -1 ||
        url.indexOf(".islam.org.hk") !== -1 ||
        url.indexOf("http://islam.org.hk") === 0 ||
        url.indexOf(".islamawareness.net/Asia/China") !== -1 ||
        url.indexOf(".islamhouse.com") !== -1 ||
        shExpMatch(host, "*islamhouse.com") ||
        url.indexOf(".islamicity.com") !== -1 ||
        url.indexOf(".islamicpluralism.org") !== -1 ||
        url.indexOf(".islamtoday.net") !== -1 ||
        url.indexOf(".isaacmao.com") !== -1 ||
        shExpMatch(host, "*isaacmao.com") ||
        shExpMatch(host, "*isgreat.org") ||
        shExpMatch(host, "*ismaelan.com") ||
        url.indexOf(".ismalltits.com") !== -1 ||
        shExpMatch(host, "*ismprofessional.net") ||
        url.indexOf("isohunt.com") !== -1 ||
        shExpMatch(host, "*israbox.com") ||
        url.indexOf(".issuu.com") !== -1 ||
        shExpMatch(host, "*issuu.com") ||
        url.indexOf(".istars.co.nz") !== -1 ||
        url.indexOf("oversea.istarshine.com") !== -1 ||
        shExpMatch(host, "*oversea.istarshine.com") ||
        url.indexOf("blog.istef.info/2007/10/21/myentunnel") !== -1 ||
        url.indexOf(".istiqlalhewer.com") !== -1 ||
        url.indexOf(".istockphoto.com") !== -1 ||
        url.indexOf("isunaffairs.com") !== -1 ||
        url.indexOf("isuntv.com") !== -1 ||
        shExpMatch(host, "*isupportuyghurs.org") ||
        url.indexOf("itaboo.info") !== -1 ||
        shExpMatch(host, "*itaboo.info") ||
        shExpMatch(host, "*italiatibet.org") ||
        shExpMatch(host, "*itemfix.com") ||
        url.indexOf("ithelp.ithome.com.tw") !== -1 ||
        shExpMatch(host, "*itshidden.com") ||
        url.indexOf(".itsky.it") !== -1 ||
        url.indexOf(".itweet.net") !== -1 ||
        url.indexOf("http://itweet.net") === 0 ||
        url.indexOf(".iu45.com") !== -1 ||
        url.indexOf(".iuhrdf.org") !== -1 ||
        shExpMatch(host, "*iuhrdf.org") ||
        url.indexOf(".iuksky.com") !== -1 ||
        url.indexOf(".ivacy.com") !== -1 ||
        shExpMatch(host, "*ivacy.com") ||
        url.indexOf(".iverycd.com") !== -1 ||
        url.indexOf(".ivpn.net") !== -1 ||
        shExpMatch(host, "*ivpn.net") ||
        shExpMatch(host, "*iwara.tv") ||
        shExpMatch(host, "*ixquick.com") ||
        url.indexOf(".ixxx.com") !== -1 ||
        url.indexOf(".iyouport.com") !== -1 ||
        shExpMatch(host, "*iyouport.com") ||
        shExpMatch(host, "*iyouport.org") ||
        url.indexOf(".izaobao.us") !== -1 ||
        shExpMatch(host, "*gmozomg.izihost.org") ||
        url.indexOf(".izles.net") !== -1 ||
        url.indexOf(".izlesem.org") !== -1 ||
        shExpMatch(host, "*j.mp") ||
        shExpMatch(host, "*jable.tv") ||
        url.indexOf("blog.jackjia.com") !== -1 ||
        url.indexOf("jamaat.org") !== -1 ||
        shExpMatch(host, "*jamestown.org") ||
        url.indexOf(".jamyangnorbu.com") !== -1 ||
        url.indexOf("http://jamyangnorbu.com") === 0 ||
        url.indexOf(".jandyx.com") !== -1 ||
        shExpMatch(host, "*janwongphoto.com") ||
        shExpMatch(host, "*japan-whores.com") ||
        url.indexOf(".jav.com") !== -1 ||
        url.indexOf(".jav101.com") !== -1 ||
        url.indexOf(".jav2be.com") !== -1 ||
        shExpMatch(host, "*jav2be.com") ||
        url.indexOf(".jav68.tv") !== -1 ||
        url.indexOf(".javakiba.org") !== -1 ||
        url.indexOf("http://javakiba.org") === 0 ||
        url.indexOf(".javbus.com") !== -1 ||
        shExpMatch(host, "*javbus.com") ||
        shExpMatch(host, "*javfor.me") ||
        url.indexOf(".javhd.com") !== -1 ||
        url.indexOf(".javhip.com") !== -1 ||
        url.indexOf(".javmobile.net") !== -1 ||
        url.indexOf("http://javmobile.net") === 0 ||
        url.indexOf(".javmoo.com") !== -1 ||
        url.indexOf(".javseen.com") !== -1 ||
        url.indexOf("http://javseen.com") === 0 ||
        url.indexOf("jbtalks.cc") !== -1 ||
        url.indexOf("jbtalks.com") !== -1 ||
        url.indexOf("jbtalks.my") !== -1 ||
        url.indexOf(".jdwsy.com") !== -1 ||
        url.indexOf("jeanyim.com") !== -1 ||
        shExpMatch(host, "*jfqu36.club") ||
        shExpMatch(host, "*jfqu37.xyz") ||
        shExpMatch(host, "*jgoodies.com") ||
        url.indexOf(".jiangweiping.com") !== -1 ||
        shExpMatch(host, "*jiangweiping.com") ||
        shExpMatch(host, "*jiaoyou8.com") ||
        shExpMatch(host, "*jichangtj.com") ||
        url.indexOf(".jiehua.cz") !== -1 ||
        shExpMatch(host, "*hk.jiepang.com") ||
        shExpMatch(host, "*tw.jiepang.com") ||
        url.indexOf("jieshibaobao.com") !== -1 ||
        url.indexOf(".jigglegifs.com") !== -1 ||
        url.indexOf("56cun04.jigsy.com") !== -1 ||
        url.indexOf("jigong1024.com") !== -1 ||
        url.indexOf("daodu14.jigsy.com") !== -1 ||
        url.indexOf("specxinzl.jigsy.com") !== -1 ||
        url.indexOf("wlcnew.jigsy.com") !== -1 ||
        url.indexOf(".jihadology.net") !== -1 ||
        url.indexOf("http://jihadology.net") === 0 ||
        url.indexOf("jinbushe.org") !== -1 ||
        shExpMatch(host, "*jinbushe.org") ||
        url.indexOf(".jingsim.org") !== -1 ||
        url.indexOf("zhao.jinhai.de") !== -1 ||
        url.indexOf("jingpin.org") !== -1 ||
        shExpMatch(host, "*jingpin.org") ||
        url.indexOf("jinpianwang.com") !== -1 ||
        url.indexOf(".jinroukong.com") !== -1 ||
        url.indexOf("ac.jiruan.net") !== -1 ||
        shExpMatch(host, "*jitouch.com") ||
        url.indexOf(".jizzthis.com") !== -1 ||
        url.indexOf("jjgirls.com") !== -1 ||
        url.indexOf(".jkb.cc") !== -1 ||
        url.indexOf("http://jkb.cc") === 0 ||
        url.indexOf("jkforum.net") !== -1 ||
        shExpMatch(host, "*jma.go.jp") ||
        url.indexOf("research.jmsc.hku.hk/social") !== -1 ||
        url.indexOf("weiboscope.jmsc.hku.hk") !== -1 ||
        url.indexOf(".jmscult.com") !== -1 ||
        url.indexOf("http://jmscult.com") === 0 ||
        shExpMatch(host, "*joachims.org") ||
        shExpMatch(host, "*jobso.tv") ||
        url.indexOf(".sunwinism.joinbbs.net") !== -1 ||
        shExpMatch(host, "*joinclubhouse.com") ||
        shExpMatch(host, "*jornaldacidadeonline.com.br") ||
        url.indexOf(".journalchretien.net") !== -1 ||
        shExpMatch(host, "*journalofdemocracy.org") ||
        url.indexOf(".joymiihub.com") !== -1 ||
        url.indexOf(".joyourself.com") !== -1 ||
        url.indexOf("jpopforum.net") !== -1 ||
        shExpMatch(host, "*jsdelivr.net") ||
        shExpMatch(host, "*fiddle.jshell.net") ||
        url.indexOf(".jubushoushen.com") !== -1 ||
        shExpMatch(host, "*jubushoushen.com") ||
        url.indexOf(".juhuaren.com") !== -1 ||
        shExpMatch(host, "*juliereyc.com") ||
        shExpMatch(host, "*junauza.com") ||
        url.indexOf(".june4commemoration.org") !== -1 ||
        url.indexOf(".junefourth-20.net") !== -1 ||
        shExpMatch(host, "*junefourth-20.net") ||
        shExpMatch(host, "*bbs.junglobal.net") ||
        url.indexOf(".juoaa.com") !== -1 ||
        url.indexOf("http://juoaa.com") === 0 ||
        url.indexOf("justfreevpn.com") !== -1 ||
        shExpMatch(host, "*justhost.ru") ||
        url.indexOf(".justicefortenzin.org") !== -1 ||
        url.indexOf("justpaste.it") !== -1 ||
        shExpMatch(host, "*justmysocks1.net") ||
        url.indexOf("justtristan.com") !== -1 ||
        url.indexOf("juyuange.org") !== -1 ||
        url.indexOf("juziyue.com") !== -1 ||
        shExpMatch(host, "*juziyue.com") ||
        shExpMatch(host, "*jwmusic.org") ||
        url.indexOf("@@||music.jwmusic.org") !== -1 ||
        shExpMatch(host, "*cdn.jwplayer.com") ||
        url.indexOf(".jyxf.net") !== -1 ||
        shExpMatch(host, "*k-doujin.net") ||
        shExpMatch(host, "*ka-wai.com") ||
        shExpMatch(host, "*kadokawa.co.jp") ||
        url.indexOf(".kagyu.org") !== -1 ||
        shExpMatch(host, "*kagyu.org.za") ||
        url.indexOf(".kagyumonlam.org") !== -1 ||
        url.indexOf(".kagyunews.com.hk") !== -1 ||
        url.indexOf(".kagyuoffice.org") !== -1 ||
        shExpMatch(host, "*kagyuoffice.org") ||
        shExpMatch(host, "*kagyuoffice.org.tw") ||
        url.indexOf(".kaiyuan.de") !== -1 ||
        url.indexOf(".kakao.com") !== -1 ||
        shExpMatch(host, "*kakao.com") ||
        url.indexOf(".kalachakralugano.org") !== -1 ||
        url.indexOf(".kankan.today") !== -1 ||
        url.indexOf(".kannewyork.com") !== -1 ||
        shExpMatch(host, "*kannewyork.com") ||
        url.indexOf(".kanshifang.com") !== -1 ||
        shExpMatch(host, "*kanshifang.com") ||
        shExpMatch(host, "*kantie.org") ||
        url.indexOf("kanzhongguo.com") !== -1 ||
        url.indexOf("kanzhongguo.eu") !== -1 ||
        url.indexOf(".kaotic.com") !== -1 ||
        shExpMatch(host, "*kaotic.com") ||
        shExpMatch(host, "*karayou.com") ||
        url.indexOf("karkhung.com") !== -1 ||
        url.indexOf(".karmapa.org") !== -1 ||
        url.indexOf(".karmapa-teachings.org") !== -1 ||
        shExpMatch(host, "*kawase.com") ||
        url.indexOf(".kba-tx.org") !== -1 ||
        url.indexOf(".kcoolonline.com") !== -1 ||
        url.indexOf(".kebrum.com") !== -1 ||
        shExpMatch(host, "*kebrum.com") ||
        url.indexOf(".kechara.com") !== -1 ||
        url.indexOf(".keepandshare.com/visit/visit_page.php?i=688154") !== -1 ||
        url.indexOf(".keezmovies.com") !== -1 ||
        url.indexOf(".kendincos.net") !== -1 ||
        url.indexOf(".kenengba.com") !== -1 ||
        shExpMatch(host, "*kenengba.com") ||
        shExpMatch(host, "*keontech.net") ||
        url.indexOf(".kepard.com") !== -1 ||
        shExpMatch(host, "*kepard.com") ||
        url.indexOf("wiki.keso.cn/Home") !== -1 ||
        shExpMatch(host, "*keycdn.com") ||
        url.indexOf(".khabdha.org") !== -1 ||
        url.indexOf(".khmusic.com.tw") !== -1 ||
        shExpMatch(host, "*kichiku-doujinko.com") ||
        url.indexOf(".kik.com") !== -1 ||
        shExpMatch(host, "*kik.com") ||
        url.indexOf("bbs.kimy.com.tw") !== -1 ||
        url.indexOf(".kindleren.com") !== -1 ||
        url.indexOf("http://kindleren.com") === 0 ||
        url.indexOf("http://www.kindleren.com") === 0 ||
        url.indexOf(".kingdomsalvation.org") !== -1 ||
        shExpMatch(host, "*kingdomsalvation.org") ||
        url.indexOf("kinghost.com") !== -1 ||
        shExpMatch(host, "*kingstone.com.tw") ||
        url.indexOf(".kink.com") !== -1 ||
        url.indexOf(".kinokuniya.com") !== -1 ||
        shExpMatch(host, "*kinokuniya.com") ||
        url.indexOf("killwall.com") !== -1 ||
        shExpMatch(host, "*killwall.com") ||
        shExpMatch(host, "*kinmen.travel") ||
        url.indexOf(".kir.jp") !== -1 ||
        url.indexOf(".kissbbao.cn") !== -1 ||
        url.indexOf("http://kiwi.kz") === 0 ||
        shExpMatch(host, "*kk-whys.co.jp") ||
        url.indexOf(".kmuh.org.tw") !== -1 ||
        url.indexOf(".knowledgerush.com/kr/encyclopedia") !== -1 ||
        shExpMatch(host, "*knowyourmeme.com") ||
        url.indexOf(".kobo.com") !== -1 ||
        shExpMatch(host, "*kobo.com") ||
        url.indexOf(".kobobooks.com") !== -1 ||
        shExpMatch(host, "*kobobooks.com") ||
        shExpMatch(host, "*kodingen.com") ||
        url.indexOf("@@||www.kodingen.com") !== -1 ||
        shExpMatch(host, "*kompozer.net") ||
        url.indexOf(".konachan.com") !== -1 ||
        shExpMatch(host, "*konachan.com") ||
        url.indexOf(".kone.com") !== -1 ||
        shExpMatch(host, "*koolsolutions.com") ||
        url.indexOf(".koornk.com") !== -1 ||
        shExpMatch(host, "*koornk.com") ||
        shExpMatch(host, "*koranmandarin.com") ||
        url.indexOf(".korenan2.com") !== -1 ||
        shExpMatch(host, "*kqes.net") ||
        url.indexOf("http://gojet.krtco.com.tw") === 0 ||
        url.indexOf(".ksdl.org") !== -1 ||
        url.indexOf(".ksnews.com.tw") !== -1 ||
        shExpMatch(host, "*ktzhk.com") ||
        url.indexOf(".kui.name/event") !== -1 ||
        shExpMatch(host, "*kukuku.uk") ||
        url.indexOf("kun.im") !== -1 ||
        url.indexOf(".kurashsultan.com") !== -1 ||
        shExpMatch(host, "*kurtmunger.com") ||
        url.indexOf("kusocity.com") !== -1 ||
        shExpMatch(host, "*kwcg.ca") ||
        shExpMatch(host, "*kwok7.com") ||
        url.indexOf(".kwongwah.com.my") !== -1 ||
        shExpMatch(host, "*kwongwah.com.my") ||
        url.indexOf(".kxsw.life") !== -1 ||
        shExpMatch(host, "*kxsw.life") ||
        url.indexOf(".kyofun.com") !== -1 ||
        url.indexOf("kyohk.net") !== -1 ||
        shExpMatch(host, "*kyoyue.com") ||
        url.indexOf(".kyzyhello.com") !== -1 ||
        shExpMatch(host, "*kyzyhello.com") ||
        url.indexOf(".kzeng.info") !== -1 ||
        shExpMatch(host, "*kzeng.info") ||
        url.indexOf("la-forum.org") !== -1 ||
        url.indexOf("ladbrokes.com") !== -1 ||
        shExpMatch(host, "*labiennale.org") ||
        url.indexOf(".lagranepoca.com") !== -1 ||
        shExpMatch(host, "*lagranepoca.com") ||
        shExpMatch(host, "*lala.im") ||
        url.indexOf(".lalulalu.com") !== -1 ||
        url.indexOf(".lama.com.tw") !== -1 ||
        shExpMatch(host, "*lama.com.tw") ||
        url.indexOf(".lamayeshe.com") !== -1 ||
        url.indexOf("http://lamayeshe.com") === 0 ||
        url.indexOf("http://www.lamenhu.com") === 0 ||
        url.indexOf(".lamnia.co.uk") !== -1 ||
        shExpMatch(host, "*lamnia.co.uk") ||
        url.indexOf("lamrim.com") !== -1 ||
        shExpMatch(host, "*landofhope.tv") ||
        url.indexOf(".lanterncn.cn") !== -1 ||
        url.indexOf("http://lanterncn.cn") === 0 ||
        url.indexOf(".lantosfoundation.org") !== -1 ||
        url.indexOf(".laod.cn") !== -1 ||
        url.indexOf("http://laod.cn") === 0 ||
        url.indexOf("laogai.org") !== -1 ||
        shExpMatch(host, "*laogai.org") ||
        shExpMatch(host, "*laogairesearch.org") ||
        url.indexOf("laomiu.com") !== -1 ||
        url.indexOf(".laoyang.info") !== -1 ||
        url.indexOf("http://laoyang.info") === 0 ||
        shExpMatch(host, "*laptoplockdown.com") ||
        url.indexOf(".laqingdan.net") !== -1 ||
        shExpMatch(host, "*laqingdan.net") ||
        shExpMatch(host, "*larsgeorge.com") ||
        url.indexOf(".lastcombat.com") !== -1 ||
        url.indexOf("http://lastcombat.com") === 0 ||
        shExpMatch(host, "*lastfm.es") ||
        url.indexOf("latelinenews.com") !== -1 ||
        shExpMatch(host, "*lausan.hk") ||
        shExpMatch(host, "*le-vpn.com") ||
        url.indexOf(".leafyvpn.net") !== -1 ||
        shExpMatch(host, "*leafyvpn.net") ||
        shExpMatch(host, "*ledger.com") ||
        url.indexOf("leeao.com.cn/bbs/forum.php") !== -1 ||
        url.indexOf("lefora.com") !== -1 ||
        shExpMatch(host, "*left21.hk") ||
        url.indexOf(".legalporno.com") !== -1 ||
        url.indexOf(".legsjapan.com") !== -1 ||
        url.indexOf("http://leirentv.ca") === 0 ||
        url.indexOf("leisurecafe.ca") !== -1 ||
        shExpMatch(host, "*lematin.ch") ||
        url.indexOf(".lemonde.fr") !== -1 ||
        shExpMatch(host, "*lenwhite.com") ||
        shExpMatch(host, "*leorockwell.com") ||
        url.indexOf("lerosua.org") !== -1 ||
        shExpMatch(host, "*lerosua.org") ||
        url.indexOf("blog.lester850.info") !== -1 ||
        shExpMatch(host, "*lesoir.be") ||
        url.indexOf(".letou.com") !== -1 ||
        url.indexOf("letscorp.net") !== -1 ||
        shExpMatch(host, "*letscorp.net") ||
        shExpMatch(host, "*ocsp.int-x3.letsencrypt.org") ||
        shExpMatch(host, "*ss.levyhsu.com") ||
        shExpMatch(host, "*cdn.assets.lfpcontent.com") ||
        url.indexOf(".lhakar.org") !== -1 ||
        url.indexOf("http://lhakar.org") === 0 ||
        url.indexOf(".lhasocialwork.org") !== -1 ||
        url.indexOf(".liangyou.net") !== -1 ||
        shExpMatch(host, "*liangyou.net") ||
        url.indexOf(".lianyue.net") !== -1 ||
        shExpMatch(host, "*liaowangxizang.net") ||
        url.indexOf(".liaowangxizang.net") !== -1 ||
        shExpMatch(host, "*liberal.org.hk") ||
        shExpMatch(host, "*libertysculpturepark.com") ||
        shExpMatch(host, "*libertytimes.com.tw") ||
        url.indexOf("blogs.libraryinformationtechnology.com/jxyz") !== -1 ||
        shExpMatch(host, "*libredd.it") ||
        shExpMatch(host, "*lighten.org.tw") ||
        shExpMatch(host, "*lightnovel.cn") ||
        url.indexOf("limiao.net") !== -1 ||
        url.indexOf("linkuswell.com") !== -1 ||
        url.indexOf("abitno.linpie.com/use-ipv6-to-fuck-gfw") !== -1 ||
        shExpMatch(host, "*line.me") ||
        shExpMatch(host, "*line-apps.com") ||
        url.indexOf(".linglingfa.com") !== -1 ||
        shExpMatch(host, "*lingvodics.com") ||
        url.indexOf(".link-o-rama.com") !== -1 ||
        url.indexOf("http://link-o-rama.com") === 0 ||
        shExpMatch(host, "*linkedin.com") ||
        url.indexOf(".linkideo.com") !== -1 ||
        shExpMatch(host, "*api.linksalpha.com") ||
        shExpMatch(host, "*apidocs.linksalpha.com") ||
        shExpMatch(host, "*www.linksalpha.com") ||
        shExpMatch(host, "*help.linksalpha.com") ||
        shExpMatch(host, "*linux.org.hk") ||
        url.indexOf("linuxtoy.org/archives/installing-west-chamber-on-ubuntu") !== -1 ||
        url.indexOf(".lionsroar.com") !== -1 ||
        url.indexOf(".lipuman.com") !== -1 ||
        shExpMatch(host, "*liquidvpn.com") ||
        shExpMatch(host, "*greatfire.us7.list-manage.com") ||
        shExpMatch(host, "*listennotes.com") ||
        shExpMatch(host, "*listentoyoutube.com") ||
        url.indexOf("listorious.com") !== -1 ||
        url.indexOf(".liu-xiaobo.org") !== -1 ||
        shExpMatch(host, "*liudejun.com") ||
        url.indexOf(".liuhanyu.com") !== -1 ||
        url.indexOf(".liujianshu.com") !== -1 ||
        shExpMatch(host, "*liujianshu.com") ||
        url.indexOf(".liuxiaobo.net") !== -1 ||
        shExpMatch(host, "*liuxiaobo.net") ||
        url.indexOf("liuxiaotong.com") !== -1 ||
        shExpMatch(host, "*liuxiaotong.com") ||
        url.indexOf(".livedoor.jp") !== -1 ||
        url.indexOf(".liveleak.com") !== -1 ||
        shExpMatch(host, "*liveleak.com") ||
        shExpMatch(host, "*livemint.com") ||
        url.indexOf("livestream.com") !== -1 ||
        shExpMatch(host, "*livestream.com") ||
        shExpMatch(host, "*livingonline.us") ||
        shExpMatch(host, "*livingstream.com") ||
        shExpMatch(host, "*livevideo.com") ||
        url.indexOf(".livevideo.com") !== -1 ||
        url.indexOf(".liwangyang.com") !== -1 ||
        url.indexOf("lizhizhuangbi.com") !== -1 ||
        url.indexOf("lkcn.net") !== -1 ||
        shExpMatch(host, "*chat.lmsys.org") ||
        shExpMatch(host, "*lncn.org") ||
        url.indexOf(".load.to") !== -1 ||
        url.indexOf(".lobsangwangyal.com") !== -1 ||
        url.indexOf(".localdomain.ws") !== -1 ||
        shExpMatch(host, "*localdomain.ws") ||
        url.indexOf("localpresshk.com") !== -1 ||
        shExpMatch(host, "*lockestek.com") ||
        url.indexOf("logbot.net") !== -1 ||
        shExpMatch(host, "*logiqx.com") ||
        url.indexOf("secure.logmein.com") !== -1 ||
        shExpMatch(host, "*secure.logmein.com") ||
        shExpMatch(host, "*logos.com.hk") ||
        url.indexOf(".londonchinese.ca") !== -1 ||
        url.indexOf(".longhair.hk") !== -1 ||
        url.indexOf("longmusic.com") !== -1 ||
        shExpMatch(host, "*longtermly.net") ||
        shExpMatch(host, "*lookpic.com") ||
        url.indexOf(".looktoronto.com") !== -1 ||
        url.indexOf("http://looktoronto.com") === 0 ||
        url.indexOf(".lotsawahouse.org/tibetan-masters/fourteenth-dalai-lama") !== -1 ||
        url.indexOf(".lotuslight.org.hk") !== -1 ||
        url.indexOf(".lotuslight.org.tw") !== -1 ||
        url.indexOf("hkreporter.loved.hk") !== -1 ||
        shExpMatch(host, "*lpsg.com") ||
        shExpMatch(host, "*lrfz.com") ||
        url.indexOf(".lrip.org") !== -1 ||
        shExpMatch(host, "*lrip.org") ||
        url.indexOf(".lsd.org.hk") !== -1 ||
        shExpMatch(host, "*lsd.org.hk") ||
        url.indexOf("lsforum.net") !== -1 ||
        url.indexOf(".lsm.org") !== -1 ||
        shExpMatch(host, "*lsm.org") ||
        url.indexOf(".lsmchinese.org") !== -1 ||
        shExpMatch(host, "*lsmchinese.org") ||
        url.indexOf(".lsmkorean.org") !== -1 ||
        shExpMatch(host, "*lsmkorean.org") ||
        url.indexOf(".lsmradio.com/rad_archives") !== -1 ||
        url.indexOf(".lsmwebcast.com") !== -1 ||
        url.indexOf(".ltn.com.tw") !== -1 ||
        shExpMatch(host, "*ltn.com.tw") ||
        shExpMatch(host, "*luckydesigner.space") ||
        url.indexOf(".luke54.com") !== -1 ||
        url.indexOf(".luke54.org") !== -1 ||
        url.indexOf(".lupm.org") !== -1 ||
        shExpMatch(host, "*lupm.org") ||
        shExpMatch(host, "*lushstories.com") ||
        url.indexOf("luxebc.com") !== -1 ||
        url.indexOf("lvhai.org") !== -1 ||
        shExpMatch(host, "*lvhai.org") ||
        shExpMatch(host, "*lvv2.com") ||
        url.indexOf(".lyfhk.net") !== -1 ||
        url.indexOf("http://lyfhk.net") === 0 ||
        shExpMatch(host, "*lzjscript.com") ||
        url.indexOf(".lzmtnews.org") !== -1 ||
        shExpMatch(host, "*lzmtnews.org") ||
        shExpMatch(url, "http://*.m-team.cc") ||
        url.indexOf(".macrovpn.com") !== -1 ||
        url.indexOf("macts.com.tw") !== -1 ||
        shExpMatch(host, "*mad-ar.ch") ||
        shExpMatch(host, "*madrau.com") ||
        shExpMatch(host, "*madthumbs.com") ||
        shExpMatch(host, "*magic-net.info") ||
        url.indexOf("mahabodhi.org") !== -1 ||
        url.indexOf("my.mail.ru") !== -1 ||
        url.indexOf(".maiplus.com") !== -1 ||
        url.indexOf("http://maiplus.com") === 0 ||
        url.indexOf(".maizhong.org") !== -1 ||
        url.indexOf("makkahnewspaper.com") !== -1 ||
        url.indexOf(".mamingzhe.com") !== -1 ||
        url.indexOf("manicur4ik.ru") !== -1 ||
        shExpMatch(host, "*manyvoices.news") ||
        url.indexOf(".maplew.com") !== -1 ||
        url.indexOf("http://maplew.com") === 0 ||
        shExpMatch(host, "*marc.info") ||
        url.indexOf("marguerite.su") !== -1 ||
        shExpMatch(host, "*martincartoons.com") ||
        url.indexOf("maskedip.com") !== -1 ||
        url.indexOf(".maiio.net") !== -1 ||
        url.indexOf(".mail-archive.com") !== -1 ||
        url.indexOf(".malaysiakini.com") !== -1 ||
        shExpMatch(host, "*makemymood.com") ||
        url.indexOf(".manchukuo.net") !== -1 ||
        url.indexOf(".maniash.com") !== -1 ||
        url.indexOf("http://maniash.com") === 0 ||
        url.indexOf(".mansion.com") !== -1 ||
        url.indexOf(".mansionpoker.com") !== -1 ||
        shExpMatch(host, "*martau.com") ||
        url.indexOf("http://blog.martinoei.com") === 0 ||
        url.indexOf(".martsangkagyuofficial.org") !== -1 ||
        url.indexOf("http://martsangkagyuofficial.org") === 0 ||
        url.indexOf("maruta.be/forget") !== -1 ||
        url.indexOf(".marxist.com") !== -1 ||
        shExpMatch(host, "*marxist.net") ||
        url.indexOf(".marxists.org/chinese") !== -1 ||
        shExpMatch(host, "*matainja.com") ||
        shExpMatch(host, "*mathable.io") ||
        shExpMatch(host, "*mathiew-badimon.com") ||
        shExpMatch(host, "*matrix.org") ||
        shExpMatch(host, "*matsushimakaede.com") ||
        shExpMatch(host, "*matters.town") ||
        shExpMatch(host, "*maturejp.com") ||
        url.indexOf("mayimayi.com") !== -1 ||
        url.indexOf(".maxing.jp") !== -1 ||
        url.indexOf(".mcaf.ee") !== -1 ||
        url.indexOf("http://mcaf.ee") === 0 ||
        shExpMatch(host, "*mcadforums.com") ||
        url.indexOf("mcfog.com") !== -1 ||
        url.indexOf("mcreasite.com") !== -1 ||
        url.indexOf(".md-t.org") !== -1 ||
        shExpMatch(host, "*md-t.org") ||
        shExpMatch(host, "*meansys.com") ||
        url.indexOf(".media.org.hk") !== -1 ||
        url.indexOf(".mediachinese.com") !== -1 ||
        shExpMatch(host, "*mediachinese.com") ||
        url.indexOf(".mediafire.com/?") !== -1 ||
        url.indexOf(".mediafire.com/download") !== -1 ||
        url.indexOf(".mediafreakcity.com") !== -1 ||
        shExpMatch(host, "*mediafreakcity.com") ||
        url.indexOf(".medium.com") !== -1 ||
        shExpMatch(host, "*medium.com") ||
        url.indexOf(".meetav.com") !== -1 ||
        shExpMatch(host, "*meetup.com") ||
        url.indexOf("mefeedia.com") !== -1 ||
        url.indexOf("jihadintel.meforum.org") !== -1 ||
        shExpMatch(host, "*mega.co.nz") ||
        shExpMatch(host, "*mega.io") ||
        shExpMatch(host, "*mega.nz") ||
        shExpMatch(host, "*megaproxy.com") ||
        shExpMatch(host, "*megarotic.com") ||
        url.indexOf("megavideo.com") !== -1 ||
        shExpMatch(host, "*megurineluka.com") ||
        shExpMatch(host, "*meizhong.blog") ||
        shExpMatch(host, "*meizhong.report") ||
        url.indexOf(".meltoday.com") !== -1 ||
        url.indexOf(".memehk.com") !== -1 ||
        shExpMatch(host, "*memehk.com") ||
        url.indexOf("memorybbs.com") !== -1 ||
        url.indexOf(".memri.org") !== -1 ||
        url.indexOf(".memrijttm.org") !== -1 ||
        shExpMatch(host, "*mercdn.net") ||
        url.indexOf(".mercyprophet.org") !== -1 ||
        shExpMatch(host, "*mercyprophet.org") ||
        shExpMatch(host, "*mergersandinquisitions.org") ||
        url.indexOf(".meridian-trust.org") !== -1 ||
        shExpMatch(host, "*meridian-trust.org") ||
        url.indexOf(".meripet.biz") !== -1 ||
        shExpMatch(host, "*meripet.biz") ||
        url.indexOf(".meripet.com") !== -1 ||
        shExpMatch(host, "*meripet.com") ||
        shExpMatch(host, "*merit-times.com.tw") ||
        url.indexOf("meshrep.com") !== -1 ||
        url.indexOf(".mesotw.com/bbs") !== -1 ||
        url.indexOf("metacafe.com/watch") !== -1 ||
        shExpMatch(host, "*metafilter.com") ||
        shExpMatch(host, "*meteorshowersonline.com") ||
        shExpMatch(host, "*metro.taipei") ||
        url.indexOf(".metrohk.com.hk/?cmd=detail&categoryID=2") !== -1 ||
        shExpMatch(host, "*metrolife.ca") ||
        url.indexOf(".metroradio.com.hk") !== -1 ||
        url.indexOf("http://metroradio.com.hk") === 0 ||
        shExpMatch(host, "*mewe.com") ||
        url.indexOf("meyou.jp") !== -1 ||
        url.indexOf(".meyul.com") !== -1 ||
        shExpMatch(host, "*mgoon.com") ||
        shExpMatch(host, "*mgstage.com") ||
        shExpMatch(host, "*mh4u.org") ||
        url.indexOf("mhradio.org") !== -1 ||
        url.indexOf("http://michaelanti.com") === 0 ||
        shExpMatch(host, "*michaelmarketl.com") ||
        url.indexOf("http://bbs.mikocon.com") === 0 ||
        url.indexOf(".microvpn.com") !== -1 ||
        url.indexOf("http://microvpn.com") === 0 ||
        url.indexOf("middle-way.net") !== -1 ||
        url.indexOf(".mihk.hk/forum") !== -1 ||
        url.indexOf(".mihr.com") !== -1 ||
        url.indexOf("mihua.org") !== -1 ||
        shExpMatch(host, "*mikesoltys.com") ||
        url.indexOf(".milph.net") !== -1 ||
        url.indexOf("http://milph.net") === 0 ||
        url.indexOf(".milsurps.com") !== -1 ||
        url.indexOf("mimiai.net") !== -1 ||
        url.indexOf(".mimivip.com") !== -1 ||
        url.indexOf(".mimivv.com") !== -1 ||
        url.indexOf(".mindrolling.org") !== -1 ||
        url.indexOf("http://mindrolling.org") === 0 ||
        shExpMatch(host, "*mingdemedia.org") ||
        url.indexOf(".minghui.or.kr") !== -1 ||
        url.indexOf("http://minghui.or.kr") === 0 ||
        url.indexOf("minghui.org") !== -1 ||
        shExpMatch(host, "*minghui.org") ||
        url.indexOf("minghui-a.org") !== -1 ||
        url.indexOf("minghui-b.org") !== -1 ||
        url.indexOf("minghui-school.org") !== -1 ||
        url.indexOf(".mingjinglishi.com") !== -1 ||
        shExpMatch(host, "*mingjinglishi.com") ||
        url.indexOf("mingjingnews.com") !== -1 ||
        shExpMatch(host, "*mingjingtimes.com") ||
        url.indexOf(".mingpao.com") !== -1 ||
        shExpMatch(host, "*mingpao.com") ||
        url.indexOf(".mingpaocanada.com") !== -1 ||
        url.indexOf(".mingpaomonthly.com") !== -1 ||
        url.indexOf("http://mingpaomonthly.com") === 0 ||
        url.indexOf("mingpaonews.com") !== -1 ||
        url.indexOf(".mingpaony.com") !== -1 ||
        url.indexOf(".mingpaosf.com") !== -1 ||
        url.indexOf(".mingpaotor.com") !== -1 ||
        url.indexOf(".mingpaovan.com") !== -1 ||
        url.indexOf(".mingshengbao.com") !== -1 ||
        url.indexOf(".minhhue.net") !== -1 ||
        url.indexOf(".miniforum.org") !== -1 ||
        url.indexOf(".ministrybooks.org") !== -1 ||
        url.indexOf(".minzhuhua.net") !== -1 ||
        shExpMatch(host, "*minzhuhua.net") ||
        url.indexOf("minzhuzhanxian.com") !== -1 ||
        url.indexOf("minzhuzhongguo.org") !== -1 ||
        shExpMatch(host, "*miroguide.com") ||
        url.indexOf("mirrorbooks.com") !== -1 ||
        shExpMatch(host, "*mirrormedia.mg") ||
        url.indexOf(".mist.vip") !== -1 ||
        shExpMatch(host, "*thecenter.mit.edu") ||
        shExpMatch(host, "*scratch.mit.edu") ||
        url.indexOf(".mitao.com.tw") !== -1 ||
        url.indexOf(".mitbbs.com") !== -1 ||
        shExpMatch(host, "*mitbbs.com") ||
        url.indexOf("mitbbsau.com") !== -1 ||
        url.indexOf(".mixero.com") !== -1 ||
        shExpMatch(host, "*mixero.com") ||
        shExpMatch(host, "*mixi.jp") ||
        url.indexOf("mixpod.com") !== -1 ||
        url.indexOf(".mixx.com") !== -1 ||
        shExpMatch(host, "*mixx.com") ||
        shExpMatch(host, "*mizzmona.com") ||
        url.indexOf(".mk5000.com") !== -1 ||
        url.indexOf(".mlcool.com") !== -1 ||
        shExpMatch(host, "*mlzs.work") ||
        url.indexOf(".mm-cg.com") !== -1 ||
        shExpMatch(host, "*mmaaxx.com") ||
        url.indexOf(".mmmca.com") !== -1 ||
        url.indexOf("mnewstv.com") !== -1 ||
        shExpMatch(host, "*mobatek.net") ||
        url.indexOf(".mobile01.com") !== -1 ||
        shExpMatch(host, "*mobile01.com") ||
        shExpMatch(host, "*mobileways.de") ||
        url.indexOf(".mobypicture.com") !== -1 ||
        url.indexOf("http://moby.to") === 0 ||
        shExpMatch(host, "*mod.io") ||
        shExpMatch(host, "*modernchinastudies.org") ||
        shExpMatch(host, "*moeerolibrary.com") ||
        url.indexOf("wiki.moegirl.org") !== -1 ||
        url.indexOf(".mofaxiehui.com") !== -1 ||
        url.indexOf(".mofos.com") !== -1 ||
        shExpMatch(host, "*mog.com") ||
        shExpMatch(host, "*mohu.rocks") ||
        url.indexOf("molihua.org") !== -1 ||
        shExpMatch(host, "*mondex.org") ||
        url.indexOf(".money-link.com.tw") !== -1 ||
        url.indexOf("http://money-link.com.tw") === 0 ||
        url.indexOf("http://www.monlamit.org") === 0 ||
        shExpMatch(host, "*moon.fm") ||
        url.indexOf(".moonbbs.com") !== -1 ||
        shExpMatch(host, "*moonbbs.com") ||
        shExpMatch(host, "*moptt.tw") ||
        shExpMatch(host, "*monica.im") ||
        shExpMatch(host, "*monitorchina.org") ||
        shExpMatch(host, "*monocloud.me") ||
        url.indexOf("bbs.morbell.com") !== -1 ||
        shExpMatch(host, "*morningsun.org") ||
        shExpMatch(host, "*moroneta.com") ||
        url.indexOf(".motherless.com") !== -1 ||
        url.indexOf("http://motherless.com") === 0 ||
        url.indexOf("motor4ik.ru") !== -1 ||
        url.indexOf(".mousebreaker.com") !== -1 ||
        url.indexOf(".movements.org") !== -1 ||
        shExpMatch(host, "*movements.org") ||
        shExpMatch(host, "*moviefap.com") ||
        shExpMatch(host, "*www.moztw.org") ||
        url.indexOf(".mp3buscador.com") !== -1 ||
        shExpMatch(host, "*mpettis.com") ||
        url.indexOf(".mpfinance.com") !== -1 ||
        shExpMatch(host, "*mpfinance.com") ||
        url.indexOf(".mpinews.com") !== -1 ||
        shExpMatch(host, "*mpinews.com") ||
        url.indexOf("mponline.hk") !== -1 ||
        url.indexOf(".mqxd.org") !== -1 ||
        url.indexOf("http://mqxd.org") === 0 ||
        url.indexOf("mrtweet.com") !== -1 ||
        shExpMatch(host, "*mrtweet.com") ||
        url.indexOf("news.hk.msn.com") !== -1 ||
        url.indexOf("news.msn.com.tw") !== -1 ||
        url.indexOf("msguancha.com") !== -1 ||
        url.indexOf(".mswe1.org") !== -1 ||
        url.indexOf("http://mswe1.org") === 0 ||
        shExpMatch(host, "*mthruf.com") ||
        shExpMatch(host, "*mubi.com") ||
        url.indexOf("muchosucko.com") !== -1 ||
        shExpMatch(host, "*multiply.com") ||
        url.indexOf("multiproxy.org") !== -1 ||
        url.indexOf("multiupload.com") !== -1 ||
        url.indexOf(".mullvad.net") !== -1 ||
        shExpMatch(host, "*mullvad.net") ||
        url.indexOf(".mummysgold.com") !== -1 ||
        url.indexOf(".murmur.tw") !== -1 ||
        url.indexOf("http://murmur.tw") === 0 ||
        url.indexOf(".musicade.net") !== -1 ||
        url.indexOf(".muslimvideo.com") !== -1 ||
        shExpMatch(host, "*muzi.com") ||
        shExpMatch(host, "*muzi.net") ||
        shExpMatch(host, "*mx981.com") ||
        url.indexOf(".my-formosa.com") !== -1 ||
        url.indexOf(".my-proxy.com") !== -1 ||
        url.indexOf(".my-private-network.co.uk") !== -1 ||
        shExpMatch(host, "*my-private-network.co.uk") ||
        url.indexOf("forum.my903.com") !== -1 ||
        url.indexOf(".myactimes.com/actimes") !== -1 ||
        shExpMatch(host, "*myanniu.com") ||
        url.indexOf(".myaudiocast.com") !== -1 ||
        shExpMatch(host, "*myaudiocast.com") ||
        url.indexOf(".myav.com.tw/bbs") !== -1 ||
        url.indexOf(".mybbs.us") !== -1 ||
        url.indexOf(".myca168.com") !== -1 ||
        url.indexOf(".mycanadanow.com") !== -1 ||
        shExpMatch(host, "*bbs.mychat.to") ||
        shExpMatch(host, "*mychinamyhome.com") ||
        url.indexOf(".mychinamyhome.com") !== -1 ||
        url.indexOf(".mychinanet.com") !== -1 ||
        url.indexOf(".mychinanews.com") !== -1 ||
        shExpMatch(host, "*mychinanews.com") ||
        url.indexOf(".mychinese.news") !== -1 ||
        shExpMatch(host, "*mycnnews.com") ||
        shExpMatch(host, "*mykomica.org") ||
        url.indexOf("mycould.com/discuz") !== -1 ||
        url.indexOf(".myeasytv.com") !== -1 ||
        shExpMatch(host, "*myeclipseide.com") ||
        url.indexOf(".myforum.com.hk") !== -1 ||
        shExpMatch(host, "*myforum.com.hk") ||
        shExpMatch(host, "*myforum.com.uk") ||
        url.indexOf(".myfreecams.com") !== -1 ||
        url.indexOf(".myfreepaysite.com") !== -1 ||
        url.indexOf(".myfreshnet.com") !== -1 ||
        url.indexOf(".myiphide.com") !== -1 ||
        shExpMatch(host, "*myiphide.com") ||
        url.indexOf("forum.mymaji.com") !== -1 ||
        url.indexOf("mymediarom.com/files/box") !== -1 ||
        shExpMatch(host, "*mymoe.moe") ||
        shExpMatch(host, "*mymusic.net.tw") ||
        shExpMatch(host, "*myparagliding.com") ||
        shExpMatch(host, "*mypopescu.com") ||
        url.indexOf("myradio.hk/podcast") !== -1 ||
        url.indexOf(".myreadingmanga.info") !== -1 ||
        url.indexOf("mysinablog.com") !== -1 ||
        url.indexOf(".myspace.com") !== -1 ||
        shExpMatch(host, "*myspacecdn.com") ||
        url.indexOf(".mytalkbox.com") !== -1 ||
        url.indexOf(".mytizi.com") !== -1 ||
        shExpMatch(host, "*naacoalition.org") ||
        url.indexOf("old.nabble.com") !== -1 ||
        shExpMatch(host, "*naitik.net") ||
        url.indexOf(".nakido.com") !== -1 ||
        shExpMatch(host, "*nakido.com") ||
        url.indexOf(".nakuz.com/bbs") !== -1 ||
        shExpMatch(host, "*nalandabodhi.org") ||
        shExpMatch(host, "*nalandawest.org") ||
        url.indexOf(".namgyal.org") !== -1 ||
        url.indexOf("namgyalmonastery.org") !== -1 ||
        shExpMatch(host, "*namsisi.com") ||
        url.indexOf(".nanyang.com") !== -1 ||
        shExpMatch(host, "*nanyang.com") ||
        url.indexOf(".nanyangpost.com") !== -1 ||
        shExpMatch(host, "*nanyangpost.com") ||
        url.indexOf(".nanzao.com") !== -1 ||
        url.indexOf(".naol.ca") !== -1 ||
        url.indexOf(".naol.cc") !== -1 ||
        url.indexOf("uighur.narod.ru") !== -1 ||
        url.indexOf(".nat.moe") !== -1 ||
        shExpMatch(host, "*nat.moe") ||
        url.indexOf("cyberghost.natado.com") !== -1 ||
        shExpMatch(host, "*national-lottery.co.uk") ||
        shExpMatch(host, "*nationalawakening.org") ||
        shExpMatch(host, "*nationalinterest.org") ||
        url.indexOf("news.nationalgeographic.com/news/2014/06/140603-tiananmen-square") !== -1 ||
        shExpMatch(host, "*nationalreview.com") ||
        url.indexOf(".nationsonline.org/oneworld/tibet") !== -1 ||
        shExpMatch(host, "*line.naver.jp") ||
        shExpMatch(host, "*navyfamily.navy.mil") ||
        shExpMatch(host, "*navyreserve.navy.mil") ||
        shExpMatch(host, "*nko.navy.mil") ||
        shExpMatch(host, "*usno.navy.mil") ||
        url.indexOf("naweeklytimes.com") !== -1 ||
        shExpMatch(host, "*nbcnews.com") ||
        url.indexOf(".nbtvpn.com") !== -1 ||
        url.indexOf("http://nbtvpn.com") === 0 ||
        url.indexOf("nccwatch.org.tw") !== -1 ||
        url.indexOf(".nch.com.tw") !== -1 ||
        url.indexOf(".ncn.org") !== -1 ||
        shExpMatch(host, "*nchrd.org") ||
        shExpMatch(host, "*ncn.org") ||
        shExpMatch(host, "*etools.ncol.com") ||
        url.indexOf(".nde.de") !== -1 ||
        shExpMatch(host, "*ndi.org") ||
        url.indexOf(".ndr.de") !== -1 ||
        url.indexOf(".ned.org") !== -1 ||
        shExpMatch(host, "*nekoslovakia.net") ||
        shExpMatch(host, "*neowin.net") ||
        shExpMatch(host, "*nepusoku.com") ||
        shExpMatch(host, "*net-fits.pro") ||
        shExpMatch(host, "*netalert.me") ||
        url.indexOf("bbs.netbig.com") !== -1 ||
        url.indexOf(".netbirds.com") !== -1 ||
        url.indexOf("netcolony.com") !== -1 ||
        url.indexOf("bolin.netfirms.com") !== -1 ||
        shExpMatch(host, "*netflav.com") ||
        shExpMatch(host, "*netme.cc") ||
        shExpMatch(host, "*netsarang.com") ||
        url.indexOf("netsneak.com") !== -1 ||
        url.indexOf(".network54.com") !== -1 ||
        url.indexOf("networkedblogs.com") !== -1 ||
        url.indexOf(".networktunnel.net") !== -1 ||
        url.indexOf("neverforget8964.org") !== -1 ||
        url.indexOf("new-3lunch.net") !== -1 ||
        url.indexOf(".new-akiba.com") !== -1 ||
        url.indexOf(".new96.ca") !== -1 ||
        url.indexOf(".newcenturymc.com") !== -1 ||
        url.indexOf("http://newcenturymc.com") === 0 ||
        url.indexOf("newcenturynews.com") !== -1 ||
        shExpMatch(host, "*newchen.com") ||
        url.indexOf(".newchen.com") !== -1 ||
        url.indexOf(".newgrounds.com") !== -1 ||
        shExpMatch(host, "*newhighlandvision.com") ||
        url.indexOf("newipnow.com") !== -1 ||
        url.indexOf(".newlandmagazine.com.au") !== -1 ||
        shExpMatch(host, "*newmitbbs.com") ||
        url.indexOf(".newnews.ca") !== -1 ||
        url.indexOf("news100.com.tw") !== -1 ||
        url.indexOf("newschinacomment.org") !== -1 ||
        url.indexOf(".newscn.org") !== -1 ||
        shExpMatch(host, "*newscn.org") ||
        url.indexOf("newspeak.cc/story") !== -1 ||
        url.indexOf(".newsancai.com") !== -1 ||
        shExpMatch(host, "*newsancai.com") ||
        url.indexOf(".newsdetox.ca") !== -1 ||
        url.indexOf(".newsdh.com") !== -1 ||
        shExpMatch(host, "*newsmax.com") ||
        shExpMatch(host, "*newstamago.com") ||
        shExpMatch(host, "*newstapa.org") ||
        shExpMatch(host, "*newstatesman.com") ||
        url.indexOf("newstarnet.com") !== -1 ||
        shExpMatch(host, "*newsweek.com") ||
        url.indexOf(".newtaiwan.com.tw") !== -1 ||
        url.indexOf("newtalk.tw") !== -1 ||
        shExpMatch(host, "*newtalk.tw") ||
        shExpMatch(host, "*newyorker.com") ||
        url.indexOf("newyorktimes.com") !== -1 ||
        shExpMatch(host, "*nexon.com") ||
        url.indexOf(".next11.co.jp") !== -1 ||
        shExpMatch(host, "*nextdigital.com.hk") ||
        url.indexOf(".nextmag.com.tw") !== -1 ||
        url.indexOf(".nextmedia.com") !== -1 ||
        shExpMatch(host, "*nexton-net.jp") ||
        shExpMatch(host, "*nexttv.com.tw") ||
        url.indexOf(".nfjtyd.com") !== -1 ||
        shExpMatch(host, "*co.ng.mil") ||
        shExpMatch(host, "*nga.mil") ||
        url.indexOf("ngensis.com") !== -1 ||
        shExpMatch(host, "*ngodupdongchung.com") ||
        url.indexOf(".nhentai.net") !== -1 ||
        url.indexOf("http://nhentai.net") === 0 ||
        url.indexOf(".nhk-ondemand.jp") !== -1 ||
        url.indexOf(".nicovideo.jp/watch") !== -1 ||
        shExpMatch(host, "*nicovideo.jp") ||
        shExpMatch(host, "*nighost.org") ||
        url.indexOf("av.nightlife141.com") !== -1 ||
        url.indexOf("ninecommentaries.com") !== -1 ||
        url.indexOf(".ninjacloak.com") !== -1 ||
        shExpMatch(host, "*ninjaproxy.ninja") ||
        url.indexOf("nintendium.com") !== -1 ||
        url.indexOf("taiwanyes.ning.com") !== -1 ||
        url.indexOf("usmgtcg.ning.com/forum") !== -1 ||
        shExpMatch(host, "*niusnews.com") ||
        shExpMatch(host, "*njactb.org") ||
        url.indexOf("njuice.com") !== -1 ||
        shExpMatch(host, "*njuice.com") ||
        shExpMatch(host, "*nlfreevpn.com") ||
        shExpMatch(host, "*nmsl.website") ||
        shExpMatch(host, "*nnews.eu") ||
        url.indexOf(".ddns.net/") !== -1 ||
        url.indexOf(".gooddns.info") !== -1 ||
        shExpMatch(host, "*gotdns.ch") ||
        url.indexOf(".maildns.xyz") !== -1 ||
        url.indexOf(".no-ip.org") !== -1 ||
        url.indexOf(".opendn.xyz") !== -1 ||
        url.indexOf(".servehttp.com") !== -1 ||
        url.indexOf("sytes.net") !== -1 ||
        url.indexOf(".whodns.xyz") !== -1 ||
        url.indexOf(".zapto.org") !== -1 ||
        url.indexOf("http://dynupdate.no-ip.com/") === 0 ||
        shExpMatch(host, "*nobel.se") ||
        url.indexOf("nobelprize.org/nobel_prizes/peace/laureates/1989") !== -1 ||
        url.indexOf("nobelprize.org/nobel_prizes/peace/laureates/2010") !== -1 ||
        url.indexOf("nobodycanstop.us") !== -1 ||
        shExpMatch(host, "*nobodycanstop.us") ||
        shExpMatch(host, "*nokogiri.org") ||
        shExpMatch(host, "*nokola.com") ||
        url.indexOf("noodlevpn.com") !== -1 ||
        url.indexOf(".norbulingka.org") !== -1 ||
        url.indexOf("nordvpn.com") !== -1 ||
        shExpMatch(host, "*nordvpn.com") ||
        shExpMatch(host, "*notepad-plus-plus.org") ||
        shExpMatch(host, "*novelasia.com") ||
        url.indexOf(".news.now.com") !== -1 ||
        url.indexOf("http://news.now.com") === 0 ||
        url.indexOf("news.now.com%2Fhome") !== -1 ||
        shExpMatch(host, "*nownews.com") ||
        url.indexOf(".nowtorrents.com") !== -1 ||
        url.indexOf(".noypf.com") !== -1 ||
        shExpMatch(host, "*noypf.com") ||
        shExpMatch(host, "*npa.go.jp") ||
        url.indexOf(".npnt.me") !== -1 ||
        url.indexOf("http://npnt.me") === 0 ||
        url.indexOf(".nps.gov") !== -1 ||
        url.indexOf(".nradio.me") !== -1 ||
        url.indexOf("http://nradio.me") === 0 ||
        url.indexOf(".nrk.no") !== -1 ||
        shExpMatch(host, "*nrk.no") ||
        url.indexOf(".ntd.tv") !== -1 ||
        shExpMatch(host, "*ntd.tv") ||
        url.indexOf(".ntdtv.com") !== -1 ||
        shExpMatch(host, "*ntdtv.com") ||
        shExpMatch(host, "*ntdtv.com.tw") ||
        url.indexOf(".ntdtv.co.kr") !== -1 ||
        url.indexOf("ntdtv.ca") !== -1 ||
        url.indexOf("ntdtv.org") !== -1 ||
        url.indexOf("ntdtv.ru") !== -1 ||
        url.indexOf("ntdtvla.com") !== -1 ||
        url.indexOf(".ntrfun.com") !== -1 ||
        shExpMatch(host, "*cbs.ntu.edu.tw") ||
        shExpMatch(host, "*media.nu.nl") ||
        url.indexOf(".nubiles.net") !== -1 ||
        shExpMatch(host, "*nuexpo.com") ||
        url.indexOf(".nukistream.com") !== -1 ||
        shExpMatch(host, "*nurgo-software.com") ||
        shExpMatch(host, "*nutaku.net") ||
        shExpMatch(host, "*nutsvpn.work") ||
        url.indexOf(".nuvid.com") !== -1 ||
        shExpMatch(host, "*nvdst.com") ||
        url.indexOf("nuzcom.com") !== -1 ||
        url.indexOf(".nvquan.org") !== -1 ||
        url.indexOf(".nvtongzhisheng.org") !== -1 ||
        url.indexOf("http://nvtongzhisheng.org") === 0 ||
        url.indexOf(".nwtca.org") !== -1 ||
        url.indexOf("http://nyaa.eu") === 0 ||
        shExpMatch(host, "*nyaa.si") ||
        shExpMatch(host, "*nybooks.com") ||
        url.indexOf(".nydus.ca") !== -1 ||
        url.indexOf("nylon-angel.com") !== -1 ||
        url.indexOf("nylonstockingsonline.com") !== -1 ||
        shExpMatch(host, "*nypost.com") ||
        url.indexOf(".nzchinese.com") !== -1 ||
        shExpMatch(host, "*nzchinese.net.nz") ||
        shExpMatch(host, "*oann.com") ||
        url.indexOf("observechina.net") !== -1 ||
        url.indexOf(".obutu.com") !== -1 ||
        url.indexOf("ocaspro.com") !== -1 ||
        url.indexOf("occupytiananmen.com") !== -1 ||
        url.indexOf("oclp.hk") !== -1 ||
        url.indexOf(".ocreampies.com") !== -1 ||
        shExpMatch(host, "*october-review.org") ||
        shExpMatch(host, "*odysee.com") ||
        url.indexOf("offbeatchina.com") !== -1 ||
        shExpMatch(host, "*officeoftibet.com") ||
        url.indexOf("http://ofile.org") === 0 ||
        shExpMatch(host, "*ogaoga.org") ||
        url.indexOf("twtr2src.ogaoga.org") !== -1 ||
        url.indexOf(".ogate.org") !== -1 ||
        shExpMatch(host, "*ogate.org") ||
        url.indexOf("www2.ohchr.org/english/bodies/cat/docs/ngos/II_China_41.pdf") !== -1 ||
        shExpMatch(host, "*ohmyrss.com") ||
        url.indexOf(".oikos.com.tw/v4") !== -1 ||
        url.indexOf(".oiktv.com") !== -1 ||
        url.indexOf("oizoblog.com") !== -1 ||
        url.indexOf(".ok.ru") !== -1 ||
        shExpMatch(host, "*ok.ru") ||
        url.indexOf(".okayfreedom.com") !== -1 ||
        shExpMatch(host, "*okayfreedom.com") ||
        shExpMatch(host, "*okk.tw") ||
        url.indexOf("http://filmy.olabloga.pl/player") === 0 ||
        url.indexOf("old-cat.net") !== -1 ||
        shExpMatch(host, "*olevod.com") ||
        shExpMatch(host, "*olumpo.com") ||
        url.indexOf(".olympicwatch.org") !== -1 ||
        shExpMatch(host, "*omct.org") ||
        url.indexOf("omgili.com") !== -1 ||
        shExpMatch(host, "*omnitalk.com") ||
        shExpMatch(host, "*omnitalk.org") ||
        shExpMatch(host, "*omny.fm") ||
        url.indexOf("cling.omy.sg") !== -1 ||
        url.indexOf("forum.omy.sg") !== -1 ||
        url.indexOf("news.omy.sg") !== -1 ||
        url.indexOf("showbiz.omy.sg") !== -1 ||
        shExpMatch(host, "*on.cc") ||
        shExpMatch(host, "*onedrive.live.com") ||
        shExpMatch(host, "*onion.city") ||
        shExpMatch(host, "*onion.ly") ||
        url.indexOf(".onlinecha.com") !== -1 ||
        shExpMatch(host, "*onlineyoutube.com") ||
        shExpMatch(host, "*onlygayvideo.com") ||
        url.indexOf(".onlytweets.com") !== -1 ||
        url.indexOf("http://onlytweets.com") === 0 ||
        url.indexOf("onmoon.net") !== -1 ||
        url.indexOf("onmoon.com") !== -1 ||
        url.indexOf(".onthehunt.com") !== -1 ||
        url.indexOf("http://onthehunt.com") === 0 ||
        url.indexOf(".oopsforum.com") !== -1 ||
        url.indexOf("open.com.hk") !== -1 ||
        url.indexOf("openallweb.com") !== -1 ||
        url.indexOf("opendemocracy.net") !== -1 ||
        shExpMatch(host, "*opendemocracy.net") ||
        url.indexOf(".openervpn.in") !== -1 ||
        url.indexOf("openid.net") !== -1 ||
        shExpMatch(host, "*openid.net") ||
        url.indexOf(".openleaks.org") !== -1 ||
        shExpMatch(host, "*openleaks.org") ||
        shExpMatch(host, "*openstreetmap.org") ||
        shExpMatch(host, "*opentech.fund") ||
        url.indexOf("openvpn.net") !== -1 ||
        shExpMatch(host, "*openvpn.net") ||
        shExpMatch(host, "*openwebster.com") ||
        url.indexOf(".openwrt.org.cn") !== -1 ||
        url.indexOf("@@||openwrt.org.cn") !== -1 ||
        url.indexOf("my.opera.com/dahema") !== -1 ||
        shExpMatch(host, "*demo.opera-mini.net") ||
        url.indexOf(".opus-gaming.com") !== -1 ||
        url.indexOf("http://opus-gaming.com") === 0 ||
        url.indexOf("www.orchidbbs.com") !== -1 ||
        url.indexOf(".organcare.org.tw") !== -1 ||
        url.indexOf("organharvestinvestigation.net") !== -1 ||
        url.indexOf(".orgasm.com") !== -1 ||
        url.indexOf(".orgfree.com") !== -1 ||
        shExpMatch(host, "*oricon.co.jp") ||
        shExpMatch(host, "*orient-doll.com") ||
        url.indexOf("orientaldaily.com.my") !== -1 ||
        shExpMatch(host, "*orientaldaily.com.my") ||
        shExpMatch(host, "*orn.jp") ||
        url.indexOf("t.orzdream.com") !== -1 ||
        shExpMatch(host, "*t.orzdream.com") ||
        url.indexOf("tui.orzdream.com") !== -1 ||
        shExpMatch(host, "*orzistic.org") ||
        shExpMatch(host, "*osfoora.com") ||
        url.indexOf(".otnd.org") !== -1 ||
        shExpMatch(host, "*otnd.org") ||
        shExpMatch(host, "*otto.de") ||
        shExpMatch(host, "*ourdearamy.com") ||
        url.indexOf("oursogo.com") !== -1 ||
        url.indexOf(".oursteps.com.au") !== -1 ||
        shExpMatch(host, "*oursteps.com.au") ||
        url.indexOf(".oursweb.net") !== -1 ||
        shExpMatch(host, "*ourtv.hk") ||
        url.indexOf("xinqimeng.over-blog.com") !== -1 ||
        shExpMatch(host, "*overcast.fm") ||
        shExpMatch(host, "*overdaily.org") ||
        shExpMatch(host, "*overplay.net") ||
        url.indexOf("share.ovi.com/media") !== -1 ||
        shExpMatch(host, "*ovpn.com") ||
        url.indexOf("http://owl.li") === 0 ||
        url.indexOf("http://ht.ly") === 0 ||
        url.indexOf("http://htl.li") === 0 ||
        url.indexOf("http://mash.to") === 0 ||
        url.indexOf("www.owind.com") !== -1 ||
        shExpMatch(host, "*owltail.com") ||
        shExpMatch(host, "*oxfordscholarship.com") ||
        url.indexOf("http://www.oxid.it") === 0 ||
        url.indexOf("oyax.com") !== -1 ||
        url.indexOf("oyghan.com/wps") !== -1 ||
        url.indexOf(".ozchinese.com/bbs") !== -1 ||
        shExpMatch(host, "*ow.ly") ||
        url.indexOf("bbs.ozchinese.com") !== -1 ||
        url.indexOf(".ozvoice.org") !== -1 ||
        shExpMatch(host, "*ozvoice.org") ||
        url.indexOf(".ozxw.com") !== -1 ||
        url.indexOf(".ozyoyo.com") !== -1 ||
        shExpMatch(host, "*pachosting.com") ||
        url.indexOf(".pacificpoker.com") !== -1 ||
        url.indexOf(".packetix.net") !== -1 ||
        shExpMatch(host, "*pacopacomama.com") ||
        url.indexOf(".padmanet.com") !== -1 ||
        shExpMatch(host, "*page.link") ||
        url.indexOf("page2rss.com") !== -1 ||
        shExpMatch(host, "*pagodabox.com") ||
        url.indexOf(".palacemoon.com") !== -1 ||
        url.indexOf("forum.palmislife.com") !== -1 ||
        shExpMatch(host, "*eriversoft.com") ||
        url.indexOf(".paldengyal.com") !== -1 ||
        url.indexOf("paljorpublications.com") !== -1 ||
        url.indexOf(".paltalk.com") !== -1 ||
        shExpMatch(host, "*pandapow.co") ||
        url.indexOf(".pandapow.net") !== -1 ||
        url.indexOf(".pandavpn-jp.com") !== -1 ||
        shExpMatch(host, "*pandavpn-jp.com") ||
        shExpMatch(host, "*pandavpnpro.com") ||
        url.indexOf(".panluan.net") !== -1 ||
        shExpMatch(host, "*panluan.net") ||
        shExpMatch(host, "*pao-pao.net") ||
        url.indexOf("paper.li") !== -1 ||
        url.indexOf("paperb.us") !== -1 ||
        url.indexOf(".paradisehill.cc") !== -1 ||
        url.indexOf(".paradisepoker.com") !== -1 ||
        shExpMatch(host, "*parler.com") ||
        shExpMatch(host, "*parsevideo.com") ||
        url.indexOf(".partycasino.com") !== -1 ||
        url.indexOf(".partypoker.com") !== -1 ||
        url.indexOf(".passion.com") !== -1 ||
        shExpMatch(host, "*passion.com") ||
        url.indexOf(".passiontimes.hk") !== -1 ||
        url.indexOf("pastebin.com") !== -1 ||
        url.indexOf(".pastie.org") !== -1 ||
        shExpMatch(host, "*pastie.org") ||
        shExpMatch(host, "*blog.pathtosharepoint.com") ||
        shExpMatch(host, "*patreon.com") ||
        shExpMatch(host, "*pawoo.net") ||
        url.indexOf("pbs.org/wgbh/pages/frontline/tankman") !== -1 ||
        url.indexOf("pbs.org/wgbh/pages/frontline/tibet") !== -1 ||
        url.indexOf("video.pbs.org") !== -1 ||
        url.indexOf("pbwiki.com") !== -1 ||
        shExpMatch(host, "*pbworks.com") ||
        shExpMatch(host, "*developers.box.net") ||
        shExpMatch(host, "*wiki.oauth.net") ||
        shExpMatch(host, "*wiki.phonegap.com") ||
        shExpMatch(host, "*wiki.jqueryui.com") ||
        shExpMatch(host, "*pbxes.com") ||
        shExpMatch(host, "*pbxes.org") ||
        url.indexOf("pcdvd.com.tw") !== -1 ||
        url.indexOf(".pchome.com.tw") !== -1 ||
        url.indexOf("http://pcij.org") === 0 ||
        url.indexOf(".pcstore.com.tw") !== -1 ||
        shExpMatch(host, "*pct.org.tw") ||
        url.indexOf("pdetails.com") !== -1 ||
        shExpMatch(host, "*pdproxy.com") ||
        shExpMatch(host, "*peace.ca") ||
        url.indexOf("peacefire.org") !== -1 ||
        url.indexOf("peacehall.com") !== -1 ||
        shExpMatch(host, "*peacehall.com") ||
        url.indexOf("http://pearlher.org") === 0 ||
        url.indexOf(".peeasian.com") !== -1 ||
        shExpMatch(host, "*peing.net") ||
        url.indexOf(".pekingduck.org") !== -1 ||
        shExpMatch(host, "*pekingduck.org") ||
        url.indexOf(".pemulihan.or.id") !== -1 ||
        url.indexOf("http://pemulihan.or.id") === 0 ||
        shExpMatch(host, "*pen.io") ||
        url.indexOf("penchinese.com") !== -1 ||
        shExpMatch(host, "*penchinese.net") ||
        url.indexOf(".penchinese.net") !== -1 ||
        url.indexOf("pengyulong.com") !== -1 ||
        url.indexOf("penisbot.com") !== -1 ||
        shExpMatch(host, "*blog.pentalogic.net") ||
        url.indexOf(".penthouse.com") !== -1 ||
        url.indexOf(".pentoy.hk/%E4%B8%AD%E5%9C%8B") !== -1 ||
        url.indexOf(".pentoy.hk/%E6%99%82%E4%BA%8B") !== -1 ||
        url.indexOf(".peoplebookcafe.com") !== -1 ||
        url.indexOf(".peoplenews.tw") !== -1 ||
        shExpMatch(host, "*peoplenews.tw") ||
        url.indexOf(".peopo.org") !== -1 ||
        shExpMatch(host, "*peopo.org") ||
        url.indexOf(".percy.in") !== -1 ||
        url.indexOf(".perfectgirls.net") !== -1 ||
        shExpMatch(host, "*perfect-privacy.com") ||
        shExpMatch(host, "*perplexity.ai") ||
        url.indexOf(".persecutionblog.com") !== -1 ||
        url.indexOf(".persiankitty.com") !== -1 ||
        url.indexOf("phapluan.org") !== -1 ||
        url.indexOf(".phayul.com") !== -1 ||
        shExpMatch(host, "*phayul.com") ||
        url.indexOf("philborges.com") !== -1 ||
        url.indexOf("philly.com") !== -1 ||
        shExpMatch(host, "*phncdn.com") ||
        shExpMatch(host, "*photodharma.net") ||
        shExpMatch(host, "*photofocus.com") ||
        shExpMatch(host, "*phuquocservices.com") ||
        shExpMatch(host, "*picacomiccn.com") ||
        url.indexOf(".picidae.net") !== -1 ||
        shExpMatch(host, "*img*.picturedip.com") ||
        url.indexOf("picturesocial.com") !== -1 ||
        shExpMatch(host, "*pin-cong.com") ||
        url.indexOf(".pin6.com") !== -1 ||
        shExpMatch(host, "*pin6.com") ||
        url.indexOf(".ping.fm") !== -1 ||
        shExpMatch(host, "*ping.fm") ||
        shExpMatch(host, "*pinimg.com") ||
        url.indexOf(".pinkrod.com") !== -1 ||
        shExpMatch(host, "*pinoy-n.com") ||
        shExpMatch(host, "*pinterest.at") ||
        shExpMatch(host, "*pinterest.ca") ||
        shExpMatch(host, "*pinterest.co.kr") ||
        shExpMatch(host, "*pinterest.co.uk") ||
        url.indexOf(".pinterest.com") !== -1 ||
        shExpMatch(host, "*pinterest.com") ||
        shExpMatch(host, "*pinterest.com.mx") ||
        shExpMatch(host, "*pinterest.de") ||
        shExpMatch(host, "*pinterest.dk") ||
        shExpMatch(host, "*pinterest.fr") ||
        shExpMatch(host, "*pinterest.jp") ||
        shExpMatch(host, "*pinterest.nl") ||
        shExpMatch(host, "*pinterest.se") ||
        url.indexOf(".pipii.tv") !== -1 ||
        url.indexOf(".piposay.com") !== -1 ||
        url.indexOf("piraattilahti.org") !== -1 ||
        url.indexOf(".piring.com") !== -1 ||
        shExpMatch(host, "*pixeldrain.com") ||
        shExpMatch(host, "*pixelqi.com") ||
        shExpMatch(host, "*css.pixnet.in") ||
        shExpMatch(host, "*pixnet.net") ||
        url.indexOf(".pixnet.net") !== -1 ||
        url.indexOf(".pk.com") !== -1 ||
        shExpMatch(host, "*placemix.com") ||
        url.indexOf("http://pictures.playboy.com") === 0 ||
        shExpMatch(host, "*playboy.com") ||
        url.indexOf(".playboyplus.com") !== -1 ||
        shExpMatch(host, "*playboyplus.com") ||
        shExpMatch(host, "*player.fm") ||
        url.indexOf(".playno1.com") !== -1 ||
        shExpMatch(host, "*playno1.com") ||
        shExpMatch(host, "*playpcesor.com") ||
        url.indexOf("plays.com.tw") !== -1 ||
        shExpMatch(host, "*plexvpn.pro") ||
        shExpMatch(host, "*m.plixi.com") ||
        url.indexOf("plm.org.hk") !== -1 ||
        url.indexOf("plunder.com") !== -1 ||
        url.indexOf(".plurk.com") !== -1 ||
        shExpMatch(host, "*plurk.com") ||
        url.indexOf(".plus28.com") !== -1 ||
        url.indexOf(".plusbb.com") !== -1 ||
        url.indexOf(".pmatehunter.com") !== -1 ||
        shExpMatch(host, "*pmatehunter.com") ||
        url.indexOf(".pmates.com") !== -1 ||
        shExpMatch(host, "*po2b.com") ||
        url.indexOf("pobieramy.top") !== -1 ||
        shExpMatch(host, "*podbean.com") ||
        shExpMatch(host, "*podictionary.com") ||
        shExpMatch(host, "*poe.com") ||
        url.indexOf(".pokerstars.com") !== -1 ||
        shExpMatch(host, "*pokerstars.com") ||
        url.indexOf(".pokerstars.net") !== -1 ||
        url.indexOf("zh.pokerstrategy.com") !== -1 ||
        url.indexOf("politicalchina.org") !== -1 ||
        url.indexOf("politicalconsultation.org") !== -1 ||
        url.indexOf(".politiscales.net") !== -1 ||
        shExpMatch(host, "*poloniex.com") ||
        url.indexOf(".polymerhk.com") !== -1 ||
        url.indexOf("http://polymerhk.com") === 0 ||
        url.indexOf(".popo.tw") !== -1 ||
        shExpMatch(host, "*popvote.hk") ||
        shExpMatch(host, "*popxi.click") ||
        url.indexOf(".popyard.com") !== -1 ||
        shExpMatch(host, "*popyard.org") ||
        url.indexOf(".porn.com") !== -1 ||
        url.indexOf(".porn2.com") !== -1 ||
        url.indexOf(".porn5.com") !== -1 ||
        url.indexOf(".pornbase.org") !== -1 ||
        url.indexOf(".pornerbros.com") !== -1 ||
        shExpMatch(host, "*pornhd.com") ||
        url.indexOf(".pornhost.com") !== -1 ||
        url.indexOf(".pornhub.com") !== -1 ||
        shExpMatch(host, "*pornhub.com") ||
        url.indexOf(".pornhubdeutsch.net") !== -1 ||
        url.indexOf("http://pornhubdeutsch.net") === 0 ||
        shExpMatch(host, "*pornmm.net") ||
        url.indexOf(".pornoxo.com") !== -1 ||
        url.indexOf(".pornrapidshare.com") !== -1 ||
        shExpMatch(host, "*pornrapidshare.com") ||
        url.indexOf(".pornsharing.com") !== -1 ||
        url.indexOf("http://pornsharing.com") === 0 ||
        url.indexOf(".pornsocket.com") !== -1 ||
        url.indexOf(".pornstarclub.com") !== -1 ||
        shExpMatch(host, "*pornstarclub.com") ||
        url.indexOf(".porntube.com") !== -1 ||
        url.indexOf(".porntubenews.com") !== -1 ||
        url.indexOf(".porntvblog.com") !== -1 ||
        shExpMatch(host, "*porntvblog.com") ||
        url.indexOf(".pornvisit.com") !== -1 ||
        url.indexOf(".portablevpn.nl") !== -1 ||
        shExpMatch(host, "*poskotanews.com") ||
        url.indexOf(".post01.com") !== -1 ||
        url.indexOf(".post76.com") !== -1 ||
        shExpMatch(host, "*post76.com") ||
        url.indexOf(".post852.com") !== -1 ||
        shExpMatch(host, "*post852.com") ||
        url.indexOf("postadult.com") !== -1 ||
        url.indexOf(".postimg.org") !== -1 ||
        shExpMatch(host, "*potvpn.com") ||
        shExpMatch(host, "*pourquoi.tw") ||
        shExpMatch(host, "*powercx.com") ||
        url.indexOf(".powerphoto.org") !== -1 ||
        shExpMatch(host, "*www.powerpointninja.com") ||
        shExpMatch(host, "*presidentlee.tw") ||
        shExpMatch(host, "*cdn.printfriendly.com") ||
        url.indexOf(".pritunl.com") !== -1 ||
        url.indexOf("provpnaccounts.com") !== -1 ||
        shExpMatch(host, "*provpnaccounts.com") ||
        url.indexOf(".proxfree.com") !== -1 ||
        shExpMatch(host, "*proxfree.com") ||
        url.indexOf("proxyanonimo.es") !== -1 ||
        url.indexOf(".proxynetwork.org.uk") !== -1 ||
        shExpMatch(host, "*proxynetwork.org.uk") ||
        shExpMatch(host, "*pts.org.tw") ||
        url.indexOf(".pttvan.org") !== -1 ||
        url.indexOf("pubu.com.tw") !== -1 ||
        url.indexOf("puffinbrowser.com") !== -1 ||
        url.indexOf("pureinsight.org") !== -1 ||
        url.indexOf(".pushchinawall.com") !== -1 ||
        url.indexOf(".putty.org") !== -1 ||
        shExpMatch(host, "*putty.org") ||
        shExpMatch(host, "*calebelston.com") ||
        shExpMatch(host, "*blog.fizzik.com") ||
        shExpMatch(host, "*nf.id.au") ||
        shExpMatch(host, "*sogrady.me") ||
        shExpMatch(host, "*vatn.org") ||
        shExpMatch(host, "*ventureswell.com") ||
        shExpMatch(host, "*whereiswerner.com") ||
        url.indexOf(".power.com") !== -1 ||
        shExpMatch(host, "*power.com") ||
        url.indexOf("powerapple.com") !== -1 ||
        shExpMatch(host, "*powerapple.com") ||
        shExpMatch(host, "*abc.pp.ru") ||
        url.indexOf("heix.pp.ru") !== -1 ||
        shExpMatch(host, "*prayforchina.net") ||
        shExpMatch(host, "*premeforwindows7.com") ||
        shExpMatch(host, "*presentationzen.com") ||
        shExpMatch(host, "*prestige-av.com") ||
        url.indexOf("prisoner-state-secret-journal-premier") !== -1 ||
        url.indexOf(".prisoneralert.com") !== -1 ||
        shExpMatch(host, "*pritunl.com") ||
        shExpMatch(host, "*privacybox.de") ||
        url.indexOf(".private.com/home") !== -1 ||
        shExpMatch(host, "*privateinternetaccess.com") ||
        url.indexOf("privatepaste.com") !== -1 ||
        shExpMatch(host, "*privatepaste.com") ||
        url.indexOf("privatetunnel.com") !== -1 ||
        shExpMatch(host, "*privatetunnel.com") ||
        shExpMatch(host, "*privatevpn.com") ||
        shExpMatch(host, "*privoxy.org") ||
        shExpMatch(host, "*procopytips.com") ||
        shExpMatch(host, "*project-syndicate.org") ||
        shExpMatch(host, "*proton.me") ||
        url.indexOf("provideocoalition.com") !== -1 ||
        shExpMatch(host, "*prosiben.de") ||
        url.indexOf("proxifier.com") !== -1 ||
        url.indexOf("api.proxlet.com") !== -1 ||
        shExpMatch(host, "*proxomitron.info") ||
        url.indexOf(".proxpn.com") !== -1 ||
        shExpMatch(host, "*proxpn.com") ||
        url.indexOf(".proxylist.org.uk") !== -1 ||
        shExpMatch(host, "*proxylist.org.uk") ||
        url.indexOf(".proxypy.net") !== -1 ||
        shExpMatch(host, "*proxypy.net") ||
        url.indexOf("proxyroad.com") !== -1 ||
        url.indexOf(".proxytunnel.net") !== -1 ||
        shExpMatch(host, "*proyectoclubes.com") ||
        url.indexOf("prozz.net") !== -1 ||
        url.indexOf("psblog.name") !== -1 ||
        shExpMatch(host, "*psblog.name") ||
        shExpMatch(host, "*pshvpn.com") ||
        shExpMatch(host, "*psiphon.ca") ||
        url.indexOf(".psiphon3.com") !== -1 ||
        shExpMatch(host, "*psiphon3.com") ||
        url.indexOf(".psiphontoday.com") !== -1 ||
        shExpMatch(host, "*pstatic.net") ||
        shExpMatch(host, "*pt.im") ||
        url.indexOf(".ptt.cc") !== -1 ||
        shExpMatch(host, "*ptt.cc") ||
        shExpMatch(host, "*pttgame.com") ||
        url.indexOf(".puffstore.com") !== -1 ||
        url.indexOf(".puuko.com") !== -1 ||
        shExpMatch(host, "*pullfolio.com") ||
        url.indexOf(".punyu.com/puny") !== -1 ||
        shExpMatch(host, "*pureconcepts.net") ||
        shExpMatch(host, "*pureinsight.org") ||
        shExpMatch(host, "*purepdf.com") ||
        shExpMatch(host, "*purevpn.com") ||
        url.indexOf(".purplelotus.org") !== -1 ||
        url.indexOf(".pursuestar.com") !== -1 ||
        shExpMatch(host, "*pursuestar.com") ||
        shExpMatch(host, "*nitter.pussthecat.org") ||
        url.indexOf(".pussyspace.com") !== -1 ||
        url.indexOf(".putihome.org") !== -1 ||
        url.indexOf(".putlocker.com/file") !== -1 ||
        url.indexOf("pwned.com") !== -1 ||
        shExpMatch(host, "*pximg.net") ||
        url.indexOf("python.com") !== -1 ||
        url.indexOf(".python.com.tw") !== -1 ||
        url.indexOf("http://python.com.tw") === 0 ||
        url.indexOf("pythonhackers.com/p") !== -1 ||
        url.indexOf("ss.pythonic.life/") !== -1 ||
        url.indexOf(".qanote.com") !== -1 ||
        shExpMatch(host, "*qanote.com") ||
        shExpMatch(host, "*qbittorrent.org") ||
        shExpMatch(host, "*qgirl.com.tw") ||
        shExpMatch(host, "*qianbai.tw") ||
        shExpMatch(host, "*qiandao.today") ||
        shExpMatch(host, "*qiangwaikan.com") ||
        url.indexOf(".qi-gong.me") !== -1 ||
        shExpMatch(host, "*qi-gong.me") ||
        shExpMatch(host, "*qiangyou.org") ||
        url.indexOf(".qidian.ca") !== -1 ||
        url.indexOf(".qienkuen.org") !== -1 ||
        shExpMatch(host, "*qienkuen.org") ||
        shExpMatch(host, "*qiwen.lu") ||
        url.indexOf("qixianglu.cn") !== -1 ||
        url.indexOf("bbs.qmzdd.com") !== -1 ||
        url.indexOf(".qkshare.com") !== -1 ||
        url.indexOf("qoos.com") !== -1 ||
        shExpMatch(host, "*qoos.com") ||
        url.indexOf("blog.qooza.hk/dafengqixi") !== -1 ||
        shExpMatch(host, "*efksoft.com") ||
        shExpMatch(host, "*qstatus.com") ||
        shExpMatch(host, "*qtweeter.com") ||
        shExpMatch(host, "*qtrac.eu") ||
        url.indexOf(".quannengshen.org") !== -1 ||
        url.indexOf("http://quannengshen.org") === 0 ||
        url.indexOf("quantumbooter.net") !== -1 ||
        shExpMatch(host, "*quitccp.net") ||
        url.indexOf(".quitccp.net") !== -1 ||
        shExpMatch(host, "*quitccp.org") ||
        url.indexOf(".quitccp.org") !== -1 ||
        url.indexOf(".quora.com/Chinas-Future") !== -1 ||
        url.indexOf(".quran.com") !== -1 ||
        url.indexOf("http://quran.com") === 0 ||
        url.indexOf(".quranexplorer.com") !== -1 ||
        url.indexOf("qusi8.net") !== -1 ||
        url.indexOf(".qvodzy.org") !== -1 ||
        url.indexOf("nemesis2.qx.net/pages/MyEnTunnel") !== -1 ||
        url.indexOf("qxbbs.org") !== -1 ||
        shExpMatch(host, "*r0.ru") ||
        shExpMatch(host, "*radio-canada.ca") ||
        shExpMatch(host, "*rael.org") ||
        url.indexOf("radicalparty.org") !== -1 ||
        shExpMatch(host, "*radio.garden") ||
        shExpMatch(host, "*radioaustralia.net.au") ||
        url.indexOf(".radiohilight.net") !== -1 ||
        shExpMatch(host, "*radiohilight.net") ||
        shExpMatch(host, "*radioline.co") ||
        url.indexOf("opml.radiotime.com") !== -1 ||
        shExpMatch(host, "*radiovaticana.org") ||
        shExpMatch(host, "*radiovncr.com") ||
        shExpMatch(host, "*raggedbanner.com") ||
        shExpMatch(host, "*raidcall.com.tw") ||
        url.indexOf(".raidtalk.com.tw") !== -1 ||
        url.indexOf(".rainbowplan.org/bbs") !== -1 ||
        url.indexOf("https://raindrop.io/") === 0 ||
        url.indexOf(".raizoji.or.jp") !== -1 ||
        url.indexOf("http://raizoji.or.jp") === 0 ||
        url.indexOf("rangwang.biz") !== -1 ||
        url.indexOf("rangzen.com") !== -1 ||
        url.indexOf("rangzen.net") !== -1 ||
        url.indexOf("rangzen.org") !== -1 ||
        url.indexOf("http://blog.ranxiang.com/") === 0 ||
        url.indexOf("ranyunfei.com") !== -1 ||
        shExpMatch(host, "*ranyunfei.com") ||
        url.indexOf(".rapbull.net") !== -1 ||
        url.indexOf("http://rapidgator.net/") === 0 ||
        shExpMatch(host, "*rapidmoviez.com") ||
        url.indexOf("rapidvpn.com") !== -1 ||
        shExpMatch(host, "*rapidvpn.com") ||
        shExpMatch(host, "*rarbgprx.org") ||
        url.indexOf(".raremovie.cc") !== -1 ||
        url.indexOf("http://raremovie.cc") === 0 ||
        url.indexOf(".raremovie.net") !== -1 ||
        url.indexOf("http://raremovie.net") === 0 ||
        shExpMatch(host, "*rationalwiki.org") ||
        shExpMatch(host, "*rawgit.com") ||
        shExpMatch(host, "*rawgithub.com") ||
        shExpMatch(host, "*razyboard.com") ||
        url.indexOf("rcinet.ca") !== -1 ||
        url.indexOf(".read100.com") !== -1 ||
        url.indexOf(".readingtimes.com.tw") !== -1 ||
        shExpMatch(host, "*readingtimes.com.tw") ||
        shExpMatch(host, "*readmoo.com") ||
        url.indexOf(".readydown.com") !== -1 ||
        url.indexOf("http://readydown.com") === 0 ||
        url.indexOf(".realcourage.org") !== -1 ||
        url.indexOf(".realitykings.com") !== -1 ||
        shExpMatch(host, "*realitykings.com") ||
        url.indexOf(".realraptalk.com") !== -1 ||
        url.indexOf(".realsexpass.com") !== -1 ||
        shExpMatch(host, "*reason.com") ||
        url.indexOf(".recordhistory.org") !== -1 ||
        url.indexOf(".recovery.org.tw") !== -1 ||
        url.indexOf("http://online.recoveryversion.org") === 0 ||
        shExpMatch(host, "*recoveryversion.com.tw") ||
        shExpMatch(host, "*red-lang.org") ||
        url.indexOf("redballoonsolidarity.org") !== -1 ||
        shExpMatch(host, "*redbubble.com") ||
        url.indexOf(".redchinacn.net") !== -1 ||
        url.indexOf("http://redchinacn.net") === 0 ||
        url.indexOf("redchinacn.org") !== -1 ||
        url.indexOf("redtube.com") !== -1 ||
        url.indexOf("referer.us") !== -1 ||
        shExpMatch(host, "*referer.us") ||
        shExpMatch(host, "*reflectivecode.com") ||
        url.indexOf("relaxbbs.com") !== -1 ||
        url.indexOf(".relay.com.tw") !== -1 ||
        url.indexOf(".releaseinternational.org") !== -1 ||
        shExpMatch(host, "*religionnews.com") ||
        url.indexOf("religioustolerance.org") !== -1 ||
        url.indexOf("renminbao.com") !== -1 ||
        shExpMatch(host, "*renminbao.com") ||
        url.indexOf(".renyurenquan.org") !== -1 ||
        shExpMatch(host, "*renyurenquan.org") ||
        url.indexOf("http://certificate.revocationcheck.com") === 0 ||
        url.indexOf("subacme.rerouted.org") !== -1 ||
        shExpMatch(host, "*resilio.com") ||
        url.indexOf(".reuters.com") !== -1 ||
        shExpMatch(host, "*reuters.com") ||
        shExpMatch(host, "*reutersmedia.net") ||
        url.indexOf(".revleft.com") !== -1 ||
        shExpMatch(host, "*resistchina.org") ||
        url.indexOf("retweetist.com") !== -1 ||
        shExpMatch(host, "*retweetrank.com") ||
        url.indexOf("revver.com") !== -1 ||
        url.indexOf(".rfa.org") !== -1 ||
        shExpMatch(host, "*rfa.org") ||
        url.indexOf(".rfachina.com") !== -1 ||
        url.indexOf(".rfamobile.org") !== -1 ||
        url.indexOf("rfaweb.org") !== -1 ||
        shExpMatch(host, "*rferl.org") ||
        url.indexOf(".rfi.fr") !== -1 ||
        shExpMatch(host, "*rfi.fr") ||
        shExpMatch(host, "*rfi.my") ||
        url.indexOf("http://vds.rightster.com/") === 0 ||
        url.indexOf(".rigpa.org") !== -1 ||
        url.indexOf(".rileyguide.com") !== -1 ||
        shExpMatch(host, "*riku.me") ||
        url.indexOf(".ritouki.jp") !== -1 ||
        shExpMatch(host, "*ritter.vg") ||
        url.indexOf(".rlwlw.com") !== -1 ||
        shExpMatch(host, "*rlwlw.com") ||
        shExpMatch(host, "*rmbl.ws") ||
        url.indexOf(".rmjdw.com") !== -1 ||
        url.indexOf(".rmjdw132.info") !== -1 ||
        url.indexOf(".roadshow.hk") !== -1 ||
        url.indexOf(".roboforex.com") !== -1 ||
        shExpMatch(host, "*robustnessiskey.com") ||
        shExpMatch(host, "*rocket-inc.net") ||
        url.indexOf("http://www2.rocketbbs.com/11/bbs.cgi?id=5mus") === 0 ||
        url.indexOf("http://www2.rocketbbs.com/11/bbs.cgi?id=freemgl") === 0 ||
        shExpMatch(host, "*rojo.com") ||
        shExpMatch(host, "*ronjoneswriter.com") ||
        shExpMatch(host, "*rolfoundation.org") ||
        shExpMatch(host, "*rolia.net") ||
        shExpMatch(host, "*rolsociety.org") ||
        url.indexOf(".roodo.com") !== -1 ||
        url.indexOf(".rosechina.net") !== -1 ||
        url.indexOf(".rotten.com") !== -1 ||
        shExpMatch(host, "*rou.video") ||
        url.indexOf(".rsf.org") !== -1 ||
        shExpMatch(host, "*rsf.org") ||
        url.indexOf(".rsf-chinese.org") !== -1 ||
        shExpMatch(host, "*rsf-chinese.org") ||
        url.indexOf(".rsgamen.org") !== -1 ||
        shExpMatch(host, "*rsshub.app") ||
        shExpMatch(host, "*phosphation13.rssing.com") ||
        url.indexOf(".rssmeme.com") !== -1 ||
        shExpMatch(host, "*rssmeme.com") ||
        shExpMatch(host, "*rtalabel.org") ||
        url.indexOf(".rthk.hk") !== -1 ||
        shExpMatch(host, "*rthk.hk") ||
        url.indexOf(".rthk.org.hk") !== -1 ||
        shExpMatch(host, "*rthk.org.hk") ||
        url.indexOf(".rti.org.tw") !== -1 ||
        shExpMatch(host, "*rti.org.tw") ||
        shExpMatch(host, "*rti.tw") ||
        url.indexOf(".rtycminnesota.org") !== -1 ||
        shExpMatch(url, ".ruanyifeng.com/blog*some_ways_to_break_the_great_firewall") ||
        url.indexOf("rukor.org") !== -1 ||
        shExpMatch(host, "*rule34.xxx") ||
        shExpMatch(host, "*rumble.com") ||
        url.indexOf(".runbtx.com") !== -1 ||
        url.indexOf(".rushbee.com") !== -1 ||
        shExpMatch(host, "*rusvpn.com") ||
        url.indexOf(".ruten.com.tw") !== -1 ||
        shExpMatch(host, "*ruten.com.tw") ||
        shExpMatch(host, "*rutracker.net") ||
        url.indexOf("rutube.ru") !== -1 ||
        url.indexOf(".ruyiseek.com") !== -1 ||
        url.indexOf(".rxhj.net") !== -1 ||
        url.indexOf("http://rxhj.net") === 0 ||
        url.indexOf(".s1s1s1.com") !== -1 ||
        shExpMatch(host, "*s-cute.com") ||
        url.indexOf(".s-dragon.org") !== -1 ||
        shExpMatch(host, "*s1heng.com") ||
        url.indexOf("http://www.s4miniarchive.com") === 0 ||
        shExpMatch(host, "*s8forum.com") ||
        url.indexOf("cdn1.lp.saboom.com") !== -1 ||
        shExpMatch(host, "*sacks.com") ||
        url.indexOf("sacom.hk") !== -1 ||
        shExpMatch(host, "*sacom.hk") ||
        shExpMatch(host, "*sadpanda.us") ||
        shExpMatch(host, "*safechat.com") ||
        shExpMatch(host, "*safeguarddefenders.com") ||
        url.indexOf(".safervpn.com") !== -1 ||
        shExpMatch(host, "*safervpn.com") ||
        url.indexOf(".saintyculture.com") !== -1 ||
        url.indexOf("http://saintyculture.com") === 0 ||
        url.indexOf(".saiq.me") !== -1 ||
        shExpMatch(host, "*saiq.me") ||
        shExpMatch(host, "*sakuralive.com") ||
        url.indexOf(".sakya.org") !== -1 ||
        url.indexOf(".salvation.org.hk") !== -1 ||
        shExpMatch(host, "*salvation.org.hk") ||
        url.indexOf(".samair.ru/proxy/type-01") !== -1 ||
        url.indexOf(".sambhota.org") !== -1 ||
        shExpMatch(host, "*cn.sandscotaicentral.com") ||
        shExpMatch(host, "*sankakucomplex.com") ||
        shExpMatch(host, "*sankei.com") ||
        url.indexOf(".sanmin.com.tw") !== -1 ||
        url.indexOf("sapikachu.net") !== -1 ||
        url.indexOf("savemedia.com") !== -1 ||
        shExpMatch(host, "*savethesounds.info") ||
        url.indexOf(".savetibet.de") !== -1 ||
        shExpMatch(host, "*savetibet.de") ||
        url.indexOf("savetibet.fr") !== -1 ||
        url.indexOf("savetibet.nl") !== -1 ||
        url.indexOf(".savetibet.org") !== -1 ||
        shExpMatch(host, "*savetibet.org") ||
        url.indexOf("savetibet.ru") !== -1 ||
        url.indexOf(".savetibetstore.org") !== -1 ||
        shExpMatch(host, "*savetibetstore.org") ||
        shExpMatch(host, "*saveuighur.org") ||
        url.indexOf("savevid.com") !== -1 ||
        shExpMatch(host, "*say2.info") ||
        url.indexOf(".sbme.me") !== -1 ||
        url.indexOf("http://sbme.me") === 0 ||
        url.indexOf(".sbs.com.au/yourlanguage") !== -1 ||
        url.indexOf(".scasino.com") !== -1 ||
        url.indexOf("http://www.sciencemag.org/content/344/6187/953") === 0 ||
        url.indexOf(".sciencenets.com") !== -1 ||
        url.indexOf(".scmp.com") !== -1 ||
        shExpMatch(host, "*scmp.com") ||
        url.indexOf(".scmpchinese.com") !== -1 ||
        shExpMatch(host, "*scramble.io") ||
        url.indexOf(".scribd.com") !== -1 ||
        shExpMatch(host, "*scribd.com") ||
        shExpMatch(host, "*scriptspot.com") ||
        shExpMatch(host, "*search.com") ||
        url.indexOf(".searchtruth.com") !== -1 ||
        shExpMatch(host, "*searx.me") ||
        shExpMatch(host, "*seattlefdc.com") ||
        url.indexOf(".secretchina.com") !== -1 ||
        shExpMatch(host, "*secretchina.com") ||
        shExpMatch(host, "*secretgarden.no") ||
        url.indexOf(".secretsline.biz") !== -1 ||
        shExpMatch(host, "*secretsline.biz") ||
        shExpMatch(host, "*secureservercdn.net") ||
        shExpMatch(host, "*securetunnel.com") ||
        url.indexOf("securityinabox.org") !== -1 ||
        url.indexOf("https://securityinabox.org") === 0 ||
        url.indexOf(".securitykiss.com") !== -1 ||
        shExpMatch(host, "*securitykiss.com") ||
        shExpMatch(host, "*seed4.me") ||
        url.indexOf("news.seehua.com") !== -1 ||
        url.indexOf("seesmic.com") !== -1 ||
        shExpMatch(host, "*seevpn.com") ||
        shExpMatch(host, "*seezone.net") ||
        url.indexOf("sejie.com") !== -1 ||
        url.indexOf(".sendspace.com") !== -1 ||
        shExpMatch(host, "*sensortower.com") ||
        url.indexOf("http://tweets.seraph.me/") === 0 ||
        url.indexOf("sesawe.net") !== -1 ||
        shExpMatch(host, "*sesawe.net") ||
        url.indexOf(".sesawe.org") !== -1 ||
        shExpMatch(host, "*sethwklein.net") ||
        url.indexOf(".setn.com") !== -1 ||
        url.indexOf(".settv.com.tw") !== -1 ||
        url.indexOf("forum.setty.com.tw") !== -1 ||
        url.indexOf(".sevenload.com") !== -1 ||
        shExpMatch(host, "*sevenload.com") ||
        url.indexOf(".sex.com") !== -1 ||
        shExpMatch(host, "*sex.com") ||
        url.indexOf(".sex-11.com") !== -1 ||
        shExpMatch(host, "*sex3.com") ||
        shExpMatch(host, "*sex8.cc") ||
        url.indexOf(".sexandsubmission.com") !== -1 ||
        url.indexOf(".sexbot.com") !== -1 ||
        url.indexOf(".sexhu.com") !== -1 ||
        url.indexOf(".sexhuang.com") !== -1 ||
        url.indexOf("sexinsex.net") !== -1 ||
        shExpMatch(host, "*sexinsex.net") ||
        url.indexOf(".sextvx.com") !== -1 ||
        url.indexOf("67.220.91.15") !== -1 ||
        url.indexOf("67.220.91.18") !== -1 ||
        url.indexOf("67.220.91.23") !== -1 ||
        url.indexOf("http://*.sf.net") === 0 ||
        url.indexOf(".sfileydy.com") !== -1 ||
        shExpMatch(host, "*sfshibao.com") ||
        url.indexOf(".sftindia.org") !== -1 ||
        url.indexOf(".sftuk.org") !== -1 ||
        shExpMatch(host, "*sftuk.org") ||
        shExpMatch(host, "*shadeyouvpn.com") ||
        url.indexOf("shadow.ma") !== -1 ||
        url.indexOf(".shadowsky.xyz") !== -1 ||
        url.indexOf(".shadowsocks.asia") !== -1 ||
        shExpMatch(host, "*www.shadowsocks.com") ||
        url.indexOf(".shadowsocks.com") !== -1 ||
        shExpMatch(host, "*shadowsocks.com.hk") ||
        url.indexOf(".shadowsocks.org") !== -1 ||
        shExpMatch(host, "*shadowsocks.org") ||
        shExpMatch(host, "*shadowsocks-r.com") ||
        url.indexOf("http://cn.shafaqna.com") === 0 ||
        shExpMatch(host, "*shahit.biz") ||
        url.indexOf(".shambalapost.com") !== -1 ||
        url.indexOf(".shambhalasun.com") !== -1 ||
        url.indexOf(".shangfang.org") !== -1 ||
        shExpMatch(host, "*shangfang.org") ||
        url.indexOf("shapeservices.com") !== -1 ||
        url.indexOf(".sharebee.com") !== -1 ||
        shExpMatch(host, "*sharecool.org") ||
        url.indexOf("sharpdaily.com.hk") !== -1 ||
        shExpMatch(host, "*sharpdaily.com.hk") ||
        url.indexOf(".sharpdaily.hk") !== -1 ||
        url.indexOf(".sharpdaily.tw") !== -1 ||
        url.indexOf(".shat-tibet.com") !== -1 ||
        url.indexOf("sheikyermami.com") !== -1 ||
        url.indexOf(".shellfire.de") !== -1 ||
        shExpMatch(host, "*shellfire.de") ||
        url.indexOf(".shenshou.org") !== -1 ||
        url.indexOf("shenyun.com") !== -1 ||
        url.indexOf("shenyunperformingarts.org") !== -1 ||
        shExpMatch(host, "*shenyunperformingarts.org") ||
        shExpMatch(host, "*shenyunshop.com") ||
        url.indexOf("shenzhoufilm.com") !== -1 ||
        shExpMatch(host, "*shenzhoufilm.com") ||
        shExpMatch(host, "*shenzhouzhengdao.org") ||
        shExpMatch(host, "*sherabgyaltsen.com") ||
        url.indexOf(".shiatv.net") !== -1 ||
        url.indexOf(".shicheng.org") !== -1 ||
        url.indexOf("shinychan.com") !== -1 ||
        url.indexOf("shipcamouflage.com") !== -1 ||
        url.indexOf(".shireyishunjian.com") !== -1 ||
        url.indexOf(".shitaotv.org") !== -1 ||
        shExpMatch(host, "*shixiao.org") ||
        shExpMatch(host, "*shizhao.org") ||
        url.indexOf("shizhao.org") !== -1 ||
        url.indexOf("shkspr.mobi/dabr") !== -1 ||
        shExpMatch(host, "*shodanhq.com") ||
        shExpMatch(host, "*shooshtime.com") ||
        url.indexOf(".shop2000.com.tw") !== -1 ||
        shExpMatch(host, "*shopee.tw") ||
        url.indexOf(".shopping.com") !== -1 ||
        url.indexOf(".showhaotu.com") !== -1 ||
        url.indexOf(".showtime.jp") !== -1 ||
        shExpMatch(host, "*showwe.tw") ||
        url.indexOf(".shutterstock.com") !== -1 ||
        shExpMatch(host, "*shutterstock.com") ||
        url.indexOf("ch.shvoong.com") !== -1 ||
        url.indexOf(".shwchurch.org") !== -1 ||
        shExpMatch(host, "*shwchurch.org") ||
        url.indexOf(".shwchurch3.com") !== -1 ||
        url.indexOf("http://shwchurch3.com") === 0 ||
        url.indexOf(".siddharthasintent.org") !== -1 ||
        shExpMatch(host, "*sidelinesnews.com") ||
        url.indexOf(".sidelinessportseatery.com") !== -1 ||
        shExpMatch(host, "*signal.org") ||
        url.indexOf(".sijihuisuo.club") !== -1 ||
        url.indexOf(".sijihuisuo.com") !== -1 ||
        url.indexOf(".silkbook.com") !== -1 ||
        shExpMatch(host, "*simbolostwitter.com") ||
        url.indexOf("simplecd.org") !== -1 ||
        shExpMatch(host, "*simplecd.org") ||
        url.indexOf("@@||simplecd.me") !== -1 ||
        url.indexOf("simpleproductivityblog.com") !== -1 ||
        url.indexOf("bbs.sina.com/") !== -1 ||
        url.indexOf("bbs.sina.com%2F") !== -1 ||
        url.indexOf("blog.sina.com.tw") !== -1 ||
        url.indexOf("dailynews.sina.com/") !== -1 ||
        url.indexOf("dailynews.sina.com%2F") !== -1 ||
        url.indexOf("forum.sina.com.hk") !== -1 ||
        url.indexOf("home.sina.com") !== -1 ||
        shExpMatch(host, "*magazines.sina.com.tw") ||
        url.indexOf("news.sina.com.hk") !== -1 ||
        url.indexOf("news.sina.com.tw") !== -1 ||
        url.indexOf("news.sinchew.com.my") !== -1 ||
        url.indexOf(".sinchew.com.my/node/") !== -1 ||
        url.indexOf(".sinchew.com.my/taxonomy/term") !== -1 ||
        url.indexOf(".singaporepools.com.sg") !== -1 ||
        shExpMatch(host, "*singaporepools.com.sg") ||
        url.indexOf(".singfortibet.com") !== -1 ||
        url.indexOf(".singpao.com.hk") !== -1 ||
        url.indexOf("singtao.com") !== -1 ||
        shExpMatch(host, "*singtao.com") ||
        url.indexOf("news.singtao.ca") !== -1 ||
        url.indexOf(".singtaousa.com") !== -1 ||
        shExpMatch(host, "*singtaousa.com") ||
        url.indexOf("sino-monthly.com") !== -1 ||
        shExpMatch(host, "*sinoca.com") ||
        shExpMatch(host, "*sinocast.com") ||
        url.indexOf("sinocism.com") !== -1 ||
        url.indexOf("sinomontreal.ca") !== -1 ||
        url.indexOf(".sinonet.ca") !== -1 ||
        url.indexOf(".sinopitt.info") !== -1 ||
        url.indexOf(".sinoants.com") !== -1 ||
        shExpMatch(host, "*sinoants.com") ||
        shExpMatch(host, "*sinoinsider.com") ||
        url.indexOf(".sinoquebec.com") !== -1 ||
        url.indexOf(".sierrafriendsoftibet.org") !== -1 ||
        url.indexOf("sis.xxx") !== -1 ||
        shExpMatch(host, "*sis001.com") ||
        url.indexOf("sis001.us") !== -1 ||
        url.indexOf(".site2unblock.com") !== -1 ||
        shExpMatch(host, "*site90.net") ||
        url.indexOf(".sitebro.tw") !== -1 ||
        shExpMatch(host, "*sitekreator.com") ||
        shExpMatch(host, "*siteks.uk.to") ||
        shExpMatch(host, "*sitemaps.org") ||
        url.indexOf(".sjrt.org") !== -1 ||
        url.indexOf("http://sjrt.org") === 0 ||
        shExpMatch(host, "*sjum.cn") ||
        shExpMatch(host, "*sketchappsources.com") ||
        shExpMatch(host, "*skimtube.com") ||
        shExpMatch(host, "*lab.skk.moe") ||
        shExpMatch(host, "*skybet.com") ||
        url.indexOf("http://users.skynet.be/reves/tibethome.html") === 0 ||
        url.indexOf(".skyking.com.tw") !== -1 ||
        url.indexOf("bbs.skykiwi.com") !== -1 ||
        url.indexOf("http://www.skype.com/intl/") === 0 ||
        url.indexOf("http://www.skype.com/zh-Hant") === 0 ||
        shExpMatch(host, "*skyvegas.com") ||
        url.indexOf(".xskywalker.com") !== -1 ||
        shExpMatch(host, "*xskywalker.com") ||
        shExpMatch(host, "*skyxvpn.com") ||
        url.indexOf("m.slandr.net") !== -1 ||
        url.indexOf(".slaytizle.com") !== -1 ||
        url.indexOf(".sleazydream.com") !== -1 ||
        shExpMatch(host, "*slheng.com") ||
        shExpMatch(host, "*slideshare.net") ||
        url.indexOf("forum.slime.com.tw") !== -1 ||
        url.indexOf(".slinkset.com") !== -1 ||
        shExpMatch(host, "*slickvpn.com") ||
        url.indexOf(".slutload.com") !== -1 ||
        shExpMatch(host, "*smartdnsproxy.com") ||
        url.indexOf(".smarthide.com") !== -1 ||
        shExpMatch(host, "*app.smartmailcloud.com") ||
        url.indexOf("smchbooks.com") !== -1 ||
        url.indexOf(".smh.com.au/world/death-of-chinese-playboy-leaves-fresh-scratches-in-party-paintwork-20120903-25a8v") !== -1 ||
        url.indexOf("smhric.org") !== -1 ||
        url.indexOf(".smith.edu/dalailama") !== -1 ||
        url.indexOf(".smyxy.org") !== -1 ||
        shExpMatch(host, "*snapchat.com") ||
        url.indexOf(".snaptu.com") !== -1 ||
        shExpMatch(host, "*snaptu.com") ||
        shExpMatch(host, "*sndcdn.com") ||
        url.indexOf("sneakme.net") !== -1 ||
        url.indexOf("snowlionpub.com") !== -1 ||
        url.indexOf("home.so-net.net.tw/yisa_tsai") !== -1 ||
        shExpMatch(host, "*soc.mil") ||
        shExpMatch(host, "*socialblade.com") ||
        url.indexOf(".socks-proxy.net") !== -1 ||
        shExpMatch(host, "*socks-proxy.net") ||
        url.indexOf(".sockscap64.com") !== -1 ||
        shExpMatch(host, "*sockslist.net") ||
        url.indexOf(".socrec.org") !== -1 ||
        url.indexOf("http://socrec.org") === 0 ||
        url.indexOf(".sod.co.jp") !== -1 ||
        url.indexOf(".softether.org") !== -1 ||
        shExpMatch(host, "*softether.org") ||
        url.indexOf(".softether-download.com") !== -1 ||
        shExpMatch(host, "*softether-download.com") ||
        shExpMatch(host, "*cdn.softlayer.net") ||
        shExpMatch(host, "*sogclub.com") ||
        url.indexOf("sohcradio.com") !== -1 ||
        shExpMatch(host, "*sohcradio.com") ||
        url.indexOf(".sokmil.com") !== -1 ||
        shExpMatch(host, "*sorting-algorithms.com") ||
        url.indexOf(".sostibet.org") !== -1 ||
        url.indexOf(".soumo.info") !== -1 ||
        shExpMatch(host, "*soup.io") ||
        url.indexOf("@@||static.soup.io") !== -1 ||
        url.indexOf(".sobees.com") !== -1 ||
        shExpMatch(host, "*sobees.com") ||
        url.indexOf("socialwhale.com") !== -1 ||
        url.indexOf(".softether.co.jp") !== -1 ||
        shExpMatch(host, "*softwarebychuck.com") ||
        url.indexOf("blog.sogoo.org") !== -1 ||
        url.indexOf("soh.tw") !== -1 ||
        shExpMatch(host, "*soh.tw") ||
        url.indexOf("sohfrance.org") !== -1 ||
        shExpMatch(host, "*sohfrance.org") ||
        url.indexOf("chinese.soifind.com") !== -1 ||
        url.indexOf("sokamonline.com") !== -1 ||
        shExpMatch(host, "*solana.com") ||
        url.indexOf(".solidaritetibet.org") !== -1 ||
        url.indexOf(".solidfiles.com") !== -1 ||
        shExpMatch(host, "*somee.com") ||
        url.indexOf(".songjianjun.com") !== -1 ||
        shExpMatch(host, "*songjianjun.com") ||
        url.indexOf(".sonicbbs.cc") !== -1 ||
        url.indexOf(".sonidodelaesperanza.org") !== -1 ||
        url.indexOf(".sopcast.com") !== -1 ||
        url.indexOf(".sopcast.org") !== -1 ||
        shExpMatch(host, "*nakedsecurity.sophos.com") ||
        url.indexOf(".sorazone.net") !== -1 ||
        shExpMatch(host, "*sos.org") ||
        url.indexOf("bbs.sou-tong.org") !== -1 ||
        url.indexOf(".soubory.com") !== -1 ||
        url.indexOf("http://soubory.com") === 0 ||
        url.indexOf(".soul-plus.net") !== -1 ||
        url.indexOf(".soulcaliburhentai.net") !== -1 ||
        shExpMatch(host, "*soulcaliburhentai.net") ||
        shExpMatch(host, "*soundcloud.com") ||
        url.indexOf(".soundofhope.kr") !== -1 ||
        url.indexOf("soundofhope.org") !== -1 ||
        shExpMatch(host, "*soundofhope.org") ||
        shExpMatch(host, "*soupofmedia.com") ||
        url.indexOf("http://sourceforge.net/p*/shadowsocksgui/") === 0 ||
        url.indexOf(".sourcewadio.com") !== -1 ||
        shExpMatch(host, "*south-plus.org") ||
        url.indexOf("southnews.com.tw") !== -1 ||
        url.indexOf("sowers.org.hk") !== -1 ||
        shExpMatch(host, "*wlx.sowiki.net") ||
        shExpMatch(host, "*spankbang.com") ||
        url.indexOf(".spankingtube.com") !== -1 ||
        url.indexOf(".spankwire.com") !== -1 ||
        shExpMatch(host, "*spb.com") ||
        shExpMatch(host, "*speakerdeck.com") ||
        shExpMatch(host, "*speedify.com") ||
        url.indexOf("spem.at") !== -1 ||
        shExpMatch(host, "*spencertipping.com") ||
        shExpMatch(host, "*spendee.com") ||
        shExpMatch(host, "*spicevpn.com") ||
        url.indexOf(".spideroak.com") !== -1 ||
        shExpMatch(host, "*spideroak.com") ||
        url.indexOf(".spike.com") !== -1 ||
        url.indexOf(".spotflux.com") !== -1 ||
        shExpMatch(host, "*spotflux.com") ||
        url.indexOf(".spring4u.info") !== -1 ||
        shExpMatch(host, "*spring4u.info") ||
        shExpMatch(host, "*springwood.me") ||
        shExpMatch(host, "*sproutcore.com") ||
        shExpMatch(host, "*sproxy.info") ||
        shExpMatch(host, "*squirrelvpn.com") ||
        shExpMatch(host, "*srocket.us") ||
        url.indexOf(".ss-link.com") !== -1 ||
        shExpMatch(host, "*ss-link.com") ||
        url.indexOf(".ssglobal.co/wp") !== -1 ||
        url.indexOf("http://ssglobal.co") === 0 ||
        url.indexOf(".ssglobal.me") !== -1 ||
        shExpMatch(host, "*ssh91.com") ||
        url.indexOf(".sspro.ml") !== -1 ||
        url.indexOf("http://sspro.ml") === 0 ||
        url.indexOf(".ssrshare.com") !== -1 ||
        shExpMatch(host, "*ssrshare.com") ||
        shExpMatch(host, "*sss.camp") ||
        shExpMatch(host, "*sstm.moe") ||
        shExpMatch(host, "*sstmlt.moe") ||
        url.indexOf("sstmlt.net") !== -1 ||
        shExpMatch(host, "*sstmlt.net") ||
        url.indexOf("http://stackoverflow.com/users/895245") === 0 ||
        url.indexOf(".stage64.hk") !== -1 ||
        shExpMatch(host, "*stage64.hk") ||
        shExpMatch(host, "*standupfortibet.org") ||
        shExpMatch(host, "*standwithhk.org") ||
        url.indexOf("stanford.edu/group/falun") !== -1 ||
        url.indexOf("usinfo.state.gov") !== -1 ||
        shExpMatch(host, "*statueofdemocracy.org") ||
        url.indexOf(".starfishfx.com") !== -1 ||
        url.indexOf(".starp2p.com") !== -1 ||
        shExpMatch(host, "*starp2p.com") ||
        url.indexOf(".startpage.com") !== -1 ||
        shExpMatch(host, "*startpage.com") ||
        url.indexOf(".startuplivingchina.com") !== -1 ||
        url.indexOf("http://startuplivingchina.com") === 0 ||
        shExpMatch(host, "*static-economist.com") ||
        shExpMatch(host, "*stboy.net") ||
        shExpMatch(host, "*stc.com.sa") ||
        shExpMatch(host, "*steel-storm.com") ||
        url.indexOf(".steganos.com") !== -1 ||
        shExpMatch(host, "*steganos.com") ||
        url.indexOf(".steganos.net") !== -1 ||
        url.indexOf(".stepchina.com") !== -1 ||
        url.indexOf("ny.stgloballink.com") !== -1 ||
        url.indexOf("hd.stheadline.com/news/realtime") !== -1 ||
        url.indexOf("sthoo.com") !== -1 ||
        shExpMatch(host, "*sthoo.com") ||
        url.indexOf(".stickam.com") !== -1 ||
        url.indexOf("stickeraction.com/sesawe") !== -1 ||
        url.indexOf(".stileproject.com") !== -1 ||
        url.indexOf(".sto.cc") !== -1 ||
        url.indexOf(".stoporganharvesting.org") !== -1 ||
        shExpMatch(host, "*storagenewsletter.com") ||
        url.indexOf(".storm.mg") !== -1 ||
        shExpMatch(host, "*storm.mg") ||
        url.indexOf(".stoptibetcrisis.net") !== -1 ||
        shExpMatch(host, "*stoptibetcrisis.net") ||
        shExpMatch(host, "*storify.com") ||
        shExpMatch(host, "*storj.io") ||
        url.indexOf(".stormmediagroup.com") !== -1 ||
        shExpMatch(host, "*stoweboyd.com") ||
        shExpMatch(host, "*straitstimes.com") ||
        url.indexOf("stranabg.com") !== -1 ||
        shExpMatch(host, "*straplessdildo.com") ||
        shExpMatch(host, "*streamable.com") ||
        shExpMatch(host, "*streamate.com") ||
        shExpMatch(host, "*streamingthe.net") ||
        url.indexOf("streema.com/tv/NTDTV_Chinese") !== -1 ||
        url.indexOf("cn.streetvoice.com/article") !== -1 ||
        url.indexOf("cn.streetvoice.com/diary") !== -1 ||
        url.indexOf("cn2.streetvoice.com") !== -1 ||
        url.indexOf("tw.streetvoice.com") !== -1 ||
        url.indexOf(".strikingly.com") !== -1 ||
        shExpMatch(host, "*strongvpn.com") ||
        url.indexOf(".strongwindpress.com") !== -1 ||
        url.indexOf(".student.tw/db") !== -1 ||
        shExpMatch(host, "*studentsforafreetibet.org") ||
        shExpMatch(host, "*stumbleupon.com") ||
        url.indexOf("stupidvideos.com") !== -1 ||
        shExpMatch(host, "*substack.com") ||
        url.indexOf(".successfn.com") !== -1 ||
        url.indexOf("panamapapers.sueddeutsche.de") !== -1 ||
        url.indexOf(".sugarsync.com") !== -1 ||
        shExpMatch(host, "*sugarsync.com") ||
        url.indexOf(".sugobbs.com") !== -1 ||
        shExpMatch(host, "*sugumiru18.com") ||
        shExpMatch(host, "*suissl.com") ||
        url.indexOf("summify.com") !== -1 ||
        url.indexOf(".sumrando.com") !== -1 ||
        shExpMatch(host, "*sumrando.com") ||
        url.indexOf("sun1911.com") !== -1 ||
        shExpMatch(host, "*sundayguardianlive.com") ||
        url.indexOf(".sunporno.com") !== -1 ||
        shExpMatch(host, "*sunmedia.ca") ||
        shExpMatch(host, "*sunporno.com") ||
        url.indexOf(".sunskyforum.com") !== -1 ||
        url.indexOf(".sunta.com.tw") !== -1 ||
        url.indexOf(".sunvpn.net") !== -1 ||
        url.indexOf(".suoluo.org") !== -1 ||
        url.indexOf(".superfreevpn.com") !== -1 ||
        url.indexOf(".supervpn.net") !== -1 ||
        shExpMatch(host, "*supervpn.net") ||
        url.indexOf(".superzooi.com") !== -1 ||
        url.indexOf("http://superzooi.com") === 0 ||
        url.indexOf(".suppig.net") !== -1 ||
        url.indexOf(".suprememastertv.com") !== -1 ||
        url.indexOf("http://suprememastertv.com") === 0 ||
        url.indexOf(".surfeasy.com") !== -1 ||
        shExpMatch(host, "*surfeasy.com") ||
        url.indexOf(".surfeasy.com.au") !== -1 ||
        url.indexOf("http://surfeasy.com.au") === 0 ||
        shExpMatch(host, "*surfshark.com") ||
        shExpMatch(host, "*surrenderat20.net") ||
        url.indexOf(".svsfx.com") !== -1 ||
        url.indexOf(".swissinfo.ch") !== -1 ||
        shExpMatch(host, "*swissinfo.ch") ||
        url.indexOf(".swissvpn.net") !== -1 ||
        shExpMatch(host, "*swissvpn.net") ||
        url.indexOf("switchvpn.net") !== -1 ||
        shExpMatch(host, "*switchvpn.net") ||
        url.indexOf(".sydneytoday.com") !== -1 ||
        shExpMatch(host, "*sydneytoday.com") ||
        url.indexOf(".sylfoundation.org") !== -1 ||
        shExpMatch(host, "*sylfoundation.org") ||
        shExpMatch(host, "*syncback.com") ||
        url.indexOf("sysresccd.org") !== -1 ||
        url.indexOf(".sytes.net") !== -1 ||
        url.indexOf("blog.syx86.com/2009/09/puff") !== -1 ||
        url.indexOf("blog.syx86.cn/2009/09/puff") !== -1 ||
        url.indexOf(".szbbs.net") !== -1 ||
        url.indexOf(".szetowah.org.hk") !== -1 ||
        shExpMatch(host, "*t-g.com") ||
        url.indexOf(".t35.com") !== -1 ||
        url.indexOf(".t66y.com") !== -1 ||
        shExpMatch(host, "*t66y.com") ||
        shExpMatch(host, "*esg.t91y.com") ||
        url.indexOf(".taa-usa.org") !== -1 ||
        url.indexOf("http://taa-usa.org") === 0 ||
        url.indexOf(".taaze.tw") !== -1 ||
        shExpMatch(host, "*taaze.tw") ||
        url.indexOf("http://www.tablesgenerator.com/") === 0 ||
        url.indexOf("tabtter.jp") !== -1 ||
        url.indexOf(".tacem.org") !== -1 ||
        url.indexOf(".taconet.com.tw") !== -1 ||
        shExpMatch(host, "*taedp.org.tw") ||
        url.indexOf(".tafm.org") !== -1 ||
        url.indexOf(".tagwa.org.au") !== -1 ||
        url.indexOf("tagwalk.com") !== -1 ||
        shExpMatch(host, "*tagwalk.com") ||
        url.indexOf("tahr.org.tw") !== -1 ||
        url.indexOf(".taipeisociety.org") !== -1 ||
        shExpMatch(host, "*taipeisociety.org") ||
        shExpMatch(host, "*taipeitimes.com") ||
        shExpMatch(host, "*taisounds.com") ||
        url.indexOf(".taiwanbible.com") !== -1 ||
        url.indexOf(".taiwancon.com") !== -1 ||
        url.indexOf(".taiwandaily.net") !== -1 ||
        shExpMatch(host, "*taiwandaily.net") ||
        url.indexOf(".taiwandc.org") !== -1 ||
        shExpMatch(host, "*taiwanhot.net") ||
        url.indexOf(".taiwanjustice.com") !== -1 ||
        url.indexOf("taiwankiss.com") !== -1 ||
        url.indexOf("taiwannation.com") !== -1 ||
        url.indexOf("taiwannation.com.tw") !== -1 ||
        shExpMatch(host, "*taiwanncf.org.tw") ||
        shExpMatch(host, "*taiwannews.com.tw") ||
        url.indexOf("http://www.taiwanonline.cc/") === 0 ||
        url.indexOf("taiwantp.net") !== -1 ||
        shExpMatch(host, "*taiwantt.org.tw") ||
        url.indexOf("taiwanus.net") !== -1 ||
        url.indexOf("taiwanyes.com") !== -1 ||
        url.indexOf("taiwan-sex.com") !== -1 ||
        url.indexOf(".talk853.com") !== -1 ||
        url.indexOf(".talkboxapp.com") !== -1 ||
        shExpMatch(host, "*talkboxapp.com") ||
        url.indexOf(".talkcc.com") !== -1 ||
        shExpMatch(host, "*talkcc.com") ||
        url.indexOf(".talkonly.net") !== -1 ||
        shExpMatch(host, "*talkonly.net") ||
        shExpMatch(host, "*tamiaode.tk") ||
        shExpMatch(host, "*tanc.org") ||
        url.indexOf("tangben.com") !== -1 ||
        url.indexOf(".tangren.us") !== -1 ||
        url.indexOf(".taoism.net") !== -1 ||
        url.indexOf("http://taoism.net") === 0 ||
        url.indexOf(".taolun.info") !== -1 ||
        shExpMatch(host, "*taolun.info") ||
        url.indexOf(".tapatalk.com") !== -1 ||
        shExpMatch(host, "*tapatalk.com") ||
        url.indexOf("blog.taragana.com") !== -1 ||
        url.indexOf(".tascn.com.au") !== -1 ||
        shExpMatch(host, "*taup.net") ||
        url.indexOf("http://www.taup.org.tw") === 0 ||
        url.indexOf(".taweet.com") !== -1 ||
        shExpMatch(host, "*taweet.com") ||
        url.indexOf(".tbcollege.org") !== -1 ||
        shExpMatch(host, "*tbcollege.org") ||
        url.indexOf(".tbi.org.hk") !== -1 ||
        url.indexOf(".tbicn.org") !== -1 ||
        url.indexOf(".tbjyt.org") !== -1 ||
        shExpMatch(host, "*tbpic.info") ||
        url.indexOf(".tbrc.org") !== -1 ||
        url.indexOf("tbs-rainbow.org") !== -1 ||
        url.indexOf(".tbsec.org") !== -1 ||
        shExpMatch(host, "*tbsec.org") ||
        url.indexOf("tbskkinabalu.page.tl") !== -1 ||
        url.indexOf(".tbsmalaysia.org") !== -1 ||
        url.indexOf(".tbsn.org") !== -1 ||
        shExpMatch(host, "*tbsn.org") ||
        url.indexOf(".tbsseattle.org") !== -1 ||
        url.indexOf(".tbssqh.org") !== -1 ||
        url.indexOf("http://tbssqh.org") === 0 ||
        url.indexOf("tbswd.org") !== -1 ||
        url.indexOf(".tbtemple.org.uk") !== -1 ||
        url.indexOf(".tbthouston.org") !== -1 ||
        url.indexOf(".tccwonline.org") !== -1 ||
        url.indexOf(".tcewf.org") !== -1 ||
        url.indexOf("tchrd.org") !== -1 ||
        url.indexOf("tcnynj.org") !== -1 ||
        shExpMatch(host, "*tcpspeed.co") ||
        url.indexOf(".tcpspeed.com") !== -1 ||
        shExpMatch(host, "*tcpspeed.com") ||
        url.indexOf(".tcsofbc.org") !== -1 ||
        url.indexOf(".tcsovi.org") !== -1 ||
        url.indexOf(".tdm.com.mo") !== -1 ||
        url.indexOf("teamamericany.com") !== -1 ||
        shExpMatch(host, "*techspot.com") ||
        shExpMatch(host, "*techviz.net") ||
        shExpMatch(host, "*teck.in") ||
        url.indexOf(".teeniefuck.net") !== -1 ||
        url.indexOf("teensinasia.com") !== -1 ||
        shExpMatch(host, "*tehrantimes.com") ||
        url.indexOf(".telecomspace.com") !== -1 ||
        shExpMatch(host, "*telegraph.co.uk") ||
        url.indexOf(".tenacy.com") !== -1 ||
        shExpMatch(host, "*tenor.com") ||
        shExpMatch(host, "*tenzinpalmo.com") ||
        url.indexOf(".tew.org") !== -1 ||
        shExpMatch(host, "*tew.org") ||
        shExpMatch(host, "*tfiflve.com") ||
        url.indexOf(".thaicn.com") !== -1 ||
        shExpMatch(host, "*theatlantic.com") ||
        shExpMatch(host, "*theatrum-belli.com") ||
        shExpMatch(host, "*cn.theaustralian.com.au") ||
        url.indexOf("theblemish.com") !== -1 ||
        shExpMatch(host, "*thebcomplex.com") ||
        shExpMatch(host, "*theblaze.com") ||
        url.indexOf(".thebobs.com") !== -1 ||
        shExpMatch(host, "*thebobs.com") ||
        url.indexOf(".thechinabeat.org") !== -1 ||
        shExpMatch(host, "*thechinacollection.org") ||
        url.indexOf("http://www.thechinastory.org/yearbooks/yearbook-2012/") === 0 ||
        shExpMatch(host, "*theconversation.com") ||
        url.indexOf(".thedalailamamovie.com") !== -1 ||
        url.indexOf("http://thedalailamamovie.com") === 0 ||
        shExpMatch(host, "*thediplomat.com") ||
        shExpMatch(host, "*thedw.us") ||
        shExpMatch(host, "*theepochtimes.com") ||
        url.indexOf("thefrontier.hk/tf") !== -1 ||
        shExpMatch(host, "*theguardian.com") ||
        shExpMatch(host, "*thegay.com") ||
        url.indexOf("http://thegioitinhoc.vn/") === 0 ||
        url.indexOf(".thegly.com") !== -1 ||
        url.indexOf(".thehots.info") !== -1 ||
        url.indexOf("thehousenews.com") !== -1 ||
        shExpMatch(host, "*thehun.net") ||
        url.indexOf(".theinitium.com") !== -1 ||
        shExpMatch(host, "*theinitium.com") ||
        shExpMatch(host, "*themoviedb.org") ||
        url.indexOf(".thenewslens.com") !== -1 ||
        shExpMatch(host, "*thenewslens.com") ||
        url.indexOf(".thepiratebay.org") !== -1 ||
        shExpMatch(host, "*thepiratebay.org") ||
        url.indexOf(".theporndude.com") !== -1 ||
        shExpMatch(host, "*theporndude.com") ||
        shExpMatch(host, "*theportalwiki.com") ||
        shExpMatch(host, "*theprint.in") ||
        shExpMatch(host, "*threadreaderapp.com") ||
        url.indexOf("thereallove.kr") !== -1 ||
        url.indexOf("therock.net.nz") !== -1 ||
        shExpMatch(host, "*thesaturdaypaper.com.au") ||
        shExpMatch(host, "*thestandnews.com") ||
        url.indexOf("thetibetcenter.org") !== -1 ||
        url.indexOf("thetibetconnection.org") !== -1 ||
        url.indexOf(".thetibetmuseum.org") !== -1 ||
        url.indexOf(".thetibetpost.com") !== -1 ||
        shExpMatch(host, "*thetibetpost.com") ||
        shExpMatch(host, "*thetinhat.com") ||
        url.indexOf("thetrotskymovie.com") !== -1 ||
        shExpMatch(host, "*thetvdb.com") ||
        url.indexOf("thevivekspot.com") !== -1 ||
        shExpMatch(host, "*thewgo.org") ||
        url.indexOf(".theync.com") !== -1 ||
        url.indexOf("http://theync.com") === 0 ||
        url.indexOf(".thinkingtaiwan.com") !== -1 ||
        shExpMatch(host, "*thinkingtaiwan.com") ||
        url.indexOf(".thisav.com") !== -1 ||
        url.indexOf("http://thisav.com") === 0 ||
        url.indexOf(".thlib.org") !== -1 ||
        shExpMatch(host, "*thomasbernhard.org") ||
        url.indexOf(".thongdreams.com") !== -1 ||
        url.indexOf("threatchaos.com") !== -1 ||
        shExpMatch(host, "*throughnightsfire.com") ||
        url.indexOf(".thumbzilla.com") !== -1 ||
        shExpMatch(host, "*thywords.com") ||
        url.indexOf(".thywords.com.tw") !== -1 ||
        url.indexOf("tiananmenmother.org") !== -1 ||
        url.indexOf(".tiananmenduizhi.com") !== -1 ||
        shExpMatch(host, "*tiananmenduizhi.com") ||
        shExpMatch(host, "*tiananmenuniv.com") ||
        shExpMatch(host, "*tiananmenuniv.net") ||
        shExpMatch(host, "*tiandixing.org") ||
        url.indexOf(".tianhuayuan.com") !== -1 ||
        url.indexOf(".tianlawoffice.com") !== -1 ||
        shExpMatch(host, "*tianti.io") ||
        url.indexOf("tiantibooks.org") !== -1 ||
        shExpMatch(host, "*tiantibooks.org") ||
        url.indexOf("tianyantong.org.cn") !== -1 ||
        url.indexOf(".tianzhu.org") !== -1 ||
        url.indexOf(".tibet.at") !== -1 ||
        url.indexOf("tibet.ca") !== -1 ||
        url.indexOf(".tibet.com") !== -1 ||
        shExpMatch(host, "*tibet.com") ||
        url.indexOf("tibet.fr") !== -1 ||
        url.indexOf(".tibet.net") !== -1 ||
        shExpMatch(host, "*tibet.net") ||
        url.indexOf("tibet.nu") !== -1 ||
        url.indexOf(".tibet.org") !== -1 ||
        shExpMatch(host, "*tibet.org") ||
        url.indexOf(".tibet.sk") !== -1 ||
        url.indexOf("tibet.org.tw") !== -1 ||
        url.indexOf(".tibet.to") !== -1 ||
        url.indexOf(".tibet-envoy.eu") !== -1 ||
        shExpMatch(host, "*tibet-envoy.eu") ||
        url.indexOf(".tibet-foundation.org") !== -1 ||
        url.indexOf(".tibet-house-trust.co.uk") !== -1 ||
        shExpMatch(host, "*tibet-initiative.de") ||
        url.indexOf(".tibet-munich.de") !== -1 ||
        url.indexOf(".tibet3rdpole.org") !== -1 ||
        url.indexOf("http://tibet3rdpole.org") === 0 ||
        url.indexOf("tibetaction.net") !== -1 ||
        shExpMatch(host, "*tibetaction.net") ||
        url.indexOf(".tibetaid.org") !== -1 ||
        url.indexOf("tibetalk.com") !== -1 ||
        url.indexOf(".tibetan.fr") !== -1 ||
        url.indexOf("tibetan-alliance.org") !== -1 ||
        url.indexOf(".tibetanarts.org") !== -1 ||
        url.indexOf(".tibetanbuddhistinstitute.org") !== -1 ||
        shExpMatch(host, "*tibetanbuddhistinstitute.org") ||
        shExpMatch(host, "*tibetancommunity.org") ||
        shExpMatch(host, "*tibetanentrepreneurs.org") ||
        shExpMatch(host, "*tibetanhealth.org") ||
        url.indexOf(".tibetanjournal.com") !== -1 ||
        url.indexOf(".tibetanlanguage.org") !== -1 ||
        url.indexOf(".tibetanliberation.org") !== -1 ||
        shExpMatch(host, "*tibetanliberation.org") ||
        url.indexOf(".tibetcollection.com") !== -1 ||
        url.indexOf(".tibetanaidproject.org") !== -1 ||
        url.indexOf(".tibetancommunityuk.net") !== -1 ||
        url.indexOf("http://tibetancommunityuk.net") === 0 ||
        url.indexOf("tibetanculture.org") !== -1 ||
        url.indexOf("tibetanfeministcollective.org") !== -1 ||
        url.indexOf(".tibetanpaintings.com") !== -1 ||
        url.indexOf(".tibetanphotoproject.com") !== -1 ||
        url.indexOf(".tibetanpoliticalreview.org") !== -1 ||
        url.indexOf(".tibetanreview.net") !== -1 ||
        url.indexOf("http://tibetansports.org") === 0 ||
        url.indexOf(".tibetanwomen.org") !== -1 ||
        url.indexOf("http://tibetanwomen.org") === 0 ||
        url.indexOf(".tibetanyouth.org") !== -1 ||
        url.indexOf(".tibetanyouthcongress.org") !== -1 ||
        shExpMatch(host, "*tibetanyouthcongress.org") ||
        url.indexOf(".tibetcharity.dk") !== -1 ||
        url.indexOf("tibetcharity.in") !== -1 ||
        url.indexOf(".tibetchild.org") !== -1 ||
        url.indexOf(".tibetcity.com") !== -1 ||
        shExpMatch(host, "*tibetcorps.org") ||
        shExpMatch(host, "*tibetexpress.net") ||
        shExpMatch(host, "*tibetfocus.com") ||
        shExpMatch(host, "*tibetfund.org") ||
        url.indexOf(".tibetgermany.com") !== -1 ||
        shExpMatch(host, "*tibetgermany.de") ||
        url.indexOf(".tibethaus.com") !== -1 ||
        url.indexOf(".tibetheritagefund.org") !== -1 ||
        shExpMatch(host, "*tibethouse.jp") ||
        shExpMatch(host, "*tibethouse.org") ||
        shExpMatch(host, "*tibethouse.us") ||
        url.indexOf(".tibetinfonet.net") !== -1 ||
        url.indexOf(".tibetjustice.org") !== -1 ||
        url.indexOf(".tibetkomite.dk") !== -1 ||
        shExpMatch(host, "*tibetmuseum.org") ||
        shExpMatch(host, "*tibetnetwork.org") ||
        url.indexOf(".tibetoffice.ch") !== -1 ||
        url.indexOf("http://tibetoffice.ch") === 0 ||
        url.indexOf("tibetoffice.eu") !== -1 ||
        shExpMatch(host, "*tibetoffice.org") ||
        url.indexOf("tibetonline.com") !== -1 ||
        shExpMatch(host, "*tibetonline.com") ||
        url.indexOf(".tibetoffice.com.au") !== -1 ||
        shExpMatch(host, "*tibetoffice.com.au") ||
        shExpMatch(host, "*tibetonline.tv") ||
        url.indexOf(".tibetonline.tv") !== -1 ||
        url.indexOf(".tibetoralhistory.org") !== -1 ||
        shExpMatch(host, "*tibetoralhistory.org") ||
        url.indexOf(".tibetpolicy.eu") !== -1 ||
        url.indexOf(".tibetrelieffund.co.uk") !== -1 ||
        url.indexOf("tibetsites.com") !== -1 ||
        url.indexOf(".tibetsociety.com") !== -1 ||
        shExpMatch(host, "*tibetsociety.com") ||
        url.indexOf(".tibetsun.com") !== -1 ||
        url.indexOf(".tibetsupportgroup.org") !== -1 ||
        shExpMatch(host, "*tibetsupportgroup.org") ||
        url.indexOf(".tibetswiss.ch") !== -1 ||
        url.indexOf(".tibettelegraph.com") !== -1 ||
        url.indexOf("tibettimes.net") !== -1 ||
        shExpMatch(host, "*tibettruth.com") ||
        shExpMatch(host, "*tibetwrites.org") ||
        url.indexOf(".ticket.com.tw") !== -1 ||
        url.indexOf(".tigervpn.com") !== -1 ||
        shExpMatch(host, "*tigervpn.com") ||
        url.indexOf(".timdir.com") !== -1 ||
        url.indexOf("http://timdir.com") === 0 ||
        url.indexOf(".time.com") !== -1 ||
        url.indexOf("http://time.com") === 0 ||
        shExpMatch(host, "*timesnownews.com") ||
        url.indexOf(".timsah.com") !== -1 ||
        shExpMatch(host, "*timtales.com") ||
        shExpMatch(host, "*blog.tiney.com") ||
        url.indexOf("tintuc101.com") !== -1 ||
        url.indexOf(".tiny.cc") !== -1 ||
        url.indexOf("http://tiny.cc") === 0 ||
        url.indexOf("tinychat.com") !== -1 ||
        shExpMatch(host, "*tinypaste.com") ||
        shExpMatch(host, "*tipas.net") ||
        url.indexOf(".tistory.com") !== -1 ||
        shExpMatch(host, "*tkcs-collins.com") ||
        url.indexOf(".tmagazine.com") !== -1 ||
        shExpMatch(host, "*tmagazine.com") ||
        url.indexOf(".tmdfish.com") !== -1 ||
        url.indexOf("http://tmi.me") === 0 ||
        url.indexOf(".tmpp.org") !== -1 ||
        url.indexOf("http://tmpp.org") === 0 ||
        url.indexOf(".tnaflix.com") !== -1 ||
        shExpMatch(host, "*tnaflix.com") ||
        url.indexOf(".tngrnow.com") !== -1 ||
        url.indexOf(".tngrnow.net") !== -1 ||
        url.indexOf(".tnp.org") !== -1 ||
        url.indexOf("http://tnp.org") === 0 ||
        url.indexOf(".to-porno.com") !== -1 ||
        shExpMatch(host, "*to-porno.com") ||
        url.indexOf("togetter.com") !== -1 ||
        url.indexOf(".tokyo-247.com") !== -1 ||
        url.indexOf(".tokyo-hot.com") !== -1 ||
        shExpMatch(host, "*tokyo-porn-tube.com") ||
        shExpMatch(host, "*tokyocn.com") ||
        url.indexOf("tw.tomonews.net") !== -1 ||
        url.indexOf(".tongil.or.kr") !== -1 ||
        url.indexOf(".tono-oka.jp") !== -1 ||
        url.indexOf("tonyyan.net") !== -1 ||
        url.indexOf(".toodoc.com") !== -1 ||
        url.indexOf("toonel.net") !== -1 ||
        url.indexOf("top81.ws") !== -1 ||
        url.indexOf(".topnews.in") !== -1 ||
        url.indexOf(".toppornsites.com") !== -1 ||
        url.indexOf("http://toppornsites.com") === 0 ||
        url.indexOf(".torguard.net") !== -1 ||
        shExpMatch(host, "*torguard.net") ||
        shExpMatch(host, "*top.tv") ||
        url.indexOf(".topshareware.com") !== -1 ||
        url.indexOf(".topsy.com") !== -1 ||
        shExpMatch(host, "*topsy.com") ||
        shExpMatch(host, "*toptip.ca") ||
        url.indexOf("tora.to") !== -1 ||
        url.indexOf(".torcn.com") !== -1 ||
        shExpMatch(host, "*torlock.com") ||
        url.indexOf(".torproject.org") !== -1 ||
        shExpMatch(host, "*torproject.org") ||
        shExpMatch(host, "*torrentkitty.tv") ||
        url.indexOf("torrentprivacy.com") !== -1 ||
        shExpMatch(host, "*torrentprivacy.com") ||
        url.indexOf("http://torrentproject.se") === 0 ||
        shExpMatch(host, "*torrenty.org") ||
        shExpMatch(host, "*torrentz.eu") ||
        shExpMatch(host, "*torvpn.com") ||
        shExpMatch(host, "*totalvpn.com") ||
        url.indexOf(".toutiaoabc.com") !== -1 ||
        url.indexOf("towngain.com") !== -1 ||
        url.indexOf("toypark.in") !== -1 ||
        url.indexOf("toytractorshow.com") !== -1 ||
        url.indexOf(".tparents.org") !== -1 ||
        url.indexOf(".tpi.org.tw") !== -1 ||
        shExpMatch(host, "*tpi.org.tw") ||
        shExpMatch(host, "*tradingview.com") ||
        shExpMatch(host, "*transparency.org") ||
        shExpMatch(host, "*treemall.com.tw") ||
        url.indexOf("trendsmap.com") !== -1 ||
        shExpMatch(host, "*trendsmap.com") ||
        url.indexOf(".trialofccp.org") !== -1 ||
        shExpMatch(host, "*trialofccp.org") ||
        url.indexOf(".trimondi.de/SDLE") !== -1 ||
        url.indexOf(".trouw.nl") !== -1 ||
        shExpMatch(host, "*trouw.nl") ||
        url.indexOf(".trt.net.tr") !== -1 ||
        shExpMatch(host, "*trt.net.tr") ||
        url.indexOf("trtc.com.tw") !== -1 ||
        url.indexOf(".truebuddha-md.org") !== -1 ||
        shExpMatch(host, "*truebuddha-md.org") ||
        url.indexOf("trulyergonomic.com") !== -1 ||
        url.indexOf(".truth101.co.tv") !== -1 ||
        shExpMatch(host, "*truth101.co.tv") ||
        url.indexOf(".truthontour.org") !== -1 ||
        shExpMatch(host, "*truthontour.org") ||
        shExpMatch(host, "*truthsocial.com") ||
        url.indexOf(".truveo.com") !== -1 ||
        url.indexOf(".tsctv.net") !== -1 ||
        url.indexOf(".tsemtulku.com") !== -1 ||
        url.indexOf("tsquare.tv") !== -1 ||
        url.indexOf(".tsu.org.tw") !== -1 ||
        url.indexOf("tsunagarumon.com") !== -1 ||
        url.indexOf(".tsctv.net") !== -1 ||
        shExpMatch(host, "*tt1069.com") ||
        url.indexOf(".tttan.com") !== -1 ||
        shExpMatch(host, "*tttan.com") ||
        shExpMatch(host, "*ttv.com.tw") ||
        url.indexOf("tu8964.com") !== -1 ||
        url.indexOf(".tubaholic.com") !== -1 ||
        url.indexOf(".tube.com") !== -1 ||
        url.indexOf("tube8.com") !== -1 ||
        shExpMatch(host, "*tube8.com") ||
        url.indexOf(".tube911.com") !== -1 ||
        shExpMatch(host, "*tube911.com") ||
        url.indexOf(".tubecup.com") !== -1 ||
        url.indexOf(".tubegals.com") !== -1 ||
        url.indexOf(".tubeislam.com") !== -1 ||
        url.indexOf("http://tubeislam.com") === 0 ||
        url.indexOf(".tubestack.com") !== -1 ||
        shExpMatch(host, "*tubewolf.com") ||
        url.indexOf(".tuibeitu.net") !== -1 ||
        url.indexOf("tuidang.net") !== -1 ||
        url.indexOf(".tuidang.org") !== -1 ||
        shExpMatch(host, "*tuidang.org") ||
        url.indexOf(".tuidang.se") !== -1 ||
        url.indexOf("bbs.tuitui.info") !== -1 ||
        url.indexOf(".tumutanzi.com") !== -1 ||
        url.indexOf("http://tumutanzi.com") === 0 ||
        shExpMatch(host, "*tumview.com") ||
        url.indexOf(".tunein.com") !== -1 ||
        url.indexOf("http://tunein.com") === 0 ||
        shExpMatch(host, "*tunnelbear.com") ||
        shExpMatch(host, "*tunnelblick.net") ||
        url.indexOf(".tunnelr.com") !== -1 ||
        shExpMatch(host, "*tunnelr.com") ||
        shExpMatch(host, "*tunsafe.com") ||
        url.indexOf("tuitwit.com") !== -1 ||
        url.indexOf(".turansam.org") !== -1 ||
        url.indexOf(".turbobit.net") !== -1 ||
        shExpMatch(host, "*turbobit.net") ||
        url.indexOf(".turbohide.com") !== -1 ||
        shExpMatch(host, "*turbohide.com") ||
        shExpMatch(host, "*turkistantimes.com") ||
        url.indexOf(".tushycash.com") !== -1 ||
        url.indexOf("http://tushycash.com") === 0 ||
        shExpMatch(host, "*app.tutanota.com") ||
        url.indexOf(".tuvpn.com") !== -1 ||
        shExpMatch(host, "*tuvpn.com") ||
        url.indexOf("http://tuzaijidi.com") === 0 ||
        url.indexOf("http://*.tuzaijidi.com") === 0 ||
        url.indexOf(".tw01.org") !== -1 ||
        url.indexOf("http://tw01.org") === 0 ||
        url.indexOf(".tumblr.com") !== -1 ||
        shExpMatch(host, "*tumblr.com") ||
        shExpMatch(host, "*lecloud.net") ||
        url.indexOf("http://cosmic.monar.ch") === 0 ||
        shExpMatch(host, "*slutmoonbeam.com") ||
        url.indexOf("http://blog.soylent.com") === 0 ||
        url.indexOf(".tv.com") !== -1 ||
        url.indexOf("http://tv.com") === 0 ||
        url.indexOf("tvants.com") !== -1 ||
        url.indexOf("forum.tvb.com") !== -1 ||
        url.indexOf("news.tvb.com/list/world") !== -1 ||
        url.indexOf("news.tvb.com/local") !== -1 ||
        url.indexOf("news.tvbs.com.tw") !== -1 ||
        url.indexOf(".tvboxnow.com") !== -1 ||
        url.indexOf("http://tvboxnow.com/") === 0 ||
        url.indexOf("tvider.com") !== -1 ||
        url.indexOf(".tvmost.com.hk") !== -1 ||
        url.indexOf(".tvplayvideos.com") !== -1 ||
        shExpMatch(host, "*tvunetworks.com") ||
        url.indexOf(".tw-blog.com") !== -1 ||
        url.indexOf("https://tw-blog.com") === 0 ||
        url.indexOf(".tw-npo.org") !== -1 ||
        url.indexOf(".twaitter.com") !== -1 ||
        url.indexOf("twapperkeeper.com") !== -1 ||
        shExpMatch(host, "*twapperkeeper.com") ||
        shExpMatch(host, "*twaud.io") ||
        url.indexOf(".twaud.io") !== -1 ||
        url.indexOf(".twavi.com") !== -1 ||
        url.indexOf(".twbbs.net.tw") !== -1 ||
        url.indexOf("twbbs.org") !== -1 ||
        url.indexOf("twbbs.tw") !== -1 ||
        shExpMatch(host, "*twblogger.com") ||
        url.indexOf("tweepmag.com") !== -1 ||
        url.indexOf(".tweepml.org") !== -1 ||
        shExpMatch(host, "*tweepml.org") ||
        url.indexOf(".tweetbackup.com") !== -1 ||
        shExpMatch(host, "*tweetbackup.com") ||
        url.indexOf("tweetboard.com") !== -1 ||
        shExpMatch(host, "*tweetboard.com") ||
        url.indexOf(".tweetboner.biz") !== -1 ||
        shExpMatch(host, "*tweetboner.biz") ||
        url.indexOf(".tweetcs.com") !== -1 ||
        url.indexOf("http://tweetcs.com") === 0 ||
        url.indexOf("http://deck.ly") === 0 ||
        shExpMatch(host, "*mtw.tl") ||
        shExpMatch(host, "*tweetedtimes.com") ||
        shExpMatch(host, "*tweetmylast.fm") ||
        url.indexOf("tweetphoto.com") !== -1 ||
        shExpMatch(host, "*tweetphoto.com") ||
        shExpMatch(host, "*tweetrans.com") ||
        url.indexOf("tweetree.com") !== -1 ||
        shExpMatch(host, "*tweetree.com") ||
        url.indexOf(".tweettunnel.com") !== -1 ||
        shExpMatch(host, "*tweettunnel.com") ||
        shExpMatch(host, "*tweetwally.com") ||
        url.indexOf("tweetymail.com") !== -1 ||
        shExpMatch(host, "*twelve.today") ||
        url.indexOf(".tweez.net") !== -1 ||
        url.indexOf("http://tweez.net") === 0 ||
        shExpMatch(host, "*twftp.org") ||
        shExpMatch(host, "*twgreatdaily.com") ||
        url.indexOf("twibase.com") !== -1 ||
        url.indexOf(".twibble.de") !== -1 ||
        shExpMatch(host, "*twibble.de") ||
        url.indexOf("twibbon.com") !== -1 ||
        shExpMatch(host, "*twibs.com") ||
        url.indexOf(".twicountry.org") !== -1 ||
        url.indexOf("http://twicountry.org") === 0 ||
        url.indexOf("twicsy.com") !== -1 ||
        url.indexOf(".twiends.com") !== -1 ||
        url.indexOf("http://twiends.com") === 0 ||
        url.indexOf(".twifan.com") !== -1 ||
        url.indexOf("http://twifan.com") === 0 ||
        url.indexOf("twiffo.com") !== -1 ||
        shExpMatch(host, "*twiffo.com") ||
        url.indexOf(".twilightsex.com") !== -1 ||
        url.indexOf("twilog.org") !== -1 ||
        url.indexOf("twimbow.com") !== -1 ||
        shExpMatch(host, "*twindexx.com") ||
        url.indexOf("twipple.jp") !== -1 ||
        shExpMatch(host, "*twipple.jp") ||
        shExpMatch(host, "*twip.me") ||
        url.indexOf("twishort.com") !== -1 ||
        shExpMatch(host, "*twishort.com") ||
        url.indexOf("twistar.cc") !== -1 ||
        shExpMatch(host, "*twister.net.co") ||
        shExpMatch(host, "*twisterio.com") ||
        url.indexOf("twisternow.com") !== -1 ||
        url.indexOf("twistory.net") !== -1 ||
        url.indexOf("twitbrowser.net") !== -1 ||
        shExpMatch(host, "*twitcause.com") ||
        shExpMatch(host, "*twitgether.com") ||
        shExpMatch(host, "*twiggit.org") ||
        url.indexOf("twitgoo.com") !== -1 ||
        url.indexOf("twitiq.com") !== -1 ||
        shExpMatch(host, "*twitiq.com") ||
        url.indexOf(".twitlonger.com") !== -1 ||
        shExpMatch(host, "*twitlonger.com") ||
        url.indexOf("http://tl.gd/") === 0 ||
        url.indexOf("twitmania.com") !== -1 ||
        url.indexOf("twitoaster.com") !== -1 ||
        shExpMatch(host, "*twitoaster.com") ||
        shExpMatch(host, "*twitonmsn.com") ||
        url.indexOf(".twit2d.com") !== -1 ||
        shExpMatch(host, "*twit2d.com") ||
        url.indexOf(".twitstat.com") !== -1 ||
        shExpMatch(host, "*twitstat.com") ||
        shExpMatch(host, "*firstfivefollowers.com") ||
        shExpMatch(host, "*retweeteffect.com") ||
        shExpMatch(host, "*tweeplike.me") ||
        shExpMatch(host, "*tweepguide.com") ||
        shExpMatch(host, "*turbotwitter.com") ||
        url.indexOf(".twitvid.com") !== -1 ||
        shExpMatch(host, "*twitvid.com") ||
        url.indexOf("http://twt.tl") === 0 ||
        url.indexOf("twittbot.net") !== -1 ||
        shExpMatch(host, "*ads-twitter.com") ||
        shExpMatch(host, "*twttr.com") ||
        shExpMatch(host, "*twitter4j.org") ||
        url.indexOf(".twittercounter.com") !== -1 ||
        shExpMatch(host, "*twittercounter.com") ||
        url.indexOf("twitterfeed.com") !== -1 ||
        url.indexOf(".twittergadget.com") !== -1 ||
        shExpMatch(host, "*twittergadget.com") ||
        url.indexOf(".twitterkr.com") !== -1 ||
        shExpMatch(host, "*twitterkr.com") ||
        shExpMatch(host, "*twittermail.com") ||
        shExpMatch(host, "*twitterrific.com") ||
        url.indexOf("twittertim.es") !== -1 ||
        shExpMatch(host, "*twittertim.es") ||
        url.indexOf("twitthat.com") !== -1 ||
        shExpMatch(host, "*twitturk.com") ||
        url.indexOf(".twitturly.com") !== -1 ||
        shExpMatch(host, "*twitturly.com") ||
        url.indexOf(".twitzap.com") !== -1 ||
        url.indexOf("twiyia.com") !== -1 ||
        shExpMatch(host, "*twstar.net") ||
        url.indexOf(".twtkr.com") !== -1 ||
        url.indexOf("http://twtkr.com") === 0 ||
        url.indexOf(".twnorth.org.tw") !== -1 ||
        shExpMatch(host, "*twreporter.org") ||
        url.indexOf("twskype.com") !== -1 ||
        url.indexOf("twtrland.com") !== -1 ||
        url.indexOf("twurl.nl") !== -1 ||
        url.indexOf(".twyac.org") !== -1 ||
        shExpMatch(host, "*twyac.org") ||
        url.indexOf(".txxx.com") !== -1 ||
        url.indexOf(".tycool.com") !== -1 ||
        shExpMatch(host, "*tycool.com") ||
        shExpMatch(host, "*typepad.com") ||
        url.indexOf("@@||www.typepad.com") !== -1 ||
        url.indexOf("@@||static.typepad.com") !== -1 ||
        shExpMatch(host, "*blog.expofutures.com") ||
        shExpMatch(host, "*legaltech.law.com") ||
        shExpMatch(host, "*blogs.tampabay.com") ||
        shExpMatch(host, "*contests.twilio.com") ||
        shExpMatch(host, "*typora.io") ||
        url.indexOf(".u9un.com") !== -1 ||
        shExpMatch(host, "*u9un.com") ||
        url.indexOf(".ubddns.org") !== -1 ||
        url.indexOf("http://ubddns.org") === 0 ||
        shExpMatch(host, "*uberproxy.net") ||
        url.indexOf(".uc-japan.org") !== -1 ||
        shExpMatch(host, "*uc-japan.org") ||
        url.indexOf(".srcf.ucam.org/salon/") !== -1 ||
        url.indexOf("http://china.ucanews.com/") === 0 ||
        shExpMatch(host, "*ucdc1998.org") ||
        url.indexOf("http://hum*.uchicago.edu/faculty/ywang/history") === 0 ||
        shExpMatch(host, "*uderzo.it") ||
        url.indexOf(".udn.com") !== -1 ||
        shExpMatch(host, "*udn.com") ||
        shExpMatch(host, "*udn.com.tw") ||
        url.indexOf("udnbkk.com/bbs") !== -1 ||
        shExpMatch(host, "*uforadio.com.tw") ||
        url.indexOf("ufreevpn.com") !== -1 ||
        url.indexOf(".ugo.com") !== -1 ||
        shExpMatch(host, "*uhdwallpapers.org") ||
        shExpMatch(host, "*uhrp.org") ||
        url.indexOf(".uighur.nl") !== -1 ||
        shExpMatch(host, "*uighur.nl") ||
        url.indexOf("uighurbiz.net") !== -1 ||
        url.indexOf(".ulike.net") !== -1 ||
        url.indexOf("ukcdp.co.uk") !== -1 ||
        url.indexOf("ukliferadio.co.uk") !== -1 ||
        shExpMatch(host, "*ukliferadio.co.uk") ||
        url.indexOf("ultravpn.fr") !== -1 ||
        shExpMatch(host, "*ultravpn.fr") ||
        url.indexOf("ultraxs.com") !== -1 ||
        url.indexOf("umich.edu/~falun") !== -1 ||
        shExpMatch(host, "*unblock.cn.com") ||
        url.indexOf(".unblocker.yt") !== -1 ||
        url.indexOf("unblock-us.com") !== -1 ||
        shExpMatch(host, "*unblock-us.com") ||
        url.indexOf(".unblockdmm.com") !== -1 ||
        url.indexOf("http://unblockdmm.com") === 0 ||
        shExpMatch(host, "*unblocksit.es") ||
        url.indexOf("uncyclomedia.org") !== -1 ||
        url.indexOf(".uncyclopedia.hk/wiki") !== -1 ||
        url.indexOf("http://uncyclopedia.hk") === 0 ||
        url.indexOf("http://uncyclopedia.tw") === 0 ||
        url.indexOf("underwoodammo.com") !== -1 ||
        shExpMatch(host, "*underwoodammo.com") ||
        shExpMatch(host, "*unholyknight.com") ||
        url.indexOf(".uni.cc") !== -1 ||
        shExpMatch(host, "*cldr.unicode.org") ||
        url.indexOf(".unification.net") !== -1 ||
        url.indexOf(".unification.org.tw") !== -1 ||
        shExpMatch(host, "*unirule.cloud") ||
        url.indexOf(".unitedsocialpress.com") !== -1 ||
        url.indexOf(".unix100.com") !== -1 ||
        shExpMatch(host, "*unknownspace.org") ||
        url.indexOf(".unodedos.com") !== -1 ||
        url.indexOf("unpo.org") !== -1 ||
        shExpMatch(host, "*unstable.icu") ||
        url.indexOf(".untraceable.us") !== -1 ||
        url.indexOf("http://untraceable.us") === 0 ||
        shExpMatch(host, "*uocn.org") ||
        url.indexOf("tor.updatestar.com") !== -1 ||
        shExpMatch(host, "*upghsbc.com") ||
        url.indexOf(".upholdjustice.org") !== -1 ||
        url.indexOf(".upload4u.info") !== -1 ||
        url.indexOf("uploaded.net/file") !== -1 ||
        url.indexOf("http://uploaded.net/file") === 0 ||
        url.indexOf("http://uploaded.to/file") === 0 ||
        url.indexOf(".uploadstation.com/file") !== -1 ||
        url.indexOf(".upmedia.mg") !== -1 ||
        shExpMatch(host, "*upmedia.mg") ||
        url.indexOf(".upornia.com") !== -1 ||
        url.indexOf("http://upornia.com") === 0 ||
        shExpMatch(host, "*uproxy.org") ||
        shExpMatch(host, "*uptodown.com") ||
        url.indexOf(".upwill.org") !== -1 ||
        url.indexOf("ur7s.com") !== -1 ||
        shExpMatch(host, "*urbandictionary.com") ||
        shExpMatch(host, "*urbansurvival.com") ||
        url.indexOf("myshare.url.com.tw/") !== -1 ||
        shExpMatch(host, "*urlborg.com") ||
        shExpMatch(host, "*urlparser.com") ||
        url.indexOf("us.to") !== -1 ||
        shExpMatch(host, "*usacn.com") ||
        url.indexOf(".usaip.eu") !== -1 ||
        shExpMatch(host, "*usaip.eu") ||
        shExpMatch(host, "*uscnpm.org") ||
        shExpMatch(host, "*uscardforum.com") ||
        shExpMatch(host, "*usma.edu") ||
        url.indexOf(".usocctn.com") !== -1 ||
        shExpMatch(host, "*ustibetcommittee.org") ||
        url.indexOf(".ustream.tv") !== -1 ||
        shExpMatch(host, "*ustream.tv") ||
        url.indexOf("usus.cc") !== -1 ||
        url.indexOf(".utopianpal.com") !== -1 ||
        shExpMatch(host, "*utopianpal.com") ||
        url.indexOf(".uu-gg.com") !== -1 ||
        url.indexOf(".uvwxyz.xyz") !== -1 ||
        shExpMatch(host, "*uvwxyz.xyz") ||
        url.indexOf(".uwants.com") !== -1 ||
        shExpMatch(host, "*uwants.com") ||
        url.indexOf(".uwants.net") !== -1 ||
        url.indexOf("uyghur.co.uk") !== -1 ||
        url.indexOf("http://uyghur-j.org") === 0 ||
        shExpMatch(host, "*uyghuraa.org") ||
        shExpMatch(host, "*uyghuramerican.org") ||
        shExpMatch(host, "*uyghurbiz.org") ||
        shExpMatch(host, "*uyghurcanadian.ca") ||
        shExpMatch(host, "*uyghurcongress.org") ||
        shExpMatch(host, "*uyghurpen.org") ||
        shExpMatch(host, "*uyghurpress.com") ||
        shExpMatch(host, "*uyghurstudies.org") ||
        shExpMatch(host, "*uyghurtribunal.com") ||
        url.indexOf("uygur.org") !== -1 ||
        url.indexOf("http://uymaarip.com/") === 0 ||
        shExpMatch(host, "*v2fly.org") ||
        url.indexOf(".v2ray.com") !== -1 ||
        shExpMatch(host, "*v2ray.com") ||
        shExpMatch(host, "*v2raycn.com") ||
        shExpMatch(host, "*v2raytech.com") ||
        shExpMatch(host, "*valeursactuelles.com") ||
        url.indexOf(".van001.com") !== -1 ||
        url.indexOf(".van698.com") !== -1 ||
        url.indexOf(".vanemu.cn") !== -1 ||
        url.indexOf(".vanilla-jp.com") !== -1 ||
        url.indexOf(".vanpeople.com") !== -1 ||
        url.indexOf("vansky.com") !== -1 ||
        shExpMatch(host, "*vaticannews.va") ||
        shExpMatch(host, "*vcf-online.org") ||
        shExpMatch(host, "*vcfbuilder.org") ||
        url.indexOf(".vegasred.com") !== -1 ||
        url.indexOf(".velkaepocha.sk") !== -1 ||
        url.indexOf(".venbbs.com") !== -1 ||
        url.indexOf(".venchina.com") !== -1 ||
        url.indexOf(".venetianmacao.com") !== -1 ||
        shExpMatch(host, "*venetianmacao.com") ||
        url.indexOf("veoh.com") !== -1 ||
        shExpMatch(host, "*vercel.app") ||
        url.indexOf("mysite.verizon.net") !== -1 ||
        url.indexOf("vermonttibet.org") !== -1 ||
        url.indexOf(".versavpn.com") !== -1 ||
        shExpMatch(host, "*versavpn.com") ||
        shExpMatch(host, "*verybs.com") ||
        url.indexOf(".vft.com.tw") !== -1 ||
        url.indexOf(".viber.com") !== -1 ||
        shExpMatch(host, "*viber.com") ||
        url.indexOf(".vica.info") !== -1 ||
        url.indexOf(".victimsofcommunism.org") !== -1 ||
        shExpMatch(host, "*victimsofcommunism.org") ||
        shExpMatch(host, "*vid.me") ||
        shExpMatch(host, "*vidble.com") ||
        url.indexOf("videobam.com") !== -1 ||
        shExpMatch(host, "*videobam.com") ||
        url.indexOf(".videodetective.com") !== -1 ||
        url.indexOf(".videomega.tv") !== -1 ||
        shExpMatch(host, "*videomega.tv") ||
        url.indexOf(".videomo.com") !== -1 ||
        url.indexOf("videopediaworld.com") !== -1 ||
        url.indexOf(".videopress.com") !== -1 ||
        url.indexOf(".vidinfo.org/video") !== -1 ||
        url.indexOf("vietdaikynguyen.com") !== -1 ||
        url.indexOf(".vijayatemple.org") !== -1 ||
        shExpMatch(host, "*vilavpn.com") ||
        url.indexOf("vimeo.com") !== -1 ||
        shExpMatch(host, "*vimeo.com") ||
        shExpMatch(host, "*vimperator.org") ||
        shExpMatch(host, "*vincnd.com") ||
        shExpMatch(host, "*vinniev.com") ||
        url.indexOf("http://www.lib.virginia.edu/area-studies/Tibet/tibet.html") === 0 ||
        url.indexOf(".virtualrealporn.com") !== -1 ||
        shExpMatch(host, "*virtualrealporn.com") ||
        url.indexOf("visibletweets.com") !== -1 ||
        url.indexOf("http://ny.visiontimes.com") === 0 ||
        url.indexOf(".vital247.org") !== -1 ||
        shExpMatch(host, "*viu.com") ||
        url.indexOf(".vivahentai4u.net") !== -1 ||
        shExpMatch(host, "*vivaldi.com") ||
        url.indexOf(".vivatube.com") !== -1 ||
        url.indexOf(".vivthomas.com") !== -1 ||
        shExpMatch(host, "*vivthomas.com") ||
        url.indexOf(".vjav.com") !== -1 ||
        shExpMatch(host, "*vjav.com") ||
        url.indexOf(".vjmedia.com.hk") !== -1 ||
        url.indexOf(".vllcs.org") !== -1 ||
        url.indexOf("http://vllcs.org") === 0 ||
        shExpMatch(host, "*vmixcore.com") ||
        shExpMatch(host, "*vnet.link") ||
        url.indexOf(".vocativ.com") !== -1 ||
        url.indexOf("vocn.tv") !== -1 ||
        shExpMatch(host, "*vocus.cc") ||
        shExpMatch(host, "*voicettank.org") ||
        url.indexOf(".vot.org") !== -1 ||
        shExpMatch(host, "*vot.org") ||
        url.indexOf(".vovo2000.com") !== -1 ||
        url.indexOf("http://vovo2000.com") === 0 ||
        url.indexOf(".voxer.com") !== -1 ||
        shExpMatch(host, "*voxer.com") ||
        url.indexOf(".voy.com") !== -1 ||
        shExpMatch(host, "*vpn.ac") ||
        url.indexOf(".vpn4all.com") !== -1 ||
        shExpMatch(host, "*vpn4all.com") ||
        url.indexOf(".vpnaccount.org") !== -1 ||
        url.indexOf("http://vpnaccount.org") === 0 ||
        url.indexOf(".vpnaccounts.com") !== -1 ||
        shExpMatch(host, "*vpnaccounts.com") ||
        url.indexOf(".vpncomparison.org") !== -1 ||
        url.indexOf(".vpncup.com") !== -1 ||
        shExpMatch(host, "*vpncup.com") ||
        url.indexOf("vpnbook.com") !== -1 ||
        url.indexOf(".vpncoupons.com") !== -1 ||
        url.indexOf("http://vpncoupons.com") === 0 ||
        url.indexOf(".vpndada.com") !== -1 ||
        shExpMatch(host, "*vpndada.com") ||
        url.indexOf(".vpnfan.com") !== -1 ||
        url.indexOf("vpnfire.com") !== -1 ||
        url.indexOf(".vpnfires.biz") !== -1 ||
        url.indexOf(".vpnforgame.net") !== -1 ||
        shExpMatch(host, "*vpnforgame.net") ||
        shExpMatch(host, "*vpngate.jp") ||
        url.indexOf(".vpngate.net") !== -1 ||
        shExpMatch(host, "*vpngate.net") ||
        url.indexOf(".vpngratis.net") !== -1 ||
        url.indexOf("vpnhq.com") !== -1 ||
        shExpMatch(host, "*vpnhub.com") ||
        url.indexOf(".vpnmaster.com") !== -1 ||
        shExpMatch(host, "*vpnmaster.com") ||
        url.indexOf(".vpnmentor.com") !== -1 ||
        shExpMatch(host, "*vpnmentor.com") ||
        url.indexOf(".vpninja.net") !== -1 ||
        shExpMatch(host, "*vpninja.net") ||
        url.indexOf(".vpnintouch.com") !== -1 ||
        shExpMatch(host, "*vpnintouch.net") ||
        url.indexOf("vpnjack.com") !== -1 ||
        shExpMatch(host, "*vpnjack.com") ||
        url.indexOf(".vpnpick.com") !== -1 ||
        shExpMatch(host, "*vpnpick.com") ||
        shExpMatch(host, "*vpnpop.com") ||
        shExpMatch(host, "*vpnpronet.com") ||
        url.indexOf(".vpnreactor.com") !== -1 ||
        shExpMatch(host, "*vpnreactor.com") ||
        shExpMatch(host, "*vpnreviewz.com") ||
        url.indexOf(".vpnsecure.me") !== -1 ||
        shExpMatch(host, "*vpnsecure.me") ||
        url.indexOf(".vpnshazam.com") !== -1 ||
        shExpMatch(host, "*vpnshazam.com") ||
        url.indexOf(".vpnshieldapp.com") !== -1 ||
        shExpMatch(host, "*vpnshieldapp.com") ||
        url.indexOf(".vpnsp.com") !== -1 ||
        url.indexOf(".vpntraffic.com") !== -1 ||
        url.indexOf(".vpntunnel.com") !== -1 ||
        shExpMatch(host, "*vpntunnel.com") ||
        url.indexOf(".vpnuk.info") !== -1 ||
        shExpMatch(host, "*vpnuk.info") ||
        shExpMatch(host, "*vpnunlimitedapp.com") ||
        url.indexOf(".vpnvip.com") !== -1 ||
        shExpMatch(host, "*vpnvip.com") ||
        url.indexOf(".vpnworldwide.com") !== -1 ||
        url.indexOf(".vporn.com") !== -1 ||
        shExpMatch(host, "*vporn.com") ||
        url.indexOf(".vpser.net") !== -1 ||
        url.indexOf("@@||vpser.net") !== -1 ||
        url.indexOf("vraiesagesse.net") !== -1 ||
        url.indexOf(".vrmtr.com") !== -1 ||
        shExpMatch(host, "*vtunnel.com") ||
        shExpMatch(host, "*vuku.cc") ||
        url.indexOf("lists.w3.org/archives/public") !== -1 ||
        shExpMatch(host, "*w3schools.com") ||
        shExpMatch(host, "*waffle1999.com") ||
        url.indexOf(".wahas.com") !== -1 ||
        url.indexOf(".waigaobu.com") !== -1 ||
        url.indexOf("waikeung.org/php_wind") !== -1 ||
        url.indexOf(".wailaike.net") !== -1 ||
        shExpMatch(host, "*wainao.me") ||
        url.indexOf(".waiwaier.com") !== -1 ||
        url.indexOf("http://waiwaier.com") === 0 ||
        shExpMatch(host, "*wallmama.com") ||
        url.indexOf("wallornot.org") !== -1 ||
        shExpMatch(host, "*wallpapercasa.com") ||
        url.indexOf(".wallproxy.com") !== -1 ||
        url.indexOf("@@||wallproxy.com.cn") !== -1 ||
        shExpMatch(host, "*wallsttv.com") ||
        shExpMatch(host, "*waltermartin.com") ||
        shExpMatch(host, "*waltermartin.org") ||
        shExpMatch(host, "*www.wan-press.org") ||
        shExpMatch(host, "*wanderinghorse.net") ||
        shExpMatch(host, "*wangafu.net") ||
        shExpMatch(host, "*wangjinbo.org") ||
        url.indexOf(".wangjinbo.org") !== -1 ||
        url.indexOf("wanglixiong.com") !== -1 ||
        url.indexOf(".wango.org") !== -1 ||
        shExpMatch(host, "*wango.org") ||
        url.indexOf("wangruoshui.net") !== -1 ||
        url.indexOf("www.wangruowang.org") !== -1 ||
        shExpMatch(host, "*want-daily.com") ||
        url.indexOf("wapedia.mobi/zhsimp") !== -1 ||
        shExpMatch(host, "*warroom.org") ||
        shExpMatch(host, "*waselpro.com") ||
        url.indexOf(".watchinese.com") !== -1 ||
        shExpMatch(host, "*watchout.tw") ||
        url.indexOf(".wattpad.com") !== -1 ||
        shExpMatch(host, "*wattpad.com") ||
        url.indexOf(".makzhou.warehouse333.com") !== -1 ||
        url.indexOf("washeng.net") !== -1 ||
        url.indexOf(".watch8x.com") !== -1 ||
        shExpMatch(host, "*watchmygf.net") ||
        shExpMatch(host, "*wav.tv") ||
        shExpMatch(host, "*wd.bible") ||
        url.indexOf(".wdf5.com") !== -1 ||
        shExpMatch(host, "*wealth.com.tw") ||
        url.indexOf(".wearehairy.com") !== -1 ||
        url.indexOf(".wearn.com") !== -1 ||
        shExpMatch(host, "*wearn.com") ||
        url.indexOf("http://hkcoc.weather.com.hk") === 0 ||
        shExpMatch(host, "*hudatoriq.web.id") ||
        shExpMatch(host, "*web2project.net") ||
        url.indexOf("webbang.net") !== -1 ||
        url.indexOf(".webevader.org") !== -1 ||
        url.indexOf(".webfreer.com") !== -1 ||
        url.indexOf("weblagu.com") !== -1 ||
        url.indexOf(".webjb.org") !== -1 ||
        url.indexOf(".webrush.net") !== -1 ||
        url.indexOf("webs-tv.net") !== -1 ||
        url.indexOf(".websitepulse.com/help/testtools.china-test") !== -1 ||
        url.indexOf("http://www.websnapr.com") === 0 ||
        url.indexOf(".webwarper.net") !== -1 ||
        url.indexOf("http://webwarper.net") === 0 ||
        url.indexOf("webworkerdaily.com") !== -1 ||
        shExpMatch(host, "*wechatlawsuit.com") ||
        url.indexOf(".weekmag.info") !== -1 ||
        shExpMatch(host, "*wefightcensorship.org") ||
        url.indexOf(".wefong.com") !== -1 ||
        url.indexOf("weiboleak.com") !== -1 ||
        url.indexOf(".weihuo.org") !== -1 ||
        shExpMatch(host, "*weijingsheng.org") ||
        url.indexOf(".weiming.info") !== -1 ||
        shExpMatch(host, "*weiming.info") ||
        url.indexOf("weiquanwang.org") !== -1 ||
        url.indexOf("http://weisuo.ws") === 0 ||
        url.indexOf(".welovecock.com") !== -1 ||
        shExpMatch(host, "*welt.de") ||
        url.indexOf(".wemigrate.org") !== -1 ||
        url.indexOf("http://wemigrate.org") === 0 ||
        url.indexOf("wengewang.com") !== -1 ||
        shExpMatch(host, "*wengewang.org") ||
        url.indexOf(".wenhui.ch") !== -1 ||
        url.indexOf("http://trans.wenweipo.com/gb/") === 0 ||
        url.indexOf(".wenxuecity.com") !== -1 ||
        shExpMatch(host, "*wenxuecity.com") ||
        url.indexOf(".wenyunchao.com") !== -1 ||
        shExpMatch(host, "*wenyunchao.com") ||
        url.indexOf(".westca.com") !== -1 ||
        shExpMatch(host, "*westca.com") ||
        shExpMatch(host, "*westernwolves.com") ||
        url.indexOf(".westkit.net") !== -1 ||
        shExpMatch(host, "*westpoint.edu") ||
        url.indexOf(".westernshugdensociety.org") !== -1 ||
        url.indexOf("wetpussygames.com") !== -1 ||
        url.indexOf(".wetplace.com") !== -1 ||
        url.indexOf("wexiaobo.org") !== -1 ||
        shExpMatch(host, "*wexiaobo.org") ||
        url.indexOf("wezhiyong.org") !== -1 ||
        shExpMatch(host, "*wezone.net") ||
        url.indexOf(".wforum.com") !== -1 ||
        shExpMatch(host, "*wforum.com/") ||
        url.indexOf(".whatblocked.com") !== -1 ||
        shExpMatch(host, "*whatblocked.com") ||
        url.indexOf(".wheatseeds.org") !== -1 ||
        shExpMatch(host, "*wheelockslatin.com") ||
        url.indexOf(".whippedass.com") !== -1 ||
        url.indexOf(".whoer.net") !== -1 ||
        shExpMatch(host, "*whoer.net") ||
        url.indexOf("whotalking.com") !== -1 ||
        url.indexOf("whylover.com") !== -1 ||
        shExpMatch(host, "*whyx.org") ||
        shExpMatch(host, "*wikileaks.ch") ||
        shExpMatch(host, "*wikileaks.com") ||
        shExpMatch(host, "*wikileaks.de") ||
        shExpMatch(host, "*wikileaks.eu") ||
        shExpMatch(host, "*wikileaks.lu") ||
        url.indexOf(".wikileaks.org") !== -1 ||
        shExpMatch(host, "*wikileaks.org") ||
        shExpMatch(host, "*wikileaks.pl") ||
        url.indexOf(".wikileaks-forum.com") !== -1 ||
        url.indexOf("wildammo.com") !== -1 ||
        url.indexOf(".williamhill.com") !== -1 ||
        shExpMatch(host, "*collateralmurder.com") ||
        shExpMatch(host, "*collateralmurder.org") ||
        url.indexOf("wikilivres.info/wiki/%E9%9B%B6%E5%85%AB%E5%AE%AA%E7%AB%A0") !== -1 ||
        shExpMatch(host, "*wikimapia.org") ||
        url.indexOf(".wikiwand.com") !== -1 ||
        shExpMatch(host, "*wikiwand.com") ||
        shExpMatch(host, "*wikiwiki.jp") ||
        shExpMatch(host, "*casino.williamhill.com") ||
        shExpMatch(host, "*sports.williamhill.com") ||
        shExpMatch(host, "*vegas.williamhill.com") ||
        shExpMatch(host, "*willw.net") ||
        shExpMatch(host, "*windowsphoneme.com") ||
        url.indexOf(".windscribe.com") !== -1 ||
        shExpMatch(host, "*windscribe.com") ||
        shExpMatch(host, "*community.windy.com") ||
        shExpMatch(host, "*wingy.site") ||
        url.indexOf(".winning11.com") !== -1 ||
        url.indexOf("winwhispers.info") !== -1 ||
        shExpMatch(host, "*wionews.com") ||
        shExpMatch(host, "*wiredbytes.com") ||
        shExpMatch(host, "*wiredpen.com") ||
        shExpMatch(host, "*wireguard.com") ||
        url.indexOf(".wisdompubs.org") !== -1 ||
        url.indexOf(".wisevid.com") !== -1 ||
        shExpMatch(host, "*wisevid.com") ||
        shExpMatch(host, "*whispersystems.org") ||
        url.indexOf(".witnessleeteaching.com") !== -1 ||
        url.indexOf(".witopia.net") !== -1 ||
        url.indexOf(".wjbk.org") !== -1 ||
        shExpMatch(host, "*wjbk.org") ||
        shExpMatch(host, "*wmflabs.org") ||
        shExpMatch(host, "*wn.com") ||
        url.indexOf(".wnacg.com") !== -1 ||
        url.indexOf(".wnacg.org") !== -1 ||
        url.indexOf(".wo.tc") !== -1 ||
        shExpMatch(host, "*woeser.com") ||
        url.indexOf(".wokar.org") !== -1 ||
        shExpMatch(host, "*wokar.org") ||
        url.indexOf("wolfax.com") !== -1 ||
        shExpMatch(host, "*wolfax.com") ||
        shExpMatch(host, "*wombo.ai") ||
        shExpMatch(host, "*woolyss.com") ||
        url.indexOf("woopie.jp") !== -1 ||
        shExpMatch(host, "*woopie.jp") ||
        url.indexOf("woopie.tv") !== -1 ||
        shExpMatch(host, "*woopie.tv") ||
        shExpMatch(host, "*workatruna.com") ||
        url.indexOf(".workerdemo.org.hk") !== -1 ||
        url.indexOf(".workerempowerment.org") !== -1 ||
        shExpMatch(host, "*workers.dev") ||
        shExpMatch(host, "*workersthebig.net") ||
        url.indexOf(".worldcat.org") !== -1 ||
        url.indexOf("worldjournal.com") !== -1 ||
        url.indexOf(".worldvpn.net") !== -1 ||
        shExpMatch(host, "*worldvpn.net") ||
        shExpMatch(host, "*videopress.com") ||
        url.indexOf(".wordpress.com") !== -1 ||
        url.indexOf("http://*.wordpress.com") === 0 ||
        shExpMatch(host, "*chenshan20042005.wordpress.com") ||
        shExpMatch(host, "*chinaview.wordpress.com") ||
        shExpMatch(host, "*cnbbnews.wordpress.com") ||
        shExpMatch(host, "*freedominfonetweb.wordpress.com") ||
        shExpMatch(host, "*hka8964.wordpress.com") ||
        shExpMatch(host, "*hkanews.wordpress.com") ||
        shExpMatch(host, "*hqsbnet.wordpress.com") ||
        shExpMatch(host, "*hqsbonline.wordpress.com") ||
        shExpMatch(host, "*investigating.wordpress.com") ||
        shExpMatch(host, "*jobnewera.wordpress.com") ||
        shExpMatch(host, "*matthewdgreen.wordpress.com") ||
        shExpMatch(host, "*minghuiyw.wordpress.com") ||
        shExpMatch(host, "*wo3ttt.wordpress.com") ||
        shExpMatch(host, "*sujiatun.wordpress.com") ||
        shExpMatch(host, "*xijie.wordpress.com") ||
        shExpMatch(host, "*wp.com") ||
        url.indexOf(".wow.com") !== -1 ||
        url.indexOf(".wow-life.net") !== -1 ||
        shExpMatch(host, "*wowlegacy.ml") ||
        shExpMatch(host, "*wowporn.com") ||
        shExpMatch(host, "*wowgirls.com") ||
        url.indexOf(".wowrk.com") !== -1 ||
        url.indexOf("woxinghuiguo.com") !== -1 ||
        url.indexOf(".woyaolian.org") !== -1 ||
        url.indexOf("http://woyaolian.org") === 0 ||
        url.indexOf(".wpoforum.com") !== -1 ||
        shExpMatch(host, "*wpoforum.com") ||
        url.indexOf(".wqyd.org") !== -1 ||
        shExpMatch(host, "*wqyd.org") ||
        url.indexOf("wrchina.org") !== -1 ||
        url.indexOf("wretch.cc") !== -1 ||
        shExpMatch(host, "*writesonic.com") ||
        url.indexOf(".wsj.com") !== -1 ||
        shExpMatch(host, "*wsj.com") ||
        url.indexOf(".wsj.net") !== -1 ||
        shExpMatch(host, "*wsj.net") ||
        url.indexOf(".wsjhk.com") !== -1 ||
        url.indexOf(".wtbn.org") !== -1 ||
        url.indexOf(".wtfpeople.com") !== -1 ||
        url.indexOf("wuerkaixi.com") !== -1 ||
        shExpMatch(host, "*wufafangwen.com") ||
        shExpMatch(host, "*wufi.org.tw") ||
        shExpMatch(host, "*wuguoguang.com") ||
        url.indexOf("wujie.net") !== -1 ||
        url.indexOf("wujieliulan.com") !== -1 ||
        shExpMatch(host, "*wujieliulan.com") ||
        url.indexOf("wukangrui.net") !== -1 ||
        shExpMatch(host, "*wuw.red") ||
        shExpMatch(host, "*wuyanblog.com") ||
        url.indexOf(".wwitv.com") !== -1 ||
        shExpMatch(host, "*wwitv.com") ||
        url.indexOf("wzyboy.im/post/160") !== -1 ||
        shExpMatch(host, "*x.co") ||
        url.indexOf(".x-berry.com") !== -1 ||
        shExpMatch(host, "*x-berry.com") ||
        shExpMatch(host, "*x-art.com") ||
        shExpMatch(host, "*x-wall.org") ||
        url.indexOf("x1949x.com") !== -1 ||
        url.indexOf("x365x.com") !== -1 ||
        url.indexOf("xanga.com") !== -1 ||
        shExpMatch(host, "*xbabe.com") ||
        url.indexOf(".xbookcn.com") !== -1 ||
        shExpMatch(host, "*xbookcn.com") ||
        shExpMatch(host, "*xcafe.in") ||
        shExpMatch(host, "*xcity.jp") ||
        url.indexOf(".xcritic.com") !== -1 ||
        url.indexOf("http://cdn*.xda-developers.com") === 0 ||
        url.indexOf(".xerotica.com") !== -1 ||
        url.indexOf("destiny.xfiles.to/ubbthreads") !== -1 ||
        url.indexOf(".xfm.pp.ru") !== -1 ||
        url.indexOf(".xgmyd.com") !== -1 ||
        shExpMatch(host, "*xgmyd.com") ||
        url.indexOf("xhamster.com") !== -1 ||
        shExpMatch(host, "*xhamster.com") ||
        url.indexOf(".xianba.net") !== -1 ||
        url.indexOf(".xianchawang.net") !== -1 ||
        url.indexOf(".xianjian.tw") !== -1 ||
        url.indexOf("http://xianjian.tw") === 0 ||
        url.indexOf(".xianqiao.net") !== -1 ||
        url.indexOf(".xiaobaiwu.com") !== -1 ||
        url.indexOf(".xiaochuncnjp.com") !== -1 ||
        url.indexOf(".xiaod.in") !== -1 ||
        url.indexOf(".xiaohexie.com") !== -1 ||
        shExpMatch(host, "*xiaolan.me") ||
        shExpMatch(host, "*xiaoma.org") ||
        shExpMatch(host, "*xiaohexie.com") ||
        shExpMatch(host, "*xiaxiaoqiang.net") ||
        url.indexOf("xiezhua.com") !== -1 ||
        url.indexOf(".xihua.es") !== -1 ||
        url.indexOf("forum.xinbao.de/forum") !== -1 ||
        url.indexOf(".xing.com") !== -1 ||
        url.indexOf("http://xing.com") === 0 ||
        shExpMatch(host, "*xinjiangpolicefiles.org") ||
        url.indexOf(".xinmiao.com.hk") !== -1 ||
        shExpMatch(host, "*xinmiao.com.hk") ||
        url.indexOf("xinsheng.net") !== -1 ||
        url.indexOf("xinshijue.com") !== -1 ||
        url.indexOf("xinhuanet.org") !== -1 ||
        url.indexOf("http://xinyubbs.net") === 0 ||
        url.indexOf(".xiongpian.com") !== -1 ||
        url.indexOf(".xiuren.org") !== -1 ||
        shExpMatch(host, "*xixicui.icu") ||
        url.indexOf("xizang-zhiye.org") !== -1 ||
        url.indexOf("xjp.cc") !== -1 ||
        shExpMatch(host, "*xjp.cc") ||
        shExpMatch(host, "*xjtravelguide.com") ||
        url.indexOf("xlfmtalk.com") !== -1 ||
        shExpMatch(host, "*xlfmwz.info") ||
        shExpMatch(host, "*xml-training-guide.com") ||
        url.indexOf("xmovies.com") !== -1 ||
        shExpMatch(host, "*xnxx.com") ||
        url.indexOf("xpdo.net") !== -1 ||
        shExpMatch(host, "*xpud.org") ||
        url.indexOf(".xrentdvd.com") !== -1 ||
        url.indexOf(".xskywalker.net") !== -1 ||
        shExpMatch(host, "*xtube.com") ||
        url.indexOf("blog.xuite.net") !== -1 ||
        url.indexOf("vlog.xuite.net") !== -1 ||
        url.indexOf("xuzhiyong.net") !== -1 ||
        shExpMatch(host, "*xuchao.org") ||
        url.indexOf("xuchao.net") !== -1 ||
        shExpMatch(host, "*xuchao.net") ||
        url.indexOf("xvideo.cc") !== -1 ||
        url.indexOf(".xvideos.com") !== -1 ||
        shExpMatch(host, "*xvideos.com") ||
        shExpMatch(host, "*xvideos-cdn.com") ||
        shExpMatch(host, "*xvideos.es") ||
        shExpMatch(host, "*xvbelink.com") ||
        shExpMatch(host, "*xvinlink.com") ||
        url.indexOf(".xkiwi.tk/") !== -1 ||
        shExpMatch(host, "*xsden.info") ||
        url.indexOf(".xxbbx.com") !== -1 ||
        url.indexOf(".xxlmovies.com") !== -1 ||
        shExpMatch(host, "*xxx.com") ||
        url.indexOf(".xxx.xxx") !== -1 ||
        url.indexOf("http://xxx.xxx") === 0 ||
        url.indexOf(".xxxfuckmom.com") !== -1 ||
        shExpMatch(host, "*xxxx.com.au") ||
        url.indexOf(".xxxymovies.com") !== -1 ||
        url.indexOf("http://xxxymovies.com") === 0 ||
        url.indexOf("xys.org") !== -1 ||
        url.indexOf("xysblogs.org") !== -1 ||
        url.indexOf("xyy69.com") !== -1 ||
        url.indexOf("xyy69.info") !== -1 ||
        shExpMatch(host, "*y2mate.com") ||
        shExpMatch(host, "*yadi.sk") ||
        shExpMatch(host, "*yakbutterblues.com") ||
        shExpMatch(host, "*yam.com") ||
        shExpMatch(host, "*yam.org.tw") ||
        shExpMatch(host, "*yande.re") ||
        shExpMatch(host, "*disk.yandex.com") ||
        shExpMatch(host, "*disk.yandex.ru") ||
        url.indexOf(".yanghengjun.com") !== -1 ||
        url.indexOf("yangjianli.com") !== -1 ||
        url.indexOf(".yasni.co.uk") !== -1 ||
        shExpMatch(host, "*yasni.co.uk") ||
        url.indexOf(".yayabay.com/forum") !== -1 ||
        shExpMatch(host, "*news.ycombinator.com") ||
        url.indexOf(".ydy.com") !== -1 ||
        url.indexOf(".yeahteentube.com") !== -1 ||
        shExpMatch(host, "*yeahteentube.com") ||
        shExpMatch(host, "*yecl.net") ||
        shExpMatch(host, "*yeelou.com") ||
        shExpMatch(host, "*yeeyi.com") ||
        url.indexOf("yegle.net") !== -1 ||
        shExpMatch(host, "*yegle.net") ||
        url.indexOf(".yes.xxx") !== -1 ||
        shExpMatch(host, "*yes123.com.tw") ||
        shExpMatch(host, "*yesasia.com") ||
        shExpMatch(host, "*yesasia.com.hk") ||
        url.indexOf(".yes-news.com") !== -1 ||
        url.indexOf("http://yes-news.com") === 0 ||
        url.indexOf(".yespornplease.com") !== -1 ||
        shExpMatch(host, "*yespornplease.com") ||
        url.indexOf("http://yeyeclub.com") === 0 ||
        shExpMatch(host, "*yhcw.net") ||
        url.indexOf(".yibada.com") !== -1 ||
        url.indexOf(".yibaochina.com") !== -1 ||
        url.indexOf(".yidio.com") !== -1 ||
        shExpMatch(host, "*yidio.com") ||
        shExpMatch(host, "*yigeni.com") ||
        url.indexOf("yilubbs.com") !== -1 ||
        shExpMatch(host, "*s.yimg.com") ||
        shExpMatch(host, "*xa.yimg.com") ||
        url.indexOf(".yingsuoss.com") !== -1 ||
        url.indexOf(".yipub.com") !== -1 ||
        shExpMatch(host, "*yipub.com") ||
        url.indexOf("yinlei.org/mt") !== -1 ||
        url.indexOf(".yizhihongxing.com") !== -1 ||
        shExpMatch(host, "*yizhihongxing.com") ||
        url.indexOf(".yobt.com") !== -1 ||
        url.indexOf(".yobt.tv") !== -1 ||
        shExpMatch(host, "*yobt.tv") ||
        url.indexOf(".yogichen.org") !== -1 ||
        shExpMatch(host, "*yogichen.org") ||
        url.indexOf(".yolasite.com") !== -1 ||
        url.indexOf(".yomiuri.co.jp") !== -1 ||
        url.indexOf("yong.hu") !== -1 ||
        url.indexOf(".yorkbbs.ca") !== -1 ||
        shExpMatch(host, "*you.com") ||
        shExpMatch(host, "*youxu.info") ||
        url.indexOf(".youjizz.com") !== -1 ||
        shExpMatch(host, "*youjizz.com") ||
        url.indexOf(".youmaker.com") !== -1 ||
        shExpMatch(host, "*youmaker.com") ||
        url.indexOf(".youngpornvideos.com") !== -1 ||
        url.indexOf("youngspiration.hk") !== -1 ||
        url.indexOf(".youpai.org") !== -1 ||
        shExpMatch(host, "*youpai.org") ||
        url.indexOf(".your-freedom.net") !== -1 ||
        shExpMatch(host, "*yourepeat.com") ||
        url.indexOf(".yourprivatevpn.com") !== -1 ||
        shExpMatch(host, "*yourprivatevpn.com") ||
        url.indexOf(".yousendit.com") !== -1 ||
        shExpMatch(host, "*yousendit.com") ||
        shExpMatch(host, "*youthforfreechina.org") ||
        url.indexOf(".youthnetradio.org/tmit/forum") !== -1 ||
        url.indexOf("blog.youthwant.com.tw") !== -1 ||
        url.indexOf("me.youthwant.com.tw") !== -1 ||
        url.indexOf("share.youthwant.com.tw") !== -1 ||
        url.indexOf("topic.youthwant.com.tw") !== -1 ||
        url.indexOf(".youporn.com") !== -1 ||
        shExpMatch(host, "*youporn.com") ||
        url.indexOf(".youporngay.com") !== -1 ||
        shExpMatch(host, "*youporngay.com") ||
        url.indexOf(".yourlisten.com") !== -1 ||
        shExpMatch(host, "*yourlisten.com") ||
        url.indexOf(".yourlust.com") !== -1 ||
        shExpMatch(host, "*yourlust.com") ||
        url.indexOf("youshun12.com") !== -1 ||
        url.indexOf(".youtubecn.com") !== -1 ||
        url.indexOf("youversion.com") !== -1 ||
        shExpMatch(host, "*youversion.com") ||
        url.indexOf("ytht.net") !== -1 ||
        url.indexOf("yuanming.net") !== -1 ||
        url.indexOf(".yuanzhengtang.org") !== -1 ||
        url.indexOf(".yulghun.com") !== -1 ||
        shExpMatch(host, "*yulghun.com") ||
        shExpMatch(host, "*yunchao.net") ||
        url.indexOf(".yuvutu.com") !== -1 ||
        shExpMatch(host, "*yvesgeleyn.com") ||
        url.indexOf(".ywpw.com/forums/history/post/A0/p0/html/227") !== -1 ||
        url.indexOf("yx51.net") !== -1 ||
        url.indexOf(".yyii.org") !== -1 ||
        shExpMatch(host, "*yyii.org") ||
        shExpMatch(host, "*yyjlymb.xyz") ||
        shExpMatch(host, "*yysub.net") ||
        url.indexOf(".yzzk.com") !== -1 ||
        shExpMatch(host, "*yzzk.com") ||
        shExpMatch(host, "*z-lib.org") ||
        url.indexOf("zacebook.com") !== -1 ||
        url.indexOf(".zalmos.com") !== -1 ||
        shExpMatch(host, "*zalmos.com") ||
        shExpMatch(host, "*zannel.com") ||
        url.indexOf(".zaobao.com") !== -1 ||
        shExpMatch(host, "*zaobao.com") ||
        url.indexOf("http://zaobao.com.sg") === 0 ||
        shExpMatch(host, "*zaobao.com.sg") ||
        url.indexOf(".zaozon.com") !== -1 ||
        shExpMatch(host, "*zdnet.com.tw") ||
        url.indexOf(".zello.com") !== -1 ||
        shExpMatch(host, "*zello.com") ||
        url.indexOf(".zengjinyan.org") !== -1 ||
        url.indexOf(".zenmate.com") !== -1 ||
        shExpMatch(host, "*zenmate.com") ||
        shExpMatch(host, "*zenmate.com.ru") ||
        shExpMatch(host, "*zerohedge.com") ||
        shExpMatch(host, "*zeronet.io") ||
        shExpMatch(host, "*zeutch.com") ||
        url.indexOf(".zfreet.com") !== -1 ||
        url.indexOf(".zgsddh.com") !== -1 ||
        url.indexOf("zgzcjj.net") !== -1 ||
        url.indexOf(".zhanbin.net") !== -1 ||
        shExpMatch(host, "*zhanbin.net") ||
        url.indexOf(".zhangboli.net") !== -1 ||
        shExpMatch(host, "*zhangtianliang.com") ||
        shExpMatch(host, "*zhanlve.org") ||
        url.indexOf("zhenghui.org") !== -1 ||
        url.indexOf(".zhengjian.org") !== -1 ||
        shExpMatch(host, "*zhengjian.org") ||
        url.indexOf("zhengwunet.org") !== -1 ||
        url.indexOf("zhenlibu.info") !== -1 ||
        shExpMatch(host, "*zhenlibu.info") ||
        url.indexOf(".zhenlibu1984.com") !== -1 ||
        shExpMatch(host, "*zhenlibu1984.com") ||
        url.indexOf("http://zhenxiang.biz") === 0 ||
        url.indexOf(".zhinengluyou.com") !== -1 ||
        url.indexOf("zhongguo.ca") !== -1 ||
        url.indexOf("http://zhongguorenquan.org") === 0 ||
        url.indexOf("zhongguotese.net") !== -1 ||
        shExpMatch(host, "*zhongguotese.net") ||
        shExpMatch(host, "*zhongmeng.org") ||
        url.indexOf(".zhoushuguang.com") !== -1 ||
        shExpMatch(host, "*zhreader.com") ||
        url.indexOf(".zhuangbi.me") !== -1 ||
        shExpMatch(host, "*zhuangbi.me") ||
        url.indexOf(".zhuanxing.cn") !== -1 ||
        shExpMatch(host, "*zhuatieba.com") ||
        url.indexOf("zhuichaguoji.org") !== -1 ||
        shExpMatch(host, "*zhuichaguoji.org") ||
        shExpMatch(host, "*zi.media") ||
        url.indexOf("http://book.zi5.me") === 0 ||
        url.indexOf(".ziddu.com/download") !== -1 ||
        shExpMatch(host, "*zillionk.com") ||
        url.indexOf(".zinio.com") !== -1 ||
        shExpMatch(host, "*zinio.com") ||
        url.indexOf(".ziporn.com") !== -1 ||
        url.indexOf(".zippyshare.com") !== -1 ||
        url.indexOf(".zkaip.com") !== -1 ||
        shExpMatch(host, "*zkaip.com") ||
        url.indexOf("realforum.zkiz.com") !== -1 ||
        shExpMatch(host, "*zmw.cn") ||
        url.indexOf(".zodgame.us") !== -1 ||
        url.indexOf("zomobo.net") !== -1 ||
        url.indexOf(".zonaeuropa.com") !== -1 ||
        shExpMatch(host, "*zonaeuropa.com") ||
        shExpMatch(host, "*zonghexinwen.com") ||
        url.indexOf(".zonghexinwen.net") !== -1 ||
        shExpMatch(host, "*zoogvpn.com") ||
        shExpMatch(host, "*zootool.com") ||
        url.indexOf(".zoozle.net") !== -1 ||
        shExpMatch(host, "*zophar.net") ||
        url.indexOf("writer.zoho.com") !== -1 ||
        shExpMatch(host, "*zorrovpn.com") ||
        shExpMatch(host, "*zpn.im") ||
        shExpMatch(host, "*zspeeder.me") ||
        url.indexOf(".zsrhao.com") !== -1 ||
        url.indexOf(".zuo.la") !== -1 ||
        shExpMatch(host, "*zuo.la") ||
        shExpMatch(host, "*zuobiao.me") ||
        url.indexOf(".zuola.com") !== -1 ||
        shExpMatch(host, "*zuola.com") ||
        shExpMatch(host, "*zvereff.com") ||
        shExpMatch(host, "*zyxel.com") ||
        url.indexOf(".zynaima.com") !== -1 ||
        url.indexOf("zyzc9.com") !== -1 ||
        url.indexOf(".zzcartoon.com") !== -1 ||
        url.indexOf("64memo") !== -1 ||
        url.indexOf("aHR0cHM6Ly95ZWNsLm5ldA") !== -1 ||
        url.indexOf("freenet") !== -1 ||
        shExpMatch(url, ".google.*/falun") ||
        shExpMatch(url, "phobos.apple.com*/video") ||
        url.indexOf("q=freedom") !== -1 ||
        url.indexOf("q%3Dfreedom") !== -1 ||
        url.indexOf("remembering_tiananmen_20_years") !== -1 ||
        shExpMatch(url, "search*safeweb") ||
        url.indexOf("q=triangle") !== -1 ||
        url.indexOf("q%3DTriangle") !== -1 ||
        url.indexOf("ultrareach") !== -1 ||
        url.indexOf("ultrasurf") !== -1 ||
        url.indexOf("@@||aliyun.com") !== -1 ||
        url.indexOf("@@||baidu.com") !== -1 ||
        url.indexOf("@@||chinaso.com") !== -1 ||
        url.indexOf("@@||chinaz.com") !== -1 ||
        url.indexOf("@@|http://nrch.culture.tw/") !== -1 ||
        url.indexOf("@@||adservice.google.com") !== -1 ||
        url.indexOf("@@||dl.google.com") !== -1 ||
        url.indexOf("@@||tools.google.com") !== -1 ||
        url.indexOf("@@||clientservices.googleapis.com") !== -1 ||
        url.indexOf("@@||fonts.googleapis.com") !== -1 ||
        url.indexOf("@@||storage.googleapis.com") !== -1 ||
        url.indexOf("@@||update.googleapis.com") !== -1 ||
        url.indexOf("@@||safebrowsing.googleapis.com") !== -1 ||
        url.indexOf("@@||cn.gravatar.com") !== -1 ||
        url.indexOf("@@||haosou.com") !== -1 ||
        url.indexOf("@@||ip.cn") !== -1 ||
        url.indexOf("@@||jike.com") !== -1 ||
        url.indexOf("@@|http://translate.google.cn") !== -1 ||
        url.indexOf("@@|http://www.google.cn/maps") !== -1 ||
        url.indexOf("@@||http2.golang.org") !== -1 ||
        url.indexOf("@@||gov.cn") !== -1 ||
        url.indexOf("@@||ocsp.pki.goog") !== -1 ||
        url.indexOf("@@||qq.com") !== -1 ||
        url.indexOf("@@||sina.cn") !== -1 ||
        url.indexOf("@@||sina.com.cn") !== -1 ||
        url.indexOf("@@||sogou.com") !== -1 ||
        url.indexOf("@@||so.com") !== -1 ||
        url.indexOf("@@||soso.com") !== -1 ||
        url.indexOf("@@||uluai.com.cn") !== -1 ||
        url.indexOf("@@||weibo.com") !== -1 ||
        url.indexOf("@@||yahoo.cn") !== -1 ||
        url.indexOf("@@||youdao.com") !== -1 ||
        url.indexOf("@@||zhongsou.com") !== -1 ||
        url.indexOf("@@|http://ime.baidu.jp") !== -1
    ) {
        return proxy;
    }

    return "DIRECT";
}

// 辅助函数
function shExpMatch(text, pattern) {
    var pChar, tChar;
    var pIndex = 0, tIndex = 0;
    var pLength = pattern.length, tLength = text.length;
    while (pIndex < pLength && tIndex < tLength) {
        pChar = pattern.charAt(pIndex);
        tChar = text.charAt(tIndex);
        if (pChar === '*') {
            pIndex++;
            while (pIndex < pLength && pattern.charAt(pIndex) === '*') {
                pIndex++;
            }
            if (pIndex === pLength) {
                return true;
            }
            while (tIndex < tLength && !shExpMatch(text.substring(tIndex), pattern.substring(pIndex))) {
                tIndex++;
            }
            if (tIndex === tLength) {
                return false;
            }
        } else if (pChar === '?' || pChar === tChar) {
            pIndex++;
            tIndex++;
        } else {
            return false;
        }
    }
    while (pIndex < pLength && pattern.charAt(pIndex) === '*') {
        pIndex++;
    }
    return pIndex === pLength && tIndex === tLength;
}
