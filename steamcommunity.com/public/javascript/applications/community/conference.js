/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    "5STL": function (e, t, n) {
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
    Cksw: function (e, t, n) {
      e.exports = {
        GraphicalAssetsTabs: "tabbar_GraphicalAssetsTabs_3oSHT",
        GraphicalAssetsTab: "tabbar_GraphicalAssetsTab_3lJb_",
        Active: "tabbar_Active_8XjrT",
        GraphicalAssetStatus: "tabbar_GraphicalAssetStatus_25U4F",
        VOWarning: "tabbar_VOWarning_3LaJy",
        StatusSuccess: "tabbar_StatusSuccess_1iIRV",
        StatusDanger: "tabbar_StatusDanger_UxdQK",
        StatusCaution: "tabbar_StatusCaution_E9t9j",
      };
    },
    JsZI: function (e, t, n) {
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
    Lfwj: function (e, t, n) {
      e.exports = {
        BroadcastChatCtn: "conferencebroadcast_BroadcastChatCtn_28b1v",
      };
    },
    PpkI: function (e, t, n) {
      e.exports = {
        ConferencePageCtn: "landing_ConferencePageCtn_oP_SP",
        ConferenceContentsCtn: "landing_ConferenceContentsCtn_1HPPR",
        ConferenceHeaderCtn: "landing_ConferenceHeaderCtn_1AbLq",
        LogoImage: "landing_LogoImage_3i2i5",
        LogoImageMobile: "landing_LogoImageMobile_3iVf9",
        ConferenceDateRange: "landing_ConferenceDateRange_2FSEt",
      };
    },
    erIC: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "ConferenceRoutes", function () {
          return Te;
        });
      var a = n("q1tI"),
        c = n("EC67"),
        o = n("WplJ"),
        l = n("rcjX"),
        r = n("mgoM"),
        s = (n("65aj"), n("kLLr")),
        i = (n("ECFo"), n("N2vu")),
        m = n("qiKp"),
        d = n("lkRc");
      class f {
        constructor() {
          (this.m_mapConferences = new Map()),
            (this.m_mapConferenceCallback = new Map());
        }
        GetConferenceInfo(e) {
          return this.m_mapConferences.get(e);
        }
        static Get() {
          return (
            f.s_Singleton ||
              ((f.s_Singleton = new f()),
              f.s_Singleton.Init(),
              "dev" == d.c.WEB_UNIVERSE &&
                (window.g_ConferenceStore = f.s_Singleton)),
            f.s_Singleton
          );
        }
        Init() {
          let e = Object(d.f)("conferenceinfo", "application_config");
          if (this.ValidateStoreDefault(e)) {
            const t = Object(r.d)(d.c.LANGUAGE),
              n = Object(i.c)(e.clan_faq_about_page),
              a = i.a.Get().GetFAQPublishedContent(n, t),
              c = Object(l.d)(
                e.localized_logo,
                t,
                null == a ? void 0 : a.timestamp
              ),
              o = Object(l.d)(
                e.localized_mobile_logo,
                t,
                null == a ? void 0 : a.timestamp
              ),
              m = {
                strConferenceID: e.vanity,
                rtStartTime: e.start_rtime,
                rtEndTime: e.end_rtime,
                clanSteamID: new s.a(e.event_group_steamid),
                broadcastSteamID: new s.a(e.broadcast_steamid),
                bPartnerOnly: e.partner_only,
                faqAboutPage: a,
                strLocalizedLogos: "string" == typeof c ? [c] : c,
                strLocalizedMobileLogos: "string" == typeof o ? [o] : o,
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
      var u = n("5izx"),
        b = n("IjL/"),
        E = n("YLyR"),
        C = n("UxvL"),
        _ = n("fbnN"),
        v = n("TLQK"),
        p = n("aoTL"),
        g = n("eN6m"),
        h = n("trWU"),
        I = (n("kdZy"), n("boaH"), n("nWbB")),
        S = n("exH9"),
        T = n("Lfwj"),
        N = n("rKv1"),
        D = n("NIbt");
      n("gfUn");
      function O(e) {
        const { conferenceInfo: t } = e,
          n = t.broadcastSteamID.ConvertTo64BitString();
        return a.createElement(
          b.a,
          null,
          a.createElement(h.default, {
            steamIDBroadcast: n,
            watchLocation: 5,
            bStartMuted: !0,
          })
        );
      }
      function A(e) {
        const { conferenceInfo: t } = e,
          n = Object(p.d)(() => t.broadcastSteamID.ConvertTo64BitString());
        return a.createElement(
          "div",
          {
            className: Object(S.a)(
              T.BroadcastChatCtn,
              e.className ? `${e.className}` : ""
            ),
          },
          a.createElement(
            b.a,
            null,
            a.createElement(g.a, {
              emoticonStore: I.g,
              watchLocation: 5,
              steamID: n,
              globalChat: !0,
              bPartnerMemberOnlyChat: t.bPartnerOnly,
              bInvertLayout: !0,
            })
          )
        );
      }
      function j(e) {
        const { conferenceInfo: t } = e,
          [n, c] = a.useState(!1);
        return n
          ? null
          : a.createElement(
              "div",
              { className: N.broadcast_floating },
              a.createElement(D.BroadcastEmbeddablePopoutHeader, {
                steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
                OnPreventPopup: () => c(!0),
              }),
              a.createElement(O, { conferenceInfo: t })
            );
      }
      var y = n("eDP5");
      function k(e) {
        const { conferenceInfo: t } = e;
        return "dev" != d.c.WEB_UNIVERSE
          ? null
          : a.createElement(
              "div",
              null,
              a.createElement("h1", null, "Conference Data"),
              a.createElement(y.b, { data: t }),
              a.createElement("h1", null, "Config Data"),
              a.createElement(y.a, { strConfigID: "application_config" })
            );
      }
      var L = n("JCps"),
        w = n("knQc"),
        M = n("6Y59"),
        G = n("5E+2"),
        B = n("CdLH"),
        P = n("mrSG"),
        H = n("WF3T"),
        R = n("9w6b");
      class Q {
        constructor() {
          this.m_inFlight = null;
        }
        LoadInitialCalendarData(e, t) {
          return Object(P.a)(this, void 0, void 0, function* () {
            return (
              this.m_inFlight ||
                (this.m_inFlight = this.InternalLoadInitialCalendarData(e, t)),
              this.m_inFlight
            );
          });
        }
        InternalLoadInitialCalendarData(e, t) {
          return Object(P.a)(this, void 0, void 0, function* () {
            R.a.IsInitialized() || R.a.InitGlobal(),
              Object(H.c)({
                collectionid: t,
                bSectionByDay: !0,
                rtCalendarEnd: e,
              });
            const n = Object(H.b)(),
              a = Object(d.f)("conference_calendar", "application_config");
            a &&
              ("dev" == d.c.WEB_UNIVERSE &&
                console.log(
                  "Conference LandingPage loading initial events: " + a.length,
                  a
                ),
              yield n.RegisterCalendarEventsAndModels(a)),
              n.SetFilteredView((e) => !0);
          });
        }
        static Get() {
          return Q.m_singleton || (Q.m_singleton = new Q()), Q.m_singleton;
        }
      }
      n("5bld"), n("MUT6");
      var U = n("1BdX"),
        V = (n("3+zv"), n("6oCP")),
        x = n("Mgs7"),
        q = n("T27q"),
        F = n("fA8f"),
        W = n("cGQe"),
        z = n("r3N9"),
        J = n("GiuM"),
        K = n("opsS");
      function Y(e) {
        const { displayLocation: t, fnChangeModalEvent: n } = e,
          [c, o] = a.useState(null),
          [l, r] = Object(J.d)("emgid", null),
          [i, m] = Object(J.d)("emclan", null);
        return (
          Object(K.e)(n, (e, t) => {
            r(e), m(s.a.InitFromClanID(t).ConvertTo64BitString());
          }),
          a.useEffect(() => {
            if (null != l && null != i) {
              const e = new s.a(i);
              V.b
                .LoadPartnerEventFromClanEventGIDAndClanSteamID(e, l, 0)
                .then(o);
            }
          }, [l, i]),
          c
            ? a.createElement(z.a, {
                appid: c.appid,
                trackingLocation: t,
                announcementGID: c.GetAnnouncementGID(),
                partnerEventStore: V.b,
                eventModel: c,
                showAppHeader: !0,
                closeModal: () => {
                  o(null), m(null), r(null);
                },
              })
            : null
        );
      }
      var Z = n("gPCo"),
        X = n("7Q8g"),
        $ = n("ka0M"),
        ee = n("0OaU"),
        te = n("X2UP"),
        ne = n("X3Ds"),
        ae = n("Z1oF"),
        ce = n("JsZI");
      function oe(e) {
        const t = Object(H.b)(),
          n = Object(u.c)(10),
          c = t.GetActiveEventsAt(n) || [],
          [o] = a.useState(new m.a()),
          l = a.useCallback(
            (e, t) => Object(q.a)(V.b.GetClanEventModel(e), window),
            []
          );
        return 0 == t.GetNumEventsLoaded()
          ? a.createElement(
              "div",
              null,
              Object(v.f)("#Conference_No_Schedule_Yet")
            )
          : a.createElement(
              "div",
              { className: ce.EventsScheduleCtn },
              a.createElement(Y, { displayLocation: 6, fnChangeModalEvent: o }),
              a.createElement(ie, {
                rgActiveEvents: c,
                fnDisplayModalEvent: l,
              }),
              a.createElement(re, {
                rgActiveEvents: c,
                fnDisplayModalEvent: l,
                rtNow: n,
              }),
              a.createElement("br", null),
              a.createElement("br", null),
              a.createElement(
                x.e,
                {
                  onClick: (e) =>
                    Object($.d)(a.createElement(ue, null), Object(ne.o)(e)),
                },
                Object(v.f)("#Conference_NeedHelp")
              )
            );
      }
      function le(e) {
        return a.createElement(
          fe,
          Object.assign({}, e),
          a.createElement(oe, Object.assign({}, e))
        );
      }
      function re(e) {
        const { rgActiveEvents: t, rtNow: n } = e,
          c = Object(H.b)()
            .GetCalendarItemsInTimeRange(n + 1)
            .rgCalendarItems.filter((e) => !t.some((t) => t.GID == e.unique_id))
            .sort((e, t) => e.start_time - t.start_time);
        return 0 == c.length
          ? a.createElement(
              "div",
              null,
              Object(v.f)("#Conference_No_More_Schedule")
            )
          : a.createElement(
              "div",
              { className: ce.UpcomingEventsCtn },
              a.createElement(
                "div",
                { className: ce.SectionTitle },
                Object(v.f)("#Conference_ScheduleNext")
              ),
              a.createElement(
                "div",
                { className: ce.EventSchedCtn },
                c.map((c, o) =>
                  a.createElement(se, {
                    key: c.unique_id,
                    bDisplayAsUpNext: Boolean(0 == o && t.length >= 1),
                    calendarItem: c,
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
            fnDisplayModalEvent: c,
            rtNow: o,
          } = e,
          l = V.b.GetClanEventModel(t.unique_id),
          s = Object(r.d)(d.c.LANGUAGE),
          i = l.GetStartTimeAndDateUnixSeconds(),
          m = Object(B.b)(new Date(1e3 * o), new Date(1e3 * i));
        return a.createElement(
          "div",
          {
            className: ce.EventItemCtn,
            onClick: () => c(l.GID, l.clanSteamID.GetAccountID()),
          },
          a.createElement(
            "div",
            { className: ce.Title },
            l.GetNameWithFallback(s)
          ),
          a.createElement(
            "div",
            { className: ce.SessionTime },
            !m && a.createElement("div", null, Object(v.k)(i, !0)),
            a.createElement(
              "div",
              null,
              Boolean(n && m)
                ? Object(v.f)(
                    "#Conference_StartInMin",
                    Math.max(1, Math.floor((i - o) / 60))
                  )
                : Object(v.f)(
                    "#Conference_StartsAt",
                    Object(ae.h)(i, { bForce24HourClock: !1 })
                  )
            )
          ),
          a.createElement(
            "div",
            { className: Object(S.a)(ce.ReminderContainer, ce.OnlyIcon) },
            a.createElement(W.b, {
              eventModel: l,
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
        const c = t[0],
          o = Object(r.d)(d.c.LANGUAGE),
          l = U.a.ParseEventModelPresenters(c, o);
        return a.createElement(
          "div",
          { className: ce.ActiveEventCtn },
          a.createElement(
            "div",
            { className: ce.LiveNote },
            a.createElement("div", { className: ce.LiveIcon }),
            "Live Now!"
          ),
          a.createElement(
            "div",
            { className: ce.Title },
            c.GetNameWithFallback(o)
          ),
          Boolean(l) &&
            l.map((e) =>
              a.createElement(
                Z.b,
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
            { className: ce.EventDescription },
            c.GetSummaryWithFallback(o)
          ),
          a.createElement(
            "div",
            {
              className: ce.ReadMoreBtn,
              onClick: () => n(c.GID, c.clanSteamID.GetAccountID()),
            },
            Object(v.f)("#EventEmail_Button_ClickForMoreDetails")
          )
        );
      }
      function me(e) {
        const { conferenceInfo: t } = e,
          n = Object(H.b)(),
          c = Object(u.c)(10),
          o = n.GetActiveEventsAt(c) || [],
          [l] = a.useState(new m.a()),
          r = n
            .GetCalendarItemsInTimeRange(t.rtStartTime - 1, c)
            .rgCalendarItems.filter(
              (e) => 0 == o.length || o[0].GID != e.unique_id
            )
            .sort((e, t) => e.start_time - t.start_time);
        return 0 == r.length
          ? a.createElement(
              "div",
              null,
              Object(v.f)("#Conference_NoPastEvents")
            )
          : a.createElement(
              "div",
              { className: ce.PastEventsCtn },
              a.createElement(Y, { displayLocation: 6, fnChangeModalEvent: l }),
              r.map((e) => {
                const t = V.b.GetClanEventModel(e.unique_id);
                return a.createElement(F.a, {
                  key: "row" + e.unique_id,
                  eventModel: t,
                  calendarEvent: e,
                  bSuppressHoverEffects: !1,
                  mode: "wide",
                  fnOnClicked: () =>
                    l.Dispatch(t.GID, t.clanSteamID.GetAccountID()),
                });
              })
            );
      }
      function de(e) {
        return a.createElement(
          fe,
          Object.assign({}, e),
          a.createElement(me, Object.assign({}, e))
        );
      }
      function fe(e) {
        const { conferenceInfo: t } = e,
          n = Object(te.a)("WithCalendarStore"),
          [c, o] = Object(a.useState)(!0);
        return (
          Object(a.useEffect)(() => {
            n.token.reason ||
              Q.Get()
                .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                .finally(() => {
                  n.token.reason || o(!1);
                });
          }, [t.rtEndTime, t.strConferenceID, n]),
          c
            ? a.createElement(ee.a, null)
            : a.createElement(a.Fragment, null, e.children)
        );
      }
      function ue(e) {
        const { closeModal: t } = e;
        return a.createElement(
          X.e,
          {
            strTitle: Object(v.f)("#Conference_NeedHelp"),
            bAlertDialog: !0,
            onCancel: t,
            onOK: t,
          },
          a.createElement(
            "div",
            null,
            Object(v.f)("#Conference_NeedHelp_Desc1")
          ),
          a.createElement(
            "div",
            null,
            a.createElement(
              "div",
              { className: ce.HelpDialogDetailsCtn },
              a.createElement(
                "div",
                null,
                Object(v.f)("#Conference_NeedHelp_BroadcastChatQ")
              ),
              a.createElement(
                "ul",
                { className: ce.HelpRequirements },
                a.createElement(
                  "li",
                  null,
                  Object(v.f)("#Conference_NeedHelp_ChatA1")
                ),
                a.createElement(
                  "li",
                  null,
                  Object(v.n)(
                    "#Conference_NeedHelp_BroadcastChatA1",
                    a.createElement(
                      "a",
                      {
                        href: "https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A",
                      },
                      Object(v.f)("#Conferenec_NeedHelp_LimitedAccounts")
                    )
                  )
                )
              )
            ),
            a.createElement(
              "div",
              { className: ce.HelpDialogDetailsCtn },
              a.createElement(
                "div",
                null,
                Object(v.f)("#Conference_NeedHelp_QandAQ")
              ),
              a.createElement(
                "ul",
                null,
                a.createElement(
                  "li",
                  null,
                  Object(v.f)("#Conference_NeedHelp_ChatA1")
                )
              )
            ),
            a.createElement(
              "div",
              { className: ce.HelpDialogDetailsCtn },
              a.createElement(
                "span",
                null,
                Object(v.f)("#Conference_NeedHelp_StillHaveQuestions")
              ),
              a.createElement(
                "a",
                {
                  href: "https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=933",
                },
                Object(v.f)("#Conference_NeedHelp_CreateTicket")
              )
            )
          )
        );
      }
      var be = n("5STL"),
        Ee = n("iwen"),
        Ce = n("6tCl");
      function _e(e) {
        const { conferenceInfo: t, bShowYouTube: n } = e,
          [c, o] = a.useState(!1),
          l = Object(u.c)(B.f.PerMinute) < t.rtStartTime - 30 * B.f.PerMinute;
        return a.createElement(
          "div",
          { className: be.ConferenceHome },
          a.createElement(
            "div",
            { className: Object(S.a)(be.LeftCol, c ? "Active" : "Hidden") },
            a.createElement(
              "div",
              { className: be.AgendaCtn },
              a.createElement(le, { conferenceInfo: t }),
              a.createElement(
                "div",
                {
                  className: be.AgendaToggle,
                  onClick: () => {
                    o(!c);
                  },
                },
                a.createElement(
                  G.a,
                  { toolTipContent: Object(v.f)("#QAndA_HideSchedule") },
                  a.createElement(
                    "div",
                    { className: be.CollapseBtn },
                    a.createElement(M.r, { angle: 0 })
                  )
                ),
                a.createElement(
                  G.a,
                  { toolTipContent: Object(v.f)("#QAndA_ShowSchedule") },
                  a.createElement(
                    "div",
                    { className: be.CalendarBtn },
                    a.createElement(M.k, null),
                    a.createElement(
                      "div",
                      { className: be.CalendarText },
                      "See Event Schedule"
                    )
                  )
                )
              )
            )
          ),
          a.createElement(
            "div",
            { className: be.MainCol },
            n &&
              a.createElement(Ee.a, {
                videoID: t.youtubeVideoID,
                classNameAlign: "",
                classNameSize: Ce.sizeFull,
                bAutoPlay: !0,
                bShowVideoImmediately: !0,
              }),
            Boolean(l)
              ? a.createElement(
                  "div",
                  { className: be.InteractionCtn },
                  a.createElement(
                    "div",
                    { className: be.PreEventNote },
                    Object(v.f)("#Conference_ChatHidden", 30)
                  )
                )
              : a.createElement(ve, { conferenceInfo: t })
          )
        );
      }
      function ve(e) {
        const { conferenceInfo: t } = e,
          [n, c] = a.useState(window.innerWidth > 910),
          [o, l] = a.useState(!0),
          r =
            d.c.COMMUNITY_BASE_URL +
            "broadcast/chatonly/" +
            t.broadcastSteamID.ConvertTo64BitString(),
          s =
            d.c.COMMUNITY_BASE_URL +
            "questions/" +
            d.b.VANITY_ID +
            "/view/" +
            t.globalQandASessionID;
        return a.createElement(
          "div",
          { className: be.InteractionCtn },
          a.createElement(
            "div",
            { className: be.TabControlsCtn },
            a.createElement(
              "div",
              {
                className: Object(S.a)(
                  be.InnerChatTab,
                  be.ChatTab,
                  n ? be.Active : ""
                ),
              },
              a.createElement(
                "div",
                {
                  className: be.TabTitle,
                  onClick: () => {
                    c(!0), l(!1);
                  },
                },
                Object(v.f)("#Conference_Tab_Chat")
              ),
              a.createElement(
                G.a,
                { toolTipContent: Object(v.f)("#QAndA_PopOutChat_ttip") },
                a.createElement(
                  "a",
                  { className: be.Popout, href: r, target: "_blank" },
                  a.createElement(M.V, null)
                )
              )
            ),
            a.createElement(
              "div",
              {
                className: Object(S.a)(
                  be.InnerChatTab,
                  be.QATab,
                  o ? be.Active : ""
                ),
              },
              a.createElement(
                "div",
                {
                  className: be.TabTitle,
                  onClick: () => {
                    c(!1), l(!0);
                  },
                },
                Object(v.f)("#Conference_Tab_QandA")
              ),
              a.createElement(
                G.a,
                { toolTipContent: Object(v.f)("#QAndA_PopOutQAndA_ttip") },
                a.createElement(
                  "a",
                  { className: be.Popout, href: s, target: "_blank" },
                  a.createElement(M.V, null)
                )
              )
            ),
            a.createElement(
              G.a,
              { toolTipContent: Object(v.f)("#QAndA_ChatToggle_ShowBoth") },
              a.createElement(
                "div",
                {
                  className: be.ShowBothTabs,
                  onClick: () => {
                    c(!0), l(!0);
                  },
                },
                a.createElement(M.db, null)
              )
            )
          ),
          a.createElement(
            "div",
            { className: be.ChatStack },
            Boolean((n && o) || (!o && !n)) &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "div",
                  { className: be.ChatColumn },
                  a.createElement(A, {
                    conferenceInfo: t,
                    className: be.ChatCtn,
                  })
                ),
                a.createElement(
                  "div",
                  { className: be.QAColumn },
                  a.createElement(L.c, { gidSession: t.globalQandASessionID })
                )
              ),
            Boolean(n && !o) &&
              a.createElement(A, { conferenceInfo: t, className: be.ChatCtn }),
            Boolean(!n && o) &&
              a.createElement(L.c, { gidSession: t.globalQandASessionID })
          )
        );
      }
      function pe(e) {
        const { conferenceInfo: t } = e;
        if (!t.faqAboutPage)
          return a.createElement(
            "div",
            null,
            Object(v.f)("#Conference_NoAbout")
          );
        const { title: n, content: c, timestamp: o } = t.faqAboutPage;
        return a.createElement(
          "div",
          null,
          a.createElement("div", { className: be.AboutTitle }, n),
          a.createElement(w.a, { text: c, bShowErrorInfo: !1 })
        );
      }
      function ge(e) {
        const { conferenceInfo: t } = e;
        return a.createElement(de, { conferenceInfo: t });
      }
      var he = n("PpkI");
      function Ie(e) {
        const { strVanity: t } = e,
          n = f.Get().GetConferenceInfo(t);
        return n
          ? a.createElement(
              b.a,
              null,
              a.createElement(
                "div",
                { className: he.ConferencePageCtn },
                a.createElement(Se, { conferenceInfo: n })
              )
            )
          : a.createElement("div", null, Object(v.f)("#Conference_Invalid"));
      }
      function Se(e) {
        const { conferenceInfo: t } = e,
          n = (e) =>
            window.sessionStorage.setItem(
              "conferenceCurrentTab",
              `?tab=${e.key}`
            ),
          c = [],
          o = Object(u.b)();
        return (
          o < t.rtEndTime &&
            c.push({
              name: Object(v.f)("#Conference_tab_Home"),
              key: "live",
              contents: a.createElement(
                b.a,
                null,
                a.createElement(_e, {
                  bShowYouTube: !!t.youtubeVideoID,
                  conferenceInfo: t,
                })
              ),
              onClick: n,
            }),
          c.push({
            name: Object(v.f)("#Conference_tab_Past"),
            key: "past",
            contents: a.createElement(
              b.a,
              null,
              a.createElement(ge, { conferenceInfo: t }),
              !t.youtubeVideoID &&
                Boolean(o < t.rtEndTime) &&
                a.createElement(j, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          c.push({
            name: Object(v.f)("#Conference_tab_Info"),
            key: "about",
            contents: a.createElement(
              b.a,
              null,
              a.createElement(pe, { conferenceInfo: t }),
              !t.youtubeVideoID &&
                Boolean(o < t.rtEndTime) &&
                a.createElement(j, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          c.push({
            name: "(VO/WebUniveser=Dev) Debug",
            key: "debug",
            hidden: "dev" != d.c.WEB_UNIVERSE,
            contents: a.createElement(
              b.a,
              null,
              a.createElement(k, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          a.createElement(
            "div",
            { className: he.ConferenceContentsCtn },
            a.createElement(
              "div",
              { className: he.ConferenceHeaderCtn },
              a.createElement(C.a, {
                className: he.LogoImage,
                rgSources: t.strLocalizedLogos,
              }),
              a.createElement(C.a, {
                className: he.LogoImageMobile,
                rgSources: t.strLocalizedMobileLogos,
              }),
              a.createElement(
                "div",
                { className: he.ConferenceDateRange },
                a.createElement(E.c, {
                  rtStartDate: t.rtStartTime,
                  rtEndDate: t.rtEndTime,
                })
              )
            ),
            a.createElement(_.a, { tabs: c })
          )
        );
      }
      const Te = {
        LandingPage: (e) => `/(conference|steamworksvirtualconference)/${e}`,
      };
      t.default = function (e) {
        return a.createElement(
          c.e,
          null,
          a.createElement(c.c, {
            path: Te.LandingPage(":vanity_str"),
            render: (e) =>
              a.createElement(o.a, {
                config: {
                  "conference-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return a.createElement(Ie, {
                      strVanity: t.toLocaleLowerCase(),
                    });
                  },
                },
              }),
          }),
          a.createElement(c.c, { component: Ne })
        );
      };
      function Ne(e) {
        return "dev" !== d.c.WEB_UNIVERSE
          ? a.createElement(c.b, { to: "/" })
          : a.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/conference.tsx to see if this page has been added to the list of routes."
            );
      }
    },
    fbnN: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n("q1tI"),
        c = n("EC67"),
        o = n("exH9"),
        l = n("TLQK"),
        r = n("GiuM"),
        s = n("Cksw"),
        i = n.n(s),
        m = n("5E+2"),
        d = n("+d9t");
      class f extends a.Component {
        constructor() {
          super(...arguments), (this.state = { activeTab: "" });
        }
        componentDidMount() {
          this.props.startingTab
            ? this.setState({ activeTab: this.props.startingTab })
            : !this.props.bDisableRouting &&
              this.props.location &&
              this.setState({
                activeTab: Object(r.a)(this.props.location, "tab"),
              });
        }
        componentDidUpdate(e) {
          !this.props.bDisableRouting &&
            this.props.location &&
            this.props.location.key !== e.location.key &&
            this.setState({
              activeTab: Object(r.a)(this.props.location, "tab"),
            });
        }
        OnTabClick(e) {
          this.setState({ activeTab: e.key }),
            !this.props.bDisableRouting &&
              this.props.history &&
              Object(r.b)(this.props.history, "tab", e.key),
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
              { className: i.a.GraphicalAssetsTabs },
              this.props.tabs.map((t) => {
                if (!t.hidden) {
                  let n = "";
                  return (
                    "success" === t.statusType
                      ? (n = i.a.StatusSuccess)
                      : "danger" === t.statusType
                      ? (n = i.a.StatusDanger)
                      : "caution" === t.statusType && (n = i.a.StatusCaution),
                    a.createElement(
                      d.b,
                      {
                        key: t.key,
                        condition: Boolean(t.statusToolTip),
                        wrap: (e) =>
                          a.createElement(
                            m.a,
                            { toolTipContent: t.statusToolTip || t.tooltip },
                            e
                          ),
                      },
                      a.createElement(
                        "div",
                        {
                          key: t.key,
                          className: `${i.a.GraphicalAssetsTab} ${
                            t.key === e.key ? i.a.Active : ""
                          }`,
                          onClick: () => this.OnTabClick(t),
                        },
                        Boolean(t.vo_warning) &&
                          a.createElement(
                            m.a,
                            { toolTipContent: t.vo_warning },
                            a.createElement(
                              "div",
                              { className: i.a.VOWarning },
                              Object(l.f)("#EventEditor_VOWarning")
                            )
                          ),
                        Boolean(t.status) &&
                          a.createElement(
                            "div",
                            {
                              className: Object(o.a)(
                                i.a.GraphicalAssetStatus,
                                n
                              ),
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
      const u = Object(c.j)(f);
    },
  },
]);
