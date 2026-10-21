/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [37102],
    {
      93863: (A, R, n) => {
        "use strict";
        n.r(R), n.d(R, { UGCBanDialogOnGlobalVariable: () => X });
        var t = n(7850),
          m = n(68031),
          u = n(15252),
          S = n(75083),
          D = n(58952),
          W = n(21663),
          N = n(1522),
          K = n(26072),
          L = n(86392),
          z = n(14432),
          r = n(21113),
          M = n(66243),
          P = n(64388),
          U = n(39905),
          g = n(90626),
          k = n(37901);
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
        async function w(c) {
          if (l[c]) return l[c]();
        }
        const h = (0, k.l)(w);
        var G = n(52211);
        const Z = [
            { labelToken: "#Workshop_ItemAdmin_Ban_Preset_None" },
            {
              labelToken: "#Workshop_ItemAdmin_Ban_Preset_Copyright",
              reasonToken: "#Workshop_ItemAdmin_Ban_Preset_CopyrightReason",
              eModerationReason: r.OQ,
            },
          ],
          O = [
            { labelToken: "#Workshop_ItemAdmin_Ban_Preset_None" },
            {
              labelToken: "#Workshop_ItemAdmin_Ban_Preset_NoCounterNotice",
              reasonToken:
                "#Workshop_ItemAdmin_Ban_Preset_NoCounterNoticeReason",
            },
          ],
          Q = ["copyright", "other"],
          y = ["copyright", "malware", "other"],
          T = {
            copyright: "#Workshop_ItemAdmin_Ban_Preset_Copyright",
            malware: "#Workshop_ItemAdmin_Ban_Category_Malware",
            other: "#Workshop_ItemAdmin_Ban_Category_Other",
          };
        function Y(c) {
          return K.u.Localize("#moderation_ugcban_default_note", (0, L.Jt)(c));
        }
        function E(c) {
          const {
              bBanned: f,
              bIsSupport: j,
              bWorkshopContent: C,
              onConfirm: H,
              onError: b,
              onClose: I,
            } = c,
            V = j && !f,
            F = !j && !f,
            [v, B] = (0, g.useState)(c.strBanReason),
            [x, s] = (0, g.useState)(null),
            [o, a] = (0, g.useState)(!1),
            [e, d] = (0, g.useState)(null),
            [p, q] = (0, g.useState)(!1),
            _ = f ? O : Z,
            nn = h.Localize(
              f
                ? "#Workshop_ItemAdmin_Ban_Unset"
                : "#Workshop_ItemAdmin_Ban_Set",
            ),
            tn =
              !p &&
              v.trim().length > 1 &&
              !(V && x === null) &&
              !(F && C && e === null),
            on = () => {
              q(!0);
              const i = e == "malware" ? r.rU : (x ?? r.dk);
              Promise.resolve(H(v.trim(), i)).then(I, (J) => {
                q(!1), b?.(J);
              });
            },
            sn = (i) => {
              i !== null &&
                ((!v.trim() || (x !== null && v === Y(x))) && B(Y(i)), s(i)),
                a(!1);
            },
            ln = (i) => {
              B(i.reasonToken ? h.Localize(i.reasonToken) : ""),
                i.eModerationReason !== void 0 &&
                  x === null &&
                  s(i.eModerationReason);
            },
            en = (i) => {
              const J = h.Localize(
                "#Workshop_ItemAdmin_Ban_Preset_CopyrightReason",
              );
              i == "copyright" && v.trim().length === 0
                ? B(J)
                : v === J && B(""),
                d(i);
            };
          return o
            ? (0, t.jsx)(P.s, {
                className: G.BanDialog,
                strTitle: nn,
                onClose: I,
                children: (0, t.jsx)(z.F, {
                  reasons: (0, L.cd)(),
                  onSelect: sn,
                }),
              })
            : (0, t.jsxs)(P.s, {
                className: G.BanDialog,
                strTitle: nn,
                onClose: I,
                children: [
                  j &&
                    (0, t.jsxs)(m.s, {
                      direction: "column",
                      gap: "2",
                      marginBottom: "2",
                      children: [
                        V &&
                          (0, t.jsxs)(m.s, {
                            direction: "row",
                            gap: "2",
                            align: "center",
                            children: [
                              (0, t.jsx)(u.EY, {
                                children: h.Localize(
                                  "#Workshop_ItemAdmin_Ban_Reason",
                                ),
                              }),
                              (0, t.jsx)(S.$, {
                                size: "1",
                                color: "dull",
                                onClick: () => a(!0),
                                children:
                                  x === null
                                    ? h.Localize(
                                        "#Workshop_ItemAdmin_Ban_Reason_Unselected",
                                      )
                                    : (0, L.Jt)(x),
                              }),
                            ],
                          }),
                        (0, t.jsxs)(m.s, {
                          direction: "row",
                          gap: "2",
                          align: "center",
                          children: [
                            (0, t.jsx)(u.EY, {
                              children: h.Localize(
                                "#Workshop_ItemAdmin_Ban_Presets",
                              ),
                            }),
                            (0, t.jsx)(D.l6, {
                              options: _,
                              getOptionLabel: (i) => h.Localize(i.labelToken),
                              selectedValue: null,
                              placeholder: h.Localize(_[0].labelToken),
                              onSelectionChange: ln,
                            }),
                          ],
                        }),
                      ],
                    }),
                  F &&
                    (0, t.jsxs)(m.s, {
                      direction: "column",
                      gap: "2",
                      marginBottom: "2",
                      children: [
                        (0, t.jsxs)(m.s, {
                          direction: "row",
                          gap: "2",
                          align: "center",
                          children: [
                            (0, t.jsx)(u.EY, {
                              children: h.Localize(
                                "#Workshop_ItemAdmin_Ban_Reason",
                              ),
                            }),
                            (0, t.jsx)(W.I, {
                              options: C ? y : Q,
                              getOptionLabel: (i) => h.Localize(T[i]),
                              value: e,
                              onValueChange: en,
                            }),
                          ],
                        }),
                        e == "malware" &&
                          (0, t.jsx)(u.EY, {
                            children: h.Localize(
                              "#Workshop_ItemAdmin_Ban_Category_MalwareDesc",
                            ),
                          }),
                      ],
                    }),
                  (0, t.jsx)(N.f, {
                    value: v,
                    onTextChange: B,
                    maxLength: 256,
                    rows: 6,
                    resize: "vertical",
                  }),
                  (0, t.jsxs)(m.s, {
                    justify: "end",
                    gap: "3",
                    align: "center",
                    marginTop: "3",
                    children: [
                      (0, t.jsx)(M.sP, {
                        disabled: !tn,
                        onClick: on,
                        autoFocus: !0,
                        children: U.Z.Localize("#Button_OK"),
                      }),
                      (0, t.jsx)(M.Oh, {
                        onClick: I,
                        children: (0, t.jsx)("span", {
                          children: U.Z.Localize("#Button_Cancel"),
                        }),
                      }),
                    ],
                  }),
                ],
              });
        }
        var $ = n(3166);
        function X() {
          const [c, f] = g.useState(null);
          return (
            g.useEffect(
              () => (
                (window.ShowUGCBanDialog = (j, C) => {
                  f({ ...C, key: Date.now(), fnOnConfirm: j });
                }),
                () => {
                  delete window.ShowUGCBanDialog;
                }
              ),
              [],
            ),
            c
              ? (0, t.jsx)(
                  E,
                  {
                    bBanned: !1,
                    strBanReason: "",
                    bIsSupport: !!$.iA.is_support,
                    bWorkshopContent: !!c.bWorkshopContent,
                    onConfirm: (j, C) => c.fnOnConfirm(C, j),
                    onClose: () => f(null),
                  },
                  c.key,
                )
              : null
          );
        }
      },
      31832: (A, R, n) => {
        "use strict";
        n.r(R), n.d(R, { UGCModerationSubjectPanel: () => x });
        var t = n(7850),
          m = n(15252),
          u = n(68031),
          S = n(75083),
          D = n(21663),
          W = n(64981),
          N = n(49527),
          K = n(72609),
          L = n(64388),
          z = n(90626),
          r = n(86067),
          M = n(13725),
          P = n(46085),
          U = n(86392),
          g = n(72524);
        const k = 0,
          l = 1,
          w = 2,
          h = 3;
        var G = n(21113),
          Z = n(64238),
          O = n.n(Z),
          Q = n(93249),
          y = n.n(Q);
        function T(s) {
          return !!s && s !== h;
        }
        function Y(s) {
          return (
            s.subject_type === W.z8 &&
            s.coordinates?.ugc_content_type === 16 &&
            !!s.reports?.some((o) => o.report_reason === G.rU)
          );
        }
        function E(s) {
          return T(s.status)
            ? (0, t.jsxs)("span", {
                className: O()(y().Pill, s.className),
                children: [s.label, s.status === l && "?"],
              })
            : null;
        }
        function $(s) {
          return (0, t.jsx)(E, {
            status: s.status,
            className: y().TerrorismPill,
            label: "Terrorism",
          });
        }
        function X(s) {
          return (0, t.jsx)(E, {
            status: s.status,
            className: y().CSAMPill,
            label: "CSAM",
          });
        }
        function c(s) {
          return (0, t.jsx)(E, {
            status: s.status,
            className: y().ViolencePill,
            label: "Violent threat",
          });
        }
        function f() {
          return (0, t.jsx)("span", {
            className: O()(y().Pill, y().MalwarePill),
            children: "Malware?",
          });
        }
        function j(s) {
          const { subject: o } = s,
            a = Y(o);
          return !T(o.terrorism_status) &&
            !T(o.csam_status) &&
            !T(o.credible_threat_of_violence_status) &&
            !a
            ? null
            : (0, t.jsxs)(u.s, {
                wrap: "wrap",
                gap: "1",
                children: [
                  (0, t.jsx)($, { status: o.terrorism_status }),
                  (0, t.jsx)(X, { status: o.csam_status }),
                  (0, t.jsx)(c, {
                    status: o.credible_threat_of_violence_status,
                  }),
                  a && (0, t.jsx)(f, {}),
                ],
              });
        }
        function C(s) {
          return { subject_type: W.z8, published_file_id: s };
        }
        function H(s) {
          return (0, P.OI)(C(s));
        }
        function b(s) {
          const o = (0, P.w3)(C(s.publishedFileID)),
            [a, e] = (0, z.useState)(!1);
          if (o.isPending) return null;
          if (o.isError)
            return (0, t.jsx)(m.EY, {
              children: r.T.Localize("#ugcsubjectpanel_error"),
            });
          const d = o.data.subjects?.[0];
          return d
            ? (0, t.jsxs)(u.s, {
                direction: "column",
                gap: "1",
                children: [
                  (0, t.jsx)(m.EY, { children: (0, U.hl)(d) }),
                  (0, t.jsx)(j, { subject: d }),
                  (0, t.jsx)(m.EY, {
                    children: r.T.Localize(
                      "#forumsubjectlist_subjectreportsummary",
                      d.unresolved_report_count ?? 0,
                      d.unresolved_dispute_count ?? 0,
                    ),
                  }),
                  (0, t.jsxs)(u.s, {
                    direction: "row",
                    gap: "2",
                    children: [
                      (0, t.jsx)(S.$, {
                        size: "1",
                        color: "dull",
                        onClick: () => e(!0),
                        children: r.T.Localize("#ugcsubjectpanel_history"),
                      }),
                      (0, t.jsx)(I, { subject: d }),
                      (0, t.jsx)(V, { subject: d }),
                      (0, t.jsx)(F, { subject: d }),
                    ],
                  }),
                  a && (0, t.jsx)(v, { subject: d, onClose: () => e(!1) }),
                ],
              })
            : null;
        }
        function I(s) {
          const { subject: o } = s,
            a = (0, P.YL)(o.reported_content_id ? [o.reported_content_id] : []),
            e =
              !!o.assigned_moderator_steamid &&
              o.assigned_moderator_steamid !== "0";
          return !o.reported_content_id ||
            !e ||
            o.assigned_moderator_steamid !== K.iA.steamid
            ? null
            : (0, t.jsx)(S.$, {
                size: "1",
                color: "dull",
                loading: a.isPending,
                onClick: () => a.mutate(),
                children: r.T.Localize("#ugcsubjectpanel_release"),
              });
        }
        function V(s) {
          const { subject: o } = s,
            [a, e] = (0, z.useState)(!1);
          return !o.reported_content_id || !(0, g.h)(o)
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(S.$, {
                    size: "1",
                    color: "dull",
                    onClick: () => e(!0),
                    children: r.T.Localize("#moderation_escalation_escalate"),
                  }),
                  a &&
                    (0, t.jsx)(L.s, {
                      onClose: () => e(!1),
                      strTitle: r.T.Localize("#moderation_escalation_escalate"),
                      children: (0, t.jsx)(g.R, {
                        reportedContentID: o.reported_content_id,
                        eCurrentLevel: o.required_moderator_level,
                        onClose: () => e(!1),
                      }),
                    }),
                ],
              });
        }
        function F(s) {
          const { subject: o } = s,
            a = (0, P.N8)();
          return !!o.reported_content_id &&
            (o.resolved ?? N.z_) !== N.z_ &&
            ((o.unresolved_report_count ?? 0) > 0 ||
              (o.unresolved_dispute_count ?? 0) > 0)
            ? (0, t.jsx)(S.$, {
                size: "1",
                color: "dull",
                loading: a.isPending,
                onClick: () =>
                  a.mutate({ reportedContentID: o.reported_content_id }),
                children: r.T.Localize("#moderation_actions_sustain_short"),
              })
            : null;
        }
        function v(s) {
          const { subject: o, onClose: a } = s,
            [e, d] = (0, z.useState)("reports");
          return (0, t.jsx)(L.s, {
            onClose: a,
            strTitle: r.T.Localize("#ugcsubjectpanel_dialogtitle"),
            children: (0, t.jsxs)(u.s, {
              direction: "column",
              gap: "2",
              children: [
                (0, t.jsxs)(D.I.Root, {
                  value: e,
                  onValueChange: (p) => d(p),
                  children: [
                    (0, t.jsx)(D.I.Item, {
                      value: "reports",
                      children: r.T.Localize("#ugcsubjectpanel_reports"),
                    }),
                    (0, t.jsx)(D.I.Item, {
                      value: "history",
                      children: r.T.Localize("#ugcsubjectpanel_history"),
                    }),
                  ],
                }),
                e === "reports" && (0, t.jsx)(M.lX, { subject: o }),
                e === "history" &&
                  (0, t.jsx)(M.B8, {
                    reportedContentID: o.reported_content_id,
                  }),
              ],
            }),
          });
        }
        var B = n(29385);
        function x(s) {
          const { publishedFileID: o } = s,
            a = (0, B.jE)();
          return (
            (0, z.useEffect)(() => {
              const e = (d) => {
                d.detail?.publishedFileID == o &&
                  a.invalidateQueries({ queryKey: H(o) });
              };
              return (
                window.addEventListener("ugc-moderation-resolved", e),
                () => window.removeEventListener("ugc-moderation-resolved", e)
              );
            }, [a, o]),
            (0, t.jsx)(b, { publishedFileID: o })
          );
        }
      },
      93249: (A) => {
        A.exports = {
          Pill: "_3EvT6MP5NCj5Ptsctv6H3A",
          TerrorismPill: "_2JGuTxE_EPq5pzUfrneLF-",
          CSAMPill: "_2GfEACqYfP_xZgMYtfZK9-",
          ViolencePill: "_2bDmZI3RxXA50zYGByOynN",
          MalwarePill: "_3_g8g_pUDJsmJaS1K0aRVZ",
        };
      },
      52211: (A) => {
        A.exports = { BanDialog: "_2S6JKTLe0bTYcB5bC8nT3-" };
      },
    },
  ]);
})();
