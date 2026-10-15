/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7102],
    {
      11038: (N, y, e) => {
        "use strict";
        e.r(y), e.d(y, { UGCBanDialogOnGlobalVariable: () => R });
        var t = e(7850),
          u = e(68031),
          S = e(15252),
          M = e(75083),
          B = e(1522),
          b = e(26072),
          L = e(86392),
          g = e(14432),
          F = e(64388),
          j = e(90626);
        function m(E) {
          return b.u.Localize("#moderation_ugcban_default_note", (0, L.Jt)(E));
        }
        function R() {
          const [E, K] = j.useState(null),
            [d, Z] = j.useState(null),
            [z, f] = j.useState(!1),
            [o, a] = j.useState("");
          if (
            (j.useEffect(
              () => (
                (window.ShowUGCBanDialog = (l, h) => {
                  Z(null),
                    f(!1),
                    a(""),
                    K({ cItems: l.length, fnOnConfirm: h });
                }),
                () => {
                  delete window.ShowUGCBanDialog;
                }
              ),
              [],
            ),
            !E)
          )
            return null;
          const C = () => K(null),
            i = () => {
              d === null || !o.trim() || (E.fnOnConfirm(d, o.trim()), C());
            },
            O = (l) => {
              l !== null &&
                ((!o.trim() || (d !== null && o === m(d))) && a(m(l)), Z(l)),
                f(!1);
            },
            v = E.cItems > 1 ? `Ban ${E.cItems} items` : "Ban item";
          return (0, t.jsxs)(F.s, {
            onClose: C,
            strTitle: v,
            children: [
              z && (0, t.jsx)(g.F, { reasons: (0, L.cd)(), onSelect: O }),
              !z &&
                (0, t.jsxs)(u.s, {
                  direction: "column",
                  gap: "2",
                  minWidth: "400px",
                  children: [
                    (0, t.jsxs)(u.s, {
                      direction: "row",
                      gap: "2",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, t.jsx)(S.EY, { children: "Select a reason:" }),
                        (0, t.jsx)(M.$, {
                          size: "1",
                          color: "dull",
                          onClick: () => f(!0),
                          children:
                            d === null ? "Click to select..." : (0, L.Jt)(d),
                        }),
                      ],
                    }),
                    (0, t.jsx)(S.EY, { children: "Note:" }),
                    (0, t.jsx)(B.f, {
                      value: o,
                      onTextChange: (l) => a(l),
                      maxLength: 256,
                    }),
                    (0, t.jsxs)(u.s, {
                      direction: "row",
                      gap: "2",
                      justify: "end",
                      marginTop: "3",
                      children: [
                        (0, t.jsx)(M.$, {
                          onClick: C,
                          color: "dull",
                          children: "Cancel",
                        }),
                        (0, t.jsx)(M.$, {
                          disabled: d === null || !o.trim(),
                          onClick: i,
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
      31832: (N, y, e) => {
        "use strict";
        e.r(y), e.d(y, { UGCModerationSubjectPanel: () => J });
        var t = e(7850),
          u = e(15252),
          S = e(68031),
          M = e(75083),
          B = e(21663),
          b = e(64981),
          L = e(49527),
          g = e(72609),
          F = e(64388),
          j = e(90626),
          m = e(86067),
          R = e(13725),
          E = e(46085),
          K = e(86392),
          d = e(72524);
        const Z = 0,
          z = 1,
          f = 2,
          o = 3;
        var a = e(21113),
          C = e(64238),
          i = e.n(C),
          O = e(93249),
          v = e.n(O);
        function l(n) {
          return !!n && n !== o;
        }
        function h(n) {
          var s, r;
          return (
            n.subject_type === b.z8 &&
            ((s = n.coordinates) == null ? void 0 : s.ugc_content_type) ===
              16 &&
            !!(
              (r = n.reports) != null && r.some((c) => c.report_reason === a.rU)
            )
          );
        }
        function I(n) {
          return l(n.status)
            ? (0, t.jsxs)("span", {
                className: i()(v().Pill, n.className),
                children: [n.label, n.status === z && "?"],
              })
            : null;
        }
        function W(n) {
          return (0, t.jsx)(I, {
            status: n.status,
            className: v().TerrorismPill,
            label: "Terrorism",
          });
        }
        function $(n) {
          return (0, t.jsx)(I, {
            status: n.status,
            className: v().CSAMPill,
            label: "CSAM",
          });
        }
        function U(n) {
          return (0, t.jsx)(I, {
            status: n.status,
            className: v().ViolencePill,
            label: "Violent threat",
          });
        }
        function p() {
          return (0, t.jsx)("span", {
            className: i()(v().Pill, v().MalwarePill),
            children: "Malware?",
          });
        }
        function G(n) {
          const { subject: s } = n,
            r = h(s);
          return !l(s.terrorism_status) &&
            !l(s.csam_status) &&
            !l(s.credible_threat_of_violence_status) &&
            !r
            ? null
            : (0, t.jsxs)(S.s, {
                wrap: "wrap",
                gap: "1",
                children: [
                  (0, t.jsx)(W, { status: s.terrorism_status }),
                  (0, t.jsx)($, { status: s.csam_status }),
                  (0, t.jsx)(U, {
                    status: s.credible_threat_of_violence_status,
                  }),
                  r && (0, t.jsx)(p, {}),
                ],
              });
        }
        function V(n) {
          return { subject_type: b.z8, published_file_id: n };
        }
        function x(n) {
          return (0, E.OI)(V(n));
        }
        function P(n) {
          var s, r, c;
          const A = (0, E.w3)(V(n.publishedFileID)),
            [Y, X] = (0, j.useState)(!1);
          if (A.isPending) return null;
          if (A.isError)
            return (0, t.jsx)(u.EY, {
              children: m.T.Localize("#ugcsubjectpanel_error"),
            });
          const T = (s = A.data.subjects) == null ? void 0 : s[0];
          return T
            ? (0, t.jsxs)(S.s, {
                direction: "column",
                gap: "1",
                children: [
                  (0, t.jsx)(u.EY, { children: (0, K.hl)(T) }),
                  (0, t.jsx)(G, { subject: T }),
                  (0, t.jsx)(u.EY, {
                    children: m.T.Localize(
                      "#forumsubjectlist_subjectreportsummary",
                      (r = T.unresolved_report_count) != null ? r : 0,
                      (c = T.unresolved_dispute_count) != null ? c : 0,
                    ),
                  }),
                  (0, t.jsxs)(S.s, {
                    direction: "row",
                    gap: "2",
                    children: [
                      (0, t.jsx)(M.$, {
                        size: "1",
                        color: "dull",
                        onClick: () => X(!0),
                        children: m.T.Localize("#ugcsubjectpanel_history"),
                      }),
                      (0, t.jsx)(_, { subject: T }),
                      (0, t.jsx)(D, { subject: T }),
                    ],
                  }),
                  Y && (0, t.jsx)(H, { subject: T, onClose: () => X(!1) }),
                ],
              })
            : null;
        }
        function _(n) {
          const { subject: s } = n,
            r = (0, E.YL)(s.reported_content_id ? [s.reported_content_id] : []),
            c =
              !!s.assigned_moderator_steamid &&
              s.assigned_moderator_steamid !== "0";
          return !s.reported_content_id ||
            !c ||
            s.assigned_moderator_steamid !== g.iA.steamid
            ? null
            : (0, t.jsx)(M.$, {
                size: "1",
                color: "dull",
                loading: r.isPending,
                onClick: () => r.mutate(),
                children: m.T.Localize("#ugcsubjectpanel_release"),
              });
        }
        function D(n) {
          const { subject: s } = n,
            [r, c] = (0, j.useState)(!1);
          return !s.reported_content_id || s.resolved !== L.z_
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(M.$, {
                    size: "1",
                    color: "dull",
                    onClick: () => c(!0),
                    children: m.T.Localize("#moderation_escalation_escalate"),
                  }),
                  r &&
                    (0, t.jsx)(F.s, {
                      onClose: () => c(!1),
                      strTitle: m.T.Localize("#moderation_escalation_escalate"),
                      children: (0, t.jsx)(d.R, {
                        reportedContentID: s.reported_content_id,
                        onClose: () => c(!1),
                      }),
                    }),
                ],
              });
        }
        function H(n) {
          const { subject: s, onClose: r } = n,
            [c, A] = (0, j.useState)("reports");
          return (0, t.jsx)(F.s, {
            onClose: r,
            strTitle: m.T.Localize("#ugcsubjectpanel_dialogtitle"),
            children: (0, t.jsxs)(S.s, {
              direction: "column",
              gap: "2",
              children: [
                (0, t.jsxs)(B.I.Root, {
                  value: c,
                  onValueChange: (Y) => A(Y),
                  children: [
                    (0, t.jsx)(B.I.Item, {
                      value: "reports",
                      children: m.T.Localize("#ugcsubjectpanel_reports"),
                    }),
                    (0, t.jsx)(B.I.Item, {
                      value: "history",
                      children: m.T.Localize("#ugcsubjectpanel_history"),
                    }),
                  ],
                }),
                c === "reports" && (0, t.jsx)(R.lX, { subject: s }),
                c === "history" &&
                  (0, t.jsx)(R.B8, {
                    reportedContentID: s.reported_content_id,
                  }),
              ],
            }),
          });
        }
        var Q = e(29385);
        function J(n) {
          const { publishedFileID: s } = n,
            r = (0, Q.jE)();
          return (
            (0, j.useEffect)(() => {
              const c = (A) => {
                var Y;
                ((Y = A.detail) == null ? void 0 : Y.publishedFileID) == s &&
                  r.invalidateQueries({ queryKey: x(s) });
              };
              return (
                window.addEventListener("ugc-moderation-resolved", c),
                () => window.removeEventListener("ugc-moderation-resolved", c)
              );
            }, [r, s]),
            (0, t.jsx)(P, { publishedFileID: s })
          );
        }
      },
      21663: (N, y, e) => {
        "use strict";
        e.d(y, { I: () => d });
        var t = e(7850),
          u = e(90626),
          S = e(86946),
          M = e(60351),
          B = e(71742),
          b = e(64238),
          L = e.n(b),
          g = e(53011),
          F = e.n(g),
          j = e(68031),
          m = e(80549);
        const R = (0, u.createContext)(null);
        function E(f) {
          const {
              variant: o,
              radius: a,
              size: C,
              status: i,
              color: O,
              children: v,
              value: l,
              onValueChange: h,
            } = f,
            [I, W] = (0, u.useState)({}),
            $ = (0, u.useCallback)((x, P) => W((_) => ({ ..._, [P]: x })), []),
            U = (0, u.useCallback)(
              (x, P) =>
                W((_) => {
                  const D = { ..._ };
                  return D[P] === x && delete D[P], D;
                }),
              [],
            ),
            p = (x) => {
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
                const _ = Array.from(Object.values(I)).sort(z);
                let D;
                if (l === null) D = P > 0 ? 0 : _.length - 1;
                else {
                  const J = I[l],
                    n = _.findIndex((s) => s === J);
                  (0, B.wT)(
                    typeof n == "number",
                    "Could not find current segmented value position",
                  ),
                    (D = n + P);
                }
                const H = _[D < 0 ? _.length + D : D % _.length],
                  Q = Object.keys(I).find((J) => I[J] === H);
                typeof Q != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (h(Q), x.stopPropagation(), x.preventDefault());
              }
            },
            G = (0, m.f)("SegmentedControl", o),
            V = (0, u.useMemo)(
              () => ({
                value: l,
                onValueChange: h,
                register: $,
                unregister: U,
                radius: a,
                size: C,
              }),
              [l, h, $, U, a, C],
            );
          return (0, t.jsx)(S.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: G,
            radius: a,
            size: C,
            status: i,
            className: L()(g.SegmentedControlBox, g[`Variant-${G}`]),
            tabIndex: 0,
            onKeyDown: p,
            children: (0, t.jsx)(R.Provider, {
              value: V,
              children: (0, t.jsxs)(M.az, {
                className: g.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${a})` },
                children: [
                  v,
                  l !== null && (0, t.jsx)(Z, { radius: a, color: O }),
                ],
              }),
            }),
          });
        }
        function K(f) {
          const { value: o, children: a, disabled: C } = f,
            i = (0, u.useContext)(R),
            [O, v] = (0, u.useState)(),
            { register: l, unregister: h } = i || {};
          if (
            ((0, u.useEffect)(
              () => (!O || !l || !h ? () => {} : (l(O, o), () => h(O, o))),
              [l, h, o, O],
            ),
            !i)
          )
            return null;
          const { value: I, onValueChange: W, radius: $, size: U } = i,
            p = o === I,
            G = (x) => {
              x.stopPropagation(), x.preventDefault(), !(p || C) && W(o);
            },
            V = a === void 0 ? o : a;
          return (0, t.jsx)(j.s, {
            justify: "center",
            align: "center",
            ref: v,
            onClick: G,
            "data-selected": p ? "true" : "false",
            className: L()(g.Item, U && g[`Size-${U}`], C ? g.disabled : ""),
            children: V,
          });
        }
        function d(f) {
          const { options: o, getOptionLabel: a = (i) => i, ...C } = f;
          return (0, t.jsx)(d.Root, {
            ...C,
            children: o.map((i) =>
              (0, t.jsx)(d.Item, { value: i, children: a(i) }, i),
            ),
          });
        }
        (d.Item = K), (d.Root = E);
        function Z(f) {
          const { radius: o, color: a } = f;
          return (0, t.jsx)(M.az, {
            className: g.IndicatorPosition,
            children: (0, t.jsx)("div", {
              className: g.Indicator,
              "data-accent-color": a,
            }),
          });
        }
        function z(f, o) {
          const a = f.compareDocumentPosition(o);
          return a & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : a & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      53011: (N) => {
        N.exports = {
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
      93249: (N) => {
        N.exports = {
          Pill: "_3EvT6MP5NCj5Ptsctv6H3A",
          TerrorismPill: "_2JGuTxE_EPq5pzUfrneLF-",
          CSAMPill: "_2GfEACqYfP_xZgMYtfZK9-",
          ViolencePill: "_2bDmZI3RxXA50zYGByOynN",
          MalwarePill: "_3_g8g_pUDJsmJaS1K0aRVZ",
        };
      },
    },
  ]);
})();
