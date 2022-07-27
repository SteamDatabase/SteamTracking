/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "1TsT": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var o = void 0;
      function r() {
        return (
          void 0 === o &&
            (o = (function () {
              if (!a) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  n = function () {};
                window.addEventListener("testPassiveEventSupport", n, t),
                  window.removeEventListener("testPassiveEventSupport", n, t);
              } catch (e) {}
              return e;
            })()),
          o
        );
      }
      function c(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function i(e) {
        (this.target = e), (this.events = {});
      }
      (i.prototype.getEventHandlers = function (e, t) {
        var n,
          a =
            String(e) +
            " " +
            String(
              (n = t)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0
            );
        return (
          this.events[a] ||
            ((this.events[a] = { handlers: [], handleEvent: void 0 }),
            (this.events[a].nextHandlers = this.events[a].handlers)),
          this.events[a]
        );
      }),
        (i.prototype.handleEvent = function (e, t, n) {
          var a = this.getEventHandlers(e, t);
          (a.handlers = a.nextHandlers),
            a.handlers.forEach(function (e) {
              e && e(n);
            });
        }),
        (i.prototype.add = function (e, t, n) {
          var a = this,
            o = this.getEventHandlers(e, n);
          c(o),
            0 === o.nextHandlers.length &&
              ((o.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, o.handleEvent, n)),
            o.nextHandlers.push(t);
          var r = !0;
          return function () {
            if (r) {
              (r = !1), c(o);
              var i = o.nextHandlers.indexOf(t);
              o.nextHandlers.splice(i, 1),
                0 === o.nextHandlers.length &&
                  (a.target &&
                    a.target.removeEventListener(e, o.handleEvent, n),
                  (o.handleEvent = void 0));
            }
          };
        });
      var l = "__consolidated_events_handlers__";
      function s(e, t, n, a) {
        e[l] || (e[l] = new i(e));
        var o = (function (e) {
          if (e) return r() ? e : !!e.capture;
        })(a);
        return e[l].add(t, n, o);
      }
    },
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
          return ye;
        });
      var a = n("q1tI"),
        o = n("EC67"),
        r = n("WplJ"),
        c = n("rcjX"),
        i = n("mgoM"),
        l = (n("65aj"), n("kLLr")),
        s = (n("ECFo"), n("N2vu")),
        u = n("qiKp"),
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
          let e = Object(d.g)("conferenceinfo", "application_config");
          if (this.ValidateStoreDefault(e)) {
            const t = Object(i.f)(d.c.LANGUAGE),
              n = Object(s.c)(e.clan_faq_about_page),
              a = s.a.Get().GetFAQPublishedContent(n, t),
              o = Object(c.d)(
                e.localized_logo,
                t,
                null == a ? void 0 : a.timestamp
              ),
              r = Object(c.d)(
                e.localized_mobile_logo,
                t,
                null == a ? void 0 : a.timestamp
              ),
              u = {
                strConferenceID: e.vanity,
                rtStartTime: e.start_rtime,
                rtEndTime: e.end_rtime,
                clanSteamID: new l.a(e.event_group_steamid),
                broadcastSteamID: new l.a(e.broadcast_steamid),
                bPartnerOnly: e.partner_only,
                faqAboutPage: a,
                strLocalizedLogos: "string" == typeof o ? [o] : o,
                strLocalizedMobileLogos: "string" == typeof r ? [r] : r,
                globalQandASessionID: e.global_qanda_session_id,
                youtubeVideoID: e.youtubeVideoID,
              };
            this.m_mapConferences.set(e.vanity, u);
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
      var m = n("5izx"),
        p = n("IjL/"),
        v = n("YLyR"),
        b = n("UxvL"),
        E = n("fbnN"),
        h = n("TLQK"),
        _ = n("aoTL"),
        C = n("eN6m"),
        g = n("trWU"),
        w = (n("kdZy"), n("boaH"), n("nWbB")),
        T = n("exH9"),
        y = n("Lfwj"),
        S = n("rKv1"),
        I = n("NIbt");
      n("gfUn");
      function O(e) {
        const { conferenceInfo: t } = e,
          n = t.broadcastSteamID.ConvertTo64BitString();
        return a.createElement(
          p.a,
          null,
          a.createElement(g.default, {
            steamIDBroadcast: n,
            watchLocation: 5,
            bStartMuted: !0,
          })
        );
      }
      function N(e) {
        const { conferenceInfo: t } = e,
          n = Object(_.d)(() => t.broadcastSteamID.ConvertTo64BitString());
        return a.createElement(
          "div",
          {
            className: Object(T.a)(
              y.BroadcastChatCtn,
              e.className ? `${e.className}` : ""
            ),
          },
          a.createElement(
            p.a,
            null,
            a.createElement(C.a, {
              emoticonStore: w.g,
              watchLocation: 5,
              steamID: n,
              globalChat: !0,
              bPartnerMemberOnlyChat: t.bPartnerOnly,
              bInvertLayout: !0,
            })
          )
        );
      }
      function A(e) {
        const { conferenceInfo: t } = e,
          [n, o] = a.useState(!1);
        return n
          ? null
          : a.createElement(
              "div",
              { className: S.broadcast_floating },
              a.createElement(I.BroadcastEmbeddablePopoutHeader, {
                steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
                OnPreventPopup: () => o(!0),
              }),
              a.createElement(O, { conferenceInfo: t })
            );
      }
      var D = n("eDP5");
      function j(e) {
        const { conferenceInfo: t } = e;
        return "dev" != d.c.WEB_UNIVERSE
          ? null
          : a.createElement(
              "div",
              null,
              a.createElement("h1", null, "Conference Data"),
              a.createElement(D.b, { data: t }),
              a.createElement("h1", null, "Config Data"),
              a.createElement(D.a, { strConfigID: "application_config" })
            );
      }
      var k = n("JCps"),
        L = n("knQc"),
        B = n("6Y59"),
        P = n("5E+2"),
        H = n("CdLH"),
        M = n("mrSG"),
        G = n("WF3T"),
        x = n("9w6b");
      class R {
        constructor() {
          this.m_inFlight = null;
        }
        LoadInitialCalendarData(e, t) {
          return Object(M.a)(this, void 0, void 0, function* () {
            return (
              this.m_inFlight ||
                (this.m_inFlight = this.InternalLoadInitialCalendarData(e, t)),
              this.m_inFlight
            );
          });
        }
        InternalLoadInitialCalendarData(e, t) {
          return Object(M.a)(this, void 0, void 0, function* () {
            x.a.IsInitialized() || x.a.InitGlobal(),
              Object(G.c)({
                collectionid: t,
                bSectionByDay: !0,
                rtCalendarEnd: e,
              });
            const n = Object(G.b)(),
              a = Object(d.g)("conference_calendar", "application_config");
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
          return R.m_singleton || (R.m_singleton = new R()), R.m_singleton;
        }
      }
      n("5bld"), n("MUT6");
      var U = n("1BdX"),
        W = (n("3+zv"), n("6oCP")),
        Q = n("Mgs7"),
        F = n("T27q"),
        V = n("fA8f"),
        q = n("cGQe"),
        z = n("r3N9"),
        J = n("GiuM"),
        Y = n("opsS");
      function K(e) {
        const { displayLocation: t, fnChangeModalEvent: n } = e,
          [o, r] = a.useState(null),
          [c, i] = Object(J.d)("emgid", null),
          [s, u] = Object(J.d)("emclan", null);
        return (
          Object(Y.e)(n, (e, t) => {
            i(e), u(l.a.InitFromClanID(t).ConvertTo64BitString());
          }),
          a.useEffect(() => {
            if (null != c && null != s) {
              const e = new l.a(s);
              W.b
                .LoadPartnerEventFromClanEventGIDAndClanSteamID(e, c, 0)
                .then(r);
            }
          }, [c, s]),
          o
            ? a.createElement(z.a, {
                appid: o.appid,
                trackingLocation: t,
                announcementGID: o.GetAnnouncementGID(),
                partnerEventStore: W.b,
                eventModel: o,
                showAppHeader: !0,
                closeModal: () => {
                  r(null), u(null), i(null);
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
        oe = n("JsZI");
      function re(e) {
        const t = Object(G.b)(),
          n = Object(m.c)(10),
          o = t.GetActiveEventsAt(n) || [],
          [r] = a.useState(new u.a()),
          c = a.useCallback(
            (e, t) => Object(F.a)(W.b.GetClanEventModel(e), window),
            []
          );
        return 0 == t.GetNumEventsLoaded()
          ? a.createElement(
              "div",
              null,
              Object(h.f)("#Conference_No_Schedule_Yet")
            )
          : a.createElement(
              "div",
              { className: oe.EventsScheduleCtn },
              a.createElement(K, { displayLocation: 6, fnChangeModalEvent: r }),
              a.createElement(se, {
                rgActiveEvents: o,
                fnDisplayModalEvent: c,
              }),
              a.createElement(ie, {
                rgActiveEvents: o,
                fnDisplayModalEvent: c,
                rtNow: n,
              }),
              a.createElement("br", null),
              a.createElement("br", null),
              a.createElement(
                Q.e,
                {
                  onClick: (e) =>
                    Object($.d)(a.createElement(me, null), Object(ne.o)(e)),
                },
                Object(h.f)("#Conference_NeedHelp")
              )
            );
      }
      function ce(e) {
        return a.createElement(
          fe,
          Object.assign({}, e),
          a.createElement(re, Object.assign({}, e))
        );
      }
      function ie(e) {
        const { rgActiveEvents: t, rtNow: n } = e,
          o = Object(G.b)()
            .GetCalendarItemsInTimeRange(n + 1)
            .rgCalendarItems.filter((e) => !t.some((t) => t.GID == e.unique_id))
            .sort((e, t) => e.start_time - t.start_time);
        return 0 == o.length
          ? a.createElement(
              "div",
              null,
              Object(h.f)("#Conference_No_More_Schedule")
            )
          : a.createElement(
              "div",
              { className: oe.UpcomingEventsCtn },
              a.createElement(
                "div",
                { className: oe.SectionTitle },
                Object(h.f)("#Conference_ScheduleNext")
              ),
              a.createElement(
                "div",
                { className: oe.EventSchedCtn },
                o.map((o, r) =>
                  a.createElement(le, {
                    key: o.unique_id,
                    bDisplayAsUpNext: Boolean(0 == r && t.length >= 1),
                    calendarItem: o,
                    fnDisplayModalEvent: e.fnDisplayModalEvent,
                    rtNow: n,
                  })
                )
              )
            );
      }
      function le(e) {
        const {
            calendarItem: t,
            bDisplayAsUpNext: n,
            fnDisplayModalEvent: o,
            rtNow: r,
          } = e,
          c = W.b.GetClanEventModel(t.unique_id),
          l = Object(i.f)(d.c.LANGUAGE),
          s = c.GetStartTimeAndDateUnixSeconds(),
          u = Object(H.b)(new Date(1e3 * r), new Date(1e3 * s));
        return a.createElement(
          "div",
          {
            className: oe.EventItemCtn,
            onClick: () => o(c.GID, c.clanSteamID.GetAccountID()),
          },
          a.createElement(
            "div",
            { className: oe.Title },
            c.GetNameWithFallback(l)
          ),
          a.createElement(
            "div",
            { className: oe.SessionTime },
            !u && a.createElement("div", null, Object(h.k)(s, !0)),
            a.createElement(
              "div",
              null,
              Boolean(n && u)
                ? Object(h.f)(
                    "#Conference_StartInMin",
                    Math.max(1, Math.floor((s - r) / 60))
                  )
                : Object(h.f)(
                    "#Conference_StartsAt",
                    Object(ae.h)(s, { bForce24HourClock: !1 })
                  )
            )
          ),
          a.createElement(
            "div",
            { className: Object(T.a)(oe.ReminderContainer, oe.OnlyIcon) },
            a.createElement(q.b, {
              eventModel: c,
              lang: l,
              bOnlyShowIcon: !0,
              bExpandLeft: !0,
              bShowStartTime: !1,
            })
          )
        );
      }
      function se(e) {
        const { rgActiveEvents: t, fnDisplayModalEvent: n } = e;
        if (!t || 0 == t.length) return null;
        const o = t[0],
          r = Object(i.f)(d.c.LANGUAGE),
          c = U.a.ParseEventModelPresenters(o, r);
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
            o.GetNameWithFallback(r)
          ),
          Boolean(c) &&
            c.map((e) =>
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
            { className: oe.EventDescription },
            o.GetSummaryWithFallback(r)
          ),
          a.createElement(
            "div",
            {
              className: oe.ReadMoreBtn,
              onClick: () => n(o.GID, o.clanSteamID.GetAccountID()),
            },
            Object(h.f)("#EventEmail_Button_ClickForMoreDetails")
          )
        );
      }
      function ue(e) {
        const { conferenceInfo: t } = e,
          n = Object(G.b)(),
          o = Object(m.c)(10),
          r = n.GetActiveEventsAt(o) || [],
          [c] = a.useState(new u.a()),
          i = n
            .GetCalendarItemsInTimeRange(t.rtStartTime - 1, o)
            .rgCalendarItems.filter(
              (e) => 0 == r.length || r[0].GID != e.unique_id
            )
            .sort((e, t) => e.start_time - t.start_time);
        return 0 == i.length
          ? a.createElement(
              "div",
              null,
              Object(h.f)("#Conference_NoPastEvents")
            )
          : a.createElement(
              "div",
              { className: oe.PastEventsCtn },
              a.createElement(K, { displayLocation: 6, fnChangeModalEvent: c }),
              i.map((e) => {
                const t = W.b.GetClanEventModel(e.unique_id);
                return a.createElement(V.a, {
                  key: "row" + e.unique_id,
                  eventModel: t,
                  calendarEvent: e,
                  bSuppressHoverEffects: !1,
                  mode: "wide",
                  fnOnClicked: () =>
                    c.Dispatch(t.GID, t.clanSteamID.GetAccountID()),
                });
              })
            );
      }
      function de(e) {
        return a.createElement(
          fe,
          Object.assign({}, e),
          a.createElement(ue, Object.assign({}, e))
        );
      }
      function fe(e) {
        const { conferenceInfo: t } = e,
          n = Object(te.a)("WithCalendarStore"),
          [o, r] = Object(a.useState)(!0);
        return (
          Object(a.useEffect)(() => {
            n.token.reason ||
              R.Get()
                .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                .finally(() => {
                  n.token.reason || r(!1);
                });
          }, [t.rtEndTime, t.strConferenceID, n]),
          o
            ? a.createElement(ee.a, null)
            : a.createElement(a.Fragment, null, e.children)
        );
      }
      function me(e) {
        const { closeModal: t } = e;
        return a.createElement(
          X.e,
          {
            strTitle: Object(h.f)("#Conference_NeedHelp"),
            bAlertDialog: !0,
            onCancel: t,
            onOK: t,
          },
          a.createElement(
            "div",
            null,
            Object(h.f)("#Conference_NeedHelp_Desc1")
          ),
          a.createElement(
            "div",
            null,
            a.createElement(
              "div",
              { className: oe.HelpDialogDetailsCtn },
              a.createElement(
                "div",
                null,
                Object(h.f)("#Conference_NeedHelp_BroadcastChatQ")
              ),
              a.createElement(
                "ul",
                { className: oe.HelpRequirements },
                a.createElement(
                  "li",
                  null,
                  Object(h.f)("#Conference_NeedHelp_ChatA1")
                ),
                a.createElement(
                  "li",
                  null,
                  Object(h.o)(
                    "#Conference_NeedHelp_BroadcastChatA1",
                    a.createElement(
                      "a",
                      {
                        href: "https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A",
                      },
                      Object(h.f)("#Conferenec_NeedHelp_LimitedAccounts")
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
                Object(h.f)("#Conference_NeedHelp_QandAQ")
              ),
              a.createElement(
                "ul",
                null,
                a.createElement(
                  "li",
                  null,
                  Object(h.f)("#Conference_NeedHelp_ChatA1")
                )
              )
            ),
            a.createElement(
              "div",
              { className: oe.HelpDialogDetailsCtn },
              a.createElement(
                "span",
                null,
                Object(h.f)("#Conference_NeedHelp_StillHaveQuestions")
              ),
              a.createElement(
                "a",
                {
                  href: "https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=933",
                },
                Object(h.f)("#Conference_NeedHelp_CreateTicket")
              )
            )
          )
        );
      }
      var pe = n("5STL"),
        ve = n("iwen"),
        be = n("6tCl");
      function Ee(e) {
        const { conferenceInfo: t, bShowYouTube: n } = e,
          [o, r] = a.useState(!1),
          c = Object(m.c)(H.f.PerMinute) < t.rtStartTime - 30 * H.f.PerMinute;
        return a.createElement(
          "div",
          { className: pe.ConferenceHome },
          a.createElement(
            "div",
            { className: Object(T.a)(pe.LeftCol, o ? "Active" : "Hidden") },
            a.createElement(
              "div",
              { className: pe.AgendaCtn },
              a.createElement(ce, { conferenceInfo: t }),
              a.createElement(
                "div",
                {
                  className: pe.AgendaToggle,
                  onClick: () => {
                    r(!o);
                  },
                },
                a.createElement(
                  P.a,
                  { toolTipContent: Object(h.f)("#QAndA_HideSchedule") },
                  a.createElement(
                    "div",
                    { className: pe.CollapseBtn },
                    a.createElement(B.t, { angle: 0 })
                  )
                ),
                a.createElement(
                  P.a,
                  { toolTipContent: Object(h.f)("#QAndA_ShowSchedule") },
                  a.createElement(
                    "div",
                    { className: pe.CalendarBtn },
                    a.createElement(B.k, null),
                    a.createElement(
                      "div",
                      { className: pe.CalendarText },
                      "See Event Schedule"
                    )
                  )
                )
              )
            )
          ),
          a.createElement(
            "div",
            { className: pe.MainCol },
            n &&
              a.createElement(ve.a, {
                videoID: t.youtubeVideoID,
                classNameAlign: "",
                classNameSize: be.sizeFull,
                bAutoPlay: !0,
                bShowVideoImmediately: !0,
              }),
            Boolean(c)
              ? a.createElement(
                  "div",
                  { className: pe.InteractionCtn },
                  a.createElement(
                    "div",
                    { className: pe.PreEventNote },
                    Object(h.f)("#Conference_ChatHidden", 30)
                  )
                )
              : a.createElement(he, { conferenceInfo: t })
          )
        );
      }
      function he(e) {
        const { conferenceInfo: t } = e,
          [n, o] = a.useState(window.innerWidth > 910),
          [r, c] = a.useState(!0),
          i =
            d.c.COMMUNITY_BASE_URL +
            "broadcast/chatonly/" +
            t.broadcastSteamID.ConvertTo64BitString(),
          l =
            d.c.COMMUNITY_BASE_URL +
            "questions/" +
            d.b.VANITY_ID +
            "/view/" +
            t.globalQandASessionID;
        return a.createElement(
          "div",
          { className: pe.InteractionCtn },
          a.createElement(
            "div",
            { className: pe.TabControlsCtn },
            a.createElement(
              "div",
              {
                className: Object(T.a)(
                  pe.InnerChatTab,
                  pe.ChatTab,
                  n ? pe.Active : ""
                ),
              },
              a.createElement(
                "div",
                {
                  className: pe.TabTitle,
                  onClick: () => {
                    o(!0), c(!1);
                  },
                },
                Object(h.f)("#Conference_Tab_Chat")
              ),
              a.createElement(
                P.a,
                { toolTipContent: Object(h.f)("#QAndA_PopOutChat_ttip") },
                a.createElement(
                  "a",
                  { className: pe.Popout, href: i, target: "_blank" },
                  a.createElement(B.Y, null)
                )
              )
            ),
            a.createElement(
              "div",
              {
                className: Object(T.a)(
                  pe.InnerChatTab,
                  pe.QATab,
                  r ? pe.Active : ""
                ),
              },
              a.createElement(
                "div",
                {
                  className: pe.TabTitle,
                  onClick: () => {
                    o(!1), c(!0);
                  },
                },
                Object(h.f)("#Conference_Tab_QandA")
              ),
              a.createElement(
                P.a,
                { toolTipContent: Object(h.f)("#QAndA_PopOutQAndA_ttip") },
                a.createElement(
                  "a",
                  { className: pe.Popout, href: l, target: "_blank" },
                  a.createElement(B.Y, null)
                )
              )
            ),
            a.createElement(
              P.a,
              { toolTipContent: Object(h.f)("#QAndA_ChatToggle_ShowBoth") },
              a.createElement(
                "div",
                {
                  className: pe.ShowBothTabs,
                  onClick: () => {
                    o(!0), c(!0);
                  },
                },
                a.createElement(B.gb, null)
              )
            )
          ),
          a.createElement(
            "div",
            { className: pe.ChatStack },
            Boolean((n && r) || (!r && !n)) &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "div",
                  { className: pe.ChatColumn },
                  a.createElement(N, {
                    conferenceInfo: t,
                    className: pe.ChatCtn,
                  })
                ),
                a.createElement(
                  "div",
                  { className: pe.QAColumn },
                  a.createElement(k.c, { gidSession: t.globalQandASessionID })
                )
              ),
            Boolean(n && !r) &&
              a.createElement(N, { conferenceInfo: t, className: pe.ChatCtn }),
            Boolean(!n && r) &&
              a.createElement(k.c, { gidSession: t.globalQandASessionID })
          )
        );
      }
      function _e(e) {
        const { conferenceInfo: t } = e;
        if (!t.faqAboutPage)
          return a.createElement(
            "div",
            null,
            Object(h.f)("#Conference_NoAbout")
          );
        const { title: n, content: o, timestamp: r } = t.faqAboutPage;
        return a.createElement(
          "div",
          null,
          a.createElement("div", { className: pe.AboutTitle }, n),
          a.createElement(L.a, { text: o, bShowErrorInfo: !1 })
        );
      }
      function Ce(e) {
        const { conferenceInfo: t } = e;
        return a.createElement(de, { conferenceInfo: t });
      }
      var ge = n("PpkI");
      function we(e) {
        const { strVanity: t } = e,
          n = f.Get().GetConferenceInfo(t);
        return n
          ? a.createElement(
              p.a,
              null,
              a.createElement(
                "div",
                { className: ge.ConferencePageCtn },
                a.createElement(Te, { conferenceInfo: n })
              )
            )
          : a.createElement("div", null, Object(h.f)("#Conference_Invalid"));
      }
      function Te(e) {
        const { conferenceInfo: t } = e,
          n = (e) =>
            window.sessionStorage.setItem(
              "conferenceCurrentTab",
              `?tab=${e.key}`
            ),
          o = [],
          r = Object(m.b)();
        return (
          r < t.rtEndTime &&
            o.push({
              name: Object(h.f)("#Conference_tab_Home"),
              key: "live",
              contents: a.createElement(
                p.a,
                null,
                a.createElement(Ee, {
                  bShowYouTube: !!t.youtubeVideoID,
                  conferenceInfo: t,
                })
              ),
              onClick: n,
            }),
          o.push({
            name: Object(h.f)("#Conference_tab_Past"),
            key: "past",
            contents: a.createElement(
              p.a,
              null,
              a.createElement(Ce, { conferenceInfo: t }),
              !t.youtubeVideoID &&
                Boolean(r < t.rtEndTime) &&
                a.createElement(A, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          o.push({
            name: Object(h.f)("#Conference_tab_Info"),
            key: "about",
            contents: a.createElement(
              p.a,
              null,
              a.createElement(_e, { conferenceInfo: t }),
              !t.youtubeVideoID &&
                Boolean(r < t.rtEndTime) &&
                a.createElement(A, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          o.push({
            name: "(VO/WebUniveser=Dev) Debug",
            key: "debug",
            hidden: "dev" != d.c.WEB_UNIVERSE,
            contents: a.createElement(
              p.a,
              null,
              a.createElement(j, { conferenceInfo: t })
            ),
            onClick: n,
          }),
          a.createElement(
            "div",
            { className: ge.ConferenceContentsCtn },
            a.createElement(
              "div",
              { className: ge.ConferenceHeaderCtn },
              a.createElement(b.a, {
                className: ge.LogoImage,
                rgSources: t.strLocalizedLogos,
              }),
              a.createElement(b.a, {
                className: ge.LogoImageMobile,
                rgSources: t.strLocalizedMobileLogos,
              }),
              a.createElement(
                "div",
                { className: ge.ConferenceDateRange },
                a.createElement(v.c, {
                  rtStartDate: t.rtStartTime,
                  rtEndDate: t.rtEndTime,
                })
              )
            ),
            a.createElement(E.a, { tabs: o })
          )
        );
      }
      const ye = {
        LandingPage: (e) => `/(conference|steamworksvirtualconference)/${e}`,
      };
      t.default = function (e) {
        return a.createElement(
          o.e,
          null,
          a.createElement(o.c, {
            path: ye.LandingPage(":vanity_str"),
            render: (e) =>
              a.createElement(r.a, {
                config: {
                  "conference-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return a.createElement(we, {
                      strVanity: t.toLocaleLowerCase(),
                    });
                  },
                },
              }),
          }),
          a.createElement(o.c, { component: Se })
        );
      };
      function Se(e) {
        return "dev" !== d.c.WEB_UNIVERSE
          ? a.createElement(o.b, { to: "/" })
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
        return m;
      });
      var a = n("q1tI"),
        o = n("EC67"),
        r = n("exH9"),
        c = n("TLQK"),
        i = n("GiuM"),
        l = n("Cksw"),
        s = n.n(l),
        u = n("5E+2"),
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
                activeTab: Object(i.a)(this.props.location, "tab"),
              });
        }
        componentDidUpdate(e) {
          !this.props.bDisableRouting &&
            this.props.location &&
            this.props.location.key !== e.location.key &&
            this.setState({
              activeTab: Object(i.a)(this.props.location, "tab"),
            });
        }
        OnTabClick(e) {
          this.setState({ activeTab: e.key }),
            !this.props.bDisableRouting &&
              this.props.history &&
              Object(i.b)(this.props.history, "tab", e.key),
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
              { className: s.a.GraphicalAssetsTabs },
              this.props.tabs.map((t) => {
                if (!t.hidden) {
                  let n = "";
                  return (
                    "success" === t.statusType
                      ? (n = s.a.StatusSuccess)
                      : "danger" === t.statusType
                      ? (n = s.a.StatusDanger)
                      : "caution" === t.statusType && (n = s.a.StatusCaution),
                    a.createElement(
                      d.b,
                      {
                        key: t.key,
                        condition: Boolean(t.statusToolTip),
                        wrap: (e) =>
                          a.createElement(
                            u.a,
                            { toolTipContent: t.statusToolTip || t.tooltip },
                            e
                          ),
                      },
                      a.createElement(
                        "div",
                        {
                          key: t.key,
                          className: `${s.a.GraphicalAssetsTab} ${
                            t.key === e.key ? s.a.Active : ""
                          }`,
                          onClick: () => this.OnTabClick(t),
                        },
                        Boolean(t.vo_warning) &&
                          a.createElement(
                            u.a,
                            { toolTipContent: t.vo_warning },
                            a.createElement(
                              "div",
                              { className: s.a.VOWarning },
                              Object(c.f)("#EventEditor_VOWarning")
                            )
                          ),
                        Boolean(t.status) &&
                          a.createElement(
                            "div",
                            {
                              className: Object(r.a)(
                                s.a.GraphicalAssetStatus,
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
      const m = Object(o.j)(f);
    },
    uuth: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return w;
        });
        var a = n("1TsT"),
          o = (n("17x9"), n("q1tI")),
          r = n.n(o),
          c = n("TOwV");
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function l(e) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function s(e, t) {
          return (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function u(e, t) {
          return !t || ("object" != typeof t && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function d(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              a = l(e);
            if (t) {
              var o = l(this).constructor;
              n = Reflect.construct(a, arguments, o);
            } else n = a.apply(this, arguments);
            return u(this, n);
          };
        }
        function f(e, t) {
          var n,
            a =
              ((n = e),
              !isNaN(parseFloat(n)) && isFinite(n)
                ? parseFloat(n)
                : "px" === n.slice(-2)
                ? parseFloat(n.slice(0, -2))
                : void 0);
          if ("number" == typeof a) return a;
          var o = (function (e) {
            if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
          })(e);
          return "number" == typeof o ? o * t : void 0;
        }
        var m = "above",
          p = "inside",
          v = "below",
          b = "invisible";
        function E(e) {
          return "string" == typeof e.type;
        }
        var h;
        var _ = [];
        function C(e) {
          _.push(e),
            h ||
              (h = setTimeout(function () {
                var e;
                for (h = null; (e = _.shift()); ) e();
              }, 0));
          var t = !0;
          return function () {
            if (t) {
              t = !1;
              var n = _.indexOf(e);
              -1 !== n &&
                (_.splice(n, 1),
                !_.length && h && (clearTimeout(h), (h = null)));
            }
          };
        }
        var g = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: "0px",
            bottomOffset: "0px",
            horizontal: !1,
            onEnter: function () {},
            onLeave: function () {},
            onPositionChange: function () {},
            fireOnRapidScroll: !0,
          },
          w = (function (t) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && s(e, t);
            })(h, t);
            var n,
              o,
              l,
              u = d(h);
            function h(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, h),
                ((t = u.call(this, e)).refElement = function (e) {
                  t._ref = e;
                }),
                t
              );
            }
            return (
              (n = h),
              (o = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    h.getWindow() &&
                      (this.cancelOnNextTick = C(function () {
                        e.cancelOnNextTick = null;
                        var t = e.props,
                          n = t.children;
                        t.debug,
                          (function (e, t) {
                            if (e && !E(e) && !t)
                              throw new Error(
                                "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info."
                              );
                          })(n, e._ref),
                          (e._handleScroll = e._handleScroll.bind(e)),
                          (e.scrollableAncestor = e._findScrollableAncestor()),
                          (e.scrollEventListenerUnsubscribe = Object(a.a)(
                            e.scrollableAncestor,
                            "scroll",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          (e.resizeEventListenerUnsubscribe = Object(a.a)(
                            window,
                            "resize",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          e._handleScroll(null);
                      }));
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var e = this;
                    h.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = C(function () {
                          (e.cancelOnNextTick = null), e._handleScroll(null);
                        })));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    h.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick());
                  },
                },
                {
                  key: "_findScrollableAncestor",
                  value: function () {
                    var t = this.props,
                      n = t.horizontal,
                      a = t.scrollableAncestor;
                    if (a)
                      return (function (t) {
                        return "window" === t ? e.window : t;
                      })(a);
                    for (var o = this._ref; o.parentNode; ) {
                      if ((o = o.parentNode) === document.body) return window;
                      var r = window.getComputedStyle(o),
                        c =
                          (n
                            ? r.getPropertyValue("overflow-x")
                            : r.getPropertyValue("overflow-y")) ||
                          r.getPropertyValue("overflow");
                      if ("auto" === c || "scroll" === c || "overlay" === c)
                        return o;
                    }
                    return window;
                  },
                },
                {
                  key: "_handleScroll",
                  value: function (e) {
                    if (this._ref) {
                      var t = this._getBounds(),
                        n = (function (e) {
                          return e.viewportBottom - e.viewportTop == 0
                            ? b
                            : (e.viewportTop <= e.waypointTop &&
                                e.waypointTop <= e.viewportBottom) ||
                              (e.viewportTop <= e.waypointBottom &&
                                e.waypointBottom <= e.viewportBottom) ||
                              (e.waypointTop <= e.viewportTop &&
                                e.viewportBottom <= e.waypointBottom)
                            ? p
                            : e.viewportBottom < e.waypointTop
                            ? v
                            : e.waypointTop < e.viewportTop
                            ? m
                            : b;
                        })(t),
                        a = this._previousPosition,
                        o = this.props,
                        r = (o.debug, o.onPositionChange),
                        c = o.onEnter,
                        i = o.onLeave,
                        l = o.fireOnRapidScroll;
                      if (((this._previousPosition = n), a !== n)) {
                        var s = {
                          currentPosition: n,
                          previousPosition: a,
                          event: e,
                          waypointTop: t.waypointTop,
                          waypointBottom: t.waypointBottom,
                          viewportTop: t.viewportTop,
                          viewportBottom: t.viewportBottom,
                        };
                        r.call(this, s),
                          n === p
                            ? c.call(this, s)
                            : a === p && i.call(this, s),
                          l &&
                            ((a === v && n === m) || (a === m && n === v)) &&
                            (c.call(this, {
                              currentPosition: p,
                              previousPosition: a,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }),
                            i.call(this, {
                              currentPosition: n,
                              previousPosition: p,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }));
                      }
                    }
                  },
                },
                {
                  key: "_getBounds",
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      a = n.horizontal,
                      o = (n.debug, this._ref.getBoundingClientRect()),
                      r = o.left,
                      c = o.top,
                      i = o.right,
                      l = o.bottom,
                      s = a ? r : c,
                      u = a ? i : l;
                    this.scrollableAncestor === window
                      ? ((e = a ? window.innerWidth : window.innerHeight),
                        (t = 0))
                      : ((e = a
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (t = a
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top));
                    var d = this.props,
                      m = d.bottomOffset;
                    return {
                      waypointTop: s,
                      waypointBottom: u,
                      viewportTop: t + f(d.topOffset, e),
                      viewportBottom: t + e - f(m, e),
                    };
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.children;
                    return t
                      ? E(t) || Object(c.isForwardRef)(t)
                        ? r.a.cloneElement(t, {
                            ref: function (n) {
                              e.refElement(n),
                                t.ref &&
                                  ("function" == typeof t.ref
                                    ? t.ref(n)
                                    : (t.ref.current = n));
                            },
                          })
                        : r.a.cloneElement(t, { innerRef: this.refElement })
                      : r.a.createElement("span", {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        });
                  },
                },
              ]) && i(n.prototype, o),
              l && i(n, l),
              h
            );
          })(r.a.PureComponent);
        (w.above = m),
          (w.below = v),
          (w.inside = p),
          (w.invisible = b),
          (w.getWindow = function () {
            if ("undefined" != typeof window) return window;
          }),
          (w.defaultProps = g),
          (w.displayName = "Waypoint");
      }.call(this, n("yLpj")));
    },
  },
]);
