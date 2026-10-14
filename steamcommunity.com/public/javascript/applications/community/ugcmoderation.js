/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7102],
    {
      11038: (b, A, e) => {
        "use strict";
        e.r(A), e.d(A, { UGCBanDialogOnGlobalVariable: () => U });
        var t = e(7850),
          i = e(68031),
          S = e(15252),
          O = e(75083),
          R = e(1522),
          p = e(26072),
          L = e(86392),
          g = e(14432),
          Y = e(64388),
          E = e(90626);
        function m(v) {
          return p.u.Localize("#moderation_ugcban_default_note", (0, L.Jt)(v));
        }
        function U() {
          const [v, N] = E.useState(null),
            [d, F] = E.useState(null),
            [K, f] = E.useState(!1),
            [o, l] = E.useState("");
          if (
            (E.useEffect(
              () => (
                (window.ShowUGCBanDialog = (a, h) => {
                  F(null),
                    f(!1),
                    l(""),
                    N({ cItems: a.length, fnOnConfirm: h });
                }),
                () => {
                  delete window.ShowUGCBanDialog;
                }
              ),
              [],
            ),
            !v)
          )
            return null;
          const C = () => N(null),
            c = () => {
              d === null || !o.trim() || (v.fnOnConfirm(d, o.trim()), C());
            },
            j = (a) => {
              a !== null &&
                ((!o.trim() || (d !== null && o === m(d))) && l(m(a)), F(a)),
                f(!1);
            },
            I = v.cItems > 1 ? `Ban ${v.cItems} items` : "Ban item";
          return (0, t.jsxs)(Y.s, {
            onClose: C,
            strTitle: I,
            children: [
              K && (0, t.jsx)(g.F, { reasons: (0, L.cd)(), onSelect: j }),
              !K &&
                (0, t.jsxs)(i.s, {
                  direction: "column",
                  gap: "2",
                  minWidth: "400px",
                  children: [
                    (0, t.jsxs)(i.s, {
                      direction: "row",
                      gap: "2",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, t.jsx)(S.EY, { children: "Select a reason:" }),
                        (0, t.jsx)(O.$, {
                          size: "1",
                          color: "dull",
                          onClick: () => f(!0),
                          children:
                            d === null ? "Click to select..." : (0, L.Jt)(d),
                        }),
                      ],
                    }),
                    (0, t.jsx)(S.EY, { children: "Note:" }),
                    (0, t.jsx)(R.f, {
                      value: o,
                      onTextChange: (a) => l(a),
                      maxLength: 256,
                    }),
                    (0, t.jsxs)(i.s, {
                      direction: "row",
                      gap: "2",
                      justify: "end",
                      marginTop: "3",
                      children: [
                        (0, t.jsx)(O.$, {
                          onClick: C,
                          color: "dull",
                          children: "Cancel",
                        }),
                        (0, t.jsx)(O.$, {
                          disabled: d === null || !o.trim(),
                          onClick: c,
                          children: "Ban",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
      },
      31832: (b, A, e) => {
        "use strict";
        e.r(A), e.d(A, { UGCModerationSubjectPanel: () => D });
        var t = e(7850),
          i = e(15252),
          S = e(68031),
          O = e(75083),
          R = e(21663),
          p = e(64981),
          L = e(49527),
          g = e(72609),
          Y = e(64388),
          E = e(90626),
          m = e(86067),
          U = e(13725),
          v = e(46085),
          N = e(86392),
          d = e(72524);
        const F = 0,
          K = 1,
          f = 2,
          o = 3;
        var l = e(64238),
          C = e.n(l),
          c = e(93249),
          j = e.n(c);
        function I(n) {
          return !!n && n !== o;
        }
        function a(n) {
          return I(n.status)
            ? (0, t.jsxs)("span", {
                className: C()(j().Pill, n.className),
                children: [n.label, n.status === K && "?"],
              })
            : null;
        }
        function h(n) {
          return (0, t.jsx)(a, {
            status: n.status,
            className: j().TerrorismPill,
            label: "Terrorism",
          });
        }
        function T(n) {
          return (0, t.jsx)(a, {
            status: n.status,
            className: j().CSAMPill,
            label: "CSAM",
          });
        }
        function z(n) {
          return (0, t.jsx)(a, {
            status: n.status,
            className: j().ViolencePill,
            label: "Violent threat",
          });
        }
        function $(n) {
          const { subject: s } = n;
          return !I(s.terrorism_status) &&
            !I(s.csam_status) &&
            !I(s.credible_threat_of_violence_status)
            ? null
            : (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(h, { status: s.terrorism_status }),
                  (0, t.jsx)(T, { status: s.csam_status }),
                  (0, t.jsx)(z, {
                    status: s.credible_threat_of_violence_status,
                  }),
                ],
              });
        }
        function y(n) {
          return { subject_type: p.z8, published_file_id: n };
        }
        function W(n) {
          return (0, v.OI)(y(n));
        }
        function G(n) {
          var s, u, r;
          const M = (0, v.w3)(y(n.publishedFileID)),
            [V, Q] = (0, E.useState)(!1);
          if (M.isPending) return null;
          if (M.isError)
            return (0, t.jsx)(i.EY, {
              children: m.T.Localize("#ugcsubjectpanel_error"),
            });
          const B = (s = M.data.subjects) == null ? void 0 : s[0];
          return B
            ? (0, t.jsxs)(S.s, {
                direction: "column",
                gap: "1",
                children: [
                  (0, t.jsx)(i.EY, { children: (0, N.hl)(B) }),
                  (0, t.jsx)($, { subject: B }),
                  (0, t.jsx)(i.EY, {
                    children: m.T.Localize(
                      "#forumsubjectlist_subjectreportsummary",
                      (u = B.unresolved_report_count) != null ? u : 0,
                      (r = B.unresolved_dispute_count) != null ? r : 0,
                    ),
                  }),
                  (0, t.jsxs)(S.s, {
                    direction: "row",
                    gap: "2",
                    children: [
                      (0, t.jsx)(O.$, {
                        size: "1",
                        color: "dull",
                        onClick: () => Q(!0),
                        children: m.T.Localize("#ugcsubjectpanel_history"),
                      }),
                      (0, t.jsx)(Z, { subject: B }),
                      (0, t.jsx)(x, { subject: B }),
                    ],
                  }),
                  V && (0, t.jsx)(P, { subject: B, onClose: () => Q(!1) }),
                ],
              })
            : null;
        }
        function Z(n) {
          const { subject: s } = n,
            u = (0, v.YL)(s.reported_content_id ? [s.reported_content_id] : []),
            r =
              !!s.assigned_moderator_steamid &&
              s.assigned_moderator_steamid !== "0";
          return !s.reported_content_id ||
            !r ||
            s.assigned_moderator_steamid !== g.iA.steamid
            ? null
            : (0, t.jsx)(O.$, {
                size: "1",
                color: "dull",
                loading: u.isPending,
                onClick: () => u.mutate(),
                children: m.T.Localize("#ugcsubjectpanel_release"),
              });
        }
        function x(n) {
          const { subject: s } = n,
            [u, r] = (0, E.useState)(!1);
          return !s.reported_content_id || s.resolved !== L.z_
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(O.$, {
                    size: "1",
                    color: "dull",
                    onClick: () => r(!0),
                    children: m.T.Localize("#moderation_escalation_escalate"),
                  }),
                  u &&
                    (0, t.jsx)(Y.s, {
                      onClose: () => r(!1),
                      strTitle: m.T.Localize("#moderation_escalation_escalate"),
                      children: (0, t.jsx)(d.R, {
                        reportedContentID: s.reported_content_id,
                        onClose: () => r(!1),
                      }),
                    }),
                ],
              });
        }
        function P(n) {
          const { subject: s, onClose: u } = n,
            [r, M] = (0, E.useState)("reports");
          return (0, t.jsx)(Y.s, {
            onClose: u,
            strTitle: m.T.Localize("#ugcsubjectpanel_dialogtitle"),
            children: (0, t.jsxs)(S.s, {
              direction: "column",
              gap: "2",
              children: [
                (0, t.jsxs)(R.I.Root, {
                  value: r,
                  onValueChange: (V) => M(V),
                  children: [
                    (0, t.jsx)(R.I.Item, {
                      value: "reports",
                      children: m.T.Localize("#ugcsubjectpanel_reports"),
                    }),
                    (0, t.jsx)(R.I.Item, {
                      value: "history",
                      children: m.T.Localize("#ugcsubjectpanel_history"),
                    }),
                  ],
                }),
                r === "reports" && (0, t.jsx)(U.lX, { subject: s }),
                r === "history" &&
                  (0, t.jsx)(U.B8, {
                    reportedContentID: s.reported_content_id,
                  }),
              ],
            }),
          });
        }
        var _ = e(29385);
        function D(n) {
          const { publishedFileID: s } = n,
            u = (0, _.jE)();
          return (
            (0, E.useEffect)(() => {
              const r = (M) => {
                var V;
                ((V = M.detail) == null ? void 0 : V.publishedFileID) == s &&
                  u.invalidateQueries({ queryKey: W(s) });
              };
              return (
                window.addEventListener("ugc-moderation-resolved", r),
                () => window.removeEventListener("ugc-moderation-resolved", r)
              );
            }, [u, s]),
            (0, t.jsx)(G, { publishedFileID: s })
          );
        }
      },
      21663: (b, A, e) => {
        "use strict";
        e.d(A, { I: () => d });
        var t = e(7850),
          i = e(90626),
          S = e(86946),
          O = e(60351),
          R = e(71742),
          p = e(64238),
          L = e.n(p),
          g = e(53011),
          Y = e.n(g),
          E = e(68031),
          m = e(80549);
        const U = (0, i.createContext)(null);
        function v(f) {
          const {
              variant: o,
              radius: l,
              size: C,
              status: c,
              color: j,
              children: I,
              value: a,
              onValueChange: h,
            } = f,
            [T, z] = (0, i.useState)({}),
            $ = (0, i.useCallback)((x, P) => z((_) => ({ ..._, [P]: x })), []),
            y = (0, i.useCallback)(
              (x, P) =>
                z((_) => {
                  const D = { ..._ };
                  return D[P] === x && delete D[P], D;
                }),
              [],
            ),
            W = (x) => {
              let P = 0;
              switch (x.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  P = 1;
                  break;
                case "ArrowLeft":
                  P = -1;
                  break;
              }
              if (P) {
                const _ = Array.from(Object.values(T)).sort(K);
                let D;
                if (a === null) D = P > 0 ? 0 : _.length - 1;
                else {
                  const u = T[a],
                    r = _.findIndex((M) => M === u);
                  (0, R.wT)(
                    typeof r == "number",
                    "Could not find current segmented value position",
                  ),
                    (D = r + P);
                }
                const n = _[D < 0 ? _.length + D : D % _.length],
                  s = Object.keys(T).find((u) => T[u] === n);
                typeof s != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (h(s), x.stopPropagation(), x.preventDefault());
              }
            },
            G = (0, m.f)("SegmentedControl", o),
            Z = (0, i.useMemo)(
              () => ({
                value: a,
                onValueChange: h,
                register: $,
                unregister: y,
                radius: l,
                size: C,
              }),
              [a, h, $, y, l, C],
            );
          return (0, t.jsx)(S.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: G,
            radius: l,
            size: C,
            status: c,
            className: L()(g.SegmentedControlBox, g[`Variant-${G}`]),
            tabIndex: 0,
            onKeyDown: W,
            children: (0, t.jsx)(U.Provider, {
              value: Z,
              children: (0, t.jsxs)(O.az, {
                className: g.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${l})` },
                children: [
                  I,
                  a !== null && (0, t.jsx)(F, { radius: l, color: j }),
                ],
              }),
            }),
          });
        }
        function N(f) {
          const { value: o, children: l, disabled: C } = f,
            c = (0, i.useContext)(U),
            [j, I] = (0, i.useState)(),
            { register: a, unregister: h } = c || {};
          if (
            ((0, i.useEffect)(
              () => (!j || !a || !h ? () => {} : (a(j, o), () => h(j, o))),
              [a, h, o, j],
            ),
            !c)
          )
            return null;
          const { value: T, onValueChange: z, radius: $, size: y } = c,
            W = o === T,
            G = (x) => {
              x.stopPropagation(), x.preventDefault(), !(W || C) && z(o);
            },
            Z = l === void 0 ? o : l;
          return (0, t.jsx)(E.s, {
            justify: "center",
            align: "center",
            ref: I,
            onClick: G,
            "data-selected": W ? "true" : "false",
            className: L()(g.Item, y && g[`Size-${y}`], C ? g.disabled : ""),
            children: Z,
          });
        }
        function d(f) {
          const { options: o, getOptionLabel: l = (c) => c, ...C } = f;
          return (0, t.jsx)(d.Root, {
            ...C,
            children: o.map((c) =>
              (0, t.jsx)(d.Item, { value: c, children: l(c) }, c),
            ),
          });
        }
        (d.Item = N), (d.Root = v);
        function F(f) {
          const { radius: o, color: l } = f;
          return (0, t.jsx)(O.az, {
            className: g.IndicatorPosition,
            children: (0, t.jsx)("div", {
              className: g.Indicator,
              "data-accent-color": l,
            }),
          });
        }
        function K(f, o) {
          const l = f.compareDocumentPosition(o);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      53011: (b) => {
        b.exports = {
          SegmentedControlBox: "_3tuJ3SHrhBu16Q7GZBtKyt",
          Indicator: "_2OvUYpkiij1e7K-4vW8i9W",
          SegmentedControl: "_3XFGk1-WmLNC9KlGi7IYtN",
          IndicatorPosition: "_1Dgxrv7wtUW1EViSgrdMlA",
          Item: "_2aNlsjcdOdHOtP8uACA3bM",
          "Size-1": "_2Y43gK-c1jI0x35n45iZ0",
          "Size-3": "_3ohjaEz8PkzSzIrIZKEdt9",
          disabled: "_3gVhaCZ4k3QSnF9WhRZk5m",
          "Variant-basic": "d2NNa31iY_ztalFCMja9O",
          "Variant-inset": "_1FRhoIifZWCKbnl4jrnmG2",
          "Variant-inset-glass": "_1gVVovvLBjwCxSH4wWUabt",
          "Variant-dim": "_3qc1Re1q3AH_JYfN49uj8r",
        };
      },
      93249: (b) => {
        b.exports = {
          Pill: "_3EvT6MP5NCj5Ptsctv6H3A",
          TerrorismPill: "_2JGuTxE_EPq5pzUfrneLF-",
          CSAMPill: "_2GfEACqYfP_xZgMYtfZK9-",
          ViolencePill: "_2bDmZI3RxXA50zYGByOynN",
        };
      },
    },
  ]);
})();
