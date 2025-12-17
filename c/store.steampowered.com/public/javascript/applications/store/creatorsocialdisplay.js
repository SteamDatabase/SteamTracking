(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1402],
  {
    chunkid: (module) => {
      module.exports = {
        AppSocialLinksCtn: "_1wKUEA0cYqeUELXMe3Tp6T",
        AppSocialLinks: "YMmXzjieZthpAehitId4M",
        AppSocialLinkIcon: "OlwlyAPTdpJ7OieZmqzhc",
        AppSocialLinkWithText: "_3BKcmMK-HSkKmQqRCx9HdA",
        AppSocialText: "bJf5nxr6o9SG4mWXm7qz-",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_2ZSkHhlXwxpsIInroemxBn",
      };
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
        _ = __webpack_require__("chunkid");
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
                    _?.token.reason || _.current !== _ || _(1 == _), _();
                  })),
              () => _?.cancel("useStoreItemCache: unmounting")
            );
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
          !_)
        )
          return [null, 2];
        if (!1 === _) return [void 0, 2];
        if (_._.Get().BIsStoreItemMissing(_, _)) return [void 0, 2];
        if (!_._.Get().BHasStoreItem(_, _, _)) return [void 0, 1];
        const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
        return _ ? [_, 3] : [null, 2];
      }
      function _(_, _, _) {
        return _(_, 0, _, _);
      }
      function _(_, _, _) {
        return _(_, 2, _, _);
      }
      function _(_, _, _) {
        return _(_, 1, _, _);
      }
      function _(_, _, _) {
        const [_, _] = _(_, _, _);
        let _;
        1 != _?.GetStoreItemType() ||
          _.GetAssets()?.GetHeaderURL() ||
          1 != _?.GetIncludedAppIDs().length ||
          (_ = _.GetIncludedAppIDs()[0]);
        const [_, _] = _(_, _);
        return _ && _?.BIsVisible() ? [_, _] : [_, _];
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
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
          !_)
        )
          return 2;
        if (
          !_.every(
            (_) =>
              _._.Get().BHasStoreItem(_, _, _) ||
              _._.Get().BIsStoreItemMissing(_, _),
          )
        )
          return 1;
        return _.every((_) =>
          _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
        )
          ? 3
          : 2;
      }
      function _(_, _, _) {
        return _(_, 0, _, _);
      }
      function _(_, _, _) {
        return _(_, 2, _, _);
      }
      function _() {
        _.useEffect(
          () => (
            _._.Get().SetReturnUnavailableItems(!0),
            () => _._.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_) {
        switch (_) {
          case "discord_server":
            return 5;
          case "youtube":
            return 1;
          case "facebook":
            return 2;
          case "twitter":
            return 3;
          case "twitch":
            return 4;
          case "reddit":
            return 10;
          case "instagram":
            return 11;
          case "tumblr":
            return 12;
          case "qq":
            return 6;
          case "qqlink":
            return 18;
          case "qqchannel":
            return 23;
          case "bilibili":
            return 8;
          case "weibo":
            return 9;
          case "wechat":
            return 17;
          case "tieba":
            return 13;
          case "tiktok":
            return 14;
          case "douyin":
            return 19;
          case "bluesky":
            return 20;
          case "mastodon":
            return 21;
          case "threads":
            return 22;
          case "vk":
            return 7;
          case "telegram":
            return 15;
          case "linkedin":
            return 16;
          case "rednote":
            return 24;
        }
        return 0;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { appid: _ } = _;
        return _.createElement(
          "div",
          {
            className: _().AppSocialLinksCtn,
          },
          _.createElement(_, {
            appid: _,
          }),
        );
      }
      function _(_) {
        const { appid: _ } = _,
          [__webpack_require__] = (0, _._)(_, {
            include_basic_info: !0,
            include_links: !0,
          });
        if (!__webpack_require__) return null;
        const _ = __webpack_require__.GetLinks();
        return _ && 0 != _.length && _._.IMG_URL
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _().EventEditorTextTitle,
                    "EventEditorTextTitle",
                  ),
                },
                (0, _._)("#EventDisplay_SocialTitle"),
              ),
              _.createElement(_, {
                _: "" + _,
                rgSocialMedia: _,
              }),
            )
          : null;
      }
      function _(_) {
        return (0, _.useMemo)(
          () =>
            _
              ? _.map((_) => {
                  const _ = {
                    link_type: _(_.type),
                  };
                  return (
                    6 == _.link_type || 17 == _.link_type
                      ? (_.text = _.link)
                      : (_.url = _.link),
                    _
                  );
                })
              : [],
          [_],
        );
      }
      function _(_) {
        const { gidClanEvent: _, rgSocial: __webpack_require__ } = _,
          _ = _(__webpack_require__);
        return _ && 0 != _.length && _._.IMG_URL
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _().EventEditorTextTitle,
                    "EventEditorTextTitle",
                  ),
                },
                (0, _._)("#EventDisplay_Sale_SocialTitle"),
              ),
              _.createElement(_, {
                _: _,
                rgSocialMedia: _,
              }),
            )
          : null;
      }
      const _ = [6, 23, 18, 8, 9, 19, 24];
      function _(_) {
        const { _: _, rgSocialMedia: __webpack_require__, className: _ } = _,
          _ = (0, _._)();
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().AppSocialLinks, _),
          },
          __webpack_require__
            .filter((_) => !_ || _.includes(_.link_type || 0))
            .map((_) =>
              _.url
                ? _.createElement(_, {
                    key: "app_social_link_" + _ + "_" + _.link_type,
                    social: _,
                  })
                : _.createElement(_, {
                    key:
                      "app_social_text_" + _ + "_" + _.link_type + "_" + _.text,
                    social: _,
                  }),
            ),
        );
      }
      function _(_) {
        const { social: _ } = _;
        return _.url
          ? _.createElement(
              "a",
              {
                href: (0, _._)(_.url, !0),
                target: _._.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
              },
              _.createElement(
                _._,
                {
                  toolTipContent: _.url,
                },
                _.createElement(_, {
                  social: _,
                }),
              ),
            )
          : null;
      }
      function _(_) {
        const { social: _ } = _;
        return _.createElement(
          "div",
          {
            className: _().AppSocialLinkWithText,
          },
          _.createElement(
            _._,
            {
              toolTipContent: _.text,
            },
            _.createElement(_, {
              social: _,
            }),
          ),
          _.createElement(
            "div",
            {
              className: _().AppSocialText,
            },
            _.text,
          ),
        );
      }
      function _(_) {
        const { social: _ } = _;
        return _.createElement(_, {
          linkType: _.link_type || 0,
          className: _().AppSocialLinkIcon,
        });
      }
      function _(_) {
        const { linkType: _, ...__webpack_require__ } = _;
        switch (_) {
          case 1:
            return _.createElement(_.agV, {
              ...__webpack_require__,
            });
          case 2:
            return _.createElement(_.ZnA, {
              ...__webpack_require__,
            });
          case 3:
            return _.createElement(_._, {
              ...__webpack_require__,
            });
          case 4:
            return _.createElement(_.ofN, {
              ...__webpack_require__,
            });
          case 5:
            return _.createElement(_.Bki, {
              ...__webpack_require__,
            });
          case 6:
          case 18:
          case 23:
            return _.createElement(_.$vK, {
              ...__webpack_require__,
            });
          case 7:
            return _.createElement(_.OSJ, {
              ...__webpack_require__,
            });
          case 8:
            return _.createElement(_.nm_, {
              ...__webpack_require__,
            });
          case 9:
            return _.createElement(_.tIO, {
              ...__webpack_require__,
            });
          case 10:
            return _.createElement(_.Vt2, {
              ...__webpack_require__,
            });
          case 11:
            return _.createElement(_.Vgk, {
              ...__webpack_require__,
            });
          case 12:
            return _.createElement(_.VSd, {
              ...__webpack_require__,
            });
          case 13:
            return _.createElement(_.ccb, {
              ...__webpack_require__,
            });
          case 14:
            return _.createElement(_.rNt, {
              ...__webpack_require__,
            });
          case 15:
            return _.createElement(_.g$j, {
              ...__webpack_require__,
            });
          case 16:
            return _.createElement(_.BQz, {
              ...__webpack_require__,
            });
          case 17:
            return _.createElement(_.jdP, {
              ...__webpack_require__,
            });
          case 19:
            return _.createElement(_.bKN, {
              ...__webpack_require__,
            });
          case 20:
            return _.createElement(_.sDU, {
              ...__webpack_require__,
            });
          case 21:
            return _.createElement(_.MbF, {
              ...__webpack_require__,
            });
          case 22:
            return _.createElement(_.emH, {
              ...__webpack_require__,
            });
          case 24:
            return _.createElement(_.Yoo, {
              ...__webpack_require__,
            });
          case 25:
          case 0:
            return "invalid social media type";
        }
      }
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
        _ = __webpack_require__._(_);
      function _(_) {
        const { clanAccountID: _, items: __webpack_require__ } = _,
          _ = (0, _._)(__webpack_require__);
        return _
          ? _.createElement(_._, {
              _: "social_" + _,
              rgSocialMedia: _,
              className: _().Ctn,
            })
          : null;
      }
    },
  },
]);
