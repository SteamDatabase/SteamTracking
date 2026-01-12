(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5139],
  {
    chunkid: (module) => {
      module.exports = {
        StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
        StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
        StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
      };
    },
    chunkid: (module) => {
      module.exports = {
        StoreImage: "_1XiTdhCGWl9dUCWd6Eg89o",
        StoreVideo: "_1Nwn2Vf2AjZ4McbxZX9P8V",
      };
    },
    chunkid: (module) => {
      module.exports = {
        SeasonPass: "oa0Mg649faNiGrRBlXZ7b",
        Description: "_3ZmgNZ5nbBbDojlnZLRkgc",
        Title: "_1PoePgbQRAy0Sbtz2Po_R7",
        Shipped: "Y4pxifDaDKS1sYR7j-35X",
        DateAndControl: "_3-5TufllBcRHGRpNEAuY5u",
        Upcoming: "lZmBeL-zQf8GORGTr4uX-",
        Status: "_2uj7WLmhl5-zIS1NE_Ig-9",
        Content: "_1Axq2b2LqJszxamtTvrnTV",
        Text: "_3zXxPvXsjZinhyyYuHArVW",
        Padding: "_26DsxbVP4TJh-d5NBcU6Qc",
        Strike: "CoE7R_RffGU0rYbU4eHwa",
        Chevron: "_1qoDole_3YKojGNDyp72EY",
      };
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = {
        include_assets: !0,
        include_basic_info: !0,
      };
      function _(_) {
        const { appid: _ } = _,
          [__webpack_require__] = (0, _._)(_, _),
          _ = (0, _._)();
        return __webpack_require__ && _
          ? _.createElement(
              "div",
              {
                className: _().StoreItemCtn,
              },
              _.createElement(
                "div",
                {
                  className: _().StoreItemRow,
                },
                _.createElement(
                  "a",
                  {
                    href: (0, _._)(__webpack_require__.GetStorePageURL(), _),
                  },
                  _.createElement("img", {
                    src: __webpack_require__.GetAssets().GetSmallCapsuleURL(),
                  }),
                  _.createElement(
                    "div",
                    {
                      className: _().StoreItemDescription,
                    },
                    __webpack_require__.GetShortDescription(),
                    " ",
                  ),
                ),
              ),
            )
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        const _ = new URL(window.location.href),
          _ = _.pathname.split("/"),
          _ = _?.[2];
        _.searchParams.get("beta");
        return `${_._.STORE_ICON_BASE_URL}${_}/`;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return new _._(new _._(), 0);
      }
      function _(_) {
        const { text: _, languageOverride: __webpack_require__ } = _,
          [_] = (0, _.useState)(
            new _._(
              new Map([
                ...Array.from(_._.entries()),
                [
                  "img",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
              ]),
              _,
              __webpack_require__ || 0,
            ),
          );
        return _.createElement(_.Fragment, null, _.ParseBBCode(_, {}, !0));
      }
      function _(_) {
        const { showErrorInfo: _ } = _.context;
        let _ = _?.children?.toString();
        if (
          (null == _ || null == _ || 0 == _.length) &&
          ((_ = _?.args?.[""] || _?.args?.src),
          null == _ || null == _ || 0 == _.length)
        )
          return "";
        const _ = (0, _._)("store_page_asset_url", "application_config"),
          _ = (0, _._)("store_page_extra_assets_url", "application_config"),
          _ = (0, _._)("store_page_extra_assets_map", "application_config");
        if (_ && __webpack_require__.startsWith(_._ + "/")) {
          const _ = __webpack_require__.replace(_._ + "/", ""),
            _ = _[_];
          if (_) {
            const _ = [];
            let _ = !1;
            for (const _ of _) {
              const _ = _.urlPart;
              _.push({
                url: _.replace("%s", _),
                extension: _.extension,
                alt_text: _.alt_text ?? null,
              }),
                (_ = _ || ["mp4", "webm"].includes(_.extension));
            }
            if (_) {
              const _ = _.find((_) => "webm" === _.extension)?.url,
                _ = _.find((_) => "mp4" === _.extension)?.url,
                _ = _.find(
                  (_) =>
                    ".poster.webp" === _.extension ||
                    ".poster.avif" === _.extension,
                )?.url,
                _ = _.find(
                  (_) =>
                    _.alt_text?.length > 0 &&
                    ("webm" === _.extension || "webm" === _.extension),
                )?.alt_text,
                _ = (0, _._)() || (0, _._)(),
                _ = (_) => {
                  const _ = _.currentTarget;
                  _.paused ? _.play() : _.pause();
                };
              return _.createElement(
                "video",
                {
                  className: _().StoreVideo,
                  poster: _,
                  "aria-label": _,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  onClick: _,
                },
                _ &&
                  !_ &&
                  _.createElement("source", {
                    src: _,
                    type: "video/webm",
                  }),
                _ &&
                  !_._.IN_CLIENT &&
                  _.createElement("source", {
                    src: _,
                    type: "video/mp4",
                  }),
              );
            }
            {
              const _ = _[0]?.alt_text,
                _ = _[0]?.url;
              return _.createElement("img", {
                className: _().StoreImage,
                src: _,
                alt: _,
              });
            }
          }
          _ = _.replace("%s", _);
        } else
          _ = __webpack_require__
            .replace(_._, _())
            .replace("http://", "https://");
        return _
          ? _.createElement(_._, {
              className: _().StoreImage,
              src: _,
            })
          : _.createElement("img", {
              className: _().StoreImage,
              src: _,
              alt: (0, _._)("#EventEditor_InsertImage_URL"),
            });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { season_pass: _ } = _;
        return _ && _.milestones && 0 != _.milestones.length
          ? _.createElement(
              _._,
              {
                feature: "seasonpassproductpage",
              },
              _.createElement(
                "div",
                {
                  className:
                    "game_area_description overflow_allowed season_pass_area",
                },
                _.createElement("h2", null, (0, _._)("#SeasonPass_Header")),
                _.createElement(
                  "p",
                  null,
                  (0, _._)("#SeasonPass_Incomplete_Desc"),
                ),
                _.createElement(
                  "p",
                  null,
                  (0, _._)(
                    "#SeasonPass_Incomplete_Desc2",
                    _.createElement("a", {
                      href: `${_._.STORE_BASE_URL}account/emailoptout`,
                    }),
                  ),
                ),
                _.milestones
                  .sort((_, _) =>
                    _.shipped && _.shipped
                      ? _.rtime_complete - _.rtime_complete
                      : _.shipped
                        ? -1
                        : _.shipped
                          ? 1
                          : _.dates[_.dates.length - 1].rtime -
                            _.dates[_.dates.length - 1].rtime,
                  )
                  .map((_) =>
                    _.createElement(_, {
                      key: "ms_" + _.milestone_id,
                      baseGameAppID: _.appid,
                      milestone: _,
                    }),
                  ),
              ),
            )
          : null;
      }
      function _(_) {
        const { milestone: _, baseGameAppID: __webpack_require__ } = _,
          _ = _.milestone_desc?.length > 0;
        return _.createElement(
          "div",
          {
            className: _().SeasonPass,
          },
          _.createElement(
            "div",
            {
              className: (0, _._)(_().Title, Boolean(_.shipped) && _().Shipped),
            },
            _.createElement(
              "span",
              null,
              Boolean(_.shipped) && "✓",
              " ",
              _._.GetTokenWithFallback(_.title),
            ),
            _.createElement(
              "div",
              {
                className: _().DateAndControl,
              },
              _.createElement(_, {
                milestone: _,
              }),
            ),
          ),
          _ &&
            _.createElement(_, {
              milestone: _,
              baseGameAppID: __webpack_require__,
            }),
        );
      }
      function _(_) {
        const { milestone: _, baseGameAppID: __webpack_require__ } = _,
          _ = _._.GetTokenWithFallback(_.milestone_desc),
          _ = _.appid || _.coming_soon_appid;
        return _.createElement(
          _.Fragment,
          null,
          Boolean(_) &&
            _.createElement(_, {
              appid: _,
            }),
          _.createElement(
            "div",
            {
              className: _().Description,
            },
            _.createElement(_, {
              text: _,
            }),
            Boolean(_.shipped) &&
              _.createElement(_, {
                milestone: _,
                baseGameAppID: __webpack_require__,
              }),
          ),
        );
      }
      function _(_) {
        const { milestone: _ } = _;
        if (_.shipped)
          return _.createElement(
            "div",
            {
              className: _().Shipped,
            },
            (0, _._)(
              "#SeasonPass_Released_Date",
              _.createElement("br", null),
              (0, _._)(_.rtime_complete),
            ),
          );
        const _ = _.dates[0].rtime,
          _ = _.dates.filter((_, _) => 0 == _ || _.rtime < _);
        return _.createElement(
          "div",
          {
            className: _().Upcoming,
          },
          (0, _._)(
            "#SeasonPass_Release_Date",
            _.createElement("br", null),
            [..._].reverse().map((_, _) => {
              const _ = (0, _._)(_.coming_soon_display_type, _.rtime, null, !0);
              return _.createElement(
                "div",
                {
                  key: "dd" + _.rtime + _.coming_soon_display_type,
                  className: _ + 1 < _.length ? _().Strike : void 0,
                },
                _,
              );
            }),
          ),
        );
      }
      const _ = {};
      function _(_) {
        const { milestone: _, baseGameAppID: __webpack_require__ } = _;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: _().Status,
            },
            (0, _._)(
              _.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
            ),
          ),
          _.appid &&
            _.createElement(_, {
              milestone: _,
            }),
          Boolean(_.appid && _.event_gid) &&
            _.createElement("span", {
              className: _().Padding,
            }),
          Boolean(_.event_gid) &&
            _.createElement(_, {
              milestone: _,
              baseGameAppID: __webpack_require__,
            }),
        );
      }
      function _(_) {
        const { milestone: _ } = _,
          [__webpack_require__] = (0, _._)(_.appid, _);
        return _.createElement(
          "a",
          {
            href:
              __webpack_require__?.GetStorePageURL() ||
              `${_._.STORE_BASE_URL}app/${_.appid}`,
          },
          (0, _._)("#SeasonPass_ShowStore"),
        );
      }
      function _(_) {
        const { milestone: _, baseGameAppID: __webpack_require__ } = _,
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)(_.event_gid);
        return _
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "a",
                {
                  href: `${_._.STORE_BASE_URL}news/app/${__webpack_require__}/view/${_.event_gid}`,
                  onClick: (_) => {
                    _.preventDefault(), _.stopPropagation(), _(!0);
                  },
                },
                (0, _._)("#SeasonPass_ReadEvent"),
              ),
              Boolean(_) &&
                _.createElement(_._, {
                  appid: __webpack_require__,
                  eventModel: _,
                  announcementGID: _.AnnouncementGID,
                  closeModal: () => _(!1),
                  partnerEventStore: _._,
                  bShowOnlyInitialEvent: !0,
                  showAppHeader: !0,
                  trackingLocation: 3,
                }),
            )
          : _.createElement(
              "a",
              {
                href: `${_._.STORE_BASE_URL}news/app/${__webpack_require__}/view/${_.event_gid}`,
              },
              (0, _._)("#SeasonPass_ReadEvent"),
            );
      }
    },
  },
]);
