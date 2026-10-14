(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [35871],
    {
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
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _ = _._.full, _ = !0) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _, _, _, _, _, _)).data ?? void 0;
        }
        function _(_, _, _, _ = _._.full, _ = !0) {
          return ["useEventImageURLWithFallback", _?.GID, _, _, _, _];
        }
        function _(_, _, _, _, _, _ = _._.full, _ = !0) {
          return {
            queryKey: _(_, _, _, _, _),
            enabled: !!_?.GID,
            initialData: () => _(_, _, _, _, _),
            queryFn: async () => {
              if (!_) return null;
              let _ = _(_, _, _, _, _);
              if (_) return _;
              const _ = await _.ensureQueryData(
                (0, _._)(_.clanSteamID.GetAccountID(), _),
              );
              if (_ == "capsule") {
                let _ = _.appid;
                if (
                  !_ &&
                  _ &&
                  ((_.is_creator_home && !_.is_ogg) || _.is_curator)
                )
                  if (_.jsondata?.referenced_appids?.length)
                    _ = _.jsondata.referenced_appids[0];
                  else return _.avatar_full_url ?? null;
                const _ = await _.ensureQueryData(
                  (0, _._)(_, {
                    appid: _,
                  }),
                );
                return _
                  ? ((0, _._)(_, "main_capsule") ?? null)
                  : _?.avatar_full_url
                    ? _.avatar_full_url
                    : `${_._.STORE_ITEM_BASE_URL}steam/apps/${_}/header.jpg`;
              }
              return _ == "background" &&
                _ &&
                ((_.is_creator_home && !_.is_ogg) || _.is_curator)
                ? (_.creator_page_bg_url ?? null)
                : await _.ensureQueryData((0, _._)(_, _, _));
            },
          };
        }
        function _(_, _, _, _ = _._.full, _ = !0) {
          if (!_) return;
          const _ = _.GetImageURL(_, _, _);
          if (_ && _.trim().length > 0) return _;
          const _ = _._.GetELanguageFallback(_);
          if (_ != _) {
            const _ = _.GetImageURL(_, _, _);
            if (_ && _.trim().length > 0) return _;
          }
          if (_ == "capsule") {
            let _ = _.GetImageFromBeginningOfDescription(_, Number.MAX_VALUE);
            if (_ && (_ || (0, _._)(_))) return _;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _, _)).data ?? void 0;
        }
        function _(_, _, _) {
          return {
            queryKey: _(_),
            enabled: !!_?.GID,
            queryFn: async () => {
              if (!_) return null;
              const _ = _.appid
                  ? await _.ensureQueryData(
                      (0, _._)(_, {
                        appid: _.appid,
                      }),
                    )
                  : null,
                _ = await _.ensureQueryData(
                  (0, _._)(_.clanSteamID.GetAccountID(), _),
                );
              if (_.appid)
                if (_) {
                  if (
                    _.all_ages_screenshots &&
                    _.all_ages_screenshots.length > 0
                  ) {
                    let _ = Number(
                      _.bOldAnnouncement
                        ? _.AnnouncementGID
                        : _.GID == null
                          ? 0
                          : _.GID,
                    );
                    return (
                      (_ = _ % _.all_ages_screenshots.length),
                      `${_._.STORE_ITEM_BASE_URL}${_.all_ages_screenshots[_].filename}`
                    );
                  }
                } else return "";
              return _.GetEventType() != _.ajI &&
                _ &&
                ((_.is_creator_home && !_.is_ogg) || _.is_curator)
                ? (_.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function _(_) {
          return ["useFallbackArtworkScreenshot", _?.GID];
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
          _: () => _,
          _: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
        const _ = 4;
        class _ {
          m_SteamInterface;
          m_setMessagesSeen = new Set();
          static sm_DefaultDataRequest = {
            include_release: !0,
            include_assets: !0,
          };
          constructor(_) {
            this.m_SteamInterface = _;
          }
          static sm_Instance;
          static Init(_) {
            _.sm_Instance = new _(_);
          }
          static Get() {
            return (
              (0, _._)(
                _.sm_Instance,
                "MarketingMessages store not initialized",
              ),
              _.sm_Instance
            );
          }
          async GetMessageList(_, _ = !1) {
            if (!_._.logged_in) return [];
            const _ = _._.Init(_._);
            _.Body().set_country_code(_._.COUNTRY),
              _.Body().set_elanguage((0, _.sfN)(_._.LANGUAGE)),
              _.Body().set_client_package_version(_.nClientPackageVersion),
              _.Body().set_operating_system(_.eOSType),
              _ && _.Body().set_include_seen_messages(!0),
              (0, _._)(_),
              (0, _._)(_, _.sm_DefaultDataRequest);
            const _ = await _._.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              _,
            );
            if (_.GetEResult() != _._)
              throw `Error loading marketing messages: ${_.GetEResult()}`;
            if (_)
              for (const _ of _.Body().messages())
                _.already_seen() &&
                  this.m_setMessagesSeen.add(_.message().gid());
            return _.Body().messages();
          }
          async GetSingleMessage(_, _) {
            const _ = _._.Init(_._);
            _.Body().set_gid(_),
              (0, _._)(_),
              (0, _._)(_, _.sm_DefaultDataRequest);
            let _;
            if (
              (_ || _._.logged_in
                ? (_ = await _._.GetDisplayMarketingMessageForUser(
                    this.m_SteamInterface.GetServiceTransport(),
                    _,
                  ))
                : (_ = await _._.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    _,
                  )),
              _.GetEResult() != _._)
            )
              throw `Error loading marketing messages: ${_.GetEResult()}`;
            return _.Body().message();
          }
          MarkMessageSeen(_, _, _) {
            if (this.m_setMessagesSeen.has(_)) return;
            const _ = _._.Init(_._);
            _.Body().set_gid(_),
              _.Body().set_display_index(_),
              _.Body().set_template_type(_),
              _._.MarkMessageSeen(
                this.m_SteamInterface.GetServiceTransport(),
                _,
              ),
              this.m_setMessagesSeen.add(_);
          }
          BIsMessageSeen(_) {
            return this.m_setMessagesSeen.has(_);
          }
        }
        function _(_) {
          if (!_) return null;
          try {
            const _ = JSON.parse(_);
            return (
              _.use_additional_fields &&
                (_.use_additional_fields =
                  _.use_additional_fields === "true" ||
                  _.use_additional_fields === 1),
              _.use_custom_legal_text &&
                (_.use_custom_legal_text =
                  _.use_custom_legal_text === "true" ||
                  _.use_custom_legal_text === 1),
              _.last_asset_mtime &&
                (_.last_asset_mtime = parseInt(_.last_asset_mtime)),
              (_.ll_image = _.ll_image || {}),
              _
            );
          } catch {}
          return null;
        }
        function _(_) {
          return `\xA9 ${new Date().getFullYear()} Valve Corporation${_ ? " and " + _ : ""}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
        }
        class _ {
          m_message;
          m_templateVars = void 0;
          m_associatedItemKey;
          m_rgRecommendedAppIDs;
          m_nSaleItemCount;
          constructor(_) {
            (0, _._)(this),
              (this.m_message = _),
              (this.m_templateVars = _(_.template_vars_json()));
            const _ = _.associated_item(!1);
            (this.m_associatedItemKey = _
              ? (0, _._)({
                  item_type: _.item_type(),
                  _: _._(),
                })
              : void 0),
              (this.m_rgRecommendedAppIDs = _.recommended_items()
                .map((_) => _.appid())
                .filter(Boolean)),
              (this.m_nSaleItemCount = _.sale_item_count());
          }
          get id() {
            return this.m_message.gid();
          }
          GetType() {
            return this.m_message.type();
          }
          static GetTypeAsLocalizedString(_) {
            switch (_) {
              case _._._:
                return (0, _._)("#spotlight_weekend_deal");
              case _._._:
                return (0, _._)("#spotlight_midweek_madness");
              case _._._:
                return (0, _._)("#spotlight_daily_deal");
              case _._._:
                return (0, _._)("#msg_available_everywhere");
              case _._._:
                return (0, _._)("#msg_new_game");
              case _._._:
                return (0, _._)("#msg_prepurchase_now");
              case _._._:
                return (0, _._)("#msg_play_now");
              case _._._:
                return (0, _._)("#label_pre_load_now");
              case _._._:
                return (0, _._)("#label_just_updated");
              case _._._:
                return (0, _._)("#label_new_dlc_available");
              case _._._:
                return (0, _._)("#label_free_weekend");
              case _._._:
                return (0, _._)("#msg_on_sale_now");
              case _._._:
                return (0, _._)("#msg_play_beta_now");
            }
            return null;
          }
          GetTemplateType() {
            return this.m_message.template_type();
          }
          GetTemplateTypeForReporting() {
            if (
              this.GetTemplateVars().custom_display &&
              this.GetTemplateVars().custom_display.startsWith("replay")
            )
              return _._._;
            switch (this.GetTemplateVars().custom_display) {
              case "dlc_override":
                return _._._;
              case "mm_auto_render":
                return _._._;
              case "partner_event":
                return _._._;
              case "featured_video":
                return _._._;
            }
            return this.BShouldShowSaleItems() ? _._._ : _._._;
          }
          GetTemplateVars() {
            return this.m_templateVars;
          }
          GetLocalizedAltText(_) {
            return (
              this.m_templateVars?.localized_alt_text?.[_] ||
              this.m_templateVars?.localized_alt_text?.[
                _._.GetELanguageFallback(_)
              ] ||
              void 0
            );
          }
          GetTemplateImage() {
            let _ = this.m_templateVars.ll_image[_._.LANGUAGE],
              _ = (0, _.sfN)(_._.LANGUAGE);
            return (
              !_ &&
                _._.LANGUAGE == (0, _.LgB)(_.FHN) &&
                ((_ = this.m_templateVars.ll_image.LATAM), (_ = _.FHN)),
              _ || ((_ = this.m_templateVars.ll_image.english), (_ = _.Bhc)),
              [_?.path, _]
            );
          }
          GetTemplateBackgroundImage() {
            let _ = this.m_templateVars.background[_._.LANGUAGE],
              _ = (0, _.sfN)(_._.LANGUAGE);
            return (
              _ || ((_ = this.m_templateVars.background.english), (_ = _.Bhc)),
              [_?.path, _]
            );
          }
          GetFeaturedVideoMP4URL() {
            return this.m_templateVars.featured_video_mp4;
          }
          GetFeaturedVideoWebMURL() {
            return this.m_templateVars.featured_video_webm;
          }
          GetFeaturedVideoAutoPlay() {
            return this.m_templateVars.featured_video_autoplay;
          }
          GetFeaturedVideoLoop() {
            return this.m_templateVars.featured_video_loop;
          }
          GetPosterImage() {
            let _ = this.m_templateVars.poster[_._.LANGUAGE],
              _ = (0, _.sfN)(_._.LANGUAGE);
            return (
              _ || ((_ = this.m_templateVars.poster.english), (_ = _.Bhc)),
              [_?.path, _]
            );
          }
          GetSubtitleObj() {
            return this.m_templateVars.subtitles;
          }
          GetDLCAppIDs() {
            return this.m_templateVars.additional_featuring
              .filter((_) => !!_.appid)
              .map((_) => _.appid);
          }
          GetAutoRenderWithoutAssetOverrides() {
            return !!this.m_templateVars.autorender_assets_without_overrides;
          }
          GetGID() {
            return this.m_message.gid();
          }
          SetDLCAppIDOverride(_) {
            (this.m_templateVars.additional_featuring = _.map((_) => ({
              appid: _,
            }))),
              (this.m_templateVars.custom_display = "dlc_override");
          }
          GetRecommendedAppIDs() {
            return this.m_rgRecommendedAppIDs;
          }
          GetSaleItemCount() {
            return this.m_nSaleItemCount;
          }
          BShouldShowSaleItems() {
            const _ = !this.GetTemplateVars().custom_display,
              _ = !!this.GetTemplateVars().sale_clan_event_gid,
              _ = this.m_rgRecommendedAppIDs.length >= _;
            return _ && _ && _;
          }
          SetRecommendedAppIDsOverride(_) {
            this.m_rgRecommendedAppIDs = _;
          }
          OverrideCustomText(_) {
            this.m_templateVars.button_text_custom = _;
          }
          OverrideURL(_) {
            this.m_templateVars.linkurl = _;
          }
          BHasTemplateAnimatedAssets() {
            return this.m_templateVars.has_animated_assets;
          }
          BHasTemplateAnimatedAssetForLanguage(_) {
            const _ = (0, _.LgB)(_);
            return !!this.m_templateVars.mp4[_];
          }
          GetTemplateWebM(_) {
            const _ = (0, _.LgB)(_);
            return this.m_templateVars.webm[_]?.path;
          }
          GetTemplateWebMWithFallback(_) {
            const _ = (0, _.LgB)(_);
            if (this.m_templateVars.webm[_]?.path)
              return [this.m_templateVars.webm[_].path, _];
            const _ = _._.GetELanguageFallback(_),
              _ = (0, _.LgB)(_);
            return [this.m_templateVars.webm[_]?.path, _];
          }
          GetTemplateMP4(_) {
            const _ = (0, _.LgB)(_);
            return this.m_templateVars.mp4[_]?.path;
          }
          GetTemplateMP4WithFallback(_) {
            const _ = (0, _.LgB)(_);
            if (this.m_templateVars.mp4[_]?.path)
              return [this.m_templateVars.mp4[_].path, _];
            const _ = _._.GetELanguageFallback(_),
              _ = (0, _.LgB)(_);
            return [this.m_templateVars.mp4[_]?.path, _];
          }
          GetLegalHTML() {
            return this.GetTemplateVars().use_custom_legal_text
              ? this.GetTemplateVars().custom_legal_text
              : _(this.GetTemplateVars().partner);
          }
          get associated_item_key() {
            return this.m_associatedItemKey;
          }
          get associated_item_appid() {
            return this.m_message.associated_item(!1)?.appid();
          }
          GetAssociatedItemProto() {
            return this.m_message.associated_item(!1);
          }
        }
        _([_._], _.prototype, "m_templateVars", 2);
        const _ = "^(replay)([0-9]{4})";
        function _(_) {
          return _.match(_)?.[2];
        }
        function _(_) {
          if (_) {
            const _ = _.match(_);
            return _?.[2] && !isNaN(Number(_?.[2]));
          }
          return !1;
        }
        function _(_) {
          return _ == "mm_auto_render";
        }
        function _(_, _, _) {
          const { bIncludeSeenMessages: _, ..._ } = _,
            {
              data: _,
              isLoading: _,
              isError: _,
            } = (0, _._)({
              queryKey: [
                "MarketingMessages",
                "List",
                _,
                {
                  bIncludeSeenMessages: !!_,
                },
              ],
              queryFn: () => _.GetMessageList(_, _),
              ..._,
            }),
            _ = _.useMemo(() => _?.map((_) => new _(_.message())), [_]),
            _ = (0, _._)(),
            _ = _.useRef(new Set());
          return (
            _ &&
              _?.forEach((_) => {
                if (_.current.has(_._)) return;
                const _ = _.GetAssociatedItemProto();
                _ && (_(_, _.sm_DefaultDataRequest), _.current.add(_._));
              }),
            {
              rgMessages: _ ? null : _,
              isError: _,
            }
          );
        }
        function _(_, _, _) {
          const _ = _?.enabled !== !1,
            { data: _ } = useQuery({
              queryKey: ["MarketingMessages", "ClientParameters"],
              queryFn: async () => ({
                eOSType: await SteamClient.System.GetOSType(),
                nClientPackageVersion: GetClientPackageVersion(),
              }),
              enabled: _,
            });
          return _(
            _,
            {
              ..._,
              ..._,
            },
            {
              ..._,
              enabled: !!_ && _,
            },
          );
        }
        function _(_, _, _) {
          const { data: _, isError: _ } = (0, _._)({
              queryKey: [
                "MarketingMessages",
                _ ? "SinglePreivew" : "Single",
                _,
              ],
              queryFn: () => _.GetSingleMessage(_, _),
              enabled: !!_,
            }),
            _ = _.useMemo(() => {
              if (_) {
                const _ = new _(_);
                if (_) {
                  const _ = (0, _._)(
                    "marketingmessage_preview_config",
                    "application_config",
                  );
                  _?.dlc_appid_overrides?.length > 0 &&
                    _.SetDLCAppIDOverride(_.dlc_appid_overrides),
                    _?.recommended_appid_overrides?.length > 0 &&
                      _.SetRecommendedAppIDsOverride(
                        _.recommended_appid_overrides,
                      );
                }
                return _;
              }
            }, [_, _]),
            _ = (0, _._)(),
            _ = _.useRef(new Set());
          if (_ && _ && !_.current.has(_._)) {
            const _ = _.GetAssociatedItemProto();
            _ && (_(_, _.sm_DefaultDataRequest), _.current.add(_._));
          }
          return {
            message: _,
            isError: _,
          };
        }
        function _(_, _, _, _, _) {
          const _ = _._.Init(_._);
          _.Body().set_gid(_),
            _.Body().set_display_index(_),
            _.Body().set_template_type(_),
            _.Body().set_click_location(_),
            _._.MarkMessageClicked(_, _);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          setLegalText: void 0,
        });
        function _() {
          return !!_.useContext(_).setLegalText;
        }
        function _() {
          return _.useContext(_).setLegalText || function (_) {};
        }
        function _(_) {
          const [_, _] = _.useState(),
            _ = (0, _._)("BrowserView.RegisterForMessageFromParent"),
            _ = (0, _._)(),
            _ = _.useMemo(
              () => ({
                setLegalText: _ && !_ ? _ : void 0,
              }),
              [_, _, _],
            );
          return (0, _.jsxs)(_.Provider, {
            value: _,
            children: [
              _ &&
                (0, _.jsx)(_, {
                  strLegalText: _,
                }),
              _.children,
            ],
          });
        }
        function _(_) {
          const { strLegalText: _ } = _,
            _ = _.useRef(void 0);
          return (
            _.useEffect(() => {
              (_.current = _),
                SteamClient.BrowserView.PostMessageToParent(
                  "MarketingMessageLegal",
                  _ || "",
                );
            }, [_]),
            _.useEffect(
              () =>
                SteamClient.BrowserView.RegisterForMessageFromParent((_) => {
                  _ == "MarketingMessageDialogReady" &&
                    SteamClient.BrowserView.PostMessageToParent(
                      "MarketingMessageLegal",
                      _.current,
                    );
                }).unregister,
              [],
            ),
            null
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { title: _, bodyClassName: _, children: _ } = _;
          return (
            React.useEffect(() => {
              const _ = document.title;
              return (
                (document.title = _),
                () => {
                  document.title = _;
                }
              );
            }, [_]),
            _(_),
            _
          );
        }
        function _(_) {
          _.useEffect(() => {
            if (!_) return;
            const _ = [];
            for (const _ of _.split(/ /))
              document.body.classList.contains(_) || _.push(_);
            return (
              document.body.classList.add(..._),
              () => document.body.classList.remove(..._)
            );
          }, [_]);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _ = "#Played_", _ = !1) {
          if (_ >= 120) {
            let _ = _ / 60;
            _ = Math.round(_ * 10) / 10;
            let _ = _._.GetPreferredLocales(),
              _ = _.toLocaleString(_, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              });
            return (0, _._)(_ + "Hours", _);
          } else
            return _ && _ == 1
              ? (0, _._)(_ + "Minute", _)
              : (0, _._)(_ + "Minutes", _);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 2e4;
        function _(_) {
          const _ = (0, _.useRef)(!1),
            _ = (0, _.useRef)(null),
            _ = (0, _.useCallback)(() => {
              _.current = setTimeout(() => {
                _.current &&
                  !_.current.paused &&
                  (_.current.pause(), (_.current = !0));
              }, _);
            }, [_]),
            _ = (0, _.useCallback)(() => {
              _.current && (clearTimeout(_.current), (_.current = null)),
                _.current && _.current && (_.current.play(), (_.current = !1));
            }, [_]);
          (0, _._)(window, "blur", _), (0, _._)(window, "focus", _);
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)();
          let _ = (0, _._)({
            queryKey: ["useGamePlaytimeInfo", _],
            queryFn: async () => _(_, _),
            enabled: !!(_ && _ != _._),
          });
          return _.isSuccess ? _.data : null;
        }
        async function _(_, _) {
          const _ = _._.Init(_.G9h);
          _.Body().set_steamid(_._.steamid),
            _.Body().set_appids_filter([_]),
            _.Body().set_include_played_free_games(!0),
            _.Body().set_language(_._.LANGUAGE);
          const _ = await _.xtC.GetOwnedGames(_, _);
          return _.Body().games().length > 0
            ? _.Body().games()[0].toObject()
            : {};
        }
        function _(_) {
          return (0, _._)() && _?.startsWith("https://store.steampowered.com/")
            ? _.replace("https://store.steampowered.com/", _._.STORE_BASE_URL)
            : _;
        }
        function _(_) {
          let _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (
            (_ = _ !== null ? _ + 1 : 0),
            (0, _.useCallback)(() => {
              (0, _._)(_, _._, _, _.GetTemplateTypeForReporting(), _);
            }, [_, _, _, _])
          );
        }
        function _(_, _, _ = !1) {
          let _ = _(_),
            _;
          _ == _._._
            ? (_ = "image")
            : _ == _._._
              ? (_ = "button")
              : _ == _._._
                ? (_ = "dlc_capsule")
                : _ == _._._
                  ? (_ = "header_area")
                  : _ == _._._
                    ? (_ = "game_capsule")
                    : _ == _._._ && (_ = "partner_event");
          let _ = (0, _._)(_(_), _);
          return (
            _ && (_ = _),
            _.startsWith("steam://") || (_ = `steam://openurl/${_}`),
            (0, _.useCallback)(
              (_) => {
                _();
                let _ = (0, _._)(_);
                _.location.href = _;
              },
              [_, _],
            )
          );
        }
        function _(_, _, _) {
          const _ = (0, _._)({
              item_type: (0, _._)(_),
              _: _,
            }),
            { data: _ } = (0, _._)(_);
          return _((0, _._)(_) ?? _._.STORE_BASE_URL, _);
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
        function _(_, _, _, _) {
          if (!_ || !_.path) return null;
          const _ = _ ? "?t=" + _ : "";
          return _.path.startsWith("images")
            ? `${_._.MEDIA_CDN_URL}steam/marketing/${_}/${_.path}${_}`
            : `${_._.BASE_URL_SHARED_CDN}store_item_assets/mm/${_}/${_}/${_.path}${_}`;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { path: _, message: _, eLanguage: _, ..._ } = _,
            _ = _.GetTemplateVars()?.last_asset_mtime,
            _ = _(_._, _, _, {
              type: "file",
              path: _,
            }),
            _ = _.GetLocalizedAltText(_);
          return (0, _.jsx)("img", {
            alt: _,
            ..._,
            src: _,
          });
        }
        function _(_) {
          const { message: _, mp4Path: _, webmPath: _, language: _, ..._ } = _,
            _ = _.GetTemplateVars()?.last_asset_mtime,
            _ = _(_._, _, _, {
              type: "file",
              path: _,
            }),
            _ = _(_._, _, _, {
              type: "file",
              path: _,
            }),
            _ = (0, _.useRef)(null);
          (0, _._)(_);
          const _ = (0, _.useRef)(!1),
            _ = (0, _.useCallback)(() => {
              _.current &&
                (document.visibilityState === "visible"
                  ? _.current && (_.current.play(), (_.current = !1))
                  : _.current.paused || (_.current.pause(), (_.current = !0)));
            }, []);
          return (
            (0, _._)(document, "visibilitychange", _),
            (0, _.useEffect)(() => _(), [_]),
            (0, _.jsxs)("video", {
              ..._,
              ref: _,
              children: [
                (0, _.jsx)("source", {
                  src: _,
                  type: "video/webm",
                }),
                (0, _.jsx)("source", {
                  src: _,
                  type: "video/mp4",
                }),
              ],
            })
          );
        }
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
          return (0, _.jsx)("div", {
            className: _.All,
            children: (0, _.jsx)("div", {
              className: _.MessageContent,
              children: _.children,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.MessageBody,
            children: _.children,
          });
        }
        function _(_) {
          const { isBackgroundBlur: _, bOverrideUseBackgroundImage: _ } = _,
            _ = _(),
            _ = (0, _._)(_.GetTemplateVars().linkurl, _._._),
            [_, _] = _ ? _.GetTemplateBackgroundImage() : _.GetTemplateImage();
          return (0, _.jsx)(_._, {
            focusable: !0,
            noFocusRing: !0,
            className: (0, _._)(_.MessageImage, _ && _.IsBlur),
            onActivate: _,
            children:
              _ &&
              (0, _.jsx)(_, {
                message: _,
                path: _,
                eLanguage: _,
              }),
          });
        }
        function _(_) {
          const { fnOnClick: _ } = _,
            _ = _(),
            _ = (0, _.sfN)(_._.LANGUAGE),
            [_, _] = _.GetTemplateMP4WithFallback(_),
            [_, _] = _.GetTemplateWebMWithFallback(_);
          return (
            (0, _._)(
              _ == _,
              `GameAnimatedImageViaVideo mismatch fallback languages eLang ${_} mp4 ${_} webm ${_}`,
            ),
            (0, _.jsx)("div", {
              className: _.VideoImageContainer,
              children: (0, _.jsx)(_._, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, _._)(_.MessageImage),
                onActivate: _,
                children: (0, _.jsx)(_, {
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  loop: !0,
                  mp4Path: _,
                  message: _,
                  webmPath: _,
                  language: _._.IN_CLIENT ? _ : _,
                }),
              }),
            })
          );
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = _ ? (0, _._)(_, "main_capsule") : void 0;
          return _
            ? (0, _.jsx)(_, {
                strImageURL: _,
              })
            : null;
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: (0, _._)(_.MessageImage, _.GameImage, _.IsBlur),
            children: (0, _.jsx)("img", {
              src: _.strImageURL,
            }),
          });
        }
        function _(_) {
          const { strType: _, strTitle: _, bSmallTitle: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: _.EventType,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.EventTitle, _ && _.SmallTitle),
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          const { _: _, bPreview: _, bPreferAssetWithoutOverride: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = _?.appid,
            _ = (0, _._)(),
            { bIsOwned: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_ ?? 0),
            _ = (0, _.useMemo)(
              () =>
                _ && (!_?.playtime_forever || !_?.rtime_last_played)
                  ? {
                      playtime_forever: 300,
                      rtime_last_played:
                        Math.floor(Date.now() / 1e3) - 7200 * 60,
                    }
                  : _,
              [_, _],
            );
          let _ = "steam://openurl/" + ((0, _._)(_) ?? "");
          _ &&
            _ &&
            (_
              ? (_ = `steam://open/games/details/${_}`)
              : (_ = `steam://nav/games/details/${_}`));
          const _ = (0, _._)(_, _._._, _);
          return (0, _.jsxs)("div", {
            className: _.BaseCtn,
            children: [
              (0, _.jsx)(_._, {
                className: _.CapsuleCtn,
                onClick: _,
                children: (0, _.jsx)(_._, {
                  _: _,
                  bPreferLibrary: !0,
                  bPreferAssetWithoutOverride: _,
                }),
              }),
              (0, _.jsxs)("div", {
                className: _.DescCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _.GameNameCtn,
                    children: (0, _.jsx)(_._, {
                      className: _.GameName,
                      onClick: _,
                      children: _?.name,
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.LibraryDetails,
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: _,
                        className: (0, _._)(_.Button, _.ViewInLibrary),
                        children: (0, _._)(
                          _
                            ? "#EventDisplay_ViewInLibrary"
                            : "#EventDisplay_ViewStorePage",
                        ),
                      }),
                      !_ &&
                        (0, _.jsx)(_.Fragment, {
                          children: (0, _.jsxs)("div", {
                            className: _.PlayDetailCtn,
                            children: [
                              _ &&
                                (0, _.jsx)("span", {
                                  children: (0, _._)(
                                    "#EventDisplay_OnWishlist",
                                  ),
                                }),
                              !_ &&
                                _ &&
                                (0, _.jsx)("span", {
                                  children: (0, _._)("#EventDisplay_Follow"),
                                }),
                            ],
                          }),
                        }),
                      _ &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            !!_?.rtime_last_played &&
                              (0, _.jsxs)("div", {
                                className: _.PlayDetailCtn,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#MarketingMessages_DLC_lastplayed",
                                    ),
                                  }),
                                  (0, _._)(_.rtime_last_played),
                                ],
                              }),
                            !!_?.playtime_forever &&
                              (0, _.jsxs)("div", {
                                className: _.PlayDetailCtn,
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#MarketingMessages_DLC_hours",
                                    ),
                                  }),
                                  (0, _._)(_.playtime_forever),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const _ = _(),
            _ = (0, _._)(_.GetTemplateVars().linkurl, _._._);
          return (0, _.jsx)(_, {
            bHidePrice: _.bHidePrice,
            fnOnClickButton: _,
          });
        }
        function _(_) {
          const { bHidePrice: _, fnOnClickButton: _ } = _,
            _ = _(),
            _ = !0,
            [_, _] = (0, _._)(() => [
              _.GetTemplateVars().button_text_custom ||
                _.GetTemplateVars().button_text,
              !!_.GetTemplateVars().hide_price,
            ]),
            _ = !!(_ || _);
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.MessageFooter, !_ && _.NoButton),
            children: [
              (0, _.jsxs)("div", {
                className: _.ButtonAndPriceCtn,
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      focusable: !0,
                      noFocusRing: !0,
                      className: _.Btn,
                      onActivate: _,
                      children: _,
                    }),
                  !_ &&
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_, {}),
                    }),
                ],
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _() {
          const _ = _().associated_item_key,
            { data: _ } = (0, _._)(_);
          return !_ || !_.formatted_final_price
            ? (0, _.jsx)("div", {
                className: _.NoPrice,
              })
            : (0, _.jsx)("div", {
                className: _.MessagePriceCtn,
                children: (0, _.jsx)(_._, {
                  _: _,
                }),
              });
        }
        function _(_) {
          const _ = _();
          return (0, _._)()
            ? null
            : (0, _.jsx)("div", {
                className: _.Legal,
                dangerouslySetInnerHTML: {
                  __html: _.GetLegalHTML(),
                },
              });
        }
        function _(_) {
          const { _: _, type: _, eClickLocation: _ } = _,
            _ = (0, _._)(_, _, _);
          return (0, _.jsx)(_._, {
            _: _,
            type: _,
            fnOnClickOverride: _,
            bIsMarketingMessage: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function _(_) {
          const { capsule: _, imageType: _, eClickLocation: _ } = _,
            _ = (0, _._)(_._, _.type, _),
            _ = (_) => {
              _.preventDefault(), _(_);
            };
          return (0, _.jsx)("div", {
            onClick: _,
            children: (0, _.jsx)(_._, {
              capsule: _,
              imageType: _,
              bShowParentApp: !1,
              bHideStoreHover: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _();
          let _ = _.GetTemplateVars().update_event_clan_accountid,
            _ = _.GetTemplateVars().update_event_gid;
          const {
            eventModel: _,
            bLoading: _,
            sErrorMessage: _,
          } = (0, _._)(_, _, _);
          return {
            message: _,
            eventModel: _,
          };
        }
        function _(_) {
          const { bPreview: _, bUseAnimated: _ } = _,
            { message: _, eventModel: _ } = _(_),
            { data: _ } = (0, _._)(_.associated_item_key),
            _ = (0, _._)(_) ?? "",
            _ = _(_, _, _._._),
            _ = _(_, _, _._._);
          return (0, _.jsx)(_._, {
            submethod: "partner_event",
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  _: _.associated_item_key,
                }),
                (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsx)(_, {
                      _: _.associated_item_key,
                      bPreview: _,
                      bPreferAssetWithoutOverride: !1,
                    }),
                    (0, _.jsx)(_, {
                      message: _,
                      eventModel: _,
                      fnOnClickButton: _,
                      bUseAnimated: _,
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  bHidePrice: !0,
                  fnOnClickButton: _,
                }),
              ],
            }),
          });
        }
        function _(_) {
          const {
              message: _,
              fnOnClickButton: _,
              eventModel: _,
              bUseAnimated: _,
            } = _,
            [_, _] = _.GetTemplateImage(),
            _ = (0, _.sfN)(_._.LANGUAGE);
          return (0, _.jsxs)("div", {
            className: _().UpdateEventCtn,
            children: [
              (0, _.jsx)(_, {
                strType: (0, _._)("#MarketingMessages_MajorUpdate"),
                strTitle: _?.GetNameWithFallback(_),
              }),
              (0, _.jsxs)(_._, {
                focusable: !0,
                noFocusRing: !0,
                className: (0, _._)(_().EventImage),
                onActivate: _,
                children: [
                  _ &&
                    !_ &&
                    (0, _.jsx)(_, {
                      message: _,
                      path: _,
                      eLanguage: _,
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      fnOnClick: _,
                    }),
                ],
              }),
            ],
          });
        }
        function _(_, _, _) {
          let _ = (0, _._)(_?.appid),
            _ = (0, _._)((0, _._)(_), "partner_event");
          if (_?.BIsVisibleEvent() && _ && _.BIsValidForRealm(_._.EREALM)) {
            const _ = (0, _._)();
            _._.IN_CLIENT && (_ > 1726604483 || _ == 0)
              ? (_ = `steam://open/library/event/${_.appid}|${_.GID}`)
              : ((_ = `${_._.STORE_BASE_URL}news/app/${_.appid}?emclan=${_.clanSteamID.ConvertTo64BitString()}&emgid=${_.GID}`),
                _._.IN_CLIENT && (_ = `steam://openurl/${_}`));
          } else
            (_ = _),
              _ && (_ += `${_.includes("?") ? "&" : "?"}emgid=${_.GID}`),
              _._.IN_CLIENT && (_ = `steam://openurl/${_}`);
          return (0, _._)(_, _, !0);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            isLoading: _,
            isError: _,
            data: _,
          } = (0, _._)({
            queryKey: ["useDLCHubCount", _],
            queryFn: async () => _(_),
            enabled: !!(_ && _ != _._),
          });
          return _ || _ ? null : _;
        }
        async function _(_) {
          const _ = `${_._.STORE_BASE_URL}dlc/${_}/ajaxgetdlccount`,
            _ = {
              origin: self.origin,
            },
            _ = await _().get(_, {
              params: _,
              withCredentials: !1,
            });
          if (_.status !== 200 || _.data.success !== _._)
            throw new Error(
              `FetchDLCCount failed: status == ${_.status}, eresult == ${_.data?.success}, err_msg == ${_.data?.err_msg}`,
            );
          return _.data.count;
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { bPreview: _ } = _,
            _ = _(),
            _ = (0, _.useMemo)(
              () =>
                _.GetDLCAppIDs().map((_) => ({
                  _: _,
                  type: "game",
                })),
              [_],
            ),
            _ = _(_.associated_item_appid);
          return (
            (0, _.useEffect)(() => {
              if (_) {
                const _ = _
                  ? (0, _._)("#MarketingMessages_See_Count_Items", _)
                  : (0, _._)("#MarketingMessages_See_All_Items");
                _.OverrideCustomText(_),
                  _.OverrideURL(
                    `${_._.STORE_BASE_URL}dlc/${_.associated_item_appid}`,
                  );
              }
            }, [_, _]),
            (0, _.jsx)(_._, {
              submethod: "dlc_override",
              children: (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {
                    _: _.associated_item_key,
                  }),
                  (0, _.jsxs)(_, {
                    children: [
                      (0, _.jsx)(_, {
                        _: _.associated_item_key,
                        bPreview: _,
                        bPreferAssetWithoutOverride: !1,
                      }),
                      (0, _.jsx)(_, {
                        rgDLCSaleCapsules: _,
                        messageType: _.GetType(),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    bHidePrice: !0,
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { messageType: _, itemCount: _ } = _,
            _ = _._.GetTypeAsLocalizedString(_);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !!_ &&
                (0, _.jsx)("div", {
                  className: _.Type,
                  children: _,
                }),
              _ == 1
                ? (0, _.jsx)(_, {
                    strDesc: (0, _._)("#MarketingMessages_DLC_desc_singular"),
                  })
                : (0, _.jsx)(_, {
                    strDesc: (0, _._)("#MarketingMessages_DLC_desc"),
                  }),
            ],
          });
        }
        function _(_) {
          const { rgDLCSaleCapsules: _, messageType: _ } = _;
          return _.length >= 4
            ? (0, _.jsx)(_, {
                rgSaleCapsules: _,
                eClickLocation: _._._,
                children: (0, _.jsx)(_, {
                  messageType: _,
                }),
              })
            : _.length >= 3
              ? (0, _.jsxs)("div", {
                  className: _.DlcCtn,
                  children: [
                    (0, _.jsx)(_, {
                      messageType: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _.OneItemRow,
                      children: (0, _.jsx)(_, {
                        _: _[0]._,
                        type: _[0].type,
                        eClickLocation: _._._,
                      }),
                    }),
                    (0, _.jsx)(_, {
                      first: _[1],
                      second: _[2],
                      eClickLocation: _._._,
                    }),
                  ],
                })
              : _.length >= 2
                ? (0, _.jsxs)("div", {
                    className: _.DlcCtn,
                    children: [
                      (0, _.jsx)(_, {
                        messageType: _,
                      }),
                      (0, _.jsx)("div", {
                        className: _.OneItemRow,
                        children: (0, _.jsx)(_, {
                          _: _[0]._,
                          type: _[0].type,
                          eClickLocation: _._._,
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: _.OneItemRow,
                        children: (0, _.jsx)(_, {
                          _: _[1]._,
                          type: _[1].type,
                          eClickLocation: _._._,
                        }),
                      }),
                    ],
                  })
                : _.length >= 1
                  ? (0, _.jsxs)("div", {
                      className: _.DlcCtn,
                      children: [
                        (0, _.jsx)(_, {
                          messageType: _,
                          itemCount: _.length,
                        }),
                        (0, _.jsx)("div", {
                          className: _.OneBigItem,
                          children: (0, _.jsx)(_, {
                            capsule: _[0],
                            imageType: "main",
                            eClickLocation: _._._,
                          }),
                        }),
                      ],
                    })
                  : null;
        }
        function _(_) {
          const { rgSaleCapsules: _, eClickLocation: _, children: _ } = _;
          return (0, _.jsxs)("div", {
            className: _.DlcCtn,
            children: [
              _,
              (0, _.jsx)(_, {
                first: _[0],
                second: _[1],
                eClickLocation: _,
              }),
              (0, _.jsx)(_, {
                first: _[2],
                second: _[3],
                eClickLocation: _,
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DealDesc,
            children: _.strDesc,
          });
        }
        function _(_) {
          const { first: _, second: _, eClickLocation: _ } = _;
          return (0, _.jsxs)("div", {
            className: _.TwoCapsuleRow,
            children: [
              (0, _.jsx)("div", {
                className: _.DlcCtn,
                children: (0, _.jsx)(_, {
                  capsule: _,
                  imageType: "header",
                  eClickLocation: _,
                }),
              }),
              (0, _.jsx)("div", {
                className: _.DlcCtn,
                children: (0, _.jsx)(_, {
                  capsule: _,
                  imageType: "header",
                  eClickLocation: _,
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _(),
            [_, _] = (0, _.useState)(() => _.GetFeaturedVideoAutoPlay()),
            _ = (0, _.useRef)(null);
          (0, _._)(_);
          const _ = (0, _._)(_.GetTemplateVars().linkurl, _._._),
            _ = (0, _._)();
          return (0, _.jsx)(_._, {
            focusable: !0,
            noFocusRing: !0,
            onActivate: (_) =>
              !_ && _.GetFeaturedVideoAutoPlay() ? _(_) : _(!0),
            className: _.PosterCtn,
            children: _
              ? (0, _.jsxs)("video", {
                  controls: !_.GetFeaturedVideoLoop(),
                  ref: _,
                  muted: !0,
                  autoPlay: !0,
                  className: _.Video,
                  loop: _.GetFeaturedVideoLoop(),
                  crossOrigin: "anonymous",
                  children: [
                    (0, _.jsx)("source", {
                      src: (0, _._)(_.GetFeaturedVideoWebMURL()),
                      type: "video/webm",
                    }),
                    !_._.IN_CLIENT &&
                      (0, _.jsx)("source", {
                        src: (0, _._)(_.GetFeaturedVideoMP4URL()),
                        type: "video/mp4",
                      }),
                    (0, _.jsx)(_, {
                      message: _,
                    }),
                  ],
                })
              : (0, _.jsx)(_, {
                  message: _,
                }),
          });
        }
        function _(_) {
          const { message: _ } = _,
            _ = _.GetTemplateVars()?.last_asset_mtime,
            [_, _] = _.GetPosterImage(),
            _ = _(_._, _, _, {
              type: "file",
              path: _,
            });
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("img", {
                src: _,
                className: _.Poster,
              }),
              (0, _.jsx)(_.IOc, {}),
            ],
          });
        }
        function _(_) {
          const { message: _ } = _,
            _ = (0, _.useMemo)(() => {
              const _ = _.GetSubtitleObj(),
                _ = _.GetTemplateVars()?.last_asset_mtime,
                _ = new Array();
              for (let _ = _.Bhc; _ < _.bP9; ++_) {
                if (!_._.IsELanguageValidInRealm(_, _._.EREALM)) continue;
                const _ = (0, _.LgB)(_);
                if (_ && _[_]) {
                  const _ = _[_].path,
                    _ = _(_._, _, _, {
                      type: "file",
                      path: _,
                    });
                  _.push(
                    (0, _.jsx)(
                      "track",
                      {
                        src: _,
                        kind: "subtitles",
                        srcLang: (0, _.wwZ)(_),
                        default: _._.LANGUAGE == _,
                        label: (0, _._)("#language_selection_" + (0, _.LgB)(_)),
                      },
                      _._ + " " + _,
                    ),
                  );
                }
              }
              return _;
            }, [_]);
          return (0, _.jsx)(_.Fragment, {
            children: _,
          });
        }
        function _(_) {
          const { bLowBandwidthMode: _ } = _,
            _ = _(),
            _ = !_ && _.GetTemplateVars().custom_display === "featured_video";
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  isBackgroundBlur: !0,
                  bOverrideUseBackgroundImage: _,
                }),
                (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsx)(_, {
                      bOverrideUseBackgroundImage: _,
                    }),
                    !!_ && (0, _.jsx)(_, {}),
                  ],
                }),
                (0, _.jsx)(_, {}),
              ],
            }),
          });
        }
        function _(_) {
          const _ = _(),
            _ = (0, _._)(_.GetTemplateVars().linkurl, _._._);
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  isBackgroundBlur: !0,
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    fnOnClick: _,
                  }),
                }),
                (0, _.jsx)(_, {}),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = (0, _.useMemo)(() => {
              if (!_) return [];
              const _ =
                _.categories?.supported_player_categoryids?.slice(0, 1) || [];
              return (
                _.categories?.feature_categoryids?.forEach((_) => _.push(_)),
                _.categories?.controller_categoryids?.forEach((_) => _.push(_)),
                _.categories?.supported_player_categoryids
                  ?.slice(1)
                  .forEach((_) => _.push(_)),
                _
              );
            }, [_]);
          return !_ || _.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: (0, _._)(_().SaleTagBlockCtn, "SaleTagBlockCtn"),
                children:
                  _?.length > 0
                    ? (0, _.jsx)("div", {
                        className: (0, _._)(_().TagBox, _().Categories),
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              categoryID: _,
                            },
                            "cat_" + _,
                          ),
                        ),
                      })
                    : (0, _.jsx)("div", {
                        children: (0, _._)("#Broadcast_None"),
                      }),
              });
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
            ? (0, _.jsx)("div", {
                className: _().Category,
                children: (0, _.jsx)(_._, {
                  toolTipContent: _.name,
                  children: (0, _.jsx)("div", {
                    className: _().CategoryIcon,
                    style: {
                      background: `url(${_._.STORE_CDN_URL}/public/images/${_.image_path}) no-repeat center center/cover`,
                    },
                  }),
                }),
              })
            : null;
        }
        function _(_) {
          const {
              _: _,
              fnOnClickButton: _,
              bLowBandwidthMode: _,
              bUseAssetWithoutOverride: _,
            } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_);
          return !_ || !_
            ? (0, _.jsx)("div", {
                className: (0, _._)(_().HilightGrid, _().MediaContainerMM),
                children: (0, _.jsx)(_._, {
                  size: "medium",
                }),
              })
            : (0, _.jsx)("div", {
                className: (0, _._)(_().HilightGrid, _().MediaContainerMM),
                children: (0, _.jsx)(_._, {
                  _: _,
                  elFeaturedInCenter: (0, _.jsx)(_, {
                    _: _,
                    bUseAssetWithoutOverride: !!_,
                    fnOnClickButton: _,
                  }),
                  trailer: _ && _.length > 0 ? _[0] : void 0,
                  storeItemScreenshots: _,
                  bUseTrailerAsFirstThumb: !_,
                  bNoScreenShotModals: !0,
                  name: _.name || "",
                }),
              });
        }
        function _(_) {
          const { _: _, fnOnClickButton: _, bUseAssetWithoutOverride: _ } = _,
            [, _] = (0, _._)(),
            { data: _ } = (0, _._)(_, _),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_ || !_ || !_) return null;
          const _ = (0, _._)(_, "main_capsule");
          return (0, _.jsxs)(_._, {
            focusable: !0,
            noFocusRing: !0,
            className: _().MainCapsuleWithHover,
            ..._,
            onActivate: _,
            children: [
              (0, _.jsx)("img", {
                className: _().MainCapsule,
                src: _,
                alt: _.name || "",
              }),
              (0, _.jsxs)("div", {
                className: _().AppDetails,
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().GameName),
                    children: _.name || "",
                  }),
                  (0, _.jsxs)("div", {
                    className: _().ShortDesc,
                    children: [_.short_description, " "],
                  }),
                  (0, _.jsx)(_._, {
                    rgTagIDs: _ ? _.slice(0, 10).map((_) => _.tagid || 0) : [],
                    instanceNum: 0,
                    bLargeText: !0,
                    bHideTitle: !0,
                    bNoStoreLinks: !0,
                  }),
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { bPreview: _, bLowBandwidthMode: _ } = _,
            _ = _(),
            _ = (0, _._)(_.GetTemplateVars().linkurl, _._._),
            _ = _.associated_item_key;
          return (0, _.jsx)(_._, {
            submethod: "mm-auto-render",
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  _: _,
                }),
                (0, _.jsx)(_, {
                  children: (0, _.jsxs)("div", {
                    className: _.AutoRenderContents,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _.TitleContainer,
                        children: [
                          (0, _.jsx)("div", {
                            className: _.TypeTitle,
                            children: _._.GetTypeAsLocalizedString(_.GetType()),
                          }),
                          (0, _.jsx)(_, {
                            message: _,
                            _: _,
                          }),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        appid: _.associated_item_appid,
                        children: (0, _.jsx)(_, {
                          _: _,
                          fnOnClickButton: _,
                          bLowBandwidthMode: _,
                          bUseAssetWithoutOverride:
                            _.GetAutoRenderWithoutAssetOverrides(),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)(_, {
                  bHidePrice: _.GetTemplateVars().hide_price,
                  fnOnClickButton: _,
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { message: _, _: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = _?.free_weekend,
            [_] = (0, _._)("timezone"),
            [_] = (0, _._)("locale");
          if (_.GetType() == _._._) {
            if (_?.text)
              return (0, _.jsx)("div", {
                className: _.TypeSubTitle,
                children: _.text,
              });
            if (_?.end_time) {
              _ && _._.SetPreferredLocales([_]);
              const _ = _ || Intl.DateTimeFormat().resolvedOptions().timeZone,
                _ = _.end_time,
                _ = _.unix(_)._(_),
                _ = _.format("z"),
                _ = _.match(/^-?\d/)
                  ? `UTC${_.unix(_)._(_).format("Z").replace(":00", "")}`
                  : _,
                _ = (0, _._)(_.unix(), !1, _, _);
              return (0, _.jsx)("div", {
                className: _.TypeSubTitle,
                children: (0, _._)("#msg_free_play_until", _),
              });
            } else
              return (0, _.jsx)("div", {
                className: _.TypeSubTitle,
                children: (0, _._)("#msg_free_play_weekend"),
              });
          }
          const _ = _.GetTemplateVars()?.autorender_subtitle_token;
          return _
            ? (0, _.jsx)("div", {
                className: _.TypeSubTitle,
                children: (0, _._)(_),
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = [20, 50, 100, 200, 500, 1e3, 2e3, 5e3];
        function _() {
          const _ = _(),
            { sale_clan_account: _, sale_clan_event_gid: _ } =
              _.GetTemplateVars(),
            { eventModel: _, bLoading: _ } = (0, _._)(
              _ ? Number(_) : void 0,
              _,
            ),
            _ = (0, _._)(_, "capsule", (0, _.sfN)(_._.LANGUAGE)),
            _ = (0, _.useMemo)(
              () =>
                _.GetRecommendedAppIDs()
                  .slice(0, _._)
                  .map((_) => ({
                    _: _,
                    type: "game",
                  })),
              [_],
            );
          return (
            (0, _.useEffect)(() => {
              const _ = _(_.GetSaleItemCount());
              _ &&
                _.OverrideCustomText(
                  (0, _._)("#MarketingMessages_See_AtLeast_Items", (0, _._)(_)),
                );
            }, [_]),
            (0, _.jsx)(_._, {
              submethod: "sale_items",
              children: (0, _.jsxs)(_, {
                children: [
                  _
                    ? (0, _.jsx)(_, {
                        strImageURL: _,
                      })
                    : (0, _.jsx)(_, {
                        isBackgroundBlur: !0,
                      }),
                  (0, _.jsxs)(_, {
                    children: [
                      (0, _.jsx)(_, {
                        eventModel: _,
                        strCapsuleURL: _,
                        bLoading: _,
                      }),
                      (0, _.jsx)(_, {
                        rgSaleCapsules: _,
                        eClickLocation: _._._,
                        children: (0, _.jsx)(_, {
                          strDesc: (0, _._)(
                            "#MarketingMessages_SaleItems_Label",
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    bHidePrice: !0,
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          return _.filter((_) => _ <= (_ ?? 0)).pop();
        }
        function _(_) {
          const { eventModel: _, strCapsuleURL: _, bLoading: _ } = _,
            _ = _(),
            { linkurl: _ } = _.GetTemplateVars(),
            _ = (0, _._)(_, _._._);
          if (_)
            return (0, _.jsx)("div", {
              className: _.Header,
            });
          if (!_ || !_) return (0, _.jsx)(_, {});
          const _ = _.GetNameWithFallback((0, _.sfN)(_._.LANGUAGE)),
            _ = _.endTime,
            _ = !!_ && _ > (0, _._)();
          return (0, _.jsxs)(_._, {
            focusable: !0,
            noFocusRing: !0,
            className: _.Header,
            onActivate: _,
            children: [
              (0, _.jsx)("img", {
                className: _.Capsule,
                src: _,
                alt: _,
              }),
              (0, _.jsxs)("div", {
                className: _.HeaderText,
                children: [
                  (0, _.jsx)(_, {
                    strType: (0, _._)("#MarketingMessages_SaleEvent"),
                    strTitle: _,
                    bSmallTitle: !0,
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.Dates,
                      children: (0, _._)(
                        "#MarketingMessages_SaleEvent_Through",
                        (0, _._)(_, !1, !1, !1),
                      ),
                    }),
                ],
              }),
            ],
          });
        }
        const _ = _.createContext(null);
        function _() {
          return _.useContext(_);
        }
        function _(_) {
          const { message: _, preview: _ } = _,
            _ = _.active !== !1,
            _ = (0, _._)();
          return (
            _.useEffect(() => {
              _ && _(_.GetLegalHTML());
            }, [_, _, _]),
            (0, _.jsx)(_.Provider, {
              value: _,
              children: (0, _.jsx)(_.Suspense, {
                fallback: null,
                children: (0, _.jsx)(_, {
                  message: _,
                  active: _,
                  preview: _,
                }),
              }),
            })
          );
        }
        const _ = _.lazy(() =>
          Promise.all([
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
          ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
        );
        function _(_) {
          const { message: _, active: _, preview: _ } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            { bLowBandwidthMode: _ } = (0, _._)();
          if (
            (0, _._)(_.GetTemplateVars().custom_display || "") &&
            _._.logged_in
          ) {
            const _ = Number(
              (0, _._)(_.GetTemplateVars().custom_display || ""),
            );
            return isNaN(_)
              ? null
              : (0, _.jsx)(_, {
                  active: _,
                  year: _,
                });
          }
          switch (_.GetTemplateVars().custom_display) {
            case "dlc_override":
              return (0, _.jsx)(_, {
                bPreview: _,
              });
            case "partner_event":
              return (0, _.jsx)(_, {
                bPreview: _,
                bUseAnimated: (0, _._)(_, _, _),
              });
            case "mm_auto_render":
              return (0, _.jsx)(_, {
                bPreview: _,
                bLowBandwidthMode: _,
              });
          }
          return _.BShouldShowSaleItems()
            ? (0, _.jsx)(_, {})
            : _.GetTemplateType() === "image"
              ? (0, _._)(_, _, _)
                ? (0, _.jsx)(_, {})
                : (0, _.jsx)(_, {
                    bLowBandwidthMode: _,
                  })
              : null;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 8,
          _ = _.createContext(null);
        function _() {
          return _.useContext(_);
        }
        function _(_) {
          const { MarketingMessagesStore: _ } = _,
            _ = (0, _._)(),
            { rgMessages: _, isError: _ } = (0, _._)(_, _),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(0);
          (0, _._)(_.MarketingMessagePage);
          const _ = (0, _._)();
          if (
            (_.useEffect(() => {
              _ &&
                !_.length &&
                !_ &&
                (_.bIncludeSeenMessages
                  ? _(!0)
                  : _.replace({
                      ..._.location,
                      search: (0, _._)({
                        ..._,
                        bIncludeSeenMessages: !0,
                      }),
                    }));
            }, [_, _, _, _]),
            _)
          )
            return (0, _.jsx)(_, {
              children: (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (_)
            return (0, _.jsx)(_, {
              children: (0, _._)("#MarketingMessages_NoneAvailable"),
            });
          const _ = _.bIncludeSeenMessages ? _ : _?.slice(0, _);
          return (0, _.jsxs)("div", {
            className: _.MessageListPage,
            children: [
              (0, _.jsx)("div", {
                className: _.MessageListScroll,
                children: (0, _.jsx)(_, {
                  MarketingMessagesStore: _,
                  rgMessages: _,
                  iActiveMessage: _,
                }),
              }),
              (0, _.jsx)(_, {
                cMessages: _?.length,
                iMessage: _,
                setMessage: _,
              }),
            ],
          });
        }
        function _(_) {
          const {
            MarketingMessagesStore: _,
            rgMessages: _,
            iActiveMessage: _,
          } = _;
          return _
            ? (0, _.jsx)("div", {
                className: _.MessageListContainer,
                children: _?.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      displayIndex: _,
                      message: _,
                      MarketingMessagesStore: _,
                      active: _ == _,
                      next: _ == _ + 1 || _ == _ - 1,
                    },
                    _._,
                  ),
                ),
              })
            : (0, _.jsx)("div", {
                className: (0, _._)(_.MessageListContainer, _.Loading),
                children: (0, _.jsx)(_._, {
                  size: "xxlarge",
                  msDelayAppear: 500,
                }),
              });
        }
        function _(_) {
          const { cMessages: _, iMessage: _, setMessage: _ } = _,
            _ = _.useCallback(() => _(_ - 1), [_, _]),
            _ = _.useCallback(() => _(_ + 1), [_, _]),
            _ = [];
          for (let _ = 0; _ < _; _++)
            _.push(
              (0, _.jsx)(
                _,
                {
                  active: _ == _,
                  iMessage: _,
                  setMessage: _,
                },
                _,
              ),
            );
          const _ = _ > 0 ? _ : void 0,
            _ = _ < _ - 1 ? _ : void 0;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: _.CarouselSpacer,
              }),
              (0, _.jsx)("div", {
                className: _.CarouselBar,
                children: (0, _.jsxs)("div", {
                  className: _.Content,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(_.LeftArrow, _ && _.Active),
                      onClick: _,
                      children: (0, _.jsx)(_.l8x, {
                        angle: 180,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: _.Spacer,
                    }),
                    (0, _.jsx)("div", {
                      className: _.PipContainer,
                      children: (0, _.jsx)("div", {
                        className: _.Pips,
                        children: _,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: _.Spacer,
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(_.LeftArrow, _ && _.Active),
                      onClick: _,
                      children: (0, _.jsx)(_.l8x, {
                        angle: 0,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { active: _, iMessage: _, setMessage: _ } = _,
            _ = _.useCallback(() => _(_), [_, _]);
          return (0, _.jsx)("div", {
            className: (0, _._)(_.Pip, _ && _.Active),
            onClick: _,
          });
        }
        function _(_) {
          const { MarketingMessagesStore: _, preview: _ } = _,
            _ = (0, _._)(),
            { message: _, isError: _ } = (0, _._)(_, _.params.messageid, _);
          return (
            (0, _._)(_.MarketingMessagePage),
            _
              ? (0, _.jsx)(_, {
                  children: (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
                })
              : _.params.messageid
                ? _
                  ? (0, _.jsx)(_._, {
                      message: _,
                      preview: _,
                    })
                  : null
                : (0, _.jsx)(_, {
                    children: (0, _._)("#MarketingMessages_NoneAvailable"),
                  })
          );
        }
        function _(_) {
          return (0, _.jsxs)(_._, {
            style: {
              maxWidth: "400px",
              margin: "0 auto",
            },
            children: [
              (0, _.jsxs)(_._, {
                children: [(0, _._)("#Error_Generic"), " "],
              }),
              (0, _.jsx)(_._, {
                children: _.children,
              }),
            ],
          });
        }
        function _(_, _, _) {
          _.useEffect(() => {
            _ && _.MarkMessageSeen(_._, _ + 1, _.GetTemplateTypeForReporting());
          }, [_, _, _]);
        }
        function _(_) {
          const {
              message: _,
              MarketingMessagesStore: _,
              active: _,
              next: _,
              displayIndex: _,
            } = _,
            _ = _.useRef(void 0),
            _ = _.useRef(_ || _);
          if ((_(_, _ ? _ : null, _), (_ || _) && (_.current = !0), !_.current))
            return null;
          let _ = {
            enter: _.Enter,
            enterActive: _.EnterActive,
            enterDone: _.EnterDone,
            exit: _.Exit,
            exitActive: _.ExitActive,
            exitDone: _.ExitDone,
          };
          return (0, _.jsx)(_._, {
            _: _,
            nodeRef: _,
            classNames: _,
            timeout: 300,
            mountOnEnter: !_,
            unmountOnExit: !_,
            children: (0, _.jsx)(_.Provider, {
              value: _,
              children: (0, _.jsx)("div", {
                className: (0, _._)(_.MessageWrapper, _ && _.Active),
                ref: _,
                children: (0, _.jsx)(_._, {
                  message: _,
                  active: _,
                }),
              }),
            }),
          });
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
        function _() {
          const _ = (0, _._)();
          return _.useMemo(() => {
            const _ = new URLSearchParams(_.search);
            return {
              bIncludeSeenMessages: !!_.get("include_seen"),
              nClientPackageVersion: parseInt(
                _.get("client_package_version") || "0",
              ),
              eOSType: parseInt(_.get("os_type") || "0"),
              bLowBandwidthMode: !!_.get("low_bandwidth"),
            };
          }, [_.search]);
        }
        function _(_) {
          const _ = new URLSearchParams();
          return (
            _.bIncludeSeenMessages && _.append("include_seen", "1"),
            _.nClientPackageVersion &&
              _.append(
                "client_package_version",
                _.nClientPackageVersion.toString(),
              ),
            _.eOSType && _.append("os_type", _.eOSType.toString()),
            _.bLowBandwidthMode && _.append("low_bandwidth", "1"),
            _.toString()
          );
        }
        function _(_, _, _) {
          if (!_ && _.BHasTemplateAnimatedAssets()) {
            const _ = _._.GetELanguageFallback(_);
            return (
              _.BHasTemplateAnimatedAssetForLanguage(_) ||
              _.BHasTemplateAnimatedAssetForLanguage(_)
            );
          }
          return !1;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            MarketingMessageRoutes: () => _,
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          prioritized_list: !1,
        });
        function _(_) {
          const [_, _] = _.useState(),
            _ = (0, _._)(),
            _ = _.useMemo(() => {
              const _ = new URLSearchParams(_.search);
              return {};
            }, [_.search]);
          return (
            _.useEffect(() => {
              const _ = (0, _._)(
                "marketingmessage_config",
                "application_config",
              );
              _({});
            }, [_]),
            _
              ? (0, _.jsxs)(_.Provider, {
                  value: _,
                  children: [_.children, " "],
                })
              : null
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          List: () => `${_._.MarketingMessages()}list/`,
          Message: (_) => `${_._.MarketingMessages()}${_}`,
          MessagePreview: (_) => `${_._.MarketingMessages()}preview/${_}`,
        };
        function _(_) {
          const _ = _();
          return _
            ? (0, _.jsx)(_._, {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
                children: (0, _.jsx)(_, {
                  children: (0, _.jsx)(_._, {
                    children: (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)(_._, {
                          path: `${_.List()}`,
                          children: (0, _.jsx)(_._, {
                            MarketingMessagesStore: _,
                          }),
                        }),
                        (0, _.jsx)(_._, {
                          path: `${_.MessagePreview(":messageid")}`,
                          children: (0, _.jsx)(_._, {
                            MarketingMessagesStore: _,
                            preview: !0,
                          }),
                        }),
                        (0, _.jsx)(_._, {
                          path: `${_.Message(":messageid")}`,
                          children: (0, _.jsx)(_._, {
                            MarketingMessagesStore: _,
                          }),
                        }),
                        (0, _.jsx)(_._, {
                          children: (0, _.jsx)(_._, {
                            _: `${_.List()}`,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : null;
        }
        let _;
        function _(_) {
          return _ || (_ = new _._(_)), _;
        }
        function _() {
          const [_, _] = _.useState(null),
            _ = (0, _._)();
          return (
            _.useEffect(() => {
              _ || _(_(_));
            }, [_, _]),
            _
          );
        }
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
          BackgroundAnimation: "_2YqbTh9tmcEZ5Jnz39bkD9",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Z_byUU724LC7VmBpwzXvB",
          "ItemFocusAnim-darkerGrey": "_79YB3jhA36yeyMiLstJi",
          "ItemFocusAnim-darkGreySettings": "_1lSn5OE1oc5-oQjPkjBIYj",
          "ItemFocusAnim-darkGrey": "CFIUukdHjcI69ga9Z8nTA",
          "ItemFocusAnim-grey": "_3rAbB1f0HQs0x4Hqa5CdEA",
          "ItemFocusAnim-translucent-white-10": "_9gKqKsdvXOoawIPGtFkRF",
          "ItemFocusAnim-translucent-white-20": "_3zG2IKWY48X67SEt1vSIhf",
          "ItemFocusAnimBorder-darkGrey": "_1etJfunIGxvr5ni3LVgo74",
          "ItemFocusAnim-green": "_2y66jXVD5R6zd5LqMTWYVl",
          focusAnimation: "rfbikUhNdMJp8YaaOMaCW",
          hoverAnimation: "_2kGcR5txA30fIqTtD8sBNS",
        };
      },
      chunkid: (module) => {
        module.exports = {
          MarketingMessagePage: "_1HVoKfdcaouK3kHKX2kH5t",
          MessageListPage: "_1N7O3VXbkpN2z55HsSDZsi",
          MessageListScroll: "_2RW7G8Bi-8k-29anQh8Ie8",
          CarouselBar: "O7VJKyPtoS7TXCr6mrwCr",
          Content: "_1qtg3ASXX4ClYiTHPq9Tkl",
          LeftArrow: "_3ZyZUkBq73dLvZ6zKdM9PQ",
          RightArrow: "_2WuPusSmjw_B4rfkgb-NV8",
          Active: "cwA5j4AsP5OB7WjWuOlFv",
          Spacer: "COvXCP3wZxk_s1ho7e3WO",
          PipContainer: "_3ASpk2zuTuDhIXKorFGF_L",
          Pips: "_1rpuGJtVR-xrddd9ui6IWu",
          Pip: "ZQrtMhZB1tpkd2bgBXyIF",
          MessageListContainer: "_33cf4TnmCK5XdTjanW9bVf",
          Loading: "_1xSKZdDmIvXYCmFif6fSAq",
          MessageWrapper: "_152h7KWYvm_9hIyzRzh8kl",
          Enter: "DZICERQkVmyCBP2E-PwlH",
          EnterActive: "RU-xm1VaMHf9H7o1TFkVO",
          EnterDone: "_3AP2YQ_mKZF-H78sMt3rKC",
          Exit: "_2xmDIRYN5Pu_eHRMjWop63",
          ExitActive: "_32DFHj9NmyNtEK-3K3nKuX",
          ExitDone: "_3cFXRpyI9jrZ2qCySg3fiT",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          AutoRenderContents: "_1H1L2spV-tto6AJmQMSfsA",
          TitleContainer: "_2iA76-Eh1ID-HXFGGR5BoH",
          TypeTitle: "klzItvORTtJ0Eeg8ArDrN",
          TypeSubTitle: "QPZq6bu7lf50YpRKZgPCc",
          BackgroundAnimation: "_13qwvch-5kbKbOaRivhMXc",
          "ItemFocusAnim-darkerGrey-nocolor": "_3DNhNNrE4iKRi60PdXWepo",
          "ItemFocusAnim-darkerGrey": "_15lW83rYVxUKmbx_X2Huiw",
          "ItemFocusAnim-darkGreySettings": "_2-gDTKZjm9Ajq5sJ9tSPUR",
          "ItemFocusAnim-darkGrey": "_3HGF0obZAs6s2bNbYpM7qW",
          "ItemFocusAnim-grey": "_3YpbyrBpBdoe0gBRw1Hbqx",
          "ItemFocusAnim-translucent-white-10": "_30y8LayXh8jUHdaxQlL0ZS",
          "ItemFocusAnim-translucent-white-20": "_27U6YkfThQDFTGvax-gmlu",
          "ItemFocusAnimBorder-darkGrey": "_2JbY6SYVtLg0XfAcDsFaMR",
          "ItemFocusAnim-green": "_3976kBFFMdgKDnNELLMM6G",
          focusAnimation: "SzNeb_49-6eaLunS7L3C",
          hoverAnimation: "_1ji7N9JSTyeK_qtueFlYQi",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          UpdateEventCtn: "_3ICxVDu3-Bkx9aqyLehGGP",
          EventImage: "zDfA0bzAjCUkfaQx_KvS7",
          BackgroundAnimation: "OTs9Tg4QxhQ0Y_QNGDDt9",
          "ItemFocusAnim-darkerGrey-nocolor": "_1NdRyUGS8v6vgPO4so1xTw",
          "ItemFocusAnim-darkerGrey": "_2pygTjxugmVCyf_AACiIV9",
          "ItemFocusAnim-darkGreySettings": "_2k7FRzOjQym6IuES_SDcJs",
          "ItemFocusAnim-darkGrey": "_3znWC1DynbIfoAl5wwBaoo",
          "ItemFocusAnim-grey": "_2oa-LIlworjV0-bg_CQfoy",
          "ItemFocusAnim-translucent-white-10": "i9BFCko5sTUsKunkoSgIG",
          "ItemFocusAnim-translucent-white-20": "_2XDvVDTKofCXGIqRPg15Bt",
          "ItemFocusAnimBorder-darkGrey": "_3rZ3pu0VIsvlLePQQSHFLd",
          "ItemFocusAnim-green": "_2vAKcsXEpb9snlDyeK82te",
          focusAnimation: "_2I7fW0qyN3vk4sB9-UXHBH",
          hoverAnimation: "_1TlYxkxN-WZNFNjoM2t3Ha",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          BackgroundImage: "_3vQ5a1hrg4SbTU1Uw3351z",
          DlcCtn: "_3H7i0ChQjoGWieNRcKmYea",
          Type: "HmoaKPBZvHxysTOtEt6I_",
          DealDesc: "_3fPQtBXFQwL3xrK4zmpmyq",
          OneItemRow: "_6a9d-uI8VyQTmWHS3vFI-",
          OneBigItem: "_2lKQioAzojICHeg5SX6fhc",
          TwoCapsuleRow: "_1s9-9e_1KjO0xTTJNj-KuT",
          BackgroundAnimation: "MAJyK9QcMypCZbMYmoLHu",
          "ItemFocusAnim-darkerGrey-nocolor": "_2IE90ljBHRp1SITs86XIYT",
          "ItemFocusAnim-darkerGrey": "_3Izi4xp4tar8pwj5nAAAJx",
          "ItemFocusAnim-darkGreySettings": "_1AXb9HQ7EwT6k-c4TWuD6b",
          "ItemFocusAnim-darkGrey": "_17XlJo9wQvFGnl_mC2sDDP",
          "ItemFocusAnim-grey": "_2_GD3bdKzrHkm2Ldb6tVut",
          "ItemFocusAnim-translucent-white-10": "_31VDSRuwtIPGNRsMsAiiuS",
          "ItemFocusAnim-translucent-white-20": "RpA2APZ8BdkDDu88M1t99",
          "ItemFocusAnimBorder-darkGrey": "_1JoYgnM2uNiTB2PbeAfe-S",
          "ItemFocusAnim-green": "_2cI4C5AH9C-VNLXQyhLoZE",
          focusAnimation: "_1kz2gc1Q6nZYfgugTIMxpo",
          hoverAnimation: "_2Kc7YeIDyVeYMtcdglCErh",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          PosterCtn: "_24bJJZ8-xr8Et4DVUrr17J",
          Poster: "_3LbyxomxMvYMy7cLThkkIf",
          Video: "_2bH_Jxh-T2YFCPBCW_pvQB",
          BackgroundAnimation: "fmJwkjLpps2lTYiDhuZaS",
          "ItemFocusAnim-darkerGrey-nocolor": "_3P7eXvQeL41e2U1Dlf-o3y",
          "ItemFocusAnim-darkerGrey": "_1ox1csOfGebwxpQWCIrD8r",
          "ItemFocusAnim-darkGreySettings": "_1edLKf573MLIIzXMGDJQuk",
          "ItemFocusAnim-darkGrey": "_20nB-hQDWUFRiLXleHcpCi",
          "ItemFocusAnim-grey": "_3izRpxwl4_d_Vxa1pgYMiA",
          "ItemFocusAnim-translucent-white-10": "_1hhQO02787EOl9eQ9AMGYY",
          "ItemFocusAnim-translucent-white-20": "Y9TgOYN31D-9Nr_0YqCTN",
          "ItemFocusAnimBorder-darkGrey": "_3vZR4wYNZIWMbiwF5nGGUP",
          "ItemFocusAnim-green": "_1rcnmgd1hOIPA9f3ngfevA",
          focusAnimation: "_3uCspaHoybU11f9AiHQU-o",
          hoverAnimation: "fLko22pxQFa4_xcoc8AEf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          Header: "_2m3RxInRYd11y5ewu7kLxr",
          Capsule: "_1NQIYI_yPkSh0ZnjIjOb6w",
          HeaderText: "_38qIDuTcZeQsAF13tF8lDi",
          Dates: "_1eCCPp6vyvsBDfuTm0BZcD",
          BackgroundAnimation: "_1EzScJ5OD3gGXn-0v81Mv2",
          "ItemFocusAnim-darkerGrey-nocolor": "_2UvQorHrCjIq7P6EXRWm8i",
          "ItemFocusAnim-darkerGrey": "_3AW-8WgVS3LoJefCcZEwEB",
          "ItemFocusAnim-darkGreySettings": "Sm57uldLjwZAeFPp4rnOh",
          "ItemFocusAnim-darkGrey": "ij9wCUcSCRfn3Zelf5tVn",
          "ItemFocusAnim-grey": "nn7bODQXxrqm5vi65_Ghn",
          "ItemFocusAnim-translucent-white-10": "aGQ816L9HVOe1yWXJxFbO",
          "ItemFocusAnim-translucent-white-20": "EmgJ1FmL5KJswxAziYq02",
          "ItemFocusAnimBorder-darkGrey": "Sd78C1xqBFwA6oDwNItn4",
          "ItemFocusAnim-green": "_3kv1KnzqHXR-3c0S-AUI21",
          focusAnimation: "_3KrQ3h-n6RWIC439NendKo",
          hoverAnimation: "_2dE1gFZy2MzMZbRPHZfDIU",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          All: "_1Ihp0wKLvNYkePQe0VrHnC",
          MessageFooter: "_3t5WMbFCdjhi0jY_LsEmHU",
          ButtonAndPriceCtn: "_1ZbewdWkMfyxa_PdVDMoDU",
          Legal: "_2_eDs58X0eEznR-ukDC_qt",
          NoButton: "_3IuUvJa9v9WI7_4WCI8-5t",
          Btn: "_3J3L60oPKSSmfBrQoNzGka",
          MessagePriceCtn: "_2g5STEIbDalv8hDLrPF3f-",
          Price: "G3m3RKwAqO-NG8_dvnifU",
          NoPrice: "_3fIuqvgfN6oD_bvpdHWEl8",
          PriceReal: "_14BApLFAAyKDCTSv-FU3cM",
          PriceRealShort: "_1E4sfQ48HHNa1aVRVPso3t",
          PriceRegular: "lhwy7sGWsQ0H-qiGzBfVO",
          Strike: "_3zM6T8KcphlmjOBnyqYGi0",
          MessageContent: "_2OxhXhvrpr4BL-kq6s7Eov",
          IsBlur: "_1M-oJo6Qwi_taE9-LcUQXw",
          MessageBody: "yNkHDKSU1gO-i7O8pRwGb",
          MessageImage: "_3R5wv6ya3QU6VH7qq2819z",
          VideoImageContainer: "_2yR5YNB4D48KDMaHJC7ELs",
          GameImage: "_1YhdlZrF81fOxpD5J2tD7o",
          EventType: "_1kBtSqsFkkixOn9MlYuuTa",
          EventTitle: "_2WtqvOJO09bKKgVvJYV_7q",
          SmallTitle: "M0i1HNwFwWUb2fshnV5cu",
          BaseCtn: "_6Tfttc004NhLDjbTDS9PC",
          CapsuleCtn: "bSrl3b6Qz1HKSithRsqvM",
          DescCtn: "_20PKe9KJTJC5SAbLi4Dy-Y",
          GameNameCtn: "kgQI2KVBs-Y3neqiTpbvQ",
          GameName: "QFFkjL-A27JtOIgIqO5dH",
          LibraryDetails: "_1ddC4grHqe7uggEE2cihEv",
          Button: "_2T5KnJO7YB00MG9YIyfImx",
          ViewInLibrary: "_3he9kmZ7_zW9VD6jkZAb1N",
          PlayDetailCtn: "J3BmO963EVK__A5VRDAQM",
          TextTop: "_3eCgYrG63hATLNUS2prQdu",
          TextBottom: "_3-KPIEC01O5ncvCQdfuTum",
          ButtonContainer: "_10sC9pDV-gUZWLDMtbWFpZ",
          BackgroundAnimation: "iazxtC_6xsy3ZAlQoiLly",
          "ItemFocusAnim-darkerGrey-nocolor": "_2cB4L3LYRmW8ZPhM1KmIiK",
          "ItemFocusAnim-darkerGrey": "ydW4ABxqu6OYOVnY28tB8",
          "ItemFocusAnim-darkGreySettings": "_4i8hDH1Gg-f_tUZZ4Zp5",
          "ItemFocusAnim-darkGrey": "_2IeQuqKv4kC7vVDREUnVXJ",
          "ItemFocusAnim-grey": "X3U1lQ94969mdo-OyDB4r",
          "ItemFocusAnim-translucent-white-10": "_3I9H7g6vFex4f-XocVTj-X",
          "ItemFocusAnim-translucent-white-20": "_2_i92FJitTDXOf5j2qHIAl",
          "ItemFocusAnimBorder-darkGrey": "_3ptMvwESzMu4HLigXQtQOm",
          "ItemFocusAnim-green": "jkn_IZFEGtZHxdFRc6KON",
          focusAnimation: "_38aC9CNFSq3FVlwkvehRI-",
          hoverAnimation: "_2a2hzvLCbR64ODBqWR_ARQ",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function _(_) {
          var _ = _(_);
          return __webpack_require__(_);
        }
        function _(_) {
          if (!__webpack_require__._(_, _)) {
            var _ = new Error("Cannot find module '" + _ + "'");
            throw ((_.code = "MODULE_NOT_FOUND"), _);
          }
          return _[_];
        }
        (_.keys = function () {
          return Object.keys(_);
        }),
          (_.resolve = _),
          (module.exports = _),
          (_._ = 61738);
      },
    },
  ]);
})();
