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
    23217: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => c });
      var s = n(42735),
        a = n(52868),
        r = n.n(a),
        l = n(67328);
      function c(e) {
        if (r().isCancel(e))
          return {
            strErrorMsg: "Action Cancelled:" + e,
            errorCode: s.s.k_EResultCancelled,
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
            if ("object" == typeof e && e instanceof l.gA)
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
              errorCode: s.s.k_EResultFail,
            }
          : {
              strErrorMsg: "Unknown Error: " + e,
              errorCode: s.s.k_EResultFail,
            };
      }
    },
    94527: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => x });
      var s = n(33940),
        a = n(52868),
        r = n.n(a),
        l = n(89526),
        c = n(19304),
        o = n(42735),
        i = n(59934),
        m = n(22444),
        d = n(17547),
        u = n(23217),
        p = n(32765),
        _ = n(14986),
        E = n(3301),
        f = n(72120);
      function C(e) {
        return l.createElement(
          "span",
          { className: (0, c.Z)(_.GenericLabeledItem, e.className) },
          l.createElement(
            "span",
            { className: _.CxnGenericDataLabel },
            e.label,
          ),
          l.createElement("span", { className: _.CxnGenericData }, e.children),
        );
      }
      function g(e) {
        const t = e.host,
          n = t.type + ":" + t.id;
        let s = "peer" == e.host_role ? "Peer" : "Client",
          a = null;
        if (t.data_center)
          (s = "Gameserver"),
            (a = l.createElement(
              l.Fragment,
              null,
              l.createElement("span", { className: _.host_id }, n),
              " in ",
              l.createElement(
                "span",
                { className: _.GameServerDataCenter },
                t.data_center,
              ),
            ));
        else if (t.steam_persona) {
          const e = p.De.COMMUNITY_BASE_URL + "/profiles/" + t.id;
          a = l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "span",
              { className: _.host_id },
              l.createElement("a", { href: e }, t.steam_persona),
            ),
            " (",
            l.createElement("span", { className: _.host_id }, n),
            ")",
          );
        } else
          a = l.createElement(
            l.Fragment,
            null,
            l.createElement("span", { className: _.host_id }, n),
          );
        return l.createElement(
          "div",
          {
            className: (0, c.Z)(
              _.ConnectionClientInfo,
              t.data_center && _.HostIsGameserver,
            ),
          },
          l.createElement(
            "div",
            { className: _.HostIDAndConnectionCtr },
            l.createElement(C, { className: _.HostIDInfo, label: s }, a),
            null != t.connection_id &&
              l.createElement(
                C,
                { className: _.HostConnectionID, label: "ConnectionID" },
                t.connection_id,
              ),
          ),
          l.createElement(
            "div",
            { className: _.ClientIPInfo },
            t.addr &&
              l.createElement(C, { className: "addr", label: "IP" }, t.addr),
            t.city_name &&
              l.createElement(
                C,
                { className: "city_name", label: "City" },
                t.city_name,
              ),
            t.country_code &&
              l.createElement(
                C,
                { className: "country_code", label: "Country" },
                t.country_code,
              ),
            t.as && l.createElement(C, { className: "as", label: "AS" }, t.as),
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
      function h(e) {
        let t = 1e30,
          n = -1e30;
        if (e && e.ping_pctile)
          for (const s in e.ping_pctile) {
            const a = parseFloat(s);
            if (a >= 5 && a <= 95) {
              const a = e.ping_pctile[s];
              a < t && (t = a), a > n && (n = a);
            }
          }
        return [t, n];
      }
      function y(e) {
        let t = 1e30;
        if (e && e.quality_pctile)
          for (const n in e.quality_pctile) {
            const s = parseFloat(n);
            if (s >= 5 && s <= 95) {
              const s = e.quality_pctile[n];
              s < t && (t = s);
            }
          }
        return t;
      }
      function N(e, t, n) {
        const s = n > 0 ? t / n : 0,
          a = (100 * s).toFixed(1) + "%";
        return l.createElement(
          "tr",
          { key: e },
          l.createElement("th", { className: _.Label }, e),
          l.createElement("td", { className: _.Pct }, a),
          l.createElement(
            "td",
            null,
            l.createElement("span", {
              className: _.Bar,
              style: { width: 90 * s + 1 + "px" },
            }),
            l.createElement("span", { className: _.Num }, v(t)),
          ),
        );
      }
      function S(e, t) {
        if (!(t > 0)) return null;
        let n = [];
        for (let s = 0; s < e.length; ++s) n.push(N(e[s][0], e[s][1], t));
        return l.createElement(
          "table",
          { className: _.Histogram },
          l.createElement("tbody", null, n),
        );
      }
      function b(e) {
        let t = [];
        for (let n = 0; n < e.length; ++n) {
          const [s, a] = e[n];
          null != a &&
            t.push(
              l.createElement(
                "tr",
                { key: s },
                l.createElement("th", { className: _.NTile }, s, "% <="),
                l.createElement("td", { className: _.Value }, a),
              ),
            );
        }
        return t.length
          ? l.createElement(
              "table",
              { className: _.Distribution },
              l.createElement("tbody", null, t),
            )
          : null;
      }
      function k(e) {
        return e >= 0 ? e.toFixed(0) + "ms" : "???";
      }
      function P(e) {
        const t = e.flow;
        return l.createElement(
          "div",
          { className: _.FlowQualityStats },
          l.createElement("div", { className: _.FlowQualityTitle }, e.title),
          t
            ? l.createElement(
                l.Fragment,
                null,
                (function (e) {
                  const t = function (e) {
                      const t = e >= 0 ? v(e) : "?";
                      return l.createElement(
                        "td",
                        { className: _.NumPkts },
                        t + " pkts",
                      );
                    },
                    n = function (e) {
                      const t = e >= 0 ? v(e) : "?";
                      return l.createElement(
                        "td",
                        { className: _.KB },
                        t + "kb",
                      );
                    },
                    s = function (e, t) {
                      let n = "";
                      return (
                        t > 0 &&
                          e >= 0 &&
                          (n = ((e / t) * 100).toFixed(3) + "%"),
                        l.createElement("td", { className: _.Pct }, n)
                      );
                    };
                  return l.createElement(
                    "div",
                    {
                      className: (0, c.Z)(
                        _.FlowPacketCounts,
                        _.FlowStatsSection,
                      ),
                    },
                    l.createElement(
                      "div",
                      { className: _.FlowSectionTitle },
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
                          n(e.sent_kb),
                          l.createElement("td", { className: _.Spacer }),
                          l.createElement("th", null, "Dropped"),
                          t(e.drop),
                          s(e.drop, e.recv_seq),
                        ),
                        l.createElement(
                          "tr",
                          null,
                          l.createElement("th", null, "Recv"),
                          t(e.recv_pkt),
                          n(e.recv_kb),
                          l.createElement("td", { className: _.Spacer }),
                          l.createElement("th", null, "Duplicate"),
                          t(e.dup),
                          s(e.dup, e.recv_seq),
                        ),
                        l.createElement(
                          "tr",
                          null,
                          l.createElement("th", null, "Recv w/ seq"),
                          t(e.recv_seq),
                          l.createElement("td", null),
                          l.createElement("td", { className: _.Spacer }),
                          l.createElement("th", null, "Out of order"),
                          t(e.ooo),
                          s(e.ooo, e.recv_seq),
                        ),
                        l.createElement(
                          "tr",
                          null,
                          l.createElement("th", null, "Summary"),
                          l.createElement(
                            "td",
                            { colSpan: 2, className: _.FlowQualityClass },
                            l.createElement(
                              "span",
                              {
                                className:
                                  "flowqualityclass_" + e.quality_class,
                              },
                              e.quality_class,
                            ),
                          ),
                          l.createElement("td", { className: _.Spacer }),
                          l.createElement("th", null, "Seq num lurch"),
                          t(e.seqlurch),
                          s(e.seqlurch, e.recv_seq),
                        ),
                      ),
                    ),
                  );
                })(t),
                (function (e) {
                  let t = null,
                    n = null,
                    s = 0;
                  const a = e.quality_hist;
                  if (a) {
                    const e = [
                      ["Perfect", a[100] || 0],
                      [">99%", a[99] || 0],
                      ["97-99%", a[97] || 0],
                      ["95-97%", a[95] || 0],
                      ["90-95%", a[90] || 0],
                      ["75-90%", a[75] || 0],
                      ["50-75%", a[50] || 0],
                      ["<50%", a[1] || 0],
                      ["Dead", a[0] || 0],
                    ];
                    for (let t = 0; t < e.length; ++t) s += e[t][1];
                    t = S(e, s);
                  }
                  if (s <= 0) return null;
                  const r = e.quality_pctile;
                  if (r) {
                    const e = (e) => (null == e ? void 0 : e + "%");
                    n = b([
                      [50, e(r[50])],
                      [25, e(r[25])],
                      [5, e(r[5])],
                      [2, e(r[2])],
                    ]);
                  }
                  const c = v(s) + " measurement intervals";
                  return l.createElement(
                    "div",
                    { className: _.QualityBreakdown },
                    l.createElement(
                      "div",
                      { className: _.FlowSectionTitle },
                      "Quality interval breakdown",
                    ),
                    l.createElement("div", { className: _.numSamples }, c),
                    t,
                    n,
                  );
                })(t),
                (function (e) {
                  let t = null;
                  const n = e.ping_hist;
                  let s = 0;
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
                    let a,
                      r = 0;
                    for (let t = 0; t < e.length; ++t)
                      e[t][1] > 0 &&
                        (null == a && (a = t), (r = t + 1), (s += e[t][1]));
                    if (s > 0) {
                      (a = Math.max(0, a - 2)), (r = Math.min(e.length, r + 2));
                      let n = [];
                      for (let t = a; t < r; ++t) {
                        let l,
                          [c, o] = e[t];
                        t == a && 0 == o && (c = 0),
                          (l =
                            t + 1 >= e.length || (t + 1 >= r && 0 == o)
                              ? k(c) + "+"
                              : c + "-" + k(e[t + 1][0])),
                          n.push(N(l, o, s));
                      }
                      t = l.createElement(
                        "table",
                        { className: _.Histogram },
                        l.createElement("tbody", null, n),
                      );
                    }
                  }
                  let a = null;
                  const r = e.ping_pctile;
                  if (r) {
                    const e = (e) => (null == e ? void 0 : k(e));
                    a = b([
                      [5, e(r[5])],
                      [50, e(r[50])],
                      [75, e(r[75])],
                      [95, e(r[95])],
                      [98, e(r[98])],
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
                    c = S(e, o);
                  }
                  if (!t && !a && !c) return null;
                  const m = v(s) + " samples",
                    d = v(o) + " samples";
                  return l.createElement(
                    "div",
                    { className: _.PingBreakdown },
                    l.createElement(
                      "div",
                      { className: _.PingSection },
                      l.createElement(
                        "div",
                        { className: _.FlowSectionTitle },
                        "Round Trip Latency",
                      ),
                      l.createElement("div", { className: _.NumSamples }, m),
                      t,
                      a,
                    ),
                    l.createElement(
                      "div",
                      { className: _.JitterSection },
                      l.createElement(
                        "div",
                        { className: _.FlowSectionTitle },
                        "Jitter",
                      ),
                      l.createElement("div", { className: _.NumSamples }, d),
                      c,
                    ),
                  );
                })(t),
              )
            : l.createElement(
                "div",
                { className: _.NoFlowDataAvailable },
                "(No data available)",
              ),
        );
      }
      function w(e) {
        const t = e.sess,
          n = e.cxn;
        let s = null,
          a = null;
        if (t.client_front || t.router_front) {
          const e =
            "ded" == n.kind
              ? "End-to-end statistics reported by client"
              : "End-to-end statistics reported by player";
          s = l.createElement(
            "div",
            { className: _.QualityFlowPairCtr },
            l.createElement(P, { title: e, flow: t.client_front }),
            l.createElement(P, {
              title: "Front side statistics reported by relay",
              flow: t.router_front,
            }),
          );
        }
        return (
          (t.router_back || t.gameserver_back) &&
            (a = l.createElement(
              "div",
              { className: _.QualityFlowPairCtr },
              l.createElement(P, {
                title: "Back side statistics reported by relay",
                flow: t.router_back,
              }),
              l.createElement(P, {
                title: "Back side statistics reported by gameserver",
                flow: t.gameserver_back,
              }),
            )),
          l.createElement(
            "div",
            { className: _.RelaySessionCtr },
            l.createElement(
              "div",
              { className: _.RelayInfoCtr },
              l.createElement(
                C,
                { label: "Relay address" },
                t.client.relay_addr,
              ),
              l.createElement(
                C,
                { label: "Relay POP" },
                t.client.relay_cluster,
              ),
              l.createElement(C, { label: "Active" }, (0, f.jA)(t.active_time)),
            ),
            s,
            a,
          )
        );
      }
      function F(e) {
        const t = e.cxn,
          n = t.client,
          s = t.peer,
          a = t.client_e2e,
          r = t.peer_e2e,
          [c, o] = l.useState(!1),
          i = (function (e) {
            if (!e || !e.length) return null;
            let t = e[0];
            for (let n = 1; n < e.length; ++n) {
              const s = e[n];
              (s.primary > t.primary ||
                (s.primary == t.primary && s.active_time > t.active_time)) &&
                (t = s);
            }
            return t;
          })(t.client_sessions);
        let d = null,
          u = null,
          p = null,
          E = null,
          v = null,
          N = null,
          S = null,
          b = [];
        if (i) {
          s &&
            i.client.connection_id == s.connection_id &&
            (!n || (i.client.connection_id, n.connection_id));
          if (i.start_time && i.duration) {
            const e = new Date(1e3 * i.start_time),
              t = new Date(1e3 * (i.start_time + i.duration)),
              n = void 0,
              s = e.toLocaleString(n, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              a = e.toLocaleString(n, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              r = t.toLocaleString(n, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              c = (0, f.jA)(i.duration);
            d = l.createElement(
              "span",
              { className: _.CxnTimeAndDuration },
              l.createElement(C, { label: "Time" }, s, " ", a, "--", r),
              l.createElement(C, { label: "Duration" }, c),
            );
          }
          if (
            (i.close_code &&
              (u = l.createElement(
                C,
                { label: "Closed", className: _.CxnCloseInfo },
                i.close_type,
                " ",
                i.close_msg,
                " (",
                i.close_code,
                ")",
              )),
            i.experience_class)
          ) {
            const e = i.class_reason ? ` (${i.class_reason})` : "";
            p = l.createElement(
              C,
              { label: "Experience" },
              l.createElement(
                "span",
                { className: "experience_" + i.experience_class },
                i.experience_class,
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
            for (let s of e) n.push(l.createElement(C, { label: s }, t.app[s]));
            E = l.createElement(
              "div",
              { className: _.AppFieldsCtr },
              l.createElement(
                "span",
                { className: _.AppFieldsTitle },
                "Application fields:",
              ),
              n,
            );
          }
        }
        if (a || r) {
          const [e, n] = h(a),
            [s, o] = h(r),
            i = Math.min(e, s),
            m = Math.max(n, o);
          if (i <= m) {
            const e =
              0.03 * i + 2 < m
                ? `${i}--${m}ms`
                : Math.floor((i + m) / 2 + 0.5) + "ms";
            v = l.createElement(C, { label: "Ping" }, e);
          }
          const d = y(a),
            u = y(r),
            p = Math.min(d, u);
          if (
            (p >= 0 &&
              p <= 100 &&
              (N = l.createElement(
                C,
                { label: "Packet delivery" },
                `${p.toFixed(2)}%`,
              )),
            c)
          ) {
            const e = "End-to-end statistics reported by client",
              n =
                "ded" == t.kind
                  ? "End-to-end statistics reported by gameserver"
                  : "End-to-end statistics reported by peer";
            S = l.createElement(
              "div",
              { className: _.QualityFlowPairCtr },
              l.createElement(P, { title: e, flow: a }),
              l.createElement(P, { title: n, flow: r }),
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
            n = t.client_sessions && t.client_sessions.length > 0,
            s = t.peer_sessions && t.peer_sessions.length > 0;
          if (n) {
            "p2p" == t.kind || s
              ? b.push(
                  l.createElement(
                    "div",
                    { className: _.SessionsGroupHeader },
                    "Client relay sessions",
                  ),
                )
              : b.push(
                  l.createElement(
                    "div",
                    { className: _.SessionsGroupHeader },
                    "Relay sessions",
                  ),
                );
            for (const n of e(t.client_sessions))
              b.push(
                l.createElement(w, { cxn: t, sess: n, host_role: "client" }),
              );
          }
          if (s) {
            b.push(
              l.createElement(
                "div",
                { className: _.SessionsGroupHeader },
                "Peer relay sessions",
              ),
            );
            for (const n of e(t.peer_sessions))
              b.push(
                l.createElement(w, { cxn: t, sess: n, host_role: "peer" }),
              );
          }
        }
        return l.createElement(
          "div",
          { className: _.ConnectionCtr, key: e.key },
          l.createElement(
            "div",
            { className: _.ConnectionHeader },
            l.createElement(
              "div",
              { className: _.CxnSummary },
              d,
              v,
              N,
              p,
              E,
              u,
            ),
            l.createElement(m.ji, {
              className: _.ExpandDetailsCheckbox,
              label: "Details",
              checked: c,
              onChange: o,
            }),
          ),
          l.createElement(
            "div",
            { className: _.CxnPeersCtr },
            l.createElement(g, { host: t.client, host_role: "client" }),
            l.createElement(g, { host: t.peer, host_role: "peer" }),
          ),
          S,
          b,
        );
      }
      function x(e) {
        const t = (0, i.k6)(),
          n = e.appId,
          [a, f] = l.useState(!1),
          [C, g] = l.useState(""),
          [v, h] = l.useState(void 0),
          [y, N] = l.useState(""),
          [S, b] = l.useState(""),
          [k, P] = l.useState(""),
          [w, x] = l.useState(0),
          [D, R] = l.useState(""),
          [I, T] = l.useState("");
        l.useEffect(() => {
          let e = new URLSearchParams(t.location.search);
          const a = e.get("client_id") || "",
            l = e.get("peer_id") || "",
            c = e.get("kind") || "",
            i = e.get("app_name1") || "",
            m = e.get("app_value1") || "";
          if ((N(a), b(l), P(c), R(i), T(m), !e.toString() && 0 == w)) return;
          f(!0), g(""), e.set("appid", "" + n);
          const d =
            p.De.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + e.toString();
          (() => {
            (0, s.mG)(this, void 0, void 0, function* () {
              var e, t, n, s, a;
              try {
                const l = yield r().get(d);
                (null === (e = null == l ? void 0 : l.data) || void 0 === e
                  ? void 0
                  : e.success) == o.s.k_EResultOK
                  ? h(l.data.connections)
                  : (console.error(
                      "sdrsessionsearch: OnPerformSearch error code  " +
                        (null === (t = null == l ? void 0 : l.data) ||
                        void 0 === t
                          ? void 0
                          : t.success) +
                        " msg: " +
                        (null === (n = null == l ? void 0 : l.data) ||
                        void 0 === n
                          ? void 0
                          : n.msg),
                    ),
                    g(
                      (null === (s = null == l ? void 0 : l.data) ||
                      void 0 === s
                        ? void 0
                        : s.success) +
                        " msg: " +
                        (null === (a = null == l ? void 0 : l.data) ||
                        void 0 === a
                          ? void 0
                          : a.msg),
                    ));
              } catch (e) {
                const t = (0, u.l)(e);
                console.error(
                  "sdrsessionsearch: OnPerformSearch " + t.strErrorMsg,
                  t,
                );
              }
              f(!1);
            });
          })();
        }, [n, t.location, w]);
        let A = null;
        if (void 0 !== v) {
          let e = [];
          for (const t of v) {
            const n =
              (t.client.id || "") + "-" + (t.client.connection_id || "");
            e.push(l.createElement(F, { key: n, cxn: t }));
          }
          A = l.createElement(
            "div",
            { className: _.SearchResultsCtr },
            l.createElement(
              "div",
              { className: _.SearchResultsTitle },
              "Found ",
              v.length,
              " connection(s)",
            ),
            e,
          );
        }
        const G = "ded" == k ? "Gameserver" : "Peer",
          M = !1;
        return l.createElement(
          d.SV,
          null,
          l.createElement(
            "div",
            { className: _.SDRConnectionsAppCtn },
            l.createElement(
              "div",
              { className: _.SDRConnectionsAppTitle },
              "SDR Connections [BETA] - App ",
              e.appId,
              " ",
            ),
            C && l.createElement("div", { className: _.ErrMsg }, C),
            l.createElement(
              "div",
              { className: _.SearchParamsCtr },
              l.createElement(
                "div",
                {
                  className: (0, c.Z)(
                    "DialogInputLabelGroup",
                    _.ConnectionKindGroup,
                  ),
                },
                l.createElement(
                  "div",
                  { className: "DialogLabel" },
                  "Connection kind",
                ),
                l.createElement(
                  m.SY,
                  { value: k, onChange: (e) => P(e) },
                  l.createElement(m.EU, { value: "" }, "Any"),
                  l.createElement(m.EU, { value: "ded" }, "Dedicated server"),
                  l.createElement(m.EU, { value: "p2p" }, "Peer-to-Peer"),
                ),
              ),
              l.createElement(
                "div",
                { className: _.AppFieldPair },
                l.createElement(m.II, {
                  type: "text",
                  value: y,
                  disabled: M,
                  label: "Client",
                  onChange: (e) => N(e.currentTarget.value),
                }),
                l.createElement(m.II, {
                  type: "text",
                  value: S,
                  disabled: M,
                  label: G,
                  onChange: (e) => b(e.currentTarget.value),
                }),
              ),
              l.createElement(
                "div",
                { className: _.AppFieldPair },
                l.createElement(m.II, {
                  type: "text",
                  value: D,
                  disabled: M,
                  label: "App field name 1",
                  onChange: (e) => R(e.currentTarget.value),
                }),
                l.createElement(m.II, {
                  type: "text",
                  value: I,
                  disabled: M,
                  label: "App field value 1",
                  onChange: (e) => T(e.currentTarget.value),
                }),
              ),
              l.createElement(
                "div",
                { className: _.SubmitButtonCtn },
                l.createElement(
                  m.KM,
                  {
                    onClick: () => {
                      let e = new URLSearchParams();
                      y && e.set("client_id", y),
                        S && e.set("peer_id", S),
                        k && e.set("kind", k),
                        D &&
                          I &&
                          (e.set("app_name1", D), e.set("app_value1", I));
                      let n = Object.assign({}, t.location);
                      (n.search = e.toString()),
                        n != t.location && t.push(n),
                        x(w + 1);
                    },
                    disabled: a,
                  },
                  "Search ",
                ),
              ),
            ),
            a && l.createElement(E.V, null),
            A,
          ),
        );
      }
    },
  },
]);
