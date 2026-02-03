(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4268],
  {
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
        StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
        SectionButtonCtn: "_1HP0yfVUrZ-TPBYhiQkye2",
        SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
        EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
        LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
        LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
        LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
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
        _ = __webpack_require__("chunkid");
      const _ = (_) =>
        _.createElement(_._, {
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
            ? _.createElement(_._, {
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
              ? _.createElement(_._, {
                  string: (0, _._)("#Loading"),
                })
              : _.createElement("div", null);
        }
      };
      (0, _._)([_._], _.prototype, "HideModal", null), (_ = (0, _._)([_._], _));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        constructor(_) {
          super(_),
            (this.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            });
          const _ = (0, _._)("EventWebRowEmbed");
          if (this.ValidateStoreDefault(_)) {
            (this.state.bPreLoaded = _.bPreLoaded),
              (this.state.announcementGIDList = _.announcementGIDList),
              (this.state.last_update_event = _.last_update_event),
              (this.state.events = []),
              this.state.announcementGIDList.forEach((_) => {
                const _ = _._.GetClanEventFromAnnouncementGID(_);
                _ && this.state.events.push(_);
              });
            const _ = new URLSearchParams(window.location.search),
              _ = null == _ ? void 0 : _.get("emgid");
            if (_) {
              const _ = this.state.events.find((_) => _.GID === _);
              _ &&
                ((this.state.modalInitialEvent = _),
                (this.state.bShowModal = !0));
            }
          }
        }
        async componentDidMount() {
          const {
            appid: _,
            event_customization: _,
            partnerEventStore: __webpack_require__,
            trackingLocation: _,
          } = this.props;
          if (!this.state.bPreLoaded) {
            const _ = await __webpack_require__.LoadAdjacentPartnerEvents(
              null,
              null,
              _,
              0,
              2,
              _,
            );
            if (
              (this.setState({
                events: _,
              }),
              _ && _ && _.length > 0)
            ) {
              const _ = _._.Get().GetTracker();
              this.state.events
                .filter((_) => _.BIsPartnerEvent())
                .forEach((_) =>
                  _.MarkEventShown(_.GID, _.clanSteamID.GetAccountID(), _),
                ),
                _.Flush();
            }
          }
          window.fnPartnerEvent_ShowInfiniteScroll = (_, _) => {
            this.setState({
              bShowModal: !0,
              announcementGID: _,
              modalInitialEvent: void 0,
            });
          };
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !(!_ || "object" != typeof _) &&
            void 0 !== _.bPreLoaded && "boolean" == typeof _.bPreLoaded &&
            Array.isArray(_.announcementGIDList)
          );
        }
        ShowModal(_) {
          const { trackingLocation: _ } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: _,
            announcementGID: void 0,
          });
          const _ = _._.Get().GetTracker();
          _ &&
            _.BIsPartnerEvent() &&
            __webpack_require__.MarkEventRead(
              _.GID,
              _.clanSteamID.GetAccountID(),
              _,
            ) &&
            __webpack_require__.Flush();
        }
        ShowLatestUpdateModal() {
          const {
              event_gid: _,
              announcement_gid: _,
              clan_account_id: __webpack_require__,
            } = this.state.last_update_event,
            { trackingLocation: _ } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: void 0,
            announcementGID: _,
          });
          const _ = _._.Get().GetTracker();
          _ && _.MarkEventRead(_, __webpack_require__, _) && _.Flush();
        }
        CloseModal() {
          this.setState({
            bShowModal: !1,
            modalInitialEvent: null,
          });
        }
        BHasLastUpdateEvent() {
          var _;
          return Boolean(
            null === (_ = this.state.last_update_event) || void 0 === _
              ? void 0
              : _.rtime,
          );
        }
        BShouldShowLastUpdateEvent() {
          const { last_update_event: _, events: _ } = this.state;
          return (
            !(
              !this.BHasLastUpdateEvent() ||
              !(null == _ ? void 0 : _.announcement_gid)
            ) && !(null == _ ? void 0 : _.length)
          );
        }
        render() {
          var _, _, _;
          const _ = this.state.events,
            _ = window.screen.width <= 500 ? 1 : 2,
            _ = Boolean(null == _ ? void 0 : _.length),
            _ = this.BHasLastUpdateEvent(),
            _ = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: _ } = this.props;
          return _.createElement(
            _._,
            {
              className: _,
            },
            this.state.bShowModal &&
              _.createElement(_, {
                ...this.props,
                announcementGID:
                  this.state.announcementGID ||
                  (null === (_ = this.state.modalInitialEvent) || void 0 === _
                    ? void 0
                    : _.AnnouncementGID),
                eventModel: this.state.modalInitialEvent,
                closeModal: this.CloseModal,
              }),
            _ &&
              _.createElement(
                "div",
                null,
                _.createElement(
                  "h2",
                  null,
                  (0, _._)("#EventBrowse_RecentEvents"),
                ),
                !(null === (_ = this.context) || void 0 === _
                  ? void 0
                  : _.IN_GAMEPADUI) &&
                  _.createElement(
                    "div",
                    {
                      className: _.SectionButtonCtn,
                    },
                    this.props.bViewAllShowInfiniteScroll
                      ? _.createElement(
                          _._,
                          {
                            className: _.SectionButton,
                            onClick: () => this.ShowModal(_[0]),
                          },
                          (0, _._)("#EventBrowse_MoreEventsBtn"),
                        )
                      : _.createElement(
                          _._,
                          {
                            eventModel: _[0],
                            route: _._.k_eViewWebSiteHub,
                            className: _.SectionButton,
                          },
                          (0, _._)("#EventBrowse_MoreEventsBtn"),
                        ),
                  ),
                _.createElement(
                  "div",
                  {
                    className: _.EventsSummariesCtn,
                  },
                  _.slice(0, _).map((_) => {
                    const _ =
                      1 === _.length && window.screen.width > 500 ? _._ : _._;
                    return _.createElement(_, {
                      key: _.GID,
                      event: _,
                      onClick: (_) => {
                        this.ShowModal(_),
                          _.stopPropagation(),
                          _.preventDefault();
                      },
                    });
                  }),
                ),
              ),
            Boolean(_ && _) &&
              _.createElement(_, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: _,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(
              _ &&
                !_ &&
                !(null === (_ = this.context) || void 0 === _
                  ? void 0
                  : _.IN_GAMEPADUI),
            ) &&
              _.createElement(_, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              }),
          );
        }
      }
      function _(_) {
        const {
            appid: _,
            partnerEventStore: __webpack_require__,
            trackingLocation: _,
            announcementGID: _,
            eventModel: _,
            closeModal: _,
          } = _,
          _ = (0, _._)();
        return _.createElement(_._, {
          className: _ ? void 0 : _.StoreHeaderAdjust,
          eventClassName: _ ? _.GamePadUIWidthAdjust : void 0,
          appid: _,
          trackingLocation: _,
          announcementGID: _,
          partnerEventStore: __webpack_require__,
          eventModel: _,
          closeModal: _,
        });
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: _.LatestUpdateButtonCtn,
          },
          _.createElement(
            "div",
            {
              className: _.LatestUpdateIcon,
            },
            _.createElement(_.UTF, {
              role: "presentation",
            }),
          ),
          _.createElement(
            _._,
            {
              className: _.LatestUpdateButton,
              onClick: _.onClick,
            },
            (0, _._)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, _._)(_.nUpdateTime),
            ),
          ),
        );
      }
      function _(_) {
        const {
            nUpdateTime: _,
            announcementGID: __webpack_require__,
            onClick: _,
          } = _,
          _ = __webpack_require__
            ? _._.GetClanEventFromAnnouncementGID(__webpack_require__)
            : null,
          _ = (_) => {
            null == _ || _(), _.stopPropagation(), _.preventDefault();
          },
          _ = window.screen.width > 500 ? _._ : _._;
        return _.createElement(
          "div",
          null,
          _.createElement(
            "h2",
            null,
            (0, _._)("#EventBrowse_LastUpdateDate", (0, _._)(_)),
          ),
          _.createElement(
            "div",
            {
              className: _.SectionButtonCtn,
            },
            _.createElement(
              "div",
              {
                className: _.SectionButton,
                onClick: _,
              },
              (0, _._)("#EventBrowse_ViewLatestUpdate"),
            ),
          ),
          Boolean(_) &&
            _.createElement(
              _._,
              {
                className: _.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: _._.PREFERRED_CHILD,
              },
              _.createElement(_, {
                event: _,
                onClick: _,
              }),
            ),
        );
      }
      (_.contextType = _._),
        (0, _._)([_._], _.prototype, "ShowModal", null),
        (0, _._)([_._], _.prototype, "ShowLatestUpdateModal", null),
        (0, _._)([_._], _.prototype, "CloseModal", null);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        render() {
          const { appid: _ } = this.props;
          let _ = _._.GetTimeNowWithOverrideAsDate(),
            _ = new Date(_.setUTCHours(0, 0, 0, 0) - 15552e6),
            _ = Math.floor(__webpack_require__.getTime() / 1e3);
          return _.createElement(
            "div",
            {
              className:
                "detailBox altFooter greenlight_home_box section announcements_row",
            },
            _.createElement(_, {
              appid: _,
              partnerEventStore: _._,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: _,
              },
              strClassName: _.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          );
        }
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(!0);
        return (
          _.useEffect(() => {
            _._.Init(new _._(_._.WEBAPI_BASE_URL)),
              _._.Init(),
              Promise.all([_._.InitGlobal()]).then(() =>
                __webpack_require__(!1),
              );
          }, []),
          _
            ? null
            : _.createElement(
                _._.Provider,
                {
                  value: {
                    bCanUseLink: !0,
                  },
                },
                _.createElement(
                  _._,
                  null,
                  _.createElement(_._, {
                    exact: !0,
                    path: _._.ViewEventDetails(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (_) =>
                      _.createElement(_, {
                        ..._,
                      }),
                  }),
                  _.createElement(_._, {
                    exact: !0,
                    path: _._.Listing(":appid_or_vanity_str"),
                    render: (_) =>
                      _.createElement(_, {
                        key: "InfScroll_NoDismissApp_" + _.match.params.appid,
                        ..._,
                        bPreventDismiss: !0,
                        trackingLocation: 6,
                      }),
                  }),
                  _.createElement(_._, {
                    exact: !0,
                    path: _._.WorkshopHub(":appid(\\d+)"),
                    render: (_) =>
                      _.createElement(_, {
                        ..._,
                        appid: +_.match.params.appid,
                        key: "Workshop" + _.match.params.appid,
                      }),
                  }),
                  _.createElement(_._, {
                    path: _._.AppHub(":appid"),
                    render: (_) =>
                      _.createElement(_, {
                        ..._,
                        key: "InfScroll_App_" + _.match.params.appid,
                        trackingLocation: 6,
                      }),
                  }),
                  _.createElement(_._, {
                    path: _._.GroupHub(":group_vanity"),
                    render: (_) =>
                      _.createElement(_, {
                        ..._,
                        key: "InfScroll_App_" + _.match.params.group_vanity,
                        trackingLocation: 6,
                      }),
                  }),
                  _.createElement(_._, {
                    component: _._,
                  }),
                ),
              )
        );
      }
    },
  },
]);
