(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39297],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, profileUrl: _, dlc: _ } = _,
            _ = _
              ? `${_}/achievements/${_}`
              : `${Config.COMMUNITY_BASE_URL}achievements/${_}`;
          return _ !== void 0 ? `${_}?dlc=${_}` : _;
        }
        function _(_) {
          const { appid: _, profileUrl: _ } = _;
          return _
            ? `${_}/stats/${_}/achievements/`
            : `${_._.COMMUNITY_BASE_URL}stats/${_}/achievements/`;
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
          return (0, _.jsxs)("a", {
            href: _.strURL,
            className: _._.Box,
            "data-modal-content-sizetofit": !!_.bSizeToFit,
            "data-appid": _.appid,
            "data-publishedfileid": _.publishedfileid,
            children: [
              (0, _.jsx)(_._, {
                strURL: _.strPreviewURL,
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_._, {
                    children: _.strTitle,
                  }),
                  (0, _.jsx)("div", {
                    children: (0, _.jsx)("span", {
                      className: _._.Type,
                      children: _.strType,
                    }),
                  }),
                  _.author &&
                    (0, _.jsx)(_._, {
                      children: _.author,
                    }),
                  (0, _.jsx)(_._, {
                    children: _.strDescription,
                  }),
                ],
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
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          return _?.public_data?.profile_url
            ? `${_._.COMMUNITY_BASE_URL}id/${_.public_data.profile_url}`
            : _(_?.public_data?.steamid || _);
        }
        function _(_) {
          return _ ? `${_._.COMMUNITY_BASE_URL}profiles/${_}` : "";
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
          _ = __webpack_require__._(_);
        function _(_, _) {
          return new (_())(
            async (_) => {
              const _ = [..._],
                _ = await _.xtC.GetPlayerLinkDetails(_, {
                  steamids: _,
                }),
                _ = new Map();
              return (
                _.Body()
                  .accounts()
                  .forEach((_) => {
                    const _ = _.toObject();
                    _.set(_.public_data.steamid, _);
                  }),
                _.map((_) => _.get(_) ?? null)
              );
            },
            {
              maxBatchSize: 100,
              cache: !1,
              ..._,
            },
          );
        }
        function _(_) {
          return (0, _._)("PlayerLinkDetails", () => _(_));
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
          const [_, _] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => _(!0));
            }, []),
            jsx(_.Provider, {
              value: _,
              children: _.children,
            })
          );
        }
        const _ = (0, _.createContext)(!1);
        function _() {
          return (0, _.useContext)(_);
        }
        const _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
          _ =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((_) => _.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          _ = _ && decodeURIComponent(_);
        function _() {
          return _() ? _ : (_ ?? _);
        }
        function _() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        _();
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function _(_) {
          return _ ? _.test(_.trim()) : !1;
        }
        function _(_, _) {
          return _(_) ? _ : _;
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          switch (_) {
            case "button":
              return (0, _._)(_().LinkButton, "LinkButton");
            case "pill":
              return (0, _._)(_().LinkPill, "LinkPill");
            default:
              return (0, _._)(_().Link, "Link");
          }
        }
        function _(_, _, _) {
          let _ = "";
          return (
            _ == "button" && _ && (_ += `background-color: ${_};`),
            _ == "pill" && _ && (_ += `color: ${_};`),
            _.length == 0 ? void 0 : _
          );
        }
        function _(_, _, _) {
          let _;
          return (
            (_ == "button" || _ == "pill") &&
              _ &&
              (_ = {
                backgroundColor: _,
              }),
            (_ == "button" || _ == "pill") &&
              _ &&
              (_ = {
                ...(_ ?? {}),
                color: _,
              }),
            _
          );
        }
        function _(_, _) {
          const _ = (
            typeof _ == "string"
              ? _
              : Array.isArray(_) && _.length == 1 && typeof _[0] == "string"
                ? _[0]
                : void 0
          )?.trim();
          return !_ || !_ ? !0 : _ != _.trim();
        }
        function _(_) {
          let _ = (0, _._)((0, _._)(_.args) || (0, _._)(_.args, "href"));
          const _ = (0, _._)(_.args, "style"),
            _ = (0, _._)(_.args, "id"),
            _ = (0, _._)(
              (0, _._)(_.args, "buttoncolor") || (0, _._)(_.args, "bgcolor"),
              void 0,
            ),
            _ = (0, _._)(
              (0, _._)(_.args, "labelcolor") || (0, _._)(_.args, "color"),
              void 0,
            ),
            _ = _(_),
            _ = _.context.event,
            _ = (0, _._)(_, _.language, _?.rtime32_last_modified),
            _ = (0, _._)(_(_.children, _) ? "" : (_ ?? ""));
          if (_ && _)
            return _.fnBBComponent(_, {
              event: _.context.event,
            });
          if (_ === void 0 || _ == null) return _.children || "";
          typeof _ == "string" ? (_ = _) : (_ = _[1]);
          const _ = _(_, _, _);
          return typeof _ == "string" && _.length > 0 && _[0] == "#"
            ? (0, _.jsx)(_._, {
                className: _,
                href: _,
                style: _,
                children: _.children,
              })
            : _ == "steam://settings/account"
              ? (0, _.jsx)(_._, {
                  className: _,
                  href: "steam://settings/account",
                  children: _.children,
                })
              : (0, _.jsx)(_._, {
                  className: _,
                  url: _,
                  event: _.context.event,
                  _: _,
                  style: _,
                  children: _.children,
                });
        }
        function _(_) {
          const _ = (0, _._)(_.args, "href"),
            _ = (0, _._)(_);
          return _
            ? _.fnBBComponent(_, {
                event: _.context.event,
              })
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = ((_) => (
            (_.k_TrailerAsButton = "button"),
            (_.k_TrailerAsPill = "pill"),
            (_.k_TrailerAsFull = "full"),
            (_.k_TrailerAsPoster = "poster"),
            (_.k_TrailerAsMicro = "micro"),
            _
          ))(_ || {});
        const _ = /\bappid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function _(_, _) {
          const _ = new Set();
          for (const _ of _.matchAll(/\[trailer\b([^\]]*)\]/gi)) {
            const _ = _.exec(_[1] ?? ""),
              _ = _ ? Number.parseInt(_[1] ?? _[2] ?? _[3] ?? "") : _;
            _ && _.add(_);
          }
          return Array.from(_);
        }
        function _(_) {
          const {
              embedStyle: _,
              appid: _,
              color: _,
              bgcolor: _,
              children: _,
              trailerBaseID: _,
              subtitles: _,
            } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useMemo)(
              () => ({
                appid: _,
              }),
              [_],
            );
          switch (_) {
            case "button":
            case "pill":
              return (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)("button", {
                    type: "button",
                    className: (0, _._)({
                      [_().Pill]: _ == "pill",
                      [_().Button]: _ == "button",
                    }),
                    onClick: () => _(!0),
                    style: {
                      color: _,
                      backgroundColor: _,
                    },
                    children: [
                      (0, _.jsx)(_.jGG, {}),
                      _ || (0, _._)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    _: _,
                    bShowModal: _,
                    trailerBaseID: _,
                    hideModal: () => _(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, _.jsx)(_, {
                ..._,
              });
          }
        }
        function _(_) {
          const { appid: _, trailerBaseID: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            [_, _] = (0, _.useState)(() =>
              !_ || !_ ? (0, _._)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            _ = (0, _._)(_),
            _ = (0, _.useMemo)(
              () => (_ ? _.find((_) => _.trailer_base_id === _) : null),
              [_, _],
            );
          return (
            (0, _.useEffect)(() => {
              _?.unvailable_for_country_restriction &&
                _((0, _._)("#TrailerPlayer_CouldNotLoad", _, _)),
                _ &&
                  !_ &&
                  _(
                    (0, _._)(
                      "#TrailerPlayer_CouldNotLoad",
                      _.appid,
                      _.trailerBaseID,
                    ),
                  );
            }, [
              _,
              _.appid,
              _.trailerBaseID,
              _?.unvailable_for_country_restriction,
              _,
              _,
              _,
            ]),
            _
              ? _.bIsPreviewMode
                ? (0, _.jsx)("div", {
                    className: _().ErrorDiv,
                    children: _,
                  })
                : null
              : _
                ? (0, _.jsx)(_, {
                    trailerToPlay: _,
                  })
                : (0, _.jsx)(_._, {
                    string: (0, _._)("#Loading"),
                    size: "small",
                  })
          );
        }
        function _(_) {
          const { trailerToPlay: _ } = _,
            {
              rgDashTrailers: _,
              rgHlsTrailers: _,
              strCaptionManufest: _,
            } = (0, _.useMemo)(() => {
              const { rgDashTrailers: _, rgHlsTrailers: _ } = (0, _._)(_),
                _ = (0, _._)(_);
              return {
                rgDashTrailers: _,
                rgHlsTrailers: _,
                strCaptionManufest: _,
              };
            }, [_]);
          return _?.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: _().VideoPopupContainers,
                children: (0, _.jsx)(_._, {
                  dashManifests: _ || [],
                  hlsManifest: (_.length > 0 && _?.[0]) || "",
                  screenshot: (0, _._)(_),
                  altText: _.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: _,
                }),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_._),
            _ =
              String((0, _._)(_.args, "autoadvance")).toLowerCase() === "true";
          return (0, _.jsx)(_._, {
            hideArrows: !_,
            hidePips: _,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: _,
            bAutoAdvance: _,
            className: _().ScreenshotCarousel,
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { strURL: _, children: _ } = _;
          return (
            typeof _ == "string"
              ? !(0, _._)(_)
              : _.some((_) => !(0, _._)(_))
          )
            ? (0, _.jsx)(_, {
                children: _,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _,
              });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _._)()
            ? (0, _.jsx)(_.Fragment, {
                children: _,
              })
            : (0, _.jsx)("div", {
                className: _().ImageBlocked,
                children: (0, _._)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                [
                  "url",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "dynamiclink",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "h1",
                  {
                    Constructor: _._(_._, _().Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: _._(_._, _().Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: _._(_._, _().Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  {
                    Constructor: _._(_._, _().BlockQuote),
                    autocloses: !1,
                  },
                ],
                [
                  "list",
                  {
                    Constructor: _._,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: _._,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: _._,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: _._,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "img",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "previewyoutube",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "looping_media",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "video",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "youtubeorvideo",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "trailer",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "speaker",
                  {
                    Constructor: _,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                [
                  "docimg",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "carousel",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
              ])),
            _
          );
        }
        function _(_) {
          const { showErrorInfo: _, event: _ } = _.context;
          let _ = (0, _._)(_.args, "src") || _.children?.toString();
          _ || (_ = (0, _._)(_.args)), (_ = (0, _._)(_ ?? "") || void 0);
          const _ = (0, _._)(_.args, "style") === "inline",
            _ = (0, _._)(_, _.language, _?.rtime32_last_modified);
          if (_ == null) return null;
          if (typeof _ == "string") {
            _ = _;
            let _;
            return (
              (_ = !(0, _._)(_)),
              _?.BHasTag("auto_rssfeed") && (_ = !1),
              _
                ? (0, _.jsx)(_._, {
                    className: (0, _._)({
                      [_().Image_Inline]: _,
                    }),
                    src: _,
                    crossOrigin: _ ? "anonymous" : void 0,
                  })
                : ((_ = (0, _._)(_)),
                  (0, _.jsx)(_, {
                    strURL: _,
                    children: (0, _.jsx)(_._, {
                      className: (0, _._)({
                        [_().Image_Inline]: _,
                      }),
                      src: _,
                      crossOrigin: _ ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, _.jsx)(_, {
              strURL: _,
              children: (0, _.jsx)(_._, {
                rgSources: _,
              }),
            });
        }
        function _(_) {
          const _ = (0, _._)(_.args);
          if (_ == null || _ == null || _.length == 0) return "";
          const _ = _.children?.toString(),
            _ = new Array();
          return (
            _.push(
              `${_._.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${_._.LANGUAGE}/${_}`,
            ),
            _._.LANGUAGE != "english" &&
              _.push(
                `${_._.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${_}`,
              ),
            (0, _.jsx)(_._, {
              rgSources: _,
              alt: _,
            })
          );
        }
        function _(_) {
          const _ = _(_.args, "appid", _.context.event?.appid ?? 0),
            _ = _(_.args, "trailerid", 0);
          let _ =
            (0, _._)(_.args, "style")?.toLocaleLowerCase() ?? _.k_TrailerAsFull;
          _ = Object.values(_).includes(_) ? _ : _.k_TrailerAsFull;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white"),
            _ = (0, _._)(_.args);
          return (0, _.jsx)(_, {
            appid: _,
            trailerBaseID: _,
            bIsPreviewMode: _.context.showErrorInfo,
            embedStyle: _,
            color: _,
            bgcolor: _,
            subtitles: _.rgVideoTracks,
            children: _.children,
          });
        }
        function _(_) {
          const _ = (0, _._)(_.args, "name"),
            _ = (0, _._)(_.args, "title"),
            _ = (0, _._)(_.args, "company"),
            _ = (0, _._)(_.args, "photo");
          return _.context.bShowShortSpeakerInfo
            ? (0, _.jsx)(_._, {
                name: _,
                title: _,
                company: _,
                photo: _,
                bio: _.children,
              })
            : (0, _.jsx)(_._, {
                name: _,
                title: _,
                company: _,
                photo: _,
                bio: _.children,
              });
        }
        function _(_, _, _) {
          const _ = (0, _._)(_, _);
          return _ === void 0 || _ == null ? _ : Number.parseInt(_);
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
          _ = __webpack_require__("chunkid");
        class _ extends _._ {
          m_LinkFilter = _._;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(_, _, _, _) {
            super(_),
              (this.m_parentNode = _),
              (this.m_mapHostToComponent = _),
              (this.m_globalStoreLink = _);
          }
          AppendText(_, _ = !1) {
            let _ = _;
            if (
              (_ || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let _ = this.m_LinkFilter.exec(_);
              for (; _; ) {
                if (_.index > 0) {
                  let _ = _.input.substring(0, _.index);
                  super.AppendText(_, _);
                }
                let _ = _[0],
                  _ = !1;
                if (this.m_mapHostToComponent) {
                  for (let _ = 0; _ < this.m_mapHostToComponent.length; ++_)
                    if (this.m_mapHostToComponent[_].urlRegExp.exec(_)) {
                      (_ = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[_].fnBBComponent(
                            _,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                _ || super.AppendNode((0, _._)(_)),
                  (_ = _.input.substring(_.index + _.length)),
                  (_ = this.m_LinkFilter.exec(_));
              }
            }
            _.length > 0 && super.AppendText(_, _);
          }
        }
        const _ = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class _ extends _._ {
          m_EmoteRegex = new RegExp(_);
          AppendText(_, _ = !1) {
            let _ = _;
            if (_.length >= 3) {
              let _ = this.m_EmoteRegex.exec(_);
              for (; _; ) {
                if (_.index > 0) {
                  let _ = _.input.substring(0, _.index);
                  super.AppendText(_, _);
                }
                let _ = _[1];
                super.AppendNode(
                  _.createElement(
                    _._,
                    {
                      emoticon: _,
                    },
                    [],
                  ),
                ),
                  (_ = _.input.substring(_.index + _.length + 2)),
                  (_ = this.m_EmoteRegex.exec(_));
              }
            }
            _.length > 0 && super.AppendText(_, _);
          }
        }
        class _ extends _._ {
          m_parentNode = void 0;
          constructor(_, _) {
            super(_), (this.m_parentNode = _);
          }
          AppendText(_, _ = !1) {
            let _ = _;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              !_(_) &&
              (_ = (0, _._)(_)),
              super.AppendText(_, _);
          }
        }
        function _(_) {
          const _ = _.trim();
          return _.startsWith(_._) || _.startsWith(_._);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                ...Array.from(_._.entries()),
                ...Array.from((0, _._)().entries()),
              ])),
            _
          );
        }
        const _ = _.createContext(null);
        function _() {
          return _.useContext(_) ?? _();
        }
        function _(_) {
          const _ = _(),
            _ = _.useMemo(
              () =>
                new Map([
                  ...Array.from(_.entries()),
                  ...Array.from(_.dictionary.entries()),
                ]),
              [_, _.dictionary],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _.children,
          });
        }
        function _(_) {
          const {
              text: _,
              languageOverride: _,
              event: _,
              showErrorInfo: _,
              bShowShortSpeakerInfo: _,
            } = _,
            _ = (0, _._)(),
            _ = _.useCallback(
              (_) =>
                new _(
                  new _(
                    new _(new _._(new _._()), _, _, {
                      event: _,
                    }),
                  ),
                  _,
                ),
              [_, _],
            ),
            _ = _();
          return _.useMemo(
            () => new _._(_, _, _ || _._.LANGUAGE),
            [_, _, _],
          ).ParseBBCode(_, {
            showErrorInfo: _,
            event: _,
            bShowShortSpeakerInfo: _,
            bbcode: _,
          });
        }
        function _(_) {
          const {
              strTag: _,
              args: _,
              rawargs: _,
              language: _ = PchLanguageToELanguage(Config.LANGUAGE),
              children: _,
              ..._
            } = _,
            _ = _().get(_);
          return _
            ? jsx(_.Constructor, {
                context: _,
                tagname: _,
                args: _,
                language: _,
                rawargs: _,
                children: _,
              })
            : jsxs(Fragment, {
                children: [`[${_}]`, _, `[/${_}]`],
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          _ =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
          _ = [_, _],
          _ =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
        function _(_, _) {
          const _ = new RegExp(_).exec(_);
          if (!_ || _.length <= 3) return;
          const _ = _[3];
          if (_)
            switch (_[1]) {
              case "gid":
                return {
                  eventGID: _,
                  strClanSteamID64: _[2],
                };
              case "group":
                return {
                  eventGID: _,
                  clanAccountID: Number.parseInt(_[2]),
                };
              case "groups":
                return {
                  eventGID: _,
                  strGroupVanity: _[2],
                };
              default:
                return isNaN(+_[2])
                  ? {
                      eventGID: _,
                      strOGGVanity: _[2],
                    }
                  : {
                      eventGID: _,
                      appid: Number(_[2]),
                    };
            }
        }
        function _(_) {
          for (const _ of _) {
            const _ = _(_, _);
            if (_) return _;
          }
        }
        function _(_) {
          const _ = [],
            _ = new Set(),
            _ = [
              ..._.map((_) => ({
                regExp: _,
                bAnnouncement: !1,
              })),
              {
                regExp: _,
                bAnnouncement: !0,
              },
            ];
          for (const { regExp: _, bAnnouncement: _ } of _)
            for (const _ of _.matchAll(new RegExp(_, "gi"))) {
              const _ = _(_, _[0]);
              _ &&
                !_.has(`${_ ? "A" : "E"}${_.eventGID}`) &&
                (_.add(`${_ ? "A" : "E"}${_.eventGID}`),
                _.push({
                  link: _,
                  bAnnouncement: _,
                }));
            }
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _({ clanSteamID: _, strVanity: _, strGroupVanity: _ }) {
          const _ = _ !== void 0 || _ !== void 0,
            { data: _, isPending: _ } = (0, _._)(
              _ ? (_ ?? _ ?? "") : "",
              _ !== void 0 ? "store" : "group",
            );
          if (!_) return _?.GetAccountID();
          if (!_) return _?.clanAccountID ?? null;
        }
        function _(_) {
          const { appid: _, announcementGID: _, eventGID: _, strURL: _ } = _,
            _ = _(_),
            _ = _ === null,
            _ = _ != null,
            {
              data: _,
              isPending: _,
              isError: _,
            } = (0, _._)(
              _
                ? void 0
                : {
                    clanAccountID: _ ? _ : void 0,
                    appid: _,
                    eventGID: _,
                    announcementGID: _,
                  },
            ),
            _ = (0, _._)(_ || _?.appid || void 0),
            { data: _ } = (0, _._)(_);
          if (_ || _ || _ === null) return (0, _._)(_);
          if (_ || !_) return (0, _.jsx)(_._, {});
          const _ = (0, _.sfN)(_._.LANGUAGE),
            _ = _.GetNameWithFallback(_),
            _ = _.GetSubTitleWithSummaryFallback(_),
            _ = _?.name,
            _ = (0, _._)(_.GetStartTimeAndDateUnixSeconds());
          return (0, _.jsxs)(_._, {
            eventModel: _,
            route: _._.k_eView,
            className: _._.Box,
            "data-modal-content-sizetofit": !0,
            "data-appid": _,
            children: [
              (0, _.jsx)(_, {
                ..._,
                event: _,
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsxs)(_._, {
                    children: [
                      (0, _._)(
                        _.type == _.uYK
                          ? "#EventDisplay_Share_Announcement"
                          : "#EventDisplay_Share_Event",
                        _ ?? "",
                      ),
                      (0, _.jsx)(_._, {
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)("div", {
                      className: _._.Type,
                      children: _,
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    children: _,
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
            event: _,
            fnFilterImageURLsForKnownFailures: _,
            fnImageFailureCallback: _,
          } = _;
          let _ = (0, _.sfN)(_._.LANGUAGE),
            _ = (0, _._)(_, "capsule", _, _._.capsule_main) ?? [];
          return (
            _ && _ && (_ = _(_)),
            (0, _.jsx)(_._, {
              className: _._.Preview,
              rgSources: _ ?? [],
              onIncrementalError: (_, _, _) => _ && _(_),
            })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          _ = ["store.steampowered.com", "store.steamchina.com"],
          _ = ["steampowered.com", "steamcommunity.com"],
          _ = ["steamchina.com"],
          _ = ["steam.dev", "valve.org"];
        function _(_, _) {
          return _.some((_) => _ == _ || _.endsWith(`.${_}`));
        }
        function _(_) {
          const _ = (0, _._)(_).toLocaleLowerCase(),
            _ = (0, _._)(_._.STORE_BASE_URL).toLocaleLowerCase(),
            _ = (0, _._)(_._.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return _ == _ || _ == _
            ? !0
            : _.includes(_)
              ? _(_, _(_, _) ? _ : _)
              : _(_, [..._, ..._, ..._]);
        }
        function _(_) {
          if (_(_)) return _(_);
        }
        function _(_) {
          const _ = new RegExp(_).exec(_);
          if (!_ || _.length <= 2) return;
          const _ = _[1].toLowerCase(),
            _ = Number(_[2]);
          if (!(!(_ > 0) || !(0, _._)(_)))
            return {
              _: _,
              strItemType: _,
              storeItemKey:
                _ == "sub"
                  ? {
                      packageid: _,
                    }
                  : _ == "bundle"
                    ? {
                        bundleid: _,
                      }
                    : {
                        appid: _,
                      },
            };
        }
        function _(_) {
          const _ = [],
            _ = new Set();
          for (const _ of _.matchAll(new RegExp(_, "gi"))) {
            const _ = _(_[0]);
            _ &&
              !_.has(`${_.strItemType}/${_._}`) &&
              (_.add(`${_.strItemType}/${_._}`), _.push(_));
          }
          return _;
        }
        function _(_) {
          return (
            !!_ && (_.GetEventType() == _.ajI || _.GetEventType() == _.HRy)
          );
        }
        function _(_) {
          const _ = _(_),
            _ = _ ? _.clanSteamID.GetAccountID() : void 0,
            { data: _, isLoading: _ } = (0, _._)(_),
            { data: _, isLoading: _ } = (0, _._)(_);
          if (!_) return null;
          if (!(_ || _))
            return !_ || !_ || !(0, _._)(_, _) ? null : (_.appids ?? []);
        }
        function _(_, _) {
          return _ === null
            ? !0
            : _.length > 0 && _.every((_) => _.includes(_));
        }
        function _(_, _) {
          const _ = _(_);
          if (_.appid === void 0) return !0;
          if (!(_.appid > 0)) return !1;
          if (_ !== void 0) return _(_, [_.appid]);
        }
        function _({ link: _, strURL: _, eventModel: _, bAnnouncement: _ }) {
          const _ = _(_, _);
          if (_ === void 0) return null;
          if (!_) return (0, _._)(_, _);
          const _ =
            _.strClanSteamID64 !== void 0
              ? new _._(_.strClanSteamID64)
              : _.clanAccountID !== void 0
                ? _._.InitFromClanID(_.clanAccountID)
                : void 0;
          return (0, _.jsx)(_, {
            appid: _.appid,
            clanSteamID: _,
            strVanity: _.strOGGVanity,
            strGroupVanity: _.strGroupVanity,
            eventGID: _ ? void 0 : _.eventGID,
            announcementGID: _ ? _.eventGID : void 0,
            strURL: _,
          });
        }
        function _(_, _, _, _ = !1) {
          if (_(_)) {
            const _ = _(_, _);
            if (_)
              return (0, _.jsx)(_, {
                link: _,
                strURL: _,
                eventModel: _?.event,
                bAnnouncement: _,
              });
          }
          return (0, _._)(_, _?.event);
        }
        function _(_, _) {
          return _(_, _, _);
        }
        function _(_, _) {
          return _(_, _, _);
        }
        function _(_, _) {
          return _(_, _, _, !0);
        }
        const _ = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
        function _(_) {
          if (!_.test(_)) return;
          const _ = _.split("?");
          if (_.length == 2)
            return new URLSearchParams(_[1]).get("id") ?? void 0;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { sharedFileID: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = _._.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=",
            _ = _ ?? {
              sharedfileid: _,
              title: (0, _._)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: _ + _,
            },
            _ = (0, _._)(_.url) ? _ + _.url : _.url;
          let _ = _.personnaname !== void 0 && _.personnaname.length > 0;
          return (0, _.jsx)(_._, {
            strURL: _,
            strTitle: _.title,
            strPreviewURL: _.previewurl,
            strType: _.type,
            strDescription: _.description,
            author:
              _ &&
              (0, _._)(
                "#EventEditor_Author",
                (0, _.jsx)(_._, {
                  children: _.personnaname,
                }),
              ),
            publishedfileid: _,
            appid: _.appid,
            bSizeToFit: _.bSizeToFit,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
        function _(_) {
          const _ = new Set();
          for (const _ of _.matchAll(new RegExp(_, "gi"))) _[1] && _.add(_[1]);
          return Array.from(_);
        }
        function _(_) {
          return ["sketchfab_oembed", _];
        }
        function _(_) {
          return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(_)}`;
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              const _ = await fetch(_(_));
              if (_.status === 404) return null;
              if (!_._)
                throw new Error(`sketchfab oembed returned ${_.status}`);
              return await _.json();
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function _(_) {
          return (0, _._)(_(_));
        }
        function _(_) {
          const { modelID: _ } = _,
            [_, _] = _.useState(!0),
            { data: _ } = _(_);
          if (_) {
            const _ = () => _(!1),
              _ = (_) => {
                (_.key === "Enter" || _.key === " ") &&
                  (_.preventDefault(), _());
              };
            return (0, _.jsxs)("div", {
              className: _().dynamiclink_box,
              role: "button",
              tabIndex: 0,
              onClick: _,
              onKeyDown: _,
              children: [
                _?.thumbnail_url &&
                  (0, _.jsx)("img", {
                    className: _().dynamiclink_preview,
                    src: _.thumbnail_url,
                    alt: _.title,
                  }),
                (0, _.jsx)("img", {
                  className: _().sketchfab_play_overlay_image,
                  alt: "",
                }),
                (0, _.jsxs)("div", {
                  className: _().dynamiclink_content,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().dynamiclink_name,
                      children: [
                        (0, _.jsx)("span", {
                          className: _().dynamiclink_type,
                          children: (0, _._)("#EventDisplay_Sketchfab"),
                        }),
                        _?.title &&
                          (0, _.jsxs)("div", {
                            children: [_.title, "\xA0"],
                          }),
                      ],
                    }),
                    _?.author_name &&
                      (0, _.jsx)("div", {
                        className: _().dynamiclink_author,
                        children: _.author_name,
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, _.jsx)("div", {
            className: _().sketchfabmodelembedded,
            children: (0, _.jsx)("iframe", {
              className: _().sketchfabmodelembedded,
              title: _?.title ?? _,
              src: `https://sketchfab.com/models/${encodeURIComponent(_)}/embed?autostart=1`,
              frameBorder: 0,
              allowFullScreen: !0,
            }),
          });
        }
        const _ =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        function _(_) {
          const _ = _.exec(_),
            _ = _ ? Number(_[1]) : 0;
          return _ > 0 ? _ : void 0;
        }
        function _(_) {
          return _(_) ? _(_) : void 0;
        }
        function _(_) {
          const _ = new Set();
          for (const _ of _.matchAll(new RegExp(k_LinkRegex, "g"))) {
            const _ = _(_[0]);
            _ && _.add(_);
          }
          return Array.from(_);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { defid: _ } = _,
            _ = (0, _._)(_);
          if (!_ || !_.community_item_data) return null;
          const _ = _.appid,
            _ = _.community_item_data.item_image_large,
            _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`;
          return (0, _.jsx)("div", {
            className: _().Ctn,
            children: (0, _.jsx)(_._, {
              toolTipContent: _.community_item_data.item_description,
              children: (0, _.jsx)("img", {
                src: _,
                alt: _.community_item_data.item_title,
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        const _ = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          _ = /twitter\.com\/(\w+)(\/?)$/i,
          _ = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          _ = /twitch\.tv\/(\w+)(\/?)$/i,
          _ =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
        function _() {
          return _._.EREALM === _._.k_ESteamRealmChina;
        }
        const _ = new Map();
        function _() {
          const _ = _._.EREALM;
          let _ = _.get(_);
          return (
            _ ||
              (_()
                ? (_ = [
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                  ])
                : (_ = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: _._,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                  ]),
              _.set(_, _)),
            _
          );
        }
        function _(_) {
          return _().find((_) => !!_.urlRegExp.exec(_));
        }
        function _(_) {
          return _.useMemo(() => _(_), [_]);
        }
        function _(_, _) {
          if (_()) return null;
          const _ = new RegExp(_).exec(_);
          if (_ && _.length > 1) {
            const _ = _[1];
            if (_?.length > 0) {
              let _ =
                "https://medal.tv/clip/" +
                _ +
                "/?autoplay=0&donate=0" +
                (_ && _.event ? "&steamappid=" + _.event.appid : "");
              return (0, _.jsx)("iframe", {
                className: _().MedalTVWidget,
                src: _,
                title: _,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, _._)(_, _?.event);
        }
        function _(_, _) {
          let _ = new RegExp(_).exec(_);
          if (_ && _.length > 1) {
            let _ = _[1];
            if (_ && _.length > 1)
              return (0, _.jsx)(_, {
                modelID: _,
              });
          }
          return (0, _._)(_, _?.event);
        }
        function _(_, _) {
          const _ = _(_);
          return _ !== void 0
            ? (0, _.jsx)(_, {
                sharedFileID: _,
              })
            : (0, _._)(_, _?.event);
        }
        function _(_, _) {
          const _ = _(_);
          return _
            ? (0, _.jsx)(_, {
                eventModel: _?.event,
                inputID: _._,
                inputType: _.strItemType,
                fallbackUrl: _,
              })
            : (0, _._)(_, _?.event);
        }
        function _(_) {
          const { inputID: _, inputType: _, eventModel: _, fallbackUrl: _ } = _,
            _ = (0, _._)(_, _),
            { data: _ } = (0, _._)(_),
            _ = _(_);
          let _;
          if (_ === null) _ = !0;
          else if (_ && _) {
            const _ = _.appid ? [_.appid] : (_.included_appids ?? []);
            _ = _(_, _);
          }
          return _ === void 0
            ? null
            : _
              ? (0, _.jsx)(_._, {
                  _: _,
                  inputType: _,
                  bApplyUserContentPref: !0,
                })
              : (0, _._)(_, _);
        }
        function _(_, _) {
          const _ = _(_);
          return _
            ? (0, _.jsx)("div", {
                className: (0, _._)(_().LoyaltyRewardCtn),
                children: (0, _.jsx)(_, {
                  defid: _,
                  url: _,
                }),
              })
            : (0, _._)(_, _?.event);
        }
        function _(_, _) {
          return _() ? null : _(_, (0, _.jsx)(_.KKS, {}), "@", _);
        }
        function _(_, _) {
          return _() ? null : _(_, (0, _.jsx)(_.KKS, {}), "#", _);
        }
        function _(_, _) {
          return _() ? null : _(_, (0, _.jsx)(_.qcc, {}), void 0, _);
        }
        function _(_, _) {
          return _(_, (0, _.jsx)(_.Qte, {}), void 0, _);
        }
        function _(_, _, _, _) {
          let _;
          const _ = _.endsWith("/") ? _.length - 1 : _.length,
            _ = _.lastIndexOf("/", _ - 1);
          _ != -1 && _ + 1 < _.length && (_ = _.substring(_ + 1, _)),
            _ && _ && (_ = _ + _);
          const _ = (0, _._)(_, _?.event, _ ?? _);
          return (0, _.jsxs)("div", {
            className: _().SocialLink,
            children: [
              (0, _.jsx)("div", {
                className: _().SocialIcon,
                children: _,
              }),
              _,
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
          _ = __webpack_require__("chunkid");
        const _ = "events/ajaxgetpartnerevent";
        function _(_) {
          const _ = _._.GetELanguageFallback(_);
          return _ != _ ? `${_}_${_}` : `${_}`;
        }
        function _(_) {
          return _ ? (0, _._)(new _._(_.clanSteamID64), _.event) : null;
        }
        async function _(_, _) {
          const _ = new URLSearchParams();
          _.clanAccountID && _.set("clan_accountid", String(_.clanAccountID)),
            _.appid && _.set("appid", String(_.appid)),
            _.eventGID && _.set("event_gid", _.eventGID),
            _.announcementGID && _.set("announcement_gid", _.announcementGID),
            _.set("lang_list", _(_)),
            _.set("last_modified_time", "0"),
            _.set("origin", window.location.origin);
          const _ = _._.STORE_BASE_URL + _ + "?" + _.toString(),
            _ = await fetch(_);
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          const _ = await _.json();
          return _.success !== _._ || !_.event?.clan_steamid
            ? null
            : {
                clanSteamID64: _.event.clan_steamid,
                event: _.event,
              };
        }
        function _(_, _) {
          return [
            "LinkedPartnerEvent",
            _.clanAccountID,
            _.appid,
            _.eventGID,
            _.announcementGID,
            _,
          ];
        }
        function _(_) {
          return (
            !!_ &&
            (!!_.clanAccountID || !!_.appid) &&
            (!!_.eventGID || !!_.announcementGID)
          );
        }
        function _(_, _) {
          const _ = _(_);
          return {
            queryKey: _(_ ?? {}, _),
            queryFn: () => _(_ ?? {}, _),
            select: _,
            enabled: _,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function _(_) {
          const _ = (0, _.sfN)(_._.LANGUAGE);
          return (0, _._)(_(_, _));
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
          _ = ((_) => (
            (_.k_eView = "view"),
            (_.k_eViewWebSiteHub = "websitehub"),
            (_.k_eCommunityView = "communityview"),
            (_.k_eCommunityEdit = "edit"),
            (_.k_eCommunityEditBroadcast = "editBroadcast"),
            (_.k_eCommunityAdminPage = "admin"),
            (_.k_eCommunityPublish = "publish"),
            (_.k_eCommunityMigrate = "migrate"),
            (_.k_eCommunityPreview = "preview"),
            (_.k_eCommunityPreviewSale = "previewsale"),
            (_.k_eCommunityAnnouncementHub = "community_announcehub"),
            (_.k_eStoreView = "storeview"),
            (_.k_eStoreNewsHub = "newshub"),
            (_.k_eStoreOwnerPage = "store"),
            (_.k_eStoreSalePage = "sale"),
            (_.k_eStoreHardwarePreview = "hardwarepreview"),
            (_.k_eStoreUsersNewsHub = "usernewshub"),
            _
          ))(_ || {});
        const _ =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function _(_) {
          return _.match(_)?.[1];
        }
        function _(_, _) {
          if (!_) return !1;
          const _ = !0,
            _ = _(window.location.href),
            _ = _ && _ == "news",
            _ = _.GetEventType() == _.ajI,
            _ = !1,
            _ = _.appid ? "games" : "groups",
            _ =
              _ &&
              _ == _ &&
              ((_.appid && _.appid === _._.APPID) ||
                (!_.appid &&
                  _.clanSteamID.GetAccountID() === _._.CLANACCOUNTID));
          switch (_) {
            case "view":
              return _ || (_ && !_());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return _;
            case "admin":
              return _ ? !1 : _;
            case "websitehub":
              return _ || _;
            case "storeview":
              return _ && !_();
            case "newshub":
            case "store":
            case "usernewshub":
              return _;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (0, _._)(!1, "Unknown route specified for link: " + _), !1;
          }
        }
        function _(_) {
          const _ =
            _._.COMMUNITY_BASE_URL +
            "gid/" +
            _.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            _.AnnouncementGID;
          return {
            strFacebookUrl: _ + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: _ + "?site=twitter",
            strRedditUrl: _ + "?site=reddit",
          };
        }
        function _(_) {
          return _(_, "sale", "absolute");
        }
        function _(_, _) {
          return _(_, _, "sale", "absolute");
        }
        function _(_) {
          return _(_, "storeview", "absolute");
        }
        function _(_, _) {
          return _(_, _, "storeview", "absolute");
        }
        function _(_, _, _) {
          if (_)
            return (
              (_ ? "/games/" + _._.VANITY_ID : "/groups/" + _._.VANITY_ID) + "/"
            );
          const _ = _ ? "ogg/" + _ : "gid/" + _.ConvertTo64BitString();
          return _._.COMMUNITY_BASE_URL + _ + "/";
        }
        function _() {
          return "news";
        }
        function _() {
          return !1;
        }
        function _(_) {
          return _.clanSteamID.GetAccountID() === _._ && !1;
        }
        function _(_, _, _) {
          const { data: _ } = (0, _._)(
            _?.appid
              ? {
                  appid: _.appid,
                }
              : void 0,
          );
          if (_) return _(_, _, _, _);
        }
        function _(_, _, _, _) {
          const _ = _ === "relative",
            _ = !1,
            _ = _ ? "/" : _._.STORE_BASE_URL,
            _ = _(_.appid, _.clanSteamID, _);
          _ === "view"
            ? (_ = _ ? "communityview" : "storeview")
            : _ === "websitehub" &&
              (_ = _ ? "community_announcehub" : "newshub");
          const _ = _.GID ? _.GID : "",
            _ = _.AnnouncementGID ? _.AnnouncementGID : "",
            _ =
              _.BIsOGGEvent() &&
              _.appid &&
              _ &&
              _.BHasSaleUpdateLandingPageVanity(),
            _ = _.GetEventType() == _.ajI;
          switch (_) {
            case "publish":
              return (
                _ +
                (_.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + _
                  : "partnerevents/publish/" + _ + "?tab=publishing")
              );
            case "edit":
              return (
                _ +
                (_.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + _
                  : "partnerevents/edit/" + _)
              );
            case "editBroadcast":
              return (
                _ +
                (_.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + _
                  : "partnerevents/edit/" + _) +
                "?tab=broadcast"
              );
            case "migrate":
              return _ + "partnerevents/migrate_announcement/" + _;
            case "preview":
              return _
                ? _ + "partnerevents/previewsale/" + _
                : _ +
                    (_.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + _
                      : "partnerevents/preview/" + _);
            case "previewsale":
              return _ + "partnerevents/previewsale/" + _;
            case "admin":
              return _
                ? `${_}curator/${_.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : _ + "partnerevents";
            case "community_announcehub":
              return _ + "announcements";
            case "newshub": {
              const _ = _.appid
                ? `app/${_.appid}`
                : `group/${_.clanSteamID.GetAccountID()}`;
              return _ + `${_()}/${_}`;
            }
            case "store":
              return (
                _ +
                (_.appid
                  ? "app/" + _.appid
                  : "curator/" + _.clanSteamID.GetAccountID())
              );
            case "sale":
              return _.jsondata.bSaleEnabled
                ? _
                  ? `${(0, _._)(_)}/${_.GetSaleUpdateLandingPageVanity()}`
                  : _
                    ? `${_}curator/${_.clanSteamID.GetAccountID()}`
                    : _ +
                      (0, _._)(
                        _.clanSteamID.GetAccountID(),
                        _.GetSaleVanity(),
                        !!_.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : _;
            case "hardwarepreview":
              return _(_) ? `${_}hardware_v2/${_}?beta=1` : _;
            case "communityview":
              return _ + "announcements/detail/" + _;
            case "storeview": {
              if (_.clanSteamID.GetAccountID() == (0, _._)())
                return `${_._.STORE_BASE_URL}meetsteam/${_}`;
              if (_)
                return `${(0, _._)(_)}/${_.GetSaleUpdateLandingPageVanity()}`;
              if (_) return `${_}curator/${_.clanSteamID.GetAccountID()}`;
              {
                const _ = _.appid
                    ? `app/${_.appid}`
                    : `group/${_.clanSteamID.GetAccountID()}`,
                  _ = _() ? "view_v2" : "view",
                  _ = _.bOldAnnouncement ? `old_view/${_}` : `${_}/${_}`;
                return `${_}${_()}/${_}/${_}`;
              }
            }
            case "usernewshub":
              return `${_}${_()}/`;
            default:
              return (0, _._)(!1, "Unknown route specified for link"), "";
          }
        }
        function _(_, _, _) {
          const _ = _ === "forceAbsolute" || !_(_, _);
          return _(_, _, _ ? "absolute" : "relative");
        }
        function _(_, _, _, _) {
          const _ = _ === "forceAbsolute" || !_(_, _);
          return _(_, _, _, _ ? "absolute" : "relative");
        }
        function _(_) {
          const { eventModel: _, route: _, bPopup: _ = !0 } = _,
            _ = _(_, _),
            _ = _(_, _, _ ? "relative" : "absolute");
          return (
            _.useEffect(() => {
              _ && (_ ? window.open(_) : window.location.assign(_));
            }, [_, _]),
            _ && _
              ? (0, _.jsx)(_._, {
                  push: !0,
                  _: _,
                })
              : null
          );
        }
        function _(_, _, _) {
          const _ = _(_, _, !1);
          return _ === "admin" ? _ + "partnerevents" : "";
        }
        function _(_) {
          const { eventModel: _, preferredFocus: _ } = _,
            { bCanUseLink: _ } = _.useContext(_._),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _ && _(_.route, _),
            _ = _(_, _.route, _ ? "relative" : "absolute"),
            _ = !_ && _ ? (0, _._)(_) : _,
            _ = _ || !_ ? _ : (0, _._)(_, _),
            _ = _(_, "websitehub", "absolute"),
            _ =
              _.route != "websitehub"
                ? _._.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            _ = _.useCallback(() => {
              _ && window.location.assign(_);
            }, [_]);
          return _
            ? _
              ? (0, _.jsx)(_._, {
                  style: _.style,
                  className: _.className,
                  href: _.createHref({
                    pathname: _,
                  }),
                  onClick: (_) => {
                    _ && (_.onClick?.(_), _.push(_), _.preventDefault());
                  },
                  onOptionsActionDescription: _,
                  onOptionsButton: _ ? _ : void 0,
                  preferredFocus: _,
                  children: _.children,
                })
              : (0, _.jsx)(_._, {
                  href: _,
                  style: _.style,
                  className: _.className,
                  onClick: _.onClick,
                  preferredFocus: _,
                  onOptionsActionDescription: _,
                  onOptionsButton: _ ? _ : void 0,
                  children: _.children,
                })
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { inputType: _, _: _, bApplyUserContentPref: _ } = _,
            _ = _ == "bundle" ? "bundle" : _ == "sub" ? "sub" : "game",
            _ = (0, _._)(_, _),
            { data: _ } = (0, _._)(_),
            { data: _, isPending: _ } = (0, _._)(_ ? _ : void 0);
          if (!_) return null;
          if (_) {
            if (_) return null;
            if (_?.filter_failure == _._._ || _?.filter_failure == _._._) {
              let _ = "#StoreCapsule_App_Excluded";
              switch (_) {
                case "sub":
                  _ = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  _ = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, _.jsx)("div", {
                className: (0, _._)(
                  _().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, _._)(
                  _,
                  (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, _.jsx)("div", {
            className: (0, _._)(_().AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, _.jsx)(_._, {
              _: _,
              type: _,
              bShowDemoButton: _.type == _._._,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _, _, _, _, _, _)).data ?? void 0;
        }
        function _(_, _, _, _, _) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            _?.GID,
            _,
            _,
            _,
            _,
          ];
        }
        function _(_, _, _, _, _, _, _) {
          return {
            queryKey: _(_, _, _, _, _),
            enabled: _ && !!_.GID,
            queryFn: async () => {
              if (!_) return null;
              let _ = new Array();
              if (!_.BImageNeedScreenshotFallback(_, _)) {
                const _ = await _.ensureQueryData((0, _._)(_, _, _, _, _, _));
                if ((_ && _.push(_), _ != _._.full)) {
                  const _ = await _.ensureQueryData(
                    (0, _._)(_, _, _, _, _, _._.full),
                  );
                  _ && _.push(_);
                }
              }
              if (!_)
                try {
                  const _ = await _.ensureQueryData((0, _._)(_, _, _));
                  _ && _.push(_);
                } catch (_) {
                  if (
                    ((0, _._)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${_?.GID} from clan ${_?.clanSteamID.GetAccountID()}`,
                    ),
                    _.length == 0)
                  )
                    throw _;
                }
              return _;
            },
          };
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = () => (_._.EUNIVERSE === _._ ? 2581 : 45267781);
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
        async function _(_, _) {
          const { rgDefIDs: _, strCategory: _, itemClass: _ } = _,
            _ = await _._.QueryRewardItems(_, {
              definitionids: _,
              community_item_classes: _ ? [_] : void 0,
              filter_match_any_category_tags: _ ? [_] : void 0,
            });
          if (!_.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + _.GetEResult(),
            );
          return _.Body().toObject().definitions ?? [];
        }
        let _;
        function _() {
          const _ = (0, _._)();
          return _
            ? _.GetAnonymousServiceTransport()
            : (_ || (_ = new _._(_._.WEBAPI_BASE_URL)),
              _.GetServiceTransport());
        }
        async function _(_) {
          return _(_(), _);
        }
        const _ = 3600 * 1e3;
        function _(_) {
          return ["LoyaltyRewardDef", _];
        }
        function _(_, _) {
          return ["LoyaltyRewardDefsByCategoryAndClass", _, _];
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              const _ = await _({
                  rgDefIDs: [_],
                }),
                _ = _.length == 1 ? _[0] : void 0;
              if (!_)
                throw new Error(
                  `Asked for point shop item ${_} and got ${_.length} items back, wanted exactly one.`,
                );
              return _;
            },
            enabled: _ > 0,
            staleTime: _,
            retry: !1,
          };
        }
        function _(_, _) {
          return {
            queryKey: _(_, _),
            queryFn: () =>
              _({
                strCategory: _,
                itemClass: _,
              }),
            enabled: !!(_ && _),
            staleTime: _,
            retry: !1,
          };
        }
        function _(_) {
          const { data: _ } = (0, _._)(_(_));
          return _;
        }
        function _(_, _) {
          const _ = (0, _._)(),
            { data: _ } = (0, _._)(_(_, _));
          return (
            (0, _.useEffect)(() => {
              _?.forEach((_) => {
                _.defid !== void 0 && _.setQueryData(_(_.defid), _);
              });
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
        var _ = __webpack_require__("chunkid");
        const _ = 1778623200;
        function _(_, _) {
          let _ = !1;
          return (
            _ && _.GetEventType() == _.ajI
              ? (_ = !0)
              : _ && _ && _.is_creator_home && (_ = _(_, _)),
            _
          );
        }
        function _(_, _) {
          return !!_ && !!_.is_creator_home && (_.createTime ?? 0) > _;
        }
        function _(_) {
          const _ = useClanInfoByAccountID(_.clanSteamID.GetAccountID());
          return _(_, _.data);
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
        function _(_) {
          return Object.prototype.toString.call(_) === "[object Object]";
        }
        function _(_) {
          if (!_(_)) return !1;
          const _ = _.constructor;
          if (typeof _ > "u") return !0;
          const _ = _.prototype;
          return !(
            !_(_) || !Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
          );
        }
        function _(..._) {
          return JSON.stringify(_, (_, _) => {
            if (_(_)) {
              const _ = {};
              return (
                Object.keys(_)
                  .sort()
                  .forEach((_) => {
                    _[_] = _[_];
                  }),
                _
              );
            }
            return _;
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)({
          instances: {},
          factories: {},
        });
        function _(_) {
          const { name: _, fnFactory: _, children: _ } = _,
            _ = React.useContext(_),
            [_] = useState({}),
            _ = useMemo(
              () => ({
                instances: _,
                factories: {
                  ..._.factories,
                  [_]: _,
                },
                parent: _,
              }),
              [_, _, _],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_, _) {
          const _ = (0, _.useContext)(_),
            _ = typeof _ == "string" ? _ : _(..._);
          let _ = _;
          for (; _; ) {
            if (_ in _.instances) return _.instances[_];
            if (_ in _.factories) break;
            _ = _.parent;
          }
          const _ = (_?.factories[_] ?? _)();
          return ((_ ?? _).instances[_] = _), _;
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
          return (
            (_.gid == null || _.gid == null || _.gid == "0") &&
            !!_.announcement_body &&
            _.announcement_body.gid != "0"
          );
        }
        function _(_) {
          return _(_) ? _._ + _.announcement_body?.gid : _.gid;
        }
        function _(_, _) {
          let _ = new _._();
          if (
            ((_.clanSteamID = _),
            (0, _._)(
              _.clanSteamID && _.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                _.clanSteamID.ConvertTo64BitString() +
                " " +
                _._.EUNIVERSE,
            ),
            (_.GID = _(_)),
            (_.bOldAnnouncement = _(_)),
            (_.appid = _.appid ?? 0),
            (_.createTime = _.rtime_created),
            (_.startTime = _.rtime32_start_time),
            (_.endTime = _.rtime32_end_time),
            (_.visibilityStartTime = _.rtime32_visibility_start),
            (_.visibilityEndTime = _.rtime32_visibility_end),
            (_.loadedAllLanguages = !1),
            (_.type = _.event_type ?? _.DRF),
            (_.nVotesUp = _.votes_up ?? 0),
            (_.nVotesDown = _.votes_down ?? 0),
            (_.comment_type = _.comment_type),
            (_.gidfeature = _.gidfeature),
            (_.gidfeature2 = _.gidfeature2),
            (_.featured_app_tagid = _.featured_app_tagid),
            (_.vecTags = new Array()),
            (_.creator_steamid = _.creator_steamid),
            (_.last_update_steamid = _.last_update_steamid),
            (_.rtime32_last_modified = _.rtime32_last_modified),
            (_.rtime32_moderator_reviewed = _.rtime_mod_reviewed),
            (_.video_preview_type = _.video_preview_type),
            (_.video_preview_id = _.video_preview_id),
            (_.has_live_stream = _.has_live_stream),
            (_.live_stream_viewer_count = _.live_stream_viewer_count),
            (_.m_nBuildID = _.build_id),
            (_.m_strBuildBranch = _.build_branch),
            _.announcement_body)
          ) {
            let _ = _.announcement_body;
            (_.AnnouncementGID = _.gid),
              _.name.set(_.language, _.headline),
              _.description.set(_.language, _.body),
              _.timestamp_loc_updated.clear(),
              (_.forumTopicGID = _.forum_topic_id),
              (_.nCommentCount = _.commentcount),
              (_.postTime = _.posttime),
              _.bOldAnnouncement && !_.hidden && (_.startTime = _.posttime),
              (_.announcementClanSteamID = new _._(_.clanid)),
              _.tags &&
                _.tags.length > 0 &&
                _.tags.forEach((_) => _.vecTags.push(_)),
              !_.rtime32_last_solr_search_col_updated &&
                _.rtime32_last_modified &&
                ((_.rtime32_last_solr_search_col_updated =
                  _.rtime32_last_modified),
                (_.rtime32_last_modified = _.updatetime));
          } else
            (_.AnnouncementGID = "0"),
              (_.forumTopicGID = _.forum_topic_id),
              _.name.clear(),
              _.description.clear(),
              _.timestamp_loc_updated.clear(),
              (_.postTime = _.rtime32_start_time),
              (_.nCommentCount = _.comment_count ?? 0),
              _.name.set(_.Bhc, _.event_name ?? ""),
              _.description.set(_.Bhc, _.event_notes ?? "");
          _.broadcaster_accountid &&
            (_.broadcaster = new _._(_.broadcaster_accountid));
          const _ = _._;
          try {
            _.jsondata = {
              ..._,
              ...(_.jsondata ? JSON.parse(_.jsondata) : void 0),
            };
          } catch (_) {
            const _ = (0, _._)(_);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  _.strErrorMsg,
                _,
              ),
              _)
            );
          }
          if (
            ((_.jsondata.localized_capsule_image = (0, _._)(
              _.jsondata.localized_capsule_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_title_image = (0, _._)(
              _.jsondata.localized_title_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_subtitle = (0, _._)(
              _.jsondata.localized_subtitle || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_summary = (0, _._)(
              _.jsondata.localized_summary || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_title = (0, _._)(
              _.jsondata.localized_broadcast_title || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_left_image = (0, _._)(
              _.jsondata.localized_broadcast_left_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_broadcast_right_image = (0, _._)(
              _.jsondata.localized_broadcast_right_image || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_header = (0, _._)(
              _.jsondata.localized_sale_header || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_overlay = (0, _._)(
              _.jsondata.localized_sale_overlay || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_product_banner = (0, _._)(
              _.jsondata.localized_sale_product_banner || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_product_mobile_banner = (0, _._)(
              _.jsondata.localized_sale_product_mobile_banner || [],
              _.bP9,
              null,
            )),
            (_.jsondata.localized_sale_logo = (0, _._)(
              _.jsondata.localized_sale_logo || [],
              _.bP9,
              null,
            )),
            _.jsondata.sale_num_headers !== void 0 &&
              _.jsondata.localized_per_day_sales_header)
          )
            for (let _ = 0; _ < _.jsondata.sale_num_headers; ++_)
              _.jsondata.localized_per_day_sales_header[_] = (0, _._)(
                _.jsondata.localized_per_day_sales_header[_],
                _.bP9,
                null,
              );
          return (
            _.jsondata.sale_sections &&
              _.jsondata.sale_sections.forEach((_, _) => {
                _.localized_label &&
                  (_.localized_label = (0, _._)(
                    _.localized_label,
                    _.bP9,
                    null,
                  )),
                  _.section_type === "trailercarousel" &&
                    (_.show_as_carousel = !1),
                  (_.jsondata.sale_sections[_] = {
                    ..._._,
                    ..._,
                  });
              }),
            _.jsondata.email_setting &&
              _.jsondata.email_setting.sections &&
              _.jsondata.email_setting.sections.forEach((_) => {
                _.localized_headline !== void 0 &&
                  _.localized_headline !== null &&
                  (_.localized_headline = (0, _._)(
                    _.localized_headline,
                    _.bP9,
                    null,
                  )),
                  _.localized_body !== void 0 &&
                    _.localized_body !== null &&
                    (_.localized_body = (0, _._)(
                      _.localized_body,
                      _.bP9,
                      null,
                    )),
                  _.localized_image !== void 0 &&
                    _.localized_image !== null &&
                    (_.localized_image = (0, _._)(
                      _.localized_image,
                      _.bP9,
                      null,
                    ));
              }),
            _.jsondata.localized_title_image.forEach((_, _) => {
              if (_ != null && _.substr(0, 4) == "http") {
                let _ = _.lastIndexOf("/"),
                  _ = _.substr(_ + 1);
                _.jsondata.localized_title_image[_] = _;
              }
            }),
            (_.bLoaded = !0),
            _.published
              ? _.unlisted
                ? (_.visibility_state = _._.k_EEventStateUnlisted)
                : _.hidden
                  ? (_.visibility_state = _._.k_EEventStateStaged)
                  : (_.visibility_state = _._.k_EEventStateVisible)
              : (_.visibility_state = _._.k_EEventStateUnpublished),
            _
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
          _ = __webpack_require__("chunkid");
        const _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          _ =
            __webpack_require__._ +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var _ = __webpack_require__("chunkid"),
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
        function _(_) {
          switch (_) {
            case "X-Small":
            case "Small":
              return _;
            case "Medium":
            case "MediumLarge":
              return _;
            case "Large":
            case "X-Large":
            case "FillArea":
              return _;
            default:
              return (0, _._)(_, `Unhandled size ${_}`), _;
          }
        }
        const _ = _.memo(function (_) {
          const {
              strAvatarURL: _,
              size: _ = "Medium",
              className: _,
              statusStyle: _,
              statusPosition: _,
              children: _,
              ..._
            } = _,
            _ = _.useMemo(() => {
              const _ = [];
              return _ && _.push(_), _.push(_(_)), _;
            }, [_, _]);
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().avatarHolder,
              "avatarHolder",
              "no-drag",
              _,
              _,
            ),
            ..._,
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().avatarStatus, "avatarStatus", _),
                style: _,
              }),
              (0, _.jsx)(_._, {
                className: (0, _._)(_().avatar, "avatar"),
                rgSources: _,
                draggable: !1,
              }),
              _,
            ],
          });
        });
        let _ = class extends _.Component {
          render() {
            const {
              persona: _,
              size: _ = "Medium",
              animatedAvatar: _,
              className: _,
              strBackupAvatarURL: _,
              ..._
            } = this.props;
            let _ = "";
            return (
              _ && _.image_small && _.image_small.length != 0
                ? (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _.image_small)
                : _
                  ? ((_ = _.avatar_url_medium),
                    _ == "Small" || _ == "X-Small"
                      ? (_ = _.avatar_url)
                      : (_ == "Large" || _ == "X-Large" || _ == "FillArea") &&
                        (_ = _.avatar_url_full))
                  : _ && (_ = _),
              (0, _.jsx)(_, {
                strAvatarURL: _,
                size: _,
                className: (0, _._)((0, _._)(_), _),
                ..._,
              })
            );
          }
        };
        _ = _([_._], _);
        const _ = (0, _._)((_) => {
          const {
            profileItem: _,
            className: _,
            bDisableAnimation: _,
            ..._
          } = _;
          if (!_ || !_.image_small || _.image_small.length == 0) return null;
          let _ = _ ? _.image_large : _.image_small;
          return (
            _ || (_ = _.image_small),
            _.startsWith("https://") ||
              (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _),
            (0, _.jsx)("div", {
              className: (0, _._)(_().avatarFrame, _, "avatarFrame"),
              ..._,
              children: (0, _.jsx)("img", {
                className: _().avatarFrameImg,
                src: _,
              }),
            })
          );
        });
        let _ = class extends _.Component {
          m_timer;
          constructor(_) {
            super(_),
              (this.state = {
                bAnimate: this.props.loopDuration != "None",
              }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let _ = 0;
            switch (this.props.loopDuration) {
              case "Short":
                _ = 2500;
                break;
              case "Medium":
                _ = 5e3;
                break;
              case "Long":
                _ = 1e4;
                break;
            }
            _ != 0 &&
              (this.setState({
                bAnimate: this.props.loopDuration != "None",
              }),
              (this.m_timer = window.setTimeout(
                () =>
                  this.setState({
                    bAnimate: !1,
                  }),
                _,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(_) {
            this.props.loopDuration != _.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({
                    bAnimate: !1,
                  }),
                  this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({
                      bAnimate: !0,
                    }),
                    this.StopAnimationTimer())
                  : (this.setState({
                      bAnimate: !0,
                    }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != _.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({
                      bAnimate: !0,
                    }),
                    this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: _,
              animatedAvatar: _,
              avatarFrame: _,
              children: _,
              style: _,
              bLimitProfileFrameAnimationTime: _,
              bParentHovered: _,
              ..._
            } = this.props;
            _.onClick &&
              (_ = {
                ..._,
                cursor: "pointer",
              });
            const _ = this.state.bAnimate ? (_ ?? void 0) : void 0;
            return (0, _.jsx)("div", {
              onMouseEnter: () =>
                this.setState({
                  bAnimate: this.props.loopDuration != "None",
                }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, _.jsxs)(_, {
                animatedAvatar: _,
                ..._,
                children: [
                  _,
                  (0, _.jsx)(_, {
                    profileItem: _ ?? null,
                    bDisableAnimation: _ && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        _ = _([_._], _);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              accountID: _,
              bHideWhenNotAvailable: _,
              bHideName: _,
              bLink: _ = !0,
            } = _,
            [_] = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`,
            _ = _ ? "a" : "span";
          return (0, _.jsx)(_.Fragment, {
            children: _
              ? (0, _.jsxs)(_, {
                  href: _ ? _ : void 0,
                  children: [
                    (0, _.jsx)("img", {
                      className: _.SmallAvatar,
                      src: _.avatar_url,
                      "data-miniprofile": "s" + _.ConvertTo64BitString(),
                    }),
                    !_ &&
                      (0, _.jsx)("span", {
                        children: _
                          ? `${_} (${_.persona_name})`
                          : _.persona_name,
                      }),
                  ],
                })
              : (0, _.jsx)(_.Fragment, {
                  children:
                    !_ &&
                    (0, _.jsx)("span", {
                      children: _,
                    }),
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
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            YearInReviewRoutes: () => _,
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext(void 0);
        function _() {
          const _ = _.useContext(_);
          return (
            (0, _._)(
              _,
              "Cannot use YIR page data outside of Steam Replay page!",
            ),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11;
        function _(_) {
          return "unknown ESeason ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserActionEventType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EYearInReviewPrivacyState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EYearInReviewAccessSource ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_playtime_seconds || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_playtime_seconds: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_sessions: {
                      _: 20,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_sessions: {
                      _: 21,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_sessions: {
                      _: 22,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_sessions: {
                      _: 23,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_sessions: {
                      _: 24,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    macos_sessions: {
                      _: 25,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_sessions: {
                      _: 26,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      _: 27,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_playtime_percentagex100: {
                      _: 28,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_playtime_percentagex100: {
                      _: 29,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_playtime_percentagex100: {
                      _: 30,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_playtime_percentagex100: {
                      _: 31,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    macos_playtime_percentagex100: {
                      _: 32,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_playtime_percentagex100: {
                      _: 33,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.longest_consecutive_days || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    longest_consecutive_days: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_start: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    streak_games: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.overall_rank || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    overall_rank: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_rank: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_rank: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_rank: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_rank: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    mac_rank: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_rank: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    stats: {
                      _: 2,
                      _: _,
                    },
                    playtime_streak: {
                      _: 3,
                      _: _,
                    },
                    playtime_ranks: {
                      _: 4,
                      _: _,
                    },
                    rtime_first_played: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_game_stats: {
                      _: 6,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    new_this_year: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    rtime_first_played_lifetime: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    demo: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    playtest: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_during_early_access: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_vr: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_deck: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_controller: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_linux: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_mac: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_windows: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    total_playtime_percentagex100: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_sessions: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_release_date: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    parent_appid: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rank: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.category || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    category: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rankings: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.overall_ranking || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    overall_ranking: {
                      _: 1,
                      _: _,
                    },
                    vr_ranking: {
                      _: 2,
                      _: _,
                    },
                    deck_ranking: {
                      _: 3,
                      _: _,
                    },
                    controller_ranking: {
                      _: 4,
                      _: _,
                    },
                    linux_ranking: {
                      _: 5,
                      _: _,
                    },
                    mac_ranking: {
                      _: 6,
                      _: _,
                    },
                    windows_ranking: {
                      _: 7,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_games_with_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_rare_achievements: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stats: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.tag_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    tag_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    tag_weight: {
                      _: 2,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    tag_weight_pre_selection: {
                      _: 3,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.screenshots_shared || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    screenshots_shared: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gifts_sent: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    loyalty_reactions: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    written_reviews: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guides_submitted: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_contributions: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    badges_earned: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    friends_added: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    forum_posts: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_subscriptions: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guide_subscribers: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_subscribers: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played_pct: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements_pct: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_streak_pct: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played_avg: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements_avg: {
                      _: 17,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_streak_avg: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_stats: {
                      _: 1,
                      _: _,
                    },
                    games: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    playtime_streak: {
                      _: 3,
                      _: _,
                    },
                    months: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    game_summary: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    demos_played: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_rankings: {
                      _: 8,
                      _: _,
                    },
                    playtests_played: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    summary_stats: {
                      _: 10,
                      _: _,
                    },
                    substantial: {
                      _: 11,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    tag_stats: {
                      _: 12,
                      _: _,
                    },
                    by_numbers: {
                      _: 13,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_month || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rtime_month: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    stats: {
                      _: 2,
                      _: _,
                    },
                    appid: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    relative_monthly_stats: {
                      _: 5,
                      _: _,
                    },
                    game_summary: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.account_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    account_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    playtime_stats: {
                      _: 3,
                      _: _,
                    },
                    privacy_state: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.from_dbo || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    from_dbo: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    overall_time_ms: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dbo_load_ms: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    query_execution_ms: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    message_population_ms: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dbo_lock_load_ms: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.statid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    statid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    fieldid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievement_name_internal: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rtime_unlocked: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    all_time_unlocked_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unlocked_more_in_future: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.median_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    median_achievements: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    median_games: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    median_streak: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.new_releases || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    new_releases: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recent_releases: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    classic_releases: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recent_cutoff_year: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.games_played || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    games_played: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unlocked_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    longest_streak: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    force_regenerate: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    access_source: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fetch_previous_year_summary: {
                      _: 5,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stats: {
                      _: 1,
                      _: _,
                    },
                    performance_stats: {
                      _: 2,
                      _: _,
                    },
                    percentiles: {
                      _: 3,
                      _: _,
                    },
                    distribution: {
                      _: 4,
                      _: _,
                    },
                    previous_year_summary: {
                      _: 5,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    privacy_state: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.privacy_state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    privacy_state: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.privacy_state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    privacy_state: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    generated_value: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    rt_privacy_updated: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    total_only: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_achievements: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    total_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_rare_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_games_with_achievements: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.apps || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    apps: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.image_url || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    image_url: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    preview_url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    image_width: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    image_height: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    maybe_inappropriate_sex: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    maybe_inappropriate_violence: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    visibility: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    spoiler_tag: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    screenshots: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.jsondata || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    jsondata: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gids: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
                    },
                    type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    jsondata: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_account_index: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    last_account_index: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    jsondata: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    return_private: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    privacy_state: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    rt_privacy_updated: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    privacy_override: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.friend_shares || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    friend_shares: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.images || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    images: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url_path: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.year || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    year: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    month: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    top_played_appid: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    longest_streak_days: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rt_streak_start: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    screenshots: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearInReview = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetUserSharingPermissions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetUserSharingPermissions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearAchievements = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearScreenshots = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetUserActionData = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetMultipleUserActionData = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 4,
              },
            );
          }
          _.GetAllUserActionDataForType = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetFriendsSharedYearInReview = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearInReviewShareImage = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetYIRCurrentMonthlySummary = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = {
            [_.Gkz]: [_.Gkz, _.Vg1, _.Sv2, _.e94, _.H2m, _.Loc],
            [_.GBh]: [_.GBh, _.dpF, _.NHG, _.CSO, _.$c4, _.pqi, _.rxn],
            [_.xXG]: [_.xXG, _.JtN, _.eQ$, _.ewi],
            [_.Jzd]: [_.Jzd],
            [_.IEJ]: [_.IEJ, _.LGs],
            [_.REG]: [_.REG],
            [_.X$z]: [_.X$z, _.NUE],
            [_.Vg1]: [_.Gkz, _.Vg1, _.Sv2, _.MnB],
            [_.nuP]: [_.nuP, _.BGM, _.R$d, _.bPv, _.Upk, _.yTG, _.mYY],
            [_.dpF]: [_.GBh, _.dpF, _.NHG, _.RRP, _.mRX],
            [_.z3Q]: [_.z3Q, _.KCN, _.J1r, _.gEw, _.Gxx],
            [_.equ]: [_.equ, _.NUE],
            [_.Sv2]: [_.Gkz, _.Vg1, _.Sv2, _.W1J],
            [_.dWZ]: [_.dWZ, _.jzL, _.a1e],
            [_.MnB]: [_.Vg1, _.MnB],
            [_.ubQ]: [_.ubQ, _.G1H, _.ZUO],
            [_.gGw]: [_.gGw, _.ZBT, _.RW$],
            [_.JtN]: [_.xXG, _.JtN, _.UfY, _.c2w],
            [_.ZBT]: [_.gGw, _.ZBT, _.RW$],
            [_.Xkc]: [_.Xkc],
            [_.Gb2]: [_.Gb2, _.aBe, _.U2r, _.qU0],
            [_.CT2]: [_.CT2],
            [_._]: [_._],
            [_.eQ$]: [_.xXG, _.eQ$, _.SCk, _.nNq],
            [_.JCU]: [_.JCU, _.guj],
            [_.NHG]: [_.GBh, _.dpF, _.NHG],
            [_.G1H]: [_.ubQ, _.G1H],
            [_._]: [_._, _.bvg],
            [_.ewi]: [_.xXG, _.ewi, _.dxW],
            [_.gm5]: [_.gm5],
            [_.uZq]: [_.uZq],
            [_.NGF]: [_.NGF, _.cNr],
            [_.bHv]: [_.bHv],
            [_.Vov]: [_.Vov, _.IbE, _.qn3],
            [_.QBr]: [_.QBr, _.GEy],
            [_.nZ3]: [_.nZ3],
            [_.RnC]: [_.RnC],
            [_.CSO]: [_.GBh, _.CSO],
            [_.zwR]: [_.zwR],
            [_.CI1]: [_.CI1],
            [_.ZoV]: [_.ZoV, _.lIy],
            [_.MNG]: [_.MNG, _.J2h],
            [_.bvg]: [_._, _.bvg],
            [_.$c4]: [_.GBh, _.$c4],
            [_.Izv]: [_.Izv, _.NUE],
            [_.guj]: [_.JCU, _.guj],
            [_.UEV]: [_.UEV],
            [_.t_B]: [_.t_B, _.V1D],
            [_.vPq]: [_.vPq],
            [_.qAH]: [_.qAH, _.Fyw],
            [_.LqT]: [_.LqT, _.cNr],
            [_.RW$]: [_.gGw, _.ZBT, _.RW$],
            [_.ZUO]: [_.ubQ, _.ZUO],
            [_.ceg]: [_.ceg, _.dxW],
            [_.KCN]: [_.z3Q, _.KCN],
            [_.Fyw]: [_.qAH, _.Fyw],
            [_.VmN]: [_.VmN],
            [_.lIy]: [_.ZoV, _.lIy],
            [_.pqi]: [_.GBh, _.pqi],
            [_.qhO]: [_.qhO],
            [_.aUb]: [_.aUb],
            [_.tvO]: [_.tvO],
            [_.ouZ]: [_.ouZ],
            [_.IbE]: [_.Vov, _.IbE, _.q6r, _.nIA],
            [_.uzb]: [_.uzb],
            [_.mG_]: [_.mG_],
            [_.Ey4]: [_.Ey4],
            [_.e94]: [_.Gkz, _.e94],
            [_.Ya6]: [_.Ya6],
            [_.KZU]: [_.KZU],
            [_.UfY]: [_.JtN, _.UfY],
            [_.aBe]: [_.Gb2, _.aBe],
            [_.LGs]: [_.IEJ, _.LGs],
            [_.Hc3]: [_.Hc3],
            [_.aNN]: [_.aNN, _.DHU, _.AJK, _.w7d],
            [_.H2m]: [_.Gkz, _.H2m],
            [_.c2w]: [_.JtN, _.c2w],
            [_.l$V]: [_.l$V],
            [_.dBS]: [_.dBS],
            [_.IxF]: [_.IxF],
            [_.SnN]: [_.SnN],
            [_.aAJ]: [_.aAJ],
            [_.mvf]: [_.mvf],
            [_.wIS]: [_.wIS],
            [_.zjR]: [_.zjR],
            [_.BWK]: [_.BWK],
            [_.Yui]: [_.Yui],
            [_.nL9]: [_.nL9, _.nPW, _.l7W, _.$$Y],
            [_.jzL]: [_.dWZ, _.jzL, _.a1e],
            [_.ljy]: [_.ljy],
            [_.yUQ]: [_.yUQ],
            [_.BGM]: [_.nuP, _.BGM, _.IZu],
            [_.bIG]: [_.bIG, _.W5T],
            [_.GEy]: [_.QBr, _.GEy],
            [_.kOp]: [_.kOp],
            [_.hwI]: [_.hwI],
            [_.RRP]: [_.dpF, _.RRP, _.Oxw],
            [_.W5T]: [_.bIG, _.W5T],
            [_.VmC]: [_.VmC],
            [_.kpV]: [_.kpV],
            [_.gFr]: [_.gFr],
            [_.R$d]: [_.nuP, _.R$d],
            [_.Mth]: [_.Mth],
            [_.J1r]: [_.z3Q, _.J1r],
            [_.Qnc]: [_.Qnc],
            [_.Oxw]: [_.RRP, _.Oxw, _.UMQ, _.jXd, _.W19],
            [_.fVF]: [_.fVF, _.$YD],
            [_.qmd]: [_.qmd],
            [_.PoK]: [_.PoK],
            [_.bPv]: [_.nuP, _.bPv],
            [_.V1D]: [_.t_B, _.V1D],
            [_.HuG]: [_.HuG],
            [_.ng1]: [_.ng1],
            [_.Buq]: [_.Buq],
            [_.x7u]: [_.x7u],
            [_.Ftl]: [_.Ftl],
            [_.dbP]: [_.dbP],
            [_.DHU]: [_.aNN, _.DHU],
            [_.Qw3]: [_.Qw3],
            [_.J2h]: [_.MNG, _.J2h],
            [_.FzB]: [_.FzB],
            [_.Mhp]: [_.Mhp],
            [_.SCk]: [_.eQ$, _.SCk],
            [_.xrV]: [_.xrV],
            [_.ZEP]: [_.ZEP],
            [_.O5E]: [_.O5E],
            [_.Cc7]: [_.Cc7],
            [_.J51]: [_.J51],
            [_.cTj]: [_.cTj],
            [_.mwe]: [_.mwe],
            [_.Upk]: [_.nuP, _.Upk],
            [_.CIE]: [_.CIE],
            [_.qn3]: [_.Vov, _.qn3],
            [_.LIU]: [_.LIU],
            [_.Bh3]: [_.Bh3],
            [_.r6c]: [_.r6c],
            [_.a1e]: [_.dWZ, _.jzL, _.a1e],
            [_.ws2]: [_.ws2],
            [_.pbj]: [_.pbj],
            [_.H9D]: [_.H9D, _.QMk],
            [_.yfg]: [_.yfg],
            [_.EuK]: [_.EuK],
            [_.w43]: [_.w43],
            [_.zah]: [_.zah, _.b7S, _.M$A, _.lXI, _.gKc],
            [_.NUE]: [_.X$z, _.equ, _.Izv, _.NUE],
            [_.Loc]: [_.Gkz, _.Loc],
            [_.orb]: [_.orb],
            [_.di6]: [_.di6],
            [_.Ehy]: [_.Ehy],
            [_.ACh]: [_.ACh],
            [_.SN2]: [_.SN2],
            [_.aWw]: [_.aWw],
            [_.YzP]: [_.YzP],
            [_.yd9]: [_.yd9],
            [_.MAO]: [_.MAO],
            [_.nNq]: [_.eQ$, _.nNq],
            [_.Wo$]: [_.Wo$],
            [_.qU1]: [_.qU1],
            [_.hSB]: [_.hSB],
            [_.DnZ]: [_.DnZ],
            [_.qgQ]: [_.qgQ],
            [_.DcL]: [_.DcL],
            [_.SJn]: [_.SJn],
            [_.PGe]: [_.PGe],
            [_.dh_]: [_.dh_],
            [_.aK9]: [_.aK9],
            [_.GtN]: [_.GtN],
            [_.rAU]: [_.rAU],
            [_.Ywc]: [_.Ywc],
            [_.URU]: [_.URU],
            [_.Ag6]: [_.Ag6],
            [_.PYD]: [_.PYD],
            [_.dZk]: [_.dZk],
            [_.LCt]: [_.LCt],
            [_.umB]: [_.umB],
            [_.iZW]: [_.iZW],
            [_.W$A]: [_.W$A],
            [_.dI5]: [_.dI5],
            [_.IYH]: [_.IYH],
            [_.UMQ]: [_.Oxw, _.UMQ],
            [_.Eyy]: [_.Eyy],
            [_.QMk]: [_.H9D, _.QMk],
            [_.fzK]: [_.fzK, _.Pjm],
            [_.se7]: [_.se7],
            [_.tE1]: [_.tE1],
            [_.U2r]: [_.Gb2, _.U2r],
            [_.aSG]: [_.aSG],
            [_.XDm]: [_.XDm],
            [_.rkt]: [_.rkt],
            [_.l0w]: [_.l0w],
            [_.$44]: [_.$44],
            [_.ZKR]: [_.ZKR],
            [_.Yr4]: [_.Yr4],
            [_.ngb]: [_.ngb],
            [_.q6r]: [_.IbE, _.q6r],
            [_.yTG]: [_.nuP, _.yTG],
            [_.HhK]: [_.HhK],
            [_.sYW]: [_.sYW],
            [_.ML$]: [_.ML$],
            [_.JJq]: [_.JJq],
            [_.xEY]: [_.xEY],
            [_.W1J]: [_.Sv2, _.W1J],
            [_._Sw]: [_._Sw],
            [_.OJd]: [_.OJd],
            [_.L9$]: [_.L9$],
            [_.gEw]: [_.z3Q, _.gEw],
            [_.col]: [_.col],
            [_.vNw]: [_.vNw],
            [_.QxX]: [_.QxX],
            [_.Yzj]: [_.Yzj],
            [_.Cuj]: [_.Cuj],
            [_.kMe]: [_.kMe],
            [_.N1C]: [_.N1C],
            [_.lw$]: [_.lw$],
            [_.nJM]: [_.nJM],
            [_.DfI]: [_.DfI],
            [_.oNT]: [_.oNT],
            [_.Bul]: [_.Bul],
            [_.nPW]: [_.nL9, _.nPW, _.l7W],
            [_.rgd]: [_.rgd],
            [_.r7M]: [_.r7M],
            [_.pvr]: [_.pvr],
            [_.CMh]: [_.CMh],
            [_.uCt]: [_.uCt],
            [_.cXA]: [_.cXA],
            [_.MW7]: [_.MW7],
            [_.mKd]: [_.mKd],
            [_.jx3]: [_.jx3],
            [_.QM3]: [_.QM3],
            [_.mYY]: [_.nuP, _.mYY],
            [_.IVO]: [_.IVO],
            [_.ycC]: [_.ycC],
            [_.DLU]: [_.DLU],
            [_.QSw]: [_.QSw],
            [_.ybs]: [_.ybs],
            [_.Gxx]: [_.z3Q, _.Gxx],
            [_.$YD]: [_.fVF, _.$YD],
            [_.XqG]: [_.XqG],
            [_.KoH]: [_.KoH],
            [_.mRX]: [_.dpF, _.mRX],
            [_.Xgy]: [_.Xgy],
            [_.ZI3]: [_.ZI3],
            [_.AHx]: [_.AHx],
            [_.Lun]: [_.Lun],
            [_.cS7]: [_.cS7],
            [_.XsI]: [_.XsI],
            [_.i5w]: [_.i5w],
            [_.U1I]: [_.U1I],
            [_.Wq7]: [_.Wq7],
            [_.btm]: [_.btm],
            [_.VW1]: [_.VW1],
            [_.rpf]: [_.rpf],
            [_.l7W]: [_.nL9, _.nPW, _.l7W],
            [_.WE2]: [_.WE2],
            [_.cNr]: [_.NGF, _.LqT, _.cNr],
            [_.hWb]: [_.hWb],
            [_.TTb]: [_.TTb],
            [_.f_e]: [_.f_e],
            [_.IVU]: [_.IVU],
            [_.YpH]: [_.YpH],
            [_.Xe4]: [_.Xe4],
            [_.UTf]: [_.UTf],
            [_.ZXz]: [_.ZXz],
            [_.mX6]: [_.mX6],
            [_.AnB]: [_.AnB],
            [_.Jtk]: [_.Jtk],
            [_.bT7]: [_.bT7],
            [_.sFD]: [_.sFD],
            [_.pUQ]: [_.pUQ],
            [_.GGT]: [_.GGT],
            [_.W5v]: [_.W5v],
            [_.t0u]: [_.t0u],
            [_.b7S]: [_.zah, _.b7S],
            [_.X_3]: [_.X_3],
            [_.gEn]: [_.gEn],
            [_._wZ]: [_._wZ],
            [_.w_P]: [_.w_P],
            [_.tS6]: [_.tS6],
            [_.M$A]: [_.zah, _.M$A, _.lXI],
            [_.oXQ]: [_.oXQ],
            [_.Wec]: [_.Wec],
            [_.vT2]: [_.vT2],
            [_.vXU]: [_.vXU],
            [_.wdW]: [_.wdW],
            [_.eXt]: [_.eXt],
            [_.jh5]: [_.jh5],
            [_.Hp8]: [_.Hp8],
            [_.dxW]: [_.ewi, _.ceg, _.dxW],
            [_.Pjm]: [_.fzK, _.Pjm],
            [_.hYj]: [_.hYj],
            [_.k52]: [_.k52],
            [_._]: [_._],
            [_.fxF]: [_.fxF],
            [_.vk_]: [_.vk_],
            [_.Eid]: [_.Eid],
            [_.rTg]: [_.rTg],
            [_.SXO]: [_.SXO],
            [_.hTI]: [_.hTI],
            [_.YxI]: [_.YxI],
            [_.iZ9]: [_.iZ9],
            [_.GW_]: [_.GW_],
            [_.uaC]: [_.uaC],
            [_.ijE]: [_.ijE],
            [_._]: [_._],
            [_.rSh]: [_.rSh],
            [_.PJd]: [_.PJd],
            [_.jXd]: [_.Oxw, _.jXd, _.W19],
            [_.lPO]: [_.lPO],
            [_.jsz]: [_.jsz],
            [_.JJT]: [_.JJT],
            [_.qDq]: [_.qDq],
            [_.lXI]: [_.zah, _.M$A, _.lXI],
            [_.CNW]: [_.CNW],
            [_.MCn]: [_.MCn],
            [_.qyq]: [_.qyq],
            [_.I8s]: [_.I8s],
            [_.tCQ]: [_.tCQ],
            [_.P3p]: [_.P3p],
            [_.L3J]: [_.L3J],
            [_.a5M]: [_.a5M],
            [_.y$q]: [_.y$q],
            [_.kci]: [_.kci],
            [_.rNe]: [_.rNe],
            [_.rxn]: [_.GBh, _.rxn],
            [_.gR3]: [_.gR3],
            [_.Y4B]: [_.Y4B],
            [_.LHe]: [_.LHe],
            [_.dm2]: [_.dm2],
            [_.aRw]: [_.aRw],
            [_.qU0]: [_.Gb2, _.qU0],
            [_.IZu]: [_.BGM, _.IZu],
            [_.pcg]: [_.pcg],
            [_.i2H]: [_.i2H],
            [_.Oyv]: [_.Oyv],
            [_.jdh]: [_.jdh],
            [_.TZq]: [_.TZq],
            [_.O10]: [_.O10],
            [_.FGn]: [_.FGn],
            [_.rgP]: [_.rgP],
            [_.GW8]: [_.GW8],
            [_.iY_]: [_.iY_],
            [_.KxZ]: [_.KxZ],
            [_.eut]: [_.eut],
            [_.FMz]: [_.FMz],
            [_.xok]: [_.xok],
            [_.W19]: [_.Oxw, _.jXd, _.W19],
            [_.tPT]: [_.tPT],
            [_.nIA]: [_.IbE, _.nIA],
            [_.JEe]: [_.JEe],
            [_.V9H]: [_.V9H],
            [_.w7d]: [_.aNN, _.w7d],
            [_.TXs]: [_.TXs],
            [_.Bpv]: [_.Bpv],
            [_.VLK]: [_.VLK],
            [_.puh]: [_.puh],
            [_.Fbc]: [_.Fbc],
            [_.I0E]: [_.I0E],
            [_.QA9]: [_.QA9, _.Ya$],
            [_.gKc]: [_.zah, _.gKc],
            [_.IzC]: [_.IzC],
            [_.Ya$]: [_.QA9, _.Ya$],
            [_.gOe]: [_.gOe],
            [_.Reo]: [_.Reo],
            [_.AJK]: [_.aNN, _.AJK],
            [_.$$Y]: [_.nL9, _.$$Y],
            [_.o0L]: [_.o0L],
          },
          _ = [_.gGw, _.ZBT, _.RW$, _.G1H];
        function _(_, _) {
          const _ = _.filter((_) => _.findIndex((_) => _ == _.nTagId) == -1);
          let _ = [],
            _ = [],
            _ = _.length,
            _ = 0,
            _ = 0;
          for (; _ < _.length && _ + _ > _ && _ < _; ) {
            const _ = _[_].nTagId;
            _.findIndex((_) => _ == _) == -1 &&
              (_.push({
                nTagId: _,
                nWeight: _[_].nWeight,
                nPreSelectionWeight: _[_].nPreSelectionWeight,
              }),
              _[_] &&
                _[_].forEach((_) => {
                  _.push(_);
                }),
              _++),
              _++,
              _--;
          }
          for (; _ < _.length && _ < _; )
            _.push({
              nTagId: _[_].nTagId,
              nWeight: _[_].nWeight,
              nPreSelectionWeight: _[_].nPreSelectionWeight,
            }),
              _++,
              _++;
          return _;
        }
        var _ = __webpack_require__("chunkid");
        function _() {
          return _._.country_code.toLowerCase() === "cn";
        }
        function _(_, _, _) {
          const { rgRankings: _, nTotalResultCount: _ } = _(_, _),
            _ = new Set(_.map((_) => _.appid).slice(0, _));
          return {
            rgResults: _.GetRawStats()
              .playtime_stats.games.filter((_) => _.has(_.appid))
              .sort((_, _) => {
                const _ = `${_}_rank`,
                  _ = _.playtime_ranks[_] ?? 0,
                  _ = _.playtime_ranks[_] ?? 0;
                return _ - _;
              }),
            nTotalResultCount: _,
          };
        }
        function _(_, _, _, _) {
          const { rgRankings: _, nTotalResultCount: _ } = _(_, _, _),
            _ = _.map((_) => {
              if (_.relative_playtime_percentagex100) {
                let _ = 0;
                return (
                  _ == "demo" || _ == "playtest"
                    ? (_ =
                        _ > 0
                          ? (_.relative_playtime_percentagex100 * 100 * 100) / _
                          : 0)
                    : (_ = _.relative_playtime_percentagex100),
                  {
                    appid: _.appid,
                    parent_appid: _.parent_appid,
                    nPercentagex100: _,
                  }
                );
              }
              const _ = _.GetRawStats().playtime_stats.games.findIndex(
                (_) => _.appid == _.appid,
              );
              if (_ >= 0) {
                const _ = _(_, _, _.GetRawStats().playtime_stats.games[_]);
                return {
                  appid: _.appid,
                  parent_appid: _.parent_appid,
                  nPercentagex100: _,
                };
              }
              return {
                appid: _.appid,
              };
            });
          return {
            nTotalResultCount: _,
            rgResults: _,
          };
        }
        function _(_, _, _) {
          if (_ == "demo" || _ == "playtest") {
            const _ =
              _ == "demo" ? _.GetDemoByPlaytime() : _.GetPlaytestByPlaytime();
            return {
              nTotalResultCount: _.length,
              rgRankings: _.slice(0, _).map((_) => ({
                appid: _.appid,
                parent_appid: _.parent_appid,
                relative_playtime_percentagex100:
                  _.total_playtime_percentagex100,
              })),
            };
          }
          const _ = `${_}_ranking`,
            _ = _.GetRawStats().playtime_stats.game_rankings[_]?.rankings;
          return {
            nTotalResultCount: _?.length ?? 0,
            rgRankings: _?.slice(0, _) || [],
          };
        }
        function _(_, _, _) {
          const _ = _.stats.total_playtime_percentagex100,
            _ = `${_}_playtime_percentagex100`,
            _ = _.relative_game_stats[_] ?? 0;
          return (0, _._)((_ * _) / _, 0, 1e4);
        }
        function _(_, _) {
          const _ = `${_ === "overall" ? "total" : _}_sessions`;
          return _.stats[_] || 0;
        }
        function _(_, _) {
          let _ = () => !0;
          if (!_.playtime_stats?.game_summary) return [];
          switch (_) {
            case "overall":
              _ = (_) => !_.demo && !_.playtest;
              break;
            case "vr":
              _ = (_) => !_.demo && !_.playtest && _.played_vr;
              break;
            case "deck":
              _ = (_) => !_.demo && !_.playtest && _.played_deck;
              break;
            case "controller":
              _ = (_) => !_.demo && !_.playtest && _.played_controller;
              break;
            case "linux":
              _ = (_) => !_.demo && !_.playtest && _.played_linux;
              break;
            case "mac":
              _ = (_) => !_.demo && !_.playtest && _.played_mac;
              break;
            case "windows":
              _ = (_) => !_.demo && !_.playtest && _.played_windows;
              break;
            case "demo":
              _ = (_) => !!_.demo;
              break;
            case "playtest":
              _ = (_) => !!_.playtest;
              break;
          }
          return _.playtime_stats.game_summary.filter(_);
        }
        function _(_, _) {
          if (_ != "demo" && _ != "playtest") {
            const _ = `${_ === "overall" ? "total" : _}_sessions`,
              _ = `${_ === "overall" ? "total" : _}_playtime_percentagex100`;
            return {
              nTotalGames: _(_, _).length || 0,
              nTotalSessions: _.playtime_stats.total_stats[_] || 0,
              nTotalPercentage: _.playtime_stats.total_stats[_] || 0,
            };
          } else {
            const _ = _(_, _);
            return {
              nTotalGames: _.length,
              nTotalSessions: _.map((_) => _.total_sessions).reduce(
                (_, _) => (_ ?? 0) + (_ ?? 0),
                0,
              ),
              nTotalPercentage: _.map(
                (_) => _.total_playtime_percentagex100,
              ).reduce((_, _) => (_ ?? 0) + (_ ?? 0), 0),
            };
          }
        }
        const _ = "percentMonthOfOverall",
          _ = "percentOtherGamesRelativeMonth";
        function _(_, _, _, _) {
          const _ = new Set(_),
            _ = _.map((_, _) => {
              const _ = new Date((_.rtime_month + 86400) * 1e3),
                _ = {},
                _ = {},
                _ = {},
                _ = {},
                _ = _.stats.total_playtime_percentagex100;
              let _ = 0,
                _ = 0;
              [..._.game_summary]
                .sort(
                  (_, _) =>
                    (_?.total_playtime_percentagex100 ?? 0) -
                    (_?.total_playtime_percentagex100 ?? 0),
                )
                .filter((_) => _.has(_.appid))
                .forEach((_, _) => {
                  const { appid: _ } = _,
                    _ = _.total_playtime_percentagex100,
                    _ = _.relative_playtime_percentagex100;
                  _ < 6 && typeof _ == "number" && _ > 100 && _.has(_)
                    ? ((_[_] = _), (_[_] = _), (_ += _), (_ += _))
                    : (_[_] = _);
                  const _ = _.get(_).total_playtime_percentagex100 ?? 1;
                  _[_] = (_ / _) * 1e4;
                }),
                (_[_] = _);
              const _ = _ - _;
              _[_] = _;
              const _ = 1e4 - _;
              return (
                (_[_] = _),
                {
                  date: _,
                  topPlayedPercentBreakdownPerMonth: _,
                  topPlayedRelativePercentBreakdownForMonth: _,
                  otherPlayedPercentBreakdownForMonth: _,
                  playPercentBreakdownForGame: _,
                }
              );
            }).sort((_, _) => _.date.getTime() - _.date.getTime()),
            _ = new Array();
          for (let _ = 0; _ < 12; ++_) {
            const _ = _.findIndex(
              (_) =>
                _.date.getUTCMonth() === _ && _.date.getUTCFullYear() === _,
            );
            _ === -1
              ? _.push({
                  date: new Date(Date.UTC(_, _, 15)),
                  topPlayedPercentBreakdownPerMonth: {},
                  topPlayedRelativePercentBreakdownForMonth: {},
                  otherPlayedPercentBreakdownForMonth: {},
                  playPercentBreakdownForGame: {},
                })
              : _.push(_[_]);
          }
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 5,
          _ = 8;
        function _(_) {
          _.game_summary?.length &&
            (0, _._)(
              _.total_stats &&
                Array.isArray(_.games) &&
                Array.isArray(_.months) &&
                typeof _.demos_played == "number" &&
                _.game_rankings &&
                typeof _.playtests_played == "number" &&
                (typeof _.substantial == "boolean" ||
                  typeof _.substantial == "number") &&
                _.by_numbers,
              "YIR playtime stats missing expected fields!",
            );
        }
        function _(_) {
          return (
            (0, _._)(
              typeof _.account_id == "number" &&
                typeof _.year == "number" &&
                typeof _.privacy_state == "number" &&
                _.playtime_stats,
              "YIR stats missing expected fields!",
            ),
            _.playtime_stats && _(_.playtime_stats),
            _
          );
        }
        function _(_) {
          if (typeof _?.new_releases == "number")
            return (
              (0, _._)(
                typeof _.recent_releases == "number" &&
                  typeof _.classic_releases == "number" &&
                  typeof _.recent_cutoff_year == "number",
                "YIR global playtime distribution missing expected fields!",
              ),
              _
            );
        }
        function _(_) {
          if (typeof _?.games_played == "number")
            return (
              (0, _._)(
                typeof _.unlocked_achievements == "number" &&
                  typeof _.longest_streak == "number",
                "YIR previous year summary missing expected fields!",
              ),
              _
            );
        }
        class _ {
          m_allStats;
          m_steamid;
          m_mapGameSummary = new Map();
          m_mapGameStats = new Map();
          m_globalPercentiles;
          m_globalGameplayDistribution;
          m_previousYearSummary;
          m_rgTopGamesShown = [];
          m_rgTopGameShownAppIDs = [];
          m_rgMonthChartData = [];
          m_rgTopGameMonthsChartIdsAndRanks = [];
          m_rgAggregateTagData = [];
          m_rgDemoByPlaytime = [];
          m_rgPlaytestByPlaytime = [];
          GetRawStats() {
            return this.m_allStats;
          }
          GetDemoByPlaytime() {
            return this.m_rgDemoByPlaytime;
          }
          BHasDemoByPlaytime() {
            return this.m_rgDemoByPlaytime.length > 0;
          }
          GetPlaytestByPlaytime() {
            return this.m_rgPlaytestByPlaytime;
          }
          BHasPlaytestByPlaytime() {
            return this.m_rgPlaytestByPlaytime.length > 0;
          }
          BHasPlaytimeData() {
            return this.m_allStats.playtime_stats.game_summary.length > 0;
          }
          GetPlayTimeStats() {
            return this.m_allStats.playtime_stats;
          }
          GetSteamID() {
            return this.m_steamid;
          }
          GetYear() {
            return this.m_allStats.year;
          }
          GetGameSummaryForApp(_) {
            return this.m_mapGameSummary.get(_);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetFilteredGameSummary() {
            return this.m_allStats.playtime_stats.game_summary.filter(
              (_) => !_.demo && !_.playtest,
            );
          }
          GetGameStats(_) {
            return this.m_mapGameStats.get(_);
          }
          GetTopGamesShown() {
            return this.m_rgTopGamesShown;
          }
          GetTopGamesShownAppIDs() {
            return this.m_rgTopGameShownAppIDs;
          }
          GetChartMonthlyData() {
            return this.m_rgMonthChartData;
          }
          GetTopGameIdsAndRanks() {
            return this.m_rgTopGameMonthsChartIdsAndRanks;
          }
          GetGlobalPercentiles() {
            return this.m_globalPercentiles;
          }
          GetGlobalGameplayDistribition() {
            return this.m_globalGameplayDistribution;
          }
          GetPreviousYearSummary() {
            return this.m_previousYearSummary;
          }
          GetChartMonthlyDataForApp(_) {
            const _ = this.m_rgMonthChartData.map((_) => ({
                date: _.date,
                percent: _.playPercentBreakdownForGame[_],
              })),
              _ = this.m_rgTopGameMonthsChartIdsAndRanks.find(
                (_) => _.appid === _,
              )?.rank;
            return {
              gameChartData: _,
              rank: _,
            };
          }
          GetUserAggregateTagData() {
            return this.m_rgAggregateTagData;
          }
          constructor(_, _, _, _) {
            const _ = _(_);
            if (
              ((this.m_allStats = _),
              (this.m_steamid = _._.InitFromAccountID(_.account_id)),
              (this.m_globalPercentiles = _ ?? void 0),
              (this.m_globalGameplayDistribution = _(_)),
              (this.m_previousYearSummary = _(_)),
              this.BHasPlaytimeData() &&
                _.playtime_stats.total_stats.total_sessions > 0)
            ) {
              _.playtime_stats.game_summary.forEach((_) => {
                (0, _._)(
                  !this.m_mapGameSummary.has(_.appid),
                  `Found at least two record of appid ${_.appid} in stats.playtime_stats.game_summary`,
                ),
                  this.m_mapGameSummary.set(_.appid, _);
              }),
                _.playtime_stats.games.forEach((_) => {
                  (0, _._)(
                    !this.m_mapGameStats.has(_.appid),
                    `Found at least two record of appid ${_.appid} in stats.playtime_stats.games`,
                  ),
                    this.m_mapGameStats.set(_.appid, _);
                });
              const { rgResults: _ } = _(this, "overall", _),
                _ = _.map((_) => _.appid);
              (this.m_rgTopGameMonthsChartIdsAndRanks = _.map((_, _) => ({
                appid: _,
                rank: _,
              }))),
                (this.m_rgTopGamesShown = _.slice(0, _)),
                (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
                  (_) => _.appid,
                )),
                (this.m_rgMonthChartData = _(
                  this.GetYear(),
                  this.GetPlayTimeStats().months,
                  _,
                  this.m_mapGameSummary,
                ));
            }
            if (
              _.playtime_stats.tag_stats &&
              _.playtime_stats.tag_stats.stats.length > 0
            ) {
              let _ = _.playtime_stats.tag_stats.stats.map((_) => ({
                nTagId: _.tag_id,
                nWeight: parseFloat(_.tag_weight.toString()),
                nPreSelectionWeight: parseFloat(
                  _.tag_weight_pre_selection
                    ? _.tag_weight_pre_selection.toString()
                    : "0.0",
                ),
              }));
              this.m_rgAggregateTagData = _(_, 6);
            }
            _ &&
              ((this.m_rgDemoByPlaytime = _.playtime_stats.game_summary
                .filter((_) => !!_.demo)
                .sort(
                  (_, _) =>
                    _.total_playtime_percentagex100 -
                    _.total_playtime_percentagex100,
                )),
              (this.m_rgPlaytestByPlaytime = _.playtime_stats.game_summary
                .filter((_) => !!_.playtest)
                .sort(
                  (_, _) =>
                    _.total_playtime_percentagex100 -
                    _.total_playtime_percentagex100,
                )));
          }
          GetGameAgeCounts(_) {
            let _ = this.m_allStats.playtime_stats?.game_summary || [];
            if (_.length == 0) return [_.length];
            let _ = Date.UTC(this.GetYear(), 11, 15) / 1e3,
              _ = Array(_.length + 1).fill(0);
            for (let _ of _) {
              let _ = _.rtime_release_date || _;
              if (_ >= _) {
                _[0] += _.total_playtime_percentagex100;
                continue;
              }
              let _ = (_ - _) / _._.PerYear,
                _ = _.findIndex((_) => _ < _);
              _ >= 0
                ? (_[_] += _.total_playtime_percentagex100)
                : (_[_.length - 1] += _.total_playtime_percentagex100);
            }
            return _;
          }
        }
        const _ = null,
          _ = "0px 0px 100% 0px";
        function _(_, _) {
          const {
            stats: _,
            percentiles: _,
            distribution: _,
            previous_year_summary: _,
          } = _;
          return {
            eResult: _,
            privacy_state: _?.privacy_state,
            stats: _,
            percentiles: _,
            distribution: _,
            previous_year_summary: _,
          };
        }
        function _(_, _) {
          return ["YIR", "Get", _, _];
        }
        function _(_, _, _) {
          return {
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = await _.GetUserYearInReview(_, {
                steamid: _,
                year: _,
                fetch_previous_year_summary: !0,
              });
              return _(_.GetEResult(), _.Body().toObject());
            },
            staleTime: 1 / 0,
          };
        }
        function _(_, _) {
          return (0, _._)(_((0, _._)(), _, _));
        }
        function _(_, _) {
          const { data: _, isLoading: _ } = _(_, _),
            {
              eResult: _,
              stats: _,
              percentiles: _,
              distribution: _,
              previous_year_summary: _,
            } = _ ?? {};
          return {
            userYearInReview: _.useMemo(() => {
              if (!(_ != _._ || !_)) return new _(_, _, _, _);
            }, [_, _, _, _, _]),
            isLoading: _,
          };
        }
        function _(_, _) {
          return _(_, _).data?.privacy_state;
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = await _.SetUserSharingPermissions(_, {
                steamid: _,
                year: _,
                privacy_state: _,
              });
              return {
                eResult: _.GetEResult(),
                privacy_state: _.Body().privacy_state(),
              };
            },
            onSuccess: ({ eResult: _, privacy_state: _ }) => {
              _ == _._ &&
                _ !== void 0 &&
                _.setQueryData(
                  _(_, _),
                  (_) =>
                    _ && {
                      ..._,
                      privacy_state: _,
                    },
                );
            },
          });
        }
        function _(_, _, _) {
          return {
            steamid: _,
            nYear: _,
            achievements: new (_())((_) => _(_, _, _, _), {
              cache: !1,
            }),
            screenshots: new (_())((_) => _(_, _, _, _), {
              cache: !1,
            }),
          };
        }
        const _ = _.createContext(void 0);
        function _() {
          const _ = _.useContext(_);
          return (
            (0, _._)(
              _,
              "Cannot use YIR data loaders outside of Steam Replay page!",
            ),
            _
          );
        }
        async function _(_, _, _, _) {
          try {
            const _ = await _.GetUserYearAchievements(_, {
              steamid: _,
              year: _,
              appids: [..._],
              total_only: !1,
            });
            if (_.GetEResult() == _._) {
              const { game_achievements: _ = [] } = _.Body().toObject(),
                _ = _.reduce((_, _) => ((_[_.appid] = _), _), {});
              return _.map((_) => {
                const _ = _[_];
                return {
                  ..._,
                  appid: _,
                  achievements: (_?.achievements ?? []).map((_) => ({
                    ..._,
                    achievement_name_internal: (
                      _.achievement_name_internal ?? ""
                    ).toLowerCase(),
                  })),
                };
              });
            }
            console.error("GetUserYearAchievements failed: " + _.GetEResult());
          } catch (_) {
            console.error("GetUserYearAchievements failed", _);
          }
          return _.map((_) => ({
            appid: _,
            achievements: [],
          }));
        }
        function _(_, _) {
          return {
            queryKey: ["YIR", "achievements", "apps", _.steamid, _.nYear, _],
            queryFn: () => _.achievements.load(_),
            staleTime: 1 / 0,
          };
        }
        function _(_) {
          const _ = _();
          (0, _._)({
            queries: _.GetTopGamesShownAppIDs().map((_) => _(_, _)),
          });
        }
        function _(_) {
          const { data: _ } = (0, _._)({
            ..._(_(), _),
            enabled: !!_,
          });
          return _;
        }
        function _(_, _, _) {
          return {
            queryKey: ["YIR", "achievements", "display", _, _],
            queryFn: async () => {
              try {
                const _ = await _.xtC.GetGameAchievements(_, {
                  appid: _,
                  language: _,
                });
                if (_.GetEResult() == _._)
                  return (_.Body().toObject().achievements ?? []).map((_) => ({
                    ..._,
                    internal_name: (_.internal_name ?? "").toLowerCase(),
                  }));
                console.error("GetGameAchievements failed: " + _.GetEResult());
              } catch (_) {
                console.error("GetGameAchievements failed", _);
              }
              return [];
            },
            staleTime: 1 / 0,
          };
        }
        function _(_, _ = !0) {
          const _ = (0, _._)(),
            { data: _ } = (0, _._)({
              ..._(_, _, _._.LANGUAGE || "english"),
              enabled: _ && !!_,
            });
          return _;
        }
        function _(_) {
          const _ = _(_);
          return _.useMemo(() => {
            const _ = new Map();
            for (const _ of _ ?? [])
              _.internal_name && _.set(_.internal_name, _);
            return _;
          }, [_]);
        }
        function _(_) {
          return _(_)?.length ?? 0;
        }
        async function _(_, _, _, _) {
          const _ = await _.GetUserYearScreenshots(_, {
            steamid: _,
            year: _,
            appids: [..._],
          });
          if (!_.BSuccess())
            throw `Load Screenshots failed: ${_.GetErrorMessage()}`;
          const { apps: _ = [] } = _.Body().toObject(),
            _ = _.reduce((_, _) => ((_[_.appid] = _), _), {});
          return _.map((_) => _[_]?.screenshots);
        }
        function _(_, _) {
          return {
            queryKey: ["YIR", "Screenshots", _.steamid, _.nYear, _],
            queryFn: async () => (await _.screenshots.load(_)) ?? null,
            staleTime: 1 / 0,
          };
        }
        function _(_) {
          const { data: _ } = (0, _._)({
            ..._(_(), _),
            enabled: !!_,
          });
          return _ ?? void 0;
        }
        function _(_, _, _, _) {
          return {
            queryKey: ["YIR", "Friends", _, _, _],
            queryFn: async () => {
              const _ = await _.GetFriendsSharedYearInReview(_, {
                steamid: _,
                year: _,
                return_private: _,
              });
              if (_.GetEResult() != _._)
                throw "error friend sharing information " + _.GetEResult();
              const { friend_shares: _ = [] } = _.Body().toObject();
              return _.filter((_) => !!_.steamid).map(
                ({
                  steamid: _,
                  privacy_state: _,
                  rt_privacy_updated: _,
                  privacy_override: _,
                }) => ({
                  steamid: _,
                  privacy_state: _ ?? 0,
                  rt_privacy_updated: _ ?? 0,
                  privacy_override: !!_,
                }),
              );
            },
            staleTime: 1 / 0,
          };
        }
        function _(_, _) {
          return (0, _._)(_((0, _._)(), _, _, _._.is_support));
        }
        function _(_, _, _, _) {
          return {
            queryKey: ["YIR", "ShareImages", _, _, _],
            queryFn: async () => {
              const _ = await _.GetUserYearInReviewShareImage(_, {
                steamid: _,
                year: _,
                language: _,
              });
              if (_.GetEResult() != _._)
                throw `Load social images failed: ${_.GetErrorMessage()}`;
              return _.Body().toObject().images ?? [];
            },
            staleTime: 1 / 0,
          };
        }
        function _(_, _, _) {
          return (0, _._)(_((0, _._)(), _, _, _));
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _?.success === _._ || _?.success === _._;
        }
        function _(_) {
          const _ = _
              ? {
                  appid: _,
                }
              : void 0,
            { data: _, isLoading: _ } = (0, _._)(_),
            { data: _, isLoading: _ } = (0, _._)(_);
          return {
            item: _.useMemo(
              () =>
                _(_)
                  ? {
                      info: _,
                      assets: _ ?? null,
                    }
                  : void 0,
              [_, _],
            ),
            bLoading: _ || _,
          };
        }
        function _(_, _ = !1) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            queryKey: ["YIR", "storeitems", _, _],
            queryFn: async () => {
              const _ = await Promise.all(
                  _.map(async (_) => {
                    const [_, _] = await Promise.allSettled([
                      _.fetchQuery(
                        (0, _._)(_, {
                          appid: _,
                        }),
                      ),
                      _.fetchQuery(
                        (0, _._)(_, {
                          appid: _,
                        }),
                      ),
                      _ &&
                        _.fetchQuery(
                          (0, _._)(_, {
                            appid: _,
                          }),
                        ),
                    ]);
                    return _.status === "rejected" || !_(_.value)
                      ? null
                      : {
                          appid: _,
                          info: _.value,
                          assets: _.status === "fulfilled" ? _.value : null,
                        };
                  }),
                ),
                _ = new Map();
              for (const _ of _) _ && _.set(_.appid, _);
              if (_.size === 0 && _.length > 0)
                throw new Error("Error loading store items!");
              return _;
            },
            staleTime: 0,
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
          _ = __webpack_require__("chunkid");
        const _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 49101, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 78513, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 52986, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 32820, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 1864, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 58325, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 91651, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 24972, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 19065, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 54003, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 93443, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 79366, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 35057, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 82155, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 29318, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 50400, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 15024, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 50191, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 323, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17892, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 93532, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 28702, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 26586, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 46848, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 81849, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 14571, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 79706, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 2634, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 22531, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 23043, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 99337, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 40182, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_),
          _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 72817, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 89162, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 84230, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 52920, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 48524, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 48361, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17615, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 56528, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 92997, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 4503, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 37767, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 14034, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 19013, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 32031, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 9490, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 34372, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 76020, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 79275, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 42591, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17832, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 53384, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 99586, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 37766, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 73900, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 30581, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 78079, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 94270, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 14606, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 735, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 18975, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 47197, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17042, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_),
          _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 3569, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 31997, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 43238, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 8632, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 57836, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 76073, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 18351, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 64560, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 64325, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 70199, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 30631, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 8370, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 45893, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 88607, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 95378, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 45636, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 79380, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 73579, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 41343, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 97160, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 29064, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 68290, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 80454, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 96588, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 93813, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 7135, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 55646, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 21230, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 78015, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 1951, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 70781, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 33394, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_),
          _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 87621, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 20537, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 52482, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 81868, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 16224, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 81629, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 63675, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 4628, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 85121, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 3931, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 31531, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 78302, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 28921, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 41283, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 25550, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 29352, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 75624, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 81271, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 94491, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 28268, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 72660, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 38134, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 32658, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 92280, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 1617, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 77555, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 42930, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 60610, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 4939, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 21131, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 28049, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 38030, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_),
          _ = new Map([
            [2022, _],
            [2023, _],
            [2024, _],
            [2025, _],
          ]);
        function _(_) {
          return _.get(_);
        }
        function _() {
          const _ = (0, _._)(_._),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_);
          return _ && _ && _ && _ && _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
          __webpack_require__._ +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          bIsUser: !1,
          persona_name: "",
          avatar_url: "",
          themeStyle: {},
        });
        function _() {
          return (0, _.useContext)(_).bIsUser;
        }
        function _() {
          return (0, _.useContext)(_).themeStyle;
        }
        function _(_) {
          const _ = _._.logged_in,
            _ = _?.content_descriptorids ?? [],
            _ = _(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(),
            _ = _ ?? (0, _._)(_),
            _ =
              !!_ &&
              (_.some((_) => _.setExcludedContentDescriptors.has(_)) ||
                (!!_.appid && _.mapIgnoredApps.has(_.appid)));
          return _ ? !_ && _ : _.length > 0;
        }
        function _() {
          return (0, _.useContext)(_).persona_name;
        }
        function _() {
          const { persona_name: _, bIsUser: _ } = (0, _.useContext)(_);
          return _.useCallback(
            (_, ..._) => (0, _._)(_._, _, _, _, ..._) ?? _,
            [_, _],
          );
        }
        function _() {
          const { persona_name: _, bIsUser: _ } = (0, _.useContext)(_);
          return _.useCallback(
            (_, _, ..._) => {
              const _ = _(_);
              return _ && (0, _._)(_, _, _, _, ..._);
            },
            [_, _],
          );
        }
        function _(_) {
          return _ < 100
            ? _._.Localize("#YIR_Percent_Low", "1")
            : _._.Localize("#YIR_Percent", Math.round(_ / 100).toFixed(0));
        }
        function _() {
          return !0;
        }
        function _() {
          const _ = _(),
            _ = (0, _._)();
          return _.useCallback(
            (_) =>
              (0, _._)(_, {
                weekday: "short",
                year: _ ? void 0 : "numeric",
                timeZone: _,
              }),
            [_, _],
          );
        }
        const _ = {
            index: void 0,
            appids: [],
          },
          _ = _.createContext(_),
          _ = _.createContext(() => {});
        function _(_) {
          const [_, _] = _.useState(_);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_.Provider, {
              value: _,
              children: _.children,
            }),
          });
        }
        function _(_) {
          return typeof _.index == "number" && _.appids.length > _.index
            ? _.appids[_.index]
            : null;
        }
        function _() {
          const _ = _.useContext(_);
          return {
            unAppID: _(_),
            length: _.appids.length,
            index: _.index,
          };
        }
        function _() {
          const _ = _.useContext(_);
          return _.useCallback(
            (_, _) =>
              _({
                index: _,
                appids: _,
              }),
            [_],
          );
        }
        function _(_, _) {
          const _ = _();
          return _.useCallback(() => _(_, _), [_, _, _]);
        }
        function _(_) {
          const _ = _.useContext(_);
          return _.useCallback(() => {
            _((_) =>
              _ >= 0 && _ < _.appids.length
                ? {
                    ..._,
                    index: _,
                  }
                : _,
            );
          }, [_, _]);
        }
        function _() {
          const _ = _.useContext(_);
          return _.useCallback(
            (_) => {
              _((_) => (_(_) == _ ? _ : _));
            },
            [_],
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { className: _, children: _, strClassOnFirstVisible: _ } = _,
            [_, _] = (0, _.useState)(!1);
          return (0, _.jsx)(_._, {
            trigger: "once",
            onVisibilityChange: _,
            className: (0, _._)(_, _ ? _ || "NowVisible" : void 0),
            children: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              category: _,
              userYearInReview: _,
              strClassName: _,
              bgImageURL: _,
              title: _,
              subTitle: _,
              disclaimer: _,
              subTitleTokenIfMax: _,
            } = _,
            _ = _.GetRawStats(),
            _ = 5,
            {
              nTotalGames: _,
              nTotalSessions: _,
              nTotalPercentage: _,
            } = (0, _.useMemo)(() => _(_, _), [_, _]),
            { rgResults: _, nTotalResultCount: _ } = (0, _.useMemo)(
              () => _(_, _, _, _),
              [_, _, _, _],
            ),
            _ = (0, _.useMemo)(
              () => _.map((_) => _.parent_appid || _.appid),
              [_],
            ),
            [_, _] = (0, _.useState)(
              _.length > 0 ? _[0].parent_appid || _[0].appid : 0,
            ),
            { isLoading: _, data: _ } = _(_, _ == "vr"),
            _ = _(_, _, _, _),
            _ =
              _ === "overall" ||
              _ === "controller" ||
              _ == "demo" ||
              _ == "playtest";
          return (0, _.jsxs)("div", {
            className: (0, _._)(_, _, _().PlatformContentsCtn),
            children: [
              (0, _.jsx)("div", {
                className: _().SectionTitle,
                children: _,
              }),
              !!_ &&
                (0, _.jsx)("img", {
                  src: _,
                  className: _().BackgroundImage,
                }),
              _ === "vr" &&
                _ > 0 &&
                (0, _.jsx)(_, {
                  appid: _,
                }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().YearInReviewContent, _().StatsRow),
                children: [
                  (0, _.jsxs)("div", {
                    className: _().StatBlock,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().BigNum,
                        children: (0, _._)(_),
                      }),
                      (0, _.jsx)("div", {
                        className: _().StatDescription,
                        children: _._.LocalizePlural("#YIR_NewLine_Games", _),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().StatBlock,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().BigNum,
                        children: (0, _._)(_),
                      }),
                      (0, _.jsx)("div", {
                        className: _().StatDescription,
                        children: _._.LocalizePlural("#YIR_NewLine_Session", _),
                      }),
                    ],
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      percentVal: _,
                      subToken: "#YIR_NewLine",
                    }),
                ],
              }),
              !!_ &&
                (0, _.jsx)("div", {
                  className: _().SectionSubTitle,
                  children: _,
                }),
              !_ &&
                !!_ &&
                _ > _ &&
                _ > 0 &&
                (0, _.jsx)("div", {
                  className: _().SectionSubTitle,
                  children: _._.Localize(_, _),
                }),
              !!_ &&
                (0, _.jsx)("div", {
                  className: _().Disclaimer,
                  children: _,
                }),
              (0, _.jsx)(_, {
                className: _().SteamDeckGameCapRow,
                children: (0, _.jsx)(_, {
                  rgGamePercentages: _,
                  category: _,
                  fnOnHoverApp: _,
                }),
              }),
            ],
          });
        }
        function _(_, _, _, _) {
          return (0, _.useMemo)(
            () =>
              _ || !_
                ? 0
                : _.reduce((_, _) => {
                    const _ = _.parent_appid || _.appid,
                      _ = _.get(_)?.info.visible,
                      _ = !(_ == "demo" || _ == "playtest") || _.parent_appid;
                    return _ + (_ && _ ? 1 : 0);
                  }, 0),
            [_, _, _, _],
          );
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)();
          if (!_) return null;
          const _ = _.all_ages_screenshots ?? [],
            _ = (
              _ == "blocked"
                ? _
                : [..._, ...(_.mature_content_screenshots ?? [])].sort(
                    (_, _) => _.ordinal - _.ordinal,
                  )
            )[1];
          if (!_) return null;
          const _ = _ == "masked" && !_.includes(_);
          return (0, _.jsx)("img", {
            src: (0, _._)(_),
            className: (0, _._)({
              [_().GameImage]: !0,
              [_().BlurImage]: _,
            }),
          });
        }
        function _(_) {
          const { rgGamePercentages: _, category: _, fnOnHoverApp: _ } = _,
            _ = _.map((_) => _.appid);
          let _;
          switch (_) {
            case "demo":
              _ = _._._;
              break;
            case "playtest":
              _ = _._._;
              break;
          }
          return (0, _.jsx)(_._, {
            "flow-children": "grid",
            className: (0, _._)(
              _().YearInReviewContent,
              _().CapRow,
              _().CapRow,
            ),
            children: _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  appid: _.appid,
                  strInfo:
                    _.nPercentagex100 !== void 0
                      ? _(_.nPercentagex100)
                      : void 0,
                  nParentAppID: _.parent_appid,
                  eChildType: _,
                  index: _,
                  loading: "eager",
                  rgAppIDs: _,
                  fnOnMouseEvent: () => _ && _(_.appid),
                },
                _ + "_" + _.appid,
              ),
            ),
          });
        }
        function _(_) {
          const {
              appid: _,
              strInfo: _,
              rgAppIDs: _,
              index: _,
              loading: _,
              fnOnMouseEvent: _,
              nParentAppID: _,
              eChildType: _,
            } = _,
            { item: _, bLoading: _ } = _(_ == null ? _ : _),
            _ = _(_, _);
          if (_) return null;
          if (!_ || !_.info.visible)
            return _ && (_ == _._._ || _ == _._._)
              ? (0, _.jsx)(_, {
                  ..._,
                  nParentAppID: _,
                  eChildType: _._._,
                })
              : null;
          const _ = (0, _._)(_.assets, "library_capsule");
          return (0, _.jsxs)("a", {
            className: _().CapsuleCtn,
            onClick: _,
            onMouseEnter: _,
            children: [
              _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().SpecialFlags,
                        children: [
                          _ &&
                            _ == _._._ &&
                            (0, _.jsx)("div", {
                              className: _().DemoPlayDetails,
                              children: _._.Localize("#YIR_Played_Demo"),
                            }),
                          _ &&
                            _ == _._._ &&
                            (0, _.jsx)("div", {
                              className: _().PlaytestPlayDetails,
                              children: _._.Localize("#YIR_Played_PlayTest"),
                            }),
                        ],
                      }),
                      (0, _.jsx)("img", {
                        loading: _,
                        src: _,
                        alt: _.info.name,
                      }),
                    ],
                  })
                : (0, _.jsx)(_, {
                    item: _.info,
                  }),
              !!_ &&
                (0, _.jsx)("div", {
                  className: _().TimePlayed,
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const { item: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().UnavailableGame,
            children: [
              (0, _.jsx)("img", {
                src: _,
                alt: _.name || "" + _.appid,
              }),
              (0, _.jsx)("div", {
                className: _().GameTitle,
                children: _.name,
              }),
            ],
          });
        }
        function _(_) {
          const { percentVal: _, subToken: _ } = _,
            _ = _(_),
            _ = `${_}_Percent`;
          return (0, _.jsxs)("div", {
            className: _().StatBlock,
            children: [
              (0, _.jsx)("div", {
                className: _().BigNum,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _().StatDescription,
                children: _._.Localize(_),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { userYearInReview: _, nYear: _ } = _,
            _ = _(),
            _ = (0, _.useMemo)(() => {
              const _ = new Set();
              return (
                _.GetPlayTimeStats().game_summary.forEach((_) => {
                  !_.demo && !_.playtest
                    ? _.add(_.appid)
                    : _.parent_appid && _.add(_.parent_appid);
                }),
                Array.from(_)
              );
            }, [_]),
            { isLoading: _ } = _(_),
            _ = _(),
            _ = [
              {
                name: _._.Localize("#YIR_FirstTime_Tab_MonthlyGrid"),
                key: "firsttimebymonth",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)("div", {
                    className: _.MonthGridOverallCtn,
                    children: (0, _.jsx)(_, {
                      userYearInReview: _,
                      nYear: _,
                    }),
                  }),
                }),
              },
              {
                name: _._.Localize("#YIR_FirstTime_Tab_Grid"),
                key: "firsttimegrid",
                contents: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    userYearInReview: _,
                    nYear: _,
                  }),
                }),
              },
            ];
          return _.length == 0
            ? null
            : (0, _.jsxs)(_, {
                className: _.AllFirstPlayedCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_.AllGamesBGImage, _.AllGamesBGImage),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.YearInReviewContent,
                    children: [
                      (0, _.jsx)("div", {
                        className: _.SectionTitle,
                        children: _("#YIR_FirstTime_Title", _.length),
                      }),
                      _
                        ? (0, _.jsx)(_._, {
                            size: "medium",
                            position: "center",
                            string: _._.Localize("#Loading"),
                          })
                        : (0, _.jsx)("div", {
                            className: _.TabCtn,
                            children: (0, _.jsx)(_._, {
                              classNameCtn: _.TabBar,
                              classNameTab: (0, _._)(_.Tab, _.Tab),
                              tabs: _,
                            }),
                          }),
                    ],
                  }),
                ],
              });
        }
        function _(_) {
          const { nYear: _, userYearInReview: _ } = _,
            _ = _.GetPlayTimeStats().game_summary,
            _ = _(),
            [_, _] = _.useState(!1),
            { bShouldShowMore: _, rgGamesInOrderOfPlaytime: _ } = (0,
            _.useMemo)(() => {
              const _ = new Set(),
                _ = _.filter((_) =>
                  _.has(_.appid)
                    ? !1
                    : (_.add(_.appid),
                      _.parent_appid || (!_.demo && !_.playtest)),
                )
                  .sort(
                    (_, _) =>
                      _.total_playtime_percentagex100 -
                      _.total_playtime_percentagex100,
                  )
                  .map((_) => ({
                    appid: _.appid,
                    nPercentagex100: _.total_playtime_percentagex100,
                    bNewThisYear: !!_.new_this_year,
                    bIsDemo: !!_.demo,
                    bIsPlaytest: !!_.playtest,
                    nParentAppID: _.parent_appid,
                  })),
                _ = 100,
                _ = _.length > _ && !_;
              return {
                bShouldShowMore: _,
                rgGamesInOrderOfPlaytime: _ ? _.slice(0, _) : _,
              };
            }, [_, _]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                nYear: _,
                rgGamesInOrderOfPlaytime: _,
                strTooltip: _("#YIR_FirstTime_Percentages"),
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _.MoreButtonContainer,
                  children: (0, _.jsx)("a", {
                    href: "#",
                    className: _.ShowMoreBtn,
                    onClick: () => _(!0),
                    children: _._.Localize("#YIR_ShowMore"),
                  }),
                }),
            ],
          });
        }
        function _(_) {
          const { nYear: _, userYearInReview: _ } = _,
            _ = _.GetRawStats().playtime_stats.months;
          return (0, _.jsx)(_.Fragment, {
            children: _.filter((_) => _.stats.total_sessions > 0).map((_) =>
              (0, _.jsx)(
                _,
                {
                  month: _,
                  userYearInReview: _,
                  nYear: _,
                },
                "outermonth" + _.rtime_month,
              ),
            ),
          });
        }
        function _(_) {
          const { nYear: _, userYearInReview: _, month: _ } = _,
            _ = _(),
            _ = _(),
            [_, _] = _.useState(!1),
            { bShouldShowMore: _, rgGameStats: _ } = (0, _.useMemo)(() => {
              const _ = _.game_summary
                  .filter((_) => {
                    const _ = _.GetGameSummaryForApp(_.appid);
                    return (
                      (0, _._)(
                        _,
                        `Displaying Month Data ${_.rtime_month} missing summary for appid: ${_.appid}`,
                      ),
                      _ && (_.parent_appid || (!_.demo && !_.playtest))
                    );
                  })
                  .sort(
                    (_, _) =>
                      _.relative_playtime_percentagex100 -
                      _.relative_playtime_percentagex100,
                  )
                  .map((_) => {
                    const _ = _.GetGameSummaryForApp(_.appid);
                    return {
                      appid: _.appid,
                      nPercentagex100: _.relative_playtime_percentagex100,
                      bNewThisYear: !!_.new_this_year,
                      bIsDemo: !!_.demo,
                      bIsPlaytest: !!_.playtest,
                      nParentAppID: _.parent_appid,
                    };
                  }),
                _ = 8,
                _ = _.length > _ && !_;
              return {
                bShouldShowMore: _,
                rgGameStats: _ ? _.slice(0, _) : _,
              };
            }, [_.game_summary, _.rtime_month, _, _]);
          if (_.length == 0) return null;
          const _ = new Date((_.rtime_month + 1440 * 60) * 1e3);
          return (0, _.jsxs)(
            "div",
            {
              className: _.MonthGroupCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _.MonthTitle,
                  children: _
                    ? _._.Localize(
                        `#YIR_MonthlyGrid_MonthSingular_${_.getUTCMonth() + 1}`,
                      )
                    : (0, _._)(_),
                }),
                (0, _.jsx)(_, {
                  rgGamesInOrderOfPlaytime: _,
                  nYear: _,
                  strTooltip: _("#YIR_FirstTime_MonthlyPercentages"),
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _.MoreButtonContainer,
                    children: (0, _.jsx)("a", {
                      href: "#",
                      className: _.ShowMoreBtn,
                      onClick: () => _(!0),
                      children: _._.Localize("#YIR_ShowMore"),
                    }),
                  }),
              ],
            },
            "monthgroup_" + _.rtime_month,
          );
        }
        function _(_) {
          const { nYear: _, rgGamesInOrderOfPlaytime: _, strTooltip: _ } = _,
            _ = _(),
            _ = (0, _.useMemo)(
              () => _.map((_) => _.nParentAppID || _.appid),
              [_],
            ),
            { data: _ } = _(_);
          let _ = _.filter((_) => _?.has(_.nParentAppID || _.appid));
          const _ = _.map((_) => _.appid);
          let _ = _.map((_, _) => {
            let _ = () => _(_, _);
            return (0, _.jsx)(
              _,
              {
                appid: _.nParentAppID || _.appid,
                bNewThisYear: _.bNewThisYear,
                fnOnClick: _,
                nYear: _,
                strPercentage:
                  _.nPercentagex100 !== void 0 ? _(_.nPercentagex100) : void 0,
                strTooltip: _,
                bIsDemo: _.bIsDemo,
                bIsPlayTest: _.bIsPlaytest,
              },
              _.appid,
            );
          });
          return (0, _.jsx)(_._, {
            "flow-children": "grid",
            className: (0, _._)(_.FirstPlayCtn, _.FirstPlayCtn),
            children: _,
          });
        }
        function _(_) {
          const {
              nYear: _,
              appid: _,
              bNewThisYear: _,
              fnOnClick: _,
              strPercentage: _,
              strTooltip: _,
              bIsDemo: _,
              bIsPlayTest: _,
            } = _,
            { item: _ } = _(_),
            _ = (0, _._)(_ && (0, _._)(_.info)) || "",
            _ = _();
          if (!_ || !_.info.visible) return null;
          const _ = (0, _._)(_.assets, "library_capsule");
          return (0, _.jsx)("div", {
            className: (0, _._)({
              [_.GameCtn]: !0,
              [_.GameCtn]: !0,
              [_.GameNewThisYear]: _,
            }),
            onClick: (_) => {
              _ && (_.preventDefault(), _());
            },
            children: (0, _.jsx)(_._, {
              appid: _,
              children: (0, _.jsxs)("a", {
                href: _ ? void 0 : _,
                className: _.CapsuleCtn,
                children: [
                  (!!_ || !!_ || !!_) &&
                    (0, _.jsxs)("div", {
                      className: _.SpecialFlags,
                      children: [
                        !!_ &&
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _.GamePlayDetails,
                              _.GamePlayDetails,
                            ),
                            children: _._.Localize("#YIR_FirstTime_Played", _),
                          }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _.DemoPlayDetails,
                              _.DemoPlayDetails,
                            ),
                            children: _._.Localize("#YIR_Played_Demo"),
                          }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _.PlaytestPlayDetails,
                              _.PlaytestPlayDetails,
                            ),
                            children: _._.Localize("#YIR_Played_PlayTest"),
                          }),
                      ],
                    }),
                  _
                    ? (0, _.jsx)("img", {
                        loading: "lazy",
                        src: _,
                      })
                    : (0, _.jsx)(_, {
                        item: _.info,
                      }),
                  !!_ &&
                    (0, _.jsx)(_._, {
                      toolTipContent: _,
                      className: _.TimePlayed,
                      children: _,
                    }),
                ],
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            children: _,
            className: _,
            squareClassName: _,
            gridClassName: _,
            bEvenTiles: _,
            bFadeInTiles: _,
            bDrift: _,
          } = _;
          return (0, _.jsx)("div", {
            className: (0, _._)(_.Container, _),
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.Frame, !_ && _.FadeInGrid),
              children: (0, _.jsx)("div", {
                className: (0, _._)(_.Square, _ && _.Drift, _),
                children: (0, _.jsx)("div", {
                  className: (0, _._)(
                    {
                      [_.Grid]: !0,
                      [_.WideTiles]: !_,
                      [_.FadeInTiles]: _,
                    },
                    _,
                  ),
                  children: _,
                }),
              }),
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)("img", {
            className: (0, _._)(_.Tile, _.className),
            src: _.strImageURL,
            alt: "",
          });
        }
        const _ = 9e3,
          _ = 1,
          _ = 50;
        function _(_) {
          const { userYearInReview: _, children: _ } = _,
            _ = (0, _.useMemo)(
              () =>
                _.GetPlayTimeStats()
                  .games.map((_) => _.GetGameSummaryForApp(_.appid))
                  .filter(
                    (_) => _ && (_.parent_appid || (!_.demo && !_.playtest)),
                  ),
              [_],
            );
          if (!_ || _.length == 0)
            return (0, _.jsx)(_, {
              children: _,
            });
          const _ = _[0].total_playtime_percentagex100 ?? 0;
          return _.GetPlayTimeStats().game_summary.length < _ || _ >= _
            ? (0, _.jsx)(_, {
                appid: _[0].parent_appid || _[0].appid,
                children: _,
              })
            : (0, _.jsx)(_, {
                userYearInReview: _,
                children: _,
              });
        }
        function _(_) {
          const { userYearInReview: _, children: _ } = _,
            _ = _(),
            _ = (0, _.useMemo)(
              () =>
                Array.from(
                  new Set(
                    _.GetPlayTimeStats()
                      .game_summary.filter(
                        (_) => _.parent_appid || (!_.demo && !_.playtest),
                      )
                      .sort(
                        (_, _) =>
                          _.total_playtime_percentagex100 -
                          _.total_playtime_percentagex100,
                      )
                      .slice(0, _)
                      .map((_) => _.parent_appid || _.appid),
                  ),
                ),
              [_],
            ),
            { data: _ } = _(_),
            { rgStoreItems: _, rgImageURLs: _ } = (0, _.useMemo)(() => {
              if (!_)
                return {
                  rgStoreItems: null,
                  rgImageURLs: null,
                };
              const _ = _.map((_) => _.get(_)).filter((_) => !!_ && !!_.assets),
                _ = _(_);
              return {
                rgStoreItems: _,
                rgImageURLs: _,
              };
            }, [_, _]);
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    className: (0, _._)(_().ImagesCtn, _.ImagesCtn),
                    squareClassName: _().TileSquare,
                    gridClassName: (0, _._)({
                      [_().TileGrid]: !0,
                      [_().Sub10]: _.length <= 10,
                      [_().Sub20]: _.length <= 20,
                      [_().Sub40]: _.length <= 40,
                    }),
                    bFadeInTiles: !0,
                    bDrift: !0,
                    children: _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          strImageURL: _,
                          className: _().Tile,
                        },
                        _,
                      ),
                    ),
                  }),
                  _,
                ],
              })
            : (0, _.jsx)(_, {
                children: _,
              });
        }
        function _(_) {
          const _ = (_) => (
              (0, _._)(_.assets, "Cannot get image without assets"),
              (0, _._)(_.assets, "library_hero", "main_capsule")
            ),
            _ = (_) => (
              (0, _._)(_.assets, "Cannot get image without assets"),
              (0, _._)(_.assets, "raw_page_background", "main_capsule")
            ),
            _ = _.map(_);
          return (
            _.length <= 50 && _.push(..._.map(_)),
            _.length <= 20 && _.push(..._.map(_)),
            _
          );
        }
        function _(_) {
          const { appid: _, children: _ } = _,
            { item: _ } = _(_),
            _ = _();
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().ImagesCtn, _.ImagesCtn),
                    children: (0, _.jsx)("div", {
                      className: (0, _._)(_().SingleGame, _.SingleGame),
                      children: (0, _.jsx)("div", {
                        className: (0, _._)(_().ImageTint, _.ImageTint),
                        children: (0, _.jsx)("img", {
                          src: (0, _._)(_.assets, "library_hero"),
                        }),
                      }),
                    }),
                  }),
                  _,
                ],
              })
            : (0, _.jsx)(_, {
                children: _,
              });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().basicBackground,
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = ({
          spaceAroundCount: _,
          endValue: _,
          maxValue: _,
          duration: _ = 1e3,
          startAnimation: _ = !1,
          stopAnimation: _ = !1,
          onAnimationStart: _,
          onAnimationStop: _,
          delay: _ = 0,
          className: _,
        }) => {
          const [_, _] = (0, _.useState)(0),
            _ = _.useRef(null),
            _ = (_) => (_ < 0.5 ? 4 * _ ** 3 : 1 - Math.pow(-2 * _ + 2, 3) / 2);
          return (
            (0, _.useEffect)(() => {
              let _ = null;
              const _ = () => {
                if (!_) return;
                const _ = Date.now() - _,
                  _ = Math.min(1, _ / _),
                  _ = _(_),
                  _ = Math.round((_ ?? _) * _);
                _ <= _ ? (_(_), (_.current = requestAnimationFrame(_))) : _(_);
              };
              return (
                _ &&
                  (_ && _(),
                  window.setTimeout(() => {
                    (_ = Date.now()),
                      _ && _(),
                      (_.current = requestAnimationFrame(_));
                  }, _)),
                () => {
                  _.current && cancelAnimationFrame(_.current), _ && _ && _();
                }
              );
            }, [_, _, _, _, _, _, _, _]),
            _
              ? (0, _.jsxs)(_.Fragment, {
                  children: ["\xA0", (0, _._)(_), "\xA0"],
                })
              : (0, _.jsx)(_.Fragment, {
                  children: (0, _._)(_),
                })
          );
        };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = () => {
            const _ = _();
            return (0, _.jsxs)("svg", {
              className: (0, _._)(
                _().ProgressIconSVG,
                _().IconStreak,
                _.IconStreak,
              ),
              _: "0px",
              _: "0px",
              width: "100px",
              height: "100px",
              viewBox: "0 0 220 256",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, _.jsx)("path", {
                  _: "M62.8236 111.578C62.8236 118.539 57.1801 124.183 50.2186 124.183C43.257 124.183 37.6135 118.539 37.6135 111.578C37.6135 104.616 43.257 98.9728 50.2186 98.9728C57.1801 98.9728 62.8236 104.616 62.8236 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M104.84 111.578C104.84 118.539 99.197 124.183 92.2354 124.183C85.2738 124.183 79.6304 118.539 79.6304 111.578C79.6304 104.616 85.2738 98.9728 92.2354 98.9728C99.197 98.9728 104.84 104.616 104.84 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M146.857 111.578C146.857 118.539 141.214 124.183 134.252 124.183C127.29 124.183 121.647 118.539 121.647 111.578C121.647 104.616 127.29 98.9728 134.252 98.9728C141.214 98.9728 146.857 104.616 146.857 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M188.874 111.578C188.874 118.539 183.23 124.183 176.269 124.183C169.307 124.183 163.664 118.539 163.664 111.578C163.664 104.616 169.307 98.9728 176.269 98.9728C183.23 98.9728 188.874 104.616 188.874 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M62.8236 153.595C62.8236 160.556 57.1801 166.2 50.2186 166.2C43.257 166.2 37.6135 160.556 37.6135 153.595C37.6135 146.633 43.257 140.99 50.2186 140.99C57.1801 140.99 62.8236 146.633 62.8236 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M104.84 153.595C104.84 160.556 99.197 166.2 92.2354 166.2C85.2738 166.2 79.6304 160.556 79.6304 153.595C79.6304 146.633 85.2738 140.99 92.2354 140.99C99.197 140.99 104.84 146.633 104.84 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M146.857 153.595C146.857 160.556 141.214 166.2 134.252 166.2C127.29 166.2 121.647 160.556 121.647 153.595C121.647 146.633 127.29 140.99 134.252 140.99C141.214 140.99 146.857 146.633 146.857 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M188.874 153.595C188.874 160.556 183.23 166.2 176.269 166.2C169.307 166.2 163.664 160.556 163.664 153.595C163.664 146.633 169.307 140.99 176.269 140.99C183.23 140.99 188.874 146.633 188.874 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M62.8236 195.611C62.8236 202.573 57.1801 208.216 50.2186 208.216C43.257 208.216 37.6135 202.573 37.6135 195.611C37.6135 188.65 43.257 183.006 50.2186 183.006C57.1801 183.006 62.8236 188.65 62.8236 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M104.84 195.611C104.84 202.573 99.197 208.216 92.2354 208.216C85.2738 208.216 79.6304 202.573 79.6304 195.611C79.6304 188.65 85.2738 183.006 92.2354 183.006C99.197 183.006 104.84 188.65 104.84 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  _: "M146.857 195.611C146.857 202.573 141.214 208.216 134.252 208.216C127.29 208.216 121.647 202.573 121.647 195.611C121.647 188.65 127.29 183.006 134.252 183.006C141.214 183.006 146.857 188.65 146.857 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M216.696 196.876C218.637 198.84 218.617 202.006 216.653 203.947L197.527 222.839C194.78 225.552 190.355 225.529 187.636 222.787L177.266 212.324C175.322 210.363 175.336 207.197 177.297 205.253C179.258 203.309 182.424 203.323 184.368 205.284L192.63 213.62L209.625 196.832C211.59 194.892 214.755 194.911 216.696 196.876Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M169.538 8H156.974V44.6175L169.538 44.6175V8ZM156.974 0C152.556 0 148.974 3.58172 148.974 7.99999V12.8068H78.3153V8C78.3153 3.58172 74.7335 0 70.3153 0H57.7515C53.3332 0 49.7515 3.58172 49.7515 7.99999V12.8068H12C5.37258 12.8068 0 18.1794 0 24.8068V108.777C0 110.986 1.79086 112.777 4 112.777C6.20914 112.777 8 110.986 8 108.777V77.7627H162.73C164.939 77.7627 166.73 75.9718 166.73 73.7627C166.73 71.5536 164.939 69.7627 162.73 69.7627H8V24.8068C8 22.5976 9.79086 20.8068 12 20.8068H49.7515V44.6175C49.7515 49.0358 53.3332 52.6175 57.7515 52.6175H70.3153C74.7335 52.6175 78.3153 49.0358 78.3153 44.6175V20.8068H148.974V44.6175C148.974 49.0358 152.556 52.6175 156.974 52.6175H169.538C173.956 52.6175 177.538 49.0358 177.538 44.6175V20.8068H214.487C216.696 20.8068 218.487 22.5976 218.487 24.8068V69.7627H181.404C179.195 69.7627 177.404 71.5536 177.404 73.7627C177.404 75.9718 179.195 77.7627 181.404 77.7627H218.487V174.637C212.078 170.481 204.434 168.067 196.227 168.067C173.602 168.067 155.26 186.408 155.26 209.034C155.26 216.458 157.235 223.421 160.689 229.426H12C9.79086 229.426 8 227.636 8 225.426V127.918C8 125.709 6.20914 123.918 4 123.918C1.79086 123.918 0 125.709 0 127.918V225.426C0 232.054 5.37256 237.426 12 237.426H166.695C174.149 245.177 184.625 250 196.227 250C218.852 250 237.193 231.659 237.193 209.034C237.193 198.394 233.137 188.702 226.487 181.419V24.8068C226.487 18.1794 221.115 12.8068 214.487 12.8068H177.538V8C177.538 3.58172 173.956 0 169.538 0H156.974ZM229.193 209.034C229.193 227.24 214.434 242 196.227 242C178.02 242 163.26 227.24 163.26 209.034C163.26 190.827 178.02 176.067 196.227 176.067C214.434 176.067 229.193 190.827 229.193 209.034ZM57.7515 8H70.3153V44.6175L57.7515 44.6175V8Z",
                  fill: "#E5E5E5",
                }),
              ],
            });
          },
          _ = () => {
            const _ = _();
            return (0, _.jsxs)("svg", {
              className: (0, _._)(
                _().ProgressIconSVG,
                _().IconGamesPlayed,
                _.IconGamesPlayed,
              ),
              _: "0px",
              _: "0px",
              width: "100px",
              height: "100px",
              viewBox: "0 0 215 215",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, _.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M37.6146 37.7144C-0.630497 75.9444 -0.631195 137.928 37.6151 176.159C66.7056 205.238 109.551 212.205 145.234 197.037C147.268 196.173 149.617 197.12 150.481 199.153C151.345 201.186 150.397 203.534 148.364 204.399C109.781 220.8 63.4338 213.28 31.9583 181.817C-9.41226 140.463 -9.41295 73.4128 31.9588 32.0574C33.5213 30.4955 36.0541 30.4957 37.6159 32.0578C39.1777 33.6199 39.1771 36.1525 37.6146 37.7144Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M57.6852 17.4447C56.6914 15.4719 57.4852 13.0669 59.4583 12.0728C99.1749 -7.93684 148.868 -1.37195 182.042 31.7888C223.412 73.143 223.413 140.193 182.041 181.548C180.479 183.11 177.946 183.11 176.384 181.548C174.822 179.986 174.823 177.453 176.385 175.891C214.63 137.661 214.631 75.6779 176.385 37.4467C145.724 6.79791 99.7824 0.714176 63.0573 19.2167C61.0842 20.2108 58.679 19.4174 57.6852 17.4447Z",
                  fill: "#E5E5E5",
                }),
                (0, _.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M106.838 188.612C152.036 188.612 188.676 151.986 188.676 106.806C188.676 61.6257 152.036 25 106.838 25C61.6402 25 25 61.6257 25 106.806C25 151.986 61.6402 188.612 106.838 188.612ZM142.994 113.577C148.329 110.499 148.329 102.799 142.994 99.7197L93.9972 71.4425C88.6639 68.3645 81.9984 72.2136 81.9984 78.3714L81.9984 134.926C81.9984 141.084 88.6639 144.933 93.9972 141.855L142.994 113.577Z",
                  fill: "#E5E5E5",
                }),
              ],
            });
          },
          _ = () => {
            const _ = _();
            return (0, _.jsx)("svg", {
              className: (0, _._)(
                _().ProgressIconSVG,
                _().IconAchievement,
                _.IconAchievement,
              ),
              _: "0px",
              _: "0px",
              width: "100px",
              height: "120px",
              viewBox: "0 0 240 276",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, _.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                _: "M107.636 23.0644L120.478 8.96963L133.319 23.0644C137.003 27.1077 142.704 28.6353 147.916 26.9756L166.085 21.19L170.159 39.8174C171.327 45.1608 175.501 49.3343 180.844 50.5029L199.472 54.5768L193.686 72.7455C192.026 77.9573 193.554 83.6585 197.597 87.3422L211.692 100.184L197.597 113.026C193.554 116.709 192.026 122.411 193.686 127.622L199.472 145.791L180.844 149.865C175.501 151.034 171.327 155.207 170.159 160.551L166.085 179.178L147.916 173.392C142.704 171.733 137.003 173.26 133.319 177.303L120.478 191.398L107.636 177.303C103.952 173.26 98.251 171.733 93.0392 173.392L74.8705 179.178L70.7966 160.551C69.628 155.207 65.4545 151.034 60.1111 149.865L41.4837 145.791L47.2693 127.622C48.929 122.411 47.4014 116.709 43.3581 113.026L29.2633 100.184L43.3581 87.3422C47.4014 83.6584 48.929 77.9573 47.2693 72.7455L41.4837 54.5768L60.1111 50.5029C65.4545 49.3343 69.628 45.1608 70.7966 39.8174L74.8705 21.19L93.0391 26.9756C98.251 28.6353 103.952 27.1077 107.636 23.0644ZM116.042 1.95909C118.422 -0.653032 122.533 -0.653031 124.913 1.9591L139.233 17.6766C140.812 19.4094 143.255 20.0641 145.489 19.3528L165.749 12.9011C169.116 11.8289 172.676 13.8842 173.431 17.3363L177.974 38.1081C178.475 40.3982 180.263 42.1868 182.553 42.6877L203.325 47.2305C206.777 47.9855 208.833 51.5454 207.76 54.9125L201.309 75.1729C200.598 77.4065 201.252 79.8499 202.985 81.4286L218.703 95.7488C221.315 98.1287 221.315 102.239 218.703 104.619L202.985 118.939C201.252 120.518 200.598 122.961 201.309 125.195L207.76 145.455C208.833 148.823 206.777 152.382 203.325 153.137L190.801 155.876L239.847 236.34C242.331 240.415 239.521 245.659 234.753 245.849L206.74 246.963C204.683 247.045 202.798 248.133 201.698 249.874L186.727 273.576C184.178 277.611 178.232 277.422 175.945 273.234L131.275 191.426L124.913 198.409C122.533 201.021 118.422 201.021 116.042 198.409L109.564 191.298L64.8244 273.234C62.5373 277.422 56.5913 277.611 54.0427 273.576L39.0711 249.874C37.9718 248.133 36.0867 247.045 34.0298 246.963L6.01687 245.849C1.24829 245.659 -1.56099 240.415 0.922882 236.34L49.9904 155.841L37.63 153.137C34.1779 152.382 32.1226 148.823 33.1948 145.455L39.6465 125.195C40.3578 122.961 39.7031 120.518 37.9703 118.939L22.2528 104.619C19.6407 102.239 19.6407 98.1286 22.2528 95.7487L37.9703 81.4286C39.7031 79.8499 40.3578 77.4065 39.6465 75.1729L33.1948 54.9125C32.1226 51.5454 34.1779 47.9855 37.63 47.2305L58.4018 42.6877C60.6919 42.1868 62.4805 40.3982 62.9814 38.1081L67.5242 17.3363C68.2792 13.8842 71.8391 11.8289 75.2062 12.9011L95.4666 19.3528C97.7002 20.0641 100.144 19.4094 101.722 17.6766L116.042 1.95909ZM58.2574 157.649L9.29666 237.973L34.3478 238.969C39.0346 239.156 43.3299 241.636 45.8348 245.601L59.2235 266.798L103.865 185.043L101.722 182.691C100.144 180.959 97.7002 180.304 95.4666 181.015L75.2062 187.467C71.8391 188.539 68.2792 186.484 67.5242 183.032L62.9814 162.26C62.4805 159.97 60.6919 158.181 58.4018 157.68L58.2574 157.649ZM136.974 185.17L181.546 266.798L194.935 245.601C197.44 241.636 201.735 239.156 206.422 238.969L231.473 237.973L182.534 157.684C180.253 158.191 178.473 159.976 177.974 162.26L173.431 183.032C172.676 186.484 169.116 188.539 165.749 187.467L145.489 181.015C143.255 180.304 140.812 180.959 139.233 182.691L136.974 185.17ZM146.738 53.2766C121.119 38.4858 88.3612 47.2633 73.5704 72.8818C62.3219 92.3648 64.7011 115.986 77.7705 132.691C79.1317 134.431 78.8247 136.945 77.0848 138.307C75.3449 139.668 72.8309 139.361 71.4697 137.621C56.4587 118.434 53.7068 91.2865 66.6422 68.8818C83.6422 39.437 121.293 29.3484 150.738 46.3484C152.651 47.453 153.307 49.8993 152.202 51.8125C151.097 53.7257 148.651 54.3812 146.738 53.2766ZM167.979 60.9959C166.588 59.2794 164.069 59.0153 162.353 60.406C160.636 61.7967 160.372 64.3156 161.763 66.032C175.326 82.7723 177.936 106.79 166.527 126.551C151.737 152.169 118.978 160.947 93.3599 146.156C91.4467 145.051 89.0003 145.707 87.8957 147.62C86.7912 149.533 87.4467 151.98 89.3599 153.084C118.805 170.084 156.456 159.996 173.456 130.551C186.575 107.827 183.558 80.2246 167.979 60.9959Z",
                fill: "#E5E5E5",
              }),
            });
          };
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _();
          return (0, _.jsx)(_, {
            className: (0, _._)(_().TopHonorsSection, _.TopHonorsSection),
            children: (0, _.jsx)("div", {
              className: (0, _._)(
                _().YearInReviewContent,
                _().TopHonorsContent,
              ),
              children: (0, _.jsxs)("div", {
                className: _().TopHonorsCtn,
                children: [
                  (0, _.jsx)(_, {
                    userYearInReview: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SpiderAndNumbersCnt,
                    children: [
                      (0, _.jsx)(_, {
                        userYearInReview: _,
                      }),
                      (0, _.jsx)(_, {
                        userYearInReview: _,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          let { userYearInReview: _ } = _;
          const _ = _.GetYear(),
            _ = _(),
            _ = _();
          let _ = _.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            _ = _.GetFilteredGameSummary()?.length || 0,
            _ =
              _.GetPlayTimeStats().playtime_streak?.longest_consecutive_days ||
              0,
            _ = _.GetPlayTimeStats().by_numbers?.achievements_pct || 0,
            _ = _.GetPlayTimeStats().by_numbers?.games_played_pct || 0,
            _ = _.GetPlayTimeStats().by_numbers?.game_streak_pct || 0,
            _ = _ > 0 && _ > 0 && !_();
          _ >= 99 && (_ = 100),
            _ >= 99 && (_ = 100),
            _ >= 99 && (_ = 100),
            _ == _.GetPlayTimeStats().by_numbers?.achievements_avg && (_ = 50),
            _ == _.GetPlayTimeStats().by_numbers?.games_played_avg && (_ = 50),
            _ == _.GetPlayTimeStats().by_numbers?.game_streak_avg && (_ = 50),
            _ == 0 && (_ = 0),
            _ == 0 && (_ = 0),
            _ == 0 && (_ = 0);
          const [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            _ = _.useCallback(async (_) => {
              _ && (_(!0), _(!0), _(!0));
            }, []),
            _ = (0, _.jsx)(_, {
              endValue: _,
              maxValue: (_ * 100) / _,
              duration: 2e3,
              startAnimation: _,
              delay: 500,
            }),
            _ = (0, _.jsx)(_, {
              endValue: _,
              maxValue: (_ * 100) / _,
              duration: 2e3,
              startAnimation: _,
              delay: 700,
            }),
            _ = (0, _.jsx)(_, {
              endValue: _,
              maxValue: (_ * 100) / _,
              duration: 2e3,
              startAnimation: _,
              delay: 900,
            });
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().PlayBehaviorContainer,
              _.PlayBehaviorContainer,
            ),
            children: [
              (0, _.jsx)("div", {
                className: _().SectionTitle,
                children: _("#YIR_Compare_Title_Label"),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().SectionSubTitle,
                  _().PlayBehaviorSectionSubTitle,
                ),
                children: _("#YIR_Compare_Subtitle_Label"),
              }),
              (0, _.jsxs)(_._, {
                onVisibilityChange: _,
                children: [
                  (0, _.jsx)(_, {
                    progressLabel: _(
                      _ == 1
                        ? "#YIR_Compare_PlayerProgress_Achievements_Single"
                        : "#YIR_Compare_PlayerProgress_Achievements_Label",
                      _,
                    ),
                    userPercent: _,
                    steamAverage:
                      _.GetPlayTimeStats().by_numbers?.achievements_avg,
                    progressIcon: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(_, {
                    progressLabel: _(
                      _ == 1
                        ? "#YIR_Compare_PlayerProgress_PlayedGames_Single"
                        : "#YIR_Compare_PlayerProgress_PlayedGames_Label",
                      _,
                    ),
                    userPercent: _,
                    steamAverage:
                      _.GetPlayTimeStats().by_numbers?.games_played_avg,
                    progressIcon: (0, _.jsx)(_, {}),
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      progressLabel: _(
                        _ == 1
                          ? "#YIR_Compare_PlayerProgress_LongestStreak_Single"
                          : "#YIR_Compare_PlayerProgress_LongestStreak_Label",
                        _,
                      ),
                      userPercent: _,
                      steamAverage:
                        _.GetPlayTimeStats().by_numbers?.game_streak_avg,
                      progressIcon: (0, _.jsx)(_, {}),
                    }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _().PlayNewnessContainer,
                children: (0, _.jsx)(_, {
                  userYearInReview: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          let {
            progressLabel: _,
            steamAverage: _,
            progressIcon: _,
            userPercent: _,
          } = _;
          const _ = _();
          return (
            (_ = _._(_, 0, 100)),
            (0, _.jsxs)(_, {
              className: _().PlayerBehaviorProgressCnt,
              children: [
                (0, _.jsx)("div", {
                  className: _().ProgressIcon,
                  children: _,
                }),
                (0, _.jsxs)("div", {
                  className: _().ProgressRightSide,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().ProgressLabel, _.ProgressLabel),
                      children: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _().ProgressBar,
                      children: (0, _.jsx)("div", {
                        className: _().ProgressBarWrapper,
                        children: (0, _.jsx)("div", {
                          className: (0, _._)(
                            _().ProgressBarFilled,
                            _.ProgressBarFilled,
                            _.ProgressBarFilledGradient,
                          ),
                          style: {
                            clipPath:
                              "polygon(0% 0, " +
                              _ +
                              "% 0%, " +
                              _ +
                              "% 100%, 0% 100%)",
                          },
                          children: (0, _.jsxs)("div", {
                            className: _().GlitterBox,
                            children: [
                              (0, _.jsx)("div", {
                                className: _().Glitter,
                              }),
                              (0, _.jsx)("div", {
                                className: (0, _._)(
                                  _().Glitter,
                                  _().GlitterSecond,
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: _().ProgressLabelsCnt,
                      children:
                        _ &&
                        (0, _.jsx)("div", {
                          className: _().ProgressSteamAvgLabel,
                          children: _._.Localize(
                            "#YIR_Compare_PlayerProgress_Steam_Avg",
                            _,
                          ),
                        }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var _ = ((_) => (
          (_.NewActive = "NewActive"),
          (_.UsedActive = "UsedActive"),
          (_.OldActive = "OldActive"),
          _
        ))(_ || {});
        const _ = {
          NewActive: "#YIR_Compare_NewGames_Flavor",
          UsedActive: "#YIR_Compare_ComfortGames_Flavor",
          OldActive: "#YIR_Compare_OldGames_Flavor",
        };
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _.GetYear(),
            _ = _(),
            _ = _.new_games_color,
            _ = _.used_games_color,
            _ = _.old_games_color,
            [_, _] = (0, _.useState)("NewActive"),
            _ = _(),
            _ = _.GetGlobalGameplayDistribition(),
            _ = {
              NewActive: _?.new_releases || 0,
              UsedActive: _?.recent_releases || 0,
              OldActive: _?.classic_releases || 0,
            },
            _ = _ && _.new_releases ? _.recent_cutoff_year : 7,
            _ = _ + 1;
          let [_, _, _] = _.useMemo(() => {
            let _ = _.GetGameAgeCounts([1, _]),
              _ = _.reduce((_, _) => _ + _, 0);
            if (_ == 0) return [0, 0, 0];
            let _ = _.map((_) => Math.floor((_ * 100) / _)),
              _ = 100 - _.reduce((_, _) => _ + _, 0),
              _ = _.map((_, _) => ({
                decimal: ((_ * 100) / _) % 1,
                index: _,
              }));
            for (
              _ = _.sort((_, _) => _.decimal - _.decimal);
              _ > 0 && _.length > 0;
            ) {
              let _ = _.pop();
              (_[_.index] += 1), (_ -= 1);
            }
            return _;
          }, [_, _]);
          const _ = {
              NewActive: _,
              UsedActive: _,
              OldActive: _,
            },
            _ = {
              NewActive: _("#YIR_Compare_NewGames_Desc_User", _),
              UsedActive: _("#YIR_Compare_ComfortGames_Desc_User", _),
              OldActive: _("#YIR_Compare_OldGames_Desc_User", _),
            },
            _ = {
              NewActive: _._.Localize("#YIR_Compare_NewGames_Desc_AvgSteam", _),
              UsedActive: _._.Localize(
                "#YIR_Compare_ComfortGames_Desc_AvgSteam",
                _,
              ),
              OldActive: _._.Localize("#YIR_Compare_OldGames_Desc_AvgSteam", _),
            },
            _ = (0, _.useMemo)(() => {
              const _ = new Array();
              return (
                _.push({
                  name: "new",
                  value: _ > 0 ? _ : 1,
                }),
                _.push({
                  name: "used",
                  value: _ > 0 ? _ : 1,
                }),
                _.push({
                  name: "old",
                  value: _ > 0 ? _ : 1,
                }),
                _
              );
            }, [_, _, _]);
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().GameNewnessComparisonContainer,
              _()[_],
              _[_],
            ),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().GameNewnessTitle, _.GameNewnessTitle),
                children: _._.LocalizeReact(
                  "#YIR_Compare_Flavor_Title",
                  (0, _.jsx)("div", {}),
                ),
              }),
              (0, _.jsxs)("div", {
                className: _().GameNewnessDataCnt,
                children: [
                  (0, _.jsx)("div", {
                    className: _().WheelChart,
                    children: (0, _.jsx)(_._, {
                      width: "100%",
                      height: "100%",
                      aspect: 1,
                      children: (0, _.jsx)(_._, {
                        children: (0, _.jsxs)(_._, {
                          data: _,
                          dataKey: "value",
                          nameKey: "name",
                          _: "50%",
                          _: "50%",
                          innerRadius: "48%",
                          outerRadius: "92%",
                          fill: "#8884d8",
                          paddingAngle: 3,
                          minAngle: 2,
                          startAngle: 45,
                          endAngle: 405,
                          children: [
                            (0, _.jsx)(
                              _._,
                              {
                                onMouseEnter: () => _("NewActive"),
                                className: (0, _._)(
                                  _().WheelArc,
                                  _ === "NewActive" && _().Active,
                                ),
                                fill: _,
                                style:
                                  _ === "NewActive"
                                    ? {
                                        opacity: "1",
                                      }
                                    : {
                                        opacity: "0.75",
                                      },
                              },
                              "cell-1",
                            ),
                            (0, _.jsx)(
                              _._,
                              {
                                onMouseEnter: () => _("UsedActive"),
                                className: (0, _._)(
                                  _().WheelArc,
                                  _ === "UsedActive" && _().Active,
                                ),
                                fill: _,
                                style:
                                  _ === "UsedActive"
                                    ? {
                                        opacity: "1",
                                      }
                                    : {
                                        opacity: "0.75",
                                      },
                              },
                              "cell-2",
                            ),
                            (0, _.jsx)(
                              _._,
                              {
                                onMouseEnter: () => _("OldActive"),
                                className: (0, _._)(
                                  _().WheelArc,
                                  _ === "OldActive" && _().Active,
                                ),
                                fill: _,
                                style:
                                  _ === "OldActive"
                                    ? {
                                        opacity: "1",
                                      }
                                    : {
                                        opacity: "0.75",
                                      },
                              },
                              "cell-3",
                            ),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, _.jsx)("div", {
                    className: _().RightSideContainer,
                    children: (0, _.jsxs)("div", {
                      className: _().DataBoxesContainer,
                      children: [
                        (0, _.jsxs)("div", {
                          className: (0, _._)(
                            _().UserData,
                            _.UserData,
                            _().DataBox,
                            _.DataBox,
                            _.Background,
                          ),
                          children: [
                            (0, _.jsx)("div", {
                              className: (0, _._)(
                                _().DataBoxArrow,
                                _.DataBoxArrow,
                                _.Background,
                              ),
                            }),
                            (0, _.jsxs)("div", {
                              className: (0, _._)(
                                _().PercentageLabel,
                                _.PercentageLabel,
                                _.Color,
                              ),
                              children: [
                                _._.Localize("#YIR_Compare_Percentage", _[_]),
                                (0, _.jsx)("div", {
                                  className: _().FlavorLabel,
                                  children: _._.Localize(_[_]),
                                }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: (0, _._)(
                                _().PercentageDescriptionLabel,
                                _.PercentageDescriptionLabel,
                                _.Color,
                              ),
                              children: _[_],
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: (0, _._)(
                            _().SteamData,
                            _.SteamData,
                            _().DataBox,
                            _.DataBox,
                            _.Border,
                          ),
                          children: [
                            (0, _.jsx)("div", {
                              className: (0, _._)(
                                _().PercentageLabel,
                                _.PercentageLabel,
                                _.Color,
                              ),
                              children: _._.Localize(
                                "#YIR_Compare_Percentage",
                                _[_],
                              ),
                            }),
                            (0, _.jsx)("div", {
                              className: (0, _._)(
                                _().PercentageDescriptionLabel,
                                _.PercentageDescriptionLabel,
                                _.Color,
                              ),
                              children: _[_],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _.GetUserAggregateTagData(),
            { data: _ } = (0, _._)(_._.LANGUAGE),
            _ = _(),
            _ = _(),
            _ = _(),
            _ = _.map((_) => _.nPreSelectionWeight).sort((_, _) => _ - _);
          let _ = _.map((_, _) => {
            const _ = _.findIndex((_) => _ - _.nPreSelectionWeight < 1e-5);
            return {
              subject: _ && _[_.nTagId],
              _: (6 - _) * 10 + 2 * _ + 0.5,
            };
          });
          if (_.length == 0) return null;
          const _ = _.map((_, _) =>
            (0, _.jsx)(
              "li",
              {
                children: _.subject,
              },
              _,
            ),
          );
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().SpidergraphContainer, _().HalfwidthColumn),
            children: [
              (0, _.jsx)("div", {
                className: _().SectionLabel,
                children: _._.Localize("#YIR_Spider_Title"),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().SectionDesc, _.SectionDesc),
                children: _("#YIR_Spider_Desc", _.GetYear()),
              }),
              (0, _.jsx)("div", {
                className: _().GraphBox,
                children: (0, _.jsx)(_._, {
                  className: _().SpiderResponsiveContainer,
                  children: (0, _.jsxs)(_._, {
                    _: "50%",
                    _: "50%",
                    outerRadius: "70%",
                    data: _,
                    children: [
                      (0, _.jsx)(_._, {}),
                      (0, _.jsx)(_._, {
                        tick: (0, _.jsx)(_, {
                          bNumberedLabels: _,
                        }),
                        dataKey: "subject",
                      }),
                      (0, _.jsx)(_._, {
                        name: "tempRadar",
                        dataKey: "A",
                        stroke: "#8884d8",
                        fill: "#8884d8",
                        fillOpacity: 1,
                        animationDuration: 2e3,
                        isAnimationActive: !0,
                      }),
                    ],
                  }),
                }),
              }),
              _ &&
                (0, _.jsxs)("ol", {
                  className: _().RadarChartLegend,
                  children: [" ", _, " "],
                }),
            ],
          });
        }
        function _() {
          const [_, _] = (0, _.useState)(!1);
          return (
            (0, _.useEffect)(
              () => _((0, _._)() || window.innerWidth <= 300),
              [],
            ),
            _
          );
        }
        function _(_) {
          const {
            payload: _,
            _: _,
            verticalAnchor: _,
            bNumberedLabels: _,
            ..._
          } = _;
          return _
            ? (0, _.jsx)("text", {
                _: _,
                ..._,
                children: (0, _.jsx)("tspan", {
                  _: _,
                  _: "20px",
                  children: _.index + 1,
                }),
              })
            : (0, _.jsx)("svg", {
                _: _ - 85,
                ..._,
                width: "170px",
                height: "100%",
                children: (0, _.jsx)("foreignObject", {
                  className: _().RadarTextContainer,
                  _: "20px",
                  width: "170",
                  height: "150",
                  children: (0, _.jsx)("div", {
                    className: _().RadarText,
                    children: _.value,
                  }),
                }),
              });
        }
        function _(_) {
          let _ = _.GetRawStats().playtime_stats?.by_numbers;
          return _
            ? [
                ["#YIR_ByTheNum_Friends", _.friends_added || 0],
                ["#YIR_ByTheNum_GiftsSent", _.gifts_sent || 0],
                ["#YIR_ByTheNum_AwardsGiven", _.loyalty_reactions || 0],
                ["#YIR_ByTheNum_Badges", _.badges_earned || 0],
                ["#YIR_ByTheNum_Screenshots", _.screenshots_shared || 0],
                ["#YIR_ByTheNum_Reviews", _.written_reviews || 0],
                ["#YIR_ByTheNum_Posts", _.forum_posts || 0],
                ["#YIR_ByTheNum_Guides", _.guides_submitted || 0],
                ["#YIR_ByTheNum_GuideSubs", _.guide_subscribers || 0],
                ["#YIR_ByTheNum_Workshops", _.workshop_contributions || 0],
                [
                  "#YIR_ByTheNum_WorkshopSubscribers",
                  _.workshop_subscribers || 0,
                ],
                [
                  "#YIR_ByTheNum_WorkshopSubscriptions",
                  _.workshop_subscriptions || 0,
                ],
              ].sort((_, _) => _[1] - _[1])
            : [];
        }
        function _(_) {
          const { userYearInReview: _ } = _;
          let _ = _(_);
          if (_.length == 0) return null;
          let _ = _.map(([_, _]) =>
            (0, _.jsx)(
              _,
              {
                label: _._.Localize(_),
                value: _,
              },
              _,
            ),
          );
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().NumbersContainer, _().HalfwidthColumn),
            children: [
              (0, _.jsx)("div", {
                className: _().SectionLabel,
                children: _._.Localize("#YIR_ByTheNum_Title"),
              }),
              (0, _.jsx)("div", {
                className: _().NumbersRowsCnt,
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          let { label: _, value: _ } = _,
            _ = _ ? (0, _._)(_) : "-";
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().NumbersRow, _ == 0 && _().Disabled),
            children: [
              (0, _.jsx)("div", {
                className: _().NumbersLabel,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _().FillerDots,
              }),
              (0, _.jsx)("div", {
                className: _().NumbersValue,
                children: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { userYearInReview: _ } = _;
          if (_._.is_support || _._.accountid == _.GetAccountID()) {
            const _ = _.GetSteamID().ConvertTo64BitString(),
              _ = _.GetYear();
            return (0, _.jsxs)(_._, {
              rootMargin: "0px 0px 100% 0px",
              children: [
                (0, _.jsx)(_, {
                  steamid: _,
                  year: _,
                }),
                (0, _.jsx)(_, {
                  steamid: _,
                  year: _,
                }),
              ],
            });
          }
          return null;
        }
        function _(_) {
          const { steamid: _, year: _ } = _,
            _ = (0, _._)(_, !0);
          if (
            _.isLoading ||
            _.data?.is_not_member_of_any_group() ||
            !_.data?.family_group()
          )
            return null;
          const _ = _.data
            .family_group()
            .members()
            .map((_) => _.steamid())
            .filter((_) => !!_ && _ !== _);
          return _.length == 0
            ? null
            : (0, _.jsxs)("div", {
                className: _.FriendsSharedSection,
                children: [
                  (0, _.jsx)("div", {
                    className: _.FriendsSharedSectionTitle,
                    children: _._.Localize("#YIR_FamilyShared"),
                  }),
                  (0, _.jsx)("div", {
                    className: _.FriendsGrid,
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          steamid: _,
                          year: _,
                          ePrivacy: _,
                          bPrivacyOverride: !1,
                        },
                        "family_" + _,
                      ),
                    ),
                  }),
                ],
              });
        }
        const _ = 50;
        function _(_) {
          const { steamid: _, year: _ } = _,
            { isLoading: _, data: _ } = _(_, _),
            _ = (0, _.useMemo)(
              () =>
                _
                  ? [..._]
                      .sort(
                        (_, _) =>
                          (_.rt_privacy_updated ?? 0) -
                          (_.rt_privacy_updated ?? 0),
                      )
                      .slice(0, _)
                  : [],
              [_],
            ),
            _ = (0, _.useMemo)(
              () => _.map((_) => new _._(_.steamid).GetAccountID()),
              [_],
            ),
            _ = (0, _._)(_);
          if (_ || _?.length == 0 || !_) return null;
          const _ = new Map();
          for (const _ of _)
            !_ || !_.steamid || _.set(_.steamid, _.persona_name ?? "");
          return (
            _.sort((_, _) => _.get(_.steamid).localeCompare(_.get(_.steamid))),
            (0, _.jsxs)("div", {
              className: _.FriendsSharedSection,
              children: [
                (0, _.jsx)("div", {
                  className: _.FriendsSharedSectionTitle,
                  children: _._.Localize("#YIR_FriendShared"),
                }),
                (0, _.jsx)(_._, {
                  className: _.FriendsGrid,
                  "flow-children": "grid",
                  children: _.slice(0, _).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        steamid: _.steamid,
                        ePrivacy: _.privacy_state,
                        year: _,
                        bPrivacyOverride: _.privacy_override,
                      },
                      "friendshare_" + _.steamid + "_" + _,
                    ),
                  ),
                }),
                !!_._.is_support &&
                  (0, _.jsx)("div", {
                    className: _.ValveOnlyBackground,
                    children: _._.Localize("#YIR_FriendShared_support"),
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { steamid: _, year: _, ePrivacy: _ } = _,
            _ = _();
          return (0, _.jsx)(_._, {
            href: `${_._.STORE_BASE_URL}replay/${_}/${_}`,
            className: (0, _._)({
              [_.IsPrivate]: _ == _,
              [_.FriendCtn]: !0,
              [_.FriendCtn]: !0,
            }),
            children: (0, _.jsx)(_._, {
              accountID: _._.InitFromString(_).GetAccountID(),
              bHideWhenNotAvailable: !0,
              bLink: !1,
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return `${_._.STORE_CDN_URL}public/images/yearinreview/${_}`;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 100;
        var _ = ((_) => (
          (_.windows = "windows"),
          (_.linux = "linux"),
          (_.deck = "deck"),
          (_.mac = "mac"),
          (_._ = "vr"),
          _
        ))(_ || {});
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _.GetPlayTimeStats(),
            _ = _.total_stats,
            _ = _.game_summary,
            _ = _(),
            _ = _(),
            _ = (0, _.useMemo)(() => {
              const _ = new Array();
              return (
                typeof _.windows_playtime_percentagex100 == "number" &&
                  _.windows_playtime_percentagex100 > _ &&
                  _.push({
                    _: "windows",
                    name: _._.Localize("#YIR_Platfrom_windows"),
                    value: _.windows_playtime_percentagex100,
                  }),
                typeof _.linux_playtime_percentagex100 == "number" &&
                  _.linux_playtime_percentagex100 > _ &&
                  _.push({
                    _: "linux",
                    name: _._.Localize("#YIR_Platfrom_linux"),
                    value: _.linux_playtime_percentagex100,
                  }),
                typeof _.macos_playtime_percentagex100 == "number" &&
                  _.macos_playtime_percentagex100 > _ &&
                  _.push({
                    _: "mac",
                    name: _._.Localize("#YIR_Platfrom_macos"),
                    value: _.macos_playtime_percentagex100,
                  }),
                typeof _.vr_playtime_percentagex100 == "number" &&
                  _.vr_playtime_percentagex100 > _ &&
                  _.push({
                    _: "vr",
                    name: _._.Localize("#YIR_Platfrom_vr"),
                    value: _.vr_playtime_percentagex100,
                  }),
                typeof _.deck_playtime_percentagex100 == "number" &&
                  _.deck_playtime_percentagex100 > _ &&
                  _.push({
                    _: "deck",
                    name: _._.Localize("#YIR_Platfrom_deck"),
                    value: _.deck_playtime_percentagex100,
                  }),
                _
              );
            }, [_]),
            _ = (0, _.useMemo)(() => {
              const _ = new Array();
              return (
                typeof _.windows_playtime_percentagex100 == "number" &&
                  _.windows_playtime_percentagex100 > _ &&
                  _.push({
                    _: "windows",
                    name: _._.Localize("#YIR_Platfrom_windows"),
                    value: _.filter((_) => _.played_windows).length,
                  }),
                typeof _.linux_playtime_percentagex100 == "number" &&
                  _.linux_playtime_percentagex100 > _ &&
                  _.push({
                    _: "linux",
                    name: _._.Localize("#YIR_Platfrom_linux"),
                    value: _.filter((_) => _.played_linux).length,
                  }),
                typeof _.macos_playtime_percentagex100 == "number" &&
                  _.macos_playtime_percentagex100 > _ &&
                  _.push({
                    _: "mac",
                    name: _._.Localize("#YIR_Platfrom_macos"),
                    value: _.filter((_) => _.played_mac).length,
                  }),
                typeof _.vr_playtime_percentagex100 == "number" &&
                  _.vr_playtime_percentagex100 > _ &&
                  _.push({
                    _: "vr",
                    name: _._.Localize("#YIR_Platfrom_vr"),
                    value: _.filter((_) => _.played_vr).length,
                  }),
                typeof _.deck_playtime_percentagex100 == "number" &&
                  _.deck_playtime_percentagex100 > _ &&
                  _.push({
                    _: "deck",
                    name: _._.Localize("#YIR_Platfrom_deck"),
                    value: _.filter((_) => _.played_deck).length,
                  }),
                _
              );
            }, [_, _]);
          if (_.length < 2) return null;
          const _ = _(_);
          return (0, _.jsx)(_, {
            className: (0, _._)(_().PlatformChartsCtn, _.PlatformChartsCtn),
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().YearInReviewContent, _().PlatformSpacing),
              children: [
                (0, _.jsx)("div", {
                  className: _().SectionTitle,
                  children: _("#YIR_Platform"),
                }),
                (0, _.jsxs)("div", {
                  className: _().PlatformChartsRow,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().PieCtn,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().GraphTitle,
                          children: _._.Localize("#YIR_Platfrom_playtime"),
                        }),
                        (0, _.jsx)(_._, {
                          width: "90%",
                          aspect: 1,
                          children: (0, _.jsxs)(_._, {
                            children: [
                              (0, _.jsx)(_._, {
                                data: _,
                                dataKey: "value",
                                nameKey: "name",
                                _: "50%",
                                _: "50%",
                                innerRadius: "40%",
                                outerRadius: "80%",
                                fill: "#8884d8",
                                paddingAngle: 1,
                                children: _.map((_, _) =>
                                  (0, _.jsx)(
                                    _._,
                                    {
                                      fill: _[`pie_${_._}`],
                                    },
                                    `cell-${_}`,
                                  ),
                                ),
                              }),
                              (0, _.jsx)(_._, {
                                content: (_) =>
                                  (0, _.jsx)(_, {
                                    active: _.active,
                                    payload: _.payload,
                                  }),
                              }),
                              (0, _.jsx)(_._, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().PieCtn,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().GraphTitle,
                          children: _._.Localize("#YIR_Platfrom_games"),
                        }),
                        (0, _.jsx)(_._, {
                          width: "90%",
                          aspect: 1,
                          children: (0, _.jsxs)(_._, {
                            children: [
                              (0, _.jsx)(_._, {
                                data: _,
                                dataKey: "value",
                                nameKey: "name",
                                _: "50%",
                                _: "50%",
                                innerRadius: "40%",
                                outerRadius: "80%",
                                fill: "#82ca9d",
                                paddingAngle: 1,
                                children: _.map((_, _) =>
                                  (0, _.jsx)(
                                    _._,
                                    {
                                      fill: _[`pie_${_._}`],
                                    },
                                    `cell-${_}`,
                                  ),
                                ),
                              }),
                              (0, _.jsx)(_._, {
                                content: (_) =>
                                  (0, _.jsx)(_, {
                                    active: _.active,
                                    payload: _.payload,
                                  }),
                              }),
                              (0, _.jsx)(_._, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (_.bDeck || _.bVR) &&
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().SectionTitle,
                      _().PlatformDetailsSetup,
                    ),
                    children: _("#YIR_Platform_DiveIn"),
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const { active: _, payload: _ } = _;
          if (_ && _ && _.length) {
            const _ = _[0].value;
            return (0, _.jsxs)(_._, {
              children: [
                _[0].name,
                ": ",
                _._.Localize("#YIR_Percent_Playtime", _(_)),
              ],
            });
          }
          return null;
        }
        function _(_) {
          const { active: _, payload: _ } = _;
          if (_ && _ && _.length) {
            const _ = _[0].value,
              _ = _[0].name;
            return (0, _.jsx)(_._, {
              children: _._.Localize(
                _ === 1
                  ? "#YIR_Platfrom_gamesplays_tooltip"
                  : "#YIR_Platfrom_gamesplays_tooltip_Plural",
                (0, _._)(_),
                _,
              ),
            });
          }
          return null;
        }
        const _ = 100;
        function _(_) {
          const { userYearInReview: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                userYearInReview: _,
              }),
              (0, _.jsx)(_, {
                userYearInReview: _,
              }),
            ],
          });
        }
        function _(_) {
          const { userYearInReview: _, strClassName: _, nYear: _ } = _,
            _ = _.GetRawStats(),
            _ = _(),
            _ = void 0,
            _ = _("#YIR_TopGames_deck_subtitle"),
            {
              nTotalGames: _,
              nTotalSessions: _,
              nTotalPercentage: _,
            } = (0, _.useMemo)(() => _(_, "deck"), [_]),
            { rgResults: _ } = (0, _.useMemo)(() => _(_, "deck", 5, _), [_, _]),
            _ = Number(Math.round(_ / 100).toFixed(0));
          let _ = _("#YIR_TopGames_deck_new");
          _ > 50 && (_ = _("#YIR_TopGames_deck_mostly"));
          const _ = (0, _.useRef)(null),
            _ = (0, _._)((_) => {
              _.current &&
                _.current.style.setProperty(
                  "--contentSize",
                  `${_.contentRect.width}px`,
                );
            }),
            [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              _ && _(!0);
            }, []),
            _ = (0, _.jsx)(_, {
              endValue: _,
              duration: 2e3,
              startAnimation: _,
            }),
            _ = (0, _.jsx)(_, {
              endValue: _,
              duration: 2e3,
              startAnimation: _,
            }),
            _ = (0, _.useRef)(null);
          return (
            (0, _._)(_),
            (0, _.jsxs)("div", {
              className: (0, _._)(
                _,
                _().PlatformContentsCtn,
                _().DeckContainer,
              ),
              ref: _,
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(_().SectionTitle, _().SectionTitle),
                  children: _,
                }),
                (0, _.jsxs)("div", {
                  className: _().ScreenContainer,
                  ref: _,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().PlatformDataContainer,
                      children: [
                        (0, _.jsxs)(_._, {
                          onVisibilityChange: _,
                          className: (0, _._)(
                            _().YearInReviewContent,
                            _().StatsRow,
                            _().StatsRow,
                          ),
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().StatBlock,
                              children: [
                                (0, _.jsx)("div", {
                                  className: _().BigNum,
                                  children: _,
                                }),
                                (0, _.jsx)("div", {
                                  className: _().StatDescription,
                                  children: _._.LocalizePlural(
                                    "#YIR_NewLine_Games",
                                    _,
                                  ),
                                }),
                              ],
                            }),
                            (0, _.jsxs)("div", {
                              className: _().StatBlock,
                              children: [
                                (0, _.jsx)("div", {
                                  className: _().BigNum,
                                  children: _,
                                }),
                                (0, _.jsx)("div", {
                                  className: _().StatDescription,
                                  children: _._.LocalizePlural(
                                    "#YIR_NewLine_Session",
                                    _,
                                  ),
                                }),
                              ],
                            }),
                            (0, _.jsx)(_, {
                              percentVal: _,
                              subToken: "#YIR_NewLine",
                            }),
                          ],
                        }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _().SectionSubTitle,
                              _().SectionSubTitle,
                            ),
                            children: _,
                          }),
                        (0, _.jsx)(_, {
                          className: _().SteamDeckGameCapRow,
                          children: (0, _.jsx)(_, {
                            rgGamePercentages: _,
                            category: "deck",
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("video", {
                      className: _().Video,
                      poster:
                        "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg",
                      playsInline: !0,
                      loop: !0,
                      muted: !0,
                      autoPlay: !0,
                      controls: !1,
                      ref: _,
                      children: [
                        (0, _.jsx)("source", {
                          src: "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.webm",
                          type: "video/webm",
                        }),
                        (0, _.jsx)("source", {
                          src: "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.mp4",
                          type: "video/mp4",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(_().Disclaimer, _().Disclaimer),
                  children: _,
                }),
              ],
            })
          );
        }
        function _(_) {
          return {
            bDeck:
              typeof _.deck_playtime_percentagex100 == "number" &&
              _.deck_playtime_percentagex100 > _,
            bVR:
              typeof _.vr_playtime_percentagex100 == "number" &&
              _.vr_playtime_percentagex100 > _,
          };
        }
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _.GetYear(),
            _ = _(),
            _ = _.GetPlayTimeStats().total_stats,
            _ =
              _.controller_playtime_percentagex100 +
              _.deck_playtime_percentagex100;
          let _ = !1;
          _ > 7e3 && (_ = !0);
          const _ = _(_);
          return (0, _.jsxs)(_._, {
            rootMargin: "0px 0px 100% 0px",
            children: [
              !!_.bDeck &&
                (0, _.jsx)(_, {
                  className: (0, _._)(_().Section, _().Deck),
                  children: (0, _.jsx)(_, {
                    userYearInReview: _,
                    nYear: _,
                  }),
                }),
              !!_.bVR &&
                (0, _.jsx)(_, {
                  className: (0, _._)(_().Section, _()._),
                  children: (0, _.jsx)(_, {
                    category: "vr",
                    userYearInReview: _,
                    bgImageURL: _("vr_background6.webp"),
                    title: _("#YIR_TopGames_vr"),
                    subTitle: void 0,
                  }),
                }),
              _ > 1e3 &&
                (0, _.jsx)(_, {
                  className: (0, _._)(_().Section, _().Controller),
                  children: (0, _.jsx)(_, {
                    category: "controller",
                    userYearInReview: _,
                    title: _(
                      _
                        ? "#YIR_TopGames_controllerMost"
                        : "#YIR_TopGames_controller",
                      _(_),
                    ),
                    subTitle: _(
                      "#YIR_Platform_subtitle_controller",
                      _._.Localize("#YIR_Platfrom_controller_forsubtitle"),
                    ),
                  }),
                }),
              _ >= 2024 &&
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    userYearInReview: _,
                  }),
                }),
            ],
          });
        }
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _(),
            [_, _] = (0, _.useMemo)(
              () => [
                _.GetDemoByPlaytime()
                  .filter(Boolean)
                  .map((_) => _.total_playtime_percentagex100)
                  .reduce((_, _) => _ + _, 0),
                _.GetPlaytestByPlaytime()
                  .filter(Boolean)
                  .map((_) => _.total_playtime_percentagex100)
                  .reduce((_, _) => _ + _, 0),
              ],
              [_],
            );
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ > _ &&
                (0, _.jsxs)(_, {
                  className: (0, _._)(_().Section, _().Demo),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().BG_Demo,
                    }),
                    (0, _.jsx)(_, {
                      category: "demo",
                      userYearInReview: _,
                      title: _("#YIR_TopGames_demo"),
                      subTitleTokenIfMax: "#YIR_TopGames_demoMax",
                    }),
                  ],
                }),
              _ > _ &&
                (0, _.jsxs)(_, {
                  className: (0, _._)(_().Section, _().Playtest),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().BG_Playtest,
                    }),
                    (0, _.jsx)(_, {
                      category: "playtest",
                      userYearInReview: _,
                      title: _("#YIR_TopGames_playtest"),
                      subTitleTokenIfMax: "#YIR_TopGames_playtestMax",
                    }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { userYearInReview: _ } = _;
          if (_()) return null;
          const _ = _.GetPlayTimeStats().playtime_streak;
          return !_ ||
            (typeof _.longest_consecutive_days == "number" &&
              _.longest_consecutive_days < 5)
            ? null
            : (0, _.jsx)(_, {
                ..._,
                longestStreak: _,
              });
        }
        function _(_) {
          const { userYearInReview: _, longestStreak: _ } = _,
            _ = _(),
            _ = _(),
            _ = _(),
            [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              _ && _(!0);
            }, []),
            [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              _ &&
                window.setTimeout(() => {
                  _(!0);
                }, 30);
            }, []),
            [_, _] = _.useState(!1),
            _ = 12,
            _ = _.streak_games.length > _ && !_,
            _ = _
              ? _.streak_games.sort((_, _) => _.appid - _.appid).slice(0, _)
              : _.streak_games.sort((_, _) => _.appid - _.appid),
            _ = _.map((_) => _.appid),
            _ = _.streak_games.length,
            _ = _.longest_consecutive_days ?? 0;
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().StreakCtn,
              _().StreakCtn,
              _().Section,
              _.Section,
            ),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().LongestStreakBgImage,
                  _.LongestStreakBgImage,
                ),
              }),
              (0, _.jsxs)("div", {
                className: _().YearInReviewContent,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().SectionTitle,
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().LongestStreakDailyCount,
                        onVisibilityChange: _,
                        children: _(
                          "#YIR_Longest_Streak_Title",
                          (0, _.jsx)(_, {
                            className: _().LongestStreakNumber,
                            endValue: _,
                            duration: 2e3,
                            startAnimation: _,
                          }),
                        ),
                      }),
                      (0, _.jsxs)(_, {
                        className: _().StreakBarCtn,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().StreakSizeCtn,
                          }),
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _().StreakSizeFullBar,
                              _.StreakSizeFullBar,
                            ),
                          }),
                          (0, _.jsx)("div", {
                            className: (0, _._)({
                              [_().StreakTickCtn]: !0,
                              [_().LargerTicks]: _ < 40,
                            }),
                            children: (0, _.jsx)(_, {
                              nDays: _ - 1,
                            }),
                          }),
                          (0, _.jsx)("div", {
                            className: _().StreakSizeCtn,
                          }),
                        ],
                      }),
                      (0, _.jsxs)(_, {
                        className: _().StreakDates,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().StreakStart,
                            children: _(_.rtime_start ?? 0),
                          }),
                          (0, _.jsx)("div", {
                            className: _().StreakEnd,
                            children: _(
                              (_.rtime_start ?? 0) + _ * 24 * 60 * 60,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)(_._, {
                    onVisibilityChange: _,
                    className: (0, _._)(
                      _().LongestStreakGamesWrapper,
                      _().LongestStreakGamesWrapper,
                    ),
                    children: [
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().CapRowTitle,
                          _ && _().AnimateTitle,
                        ),
                        children: _(
                          _ > 1
                            ? "#YIR_Longest_Streak_Games"
                            : "#YIR_Longest_Streak_Games_Singular",
                          (0, _._)(_),
                        ),
                      }),
                      (0, _.jsx)("div", {
                        className: (0, _._)(_().CapRowCtn),
                        children: (0, _.jsx)(_._, {
                          "flow-children": "grid",
                          className: (0, _._)(
                            _().CapRow,
                            _().LongestStreak,
                            _ && _().AnimateCap,
                          ),
                          children: _.map((_, _) => {
                            const _ = _.GetGameSummaryForApp(_.appid);
                            return (0, _.jsx)(
                              _,
                              {
                                appid: _.appid,
                                index: _,
                                loading: "lazy",
                                rgAppIDs: _,
                                nParentAppID: _?.parent_appid,
                                eChildType: _(_),
                              },
                              "longest_" + _.appid,
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().MoreButtonContainer,
                      children: (0, _.jsx)("a", {
                        href: "#",
                        className: _().ShowMoreBtn,
                        onClick: () => _(!0),
                        children: _._.Localize("#YIR_ShowMore"),
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          if (_?.demo) return _._._;
          if (_?.playtest) return _._._;
        }
        function _(_) {
          const { nDays: _ } = _,
            _ = [];
          if (_ > 0) {
            for (let _ = 0; _ < _ + 2; ++_)
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    className: _().Tick,
                  },
                  "DrawNDivForStreakDays" + _,
                ),
              );
            return (0, _.jsx)(_.Fragment, {
              children: _,
            });
          }
          return null;
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { steamId: _, year: _ } = _,
            _ = _(),
            { rgOtherYears: _ } = _(),
            _ = _();
          return _.length === 0
            ? null
            : (0, _.jsxs)("div", {
                className: _.OtherYearsCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_.OtherYearsHeader, _.OtherYearsHeader),
                    children: _("#YearInReview_OtherYearLinks_Header"),
                  }),
                  (0, _.jsx)("div", {
                    className: (0, _._)(_.OtherYearLinks, _.OtherYearLinks),
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _._,
                        {
                          href: `${_._.STORE_BASE_URL}replay/${_.ConvertTo64BitString()}/${_}?src=${_}`,
                          className: (0, _._)(_.OtherYearLink, _.OtherYearLink),
                          children: _,
                        },
                        _,
                      ),
                    ),
                  }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "0123456789abcdef",
          _ = "bcdfghjkmnpqrtvw";
        function _(_, _, _) {
          return Array.from(_, (_) => {
            const _ = _.indexOf(_);
            return _ >= 0 ? _[_] : _;
          }).join("");
        }
        function _(_) {
          return _ ? _(_.toString(16), _, _) : "";
        }
        function _(_) {
          const _ = _(_.toLowerCase(), _, _).replace(/[^0-9a-f]/g, "");
          return _ ? parseInt(_, 16) : 0;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { steamId: _, nYear: _ } = _,
            _ = _(),
            _ = _();
          if (!_._.logged_in) return null;
          if (!_ && _._.logged_in)
            return (0, _.jsx)(_._, {
              className: (0, _._)(_.SeeRewindButton, _.SeeRewindButton),
              href: `${_._.STORE_BASE_URL}replay/${_._.steamid}/${_}?src=${_}`,
              children: _._.Localize("#YIR_SeeYourRewind"),
            });
          const _ = () => {
            (0, _._)(
              (0, _.jsx)(_, {
                steamId: _,
                nYear: _,
              }),
              window,
              {
                strTitle: _._.Localize("#Button_Share"),
              },
            );
          };
          return (0, _.jsxs)(_._, {
            className: _.YIRShareCtn,
            children: [
              (0, _.jsx)(_, {
                steamId: _,
                nYear: _,
              }),
              (0, _.jsxs)(_._, {
                className: _.ShareButton,
                onActivate: _,
                children: [
                  (0, _.jsx)(_.SYj, {
                    className: (0, _._)(_.ShareIcon),
                  }),
                  (0, _.jsx)("span", {
                    className: (0, _._)(_.ShareText),
                    children: _._.Localize("#Button_Share"),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { steamId: _, nYear: _ } = _,
            [_, _] = (0, _.useState)(""),
            _ = _(_.ConvertTo64BitString(), _),
            { mutateAsync: _ } = _(_.ConvertTo64BitString(), _),
            _ = (0, _.useMemo)(() => _ === _ || _ === _, [_]),
            _ = [
              {
                data: _,
                label: _._.Localize("#YIR_ShareVisbility_Private"),
              },
              {
                data: _,
                label: _._.Localize("#YIR_ShareVisbility_FriendsOnly"),
              },
              {
                data: _,
                label: _._.Localize("#YIR_ShareVisbility_Public"),
              },
            ],
            _ = async (_) => {
              if (_.data !== _) {
                const { eResult: _ } = await _(_.data),
                  _ = _ != _._ ? _(_) : "";
                _ && _(_);
              }
            };
          return (0, _.jsxs)(_._, {
            "flow-children": "column",
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_.PrivacyWarning, _ ? _.Visible : ""),
                children: _
                  ? _._.Localize("#YIR_ShareVisbility")
                  : _._.Localize("#YIR_ShareModal_DisabledShareTtp"),
              }),
              (0, _.jsx)("div", {
                className: _.DropDownSizer,
                children: (0, _.jsx)(_._, {
                  strDropDownButtonClassName: _.DropdownButton,
                  strDropDownClassName: _.DropdownOption,
                  rgOptions: _,
                  selectedOption: _,
                  onChange: _,
                }),
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _.Error,
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          return _ === _._ ? "Servers are busy, please try again later" : "";
        }
        function _(_) {
          return `y${_ % 100}`;
        }
        const _ = "l";
        function _(_) {
          const { closeModal: _, steamId: _, nYear: _ } = _,
            [_, _] = (0, _.useState)(),
            _ = _(_.ConvertTo64BitString(), _),
            _ = (0, _.useMemo)(() => _ === _ || _ === _, [_]),
            [_, _] = (0, _.useState)((0, _.sfN)(_._.LANGUAGE)),
            _ = (0, _.useMemo)(() => (0, _.LgB)(_), [_]),
            _ = _(_.GetAccountID()),
            _ = `https://s.team/${_(_)}/${_}`,
            _ = (0, _.useMemo)(() => {
              const _ = new URL(_);
              return _.searchParams.set(_, _), _.href;
            }, [_, _]),
            _ = () => {
              _(!0);
            };
          return _
            ? (0, _.jsx)(_._, {
                eventLink: _,
                closeModal: _,
              })
            : (0, _.jsx)(_._, {
                strDescription: "",
                strTitle: _._.Localize("#YIR_ShareModal_Title"),
                onCancel: _,
                onOK: _,
                bAlertDialog: !0,
                modalClassName: _.ShareModalDialogCtn,
                children: (0, _.jsxs)("div", {
                  className: _.ShareModal,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.ShareLanguagePicker,
                      children: (0, _.jsx)("div", {
                        className: _.LangaugeDropdown,
                        children: (0, _.jsx)(_._, {
                          selectedLang: _,
                          fnOnLanguageChanged: _,
                          fnFilterLanguage: (_) => _ !== _.X51,
                        }),
                      }),
                    }),
                    (0, _.jsx)(_, {
                      language: _,
                      steamId: _,
                      nYear: _,
                      shareUrl: _,
                    }),
                    (0, _.jsxs)("div", {
                      className: _.FooterCtn,
                      children: [
                        (0, _.jsx)(_, {
                          steamId: _,
                          nYear: _,
                        }),
                        (0, _.jsx)("div", {
                          className: (0, _._)(_.VisBorder, !_ && _.Disabled),
                          children: _._.IN_MOBILE_WEBVIEW
                            ? (0, _.jsx)(_, {
                                bCanShare: _,
                                shareUrl: _,
                                shareOnSteamActivityFeed: _,
                              })
                            : (0, _.jsx)(_, {
                                nYear: _,
                                bCanShare: _,
                                shareUrl: _,
                                shortAccountCode: _,
                                language: _,
                                shareOnSteamActivityFeed: _,
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function _(_) {
          const { language: _, steamId: _, nYear: _, shareUrl: _ } = _,
            [_, _] = (0, _.useState)(0),
            [_, _] = (0, _.useState)(!1),
            { isLoading: _, data: _ } = _(_.ConvertTo64BitString(), _, _),
            _ = _ ? _.length - 1 : 0,
            _ = `${_._.BASE_URL_SHARED_CDN}social_sharing/`,
            _ = (_) => {
              _ > 0 && (_(_ - 1), _.stopPropagation());
            },
            _ = (_) => {
              _ < _ && (_(_ + 1), _.stopPropagation());
            },
            _ = (_) => {
              _(!0), _.stopPropagation();
            },
            _ = (_) => {
              _(!1), _.stopPropagation();
            };
          return (
            (0, _._)("ArrowLeft", _),
            (0, _._)("Left", _),
            (0, _._)("ArrowRight", _),
            (0, _._)("Right", _),
            _
              ? (0, _.jsx)("div", {
                  className: (0, _._)(_.CarouselCtn, _.LoadingCtn),
                  children: (0, _.jsx)(_._, {
                    position: "center",
                  }),
                })
              : _
                ? (0, _.jsxs)("div", {
                    className: _.CarouselCtn,
                    children: [
                      _ &&
                        (0, _.jsx)(_, {
                          carouselIndex: _,
                          endPreviewImage: _,
                          onMoveLeft: _,
                          onMoveRight: _,
                          name: _[_].name,
                          url: `${_}${_[_].url_path}`,
                          maxIndex: _,
                        }),
                      (0, _.jsxs)("div", {
                        className: _.ImageArrowCtn,
                        children: [
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _.Arrow,
                              _.Left,
                              _ === 0 && _.ArrowDisabled,
                            ),
                            onClick: _,
                            children: (0, _.jsx)(_.V5W, {
                              angle: 270,
                            }),
                          }),
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _.Arrow,
                              _.Right,
                              _ === _ && _.ArrowDisabled,
                            ),
                            onClick: _,
                            children: (0, _.jsx)(_.V5W, {
                              angle: 90,
                            }),
                          }),
                          (0, _.jsxs)("div", {
                            className: _.ImagesCtn,
                            children: [
                              (0, _.jsx)("div", {
                                className: (0, _._)(_.Peek, _.LeftPeak),
                                children:
                                  _ !== 0 &&
                                  (0, _.jsx)("img", {
                                    className: _.PeakImg,
                                    src: `${_}${_[_ - 1].url_path}`,
                                  }),
                              }),
                              (0, _.jsx)("div", {
                                className: _.CenterImage,
                                children: (0, _.jsxs)("div", {
                                  className: _.ImgAndPreviewCtn,
                                  children: [
                                    (0, _.jsx)("div", {
                                      onClick: _,
                                      className: _.PreviewMask,
                                      children: _._.Localize(
                                        "#YIR_ShareModal_FullscreenPreview",
                                      ),
                                    }),
                                    (0, _.jsx)("img", {
                                      className: _.CenterImg,
                                      src: `${_}${_[_].url_path}`,
                                    }),
                                  ],
                                }),
                              }),
                              (0, _.jsx)("div", {
                                className: (0, _._)(_.Peek, _.RightPeak),
                                children:
                                  _ !== _ &&
                                  (0, _.jsx)("img", {
                                    className: _.PeakImg,
                                    src: `${_}${_[_ + 1].url_path}`,
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      _._.IN_MOBILE_WEBVIEW
                        ? (0, _.jsx)(_, {
                            imageUrl: `${_}${_[_].url_path}`,
                            shareUrl: _,
                          })
                        : _._.IN_CLIENT
                          ? null
                          : (0, _.jsx)(_, {
                              imageUrl: `${_}${_[_].url_path}`,
                            }),
                      (0, _.jsx)("div", {
                        className: _.CarouselHintCtn,
                        children: _.map((_, _) =>
                          (0, _.jsx)(
                            "div",
                            {
                              className: (0, _._)(
                                _.CarouselHint,
                                _ === _ ? _.ActiveHint : null,
                              ),
                            },
                            `${_}_hint`,
                          ),
                        ),
                      }),
                      (0, _.jsx)("div", {
                        className: _.FormatHint,
                        children: _._.Localize(
                          `#YIR_ShareModal_ImageCaption_${_[_].name}`,
                        ),
                      }),
                    ],
                  })
                : (0, _.jsx)("div", {
                    className: (0, _._)(_.CarouselCtn, _.LoadingCtn),
                    children: (0, _.jsx)("div", {
                      children: _._.Localize(
                        "#YIR_ShareModal_FailedToGenerateImages",
                      ),
                    }),
                  })
          );
        }
        function _(_) {
          const {
            carouselIndex: _,
            maxIndex: _,
            onMoveLeft: _,
            onMoveRight: _,
            endPreviewImage: _,
            name: _,
            url: _,
          } = _;
          return (
            (0, _._)("Escape", _),
            (0, _._)("Esc", _),
            (0, _.jsx)("div", {
              className: _.PreviewImageCtn,
              children: (0, _.jsx)("div", {
                className: _.PreviewClickCtn,
                onClick: _,
                children: (0, _.jsxs)("div", {
                  className: _.PreviewAndIconCtn,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.CloseIcon,
                      children: (0, _.jsx)(_.sED, {}),
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _.Arrow,
                        _.Left,
                        _ === 0 && _.ArrowDisabled,
                      ),
                      onClick: _,
                      children: (0, _.jsx)(_.V5W, {
                        angle: 270,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _.Arrow,
                        _.Right,
                        _ === _ && _.ArrowDisabled,
                      ),
                      onClick: _,
                      children: (0, _.jsx)(_.V5W, {
                        angle: 90,
                      }),
                    }),
                    (0, _.jsx)("img", {
                      className: _[`PreviewImage_${_}`],
                      src: _,
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function _(_) {
          const _ = () => {
            fetch(_.imageUrl)
              .then((_) => _.blob())
              .then((_) => URL.createObjectURL(_))
              .then((_) => {
                const _ = document.createElement("a");
                (_.href = _),
                  (_.download = ""),
                  document.body.appendChild(_),
                  _.click(),
                  document.body.removeChild(_);
              });
          };
          return (0, _.jsxs)("div", {
            className: _.InteractButton,
            onClick: _,
            children: [
              (0, _.jsx)(_.MQO, {
                className: _.InteractButtonIcon,
              }),
              (0, _.jsx)("span", {
                className: (0, _._)(_.InteractButtonText),
                children: _._.Localize("#YIR_ShareModal_SaveImage"),
              }),
            ],
          });
        }
        function _(_) {
          const { imageUrl: _, shareUrl: _ } = _,
            _ = () => {
              const _ = Reflect.get(window, "ReactNativeWebView");
              if (_?.postMessage) {
                const _ = {
                  event_name: "shareimage",
                  link: _,
                  url: _,
                  subject: _._.Localize("#YIR_ShareModal_MobileSubject"),
                  message: _,
                  title: _._.Localize("#YIR_ShareModal_MobileMessage"),
                };
                _.postMessage(JSON.stringify(_));
                return;
              }
            };
          return (0, _.jsxs)("div", {
            className: _.InteractButton,
            onClick: _,
            children: [
              (0, _.jsx)(_.SYj, {
                className: _.InteractButtonIcon,
              }),
              (0, _.jsx)("span", {
                className: (0, _._)(_.InteractButtonText),
                children: _._.Localize("#YIR_ShareModal_ShareImage"),
              }),
            ],
          });
        }
        function _(_) {
          const {
              bCanShare: _,
              shareUrl: _,
              shortAccountCode: _,
              language: _,
              nYear: _,
              shareOnSteamActivityFeed: _,
            } = _,
            [_, _] = (0, _.useState)(!1),
            _ = () => {
              navigator.clipboard.writeText(_), _(!0);
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: _.ShareURLTitle,
                children: _._.Localize("#YIR_ShareModal_YourLink"),
              }),
              (0, _.jsxs)("div", {
                className: _.ShareURLCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _.ShareShortUrl,
                    children: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_.ShareLinkButton),
                    onClick: _,
                    children: [
                      (0, _.jsx)(_.SYj, {
                        className: _.ShareLinkIcon,
                      }),
                      (0, _.jsx)("span", {
                        className: (0, _._)(_.ShareLinkText),
                        children: _._.Localize(
                          _
                            ? "#YIR_ShareModal_CopyLink_Success"
                            : "#YIR_ShareModal_CopyLink",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_.SocialButtons, _.SteamButtons),
                children: [
                  (0, _.jsxs)("div", {
                    onClick: _,
                    className: (0, _._)(_.ShareLinkButton, _.FeedBtn),
                    children: [
                      (0, _.jsx)(_.Qte, {
                        className: _.ShareLinkIcon,
                      }),
                      (0, _.jsx)("span", {
                        className: (0, _._)(_.ShareLinkText),
                        children: _._.Localize(
                          "#YIR_ShareModal_ShareOnFriendsActivity",
                        ),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("a", {
                    href: `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/edit/showcases`,
                    className: (0, _._)(_.ShareLinkButton, _.FeedBtn),
                    children: [
                      (0, _.jsx)(_.KJW, {
                        className: _.ShareLinkIcon,
                      }),
                      (0, _.jsx)("span", {
                        className: (0, _._)(_.ShareLinkText),
                        children: _._.Localize("#YIR_ShareModal_AddShowcase"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { bCanShare: _, shareUrl: _, shareOnSteamActivityFeed: _ } = _,
            _ = () => {
              const _ = Reflect.get(window, "ReactNativeWebView");
              if (_?.postMessage) {
                const _ = {
                  event_name: "share",
                  link: _,
                  url: _,
                  subject: _._.Localize("#YIR_ShareModal_MobileSubject"),
                  message: _._.Localize("#YIR_ShareModal_MobileMessage"),
                  title: _._.Localize("#YIR_ShareModal_MobileMessage"),
                };
                _.postMessage(JSON.stringify(_));
                return;
              }
            };
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)("div", {
              className: _.MobileCtn,
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(_.ShareLinkButton, !_ && _.Disabled),
                  onClick: _,
                  children: [
                    (0, _.jsx)(_.SYj, {
                      className: _.ShareLinkIcon,
                    }),
                    (0, _.jsx)("span", {
                      className: (0, _._)(_.ShareLinkText),
                      children: _._.Localize("#YIR_ShareModal_ShareLink"),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  onClick: _,
                  className: (0, _._)(_.ShareLinkButton, !_ && _.Disabled),
                  children: [
                    (0, _.jsx)(_.Qte, {
                      className: _.ShareLinkIcon,
                    }),
                    (0, _.jsx)("span", {
                      className: (0, _._)(_.ShareLinkText),
                      children: _._.Localize(
                        "#YIR_ShareModal_ShareOnFriendsActivity",
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          return _ >= 2024;
        }
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _.GetYear(),
            _ = _.GetPlayTimeStats().total_stats,
            _ = _.GetPlayTimeStats().demos_played || 0,
            _ = _.GetPlayTimeStats().playtests_played || 0,
            _ = _.GetFilteredGameSummary(),
            _ = _.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            _ = _.filter((_) => _.new_this_year).length || 0,
            _ = _.GetPlayTimeStats().playtime_streak,
            _ = _.GetTopGamesShown(),
            _ = _(),
            _ = (0, _.useMemo)(() => _.slice(0, 5), [_]),
            _ = (0, _.useMemo)(() => _.map((_) => _.appid), [_]),
            { data: _ } = _(_),
            _ = _.map((_, _) =>
              _?.has(_.appid)
                ? (0, _.jsx)(
                    _,
                    {
                      gameStat: _,
                      gridClass: `Game${_}`,
                    },
                    `${_}_${_.appid}`,
                  )
                : null,
            ).filter((_) => _ !== null),
            _ = [
              _(_, _),
              _(_, _),
              _(
                _,
                _,
                _(_) ? _.GetPreviousYearSummary()?.longest_streak : void 0,
              ),
            ].filter((_) => _ !== null),
            _ = (0, _.jsx)(
              _,
              {
                rgGamesLength: _.length,
                nNewGames: _,
                nDemoPlayed: _,
                nPlaytestPlayed: _,
                nYear: _.GetYear(),
                nPreviousYearsGames: _(_)
                  ? _.GetPreviousYearSummary()?.games_played
                  : void 0,
              },
              "overview",
            );
          return (0, _.jsx)(_, {
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().YearInReviewContent, _().SummaryArea),
              children: [
                (0, _.jsx)(_, {
                  rgGamesLength: _.length,
                  nNewGames: _,
                  totalAchievementUnlocked: _,
                  nTotalPlaytimeSeconds: _.total_playtime_seconds || 0,
                  nTotalPercentagePlaytimex100: _.total_playtime_percentagex100,
                }),
                _.length !== 1 &&
                  (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsxs)("div", {
                      className: _().SummaryGridCtn,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().SectionSubTitle,
                          children: _("#YIR_YourSummary_SubTitle"),
                        }),
                        (0, _.jsx)(_, {
                          overview: _,
                          statFillers: _,
                          gameFillers: _,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          });
        }
        function _(_) {
          let { statFillers: _, gameFillers: _, overview: _ } = _;
          return _.length > 2 && _.length > 1
            ? (0, _.jsx)("div", {
                className: _().SummaryGridStandard,
                children: [_, _[0], _[1], _[0], _[1], _[2]],
              })
            : _.length > 1 && _.length > 2
              ? (0, _.jsx)("div", {
                  className: _().SummaryGridStandard,
                  children: [_, _[1], _[2], _[0], _[0], _[1]],
                })
              : _.length == 1 && _.length > 3
                ? (0, _.jsx)("div", {
                    className: _().SummaryGridStandard,
                    children: [_, _[0], _[0], _[1], _[2], _[3]],
                  })
                : _.length > 1
                  ? (0, _.jsx)("div", {
                      className: _().SummaryGridSparse,
                      children: [_, _[0], _[1]],
                    })
                  : null;
        }
        function _(_, _) {
          return _ > 0
            ? (0, _.jsx)(
                _,
                {
                  userYearInReview: _,
                },
                "totalAchievements",
              )
            : null;
        }
        function _(_, _, _) {
          return _ &&
            typeof _.longest_consecutive_days == "number" &&
            typeof _ == "number" &&
            _.longest_consecutive_days <= 1 &&
            _ <= 1
            ? null
            : _ &&
                typeof _.longest_consecutive_days == "number" &&
                _.longest_consecutive_days > 0 &&
                !_()
              ? (0, _.jsx)(
                  _,
                  {
                    oLongestStreak: _,
                    nYear: _,
                    nPrevLongestStreamDays: _,
                  },
                  "longestStreak",
                )
              : null;
        }
        const _ = 1e3;
        function _(_, _) {
          const _ =
              _.controller_playtime_percentagex100 +
              _.deck_playtime_percentagex100,
            _ =
              _.total_playtime_percentagex100 -
              _.controller_playtime_percentagex100 -
              _.vr_playtime_percentagex100 -
              _.deck_playtime_percentagex100;
          return _ < _ || _ < _
            ? null
            : (0, _.jsx)(
                _,
                {
                  oTotalStats: _,
                  nYear: _,
                },
                "hardwareTime",
              );
        }
        function _(_) {
          const {
              rgGamesLength: _,
              nNewGames: _,
              totalAchievementUnlocked: _,
              nTotalPlaytimeSeconds: _,
              nTotalPercentagePlaytimex100: _,
            } = _,
            _ = _();
          let _;
          return (
            _ > 50 && _ > 100
              ? (_ = _("#YIR_YourSummary_GamesTonNewAchievements"))
              : _ > 20 && _ > 100
                ? (_ = _("#YIR_YourSummary_GamesNewAchievements"))
                : _ > 20 && _ > 36e4
                  ? (_ = _("#YIR_YourSummary_GamesNew"))
                  : _ > 10 && _ < 5
                    ? (_ = _("#YIR_YourSummary_GamesManyTriedNew"))
                    : _ > 10
                      ? (_ = _("#YIR_YourSummary_GamesMany"))
                      : _ > 1 &&
                          _ < 5 &&
                          (_ > 36e4 ||
                            (_ == 0 && typeof _ == "number" && _ > 5e3))
                        ? (_ = _("#YIR_YourSummary_HoursManyTriedNew"))
                        : _ < 2 && _ > 36e4
                          ? (_ = _("#YIR_YourSummary_HoursManySingleGame"))
                          : _ < 2
                            ? (_ = _("#YIR_YourSummary_SingleGame"))
                            : _ < 5
                              ? (_ = _("#YIR_YourSummary_GamesFew"))
                              : _ > 36e4
                                ? (_ = _("#YIR_YourSummary_HoursMany"))
                                : (_ = null),
            (0, _.jsx)("div", {
              className: _().SectionTitle,
              children: _,
            })
          );
        }
        function _(_) {
          const _ = _(),
            {
              rgGamesLength: _,
              nNewGames: _,
              nDemoPlayed: _,
              nPlaytestPlayed: _,
              nYear: _,
              nPreviousYearsGames: _,
            } = _,
            _ = _(),
            _ = _("bg_2023.svg");
          let _ = _().NormalNumbers;
          return (
            _ > 99999 ? (_ = _().SixNumbers) : _ > 99 && (_ = _().ThreeNumbers),
            (0, _.jsx)("div", {
              className: (0, _._)(_().SummaryCtnShadow, _.SummaryCtnShadow),
              children: (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().SummaryCtn,
                  _().GridItem,
                  _.GridItem,
                  _().OverviewBlock,
                  _.SummaryCtn,
                ),
                children: [
                  (0, _.jsx)("div", {
                    className: _().SubtleBorder,
                  }),
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().BackgroundImage,
                      _().BackgroundImageCover,
                    ),
                    style: {
                      backgroundImage: `url(${_})`,
                    },
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SummaryBlockTitle,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().RewindHeader,
                        children: _._.LocalizeReact(
                          "#YearInReview_SteamRewindHeader",
                          (0, _.jsx)("span", {
                            className: (0, _._)(_().UserName, _.UserName),
                            children: _._.Localize(
                              "#YearInReview_PossessiveUserName",
                              _,
                            ),
                          }),
                          _._.Localize("#date_year", _),
                        ),
                      }),
                      (0, _.jsxs)("div", {
                        className: (0, _._)(_().StatBox, _().Big),
                        children: [
                          (0, _.jsx)("div", {
                            className: (0, _._)(_().BigNum, _),
                            children: (0, _._)(_),
                          }),
                          (0, _.jsx)("div", {
                            className: _().SmallText,
                            children: _._.LocalizePlural(
                              "#YIR_YourSummary_Games",
                              _,
                            ),
                          }),
                          (0, _.jsx)(_, {
                            strTokenPrefix: "#YIR_YourSummary_PrevYear_Game",
                            nCurValue: _,
                            nPrevValue: _,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SubSummaryCtn,
                    children: [
                      !!_ &&
                        (0, _.jsxs)("div", {
                          className: _().StatBox,
                          children: [
                            (0, _.jsx)("div", {
                              className: _().BigNum,
                              children: (0, _._)(_),
                            }),
                            (0, _.jsx)("div", {
                              className: _().SmallText,
                              children: _._.LocalizePlural(
                                "#YIR_YourSummary_GamesFirst",
                                _,
                              ),
                            }),
                          ],
                        }),
                      !!_ &&
                        (0, _.jsxs)("div", {
                          className: _().StatBox,
                          children: [
                            (0, _.jsx)("div", {
                              className: _().BigNum,
                              children: (0, _._)(_),
                            }),
                            (0, _.jsx)("div", {
                              className: _().SmallText,
                              children: _._.LocalizePlural(
                                "#YIR_YourSummary_Demos",
                                _,
                              ),
                            }),
                          ],
                        }),
                      !!_ &&
                        (0, _.jsxs)("div", {
                          className: _().StatBox,
                          children: [
                            (0, _.jsx)("div", {
                              className: _().BigNum,
                              children: (0, _._)(_),
                            }),
                            (0, _.jsx)("div", {
                              className: _().SmallText,
                              children: _._.LocalizePlural(
                                "#YIR_YourSummary_PlayTests",
                                _,
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { strTokenPrefix: _, nCurValue: _, nPrevValue: _ } = _;
          if (!(_ == null || _ === 0 || _ === 0))
            return _ == _
              ? null
              : _ < _
                ? (0, _.jsxs)("div", {
                    className: _().CompareCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: (0, _._)(_().CompareArrow, _().ArrowDownCtn),
                      }),
                      (0, _.jsx)("div", {
                        className: _().CompareText,
                        children: _._.LocalizePlural(
                          `${_}Less`,
                          _ - _,
                          (0, _._)(_ - _),
                        ),
                      }),
                    ],
                  })
                : (0, _.jsxs)("div", {
                    className: _().CompareCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: (0, _._)(_().CompareArrow, _().ArrowUpCtn),
                      }),
                      (0, _.jsx)("div", {
                        className: _().CompareText,
                        children: _._.LocalizePlural(
                          `${_}More`,
                          _ - _,
                          (0, _._)(_ - _),
                        ),
                      }),
                    ],
                  });
        }
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _.GetPlayTimeStats().summary_stats,
            _ = _.GetFilteredGameSummary(),
            _ = _.GetYear(),
            _ = _();
          if (!_) return null;
          const _ = _("achievement_grid_02.webp");
          let _ = _().NormalNumbers;
          return (
            typeof _.total_achievements == "number" &&
            _.total_achievements > 99999
              ? (_ = _().SixNumbers)
              : typeof _.total_achievements == "number" &&
                _.total_achievements > 99 &&
                (_ = _().ThreeNumbers),
            (0, _.jsx)("div", {
              className: (0, _._)(_().SummaryCtnShadow, _.SummaryCtnShadow),
              children: (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().SummaryCtn,
                  _().GridItem,
                  _.GridItem,
                  _().Achievements,
                  _().AchievementBlock,
                  _.SummaryCtn,
                  _.AchievementBlock,
                ),
                children: [
                  (0, _.jsx)("div", {
                    className: _().SubtleBorder,
                  }),
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().BackgroundImage,
                      _().BackgroundImageCover,
                    ),
                    style: {
                      backgroundImage: `url(${_})`,
                    },
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _().StatBox,
                      _().SummaryBlockHugeNumCtn,
                    ),
                    children: [
                      (0, _.jsx)("div", {
                        className: (0, _._)(_().BigNum, _),
                        children: (0, _._)(_.total_achievements),
                      }),
                      (0, _.jsx)("div", {
                        className: _().SmallText,
                        children: _._.LocalizePlural(
                          "#YIR_YourSummary_Achievement",
                          _.total_achievements,
                        ),
                      }),
                      (0, _.jsx)(_, {
                        strTokenPrefix: "#YIR_YourSummary_PrevYear_Ach",
                        nCurValue: _.total_achievements,
                        nPrevValue: _(_)
                          ? _.GetPreviousYearSummary()?.unlocked_achievements
                          : void 0,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SummaryBlockExtrasCtn,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().StatBox,
                        children: [
                          (0, _.jsx)("div", {
                            className: (0, _._)(_().BigNum),
                            children: (0, _._)(
                              _.total_games_with_achievements || 0,
                            ),
                          }),
                          (0, _.jsx)("div", {
                            className: _().SmallText,
                            children: _._.LocalizePlural(
                              "#YIR_YourSummary_Achievement_Games",
                              _.total_games_with_achievements,
                            ),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().StatBox,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().BigNum,
                            children: (0, _._)(_.total_rare_achievements || 0),
                          }),
                          (0, _.jsx)("div", {
                            className: _().SmallText,
                            children: _._.LocalizePlural(
                              "#YIR_YourSummary_Achievement_Rare",
                              _.total_rare_achievements,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { oLongestStreak: _, nPrevLongestStreamDays: _ } = _,
            _ = _.rtime_start ?? 0,
            _ = _.longest_consecutive_days ?? 0,
            _ = _(),
            _ = _(_),
            _ = _(_ + _ * 24 * 60 * 60),
            _ = _();
          if (_()) return null;
          const _ = _("streak_bg.jpg");
          return (0, _.jsx)("div", {
            className: (0, _._)(_().SummaryCtnShadow, _.SummaryCtnShadow),
            children: (0, _.jsxs)("div", {
              className: (0, _._)(
                _().SummaryCtn,
                _().GridItem,
                _.GridItem,
                _().StreakBlock,
                _.SummaryCtn,
                _.StreakBlock,
              ),
              children: [
                (0, _.jsx)("div", {
                  className: _().SubtleBorder,
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().BackgroundImage,
                    _().BackgroundImageCover,
                  ),
                  style: {
                    backgroundImage: `url(${_})`,
                  },
                }),
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().StatBox, _().SummaryBlockHugeNumCtn),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().BigNum,
                      children: _._.LocalizePlural(
                        "#YIR_Game_LongestStreak_DaysPlayed",
                        _,
                      ),
                    }),
                    (0, _.jsx)("div", {
                      className: _().SmallText,
                      children: _._.Localize("#YIR_YourSummary_Stat_Streak"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().SmallLightText,
                      children: _._.Localize(
                        "#YIR_Game_LongestStreak_FromDateToDate",
                        _,
                        _,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      strTokenPrefix: "#YIR_YourSummary_PrevYear_Day",
                      nCurValue: _,
                      nPrevValue: _,
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().SummaryBlockExtrasCtn,
                  children: (0, _.jsxs)("div", {
                    className: (0, _._)(_().StatBox, _().LongestStreakStat),
                    children: [
                      (0, _.jsx)("div", {
                        className: _().BigNum,
                        children: (0, _._)(_.streak_games.length),
                      }),
                      (0, _.jsx)("div", {
                        className: _().SmallText,
                        children: _._.LocalizePlural(
                          "#YIR_YourSummary_Games",
                          _.streak_games.length,
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { oTotalStats: _, nYear: _ } = _,
            _ =
              _.total_playtime_percentagex100 -
              _.controller_playtime_percentagex100 -
              _.vr_playtime_percentagex100 -
              _.deck_playtime_percentagex100,
            _ = _(_),
            _ =
              _.controller_playtime_percentagex100 +
              _.deck_playtime_percentagex100,
            _ = _(_),
            _ = _("keyboard.png?v=3"),
            _ = _("controllers.png?v=2"),
            _ = _();
          let _, _, _;
          return (
            Math.floor(_ / 100) < 40
              ? ((_ = 40), (_ = _().Small), (_ = _().Large))
              : Math.floor(_ / 100) > 60
                ? ((_ = 60), (_ = _().Large), (_ = _().Small))
                : (_ = _ / 100),
            (0, _.jsx)("div", {
              className: (0, _._)(_().SummaryCtnShadow, _.SummaryCtnShadow),
              children: (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().HardwareSummary,
                  _().SummaryCtn,
                  _().GridItem,
                  _.GridItem,
                  _().HardwareBlock,
                  _.SummaryCtn,
                  _.HardwareBlock,
                ),
                children: [
                  (0, _.jsx)("div", {
                    className: _().SubtleBorder,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().ContentCtn,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().KeyboardPortion,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().BackgroundImage,
                            style: {
                              background: `url(${_}) bottom`,
                            },
                          }),
                          (0, _.jsx)("div", {
                            className: (0, _._)(_().Stat, _),
                            children: _,
                          }),
                          (0, _.jsx)("div", {
                            className: (0, _._)(_().Subtitle, _),
                            children: _._.Localize(
                              "#YIR_HowYouPlayed_Keyboard_Generic",
                            ),
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: _().ControllerPortion,
                        style: {
                          height: _ + "%",
                        },
                        children: [
                          (0, _.jsx)("div", {
                            className: _().BackgroundImage,
                            style: {
                              background: `url(${_}) top`,
                            },
                          }),
                          (0, _.jsx)("div", {
                            className: (0, _._)(_().Stat, _),
                            children: _,
                          }),
                          (0, _.jsx)("div", {
                            className: (0, _._)(_().Subtitle, _),
                            children: _._.Localize(
                              "#YIR_HowYouPlayed_Controllers_Percent",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { gameStat: _, gridClass: _ } = _,
            { appid: _ } = _,
            { item: _ } = _(_),
            _ = _(0, [_]),
            _ = _();
          if (!_) return null;
          const _ = (0, _._)(_.assets, "library_hero"),
            _ = Math.trunc(_.stats.total_sessions);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().SummaryCtnShadow, _.SummaryCtnShadow),
            children: (0, _.jsxs)("div", {
              className: (0, _._)(
                _().SummaryCtn,
                _().GridItem,
                _.GridItem,
                _()[_],
                _.SummaryCtn,
                _[_],
              ),
              onClick: _,
              children: [
                (0, _.jsx)("div", {
                  className: _().SubtleBorder,
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(_().BackgroundImage, _.BackgroundImage),
                  style: {
                    backgroundImage: `url(${_})`,
                  },
                }),
                (0, _.jsx)("div", {
                  className: _().SummaryBlockGameName,
                  children: _.info.name,
                }),
                (0, _.jsxs)("div", {
                  className: _().SummaryBlockExtrasCtn,
                  children: [
                    (0, _.jsx)(_, {
                      percentVal: _.stats.total_playtime_percentagex100,
                      subToken: "#YIR_Game_PlayStat",
                    }),
                    (0, _.jsxs)("div", {
                      className: _().StatBox,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().BigNum,
                          children: (0, _._)(_),
                        }),
                        (0, _.jsx)("div", {
                          className: _().SmallText,
                          children: _._.Localize(
                            _ == 1
                              ? "#YIR_Game_PlaySession_Singular"
                              : "#YIR_Game_PlaySessions",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { percentVal: _, subToken: _, className: _ } = _,
            _ = _(_),
            _ = `${_}_Percent`;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().StatBox, _),
            children: [
              (0, _.jsx)("div", {
                className: _().BigNum,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _().SmallText,
                children: _._.Localize(_),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.memo((_) => {
            const { data: _, topMonthlyAppsAndRanks: _ } = _,
              _ = _(),
              _ = (0, _.useCallback)(
                (_, _) => (_[_]?.date ? (0, _._)(_[_].date) : ""),
                [_],
              ),
              _ = (0, _.useRef)(void 0);
            return (0, _.jsx)(_._, {
              width: "100%",
              height: "100%",
              children: (0, _.jsxs)(_._, {
                data: _,
                margin: {
                  top: 25,
                  left: 0,
                  right: 0,
                  bottom: 0,
                },
                barGap: 30,
                children: [
                  (0, _.jsx)(_._, {
                    vertical: !1,
                    stroke: "#a0aab6",
                  }),
                  (0, _.jsx)(_._, {
                    tickFormatter: _,
                    tick: {
                      fill: "white",
                    },
                    axisLine: !0,
                  }),
                  (0, _.jsx)(_._, {
                    wrapperStyle: {
                      outline: "none",
                    },
                    allowEscapeViewBox: {
                      _: !1,
                      _: !0,
                    },
                    isAnimationActive: !1,
                    offset: 0,
                    content: (_) =>
                      (0, _.jsx)(_, {
                        active: _.active,
                        payload: _.payload,
                        hoveredBarIDRef: _,
                      }),
                  }),
                  (0, _.jsx)(_._, {
                    barSize: 60,
                    dataKey: `topPlayedPercentBreakdownPerMonth.${_}`,
                    name: _,
                    stackId: "a",
                    fill: _.monthOthersColor,
                    onMouseEnter: () => (_.current = _),
                    onMouseOut: () => (_.current = void 0),
                  }),
                  _.map((_, _) =>
                    (0, _.jsx)(
                      _._,
                      {
                        barSize: 60,
                        dataKey: `topPlayedPercentBreakdownPerMonth.${_.appid}`,
                        name: _.appid.toString(),
                        stackId: "a",
                        fill: _[`topApp_${_.rank}`],
                        onMouseEnter: () => (_.current = _.appid.toString()),
                        onMouseOut: () => (_.current = void 0),
                      },
                      `${_}`,
                    ),
                  ),
                  (0, _.jsx)(_._, {
                    interval: 0,
                    tick: (0, _.jsx)(_, {}),
                    tickFormatter: _,
                  }),
                ],
              }),
            });
          }),
          _ = 7;
        function _(_) {
          const { active: _, payload: _, hoveredBarIDRef: _ } = _,
            _ = _(),
            _ = _();
          if (_ && _ && _.length) {
            const _ = _[0].payload.date.getUTCMonth(),
              _ = _._.Localize(`#YIR_MonthlyCharts_MonthNoun_${_ + 1}`),
              _ = _[0].payload.topPlayedPercentBreakdownPerMonth[_],
              _ = Object.keys(_[0].payload.otherPlayedPercentBreakdownForMonth),
              _ = _[0].payload.topPlayedRelativePercentBreakdownForMonth,
              _ = _.find((_) => _.name === _.current),
              _ = _?.name === _,
              _ = _.map((_) => {
                const _ = _.name,
                  _ = _[_.name];
                if (_ === _) {
                  const _ = _ && _.length == 1;
                  return (0, _.jsxs)(
                    _.Fragment,
                    {
                      children: [
                        !_ &&
                          (0, _.jsx)("div", {
                            className: (0, _._)(_ === _ && _.HoveredGameLabel),
                            children: _(
                              _,
                              _,
                              "#YIR_MonthlyCharts_OtherGamesTooltip",
                            ),
                          }),
                        _ &&
                          _.slice(0, _).map((_) =>
                            (0, _.jsx)(
                              _,
                              {
                                appId: _,
                                className: _.HoveredGameLabel,
                              },
                              _,
                            ),
                          ),
                        _ &&
                          _.length > _ &&
                          (0, _.jsx)("div", {
                            className: _.HoveredGameLabel,
                            children: _._.Localize(
                              "#YIR_MonthlyCharts_OtherGamesTooltip_AndMore",
                              _.length - _,
                            ),
                          }),
                      ],
                    },
                    _,
                  );
                }
                return _.value
                  ? (0, _.jsx)(
                      _,
                      {
                        appId: _,
                        className: (0, _._)(_ === _ && _.HoveredGameLabel),
                        date: _,
                        value: _,
                      },
                      _,
                    )
                  : null;
              }).reverse(),
              _ = _.length == 1 && _.length > 0;
            return (0, _.jsxs)(_._, {
              style: {
                background: _?.color ?? _.monthOthersColor,
              },
              className: _.MonthlyChartTooltipCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _.TooltipBackgroundOverlay,
                }),
                (0, _.jsx)("div", {
                  className: _.TooltipImageContainer,
                  children:
                    _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        !_ &&
                          (0, _.jsx)(_, {
                            appId: _.name,
                          }),
                        _ &&
                          (0, _.jsx)(_, {
                            appIds: _.slice(0, 7),
                          }),
                      ],
                    }),
                }),
                (0, _.jsxs)("div", {
                  className: _.TotalPlaytimeContainer,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.TotalPlaytime,
                      children: _(
                        _,
                        _,
                        "#YIR_MonthlyCharts_PlayedTotalTooltip",
                      ),
                    }),
                    !_ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)("div", {
                            children: _._.Localize(
                              "#YIR_MonthlyCharts_PlayedSubtitleTooltip",
                            ),
                          }),
                          _,
                        ],
                      }),
                    _ &&
                      _ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)("div", {
                            children: _(
                              "#YIR_MonthlyCharts_OtherGamesTooltip_Only",
                            ),
                          }),
                          _,
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          return null;
        }
        function _({ appIds: _ }) {
          return (0, _.jsx)("div", {
            className: _.OtherGamesStack,
            children: _?.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  appId: _,
                  style: {
                    zIndex: _.length - _,
                    "--stack-position": _,
                  },
                },
                _,
              ),
            ),
          });
        }
        function _({ appId: _, style: _ }) {
          const { item: _ } = _(parseInt(_));
          if (!_?.assets) return null;
          const _ = (0, _._)(_.assets, "library_capsule") || _;
          return (0, _.jsx)("img", {
            style: _,
            className: _.CapsuleImg,
            src: _,
          });
        }
        function _({ appId: _, className: _ }) {
          const { item: _ } = _(parseInt(_));
          return _
            ? (0, _.jsx)(
                "div",
                {
                  className: _,
                  children: _.info.name,
                },
                _,
              )
            : null;
        }
        function _(_) {
          const { appId: _, className: _, value: _, date: _ } = _,
            { item: _ } = _(parseInt(_));
          return _
            ? (0, _.jsx)(
                "div",
                {
                  className: _,
                  children: _(
                    _,
                    _,
                    "#YIR_MonthlyCharts_TopPlayedTooltip",
                    (0, _.jsx)("b", {
                      children: _.info.name,
                    }),
                  ),
                },
                _,
              )
            : null;
        }
        const _ = _.memo((_) => {
          const { data: _, name: _, color: _ } = _,
            _ = !0,
            _ = _(),
            _ = (0, _.useCallback)(
              (_, _) => (_[_]?.date ? (0, _._)(_[_].date) : ""),
              [_],
            );
          return (0, _.jsx)(_._, {
            width: "100%",
            height: "100%",
            children: (0, _.jsxs)(_._, {
              data: _,
              margin: {
                top: 25,
                left: 0,
                right: 0,
                bottom: 0,
              },
              barGap: 30,
              children: [
                (0, _.jsx)(_._, {
                  wrapperStyle: {
                    outline: "1px solid " + (_ ?? _.chartAccentColorAlt),
                  },
                  allowEscapeViewBox: {
                    _: !1,
                    _: !0,
                  },
                  isAnimationActive: !1,
                  content: (_) =>
                    (0, _.jsx)(_, {
                      active: _.active,
                      payload: _.payload,
                      name: _,
                    }),
                }),
                (0, _.jsx)(_._, {
                  vertical: !1,
                  stroke: "#a0aab6",
                }),
                (0, _.jsx)(_._, {
                  tickFormatter: _ ? _ : _._,
                  tick: {
                    fill: "white",
                  },
                  axisLine: !0,
                }),
                (0, _.jsx)(_._, {
                  barSize: 60,
                  dataKey: _ ? "percent" : "value",
                  fill: _ ?? _.chartAccentColorAlt,
                }),
                (0, _.jsx)(_._, {
                  interval: 0,
                  tick: (0, _.jsx)(_, {}),
                  tickFormatter: _,
                  color: "#ffffff",
                }),
              ],
            }),
          });
        });
        function _(_) {
          const { _: _, _: _, payload: _ } = _,
            _ = _.tickFormatter(_.value, _.index);
          return (0, _.jsx)("g", {
            transform: `translate(${_},${_})`,
            children: (0, _.jsx)("text", {
              _: 0,
              _: 0,
              _: 16,
              textAnchor: "end",
              fill: "#FFFFFF",
              transform: "rotate(-35)",
              children: _,
            }),
          });
        }
        function _(_) {
          const { active: _, payload: _, name: _ } = _,
            _ = !0,
            _ = _(),
            _ = _[0];
          if (_ && _?.value) {
            const _ = _.payload.date.getUTCMonth(),
              _ = _._.Localize(`#YIR_MonthlyCharts_MonthNoun_${_ + 1}`),
              _ = _.value,
              _ = _
                ? "#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent"
                : "#YIR_MonthlyCharts_TopPlayedTooltip_Time";
            return (0, _.jsx)(_._, {
              style: {
                background: "#0e1014",
              },
              children: (0, _.jsx)(
                "div",
                {
                  style: {
                    color: _.chartAccentColor,
                  },
                  children: _._.LocalizeReact(
                    _,
                    (0, _.jsx)("b", {
                      children: _ ? _(_) : (0, _._)(_),
                    }),
                    _,
                    _,
                  ),
                },
                _,
              ),
            });
          }
          return null;
        }
        function _(_, _, _, ..._) {
          const _ = `${_}_Percent`;
          return _._.LocalizeReact(
            _,
            (0, _.jsx)("b", {
              children: _(_),
            }),
            _,
            ..._,
          );
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _(),
            _ = _.GetChartMonthlyData(),
            _ = _.GetTopGameIdsAndRanks(),
            _ = _.GetPlayTimeStats().games?.length ?? 0;
          return (0, _.jsx)("div", {
            className: _.Section,
            children:
              _ > 1 &&
              (0, _.jsxs)(_, {
                className: _.AnimationVisibilityCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _.SectionTitle,
                    children: _("#YIR_MonthlyCharts_Title"),
                  }),
                  (0, _.jsx)("div", {
                    className: _.ChartContainer,
                    children: (0, _.jsx)("div", {
                      className: _.Chart,
                      children: (0, _.jsx)(_, {
                        data: _,
                        topMonthlyAppsAndRanks: _,
                      }),
                    }),
                  }),
                ],
              }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _(_),
            _ = _(_, !1);
          return _(_?.all_time_unlocked_achievements, _?.length ?? 0);
        }
        function _(_, _) {
          return typeof _ == "number" && _ > 0 && _ > 0 && _ <= _;
        }
        const _ = 2022;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              imgURL: _,
              glow: _,
              pauseAnimation: _,
              hidden: _,
              alt: _,
              className: _,
              ..._
            } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              _ &&
                (_.complete
                  ? _(!0)
                  : (_.onload = () => {
                      _(!0);
                    }));
            }, []);
          if (_)
            return (0, _.jsx)("div", {
              className: _().HiddenLabel,
              ..._,
              children: "?",
            });
          const _ = _ && _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().AchievementIconWrapper,
              _,
              _ && _().RareAchievementNoAnimation,
            ),
            ..._,
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: _().RareAchievementIconGlowContainerRoot,
                  children: (0, _.jsx)("div", {
                    className: _().RareAchievementIconGlowContainer,
                    children: (0, _.jsx)("div", {
                      className: _().RareAchievementIconGlow,
                    }),
                  }),
                }),
              (0, _.jsx)("img", {
                ref: _,
                className: (0, _._)(_().Icon, _ && _().IconGlow),
                src: _,
                loading: "lazy",
                alt: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, userYearInReview: _ } = _,
            _ = _(_);
          return !_ || !((_?.achievements?.length ?? 0) > 0)
            ? null
            : (0, _.jsx)(_._, {
                children: (0, _.createElement)(_, {
                  ..._,
                  key: "achievementunlucklist_" + _,
                  userUnlockedAchievements: _,
                }),
              });
        }
        function _(_) {
          const {
              appid: _,
              userYearInReview: _,
              bBlurContent: _,
              userUnlockedAchievements: _,
            } = _,
            [_, _] = (0, _.useState)(_),
            _ = _(),
            _ = _(_),
            _ = () => _(!1),
            _ = _.achievements?.length ?? 0,
            _ = _.all_time_unlocked_achievements,
            _ = _ == _ && _ > 0 && _ > 0 && _ > 0 && !_.unlocked_more_in_future,
            _ = (0, _._)({
              appid: _,
              profileUrl: (0, _._)(_.GetSteamID().ConvertTo64BitString()),
            }),
            _ = (0, _._)();
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.YearInReviewContent, _.AchievementsCtn),
            children: [
              _ &&
                (0, _.jsx)("div", {
                  onClick: _,
                  className: _.ContentRestrictionText,
                  children: _._.Localize(
                    "#YIR_TopGames_ContentRestrictionAchievements",
                  ),
                }),
              (0, _.jsxs)("div", {
                className: _.AchievementSectionTitleCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _.AchievementSectionTitle,
                    children: _("#YIR_TopGames_Achievements"),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.AchievementLinkCtn,
                    children: [
                      _ &&
                        (0, _.jsx)("a", {
                          href: _,
                          className: _.AchievementLink,
                          children: _._.Localize("#YIR_SeeAllAchievements"),
                        }),
                      !_ &&
                        (0, _.jsx)(_._, {
                          href: _,
                          target: "_blank",
                          className: _.AchievementLink,
                          children: _._.Localize("#YIR_SeeAllAchievements"),
                        }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: (0, _._)({
                  [_.AllUnlockedAchievements]: _,
                  [_.AchievementsRowCtn]: !0,
                }),
                children: (0, _.jsxs)("div", {
                  className: _.AchievementRow,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _.AchievementsTitleCtn,
                      children: [
                        (0, _.jsx)("div", {
                          className: _.AchievementsBigNum,
                          children: (0, _._)(_),
                        }),
                        (0, _.jsx)("div", {
                          className: _.AchievementsSmallText,
                          children: _._.LocalizeReact(
                            "#YIR_UnlockedThisYear_Short",
                            (0, _.jsx)("br", {}),
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      userUnlockedAchievements: _,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { userUnlockedAchievements: _ } = _,
            _ = _.appid;
          (0, _._)(_, "Missing appid for achievements list!");
          const _ = _(_),
            _ = (0, _.useMemo)(
              () =>
                [...(_.achievements ?? [])].sort(
                  (_, _) => (_.rtime_unlocked ?? 0) - (_.rtime_unlocked ?? 0),
                ),
              [_],
            );
          return _?.length > 0
            ? (0, _.jsx)(_.Fragment, {
                children: _.map((_) => _.get(_.achievement_name_internal ?? ""))
                  .filter((_) => !!_?.icon)
                  .map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        appid: _,
                        display: _,
                      },
                      "displayAch_" + _.internal_name,
                    ),
                  ),
              })
            : (0, _.jsx)(_._, {
                size: "small",
                string: _._.Localize("#Loading"),
              });
        }
        const _ = 10;
        function _(_) {
          const { display: _, appid: _ } = _,
            _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.icon}`,
            _ = Number.parseFloat("" + _.player_percent_unlocked) < _;
          return (0, _.jsx)(_._, {
            toolTipContent: (0, _.jsx)(_, {
              display: _,
            }),
            className: (0, _._)({
              [_.RareAchievement]: _,
              [_.Achievement]: !0,
            }),
            children: (0, _.jsx)(_, {
              imgURL: _,
              className: _.AchievementIcon,
              alt: _.localized_name ?? _.internal_name,
              glow: _,
            }),
          });
        }
        function _(_) {
          const { display: _ } = _;
          let _;
          return (
            _.localized_desc && _.localized_name
              ? (_ = `${_?.localized_name}: ${_.localized_desc}`)
              : _.localized_name
                ? (_ = _.localized_name)
                : _.internal_name && (_ = _.internal_name),
            (0, _.jsxs)("div", {
              className: _().TextToolTip,
              children: [
                (0, _.jsx)("div", {
                  children: _,
                }),
                (0, _.jsx)("br", {}),
                (0, _.jsx)("div", {
                  children: _._.Localize(
                    "#YIR_Achievement_ttip",
                    (0, _._)(
                      Math.max(
                        0.1,
                        Number.parseFloat("" + _.player_percent_unlocked),
                      ),
                    ),
                  ),
                }),
              ],
            })
          );
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, bBlurContent: _, nYear: _ } = _,
            _ = _(_),
            [_, _] = (0, _._)(),
            _ = _();
          return !_ || _.length == 0
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(_.YearInReviewContent, _.ScreenshotsCtn),
                children: [
                  _,
                  (0, _.jsx)("div", {
                    className: _.ScreenshotHeader,
                    children: _("#YIR_ScreenshotsThisYear"),
                  }),
                  (0, _.jsx)("div", {
                    className: _.ScreenshotRow,
                    children: _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          nYear: _,
                          bBlurContent: _,
                          screenshot: _,
                          fnSetExpandScreenShot: () => {
                            const _ = _.slice(_)
                              .concat(_.slice(0, _))
                              .map((_) => _.image_url);
                            _(_);
                          },
                        },
                        `${_.image_url}_${_}`,
                      ),
                    ),
                  }),
                ],
              });
        }
        const _ =
          "?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
        function _(_) {
          const {
              screenshot: _,
              fnSetExpandScreenShot: _,
              bBlurContent: _,
              nYear: _,
            } = _,
            [_, _] = (0, _.useState)(_),
            _ = {
              backgroundImage: `url(${_.image_url + _})`,
            },
            _ = _("screenshot_placeholder.png"),
            _ = () => {
              _ && _(!1), _();
            };
          return (0, _.jsxs)("div", {
            className: _.ScreenshotCtn,
            onClick: _,
            style: _,
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: _.ContentRestrictionText,
                  children: _._.Localize(
                    "#YIR_TopGames_ContentRestrictionScreenshots",
                  ),
                }),
              (0, _.jsx)("img", {
                src: `${_}`,
              }),
            ],
          });
        }
        function _(_) {
          const { userYearInReview: _ } = _,
            _ = _.GetTopGamesShownAppIDs(),
            _ = _(),
            _ = 0,
            _ = _,
            _ = (0, _.useMemo)(() => _?.slice(_, _), [_, _, _]);
          if (!_ || _.length == 0 || _ > _.length) return null;
          let _ = _.length > 1;
          return (0, _.jsx)("div", {
            className: (0, _._)(_.TopGamesContainer),
            children: (0, _.jsxs)(_._, {
              placeholderHeight: "100vh",
              rootMargin: _,
              className: _.FullWidth,
              children: [
                !!_ &&
                  (0, _.jsx)("div", {
                    className: (0, _._)(_.TopGameTitleCtn, _.white),
                    children: (0, _.jsx)("div", {
                      className: _.TopGameTitle,
                      children: _("#YIR_TopGame_mostplayed_intro"),
                    }),
                  }),
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      children: (0, _.jsx)(
                        _,
                        {
                          unAppID: _,
                          userYearInReview: _,
                          index: _,
                        },
                        _,
                      ),
                    },
                    _,
                  ),
                ),
              ],
            }),
          });
        }
        function _(_) {
          const { gameSummary: _, index: _, userYearInReview: _ } = _,
            _ = _(),
            _ = _(),
            _ = _.appid,
            _ = _.GetYear();
          for (let _ = _; _ >= _; --_) {
            const _ = `#steamrewind${_}_gametext_appid_${_}`,
              _ = _(_, _, _);
            if (_ !== void 0)
              return (0, _.jsxs)("div", {
                className: _.IntroLine,
                children: [_, " "],
              });
          }
          let _;
          return (
            _ == 0
              ? _?.new_this_year
                ? typeof _.total_playtime_percentagex100 == "number" &&
                  _.total_playtime_percentagex100 > 1e3
                  ? (_ = "#YIR_TopGame_first_new_hooked")
                  : (_ = "#YIR_TopGame_first_new")
                : (_ = "#YIR_TopGame_first_continued")
              : _ == 1 &&
                (_?.new_this_year
                  ? (_ = "#YIR_TopGame_top_new")
                  : (_ = "#YIR_TopGame_top_continued")),
            _
              ? (0, _.jsx)("div", {
                  className: (0, _._)(_.IntroLine, _.IntroLine),
                  children: _(_, _.GetYear()),
                })
              : null
          );
        }
        function _(_) {
          let [_, _] = _.useState(!1),
            _ = _.useRef(null),
            _ = _.current;
          const _ = _();
          _.useEffect(() => {
            _ !== null && _ != _ && _(!0), _ === null && _ && _(!1);
          }, [_, _, _, _]),
            (_.current = _);
          let _ = _.useRef(void 0),
            _ = _.useCallback(() => {
              let _ = () => _(_),
                _ = parseInt(_.strGameDetailsTransitionTimeMS);
              (_.current = setTimeout(_, _)), _(!1);
            }, [_, _]);
          return (
            _.useEffect(
              () => () => {
                _.current && clearTimeout(_.current), (_.current = void 0);
              },
              [],
            ),
            [_, _]
          );
        }
        function _(_) {
          return _.useCallback(
            (_) => {
              _.target == _.currentTarget && _();
            },
            [_],
          );
        }
        function _(_) {
          let { userYearInReview: _ } = _,
            { unAppID: _, length: _, index: _ = 0 } = _(),
            [_, _] = _(_),
            _ = _(_);
          const _ = _(_ + 1),
            _ = _(_ - 1),
            _ = (0, _._)();
          if (_ == null && !_) return null;
          let _ = (0, _._)(
              _.GameDetailsPopup,
              _ && _.Visible,
              _ && _.GamepadUI,
            ),
            _ = (0, _.jsx)("div", {
              className: _,
              onClick: _,
              children: (0, _.jsxs)("div", {
                className: _.ContentWrapper,
                children: [
                  (0, _.jsx)("div", {
                    className: _.GameWrapper,
                    children:
                      _ !== null &&
                      (0, _.jsx)(_, {
                        unAppID: _,
                        userYearInReview: _,
                        index: 1,
                      }),
                  }),
                  (0, _.jsx)(_._, {
                    index: _,
                    numElements: _,
                    fnForward: _,
                    fnBackwards: _,
                    fnClose: _,
                  }),
                ],
              }),
            });
          return typeof document > "u"
            ? null
            : _.createPortal(_, document.body);
        }
        const _ = _.memo((_) => {
          const { unAppID: _, userYearInReview: _, index: _ } = _,
            _ = _.GetGameStats(_),
            _ = Math.trunc(_?.playtime_streak?.longest_consecutive_days || 1),
            _ = _.GetGameSummaryForApp(_),
            _ = _ ? _.parent_appid || _ : 0,
            { item: _, bLoading: _ } = _(_),
            _ = _(_),
            _ = (0, _._)(_ ? (0, _._)(_.info) : void 0),
            _ = _(),
            _ = _ % 2 ? "OddGradient" : "EvenGradient",
            _ = (0, _._)(),
            _ = _(),
            _ = _(),
            _ = (0, _._)(),
            { gameChartData: _, rank: _ } = (0, _.useMemo)(
              () => _.GetChartMonthlyDataForApp(_),
              [_, _],
            );
          if (_)
            return (0, _.jsx)("div", {
              className: (0, _._)(
                _.TopGameBlockContainer,
                _[_],
                _.TopGameBlockContainer,
                _[_],
                _.LoadingCtn,
              ),
              children: (0, _.jsx)(_._, {
                position: "center",
              }),
            });
          if (!_ || !_) return null;
          let _ = _;
          _._.IN_CLIENT && (_ = "steam://openurl/" + _);
          const _ = _?.find((_) => _.percent > 0),
            _ = _ ? _.date.getUTCMonth() : null,
            _ = _ ? _._.Localize(`#YIR_MonthlyCharts_MonthNoun_${_ + 1}`) : "",
            _ = Math.trunc(_.total_sessions);
          let _ = "";
          _ && _
            ? (_ = `steam://open/games/details/${_}`)
            : _ &&
              !_._.IN_MOBILE_WEBVIEW &&
              (_ = `steam://open/library/details/${_}`);
          const _ = _.info.name ?? "";
          let _ = _;
          return (
            _.demo
              ? (_ = _._.Localize("#YIR_GameName_PlusDemo", _))
              : _.playtest &&
                (_ = _._.Localize("#YIR_GameName_PlusPlaytest", _)),
            (0, _.jsxs)(_, {
              className: (0, _._)(
                _.TopGameBlockContainer,
                _[_],
                _.TopGameBlockContainer,
                _[_],
              ),
              children: [
                (0, _.jsx)(_, {
                  item: _,
                }),
                (0, _.jsxs)("div", {
                  className: _.StandardInfoCtn,
                  children: [
                    (0, _.jsx)(_, {
                      item: _,
                    }),
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _.YearInReviewContent,
                        _.InfoContentSpacing,
                      ),
                      children: [
                        (0, _.jsxs)("div", {
                          className: _.InfoContainer,
                          children: [
                            (0, _.jsxs)(_._, {
                              className: _.GameLinks,
                              "flow-children": "row",
                              children: [
                                _ &&
                                  (0, _.jsx)("a", {
                                    href: _,
                                    className: _.GameLink,
                                    children: _._.Localize(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !_ &&
                                  (0, _.jsx)(_._, {
                                    href: _,
                                    target: "_blank",
                                    className: _.GameLink,
                                    children: _._.Localize(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !!_ &&
                                  (0, _.jsx)(_._, {
                                    href: _,
                                    className: _.GameLink,
                                    children: _._.Localize(
                                      "#YIR_TopGames_VisitInLibrary",
                                    ),
                                  }),
                                !_ &&
                                  (0, _.jsx)(_, {
                                    appID: _,
                                  }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: (0, _._)({
                                [_.Title]: !0,
                                [_.TitleLongName]: (_?.length ?? 0) > 25,
                              }),
                              children: _,
                            }),
                            (0, _.jsx)(_, {
                              gameSummary: _,
                              userYearInReview: _,
                              index: _,
                            }),
                            (0, _.jsxs)("div", {
                              className: _.StatsGroup,
                              children: [
                                !!_.total_playtime_percentagex100 &&
                                  (0, _.jsxs)("div", {
                                    className: _.StatContainer,
                                    children: [
                                      (0, _.jsx)("div", {
                                        className: _.BigNum,
                                        children: _(
                                          Math.ceil(
                                            _.total_playtime_percentagex100,
                                          ),
                                        ),
                                      }),
                                      (0, _.jsx)("div", {
                                        className: _.NumSubtitle,
                                        children: _._.Localize(
                                          "#YIR_Game_PercentPlaytime",
                                        ),
                                      }),
                                    ],
                                  }),
                                !!_.total_sessions &&
                                  (0, _.jsxs)("div", {
                                    className: _.StatContainer,
                                    children: [
                                      (0, _.jsx)("div", {
                                        className: _.BigNum,
                                        children: (0, _._)(_),
                                      }),
                                      (0, _.jsx)("div", {
                                        className: _.NumSubtitle,
                                        children: _._.Localize(
                                          _ == 1
                                            ? "#YIR_Game_PlaySession_Singular"
                                            : "#YIR_Game_PlaySessions",
                                        ),
                                      }),
                                    ],
                                  }),
                                !_() &&
                                  _ > 1 &&
                                  (0, _.jsx)("div", {
                                    className: _.StatContainer,
                                    children: (0, _.jsxs)(_._, {
                                      toolTipContent: _._.LocalizeReact(
                                        "#YIR_Game_LongestStreak_ttip",
                                      ),
                                      children: [
                                        (0, _.jsx)("div", {
                                          className: _.BigNum,
                                          children: (0, _._)(_),
                                        }),
                                        (0, _.jsx)("div", {
                                          className: _.NumSubtitle,
                                          children: _._.Localize(
                                            "#YIR_Game_LongestStreak",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!_?.new_this_year &&
                                  (0, _.jsx)("div", {
                                    className: _.StatContainer,
                                    children: (0, _.jsxs)(_._, {
                                      toolTipContent: _(
                                        "#YIR_TopGames_NewThisYEar_ttip",
                                      ),
                                      children: [
                                        (0, _.jsx)("div", {
                                          className: _.BigNum,
                                          children: (0, _.jsx)(_.eNX, {}),
                                        }),
                                        (0, _.jsx)("div", {
                                          className: _.NumSubtitle,
                                          children: _._.Localize(
                                            "#YIR_TopGames_NewThisYEar",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!_ &&
                                  (0, _.jsxs)("div", {
                                    className: _.StatContainer,
                                    children: [
                                      (0, _.jsx)("div", {
                                        className: _.BigNum,
                                        children: (0, _.jsx)(_.Exy, {}),
                                      }),
                                      (0, _.jsx)("div", {
                                        className: _.NumSubtitle,
                                        children:
                                          _._.Localize("#YIR_TopGames_100"),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        _ &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)(
                              _.GameChartCtn,
                              _.ChartWidthHelper,
                            ),
                            children: [
                              (0, _.jsx)("div", {
                                className: _.GameChartFirstPlayed,
                                children: _
                                  ? _(
                                      _?.new_this_year
                                        ? "#YIR_TopGames_firstplayedNew"
                                        : "#YIR_TopGames_firstplayed",
                                      _,
                                    )
                                  : null,
                              }),
                              (0, _.jsx)("div", {
                                className: _.GameChart,
                                children: (0, _.jsx)(_, {
                                  data: _,
                                  name: _,
                                  color: _[`topApp_${_}`],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  appid: _,
                  userYearInReview: _,
                  item: _,
                }),
              ],
            })
          );
        });
        function _(_) {
          const { item: _ } = _,
            _ = _(_.info),
            _ = (0, _._)(_.assets, "library_hero");
          return (0, _.jsx)("div", {
            className: _.BackgroundImage,
            style: _
              ? void 0
              : {
                  backgroundImage: `url(${_})`,
                },
          });
        }
        function _(_) {
          const { item: _ } = _,
            _ = _(),
            _ = _(_.info),
            _ = (0, _._)(_.assets, "library_hero");
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.BackgroundImageFull, _.BackgroundImageFull),
              style: _
                ? void 0
                : {
                    backgroundImage: `url(${_})`,
                  },
            }),
          });
        }
        function _(_) {
          const { appid: _, userYearInReview: _, item: _ } = _,
            _ = _(_.info);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                bBlurContent: _,
                appid: _,
                userYearInReview: _,
              }),
              (0, _.jsx)(_, {
                bBlurContent: _,
                appid: _,
                nYear: _.GetYear(),
              }),
            ],
          });
        }
        function _(_) {
          const { appID: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            { bIsOwned: _ } = (0, _._)(_),
            _ = (0, _._)(),
            { mutate: _ } = (0, _._)(_, !_, _);
          return !_._.logged_in || _
            ? null
            : (0, _.jsxs)(_._, {
                className: (0, _._)(_.AddToWishlist),
                onActivate: (_) => {
                  _.preventDefault(), _.stopPropagation(), _();
                },
                children: [
                  _ ? (0, _.jsx)(_.qnF, {}) : (0, _.jsx)(_.T4m, {}),
                  _._.Localize(
                    _ ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                  ),
                ],
              });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { pageData: _ } = _,
            { steamid: _, nYear: _, eResult: _ } = _;
          _.useEffect(() => {
            const _ = new URL(window.location.href),
              _ = ["src", "snr", "sP"].filter((_) => _.searchParams.has(_));
            _.length &&
              (_.forEach((_) => _.searchParams.delete(_)),
              window.history.replaceState(window.history.state, "", _));
          }, []);
          const _ = _.useRef(null);
          if (
            (_.useEffect(() => {
              _.current && _.current.NavTree()?.Activate(!0);
            }, []),
            _ == _._)
          )
            return (0, _.jsx)(_, {
              message: _._.Localize("#YIR_Error_NoShareNoGameplayNotUser"),
            });
          if (!_ || !_)
            return (0, _.jsx)(_, {
              message: _._.Localize("#YIR_Error_NoData"),
            });
          const _ = new _._(_);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_._, {
              navRef: _,
              children: (0, _.jsx)(_, {
                steamID: _,
                year: _,
              }),
            }),
          });
        }
        function _(_) {
          let { steamID: _, year: _ } = _;
          const [_, _] = (0, _._)(_.GetAccountID()),
            { userYearInReview: _, isLoading: _ } = _(
              _.ConvertTo64BitString(),
              _,
            ),
            { isLoading: _, isError: _ } = _(_?.GetTopGamesShownAppIDs() ?? []),
            _ = _();
          if (_ || _ || _ || !_)
            return (0, _.jsx)(_._, {
              string: _._.Localize("#Loading"),
              position: "center",
            });
          if (!_ || !_.BIsIndividualAccount())
            return (0, _.jsx)(_, {
              message: _._.Localize("#YIR_Error_NoUser"),
            });
          if (!_ || _)
            return (0, _.jsx)(_, {
              message: _._.Localize("#YIR_Error_PageLoadFailed"),
            });
          const _ = !_.GetPlayTimeStats()?.game_summary?.length;
          return _._.steamid !== _.steamid && _
            ? (0, _.jsx)(_, {
                message: _._.Localize("#YIR_Error_NoShareNoGameplayNotUser"),
              })
            : _
              ? (0, _.jsx)(_, {
                  message: _._.Localize("#YIR_Error_NoShareNoGameplay"),
                })
              : (0, _.jsx)(_._, {
                  autoFocus: !0,
                  noFocusRing: !0,
                  focusable: !1,
                  children: (0, _.jsx)("div", {
                    className: _().YearInReviewContainer,
                    children: (0, _.jsx)(_, {
                      userYearInReview: _,
                      avatarAndPersona: _,
                    }),
                  }),
                });
        }
        function _(_) {
          const {
              viewAsUser: _,
              avatarAndPersona: _,
              userYearInReview: _,
              themeYear: _,
              children: _,
            } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(),
            _ = _.GetSteamID().ConvertTo64BitString(),
            _ = _.GetYear(),
            _ = _.useMemo(() => _(_, _, _), [_, _, _]),
            _ = _.useMemo(
              () => ({
                bIsUser: _,
                persona_name: _.persona_name,
                avatar_url: _.avatar_url,
                themeStyle: _,
              }),
              [_, _.persona_name, _.avatar_url, _],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_._, {
              eAdultOnlyMediaBehavior: _ ? "allowed" : "masked",
              children: (0, _.jsx)(_.Provider, {
                value: _,
                children: (0, _.jsx)(_, {
                  children: _,
                }),
              }),
            }),
          });
        }
        function _(_) {
          const { userYearInReview: _, avatarAndPersona: _ } = _,
            _ = _.GetYear(),
            _ = _._.logged_in && _._.steamid === _.steamid,
            [_, _] = (0, _.useState)(_),
            [_, _] = (0, _.useState)(_);
          return (0, _.jsxs)(_, {
            viewAsUser: _,
            userYearInReview: _,
            avatarAndPersona: _,
            themeYear: _,
            children: [
              (0, _.jsx)(_, {
                viewAsUser: _,
                setViewAsUser: _,
                themeYear: _,
                setThemeYear: _,
              }),
              (0, _.jsx)(_, {
                ..._,
                viewAsUser: _,
              }),
            ],
          });
        }
        function _(_) {
          const { userYearInReview: _, viewAsUser: _ } = _,
            _ = _.GetSteamID(),
            _ = _.GetYear();
          _(_);
          const { persona_name: _ } = (0, _.useContext)(_),
            _ = _.GetPlayTimeStats().game_summary?.length;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                userYearInReview: _,
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsxs)(_, {
                  userYearInReview: _,
                  children: [
                    (0, _.jsx)(_, {
                      userYearInReview: _,
                    }),
                    _ === 1 &&
                      (0, _.jsx)(_, {
                        userYearInReview: _,
                      }),
                  ],
                }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  userYearInReview: _,
                }),
              }),
              typeof _ == "number" &&
                _ > 1 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      userYearInReview: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _().TimeRelatedCtn,
                      children: (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_, {
                          userYearInReview: _,
                        }),
                      }),
                    }),
                  ],
                }),
              (0, _.jsx)("div", {
                className: _().GraphRelatedCtn,
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    userYearInReview: _,
                  }),
                }),
              }),
              !!_.GetPlayTimeStats().playtime_streak &&
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    userYearInReview: _,
                  }),
                }),
              typeof _ == "number" &&
                _ > 5 &&
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    userYearInReview: _,
                    nYear: _,
                  }),
                }),
              (0, _.jsx)(_._, {
                children: (0, _.jsxs)("div", {
                  className: _().BottomCtn,
                  children: [
                    (0, _.jsx)(_, {
                      userYearInReview: _,
                      children: (0, _.jsx)(_, {
                        playerName: _,
                        userYearInReview: _,
                      }),
                    }),
                    _ &&
                      (0, _.jsxs)("div", {
                        className: _().ShareOptions,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().ShareTitle,
                            children: _._.Localize("#YIR_ShareOptionsTitle"),
                          }),
                          (0, _.jsxs)(_._, {
                            className: _().ShareColumns,
                            children: [
                              (0, _.jsxs)("div", {
                                className: (0, _._)(_().ShareArea),
                                children: [
                                  (0, _.jsx)("div", {
                                    className: _().ShareTypeTitle,
                                    children: _._.Localize(
                                      "#YIR_ShareModal_TitleSocial",
                                    ),
                                  }),
                                  (0, _.jsx)(_, {
                                    steamId: _,
                                    nYear: _,
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("div", {
                                className: (0, _._)(_().ShareArea),
                                children: [
                                  (0, _.jsx)("div", {
                                    className: _().ShareTypeTitle,
                                    children: _._.Localize(
                                      "#YIR_ShareModal_TitleProfile",
                                    ),
                                  }),
                                  (0, _.jsxs)(_._, {
                                    href: `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/edit/showcases`,
                                    className: (0, _._)(_().ShareButton),
                                    children: [
                                      (0, _.jsx)(_.KJW, {
                                        className: _().ShareLinkIcon,
                                      }),
                                      (0, _.jsx)("span", {
                                        className: (0, _._)(_().ShareText),
                                        children: _._.Localize(
                                          "#YIR_ShareModal_AddShowcase",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  userYearInReview: _,
                }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  steamId: _,
                  year: _,
                }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  year: _,
                }),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  userYearInReview: _,
                }),
              }),
            ],
          });
        }
        function _() {
          const _ = _(),
            { persona_name: _, avatar_url: _ } = (0, _.useContext)(_);
          return (0, _.jsxs)("div", {
            className: _().AvatarName,
            children: [
              (0, _.jsx)(_._, {
                strAvatarURL: _.replace(/\.jpg$/, "_full.jpg"),
                className: _().UserAvatar,
              }),
              (0, _.jsx)("span", {
                className: (0, _._)(_().UserName, _.UserName),
                children: _._.Localize("#YearInReview_PossessiveUserName", _),
              }),
            ],
          });
        }
        function _(_) {
          let { userYearInReview: _ } = _;
          const _ = _.GetSteamID(),
            _ = _.GetYear();
          return (0, _.jsx)("div", {
            className: (0, _._)(_().YearInReviewContent, _().TopAreaSizer),
            children: (0, _.jsxs)("div", {
              className: _().HeaderCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _().RewindHeader,
                  children: _._.LocalizeReact(
                    "#YearInReview_SteamRewindHeader",
                    (0, _.jsx)(_, {}),
                    _._.Localize("#date_year", _, " "),
                  ),
                }),
                _._.logged_in &&
                  (0, _.jsx)("div", {
                    className: _().HeaderShareCtn,
                    children: (0, _.jsx)("div", {
                      className: (0, _._)(_().ShareArea),
                      children: (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_, {
                          steamId: _,
                          nYear: _,
                        }),
                      }),
                    }),
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const {
              viewAsUser: _,
              setViewAsUser: _,
              themeYear: _,
              setThemeYear: _,
            } = _,
            _ = [
              {
                data: 2022,
                label: "2022",
              },
              {
                data: 2023,
                label: "2023",
              },
              {
                data: 2024,
                label: "2024",
              },
              {
                data: 2025,
                label: "2025",
              },
            ],
            _ = (0, _.useCallback)(
              (_) => {
                _(_.data);
              },
              [_],
            ),
            _ = (0, _._)(),
            { bAllowDevToggles: _ } = _();
          return !_ || _
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(_().DevToggle, _.ValveOnlyBackground),
                children: [
                  (0, _.jsx)("div", {
                    children: "Debug Only: Toggle First Person View",
                  }),
                  (0, _.jsx)(_._, {
                    onChange: _,
                    checked: _,
                  }),
                  (0, _.jsx)("div", {
                    children:
                      "Debug Only: Change to view the contents in the css style of a different year",
                  }),
                  (0, _.jsx)(_._, {
                    rgOptions: _,
                    selectedOption: _,
                    onChange: _,
                  }),
                ],
              });
        }
        function _(_) {
          let { message: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().MissingUserCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().GenericBackground,
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().YearInReviewContainer, _().ErrorMsg),
                children: [
                  (0, _.jsx)("div", {
                    className: _().SectionTitle,
                    children: _,
                  }),
                  (0, _.jsx)("div", {}),
                ],
              }),
            ],
          });
        }
        function _(_) {
          let { userYearInReview: _ } = _;
          const _ = _();
          if (!_._.is_support && _._.accountid != _.GetAccountID()) return null;
          const _ = _.GetYear();
          return (0, _.jsx)("div", {
            className: (0, _._)(_().YearInReviewContent, _().ConclusionCtn),
            children: (0, _.jsx)("div", {
              className: _().SectionTitle,
              children: _._.LocalizeReact(
                "#YIR_Conclusion",
                (0, _.jsx)("span", {
                  className: (0, _._)(_().ConclusionName, _.ConclusionName),
                  children: _.playerName,
                }),
                _,
              ),
            }),
          });
        }
        function _(_) {
          const { year: _ } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().YearInReviewContenredPadding,
              _().FAQSection,
            ),
            children: [
              (0, _.jsx)("div", {
                className: _().SectionTitle,
                children: _._.Localize("#YIR_FAQ_Title"),
              }),
              (0, _.jsxs)("div", {
                className: _().Questions,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().QuestionCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().Question,
                        children: _._.Localize("#YIR_FAQ_Dates_Q"),
                      }),
                      (0, _.jsx)("div", {
                        className: _().Answer,
                        children: _._.Localize("#YIR_FAQ_Dates_A", _),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().QuestionCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().Question,
                        children: _._.Localize("#YIR_FAQ_Offline_Q"),
                      }),
                      (0, _.jsx)("div", {
                        className: _().Answer,
                        children: _._.Localize("#YIR_FAQ_Offline_A"),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().QuestionCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().Question,
                        children: _._.Localize("#YIR_FAQ_Types_Q"),
                      }),
                      (0, _.jsx)("div", {
                        className: _().Answer,
                        children: _._.Localize("#YIR_FAQ_Types_A"),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().QuestionCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().Question,
                        children: _._.Localize("#YIR_FAQ_Share_Q"),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().Answer,
                        children: [
                          _._.Localize("#YIR_FAQ_Share_A"),
                          (0, _.jsxs)("ol", {
                            children: [
                              (0, _.jsx)("li", {
                                children: _._.Localize("#YIR_FAQ_Share_A_b1"),
                              }),
                              (0, _.jsx)("li", {
                                children: _._.Localize("#YIR_FAQ_Share_A_b2"),
                              }),
                              (0, _.jsx)("li", {
                                children: _._.Localize("#YIR_FAQ_Share_A_b3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().QuestionCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().Question,
                        children: _._.Localize("#YIR_FAQ_ShareFamily_Q"),
                      }),
                      (0, _.jsx)("div", {
                        className: _().Answer,
                        children: _._.Localize("#YIR_FAQ_ShareFamily_A"),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().QuestionCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().Question,
                        children: _._.Localize("#YIR_FAQ_Controller_Q"),
                      }),
                      (0, _.jsx)("div", {
                        className: _().Answer,
                        children: _._.Localize("#YIR_FAQ_Controller_A1"),
                      }),
                      (0, _.jsx)("br", {}),
                      (0, _.jsx)("div", {
                        className: _().Answer,
                        children: _._.Localize("#YIR_FAQ_Controller_A2"),
                      }),
                    ],
                  }),
                  _ == 2022
                    ? (0, _.jsxs)("div", {
                        className: _().QuestionCtn,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().Question,
                            children: _._.Localize("#YIR_FAQ_PrivateApps_Q"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().Answer,
                            children: _._.Localize("#YIR_FAQ_PrivateApps_A", _),
                          }),
                        ],
                      })
                    : (0, _.jsxs)("div", {
                        className: _().QuestionCtn,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().Question,
                            children: _._.Localize("#YIR_FAQ_PrivateApps_v2_Q"),
                          }),
                          (0, _.jsx)("div", {
                            className: _().Answer,
                            children: _._.Localize(
                              "#YIR_FAQ_PrivateApps_v2_A",
                              _,
                            ),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          Home: (_, _) => `${_._.YearInReview(_, _)}`,
        };
        function _(_) {
          return (0, _.jsx)(_._, {
            domain: "store.steampowered.com",
            controller: "yearinreview",
            children: (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                path: `${_.Home(":steamId?", ":year?")}`,
                render: (_) =>
                  (0, _.jsx)(_._, {
                    method: "yearinreview",
                    children: (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_, {
                        steamId: _.match.params.steamId,
                        year: _.match.params.year,
                      }),
                    }),
                  }),
              }),
            }),
          });
        }
        function _(_) {
          const { steamId: _, year: _ } = _,
            _ = (0, _._)(),
            _ = _.useMemo(() => _(_, _), [_, _]);
          return (
            _.useMemo(() => _(_, _), [_, _]),
            (0, _.jsx)(_, {
              pageData: _,
            })
          );
        }
        function _(_, _) {
          const _ = _ == "my" ? _._.steamid : _ || "",
            _ = parseInt(_ ?? ""),
            _ = _ ? new _._(_).GetAccountID() : 0,
            _ =
              _._.is_support &&
              !!(0, _._)("localization_advanced_access", "application_config");
          return {
            steamid: _,
            nYear: _,
            eResult: Number.parseInt(
              (0, _._)("yearinreview_eresults", "application_config"),
            ),
            rgOtherYears:
              (0, _._)(
                `yearinreview_otheryears_${_}_${_}`,
                "application_config",
              ) ?? [],
            bLocalizationAdvancedAccess: _,
            bAllowDevToggles: _,
          };
        }
        function _(_, _) {
          const { steamid: _, nYear: _ } = _;
          if (!_ || !_) return;
          const _ = new _._(_),
            _ = _(_.ConvertTo64BitString(), _);
          if (_.getQueryData(_)) return;
          const _ = (0, _._)(
            `yearinreview_${_.GetAccountID()}_${_}`,
            "application_config",
          );
          _(_) &&
            _.setQueryData(
              _,
              _(_._, {
                stats: _,
                percentiles: (0, _._)(
                  `yearinreview_${_}_percentiles`,
                  "application_config",
                ),
                distribution: (0, _._)(
                  `yearinreview_${_}_distribution`,
                  "application_config",
                ),
                previous_year_summary: (0, _._)(
                  `yearinreview_${_}_previous_year_summary`,
                  "application_config",
                ),
              }),
            );
        }
        function _(_) {
          const _ = _;
          return (
            !!_ &&
            typeof _ == "object" &&
            !!_.account_id &&
            typeof _.account_id == "number" &&
            !!_.playtime_stats &&
            typeof _.playtime_stats == "object"
          );
        }
      },
      chunkid: (module) => {
        module.exports = {
          sketchfab_play_overlay_image: "_2WGPdoLu3Mok312NPs4DC_",
          sketchfabmodelembedded: "_14FKhrcp5aEfuZXW03a6au",
          dynamiclink_box: "la-zlY3wcco-_OyUTXmWM",
          dynamiclink_preview: "B_zezwCTpciygxrjvmXNV",
          dynamiclink_content: "ZTL8kcUkjRh3Jhqb-3UG5",
          dynamiclink_name: "FZ02D3gsewSiEX4HnmBN-",
          dynamiclink_type: "_2vy-XuvOjtS-m9dMXarnp_",
          dynamiclink_author: "_11n3JjqH-AfIdduU-GuPbA",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Pill: "_1LHHH9LxL4_OV0jcL9EZ7I",
          Button: "_3ECnEY2jSbeonbMSe3SQif",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImageBlocked: "_21Qmyw5l-_fHfVvaYXgIrm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_1BsM1CkjnMDPzj027r1TEC",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AppSummaryWidgetCtn: "s-ezVsX8n5lz8y_Nljmv2",
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
          Container: "_2_XDG9R-XpB-eIThkLBCSM",
          Frame: "_1jXJqI6egsVN9-CmA-JFSJ",
          FadeInGrid: "_2bPST_zPPtsm3_ju1z0sQB",
          FadeIn: "_2_0ROqVRdr3CcSZ79hAAVR",
          Square: "_3j8KRorQcTw5QNG3CCiWq7",
          Drift: "_2kCjs9_12D05MUxaukuLYA",
          Grid: "_3vVKhPGkKDvYoSLFYnJYFg",
          Tile: "_3EUu345VfD4sR0IeRyh0nG",
          WideTiles: "_3Y5PVvHgh3lGKAQh3IZY7g",
          FadeInTiles: "_2xidke4A8OynmVULh2_c30",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          AchievementsCtn: "eW4gzXOFFjJmbPpnmLEsW",
          AchievementSectionTitleCtn: "ZYuVh_jByWjEiZwi_1F4D",
          AchievementLinkCtn: "_1A8oO_DYGf_JNfZh8P8cmF",
          AchievementLink: "_3C_8h8nr-D-hecmkF9QN7d",
          AchievementSectionTitle: "_1EIvaYu5QSWg8151LW-jqC",
          ElementFadeIn: "_3wH3B2-F3WSN3wgX9I6E2k",
          AchievementsRowCtn: "_1NYinaqqvjEHq4uImqKSbY",
          AchievementRow: "_14q6Kd9Yidcxi1X1KUxl2q",
          AchievementsTitleCtn: "mA8l4gfC6pg75YdZBvjDk",
          AchievementsBigNum: "_2FvUpx13BKH37sVztlDnpK",
          AchievementsSmallText: "_3H2xA2HF93zu8iENYyzEKg",
          Achievement: "_3jyFz4Q4D6NpReMRSXoiK3",
          RareAchievement: "_1OjH2qNVqYnsbJM2FX4UHe",
          AchievementIcon: "_2TUXykXU6g4otWY6JozzUI",
          ContentRestrictionText: "_1IKOfRrOKNPGjzGAbgTjE_",
          BadgeBoxIntro: "_3Cn6sA1BgWhcU0OndmfDJ",
          BadgeBarFiller: "LQw7WwNM7FoJiy3k15cQo",
          Appear: "_3mgR2GHe98OhWWVYPWA3Ic",
        };
      },
      chunkid: (module) => {
        module.exports = {
          MonthGridOverallCtn: "_39riY1ALzXddeLUi4b6njV",
          MonthGroupCtn: "_2PJ5dHX9Oih-78STp7Gh9k",
          FirstPlayCtn: "_1flKypEsMgcTMxdLOSn0A2",
          MonthTitle: "_2nSdjNpwdgPuYMr4zlXPEO",
          GameCtn: "_3LAV6o8j79NTSpKVTX-ONT",
          AllGamesBGImage: "_2VKXXNuV16rgy-mMP0blns",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImagesCtn: "_3JGbh53UazrhAaR6KXi8kg",
          TileSquare: "_2_U9r6EulYb2JwaZf9UwLi",
          TileGrid: "_3smtrFobH8_FPmgFkf2o_v",
          Sub40: "_2X3LKsjOCckZcubnNUbRM2",
          Sub20: "_3cbAf2Xk2Lfluxi1Ojnru0",
          Sub10: "_3_1vYOshswOh0vozKQSWaZ",
          Tile: "_16aTxalT2BhfKWNXqsBlxO",
          SingleGame: "JmN1Eo3aF2wu9FFFgic6Z",
          ImageTint: "_1R2cNHbD97TvCVeJbF_CfG",
          BgImage: "_1qOz25FACHWC7ZHi01fny1",
          ElementFadeIn: "_28HSFCMg_eIIlJ3r0UpPOm",
          BadgeBoxIntro: "_1AP0QN4L8dMuJ-MARIH7fT",
          BadgeBarFiller: "_1rQO1VsQaovoJdnwLQuEKM",
          Appear: "_2IAPuee0PtKJR3f7exLFT1",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          TopHonorsCtn: "_1fuaqG0AL10aJNg8K_c_IU",
          BadgeBox: "K8vmWivWd7RVIckV95vAY",
          BadgeBoxIntro: "rfMXqTSox8ll__3Xmf3Oj",
          BadgeContents: "_2nNt_KIszccOtLf0WzUrIR",
          BadgeRarity_common: "_2_l6GtDYFnoyfVAacbyavx",
          RarityText: "_22TRHKdLUqaIFHF9wYsAkC",
          BadgeRarity_uncommon: "As1w9Z5lMhS31dnkvL5s1",
          BadgeRarity_rare: "_2_N4mS8cXcF67roPPhRTMk",
          BadgeRarity_epic: "_1f88ffr-7Fz7QWaK_zWrdU",
          BadgeRarity_legendary: "_3yYtr6MIzi7bCGhCAE6Ppd",
          RightCol: "_2wSSnjW5drN9i_2gGFxgy",
          RarityInfoCtn: "_9J952xXBVKswIlEmoOyoI",
          RarityBar: "_2ZvJp_rD6rOYVYPDALvtT8",
          RarityBarSegment: "_1eX3GDh_iGLW_M-ucuiZLg",
          FillerBar: "_2vEIDtSp6Gl8JcQ00rILPl",
          SegmentCap: "_2ImXaZqg410GKKDQa3Pbn9",
          BadgeBarFiller: "VvnUA7gDdbtSx5hRJrjdP",
          RarityDesc: "_2k7qd3KsckXv9UOPyfG_0Y",
          BadgeName: "_3hYW021Aqnc0gD0II-8MHL",
          BadgeImgCtn: "_1lDoCOc4W8CAwmYRBEQAgX",
          BadgeDesc: "_3cEWqPn5E4Jn5zZw0sHFdz",
          BadgeGetBtn: "_3XJ0GSTTp7c1x2fO9slbIQ",
          SpiderAndNumbersCnt: "_2smZfwTjxr99Z9G_YHKcfh",
          HalfwidthColumn: "_55cHDEWVgkgz-SPC3r7oT",
          SpidergraphContainer: "_1rrwJfEs-O1ewF5e3rvfT3",
          GraphBox: "_1tAaTMCqxdAxdDZqioNZZS",
          RadarText: "_1lysNWfa68EPC-Gs0MLiBY",
          RadarTextContainer: "_1NnV04cS9KHGEXhpeoeQ3a",
          SpiderResponsiveContainer: "_2m6tajXQvixPE5AD-ZpcSv",
          RadarChartLegend: "_25k2M_lXfkjbMBklQiNdjG",
          NumbersRowsCnt: "_26Xq-LpSAolU4ou9Y-DAua",
          NumbersRow: "_1hST62nyIzmGRJd-9FO5NH",
          NumbersLabel: "_316XVsECeACtqEuFhbw0z9",
          NumbersValue: "wZIDD_Uf6MaGoQQi4XP40",
          FillerDots: "mNltGcIak52Q1s5Zf0NIU",
          Disabled: "MwG2ah1xIjS4OqRtDiCFg",
          SectionLabel: "_3inzpKl31BtWhQSbg_7YwD",
          SectionDesc: "_1rEaTcJ6ze8AFIgxfZQ2yo",
          PlayBehaviorContainer: "C-BemrA90gLEsdt8GXUCW",
          ProgressBarFilled: "YvZP7EccXynGhWGolm-0V",
          GlitterBox: "_2eSDMaWxXPgE_9pGt-244C",
          GlitterSecond: "_2aQpSZj3RzmOr4PMTC1yYv",
          Glitter: "MrG3WtVvi1CJJOHxWLTup",
          glitterMove: "_6daCzBGcfUECEWT0DrkTb",
          glitterMove2: "O0KfKVlRf_7MOnYxM78Ul",
          PlayBehaviorSectionSubTitle: "_1YOa2_BDd_TkMANU6mMJE7",
          PlayerBehaviorProgressCnt: "_1X-jN8ooh5IUIJLkVhijmy",
          ProgressBarWrapper: "_1YwMMTi70jbfbwWfypUKo2",
          ProgressLabelsCnt: "j7FRn5nh3Vgo5rwVtLZ-d",
          ProgressSteamAvgLabel: "_1BlJPGLkneFv9cCQ77C_Dy",
          progressBar: "SM2hr-JEmMZ3nNlzXtoAM",
          Appear: "_21N1VxABguGyT6ysf3ZaZU",
          ProgressIcon: "_2kKy0ggIAf1owsS46dPOsP",
          ProgressIconSVG: "_3pR8vNlF4fw-IYTm2aQmyD",
          ProgressRightSide: "_3I2K8N7mKHswxhexlXUcC4",
          ProgressBar: "n5ZPCAGDZJjDaAgiZNWlM",
          ProgressLabel: "WJvSwYLbTMOL4rOFTJjHI",
          PlayNewnessContainer: "_1PSNF8opqp5pTAsjGZcEOx",
          GameNewnessComparisonContainer: "_3pgx0DerD0LSS9-eKcf4Hm",
          GameNewnessDataCnt: "_1mb_OZ_h-Dm2kW0s0v_koN",
          WheelChart: "NAtJjAiS2Shk-7DYc3FKY",
          WheelArc: "_3f8H_QF6WzUP1JLNlg-3nL",
          Active: "M68lG7ooQ9Qf__kYeYbw3",
          RightSideContainer: "_1U6F5GMm_PUsOkT5j_u0lh",
          DataBoxesContainer: "_3hCn2uxdtjvNUA_7-OQQue",
          FlavorLabel: "FLK0eC7Hha2-s1lmHSGS1",
          DataBox: "_3_yBPJ3Dz_41t_ynzRzu5W",
          PercentageLabel: "_1CY52kiA0KYztlYn57Xr_J",
          PercentageDescriptionLabel: "_3lRjsvADdzItoX6kp9ZA3l",
          DataBoxArrow: "_1KVkdXPA9foh8DFM-qCxAK",
          GameNewnessTitle: "_1XdZHYD0-hj6KSukuao0aQ",
          ElementFadeIn: "_1CU84LiLM_7J6_557M5kgY",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          strGameDetailsTransitionTimeMS: "300ms",
          TotalHoursContainer: "v41gDiFwzw3DGnwP-cALt",
          HoursPlayed: "xoO6mo4p8_IOElI9H4Y5m",
          TotalHoursSubtitle: "_2-sdJ9wh7eHK4w4Voqc9ln",
          FullWidth: "_17wR6FHMEczf-g1zjUy-I0",
          TopGamesContainer: "_2Y1sojYqIjMbXoPIYQcNCp",
          TopGameTitleCtn: "_34JGPXmnQsOCJxAEu1xcrt",
          TopGameTitle: "_19je0cCd02CNGNMBOdci9V",
          TopGameBlockContainer: "jYyY7c20MJpyHRM26h1uY",
          LoadingCtn: "_2gZk9_4Xzl3ad1N8aa-cu0",
          OddGradient: "_245SNjjS1E3LEBXq1-r4bP",
          StandardInfoCtn: "_25MpyGTI8DJW4Zs8kPxdPu",
          NumSubtitle: "_2byk5HZvPT_RuATttbQ_5u",
          IntroLine: "_1elCDgKXuMsJGX3ide6oB3",
          Title: "_1CZyBeiXVNP99-3wCbR-u1",
          StatsGroup: "_4BvwvO3VgH6ZG7Qm9sktR",
          EvenGradient: "zLHeIjcDA7wGAKOP0whhC",
          SelectedInfoCtn: "_3fxvzSnvVc-dF2juJkRS5D",
          BackgroundImageFull: "_22ewA8ylzFNgyWrTZydfoX",
          ElementFadeIn: "_3nWeazHfpRmP8ACDtkkOTP",
          BackgroundImage: "_22vHC3-heyz9GnK5oX9K4g",
          InfoContentSpacing: "_2koF9YfeckrXhWH_6u-oPn",
          InfoContainer: "_1znVngHcZoMW202kwdao1x",
          GameLinks: "_376D9_KYoFhWD_jaMVCiL5",
          GameLink: "_3AJLZMHaJMHjqz8GnXgOXM",
          AddToWishlist: "_3Tbtm47DDFL79uIDv2jG7F",
          TitleLongName: "_3dIe92zTA3DZi1O9bKh2is",
          StatContainer: "BgocQlDSBw3hX4WIkeucS",
          BigNum: "Qrj9IL_mXAruukOvqwEQs",
          ChartStuff: "eE5uoTvZkRDHrLchbI4qZ",
          GameChartCtn: "_3RG2kKm1w-tWHsasI1rtFQ",
          GameChart: "_1pAvTYGtmTjIiVfjHw7UyD",
          GameChartFirstPlayed: "_2YyInrut3rASUln22zAIKA",
          ChartWidthHelper: "_124tZna8-zA2IxlGG1PCkV",
          GameContentCtn: "_28_8DbvXMfuGo0s0n7qPjC",
          GameCtn: "mYJUXAjxXDya5F1IOGXzA",
          GameItemDetails: "AcWl62PgtFqrKdMyKAQz1",
          GamePlayDetails: "_2tZ0ob7D8-SB3-4PEaJx_c",
          SteamDeckGameCapRow: "_22QsAjZhFOTIZrzllIurWw",
          CapsuleCtn: "_1tYDn7WYcdPWCEqCkNz-Sh",
          Appear: "_35970dLKkA_4fmagrjhQ46",
          FirstPlayCtn: "_189YieA8K_Mw9Al9s7_eIA",
          SpecialFlags: "_2pkhaqOq1UN7nIJG2porVE",
          DemoPlayDetails: "_1G35DzHjQTcCERQC-ECCLG",
          PlaytestPlayDetails: "_3t18OQQyxYzrBX3bQTTn8_",
          PlatformChartsCtn: "_2jWNP3arYY1BL3XcHAn84H",
          PlatformSpacing: "SCcKgk6BtdKuw9lsfGyYc",
          PlatformChartsRow: "_34dEzfz9OEnuEakksZvf9p",
          PieCtn: "_1LEPaxVodeDXqbGrLtA3Sy",
          GraphTitle: "NZbnzXMjU4o-X5NCZCwpV",
          PlatformDetailsSetup: "_3cAa7I-1ce0j1_Eg_kDiqB",
          LongestStreakGamesWrapper: "_1dN12HR7e2nKa7EjxxZQqM",
          CapRow: "_1eIbxOvxTgYUrKNzdR-L2S",
          LongestStreak: "MPGp0O3RzT0Q49w0c0qP0",
          AnimateCap: "_2otiVZWl9joMU9AEAW2Kow",
          StreakCtn: "_1Au1R3IqWALErUW3-9bU1c",
          TimePlayed: "ymaKsi0nft6kaA8oiJG1G",
          UnavailableGame: "_2-4VNSMEhhZ-xdD0370G8f",
          GameTitle: "_3_zycx95Xq_sda4DXlejZ3",
          GameDetailsPopup: "_3WtIxWH7i_hDPowMRyjdvD",
          Visible: "upLCDXwVTCA0UMfy-QsCt",
          ContentWrapper: "Nl_0Z8YOWE5w_X1p7fe_l",
          ButtonCtn: "_3BQdAb7-SQZ5czq4iF3IZy",
          ButtonIcon: "_16_hduxJtJFKPM6lpvyCv6",
          Disabled: "_2m3wA7jwIPPZv7sDP6RqFd",
          GameWrapper: "_3glI8tpJguLJ9Sv4yRyR0G",
          GamepadUI: "_2MnncrzvrUVL3Xm9OJiabl",
          MoreButtonContainer: "_3FFNVwcbTVx-7hdZ7OprmX",
          ShowMoreBtn: "_2KKzOhD1eO3N_NJLw4IsEf",
          BadgeBoxIntro: "_3b736i-37o9DisLoo-BdFc",
          BadgeBarFiller: "_2Fka1tXRnFsKNRxvNc7CXU",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          FriendCtn: "QUjIgprzA6Kbs7xBAZ0G4",
          FriendsSharedSection: "_2Rq_zPIIJLZ1-QzjOI_QoE",
          FriendsSharedSectionTitle: "_35laQj1c49taZ9qr-yWwvU",
          FriendsGrid: "_3rWLm6o2EmBKqcTkRck7VQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Video: "_1M1FzBz-vwcF2DlRDw6aJU",
          PlatformDataContainer: "_2KkuIOs5TU9Im57khW5Mjx",
          DeckContainer: "SRvgXpX46BGk3ExxAmzXp",
          StatsRow: "_2wwiTr9_1mZBnNSqY8TUY",
          SectionSubTitle: "bDYxzNyICQbYgW4xU4OV3",
          Disclaimer: "_3Lh3IS123CdB1UnKrM-UqX",
          SectionTitle: "U-nH5AEIm21jmfNmy9D62",
          ScreenContainer: "wclk5mJZGY7HN8R39K9UL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          YearInReviewContainer: "_2Esrbjun6oDMfm3z0_S9Qo",
          YearInReviewContent: "_34xjVN8zuusfY6i5pdeRmd",
          TopAreaSizer: "cfYlTBD9UMEGy2eJy5IOW",
          TopHonorsContent: "_1prXkqO0MJWkcqW8bantCg",
          TabCtn: "_1vG6SnFZi-39wNl7yLagkJ",
          TabBar: "_3wXsAskmaHT7gqXr1IRL-q",
          Tab: "_2s9Wnaogy1AMi7QV2JxB-a",
          HeaderCtn: "_27O_99InrFLHyhSohDCxXU",
          RewindHeader: "_1JMmapAfV9CHfT-jwn3cYd",
          AvatarName: "_1Tj700YdecW57M1F9BtRnJ",
          UserAvatar: "-rUtuwXaIuwLDG9V4cUCC",
          UserName: "PVtbr3rlq7ect5ubSQ9F2",
          InlineUserName: "_1dsNG4PwglSIFcdCyDXQ_W",
          SectionTitle: "_1BNeBwWm-o15qeck5usEnN",
          Appear: "jZQYm4z4716xvqrUBHc_v",
          SectionSubTitle: "QI8iZ_nw5g3Y50IrU0oCr",
          SummaryArea: "_3uAxHEp9ysLQlzG-sK70cA",
          SummaryGridCtn: "_2T_rWOusDD7hI72GWqvSxy",
          SummaryCtnShadow: "tFnsQF7Hz95xX6SAoMsJ1",
          SummaryGridStandard: "_3ssxngi9TwcdmavYrjhJu0",
          SummaryGridSparse: "_13eGKeML2QcpA8dIvk-C96",
          GridItem: "rQGunY6vAvoBjpyGWmO7L",
          Game0: "_2gomgwC7T6AApxhCwH9y81",
          Game1: "_3e_VgLcpwHUfSQTu0yecqV",
          Game2: "_1zUzIl0TemMycLw8-ydBS0",
          OverviewBlock: "_3I6H8xkzT-CN3k2aPbncrO",
          BackgroundImage: "_1QgHJQJkFzU0eO3k4iRMeg",
          StreakBlock: "_1HLlwSlgqdvbwC_QGMBkLu",
          SummaryBlockHugeNumCtn: "_10b7HEOu3JIvH2oxFq98jE",
          BigNum: "_1nw1AxFXoiKpq_vOQ2gxSo",
          HardwareBlock: "_2eKuac26y2RDqwd3hijKhx",
          DeviceBlock: "_2JQ-inucnlchcJHltk89o4",
          SummaryCtn: "_2lymW1w_z1bts7qBxqDez-",
          SubtleBorder: "_2uIEUUlmsOtQ_cCEUHLzFM",
          HardwareSummary: "_3t5h2iZU4-U2vzsydxHQHU",
          ContentCtn: "_2wndfjAf02YLWuZTrl3Upk",
          KeyboardPortion: "_2sGNJXZZvAQsMvvsHQpsi9",
          Stat: "_3iusuePDL7HJ0BBMvsswXN",
          ControllerPortion: "_2Rju5NBn6F8SrpJhuKw0n-",
          Small: "_3f50VItIYkZXyjyyYuI5tI",
          Large: "_3BVO6m6Gnm0Chutro2BvHY",
          Subtitle: "Hm6JxuYw44F8HImXpU6rv",
          SummaryBlockGameName: "_3mF7QTrg76rUpW_7ZkH6Cj",
          SummaryBlockExtrasCtn: "uoFglYZQgZ3E6nWuPOoNS",
          BackgroundImageCover: "_1Cg4zw9p61lU_f4mrj9CVc",
          Achievements: "rYd4jy19WhWo8KETr4H-0",
          SummaryBlockTitle: "WH6tAR8H_SDsgV0sr_vL2",
          YearSubtitle: "CccBlIamN5QHiR2hhrRs7",
          Big: "_22GbSR4dXDNqFH8C_jR7wU",
          StatBox: "bk_lIAnpiU1e8qA_nznqG",
          SubSummaryCtn: "_2eMcK6ctsM113Dn4baXnwV",
          LongestStreakStat: "S_D1GGmEcTX1dGQp2KsjD",
          SmallText: "_3f1C4a_ZeRlqnBRzzCZDti",
          ThreeNumbers: "_2ZvOGrXnag650oklI7V0Om",
          SixNumbers: "FXwKG2EZBUov0iVhUTN4x",
          SmallLightText: "_3JNlrvwokXNRohEO0Tvs4e",
          CompareCtn: "j2MatsBj6tYWgcbtnkImS",
          CompareArrow: "wbWwg_omLILncKnMkKpsw",
          CompareText: "_3Ljt05PFk5ZfE26qoQ4-u5",
          ArrowUpCtn: "_1PZY3fz_RgHgbaH2lv2iNT",
          ArrowDownCtn: "_15faDGb4x4EbGg9sPldGZt",
          DeviceSummary: "KvSx-L-06AGp-qLrpef2c",
          HardwareStats: "_2qesp6PQPKseF-t6dpD3Wq",
          GraphRelatedCtn: "_2fmyth7b8H4gIhRBFczy5e",
          TimeRelatedCtn: "_2KxtKJjzlzIuzapjVSKqNz",
          TopHonorsSection: "_2EdxrhGWVNO8mvMC8NvWh_",
          AllPlayedCtn: "_2ofWP-i86B2a4xH6i-k3P3",
          AllPlayedContentCtn: "eP1XjsqRoD1zipUPQayu0",
          AllFirstPlayedCtn: "_1KfUzP0XKpB4290fXK8ify",
          DevToggle: "_1JBThC4rQWQ9zF5EMfQ4MF",
          MissingUserCtn: "_7HO2RlSAV0C6uHhSoW4i9",
          LogInCtn: "_3G68ot7J5tbGGa0Ee0wBIH",
          GenericBackground: "_3Bs8RBdWes0mqDsucdIzs",
          LoginButtonCtn: "_1dzf13YE6Dr2CEZy3nmiqB",
          ErrorMsg: "_2MjJiHLsSfL2DiDi_MPzUA",
          HeaderShareCtn: "_2N4fkkQz0G3s4han4AOTqr",
          ConclusionCtn: "_16sGmr-phaS10eLa666GJI",
          Questions: "_2JfwVZoBEMm3bmuUypCQad",
          FAQSection: "Y4GNRIKAMRdKmKxoYF8vm",
          QuestionCtn: "O3eoDWRpFpwI3gVzDZrmx",
          Question: "_7SV_vDBmbutmYDI4bHuk7",
          Answer: "NUC9MsCLgFupOBlmVEFD4",
          BottomCtn: "_2Ie0FCf-KNZznJYeFPagr2",
          ElementFadeIn: "_15L4egKWSvfAYxDxkQ8JYL",
          BadgeBoxIntro: "_3AZJqdqiXdE75tiaa7ZNUO",
          BadgeBarFiller: "_1HKcWglObNA64EsrdCdgrr",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Section: "_3PAniBq6rjYc2m36IugM4q",
          SectionTitle: "_2Pj_j5ySAIbAQCZJXXHaxC",
          StreakSubTitle: "_23EJkuDULHTcznUJFfQClS",
          LongestStreakDailyCount: "_3Mls26KZCqFSTSheIHbQGV",
          StreakSizeCtn: "_2q-ySU-PiZjoMUj-6FcbKE",
          LongestStreakNumber: "_2mVNLmFQcHGqNencPh5yTz",
          StreakDates: "_1QUGOSy4PRgUezrY3wotbN",
          Appear: "mGVafvcRBs0HMzFZzM-DJ",
          LongestStreakGamesWrapper: "_3PpAFVa_jQ0ywCx7Xwf5BO",
          CapRowTitle: "_3odIeGfNSYjE1Pco5IxcMk",
          AnimateTitle: "_2v_Mh0aWrgvAsocnFFwGZ6",
          StreakCtn: "oyIC-gr9l17BgbvPxkiEz",
          CapRowCtn: "_1Qu-b7iJ7_WLnqhbkGK8KS",
          StreakBarCtn: "_18hECsdhmWyKkMjz9s4lE9",
          StreakSizeFullBar: "_3PQ0fWKugP_c_2ll8h9tbd",
          StreakBarAppear: "_3U_VC64UnvAlsdw8U3esu6",
          Tick: "_1dWifBSphUmwpzW4VJMACF",
          StreakTicksAppear: "_3baMsQloxlceJn-CpEUdn4",
          StreakTickCtn: "_1mi4nzggFHFLfhhTZbEFel",
          LargerTicks: "_GxOA0m2bytLLUw5q2jIT",
          LongestStreakBgImage: "_17zwGMeaO0XJXSkPq7a04I",
          ElementFadeIn: "_3KSWuVf_eGV3lstWKlCK_U",
          BadgeBoxIntro: "_1OHTIKYtZ9Ow6rX25gdfOo",
          BadgeBarFiller: "_1c-hMxFIRB9bFBmuwCHzvX",
        };
      },
      chunkid: (module) => {
        module.exports = {
          OtherYearsCtn: "ZFr-zkTzmpySQuVgzxYUD",
          OtherYearsHeader: "_3Y2GCNOtGNo0Xe8r1Kt626",
          OtherYearLinks: "_3Uhn7ap72dGDfQpLDwBkcX",
          OtherYearLink: "_3518yDLyo2qkU1CI0RYXgG",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          ScreenshotsCtn: "_3z56d8ZAw1m7tymCPKLnZG",
          ElementFadeIn: "_2MMYVAwyNusl-34nkFkuct",
          ScreenshotHeader: "_2L22tSzCNjfYgYv7TmkZFx",
          ScreenshotRow: "_1iyC0Ag6XVeawCcnXnGk84",
          ScreenshotCtn: "_2f-mtEH2nBQPdLLAhFuHAV",
          ContentRestrictionText: "_3AVAQ0ejsc_Yx_RdEes-tz",
          BadgeBoxIntro: "AGlFAzZf1pf-pjqSJ7HCU",
          BadgeBarFiller: "_1kJTWtILvxJ2sJJe5I7WAu",
          Appear: "_3sCSuiPiK6YZP4YqJit8xO",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ShareOptions: "_3JS3uvYxmm4uxg9LKg7V5v",
          ShareTitle: "_2KB0bv4bJkXKXE8ulaq-Gt",
          ShareColumns: "WWOHpVBgD-jmCyFqQdsQ-",
          ShowcaseInfo: "_1IRlqYfguWSVErwdY_3_oW",
          ShareCtn: "_3E9DRgDhze3SZC_8rBwh99",
          YIRShareCtn: "_31wedODkl1bENzsBW0EMLj",
          ShareButton: "_1chFu_g7Pym2VQZoV0Kzo1",
          PrivacyWarning: "RMRlwqHeaQrzZUfGqzTH",
          ShareTypeTitle: "_2pNSPsIoRtculZcbEkAG7p",
          ShareArea: "_3YTJzMIIhl0gbxy3VSWiBU",
          SeeRewindButton: "_1rpdyB04B1_1ebJE_duD2o",
          Visible: "_1vntg59bE9Q9TlrfhWrxdY",
          DropDownSizer: "_2yCHl9jEyJatvpX_K0NOnS",
          ShareHeader: "QtgJ2vuunulNd0kt151m7",
          DropdownButton: "_1OAMjMYJFZIRqi7Yuw7Sk",
          Error: "_4P3AgyOvHm67bo4nqnykw",
          DropdownOption: "_2WqegcyOGXE3OfOBPuFKJc",
          ShareText: "_3nWCNZlUDKPFLtm9kzz-aM",
          ShareIcon: "_2ZgUDbleMuASK8J04DMwAI",
          ShareModalDialogCtn: "rkCkoPjO5tWNNKg1C-4He",
          ShareModal: "OuDcn_EUKN87W0QRAXmnm",
          ShareLanguagePicker: "_1AUpsJw7_5TmxJSEOpnMMa",
          LanguageLabel: "_2Mjl1MC-eBE-tHDeIoqR-X",
          LangaugeDropdown: "C7WyauRrz8Gn01miyf_zU",
          CarouselCtn: "_12tro3nlSoDAnHR8Owl2vq",
          LoadingCtn: "_1WIhto2_LVaK2uRT08ROL_",
          PreviewImageCtn: "_3Q80Cy7mIk7SgDXsIJVpBh",
          PreviewClickCtn: "AKi0dI-yZTqoGbrXwdcLU",
          PreviewAndIconCtn: "ufwvtRETTFZXtZhb_2YrV",
          CloseIcon: "_1GcFVEjZotDw7tRUGkNn_w",
          PreviewImage_1080x1080: "_3t0bs5rOn7hUuHkHzroNlv",
          PreviewImage_1080x1920: "SUsV4qmRw0Tb9YlN5RoPp",
          PreviewImage_1200x628: "c1xhpyCeymLIYsz_s72rE",
          ImageArrowCtn: "_3EH6zdLzxQWcZnxCqZW0Q",
          Arrow: "jvbeU0Bou-oLQKh3j3ZAP",
          Left: "_1wzQblWkABmbS_w5mzgjqG",
          Right: "_39Y8RA971bGbJbOzEu4D7Y",
          ArrowDisabled: "_2zvDQQbZ-fxXABN88O355",
          ImagesCtn: "_1penYHZK5jtR2fhACZ7oNg",
          CenterImage: "_17MFLvHvCFoo1Z5LYr2X5u",
          ImgAndPreviewCtn: "_2xSt2_hCKs1Y1mahSb2Q-t",
          PreviewMask: "_2Lj4I8nwnDHOQVw6BwzarS",
          Peek: "uUXl4JVWLrftehzyXSOX_",
          RightPeak: "_1OLhccdSVrD5PyyrMCHocr",
          LeftPeak: "_3MsRzX0A-Q5jHnzfgKh_sH",
          CenterImg: "_1bbh4X_f6RdHR2juBmB5CC",
          PeakImg: "_1ya7qrbf5qUmfEwm2ajy6y",
          InteractButton: "_2ROuf9Q_Xc2fJ6h6KMPhAv",
          InteractButtonIcon: "_1yRGhIYdp7cijMDnbCkWF_",
          InteractButtonText: "IKqdC1gWDEh47b6aShvM",
          CarouselHintCtn: "_13LmX30k-qZcko23iAy_Wy",
          CarouselHint: "_3Lndnk7OuA-Cxrwu08gp9C",
          ActiveHint: "_36bKAFgz9yC26XLbSWSLLK",
          FormatHint: "_3AG4PvnnmFCLO8DBW5LxfU",
          FooterCtn: "_3zpbzTS5MXoJJRzrH9P1_A",
          TooltipCtn: "_2R2HhI-PrhY9YK1e6aw8KH",
          ShareURLCtn: "_138H68CtJTGveTjNlBA7oh",
          ShareLinkButton: "_2-pp7mLO0Z5LW_FQNWcuxT",
          ShareShortUrl: "_3_ln9maFPGFW9W9EImpue5",
          ShareURLTitle: "_1i0cNS9ygjMYD1w4cYQaFn",
          SteamButtons: "g_mP1q1Dfphi44kdlau1n",
          SocialButtons: "_35VyVQJGOTuLFu-ykNK0sQ",
          FeedBtn: "_26-PhsWZa7m6d4R1dlcBoO",
          _: "_152BeQAIzn7gu6Px1V_qhD",
          _: "_36Gw4vPvTa9gxJT9uPT44t",
          _: "LmriTy2U0fOHClwJH7xM2",
          Disabled: "_37-P5ZQHj_XMuKff3PVXbB",
          VisBorder: "_28_hvR-87-1ah11ZwGiyOR",
          MobileCtn: "_1otpP9I_-wTkl2Jwm7SicJ",
          ShareLinkIcon: "_1kyX_DYZkTKUMjxdbfYgpp",
          ShareLinkText: "CZ5IqOSp9UsKs471m38mm",
          ElementFadeIn: "_34tvhpjD4JWJmlp63qfJ_u",
          BadgeBoxIntro: "_3ue5J5y5iKtAr7GmxxYyjr",
          BadgeBarFiller: "_2z0vHCKh4Vd4aHr-vQjwi5",
          Appear: "_21sWxqz5OUqF25JIXG2olE",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Section: "_23CAjrh1GSkSnVLvTR5oMw",
          Windows: "_1vUKHU_-dtbGzZHmFG_u-U",
          Linux: "_1o--oAuSJeE_GmsCFpkwbk",
          Controller: "_2WFjtAehE3pFqje383Apw-",
          Mac: "_3SAulun4j-hGdFAOaHMbp1",
          Deck: "_1cdYllaGl7qKTKCszDFyZy",
          CapRow: "_3PinvS-n0dF9rC5O78ku-V",
          PlatformContentsCtn: "_1PsKgEezJS5LMLbRK6JRZv",
          _: "_3JUUgSFwfKxpfQ_uNHi9Ux",
          SectionTitle: "_2ah4WA3WRlwVSDqcvyKiDp",
          BackgroundImage: "brAyRdlpyVp4WdUiouZB5",
          Playtest: "_3pbkBRNE2fKqDlygGwp91D",
          BG_Playtest: "_1SOo3GdhcPL3SZHHVSXD4Q",
          Demo: "_2x1g0ifxtuQ8mtjJ5iceYT",
          BG_Demo: "_1L4LhCnNHJcLq_zafC-iLq",
          GameImage: "_2yVfmbboadjMhiHjpNy-8q",
          SectionSubTitle: "_3D-DCkmRU57aIXxV54qrQy",
          ElementFadeIn: "_1QlNj-fqLYzkSNa-U9kQBj",
          StatsRow: "_3At0tlfltTfJr33sjMDd13",
          StatBlock: "_95lW8BaVq1fmWokWdPPsW",
          BigNum: "_2OZijVsBqx3_g0e6xUIed3",
          StatDescription: "_1Of54Z3aGealUyOUMITDzO",
          DemoSash: "pzuwMpcmcIVrNbv46H5g9",
          BadgeBoxIntro: "_2DanVgBGo7HGllaGxlFUPw",
          BadgeBarFiller: "_3IwREAEEL8jykwZNPZKhoi",
          Appear: "G3ygUAsC5hrz7PVYC_UfR",
        };
      },
      chunkid: (module) => {
        module.exports = {
          MonthlyChartTooltipCtn: "_1TNHuWn9a6C9HG2OhTIaAH",
          TooltipBackgroundOverlay: "_2gvJ9eyEAyGTfL9iQ3IuMd",
          TotalPlaytimeContainer: "MbHB9d5TrrPPsmCLXDaIV",
          TooltipImageContainer: "_133vUbAOO4PTUZTnAle9Gk",
          OtherGamesStack: "_24c6yhG567Fue2VRuoe_2i",
          CapsuleImg: "_3pVEkyjcVAxFbWBaXkDxtw",
          HoveredGameLabel: "k6Eh-X_tQXx5sEpDHBMq6",
          TotalPlaytime: "_3F-F53fTqM5DXVQc6Jz5d3",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Section: "_3Apb0bYbV5W1c7HG5T26XH",
          ChartContainer: "_23mKMjDPbjptriYDLI6HAk",
          Chart: "_28TwDjH899CiiJ8lJ1fFES",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          Icon: "_2V2sHETNfa62yMoDwSF3_t",
          IconGlow: "_3s4Rq3jnntBVP7HbJj1RMQ",
          AchievementIconWrapper: "_1fEbX-PfpZ2FhkhttWcm-V",
          RareAchievementIconGlowContainerRoot: "_2HUbCbZUn27MliiC8gRxGB",
          RareAchievementIconGlowContainer: "_2D_EJk8-jCnfqiwoKkOMVh",
          rotate: "_2liIQspBwdpNtEmYw2bU9j",
          RareAchievementNoAnimation: "_1a4bwiE4yUR3XXBKI6mKqt",
          RareAchievementIconGlow: "_1Z2eJs9-zNTKcWKy4M-oDE",
          HiddenLabel: "_1ABm6sfuqiZZDSL9z8mW1a",
          BackgroundAnimation: "_2jC4Eqt8IrbRbM81zvxlnW",
          "ItemFocusAnim-darkerGrey-nocolor": "_3jGCeVy7OzY5pw0Rpx0z8-",
          "ItemFocusAnim-darkerGrey": "_2Jqi29kzJtRTafvIOPyvAW",
          "ItemFocusAnim-darkGreySettings": "_2tg8Ji5QTXXXSzn1Q0HRa2",
          "ItemFocusAnim-darkGrey": "T-2rsbY05mXhgaIQkf73x",
          "ItemFocusAnim-grey": "_1WGat3-0-TCDKEtg7LEoB5",
          "ItemFocusAnim-translucent-white-10": "RkktEhJT7jnAfvbEiNBBH",
          "ItemFocusAnim-translucent-white-20": "_30c3lgfOmK8HMV6u21SQ42",
          "ItemFocusAnimBorder-darkGrey": "_1vYqEdzDmOIRAIgDNUHfBt",
          "ItemFocusAnim-green": "CrI_goODkSlbs2jjXglfz",
          focusAnimation: "_3xzftt0SCqsMfNLxtA825Q",
          hoverAnimation: "_10Y0xofBXAPurniv6K3_YV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Header1: "SPYFj8pCLpNmnuQJEDobC",
          Header2: "QuKtTJ4LCPUlQeWYfLNyX",
          Header3: "_3s7cUqglDds9wzcWb7OLz6",
          Link: "_29bMZB6BOQfTQ_3za-w60I",
          LinkHost: "_16eO9LHnJuheylkB3Fdrpn",
          LinkButton: "_2HnDgHQT_3ehcs4WgskKG5",
          LinkPill: "_3nRRZ1AKPWQnyWTcT1RDt9",
          UnorderedList: "_2FoSxA1yCqpvxdOJnu8N8Z",
          OrderedList: "vV4IwOV-RuzelptiRQ_ZS",
          StoreWidget: "_36Y-loIMvxDKY9RIVxecCp",
          MedalTVWidget: "_1j2vixiqbbe8GqxA-cmlhA",
          LoyaltyRewardCtn: "_14p7R6qC1Kkyg4Qal1UJZu",
          SaleSectionCtn: "_39HWXhhjsbML7K9sme9ItV",
          SaleTextCtn: "_2Tqq0UDtuHw6otaE2Ww46g",
          ReminderCtn: "_25AZkxZYa3ROp8PHchCq-k",
          BlockQuote: "_2cY7bYMGmnuPPhM3aMQMfa",
          SocialLink: "_2LAnc-M7XILk5D72Qy7V6q",
          SocialIcon: "dDjYNUHT-jcb_B0VGK6CP",
          LocalizeBlock: "_1oBceu_yGnJHhqsA8fmA7P",
          CheckMark: "_24AtTon5otxGQGBY3P6ATR",
          ScreenshotCarousel: "_3uA0hv9La9Do6XtRycM0RX",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl",
        };
      },
    },
  ]);
})();
