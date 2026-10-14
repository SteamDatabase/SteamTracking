(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [85139],
    {
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
          return !_ || !_
            ? null
            : (0, _.jsx)("div", {
                className: _().StoreItemCtn,
                children: (0, _.jsx)("div", {
                  className: _().StoreItemRow,
                  children: (0, _.jsxs)("a", {
                    href: (0, _._)(_.GetStorePageURL(), _),
                    children: [
                      (0, _.jsx)("img", {
                        src: _.GetAssets().GetSmallCapsuleURL(),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().StoreItemDescription,
                        children: [_.GetShortDescription(), " "],
                      }),
                    ],
                  }),
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
          if (!_ || !_.milestones || _.milestones.length == 0) return null;
          const _ = _.milestones.every((_) => !!_.shipped);
          return (0, _.jsx)(_._, {
            feature: "seasonpassproductpage",
            children: (0, _.jsxs)("div", {
              className:
                "game_area_description overflow_allowed season_pass_area",
              children: [
                (0, _.jsx)("h2", {
                  children: (0, _._)("#SeasonPass_Header"),
                }),
                !_ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
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
                    ],
                  }),
                _.milestones
                  .sort((_, _) =>
                    _.shipped && _.shipped
                      ? (_.rtime_complete ?? 0) - (_.rtime_complete ?? 0)
                      : _.shipped
                        ? -1
                        : _.shipped
                          ? 1
                          : _(_) - _(_),
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
          });
        }
        function _(_) {
          const _ = _.dates ?? [];
          return _[_.length - 1]?.rtime ?? 0;
        }
        function _(_) {
          const { milestone: _, baseGameAppID: _ } = _,
            _ = (_.milestone_desc?.length ?? 0) > 0;
          return (0, _.jsxs)("div", {
            className: _().SeasonPass,
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().Title, !!_.shipped && _().Shipped),
                children: [
                  (0, _.jsxs)("span", {
                    children: [
                      !!_.shipped && "\u2713",
                      "\xA0",
                      _._.GetTokenWithFallback(_.title ?? []),
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
            _ = _._.GetTokenWithFallback(_.milestone_desc ?? []),
            _ = _.appid || _.coming_soon_appid;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _
                ? (0, _.jsx)(_, {
                    appid: _,
                  })
                : null,
              (0, _.jsxs)("div", {
                className: _().Description,
                children: [
                  (0, _.jsx)(_._, {
                    text: _,
                  }),
                  !!_.shipped &&
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
          const _ = _.dates ?? [],
            _ = _[0]?.rtime ?? 0,
            _ = _.filter((_, _) => _ == 0 || (_.rtime ?? 0) < _);
          return (0, _.jsx)("div", {
            className: _().Upcoming,
            children: (0, _._)(
              "#SeasonPass_Release_Date",
              (0, _.jsx)("br", {}),
              [..._].reverse().map((_, _) => {
                const _ = (0, _._)(
                  _.coming_soon_display_type,
                  _.rtime ?? 0,
                  void 0,
                  !0,
                );
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
            _ = _?.steam_release_date || _.rtime_complete || 0;
          return (0, _.jsx)("div", {
            className: _().Shipped,
            children: (0, _._)(
              "#SeasonPass_Released_Date",
              (0, _.jsx)("br", {}),
              (0, _._)(_),
            ),
          });
        }
        function _(_) {
          const { milestone: _, baseGameAppID: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: _().Status,
                children: (0, _._)(
                  _.appid
                    ? "#SeasonPass_DLC_Status"
                    : "#SeasonPass_Event_Status",
                ),
              }),
              !!_.appid &&
                (0, _.jsx)(_, {
                  milestone: _,
                }),
              !!(_.appid && _.event_gid) &&
                (0, _.jsx)("span", {
                  className: _().Padding,
                }),
              !!_.event_gid &&
                (0, _.jsx)(_, {
                  milestone: _,
                  baseGameAppID: _,
                }),
            ],
          });
        }
        function _(_) {
          const { milestone: _ } = _,
            _ = (0, _._)(_.appid),
            { data: _ } = (0, _._)(_);
          return (0, _.jsx)("a", {
            href: (0, _._)(_) || `${_._.STORE_BASE_URL}app/${_.appid}`,
            children: (0, _._)("#SeasonPass_ShowStore"),
          });
        }
        function _(_) {
          const { milestone: _, baseGameAppID: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)(_.event_gid ?? "");
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
                  !!_ &&
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
      chunkid: (module) => {
        module.exports = {
          SeasonPass: "_3gfJe6nIkr6ZriDDPYp-z7",
          Description: "_3sdNbLRZYrhEi9HWS1XAdu",
          Title: "_3u0Ar8iq66LfqUbdXK2Scn",
          Shipped: "_14Z4vFKjBcbizLEXIFSvWg",
          DateAndControl: "_1bjdoxghswkEhrMsa43lpE",
          Upcoming: "_2P0yy2pWYDXAg02ywBc6xc",
          Status: "_2_JVEcPrnkP9U8YnlcUaV7",
          Content: "FL3zV7J5DHOjOZzklSfsu",
          Text: "_2bVkdku0nL6ga2QxSvR0Np",
          Padding: "_3ENBi7dhQgbnK6NpZ-ut67",
          Strike: "_33nXsC2--p10FL6D9ICf9W",
          Chevron: "z1O0vP7Inz1H3vHuEjrUl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          StoreItemCtn: "_2SxhiHrQSCtBnKf3oKdon2",
          StoreItemRow: "_3cBgZqhPaJpdeZl8hARr1o",
          StoreItemDescription: "_2pkGLftA9XILpaWN0kejPk",
        };
      },
    },
  ]);
})();
