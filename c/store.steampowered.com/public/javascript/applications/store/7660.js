(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7660],
  {
    chunkid: (module) => {
      module.exports = {
        CornerSash: "_1tKrXofY3mdVjHya13I1Ks",
      };
    },
    chunkid: (module) => {
      module.exports = {
        bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD",
      };
    },
    chunkid: (module) => {
      module.exports = {
        CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA",
      };
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
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            _: _,
            imageType: __webpack_require__,
            bPreferAssetWithoutOverride: _,
          } = _,
          { storeItemAsset: _, storeItemDefaultInfo: _ } = (0, _._)(
            _,
            __webpack_require__,
            _,
          );
        if (void 0 === _ || !_)
          return _.createElement(_._, {
            size: "small",
            position: "center",
            string: (0, _._)("#Loading"),
          });
        if (null == _) return null;
        if (
          "library" === __webpack_require__ ||
          "vertical" == __webpack_require__
        )
          return _.createElement(_._, {
            _: _,
            bPreferAssetWithoutOverride: _,
          });
        let _,
          _,
          _ = (0, _._)(_, "header" === __webpack_require__),
          _ = "";
        if ("main" === __webpack_require__)
          (_ = _().mainCapsuleImgWidth),
            (_ = _().mainCapsuleImgHeight),
            (_ = _().MainCapsuleImageContainer);
        else
          (_ = _().headerCapsuleImgWidth),
            (_ = _().headerCapsuleImgHeight),
            (_ = _().HeaderCapsuleImageContainer);
        return _.createElement(
          "div",
          {
            className: (0, _._)(_, "CapsuleImageCtn"),
          },
          _.createElement(_._, {
            lazyLoad: !0,
            srcs: _,
            className: (0, _._)(_().CapsuleImage),
            width: _,
            height: _,
            alt: _.name,
          }),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _) {
        let _ = [];
        return (
          _ &&
            (function (_, _, _) {
              _
                ? _.push((0, _._)(_, "header"), (0, _._)(_, "main_capsule"))
                : _.push((0, _._)(_, "main_capsule"), (0, _._)(_, "header"));
            })(_, _, _),
          __webpack_require__.filter((_) => !!_)
        );
      }
      function _(_, _) {
        return {
          strStoreVerticalURL: (0, _._)(_, "hero_capsule"),
          strLibraryVerticalURL: (0, _._)(_, "library_capsule"),
        };
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            _: _,
            bPreferLibrary: __webpack_require__,
            bPreferAssetWithoutOverride: _,
          } = _,
          { storeItemDefaultInfo: _, storeItemAsset: _ } = (0, _._)(
            _,
            "vertical",
            _,
          ),
          [_, _] = _.useState(0);
        if (!_ || !_)
          return _.createElement("div", {
            className: _().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: _, strLibraryVerticalURL: _ } = (0, _._)(
          _,
          _,
        );
        if (_ && (!__webpack_require__ || !_))
          return _.createElement(
            "div",
            {
              className: (0, _._)(
                _().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
            },
            _.createElement("img", {
              src: _,
              className: _().CapsuleImage,
              alt: _.name,
            }),
            Boolean(4 == _.type) &&
              _.createElement("img", {
                className: _().CornerSash,
                src: `${_._.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                alt: "DLC",
              }),
          );
        if (_)
          return _.createElement(
            "div",
            {
              className: (0, _._)(
                _().LibraryFallbackAssetImageContainer,
                _().VerticalCapsule,
                __webpack_require__ ? _().ForceLibrarySizing : "",
              ),
            },
            _.createElement("div", {
              className: _().FallbackBackground,
              style: {
                backgroundImage: `url(${_})`,
              },
            }),
            _.createElement("img", {
              src: _,
              className: _().CapsuleImage,
              alt: _.name,
            }),
          );
        const _ = (0, _._)(_, !0),
          _ = _.length - 1,
          _ = (_) => {
            const _ = _.indexOf(_);
            _ >= _ && _ < _.length - 1 && _(_ + 1);
          };
        if (_ < _.length) {
          const _ = _[_];
          return _.createElement(
            "div",
            {
              className: _().LibraryFallbackAssetImageContainer,
            },
            _.createElement("div", {
              className: _().FallbackBackground,
              style: {
                backgroundImage: `url(${_})`,
              },
            }),
            _.createElement(_._, {
              lazyLoad: !0,
              srcs: _,
              className: _().CapsuleImage,
              alt: _.name,
              onImageError: _,
            }),
          );
        }
        return _.createElement("div", {
          className: _().HeroCapsuleImageContainer,
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
      function _(_) {
        if (_) {
          if ("appid" in _) return "app";
          if ("bundleid" in _) return "bundle";
          if ("packageid" in _) return "sub";
        }
      }
      function _(_) {
        const {
            _: _,
            hoverClassName: __webpack_require__,
            fnGetIDOverride: _,
            fnHoverState: _,
            children: _,
          } = _,
          _ = _.useRef(null),
          _ = _.useCallback(
            (_) => {
              const _ = _(_);
              _ &&
                (_ && _(!0),
                window.GameHover &&
                  window.GameHover(_ ? _() : _.current, _, "global_hover", {
                    type: _,
                    _: (0, _._)(_)._,
                    _: 1,
                  }));
            },
            [_, _, _],
          ),
          _ = _.useCallback(
            (_) => {
              _(_) &&
                (_ && _.relatedTarget && _(!1),
                window.HideGameHover &&
                  window.HideGameHover(_ ? _() : _.current, _, "global_hover"));
            },
            [_, _, _],
          );
        return _.createElement(
          "div",
          {
            ref: _,
            className: __webpack_require__,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
          },
          _,
        );
      }
      function _(_) {
        const {
            _: _,
            strExtraParams: __webpack_require__,
            fnOnClickOverride: _,
            strOverrideURL: _,
          } = _,
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)(
            _ ||
              (_ && "creatorid" in _
                ? (0, _._)(
                    `${_._.STORE_BASE_URL}curator/${((0, _._))(_)._}${__webpack_require__ ? `?${__webpack_require__}` : ""}`,
                    _,
                    _,
                  )
                : (0, _._)(
                    `${_._.STORE_BASE_URL}${_(_)}/${((0, _._))(_)._}${__webpack_require__ ? `?${__webpack_require__}` : ""}`,
                    _,
                    _,
                  )),
          );
        return _.createElement(
          _,
          {
            ..._,
          },
          _.createElement(
            _._,
            {
              className: _.className,
              href: _ ? void 0 : _,
              target: _._.IN_CLIENT || _ ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: _,
            },
            _.children,
          ),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, __webpack_require__ = !1) {
        const { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_, __webpack_require__);
        let _;
        _ &&
          1 == _.included_appids?.length &&
          !(function (_, _) {
            if (!_) return !1;
            switch (_) {
              case "header":
                return !!_.header;
              case "main":
                return !!_.main_capsule;
              case "vertical":
              case "library":
                return !!_.hero_capsule || !!_.library_capsule;
              default:
                return (0, _._)(_, `Unhandled imageType: ${_}`), !1;
            }
          })(_, _) &&
          _.item_type &&
          [1, 2].includes(_.item_type) &&
          (_ = {
            appid: _.included_appids[0],
          });
        const { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_, __webpack_require__),
          _ = _?.visible ? _ : _;
        return {
          storeItemAsset: _?.visible ? _ : _,
          storeItemDefaultInfo: _,
        };
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
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        accountid;
        steamid;
        appid;
        hub_popular;
        popular;
        relay_broadcast_id;
        rowversion;
        thumbnail_http_address;
        nAppIDVOD;
        title = void 0;
        viewer_count = void 0;
        whitelist_rank;
        gamedata_subtitle = void 0;
        store_title;
        left_panel;
        right_panel;
        snr;
        broadcast_chat_visibility;
        default_selection_priority = _.k_eGeneral;
        current_selection_priority = _.k_eGeneral;
      }
      (0, _._)([_._], _.prototype, "title", void 0),
        (0, _._)([_._], _.prototype, "viewer_count", void 0),
        (0, _._)([_._], _.prototype, "gamedata_subtitle", void 0),
        (0, _._)([_._], _.prototype, "current_selection_priority", void 0);
      const _ = "primary",
        _ = "featured",
        _ = "default_featured";
      var _;
      function _(_) {
        switch (_) {
          case _:
            return _.k_ePrimary;
          case _:
            return _.k_eFeatured;
          case _:
            return _.k_eDefaultFeatured;
          default:
            return _.k_eGeneral;
        }
      }
      function _(_) {
        const _ = _;
        return (
          !!(
            _ &&
            "number" == typeof _.success &&
            _.filtered &&
            Array.isArray(_.filtered) &&
            _.broadcast_chat_visibility
          ) &&
          (0 == _.filtered.length || "string" == typeof _.filtered[0].accountid)
        );
      }
      !(function (_) {
        (_[(_.k_ePrimary = 3)] = "k_ePrimary"),
          (_[(_.k_eFeatured = 2)] = "k_eFeatured"),
          (_[(_.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (_[(_.k_eGeneral = 0)] = "k_eGeneral");
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _ = !1) {
        if (_)
          return _ && (0, _._)(_)
            ? `${_._.STORE_BASE_URL}app/${((0, _._))(_)[0]}`
            : `${_._.STORE_BASE_URL}${_.store_url_path}`;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return _.createElement(
          "div",
          {
            className: _.bordered_live_stream_icon,
          },
          (0, _._)("#home_page_live_broadcast"),
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
        _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid"));
      function _() {
        return (0, _._)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const _ = await (async function () {
              let _ = (0, _._)(
                "broadcast_available_for_page",
                "application_config",
              );
              if ((0, _._)(_)) {
                const _ = new Set();
                return (
                  _.filtered.forEach((_) => {
                    _.appid && _.add(_.appid);
                  }),
                  Array.from(_)
                );
              }
              return [];
            })();
            return new Set(_);
          },
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            appids: _,
            hide_status_banners: __webpack_require__,
            show_early_access: _,
          } = _,
          { data: _ } = (0, _._)(),
          { data: _ } = (0, _._)(),
          _ = _.length > 0 && _.every((_) => _ && _.has(_)),
          _ = _.length > 0 && _.every((_) => _ && _.has(_)),
          _ = (function (_) {
            const { data: _ } = _(),
              [__webpack_require__, _] = (0, _.useState)(!1),
              _ = (0, _._)(),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                if (!_ || 0 == _.length || !_) return _(!1);
                (async () => {
                  const _ = await Promise.all(
                    _.map((_) =>
                      _.fetchQuery(
                        (0, _._)(_, {
                          appid: _,
                        }),
                      ),
                    ),
                  );
                  _(
                    __webpack_require__.some(
                      (_) =>
                        (_ && _.appid && _.has(_.appid)) ||
                        (_?.related_items?.parent_appid &&
                          _.has(_.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [_, _, _, _]),
              __webpack_require__
            );
          })(_),
          _ = _ && !__webpack_require__,
          _ = _ && !__webpack_require__,
          _ = !__webpack_require__ && _;
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().CapsuleDecorators, "CapsuleDecorators"),
          },
          _ &&
            _.createElement(
              "span",
              {
                className: (0, _._)(_().Banner, _().Blue),
              },
              _.createElement("img", {
                src: (0, _._)(_),
                className: _().LinesImg,
              }),
              (0, _._)("#Sale_InLibrary"),
            ),
          _ &&
            _.createElement(
              "span",
              {
                className: _().Banner,
              },
              _.createElement(_.qnF, {
                className: _().LinesImg,
              }),
              (0, _._)("#Sale_OnWishlist"),
            ),
          _ &&
            !_ &&
            !_ &&
            _.createElement(_, {
              appids: _,
            }),
          _ && _.createElement(_._, null),
        );
      }
      function _(_) {
        const { appids: _ } = _,
          _ = (function (_) {
            const [_, _] = (0, _.useState)(!1),
              _ = (0, _._)(),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                if (!_ || 0 == _.length) return __webpack_require__(!1);
                (async () => {
                  const _ = await Promise.all(
                    _.map((_) =>
                      _.fetchQuery(
                        (0, _._)(_, {
                          appid: _,
                        }),
                      ),
                    ),
                  );
                  __webpack_require__(_.some((_) => _ && _.is_early_access));
                })();
              }, [_, _, _]),
              _
            );
          })(_);
        return _
          ? _.createElement(
              "span",
              {
                className: (0, _._)(_().Banner, _().EarlyAccessGradient),
              },
              (0, _._)("#Sale_EarlyAccess"),
            )
          : null;
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
        _ = __webpack_require__("chunkid");
      function _(_, _, _, _, _, _) {
        if (!_) return;
        if (!(0, _._)(_.item_type))
          return void (0, _._)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + _.item_type,
          );
        const _ = (0, _._)(`${(0, _._)(_, _)}${_ ? `?${_}` : ""}`, _);
        return {
          onClick: (_) => {
            let _ = (0, _._)(_) || window;
            _
              ? _(_)
              : _.startsWith("steam://") || (_.location.href = (0, _._)(_));
          },
          onOKActionDescription: (0, _._)("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return "bundle" == _
          ? "bundle"
          : "sub" == _
            ? "sub"
            : ((0, _._)(_), "app");
      }
      function _(_) {
        return 2 == _ ? "bundle" : 1 == _ ? "sub" : "app";
      }
      const _ = (_) => {
        const { appid: _ } = _,
          _ = _.createElement(
            "div",
            {
              className: "ImpressionTrackedElement",
            },
            _.children,
          );
        return _
          ? _.createElement(
              _._,
              {
                appID: _,
              },
              _,
            )
          : _;
      };
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { bAllowOutsideOfDeck: _ } = _;
        return (0, _._)() || _
          ? _.createElement(_, {
              ..._,
            })
          : null;
      }
      function _(_) {
        const { className: _, _: __webpack_require__ } = _,
          _ = (0, _._)(__webpack_require__),
          [_, _] = (0, _._)();
        let _ = "unknown";
        if (2 == _)
          switch (_.data?.steam_os_compat_category) {
            case 2:
              _ = "steamoscompatible";
              break;
            case 1:
              _ = "steamosunsupported";
              break;
            case 0:
              _ = "steamosunknown";
          }
        else
          switch (_.data?.steam_deck_compat_category) {
            case 3:
              _ = "verified";
              break;
            case 2:
              _ = "playable";
              break;
            case 1:
              _ = "unsupported";
          }
        return _.createElement("div", {
          className: (0, _._)(_.CompatIcon, "ds_steam_deck_compat", _, _),
        });
      }
    },
  },
]);
