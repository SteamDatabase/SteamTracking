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
        _ = __webpack_require__("chunkid");
      function _() {
        const _ = (0, _.useRef)(void 0);
        return (
          (0, _.useEffect)(() => {
            _.current && _.current.TakeFocus();
          }, []),
          (0, _.jsxs)(_._, {
            navRef: _,
            className: _().CommunityHomeHeader,
            children: [
              (0, _.jsxs)("div", {
                className: _().CommunityHomeHeaderTitleSection,
                children: [
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("div", {
                        className: _().CommunityHomeHeaderTitle,
                        children: (0, _._)("#Community_Home_Header_Title"),
                      }),
                      (0, _.jsx)("div", {
                        className: _().CommunityHomeHeaderSubtitle,
                        children: (0, _._)("#Community_Home_Header_Subtitle"),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    className: _().AddFriendBtn,
                    href: `${_._.COMMUNITY_BASE_URL}search/users/`,
                    children: (0, _._)(
                      "#Community_Home_Header_AddFriend_Button",
                    ),
                  }),
                ],
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {}),
            ],
          })
        );
      }
      function _() {
        const [_, _] = (0, _.useState)(""),
          [_, _] = (0, _.useState)([]),
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
                  (0, _._)(_, {
                    include_assets: !0,
                  }) === _._,
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
        return (0, _.jsxs)("div", {
          className: _().CommunityHomeHeaderContent,
          children: [
            (0, _.jsxs)(_._, {
              className: _().AppHubsCtn,
              children: [
                (0, _.jsx)(_, {
                  appShortcuts: _.data.personalAppIds,
                  sectionTitle: (0, _._)(
                    "#Community_Home_Header_GameHubs_ForYou",
                  ),
                  withDivider: _.data.popularAppIds.length > 0,
                }),
                (0, _.jsx)(_, {
                  appShortcuts: _.data.popularAppIds,
                  sectionTitle: (0, _._)(
                    "#Community_Home_Header_GameHubs_Popular",
                  ),
                }),
              ],
            }),
            (0, _.jsxs)(_._, {
              onFocus: () => _(!0),
              onBlur: (_) => {
                _.currentTarget.contains(_.relatedTarget) || _(!1);
              },
              className: _().Search,
              children: [
                (0, _.jsxs)(_._, {
                  className: _().SearchBar,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().InputContainer,
                      children: (0, _.jsx)(_._, {
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
                    }),
                    (0, _.jsx)("div", {
                      className: _().SearchIcon,
                      children: (0, _.jsx)(_.eSy, {}),
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    className: _().SearchResultsCtn,
                    children: __webpack_require__.map((_) =>
                      (0, _.jsx)(
                        _._,
                        {
                          href: `${_._.COMMUNITY_BASE_URL}app/${_.appid}`,
                          className: _().SearchResult,
                          children: _.name,
                        },
                        _.appid,
                      ),
                    ),
                  }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const { appShortcuts: _, sectionTitle: _, withDivider: _ } = _;
        return _ && _.length
          ? (0, _.jsxs)("div", {
              className: _().AppHubShortcutsCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _().AppHubTitle,
                  children: _,
                }),
                (0, _.jsx)("div", {
                  "flow-children": "row",
                  className: (0, _._)(
                    _().AppHubShortcutLinks,
                    _ ? _().Divider : null,
                  ),
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        appId: _,
                      },
                      _,
                    ),
                  ),
                }),
              ],
            })
          : null;
      }
      function _(_) {
        const _ = _._.Get().GetApp(_.appId);
        return _
          ? (0, _.jsx)(_._, {
              className: _().ShortcutLink,
              href: `${_._.COMMUNITY_BASE_URL}app/${_.appId}`,
              children: (0, _.jsx)("img", {
                className: _().ShortcutImage,
                src: _.GetAssets().GetLibraryCapsuleURL(),
              }),
            })
          : null;
      }
      const _ = "subsection",
        _ = "browsefilter";
      function _() {
        const _ = (0, _._)(),
          _ = (0, _._)(_, _),
          _ = (0, _._)(_, _);
        return (0, _.jsxs)("div", {
          children: [
            (0, _.jsx)(_, {
              activeTab: _,
              activeSort: _,
            }),
            (0, _.jsx)(_, {
              activeTab: _,
              activeSort: _,
            }),
          ],
        });
      }
      function _(_) {
        const { activeTab: _, activeSort: _ } = _,
          _ = _.useRef(void 0);
        _.useEffect(() => {
          const _ = document.getElementById(_);
          if (_ && (null == _ ? void 0 : _.current)) {
            const _ = _.offsetLeft + _.clientWidth;
            _ > window.innerWidth &&
              _.current.scrollBy(_ - window.innerWidth, 0);
          }
        }, [null == _ ? void 0 : _.current]);
        return (0, _.jsx)(_._, {
          "flow-children": "row",
          className: _().TabContainer,
          ref: _,
          children: [
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
              _ = _ ? `${_}=${_}` : "",
              _ = `${_._.COMMUNITY_BASE_URL}${_ || _ ? "?" : ""}${_}${_ ? "&" : ""}${_}`;
            return (0, _.jsx)(
              _._,
              {
                _: _._,
                href: _,
                className: (0, _._)(_().Tab, _ ? _().ActiveTab : null),
                children: (0, _._)(_.label),
              },
              _._,
            );
          }),
        });
      }
      function _(_) {
        const { activeTab: _, activeSort: _ } = _;
        return (0, _.jsxs)(_._, {
          "flow-children": "row",
          className: _().SortContainer,
          children: [
            (0, _.jsx)("div", {
              className: _().SortIcon,
              children: (0, _.jsx)(_.LPs, {}),
            }),
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
              const _ = _ ? _ === _._ : 0 === _,
                _ = _ ? `${_}=${_}` : "",
                _ = _._ ? `${_}=${_._}` : "",
                _ = `${_._.COMMUNITY_BASE_URL}${_ || _ ? "?" : ""}${_}${_ ? "&" : ""}${_}`;
              return (0, _.jsx)(
                _._,
                {
                  href: _,
                  className: (0, _._)(_().Sort, _ ? _().ActiveSort : null),
                  children: (0, _._)(_.label),
                },
                _._,
              );
            }),
          ],
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 1,
        _ = 2,
        _ = 3;
      function _(_, _, _, _) {
        const _ = (0, _.useRef)(void 0),
          _ = (0, _.useRef)(void 0),
          _ = (0, _._)();
        _.current = _;
        const [_, _] = (0, _.useState)(void 0),
          {
            include_assets: _,
            include_release: _,
            include_platforms: _,
            include_all_purchase_options: _,
            include_screenshots: _,
            include_trailers: _,
            include_ratings: _,
            include_tag_count: _,
            include_reviews: _,
            include_basic_info: _,
            include_supported_languages: _,
            include_full_description: _,
            include_included_items: _,
            include_assets_without_overrides: _,
            apply_user_filters: _,
            include_links: _,
            include_extra_details: _,
          } = _;
        if (
          ((0, _.useEffect)(() => {
            const _ = {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
            };
            let _ = null;
            return (
              !_ ||
                _ < 0 ||
                _._.Get().BHasStoreItem(_, _, _) ||
                (void 0 !== _ && _ && _ == _.current) ||
                (_ !== _.current && (_(void 0), (_.current = _)),
                (_ = _().CancelToken.source()),
                _._.Get()
                  .QueueStoreItemRequest(_, _, _)
                  .then((_) => {
                    (null == _ ? void 0 : _.token.reason) ||
                      _.current !== _ ||
                      _(_ == _._),
                      _();
                  })),
              () =>
                null == _ ? void 0 : _.cancel("useStoreItemCache: unmounting")
            );
          }, [
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
          ]),
          !_)
        )
          return [null, _];
        if (!1 === _) return [void 0, _];
        if (_._.Get().BIsStoreItemMissing(_, _)) return [void 0, _];
        if (!_._.Get().BHasStoreItem(_, _, _)) return [void 0, _];
        const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
        return _ ? [_, _] : [null, _];
      }
      function _(_, _, _) {
        return _(_, _._._, _, _);
      }
      function _(_, _, _) {
        return _(_, _._._, _, _);
      }
      function _(_, _, _) {
        var _;
        const [_, _] = _(_, _, _);
        let _;
        (null == _ ? void 0 : _.GetStoreItemType()) != _._._ ||
          (null === (_ = _.GetAssets()) || void 0 === _
            ? void 0
            : _.GetHeaderURL()) ||
          1 != (null == _ ? void 0 : _.GetIncludedAppIDs().length) ||
          (_ = _.GetIncludedAppIDs()[0]);
        const [_, _] = _(_, _);
        return _ && (null == _ ? void 0 : _.BIsVisible()) ? [_, _] : [_, _];
      }
      function _(_, _, _, _) {
        const _ = (0, _._)(),
          {
            include_assets: _,
            include_release: _,
            include_platforms: _,
            include_all_purchase_options: _,
            include_screenshots: _,
            include_trailers: _,
            include_ratings: _,
            include_tag_count: _,
            include_reviews: _,
            include_basic_info: _,
            include_supported_languages: _,
            include_full_description: _,
            include_included_items: _,
            include_assets_without_overrides: _,
            apply_user_filters: _,
            include_links: _,
            include_extra_details: _,
          } = _;
        if (
          ((0, _.useEffect)(() => {
            if (!_ || 0 == _.length) return;
            const _ = {
                include_assets: _,
                include_release: _,
                include_platforms: _,
                include_all_purchase_options: _,
                include_screenshots: _,
                include_trailers: _,
                include_ratings: _,
                include_tag_count: _,
                include_reviews: _,
                include_basic_info: _,
                include_supported_languages: _,
                include_full_description: _,
                include_included_items: _,
                include_assets_without_overrides: _,
                apply_user_filters: _,
                include_links: _,
                include_extra_details: _,
              },
              _ = _.filter(
                (_) =>
                  !(
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _)
                  ),
              );
            if (0 == _.length) return;
            const _ = _().CancelToken.source(),
              _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
            return (
              Promise.all(_).then(() => {
                _.token.reason || _();
              }),
              () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
          !_)
        )
          return _;
        if (
          !_.every(
            (_) =>
              _._.Get().BHasStoreItem(_, _, _) ||
              _._.Get().BIsStoreItemMissing(_, _),
          )
        )
          return _;
        return _.every((_) =>
          _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
        )
          ? _
          : _;
      }
      function _(_, _, _) {
        return _(_, _._._, _, _);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
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
      function _(_, _, _) {
        _(_, _, _, !0);
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
      function _(_, _, _ = !1) {
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
      function _(_, _) {
        _(_, _, !0);
      }
    },
  },
]);
