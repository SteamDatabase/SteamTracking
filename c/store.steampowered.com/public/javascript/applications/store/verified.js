(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [86991],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { strImageToken: _, language: _, strAltText: _ } = _,
            _ = (0, _._)(_, _);
          return _
            ? typeof _ == "string"
              ? (0, _.jsx)("img", {
                  src: _,
                  alt: _,
                })
              : (0, _.jsx)(_._, {
                  rgSources: _,
                  strAltText: _,
                })
            : null;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return `${_}/${_}`;
        }
        const _ = {},
          _ = _.createContext(_);
        function _(_) {
          const { resolutions: _, children: _ } = _;
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          return _.useContext(_);
        }
        const _ = new RegExp(
          `${_._.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function _(_) {
          const _ = [],
            _ = new Set();
          for (const _ of _.matchAll(_)) {
            const _ = Number.parseInt(_[1]),
              _ = _[2],
              _ = _(_, _);
            _ > 0 &&
              !_.has(_) &&
              (_.add(_),
              _.push({
                clanAccountID: _,
                hashAndExt: _,
              }));
          }
          return _;
        }
        function _(_, _, _ = 0) {
          const _ = _();
          return _(_, _, _, _);
        }
        async function _(_, _, _ = 0) {
          return _(_, _, _);
        }
        function _(_, _, _ = 0, _) {
          if (!_ || _.length == 0) return null;
          if (_?.startsWith(_._)) return _.ReplacementTokenToClanImageURL(_);
          if (_?.startsWith(_._)) {
            const _ = _.GetBaseURL(),
              _ = _.substring(_._.length + 1),
              _ = parseInt(_.substring(0, _.indexOf("/"))),
              _ = _.substring(_.indexOf("/") + 1),
              _ = _.GenerateURLFromHashAndExt(_, _);
            if (_?.[_(_, _)] === !1) return _;
            const _ = _.GetLocalizedClanImageFileNames(_, _).map(
              (_) => _ + _ + "/" + _ + "?t=" + _,
            );
            return _.push(_), _;
          }
          return _;
        }
        const _ = {
          GetBaseURL() {
            return `${_._.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${_._.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(_) {
            return (
              (_ = _.replace(_._, this.GetBaseURL())),
              _.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(_) {
            const _ =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                _,
              );
            return _?.groups
              ? [_.groups.filename, parseInt(_.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(_) {
            return (
              (_.file_type != null ? (0, _._)(_.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(_) {
            return _ ? _.image_hash + this.GetExtensionString(_) : null;
          },
          GetThumbHashAndExt(_) {
            return _ ? _.thumbnail_hash + this.GetExtensionString(_) : null;
          },
          GetHashFromHashAndExt(_) {
            let _ = _.substring(_.lastIndexOf("."));
            return _.substring(0, _.length - _.length);
          },
          GetExtStringFromHashAndExt(_) {
            return _.substring(_.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(_, _) {
            if (_ == null) return [];
            const _ = this.GetHashFromHashAndExt(_),
              _ = this.GetExtStringFromHashAndExt(_),
              _ = [_ + "/" + (0, _.LgB)(_) + _];
            return (
              _ == _.Pn1 && _.push(_ + "/" + (0, _.x6o)((0, _.LgB)(_)) + _), _
            );
          },
          GenerateURLFromHashAndExt(_, _, _ = _._.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              _,
              _,
              _,
              _.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(_, _, _ = _._.full, _, _) {
            _ instanceof _._ && (_ = _.GetAccountID());
            let _ = this.GetBaseURL();
            const _ = _ != null && _ != _.xPp;
            if (_ == _._.full && !_) return _ + _ + "/" + _;
            {
              let _ = _.substring(_.lastIndexOf(".")),
                _ = _.substring(0, _.length - _.length);
              return !_ || _ == _.Bhc || _ != "localized_image_group"
                ? _ + _ + "/" + _ + _ + _
                : _ + _ + "/" + _ + "/" + (0, _.x6o)((0, _.LgB)(_)) + _;
            }
          },
          GetHashAndExtFromURL(_) {
            let _ = this.GetBaseURL();
            return !_?.startsWith(_) ||
              ((_ = _.substring(_.length)), _.indexOf("/") == -1)
              ? null
              : ((_ = _.substring(_.indexOf("/") + 1)), _);
          },
          GenerateEditableURLFromHashAndExt(_, _, _) {
            let _ =
              _._.COMMUNITY_BASE_URL +
              "gid/" +
              _.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              _;
            return _ && (_ += "&lang=" + _), _;
          },
          GetMimeType(_) {
            return (0, _._)(_);
          },
          async AsyncGetImageResolution(_, _, _, _, _) {
            const _ =
                _ +
                this.GetExtensionString({
                  file_type: _,
                }),
              _ = this.GenerateEditableURLFromHashAndExt(_, _);
            return await this.AsyncGetImageResolutionInternal(_, _, _);
          },
          async AsyncGetImageResolutionInternal(_, _, _) {
            const _ = (0, _._)();
            let _ = new Image();
            (_.crossOrigin = "anonymous"),
              (_.onerror = (_) => {
                const _ = {
                  success: _._,
                };
                _ ||
                  ((_.err_msg =
                    "Load fail on url " +
                    _ +
                    " with error: " +
                    (0, _._)(_).strErrorMsg),
                  console.error(_.err_msg)),
                  (_.success = _._),
                  _.resolve(_);
              }),
              (_.onload = () => {
                const _ = {
                  success: _._,
                };
                if (
                  ((_.width = _.width),
                  (_.height = _.height),
                  !(_.width > 0) || !(_.height > 0))
                ) {
                  (0, _._)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + _,
                  ),
                    (_.err_msg = "No resolution reported for url " + _),
                    _.resolve(_);
                  return;
                }
                (_.success = _._), _.resolve(_);
              }),
              (_.src = _),
              _.token.promise.catch(() => {
                (_.onload = () => {}),
                  (_.onerror = () => {}),
                  _.resolve({
                    success: _._,
                  });
              });
            let _;
            const _ = new Promise((_, _) => {
              _ = setTimeout(() => _(), 1e4);
            });
            let _;
            try {
              _ = await Promise.race([_, _.promise]);
            } catch {
              _ = {
                success: _._,
                err_msg: "We timed out processing images",
              };
            } finally {
              clearTimeout(_);
            }
            return _;
          },
          BIsClanImageVideo(_) {
            return _.file_type == _._._ || _.file_type == _._._;
          },
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        class _ {
          imageid;
          image_hash;
          thumbnail_hash;
          file_type;
          file_name;
          clanAccountID;
          url;
          thumb_url;
          uploaded_time;
          loc_group_id;
        }
        var _ = ((_) => (
          (_.full = ""),
          (_.background_main = "_960x311"),
          (_.background_mini = "_480x156"),
          (_.capsule_main = "_400x225"),
          (_.spotlight_main = "_1054x230"),
          _
        ))(_ || {});
        const _ = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        async function _(_) {
          try {
            return await _;
          } catch (_) {
            console.error(_);
            return;
          }
        }
        function _() {
          let _, _;
          return {
            promise: new Promise((_, _) => {
              (_ = _), (_ = _);
            }),
            resolve: _,
            reject: _,
          };
        }
        function _(_) {
          return new Promise((_) => setTimeout(_, _));
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
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
              hoverClassName: _,
              fnGetIDOverride: _,
              fnHoverState: _,
              disableScreenshots: _,
              children: _,
            } = _,
            _ = _.useRef(null),
            _ = _.useCallback(
              (_) => {
                const _ = _(_);
                _ &&
                  (_ && _(!0),
                  window.GameHover &&
                    (_.current &&
                      _ &&
                      (_.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(_ ? _() : _.current, _, "global_hover", {
                      type: _,
                      _: (0, _._)(_)._,
                      _: 1,
                    })));
              },
              [_, _, _, _],
            ),
            _ = _.useCallback(
              (_) => {
                _(_) &&
                  (_ && _.relatedTarget && _(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      _ ? _() : _.current,
                      _,
                      "global_hover",
                    ));
              },
              [_, _, _],
            );
          return (0, _.jsx)("div", {
            ref: _,
            className: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
            children: _,
          });
        }
        function _(_) {
          const {
              _: _,
              strExtraParams: _,
              fnOnClickOverride: _,
              strOverrideURL: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(
              _ ||
                (_ && "creatorid" in _
                  ? (0, _._)(
                      `${_._.STORE_BASE_URL}curator/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                      _,
                      _,
                    )
                  : (0, _._)(
                      `${_._.STORE_BASE_URL}${_(_)}/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                      _,
                      _,
                    )),
            );
          return (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_._, {
              className: _.className,
              href: _ ? void 0 : _,
              target: _._.IN_CLIENT || _ ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: _,
              children: _.children,
            }),
          });
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
          _ = __webpack_require__("chunkid");
        const _ = {
            name: "trailerPrefs",
            options: {
              path: "/",
              secure: !0,
              maxAge: 720 * 60 * 60 * 1e3,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            flVolume: 0.8,
            bMuted: !0,
          };
        function _(_) {
          return _.flVolume === _.flVolume && _.bMuted === _.bMuted;
        }
        function _() {
          try {
            const _ = (0, _._)(_);
            if (!_) return _;
            const _ = JSON.parse(_);
            return {
              flVolume: typeof _.flVolume == "number" ? _.flVolume : _.flVolume,
              bMuted: typeof _.bMuted == "boolean" ? _.bMuted : _.bMuted,
            };
          } catch {
            return _;
          }
        }
        function _(_) {
          _(_) || Object.keys(_).length == 0
            ? (0, _._)(_)
            : (0, _._)(_, JSON.stringify(_));
        }
        function _(_) {
          let { children: _ } = _;
          const [_, _] = (0, _.useState)(() => _());
          return (
            (0, _.useEffect)(() => {
              _(_);
            }, [_]),
            (0, _.jsx)(_._, {
              playerVolume: _.flVolume,
              setPlayerVolume: (_) =>
                _((_) => ({
                  ..._,
                  flVolume: _,
                })),
              audioMuted: _.bMuted,
              setAudioMuted: (_) =>
                _((_) => ({
                  ..._,
                  bMuted: _,
                })),
              children: _,
            })
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _, bPopOutTrailerPlayback: _ } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)(),
            _ = _?.highlights?.filter((_) => !_ || _.all_ages),
            _ = _ && _?.length > 0 ? _[0] : void 0,
            _ = _.useCallback(() => {
              _ && (_ ? _(!0) : _((_) => !_));
            }, [_, _]);
          if (!_)
            return (0, _.jsx)("div", {
              className: (0, _._)(_().HilightGrid, _().MediaContainer),
              children: (0, _.jsx)(_._, {
                size: "medium",
              }),
            });
          const _ = _
            ? (0, _.jsx)(_, {
                trailer: _,
                bPlayVideo: _,
                fnTogglePlayTrailer: _,
              })
            : null;
          return !_ &&
            !(_ && _.all_ages_screenshots && _.all_ages_screenshots.length > 0)
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(_().HilightGrid, _().MediaContainer),
                children: [
                  (0, _.jsx)(_, {
                    elFeaturedInCenter: _,
                    storeItemScreenshots: _,
                    trailer: _,
                    _: _,
                    name: _.name || "",
                  }),
                  _
                    ? (0, _.jsx)(_, {
                        _: _,
                        bShowModal: _,
                        hideModal: () => _(!1),
                      })
                    : (0, _.jsx)(_, {
                        name: _.name || "",
                        trailer: _,
                        bPlayVideo: _,
                        fnTogglePlayTrailer: _,
                        bControls: !0,
                      }),
                ],
              });
        }
        function _(_) {
          const {
              elFeaturedInCenter: _,
              _: _,
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
          if (!_) return null;
          const _ = _ || (_ !== void 0 && _ !== -1) ? _ : 0,
            _ = new Array(),
            _ = new Array();
          _ &&
            _ &&
            (_.push(
              (0, _.jsx)(
                _,
                {
                  trailer: _,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => _(0),
                  onMouseLeave: () => {
                    const _ = _.current;
                    _ && _(_.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            _.push(
              (0, _.jsx)(
                _,
                {
                  ref: _,
                  name: _,
                  trailer: _,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: _,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const _ = (
            _ ? _?.all_ages_screenshots : _?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (_?.forEach((_, _) => {
              if ((_ || _ > 0) && _.length < 3) {
                const _ = (0, _._)(_, "thumb"),
                  _ = (0, _._)(_, "600x338"),
                  _ = _.length;
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      className: (0, _._)({
                        [_().ThumbnailCtn]: !0,
                        [_().ThumbnialClickable]: !_,
                      }),
                      onMouseEnter: () => _(_),
                      children: _
                        ? (0, _.jsx)("img", {
                            src: _,
                            alt: _,
                          })
                        : (0, _.jsx)("button", {
                            type: "button",
                            className: _().ThumbnailButton,
                            onClick: () => {
                              const _ = [...(_ || [])];
                              if (_.length > 0) {
                                for (let _ = 0; _ < _; ++_) {
                                  const _ = _.shift();
                                  _ && _.push(_);
                                }
                                _(_.map((_) => (0, _._)(_, "full")));
                              }
                            },
                            children: (0, _.jsx)("img", {
                              src: _,
                              alt: _,
                            }),
                          }),
                    },
                    _ + "_small_" + _,
                  ),
                ),
                  _.push(
                    (0, _.jsx)(
                      "div",
                      {
                        className: _().ScreenshotDisplayCtn,
                        children: (0, _.jsx)("img", {
                          src: _,
                          alt: _,
                        }),
                      },
                      _ + "_big_" + _,
                    ),
                  );
              }
            }),
            !_ && (!_ || _.length == 0))
          )
            return null;
          const _ = _.slice(0, 3),
            _ = Array.from({
              length: Math.max(0, 3 - _.length),
            });
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              (0, _.jsx)("div", {
                className: _ || _().MainMediaCtn,
                children:
                  _ && (_ === -1 || _ === void 0)
                    ? (0, _.jsx)(_.Fragment, {
                        children: _,
                      })
                    : (0, _.jsx)(_.Fragment, {
                        children: _ !== void 0 && _[_],
                      }),
              }),
              _.length > 0 &&
                (0, _.jsxs)("div", {
                  className: _().ScreenshotThumbnailRow,
                  onMouseLeave: () => _(-1),
                  children: [
                    _,
                    _.map((_, _) =>
                      (0, _.jsx)(
                        "div",
                        {
                          className: _().ThumbnailCtn,
                        },
                        `app_${(0, _._)(_)}_${_}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const {
            ref: _,
            name: _,
            trailer: _,
            bControls: _,
            bPlayVideo: _,
            fnTogglePlayTrailer: _,
            startTime: _,
          } = _;
          if (
            ((0, _.useEffect)(() => {
              const _ = _?.current;
              if (_ != null && _ > 0 && _) {
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
          return (0, _.jsxs)("div", {
            className: _,
            onClick: _,
            role: "presentation",
            children: [
              (0, _.jsx)(_._, {
                name: _,
                trailerCategory: _.trailer_category,
                trailerDisplay: _._,
                mouseOver: !1,
              }),
              !!(_ && _.microtrailer) &&
                (0, _.jsx)("video", {
                  className: _().VideoLarge,
                  ref: _,
                  controls: _,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: _ != null && _ > 0 ? void 0 : _.screenshot_full,
                  children: _.microtrailer?.map((_) =>
                    _._.IN_CLIENT && _.type == "video/mp4"
                      ? null
                      : (0, _.jsx)(
                          "source",
                          {
                            src: (0, _._)(_, _.filename || ""),
                            type: _.type,
                          },
                          _.filename,
                        ),
                  ),
                }),
              _ &&
                (0, _.jsx)("button", {
                  type: "button",
                  className: _().CloseButton,
                  "aria-label": (0, _._)("#Button_Close"),
                  children: (0, _.jsx)(_.sED, {}),
                }),
            ],
          });
        }
        function _(_) {
          return _.bShowModal
            ? (0, _.jsx)(_, {
                ..._,
              })
            : null;
        }
        function _(_) {
          const { _: _, bShowModal: _, trailerBaseID: _, hideModal: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _.useMemo)(() => {
              if (!(!_ || _.length == 0)) {
                if (_) {
                  const _ = _.find((_) => _.trailer_base_id == _);
                  if (_) return _;
                }
                return _[0];
              }
            }, [_, _]),
            _ = _.useId(),
            _ = _.useId(),
            {
              rgDashTrailers: _,
              rgHlsTrailers: _,
              strCaptionManufest: _,
              strScreenshot: _,
            } = (0, _.useMemo)(() => {
              if (!_)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: _, rgHlsTrailers: _ } = (0, _._)(_);
              return {
                rgDashTrailers: _,
                rgHlsTrailers: _,
                strCaptionManufest: (0, _._)(_),
                strScreenshot: (0, _._)(_),
              };
            }, [_]);
          return !_ || !_.adaptive_trailers || _.length == 0
            ? null
            : (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsxs)(_._, {
                  "aria-labelledby": (0, _._)(_, _),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: _,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().VideoPopupContainers,
                      children: (0, _.jsx)(_._, {
                        dashManifests: _,
                        hlsManifest: _[0] || "",
                        screenshot: _,
                        altText: _.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: _,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      _: _,
                      style: {
                        display: "none",
                      },
                      children: _?.name || "",
                    }),
                    (0, _.jsx)("div", {
                      _: _,
                      style: {
                        display: "none",
                      },
                      children: _.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function _(_) {
          const { appid: _, trailerBaseID: _, bShowModal: _, hideModal: _ } = _,
            _ = (0, _.useMemo)(
              () => ({
                appid: _,
              }),
              [_],
            );
          return (0, _.jsx)(_, {
            _: _,
            trailerBaseID: _,
            bShowModal: _,
            hideModal: _,
          });
        }
        function _(_) {
          const {
            trailer: _,
            fnTogglePlayTrailer: _,
            bPlayVideo: _,
            onMouseEnter: _,
            onMouseLeave: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)({
              [_().VideoThumbnail]: !_,
              [_().videoPlaying]: _,
              [_().ThumbnailCtn]: !0,
            }),
            onClick: _,
            onMouseEnter: _,
            onMouseLeave: _,
            role: "presentation",
            children: [
              (0, _.jsx)("img", {
                src: (0, _._)(_),
                alt: _.trailer_name,
              }),
              (0, _.jsx)("button", {
                type: "button",
                className: _().VideoPlayButton,
                "aria-label": (0, _._)("#Playback_Play_Tooltip"),
                children: (0, _.jsx)(_.jGG, {}),
              }),
            ],
          });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              _: _,
              bPurchaseOptionsExpanded: _,
              fnCollapseOptions: _,
              bPreferAssetWithoutOverride: _,
            } = _,
            { data: _ } = (0, _._)(_),
            _ = (0, _.useRef)(null);
          if (!_) return null;
          const _ = _.purchase_options;
          return _
            ? (0, _.jsx)(_._, {
                nodeRef: _,
                _: _,
                mountOnEnter: !0,
                unmountOnExit: !0,
                timeout: 2e3,
                classNames: {
                  enterActive: _().Expanding,
                  enterDone: _().Expanded,
                  exit: _().Expanded,
                  exitActive: _().Collapsing,
                },
                children: (0, _.jsxs)("div", {
                  ref: _,
                  className: _().BundleContentsCtnTransition,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().BundleContentsCtn,
                      children: _.filter((_) => !!_.packageid).map((_) =>
                        (0, _.jsx)(
                          "div",
                          {
                            className: _().BundleContentItem,
                            children: (0, _.jsx)(_._, {
                              _: _.packageid || 0,
                              type: "sub",
                              bForceSmallCapsuleArt: !0,
                              bPreferAssetWithoutOverride: _,
                            }),
                          },
                          "purchaseitem_" + (0, _._)(_) + "_" + _.packageid,
                        ),
                      ),
                    }),
                    (0, _.jsx)("div", {
                      onClick: _,
                      className: _().BundleShowButton,
                      children: (0, _.jsx)("button", {
                        className: _().ShowContentsButton,
                        children: _._.Localize("#Button_Close"),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const { _: _, type: _ } = _,
            _ = (0, _._)(_, _),
            {
              bHidePrice: _,
              bShowDemoButton: _,
              bPreferDemoStorePage: _,
              bShowPurchaseOptionsButton: _,
              bUseSubscriptionLayout: _,
              bPreferAssetWithoutOverride: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = () => _(!_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)();
          if (!_ || !_)
            return (0, _.jsx)(_._, {
              capsules_per_row: [1],
              is_expanded_display: !0,
            });
          const _ = (0, _._)(_),
            _ = _.item_type == _._._;
          return (0, _.jsx)("div", {
            className: (0, _._)(
              _().StoreSaleWidgetContainer,
              _().LibraryAssetExpandedDisplay,
              "LibraryAssetExpandedDisplay",
            ),
            children: (0, _.jsxs)(_._, {
              appid: _ ? _.appid : void 0,
              children: [
                (0, _.jsxs)("div", {
                  className: _().StoreSaleWidgetLibraryAssetExtendedTop,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().StoreSaleWidgetLeft),
                      children: (0, _.jsx)(_._, {
                        _: _,
                        bPreferDemoStorePage: _,
                        children: (0, _.jsxs)("div", {
                          className: _().StoreSaleWidgetImage,
                          children: [
                            (0, _.jsx)(_._, {
                              appids: _,
                            }),
                            (0, _.jsx)(_._, {
                              _: _,
                              imageType: "library",
                              bPreferAssetWithoutOverride: _,
                            }),
                            (0, _.jsx)(_._, {
                              _: _,
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().StoreSaleWidgetCrossCenterRight,
                      children: [
                        _ &&
                          (0, _.jsx)(_._, {
                            _: _,
                            classOverride: (0, _._)(
                              _().WishlistButtonNotTop,
                              "WishlistButton",
                            ),
                            snr: _,
                          }),
                        (0, _.jsxs)("div", {
                          className: _().StoreSaleWidgetContents,
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().StoreSaleWidgetCenter,
                              children: [
                                _.short_description &&
                                  _.short_description.length > 0 &&
                                  (0, _.jsx)("div", {
                                    className: (0, _._)(
                                      _().StoreSaleWidgetShortDesc,
                                      "StoreSaleWidgetShortDesc",
                                    ),
                                    children: _.short_description,
                                  }),
                                (0, _.jsx)(_._, {
                                  rgTagIDs: _
                                    ? _.slice(0, 10).map((_) => _.tagid || 0)
                                    : [],
                                  instanceNum: 0,
                                  bNoStoreLinks: !1,
                                }),
                                (0, _.jsxs)("div", {
                                  className: _().StoreMetaDataCtn,
                                  children: [
                                    (0, _.jsx)("div", {
                                      className: _().StoreSaleItemRelease,
                                      children: _._.LocalizeReact(
                                        "#Sale_ReleaseDate",
                                        (0, _.jsx)("span", {
                                          children: (0, _._)(_),
                                        }),
                                      ),
                                    }),
                                    _.developers &&
                                      _.developers.length > 0 &&
                                      (0, _.jsxs)("div", {
                                        className: _().StoreSaleItemDev,
                                        children: [
                                          _._.Localize(
                                            "#CreatorHome_DevelopedBy",
                                          ),
                                          (0, _.jsx)("span", {
                                            children: _.developers[0].name,
                                          }),
                                        ],
                                      }),
                                    _.publishers &&
                                      _.publishers.length > 0 &&
                                      (0, _.jsxs)("div", {
                                        className: _().StoreSaleItemDev,
                                        children: [
                                          _._.Localize(
                                            "#CreatorHome_PublishedBy",
                                          ),
                                          (0, _.jsx)("span", {
                                            children: _.publishers[0].name,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: _().StoreSaleLibraryAssetWidgetRight,
                              children: (0, _.jsx)(_._, {
                                _: _,
                                bPopOutTrailerPlayback: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          className: _().StoreSaleItemReview,
                          children: (0, _.jsx)(_._, {
                            _: _,
                          }),
                        }),
                        (0, _.jsx)("div", {
                          className: _().CapsuleBottomBar,
                          children:
                            _ && _
                              ? (0, _.jsx)(_._, {
                                  appid: _.appid,
                                  bIsMuted: !1,
                                })
                              : (0, _.jsxs)(_.Fragment, {
                                  children: [
                                    (0, _.jsx)(_._, {
                                      _: _,
                                    }),
                                    (0, _.jsx)(_._, {
                                      _: _,
                                      bShowDemoButton: _,
                                      bHidePrice: _,
                                      bShowPurchaseOptionsButton: _,
                                      fnOnPurchaseOptionsClick: _,
                                      bHideWishlistButton: _.is_coming_soon,
                                    }),
                                  ],
                                }),
                        }),
                        (0, _.jsxs)("div", {
                          className: _().StoreSaleWidgetBgTint,
                          children: [
                            (0, _.jsx)(_._, {
                              _: _,
                              bPreferAssetWithoutOverride: _,
                            }),
                            (0, _.jsx)(_._, {
                              _: _,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  _: _,
                  bPurchaseOptionsExpanded: _,
                  fnCollapseOptions: _,
                  bPreferAssetWithoutOverride: _,
                }),
              ],
            }),
          });
        });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = "{STEAM_CLAN_IMAGE}",
          _ = "{STEAM_CLAN_LOC_IMAGE}",
          _ = "{STEAM_APP_IMAGE}";
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
        function _(_) {
          const _ = _.toLowerCase();
          if (_.endsWith(".jpg") || _.endsWith(".jpeg")) return "image/jpeg";
          if (_.endsWith(".png")) return "image/png";
          if (_.endsWith(".gif")) return "image/gif";
          if (_.endsWith(".mp4")) return "video/mp4";
          if (_.endsWith(".webm")) return "video/webm";
          if (_.endsWith(".srt")) return "text/srt";
          if (_.endsWith(".vtt")) return "text/vtt";
          if (_.endsWith(".webp")) return "image/webp";
        }
        function _(_) {
          switch (_) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              _,
            ),
            ".jpg"
          );
        }
        function _(_) {
          switch (_) {
            case _._._:
              return ".jpg";
            case _._._:
              return ".gif";
            case _._._:
              return ".png";
            case _._._:
              return ".webm";
            case _._._:
              return ".mp4";
            case _._._:
              return ".srt";
            case _._._:
              return ".vtt";
            case _._._:
              return ".webp";
          }
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = new Image();
          return (
            (_.onload = () => _.resolve(_)),
            (_.onerror = (_) => {
              console.error("LoadImage failed to load the image, details", _),
                _.resolve(void 0);
            }),
            (_.src = _),
            _.promise
          );
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = document.createElement("video");
          return (
            (_.preload = "metadata"),
            _.addEventListener("loadedmetadata", () => _.resolve(_)),
            (_.onerror = (_) => {
              console.error("LoadVideo failed to load the video, details", _),
                _.resolve(void 0);
            }),
            (_.src = _),
            _.promise
          );
        }
        function _(_) {
          return _.startsWith("image/");
        }
        function _(_) {
          return _.startsWith("video/");
        }
        function _(_, _) {
          return _ ? _(_) : _(_);
        }
        async function _(_, _) {
          if (_) return _(URL.createObjectURL(_));
          {
            const _ = (0, _._)(),
              _ = new FileReader();
            (_.onload = () => _.resolve(_.result ?? void 0)),
              (_.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  _.error,
                ),
                  _.resolve(void 0);
              }),
              _.readAsDataURL(_);
            const _ = await _.promise;
            return _ ? _(_.toString()) : void 0;
          }
        }
        function _(_) {
          return _
            ? _ instanceof HTMLVideoElement
              ? {
                  width: _.videoWidth,
                  height: _.videoHeight,
                }
              : {
                  width: _.width,
                  height: _.height,
                }
            : {
                width: 0,
                height: 0,
              };
        }
        function _(_, _) {
          if (!_) return _;
          const _ = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const _ of _)
            _.has(_.name.toLowerCase()) || (_[_.name] = _.value);
          return _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              rgSources: _,
              onIncrementalError: _,
              onError: _,
              strAltText: _,
              ref: _,
              ..._
            } = _,
            [_, _] = _.useState(0),
            _ = _.useMemo(() => JSON.stringify(_), [_]),
            [_, _] = _.useState(_);
          _ != _ && (_(_), _(0));
          const _ = _.useMemo(() => {
              let _ = "";
              return (
                _ && _.length > _ && (_ = _[_]),
                _ ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    _,
                    _,
                  ),
                  (_ =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                _
              );
            }, [_, _, _]),
            _ = _.useCallback(
              (_) => {
                _?.(_, _[_], _);
                const _ = _ + 1;
                _ >= _.length && _ && _(_), _ < _.length && _(_);
              },
              [_, _, _, _],
            ),
            _ = _.useRef(null);
          return (
            _.useImperativeHandle(
              _,
              () => ({
                imgRef: _,
                nSourceIndex: _,
                nSourceLength: _.length,
              }),
              [_, _, _],
            ),
            _.useEffect(() => {
              const _ = _.current;
              _?.complete && _.naturalWidth == 0 && (_.src = _.src);
            }, []),
            (0, _.jsx)(
              "img",
              {
                ref: _,
                ..._,
                src: _,
                onError: _,
                alt: _,
              },
              _,
            )
          );
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _._)()
            ? (0, _.jsx)(_._, {
                ..._,
              })
            : (0, _._)()
              ? (0, _.jsx)(_._, {
                  ..._,
                  bShowReviewSummary: !0,
                })
              : (0, _.jsx)(_._, {
                  ..._,
                });
        }
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
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _, strUrlOverride: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return (
            (0, _.useEffect)(() => {
              if (_) {
                const _ = `${_._.STORE_BASE_URL}${_.store_url_path}`.replace(
                  "/app/",
                  _ ?? "/verified/",
                );
                _ != window.location.href &&
                  window.history.replaceState({}, "", _);
              }
            }, [_, _]),
            !_ || !_
              ? null
              : (0, _.jsx)(_._, {
                  method: "verifiedprogram",
                  children: (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_, {
                      _: _,
                    }),
                  }),
                })
          );
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = `${_._.CLAN_CDN_ASSET_URL}images/41316928/846f603df6057b070667f2741730c2038648955d.png`;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: _().Headline,
                children: _._.LocalizeReact(
                  "#VerifiedProgram_DeckTitle",
                  _?.name,
                  (0, _.jsxs)("span", {
                    className: _().Verified,
                    children: [
                      (0, _.jsx)("img", {
                        src: _,
                        alt: _._.Localize("#VerifiedProgram_DeckAlt"),
                      }),
                      _._.Localize("#VerifiedProgram_DeckTitle_Verified"),
                    ],
                  }),
                ),
              }),
              (0, _.jsx)("div", {
                className: _().Subtitle,
                children: _._.LocalizeReact(
                  "#VerifiedProgram_DeckSubTitle",
                  (0, _.jsx)(_._, {
                    className: _().Link,
                    href: `${_._.STORE_BASE_URL}greatondeck`,
                    children: _._.Localize("#VerifiedProgram_GreatOnDeck"),
                  }),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { _: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().Ctn,
            children: [
              (0, _.jsx)(_, {
                _: _,
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)("page_content"),
                children: [
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                  (0, _.jsx)(_, {}),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ =
            (0, _._)(_, "library_hero_2x") ?? (0, _._)(_, "library_hero");
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: _().BackgroundImageCtn,
                children: (0, _.jsx)("img", {
                  src: _,
                  alt: "",
                }),
              }),
              (0, _.jsx)("div", {
                className: _().BackgroundImageBlurCtn,
                children: (0, _.jsx)("img", {
                  src: _,
                  alt: "",
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { _: _ } = _;
          return (0, _.jsx)("div", {
            className: _().CapsuleWrapper,
            children: (0, _.jsx)(_, {
              _: "appid" in _ ? _.appid : 0,
              type: "game",
              bShowDeckCompatibilityDialog: !1,
              bShowDemoButton: !0,
              bAutoFocus: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function _(_) {
          const _ = (0, _._)(
            `${_._.STORE_BASE_URL}steamdeck?utm_source=verifiedpage`,
            "banner",
          );
          return (0, _.jsx)(_._, {
            href: _,
            className: (0, _._)(_().HardwareBannerCtn),
            children: (0, _.jsx)(_, {}),
          });
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_);
          if (!_) return null;
          const _ = `${_._.CLAN_CDN_ASSET_URL}images/39049601/8f21143ba4f6331e117568740aa286e975a5afb1.png`,
            { rgDashTrailers: _, rgHlsTrailers: _ } = (0, _._)(_);
          return (0, _.jsxs)("div", {
            className: _().DeviceFullWidthShadow,
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().DeviceWrapper),
                children: [
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)("div", {
                      className: _().TrailerCtn,
                      children: (0, _.jsx)(_._, {
                        dashManifests: _,
                        hlsManifest: _[0],
                        screenshot:
                          _.screenshot_full ?? _.screenshot_medium ?? "",
                        altText: _?.name ?? "",
                        muteWhenAutoplayBlocked: !0,
                      }),
                    }),
                  }),
                  (0, _.jsx)("img", {
                    src: _,
                    alt: _._.Localize("#VerifiedProgram_DeckDeviceAlt"),
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _().VideoDisclaimer,
                children: _._.Localize("#VerifiedProgram_DeckDisclaimer"),
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _.sfN)(_._.LANGUAGE);
          return (0, _.jsx)(_._, {
            language: _,
            strAltText: _._.Localize("#VerifiedProgram_DeckShopBannerAlt"),
            strImageToken: _
              ? "{STEAM_CLAN_LOC_IMAGE}/39049601/6e0ec24257ee5ada6e922c2130eaa75ce83747e8.jpg"
              : "{STEAM_CLAN_LOC_IMAGE}/39049601/c18308dc60fd94678bb348608ddc0d6b8fdb11ab.jpg",
          });
        }
        function _(_) {
          const {
            match: {
              params: { appid: _ },
            },
          } = _;
          return (0, _.jsx)(_, {
            appid: Number.parseInt(_),
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_3sPRGG8vL4sM6N-8FZo5fT",
          Link: "-YNVdnBAoV2HQCkuR8C1h",
          BackgroundImageCtn: "_31Bm2h6tK_J4K2yYHTtttM",
          BackgroundImageBlurCtn: "_1LzeWsFv8n7BMFyJ1c0bF",
          Headline: "qQs0819GK5nJMJhEfDfqO",
          Verified: "_1DN1jmbJKCQol4bLgow8xK",
          Subtitle: "_2Tf8QYNJrsywiXvKyV2Sm6",
          DeviceFullWidthShadow: "_33ittd22VgVN6fUvIAgkqu",
          VideoDisclaimer: "_2FW4jsZDS7ltbcDrOQStiW",
          DeviceWrapper: "_3DCMQY1PEeYS2E7r8NJXKQ",
          CapsuleWrapper: "_1JhQMb3X6rKYyPqZWOZG5w",
          HardwareBannerCtn: "_2L4eqs1UZ1QEjRC1S8qiJA",
          TrailerCtn: "_3LbKJsBRhn7hEnOSlKZd64",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          strMediumWidth: "800px",
          strMaxMobileWidth: "600px",
          MediaContainer: "_17AnAUol6F9ESSlAVOkOR-",
          MediaContainerMM: "_1Tu2CrBa6Z3v2u5ysIVCgY",
          ScreenshotThumbnailRow: "_3wPvOiq2zq3UJa_V5yq1BU",
          HilightGrid: "afMTFv3mQcpX11KsRQBFe",
          MainMediaCtn: "_2aKn0S9zGN4Xj9bwODcL4q",
          VideoThumbnail: "_2GhyyIvyUNXt2pBSQ23xKP",
          ScreenshotDisplayCtn: "_2syrNfuweRm7tMaHtnsLIS",
          MainCapsuleWithHover: "_20P19pxcCCC_Er1aQHk0wG",
          MainCapsule: "_27-W3skVjYBfNp6t1cTtnj",
          AppDetails: "_3YbIHh6FwfB9zQVNU18OSy",
          GameName: "_2aMRa54ScYF_qLXc6-dsRN",
          ShortDesc: "_10C6v9rot6kwBCcXpZVENg",
          ThumbnialClickable: "_1RTH8HUO6crMdjXdJjz_-U",
          ThumbnailCtn: "_2s3nR6hnRPmnLN1kr5khr-",
          ThumbnailButton: "_1WQUuWkffHs6P77xq6DMhs",
          videoPlaying: "_1_yxluHJLi2TiNbG5b2KYk",
          VideoPlayButton: "KqB15I24fyQtJzf6XANUI",
          VideoLargeContainer: "_3n_2JdJT5wZ8s9KG2vtLYz",
          CloseButton: "_2dgOJd4j8-hJA92PrLWqZT",
          VideoPopupContainers: "_1_L84gO810flUzqiuUkG7H",
          VideoLarge: "_3AL75Io6tlvBgexvKuaPG0",
        };
      },
    },
  ]);
})();
