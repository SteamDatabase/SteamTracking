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
    26193: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => A });
      var n = t(7850),
        l = t(41735),
        i = t.n(l),
        a = t(90626),
        r = t(52038),
        c = t(37085),
        o = t(92757),
        d = t(16676),
        h = t(84811),
        u = t(61859),
        m = t(68797),
        p = t(78327),
        x = t(97712),
        _ = t(22797),
        j = t(91675),
        f = t(3049);
      function N(e) {
        return (0, n.jsxs)("span", {
          className: (0, r.A)(x.GenericLabeledItem, e.className),
          children: [
            (0, n.jsx)("span", {
              className: x.CxnGenericDataLabel,
              children: e.label,
            }),
            (0, n.jsx)("span", {
              className: x.CxnGenericData,
              children: e.children,
            }),
          ],
        });
      }
      function v(e) {
        const s = e.host,
          t = s.type + ":" + s.id;
        let l = "peer" == e.host_role ? "Peer" : "Client",
          i = null;
        if (s.data_center)
          (l = "Gameserver"),
            (i = (0, n.jsxs)(a.Fragment, {
              children: [
                (0, n.jsx)("span", { className: x.host_id, children: t }),
                " in ",
                (0, n.jsx)("span", {
                  className: x.GameServerDataCenter,
                  children: s.data_center,
                }),
              ],
            }));
        else if (s.steam_persona) {
          const e = p.TS.COMMUNITY_BASE_URL + "/profiles/" + s.id;
          i = (0, n.jsxs)(a.Fragment, {
            children: [
              (0, n.jsx)("span", {
                className: x.host_id,
                children: (0, n.jsx)("a", {
                  href: e,
                  children: s.steam_persona,
                }),
              }),
              " (",
              (0, n.jsx)("span", { className: x.host_id, children: t }),
              ")",
            ],
          });
        } else
          i = (0, n.jsx)(a.Fragment, {
            children: (0, n.jsx)("span", { className: x.host_id, children: t }),
          });
        return (0, n.jsxs)("div", {
          className: (0, r.A)(
            x.ConnectionClientInfo,
            s.data_center && x.HostIsGameserver,
          ),
          children: [
            (0, n.jsxs)("div", {
              className: x.HostIDAndConnectionCtr,
              children: [
                (0, n.jsx)(N, {
                  className: x.HostIDInfo,
                  label: l,
                  children: i,
                }),
                null != s.connection_id &&
                  (0, n.jsx)(N, {
                    className: x.HostConnectionID,
                    label: "ConnectionID",
                    children: s.connection_id,
                  }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: x.ClientIPInfo,
              children: [
                s.addr &&
                  (0, n.jsx)(N, {
                    className: "addr",
                    label: "IP",
                    children: s.addr,
                  }),
                s.city_name &&
                  (0, n.jsx)(N, {
                    className: "city_name",
                    label: "City",
                    children: s.city_name,
                  }),
                s.country_code &&
                  (0, n.jsx)(N, {
                    className: "country_code",
                    label: "Country",
                    children: s.country_code,
                  }),
                s.as &&
                  (0, n.jsx)(N, {
                    className: "as",
                    label: "AS",
                    children: s.as,
                  }),
              ],
            }),
          ],
        });
      }
      function g(e, s) {
        return (
          null == s && (s = 0),
          e.toLocaleString((0, f.J)(), {
            minimumFractionDigits: s,
            maximumFractionDigits: s,
          })
        );
      }
      function C(e) {
        let s = 1e30,
          t = -1e30;
        if (e && e.ping_pctile)
          for (const n in e.ping_pctile) {
            const l = parseFloat(n);
            if (l >= 5 && l <= 95) {
              const l = e.ping_pctile[n];
              l < s && (s = l), l > t && (t = l);
            }
          }
        return [s, t];
      }
      function y(e) {
        let s = 1e30;
        if (e && e.quality_pctile)
          for (const t in e.quality_pctile) {
            const n = parseFloat(t);
            if (n >= 5 && n <= 95) {
              const n = e.quality_pctile[t];
              n < s && (s = n);
            }
          }
        return s;
      }
      function S(e, s, t) {
        const l = t > 0 ? s / t : 0,
          i = (100 * l).toFixed(1) + "%";
        return (0, n.jsxs)(
          "tr",
          {
            children: [
              (0, n.jsx)("th", { className: x.Label, children: e }),
              (0, n.jsx)("td", { className: x.Pct, children: i }),
              (0, n.jsxs)("td", {
                children: [
                  (0, n.jsx)("span", {
                    className: x.Bar,
                    style: { width: 90 * l + 1 + "px" },
                  }),
                  (0, n.jsx)("span", { className: x.Num, children: g(s) }),
                ],
              }),
            ],
          },
          e,
        );
      }
      function b(e, s) {
        if (!(s > 0)) return null;
        let t = [];
        for (let n = 0; n < e.length; ++n) t.push(S(e[n][0], e[n][1], s));
        return (0, n.jsx)("table", {
          className: x.Histogram,
          children: (0, n.jsx)("tbody", { children: t }),
        });
      }
      function P(e) {
        let s = [];
        for (let t = 0; t < e.length; ++t) {
          const [l, i] = e[t];
          null != i &&
            s.push(
              (0, n.jsxs)(
                "tr",
                {
                  children: [
                    (0, n.jsxs)("th", {
                      className: x.NTile,
                      children: [l, "% <="],
                    }),
                    (0, n.jsx)("td", { className: x.Value, children: i }),
                  ],
                },
                l,
              ),
            );
        }
        return s.length
          ? (0, n.jsx)("table", {
              className: x.Distribution,
              children: (0, n.jsx)("tbody", { children: s }),
            })
          : null;
      }
      function F(e) {
        return e >= 0 ? e.toFixed(0) + "ms" : "???";
      }
      function w(e) {
        const s = function (e) {
            const s = e >= 0 ? g(e) : "?";
            return (0, n.jsx)("td", {
              className: x.NumPkts,
              children: s + " pkts",
            });
          },
          t = function (e) {
            const s = e >= 0 ? g(e) : "?";
            return (0, n.jsx)("td", { className: x.KB, children: s + "kb" });
          },
          l = function (e, s) {
            let t = "";
            return (
              s > 0 && e >= 0 && (t = ((e / s) * 100).toFixed(3) + "%"),
              (0, n.jsx)("td", { className: x.Pct, children: t })
            );
          };
        return (0, n.jsxs)("div", {
          className: (0, r.A)(x.FlowPacketCounts, x.FlowStatsSection),
          children: [
            (0, n.jsx)("div", {
              className: x.FlowSectionTitle,
              children: "Summary counters",
            }),
            (0, n.jsx)("table", {
              children: (0, n.jsxs)("tbody", {
                children: [
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("th", { children: "Sent" }),
                      s(e.sent_pkt),
                      t(e.sent_kb),
                      (0, n.jsx)("td", { className: x.Spacer }),
                      (0, n.jsx)("th", { children: "Dropped" }),
                      s(e.drop),
                      l(e.drop, e.recv_seq),
                    ],
                  }),
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("th", { children: "Recv" }),
                      s(e.recv_pkt),
                      t(e.recv_kb),
                      (0, n.jsx)("td", { className: x.Spacer }),
                      (0, n.jsx)("th", { children: "Duplicate" }),
                      s(e.dup),
                      l(e.dup, e.recv_seq),
                    ],
                  }),
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("th", { children: "Recv w/ seq" }),
                      s(e.recv_seq),
                      (0, n.jsx)("td", {}),
                      (0, n.jsx)("td", { className: x.Spacer }),
                      (0, n.jsx)("th", { children: "Out of order" }),
                      s(e.ooo),
                      l(e.ooo, e.recv_seq),
                    ],
                  }),
                  (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("th", { children: "Summary" }),
                      (0, n.jsx)("td", {
                        colSpan: 2,
                        className: x.FlowQualityClass,
                        children: (0, n.jsx)("span", {
                          className: "flowqualityclass_" + e.quality_class,
                          children: e.quality_class,
                        }),
                      }),
                      (0, n.jsx)("td", { className: x.Spacer }),
                      (0, n.jsx)("th", { children: "Seq num lurch" }),
                      s(e.seqlurch),
                      l(e.seqlurch, e.recv_seq),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function k(e) {
        let s = null,
          t = null,
          l = 0;
        const i = e.quality_hist;
        if (i) {
          const e = [
            ["Perfect", i[100] || 0],
            [">99%", i[99] || 0],
            ["97-99%", i[97] || 0],
            ["95-97%", i[95] || 0],
            ["90-95%", i[90] || 0],
            ["75-90%", i[75] || 0],
            ["50-75%", i[50] || 0],
            ["<50%", i[1] || 0],
            ["Dead", i[0] || 0],
          ];
          for (let s = 0; s < e.length; ++s) l += e[s][1];
          s = b(e, l);
        }
        if (l <= 0) return null;
        const a = e.quality_pctile;
        if (a) {
          const e = (e) => (null == e ? void 0 : e + "%");
          t = P([
            [50, e(a[50])],
            [25, e(a[25])],
            [5, e(a[5])],
            [2, e(a[2])],
          ]);
        }
        const r = g(l) + " measurement intervals";
        return (0, n.jsxs)("div", {
          className: x.QualityBreakdown,
          children: [
            (0, n.jsx)("div", {
              className: x.FlowSectionTitle,
              children: "Quality interval breakdown",
            }),
            (0, n.jsx)("div", { className: x.numSamples, children: r }),
            s,
            t,
          ],
        });
      }
      function I(e) {
        let s = null;
        const t = e.ping_hist;
        let l = 0;
        if (t) {
          const e = [
            [0, t[25] || 0],
            [25, t[50] || 0],
            [50, t[75] || 0],
            [75, t[100] || 0],
            [100, t[125] || 0],
            [125, t[150] || 0],
            [150, t[200] || 0],
            [200, t[300] || 0],
            [300, t.max || 0],
          ];
          let i,
            a = 0;
          for (let s = 0; s < e.length; ++s)
            e[s][1] > 0 && (null == i && (i = s), (a = s + 1), (l += e[s][1]));
          if (l > 0) {
            (i = Math.max(0, i - 2)), (a = Math.min(e.length, a + 2));
            let t = [];
            for (let s = i; s < a; ++s) {
              let n,
                [r, c] = e[s];
              s == i && 0 == c && (r = 0),
                (n =
                  s + 1 >= e.length || (s + 1 >= a && 0 == c)
                    ? F(r) + "+"
                    : r + "-" + F(e[s + 1][0])),
                t.push(S(n, c, l));
            }
            s = (0, n.jsx)("table", {
              className: x.Histogram,
              children: (0, n.jsx)("tbody", { children: t }),
            });
          }
        }
        let i = null;
        const a = e.ping_pctile;
        if (a) {
          const e = (e) => (null == e ? void 0 : F(e));
          i = P([
            [5, e(a[5])],
            [50, e(a[50])],
            [75, e(a[75])],
            [95, e(a[95])],
            [98, e(a[98])],
          ]);
        }
        let r = null,
          c = 0;
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
          for (let s = 0; s < e.length; ++s) c += e[s][1];
          r = b(e, c);
        }
        if (!s && !i && !r) return null;
        const d = g(l) + " samples",
          h = g(c) + " samples";
        return (0, n.jsxs)("div", {
          className: x.PingBreakdown,
          children: [
            (0, n.jsxs)("div", {
              className: x.PingSection,
              children: [
                (0, n.jsx)("div", {
                  className: x.FlowSectionTitle,
                  children: "Round Trip Latency",
                }),
                (0, n.jsx)("div", { className: x.NumSamples, children: d }),
                s,
                i,
              ],
            }),
            (0, n.jsxs)("div", {
              className: x.JitterSection,
              children: [
                (0, n.jsx)("div", {
                  className: x.FlowSectionTitle,
                  children: "Jitter",
                }),
                (0, n.jsx)("div", { className: x.NumSamples, children: h }),
                r,
              ],
            }),
          ],
        });
      }
      function R(e) {
        const s = e.flow;
        return (0, n.jsxs)("div", {
          className: x.FlowQualityStats,
          children: [
            (0, n.jsx)("div", {
              className: x.FlowQualityTitle,
              children: e.title,
            }),
            s
              ? (0, n.jsxs)(a.Fragment, { children: [w(s), k(s), I(s)] })
              : (0, n.jsx)("div", {
                  className: x.NoFlowDataAvailable,
                  children: "(No data available)",
                }),
          ],
        });
      }
      function T(e) {
        const s = e.sess,
          t = e.cxn;
        let l = null,
          i = null;
        if (s.client_front || s.router_front) {
          const e =
            "ded" == t.kind
              ? "Front side statistics reported by client"
              : "Front side statistics reported by player";
          l = (0, n.jsxs)("div", {
            className: x.QualityFlowPairCtr,
            children: [
              (0, n.jsx)(R, { title: e, flow: s.client_front }),
              (0, n.jsx)(R, {
                title: "Front side statistics reported by relay",
                flow: s.router_front,
              }),
            ],
          });
        }
        return (
          (s.router_back || s.gameserver_back) &&
            (i = (0, n.jsxs)("div", {
              className: x.QualityFlowPairCtr,
              children: [
                (0, n.jsx)(R, {
                  title: "Back side statistics reported by relay",
                  flow: s.router_back,
                }),
                (0, n.jsx)(R, {
                  title: "Back side statistics reported by gameserver",
                  flow: s.gameserver_back,
                }),
              ],
            })),
          (0, n.jsxs)("div", {
            className: x.RelaySessionCtr,
            children: [
              (0, n.jsxs)("div", {
                className: x.RelayInfoCtr,
                children: [
                  (0, n.jsx)(N, {
                    label: "Relay address",
                    children: s.client.relay_addr,
                  }),
                  (0, n.jsx)(N, {
                    label: "Relay POP",
                    children: s.client.relay_cluster,
                  }),
                  (0, n.jsx)(N, {
                    label: "Active",
                    children: (0, j.R2)(s.active_time),
                  }),
                ],
              }),
              l,
              i,
            ],
          })
        );
      }
      function D(e) {
        const s = e.cxn,
          t = s.client,
          l = s.peer,
          i = s.client_e2e,
          r = s.peer_e2e,
          [c, o] = a.useState(!1),
          h = (function (e) {
            if (!e || !e.length) return null;
            let s = e[0];
            for (let t = 1; t < e.length; ++t) {
              const n = e[t];
              (n.primary > s.primary ||
                (n.primary == s.primary && n.active_time > s.active_time)) &&
                (s = n);
            }
            return s;
          })(s.client_sessions);
        let m = null,
          p = null,
          _ = null,
          f = null,
          g = null,
          S = null,
          b = null,
          P = [];
        if (h) {
          l &&
            h.client.connection_id == l.connection_id &&
            (!t || (h.client.connection_id, t.connection_id));
          if (h.start_time && h.duration) {
            const e = new Date(1e3 * h.start_time),
              s = new Date(1e3 * (h.start_time + h.duration)),
              t = u.pf.GetPreferredLocales(),
              l = e.toLocaleString(t, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              i = e.toLocaleString(t, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              a = s.toLocaleString(t, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              r = (0, j.R2)(h.duration);
            m = (0, n.jsxs)("span", {
              className: x.CxnTimeAndDuration,
              children: [
                (0, n.jsxs)(N, {
                  label: "Time",
                  children: [l, " ", i, "--", a],
                }),
                (0, n.jsx)(N, { label: "Duration", children: r }),
              ],
            });
          }
          if (
            (h.close_code &&
              (p = (0, n.jsxs)(N, {
                label: "Closed",
                className: x.CxnCloseInfo,
                children: [
                  h.close_type,
                  " ",
                  h.close_msg,
                  " (",
                  h.close_code,
                  ")",
                ],
              })),
            h.experience_class)
          ) {
            const e = h.class_reason ? ` (${h.class_reason})` : "";
            _ = (0, n.jsxs)(N, {
              label: "Experience",
              children: [
                (0, n.jsx)("span", {
                  className: "experience_" + h.experience_class,
                  children: h.experience_class,
                }),
                e,
              ],
            });
          }
        }
        if (s.app) {
          let e = Object.keys(s.app);
          if (e.length > 0) {
            e.sort();
            let t = [];
            for (let l of e)
              t.push((0, n.jsx)(N, { label: l, children: s.app[l] }));
            f = (0, n.jsxs)("div", {
              className: x.AppFieldsCtr,
              children: [
                (0, n.jsx)("span", {
                  className: x.AppFieldsTitle,
                  children: "Application fields:",
                }),
                t,
              ],
            });
          }
        }
        if (i || r) {
          const [e, t] = C(i),
            [l, a] = C(r),
            o = Math.min(e, l),
            d = Math.max(t, a);
          if (o <= d) {
            const e =
              0.03 * o + 2 < d
                ? `${o}--${d}ms`
                : Math.floor((o + d) / 2 + 0.5) + "ms";
            g = (0, n.jsx)(N, { label: "Ping", children: e });
          }
          const h = y(i),
            u = y(r),
            m = Math.min(h, u);
          if (
            (m >= 0 &&
              m <= 100 &&
              (S = (0, n.jsx)(N, {
                label: "Packet delivery",
                children: `${m.toFixed(2)}%`,
              })),
            c)
          ) {
            const e = "End-to-end statistics reported by client",
              t =
                "ded" == s.kind
                  ? "End-to-end statistics reported by gameserver"
                  : "End-to-end statistics reported by peer";
            b = (0, n.jsxs)("div", {
              className: x.QualityFlowPairCtr,
              children: [
                (0, n.jsx)(R, { title: e, flow: i }),
                (0, n.jsx)(R, { title: t, flow: r }),
              ],
            });
          }
        }
        if (c) {
          const e = function (e) {
              let s = [...e];
              return (
                s.sort((e, s) => (s.active_time || 0) - (e.active_time || 0)), s
              );
            },
            t = s.client_sessions && s.client_sessions.length > 0,
            l = s.peer_sessions && s.peer_sessions.length > 0;
          if (t) {
            "p2p" == s.kind || l
              ? P.push(
                  (0, n.jsx)("div", {
                    className: x.SessionsGroupHeader,
                    children: "Client relay sessions",
                  }),
                )
              : P.push(
                  (0, n.jsx)("div", {
                    className: x.SessionsGroupHeader,
                    children: "Relay sessions",
                  }),
                );
            for (const t of e(s.client_sessions))
              P.push((0, n.jsx)(T, { cxn: s, sess: t, host_role: "client" }));
          }
          if (l) {
            P.push(
              (0, n.jsx)("div", {
                className: x.SessionsGroupHeader,
                children: "Peer relay sessions",
              }),
            );
            for (const t of e(s.peer_sessions))
              P.push((0, n.jsx)(T, { cxn: s, sess: t, host_role: "peer" }));
          }
        }
        return (0, n.jsxs)(
          "div",
          {
            className: x.ConnectionCtr,
            children: [
              (0, n.jsxs)("div", {
                className: x.ConnectionHeader,
                children: [
                  (0, n.jsxs)("div", {
                    className: x.CxnSummary,
                    children: [m, g, S, _, f, p],
                  }),
                  (0, n.jsx)(d.Yh, {
                    className: x.ExpandDetailsCheckbox,
                    label: "Details",
                    checked: c,
                    onChange: o,
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: x.CxnPeersCtr,
                children: [
                  (0, n.jsx)(v, { host: s.client, host_role: "client" }),
                  (0, n.jsx)(v, { host: s.peer, host_role: "peer" }),
                ],
              }),
              b,
              P,
            ],
          },
          e.key,
        );
      }
      function A(e) {
        const s = (0, o.W6)(),
          t = e.appId,
          [l, u] = a.useState(!1),
          [j, f] = a.useState(""),
          [N, v] = a.useState(void 0),
          [g, C] = a.useState(""),
          [y, S] = a.useState(""),
          [b, P] = a.useState(""),
          [F, w] = a.useState(0),
          [k, I] = a.useState(""),
          [R, T] = a.useState("");
        a.useEffect(() => {
          let e = new URLSearchParams(s.location.search);
          const n = e.get("client_id") || "",
            l = e.get("peer_id") || "",
            a = e.get("kind") || "",
            r = e.get("app_name1") || "",
            o = e.get("app_value1") || "";
          if ((C(n), S(l), P(a), I(r), T(o), !e.toString() && 0 == F)) return;
          u(!0), f(""), t > 0 && e.set("appid", "" + t);
          const d =
            p.TS.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + e.toString();
          (async () => {
            try {
              const e = await i().get(d);
              e?.data?.success == c.R
                ? v(e.data.connections)
                : (console.error(
                    "sdrsessionsearch: OnPerformSearch error code  " +
                      e?.data?.success +
                      " msg: " +
                      e?.data?.msg,
                  ),
                  f(e?.data?.success + " msg: " + e?.data?.msg));
            } catch (e) {
              const s = (0, m.H)(e);
              console.error(
                "sdrsessionsearch: OnPerformSearch " + s.strErrorMsg,
                s,
              ),
                f(s.strErrorMsg);
            }
            u(!1);
          })();
        }, [t, s.location, F]);
        let A = null;
        if (void 0 !== N) {
          let e = [];
          for (const s of N) {
            const t =
              (s.client.id || "") + "-" + (s.client.connection_id || "");
            e.push((0, n.jsx)(D, { cxn: s }, t));
          }
          A = (0, n.jsxs)("div", {
            className: x.SearchResultsCtr,
            children: [
              (0, n.jsxs)("div", {
                className: x.SearchResultsTitle,
                children: ["Found ", N.length, " connection(s)"],
              }),
              e,
            ],
          });
        }
        const E = "ded" == b ? "Gameserver" : "Peer",
          G = !1,
          O = a.useId();
        return (0, n.jsx)(h.tH, {
          children: (0, n.jsxs)("div", {
            className: x.SDRConnectionsAppCtn,
            children: [
              (0, n.jsxs)("div", {
                className: x.SDRConnectionsAppTitle,
                children: [
                  (0, n.jsx)(n.Fragment, { children: "SDR Connections - " }),
                  e.appId > 0
                    ? (0, n.jsxs)(n.Fragment, { children: ["App ", e.appId] })
                    : (0, n.jsx)(n.Fragment, { children: "All apps" }),
                  (0, n.jsx)(n.Fragment, { children: " [BETA feature]" }),
                ],
              }),
              j && (0, n.jsx)("div", { className: x.ErrMsg, children: j }),
              (0, n.jsxs)("div", {
                className: x.SearchParamsCtr,
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, r.A)(
                      "DialogInputLabelGroup",
                      x.ConnectionKindGroup,
                    ),
                    children: [
                      (0, n.jsx)("div", {
                        id: O,
                        className: "DialogLabel",
                        children: "Connection kind",
                      }),
                      (0, n.jsxs)(d.zW, {
                        labelId: O,
                        value: b,
                        onChange: (e) => P(e),
                        children: [
                          (0, n.jsx)(d.a, { value: "", children: "Any" }),
                          (0, n.jsx)(d.a, {
                            value: "ded",
                            children: "Dedicated server",
                          }),
                          (0, n.jsx)(d.a, {
                            value: "p2p",
                            children: "Peer-to-Peer",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: x.AppFieldPair,
                    children: [
                      (0, n.jsx)(d.pd, {
                        type: "text",
                        value: g,
                        disabled: G,
                        label: "Client",
                        onChange: (e) => C(e.currentTarget.value),
                      }),
                      (0, n.jsx)(d.pd, {
                        type: "text",
                        value: y,
                        disabled: G,
                        label: E,
                        onChange: (e) => S(e.currentTarget.value),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: x.AppFieldPair,
                    children: [
                      (0, n.jsx)(d.pd, {
                        type: "text",
                        value: k,
                        disabled: G,
                        label: "App field name 1",
                        onChange: (e) => I(e.currentTarget.value),
                      }),
                      (0, n.jsx)(d.pd, {
                        type: "text",
                        value: R,
                        disabled: G,
                        label: "App field value 1",
                        onChange: (e) => T(e.currentTarget.value),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: x.SubmitButtonCtn,
                    children: (0, n.jsx)(d.jn, {
                      onClick: () => {
                        let e = new URLSearchParams();
                        g && e.set("client_id", g),
                          y && e.set("peer_id", y),
                          b && e.set("kind", b),
                          k &&
                            R &&
                            (e.set("app_name1", k), e.set("app_value1", R));
                        let t = { ...s.location };
                        (t.search = e.toString()),
                          t != s.location && s.push(t),
                          w(F + 1);
                      },
                      disabled: l,
                      children: "Search ",
                    }),
                  }),
                ],
              }),
              l && (0, n.jsx)(_.t, {}),
              A,
            ],
          }),
        });
      }
    },
  },
]);
