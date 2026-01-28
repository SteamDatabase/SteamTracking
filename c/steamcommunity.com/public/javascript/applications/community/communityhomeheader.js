(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2092],
  {
    chunkid: (module) => {
      module.exports = {
        CommunityHomeHeader: "_1C-zu8dsenPxA1G4fPb6xE",
        CommunityHomeHeaderTitleSection: "_31q4bBxhekoyefz_1Si0p7",
        CommunityHomeHeaderTitle: "_1V0f6-9bCasXuqDwyWopVL",
        CommunityHomeHeaderSubtitle: "_3QCfE7HVkS-jXMupL7Yw1g",
        AddFriendBtn: "iT6jDvjkaGUJBajHTCSwR",
        CommunityHomeHeaderContent: "_2OgY2oJ3f76jG54YDkv50a",
        AppHubsCtn: "O58NjOp-mp1C-Lp7kBnIv",
        Search: "r2myGP0jUBQpGPHfhdmNI",
        SearchBar: "BhYo9QBvxSZkbL835fMMt",
        InputContainer: "_8AoAYdWjlmxqtKLBHQhJ3",
        Input: "_1WV5gMjevy9p73E4rTI8ST",
        SearchIcon: "_2WLXg04_KtraVN3Oor_0Ab",
        SearchResultsCtn: "_23v0AdndBTSyI1M0hE-Ych",
        SearchResult: "_2f5QMmIxd8ttoAZBDPTPbI",
        AppHubShortcutsCtn: "_1BQW_8CTrPdSDSeREni4z5",
        AppHubTitle: "_1cmkhczo0dmSXCxOc_o1wi",
        AppHubShortcutLinks: "XhbenBCaP7IsSqg9LTU0K",
        ShortcutLink: "_12bMm2vWSzxZwD1nawoCDk",
        ShortcutImage: "irepMDTcqg6chiv6s2wpU",
        Divider: "_3sA9tFyrm7NsK9Vq3tR25D",
        TabContainer: "HY3YtM4tUrRbQjB6vZcZD",
        Tab: "_1oAgoNzRfQm9XWHkkgq1n5",
        ActiveTab: "_3Jb_4nYSDCuV7cqWpLbHFP",
        SortContainer: "_16DeiVTD4vxhf_NU37gQmq",
        Sort: "_1sg_EWgXdB6V6BWmPMyt1y",
        ActiveSort: "_3whf2vJwX5vpGwFaOsyA0P",
        SortIcon: "_2g7dImB7FKkKiEYpVTXCWb",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        const _ = (0, _.useRef)(void 0);
        return (
          (0, _.useEffect)(() => {
            _.current && _.current.TakeFocus();
          }, []),
          _.createElement(
            _._,
            {
              navID: "CommunityHomeHeader",
            },
            _.createElement(
              _._,
              {
                navRef: _,
                className: _().CommunityHomeHeader,
              },
              _.createElement(
                "div",
                {
                  className: _().CommunityHomeHeaderTitleSection,
                },
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    "div",
                    {
                      className: _().CommunityHomeHeaderTitle,
                    },
                    (0, _._)("#Community_Home_Header_Title"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _().CommunityHomeHeaderSubtitle,
                    },
                    (0, _._)("#Community_Home_Header_Subtitle"),
                  ),
                ),
                _.createElement(
                  _._,
                  {
                    className: _().AddFriendBtn,
                    href: `${_._.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, _._)("#Community_Home_Header_AddFriend_Button"),
                ),
              ),
              _.createElement(_, null),
              _.createElement(_, null),
            ),
          )
        );
      }
      function _() {
        const [_, _] = (0, _.useState)(""),
          [__webpack_require__, _] = (0, _.useState)([]),
          [_, _] = (0, _.useState)(!1),
          _ = (function () {
            const _ = (0, _.useMemo)(
                () => (0, _._)("personalapps", "application_config") || [],
                [],
              ),
              _ = (0, _.useMemo)(
                () => (0, _._)("popularapps", "application_config") || [],
                [],
              ),
              _ = [..._, ..._];
            if (_.length)
              return {
                isLoading:
                  1 ===
                  (0, _._)(_, {
                    include_assets: !0,
                  }),
                data: {
                  personalAppIds: _,
                  popularAppIds: _,
                },
              };
            return {
              isLoading: !1,
              data: {
                personalAppIds: _,
                popularAppIds: _,
              },
            };
          })();
        if (_.isLoading) return null;
        return _.createElement(
          "div",
          {
            className: _().CommunityHomeHeaderContent,
          },
          _.createElement(
            _._,
            {
              className: _().AppHubsCtn,
            },
            _.createElement(_, {
              appShortcuts: _.data.personalAppIds,
              sectionTitle: (0, _._)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: _.data.popularAppIds.length > 0,
            }),
            _.createElement(_, {
              appShortcuts: _.data.popularAppIds,
              sectionTitle: (0, _._)("#Community_Home_Header_GameHubs_Popular"),
            }),
          ),
          _.createElement(
            _._,
            {
              onFocus: () => _(!0),
              onBlur: (_) => {
                _.currentTarget.contains(_.relatedTarget) || _(!1);
              },
              className: _().Search,
            },
            _.createElement(
              _._,
              {
                className: _().SearchBar,
              },
              _.createElement(
                "div",
                {
                  className: _().InputContainer,
                },
                _.createElement(_._, {
                  onChange: async (_) => {
                    _(_.target.value);
                    const _ = await (async function (_) {
                      const _ = `${_._.COMMUNITY_BASE_URL}actions/SearchApps/${_}`;
                      return (await _().get(_)).data;
                    })(_.target.value);
                    _(_);
                  },
                  value: _,
                  className: _().Input,
                  placeholder: (0, _._)(
                    "#Community_Home_Header_FindGame_Placeholder",
                  ),
                }),
              ),
              _.createElement(
                "div",
                {
                  className: _().SearchIcon,
                },
                _.createElement(_.eSy, null),
              ),
            ),
            _ &&
              _.createElement(
                _._,
                {
                  className: _().SearchResultsCtn,
                },
                __webpack_require__.map((_) =>
                  _.createElement(
                    _._,
                    {
                      href: `${_._.COMMUNITY_BASE_URL}app/${_.appid}`,
                      key: _.appid,
                      className: _().SearchResult,
                    },
                    _.name,
                  ),
                ),
              ),
          ),
        );
      }
      function _(_) {
        const {
          appShortcuts: _,
          sectionTitle: __webpack_require__,
          withDivider: _,
        } = _;
        return _ && _.length
          ? _.createElement(
              "div",
              {
                className: _().AppHubShortcutsCtn,
              },
              _.createElement(
                "div",
                {
                  className: _().AppHubTitle,
                },
                __webpack_require__,
              ),
              _.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, _._)(
                    _().AppHubShortcutLinks,
                    _ ? _().Divider : null,
                  ),
                },
                _.map((_, _) =>
                  _.createElement(_, {
                    key: _,
                    appId: _,
                  }),
                ),
              ),
            )
          : null;
      }
      function _(_) {
        const _ = _._.Get().GetApp(_.appId);
        return _
          ? _.createElement(
              _._,
              {
                className: _().ShortcutLink,
                href: `${_._.COMMUNITY_BASE_URL}app/${_.appId}`,
              },
              _.createElement("img", {
                className: _().ShortcutImage,
                src: _.GetAssets().GetLibraryCapsuleURL(),
              }),
            )
          : null;
      }
      const _ = "subsection",
        _ = "browsefilter";
      function _() {
        const _ = (0, _._)(),
          _ = (0, _._)(_, _),
          _ = (0, _._)(_, _);
        return _.createElement(
          "div",
          null,
          _.createElement(_, {
            activeTab: _,
            activeSort: _,
          }),
          _.createElement(_, {
            activeTab: _,
            activeSort: _,
          }),
        );
      }
      function _(_) {
        const { activeTab: _, activeSort: __webpack_require__ } = _,
          _ = _.useRef(void 0);
        _.useEffect(() => {
          const _ = document.getElementById(_);
          if (_ && (null == _ ? void 0 : _.current)) {
            const _ = _.offsetLeft + _.clientWidth;
            _ > window.innerWidth &&
              _.current.scrollBy(_ - window.innerWidth, 0);
          }
        }, [null == _ ? void 0 : _.current]);
        return _.createElement(
          _._,
          {
            "flow-children": "row",
            className: _().TabContainer,
            ref: _,
          },
          [
            {
              label: "#Community_Home_Header_Filter_All",
              _: "",
            },
            {
              label: "#Community_Home_Header_Filter_Screenshots",
              _: "screenshots",
            },
            {
              label: "#Community_Home_Header_Filter_Artwork",
              _: "images",
            },
            {
              label: "#Community_Home_Header_Filter_Broadcasts",
              _: "broadcasts",
            },
            {
              label: "#Community_Home_Header_Filter_Videos",
              _: "videos",
            },
            {
              label: "#Community_Home_Header_Filter_Workshop",
              _: "workshop",
            },
            {
              label: "#Community_Home_Header_Filter_News",
              _: "news",
            },
            {
              label: "#Community_Home_Header_Filter_Guides",
              _: "guides",
            },
            {
              label: "#Community_Home_Header_Filter_Reviews",
              _: "reviews",
            },
          ].map((_, _) => {
            const _ = _ ? _ === _._ : 0 === _,
              _ = _._ ? `${_}=${_._}` : "",
              _ = __webpack_require__ ? `${_}=${__webpack_require__}` : "",
              _ = `${_._.COMMUNITY_BASE_URL}${_ || _ ? "?" : ""}${_}${_ ? "&" : ""}${_}`;
            return _.createElement(
              _._,
              {
                _: _._,
                href: _,
                key: _._,
                className: (0, _._)(_().Tab, _ ? _().ActiveTab : null),
              },
              (0, _._)(_.label),
            );
          }),
        );
      }
      function _(_) {
        const { activeTab: _, activeSort: __webpack_require__ } = _;
        return _.createElement(
          _._,
          {
            "flow-children": "row",
            className: _().SortContainer,
          },
          _.createElement(
            "div",
            {
              className: _().SortIcon,
            },
            _.createElement(_.LPs, null),
          ),
          [
            {
              label: "#Community_Home_Header_BrowseFilter_Popular",
              _: "",
            },
            {
              label: "#Community_Home_Header_BrowseFilter_Recent",
              _: "mostrecent",
            },
          ].map((_, _) => {
            const _ = __webpack_require__
                ? __webpack_require__ === _._
                : 0 === _,
              _ = _ ? `${_}=${_}` : "",
              _ = _._ ? `${_}=${_._}` : "",
              _ = `${_._.COMMUNITY_BASE_URL}${_ || _ ? "?" : ""}${_}${_ ? "&" : ""}${_}`;
            return _.createElement(
              _._,
              {
                href: _,
                key: _._,
                className: (0, _._)(_().Sort, _ ? _().ActiveSort : null),
              },
              (0, _._)(_.label),
            );
          }),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "FocusNavHistoryID",
        _ = new _._("FocusHistory").Debug;
      function _(_) {
        const { children: _, timeoutMS: __webpack_require__, ..._ } = _,
          _ = (function (_ = 2) {
            const _ = (0, _._)(),
              _ = _.useRef(void 0),
              _ = (0, _._)(),
              _ = _._.IN_STEAMUI,
              _ = (null == _ ? void 0 : _.state) && _.state[_],
              _ = _.useRef(void 0),
              [_, _] = _.useState(_);
            return (
              _.useLayoutEffect(() => {
                if (!_.current) return;
                const _ = _.current;
                return _.Node().Tree.WindowContext.FocusChangedCallbacks.Register(
                  (_, _, _) => {
                    const _ = _.location;
                    let _ = _.state && _.state[_];
                    _ ||
                      ((_ = _ ? `State_${_.key}` : `State_${_.Node().Tree._}`),
                      (_.current = _),
                      _.replace({
                        ..._,
                        state: {
                          ..._.state,
                          [_]: _,
                        },
                      })),
                      _.current == _ &&
                        (_
                          ? _.SaveState(_)
                          : window.history.replaceState(
                              {
                                ...window.history.state,
                                [_]: (0, _._)(_.Node()),
                              },
                              "",
                            ));
                  },
                ).Unregister;
              }, [_, _]),
              _.useLayoutEffect(() => {
                if (_.current && _.current != _) {
                  if (!_) return void _(void 0);
                  const _ = _.current.NavTree().DeferredFocus;
                  _.SuppressFocus(),
                    _(
                      `Start restoring history for ${_} in tree ${_.current.NavTree()._}, suppressing focus`,
                    );
                  const _ = window.setTimeout(() => {
                    _(_);
                  }, _);
                  return () => {
                    window.clearTimeout(_), _.ExecuteQueuedFocus();
                  };
                }
              }, [_, _]),
              _.useEffect(() => {
                var _;
                if (!_ || !_.current) return;
                const _ = _
                    ? null
                    : null === (_ = window.history.state) || void 0 === _
                      ? void 0
                      : _[_],
                  _ = _.current.NavTree().DeferredFocus;
                let _ = !1;
                _
                  ? (_ = _.current.RestoreState(_, 1))
                  : _ && ((0, _._)(_.current.Node(), _, 0), (_ = !0)),
                  _(
                    `Completed restoring history for state ${_} - ${_ ? "had history." : "no history for this state."}`,
                  ),
                  _ ? _.Reset() : _.ExecuteQueuedFocus(),
                  (_.current = _);
              }, [_, _, _]),
              _
            );
          })(__webpack_require__);
        return _.createElement(
          _._,
          {
            ..._,
            navRef: _,
          },
          _,
        );
      }
      const _ = _.forwardRef(function (_, _) {
        const { children: __webpack_require__, navTreeRef: _, ..._ } = _,
          _ = _.useRef(void 0),
          _ = (0, _._)(_, _),
          _ = (0, _._)(),
          _ = (0, _._)("__nav_tree_root");
        return _.createElement(
          _._,
          {
            ..._,
            navTreeRef: _,
            ref: _,
            parentEmbeddedNavTree: _,
            disabledRoot: !_,
          },
          _.createElement(
            _,
            {
              style: {
                display: "contents",
              },
            },
            _.createElement(
              _._,
              {
                disableFocusRing: !_,
              },
              __webpack_require__,
            ),
          ),
        );
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        let _;
        if ("string" == typeof _) _ = _;
        else if ("location" in _) _ = _.location.search;
        else {
          if (!("search" in _)) return;
          _ = _.search;
        }
        const _ = new URLSearchParams(__webpack_require__.substring("chunkid"));
        if (_.has(_)) {
          const _ = _.getAll(_);
          return _[_.length - 1];
        }
      }
      function _(_, _, _, _ = !1) {
        const _ = new URLSearchParams(_.location.search.substring(1));
        if (null != _ && null != _) {
          if (_.get(_) == _) return;
          _.set(_, _);
        } else {
          if (!_.has(_)) return;
          _.delete(_);
        }
        _
          ? _.replace(`?${_.toString()}`, {
              ..._.location.state,
            })
          : _.push(`?${_.toString()}`);
      }
      function _(_, _) {
        const _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _.useMemo)(() => {
            const _ = _(_.search, _);
            return null != _ && null != _
              ? null != _ && null != _
                ? "boolean" == typeof _
                  ? _.constructor("false" !== _)
                  : _.constructor(_)
                : _
              : _;
          }, [_.search, _, _]),
          _ = (0, _.useCallback)(
            (_, _ = !1) => {
              _(_, _, null != _ && null != _ ? String(_) : null, _);
            },
            [_, _],
          );
        return [_, _];
      }
      function _(_, _, __webpack_require__ = !1) {
        const _ = new URLSearchParams(_.location.search.substring(1));
        for (const _ in _)
          if (_.hasOwnProperty(_)) {
            const _ = _[_];
            _.delete(_), null != _ && null != _ && _.append(_, _);
          }
        _
          ? _.replace(`?${_.toString()}`, {
              ..._.location.state,
            })
          : _.push(`?${_.toString()}`);
      }
    },
  },
]);
