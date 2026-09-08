var _ = /^(steam|ftp|https?):\/\//;
function _(_) {
  return _.test(_) ? _ : `https://` + _;
}
function _(_) {
  return _;
}
function _(_, _, _) {
  if (typeof _ != `object` || !_) return;
  let _ = _.getMutationCache(),
    _ = _.getQueryCache(),
    _ =
      _?.defaultOptions?.deserializeData ??
      _.getDefaultOptions().hydrate?.deserializeData ??
      _,
    _ = _.mutations || [],
    _ = _.queries || [];
  _.forEach(({ state: _, ..._ }) => {
    _.build(
      _,
      {
        ..._.getDefaultOptions().hydrate?.mutations,
        ..._?.defaultOptions?.mutations,
        ..._,
      },
      _,
    );
  }),
    _.forEach(
      ({ queryKey: _, state: _, queryHash: _, meta: _, promise: _ }) => {
        let _ = _.get(_),
          _ = _.data === void 0 ? _.data : _(_.data);
        if (_) {
          if (_.state.dataUpdatedAt < _.dataUpdatedAt) {
            let { fetchStatus: _, ..._ } = _;
            _.setState({
              ..._,
              data: _,
            });
          }
        } else
          _ = _.build(
            _,
            {
              ..._.getDefaultOptions().hydrate?.queries,
              ..._?.defaultOptions?.queries,
              queryKey: _,
              queryHash: _,
              meta: _,
            },
            {
              ..._,
              data: _,
              fetchStatus: `idle`,
            },
          );
        if (_) {
          let _ = Promise.resolve(_).then(_);
          _.fetch(void 0, {
            initialPromise: _,
          });
        }
      },
    );
}
var _ = _(_(), 1),
  _ = ({ children: _, options: _ = {}, state: _, queryClient: _ }) => {
    let _ = _(_),
      [_, _] = _.useState(),
      _ = _.useRef(_);
    return (
      (_.current = _),
      _.useMemo(() => {
        if (_) {
          if (typeof _ != `object`) return;
          let _ = _.getQueryCache(),
            _ = _.queries || [],
            _ = [],
            _ = [];
          for (let _ of _) {
            let _ = _.get(_.queryHash);
            if (!_) _.push(_);
            else {
              let _ = _.state.dataUpdatedAt > _.state.dataUpdatedAt,
                _ = _?.find((_) => _.queryHash === _.queryHash);
              _ &&
                (!_ || _.state.dataUpdatedAt > _.state.dataUpdatedAt) &&
                _.push(_);
            }
          }
          _.length > 0 &&
            _(
              _,
              {
                queries: _,
              },
              _.current,
            ),
            _.length > 0 && _((_) => (_ ? [..._, ..._] : _));
        }
      }, [_, _, _]),
      _.useEffect(() => {
        _ &&
          (_(
            _,
            {
              queries: _,
            },
            _.current,
          ),
          _(void 0));
      }, [_, _]),
      _
    );
  },
  _ = {
    unknown: 0,
    "store.steampowered.com": 1,
    "steamcommunity.com": 2,
    global: 3,
    default: 4,
    application: 5,
    subscription: 6,
    search: 7,
    cart: 8,
    app: 9,
    "global-nav": 10,
    "global-account": 11,
    storemenu: 12,
    "search-suggestion": 13,
    about: 14,
    suggest: 15,
    dlc: 16,
    "storemenu-recommendedtags": 17,
    creator: 18,
    "footer-genre-dropdown": 20,
    "footer-category-dropdown": 21,
    "footer-about-dropdown": 22,
    "footer-help-dropdown": 23,
    "footer-publisher-catalogs": 24,
    wishlist: 25,
    stats: 26,
    spotlight: 40,
    message: 41,
    "marketing-message": 42,
    "daily-deal": 43,
    footer: 44,
    header: 45,
    name: 46,
    "more-details": 47,
    notification: 48,
    category: 49,
    steamdeck: 50,
    login: 60,
    prompt: 61,
    "join-steam": 62,
    "successful-login": 63,
    "successful-joinsteam": 64,
    recommendations: 70,
    categories: 71,
    hardware: 72,
    waystoplay: 73,
    specialsections: 74,
    more: 75,
    "big-category-link": 76,
    "small-category-link": 77,
    "package-purchase-recommendations": 78,
    popular: 79,
    recent: 80,
    "main-cluster": 100,
    "featured-win-games": 101,
    "featured-mac-games": 102,
    "tab-NewReleases": 103,
    "tab-TopSellers": 104,
    "tab-ComingSoon": 105,
    "tab-Discounts": 106,
    "smallcap-videos": 107,
    "smallcap-demos": 108,
    "home-headlines": 109,
    "community-activity": 110,
    "home-underten": 111,
    "home-specials": 112,
    "home-partners": 113,
    "home-steam-install": 114,
    "community-activity-recentlyplayed": 115,
    "community-activity-recentlybought": 116,
    "promo-banner": 117,
    "promo-takeover": 118,
    "featured-linux-games": 119,
    "updated-games": 120,
    "featured-updated-games": 121,
    "discovery-queue": 122,
    "new-on-steam": 123,
    "curated-app": 124,
    "home-gutter": 125,
    "upcoming-queue": 126,
    "home-specials-under10": 127,
    "main-cluster-recommended": 128,
    "main-cluster-topseller": 129,
    "main-cluster-newonsteam": 130,
    "recommended-spotlight": 131,
    "hardware-promo": 132,
    "popular-new-on-steam": 133,
    "main-cluster-recommended-byfriends": 134,
    "main-cluster-recommended-bycurators": 135,
    "main-cluster-recenttopseller": 136,
    "home-under10": 137,
    "friends-trending": 138,
    "spotlight-specials": 139,
    "curator-recommended": 140,
    "best-selling-vr": 141,
    "creator-recommendations": 142,
    "live-broadcast": 143,
    "main-cluster-followed-creator": 144,
    "tab-PopularNewReleases": 145,
    "home-big-blue-buttons": 146,
    "home-banner": 147,
    "top-new-releases": 148,
    "curated-main-app": 149,
    "search-results": 150,
    query: 151,
    "search-share": 152,
    genre: 200,
    "large-cluster": 201,
    "find-more": 202,
    "friend-activity": 203,
    specials: 2300,
    breadcrumbs: 205,
    freestuff: 220,
    demos: 1900,
    "tab-NewDemos": 222,
    "tab-TopDemos": 223,
    "browse-demos": 224,
    videos: 100002,
    "popular-videos": 226,
    "tab-NewVideos": 227,
    browse: 230,
    mac: 231,
    under10: 232,
    under5: 233,
    publisher: 234,
    publishers: 235,
    "publisher-listing": 236,
    tag: 237,
    gettaggames: 238,
    explore: 239,
    "browse-tags": 240,
    tags: 241,
    "content-hub-carousel": 242,
    Action: 250,
    Adventure: 251,
    Strategy: 252,
    RPG: 253,
    Indie: 254,
    "Massively Multiplayer": 255,
    Casual: 256,
    Family: 257,
    Simulation: 258,
    Racing: 259,
    Sports: 260,
    recommended: 300,
    "recommendation-main": 301,
    "friend-recommendations": 302,
    "recommended-friendplaytime": 303,
    "recommended-recentlyviewed": 304,
    "recommended-morerecentlyviewed": 305,
    "recommended-genrehighlights": 306,
    morelike: 307,
    "morelike-mainitem": 308,
    "friendactivity.js": 309,
    "friendactivity-wishlist-spotlight": 310,
    "friendactivity-purchases": 311,
    "friendactivity-playedandwanted": 312,
    byafriend: 313,
    "friend-recommendation": 314,
    ajaxgetfriendactivity: 315,
    "recommend-franchise": 316,
    "more-from-franchise": 317,
    "wishlist-capsule": 318,
    "game-highlights": 400,
    "recommend-game": 401,
    "view-own-recommendation": 402,
    "game-purchase": 403,
    "game-purchase-guide": 404,
    "game-purchase-dlc": 405,
    "game-friend-recommendations": 406,
    "game-add-to-wishlist": 407,
    "game-details": 408,
    "game-highlight-tags": 409,
    "game-tags-dialog": 410,
    "game-tags-yours": 411,
    "bundle-component-preview": 412,
    "dlc-parent-app-link": 413,
    "similar-recent-apps": 414,
    "demo-parent-app-link": 415,
    "package-purchase": 420,
    "package-contents": 421,
    "package-details": 422,
    "category-list": 423,
    bundle: 430,
    "bundle-contents": 431,
    "cart-remove-item": 500,
    "cart-items": 501,
    "cart-continue-shopping": 502,
    "cart-purchase": 503,
    "checkout-logo-abandon": 504,
    "checkout-success": 505,
    checkout: 506,
    gift: 507,
    self: 508,
    "checkout-complete-return": 509,
    "checkout-complete-logo": 510,
    purchaserequest: 511,
    display: 512,
    initial: 513,
    gifts: 514,
    "upsell-recommended": 520,
    "upsell-specials": 521,
    "external-site": 550,
    facebook: 551,
    twitter: 552,
    referral: 553,
    summersale: 600,
    prizebooth: 610,
    "activity-game-link": 611,
    "activity-game-discount": 612,
    "prize-info": 613,
    promotion: 614,
    sale: 615,
    "sale-item": 616,
    "sale-dailydeals": 617,
    "sale-publishers": 618,
    "sale-genres": 619,
    email: 620,
    "cart-icon": 621,
    "sale-category-links": 622,
    "sale-notification-callout": 623,
    "sale-yesterdaydeals": 624,
    "sale-flashsales": 625,
    "sale-fromyourwishlist": 626,
    "closed-beta-access": 627,
    "sale-tag-bucket": 628,
    "sale-hero": 629,
    "sale-franchises": 630,
    "sale-dlcforyou": 631,
    "sale-recommended-by-steam-labs": 632,
    "sale-recommended-by-deep-dive": 633,
    "sale-dailydeals-tier2": 634,
    "sale-deep-discounts": 635,
    "sale-deck-mostplayed": 636,
    "home-chart-deckmostplayed": 637,
    "home-deck-banner": 638,
    "sale-tag-bucket-top": 639,
    "sale-dailydeals-none": 640,
    "sale-dailydeals-tags": 641,
    "sale-dailydeals-ir": 642,
    "sale-dailydeals-tier2-none": 645,
    "sale-dailydeals-tier2-tags": 646,
    "sale-dailydeals-tier2-ir": 647,
    "sale-hero-none": 650,
    "sale-hero-tags": 651,
    "sale-hero-ir": 652,
    autumnsale: 660,
    wintersale: 661,
    yearinreview: 662,
    springsale: 663,
    mobileapp: 700,
    summary: 701,
    mobilestorefront: 702,
    home: 703,
    "winter2012-today-square": 800,
    "winter2012-today-square-button": 801,
    "winter2012-hires": 802,
    "winter2012-hires-button": 803,
    "winter2012-yesterday-square": 804,
    "winter2012-yesterday-square-button": 805,
    "winter2012-flash": 806,
    "winter2012-flash-button": 807,
    "winter2012-pack": 808,
    "winter2012-pack-button": 809,
    "winter2012-topsellers": 810,
    "winter2012-topsellers-button": 811,
    "winter2012-vote-winner": 812,
    "winter2012-vote-winner-button": 821,
    "winter2012-vote-option-voting": 813,
    "winter2012-vote-option-voted": 814,
    "winter2012-nav": 815,
    "winter2012-500-callout": 816,
    "winter2012-500-callout-button": 820,
    "winter2012-featured": 817,
    "winter2012-lower-nav": 822,
    "winter2012-vote-option-vote-results": 823,
    "fall2014-48": 850,
    "fall2014-24": 851,
    "fall2014-TopSellers": 852,
    "fall2014-Upcoming": 853,
    "fall2014-Under10": 854,
    "fall2014-Under5": 855,
    "fall2014-PopularNewReleases": 856,
    "fall2014-specials-more": 857,
    "fall2014-recommend-wishlist": 858,
    "fall2014-recommend-contentforyourgames": 859,
    renderspecials: 860,
    recommend: 861,
    "recommended-ranked-played": 862,
    "redeem-wallet-complete-return": 900,
    "redeem-wallet-complete-return-app": 901,
    updated: 1e3,
    curators: 1050,
    curatorrecommendations: 1051,
    ajaxgetcuratorrecommendations: 1052,
    curatorscombinedrecommendations: 1053,
    ajaxgetcombinedrecommendations: 1054,
    curatorlist: 1055,
    curator: 1056,
    curatorfeaturedlist: 1057,
    curator_featured_list: 1057,
    mycuratorsreviewing: 1058,
    creatorfeaturedrecs: 1059,
    new_dlc: 1060,
    "browse-dlc": 1061,
    curatorlistcapsule: 1062,
    widget: 1100,
    appvisibilitystats: 1101,
    render: 1200,
    "recommendationfeed-single-friends": 1210,
    "recommendationfeed-single-curators": 1211,
    "recommendationfeed-single-recent": 1212,
    "recommendationfeed-single-wishlist": 1213,
    "recommendationfeed-single-played": 1214,
    "recommendationfeed-two": 1250,
    "recommendationfeed-four": 1251,
    "winter2014-featured": 1300,
    "winter2014-yesterday": 1301,
    "winter2014-flash": 1302,
    "winter2014-flash2": 1303,
    "winter2014-vote": 1304,
    "winter2014-specials-more": 1305,
    "winter2014-recommend-wishlist": 1306,
    "winter2014-frontpage-wishlist": 1307,
    "winter2014-TopSellers": 1308,
    "winter2014-Upcoming": 1309,
    "winter2014-Under10": 1310,
    "winter2014-Under5": 1311,
    "winter2014-PopularNewReleases": 1312,
    "winter2017-FeaturedBanner": 1313,
    "summer2018-standardview-curated": 1314,
    "summer2018-standardview-recommend-basic": 1315,
    "summer2018-standardview-recommend-neural": 1316,
    "summer2018-mergedview-curated": 1317,
    "summer2018-mergedview-recommend-neural": 1318,
    "summer2018-salien-giveaway": 1319,
    "summer2018-creator-recommend": 1320,
    "summer2018-live-stream": 1321,
    "sale-vr": 1322,
    "sale-moddable": 1323,
    "discovery-queue-0": 1324,
    "wishlist-onsale": 1400,
    "wishlist-newrelease": 1401,
    "greenlight-newrelease": 1402,
    "sales-event-enhanced": 1403,
    "creator-newrelease": 1404,
    "generic-onsale": 1405,
    "topsellers-onsale": 1406,
    "recommended-onsale": 1407,
    "demo-newrelease": 1408,
    "Free to Play": 1420,
    "tab-mostplayednewreleases": 1421,
    "tab-mostplayed": 1422,
    "tab-comingsoon": 1423,
    "tab-discounts": 1424,
    "tab-ConcurrentUsers": 1454,
    _: 1453,
    "hub-vr-recommended": 1455,
    "hub-vr-specials": 1459,
    "hub-vr-featured": 1463,
    "hub-vr-takeover": 1467,
    games: 1452,
    "hub-games-recommended": 1456,
    "hub-games-specials": 1460,
    "hub-games-featured": 1464,
    "hub-games-takeover": 1468,
    software: 1451,
    "hub-software-recommended": 1457,
    "hub-software-specials": 1461,
    "hub-software-featured": 1465,
    "hub-software-takeover": 1469,
    "hub-videos-recommended": 1458,
    "hub-videos-specials": 1462,
    "hub-videos-featured": 1466,
    "hub-videos-takeover": 1470,
    macos: 1480,
    "hub-macos-recommended": 1481,
    "hub-macos-specials": 1482,
    "hub-macos-featured": 1483,
    "hub-macos-takeover": 1484,
    linux: 1490,
    "hub-linux-recommended": 1491,
    "hub-linux-specials": 1492,
    "hub-linux-featured": 1493,
    "hub-linux-takeover": 1494,
    controller: 1500,
    "hub-controller-recommended": 1501,
    "hub-controller-specials": 1502,
    "hub-controller-featured": 1503,
    "hub-controller-takeover": 1504,
    freetoplay: 1510,
    "hub-freetoplay-recommended": 1511,
    "hub-freetoplay-specials": 1512,
    "hub-freetoplay-featured": 1513,
    "hub-freetoplay-takeover": 1514,
    earlyaccess: 1520,
    "hub-earlyaccess-recommended": 1521,
    "hub-earlyaccess-specials": 1522,
    "hub-earlyaccess-featured": 1523,
    "hub-earlyaccess-takeover": 1524,
    pccafe: 1530,
    "hub-pccafe-recommended": 1531,
    "hub-pccafe-specials": 1532,
    "hub-pccafe-featured": 1533,
    "hub-pccafe-takeover": 1534,
    remoteplayphone: 1540,
    "hub-remoteplayphone-recommended": 1541,
    "hub-remoteplayphone-specials": 1542,
    "hub-remoteplayphone-featured": 1543,
    "hub-remoteplayphone-takeover": 1544,
    remoteplaytablet: 1550,
    "hub-remoteplaytablet-recommended": 1551,
    "hub-remoteplaytablet-specials": 1552,
    "hub-remoteplaytablet-featured": 1553,
    "hub-remoteplaytablet-takeover": 1554,
    remoteplaytv: 1560,
    "hub-remoteplaytv-recommended": 1561,
    "hub-remoteplaytv-specials": 1562,
    "hub-remoteplaytv-featured": 1563,
    "hub-remoteplaytv-takeover": 1564,
    remoteplaytogether: 1570,
    "hub-remoteplaytogether-recommended": 1571,
    "hub-remoteplaytogether-specials": 1572,
    "hub-remoteplaytogether-featured": 1573,
    "hub-remoteplaytogether-takeover": 1574,
    "remote-play-about": 1580,
    remoteplay: 1581,
    turnbasedrpg: 1582,
    arcaderhythm: 1583,
    greatondeck: 1584,
    remoteplaylanding: 1585,
    fightingmartialarts: 1586,
    actionfps: 1587,
    hackandslash: 1588,
    actionrunjump: 1589,
    shmup: 1590,
    adventure: 1591,
    action: 1592,
    adventurerpg: 1593,
    hiddenobject: 1594,
    metroidvania: 1595,
    puzzlematching: 1596,
    storyrich: 1597,
    visualnovel: 1598,
    casual: 1559,
    querypaginated: 1600,
    n_section: 1601,
    rpgjrpg: 1602,
    rpgpartybased: 1603,
    roguelikeroguelite: 1604,
    rpgaction: 1605,
    rpg: 1606,
    rpgstrategytactics: 1607,
    rpgturnbased: 1608,
    simulation: 1609,
    simbuildingautomation: 1610,
    simdating: 1611,
    simfarmingcrafting: 1612,
    simhobbysim: 1613,
    simlife: 1614,
    simphysicssandbox: 1615,
    simspaceflight: 1616,
    strategy: 1617,
    strategycardboard: 1618,
    strategycitiessettlements: 1619,
    soundtracks: 1620,
    "hub-soundtracks-recommended": 1621,
    "hub-soundtracks-specials": 1622,
    "hub-soundtracks-featured": 1623,
    "hub-soundtracks-takeover": 1624,
    strategygrand4x: 1625,
    strategymilitary: 1626,
    strategyrealtime: 1627,
    towerdefense: 1628,
    strategyturnbased: 1629,
    sportsandracing: 1630,
    sports: 1631,
    sportsfishinghunting: 1632,
    sportsindividual: 1633,
    racing: 1634,
    racingsim: 1635,
    sportssim: 1636,
    sportsteam: 1637,
    anime: 1638,
    horror: 1639,
    mysterydetective: 1640,
    explorationopenworld: 1641,
    sciencefiction: 1642,
    space: 1643,
    survival: 1644,
    multiplayercoop: 1645,
    multiplayerlan: 1646,
    multiplayerlocalparty: 1647,
    multiplayermmo: 1648,
    multiplayer: 1649,
    multiplayeronlinecompetitive: 1650,
    singleplayer: 1651,
    upcoming: 1700,
    "comingsoon-recommendedcomingsoon": 1701,
    "comingsoon-popularwishlist": 1702,
    "comingsoon-newdlc": 1703,
    "comingsoon-followedcreator": 1704,
    "comingsoon-mywishlist": 1705,
    "comingsoon-largecap": 1706,
    "tab-PopularUpcoming": 1707,
    "tab-AllUpcoming": 1708,
    "in-library-game-event-update": 1800,
    "on-wishlist-game-event-update": 1801,
    "in-library-game-remind-me": 1802,
    "hub-demos-recommended": 1901,
    "hub-demos-specials": 1902,
    "hub-demos-featured": 1903,
    "hub-demos-takeover": 1904,
    "creator-home-product-page": 2e3,
    "franchise-home-link": 2001,
    ajaxgetappinfoforcap: 2100,
    "partner-events": 2101,
    "library-partner-events": 2102,
    "store-partner-events": 2103,
    "steamtv-partner-events": 2104,
    "community-partner-events": 2105,
    "partnerweb-partner-events": 2106,
    "store-calendar-partner-events": 2107,
    events: 2108,
    subscriptions: 2109,
    _: 2110,
    subscriptionplansea: 2111,
    download_event: 2112,
    reminder: 2113,
    steamtv: 2200,
    "hub-specials-recommended": 2301,
    "hub-specials-specials": 2302,
    "hub-specials-featured": 2303,
    "hub-specials-takeover": 2304,
    recommender: 2400,
    "recommended-by-steam-labs": 2401,
    labs: 2500,
    automaticshow: 2501,
    microtrailers: 2502,
    "now-playing": 2503,
    deepdive: 2504,
    "game-add-to-wishlist-deepdive": 2505,
    dbdetailsmulti: 2506,
    dbgetlinkparam: 2507,
    "recommended-by-deep-dive": 2508,
    "recommended-by-deep-dive-carousel": 2509,
    "recommended-by-deep-dive-carousel_default": 2510,
    "recommended-by-deep-dive-carousel_cluster_recent": 2511,
    "recommended-by-deep-dive-carousel_cluster_games": 2512,
    "recommended-by-deep-dive-carousel_cluster_playtime": 2513,
    "recommended-by-deep-dive-carousel-default": 2514,
    "recommended-by-deep-dive-carousel-cluster-recent": 2515,
    "recommended-by-deep-dive-carousel-cluster-games": 2516,
    "recommended-by-deep-dive-carousel-cluster-playtime": 2517,
    trendingreviews: 2600,
    ajaxgetrecentreviews: 2601,
    "community-recommendations": 2602,
    lunarnewyear2020: 2700,
    lunarnewyear: 2701,
    lunarnewyearmarket: 2702,
    "steam-logo": 2750,
    "sale-banner": 2751,
    "sale-button-top": 2752,
    "sale-button-bottom": 2753,
    "wishlist-button-bottom": 2754,
    "footer-steam-logo": 2755,
    steamclient: 5e3,
    library: 5100,
    friendsui: 5200,
    friendcontextmenu: 5201,
    nextfest: 6e3,
    topsellers: 7e3,
    steamcharts: 7001,
    weeklytopsellers: 7002,
    topchartlist: 7003,
    overview: 7004,
    mostplayed: 7005,
    salesmartdailyactiveuserdemo: 7006,
    salesmartmostplayeddemo: 7007,
    salesmartdecktopplayed: 7008,
    salesmartcategory: 7009,
    vrhardwarelanding: 7010,
    monthlytopreleases: 7011,
    bestofyear: 7012,
    apphome: 1e5,
    images: 100001,
    allnews: 100003,
    news: 100004,
    announcements: 100005,
    discussions: 100006,
    reporteddiscussions: 100007,
    tradingforum: 100008,
    guides: 100009,
    reviews: 100010,
    positivereviews: 100011,
    negativereviews: 100012,
    workshop: 100013,
    broadcasts: 100014,
    eventcomments: 100015,
    sharedfiles: 100100,
    filedetails: 100101,
    screenshot: 100102,
    workshopitem: 100103,
    mtxitem: 100104,
    collection: 100105,
    guide: 100106,
    integratedguide: 100107,
    merch: 100108,
    artwork: 100109,
    video: 100110,
    topicsearch: 100201,
    singletopic: 100202,
    profiles: 100300,
    review: 100301,
    profileshowcase: 100302,
    broadcast: 100400,
    watch: 100401,
    friendactivityfeed: 100500,
    announcement: 100501,
    curatorreview: 100502,
    friendpurchase: 100503,
    workshopitempublished: 100504,
    artworkpublished: 100505,
    screenshotpublished: 100506,
    guidepublished: 100507,
    collectionpublished: 100508,
    itemfavorited: 100509,
    userreviewpublished: 100510,
    "partner.steamgames.com": 100600,
    "help.steampowered.com": 100601,
    salecreatorhome: 100700,
    saleitembrowse: 100701,
    salefacetbrowse: 100702,
    salesection: 100703,
    saletabsection: 100704,
    salebroadcast: 100705,
    salecuratorrec: 100706,
    saleeventsched: 100707,
    salesubscription: 100708,
    saleitemsearch: 100709,
    salesmartwishlist: 100710,
    salesmartir: 100711,
    salesmartdlc: 100712,
    salesmarttagrec: 100713,
    salebrowsetopwishlisted: 100714,
    salebrowsetrendingwishlisted: 100715,
    salebrowsepopularcomingsoon: 100716,
    salebrowsemostplayeddemo: 100717,
    salebrowsedailyactiveuserdemo: 100718,
    salebrowseplayednowdemo: 100719,
    salebrowserecentlyreleased: 100720,
    salebrowsepopularpurchased: 100721,
    salebrowsepopularpurchaseddiscounted: 100722,
    salebrowsediscounted: 100723,
    salebrowseprice: 100724,
    salebrowsenewandtrending: 100725,
    salebrowsetopsellers: 100726,
    salebrowsetoprated: 100727,
    discoveryqueue2022: 100728,
    saleeventsection: 100729,
    salesectionlinks: 100730,
    salesectionrewards: 100731,
    salesectiontext: 100732,
    salesectioneventschedule: 100733,
    salesmartpersonalizedcarousel: 100734,
    "promo-takeunder": 100735,
    salesmartwr: 100736,
    salesmartwishlist_allsale: 100737,
    salesmartir_allsale: 100738,
    autopopulatetag: 100739,
    autopopulatecategory: 100740,
    salesmartrecentevents: 100741,
    seasonpassproductpage: 100742,
    itemcollections: 100743,
    crosspromotesalepage: 100744,
    "mm-auto-render": 100745,
    salequiz: 100746,
    templatemediacontent: 100747,
    templatefaq: 100748,
    templatetechspec: 100749,
    topnewreleases: 100750,
    newreleases: 100751,
    salebrowsetrendingfree: 100752,
    trendingfree: 100753,
    reactroot: 100754,
    bundlelist: 100755,
    verifiedprogram: 100756,
    trailercarousel: 100757,
    "personalcalendar-lastmonth": 100800,
    "personalcalendar-lastweek": 100801,
    "personalcalendar-calendar": 100802,
    "personalcalendar-homepage": 100803,
    greatonframe: 100804,
  },
  _ = [4145017, 35143931, 39049601, 4, 41316928];
function _(_) {
  return _ in _;
}
var _ = class _ {
    static InstrumentLink(_, _, _ = null) {
      let _ = _.GetSNRLinkParam(_, _),
        _ = _.GetCuratorClanIDParam(_);
      return _.AddNavParamToURL(_, _, _);
    }
    static ParseSNR(_) {
      let _ = _.split(`_`) || [];
      return {
        domain: _.DecodeEventComponent(_[0]),
        controller: _.DecodeEventComponent(_[1]),
        method: _.DecodeEventComponent(_[2]),
        submethod: _.DecodeEventComponent(_[3]),
        feature: _.DecodeEventComponent(_[4]),
        depth: _[5] ? Number(_[5]) : void 0,
      };
    }
    static GetSNRLinkParam(_, _ = null) {
      let _ = _.ComputeLinkPrefix(
        _.domain,
        _.controller,
        _.method,
        _.submethod,
      );
      _ = _ ?? _.depth ?? null;
      let _ = _.EncodeEventComponent(_.feature);
      return _ && ((_ += `_` + _), _ && (_ += `_` + _)), _;
    }
    static GetCuratorClanIDParam(_) {
      return _.curator_clanid ?? null;
    }
    static AddNavParamToURL(_, _, _) {
      if (!_ || _.length == 0) return _;
      try {
        let _ = new URL(_(_)),
          _ = new URLSearchParams(_.search);
        return (
          _.set(`snr`, encodeURIComponent(_ ?? ``)),
          _ &&
            !_.includes(_) &&
            _.set(`curator_clanid`, encodeURIComponent(_ ?? ``)),
          _.origin + _.pathname + `?` + _.toString() + _.hash
        );
      } catch (_) {
        return console.error(_, _), _;
      }
    }
    static ComputeLinkPrefix(_, _, _, _) {
      let _ = ``;
      return (
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        _
      );
    }
    static EncodeEventComponent(_) {
      return _
        ? _(_)
          ? `` + _[_]
          : (_.match(/^[0-9]+$/) || (_ = _.replace(/^[0-9]+/, ``)),
            _.replace(/[^a-zA-Z0-9\- ]+/g, ``))
        : ``;
    }
    static DecodeEventComponent(_) {
      let _ = _ && parseInt(_);
      if (_ && _) {
        for (let _ in _) if (_[_] == _) return _;
      }
      return _.SanitizeEventComponent(_);
    }
    static SanitizeEventComponent(_) {
      return !_ || !_.match(/^[a-zA-Z0-9\-.]*$/) ? `` : _;
    }
  },
  _ = _(),
  _ = _.createContext({});
_.createContext(void 0);
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(),
    _ = _.useMemo(
      () => ({
        ..._,
        ..._,
      }),
      [
        _,
        _.domain,
        _.controller,
        _.method,
        _.submethod,
        _.feature,
        _.depth,
        _.curator_clanid,
      ],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
function _(_, _, _, _) {
  let _ = _.GetSNRLinkParam(
      {
        ..._,
        feature: _ || _.feature,
      },
      _,
    ),
    _ = _.GetCuratorClanIDParam(_);
  return _.AddNavParamToURL(_, _, _);
}
var _;
function _() {
  (0, _.useEffect)(() => {
    if (_) return;
    window.history.scrollRestoration = `manual`;
    async function _(_) {
      _?.abort();
      let _ = (_ = new AbortController());
      if (!_.state) return;
      let _ = _(history.state);
      if (_ && _.loaderData)
        try {
          await _(_, _.signal), _ == _ && (_ = void 0);
          return;
        } catch (_) {
          console.error(_);
        }
      let _ = new URL(location.href);
      await _(_.pathname + _.search + _.hash, _?.signal),
        _ == _ && (_ = void 0);
    }
    return (
      window.addEventListener(`popstate`, _),
      () => {
        _?.abort(), window.removeEventListener(`popstate`, _);
      }
    );
  }, []);
  let _ = (0, _.useCallback)(() => {
    _({
      ..._(),
      scrollPosition: {
        _: window.scrollX,
        _: window.scrollY,
      },
    });
  }, []);
  _(window, `scroll`, _ ? void 0 : _);
}
async function _(_) {
  if (_) {
    _(_);
    return;
  }
  _?.abort(), (_ = new AbortController());
  try {
    await _(_, _.signal);
  } catch (_) {
    console.error(_), (location.href = _);
  }
  _ = void 0;
}
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      (0, _.startTransition)(() => _(!0));
    }, []),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
var _ = (0, _.createContext)(!1);
function _(_) {
  let { clientAssets: _, staticMode: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.preload.map((_, _) =>
        _._ === `hmr`
          ? (0, _.jsx)(
              `script`,
              {
                type: `module`,
                src: _.href,
              },
              _,
            )
          : _._ === `script`
            ? _
              ? null
              : (0, _.jsx)(
                  `link`,
                  {
                    rel: `modulepreload`,
                    href: _.href,
                    _: _._,
                    integrity: _.integrity,
                    crossOrigin: `anonymous`,
                  },
                  _,
                )
            : (0, _.jsx)(
                `link`,
                {
                  rel: `preload`,
                  href: _.href,
                  _: _._,
                  integrity: _.integrity,
                  crossOrigin: `anonymous`,
                  precedence: `1`,
                },
                _,
              ),
      ),
      _.css.map((_, _) =>
        (0, _.jsx)(
          `link`,
          {
            rel: `stylesheet`,
            href: _.href,
            integrity: _.integrity,
            crossOrigin: `anonymous`,
            precedence: `1`,
          },
          _.href,
        ),
      ),
    ],
  });
}
var _ = _.createContext(void 0);
function _({ children: _, ..._ }) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let _ = (0, _.useContext)(_);
  if (!_) throw Error(`Used <Head /> outside of router context`);
  let { metadata: _, clientAssets: _, nonce: _, snr: _ } = _,
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`meta`, {
        name: `viewport`,
        content: `width=device-width,initial-scale=1${_.IN_MOBILE_WEBVIEW ? `,user-scalable=no` : ``}`,
      }),
      (0, _.jsx)(`meta`, {
        name: `theme-color`,
        content: `#171a21`,
      }),
      (0, _.jsx)(`meta`, {
        property: `csp-nonce`,
        nonce: _ ?? document.querySelector(`meta[property=csp-nonce]`)?.nonce,
      }),
      _?.title &&
        (0, _.jsx)(`title`, {
          children: _.title,
        }),
      _?.description &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`meta`, {
              name: `description`,
              content: _.description,
            }),
            (0, _.jsx)(`meta`, {
              property: `og:description`,
              content: _.description,
            }),
          ],
        }),
      _?.canonicalURL &&
        (0, _.jsx)(`link`, {
          rel: `canonical`,
          href: _.canonicalURL,
        }),
      (0, _.jsx)(_, {
        metadata: _,
      }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `valve:snr`,
          content: _.ComputeLinkPrefix(
            _.domain,
            _.controller,
            _.method,
            _.submethod,
          ),
        }),
      (0, _.jsx)(_, {
        clientAssets: _,
        staticMode: _.static,
      }),
    ],
  });
}
function _(_) {
  let { metadata: _ } = _;
  if (!_) return null;
  let {
      shareImage: _,
      shareTitle: _,
      shareImageAlt: _,
      canonicalURL: _,
      shareCardFormat: _,
      articlePublishedTime: _,
      articleModifiedTime: _,
    } = _,
    _ = (Array.isArray(_) ? _ : [_]).filter(Boolean),
    _ = !!(_ || _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:title`,
          content: _,
        }),
      _.map((_, _) =>
        (0, _.jsx)(
          `meta`,
          {
            property: `og:image`,
            content: _,
          },
          _,
        ),
      ),
      !!_.length &&
        _ &&
        (0, _.jsx)(`meta`, {
          name: `twitter:image:alt`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:url`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          name: `twitter:card`,
          content: _,
        }),
      _ &&
        (0, _.jsx)(`meta`, {
          property: `og:type`,
          content: `article`,
        }),
      !!_ &&
        (0, _.jsx)(`meta`, {
          property: `article:published_time`,
          content: _(_),
        }),
      !!_ &&
        (0, _.jsx)(`meta`, {
          property: `article:modified_time`,
          content: _(_),
        }),
    ],
  });
}
function _(_) {
  return new Date(_ * 1e3).toISOString();
}
function _(_) {
  let {
    pageRoutes: _,
    clientAssets: _,
    metadata: _,
    loaderData: _,
    renderContext: _,
    scrollPosition: _,
    onComplete: _,
    nonce: _,
    snr: _,
  } = _;
  return (
    _(),
    _(_),
    (0, _.useLayoutEffect)(() => {
      _ && _();
    }, [_]),
    (0, _.jsx)(_.Fragment, {
      children: (0, _.jsx)(_, {
        renderContext: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            queryClient: _.queryClient,
            children: (0, _.jsx)(_, {
              state:
                typeof _.queryData == `string` ? _(_.queryData) : _.queryData,
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    children: (0, _.jsx)(_, {
                      metadata: _,
                      clientAssets: _,
                      nonce: _,
                      snr: _,
                      children: (0, _.jsx)(_, {
                        ..._,
                        children: (0, _.jsxs)(_.Suspense, {
                          children: [
                            !1,
                            (0, _.jsx)(_, {
                              pageRoutes: _,
                              loaderData: _,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
var _ = _.Fragment;
function _(_) {
  (0, _.useLayoutEffect)(() => {
    if (_) {
      let { _: _ = 0, _: _ = 0 } = _;
      window.scrollTo(_, _);
    }
  }, [_]);
}
function _(_) {
  let { pageRoutes: _, index: _ = 0, loaderData: _ } = _,
    [_, ..._] = _,
    [_, ..._] = _;
  return (0, _.jsx)(_, {
    loaderData: _,
    _: _,
    children: (0, _.jsx)(_.Component, {
      children:
        _.length > 0 &&
        (0, _.jsx)(_, {
          pageRoutes: _,
          loaderData: _,
          index: _ + 1,
        }),
    }),
  });
}
function _(_, _, _, _, _, _, _, _) {
  let _ = _.filter((_) => _.route?.Component).map((_) => _.route);
  if (_.length === 0) throw `no routemodule with a component, can't render`;
  (window.SSR ??= {}),
    (window.SSR.clientAssets = _),
    _.startTransition(() => {
      window.SSR?.reactRoot?.render(
        (0, _.jsx)(_, {
          pageRoutes: _,
          clientAssets: _,
          loaderData: _,
          metadata: _,
          renderContext: _,
          scrollPosition: _,
          onComplete: _,
        }),
      );
    }),
    _.forEach((_) => {
      if (`onNavigate` in _) {
        let _ = _.onNavigate;
        _(_);
      }
    });
}
async function _(_, _, _ = !1) {
  let _,
    _,
    _,
    _,
    _,
    _ = [];
  (_ &&= (clearInterval(_), void 0)), (_ &&= (clearTimeout(_), void 0));
  let _ = 0;
  _(_),
    (_ = window.setTimeout(() => {
      _ = window.setInterval(() => {
        (_ += Math.random() * 0.01), _(_);
      }, 50);
    }, 200));
  let _ = [],
    _ = 0;
  try {
    for await (let _ of _(_, _))
      if (_)
        _ === void 0
          ? (_ = JSON.parse(_))
          : _ === void 0
            ? (_ = JSON.parse(_))
            : _ === void 0
              ? (_ = JSON.parse(_))
              : (_.push(_), (_ = _.length / (_ || 1)), _(_));
      else {
        _ = JSON.parse(_);
        let _ = await _(_);
        (_ = _.cssPromises), (_ = _.routeModules), (_ = _.routeCount);
      }
    await Promise.all(_);
  } catch (_) {
    if (_ instanceof DOMException && _.name === `AbortError`) _(1);
    else throw _;
  }
  if (
    ((_ &&= (clearInterval(_), void 0)),
    (_ &&= (clearTimeout(_), void 0)),
    _?.aborted)
  )
    return;
  let _ = await Promise.all(_.map(_)),
    _ = {
      _: 0,
      _: 0,
    },
    _ = {
      assetData: _,
      metadata: _,
      snr: _,
      loaderData: _,
      renderContext: _,
      scrollPosition: _,
    };
  _ ? _(_) : _(_, _), await new Promise((_) => _(_, _, _, _, _, _, _, _));
}
async function _(_, _) {
  let { cssPromises: _, routeModules: _ } = await _(_.assetData);
  _.aborted ||
    (await Promise.all(_),
    !_.aborted &&
      (await new Promise((_) =>
        _(
          _,
          _.assetData,
          _.loaderData ?? [],
          _.metadata,
          _.snr,
          _.renderContext,
          _.scrollPosition,
          _,
        ),
      )));
}
function _(_) {
  let _ = Math.min(_, 1).toString();
  document.body.style.setProperty(`--load-percentage`, _);
}
var _, _;
async function _(_) {
  let _ = 0,
    _ = _.css.map(
      (_) =>
        new Promise((_) => {
          let _ = _.href.replace(/\\/g, `/`);
          if (
            Array.from(document.head.querySelectorAll(`link[href]`)).some(
              (_) => _.href === _,
            )
          )
            return _();
          let _ = document.createElement(`link`);
          (_.rel = `preload`),
            (_._ = `style`),
            (_.href = _),
            (_.integrity = _.integrity),
            (_.crossOrigin = `anonymous`);
          function _() {
            document.head.removeChild(_), _();
          }
          _.addEventListener(`load`, _),
            _.addEventListener(`error`, _),
            document.head.appendChild(_);
        }),
    ),
    _ = await Promise.all(
      _._.map(async (_) => {
        let _ = await _(() => import(_.href), [], import.meta.url);
        return `route` in _ && _++, _;
      }),
    );
  return (
    await _(),
    {
      cssPromises: _,
      routeModules: _,
      routeCount: _,
    }
  );
}
function _(_) {
  _ && window.navigation.addEventListener(`navigate`, (_) => _(_, _));
}
function _(_) {
  window.navigation.navigate(_, {
    info: {
      SSR: !0,
      targetRoute: _,
    },
  });
}
function _(_, _, _) {
  let _ = _?.routes.find((_) => _.pathname.match(_.regex)),
    _ = _?.routes.find((_) => _.match(_.regex));
  return !_ || !_ ? !1 : _.hash === _.hash;
}
function _() {
  _({
    _: window.scrollX,
    _: window.scrollY,
  });
}
function _(_, _) {
  let _ =
    typeof _.info == `object` && _.info && `SSR` in _.info && _.info.SSR
      ? _.info
      : void 0;
  if (_.navigationType == `push`) {
    let _ = _?.targetRoute;
    if (!_) {
      let _ = new URL(_.destination.url);
      _(_, location.pathname, _) && (_ = `${_.pathname}${_.search}`);
    }
    if (_?.bSkipFetch) {
      _(),
        _.intercept({
          scroll: `manual`,
          focusReset: `manual`,
          async handler() {},
        });
      return;
    }
    _ &&
      _.canIntercept &&
      (console.assert(
        !!window.navigation.currentEntry?.getState(),
        `Beginning navigation but missing history state`,
      ),
      _(),
      _.intercept({
        scroll: `manual`,
        focusReset: `manual`,
        async handler() {
          await _(_, _.signal, !0);
        },
      }));
  } else if (_.navigationType == `traverse`) {
    let _ = _(_.destination.getState());
    _ && _.loaderData
      ? (_(),
        _.intercept({
          scroll: `manual`,
          async handler() {
            await _(_, _.signal);
          },
        }))
      : console.assert(!1, `Traversal with no state available`);
  } else if (_.navigationType == `replace`) {
    let _ = _();
    if (_ && !_)
      _.intercept({
        async handler() {
          _((_) => ({
            ..._,
            pageRoute: _,
          }));
        },
        focusReset: `manual`,
      });
    else if (_) {
      let _ = !!_?.targetRoute;
      _.intercept({
        async handler() {
          _ && (await _(_.targetRoute, _.signal, !0));
        },
        focusReset: `manual`,
        scroll: _ ? void 0 : `manual`,
      });
    }
  } else
    _.navigationType == `reload`
      ? _()
      : _(_.navigationType, `unhandled navigation type: ${_.navigationType}`);
}
export { _, _, _, _, _, _, _, _ };
