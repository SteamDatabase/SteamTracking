/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [908],
  {
    95906: (e) => {
      e.exports = {
        DateAndTime: "localdateandtime_DateAndTime_1miMh",
        DateAndTimeInline: "localdateandtime_DateAndTimeInline_1jG_-",
        At: "localdateandtime_At_3D4jI",
        ActiveEvent: "localdateandtime_ActiveEvent_2ZcVE",
        ActiveEventCallOut: "localdateandtime_ActiveEventCallOut__y2DQ",
        RightSideTitles: "localdateandtime_RightSideTitles_3sPON",
        DateToolTip: "localdateandtime_DateToolTip_3zhja",
        ShortDateAndTime: "localdateandtime_ShortDateAndTime_4K3Bl",
        ShortDateRange: "localdateandtime_ShortDateRange_3sqcQ",
      };
    },
    2388: (e, t, a) => {
      "use strict";
      a.d(t, { Gr: () => E, Jq: () => v, y$: () => p });
      var s = a(70655),
        r = a(9669),
        n = a.n(r),
        i = a(22188),
        l = a(67294),
        o = (a(26149), a(92398), a(43359)),
        m = a(3389),
        c = (a(82946), a(77520)),
        d = a(93976),
        u = a(90666);
      class g {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            (0,
            c.X)(e.length <= 500, "Check LoadProfiles, requesting too many steam IDs");
            let a = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == a.length) return this.m_mapProfilesLoading.get(e[0]);
            let s = u.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              r = n().get(s, {
                params: { steamids: a.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            a.forEach((e) => this.m_mapProfilesLoading.set(e, r));
            let i = yield r;
            i.data &&
              200 == i.status &&
              i.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, o.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, o.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, o.U)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
          });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            m.K.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            m.K.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(e) {
          return !e.some((e) => !this.BHasProfileBySteamID(e));
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? u.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : u.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, s.gn)([i.LO], g.prototype, "m_mapProfiles", void 0);
      const p = new g();
      function E(e) {
        const t = l.useMemo(
            () => (e ? ("string" == typeof e ? new m.K(e) : e) : null),
            [e]
          ),
          [a, s] = (0, l.useState)(!!t && !p.BHasProfileBySteamID(t));
        (0, l.useEffect)(() => {
          const e = n().CancelToken.source();
          return (
            t &&
              !p.BHasProfileBySteamID(t) &&
              p
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const a = (0, d.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      a.strErrorMsg,
                    a
                  );
                })
                .finally(() => {
                  e.token.reason || s(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [a, !!t && p.GetProfileBySteamID(t)];
      }
      function v(e) {
        return E(l.useMemo(() => m.K.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = p;
    },
    96602: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ai: () => _,
        H6: () => v,
        Kj: () => p,
        Sw: () => T,
        Zg: () => D,
        uv: () => f,
        w$: () => E,
      });
      var s = a(70655),
        r = a(67294),
        n = a(28268),
        i = a(41311),
        l = a(29323),
        o = a(7573),
        m = a(30600),
        c = a(95906),
        d = a.n(c),
        u = a(5525);
      const g = a(80008);
      function p(e) {
        const t = g.tz.guess(),
          a = g.unix(e).tz(t),
          s = (0, i.CE)();
        return s && a.locale(s), a.format("LT");
      }
      function E(e, t) {
        const a = g.tz.guess(),
          s = g.unix(e).tz(a),
          n = (0, i.CE)();
        return (
          n && s.locale(n),
          r.createElement(
            r.Fragment,
            null,
            s.format("LT"),
            t
              ? r.createElement(
                  "span",
                  { "data-tooltip-text": s.format("Z") + ", " + a },
                  " ",
                  s.zoneAbbr()
                )
              : null
          )
        );
      }
      const v = (0, l.Pi)((e) => {
          const {
              dateAndTime: t,
              bSingleLine: a,
              bOnlyTime: s,
              bOnlyDate: n,
            } = e,
            l = !s && Boolean(t),
            o = !n && Boolean(t),
            m = l && (0, i.$1)(t),
            c = e.stylesmodule
              ? Object.assign(Object.assign({}, d()), e.stylesmodule)
              : d();
          return a
            ? r.createElement(
                "span",
                { className: s || n ? c.DateAndTimeInline : c.DateAndTime },
                l && m,
                r.createElement("span", null, " "),
                Boolean(t && o) && E(t, !0)
              )
            : r.createElement(
                "div",
                { className: c.DateAndTime },
                l &&
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("div", { className: c.LocalizedDate }, m),
                    " ",
                    r.createElement("span", { className: c.At }, "@")
                  ),
                r.createElement(
                  "div",
                  { className: c.LocalizedTime },
                  Boolean(t && o) && E(t, !0)
                )
              );
        }),
        D = (e) => {
          var t;
          const a = r.createElement(v, {
            dateAndTime: e.rtFullDate,
            bSingleLine: !0,
            stylesmodule: e.stylesmodule,
          });
          return r.createElement(
            n.HP,
            {
              toolTipContent: a,
              direction: "top",
              className: e.className,
              strTooltipClassname:
                null === (t = e.stylesmodule) || void 0 === t
                  ? void 0
                  : t.DateToolTip,
            },
            e.children
          );
        };
      let _ = class extends r.Component {
        render() {
          const { startDateAndTime: e, endDateAndTime: t } = this.props,
            a = this.props.stylesmodule
              ? Object.assign(Object.assign({}, d()), this.props.stylesmodule)
              : d();
          let s =
            this.props.bHideEndTime ||
            null == this.props.endDateAndTime ||
            this.props.endDateAndTime < 1;
          if (null == e || 0 == e)
            return r.createElement(
              "div",
              { className: a.DateAndTime },
              r.createElement(
                "span",
                { className: a.RightSideTitles },
                (0, i.Xx)("#EventDisplay_TimeRange")
              ),
              (0, i.Xx)("#EventDisplay_TimeDisplayNone")
            );
          let n = u.JW.GetTimeNowWithOverride();
          if (s)
            return r.createElement(
              "div",
              { className: a.StartDate },
              r.createElement(
                "div",
                { className: a.RightSideTitles },
                (0, i.Xx)(
                  e < n
                    ? "#EventDisplay_TimeInPast"
                    : "#EventDisplay_TimeUpcoming"
                ),
                " "
              ),
              r.createElement(v, { stylesmodule: a, dateAndTime: e })
            );
          let l = e <= n && n <= t;
          const c = (0, m.yK)(new Date(1e3 * e), new Date(1e3 * t));
          return r.createElement(
            "div",
            { className: a.MultiDateAndTime },
            r.createElement(
              "div",
              { className: a.StartDate },
              r.createElement(
                "span",
                { className: a.RightSideTitles },
                (0, i.Xx)(
                  e >= n
                    ? "#EventDisplay_TimeBeginsOn"
                    : t >= n
                    ? "#EventDisplay_TimeBeginsOn_Past"
                    : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past"
                )
              ),
              r.createElement(v, {
                stylesmodule: a,
                bSingleLine: !0,
                dateAndTime: e,
              })
            ),
            r.createElement(
              "div",
              { className: a.EndDate },
              r.createElement(
                "span",
                { className: a.RightSideTitles },
                (0, i.Xx)(
                  t < n
                    ? "#EventDisplay_TimeEndsOn_Past"
                    : "#EventDisplay_TimeEndsOn"
                )
              ),
              r.createElement(v, {
                stylesmodule: a,
                bSingleLine: !0,
                bOnlyTime: c,
                dateAndTime: t,
              })
            ),
            l &&
              r.createElement(
                "span",
                { className: a.ActiveEvent },
                r.createElement(
                  "span",
                  {
                    className: (0, o.Z)(
                      a.RightSideTitles,
                      a.ActiveEventCallOut
                    ),
                  },
                  (0, i.Xx)("#Time_Now")
                )
              )
          );
        }
      };
      _ = (0, s.gn)([l.Pi], _);
      let f = class extends r.Component {
        render() {
          const {
              startDateAndTime: e,
              endDateAndTime: t,
              bHideEndTime: a,
            } = this.props,
            s = this.props.stylesmodule
              ? Object.assign(Object.assign({}, d()), this.props.stylesmodule)
              : d();
          if (null == e || 0 == e)
            return r.createElement(
              "div",
              { className: s.DateAndTime },
              r.createElement(
                "span",
                { className: s.RightSideTitles },
                (0, i.Xx)("#EventDisplay_TimeRange")
              ),
              (0, i.Xx)("#EventDisplay_TimeDisplayNone")
            );
          const n = u.JW.GetTimeNowWithOverrideAsDate(),
            l = u.JW.GetTimeNowWithOverride(),
            o = (0, m.U8)(new Date(1e3 * e), n),
            c = r.createElement(
              "div",
              { className: s.ShortDateAndTime },
              (0, i.$1)(e, o)
            );
          let g = r.createElement(
            D,
            { rtFullDate: e, stylesmodule: s },
            r.createElement(
              "div",
              { className: s.RightSideTitles },
              (0, i.Xx)(
                e < l
                  ? "#EventDisplay_TimeInPast"
                  : "#EventDisplay_TimeUpcoming"
              )
            ),
            c
          );
          if (
            (l < e &&
              e < l + m._H.PerWeek &&
              (g = r.createElement(
                D,
                { rtFullDate: e, stylesmodule: s },
                r.createElement(
                  "div",
                  { className: s.RightSideTitles },
                  (0, i.kQ)(
                    "#EventDisplay_EventUpcoming_WithDateAndTime",
                    c,
                    r.createElement(
                      "div",
                      { className: s.ShortDateAndTime },
                      E(e),
                      " "
                    )
                  )
                )
              )),
            a || null == t || t < 1)
          )
            return g;
          const p = e <= l && l <= t;
          p &&
            (g = r.createElement(
              D,
              { rtFullDate: e, className: s.ActiveEvent, stylesmodule: s },
              r.createElement(
                "span",
                { className: s.ActiveEventCallOut },
                (0, i.Xx)("#Time_Now")
              )
            ));
          let v = null;
          const _ = p ? t - l : t - e;
          if (_ <= m._H.PerDay) {
            const e = r.createElement(
              "div",
              { className: s.ShortDateAndTime },
              (0, i.yW)(_, !0)
            );
            v =
              t < l
                ? r.createElement(
                    "div",
                    { className: s.RightSideTitles },
                    (0, i.Xx)("#EventDisplay_TimeEndsOn_Ran"),
                    e
                  )
                : r.createElement(
                    "div",
                    { className: s.RightSideTitles },
                    (0, i.kQ)(
                      p
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      e
                    )
                  );
          } else {
            const e = n.getFullYear() == new Date(1e3 * t).getFullYear();
            v = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "div",
                { className: s.RightSideTitles },
                (0, i.Xx)(
                  t < l
                    ? "#EventDisplay_TimeEndsOn_Past"
                    : "#EventDisplay_TimeEndsOn"
                )
              ),
              r.createElement(
                "div",
                { className: s.ShortDateAndTime },
                (0, i.$1)(t, e)
              )
            );
          }
          const f = r.createElement(D, { rtFullDate: t, stylesmodule: s }, v);
          return r.createElement("div", { className: s.ShortDateRange }, g, f);
        }
      };
      function T(e) {
        const {
          rtStartDate: t,
          rtEndDate: a,
          strMonthFormat: s,
          className: n,
        } = e;
        return r.createElement(
          "div",
          { className: n },
          (function (e, t, a) {
            const s = u.JW.GetTimeNowWithOverrideAsDate(),
              r = new Date(1e3 * e),
              n = new Date(1e3 * t),
              l = s.getFullYear() == r.getFullYear(),
              o = s.getFullYear() == n.getFullYear(),
              m = r.getFullYear() == n.getFullYear(),
              c = m && r.getMonth() == n.getMonth(),
              d = c && r.getDate() == n.getDate(),
              g = {
                day: "numeric",
                month: null != a ? a : "long",
                year: l ? void 0 : "numeric",
              },
              p = r.toLocaleDateString(i.Yt.GetPreferredLocales(), g);
            if (d) return p;
            {
              const e = {
                day: "numeric",
                month: c && o ? void 0 : null != a ? a : "long",
                year: m ? void 0 : "numeric",
              };
              return (
                p + " - " + n.toLocaleDateString(i.Yt.GetPreferredLocales(), e)
              );
            }
          })(t, a, s),
          " "
        );
      }
      f = (0, s.gn)([l.Pi], f);
    },
    93976: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => i });
      a(26149);
      var s = a(9669),
        r = a.n(s),
        n = a(58114);
      function i(e) {
        if (r().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.response.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof n.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    69761: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { QAndARoutes: () => o, default: () => m });
      var s = a(69382),
        r = a(67294),
        n = a(78587),
        i = a(74091),
        l = a(92244);
      const o = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const m = function (e) {
        return r.createElement(
          n.rs,
          null,
          r.createElement(n.AW, {
            path: o.Dashboard(":vanity_str"),
            render: (e) =>
              r.createElement(i.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return r.createElement(s.A, { vanity_str: t });
                  },
                },
              }),
          }),
          r.createElement(n.AW, {
            path: o.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              r.createElement(i.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: a } = e.match.params;
                    return r.createElement(s.EI, { gidSession: a });
                  },
                },
              }),
          }),
          r.createElement(n.AW, { component: l.R })
        );
      };
    },
  },
]);
