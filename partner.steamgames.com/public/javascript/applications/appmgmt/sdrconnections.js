/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4935],
  {
    79308: (e) => {
      e.exports = {
        SDRConnectionsAppCtn: "_3Vqm_VeN4ssp-Plt0sq9f-",
        SDRConnectionsAppTitle: "_1VJcGIkGXCYh0gu5XTfN8F",
        SearchParamsCtr: "_1iOSDTa4VQiMZClYcvyBqJ",
        ConnectionKindGroup: "_2nfRCSDfwq2_xoi3dB77TJ",
        AppFieldPair: "JhdeVCLD5Nn-qer67zICK",
        SubmitButtonCtn: "_1m5EkOjBrsq1TFE-Qr82zi",
        ErrorMsg: "_15kPlJ6rH5w4pXTrO43FBC",
        SearchResultsCtr: "xl0L8ayTr8Vlmddp5nsh_",
        SearchResultsTitle: "_2zXcRle-2BH9RfK4FpK91K",
        ConnectionCtr: "_33Z20EyKgVCf_gw2o-dJuM",
        ConnectionHeader: "_2Ckxnlhp2zC2AmsUxs9hA4",
        CxnSummary: "ZLIDfPw1nsKeKLQOzyQE2",
        GenericLabeledItem: "_3owUM5gBDF_RV2qXJQkvk1",
        CxnPeersCtr: "_2TCo_v6vmEUfdrfY3CtWUY",
        ConnectionClientInfo: "_29nFZnfU1pSV_mKnl52iO0",
        host_id: "_2gxSU_PX9i6fvFKON5GOU3",
        GameServerDataCenter: "gwTmZ9cblfSJQBeTcVIru",
        HostIsGameserver: "_15b6hVfpkp4nmpIuuvLB0-",
        HostIDInfo: "vm4PN6HoaCpN0n0Lf8aEI",
        CxnGenericData: "ftpouOEdAxieFE50x58Ch",
        ExpandDetailsCheckbox: "Pf2peEv8e7v8NNd8Ox_O9",
        SessionsGroupHeader: "_2PkRiRECyXwIWMFEHjLMZN",
        QualityFlowPairCtr: "_2mXRDHNOp7hGPyN9lhRXBL",
        QualityFlowPairTitle: "_2_XypEUOV9pIm-K7QPo37N",
        FlowQualityStats: "_2CrTqNU0Ug9ThuaEAR2o-0",
        RelaySessionCtr: "_3Ny56nIakjtPWa2rTo_ECO",
        CxnCloseInfo: "_19mRGkz4pJX0woMGbfouEw",
        AppFieldsCtr: "_2T7Ca6X3HgAneoHL9JkiEs",
        AppFieldsTitle: "_3R8n1GZ3T0u2DTjcj7_1N6",
        FlowSectionTitle: "a0Wxor6TYEbMVH7dLhXwO",
        FlowQualityTitle: "_12x87YD7BQ6cDje5hLvbPv",
        NumPkts: "_3gym37cGwcIsZIB8agk3XK",
        KB: "_3i190Q1NF3QOOxp6WbDzRs",
        Pct: "_1fRCeZ2Vze8SX02_f_AK9d",
        FlowPacketCounts: "_2EYOyHKrd9qJ5LIRS6u6T3",
        Spacer: "_29tRzyxxRK94Vgoj1UYbw",
        CxnGenericDataLabel: "_1NnpcKcQDkW2SVMohIW_9R",
        Histogram: "_3SrHBXySCqPbEk7w5T6loT",
        Bar: "_32eimNgIwt059yIMsrVWMf",
        Distribution: "_3guObDjcedjI4d8GUIsFPK",
        NTile: "vT8kyilnaIPZYPGPJCiO8",
        PingBreakdown: "_2jSWoWwbKYvirg5AnaXkGy",
        PingSection: "RIiaSPbcGDEbBV9OkUtmG",
        JitterSection: "_5OEqow5h9FrG38R53xBoS",
        QualityBreakdown: "_1RMOO_UtP0Xm5MO4xO8UHP",
        ClientIPInfo: "_1IW5oJMNg9Ki_RFXk2SgqJ",
      };
    },
    16649: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => l });
      var n = a(80751),
        r = a.n(n),
        s = a(79545);
      function l(e) {
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
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof s.gA)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
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
    21452: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => P });
      var n = a(85556),
        r = a(80751),
        s = a.n(r),
        l = a(47427),
        c = a(13129),
        o = a(8285),
        i = a(53040),
        m = a(10162),
        d = a(16649),
        u = a(37563),
        p = a(79308),
        E = a(46882),
        _ = a(12251);
      function f(e) {
        return l.createElement(
          "span",
          { className: (0, c.Z)(p.GenericLabeledItem, e.className) },
          l.createElement(
            "span",
            { className: p.CxnGenericDataLabel },
            e.label,
          ),
          l.createElement("span", { className: p.CxnGenericData }, e.children),
        );
      }
      function g(e) {
        const t = e.host,
          a = t.type + ":" + t.id;
        let n = "peer" == e.host_role ? "Peer" : "Client",
          r = null;
        if (t.data_center)
          (n = "Gameserver"),
            (r = l.createElement(
              l.Fragment,
              null,
              l.createElement("span", { className: p.host_id }, a),
              " in ",
              l.createElement(
                "span",
                { className: p.GameServerDataCenter },
                t.data_center,
              ),
            ));
        else if (t.steam_persona) {
          const e = u.De.COMMUNITY_BASE_URL + "/profiles/" + t.id;
          r = l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "span",
              { className: p.host_id },
              l.createElement("a", { href: e }, t.steam_persona),
            ),
            " (",
            l.createElement("span", { className: p.host_id }, a),
            ")",
          );
        } else
          r = l.createElement(
            l.Fragment,
            null,
            l.createElement("span", { className: p.host_id }, a),
          );
        return l.createElement(
          "div",
          {
            className: (0, c.Z)(
              p.ConnectionClientInfo,
              t.data_center && p.HostIsGameserver,
            ),
          },
          l.createElement(
            "div",
            { className: p.HostIDAndConnectionCtr },
            l.createElement(f, { className: p.HostIDInfo, label: n }, r),
            null != t.connection_id &&
              l.createElement(
                f,
                { className: p.HostConnectionID, label: "ConnectionID" },
                t.connection_id,
              ),
          ),
          l.createElement(
            "div",
            { className: p.ClientIPInfo },
            t.addr &&
              l.createElement(f, { className: "addr", label: "IP" }, t.addr),
            t.city_name &&
              l.createElement(
                f,
                { className: "city_name", label: "City" },
                t.city_name,
              ),
            t.country_code &&
              l.createElement(
                f,
                { className: "country_code", label: "Country" },
                t.country_code,
              ),
            t.as && l.createElement(f, { className: "as", label: "AS" }, t.as),
          ),
        );
      }
      function v(e, t) {
        return (
          null == t && (t = 0),
          e.toLocaleString(void 0, {
            minimumFractionDigits: t,
            maximumFractionDigits: t,
          })
        );
      }
      function C(e) {
        let t = 1e30,
          a = -1e30;
        if (e && e.ping_pctile)
          for (const n in e.ping_pctile) {
            const r = parseFloat(n);
            if (r >= 5 && r <= 95) {
              const r = e.ping_pctile[n];
              r < t && (t = r), r > a && (a = r);
            }
          }
        return [t, a];
      }
      function h(e) {
        let t = 1e30;
        if (e && e.quality_pctile)
          for (const a in e.quality_pctile) {
            const n = parseFloat(a);
            if (n >= 5 && n <= 95) {
              const n = e.quality_pctile[a];
              n < t && (t = n);
            }
          }
        return t;
      }
      function N(e, t, a) {
        const n = a > 0 ? t / a : 0,
          r = (100 * n).toFixed(1) + "%";
        return l.createElement(
          "tr",
          { key: e },
          l.createElement("th", { className: p.Label }, e),
          l.createElement("td", { className: p.Pct }, r),
          l.createElement(
            "td",
            null,
            l.createElement("span", {
              className: p.Bar,
              style: { width: 90 * n + 1 + "px" },
            }),
            l.createElement("span", { className: p.Num }, v(t)),
          ),
        );
      }
      function y(e, t) {
        if (!(t > 0)) return null;
        let a = [];
        for (let n = 0; n < e.length; ++n) a.push(N(e[n][0], e[n][1], t));
        return l.createElement(
          "table",
          { className: p.Histogram },
          l.createElement("tbody", null, a),
        );
      }
      function S(e) {
        let t = [];
        for (let a = 0; a < e.length; ++a) {
          const [n, r] = e[a];
          null != r &&
            t.push(
              l.createElement(
                "tr",
                { key: n },
                l.createElement("th", { className: p.NTile }, n, "% <="),
                l.createElement("td", { className: p.Value }, r),
              ),
            );
        }
        return t.length
          ? l.createElement(
              "table",
              { className: p.Distribution },
              l.createElement("tbody", null, t),
            )
          : null;
      }
      function b(e) {
        return e >= 0 ? e.toFixed(0) + "ms" : "???";
      }
      function k(e) {
        const t = e.flow;
        return l.createElement(
          "div",
          { className: p.FlowQualityStats },
          l.createElement("div", { className: p.FlowQualityTitle }, e.title),
          t
            ? l.createElement(
                l.Fragment,
                null,
                (function (e) {
                  const t = function (e) {
                      const t = e >= 0 ? v(e) : "?";
                      return l.createElement(
                        "td",
                        { className: p.NumPkts },
                        t + " pkts",
                      );
                    },
                    a = function (e) {
                      const t = e >= 0 ? v(e) : "?";
                      return l.createElement(
                        "td",
                        { className: p.KB },
                        t + "kb",
                      );
                    },
                    n = function (e, t) {
                      let a = "";
                      return (
                        t > 0 &&
                          e >= 0 &&
                          (a = ((e / t) * 100).toFixed(3) + "%"),
                        l.createElement("td", { className: p.Pct }, a)
                      );
                    };
                  return l.createElement(
                    "div",
                    {
                      className: (0, c.Z)(
                        p.FlowPacketCounts,
                        p.FlowStatsSection,
                      ),
                    },
                    l.createElement(
                      "div",
                      { className: p.FlowSectionTitle },
                      "Summary counters",
                    ),
                    l.createElement(
                      "table",
                      null,
                      l.createElement(
                        "tbody",
                        null,
                        l.createElement(
                          "tr",
                          null,
                          l.createElement("th", null, "Sent"),
                          t(e.sent_pkt),
                          a(e.sent_kb),
                          l.createElement("td", { className: p.Spacer }),
                          l.createElement("th", null, "Dropped"),
                          t(e.drop),
                          n(e.drop, e.recv_seq),
                        ),
                        l.createElement(
                          "tr",
                          null,
                          l.createElement("th", null, "Recv"),
                          t(e.recv_pkt),
                          a(e.recv_kb),
                          l.createElement("td", { className: p.Spacer }),
                          l.createElement("th", null, "Duplicate"),
                          t(e.dup),
                          n(e.dup, e.recv_seq),
                        ),
                        l.createElement(
                          "tr",
                          null,
                          l.createElement("th", null, "Recv w/ seq"),
                          t(e.recv_seq),
                          l.createElement("td", null),
                          l.createElement("td", { className: p.Spacer }),
                          l.createElement("th", null, "Out of order"),
                          t(e.ooo),
                          n(e.ooo, e.recv_seq),
                        ),
                        l.createElement(
                          "tr",
                          null,
                          l.createElement("th", null, "Summary"),
                          l.createElement(
                            "td",
                            { colSpan: 2, className: p.FlowQualityClass },
                            l.createElement(
                              "span",
                              {
                                className:
                                  "flowqualityclass_" + e.quality_class,
                              },
                              e.quality_class,
                            ),
                          ),
                          l.createElement("td", { className: p.Spacer }),
                          l.createElement("th", null, "Seq num lurch"),
                          t(e.seqlurch),
                          n(e.seqlurch, e.recv_seq),
                        ),
                      ),
                    ),
                  );
                })(t),
                (function (e) {
                  let t = null,
                    a = null,
                    n = 0;
                  const r = e.quality_hist;
                  if (r) {
                    const e = [
                      ["Perfect", r[100] || 0],
                      [">99%", r[99] || 0],
                      ["97-99%", r[97] || 0],
                      ["95-97%", r[95] || 0],
                      ["90-95%", r[90] || 0],
                      ["75-90%", r[75] || 0],
                      ["50-75%", r[50] || 0],
                      ["<50%", r[1] || 0],
                      ["Dead", r[0] || 0],
                    ];
                    for (let t = 0; t < e.length; ++t) n += e[t][1];
                    t = y(e, n);
                  }
                  if (n <= 0) return null;
                  const s = e.quality_pctile;
                  if (s) {
                    const e = (e) => (null == e ? void 0 : e + "%");
                    a = S([
                      [50, e(s[50])],
                      [25, e(s[25])],
                      [5, e(s[5])],
                      [2, e(s[2])],
                    ]);
                  }
                  const c = v(n) + " measurement intervals";
                  return l.createElement(
                    "div",
                    { className: p.QualityBreakdown },
                    l.createElement(
                      "div",
                      { className: p.FlowSectionTitle },
                      "Quality interval breakdown",
                    ),
                    l.createElement("div", { className: p.numSamples }, c),
                    t,
                    a,
                  );
                })(t),
                (function (e) {
                  let t = null;
                  const a = e.ping_hist;
                  let n = 0;
                  if (a) {
                    const e = [
                      [0, a[25] || 0],
                      [25, a[50] || 0],
                      [50, a[75] || 0],
                      [75, a[100] || 0],
                      [100, a[125] || 0],
                      [125, a[150] || 0],
                      [150, a[200] || 0],
                      [200, a[300] || 0],
                      [300, a.max || 0],
                    ];
                    let r,
                      s = 0;
                    for (let t = 0; t < e.length; ++t)
                      e[t][1] > 0 &&
                        (null == r && (r = t), (s = t + 1), (n += e[t][1]));
                    if (n > 0) {
                      (r = Math.max(0, r - 2)), (s = Math.min(e.length, s + 2));
                      let a = [];
                      for (let t = r; t < s; ++t) {
                        let l,
                          [c, o] = e[t];
                        t == r && 0 == o && (c = 0),
                          (l =
                            t + 1 >= e.length || (t + 1 >= s && 0 == o)
                              ? b(c) + "+"
                              : c + "-" + b(e[t + 1][0])),
                          a.push(N(l, o, n));
                      }
                      t = l.createElement(
                        "table",
                        { className: p.Histogram },
                        l.createElement("tbody", null, a),
                      );
                    }
                  }
                  let r = null;
                  const s = e.ping_pctile;
                  if (s) {
                    const e = (e) => (null == e ? void 0 : b(e));
                    r = S([
                      [5, e(s[5])],
                      [50, e(s[50])],
                      [75, e(s[75])],
                      [95, e(s[95])],
                      [98, e(s[98])],
                    ]);
                  }
                  let c = null,
                    o = 0;
                  const i = e.jitter_hist;
                  if (i) {
                    const e = [
                      ["<1ms", i[0] || 0],
                      ["1-2ms", i[1] || 0],
                      ["2-5ms", i[2] || 0],
                      ["5-10ms", i[5] || 0],
                      ["10-20ms", i[10] || 0],
                      ["20ms+", i[20] || 0],
                    ];
                    for (let t = 0; t < e.length; ++t) o += e[t][1];
                    c = y(e, o);
                  }
                  if (!t && !r && !c) return null;
                  const m = v(n) + " samples",
                    d = v(o) + " samples";
                  return l.createElement(
                    "div",
                    { className: p.PingBreakdown },
                    l.createElement(
                      "div",
                      { className: p.PingSection },
                      l.createElement(
                        "div",
                        { className: p.FlowSectionTitle },
                        "Round Trip Latency",
                      ),
                      l.createElement("div", { className: p.NumSamples }, m),
                      t,
                      r,
                    ),
                    l.createElement(
                      "div",
                      { className: p.JitterSection },
                      l.createElement(
                        "div",
                        { className: p.FlowSectionTitle },
                        "Jitter",
                      ),
                      l.createElement("div", { className: p.NumSamples }, d),
                      c,
                    ),
                  );
                })(t),
              )
            : l.createElement(
                "div",
                { className: p.NoFlowDataAvailable },
                "(No data available)",
              ),
        );
      }
      function w(e) {
        const t = e.sess,
          a = e.cxn;
        let n = null,
          r = null;
        if (t.client_front || t.router_front) {
          const e =
            "ded" == a.kind
              ? "Front side statistics reported by client"
              : "Front side statistics reported by player";
          n = l.createElement(
            "div",
            { className: p.QualityFlowPairCtr },
            l.createElement(k, { title: e, flow: t.client_front }),
            l.createElement(k, {
              title: "Front side statistics reported by relay",
              flow: t.router_front,
            }),
          );
        }
        return (
          (t.router_back || t.gameserver_back) &&
            (r = l.createElement(
              "div",
              { className: p.QualityFlowPairCtr },
              l.createElement(k, {
                title: "Back side statistics reported by relay",
                flow: t.router_back,
              }),
              l.createElement(k, {
                title: "Back side statistics reported by gameserver",
                flow: t.gameserver_back,
              }),
            )),
          l.createElement(
            "div",
            { className: p.RelaySessionCtr },
            l.createElement(
              "div",
              { className: p.RelayInfoCtr },
              l.createElement(
                f,
                { label: "Relay address" },
                t.client.relay_addr,
              ),
              l.createElement(
                f,
                { label: "Relay POP" },
                t.client.relay_cluster,
              ),
              l.createElement(f, { label: "Active" }, (0, _.jA)(t.active_time)),
            ),
            n,
            r,
          )
        );
      }
      function F(e) {
        const t = e.cxn,
          a = t.client,
          n = t.peer,
          r = t.client_e2e,
          s = t.peer_e2e,
          [c, o] = l.useState(!1),
          m = (function (e) {
            if (!e || !e.length) return null;
            let t = e[0];
            for (let a = 1; a < e.length; ++a) {
              const n = e[a];
              (n.primary > t.primary ||
                (n.primary == t.primary && n.active_time > t.active_time)) &&
                (t = n);
            }
            return t;
          })(t.client_sessions);
        let d = null,
          u = null,
          E = null,
          v = null,
          N = null,
          y = null,
          S = null,
          b = [];
        if (m) {
          n &&
            m.client.connection_id == n.connection_id &&
            (!a || (m.client.connection_id, a.connection_id));
          if (m.start_time && m.duration) {
            const e = new Date(1e3 * m.start_time),
              t = new Date(1e3 * (m.start_time + m.duration)),
              a = void 0,
              n = e.toLocaleString(a, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              r = e.toLocaleString(a, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              s = t.toLocaleString(a, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              c = (0, _.jA)(m.duration);
            d = l.createElement(
              "span",
              { className: p.CxnTimeAndDuration },
              l.createElement(f, { label: "Time" }, n, " ", r, "--", s),
              l.createElement(f, { label: "Duration" }, c),
            );
          }
          if (
            (m.close_code &&
              (u = l.createElement(
                f,
                { label: "Closed", className: p.CxnCloseInfo },
                m.close_type,
                " ",
                m.close_msg,
                " (",
                m.close_code,
                ")",
              )),
            m.experience_class)
          ) {
            const e = m.class_reason ? ` (${m.class_reason})` : "";
            E = l.createElement(
              f,
              { label: "Experience" },
              l.createElement(
                "span",
                { className: "experience_" + m.experience_class },
                m.experience_class,
              ),
              e,
            );
          }
        }
        if (t.app) {
          let e = Object.keys(t.app);
          if (e.length > 0) {
            e.sort();
            let a = [];
            for (let n of e) a.push(l.createElement(f, { label: n }, t.app[n]));
            v = l.createElement(
              "div",
              { className: p.AppFieldsCtr },
              l.createElement(
                "span",
                { className: p.AppFieldsTitle },
                "Application fields:",
              ),
              a,
            );
          }
        }
        if (r || s) {
          const [e, a] = C(r),
            [n, o] = C(s),
            i = Math.min(e, n),
            m = Math.max(a, o);
          if (i <= m) {
            const e =
              0.03 * i + 2 < m
                ? `${i}--${m}ms`
                : Math.floor((i + m) / 2 + 0.5) + "ms";
            N = l.createElement(f, { label: "Ping" }, e);
          }
          const d = h(r),
            u = h(s),
            E = Math.min(d, u);
          if (
            (E >= 0 &&
              E <= 100 &&
              (y = l.createElement(
                f,
                { label: "Packet delivery" },
                `${E.toFixed(2)}%`,
              )),
            c)
          ) {
            const e = "End-to-end statistics reported by client",
              a =
                "ded" == t.kind
                  ? "End-to-end statistics reported by gameserver"
                  : "End-to-end statistics reported by peer";
            S = l.createElement(
              "div",
              { className: p.QualityFlowPairCtr },
              l.createElement(k, { title: e, flow: r }),
              l.createElement(k, { title: a, flow: s }),
            );
          }
        }
        if (c) {
          const e = function (e) {
              let t = [...e];
              return (
                t.sort((e, t) => (t.active_time || 0) - (e.active_time || 0)), t
              );
            },
            a = t.client_sessions && t.client_sessions.length > 0,
            n = t.peer_sessions && t.peer_sessions.length > 0;
          if (a) {
            "p2p" == t.kind || n
              ? b.push(
                  l.createElement(
                    "div",
                    { className: p.SessionsGroupHeader },
                    "Client relay sessions",
                  ),
                )
              : b.push(
                  l.createElement(
                    "div",
                    { className: p.SessionsGroupHeader },
                    "Relay sessions",
                  ),
                );
            for (const a of e(t.client_sessions))
              b.push(
                l.createElement(w, { cxn: t, sess: a, host_role: "client" }),
              );
          }
          if (n) {
            b.push(
              l.createElement(
                "div",
                { className: p.SessionsGroupHeader },
                "Peer relay sessions",
              ),
            );
            for (const a of e(t.peer_sessions))
              b.push(
                l.createElement(w, { cxn: t, sess: a, host_role: "peer" }),
              );
          }
        }
        return l.createElement(
          "div",
          { className: p.ConnectionCtr, key: e.key },
          l.createElement(
            "div",
            { className: p.ConnectionHeader },
            l.createElement(
              "div",
              { className: p.CxnSummary },
              d,
              N,
              y,
              E,
              v,
              u,
            ),
            l.createElement(i.ji, {
              className: p.ExpandDetailsCheckbox,
              label: "Details",
              checked: c,
              onChange: o,
            }),
          ),
          l.createElement(
            "div",
            { className: p.CxnPeersCtr },
            l.createElement(g, { host: t.client, host_role: "client" }),
            l.createElement(g, { host: t.peer, host_role: "peer" }),
          ),
          S,
          b,
        );
      }
      function P(e) {
        const t = (0, o.k6)(),
          a = e.appId,
          [r, _] = l.useState(!1),
          [f, g] = l.useState(""),
          [v, C] = l.useState(void 0),
          [h, N] = l.useState(""),
          [y, S] = l.useState(""),
          [b, k] = l.useState(""),
          [w, P] = l.useState(0),
          [x, I] = l.useState(""),
          [D, R] = l.useState("");
        l.useEffect(() => {
          let e = new URLSearchParams(t.location.search);
          const r = e.get("client_id") || "",
            l = e.get("peer_id") || "",
            c = e.get("kind") || "",
            o = e.get("app_name1") || "",
            i = e.get("app_value1") || "";
          if ((N(r), S(l), k(c), I(o), R(i), !e.toString() && 0 == w)) return;
          _(!0), g(""), a > 0 && e.set("appid", "" + a);
          const m =
            u.De.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + e.toString();
          (() => {
            (0, n.mG)(this, void 0, void 0, function* () {
              var e, t, a, n, r;
              try {
                const l = yield s().get(m);
                1 ==
                (null === (e = null == l ? void 0 : l.data) || void 0 === e
                  ? void 0
                  : e.success)
                  ? C(l.data.connections)
                  : (console.error(
                      "sdrsessionsearch: OnPerformSearch error code  " +
                        (null === (t = null == l ? void 0 : l.data) ||
                        void 0 === t
                          ? void 0
                          : t.success) +
                        " msg: " +
                        (null === (a = null == l ? void 0 : l.data) ||
                        void 0 === a
                          ? void 0
                          : a.msg),
                    ),
                    g(
                      (null === (n = null == l ? void 0 : l.data) ||
                      void 0 === n
                        ? void 0
                        : n.success) +
                        " msg: " +
                        (null === (r = null == l ? void 0 : l.data) ||
                        void 0 === r
                          ? void 0
                          : r.msg),
                    ));
              } catch (e) {
                const t = (0, d.l)(e);
                console.error(
                  "sdrsessionsearch: OnPerformSearch " + t.strErrorMsg,
                  t,
                ),
                  g(t.strErrorMsg);
              }
              _(!1);
            });
          })();
        }, [a, t.location, w]);
        let T = null;
        if (void 0 !== v) {
          let e = [];
          for (const t of v) {
            const a =
              (t.client.id || "") + "-" + (t.client.connection_id || "");
            e.push(l.createElement(F, { key: a, cxn: t }));
          }
          T = l.createElement(
            "div",
            { className: p.SearchResultsCtr },
            l.createElement(
              "div",
              { className: p.SearchResultsTitle },
              "Found ",
              v.length,
              " connection(s)",
            ),
            e,
          );
        }
        const M = "ded" == b ? "Gameserver" : "Peer",
          A = !1;
        return l.createElement(
          m.SV,
          null,
          l.createElement(
            "div",
            { className: p.SDRConnectionsAppCtn },
            l.createElement(
              "div",
              { className: p.SDRConnectionsAppTitle },
              l.createElement(l.Fragment, null, "SDR Connections - "),
              e.appId > 0
                ? l.createElement(l.Fragment, null, "App ", e.appId)
                : l.createElement(l.Fragment, null, "All apps"),
              l.createElement(l.Fragment, null, " [BETA feature]"),
            ),
            f && l.createElement("div", { className: p.ErrMsg }, f),
            l.createElement(
              "div",
              { className: p.SearchParamsCtr },
              l.createElement(
                "div",
                {
                  className: (0, c.Z)(
                    "DialogInputLabelGroup",
                    p.ConnectionKindGroup,
                  ),
                },
                l.createElement(
                  "div",
                  { className: "DialogLabel" },
                  "Connection kind",
                ),
                l.createElement(
                  i.SY,
                  { value: b, onChange: (e) => k(e) },
                  l.createElement(i.EU, { value: "" }, "Any"),
                  l.createElement(i.EU, { value: "ded" }, "Dedicated server"),
                  l.createElement(i.EU, { value: "p2p" }, "Peer-to-Peer"),
                ),
              ),
              l.createElement(
                "div",
                { className: p.AppFieldPair },
                l.createElement(i.II, {
                  type: "text",
                  value: h,
                  disabled: A,
                  label: "Client",
                  onChange: (e) => N(e.currentTarget.value),
                }),
                l.createElement(i.II, {
                  type: "text",
                  value: y,
                  disabled: A,
                  label: M,
                  onChange: (e) => S(e.currentTarget.value),
                }),
              ),
              l.createElement(
                "div",
                { className: p.AppFieldPair },
                l.createElement(i.II, {
                  type: "text",
                  value: x,
                  disabled: A,
                  label: "App field name 1",
                  onChange: (e) => I(e.currentTarget.value),
                }),
                l.createElement(i.II, {
                  type: "text",
                  value: D,
                  disabled: A,
                  label: "App field value 1",
                  onChange: (e) => R(e.currentTarget.value),
                }),
              ),
              l.createElement(
                "div",
                { className: p.SubmitButtonCtn },
                l.createElement(
                  i.KM,
                  {
                    onClick: () => {
                      let e = new URLSearchParams();
                      h && e.set("client_id", h),
                        y && e.set("peer_id", y),
                        b && e.set("kind", b),
                        x &&
                          D &&
                          (e.set("app_name1", x), e.set("app_value1", D));
                      let a = Object.assign({}, t.location);
                      (a.search = e.toString()),
                        a != t.location && t.push(a),
                        P(w + 1);
                    },
                    disabled: r,
                  },
                  "Search ",
                ),
              ),
            ),
            r && l.createElement(E.V, null),
            T,
          ),
        );
      }
    },
  },
]);
