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
      a.r(t), a.d(t, { default: () => P });
      var n = a(41735),
        s = a.n(n),
        r = a(90626),
        l = a(52038),
        c = a(37085),
        o = a(92757),
        i = a(16676),
        m = a(84811),
        d = a(68797),
        u = a(78327),
        p = a(97712),
        E = a(22797),
        _ = a(91675);
      function f(e) {
        return r.createElement(
          "span",
          { className: (0, l.A)(p.GenericLabeledItem, e.className) },
          r.createElement(
            "span",
            { className: p.CxnGenericDataLabel },
            e.label,
          ),
          r.createElement("span", { className: p.CxnGenericData }, e.children),
        );
      }
      function g(e) {
        const t = e.host,
          a = t.type + ":" + t.id;
        let n = "peer" == e.host_role ? "Peer" : "Client",
          s = null;
        if (t.data_center)
          (n = "Gameserver"),
            (s = r.createElement(
              r.Fragment,
              null,
              r.createElement("span", { className: p.host_id }, a),
              " in ",
              r.createElement(
                "span",
                { className: p.GameServerDataCenter },
                t.data_center,
              ),
            ));
        else if (t.steam_persona) {
          const e = u.TS.COMMUNITY_BASE_URL + "/profiles/" + t.id;
          s = r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "span",
              { className: p.host_id },
              r.createElement("a", { href: e }, t.steam_persona),
            ),
            " (",
            r.createElement("span", { className: p.host_id }, a),
            ")",
          );
        } else
          s = r.createElement(
            r.Fragment,
            null,
            r.createElement("span", { className: p.host_id }, a),
          );
        return r.createElement(
          "div",
          {
            className: (0, l.A)(
              p.ConnectionClientInfo,
              t.data_center && p.HostIsGameserver,
            ),
          },
          r.createElement(
            "div",
            { className: p.HostIDAndConnectionCtr },
            r.createElement(f, { className: p.HostIDInfo, label: n }, s),
            null != t.connection_id &&
              r.createElement(
                f,
                { className: p.HostConnectionID, label: "ConnectionID" },
                t.connection_id,
              ),
          ),
          r.createElement(
            "div",
            { className: p.ClientIPInfo },
            t.addr &&
              r.createElement(f, { className: "addr", label: "IP" }, t.addr),
            t.city_name &&
              r.createElement(
                f,
                { className: "city_name", label: "City" },
                t.city_name,
              ),
            t.country_code &&
              r.createElement(
                f,
                { className: "country_code", label: "Country" },
                t.country_code,
              ),
            t.as && r.createElement(f, { className: "as", label: "AS" }, t.as),
          ),
        );
      }
      function C(e, t) {
        return (
          null == t && (t = 0),
          e.toLocaleString(void 0, {
            minimumFractionDigits: t,
            maximumFractionDigits: t,
          })
        );
      }
      function h(e) {
        let t = 1e30,
          a = -1e30;
        if (e && e.ping_pctile)
          for (const n in e.ping_pctile) {
            const s = parseFloat(n);
            if (s >= 5 && s <= 95) {
              const s = e.ping_pctile[n];
              s < t && (t = s), s > a && (a = s);
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
      function N(e, t, a) {
        const n = a > 0 ? t / a : 0,
          s = (100 * n).toFixed(1) + "%";
        return r.createElement(
          "tr",
          { key: e },
          r.createElement("th", { className: p.Label }, e),
          r.createElement("td", { className: p.Pct }, s),
          r.createElement(
            "td",
            null,
            r.createElement("span", {
              className: p.Bar,
              style: { width: 90 * n + 1 + "px" },
            }),
            r.createElement("span", { className: p.Num }, C(t)),
          ),
        );
      }
      function y(e, t) {
        if (!(t > 0)) return null;
        let a = [];
        for (let n = 0; n < e.length; ++n) a.push(N(e[n][0], e[n][1], t));
        return r.createElement(
          "table",
          { className: p.Histogram },
          r.createElement("tbody", null, a),
        );
      }
      function S(e) {
        let t = [];
        for (let a = 0; a < e.length; ++a) {
          const [n, s] = e[a];
          null != s &&
            t.push(
              r.createElement(
                "tr",
                { key: n },
                r.createElement("th", { className: p.NTile }, n, "% <="),
                r.createElement("td", { className: p.Value }, s),
              ),
            );
        }
        return t.length
          ? r.createElement(
              "table",
              { className: p.Distribution },
              r.createElement("tbody", null, t),
            )
          : null;
      }
      function b(e) {
        return e >= 0 ? e.toFixed(0) + "ms" : "???";
      }
      function k(e) {
        const t = e.flow;
        return r.createElement(
          "div",
          { className: p.FlowQualityStats },
          r.createElement("div", { className: p.FlowQualityTitle }, e.title),
          t
            ? r.createElement(
                r.Fragment,
                null,
                (function (e) {
                  const t = function (e) {
                      const t = e >= 0 ? C(e) : "?";
                      return r.createElement(
                        "td",
                        { className: p.NumPkts },
                        t + " pkts",
                      );
                    },
                    a = function (e) {
                      const t = e >= 0 ? C(e) : "?";
                      return r.createElement(
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
                        r.createElement("td", { className: p.Pct }, a)
                      );
                    };
                  return r.createElement(
                    "div",
                    {
                      className: (0, l.A)(
                        p.FlowPacketCounts,
                        p.FlowStatsSection,
                      ),
                    },
                    r.createElement(
                      "div",
                      { className: p.FlowSectionTitle },
                      "Summary counters",
                    ),
                    r.createElement(
                      "table",
                      null,
                      r.createElement(
                        "tbody",
                        null,
                        r.createElement(
                          "tr",
                          null,
                          r.createElement("th", null, "Sent"),
                          t(e.sent_pkt),
                          a(e.sent_kb),
                          r.createElement("td", { className: p.Spacer }),
                          r.createElement("th", null, "Dropped"),
                          t(e.drop),
                          n(e.drop, e.recv_seq),
                        ),
                        r.createElement(
                          "tr",
                          null,
                          r.createElement("th", null, "Recv"),
                          t(e.recv_pkt),
                          a(e.recv_kb),
                          r.createElement("td", { className: p.Spacer }),
                          r.createElement("th", null, "Duplicate"),
                          t(e.dup),
                          n(e.dup, e.recv_seq),
                        ),
                        r.createElement(
                          "tr",
                          null,
                          r.createElement("th", null, "Recv w/ seq"),
                          t(e.recv_seq),
                          r.createElement("td", null),
                          r.createElement("td", { className: p.Spacer }),
                          r.createElement("th", null, "Out of order"),
                          t(e.ooo),
                          n(e.ooo, e.recv_seq),
                        ),
                        r.createElement(
                          "tr",
                          null,
                          r.createElement("th", null, "Summary"),
                          r.createElement(
                            "td",
                            { colSpan: 2, className: p.FlowQualityClass },
                            r.createElement(
                              "span",
                              {
                                className:
                                  "flowqualityclass_" + e.quality_class,
                              },
                              e.quality_class,
                            ),
                          ),
                          r.createElement("td", { className: p.Spacer }),
                          r.createElement("th", null, "Seq num lurch"),
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
                  const s = e.quality_hist;
                  if (s) {
                    const e = [
                      ["Perfect", s[100] || 0],
                      [">99%", s[99] || 0],
                      ["97-99%", s[97] || 0],
                      ["95-97%", s[95] || 0],
                      ["90-95%", s[90] || 0],
                      ["75-90%", s[75] || 0],
                      ["50-75%", s[50] || 0],
                      ["<50%", s[1] || 0],
                      ["Dead", s[0] || 0],
                    ];
                    for (let t = 0; t < e.length; ++t) n += e[t][1];
                    t = y(e, n);
                  }
                  if (n <= 0) return null;
                  const l = e.quality_pctile;
                  if (l) {
                    const e = (e) => (null == e ? void 0 : e + "%");
                    a = S([
                      [50, e(l[50])],
                      [25, e(l[25])],
                      [5, e(l[5])],
                      [2, e(l[2])],
                    ]);
                  }
                  const c = C(n) + " measurement intervals";
                  return r.createElement(
                    "div",
                    { className: p.QualityBreakdown },
                    r.createElement(
                      "div",
                      { className: p.FlowSectionTitle },
                      "Quality interval breakdown",
                    ),
                    r.createElement("div", { className: p.numSamples }, c),
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
                    let s,
                      l = 0;
                    for (let t = 0; t < e.length; ++t)
                      e[t][1] > 0 &&
                        (null == s && (s = t), (l = t + 1), (n += e[t][1]));
                    if (n > 0) {
                      (s = Math.max(0, s - 2)), (l = Math.min(e.length, l + 2));
                      let a = [];
                      for (let t = s; t < l; ++t) {
                        let r,
                          [c, o] = e[t];
                        t == s && 0 == o && (c = 0),
                          (r =
                            t + 1 >= e.length || (t + 1 >= l && 0 == o)
                              ? b(c) + "+"
                              : c + "-" + b(e[t + 1][0])),
                          a.push(N(r, o, n));
                      }
                      t = r.createElement(
                        "table",
                        { className: p.Histogram },
                        r.createElement("tbody", null, a),
                      );
                    }
                  }
                  let s = null;
                  const l = e.ping_pctile;
                  if (l) {
                    const e = (e) => (null == e ? void 0 : b(e));
                    s = S([
                      [5, e(l[5])],
                      [50, e(l[50])],
                      [75, e(l[75])],
                      [95, e(l[95])],
                      [98, e(l[98])],
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
                  if (!t && !s && !c) return null;
                  const m = C(n) + " samples",
                    d = C(o) + " samples";
                  return r.createElement(
                    "div",
                    { className: p.PingBreakdown },
                    r.createElement(
                      "div",
                      { className: p.PingSection },
                      r.createElement(
                        "div",
                        { className: p.FlowSectionTitle },
                        "Round Trip Latency",
                      ),
                      r.createElement("div", { className: p.NumSamples }, m),
                      t,
                      s,
                    ),
                    r.createElement(
                      "div",
                      { className: p.JitterSection },
                      r.createElement(
                        "div",
                        { className: p.FlowSectionTitle },
                        "Jitter",
                      ),
                      r.createElement("div", { className: p.NumSamples }, d),
                      c,
                    ),
                  );
                })(t),
              )
            : r.createElement(
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
          s = null;
        if (t.client_front || t.router_front) {
          const e =
            "ded" == a.kind
              ? "Front side statistics reported by client"
              : "Front side statistics reported by player";
          n = r.createElement(
            "div",
            { className: p.QualityFlowPairCtr },
            r.createElement(k, { title: e, flow: t.client_front }),
            r.createElement(k, {
              title: "Front side statistics reported by relay",
              flow: t.router_front,
            }),
          );
        }
        return (
          (t.router_back || t.gameserver_back) &&
            (s = r.createElement(
              "div",
              { className: p.QualityFlowPairCtr },
              r.createElement(k, {
                title: "Back side statistics reported by relay",
                flow: t.router_back,
              }),
              r.createElement(k, {
                title: "Back side statistics reported by gameserver",
                flow: t.gameserver_back,
              }),
            )),
          r.createElement(
            "div",
            { className: p.RelaySessionCtr },
            r.createElement(
              "div",
              { className: p.RelayInfoCtr },
              r.createElement(
                f,
                { label: "Relay address" },
                t.client.relay_addr,
              ),
              r.createElement(
                f,
                { label: "Relay POP" },
                t.client.relay_cluster,
              ),
              r.createElement(f, { label: "Active" }, (0, _.R2)(t.active_time)),
            ),
            n,
            s,
          )
        );
      }
      function F(e) {
        const t = e.cxn,
          a = t.client,
          n = t.peer,
          s = t.client_e2e,
          l = t.peer_e2e,
          [c, o] = r.useState(!1),
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
          C = null,
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
              s = e.toLocaleString(a, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              l = t.toLocaleString(a, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              c = (0, _.R2)(m.duration);
            d = r.createElement(
              "span",
              { className: p.CxnTimeAndDuration },
              r.createElement(f, { label: "Time" }, n, " ", s, "--", l),
              r.createElement(f, { label: "Duration" }, c),
            );
          }
          if (
            (m.close_code &&
              (u = r.createElement(
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
            E = r.createElement(
              f,
              { label: "Experience" },
              r.createElement(
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
            for (let n of e) a.push(r.createElement(f, { label: n }, t.app[n]));
            C = r.createElement(
              "div",
              { className: p.AppFieldsCtr },
              r.createElement(
                "span",
                { className: p.AppFieldsTitle },
                "Application fields:",
              ),
              a,
            );
          }
        }
        if (s || l) {
          const [e, a] = h(s),
            [n, o] = h(l),
            i = Math.min(e, n),
            m = Math.max(a, o);
          if (i <= m) {
            const e =
              0.03 * i + 2 < m
                ? `${i}--${m}ms`
                : Math.floor((i + m) / 2 + 0.5) + "ms";
            N = r.createElement(f, { label: "Ping" }, e);
          }
          const d = v(s),
            u = v(l),
            E = Math.min(d, u);
          if (
            (E >= 0 &&
              E <= 100 &&
              (y = r.createElement(
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
            S = r.createElement(
              "div",
              { className: p.QualityFlowPairCtr },
              r.createElement(k, { title: e, flow: s }),
              r.createElement(k, { title: a, flow: l }),
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
                  r.createElement(
                    "div",
                    { className: p.SessionsGroupHeader },
                    "Client relay sessions",
                  ),
                )
              : b.push(
                  r.createElement(
                    "div",
                    { className: p.SessionsGroupHeader },
                    "Relay sessions",
                  ),
                );
            for (const a of e(t.client_sessions))
              b.push(
                r.createElement(w, { cxn: t, sess: a, host_role: "client" }),
              );
          }
          if (n) {
            b.push(
              r.createElement(
                "div",
                { className: p.SessionsGroupHeader },
                "Peer relay sessions",
              ),
            );
            for (const a of e(t.peer_sessions))
              b.push(
                r.createElement(w, { cxn: t, sess: a, host_role: "peer" }),
              );
          }
        }
        return r.createElement(
          "div",
          { className: p.ConnectionCtr, key: e.key },
          r.createElement(
            "div",
            { className: p.ConnectionHeader },
            r.createElement(
              "div",
              { className: p.CxnSummary },
              d,
              N,
              y,
              E,
              C,
              u,
            ),
            r.createElement(i.Yh, {
              className: p.ExpandDetailsCheckbox,
              label: "Details",
              checked: c,
              onChange: o,
            }),
          ),
          r.createElement(
            "div",
            { className: p.CxnPeersCtr },
            r.createElement(g, { host: t.client, host_role: "client" }),
            r.createElement(g, { host: t.peer, host_role: "peer" }),
          ),
          S,
          b,
        );
      }
      function P(e) {
        const t = (0, o.W6)(),
          a = e.appId,
          [n, _] = r.useState(!1),
          [f, g] = r.useState(""),
          [C, h] = r.useState(void 0),
          [v, N] = r.useState(""),
          [y, S] = r.useState(""),
          [b, k] = r.useState(""),
          [w, P] = r.useState(0),
          [x, R] = r.useState(""),
          [I, T] = r.useState("");
        r.useEffect(() => {
          let e = new URLSearchParams(t.location.search);
          const n = e.get("client_id") || "",
            r = e.get("peer_id") || "",
            l = e.get("kind") || "",
            o = e.get("app_name1") || "",
            i = e.get("app_value1") || "";
          if ((N(n), S(r), k(l), R(o), T(i), !e.toString() && 0 == w)) return;
          _(!0), g(""), a > 0 && e.set("appid", "" + a);
          const m =
            u.TS.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + e.toString();
          (async () => {
            try {
              const e = await s().get(m);
              e?.data?.success == c.d.k_EResultOK
                ? h(e.data.connections)
                : (console.error(
                    "sdrsessionsearch: OnPerformSearch error code  " +
                      e?.data?.success +
                      " msg: " +
                      e?.data?.msg,
                  ),
                  g(e?.data?.success + " msg: " + e?.data?.msg));
            } catch (e) {
              const t = (0, d.H)(e);
              console.error(
                "sdrsessionsearch: OnPerformSearch " + t.strErrorMsg,
                t,
              ),
                g(t.strErrorMsg);
            }
            _(!1);
          })();
        }, [a, t.location, w]);
        let D = null;
        if (void 0 !== C) {
          let e = [];
          for (const t of C) {
            const a =
              (t.client.id || "") + "-" + (t.client.connection_id || "");
            e.push(r.createElement(F, { key: a, cxn: t }));
          }
          D = r.createElement(
            "div",
            { className: p.SearchResultsCtr },
            r.createElement(
              "div",
              { className: p.SearchResultsTitle },
              "Found ",
              C.length,
              " connection(s)",
            ),
            e,
          );
        }
        const M = "ded" == b ? "Gameserver" : "Peer",
          A = !1,
          G = r.useId();
        return r.createElement(
          m.tH,
          null,
          r.createElement(
            "div",
            { className: p.SDRConnectionsAppCtn },
            r.createElement(
              "div",
              { className: p.SDRConnectionsAppTitle },
              r.createElement(r.Fragment, null, "SDR Connections - "),
              e.appId > 0
                ? r.createElement(r.Fragment, null, "App ", e.appId)
                : r.createElement(r.Fragment, null, "All apps"),
              r.createElement(r.Fragment, null, " [BETA feature]"),
            ),
            f && r.createElement("div", { className: p.ErrMsg }, f),
            r.createElement(
              "div",
              { className: p.SearchParamsCtr },
              r.createElement(
                "div",
                {
                  className: (0, l.A)(
                    "DialogInputLabelGroup",
                    p.ConnectionKindGroup,
                  ),
                },
                r.createElement(
                  "div",
                  { id: G, className: "DialogLabel" },
                  "Connection kind",
                ),
                r.createElement(
                  i.zW,
                  { labelId: G, value: b, onChange: (e) => k(e) },
                  r.createElement(i.a, { value: "" }, "Any"),
                  r.createElement(i.a, { value: "ded" }, "Dedicated server"),
                  r.createElement(i.a, { value: "p2p" }, "Peer-to-Peer"),
                ),
              ),
              r.createElement(
                "div",
                { className: p.AppFieldPair },
                r.createElement(i.pd, {
                  type: "text",
                  value: v,
                  disabled: A,
                  label: "Client",
                  onChange: (e) => N(e.currentTarget.value),
                }),
                r.createElement(i.pd, {
                  type: "text",
                  value: y,
                  disabled: A,
                  label: M,
                  onChange: (e) => S(e.currentTarget.value),
                }),
              ),
              r.createElement(
                "div",
                { className: p.AppFieldPair },
                r.createElement(i.pd, {
                  type: "text",
                  value: x,
                  disabled: A,
                  label: "App field name 1",
                  onChange: (e) => R(e.currentTarget.value),
                }),
                r.createElement(i.pd, {
                  type: "text",
                  value: I,
                  disabled: A,
                  label: "App field value 1",
                  onChange: (e) => T(e.currentTarget.value),
                }),
              ),
              r.createElement(
                "div",
                { className: p.SubmitButtonCtn },
                r.createElement(
                  i.jn,
                  {
                    onClick: () => {
                      let e = new URLSearchParams();
                      v && e.set("client_id", v),
                        y && e.set("peer_id", y),
                        b && e.set("kind", b),
                        x &&
                          I &&
                          (e.set("app_name1", x), e.set("app_value1", I));
                      let a = { ...t.location };
                      (a.search = e.toString()),
                        a != t.location && t.push(a),
                        P(w + 1);
                    },
                    disabled: n,
                  },
                  "Search ",
                ),
              ),
            ),
            n && r.createElement(E.t, null),
            D,
          ),
        );
      }
    },
    68797: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => c });
      var n = a(37085),
        s = a(41735),
        r = a.n(s),
        l = a(56545);
      function c(e) {
        if (r().isCancel(e))
          return {
            strErrorMsg: "Action Cancelled:" + e,
            errorCode: n.d.k_EResultCancelled,
          };
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
            if ("object" == typeof e && e instanceof l.w)
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
              errorCode: n.d.k_EResultFail,
            }
          : {
              strErrorMsg: "Unknown Error: " + e,
              errorCode: n.d.k_EResultFail,
            };
      }
    },
  },
]);
