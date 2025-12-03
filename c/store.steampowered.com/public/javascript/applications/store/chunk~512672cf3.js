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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { storeItem: _ } = _,
          _ = (0, _.useMemo)(() => {
            if (!_) return [];
            const _ = _.GetStoreCategories_SupportedPlayers().slice(0, 1);
            return (
              _.GetStoreCategories_Features().forEach((_) => _.push(_)),
              _.GetStoreCategories_Controller().forEach((_) => _.push(_)),
              _.GetStoreCategories_SupportedPlayers()
                .slice(1)
                .forEach((_) => _.push(_)),
              _
            );
          }, [_]);
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
                    __webpack_require__.map((_) =>
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
          include_trailers: !0,
          include_screenshots: !0,
        },
        _ = {
          include_trailers: !0,
          include_screenshots: !0,
          include_basic_info: !0,
          include_tag_count: 10,
        },
        _ = {
          include_trailers: !0,
          include_screenshots: !0,
          include_basic_info: !0,
          include_tag_count: 10,
          include_assets_without_overrides: !0,
        };
      function _(_) {
        const { info: _, bPopOutTrailerPlayback: __webpack_require__ } = _,
          [_] = (0, _._)(_._, (0, _._)(_.type), _),
          [_, _] = (0, _.useState)(!1),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)(),
          _ = _?.GetAllTrailers().GetHighlightTrailers(_),
          _ = _?.length > 0 && _[0],
          _ = _.useCallback(() => {
            _ && (__webpack_require__ ? _(!0) : _((_) => !_));
          }, [_, __webpack_require__]),
          _ = _
            ? _.createElement(_, {
                trailer: _,
                bPlayVideo: _,
                fnTogglePlayTrailer: _,
              })
            : null;
        return _
          ? _ || 0 !== _.GetScreenshots(_)?.length
            ? _.createElement(
                "div",
                {
                  className: (0, _._)(_().HilightGrid, _().MediaContainer),
                },
                _.createElement(_, {
                  elFeaturedInCenter: _,
                  storeItem: _,
                }),
                Boolean(__webpack_require__)
                  ? _.createElement(_, {
                      storeItem: _,
                      bShowModal: _,
                      hideModal: () => _(!1),
                    })
                  : _.createElement(_, {
                      name: _.GetName(),
                      trailer: _,
                      bPlayVideo: _,
                      fnTogglePlayTrailer: _,
                      bControls: !0,
                    }),
              )
            : (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
                console.log(
                  "appCapsule for appid: " + _?.GetAppID(),
                  _.GetScreenshots(_),
                ),
              null)
          : _.createElement(
              "div",
              {
                className: (0, _._)(_().HilightGrid, _().MediaContainer),
              },
              _.createElement(_._, {
                size: "medium",
              }),
            );
      }
      function _(_) {
        const {
            info: _,
            fnOnClickButton: __webpack_require__,
            bLowBandwidthMode: _,
            bUseAssetWithoutOverride: _,
          } = _,
          [_] = (0, _._)(_._, (0, _._)(_.type), _ ? _ : _);
        return _
          ? _.createElement(
              "div",
              {
                className: (0, _._)(_().HilightGrid, _().MediaContainerMM),
              },
              _.createElement(_, {
                elFeaturedInCenter: _.createElement(_, {
                  storeItem: _,
                  bUseAssetWithoutOverride: _,
                  fnOnClickButton: __webpack_require__,
                }),
                storeItem: _,
                featureElementclassName: _().MainImage,
                bUseTrailerAsFirstThumb: !_,
                bNoScreenShotModals: !0,
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
            storeItem: __webpack_require__,
            featureElementclassName: _,
            bUseTrailerAsFirstThumb: _,
            bNoScreenShotModals: _,
          } = _,
          [_, _] = _.useState(void 0),
          [_, _] = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(0),
          _ = _ || (void 0 !== _ && -1 !== _) ? _ : 0,
          _ = new Array(),
          _ = new Array();
        if (_) {
          const _ = __webpack_require__
              ?.GetAllTrailers()
              .GetHighlightTrailers(_),
            _ = _?.length > 0 && _[0];
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
                name: __webpack_require__.GetName(),
                trailer: _,
                bControls: !1,
                bPlayVideo: !0,
                startTime: _,
                fnTogglePlayTrailer: () => {},
              }),
            ));
        }
        const _ = __webpack_require__.GetScreenshots(_);
        if (
          (_.forEach((_, _) => {
            if ((_ || _ > 0) && _.length < 3) {
              const _ = _(_, ".600x338").replace("http://", "https://"),
                _ = _(_, ".800x600").replace("http://", "https://"),
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
                          const _ = [..._];
                          for (let _ = 0; _ < _; ++_) _.push(_.shift());
                          _(_);
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
              : _.createElement(_.Fragment, null, _[_]),
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
                  key: `app_${__webpack_require__?.GetAppID()}_${_}`,
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
        let _ = _.GetMicroTrailer();
        (0, _.useEffect)(() => {
          const _ = _?.current;
          if (_ > 0 && _) {
            const _ = () => {
              _.currentTime = _;
            };
            return (
              _.addEventListener("loadedmetadata", _),
              () => {
                _.removeEventListener("loadedmetadata", _);
              }
            );
          }
        }, [_, _]);
        let _ = (0, _._)(_().VideoLargeContainer, _ && _().videoPlaying);
        return _.createElement(
          "div",
          {
            className: _,
            onClick: _,
          },
          _.createElement(_._, {
            name: __webpack_require__,
            trailerCategory: _.GetTrailerCategory(),
            trailerDisplay: 1,
            mouseOver: !1,
          }),
          Boolean(_) &&
            _.createElement(
              "video",
              {
                className: _().VideoLarge,
                ref: _,
                controls: _,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster: _ > 0 ? void 0 : _.GetScreenshot(),
              },
              _.createElement("source", {
                src: _.strWebMURL,
                type: "video/webm",
              }),
              Boolean(!_._.IN_CLIENT) &&
                _.createElement("source", {
                  src: _.strMP4URL,
                  type: "video/mp4",
                }),
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
      function _(_, _) {
        const _ = _.replace(/\.[^\.]+$/g, "");
        return _ + _ + _.slice(_.length);
      }
      function _(_) {
        const {
            storeItem: _,
            bShowModal: __webpack_require__,
            trailerBaseID: _,
            hideModal: _,
          } = _,
          _ = (0, _._)(),
          _ = (0, _.useMemo)(() => {
            if (_) {
              const _ = _?.GetAllTrailers()
                ?.GetAllTrailers(_)
                .find((_) => _.GetTrailerID() == _);
              if (_) return _;
            }
            const _ = _?.GetAllTrailers()?.GetHighlightTrailers(_);
            return _ && _.length > 0 ? _[0] : void 0;
          }, [_, _, _]),
          _ = _.useId(),
          _ = _.useId();
        if (!_) return null;
        const _ = _.GetTrailersDash(),
          _ = _.GetTrailerHls();
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
                    hlsManifest: _ || "",
                    screenshot: "",
                    altText: "",
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
                  _.GetName(),
                ),
                _.createElement(
                  "div",
                  {
                    _: _,
                    style: {
                      display: "none",
                    },
                  },
                  _.GetName(),
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
            src: _.GetScreenshot(),
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
            storeItem: _,
            fnOnClickButton: __webpack_require__,
            bUseAssetWithoutOverride: _,
          } = _,
          [_, _] = (0, _._)(),
          _ = _
            ? _.GetAssetsWithoutOverrides()?.GetMainCapsuleURL()
            : _.GetAssets()?.GetMainCapsuleURL();
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
              _.GetName(),
            ),
            _.createElement(
              "div",
              {
                className: _().ShortDesc,
              },
              _.GetShortDescription(),
              " ",
            ),
            _.createElement(_._, {
              rgTagIDs: _.GetTagIDs(),
              instanceNum: 0,
              bLargeText: !0,
              bHideTitle: !0,
              bNoStoreLinks: !0,
            }),
            _.createElement(_, {
              storeItem: _,
            }),
          ),
        );
      }
    },
  },
]);
