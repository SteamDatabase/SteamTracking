/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5027],
  {
    97712: (e) => {
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
    26193: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => F });
      var n = a(41735),
        l = a.n(n),
        s = a(90626),
        r = a(52038),
        c = a(92757),
        i = a(16676),
        o = a(84811),
        m = a(68797),
        u = a(78327),
        d = a(97712),
        p = a(22797),
        E = a(91675);
      function _(e) {
        return s.createElement(
          "span",
          { className: (0, r.A)(d.GenericLabeledItem, e.className) },
          s.createElement(
            "span",
            { className: d.CxnGenericDataLabel },
            e.label,
          ),
          s.createElement("span", { className: d.CxnGenericData }, e.children),
        );
      }
      function f(e) {
        const t = e.host,
          a = t.type + ":" + t.id;
        let n = "peer" == e.host_role ? "Peer" : "Client",
          l = null;
        if (t.data_center)
          (n = "Gameserver"),
            (l = s.createElement(
              s.Fragment,
              null,
              s.createElement("span", { className: d.host_id }, a),
              " in ",
              s.createElement(
                "span",
                { className: d.GameServerDataCenter },
                t.data_center,
              ),
            ));
        else if (t.steam_persona) {
          const e = u.TS.COMMUNITY_BASE_URL + "/profiles/" + t.id;
          l = s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "span",
              { className: d.host_id },
              s.createElement("a", { href: e }, t.steam_persona),
            ),
            " (",
            s.createElement("span", { className: d.host_id }, a),
            ")",
          );
        } else
          l = s.createElement(
            s.Fragment,
            null,
            s.createElement("span", { className: d.host_id }, a),
          );
        return s.createElement(
          "div",
          {
            className: (0, r.A)(
              d.ConnectionClientInfo,
              t.data_center && d.HostIsGameserver,
            ),
          },
          s.createElement(
            "div",
            { className: d.HostIDAndConnectionCtr },
            s.createElement(_, { className: d.HostIDInfo, label: n }, l),
            null != t.connection_id &&
              s.createElement(
                _,
                { className: d.HostConnectionID, label: "ConnectionID" },
                t.connection_id,
              ),
          ),
          s.createElement(
            "div",
            { className: d.ClientIPInfo },
            t.addr &&
              s.createElement(_, { className: "addr", label: "IP" }, t.addr),
            t.city_name &&
              s.createElement(
                _,
                { className: "city_name", label: "City" },
                t.city_name,
              ),
            t.country_code &&
              s.createElement(
                _,
                { className: "country_code", label: "Country" },
                t.country_code,
              ),
            t.as && s.createElement(_, { className: "as", label: "AS" }, t.as),
          ),
        );
      }
      function h(e, t) {
        return (
          null == t && (t = 0),
          e.toLocaleString(void 0, {
            minimumFractionDigits: t,
            maximumFractionDigits: t,
          })
        );
      }
      function N(e) {
        let t = 1e30,
          a = -1e30;
        if (e && e.ping_pctile)
          for (const n in e.ping_pctile) {
            const l = parseFloat(n);
            if (l >= 5 && l <= 95) {
              const l = e.ping_pctile[n];
              l < t && (t = l), l > a && (a = l);
            }
          }
        return [t, a];
      }
      function v(e) {
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
      function g(e, t, a) {
        const n = a > 0 ? t / a : 0,
          l = (100 * n).toFixed(1) + "%";
        return s.createElement(
          "tr",
          { key: e },
          s.createElement("th", { className: d.Label }, e),
          s.createElement("td", { className: d.Pct }, l),
          s.createElement(
            "td",
            null,
            s.createElement("span", {
              className: d.Bar,
              style: { width: 90 * n + 1 + "px" },
            }),
            s.createElement("span", { className: d.Num }, h(t)),
          ),
        );
      }
      function C(e, t) {
        if (!(t > 0)) return null;
        let a = [];
        for (let n = 0; n < e.length; ++n) a.push(g(e[n][0], e[n][1], t));
        return s.createElement(
          "table",
          { className: d.Histogram },
          s.createElement("tbody", null, a),
        );
      }
      function y(e) {
        let t = [];
        for (let a = 0; a < e.length; ++a) {
          const [n, l] = e[a];
          null != l &&
            t.push(
              s.createElement(
                "tr",
                { key: n },
                s.createElement("th", { className: d.NTile }, n, "% <="),
                s.createElement("td", { className: d.Value }, l),
              ),
            );
        }
        return t.length
          ? s.createElement(
              "table",
              { className: d.Distribution },
              s.createElement("tbody", null, t),
            )
          : null;
      }
      function S(e) {
        return e >= 0 ? e.toFixed(0) + "ms" : "???";
      }
      function b(e) {
        const t = e.flow;
        return s.createElement(
          "div",
          { className: d.FlowQualityStats },
          s.createElement("div", { className: d.FlowQualityTitle }, e.title),
          t
            ? s.createElement(
                s.Fragment,
                null,
                (function (e) {
                  const t = function (e) {
                      const t = e >= 0 ? h(e) : "?";
                      return s.createElement(
                        "td",
                        { className: d.NumPkts },
                        t + " pkts",
                      );
                    },
                    a = function (e) {
                      const t = e >= 0 ? h(e) : "?";
                      return s.createElement(
                        "td",
                        { className: d.KB },
                        t + "kb",
                      );
                    },
                    n = function (e, t) {
                      let a = "";
                      return (
                        t > 0 &&
                          e >= 0 &&
                          (a = ((e / t) * 100).toFixed(3) + "%"),
                        s.createElement("td", { className: d.Pct }, a)
                      );
                    };
                  return s.createElement(
                    "div",
                    {
                      className: (0, r.A)(
                        d.FlowPacketCounts,
                        d.FlowStatsSection,
                      ),
                    },
                    s.createElement(
                      "div",
                      { className: d.FlowSectionTitle },
                      "Summary counters",
                    ),
                    s.createElement(
                      "table",
                      null,
                      s.createElement(
                        "tbody",
                        null,
                        s.createElement(
                          "tr",
                          null,
                          s.createElement("th", null, "Sent"),
                          t(e.sent_pkt),
                          a(e.sent_kb),
                          s.createElement("td", { className: d.Spacer }),
                          s.createElement("th", null, "Dropped"),
                          t(e.drop),
                          n(e.drop, e.recv_seq),
                        ),
                        s.createElement(
                          "tr",
                          null,
                          s.createElement("th", null, "Recv"),
                          t(e.recv_pkt),
                          a(e.recv_kb),
                          s.createElement("td", { className: d.Spacer }),
                          s.createElement("th", null, "Duplicate"),
                          t(e.dup),
                          n(e.dup, e.recv_seq),
                        ),
                        s.createElement(
                          "tr",
                          null,
                          s.createElement("th", null, "Recv w/ seq"),
                          t(e.recv_seq),
                          s.createElement("td", null),
                          s.createElement("td", { className: d.Spacer }),
                          s.createElement("th", null, "Out of order"),
                          t(e.ooo),
                          n(e.ooo, e.recv_seq),
                        ),
                        s.createElement(
                          "tr",
                          null,
                          s.createElement("th", null, "Summary"),
                          s.createElement(
                            "td",
                            { colSpan: 2, className: d.FlowQualityClass },
                            s.createElement(
                              "span",
                              {
                                className:
                                  "flowqualityclass_" + e.quality_class,
                              },
                              e.quality_class,
                            ),
                          ),
                          s.createElement("td", { className: d.Spacer }),
                          s.createElement("th", null, "Seq num lurch"),
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
                  const l = e.quality_hist;
                  if (l) {
                    const e = [
                      ["Perfect", l[100] || 0],
                      [">99%", l[99] || 0],
                      ["97-99%", l[97] || 0],
                      ["95-97%", l[95] || 0],
                      ["90-95%", l[90] || 0],
                      ["75-90%", l[75] || 0],
                      ["50-75%", l[50] || 0],
                      ["<50%", l[1] || 0],
                      ["Dead", l[0] || 0],
                    ];
                    for (let t = 0; t < e.length; ++t) n += e[t][1];
                    t = C(e, n);
                  }
                  if (n <= 0) return null;
                  const r = e.quality_pctile;
                  if (r) {
                    const e = (e) => (null == e ? void 0 : e + "%");
                    a = y([
                      [50, e(r[50])],
                      [25, e(r[25])],
                      [5, e(r[5])],
                      [2, e(r[2])],
                    ]);
                  }
                  const c = h(n) + " measurement intervals";
                  return s.createElement(
                    "div",
                    { className: d.QualityBreakdown },
                    s.createElement(
                      "div",
                      { className: d.FlowSectionTitle },
                      "Quality interval breakdown",
                    ),
                    s.createElement("div", { className: d.numSamples }, c),
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
                    let l,
                      r = 0;
                    for (let t = 0; t < e.length; ++t)
                      e[t][1] > 0 &&
                        (null == l && (l = t), (r = t + 1), (n += e[t][1]));
                    if (n > 0) {
                      (l = Math.max(0, l - 2)), (r = Math.min(e.length, r + 2));
                      let a = [];
                      for (let t = l; t < r; ++t) {
                        let s,
                          [c, i] = e[t];
                        t == l && 0 == i && (c = 0),
                          (s =
                            t + 1 >= e.length || (t + 1 >= r && 0 == i)
                              ? S(c) + "+"
                              : c + "-" + S(e[t + 1][0])),
                          a.push(g(s, i, n));
                      }
                      t = s.createElement(
                        "table",
                        { className: d.Histogram },
                        s.createElement("tbody", null, a),
                      );
                    }
                  }
                  let l = null;
                  const r = e.ping_pctile;
                  if (r) {
                    const e = (e) => (null == e ? void 0 : S(e));
                    l = y([
                      [5, e(r[5])],
                      [50, e(r[50])],
                      [75, e(r[75])],
                      [95, e(r[95])],
                      [98, e(r[98])],
                    ]);
                  }
                  let c = null,
                    i = 0;
                  const o = e.jitter_hist;
                  if (o) {
                    const e = [
                      ["<1ms", o[0] || 0],
                      ["1-2ms", o[1] || 0],
                      ["2-5ms", o[2] || 0],
                      ["5-10ms", o[5] || 0],
                      ["10-20ms", o[10] || 0],
                      ["20ms+", o[20] || 0],
                    ];
                    for (let t = 0; t < e.length; ++t) i += e[t][1];
                    c = C(e, i);
                  }
                  if (!t && !l && !c) return null;
                  const m = h(n) + " samples",
                    u = h(i) + " samples";
                  return s.createElement(
                    "div",
                    { className: d.PingBreakdown },
                    s.createElement(
                      "div",
                      { className: d.PingSection },
                      s.createElement(
                        "div",
                        { className: d.FlowSectionTitle },
                        "Round Trip Latency",
                      ),
                      s.createElement("div", { className: d.NumSamples }, m),
                      t,
                      l,
                    ),
                    s.createElement(
                      "div",
                      { className: d.JitterSection },
                      s.createElement(
                        "div",
                        { className: d.FlowSectionTitle },
                        "Jitter",
                      ),
                      s.createElement("div", { className: d.NumSamples }, u),
                      c,
                    ),
                  );
                })(t),
              )
            : s.createElement(
                "div",
                { className: d.NoFlowDataAvailable },
                "(No data available)",
              ),
        );
      }
      function k(e) {
        const t = e.sess,
          a = e.cxn;
        let n = null,
          l = null;
        if (t.client_front || t.router_front) {
          const e =
            "ded" == a.kind
              ? "Front side statistics reported by client"
              : "Front side statistics reported by player";
          n = s.createElement(
            "div",
            { className: d.QualityFlowPairCtr },
            s.createElement(b, { title: e, flow: t.client_front }),
            s.createElement(b, {
              title: "Front side statistics reported by relay",
              flow: t.router_front,
            }),
          );
        }
        return (
          (t.router_back || t.gameserver_back) &&
            (l = s.createElement(
              "div",
              { className: d.QualityFlowPairCtr },
              s.createElement(b, {
                title: "Back side statistics reported by relay",
                flow: t.router_back,
              }),
              s.createElement(b, {
                title: "Back side statistics reported by gameserver",
                flow: t.gameserver_back,
              }),
            )),
          s.createElement(
            "div",
            { className: d.RelaySessionCtr },
            s.createElement(
              "div",
              { className: d.RelayInfoCtr },
              s.createElement(
                _,
                { label: "Relay address" },
                t.client.relay_addr,
              ),
              s.createElement(
                _,
                { label: "Relay POP" },
                t.client.relay_cluster,
              ),
              s.createElement(_, { label: "Active" }, (0, E.R2)(t.active_time)),
            ),
            n,
            l,
          )
        );
      }
      function P(e) {
        const t = e.cxn,
          a = t.client,
          n = t.peer,
          l = t.client_e2e,
          r = t.peer_e2e,
          [c, o] = s.useState(!1),
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
        let u = null,
          p = null,
          h = null,
          g = null,
          C = null,
          y = null,
          S = null,
          P = [];
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
              l = e.toLocaleString(a, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              r = t.toLocaleString(a, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              c = (0, E.R2)(m.duration);
            u = s.createElement(
              "span",
              { className: d.CxnTimeAndDuration },
              s.createElement(_, { label: "Time" }, n, " ", l, "--", r),
              s.createElement(_, { label: "Duration" }, c),
            );
          }
          if (
            (m.close_code &&
              (p = s.createElement(
                _,
                { label: "Closed", className: d.CxnCloseInfo },
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
            h = s.createElement(
              _,
              { label: "Experience" },
              s.createElement(
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
            for (let n of e) a.push(s.createElement(_, { label: n }, t.app[n]));
            g = s.createElement(
              "div",
              { className: d.AppFieldsCtr },
              s.createElement(
                "span",
                { className: d.AppFieldsTitle },
                "Application fields:",
              ),
              a,
            );
          }
        }
        if (l || r) {
          const [e, a] = N(l),
            [n, i] = N(r),
            o = Math.min(e, n),
            m = Math.max(a, i);
          if (o <= m) {
            const e =
              0.03 * o + 2 < m
                ? `${o}--${m}ms`
                : Math.floor((o + m) / 2 + 0.5) + "ms";
            C = s.createElement(_, { label: "Ping" }, e);
          }
          const u = v(l),
            p = v(r),
            E = Math.min(u, p);
          if (
            (E >= 0 &&
              E <= 100 &&
              (y = s.createElement(
                _,
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
            S = s.createElement(
              "div",
              { className: d.QualityFlowPairCtr },
              s.createElement(b, { title: e, flow: l }),
              s.createElement(b, { title: a, flow: r }),
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
              ? P.push(
                  s.createElement(
                    "div",
                    { className: d.SessionsGroupHeader },
                    "Client relay sessions",
                  ),
                )
              : P.push(
                  s.createElement(
                    "div",
                    { className: d.SessionsGroupHeader },
                    "Relay sessions",
                  ),
                );
            for (const a of e(t.client_sessions))
              P.push(
                s.createElement(k, { cxn: t, sess: a, host_role: "client" }),
              );
          }
          if (n) {
            P.push(
              s.createElement(
                "div",
                { className: d.SessionsGroupHeader },
                "Peer relay sessions",
              ),
            );
            for (const a of e(t.peer_sessions))
              P.push(
                s.createElement(k, { cxn: t, sess: a, host_role: "peer" }),
              );
          }
        }
        return s.createElement(
          "div",
          { className: d.ConnectionCtr, key: e.key },
          s.createElement(
            "div",
            { className: d.ConnectionHeader },
            s.createElement(
              "div",
              { className: d.CxnSummary },
              u,
              C,
              y,
              h,
              g,
              p,
            ),
            s.createElement(i.Yh, {
              className: d.ExpandDetailsCheckbox,
              label: "Details",
              checked: c,
              onChange: o,
            }),
          ),
          s.createElement(
            "div",
            { className: d.CxnPeersCtr },
            s.createElement(f, { host: t.client, host_role: "client" }),
            s.createElement(f, { host: t.peer, host_role: "peer" }),
          ),
          S,
          P,
        );
      }
      function F(e) {
        const t = (0, c.W6)(),
          a = e.appId,
          [n, E] = s.useState(!1),
          [_, f] = s.useState(""),
          [h, N] = s.useState(void 0),
          [v, g] = s.useState(""),
          [C, y] = s.useState(""),
          [S, b] = s.useState(""),
          [k, F] = s.useState(0),
          [w, x] = s.useState(""),
          [I, T] = s.useState("");
        s.useEffect(() => {
          let e = new URLSearchParams(t.location.search);
          const n = e.get("client_id") || "",
            s = e.get("peer_id") || "",
            r = e.get("kind") || "",
            c = e.get("app_name1") || "",
            i = e.get("app_value1") || "";
          if ((g(n), y(s), b(r), x(c), T(i), !e.toString() && 0 == k)) return;
          E(!0), f(""), a > 0 && e.set("appid", "" + a);
          const o =
            u.TS.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + e.toString();
          (async () => {
            try {
              const e = await l().get(o);
              1 == e?.data?.success
                ? N(e.data.connections)
                : (console.error(
                    "sdrsessionsearch: OnPerformSearch error code  " +
                      e?.data?.success +
                      " msg: " +
                      e?.data?.msg,
                  ),
                  f(e?.data?.success + " msg: " + e?.data?.msg));
            } catch (e) {
              const t = (0, m.H)(e);
              console.error(
                "sdrsessionsearch: OnPerformSearch " + t.strErrorMsg,
                t,
              ),
                f(t.strErrorMsg);
            }
            E(!1);
          })();
        }, [a, t.location, k]);
        let D = null;
        if (void 0 !== h) {
          let e = [];
          for (const t of h) {
            const a =
              (t.client.id || "") + "-" + (t.client.connection_id || "");
            e.push(s.createElement(P, { key: a, cxn: t }));
          }
          D = s.createElement(
            "div",
            { className: d.SearchResultsCtr },
            s.createElement(
              "div",
              { className: d.SearchResultsTitle },
              "Found ",
              h.length,
              " connection(s)",
            ),
            e,
          );
        }
        const R = "ded" == S ? "Gameserver" : "Peer",
          A = !1,
          G = s.useId();
        return s.createElement(
          o.tH,
          null,
          s.createElement(
            "div",
            { className: d.SDRConnectionsAppCtn },
            s.createElement(
              "div",
              { className: d.SDRConnectionsAppTitle },
              s.createElement(s.Fragment, null, "SDR Connections - "),
              e.appId > 0
                ? s.createElement(s.Fragment, null, "App ", e.appId)
                : s.createElement(s.Fragment, null, "All apps"),
              s.createElement(s.Fragment, null, " [BETA feature]"),
            ),
            _ && s.createElement("div", { className: d.ErrMsg }, _),
            s.createElement(
              "div",
              { className: d.SearchParamsCtr },
              s.createElement(
                "div",
                {
                  className: (0, r.A)(
                    "DialogInputLabelGroup",
                    d.ConnectionKindGroup,
                  ),
                },
                s.createElement(
                  "div",
                  { id: G, className: "DialogLabel" },
                  "Connection kind",
                ),
                s.createElement(
                  i.zW,
                  { labelId: G, value: S, onChange: (e) => b(e) },
                  s.createElement(i.a, { value: "" }, "Any"),
                  s.createElement(i.a, { value: "ded" }, "Dedicated server"),
                  s.createElement(i.a, { value: "p2p" }, "Peer-to-Peer"),
                ),
              ),
              s.createElement(
                "div",
                { className: d.AppFieldPair },
                s.createElement(i.pd, {
                  type: "text",
                  value: v,
                  disabled: A,
                  label: "Client",
                  onChange: (e) => g(e.currentTarget.value),
                }),
                s.createElement(i.pd, {
                  type: "text",
                  value: C,
                  disabled: A,
                  label: R,
                  onChange: (e) => y(e.currentTarget.value),
                }),
              ),
              s.createElement(
                "div",
                { className: d.AppFieldPair },
                s.createElement(i.pd, {
                  type: "text",
                  value: w,
                  disabled: A,
                  label: "App field name 1",
                  onChange: (e) => x(e.currentTarget.value),
                }),
                s.createElement(i.pd, {
                  type: "text",
                  value: I,
                  disabled: A,
                  label: "App field value 1",
                  onChange: (e) => T(e.currentTarget.value),
                }),
              ),
              s.createElement(
                "div",
                { className: d.SubmitButtonCtn },
                s.createElement(
                  i.jn,
                  {
                    onClick: () => {
                      let e = new URLSearchParams();
                      v && e.set("client_id", v),
                        C && e.set("peer_id", C),
                        S && e.set("kind", S),
                        w &&
                          I &&
                          (e.set("app_name1", w), e.set("app_value1", I));
                      let a = { ...t.location };
                      (a.search = e.toString()),
                        a != t.location && t.push(a),
                        F(k + 1);
                    },
                    disabled: n,
                  },
                  "Search ",
                ),
              ),
            ),
            n && s.createElement(p.t, null),
            D,
          ),
        );
      }
    },
  },
]);
