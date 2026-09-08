(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [85139],
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
          SeasonPassDisplayFromStoreBrowse: () => _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = {
        include_assets: !0,
        include_basic_info: !0,
      };
      function _(_) {
        const { appid: _ } = _,
          [_] = (0, _._)(_, _),
          _ = (0, _._)();
        return _ && _
          ? (0, _.jsx)("div", {
              className: _().StoreItemCtn,
              children: (0, _.jsx)("div", {
                className: _().StoreItemRow,
                children: (0, _.jsxs)("a", {
                  href: (0, _._)(__webpack_require__.GetStorePageURL(), _),
                  children: [
                    (0, _.jsx)("img", {
                      src: __webpack_require__.GetAssets().GetSmallCapsuleURL(),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().StoreItemDescription,
                      children: [
                        __webpack_require__.GetShortDescription(),
                        " ",
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { appid: _ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _?.season_pass
          ? (0, _.jsx)(_, {
              season_pass: _.season_pass,
            })
          : null;
      }
      function _(_) {
        const { season_pass: _ } = _;
        return _ && _.milestones && 0 != _.milestones.length
          ? (0, _.jsx)(_._, {
              feature: "seasonpassproductpage",
              children: (0, _.jsxs)("div", {
                className:
                  "game_area_description overflow_allowed season_pass_area",
                children: [
                  (0, _.jsx)("h2", {
                    children: (0, _._)("#SeasonPass_Header"),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)("#SeasonPass_Incomplete_Desc"),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)(
                      "#SeasonPass_Incomplete_Desc2",
                      (0, _.jsx)("a", {
                        href: `${_._.STORE_BASE_URL}account/notificationsettings`,
                      }),
                    ),
                  }),
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
                      (0, _.jsx)(
                        _,
                        {
                          baseGameAppID: _.appid,
                          milestone: _,
                        },
                        "ms_" + _.milestone_id,
                      ),
                    ),
                ],
              }),
            })
          : null;
      }
      function _(_) {
        const { milestone: _, baseGameAppID: _ } = _,
          _ = _.milestone_desc?.length > 0;
        return (0, _.jsxs)("div", {
          className: _().SeasonPass,
          children: [
            (0, _.jsxs)("div", {
              className: (0, _._)(_().Title, Boolean(_.shipped) && _().Shipped),
              children: [
                (0, _.jsxs)("span", {
                  children: [
                    Boolean(_.shipped) && "✓",
                    " ",
                    _._.GetTokenWithFallback(_.title),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().DateAndControl,
                  children: (0, _.jsx)(_, {
                    milestone: _,
                  }),
                }),
              ],
            }),
            _ &&
              (0, _.jsx)(_, {
                milestone: _,
                baseGameAppID: _,
              }),
          ],
        });
      }
      function _(_) {
        const { milestone: _, baseGameAppID: _ } = _,
          _ = _._.GetTokenWithFallback(_.milestone_desc),
          _ = _.appid || _.coming_soon_appid;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            Boolean(_) &&
              (0, _.jsx)(_, {
                appid: _,
              }),
            (0, _.jsxs)("div", {
              className: _().Description,
              children: [
                (0, _.jsx)(_._, {
                  text: _,
                }),
                Boolean(_.shipped) &&
                  (0, _.jsx)(_, {
                    milestone: _,
                    baseGameAppID: _,
                  }),
              ],
            }),
          ],
        });
      }
      function _(_) {
        const { milestone: _ } = _;
        if (_.shipped)
          return (0, _.jsx)(_, {
            milestone: _,
          });
        const _ = _.dates[0].rtime,
          _ = _.dates.filter((_, _) => 0 == _ || _.rtime < _);
        return (0, _.jsx)("div", {
          className: _().Upcoming,
          children: (0, _._)(
            "#SeasonPass_Release_Date",
            (0, _.jsx)("br", {}),
            [..._].reverse().map((_, _) => {
              const _ = (0, _._)(_.coming_soon_display_type, _.rtime, null, !0);
              return (0, _.jsx)(
                "div",
                {
                  className: _ + 1 < _.length ? _().Strike : void 0,
                  children: _,
                },
                "dd" + _.rtime + _.coming_soon_display_type,
              );
            }),
          ),
        });
      }
      function _(_) {
        const { milestone: _ } = _,
          _ = (0, _._)(_.appid),
          { data: _ } = (0, _._)(_),
          _ = _?.steam_release_date || _.rtime_complete;
        return (0, _.jsx)("div", {
          className: _().Shipped,
          children: (0, _._)(
            "#SeasonPass_Released_Date",
            (0, _.jsx)("br", {}),
            (0, _._)(_),
          ),
        });
      }
      const _ = {};
      function _(_) {
        const { milestone: _, baseGameAppID: _ } = _;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)("div", {
              className: _().Status,
              children: (0, _._)(
                _.appid ? "#SeasonPass_DLC_Status" : "#SeasonPass_Event_Status",
              ),
            }),
            _.appid &&
              (0, _.jsx)(_, {
                milestone: _,
              }),
            Boolean(_.appid && _.event_gid) &&
              (0, _.jsx)("span", {
                className: _().Padding,
              }),
            Boolean(_.event_gid) &&
              (0, _.jsx)(_, {
                milestone: _,
                baseGameAppID: _,
              }),
          ],
        });
      }
      function _(_) {
        const { milestone: _ } = _,
          [_] = (0, _._)(_.appid, _);
        return (0, _.jsx)("a", {
          href:
            __webpack_require__?.GetStorePageURL() ||
            `${_._.STORE_BASE_URL}app/${_.appid}`,
          children: (0, _._)("#SeasonPass_ShowStore"),
        });
      }
      function _(_) {
        const { milestone: _, baseGameAppID: _ } = _,
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)(_.event_gid);
        return _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("a", {
                  href: `${_._.STORE_BASE_URL}news/app/${_}/view/${_.event_gid}`,
                  onClick: (_) => {
                    _.preventDefault(), _.stopPropagation(), _(!0);
                  },
                  children: (0, _._)("#SeasonPass_ReadEvent"),
                }),
                Boolean(_) &&
                  (0, _.jsx)(_._, {
                    appid: _,
                    eventModel: _,
                    announcementGID: _.AnnouncementGID,
                    closeModal: () => _(!1),
                    partnerEventStore: _._,
                    bShowOnlyInitialEvent: !0,
                    showAppHeader: !0,
                    trackingLocation: _._._,
                  }),
              ],
            })
          : (0, _.jsx)("a", {
              href: `${_._.STORE_BASE_URL}news/app/${_}/view/${_.event_gid}`,
              children: (0, _._)("#SeasonPass_ReadEvent"),
            });
      }
    },
  },
]);
