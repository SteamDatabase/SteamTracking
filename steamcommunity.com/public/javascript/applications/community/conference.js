/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6272],
  {
    69412: (e) => {
      e.exports = { Main: "basicpartnereventrender_Main_2U6-V" };
    },
    29399: (e) => {
      e.exports = {
        GraphicalAssetsTabs: "tabbar_GraphicalAssetsTabs_36r8g",
        GraphicalAssetsTab: "tabbar_GraphicalAssetsTab_K1_Tp",
        Active: "tabbar_Active_37f6M",
        GraphicalAssetStatus: "tabbar_GraphicalAssetStatus_ojMj8",
        VOWarning: "tabbar_VOWarning_21XR-",
        StatusSuccess: "tabbar_StatusSuccess_1HWSe",
        StatusDanger: "tabbar_StatusDanger_2jgbN",
        StatusCaution: "tabbar_StatusCaution_31Lxu",
      };
    },
    35208: (e) => {
      e.exports = {
        BroadcastChatCtn: "conferencebroadcast_BroadcastChatCtn_28b1v",
      };
    },
    75532: (e) => {
      e.exports = {
        UpcomingEventsCtn: "conferenceevents_UpcomingEventsCtn_2bWup",
        SectionTitle: "conferenceevents_SectionTitle_7MpRs",
        EventSchedCtn: "conferenceevents_EventSchedCtn_Tn2Ur",
        EventItemCtn: "conferenceevents_EventItemCtn_z6qIM",
        Title: "conferenceevents_Title_2EqgH",
        SessionTime: "conferenceevents_SessionTime__Ikar",
        ActiveEventCtn: "conferenceevents_ActiveEventCtn_2lP0C",
        LiveNote: "conferenceevents_LiveNote_3zSJm",
        LiveIcon: "conferenceevents_LiveIcon_38GJh",
        EventDescription: "conferenceevents_EventDescription_3hKDo",
        ReadMoreBtn: "conferenceevents_ReadMoreBtn_2z4ba",
        EventsScheduleCtn: "conferenceevents_EventsScheduleCtn_33-47",
        ReminderContainer: "conferenceevents_ReminderContainer_2vLZT",
        OnlyIcon: "conferenceevents_OnlyIcon_3fZIS",
        PastEventsCtn: "conferenceevents_PastEventsCtn_3pfjF",
        HelpDialogDetailsCtn: "conferenceevents_HelpDialogDetailsCtn_1IQeQ",
        HelpRequirements: "conferenceevents_HelpRequirements_3yMlx",
      };
    },
    38560: (e) => {
      e.exports = {
        ConferenceHome: "conferencepages_ConferenceHome_3tSqD",
        LeftCol: "conferencepages_LeftCol_19xFd",
        AgendaToggle: "conferencepages_AgendaToggle_1rjE0",
        CollapseBtn: "conferencepages_CollapseBtn_2RCNd",
        CalendarBtn: "conferencepages_CalendarBtn_22bby",
        CalendarText: "conferencepages_CalendarText_kxtN0",
        MainCol: "conferencepages_MainCol_1qlkn",
        InteractionCtn: "conferencepages_InteractionCtn_39uHL",
        BroadcastCtn: "conferencepages_BroadcastCtn_240cu",
        videoContainerSizer: "conferencepages_videoContainerSizer_twsjQ",
        Hidden: "conferencepages_Hidden_aE3VL",
        ChatColumn: "conferencepages_ChatColumn_2ldId",
        ChatTitle: "conferencepages_ChatTitle_3CjWm",
        QAColumn: "conferencepages_QAColumn_1RCLw",
        PreEventNote: "conferencepages_PreEventNote___Fhr",
        TabControlsCtn: "conferencepages_TabControlsCtn_1HJDD",
        Close: "conferencepages_Close_3cKbt",
        ShowBothTabs: "conferencepages_ShowBothTabs_fZBE8",
        ChatTab: "conferencepages_ChatTab_3WoUg",
        QATab: "conferencepages_QATab_1An5O",
        InnerChatTab: "conferencepages_InnerChatTab_1g3oa",
        TabTitle: "conferencepages_TabTitle_24i11",
        Popout: "conferencepages_Popout_QHxXW",
        Active: "conferencepages_Active_3PSCm",
        ChatStack: "conferencepages_ChatStack_1ogmv",
        AboutTitle: "conferencepages_AboutTitle_3yWGo",
      };
    },
    55609: (e) => {
      e.exports = {
        ConferencePageCtn: "landing_ConferencePageCtn_oP_SP",
        ConferenceContentsCtn: "landing_ConferenceContentsCtn_1HPPR",
        ConferenceHeaderCtn: "landing_ConferenceHeaderCtn_1AbLq",
        LogoImage: "landing_LogoImage_3i2i5",
        LogoImageMobile: "landing_LogoImageMobile_3iVf9",
        ConferenceDateRange: "landing_ConferenceDateRange_2FSEt",
      };
    },
    51983: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => _ });
      var a = n(70655),
        o = n(29323),
        c = n(67294),
        r = (n(26149), n(49186), n(35577)),
        l = n(7200),
        s = n(89694),
        i = n(27535),
        m = n(59650),
        d = n(64839),
        u = n(69412),
        f = n(69472);
      function E(e) {
        const { event: t, closeModal: n } = e;
        return c.createElement(
          f.Pv,
          { navID: "SinglePartnerEventRoot", closeModal: n },
          c.createElement(i.m$, {
            initialEvent: t,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: l.j1,
            emoticonStore: s.F,
            showAppHeader: !0,
            closeModal: n,
          })
        );
      }
      function _(e, t) {
        (0, m.AM)(c.createElement(E, { event: e }), t);
      }
      let C = class extends c.Component {
        constructor() {
          super(...arguments), (this.m_refFocus = c.createRef());
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
        escFunction(e) {
          const { fnClose: t } = this.props;
          27 === e.keyCode && t && t();
        }
        OnBackgroundClick(e) {
          e.currentTarget == e.target && this.props.fnClose();
        }
        render() {
          const { event: e, langOverride: t, isPreview: n } = this.props;
          return c.createElement(
            "div",
            {
              ref: this.m_refFocus,
              className: u.Main,
              onClick: this.OnBackgroundClick,
            },
            c.createElement(i.Xy, {
              key: e.GID,
              event: e,
              emoticonStore: s.F,
              partnerEventStore: r.M.Get(),
              langOverride: t,
              isPreview: n,
              bDisableBroadcastPlayer: !1,
            })
          );
        }
      };
      (0, a.gn)([d.ak], C.prototype, "escFunction", null),
        (0, a.gn)([d.ak], C.prototype, "OnBackgroundClick", null),
        (C = (0, a.gn)([o.Pi], C));
    },
    12538: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => f });
      var a = n(67294),
        o = n(78587),
        c = n(7573),
        r = n(41311),
        l = n(31933),
        s = n(29399),
        i = n.n(s),
        m = n(28268),
        d = n(72258);
      class u extends a.Component {
        constructor() {
          super(...arguments), (this.state = { activeTab: "" });
        }
        componentDidMount() {
          this.props.startingTab
            ? this.setState({ activeTab: this.props.startingTab })
            : !this.props.bDisableRouting &&
              this.props.location &&
              this.setState({
                activeTab: (0, l.ks)(this.props.location, "tab"),
              });
        }
        componentDidUpdate(e) {
          !this.props.bDisableRouting &&
            this.props.location &&
            this.props.location.key !== e.location.key &&
            this.setState({ activeTab: (0, l.ks)(this.props.location, "tab") });
        }
        OnTabClick(e) {
          this.setState({ activeTab: e.key }),
            !this.props.bDisableRouting &&
              this.props.history &&
              (0, l.i9)(this.props.history, "tab", e.key),
            e.onClick && e.onClick(e);
        }
        render() {
          const e =
            this.props.tabs.find((e) => e.key === this.state.activeTab) ||
            this.props.tabs[0];
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              { className: i().GraphicalAssetsTabs },
              this.props.tabs.map((t) => {
                if (!t.hidden) {
                  let n = "";
                  return (
                    "success" === t.statusType
                      ? (n = i().StatusSuccess)
                      : "danger" === t.statusType
                      ? (n = i().StatusDanger)
                      : "caution" === t.statusType && (n = i().StatusCaution),
                    a.createElement(
                      d.M2,
                      {
                        key: t.key,
                        condition: Boolean(t.statusToolTip),
                        wrap: (e) =>
                          a.createElement(
                            m.HP,
                            { toolTipContent: t.statusToolTip || t.tooltip },
                            e
                          ),
                      },
                      a.createElement(
                        "div",
                        {
                          key: t.key,
                          className: `${i().GraphicalAssetsTab} ${
                            t.key === e.key ? i().Active : ""
                          }`,
                          onClick: () => this.OnTabClick(t),
                        },
                        Boolean(t.vo_warning) &&
                          a.createElement(
                            m.HP,
                            { toolTipContent: t.vo_warning },
                            a.createElement(
                              "div",
                              { className: i().VOWarning },
                              (0, r.Xx)("#EventEditor_VOWarning")
                            )
                          ),
                        Boolean(t.status) &&
                          a.createElement(
                            "div",
                            {
                              className: (0, c.Z)(i().GraphicalAssetStatus, n),
                            },
                            t.status
                          ),
                        t.name
                      )
                    )
                  );
                }
                return null;
              })
            ),
            a.createElement("div", null, e && e.contents)
          );
        }
      }
      const f = (0, o.EN)(u);
    },
    30827: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { ConferenceRoutes: () => De, default: () => Te });
      var a = n(67294),
        o = n(78587),
        c = n(74091),
        r = n(63473),
        l = n(26149),
        s = (n(54698), n(3389)),
        i = (n(35093), n(84047)),
        m = n(99533),
        d = n(90666);
      class u {
        constructor() {
          (this.m_mapConferences = new Map()),
            (this.m_mapConferenceCallback = new Map());
        }
        GetConferenceInfo(e) {
          return this.m_mapConferences.get(e);
        }
        static Get() {
          return (
            u.s_Singleton ||
              ((u.s_Singleton = new u()),
              u.s_Singleton.Init(),
              "dev" == d.De.WEB_UNIVERSE &&
                (window.g_ConferenceStore = u.s_Singleton)),
            u.s_Singleton
          );
        }
        Init() {
          let e = (0, d.kQ)("conferenceinfo", "application_config");
          if (this.ValidateStoreDefault(e)) {
            const t = (0, l.jM)(d.De.LANGUAGE),
              n = (0, i.cJ)(e.clan_faq_about_page),
              a = i.xP.Get().GetFAQPublishedContent(n, t),
              o = (0, r.vZ)(
                e.localized_logo,
                t,
                null == a ? void 0 : a.timestamp
              ),
              c = (0, r.vZ)(
                e.localized_mobile_logo,
                t,
                null == a ? void 0 : a.timestamp
              ),
              m = {
                strConferenceID: e.vanity,
                rtStartTime: e.start_rtime,
                rtEndTime: e.end_rtime,
                clanSteamID: new s.K(e.event_group_steamid),
                broadcastSteamID: new s.K(e.broadcast_steamid),
                bPartnerOnly: e.partner_only,
                faqAboutPage: a,
                strLocalizedLogos: "string" == typeof o ? [o] : o,
                strLocalizedMobileLogos: "string" == typeof c ? [c] : c,
                globalQandASessionID: e.global_qanda_session_id,
                youtubeVideoID: e.youtubeVideoID,
              };
            this.m_mapConferences.set(e.vanity, m);
          }
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            "string" == typeof t.event_group_steamid &&
            "number" == typeof t.start_rtime &&
            "number" == typeof t.end_rtime
          );
        }
      }
      var f = n(5525),
        E = n(32548),
        _ = n(96602),
        C = n(60501),
        v = n(12538),
        p = n(41311),
        g = n(13271),
        h = n(85503),
        b = n(63405),
        S = (n(69765), n(52795), n(28976)),
        I = n(7573),
        D = n(35208),
        T = n(17157),
        N = n(934);
      n(4344);
      function A(e) {
        const { conferenceInfo: t } = e,
          n = t.broadcastSteamID.ConvertTo64BitString();
        return a.createElement(
          E.S,
          null,
          a.createElement(b.default, {
            steamIDBroadcast: n,
            watchLocation: 5,
            bStartMuted: !0,
          })
        );
      }
      function y(e) {
        const { conferenceInfo: t } = e,
          n = (0, g.SZ)(() => t.broadcastSteamID.ConvertTo64BitString());
        return a.createElement(
          "div",
          {
            className: (0, I.Z)(
              D.BroadcastChatCtn,
              e.className ? `${e.className}` : ""
            ),
          },
          a.createElement(
            E.S,
            null,
            a.createElement(h.c, {
              emoticonStore: S.D$,
              watchLocation: 5,
              steamID: n,
              globalChat: !0,
              bPartnerMemberOnlyChat: t.bPartnerOnly,
              bInvertLayout: !0,
            })
          )
        );
      }
      function k(e) {
        const { conferenceInfo: t } = e,
          [n, o] = a.useState(!1);
        return n
          ? null
          : a.createElement(
              "div",
              { className: T.broadcast_floating },
              a.createElement(N.BroadcastEmbeddablePopoutHeader, {
                steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
                OnPreventPopup: () => o(!0),
              }),
              a.createElement(A, { conferenceInfo: t })
            );
      }
      var M = n(88254);
      function w(e) {
        const { conferenceInfo: t } = e;
        return "dev" != d.De.WEB_UNIVERSE
          ? null
          : a.createElement(
              "div",
              null,
              a.createElement("h1", null, "Conference Data"),
              a.createElement(M.G, { data: t }),
              a.createElement("h1", null, "Config Data"),
              a.createElement(M.m, { strConfigID: "application_config" })
            );
      }
      var P = n(69382),
        x = n(68130),
        L = n(95598),
        B = n(28268),
        G = n(30600),
        H = n(70655),
        R = n(35118),
        F = n(9915);
      class X {
        constructor() {
          this.m_inFlight = null;
        }
        LoadInitialCalendarData(e, t) {
          return (0, H.mG)(this, void 0, void 0, function* () {
            return (
              this.m_inFlight ||
                (this.m_inFlight = this.InternalLoadInitialCalendarData(e, t)),
              this.m_inFlight
            );
          });
        }
        InternalLoadInitialCalendarData(e, t) {
          return (0, H.mG)(this, void 0, void 0, function* () {
            F.cb.IsInitialized() || F.cb.InitGlobal(),
              (0, R.PC)({
                collectionid: t,
                bSectionByDay: !0,
                rtCalendarEnd: e,
              });
            const n = (0, R.vY)(),
              a = (0, d.kQ)("conference_calendar", "application_config");
            a &&
              ("dev" == d.De.WEB_UNIVERSE &&
                console.log(
                  "Conference LandingPage loading initial events: " + a.length,
                  a
                ),
              yield n.RegisterCalendarEventsAndModels(a)),
              n.SetFilteredView((e) => !0);
          });
        }
        static Get() {
          return X.m_singleton || (X.m_singleton = new X()), X.m_singleton;
        }
      }
      n(80315), n(68002);
      var O = n(81503),
        Q = (n(49186), n(7200)),
        V = n(48341),
        U = n(51983),
        W = n(92663),
        j = n(90110),
        q = n(3044),
        z = n(31933),
        Z = n(64839);
      function Y(e) {
        const { displayLocation: t, fnChangeModalEvent: n } = e,
          [o, c] = a.useState(null),
          [r, l] = (0, z.Ar)("emgid", null),
          [i, m] = (0, z.Ar)("emclan", null);
        return (
          (0, Z.Qg)(n, (e, t) => {
            l(e), m(s.K.InitFromClanID(t).ConvertTo64BitString());
          }),
          a.useEffect(() => {
            if (null != r && null != i) {
              const e = new s.K(i);
              Q.j1
                .LoadPartnerEventFromClanEventGIDAndClanSteamID(e, r, 0)
                .then(c);
            }
          }, [r, i]),
          o
            ? a.createElement(q.x, {
                appid: o.appid,
                trackingLocation: t,
                announcementGID: o.GetAnnouncementGID(),
                partnerEventStore: Q.j1,
                eventModel: o,
                showAppHeader: !0,
                closeModal: () => {
                  c(null), m(null), l(null);
                },
              })
            : null
        );
      }
      var K = n(88883),
        $ = n(69472),
        J = n(59650),
        ee = n(13596),
        te = n(74163),
        ne = n(53622),
        ae = n(74891),
        oe = n(75532);
      function ce(e) {
        const t = (0, R.vY)(),
          n = (0, f.F_)(10),
          o = t.GetActiveEventsAt(n) || [],
          [c] = a.useState(new m.pB()),
          r = a.useCallback(
            (e, t) => (0, U.h)(Q.j1.GetClanEventModel(e), window),
            []
          );
        return 0 == t.GetNumEventsLoaded()
          ? a.createElement(
              "div",
              null,
              (0, p.Xx)("#Conference_No_Schedule_Yet")
            )
          : a.createElement(
              "div",
              { className: oe.EventsScheduleCtn },
              a.createElement(Y, { displayLocation: 6, fnChangeModalEvent: c }),
              a.createElement(ie, {
                rgActiveEvents: o,
                fnDisplayModalEvent: r,
              }),
              a.createElement(le, {
                rgActiveEvents: o,
                fnDisplayModalEvent: r,
                rtNow: n,
              }),
              a.createElement("br", null),
              a.createElement("br", null),
              a.createElement(
                V.zx,
                {
                  onClick: (e) =>
                    (0, J.AM)(a.createElement(fe, null), (0, ne.RA)(e)),
                },
                (0, p.Xx)("#Conference_NeedHelp")
              )
            );
      }
      function re(e) {
        return a.createElement(
          ue,
          Object.assign({}, e),
          a.createElement(ce, Object.assign({}, e))
        );
      }
      function le(e) {
        const { rgActiveEvents: t, rtNow: n } = e,
          o = (0, R.vY)()
            .GetCalendarItemsInTimeRange(n + 1)
            .rgCalendarItems.filter((e) => !t.some((t) => t.GID == e.unique_id))
            .sort((e, t) => e.start_time - t.start_time);
        return 0 == o.length
          ? a.createElement(
              "div",
              null,
              (0, p.Xx)("#Conference_No_More_Schedule")
            )
          : a.createElement(
              "div",
              { className: oe.UpcomingEventsCtn },
              a.createElement(
                "div",
                { className: oe.SectionTitle },
                (0, p.Xx)("#Conference_ScheduleNext")
              ),
              a.createElement(
                "div",
                { className: oe.EventSchedCtn },
                o.map((o, c) =>
                  a.createElement(se, {
                    key: o.unique_id,
                    bDisplayAsUpNext: Boolean(0 == c && t.length >= 1),
                    calendarItem: o,
                    fnDisplayModalEvent: e.fnDisplayModalEvent,
                    rtNow: n,
                  })
                )
              )
            );
      }
      function se(e) {
        const {
            calendarItem: t,
            bDisplayAsUpNext: n,
            fnDisplayModalEvent: o,
            rtNow: c,
          } = e,
          r = Q.j1.GetClanEventModel(t.unique_id),
          s = (0, l.jM)(d.De.LANGUAGE),
          i = r.GetStartTimeAndDateUnixSeconds(),
          m = (0, G.yK)(new Date(1e3 * c), new Date(1e3 * i));
        return a.createElement(
          "div",
          {
            className: oe.EventItemCtn,
            onClick: () => o(r.GID, r.clanSteamID.GetAccountID()),
          },
          a.createElement(
            "div",
            { className: oe.Title },
            r.GetNameWithFallback(s)
          ),
          a.createElement(
            "div",
            { className: oe.SessionTime },
            !m && a.createElement("div", null, (0, p.$1)(i, !0)),
            a.createElement(
              "div",
              null,
              Boolean(n && m)
                ? (0, p.Xx)(
                    "#Conference_StartInMin",
                    Math.max(1, Math.floor((i - c) / 60))
                  )
                : (0, p.Xx)(
                    "#Conference_StartsAt",
                    (0, ae.Sc)(i, { bForce24HourClock: !1 })
                  )
            )
          ),
          a.createElement(
            "div",
            { className: (0, I.Z)(oe.ReminderContainer, oe.OnlyIcon) },
            a.createElement(j.m, {
              eventModel: r,
              lang: s,
              bOnlyShowIcon: !0,
              bExpandLeft: !0,
              bShowStartTime: !1,
            })
          )
        );
      }
      function ie(e) {
        const { rgActiveEvents: t, fnDisplayModalEvent: n } = e;
        if (!t || 0 == t.length) return null;
        const o = t[0],
          c = (0, l.jM)(d.De.LANGUAGE),
          r = O.R.ParseEventModelPresenters(o, c);
        return a.createElement(
          "div",
          { className: oe.ActiveEventCtn },
          a.createElement(
            "div",
            { className: oe.LiveNote },
            a.createElement("div", { className: oe.LiveIcon }),
            "Live Now!"
          ),
          a.createElement(
            "div",
            { className: oe.Title },
            o.GetNameWithFallback(c)
          ),
          Boolean(r) &&
            r.map((e) =>
              a.createElement(
                K.pj,
                {
                  key: "presenter_" + e.name,
                  name: e.name,
                  title: e.title,
                  photo: e.photo,
                  company: e.company,
                  bioString: e.bio,
                },
                a.createElement("div", null, e.name)
              )
            ),
          a.createElement(
            "div",
            { className: oe.EventDescription },
            o.GetSummaryWithFallback(c)
          ),
          a.createElement(
            "div",
            {
              className: oe.ReadMoreBtn,
              onClick: () => n(o.GID, o.clanSteamID.GetAccountID()),
            },
            (0, p.Xx)("#EventEmail_Button_ClickForMoreDetails")
          )
        );
      }
      function me(e) {
        const { conferenceInfo: t } = e,
          n = (0, R.vY)(),
          o = (0, f.F_)(10),
          c = n.GetActiveEventsAt(o) || [],
          [r] = a.useState(new m.pB()),
          l = n
            .GetCalendarItemsInTimeRange(t.rtStartTime - 1, o)
            .rgCalendarItems.filter(
              (e) => 0 == c.length || c[0].GID != e.unique_id
            )
            .sort((e, t) => e.start_time - t.start_time);
        return 0 == l.length
          ? a.createElement("div", null, (0, p.Xx)("#Conference_NoPastEvents"))
          : a.createElement(
              "div",
              { className: oe.PastEventsCtn },
              a.createElement(Y, { displayLocation: 6, fnChangeModalEvent: r }),
              l.map((e) => {
                const t = Q.j1.GetClanEventModel(e.unique_id);
                return a.createElement(W.V, {
                  key: "row" + e.unique_id,
                  eventModel: t,
                  calendarEvent: e,
                  bSuppressHoverEffects: !1,
                  mode: "wide",
                  fnOnClicked: () =>
                    r.Dispatch(t.GID, t.clanSteamID.GetAccountID()),
                });
              })
            );
      }
      function de(e) {
        return a.createElement(
          ue,
          Object.assign({}, e),
          a.createElement(me, Object.assign({}, e))
        );
      }
      function ue(e) {
        const { conferenceInfo: t } = e,
          n = (0, te.T)("WithCalendarStore"),
          [o, c] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
            n.token.reason ||
              X.Get()
                .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                .finally(() => {
                  n.token.reason || c(!1);
                });
          }, [t.rtEndTime, t.strConferenceID, n]),
          o
            ? a.createElement(ee.V, null)
            : a.createElement(a.Fragment, null, e.children)
        );
      }
      function fe(e) {
        const { closeModal: t } = e;
        return a.createElement(
          $.uH,
          {
            strTitle: (0, p.Xx)("#Conference_NeedHelp"),
            bAlertDialog: !0,
            onCancel: t,
            onOK: t,
          },
          a.createElement("div", null, (0, p.Xx)("#Conference_NeedHelp_Desc1")),
          a.createElement(
            "div",
            null,
            a.createElement(
              "div",
              { className: oe.HelpDialogDetailsCtn },
              a.createElement(
                "div",
                null,
                (0, p.Xx)("#Conference_NeedHelp_BroadcastChatQ")
              ),
              a.createElement(
                "ul",
                { className: oe.HelpRequirements },
                a.createElement(
                  "li",
                  null,
                  (0, p.Xx)("#Conference_NeedHelp_ChatA1")
                ),
                a.createElement(
                  "li",
                  null,
                  (0, p.kQ)(
                    "#Conference_NeedHelp_BroadcastChatA1",
                    a.createElement(
                      "a",
                      {
                        href: "https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A",
                      },
                      (0, p.Xx)("#Conferenec_NeedHelp_LimitedAccounts")
                    )
                  )
                )
              )
            ),
            a.createElement(
              "div",
              { className: oe.HelpDialogDetailsCtn },
              a.createElement(
                "div",
                null,
                (0, p.Xx)("#Conference_NeedHelp_QandAQ")
              ),
              a.createElement(
                "ul",
                null,
                a.createElement(
                  "li",
                  null,
                  (0, p.Xx)("#Conference_NeedHelp_ChatA1")
                )
              )
            ),
            a.createElement(
              "div",
              { className: oe.HelpDialogDetailsCtn },
              a.createElement(
                "span",
                null,
                (0, p.Xx)("#Conference_NeedHelp_StillHaveQuestions")
              ),
              a.createElement(
                "a",
                {
                  href: "https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=933",
                },
                (0, p.Xx)("#Conference_NeedHelp_CreateTicket")
              )
            )
          )
        );
      }
      var Ee = n(38560),
        _e = n(77765),
        Ce = n(8456);
      function ve(e) {
        const { conferenceInfo: t, bShowYouTube: n } = e,
          [o, c] = a.useState(!1),
          r = (0, f.F_)(G._H.PerMinute) < t.rtStartTime - 30 * G._H.PerMinute;
        return a.createElement(
          "div",
          { className: Ee.ConferenceHome },
          a.createElement(
            "div",
            { className: (0, I.Z)(Ee.LeftCol, o ? "Active" : "Hidden") },
            a.createElement(
              "div",
              { className: Ee.AgendaCtn },
              a.createElement(re, { conferenceInfo: t }),
              a.createElement(
                "div",
                {
                  className: Ee.AgendaToggle,
                  onClick: () => {
                    c(!o);
                  },
                },
                a.createElement(
                  B.HP,
                  { toolTipContent: (0, p.Xx)("#QAndA_HideSchedule") },
                  a.createElement(
                    "div",
                    { className: Ee.CollapseBtn },
                    a.createElement(L.NP6, { angle: 0 })
                  )
                ),
                a.createElement(
                  B.HP,
                  { toolTipContent: (0, p.Xx)("#QAndA_ShowSchedule") },
                  a.createElement(
                    "div",
                    { className: Ee.CalendarBtn },
                    a.createElement(L.faS, null),
                    a.createElement(
                      "div",
                      { className: Ee.CalendarText },
                      "See Event Schedule"
                    )
                  )
                )
              )
            )
          ),
          a.createElement(
            "div",
            { className: Ee.MainCol },
            n &&
              a.createElement(_e.O, {
                videoID: t.youtubeVideoID,
                classNameAlign: "",
                classNameSize: Ce.sizeFull,
                bAutoPlay: !0,
                bShowVideoImmediately: !0,
              }),
            Boolean(r)
              ? a.createElement(
                  "div",
                  { className: Ee.InteractionCtn },
                  a.createElement(
                    "div",
                    { className: Ee.PreEventNote },
                    (0, p.Xx)("#Conference_ChatHidden", 30)
                  )
                )
              : a.createElement(pe, { conferenceInfo: t })
          )
        );
      }
      function pe(e) {
        const { conferenceInfo: t } = e,
          [n, o] = a.useState(window.innerWidth > 910),
          [c, r] = a.useState(!0),
          l =
            d.De.COMMUNITY_BASE_URL +
            "broadcast/chatonly/" +
            t.broadcastSteamID.ConvertTo64BitString(),
          s =
            d.De.COMMUNITY_BASE_URL +
            "questions/" +
            d.JA.VANITY_ID +
            "/view/" +
            t.globalQandASessionID;
        return a.createElement(
          "div",
          { className: Ee.InteractionCtn },
          a.createElement(
            "div",
            { className: Ee.TabControlsCtn },
            a.createElement(
              "div",
              {
                className: (0, I.Z)(
                  Ee.InnerChatTab,
                  Ee.ChatTab,
                  n ? Ee.Active : ""
                ),
              },
              a.createElement(
                "div",
                {
                  className: Ee.TabTitle,
                  onClick: () => {
                    o(!0), r(!1);
                  },
                },
                (0, p.Xx)("#Conference_Tab_Chat")
              ),
              a.createElement(
                B.HP,
                { toolTipContent: (0, p.Xx)("#QAndA_PopOutChat_ttip") },
                a.createElement(
                  "a",
                  { className: Ee.Popout, href: l, target: "_blank" },
                  a.createElement(L.yRy, null)
                )
              )
            ),
            a.createElement(
              "div",
              {
                className: (0, I.Z)(
                  Ee.InnerChatTab,
                  Ee.QATab,
                  c ? Ee.Active : ""
                ),
              },
              a.createElement(
                "div",
                {
                  className: Ee.TabTitle,
                  onClick: () => {
                    o(!1), r(!0);
                  },
                },
                (0, p.Xx)("#Conference_Tab_QandA")
              ),
              a.createElement(
                B.HP,
                { toolTipContent: (0, p.Xx)("#QAndA_PopOutQAndA_ttip") },
                a.createElement(
                  "a",
                  { className: Ee.Popout, href: s, target: "_blank" },
                  a.createElement(L.yRy, null)
                )
              )
            ),
            a.createElement(
              B.HP,
              { toolTipContent: (0, p.Xx)("#QAndA_ChatToggle_ShowBoth") },
              a.createElement(
                "div",
                {
                  className: Ee.ShowBothTabs,
                  onClick: () => {
                    o(!0), r(!0);
                  },
                },
                a.createElement(L.chI, null)
              )
            )
          ),
          a.createElement(
            "div",
            { className: Ee.ChatStack },
            Boolean((n && c) || (!c && !n)) &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "div",
                  { className: Ee.ChatColumn },
                  a.createElement(y, {
                    conferenceInfo: t,
                    className: Ee.ChatCtn,
                  })
                ),
                a.createElement(
                  "div",
                  { className: Ee.QAColumn },
                  a.createElement(P.kF, { gidSession: t.globalQandASessionID })
                )
              ),
            Boolean(n && !c) &&
              a.createElement(y, { conferenceInfo: t, className: Ee.ChatCtn }),
            Boolean(!n && c) &&
              a.createElement(P.kF, { gidSession: t.globalQandASessionID })
          )
        );
      }
      function ge(e) {
        const { conferenceInfo: t } = e;
        if (!t.faqAboutPage)
          return a.createElement("div", null, (0, p.Xx)("#Conference_NoAbout"));
        const { title: n, content: o, timestamp: c } = t.faqAboutPage;
        return a.createElement(
          "div",
          null,
          a.createElement("div", { className: Ee.AboutTitle }, n),
          a.createElement(x.R, { text: o, bShowErrorInfo: !1 })
        );
      }
      function he(e) {
        const { conferenceInfo: t } = e;
        return a.createElement(de, { conferenceInfo: t });
      }
      var be = n(55609);
      function Se(e) {
        const { strVanity: t } = e,
          n = u.Get().GetConferenceInfo(t);
        return n
          ? a.createElement(
              E.S,
              null,
              a.createElement(
                "div",
                { className: be.ConferencePageCtn },
                a.createElement(Ie, { conferenceInfo: n })
              )
            )
          : a.createElement("div", null, (0, p.Xx)("#Conference_Invalid"));
      }
      function Ie(e) {
        const { conferenceInfo: t } = e,
          n = (e) =>
            window.sessionStorage.setItem(
              "conferenceCurrentTab",
              `?tab=${e.key}`
            ),
          o = [],
          c = (0, f.zD)();
        return (
          c < t.rtEndTime &&
            o.push({
              name: (0, p.Xx)("#Conference_tab_Home"),
              key: "live",
              contents: a.createElement(
                E.S,
                null,
                a.createElement(ve, {
                  bShowYouTube: !!t.youtubeVideoID,
                  conferenceInfo: t,
                })
              ),
              onClick: n,
            }),
          o.push({
            name: (0, p.Xx)("#Conference_tab_Past"),
            key: "past",
            contents: a.createElement(
              E.S,
              null,
              a.createElement(he, { conferenceInfo: t }),
              !t.youtubeVideoID &&
                Boolean(c < t.rtEndTime) &&
                a.createElement(k, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          o.push({
            name: (0, p.Xx)("#Conference_tab_Info"),
            key: "about",
            contents: a.createElement(
              E.S,
              null,
              a.createElement(ge, { conferenceInfo: t }),
              !t.youtubeVideoID &&
                Boolean(c < t.rtEndTime) &&
                a.createElement(k, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          o.push({
            name: "(VO/WebUniveser=Dev) Debug",
            key: "debug",
            hidden: "dev" != d.De.WEB_UNIVERSE,
            contents: a.createElement(
              E.S,
              null,
              a.createElement(w, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          a.createElement(
            "div",
            { className: be.ConferenceContentsCtn },
            a.createElement(
              "div",
              { className: be.ConferenceHeaderCtn },
              a.createElement(C.j, {
                className: be.LogoImage,
                rgSources: t.strLocalizedLogos,
              }),
              a.createElement(C.j, {
                className: be.LogoImageMobile,
                rgSources: t.strLocalizedMobileLogos,
              }),
              a.createElement(
                "div",
                { className: be.ConferenceDateRange },
                a.createElement(_.Sw, {
                  rtStartDate: t.rtStartTime,
                  rtEndDate: t.rtEndTime,
                })
              )
            ),
            a.createElement(v.n, { tabs: o })
          )
        );
      }
      const De = {
        LandingPage: (e) => `/(conference|steamworksvirtualconference)/${e}`,
      };
      const Te = function (e) {
        return a.createElement(
          o.rs,
          null,
          a.createElement(o.AW, {
            path: De.LandingPage(":vanity_str"),
            render: (e) =>
              a.createElement(c.d, {
                config: {
                  "conference-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return a.createElement(Se, {
                      strVanity: t.toLocaleLowerCase(),
                    });
                  },
                },
              }),
          }),
          a.createElement(o.AW, { component: Ne })
        );
      };
      function Ne(e) {
        return "dev" !== d.De.WEB_UNIVERSE
          ? a.createElement(o.l_, { to: "/" })
          : a.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/conference.tsx to see if this page has been added to the list of routes."
            );
      }
    },
  },
]);
