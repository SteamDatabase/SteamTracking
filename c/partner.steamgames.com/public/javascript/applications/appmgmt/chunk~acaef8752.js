(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [23506],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return `rgba(${_.rgb._}, ${_.rgb._}, ${_.rgb._}, ${_.rgb._})`;
        }
        function _(_) {
          const _ = parseInt(_.slice(1), 16),
            _ = (_ >> 16) & 255,
            _ = (_ >> 8) & 255,
            _ = _ & 255;
          return `rgba(${_}, ${_}, ${_}, 1)`;
        }
        function _(_) {
          const { color: _, onChange: _, strTitle: _, disableAlpha: _ } = _,
            [_, _] = (0, _.useState)(() => _ || "rgba(255, 255, 255, 1)"),
            _ = (0, _.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(_._.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const _ = (await new window.EyeDropper().open()).sRGBHex,
                  _ = _(_);
                _(_), _(_);
              } catch (_) {
                console.warn(_._.Localize("#Sale_EyeDropperFailed"), _);
              }
            }, [_]);
          return (0, _.jsxs)("div", {
            className: _().ColorPickerDialog,
            children: [
              !!_ &&
                (0, _.jsx)(_._, {
                  children: _,
                }),
              (0, _.jsx)(_._, {
                onChange: (_) => {
                  const _ = _(_);
                  _(_), _(_);
                },
                color: _,
                disableAlpha: _,
                className: _().ColorPickerCtn,
              }),
              (0, _.jsx)("div", {
                className: _().EyeDropperCtn,
                children: (0, _.jsx)(_._, {
                  toolTipContent: _._.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, _.jsx)(_._, {
                    className: _().EyeDropperBtn,
                    onClick: _,
                    children: (0, _.jsx)(_.O7b, {}),
                  }),
                }),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              color: _,
              onChange: _,
              onRequestClose: _,
              disableAlpha: _,
              strTitle: _,
            } = _,
            _ = (0, _.useRef)(null);
          return (
            (0, _.useEffect)(() => {
              const _ = _.current?.ownerDocument ?? document,
                _ = (_) => {
                  _.current && !_.current.contains(_.target) && _();
                },
                _ = (_) => {
                  _.key === "Escape" && _();
                };
              return (
                _.addEventListener("pointerdown", _, !0),
                _.addEventListener("keydown", _, !0),
                () => {
                  _.removeEventListener("pointerdown", _, !0),
                    _.removeEventListener("keydown", _, !0);
                }
              );
            }, [_]),
            (0, _.jsx)("div", {
              ref: _,
              children: (0, _.jsx)(_._, {
                color: _,
                disableAlpha: _,
                strTitle: _ ?? _._.Localize("#Button_Color"),
                onChange: _,
              }),
            })
          );
        }
        function _() {
          return {
            openColorPicker: (0, _.useCallback)((_, _) => {
              let _ = null;
              const _ = () => _?.Hide();
              _ = (0, _._)(
                (0, _.jsx)(_, {
                  color: _.color,
                  disableAlpha: _.disableAlpha,
                  strTitle: _.strTitle,
                  onChange: _.onChange,
                  onRequestClose: _,
                }),
                _,
                {
                  bDisablePopTop: !0,
                },
              );
            }, []),
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
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
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
        var _ = __webpack_require__("chunkid");
        const _ = 622,
          _ = 1920,
          _ = 450,
          _ = 800,
          _ = 460,
          _ = 2108,
          _ = 300,
          _ = 800,
          _ = 300,
          _ = 644,
          _ = 337,
          _ = 155,
          _ = 433,
          _ = 199,
          _ = ["app_header_capsule", "app_main_capsule"],
          _ = [
            "sale_header",
            "sale_logo",
            "capsule",
            "product_banner",
            "product_mobile_banner",
            "localized_title_image",
          ],
          _ = ["takeunder_art", "takeunder_mobile_art"],
          _ = [
            "takeover_art",
            "takeover_mobile_art",
            "takeover_webm_art",
            "takeover_mp4_art",
            "takeover_webm_mobile_art",
            "takeover_mp4_mobile_art",
          ],
          _ = ["marketingmessage_art", "marketingmessage_art_2"],
          _ = [
            "marketingmessage_art_eventcapsule",
            "marketingmessage_art_2_eventcapsule",
          ],
          _ = ["spotlight_art_hero"],
          _ = [..._, ..._, ..._, ..._, ..._, ..._, ..._],
          _ = [
            "spotlight",
            "background",
            "hero",
            "email_full",
            "email_centered",
            "broadcast_left",
            "broadcast_right",
            "localized_image_group",
            "sale_section_background",
            "sale_section_title",
            "sale_overlay",
            "link_capsule",
            "product_banner_override",
            "product_mobile_banner_override",
            "schedule_track_art",
            "tab_bar_background",
            "bestofyear_banner",
            "bestofyear_banner_mobile",
            "localized_marketing_message",
            "localized_optin_banner",
            "old_spotlight_art",
            "user_poll_background",
            "localized_marketingmessage_webm",
            "localized_marketingmessage_mp4",
            "localized_subtitles",
            "localized_marketingmessage_poster",
            "localized_marketingmessage_background",
            "localized_store_app_spotlight",
            "localized_store_app_spotlight_mobile",
            "localized_email_image",
            "localized_background_art",
            "edition_comparison",
            "template_asset",
            "sale_store_capsule_header",
            "sale_store_capsule_small",
            "sale_store_capsule_main",
            "sale_store_capsule_vertical",
            ..._,
          ];
        function _(_) {
          return Array.isArray(_) ? _[0] : _;
        }
        function _(_) {
          const _ = Array.isArray(_) ? _ : [_];
          return Math.min(..._);
        }
        function _(_, _) {
          return _ === void 0 ? _(_) : Array.isArray(_) ? _[_] : _;
        }
        const _ = [_._._, _._._, _._._, _._._],
          _ = [_._._, _._._, _._._],
          _ = [_._._, _._._],
          _ = [_._._, _._._],
          _ = [_._._, _._._],
          _ = [_._._, _._._, _._._, _._._, _._._, _._._],
          _ = {
            capsule: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            marketingmessage_art_2_eventcapsule: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            marketingmessage_art_eventcapsule: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            spotlight: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            localized_store_app_spotlight: {
              width: 1200,
              height: 260,
              rgAcceptableTypes: _,
            },
            localized_store_app_spotlight_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            localized_title_image: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            background: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            hero: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            email_full: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            email_centered: {
              width: _,
              height: _,
              rgAcceptableTypes: _,
            },
            broadcast_left: {
              width: [_, _],
              height: [_, _],
              rgAcceptableTypes: _,
            },
            broadcast_right: {
              width: [_, _],
              height: [_, _],
              rgAcceptableTypes: _,
            },
            sale_header: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            sale_overlay: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            localized_image_group: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            localized_background_art: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            sale_section_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            sale_section_title: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            link_capsule: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            product_banner: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: _,
            },
            product_mobile_banner: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            product_banner_override: {
              width: [1200, 1100],
              height: [175, 160],
              rgAcceptableTypes: _,
            },
            product_mobile_banner_override: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            schedule_track_art: {
              width: 196,
              height: 92,
              rgAcceptableTypes: _,
            },
            tab_bar_background: {
              width: 1500,
              height: 100,
              rgAcceptableTypes: _,
            },
            sale_logo: {
              width: [1200, 940],
              height: [460, 460],
              rgAcceptableTypes: _,
            },
            bestofyear_banner: {
              width: 1100,
              height: 160,
              rgAcceptableTypes: _,
            },
            bestofyear_banner_mobile: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            localized_marketing_message: {
              width: 570,
              height: 600,
              rgAcceptableTypes: _,
            },
            localized_optin_banner: {
              width: 1e3,
              height: 150,
              rgAcceptableTypes: _,
            },
            localized_marketingmessage_webm: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [_._._],
            },
            localized_marketingmessage_mp4: {
              width: 570,
              height: 600,
              rgAcceptableTypes: [_._._],
            },
            localized_partnerevent_webm: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [_._._],
            },
            localized_partnerevent_mp4: {
              width: 800,
              height: 450,
              rgAcceptableTypes: [_._._],
            },
            localized_subtitles: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: [_._._, _._._],
            },
            localized_marketingmessage_poster: {
              width: 528,
              height: 297,
              rgAcceptableTypes: [_._._, _._._],
            },
            localized_marketingmessage_background: {
              width: 570,
              height: 600,
              rgAcceptableTypes: _,
            },
            localized_email_image: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            template_asset: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            user_poll_background: {
              width: 0,
              height: 0,
              bDisableEnforceDimensions: !0,
              rgAcceptableTypes: _,
            },
            sale_store_capsule_header: {
              width: 920,
              height: 430,
              rgAcceptableTypes: _,
            },
            sale_store_capsule_small: {
              width: 462,
              height: 174,
              rgAcceptableTypes: _,
            },
            sale_store_capsule_main: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: _,
            },
            sale_store_capsule_vertical: {
              width: 748,
              height: 896,
              rgAcceptableTypes: _,
            },
            spotlight_art: {
              width: 306,
              height: 260,
              rgAcceptableTypes: _,
            },
            spotlight_art_hero: {
              width: 748,
              height: 896,
              rgAcceptableTypes: _,
            },
            old_spotlight_art: {
              width: 306,
              height: 350,
              rgAcceptableTypes: _,
            },
            marketingmessage_art: {
              width: 570,
              height: 600,
              rgAcceptableTypes: _,
            },
            marketingmessage_art_2: {
              width: 570,
              height: 600,
              rgAcceptableTypes: _,
            },
            takeover_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: _,
            },
            takeover_webm_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [_._._],
            },
            takeover_mp4_art: {
              width: 1850,
              height: 450,
              rgAcceptableTypes: [_._._],
            },
            takeover_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: _,
            },
            takeover_webm_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [_._._],
            },
            takeover_mp4_mobile_art: {
              width: 500,
              height: 350,
              rgAcceptableTypes: [_._._],
            },
            takeunder_art: {
              width: 1200,
              height: 190,
              rgAcceptableTypes: _,
            },
            takeunder_mobile_art: {
              width: 500,
              height: 160,
              rgAcceptableTypes: _,
            },
            app_header_capsule: {
              width: 920,
              height: 430,
              rgAcceptableTypes: _,
            },
            app_main_capsule: {
              width: 1232,
              height: 706,
              rgAcceptableTypes: _,
            },
          };
        function _(_, _, _, _) {
          let _ = null;
          if (Array.isArray(_)) {
            if (
              ((_ = _.map((_, _) => (_ === _ ? _ : void 0)).filter(
                (_) => _ !== void 0,
              )),
              _.length <= 0)
            )
              return !1;
          } else if (_ !== _) return !1;
          if (Array.isArray(_)) {
            const _ = _.map((_, _) => (_ === _ ? _ : void 0)).filter(
              (_) => _ !== void 0,
            );
            if (_.length <= 0 || (_?.length && !_.some((_) => _.includes(_))))
              return !1;
          } else if (_ !== _) return !1;
          return !0;
        }
        function _(_, _, _, _) {
          const _ = _[_];
          return _
            ? _.bDisableEnforceDimensions
              ? !!_
              : _(_, _, _.width, _.height)
            : !1;
        }
        function _(_, _, _) {
          const _ = _[_];
          if (!_) return !1;
          if (_.bDisableEnforceDimensions) return !0;
          if (Array.isArray(_.width)) {
            if (_.width.filter((_) => _ < _).length == _.width.length)
              return !1;
          } else if (_ < _.width) return !1;
          if (Array.isArray(_.height)) {
            if (_.height.filter((_) => _ < _).length == _.height.length)
              return !1;
          } else if (_ < _.height) return !1;
          return !0;
        }
        function _(_) {
          const _ = _[_];
          return (
            _.rgAcceptableTypes.includes(_._._) ||
            _.rgAcceptableTypes.includes(_._._)
          );
        }
        function _(_, _) {
          return _.filter((_) => _(_, _));
        }
        function _(_, _) {
          return _[_].rgAcceptableTypes.includes(_);
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _(_) {
          return _ == "waiting" || _ == "uploading" || _ == "processing";
        }
        class _ {
          m_originalSize = {
            width: 0,
            height: 0,
          };
          m_originalDataUrl = "";
          dataUrl = void 0;
          width = 0;
          height = 0;
          status = "pending";
          message = "";
          language = void 0;
          file;
          filename;
          uploadTime;
          fileType;
          constructor(_, _, _, _, _) {
            (0, _._)(this),
              (this.file = _),
              (this.filename = _),
              (this.fileType = (0, _._)(_) ?? _._._),
              (this.language = _),
              (this.uploadTime = Date.now()),
              (this.status = "pending"),
              (this.m_originalSize = _),
              (this.height = _.height),
              (this.width = _.width),
              (this.m_originalDataUrl = _),
              (this.dataUrl = _);
          }
          ResetImage() {
            (this.height = this.m_originalSize.height),
              (this.width = this.m_originalSize.width),
              (this.dataUrl = this.m_originalDataUrl);
          }
          GetImageOptionLabel() {}
        }
        _([_._], _.prototype, "dataUrl", 2),
          _([_._], _.prototype, "width", 2),
          _([_._], _.prototype, "height", 2),
          _([_._], _.prototype, "status", 2),
          _([_._.ref], _.prototype, "message", 2),
          _([_._], _.prototype, "language", 2);
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = 960,
          _ = 311,
          _ = 480,
          _ = 156;
        class _ extends _._ {
          m_rgImageOptions;
          m_currentImageOption = void 0;
          m_currentImageOptionKey = void 0;
          constructor(_, _, _, _, _, _) {
            super(_, _, _, _, _), (0, _._)(this), (this.m_rgImageOptions = _);
          }
          IsValidAssetType(_, _) {
            let _ = 0,
              _ = 0,
              _ = !1,
              _ =
                !this.m_rgImageOptions ||
                this.m_rgImageOptions.length === 0 ||
                this.m_rgImageOptions.some(
                  (_) => _.sKey == this.GetCurrentImageOption()?.sKey,
                );
            if (_) (_ = _.width), (_ = _.height), (_ = !0);
            else if (this.GetCurrentImageOption()) {
              const _ = _._[this.GetCurrentImageOption().artworkType];
              _ &&
                ((_ = _.width),
                (_ = _.height),
                (_ = !_.bDisableEnforceDimensions));
            }
            const _ = this.width >= (0, _._)(_) && this.height >= (0, _._)(_),
              _ = _ ? (0, _._)(this.width, this.height, _, _) : _,
              _ = _ && _ != this.fileType,
              _ =
                this.m_rgImageOptions && this.m_rgImageOptions.length > 0
                  ? (0, _._)(
                      this.fileType,
                      this.m_rgImageOptions?.map((_) => _.artworkType) || [],
                    ).length == 0
                  : !1,
              _ = !!(0, _._)(this.fileType);
            let _ = "",
              _ = !1,
              _;
            return (
              _
                ? _
                  ? (_ = (0, _._)("#ImageUpload_InvalidFileType"))
                  : _
                    ? (_ = (0, _._)(
                        "#ImageUpload_InvalidFormat",
                        (0, _._)(_) ?? "",
                      ))
                    : !_ && !_
                      ? (_ = (0, _._)(
                          "#ImageUpload_InvalidResolution",
                          (0, _._)(_),
                          (0, _._)(_),
                        ))
                      : _
                        ? !_ && _
                          ? ((_ = (0, _._)(
                              "#ImageUpload_InvalidDimensions",
                              (0, _._)(_),
                              (0, _._)(_),
                            )),
                            (_ = !0))
                          : ((Array.isArray(_) && this.width != (0, _._)(_)) ||
                              (Array.isArray(_) &&
                                this.height != (0, _._)(_))) &&
                            ((_ = _ ?? []),
                            _.push(
                              (0, _._)(
                                "#ImageUpload_PreferredDimension",
                                (0, _._)(_),
                                (0, _._)(_),
                              ),
                            ))
                        : (_ = (0, _._)(
                            "#ImageUpload_TooSmall",
                            (0, _._)(_),
                            (0, _._)(_),
                          ))
                : (_ = (0, _._)("#ImageUpload_InvalidFormatSelected")),
              {
                error: _,
                warnings: _,
                needsCrop: _,
                match: this.GetCurrentImageOption(),
              }
            );
          }
          BSupportsLanguages() {
            return !0;
          }
          ComputeDefaultImageOption() {
            if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0)
              return;
            const _ = (0, _._)(
              this.fileType,
              this.m_rgImageOptions?.map((_) => _.artworkType),
            );
            let _ = _(this.width, this.height, _, !1);
            if ((_ === void 0 && (_ = _(this.width, this.height, _, !0)), _)) {
              const _ = this.m_rgImageOptions.find(
                (_) =>
                  _.artworkType == _ &&
                  (!_.bEnforceDimensions ||
                    (_.width == this.width && _.height == this.height)),
              );
              if (_) return _;
            }
            return this.m_rgImageOptions[0];
          }
          get ImageOptions() {
            return this.m_rgImageOptions;
          }
          GetCurrentImageOptionKey() {
            return this.m_currentImageOptionKey;
          }
          GetCurrentImageOption() {
            return (
              this.m_currentImageOption ?? this.ComputeDefaultImageOption()
            );
          }
          SetCurrentImageOption(_) {
            (this.m_currentImageOption = _),
              (this.m_currentImageOptionKey = _?.sKey);
          }
        }
        _([_._], _.prototype, "m_currentImageOption", 2),
          _([_._], _.prototype, "m_currentImageOptionKey", 2);
        class _ extends _ {
          video;
          constructor(_, _, _, _, _, _, _) {
            super(_, _, _, _, _, _), (this.video = _);
          }
          BIsOriginalMinimumDimensions(_) {
            return (0, _._)(
              this.video.videoWidth,
              this.video.videoHeight,
              _.artworkType,
            );
          }
          FileTypeMatchesImageTypes(_) {
            return (0, _._)(this.fileType, _.artworkType);
          }
          BIsVideo() {
            return _._.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        class _ extends _ {
          constructor(_, _, _, _) {
            super(_, _, _, _, URL.createObjectURL(_), {
              width: 0,
              height: 0,
            });
          }
          BIsOriginalMinimumDimensions(_) {
            return (0, _._)(_.artworkType);
          }
          FileTypeMatchesImageTypes(_) {
            return (0, _._)(this.fileType, _.artworkType);
          }
          BIsVideo() {
            return _._.includes(this.fileType);
          }
          GetResizeDimension() {}
        }
        function _(_) {
          const _ = _.split(".").pop()?.toLocaleLowerCase();
          return _ == "webm" || _ == "mp4";
        }
        class _ extends _ {
          bCropped = !1;
          localizedImageGroupPrimaryImage;
          media;
          constructor(_, _, _, _, _, _, _, _) {
            super(_, _, _, _, _, _),
              (0, _._)(this),
              (this.media = _),
              (this.localizedImageGroupPrimaryImage = _);
          }
          IsValidAssetType(_, _) {
            return (
              (_ = _ ?? this.localizedImageGroupPrimaryImage?.file_type),
              super.IsValidAssetType(_, _)
            );
          }
          GetCanvasImageSource() {
            return this.media;
          }
          BIsOriginalMinimumDimensions(_) {
            return (0, _._)(
              this.media?.width ?? 0,
              this.media?.height ?? 0,
              _.artworkType,
            );
          }
          FileTypeMatchesImageTypes(_) {
            return (0, _._)(this.fileType, _.artworkType);
          }
          BIsVideo() {
            return _._.includes(this.fileType);
          }
          GetResizeDimension() {
            return _(this.GetCurrentImageOption()?.artworkType);
          }
        }
        _([_._], _.prototype, "bCropped", 2);
        function _(_) {
          if (_ === "background")
            return [
              {
                width: _,
                height: _,
              },
              {
                width: _,
                height: _,
              },
            ];
          if (_ === "capsule")
            return [
              {
                width: (0, _._)(_._[_].width) / 2,
                height: (0, _._)(_._[_].height) / 2,
              },
            ];
          if (_ === "spotlight")
            return [
              {
                width: (0, _._)(_._[_].width) / 2,
                height: (0, _._)(_._[_].height) / 2,
              },
            ];
        }
        function _(_, _, _, _ = !1) {
          if (_) {
            for (let _ of _)
              if (_ ? (0, _._)(_, _, _) : (0, _._)(_, _, _)) return _;
          }
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        class _ {}
        function _(_, _, _) {
          const _ = _.filter((_) => {
            const _ = _.IsValidAssetType(_, _);
            return _.status === "pending" && !_.error && !_.needsCrop;
          });
          return (
            _.forEach((_) => {
              (_.status = "waiting"), (_.message = "");
            }),
            _
          );
        }
        async function _(_, _, _, _, _) {
          const _ = _(_, _, _),
            _ = [];
          for (const _ of _) {
            _.status = "uploading";
            const _ = await _(_, _.filename, _.language ?? _.xPp, _);
            (_.status = _.bSuccess ? "success" : "failed"),
              (_.message =
                !_.bSuccess && _.elErrorMessage ? _.elErrorMessage : ""),
              _.push({
                bSuccess: _.bSuccess,
                image: _,
                uploadResult: _.result,
              });
          }
          return _;
        }
        async function _(_, _, _, _, _, _) {
          const _ = _(_, _, _),
            _ = [];
          let _ = 0;
          const _ = async () => {
              for (; _ < _.length; ) {
                const _ = _++,
                  _ = _[_];
                _.status = "uploading";
                const _ = await _(_, _.filename, _.language ?? _.xPp, _);
                (_.status = _.bSuccess ? "success" : "failed"),
                  (_.message =
                    !_.bSuccess && _.elErrorMessage ? _.elErrorMessage : ""),
                  (_[_] = {
                    image: _,
                    uploadResult: _,
                  });
              }
            },
            _ = Array.from(
              {
                length: Math.floor(_),
              },
              () => _(),
            );
          return (
            await Promise.all(_),
            _.map((_) => ({
              bSuccess: _.uploadResult.bSuccess,
              image: _.image,
              uploadResult: _.uploadResult.result,
            }))
          );
        }
        class _ extends _ {
          m_cancel = void 0;
          async UploadAllImages(_, _) {
            this.m_cancel = _().CancelToken.source();
            const _ = this.BGetUploadsAreInSerial() ? 1 : 4;
            let _;
            const _ = this.UploadSingleImage.bind(this);
            return (
              _ > 1
                ? (_ = await _(
                    this.GetUploadImages(),
                    _,
                    _,
                    _,
                    _,
                    this.m_cancel.token,
                  ))
                : (_ = await _(
                    this.GetUploadImages(),
                    _,
                    _,
                    _,
                    this.m_cancel.token,
                  )),
              _
            );
          }
          CancelAllUploads() {
            this.m_cancel?.cancel((0, _._)("#ImageUpload_CancelRequest"));
          }
        }
        function _(_, _, _) {
          if (((_ == null || _ == null) && (_ = _), !_ || _.length === 0))
            return _;
          for (const _ of _) if (_._.IsELanguageValidInRealm(_, _)) return _;
          for (const _ of _) if (_._.IsELanguageValidInRealm(_, _)) return _;
          return _.includes(_._.k_ESteamRealmGlobal) ? _.Bhc : _.ZLm;
        }
        function _(_, _ = _.Bhc) {
          let _ = _.lastIndexOf(".");
          _ != -1 && (_ = _.slice(0, _).toLowerCase());
          let _ = null,
            _ = 0;
          _.endsWith("korean") && ((_ = _.Pn1), (_ = 6));
          for (let _ = _.Bhc; _ < _.bP9; ++_) {
            const _ = (0, _.wwZ)(_);
            if (_.length <= _) continue;
            if (_.endsWith(_) && _.length > _.length + 2) {
              const _ = _[_.length - _.length - 1];
              /\p{Alphabetic}|\p{Number}/u.test(_) || ((_ = _), (_ = _.length));
            }
            const _ = (0, _.LgB)(_);
            _.length <= _ || (_.endsWith(_) && ((_ = _), (_ = _.length)));
          }
          const _ = (_) => _.replace(/[\s_-]+$/g, "");
          return {
            language: _ ?? _,
            baseFilename: _ > 0 ? _(_.substring(0, _.length - _)) : _,
          };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !0) {
          const _ = new URLSearchParams({
            ima: "fit",
            impolicy: "Letterbox",
            imcolor: "#000000",
          });
          return (
            _ && _.set("imw", Math.round(_).toString()),
            _ && _.set("imh", Math.round(_).toString()),
            !_ || !_ || !_
              ? _.set("letterbox", "false")
              : _.set("letterbox", "true"),
            "?" + _.toString()
          );
        }
        const _ = null;
        function _(_, _) {
          let _;
          for (let _ of _)
            if (
              (_ ? (_ += ", ") : (_ = ""),
              (_ += `${_}${_(_, 0)} ${_}w`),
              _ >= _)
            )
              break;
          return _;
        }
        function _(_) {
          let {
            src: _,
            orig_width: _,
            orig_height: _,
            sizes: _,
            default_width: _,
            ..._
          } = _;
          _ || (_ = "95vw"), _ || (_ = 1024);
          let _ = `${_}${_(_, void 0)}`,
            _ = _(_, _);
          return React.createElement("img", {
            src: _,
            srcSet: _,
            sizes: _,
            ..._,
          });
        }
        function _(_) {
          const {
            width: _,
            height: _,
            orig_width: _,
            orig_height: _,
            src: _,
            ..._
          } = _;
          let _ = _ + _(_, _),
            _,
            _ = 6;
          if (
            (_ && _ && (_ = Math.min(_, Math.ceil(_ / _))),
            _ && _ && (_ = Math.min(_, Math.ceil(_ / _))),
            _)
          )
            for (let _ of [2, 4, 6]) {
              if (_ > _) break;
              _ ? (_ += ", ") : (_ = ""),
                (_ += `${_}${_(_ && _ * _, _ && _ * _)} ${_}x`);
            }
          return React.createElement("img", {
            ..._,
            src: _,
            srcSet: _,
          });
        }
        function _(_) {
          if (
            (_.indexOf("?") > 0 && (_ = _.split("?")[0]),
            _.endsWith(".jpg") || _.endsWith(".jpeg"))
          )
            return _._._;
          if (_.endsWith(".png")) return _._._;
          if (_.endsWith(".gif")) return _._._;
          if (_.endsWith(".mp4")) return _._._;
          if (_.endsWith(".webm")) return _._._;
          if (_.endsWith(".vtt")) return _._._;
          if (_.endsWith(".srt")) return _._._;
          if (_.endsWith(".webp")) return _._._;
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = class _ {
          m_eCurLang = (0, _.sfN)(_._.LANGUAGE);
          m_rgHasData = (0, _._)([], _.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new _._();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(_) {
            return this.m_eCurLang != _
              ? ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
              : !1;
          }
          SetHasLanguage(_) {
            _.forEach((_, _) => {
              this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
            });
          }
          BHasLanguageData(_) {
            return this.m_rgHasData[_];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(_) {
            _ != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = _);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              _.s_globalSingletonStore || (_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore
            );
          }
          constructor() {
            (0, _._)(this);
          }
        };
        _([_._], _.prototype, "m_eCurLang", 2),
          _([_._], _.prototype, "m_rgHasData", 2),
          _([_._], _.prototype, "m_bHasLocalizationContext", 2),
          _([_._], _.prototype, "GetCurEditLanguage", 1),
          _([_._], _.prototype, "SetCurEditLanguage", 1),
          _([_._.bound], _.prototype, "SetHasLanguage", 1),
          _([_._], _.prototype, "BHasLanguageData", 1);
        let _ = _;
        function _() {
          return (0, _._)(() => _.Get().GetCurEditLanguage());
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, _.useEffect)(() => (_(!0), _(_)), [_]),
            _
              ? (0, _.createElement)(_._, {
                  context: _,
                  serviceTransportOverride: _.GetServiceTransport(),
                  children: _.children,
                })
              : null
          );
        }
        function _(_) {
          const [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: _.bIncludeUnpublished,
              }),
              [_.bIncludeUnpublished],
            );
          return (0, _.createElement)(_._, {
            context: _,
            serviceTransportOverride: _.GetServiceTransport(),
            children: _.children,
          });
        }
        function _() {
          const _ = (0, _._)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (0, _._)(new _._(_._.WEBAPI_BASE_URL, _));
        }
        function _(_) {
          return _._.Initialize(_.GetServiceTransport(), _._.is_partner_member);
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
        function _(_, _, _ = !0) {
          const _ = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            _ = _ || CStoreItemCache.Get().BHasStoreItem(_, _, _) ? _ : null,
            [_, _] = _(_, _, _),
            [_, _] = useState(null),
            [_, _] = _(_, _, _);
          useEffect(() => {
            _?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(_.GetParentAppID());
          }, [_]);
          let _ = _?.GetShortDescription()
            ? StripBBCodeTags(_.GetShortDescription())
            : "";
          (!_ || _.length === 0) &&
            _ &&
            (_ = _?.GetShortDescription()
              ? StripBBCodeTags(_.GetShortDescription())
              : "");
          const _ = _ == _ && (!_ || _ == _);
          return [_, _];
        }
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
              include_optin_registration_tags: _,
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
                include_optin_registration_tags: _,
              };
              let _ = null;
              return (
                !_ ||
                  _ < 0 ||
                  _._.Get().BHasStoreItem(_, _, _) ||
                  (_ !== void 0 && _ && _ == _.current) ||
                  (_ !== _.current && (_(void 0), (_.current = _)),
                  (_ = _().CancelToken.source()),
                  _._.Get()
                    .QueueStoreItemRequest(_, _, _)
                    .then((_) => {
                      !_?.token.reason && _.current === _ && _(_ == _._), _();
                    })),
                () => _?.cancel("useStoreItemCache: unmounting")
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
              _,
            ]),
            !_)
          )
            return [null, _];
          if (_ === !1) return [void 0, _];
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
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          const [_, _] = _(_, _, _);
          let _;
          _?.GetStoreItemType() == EStoreItemType.k_EStoreItemType_Package &&
            !_.GetAssets()?.GetHeaderURL() &&
            _?.GetIncludedAppIDs().length == 1 &&
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
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0) return;
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
                  include_optin_registration_tags: _,
                },
                _ = _.filter(
                  (_) =>
                    !(
                      _._.Get().BHasStoreItem(_, _, _) ||
                      _._.Get().BIsStoreItemMissing(_, _)
                    ),
                );
              if (_.length == 0) return;
              const _ = _().CancelToken.source(),
                _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
              return (
                Promise.all(_).then(() => {
                  _.token.reason || _();
                }),
                () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
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
            _
              ? _.every(
                  (_) =>
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _),
                )
                ? _.every((_) =>
                    _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
                  )
                  ? _
                  : _
                : _
              : _
          );
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
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
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              onDropFiles: _,
              renderDesciption: _,
              elAdditonalButtons: _,
              elOverrideDragAndDropText: _,
            } = _,
            [_, _] = (0, _._)(_),
            [_, _] = (0, _._)(_, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, _.jsxs)("div", {
            ..._,
            className: (0, _._)(
              _ ? _().DragAndDropContainerDragging : _().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!_ && _(),
              (0, _.jsx)("div", {
                children: _ || (0, _._)("#ImagePicker_DragAndDrop"),
              }),
              (0, _.jsxs)("div", {
                className: _().ImageUploadBar,
                children: [
                  _,
                  (0, _.jsxs)("label", {
                    onClick: _,
                    children: [
                      (0, _.jsxs)("span", {
                        children: [(0, _._)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, _.jsx)("span", {
                        className: _().SelectImageButton,
                        children: (0, _._)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              _,
              _.children,
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              imageUploader: _,
              fnUploadComplete: _,
              elOverrideDragAndDropText: _,
              forceResolution: _,
              elAdditonalButtons: _,
              rgRealmList: _,
            } = _,
            [_, _] = (0, _._)(() => [
              _.GetUploadImages(),
              _._.Get().GetCurEditLanguage(),
            ]),
            _ = _.useCallback(
              async (_) => {
                let _ = Array.from(_),
                  _ = !0;
                for (let _ = 0; _ < _.length; _++) {
                  const _ = _[_],
                    { language: _ } = (0, _._)(_?.name, _);
                  try {
                    const _ = (0, _._)(_, _, _);
                    (_ = await _.AddImageForLanguage(_, _)),
                      _ ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            _ +
                            " file=" +
                            _.name,
                        ),
                        (0, _._)(
                          (0, _.jsx)(_._, {
                            strDescription: (0, _._)(
                              "#ImagePicker_Error",
                              _.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (_) {
                    let _ = (0, _._)(_);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + _.strErrorMsg,
                      _,
                    ),
                      (0, _._)(
                        (0, _.jsx)(_._, {
                          strDescription: (0, _._)(
                            "#EventError_Code",
                            _.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return _;
              },
              [_, _, _],
            ),
            _ = _.useMemo(
              () =>
                _ instanceof Array
                  ? _
                  : [
                      (0, _.jsx)(
                        _.Fragment,
                        {
                          children: _,
                        },
                        "elAdditonalButtons",
                      ),
                    ],
              [_],
            );
          (0, _._)(() =>
            _.map((_) => ({
              _: _.GetCurrentImageOption(),
              _: _.language,
            })),
          );
          const _ = async () => {
            const _ = await _.UploadAllImages(_);
            _?.(_);
          };
          return (0, _.jsxs)(_, {
            onDropFiles: _,
            elAdditonalButtons: _,
            elOverrideDragAndDropText: _,
            children: [
              (0, _.jsx)(_.Fragment, {
                children: (0, _.jsx)("div", {
                  className: _().UploadPreviewCtn,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        asset: _,
                        forceResolution: _,
                        fnOnRemove: () => _.DeleteUploadImage(_),
                        languageRealms: _,
                      },
                      "arttabupload_" + _.filename + "_" + _.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, _.jsx)(_, {
                imageUploader: _,
                fnOnUploadImageRequested: _,
              }),
            ],
          });
        }
        function _(_) {
          const { imageUploader: _, fnOnUploadImageRequested: _ } = _,
            [_] = (0, _._)(() => [_.GetUploadImages()]),
            _ = _.some((_) => _.status == "pending"),
            _ = _.some(
              (_) =>
                _.status == "waiting" ||
                _.status == "uploading" ||
                _.status == "processing",
            );
          return (0, _.jsxs)("div", {
            style: {
              display: "flex",
            },
            className: _().UploadPreviewButtonsCtn,
            children: [
              !!_.length &&
                (0, _.jsx)(_._, {
                  style: {
                    margin: "8px",
                  },
                  onClick: _,
                  disabled: !_,
                  children: (0, _._)("#ImageUpload_Upload"),
                }),
              !!_.length &&
                (0, _.jsx)(_._, {
                  style: {
                    margin: "8px",
                  },
                  onClick: _.ClearImages,
                  disabled: _,
                  children: (0, _._)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function _(_, _, _, _, _) {
          let _ = new Array();
          return (
            _.GetUploadImages().forEach((_) => {
              _.push(
                jsx(
                  _,
                  {
                    asset: _,
                    forceResolution: _,
                    forceFileType: _,
                    fnOnRemove: () => _.DeleteUploadImage(_),
                    languageRealms: _,
                  },
                  _ + _.file + "_" + _.uploadTime,
                ),
              );
            }),
            _
          );
        }
        const _ = (0, _._)(_);
        function _(_) {
          const _ = (_) => {
              if (_ instanceof _._) {
                _.ResetImage();
                const _ = window,
                  _ = (0, _.jsx)(_._, {
                    ownerWin: _,
                    uploadFile: _,
                    forceResolution: _.forceResolution,
                    fileType: _.forceFileType || _._._,
                  });
                (0, _._)(_, _, "CropModal", {
                  strTitle: (0, _._)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  _.fileType,
                  JSON.stringify(_.GetCurrentImageOption()),
                );
            },
            { asset: _, fnOnRemove: _, languageRealms: _ } = _,
            _ = _.ImageOptions?.map((_) => {
              let _ = _?.fnGetLabelText(),
                _;
              _.bEnforceDimensions && (_ += ` - ${_.width}x${_.height}`),
                _.bDeprecated &&
                  ((_ += ` ${(0, _._)("#ImageUpload_Deprecated")}`),
                  (_ = (0, _._)("#ImageUpload_Deprecated_ttip")));
              let _;
              return (
                (_.BIsOriginalMinimumDimensions(_) &&
                  _.FileTypeMatchesImageTypes(_)) ||
                  (_ = _().ImageDimensionTooSmall),
                {
                  label: _,
                  data: _,
                  strOptionClass: _,
                  tooltip: _,
                }
              );
            }).filter((_) => !_.data.bHiddenFromDropdown),
            _ = {
              pending: (0, _._)("#ImageUpload_Pending"),
              waiting: (0, _._)("#ImageUpload_Waiting"),
              uploading: (0, _._)("#ImageUpload_Uploading"),
              processing: (0, _._)("#ImageUpload_Processing"),
              success: (0, _._)("#ImageUpload_SuccessCard"),
              failed: (0, _._)("#ImageUpload_Failed"),
            },
            _ = _.BSupportsLanguages()
              ? _(_._.GetLanguageListForRealms(_ ?? [_._.k_ESteamRealmGlobal]))
              : null,
            _ = _.IsValidAssetType(_.forceResolution, _.forceFileType),
            _ = _.status == "pending";
          let _ = _[_.status];
          _.status == "pending" &&
            (_.needsCrop
              ? (_ = (0, _._)("#ImageUpload_NeedsCrop"))
              : _.error && (_ = (0, _._)("#ImageUpload_Invalid")));
          let _;
          const _ = _.GetCurrentImageOption();
          return (
            _ && (_ = _?.find((_) => _.data.sKey == _.sKey)?.data),
            _ || (_ = _?.[0]?.data),
            (0, _.jsxs)("div", {
              className: _().UploadPreview,
              children: [
                (0, _.jsx)("div", {
                  className: _().UploadPreviewDelete,
                  onClick: () => _(_),
                  children: (0, _.jsx)(_.sED, {}),
                }),
                (0, _.jsx)(_, {
                  asset: _,
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    strDropDownClassName: _().DropDownScroll,
                    rgOptions: _,
                    selectedOption: _.language,
                    onChange: (_) => (_.language = _.data),
                    disabled: !_,
                  }),
                _ &&
                  _?.length > 1 &&
                  (0, _.jsx)(_._, {
                    label: _.GetImageOptionLabel(),
                    rgOptions: _,
                    selectedOption: _,
                    onChange: (_) => _.SetCurrentImageOption(_.data),
                    disabled: !_,
                  }),
                _ &&
                  _.warnings?.map((_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: _().UploadPreviewWarning,
                        children: _,
                      },
                      `warning${_}`,
                    ),
                  ),
                _ &&
                  _.messages?.map((_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: _().UploadPreviewMessage,
                        children: _,
                      },
                      `message${_}`,
                    ),
                  ),
                (0, _.jsxs)("div", {
                  className: (0, _._)({
                    [_().FlexColumnContainer]: !0,
                    [_().UploadPreviewError]: _.status == "failed",
                  }),
                  children: [
                    _,
                    (0, _._)(_.status) &&
                      (0, _.jsx)("div", {
                        className: _().FlexCenter,
                        children: (0, _.jsx)(_._, {
                          size: "small",
                        }),
                      }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().UploadPreviewError,
                  children: _.message,
                }),
                _ &&
                  _.error &&
                  (0, _.jsx)("div", {
                    className: _().UploadPreviewError,
                    children: _.error,
                  }),
                _ &&
                  _.needsCrop &&
                  (0, _.jsx)(_._, {
                    onClick: () => _(_),
                    children: (0, _._)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { asset: _ } = _;
          return _.BIsVideo()
            ? (0, _.jsxs)("div", {
                className: _().PreviewImgCtn,
                onClick: (_) =>
                  (0, _._)(
                    (0, _.jsx)(_, {
                      asset: _,
                    }),
                    (0, _._)(_),
                  ),
                children: [
                  (0, _.jsxs)("span", {
                    className: _().PreviewImgInfo,
                    children: [_.width, " x ", _.height],
                  }),
                  (0, _.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, _.jsx)("source", {
                      src: _.dataUrl,
                    }),
                  }),
                ],
              })
            : (0, _.jsx)("div", {
                className: _().PreviewImgCtn,
                style: {
                  backgroundImage: `url(${_.dataUrl})`,
                },
                children: (0, _.jsxs)("span", {
                  className: _().PreviewImgInfo,
                  children: [_.width, " x ", _.height],
                }),
              });
        }
        function _(_) {
          const { asset: _, closeModal: _ } = _;
          return (0, _.jsx)(_._, {
            bAlertDialog: !0,
            closeModal: _,
            bAllowFullSize: !0,
            children: (0, _.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, _.jsx)("source", {
                src: _.dataUrl,
              }),
            }),
          });
        }
        function _(_) {
          const _ = [],
            _ = new Array();
          for (const _ of _) {
            if (_ == _.X51) continue;
            const _ = (0, _._)("#Language_" + (0, _.LgB)(_));
            _.push({
              label: _,
              data: _,
            });
          }
          return (
            _.sort((_, _) => _.label.localeCompare(_.label)),
            _.forEach((_) =>
              _.push({
                label: _.label,
                data: _.data,
              }),
            ),
            _
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = "hh:mm a",
          _ = "HH:mm";
        function _(_) {
          const {
            nLatestTime: _,
            nEarliestTime: _,
            fnGetTimeToUpdate: _,
            onError: _,
            strAlsoShowTimeZone: _,
            disabled: _,
            bNoDefaultDate: _,
            className: _,
            strDescToolTip: _,
            strDescription: _,
            bShowTimeZone: _,
            strInvalidDateTimeLocalizedMsg: _,
            fnIsValidDateTime: _,
            bWeekdaysOnly: _,
            fnSetTimeToUpdate: _,
            bForce24HourFormat: _,
            bAllowClear: _,
          } = _;
          let _ = _() || _ ? _ : _;
          const _ = _(),
            [_, _] = _.useState(_ > 0 ? _()(_ * 1e3) : null),
            [_, _] = _.useState(0),
            [_, _] = _.useState(),
            [_, _] = _.useState(),
            _ = _(_, _, _, _, _),
            _ = !_ && _;
          let _;
          if (_ && _ && _ == _ && _ > _._.GetTimeNowWithOverride()) {
            const _ = _().unix(_);
            (_ = {
              hours: {
                max: _.hour(),
                min: _.hour(),
                step: 0,
              },
              minutes: {
                max: _.minute(),
                min: _.minute(),
                step: 0,
              },
              seconds: {
                max: _.seconds(),
                min: _.seconds(),
                step: 0,
              },
              milliseconds: {
                max: 0,
                min: 0,
                step: 0,
              },
            }),
              (_ = _);
          }
          let _;
          !_ && _ && !_ && (_ = _().unix(_));
          const _ = _()._.guess(),
            _ = _().unix(_)._(_),
            _ = !!_ && _ != _ && _().unix(_)._(_),
            _ = (_) => {
              if (_) return;
              _(null);
              const _ = _(),
                _ = _().unix(_ || _._.GetTimeNowWithOverride());
              (_ = _.clone()),
                _.hour(_.hour()),
                _.minute(_.minute()),
                _.second(0),
                _(_.unix()),
                _(_);
            },
            { fnOnInput: _, fnOnInputBlur: _, fnOnChange: _ } = _(_, _, _),
            _ = (_) => {
              if (_) return;
              _(null);
              let _ = _(),
                _ = 0;
              if (!_)
                _ =
                  _().unix(_).hour(0).second(0).minutes(0).unix() +
                  3600 * _.hour() +
                  60 * _.minutes();
              else {
                const _ = _().unix(_);
                (_ = _.clone()),
                  _.year(_.year()),
                  _.month(_.month()),
                  _.date(_.date()),
                  (_ = _.unix());
              }
              _(_), _(_().unix(_));
            },
            { fnOnInput: _, fnOnInputBlur: _, fnOnChange: _ } = _(_, _, _),
            _ = () => {
              _ || (_(0), _(null), _(null), _(null), _((_) => _ + 1));
            },
            _ = _ && !_ && _ > 0;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().EventTimeSection, _),
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, _.jsx)(_._, {
                    toolTipContent: _,
                    direction: "top",
                    children:
                      !!_ &&
                      (0, _.jsx)("span", {
                        children: _,
                      }),
                  }),
                  _ &&
                    (0, _.jsxs)("span", {
                      className: _().DateErrorCtn,
                      children: [
                        (0, _.jsx)("img", {
                          src: _._,
                        }),
                        _,
                      ],
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _().FlexRowContainer,
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().InputBorder, _().TimeBlock),
                    children: [
                      (0, _.jsx)(
                        _(),
                        {
                          onChange: _,
                          timeFormat: !1,
                          value: _ ?? _,
                          isValidDate: (_) => !_ && _(_, _, _, _),
                          initialValue: _,
                          inputProps: {
                            placeholder: (0, _._)("#DateTimePicker_Enter_Date"),
                            className: (0, _._)(
                              _().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: _,
                            onChange: (_) => _(_.currentTarget.value),
                            onBlur: (_) => _(_.currentTarget.value),
                          },
                        },
                        "date" + _,
                      ),
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().PacificTimeHint,
                          children: _.format("L"),
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().InputBorder, _().TimeBlock),
                    children: [
                      (0, _.jsx)(
                        _(),
                        {
                          onChange: _,
                          dateFormat: !1,
                          timeFormat: _,
                          timeConstraints: _,
                          value: _ ?? _,
                          inputProps: {
                            placeholder: (0, _._)("#DateTimePicker_Enter_Time"),
                            className: (0, _._)(
                              _().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: _,
                            onChange: (_) => _(_.currentTarget.value),
                            onBlur: (_) => _(_.currentTarget.value),
                          },
                        },
                        "time" + _,
                      ),
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().PacificTimeHint,
                          children: _.format("LT"),
                        }),
                    ],
                  }),
                  _ &&
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsx)("div", {
                          className: _().TimeZone,
                          children: _.zoneAbbr(),
                        }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            className: _().TimeZone,
                            children: _.zoneAbbr(),
                          }),
                      ],
                    }),
                  _ &&
                    (0, _.jsx)("button", {
                      type: "button",
                      className: _().ClearButton,
                      onClick: _,
                      children: (0, _._)("#Button_Clear"),
                    }),
                ],
              }),
              !!_ &&
                (0, _.jsx)("div", {
                  children: (0, _._)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function _(_, _, _) {
          const [_, _] = _.useState(!1);
          return {
            fnOnInput: (_) => {
              _(_), _(!0);
            },
            fnOnInputBlur: (_) => {
              if (_) {
                const _ = _(_);
                _.isValid() && _(_);
              }
              _(!1);
            },
            fnOnChange: (_) => {
              if (!_)
                if (typeof _ == "string") {
                  const _ = _(_);
                  _.isValid() && _(_);
                } else _(_);
            },
          };
        }
        function _() {
          const _ = _()("2025-01-14").format("L").split(/[-/.]/),
            _ = _.indexOf("14");
          return _.indexOf("01") < _;
        }
        function _() {
          return _()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function _(_) {
          return _()(_, _() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function _(_) {
          return _()(_, [_, _], !1);
        }
        function _(_, _, _, _) {
          const _ = _().unix(_).hour(0).seconds(0).minute(0);
          let _ = _.unix() >= _.unix();
          if (_ && _ && _ >= _) {
            const _ = _().unix(_).hour(23).minute(59).seconds(59);
            _ = _.unix() <= _.unix();
          }
          return (
            _ && _ && (_.weekday() == 0 || _.weekday() == 6) && (_ = !1), _
          );
        }
        function _(_, _, _, _, _) {
          const _ = _ && _(),
            _ = _ && !_(_).isValid(),
            _ = _ && !_(_).isValid(),
            _ = _ || _ || typeof _ == "string" || _ === !1;
          let _ = null;
          return (
            _ &&
              ((_ = (0, _._)(_ || "#DateTimePicker_Fallback_Invalid_DateTime")),
              _
                ? (_ = (0, _._)("#DateTimePicker_Time_CannotParse"))
                : _
                  ? (_ = (0, _._)("#DateTimePicker_Date_CannotParse"))
                  : typeof _ == "string" && (_ = _)),
            _.useEffect(() => {
              _ && _(_);
            }, [_, _]),
            _
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = ((_) => (
            (_.topleft = "topleft"),
            (_.top = "top"),
            (_.topright = "topright"),
            (_.left = "left"),
            (_.middle = "middle"),
            (_.right = "right"),
            (_.bottomleft = "bottomleft"),
            (_.bottom = "bottom"),
            (_.bottomright = "bottomright"),
            _
          ))(_ || {});
        let _ = class extends _.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new _._();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(_) {
            super(_),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(_) {
            this.m_elLinkRegionBox = _;
          }
          OnMouseDown(_, _) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (_) => {
                this.OnMouseUp(_, _);
              }),
              (this.m_fnMouseMove = (_) => {
                this.OnMouseMove(_, _);
              }),
              this.setState({
                EdgeDown: _,
              }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((_.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((_.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              _.preventDefault(),
              _.stopPropagation();
          }
          OnMouseMove(_, _) {
            if (this.state.EdgeDown !== void 0) {
              switch ((_.shiftKey && this.m_fnMouseUp(), _)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(_.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(_.clientY),
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(_.clientY),
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "middle": {
                  const _ = (0, _._)(
                      this.CalcLeftEdge(_.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    _ = 100 - (_ + this.state.curWidthPct),
                    _ = (0, _._)(
                      this.CalcTopEdge(_.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    _ = 100 - (_ + this.state.curHeightPct),
                    _ = {
                      curLeftPosPct: _,
                      curRightPosPct: _,
                      curTopPosPct: _,
                      curBottomPosPct: _,
                    };
                  this.setState(_);
                  break;
                }
                default:
                  break;
              }
              _.preventDefault(), _.stopPropagation();
            }
          }
          IsValidPct(_) {
            return _ >= 0 && _ <= 100;
          }
          UpdateState(_) {
            let _ =
                _.curTopPosPct !== void 0
                  ? _.curTopPosPct
                  : this.state.curTopPosPct,
              _ =
                _.curBottomPosPct !== void 0
                  ? _.curBottomPosPct
                  : this.state.curBottomPosPct,
              _ =
                _.curLeftPosPct !== void 0
                  ? _.curLeftPosPct
                  : this.state.curLeftPosPct,
              _ =
                _.curRightPosPct !== void 0
                  ? _.curRightPosPct
                  : this.state.curRightPosPct,
              _ = (0, _._)(
                100 - _ - _,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              _ = (0, _._)(
                100 - _ - _,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (_.curLeftPosPct !== void 0 || _.curRightPosPct !== void 0
                ? (_ = _ / this.m_aspectRatio)
                : (_ = _ * this.m_aspectRatio)),
              _.curLeftPosPct !== void 0
                ? (_ = 100 - _ - _)
                : (_ = 100 - (_ + _)),
              _.curTopPosPct !== void 0
                ? (_ = 100 - _ - _)
                : (_ = 100 - (_ + _));
            const _ = 100 - _ - _,
              _ = 100 - _ - _;
            this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.setState({
                curLeftPosPct: _,
                curRightPosPct: _,
                curTopPosPct: _,
                curBottomPosPct: _,
              });
          }
          GetXPercent(_) {
            return this.m_rectLinkRegion
              ? ((_ - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(_) {
            return this.m_rectLinkRegion
              ? ((_ - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(_) {
            return (0, _._)(this.GetXPercent(_), 0, 100);
          }
          CalcRightEdge(_) {
            return (0, _._)(
              100 - (this.GetXPercent(_) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(_) {
            return (0, _._)(this.GetYPercent(_), 0, 100);
          }
          CalcBottomEdge(_) {
            return (0, _._)(
              100 - (this.GetYPercent(_) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(_, _) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({
                EdgeDown: void 0,
              }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(_) {
            this.setState({
              text_link_url: _.target.value,
              valid_link: this.validateUrl(_.target.value),
            });
          }
          OnSetLinkDescriptionChange(_) {
            this.setState({
              text_link_description: _.target.value,
            });
          }
          validateUrl(_) {
            return _ != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  _,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({
                bEditingLink: !this.state.bEditingLink,
              }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({
              bEditingLink: !this.state.bEditingLink,
            });
          }
          render() {
            let _ = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              _ = _().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (_ += ` ${_().EdgeDown} ` + _()[this.state.EdgeDown]),
              (0, _.jsxs)("div", {
                className: _,
                style: _,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().LinkRegionGridBox,
                    children: [
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Top}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "top");
                        },
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Left}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "left");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsxs)("div", {
                        className: `${_().LinkRegionEdge} ${_().Middle}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, _.jsx)("div", {
                              className: _().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, _.jsx)(_.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, _.jsx)("div", {
                              className: _().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, _.jsx)(_.xv8, {}),
                            }),
                          (0, _.jsxs)("div", {
                            className: _().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Right}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "right");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Bottom}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, _.jsxs)("div", {
                      className: _().LinkRegionInfo,
                      children: [
                        (0, _.jsx)(_._, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, _._)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, _.jsx)(_._, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, _._)("#SteamTV_LinkDescription"),
                          placeholder: (0, _._)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, _.jsxs)("div", {
                          className: _().LinkRegionButtonContainer,
                          children: [
                            (0, _.jsxs)(_._, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, _._)("#Button_OK"), " "],
                            }),
                            (0, _.jsxs)(_._, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, _._)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        _([_._], _.prototype, "LinkRegionBoxRef", 1),
          _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "HandleDelete", 1),
          _([_._], _.prototype, "OnSetLinkURLChange", 1),
          _([_._], _.prototype, "OnSetLinkDescriptionChange", 1),
          _([_._], _.prototype, "OnSaveLink", 1),
          _([_._], _.prototype, "OnEditLink", 1),
          (_ = _([_._], _));
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ extends _.Component {
          state = {
            region: {
              xPosPct: 0,
              yPosPct: 0,
              widthPct:
                (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              heightPct:
                (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            },
          };
          async OnCrop() {
            const _ = this.props.uploadFile.GetCanvasImageSource();
            _ &&
              (await _(
                this.props.uploadFile,
                _,
                (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
                (this.state.region.yPosPct / 100) *
                  this.props.uploadFile.height,
                (this.state.region.widthPct / 100) *
                  this.props.uploadFile.width,
                (this.state.region.heightPct / 100) *
                  this.props.uploadFile.height,
                this.GetDestWidth(),
                this.GetDestHeight(),
                this.props.fileType,
              )),
              this.props.closeModal?.();
          }
          UpdateCrop(_, _) {
            this.setState({
              region: _,
            });
          }
          GetDestWidth() {
            const { uploadFile: _, forceResolution: _ } = this.props;
            if (_) return _.width;
            const _ = _.GetCurrentImageOption();
            if (!_) return 0;
            const _ = _._[_.artworkType].width;
            return _ ? (0, _._)(_) : 0;
          }
          GetDestHeight() {
            const { uploadFile: _, forceResolution: _ } = this.props;
            if (_) return _.width;
            const _ = _.GetCurrentImageOption();
            if (!_) return 0;
            const _ = _._[_.artworkType].height;
            return _ ? (0, _._)(_) : 0;
          }
          GetLargestBoxThatFits(_, _, _, _) {
            let _ = _,
              _ = (_ * _) / Math.max(_, 1);
            return (
              _ > _ && ((_ = _), (_ = (_ * _) / Math.max(_, 1))),
              {
                width: _,
                height: _,
              }
            );
          }
          GetPreviewWindowStyle() {
            const { region: _ } = this.state,
              _ = this.GetLargestBoxThatFits(
                this.GetDestWidth(),
                this.GetDestHeight(),
                500,
                150,
              ),
              _ = _.width,
              _ = _.height,
              _ = 1 / Math.max(_.widthPct / 100, 1e-4),
              _ = 1 / Math.max(_.heightPct / 100, 1e-4),
              _ = (this.props.uploadFile.width * _.xPosPct) / 100,
              _ = (this.props.uploadFile.height * _.yPosPct) / 100,
              _ = (_ * _) / this.props.uploadFile.width,
              _ = (_ * _) / this.props.uploadFile.height,
              _ = -_ * _,
              _ = -_ * _;
            return {
              width: _,
              height: _,
              backgroundPosition: `${_}px ${_}px`,
              backgroundSize: `${100 * _}% ${100 * _}%`,
              backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
            };
          }
          render() {
            const _ = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
              _ = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
              _ = this.GetLargestBoxThatFits(
                this.props.uploadFile.width,
                this.props.uploadFile.height,
                800,
                500,
              );
            return (0, _.jsx)(_._, {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
              children: (0, _.jsxs)("div", {
                className: (0, _._)("DialogContent", "_DialogCenterVertically"),
                children: [
                  (0, _.jsx)(_._, {
                    children: (0, _._)(
                      "#ImageUpload_CropModalTitleDims",
                      this.GetDestWidth(),
                      this.GetDestHeight(),
                    ),
                  }),
                  (0, _.jsx)("div", {
                    className: (0, _._)("DialogBodyText"),
                    children: (0, _._)("#ImageUpload_CropModalDescription"),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.CropImage,
                    style: {
                      width: _.width,
                      height: _.height,
                    },
                    children: [
                      (0, _.jsx)("img", {
                        style: {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        },
                        src: this.props.uploadFile.dataUrl,
                      }),
                      (0, _.jsx)(_._, {
                        bLockAspectRatio: !0,
                        bDisableLink: !0,
                        index: 0,
                        updateFn: this.UpdateCrop,
                        xPosPct: 0,
                        yPosPct: 0,
                        widthMinPct: _,
                        heightMinPct: _,
                        widthPct: _,
                        heightPct: _,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _.CropPreviewGroup,
                    children: [
                      (0, _.jsx)("div", {
                        className: _.CropPreviewLabel,
                        children: (0, _._)("#ImageUpload_CropPreview"),
                      }),
                      (0, _.jsx)("div", {
                        style: this.GetPreviewWindowStyle(),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    onClick: this.OnCrop,
                    children: (0, _._)("#ImageUpload_CropAndContinue"),
                  }),
                ],
              }),
            });
          }
        }
        _([_._], _.prototype, "OnCrop", 1),
          _([_._], _.prototype, "UpdateCrop", 1);
        async function _(_, _, _, _, _, _, _, _, _) {
          return new Promise((_, _) => {
            const _ = _(_);
            if (!_) {
              _("Invalid format provided");
              return;
            }
            const _ = document.createElement("canvas");
            (_.width = _),
              (_.height = _),
              _.getContext("2d")?.drawImage(_, _, _, _, _, 0, 0, _, _),
              _.toBlob((_) => {
                const _ = _.toDataURL(_);
                if (_ !== _._._ && _.startsWith("data:image/png")) {
                  _("Unable to encode into the requested file format");
                  return;
                }
                if (!_) {
                  _("Unable to apply crop into image");
                  return;
                }
                (_.file = (0, _._)(_, _.filename)),
                  (_.width = _),
                  (_.height = _),
                  (_.dataUrl = _),
                  (_.uploadTime = Date.now()),
                  (_.bCropped = !0),
                  _();
              });
          });
        }
        function _(_) {
          switch (_) {
            case _._._:
              return "image/png";
            case _._._:
              return "image/jpeg";
          }
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
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _.useRef(void 0),
            _ = _.useCallback(
              (_) => {
                _.currentTarget.files.length > 0 &&
                  (_(_.currentTarget.files), (_.currentTarget.value = ""));
              },
              [_],
            ),
            _ = _.useCallback(() => _.current.click(), []);
          return [
            _.createPortal(
              (0, _.jsx)("form", {
                onSubmit: _,
                style: {
                  display: "none",
                },
                children: (0, _.jsx)("input", {
                  ..._,
                  type: "file",
                  ref: _,
                  onChange: _,
                }),
              }),
              window.document.body,
            ),
            _,
          ];
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              ((_.dataTransfer.files && _.dataTransfer.files[0]) ||
                (_.dataTransfer.types && _.dataTransfer.types[0] == "Files")) &&
                _(!0);
            }, []),
            _ = _.useCallback((_) => {
              _._(_) && _(!1);
            }, []),
            _ = _.useCallback(() => _(!1), []),
            _ = _ ? _ : void 0,
            _ = _.useCallback(
              (_) => {
                _.dataTransfer.files?.length &&
                  (_(_.dataTransfer.files, _),
                  _.preventDefault(),
                  _.stopPropagation()),
                  _(!1);
              },
              [_],
            );
          return [
            {
              onDragEnter: _,
              onDragLeave: _,
              onDragEnd: _,
              onDragOver: _,
              onDrop: _,
            },
            _,
          ];
        }
        async function _(_, _ = 1e3) {
          return await new Promise((_, _) => {
            const _ = new Image();
            (_.src = _),
              (_.onload = () => _("success")),
              (_.onerror = () => _("error")),
              _ > 0 && window.setTimeout(() => _("timeout"), _);
          });
        }
        function _(_) {
          _.preventDefault();
        }
        function _(_) {
          switch (_.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const _ = _.name.match(/(?<=\.)[^.]+$/);
              return _ ? _[0] : void 0;
          }
        }
      },
      chunkid: (module) => {
        module.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      chunkid: (module) => {
        module.exports = {
          _: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
          CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
          CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
