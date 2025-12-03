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
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
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
                    _?.token.reason ||
                      _.current !== _ ||
                      _(_ == _._.k_EResultOK),
                      _();
                  })),
              () => _?.cancel("useStoreItemCache: unmounting")
            );
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
          !_)
        )
          return [null, _.k_EStoreItemCacheState_Unavailable];
        if (!1 === _) return [void 0, _.k_EStoreItemCacheState_Unavailable];
        if (_._.Get().BIsStoreItemMissing(_, _))
          return [void 0, _.k_EStoreItemCacheState_Unavailable];
        if (!_._.Get().BHasStoreItem(_, _, _))
          return [void 0, _.k_EStoreItemCacheState_Loading];
        const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
        return _
          ? [_, _.k_EStoreItemCacheState_Found]
          : [null, _.k_EStoreItemCacheState_Unavailable];
      }
      function _(_, _, _) {
        return _(_, _._.k_EStoreItemType_App, _, _);
      }
      function _(_, _, _) {
        return _(_, _._.k_EStoreItemType_Bundle, _, _);
      }
      function _(_, _, _) {
        return _(_, _._.k_EStoreItemType_Package, _, _);
      }
      function _(_, _, _) {
        const [_, _] = _(_, _, _);
        let _;
        _?.GetStoreItemType() != _._.k_EStoreItemType_Package ||
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
          return _.k_EStoreItemCacheState_Unavailable;
        if (
          !_.every(
            (_) =>
              _._.Get().BHasStoreItem(_, _, _) ||
              _._.Get().BIsStoreItemMissing(_, _),
          )
        )
          return _.k_EStoreItemCacheState_Loading;
        return _.every((_) =>
          _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
        )
          ? _.k_EStoreItemCacheState_Found
          : _.k_EStoreItemCacheState_Unavailable;
      }
      function _(_, _, _) {
        return _(_, _._.k_EStoreItemType_App, _, _);
      }
      function _(_, _, _) {
        return _(_, _._.k_EStoreItemType_Bundle, _, _);
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
      !(function (_) {
        (_[(_.k_EStoreItemCacheState_Loading = 1)] =
          "k_EStoreItemCacheState_Loading"),
          (_[(_.k_EStoreItemCacheState_Unavailable = 2)] =
            "k_EStoreItemCacheState_Unavailable"),
          (_[(_.k_EStoreItemCacheState_Found = 3)] =
            "k_EStoreItemCacheState_Found");
      })(_ || (_ = {}));
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
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
        switch (_) {
          case "discord_server":
            return _._.k_EStoreLinkType_Discord;
          case "youtube":
            return _._.k_EStoreLinkType_YouTube;
          case "facebook":
            return _._.k_EStoreLinkType_Facebook;
          case "twitter":
            return _._.k_EStoreLinkType_Twitter;
          case "twitch":
            return _._.k_EStoreLinkType_Twitch;
          case "reddit":
            return _._.k_EStoreLinkType_Reddit;
          case "instagram":
            return _._.k_EStoreLinkType_Instagram;
          case "tumblr":
            return _._.k_EStoreLinkType_Tumblr;
          case "qq":
            return _._.k_EStoreLinkType_QQ;
          case "qqlink":
            return _._.k_EStoreLinkType_QQLink;
          case "qqchannel":
            return _._.k_EStoreLinkType_QQChannel;
          case "bilibili":
            return _._.k_EStoreLinkType_Bilibili;
          case "weibo":
            return _._.k_EStoreLinkType_Weibo;
          case "wechat":
            return _._.k_EStoreLinkType_WeChat;
          case "tieba":
            return _._.k_EStoreLinkType_Tieba;
          case "tiktok":
            return _._.k_EStoreLinkType_Tiktok;
          case "douyin":
            return _._.k_EStoreLinkType_Douyin;
          case "bluesky":
            return _._.k_EStoreLinkType_Bluesky;
          case "mastodon":
            return _._.k_EStoreLinkType_Mastodon;
          case "threads":
            return _._.k_EStoreLinkType_Threads;
          case "vk":
            return _._.k_EStoreLinkType_VK;
          case "telegram":
            return _._.k_EStoreLinkType_Telegram;
          case "linkedin":
            return _._.k_EStoreLinkType_LinkedIn;
          case "rednote":
            return _._.k_EStoreLinkType_RedNote;
        }
        return _._.k_EStoreLinkType_None;
      }
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
                    _.link_type == _._.k_EStoreLinkType_QQ ||
                    _.link_type == _._.k_EStoreLinkType_WeChat
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
      function _(_) {
        const { _: _, rgSocialMedia: __webpack_require__, className: _ } = _;
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().AppSocialLinks, _),
          },
          __webpack_require__.map((_) =>
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
        return _.createElement(
          "a",
          {
            href: (0, _._)(_.url),
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
        );
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
          linkType: _.link_type,
          className: _().AppSocialLinkIcon,
        });
      }
      function _(_) {
        const { linkType: _, ...__webpack_require__ } = _;
        switch (_) {
          case _._.k_EStoreLinkType_YouTube:
            return _.createElement(_.agV, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Facebook:
            return _.createElement(_.ZnA, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Twitter:
            return _.createElement(_._, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Twitch:
            return _.createElement(_.ofN, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Discord:
            return _.createElement(_.Bki, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_QQ:
          case _._.k_EStoreLinkType_QQLink:
          case _._.k_EStoreLinkType_QQChannel:
            return _.createElement(_.$vK, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_VK:
            return _.createElement(_.OSJ, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Bilibili:
            return _.createElement(_.nm_, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Weibo:
            return _.createElement(_.tIO, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Reddit:
            return _.createElement(_.Vt2, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Instagram:
            return _.createElement(_.Vgk, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Tumblr:
            return _.createElement(_.VSd, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Tieba:
            return _.createElement(_.ccb, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Tiktok:
            return _.createElement(_.rNt, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Telegram:
            return _.createElement(_.g$j, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_LinkedIn:
            return _.createElement(_.BQz, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_WeChat:
            return _.createElement(_.jdP, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Douyin:
            return _.createElement(_.bKN, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Bluesky:
            return _.createElement(_.sDU, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Mastodon:
            return _.createElement(_.MbF, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_Threads:
            return _.createElement(_.emH, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_RedNote:
            return _.createElement(_.Yoo, {
              ...__webpack_require__,
            });
          case _._.k_EStoreLinkType_MAX:
          case _._.k_EStoreLinkType_None:
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
