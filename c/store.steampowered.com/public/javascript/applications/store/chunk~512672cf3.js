(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [385],
  {
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        strMediumWidth: "800px",
        strMaxMobileWidth: "600px",
        MediaContainer: "-ap7mXqcxyhrxn5-5EaM8",
        MediaContainerMM: "_1XVJzaNLt0tgl6Pq5QI2tK",
        ScreenshotThumbnailRow: "COp9MkmgXCc5Y3ytJM70W",
        HilightGrid: "_28DkEkOjvTWfq0sU8m_i32",
        MainMediaCtn: "FATLceF4ncP8L8QnrQTXV",
        VideoThumbnail: "h0pphNa_Fdu4JUevL5V9y",
        ScreenshotDisplayCtn: "_20YpaGv3V_QArQyy15zAJc",
        MainCapsuleWithHover: "_30BxsjSFrUWCBKntWK9hPg",
        MainCapsule: "_2UuNsdHxhT9la27J_j3BFs",
        AppDetails: "ETHkFxrlPF1znTFXFtjtK",
        GameName: "udhKC-bUdlotRKphK3Fn2",
        ShortDesc: "_2e5PhNJqb68XISttHxdVF2",
        ThumbnialClickable: "_3B8X2c5pBF96hapgz03tC4",
        ThumbnailCtn: "rE40TQ86G7cjVETvUYZm3",
        videoPlaying: "_3D99vg3-OLr6XsvxrtzhZa",
        VideoPlayButton: "_2sJlIVAVWZ2I2iA6IO4pOv",
        VideoLargeContainer: "_3mzKCP4FLx7fUVeKrhZ1nn",
        VideoPopupContainers: "_2LqAoKcZgpOtpoj5_URVNJ",
        VideoLarge: "_3zPl6O67BYIiFOlq7FxlJP",
      };
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_),
          _ = (0, _.useMemo)(() => {
            if (!__webpack_require__) return [];
            const _ =
              __webpack_require__.categories?.supported_player_categoryids?.slice(
                0,
                1,
              ) || [];
            return (
              __webpack_require__.categories?.feature_categoryids?.forEach(
                (_) => _.push(_),
              ),
              __webpack_require__.categories?.controller_categoryids?.forEach(
                (_) => _.push(_),
              ),
              __webpack_require__.categories?.supported_player_categoryids
                ?.slice(1)
                .forEach((_) => _.push(_)),
              _
            );
          }, [__webpack_require__]);
        return _ && 0 != _.length
          ? _.createElement(
              "div",
              {
                className: (0, _._)(_().SaleTagBlockCtn, "SaleTagBlockCtn"),
              },
              Boolean(_?.length > 0)
                ? _.createElement(
                    "div",
                    {
                      className: (0, _._)(_().TagBox, _().Categories),
                    },
                    _.map((_) =>
                      _.createElement(_, {
                        key: "cat_" + _,
                        categoryID: _,
                      }),
                    ),
                  )
                : _.createElement("div", null, (0, _._)("#Broadcast_None")),
            )
          : null;
      }
      class _ {
        m_rgCategories;
        constructor() {
          this.m_rgCategories = (0, _._)(
            "feature_categories",
            "application_config",
          );
        }
        static g_Self = null;
        static Get() {
          return _.g_Self || (_.g_Self = new _()), _.g_Self;
        }
      }
      function _(_) {
        const { categoryID: _ } = _,
          _ = _.Get().m_rgCategories.find((_) => _.categoryid == _);
        return _
          ? _.createElement(
              "div",
              {
                className: _().Category,
              },
              _.createElement(
                _._,
                {
                  toolTipContent: _.name,
                },
                _.createElement("div", {
                  className: _().CategoryIcon,
                  style: {
                    background: `url(${_._.STORE_CDN_URL}/public/images/${_.image_path}) no-repeat center center/cover`,
                  },
                }),
              ),
            )
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _, bPopOutTrailerPlayback: __webpack_require__ } = _,
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)(),
          _ = _?.highlights?.filter((_) => !_ || _.all_ages),
          _ = _ && _?.length > 0 ? _[0] : void 0,
          _ = _.useCallback(() => {
            _ && (__webpack_require__ ? _(!0) : _((_) => !_));
          }, [_, __webpack_require__]);
        if (!_)
          return _.createElement(
            "div",
            {
              className: (0, _._)(_().HilightGrid, _().MediaContainer),
            },
            _.createElement(_._, {
              size: "medium",
            }),
          );
        const _ = _
          ? _.createElement(_, {
              trailer: _,
              bPlayVideo: _,
              fnTogglePlayTrailer: _,
            })
          : null;
        return _ ||
          (_ && _.all_ages_screenshots && _.all_ages_screenshots.length > 0)
          ? _.createElement(
              "div",
              {
                className: (0, _._)(_().HilightGrid, _().MediaContainer),
              },
              _.createElement(_, {
                elFeaturedInCenter: _,
                storeItemScreenshots: _,
                trailer: _,
                _: _,
                name: _.name || "",
              }),
              Boolean(__webpack_require__)
                ? _.createElement(_, {
                    _: _,
                    bShowModal: _,
                    hideModal: () => _(!1),
                  })
                : _.createElement(_, {
                    name: _.name || "",
                    trailer: _,
                    bPlayVideo: _,
                    fnTogglePlayTrailer: _,
                    bControls: !0,
                  }),
            )
          : null;
      }
      function _(_) {
        const {
            _: _,
            fnOnClickButton: __webpack_require__,
            bLowBandwidthMode: _,
            bUseAssetWithoutOverride: _,
          } = _,
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _ && _ && _
          ? _.createElement(
              "div",
              {
                className: (0, _._)(_().HilightGrid, _().MediaContainerMM),
              },
              _.createElement(_, {
                _: _,
                elFeaturedInCenter: _.createElement(_, {
                  _: _,
                  bUseAssetWithoutOverride: Boolean(_),
                  fnOnClickButton: __webpack_require__,
                }),
                storeItemScreenshots: _,
                featureElementclassName: _().MainImage,
                bUseTrailerAsFirstThumb: !_,
                bNoScreenShotModals: !0,
                name: _.name || "",
              }),
            )
          : _.createElement(
              "div",
              {
                className: (0, _._)(_().HilightGrid, _().MediaContainerMM),
              },
              _.createElement(_._, {
                size: "medium",
              }),
            );
      }
      function _(_) {
        const {
            elFeaturedInCenter: _,
            _: __webpack_require__,
            name: _,
            trailer: _,
            storeItemScreenshots: _,
            featureElementclassName: _,
            bUseTrailerAsFirstThumb: _,
            bNoScreenShotModals: _,
          } = _,
          [_, _] = _.useState(void 0),
          [_, _] = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(0);
        if (!__webpack_require__) return null;
        const _ = _ || (void 0 !== _ && -1 !== _) ? _ : 0,
          _ = new Array(),
          _ = new Array();
        _ &&
          _ &&
          (_.push(
            _.createElement(_, {
              key: "trail_thumb_",
              trailer: _,
              bPlayVideo: !1,
              fnTogglePlayTrailer: () => {},
              onMouseEnter: () => _(0),
              onMouseLeave: () => {
                const _ = _.current;
                _ && _(_.currentTime);
              },
            }),
          ),
          _.push(
            _.createElement(_, {
              key: "trail_inline",
              ref: _,
              name: _,
              trailer: _,
              bControls: !1,
              bPlayVideo: !0,
              startTime: _,
              fnTogglePlayTrailer: () => {},
            }),
          ));
        const _ = (
          _ ? _?.all_ages_screenshots : _?.mature_content_screenshots
        )?.filter(Boolean);
        if (
          (_?.forEach((_, _) => {
            if ((_ || _ > 0) && _.length < 3) {
              const _ = (0, _._)(_, "thumb"),
                _ = (0, _._)(_, "full"),
                _ = _.length;
              _.push(
                _.createElement(
                  "div",
                  {
                    key: _ + "_small_" + _,
                    className: (0, _._)({
                      [_().ThumbnailCtn]: !0,
                      [_().ThumbnialClickable]: !_,
                    }),
                  },
                  _.createElement("img", {
                    src: _,
                    onClick: _
                      ? void 0
                      : () => {
                          const _ = [...(_ || [])];
                          if (_.length > 0) {
                            for (let _ = 0; _ < _; ++_) {
                              const _ = _.shift();
                              _ && _.push(_);
                            }
                            _(_.map((_) => (0, _._)(_, "full")));
                          }
                        },
                    onMouseEnter: () => _(_),
                  }),
                ),
              ),
                _.push(
                  _.createElement(
                    "div",
                    {
                      key: _ + "_big_" + _,
                      className: _().ScreenshotDisplayCtn,
                    },
                    _.createElement("img", {
                      src: _,
                    }),
                  ),
                );
            }
          }),
          !(_ || (_ && 0 != _.length)))
        )
          return null;
        const _ = _.slice(0, 3),
          _ = Array.from({
            length: Math.max(0, 3 - _.length),
          });
        return _.createElement(
          _.Fragment,
          null,
          _,
          _.createElement(
            "div",
            {
              className: _ || _().MainMediaCtn,
            },
            Boolean(_ && (-1 === _ || void 0 === _))
              ? _.createElement(_.Fragment, null, _)
              : _.createElement(_.Fragment, null, void 0 !== _ && _[_]),
          ),
          Boolean(_.length > 0) &&
            _.createElement(
              "div",
              {
                className: _().ScreenshotThumbnailRow,
                onMouseLeave: () => _(-1),
              },
              _,
              _.map((_, _) =>
                _.createElement("div", {
                  key: `app_${(0, _._)(__webpack_require__)}_${_}`,
                  className: _().ThumbnailCtn,
                }),
              ),
            ),
        );
      }
      function _(_) {
        const {
          ref: _,
          name: __webpack_require__,
          trailer: _,
          bControls: _,
          bPlayVideo: _,
          fnTogglePlayTrailer: _,
          startTime: _,
        } = _;
        if (
          ((0, _.useEffect)(() => {
            const _ = _?.current;
            if (null != _ && _ > 0 && _) {
              const _ = () => {
                _.currentTime = _ || 0;
              };
              return (
                _.addEventListener("loadedmetadata", _),
                () => {
                  _.removeEventListener("loadedmetadata", _);
                }
              );
            }
          }, [_, _]),
          !_)
        )
          return null;
        let _ = (0, _._)(_().VideoLargeContainer, _ && _().videoPlaying);
        return _.createElement(
          "div",
          {
            className: _,
            onClick: _,
          },
          _.createElement(_._, {
            name: __webpack_require__,
            trailerCategory: _.trailer_category,
            trailerDisplay: 1,
            mouseOver: !1,
          }),
          Boolean(_ && _.microtrailer) &&
            _.createElement(
              "video",
              {
                className: _().VideoLarge,
                ref: _,
                controls: _,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: null != _ && _ > 0 ? void 0 : _.screenshot_full,
              },
              _.microtrailer?.map((_) =>
                _._.IN_CLIENT && "video/mp4" == _.type
                  ? null
                  : _.createElement("source", {
                      key: _.filename,
                      src: (0, _._)(_, _.filename || ""),
                      type: _.type,
                    }),
              ),
            ),
          _ &&
            _.createElement(
              "div",
              {
                onClick: _,
              },
              _.createElement(_.sED, null),
            ),
        );
      }
      function _(_) {
        const {
            _: _,
            bShowModal: __webpack_require__,
            trailerBaseID: _,
            hideModal: _,
          } = _,
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _.useMemo)(() => {
            if (!_) return;
            if (_) {
              const _ = [...(_.highlights || []), ...(_.other_trailers || [])]
                .filter(Boolean)
                .filter((_) => !_ || _.all_ages)
                .find((_) => _.trailer_base_id == _);
              if (_) return _;
            }
            const _ = (_.highlights || [])
              .filter(Boolean)
              .filter((_) => !_ || _.all_ages);
            return _ && _.length > 0 ? _[0] : void 0;
          }, [_, _, _]),
          _ = _.useId(),
          _ = _.useId();
        if (!_ || !_.adaptive_trailers) return null;
        const _ = _.adaptive_trailers
            .filter(
              (_) =>
                ("dash_h264" == _.encoding || "dash_av1" == _.encoding) &&
                _.cdn_path,
            )
            .map((_) => (0, _._)(_, _.cdn_path || "")),
          _ = _.adaptive_trailers
            .filter((_) => "hls_h264" == _.encoding && _.cdn_path)
            .map((_) => (0, _._)(_, _.cdn_path || ""));
        return 0 == _?.length
          ? null
          : _.createElement(
              _._,
              {
                active: __webpack_require__,
              },
              _.createElement(
                _._,
                {
                  "aria-labelledby": (0, _._)(_, _),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: _,
                },
                _.createElement(
                  "div",
                  {
                    className: _().VideoPopupContainers,
                  },
                  _.createElement(_._, {
                    dashManifests: _ || [],
                    hlsManifest: (_.length > 0 && _?.[0]) || "",
                    screenshot: (0, _._)(_),
                    altText: _.trailer_name,
                    muteWhenAutoplayBlocked: !0,
                  }),
                ),
                _.createElement(
                  "div",
                  {
                    _: _,
                    style: {
                      display: "none",
                    },
                  },
                  _?.name || "",
                ),
                _.createElement(
                  "div",
                  {
                    _: _,
                    style: {
                      display: "none",
                    },
                  },
                  _.trailer_name,
                ),
              ),
            );
      }
      function _(_) {
        const {
          trailer: _,
          fnTogglePlayTrailer: __webpack_require__,
          bPlayVideo: _,
          onMouseEnter: _,
          onMouseLeave: _,
        } = _;
        return _.createElement(
          "div",
          {
            className: (0, _._)({
              [_().VideoThumbnail]: !_,
              [_().videoPlaying]: _,
              [_().ThumbnailCtn]: !0,
            }),
            onClick: __webpack_require__,
            onMouseEnter: _,
            onMouseLeave: _,
          },
          _.createElement("img", {
            src: (0, _._)(_),
          }),
          _.createElement(
            "div",
            {
              className: _().VideoPlayButton,
            },
            _.createElement(_.jGG, null),
          ),
        );
      }
      function _(_) {
        const {
            _: _,
            fnOnClickButton: __webpack_require__,
            bUseAssetWithoutOverride: _,
          } = _,
          [_, _] = (0, _._)(),
          { data: _ } = (0, _._)(_, _),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!_ || !_ || !_) return null;
        const _ = (0, _._)(_, "main_capsule");
        return _.createElement(
          _._,
          {
            focusable: !0,
            noFocusRing: !0,
            className: _().MainCapsuleWithHover,
            ..._,
            onActivate: __webpack_require__,
          },
          _.createElement("img", {
            className: _().MainCapsule,
            src: _,
          }),
          _.createElement(
            "div",
            {
              className: _().AppDetails,
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(_().GameName),
              },
              _.name || "",
            ),
            _.createElement(
              "div",
              {
                className: _().ShortDesc,
              },
              _.short_description,
              " ",
            ),
            _.createElement(_._, {
              rgTagIDs: _ ? _.map((_) => _.tagid || 0) : [],
              instanceNum: 0,
              bLargeText: !0,
              bHideTitle: !0,
              bNoStoreLinks: !0,
            }),
            _.createElement(_, {
              _: _,
            }),
          ),
        );
      }
    },
  },
]);
