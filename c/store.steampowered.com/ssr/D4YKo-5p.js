const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./assets/3xv8kPpp.css",
      "./assets/DkFNAC8M.css",
      "./assets/B_X-Qmwj.css",
      "./assets/Dx1Ttx0j.css",
      "./assets/C60e5kgL.css",
      "./assets/w5BdYCZo.css",
      "./assets/BcZZxqzU.css",
      "./assets/OgU23B6e.css",
      "./assets/rWtaY80N.css",
      "./assets/Cil0najV.css",
      "./assets/CBgaPm1z.css",
      "./assets/CiME4Via.css",
      "./assets/qa2zKVTS.css",
      "./assets/Bv85ZzJy.css",
      "./assets/D5Dhcami.css",
      "./assets/BBXROtnW.css",
    ]),
) => _.map((_) => _[_]);
function _(_, _) {
  let _ = _.toLowerCase().replace(/[^\p{L}\p{N}\p{Z}]/gu, ``),
    _ = _[_];
  return _ && (_ = _.replace(_, ``)), _.trim();
}
function _(_, _) {
  let _ = _().languages[0].strLanguage,
    _ = _.map((_) => ({
      item: _,
      strSort: _(_ ? _(_) : _, _),
    })),
    _ = new Intl.Collator(_(), {
      numeric: !0,
    });
  return (
    _.sort((_, _) => _.compare(_.strSort, _.strSort)), _.map(({ item: _ }) => _)
  );
}
var _ = {
  english: /^(the |a |an )/,
  brazilian: /^(o |os |a |as |um |uns |uma |umas )/,
  danish: /^(en |et |den |det |de )/,
  dutch: /^(de |het |een )/,
  french: /^(le |la |l'|les |un |une |des )/,
  german: /^(der |die |das |ein |eine )/,
  greek: /^(ο |η |το |οι |τα |ένας |μια |μία |ένα )/,
  hungarian: /^(a |az |egy )/,
  italian: /^(il |lo |la |l'|i |gli |le |un |uno |una |un')/,
  portuguese: /^(o |a |os |as |um |uma |uns |umas )/,
  romanian: /^(un |o |unii |unele )/,
  spanish: /^(el |la |los |las |un |una |unos |unas )/,
  latam: /^(el |la |los |las |un |una |unos |unas )/,
};
function _() {
  let _ = _();
  return _(_(_(), _));
}
function _(_, _) {
  let { country: _ } = _;
  return {
    queryKey: [`StoreBrowsePriceStops`, _],
    queryFn: async () => _(_, _),
    staleTime: 1440 * 60 * 1e3,
  };
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_country_code(_);
  let _ = await _.GetPriceStops(_, _);
  if (!_.BSuccess()) throw `Error loading price stops: ${_.GetErrorMessage()}`;
  return _.Body().toObject().price_stops || [];
}
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(void 0),
    _ = `${_.STORE_BASE_URL}login/${_ ? `?redir=${encodeURIComponent(_)}` : ``}`;
  return (
    (0, _.useEffect)(() => {
      _(location.href);
    }, []),
    (0, _.jsx)(_, {
      href: _,
      title: _.strToolTip,
      children: _.Localize(`#Button_SignIn`),
    })
  );
}
var _ = {
  strPlatform: `all`,
  strMinDiscount: ``,
  nMaxPriceStop: `none`,
  rgTypeFilters: [],
  bExcludeEarlyAccess: !1,
  bExcludePrerelease: !1,
  bExcludeVR: !1,
  rgDeckFilters: [],
  rgTagFilters: [],
  rgCategoryFilters: [],
};
function _(_) {
  return _ == `mac` || _ == `linux` ? _ : `all`;
}
function _(_) {
  return _ == `any` || _ == `50` || _ == `75` ? _ : ``;
}
function _(_, _) {
  if (_ === `free`) return _;
  if (_ && _.length) {
    _(_, `cannot EnsureValidPriceStop without rgPriceStops data`);
    let _ = parseInt(_);
    if ((_ || _ === `0`) && (!_ || _ < _.length)) return _;
  }
  return `none`;
}
function _(_) {
  if (_ == `games` || _ == `software` || _ == `dlc`) return _;
}
function _(_) {
  if (_ == `verified` || _ == `playable`) return _;
}
function _(_, _, _) {
  let _ = {};
  return (
    _.strPlatform == `mac`
      ? (_.macos_only = !0)
      : _.strPlatform == `linux`
        ? (_.steamos_linux_only = !0)
        : _.strPlatform != `all` &&
          _(_.strPlatform, `Unhandled platform value: ${_.strPlatform}`),
    _.rgTypeFilters.forEach((_) => {
      _ == `games`
        ? (_.only_games = !0)
        : _ == `software`
          ? (_.only_software = !0)
          : _ == `dlc`
            ? (_.only_dlc = !0)
            : _(_, `Unhandled type filter: ${_}`);
    }),
    _.strMinDiscount == `any`
      ? (_.min_discount_percent = 1)
      : _.strMinDiscount == `50`
        ? (_.min_discount_percent = 50)
        : _.strMinDiscount == `75`
          ? (_.min_discount_percent = 75)
          : _.strMinDiscount != `` &&
            _(
              _.strMinDiscount,
              `Unhandled min discount value: ${_.strMinDiscount}`,
            ),
    (_.bExcludeEarlyAccess || _.bExcludePrerelease || _.bExcludeVR) &&
      ((_.exclude_types = {}),
      _.bExcludeEarlyAccess && (_.exclude_types.exclude_early_access = !0),
      _.bExcludePrerelease && (_.exclude_types.exclude_coming_soon = !0),
      _.bExcludeVR && (_.exclude_types.exclude_vr_only = !0)),
    _.rgDeckFilters.length &&
      ((_.steam_deck_filters = {}),
      _.rgDeckFilters.forEach((_) => {
        _ == `verified`
          ? (_.steam_deck_filters.include_verified = !0)
          : _ == `playable` && (_.steam_deck_filters.include_playable = !0);
      })),
    _.nMaxPriceStop !== `none` &&
      (_.nMaxPriceStop === `free`
        ? (_.only_free = !0)
        : _ &&
          _.nMaxPriceStop < _.length &&
          (_.max_price_in_cents = _[_.nMaxPriceStop].amount_in_cents)),
    _.rgTagFilters.length && (_.tagids_must_match = [..._.rgTagFilters]),
    _.rgCategoryFilters.length && (_.category_ids = [..._.rgCategoryFilters]),
    _.length && (_.excluded_content_descriptors = _.slice()),
    _.bOnlyItemsWithDemos && (_.has_demo = !0),
    _
  );
}
function _(_, _) {
  return {
    strPlatform: _(_.platform),
    strMinDiscount: _(_.min_discount),
    nMaxPriceStop: _(_.max_price, _),
    rgTypeFilters: _(_.type_filters, _),
    bExcludeEarlyAccess: _.exclude_early_access == `1`,
    bExcludePrerelease: _.exclude_prerelease == `1`,
    bExcludeVR: _.exclude_vr == `1`,
    rgDeckFilters: _(_.deck_filters, _),
    rgTagFilters: _(_.tagids, (_) => parseInt(_) || void 0),
    rgCategoryFilters: _(_.categoryids, (_) => (_(_) ? _ : void 0)),
    rgWishlistNotificationGames: _(_.wng, (_) => parseInt(_) || void 0),
    bOnlyItemsWithDemos: _.has_demo == `1`,
  };
}
function _(_, _) {
  return (
    _?.split(/,/)
      .map(_)
      .filter((_) => _ !== void 0) || []
  );
}
function _(_) {
  let _ = {};
  return (
    _.strPlatform && _.strPlatform != `all` && (_.platform = _.strPlatform),
    _.strMinDiscount && (_.min_discount = _.strMinDiscount),
    _.nMaxPriceStop != `none` && (_.max_price = _.nMaxPriceStop.toString()),
    _.rgTypeFilters.length && (_.type_filters = _.rgTypeFilters.join(`,`)),
    _.bExcludeEarlyAccess && (_.exclude_early_access = `1`),
    _.bExcludePrerelease && (_.exclude_prerelease = `1`),
    _.bExcludeVR && (_.exclude_vr = `1`),
    _.rgDeckFilters.length && (_.deck_filters = _.rgDeckFilters.join(`,`)),
    _.rgTagFilters.length && (_.tagids = _.rgTagFilters.join(`,`)),
    _.rgCategoryFilters.length &&
      (_.categoryids = _.rgCategoryFilters.join(`,`)),
    _.rgWishlistNotificationGames?.length &&
      (_.wng = _.rgWishlistNotificationGames.join(`,`)),
    _.bOnlyItemsWithDemos && (_.has_demo = `1`),
    _
  );
}
var _ = [
    `order`,
    `name`,
    `price`,
    `discount`,
    `dateadded`,
    `topsellers`,
    `releasedate`,
    `reviews`,
  ],
  _ = {
    order: `order`,
    name: `name`,
    price: `price`,
    discount: `discount`,
    dateadded: `dateadded`,
    salesrank: `topsellers`,
    releasedate: `releasedate`,
    reviewscore: `reviews`,
  };
function _(_) {
  return _ in _;
}
var _ = {
    order: 0,
    name: 1,
    price: 2,
    discount: 3,
    dateadded: 4,
    topsellers: 5,
    releasedate: 6,
    reviews: 7,
  },
  _ = {
    name: `wishlistPrefs`,
    options: {
      path: `/wishlist`,
      secure: !0,
      maxAge: 365 * 24 * 60 * 60 * 1e3,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _() {
  try {
    let _ = JSON.parse(_(_) || `{}`);
    return (
      _.filterParams?.wng && delete _.filterParams.wng,
      _.filterParams?.categoryids && delete _.filterParams.categoryids,
      _
    );
  } catch {}
  return {};
}
function _(_) {
  Object.keys(_).length == 0 ? _(_) : _(_, JSON.stringify(_));
}
function _() {
  return !!_().bCompactView;
}
function _(_) {
  let _ = _();
  _ ? (_.bCompactView = !0) : delete _.bCompactView, _(_);
}
function _(_, _) {
  _({
    ..._(),
    sort: _,
    filterParams: _,
  });
}
function _(_, _) {
  let _ = _.priority || 2 ** 53 - 1,
    _ = _.priority || 2 ** 53 - 1;
  return _ == _
    ? _.date_added == _.date_added
      ? (_.appid ?? 0) - (_.appid ?? 0)
      : (_.date_added ?? 0) - (_.date_added ?? 0)
    : _ - _;
}
function _(_, _, _) {
  _(_ >= 0 && _ < _.length, `Invalid source index: ${_} items: ${_.length}`),
    _(_ >= 0 && _ < _.length, `Invalid target index: ${_} items: ${_.length}`);
  let _ = _.slice(),
    _ = _.splice(_, 1);
  _.splice(_, 0, ..._);
  let _ = _;
  for (let _ = _.length - 1; _ > _; _--)
    if (_[_].priority > 0) {
      _ = _;
      break;
    }
  let _ = [],
    _ = [];
  return (
    _.forEach((_, _) => {
      if (_ > _) {
        _.push(_);
        return;
      }
      let _ = _ + 1;
      _.priority == _
        ? _.push(_)
        : (_.push({
            ..._,
            priority: _,
          }),
          _.push({
            appid: _.appid,
            priority: _,
          }));
    }),
    {
      rgNewItems: _,
      rgUpdates: _,
    }
  );
}
function _(_, _, _, _) {
  let _ = _[_];
  if (!_) return;
  let _ = _.findIndex((_) => _.appid == _.appid);
  if (_ < 0) return;
  let _ = _ > _ ? _[_] : _[_ - 1];
  if (!_)
    return {
      iSourceIndex: _,
      iTargetIndex: 0,
    };
  let _ = _.findIndex((_) => _.appid == _.appid);
  if (!(_ < 0))
    return {
      iSourceIndex: _,
      iTargetIndex: _ < _ ? _ : _ + 1,
    };
}
function _(_, _, _) {
  let _ = new Map(_.map((_) => [_.appid, _.priority])),
    _ = _.map((_) => {
      let _ = _.get(_.appid);
      return _ === void 0
        ? _
        : {
            ..._,
            priority: _,
          };
    });
  return _ && _.sort(_), _;
}
_();
function _() {
  return _.country_code === `AU`;
}
var _ = [`r18`, `x18`],
  _ = [5, 18];
function _(_) {
  return !_ || !_.rating || _.agency === void 0 || !_.includes(_.agency)
    ? !1
    : _.includes(_.rating.toLowerCase());
}
function _(_) {
  let { data: _ } = _(
    _() && _
      ? {
          appid: _,
        }
      : void 0,
  );
  return _(_);
}
var _ = _.createContext(void 0);
function _(_) {
  let { steamid: _, shareToken: _, children: _ } = _,
    [_, _] = _.useState(() => _()),
    _ = _(),
    _ = _.useCallback((_) => {
      _(_), _(_);
    }, []),
    _ = _.useMemo(
      () => ({
        steamid: _,
        bViewingOwnWishlist:
          !!_ && new _(_).GetAccountID() == new _(_).GetAccountID(),
        bCompactView: _,
        shareToken: _,
        setCompactView: _,
        revokeShareTokens: _.Actions.RevokeWishlistShareTokens,
        createShareToken: _.Actions.CreateWishlistShareToken,
      }),
      [_, _, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_).bViewingOwnWishlist;
}
function _() {
  return _.useContext(_).steamid;
}
function _() {
  return _.useContext(_).bCompactView;
}
function _() {
  return _.useContext(_).setCompactView;
}
function _() {
  let { revokeShareTokens: _, createShareToken: _ } = _.useContext(_);
  return {
    revokeShareTokens: _,
    createShareToken: _,
  };
}
function _() {
  return _.useContext(_).shareToken;
}
function _(_, _) {
  let { bRestrictedFromAdultContent: _ } = _.useLoaderData(),
    _ = _(_);
  return !_ || !_
    ? !1
    : _ ||
        !!_.content_descriptorids?.includes(3) ||
        !!_.content_descriptorids?.includes(4);
}
function _(_, _) {
  return {
    data_request: {
      include_assets: !0,
      include_reviews: !0,
      include_release: !0,
      include_platforms: !0,
      include_trailers: !0,
      include_tag_count: 20,
    },
    page_size: _ ? 60 : 20,
    cacheStoreItemData: _,
  };
}
async function _(_, _, _, _, _, _, _) {
  let _ = _.Init(_);
  _.Body().set_steamid(_),
    _.Body().set_share_token(_),
    _(_, _),
    _ &&
      (_(_, _.data_request),
      _.Body().set_start_index(_.page_start || 0),
      _.Body().set_page_size(_.page_size)),
    _ && _.Body().set_sort_order(_),
    _ && _.Body().set_filters(_.fromObject(_));
  let _ = await _.GetWishlistSortedFiltered(_, _);
  if (!_.BSuccess())
    throw new _(
      _.GetEResult(),
      `Error loading sorted/filtered wishlist: ${_.GetErrorMessage()}`,
    );
  let _;
  return (
    (_ = _
      ? _(_.cacheStoreItemData, _.data_request, _.Body().items() || [])
      : _.Body().toObject().items || []),
    {
      steamid: _,
      items: _,
    }
  );
}
function _(_, _, _) {
  let _ = [];
  return (
    _.forEach((_) => {
      _.store_item(!1) && _(_.store_item(), _);
      let _ = _.toObject();
      delete _.store_item, _.push(_);
    }),
    _
  );
}
function _(_, _ = 0, _ = {}, _) {
  return [`WishlistSortedFiltered`, _, _, _, _];
}
function _(_) {
  return _[2];
}
function _(_, _, _, _, _ = 0, _ = {}, _) {
  return {
    queryKey: _(_, _, _, _),
    queryFn: () => _(_, _, _, _, _, _, _),
    staleTime: 600 * 1e3,
  };
}
function _(_, _ = 0, _ = {}) {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return _(_(_, _, _, _(_, _), _, _, _));
}
function _(_, _, _) {
  if (_.length != 0)
    for (let _ of _.getQueryCache().findAll({
      queryKey: [`WishlistSortedFiltered`, _],
      exact: !1,
    })) {
      let _ = _(_.queryKey),
        _ = _ === void 0 || _ == 0;
      _.setQueryData(
        _.queryKey,
        (_) =>
          _ && {
            ..._,
            items: _(_.items, _, _),
          },
      );
    }
}
function _(_, _) {
  _.invalidateQueries({
    queryKey: [`WishlistSortedFiltered`, _],
    exact: !1,
  });
}
function _(_) {
  return _.toLocaleLowerCase();
}
function _(_, _, _, _, _, _, _, _) {
  let { dataLoader: _, storeBrowseContext: _, cacheStoreItemData: _ } = _;
  return {
    queryKey: [`WishlistAppData`, _, _, _],
    queryFn: async () => {
      let _ = await _.fetchQuery(_(_, _, _, _(_, _), _, _, _)),
        _ = new Map();
      return (
        await Promise.all(
          _.items.map(({ appid: _ }) =>
            Promise.all([
              _.fetchQuery(
                _(_, {
                  appid: _,
                }),
              ),
              _.fetchQuery(
                _(_, {
                  appid: _,
                }),
              ),
            ]).then(([_, _]) => {
              let _ = _.name || ``;
              _.set(_, {
                strName: _,
                strNameNormalized: _(_),
                rgTagIDs: _?.map(({ tagid: _ }) => _) || [],
              });
            }),
          ),
        ),
        _
      );
    },
  };
}
function _(_, _) {
  let _ = new Set();
  for (let _ in _) _(_[_]).indexOf(_) !== -1 && _.add(parseInt(_));
  return _;
}
function _(_, _) {
  let _ = new Set();
  if (!_) return _;
  for (let _ of _) _(_.name).indexOf(_) !== -1 && _.add(_._);
  return _;
}
function _(_, _, _, _, _ = !1) {
  let _ = _(),
    _ = _(),
    _ = _(),
    { data: _ } = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    { data: _ } = _(_, _),
    _ = _[_],
    _ = _.useMemo(
      () => _(_, _, _ ? [] : _.excluded_content_descriptors),
      [_, _, _],
    ),
    { data: _, isLoading: _ } = _(_, _, _),
    { data: _ } = _(_().strLanguage),
    { data: _, isLoading: _ } = _({
      ..._(_, _, _, _, _, _, _, _),
      enabled: _ || !!_,
    }),
    _ = _.useMemo(() => {
      if (_ !== void 0)
        return {
          ..._,
          items: _.items.filter(
            (_) =>
              !(
                _.rgWishlistNotificationGames?.length &&
                !_.rgWishlistNotificationGames.includes(_.appid)
              ),
          ),
        };
    }, [_, _.rgWishlistNotificationGames]),
    _ = (_, _) => {
      !_ ||
        (_.strAutocompleteSuggestion &&
          _.length > _.strAutocompleteSuggestion.length) ||
        (_.toLocaleLowerCase().startsWith(_.strFilter.toLocaleLowerCase()) &&
          (_.strAutocompleteSuggestion = _));
    },
    { filteredWishlist: _, textFilterState: _ } = _.useMemo(() => {
      if (!_ || !_ || !_ || !_ || !_)
        return {
          filteredWishlist: void 0,
          textFilterState: void 0,
        };
      let _ = _(_),
        _ = _(_, _),
        _ = _(_, _.values()),
        _ = {
          strFilter: _,
          cAppNameMatches: 0,
          cCategoryMatches: 0,
          cTagMatches: 0,
        };
      return {
        filteredWishlist: {
          ..._,
          items: _.items.filter((_) => {
            let _ = _.get(_.appid);
            if (!_) return !1;
            if (_.strNameNormalized.indexOf(_) !== -1)
              return _(_, _.strName), _.cAppNameMatches++, !0;
            let _ = _.category_ids?.find((_) => _.has(_));
            if (_.size > 0 && _)
              return (
                _.cCategoryMatches++,
                (_.categoryID =
                  _.cCategoryMatches === 1 || _.categoryID === _ ? _ : void 0),
                _(_, _.get(_)?.name),
                !0
              );
            let _ = _.rgTagIDs.find((_) => _.has(_));
            return _.size > 0 && _
              ? (_.cTagMatches++,
                (_.tagID = _.cTagMatches === 1 || _.tagID === _ ? _ : void 0),
                _(_, _[_]),
                !0)
              : !1;
          }),
        },
        textFilterState: _,
      };
    }, [_, _, _, _, _]);
  return _
    ? {
        wishlist: _,
        textFilterState: _,
        appData: _,
        bLoading: _ || _,
      }
    : {
        wishlist: _,
        textFilterState: _,
        appData: _,
        bLoading: _,
      };
}
var _ = _(_(), 1);
function _(_, _) {
  return (_) => {
    _?.(_), _?.(_);
  };
}
function _(_) {
  let {
      direction: _,
      interactionMode: _ = 0,
      ignoreHorizontal: _,
      ignoreVertical: _,
      dismissOnClick: _,
      menuTarget: _,
      className: _,
      children: _,
      renderWhenClosed: _ = !0,
      ..._
    } = _,
    { isShowingMenu: _, triggerProps: _, menuProps: _, closeMenu: _ } = _(_),
    _ = _.useRef(null),
    _ = _(_, _.props.navRef),
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _
        ? _.current?.TakeFocus()
        : _.current?.BFocusWithin() && _.current?.TakeFocus();
    }, [_]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _.cloneElement(_, {
          ..._,
          onMouseEnter: _(_.props.onMouseEnter, _.onMouseEnter),
          onMouseLeave: _(_.props.onMouseLeave, _.onMouseLeave),
          navRef: _,
        }),
        (0, _.jsx)(_, {
          ..._,
          ..._,
          className: (0, _.default)(_.className, _),
          navRef: _,
          onCancel: _,
          onFocusWithin: (_) => !_ && _(),
          childFocusDisabled: !_,
          children: (0, _.jsx)(_, {
            children: (_ || _) && _,
          }),
        }),
      ],
    })
  );
}
var _ = `IShbIXSFzbI-`,
  _ = `qhUI2RnjHYw-`,
  _ = `uKigBhcFUks-`;
function _(_) {
  let { menuTarget: _, filters: _, setFilters: _ } = _,
    _ = _.useRef(null),
    _ = _.cloneElement(_, {
      navRef: _,
    }),
    _ = _(),
    [_, _] = _.useState(_);
  return (0, _.jsx)(_, {
    menuTarget: _,
    direction: `down`,
    className: _,
    ignoreHorizontal: !0,
    interactionMode: 1,
    children: (0, _.jsxs)(_, {
      "flow-children": `grid`,
      onFocusWithin: (_) => {
        _ && _ && _.current
          ? (_.current?.Node().Element?.scrollIntoView({
              block: `start`,
            }),
            _(!1))
          : _ || _(_);
      },
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          strPlatform: _.strPlatform,
          setFilters: _,
        }),
        (0, _.jsx)(_, {
          rgTypeFilters: _.rgTypeFilters,
          setFilters: _,
        }),
        (0, _.jsx)(_, {
          nMaxPriceStop: _.nMaxPriceStop,
          setFilters: _,
        }),
        (0, _.jsx)(_, {
          strMinDiscount: _.strMinDiscount,
          setFilters: _,
        }),
        (0, _.jsx)(_, {
          bExcludeEarlyAccess: _.bExcludeEarlyAccess,
          bExcludePrerelease: _.bExcludePrerelease,
          bExcludeVR: _.bExcludeVR,
          setFilters: _,
        }),
        (0, _.jsx)(_, {
          rgDeckFilters: _.rgDeckFilters,
          setFilters: _,
        }),
        (0, _.jsx)(_, {
          bOnlyItemsWithDemos: _.bOnlyItemsWithDemos,
          setFilters: _,
        }),
        (0, _.jsx)(_, {}),
      ],
    }),
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: [
      (0, _.jsx)(`h3`, {
        children: _.Localize(`#wishlist_controls_options_category_view`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `viewmode`,
            value: `compact`,
            checked: _,
            onChange: (_) => _.currentTarget.checked && _(!0),
          }),
          _.Localize(`#wishlist_controls_options_view_compact`),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `viewmode`,
            value: `expanded`,
            checked: !_,
            onChange: (_) => _.currentTarget.checked && _(!1),
          }),
          _.Localize(`#wishlist_controls_options_view_expanded`),
        ],
      }),
    ],
  });
}
function _(_) {
  let { strPlatform: _, setFilters: _ } = _,
    _ = _.useCallback(
      (_) => {
        let _ = _(_.currentTarget.value);
        _((_) => ({
          ..._,
          strPlatform: _,
        }));
      },
      [_],
    );
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: [
      (0, _.jsx)(`h3`, {
        children: _.Localize(`#wishlist_controls_options_category_platform`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `platform`,
            value: `all`,
            checked: _ == `all`,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_options_platform_all`),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `platform`,
            value: `mac`,
            checked: _ == `mac`,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_options_platform_mac`),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `platform`,
            value: `linux`,
            checked: _ == `linux`,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_options_platform_linux`),
        ],
      }),
    ],
  });
}
function _(_) {
  let { typeFilter: _, rgTypeFilters: _, setFilters: _, children: _ } = _,
    _ = _.useCallback(
      (_) => {
        let _ = _.currentTarget.checked;
        _((_) => {
          let _ = new Set(_.rgTypeFilters);
          return (
            _ ? _.add(_) : _.delete(_),
            {
              ..._,
              rgTypeFilters: Array.from(_.values()),
            }
          );
        });
      },
      [_, _],
    );
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(`input`, {
        type: `checkbox`,
        name: `type_${_}`,
        checked: _.includes(_),
        onChange: _,
      }),
      _,
    ],
  });
}
function _(_) {
  let { rgTypeFilters: _, setFilters: _ } = _;
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: [
      (0, _.jsx)(`h3`, {
        children: _.Localize(`#wishlist_controls_options_category_type`),
      }),
      (0, _.jsx)(_, {
        rgTypeFilters: _,
        setFilters: _,
        typeFilter: `games`,
        children: _.Localize(`#wishlist_controls_options_type_game`),
      }),
      (0, _.jsx)(_, {
        rgTypeFilters: _,
        setFilters: _,
        typeFilter: `software`,
        children: _.Localize(`#wishlist_controls_options_type_application`),
      }),
      (0, _.jsx)(_, {
        rgTypeFilters: _,
        setFilters: _,
        typeFilter: `dlc`,
        children: _.Localize(`#wishlist_controls_options_type_dlc`),
      }),
    ],
  });
}
function _(_) {
  let { nMaxPriceStop: _, setFilters: _ } = _,
    [_, _] = _.useState(void 0),
    { data: _ } = _(),
    _ = _.useId(),
    _ = `priceFiltersDataList-${_}`,
    _ = `priceFiltersRange-${_}`,
    _ = _.useCallback((_) => {
      _(_.currentTarget.valueAsNumber);
    }, []),
    _ = _.useCallback(
      (_, _) => {
        if (!_ || !(_.Element instanceof HTMLInputElement)) return !1;
        let _ = _.Element.valueAsNumber,
          _ =
            _.button === _.DIR_LEFT
              ? Math.max(0, (_ ?? 0) - 1)
              : Math.min((_ ?? 0) + 1, _.length + 1);
        return _ === _ ? !1 : (_(_), !0);
      },
      [_],
    ),
    _ = _.useRef(void 0);
  if (
    ((_.current = () => {
      _ !== void 0 &&
        (_((_) => {
          let _;
          return (
            (_ = _ == 0 ? `free` : _ <= _.length ? _ - 1 : `none`),
            {
              ..._,
              nMaxPriceStop: _,
            }
          );
        }),
        _(void 0));
    }),
    _.useEffect(() => {
      if (_ === void 0) return;
      let _ = window.setTimeout(() => _.current(), 500);
      return () => window.clearTimeout(_);
    }, [_]),
    _.useEffect(() => () => _.current(), []),
    !_)
  )
    return null;
  let _;
  _ =
    _ === void 0 ? (_ === `free` ? 0 : _ === `none` ? _.length + 1 : _ + 1) : _;
  let _ = [`free`, ..._, `max`];
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(`h3`, {
        children: _.Localize(`#wishlist_controls_options_category_price`),
      }),
      (0, _.jsx)(_, {
        type: `range`,
        _: _,
        list: _,
        min: 0,
        max: _.length - 1,
        value: _,
        onChange: _,
        onMoveLeft: _,
        onMoveRight: _,
      }),
      (0, _.jsx)(`datalist`, {
        _: _,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              value: _,
              priceStop: _,
            },
            _,
          ),
        ),
      }),
      (0, _.jsx)(`label`, {
        htmlFor: _,
        className: _,
        children: _(_[_]),
      }),
    ],
  });
}
function _(_) {
  let { value: _, priceStop: _ } = _;
  return (0, _.jsx)(`option`, {
    value: _,
    label: _(_),
  });
}
function _(_) {
  return _ === `free`
    ? _.Localize(`#wishlist_controls_options_price_free`)
    : _ === `max`
      ? _.Localize(`#wishlist_controls_options_price_any`)
      : _.Localize(
          `#wishlist_controls_options_price_max_price`,
          _.formatted_amount,
        );
}
function _(_) {
  let { strMinDiscount: _, setFilters: _ } = _,
    _ = _.useCallback(
      (_) => {
        let _ = _(_.currentTarget.value);
        _((_) => ({
          ..._,
          strMinDiscount: _,
        }));
      },
      [_],
    );
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: [
      (0, _.jsx)(`h3`, {
        children: _.Localize(`#wishlist_controls_options_category_discount`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `discount`,
            value: ``,
            checked: _ == ``,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_options_discount_all`),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `discount`,
            value: `any`,
            checked: _ == `any`,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_options_discount_any`),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `discount`,
            value: `50`,
            checked: _ == `50`,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_options_discount_or_more`, 50),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `radio`,
            name: `discount`,
            value: `75`,
            checked: _ == `75`,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_options_discount_or_more`, 75),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      bExcludeEarlyAccess: _,
      bExcludePrerelease: _,
      bExcludeVR: _,
      setFilters: _,
    } = _,
    _ = _.useCallback(
      (_) => {
        let _ = !!_.currentTarget.checked;
        _((_) => ({
          ..._,
          bExcludeEarlyAccess: _,
        }));
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = !!_.currentTarget.checked;
        _((_) => ({
          ..._,
          bExcludePrerelease: _,
        }));
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = !!_.currentTarget.checked;
        _((_) => ({
          ..._,
          bExcludeVR: _,
        }));
      },
      [_],
    );
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: [
      (0, _.jsx)(`h3`, {
        children: _.Localize(`#wishlist_controls_options_category_exclude`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `checkbox`,
            name: `exclude_earlyaccess`,
            checked: _,
            onChange: _,
          }),
          _.Localize(`#genre_early_access`),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `checkbox`,
            name: `exclude_prerelease`,
            checked: _,
            onChange: _,
          }),
          _.Localize(`#category_prerelease`),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `checkbox`,
            name: `exclude_vr`,
            checked: _,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_options_exclude_vr`),
        ],
      }),
    ],
  });
}
function _(_) {
  let { deckFilter: _, rgDeckFilters: _, setFilters: _, children: _ } = _,
    _ = _.useCallback(
      (_) => {
        let _ = _.currentTarget.checked;
        _((_) => {
          let _ = new Set(_.rgDeckFilters);
          return (
            _ ? _.add(_) : _.delete(_),
            {
              ..._,
              rgDeckFilters: Array.from(_.values()),
            }
          );
        });
      },
      [_, _],
    );
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(`input`, {
        type: `checkbox`,
        name: `type_${_}`,
        checked: _.includes(_),
        onChange: _,
      }),
      _,
    ],
  });
}
function _(_) {
  let { rgDeckFilters: _, setFilters: _ } = _;
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: [
      (0, _.jsx)(`h3`, {
        children: _.Localize(`#wishlist_controls_options_category_deck`),
      }),
      (0, _.jsx)(_, {
        deckFilter: `verified`,
        rgDeckFilters: _,
        setFilters: _,
        children: _.Localize(`#wishlist_controls_options_deck_verified`),
      }),
      (0, _.jsx)(_, {
        deckFilter: `playable`,
        rgDeckFilters: _,
        setFilters: _,
        children: _.Localize(`#wishlist_controls_options_deck_playable`),
      }),
    ],
  });
}
function _(_) {
  let { bOnlyItemsWithDemos: _, setFilters: _ } = _,
    _ = _.useCallback(
      (_) => {
        let _ = !!_.currentTarget.checked;
        _((_) => ({
          ..._,
          bOnlyItemsWithDemos: _,
        }));
      },
      [_],
    );
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: [
      (0, _.jsx)(`h3`, {
        children: _.Localize(`#wishlist_controls_options_category_related`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(`input`, {
            type: `checkbox`,
            name: `has_demo`,
            checked: _,
            onChange: _,
          }),
          _.Localize(`#wishlist_controls_demo_available`),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(_, {
      href: `${_.STORE_BASE_URL}account/notificationsettings#notificationgroup_4`,
      children: _.Localize(`#global_menu_account_notification_settings`),
    }),
  });
}
var _ = `wishlistsharetokens`;
function _(_, _, _) {
  return _({
    queryKey: [_, _, _],
    queryFn: () => _(_),
    staleTime: 600 * 1e3,
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async () => await _(),
    onSuccess() {
      _.invalidateQueries({
        queryKey: [_, _],
        exact: !1,
      });
    },
  });
}
var _ = `V7Sgmg4CTV0-`,
  _ = `gPCB6myPBsc-`,
  _ = `BSIIleW0VG4-`,
  _ = `_7QIKO2z7kiQ-`,
  _ = `jX122uzTnzU-`,
  _ = `-ToYt5wOxmQ-`,
  _ = `_7AZI-0r5FAs-`;
function _(_) {
  let { className: _ } = _,
    [_, _] = _.useState(!1);
  return _()
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            toolTipContent: _.Localize(`#wishlist_share_tooltip`),
            usePointerEvents: !0,
            children: (0, _.jsx)(_, {
              className: _,
              onClick: () => _(!0),
              children: (0, _.jsx)(_, {
                className: _,
              }),
            }),
          }),
          _ &&
            (0, _.jsx)(_, {
              onClose: () => _(!1),
            }),
        ],
      })
    : null;
}
function _(_) {
  let { onClose: _ } = _,
    _ = _(),
    _ = _.useRef(null),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    { revokeShareTokens: _, createShareToken: _ } = _(),
    [_] = _(),
    _ = _(_, _, _),
    _ = _.useMemo(() => {
      if (!_.isFetched) return _.Localize(`#Loading`);
      if (!_.isSuccess || !_.data?.token)
        return _.Localize(
          `#wishlist_controls_share_generation_failure`,
          _.data?.result ?? 0,
        );
      let _ = new URL(window.location.href);
      return _.searchParams.set(`st`, _.data.token), _.toString();
    }, [_]),
    _ = () => {
      navigator.clipboard.writeText(_), _(!0), setTimeout(() => _(!1), 2e3);
    },
    _ = _(_, _);
  return (
    _.useEffect(() => {
      _.current?.Node().BFocusWithin() &&
        _.current.Node().ForceMeasureFocusRing();
    }, [_, _]),
    (0, _.jsx)(_, {
      onClose: _,
      strTitle: _.Localize(`#wishlist_controls_share_dialog_title`),
      navID: `ShareWishlistDialog`,
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            children: _.Localize(`#wishlist_controls_share_description`),
          }),
          (0, _.jsx)(`input`, {
            className: _,
            value: _,
            onFocus: (_) => _.target.select(),
            readOnly: !0,
          }),
          (0, _.jsxs)(_, {
            className: _,
            navRef: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                onClick: async () => {
                  (await _.mutateAsync()) === 1 &&
                    (_(!0), setTimeout(() => _(!1), 2e3));
                },
                children: (0, _.jsx)(`span`, {
                  children: _
                    ? _.Localize(`#wishlist_controls_share_revokeall_success`)
                    : _.Localize(`#wishlist_controls_share_revokeall`),
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    onClick: _,
                    autoFocus: !0,
                    children: _
                      ? _.Localize(`#Button_Copied`)
                      : _.Localize(`#Button_CopyLink`),
                  }),
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: (0, _.jsx)(`span`, {
                      children: _.Localize(`#Button_Done`),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var _ = `DFhzzTUhoEs-`,
  _ = `QoJP0e0vzFA-`,
  _ = `smdxg72XyCE-`,
  _ = `PzuczM6OUSY-`,
  _ = `F9tP8SC7J-o-`,
  _ = `FMYDulolaKQ-`,
  _ = `ne-yAo3NTUE-`,
  _ = `JAybs32rLv4-`,
  _ = `_8SeGvT1Jess-`,
  _ = `pGjJvIOjeeU-`,
  _ = `cDJOlrqyRq8-`,
  _ = `Of41uRacYLU-`,
  _ = `BKhk6CZ5ib0-`;
function _(_) {
  return _.useState(_);
}
function _(_) {
  return _.useState(_);
}
var _ = _.createContext(void 0);
function _(_) {
  let {
      filters: _,
      setFilters: _,
      sort: _,
      bLoadingFilters: _,
      children: _,
    } = _,
    _ = _.useMemo(
      () => ({
        filters: _,
        setFilters: _,
        sort: _,
        bLoadingFilters: _,
      }),
      [_, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  let { filters: _, setFilters: _, bLoadingFilters: _ } = _.useContext(_);
  return [_, _, _];
}
function _() {
  let { sort: _ } = _.useContext(_);
  return _;
}
function _() {
  let [_, _] = _(),
    _ = _.useMemo(() => new Set(_.rgCategoryFilters), [_.rgCategoryFilters]);
  return [
    _,
    _.useCallback(
      (_, _) => {
        _((_) => {
          let { rgCategoryFilters: _ } = _;
          if (_ === `-1`)
            return {
              ..._,
              rgCategoryFilters: [],
            };
          let _ = _.has(_);
          if (_ === `0`)
            return {
              ..._,
              rgCategoryFilters: _ ? [] : [`0`],
            };
          let _ = _;
          return (
            _.has(`0`) && (_ = _.filter((_) => _ != `0`)),
            {
              ..._,
              rgCategoryFilters: _ ? _.filter((_) => _ != _) : _.concat(_),
            }
          );
        });
      },
      [_, _],
    ),
  ];
}
function _(_) {
  return (0, _.jsx)(_, {
    menuTarget: (0, _.jsxs)(_, {
      className: (0, _.default)(_, _, _),
      children: [
        (0, _.jsx)(`span`, {
          children: _.Localize(`#wishlist_options_button`),
        }),
        (0, _.jsx)(_, {}),
      ],
    }),
    filters: _.filters,
    setFilters: _.setFilters,
  });
}
function _(_) {
  let { option: _, setSelectedSort: _ } = _,
    _ = _.useCallback(() => _(_), [_, _]);
  return (0, _.jsx)(_, {
    focusClassName: (0, _.default)(`test`, _),
    noFocusRing: !0,
    onClick: _,
    children: (0, _.jsx)(_, {
      option: _,
    }),
  });
}
function _(_) {
  let { option: _ } = _,
    _ = _(),
    _ = `#wishlist_controls_sortby_${_}`;
  return (
    _ === `order` && !_ && (_ = `#wishlist_controls_sortby_their_order`),
    _.Localize(_)
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    menuTarget: (0, _.jsxs)(_, {
      className: (0, _.default)(_, _, _),
      children: [
        _.LocalizeReact(
          `#wishlist_sortby_button`,
          (0, _.jsx)(`span`, {
            className: _,
            children: (0, _.jsx)(_, {
              option: _.selectedSort,
            }),
          }),
        ),
        (0, _.jsx)(_, {}),
      ],
    }),
    direction: `down`,
    className: _,
    interactionMode: 1,
    dismissOnClick: !0,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          option: _,
          setSelectedSort: _.setSelectedSort,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let {
      filters: _,
      setFilters: _,
      sort: _,
      setSort: _,
      strTextFilter: _,
      setTextFilter: _,
      strAutocompleteSuggestion: _,
      cWishlistItems: _,
      bLoadingFilters: _,
    } = _,
    _ = _(),
    _ = _();
  return (0, _.jsxs)(_, {
    "flow-children": `row`,
    className: _,
    scrollIntoViewType: _.NoTransform,
    children: [
      (0, _.jsx)(_, {
        strTextFilter: _,
        strAutocompleteSuggestion: _,
        setTextFilter: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !_ &&
            (0, _.jsx)(_, {
              filters: _,
              setFilters: _,
            }),
          (0, _.jsx)(_, {
            selectedSort: _,
            setSelectedSort: _,
          }),
          _ &&
            !_ &&
            (0, _.jsx)(_, {
              className: `PzuczM6OUSY-`,
            }),
          !!_ &&
            (0, _.jsx)(_, {
              cWishlistItems: _,
              bLoadingFilters: _,
              bShowSeparator: !1,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { cWishlistItems: _, bLoadingFilters: _, bShowSeparator: _ } = _;
  return _ === 0 && !_
    ? null
    : (0, _.jsxs)(_, {
        gap: `2`,
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children:
              _ > 0
                ? _.LocalizePlural(`#wishlist_displayed_item_count`, _)
                : ``,
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `TRWhWHbPvhU-`,
            }),
        ],
      });
}
function _(_, _) {
  return _.Localize(`#wishlist_controls_filter_tag_label`, _, _);
}
function _(_, _, _, _, _) {
  switch (_) {
    case `strMinDiscount`: {
      let _ = _,
        _ = _.Localize(`#wishlist_controls_options_category_discount`);
      return _ === ``
        ? _(_, _.Localize(`#wishlist_controls_options_discount_all`))
        : _ == `50` || _ === `75`
          ? _(_, _.Localize(`#wishlist_controls_options_discount_or_more`, _))
          : _(_, _.Localize(`#wishlist_controls_options_discount_${_}`));
    }
    case `strPlatform`: {
      let _ = _;
      return _(
        _.Localize(`#wishlist_controls_options_category_platform`),
        _.Localize(`#wishlist_controls_options_platform_${_}`),
      );
    }
    case `bExcludeEarlyAccess`:
      return _(
        _.Localize(`#wishlist_controls_options_category_exclude`),
        _.Localize(`#genre_early_access`),
      );
    case `bExcludePrerelease`:
      return _(
        _.Localize(`#wishlist_controls_options_category_exclude`),
        _.Localize(`#category_prerelease`),
      );
    case `bExcludeVR`:
      return _(
        _.Localize(`#wishlist_controls_options_category_exclude`),
        _.Localize(`#wishlist_controls_options_exclude_vr`),
      );
    case `nMaxPriceStop`: {
      let _ = _,
        _ = _.Localize(`#wishlist_controls_options_category_price`);
      return _ === `none`
        ? _(_, _.Localize(`#wishlist_controls_options_price_any`))
        : _ === `free`
          ? _(_, _(`free`))
          : _?.[_].formatted_amount
            ? _(_, _(_[_]))
            : _(_, ``);
    }
    case `rgTypeFilters`: {
      let _ = _,
        _ = _.Localize(`#wishlist_controls_options_category_type`);
      return _ === `games`
        ? _(_, _.Localize(`#wishlist_controls_options_type_game`))
        : _ === `software`
          ? _(_, _.Localize(`#wishlist_controls_options_type_application`))
          : _(_, _.Localize(`#wishlist_controls_options_type_${_}`));
    }
    case `rgDeckFilters`: {
      let _ = _;
      return _(
        _.Localize(`#wishlist_controls_options_category_deck`),
        _.Localize(`#wishlist_controls_options_deck_${_}`),
      );
    }
    case `rgTagFilters`: {
      let _ = _;
      return _(
        _.Localize(`#wishlist_controls_options_category_tag`),
        (_ && _[_]) || `${_}`,
      );
    }
    case `rgWishlistNotificationGames`:
      return _.Localize(`#wishlist_filters_notification`);
    case `rgCategoryFilters`: {
      let _ = _,
        _ = _.Localize(`#wishlist_controls_options_category_category`);
      return _ === `0`
        ? _(_, _(`#Wishlist_Controls_Categories_Uncategorized`))
        : _(_, _?.get(_)?.name || _.toString());
    }
    case `bOnlyItemsWithDemos`:
      return _.Localize(`#wishlist_controls_demo_available`);
    default:
      return (
        _(_, `Unhandled wishlist filter: ${_}`),
        _(_.Localize(`#generic_unknown`), `${_}`)
      );
  }
}
function _(_) {
  let { filters: _, setFilters: _ } = _,
    { data: _ } = _(),
    { data: _ } = _(_().strLanguage),
    _ = _(),
    { data: _ } = _(_(), _),
    _ = (_) => {
      _ || _(_);
    };
  return (0, _.jsxs)(_, {
    "flow-children": `row`,
    navEntryPreferPosition: _.MAINTAIN_X,
    children: [
      !!_ &&
        _.rgCategoryFilters.map((_) =>
          (0, _.jsx)(
            _,
            {
              onClick: () => {},
              bCanRemove: !1,
              children: _(`rgCategoryFilters`, _, _, _, _),
            },
            _,
          ),
        ),
      _.strPlatform !== `all` &&
        (0, _.jsx)(_, {
          onClick: () =>
            _({
              ..._,
              strPlatform: `all`,
            }),
          bCanRemove: !_,
          children: _(`strPlatform`, _.strPlatform),
        }),
      _.rgTypeFilters.map((_) =>
        (0, _.jsx)(
          _,
          {
            onClick: () =>
              _({
                ..._,
                rgTypeFilters: _.rgTypeFilters.filter((_) => _ !== _),
              }),
            bCanRemove: !_,
            children: _(`rgTypeFilters`, _),
          },
          _,
        ),
      ),
      _.nMaxPriceStop !== `none` &&
        (0, _.jsx)(_, {
          onClick: () =>
            _({
              ..._,
              nMaxPriceStop: `none`,
            }),
          bCanRemove: !_,
          children: _(`nMaxPriceStop`, _.nMaxPriceStop, _),
        }),
      _.strMinDiscount !== `` &&
        (0, _.jsx)(_, {
          onClick: () =>
            _({
              ..._,
              strMinDiscount: ``,
            }),
          bCanRemove: !_,
          children: _(`strMinDiscount`, _.strMinDiscount),
        }),
      _.bExcludeEarlyAccess &&
        (0, _.jsx)(_, {
          onClick: () =>
            _({
              ..._,
              bExcludeEarlyAccess: !1,
            }),
          bCanRemove: !_,
          children: _(`bExcludeEarlyAccess`, _.bExcludeEarlyAccess),
        }),
      _.bExcludeVR &&
        (0, _.jsx)(_, {
          onClick: () =>
            _({
              ..._,
              bExcludeVR: !1,
            }),
          bCanRemove: !_,
          children: _(`bExcludeVR`, _.bExcludeVR),
        }),
      _.bExcludePrerelease &&
        (0, _.jsx)(_, {
          onClick: () =>
            _({
              ..._,
              bExcludePrerelease: !1,
            }),
          bCanRemove: !_,
          children: _(`bExcludePrerelease`, _.bExcludePrerelease),
        }),
      _.rgDeckFilters.map((_) =>
        (0, _.jsx)(
          _,
          {
            onClick: () =>
              _({
                ..._,
                rgDeckFilters: _.rgDeckFilters.filter((_) => _ !== _),
              }),
            bCanRemove: !_,
            children: _(`rgDeckFilters`, _),
          },
          _,
        ),
      ),
      _.rgTagFilters.map((_) =>
        (0, _.jsx)(
          _,
          {
            onClick: () =>
              _({
                ..._,
                rgTagFilters: _.rgTagFilters.filter((_) => _ !== _),
              }),
            bCanRemove: !_,
            children: _(`rgTagFilters`, _, void 0, _),
          },
          _,
        ),
      ),
      !!_.rgWishlistNotificationGames?.length &&
        (0, _.jsx)(_, {
          onClick: () =>
            _({
              ..._,
              rgWishlistNotificationGames: void 0,
            }),
          bCanRemove: !_,
          children: _(
            `rgWishlistNotificationGames`,
            _.rgWishlistNotificationGames,
          ),
        }),
      _.bOnlyItemsWithDemos &&
        (0, _.jsx)(_, {
          onClick: () =>
            _({
              ..._,
              bOnlyItemsWithDemos: !1,
            }),
          bCanRemove: !_,
          children: _(`bOnlyItemsWithDemos`, _.bOnlyItemsWithDemos),
        }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    onClick: _.onClick,
    className: (0, _.default)(_, _.bCanRemove && `n5jTCXrzS8A-`),
    children: _.children,
  });
}
var _ = _.memo(function (_) {
  let { strTextFilter: _, strAutocompleteSuggestion: _, setTextFilter: _ } = _,
    _ = _.useRef(null),
    _ = _.useRef(``),
    _ = _.useCallback(
      (_) => {
        _(_.currentTarget.value);
      },
      [_],
    ),
    [_, _] = _(),
    _ =
      _.current !== `Backspace` &&
      _.current !== `Escape` &&
      _.current &&
      _ &&
      _ &&
      _.length > _.length &&
      _.toLocaleLowerCase().startsWith(_.toLocaleLowerCase()),
    _ = _.useCallback(
      (_) => {
        let _ = _.current;
        if (((_.current = _.key), _.current)) {
          if (_.key === `Enter`) {
            _.preventDefault(), _ && _(_), _.current.blur();
            return;
          }
          if (_.key === `Escape`) {
            _.preventDefault(),
              _ && _ !== `Escape`
                ? (_.current.value = _)
                : (_(``), _.current.blur());
            return;
          }
          _ &&
            (_.key === `Tab` || _.key === `ArrowRight`
              ? (_.preventDefault(),
                _(_),
                _.current.setSelectionRange(_.length, _.length))
              : _.key === `Backspace` &&
                (_.current.selectionStart ?? 0) >= _.length &&
                (_.preventDefault(),
                _(_.slice(0, -1)),
                _.current.setSelectionRange(_.length, _.length)));
        }
      },
      [_, _, _, _],
    ),
    _ = _ ? _ + _.slice(_.length) : _;
  return (
    _.useLayoutEffect(() => {
      _ && _.current.setSelectionRange(_.length, _.length);
    }, [_, _, _]),
    (0, _.jsx)(_, {
      ref: _,
      autoFocus: !0,
      className: _,
      value: _,
      onChange: _,
      onKeyDown: _,
      placeholder: _.Localize(`#wishlist_search_all`),
      ..._,
    })
  );
});
function _(_) {
  let { data: _ } = _(_(), _()),
    [_] = _();
  return _.useMemo(() => {
    if (!_.category_ids?.length || !_) return [];
    let _ = [],
      _ = [];
    for (let _ of _.category_ids) {
      let _ = _.get(_);
      _
        ? _.has(_._)
          ? _.push({
              ..._,
              bSelected: !0,
            })
          : _.push(_)
        : _(
            _,
            `Could not find wishlist category definition for category ID ${_}`,
          );
    }
    return [..._, ..._];
  }, [_, _.category_ids, _]);
}
var _ = `tPinc5p8M44-`,
  _ = `_1pbnDhDgCTc-`,
  _ = `RRaSHSVb5-E-`,
  _ = `GhB5tIGE51k-`,
  _ = `_1-Xw1ot0vCY-`,
  _ = `uuRGRp0BzFs-`,
  _ = `RgWgy3QGSVM-`,
  _ = `YekcrrHEiY0-`,
  _ = 16;
function _(_) {
  let {
      appid: _,
      steamid: _,
      onClose: _,
      filteredCategoryIDs: _,
      onAdvanced: _,
    } = _,
    [_, _] = _.useState([]),
    _ = _(),
    { data: _ } = _({
      appid: _,
    }),
    _ =
      _ && _.name && _.visible
        ? _(`#Wishlist_Controls_Categories_Manageitem`, _?.name)
        : _(`#Wishlist_Controls_Categories_Manage`),
    { data: _ } = _(_),
    _ = !!_ && !!_ && _.length > 0,
    _ = _.useCallback(() => {
      _.mutate({
        rgCategoryIDs: _.reverse(),
      }),
        _();
    }, [_, _, _]);
  return (0, _.jsx)(_, {
    onClose: _,
    strTitle: _,
    navID: `AddWishlistCategoryDialog`,
    className: _,
    children: (0, _.jsxs)(_, {
      "flow-children": `column`,
      children: [
        (0, _.jsx)(_, {
          appid: _,
          steamid: _,
          onCategoryAdd: (_) => _([..._, _].slice(-3)),
          onCategoryRemove: (_) => {
            _ && _.has(_) && _();
          },
        }),
        (0, _.jsxs)(_, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                onClick: _,
                children: _(`#Wishlist_Categories_Dialog_Advanced`),
              }),
            (0, _.jsx)(_, {
              onClick: _,
              children: _.Localize(`#Button_Done`),
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_, _, _, _) {
  let { data: _ } = _(_, _),
    { data: _ } = _(),
    _ = (_, _) => {
      let _ = new Set(_);
      return [
        ..._.map((_) => _.find((_) => _._ === _)).filter((_) => !!_),
        ..._.filter((_) => !_.has(_._)),
      ];
    };
  return _.useMemo(() => {
    if (!_) return [];
    let _ = new Set(_?.map((_) => _._) ?? []),
      _ = _.filter((_) => !_.has(_._));
    if (!_ || _.length === 0)
      return _(
        _.filter((_) => _.cItems > 0),
        _ ?? [],
      );
    let _ = _.toLocaleLowerCase(),
      _ = !1,
      _ = _.filter((_) => {
        let _ = _.name.toLocaleLowerCase();
        return (_ ||= _ === _), _.indexOf(_) > -1;
      });
    return (
      (_ = _(_, [])),
      _ ||
        _.unshift({
          _: `0`,
          name: _,
          cItems: 0,
          bNotificationOptIn: !1,
        }),
      _
    );
  }, [_, _, _, _]);
}
function _(_) {
  let { appid: _, steamid: _, onCategoryAdd: _, onCategoryRemove: _ } = _,
    [_, _] = _.useState(``),
    [_, _] = _.useState(void 0),
    _ = _(_);
  _.useEffect(() => {
    !_ && _.data && _(_.data);
  }, [_.data, _]);
  let _ = _(_),
    _ = async (_, _) => {
      if (!_ || _ === 0) return;
      let _ = await _.mutateAsync({
        appid: _,
        categoryName: _,
        categoryID: _ ?? `0`,
      });
      _.eresult === 1 &&
        _.category?._ &&
        (_(_.category._),
        _ &&
          !_.some((_) => _._ === _.category._) &&
          _((_) => [..._, _.category]));
    },
    _ = _(_),
    _ = (_) => {
      _ !== 0 &&
        (_.mutate({
          appid: _,
          categoryID: _,
        }),
        _(_));
    },
    _ = (_) => {
      _.stopPropagation(),
        _.preventDefault(),
        !(!_ || _.length === 0) && (_(``), _(_));
    },
    { data: _ } = _(_, _),
    _ = _(_),
    _ = _.length > 0,
    _ = _(_ ?? [], _, _, _),
    _ = _();
  return (0, _.jsxs)(_, {
    className: _,
    "flow-children": `column`,
    children: [
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Wishlist_Controls_Categories_Header_Current`),
          }),
          (0, _.jsx)(_, {
            rgCategories: _ ?? [],
            header: null,
            eAction: _.k_ECategoryButtonAction_Remove,
            onClick: (_, _) => _(_),
            bMultiline: !0,
            bShowEmptyLabel: !0,
            containerClassName: _,
          }),
          !!_ && _.length >= _ && (0, _.jsx)(_, {}),
        ],
      }),
      (0, _.jsxs)(`form`, {
        className: _,
        onSubmit: _,
        children: [
          (0, _.jsx)(_, {
            autoFocus: !0,
            value: _,
            className: _,
            type: `search`,
            placeholder: _(`#Wishlist_Categories_Dialog_Search`),
            onChange: (_) => _(_.target.value),
            onOKActionDescription:
              _.length > 0 ? _(`#Wishlist_Categories_Dialog_Add`) : null,
            maxLength: 500,
          }),
          !_ &&
            (0, _.jsx)(`div`, {
              className: (0, _.default)(
                `-zWCU6qEIPk-`,
                _.length > 0 && `SJMQm-S37S0-`,
              ),
              children: (0, _.jsx)(_, {
                onClick: _,
                children: _(`#Wishlist_Categories_Dialog_Add`),
              }),
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Wishlist_Controls_Categories_Header_Other`),
          }),
          (0, _.jsx)(_, {
            rgCategories: _,
            onClick: _,
            header: null,
            bMultiline: !0,
            bShowEmptyLabel: !0,
            containerClassName: _,
            eAction: _.k_ECategoryButtonAction_Add,
          }),
        ],
      }),
      _ &&
        (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(`div`, {
              className: `_1-Xw1ot0vCY-`,
              children: _(`#Wishlist_Controls_Categories_Header_Suggested`),
            }),
            (0, _.jsx)(_, {
              rgCategories: _,
              onClick: _,
              header: null,
              bMultiline: !0,
              containerClassName: (0, _.default)(
                `uuRGRp0BzFs-`,
                `EJSAZQJSmgU-`,
              ),
            }),
          ],
        }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#Wishlist_Categories_Max_Per_App_Reached`, _),
  });
}
var _ = `dxGRQwKaz98-`,
  _ = `yUpEtFq-15s-`,
  _ = `-rdmiROdf2A-`,
  _ = `xHPGxsBDI3Q-`,
  _ = `c9ONb9lwpBM-`,
  _ = `_--aH3R6Xyn0-`,
  _ = `NPn6COdfSNw-`,
  _ = `SmCVZLuKtyI-`,
  _ = `_0YskLznFg4c-`,
  _ = `ZNDbHTV-BEE-`,
  _ = 500;
function _(_) {
  let { steamid: _, onClose: _ } = _,
    { data: _ } = _(_),
    [_, _] = _.useState(void 0),
    _ = _ ? _?.find((_) => _._ === _) : void 0,
    _ = _.useMemo(
      () =>
        (_ ?? [])
          .filter((_) => _.cItems > 0 || _._ === _)
          .map((_) => ({
            ..._,
            bSelected: _._ === _,
          })),
      [_, _],
    ),
    [_, _] = _.useState(new Set()),
    [_, _] = _.useState(new Set()),
    [_, _] = _.useState(0),
    _ = _(_),
    _ = () => {
      _(new Set()), _(new Set());
    };
  return (0, _.jsx)(_, {
    onClose: _,
    strTitle: _.Localize(`#wishlist_categories_advanced_title`),
    navID: `AdvancedWishlistCategoryDialog`,
    className: _,
    children: (0, _.jsxs)(_, {
      "flow-children": `column`,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _.Localize(`#wishlist_categories_advanced_select`),
                }),
                (0, _.jsx)(_, {
                  rgCategories: _,
                  header: null,
                  size: _ ? `small` : `default`,
                  bMultiline: !0,
                  bShowCounts: !0,
                  eAction: _.k_ECategoryButtonAction_Select,
                  onClick: (_, _) => {
                    _(0), _(), _(_ === _ ? void 0 : _);
                  },
                }),
              ],
            }),
            !!_ &&
              (0, _.jsx)(
                _,
                {
                  steamid: _,
                  categoryID: _._,
                  strName: _.name,
                },
                `rename:${_._}`,
              ),
            !!_ &&
              (0, _.jsx)(
                _,
                {
                  steamid: _,
                  categoryID: _._,
                  setToApply: _,
                  setToRemove: _,
                  onToggleItem: (_, _) => {
                    _ &&
                      (_.category_ids?.includes(_)
                        ? (_((_) => _(_, _.appid, !1)),
                          _((_) => _(_, _.appid, !_)))
                        : (_((_) => _(_, _.appid, _)),
                          _((_) => _(_, _.appid, !1))));
                  },
                  cFailed: _,
                  bPending: _.isPending,
                },
                `bulk:${_._}`,
              ),
          ],
        }),
        (0, _.jsx)(_, {
          className: _,
          "flow-children": `row`,
          focusableIfEmpty: !0,
          children: (0, _.jsx)(_, {
            cPendingAdds: _.size,
            cPendingRemovals: _.size,
            bQueryPending: _.isPending,
            closeDialog: _,
            reset: _,
            apply: async () => {
              if (!_) return;
              let _ = 0;
              if (_.size > 0) {
                let _ = await _.mutateAsync({
                  rgAppIDs: Array.from(_),
                  categoryID: _,
                });
                _ += _.rgAppIDsFailed.length;
              }
              if (_.size > 0) {
                let _ = await _.mutateAsync({
                  rgAppIDs: Array.from(_),
                  categoryID: _,
                  bRemove: !0,
                });
                _ += _.rgAppIDsFailed.length;
              }
              _(_), _();
            },
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let {
    cPendingAdds: _,
    cPendingRemovals: _,
    bQueryPending: _,
    closeDialog: _,
    reset: _,
    apply: _,
  } = _;
  return _ + _ < 1
    ? (0, _.jsx)(_, {
        onClick: _,
        children: _.Localize(`#Button_Done`),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            className: _,
            gap: `1`,
            children: (0, _.jsxs)(_, {
              size: `2`,
              children: [
                (0, _.jsx)(_, {
                  children: _.Localize(`#wishlist_categories_advanced_pending`),
                }),
                _ > 0 &&
                  (0, _.jsx)(_, {
                    children: _.Localize(
                      `#wishlist_categories_advanced_pending_adds`,
                      _,
                    ),
                  }),
                _ > 0 &&
                  (0, _.jsx)(_, {
                    children: _.Localize(
                      `#wishlist_categories_advanced_pending_removals`,
                      _,
                    ),
                  }),
              ],
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                onClick: _,
                "aria-disabled": _,
                children: _.Localize(`#wishlist_categories_advanced_revert`),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                "aria-disabled": _,
                children: _.Localize(`#wishlist_categories_advanced_apply`),
              }),
            ],
          }),
        ],
      });
}
function _(_) {
  let { steamid: _, categoryID: _, strName: _ } = _,
    [_, _] = _.useState(_),
    _ = _(_),
    _ = _.trim(),
    _ = _.length > 0 && _ !== _ && !_.isPending,
    _ = async () => {
      _ &&
        _.mutate({
          categoryID: _,
          name: _,
        });
    },
    _;
  return (
    _.data?.eresult === 14
      ? (_ = _.Localize(`#wishlist_categories_advanced_rename_duplicate`))
      : (_.isError || (_.data && _.data.eresult !== 1)) &&
        (_ = _.Localize(
          `#wishlist_categories_advanced_rename_failed`,
          _.data?.eresult ?? 2,
        )),
    (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#wishlist_categories_advanced_rename_label`),
        }),
        (0, _.jsxs)(_, {
          className: _,
          "flow-children": `row`,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                value: _,
                onTextChange: (_) => _(_),
                onKeyDown: (_) => {
                  _.key === `Enter` && _();
                },
                maxLength: 256,
                disabled: _.isPending,
                autoFocus: !0,
              }),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              disabled: !_,
              children: _.Localize(`#wishlist_categories_advanced_rename_save`),
            }),
          ],
        }),
        !!_ &&
          (0, _.jsx)(_, {
            marginTop: `1`,
            size: `2`,
            color: `text-warning`,
            children: _,
          }),
      ],
    })
  );
}
function _(_) {
  let {
      steamid: _,
      categoryID: _,
      setToApply: _,
      setToRemove: _,
      onToggleItem: _,
      cFailed: _,
      bPending: _,
    } = _,
    [_, _] = _.useState(``),
    { wishlist: _, appData: _, bLoading: _ } = _(_, `order`, _, _.trim(), !0),
    _ = (_) =>
      _.has(_.appid) || (!!_.category_ids?.includes(_) && !_.has(_.appid)),
    _ = (_, _) => _(_, _),
    _ = _.useMemo(() => {
      let _ = _?.items ?? [];
      if (!_) return _;
      let _ = [],
        _ = [];
      for (let _ of _) _.category_ids?.includes(_) ? _.push(_) : _.push(_);
      let _ = (_) => _.get(_.appid)?.strName ?? ``;
      return [..._(_, _), ..._(_, _)];
    }, [_, _, _]),
    _ = (_) => {
      for (let _ of _) _(_) !== _ && _(_, _);
    },
    _ = _.slice(0, _);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#wishlist_categories_advanced_addremove_title`),
      }),
      (0, _.jsxs)(_, {
        className: _,
        "flow-children": `row`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              value: _,
              onTextChange: _,
              clearable: !0,
              placeholder: _.Localize(`#wishlist_search_all`),
            }),
          }),
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            disabled: _.length === 0,
            children: _.Localize(`#wishlist_categories_advanced_select_all`),
          }),
          (0, _.jsx)(_, {
            onClick: () => _(!1),
            disabled: _.length === 0,
            children: _.Localize(`#wishlist_categories_advanced_select_none`),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        className: _,
        "flow-children": `column`,
        children: [
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                checked: _(_),
                onChange: (_) => _(_, _),
                disabled: _,
                children: _?.get(_.appid)?.strName || String(_.appid),
              },
              _.appid,
            ),
          ),
          !_ &&
            _.length === 0 &&
            (0, _.jsx)(_, {
              children: _.Localize(`#wishlist_categories_advanced_no_items`),
            }),
        ],
      }),
      _.length > _.length &&
        (0, _.jsx)(_, {
          _: `div`,
          marginTop: `2`,
          size: `2`,
          children: _.Localize(
            `#wishlist_categories_advanced_showing`,
            _.length,
            _.length,
          ),
        }),
      _ > 0 &&
        (0, _.jsx)(_, {
          _: `div`,
          marginTop: `1`,
          size: `2`,
          color: `text-warning`,
          children: _.LocalizePlural(
            `#wishlist_categories_advanced_failed_items`,
            _,
          ),
        }),
    ],
  });
}
function _(_, _, _) {
  if (_.has(_) === _) return _;
  let _ = new Set(_);
  return _ ? _.add(_) : _.delete(_), _;
}
var _ = `J7mtzI88wAE-`,
  _ = `JY4lwsRhvTg-`,
  _ = `_8MgL3GQMdss-`,
  _ = `_3TPQhhYp6Ss-`,
  _ = `BkLwnStWSSw-`;
function _(_) {
  let {
      cWishlistItems: _,
      cUncategorizedWishlistItems: _,
      bLoadingFilters: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    { data: _ } = _(_(), _),
    [_, _] = _(),
    _ = _.useMemo(() => {
      let _ = {
        bNotificationOptIn: !1,
        bSelected: _.has(`0`),
        cItems: _,
        _: `0`,
        name: _(`#Wishlist_Controls_Categories_Uncategorized`),
      };
      !_.bSelected && _.size > 0 && (_.cItems = 0);
      let _ = (_ ?? [])
        .map((_) => ({
          ..._,
          bSelected: _.has(_._),
        }))
        .filter((_) => !!_ || _.cItems > 0 || _.bSelected)
        .sort((_, _) => !!_.bSelected - +!!_.bSelected);
      return (
        _.length < 1 ||
          ((_.cItems > 0 || _.size > 0) &&
            (_.bSelected ? _.unshift(_) : _.push(_))),
        _
      );
    }, [_, _, _, _]),
    _ = _ && !_;
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  cWishlistItems: _,
                  bLoadingFilters: _,
                  bShowSeparator: _ && _.length > 0,
                }),
              }),
              _ &&
                (0, _.jsx)(_, {
                  rgCategories: _,
                  onFilter: _,
                }),
            ],
          }),
          !_ &&
            _ &&
            (0, _.jsx)(_, {
              rgCategories: _,
              onFilter: _,
            }),
        ],
      })
    : null;
}
function _(_) {
  let { rgCategories: _, onFilter: _ } = _;
  return _.length === 0
    ? null
    : (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          rgCategories: _,
          eAction: _.k_ECategoryButtonAction_Filter,
          onClick: _,
          size: `small`,
          bShowAllButton: !0,
          bShowCounts: !0,
          bMultiline: !0,
        }),
      });
}
function _(_) {
  let { rgCategories: _, onFilter: _ } = _,
    _ = (_) => _.name,
    _ = (_) => {
      let _ = new Set();
      for (let _ of _) _.add(_._), _.bSelected || _(_.name, _._);
      for (let _ of _) _.has(_._) || _(_.name, _._);
    },
    _ = _.useMemo(() => _.filter((_) => !!_.bSelected), [_]),
    _ = _({
      rgOptions: _,
      selectedValue: _,
      onSelectionChange: _,
    });
  if (_.length === 0) return null;
  let _ = _(`#Wishlist_Controls_Categories_All`);
  if (_.length > 0) {
    let _ = _.map(_);
    _ =
      `ListFormat` in Intl
        ? new Intl.ListFormat(_().strISOCode).format(_)
        : _.join(`, `);
  }
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(_.Root, {
      state: _,
      clearable: !0,
      radius: `none`,
      children: [
        (0, _.jsx)(_.Trigger, {
          children: (0, _.jsx)(_, {
            gap: `1`,
            minWidth: `0`,
            children: _(
              _.Localize(`#wishlist_controls_categories_multiselect_label`, _),
              (0, _.jsx)(_, {
                color: `accent-8`,
              }),
              (0, _.jsx)(_, {
                truncate: !0,
              }),
            ),
          }),
        }),
        (0, _.jsx)(_.Options, {
          children: _.map((_, _) =>
            (0, _.jsxs)(
              _.Option,
              {
                value: _,
                children: [
                  (0, _.jsx)(_, {
                    flexGrow: `1`,
                    minWidth: `0`,
                    children: (0, _.jsx)(_, {
                      contrast: `title`,
                      children: _(_),
                    }),
                  }),
                  _.cItems > 0 &&
                    (0, _.jsxs)(_, {
                      color: `accent-8`,
                      children: [`(`, _.cItems, `)`],
                    }),
                ],
              },
              _,
            ),
          ),
        }),
      ],
    }),
  });
}
function _(_) {
  let { wishlistItem: _, showManageCategories: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(_),
    [_, _] = _(),
    _ =
      !_ || _
        ? _.Localize(`#wishlist_controls_categories_header_anonymous`)
        : void 0,
    _ = _ ? _.k_ECategoryButtonAction_None : _.k_ECategoryButtonAction_Filter,
    _ = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (_ || _.length > 0) &&
        (0, _.jsx)(_, {
          rgCategories: _,
          eAction: _,
          bShowEmptyLabel: _ || !_,
          onClick: _ ? void 0 : _,
          header: _,
        }),
      !_ &&
        _ &&
        !_ &&
        (0, _.jsx)(_, {
          onClick: _,
          categoryCount: _.length,
        }),
    ],
  });
}
function _(_) {
  let [_, _] = _.useState(!1);
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
        onAdvanced: () => _(!0),
      });
}
var _ = `XCl1MiwByZw-`;
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`h1`, {
          children: _.Localize(`#errorpage_error`),
        }),
        (0, _.jsx)(`h3`, {
          children: (0, _.jsx)(_, {
            error: _.error,
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { error: _ } = _;
  switch (_) {
    case `ProfileNotFound`:
      return _.Localize(`#wishlist_error_profilenotfound`);
    case `WishlistLoadFailed`:
      return _.Localize(`#wishlist_error_wishlistunavailable`);
    case `RateLimit`:
      return _.Localize(`#Error_RateLimited`);
    case `InvalidShareToken`:
      return _.Localize(`#wishlist_error_invalidsharetoken`);
    default:
      return (
        _(_, `Unhandled error code ${_}`), _.Localize(`#errorpage_unknownerror`)
      );
  }
}
var _ = _(_());
function _(_) {
  "@babel/helpers - typeof";
  return (
    (_ =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (_) {
            return typeof _;
          }
        : function (_) {
            return _ &&
              typeof Symbol == `function` &&
              _.constructor === Symbol &&
              _ !== Symbol.prototype
              ? `symbol`
              : typeof _;
          }),
    _(_)
  );
}
function _(_, _) {
  if (_(_) != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (_(_) != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_) {
  var _ = _(_, `string`);
  return _(_) == `symbol` ? _ : _ + ``;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    _ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _);
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_) {
  return (
    `Minified Redux error #` +
    _ +
    `; visit https://redux.js.org/Errors?code=` +
    _ +
    ` for the full message or use the non-minified dev environment for full errors. `
  );
}
var _ = (function () {
    return (typeof Symbol == `function` && Symbol.observable) || `@@observable`;
  })(),
  _ = function () {
    return Math.random().toString(36).substring(7).split(``).join(`.`);
  },
  _ = {
    INIT: `@@redux/INIT` + _(),
    REPLACE: `@@redux/REPLACE` + _(),
    PROBE_UNKNOWN_ACTION: function () {
      return `@@redux/PROBE_UNKNOWN_ACTION` + _();
    },
  };
function _(_) {
  if (typeof _ != `object` || !_) return !1;
  for (var _ = _; Object.getPrototypeOf(_) !== null; )
    _ = Object.getPrototypeOf(_);
  return Object.getPrototypeOf(_) === _;
}
function _(_, _, _) {
  var _;
  if (
    (typeof _ == `function` && typeof _ == `function`) ||
    (typeof _ == `function` && typeof arguments[3] == `function`)
  )
    throw Error(_(0));
  if (
    (typeof _ == `function` && _ === void 0 && ((_ = _), (_ = void 0)),
    _ !== void 0)
  ) {
    if (typeof _ != `function`) throw Error(_(1));
    return _(_)(_, _);
  }
  if (typeof _ != `function`) throw Error(_(2));
  var _ = _,
    _ = _,
    _ = [],
    _ = _,
    _ = !1;
  function _() {
    _ === _ && (_ = _.slice());
  }
  function _() {
    if (_) throw Error(_(3));
    return _;
  }
  function _(_) {
    if (typeof _ != `function`) throw Error(_(4));
    if (_) throw Error(_(5));
    var _ = !0;
    return (
      _(),
      _.push(_),
      function () {
        if (_) {
          if (_) throw Error(_(6));
          (_ = !1), _();
          var _ = _.indexOf(_);
          _.splice(_, 1), (_ = null);
        }
      }
    );
  }
  function _(_) {
    if (!_(_)) throw Error(_(7));
    if (_.type === void 0) throw Error(_(8));
    if (_) throw Error(_(9));
    try {
      (_ = !0), (_ = _(_, _));
    } finally {
      _ = !1;
    }
    for (var _ = (_ = _), _ = 0; _ < _.length; _++) {
      var _ = _[_];
      _();
    }
    return _;
  }
  function _(_) {
    if (typeof _ != `function`) throw Error(_(10));
    (_ = _),
      _({
        type: _.REPLACE,
      });
  }
  function _() {
    var _,
      _ = _;
    return (
      (_ = {
        subscribe: function (_) {
          if (typeof _ != `object` || !_) throw Error(_(11));
          function _() {
            _.next && _.next(_());
          }
          return (
            _(),
            {
              unsubscribe: _(_),
            }
          );
        },
      }),
      (_[_] = function () {
        return this;
      }),
      _
    );
  }
  return (
    _({
      type: _.INIT,
    }),
    (_ = {
      dispatch: _,
      subscribe: _,
      getState: _,
      replaceReducer: _,
    }),
    (_[_] = _),
    _
  );
}
function _(_, _) {
  return function () {
    return _(_.apply(this, arguments));
  };
}
function _(_, _) {
  if (typeof _ == `function`) return _(_, _);
  if (typeof _ != `object` || !_) throw Error(_(16));
  var _ = {};
  for (var _ in _) {
    var _ = _[_];
    typeof _ == `function` && (_[_] = _(_, _));
  }
  return _;
}
function _() {
  var _ = [...arguments];
  return _.length === 0
    ? function (_) {
        return _;
      }
    : _.length === 1
      ? _[0]
      : _.reduce(function (_, _) {
          return function () {
            return _(_.apply(void 0, arguments));
          };
        });
}
function _() {
  var _ = [...arguments];
  return function (_) {
    return function () {
      var _ = _.apply(void 0, arguments),
        _ = function () {
          throw Error(_(15));
        },
        _ = {
          getState: _.getState,
          dispatch: function () {
            return _.apply(void 0, arguments);
          },
        },
        _ = _.map(function (_) {
          return _(_);
        });
      return (
        (_ = _.apply(void 0, _)(_.dispatch)),
        _(
          _({}, _),
          {},
          {
            dispatch: _,
          },
        )
      );
    };
  };
}
var _ = _(),
  _ = _();
function _(_) {
  _();
}
var _ = _,
  _ = (_) => (_ = _),
  _ = () => _,
  _ = Symbol.for(`react-redux-context`),
  _ = typeof globalThis < `u` ? globalThis : {};
function _() {
  if (!_.createContext) return {};
  let _ = _[_] ?? (_[_] = new Map()),
    _ = _.get(_.createContext);
  return _ || ((_ = _.createContext(null)), _.set(_.createContext, _)), _;
}
var _ = _(),
  _ = () => {
    throw Error(`uSES not initialized!`);
  },
  _ = _(_()),
  _ = _(),
  _ = [`initMapStateToProps`, `initMapDispatchToProps`, `initMergeProps`];
function _(
  _,
  _,
  _,
  _,
  { areStatesEqual: _, areOwnPropsEqual: _, areStatePropsEqual: _ },
) {
  let _ = !1,
    _,
    _,
    _,
    _,
    _;
  function _(_, _) {
    return (
      (_ = _),
      (_ = _),
      (_ = _(_, _)),
      (_ = _(_, _)),
      (_ = _(_, _, _)),
      (_ = !0),
      _
    );
  }
  function _() {
    return (
      (_ = _(_, _)), _.dependsOnOwnProps && (_ = _(_, _)), (_ = _(_, _, _)), _
    );
  }
  function _() {
    return (
      _.dependsOnOwnProps && (_ = _(_, _)),
      _.dependsOnOwnProps && (_ = _(_, _)),
      (_ = _(_, _, _)),
      _
    );
  }
  function _() {
    let _ = _(_, _),
      _ = !_(_, _);
    return (_ = _), _ && (_ = _(_, _, _)), _;
  }
  function _(_, _) {
    let _ = !_(_, _),
      _ = !_(_, _, _, _);
    return (_ = _), (_ = _), _ && _ ? _() : _ ? _() : _ ? _() : _;
  }
  return function (_, _) {
    return _ ? _(_, _) : _(_, _);
  };
}
function _(_, _) {
  let {
      initMapStateToProps: _,
      initMapDispatchToProps: _,
      initMergeProps: _,
    } = _,
    _ = _(_, _);
  return _(_(_, _), _(_, _), _(_, _), _, _);
}
function _(_, _) {
  let _ = {};
  for (let _ in _) {
    let _ = _[_];
    typeof _ == `function` && (_[_] = (..._) => _(_(..._)));
  }
  return _;
}
function _(_) {
  return function (_) {
    let _ = _(_);
    function _() {
      return _;
    }
    return (_.dependsOnOwnProps = !1), _;
  };
}
function _(_) {
  return _.dependsOnOwnProps ? !!_.dependsOnOwnProps : _.length !== 1;
}
function _(_, _) {
  return function (_, { displayName: _ }) {
    let _ = function (_, _) {
      return _.dependsOnOwnProps ? _.mapToProps(_, _) : _.mapToProps(_, void 0);
    };
    return (
      (_.dependsOnOwnProps = !0),
      (_.mapToProps = function (_, _) {
        (_.mapToProps = _), (_.dependsOnOwnProps = _(_));
        let _ = _(_, _);
        return (
          typeof _ == `function` &&
            ((_.mapToProps = _), (_.dependsOnOwnProps = _(_)), (_ = _(_, _))),
          _
        );
      }),
      _
    );
  };
}
function _(_, _) {
  return (_, _) => {
    throw Error(
      `Invalid value of type ${typeof _} for ${_} argument when connecting component ${_.wrappedComponentName}.`,
    );
  };
}
function _(_) {
  return _ && typeof _ == `object`
    ? _((_) => _(_, _))
    : _
      ? typeof _ == `function`
        ? _(_, `mapDispatchToProps`)
        : _(_, `mapDispatchToProps`)
      : _((_) => ({
          dispatch: _,
        }));
}
function _(_) {
  return _
    ? typeof _ == `function`
      ? _(_, `mapStateToProps`)
      : _(_, `mapStateToProps`)
    : _(() => ({}));
}
function _(_, _, _) {
  return _({}, _, _, _);
}
function _(_) {
  return function (_, { displayName: _, areMergedPropsEqual: _ }) {
    let _ = !1,
      _;
    return function (_, _, _) {
      let _ = _(_, _, _);
      return _ ? _(_, _) || (_ = _) : ((_ = !0), (_ = _)), _;
    };
  };
}
function _(_) {
  return _ ? (typeof _ == `function` ? _(_) : _(_, `mergeProps`)) : () => _;
}
function _() {
  let _ = _(),
    _ = null,
    _ = null;
  return {
    clear() {
      (_ = null), (_ = null);
    },
    notify() {
      _(() => {
        let _ = _;
        for (; _; ) _.callback(), (_ = _.next);
      });
    },
    get() {
      let _ = [],
        _ = _;
      for (; _; ) _.push(_), (_ = _.next);
      return _;
    },
    subscribe(_) {
      let _ = !0,
        _ = (_ = {
          callback: _,
          next: null,
          prev: _,
        });
      return (
        _.prev ? (_.prev.next = _) : (_ = _),
        function () {
          !_ ||
            _ === null ||
            ((_ = !1),
            _.next ? (_.next.prev = _.prev) : (_ = _.prev),
            _.prev ? (_.prev.next = _.next) : (_ = _.next));
        }
      );
    },
  };
}
var _ = {
  notify() {},
  get: () => [],
};
function _(_, _) {
  let _,
    _ = _,
    _ = 0,
    _ = !1;
  function _(_) {
    _();
    let _ = _.subscribe(_),
      _ = !1;
    return () => {
      _ || ((_ = !0), _(), _());
    };
  }
  function _() {
    _.notify();
  }
  function _() {
    _.onStateChange && _.onStateChange();
  }
  function _() {
    return _;
  }
  function _() {
    _++, _ || ((_ = _ ? _.addNestedSub(_) : _.subscribe(_)), (_ = _()));
  }
  function _() {
    _--, _ && _ === 0 && (_(), (_ = void 0), _.clear(), (_ = _));
  }
  function _() {
    _ || ((_ = !0), _());
  }
  function _() {
    _ && ((_ = !1), _());
  }
  let _ = {
    addNestedSub: _,
    notifyNestedSubs: _,
    handleChangeWrapper: _,
    isSubscribed: _,
    trySubscribe: _,
    tryUnsubscribe: _,
    getListeners: () => _,
  };
  return _;
}
var _ =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0
    ? _.useLayoutEffect
    : _.useEffect;
function _(_, _) {
  return _ === _ ? _ !== 0 || _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
}
function _(_, _) {
  if (_(_, _)) return !0;
  if (typeof _ != `object` || !_ || typeof _ != `object` || !_) return !1;
  let _ = Object.keys(_),
    _ = Object.keys(_);
  if (_.length !== _.length) return !1;
  for (let _ = 0; _ < _.length; _++)
    if (!Object.prototype.hasOwnProperty.call(_, _[_]) || !_(_[_[_]], _[_[_]]))
      return !1;
  return !0;
}
var _ = [`reactReduxForwardedRef`],
  _ = _,
  _ = (_) => {
    _ = _;
  },
  _ = [null, null];
function _(_, _, _) {
  _(() => _(..._), _);
}
function _(_, _, _, _, _, _) {
  (_.current = _), (_.current = !1), _.current && ((_.current = null), _());
}
function _(_, _, _, _, _, _, _, _, _, _, _) {
  if (!_) return () => {};
  let _ = !1,
    _ = null,
    _ = () => {
      if (_ || !_.current) return;
      let _ = _.getState(),
        _,
        _;
      try {
        _ = _(_, _.current);
      } catch (_) {
        (_ = _), (_ = _);
      }
      _ || (_ = null),
        _ === _.current
          ? _.current || _()
          : ((_.current = _), (_.current = _), (_.current = !0), _());
    };
  return (
    (_.onStateChange = _),
    _.trySubscribe(),
    _(),
    () => {
      if (((_ = !0), _.tryUnsubscribe(), (_.onStateChange = null), _)) throw _;
    }
  );
}
function _(_, _) {
  return _ === _;
}
function _(
  _,
  _,
  _,
  {
    pure: _,
    areStatesEqual: _ = _,
    areOwnPropsEqual: _ = _,
    areStatePropsEqual: _ = _,
    areMergedPropsEqual: _ = _,
    forwardRef: _ = !1,
    context: _ = _,
  } = {},
) {
  let _ = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = !!_;
  return (_) => {
    let _ = _.displayName || _.name || `Component`,
      _ = `Connect(${_})`,
      _ = {
        shouldHandleStateChanges: _,
        displayName: _,
        wrappedComponentName: _,
        WrappedComponent: _,
        initMapStateToProps: _,
        initMapDispatchToProps: _,
        initMergeProps: _,
        areStatesEqual: _,
        areStatePropsEqual: _,
        areOwnPropsEqual: _,
        areMergedPropsEqual: _,
      };
    function _(_) {
      let [_, _, _] = _.useMemo(() => {
          let { reactReduxForwardedRef: _ } = _,
            _ = _(_, _);
          return [_.context, _, _];
        }, [_]),
        _ = _.useMemo(
          () =>
            _ &&
            _.Consumer &&
            (0, _.isContextConsumer)(_.createElement(_.Consumer, null))
              ? _
              : _,
          [_, _],
        ),
        _ = _.useContext(_),
        _ = !!_.store && !!_.store.getState && !!_.store.dispatch,
        _ = !!_ && !!_.store,
        _ = _ ? _.store : _.store,
        _ = _ ? _.getServerState : _.getState,
        _ = _.useMemo(() => _(_.dispatch, _), [_]),
        [_, _] = _.useMemo(() => {
          if (!_) return _;
          let _ = _(_, _ ? void 0 : _.subscription);
          return [_, _.notifyNestedSubs.bind(_)];
        }, [_, _, _]),
        _ = _.useMemo(
          () =>
            _
              ? _
              : _({}, _, {
                  subscription: _,
                }),
          [_, _, _],
        ),
        _ = _.useRef(),
        _ = _.useRef(_),
        _ = _.useRef(),
        _ = _.useRef(!1);
      _.useRef(!1);
      let _ = _.useRef(!1),
        _ = _.useRef();
      _(
        () => (
          (_.current = !0),
          () => {
            _.current = !1;
          }
        ),
        [],
      );
      let _ = _.useMemo(
          () => () =>
            _.current && _ === _.current ? _.current : _(_.getState(), _),
          [_, _],
        ),
        _ = _.useMemo(
          () => (_) => (_ ? _(_, _, _, _, _, _, _, _, _, _, _) : () => {}),
          [_],
        );
      _(_, [_, _, _, _, _, _]);
      let _;
      try {
        _ = _(_, _, _ ? () => _(_(), _) : _);
      } catch (_) {
        throw (
          (_.current &&
            (_.message += `\nThe error may be correlated with this previous error:\n${_.current.stack}\n\n`),
          _)
        );
      }
      _(() => {
        (_.current = void 0), (_.current = void 0), (_.current = _);
      });
      let _ = _.useMemo(
        () =>
          _.createElement(
            _,
            _({}, _, {
              ref: _,
            }),
          ),
        [_, _, _],
      );
      return _.useMemo(
        () =>
          _
            ? _.createElement(
                _.Provider,
                {
                  value: _,
                },
                _,
              )
            : _,
        [_, _, _],
      );
    }
    let _ = _.memo(_);
    if (((_.WrappedComponent = _), (_.displayName = _.displayName = _), _)) {
      let _ = _.forwardRef(function (_, _) {
        return _.createElement(
          _,
          _({}, _, {
            reactReduxForwardedRef: _,
          }),
        );
      });
      return (
        (_.displayName = _), (_.WrappedComponent = _), (0, _.default)(_, _)
      );
    }
    return (0, _.default)(_, _);
  };
}
function _({
  store: _,
  context: _,
  children: _,
  serverState: _,
  stabilityCheck: _ = `once`,
  noopCheck: _ = `once`,
}) {
  let _ = _.useMemo(
      () => ({
        store: _,
        subscription: _(_),
        getServerState: _ ? () => _ : void 0,
        stabilityCheck: _,
        noopCheck: _,
      }),
      [_, _, _, _],
    ),
    _ = _.useMemo(() => _.getState(), [_]);
  _(() => {
    let { subscription: _ } = _;
    return (
      (_.onStateChange = _.notifyNestedSubs),
      _.trySubscribe(),
      _ !== _.getState() && _.notifyNestedSubs(),
      () => {
        _.tryUnsubscribe(), (_.onStateChange = void 0);
      }
    );
  }, [_, _]);
  let _ = _ || _;
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
_.useSyncExternalStoreWithSelector,
  _(_.useSyncExternalStore),
  _(_.unstable_batchedUpdates);
function _(_, _) {
  if (_.length !== _.length) return !1;
  for (var _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_, _) {
  var _ = (0, _.useState)(function () {
      return {
        inputs: _,
        result: _(),
      };
    })[0],
    _ = (0, _.useRef)(!0),
    _ = (0, _.useRef)(_),
    _ =
      _.current || (_ && _.current.inputs && _(_, _.current.inputs))
        ? _.current
        : {
            inputs: _,
            result: _(),
          };
  return (
    (0, _.useEffect)(
      function () {
        (_.current = !1), (_.current = _);
      },
      [_],
    ),
    _.result
  );
}
function _(_, _) {
  return _(function () {
    return _;
  }, _);
}
var _ = _,
  _ = _,
  _ = function (_) {
    var _ = _.top,
      _ = _.right,
      _ = _.bottom,
      _ = _.left;
    return {
      top: _,
      right: _,
      bottom: _,
      left: _,
      width: _ - _,
      height: _ - _,
      _: _,
      _: _,
      center: {
        _: (_ + _) / 2,
        _: (_ + _) / 2,
      },
    };
  },
  _ = function (_, _) {
    return {
      top: _.top - _.top,
      left: _.left - _.left,
      bottom: _.bottom + _.bottom,
      right: _.right + _.right,
    };
  },
  _ = function (_, _) {
    return {
      top: _.top + _.top,
      left: _.left + _.left,
      bottom: _.bottom - _.bottom,
      right: _.right - _.right,
    };
  },
  _ = function (_, _) {
    return {
      top: _.top + _._,
      left: _.left + _._,
      bottom: _.bottom + _._,
      right: _.right + _._,
    };
  },
  _ = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  _ = function (_) {
    var _ = _.borderBox,
      _ = _.margin,
      _ = _ === void 0 ? _ : _,
      _ = _.border,
      _ = _ === void 0 ? _ : _,
      _ = _.padding,
      _ = _ === void 0 ? _ : _,
      _ = _(_(_, _)),
      _ = _(_(_, _)),
      _ = _(_(_, _));
    return {
      marginBox: _,
      borderBox: _(_),
      paddingBox: _,
      contentBox: _,
      margin: _,
      border: _,
      padding: _,
    };
  },
  _ = function (_) {
    var _ = _.slice(0, -2);
    if (_.slice(-2) !== `px`) return 0;
    var _ = Number(_);
    return isNaN(_) && _(!1), _;
  },
  _ = function () {
    return {
      _: window.pageXOffset,
      _: window.pageYOffset,
    };
  },
  _ = function (_, _) {
    var _ = _.borderBox,
      _ = _.border,
      _ = _.margin,
      _ = _.padding;
    return _({
      borderBox: _(_, _),
      border: _,
      margin: _,
      padding: _,
    });
  },
  _ = function (_, _) {
    return _ === void 0 && (_ = _()), _(_, _);
  },
  _ = function (_, _) {
    return _({
      borderBox: _,
      margin: {
        top: _(_.marginTop),
        right: _(_.marginRight),
        bottom: _(_.marginBottom),
        left: _(_.marginLeft),
      },
      padding: {
        top: _(_.paddingTop),
        right: _(_.paddingRight),
        bottom: _(_.paddingBottom),
        left: _(_.paddingLeft),
      },
      border: {
        top: _(_.borderTopWidth),
        right: _(_.borderRightWidth),
        bottom: _(_.borderBottomWidth),
        left: _(_.borderLeftWidth),
      },
    });
  },
  _ = function (_) {
    return _(_.getBoundingClientRect(), window.getComputedStyle(_));
  },
  _ =
    Number.isNaN ||
    function (_) {
      return typeof _ == `number` && _ !== _;
    };
function _(_, _) {
  return !!(_ === _ || (_(_) && _(_)));
}
function _(_, _) {
  if (_.length !== _.length) return !1;
  for (var _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
  return !0;
}
function _(_, _) {
  _ === void 0 && (_ = _);
  var _ = null;
  function _() {
    var _ = [...arguments];
    if (_ && _.lastThis === this && _(_, _.lastArgs)) return _.lastResult;
    var _ = _.apply(this, _);
    return (
      (_ = {
        lastResult: _,
        lastArgs: _,
        lastThis: this,
      }),
      _
    );
  }
  return (
    (_.clear = function () {
      _ = null;
    }),
    _
  );
}
var _ = function (_) {
  var _ = [],
    _ = null,
    _ = function () {
      (_ = [...arguments]),
        !_ &&
          (_ = requestAnimationFrame(function () {
            (_ = null), _.apply(void 0, _);
          }));
    };
  return (
    (_.cancel = function () {
      _ &&= (cancelAnimationFrame(_), null);
    }),
    _
  );
};
function _(_, _) {}
_.bind(null, `warn`), _.bind(null, `error`);
function _() {}
function _(_, _) {
  return {
    ..._,
    ..._,
  };
}
function _(_, _, _) {
  let _ = _.map((_) => {
    let _ = _(_, _.options);
    return (
      _.addEventListener(_.eventName, _._, _),
      function () {
        _.removeEventListener(_.eventName, _._, _);
      }
    );
  });
  return function () {
    _.forEach((_) => {
      _();
    });
  };
}
var _ = `Invariant failed`,
  _ = class extends Error {};
_.prototype.toString = function () {
  return this.message;
};
function _(_, _) {
  if (!_) throw new _(_);
}
var _ = class extends _.Component {
    constructor(..._) {
      super(..._),
        (this.callbacks = null),
        (this.unbind = _),
        (this.onWindowError = (_) => {
          let _ = this.getCallbacks();
          _.isDragging() && _.tryAbort(),
            _.error instanceof _ && _.preventDefault();
        }),
        (this.getCallbacks = () => {
          if (!this.callbacks)
            throw Error(`Unable to find AppCallbacks in <ErrorBoundary/>`);
          return this.callbacks;
        }),
        (this.setCallbacks = (_) => {
          this.callbacks = _;
        });
    }
    componentDidMount() {
      this.unbind = _(window, [
        {
          eventName: `error`,
          _: this.onWindowError,
        },
      ]);
    }
    componentDidCatch(_) {
      if (_ instanceof _) {
        this.setState({});
        return;
      }
      throw _;
    }
    componentWillUnmount() {
      this.unbind();
    }
    render() {
      return this.props.children(this.setCallbacks);
    }
  },
  _ = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  _ = (_) => _ + 1,
  _ = (_) => `
  You have lifted an item in position ${_(_.source.index)}
`,
  _ = (_, _) => {
    let _ = _.droppableId === _.droppableId,
      _ = _(_.index),
      _ = _(_.index);
    return _
      ? `
      You have moved the item from position ${_}
      to position ${_}
    `
      : `
    You have moved the item from position ${_}
    in list ${_.droppableId}
    to list ${_.droppableId}
    in position ${_}
  `;
  },
  _ = (_, _, _) =>
    _.droppableId === _.droppableId
      ? `
      The item ${_}
      has been combined with ${_.draggableId}`
      : `
      The item ${_}
      in list ${_.droppableId}
      has been combined with ${_.draggableId}
      in list ${_.droppableId}
    `,
  _ = (_) => {
    let _ = _.destination;
    if (_) return _(_.source, _);
    let _ = _.combine;
    return _
      ? _(_.draggableId, _.source, _)
      : `You are over an area that cannot be dropped on`;
  },
  _ = (_) => `
  The item has returned to its starting position
  of ${_(_.index)}
`,
  _ = {
    dragHandleUsageInstructions: _,
    onDragStart: _,
    onDragUpdate: _,
    onDragEnd: (_) => {
      if (_.reason === `CANCEL`)
        return `
      Movement cancelled.
      ${_(_.source)}
    `;
      let _ = _.destination,
        _ = _.combine;
      return _
        ? `
      You have dropped the item.
      ${_(_.source, _)}
    `
        : _
          ? `
      You have dropped the item.
      ${_(_.draggableId, _.source, _)}
    `
          : `
    The item has been dropped while not over a drop area.
    ${_(_.source)}
  `;
    },
  },
  _ = {
    _: 0,
    _: 0,
  },
  _ = (_, _) => ({
    _: _._ + _._,
    _: _._ + _._,
  }),
  _ = (_, _) => ({
    _: _._ - _._,
    _: _._ - _._,
  }),
  _ = (_, _) => _._ === _._ && _._ === _._,
  _ = (_) => ({
    _: _._ === 0 ? 0 : -_._,
    _: _._ === 0 ? 0 : -_._,
  }),
  _ = (_, _, _ = 0) =>
    _ === `x`
      ? {
          _: _,
          _: _,
        }
      : {
          _: _,
          _: _,
        },
  _ = (_, _) => Math.sqrt((_._ - _._) ** 2 + (_._ - _._) ** 2),
  _ = (_, _) => Math.min(..._.map((_) => _(_, _))),
  _ = (_) => (_) => ({
    _: _(_._),
    _: _(_._),
  }),
  _ = (_, _) => {
    let _ = _({
      top: Math.max(_.top, _.top),
      right: Math.min(_.right, _.right),
      bottom: Math.min(_.bottom, _.bottom),
      left: Math.max(_.left, _.left),
    });
    return _.width <= 0 || _.height <= 0 ? null : _;
  },
  _ = (_, _) => ({
    top: _.top + _._,
    left: _.left + _._,
    bottom: _.bottom + _._,
    right: _.right + _._,
  }),
  _ = (_) => [
    {
      _: _.left,
      _: _.top,
    },
    {
      _: _.right,
      _: _.top,
    },
    {
      _: _.left,
      _: _.bottom,
    },
    {
      _: _.right,
      _: _.bottom,
    },
  ],
  _ = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  _ = (_, _) => (_ ? _(_, _.scroll.diff.displacement) : _),
  _ = (_, _, _) =>
    _ && _.increasedBy
      ? {
          ..._,
          [_.end]: _[_.end] + _.increasedBy[_.line],
        }
      : _,
  _ = (_, _) => (_ && _.shouldClipSubject ? _(_.pageMarginBox, _) : _(_)),
  _ = ({ page: _, withPlaceholder: _, axis: _, frame: _ }) => ({
    page: _,
    withPlaceholder: _,
    active: _(_(_(_.marginBox, _), _, _), _),
  }),
  _ = (_, _) => {
    !_.frame && _(!1);
    let _ = _.frame,
      _ = _(_, _.scroll.initial),
      _ = _(_),
      _ = {
        ..._,
        scroll: {
          initial: _.scroll.initial,
          current: _,
          diff: {
            value: _,
            displacement: _,
          },
          max: _.scroll.max,
        },
      },
      _ = _({
        page: _.subject.page,
        withPlaceholder: _.subject.withPlaceholder,
        axis: _.axis,
        frame: _,
      });
    return {
      ..._,
      frame: _,
      subject: _,
    };
  },
  _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
  _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
  _ = _((_) => Object.values(_)),
  _ = _((_) => Object.values(_)),
  _ = _((_, _) =>
    _(_)
      .filter((_) => _ === _.descriptor.droppableId)
      .sort((_, _) => _.descriptor.index - _.descriptor.index),
  );
function _(_) {
  return _._ && _._.type === `REORDER` ? _._.destination : null;
}
function _(_) {
  return _._ && _._.type === `COMBINE` ? _._.combine : null;
}
var _ = _((_, _) => _.filter((_) => _.descriptor._ !== _.descriptor._)),
  _ = ({
    isMovingForward: _,
    draggable: _,
    destination: _,
    insideDestination: _,
    previousImpact: _,
  }) => {
    if (!_.isCombineEnabled || !_(_)) return null;
    function _(_) {
      let _ = {
        type: `COMBINE`,
        combine: {
          draggableId: _,
          droppableId: _.descriptor._,
        },
      };
      return {
        ..._,
        _: _,
      };
    }
    let _ = _.displaced.all,
      _ = _.length ? _[0] : null;
    if (_) return _ ? _(_) : null;
    let _ = _(_, _);
    if (!_) {
      if (!_.length) return null;
      let _ = _[_.length - 1];
      return _(_.descriptor._);
    }
    let _ = _.findIndex((_) => _.descriptor._ === _);
    _ === -1 && _(!1);
    let _ = _ - 1;
    if (_ < 0) return null;
    let _ = _[_];
    return _(_.descriptor._);
  },
  _ = (_, _) => _.descriptor.droppableId === _.descriptor._,
  _ = {
    point: _,
    value: 0,
  },
  _ = {
    invisible: {},
    visible: {},
    all: [],
  },
  _ = {
    displaced: _,
    displacedBy: _,
    _: null,
  },
  _ = (_, _) => (_) => _ <= _ && _ <= _,
  _ = (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => {
      if (_(_.top) && _(_.bottom) && _(_.left) && _(_.right)) return !0;
      let _ = _(_.top) || _(_.bottom),
        _ = _(_.left) || _(_.right);
      if (_ && _) return !0;
      let _ = _.top < _.top && _.bottom > _.bottom,
        _ = _.left < _.left && _.right > _.right;
      return _ && _ ? !0 : (_ && _) || (_ && _);
    };
  },
  _ = (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => _(_.top) && _(_.bottom) && _(_.left) && _(_.right);
  },
  _ = {
    direction: `vertical`,
    line: `y`,
    crossAxisLine: `x`,
    start: `top`,
    end: `bottom`,
    size: `height`,
    crossAxisStart: `left`,
    crossAxisEnd: `right`,
    crossAxisSize: `width`,
  },
  _ = {
    direction: `horizontal`,
    line: `x`,
    crossAxisLine: `y`,
    start: `left`,
    end: `right`,
    size: `width`,
    crossAxisStart: `top`,
    crossAxisEnd: `bottom`,
    crossAxisSize: `height`,
  },
  _ = (_) => (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => (_ === _ ? _(_.top) && _(_.bottom) : _(_.left) && _(_.right));
  },
  _ = (_, _) => _(_, _.frame ? _.frame.scroll.diff.displacement : _),
  _ = (_, _, _) => (_.subject.active ? _(_.subject.active)(_) : !1),
  _ = (_, _, _) => _(_)(_),
  _ = ({
    target: _,
    destination: _,
    viewport: _,
    withDroppableDisplacement: _,
    isVisibleThroughFrameFn: _,
  }) => {
    let _ = _ ? _(_, _) : _;
    return _(_, _, _) && _(_, _, _);
  },
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _,
    }),
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _,
    }),
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _(_.destination.axis),
    }),
  _ = (_, _, _) => {
    if (typeof _ == `boolean`) return _;
    if (!_) return !0;
    let { invisible: _, visible: _ } = _;
    if (_[_]) return !1;
    let _ = _[_];
    return !_ || _.shouldAnimate;
  };
function _(_, _) {
  let _ = _.page.marginBox;
  return _(
    _(_, {
      top: _.point._,
      right: 0,
      bottom: 0,
      left: _.point._,
    }),
  );
}
function _({
  afterDragging: _,
  destination: _,
  displacedBy: _,
  viewport: _,
  forceShouldAnimate: _,
  last: _,
}) {
  return _.reduce(
    function (_, _) {
      let _ = _(_, _),
        _ = _.descriptor._;
      if (
        (_.all.push(_),
        !_({
          target: _,
          destination: _,
          viewport: _,
          withDroppableDisplacement: !0,
        }))
      )
        return (_.invisible[_.descriptor._] = !0), _;
      let _ = {
        draggableId: _,
        shouldAnimate: _(_, _, _),
      };
      return (_.visible[_] = _), _;
    },
    {
      all: [],
      visible: {},
      invisible: {},
    },
  );
}
function _(_, _) {
  if (!_.length) return 0;
  let _ = _[_.length - 1].descriptor.index;
  return _.inHomeList ? _ : _ + 1;
}
function _({
  insideDestination: _,
  inHomeList: _,
  displacedBy: _,
  destination: _,
}) {
  let _ = _(_, {
    inHomeList: _,
  });
  return {
    displaced: _,
    displacedBy: _,
    _: {
      type: `REORDER`,
      destination: {
        droppableId: _.descriptor._,
        index: _,
      },
    },
  };
}
function _({
  draggable: _,
  insideDestination: _,
  destination: _,
  viewport: _,
  displacedBy: _,
  last: _,
  index: _,
  forceShouldAnimate: _,
}) {
  let _ = _(_, _);
  if (_ == null)
    return _({
      insideDestination: _,
      inHomeList: _,
      displacedBy: _,
      destination: _,
    });
  let _ = _.find((_) => _.descriptor.index === _);
  if (!_)
    return _({
      insideDestination: _,
      inHomeList: _,
      displacedBy: _,
      destination: _,
    });
  let _ = _(_, _),
    _ = _.indexOf(_);
  return {
    displaced: _({
      afterDragging: _.slice(_),
      destination: _,
      displacedBy: _,
      last: _,
      viewport: _.frame,
      forceShouldAnimate: _,
    }),
    displacedBy: _,
    _: {
      type: `REORDER`,
      destination: {
        droppableId: _.descriptor._,
        index: _,
      },
    },
  };
}
function _(_, _) {
  return !!_.effected[_];
}
var _ = ({
    isMovingForward: _,
    destination: _,
    draggables: _,
    combine: _,
    afterCritical: _,
  }) => {
    if (!_.isCombineEnabled) return null;
    let _ = _.draggableId,
      _ = _[_].descriptor.index;
    return _(_, _) ? (_ ? _ : _ - 1) : _ ? _ + 1 : _;
  },
  _ = ({
    isMovingForward: _,
    isInHomeList: _,
    insideDestination: _,
    location: _,
  }) => {
    if (!_.length) return null;
    let _ = _.index,
      _ = _ ? _ + 1 : _ - 1,
      _ = _[0].descriptor.index,
      _ = _[_.length - 1].descriptor.index,
      _ = _ ? _ : _ + 1;
    return _ < _ || _ > _ ? null : _;
  },
  _ = ({
    isMovingForward: _,
    isInHomeList: _,
    draggable: _,
    draggables: _,
    destination: _,
    insideDestination: _,
    previousImpact: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _._;
    if ((!_ && _(!1), _.type === `REORDER`)) {
      let _ = _({
        isMovingForward: _,
        isInHomeList: _,
        location: _.destination,
        insideDestination: _,
      });
      return _ == null
        ? null
        : _({
            draggable: _,
            insideDestination: _,
            destination: _,
            viewport: _,
            last: _.displaced,
            displacedBy: _.displacedBy,
            index: _,
          });
    }
    let _ = _({
      isMovingForward: _,
      destination: _,
      displaced: _.displaced,
      draggables: _,
      combine: _.combine,
      afterCritical: _,
    });
    return _ == null
      ? null
      : _({
          draggable: _,
          insideDestination: _,
          destination: _,
          viewport: _,
          last: _.displaced,
          displacedBy: _.displacedBy,
          index: _,
        });
  },
  _ = ({ displaced: _, afterCritical: _, combineWith: _, displacedBy: _ }) => {
    let _ = !!(_.visible[_] || _.invisible[_]);
    return _(_, _) ? (_ ? _ : _(_.point)) : _ ? _.point : _;
  },
  _ = ({ afterCritical: _, impact: _, draggables: _ }) => {
    let _ = _(_);
    !_ && _(!1);
    let _ = _.draggableId,
      _ = _[_].page.borderBox.center;
    return _(
      _,
      _({
        displaced: _.displaced,
        afterCritical: _,
        combineWith: _,
        displacedBy: _.displacedBy,
      }),
    );
  },
  _ = (_, _) => _.margin[_.start] + _.borderBox[_.size] / 2,
  _ = (_, _) => _.margin[_.end] + _.borderBox[_.size] / 2,
  _ = (_, _, _) =>
    _[_.crossAxisStart] +
    _.margin[_.crossAxisStart] +
    _.borderBox[_.crossAxisSize] / 2,
  _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
    _(_.line, _.marginBox[_.end] + _(_, _), _(_, _.marginBox, _)),
  _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
    _(_.line, _.marginBox[_.start] - _(_, _), _(_, _.marginBox, _)),
  _ = ({ axis: _, moveInto: _, isMoving: _ }) =>
    _(_.line, _.contentBox[_.start] + _(_, _), _(_, _.contentBox, _)),
  _ = ({
    impact: _,
    draggable: _,
    draggables: _,
    droppable: _,
    afterCritical: _,
  }) => {
    let _ = _(_.descriptor._, _),
      _ = _.page,
      _ = _.axis;
    if (!_.length)
      return _({
        axis: _,
        moveInto: _.page,
        isMoving: _,
      });
    let { displaced: _, displacedBy: _ } = _,
      _ = _.all[0];
    if (_) {
      let _ = _[_];
      return _(_, _)
        ? _({
            axis: _,
            moveRelativeTo: _.page,
            isMoving: _,
          })
        : _({
            axis: _,
            moveRelativeTo: _(_.page, _.point),
            isMoving: _,
          });
    }
    let _ = _[_.length - 1];
    return _.descriptor._ === _.descriptor._
      ? _.borderBox.center
      : _(_.descriptor._, _)
        ? _({
            axis: _,
            moveRelativeTo: _(_.page, _(_.displacedBy.point)),
            isMoving: _,
          })
        : _({
            axis: _,
            moveRelativeTo: _.page,
            isMoving: _,
          });
  },
  _ = (_, _) => {
    let _ = _.frame;
    return _ ? _(_, _.scroll.diff.displacement) : _;
  },
  _ = ({
    impact: _,
    draggable: _,
    droppable: _,
    draggables: _,
    afterCritical: _,
  }) => {
    let _ = _.page.borderBox.center,
      _ = _._;
    return !_ || !_
      ? _
      : _.type === `REORDER`
        ? _({
            impact: _,
            draggable: _,
            draggables: _,
            droppable: _,
            afterCritical: _,
          })
        : _({
            impact: _,
            draggables: _,
            afterCritical: _,
          });
  },
  _ = (_) => {
    let _ = _(_),
      _ = _.droppable;
    return _ ? _(_, _) : _;
  },
  _ = (_, _) => {
    let _ = _(_, _.scroll.initial),
      _ = _(_);
    return {
      frame: _({
        top: _._,
        bottom: _._ + _.frame.height,
        left: _._,
        right: _._ + _.frame.width,
      }),
      scroll: {
        initial: _.scroll.initial,
        max: _.scroll.max,
        current: _,
        diff: {
          value: _,
          displacement: _,
        },
      },
    };
  };
function _(_, _) {
  return _.map((_) => _[_]);
}
function _(_, _) {
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_].visible[_];
    if (_) return _;
  }
  return null;
}
var _ = ({
    impact: _,
    viewport: _,
    destination: _,
    draggables: _,
    maxScrollChange: _,
  }) => {
    let _ = _(_, _(_.scroll.current, _)),
      _ = _.frame ? _(_, _(_.frame.scroll.current, _)) : _,
      _ = _.displaced,
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        last: _,
        forceShouldAnimate: !1,
      }),
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        last: _,
        forceShouldAnimate: !1,
      }),
      _ = {},
      _ = {},
      _ = [_, _, _];
    return (
      _.all.forEach((_) => {
        let _ = _(_, _);
        if (_) {
          _[_] = _;
          return;
        }
        _[_] = !0;
      }),
      {
        ..._,
        displaced: {
          all: _.all,
          invisible: _,
          visible: _,
        },
      }
    );
  },
  _ = (_, _) => _(_.scroll.diff.displacement, _),
  _ = ({ pageBorderBoxCenter: _, draggable: _, viewport: _ }) => {
    let _ = _(_(_, _), _.page.borderBox.center);
    return _(_.client.borderBox.center, _);
  },
  _ = ({
    draggable: _,
    destination: _,
    newPageBorderBoxCenter: _,
    viewport: _,
    withDroppableDisplacement: _,
    onlyOnMainAxis: _ = !1,
  }) => {
    let _ = _(_, _.page.borderBox.center),
      _ = {
        target: _(_.page.borderBox, _),
        destination: _,
        withDroppableDisplacement: _,
        viewport: _,
      };
    return _ ? _(_) : _(_);
  },
  _ = ({
    isMovingForward: _,
    draggable: _,
    destination: _,
    draggables: _,
    previousImpact: _,
    viewport: _,
    previousPageBorderBoxCenter: _,
    previousClientSelection: _,
    afterCritical: _,
  }) => {
    if (!_.isEnabled) return null;
    let _ = _(_.descriptor._, _),
      _ = _(_, _),
      _ =
        _({
          isMovingForward: _,
          draggable: _,
          destination: _,
          insideDestination: _,
          previousImpact: _,
        }) ||
        _({
          isMovingForward: _,
          isInHomeList: _,
          draggable: _,
          draggables: _,
          destination: _,
          insideDestination: _,
          previousImpact: _,
          viewport: _,
          afterCritical: _,
        });
    if (!_) return null;
    let _ = _({
      impact: _,
      draggable: _,
      droppable: _,
      draggables: _,
      afterCritical: _,
    });
    if (
      _({
        draggable: _,
        destination: _,
        newPageBorderBoxCenter: _,
        viewport: _.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: _({
          pageBorderBoxCenter: _,
          draggable: _,
          viewport: _,
        }),
        impact: _,
        scrollJumpRequest: null,
      };
    let _ = _(_, _);
    return {
      clientSelection: _,
      impact: _({
        impact: _,
        viewport: _,
        destination: _,
        draggables: _,
        maxScrollChange: _,
      }),
      scrollJumpRequest: _,
    };
  },
  _ = (_) => {
    let _ = _.subject.active;
    return !_ && _(!1), _;
  },
  _ = ({
    isMovingForward: _,
    pageBorderBoxCenter: _,
    source: _,
    droppables: _,
    viewport: _,
  }) => {
    let _ = _.subject.active;
    if (!_) return null;
    let _ = _.axis,
      _ = _(_[_.start], _[_.end]),
      _ = _(_)
        .filter((_) => _ !== _)
        .filter((_) => _.isEnabled)
        .filter((_) => !!_.subject.active)
        .filter((_) => _(_.frame)(_(_)))
        .filter((_) => {
          let _ = _(_);
          return _
            ? _[_.crossAxisEnd] < _[_.crossAxisEnd]
            : _[_.crossAxisStart] < _[_.crossAxisStart];
        })
        .filter((_) => {
          let _ = _(_),
            _ = _(_[_.start], _[_.end]);
          return _(_[_.start]) || _(_[_.end]) || _(_[_.start]) || _(_[_.end]);
        })
        .sort((_, _) => {
          let _ = _(_)[_.crossAxisStart],
            _ = _(_)[_.crossAxisStart];
          return _ ? _ - _ : _ - _;
        })
        .filter(
          (_, _, _) => _(_)[_.crossAxisStart] === _(_[0])[_.crossAxisStart],
        );
    if (!_.length) return null;
    if (_.length === 1) return _[0];
    let _ = _.filter((_) => _(_(_)[_.start], _(_)[_.end])(_[_.line]));
    return _.length === 1
      ? _[0]
      : _.length > 1
        ? _.sort((_, _) => _(_)[_.start] - _(_)[_.start])[0]
        : _.sort((_, _) => {
            let _ = _(_, _(_(_))),
              _ = _(_, _(_(_)));
            return _ === _ ? _(_)[_.start] - _(_)[_.start] : _ - _;
          })[0];
  },
  _ = (_, _) => {
    let _ = _.page.borderBox.center;
    return _(_.descriptor._, _) ? _(_, _.displacedBy.point) : _;
  },
  _ = (_, _) => {
    let _ = _.page.borderBox;
    return _(_.descriptor._, _) ? _(_, _(_.displacedBy.point)) : _;
  },
  _ = ({
    pageBorderBoxCenter: _,
    viewport: _,
    destination: _,
    insideDestination: _,
    afterCritical: _,
  }) =>
    _.filter((_) =>
      _({
        target: _(_, _),
        destination: _,
        viewport: _.frame,
        withDroppableDisplacement: !0,
      }),
    ).sort((_, _) => {
      let _ = _(_, _(_, _(_, _))),
        _ = _(_, _(_, _(_, _)));
      return _ < _ ? -1 : _ < _ ? 1 : _.descriptor.index - _.descriptor.index;
    })[0] || null,
  _ = _(function (_, _) {
    let _ = _[_.line];
    return {
      value: _,
      point: _(_.line, _),
    };
  }),
  _ = (_, _, _) => {
    let _ = _.axis;
    if (_.descriptor.mode === `virtual`) return _(_.line, _[_.line]);
    let _ = _.subject.page.contentBox[_.size],
      _ =
        _(_.descriptor._, _).reduce(
          (_, _) => _ + _.client.marginBox[_.size],
          0,
        ) +
        _[_.line] -
        _;
    return _ <= 0 ? null : _(_.line, _);
  },
  _ = (_, _) => ({
    ..._,
    scroll: {
      ..._.scroll,
      max: _,
    },
  }),
  _ = (_, _, _) => {
    let _ = _.frame;
    _(_, _) && _(!1), _.subject.withPlaceholder && _(!1);
    let _ = _(_.axis, _.displaceBy).point,
      _ = _(_, _, _),
      _ = {
        placeholderSize: _,
        increasedBy: _,
        oldFrameMaxScroll: _.frame ? _.frame.scroll.max : null,
      };
    if (!_) {
      let _ = _({
        page: _.subject.page,
        withPlaceholder: _,
        axis: _.axis,
        frame: _.frame,
      });
      return {
        ..._,
        subject: _,
      };
    }
    let _ = _(_, _ ? _(_.scroll.max, _) : _.scroll.max),
      _ = _({
        page: _.subject.page,
        withPlaceholder: _,
        axis: _.axis,
        frame: _,
      });
    return {
      ..._,
      subject: _,
      frame: _,
    };
  },
  _ = (_) => {
    let _ = _.subject.withPlaceholder;
    !_ && _(!1);
    let _ = _.frame;
    if (!_) {
      let _ = _({
        page: _.subject.page,
        axis: _.axis,
        frame: null,
        withPlaceholder: null,
      });
      return {
        ..._,
        subject: _,
      };
    }
    let _ = _.oldFrameMaxScroll;
    !_ && _(!1);
    let _ = _(_, _),
      _ = _({
        page: _.subject.page,
        axis: _.axis,
        frame: _,
        withPlaceholder: null,
      });
    return {
      ..._,
      subject: _,
      frame: _,
    };
  },
  _ = ({
    previousPageBorderBoxCenter: _,
    moveRelativeTo: _,
    insideDestination: _,
    draggable: _,
    draggables: _,
    destination: _,
    viewport: _,
    afterCritical: _,
  }) => {
    if (!_) {
      if (_.length) return null;
      let _ = {
          displaced: _,
          displacedBy: _,
          _: {
            type: `REORDER`,
            destination: {
              droppableId: _.descriptor._,
              index: 0,
            },
          },
        },
        _ = _({
          impact: _,
          draggable: _,
          droppable: _,
          draggables: _,
          afterCritical: _,
        });
      return _({
        draggable: _,
        destination: _(_, _) ? _ : _(_, _, _),
        newPageBorderBoxCenter: _,
        viewport: _.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? _
        : null;
    }
    let _ = _[_.axis.line] <= _.page.borderBox.center[_.axis.line],
      _ = (() => {
        let _ = _.descriptor.index;
        return _.descriptor._ === _.descriptor._ || _ ? _ : _ + 1;
      })();
    return _({
      draggable: _,
      insideDestination: _,
      destination: _,
      viewport: _,
      displacedBy: _(_.axis, _.displaceBy),
      last: _,
      index: _,
    });
  },
  _ = ({
    isMovingForward: _,
    previousPageBorderBoxCenter: _,
    draggable: _,
    isOver: _,
    draggables: _,
    droppables: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _({
      isMovingForward: _,
      pageBorderBoxCenter: _,
      source: _,
      droppables: _,
      viewport: _,
    });
    if (!_) return null;
    let _ = _(_.descriptor._, _),
      _ = _({
        previousPageBorderBoxCenter: _,
        destination: _,
        draggable: _,
        draggables: _,
        moveRelativeTo: _({
          pageBorderBoxCenter: _,
          viewport: _,
          destination: _,
          insideDestination: _,
          afterCritical: _,
        }),
        insideDestination: _,
        viewport: _,
        afterCritical: _,
      });
    return _
      ? {
          clientSelection: _({
            pageBorderBoxCenter: _({
              impact: _,
              draggable: _,
              droppable: _,
              draggables: _,
              afterCritical: _,
            }),
            draggable: _,
            viewport: _,
          }),
          impact: _,
          scrollJumpRequest: null,
        }
      : null;
  },
  _ = (_) => {
    let _ = _._;
    return _
      ? _.type === `REORDER`
        ? _.destination.droppableId
        : _.combine.droppableId
      : null;
  },
  _ = (_, _) => {
    let _ = _(_);
    return _ ? _[_] : null;
  },
  _ = ({ state: _, type: _ }) => {
    let _ = _(_.impact, _.dimensions.droppables),
      _ = !!_,
      _ = _.dimensions.droppables[_.critical.droppable._],
      _ = _ || _,
      _ = _.axis.direction,
      _ =
        (_ === `vertical` && (_ === `MOVE_UP` || _ === `MOVE_DOWN`)) ||
        (_ === `horizontal` && (_ === `MOVE_LEFT` || _ === `MOVE_RIGHT`));
    if (_ && !_) return null;
    let _ = _ === `MOVE_DOWN` || _ === `MOVE_RIGHT`,
      _ = _.dimensions.draggables[_.critical.draggable._],
      _ = _.current.page.borderBoxCenter,
      { draggables: _, droppables: _ } = _.dimensions;
    return _
      ? _({
          isMovingForward: _,
          previousPageBorderBoxCenter: _,
          draggable: _,
          destination: _,
          draggables: _,
          viewport: _.viewport,
          previousClientSelection: _.current.client.selection,
          previousImpact: _.impact,
          afterCritical: _.afterCritical,
        })
      : _({
          isMovingForward: _,
          previousPageBorderBoxCenter: _,
          draggable: _,
          isOver: _,
          draggables: _,
          droppables: _,
          viewport: _.viewport,
          afterCritical: _.afterCritical,
        });
  };
function _(_) {
  return _.phase === `DRAGGING` || _.phase === `COLLECTING`;
}
function _(_) {
  let _ = _(_.top, _.bottom),
    _ = _(_.left, _.right);
  return function (_) {
    return _(_._) && _(_._);
  };
}
function _(_, _) {
  return (
    _.left < _.right && _.right > _.left && _.top < _.bottom && _.bottom > _.top
  );
}
function _({ pageBorderBox: _, draggable: _, candidates: _ }) {
  let _ = _.page.borderBox.center,
    _ = _.map((_) => {
      let _ = _.axis,
        _ = _(
          _.axis.line,
          _.center[_.line],
          _.page.borderBox.center[_.crossAxisLine],
        );
      return {
        _: _.descriptor._,
        distance: _(_, _),
      };
    }).sort((_, _) => _.distance - _.distance);
  return _[0] ? _[0]._ : null;
}
function _({ pageBorderBox: _, draggable: _, droppables: _ }) {
  let _ = _(_).filter((_) => {
    if (!_.isEnabled) return !1;
    let _ = _.subject.active;
    if (!_ || !_(_, _)) return !1;
    if (_(_)(_.center)) return !0;
    let _ = _.axis,
      _ = _.center[_.crossAxisLine],
      _ = _[_.crossAxisStart],
      _ = _[_.crossAxisEnd],
      _ = _(_[_.crossAxisStart], _[_.crossAxisEnd]),
      _ = _(_),
      _ = _(_);
    return !_ && !_ ? !0 : _ ? _ < _ : _ > _;
  });
  return _.length
    ? _.length === 1
      ? _[0].descriptor._
      : _({
          pageBorderBox: _,
          draggable: _,
          candidates: _,
        })
    : null;
}
var _ = (_, _) => _(_(_, _)),
  _ = (_, _) => {
    let _ = _.frame;
    return _ ? _(_, _.scroll.diff.value) : _;
  };
function _({ displaced: _, _: _ }) {
  return !!(_.visible[_] || _.invisible[_]);
}
function _({ draggable: _, closest: _, inHomeList: _ }) {
  return _
    ? _ && _.descriptor.index > _.descriptor.index
      ? _.descriptor.index - 1
      : _.descriptor.index
    : null;
}
var _ = ({
    pageBorderBoxWithDroppableScroll: _,
    draggable: _,
    destination: _,
    insideDestination: _,
    last: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _.axis,
      _ = _(_.axis, _.displaceBy),
      _ = _.value,
      _ = _[_.start],
      _ = _[_.end];
    return _({
      draggable: _,
      insideDestination: _,
      destination: _,
      viewport: _,
      last: _,
      displacedBy: _,
      index: _({
        draggable: _,
        closest:
          _(_, _).find((_) => {
            let _ = _.descriptor._,
              _ = _.page.borderBox.center[_.line],
              _ = _(_, _),
              _ = _({
                displaced: _,
                _: _,
              });
            return _ ? (_ ? _ <= _ : _ < _ - _) : _ ? _ <= _ + _ : _ < _;
          }) || null,
        inHomeList: _(_, _),
      }),
    });
  },
  _ = 4,
  _ = ({
    draggable: _,
    pageBorderBoxWithDroppableScroll: _,
    previousImpact: _,
    destination: _,
    insideDestination: _,
    afterCritical: _,
  }) => {
    if (!_.isCombineEnabled) return null;
    let _ = _.axis,
      _ = _(_.axis, _.displaceBy),
      _ = _.value,
      _ = _[_.start],
      _ = _[_.end],
      _ = _(_, _).find((_) => {
        let _ = _.descriptor._,
          _ = _.page.borderBox,
          _ = _[_.size] / _,
          _ = _(_, _),
          _ = _({
            displaced: _.displaced,
            _: _,
          });
        return _
          ? _
            ? _ > _[_.start] + _ && _ < _[_.end] - _
            : _ > _[_.start] - _ + _ && _ < _[_.end] - _ - _
          : _
            ? _ > _[_.start] + _ + _ && _ < _[_.end] + _ - _
            : _ > _[_.start] + _ && _ < _[_.end] - _;
      });
    return _
      ? {
          displacedBy: _,
          displaced: _.displaced,
          _: {
            type: `COMBINE`,
            combine: {
              draggableId: _.descriptor._,
              droppableId: _.descriptor._,
            },
          },
        }
      : null;
  },
  _ = ({
    pageOffset: _,
    draggable: _,
    draggables: _,
    droppables: _,
    previousImpact: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _(_.page.borderBox, _),
      _ = _({
        pageBorderBox: _,
        draggable: _,
        droppables: _,
      });
    if (!_) return _;
    let _ = _[_],
      _ = _(_.descriptor._, _),
      _ = _(_, _);
    return (
      _({
        pageBorderBoxWithDroppableScroll: _,
        draggable: _,
        previousImpact: _,
        destination: _,
        insideDestination: _,
        afterCritical: _,
      }) ||
      _({
        pageBorderBoxWithDroppableScroll: _,
        draggable: _,
        destination: _,
        insideDestination: _,
        last: _.displaced,
        viewport: _,
        afterCritical: _,
      })
    );
  },
  _ = (_, _) => ({
    ..._,
    [_.descriptor._]: _,
  }),
  _ = ({ previousImpact: _, impact: _, droppables: _ }) => {
    let _ = _(_),
      _ = _(_);
    if (!_ || _ === _) return _;
    let _ = _[_];
    return _.subject.withPlaceholder ? _(_, _(_)) : _;
  },
  _ = ({
    draggable: _,
    draggables: _,
    droppables: _,
    previousImpact: _,
    impact: _,
  }) => {
    let _ = _({
        previousImpact: _,
        impact: _,
        droppables: _,
      }),
      _ = _(_);
    if (!_) return _;
    let _ = _[_];
    return _(_, _) || _.subject.withPlaceholder ? _ : _(_, _(_, _, _));
  },
  _ = ({
    state: _,
    clientSelection: _,
    dimensions: _,
    viewport: _,
    impact: _,
    scrollJumpRequest: _,
  }) => {
    let _ = _ || _.viewport,
      _ = _ || _.dimensions,
      _ = _ || _.current.client.selection,
      _ = _(_, _.initial.client.selection),
      _ = {
        offset: _,
        selection: _,
        borderBoxCenter: _(_.initial.client.borderBoxCenter, _),
      },
      _ = {
        selection: _(_.selection, _.scroll.current),
        borderBoxCenter: _(_.borderBoxCenter, _.scroll.current),
        offset: _(_.offset, _.scroll.diff.value),
      },
      _ = {
        client: _,
        page: _,
      };
    if (_.phase === `COLLECTING`)
      return {
        ..._,
        dimensions: _,
        viewport: _,
        current: _,
      };
    let _ = _.draggables[_.critical.draggable._],
      _ =
        _ ||
        _({
          pageOffset: _.offset,
          draggable: _,
          draggables: _.draggables,
          droppables: _.droppables,
          previousImpact: _.impact,
          viewport: _,
          afterCritical: _.afterCritical,
        }),
      _ = _({
        draggable: _,
        impact: _,
        previousImpact: _.impact,
        draggables: _.draggables,
        droppables: _.droppables,
      });
    return {
      ..._,
      current: _,
      dimensions: {
        draggables: _.draggables,
        droppables: _,
      },
      impact: _,
      viewport: _,
      scrollJumpRequest: _ || null,
      forceShouldAnimate: !_ && null,
    };
  };
function _(_, _) {
  return _.map((_) => _[_]);
}
var _ = ({
    impact: _,
    viewport: _,
    draggables: _,
    destination: _,
    forceShouldAnimate: _,
  }) => {
    let _ = _.displaced,
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        forceShouldAnimate: _,
        last: _,
      });
    return {
      ..._,
      displaced: _,
    };
  },
  _ = ({
    impact: _,
    draggable: _,
    droppable: _,
    draggables: _,
    viewport: _,
    afterCritical: _,
  }) =>
    _({
      pageBorderBoxCenter: _({
        impact: _,
        draggable: _,
        draggables: _,
        droppable: _,
        afterCritical: _,
      }),
      draggable: _,
      viewport: _,
    }),
  _ = ({ state: _, dimensions: _, viewport: _ }) => {
    _.movementMode !== `SNAP` && _(!1);
    let _ = _.impact,
      _ = _ || _.viewport,
      _ = _ || _.dimensions,
      { draggables: _, droppables: _ } = _,
      _ = _[_.critical.draggable._],
      _ = _(_);
    !_ && _(!1);
    let _ = _[_],
      _ = _({
        impact: _,
        viewport: _,
        destination: _,
        draggables: _,
      });
    return _({
      impact: _,
      clientSelection: _({
        impact: _,
        draggable: _,
        droppable: _,
        draggables: _,
        viewport: _,
        afterCritical: _.afterCritical,
      }),
      state: _,
      dimensions: _,
      viewport: _,
    });
  },
  _ = (_) => ({
    index: _.index,
    droppableId: _.droppableId,
  }),
  _ = ({ draggable: _, home: _, draggables: _, viewport: _ }) => {
    let _ = _(_.axis, _.displaceBy),
      _ = _(_.descriptor._, _),
      _ = _.indexOf(_);
    _ === -1 && _(!1);
    let _ = _.slice(_ + 1),
      _ = _.reduce((_, _) => ((_[_.descriptor._] = !0), _), {}),
      _ = {
        inVirtualList: _.descriptor.mode === `virtual`,
        displacedBy: _,
        effected: _,
      };
    return {
      impact: {
        displaced: _({
          afterDragging: _,
          destination: _,
          displacedBy: _,
          last: null,
          viewport: _.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: _,
        _: {
          type: `REORDER`,
          destination: _(_.descriptor),
        },
      },
      afterCritical: _,
    };
  },
  _ = (_, _) => ({
    draggables: _.draggables,
    droppables: _(_.droppables, _),
  }),
  _ = ({ draggable: _, offset: _, initialWindowScroll: _ }) => {
    let _ = _(_.client, _),
      _ = _(_, _);
    return {
      ..._,
      placeholder: {
        ..._.placeholder,
        client: _,
      },
      client: _,
      page: _,
    };
  },
  _ = (_) => {
    let _ = _.frame;
    return !_ && _(!1), _;
  },
  _ = ({ additions: _, updatedDroppables: _, viewport: _ }) => {
    let _ = _.scroll.diff.value;
    return _.map((_) => {
      let _ = _[_.descriptor.droppableId],
        _ = _(_).scroll.diff.value;
      return _({
        draggable: _,
        offset: _(_, _),
        initialWindowScroll: _.scroll.initial,
      });
    });
  },
  _ = ({ state: _, published: _ }) => {
    let _ = _.modified.map((_) => {
        let _ = _.dimensions.droppables[_.droppableId];
        return _(_, _.scroll);
      }),
      _ = {
        ..._.dimensions.droppables,
        ..._(_),
      },
      _ = _(
        _({
          additions: _.additions,
          updatedDroppables: _,
          viewport: _.viewport,
        }),
      ),
      _ = {
        ..._.dimensions.draggables,
        ..._,
      };
    _.removals.forEach((_) => {
      delete _[_];
    });
    let _ = {
        droppables: _,
        draggables: _,
      },
      _ = _(_.impact),
      _ = _ ? _.droppables[_] : null,
      _ = _.draggables[_.critical.draggable._],
      _ = _.droppables[_.critical.droppable._],
      { impact: _, afterCritical: _ } = _({
        draggable: _,
        home: _,
        draggables: _,
        viewport: _.viewport,
      }),
      _ = _ && _.isCombineEnabled ? _.impact : _,
      _ = _({
        pageOffset: _.current.page.offset,
        draggable: _.draggables[_.critical.draggable._],
        draggables: _.draggables,
        droppables: _.droppables,
        previousImpact: _,
        viewport: _.viewport,
        afterCritical: _,
      }),
      _ = {
        ..._,
        phase: `DRAGGING`,
        impact: _,
        onLiftImpact: _,
        dimensions: _,
        afterCritical: _,
        forceShouldAnimate: !1,
      };
    return _.phase === `COLLECTING`
      ? _
      : {
          ..._,
          phase: `DROP_PENDING`,
          reason: _.reason,
          isWaiting: !1,
        };
  },
  _ = (_) => _.movementMode === `SNAP`,
  _ = (_, _, _) => {
    let _ = _(_.dimensions, _);
    return !_(_) || _
      ? _({
          state: _,
          dimensions: _,
        })
      : _({
          state: _,
          dimensions: _,
        });
  };
function _(_) {
  return _.isDragging && _.movementMode === `SNAP`
    ? {
        ..._,
        scrollJumpRequest: null,
      }
    : _;
}
var _ = {
    phase: `IDLE`,
    completed: null,
    shouldFlush: !1,
  },
  _ = (_ = _, _) => {
    if (_.type === `FLUSH`)
      return {
        ..._,
        shouldFlush: !0,
      };
    if (_.type === `INITIAL_PUBLISH`) {
      _.phase !== `IDLE` && _(!1);
      let {
          critical: _,
          clientSelection: _,
          viewport: _,
          dimensions: _,
          movementMode: _,
        } = _.payload,
        _ = _.draggables[_.draggable._],
        _ = _.droppables[_.droppable._],
        _ = {
          selection: _,
          borderBoxCenter: _.client.borderBox.center,
          offset: _,
        },
        _ = {
          client: _,
          page: {
            selection: _(_.selection, _.scroll.initial),
            borderBoxCenter: _(_.selection, _.scroll.initial),
            offset: _(_.selection, _.scroll.diff.value),
          },
        },
        _ = _(_.droppables).every((_) => !_.isFixedOnPage),
        { impact: _, afterCritical: _ } = _({
          draggable: _,
          home: _,
          draggables: _.draggables,
          viewport: _,
        });
      return {
        phase: `DRAGGING`,
        isDragging: !0,
        critical: _,
        movementMode: _,
        dimensions: _,
        initial: _,
        current: _,
        isWindowScrollAllowed: _,
        impact: _,
        afterCritical: _,
        onLiftImpact: _,
        viewport: _,
        scrollJumpRequest: null,
        forceShouldAnimate: null,
      };
    }
    if (_.type === `COLLECTION_STARTING`)
      return _.phase === `COLLECTING` || _.phase === `DROP_PENDING`
        ? _
        : (_.phase !== `DRAGGING` && _(!1),
          {
            ..._,
            phase: `COLLECTING`,
          });
    if (_.type === `PUBLISH_WHILE_DRAGGING`)
      return (
        !(_.phase === `COLLECTING` || _.phase === `DROP_PENDING`) && _(!1),
        _({
          state: _,
          published: _.payload,
        })
      );
    if (_.type === `MOVE`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _(!1);
      let { client: _ } = _.payload;
      return _(_, _.current.client.selection)
        ? _
        : _({
            state: _,
            clientSelection: _,
            impact: _(_) ? _.impact : null,
          });
    }
    if (_.type === `UPDATE_DROPPABLE_SCROLL`) {
      if (_.phase === `DROP_PENDING` || _.phase === `COLLECTING`) return _(_);
      !_(_) && _(!1);
      let { _: _, newScroll: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return _ ? _(_, _(_, _), !1) : _;
    }
    if (_.type === `UPDATE_DROPPABLE_IS_ENABLED`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _(!1);
      let { _: _, isEnabled: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return (
        !_ && _(!1),
        _.isEnabled === _ && _(!1),
        _(
          _,
          {
            ..._,
            isEnabled: _,
          },
          !0,
        )
      );
    }
    if (_.type === `UPDATE_DROPPABLE_IS_COMBINE_ENABLED`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _(!1);
      let { _: _, isCombineEnabled: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return (
        !_ && _(!1),
        _.isCombineEnabled === _ && _(!1),
        _(
          _,
          {
            ..._,
            isCombineEnabled: _,
          },
          !0,
        )
      );
    }
    if (_.type === `MOVE_BY_WINDOW_SCROLL`) {
      if (_.phase === `DROP_PENDING` || _.phase === `DROP_ANIMATING`) return _;
      !_(_) && _(!1), !_.isWindowScrollAllowed && _(!1);
      let _ = _.payload.newScroll;
      if (_(_.viewport.scroll.current, _)) return _(_);
      let _ = _(_.viewport, _);
      return _(_)
        ? _({
            state: _,
            viewport: _,
          })
        : _({
            state: _,
            viewport: _,
          });
    }
    if (_.type === `UPDATE_VIEWPORT_MAX_SCROLL`) {
      if (!_(_)) return _;
      let _ = _.payload.maxScroll;
      if (_(_, _.viewport.scroll.max)) return _;
      let _ = {
        ..._.viewport,
        scroll: {
          ..._.viewport.scroll,
          max: _,
        },
      };
      return {
        ..._,
        viewport: _,
      };
    }
    if (
      _.type === `MOVE_UP` ||
      _.type === `MOVE_DOWN` ||
      _.type === `MOVE_LEFT` ||
      _.type === `MOVE_RIGHT`
    ) {
      if (_.phase === `COLLECTING` || _.phase === `DROP_PENDING`) return _;
      _.phase !== `DRAGGING` && _(!1);
      let _ = _({
        state: _,
        type: _.type,
      });
      return _
        ? _({
            state: _,
            impact: _.impact,
            clientSelection: _.clientSelection,
            scrollJumpRequest: _.scrollJumpRequest,
          })
        : _;
    }
    if (_.type === `DROP_PENDING`) {
      let _ = _.payload.reason;
      return (
        _.phase !== `COLLECTING` && _(!1),
        {
          ..._,
          phase: `DROP_PENDING`,
          isWaiting: !0,
          reason: _,
        }
      );
    }
    if (_.type === `DROP_ANIMATE`) {
      let { completed: _, dropDuration: _, newHomeClientOffset: _ } = _.payload;
      return (
        !(_.phase === `DRAGGING` || _.phase === `DROP_PENDING`) && _(!1),
        {
          phase: `DROP_ANIMATING`,
          completed: _,
          dropDuration: _,
          newHomeClientOffset: _,
          dimensions: _.dimensions,
        }
      );
    }
    if (_.type === `DROP_COMPLETE`) {
      let { completed: _ } = _.payload;
      return {
        phase: `IDLE`,
        completed: _,
        shouldFlush: !1,
      };
    }
    return _;
  },
  _ = (_) => ({
    type: `BEFORE_INITIAL_CAPTURE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `LIFT`,
    payload: _,
  }),
  _ = (_) => ({
    type: `INITIAL_PUBLISH`,
    payload: _,
  }),
  _ = (_) => ({
    type: `PUBLISH_WHILE_DRAGGING`,
    payload: _,
  }),
  _ = () => ({
    type: `COLLECTION_STARTING`,
    payload: null,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_SCROLL`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_IS_ENABLED`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_IS_COMBINE_ENABLED`,
    payload: _,
  }),
  _ = (_) => ({
    type: `MOVE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `MOVE_BY_WINDOW_SCROLL`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_VIEWPORT_MAX_SCROLL`,
    payload: _,
  }),
  _ = () => ({
    type: `MOVE_UP`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_DOWN`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_RIGHT`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_LEFT`,
    payload: null,
  }),
  _ = () => ({
    type: `FLUSH`,
    payload: null,
  }),
  _ = (_) => ({
    type: `DROP_ANIMATE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP_COMPLETE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP_PENDING`,
    payload: _,
  }),
  _ = () => ({
    type: `DROP_ANIMATION_FINISHED`,
    payload: null,
  }),
  _ =
    (_) =>
    ({ getState: _, dispatch: _ }) =>
    (_) =>
    (_) => {
      if (_.type !== `LIFT`) {
        _(_);
        return;
      }
      let { _: _, clientSelection: _, movementMode: _ } = _.payload,
        _ = _();
      _.phase === `DROP_ANIMATING` &&
        _(
          _({
            completed: _.completed,
          }),
        ),
        _().phase !== `IDLE` && _(!1),
        _(_()),
        _(
          _({
            draggableId: _,
            movementMode: _,
          }),
        );
      let _ = {
          draggableId: _,
          scrollOptions: {
            shouldPublishImmediately: _ === `SNAP`,
          },
        },
        { critical: _, dimensions: _, viewport: _ } = _.startPublishing(_);
      _(
        _({
          critical: _,
          dimensions: _,
          clientSelection: _,
          movementMode: _,
          viewport: _,
        }),
      );
    },
  _ = (_) => () => (_) => (_) => {
    _.type === `INITIAL_PUBLISH` && _.dragging(),
      _.type === `DROP_ANIMATE` &&
        _.dropping(_.payload.completed.result.reason),
      (_.type === `FLUSH` || _.type === `DROP_COMPLETE`) && _.resting(),
      _(_);
  },
  _ = {
    outOfTheWay: `cubic-bezier(0.2, 0, 0, 1)`,
    drop: `cubic-bezier(.2,1,.1,1)`,
  },
  _ = {
    opacity: {
      drop: 0,
      combining: 0.7,
    },
    scale: {
      drop: 0.75,
    },
  },
  _ = {
    outOfTheWay: 0.2,
    minDropTime: 0.33,
    maxDropTime: 0.55,
  },
  _ = `${_.outOfTheWay}s ${_.outOfTheWay}`,
  _ = {
    fluid: `opacity ${_}`,
    snap: `transform ${_}, opacity ${_}`,
    drop: (_) => {
      let _ = `${_}s ${_.drop}`;
      return `transform ${_}, opacity ${_}`;
    },
    outOfTheWay: `transform ${_}`,
    placeholder: `height ${_}, width ${_}, margin ${_}`,
  },
  _ = (_) => (_(_, _) ? void 0 : `translate(${_._}px, ${_._}px)`),
  _ = {
    moveTo: _,
    drop: (_, _) => {
      let _ = _(_);
      if (_) return _ ? `${_} scale(${_.scale.drop})` : _;
    },
  },
  { minDropTime: _, maxDropTime: _ } = _,
  _ = _ - _,
  _ = 1500,
  _ = 0.6,
  _ = ({ current: _, destination: _, reason: _ }) => {
    let _ = _(_, _);
    if (_ <= 0) return _;
    if (_ >= _) return _;
    let _ = _ + (_ / _) * _,
      _ = _ === `CANCEL` ? _ * _ : _;
    return Number(_.toFixed(2));
  },
  _ = ({
    impact: _,
    draggable: _,
    dimensions: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let { draggables: _, droppables: _ } = _,
      _ = _(_),
      _ = _ ? _[_] : null,
      _ = _[_.descriptor.droppableId];
    return _(
      _({
        impact: _,
        draggable: _,
        draggables: _,
        afterCritical: _,
        droppable: _ || _,
        viewport: _,
      }),
      _.client.borderBox.center,
    );
  },
  _ = ({
    draggables: _,
    reason: _,
    lastImpact: _,
    home: _,
    viewport: _,
    onLiftImpact: _,
  }) =>
    !_._ || _ !== `DROP`
      ? {
          impact: _({
            draggables: _,
            impact: _,
            destination: _,
            viewport: _,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : _._.type === `REORDER`
        ? {
            impact: _,
            didDropInsideDroppable: !0,
          }
        : {
            impact: {
              ..._,
              displaced: _,
            },
            didDropInsideDroppable: !0,
          },
  _ =
    ({ getState: _, dispatch: _ }) =>
    (_) =>
    (_) => {
      if (_.type !== `DROP`) {
        _(_);
        return;
      }
      let _ = _(),
        _ = _.payload.reason;
      if (_.phase === `COLLECTING`) {
        _(
          _({
            reason: _,
          }),
        );
        return;
      }
      if (_.phase === `IDLE`) return;
      _.phase === `DROP_PENDING` && _.isWaiting && _(!1),
        !(_.phase === `DRAGGING` || _.phase === `DROP_PENDING`) && _(!1);
      let _ = _.critical,
        _ = _.dimensions,
        _ = _.draggables[_.critical.draggable._],
        { impact: _, didDropInsideDroppable: _ } = _({
          reason: _,
          lastImpact: _.impact,
          afterCritical: _.afterCritical,
          onLiftImpact: _.onLiftImpact,
          home: _.dimensions.droppables[_.critical.droppable._],
          viewport: _.viewport,
          draggables: _.dimensions.draggables,
        }),
        _ = _ ? _(_) : null,
        _ = _ ? _(_) : null,
        _ = {
          index: _.draggable.index,
          droppableId: _.droppable._,
        },
        _ = {
          draggableId: _.descriptor._,
          type: _.descriptor.type,
          source: _,
          reason: _,
          mode: _.movementMode,
          destination: _,
          combine: _,
        },
        _ = _({
          impact: _,
          draggable: _,
          dimensions: _,
          viewport: _.viewport,
          afterCritical: _.afterCritical,
        }),
        _ = {
          critical: _.critical,
          afterCritical: _.afterCritical,
          result: _,
          impact: _,
        };
      if (!(!_(_.current.client.offset, _) || _.combine)) {
        _(
          _({
            completed: _,
          }),
        );
        return;
      }
      _(
        _({
          newHomeClientOffset: _,
          dropDuration: _({
            current: _.current.client.offset,
            destination: _,
            reason: _,
          }),
          completed: _,
        }),
      );
    },
  _ = () => ({
    _: window.pageXOffset,
    _: window.pageYOffset,
  });
function _(_) {
  return {
    eventName: `scroll`,
    options: {
      passive: !0,
      capture: !1,
    },
    _: (_) => {
      (_.target !== window && _.target !== window.document) || _();
    },
  };
}
function _({ onWindowScroll: _ }) {
  function _() {
    _(_());
  }
  let _ = _(_),
    _ = _(_),
    _ = _;
  function _() {
    return _ !== _;
  }
  function _() {
    _() && _(!1), (_ = _(window, [_]));
  }
  function _() {
    !_() && _(!1), _.cancel(), _(), (_ = _);
  }
  return {
    start: _,
    stop: _,
    isActive: _,
  };
}
var _ = (_) =>
    _.type === `DROP_COMPLETE` ||
    _.type === `DROP_ANIMATE` ||
    _.type === `FLUSH`,
  _ = (_) => {
    let _ = _({
      onWindowScroll: (_) => {
        _.dispatch(
          _({
            newScroll: _,
          }),
        );
      },
    });
    return (_) => (_) => {
      !_.isActive() && _.type === `INITIAL_PUBLISH` && _.start(),
        _.isActive() && _(_) && _.stop(),
        _(_);
    };
  },
  _ = (_) => {
    let _ = !1,
      _ = !1,
      _ = setTimeout(() => {
        _ = !0;
      }),
      _ = (_) => {
        _ || _ || ((_ = !0), _(_), clearTimeout(_));
      };
    return (_.wasCalled = () => _), _;
  },
  _ = () => {
    let _ = [],
      _ = (_) => {
        let _ = _.findIndex((_) => _.timerId === _);
        _ === -1 && _(!1);
        let [_] = _.splice(_, 1);
        _.callback();
      };
    return {
      add: (_) => {
        let _ = setTimeout(() => _(_)),
          _ = {
            timerId: _,
            callback: _,
          };
        _.push(_);
      },
      flush: () => {
        if (!_.length) return;
        let _ = [..._];
        (_.length = 0),
          _.forEach((_) => {
            clearTimeout(_.timerId), _.callback();
          });
      },
    };
  },
  _ = (_, _) =>
    _ == null && _ == null
      ? !0
      : _ == null || _ == null
        ? !1
        : _.droppableId === _.droppableId && _.index === _.index,
  _ = (_, _) =>
    _ == null && _ == null
      ? !0
      : _ == null || _ == null
        ? !1
        : _.draggableId === _.draggableId && _.droppableId === _.droppableId,
  _ = (_, _) => {
    if (_ === _) return !0;
    let _ =
        _.draggable._ === _.draggable._ &&
        _.draggable.droppableId === _.draggable.droppableId &&
        _.draggable.type === _.draggable.type &&
        _.draggable.index === _.draggable.index,
      _ =
        _.droppable._ === _.droppable._ &&
        _.droppable.type === _.droppable.type;
    return _ && _;
  },
  _ = (_, _) => {
    _();
  },
  _ = (_, _) => ({
    draggableId: _.draggable._,
    type: _.droppable.type,
    source: {
      droppableId: _.droppable._,
      index: _.draggable.index,
    },
    mode: _,
  });
function _(_, _, _, _) {
  if (!_) {
    _(_(_));
    return;
  }
  let _ = _(_);
  _(_, {
    announce: _,
  }),
    _.wasCalled() || _(_(_));
}
var _ = (_, _) => {
    let _ = _(),
      _ = null,
      _ = (_, _) => {
        _ && _(!1),
          _(`onBeforeCapture`, () => {
            let _ = _().onBeforeCapture;
            _ &&
              _({
                draggableId: _,
                mode: _,
              });
          });
      },
      _ = (_, _) => {
        _ && _(!1),
          _(`onBeforeDragStart`, () => {
            let _ = _().onBeforeDragStart;
            _ && _(_(_, _));
          });
      },
      _ = (_, _) => {
        _ && _(!1);
        let _ = _(_, _);
        (_ = {
          mode: _,
          lastCritical: _,
          lastLocation: _.source,
          lastCombine: null,
        }),
          _.add(() => {
            _(`onDragStart`, () => _(_().onDragStart, _, _, _.onDragStart));
          });
      },
      _ = (_, _) => {
        let _ = _(_),
          _ = _(_);
        !_ && _(!1);
        let _ = !_(_, _.lastCritical);
        _ && (_.lastCritical = _);
        let _ = !_(_.lastLocation, _);
        _ && (_.lastLocation = _);
        let _ = !_(_.lastCombine, _);
        if ((_ && (_.lastCombine = _), !_ && !_ && !_)) return;
        let _ = {
          ..._(_, _.mode),
          combine: _,
          destination: _,
        };
        _.add(() => {
          _(`onDragUpdate`, () => _(_().onDragUpdate, _, _, _.onDragUpdate));
        });
      },
      _ = () => {
        !_ && _(!1), _.flush();
      },
      _ = (_) => {
        !_ && _(!1),
          (_ = null),
          _(`onDragEnd`, () => _(_().onDragEnd, _, _, _.onDragEnd));
      };
    return {
      beforeCapture: _,
      beforeStart: _,
      start: _,
      update: _,
      flush: _,
      drop: _,
      abort: () => {
        if (!_) return;
        let _ = {
          ..._(_.lastCritical, _.mode),
          combine: null,
          destination: null,
          reason: `CANCEL`,
        };
        _(_);
      },
    };
  },
  _ = (_, _) => {
    let _ = _(_, _);
    return (_) => (_) => (_) => {
      if (_.type === `BEFORE_INITIAL_CAPTURE`) {
        _.beforeCapture(_.payload.draggableId, _.payload.movementMode);
        return;
      }
      if (_.type === `INITIAL_PUBLISH`) {
        let _ = _.payload.critical;
        _.beforeStart(_, _.payload.movementMode),
          _(_),
          _.start(_, _.payload.movementMode);
        return;
      }
      if (_.type === `DROP_COMPLETE`) {
        let _ = _.payload.completed.result;
        _.flush(), _(_), _.drop(_);
        return;
      }
      if ((_(_), _.type === `FLUSH`)) {
        _.abort();
        return;
      }
      let _ = _.getState();
      _.phase === `DRAGGING` && _.update(_.critical, _.impact);
    };
  },
  _ = (_) => (_) => (_) => {
    if (_.type !== `DROP_ANIMATION_FINISHED`) {
      _(_);
      return;
    }
    let _ = _.getState();
    _.phase !== `DROP_ANIMATING` && _(!1),
      _.dispatch(
        _({
          completed: _.completed,
        }),
      );
  },
  _ = (_) => {
    let _ = null,
      _ = null;
    function _() {
      (_ &&= (cancelAnimationFrame(_), null)), (_ &&= (_(), null));
    }
    return (_) => (_) => {
      if (
        ((_.type === `FLUSH` ||
          _.type === `DROP_COMPLETE` ||
          _.type === `DROP_ANIMATION_FINISHED`) &&
          _(),
        _(_),
        _.type !== `DROP_ANIMATE`)
      )
        return;
      let _ = {
        eventName: `scroll`,
        options: {
          capture: !0,
          passive: !1,
          once: !0,
        },
        _: function () {
          _.getState().phase === `DROP_ANIMATING` && _.dispatch(_());
        },
      };
      _ = requestAnimationFrame(() => {
        (_ = null), (_ = _(window, [_]));
      });
    };
  },
  _ = (_) => () => (_) => (_) => {
    (_.type === `DROP_COMPLETE` ||
      _.type === `FLUSH` ||
      _.type === `DROP_ANIMATE`) &&
      _.stopPublishing(),
      _(_);
  },
  _ = (_) => {
    let _ = !1;
    return () => (_) => (_) => {
      if (_.type === `INITIAL_PUBLISH`) {
        (_ = !0),
          _.tryRecordFocus(_.payload.critical.draggable._),
          _(_),
          _.tryRestoreFocusRecorded();
        return;
      }
      if ((_(_), _)) {
        if (_.type === `FLUSH`) {
          (_ = !1), _.tryRestoreFocusRecorded();
          return;
        }
        if (_.type === `DROP_COMPLETE`) {
          _ = !1;
          let _ = _.payload.completed.result;
          _.combine && _.tryShiftRecord(_.draggableId, _.combine.draggableId),
            _.tryRestoreFocusRecorded();
        }
      }
    };
  },
  _ = (_) =>
    _.type === `DROP_COMPLETE` ||
    _.type === `DROP_ANIMATE` ||
    _.type === `FLUSH`,
  _ = (_) => (_) => (_) => (_) => {
    if (_(_)) {
      _.stop(), _(_);
      return;
    }
    if (_.type === `INITIAL_PUBLISH`) {
      _(_);
      let _ = _.getState();
      _.phase !== `DRAGGING` && _(!1), _.start(_);
      return;
    }
    _(_), _.scroll(_.getState());
  },
  _ = (_) => (_) => (_) => {
    if ((_(_), _.type !== `PUBLISH_WHILE_DRAGGING`)) return;
    let _ = _.getState();
    _.phase === `DROP_PENDING` &&
      (_.isWaiting ||
        _.dispatch(
          _({
            reason: _.reason,
          }),
        ));
  },
  _ = _,
  _ = ({
    dimensionMarshal: _,
    focusMarshal: _,
    styleMarshal: _,
    getResponders: _,
    announce: _,
    autoScroller: _,
  }) => _(_, _(_(_(_), _(_), _(_), _, _, _, _, _(_), _, _(_), _(_, _)))),
  _ = () => ({
    additions: {},
    removals: {},
    modified: {},
  });
function _({ registry: _, callbacks: _ }) {
  let _ = _(),
    _ = null,
    _ = () => {
      _ ||=
        (_.collectionStarting(),
        requestAnimationFrame(() => {
          _ = null;
          let { additions: _, removals: _, modified: _ } = _,
            _ = Object.keys(_)
              .map((_) => _.draggable.getById(_).getDimension(_))
              .sort((_, _) => _.descriptor.index - _.descriptor.index),
            _ = Object.keys(_).map((_) => ({
              droppableId: _,
              scroll: _.droppable.getById(_).callbacks.getScrollWhileDragging(),
            })),
            _ = {
              additions: _,
              removals: Object.keys(_),
              modified: _,
            };
          (_ = _()), _.publish(_);
        }));
    };
  return {
    add: (_) => {
      let _ = _.descriptor._;
      (_.additions[_] = _),
        (_.modified[_.descriptor.droppableId] = !0),
        _.removals[_] && delete _.removals[_],
        _();
    },
    remove: (_) => {
      let _ = _.descriptor;
      (_.removals[_._] = !0),
        (_.modified[_.droppableId] = !0),
        _.additions[_._] && delete _.additions[_._],
        _();
    },
    stop: () => {
      _ && (cancelAnimationFrame(_), (_ = null), (_ = _()));
    },
  };
}
var _ = ({ scrollHeight: _, scrollWidth: _, height: _, width: _ }) => {
    let _ = _(
      {
        _: _,
        _: _,
      },
      {
        _: _,
        _: _,
      },
    );
    return {
      _: Math.max(0, _._),
      _: Math.max(0, _._),
    };
  },
  _ = () => {
    let _ = document.documentElement;
    return !_ && _(!1), _;
  },
  _ = () => {
    let _ = _();
    return _({
      scrollHeight: _.scrollHeight,
      scrollWidth: _.scrollWidth,
      width: _.clientWidth,
      height: _.clientHeight,
    });
  },
  _ = () => {
    let _ = _(),
      _ = _(),
      _ = _._,
      _ = _._,
      _ = _(),
      _ = _.clientWidth,
      _ = _.clientHeight;
    return {
      frame: _({
        top: _,
        left: _,
        right: _ + _,
        bottom: _ + _,
      }),
      scroll: {
        initial: _,
        current: _,
        max: _,
        diff: {
          value: _,
          displacement: _,
        },
      },
    };
  },
  _ = ({ critical: _, scrollOptions: _, registry: _ }) => {
    let _ = _(),
      _ = _.scroll.current,
      _ = _.droppable,
      _ = _.droppable
        .getAllByType(_.type)
        .map((_) => _.callbacks.getDimensionAndWatchScroll(_, _));
    return {
      dimensions: {
        draggables: _(
          _.draggable
            .getAllByType(_.draggable.type)
            .map((_) => _.getDimension(_)),
        ),
        droppables: _(_),
      },
      critical: _,
      viewport: _,
    };
  };
function _(_, _, _) {
  return !(
    _.descriptor._ === _._ ||
    _.descriptor.type !== _.type ||
    _.droppable.getById(_.descriptor.droppableId).descriptor.mode !== `virtual`
  );
}
var _ = (_, _) => {
    let _ = null,
      _ = _({
        callbacks: {
          publish: _.publishWhileDragging,
          collectionStarting: _.collectionStarting,
        },
        registry: _,
      }),
      _ = (_, _) => {
        !_.droppable.exists(_) && _(!1),
          _ &&
            _.updateDroppableIsEnabled({
              _: _,
              isEnabled: _,
            });
      },
      _ = (_, _) => {
        _ &&
          (!_.droppable.exists(_) && _(!1),
          _.updateDroppableIsCombineEnabled({
            _: _,
            isCombineEnabled: _,
          }));
      },
      _ = (_, _) => {
        _ &&
          (!_.droppable.exists(_) && _(!1),
          _.updateDroppableScroll({
            _: _,
            newScroll: _,
          }));
      },
      _ = (_, _) => {
        _ && _.droppable.getById(_).callbacks.scroll(_);
      },
      _ = () => {
        if (!_) return;
        _.stop();
        let _ = _.critical.droppable;
        _.droppable
          .getAllByType(_.type)
          .forEach((_) => _.callbacks.dragStopped()),
          _.unsubscribe(),
          (_ = null);
      },
      _ = (_) => {
        !_ && _(!1);
        let _ = _.critical.draggable;
        _.type === `ADDITION` && _(_, _, _.value) && _.add(_.value),
          _.type === `REMOVAL` && _(_, _, _.value) && _.remove(_.value);
      };
    return {
      updateDroppableIsEnabled: _,
      updateDroppableIsCombineEnabled: _,
      scrollDroppable: _,
      updateDroppableScroll: _,
      startPublishing: (_) => {
        _ && _(!1);
        let _ = _.draggable.getById(_.draggableId),
          _ = _.droppable.getById(_.descriptor.droppableId),
          _ = {
            draggable: _.descriptor,
            droppable: _.descriptor,
          };
        return (
          (_ = {
            critical: _,
            unsubscribe: _.subscribe(_),
          }),
          _({
            critical: _,
            registry: _,
            scrollOptions: _.scrollOptions,
          })
        );
      },
      stopPublishing: _,
    };
  },
  _ = (_, _) =>
    _.phase === `IDLE`
      ? !0
      : _.phase !== `DROP_ANIMATING` || _.completed.result.draggableId === _
        ? !1
        : _.completed.result.reason === `DROP`,
  _ = (_) => {
    window.scrollBy(_._, _._);
  },
  _ = _((_) => _(_).filter((_) => !(!_.isEnabled || !_.frame))),
  _ = (_, _) =>
    _(_).find((_) => (!_.frame && _(!1), _(_.frame.pageMarginBox)(_))) || null,
  _ = ({ center: _, destination: _, droppables: _ }) => {
    if (_) {
      let _ = _[_];
      return _.frame ? _ : null;
    }
    return _(_, _);
  },
  _ = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (_) => _ ** 2,
    durationDampening: {
      stopDampeningAt: 1200,
      accelerateAt: 360,
    },
    disabled: !1,
  },
  _ = (_, _, _ = () => _) => {
    let _ = _();
    return {
      startScrollingFrom: _[_.size] * _.startFromPercentage,
      maxScrollValueAt: _[_.size] * _.maxScrollAtPercentage,
    };
  },
  _ = ({ startOfRange: _, endOfRange: _, current: _ }) => {
    let _ = _ - _;
    return _ === 0 ? 0 : (_ - _) / _;
  },
  _ = 1,
  _ = (_, _, _ = () => _) => {
    let _ = _();
    if (_ > _.startScrollingFrom) return 0;
    if (_ <= _.maxScrollValueAt) return _.maxPixelScroll;
    if (_ === _.startScrollingFrom) return _;
    let _ =
        1 -
        _({
          startOfRange: _.maxScrollValueAt,
          endOfRange: _.startScrollingFrom,
          current: _,
        }),
      _ = _.maxPixelScroll * _.ease(_);
    return Math.ceil(_);
  },
  _ = (_, _, _) => {
    let _ = _(),
      _ = _.durationDampening.accelerateAt,
      _ = _.durationDampening.stopDampeningAt,
      _ = _,
      _ = _,
      _ = Date.now() - _;
    if (_ >= _) return _;
    if (_ < _) return _;
    let _ = _({
        startOfRange: _,
        endOfRange: _,
        current: _,
      }),
      _ = _ * _.ease(_);
    return Math.ceil(_);
  },
  _ = ({
    distanceToEdge: _,
    thresholds: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _(_, _, _);
    return _ === 0 ? 0 : _ ? Math.max(_(_, _, _), _) : _;
  },
  _ = ({
    container: _,
    distanceToEdges: _,
    dragStartTime: _,
    axis: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _(_, _, _);
    return _[_.end] < _[_.start]
      ? _({
          distanceToEdge: _[_.end],
          thresholds: _,
          dragStartTime: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        })
      : -1 *
          _({
            distanceToEdge: _[_.start],
            thresholds: _,
            dragStartTime: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          });
  },
  _ = ({ container: _, subject: _, proposedScroll: _ }) => {
    let _ = _.height > _.height,
      _ = _.width > _.width;
    return !_ && !_
      ? _
      : _ && _
        ? null
        : {
            _: _ ? 0 : _._,
            _: _ ? 0 : _._,
          };
  },
  _ = _((_) => (_ === 0 ? 0 : _)),
  _ = ({
    dragStartTime: _,
    container: _,
    subject: _,
    center: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = {
        top: _._ - _.top,
        right: _.right - _._,
        bottom: _.bottom - _._,
        left: _._ - _.left,
      },
      _ = _({
        container: _,
        distanceToEdges: _,
        dragStartTime: _,
        axis: _,
        shouldUseTimeDampening: _,
        getAutoScrollerOptions: _,
      }),
      _ = _({
        _: _({
          container: _,
          distanceToEdges: _,
          dragStartTime: _,
          axis: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        }),
        _: _,
      });
    if (_(_, _)) return null;
    let _ = _({
      container: _,
      subject: _,
      proposedScroll: _,
    });
    return _ ? (_(_, _) ? null : _) : null;
  },
  _ = _((_) => (_ === 0 ? 0 : _ > 0 ? 1 : -1)),
  _ = (() => {
    let _ = (_, _) => (_ < 0 ? _ : _ > _ ? _ - _ : 0);
    return ({ current: _, max: _, change: _ }) => {
      let _ = _(_, _),
        _ = {
          _: _(_._, _._),
          _: _(_._, _._),
        };
      return _(_, _) ? null : _;
    };
  })(),
  _ = ({ max: _, current: _, change: _ }) => {
    let _ = {
        _: Math.max(_._, _._),
        _: Math.max(_._, _._),
      },
      _ = _(_),
      _ = _({
        max: _,
        current: _,
        change: _,
      });
    return !_ || (_._ !== 0 && _._ === 0) || (_._ !== 0 && _._ === 0);
  },
  _ = (_, _) =>
    _({
      current: _.scroll.current,
      max: _.scroll.max,
      change: _,
    }),
  _ = (_, _) => {
    if (!_(_, _)) return null;
    let _ = _.scroll.max,
      _ = _.scroll.current;
    return _({
      current: _,
      max: _,
      change: _,
    });
  },
  _ = (_, _) => {
    let _ = _.frame;
    return _
      ? _({
          current: _.scroll.current,
          max: _.scroll.max,
          change: _,
        })
      : !1;
  },
  _ = (_, _) => {
    let _ = _.frame;
    return !_ || !_(_, _)
      ? null
      : _({
          current: _.scroll.current,
          max: _.scroll.max,
          change: _,
        });
  },
  _ = ({
    viewport: _,
    subject: _,
    center: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _({
      dragStartTime: _,
      container: _.frame,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    return _ && _(_, _) ? _ : null;
  },
  _ = ({
    droppable: _,
    subject: _,
    center: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _.frame;
    if (!_) return null;
    let _ = _({
      dragStartTime: _,
      container: _.pageMarginBox,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    return _ && _(_, _) ? _ : null;
  },
  _ = ({
    state: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    scrollWindow: _,
    scrollDroppable: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _.current.page.borderBoxCenter,
      _ = _.dimensions.draggables[_.critical.draggable._].page.marginBox;
    if (_.isWindowScrollAllowed) {
      let _ = _.viewport,
        _ = _({
          dragStartTime: _,
          viewport: _,
          subject: _,
          center: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        });
      if (_) {
        _(_);
        return;
      }
    }
    let _ = _({
      center: _,
      destination: _(_.impact),
      droppables: _.dimensions.droppables,
    });
    if (!_) return;
    let _ = _({
      dragStartTime: _,
      droppable: _,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    _ && _(_.descriptor._, _);
  },
  _ = ({
    scrollWindow: _,
    scrollDroppable: _,
    getAutoScrollerOptions: _ = () => _,
  }) => {
    let _ = _(_),
      _ = _(_),
      _ = null,
      _ = (_) => {
        !_ && _(!1);
        let { shouldUseTimeDampening: _, dragStartTime: _ } = _;
        _({
          state: _,
          scrollWindow: _,
          scrollDroppable: _,
          dragStartTime: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        });
      };
    return {
      start: (_) => {
        _ && _(!1);
        let _ = Date.now(),
          _ = !1,
          _ = () => {
            _ = !0;
          };
        _({
          state: _,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: _,
          scrollDroppable: _,
          getAutoScrollerOptions: _,
        }),
          (_ = {
            dragStartTime: _,
            shouldUseTimeDampening: _,
          }),
          _ && _(_);
      },
      stop: () => {
        _ &&= (_.cancel(), _.cancel(), null);
      },
      scroll: _,
    };
  },
  _ = ({ move: _, scrollDroppable: _, scrollWindow: _ }) => {
    let _ = (_, _) => {
        _({
          client: _(_.current.client.selection, _),
        });
      },
      _ = (_, _) => {
        if (!_(_, _)) return _;
        let _ = _(_, _);
        if (!_) return _(_.descriptor._, _), null;
        let _ = _(_, _);
        return _(_.descriptor._, _), _(_, _);
      },
      _ = (_, _, _) => {
        if (!_ || !_(_, _)) return _;
        let _ = _(_, _);
        if (!_) return _(_), null;
        let _ = _(_, _);
        return _(_), _(_, _);
      };
    return (_) => {
      let _ = _.scrollJumpRequest;
      if (!_) return;
      let _ = _(_.impact);
      !_ && _(!1);
      let _ = _(_.dimensions.droppables[_], _);
      if (!_) return;
      let _ = _.viewport,
        _ = _(_.isWindowScrollAllowed, _, _);
      _ && _(_, _);
    };
  },
  _ = ({
    scrollDroppable: _,
    scrollWindow: _,
    move: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _({
        scrollWindow: _,
        scrollDroppable: _,
        getAutoScrollerOptions: _,
      }),
      _ = _({
        move: _,
        scrollWindow: _,
        scrollDroppable: _,
      });
    return {
      scroll: (_) => {
        if (!(_().disabled || _.phase !== `DRAGGING`)) {
          if (_.movementMode === `FLUID`) {
            _.scroll(_);
            return;
          }
          _.scrollJumpRequest && _(_);
        }
      },
      start: _.start,
      stop: _.stop,
    };
  },
  _ = `data-rfd`,
  _ = (() => {
    let _ = `${_}-drag-handle`;
    return {
      base: _,
      draggableId: `${_}-draggable-id`,
      contextId: `${_}-context-id`,
    };
  })(),
  _ = (() => {
    let _ = `${_}-draggable`;
    return {
      base: _,
      contextId: `${_}-context-id`,
      _: `${_}-id`,
    };
  })(),
  _ = (() => {
    let _ = `${_}-droppable`;
    return {
      base: _,
      contextId: `${_}-context-id`,
      _: `${_}-id`,
    };
  })(),
  _ = {
    contextId: `${_}-scroll-container-context-id`,
  },
  _ = (_) => (_) => `[${_}="${_}"]`,
  _ = (_, _) =>
    _.map((_) => {
      let _ = _.styles[_];
      return _ ? `${_.selector} { ${_} }` : ``;
    }).join(` `),
  _ = `pointer-events: none;`,
  _ = (_) => {
    let _ = _(_),
      _ = (() => {
        let _ = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: _(_.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: _,
            dragging: _,
            dropAnimating: _,
          },
        };
      })(),
      _ = [
        (() => {
          let _ = `
      transition: ${_.outOfTheWay};
    `;
          return {
            selector: _(_.contextId),
            styles: {
              dragging: _,
              dropAnimating: _,
              userCancel: _,
            },
          };
        })(),
        _,
        {
          selector: _(_.contextId),
          styles: {
            always: `overflow-anchor: none;`,
          },
        },
        {
          selector: `body`,
          styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
          },
        },
      ];
    return {
      always: _(_, `always`),
      resting: _(_, `resting`),
      dragging: _(_, `dragging`),
      dropAnimating: _(_, `dropAnimating`),
      userCancel: _(_, `userCancel`),
    };
  },
  _ =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0
      ? _.useLayoutEffect
      : _.useEffect,
  _ = () => {
    let _ = document.querySelector(`head`);
    return !_ && _(!1), _;
  },
  _ = (_) => {
    let _ = document.createElement(`style`);
    return _ && _.setAttribute(`nonce`, _), (_.type = `text/css`), _;
  };
function _(_, _) {
  let _ = _(() => _(_), [_]),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = _(
      _((_) => {
        let _ = _.current;
        !_ && _(!1), (_.textContent = _);
      }),
      [],
    ),
    _ = _((_) => {
      let _ = _.current;
      !_ && _(!1), (_.textContent = _);
    }, []);
  _(() => {
    !(!_.current && !_.current) && _(!1);
    let _ = _(_),
      _ = _(_);
    return (
      (_.current = _),
      (_.current = _),
      _.setAttribute(`${_}-always`, _),
      _.setAttribute(`${_}-dynamic`, _),
      _().appendChild(_),
      _().appendChild(_),
      _(_.always),
      _(_.resting),
      () => {
        let _ = (_) => {
          let _ = _.current;
          !_ && _(!1), _().removeChild(_), (_.current = null);
        };
        _(_), _(_);
      }
    );
  }, [_, _, _, _.always, _.resting, _]);
  let _ = _(() => _(_.dragging), [_, _.dragging]),
    _ = _(
      (_) => {
        if (_ === `DROP`) {
          _(_.dropAnimating);
          return;
        }
        _(_.userCancel);
      },
      [_, _.dropAnimating, _.userCancel],
    ),
    _ = _(() => {
      _.current && _(_.resting);
    }, [_, _.resting]);
  return _(
    () => ({
      dragging: _,
      dropping: _,
      resting: _,
    }),
    [_, _, _],
  );
}
function _(_, _) {
  return Array.from(_.querySelectorAll(_));
}
var _ = (_) =>
  _ && _.ownerDocument && _.ownerDocument.defaultView
    ? _.ownerDocument.defaultView
    : window;
function _(_) {
  return _ instanceof _(_).HTMLElement;
}
function _(_, _) {
  let _ = `[${_.contextId}="${_}"]`,
    _ = _(document, _);
  if (!_.length) return null;
  let _ = _.find((_) => _.getAttribute(_.draggableId) === _);
  return !_ || !_(_) ? null : _;
}
function _(_) {
  let _ = (0, _.useRef)({}),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!1),
    _ = _(function (_, _) {
      let _ = {
        _: _,
        focus: _,
      };
      return (
        (_.current[_] = _),
        function () {
          let _ = _.current;
          _[_] !== _ && delete _[_];
        }
      );
    }, []),
    _ = _(
      function (_) {
        let _ = _(_, _);
        _ && _ !== document.activeElement && _.focus();
      },
      [_],
    ),
    _ = _(function (_, _) {
      _.current === _ && (_.current = _);
    }, []),
    _ = _(
      function () {
        _.current ||
          (_.current &&
            (_.current = requestAnimationFrame(() => {
              _.current = null;
              let _ = _.current;
              _ && _(_);
            })));
      },
      [_],
    ),
    _ = _(function (_) {
      _.current = null;
      let _ = document.activeElement;
      _ && _.getAttribute(_.draggableId) === _ && (_.current = _);
    }, []);
  return (
    _(
      () => (
        (_.current = !0),
        function () {
          _.current = !1;
          let _ = _.current;
          _ && cancelAnimationFrame(_);
        }
      ),
      [],
    ),
    _(
      () => ({
        register: _,
        tryRecordFocus: _,
        tryRestoreFocusRecorded: _,
        tryShiftRecord: _,
      }),
      [_, _, _, _],
    )
  );
}
function _() {
  let _ = {
      draggables: {},
      droppables: {},
    },
    _ = [];
  function _(_) {
    return (
      _.push(_),
      function () {
        let _ = _.indexOf(_);
        _ !== -1 && _.splice(_, 1);
      }
    );
  }
  function _(_) {
    _.length && _.forEach((_) => _(_));
  }
  function _(_) {
    return _.draggables[_] || null;
  }
  function _(_) {
    let _ = _(_);
    return !_ && _(!1), _;
  }
  let _ = {
    register: (_) => {
      (_.draggables[_.descriptor._] = _),
        _({
          type: `ADDITION`,
          value: _,
        });
    },
    update: (_, _) => {
      let _ = _.draggables[_.descriptor._];
      _ &&
        _.uniqueId === _.uniqueId &&
        (delete _.draggables[_.descriptor._],
        (_.draggables[_.descriptor._] = _));
    },
    unregister: (_) => {
      let _ = _.descriptor._,
        _ = _(_);
      _ &&
        _.uniqueId === _.uniqueId &&
        (delete _.draggables[_],
        _.droppables[_.descriptor.droppableId] &&
          _({
            type: `REMOVAL`,
            value: _,
          }));
    },
    getById: _,
    findById: _,
    exists: (_) => !!_(_),
    getAllByType: (_) =>
      Object.values(_.draggables).filter((_) => _.descriptor.type === _),
  };
  function _(_) {
    return _.droppables[_] || null;
  }
  function _(_) {
    let _ = _(_);
    return !_ && _(!1), _;
  }
  let _ = {
    register: (_) => {
      _.droppables[_.descriptor._] = _;
    },
    unregister: (_) => {
      let _ = _(_.descriptor._);
      _ && _.uniqueId === _.uniqueId && delete _.droppables[_.descriptor._];
    },
    getById: _,
    findById: _,
    exists: (_) => !!_(_),
    getAllByType: (_) =>
      Object.values(_.droppables).filter((_) => _.descriptor.type === _),
  };
  function _() {
    (_.draggables = {}), (_.droppables = {}), (_.length = 0);
  }
  return {
    draggable: _,
    droppable: _,
    subscribe: _,
    clean: _,
  };
}
function _() {
  let _ = _(_, []);
  return (
    (0, _.useEffect)(
      () =>
        function () {
          _.clean();
        },
      [_],
    ),
    _
  );
}
var _ = _.createContext(null),
  _ = () => {
    let _ = document.body;
    return !_ && _(!1), _;
  },
  _ = {
    position: `absolute`,
    width: `1px`,
    height: `1px`,
    margin: `-1px`,
    border: `0`,
    padding: `0`,
    overflow: `hidden`,
    clip: `rect(0 0 0 0)`,
    "clip-path": `inset(100%)`,
  },
  _ = (_) => `rfd-announcement-${_}`;
function _(_) {
  let _ = _(() => _(_), [_]),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(
      function () {
        let _ = document.createElement(`div`);
        return (
          (_.current = _),
          (_._ = _),
          _.setAttribute(`aria-live`, `assertive`),
          _.setAttribute(`aria-atomic`, `true`),
          _(_.style, _),
          _().appendChild(_),
          function () {
            setTimeout(function () {
              let _ = _();
              _.contains(_) && _.removeChild(_),
                _ === _.current && (_.current = null);
            });
          }
        );
      },
      [_],
    ),
    _((_) => {
      let _ = _.current;
      if (_) {
        _.textContent = _;
        return;
      }
    }, [])
  );
}
var _ = 0,
  _ = {
    separator: `::`,
  };
function _(_, _ = _) {
  return _(() => `${_}${_.separator}${_++}`, [_.separator, _]);
}
function _(_, _ = _) {
  let _ = _.useId();
  return _(() => `${_}${_.separator}${_}`, [_.separator, _, _]);
}
var _ = `useId` in _.default ? _ : _;
function _({ contextId: _, uniqueId: _ }) {
  return `rfd-hidden-text-${_}-${_}`;
}
function _({ contextId: _, text: _ }) {
  let _ = _(`hidden-text`, {
      separator: `-`,
    }),
    _ = _(
      () =>
        _({
          contextId: _,
          uniqueId: _,
        }),
      [_, _],
    );
  return (
    (0, _.useEffect)(
      function () {
        let _ = document.createElement(`div`);
        return (
          (_._ = _),
          (_.textContent = _),
          (_.style.display = `none`),
          _().appendChild(_),
          function () {
            let _ = _();
            _.contains(_) && _.removeChild(_);
          }
        );
      },
      [_, _],
    ),
    _
  );
}
var _ = _.createContext(null);
function _(_) {
  let _ = (0, _.useRef)(_);
  return (
    (0, _.useEffect)(() => {
      _.current = _;
    }),
    _
  );
}
function _() {
  let _ = null;
  function _() {
    return !!_;
  }
  function _(_) {
    return _ === _;
  }
  function _(_) {
    _ && _(!1);
    let _ = {
      abandon: _,
    };
    return (_ = _), _;
  }
  function _() {
    !_ && _(!1), (_ = null);
  }
  function _() {
    _ && (_.abandon(), _());
  }
  return {
    isClaimed: _,
    isActive: _,
    claim: _,
    release: _,
    tryAbandon: _,
  };
}
function _(_) {
  return _.phase === `IDLE` || _.phase === `DROP_ANIMATING` ? !1 : _.isDragging;
}
var _ = 9,
  _ = 13,
  _ = 27,
  _ = 32,
  _ = 33,
  _ = 34,
  _ = 35,
  _ = 36,
  _ = 37,
  _ = 38,
  _ = 39,
  _ = 40,
  _ = {
    [_]: !0,
    [_]: !0,
  },
  _ = (_) => {
    _[_.keyCode] && _.preventDefault();
  },
  _ = (() => {
    let _ = `visibilitychange`;
    return typeof document > `u`
      ? _
      : [_, `ms${_}`, `webkit${_}`, `moz${_}`, `o${_}`].find(
          (_) => `on${_}` in document,
        ) || _;
  })(),
  _ = 0,
  _ = 5;
function _(_, _) {
  return Math.abs(_._ - _._) >= _ || Math.abs(_._ - _._) >= _;
}
var _ = {
  type: `IDLE`,
};
function _({ cancel: _, completed: _, getPhase: _, setPhase: _ }) {
  return [
    {
      eventName: `mousemove`,
      _: (_) => {
        let { button: _, clientX: _, clientY: _ } = _;
        if (_ !== _) return;
        let _ = {
            _: _,
            _: _,
          },
          _ = _();
        if (_.type === `DRAGGING`) {
          _.preventDefault(), _.actions.move(_);
          return;
        }
        _.type !== `PENDING` && _(!1);
        let _ = _.point;
        _(_, _) &&
          (_.preventDefault(),
          _({
            type: `DRAGGING`,
            actions: _.actions.fluidLift(_),
          }));
      },
    },
    {
      eventName: `mouseup`,
      _: (_) => {
        let _ = _();
        if (_.type !== `DRAGGING`) {
          _();
          return;
        }
        _.preventDefault(),
          _.actions.drop({
            shouldBlockNextClick: !0,
          }),
          _();
      },
    },
    {
      eventName: `mousedown`,
      _: (_) => {
        _().type === `DRAGGING` && _.preventDefault(), _();
      },
    },
    {
      eventName: `keydown`,
      _: (_) => {
        if (_().type === `PENDING`) {
          _();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _();
          return;
        }
        _(_);
      },
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `scroll`,
      options: {
        passive: !0,
        capture: !1,
      },
      _: () => {
        _().type === `PENDING` && _();
      },
    },
    {
      eventName: `webkitmouseforcedown`,
      _: (_) => {
        let _ = _();
        if ((_.type === `IDLE` && _(!1), _.actions.shouldRespectForcePress())) {
          _();
          return;
        }
        _.preventDefault();
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(_),
    _ = _(
      () => ({
        eventName: `mousedown`,
        _: function (_) {
          if (
            _.defaultPrevented ||
            _.button !== _ ||
            _.ctrlKey ||
            _.metaKey ||
            _.shiftKey ||
            _.altKey
          )
            return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          _.preventDefault();
          let _ = {
            _: _.clientX,
            _: _.clientY,
          };
          _.current(), _(_, _);
        },
      }),
      [_],
    ),
    _ = _(
      () => ({
        eventName: `webkitmouseforcewillbegin`,
        _: (_) => {
          if (_.defaultPrevented) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.findOptionsForDraggable(_);
          _ &&
            (_.shouldRespectForcePress ||
              (_.canGetLock(_) && _.preventDefault()));
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(window, [_, _], {
          passive: !1,
          capture: !0,
        });
      },
      [_, _],
    ),
    _ = _(() => {
      _.current.type !== `IDLE` && ((_.current = _), _.current(), _());
    }, [_]),
    _ = _(() => {
      let _ = _.current;
      _(),
        _.type === `DRAGGING` &&
          _.actions.cancel({
            shouldBlockNextClick: !0,
          }),
        _.type === `PENDING` && _.actions.abort();
    }, [_]),
    _ = _(
      function () {
        let _ = {
            capture: !0,
            passive: !1,
          },
          _ = _({
            cancel: _,
            completed: _,
            getPhase: () => _.current,
            setPhase: (_) => {
              _.current = _;
            },
          });
        _.current = _(window, _, _);
      },
      [_, _],
    ),
    _ = _(
      function (_, _) {
        _.current.type !== `IDLE` && _(!1),
          (_.current = {
            type: `PENDING`,
            point: _,
            actions: _,
          }),
          _();
      },
      [_],
    );
  _(
    function () {
      return (
        _(),
        function () {
          _.current();
        }
      );
    },
    [_],
  );
}
function _() {}
var _ = {
  [_]: !0,
  [_]: !0,
  [_]: !0,
  [_]: !0,
};
function _(_, _) {
  function _() {
    _(), _.cancel();
  }
  function _() {
    _(), _.drop();
  }
  return [
    {
      eventName: `keydown`,
      _: (_) => {
        if (_.keyCode === _) {
          _.preventDefault(), _();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _.moveDown();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _.moveUp();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _.moveRight();
          return;
        }
        if (_.keyCode === _) {
          _.preventDefault(), _.moveLeft();
          return;
        }
        if (_[_.keyCode]) {
          _.preventDefault();
          return;
        }
        _(_);
      },
    },
    {
      eventName: `mousedown`,
      _: _,
    },
    {
      eventName: `mouseup`,
      _: _,
    },
    {
      eventName: `click`,
      _: _,
    },
    {
      eventName: `touchstart`,
      _: _,
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `wheel`,
      _: _,
      options: {
        passive: !0,
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = _(
      () => ({
        eventName: `keydown`,
        _: function (_) {
          if (_.defaultPrevented || _.keyCode !== _) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          _.preventDefault();
          let _ = !0,
            _ = _.snapLift();
          _.current();
          function _() {
            !_ && _(!1), (_ = !1), _.current(), _();
          }
          _.current = _(window, _(_, _), {
            capture: !0,
            passive: !1,
          });
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(window, [_], {
          passive: !1,
          capture: !0,
        });
      },
      [_],
    );
  _(
    function () {
      return (
        _(),
        function () {
          _.current();
        }
      );
    },
    [_],
  );
}
var _ = {
    type: `IDLE`,
  },
  _ = 120,
  _ = 0.15;
function _({ cancel: _, getPhase: _ }) {
  return [
    {
      eventName: `orientationchange`,
      _: _,
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `contextmenu`,
      _: (_) => {
        _.preventDefault();
      },
    },
    {
      eventName: `keydown`,
      _: (_) => {
        if (_().type !== `DRAGGING`) {
          _();
          return;
        }
        _.keyCode === _ && _.preventDefault(), _();
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _({ cancel: _, completed: _, getPhase: _ }) {
  return [
    {
      eventName: `touchmove`,
      options: {
        capture: !1,
      },
      _: (_) => {
        let _ = _();
        if (_.type !== `DRAGGING`) {
          _();
          return;
        }
        _.hasMoved = !0;
        let { clientX: _, clientY: _ } = _.touches[0],
          _ = {
            _: _,
            _: _,
          };
        _.preventDefault(), _.actions.move(_);
      },
    },
    {
      eventName: `touchend`,
      _: (_) => {
        let _ = _();
        if (_.type !== `DRAGGING`) {
          _();
          return;
        }
        _.preventDefault(),
          _.actions.drop({
            shouldBlockNextClick: !0,
          }),
          _();
      },
    },
    {
      eventName: `touchcancel`,
      _: (_) => {
        if (_().type !== `DRAGGING`) {
          _();
          return;
        }
        _.preventDefault(), _();
      },
    },
    {
      eventName: `touchforcechange`,
      _: (_) => {
        let _ = _();
        _.type === `IDLE` && _(!1);
        let _ = _.touches[0];
        if (!_ || !(_.force >= _)) return;
        let _ = _.actions.shouldRespectForcePress();
        if (_.type === `PENDING`) {
          _ && _();
          return;
        }
        if (_) {
          if (_.hasMoved) {
            _.preventDefault();
            return;
          }
          _();
          return;
        }
        _.preventDefault();
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(_),
    _ = _(function () {
      return _.current;
    }, []),
    _ = _(function (_) {
      _.current = _;
    }, []),
    _ = _(
      () => ({
        eventName: `touchstart`,
        _: function (_) {
          if (_.defaultPrevented) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          let { clientX: _, clientY: _ } = _.touches[0],
            _ = {
              _: _,
              _: _,
            };
          _.current(), _(_, _);
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(window, [_], {
          capture: !0,
          passive: !1,
        });
      },
      [_],
    ),
    _ = _(() => {
      let _ = _.current;
      _.type !== `IDLE` &&
        (_.type === `PENDING` && clearTimeout(_.longPressTimerId),
        _(_),
        _.current(),
        _());
    }, [_, _]),
    _ = _(() => {
      let _ = _.current;
      _(),
        _.type === `DRAGGING` &&
          _.actions.cancel({
            shouldBlockNextClick: !0,
          }),
        _.type === `PENDING` && _.actions.abort();
    }, [_]),
    _ = _(
      function () {
        let _ = {
            capture: !0,
            passive: !1,
          },
          _ = {
            cancel: _,
            completed: _,
            getPhase: _,
          },
          _ = _(window, _(_), _),
          _ = _(window, _(_), _);
        _.current = function () {
          _(), _();
        };
      },
      [_, _, _],
    ),
    _ = _(
      function () {
        let _ = _();
        _.type !== `PENDING` && _(!1);
        let _ = _.actions.fluidLift(_.point);
        _({
          type: `DRAGGING`,
          actions: _,
          hasMoved: !1,
        });
      },
      [_, _],
    ),
    _ = _(
      function (_, _) {
        _().type !== `IDLE` && _(!1);
        let _ = setTimeout(_, _);
        _({
          type: `PENDING`,
          point: _,
          actions: _,
          longPressTimerId: _,
        }),
          _();
      },
      [_, _, _, _],
    );
  _(
    function () {
      return (
        _(),
        function () {
          _.current();
          let _ = _();
          _.type === `PENDING` && (clearTimeout(_.longPressTimerId), _(_));
        }
      );
    },
    [_, _, _],
  ),
    _(function () {
      return _(window, [
        {
          eventName: `touchmove`,
          _: () => {},
          options: {
            capture: !1,
            passive: !1,
          },
        },
      ]);
    }, []);
}
var _ = [
  `input`,
  `button`,
  `textarea`,
  `select`,
  `option`,
  `optgroup`,
  `video`,
  `audio`,
];
function _(_, _) {
  if (_ == null) return !1;
  if (_.includes(_.tagName.toLowerCase())) return !0;
  let _ = _.getAttribute(`contenteditable`);
  return _ === `true` || _ === `` || (_ !== _ && _(_, _.parentElement));
}
function _(_, _) {
  let _ = _.target;
  return _(_) ? _(_, _) : !1;
}
var _ = (_) => _(_.getBoundingClientRect()).center;
function _(_) {
  return _ instanceof _(_).Element;
}
var _ = (() => {
  let _ = `matches`;
  return typeof document > `u`
    ? _
    : [_, `msMatchesSelector`, `webkitMatchesSelector`].find(
        (_) => _ in Element.prototype,
      ) || _;
})();
function _(_, _) {
  return _ == null ? null : _[_](_) ? _ : _(_.parentElement, _);
}
function _(_, _) {
  return _.closest ? _.closest(_) : _(_, _);
}
function _(_) {
  return `[${_.contextId}="${_}"]`;
}
function _(_, _) {
  let _ = _.target;
  if (!_(_)) return null;
  let _ = _(_, _(_));
  return !_ || !_(_) ? null : _;
}
function _(_, _) {
  let _ = _(_, _);
  return _ ? _.getAttribute(_.draggableId) : null;
}
function _(_, _) {
  let _ = `[${_.contextId}="${_}"]`,
    _ = _(document, _).find((_) => _.getAttribute(_._) === _);
  return !_ || !_(_) ? null : _;
}
function _(_) {
  _.preventDefault();
}
function _({ expected: _, phase: _, isLockActive: _, shouldWarn: _ }) {
  return !(!_() || _ !== _);
}
function _({ lockAPI: _, store: _, registry: _, draggableId: _ }) {
  if (_.isClaimed()) return !1;
  let _ = _.draggable.findById(_);
  return !(!_ || !_.options.isEnabled || !_(_.getState(), _));
}
function _({
  lockAPI: _,
  contextId: _,
  store: _,
  registry: _,
  draggableId: _,
  forceSensorStop: _,
  sourceEvent: _,
}) {
  if (
    !_({
      lockAPI: _,
      store: _,
      registry: _,
      draggableId: _,
    })
  )
    return null;
  let _ = _.draggable.getById(_),
    _ = _(_, _.descriptor._);
  if (!_ || (_ && !_.options.canDragInteractiveElements && _(_, _)))
    return null;
  let _ = _.claim(_ || _),
    _ = `PRE_DRAG`;
  function _() {
    return _.options.shouldRespectForcePress;
  }
  function _() {
    return _.isActive(_);
  }
  function _(_, _) {
    _({
      expected: _,
      phase: _,
      isLockActive: _,
      shouldWarn: !0,
    }) && _.dispatch(_());
  }
  let _ = _.bind(null, `DRAGGING`);
  function _(_) {
    function _() {
      _.release(), (_ = `COMPLETED`);
    }
    _ !== `PRE_DRAG` && (_(), _(!1)),
      _.dispatch(_(_.liftActionArgs)),
      (_ = `DRAGGING`);
    function _(
      _,
      _ = {
        shouldBlockNextClick: !1,
      },
    ) {
      if ((_.cleanup(), _.shouldBlockNextClick)) {
        let _ = _(window, [
          {
            eventName: `click`,
            _: _,
            options: {
              once: !0,
              passive: !1,
              capture: !0,
            },
          },
        ]);
        setTimeout(_);
      }
      _(),
        _.dispatch(
          _({
            reason: _,
          }),
        );
    }
    return {
      isActive: () =>
        _({
          expected: `DRAGGING`,
          phase: _,
          isLockActive: _,
          shouldWarn: !1,
        }),
      shouldRespectForcePress: _,
      drop: (_) => _(`DROP`, _),
      cancel: (_) => _(`CANCEL`, _),
      ..._.actions,
    };
  }
  function _(_) {
    let _ = _((_) => {
      _(() =>
        _({
          client: _,
        }),
      );
    });
    return {
      ..._({
        liftActionArgs: {
          _: _,
          clientSelection: _,
          movementMode: `FLUID`,
        },
        cleanup: () => _.cancel(),
        actions: {
          move: _,
        },
      }),
      move: _,
    };
  }
  function _() {
    return _({
      liftActionArgs: {
        _: _,
        clientSelection: _(_),
        movementMode: `SNAP`,
      },
      cleanup: _,
      actions: {
        moveUp: () => _(_),
        moveRight: () => _(_),
        moveDown: () => _(_),
        moveLeft: () => _(_),
      },
    });
  }
  function _() {
    _({
      expected: `PRE_DRAG`,
      phase: _,
      isLockActive: _,
      shouldWarn: !0,
    }) && _.release();
  }
  return {
    isActive: () =>
      _({
        expected: `PRE_DRAG`,
        phase: _,
        isLockActive: _,
        shouldWarn: !1,
      }),
    shouldRespectForcePress: _,
    fluidLift: _,
    snapLift: _,
    abort: _,
  };
}
var _ = [_, _, _];
function _({
  contextId: _,
  store: _,
  registry: _,
  customSensors: _,
  enableDefaultSensors: _,
}) {
  let _ = [...(_ ? _ : []), ...(_ || [])],
    _ = (0, _.useState)(() => _())[0],
    _ = _(
      function (_, _) {
        _(_) && !_(_) && _.tryAbandon();
      },
      [_],
    );
  _(
    function () {
      let _ = _.getState();
      return _.subscribe(() => {
        let _ = _.getState();
        _(_, _), (_ = _);
      });
    },
    [_, _, _],
  ),
    _(() => _.tryAbandon, [_.tryAbandon]);
  let _ = _(
      (_) =>
        _({
          lockAPI: _,
          registry: _,
          store: _,
          draggableId: _,
        }),
      [_, _, _],
    ),
    _ = _(
      (_, _, _) =>
        _({
          lockAPI: _,
          registry: _,
          contextId: _,
          store: _,
          draggableId: _,
          forceSensorStop: _ || null,
          sourceEvent: _ && _.sourceEvent ? _.sourceEvent : null,
        }),
      [_, _, _, _],
    ),
    _ = _((_) => _(_, _), [_]),
    _ = _(
      (_) => {
        let _ = _.draggable.findById(_);
        return _ ? _.options : null;
      },
      [_.draggable],
    ),
    _ = _(
      function () {
        _.isClaimed() &&
          (_.tryAbandon(), _.getState().phase !== `IDLE` && _.dispatch(_()));
      },
      [_, _],
    ),
    _ = _(() => _.isClaimed(), [_]),
    _ = _(
      () => ({
        canGetLock: _,
        tryGetLock: _,
        findClosestDraggableId: _,
        findOptionsForDraggable: _,
        tryReleaseLock: _,
        isLockClaimed: _,
      }),
      [_, _, _, _, _, _],
    );
  for (let _ = 0; _ < _.length; _++) _[_](_);
}
var _ = (_) => ({
    onBeforeCapture: (_) => {
      (0, _.flushSync)(() => {
        _.onBeforeCapture && _.onBeforeCapture(_);
      });
    },
    onBeforeDragStart: _.onBeforeDragStart,
    onDragStart: _.onDragStart,
    onDragEnd: _.onDragEnd,
    onDragUpdate: _.onDragUpdate,
  }),
  _ = (_) => ({
    ..._,
    ..._.autoScrollerOptions,
    durationDampening: {
      ..._.durationDampening,
      ..._.autoScrollerOptions,
    },
  });
function _(_) {
  return !_.current && _(!1), _.current;
}
function _(_) {
  let {
      contextId: _,
      setCallbacks: _,
      sensors: _,
      nonce: _,
      dragHandleUsageInstructions: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = _(_),
    _ = _(() => _(_.current), [_]),
    _ = _(() => _(_.current), [_]),
    _ = _(_),
    _ = _({
      contextId: _,
      text: _,
    }),
    _ = _(_, _),
    _ = _((_) => {
      _(_).dispatch(_);
    }, []),
    _ = _(
      () =>
        _(
          {
            publishWhileDragging: _,
            updateDroppableScroll: _,
            updateDroppableIsEnabled: _,
            updateDroppableIsCombineEnabled: _,
            collectionStarting: _,
          },
          _,
        ),
      [_],
    ),
    _ = _(),
    _ = _(() => _(_, _), [_, _]),
    _ = _(
      () =>
        _({
          scrollWindow: _,
          scrollDroppable: _.scrollDroppable,
          getAutoScrollerOptions: _,
          ..._(
            {
              move: _,
            },
            _,
          ),
        }),
      [_.scrollDroppable, _, _],
    ),
    _ = _(_),
    _ = _(
      () =>
        _({
          announce: _,
          autoScroller: _,
          dimensionMarshal: _,
          focusMarshal: _,
          getResponders: _,
          styleMarshal: _,
        }),
      [_, _, _, _, _, _],
    );
  _.current = _;
  let _ = _(() => {
      let _ = _(_);
      _.getState().phase !== `IDLE` && _.dispatch(_());
    }, []),
    _ = _(() => {
      let _ = _(_).getState();
      return (
        _.phase === `DROP_ANIMATING` || (_.phase !== `IDLE` && _.isDragging)
      );
    }, []);
  _(
    _(
      () => ({
        isDragging: _,
        tryAbort: _,
      }),
      [_, _],
    ),
  );
  let _ = _((_) => _(_(_).getState(), _), []),
    _ = _(() => _(_(_).getState()), []),
    _ = _(
      () => ({
        marshal: _,
        focus: _,
        contextId: _,
        canLift: _,
        isMovementAllowed: _,
        dragHandleUsageInstructionsId: _,
        registry: _,
      }),
      [_, _, _, _, _, _, _],
    );
  return (
    _({
      contextId: _,
      store: _,
      registry: _,
      customSensors: _ || null,
      enableDefaultSensors: _.enableDefaultSensors !== !1,
    }),
    (0, _.useEffect)(() => _, [_]),
    _.createElement(
      _.Provider,
      {
        value: _,
      },
      _.createElement(
        _,
        {
          context: _,
          store: _,
        },
        _.children,
      ),
    )
  );
}
var _ = 0;
function _() {
  return _(() => `${_++}`, []);
}
function _() {
  return _.useId();
}
var _ = `useId` in _.default ? _ : _;
function _(_) {
  let _ = _(),
    _ = _.dragHandleUsageInstructions || _.dragHandleUsageInstructions;
  return _.createElement(_, null, (_) =>
    _.createElement(
      _,
      {
        nonce: _.nonce,
        contextId: _,
        setCallbacks: _,
        dragHandleUsageInstructions: _,
        enableDefaultSensors: _.enableDefaultSensors,
        sensors: _.sensors,
        onBeforeCapture: _.onBeforeCapture,
        onBeforeDragStart: _.onBeforeDragStart,
        onDragStart: _.onDragStart,
        onDragUpdate: _.onDragUpdate,
        onDragEnd: _.onDragEnd,
        autoScrollerOptions: _.autoScrollerOptions,
      },
      _.children,
    ),
  );
}
var _ = {
    dragging: 5e3,
    dropAnimating: 4500,
  },
  _ = (_, _) => (_ ? _.drop(_.duration) : _ ? _.snap : _.fluid),
  _ = (_, _) => {
    if (_) return _ ? _.opacity.drop : _.opacity.combining;
  },
  _ = (_) =>
    _.forceShouldAnimate == null ? _.mode === `SNAP` : _.forceShouldAnimate;
function _(_) {
  let _ = _.dimension.client,
    { offset: _, combineWith: _, dropping: _ } = _,
    _ = !!_,
    _ = _(_),
    _ = !!_,
    _ = _ ? _.drop(_, _) : _.moveTo(_);
  return {
    position: `fixed`,
    top: _.marginBox.top,
    left: _.marginBox.left,
    boxSizing: `border-box`,
    width: _.borderBox.width,
    height: _.borderBox.height,
    transition: _(_, _),
    transform: _,
    opacity: _(_, _),
    zIndex: _ ? _.dropAnimating : _.dragging,
    pointerEvents: `none`,
  };
}
function _(_) {
  return {
    transform: _.moveTo(_.offset),
    transition: _.shouldAnimateDisplacement ? void 0 : `none`,
  };
}
function _(_) {
  return _.type === `DRAGGING` ? _(_) : _(_);
}
function _(_, _, _ = _) {
  let _ = window.getComputedStyle(_),
    _ = _(_.getBoundingClientRect(), _),
    _ = _(_, _);
  return {
    descriptor: _,
    placeholder: {
      client: _,
      tagName: _.tagName.toLowerCase(),
      display: _.display,
    },
    displaceBy: {
      _: _.marginBox.width,
      _: _.marginBox.height,
    },
    client: _,
    page: _,
  };
}
function _(_) {
  let _ = _(`draggable`),
    {
      descriptor: _,
      registry: _,
      getDraggableRef: _,
      canDragInteractiveElements: _,
      shouldRespectForcePress: _,
      isEnabled: _,
    } = _,
    _ = _(
      () => ({
        canDragInteractiveElements: _,
        shouldRespectForcePress: _,
        isEnabled: _,
      }),
      [_, _, _],
    ),
    _ = _(
      (_) => {
        let _ = _();
        return !_ && _(!1), _(_, _, _);
      },
      [_, _],
    ),
    _ = _(
      () => ({
        uniqueId: _,
        descriptor: _,
        options: _,
        getDimension: _,
      }),
      [_, _, _, _],
    ),
    _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(!0);
  _(
    () => (
      _.draggable.register(_.current), () => _.draggable.unregister(_.current)
    ),
    [_.draggable],
  ),
    _(() => {
      if (_.current) {
        _.current = !1;
        return;
      }
      let _ = _.current;
      (_.current = _), _.draggable.update(_, _);
    }, [_, _.draggable]);
}
var _ = _.createContext(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return !_ && _(!1), _;
}
function _(_) {
  _.preventDefault();
}
var _ = (_) => {
    let _ = (0, _.useRef)(null),
      _ = _((_ = null) => {
        _.current = _;
      }, []),
      _ = _(() => _.current, []),
      { contextId: _, dragHandleUsageInstructionsId: _, registry: _ } = _(_),
      { type: _, droppableId: _ } = _(_),
      _ = _(
        () => ({
          _: _.draggableId,
          index: _.index,
          type: _,
          droppableId: _,
        }),
        [_.draggableId, _.index, _, _],
      ),
      {
        children: _,
        draggableId: _,
        isEnabled: _,
        shouldRespectForcePress: _,
        canDragInteractiveElements: _,
        isClone: _,
        mapped: _,
        dropAnimationFinished: _,
      } = _;
    _ ||
      _(
        _(
          () => ({
            descriptor: _,
            registry: _,
            getDraggableRef: _,
            canDragInteractiveElements: _,
            shouldRespectForcePress: _,
            isEnabled: _,
          }),
          [_, _, _, _, _, _],
        ),
      );
    let _ = _(
        () =>
          _
            ? {
                tabIndex: 0,
                role: `button`,
                "aria-describedby": _,
                "data-rfd-drag-handle-draggable-id": _,
                "data-rfd-drag-handle-context-id": _,
                draggable: !1,
                onDragStart: _,
              }
            : null,
        [_, _, _, _],
      ),
      _ = _(
        (_) => {
          _.type === `DRAGGING` &&
            _.dropping &&
            _.propertyName === `transform` &&
            (0, _.flushSync)(_);
        },
        [_, _],
      ),
      _ = _(() => {
        let _ = _(_),
          _ = _.type === `DRAGGING` && _.dropping ? _ : void 0;
        return {
          innerRef: _,
          draggableProps: {
            "data-rfd-draggable-context-id": _,
            "data-rfd-draggable-id": _,
            style: _,
            onTransitionEnd: _,
          },
          dragHandleProps: _,
        };
      }, [_, _, _, _, _, _]),
      _ = _(
        () => ({
          draggableId: _._,
          type: _.type,
          source: {
            index: _.index,
            droppableId: _.droppableId,
          },
        }),
        [_.droppableId, _._, _.index, _.type],
      );
    return _.createElement(_.Fragment, null, _(_, _.snapshot, _));
  },
  _ = (_, _) => _ === _,
  _ = (_) => {
    let { combine: _, destination: _ } = _;
    return _ ? _.droppableId : _ ? _.droppableId : null;
  },
  _ = (_) => (_.combine ? _.combine.draggableId : null),
  _ = (_) => (_._ && _._.type === `COMBINE` ? _._.combine.draggableId : null);
function _() {
  let _ = _((_, _) => ({
      _: _,
      _: _,
    })),
    _ = _((_, _, _ = null, _ = null, _ = null) => ({
      isDragging: !0,
      isClone: _,
      isDropAnimating: !!_,
      dropAnimation: _,
      mode: _,
      draggingOver: _,
      combineWith: _,
      combineTargetFor: null,
    })),
    _ = _((_, _, _, _, _ = null, _ = null, _ = null) => ({
      mapped: {
        type: `DRAGGING`,
        dropping: null,
        draggingOver: _,
        combineWith: _,
        mode: _,
        offset: _,
        dimension: _,
        forceShouldAnimate: _,
        snapshot: _(_, _, _, _, null),
      },
    }));
  return (_, _) => {
    if (_(_)) {
      if (_.critical.draggable._ !== _.draggableId) return null;
      let _ = _.current.client.offset,
        _ = _.dimensions.draggables[_.draggableId],
        _ = _(_.impact),
        _ = _(_.impact),
        _ = _.forceShouldAnimate;
      return _(_(_._, _._), _.movementMode, _, _.isClone, _, _, _);
    }
    if (_.phase === `DROP_ANIMATING`) {
      let _ = _.completed;
      if (_.result.draggableId !== _.draggableId) return null;
      let _ = _.isClone,
        _ = _.dimensions.draggables[_.draggableId],
        _ = _.result,
        _ = _.mode,
        _ = _(_),
        _ = _(_),
        _ = {
          duration: _.dropDuration,
          curve: _.drop,
          moveTo: _.newHomeClientOffset,
          opacity: _ ? _.opacity.drop : null,
          scale: _ ? _.scale.drop : null,
        };
      return {
        mapped: {
          type: `DRAGGING`,
          offset: _.newHomeClientOffset,
          dimension: _,
          dropping: _,
          draggingOver: _,
          combineWith: _,
          mode: _,
          forceShouldAnimate: null,
          snapshot: _(_, _, _, _, _),
        },
      };
    }
    return null;
  };
}
function _(_ = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: _,
    combineWith: null,
  };
}
var _ = {
  mapped: {
    type: `SECONDARY`,
    offset: _,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: _(null),
  },
};
function _() {
  let _ = _((_, _) => ({
      _: _,
      _: _,
    })),
    _ = _(_),
    _ = _((_, _ = null, _) => ({
      mapped: {
        type: `SECONDARY`,
        offset: _,
        combineTargetFor: _,
        shouldAnimateDisplacement: _,
        snapshot: _(_),
      },
    })),
    _ = (_) => (_ ? _(_, _, !0) : null),
    _ = (_, _, _, _) => {
      let _ = _.displaced.visible[_],
        _ = !!(_.inVirtualList && _.effected[_]),
        _ = _(_),
        _ = _ && _.draggableId === _ ? _ : null;
      if (!_) {
        if (!_) return _(_);
        if (_.displaced.invisible[_]) return null;
        let _ = _(_.displacedBy.point),
          _ = _(_._, _._);
        return _(_, _, !0);
      }
      if (_) return _(_);
      let _ = _.displacedBy.point,
        _ = _(_._, _._);
      return _(_, _, _.shouldAnimate);
    };
  return (_, _) => {
    if (_(_))
      return _.critical.draggable._ === _.draggableId
        ? null
        : _(_.draggableId, _.critical.draggable._, _.impact, _.afterCritical);
    if (_.phase === `DROP_ANIMATING`) {
      let _ = _.completed;
      return _.result.draggableId === _.draggableId
        ? null
        : _(_.draggableId, _.result.draggableId, _.impact, _.afterCritical);
    }
    return null;
  };
}
var _ = _(
  () => {
    let _ = _(),
      _ = _();
    return (_, _) => _(_, _) || _(_, _) || _;
  },
  {
    dropAnimationFinished: _,
  },
  null,
  {
    context: _,
    areStatePropsEqual: _,
  },
)(_);
function _(_) {
  return _(_).isUsingCloneFor === _.draggableId && !_.isClone
    ? null
    : _.createElement(_, _);
}
function _(_) {
  let _ = typeof _.isDragDisabled != `boolean` || !_.isDragDisabled,
    _ = !!_.disableInteractiveElementBlocking,
    _ = !!_.shouldRespectForcePress;
  return _.createElement(
    _,
    _({}, _, {
      isClone: !1,
      isEnabled: _,
      canDragInteractiveElements: _,
      shouldRespectForcePress: _,
    }),
  );
}
var _ = (_) => (_) => _ === _,
  _ = _(`scroll`),
  _ = _(`auto`),
  _ = (_, _) => _(_.overflowX) || _(_.overflowY),
  _ = (_) => {
    let _ = window.getComputedStyle(_),
      _ = {
        overflowX: _.overflowX,
        overflowY: _.overflowY,
      };
    return _(_, _) || _(_, _);
  },
  _ = () => !1,
  _ = (_) =>
    _ == null
      ? null
      : _ === document.body
        ? _()
          ? _
          : null
        : _ === document.documentElement
          ? null
          : _(_)
            ? _
            : _(_.parentElement),
  _ = (_) => ({
    _: _.scrollLeft,
    _: _.scrollTop,
  }),
  _ = (_) =>
    _
      ? window.getComputedStyle(_).position === `fixed` || _(_.parentElement)
      : !1,
  _ = (_) => ({
    closestScrollable: _(_),
    isFixedOnPage: _(_),
  }),
  _ = ({
    descriptor: _,
    isEnabled: _,
    isCombineEnabled: _,
    isFixedOnPage: _,
    direction: _,
    client: _,
    page: _,
    closest: _,
  }) => {
    let _ = (() => {
        if (!_) return null;
        let { scrollSize: _, client: _ } = _,
          _ = _({
            scrollHeight: _.scrollHeight,
            scrollWidth: _.scrollWidth,
            height: _.paddingBox.height,
            width: _.paddingBox.width,
          });
        return {
          pageMarginBox: _.page.marginBox,
          frameClient: _,
          scrollSize: _,
          shouldClipSubject: _.shouldClipSubject,
          scroll: {
            initial: _.scroll,
            current: _.scroll,
            max: _,
            diff: {
              value: _,
              displacement: _,
            },
          },
        };
      })(),
      _ = _ === `vertical` ? _ : _;
    return {
      descriptor: _,
      isCombineEnabled: _,
      isFixedOnPage: _,
      axis: _,
      isEnabled: _,
      client: _,
      page: _,
      frame: _,
      subject: _({
        page: _,
        withPlaceholder: null,
        axis: _,
        frame: _,
      }),
    };
  },
  _ = (_, _) => {
    let _ = _(_);
    if (!_ || _ !== _) return _;
    let _ = _.paddingBox.top - _.scrollTop,
      _ = _.paddingBox.left - _.scrollLeft,
      _ = _ + _.scrollHeight;
    return _({
      borderBox: _(
        {
          top: _,
          right: _ + _.scrollWidth,
          bottom: _,
          left: _,
        },
        _.border,
      ),
      margin: _.margin,
      border: _.border,
      padding: _.padding,
    });
  },
  _ = ({
    ref: _,
    descriptor: _,
    env: _,
    windowScroll: _,
    direction: _,
    isDropDisabled: _,
    isCombineEnabled: _,
    shouldClipSubject: _,
  }) => {
    let _ = _.closestScrollable,
      _ = _(_, _),
      _ = _(_, _),
      _ = (() => {
        if (!_) return null;
        let _ = _(_),
          _ = {
            scrollHeight: _.scrollHeight,
            scrollWidth: _.scrollWidth,
          };
        return {
          client: _,
          page: _(_, _),
          scroll: _(_),
          scrollSize: _,
          shouldClipSubject: _,
        };
      })();
    return _({
      descriptor: _,
      isEnabled: !_,
      isCombineEnabled: _,
      isFixedOnPage: _.isFixedOnPage,
      direction: _,
      client: _,
      page: _,
      closest: _,
    });
  },
  _ = {
    passive: !1,
  },
  _ = {
    passive: !0,
  },
  _ = (_) => (_.shouldPublishImmediately ? _ : _),
  _ = (_) => (_ && _.env.closestScrollable) || null;
function _(_) {
  let _ = (0, _.useRef)(null),
    _ = _(_),
    _ = _(`droppable`),
    { registry: _, marshal: _ } = _,
    _ = _(_),
    _ = _(
      () => ({
        _: _.droppableId,
        type: _.type,
        mode: _.mode,
      }),
      [_.droppableId, _.mode, _.type],
    ),
    _ = (0, _.useRef)(_),
    _ = _(
      () =>
        _((_, _) => {
          !_.current && _(!1);
          let _ = {
            _: _,
            _: _,
          };
          _.updateDroppableScroll(_._, _);
        }),
      [_._, _],
    ),
    _ = _(() => {
      let _ = _.current;
      return !_ || !_.env.closestScrollable ? _ : _(_.env.closestScrollable);
    }, []),
    _ = _(() => {
      let _ = _();
      _(_._, _._);
    }, [_, _]),
    _ = _(() => _(_), [_]),
    _ = _(() => {
      let _ = _.current,
        _ = _(_);
      if ((!(_ && _) && _(!1), _.scrollOptions.shouldPublishImmediately)) {
        _();
        return;
      }
      _();
    }, [_, _]),
    _ = _(
      (_, _) => {
        _.current && _(!1);
        let _ = _.current,
          _ = _.getDroppableRef();
        !_ && _(!1);
        let _ = _(_),
          _ = {
            ref: _,
            descriptor: _,
            env: _,
            scrollOptions: _,
          };
        _.current = _;
        let _ = _({
            ref: _,
            descriptor: _,
            env: _,
            windowScroll: _,
            direction: _.direction,
            isDropDisabled: _.isDropDisabled,
            isCombineEnabled: _.isCombineEnabled,
            shouldClipSubject: !_.ignoreContainerClipping,
          }),
          _ = _.closestScrollable;
        return (
          _ &&
            (_.setAttribute(_.contextId, _.contextId),
            _.addEventListener(`scroll`, _, _(_.scrollOptions))),
          _
        );
      },
      [_.contextId, _, _, _],
    ),
    _ = _(() => {
      let _ = _.current,
        _ = _(_);
      return !(_ && _) && _(!1), _(_);
    }, []),
    _ = _(() => {
      let _ = _.current;
      !_ && _(!1);
      let _ = _(_);
      (_.current = null),
        _ &&
          (_.cancel(),
          _.removeAttribute(_.contextId),
          _.removeEventListener(`scroll`, _, _(_.scrollOptions)));
    }, [_, _]),
    _ = _((_) => {
      let _ = _.current;
      !_ && _(!1);
      let _ = _(_);
      !_ && _(!1), (_.scrollTop += _._), (_.scrollLeft += _._);
    }, []),
    _ = _(
      () => ({
        getDimensionAndWatchScroll: _,
        getScrollWhileDragging: _,
        dragStopped: _,
        scroll: _,
      }),
      [_, _, _, _],
    ),
    _ = _(
      () => ({
        uniqueId: _,
        descriptor: _,
        callbacks: _,
      }),
      [_, _, _],
    );
  _(
    () => (
      (_.current = _.descriptor),
      _.droppable.register(_),
      () => {
        _.current && _(), _.droppable.unregister(_);
      }
    ),
    [_, _, _, _, _, _.droppable],
  ),
    _(() => {
      _.current && _.updateDroppableIsEnabled(_.current._, !_.isDropDisabled);
    }, [_.isDropDisabled, _]),
    _(() => {
      _.current &&
        _.updateDroppableIsCombineEnabled(_.current._, _.isCombineEnabled);
    }, [_.isCombineEnabled, _]);
}
function _() {}
var _ = {
    width: 0,
    height: 0,
    margin: _,
  },
  _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) =>
    _ || _ === `close`
      ? _
      : {
          height: _.client.borderBox.height,
          width: _.client.borderBox.width,
          margin: _.client.margin,
        },
  _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) => {
    let _ = _({
      isAnimatingOpenOnMount: _,
      placeholder: _,
      animate: _,
    });
    return {
      display: _.display,
      boxSizing: `border-box`,
      width: _.width,
      height: _.height,
      marginTop: _.margin.top,
      marginRight: _.margin.right,
      marginBottom: _.margin.bottom,
      marginLeft: _.margin.left,
      flexShrink: `0`,
      flexGrow: `0`,
      pointerEvents: `none`,
      transition: _ === `none` ? null : _.placeholder,
    };
  },
  _ = _.memo((_) => {
    let _ = (0, _.useRef)(null),
      _ = _(() => {
        _.current &&= (clearTimeout(_.current), null);
      }, []),
      { animate: _, onTransitionEnd: _, onClose: _, contextId: _ } = _,
      [_, _] = (0, _.useState)(_.animate === `open`);
    (0, _.useEffect)(
      () =>
        _
          ? _ === `open`
            ? _.current
              ? _
              : ((_.current = setTimeout(() => {
                  (_.current = null), _(!1);
                })),
                _)
            : (_(), _(!1), _)
          : _,
      [_, _, _],
    );
    let _ = _(
        (_) => {
          _.propertyName === `height` && (_(), _ === `close` && _());
        },
        [_, _, _],
      ),
      _ = _({
        isAnimatingOpenOnMount: _,
        animate: _.animate,
        placeholder: _.placeholder,
      });
    return _.createElement(_.placeholder.tagName, {
      style: _,
      "data-rfd-placeholder-context-id": _,
      onTransitionEnd: _,
      ref: _.innerRef,
    });
  }),
  _ = class extends _.PureComponent {
    constructor(..._) {
      super(..._),
        (this.state = {
          isVisible: !!this.props._,
          data: this.props._,
          animate: this.props.shouldAnimate && this.props._ ? `open` : `none`,
        }),
        (this.onClose = () => {
          this.state.animate === `close` &&
            this.setState({
              isVisible: !1,
            });
        });
    }
    static getDerivedStateFromProps(_, _) {
      return _.shouldAnimate
        ? _._
          ? {
              isVisible: !0,
              data: _._,
              animate: `open`,
            }
          : _.isVisible
            ? {
                isVisible: !0,
                data: _.data,
                animate: `close`,
              }
            : {
                isVisible: !1,
                animate: `close`,
                data: null,
              }
        : {
            isVisible: !!_._,
            data: _._,
            animate: `none`,
          };
    }
    render() {
      if (!this.state.isVisible) return null;
      let _ = {
        onClose: this.onClose,
        data: this.state.data,
        animate: this.state.animate,
      };
      return this.props.children(_);
    }
  },
  _ = (_) => {
    let _ = (0, _.useContext)(_);
    !_ && _(!1);
    let { contextId: _, isMovementAllowed: _ } = _,
      _ = (0, _.useRef)(null),
      _ = (0, _.useRef)(null),
      {
        children: _,
        droppableId: _,
        type: _,
        mode: _,
        direction: _,
        ignoreContainerClipping: _,
        isDropDisabled: _,
        isCombineEnabled: _,
        snapshot: _,
        useClone: _,
        updateViewportMaxScroll: _,
        getContainerForClone: _,
      } = _,
      _ = _(() => _.current, []),
      _ = _((_ = null) => {
        _.current = _;
      }, []);
    _(() => _.current, []);
    let _ = _((_ = null) => {
        _.current = _;
      }, []),
      _ = _(() => {
        _() &&
          _({
            maxScroll: _(),
          });
      }, [_, _]);
    _({
      droppableId: _,
      type: _,
      mode: _,
      direction: _,
      isDropDisabled: _,
      isCombineEnabled: _,
      ignoreContainerClipping: _,
      getDroppableRef: _,
    });
    let _ = _(
        () =>
          _.createElement(
            _,
            {
              _: _.placeholder,
              shouldAnimate: _.shouldAnimatePlaceholder,
            },
            ({ onClose: _, data: _, animate: _ }) =>
              _.createElement(_, {
                placeholder: _,
                onClose: _,
                innerRef: _,
                animate: _,
                contextId: _,
                onTransitionEnd: _,
              }),
          ),
        [_, _, _.placeholder, _.shouldAnimatePlaceholder, _],
      ),
      _ = _(
        () => ({
          innerRef: _,
          placeholder: _,
          droppableProps: {
            "data-rfd-droppable-id": _,
            "data-rfd-droppable-context-id": _,
          },
        }),
        [_, _, _, _],
      ),
      _ = _ ? _.dragging.draggableId : null,
      _ = _(
        () => ({
          droppableId: _,
          type: _,
          isUsingCloneFor: _,
        }),
        [_, _, _],
      );
    function _() {
      if (!_) return null;
      let { dragging: _, render: _ } = _,
        _ = _.createElement(
          _,
          {
            draggableId: _.draggableId,
            index: _.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (_, _) => _(_, _, _),
        );
      return _.createPortal(_, _());
    }
    return _.createElement(
      _.Provider,
      {
        value: _,
      },
      _(_, _),
      _(),
    );
  };
function _() {
  return !document.body && _(!1), document.body;
}
var _ = {
    mode: `standard`,
    type: `DEFAULT`,
    direction: `vertical`,
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: _,
  },
  _ = (_) => {
    let _ = {
        ..._,
      },
      _;
    for (_ in _)
      _[_] === void 0 &&
        (_ = {
          ..._,
          [_]: _[_],
        });
    return _;
  },
  _ = (_, _) => _ === _.droppable.type,
  _ = (_, _) => _.draggables[_.draggable._],
  _ = _(
    () => {
      let _ = {
          placeholder: null,
          shouldAnimatePlaceholder: !0,
          snapshot: {
            isDraggingOver: !1,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: !1,
          },
          useClone: null,
        },
        _ = {
          ..._,
          shouldAnimatePlaceholder: !1,
        },
        _ = _((_) => ({
          draggableId: _._,
          type: _.type,
          source: {
            index: _.index,
            droppableId: _.droppableId,
          },
        })),
        _ = _((_, _, _, _, _, _) => {
          let _ = _.descriptor._;
          if (_.descriptor.droppableId === _) {
            let _ = _
                ? {
                    render: _,
                    dragging: _(_.descriptor),
                  }
                : null,
              _ = {
                isDraggingOver: _,
                draggingOverWith: _ ? _ : null,
                draggingFromThisWith: _,
                isUsingPlaceholder: !0,
              };
            return {
              placeholder: _.placeholder,
              shouldAnimatePlaceholder: !1,
              snapshot: _,
              useClone: _,
            };
          }
          if (!_) return _;
          if (!_) return _;
          let _ = {
            isDraggingOver: _,
            draggingOverWith: _,
            draggingFromThisWith: null,
            isUsingPlaceholder: !0,
          };
          return {
            placeholder: _.placeholder,
            shouldAnimatePlaceholder: !0,
            snapshot: _,
            useClone: null,
          };
        });
      return (_, _) => {
        let _ = _(_),
          _ = _.droppableId,
          _ = _.type,
          _ = !_.isDropDisabled,
          _ = _.renderClone;
        if (_(_)) {
          let _ = _.critical;
          if (!_(_, _)) return _;
          let _ = _(_, _.dimensions),
            _ = _(_.impact) === _;
          return _(_, _, _, _, _, _);
        }
        if (_.phase === `DROP_ANIMATING`) {
          let _ = _.completed;
          if (!_(_, _.critical)) return _;
          let _ = _(_.critical, _.dimensions);
          return _(_, _, _(_.result) === _, _(_.impact) === _, _, _);
        }
        if (_.phase === `IDLE` && _.completed && !_.shouldFlush) {
          let _ = _.completed;
          if (!_(_, _.critical)) return _;
          let _ = _(_.impact) === _,
            _ = !!(_.impact._ && _.impact._.type === `COMBINE`),
            _ = _.critical.droppable._ === _;
          return _ ? (_ ? _ : _) : _ ? _ : _;
        }
        return _;
      };
    },
    {
      updateViewportMaxScroll: _,
    },
    (_, _, _) => ({
      ..._(_),
      ..._,
      ..._,
    }),
    {
      context: _,
      areStatePropsEqual: _,
    },
  )(_),
  _ = 0;
function _(_, _) {
  (0, _.useEffect)(() => {
    if (!(_ || _))
      return (
        _++,
        () => {
          --_ == 0 && _();
        }
      );
  }, [_, _]);
}
var _ = `500px`,
  _ = `S2Q8eqrNOA4-`,
  _ = `PE-3oq-yIvg-`,
  _ = `I8vuMMV-osE-`,
  _ = `_9KYdPze1X3k-`,
  _ = `TaL3HQOZ35g-`,
  _ = `dfd3ZFtoSV4-`,
  _ = `O0QXTzg3Xcw-`,
  _ = `_0UzrbG3z3ug-`,
  _ = `P-zVPa2bdmQ-`,
  _ = `S5hFnwUsp6o-`,
  _ = `eX2oOjw5sGc-`,
  _ = `BJZT09Z-vCI-`,
  _ = `dk88tU96VAI-`,
  _ = `uQ8Li0MwEhQ-`,
  _ = `TU39sK7r2pU-`,
  _ = `nqLMv8j-iBw-`,
  _ = `Q6G2tkjGQKw-`,
  _ = `_5obTMJByPr0-`,
  _ = `_6QzykeEsckc-`,
  _ = `qBP7nmof-cw-`,
  _ = `E4PXslhR-fI-`,
  _ = `lZzQoZsDjew-`,
  _ = `qcSTFE3PRqI-`,
  _ = `_9JnnSUDfcOw-`,
  _ = `ZdGB16lKY0I-`,
  _ = `U3ndjc3qoW8-`,
  _ = `l1JaahyZSt8-`,
  _ = `_7RIfZsoAbnY-`,
  _ = `lgaj8WbBqtc-`,
  _ = `VZx5flX71DI-`,
  _ = `E0AZ1CRvqNk-`,
  _ = `A-pGqULyrJo-`,
  _ = `Ndh5LdeIG9s-`;
function _(_) {
  let {
      dragHandleProps: _,
      bAllowDrag: _,
      appid: _,
      nRank: _,
      setWishlistItemPriority: _,
    } = _,
    [_, _] = _.useState(void 0),
    _ = _.useCallback((_) => {
      _(_.currentTarget.value);
    }, []),
    _ = _.useCallback(
      (_) => {
        let _ = parseInt(_.currentTarget.value);
        _ && _ != _ && _(_, _), _(void 0);
      },
      [_, _, _],
    ),
    _ = _ ?? _ ?? ``;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        ...(_ ? _ : void 0),
        children:
          _ &&
          (0, _.jsx)(`img`, {
            src: _(
              `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
            ),
            alt: ``,
          }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`input`, {
          type: `text`,
          value: _,
          onChange: _,
          onBlur: _,
        }),
      }),
    ],
  });
}
var _ = `TM-A57RBJnw-`,
  _ = `sNExYpOoTBo-`,
  _ = `_8h5ZLkHNIx8-`,
  _ = `r4XxdUG9Bg0-`,
  _ = `aiiAQfGUCCo-`,
  _ = `_9gT5wVp34eg-`,
  _ = (function (_) {
    return (
      (_[(_.k_EDiscountAdditionalInfo_None = 0)] =
        `k_EDiscountAdditionalInfo_None`),
      (_[(_.k_EDiscountAdditionalInfo_30DayText = 1)] =
        `k_EDiscountAdditionalInfo_30DayText`),
      (_[(_.k_EDiscountAdditionalInfo_PriceHistoryTable = 2)] =
        `k_EDiscountAdditionalInfo_PriceHistoryTable`),
      _
    );
  })({});
function _(_) {
  let _ = _?.discount_pct ?? 0;
  return _?.hide_discount_pct_for_compliance && _ > 0
    ? 2
    : +(_ > 0 && _.country_code?.toUpperCase() === `PL`);
}
function _(_) {
  let { purchaseOption: _ } = _,
    _ = _(_);
  return _ === 1
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _(`#Price_History_Lowest_Previous_30`),
      })
    : _ === 2
      ? (0, _.jsx)(_, {
          purchaseOption: _,
        })
      : null;
}
function _(_) {
  let {
      lowest_recent_price_in_cents: _,
      formatted_original_price: _,
      formatted_final_price: _,
      final_price_in_cents: _,
    } = _.purchaseOption,
    _ = Number(_);
  if (isNaN(_)) return null;
  let _ = _(_, _(_.country_code)),
    _ =
      _ === Number(_)
        ? _(`#Price_History_Current_Low_Price_Ttip`, 30)
        : _(`#Price_History_Recent_Low_Price_Ttip`, _, 30);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Price_History_Normal_Price`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`span`, {
                children: _(`#Price_History_Recent_Low_Price`),
              }),
              (0, _.jsx)(_, {
                toolTipContent: _,
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Price_History_Current_Price`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM18 29C17.4067 29 16.8266 28.8241 16.3333 28.4944C15.8399 28.1648 15.4554 27.6962 15.2284 27.1481C15.0013 26.5999 14.9419 25.9967 15.0577 25.4147C15.1734 24.8328 15.4591 24.2982 15.8787 23.8787C16.2982 23.4591 16.8328 23.1734 17.4147 23.0576C17.9967 22.9419 18.5999 23.0013 19.1481 23.2284C19.6962 23.4554 20.1648 23.8399 20.4944 24.3333C20.8241 24.8266 21 25.4067 21 26C21 26.7956 20.6839 27.5587 20.1213 28.1213C19.5587 28.6839 18.7957 29 18 29ZM21.08 18.15C20.8072 18.2992 20.5779 18.517 20.4149 18.7817C20.2518 19.0465 20.1605 19.3492 20.15 19.66V21H15.85V19.66C15.8546 18.6058 16.1336 17.571 16.6597 16.6575C17.1857 15.744 17.9406 14.9832 18.85 14.45C19.159 14.2565 19.3975 13.9689 19.5306 13.6294C19.6636 13.29 19.6839 12.9169 19.5887 12.565C19.4934 12.2131 19.2876 11.9012 19.0015 11.6752C18.7155 11.4492 18.3644 11.3212 18 11.31C17.7781 11.31 17.5583 11.3537 17.3533 11.4386C17.1482 11.5236 16.9619 11.6481 16.805 11.805C16.6481 11.9619 16.5236 12.1482 16.4387 12.3533C16.3537 12.5583 16.31 12.7781 16.31 13H12C12.0002 11.9508 12.2755 10.9199 12.7984 10.0103C13.3214 9.10064 14.0738 8.34406 14.9805 7.81602C15.8872 7.28799 16.9165 7.00695 17.9657 7.00096C19.015 6.99497 20.0474 7.26423 20.9601 7.78188C21.8728 8.29953 22.6337 9.04747 23.1671 9.95106C23.7004 10.8547 23.9875 11.8823 23.9996 12.9315C24.0117 13.9807 23.7485 15.0147 23.2362 15.9304C22.7239 16.8461 21.9805 17.6114 21.08 18.15Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(_);
  return _
    ? _ === _.k_EDiscountAdditionalInfo_None
      ? _?.type !== 10
      : !_ && !_
    : !1;
}
function _(_) {
  let { itemid: _ } = _,
    { bIsOwned: _, unAppID: _ } = _(_);
  return _.logged_in
    ? _
      ? (0, _.jsx)(_, {
          appid: _,
        })
      : (0, _.jsx)(_, {
          itemid: _,
        })
    : (0, _.jsx)(_, {
        strToolTip: _.Localize(`#SignInToAddToLibrary_Tooltip`),
      });
}
function _(_) {
  let { mutate: _ } = _(_.itemid);
  return (0, _.jsx)(_, {
    onClick: () => _(),
    children: _.Localize(`#AddToLibraryButton`),
  });
}
var _ = _.lazy(() =>
  _(
    () => import(`./ChhdoaYR2.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    import.meta.url,
  ),
);
function _(_) {
  let { purchaseOption: _, nAccountIDGiftee: _ } = _;
  if (!_) return null;
  if (_.is_free_to_keep)
    return (0, _.jsx)(_, {
      itemid: {
        packageid: _.packageid,
      },
    });
  if (_.packageid)
    return (0, _.jsx)(_, {
      packageid: _.packageid,
      nAccountIDGiftee: _,
    });
  if (_.bundleid)
    return (0, _.jsx)(_, {
      bundleid: _.bundleid,
      nAccountIDGiftee: _,
    });
  throw `Purchase option does not have package or bundle associated`;
}
var _ = _.memo(function (_) {
    return _(_.packageid, void 0, _.nAccountIDGiftee);
  }),
  _ = _.memo(function (_) {
    return _(void 0, _.bundleid, _.nAccountIDGiftee);
  });
function _(_, _, _) {
  let { data: _ } = _(),
    [_, _] = _.useState(void 0),
    _ = _.useMemo(() => _(_, _, _), [_, _, _]),
    { mutate: _ } = _(_, _, _ || !!_, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_.Suspense, {
          children: (0, _.jsx)(_, {
            lineItemIDs: _,
            closeCart: () => _(void 0),
          }),
        }),
      _
        ? (0, _.jsx)(_, {})
        : (0, _.jsx)(_, {
            bIsGift: !!_,
            addToCart: () => {
              _(void 0, {
                onSuccess: (_) => _(_),
              });
            },
          }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    href: `${_.STORE_BASE_URL}cart/`,
    children: _.Localize(`#AddToCartButton_InCart`),
  });
}
function _(_) {
  let { addToCart: _, bIsGift: _ } = _;
  return (0, _.jsx)(_, {
    onClick: _,
    children: _
      ? _.Localize(`#AddToCartButton_PurchaseAsGift`)
      : _.Localize(`#AddToCartButton_AddToCart`),
  });
}
var _ = `giftee-hint-2`;
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      _
        ? await _.StoreObject(_, {
            ..._,
            rtCreated: Date.now() / 1e3,
          })
        : await _.RemoveObject(_);
    },
    onMutate: async (_) => {
      await _.cancelQueries({
        queryKey: [_],
      }),
        (_ &&= {
          ..._,
          rtCreated: Date.now() / 1e3,
        }),
        _.setQueryData([_], _);
    },
  });
}
function _(_) {
  let { appid: _, item: _ } = _,
    _ = _?.name;
  return (
    !_ &&
      _ &&
      !_.visible &&
      (_ = _.Localize(`#wishlist_item_unavailable_title`)),
    (0, _.jsx)(_, {
      item: _,
      appid: _,
      className: _,
      children: _ || `\xA0`,
    })
  );
}
function _(_) {
  let { appid: _, bHasGamepadFocus: _ } = _,
    { data: _ } = _({
      appid: _,
    });
  return (
    _({
      appid: _,
    }),
    (0, _.jsx)(_, {
      item: _,
      appid: _,
      className: _,
      children: (0, _.jsx)(_, {
        item: _,
        appid: _,
        bHasGamepadFocus: _,
      }),
    })
  );
}
function _(_) {
  let { appid: _, item: _, bHasGamepadFocus: _ } = _,
    { data: _ } = _(),
    _ = _(_, _),
    _ = _?.preferences?.disable_microtrailers;
  _ ||= _;
  let [_, _] = _(),
    [_, _] = _.useState(!1);
  return (
    _.useEffect(() => {
      if (_) {
        let _ = window.setTimeout(() => _(!0), 1e3);
        return () => window.clearTimeout(_);
      } else _(!!_);
    }, [_, _]),
    (0, _.jsxs)(`div`, {
      className: _,
      ..._,
      children: [
        !_ &&
          (0, _.jsx)(`div`, {
            className: _ ? `Ou4kcoIYcqs-` : void 0,
            children: (0, _.jsx)(_, {
              _: {
                appid: _,
              },
              active: _,
              bIsHoverMode: !0,
              eGrowOnActivate: _
                ? _.k_ETrailerGrowAmount_Implicit
                : _.k_ETrailerGrowAmount_Medium,
            }),
          }),
        (0, _.jsx)(_, {
          appid: _,
          item: _,
        }),
      ],
    })
  );
}
function _(_) {
  let { appid: _, item: _ } = _,
    { data: _ } = _({
      appid: _,
    }),
    _ = _(_, _);
  if (!_?.header) return (0, _.jsx)(`div`, {});
  let _ = _.header && _?.asset_url_format?.replace("${FILENAME}", _.header);
  return _
    ? (0, _.jsx)(_.Fragment, {
        children: (0, _.jsx)(`img`, {
          className: _,
          src: `${_.STORE_ITEM_BASE_URL}${_}`,
          alt: ``,
          role: `presentation`,
          loading: `lazy`,
        }),
      })
    : (0, _.jsx)(_.Fragment, {
        children: (0, _.jsx)(`img`, {
          className: _,
          src: `${_.STORE_ITEM_BASE_URL}${_}`,
          alt: ``,
          role: `presentation`,
          loading: `lazy`,
        }),
      });
}
function _(_) {
  let _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    { data: _ } = _(_),
    _ = _.useCallback(() => {
      if (_) return;
      let _ = new _(_);
      _.mutate({
        nGifteeAccountID: _.GetAccountID(),
        rgAvatarDigest: _?.public_data?.sha_digest_avatar
          ? Array.from(_.public_data.sha_digest_avatar)
          : void 0,
        strPersonaName: _?.public_data?.persona_name,
      });
    }, [_, _, _, _]),
    _ = _.useCallback(
      (_) => {
        (_.button === 1 || _.button === 2) && _();
      },
      [_],
    );
  if (_.item) _ = `${_.STORE_BASE_URL}${_.item.store_url_path}`;
  else if (_.appid) _ = `${_.STORE_BASE_URL}app/${_.appid}/`;
  else
    return (0, _.jsx)(`span`, {
      className: _.className,
      children: _.children,
    });
  return (0, _.jsx)(_, {
    ref: _,
    snr: !0,
    _: _,
    className: _.className,
    onClick: _,
    onMouseDown: _,
    children: _.children,
  });
}
var _ = `_0uIJq8Pia8Q-`,
  _ = `hbW8A859huY-`,
  _ = `ffvyer-fyXc-`,
  _ = `ojEsJSejN5U-`;
function _(_) {
  let { reviewScore: _ } = _,
    _ = _(_),
    _ = _.summary_language_specific ?? _.summary_filtered,
    _;
  if (_?.review_count)
    if (_.summary_language_specific) {
      let _ = _.Localize(`#Language_${_.LANGUAGE}`);
      _ = _.Localize(
        `#review_summary_reviewrate_language_specific`,
        _.percent_positive,
        _.review_count.toLocaleString(_()),
        _,
      );
    } else
      _ = _.Localize(
        `#review_summary_reviewrate`,
        _.percent_positive,
        _.review_count.toLocaleString(_()),
      );
  return (0, _.jsx)(`span`, {
    className: _,
    title: _,
    children: _?.review_score_label,
  });
}
function _(_) {
  let _;
  if (_ && _.summary_filtered)
    switch ((_.summary_language_specific ?? _.summary_filtered).review_score) {
      case 9:
      case 8:
      case 7:
      case 6:
        _ = _;
        break;
      case 5:
        _ = _;
        break;
      case 4:
      case 3:
      case 2:
      case 1:
        _ = _;
        break;
    }
  return (0, _.default)(_, _);
}
function _(_) {
  let { appid: _ } = _,
    { data: _ } = _({
      appid: _,
    }),
    _ = !_?.is_coming_soon;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        appid: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          appid: _,
        }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    gap: `1`,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: `\xA0`,
      }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    { data: _ } = _({
      appid: _,
    }),
    _ = _();
  if (!_ || !_.summary_filtered) return (0, _.jsx)(_, {});
  let _ = null;
  if (
    (_.data?.preferences?.review_score_preference == 0 ||
      _.data?.preferences?.review_score_preference == 2) &&
    _.summary_language_specific
  ) {
    let _ = _.Localize(`#Language_${_.LANGUAGE}`);
    _ = _.Localize(`#wishlist_item_languagespecific_reviews`, _);
  } else _ = _.Localize(`#wishlist_item_overallreviews`);
  return (0, _.jsxs)(_, {
    gap: `1`,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          reviewScore: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    { data: _ } = _({
      appid: _,
    }),
    _ = _(_);
  return !_ || !_
    ? (0, _.jsx)(_, {})
    : (0, _.jsxs)(_, {
        gap: `1`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#wishlist_item_releasedate`),
          }),
          (0, _.jsx)(`div`, {
            className: (0, _.default)(_, _),
            children: _,
          }),
        ],
      });
}
var _ = `u-paMv-Fe0U-`,
  _ = `O7UR3Sc3EmM-`,
  _ = `kkZ9PsIE60o-`,
  _ = `cJcSgG1IDNY-`;
function _(_) {
  let { wishlistItem: _ } = _,
    { data: _ } = _(_),
    [_] = _(),
    _ = _() || _.rgDeckFilters.length > 0,
    _ = _?.related_items?.demos?._(0);
  return !_ && !_?.is_early_access && !_
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(_, {
              wishlistItem: _,
            }),
          _?.is_early_access && (0, _.jsx)(_, {}),
          !!_ && (0, _.jsx)(_, {}),
        ],
      });
}
function _() {
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize(`#wishlist_controls_early_access_tooltip`),
    usePointerEvents: !0,
    children: (0, _.jsx)(`span`, {
      className: _,
      children: _.Localize(`#genre_early_access`),
    }),
  });
}
function _(_) {
  let [_, _] = _();
  return _()
    ? (0, _.jsx)(`span`, {
        className: _,
        children: _.Localize(`#wishlist_controls_demo_available`),
      })
    : (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#wishlist_controls_demo_available_tooltip`),
        usePointerEvents: !0,
        children: (0, _.jsx)(_, {
          className: (0, _.default)(_, _),
          onClick: () => {
            _((_) => ({
              ..._,
              bOnlyItemsWithDemos: !_.bOnlyItemsWithDemos,
            }));
          },
          children: _.Localize(`#wishlist_controls_demo_available`),
        }),
      });
}
function _(_) {
  let { wishlistItem: _ } = _;
  return (0, _.jsx)(_, {
    _: _,
    eHWCompat: _(),
  });
}
function _(_) {
  let { wishlistItem: _ } = _,
    _ = _(),
    { data: _ } = _({
      appid: _.appid,
    }),
    { data: _ } = _(_),
    _ = _ && _?.is_early_access ? 4 : 5,
    [_, _, _] = _(),
    _ = _ ? [] : _.rgTagFilters,
    _ = new Set(_),
    _ = _.concat(_?.map((_) => _.tagid).filter((_) => !_.has(_)) ?? []).slice(
      0,
      _,
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _.Localize(`#wishlist_controls_tags_header`),
      }),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            tagID: _,
          },
          _,
        ),
      ),
    ],
  });
}
function _(_) {
  let { tagID: _ } = _,
    [_, _] = _(),
    _ = _(),
    _ = _.rgTagFilters.includes(_),
    _ = _.useCallback(
      () =>
        _((_) => {
          let { rgTagFilters: _ } = _,
            _ = _ ? _.filter((_) => _ != _) : _.concat(_);
          return {
            ..._,
            rgTagFilters: _,
          };
        }),
      [_, _, _],
    ),
    _ = _(_, _().strLanguage);
  return _
    ? (0, _.jsx)(`button`, {
        className: (0, _.default)(_, _ && `-bFWpSZUw-0-`, _),
        children: _,
      })
    : (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#wishlist_controls_tag_description`),
        strTooltipClassname: _,
        usePointerEvents: !0,
        children: (0, _.jsx)(`button`, {
          className: (0, _.default)(_, _ && `-bFWpSZUw-0-`),
          onClick: _,
          children: _,
        }),
      });
}
var _ = parseInt(_),
  _ = _.memo(function (_) {
    let {
        wishlistItem: _,
        draggableProvided: _,
        isDragging: _,
        dragHandle: _,
        ..._
      } = _,
      [_, _] = _.useState(!1),
      [_, _] = _.useState(!1),
      { data: _ } = _({
        appid: _.appid,
      }),
      _ = _(),
      _ = _(),
      [_] = _(),
      { mutate: _ } = _(_, _.appid),
      _ = _(),
      [_, _] = _.useState(!!_?.viewportWidth && _.viewportWidth.value <= _),
      _ = _(() => _(window.innerWidth <= _));
    return (0, _.jsxs)(_, {
      appid: _.appid,
      item: _,
      draggableProvided: _,
      isDragging: _,
      removeItem: _,
      showManageCategories: () => _(!0),
      onFocusWithin: (_) => _(_),
      ref: _,
      ..._,
      children: [
        _,
        (0, _.jsx)(_, {
          appid: _.appid,
          bHasGamepadFocus: _ && _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            appid: _.appid,
            item: _,
          }),
        }),
        (0, _.jsx)(_, {
          wishlistItem: _,
          showManageCategories: () => _(!0),
        }),
        (0, _.jsx)(_, {
          wishlistItem: _,
          item: _,
          narrowLayout: _,
        }),
        !_ &&
          (0, _.jsx)(_, {
            wishlistItem: _,
            removeItem: _,
          }),
        _ &&
          (0, _.jsx)(_, {
            appid: _.appid,
            steamid: _,
            onClose: () => _(!1),
            filteredCategoryIDs: _,
          }),
      ],
    });
  });
function _(_) {
  let {
      appid: _,
      item: _,
      draggableProvided: _,
      isDragging: _,
      removeItem: _,
      showManageCategories: _,
      onFocusWithin: _,
      ref: _,
      children: _,
      ..._
    } = _,
    _ = _(),
    _ = (0, _.default)(
      _,
      _ && !_.visible && `_59yvzd7T13A-`,
      _ && `I81GCdWS-oQ-`,
      _ && `-SAg8UMCWZ4-`,
    ),
    _ = _(_, _, _),
    _ = _(_, _, _),
    _ = _?.draggableProps.style,
    _ =
      _ && _.bIsGamepadDragClone && _
        ? {
            ..._,
            transform: (_.transform ?? ``) + ` scale( 1.04 )`,
          }
        : _,
    _ = _(_, _?.innerRef);
  return (0, _.jsx)(_, {
    feature: `wishlist-capsule`,
    children: (0, _.jsx)(_, {
      appID: _,
      children: (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _ && `-SAg8UMCWZ4-`),
        ref: _,
        ..._?.draggableProps,
        style: _,
        children: (0, _.jsx)(_, {
          className: _,
          ...(!_ && _),
          focusable: !0,
          ..._,
          onFocusWithin: _,
          children: _,
        }),
      }),
    }),
  });
}
function _(_, _, _) {
  _(
    (0, _.jsx)(_, {
      rgOptions: _.map((_) => {
        let _ = ``;
        switch (_) {
          case 3:
            _ = _(`#AddToCartButton_AddToCart`);
            break;
          case 4:
            _ = _.Localize(`#cart_view_cart`);
            break;
          case 1:
            _ = _(`#Wishlist_Controls_Categories_Manage`);
            break;
          case 2:
            _ = _.Localize(`#wishlist_gamepad_options_remove`);
            break;
        }
        return {
          data: _,
          label: _,
        };
      }),
      onValueSelected: _,
    }),
    _,
  );
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    { data: _ } = _(
      _?.appid
        ? {
            appid: _.appid,
          }
        : void 0,
    ),
    _ = _(_, _),
    { mutate: _ } = _(_?.packageid, _?.bundleid),
    { data: _ } = _(),
    _ = _.useMemo(() => _(_, _?.packageid, _?.bundleid), [_, _]),
    _ = _.useCallback(
      (_) => {
        let _ = [];
        _ && _.push(_ ? 4 : 3),
          _.push(1, 2),
          _(_, _, (_, { data: _ }) => {
            switch (_) {
              case 2:
                _();
                break;
              case 1:
                _();
                break;
              case 3:
                _();
                break;
              case 4:
                window.navigation.navigate(`${_.STORE_BASE_URL}cart/`);
                break;
              default:
                return;
            }
            _?.stopPropagation(), _?.preventDefault();
          });
      },
      [_, _, _, _, _],
    ),
    _ = _(_),
    _ = {
      onOKActionDescription: _.Localize(`#wishlist_gamepad_visitstore`),
      onOKButton: () => {
        _ && window.navigation.navigate(_);
      },
    };
  return (
    _ &&
      !_ &&
      ((_.onOptionsActionDescription = _.Localize(`#wishlist_gamepad_options`)),
      (_.onOptionsButton = _)),
    _
  );
}
function _(_, _, _) {
  let { draggableId: _, gamepadStartDrag: _, navRefDraggable: _ } = _,
    _ = _.useCallback((_) => _(_, _, _), [_, _, _]),
    _ = _.useCallback((_) => _(_, _), [_, _]);
  return _ || !_ || !_ || !_
    ? {}
    : {
        onSecondaryButton: _,
        navRef: _,
        onSecondaryActionDescription: _.Localize(
          `#wishlist_gamepaddragdrop_reorderaction`,
        ),
      };
}
function _(_) {
  let { wishlistItem: _, item: _, narrowLayout: _ } = _,
    _ = _(_.appid, _),
    _ = _();
  if (_ && !_.visible) {
    let _ = _.Localize(`#wishlist_item_unavailable_retired`);
    return (
      _.unvailable_for_country_restriction &&
        (_ = _.Localize(`#wishlist_item_unavailable_region`)),
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_),
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      })
    );
  } else if (_) {
    let _ = _.Localize(`#mature_content_requires_creditcard`);
    return (
      _.country_code === `GB` &&
        (_ = _.Localize(`#mature_content_requires_creditcard_gb`)),
      (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            className: (0, _.default)(_, _),
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      })
    );
  } else if (_ || _)
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              wishlistItem: _,
            }),
            (0, _.jsx)(_, {
              wishlistItem: _,
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            appid: _.appid,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            wishlistItem: _,
            item: _,
          }),
        }),
      ],
    });
  else
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              appid: _.appid,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  wishlistItem: _,
                }),
                (0, _.jsx)(_, {
                  wishlistItem: _,
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            wishlistItem: _,
            item: _,
          }),
        }),
      ],
    });
}
function _(_) {
  let { wishlistItem: _, showManageCategories: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_),
    children: (0, _.jsx)(_, {
      wishlistItem: _,
      showManageCategories: _,
    }),
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_.Fragment, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`a`, {
          href: `${_.STORE_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=wishlist`,
          children: _.Localize(`#wishlist_item_add_credit_card`),
        }),
      }),
    }),
  });
}
function _(_) {
  let { wishlistItem: _, item: _ } = _,
    { data: _ } = _({
      appid: _.appid,
    }),
    _ = _(),
    _ = _(_, _) && !_;
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `uIGyst1O6lA-`,
              children: (0, _.jsx)(_, {
                purchaseOption: _,
              }),
            }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                item: _,
                className: _,
                children: (0, _.jsx)(_, {
                  purchaseOption: _,
                  transparentBackground: !0,
                }),
              }),
              _ &&
                (0, _.jsx)(_, {
                  purchaseOption: _,
                }),
            ],
          }),
        ],
      })
    : _?.is_free && !_.is_coming_soon && !_
      ? (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            itemid: {
              appid: _.appid,
            },
          }),
        })
      : null;
}
function _(_) {
  let { purchaseOption: _ } = _,
    _ = _(_) !== _.k_EDiscountAdditionalInfo_None,
    _ = _(),
    _ = new _(_() ?? `0`).GetAccountID(),
    _ = !_ && _ > 0 && _.user_can_purchase_as_gift;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _ && `ElNIDI9n0XE-`),
    children: (0, _.jsx)(_, {
      purchaseOption: _,
      nAccountIDGiftee: _ ? _ : void 0,
    }),
  });
}
function _(_) {
  let { wishlistItem: _, removeItem: _ } = _,
    _ = _(),
    _ = _.useMemo(
      () => new Date(_.date_added * 1e3).toLocaleDateString(_()),
      [_.date_added],
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#wishlist_item_addedon_date`, _),
      }),
      _ &&
        (0, _.jsx)(_, {
          toolTipContent: _.Localize(`#wishlist_item_remove_tooltip`),
          usePointerEvents: !0,
          children: (0, _.jsxs)(_, {
            className: `p0Gsr94HawQ-`,
            onClick: _,
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)(`span`, {
                className: `MqFcMoKfvAw-`,
                children: _.Localize(`#wishlist_item_remove`),
              }),
            ],
          }),
        }),
    ],
  });
}
var _ = `awGgT3ZKumU-`,
  _ = `PLkUpk974nY-`,
  _ = `ZWQjvnaQOxI-`,
  _ = `KFyvA5BJClc-`,
  _ = `n5zwruAY98Q-`,
  _ = `uTozs1Q00-o-`,
  _ = `CG4558xZCQs-`,
  _ = `_2-YM-46PeKY-`,
  _ = `Eed0wvMRyic-`,
  _ = `KBMt-hRZsLo-`;
function _(_) {
  let { wishlist: _, loading: _, bEnableReordering: _ } = _,
    [_, _] = _.useState(!1);
  _(_),
    _.useEffect(() => {
      _ || _(!0);
    }, [_]);
  let _ = _.useCallback(
    (_) =>
      (0, _.jsx)(_, {
        wishlistItem: _.items[_],
      }),
    [_],
  );
  return _
    ? (0, _.jsx)(_, {
        loading: _,
        wishlist: _,
      })
    : (0, _.jsx)(_, {
        loading: _,
        nRows: _.items.length || 0,
        fnRender: _,
      });
}
function _(_) {
  let { loading: _, nRows: _, fnRender: _, bDragging: _, ref: _, ..._ } = _,
    _ = _(),
    _ = _ ? 30 : 10,
    [_, _] = _.useState(174),
    _ = _(
      _((_) => {
        let _ = window.getComputedStyle(_.target);
        _(
          parseInt(_.getPropertyValue(`--item-height`)) +
            parseInt(_.getPropertyValue(`--item-gap`)),
        );
      }),
      _,
    ),
    _ = _.useRef(void 0),
    _ = _.useCallback((_) => {
      _.current && clearTimeout(_.current),
        (_.current = setTimeout(() => {
          _((_) => ({
            ..._,
            scrollY: _ || 0,
          }));
        }, 100));
    }, []);
  return (0, _.jsx)(_, {
    navKey: `VirtualizedWishlistInner`,
    className: (0, _.default)(
      _,
      _ && `_1ihIbWlnK8c-`,
      _ && `pcLljC6uYLs-`,
      _ && `YCdP1u-0174-`,
    ),
    nRows: _,
    nItemHeight: _,
    nRowGap: 0,
    overscan: _,
    renderItem: _,
    ref: _,
    forceVirtualizeType: `element`,
    onOffsetChange: _,
    initialOffset: _()?.scrollY,
    bDynamic: !0,
    measureElement: (_, _) =>
      _?.contentRect.height ?? _.getBoundingClientRect().height,
    ..._,
  });
}
function _(_) {
  let { loading: _ } = _,
    {
      moveWishlistItem: _,
      setWishlistItemPriority: _,
      getWishlistItemRank: _,
      wishlist: _,
    } = _(!_, _.wishlist),
    _ = _(),
    _ = _() == `order`,
    {
      useGamepadSensor: _,
      gamepadStartDrag: _,
      onButtonDown: _,
      refCloneContainer: _,
      navRefDraggable: _,
      fnEndGamepadDrag: _,
      bInGamepadDrag: _,
    } = _(),
    _ = _.useCallback(
      (_) => {
        _(), _.destination && _(_.source.index, _.destination.index);
      },
      [_, _],
    ),
    _ = _.useCallback(
      (_, _, _, _ = !1) => {
        let _ = _.items[_.source.index],
          _ = (0, _.jsx)(_, {
            dragHandleProps: _.dragHandleProps,
            bAllowDrag: _,
            appid: _.appid,
            nRank: _(_),
            setWishlistItemPriority: _,
          }),
          _ = _
            ? {
                draggableId: _.draggableId,
                gamepadStartDrag: _,
                navRefDraggable: _,
                bIsGamepadDragClone: _,
              }
            : {};
        return (0, _.jsx)(_, {
          wishlistItem: _,
          draggableProvided: _,
          isDragging: _.isDragging,
          dragHandle: _,
          ..._,
        });
      },
      [_, _, _, _, _, _],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = _.items[_];
        return (0, _.jsx)(
          `div`,
          {
            className: (0, _.default)(_, _ && `-SAg8UMCWZ4-`),
            children: (0, _.jsx)(_, {
              draggableId: `WishlistItem-${_.appid}-${_}`,
              index: _,
              isDragDisabled: !_,
              children: _,
            }),
          },
          _.appid,
        );
      },
      [_, _, _, _],
    ),
    _ = _.useCallback(
      (_, _, _) => {
        let _ = _.items[_.source.index];
        return (0, _.jsx)(
          _,
          {
            onButtonDown: _,
            navRef: _,
            children: _(_, _, _, !0),
          },
          _.appid,
        );
      },
      [_, _, _, _],
    );
  return (0, _.jsx)(_, {
    onDragEnd: _,
    sensors: [_],
    children: (0, _.jsx)(_, {
      droppableId: `droppable`,
      renderClone: _ ? _ : _,
      mode: `virtual`,
      children: (_, _) =>
        (0, _.jsx)(_, {
          onButtonDown: _,
          bDragging: !!_.draggingFromThisWith,
          loading: _,
          fnRender: _,
          nRows: _.items.length || 0,
          ..._.droppableProps,
          ref: _.innerRef,
        }),
    }),
  });
}
function _(_, _) {
  let _ = _(),
    _ = _() == `order`,
    { data: _ } = _(_.steamid),
    _ = _.useMemo(() => _?.items.slice().sort(_) ?? [], [_]),
    [_, _] = _.useState(void 0),
    _ = _.useMemo(
      () =>
        _
          ? {
              ..._,
              items: _.rgDisplayedItems,
            }
          : _,
      [_, _],
    ),
    _ = _?.rgRankOrderedItems ?? _,
    _ = _.useMemo(() => new Map(_.map((_, _) => [_.appid, _ + 1])), [_]),
    _ = _.useCallback((_) => _.get(_.appid) ?? (_.priority || void 0), [_]),
    { mutate: _ } = _({
      async mutationFn(_) {
        let _ = await _(`/wishlist/action`, `Reorder`, _);
        if (_?.result != 1) throw `Error updating wishlist data: ${_?.result}`;
        return !0;
      },
      async onMutate(_) {
        await _.cancelQueries({
          queryKey: [`WishlistSortedFiltered`, _.steamid],
          exact: !1,
        }),
          _(_, _.steamid, _);
      },
      onError() {
        _(_, _.steamid);
      },
    }),
    _ = _.useCallback(
      (_, _) => {
        if (!_) {
          console.error(`Cannot modify wishlist in this mode`);
          return;
        }
        if (!_ || _.length < 1 || _ == _) return;
        let { rgNewItems: _, rgUpdates: _ } = _(_, _, _);
        _.length != 0 &&
          (_({
            rgDisplayedItems: _(_.items, _, _),
            rgRankOrderedItems: _,
          }),
          _(_, {
            onSettled: () => _(void 0),
          }));
      },
      [_, _, _, _, _],
    );
  return {
    moveWishlistItem: _.useCallback(
      (_, _) => {
        if (_ == _ || !_) return;
        let _ = _(_, _.items, _, _);
        _ && _(_.iSourceIndex, _.iTargetIndex);
      },
      [_, _, _],
    ),
    setWishlistItemPriority: _.useCallback(
      (_, _) => {
        if (!_) return;
        let _ = _.findIndex((_) => _.appid == _);
        _ < 0 || _(_, Math.min(Math.max(_ - 1, 0), _.length - 1));
      },
      [_, _],
    ),
    getWishlistItemRank: _,
    wishlist: _,
  };
}
function _(_) {
  let { onButtonDown: _, navRef: _, children: _ } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      autoFocus: !0,
      onButtonDown: _,
      navRef: _,
      onOKActionDescription: _.Localize(
        `#wishlist_gamepaddragdrop_commitreorder`,
      ),
      onCancelActionDescription: _.Localize(
        `#wishlist_gamepaddragdrop_cancelreorder`,
      ),
      children: _,
    }),
  });
}
function _() {
  let [_, _] = _.useState(void 0),
    [_] = _.useState(() => new Map()),
    _ = _.useRef(null),
    _ = _.useRef(void 0),
    _ = _.useCallback((_) => (_.current = _), []),
    _ = _.useRef(void 0),
    _ = _.useCallback(() => {
      let _ = _.current;
      _ !== void 0 &&
        (setTimeout(() => _.get(_)?.TakeFocus(), 1), (_.current = void 0)),
        _(void 0);
    }, [_]),
    _ = _.useCallback(
      (_, _) => {
        _ ? _.set(_, _) : _.delete(_);
      },
      [_],
    );
  return {
    useGamepadSensor: _,
    gamepadStartDrag: _.useCallback((_, _, _) => {
      let _ = _.current;
      if (_) {
        let _ = _.tryGetLock(_);
        if (_) return (_.current = _), _(_.snapLift()), !0;
      }
      return !1;
    }, []),
    onButtonDown: _.useCallback(
      (_) => {
        if (!(!_ || !_.isActive())) {
          switch (_.detail.button) {
            case _.DIR_UP:
              _.moveUp(), _.stopPropagation();
              break;
            case _.DIR_RIGHT:
              _.moveRight(), _.stopPropagation();
              break;
            case _.DIR_DOWN:
              _.moveDown(), _.stopPropagation();
              break;
            case _.DIR_LEFT:
              _.moveLeft(), _.stopPropagation();
              break;
            case _.CANCEL:
              _.cancel(), _.stopPropagation();
              break;
            case _._:
            case _.SECONDARY:
              _.drop(), _.stopPropagation();
              break;
          }
          _.current?.Node().ForceMeasureFocusRing();
        }
      },
      [_],
    ),
    refCloneContainer: _,
    navRefDraggable: _,
    fnEndGamepadDrag: _,
    bInGamepadDrag: !!_,
  };
}
var _ = `X3eWtXr50WY-`,
  _ = `mV3U0inG54s-`,
  _ = `j9SKK7dgx4M-`,
  _ = `_8Tzzv-7q65o-`,
  _ = `v-p-t-JqNg0-`;
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M33.63 8.05005L30.11 20.81C29.9416 21.453 29.5645 22.0219 29.0378 22.4273C28.5111 22.8328 27.8647 23.0518 27.2 23.05H14.75C14.1022 23.0507 13.4715 22.8416 12.9524 22.4541C12.4333 22.0665 12.0536 21.5213 11.87 20.9L7.56 8.05005H2V4.05005H8.28C8.90845 4.05122 9.52067 4.24973 10.0302 4.61755C10.5398 4.98538 10.921 5.50394 11.12 6.10005L11.78 8.10005L33.63 8.05005ZM15 27.05C14.5055 27.05 14.0222 27.1967 13.6111 27.4714C13.2 27.7461 12.8795 28.1365 12.6903 28.5933C12.5011 29.0502 12.4516 29.5528 12.548 30.0378C12.6445 30.5227 12.8826 30.9682 13.2322 31.3178C13.5819 31.6674 14.0273 31.9056 14.5123 32.002C14.9972 32.0985 15.4999 32.049 15.9567 31.8597C16.4135 31.6705 16.804 31.3501 17.0787 30.939C17.3534 30.5278 17.5 30.0445 17.5 29.55C17.5 28.887 17.2366 28.2511 16.7678 27.7823C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1967 25.6111 27.4714C25.2 27.7461 24.8795 28.1365 24.6903 28.5933C24.5011 29.0502 24.4516 29.5528 24.548 30.0378C24.6445 30.5227 24.8826 30.9682 25.2322 31.3178C25.5819 31.6674 26.0273 31.9056 26.5123 32.002C26.9972 32.0985 27.4999 32.049 27.9567 31.8597C28.4135 31.6705 28.804 31.3501 29.0787 30.939C29.3534 30.5278 29.5 30.0445 29.5 29.55C29.5 28.887 29.2366 28.2511 28.7678 27.7823C28.2989 27.3134 27.663 27.05 27 27.05Z`,
      fill: `currentColor`,
    }),
  });
}
function _() {
  let { data: _ } = _();
  return _
    ? (0, _.jsxs)(_, {
        snr: !0,
        external: !0,
        _: _.STORE_BASE_URL + `cart`,
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(_, {
            className: _,
          }),
          _.Localize(`#cart_count`, _(_)),
        ],
      })
    : null;
}
function _() {
  let { data: _ } = _(_.steamid);
  return _
    ? (0, _.jsx)(_, {
        snr: !0,
        external: !0,
        _: _.STORE_BASE_URL + `wishlist`,
        className: (0, _.default)(_, _),
        children: _.Localize(`#wishlist_count`, _(_)),
      })
    : null;
}
function _() {
  return _.logged_in
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      })
    : null;
}
var _ = `` + new URL(`assets/CnWczGru.png`, import.meta.url).href,
  _ = `z4nYR-MCfbI-`,
  _ = `REftl0OutEE-`,
  _ = `_2Z4Swl30C0M-`,
  _ = `fUChmODebc8-`;
function _(_) {
  let { recipientAccountID: _ } = _,
    _ = `${_.STORE_BASE_URL}digitalgiftcards/selectgiftcard`;
  return (
    _ && (_ += `?giftto=${_}`),
    (0, _.jsxs)(_, {
      _: _,
      className: _,
      snr: !0,
      gamepadFocusable: !0,
      children: [
        (0, _.jsx)(`img`, {
          className: _,
          src: _(_),
          alt: ``,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`span`, {
            className: _,
            children: _.Localize(`#giftcards_banner_text`),
          }),
        }),
      ],
    })
  );
}
var _ = _({
  Component: _,
  Actions: {
    CreateWishlistShareToken: _(
      `qBT4B3wF9ltrTlDx1-rxpsZpLtKFAL2sA_WygPUogm4`,
      `CreateWishlistShareToken`,
    ),
    RevokeWishlistShareTokens: _(
      `qBT4B3wF9ltrTlDx1-rxpsZpLtKFAL2sA_WygPUogm4`,
      `RevokeWishlistShareTokens`,
    ),
  },
});
function _() {
  let {
    error: _,
    steamid: _,
    sort: _,
    filters: _,
    shareToken: _,
    bUseV7Menu: _,
    bRestrictedFromAdultContent: _,
  } = _.useLoaderData();
  return (0, _.jsx)(_, {
    error: _,
    steamid: _,
    sort: _,
    filters: _,
    shareToken: _,
    bUseV7Menu: _,
    bRestrictedFromAdultContent: _,
  });
}
function _(_) {
  let {
    error: _,
    steamid: _,
    sort: _,
    filters: _,
    shareToken: _,
    bUseV7Menu: _,
  } = _;
  return (0, _.jsx)(_, {
    steamid: _ ?? `0`,
    shareToken: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        !_ && (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          steamid: _,
        }),
        _
          ? (0, _.jsx)(_, {
              error: _ || `ProfileNotFound`,
            })
          : (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                steamid: _,
                sort: _,
                filters: _,
              }),
            }),
      ],
    }),
  });
}
function _(_) {
  let { steamid: _ } = _,
    [_, _] = _(_.filters),
    [_, _] = _(_.sort),
    [_, _, _] = _(``, 200),
    { wishlist: _, textFilterState: _, bLoading: _ } = _(_ ?? `0`, _, _, _),
    _ = _(),
    { data: _ } = _(_, _),
    _ = _(_);
  _(_, _, _), _(_, _, _);
  let _ = _?.items.length ?? 0,
    _ = _.useMemo(
      () =>
        _?.items.filter((_) => !_.category_ids || _.category_ids.length === 0)
          .length ?? 0,
      [_?.items],
    );
  return (!_ && !_) || (_ && !_ && !_ && !_?.items.length) || !_
    ? (0, _.jsx)(_, {
        bNotLoggedIn: !_,
      })
    : (0, _.jsxs)(_, {
        filters: _,
        setFilters: _,
        sort: _,
        bLoadingFilters: _,
        children: [
          (0, _.jsx)(_, {
            filters: _,
            setFilters: _,
            sort: _,
            setSort: _,
            strTextFilter: _,
            setTextFilter: _,
            strAutocompleteSuggestion: _?.strAutocompleteSuggestion,
            cWishlistItems: _,
            bLoadingFilters: _,
          }),
          (0, _.jsx)(_, {
            cWishlistItems: _,
            cUncategorizedWishlistItems: _,
            bLoadingFilters: _,
          }),
          (0, _.jsx)(_, {
            filters: _,
            setFilters: _,
          }),
          (0, _.jsx)(_, {
            textFilterState: _,
          }),
          (0, _.jsx)(_, {
            wishlistCurrent: _,
            bEnableReordering: _,
            bLoadingFilters: _,
          }),
        ],
      });
}
function _(_) {
  let { steamid: _ } = _,
    _ = _(_),
    _ = _();
  if (!_.data) return null;
  let _ = _(_.data);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`a`, {
            href: _,
            children: (0, _.jsx)(_, {
              playerLinkDetails: _.data,
              statusPosition: `border`,
              alt: ``,
              role: `presentation`,
              size: `FillArea`,
              className: _,
            }),
          }),
          (0, _.jsx)(`h2`, {
            children: _.Localize(
              `#wishlist_header`,
              _.data.public_data?.persona_name?.toLocaleUpperCase(
                _().strISOCode,
              ) ?? ``,
            ),
          }),
        ],
      }),
      !_ &&
        !!_ &&
        (0, _.jsx)(_, {
          recipientAccountID: new _(_).GetAccountID(),
        }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return !(!(_ && !_) || (_ && _ && _ !== `order`));
}
function _(_) {
  let { wishlistCurrent: _, bEnableReordering: _, bLoadingFilters: _ } = _,
    _ = _.useRef(_),
    _ = _ || _.current;
  if (!_) return null;
  _.current = _;
  let _ = !_ || _;
  return _.items.length == 0
    ? (0, _.jsx)(_, {})
    : (0, _.jsx)(_, {
        wishlist: _,
        loading: _,
        bEnableReordering: _ && !_,
      });
}
function _(_) {
  let { bNotLoggedIn: _ } = _,
    _ = _();
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(`h3`, {
              children: _.Localize(`#wishlist_sign_in_to_see_your_wishlist`),
            }),
            (0, _.jsx)(`p`, {
              children: (0, _.jsx)(_, {}),
            }),
            (0, _.jsx)(`p`, {
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
      })
    : _
      ? (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`h3`, {
                children: _.Localize(`#wishlist_your_wishlist_empty`),
              }),
              (0, _.jsx)(`p`, {
                children: _.Localize(`#wishlist_browse_the_store`),
              }),
              (0, _.jsx)(`p`, {
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`h3`, {
                children: _.Localize(`#wishlist_others_wishlist_empty`),
              }),
              (0, _.jsx)(`p`, {}),
            ],
          }),
        });
}
function _() {
  return (0, _.jsx)(`a`, {
    className: _,
    href: `${_.HELP_BASE_URL}${_().strISOCode}/faqs/view/0CAD-3B4D-B874-A065`,
    children: _.Localize(`#wishlist_learn_more_button`),
  });
}
function _() {
  let { data: _ } = _(_(), _());
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`h3`, {
          children: _.Localize(`#wishlist_no_items_matching_filters`),
        }),
        !!_ &&
          (0, _.jsx)(_, {
            _: `p`,
            size: `4`,
            children: _(
              _.Localize(
                `#wishlist_x_items_on_wishlist_but_none_match_prefs`,
                _.toLocaleString(_()),
              ),
              (0, _.jsx)(_, {
                target: `_blank`,
                href: `${_.STORE_BASE_URL}account/preferences`,
              }),
            ),
          }),
      ],
    }),
  });
}
function _(_) {
  let { textFilterState: _ } = _,
    _ = _(),
    _ = _(),
    { data: _ } = _(_, _),
    [_, _] = _(),
    _ = _?.strFilter?.trim();
  if (!_ || !_) return null;
  let _;
  if (_.categoryID && _?.has(_.categoryID)) {
    let _ = _.get(_.categoryID),
      _ = (0, _.jsx)(_, {
        category: _,
        className: _,
        selected: _.has(_._),
        onClick: _ ? void 0 : () => _(_.name, _._),
      });
    _ = _.LocalizeReact(
      _.cCategoryMatches > 1
        ? `#wishlist_filter_matches_category_Plural`
        : `#wishlist_filter_matches_category`,
      _.cCategoryMatches,
      _,
    );
  } else
    _.cCategoryMatches > 0 &&
      (_ = _.LocalizePlural(
        `#wishlist_filter_matches_categories`,
        _.cCategoryMatches,
        _,
      ));
  let _;
  if (_.tagID) {
    let _ = (0, _.jsx)(_, {
      tagID: _.tagID,
    });
    _ = _.LocalizeReact(
      _.cTagMatches > 1
        ? `#wishlist_filter_matches_tag_Plural`
        : `#wishlist_filter_matches_tag`,
      _.cTagMatches,
      _,
    );
  } else
    _.cTagMatches &&
      (_ = _.LocalizePlural(`#wishlist_filter_matches_tags`, _.cTagMatches, _));
  return _.cAppNameMatches === 0 && !_ && !_
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _.Localize(`#wishlist_filter_results`),
          }),
          _.cAppNameMatches > 0 &&
            (0, _.jsx)(`div`, {
              className: `OXBgrjbP3x8-`,
              children: _.LocalizePlural(
                `#wishlist_filter_matches_items`,
                _.cAppNameMatches,
                _,
              ),
            }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `OXBgrjbP3x8-`,
              children: _,
            }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `OXBgrjbP3x8-`,
              children: _,
            }),
        ],
      });
}
function _(_, _, _) {
  _.useEffect(() => {
    if (location.hash) {
      let _ = new URLSearchParams(location.hash.slice(1));
      if (_.has(`sort`)) {
        let _ = _.get(`sort`);
        _(_) && _(_[_]);
      }
      _.has(`term`) && _(_.get(`term`));
      let _ = {};
      _.has(`platform`) && (_.platform = _.get(`platform`)),
        _.has(`type`) && (_.type_filters = _.get(`type`)),
        _.has(`ex_earlyaccess`) &&
          (_.exclude_early_access = _.get(`ex_earlyaccess`)),
        _.has(`ex_prerelease`) &&
          (_.exclude_prerelease = _.get(`ex_prerelease`)),
        _.has(`ex_vr`) && (_.exclude_vr = _.get(`ex_vr`)),
        _.get(`discount_any`) === `1` && (_.min_discount = `any`),
        _.get(`discount_50`) === `1` && (_.min_discount = `50`),
        _.get(`discount_75`) === `1` && (_.min_discount = `75`);
      let _ = [];
      _.get(`deck_verified`) === `1` && _.push(`verified`),
        _.get(`deck_playable`) === `1` && _.push(`playable`),
        _.length > 0 && (_.deck_filters = _.join(`,`)),
        Object.keys(_).length > 0 && _(_(_, void 0));
    }
  }, [_, _, _]);
}
function _(_, _, _) {
  let { data: _ } = _(_),
    _ = _.useRef(void 0),
    { bIsMounted: _ } = _(),
    _;
  _?.public_data?.profile_url
    ? (_ = _(`/wishlist/id/${_.public_data.profile_url}/`))
    : _?.public_data?.steamid &&
      (_ = _(`/wishlist/profiles/${_.public_data.steamid}/`));
  let _ = _();
  _.useEffect(() => {
    if (!_ || (_ && !_)) return;
    let { protocol: _, hostname: _, search: _ } = window.location,
      _ = new URL(`${_}//${_}${_}`),
      _ = new URLSearchParams(_);
    _ && _ != _[0] && _.searchParams.append(`sort`, _);
    let _ = _(_);
    for (let _ of Object.keys(_)) _[_] && _.searchParams.append(_, _[_]);
    _.current !== void 0 && _.current !== _.searchParams.toString() && _(_, _),
      (_.current = _.searchParams.toString()),
      _.has(`cc`) && _.searchParams.append(`cc`, _.get(`cc`)),
      _.has(`st`) && _.searchParams.append(`st`, _.get(`st`)),
      _(_);
  }, [_, _, _, _, _]);
}
export { _ as route };
