/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2012],
  {
    45737: (e) => {
      e.exports = {
        AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
        WidePageCtn: "uHgjQHyNygSKukDngfNQO",
        PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
        PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
        Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
        PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
        ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
        ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
        ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
        LeftCol: "_1AqrivbzwCs57BXiugqpeA",
        ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
        Blue: "J7iYYml2Jf_PcaACW1hEr",
        ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
        SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
        Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
        ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
        SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
        warning: "_2HiNh3o5cgMEbzFKYBUjAy",
        IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
        RightCol: "_3kaQhRnhNh_awrnNX90rui",
        NoSticky: "JQNb8bHftBTAYpCXTx52v",
        SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
        Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
        TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
        DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
        Indent: "_7PV326-4cpZdmTCEdgC2l",
        DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
        FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
        MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
        StatusLineItemCtn: "_2h8s6LCid-ECW3NhDIBaFX",
        StatusIcon: "_3dYtRWTacFdf4BVwqGSgcd",
        StatusIconDone: "_1tiAc3o7NUJsBdgLS6vCl_",
        UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
        UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
        MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
        BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
        UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
        LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
        LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
        UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
        LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
        DeleteAll: "rYuknI3K1VFknv90GNUTc",
        EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
        StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
        HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
        StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
        Stat: "_3OYQbVCq1yBuEx1XcDzG06",
        BigStat: "lYYwDDss378Sm0FKPBxPh",
        IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
      };
    },
    79821: (e, t, a) => {
      "use strict";
      a.d(t, { Kl: () => n, Yj: () => r, iH: () => s, zV: () => o });
      const n = [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
          "meetsteamsessiongroup",
        ],
        s = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        i = [
          "img",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ];
      n.filter((e) => -1 == i.indexOf(e));
      function r(e, t = null, a = " ") {
        let s = t?.join("|");
        s || (s = n.join("|") + "|\\*");
        const i = new RegExp("\\[(" + s + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(i, a);
      }
      function o(e, t = null, a = "") {
        let s = t?.join("|");
        s || (s = n.join("|") + "|\\*");
        const i = "\\[\\/?(?:" + s + "){1,}.*?]";
        return e.replace(new RegExp(i, "gi"), a);
      }
    },
    26205: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => n, S: () => i });
      const n =
          /((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\\^-~]+[\.,](?:(?:[a-zA-Z]{2,4}[\.?]*[\/\\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>\[\]]*[^\\s"<>\[\],.ː:])?)/,
        s = /^(steam|ftp|https?):\/\//;
      function i(e) {
        return s.test(e) ? e : "https://" + e;
      }
    },
    66418: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => s, i: () => i });
      var n = a(30470);
      const s = window.Config ?? n.TS,
        i = window.UserConfig ?? n.iA;
      window.Config && Object.assign(n.TS, window.Config),
        window.UserConfig && Object.assign(i, window.UserConfig);
    },
    3578: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      var n = a(26205);
      const s = JSON.parse(
        '{"unknown":0,"store.steampowered.com":1,"steamcommunity.com":2,"global":3,"default":4,"application":5,"subscription":6,"search":7,"cart":8,"app":9,"global-nav":10,"global-account":11,"storemenu":12,"search-suggestion":13,"about":14,"suggest":15,"dlc":16,"storemenu-recommendedtags":17,"creator":18,"footer-genre-dropdown":20,"footer-category-dropdown":21,"footer-about-dropdown":22,"footer-help-dropdown":23,"footer-publisher-catalogs":24,"wishlist":25,"spotlight":40,"message":41,"marketing-message":42,"daily-deal":43,"footer":44,"header":45,"name":46,"more-details":47,"notification":48,"category":49,"steamdeck":50,"login":60,"prompt":61,"join-steam":62,"successful-login":63,"successful-joinsteam":64,"main-cluster":100,"featured-win-games":101,"featured-mac-games":102,"tab-NewReleases":103,"tab-TopSellers":104,"tab-ComingSoon":105,"tab-Discounts":106,"smallcap-videos":107,"smallcap-demos":108,"home-headlines":109,"community-activity":110,"home-underten":111,"home-specials":112,"home-partners":113,"home-steam-install":114,"community-activity-recentlyplayed":115,"community-activity-recentlybought":116,"promo-banner":117,"promo-takeover":118,"featured-linux-games":119,"updated-games":120,"featured-updated-games":121,"discovery-queue":122,"new-on-steam":123,"curated-app":124,"home-gutter":125,"upcoming-queue":126,"home-specials-under10":127,"main-cluster-recommended":128,"main-cluster-topseller":129,"main-cluster-newonsteam":130,"recommended-spotlight":131,"hardware-promo":132,"popular-new-on-steam":133,"main-cluster-recommended-byfriends":134,"main-cluster-recommended-bycurators":135,"main-cluster-recenttopseller":136,"home-under10":137,"friends-trending":138,"spotlight-specials":139,"curator-recommended":140,"best-selling-vr":141,"creator-recommendations":142,"live-broadcast":143,"main-cluster-followed-creator":144,"tab-PopularNewReleases":145,"home-big-blue-buttons":146,"home-banner":147,"top-new-releases":148,"curated-main-app":149,"search-results":150,"query":151,"search-share":152,"genre":200,"large-cluster":201,"find-more":202,"friend-activity":203,"specials":2300,"breadcrumbs":205,"freestuff":220,"demos":1900,"tab-NewDemos":222,"tab-TopDemos":223,"browse-demos":224,"videos":100002,"popular-videos":226,"tab-NewVideos":227,"browse":230,"mac":231,"under10":232,"under5":233,"publisher":234,"publishers":235,"publisher-listing":236,"tag":237,"gettaggames":238,"explore":239,"browse-tags":240,"tags":241,"content-hub-carousel":242,"Action":250,"Adventure":251,"Strategy":252,"RPG":253,"Indie":254,"Massively Multiplayer":255,"Casual":256,"Family":257,"Simulation":258,"Racing":259,"Sports":260,"recommended":300,"recommendation-main":301,"friend-recommendations":302,"recommended-friendplaytime":303,"recommended-recentlyviewed":304,"recommended-morerecentlyviewed":305,"recommended-genrehighlights":306,"morelike":307,"morelike-mainitem":308,"friendactivity.js":309,"friendactivity-wishlist-spotlight":310,"friendactivity-purchases":311,"friendactivity-playedandwanted":312,"byafriend":313,"friend-recommendation":314,"ajaxgetfriendactivity":315,"recommend-franchise":316,"more-from-franchise":317,"wishlist-capsule":318,"game-highlights":400,"recommend-game":401,"view-own-recommendation":402,"game-purchase":403,"game-purchase-guide":404,"game-purchase-dlc":405,"game-friend-recommendations":406,"game-add-to-wishlist":407,"game-details":408,"game-highlight-tags":409,"game-tags-dialog":410,"game-tags-yours":411,"bundle-component-preview":412,"dlc-parent-app-link":413,"similar-recent-apps":414,"package-purchase":420,"package-contents":421,"package-details":422,"category-list":423,"bundle":430,"bundle-contents":431,"cart-remove-item":500,"cart-items":501,"cart-continue-shopping":502,"cart-purchase":503,"checkout-logo-abandon":504,"checkout-success":505,"checkout":506,"gift":507,"self":508,"checkout-complete-return":509,"checkout-complete-logo":510,"purchaserequest":511,"display":512,"initial":513,"gifts":514,"upsell-recommended":520,"upsell-specials":521,"external-site":550,"facebook":551,"twitter":552,"referral":553,"summersale":600,"prizebooth":610,"activity-game-link":611,"activity-game-discount":612,"prize-info":613,"promotion":614,"sale":615,"sale-item":616,"sale-dailydeals":617,"sale-publishers":618,"sale-genres":619,"email":620,"cart-icon":621,"sale-category-links":622,"sale-notification-callout":623,"sale-yesterdaydeals":624,"sale-flashsales":625,"sale-fromyourwishlist":626,"closed-beta-access":627,"sale-tag-bucket":628,"sale-hero":629,"sale-franchises":630,"sale-dlcforyou":631,"sale-recommended-by-steam-labs":632,"sale-recommended-by-deep-dive":633,"sale-dailydeals-tier2":634,"sale-deep-discounts":635,"sale-deck-mostplayed":636,"home-chart-deckmostplayed":637,"home-deck-banner":638,"sale-tag-bucket-top":639,"sale-dailydeals-none":640,"sale-dailydeals-tags":641,"sale-dailydeals-ir":642,"sale-dailydeals-tier2-none":645,"sale-dailydeals-tier2-tags":646,"sale-dailydeals-tier2-ir":647,"sale-hero-none":650,"sale-hero-tags":651,"sale-hero-ir":652,"autumnsale":660,"wintersale":661,"yearinreview":662,"springsale":663,"mobileapp":700,"summary":701,"mobilestorefront":702,"home":703,"winter2012-today-square":800,"winter2012-today-square-button":801,"winter2012-hires":802,"winter2012-hires-button":803,"winter2012-yesterday-square":804,"winter2012-yesterday-square-button":805,"winter2012-flash":806,"winter2012-flash-button":807,"winter2012-pack":808,"winter2012-pack-button":809,"winter2012-topsellers":810,"winter2012-topsellers-button":811,"winter2012-vote-winner":812,"winter2012-vote-winner-button":821,"winter2012-vote-option-voting":813,"winter2012-vote-option-voted":814,"winter2012-nav":815,"winter2012-500-callout":816,"winter2012-500-callout-button":820,"winter2012-featured":817,"winter2012-lower-nav":822,"winter2012-vote-option-vote-results":823,"fall2014-48":850,"fall2014-24":851,"fall2014-TopSellers":852,"fall2014-Upcoming":853,"fall2014-Under10":854,"fall2014-Under5":855,"fall2014-PopularNewReleases":856,"fall2014-specials-more":857,"fall2014-recommend-wishlist":858,"fall2014-recommend-contentforyourgames":859,"renderspecials":860,"recommend":861,"recommended-ranked-played":862,"redeem-wallet-complete-return":900,"redeem-wallet-complete-return-app":901,"updated":1000,"curators":1050,"curatorrecommendations":1051,"ajaxgetcuratorrecommendations":1052,"curatorscombinedrecommendations":1053,"ajaxgetcombinedrecommendations":1054,"curatorlist":1055,"curator":1056,"curatorfeaturedlist":1057,"curator_featured_list":1057,"mycuratorsreviewing":1058,"creatorfeaturedrecs":1059,"new_dlc":1060,"browse-dlc":1061,"curatorlistcapsule":1062,"widget":1100,"appvisibilitystats":1101,"render":1200,"recommendationfeed-single-friends":1210,"recommendationfeed-single-curators":1211,"recommendationfeed-single-recent":1212,"recommendationfeed-single-wishlist":1213,"recommendationfeed-single-played":1214,"recommendationfeed-two":1250,"recommendationfeed-four":1251,"winter2014-featured":1300,"winter2014-yesterday":1301,"winter2014-flash":1302,"winter2014-flash2":1303,"winter2014-vote":1304,"winter2014-specials-more":1305,"winter2014-recommend-wishlist":1306,"winter2014-frontpage-wishlist":1307,"winter2014-TopSellers":1308,"winter2014-Upcoming":1309,"winter2014-Under10":1310,"winter2014-Under5":1311,"winter2014-PopularNewReleases":1312,"winter2017-FeaturedBanner":1313,"summer2018-standardview-curated":1314,"summer2018-standardview-recommend-basic":1315,"summer2018-standardview-recommend-neural":1316,"summer2018-mergedview-curated":1317,"summer2018-mergedview-recommend-neural":1318,"summer2018-salien-giveaway":1319,"summer2018-creator-recommend":1320,"summer2018-live-stream":1321,"sale-vr":1322,"sale-moddable":1323,"discovery-queue-0":1324,"wishlist-onsale":1400,"wishlist-newrelease":1401,"greenlight-newrelease":1402,"sales-event-enhanced":1403,"creator-newrelease":1404,"generic-onsale":1405,"topsellers-onsale":1406,"recommended-onsale":1407,"demo-newrelease":1408,"Free to Play":1420,"tab-mostplayednewreleases":1421,"tab-mostplayed":1422,"tab-comingsoon":1423,"tab-discounts":1424,"tab-ConcurrentUsers":1454,"vr":1453,"hub-vr-recommended":1455,"hub-vr-specials":1459,"hub-vr-featured":1463,"hub-vr-takeover":1467,"games":1452,"hub-games-recommended":1456,"hub-games-specials":1460,"hub-games-featured":1464,"hub-games-takeover":1468,"software":1451,"hub-software-recommended":1457,"hub-software-specials":1461,"hub-software-featured":1465,"hub-software-takeover":1469,"hub-videos-recommended":1458,"hub-videos-specials":1462,"hub-videos-featured":1466,"hub-videos-takeover":1470,"macos":1480,"hub-macos-recommended":1481,"hub-macos-specials":1482,"hub-macos-featured":1483,"hub-macos-takeover":1484,"linux":1490,"hub-linux-recommended":1491,"hub-linux-specials":1492,"hub-linux-featured":1493,"hub-linux-takeover":1494,"controller":1500,"hub-controller-recommended":1501,"hub-controller-specials":1502,"hub-controller-featured":1503,"hub-controller-takeover":1504,"freetoplay":1510,"hub-freetoplay-recommended":1511,"hub-freetoplay-specials":1512,"hub-freetoplay-featured":1513,"hub-freetoplay-takeover":1514,"earlyaccess":1520,"hub-earlyaccess-recommended":1521,"hub-earlyaccess-specials":1522,"hub-earlyaccess-featured":1523,"hub-earlyaccess-takeover":1524,"pccafe":1530,"hub-pccafe-recommended":1531,"hub-pccafe-specials":1532,"hub-pccafe-featured":1533,"hub-pccafe-takeover":1534,"remoteplayphone":1540,"hub-remoteplayphone-recommended":1541,"hub-remoteplayphone-specials":1542,"hub-remoteplayphone-featured":1543,"hub-remoteplayphone-takeover":1544,"remoteplaytablet":1550,"hub-remoteplaytablet-recommended":1551,"hub-remoteplaytablet-specials":1552,"hub-remoteplaytablet-featured":1553,"hub-remoteplaytablet-takeover":1554,"remoteplaytv":1560,"hub-remoteplaytv-recommended":1561,"hub-remoteplaytv-specials":1562,"hub-remoteplaytv-featured":1563,"hub-remoteplaytv-takeover":1564,"remoteplaytogether":1570,"hub-remoteplaytogether-recommended":1571,"hub-remoteplaytogether-specials":1572,"hub-remoteplaytogether-featured":1573,"hub-remoteplaytogether-takeover":1574,"remote-play-about":1580,"remoteplay":1581,"turnbasedrpg":1582,"arcaderhythm":1583,"greatondeck":1584,"remoteplaylanding":1585,"fightingmartialarts":1586,"actionfps":1587,"hackandslash":1588,"actionrunjump":1589,"shmup":1590,"adventure":1591,"action":1592,"adventurerpg":1593,"hiddenobject":1594,"metroidvania":1595,"puzzlematching":1596,"storyrich":1597,"visualnovel":1598,"casual":1559,"querypaginated":1600,"n_section":1601,"rpgjrpg":1602,"rpgpartybased":1603,"roguelikeroguelite":1604,"rpgaction":1605,"rpg":1606,"rpgstrategytactics":1607,"rpgturnbased":1608,"simulation":1609,"simbuildingautomation":1610,"simdating":1611,"simfarmingcrafting":1612,"simhobbysim":1613,"simlife":1614,"simphysicssandbox":1615,"simspaceflight":1616,"strategy":1617,"strategycardboard":1618,"strategycitiessettlements":1619,"soundtracks":1620,"hub-soundtracks-recommended":1621,"hub-soundtracks-specials":1622,"hub-soundtracks-featured":1623,"hub-soundtracks-takeover":1624,"strategygrand4x":1625,"strategymilitary":1626,"strategyrealtime":1627,"towerdefense":1628,"strategyturnbased":1629,"sportsandracing":1630,"sports":1631,"sportsfishinghunting":1632,"sportsindividual":1633,"racing":1634,"racingsim":1635,"sportssim":1636,"sportsteam":1637,"anime":1638,"horror":1639,"mysterydetective":1640,"explorationopenworld":1641,"sciencefiction":1642,"space":1643,"survival":1644,"multiplayercoop":1645,"multiplayerlan":1646,"multiplayerlocalparty":1647,"multiplayermmo":1648,"multiplayer":1649,"multiplayeronlinecompetitive":1650,"singleplayer":1651,"upcoming":1700,"comingsoon-recommendedcomingsoon":1701,"comingsoon-popularwishlist":1702,"comingsoon-newdlc":1703,"comingsoon-followedcreator":1704,"comingsoon-mywishlist":1705,"comingsoon-largecap":1706,"tab-PopularUpcoming":1707,"tab-AllUpcoming":1708,"in-library-game-event-update":1800,"on-wishlist-game-event-update":1801,"in-library-game-remind-me":1802,"hub-demos-recommended":1901,"hub-demos-specials":1902,"hub-demos-featured":1903,"hub-demos-takeover":1904,"creator-home-product-page":2000,"franchise-home-link":2001,"ajaxgetappinfoforcap":2100,"partner-events":2101,"library-partner-events":2102,"store-partner-events":2103,"steamtv-partner-events":2104,"community-partner-events":2105,"partnerweb-partner-events":2106,"store-calendar-partner-events":2107,"events":2108,"subscriptions":2109,"ea":2110,"subscriptionplansea":2111,"download_event":2112,"reminder":2113,"steamtv":2200,"hub-specials-recommended":2301,"hub-specials-specials":2302,"hub-specials-featured":2303,"hub-specials-takeover":2304,"recommender":2400,"recommended-by-steam-labs":2401,"labs":2500,"automaticshow":2501,"microtrailers":2502,"now-playing":2503,"deepdive":2504,"game-add-to-wishlist-deepdive":2505,"dbdetailsmulti":2506,"dbgetlinkparam":2507,"recommended-by-deep-dive":2508,"recommended-by-deep-dive-carousel":2509,"recommended-by-deep-dive-carousel_default":2510,"recommended-by-deep-dive-carousel_cluster_recent":2511,"recommended-by-deep-dive-carousel_cluster_games":2512,"recommended-by-deep-dive-carousel_cluster_playtime":2513,"recommended-by-deep-dive-carousel-default":2514,"recommended-by-deep-dive-carousel-cluster-recent":2515,"recommended-by-deep-dive-carousel-cluster-games":2516,"recommended-by-deep-dive-carousel-cluster-playtime":2517,"trendingreviews":2600,"ajaxgetrecentreviews":2601,"community-recommendations":2602,"lunarnewyear2020":2700,"lunarnewyear":2701,"lunarnewyearmarket":2702,"steam-logo":2750,"sale-banner":2751,"sale-button-top":2752,"sale-button-bottom":2753,"wishlist-button-bottom":2754,"footer-steam-logo":2755,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"nextfest":6000,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salesmartdailyactiveuserdemo":7006,"salesmartmostplayeddemo":7007,"salesmartdecktopplayed":7008,"salesmartcategory":7009,"vrhardwarelanding":7010,"apphome":100000,"images":100001,"allnews":100003,"news":100004,"announcements":100005,"discussions":100006,"reporteddiscussions":100007,"tradingforum":100008,"guides":100009,"reviews":100010,"positivereviews":100011,"negativereviews":100012,"workshop":100013,"broadcasts":100014,"eventcomments":100015,"sharedfiles":100100,"filedetails":100101,"screenshot":100102,"workshopitem":100103,"mtxitem":100104,"collection":100105,"guide":100106,"integratedguide":100107,"merch":100108,"artwork":100109,"video":100110,"topicsearch":100201,"singletopic":100202,"profiles":100300,"review":100301,"profileshowcase":100302,"broadcast":100400,"watch":100401,"friendactivityfeed":100500,"announcement":100501,"curatorreview":100502,"friendpurchase":100503,"workshopitempublished":100504,"artworkpublished":100505,"screenshotpublished":100506,"guidepublished":100507,"collectionpublished":100508,"itemfavorited":100509,"userreviewpublished":100510,"partner.steamgames.com":100600,"help.steampowered.com":100601,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"discoveryqueue2022":100728,"saleeventsection":100729,"salesectionlinks":100730,"salesectionrewards":100731,"salesectiontext":100732,"salesectioneventschedule":100733,"salesmartpersonalizedcarousel":100734,"promo-takeunder":100735,"salesmartwr":100736,"salesmartwishlist_allsale":100737,"salesmartir_allsale":100738,"autopopulatetag":100739,"autopopulatecategory":100740,"salesmartrecentevents":100741}',
      );
      class i {
        static InstrumentLink(e, t, a = null) {
          const n = i.GetLinkParam(t, a);
          return i.AddNavParamToURL(e, n);
        }
        static ParseSNR(e) {
          const t = e.split("_") || [];
          return {
            domain: i.DecodeEventComponent(t[0]),
            controller: i.DecodeEventComponent(t[1]),
            method: i.DecodeEventComponent(t[2]),
            submethod: i.DecodeEventComponent(t[3]),
            feature: i.DecodeEventComponent(t[4]),
            depth: t[5] ? Number(t[5]) : void 0,
          };
        }
        static GetLinkParam(e, t = null) {
          let a = i.ComputeLinkPrefix(
            e.domain,
            e.controller,
            e.method,
            e.submethod,
          );
          t = t ?? e.depth ?? null;
          const n = i.EncodeEventComponent(e.feature);
          return n && ((a += "_" + n), t && (a += "_" + t)), a;
        }
        static AddNavParamToURL(e, t) {
          try {
            const a = new URL((0, n.S)(e)),
              s = new URLSearchParams(a.search);
            return (
              s.set("snr", encodeURIComponent(t ?? "")),
              a.origin + a.pathname + "?" + s.toString() + a.hash
            );
          } catch (t) {
            return console.error(e, t), e;
          }
        }
        static ComputeLinkPrefix(e, t, a, n) {
          let s = "";
          return (
            (s += i.EncodeEventComponent(e)),
            (s += "_"),
            (s += i.EncodeEventComponent(t)),
            (s += "_"),
            (s += i.EncodeEventComponent(a)),
            (s += "_"),
            (s += i.EncodeEventComponent(n)),
            s
          );
        }
        static EncodeEventComponent(e) {
          return e
            ? e in s
              ? "" + s[e]
              : (e.match(/^[0-9]+$/) || (e = e.replace(/^[0-9]+/, "")),
                e.replace(/[^a-zA-Z0-9\- ]+/g, ""))
            : "";
        }
        static DecodeEventComponent(e) {
          const t = e && parseInt(e);
          if (t && s) for (const e in s) if (s[e] == t) return e;
          return i.SanitizeEventComponent(e);
        }
        static SanitizeEventComponent(e) {
          return e && e.match(/^[a-zA-Z0-9\-.]*$/) ? e : "";
        }
      }
    },
    60014: (e, t, a) => {
      "use strict";
      a.d(t, { n9: () => l, nn: () => o, pn: () => d, ru: () => m });
      var n = a(90626),
        s = a(3578),
        i = a(66418);
      const r = n.createContext({});
      n.createContext(void 0);
      function o(e) {
        const { children: t, ...a } = e,
          s = l(),
          i = n.useMemo(
            () => ({ ...s, ...a }),
            [
              s,
              a.domain,
              a.controller,
              a.method,
              a.submethod,
              a.feature,
              a.depth,
            ],
          );
        return n.createElement(r.Provider, { value: i }, t);
      }
      function l() {
        return n.useContext(r);
      }
      function d(e, t, a) {
        return {
          ...e,
          feature: t || e.feature,
          depth: a || e.depth,
          countrycode: i.T.COUNTRY,
          is_client: i.T.IN_CLIENT,
        };
      }
      function m(e, t) {
        const a = l();
        return n.useMemo(
          () => s.A.GetLinkParam({ ...a, feature: e || a.feature }, t),
          [a, e, t],
        );
      }
    },
    73744: (e, t, a) => {
      "use strict";
      a.d(t, {
        FZ: () => s,
        Fj: () => h,
        Hj: () => r,
        Ho: () => p,
        N_: () => I,
        PL: () => d,
        XY: () => y,
        Yw: () => n,
        _d: () => o,
        cV: () => m,
        on: () => l,
        s4: () => v,
        tW: () => i,
        vz: () => f,
        x: () => _,
        yu: () => g,
      });
      const n = ["app_header_capsule", "app_main_capsule"],
        s = [
          "sale_header",
          "sale_logo",
          "capsule",
          "product_banner",
          "product_mobile_banner",
          "localized_title_image",
        ],
        i = ["takeunder_art", "takeunder_mobile_art"],
        r = [
          "takeover_art",
          "takeover_mobile_art",
          "takeover_webm_art",
          "takeover_mp4_art",
          "takeover_webm_mobile_art",
          "takeover_mp4_mobile_art",
        ],
        o = ["marketingmessage_art", "marketingmessage_art_2"],
        l = [
          "marketingmessage_art_eventcapsule",
          "marketingmessage_art_2_eventcapsule",
        ],
        d = ["spotlight_art"],
        m = [...n, ...s, ...i, ...r, ...o, ...l, ...d],
        c = [1, 3, 2],
        u = [1, 3],
        p = [5, 4],
        _ = [7, 6],
        h = {
          capsule: { width: 800, height: 450, rgAcceptableTypes: u },
          marketingmessage_art_2_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: u,
          },
          marketingmessage_art_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: u,
          },
          spotlight: { width: 2108, height: 460, rgAcceptableTypes: u },
          localized_store_app_spotlight: {
            width: 1100,
            height: 240,
            rgAcceptableTypes: u,
          },
          localized_store_app_spotlight_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: u,
          },
          localized_title_image: {
            width: 1920,
            height: 622,
            rgAcceptableTypes: u,
          },
          background: { width: 1920, height: 622, rgAcceptableTypes: u },
          hero: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          email_full: { width: 800, height: 300, rgAcceptableTypes: u },
          email_centered: { width: 644, height: 300, rgAcceptableTypes: u },
          broadcast_left: { width: 155, height: 337, rgAcceptableTypes: u },
          broadcast_right: { width: 155, height: 337, rgAcceptableTypes: u },
          sale_header: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: c,
          },
          sale_overlay: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: c,
          },
          localized_image_group: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          localized_background_art: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          sale_section_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: c,
          },
          sale_section_title: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: c,
          },
          link_capsule: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          product_banner: { width: 1100, height: 160, rgAcceptableTypes: u },
          product_mobile_banner: {
            width: 500,
            height: 160,
            rgAcceptableTypes: u,
          },
          product_banner_override: {
            width: 1100,
            height: 160,
            rgAcceptableTypes: u,
          },
          product_mobile_banner_override: {
            width: 500,
            height: 160,
            rgAcceptableTypes: u,
          },
          schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: u },
          tab_bar_background: {
            width: 1500,
            height: 100,
            rgAcceptableTypes: u,
          },
          sale_logo: { width: 940, height: 460, rgAcceptableTypes: u },
          bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: c },
          bestofyear_banner_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: c,
          },
          localized_marketing_message: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [1, 3, 2, 10],
          },
          localized_optin_banner: {
            width: 1e3,
            height: 150,
            rgAcceptableTypes: u,
          },
          localized_marketingmessage_webm: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [5],
          },
          localized_marketingmessage_mp4: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [4],
          },
          localized_partnerevent_webm: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [5],
          },
          localized_partnerevent_mp4: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [4],
          },
          localized_subtitles: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [6, 7],
          },
          localized_marketingmessage_poster: {
            width: 528,
            height: 297,
            rgAcceptableTypes: [1, 3],
          },
          localized_marketingmessage_background: {
            width: 570,
            height: 600,
            rgAcceptableTypes: u,
          },
          localized_email_image: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: u,
          },
          spotlight_art: { width: 306, height: 260, rgAcceptableTypes: c },
          old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: c },
          marketingmessage_art: {
            width: 570,
            height: 600,
            rgAcceptableTypes: c,
          },
          marketingmessage_art_2: {
            width: 570,
            height: 600,
            rgAcceptableTypes: c,
          },
          takeover_art: { width: 1850, height: 450, rgAcceptableTypes: c },
          takeover_webm_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [4],
          },
          takeover_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: c,
          },
          takeover_webm_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [4],
          },
          takeunder_art: { width: 940, height: 150, rgAcceptableTypes: c },
          takeunder_mobile_art: {
            width: 500,
            height: 160,
            rgAcceptableTypes: c,
          },
          app_header_capsule: { width: 460, height: 215, rgAcceptableTypes: u },
          app_main_capsule: { width: 616, height: 353, rgAcceptableTypes: u },
        };
      function g(e, t, a) {
        const n = h[a];
        return (
          !!n && !n.bDisableEnforceDimensions && e === n.width && t === n.height
        );
      }
      function v(e, t, a) {
        const n = h[a];
        return (
          !!n &&
          (!!n.bDisableEnforceDimensions || !(e < n.width || t < n.height))
        );
      }
      function y(e) {
        const t = h[e];
        return (
          t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7)
        );
      }
      function f(e, t) {
        return t.filter((t) => I(e, t));
      }
      function I(e, t) {
        return h[t].rgAcceptableTypes.includes(e);
      }
    },
    47822: (e, t, a) => {
      "use strict";
      a.d(t, { NK: () => o, bK: () => n, dF: () => l, w2: () => d });
      var n,
        s = a(82097),
        i = a(4796),
        r = a(61859);
      !(function (e) {
        (e[(e.k_eLibrary = 1)] = "k_eLibrary"),
          (e[(e.k_eWishlist = 2)] = "k_eWishlist"),
          (e[(e.k_eFollowing = 4)] = "k_eFollowing"),
          (e[(e.k_eRecommended = 8)] = "k_eRecommended"),
          (e[(e.k_eSteam = 16)] = "k_eSteam"),
          (e[(e.k_eRequired = 32)] = "k_eRequired"),
          (e[(e.k_eFeatured = 64)] = "k_eFeatured"),
          (e[(e.k_eCurator = 128)] = "k_eCurator"),
          (e[(e.k_eReposted = 256)] = "k_eReposted");
      })(n || (n = {}));
      class o {
        clanid;
        unique_id;
        event_type;
        appid;
        start_time;
        appInfo;
        clanInfo;
        score;
        GetSource() {
          return this.appInfo ? this.appInfo.source : this.clanInfo.source;
        }
        static GetEntityNameForID(e, t) {
          if (e) return s.A.Get().GetApp(e)?.GetName();
          if (t) {
            const e = i.ac.GetClanInfoByClanAccountID(t);
            if (e) return e.group_name;
          }
          return (0, r.we)("#EventCalendar_MuteApp_Unknown");
        }
        static BHasEntityNameForID(e, t) {
          return e
            ? Boolean(s.A.Get().GetApp(e)?.GetName())
            : !!t && !!i.ac.GetClanInfoByClanAccountID(t)?.group_name;
        }
        GetEntityName() {
          return o.GetEntityNameForID(this.appid, this.clanid);
        }
        GetGameCapsule() {
          if (this.appInfo)
            return s.A.Get()
              .GetApp(this.appInfo.appid)
              ?.GetAssets()
              ?.GetMainCapsuleURL();
          if (this.clanInfo) {
            let e = i.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (e) return e.avatar_full_url;
          }
          return (0, r.we)("#EventCalendar_MuteApp_Unknown");
        }
        GetGameIcon() {
          if (this.appInfo)
            return s.A.Get()
              .GetApp(this.appInfo.appid)
              ?.GetAssets()
              ?.GetCommunityIconURL();
          if (this.clanInfo) {
            let e = i.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
            if (e) return e.avatar_full_url;
          }
          return (0, r.we)("#EventCalendar_MuteApp_Unknown");
        }
      }
      class l {
        appid;
        source;
        playtime;
        last_played;
        wishlist_added;
      }
      class d {
        clanid;
        source;
      }
    },
    77516: (e, t, a) => {
      "use strict";
      a.d(t, {
        ye: () => H,
        DJ: () => M,
        G6: () => O,
        zv: () => G,
        IS: () => U,
        GE: () => L,
        yX: () => B,
        w: () => x,
        EE: () => k,
        lh: () => W,
        qR: () => j,
        dm: () => N,
        DU: () => w,
        mW: () => A,
        GU: () => S,
        bv: () => E,
        Kd: () => C,
        b9: () => D,
        cB: () => z,
      });
      var n = a(34629),
        s = a(79821),
        i = a(2160),
        r = a(14947);
      const o = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(31),
        localized_broadcast_left_image: new Array(31),
        localized_broadcast_right_image: new Array(31),
        broadcast_whitelist: [],
      };
      var l = a(17720),
        d = a(27666),
        m = a(86355),
        c = a(4796),
        u = a(67165),
        p = a(44165),
        _ = a(82097),
        h = a(44332),
        g = a(61859),
        v = a(19719),
        y = a(27543),
        f = (a(41735), a(90626), a(68797), a(78327));
      var I = a(41338),
        b = (a(14771), a(6419));
      (0, n.Cg)(
        [b.o],
        class {
          m_eventModel;
          m_entry;
          constructor(e, t) {
            (this.m_eventModel = e), (this.m_entry = t);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : this.m_eventModel.startTime +
                  this.m_entry.delta_from_event_start_seconds;
          }
        }.prototype,
        "GetEventStartTime",
        null,
      );
      new Set([9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35]);
      const w = 593110,
        S = 39049601,
        E = 41316928,
        C = 4,
        A = 20,
        T = 9e4;
      var G;
      !(function (e) {
        (e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (e[(e.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (e[(e.k_EEventStateVisible = 2)] = "k_EEventStateVisible");
      })(G || (G = {}));
      const D = [
        {
          label: "#Sale_BrowserSortOption_NewAndTrending",
          flavor: "newandtrending",
          tooltip: "#Sale_BrowserSortOption_NewAndTrending_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_TopWishlisted",
          flavor: "topwishlisted",
          tooltip: "#Sale_BrowserSortOption_TopWishlisted_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_TrendingWishlisted",
          flavor: "trendingwishlisted",
          tooltip: "#Sale_BrowserSortOption_TrendingWishlisted_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_PopularUpcoming",
          flavor: "popularcomingsoon",
          tooltip: "#Sale_BrowserSortOption_PopularUpcoming_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_MostPlayedDemo",
          flavor: "mostplayeddemo",
          tooltip: "#Sale_BrowserSortOption_MostPlayedDemo_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_DailyActiveUserDemo",
          flavor: "dailyactiveuserdemo",
          tooltip: "#Sale_BrowserSortOption_DailyActiveUserDemo_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_PlayedNowDemo",
          flavor: "playednowdemo",
          tooltip: "#Sale_BrowserSortOption_PlayedNowDemo_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_RecentlyReleased",
          flavor: "recentlyreleased",
          tooltip: "#Sale_BrowserSortOption_RecentlyReleased_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_PopularPurchased",
          flavor: "popularpurchased",
          tooltip: "#Sale_BrowserSortOption_PopularPurchased_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_PopularPurchasedDiscounted",
          flavor: "popularpurchaseddiscounted",
          tooltip: "#Sale_BrowserSortOption_PopularPurchasedDiscounted_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_Discounted",
          flavor: "discounted",
          tooltip: "#Sale_BrowserSortOption_Discounted_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_Price",
          flavor: "price",
          tooltip: "#Sale_BrowserSortOption_Price_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_All",
          flavor: "all",
          tooltip: "#Sale_BrowserSortOption_All_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_NewAndTrending",
          flavor: "contenthub_newandtrending",
          tooltip: "#Sale_BrowserSortOption_ContentHub_NewAndTrending_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_TopSellers",
          flavor: "contenthub_topsellers",
          tooltip: "#Sale_BrowserSortOption_ContentHub_TopSellers_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_Popular",
          flavor: "contenthub_popular",
          tooltip: "#Sale_BrowserSortOption_ContentHub_Popular_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_TopRated",
          flavor: "contenthub_toprated",
          tooltip: "#Sale_BrowserSortOption_ContentHub_TopRated_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_Upcoming",
          flavor: "contenthub_upcoming",
          tooltip: "#Sale_BrowserSortOption_ContentHub_Upcoming_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_All",
          flavor: "contenthub_all",
          tooltip: "#Sale_BrowserSortOption_ContentHub_All_ttip",
        },
      ];
      var k, L, B, U, F, R, P;
      function j(e) {
        return Boolean(e?.store_filter)
          ? JSON.stringify(e.store_filter)
          : void 0;
      }
      function H(e) {
        return "items" === e || "trailercarousel" === e;
      }
      !(function (e) {
        (e[(e.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr"),
          (e[(e.k_EStoreFilterClauseTypeAnd = 1)] =
            "k_EStoreFilterClauseTypeAnd"),
          (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
            "k_EStoreFilterClauseTypeStoreTag"),
          (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
            "k_EStoreFilterClauseTypeFeatureTag"),
          (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
            "k_EStoreFilterClauseTypeLanguage"),
          (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
            "k_EStoreFilterClauseTypeContentDescriptor"),
          (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
            "k_EStoreFilterClauseTypePrice"),
          (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
            "k_EStoreFilterClauseTypeAppType");
      })(k || (k = {})),
        (function (e) {
          (e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (e[(e.k_ELanguage = 1)] = "k_ELanguage"),
            (e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (e[(e.k_EUserPreference = 3)] = "k_EUserPreference"),
            (e[(e.k_EPrice = 4)] = "k_EPrice"),
            (e[(e.k_EAppType = 5)] = "k_EAppType");
        })(L || (L = {})),
        (function (e) {
          (e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (e[(e.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(U || (U = {})),
        (function (e) {
          (e.Steam = "Steam"),
            (e.Facebook = "Facebook"),
            (e.Twitter = "Twitter"),
            (e.Reddit = "Reddit");
        })(F || (F = {})),
        (function (e) {
          (e.Summary = "summary"),
            (e.SummaryLargeImage = "summary_large_image");
        })(R || (R = {})),
        (function (e) {
          (e.SingleMedia = "SingleMedia"),
            (e.DoubleMedia = "DoubleMedia"),
            (e.QuadMedia = "QuadMedia"),
            (e.MediaLeft = "MediaLeft"),
            (e.MediaRight = "MediaLeft");
        })(P || (P = {}));
      const O = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(31),
        localized_label_image: new Array(31),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var x;
      !(function (e) {
        (e[(e.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (e[(e.k_EContentHub = 1)] = "k_EContentHub");
      })(x || (x = {}));
      const M = {
          localized_subtitle: new Array(31),
          localized_summary: new Array(31),
          localized_title_image: new Array(31),
          localized_capsule_image: new Array(31),
          bSaleEnabled: !1,
          sale_show_creator: !1,
          sale_sections: [],
          sale_browsemore_text: "",
          sale_browsemore_url: "",
          sale_browsemore_color: "",
          sale_browsemore_bgcolor: "",
          localized_sale_header: new Array(31),
          localized_sale_overlay: new Array(31),
          localized_sale_product_banner: new Array(31),
          localized_sale_product_mobile_banner: new Array(31),
          localized_sale_logo: new Array(31),
          sale_font: "",
          sale_background_color: "",
          sale_header_offset: 530,
          referenced_appids: [],
          ...o,
          bScheduleEnabled: !1,
          scheduleEntries: [],
        },
        z = "old_announce_",
        N = 80,
        V = [
          "workshop",
          "patchnotes",
          "contenthub",
          "skip_megaphone",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
          "enable_steam_china",
          "disable_steam_global",
          "adult_only_content",
          "stablechannel",
          "betachannel",
          "previewchannel",
        ];
      class W {
        constructor() {
          (0, r.Gn)(this);
        }
        GID = void 0;
        AnnouncementGID = void 0;
        clanSteamID;
        forumTopicGID = void 0;
        type = 1;
        appid = 0;
        name = new Map();
        description = new Map();
        timestamp_loc_updated = new Map();
        startTime = void 0;
        endTime = void 0;
        visibilityStartTime = void 0;
        visibilityEndTime = void 0;
        m_nBuildID = void 0;
        m_strBuildBranch = void 0;
        postTime = void 0;
        visibility_state = G.k_EEventStateUnpublished;
        broadcaster = void 0;
        jsondata = M;
        nCommentCount = 0;
        nVotesUp = 0;
        nVotesDown = 0;
        comment_type;
        gidfeature;
        gidfeature2;
        featured_app_tagid;
        bOldAnnouncement = !1;
        announcementClanSteamID = void 0;
        loadedAllLanguages = !1;
        bLoaded = !1;
        deleteInProgress = !1;
        vecTags = new Array();
        creator_steamid;
        last_update_steamid = void 0;
        rtime32_last_modified = void 0;
        rtime32_last_solr_search_col_updated = void 0;
        rtime32_last_local_modification = void 0;
        rtime32_moderator_reviewed = void 0;
        video_preview_type = void 0;
        video_preview_id = void 0;
        has_live_stream;
        live_stream_viewer_count;
        m_overrideCurrentDay = void 0;
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(e) {
          let t = new W(),
            a = JSON.parse(e);
          return (
            Object.assign(t, a),
            (t.name = new Map(a.name)),
            (t.description = new Map(a.description)),
            (t.vecTags = new Array(a.vecTags)),
            (t.clanSteamID = new l.b(a.clanSteamID)),
            (0, h.w)(
              t.clanSteamID && t.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
            ),
            a.broadcaster &&
              ((t.broadcaster = new l.b(a.broadcaster)),
              (0, h.w)(
                t.broadcaster && t.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  t.broadcaster.ConvertTo64BitString(),
              )),
            t
          );
        }
        toJSON(e) {
          let t = new Object();
          return (
            Object.assign(t, this),
            (t.name = Array.from(this.name)),
            (t.description = Array.from(this.description)),
            (t.tags = Array.from(this.vecTags)),
            (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
            t
          );
        }
        clone(e = !1) {
          let t = new W();
          return (
            (t.GID = this.GID),
            (t.AnnouncementGID = this.AnnouncementGID),
            (t.clanSteamID = this.clanSteamID),
            (t.bOldAnnouncement = this.bOldAnnouncement),
            (t.nCommentCount = this.nCommentCount),
            (t.nVotesUp = this.nVotesUp),
            (t.nVotesDown = this.nVotesDown),
            (t.forumTopicGID = this.forumTopicGID),
            (t.comment_type = this.comment_type),
            (t.gidfeature = this.gidfeature),
            (t.gidfeature2 = this.gidfeature2),
            (t.featured_app_tagid = this.featured_app_tagid),
            (t.creator_steamid = this.creator_steamid),
            (t.last_update_steamid = this.last_update_steamid),
            (t.rtime32_last_modified = this.rtime32_last_modified),
            (t.rtime32_last_solr_search_col_updated =
              this.rtime32_last_solr_search_col_updated),
            (t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
            (t.type = this.type),
            (t.appid = this.appid),
            (t.name = new Map()),
            this.name.forEach((e, a) => {
              t.name.set(a, e);
            }),
            (t.description = new Map()),
            this.description.forEach((e, a) => {
              t.description.set(a, e);
            }),
            (t.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((e, a) => {
              t.timestamp_loc_updated.set(a, e);
            }),
            (t.startTime = this.startTime),
            (t.endTime = this.endTime),
            (t.visibilityStartTime = this.visibilityStartTime),
            (t.visibilityEndTime = this.visibilityEndTime),
            (t.postTime = this.postTime),
            (t.visibility_state = this.visibility_state),
            (t.loadedAllLanguages = this.loadedAllLanguages),
            (t.bLoaded = this.bLoaded),
            (t.broadcaster = this.broadcaster
              ? new l.b(this.broadcaster.ConvertTo64BitString())
              : null),
            (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (t.vecTags = new Array()),
            e
              ? ((t.m_nBuildID = this.m_nBuildID),
                (t.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((e) => t.vecTags.push(e)))
              : this.vecTags.forEach((e) => {
                  V.includes(e) && t.vecTags.push(e);
                }),
            t
          );
        }
        GetLastReferencedSaleDayFromCapsules(e, t) {
          let a = t;
          return (
            e?.forEach((e) => {
              void 0 !== e.visibility_index &&
                (a =
                  void 0 === a
                    ? e.visibility_index
                    : Math.max(a, e.visibility_index));
            }),
            a
          );
        }
        GetLastReferencedSaleDay() {
          let e;
          for (const t of this.GetSaleSections())
            if ("tabs" === t.section_type) {
              if (t.tabs?.length > 0)
                for (const a of t.tabs)
                  e = this.GetLastReferencedSaleDayFromCapsules(a.capsules, e);
            } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
          return (
            this.jsondata.sale_num_headers > 1 &&
              (null == e || e < this.jsondata.sale_num_headers) &&
              (e = this.jsondata.sale_num_headers),
            e
          );
        }
        GetDayIndexFromEventStart() {
          let e = 0;
          const t = p.HD.GetTimeNowWithOverride();
          void 0 !== this.startTime &&
            t >= this.startTime &&
            (e = Math.floor((t - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (e = this.m_overrideCurrentDay);
          const a = this.GetLastReferencedSaleDay() || 0;
          return Math.min(e, a);
        }
        GetNameWithFallback(e) {
          const t = g.A0.GetELanguageFallback(e);
          return this.name.get(e) || this.name.get(t);
        }
        GetGameTitle(e) {
          return _.A.Get().GetApp(this.appid)?.GetName();
        }
        BInRealmGlobal() {
          return !this.BHasTag("disable_steam_global");
        }
        BInRealmChina() {
          return this.BHasTag("enable_steam_china");
        }
        BIsLanguageValidForRealms(e) {
          return (
            !(
              !this.BInRealmGlobal() ||
              !g.A0.IsELanguageValidInRealm(e, i.TU.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !g.A0.IsELanguageValidInRealm(e, i.TU.k_ESteamRealmChina)
            )
          );
        }
        GetImgArray(e) {
          let t = [];
          if (
            (("background" !== e && "localized_title_image" != e) ||
              (t = this.jsondata.localized_title_image),
            "capsule" === e)
          )
            t = this.jsondata.localized_capsule_image;
          else if ("spotlight" === e)
            t = this.jsondata.localized_spotlight_image;
          else if ("email_full" === e || "email_centered" === e)
            t = this.jsondata.email_setting
              ? this.jsondata.email_setting.sections[0].localized_image
              : [];
          else if ("broadcast_left" === e)
            t = this.jsondata.localized_broadcast_left_image;
          else if ("broadcast_right" === e)
            t = this.jsondata.localized_broadcast_right_image;
          else if ("sale_header" === e)
            if (this.jsondata.sale_num_headers > 1) {
              const e = Math.min(
                this.jsondata.sale_num_headers - 1,
                this.GetDayIndexFromEventStart(),
              );
              t = this.jsondata.localized_per_day_sales_header[e];
            } else t = this.jsondata.localized_sale_header;
          else
            "sale_logo" === e
              ? (t = this.jsondata.localized_sale_logo)
              : "sale_overlay" === e
                ? (t = this.jsondata.localized_sale_overlay)
                : m.pb.includes(e)
                  ? (t = m.pU.GetLocalizedImageGroupForEditAsImgArray(
                      this.clanSteamID,
                    ))
                  : "product_banner" === e
                    ? (t = this.jsondata.localized_sale_product_banner)
                    : "product_mobile_banner" === e
                      ? (t = this.jsondata.localized_sale_product_mobile_banner)
                      : "bestofyear_banner" === e
                        ? (t = this.jsondata.localized_bestofyear_banner)
                        : "bestofyear_banner_mobile" === e
                          ? (t =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : "localized_store_app_spotlight" === e
                            ? (t = this.jsondata.localized_store_app_spotlight)
                            : "localized_store_app_spotlight_mobile" === e &&
                              (t =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
          return t;
        }
        GetImageURL(e, t = 0, a = m.wI.full) {
          const n = this.GetImgArray(e),
            s = n && n.length > t && null != n[t];
          return s && n[t].startsWith("http")
            ? n[t]
            : s
              ? m.i6.GenerateArtworkURLFromHashAndExtensions(
                  this.clanSteamID,
                  n[t],
                  a,
                )
              : void 0;
        }
        GetImageHash(e, t = 0) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t]
            ? a[t].substr(0, a[t].length - 4)
            : null;
        }
        GetImageHashAndExt(e, t = 0) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t] ? a[t] : null;
        }
        BHasSomeImage(e) {
          let t = this.GetImgArray(e);
          return t && t.some((e) => null != e && e.length > 0);
        }
        BHasImage(e, t) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t];
        }
        BHasAnnouncementGID() {
          return (
            null !== this.AnnouncementGID &&
            void 0 !== this.AnnouncementGID &&
            this.AnnouncementGID.length > 1
          );
        }
        GetAnnouncementGID() {
          return this.AnnouncementGID;
        }
        BHasForumTopicGID() {
          return (
            null !== this.forumTopicGID &&
            void 0 !== this.forumTopicGID &&
            this.forumTopicGID.length > 1
          );
        }
        GetForumTopicURL() {
          if (!this.BHasForumTopicGID()) return "";
          if (this.appid)
            return (
              f.TS.COMMUNITY_BASE_URL +
              "app/" +
              this.appid +
              "/eventcomments/" +
              this.forumTopicGID
            );
          {
            const e = c.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && e.vanity_url)
              return (
                f.TS.COMMUNITY_BASE_URL +
                "groups/" +
                e.vanity_url +
                "/eventcomments/" +
                this.forumTopicGID
              );
          }
          return (
            f.TS.COMMUNITY_BASE_URL +
            "gid/" +
            this.clanSteamID.ConvertTo64BitString() +
            "/eventcomments/" +
            this.forumTopicGID
          );
        }
        BIsEventInFuture() {
          return p.HD.GetTimeNowWithOverride() < this.startTime;
        }
        BHasEventEnded() {
          return this.endTime < p.HD.GetTimeNowWithOverride();
        }
        UpdateVoteCount(e, t) {
          "up" == e
            ? (this.nVotesUp = (0, v.OQ)(
                this.nVotesUp + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ))
            : "down" == e &&
              (this.nVotesDown = (0, v.OQ)(
                this.nVotesDown + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ));
        }
        GetImageFromBeginningOfDescription(e, t) {
          let a = this.GetDescriptionWithFallback(e);
          if (a) {
            let e = a.indexOf("[img]");
            if (-1 !== e && e < t) {
              e += 5;
              let t = a.indexOf("[/img]", e);
              if (-1 != t) {
                let n = a.substring(e, t).trim();
                if (0 != n.length) return (0, d.v6)(n);
              }
            }
          }
          return null;
        }
        GetImageURLWithFallback(e, t, a = m.wI.full) {
          const n = this.GetImageURL(e, t, a);
          if (n && n.trim().length > 0) return n;
          const s = g.A0.GetELanguageFallback(t);
          if (t != s) {
            const t = this.GetImageURL(e, s, a);
            if (t && t.trim().length > 0) return t;
          }
          const i = c.ac.GetClanInfoByClanAccountID(
            this.clanSteamID.GetAccountID(),
          );
          if ("capsule" == e) {
            let e = this.GetImageFromBeginningOfDescription(
              t,
              Number.MAX_VALUE,
            );
            if (e) return e;
            let a = this.appid;
            if (!a && i && ((i.is_creator_home && !i.is_ogg) || i.is_curator)) {
              if (!this.jsondata?.referenced_appids?.length)
                return i.avatar_full_url;
              a = this.jsondata.referenced_appids[0];
            }
            const n = _.A.Get().GetApp(a);
            return n
              ? n.GetAssets().GetMainCapsuleURL()
              : f.TS.STORE_ICON_BASE_URL + a + "/header.jpg";
          }
          return "background" == e &&
            i &&
            ((i.is_creator_home && !i.is_ogg) || i.is_curator)
            ? i.creator_page_bg_url
            : this.GetFallbackArtworkScreenshot();
        }
        GetFallbackArtworkScreenshot() {
          if (this.appid) {
            _.A.Get().QueueAppRequest(this.appid, { include_screenshots: !0 });
            const e = _.A.Get().GetApp(this.appid);
            let t = Number(
              this.bOldAnnouncement
                ? this.AnnouncementGID
                : null == this.GID
                  ? 0
                  : this.GID,
            );
            return e?.GetOnlyAllAgesSafeScreenshots().length > 1
              ? ((t %= e.GetOnlyAllAgesSafeScreenshots().length),
                e.GetOnlyAllAgesSafeScreenshots()[t])
              : e?.GetBothAllAgesSafeAndMatureScreenshots()?.length > 0
                ? ((t %= e.GetBothAllAgesSafeAndMatureScreenshots().length),
                  e.GetBothAllAgesSafeAndMatureScreenshots()[t])
                : "";
          }
          if (this.clanSteamID) {
            const e = c.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && ((e.is_creator_home && !e.is_ogg) || e.is_curator))
              return e.avatar_full_url;
          }
          return "";
        }
        BImageNeedScreenshotFallback(e, t) {
          let a = this.GetImageURL(e, t);
          if (!a || 0 == a.length) {
            const n = g.A0.GetELanguageFallback(t);
            t != n && (a = this.GetImageURL(e, n));
          }
          return !a || 0 == a.length;
        }
        GetImageForSizeAsArrayWithFallback(e, t, a, n) {
          let s = new Array();
          this.BImageNeedScreenshotFallback(e, t) ||
            (s.push(this.GetImageURLWithFallback(e, t, a)),
            a != m.wI.full &&
              s.push(this.GetImageURLWithFallback(e, t, m.wI.full)));
          const i = this.GetFallbackArtworkScreenshot();
          return i && !n && s.push(i), s;
        }
        GetDescriptionWithFallback(e) {
          const t = g.A0.GetELanguageFallback(e);
          return this.description.get(e) || this.description.get(t);
        }
        BIsImageSafeForAllAges(e, t) {
          const a = c.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            ),
            n = g.A0.GetELanguageFallback(t);
          return (
            null != this.GetImageURL(e, t) ||
            (t != n && null != this.GetImageURL(e, n)) ||
            (this.appid &&
              _.A.Get().GetApp(this.appid)?.BHasAgeSafeScreenshots()) ||
            (!this.appid &&
              a &&
              ((a.is_creator_home && !a.is_ogg) || a.is_curator))
          );
        }
        BIsVisibleEvent() {
          let e = Math.floor(p.HD.GetTimeNowWithOverride());
          return (
            this.visibility_state == G.k_EEventStateVisible &&
            e > this.visibilityStartTime &&
            (this.visibilityEndTime < 10 || e < this.visibilityEndTime)
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == G.k_EEventStateStaged;
        }
        GetStartTimeAndDateUnixSeconds() {
          return this.startTime;
        }
        GetEndTimeAndDateUnixSeconds() {
          return this.endTime;
        }
        GetPostTimeAndDateUnixSeconds() {
          return this.postTime;
        }
        GetVisibilityStartTimeAndDateUnixSeconds() {
          return this.visibilityStartTime;
        }
        BIsEventActionEnabled() {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > p.HD.GetTimeNowWithOverride() ||
              (1575396e3 == this.jsondata.action_end_time &&
                1606845600 > p.HD.GetTimeNowWithOverride()))
          );
        }
        BHasSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return !1;
          let t = this.jsondata.localized_subtitle[e];
          return null != t && "" != t;
        }
        GetSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return "";
          let t = this.jsondata.localized_subtitle[e];
          return t || "";
        }
        GetSubTitleWithLanguageFallback(e) {
          return this.jsondata
            ? g.NT.GetWithFallback(this.jsondata.localized_subtitle, e)
            : "";
        }
        GetSubTitleWithSummaryFallback(e) {
          return (
            g.NT.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
            W.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
          );
        }
        GetSummaryWithFallback(e, t) {
          return (
            g.NT.GetWithFallback(this.jsondata?.localized_summary, e) ||
            W.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
          );
        }
        GetSummary(e) {
          return g.NT.Get(this.jsondata?.localized_summary, e);
        }
        BHasSummary(e) {
          return Boolean(this.GetSummary(e));
        }
        static GenerateSummaryFromText(e, t) {
          return e && 0 != e.trim().length
            ? ((e = (0, s.Yj)(e, [
                "img",
                "h1",
                "h2",
                "h3",
                "spoiler",
                "table",
                "previewyoutube",
                "looping_media",
                "roomeffect",
                "sticker",
              ])),
              (e = (0, s.zV)(e)),
              (e = (0, I.aX)(e)),
              (0, I.bC)(e, t || 180))
            : "";
        }
        BHasTag(e) {
          return -1 != this.vecTags.indexOf(e);
        }
        BHasTagStartingWith(e) {
          return this.vecTags.some((t) => t.startsWith(e));
        }
        BIsOGGEvent() {
          return Boolean(this.appid) && this.appid > 0;
        }
        BShowLibrarySpotlight() {
          return Boolean(this.jsondata.library_spotlight);
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(e) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const t = p.HD.GetTimeNowWithOverride(),
            a = this.endTime ? this.endTime : t + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (e || (this.startTime - 600 <= t && t < a))
          );
        }
        BHasBroadcastForceBanner() {
          return this.jsondata.broadcast_force_banner;
        }
        BSaleShowBroadcastAtTopOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "broadcast" == e.section_type,
            )
          );
        }
        BSaleShowCuratorRecommendationAtBottomOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "curator_recommendation" == e.section_type,
            )
          );
        }
        GetBroadcastChatVisibility() {
          return this.jsondata.broadcastChatSetting || "hide";
        }
        GetBroadcastTitle(e) {
          return (
            g.NT.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
            (0, g.we)(
              this.jsondata.default_broadcast_title ??
                "#Broadcast_default_title_dev",
            )
          );
        }
        GetBroadcastWhitelist() {
          return this.jsondata.broadcast_whitelist;
        }
        GetBroadcastWhitelistAsSteamIDs() {
          return this.jsondata.broadcast_whitelist.map((e) =>
            l.b.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        BIsBroadcastAccountIDWhiteListed(e) {
          return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
        }
        BHasSaleEnabled() {
          return this.jsondata.bSaleEnabled;
        }
        BHasSaleVanity() {
          return (
            this.jsondata.bSaleEnabled && Boolean(this.jsondata.sale_vanity_id)
          );
        }
        GetSaleVanity() {
          return this.jsondata.sale_vanity_id;
        }
        GetSaleURL() {
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              f.TS.STORE_BASE_URL +
              "newshub/" +
              (this.appid
                ? "app/" + this.appid
                : "group/" + this.clanSteamID.GetAccountID()) +
              "/view/" +
              this.GID
            );
          if (this.BUsesContentHubForItemSource()) {
            const e = this.jsondata.source_content_hub;
            return e
              ? "string" == typeof e
                ? f.TS.STORE_BASE_URL + "category/" + e
                : "category" == e.type
                  ? f.TS.STORE_BASE_URL + "category/" + e.category
                  : "tags" == e.type
                    ? f.TS.STORE_BASE_URL +
                      "tags/" +
                      ((0, g.l4)() || "en") +
                      "/" +
                      e.tagid
                    : "freetoplay" == e.type
                      ? f.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                      : "earlyaccess" == e.type
                        ? f.TS.STORE_BASE_URL + "genre/Early%20Access/"
                        : f.TS.STATS_BASE_URL + e.type
              : f.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          if (!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath) {
            if (u.pF.BHasCreatorHomeLoaded(this.clanSteamID)) {
              return (
                u.pF
                  .GetCreatorHome(this.clanSteamID)
                  .GetCreatorHomeURL("developer") +
                "sale/" +
                this.jsondata.sale_vanity_id
              );
            }
            return (
              f.TS.STORE_BASE_URL +
              "curator/" +
              this.clanSteamID.GetAccountID() +
              "/sale/" +
              this.jsondata.sale_vanity_id
            );
          }
          return f.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections;
        }
        GenerateDynamicSaleSections(e, t, a, n) {
          const s = [],
            i = {
              section_type: "unselected_empty",
              capsules: void 0,
              events: void 0,
              links: void 0,
              localized_label: void 0,
              default_label: void 0,
            };
          return (
            e &&
              s.push({
                ...i,
                section_type: "footer_self_creator_home",
                unique_id: 90010,
                curator_clan_id: this.clanSteamID.GetAccountID(),
              }),
            a &&
              s.push({
                ...i,
                section_type: "footer_browse_more",
                unique_id: 90012,
              }),
            n &&
              s.push({
                ...i,
                section_type: "footer_default_social_share",
                unique_id: 90013,
              }),
            s
          );
        }
        GetSaleSectionIncludingFooterSections() {
          const e = this.jsondata?.sale_show_creator,
            t = this.BSaleShowCuratorRecommendationAtBottomOfPage(),
            a = this.jsondata.sale_browse_more_button,
            n =
              0 == this.GetSaleSectionsByType("social_share").length &&
              !this.jsondata.sale_default_social_media_disabled;
          return e || t || a || n
            ? [
                ...this.GetSaleSections(),
                ...this.GenerateDynamicSaleSections(e, t, a, n),
              ]
            : this.GetSaleSections();
        }
        GetSaleSectionByID(e) {
          if (e > T) {
            return this.GenerateDynamicSaleSections(!0, !0, !0, !0).find(
              (t) => t.unique_id == e,
            );
          }
          return this.jsondata.sale_sections?.find((t) => t.unique_id == e);
        }
        GetSaleSectionCount() {
          return this.jsondata.sale_sections.length;
        }
        GetSaleSectionsByType(e) {
          return this.jsondata.sale_sections?.filter(
            (t) => t.section_type == e,
          );
        }
        GetSaleSectionFirstMatchByType(e) {
          for (let t = 0; t < this.jsondata.sale_sections.length; ++t)
            if (this.jsondata.sale_sections[t].section_type === e)
              return this.jsondata.sale_sections[t];
        }
        static AccumulateCapsuleListIDs(e, t, a, n) {
          e &&
            e.forEach((e) => {
              if (e) {
                t.has(e.type) && ((n && !n(e.id)) || a.add(e.id));
              }
            });
        }
        GetSaleItemOfType(e, t) {
          if (!this.jsondata.sale_sections) return new Set();
          const a = new Set(e),
            n = new Set();
          if (
            ((0, h.w)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize && "dev" == f.TS.WEB_UNIVERSE)
          )
            throw new Error(
              "GetSaleOfItemType called on a truncated jsondata.",
            );
          return (
            this.jsondata.tagged_items?.forEach((e) => {
              W.AccumulateCapsuleListIDs([e.capsule], a, n, t);
            }),
            this.jsondata.sale_sections.forEach((e) => {
              if (H(e.section_type))
                W.AccumulateCapsuleListIDs(e.capsules, a, n, t);
              else if ("tabs" === e.section_type && e.tabs)
                for (const s of e.tabs)
                  W.AccumulateCapsuleListIDs(s.capsules, a, n, t);
            }),
            n
          );
        }
        GetSaleItemCountOfType(e, t) {
          return this.GetSaleItemOfType(e, t).size;
        }
        GetSaleFeaturedAppsCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemosCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundlesCount(e) {
          return this.GetSaleItemCountOfType(["bundle"], e);
        }
        GetSaleFeaturedPackagesCount(e) {
          return this.GetSaleItemCountOfType(["sub"], e);
        }
        GetSaleFeaturedApps(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemos(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundles(e) {
          return this.GetSaleItemOfType(["bundle"], e);
        }
        GetSaleFeaturedPackages(e) {
          return this.GetSaleItemOfType(["sub"], e);
        }
        GetTaggedItems() {
          return this.jsondata.tagged_items || [];
        }
        BHasScheduleEnabled() {
          return this.jsondata.bScheduleEnabled;
        }
        GetEventType() {
          return this.type;
        }
        GetEventTypeAsString() {
          return (0, y.rG)(this.type);
        }
        GetCategoryAsString() {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, g.we)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
              ? (0, g.we)("#PartnerEvent_SteamAwardVoteRequest")
              : this.BHasTag("steam_game_festival_artist_statement")
                ? (0, g.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                : this.BHasTag("steam_game_festival_office_hour")
                  ? (0, g.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                  : this.BHasTag("steam_game_festival_broadcast") ||
                      (this.BHasTagStartingWith("sale_nextfest_") &&
                        11 == this.type)
                    ? (0, g.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                    : this.GetEventTypeAsString();
        }
        GetAllTags() {
          return this.vecTags;
        }
        BMatchesAllTags(e) {
          let t = !0;
          return (
            e?.forEach((e) => {
              this.vecTags.includes(e) || (t = !1);
            }),
            t
          );
        }
        BAllowedSteamStoreSpotlight() {
          return Boolean(this.jsondata.store_spotlight);
        }
        BHasLibaryHomeSpotlight() {
          return Boolean(this.jsondata.library_home_spotlight);
        }
        BHasSaleProductBanners() {
          return (
            this.jsondata.bSaleEnabled &&
            (this.BHasSomeImage("product_banner") ||
              this.BHasSomeImage("product_banner_override"))
          );
        }
        GetSteamAwardCategory() {
          return this.jsondata.steam_award_category_suggestion;
        }
        GetSteamAwardNomineeCategories() {
          return this.jsondata.steam_award_category_voteids;
        }
        BIsLockedToGameOwners() {
          return Boolean(
            this.jsondata.ownership_requirement_info?.bLockedToAppOwners,
          );
        }
        GetRequiredAppIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
            : [];
        }
        GetRequiredPackageIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
            : [];
        }
        BUseSubscriptionLayout() {
          return !!this.jsondata.sale_use_subscription_layout;
        }
        BIsLockedToPartnerAppRights() {
          return Boolean(
            this.jsondata.app_right_requirement_info?.bLockedToPartnerAppRights,
          );
        }
        GetRequiredPartnerAppRights() {
          return this.jsondata.app_right_requirement_info;
        }
        GetValveAccessLog() {
          return Array.isArray(this.jsondata.valve_access_log)
            ? this.jsondata.valve_access_log
            : [];
        }
        BUsesContentHubForItemSource() {
          return (
            this.jsondata.item_source_type === x.k_EContentHub &&
            Boolean(this.jsondata.source_content_hub)
          );
        }
        GetContentHubType() {
          return this.BUsesContentHubForItemSource()
            ? null == this.jsondata.source_content_hub
              ? "games"
              : "string" == typeof this.jsondata.source_content_hub
                ? "category"
                : this.jsondata.source_content_hub.type
            : void 0;
        }
        GetContentHubCategory() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? this.jsondata.source_content_hub
              : this.jsondata.source_content_hub.category;
        }
        GetContentHubTag() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? 0
              : this.jsondata.source_content_hub.tagid;
        }
        GetContentHub() {
          return "string" == typeof this.jsondata.source_content_hub
            ? { type: "category", category: this.jsondata.source_content_hub }
            : this.jsondata.source_content_hub;
        }
        BContentHubDiscountedOnly() {
          return this.jsondata.content_hub_discounted_only;
        }
        BIsBackgroundImageGroupingEnabled() {
          return this.jsondata.sale_background_img_groups?.enabled;
        }
        GetSalePageGroupDefinition() {
          return this.jsondata.sale_background_img_groups;
        }
        GetSalePageBackgroundImageGroupCount() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups.length
            : 0;
        }
        GetAllSalePageGroups() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups
            : [];
        }
        GetSalePageBackgroundGroup(e) {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups[e]
            : null;
        }
        GetIncludedRealmList() {
          const e = new Array();
          return (
            this.BInRealmGlobal() && e.push(i.TU.k_ESteamRealmGlobal),
            this.BInRealmChina() && e.push(i.TU.k_ESteamRealmChina),
            (0, h.w)(
              e.length > 0,
              `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
            ),
            e
          );
        }
        BIsValidForRealm(e) {
          return this.GetIncludedRealmList().includes(e);
        }
      }
      (0, n.Cg)([r.sH], W.prototype, "GID", void 0),
        (0, n.Cg)([r.sH], W.prototype, "AnnouncementGID", void 0),
        (0, n.Cg)([r.sH], W.prototype, "forumTopicGID", void 0),
        (0, n.Cg)([r.sH], W.prototype, "type", void 0),
        (0, n.Cg)([r.sH], W.prototype, "appid", void 0),
        (0, n.Cg)([r.sH], W.prototype, "name", void 0),
        (0, n.Cg)([r.sH], W.prototype, "description", void 0),
        (0, n.Cg)([r.sH], W.prototype, "timestamp_loc_updated", void 0),
        (0, n.Cg)([r.sH], W.prototype, "startTime", void 0),
        (0, n.Cg)([r.sH], W.prototype, "endTime", void 0),
        (0, n.Cg)([r.sH], W.prototype, "visibilityStartTime", void 0),
        (0, n.Cg)([r.sH], W.prototype, "visibilityEndTime", void 0),
        (0, n.Cg)([r.sH], W.prototype, "m_nBuildID", void 0),
        (0, n.Cg)([r.sH], W.prototype, "m_strBuildBranch", void 0),
        (0, n.Cg)([r.sH], W.prototype, "postTime", void 0),
        (0, n.Cg)([r.sH], W.prototype, "visibility_state", void 0),
        (0, n.Cg)([r.sH], W.prototype, "broadcaster", void 0),
        (0, n.Cg)([r.sH], W.prototype, "jsondata", void 0),
        (0, n.Cg)([r.sH], W.prototype, "nCommentCount", void 0),
        (0, n.Cg)([r.sH], W.prototype, "nVotesUp", void 0),
        (0, n.Cg)([r.sH], W.prototype, "nVotesDown", void 0),
        (0, n.Cg)([r.sH], W.prototype, "bOldAnnouncement", void 0),
        (0, n.Cg)([r.sH], W.prototype, "announcementClanSteamID", void 0),
        (0, n.Cg)([r.sH], W.prototype, "loadedAllLanguages", void 0),
        (0, n.Cg)([r.sH], W.prototype, "bLoaded", void 0),
        (0, n.Cg)([r.sH], W.prototype, "deleteInProgress", void 0),
        (0, n.Cg)([r.sH], W.prototype, "vecTags", void 0),
        (0, n.Cg)([r.sH], W.prototype, "last_update_steamid", void 0),
        (0, n.Cg)([r.sH], W.prototype, "rtime32_last_modified", void 0),
        (0, n.Cg)(
          [r.sH],
          W.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, n.Cg)(
          [r.sH],
          W.prototype,
          "rtime32_last_local_modification",
          void 0,
        ),
        (0, n.Cg)([r.sH], W.prototype, "rtime32_moderator_reviewed", void 0),
        (0, n.Cg)([r.sH], W.prototype, "video_preview_type", void 0),
        (0, n.Cg)([r.sH], W.prototype, "video_preview_id", void 0),
        (0, n.Cg)([r.sH], W.prototype, "m_overrideCurrentDay", void 0);
    },
    55963: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ay: () => c,
        L3: () => m,
        VZ: () => l,
        k2: () => o,
        wJ: () => d,
      });
      var n = a(3578),
        s = a(44332),
        i = a(61336),
        r = a(30470);
      function o(e, t = "", a = null) {
        return c.InstrumentLink(e, t, a);
      }
      function l(e, t, a = null) {
        const n = (0, i.wm)(e).toLowerCase(),
          s = (0, i.wm)(r.TS.COMMUNITY_BASE_URL).toLowerCase(),
          o = (0, i.wm)(r.TS.STORE_BASE_URL).toLowerCase();
        return n === s || n === o ? d(e, t, a) : e;
      }
      function d(e, t, a = null) {
        const s = m(t, a);
        return n.A.AddNavParamToURL(e, s);
      }
      function m(e, t = null) {
        return e?.domain ? c.GetLinkParam(e, t) : r.TS.SNR;
      }
      class c {
        static sm_strDomain;
        static sm_strController;
        static sm_strMethod;
        static sm_strSubmethod;
        static sm_strComputedLinkPrefix;
        static SetNavEventParams(e, t, a = null, n = null) {
          (c.sm_strDomain = e),
            (c.sm_strController = t),
            (c.sm_strMethod = a),
            (c.sm_strSubmethod = n),
            (c.sm_strComputedLinkPrefix = null);
        }
        static GetDefaultParams() {
          let e = { domain: c.sm_strDomain, controller: c.sm_strController };
          return (
            c.sm_strMethod && (e.method = c.sm_strMethod),
            c.sm_strSubmethod && (e.submethod = c.sm_strSubmethod),
            e
          );
        }
        static InstrumentLink(e, t, a = null) {
          const s = c.GetLinkParam(t, a);
          return n.A.AddNavParamToURL(e, s);
        }
        static GetLinkParam(e, t = null) {
          let a, s;
          if ("string" != typeof e) {
            if (e.domain) return n.A.GetLinkParam(e, t);
            a = e.feature || "";
          }
          if (!c.sm_strComputedLinkPrefix && !c.ComputeStaticLinkPrefix())
            return null;
          s = c.sm_strComputedLinkPrefix;
          let i = n.A.EncodeEventComponent(a);
          return i && ((s += "_" + i), t && (s += "_" + t)), s;
        }
        static ComputeStaticLinkPrefix() {
          return c.sm_strDomain
            ? ((c.sm_strComputedLinkPrefix = n.A.ComputeLinkPrefix(
                c.sm_strDomain,
                c.sm_strController,
                c.sm_strMethod,
                c.sm_strSubmethod,
              )),
              !0)
            : ((0, s.w)(
                !1,
                "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
              ),
              !1);
        }
      }
    },
    28954: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => v });
      var n = a(34629),
        s = a(2160),
        i = a(41735),
        r = a.n(i),
        o = a(14947),
        l = a(68797),
        d = a(6419),
        m = a(6144),
        c = a(56011),
        u = a(61859),
        p = a(78327),
        _ = a(86355),
        h = a(64953),
        g = a(69343);
      class v {
        m_filesToUpload = o.sH.array();
        m_filesCompleted = [];
        m_clanSteamID;
        m_allCancelTokens = new Array();
        m_lastError = void 0;
        m_fnSetImageURL = null;
        constructor(e) {
          (0, o.Gn)(this), (this.m_clanSteamID = e);
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        SetImageAllUrlFunction(e) {
          this.m_fnSetImageURL = e;
        }
        async AddImage(e, t = 0, a, n) {
          const s = (0, g.j)(e.name, t);
          return this.AddImageForLanguage(e, s, a, n);
        }
        async AddImageForLanguage(e, t, a, n) {
          let s = !1;
          return (
            await new Promise((i) => {
              const r = new FileReader();
              (r.onload = () => {
                const o = e.name.split(".").pop().toLowerCase();
                let l = null;
                !p.iA.is_support || ("webm" != o && "mp4" != o)
                  ? ((l = new Image()),
                    (l.onload = () => {
                      const r = new h.i9(e, t, l, a, n);
                      (this.m_filesToUpload = [...this.m_filesToUpload, r]),
                        (s = !0),
                        i();
                    }))
                  : ((l = document.createElement("video")),
                    (l.onloadeddata = () => {
                      const r = new h.i9(e, t, l, a, n);
                      (this.m_filesToUpload = [...this.m_filesToUpload, r]),
                        (s = !0),
                        i();
                    })),
                  (l.onerror = (e) => {
                    console.error(
                      "CClanImageUploader failed to load the image, details",
                      e,
                    ),
                      (s = !1),
                      i();
                  }),
                  (l.src = r.result.toString());
              }),
                r.readAsDataURL(e);
            }),
            s
          );
        }
        async AddExistingClanImage(e, t = 0, a, n) {
          let s = _.i6.GetHashAndExt(e),
            i = _.i6.GenerateEditableArtworkURLFromHashAndExtension(
              this.m_clanSteamID,
              s,
            ),
            o = await r()({ url: i, method: "GET", responseType: "blob" }),
            l = (0, c.pE)(o.data, e.file_name);
          return await this.AddImage(l, t, a, n);
        }
        DeleteUploadImageByIndex(e) {
          this.m_filesToUpload.splice(e, 1),
            (this.m_filesToUpload = [...this.m_filesToUpload]);
        }
        DeleteUploadImage(e) {
          let t = this.m_filesToUpload.findIndex(
            (t) => e.file == t.file && e.uploadTime == t.uploadTime,
          );
          t >= 0 && this.DeleteUploadImageByIndex(t);
        }
        ClearImages() {
          this.m_filesToUpload = o.sH.array();
        }
        GetFilesUploaded() {
          return this.m_filesCompleted;
        }
        GetLastErrorFile() {
          return this.m_lastError;
        }
        GetCompletedFiles() {
          return this.m_filesCompleted.length;
        }
        GetTotalFiles() {
          return this.m_filesToUpload.length;
        }
        GetFilesToUpload() {
          return this.m_filesToUpload.map((e) => e.file);
        }
        GetUploadImages() {
          return this.m_filesToUpload;
        }
        BHasError() {
          return null != this.m_lastError;
        }
        BAllDone() {
          return (
            this.m_filesCompleted.length > 0 &&
            this.m_filesCompleted.length == this.m_filesToUpload.length
          );
        }
        BIsFileCompleted(e) {
          return -1 != this.m_filesCompleted.indexOf(e);
        }
        async UploadAllImages(e, t, a, n, s) {
          const i = {};
          for (let e of this.m_filesToUpload)
            if (!this.BIsFileCompleted(e.file)) {
              const t = e.IsValidAssetType(a, n, s);
              if (t.error || t.needsCrop)
                t.error &&
                  (this.m_lastError = {
                    file: e.file,
                    message: t.error,
                    status: 401,
                  });
              else {
                e.status = "uploading";
                i[`${e.uploadTime}/${e.file.name}`] = this.UploadFile({
                  uploadFile: e.file,
                  filename: e.file.name,
                  artworkType: t.match,
                  resizeRequests: e.GetResizeDimension(),
                  primaryLocalizeImage: e.localizedImageGroupPrimaryImage,
                  lang: e.language,
                  width: e.width,
                  height: e.height,
                });
              }
            }
          const r = await (0, m.RR)(i);
          return (
            Object.keys(r).forEach((a) => {
              const n = r[a],
                s = this.m_filesToUpload.find(
                  (e) => `${e.uploadTime}/${e.file.name}` === a,
                );
              if (s)
                if (1 !== n.success)
                  (s.status = "failed"), (s.message = n.message);
                else if (((s.status = "success"), this.m_fnSetImageURL))
                  if (n.origimagehash) {
                    const a = (0, g.P)(n.language, t, e);
                    _.pU.AddLocalizeImageUploaded(n.origimagehash, a);
                  } else {
                    const a = _.pU.GetClanImageByImageHash(
                      this.m_clanSteamID,
                      n.image_hash,
                    );
                    if (a) {
                      const n = (0, g.P)(s.language, t, e);
                      this.m_fnSetImageURL(s.type, a, n);
                    }
                  }
            }),
            r
          );
        }
        CancelAllUploads() {
          for (let e of this.m_allCancelTokens)
            e.cancel((0, u.we)("#ImageUpload_CancelRequest"));
          this.m_allCancelTokens = new Array();
        }
        RetryAllFailedUploads() {
          this.CancelAllUploads(),
            this.UploadAllImages([s.TU.k_ESteamRealmGlobal], 0);
        }
        async handleUploadRefresh(e) {
          await _.pU.LoadClanImages(this.m_clanSteamID, !0, e);
        }
        async UploadFile(e) {
          const {
            uploadFile: t,
            filename: a,
            artworkType: n,
            resizeRequests: s,
            primaryLocalizeImage: i,
            lang: o,
            width: d,
            height: m,
          } = e;
          let c = null;
          const u = new FormData();
          u.append("clanimage", t, a),
            u.append("sessionid", p.TS.SESSIONID),
            n && u.append("arttype", n),
            s &&
              s.length > 0 &&
              u.append(
                "resize",
                s.map((e) => e.width + "x" + e.height).join(","),
              );
          let _ = "/uploadimage/";
          i &&
            ((_ = "/ajaxuploadlocalizedimage/"),
            u.append("origimagehash", i.image_hash),
            u.append("thumbhash", i.thumbnail_hash),
            u.append("extension", "" + i.file_type),
            u.append("language", "" + o));
          const h = a.split(".").pop().toLocaleLowerCase();
          ("webm" != h && "mp4" != h) ||
            (u.append("video_width", "" + d), u.append("video_height", "" + m));
          const g = r().CancelToken.source();
          this.m_allCancelTokens.push(g);
          let v =
              p.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              this.m_clanSteamID.ConvertTo64BitString() +
              _,
            y = {
              cancelToken: g.token,
              withCredentials: !0,
              headers: { "Content-Type": "multipart/form-data" },
            };
          try {
            (c = await r().post(v, u, y)), this.m_filesCompleted.push(t);
          } catch (e) {
            (this.m_lastError = {
              file: t,
              status: e.response ? e.response.status : 500,
              message: (0, l.H)(e).strErrorMsg,
            }),
              (c = e.response);
          }
          return i || (await this.handleUploadRefresh(g)), c.data;
        }
        static async SendResizeRequest(e, t, a, n, s) {
          let i =
              p.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              t.ConvertTo64BitString() +
              "/resizeimage/",
            o = new FormData();
          return (
            o.append("imagehash", a),
            o.append("extension", n),
            o.append(
              "resize",
              s.map((e) => e.width + "x" + e.height).join(","),
            ),
            o.append("sessionid", p.TS.SESSIONID),
            (await r().post(i, o, { cancelToken: e.token })).data.count
          );
        }
      }
      (0, n.Cg)([o.sH], v.prototype, "m_filesToUpload", void 0),
        (0, n.Cg)([o.sH], v.prototype, "m_filesCompleted", void 0),
        (0, n.Cg)([o.sH], v.prototype, "m_lastError", void 0),
        (0, n.Cg)([d.o], v.prototype, "AddImage", null),
        (0, n.Cg)([d.o], v.prototype, "AddExistingClanImage", null),
        (0, n.Cg)([d.o], v.prototype, "DeleteUploadImageByIndex", null),
        (0, n.Cg)([d.o], v.prototype, "DeleteUploadImage", null),
        (0, n.Cg)([d.o], v.prototype, "ClearImages", null);
    },
    64953: (e, t, a) => {
      "use strict";
      a.d(t, { DA: () => c, _u: () => m, i9: () => p });
      var n = a(34629),
        s = a(14947),
        i = a(73744),
        r = a(56011),
        o = a(61859),
        l = a(86355);
      class d {
        dataUrl = void 0;
        width = void 0;
        height = void 0;
        type = void 0;
        status = void 0;
        message = void 0;
        language;
        file;
        uploadTime;
        fileType = 0;
        constructor(e, t, a, n, r, o) {
          if (
            ((0, s.Gn)(this),
            (this.file = e),
            (this.fileType = l.i6.GetExtensionTypeFromURL(e.name)),
            (this.language = t),
            (this.uploadTime = Date.now()),
            (this.status = "pending"),
            a)
          ) {
            const e = (0, i.vz)(this.fileType, a);
            let t = (0, l.AS)(r, o, e, !1);
            void 0 === t && (t = (0, l.AS)(r, o, e, !0)),
              (this.type = t || a[0]);
          }
          (this.height = o), (this.width = r), (this.dataUrl = n);
        }
        IsValidAssetType(e, t, a) {
          let n = 0,
            s = 0,
            r = !1,
            d = !e || 0 === e.length || e.includes(this.type);
          if (t) (n = t.width), (s = t.height), (r = !0);
          else if (this.type) {
            const e = i.Fj[this.type];
            e &&
              ((n = e.width),
              (s = e.height),
              (r = !e.bDisableEnforceDimensions));
          }
          const m = this.width >= n && this.height >= s,
            c = r ? this.width === n && this.height === s : m,
            u = a && a != this.fileType,
            p =
              !!(e && e.length > 0) &&
              0 == (0, i.vz)(this.fileType, e || []).length,
            h = Boolean(_(this.fileType));
          let g = "",
            v = !1;
          return (
            d
              ? p
                ? (g = (0, o.we)("#ImageUpload_InvalidFileType"))
                : u
                  ? (g = (0, o.we)(
                      "#ImageUpload_InvalidFormat",
                      l.i6.GetExtensionStringForFileType(a),
                    ))
                  : c || h
                    ? m
                      ? !c &&
                        h &&
                        ((g = (0, o.we)(
                          "#ImageUpload_InvalidDimensions",
                          n,
                          s,
                        )),
                        (v = !0))
                      : (g = (0, o.we)("#ImageUpload_TooSmall", n, s))
                    : (g = (0, o.we)("#ImageUpload_InvalidResolution", n, s))
              : (g = (0, o.we)("#ImageUpload_InvalidFormatSelected")),
            { error: g, needsCrop: v, match: this.type }
          );
        }
      }
      (0, n.Cg)([s.sH], d.prototype, "dataUrl", void 0),
        (0, n.Cg)([s.sH], d.prototype, "width", void 0),
        (0, n.Cg)([s.sH], d.prototype, "height", void 0),
        (0, n.Cg)([s.sH], d.prototype, "type", void 0),
        (0, n.Cg)([s.sH], d.prototype, "status", void 0),
        (0, n.Cg)([s.sH], d.prototype, "message", void 0);
      class m extends d {
        video;
        constructor(e, t, a, n) {
          super(e, t, n, a.src, a.videoWidth, a.videoHeight), (this.video = a);
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, i.s4)(this.video.videoWidth, this.video.videoHeight, e);
        }
        GetResizeDimension() {}
      }
      class c extends d {
        constructor(e, t, a) {
          super(e, t, a, URL.createObjectURL(e), 0, 0);
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, i.XY)(e);
        }
        GetResizeDimension() {}
      }
      function u(e) {
        const t = e.split(".").pop().toLocaleLowerCase();
        return "webm" == t || "mp4" == t;
      }
      class p extends d {
        bCropped = !1;
        localizedImageGroupPrimaryImage;
        media;
        constructor(e, t, a, n, i) {
          super(
            e,
            t,
            n,
            a.src,
            u(e.name) ? a.videoWidth : a.width,
            u(e.name) ? a.videoHeight : a.height,
          ),
            (0, s.Gn)(this),
            (this.media = a),
            (this.localizedImageGroupPrimaryImage = i);
        }
        ResetImage() {
          (this.height = this.media.height),
            (this.width = this.media.width),
            (this.dataUrl = this.media.src);
        }
        async CropImage(e, t, a, n, s, i, o) {
          return new Promise((l, d) => {
            const m = _(o);
            if (!m) return void d("Invalid format provided");
            const c = document.createElement("canvas");
            (c.width = s), (c.height = i);
            c.getContext("2d").drawImage(this.media, e, t, a, n, 0, 0, s, i),
              c.toBlob((e) => {
                const t = c.toDataURL(m);
                3 !== o && t.startsWith("data:image/png")
                  ? d("Unable to encode into the requested file format")
                  : ((this.file = (0, r.pE)(e, this.file.name)),
                    (this.width = s),
                    (this.height = i),
                    (this.dataUrl = t),
                    (this.uploadTime = Date.now()),
                    (this.bCropped = !0),
                    l());
              });
          });
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, i.s4)(this.media.width, this.media.height, e);
        }
        GetResizeDimension() {
          return (function (e) {
            if ("background" === e)
              return [
                { width: 960, height: 311 },
                { width: 480, height: 156 },
              ];
            if ("capsule" === e)
              return [{ width: i.Fj[e].width / 2, height: i.Fj[e].height / 2 }];
            if ("spotlight" === e)
              return [{ width: i.Fj[e].width / 2, height: i.Fj[e].height / 2 }];
            return;
          })(this.type);
        }
      }
      function _(e) {
        switch (e) {
          case 3:
            return "image/png";
          case 1:
            return "image/jpeg";
        }
      }
      (0, n.Cg)([s.sH], p.prototype, "bCropped", void 0);
    },
    69343: (e, t, a) => {
      "use strict";
      a.d(t, { P: () => r, j: () => o });
      var n = a(22837),
        s = a(2160),
        i = a(61859);
      function r(e, t, a) {
        if (((null != e && null != e) || (e = t), !a || 0 === a.length))
          return e;
        for (const t of a) if (i.A0.IsELanguageValidInRealm(e, t)) return e;
        for (const e of a) if (i.A0.IsELanguageValidInRealm(t, e)) return t;
        return a.includes(s.TU.k_ESteamRealmGlobal) ? 0 : 29;
      }
      function o(e, t = 0) {
        let a = e.lastIndexOf(".");
        -1 != a && (e = e.slice(0, a).toLowerCase());
        let s = null,
          i = 0;
        e.endsWith("korean") && ((s = 4), (i = 6));
        for (let t = 0; t < 31; ++t) {
          const a = (0, n.Lg)(t);
          a.length <= i || (e.endsWith(a) && ((s = t), (i = a.length)));
        }
        return s || t;
      }
    },
    86355: (e, t, a) => {
      "use strict";
      a.d(t, {
        AS: () => S,
        i6: () => C,
        mr: () => T,
        pU: () => A,
        pb: () => E,
        wI: () => w,
      });
      var n = a(34629),
        s = a(22837),
        i = a(41735),
        r = a.n(i),
        o = a(14947),
        l = a(90626),
        d = a(73744),
        m = a(17720),
        c = a(28954),
        u = a(4434),
        p = a(62490),
        _ = a(44332),
        h = a(68797),
        g = a(6144),
        v = (a(375), a(14771)),
        y = a(78327),
        f = a(27666),
        I = a(82705),
        b = a(56004);
      var w;
      function S(e, t, a, n = !1) {
        if (a)
          for (let s of a) {
            if (n ? (0, d.s4)(e, t, s) : (0, d.yu)(e, t, s)) return s;
          }
      }
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(w || (w = {}));
      const E = [
        "localized_image_group",
        "link_capsule",
        "product_mobile_banner_override",
        "product_banner_override",
        "sale_section_title",
        "schedule_track_art",
        "localized_background_art",
      ];
      class C {
        constructor() {
          (0, o.Gn)(this);
        }
        m_mapClanToImages = new Map();
        m_mapClanImageLoadPromises = new Map();
        m_imageListChangeCallback = new Map();
        m_mapClanImageLoadState = new Map();
        m_mapImageIDToResolution = new Map();
        m_curLocImageGroup = null;
        m_curLocImageGroupType = null;
        BHasImageResolution(e) {
          return this.m_mapImageIDToResolution.has(e.imageid);
        }
        GetImageResolution(e) {
          return this.m_mapImageIDToResolution.get(e.imageid);
        }
        SetImageResolution(e, t) {
          this.m_mapImageIDToResolution.set(e.imageid, t);
        }
        GetImageListCallbackForClanAccountID(e) {
          return (
            this.m_imageListChangeCallback.has(e) ||
              this.m_imageListChangeCallback.set(e, new g.lu()),
            this.m_imageListChangeCallback.get(e)
          );
        }
        static GetExtensionStringForFileType(e) {
          switch (e) {
            case 1:
              return ".jpg";
            case 2:
              return ".gif";
            case 3:
              return ".png";
            case 5:
              return ".webm";
            case 4:
              return ".mp4";
            case 7:
              return ".srt";
            case 6:
              return ".vtt";
            case 10:
              return ".webp";
          }
        }
        static GetExtensionString(e) {
          return C.GetExtensionStringForFileType(e.file_type) || ".jpg";
        }
        static GetExtensionTypeFromURL(e) {
          return (0, I.yh)(e);
        }
        static GetHashAndExt(e) {
          return e ? e.image_hash + C.GetExtensionString(e) : null;
        }
        static GetThumbHashAndExt(e) {
          return e ? e.thumbnail_hash + C.GetExtensionString(e) : null;
        }
        m_vecClanImageDragListener = new Array();
        AddClanImageDragListener(e) {
          -1 == this.m_vecClanImageDragListener.indexOf(e) &&
            this.m_vecClanImageDragListener.push(e);
        }
        RemoveClanImageDragListener(e) {
          let t = this.m_vecClanImageDragListener.indexOf(e);
          -1 != t && this.m_vecClanImageDragListener.splice(t, 1);
        }
        GetClanImageDragListener() {
          return this.m_vecClanImageDragListener;
        }
        BHasLoadedClanImages(e) {
          return this.m_mapClanToImages.has(e.GetAccountID());
        }
        async LoadClanImages(e, t, a) {
          const n = e.GetAccountID();
          return (
            (!t && this.m_mapClanImageLoadPromises.has(n)) ||
              this.m_mapClanImageLoadPromises.set(
                n,
                this.InternalLoadClanImages(e, t, a),
              ),
            this.m_mapClanImageLoadPromises.get(n)
          );
        }
        async InternalLoadClanImages(e, t, a) {
          let n = e.GetAccountID();
          if (
            ((0, _.w)(e && 0 != n, "ClanSteamID missing:" + e),
            e && (!this.m_mapClanToImages.has(n) || t))
          ) {
            let t = {},
              s = null;
            const i =
              y.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/getimages/";
            s = await r().get(i, {
              params: t,
              withCredentials: !0,
              cancelToken: a ? a.token : null,
            });
            for (let e of s.data.images) e.clanAccountID = n;
            (0, o.h5)(() => {
              this.m_mapClanImageLoadState.set(n, { loaded: !0 }),
                this.m_mapClanToImages.set(n, s.data.images),
                this.GetImageListCallbackForClanAccountID(n).Dispatch(
                  s.data.images,
                );
            });
          }
          return this.m_mapClanToImages.get(n);
        }
        GetLoadState(e) {
          return this.m_mapClanImageLoadState.get(e.GetAccountID());
        }
        GetClanImages(e) {
          return this.GetClanImagesByAccount(e.GetAccountID());
        }
        GetClanImagesByAccount(e) {
          let t = this.m_mapClanToImages.get(e);
          return t || new Array();
        }
        GetFilteredClanImages(e, t) {
          let a = A.GetClanImages(e);
          return this.GetFilteredClanImagesList(a, t);
        }
        GetFilteredClanImagesList(e, t) {
          if (t && t.trim().length > 0) {
            t = t.trim().toLowerCase();
            let a = new Array();
            for (let n of e)
              n.file_name &&
                n.file_name.toLowerCase().indexOf(t) >= 0 &&
                a.push(n);
            return a;
          }
          return e;
        }
        GetClanImageByID(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.imageid == t) : null;
        }
        GetClanImageByURL(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.thumb_url == t || e.url == t) : null;
        }
        GetClanImageByFile(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.file_name == t.name) : null;
        }
        GetClanImageByImageHash(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.image_hash == t) : null;
        }
        async DeleteClanImageByID(e, t) {
          let a = { sessionid: y.TS.SESSIONID, imageid: t },
            n = e.GetAccountID(),
            s = await r().get(
              y.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                e.ConvertTo64BitString() +
                "/deleteimage/",
              { params: a },
            );
          if (!s || 200 != s.status || 1 != s.data.success) return s.data;
          let i = this.m_mapClanToImages.get(n),
            o = i.findIndex((e, a, n) => e.imageid == t);
          return (
            o >= 0 &&
              (i.splice(o, 1),
              this.GetImageListCallbackForClanAccountID(n).Dispatch([...i])),
            s.data
          );
        }
        async DeleteClanImage(e, t) {
          return this.DeleteClanImageByID(e, t.imageid);
        }
        static GetHashFromHashAndExt(e) {
          let t = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - t.length);
        }
        static GetExtensionStringFromHashAndExt(e) {
          return e.substring(e.lastIndexOf("."));
        }
        static GenerateArtworkURLFromHashAndExtensions(e, t, a = w.full, n, i) {
          if (a != w.full || n) {
            let r = t.substring(t.lastIndexOf(".")),
              o = t.substring(0, t.length - r.length);
            return n && "localized_image_group" == i
              ? (0, f.mJ)() +
                  e.GetAccountID() +
                  "/" +
                  o +
                  "/" +
                  (0, s.x6)((0, s.Lg)(n)) +
                  r
              : (0, f.mJ)() + e.GetAccountID() + "/" + o + a + r;
          }
          return (0, f.mJ)() + e.GetAccountID() + "/" + t;
        }
        static GenerateEditableArtworkURLFromHashAndExtension(e, t, a) {
          let n =
            y.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            t;
          return a && (n += "&lang=" + a), n;
        }
        static GetMimeType(e) {
          return (0, b.ab)(e);
        }
        async AsyncGetImageResolution(e, t, a, n, s) {
          const i = t + C.GetExtensionString({ file_type: a }),
            r = C.GenerateEditableArtworkURLFromHashAndExtension(e, i);
          return await this.AsyncGetImageResolutionInternal(r, n, s);
        }
        async AsyncGetImageResolutionInternal(e, t, a) {
          let n = { success: void 0 },
            s = new Image();
          (s.crossOrigin = "anonymous"),
            (s.onerror = (t) => {
              a ||
                ((n.err_msg =
                  "Load fail on url " +
                  e +
                  " with error: " +
                  (0, h.H)(t).strErrorMsg),
                console.error(n.err_msg)),
                (n.success = 2);
            }),
            (s.onload = () => {
              (n.width = s.width),
                (n.height = s.height),
                (0, _.w)(
                  n.width > 0 && n.height > 0,
                  "unexpected image resolution discovered for strURL: " + e,
                ),
                (n.success = 1);
            }),
            (s.src = e),
            t.token.promise.catch((e) => {
              (s.onload = () => {}), (n.success = 52);
            });
          let i = 0;
          for (; void 0 === n.success && i < 100; )
            await (0, v.IP)(100), (i += 1);
          return (
            i >= 100 &&
              ((n.success = 16),
              (n.err_msg = "We timed out processing images")),
            n
          );
        }
        async AsyncOverlay(e, t, a, n, s, i) {
          let r,
            o,
            l = new Image();
          (l.crossOrigin = "anonymous"),
            (l.onerror = (e) => {
              (r =
                "Load fail on url " +
                a +
                " with error: " +
                (0, h.H)(e).strErrorMsg),
                console.error(r);
            }),
            (l.onload = () => {
              let e = new Image();
              (e.crossOrigin = "anonymous"),
                (e.onerror = (e) => {
                  (r =
                    "Load fail on url " +
                    t +
                    " with error: " +
                    (0, h.H)(e).strErrorMsg),
                    console.error(r);
                }),
                (e.onload = () => {
                  try {
                    let t = document.createElement("canvas"),
                      a = t.getContext("2d");
                    (t.width = s), (t.height = i), a.drawImage(e, 0, 0, s, i);
                    let n = (s - l.width) / 2,
                      r = (i - l.height) / 2;
                    a.drawImage(l, n, r),
                      t.toBlob((e) => (o = e), "image/jpeg");
                  } catch (e) {
                    r =
                      "Failed during image processing for " + n + " with " + e;
                  }
                }),
                (e.src = t);
            }),
            (l.src = a);
          let d = 0;
          for (; void 0 === o && d < 100; ) await (0, v.IP)(100), (d += 1);
          if (
            (d >= 100 &&
              void 0 === o &&
              (r = "AsyncOverlay - We timed out processing images"),
            r)
          )
            throw (console.log(r), { success: 2, err_msg: r });
          let m = new c.V(e),
            u = await m.UploadFile({
              uploadFile: o,
              filename: n,
              width: i,
              height: i,
            });
          return u.image_hash + C.GetExtensionString(u);
        }
        async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, a, n) {
          let s =
              y.TS.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/hasclanimagefile",
            i = { image_hash_and_ext: a, lang: "" + n };
          return (
            1 ==
            (await r().get(s, { params: i, cancelToken: e && e.token })).data
              .success
          );
        }
        SetPrimaryImageForImageGroup(e, t) {
          (this.m_curLocImageGroup &&
            this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
            t == this.m_curLocImageGroupType) ||
            ((this.m_curLocImageGroup = {
              primaryImage: e,
              localized_images: [],
            }),
            (this.m_curLocImageGroupType = t),
            (this.m_curLocImageGroup.localized_images = (0, p.$Y)(
              this.m_curLocImageGroup.localized_images,
              31,
              null,
            )));
        }
        GetPrimaryImageForImageGroup() {
          return this.m_curLocImageGroup?.primaryImage;
        }
        ClearImageGroup() {
          (this.m_curLocImageGroup = null),
            (this.m_curLocImageGroupType = null);
        }
        GetLocalizedImageGroupForEdit() {
          return this.m_curLocImageGroup;
        }
        GetLocalizedImageGroupForEditAsURL(e, t) {
          if (this.m_curLocImageGroup) {
            let a = this.m_curLocImageGroup.primaryImage;
            return this.m_curLocImageGroup.localized_images[t]
              ? this.m_curLocImageGroup.localized_images[t]
              : C.GenerateArtworkURLFromHashAndExtensions(
                  e,
                  C.GetHashAndExt(a),
                );
          }
          return null;
        }
        GetLocalizedImageGroupForEditAsImgArray(e) {
          return this.GetAllLocalizedGroupImages();
        }
        async DetermineAvailableLocalizationForGroup(e) {
          let t = this.m_curLocImageGroup.primaryImage,
            a = m.b.InitFromClanID(t.clanAccountID),
            n = C.GetHashAndExt(t),
            s = [];
          for (let t = 0; t < 31; ++t)
            s.push(this.BDoesClanImageFileExistsOnCDNOrOrigin(e, a, n, t));
          let i = await Promise.all(s);
          (0, o.h5)(() => {
            for (let e = 0; e < 31; ++e)
              i[e] &&
                (this.m_curLocImageGroup.localized_images[e] =
                  C.GenerateArtworkURLFromHashAndExtensions(
                    a,
                    n,
                    w.full,
                    e,
                    this.m_curLocImageGroupType,
                  ));
          });
        }
        SetLocalizedImageGroupAtLang(e, t, a) {
          this.m_curLocImageGroup &&
            (this.m_curLocImageGroup.localized_images[e] = a
              ? C.GenerateArtworkURLFromHashAndExtensions(
                  t,
                  a,
                  w.full,
                  e,
                  this.m_curLocImageGroupType,
                )
              : null);
        }
        AddLocalizeImageUploaded(e, t) {
          let a = this.m_curLocImageGroup.primaryImage;
          if (a.image_hash == e) {
            let e = m.b.InitFromClanID(a.clanAccountID),
              n = C.GetHashAndExt(a);
            this.m_curLocImageGroup.localized_images[t] =
              C.GenerateArtworkURLFromHashAndExtensions(
                e,
                n,
                w.full,
                t,
                this.m_curLocImageGroupType,
              );
          }
        }
        GetAllLocalizedGroupImages() {
          return (
            (this.m_curLocImageGroup &&
              this.m_curLocImageGroup.localized_images) ||
            []
          );
        }
      }
      (0, n.Cg)([o.sH], C.prototype, "m_mapClanToImages", void 0),
        (0, n.Cg)([o.sH], C.prototype, "m_mapClanImageLoadState", void 0),
        (0, n.Cg)([o.sH], C.prototype, "m_curLocImageGroup", void 0);
      const A = new C();
      function T(e) {
        const t = m.b.InitFromClanID(e),
          a = (0, u.m)("useLoadClanImages"),
          [n, s] = (0, l.useState)(() => A.BHasLoadedClanImages(t));
        return (
          (0, l.useEffect)(() => {
            const t = m.b.InitFromClanID(e);
            A.BHasLoadedClanImages(t) ||
              A.LoadClanImages(t, !1, a).then(() => s(!0));
          }, [e, a]),
          n
        );
      }
    },
    4796: (e, t, a) => {
      "use strict";
      a.d(t, { TB: () => _, ac: () => p, vF: () => h });
      var n = a(34629),
        s = a(41735),
        i = a.n(s),
        r = a(14947),
        o = a(90626),
        l = a(17720),
        d = a(44332),
        m = a(78327),
        c = a(67165);
      class u {
        constructor() {
          (0, r.Gn)(this);
        }
        m_mapAppIDToClanInfo = new Map();
        m_mapVanityToClanInfo = new Map();
        m_mapClanAccountIDToClanInfo = new Map();
        m_mapPromisesLoading = new Map();
        m_rgQueuedEventsClanIDs = new Array();
        m_bLoadedFromConfig = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, r.h5)(() => {
              let e = (0, m.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, r.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, d.w)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, d.w)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new l.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : 0,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, d.w)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(e))
            return this.m_mapAppIDToClanInfo.get(e);
          let t = "appid_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const t =
            m.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let a = await i().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data), this.m_mapAppIDToClanInfo.get(e)
          );
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
          let t = "storevanity_" + e?.toLocaleLowerCase();
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const t =
            m.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let a = await i().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  e?.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            m.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let a = await i().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let a = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(a) ||
              this.m_mapPromisesLoading.set(
                a,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(a)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = l.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const a =
            m.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let n = await i().get(a, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(n.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return l.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, d.w)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = c.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let a = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            m.TS.COMMUNITY_BASE_URL +
            (a.vanity_url
              ? "groups/" + a.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, n.Cg)([r.sH], u.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.Cg)([r.sH], u.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.Cg)([r.sH], u.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.Cg)([r.XI], u.prototype, "RegisterClanData", null),
        (0, n.Cg)([r.XI], u.prototype, "InternalSetupValue", null);
      const p = new u();
      function _(e) {
        const [t, a] = (0, o.useState)(
            e ? p.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [n, s] = (0, o.useState)(!!e && !p.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, o.useEffect)(() => {
            if (e)
              if (p.BHasClanInfoLoadedByAccountID(e))
                a(p.GetClanInfoByClanAccountID(e)), s(!1);
              else {
                s(!0);
                const t = l.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                p.LoadClanInfoForClanSteamID(t).then((e) => {
                  a(e), s(!1);
                });
              }
            else a(void 0), s(!1);
          }, [e]),
          [n, t]
        );
      }
      function h(e) {
        const [t, a] = (0, o.useState)(() => !p.GetOGGClanInfo(e)),
          [n, s] = (0, o.useState)(() => p.GetOGGClanInfo(e));
        return (
          (0, o.useEffect)(() => {
            !e ||
              (n && n.appid == e) ||
              (a(!0),
              p
                .LoadOGGClanInfoForAppID(e)
                .then(s)
                .finally(() => a(!1)));
          }, [n, e]),
          { bLoadingClanInfo: t, clanInfo: n }
        );
      }
      window.g_ClanStore = p;
    },
    56004: (e, t, a) => {
      "use strict";
      a.d(t, { IK: () => p, ab: () => _, qR: () => h });
      var n = a(34629),
        s = a(41735),
        i = a.n(s),
        r = a(14947),
        o = a(68797),
        l = a(6419),
        d = a(6144),
        m = a(30470),
        c = a(64953),
        u = a(69343);
      class p {
        m_filesToUpload = r.sH.array();
        m_strUploadPath = null;
        m_fnUploadSuccessCallback = null;
        constructor(e, t) {
          (0, r.Gn)(this),
            (this.m_strUploadPath = e),
            (this.m_fnUploadSuccessCallback = t);
        }
        GetFnOnUploadSuccess() {
          return this.m_fnUploadSuccessCallback;
        }
        SetFnOnUploadSuccess(e) {
          this.m_fnUploadSuccessCallback = e;
        }
        GetUploadPath() {
          return this.m_strUploadPath;
        }
        SetUploadPath(e) {
          this.m_strUploadPath = e;
        }
        GetUploadImages() {
          return this.m_filesToUpload;
        }
        ClearImages() {
          this.m_filesToUpload = r.sH.array();
        }
        DeleteUploadImage(e) {
          const t = this.m_filesToUpload.findIndex(
            (t) => e.file == t.file && e.uploadTime == t.uploadTime,
          );
          t >= 0 &&
            (this.m_filesToUpload.splice(t, 1),
            (this.m_filesToUpload = [...this.m_filesToUpload]));
        }
        isImageFile(e) {
          return e.type.startsWith("image/");
        }
        isVideoFile(e) {
          return e.type.startsWith("video/");
        }
        isSubtitleTextFile(e) {
          return (
            e.type.startsWith("text/") ||
            ("" == e.type && e.name.split("?")[0].endsWith(".vtt")) ||
            ("" == e.type && e.name.split("?")[0].endsWith(".srt"))
          );
        }
        async AddImageForLanguage(e, t, a, n) {
          let s = !1;
          return (
            await new Promise((i) => {
              if (this.isImageFile(e)) {
                const r = new FileReader();
                (r.onload = () => {
                  const o = new Image();
                  (o.onload = () => {
                    const r = new c.i9(e, t, o, a, n);
                    (this.m_filesToUpload = [...this.m_filesToUpload, r]),
                      (s = !0),
                      i();
                  }),
                    (o.onerror = (e) => {
                      console.error(
                        "CCloudImageUploader failed to load the image, details",
                        e,
                      ),
                        (s = !1),
                        i();
                    }),
                    (o.src = r.result.toString());
                }),
                  r.readAsDataURL(e);
              } else if (this.isVideoFile(e)) {
                const n = document.createElement("video");
                (n.preload = "metadata"),
                  n.addEventListener("loadedmetadata", () => {
                    const r = new c._u(e, t, n, a);
                    (this.m_filesToUpload = [...this.m_filesToUpload, r]),
                      (s = !0),
                      i();
                  }),
                  (n.onerror = (e) => {
                    console.error(
                      "CCloudImageUploader failed to load the video, details",
                      e,
                    ),
                      (s = !1),
                      i();
                  }),
                  (n.src = URL.createObjectURL(e));
              } else
                this.isSubtitleTextFile(e)
                  ? ((this.m_filesToUpload = [
                      ...this.m_filesToUpload,
                      new c.DA(e, t, a),
                    ]),
                    (s = !0),
                    i())
                  : (console.error(
                      "CCloudImageUploader failed to determine file type, not image, video or subtitle",
                      e,
                      e.type,
                    ),
                    (s = !1));
            }),
            s
          );
        }
        async UploadAllImages(e, t, a, n, s) {
          const i = {};
          for (const e of this.m_filesToUpload)
            if ("pending" === e.status) {
              const t = e.IsValidAssetType(a, n, s);
              if (!t.error && !t.needsCrop) {
                e.status = "uploading";
                i[`${e.uploadTime}/${e.file.name}`] = this.UploadFile(
                  e.file,
                  e.file.name,
                  e.language,
                  t.match,
                );
              }
            }
          const r = await (0, d.RR)(i);
          return (
            Object.keys(r).forEach((a) => {
              const n = r[a],
                s = this.m_filesToUpload.find(
                  (e) => `${e.uploadTime}/${e.file.name}` === a,
                );
              if (s)
                if (n && 1 === n.success) {
                  s.status = "success";
                  const a = (0, u.P)(n.language, t, e);
                  this.m_fnUploadSuccessCallback(
                    n.image_hash,
                    n.file_name,
                    a,
                    (function (e) {
                      switch (e) {
                        case 2:
                          return "image/gif";
                        case 1:
                          return "image/jpeg";
                        case 3:
                          return "image/png";
                        case 4:
                          return "video/mp4";
                        case 5:
                          return "video/webm";
                        case 6:
                          return "text/vtt";
                        case 7:
                          return "text/srt";
                        case 10:
                          return "image/webp";
                      }
                      return null;
                    })(n.file_type),
                    s.type,
                    s.width,
                    s.height,
                  );
                } else (s.status = "failed"), (s.message = n.message);
            }),
            r
          );
        }
        async UploadFile(e, t, a, n, s, r) {
          let l = null;
          const d = new FormData();
          d.append("assetfile", e, t),
            d.append("sessionid", m.TS.SESSIONID),
            d.append("elangauge", "" + a),
            d.append("originalname", t),
            s?.length > 0 &&
              d.append(
                "resize",
                s.map((e) => e.width + "x" + e.height).join(","),
              ),
            n && d.append("arttype", n);
          const c = _(t);
          if (!c)
            return {
              success: 8,
              message: "Invalid file extension, cannot determine mimetype",
            };
          d.append("mimetype", c);
          try {
            l = await i().post(this.m_strUploadPath, d, {
              withCredentials: !0,
              headers: { "Content-Type": "multipart/form-data" },
            });
          } catch (e) {
            const t = (0, o.H)(e);
            console.log("CCloudImageUploader.UploadFile failed ", t, e),
              (l = e.response);
          }
          return l?.data;
        }
      }
      function _(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : null;
      }
      function h(e) {
        switch (e) {
          case "image/jpeg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "video/mp4":
            return ".mp4";
          case "video/webm":
            return ".webm";
          case "text/vtt":
            return ".vtt";
          case "text/srt":
            return ".srt";
          case "image/webp":
            return ".webp";
        }
        return (
          console.error("ConvertMimeTypeToExtension:Unexepected mime type ", e),
          ".jpg"
        );
      }
      (0, n.Cg)([r.sH], p.prototype, "m_filesToUpload", void 0),
        (0, n.Cg)([l.o], p.prototype, "GetUploadImages", null),
        (0, n.Cg)([l.o], p.prototype, "ClearImages", null),
        (0, n.Cg)([l.o], p.prototype, "DeleteUploadImage", null),
        (0, n.Cg)([l.o], p.prototype, "AddImageForLanguage", null),
        (0, n.Cg)([l.o], p.prototype, "UploadAllImages", null);
    },
    82705: (e, t, a) => {
      "use strict";
      a.d(t, { yh: () => n });
      a(90626);
      function n(e) {
        return (
          e.indexOf("?") > 0 && (e = e.split("?")[0]),
          e.endsWith(".jpg")
            ? 1
            : e.endsWith(".png")
              ? 3
              : e.endsWith(".gif")
                ? 2
                : e.endsWith(".mp4")
                  ? 4
                  : e.endsWith(".webm")
                    ? 5
                    : e.endsWith(".vtt")
                      ? 6
                      : e.endsWith(".srt")
                        ? 7
                        : e.endsWith(".webp")
                          ? 10
                          : void 0
        );
      }
    },
    67165: (e, t, a) => {
      "use strict";
      a.d(t, { pF: () => S, id: () => C, FV: () => E });
      var n = a(34629),
        s = a(4434),
        i = a(41735),
        r = a.n(i),
        o = a(14947),
        l = a(90626),
        d = a(78327);
      class m {
        m_clanSteamID;
        m_appidList = new Array();
        m_strName = "";
        m_strAvatarURLFullSize = "";
        m_strTagLineLoc = "";
        m_nFollowers = 0;
        m_strVanity = "";
        m_webLink = void 0;
        m_promise;
        m_bIsLoaded = !1;
        m_bIsHidden = !1;
        m_clanAccountFlags = 0;
        constructor(e) {
          (0, o.Gn)(this), (this.m_clanSteamID = e);
        }
        Initialize(e) {
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(8 & this.m_clanAccountFlags);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  d.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  d.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return d.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            d.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let a = d.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            n = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (n |= e) : (n &= ~e);
            }),
            n == this.m_clanAccountFlags)
          )
            return;
          let s = new Array();
          1 & n && s.push(1),
            8 & n && s.push(8),
            2 & n && s.push(2),
            4 & n && s.push(4),
            16 & n && s.push(16),
            32 & n && s.push(32),
            64 & n && s.push(64);
          let i = new FormData();
          i.append("sessionid", d.TS.SESSIONID),
            i.append("clan_account_id", this.GetClanAccountID().toString()),
            i.append("accountflags", JSON.stringify(s));
          let o = await r().post(a, i);
          o &&
            200 == o.status &&
            1 == o.data.success &&
            (this.m_clanAccountFlags = n);
        }
      }
      (0, n.Cg)([o.sH], m.prototype, "m_appidList", void 0),
        (0, n.Cg)([o.sH], m.prototype, "m_nFollowers", void 0),
        (0, n.Cg)([o.sH], m.prototype, "m_clanAccountFlags", void 0);
      var c = a(17720),
        u = a(20194),
        p = a(56545),
        _ = a(80613),
        h = a(89068);
      const g = _.Message;
      class v extends g {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.clan_account_id || h.Sg(v.M()),
            g.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = h.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            a = new v();
          return v.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      const y = _.Message;
      class f extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.clan_account_ids || h.Sg(f.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: h.qM.readBool, bw: h.gp.writeBool },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = h.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            a = new f();
          return f.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class I extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.results || h.Sg(I.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { results: { n: 1, c: v, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = h.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            a = new I();
          return I.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      var b;
      !(function (e) {
        e.GetDevPageAllAppsLinked = function (e, t) {
          return e.SendMsg(
            "StoreCatalog.GetDevPageAllAppsLinked#1",
            (0, p.I8)(f, t),
            I,
            { ePrivilege: 1 },
          );
        };
      })(b || (b = {}));
      class w {
        constructor() {
          (0, o.Gn)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, d.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                let t = Number(e.creator_clan_id),
                  a = c.b.InitFromClanID(t),
                  n = new m(a);
                n.Initialize(e),
                  (n.m_promise = w.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(t, n);
              });
            let t = (0, d.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static async GetAsPromise(e) {
          return e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
              t[0].clan_account_id > 0 &&
              "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, t) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let a = new m(e);
            (a.m_promise = this.InternalCreatorHome(a, t)),
              await a.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), a);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let a = { get_appids: !0, l: d.TS.LANGUAGE, origin: self.origin },
            n =
              d.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            s = await r().get(n, { params: a, cancelToken: t && t.token });
          return e.Initialize(s.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let a = { appid: e },
              n = d.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              s = await r().get(n, {
                params: a,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, s.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, a) {
          let n = `${d.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            s = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: d.TS.COUNTRY,
              l: d.TS.LANGUAGE,
              origin: self.origin,
            },
            i = new Array();
          const l = await r().get(n, { params: s, cancelToken: a.token });
          return (
            l.data.curators &&
              (0, o.h5)(() => {
                l.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = c.b.InitFromClanID(e.creator_clan_id),
                      a = new m(t);
                    a.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, a);
                  }
                  i.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            i
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, n.Cg)([o.sH], w.prototype, "m_mapClanToCreatorHome", void 0),
        (0, n.Cg)([o.sH], w.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, n.Cg)([o.XI], w.prototype, "LazyInit", null);
      const S = new w();
      function E(e) {
        const t = c.b.InitFromClanID(e),
          [a, n] = l.useState(S.GetCreatorHome(t)),
          i = (0, s.m)("useCreatorHome");
        return (
          l.useEffect(() => {
            const t = c.b.InitFromClanID(e);
            S.BHasCreatorHomeLoaded(t)
              ? a
                ? a.GetClanAccountID() != e && n(S.GetCreatorHome(t))
                : n(S.GetCreatorHome(t))
              : S.LoadCreatorHome(t).then(() => {
                  i?.token?.reason || n(S.GetCreatorHome(t));
                });
          }, [i?.token?.reason, e, a]),
          a
        );
      }
      function C(e, t, a) {
        const n = (0, u.I)({
          queryKey: ["useCreateHomeLinkedApps", t, a],
          queryFn: async () => {
            const n = p.w.Init(f);
            n.Body().add_clan_account_ids(t), a && n.Body().set_ignore_dlc(!0);
            const s = await b.GetDevPageAllAppsLinked(e, n);
            if (1 != s.GetEResult())
              throw new Error(
                `Error from useCreateHomeLinkedApps: ${s.GetEResult()}`,
              );
            return 0 == s.Body().results().length
              ? []
              : s.Body().results()[0].appid_list();
          },
          enabled: Boolean(t > 0 && e),
        });
        return n?.isLoading ? null : n.data;
      }
      window.g_CreatorHomeStore = S;
    },
    81477: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => n, V: () => d });
      var n,
        s = a(41735),
        i = a.n(s),
        r = a(78327),
        o = a(6144),
        l = a(46910);
      !(function (e) {
        (e[(e.k_eDiscussions = 0)] = "k_eDiscussions"),
          (e[(e.k_eThumbsUp = 1)] = "k_eThumbsUp"),
          (e[(e.k_eClickThrough = 2)] = "k_eClickThrough"),
          (e[(e.k_eMuted = 3)] = "k_eMuted"),
          (e[(e.k_ePlayedVideo = 4)] = "k_ePlayedVideo"),
          (e[(e.k_eReminder_Opened = 5)] = "k_eReminder_Opened"),
          (e[(e.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush"),
          (e[(e.k_eReminder_Email = 7)] = "k_eReminder_Email"),
          (e[(e.k_eReminder_CalendarApple = 8)] = "k_eReminder_CalendarApple"),
          (e[(e.k_eReminder_CalendarGoogle = 9)] =
            "k_eReminder_CalendarGoogle"),
          (e[(e.k_eReminder_CalendarOutlook = 10)] =
            "k_eReminder_CalendarOutlook"),
          (e[(e.k_eReminder_EmailUnverified = 11)] =
            "k_eReminder_EmailUnverified"),
          (e[(e.k_eReminder_MobilePushMissing = 12)] =
            "k_eReminder_MobilePushMissing");
      })(n || (n = {}));
      const d = new (class {
        m_nPastViewedIndex = 0;
        m_nPastViewedDays = 0;
        m_nFutureViewedIndex = 0;
        m_nFutureViewableEvents = 0;
        m_nLastRecordedFilter = 0;
        m_sBrowserID = void 0;
        m_scheduledFilterChange = new o.LU();
        m_scheduledFutureStats = new o.LU();
        m_scheduledPastStats = new o.LU();
        RecordViewedEvent(e, t) {
          const a = e.GetStoreInitializationTimestamp().getTime() / 1e3;
          this.m_nFutureViewableEvents = 0;
          let n,
            s = 0,
            i = null;
          const r = e.GetCurrentlyLoadedItemsForStats();
          for (const e of r) {
            const r = e.start_time > a;
            if ((e.unique_id == t && ((n = s), (i = e)), r))
              this.m_nFutureViewableEvents++;
            else if (void 0 !== n) break;
            s++;
          }
          if (void 0 !== n)
            if (n < this.m_nFutureViewableEvents) {
              const t = this.m_nFutureViewableEvents - n;
              if (this.m_nFutureViewedIndex < t) {
                this.m_nFutureViewedIndex = t;
                const a = () => {
                    const t =
                      Math.min(this.m_nFutureViewedIndex, 4095) |
                      (Math.min(this.m_nFutureViewableEvents, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(e), 2047) << 20);
                    d.SendExperimentEventToSteam(18, t);
                  },
                  n = 500;
                this.m_scheduledFutureStats.Schedule(n, a);
              }
            } else {
              const t = n - this.m_nFutureViewableEvents;
              if (this.m_nPastViewedIndex < t) {
                (this.m_nPastViewedIndex = t),
                  (this.m_nPastViewedDays = Math.floor(
                    (a - i.start_time) / 86400,
                  ));
                const n = () => {
                    const t =
                      Math.min(this.m_nPastViewedIndex, 4095) |
                      (Math.min(this.m_nPastViewedDays, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(e), 2047) << 20);
                    d.SendExperimentEventToSteam(17, t);
                  },
                  s = 500;
                this.m_scheduledPastStats.Schedule(s, n);
              }
            }
        }
        RecordFilterChangeEvent(e) {
          this.m_scheduledFilterChange.Schedule(1e3, () => {
            let t = 0;
            e.BIsGameSourceAllowed(l.FD.k_ELibrary) && (t |= 1),
              e.BIsGameSourceAllowed(l.FD.k_EWishlist) && (t |= 2),
              e.BIsGameSourceAllowed(l.FD.k_EFollowing) && (t |= 4),
              e.BIsGameSourceAllowed(l.FD.k_ERecommended) && (t |= 8),
              e.BIsGameSourceAllowed(l.FD.k_ESteam) && (t |= 16),
              e.BIsGameSourceAllowed(l.FD.k_EFeatured) && (t |= 32),
              e.BIsGameSourceAllowed(l.FD.k_ERecent) && (t |= 64),
              e.BIsEventTypeGroupAllowed(l.xj.k_ENews) && (t |= 1024),
              e.BIsEventTypeGroupAllowed(l.xj.k_EEvents) && (t |= 2048),
              e.BIsEventTypeGroupAllowed(l.xj.k_EStreaming) && (t |= 4096),
              e.BIsEventTypeGroupAllowed(l.xj.k_EUpdates) && (t |= 8192),
              e.BIsEventTypeGroupAllowed(l.xj.k_EReleases) && (t |= 16384),
              e.BIsEventTypeGroupAllowed(l.xj.k_ESales) && (t |= 32768),
              t != this.m_nLastRecordedFilter &&
                ((this.m_nLastRecordedFilter = t),
                this.SendExperimentEventToSteam(16, t));
          });
        }
        GetTimeSpentOnPageS(e) {
          const t = e.GetStoreInitializationTimestamp(),
            a = new Date();
          return Math.max(0, Math.floor((a.getTime() - t.getTime()) / 1e3));
        }
        RecordAppInteractionEvent(e, t) {
          this.SendExperimentEventToSteam(19, t);
        }
        SendExperimentEventToSteam(e, t) {
          this.InitBrowserID();
          const a = r.TS.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
            n = new URLSearchParams();
          n.append("page_action", "" + e),
            n.append("snr", r.TS.SNR),
            n.append("uint_data", "" + t),
            n.append("str_data", this.m_sBrowserID),
            i().post(a, n);
        }
        InitBrowserID() {
          if (void 0 === this.m_sBrowserID)
            if (r.TS.IN_CLIENT) this.m_sBrowserID = "steam";
            else {
              const e = navigator.userAgent;
              /iPhone|iPad|iPod/i.test(e) ||
              (/Macintosh/i.test(e) && /Safari/i.test(e))
                ? (this.m_sBrowserID = "ios")
                : /Android/i.test(e)
                  ? (this.m_sBrowserID = "android")
                  : (this.m_sBrowserID = "");
            }
        }
      })();
      window.g_EventCalendarTrackingStore = d;
    },
    46910: (e, t, a) => {
      "use strict";
      a.d(t, { FD: () => n, vJ: () => y, xj: () => _ });
      var n,
        s = a(34629),
        i = a(14947),
        r = a(47822),
        o = a(44332),
        l = a(78327),
        d = a(81477),
        m = a(44165);
      !(function (e) {
        (e.k_ERecent = "recent"),
          (e.k_ELibrary = "library"),
          (e.k_EWishlist = "wishlist"),
          (e.k_EFollowing = "following"),
          (e.k_ERecommended = "recommended"),
          (e.k_ESteam = "steam"),
          (e.k_EFeatured = "featured"),
          (e.k_ECurator = "curator");
      })(n || (n = {}));
      const c = [
          n.k_ELibrary,
          n.k_EWishlist,
          n.k_EFollowing,
          n.k_ERecommended,
          n.k_ESteam,
          n.k_ECurator,
        ],
        u = [...c, n.k_EFeatured],
        p = [n.k_EFeatured];
      var _;
      !(function (e) {
        (e.k_ENews = "news"),
          (e.k_EEvents = "events"),
          (e.k_EStreaming = "streaming"),
          (e.k_EUpdates = "updates"),
          (e.k_EReleases = "releases"),
          (e.k_ESales = "sales");
      })(_ || (_ = {}));
      const h = [
          _.k_ENews,
          _.k_EEvents,
          _.k_EStreaming,
          _.k_EUpdates,
          _.k_EReleases,
          _.k_ESales,
        ],
        g = new Map([
          [_.k_ENews, [28]],
          [_.k_EEvents, [9, 27, 22, 23, 24, 35, 25, 26]],
          [_.k_EStreaming, [11]],
          [_.k_EUpdates, [12, 13, 14]],
          [_.k_EReleases, [10, 29, 16, 15, 32]],
          [_.k_ESales, [20, 21, 31, 34]],
        ]);
      function v(e) {
        return new Map(e.map((e) => [e, !0]));
      }
      class y {
        m_mapEventTypeGroupsAllowed = new Map();
        m_mapGameSources = new Map();
        m_bCuratorUnhideOnFollowDialogDismissed = !1;
        m_mapHiddenApps = new Map();
        m_mapHiddenClans = new Map();
        m_bInitializedForUpdatesOnly;
        m_eStorageType = "session";
        m_strStorageKey;
        constructor(e) {
          (0, i.Gn)(this),
            (0, i.h5)(() => {
              e?.rgHiddenApps &&
                e.rgHiddenApps.forEach((e) => this.m_mapHiddenApps.set(e, !0)),
                e?.rgHiddenClans &&
                  e.rgHiddenClans.forEach((e) =>
                    this.m_mapHiddenClans.set(e, !0),
                  );
            });
        }
        GetGameSources() {
          return Array.from(this.m_mapGameSources.keys());
        }
        GetStorageObject() {
          return this.m_strStorageKey
            ? "session" === this.m_eStorageType
              ? window.sessionStorage
              : window.localStorage
            : null;
        }
        GetPreferencesStorageKey() {
          return `${this.m_strStorageKey}-event-calendar-prefs`;
        }
        get enabledEventTypeSet() {
          const e = new Set();
          for (const t of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
            g.get(t).forEach((t) => e.add(t));
          return e;
        }
        MapClanEventTypeToGroup(e) {
          let t = null;
          return (
            g.forEach((a, n) => {
              -1 !== a.indexOf(e) && (t = n);
            }),
            t || _.k_EEvents
          );
        }
        InitDefaultCheckboxes(e, t, a) {
          (this.m_bInitializedForUpdatesOnly = t),
            (this.m_mapEventTypeGroupsAllowed = v(t ? [_.k_EUpdates] : h));
          const s = (0, l.Y2)() ? u : c;
          (this.m_mapGameSources = v(e ? s : p)),
            a && this.m_mapGameSources.set(n.k_EFeatured, !0);
        }
        Init(e, t, a, n, s) {
          (this.m_eStorageType = s), (this.m_strStorageKey = n);
          const i = this.GetStorageObject(),
            r = i ? i.getItem(this.GetPreferencesStorageKey()) : null;
          if (r) {
            const e = JSON.parse(r);
            if (e.rgEventTypeGroupsAllowed && e.rgGameSources) {
              const { rgEventTypeGroupsAllowed: t, rgGameSources: a } = e;
              return (
                (this.m_mapEventTypeGroupsAllowed = v(t)),
                (this.m_mapGameSources = v(a)),
                void (
                  void 0 !== e.bCuratorUnhideOnFollowDismissed &&
                  (this.m_bCuratorUnhideOnFollowDialogDismissed =
                    e.bCuratorUnhideOnFollowDismissed)
                )
              );
            }
          }
          this.InitDefaultCheckboxes(e, t, a);
        }
        SaveFilterPreferences() {
          const e = this.GetStorageObject();
          if (!e) return;
          const t = {
            rgEventTypeGroupsAllowed: Array.from(
              this.m_mapEventTypeGroupsAllowed.keys(),
            ),
            rgGameSources: Array.from(this.m_mapGameSources.keys()),
            bCuratorUnhideOnFollowDismissed:
              this.m_bCuratorUnhideOnFollowDialogDismissed,
          };
          e.setItem(this.GetPreferencesStorageKey(), JSON.stringify(t));
        }
        BCuratorUnhideOnFollowDialogDismissed() {
          return this.m_bCuratorUnhideOnFollowDialogDismissed;
        }
        SetCuratorUnhideOnFollowDialogDismissed(e) {
          (this.m_bCuratorUnhideOnFollowDialogDismissed = e),
            this.SaveFilterPreferences();
        }
        BIsEventTypeGroupAllowed(e) {
          return this.m_mapEventTypeGroupsAllowed.has(e);
        }
        BIsGameSourceAllowed(e) {
          return (
            !(e === n.k_EFollowing && !m.HD.bIsFollowingEnabled) &&
            !(e === n.k_ECurator && !m.HD.bIsCuratorsEnabled) &&
            this.m_mapGameSources.has(e)
          );
        }
        SetEventTypeGroupAllowed(e, t) {
          t
            ? this.m_mapEventTypeGroupsAllowed.set(e, !0)
            : this.m_mapEventTypeGroupsAllowed.delete(e),
            this.SaveFilterPreferences(),
            d.V.RecordFilterChangeEvent(this);
        }
        SetGameSourceAllowed(e, t) {
          t
            ? (this.m_mapGameSources.set(e, !0),
              e == n.k_ERecent
                ? this.m_mapGameSources.delete(n.k_ELibrary)
                : e == n.k_ELibrary &&
                  ((0, o.w)(
                    !this.m_mapGameSources.has(n.k_ERecent),
                    "Setting Library although Recent already set - illusion was broken",
                  ),
                  this.m_mapGameSources.delete(n.k_ERecent)))
            : (this.m_mapGameSources.delete(e),
              e == n.k_ERecent
                ? this.m_mapGameSources.set(n.k_ELibrary, !0)
                : e == n.k_ELibrary &&
                  this.m_mapGameSources.delete(n.k_ERecent)),
            this.SaveFilterPreferences(),
            d.V.RecordFilterChangeEvent(this);
        }
        BShouldDisplayEvent(e) {
          const t = e.GetSource(),
            a = Boolean(
              e.appInfo &&
                e.appInfo.last_played &&
                e.appInfo.last_played + 15552e3 >=
                  m.HD.GetTimeNowWithOverride(),
            );
          return (
            !!(
              this.enabledEventTypeSet.has(e.event_type) ||
              (this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed(_.k_EUpdates) &&
                28 == e.event_type &&
                e.start_time < 1599202800)
            ) &&
            !this.m_mapHiddenApps.has(e.appid) &&
              !this.m_mapHiddenClans.has(e.clanid) &&
            (!!(t & r.bK.k_eRequired || t & r.bK.k_eReposted) ||
              Boolean(
                (this.BIsGameSourceAllowed(n.k_ERecent) && a) ||
                  (this.BIsGameSourceAllowed(n.k_ELibrary) &&
                    t & r.bK.k_eLibrary) ||
                  (this.BIsGameSourceAllowed(n.k_EWishlist) &&
                    t & r.bK.k_eWishlist) ||
                  (this.BIsGameSourceAllowed(n.k_EFollowing) &&
                    t & r.bK.k_eFollowing) ||
                  (this.BIsGameSourceAllowed(n.k_ERecommended) &&
                    t & r.bK.k_eRecommended) ||
                  (this.BIsGameSourceAllowed(n.k_ESteam) &&
                    t & r.bK.k_eSteam) ||
                  (this.BIsGameSourceAllowed(n.k_EFeatured) &&
                    t & r.bK.k_eFeatured) ||
                  (this.BIsGameSourceAllowed(n.k_ECurator) &&
                    t & r.bK.k_eCurator),
              ))
          );
        }
        BAreAllEventsHidden() {
          return (
            0 == this.m_mapEventTypeGroupsAllowed.size ||
            0 == this.m_mapGameSources.size
          );
        }
        BAreAnyEventsFiltered(e) {
          const t = (0, l.Y2)() ? u : c;
          return (
            (e ? t : p).some((e) => !this.BIsGameSourceAllowed(e)) ||
            h.some((e) => !this.BIsEventTypeGroupAllowed(e))
          );
        }
        BIsClanVisible(e) {
          return !this.m_mapHiddenClans.has(e);
        }
        SetClanVisibility(e, t) {
          t
            ? this.m_mapHiddenClans.has(e) && this.m_mapHiddenClans.delete(e)
            : this.m_mapHiddenClans.has(e) || this.m_mapHiddenClans.set(e, !0);
        }
        BIsAppVisible(e) {
          return !this.m_mapHiddenApps.has(e);
        }
        SetAppVisibility(e, t) {
          t
            ? this.m_mapHiddenApps.has(e) && this.m_mapHiddenApps.delete(e)
            : this.m_mapHiddenApps.has(e) || this.m_mapHiddenApps.set(e, !0);
        }
      }
      (0, s.Cg)([i.sH], y.prototype, "m_mapEventTypeGroupsAllowed", void 0),
        (0, s.Cg)([i.sH], y.prototype, "m_mapGameSources", void 0),
        (0, s.Cg)(
          [i.sH],
          y.prototype,
          "m_bCuratorUnhideOnFollowDialogDismissed",
          void 0,
        ),
        (0, s.Cg)([i.sH], y.prototype, "m_mapHiddenApps", void 0),
        (0, s.Cg)([i.sH], y.prototype, "m_mapHiddenClans", void 0),
        (0, s.Cg)(
          [(0, i.EW)({ keepAlive: !0, equals: i.m3.structural })],
          y.prototype,
          "enabledEventTypeSet",
          null,
        ),
        (0, s.Cg)([i.XI], y.prototype, "SetEventTypeGroupAllowed", null),
        (0, s.Cg)([i.XI], y.prototype, "SetGameSourceAllowed", null);
    },
    60746: (e, t, a) => {
      "use strict";
      a.d(t, { KN: () => f, Nh: () => _, Ec: () => I });
      var n = a(34629),
        s = a(41735),
        i = a.n(s),
        r = a(14947),
        o = a(56545),
        l = a(37403),
        d = a(6144),
        m = a(6419),
        c = a(78327),
        u = a(68797);
      class p {
        m_CMInterface;
        m_setShownEvents = new Set();
        m_setReadEvents = new Set();
        m_rgPendingUpload = [];
        m_schUpload = new d.LU();
        m_bUploading = !1;
        constructor(e) {
          this.m_CMInterface = e;
        }
        MarkEventShown(e, t, a) {
          let n = this.MakeKey(e, a);
          if (this.m_setShownEvents.has(n)) return !1;
          this.m_setShownEvents.add(n);
          let s = new l.kZ();
          return (
            s.set_event_gid(e),
            s.set_clanid(t),
            s.set_display_location(a),
            s.set_mark_shown(!0),
            this.QueueForUpload(s),
            !0
          );
        }
        MarkEventRead(e, t, a) {
          let n = this.MakeKey(e, a);
          if (this.m_setReadEvents.has(n)) return !1;
          this.m_setReadEvents.add(n);
          let s = new l.kZ();
          return (
            s.set_event_gid(e),
            s.set_clanid(t),
            s.set_display_location(a),
            s.set_mark_read(!0),
            this.QueueForUpload(s),
            !0
          );
        }
        MakeKey(e, t) {
          return `${e}_${t}`;
        }
        QueueForUpload(e) {
          this.m_rgPendingUpload.push(e), this.ScheduleUpload();
        }
        ScheduleUpload() {
          this.m_bUploading ||
            (this.m_rgPendingUpload.length >= 30
              ? this.UploadPendingData()
              : this.m_schUpload.IsScheduled() ||
                this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
        async Flush() {
          if (!this.m_bUploading) return this.UploadPendingData();
        }
        async UploadPendingData() {
          if (this.m_bUploading) return;
          this.m_schUpload.Cancel();
          let e = this.m_rgPendingUpload.splice(0, 30);
          if (0 == e.length) return;
          let t = !1;
          if (this.m_CMInterface) {
            let a = o.w.Init(l.wS);
            for (let t of e) a.Body().add_markings(t);
            this.m_bUploading = !0;
            let n = await l.BE.MarkPartnerEventsForUser(
              this.m_CMInterface.GetServiceTransport(),
              a,
            );
            (this.m_bUploading = !1), (t = 1 == n.GetEResult());
          } else {
            if (!c.iA.logged_in) return;
            let a = e.map((e) => e.toObject()),
              n = (0, c.xv)() + "actions/ajaxmarkpartnerevents";
            const s = new FormData();
            s.append("sessionid", c.TS.SESSIONID),
              s.append("request", JSON.stringify(a));
            try {
              t =
                1 ==
                (await i().post(n, s, { withCredentials: !0 })).data.success;
            } catch (e) {
              let t = (0, u.H)(e);
              console.error(
                "CPartnerEventUserTracking.UploadPendingData error " +
                  t.strErrorMsg,
                t,
              );
            }
          }
          t
            ? this.m_rgPendingUpload.length > 0 && this.ScheduleUpload()
            : (console.log(
                "Saving news event state failed. Will try again soon!",
              ),
              (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(e)),
              this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
      }
      (0, n.Cg)([m.o], p.prototype, "UploadPendingData", null);
      var _,
        h = a(17720),
        g = a(44332),
        v = a(90626);
      class y {
        clanid = void 0;
        appid = 0;
        can_edit = !1;
        owns_app = !1;
        follows_app = !1;
        support_user = !1;
        valve_admin = !1;
        limited_user = !1;
        event_ignored = new Array();
        event_followed = new Array();
        event_followed_flags = new Array();
        constructor(e) {
          (0, r.Gn)(this), (this.clanid = e);
        }
      }
      (0, n.Cg)([r.sH], y.prototype, "clanid", void 0),
        (0, n.Cg)([r.sH], y.prototype, "appid", void 0),
        (0, n.Cg)([r.sH], y.prototype, "can_edit", void 0),
        (0, n.Cg)([r.sH], y.prototype, "owns_app", void 0),
        (0, n.Cg)([r.sH], y.prototype, "follows_app", void 0),
        (0, n.Cg)([r.sH], y.prototype, "support_user", void 0),
        (0, n.Cg)([r.sH], y.prototype, "valve_admin", void 0),
        (0, n.Cg)([r.sH], y.prototype, "limited_user", void 0),
        (0, n.Cg)([r.sH], y.prototype, "event_ignored", void 0),
        (0, n.Cg)([r.sH], y.prototype, "event_followed", void 0),
        (0, n.Cg)([r.sH], y.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(_ || (_ = {}));
      class f {
        constructor() {
          (0, r.Gn)(this);
        }
        m_mapClanToUserPermissions = new Map();
        m_mapAnnounceGIDToVote = new Map();
        m_setReadEventGIDs = new Set();
        m_tracker;
        m_cm = void 0;
        static s_EventUserStore;
        m_bIsPresentationMode = (0, c.Bu)();
        static Get() {
          return (
            (0, g.w)(
              !!f.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            f.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!f.s_EventUserStore;
        }
        static async InitGlobal(e) {
          if (!f.s_EventUserStore) {
            const t = new f();
            await t.Init(e),
              (f.s_EventUserStore = t),
              "dev" == c.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new p(e));
          const t = (0, c.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, r.h5)(() => {
              t.forEach((e) => {
                let t = new y(e.clanid),
                  a = { result: t, promise: f.RemapToPromise(t) };
                this.CopyFromResponseToTrack(a, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, a);
              });
            }),
            ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let a = (0, c.Fd)("uservotes", "application_config");
          a &&
            (0, r.h5)(() => {
              a.forEach((e) => {
                let t = !!e.voted_up || (!e.voted_down && void 0);
                this.m_mapAnnounceGIDToVote.set(e.clanAnnouncementGID, t);
              });
            });
        }
        GetTracker() {
          return this.m_tracker;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanid &&
            "number" == typeof t[0].appid
          );
        }
        RecordEventShown(e, t) {
          e &&
            !e.bOldAnnouncement &&
            this.m_tracker.MarkEventShown(
              e.GID,
              e.clanSteamID.GetAccountID(),
              t,
            );
        }
        RecordEventRead(e, t) {
          e &&
            !e.bOldAnnouncement &&
            (this.HasEventBeenRead(e.GID) ||
              (this.SetEventAsRead(e.GID),
              this.m_tracker.MarkEventRead(
                e.GID,
                e.clanSteamID.GetAccountID(),
                t,
              )));
        }
        SetEventAsRead(e) {
          this.m_setReadEventGIDs.add(e);
        }
        HasEventBeenRead(e) {
          return this.m_setReadEventGIDs.has(e);
        }
        static async RemapToPromise(e) {
          return e;
        }
        BIsUserLoggedIn() {
          return c.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return this.m_mapClanToUserPermissions.has(e);
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new y(0);
          const t = e.GetAccountID();
          this.m_mapClanToUserPermissions.has(t) ||
            this.LoadSingleAppEventPermissions(e);
          return this.m_mapClanToUserPermissions.get(t).result;
        }
        BFollowsEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_followed.indexOf(t)
          );
        }
        BFollowsEventAndNotifiedBy(e, t, a) {
          let n = this.GetPartnerEventPermissions(e),
            s = n.event_followed.indexOf(t);
          return -1 !== s && (n.event_followed_flags[s] & a) == a;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            a = this.m_mapClanToUserPermissions.get(t);
          return (
            a ||
              ((a = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new y(t),
              }),
              this.m_mapClanToUserPermissions.set(t, a)),
            a.promise
          );
        }
        CopyFromResponseToTrack(e, t) {
          (e.result.appid = t.appid),
            (e.result.can_edit = t.can_edit),
            (e.result.clanid = t.appid),
            (e.result.event_followed = t.event_followed),
            (e.result.event_ignored = t.event_ignored),
            (e.result.event_followed_flags = t.event_followed_flags),
            (e.result.follows_app = t.follows_app),
            (e.result.owns_app = t.owns_app),
            (e.result.limited_user = t.limited_user),
            (t.support_user || t.valve_admin) && this.m_bIsPresentationMode
              ? ((e.result.can_edit = !0),
                (e.result.support_user = !1),
                (e.result.valve_admin = !1))
              : ((e.result.support_user = t.support_user),
                (e.result.valve_admin = t.valve_admin));
        }
        async InternalLoadSingleAppEventPermissions(e) {
          let t = null,
            a = e.GetAccountID(),
            n = !Boolean(c.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(a)) {
            let t = new y(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(a, {
              result: t,
              promise: f.RemapToPromise(t),
            });
          }
          try {
            if (Boolean(c.iA.logged_in)) {
              let s =
                  c.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                r = {};
              if (
                ("partnerweb" == (0, c.yK)() &&
                  ((s =
                    c.TS.PARTNER_BASE_URL +
                    "partnerevents/ajaxgetpartnereventpermissions"),
                  (r = { clanaccountid: e.GetAccountID() })),
                (t = await i().get(s, { params: r, withCredentials: !0 })),
                1 != t.data.success)
              )
                console.error(
                  "Partner Events Failed Load:" + (0, u.H)(t.data).strErrorMsg,
                ),
                  (n = !0);
              else {
                let e = this.m_mapClanToUserPermissions.get(a);
                this.CopyFromResponseToTrack(e, t.data);
              }
            }
          } catch (e) {
            if (
              ((t = e.response),
              (n = !0),
              e &&
                void 0 !== e.response &&
                void 0 !== e.response.data &&
                void 0 !== e.response.data.success &&
                21 == e.response.data.success)
            );
            else {
              const t = (0, u.H)(e);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  a +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            n &&
              (0, r.h5)(() => {
                let e = this.m_mapClanToUserPermissions.get(a);
                (e.result.appid = t && t.data ? t.data.appid : 0),
                  (e.result.can_edit = !1),
                  (e.result.clanid = t && t.data ? t.data.clanid : 0),
                  (e.result.event_followed = new Array()),
                  (e.result.event_ignored = new Array()),
                  (e.result.event_followed_flags = new Array()),
                  (e.result.follows_app = !1),
                  (e.result.owns_app = !1),
                  (e.result.support_user = !1),
                  (e.result.valve_admin = !1),
                  (e.result.limited_user = !1);
              });
          }
          return this.m_mapClanToUserPermissions.get(a).result;
        }
        async SetFollowOrUnfollowEvent(e, t, a, n, s) {
          let o = this.GetPartnerEventPermissions(a),
            l = o.event_followed.indexOf(n),
            d = 0;
          -1 !== l &&
            ((d = o.event_followed_flags[l]), e ? (s = d & ~s) : (s |= d));
          let m = 0 == s,
            u =
              ("store" === (0, c.yK)()
                ? c.TS.STORE_BASE_URL + "events"
                : c.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  a.ConvertTo64BitString()) +
              (m ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            p = new URLSearchParams();
          p.append("sessionid", c.TS.SESSIONID),
            p.append("ignore", "" + t),
            p.append("gid", n),
            p.append("notification_flag", "" + s),
            p.append("clan_accountid", "" + a.GetAccountID());
          await i().post(u, p, { withCredentials: !0 });
          (0, r.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(a.GetAccountID()),
              i = null,
              r = null,
              o = null,
              l = null;
            m
              ? ((i = t ? e.result.event_ignored : e.result.event_followed),
                (o = t ? null : e.result.event_followed_flags))
              : t
                ? ((i = e.result.event_followed),
                  (o = e.result.event_followed_flags),
                  (r = e.result.event_ignored))
                : ((i = e.result.event_ignored),
                  (r = e.result.event_followed),
                  (l = e.result.event_followed_flags));
            let d = i.indexOf(n);
            if ((d > -1 && (i.splice(d, 1), o && o.splice(d, 1)), r)) {
              let e = r.indexOf(n);
              -1 == e ? (r.push(n), l && l.push(s)) : (l[e] = s);
            }
          });
        }
        async Vote(e, t, a) {
          if (!e || !e.AnnouncementGID) return !1;
          const n = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (n === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, r.h5)(() => {
              !0 === n && e.UpdateVoteCount("up", -1),
                !1 === n && e.UpdateVoteCount("down", -1),
                !0 === t && e.UpdateVoteCount("up", 1),
                !1 === t && e.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let a = o.w.Init(l.QU);
            return (
              a.Body().set_announcementid(e.AnnouncementGID),
              a.Body().set_vote_up(!!t),
              a.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              1 ==
                (
                  await l.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    a,
                  )
                ).GetEResult()
            );
          }
          {
            const n = (0, c.yK)(),
              s =
                "community" == n || "steamtv" == n
                  ? c.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : c.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              r = new URLSearchParams();
            r.append("sessionid", c.TS.SESSIONID),
              r.append("voteup", t ? "1" : "0"),
              r.append("clanid", "" + e.clanSteamID.GetAccountID()),
              r.append("ajax", "1");
            const o = { withCredentials: !0, cancelToken: a.token };
            return 1 == (await i().post(s, r, o)).data.success;
          }
        }
        async LoadMyVote(e, t) {
          if (e?.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let a;
            if (this.m_cm) {
              let t = o.w.Init(l.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let n = await l.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              1 == n.GetEResult() &&
                (a =
                  !!n.Body().voted_up() || (!n.Body().voted_down() && void 0));
            } else {
              const n = "store" == (0, c.yK)(),
                s = n
                  ? c.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : c.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                r = { gid: n ? e.AnnouncementGID : void 0 },
                o = await i().get(s, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: r,
                });
              a = !!o.data.voted_up || (!o.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, a), a;
          }
        }
        SetVote(e, t) {
          this.m_mapAnnounceGIDToVote.set(e, t);
        }
        BHasMyVote(e) {
          return (
            !!e.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(e) {
          return e.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(e) {
          if (e.BHasEmailEnabled()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (c.UF.IS_OGG || c.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
        BShowSaleEditorTab(e) {
          if (e.BHasSaleEnabled()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (
            !c.UF.IS_OGG &&
            (t.valve_admin ||
              (e.jsondata.clone_from_event_gid &&
                e.jsondata.clone_from_sale_enabled))
          );
        }
      }
      function I(e) {
        const [t, a] = (0, v.useState)(
            f.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          n = h.b.InitFromClanID(e),
          [s, i] = (0, v.useState)(f.Get().GetPartnerEventPermissions(n));
        return (
          (0, v.useEffect)(() => {
            if (!t) {
              const t = h.b.InitFromClanID(e);
              f.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  i(e), a(!0);
                });
            }
          }, [t, e]),
          s
        );
      }
      (0, n.Cg)([r.sH], f.prototype, "m_mapClanToUserPermissions", void 0),
        (0, n.Cg)([r.sH], f.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, n.Cg)([r.sH], f.prototype, "m_setReadEventGIDs", void 0),
        (0, n.Cg)([r.XI], f.prototype, "CopyFromResponseToTrack", null);
    },
    20587: (e, t, a) => {
      "use strict";
      a.d(t, { ZQ: () => w, O3: () => S, dB: () => E, CO: () => C });
      var n = a(34629),
        s = a(41735),
        i = a.n(s),
        r = a(14947),
        o = a(31561),
        l = a(22837),
        d = a(77516),
        m = a(17720);
      var c = a(62490),
        u = a(44332),
        p = a(68797),
        _ = a(6144),
        h = a(61859),
        g = a(41338),
        v = a(78327),
        y = a(90626),
        f = a(375);
      class I {
        appid;
        date;
        can_play;
        playtime;
        announcementid;
        constructor(e) {
          (0, u.w)(
            "number" == typeof e.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = e.appid),
            (this.date = e.date),
            (this.can_play = e.can_play),
            (this.playtime = e.playtime),
            (this.announcementid = e.announcementid);
        }
      }
      function b(e) {
        let t = "" + e;
        const a = h.A0.GetELanguageFallback(e);
        return e != a && (t += "_" + a), t;
      }
      class w {
        constructor() {
          (0, r.Gn)(this);
        }
        m_mapExistingEvents = new Map();
        m_mapEventUpdateCallback = new Map();
        m_mapAnnouncementBodyToEvent = new Map();
        m_mapClanToGIDs = new Map();
        m_mapAppIDToGIDs = new Map();
        m_mapAdjacentAnnouncementGIDs = new Map();
        m_mapUpdatedApps = new Map();
        m_tsUpdatedAppsQueryTime = 0;
        m_rgQueuedEventsClanIDs = new Array();
        m_rgQueuedEventsUniqueIDs = new Array();
        m_rgQueuedEventsForEditFlags = new Array();
        m_QueuedEventTimeout = new _.LU();
        m_PendingInfoPromise;
        m_PendingInfoResolve;
        m_bLoadedFromConfig = !1;
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let t =
              ((e = "PartnerEventStore"),
              window.StoreDefaults ? window.StoreDefaults[e] : void 0);
            this.ValidateStoreDefault(t) &&
              t.forEach((e) => {
                if (e) {
                  let t = new m.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    this.m_mapExistingEvents.set(
                      d.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let a = (0, v.Fd)("partnereventstore", "application_config");
            this.ValidateStoreDefault(a) &&
              a.forEach((e) => {
                if (e) {
                  let t = new m.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      d.cB + e.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      d.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let n = (0, v.Fd)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(n) &&
              (("dev" != v.TS.WEB_UNIVERSE && "beta" != v.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: CPartnerEventStore loading adjacents gids payload: " +
                    n.length,
                ),
              n.forEach((e) => {
                e &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    e.announcementGID,
                    e.adjacents,
                  );
              })),
              "dev" == v.TS.WEB_UNIVERSE &&
                console.log(
                  "PartnerEventStore Loaded events: " +
                    this.m_mapExistingEvents.size +
                    " with adjacent info: " +
                    this.m_mapExistingEvents.size,
                ),
              (this.m_bLoadedFromConfig = !0);
          }
          var e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            ("string" == typeof t[0].gid ||
              ("object" == typeof t[0].announcement_body &&
                "string" == typeof t[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].announcementGID &&
              Array.isArray(t[0].adjacents) &&
            (0 == t[0].adjacents.length || "string" == typeof t[0].adjacents[0])
          );
        }
        GetPartnerEventChangeCallback(e) {
          return (
            this.m_mapEventUpdateCallback.has(e) ||
              this.m_mapEventUpdateCallback.set(e, new _.lu()),
            this.m_mapEventUpdateCallback.get(e)
          );
        }
        GetClanEventGIDs(e) {
          let t = this.m_mapClanToGIDs.get(e.GetAccountID());
          return t || [];
        }
        GetClanEventGIDsForApp(e) {
          let t = this.m_mapAppIDToGIDs.get(e);
          return t || [];
        }
        GetClanEventModel(e) {
          return this.m_mapExistingEvents.get(e);
        }
        BHasClanEventModel(e) {
          return this.m_mapExistingEvents.has(e);
        }
        BHasClanAnnouncementGID(e) {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            let t = this.m_mapAnnouncementBodyToEvent.get(e);
            return this.BHasClanEventModel(t);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(e) {
          return this.m_mapAnnouncementBodyToEvent.get(e);
        }
        GetClanEventFromAnnouncementGID(e) {
          return this.m_mapExistingEvents.get(
            this.m_mapAnnouncementBodyToEvent.get(e),
          );
        }
        DefaultEventSortFunction(e, t) {
          return e.startTime == t.startTime
            ? (0, g.kd)(e.GID, t.GID)
            : t.startTime - e.startTime;
        }
        RegisterClanEvents(e) {
          if (e)
            for (const t of e) {
              const e = this.GetEventLookupKey(t);
              if (!this.m_mapExistingEvents.has(e)) {
                const e = new m.b(t.clan_steamid);
                this.InsertEventModelFromClanEventData(e, t);
              }
            }
        }
        GetRankedClanEvents(e, t) {
          let a = [],
            n = e ? this.GetClanEventGIDs(e) : this.GetClanEventGIDsForApp(t);
          if (!n || 0 == n.length) return a;
          for (let e of n) {
            let t = this.GetClanEventModel(e);
            a.push(t);
          }
          return a.sort(this.DefaultEventSortFunction), a;
        }
        BIsOldAnnouncement(e) {
          return (
            (null == e.gid || null == e.gid || "0" == e.gid) &&
            e.announcement_body &&
            "0" != e.announcement_body.gid
          );
        }
        GetEventLookupKey(e) {
          return this.BIsOldAnnouncement(e)
            ? d.cB + e.announcement_body.gid
            : e.gid;
        }
        InsertEventModelFromClanEventData(e, t) {
          let a = new d.lh();
          if (
            ((a.clanSteamID = e),
            (0, u.w)(
              a.clanSteamID && a.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                a.clanSteamID.ConvertTo64BitString() +
                " " +
                v.TS.EUNIVERSE,
            ),
            (a.GID = this.GetEventLookupKey(t)),
            (a.bOldAnnouncement = this.BIsOldAnnouncement(t)),
            (a.appid = t.appid),
            (a.startTime = t.rtime32_start_time),
            (a.endTime = t.rtime32_end_time),
            (a.visibilityStartTime = t.rtime32_visibility_start),
            (a.visibilityEndTime = t.rtime32_visibility_end),
            (a.loadedAllLanguages = !1),
            (a.type = t.event_type),
            (a.nVotesUp = t.votes_up),
            (a.nVotesDown = t.votes_down),
            (a.comment_type = t.comment_type),
            (a.gidfeature = t.gidfeature),
            (a.gidfeature2 = t.gidfeature2),
            (a.featured_app_tagid = t.featured_app_tagid),
            (a.vecTags = new Array()),
            (a.creator_steamid = t.creator_steamid),
            (a.last_update_steamid = t.last_update_steamid),
            (a.rtime32_last_modified = t.rtime32_last_modified),
            (a.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
            (a.video_preview_type = t.video_preview_type),
            (a.video_preview_id = t.video_preview_id),
            (a.has_live_stream = t.has_live_stream),
            (a.live_stream_viewer_count = t.live_stream_viewer_count),
            (a.m_nBuildID = t.build_id),
            (a.m_strBuildBranch = t.build_branch),
            t.announcement_body)
          ) {
            let e = t.announcement_body;
            (a.AnnouncementGID = e.gid),
              a.name.set(e.language, e.headline),
              a.description.set(e.language, e.body),
              a.timestamp_loc_updated.clear(),
              (a.forumTopicGID = e.forum_topic_id),
              (a.nCommentCount = e.commentcount),
              (a.postTime = e.posttime),
              a.bOldAnnouncement && !e.hidden && (a.startTime = e.posttime),
              (a.announcementClanSteamID = new m.b(e.clanid)),
              e.tags &&
                e.tags.length > 0 &&
                e.tags.forEach((e) => a.vecTags.push(e)),
              !a.rtime32_last_solr_search_col_updated &&
                a.rtime32_last_modified &&
                ((a.rtime32_last_solr_search_col_updated =
                  a.rtime32_last_modified),
                (a.rtime32_last_modified = e.updatetime));
          } else
            (a.AnnouncementGID = "0"),
              (a.forumTopicGID = t.forum_topic_id),
              a.name.clear(),
              a.description.clear(),
              a.timestamp_loc_updated.clear(),
              (a.postTime = t.rtime32_start_time),
              (a.nCommentCount = t.comment_count),
              a.name.set(0, t.event_name),
              a.description.set(0, t.event_notes);
          t.broadcaster_accountid &&
            (a.broadcaster = new m.b(t.broadcaster_accountid));
          const n = d.DJ;
          try {
            a.jsondata = {
              ...n,
              ...(t.jsondata ? JSON.parse(t.jsondata) : void 0),
            };
          } catch (e) {
            const t = (0, p.H)(e);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  t.strErrorMsg,
                t,
              ),
              e)
            );
          }
          if (
            ((a.jsondata.localized_capsule_image = (0, c.$Y)(
              a.jsondata.localized_capsule_image || [],
              31,
              null,
            )),
            (a.jsondata.localized_title_image = (0, c.$Y)(
              a.jsondata.localized_title_image || [],
              31,
              null,
            )),
            (a.jsondata.localized_subtitle = (0, c.$Y)(
              a.jsondata.localized_subtitle || [],
              31,
              null,
            )),
            (a.jsondata.localized_summary = (0, c.$Y)(
              a.jsondata.localized_summary || [],
              31,
              null,
            )),
            (a.jsondata.localized_broadcast_title = (0, c.$Y)(
              a.jsondata.localized_broadcast_title || [],
              31,
              null,
            )),
            (a.jsondata.localized_broadcast_left_image = (0, c.$Y)(
              a.jsondata.localized_broadcast_left_image || [],
              31,
              null,
            )),
            (a.jsondata.localized_broadcast_right_image = (0, c.$Y)(
              a.jsondata.localized_broadcast_right_image || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_header = (0, c.$Y)(
              a.jsondata.localized_sale_header || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_overlay = (0, c.$Y)(
              a.jsondata.localized_sale_overlay || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_product_banner = (0, c.$Y)(
              a.jsondata.localized_sale_product_banner || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_product_mobile_banner = (0, c.$Y)(
              a.jsondata.localized_sale_product_mobile_banner || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_logo = (0, c.$Y)(
              a.jsondata.localized_sale_logo || [],
              31,
              null,
            )),
            void 0 !== a.jsondata.sale_num_headers)
          )
            for (let e = 0; e < a.jsondata.sale_num_headers; ++e)
              a.jsondata.localized_per_day_sales_header[e] = (0, c.$Y)(
                a.jsondata.localized_per_day_sales_header[e],
                31,
                null,
              );
          return (
            a.jsondata.sale_sections &&
              a.jsondata.sale_sections.forEach((e, t) => {
                e.localized_label &&
                  (e.localized_label = (0, c.$Y)(e.localized_label, 31, null)),
                  "trailercarousel" === e.section_type &&
                    (e.show_as_carousel = !1),
                  (a.jsondata.sale_sections[t] = { ...d.G6, ...e });
              }),
            a.jsondata.email_setting &&
              a.jsondata.email_setting.sections &&
              a.jsondata.email_setting.sections.forEach((e) => {
                void 0 !== e.localized_headline &&
                  null !== e.localized_headline &&
                  (e.localized_headline = (0, c.$Y)(
                    e.localized_headline,
                    31,
                    null,
                  )),
                  void 0 !== e.localized_body &&
                    null !== e.localized_body &&
                    (e.localized_body = (0, c.$Y)(e.localized_body, 31, null)),
                  void 0 !== e.localized_image &&
                    null !== e.localized_image &&
                    (e.localized_image = (0, c.$Y)(
                      e.localized_image,
                      31,
                      null,
                    ));
              }),
            a.jsondata.localized_title_image.forEach((e, t) => {
              if (null != e && "http" == e.substr(0, 4)) {
                let n = e.lastIndexOf("/"),
                  s = e.substr(n + 1);
                a.jsondata.localized_title_image[t] = s;
              }
            }),
            t.published
              ? t.hidden
                ? (a.visibility_state = d.zv.k_EEventStateStaged)
                : (a.visibility_state = d.zv.k_EEventStateVisible)
              : (a.visibility_state = d.zv.k_EEventStateUnpublished),
            this.InsertUniqueEventGID(e.GetAccountID(), a.appid, a.GID),
            this.m_mapExistingEvents.set(a.GID, a),
            a.AnnouncementGID &&
              a.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(a.AnnouncementGID, a.GID),
            (a.bLoaded = !0),
            a
          );
        }
        HelperInitializeNumSalesHeaderArray(e) {
          if (e.jsondata.sale_num_headers > 1) {
            e.jsondata.localized_per_day_sales_header = [];
            for (let t = 0; t < e.jsondata.sale_num_headers; ++t)
              e.jsondata.localized_per_day_sales_header.push(
                (0, c.$Y)([], 31, null),
              );
            e.m_overrideCurrentDay = 0;
          } else e.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(e) {
          let t = new Array();
          return (
            this.m_mapClanToGIDs.has(e.GetAccountID()) &&
              this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
                let a = this.m_mapExistingEvents.get(e);
                a && t.push(a);
              }),
            t
          );
        }
        async QueueLoadPartnerEvent(e, t, a) {
          if (this.m_mapExistingEvents.has(t)) return;
          this.m_rgQueuedEventsClanIDs.push(e),
            this.m_rgQueuedEventsUniqueIDs.push(t),
            this.m_rgQueuedEventsForEditFlags.push(Boolean(a)),
            this.m_PendingInfoPromise ||
              (this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              ));
          const n = this.m_PendingInfoPromise,
            s = () => {
              const e = this.m_PendingInfoResolve,
                t = this.m_rgQueuedEventsClanIDs,
                a = this.m_rgQueuedEventsUniqueIDs,
                n = this.m_rgQueuedEventsForEditFlags;
              (this.m_PendingInfoPromise = null),
                (this.m_rgQueuedEventsClanIDs = new Array()),
                (this.m_rgQueuedEventsUniqueIDs = new Array()),
                (this.m_rgQueuedEventsForEditFlags = new Array()),
                this.InternalLoadPartnerEventList(t, a, n).then(() => e());
            };
          if (this.m_rgQueuedEventsClanIDs.length >= 30)
            this.m_QueuedEventTimeout.Cancel(), s();
          else if (!this.m_QueuedEventTimeout.IsScheduled()) {
            const e = 50;
            this.m_QueuedEventTimeout.Schedule(e, s);
          }
          return n;
        }
        async InternalLoadPartnerEventList(e, t, a) {
          let n = a.some((e) => e);
          const s =
              v.TS.STORE_BASE_URL +
              (n
                ? "events/ajaxgeteventdetailsforedit/"
                : "events/ajaxgeteventdetails/"),
            r = b((0, l.sf)(v.TS.LANGUAGE)),
            o = {
              clanid_list: e.join(","),
              uniqueid_list: t.join(","),
              lang_list: r,
              origin: self.origin,
            };
          try {
            const e = await i().get(s, { params: o, withCredentials: n });
            this.RegisterClanEvents(e.data.events);
          } catch (e) {
            let t = (0, p.H)(e);
            console.error("GetEventDetails hit error " + t.strErrorMsg, t);
          }
        }
        async LoadAdjacentPartnerEvents(e, t, a, n, s, i, r) {
          return this.InternalLoadAdjacentPartnerEvents(
            e,
            void 0,
            t,
            a,
            n,
            s,
            i,
            r,
          );
        }
        async LoadAdjacentPartnerEventsByAnnouncement(e, t, a, n, s, i, r) {
          return this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e,
            t,
            a,
            n,
            s,
            i,
            r,
          );
        }
        async LoadAdjacentPartnerEventsByEvent(e, t, a, n, s, i, r) {
          const o = t || e.clanSteamID;
          return e.bOldAnnouncement
            ? this.InternalLoadAdjacentPartnerEvents(
                void 0,
                e.AnnouncementGID,
                o,
                a,
                n,
                s,
                i,
                r,
              )
            : this.InternalLoadAdjacentPartnerEvents(
                e.GID,
                e.AnnouncementGID,
                o,
                a,
                n,
                s,
                i,
                r,
              );
        }
        async InternalLoadAdjacentPartnerEvents(e, t, a, n, s, o, d, c) {
          let u = new Array();
          if (this.m_mapAdjacentAnnouncementGIDs.has(t)) {
            let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
              a = new Array();
            if (
              (e.forEach((e) => {
                if (this.m_mapAnnouncementBodyToEvent.has(e)) {
                  let t = this.m_mapAnnouncementBodyToEvent.get(e);
                  u.push(this.m_mapExistingEvents.get(t));
                } else a.push(e);
              }),
              a.length > 0)
            ) {
              (
                await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  null,
                  a,
                  c,
                )
              ).forEach((e) => u.push(e));
            }
          } else {
            let _ =
              v.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
            const h = b((0, l.sf)(v.TS.LANGUAGE));
            let g = {
              clan_accountid: a ? a.GetAccountID() : void 0,
              appid: n,
              count_before: s,
              count_after: o,
              gidevent: e,
              gidannouncement: t,
              lang_list: h,
              rtime_oldestevent: d ? d.rtime_oldestevent : void 0,
              require_tags:
                d && d.require_tags ? d.require_tags.join(",") : void 0,
              exclude_tags:
                d && d.exclude_tags ? d.exclude_tags.join(",") : void 0,
              require_no_tags: d ? d.require_no_tags : void 0,
              event_type_filter:
                d && d.event_type_filter
                  ? d.event_type_filter.join(",")
                  : void 0,
              exclude_event_types:
                d && d.exclude_event_types
                  ? d.exclude_event_types.join(",")
                  : void 0,
              origin: self.origin,
            };
            try {
              let s = await i().get(_, { params: g, cancelToken: c?.token });
              if (1 == s?.data?.success)
                (0, r.h5)(() => {
                  for (let e of s.data.events) {
                    let t = this.GetEventLookupKey(e);
                    if (!this.m_mapExistingEvents.has(t)) {
                      let t = new m.b(e.clan_steamid);
                      this.InsertEventModelFromClanEventData(a || t, e);
                    }
                    u.push(this.m_mapExistingEvents.get(t));
                  }
                  0 == u.length &&
                    (e && this.BHasClanEventModel(e)
                      ? u.push(this.m_mapExistingEvents.get(e))
                      : t &&
                        this.BHasClanAnnouncementGID(t) &&
                        u.push(this.GetClanEventFromAnnouncementGID(t)));
                });
              else {
                let e = (0, p.H)(s?.data);
                console.error(
                  "LoadAdjacentPartnerEvents Success but empty response:" +
                    n +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              let t = (0, p.H)(e);
              52 != t.errorCode &&
                console.error(
                  "LoadAdjacentPartnerEvents hit error on appid:" +
                    n +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    t.strErrorMsg,
                  t,
                );
            }
          }
          return u;
        }
        async LoadPartnerEventsPageable(e, t, a = 0, n = 0) {
          let s = new Array(),
            o = v.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
            l = {
              clan_accountid: e ? e.GetAccountID() : void 0,
              appid: t,
              offset: a,
              count: n,
              l: v.TS.LANGUAGE,
              origin: self.origin,
            };
          try {
            let e = await i().get(o, { params: l });
            (0, r.h5)(() => {
              for (let t of e.data.events) {
                let e = this.GetEventLookupKey(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new m.b(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                s.push(this.m_mapExistingEvents.get(e));
              }
            });
          } catch (e) {
            console.error(
              "LoadClanEventInDateRange hit error " + (0, p.H)(e).strErrorMsg,
            );
          }
          return s;
        }
        async GetBestEventsForCurrentUser(e, t, a) {
          let n = new Array(),
            s = {
              l: v.TS.LANGUAGE,
              include_steam_blog: !0,
              filter_to_played_within_days: e,
              include_only_game_updates: t,
            },
            o = v.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
            l = await i().get(o, {
              params: s,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
          if (!l.data?.events) {
            let e = l.data?.err_msg || "";
            throw new Error(
              `GetBestEventsForCurrentUser request failed (${e})`,
            );
          }
          return (
            (0, r.h5)(() => {
              for (let e of l.data.events) {
                let t = this.GetEventLookupKey(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new m.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                let a = {
                  nAppPriority: e.nAppPriority,
                  bPossibleTakeOver: e.bPossibleTakeOver,
                  event: this.m_mapExistingEvents.get(t),
                };
                n.push(a);
              }
            }),
            n
          );
        }
        async LoadImportantEventsAroundToday(e, t, a, n, s, o) {
          let l = new Array(),
            d = new Array();
          d.push({ priority: 0, appids: t }),
            a && d.push({ priority: 1, appids: a }),
            n && d.push({ priority: 2, appids: n });
          let c = {
              count: e,
              strAppIDPriority: JSON.stringify({ prioritized_apps: d }),
              filterToEventTypes: o ? o.toString() : "",
              l: v.TS.LANGUAGE,
            },
            u = v.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
            p = await i().get(u, {
              params: c,
              withCredentials: !0,
              cancelToken: s.token,
            });
          return (
            (0, r.h5)(() => {
              for (let e of p.data.events) {
                let t = this.GetEventLookupKey(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new m.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                l.push(this.m_mapExistingEvents.get(t));
              }
            }),
            l
          );
        }
        InsertUniqueEventGID(e, t, a) {
          this.m_mapClanToGIDs.has(e) ||
            this.m_mapClanToGIDs.set(e, new Array()),
            this.m_mapAppIDToGIDs.has(t) ||
              this.m_mapAppIDToGIDs.set(t, new Array());
          let n = this.m_mapClanToGIDs.get(e);
          -1 == n.indexOf(a) &&
            (n.push(a), this.m_mapAppIDToGIDs.get(t).push(a));
        }
        ResetModel() {}
        async DeleteClanEvent(e, t) {
          this.m_mapExistingEvents.has(t) &&
            (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
          let a = null,
            n = new URLSearchParams();
          return (
            n.append("sessionid", v.TS.SESSIONID),
            n.append("bDelete", "1"),
            n.append("gid", t),
            (a = await i().post(
              v.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                e.ConvertTo64BitString() +
                "/ajaxcreateupdatedeletepartnerevents/",
              n,
            )),
            this.RemoveGIDFromList(e, t),
            a.data
          );
        }
        RemoveGIDFromList(e, t) {
          if (
            (this.m_mapExistingEvents.delete(t),
            this.m_mapClanToGIDs.has(e.GetAccountID()))
          ) {
            let a = this.m_mapClanToGIDs.get(e.GetAccountID()),
              n = a.indexOf(t);
            n >= 0 && a.splice(n, 1);
          }
        }
        FlushEventFromCache(e, t) {
          if (e && this.m_mapExistingEvents.has(e)) {
            if (!t) {
              t = this.m_mapExistingEvents.get(e).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(e);
          }
          if (
            t &&
            (this.m_mapExistingEvents.has(d.cB + t) &&
              this.m_mapExistingEvents.delete(d.cB + t),
            this.m_mapAnnouncementBodyToEvent.has(t))
          ) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            this.m_mapExistingEvents.has(e) &&
              this.m_mapExistingEvents.delete(e),
              this.m_mapAnnouncementBodyToEvent.delete(t);
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          e,
          t,
          a,
          n,
          s,
          r = !1,
        ) {
          let o = b(r ? 0 : (0, l.sf)(v.TS.LANGUAGE)),
            d = {
              appid: t,
              clan_accountid: e ? e.GetAccountID() : void 0,
              announcement_gid: n,
              event_gid: a,
              lang_list: o,
              last_modified_time: s || 0,
              origin: self.origin,
              for_edit: r,
            },
            c = null,
            p = null;
          if (r) {
            const a = (0, v.yK)();
            "community" === a
              ? ((p = v.TS.COMMUNITY_BASE_URL),
                (p += e ? "gid/" + e.ConvertTo64BitString() : "ogg/" + t),
                (p += "/"))
              : (p =
                  "partnerweb" === a
                    ? v.TS.PARTNER_BASE_URL + "sales/"
                    : v.TS.STORE_BASE_URL + "events/"),
              (p += "ajaxgetpartnereventforedit"),
              (c = { params: d, withCredentials: !0 });
          } else
            (p = v.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
              (c = { params: d, withCredentials: !1 });
          let _ = (await i().get(p, c)).data.event,
            h = this.GetEventLookupKey(_);
          if (
            !this.m_mapExistingEvents.has(h) ||
            this.m_mapExistingEvents.get(h).rtime32_last_modified <
              _.rtime32_last_modified ||
            this.m_mapExistingEvents.get(h).rtime32_moderator_reviewed <
              _.rtime_mod_reviewed
          ) {
            (0, u.w)(
              _.clan_steamid,
              "ClanSteamID is missing from data we received",
            );
            let e = new m.b(_.clan_steamid);
            this.InsertEventModelFromClanEventData(e, _);
          }
          return this.m_mapExistingEvents.get(h);
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          e,
          t,
          a,
          n,
          s,
          i,
        ) {
          if (a && this.m_mapExistingEvents.has(a))
            return this.m_mapExistingEvents.get(a);
          if (n) {
            if (this.m_mapExistingEvents.has(d.cB + n))
              return this.m_mapExistingEvents.get(d.cB + n);
            if (this.m_mapAnnouncementBodyToEvent.has(n)) {
              const e = this.m_mapAnnouncementBodyToEvent.get(n);
              if (this.m_mapExistingEvents.has(e))
                return this.m_mapExistingEvents.get(e);
            }
          }
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            t,
            a,
            n,
            s,
            i,
          );
        }
        async LoadPartnerEventFromAnnoucementGID(e, t, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            void 0,
            t,
            a,
          );
        }
        async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, a, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            void 0,
            t,
            a,
            n,
          );
        }
        async LoadPartnerEventFromClanEventGID(e, t, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            t,
            void 0,
            a,
          );
        }
        async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, a, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            t,
            void 0,
            a,
            n,
          );
        }
        async LoadPartnerEventGeneric(e, t, a, n, s) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            t,
            a,
            n,
            s,
          );
        }
        async LoadHiddenPartnerEvent(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            null,
            t,
            null,
            0,
            !0,
          );
        }
        async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            null,
            null,
            t,
            0,
            !0,
          );
        }
        async HintLoadImportantUpdates() {
          const e = (0, o.tB)(36e5);
          if (e != this.m_tsUpdatedAppsQueryTime) {
            this.m_tsUpdatedAppsQueryTime = e;
            const t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
              a = v.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
              n = await i().get(a, { params: t, withCredentials: !0 });
            n.data.apps &&
              n.data.apps.length > 0 &&
              (0, r.h5)(() => {
                const e = new Map(n.data.apps.map((e) => [e.appid, new I(e)]));
                this.m_mapUpdatedApps = e;
              });
          }
          return this.m_mapUpdatedApps;
        }
        GetAppImportantUpdate(e) {
          return (
            this.HintLoadImportantUpdates().catch((e) => {
              console.log("UpdatedApps failed to load: ", e.response.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
          );
        }
        async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
          let a =
            v.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/announcements/ajaxgetlocalization/" +
            t;
          return (await i().get(a)).data.localization;
        }
        async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, a) {
          const n = new Array(),
            s = v.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
            o = b((0, l.sf)(v.TS.LANGUAGE));
          let d = null,
            c = null;
          if (e) {
            let t = new Array();
            e.forEach((e) => {
              this.m_mapExistingEvents.has(e)
                ? n.push(this.m_mapExistingEvents.get(e))
                : t.push(e);
            }),
              t.sort(),
              (d = t);
          }
          if (t) {
            let e = new Array();
            t.forEach((t) => {
              if (
                this.m_mapAnnouncementBodyToEvent.has(t) &&
                this.m_mapExistingEvents.has(
                  this.m_mapAnnouncementBodyToEvent.get(t),
                )
              ) {
                let e = this.m_mapAnnouncementBodyToEvent.get(t);
                n.push(this.m_mapExistingEvents.get(e));
              } else e.push(t);
            }),
              e.sort(),
              (c = e);
          }
          if (!d && !c) return n;
          const u = new Array();
          for (; d?.length > 0 || c?.length > 0; ) {
            let e = {
              event_gids: d?.length > 0 ? d?.splice(0, 100).join(",") : void 0,
              announcement_gids:
                c?.length > 0 ? c?.splice(0, 100).join(",") : void 0,
              lang_list: o,
              origin: self.origin,
            };
            u.push(
              i().get(s, { params: e, cancelToken: a ? a.token : void 0 }),
            );
          }
          try {
            const e = await Promise.all([...u]);
            let t = 0;
            (0, r.h5)(() =>
              e.forEach((e) => {
                if (e && e.data && e.data.events)
                  for (let t of e.data.events) {
                    let e = this.GetEventLookupKey(t);
                    if (!this.m_mapExistingEvents.has(e)) {
                      let e = new m.b(t.clan_steamid);
                      this.InsertEventModelFromClanEventData(e, t);
                    }
                    n.push(this.m_mapExistingEvents.get(e));
                  }
                else {
                  const t = (0, p.H)(e);
                  console.error(
                    "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                      t.strErrorMsg,
                    t,
                  );
                }
                t += 1;
              }),
            );
          } catch (e) {
            const t = (0, p.H)(e);
            console.error(
              "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                t.strErrorMsg,
              t,
            );
          }
          return n;
        }
        async SavePartnerEventSaleAssets(e, t, a) {
          let n = null;
          if (!this.m_mapExistingEvents.has(t)) return !1;
          try {
            const s = `${v.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
              r = new FormData();
            r.append("sessionid", v.TS.SESSIONID),
              r.append("gidclanevent", t),
              r.append("json", JSON.stringify(a));
            const o = await i().post(s, r, { withCredentials: !0 });
            if (1 == o?.data?.success) {
              const e = this.m_mapExistingEvents.get(t);
              for (const t in a)
                a.hasOwnProperty(t) && a[t] && (e.jsondata[t] = a[t]);
              return this.GetPartnerEventChangeCallback(t).Dispatch(e), !0;
            }
            n = (0, p.H)(o);
          } catch (e) {
            n = (0, p.H)(e);
          }
          return (
            console.error(
              "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                n?.strErrorMsg,
              n,
            ),
            !1
          );
        }
      }
      (0, n.Cg)([r.sH], w.prototype, "m_mapExistingEvents", void 0),
        (0, n.Cg)([r.sH], w.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, n.Cg)([r.sH], w.prototype, "m_mapClanToGIDs", void 0),
        (0, n.Cg)([r.sH], w.prototype, "m_mapAppIDToGIDs", void 0),
        (0, n.Cg)([r.sH], w.prototype, "m_mapUpdatedApps", void 0),
        (0, n.Cg)([r.XI], w.prototype, "Init", null),
        (0, n.Cg)([f.oI], w.prototype, "GetPartnerEventChangeCallback", null),
        (0, n.Cg)([r.XI], w.prototype, "RegisterClanEvents", null),
        (0, n.Cg)(
          [r.XI],
          w.prototype,
          "InsertEventModelFromClanEventData",
          null,
        ),
        (0, n.Cg)([r.XI], w.prototype, "DeleteClanEvent", null),
        (0, n.Cg)([r.XI], w.prototype, "RemoveGIDFromList", null),
        (0, n.Cg)([r.XI], w.prototype, "FlushEventFromCache", null),
        (0, n.Cg)([f.oI], w.prototype, "SavePartnerEventSaleAssets", null);
      const S = new w();
      function E(e, t) {
        const [a, n] = (0, y.useState)(() => S.GetClanEventModel(t)),
          s = (0, y.useMemo)(() => m.b.InitFromClanID(e), [e]);
        return (
          (0, y.useEffect)(() => {
            !a &&
              e > 0 &&
              (S.Init(),
              S.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                s,
                t,
                0,
                !0,
              ).then(n));
          }, [s, t, a, e]),
          (0, f.hL)(S.GetPartnerEventChangeCallback(t), n),
          a
        );
      }
      function C() {
        return { fnSaveSaleAssets: S.SavePartnerEventSaleAssets };
      }
      window.g_PartnerEventStore = S;
    },
    3919: (e, t, a) => {
      "use strict";
      a.d(t, {
        PH: () => d,
        _: () => m,
        tj: () => S,
        qT: () => b,
        Hx: () => w,
        LJ: () => f,
        Bd: () => g,
        cq: () => v,
      });
      var n = a(90626),
        s = a(92757),
        i = a(45699),
        r = a(44332),
        o = a(78327);
      const l = n.createContext({ bCanUseLink: !1 });
      var d,
        m,
        c = a(55963),
        u = a(61336),
        p = a(60014);
      !(function (e) {
        (e.k_eView = "view"),
          (e.k_eViewWebSiteHub = "websitehub"),
          (e.k_eCommunityView = "communityview"),
          (e.k_eCommunityEdit = "edit"),
          (e.k_eCommunityEditBroadcast = "editBroadcast"),
          (e.k_eCommunityAdminPage = "admin"),
          (e.k_eCommunityPublish = "publish"),
          (e.k_eCommunityMigrate = "migrate"),
          (e.k_eCommunityPreview = "preview"),
          (e.k_eCommunityPreviewSale = "previewsale"),
          (e.k_eCommunityAnnouncementHub = "community_announcehub"),
          (e.k_eStoreView = "storeview"),
          (e.k_eStoreNewsHub = "newshub"),
          (e.k_eStoreOwnerPage = "store"),
          (e.k_eStoreSalePage = "sale"),
          (e.k_eStoreUsersNewsHub = "usernewshub");
      })(d || (d = {})),
        (function (e) {
          (e.k_eFacebook = "facebook"),
            (e.k_eTwitter = "twitter"),
            (e.k_eReddit = "reddit");
        })(m || (m = {}));
      const _ =
        /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
      function h(e, t) {
        const a = "store" === (0, o.yK)(),
          n = (function (e) {
            const t = e.match(_);
            return t?.[1];
          })(window.location.href),
          s = a && "news" == n,
          i = "community" === (0, o.yK)(),
          l = t.appid ? "games" : "groups",
          m =
            i &&
            l == n &&
            ((t.appid && t.appid === o.UF.APPID) ||
              (!t.appid &&
                t.clanSteamID.GetAccountID() === o.UF.CLANACCOUNTID));
        switch (e) {
          case d.k_eView:
            return m || s;
          case d.k_eCommunityView:
          case d.k_eCommunityEdit:
          case d.k_eCommunityEditBroadcast:
          case d.k_eCommunityAdminPage:
          case d.k_eCommunityPublish:
          case d.k_eCommunityMigrate:
          case d.k_eCommunityPreview:
          case d.k_eCommunityPreviewSale:
          case d.k_eCommunityAnnouncementHub:
            return m;
          case d.k_eViewWebSiteHub:
            return m || s;
          case d.k_eStoreView:
          case d.k_eStoreNewsHub:
          case d.k_eStoreOwnerPage:
          case d.k_eStoreUsersNewsHub:
            return s;
          case d.k_eStoreSalePage:
            return !1;
          default:
            return (0, r.w)(!1, "Unknown route specified for link: " + e), !1;
        }
      }
      function g(e, t) {
        const a =
          o.TS.COMMUNITY_BASE_URL +
          "gid/" +
          e.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          e.AnnouncementGID +
          "?site=" +
          t;
        return t === m.k_eFacebook ? a + "&t=" + Math.random() : a;
      }
      function v(e) {
        return I(e, d.k_eStoreView, "absolute");
      }
      function y(e, t, a) {
        if (a)
          return (
            (e ? "/games/" + o.UF.VANITY_ID : "/groups/" + o.UF.VANITY_ID) + "/"
          );
        const n = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return o.TS.COMMUNITY_BASE_URL + n + "/";
      }
      function f() {
        return "news";
      }
      function I(e, t, a) {
        const n = "relative" === a,
          s = "community" === (0, o.yK)(),
          i = n ? "/" : o.TS.STORE_BASE_URL,
          l = y(e.appid, e.clanSteamID, n);
        t === d.k_eView
          ? (t = s ? d.k_eCommunityView : d.k_eStoreView)
          : t === d.k_eViewWebSiteHub &&
            (t = s ? d.k_eCommunityAnnouncementHub : d.k_eStoreNewsHub);
        const m = e.GID ? e.GID : "",
          c = e.AnnouncementGID ? e.AnnouncementGID : "";
        switch (t) {
          case d.k_eCommunityPublish:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + c
                : "partnerevents/publish/" + m + "?tab=publishing")
            );
          case d.k_eCommunityEdit:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + c
                : "partnerevents/edit/" + m)
            );
          case d.k_eCommunityEditBroadcast:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + c
                : "partnerevents/edit/" + m) +
              "?tab=broadcast"
            );
          case d.k_eCommunityMigrate:
            return l + "partnerevents/migrate_announcement/" + c;
          case d.k_eCommunityPreview:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/preview_old_announcement/" + c
                : "partnerevents/preview/" + m)
            );
          case d.k_eCommunityPreviewSale:
            return l + "partnerevents/previewsale/" + m;
          case d.k_eCommunityAdminPage:
            return l + "partnerevents";
          case d.k_eCommunityAnnouncementHub:
            return l + "announcements";
          case d.k_eStoreNewsHub:
            return (
              i +
              `news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}`
            );
          case d.k_eStoreOwnerPage:
            return (
              i +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case d.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? i +
                  (e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
                    ? "sale/"
                    : "curator/" + e.clanSteamID.GetAccountID() + "/sale/") +
                  e.jsondata.sale_vanity_id
              : i;
          case d.k_eCommunityView:
            return l + "announcements/detail/" + c;
          case d.k_eStoreView:
            return `${i}news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}/${e.bOldAnnouncement ? `old_view/${c}` : `view/${m}`}`;
          case d.k_eStoreUsersNewsHub:
            return `${i}news/`;
          default:
            return (0, r.w)(!1, "Unknown route specified for link"), "";
        }
      }
      function b(e, t, a) {
        return I(
          e,
          t,
          "forceAbsolute" === a || !h(t, e) ? "absolute" : "relative",
        );
      }
      function w(e, t, a) {
        const n = y(e, t, !1);
        return "admin" === a ? n + "partnerevents" : "";
      }
      function S(e) {
        const { preferredFocus: t } = e,
          { bCanUseLink: a } = n.useContext(l),
          r = (0, p.n9)(),
          o = (0, s.W6)();
        if (!e.eventModel) return null;
        const d = a && h(e.route, e.eventModel),
          m = I(e.eventModel, e.route, d ? "relative" : "absolute"),
          _ = d ? m : (0, u.NT)(m),
          g = d ? _ : (0, c.wJ)(_, r);
        return d
          ? n.createElement(
              i.Ii,
              {
                style: e.style,
                className: e.className,
                href: o.createHref({ pathname: g }),
                onClick: (t) => {
                  e.onClick?.(t), o.push(g), t.preventDefault();
                },
                preferredFocus: t,
              },
              e.children,
            )
          : n.createElement(
              i.Ii,
              {
                href: g,
                style: e.style,
                className: e.className,
                onClick: e.onClick,
                preferredFocus: t,
              },
              e.children,
            );
      }
    },
    82477: (e, t, a) => {
      "use strict";
      a.d(t, { vg: () => c });
      var n = a(90626),
        s = a(738),
        i = a(61859),
        r = a(78327),
        o = a(97436),
        l = a(96059),
        d = a(28240);
      a(9154);
      function m(e) {
        return n.createElement(
          s.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          n.createElement(u, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function c() {
        (0, s.pg)(
          n.createElement(m, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, i.we)("#Login_SignInTitle") },
        );
      }
      function u(e) {
        const { redirectURL: t, guestOption: a } = e,
          [s] = (0, n.useState)(
            new l.D(r.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [i, m] = (0, n.useState)(!1);
        return n.createElement(
          "div",
          null,
          i
            ? n.createElement(o.Fn, null)
            : n.createElement(
                o.YN,
                {
                  autoFocus: !0,
                  transport: s,
                  platform: 2,
                  onComplete: (e) => {
                    e == d.wI.k_PrimaryDomainFail
                      ? m(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                a && n.createElement(o.Mk, { redirectURL: t }),
              ),
        );
      }
    },
    82227: (e, t, a) => {
      "use strict";
      a.d(t, { Dq: () => i, NO: () => r, dm: () => s });
      var n = a(61859);
      function s(e, t, a, s) {
        let i = t;
        i =
          "number" == typeof i
            ? {
                nDigitsAfterDecimal: t,
                bUseBinary1K: a || void 0 === a,
                bValueIsInBytes: !s,
                bValueIsRate: s,
                nMinimumDigitsAfterDecimal: 0,
              }
            : {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...i,
              };
        const r = i.bUseBinary1K ? 1024 : 1e3,
          o = r * r,
          l = o * r,
          d = l * r;
        let m,
          c = "";
        e > d
          ? ((m = e / d), (c = "Tera"))
          : e > l
            ? ((m = e / l), (c = "Giga"))
            : e > o
              ? ((m = e / o), (c = "Mega"))
              : e > r
                ? ((m = e / r), (c = "Kilo"))
                : (m = e);
        const u =
          "#" +
          c +
          (i.bValueIsInBytes ? "bytes" : "bits") +
          (i.bValueIsRate ? "_PerSecond" : "");
        return (0, n.we)(
          u,
          m.toLocaleString(n.pf.GetPreferredLocales(), {
            minimumFractionDigits: i.nMinimumDigitsAfterDecimal,
            maximumFractionDigits: i.nDigitsAfterDecimal,
          }),
        );
      }
      function i(e) {
        return e ? e.toLocaleString(n.pf.GetPreferredLocales()) : "" + e;
      }
      function r(e) {
        return e > 1e9
          ? Math.trunc(e / 1e9).toString() + "B"
          : e > 1e6
            ? Math.trunc(e / 1e6).toString() + "M"
            : e > 1e3
              ? Math.trunc(e / 1e3).toString() + "K"
              : e.toString();
      }
    },
    27543: (e, t, a) => {
      "use strict";
      a.d(t, { JS: () => s, rG: () => i });
      var n = a(61859);
      function s(e) {
        switch (e) {
          case 29:
          case 27:
          case 2:
          case 4:
          case 5:
          case 6:
          case 8:
          case 7:
          case 9:
          case 11:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
          case 35:
          case 25:
          case 26:
          case 31:
          case 32:
          case 1:
          case 34:
            return !0;
        }
        return !1;
      }
      function i(e) {
        let t = "#PartnerEvent_" + e,
          a = (0, n.we)(t);
        return a != t ? a : (0, n.we)("#PartnerEvent_Other");
      }
    },
  },
]);
