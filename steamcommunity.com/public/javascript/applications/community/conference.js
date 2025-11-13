/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8521],
  {
    88619: (e) => {
      e.exports = { BroadcastChatCtn: "_28b1vPJH7sip9Uh_p3OJvD" };
    },
    63585: (e) => {
      e.exports = {
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
    44104: (e) => {
      e.exports = {
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
    61937: (e) => {
      e.exports = {
        narrowWidth: "500px",
        ConferencePageCtn: "oP_SPwwzov5nQN2TQUAEf",
        ConferenceContentsCtn: "_1HPPRdXNo8sgT-dXQ9h-5l",
        ConferenceHeaderCtn: "_1AbLqPiq2KJuEV09TbddQW",
        LogoImage: "_3i2i50OjRZCY5qTtlLvN7G",
        LogoImageMobile: "_3iVf9n6tpBlwoSdiOW3Jhf",
        ConferenceDateRange: "_2FSEt04eUDUO8y1rLtlEat",
      };
    },
    19332: (e) => {
      e.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
    },
    3514: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { ConferenceRoutes: () => ye, default: () => ke });
      var a = n(90626),
        o = n(92757),
        l = n(6813),
        r = n(59952),
        c = n(22837),
        s = n(17720),
        i = n(87231),
        m = n(78327),
        d = n(14947);
      class u {
        constructor() {
          this.m_mapConferences = d.sH.map();
        }
        GetConferenceInfo(e) {
          return this.m_mapConferences.get(e);
        }
        static Get() {
          return (
            u.s_Singleton ||
              ((u.s_Singleton = new u()),
              u.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_ConferenceStore = u.s_Singleton)),
            u.s_Singleton
          );
        }
        async Init() {
          let e = (0, m.Tc)("conferenceinfo", "application_config");
          if (this.ValidateStoreDefault(e)) {
            const t = (0, c.sf)(m.TS.LANGUAGE),
              n = (0, i.CJ)(e.clan_faq_about_page),
              a = i.pN.Get().GetFAQPublishedContent(n, t),
              o = {
                strConferenceID: e.vanity,
                rtStartTime: e.start_rtime,
                rtEndTime: e.end_rtime,
                clanSteamID: new s.b(e.event_group_steamid),
                broadcastSteamID: new s.b(e.broadcast_steamid),
                bPartnerOnly: e.partner_only,
                faqAboutPage: a,
                strLocalizedLogos: null,
                strLocalizedMobileLogos: null,
                globalQandASessionID: e.global_qanda_session_id,
                youtubeVideoID: e.youtubeVideoID,
              };
            this.m_mapConferences.set(e.vanity, o);
            const l = await (0, r.Er)(
                e.localized_logo,
                t,
                null == a ? void 0 : a.timestamp,
              ),
              d = await (0, r.Er)(
                e.localized_mobile_logo,
                t,
                null == a ? void 0 : a.timestamp,
              );
            this.m_mapConferences.set(e.vanity, {
              ...o,
              strLocalizedLogos: "string" == typeof l ? [l] : l,
              strLocalizedMobileLogos: "string" == typeof d ? [d] : d,
            });
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
      var E = n(44165),
        f = n(84811),
        v = n(76684),
        C = n(3088),
        _ = n(38135),
        p = n(61859),
        h = n(65946),
        I = n(39606),
        S = n(72224),
        g = n(34010),
        b = n(52038),
        D = n(88619),
        w = n(53120),
        N = n(45476);
      function A(e) {
        const { conferenceInfo: t } = e,
          n = t.broadcastSteamID.ConvertTo64BitString();
        return a.createElement(
          f.tH,
          null,
          a.createElement(S.default, {
            steamIDBroadcast: n,
            watchLocation: 5,
            bStartMuted: !0,
          }),
        );
      }
      function T(e) {
        const { conferenceInfo: t } = e,
          n = (0, h.q3)(() => t.broadcastSteamID.ConvertTo64BitString());
        return a.createElement(
          "div",
          {
            className: (0, b.A)(
              D.BroadcastChatCtn,
              e.className ? `${e.className}` : "",
            ),
          },
          a.createElement(
            f.tH,
            null,
            a.createElement(I.I, {
              emoticonStore: g.MX,
              watchLocation: 5,
              steamID: n,
              globalChat: !0,
              bPartnerMemberOnlyChat: t.bPartnerOnly,
              bInvertLayout: !0,
            }),
          ),
        );
      }
      function y(e) {
        const { conferenceInfo: t } = e,
          [n, o] = a.useState(!1);
        return n
          ? null
          : a.createElement(
              "div",
              { className: w.broadcast_floating },
              a.createElement(N.BroadcastEmbeddablePopoutHeader, {
                steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
                OnPreventPopup: () => o(!0),
              }),
              a.createElement(A, { conferenceInfo: t }),
            );
      }
      var k = n(14932);
      function L(e) {
        const { conferenceInfo: t } = e;
        return "dev" != m.TS.WEB_UNIVERSE
          ? null
          : a.createElement(
              "div",
              null,
              a.createElement("h1", null, "Conference Data"),
              a.createElement(k.G, { data: t }),
              a.createElement("h1", null, "Config Data"),
              a.createElement(k.z, { strConfigID: "application_config" }),
            );
      }
      var B = n(28579),
        H = n(17909),
        M = n(12155),
        P = n(32754),
        G = n(14771),
        O = n(95886),
        Q = n(60746);
      class R {
        async LoadInitialCalendarData(e, t) {
          return (
            this.m_inFlight ||
              (this.m_inFlight = this.InternalLoadInitialCalendarData(e, t)),
            this.m_inFlight
          );
        }
        async InternalLoadInitialCalendarData(e, t) {
          Q.KN.IsInitialized() || Q.KN.InitGlobal(),
            (0, O.Zr)({ collectionid: t, bSectionByDay: !0, rtCalendarEnd: e });
          const n = (0, O.v0)(),
            a = (0, m.Tc)("conference_calendar", "application_config");
          a &&
            ("dev" == m.TS.WEB_UNIVERSE &&
              console.log(
                "Conference LandingPage loading initial events: " + a.length,
                a,
              ),
            await n.RegisterCalendarEventsAndModels(a)),
            n.SetFilteredView((e) => !0);
        }
        static Get() {
          return R.m_singleton || (R.m_singleton = new R()), R.m_singleton;
        }
        constructor() {
          this.m_inFlight = null;
        }
      }
      var q = n(60727),
        U = n(91254),
        F = n(68255),
        V = n(81301),
        x = n(29296),
        W = n(42951),
        z = n(8107),
        Y = n(95034),
        K = n(73745);
      const J = "emclan",
        j = "emgid";
      function Z(e) {
        const { displayLocation: t, fnChangeModalEvent: n } = e,
          [o, l] = a.useState(null),
          [r, c] = (0, Y.QD)(j, null),
          [i, m] = (0, Y.QD)(J, null);
        return (
          (0, K.hL)(n, (e, t) => {
            c(e), m(s.b.InitFromClanID(t).ConvertTo64BitString());
          }),
          a.useEffect(() => {
            if (null != r && null != i) {
              const e = new s.b(i);
              U.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(e, r, 0).then(
                l,
              );
            }
          }, [r, i]),
          o
            ? a.createElement(z.N, {
                appid: o.appid,
                trackingLocation: t,
                announcementGID: o.GetAnnouncementGID(),
                partnerEventStore: U.O3,
                eventModel: o,
                showAppHeader: !0,
                closeModal: () => {
                  l(null), m(null), c(null);
                },
              })
            : null
        );
      }
      var X = n(48079),
        $ = n(9154),
        ee = n(738),
        te = n(22797),
        ne = n(4434),
        ae = n(6144),
        oe = n(56011),
        le = n(91675),
        re = n(63585);
      const ce = 10;
      function se(e) {
        const t = (0, O.v0)(),
          n = (0, E.P_)(ce),
          o = t.GetActiveEventsAt(n) || [],
          [l] = a.useState(new ae.lu()),
          r = a.useCallback(
            (e, t) => (0, V.Y)(U.O3.GetClanEventModel(e), window),
            [],
          );
        return 0 == t.GetNumEventsLoaded()
          ? a.createElement(
              "div",
              null,
              (0, p.we)("#Conference_No_Schedule_Yet"),
            )
          : a.createElement(
              "div",
              { className: re.EventsScheduleCtn },
              a.createElement(Z, { displayLocation: 6, fnChangeModalEvent: l }),
              a.createElement(ue, {
                rgActiveEvents: o,
                fnDisplayModalEvent: r,
              }),
              a.createElement(me, {
                rgActiveEvents: o,
                fnDisplayModalEvent: r,
                rtNow: n,
              }),
              a.createElement("br", null),
              a.createElement("br", null),
              a.createElement(
                F.$n,
                {
                  onClick: (e) =>
                    (0, ee.pg)(a.createElement(Ce, null), (0, oe.uX)(e)),
                },
                (0, p.we)("#Conference_NeedHelp"),
              ),
            );
      }
      function ie(e) {
        return a.createElement(ve, { ...e }, a.createElement(se, { ...e }));
      }
      function me(e) {
        const { rgActiveEvents: t, rtNow: n } = e,
          o = (0, O.v0)()
            .GetCalendarItemsInTimeRange(n + 1)
            .rgCalendarItems.filter((e) => !t.some((t) => t.GID == e.unique_id))
            .sort((e, t) => e.start_time - t.start_time);
        return 0 == o.length
          ? a.createElement(
              "div",
              null,
              (0, p.we)("#Conference_No_More_Schedule"),
            )
          : a.createElement(
              "div",
              { className: re.UpcomingEventsCtn },
              a.createElement(
                "div",
                { className: re.SectionTitle },
                (0, p.we)("#Conference_ScheduleNext"),
              ),
              a.createElement(
                "div",
                { className: re.EventSchedCtn },
                o.map((o, l) =>
                  a.createElement(de, {
                    key: o.unique_id,
                    bDisplayAsUpNext: Boolean(0 == l && t.length >= 1),
                    calendarItem: o,
                    fnDisplayModalEvent: e.fnDisplayModalEvent,
                    rtNow: n,
                  }),
                ),
              ),
            );
      }
      function de(e) {
        const {
            calendarItem: t,
            bDisplayAsUpNext: n,
            fnDisplayModalEvent: o,
            rtNow: l,
          } = e,
          r = U.O3.GetClanEventModel(t.unique_id),
          s = (0, c.sf)(m.TS.LANGUAGE),
          i = r.GetStartTimeAndDateUnixSeconds(),
          d = (0, G.JD)(new Date(1e3 * l), new Date(1e3 * i));
        return a.createElement(
          "div",
          {
            className: re.EventItemCtn,
            onClick: () => o(r.GID, r.clanSteamID.GetAccountID()),
          },
          a.createElement(
            "div",
            { className: re.Title },
            r.GetNameWithFallback(s),
          ),
          a.createElement(
            "div",
            { className: re.SessionTime },
            !d && a.createElement("div", null, (0, p.TW)(i, !0)),
            a.createElement(
              "div",
              null,
              Boolean(n && d)
                ? (0, p.we)(
                    "#Conference_StartInMin",
                    Math.max(1, Math.floor((i - l) / 60)),
                  )
                : (0, p.we)(
                    "#Conference_StartsAt",
                    (0, le.KC)(i, { bForce24HourClock: !1 }),
                  ),
            ),
          ),
          a.createElement(
            "div",
            { className: (0, b.A)(re.ReminderContainer, re.OnlyIcon) },
            a.createElement(W.j, {
              eventModel: r,
              lang: s,
              bOnlyShowIcon: !0,
              bExpandLeft: !0,
              bShowStartTime: !1,
            }),
          ),
        );
      }
      function ue(e) {
        const { rgActiveEvents: t, fnDisplayModalEvent: n } = e;
        if (!t || 0 == t.length) return null;
        const o = t[0],
          l = (0, c.sf)(m.TS.LANGUAGE),
          r = q.m.ParseEventModelPresenters(o, l);
        return a.createElement(
          "div",
          { className: re.ActiveEventCtn },
          a.createElement(
            "div",
            { className: re.LiveNote },
            a.createElement("div", { className: re.LiveIcon }),
            "Live Now!",
          ),
          a.createElement(
            "div",
            { className: re.Title },
            o.GetNameWithFallback(l),
          ),
          Boolean(r) &&
            r.map((e) =>
              a.createElement(
                X.fI,
                {
                  key: "presenter_" + e.name,
                  name: e.name,
                  title: e.title,
                  photo: e.photo,
                  company: e.company,
                  bioString: e.bio,
                },
                a.createElement("div", null, e.name),
              ),
            ),
          a.createElement(
            "div",
            { className: re.EventDescription },
            o.GetSummaryWithFallback(l),
          ),
          a.createElement(
            "div",
            {
              className: re.ReadMoreBtn,
              onClick: () => n(o.GID, o.clanSteamID.GetAccountID()),
            },
            (0, p.we)("#EventEmail_Button_ClickForMoreDetails"),
          ),
        );
      }
      function Ee(e) {
        const { conferenceInfo: t } = e,
          n = (0, O.v0)(),
          o = (0, E.P_)(ce),
          l = n.GetActiveEventsAt(o) || [],
          [r] = a.useState(new ae.lu()),
          c = n
            .GetCalendarItemsInTimeRange(t.rtStartTime - 1, o)
            .rgCalendarItems.filter(
              (e) => 0 == l.length || l[0].GID != e.unique_id,
            )
            .sort((e, t) => e.start_time - t.start_time);
        return 0 == c.length
          ? a.createElement("div", null, (0, p.we)("#Conference_NoPastEvents"))
          : a.createElement(
              "div",
              { className: re.PastEventsCtn },
              a.createElement(Z, { displayLocation: 6, fnChangeModalEvent: r }),
              c.map((e) => {
                const t = U.O3.GetClanEventModel(e.unique_id);
                return a.createElement(x.V, {
                  key: "row" + e.unique_id,
                  eventModel: t,
                  calendarEvent: e,
                  bSuppressHoverEffects: !1,
                  mode: "wide",
                  fnOnClicked: () =>
                    r.Dispatch(t.GID, t.clanSteamID.GetAccountID()),
                });
              }),
            );
      }
      function fe(e) {
        return a.createElement(ve, { ...e }, a.createElement(Ee, { ...e }));
      }
      function ve(e) {
        const { conferenceInfo: t } = e,
          n = (0, ne.m)("WithCalendarStore"),
          [o, l] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
            n.token.reason ||
              R.Get()
                .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                .finally(() => {
                  n.token.reason || l(!1);
                });
          }, [t.rtEndTime, t.strConferenceID, n]),
          o
            ? a.createElement(te.t, null)
            : a.createElement(a.Fragment, null, e.children)
        );
      }
      function Ce(e) {
        const { closeModal: t } = e;
        return a.createElement(
          $.o0,
          {
            strTitle: (0, p.we)("#Conference_NeedHelp"),
            bAlertDialog: !0,
            onCancel: t,
            onOK: t,
          },
          a.createElement("div", null, (0, p.we)("#Conference_NeedHelp_Desc1")),
          a.createElement(
            "div",
            null,
            a.createElement(
              "div",
              { className: re.HelpDialogDetailsCtn },
              a.createElement(
                "div",
                null,
                (0, p.we)("#Conference_NeedHelp_BroadcastChatQ"),
              ),
              a.createElement(
                "ul",
                { className: re.HelpRequirements },
                a.createElement(
                  "li",
                  null,
                  (0, p.we)("#Conference_NeedHelp_ChatA1"),
                ),
                a.createElement(
                  "li",
                  null,
                  (0, p.PP)(
                    "#Conference_NeedHelp_BroadcastChatA1",
                    a.createElement(
                      "a",
                      {
                        href: "https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A",
                      },
                      (0, p.we)("#Conferenec_NeedHelp_LimitedAccounts"),
                    ),
                  ),
                ),
              ),
            ),
            a.createElement(
              "div",
              { className: re.HelpDialogDetailsCtn },
              a.createElement(
                "div",
                null,
                (0, p.we)("#Conference_NeedHelp_QandAQ"),
              ),
              a.createElement(
                "ul",
                null,
                a.createElement(
                  "li",
                  null,
                  (0, p.we)("#Conference_NeedHelp_ChatA1"),
                ),
              ),
            ),
            a.createElement(
              "div",
              { className: re.HelpDialogDetailsCtn },
              a.createElement(
                "span",
                null,
                (0, p.we)("#Conference_NeedHelp_StillHaveQuestions"),
              ),
              a.createElement(
                "a",
                {
                  href: "https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=933",
                },
                (0, p.we)("#Conference_NeedHelp_CreateTicket"),
              ),
            ),
          ),
        );
      }
      var _e = n(44104),
        pe = n(88527),
        he = n(73662);
      const Ie = 30;
      function Se(e) {
        const { conferenceInfo: t, bShowYouTube: n } = e,
          [o, l] = a.useState(!1),
          r = (0, E.P_)(G.Kp.PerMinute) < t.rtStartTime - Ie * G.Kp.PerMinute;
        return a.createElement(
          "div",
          { className: _e.ConferenceHome },
          a.createElement(
            "div",
            { className: (0, b.A)(_e.LeftCol, o ? "Active" : "Hidden") },
            a.createElement(
              "div",
              { className: _e.AgendaCtn },
              a.createElement(ie, { conferenceInfo: t }),
              a.createElement(
                "div",
                {
                  className: _e.AgendaToggle,
                  onClick: () => {
                    l(!o);
                  },
                },
                a.createElement(
                  P.he,
                  { toolTipContent: (0, p.we)("#QAndA_HideSchedule") },
                  a.createElement(
                    "div",
                    { className: _e.CollapseBtn },
                    a.createElement(M.F2T, { angle: 0 }),
                  ),
                ),
                a.createElement(
                  P.he,
                  { toolTipContent: (0, p.we)("#QAndA_ShowSchedule") },
                  a.createElement(
                    "div",
                    { className: _e.CalendarBtn },
                    a.createElement(M.VvS, null),
                    a.createElement(
                      "div",
                      { className: _e.CalendarText },
                      "See Event Schedule",
                    ),
                  ),
                ),
              ),
            ),
          ),
          a.createElement(
            "div",
            { className: _e.MainCol },
            n &&
              a.createElement(pe.A, {
                videoID: t.youtubeVideoID,
                classNameAlign: "",
                classNameSize: he.sizeFull,
                bAutoPlay: !0,
                bShowVideoImmediately: !0,
              }),
            Boolean(r)
              ? a.createElement(
                  "div",
                  { className: _e.InteractionCtn },
                  a.createElement(
                    "div",
                    { className: _e.PreEventNote },
                    (0, p.we)("#Conference_ChatHidden", Ie),
                  ),
                )
              : a.createElement(ge, { conferenceInfo: t }),
          ),
        );
      }
      function ge(e) {
        const { conferenceInfo: t } = e,
          [n, o] = a.useState(window.innerWidth > 910),
          [l, r] = a.useState(!0),
          c =
            m.TS.COMMUNITY_BASE_URL +
            "broadcast/chatonly/" +
            t.broadcastSteamID.ConvertTo64BitString(),
          s =
            m.TS.COMMUNITY_BASE_URL +
            "questions/" +
            m.UF.VANITY_ID +
            "/view/" +
            t.globalQandASessionID;
        return a.createElement(
          "div",
          { className: _e.InteractionCtn },
          a.createElement(
            "div",
            { className: _e.TabControlsCtn },
            a.createElement(
              "div",
              {
                className: (0, b.A)(
                  _e.InnerChatTab,
                  _e.ChatTab,
                  n ? _e.Active : "",
                ),
              },
              a.createElement(
                "div",
                {
                  className: _e.TabTitle,
                  onClick: () => {
                    o(!0), r(!1);
                  },
                },
                (0, p.we)("#Conference_Tab_Chat"),
              ),
              a.createElement(
                P.he,
                { toolTipContent: (0, p.we)("#QAndA_PopOutChat_ttip") },
                a.createElement(
                  "a",
                  { className: _e.Popout, href: c, target: "_blank" },
                  a.createElement(M.YNO, null),
                ),
              ),
            ),
            a.createElement(
              "div",
              {
                className: (0, b.A)(
                  _e.InnerChatTab,
                  _e.QATab,
                  l ? _e.Active : "",
                ),
              },
              a.createElement(
                "div",
                {
                  className: _e.TabTitle,
                  onClick: () => {
                    o(!1), r(!0);
                  },
                },
                (0, p.we)("#Conference_Tab_QandA"),
              ),
              a.createElement(
                P.he,
                { toolTipContent: (0, p.we)("#QAndA_PopOutQAndA_ttip") },
                a.createElement(
                  "a",
                  { className: _e.Popout, href: s, target: "_blank" },
                  a.createElement(M.YNO, null),
                ),
              ),
            ),
            a.createElement(
              P.he,
              { toolTipContent: (0, p.we)("#QAndA_ChatToggle_ShowBoth") },
              a.createElement(
                "div",
                {
                  className: _e.ShowBothTabs,
                  onClick: () => {
                    o(!0), r(!0);
                  },
                },
                a.createElement(M.QQ4, null),
              ),
            ),
          ),
          a.createElement(
            "div",
            { className: _e.ChatStack },
            Boolean((n && l) || (!l && !n)) &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "div",
                  { className: _e.ChatColumn },
                  a.createElement(T, {
                    conferenceInfo: t,
                    className: _e.ChatCtn,
                  }),
                ),
                a.createElement(
                  "div",
                  { className: _e.QAColumn },
                  a.createElement(B.u6, { gidSession: t.globalQandASessionID }),
                ),
              ),
            Boolean(n && !l) &&
              a.createElement(T, { conferenceInfo: t, className: _e.ChatCtn }),
            Boolean(!n && l) &&
              a.createElement(B.u6, { gidSession: t.globalQandASessionID }),
          ),
        );
      }
      function be(e) {
        const { conferenceInfo: t } = e;
        if (!t.faqAboutPage)
          return a.createElement("div", null, (0, p.we)("#Conference_NoAbout"));
        const { title: n, content: o, timestamp: l } = t.faqAboutPage;
        return a.createElement(
          "div",
          null,
          a.createElement("div", { className: _e.AboutTitle }, n),
          a.createElement(H.u, { text: o, bShowErrorInfo: !1 }),
        );
      }
      function De(e) {
        const { conferenceInfo: t } = e;
        return a.createElement(fe, { conferenceInfo: t });
      }
      var we = n(61937);
      function Ne(e) {
        const { strVanity: t } = e,
          n = u.Get().GetConferenceInfo(t);
        return n
          ? a.createElement(
              f.tH,
              null,
              a.createElement(
                "div",
                { className: we.ConferencePageCtn },
                a.createElement(Ae, { conferenceInfo: n }),
              ),
            )
          : a.createElement("div", null, (0, p.we)("#Conference_Invalid"));
      }
      function Ae(e) {
        const { conferenceInfo: t } = e,
          n = (e) =>
            window.sessionStorage.setItem(
              "conferenceCurrentTab",
              `?tab=${e.key}`,
            ),
          o = [],
          l = (0, E.f1)();
        return (
          l < t.rtEndTime &&
            o.push({
              name: (0, p.we)("#Conference_tab_Home"),
              key: "live",
              contents: a.createElement(
                f.tH,
                null,
                a.createElement(Se, {
                  bShowYouTube: !!t.youtubeVideoID,
                  conferenceInfo: t,
                }),
              ),
              onClick: n,
            }),
          o.push({
            name: (0, p.we)("#Conference_tab_Past"),
            key: "past",
            contents: a.createElement(
              f.tH,
              null,
              a.createElement(De, { conferenceInfo: t }),
              !t.youtubeVideoID &&
                Boolean(l < t.rtEndTime) &&
                a.createElement(y, { conferenceInfo: t }),
            ),
            onClick: n,
          }),
          o.push({
            name: (0, p.we)("#Conference_tab_Info"),
            key: "about",
            contents: a.createElement(
              f.tH,
              null,
              a.createElement(be, { conferenceInfo: t }),
              !t.youtubeVideoID &&
                Boolean(l < t.rtEndTime) &&
                a.createElement(y, { conferenceInfo: t }),
            ),
            onClick: n,
          }),
          o.push({
            name: "(VO/WebUniveser=Dev) Debug",
            key: "debug",
            hidden: "dev" != m.TS.WEB_UNIVERSE,
            contents: a.createElement(
              f.tH,
              null,
              a.createElement(L, { conferenceInfo: t }),
            ),
            onClick: n,
          }),
          a.createElement(
            "div",
            { className: we.ConferenceContentsCtn },
            a.createElement(
              "div",
              { className: we.ConferenceHeaderCtn },
              a.createElement(C.c, {
                className: we.LogoImage,
                rgSources: t.strLocalizedLogos,
              }),
              a.createElement(C.c, {
                className: we.LogoImageMobile,
                rgSources: t.strLocalizedMobileLogos,
              }),
              a.createElement(
                "div",
                { className: we.ConferenceDateRange },
                a.createElement(v.X0, {
                  rtStartDate: t.rtStartTime,
                  rtEndDate: t.rtEndTime,
                }),
              ),
            ),
            a.createElement(_.V, { tabs: o }),
          )
        );
      }
      var Te = n(97058);
      const ye = {
        LandingPage: (e) => `/(conference|steamworksvirtualconference)/${e}`,
      };
      const ke = function (e) {
        return a.createElement(
          o.dO,
          null,
          a.createElement(o.qh, {
            path: ye.LandingPage(":vanity_str"),
            render: (e) =>
              a.createElement(l.X, {
                config: {
                  "conference-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return a.createElement(Ne, {
                      strVanity: t.toLocaleLowerCase(),
                    });
                  },
                },
              }),
          }),
          a.createElement(o.qh, { component: Te.a }),
        );
      };
    },
    73964: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => s });
      var a = n(41735),
        o = n.n(a),
        l = n(78327),
        r = n(91254),
        c = n(70078);
      class s extends r.ZQ {
        async DeleteOldAnnouncement(e, t) {
          let n = new URLSearchParams();
          n.append("sessionid", l.TS.SESSIONID);
          let a =
              l.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxdeleteannouncement/" +
              t,
            r = await o().post(a, n);
          if (1 != r.data.success) throw r.data;
          return this.RemoveGIDFromList(e, c.cB + t), r.data;
        }
        static Get() {
          return (
            s.sm_Instance || ((s.sm_Instance = new s()), s.sm_Instance.Init()),
            s.sm_Instance
          );
        }
        static GetSummaryStore() {
          return (
            s.sm_SummaryInstance ||
              ((s.sm_SummaryInstance = new s(!0)), s.sm_SummaryInstance.Init()),
            s.sm_SummaryInstance
          );
        }
      }
    },
    81301: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => v });
      var a = n(34629),
        o = n(75844),
        l = n(90626),
        r = n(73964),
        c = n(91254),
        s = n(68033),
        i = n(55294),
        m = n(738),
        d = n(73745),
        u = n(19332),
        E = n(9154);
      function f(e) {
        const { event: t, closeModal: n } = e;
        return l.createElement(
          E.Qs,
          { navID: "SinglePartnerEventRoot", closeModal: n },
          l.createElement(i.AD, {
            initialEvent: t,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: c.O3,
            emoticonStore: s.A,
            showAppHeader: !0,
            closeModal: n,
          }),
        );
      }
      function v(e, t) {
        (0, m.pg)(l.createElement(f, { event: e }), t);
      }
      let C = class extends l.Component {
        constructor() {
          super(...arguments), (this.m_refFocus = l.createRef());
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
          return l.createElement(
            "div",
            {
              ref: this.m_refFocus,
              className: u.Main,
              onClick: this.OnBackgroundClick,
            },
            l.createElement(i.He, {
              key: e.GID,
              event: e,
              emoticonStore: s.A,
              partnerEventStore: r.$.Get(),
              langOverride: t,
              isPreview: n,
              bDisableBroadcastPlayer: !1,
            }),
          );
        }
      };
      (0, a.Cg)([d.oI], C.prototype, "escFunction", null),
        (0, a.Cg)([d.oI], C.prototype, "OnBackgroundClick", null),
        (C = (0, a.Cg)([o.PA], C));
    },
    74976: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => d });
      var a = n(90626),
        o = n(6144),
        l = n(60746),
        r = n(95886),
        c = n(81477),
        s = n(23338);
      class i {
        constructor() {
          (this.m_bHasBeenTracked = !1), (this.m_fnSubmit = null);
        }
      }
      const m = new (class {
          constructor() {
            (this.m_nImpressionDelayMS = 500), (this.m_mapEvents = new Map());
          }
          ShouldTrack(e) {
            if (e.bOldAnnouncement) return !1;
            const t = this.m_mapEvents.get(e.GID);
            return !t || !t.m_bHasBeenTracked;
          }
          StartTracking(e, t) {
            if (e.bOldAnnouncement) return;
            let n = this.m_mapEvents.get(e.GID);
            n || ((n = new i()), this.m_mapEvents.set(e.GID, n)),
              n.m_bHasBeenTracked ||
                n.m_fnSubmit ||
                ((n.m_fnSubmit = new o.LU()),
                n.m_fnSubmit.Schedule(
                  this.m_nImpressionDelayMS,
                  this.ReportImpression.bind(this, e, t),
                ));
          }
          StopTracking(e) {
            const t = this.m_mapEvents.get(e.GID);
            t && t.m_fnSubmit && (t.m_fnSubmit.Cancel(), (t.m_fnSubmit = null));
          }
          ReportImpression(e, t) {
            l.KN.Get().RecordEventShown(e, 8),
              t && c.V.RecordViewedEvent((0, r.v0)(), e.GID);
            const n = this.m_mapEvents.get(e.GID);
            n &&
              ((n.m_bHasBeenTracked = !0),
              n.m_fnSubmit.Cancel(),
              (n.m_fnSubmit = null));
          }
        })(),
        d = (e) => {
          const { event: t } = e;
          if (m.ShouldTrack(t)) {
            const n = () => m.StartTracking(t, e.recordNewsHubStats || !1),
              o = () => m.StopTracking(t);
            return a.createElement(s.Y, { onEnter: n, onLeave: o });
          }
          return null;
        };
    },
  },
]);
