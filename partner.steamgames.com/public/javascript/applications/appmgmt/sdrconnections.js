/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4935],
  {
    14986: (e) => {
      e.exports = {
        SDRConnectionsAppCtn: "connections_SDRConnectionsAppCtn_3Vqm_",
        SDRConnectionsAppTitle: "connections_SDRConnectionsAppTitle_1VJcG",
        SearchParamsCtr: "connections_SearchParamsCtr_1iOSD",
        ConnectionKindGroup: "connections_ConnectionKindGroup_2nfRC",
        AppFieldPair: "connections_AppFieldPair_JhdeV",
        SubmitButtonCtn: "connections_SubmitButtonCtn_1m5Ek",
        ErrorMsg: "connections_ErrorMsg_15kPl",
        SearchResultsCtr: "connections_SearchResultsCtr_xl0L8",
        SearchResultsTitle: "connections_SearchResultsTitle_2zXcR",
        ConnectionCtr: "connections_ConnectionCtr_33Z20",
        ConnectionHeader: "connections_ConnectionHeader_2Ckxn",
        CxnSummary: "connections_CxnSummary_ZLIDf",
        GenericLabeledItem: "connections_GenericLabeledItem_3owUM",
        CxnPeersCtr: "connections_CxnPeersCtr_2TCo_",
        ConnectionClientInfo: "connections_ConnectionClientInfo_29nFZ",
        host_id: "connections_host_id_2gxSU",
        GameServerDataCenter: "connections_GameServerDataCenter_gwTmZ",
        HostIsGameserver: "connections_HostIsGameserver_15b6h",
        HostIDInfo: "connections_HostIDInfo_vm4PN",
        CxnGenericData: "connections_CxnGenericData_ftpou",
        ExpandDetailsCheckbox: "connections_ExpandDetailsCheckbox_Pf2pe",
        SessionsGroupHeader: "connections_SessionsGroupHeader_2PkRi",
        QualityFlowPairCtr: "connections_QualityFlowPairCtr_2mXRD",
        QualityFlowPairTitle: "connections_QualityFlowPairTitle_2_Xyp",
        FlowQualityStats: "connections_FlowQualityStats_2CrTq",
        RelaySessionCtr: "connections_RelaySessionCtr_3Ny56",
        CxnCloseInfo: "connections_CxnCloseInfo_19mRG",
        AppFieldsCtr: "connections_AppFieldsCtr_2T7Ca",
        AppFieldsTitle: "connections_AppFieldsTitle_3R8n1",
        FlowSectionTitle: "connections_FlowSectionTitle_a0Wxo",
        FlowQualityTitle: "connections_FlowQualityTitle_12x87",
        NumPkts: "connections_NumPkts_3gym3",
        KB: "connections_KB_3i190",
        Pct: "connections_Pct_1fRCe",
        FlowPacketCounts: "connections_FlowPacketCounts_2EYOy",
        Spacer: "connections_Spacer_29tRz",
        CxnGenericDataLabel: "connections_CxnGenericDataLabel_1Nnpc",
        Histogram: "connections_Histogram_3SrHB",
        Bar: "connections_Bar_32eim",
        Distribution: "connections_Distribution_3guOb",
        NTile: "connections_NTile_vT8ky",
        PingBreakdown: "connections_PingBreakdown_2jSWo",
        PingSection: "connections_PingSection_RIiaS",
        JitterSection: "connections_JitterSection_5OEqo",
        QualityBreakdown: "connections_QualityBreakdown_1RMOO",
        ClientIPInfo: "connections_ClientIPInfo_1IW5o",
      };
    },
    94527: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => w });
      var a = n(33940),
        l = n(52868),
        s = n.n(l),
        c = n(89526),
        i = n(19304),
        r = n(59934),
        o = n(22444),
        m = n(17547),
        u = n(23217),
        d = n(32765),
        _ = n(14986),
        p = n(3301),
        E = n(72120);
      function v(e) {
        return c.createElement(
          "span",
          { className: (0, i.Z)(_.GenericLabeledItem, e.className) },
          c.createElement(
            "span",
            { className: _.CxnGenericDataLabel },
            e.label,
          ),
          c.createElement("span", { className: _.CxnGenericData }, e.children),
        );
      }
      function f(e) {
        const t = e.host,
          n = t.type + ":" + t.id;
        let a = "peer" == e.host_role ? "Peer" : "Client",
          l = null;
        if (t.data_center)
          (a = "Gameserver"),
            (l = c.createElement(
              c.Fragment,
              null,
              c.createElement("span", { className: _.host_id }, n),
              " in ",
              c.createElement(
                "span",
                { className: _.GameServerDataCenter },
                t.data_center,
              ),
            ));
        else if (t.steam_persona) {
          const e = d.De.COMMUNITY_BASE_URL + "/profiles/" + t.id;
          l = c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "span",
              { className: _.host_id },
              c.createElement("a", { href: e }, t.steam_persona),
            ),
            " (",
            c.createElement("span", { className: _.host_id }, n),
            ")",
          );
        } else
          l = c.createElement(
            c.Fragment,
            null,
            c.createElement("span", { className: _.host_id }, n),
          );
        return c.createElement(
          "div",
          {
            className: (0, i.Z)(
              _.ConnectionClientInfo,
              t.data_center && _.HostIsGameserver,
            ),
          },
          c.createElement(
            "div",
            { className: _.HostIDAndConnectionCtr },
            c.createElement(v, { className: _.HostIDInfo, label: a }, l),
            null != t.connection_id &&
              c.createElement(
                v,
                { className: _.HostConnectionID, label: "ConnectionID" },
                t.connection_id,
              ),
          ),
          c.createElement(
            "div",
            { className: _.ClientIPInfo },
            t.addr &&
              c.createElement(v, { className: "addr", label: "IP" }, t.addr),
            t.city_name &&
              c.createElement(
                v,
                { className: "city_name", label: "City" },
                t.city_name,
              ),
            t.country_code &&
              c.createElement(
                v,
                { className: "country_code", label: "Country" },
                t.country_code,
              ),
            t.as && c.createElement(v, { className: "as", label: "AS" }, t.as),
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
          n = -1e30;
        if (e && e.ping_pctile)
          for (const a in e.ping_pctile) {
            const l = parseFloat(a);
            if (l >= 5 && l <= 95) {
              const l = e.ping_pctile[a];
              l < t && (t = l), l > n && (n = l);
            }
          }
        return [t, n];
      }
      function N(e) {
        let t = 1e30;
        if (e && e.quality_pctile)
          for (const n in e.quality_pctile) {
            const a = parseFloat(n);
            if (a >= 5 && a <= 95) {
              const a = e.quality_pctile[n];
              a < t && (t = a);
            }
          }
        return t;
      }
      function S(e, t, n) {
        const a = n > 0 ? t / n : 0,
          l = (100 * a).toFixed(1) + "%";
        return c.createElement(
          "tr",
          { key: e },
          c.createElement("th", { className: _.Label }, e),
          c.createElement("td", { className: _.Pct }, l),
          c.createElement(
            "td",
            null,
            c.createElement("span", {
              className: _.Bar,
              style: { width: 90 * a + 1 + "px" },
            }),
            c.createElement("span", { className: _.Num }, C(t)),
          ),
        );
      }
      function y(e, t) {
        if (!(t > 0)) return null;
        let n = [];
        for (let a = 0; a < e.length; ++a) n.push(S(e[a][0], e[a][1], t));
        return c.createElement(
          "table",
          { className: _.Histogram },
          c.createElement("tbody", null, n),
        );
      }
      function g(e) {
        let t = [];
        for (let n = 0; n < e.length; ++n) {
          const [a, l] = e[n];
          null != l &&
            t.push(
              c.createElement(
                "tr",
                { key: a },
                c.createElement("th", { className: _.NTile }, a, "% <="),
                c.createElement("td", { className: _.Value }, l),
              ),
            );
        }
        return t.length
          ? c.createElement(
              "table",
              { className: _.Distribution },
              c.createElement("tbody", null, t),
            )
          : null;
      }
      function b(e) {
        return e >= 0 ? e.toFixed(0) + "ms" : "???";
      }
      function P(e) {
        const t = e.flow;
        return c.createElement(
          "div",
          { className: _.FlowQualityStats },
          c.createElement("div", { className: _.FlowQualityTitle }, e.title),
          t
            ? c.createElement(
                c.Fragment,
                null,
                (function (e) {
                  const t = function (e) {
                      const t = e >= 0 ? C(e) : "?";
                      return c.createElement(
                        "td",
                        { className: _.NumPkts },
                        t + " pkts",
                      );
                    },
                    n = function (e) {
                      const t = e >= 0 ? C(e) : "?";
                      return c.createElement(
                        "td",
                        { className: _.KB },
                        t + "kb",
                      );
                    },
                    a = function (e, t) {
                      let n = "";
                      return (
                        t > 0 &&
                          e >= 0 &&
                          (n = ((e / t) * 100).toFixed(3) + "%"),
                        c.createElement("td", { className: _.Pct }, n)
                      );
                    };
                  return c.createElement(
                    "div",
                    {
                      className: (0, i.Z)(
                        _.FlowPacketCounts,
                        _.FlowStatsSection,
                      ),
                    },
                    c.createElement(
                      "div",
                      { className: _.FlowSectionTitle },
                      "Summary counters",
                    ),
                    c.createElement(
                      "table",
                      null,
                      c.createElement(
                        "tbody",
                        null,
                        c.createElement(
                          "tr",
                          null,
                          c.createElement("th", null, "Sent"),
                          t(e.sent_pkt),
                          n(e.sent_kb),
                          c.createElement("td", { className: _.Spacer }),
                          c.createElement("th", null, "Dropped"),
                          t(e.drop),
                          a(e.drop, e.recv_seq),
                        ),
                        c.createElement(
                          "tr",
                          null,
                          c.createElement("th", null, "Recv"),
                          t(e.recv_pkt),
                          n(e.recv_kb),
                          c.createElement("td", { className: _.Spacer }),
                          c.createElement("th", null, "Duplicate"),
                          t(e.dup),
                          a(e.dup, e.recv_seq),
                        ),
                        c.createElement(
                          "tr",
                          null,
                          c.createElement("th", null, "Recv w/ seq"),
                          t(e.recv_seq),
                          c.createElement("td", null),
                          c.createElement("td", { className: _.Spacer }),
                          c.createElement("th", null, "Out of order"),
                          t(e.ooo),
                          a(e.ooo, e.recv_seq),
                        ),
                        c.createElement(
                          "tr",
                          null,
                          c.createElement("th", null, "Summary"),
                          c.createElement(
                            "td",
                            { colSpan: 2, className: _.FlowQualityClass },
                            c.createElement(
                              "span",
                              {
                                className:
                                  "flowqualityclass_" + e.quality_class,
                              },
                              e.quality_class,
                            ),
                          ),
                          c.createElement("td", { className: _.Spacer }),
                          c.createElement("th", null, "Seq num lurch"),
                          t(e.seqlurch),
                          a(e.seqlurch, e.recv_seq),
                        ),
                      ),
                    ),
                  );
                })(t),
                (function (e) {
                  let t = null,
                    n = null,
                    a = 0;
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
                    for (let t = 0; t < e.length; ++t) a += e[t][1];
                    t = y(e, a);
                  }
                  if (a <= 0) return null;
                  const s = e.quality_pctile;
                  if (s) {
                    const e = (e) => (null == e ? void 0 : e + "%");
                    n = g([
                      [50, e(s[50])],
                      [25, e(s[25])],
                      [5, e(s[5])],
                      [2, e(s[2])],
                    ]);
                  }
                  const i = C(a) + " measurement intervals";
                  return c.createElement(
                    "div",
                    { className: _.QualityBreakdown },
                    c.createElement(
                      "div",
                      { className: _.FlowSectionTitle },
                      "Quality interval breakdown",
                    ),
                    c.createElement("div", { className: _.numSamples }, i),
                    t,
                    n,
                  );
                })(t),
                (function (e) {
                  let t = null;
                  const n = e.ping_hist;
                  let a = 0;
                  if (n) {
                    const e = [
                      [0, n[25] || 0],
                      [25, n[50] || 0],
                      [50, n[75] || 0],
                      [75, n[100] || 0],
                      [100, n[125] || 0],
                      [125, n[150] || 0],
                      [150, n[200] || 0],
                      [200, n[300] || 0],
                      [300, n.max || 0],
                    ];
                    let l,
                      s = 0;
                    for (let t = 0; t < e.length; ++t)
                      e[t][1] > 0 &&
                        (null == l && (l = t), (s = t + 1), (a += e[t][1]));
                    if (a > 0) {
                      (l = Math.max(0, l - 2)), (s = Math.min(e.length, s + 2));
                      let n = [];
                      for (let t = l; t < s; ++t) {
                        let c,
                          [i, r] = e[t];
                        t == l && 0 == r && (i = 0),
                          (c =
                            t + 1 >= e.length || (t + 1 >= s && 0 == r)
                              ? b(i) + "+"
                              : i + "-" + b(e[t + 1][0])),
                          n.push(S(c, r, a));
                      }
                      t = c.createElement(
                        "table",
                        { className: _.Histogram },
                        c.createElement("tbody", null, n),
                      );
                    }
                  }
                  let l = null;
                  const s = e.ping_pctile;
                  if (s) {
                    const e = (e) => (null == e ? void 0 : b(e));
                    l = g([
                      [5, e(s[5])],
                      [50, e(s[50])],
                      [75, e(s[75])],
                      [95, e(s[95])],
                      [98, e(s[98])],
                    ]);
                  }
                  let i = null,
                    r = 0;
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
                    for (let t = 0; t < e.length; ++t) r += e[t][1];
                    i = y(e, r);
                  }
                  if (!t && !l && !i) return null;
                  const m = C(a) + " samples",
                    u = C(r) + " samples";
                  return c.createElement(
                    "div",
                    { className: _.PingBreakdown },
                    c.createElement(
                      "div",
                      { className: _.PingSection },
                      c.createElement(
                        "div",
                        { className: _.FlowSectionTitle },
                        "Round Trip Latency",
                      ),
                      c.createElement("div", { className: _.NumSamples }, m),
                      t,
                      l,
                    ),
                    c.createElement(
                      "div",
                      { className: _.JitterSection },
                      c.createElement(
                        "div",
                        { className: _.FlowSectionTitle },
                        "Jitter",
                      ),
                      c.createElement("div", { className: _.NumSamples }, u),
                      i,
                    ),
                  );
                })(t),
              )
            : c.createElement(
                "div",
                { className: _.NoFlowDataAvailable },
                "(No data available)",
              ),
        );
      }
      function k(e) {
        const t = e.sess,
          n = e.cxn;
        let a = null,
          l = null;
        if (t.client_front || t.router_front) {
          const e =
            "ded" == n.kind
              ? "End-to-end statistics reported by client"
              : "End-to-end statistics reported by player";
          a = c.createElement(
            "div",
            { className: _.QualityFlowPairCtr },
            c.createElement(P, { title: e, flow: t.client_front }),
            c.createElement(P, {
              title: "Front side statistics reported by relay",
              flow: t.router_front,
            }),
          );
        }
        return (
          (t.router_back || t.gameserver_back) &&
            (l = c.createElement(
              "div",
              { className: _.QualityFlowPairCtr },
              c.createElement(P, {
                title: "Back side statistics reported by relay",
                flow: t.router_back,
              }),
              c.createElement(P, {
                title: "Back side statistics reported by gameserver",
                flow: t.gameserver_back,
              }),
            )),
          c.createElement(
            "div",
            { className: _.RelaySessionCtr },
            c.createElement(
              "div",
              { className: _.RelayInfoCtr },
              c.createElement(
                v,
                { label: "Relay address" },
                t.client.relay_addr,
              ),
              c.createElement(
                v,
                { label: "Relay POP" },
                t.client.relay_cluster,
              ),
              c.createElement(v, { label: "Active" }, (0, E.jA)(t.active_time)),
            ),
            a,
            l,
          )
        );
      }
      function x(e) {
        const t = e.cxn,
          n = t.client,
          a = t.peer,
          l = t.client_e2e,
          s = t.peer_e2e,
          [i, r] = c.useState(!1),
          m = (function (e) {
            if (!e || !e.length) return null;
            let t = e[0];
            for (let n = 1; n < e.length; ++n) {
              const a = e[n];
              (a.primary > t.primary ||
                (a.primary == t.primary && a.active_time > t.active_time)) &&
                (t = a);
            }
            return t;
          })(t.client_sessions);
        let u = null,
          d = null,
          p = null,
          C = null,
          S = null,
          y = null,
          g = null,
          b = [];
        if (m) {
          a &&
            m.client.connection_id == a.connection_id &&
            (!n || (m.client.connection_id, n.connection_id));
          if (m.start_time && m.duration) {
            const e = new Date(1e3 * m.start_time),
              t = new Date(1e3 * (m.start_time + m.duration)),
              n = void 0,
              a = e.toLocaleString(n, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              l = e.toLocaleString(n, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              s = t.toLocaleString(n, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              i = (0, E.jA)(m.duration);
            u = c.createElement(
              "span",
              { className: _.CxnTimeAndDuration },
              c.createElement(v, { label: "Time" }, a, " ", l, "--", s),
              c.createElement(v, { label: "Duration" }, i),
            );
          }
          if (
            (m.close_code &&
              (d = c.createElement(
                v,
                { label: "Closed", className: _.CxnCloseInfo },
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
            p = c.createElement(
              v,
              { label: "Experience" },
              c.createElement(
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
            let n = [];
            for (let a of e) n.push(c.createElement(v, { label: a }, t.app[a]));
            C = c.createElement(
              "div",
              { className: _.AppFieldsCtr },
              c.createElement(
                "span",
                { className: _.AppFieldsTitle },
                "Application fields:",
              ),
              n,
            );
          }
        }
        if (l || s) {
          const [e, n] = h(l),
            [a, r] = h(s),
            o = Math.min(e, a),
            m = Math.max(n, r);
          if (o <= m) {
            const e =
              0.03 * o + 2 < m
                ? `${o}--${m}ms`
                : Math.floor((o + m) / 2 + 0.5) + "ms";
            S = c.createElement(v, { label: "Ping" }, e);
          }
          const u = N(l),
            d = N(s),
            p = Math.min(u, d);
          if (
            (p >= 0 &&
              p <= 100 &&
              (y = c.createElement(
                v,
                { label: "Packet delivery" },
                `${p.toFixed(2)}%`,
              )),
            i)
          ) {
            const e = "End-to-end statistics reported by client",
              n =
                "ded" == t.kind
                  ? "End-to-end statistics reported by gameserver"
                  : "End-to-end statistics reported by peer";
            g = c.createElement(
              "div",
              { className: _.QualityFlowPairCtr },
              c.createElement(P, { title: e, flow: l }),
              c.createElement(P, { title: n, flow: s }),
            );
          }
        }
        if (i) {
          const e = function (e) {
              let t = [...e];
              return (
                t.sort((e, t) => (t.active_time || 0) - (e.active_time || 0)), t
              );
            },
            n = t.client_sessions && t.client_sessions.length > 0,
            a = t.peer_sessions && t.peer_sessions.length > 0;
          if (n) {
            "p2p" == t.kind || a
              ? b.push(
                  c.createElement(
                    "div",
                    { className: _.SessionsGroupHeader },
                    "Client relay sessions",
                  ),
                )
              : b.push(
                  c.createElement(
                    "div",
                    { className: _.SessionsGroupHeader },
                    "Relay sessions",
                  ),
                );
            for (const n of e(t.client_sessions))
              b.push(
                c.createElement(k, { cxn: t, sess: n, host_role: "client" }),
              );
          }
          if (a) {
            b.push(
              c.createElement(
                "div",
                { className: _.SessionsGroupHeader },
                "Peer relay sessions",
              ),
            );
            for (const n of e(t.peer_sessions))
              b.push(
                c.createElement(k, { cxn: t, sess: n, host_role: "peer" }),
              );
          }
        }
        return c.createElement(
          "div",
          { className: _.ConnectionCtr, key: e.key },
          c.createElement(
            "div",
            { className: _.ConnectionHeader },
            c.createElement(
              "div",
              { className: _.CxnSummary },
              u,
              S,
              y,
              p,
              C,
              d,
            ),
            c.createElement(o.ji, {
              className: _.ExpandDetailsCheckbox,
              label: "Details",
              checked: i,
              onChange: r,
            }),
          ),
          c.createElement(
            "div",
            { className: _.CxnPeersCtr },
            c.createElement(f, { host: t.client, host_role: "client" }),
            c.createElement(f, { host: t.peer, host_role: "peer" }),
          ),
          g,
          b,
        );
      }
      function w(e) {
        const t = (0, r.k6)(),
          n = e.appId,
          [l, E] = c.useState(!1),
          [v, f] = c.useState(""),
          [C, h] = c.useState(void 0),
          [N, S] = c.useState(""),
          [y, g] = c.useState(""),
          [b, P] = c.useState(""),
          [k, w] = c.useState(0),
          [F, D] = c.useState(""),
          [I, R] = c.useState("");
        c.useEffect(() => {
          let e = new URLSearchParams(t.location.search);
          const l = e.get("client_id") || "",
            c = e.get("peer_id") || "",
            i = e.get("kind") || "",
            r = e.get("app_name1") || "",
            o = e.get("app_value1") || "";
          if ((S(l), g(c), P(i), D(r), R(o), !e.toString() && 0 == k)) return;
          E(!0), f(""), e.set("appid", "" + n);
          const m =
            d.De.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + e.toString();
          (() => {
            (0, a.mG)(this, void 0, void 0, function* () {
              var e, t, n, a, l;
              try {
                const c = yield s().get(m);
                1 ==
                (null === (e = null == c ? void 0 : c.data) || void 0 === e
                  ? void 0
                  : e.success)
                  ? h(c.data.connections)
                  : (console.error(
                      "sdrsessionsearch: OnPerformSearch error code  " +
                        (null === (t = null == c ? void 0 : c.data) ||
                        void 0 === t
                          ? void 0
                          : t.success) +
                        " msg: " +
                        (null === (n = null == c ? void 0 : c.data) ||
                        void 0 === n
                          ? void 0
                          : n.msg),
                    ),
                    f(
                      (null === (a = null == c ? void 0 : c.data) ||
                      void 0 === a
                        ? void 0
                        : a.success) +
                        " msg: " +
                        (null === (l = null == c ? void 0 : c.data) ||
                        void 0 === l
                          ? void 0
                          : l.msg),
                    ));
              } catch (e) {
                const t = (0, u.l)(e);
                console.error(
                  "sdrsessionsearch: OnPerformSearch " + t.strErrorMsg,
                  t,
                );
              }
              E(!1);
            });
          })();
        }, [n, t.location, k]);
        let T = null;
        if (void 0 !== C) {
          let e = [];
          for (const t of C) {
            const n =
              (t.client.id || "") + "-" + (t.client.connection_id || "");
            e.push(c.createElement(x, { key: n, cxn: t }));
          }
          T = c.createElement(
            "div",
            { className: _.SearchResultsCtr },
            c.createElement(
              "div",
              { className: _.SearchResultsTitle },
              "Found ",
              C.length,
              " connection(s)",
            ),
            e,
          );
        }
        const A = "ded" == b ? "Gameserver" : "Peer",
          G = !1;
        return c.createElement(
          m.SV,
          null,
          c.createElement(
            "div",
            { className: _.SDRConnectionsAppCtn },
            c.createElement(
              "div",
              { className: _.SDRConnectionsAppTitle },
              "SDR Connections [BETA] - App ",
              e.appId,
              " ",
            ),
            v && c.createElement("div", { className: _.ErrMsg }, v),
            c.createElement(
              "div",
              { className: _.SearchParamsCtr },
              c.createElement(
                "div",
                {
                  className: (0, i.Z)(
                    "DialogInputLabelGroup",
                    _.ConnectionKindGroup,
                  ),
                },
                c.createElement(
                  "div",
                  { className: "DialogLabel" },
                  "Connection kind",
                ),
                c.createElement(
                  o.SY,
                  { value: b, onChange: (e) => P(e) },
                  c.createElement(o.EU, { value: "" }, "Any"),
                  c.createElement(o.EU, { value: "ded" }, "Dedicated server"),
                  c.createElement(o.EU, { value: "p2p" }, "Peer-to-Peer"),
                ),
              ),
              c.createElement(
                "div",
                { className: _.AppFieldPair },
                c.createElement(o.II, {
                  type: "text",
                  value: N,
                  disabled: G,
                  label: "Client",
                  onChange: (e) => S(e.currentTarget.value),
                }),
                c.createElement(o.II, {
                  type: "text",
                  value: y,
                  disabled: G,
                  label: A,
                  onChange: (e) => g(e.currentTarget.value),
                }),
              ),
              c.createElement(
                "div",
                { className: _.AppFieldPair },
                c.createElement(o.II, {
                  type: "text",
                  value: F,
                  disabled: G,
                  label: "App field name 1",
                  onChange: (e) => D(e.currentTarget.value),
                }),
                c.createElement(o.II, {
                  type: "text",
                  value: I,
                  disabled: G,
                  label: "App field value 1",
                  onChange: (e) => R(e.currentTarget.value),
                }),
              ),
              c.createElement(
                "div",
                { className: _.SubmitButtonCtn },
                c.createElement(
                  o.KM,
                  {
                    onClick: () => {
                      let e = new URLSearchParams();
                      N && e.set("client_id", N),
                        y && e.set("peer_id", y),
                        b && e.set("kind", b),
                        F &&
                          I &&
                          (e.set("app_name1", F), e.set("app_value1", I));
                      let n = Object.assign({}, t.location);
                      (n.search = e.toString()),
                        n != t.location && t.push(n),
                        w(k + 1);
                    },
                    disabled: l,
                  },
                  "Search ",
                ),
              ),
            ),
            l && c.createElement(p.V, null),
            T,
          ),
        );
      }
    },
  },
]);
