/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3863],
  {
    15798: (e) => {
      e.exports = {
        ButtonDailyDealDashboard: "dailydeals_ButtonDailyDealDashboard_IJS5R",
      };
    },
    25406: (e) => {
      e.exports = {
        Section: "section_Section_1FrGx",
        Title: "section_Title_f3pCB",
        Body: "section_Body_1CaAp",
      };
    },
    42038: (e) => {
      e.exports = {
        SectionContainer: "upcomingeventscalendar_SectionContainer_1OBXz",
        CalendarContainer: "upcomingeventscalendar_CalendarContainer_pLKmG",
        MonthPickerContainer:
          "upcomingeventscalendar_MonthPickerContainer_3YUZn",
        MonthPickerArrow: "upcomingeventscalendar_MonthPickerArrow_2ht2t",
        Inactive: "upcomingeventscalendar_Inactive_3Z-w7",
        MonthPickerToday: "upcomingeventscalendar_MonthPickerToday_iHTm_",
        MonthPickerDate: "upcomingeventscalendar_MonthPickerDate_2rZat",
        Week: "upcomingeventscalendar_Week_2g35M",
        DayName: "upcomingeventscalendar_DayName_PRNbj",
        Day: "upcomingeventscalendar_Day_357j5",
        OtherMonth: "upcomingeventscalendar_OtherMonth_RgAj-",
        Deadline: "upcomingeventscalendar_Deadline_1OK2i",
        Release: "upcomingeventscalendar_Release_xCJCO",
        Event: "upcomingeventscalendar_Event_2jrTK",
        ListContainer: "upcomingeventscalendar_ListContainer_1sKgk",
        List: "upcomingeventscalendar_List_1Vsjy",
        ListMonth: "upcomingeventscalendar_ListMonth_2gBsU",
        ListMonthTitle: "upcomingeventscalendar_ListMonthTitle_1lMzi",
        ListDay: "upcomingeventscalendar_ListDay_10JRf",
        ListEvent: "upcomingeventscalendar_ListEvent_2OvrU",
        ListEventHeader: "upcomingeventscalendar_ListEventHeader_2JVkF",
        ValveOnly: "upcomingeventscalendar_ValveOnly_1PWl9",
        ListDayNumber: "upcomingeventscalendar_ListDayNumber_3XINn",
        ListEventType: "upcomingeventscalendar_ListEventType_1VxkA",
        ListEventEventSection:
          "upcomingeventscalendar_ListEventEventSection_2L_1o",
      };
    },
    32765: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => x });
      var a = n(47427),
        o = n(37563),
        r = n(15798),
        i = n(31846),
        l = n(53040),
        s = n(25406);
      function c(e) {
        const { title: t, description: n, children: o } = e;
        return a.createElement(
          "div",
          { className: s.Section },
          a.createElement("div", { className: s.Title }, t),
          n && a.createElement("div", { className: s.Body }, n),
          o,
        );
      }
      function m() {
        return a.createElement(
          c,
          {
            title: (0, i.Xx)("#DailyDeals_PartnerDashboard_Title"),
            description: (0, i.Xx)("#DailyDeals_PartnerDashboard_Invite_Body"),
          },
          a.createElement(
            l.zx,
            {
              className: r.ButtonDailyDealDashboard,
              onClick: () => {
                window.location.assign(
                  `${o.De.PARTNER_BASE_URL}promotion/dailydeals/dashboard`,
                );
              },
            },
            (0, i.Xx)("#DailyDeals_Dashboard"),
          ),
        );
      }
      var d = n(42038),
        v = n(46984),
        u = n(13129);
      function p(e) {
        const {
            promotionPlans: t,
            hiddenPromotionPlanIDs: n,
            promotionPlanStartTime: o,
            testData: r,
          } = e,
          [l, s] = a.useState(0),
          m = h(l),
          v = h(l + 1),
          u = a.useMemo(() => {
            const e = new Date();
            e.setHours(0, 0, 0, 0);
            const t = (t) => {
                const n = new Date();
                return n.setDate(e.getDate() + t), n;
              },
              n = [
                { title: "Team Fortress 2", date: t(-1), eventType: "release" },
                { title: "Dota 2", date: t(0), eventType: "event" },
                {
                  title: "Weekend Deal - Portal 2",
                  description: "Assets due for",
                  date: t(0),
                  eventType: "deadline",
                },
                {
                  title: "Half Life 2 - Episode One",
                  date: t(0),
                  eventType: "release",
                },
                {
                  title: "Capitalism and Economy Fest",
                  date: t(1),
                  eventType: "deadline",
                },
                { title: "Dota Underlords", date: t(9), eventType: "release" },
                { title: "Counter Strike 2", date: t(36), eventType: "event" },
                {
                  title: "Steam Next Fest June Edition",
                  date: t(36),
                  eventType: "event",
                },
                {
                  title: "The Lab",
                  description: "Build review due",
                  date: t(36),
                  eventType: "event",
                },
              ];
            let a = 40;
            for (let e = 0; e < 50; e++) {
              a += 3 * Math.random();
              const o = {
                title: "Generated event" + e,
                date: t(a),
                eventType: void 0,
              };
              switch (Math.floor(3 * Math.random())) {
                case 0:
                  o.eventType = "deadline";
                  break;
                case 1:
                  o.eventType = "release";
                  break;
                case 2:
                  o.eventType = "event";
              }
              n.push(o);
            }
            return n;
          }, []),
          p = t
            .filter((e) => !!e)
            .map((e) =>
              (function (e, t) {
                if (!t.start_date) return null;
                const n = new Date(1e3 * t.start_date),
                  a = "event";
                return {
                  title: t.name,
                  date: n,
                  eventType: a,
                  valveOnly: e.has(t.id),
                };
              })(n, e),
            )
            .concat(r ? u : []),
          D = a.useMemo(() => new Map(), []),
          E = a.useRef();
        return a.createElement(
          c,
          { title: (0, i.Xx)("#Dashboard_UpcomingEvents_Title") },
          a.createElement(
            "div",
            { className: d.SectionContainer },
            a.createElement(
              "div",
              { className: d.CalendarContainer },
              a.createElement(_, {
                viewDate: m,
                fnSetMonthDelta: s,
                earliestDate: o,
              }),
              a.createElement(y, null),
              a.createElement(g, {
                viewDate: m,
                events: p,
                bShowPreceedingWeeks: !0,
                dayRefsToScrollTo: D,
                refScrollContainer: E,
              }),
              a.createElement(_, { viewDate: v }),
              a.createElement(y, null),
              a.createElement(g, {
                viewDate: v,
                events: p,
                bShowFollowingWeeks: !0,
                dayRefsToScrollTo: D,
                refScrollContainer: E,
              }),
            ),
            a.createElement(
              "div",
              { className: d.ListContainer },
              a.createElement(
                f,
                null,
                a.createElement(P, {
                  events: p,
                  dayRefsToScrollTo: D,
                  refScrollContainer: E,
                }),
              ),
            ),
          ),
        );
      }
      function _(e) {
        const { viewDate: t, fnSetMonthDelta: n, earliestDate: o } = e,
          r = n ? () => n(() => 0) : null,
          l = new Date(t.getTime() - 14 * v._H.PerDay * 1e3),
          s = n && l > o ? () => n((e) => e - 1) : null,
          c = n ? () => n((e) => e + 1) : null,
          m = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "short",
          }).format(t);
        return a.createElement(
          "div",
          { className: d.MonthPickerContainer },
          a.createElement(
            "div",
            {
              className: (0, u.Z)(d.MonthPickerToday, !r && d.Inactive),
              onClick: r,
            },
            (0, i.Xx)("#Dashboard_UpcomingEvents_JumpToToday"),
          ),
          a.createElement(
            "div",
            {
              className: (0, u.Z)(d.MonthPickerArrow, !s && d.Inactive),
              onClick: s,
            },
            "<",
          ),
          a.createElement("div", { className: d.MonthPickerDate }, m),
          a.createElement(
            "div",
            {
              className: (0, u.Z)(d.MonthPickerArrow, !c && d.Inactive),
              onClick: c,
            },
            ">",
          ),
        );
      }
      function g(e) {
        var t, n, o;
        const {
            viewDate: r,
            events: i,
            bShowPreceedingWeeks: l,
            bShowFollowingWeeks: s,
            dayRefsToScrollTo: c,
            refScrollContainer: m,
          } = e,
          v = S(i, D),
          p = T(r, -r.getDay()),
          _ = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate();
        let g = 6;
        g =
          (_ +
            r.getDay() +
            ((r.getDay() + _) % 7 != 0 ? 7 - ((r.getDay() + _) % 7) : 0)) /
          7;
        const y = [];
        for (let e = 0; e < g; e++) {
          const i = [],
            _ = T(p, 7 * e);
          for (let e = 0; e < 7; e++) {
            const p = T(_, e),
              g = D(p),
              y = r.getMonth() === p.getMonth(),
              E = y || (l && p <= r) || (s && p >= r),
              h =
                null === (t = v.get(g.getTime())) || void 0 === t
                  ? void 0
                  : t.some((e) => "deadline" == e.eventType),
              f =
                null === (n = v.get(g.getTime())) || void 0 === n
                  ? void 0
                  : n.some((e) => "release" == e.eventType),
              P =
                null === (o = v.get(g.getTime())) || void 0 === o
                  ? void 0
                  : o.some((e) => "event" == e.eventType),
              k = (0, u.Z)(
                d.Day,
                !y && d.OtherMonth,
                !E && d.Inactive,
                h && d.Deadline,
                f && d.Release,
                P && d.Event,
              ),
              w = () => {
                const e = null == c ? void 0 : c.get(D(p).getTime()),
                  t = L(m.current, e);
                m.current.scrollTop = t;
              };
            i.push(
              a.createElement(
                "div",
                { key: e, className: k, onClick: w },
                p.getDate(),
              ),
            );
          }
          y.push(a.createElement("div", { key: e, className: d.Week }, i));
        }
        return a.createElement(a.Fragment, null, y);
      }
      function y(e) {
        const t = new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
          }),
          n = [...Array(7).keys()].map((e) =>
            t.format(new Date(2024, 0, e + 7)),
          );
        return a.createElement(
          "div",
          { className: d.Week },
          n.map((e) =>
            a.createElement("div", { key: e, className: d.DayName }, e),
          ),
        );
      }
      function D(e) {
        const t = new Date(e.getTime());
        return t.setHours(0, 0, 0, 0), t;
      }
      function E(e) {
        const t = new Date(e.getTime());
        return t.setDate(1), t.setHours(0, 0, 0, 0), t;
      }
      function T(e, t) {
        return new Date(e.getTime() + t * v._H.PerDay * 1e3);
      }
      function h(e) {
        return a.useMemo(() => {
          const t = new Date();
          return t.setDate(1), t.setMonth(t.getMonth() + e), t;
        }, [e]);
      }
      function f(e) {
        const { children: t } = e;
        return a.createElement("div", null, t);
      }
      function P(e) {
        const { events: t, dayRefsToScrollTo: n, refScrollContainer: o } = e,
          r = Array.from(S(t, E)).sort(N);
        return a.createElement(
          "div",
          { className: d.List, ref: o },
          r.map(([e, t]) =>
            a.createElement(k, {
              key: e,
              date: new Date(e),
              events: t,
              dayRefsToScrollTo: n,
            }),
          ),
        );
      }
      function k(e) {
        const { date: t, events: n, dayRefsToScrollTo: o } = e,
          r = Array.from(S(n, D)).sort(N),
          i = a.useRef();
        return a.createElement(
          "div",
          { className: d.ListMonth },
          a.createElement(
            "div",
            { className: d.ListMonthTitle, ref: i },
            ((e) =>
              new Date().getFullYear() == e.getFullYear()
                ? new Intl.DateTimeFormat(navigator.language, {
                    month: "long",
                  }).format(e)
                : new Intl.DateTimeFormat(navigator.language, {
                    year: "numeric",
                    month: "long",
                  }).format(e))(new Date(t)),
          ),
          r.map(([e, t]) =>
            a.createElement(w, {
              key: e,
              date: new Date(e),
              events: t,
              refScrollTo: (t) => o.set(e, { element: t, header: i.current }),
            }),
          ),
        );
      }
      function w(e) {
        const { date: t, events: n, refScrollTo: o } = e,
          r = n.sort(C);
        return a.createElement(
          "div",
          { ref: o, className: d.ListDay },
          r.map((e) => a.createElement(M, { key: b(e), date: t, event: e })),
        );
      }
      function M(e) {
        const { date: t, event: n } = e,
          o = "deadline" == n.eventType,
          r = "release" == n.eventType,
          l = "event" == n.eventType,
          s = (0, u.Z)(
            d.ListDayNumber,
            o && d.Deadline,
            r && d.Release,
            l && d.Event,
          ),
          c = (0, u.Z)(
            d.ListEventType,
            o && d.Deadline,
            r && d.Release,
            l && d.Event,
          );
        return a.createElement(
          "div",
          { className: d.ListEvent, key: n.title },
          a.createElement(
            "div",
            { className: d.ListEventHeader },
            a.createElement("div", { className: s }, t.getDate()),
            a.createElement(
              "div",
              { className: c },
              (function (e) {
                switch (e.eventType) {
                  case "deadline":
                    return (0, i.Xx)(
                      "#Dashboard_UpcomingEvents_EventType_Deadline",
                    );
                  case "release":
                    return (0, i.Xx)(
                      "#Dashboard_UpcomingEvents_EventType_Release",
                    );
                  case "event":
                    if (e.promotionPlan)
                      switch (e.promotionPlan.type) {
                        case "midweek":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_midweek",
                          );
                        case "weekenddeal":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_weekenddeal",
                          );
                        case "saleevent":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_saleevent",
                          );
                        case "themesale":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_themesale",
                          );
                        case "nextfest":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_nextfest",
                          );
                        case "seasonalsale":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_seasonalsale",
                          );
                        case "informational":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_informational",
                          );
                        case "dailydeal":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_dailydeal",
                          );
                        case "vacation":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_vacation",
                          );
                        case "important":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_important",
                          );
                        case "preload":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_preload",
                          );
                        case "assetrequest":
                          return (0, i.Xx)(
                            "#Dashboard_UpcomingEvents_EventType_PromotionPlan_assetrequest",
                          );
                      }
                    return (0, i.Xx)(
                      "#Dashboard_UpcomingEvents_EventType_Event_Unknown",
                    );
                }
              })(n),
              n.valveOnly &&
                a.createElement("span", { className: d.ValveOnly }, " (VO)"),
            ),
          ),
          a.createElement(
            "div",
            { className: d.ListEventEventSection },
            n.title,
          ),
        );
      }
      function b(e) {
        return e.promotionPlan ? "promotionplan" + e.promotionPlan.id : e.title;
      }
      function S(e, t) {
        return e.reduce((e, n) => {
          const a = t(n.date),
            o = e.get(a.getTime()) || [];
          return e.set(a.getTime(), [...o, n]), e;
        }, new Map());
      }
      function N(e, t) {
        return e[0] - t[0];
      }
      function C(e, t) {
        return e.date.getTime() < t.date.getTime()
          ? -1
          : e.date.getTime() > t.date.getTime()
          ? 1
          : e.eventType < t.eventType
          ? -1
          : e.eventType > t.eventType
          ? 1
          : e.title < t.title
          ? -1
          : e.title > t.title
          ? 1
          : (null == e ? void 0 : e.promotionPlan.id) <
            (null == t ? void 0 : t.promotionPlan.id)
          ? -1
          : (null == e ? void 0 : e.promotionPlan.id) >
            (null == t ? void 0 : t.promotionPlan.id)
          ? 1
          : 0;
      }
      function L(e, t) {
        const { element: n, header: a } = t;
        return (
          n.getBoundingClientRect().top -
          a.getBoundingClientRect().height -
          e.getBoundingClientRect().top +
          e.scrollTop
        );
      }
      function x(e) {
        const t = (0, o.kQ)("rgDailyDealInvitations", "application_config"),
          n = (0, o.kQ)("rgPartnerPromotions", "application_config"),
          r = (0, o.kQ)("bTestData", "application_config"),
          i = a.useMemo(
            () =>
              null == n
                ? void 0
                : n.rgPlans
                    .map((e) =>
                      (function (e) {
                        if (!e || 0 == e.trim().length) return null;
                        try {
                          return JSON.parse(e);
                        } catch (e) {
                          return null;
                        }
                      })(e.partner_readonly_jsondata),
                    )
                    .filter((e) => !!e),
            [null == n ? void 0 : n.rgPlans],
          ),
          l = a.useMemo(() => {
            var e;
            return new Set(
              null !== (e = null == n ? void 0 : n.rgHiddenPlanIDs) &&
              void 0 !== e
                ? e
                : [],
            );
          }, [null == n ? void 0 : n.rgHiddenPlanIDs]);
        return a.createElement(
          a.Fragment,
          null,
          (null == t ? void 0 : t.length) > 0 && a.createElement(m, null),
          i &&
            i.length > 0 &&
            a.createElement(p, {
              promotionPlans: i,
              hiddenPromotionPlanIDs: l,
              promotionPlanStartTime: (null == n ? void 0 : n.startTime)
                ? new Date(1e3 * n.startTime)
                : void 0,
              testData: r,
            }),
        );
      }
    },
  },
]);
