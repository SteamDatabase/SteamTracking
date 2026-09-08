"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5289],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid"));
      function _(_, _) {
        return `${_}/${_}`;
      }
      const _ = _.createContext({});
      new RegExp(
        `${_._.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
        "gi",
      );
      function _(_, _, _ = 0) {
        return _(_, _, _, _.useContext(_));
      }
      function _(_, _, _ = 0, _) {
        if (!_ || 0 == _.length) return null;
        if (_?.startsWith(_._)) return _.ReplacementTokenToClanImageURL(_);
        if (_?.startsWith(_._)) {
          const _ = _.GetBaseURL(),
            _ = _.substring(_._.length + 1),
            _ = parseInt(_.substring(0, _.indexOf("/"))),
            _ = _.substring(_.indexOf("/") + 1),
            _ = _.GenerateURLFromHashAndExt(_, _);
          if (!1 === _?.[_(_, _)]) return _;
          const _ = _.GetLocalizedClanImageFileNames(_, _).map(
            (_) => _ + _ + "/" + _ + "?t=" + _,
          );
          return _.push(_), _;
        }
        return _;
      }
      const _ = {
        GetBaseURL: () => `${_._.CLAN_CDN_ASSET_URL}images/`,
        GetBaseURLV2: () => `${_._.CLAN_CDN_ASSET_URL}locimages/`,
        ReplacementTokenToClanImageURL(_) {
          return (_ = _.replace(_._, this.GetBaseURL())).replace(
            "http://",
            "https://",
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
        GetExtensionString: (_) =>
          (null != _.file_type ? (0, _._)(_.file_type) : null) ?? ".jpg",
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
        GetExtStringFromHashAndExt: (_) => _.substring(_.lastIndexOf(".")),
        GetLocalizedClanImageFileNames(_, _) {
          if (null == _) return [];
          const _ = this.GetHashFromHashAndExt(_),
            _ = this.GetExtStringFromHashAndExt(_),
            _ = [_ + "/" + (0, _.LgB)(_) + _];
          return (
            _ == _.Pn1 && _.push(_ + "/" + (0, _.x6o)((0, _.LgB)(_)) + _), _
          );
        },
        GenerateURLFromHashAndExt(_, _, _ = _._.full) {
          return this.GenerateURLFromHashAndExtAndLang(_, _, _, _.xPp, void 0);
        },
        GenerateURLFromHashAndExtAndLang(_, _, _ = _._.full, _, _) {
          _ instanceof _._ && (_ = _.GetAccountID());
          let _ = this.GetBaseURL();
          const _ = null != _ && _ != _.xPp;
          if (_ != _._.full || _) {
            let _ = _.substring(_.lastIndexOf(".")),
              _ = _.substring(0, _.length - _.length);
            return _ && _ != _.Bhc && "localized_image_group" == _
              ? _ + _ + "/" + _ + "/" + (0, _.x6o)((0, _.LgB)(_)) + _
              : _ + _ + "/" + _ + _ + _;
          }
          return _ + _ + "/" + _;
        },
        GetHashAndExtFromURL(_) {
          let _ = this.GetBaseURL();
          return _?.startsWith(_)
            ? -1 == (_ = _.substring(_.length)).indexOf("/")
              ? null
              : (_ = _.substring(_.indexOf("/") + 1))
            : null;
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
        GetMimeType: (_) => (0, _._)(_),
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
          let _,
            _ = new Image();
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
                !(_.width > 0 && _.height > 0))
              )
                return (
                  (0, _._)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + _,
                  ),
                  (_.err_msg = "No resolution reported for url " + _),
                  void _.resolve(_)
                );
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
        BIsClanImageVideo: (_) => _.file_type == _._._ || _.file_type == _._._,
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _;
      !(function (_) {
        (_.full = ""),
          (_.background_main = "_960x311"),
          (_.background_mini = "_480x156"),
          (_.capsule_main = "_400x225"),
          (_.spotlight_main = "_1054x230");
      })(_ || (_ = {}));
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
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
        return _.endsWith(".jpg") || _.endsWith(".jpeg")
          ? "image/jpeg"
          : _.endsWith(".png")
            ? "image/png"
            : _.endsWith(".gif")
              ? "image/gif"
              : _.endsWith(".mp4")
                ? "video/mp4"
                : _.endsWith(".webm")
                  ? "video/webm"
                  : _.endsWith(".srt")
                    ? "text/srt"
                    : _.endsWith(".vtt")
                      ? "text/vtt"
                      : _.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
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
          __webpack_require__.addEventListener("loadedmetadata", () =>
            _.resolve(_),
          ),
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
            __webpack_require__.readAsDataURL(_);
          const _ = await _.promise;
          if (!_) return;
          return _(_.toString());
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
    },
  },
]);
