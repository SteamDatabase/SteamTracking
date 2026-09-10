var _ = _(_(), 1),
  _ = __webpack_require__();
function _(_) {
  let { suggestions: _, onTextChange: _, onSuggestionSelected: _, ..._ } = _,
    _ = _({
      onTextChange: _,
      suggestions: _,
      onSuggestionSelected: _,
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    children: [
      (0, _.jsx)(_.TextInput, {
        ..._,
      }),
      (0, _.jsx)(_.Suggestions, {
        children: _.map((_, _) =>
          (0, _.jsx)(
            _.Suggestion,
            {
              value: _,
              children: _,
            },
            _ + _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { onTextChange: _, suggestions: _, onSuggestionSelected: _ } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(!1);
  return {
    activeIndex: _,
    setActiveIndex: _,
    open: _,
    onOpenChange: _,
    onTextChange: (0, _.useCallback)(
      (_) => {
        _ ? (_(!0), _(null)) : _(!1), _(_);
      },
      [_],
    ),
    suggestions: _,
    onSuggestionSelected: _,
  };
}
function _(_) {
  let {
      children: _,
      placement: _ = `bottom-end`,
      popoverWidth: _ = `dropdown`,
      ..._
    } = _,
    _ = _({
      ..._.state,
      width: _,
      placement: _,
      gutter: `4`,
      interactions: {
        virtualItemFocus: !0,
        focus: !0,
      },
      role: `combobox`,
      scroll: !0,
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Root, {
      state: _,
      children: _,
    }),
  });
}
function _(_) {
  let {
      state: {
        onTextChange: _,
        activeIndex: _,
        onOpenChange: _,
        setActiveIndex: _,
        suggestions: _,
        onSuggestionSelected: _,
      },
    } = _(`<Autocomplete.TextInput>`),
    _ = (_) => {
      _.key === `Enter` &&
        _ !== null &&
        _[_] &&
        (_ && _(_[_], _),
        _.defaultPrevented || _(_[_]),
        _(null),
        _(!1),
        _.preventDefault(),
        _.stopPropagation());
    },
    _ = (_) => {
      (_.key === `Home` || _.key === `End`) && _.stopPropagation();
    },
    _ = (0, _.useRef)(null);
  return (0, _.jsx)(_.Anchor, {
    children: (0, _.jsx)(_, {
      ..._,
      inputRef: _,
      onTextChange: _,
      "aria-autocomplete": `list`,
      onKeyDown: _,
      onKeyDownCapture: _,
      role: `combobox`,
    }),
  });
}
function _(_) {
  return _.Children.toArray(_.children).length === 0
    ? null
    : (0, _.jsx)(_.Positioner, {
        ..._,
        returnFocus: !1,
      });
}
function _(_) {
  let { value: _, children: _, ..._ } = _,
    {
      state: {
        onTextChange: _,
        onOpenChange: _,
        setActiveIndex: _,
        onSuggestionSelected: _,
      },
    } = _(`<Autocomplete.TextInput>`);
  return (0, _.jsx)(_.Item, {
    onSelect: (_) => {
      _ && _(_, _), _.defaultPrevented || _(_), _(null), _(!1);
    },
    ..._,
    children: _,
  });
}
var _ = Object.assign(_, {
    Root: _,
    TextInput: _,
    Suggestions: _,
    Suggestion: _,
  }),
  _ = (0, _.createContext)(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return _(_, `${_} must be used within an <Autocomplete>!`), _;
}
var _ = `RgOQ2zp5-Og-`;
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    className: _,
  });
}
var _ = (0, _.createContext)(!1);
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  let { showSteamItems: _, onShowSteamItemsChange: _ } = _;
  return (0, _.jsxs)(_.Root, {
    value: _ ? `on` : `off`,
    onValueChange: (_) => __webpack_require__(_ === `on`),
    variant: `inset`,
    radius: `full`,
    children: [
      (0, _.jsx)(_.Item, {
        value: `off`,
        children: _.Localize(`#AdvancedSearch_TypeSwitch_InGame`),
      }),
      (0, _.jsx)(_.Item, {
        value: `on`,
        children: _.Localize(`#AdvancedSearch_TypeSwitch_SteamItems`),
      }),
    ],
  });
}
var _ = 2;
function _(_, _, _, _) {
  return (0, _.useMemo)(() => {
    if (!_) return [];
    let _ = _[_];
    return _ ? _(_, _, _) : _(_, void 0, _, _);
  }, [_, _, _, _]);
}
var _ = {
  chunkid: (module, module_exports, __webpack_require__) =>
    _(module, 3, module_exports, __webpack_require__),
};
function _(_, _, _, _) {
  let _ = typeof _ == `number` ? _ : _,
    _ = [],
    _ = [];
  if (!_) return [];
  for (let _ of Object.keys(_)) {
    let _ = _[_];
    if (!_.tags) continue;
    let _ = Object.keys(_.tags).length < _,
      _ = _(_, _ ? `checkbox` : `select`, !0, void 0, _, _);
    _ && (_ ? _.push(_) : _.push(_));
  }
  return [_, _].filter((_) => _.length > 0);
}
function _(_) {
  let { facets: _, state: _, onStateChange: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children: _.flatMap((_, _) => [
      (0, _.jsxs)(
        _,
        {
          children: [
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  facet: _,
                  state: _,
                  onStateChange: _,
                },
                _.strLabel,
              ),
            ),
            _ === _.length - 1 &&
              (0, _.jsx)(_, {
                state: _,
                onStateChange: _,
              }),
          ],
        },
        `facets_${_}`,
      ),
      _ < _.length - 1
        ? (0, _.jsx)(
            _,
            {
              color: `dull-9`,
              size: `4`,
              marginTop: `4`,
            },
            `sep_${_}`,
          )
        : null,
    ]),
  });
}
var _ = 753,
  _ = `item_class`,
  _ = `Event`;
function _(_) {
  let { facets: _, state: _, onStateChange: _, facetingInfo: _, ..._ } = _,
    _ = {
      ..._,
    },
    _ = _[_];
  delete _[_], _.app && delete _[_];
  let _ = _(_, _, _);
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      _ &&
        (0, _.jsx)(_, {
          facet: _,
          state: _,
          onStateChange: _,
        }),
      (0, _.jsx)(_, {
        facets: _,
        state: _,
        onStateChange: _,
      }),
    ],
  });
}
var _ = [`item_class_10`, `item_class_6`],
  _ = {
    item_class_2: _,
    item_class_3: _,
    item_class_4: _,
    item_class_5: _,
    item_class_10: _,
  };
function _(_) {
  let {
      facet: { localized_name: _, name: _, tags: _ = {} },
      state: _,
      onStateChange: _,
    } = _,
    _ = Object.keys(_).filter((_) => _.indexOf(_) < 1),
    _ = (_, _) => {
      if (_.includes(_)) {
        let _ = _;
        for (let _ of _) _ = _(_, _, _, _);
        _(_, !0);
      } else _(_(_, _, _, _), !0);
    },
    _ = _.facets[_] || {};
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        weight: `medium`,
        size: `3`,
        contrast: `title`,
        children: _.Localize(`#AdvancedSearch_SteamItems_TypeLabel`),
      }),
      (0, _.jsx)(_, {
        columns: `repeat( auto-fit, minmax( 230px, 1fr ) )`,
        gap: `2`,
        marginTop: `2`,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              active: _[_],
              onActiveChange: (_) => _(_, _),
              label: _[_].localized_name,
              icon: _[_],
            },
            _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M24 31H3V5H24V31ZM6 8H21V24H6V8Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M33 27H28V22H31V11H28V9H33V27Z`,
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
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M13 7H34V29H13V25H10V29H2V21C3.65685 21 5 19.6569 5 18C5 16.3431 3.65685 15 2 15V7H10V11H13V7ZM13 23H10V19H13V23ZM10 17H13V13H10V17ZM21 15C21 15.5523 20.5523 16 20 16C19.4477 16 19 15.5523 19 15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15ZM23 15C23 16.6569 21.6569 18 20 18C18.3431 18 17 16.6569 17 15C17 13.3431 18.3431 12 20 12C21.6569 12 23 13.3431 23 15ZM28 23C28.5523 23 29 22.5523 29 22C29 21.4477 28.5523 21 28 21C27.4477 21 27 21.4477 27 22C27 22.5523 27.4477 23 28 23ZM28 25C29.6569 25 31 23.6569 31 22C31 20.3431 29.6569 19 28 19C26.3431 19 25 20.3431 25 22C25 23.6569 26.3431 25 28 25ZM27.1679 11.9453L19.1679 23.9453L20.832 25.0547L28.832 13.0547L27.1679 11.9453Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M29 31H6V5H29V31ZM9 8H26V24H9V8Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M14.7451 16.9935L12 14.19L15.7965 14.125L17.5 10L19.2035 14.125L23 14.19L20.2549 16.9935L20.8973 20.9694L17.5 19.1242L14.1027 21L14.7451 16.9935Z`,
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
      _: `M9.66645 5.52796C12.1332 3.87973 15.0333 3 18 3C19.9698 3 21.9204 3.38799 23.7403 4.14181C25.5601 4.89563 27.2137 6.00052 28.6066 7.3934C29.9995 8.78628 31.1044 10.4399 31.8582 12.2597C32.612 14.0796 33 16.0302 33 18C33 20.9667 32.1203 23.8668 30.472 26.3336C28.8238 28.8003 26.4811 30.7229 23.7403 31.8582C20.9994 32.9935 17.9834 33.2906 15.0737 32.7118C12.1639 32.133 9.49119 30.7044 7.3934 28.6066C5.29562 26.5088 3.86701 23.8361 3.28823 20.9264C2.70945 18.0166 3.0065 15.0006 4.14181 12.2597C5.27713 9.51886 7.19972 7.17618 9.66645 5.52796ZM9.5056 13.3333C9.17595 13.8266 9.00001 14.4067 9.00001 15C9.00001 15.7956 9.31608 16.5587 9.87869 17.1213C10.4413 17.6839 11.2044 18 12 18C12.5934 18 13.1734 17.8241 13.6667 17.4944C14.1601 17.1648 14.5446 16.6962 14.7716 16.1481C14.9987 15.5999 15.0581 14.9967 14.9424 14.4147C14.8266 13.8328 14.5409 13.2982 14.1213 12.8787C13.7018 12.4591 13.1672 12.1734 12.5853 12.0576C12.0033 11.9419 11.4001 12.0013 10.852 12.2284C10.3038 12.4554 9.83524 12.8399 9.5056 13.3333ZM22.3333 17.4944C22.8266 17.8241 23.4067 18 24 18C24.7957 18 25.5587 17.6839 26.1213 17.1213C26.6839 16.5587 27 15.7956 27 15C27 14.4067 26.8241 13.8266 26.4944 13.3333C26.1648 12.8399 25.6962 12.4554 25.1481 12.2284C24.5999 12.0013 23.9967 11.9419 23.4147 12.0576C22.8328 12.1734 22.2982 12.4591 21.8787 12.8787C21.4591 13.2982 21.1734 13.8328 21.0576 14.4147C20.9419 14.9967 21.0013 15.5999 21.2284 16.1481C21.4554 16.6962 21.8399 17.1648 22.3333 17.4944ZM23 22C23 23.3261 22.4732 24.5979 21.5355 25.5355C20.5979 26.4732 19.3261 27 18 27C16.6739 27 15.4021 26.4732 14.4645 25.5355C13.5268 24.5979 13 23.3261 13 22H23Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M2 6.05005V30.05H34V6.05005H2ZM25 10.05C25.5933 10.05 26.1734 10.226 26.6667 10.5556C27.1601 10.8853 27.5446 11.3538 27.7716 11.902C27.9987 12.4502 28.0581 13.0534 27.9424 13.6353C27.8266 14.2173 27.5409 14.7518 27.1213 15.1714C26.7018 15.5909 26.1672 15.8766 25.5853 15.9924C25.0033 16.1082 24.4001 16.0488 23.8519 15.8217C23.3038 15.5946 22.8352 15.2101 22.5056 14.7168C22.1759 14.2234 22 13.6434 22 13.05C22 12.2544 22.3161 11.4913 22.8787 10.9287C23.4413 10.3661 24.2044 10.05 25 10.05ZM23 26.05H6L14.5 15.05L19.4 21.39L22 18.05L28.22 26.05H23Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = {
  name: `bMarketOptOut`,
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
  options: {
    path: `/market`,
    maxAge: 720 * 60 * 60 * 1e3,
    httpOnly: !1,
  },
};
function _() {
  return _(_) === `1`;
}
function _(_) {
  _ ? _(_, `1`) : _(_);
}
var _ = `4`,
  _ = (0, _.createContext)({});
function _(_) {
  let {
      filter: _,
      onFilterChange: _,
      config: _,
      preload: _ = {},
      debugMode: _,
      onSearch: _,
      ..._
    } = _,
    _ = _.bSteamItems,
    _ = (_) =>
      __webpack_require__({
        ..._,
        bSteamItems: _,
      }),
    _ = (_) => {
      _.preventDefault(), _.stopPropagation();
    },
    _ = _(`sm`),
    _ = _ ? _.rgAppData && _.rgAppData[_] : _.filterInGame.app,
    _ = _(_);
  return (0, _.jsx)(_.Provider, {
    value: !!_,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsx)(_.Provider, {
        value: _,
        children: (0, _.jsx)(_, {
          minWidth: {
            initial: void 0,
            _: `min( 75vw, 800px )`,
          },
          children: (0, _.jsxs)(`form`, {
            onSubmit: _,
            children: [
              !_.bNewMarket &&
                (0, _.jsx)(_, {
                  size: `7`,
                  weight: `heavy`,
                  children: _.Localize(`#AdvancedSearch_Heading`),
                }),
              (0, _.jsxs)(_, {
                gap: `2`,
                align: {
                  initial: `stretch`,
                  _: `start`,
                },
                marginY: _,
                direction: {
                  initial: `column`,
                  _: `row`,
                },
                children: [
                  (0, _.jsx)(_, {
                    flexGrow: `0`,
                    children: (0, _.jsx)(_, {
                      showSteamItems: _,
                      onShowSteamItemsChange: _,
                    }),
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      style: {
                        marginTop: `10px`,
                      },
                      children: (0, _.jsx)(_, {
                        size: `1`,
                        orientation: `vertical`,
                        color: `dull-9`,
                      }),
                    }),
                  (0, _.jsxs)(_, {
                    direction: `column`,
                    flexGrow: `1`,
                    gap: `2`,
                    children: [
                      (0, _.jsx)(_, {
                        app: _ || void 0,
                        value: _.strSearch || ``,
                        onTextChange: (_) =>
                          __webpack_require__({
                            ..._,
                            strSearch: _,
                          }),
                      }),
                      _ &&
                        (0, _.jsx)(_, {
                          marginLeft: `4`,
                          checked: !!_.bSearchDescriptions,
                          onChange: (_) =>
                            __webpack_require__({
                              ..._,
                              bSearchDescriptions: _,
                            }),
                          title: _.Localize(
                            `#AdvancedSearch_IncludeDescriptions_Tooltip`,
                          ),
                          children: (0, _.jsx)(_, {
                            contrast: `description`,
                            children: _.Localize(
                              `#AdvancedSearch_IncludeDescriptions`,
                            ),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(_, {
                children: [
                  !_ &&
                    (0, _.jsx)(_, {
                      ..._,
                      filter: _.filterInGame,
                      onFilterChange: (_) =>
                        __webpack_require__({
                          ..._,
                          filterInGame: _,
                        }),
                      suggestedInitialApp: _.filterSteam.app,
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      ..._,
                      filter: _.filterSteam,
                      onFilterChange: (_) =>
                        __webpack_require__({
                          ..._,
                          filterSteam: _,
                        }),
                      suggestedInitialApp: _.filterInGame.app,
                    }),
                ],
              }),
              (0, _.jsx)(_, {
                filter: _,
                onFilterChange: _,
                config: _,
                onSearch: _,
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
function _(_) {
  return !!_;
}
function _(_) {
  let { filter: _, onFilterChange: _, config: _, onSearch: _ } = _,
    _ = _.bSteamItems,
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      __webpack_require__(
        _
          ? {
              ..._,
              strSearch: ``,
              filterSteam: {
                ..._.filterSteam,
                facets: {},
                price: [0, _.maxPrice],
              },
            }
          : {
              ..._,
              strSearch: ``,
              filterInGame: {
                ..._.filterInGame,
                facets: {},
                price: [0, _.maxPrice],
              },
            },
      );
    },
    _ = _ ? _.filterSteam : _.filterInGame,
    _ =
      _.price[0] !== 0 ||
      _.price[1] !== _.maxPrice ||
      Object.keys(_.facets).length > 0,
    _ =
      !_.strSearch &&
      !_.app &&
      !Object.keys(_.facets).length &&
      _.price[0] === 0 &&
      _.price[1] === _.maxPrice,
    _ = () => {
      _(!0), _(_, _);
    },
    _ = _(`sm`),
    _ = (0, _.jsx)(_, {
      type: `submit`,
      onClick: _,
      disabled: _ || _,
      children: _.Localize(`#AdvancedSearch_Search`),
    });
  return (0, _.jsxs)(_, {
    justify: _ ? `between` : void 0,
    marginTop: _,
    direction: _ ? `row` : `column`,
    gap: `2`,
    children: [
      _.bNewMarket
        ? (0, _.jsx)(`div`, {})
        : (0, _.jsx)(_, {
            gap: `2`,
            align: `center`,
            justify: `between`,
            children: (0, _.jsx)(`a`, {
              href: `${_.COMMUNITY_BASE_URL}groups/community_market/discussions/`,
              className: _,
              children: _.Localize(`#AdvancedSearch_BetaTag`),
            }),
          }),
      _ &&
        (0, _.jsxs)(_, {
          gap: _,
          justify: `end`,
          children: [
            _ &&
              (0, _.jsx)(_, {
                color: `dull`,
                variant: `ghost`,
                onClick: _,
                disabled: !_,
                children: _.Localize(`#AdvancedSearch_Reset`),
              }),
            _,
          ],
        }),
      !_ && _,
    ],
  });
}
function _(_) {
  let { value: _, onTextChange: _, app: _ } = _,
    [_, _] = (0, _.useState)(!0);
  return (0, _.jsx)(_, {
    radius: `full`,
    variant: `inset`,
    app: _ ? _ : void 0,
    onClearApp: () => _(!1),
    value: _,
    onTextChange: _,
  });
}
function _(_) {
  let {
      value: _,
      onTextChange: _,
      app: _,
      onClearApp: _,
      popoverWidth: _,
      ..._
    } = _,
    _ = _(),
    _ = _?.appid,
    _ = !!_ && _.length > 2,
    _ = _({
      queryKey: [`market_search_suggestions`, _, _],
      queryFn: async () =>
        await (
          await fetch(
            `/market/searchsuggestionsresults?q=${_}${_ ? `&appid=${_}` : ``}${_ ? `&debug=1` : ``}`,
          )
        ).json(),
      placeholderData: (_) => _,
      enabled: _,
      staleTime: _ ? 0 : 1 / 0,
    }),
    _ = _.data?.apps || [],
    _ = (_.data?.results || []).slice(0, 10),
    _ = _({
      onTextChange: _,
      suggestions: _.map((_) => `app|${_.appid}`).concat(
        _.map((_) => `item|${_.market_hash_name}`),
      ),
      onSuggestionSelected: (_, _) => {
        _.preventDefault();
        let _ = _.indexOf(`|`);
        if (_ === -1) return;
        let _ = _.slice(0, _),
          _ = _.slice(_ + 1);
        if (_ === `item`) {
          let _ = _.find((_) => _.market_hash_name === _);
          _ && (window.location.href = _.Item(_.app_id, _.market_hash_name));
        } else if (_ === `app`) {
          let _ = _.find((_) => _.appid === Number(_));
          _ &&
            (window.location.href = _.Search({
              search: `appid=${_.appid}`,
            }));
        }
      },
    }),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _ || !_,
    _ = _(
      (0, _.useCallback)((_) => {
        let _ = _.contentRect.width < 300;
        _(_);
      }, []),
    ),
    _ = _
      ? (0, _.jsxs)(_, {
          cursor: `pointer`,
          radius: _.radius || `sm`,
          background: `dull-6`,
          paddingY: `1`,
          paddingX: `2`,
          align: `center`,
          gap: `1`,
          role: `button`,
          maxWidth: `24ch`,
          onMouseDown: _,
          children: [
            (0, _.jsx)(_, {
              height: `20px`,
              objectFit: `contain`,
              src: _.icon,
              alt: ``,
            }),
            (0, _.jsx)(_, {
              visible: !_,
              children: _.name,
            }),
            (0, _.jsx)(_, {}),
          ],
        })
      : null,
    _ =
      _ && !_
        ? _.Localize(`#AdvancedSearch_TextSearch_PlaceholderWithApp`, _.name)
        : _.Localize(`#AdvancedSearch_TextSearch_Placeholder`);
  return (0, _.jsxs)(_.Root, {
    state: _,
    popoverWidth: _,
    children: [
      (0, _.jsx)(_.TextInput, {
        value: _,
        placeholder: _,
        ..._,
        title: _.Localize(`#AdvancedSearch_TextSearch_Tooltip`),
        beforeContent: _,
        ref: _,
        onFocus: () => _(!0),
        onBlur: () => _(!1),
        maxLength: 90,
        clearable: !0,
      }),
      (0, _.jsxs)(_.Suggestions, {
        children: [
          _ &&
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  ..._,
                },
                _.appid,
              ),
            ),
          _ &&
            _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  name: _.market_name,
                  hashName: _.market_hash_name,
                  appName: _.app_name,
                  appid: _.app_id,
                  img: _.icon_url,
                  searchScore: _.search_score,
                },
                _.market_hash_name + _,
              ),
            ),
        ],
      }),
    ],
  });
}
function _(_) {
  let { visible: _, children: _ } = _;
  return (0, _.jsx)(_, {
    className: _,
    "data-visible": !!_,
    children: (0, _.jsx)(_, {
      truncate: !0,
      children: _,
    }),
  });
}
function _(_) {
  let {
      name: _,
      hashName: _,
      img: _,
      appName: _,
      searchScore: _,
      appid: _,
    } = _,
    _ = _();
  return (0, _.jsxs)(_.Suggestion, {
    value: `item|${_}`,
    render: (_, _) =>
      (0, _.jsx)(_, {
        focused: _.focused,
        link: _.Item(_, _),
        ..._,
      }),
    children: [
      (0, _.jsx)(`img`, {
        style: {
          margin: `8px`,
          height: `60px`,
          width: `60px`,
          objectFit: `contain`,
          filter: `drop-shadow( 0 0 1px rgba( 0, 0, 0, .5) )`,
        },
        src: _,
        alt: ``,
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        minWidth: `0`,
        children: [
          (0, _.jsx)(_, {
            size: `3`,
            weight: `medium`,
            truncate: !0,
            contrast: `title`,
            children: _,
          }),
          (0, _.jsx)(_, {
            size: `1`,
            truncate: !0,
            children: _,
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_.Fragment, {
          children:
            _ > 0
              ? (0, _.jsx)(_, {
                  size: `1`,
                  children: _,
                })
              : null,
        }),
    ],
  });
}
function _(_) {
  let { name: _, icon: _, appid: _ } = _;
  return (0, _.jsxs)(_.Suggestion, {
    value: `app|${_}`,
    render: (_, _) =>
      (0, _.jsx)(_, {
        focused: _.focused,
        link: _.Search({
          search: `appid=${_}`,
        }),
        ..._,
      }),
    children: [
      (0, _.jsx)(`img`, {
        style: {
          margin: `8px`,
          height: `24px`,
          width: `24px`,
          objectFit: `contain`,
          filter: `drop-shadow( 0 0 1px rgba( 0, 0, 0, .5) )`,
        },
        src: _,
        alt: ``,
      }),
      (0, _.jsx)(_, {
        direction: `column`,
        gap: `1`,
        minWidth: `0`,
        children: (0, _.jsx)(_, {
          size: `2`,
          weight: `medium`,
          truncate: !0,
          contrast: `title`,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { focused: _, link: _, ..._ } = _;
  return (0, _.jsx)(`a`, {
    href: _,
    className: _,
    children: (0, _.jsx)(_, {
      align: `center`,
      gap: `2`,
      className: _,
      radius: `sm`,
      margin: `2`,
      "data-focused": _,
      paddingLeft: `2`,
      ..._,
    }),
  });
}
function _(_) {
  let {
      rgApps: _ = [],
      rgAppData: _ = {},
      filter: _,
      onFilterChange: _,
      suggestedInitialApp: _,
    } = _,
    [_, _] = (0, _.useState)(!1);
  (0, _.useEffect)(() => {
    _ ||
      (_(!0),
      _ &&
        _[_.appid] &&
        _({
          ..._,
          app: _[_.appid],
        }));
  }, [_, _, _, _, _]);
  let _ = !_.app && _,
    _ = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        apps: (0, _.useMemo)(
          () => _.filter((_) => _ !== _ && _[_]).map((_) => _[_]),
          [_, _],
        ),
        selectedApp: _.app,
        onSelectionChange: (_) =>
          _({
            ..._,
            app: _,
            facets: {},
          }),
      }),
      _ &&
        (0, _.jsx)(_, {
          loading: _.isLoading,
          apps: _.data?.rgInGame,
          filterBy: _,
          onSelect: (_) =>
            _({
              ..._,
              app: _[_] || null,
              facets: {},
            }),
        }),
      !!_.app &&
        (0, _.jsx)(_, {
          appid: _.app.appid,
          state: _,
          onStateChange: _,
        }),
    ],
  });
}
var _ = 753;
function _(_) {
  let { filter: _, onFilterChange: _, suggestedInitialApp: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = !_.app && _,
    _ = _(_),
    _ = _(),
    { facets: _ = {}, rgApps: _, mapAppIDs: _ } = _.data || {},
    _ = !_.facets.Event || Object.keys(_.facets).length === 0;
  if (
    ((0, _.useEffect)(() => {
      !_ &&
        _ &&
        (_(!0),
        _ &&
          _[_.appid] &&
          __webpack_require__({
            ..._,
            app: _,
          }));
    }, [_, _, _, _, _]),
    _.isLoading)
  )
    return (0, _.jsx)(_, {});
  if (_.isError || !_.data || !_ || !_)
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        size: `4`,
        children: _.Localize(`#AdvancedSearch_FacetLoadError`),
      }),
    });
  let _ = (_) =>
      __webpack_require__({
        ..._,
        app: _.find((_) => _.appid === _) || null,
        facets: {},
      }),
    _ = _.data?.rgPlaytime.length ? _.data?.rgPlaytime : _.data?.rgInGame;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          apps: _,
          selectedApp: _.app,
          onSelectionChange: (_) =>
            __webpack_require__({
              ..._,
              app: _,
              facets: {},
            }),
        }),
      _ &&
        _ &&
        (0, _.jsx)(_, {
          loading: _.isLoading,
          apps: _,
          filterBy: _,
          onSelect: _,
        }),
      (0, _.jsx)(_, {
        marginTop: `3`,
        facets: _,
        state: _,
        onStateChange: _,
      }),
    ],
  });
}
function _(_) {
  let { apps: _ = [], filterBy: _ = {}, onSelect: _, loading: _ } = _,
    _ = !_(`sm`),
    _ = (0, _.useMemo)(
      () =>
        Array.isArray(_)
          ? __webpack_require__.reduce(
              (_, _) => ({
                ..._,
                [_]: !0,
              }),
              {},
            )
          : _,
      [_],
    ),
    _ = _.filter(({ appid: _ }) => _[_]).slice(0, 8),
    _ = (_, _) => {
      (_ === ` ` || _ === `Enter`) && _(_);
    },
    _ = [];
  if (_)
    for (let _ = 0; _ < 20; _++)
      _.push(
        (0, _.jsx)(
          _,
          {
            width: `92px`,
            height: `138px`,
          },
          _,
        ),
      );
  let _ = _.logged_in,
    [_, _] = (0, _.useState)(null),
    _ = _(_),
    _ = _;
  if (!_) {
    let _ = _ ? Math.floor((_.contentRect.width - 10) / 104) : 0;
    (_ = _.slice(0, _)), (_ = _.slice(0, _));
  }
  return (0, _.jsxs)(_, {
    direction: `column`,
    marginTop: `3`,
    marginBottom: `2`,
    children: [
      (0, _.jsx)(_, {
        weight: `medium`,
        size: `3`,
        contrast: `title`,
        children: _
          ? _.Localize(`#AdvancedSearch_AppSelect_YourGames`)
          : _.Localize(`#AdvancedSearch_AppSelect_PopularGames`),
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `kMH7qA9mGE4-`),
        ref: _,
        children: [
          !_ &&
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  onClick: () => _(_.appid),
                  tabIndex: 0,
                  onKeyDown: (_) => _(_.key, _.appid),
                  role: `button`,
                  width: `92px`,
                  height: `138px`,
                  flexGrow: `1`,
                  flexBasis: `92px`,
                  children: (0, _.jsx)(`img`, {
                    src: _.img,
                    alt: _.name,
                    style: {
                      width: `92px`,
                    },
                  }),
                },
                _.appid,
              ),
            ),
          _ && _,
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    minHeight: `min(400px, 30vh)`,
    direction: `column`,
    children: _.children,
  });
}
function _(_) {
  let _ = {
    ..._,
    facets: {
      ..._.facets,
    },
  };
  return (
    _.app &&
      (_.facets.Game = {
        [`app_${_.app.appid}`]: !0,
      }),
    (_.app = {
      appid: _,
      name: ``,
      icon: ``,
    }),
    _
  );
}
function _(_, _) {
  let {
      strSearch: _,
      bSearchDescriptions: _,
      bSteamItems: _,
      filterInGame: _,
      filterSteam: _,
    } = _,
    _ = _ ? _(_) : _,
    {
      app: _,
      facets: _,
      accessories: _,
      price: [_, _],
    } = _,
    _ = new FormData();
  _ && _.set(`appid`, _.appid.toString()),
    _ && _.set(`q`, _),
    _ && _ && _(_.app) && _.set(`descriptions`, `1`);
  for (let _ of Object.keys(_))
    if (_[_])
      for (let _ of Object.keys(_[_]))
        _[_][_] &&
          (_()
            ? _.append(`category_${_.appid}_${_}[]`, `tag_${_}`)
            : _.append(`category_${_}[]`, _));
  for (let _ of Object.keys(_))
    if (_[_])
      for (let _ of Object.keys(_[_]))
        _[_][_] && _.append(`accessory_${_}[]`, _);
  return (
    _ > 0 && _.append(`price_min`, _.toString()),
    _ > _ && _ < _.maxPrice && _.append(`price_max`, _.toString()),
    _.Search({
      search: new URLSearchParams(_),
    })
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    flexGrow: `1`,
    radius: `sm`,
    direction: `column`,
    align: `center`,
    justify: `center`,
    marginTop: `2`,
    className: _,
    children: (0, _.jsx)(_, {
      align: `center`,
      _: `div`,
      marginTop: _,
      children: _.children,
    }),
  });
}
function _(_) {
  let { appid: _, ..._ } = _,
    _ = _(_),
    _ = _(_);
  return _.isLoading || _.isLoading
    ? (0, _.jsx)(_, {})
    : _.isError || !_.data || _.isError || !_.data
      ? (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            size: `4`,
            children: _.Localize(`#AdvancedSearch_FacetLoadError`),
          }),
        })
      : (0, _.jsx)(_(_), {
          appid: _,
          facets: _.data,
          accessories: _.data,
          ..._,
        });
}
function _(_) {
  return _(_) && _.EUNIVERSE === 1 ? _ : _;
}
function _(_) {
  let { appid: _, facets: _, ..._ } = _,
    _ = _(_, _);
  return _.length === 0
    ? (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              align: `center`,
              _: `div`,
              marginTop: _,
              size: `7`,
              weight: `heavy`,
              children: _.Localize(`#AdvancedSearch_NoFacetsSearch`),
            }),
            (0, _.jsx)(_, {
              align: `center`,
              _: `div`,
              marginTop: _,
              size: `4`,
              children: _.Localize(`#AdvancedSearch_NoFacets`),
            }),
          ],
        }),
      })
    : (0, _.jsx)(_, {
        facets: _,
        ..._,
      });
}
function _(_) {
  return {
    queryKey: [`marketaccessories`, _],
    queryFn: async () => {
      let _ = await fetch(`${_.COMMUNITY_BASE_URL}market/appaccessories/${_}`);
      if (!_ || !_._) throw Error(`Failed to load market filters for app ${_}`);
      let _ = await _.json();
      if (!_.success || !_.facets)
        throw Error(`Loaded malformed market filters for app ${_}`);
      return _.facets.map((_) => ({
        facets: [],
        internal_type: ``,
        localized_type: ``,
        ..._,
      }));
    },
    enabled: !!_,
  };
}
function _(_) {
  return _(_(_));
}
function _(_ = !0) {
  let { suggestedApps: _ } = (0, _.useContext)(_);
  return _({
    queryKey: [`marketsuggestedapps`],
    queryFn: async () => {
      let _ = await fetch(`${_.COMMUNITY_BASE_URL}market/suggestedapps`);
      if (!_ || !_._) throw Error(`Failed to load suggseted market apps`);
      return await _.json();
    },
    retry: !1,
    enabled: _,
    initialData: _,
  });
}
function _(_) {
  let {
      selectedApp: _,
      apps: _,
      onSelectionChange: _,
      size: _ = `3`,
      clearable: _ = !0,
    } = _,
    _ = _({
      rgOptions: _,
      selectedValue: _ || null,
      onSelectionChange: _,
      filter: (_, _) =>
        _ && _.name.toLocaleLowerCase().includes(_.toLocaleLowerCase()),
      filterPlaceholder: _.Localize(
        `#AdvancedSearch_AppSelect_FilterPlaceholder`,
      ),
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    size: _,
    radius: `sm`,
    marginBottom: `2`,
    clearable: _,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_, {
              app: _,
              size: _,
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              weight: `medium`,
              contrast: `title`,
              children: _.Localize(`#AdvancedSearch_AppSelect_Placeholder`),
            }),
        ],
      }),
      (0, _.jsx)(_.VirtualizedOptions, {
        estimateSize: () => 48,
        items: _.rgFilteredOptions,
        renderItem: (_, _) =>
          (0, _.jsx)(
            _.VirtualizedOption,
            {
              value: _,
              virtualItem: _,
              children: (0, _.jsx)(_, {
                app: _,
                active: _ === _,
                size: _,
              }),
            },
            _.appid,
          ),
      }),
    ],
  });
}
function _(_) {
  let {
    app: { icon: _, name: _ },
    active: _,
    size: _,
  } = _;
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `2`,
    children: [
      _ &&
        (0, _.jsx)(_, {
          icon: _,
          size: _,
        }),
      (0, _.jsx)(_, {
        color: _ ? `accent-8` : void 0,
        contrast: _ ? void 0 : `title`,
        children: _,
      }),
    ],
  });
}
var _ = {};
function _(_) {
  let { icon: _, size: _ } = _,
    [_, _] = (0, _.useState)(!!_[_]);
  (0, _.useEffect)(() => {
    let _ = !0;
    return (
      setTimeout(() => {
        _ && _(!0);
      }, 100),
      () => {
        _ = !1;
      }
    );
  }, []),
    _ && (_[_] = !0);
  let _ = _(_),
    _ = `var(--spacing-${parseInt(_) + 3})`;
  return _
    ? (0, _.jsx)(`img`, {
        src: _,
        style: {
          width: _,
          height: _,
          visibility: _ ? void 0 : `hidden`,
        },
        alt: ``,
      })
    : (0, _.jsx)(_, {
        width: _,
        height: _,
        background: `dull-10`,
      });
}
function _() {
  return (0, _.jsx)(_, {
    justify: `center`,
    align: `center`,
    marginTop: `6`,
    children: (0, _.jsx)(_, {
      size: `4`,
    }),
  });
}
export { _, _, _, _, _, _, _, _, _, _, _ };
