(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8521],
  {
    chunkid: (module) => {
      module.exports = {
        BroadcastChatCtn: "_28b1vPJH7sip9Uh_p3OJvD",
      };
    },
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        UpcomingEventsCtn: "_2bWupCdqo2ydQKY6NnkUB6",
        SectionTitle: "_7MpRs3COqajm5Yq2cyHCk",
        EventSchedCtn: "Tn2UrQKNb5TtPYtu9eJOo",
        EventItemCtn: "z6qIMnRuBMfsKvkgAMr4X",
        Title: "_2EqgH8ow9heADdpLvDdJFn",
        SessionTime: "_IkarZfcdwDZIzHBUAup1",
        ActiveEventCtn: "_2lP0CenzIHyncnSquDOYX2",
        LiveNote: "_3zSJmWuHhBAbq80HWDxRZg",
        LiveIcon: "_38GJhGq-WQnIwnn8cr7h5p",
        EventDescription: "_3hKDoSYfjaFvieDQXVYs82",
        ReadMoreBtn: "_2z4bawzux4DqU5n4BaSssW",
        EventsScheduleCtn: "_33-478dIs2y89VpwjBKd5Q",
        ReminderContainer: "_2vLZTXCwfColAphn-AKL29",
        OnlyIcon: "_3fZISAQ1UOTiyviS_bMh3-",
        PastEventsCtn: "_3pfjFJ9WVi45La-eVD1EBw",
        HelpDialogDetailsCtn: "_1IQeQq6EP-VdV6AZAJ3Rug",
        HelpRequirements: "_3yMlxXljDQU9oAEzydEHBB",
      };
    },
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        ConferenceHome: "_3tSqDwD1rkt0nwIB8025VK",
        LeftCol: "_19xFd3vdYEozXiTDzOEto9",
        AgendaToggle: "_1rjE02_5_HPWGT3UJXQKL2",
        CollapseBtn: "_2RCNdz1kCYXgL3wheg5ts6",
        CalendarBtn: "_22bby_AsedipJlq0-5qtmY",
        CalendarText: "kxtN0yE4qv3o_wwBWnnLs",
        MainCol: "_1qlknQargwyqHQhwj_8oum",
        InteractionCtn: "_39uHL_Fe3PpolZLRdah_VU",
        BroadcastCtn: "_240cuck3u91loqxwvTCj-",
        videoContainerSizer: "twsjQDioroj0pL68fDPZh",
        Hidden: "aE3VL3T6yQRMd_AKTrhue",
        ChatColumn: "_2ldId97FtoJ0M0Sw45iEC6",
        ChatTitle: "_3CjWmRtkS-bipkNJfDvGal",
        QAColumn: "_1RCLwKL1eycfalZ4MrKxB9",
        PreEventNote: "__FhrYr6JkEOLBHADuZP0",
        TabControlsCtn: "_1HJDDlNR32Jt_Ia9XJhZKH",
        Close: "_3cKbt74603iNN2a2pFoDL",
        ShowBothTabs: "fZBE8Pcls5-xbHBmWaIzC",
        ChatTab: "_3WoUgyFb6zejRRjTzMR36x",
        QATab: "_1An5OJv3NQypTb4kDdjRYq",
        InnerChatTab: "_1g3oabV2KUxjOJOaAzfEUp",
        TabTitle: "_24i11is7XyYPV89pSY3xBt",
        Popout: "QHxXWore8H11Ach3U2g5V",
        Active: "_3PSCm3SaHjGjYbM2kBZwKt",
        ChatStack: "_1ogmvaT56600iCAZCN3hj3",
        AboutTitle: "_3yWGoYvgAyD6vP018TFBNb",
      };
    },
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        ConferencePageCtn: "oP_SPwwzov5nQN2TQUAEf",
        ConferenceContentsCtn: "_1HPPRdXNo8sgT-dXQ9h-5l",
        ConferenceHeaderCtn: "_1AbLqPiq2KJuEV09TbddQW",
        LogoImage: "_3i2i50OjRZCY5qTtlLvN7G",
        LogoImageMobile: "_3iVf9n6tpBlwoSdiOW3Jhf",
        ConferenceDateRange: "_2FSEt04eUDUO8y1rLtlEat",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Main: "_1Zn_5pvuMbqr57ws1eJKe",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          ConferenceRoutes: () => _,
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          this.m_mapConferences = _._.map();
        }
        GetConferenceInfo(_) {
          return this.m_mapConferences.get(_);
        }
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_ConferenceStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        async Init() {
          let _ = (0, _._)("conferenceinfo", "application_config");
          if (this.ValidateStoreDefault(_)) {
            const _ = (0, _._)(_._.LANGUAGE),
              _ = (0, _._)(_.clan_faq_about_page),
              _ = _._.Get().GetFAQPublishedContent(_, _),
              _ = {
                strConferenceID: _.vanity,
                rtStartTime: _.start_rtime,
                rtEndTime: _.end_rtime,
                clanSteamID: new _._(_.event_group_steamid),
                broadcastSteamID: new _._(_.broadcast_steamid),
                bPartnerOnly: _.partner_only,
                faqAboutPage: _,
                strLocalizedLogos: null,
                strLocalizedMobileLogos: null,
                globalQandASessionID: _.global_qanda_session_id,
                youtubeVideoID: _.youtubeVideoID,
              };
            this.m_mapConferences.set(_.vanity, _);
            const _ = await (0, _._)(
                _.localized_logo,
                _,
                null == _ ? void 0 : _.timestamp,
              ),
              _ = await (0, _._)(
                _.localized_mobile_logo,
                _,
                null == _ ? void 0 : _.timestamp,
              );
            this.m_mapConferences.set(_.vanity, {
              ..._,
              strLocalizedLogos: "string" == typeof _ ? [_] : _,
              strLocalizedMobileLogos: "string" == typeof _ ? [_] : _,
            });
          }
        }
        ValidateStoreDefault(_) {
          const _ = _;
          return (
            !(!_ || "object" != typeof _) &&
            "string" == typeof _.event_group_steamid &&
              "number" == typeof _.start_rtime &&
            "number" == typeof _.end_rtime
          );
        }
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { conferenceInfo: _ } = _,
          _ = _.broadcastSteamID.ConvertTo64BitString();
        return _.createElement(
          _._,
          null,
          _.createElement(_.default, {
            steamIDBroadcast: _,
            watchLocation: 5,
            bStartMuted: !0,
          }),
        );
      }
      function _(_) {
        const { conferenceInfo: _ } = _,
          _ = (0, _._)(() => _.broadcastSteamID.ConvertTo64BitString());
        return _.createElement(
          "div",
          {
            className: (0, _._)(
              _.BroadcastChatCtn,
              _.className ? `${_.className}` : "",
            ),
          },
          _.createElement(
            _._,
            null,
            _.createElement(_._, {
              emoticonStore: _._,
              watchLocation: 5,
              steamID: _,
              globalChat: !0,
              bPartnerMemberOnlyChat: _.bPartnerOnly,
              bInvertLayout: !0,
            }),
          ),
        );
      }
      function _(_) {
        const { conferenceInfo: _ } = _,
          [__webpack_require__, _] = _.useState(!1);
        return __webpack_require__
          ? null
          : _.createElement(
              "div",
              {
                className: _.broadcast_floating,
              },
              _.createElement(_.BroadcastEmbeddablePopoutHeader, {
                steamIDBroadcast: _.broadcastSteamID.ConvertTo64BitString(),
                OnPreventPopup: () => _(!0),
              }),
              _.createElement(_, {
                conferenceInfo: _,
              }),
            );
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const { conferenceInfo: _ } = _;
        return "dev" != _._.WEB_UNIVERSE
          ? null
          : _.createElement(
              "div",
              null,
              _.createElement("h1", null, "Conference Data"),
              _.createElement(_._, {
                data: _,
              }),
              _.createElement("h1", null, "Config Data"),
              _.createElement(_._, {
                strConfigID: "application_config",
              }),
            );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        async LoadInitialCalendarData(_, _) {
          return (
            this.m_inFlight ||
              (this.m_inFlight = this.InternalLoadInitialCalendarData(_, _)),
            this.m_inFlight
          );
        }
        async InternalLoadInitialCalendarData(_, _) {
          _._.IsInitialized() || _._.InitGlobal(),
            (0, _._)({
              collectionid: _,
              bSectionByDay: !0,
              rtCalendarEnd: _,
            });
          const _ = (0, _._)(),
            _ = (0, _._)("conference_calendar", "application_config");
          _ &&
            ("dev" == _._.WEB_UNIVERSE &&
              console.log(
                "Conference LandingPage loading initial events: " + _.length,
                _,
              ),
            await __webpack_require__.RegisterCalendarEventsAndModels(_)),
            __webpack_require__.SetFilteredView((_) => !0);
        }
        static Get() {
          return _.m_singleton || (_.m_singleton = new _()), _.m_singleton;
        }
        constructor() {
          this.m_inFlight = null;
        }
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
      const _ = "emclan",
        _ = "emgid";
      function _(_) {
        const { displayLocation: _, fnChangeModalEvent: __webpack_require__ } =
            _,
          [_, _] = _.useState(null),
          [_, _] = (0, _._)(_, null),
          [_, _] = (0, _._)(_, null);
        return (
          (0, _._)(__webpack_require__, (_, _) => {
            _(_), _(_._.InitFromClanID(_).ConvertTo64BitString());
          }),
          _.useEffect(() => {
            if (null != _ && null != _) {
              const _ = new _._(_);
              _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(_, _, 0).then(
                _,
              );
            }
          }, [_, _]),
          _
            ? _.createElement(_._, {
                appid: _.appid,
                trackingLocation: _,
                announcementGID: _.GetAnnouncementGID(),
                partnerEventStore: _._,
                eventModel: _,
                showAppHeader: !0,
                closeModal: () => {
                  _(null), _(null), _(null);
                },
              })
            : null
        );
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
      const _ = 10;
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)(_),
          _ = _.GetActiveEventsAt(_) || [],
          [_] = _.useState(new _._()),
          _ = _.useCallback(
            (_, _) => (0, _._)(_._.GetClanEventModel(_), window),
            [],
          );
        return 0 == _.GetNumEventsLoaded()
          ? _.createElement(
              "div",
              null,
              (0, _._)("#Conference_No_Schedule_Yet"),
            )
          : _.createElement(
              "div",
              {
                className: _.EventsScheduleCtn,
              },
              _.createElement(_, {
                displayLocation: 6,
                fnChangeModalEvent: _,
              }),
              _.createElement(_, {
                rgActiveEvents: _,
                fnDisplayModalEvent: _,
              }),
              _.createElement(_, {
                rgActiveEvents: _,
                fnDisplayModalEvent: _,
                rtNow: _,
              }),
              _.createElement("br", null),
              _.createElement("br", null),
              _.createElement(
                _._,
                {
                  onClick: (_) =>
                    (0, _._)(_.createElement(_, null), (0, _._)(_)),
                },
                (0, _._)("#Conference_NeedHelp"),
              ),
            );
      }
      function _(_) {
        return _.createElement(
          _,
          {
            ..._,
          },
          _.createElement(_, {
            ..._,
          }),
        );
      }
      function _(_) {
        const { rgActiveEvents: _, rtNow: __webpack_require__ } = _,
          _ = (0, _._)()
            .GetCalendarItemsInTimeRange(__webpack_require__ + 1)
            .rgCalendarItems.filter((_) => !_.some((_) => _.GID == _.unique_id))
            .sort((_, _) => _.start_time - _.start_time);
        return 0 == _.length
          ? _.createElement(
              "div",
              null,
              (0, _._)("#Conference_No_More_Schedule"),
            )
          : _.createElement(
              "div",
              {
                className: _.UpcomingEventsCtn,
              },
              _.createElement(
                "div",
                {
                  className: _.SectionTitle,
                },
                (0, _._)("#Conference_ScheduleNext"),
              ),
              _.createElement(
                "div",
                {
                  className: _.EventSchedCtn,
                },
                _.map((_, _) =>
                  _.createElement(_, {
                    key: _.unique_id,
                    bDisplayAsUpNext: Boolean(0 == _ && _.length >= 1),
                    calendarItem: _,
                    fnDisplayModalEvent: _.fnDisplayModalEvent,
                    rtNow: __webpack_require__,
                  }),
                ),
              ),
            );
      }
      function _(_) {
        const {
            calendarItem: _,
            bDisplayAsUpNext: __webpack_require__,
            fnDisplayModalEvent: _,
            rtNow: _,
          } = _,
          _ = _._.GetClanEventModel(_.unique_id),
          _ = (0, _._)(_._.LANGUAGE),
          _ = _.GetStartTimeAndDateUnixSeconds(),
          _ = (0, _._)(new Date(1e3 * _), new Date(1e3 * _));
        return _.createElement(
          "div",
          {
            className: _.EventItemCtn,
            onClick: () => _(_.GID, _.clanSteamID.GetAccountID()),
          },
          _.createElement(
            "div",
            {
              className: _.Title,
            },
            _.GetNameWithFallback(_),
          ),
          _.createElement(
            "div",
            {
              className: _.SessionTime,
            },
            !_ && _.createElement("div", null, (0, _._)(_, !0)),
            _.createElement(
              "div",
              null,
              Boolean(__webpack_require__ && _)
                ? (0, _._)(
                    "#Conference_StartInMin",
                    Math.max(1, Math.floor((_ - _) / 60)),
                  )
                : (0, _._)(
                    "#Conference_StartsAt",
                    (0, _._)(_, {
                      bForce24HourClock: !1,
                    }),
                  ),
            ),
          ),
          _.createElement(
            "div",
            {
              className: (0, _._)(_.ReminderContainer, _.OnlyIcon),
            },
            _.createElement(_._, {
              eventModel: _,
              lang: _,
              bOnlyShowIcon: !0,
              bExpandLeft: !0,
              bShowStartTime: !1,
            }),
          ),
        );
      }
      function _(_) {
        const { rgActiveEvents: _, fnDisplayModalEvent: __webpack_require__ } =
          _;
        if (!_ || 0 == _.length) return null;
        const _ = _[0],
          _ = (0, _._)(_._.LANGUAGE),
          _ = _._.ParseEventModelPresenters(_, _);
        return _.createElement(
          "div",
          {
            className: _.ActiveEventCtn,
          },
          _.createElement(
            "div",
            {
              className: _.LiveNote,
            },
            _.createElement("div", {
              className: _.LiveIcon,
            }),
            "Live Now!",
          ),
          _.createElement(
            "div",
            {
              className: _.Title,
            },
            _.GetNameWithFallback(_),
          ),
          Boolean(_) &&
            _.map((_) =>
              _.createElement(
                _._,
                {
                  key: "presenter_" + _.name,
                  name: _.name,
                  title: _.title,
                  photo: _.photo,
                  company: _.company,
                  bioString: _.bio,
                },
                _.createElement("div", null, _.name),
              ),
            ),
          _.createElement(
            "div",
            {
              className: _.EventDescription,
            },
            _.GetSummaryWithFallback(_),
          ),
          _.createElement(
            "div",
            {
              className: _.ReadMoreBtn,
              onClick: () =>
                __webpack_require__(_.GID, _.clanSteamID.GetAccountID()),
            },
            (0, _._)("#EventEmail_Button_ClickForMoreDetails"),
          ),
        );
      }
      function _(_) {
        const { conferenceInfo: _ } = _,
          _ = (0, _._)(),
          _ = (0, _._)(_),
          _ = __webpack_require__.GetActiveEventsAt(_) || [],
          [_] = _.useState(new _._()),
          _ = __webpack_require__
            .GetCalendarItemsInTimeRange(_.rtStartTime - 1, _)
            .rgCalendarItems.filter(
              (_) => 0 == _.length || _[0].GID != _.unique_id,
            )
            .sort((_, _) => _.start_time - _.start_time);
        return 0 == _.length
          ? _.createElement("div", null, (0, _._)("#Conference_NoPastEvents"))
          : _.createElement(
              "div",
              {
                className: _.PastEventsCtn,
              },
              _.createElement(_, {
                displayLocation: 6,
                fnChangeModalEvent: _,
              }),
              _.map((_) => {
                const _ = _._.GetClanEventModel(_.unique_id);
                return _.createElement(_._, {
                  key: "row" + _.unique_id,
                  eventModel: _,
                  calendarEvent: _,
                  bSuppressHoverEffects: !1,
                  mode: "wide",
                  fnOnClicked: () =>
                    _.Dispatch(_.GID, _.clanSteamID.GetAccountID()),
                });
              }),
            );
      }
      function _(_) {
        return _.createElement(
          _,
          {
            ..._,
          },
          _.createElement(_, {
            ..._,
          }),
        );
      }
      function _(_) {
        const { conferenceInfo: _ } = _,
          _ = (0, _._)("WithCalendarStore"),
          [_, _] = (0, _.useState)(!0);
        return (
          (0, _.useEffect)(() => {
            _.token.reason ||
              _.Get()
                .LoadInitialCalendarData(_.rtEndTime, _.strConferenceID)
                .finally(() => {
                  _.token.reason || _(!1);
                });
          }, [_.rtEndTime, _.strConferenceID, _]),
          _
            ? _.createElement(_._, null)
            : _.createElement(_.Fragment, null, _.children)
        );
      }
      function _(_) {
        const { closeModal: _ } = _;
        return _.createElement(
          _._,
          {
            strTitle: (0, _._)("#Conference_NeedHelp"),
            bAlertDialog: !0,
            onCancel: _,
            onOK: _,
          },
          _.createElement("div", null, (0, _._)("#Conference_NeedHelp_Desc1")),
          _.createElement(
            "div",
            null,
            _.createElement(
              "div",
              {
                className: _.HelpDialogDetailsCtn,
              },
              _.createElement(
                "div",
                null,
                (0, _._)("#Conference_NeedHelp_BroadcastChatQ"),
              ),
              _.createElement(
                "ul",
                {
                  className: _.HelpRequirements,
                },
                _.createElement(
                  "li",
                  null,
                  (0, _._)("#Conference_NeedHelp_ChatA1"),
                ),
                _.createElement(
                  "li",
                  null,
                  (0, _._)(
                    "#Conference_NeedHelp_BroadcastChatA1",
                    _.createElement(
                      "a",
                      {
                        href: "https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A",
                      },
                      (0, _._)("#Conferenec_NeedHelp_LimitedAccounts"),
                    ),
                  ),
                ),
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.HelpDialogDetailsCtn,
              },
              _.createElement(
                "div",
                null,
                (0, _._)("#Conference_NeedHelp_QandAQ"),
              ),
              _.createElement(
                "ul",
                null,
                _.createElement(
                  "li",
                  null,
                  (0, _._)("#Conference_NeedHelp_ChatA1"),
                ),
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.HelpDialogDetailsCtn,
              },
              _.createElement(
                "span",
                null,
                (0, _._)("#Conference_NeedHelp_StillHaveQuestions"),
              ),
              _.createElement(
                "a",
                {
                  href: "https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=933",
                },
                (0, _._)("#Conference_NeedHelp_CreateTicket"),
              ),
            ),
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 30;
      function _(_) {
        const { conferenceInfo: _, bShowYouTube: __webpack_require__ } = _,
          [_, _] = _.useState(!1),
          _ = (0, _._)(_._.PerMinute) < _.rtStartTime - _ * _._.PerMinute;
        return _.createElement(
          "div",
          {
            className: _.ConferenceHome,
          },
          _.createElement(
            "div",
            {
              className: (0, _._)(_.LeftCol, _ ? "Active" : "Hidden"),
            },
            _.createElement(
              "div",
              {
                className: _.AgendaCtn,
              },
              _.createElement(_, {
                conferenceInfo: _,
              }),
              _.createElement(
                "div",
                {
                  className: _.AgendaToggle,
                  onClick: () => {
                    _(!_);
                  },
                },
                _.createElement(
                  _._,
                  {
                    toolTipContent: (0, _._)("#QAndA_HideSchedule"),
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.CollapseBtn,
                    },
                    _.createElement(_.F2T, {
                      angle: 0,
                    }),
                  ),
                ),
                _.createElement(
                  _._,
                  {
                    toolTipContent: (0, _._)("#QAndA_ShowSchedule"),
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.CalendarBtn,
                    },
                    _.createElement(_.VvS, null),
                    _.createElement(
                      "div",
                      {
                        className: _.CalendarText,
                      },
                      "See Event Schedule",
                    ),
                  ),
                ),
              ),
            ),
          ),
          _.createElement(
            "div",
            {
              className: _.MainCol,
            },
            __webpack_require__ &&
              _.createElement(_._, {
                videoID: _.youtubeVideoID,
                classNameAlign: "",
                classNameSize: _.sizeFull,
                bAutoPlay: !0,
                bShowVideoImmediately: !0,
              }),
            Boolean(_)
              ? _.createElement(
                  "div",
                  {
                    className: _.InteractionCtn,
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.PreEventNote,
                    },
                    (0, _._)("#Conference_ChatHidden", _),
                  ),
                )
              : _.createElement(_, {
                  conferenceInfo: _,
                }),
          ),
        );
      }
      function _(_) {
        const { conferenceInfo: _ } = _,
          [__webpack_require__, _] = _.useState(window.innerWidth > 910),
          [_, _] = _.useState(!0),
          _ =
            _._.COMMUNITY_BASE_URL +
            "broadcast/chatonly/" +
            _.broadcastSteamID.ConvertTo64BitString(),
          _ =
            _._.COMMUNITY_BASE_URL +
            "questions/" +
            _._.VANITY_ID +
            "/view/" +
            _.globalQandASessionID;
        return _.createElement(
          "div",
          {
            className: _.InteractionCtn,
          },
          _.createElement(
            "div",
            {
              className: _.TabControlsCtn,
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _.InnerChatTab,
                  _.ChatTab,
                  __webpack_require__ ? _.Active : "",
                ),
              },
              _.createElement(
                "div",
                {
                  className: _.TabTitle,
                  onClick: () => {
                    _(!0), _(!1);
                  },
                },
                (0, _._)("#Conference_Tab_Chat"),
              ),
              _.createElement(
                _._,
                {
                  toolTipContent: (0, _._)("#QAndA_PopOutChat_ttip"),
                },
                _.createElement(
                  "a",
                  {
                    className: _.Popout,
                    href: _,
                    target: "_blank",
                  },
                  _.createElement(_.YNO, null),
                ),
              ),
            ),
            _.createElement(
              "div",
              {
                className: (0, _._)(_.InnerChatTab, _.QATab, _ ? _.Active : ""),
              },
              _.createElement(
                "div",
                {
                  className: _.TabTitle,
                  onClick: () => {
                    _(!1), _(!0);
                  },
                },
                (0, _._)("#Conference_Tab_QandA"),
              ),
              _.createElement(
                _._,
                {
                  toolTipContent: (0, _._)("#QAndA_PopOutQAndA_ttip"),
                },
                _.createElement(
                  "a",
                  {
                    className: _.Popout,
                    href: _,
                    target: "_blank",
                  },
                  _.createElement(_.YNO, null),
                ),
              ),
            ),
            _.createElement(
              _._,
              {
                toolTipContent: (0, _._)("#QAndA_ChatToggle_ShowBoth"),
              },
              _.createElement(
                "div",
                {
                  className: _.ShowBothTabs,
                  onClick: () => {
                    _(!0), _(!0);
                  },
                },
                _.createElement(_.QQ4, null),
              ),
            ),
          ),
          _.createElement(
            "div",
            {
              className: _.ChatStack,
            },
            Boolean(
              (__webpack_require__ && _) || (!_ && !__webpack_require__),
            ) &&
              _.createElement(
                _.Fragment,
                null,
                _.createElement(
                  "div",
                  {
                    className: _.ChatColumn,
                  },
                  _.createElement(_, {
                    conferenceInfo: _,
                    className: _.ChatCtn,
                  }),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.QAColumn,
                  },
                  _.createElement(_._, {
                    gidSession: _.globalQandASessionID,
                  }),
                ),
              ),
            Boolean(__webpack_require__ && !_) &&
              _.createElement(_, {
                conferenceInfo: _,
                className: _.ChatCtn,
              }),
            Boolean(!__webpack_require__ && _) &&
              _.createElement(_._, {
                gidSession: _.globalQandASessionID,
              }),
          ),
        );
      }
      function _(_) {
        const { conferenceInfo: _ } = _;
        if (!_.faqAboutPage)
          return _.createElement("div", null, (0, _._)("#Conference_NoAbout"));
        const {
          title: __webpack_require__,
          content: _,
          timestamp: _,
        } = _.faqAboutPage;
        return _.createElement(
          "div",
          null,
          _.createElement(
            "div",
            {
              className: _.AboutTitle,
            },
            __webpack_require__,
          ),
          _.createElement(_._, {
            text: _,
            bShowErrorInfo: !1,
          }),
        );
      }
      function _(_) {
        const { conferenceInfo: _ } = _;
        return _.createElement(_, {
          conferenceInfo: _,
        });
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const { strVanity: _ } = _,
          _ = _.Get().GetConferenceInfo(_);
        return _
          ? _.createElement(
              _._,
              null,
              _.createElement(
                "div",
                {
                  className: _.ConferencePageCtn,
                },
                _.createElement(_, {
                  conferenceInfo: _,
                }),
              ),
            )
          : _.createElement("div", null, (0, _._)("#Conference_Invalid"));
      }
      function _(_) {
        const { conferenceInfo: _ } = _,
          _ = (_) =>
            window.sessionStorage.setItem(
              "conferenceCurrentTab",
              `?tab=${_.key}`,
            ),
          _ = [],
          _ = (0, _._)();
        return (
          _ < _.rtEndTime &&
            _.push({
              name: (0, _._)("#Conference_tab_Home"),
              key: "live",
              contents: _.createElement(
                _._,
                null,
                _.createElement(_, {
                  bShowYouTube: !!_.youtubeVideoID,
                  conferenceInfo: _,
                }),
              ),
              onClick: _,
            }),
          _.push({
            name: (0, _._)("#Conference_tab_Past"),
            key: "past",
            contents: _.createElement(
              _._,
              null,
              _.createElement(_, {
                conferenceInfo: _,
              }),
              !_.youtubeVideoID &&
                Boolean(_ < _.rtEndTime) &&
                _.createElement(_, {
                  conferenceInfo: _,
                }),
            ),
            onClick: _,
          }),
          _.push({
            name: (0, _._)("#Conference_tab_Info"),
            key: "about",
            contents: _.createElement(
              _._,
              null,
              _.createElement(_, {
                conferenceInfo: _,
              }),
              !_.youtubeVideoID &&
                Boolean(_ < _.rtEndTime) &&
                _.createElement(_, {
                  conferenceInfo: _,
                }),
            ),
            onClick: _,
          }),
          _.push({
            name: "(VO/WebUniveser=Dev) Debug",
            key: "debug",
            hidden: "dev" != _._.WEB_UNIVERSE,
            contents: _.createElement(
              _._,
              null,
              _.createElement(_, {
                conferenceInfo: _,
              }),
            ),
            onClick: _,
          }),
          _.createElement(
            "div",
            {
              className: _.ConferenceContentsCtn,
            },
            _.createElement(
              "div",
              {
                className: _.ConferenceHeaderCtn,
              },
              _.createElement(_._, {
                className: _.LogoImage,
                rgSources: _.strLocalizedLogos,
              }),
              _.createElement(_._, {
                className: _.LogoImageMobile,
                rgSources: _.strLocalizedMobileLogos,
              }),
              _.createElement(
                "div",
                {
                  className: _.ConferenceDateRange,
                },
                _.createElement(_._, {
                  rtStartDate: _.rtStartTime,
                  rtEndDate: _.rtEndTime,
                }),
              ),
            ),
            _.createElement(_._, {
              tabs: _,
            }),
          )
        );
      }
      var _ = __webpack_require__("chunkid");
      const _ = {
        LandingPage: (_) => `/(conference|steamworksvirtualconference)/${_}`,
      };
      const _ = function (_) {
        return _.createElement(
          _._,
          null,
          _.createElement(_._, {
            path: _.LandingPage(":vanity_str"),
            render: (_) =>
              _.createElement(_._, {
                config: {
                  "conference-root": () => {
                    const { vanity_str: _ } = _.match.params;
                    return _.createElement(_, {
                      strVanity: _.toLocaleLowerCase(),
                    });
                  },
                },
              }),
          }),
          _.createElement(_._, {
            component: _._,
          }),
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        async DeleteOldAnnouncement(_, _) {
          let _ = new URLSearchParams();
          __webpack_require__.append("sessionid", _._.SESSIONID);
          let _ =
              _._.COMMUNITY_BASE_URL +
              "/gid/" +
              _.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              _,
            _ = await _().post(_, _);
          if (1 != _.data.success) throw _.data;
          return this.RemoveGIDFromList(_, _._ + _), _.data;
        }
        static Get() {
          return (
            _.sm_Instance || ((_.sm_Instance = new _()), _.sm_Instance.Init()),
            _.sm_Instance
          );
        }
        static GetSummaryStore() {
          return (
            _.sm_SummaryInstance ||
              ((_.sm_SummaryInstance = new _(!0)), _.sm_SummaryInstance.Init()),
            _.sm_SummaryInstance
          );
        }
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { event: _, closeModal: __webpack_require__ } = _;
        return _.createElement(
          _._,
          {
            navID: "SinglePartnerEventRoot",
            closeModal: __webpack_require__,
          },
          _.createElement(_._, {
            initialEvent: _,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: _._,
            emoticonStore: _._,
            showAppHeader: !0,
            closeModal: __webpack_require__,
          }),
        );
      }
      function _(_, _) {
        (0, _._)(
          _.createElement(_, {
            event: _,
          }),
          _,
        );
      }
      let _ = class extends _.Component {
        constructor() {
          super(...arguments), (this.m_refFocus = _.createRef());
        }
        componentDidMount() {
          this.props.fnClose &&
            (document.addEventListener("keydown", this.escFunction, !1),
            this.m_refFocus.current && this.m_refFocus.current.focus());
        }
        componentWillUnmount() {
          this.props.fnClose &&
            document.removeEventListener("keydown", this.escFunction, !1);
        }
        escFunction(_) {
          const { fnClose: _ } = this.props;
          27 === _.keyCode && _ && _();
        }
        OnBackgroundClick(_) {
          _.currentTarget == _.target && this.props.fnClose();
        }
        render() {
          const {
            event: _,
            langOverride: _,
            isPreview: __webpack_require__,
          } = this.props;
          return _.createElement(
            "div",
            {
              ref: this.m_refFocus,
              className: _.Main,
              onClick: this.OnBackgroundClick,
            },
            _.createElement(_._, {
              key: _.GID,
              event: _,
              emoticonStore: _._,
              partnerEventStore: _._.Get(),
              langOverride: _,
              isPreview: __webpack_require__,
              bDisableBroadcastPlayer: !1,
            }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "escFunction", null),
        (0, _._)([_._], _.prototype, "OnBackgroundClick", null),
        (_ = (0, _._)([_._], _));
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
        }
      }
      const _ = new (class {
          constructor() {
            (this.m_nImpressionDelayMS = 500), (this.m_mapEvents = new Map());
          }
          ShouldTrack(_) {
            if (_.bOldAnnouncement) return !1;
            const _ = this.m_mapEvents.get(_.GID);
            return !_ || !_.m_bHasBeenTracked;
          }
          StartTracking(_, _) {
            if (_.bOldAnnouncement) return;
            let _ = this.m_mapEvents.get(_.GID);
            _ || ((_ = new _()), this.m_mapEvents.set(_.GID, _)),
              _.m_bHasBeenTracked ||
                _.m_fnSubmit ||
                ((_.m_fnSubmit = new _._()),
                _.m_fnSubmit.Schedule(
                  this.m_nImpressionDelayMS,
                  this.ReportImpression.bind(this, _, _),
                ));
          }
          StopTracking(_) {
            const _ = this.m_mapEvents.get(_.GID);
            _ && _.m_fnSubmit && (_.m_fnSubmit.Cancel(), (_.m_fnSubmit = null));
          }
          ReportImpression(_, _) {
            _._.Get().RecordEventShown(_, 8),
              _ && _._.RecordViewedEvent((0, _._)(), _.GID);
            const _ = this.m_mapEvents.get(_.GID);
            _ &&
              ((_.m_bHasBeenTracked = !0),
              _.m_fnSubmit.Cancel(),
              (_.m_fnSubmit = null));
          }
        })(),
        _ = (_) => {
          const { event: _ } = _;
          if (_.ShouldTrack(_)) {
            const _ = () => _.StartTracking(_, _.recordNewsHubStats || !1),
              _ = () => _.StopTracking(_);
            return _.createElement(_._, {
              onEnter: _,
              onLeave: _,
            });
          }
          return null;
        };
    },
  },
]);
