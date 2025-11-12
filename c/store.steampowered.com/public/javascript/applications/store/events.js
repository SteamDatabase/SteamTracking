(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4268],
  {
    chunkid: (module) => {
      module.exports = {
        ErrorMsg: "_1ZEL9R8kTy3jJqcuU_IguM",
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
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
      const _ = _._.Get(),
        _ = _._.GetSummaryStore();
      function _() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      const _ = (0, _._)((_) => {
          const {
              bInfiniteScroll: _,
              event_gid: __webpack_require__,
              announcement_gid: _,
              clansteamid: _,
              appid: _,
            } = _,
            [_, _] = (0, _.useState)(
              __webpack_require__
                ? _.GetClanEventModel(__webpack_require__)
                : void 0,
            ),
            [_] = (0, _._)(_?.appid, {
              include_assets: !0,
              include_release: !0,
              include_platforms: !0,
              include_screenshots: !0,
            }),
            [_, _] = (0, _.useState)(!1),
            _ = (_, _) => {
              _.token.reason ||
                (_(_),
                (function (_) {
                  let _;
                  if (_ && _.appid) _ = _._.Get().GetApp(_.appid)?.GetName();
                  else if (_ && _.clanSteamID) {
                    const _ = _._.GetClanInfoByClanAccountID(
                      _.clanSteamID.GetAccountID(),
                    );
                    _ = _ && _.group_name;
                  }
                  const _ = _ && _.GetNameWithFallback((0, _._)(_._.LANGUAGE));
                  if (_ && _ && _) {
                    const _ = (0, _._)(
                      "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                      _,
                      _,
                    );
                    document.title != _ && (document.title = _);
                  }
                })(_));
            },
            _ = (_) => {
              const _ = (0, _._)(_);
              console.error("StoreEventDetailView failed " + _.strErrorMsg, _),
                _(!0);
            };
          (0, _.useEffect)(_, []),
            (0, _.useEffect)(() => {
              const _ = _().CancelToken.source();
              return (
                _ ||
                  (__webpack_require__ &&
                  !_.GetClanEventModel(__webpack_require__)
                    ? _.LoadPartnerEventGeneric(
                        _,
                        _,
                        __webpack_require__,
                        void 0,
                        0,
                      )
                        .then((_) => _(_, _))
                        .catch(() => {
                          _.token.reason ||
                            _.LoadPartnerEventGeneric(
                              _,
                              _,
                              void 0,
                              __webpack_require__,
                              0,
                            )
                              .then((_) => _(_, _))
                              .catch(_);
                        })
                    : _ &&
                      !_.GetClanEventGIDFromAnnouncementGID(_) &&
                      _.LoadPartnerEventGeneric(_, _, void 0, _, 0)
                        .then((_) => _(_, _))
                        .catch(_)),
                () => {
                  _.cancel("StoreEventDetailView: unmounting");
                }
              );
            }, [__webpack_require__, _, _, _, _]);
          const _ = (0, _._)(_, _._.k_eStoreNewsHub, "allowRelative");
          if (_ || !_ || (_?.appid && !_)) {
            const _ = "lang_" + (0, _._)((0, _._)(_._.LANGUAGE)),
              _ = "";
            return _.createElement(
              "div",
              {
                className: (0, _._)(
                  _().EventDetailsPageContainer,
                  _,
                  _().PartnerEventFont,
                  _().NoTitleArtwork,
                ),
              },
              _.createElement("div", {
                style: {
                  height: "100px",
                },
              }),
              _.createElement(_._, {
                strImageURL: _,
              }),
              _.createElement(_._, {
                strImageURL: _,
                body: _
                  ? _.createElement(
                      "div",
                      {
                        className: _().ErrorMsg,
                      },
                      (0, _._)(
                        "#Events_FailedToFind",
                        _.createElement(
                          "a",
                          {
                            href: _._.STORE_BASE_URL + "news/",
                          },
                          (0, _._)("#EventDisplay_NewsHubSubtitle"),
                        ),
                      ),
                    )
                  : _.createElement(_._, {
                      string: (0, _._)("#Loading"),
                      size: "medium",
                      position: "center",
                    }),
                postbody: Boolean(_ && _)
                  ? _.createElement(_._, {
                      clanAccountID: _.GetAccountID(),
                      partnerEventStore: _,
                    })
                  : void 0,
              }),
            );
          }
          return _
            ? _.createElement(
                _._,
                null,
                _.createElement(_._, {
                  appid: _.appid,
                  trackingLocation: 7,
                  announcementGID: _.GetAnnouncementGID(),
                  partnerEventStore: _,
                  eventModel: _,
                  showAppHeader: !0,
                  closeModal: () => _.history.push(_),
                }),
              )
            : _.createElement(
                _._,
                null,
                _.createElement(_._, {
                  lang: (0, _._)(_._.LANGUAGE),
                  partnerEventStore: _,
                  event: _,
                  adminPanel:
                    _._.EREALM === _._.k_ESteamRealmChina
                      ? _.createElement(_._, {
                          eventModel: _,
                        })
                      : _.createElement(_._, {
                          eventModel: _,
                          partnerEventStore: _,
                        }),
                  otherEventRow: _.createElement(_._, {
                    clanAccountID: _.clanSteamID.GetAccountID(),
                    gidAnnouncement: _.AnnouncementGID,
                    partnerEventStore: _,
                  }),
                }),
              );
        }),
        _ = (0, _._)(_);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        if ("steam" === _) {
          if ("beta" !== new URLSearchParams().get("branch"))
            return {
              rgHiddenClans: [_._],
            };
        }
      }
      const _ = (_) => {
        const [_] = (0, _._)("byday", !1),
          [__webpack_require__] = (0, _._)("upcoming", !1);
        return (0, _._)(_._.LANGUAGE)
          ? _.createElement(
              _._,
              {
                bSalePage: !0,
              },
              _.createElement(
                _._,
                null,
                _.createElement(_._, {
                  exact: !0,
                  path: _._.EventViewByApp(
                    ":appid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?",
                  ),
                  render: (_) =>
                    _.createElement(_, {
                      key: "detailview_" + _.match.params.event_gid,
                      ..._,
                      appid:
                        _.match.params.appid &&
                        Number.parseInt(_.match.params.appid),
                      event_gid: _.match.params.event_gid,
                      bInfiniteScroll: "inline" == _.match.params.viewtype,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.EventViewByGroup(
                    ":groupid(\\d+)",
                    ":event_gid(\\d+)",
                    ":vanity?",
                  ),
                  render: (_) =>
                    _.createElement(_, {
                      key: "detailview_" + _.match.params.event_gid,
                      ..._,
                      clansteamid: new _._(_.match.params.groupid),
                      event_gid: _.match.params.event_gid,
                      bInfiniteScroll: "inline" == _.match.params.viewtype,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.OldAnnouncementViewByApp(
                    ":appid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?",
                  ),
                  render: (_) =>
                    _.createElement(_, {
                      key: "detailoldview_" + _.match.params.announcement_gid,
                      ..._,
                      appid:
                        _.match.params.appid &&
                        Number.parseInt(_.match.params.appid),
                      announcement_gid: _.match.params.announcement_gid,
                      bInfiniteScroll: "old_inline" == _.match.params.viewtype,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.OldAnnouncementViewByGroup(
                    ":groupid(\\d+)",
                    ":announcement_gid(\\d+)",
                    ":vanity?",
                  ),
                  render: (_) =>
                    _.createElement(_, {
                      key: "detailoldview_" + _.match.params.announcement_gid,
                      ..._,
                      clansteamid: new _._(_.match.params.groupid),
                      announcement_gid: _.match.params.announcement_gid,
                      bInfiniteScroll: "old_inline" == _.match.params.viewtype,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.NewsHubApp(":appid(\\d+)", ":vanity?"),
                  render: (_) =>
                    _.createElement(_._, {
                      key: _.match.params.appid,
                      ..._,
                      filter_to_appids: [Number(_.match.params.appid)],
                      section_by_day: _,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
                  render: (_) =>
                    _.createElement(_._, {
                      key: _.match.params.groupid,
                      ..._,
                      filter_to_clanids: [Number(_.match.params.groupid)],
                      section_by_day: _,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.NewsHubCollection(":collectionid", ":vanity?"),
                  render: (_) =>
                    _.createElement(_._, {
                      key: _.match.params.collectionid,
                      initialFilters: _(_.match.params.collectionid),
                      ..._,
                      filter_to_collection: _.match.params.collectionid,
                      section_by_day: _,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.NewsHubSale(":saleid", ":vanity?"),
                  render: (_) =>
                    _.createElement(_._, {
                      key: _.match.params.saleid,
                      ..._,
                      filter_to_saleid: _.match.params.saleid,
                      section_by_day: _ || __webpack_require__,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.NewsHubContentHub(
                    ":hubtype",
                    ":category_or_language?",
                    ":tag_name?",
                  ),
                  render: (_) =>
                    _.createElement(_._, {
                      key:
                        _.match.params.hubtype +
                        "_" +
                        _.match.params.category_or_language +
                        "_" +
                        _.match.params.tag_name,
                      ..._,
                      filter_to_contenthub_hubtype: _.match.params.hubtype,
                      filter_to_contenthub_category_or_language:
                        _.match.params.category_or_language,
                      filter_to_contenthub_tag_name: _.match.params.tag_name,
                      section_by_day: _,
                    }),
                }),
                _.createElement(_._, {
                  exact: !0,
                  path: _._.NewsHub(),
                  render: (_) =>
                    _.createElement(_._, {
                      key: "global",
                      ..._,
                      section_by_day: _,
                    }),
                }),
              ),
            )
          : null;
      };
    },
  },
]);
