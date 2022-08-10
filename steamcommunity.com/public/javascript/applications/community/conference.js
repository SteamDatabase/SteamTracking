/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6272],
  {
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
    30827: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { ConferenceRoutes: () => De, default: () => Ne });
      var a = t(67294),
        o = t(78587),
        c = t(74091),
        l = t(63473),
        r = t(26149),
        i = (t(92398), t(3389)),
        s = (t(35093), t(84047)),
        m = t(99533),
        d = t(90666);
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
            const n = (0, r.jM)(d.De.LANGUAGE),
              t = (0, s.cJ)(e.clan_faq_about_page),
              a = s.xP.Get().GetFAQPublishedContent(t, n),
              o = (0, l.vZ)(
                e.localized_logo,
                n,
                null == a ? void 0 : a.timestamp
              ),
              c = (0, l.vZ)(
                e.localized_mobile_logo,
                n,
                null == a ? void 0 : a.timestamp
              ),
              m = {
                strConferenceID: e.vanity,
                rtStartTime: e.start_rtime,
                rtEndTime: e.end_rtime,
                clanSteamID: new i.K(e.event_group_steamid),
                broadcastSteamID: new i.K(e.broadcast_steamid),
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
          const n = e;
          return (
            !(!n || "object" != typeof n) &&
            "string" == typeof n.event_group_steamid &&
            "number" == typeof n.start_rtime &&
            "number" == typeof n.end_rtime
          );
        }
      }
      var f = t(5525),
        E = t(32548),
        C = t(96602),
        _ = t(60501),
        v = t(12538),
        g = t(41311),
        p = t(13271),
        I = t(85503),
        h = t(63405),
        b = (t(69765), t(52795), t(28976)),
        S = t(7573),
        D = t(35208),
        N = t(17157),
        A = t(40185);
      t(4344);
      function T(e) {
        const { conferenceInfo: n } = e,
          t = n.broadcastSteamID.ConvertTo64BitString();
        return a.createElement(
          E.S,
          null,
          a.createElement(h.default, {
            steamIDBroadcast: t,
            watchLocation: 5,
            bStartMuted: !0,
          })
        );
      }
      function y(e) {
        const { conferenceInfo: n } = e,
          t = (0, p.SZ)(() => n.broadcastSteamID.ConvertTo64BitString());
        return a.createElement(
          "div",
          {
            className: (0, S.Z)(
              D.BroadcastChatCtn,
              e.className ? `${e.className}` : ""
            ),
          },
          a.createElement(
            E.S,
            null,
            a.createElement(I.c, {
              emoticonStore: b.D$,
              watchLocation: 5,
              steamID: t,
              globalChat: !0,
              bPartnerMemberOnlyChat: n.bPartnerOnly,
              bInvertLayout: !0,
            })
          )
        );
      }
      function w(e) {
        const { conferenceInfo: n } = e,
          [t, o] = a.useState(!1);
        return t
          ? null
          : a.createElement(
              "div",
              { className: N.broadcast_floating },
              a.createElement(A.BroadcastEmbeddablePopoutHeader, {
                steamIDBroadcast: n.broadcastSteamID.ConvertTo64BitString(),
                OnPreventPopup: () => o(!0),
              }),
              a.createElement(T, { conferenceInfo: n })
            );
      }
      var L = t(88254);
      function x(e) {
        const { conferenceInfo: n } = e;
        return "dev" != d.De.WEB_UNIVERSE
          ? null
          : a.createElement(
              "div",
              null,
              a.createElement("h1", null, "Conference Data"),
              a.createElement(L.G, { data: n }),
              a.createElement("h1", null, "Config Data"),
              a.createElement(L.m, { strConfigID: "application_config" })
            );
      }
      var M = t(69382),
        k = t(68130),
        P = t(95598),
        H = t(28268),
        B = t(30600),
        G = t(70655),
        R = t(35118),
        X = t(9915);
      class Q {
        constructor() {
          this.m_inFlight = null;
        }
        LoadInitialCalendarData(e, n) {
          return (0, G.mG)(this, void 0, void 0, function* () {
            return (
              this.m_inFlight ||
                (this.m_inFlight = this.InternalLoadInitialCalendarData(e, n)),
              this.m_inFlight
            );
          });
        }
        InternalLoadInitialCalendarData(e, n) {
          return (0, G.mG)(this, void 0, void 0, function* () {
            X.cb.IsInitialized() || X.cb.InitGlobal(),
              (0, R.PC)({
                collectionid: n,
                bSectionByDay: !0,
                rtCalendarEnd: e,
              });
            const t = (0, R.vY)(),
              a = (0, d.kQ)("conference_calendar", "application_config");
            a &&
              ("dev" == d.De.WEB_UNIVERSE &&
                console.log(
                  "Conference LandingPage loading initial events: " + a.length,
                  a
                ),
              yield t.RegisterCalendarEventsAndModels(a)),
              t.SetFilteredView((e) => !0);
          });
        }
        static Get() {
          return Q.m_singleton || (Q.m_singleton = new Q()), Q.m_singleton;
        }
      }
      t(80315), t(68002);
      var F = t(81503),
        V = (t(49186), t(7200)),
        U = t(48341),
        q = t(51983),
        O = t(67546),
        j = t(90110),
        W = t(3044),
        z = t(31933),
        Z = t(22975);
      function Y(e) {
        const { displayLocation: n, fnChangeModalEvent: t } = e,
          [o, c] = a.useState(null),
          [l, r] = (0, z.Ar)("emgid", null),
          [s, m] = (0, z.Ar)("emclan", null);
        return (
          (0, Z.Qg)(t, (e, n) => {
            r(e), m(i.K.InitFromClanID(n).ConvertTo64BitString());
          }),
          a.useEffect(() => {
            if (null != l && null != s) {
              const e = new i.K(s);
              V.j1
                .LoadPartnerEventFromClanEventGIDAndClanSteamID(e, l, 0)
                .then(c);
            }
          }, [l, s]),
          o
            ? a.createElement(W.x, {
                appid: o.appid,
                trackingLocation: n,
                announcementGID: o.GetAnnouncementGID(),
                partnerEventStore: V.j1,
                eventModel: o,
                showAppHeader: !0,
                closeModal: () => {
                  c(null), m(null), r(null);
                },
              })
            : null
        );
      }
      var K = t(88883),
        J = t(8850),
        $ = t(59650),
        ee = t(13596),
        ne = t(74163),
        te = t(53622),
        ae = t(74891),
        oe = t(75532);
      function ce(e) {
        const n = (0, R.vY)(),
          t = (0, f.F_)(10),
          o = n.GetActiveEventsAt(t) || [],
          [c] = a.useState(new m.pB()),
          l = a.useCallback(
            (e, n) => (0, q.h)(V.j1.GetClanEventModel(e), window),
            []
          );
        return 0 == n.GetNumEventsLoaded()
          ? a.createElement(
              "div",
              null,
              (0, g.Xx)("#Conference_No_Schedule_Yet")
            )
          : a.createElement(
              "div",
              { className: oe.EventsScheduleCtn },
              a.createElement(Y, { displayLocation: 6, fnChangeModalEvent: c }),
              a.createElement(se, {
                rgActiveEvents: o,
                fnDisplayModalEvent: l,
              }),
              a.createElement(re, {
                rgActiveEvents: o,
                fnDisplayModalEvent: l,
                rtNow: t,
              }),
              a.createElement("br", null),
              a.createElement("br", null),
              a.createElement(
                U.zx,
                {
                  onClick: (e) =>
                    (0, $.AM)(a.createElement(fe, null), (0, te.RA)(e)),
                },
                (0, g.Xx)("#Conference_NeedHelp")
              )
            );
      }
      function le(e) {
        return a.createElement(
          ue,
          Object.assign({}, e),
          a.createElement(ce, Object.assign({}, e))
        );
      }
      function re(e) {
        const { rgActiveEvents: n, rtNow: t } = e,
          o = (0, R.vY)()
            .GetCalendarItemsInTimeRange(t + 1)
            .rgCalendarItems.filter((e) => !n.some((n) => n.GID == e.unique_id))
            .sort((e, n) => e.start_time - n.start_time);
        return 0 == o.length
          ? a.createElement(
              "div",
              null,
              (0, g.Xx)("#Conference_No_More_Schedule")
            )
          : a.createElement(
              "div",
              { className: oe.UpcomingEventsCtn },
              a.createElement(
                "div",
                { className: oe.SectionTitle },
                (0, g.Xx)("#Conference_ScheduleNext")
              ),
              a.createElement(
                "div",
                { className: oe.EventSchedCtn },
                o.map((o, c) =>
                  a.createElement(ie, {
                    key: o.unique_id,
                    bDisplayAsUpNext: Boolean(0 == c && n.length >= 1),
                    calendarItem: o,
                    fnDisplayModalEvent: e.fnDisplayModalEvent,
                    rtNow: t,
                  })
                )
              )
            );
      }
      function ie(e) {
        const {
            calendarItem: n,
            bDisplayAsUpNext: t,
            fnDisplayModalEvent: o,
            rtNow: c,
          } = e,
          l = V.j1.GetClanEventModel(n.unique_id),
          i = (0, r.jM)(d.De.LANGUAGE),
          s = l.GetStartTimeAndDateUnixSeconds(),
          m = (0, B.yK)(new Date(1e3 * c), new Date(1e3 * s));
        return a.createElement(
          "div",
          {
            className: oe.EventItemCtn,
            onClick: () => o(l.GID, l.clanSteamID.GetAccountID()),
          },
          a.createElement(
            "div",
            { className: oe.Title },
            l.GetNameWithFallback(i)
          ),
          a.createElement(
            "div",
            { className: oe.SessionTime },
            !m && a.createElement("div", null, (0, g.$1)(s, !0)),
            a.createElement(
              "div",
              null,
              Boolean(t && m)
                ? (0, g.Xx)(
                    "#Conference_StartInMin",
                    Math.max(1, Math.floor((s - c) / 60))
                  )
                : (0, g.Xx)(
                    "#Conference_StartsAt",
                    (0, ae.Sc)(s, { bForce24HourClock: !1 })
                  )
            )
          ),
          a.createElement(
            "div",
            { className: (0, S.Z)(oe.ReminderContainer, oe.OnlyIcon) },
            a.createElement(j.m, {
              eventModel: l,
              lang: i,
              bOnlyShowIcon: !0,
              bExpandLeft: !0,
              bShowStartTime: !1,
            })
          )
        );
      }
      function se(e) {
        const { rgActiveEvents: n, fnDisplayModalEvent: t } = e;
        if (!n || 0 == n.length) return null;
        const o = n[0],
          c = (0, r.jM)(d.De.LANGUAGE),
          l = F.R.ParseEventModelPresenters(o, c);
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
          Boolean(l) &&
            l.map((e) =>
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
              onClick: () => t(o.GID, o.clanSteamID.GetAccountID()),
            },
            (0, g.Xx)("#EventEmail_Button_ClickForMoreDetails")
          )
        );
      }
      function me(e) {
        const { conferenceInfo: n } = e,
          t = (0, R.vY)(),
          o = (0, f.F_)(10),
          c = t.GetActiveEventsAt(o) || [],
          [l] = a.useState(new m.pB()),
          r = t
            .GetCalendarItemsInTimeRange(n.rtStartTime - 1, o)
            .rgCalendarItems.filter(
              (e) => 0 == c.length || c[0].GID != e.unique_id
            )
            .sort((e, n) => e.start_time - n.start_time);
        return 0 == r.length
          ? a.createElement("div", null, (0, g.Xx)("#Conference_NoPastEvents"))
          : a.createElement(
              "div",
              { className: oe.PastEventsCtn },
              a.createElement(Y, { displayLocation: 6, fnChangeModalEvent: l }),
              r.map((e) => {
                const n = V.j1.GetClanEventModel(e.unique_id);
                return a.createElement(O.V, {
                  key: "row" + e.unique_id,
                  eventModel: n,
                  calendarEvent: e,
                  bSuppressHoverEffects: !1,
                  mode: "wide",
                  fnOnClicked: () =>
                    l.Dispatch(n.GID, n.clanSteamID.GetAccountID()),
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
        const { conferenceInfo: n } = e,
          t = (0, ne.T)("WithCalendarStore"),
          [o, c] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
            t.token.reason ||
              Q.Get()
                .LoadInitialCalendarData(n.rtEndTime, n.strConferenceID)
                .finally(() => {
                  t.token.reason || c(!1);
                });
          }, [n.rtEndTime, n.strConferenceID, t]),
          o
            ? a.createElement(ee.V, null)
            : a.createElement(a.Fragment, null, e.children)
        );
      }
      function fe(e) {
        const { closeModal: n } = e;
        return a.createElement(
          J.uH,
          {
            strTitle: (0, g.Xx)("#Conference_NeedHelp"),
            bAlertDialog: !0,
            onCancel: n,
            onOK: n,
          },
          a.createElement("div", null, (0, g.Xx)("#Conference_NeedHelp_Desc1")),
          a.createElement(
            "div",
            null,
            a.createElement(
              "div",
              { className: oe.HelpDialogDetailsCtn },
              a.createElement(
                "div",
                null,
                (0, g.Xx)("#Conference_NeedHelp_BroadcastChatQ")
              ),
              a.createElement(
                "ul",
                { className: oe.HelpRequirements },
                a.createElement(
                  "li",
                  null,
                  (0, g.Xx)("#Conference_NeedHelp_ChatA1")
                ),
                a.createElement(
                  "li",
                  null,
                  (0, g.kQ)(
                    "#Conference_NeedHelp_BroadcastChatA1",
                    a.createElement(
                      "a",
                      {
                        href: "https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A",
                      },
                      (0, g.Xx)("#Conferenec_NeedHelp_LimitedAccounts")
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
                (0, g.Xx)("#Conference_NeedHelp_QandAQ")
              ),
              a.createElement(
                "ul",
                null,
                a.createElement(
                  "li",
                  null,
                  (0, g.Xx)("#Conference_NeedHelp_ChatA1")
                )
              )
            ),
            a.createElement(
              "div",
              { className: oe.HelpDialogDetailsCtn },
              a.createElement(
                "span",
                null,
                (0, g.Xx)("#Conference_NeedHelp_StillHaveQuestions")
              ),
              a.createElement(
                "a",
                {
                  href: "https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=933",
                },
                (0, g.Xx)("#Conference_NeedHelp_CreateTicket")
              )
            )
          )
        );
      }
      var Ee = t(38560),
        Ce = t(77765),
        _e = t(8456);
      function ve(e) {
        const { conferenceInfo: n, bShowYouTube: t } = e,
          [o, c] = a.useState(!1),
          l = (0, f.F_)(B._H.PerMinute) < n.rtStartTime - 30 * B._H.PerMinute;
        return a.createElement(
          "div",
          { className: Ee.ConferenceHome },
          a.createElement(
            "div",
            { className: (0, S.Z)(Ee.LeftCol, o ? "Active" : "Hidden") },
            a.createElement(
              "div",
              { className: Ee.AgendaCtn },
              a.createElement(le, { conferenceInfo: n }),
              a.createElement(
                "div",
                {
                  className: Ee.AgendaToggle,
                  onClick: () => {
                    c(!o);
                  },
                },
                a.createElement(
                  H.HP,
                  { toolTipContent: (0, g.Xx)("#QAndA_HideSchedule") },
                  a.createElement(
                    "div",
                    { className: Ee.CollapseBtn },
                    a.createElement(P.NP6, { angle: 0 })
                  )
                ),
                a.createElement(
                  H.HP,
                  { toolTipContent: (0, g.Xx)("#QAndA_ShowSchedule") },
                  a.createElement(
                    "div",
                    { className: Ee.CalendarBtn },
                    a.createElement(P.faS, null),
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
            t &&
              a.createElement(Ce.O, {
                videoID: n.youtubeVideoID,
                classNameAlign: "",
                classNameSize: _e.sizeFull,
                bAutoPlay: !0,
                bShowVideoImmediately: !0,
              }),
            Boolean(l)
              ? a.createElement(
                  "div",
                  { className: Ee.InteractionCtn },
                  a.createElement(
                    "div",
                    { className: Ee.PreEventNote },
                    (0, g.Xx)("#Conference_ChatHidden", 30)
                  )
                )
              : a.createElement(ge, { conferenceInfo: n })
          )
        );
      }
      function ge(e) {
        const { conferenceInfo: n } = e,
          [t, o] = a.useState(window.innerWidth > 910),
          [c, l] = a.useState(!0),
          r =
            d.De.COMMUNITY_BASE_URL +
            "broadcast/chatonly/" +
            n.broadcastSteamID.ConvertTo64BitString(),
          i =
            d.De.COMMUNITY_BASE_URL +
            "questions/" +
            d.JA.VANITY_ID +
            "/view/" +
            n.globalQandASessionID;
        return a.createElement(
          "div",
          { className: Ee.InteractionCtn },
          a.createElement(
            "div",
            { className: Ee.TabControlsCtn },
            a.createElement(
              "div",
              {
                className: (0, S.Z)(
                  Ee.InnerChatTab,
                  Ee.ChatTab,
                  t ? Ee.Active : ""
                ),
              },
              a.createElement(
                "div",
                {
                  className: Ee.TabTitle,
                  onClick: () => {
                    o(!0), l(!1);
                  },
                },
                (0, g.Xx)("#Conference_Tab_Chat")
              ),
              a.createElement(
                H.HP,
                { toolTipContent: (0, g.Xx)("#QAndA_PopOutChat_ttip") },
                a.createElement(
                  "a",
                  { className: Ee.Popout, href: r, target: "_blank" },
                  a.createElement(P.yRy, null)
                )
              )
            ),
            a.createElement(
              "div",
              {
                className: (0, S.Z)(
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
                    o(!1), l(!0);
                  },
                },
                (0, g.Xx)("#Conference_Tab_QandA")
              ),
              a.createElement(
                H.HP,
                { toolTipContent: (0, g.Xx)("#QAndA_PopOutQAndA_ttip") },
                a.createElement(
                  "a",
                  { className: Ee.Popout, href: i, target: "_blank" },
                  a.createElement(P.yRy, null)
                )
              )
            ),
            a.createElement(
              H.HP,
              { toolTipContent: (0, g.Xx)("#QAndA_ChatToggle_ShowBoth") },
              a.createElement(
                "div",
                {
                  className: Ee.ShowBothTabs,
                  onClick: () => {
                    o(!0), l(!0);
                  },
                },
                a.createElement(P.chI, null)
              )
            )
          ),
          a.createElement(
            "div",
            { className: Ee.ChatStack },
            Boolean((t && c) || (!c && !t)) &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "div",
                  { className: Ee.ChatColumn },
                  a.createElement(y, {
                    conferenceInfo: n,
                    className: Ee.ChatCtn,
                  })
                ),
                a.createElement(
                  "div",
                  { className: Ee.QAColumn },
                  a.createElement(M.kF, { gidSession: n.globalQandASessionID })
                )
              ),
            Boolean(t && !c) &&
              a.createElement(y, { conferenceInfo: n, className: Ee.ChatCtn }),
            Boolean(!t && c) &&
              a.createElement(M.kF, { gidSession: n.globalQandASessionID })
          )
        );
      }
      function pe(e) {
        const { conferenceInfo: n } = e;
        if (!n.faqAboutPage)
          return a.createElement("div", null, (0, g.Xx)("#Conference_NoAbout"));
        const { title: t, content: o, timestamp: c } = n.faqAboutPage;
        return a.createElement(
          "div",
          null,
          a.createElement("div", { className: Ee.AboutTitle }, t),
          a.createElement(k.R, { text: o, bShowErrorInfo: !1 })
        );
      }
      function Ie(e) {
        const { conferenceInfo: n } = e;
        return a.createElement(de, { conferenceInfo: n });
      }
      var he = t(55609);
      function be(e) {
        const { strVanity: n } = e,
          t = u.Get().GetConferenceInfo(n);
        return t
          ? a.createElement(
              E.S,
              null,
              a.createElement(
                "div",
                { className: he.ConferencePageCtn },
                a.createElement(Se, { conferenceInfo: t })
              )
            )
          : a.createElement("div", null, (0, g.Xx)("#Conference_Invalid"));
      }
      function Se(e) {
        const { conferenceInfo: n } = e,
          t = (e) =>
            window.sessionStorage.setItem(
              "conferenceCurrentTab",
              `?tab=${e.key}`
            ),
          o = [],
          c = (0, f.zD)();
        return (
          c < n.rtEndTime &&
            o.push({
              name: (0, g.Xx)("#Conference_tab_Home"),
              key: "live",
              contents: a.createElement(
                E.S,
                null,
                a.createElement(ve, {
                  bShowYouTube: !!n.youtubeVideoID,
                  conferenceInfo: n,
                })
              ),
              onClick: t,
            }),
          o.push({
            name: (0, g.Xx)("#Conference_tab_Past"),
            key: "past",
            contents: a.createElement(
              E.S,
              null,
              a.createElement(Ie, { conferenceInfo: n }),
              !n.youtubeVideoID &&
                Boolean(c < n.rtEndTime) &&
                a.createElement(w, { conferenceInfo: n })
            ),
            onClick: t,
          }),
          o.push({
            name: (0, g.Xx)("#Conference_tab_Info"),
            key: "about",
            contents: a.createElement(
              E.S,
              null,
              a.createElement(pe, { conferenceInfo: n }),
              !n.youtubeVideoID &&
                Boolean(c < n.rtEndTime) &&
                a.createElement(w, { conferenceInfo: n })
            ),
            onClick: t,
          }),
          o.push({
            name: "(VO/WebUniveser=Dev) Debug",
            key: "debug",
            hidden: "dev" != d.De.WEB_UNIVERSE,
            contents: a.createElement(
              E.S,
              null,
              a.createElement(x, { conferenceInfo: n })
            ),
            onClick: t,
          }),
          a.createElement(
            "div",
            { className: he.ConferenceContentsCtn },
            a.createElement(
              "div",
              { className: he.ConferenceHeaderCtn },
              a.createElement(_.j, {
                className: he.LogoImage,
                rgSources: n.strLocalizedLogos,
              }),
              a.createElement(_.j, {
                className: he.LogoImageMobile,
                rgSources: n.strLocalizedMobileLogos,
              }),
              a.createElement(
                "div",
                { className: he.ConferenceDateRange },
                a.createElement(C.Sw, {
                  rtStartDate: n.rtStartTime,
                  rtEndDate: n.rtEndTime,
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
      const Ne = function (e) {
        return a.createElement(
          o.rs,
          null,
          a.createElement(o.AW, {
            path: De.LandingPage(":vanity_str"),
            render: (e) =>
              a.createElement(c.d, {
                config: {
                  "conference-root": () => {
                    const { vanity_str: n } = e.match.params;
                    return a.createElement(be, {
                      strVanity: n.toLocaleLowerCase(),
                    });
                  },
                },
              }),
          }),
          a.createElement(o.AW, { component: Ae })
        );
      };
      function Ae(e) {
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
