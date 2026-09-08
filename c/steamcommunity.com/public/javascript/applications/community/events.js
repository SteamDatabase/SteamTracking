(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
        SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
        StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
        EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
        LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
        LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
        LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
        BackgroundAnimation: "_295HzH0_Gg7fchG1zO9Km7",
        "ItemFocusAnim-darkerGrey-nocolor": "_291aUneSnsR7SSD43BPEYt",
        "ItemFocusAnim-darkerGrey": "_3T-aeBZd_novjXZhPEqJ_L",
        "ItemFocusAnim-darkGreySettings": "ekd5ku98aKtUXOuTnlUpj",
        "ItemFocusAnim-darkGrey": "peNld_fsioxlGFxQfdd8I",
        "ItemFocusAnim-grey": "_1433gddOHXCko3qPvXFRFS",
        "ItemFocusAnim-translucent-white-10": "_3ZEmb3nXVV6Jl3vO3gd3n2",
        "ItemFocusAnim-translucent-white-20": "EoCuk2lmX0KUPR7Ja5J0J",
        "ItemFocusAnimBorder-darkGrey": "_3FtKchinLpLv8OXrbvS81w",
        "ItemFocusAnim-green": "_23vh8vhEvEmJ5bnq2YZfx8",
        focusAnimation: "wTWp1KqP_zaAfiOc2ovCo",
        hoverAnimation: "_2knkM4Dk-kiPNpW81PgE0Y",
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
        _ = __webpack_require__("chunkid");
      const _ = (_) =>
        (0, _.createElement)(_._, {
          ..._,
          key: _.match.params.oldAnnouncementGID,
          bClearDirty: !0,
          bPreview: !1,
          bPreventRedirect: !0,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      let _ = class extends _.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShowModal: !1,
              bLoadedLandingState: this.props.bPreventDismiss,
            });
        }
        componentDidMount() {
          this.props.bPreventDismiss
            ? this.LoadAppAndFirstEvent()
            : (window.fnPartnerEvent_ShowInfiniteScroll = (_, _) => {
                this.setState({
                  bShowModal: !0,
                  appid: _,
                  announcementGID: _,
                });
              });
        }
        async LoadAppAndFirstEvent() {
          var _;
          const _ = (0, _._)(
            "eventinfinitescrolllanding",
            "application_config",
          );
          let _;
          _ && "string" == typeof _ && (_ = _);
          const _ = window.location.href.startsWith(
              _._.COMMUNITY_BASE_URL + "groups",
            ),
            _ = _
              ? await _._.LoadOGGClanInfoForGroupVanity(
                  this.props.match.params.appid_or_vanity_str,
                )
              : await _._.LoadOGGClanInfoForIdentifier(
                  this.props.match.params.appid_or_vanity_str,
                );
          if ((console.log("output: ", (0, _._)(_), _), _))
            if (_.partner_events_enabled) {
              const _ = await _._.LoadAdjacentPartnerEventsByAnnouncement(
                _,
                _.clanSteamID,
                _.appid,
                3,
                3,
              );
              this.setState({
                bLoadedLandingState: !1,
                bShowModal: !0,
                appid: _.appid,
                clanSteamID: _.clanSteamID,
                announcementGID:
                  null === (_ = null == _ ? void 0 : _[0]) || void 0 === _
                    ? void 0
                    : _.AnnouncementGID,
              });
            } else
              this.setState({
                bLoadedLandingState: !1,
              });
          else
            console.error(
              "EventInfiniteScrollLanding: failed to load clan info for " +
                this.props.match.params.appid_or_vanity_str,
            ),
              this.setState({
                bLoadedLandingState: !1,
              });
        }
        HideModal() {
          this.props.bPreventDismiss ||
            this.setState({
              bShowModal: !1,
            });
        }
        render() {
          const { bPreventDismiss: _ } = this.props;
          return this.state.bShowModal
            ? (0, _.jsx)(_._, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: _._,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: _,
              })
            : this.state.bLoadedLandingState
              ? (0, _.jsx)(_._, {
                  string: (0, _._)("#Loading"),
                })
              : (0, _.jsx)("div", {});
        }
      };
      (0, _._)([_._], _.prototype, "HideModal", null), (_ = (0, _._)([_._], _));
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
      function _(_) {
        return (0, _.jsxs)("div", {
          className: _.LatestUpdateButtonCtn,
          children: [
            (0, _.jsx)("div", {
              className: _.LatestUpdateIcon,
              children: (0, _.jsx)(_.UTF, {
                role: "presentation",
              }),
            }),
            (0, _.jsx)(_._, {
              className: _.LatestUpdateButton,
              onClick: _.onClick,
              children: _._.Localize(
                "#EventBrowse_LatestUpdateTime_Button",
                (0, _._)(_.nUpdateTime),
              ),
            }),
          ],
        });
      }
      function _(_) {
        const { nUpdateTime: _, announcementGID: _, onClick: _ } = _,
          _ = _ ? _._.GetClanEventFromAnnouncementGID(_) : null,
          _ = _._;
        return (0, _.jsxs)("div", {
          className: _.Container,
          children: [
            (0, _.jsxs)("h2", {
              children: [
                (0, _._)("#EventBrowse_LastUpdateDate", (0, _._)(_)),
                (0, _.jsx)(_._, {
                  className: _.SectionButton,
                  onClick: (_) => {
                    null == _ || _(), _.stopPropagation(), _.preventDefault();
                  },
                  children: (0, _._)("#EventBrowse_MoreEventsBtn"),
                }),
              ],
            }),
            !!_ &&
              (0, _.jsx)(_._, {
                className: _.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: _._.PREFERRED_CHILD,
                children: (0, _.jsx)(_, {
                  event: _,
                  onClick: (_) => {
                    null == _ || _(), _.stopPropagation(), _.preventDefault();
                  },
                }),
              }),
          ],
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 500;
      function _(_) {
        const {
            strClassName: _,
            rgEvents: _,
            fnEventShowModal: _,
            elPostRowElement: _,
            bViewAllShowInfiniteScroll: _,
            nSummaryMaxLength: _,
          } = _,
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)();
        let _ = 2,
          _ = _ + 1;
        return (
          _.ownerWindow.window
            ? (_ = _.ownerWindow.window.innerWidth)
            : _.viewportWidth && (_ = _.viewportWidth.value),
          (_ = _ <= _ ? 1 : 2),
          _ && 0 == _.length && !_
            ? null
            : (0, _.jsxs)(_._, {
                className: _,
                "flow-children": "row",
                children: [
                  !!_ &&
                    _.length > 0 &&
                    (0, _.jsx)("div", {
                      className: _.Container,
                      children: (0, _.jsxs)(_._, {
                        children: [
                          (0, _.jsxs)("h2", {
                            children: [
                              _._.Localize("#EventBrowse_RecentEvents"),
                              !_ &&
                                !!_ &&
                                (0, _.jsx)(_.Fragment, {
                                  children:
                                    _ && _
                                      ? (0, _.jsx)(_._, {
                                          className: _.SectionButton,
                                          onClick: () => _(_[0]),
                                          children: _._.Localize(
                                            "#EventBrowse_MoreEventsBtn",
                                          ),
                                        })
                                      : (0, _.jsx)(_._, {
                                          eventModel: _[0],
                                          route: _._.k_eViewWebSiteHub,
                                          className: _.SectionButton,
                                          children: _._.Localize(
                                            "#EventBrowse_MoreEventsBtn",
                                          ),
                                        }),
                                }),
                            ],
                          }),
                          (0, _.jsx)("div", {
                            className: _.EventsSummariesCtn,
                            children: __webpack_require__
                              .slice(0, _)
                              .map((_) => {
                                const _ =
                                  _ && !(0, _._)()
                                    ? (_) => {
                                        _(_),
                                          _.stopPropagation(),
                                          _.preventDefault();
                                      }
                                    : void 0;
                                return (0, _.jsx)(
                                  _._,
                                  {
                                    event: _,
                                    onClick: _,
                                    nSummaryMaxLength: _,
                                  },
                                  _.GID,
                                );
                              }),
                          }),
                        ],
                      }),
                    }),
                  _,
                ],
              })
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            trackingLocation: _,
            strClassName: _,
            bViewAllShowInfiniteScroll: _,
          } = _,
          [_, _, _] = (0, _._)(),
          [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useState)(void 0),
          _ = (0, _._)(),
          _ = (0, _.useCallback)(() => {
            _(null), _();
          }, [_]),
          _ = (0, _.useCallback)(
            (_) => {
              _ &&
                _ &&
                _.BIsPartnerEvent() &&
                _.MarkEventRead(_.GID, _.clanSteamID.GetAccountID(), _) &&
                _.Flush(),
                _(_),
                _(void 0),
                _();
            },
            [_, _, _],
          ),
          { last_update_event: _, rgEvents: _ } = (function (_) {
            const {
                appid: _,
                event_customization: _,
                partnerEventStore: _,
                trackingLocation: _,
                fnEventShowModal: _,
              } = _,
              [_, _] = (0, _.useState)(null),
              [_, _] = (0, _.useState)(null),
              _ = (0, _._)(),
              [_] = (0, _._)("emgid", void 0),
              [_] = (0, _._)("announce_gid", void 0);
            return (
              (0, _.useEffect)(() => {
                const _ = (0, _._)("EventWebRowEmbed");
                let _ = !1;
                if (
                  (function (_) {
                    const _ = _;
                    if (_ && "object" == typeof _)
                      return (
                        void 0 !== _.bPreLoaded &&
                        "boolean" == typeof _.bPreLoaded &&
                        Array.isArray(_.announcementGIDList)
                      );
                    return !1;
                  })(_)
                ) {
                  (_ = _.bPreLoaded), _(_.last_update_event);
                  const _ = [];
                  _.announcementGIDList.forEach((_) => {
                    const _ = _._.GetClanEventFromAnnouncementGID(_);
                    _ && _.push(_);
                  }),
                    _(_);
                }
                if (!_) {
                  (async () => {
                    const _ = await _.LoadAdjacentPartnerEvents(
                      void 0,
                      void 0,
                      _,
                      0,
                      2,
                      _,
                    );
                    _(_),
                      _ &&
                        _ &&
                        _.length > 0 &&
                        (_.filter((_) => _.BIsPartnerEvent()).forEach((_) =>
                          _.MarkEventShown(
                            _.GID,
                            _.clanSteamID.GetAccountID(),
                            _,
                          ),
                        ),
                        _.Flush());
                  })();
                }
              }, [_, _, _, _, _, _]),
              (0, _.useEffect)(() => {
                if (null != _ && (_ || _)) {
                  const _ = _.find(
                    (_) => _.GID === _ || _.AnnouncementGID == _,
                  );
                  if (_) _(_);
                  else {
                    (async () => {
                      const _ = _
                        ? await _.LoadPartnerEventFromClanEventGID(_, _, 0)
                        : await _.LoadPartnerEventFromAnnoucementGID(_, _, 0);
                      _ && _([..._, _]);
                    })();
                  }
                }
              }, [_, _, _, _, _, _, _]),
              {
                last_update_event: _,
                rgEvents: _,
              }
            );
          })({
            ..._,
            fnEventShowModal: _,
          }),
          _ = (0, _.useCallback)(() => {
            const { event_gid: _, announcement_gid: _, clan_account_id: _ } = _;
            _ && _ && _.MarkEventRead(_, _, _) && _.Flush(), _(_), _(null), _();
          }, [_, _, _, _]);
        (0, _.useEffect)(
          () => (
            (window.fnPartnerEvent_ShowInfiniteScroll = (_, _) => {
              _(_), _(null), _(_), _();
            }),
            () => {
              window.fnPartnerEvent_ShowInfiniteScroll &&
                delete window.fnPartnerEvent_ShowInfiniteScroll;
            }
          ),
          [_],
        );
        const _ = (0, _._)(),
          _ = !!_ && !!_.rtime,
          _ =
            _ && !!_.announcement_gid && (!_ || 0 == _.length)
              ? _.announcement_gid
              : void 0;
        let _;
        return (
          _ && _
            ? (_ = (0, _.jsx)(_, {
                nUpdateTime: _.rtime,
                announcementGID: _,
                onClick: _,
              }))
            : !_ ||
              _ ||
              _ ||
              (_ = (0, _.jsx)(_, {
                nUpdateTime: _.rtime,
                onClick: _,
              })),
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_, {
                  ..._,
                  announcementGID:
                    _ || (null == _ ? void 0 : _.AnnouncementGID),
                  eventModel: _,
                  closeModal: _,
                }),
              }),
              (0, _.jsx)(_, {
                elPostRowElement: _,
                rgEvents: _,
                fnEventShowModal: _,
                bViewAllShowInfiniteScroll: _,
                strClassName: _,
              }),
            ],
          })
        );
      }
      function _(_) {
        const {
            appid: _,
            partnerEventStore: _,
            trackingLocation: _,
            announcementGID: _,
            eventModel: _,
            closeModal: _,
          } = _,
          _ = (0, _._)();
        return (0, _.jsx)(_._, {
          className: _ ? void 0 : _.StoreHeaderAdjust,
          eventClassName: _ ? _.GamePadUIWidthAdjust : void 0,
          appid: _,
          trackingLocation: _,
          announcementGID: _,
          partnerEventStore: _,
          eventModel: null != _ ? _ : void 0,
          closeModal: _,
        });
      }
      function _(_) {
        const { appid: _ } = _;
        let _ = new Date(1e3 * _._.NOW),
          _ = new Date(__webpack_require__.setUTCHours(0, 0, 0, 0) - 15552e6),
          _ = Math.floor(_.getTime() / 1e3);
        return (0, _.jsx)("div", {
          className:
            "detailBox altFooter greenlight_home_box section announcements_row",
          children: (0, _.jsx)(_, {
            appid: _,
            partnerEventStore: _._,
            event_customization: {
              require_tags: ["workshop"],
              rtime_oldestevent: _,
            },
            strClassName: _.Container,
            trackingLocation: _._._,
            bViewAllShowInfiniteScroll: !0,
          }),
        });
      }
      function _(_) {
        const [_, _] = _.useState(!0);
        return (
          _.useEffect(() => {
            _._.Init(new _._(_._.WEBAPI_BASE_URL)),
              _._.Init(),
              __webpack_require__(!1);
          }, []),
          _
            ? null
            : (0, _.jsx)(_._.Provider, {
                value: {
                  bCanUseLink: !0,
                },
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.ViewEventDetails(
                        ":appid_or_vanity_str",
                        ":oldAnnouncementGID(\\d+)",
                      ),
                      render: (_) =>
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.Listing(":appid_or_vanity_str"),
                      render: (_) =>
                        (0, _.jsx)(
                          _,
                          {
                            ..._,
                            bPreventDismiss: !0,
                            trackingLocation: _._._,
                          },
                          "InfScroll_NoDismissApp_" + _.match.params.appid,
                        ),
                    }),
                    (0, _.jsx)(_._, {
                      exact: !0,
                      path: _._.WorkshopHub(":appid(\\d+)"),
                      render: (_) =>
                        (0, _.createElement)(_, {
                          ..._,
                          appid: +_.match.params.appid,
                          key: "Workshop" + _.match.params.appid,
                        }),
                    }),
                    (0, _.jsx)(_._, {
                      path: _._.AppHub(":appid"),
                      render: (_) =>
                        (0, _.createElement)(_, {
                          ..._,
                          key: "InfScroll_App_" + _.match.params.appid,
                          trackingLocation: _._._,
                        }),
                    }),
                    (0, _.jsx)(_._, {
                      path: _._.GroupHub(":group_vanity"),
                      render: (_) =>
                        (0, _.createElement)(_, {
                          ..._,
                          key: "InfScroll_App_" + _.match.params.group_vanity,
                          trackingLocation: _._._,
                        }),
                    }),
                    (0, _.jsx)(_._, {
                      component: _._,
                    }),
                  ],
                }),
              })
        );
      }
    },
  },
]);
