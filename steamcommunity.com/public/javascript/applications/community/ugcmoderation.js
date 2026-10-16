/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [37102],
    {
      93863: (M, E, n) => {
        "use strict";
        n.r(E), n.d(E, { UGCBanDialogOnGlobalVariable: () => k });
        var t = n(7850),
          g = n(68031),
          C = n(15252),
          z = n(75083),
          W = n(58952),
          G = n(21663),
          O = n(1522),
          X = n(26072),
          T = n(86392),
          I = n(14432),
          r = n(21113),
          N = n(66243),
          S = n(64388),
          Y = n(39905),
          f = n(90626),
          q = n(37901);
        const l = {};
        (l.arabic = () => n.e(73735).then(n.t.bind(n, 73735, 19))),
          (l.brazilian = () => n.e(14971).then(n.t.bind(n, 14971, 19))),
          (l.bulgarian = () => n.e(37236).then(n.t.bind(n, 37236, 19))),
          (l.czech = () => n.e(66898).then(n.t.bind(n, 66898, 19))),
          (l.danish = () => n.e(19078).then(n.t.bind(n, 19078, 19))),
          (l.dutch = () => n.e(14875).then(n.t.bind(n, 14875, 19))),
          (l.english = () => n.e(46073).then(n.t.bind(n, 46073, 19))),
          (l.finnish = () => n.e(17822).then(n.t.bind(n, 17822, 19))),
          (l.french = () => n.e(53951).then(n.t.bind(n, 53951, 19))),
          (l.german = () => n.e(71541).then(n.t.bind(n, 71541, 19))),
          (l.greek = () => n.e(46145).then(n.t.bind(n, 46145, 19))),
          (l.hungarian = () => n.e(5896).then(n.t.bind(n, 5896, 19))),
          (l.indonesian = () => n.e(23187).then(n.t.bind(n, 23187, 19))),
          (l.italian = () => n.e(80081).then(n.t.bind(n, 80081, 19))),
          (l.japanese = () => n.e(41080).then(n.t.bind(n, 41080, 19))),
          (l.koreana = () => n.e(99770).then(n.t.bind(n, 99770, 19))),
          (l.latam = () => n.e(24306).then(n.t.bind(n, 24306, 19))),
          (l.malay = () => n.e(87049).then(n.t.bind(n, 87049, 19))),
          (l.norwegian = () => n.e(70269).then(n.t.bind(n, 70269, 19))),
          (l.polish = () => n.e(19226).then(n.t.bind(n, 19226, 19))),
          (l.portuguese = () => n.e(70554).then(n.t.bind(n, 70554, 19))),
          (l.romanian = () => n.e(94900).then(n.t.bind(n, 94900, 19))),
          (l.russian = () => n.e(68852).then(n.t.bind(n, 68852, 19))),
          (l.sc_schinese = () => n.e(98574).then(n.t.bind(n, 98574, 19))),
          (l.schinese = () => n.e(94951).then(n.t.bind(n, 94951, 19))),
          (l.spanish = () => n.e(43649).then(n.t.bind(n, 43649, 19))),
          (l.swedish = () => n.e(14416).then(n.t.bind(n, 14416, 19))),
          (l.tchinese = () => n.e(17324).then(n.t.bind(n, 17324, 19))),
          (l.thai = () => n.e(18073).then(n.t.bind(n, 18073, 19))),
          (l.turkish = () => n.e(17153).then(n.t.bind(n, 17153, 19))),
          (l.ukrainian = () => n.e(71147).then(n.t.bind(n, 71147, 19))),
          (l.vietnamese = () => n.e(1544).then(n.t.bind(n, 1544, 19)));
        async function _(c) {
          if (l[c]) return l[c]();
        }
        const h = (0, q.l)(_);
        var V = n(52211);
        const H = [
            { labelToken: "#Workshop_ItemAdmin_Ban_Preset_None" },
            {
              labelToken: "#Workshop_ItemAdmin_Ban_Preset_Copyright",
              reasonToken: "#Workshop_ItemAdmin_Ban_Preset_CopyrightReason",
              eModerationReason: r.OQ,
            },
          ],
          F = [
            { labelToken: "#Workshop_ItemAdmin_Ban_Preset_None" },
            {
              labelToken: "#Workshop_ItemAdmin_Ban_Preset_NoCounterNotice",
              reasonToken:
                "#Workshop_ItemAdmin_Ban_Preset_NoCounterNoticeReason",
            },
          ],
          b = ["copyright", "other"],
          B = ["copyright", "malware", "other"],
          A = {
            copyright: "#Workshop_ItemAdmin_Ban_Preset_Copyright",
            malware: "#Workshop_ItemAdmin_Ban_Category_Malware",
            other: "#Workshop_ItemAdmin_Ban_Category_Other",
          };
        function J(c) {
          return X.u.Localize("#moderation_ugcban_default_note", (0, T.Jt)(c));
        }
        function U(c) {
          const {
              bBanned: v,
              bIsSupport: x,
              bWorkshopContent: y,
              onConfirm: w,
              onError: K,
              onClose: R,
            } = c,
            Z = x && !v,
            Q = !x && !v,
            [P, L] = (0, f.useState)(c.strBanReason),
            [j, o] = (0, f.useState)(null),
            [s, a] = (0, f.useState)(!1),
            [e, d] = (0, f.useState)(null),
            [u, D] = (0, f.useState)(!1),
            m = v ? F : H,
            nn = h.Localize(
              v
                ? "#Workshop_ItemAdmin_Ban_Unset"
                : "#Workshop_ItemAdmin_Ban_Set",
            ),
            tn =
              !u &&
              P.trim().length > 1 &&
              !(Z && j === null) &&
              !(Q && y && e === null),
            on = () => {
              D(!0);
              const i = e == "malware" ? r.rU : j != null ? j : r.dk;
              Promise.resolve(w(P.trim(), i)).then(R, ($) => {
                D(!1), K == null || K($);
              });
            },
            sn = (i) => {
              i !== null &&
                ((!P.trim() || (j !== null && P === J(j))) && L(J(i)), o(i)),
                a(!1);
            },
            ln = (i) => {
              L(i.reasonToken ? h.Localize(i.reasonToken) : ""),
                i.eModerationReason !== void 0 &&
                  j === null &&
                  o(i.eModerationReason);
            },
            en = (i) => {
              const $ = h.Localize(
                "#Workshop_ItemAdmin_Ban_Preset_CopyrightReason",
              );
              i == "copyright" && P.trim().length === 0
                ? L($)
                : P === $ && L(""),
                d(i);
            };
          return s
            ? (0, t.jsx)(S.s, {
                className: V.BanDialog,
                strTitle: nn,
                onClose: R,
                children: (0, t.jsx)(I.F, {
                  reasons: (0, T.cd)(),
                  onSelect: sn,
                }),
              })
            : (0, t.jsxs)(S.s, {
                className: V.BanDialog,
                strTitle: nn,
                onClose: R,
                children: [
                  x &&
                    (0, t.jsxs)(g.s, {
                      direction: "column",
                      gap: "2",
                      marginBottom: "2",
                      children: [
                        Z &&
                          (0, t.jsxs)(g.s, {
                            direction: "row",
                            gap: "2",
                            align: "center",
                            children: [
                              (0, t.jsx)(C.EY, {
                                children: h.Localize(
                                  "#Workshop_ItemAdmin_Ban_Reason",
                                ),
                              }),
                              (0, t.jsx)(z.$, {
                                size: "1",
                                color: "dull",
                                onClick: () => a(!0),
                                children:
                                  j === null
                                    ? h.Localize(
                                        "#Workshop_ItemAdmin_Ban_Reason_Unselected",
                                      )
                                    : (0, T.Jt)(j),
                              }),
                            ],
                          }),
                        (0, t.jsxs)(g.s, {
                          direction: "row",
                          gap: "2",
                          align: "center",
                          children: [
                            (0, t.jsx)(C.EY, {
                              children: h.Localize(
                                "#Workshop_ItemAdmin_Ban_Presets",
                              ),
                            }),
                            (0, t.jsx)(W.l6, {
                              options: m,
                              getOptionLabel: (i) => h.Localize(i.labelToken),
                              selectedValue: null,
                              placeholder: h.Localize(m[0].labelToken),
                              onSelectionChange: ln,
                            }),
                          ],
                        }),
                      ],
                    }),
                  Q &&
                    (0, t.jsxs)(g.s, {
                      direction: "column",
                      gap: "2",
                      marginBottom: "2",
                      children: [
                        (0, t.jsxs)(g.s, {
                          direction: "row",
                          gap: "2",
                          align: "center",
                          children: [
                            (0, t.jsx)(C.EY, {
                              children: h.Localize(
                                "#Workshop_ItemAdmin_Ban_Reason",
                              ),
                            }),
                            (0, t.jsx)(G.I, {
                              options: y ? B : b,
                              getOptionLabel: (i) => h.Localize(A[i]),
                              value: e,
                              onValueChange: en,
                            }),
                          ],
                        }),
                        e == "malware" &&
                          (0, t.jsx)(C.EY, {
                            children: h.Localize(
                              "#Workshop_ItemAdmin_Ban_Category_MalwareDesc",
                            ),
                          }),
                      ],
                    }),
                  (0, t.jsx)(O.f, {
                    value: P,
                    onTextChange: L,
                    maxLength: 256,
                    rows: 6,
                    resize: "vertical",
                  }),
                  (0, t.jsxs)(g.s, {
                    justify: "end",
                    gap: "3",
                    align: "center",
                    marginTop: "3",
                    children: [
                      (0, t.jsx)(N.sP, {
                        disabled: !tn,
                        onClick: on,
                        autoFocus: !0,
                        children: Y.Z.Localize("#Button_OK"),
                      }),
                      (0, t.jsx)(N.Oh, {
                        onClick: R,
                        children: (0, t.jsx)("span", {
                          children: Y.Z.Localize("#Button_Cancel"),
                        }),
                      }),
                    ],
                  }),
                ],
              });
        }
        var p = n(3166);
        function k() {
          const [c, v] = f.useState(null);
          return (
            f.useEffect(
              () => (
                (window.ShowUGCBanDialog = (x, y) => {
                  v({ ...y, key: Date.now(), fnOnConfirm: x });
                }),
                () => {
                  delete window.ShowUGCBanDialog;
                }
              ),
              [],
            ),
            c
              ? (0, t.jsx)(
                  U,
                  {
                    bBanned: !1,
                    strBanReason: "",
                    bIsSupport: !!p.iA.is_support,
                    bWorkshopContent: !!c.bWorkshopContent,
                    onConfirm: (x, y) => c.fnOnConfirm(y, x),
                    onClose: () => v(null),
                  },
                  c.key,
                )
              : null
          );
        }
      },
      31832: (M, E, n) => {
        "use strict";
        n.r(E), n.d(E, { UGCModerationSubjectPanel: () => j });
        var t = n(7850),
          g = n(15252),
          C = n(68031),
          z = n(75083),
          W = n(21663),
          G = n(64981),
          O = n(49527),
          X = n(72609),
          T = n(64388),
          I = n(90626),
          r = n(86067),
          N = n(13725),
          S = n(46085),
          Y = n(86392),
          f = n(72524);
        const q = 0,
          l = 1,
          _ = 2,
          h = 3;
        var V = n(21113),
          H = n(64238),
          F = n.n(H),
          b = n(93249),
          B = n.n(b);
        function A(o) {
          return !!o && o !== h;
        }
        function J(o) {
          var s, a;
          return (
            o.subject_type === G.z8 &&
            ((s = o.coordinates) == null ? void 0 : s.ugc_content_type) ===
              16 &&
            !!(
              (a = o.reports) != null && a.some((e) => e.report_reason === V.rU)
            )
          );
        }
        function U(o) {
          return A(o.status)
            ? (0, t.jsxs)("span", {
                className: F()(B().Pill, o.className),
                children: [o.label, o.status === l && "?"],
              })
            : null;
        }
        function p(o) {
          return (0, t.jsx)(U, {
            status: o.status,
            className: B().TerrorismPill,
            label: "Terrorism",
          });
        }
        function k(o) {
          return (0, t.jsx)(U, {
            status: o.status,
            className: B().CSAMPill,
            label: "CSAM",
          });
        }
        function c(o) {
          return (0, t.jsx)(U, {
            status: o.status,
            className: B().ViolencePill,
            label: "Violent threat",
          });
        }
        function v() {
          return (0, t.jsx)("span", {
            className: F()(B().Pill, B().MalwarePill),
            children: "Malware?",
          });
        }
        function x(o) {
          const { subject: s } = o,
            a = J(s);
          return !A(s.terrorism_status) &&
            !A(s.csam_status) &&
            !A(s.credible_threat_of_violence_status) &&
            !a
            ? null
            : (0, t.jsxs)(C.s, {
                wrap: "wrap",
                gap: "1",
                children: [
                  (0, t.jsx)(p, { status: s.terrorism_status }),
                  (0, t.jsx)(k, { status: s.csam_status }),
                  (0, t.jsx)(c, {
                    status: s.credible_threat_of_violence_status,
                  }),
                  a && (0, t.jsx)(v, {}),
                ],
              });
        }
        function y(o) {
          return { subject_type: G.z8, published_file_id: o };
        }
        function w(o) {
          return (0, S.OI)(y(o));
        }
        function K(o) {
          var s, a, e;
          const d = (0, S.w3)(y(o.publishedFileID)),
            [u, D] = (0, I.useState)(!1);
          if (d.isPending) return null;
          if (d.isError)
            return (0, t.jsx)(g.EY, {
              children: r.T.Localize("#ugcsubjectpanel_error"),
            });
          const m = (s = d.data.subjects) == null ? void 0 : s[0];
          return m
            ? (0, t.jsxs)(C.s, {
                direction: "column",
                gap: "1",
                children: [
                  (0, t.jsx)(g.EY, { children: (0, Y.hl)(m) }),
                  (0, t.jsx)(x, { subject: m }),
                  (0, t.jsx)(g.EY, {
                    children: r.T.Localize(
                      "#forumsubjectlist_subjectreportsummary",
                      (a = m.unresolved_report_count) != null ? a : 0,
                      (e = m.unresolved_dispute_count) != null ? e : 0,
                    ),
                  }),
                  (0, t.jsxs)(C.s, {
                    direction: "row",
                    gap: "2",
                    children: [
                      (0, t.jsx)(z.$, {
                        size: "1",
                        color: "dull",
                        onClick: () => D(!0),
                        children: r.T.Localize("#ugcsubjectpanel_history"),
                      }),
                      (0, t.jsx)(R, { subject: m }),
                      (0, t.jsx)(Z, { subject: m }),
                      (0, t.jsx)(Q, { subject: m }),
                    ],
                  }),
                  u && (0, t.jsx)(P, { subject: m, onClose: () => D(!1) }),
                ],
              })
            : null;
        }
        function R(o) {
          const { subject: s } = o,
            a = (0, S.YL)(s.reported_content_id ? [s.reported_content_id] : []),
            e =
              !!s.assigned_moderator_steamid &&
              s.assigned_moderator_steamid !== "0";
          return !s.reported_content_id ||
            !e ||
            s.assigned_moderator_steamid !== X.iA.steamid
            ? null
            : (0, t.jsx)(z.$, {
                size: "1",
                color: "dull",
                loading: a.isPending,
                onClick: () => a.mutate(),
                children: r.T.Localize("#ugcsubjectpanel_release"),
              });
        }
        function Z(o) {
          const { subject: s } = o,
            [a, e] = (0, I.useState)(!1);
          return !s.reported_content_id || !(0, f.h)(s)
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(z.$, {
                    size: "1",
                    color: "dull",
                    onClick: () => e(!0),
                    children: r.T.Localize("#moderation_escalation_escalate"),
                  }),
                  a &&
                    (0, t.jsx)(T.s, {
                      onClose: () => e(!1),
                      strTitle: r.T.Localize("#moderation_escalation_escalate"),
                      children: (0, t.jsx)(f.R, {
                        reportedContentID: s.reported_content_id,
                        eCurrentLevel: s.required_moderator_level,
                        onClose: () => e(!1),
                      }),
                    }),
                ],
              });
        }
        function Q(o) {
          var s, a, e;
          const { subject: d } = o,
            u = (0, S.N8)();
          return !!d.reported_content_id &&
            ((s = d.resolved) != null ? s : O.z_) !== O.z_ &&
            (((a = d.unresolved_report_count) != null ? a : 0) > 0 ||
              ((e = d.unresolved_dispute_count) != null ? e : 0) > 0)
            ? (0, t.jsx)(z.$, {
                size: "1",
                color: "dull",
                loading: u.isPending,
                onClick: () =>
                  u.mutate({ reportedContentID: d.reported_content_id }),
                children: r.T.Localize("#moderation_actions_sustain_short"),
              })
            : null;
        }
        function P(o) {
          const { subject: s, onClose: a } = o,
            [e, d] = (0, I.useState)("reports");
          return (0, t.jsx)(T.s, {
            onClose: a,
            strTitle: r.T.Localize("#ugcsubjectpanel_dialogtitle"),
            children: (0, t.jsxs)(C.s, {
              direction: "column",
              gap: "2",
              children: [
                (0, t.jsxs)(W.I.Root, {
                  value: e,
                  onValueChange: (u) => d(u),
                  children: [
                    (0, t.jsx)(W.I.Item, {
                      value: "reports",
                      children: r.T.Localize("#ugcsubjectpanel_reports"),
                    }),
                    (0, t.jsx)(W.I.Item, {
                      value: "history",
                      children: r.T.Localize("#ugcsubjectpanel_history"),
                    }),
                  ],
                }),
                e === "reports" && (0, t.jsx)(N.lX, { subject: s }),
                e === "history" &&
                  (0, t.jsx)(N.B8, {
                    reportedContentID: s.reported_content_id,
                  }),
              ],
            }),
          });
        }
        var L = n(29385);
        function j(o) {
          const { publishedFileID: s } = o,
            a = (0, L.jE)();
          return (
            (0, I.useEffect)(() => {
              const e = (d) => {
                var u;
                ((u = d.detail) == null ? void 0 : u.publishedFileID) == s &&
                  a.invalidateQueries({ queryKey: w(s) });
              };
              return (
                window.addEventListener("ugc-moderation-resolved", e),
                () => window.removeEventListener("ugc-moderation-resolved", e)
              );
            }, [a, s]),
            (0, t.jsx)(K, { publishedFileID: s })
          );
        }
      },
      93249: (M) => {
        M.exports = {
          Pill: "_3EvT6MP5NCj5Ptsctv6H3A",
          TerrorismPill: "_2JGuTxE_EPq5pzUfrneLF-",
          CSAMPill: "_2GfEACqYfP_xZgMYtfZK9-",
          ViolencePill: "_2bDmZI3RxXA50zYGByOynN",
          MalwarePill: "_3_g8g_pUDJsmJaS1K0aRVZ",
        };
      },
      52211: (M) => {
        M.exports = { BanDialog: "_2S6JKTLe0bTYcB5bC8nT3-" };
      },
    },
  ]);
})();
