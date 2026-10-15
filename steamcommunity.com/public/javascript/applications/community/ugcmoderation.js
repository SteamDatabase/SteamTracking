/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [37102],
    {
      93863: (A, R, n) => {
        "use strict";
        n.r(R), n.d(R, { UGCBanDialogOnGlobalVariable: () => p });
        var t = n(7850),
          g = n(68031),
          u = n(15252),
          D = n(75083),
          E = n(58952),
          N = n(21663),
          Q = n(1522),
          $ = n(26072),
          S = n(86392),
          L = n(14432),
          r = n(21113),
          M = n(66243),
          z = n(64388),
          U = n(39905),
          f = n(90626),
          w = n(37901);
        const s = {};
        (s.arabic = () => n.e(73735).then(n.t.bind(n, 73735, 19))),
          (s.brazilian = () => n.e(14971).then(n.t.bind(n, 14971, 19))),
          (s.bulgarian = () => n.e(37236).then(n.t.bind(n, 37236, 19))),
          (s.czech = () => n.e(66898).then(n.t.bind(n, 66898, 19))),
          (s.danish = () => n.e(19078).then(n.t.bind(n, 19078, 19))),
          (s.dutch = () => n.e(14875).then(n.t.bind(n, 14875, 19))),
          (s.english = () => n.e(46073).then(n.t.bind(n, 46073, 19))),
          (s.finnish = () => n.e(17822).then(n.t.bind(n, 17822, 19))),
          (s.french = () => n.e(53951).then(n.t.bind(n, 53951, 19))),
          (s.german = () => n.e(71541).then(n.t.bind(n, 71541, 19))),
          (s.greek = () => n.e(46145).then(n.t.bind(n, 46145, 19))),
          (s.hungarian = () => n.e(5896).then(n.t.bind(n, 5896, 19))),
          (s.indonesian = () => n.e(23187).then(n.t.bind(n, 23187, 19))),
          (s.italian = () => n.e(80081).then(n.t.bind(n, 80081, 19))),
          (s.japanese = () => n.e(41080).then(n.t.bind(n, 41080, 19))),
          (s.koreana = () => n.e(99770).then(n.t.bind(n, 99770, 19))),
          (s.latam = () => n.e(24306).then(n.t.bind(n, 24306, 19))),
          (s.malay = () => n.e(87049).then(n.t.bind(n, 87049, 19))),
          (s.norwegian = () => n.e(70269).then(n.t.bind(n, 70269, 19))),
          (s.polish = () => n.e(19226).then(n.t.bind(n, 19226, 19))),
          (s.portuguese = () => n.e(70554).then(n.t.bind(n, 70554, 19))),
          (s.romanian = () => n.e(94900).then(n.t.bind(n, 94900, 19))),
          (s.russian = () => n.e(68852).then(n.t.bind(n, 68852, 19))),
          (s.sc_schinese = () => n.e(98574).then(n.t.bind(n, 98574, 19))),
          (s.schinese = () => n.e(94951).then(n.t.bind(n, 94951, 19))),
          (s.spanish = () => n.e(43649).then(n.t.bind(n, 43649, 19))),
          (s.swedish = () => n.e(14416).then(n.t.bind(n, 14416, 19))),
          (s.tchinese = () => n.e(17324).then(n.t.bind(n, 17324, 19))),
          (s.thai = () => n.e(18073).then(n.t.bind(n, 18073, 19))),
          (s.turkish = () => n.e(17153).then(n.t.bind(n, 17153, 19))),
          (s.ukrainian = () => n.e(71147).then(n.t.bind(n, 71147, 19))),
          (s.vietnamese = () => n.e(1544).then(n.t.bind(n, 1544, 19)));
        async function q(d) {
          if (s[d]) return s[d]();
        }
        const h = (0, w.l)(q);
        var G = n(52211);
        const X = [
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
          H = ["copyright", "other"],
          y = ["copyright", "malware", "other"],
          T = {
            copyright: "#Workshop_ItemAdmin_Ban_Preset_Copyright",
            malware: "#Workshop_ItemAdmin_Ban_Category_Malware",
            other: "#Workshop_ItemAdmin_Ban_Category_Other",
          };
        function Y(d) {
          return $.u.Localize("#moderation_ugcban_default_note", (0, S.Jt)(d));
        }
        function W(d) {
          const {
              bBanned: j,
              bIsSupport: C,
              bWorkshopContent: v,
              onConfirm: k,
              onError: V,
              onClose: I,
            } = d,
            F = C && !j,
            J = !C && !j,
            [x, B] = (0, f.useState)(d.strBanReason),
            [o, l] = (0, f.useState)(null),
            [e, a] = (0, f.useState)(!1),
            [c, P] = (0, f.useState)(null),
            [K, m] = (0, f.useState)(!1),
            _ = j ? O : X,
            nn = h.Localize(
              j
                ? "#Workshop_ItemAdmin_Ban_Unset"
                : "#Workshop_ItemAdmin_Ban_Set",
            ),
            tn =
              !K &&
              x.trim().length > 1 &&
              !(F && o === null) &&
              !(J && v && c === null),
            on = () => {
              m(!0);
              const i = c == "malware" ? r.rU : o != null ? o : r.dk;
              Promise.resolve(k(x.trim(), i)).then(I, (Z) => {
                m(!1), V == null || V(Z);
              });
            },
            sn = (i) => {
              i !== null &&
                ((!x.trim() || (o !== null && x === Y(o))) && B(Y(i)), l(i)),
                a(!1);
            },
            ln = (i) => {
              B(i.reasonToken ? h.Localize(i.reasonToken) : ""),
                i.eModerationReason !== void 0 &&
                  o === null &&
                  l(i.eModerationReason);
            },
            en = (i) => {
              const Z = h.Localize(
                "#Workshop_ItemAdmin_Ban_Preset_CopyrightReason",
              );
              i == "copyright" && x.trim().length === 0
                ? B(Z)
                : x === Z && B(""),
                P(i);
            };
          return e
            ? (0, t.jsx)(z.s, {
                className: G.BanDialog,
                strTitle: nn,
                onClose: I,
                children: (0, t.jsx)(L.F, {
                  reasons: (0, S.cd)(),
                  onSelect: sn,
                }),
              })
            : (0, t.jsxs)(z.s, {
                className: G.BanDialog,
                strTitle: nn,
                onClose: I,
                children: [
                  C &&
                    (0, t.jsxs)(g.s, {
                      direction: "column",
                      gap: "2",
                      marginBottom: "2",
                      children: [
                        F &&
                          (0, t.jsxs)(g.s, {
                            direction: "row",
                            gap: "2",
                            align: "center",
                            children: [
                              (0, t.jsx)(u.EY, {
                                children: h.Localize(
                                  "#Workshop_ItemAdmin_Ban_Reason",
                                ),
                              }),
                              (0, t.jsx)(D.$, {
                                size: "1",
                                color: "dull",
                                onClick: () => a(!0),
                                children:
                                  o === null
                                    ? h.Localize(
                                        "#Workshop_ItemAdmin_Ban_Reason_Unselected",
                                      )
                                    : (0, S.Jt)(o),
                              }),
                            ],
                          }),
                        (0, t.jsxs)(g.s, {
                          direction: "row",
                          gap: "2",
                          align: "center",
                          children: [
                            (0, t.jsx)(u.EY, {
                              children: h.Localize(
                                "#Workshop_ItemAdmin_Ban_Presets",
                              ),
                            }),
                            (0, t.jsx)(E.l6, {
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
                  J &&
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
                            (0, t.jsx)(u.EY, {
                              children: h.Localize(
                                "#Workshop_ItemAdmin_Ban_Reason",
                              ),
                            }),
                            (0, t.jsx)(N.I, {
                              options: v ? y : H,
                              getOptionLabel: (i) => h.Localize(T[i]),
                              value: c,
                              onValueChange: en,
                            }),
                          ],
                        }),
                        c == "malware" &&
                          (0, t.jsx)(u.EY, {
                            children: h.Localize(
                              "#Workshop_ItemAdmin_Ban_Category_MalwareDesc",
                            ),
                          }),
                      ],
                    }),
                  (0, t.jsx)(Q.f, {
                    value: x,
                    onTextChange: B,
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
        var b = n(3166);
        function p() {
          const [d, j] = f.useState(null);
          return (
            f.useEffect(
              () => (
                (window.ShowUGCBanDialog = (C, v) => {
                  j({ ...v, key: Date.now(), fnOnConfirm: C });
                }),
                () => {
                  delete window.ShowUGCBanDialog;
                }
              ),
              [],
            ),
            d
              ? (0, t.jsx)(
                  W,
                  {
                    bBanned: !1,
                    strBanReason: "",
                    bIsSupport: !!b.iA.is_support,
                    bWorkshopContent: !!d.bWorkshopContent,
                    onConfirm: (C, v) => d.fnOnConfirm(v, C),
                    onClose: () => j(null),
                  },
                  d.key,
                )
              : null
          );
        }
      },
      31832: (A, R, n) => {
        "use strict";
        n.r(R), n.d(R, { UGCModerationSubjectPanel: () => B });
        var t = n(7850),
          g = n(15252),
          u = n(68031),
          D = n(75083),
          E = n(21663),
          N = n(64981),
          Q = n(49527),
          $ = n(72609),
          S = n(64388),
          L = n(90626),
          r = n(86067),
          M = n(13725),
          z = n(46085),
          U = n(86392),
          f = n(72524);
        const w = 0,
          s = 1,
          q = 2,
          h = 3;
        var G = n(21113),
          X = n(64238),
          O = n.n(X),
          H = n(93249),
          y = n.n(H);
        function T(o) {
          return !!o && o !== h;
        }
        function Y(o) {
          var l, e;
          return (
            o.subject_type === N.z8 &&
            ((l = o.coordinates) == null ? void 0 : l.ugc_content_type) ===
              16 &&
            !!(
              (e = o.reports) != null && e.some((a) => a.report_reason === G.rU)
            )
          );
        }
        function W(o) {
          return T(o.status)
            ? (0, t.jsxs)("span", {
                className: O()(y().Pill, o.className),
                children: [o.label, o.status === s && "?"],
              })
            : null;
        }
        function b(o) {
          return (0, t.jsx)(W, {
            status: o.status,
            className: y().TerrorismPill,
            label: "Terrorism",
          });
        }
        function p(o) {
          return (0, t.jsx)(W, {
            status: o.status,
            className: y().CSAMPill,
            label: "CSAM",
          });
        }
        function d(o) {
          return (0, t.jsx)(W, {
            status: o.status,
            className: y().ViolencePill,
            label: "Violent threat",
          });
        }
        function j() {
          return (0, t.jsx)("span", {
            className: O()(y().Pill, y().MalwarePill),
            children: "Malware?",
          });
        }
        function C(o) {
          const { subject: l } = o,
            e = Y(l);
          return !T(l.terrorism_status) &&
            !T(l.csam_status) &&
            !T(l.credible_threat_of_violence_status) &&
            !e
            ? null
            : (0, t.jsxs)(u.s, {
                wrap: "wrap",
                gap: "1",
                children: [
                  (0, t.jsx)(b, { status: l.terrorism_status }),
                  (0, t.jsx)(p, { status: l.csam_status }),
                  (0, t.jsx)(d, {
                    status: l.credible_threat_of_violence_status,
                  }),
                  e && (0, t.jsx)(j, {}),
                ],
              });
        }
        function v(o) {
          return { subject_type: N.z8, published_file_id: o };
        }
        function k(o) {
          return (0, z.OI)(v(o));
        }
        function V(o) {
          var l, e, a;
          const c = (0, z.w3)(v(o.publishedFileID)),
            [P, K] = (0, L.useState)(!1);
          if (c.isPending) return null;
          if (c.isError)
            return (0, t.jsx)(g.EY, {
              children: r.T.Localize("#ugcsubjectpanel_error"),
            });
          const m = (l = c.data.subjects) == null ? void 0 : l[0];
          return m
            ? (0, t.jsxs)(u.s, {
                direction: "column",
                gap: "1",
                children: [
                  (0, t.jsx)(g.EY, { children: (0, U.hl)(m) }),
                  (0, t.jsx)(C, { subject: m }),
                  (0, t.jsx)(g.EY, {
                    children: r.T.Localize(
                      "#forumsubjectlist_subjectreportsummary",
                      (e = m.unresolved_report_count) != null ? e : 0,
                      (a = m.unresolved_dispute_count) != null ? a : 0,
                    ),
                  }),
                  (0, t.jsxs)(u.s, {
                    direction: "row",
                    gap: "2",
                    children: [
                      (0, t.jsx)(D.$, {
                        size: "1",
                        color: "dull",
                        onClick: () => K(!0),
                        children: r.T.Localize("#ugcsubjectpanel_history"),
                      }),
                      (0, t.jsx)(I, { subject: m }),
                      (0, t.jsx)(F, { subject: m }),
                    ],
                  }),
                  P && (0, t.jsx)(J, { subject: m, onClose: () => K(!1) }),
                ],
              })
            : null;
        }
        function I(o) {
          const { subject: l } = o,
            e = (0, z.YL)(l.reported_content_id ? [l.reported_content_id] : []),
            a =
              !!l.assigned_moderator_steamid &&
              l.assigned_moderator_steamid !== "0";
          return !l.reported_content_id ||
            !a ||
            l.assigned_moderator_steamid !== $.iA.steamid
            ? null
            : (0, t.jsx)(D.$, {
                size: "1",
                color: "dull",
                loading: e.isPending,
                onClick: () => e.mutate(),
                children: r.T.Localize("#ugcsubjectpanel_release"),
              });
        }
        function F(o) {
          const { subject: l } = o,
            [e, a] = (0, L.useState)(!1);
          return !l.reported_content_id || l.resolved !== Q.z_
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(D.$, {
                    size: "1",
                    color: "dull",
                    onClick: () => a(!0),
                    children: r.T.Localize("#moderation_escalation_escalate"),
                  }),
                  e &&
                    (0, t.jsx)(S.s, {
                      onClose: () => a(!1),
                      strTitle: r.T.Localize("#moderation_escalation_escalate"),
                      children: (0, t.jsx)(f.R, {
                        reportedContentID: l.reported_content_id,
                        onClose: () => a(!1),
                      }),
                    }),
                ],
              });
        }
        function J(o) {
          const { subject: l, onClose: e } = o,
            [a, c] = (0, L.useState)("reports");
          return (0, t.jsx)(S.s, {
            onClose: e,
            strTitle: r.T.Localize("#ugcsubjectpanel_dialogtitle"),
            children: (0, t.jsxs)(u.s, {
              direction: "column",
              gap: "2",
              children: [
                (0, t.jsxs)(E.I.Root, {
                  value: a,
                  onValueChange: (P) => c(P),
                  children: [
                    (0, t.jsx)(E.I.Item, {
                      value: "reports",
                      children: r.T.Localize("#ugcsubjectpanel_reports"),
                    }),
                    (0, t.jsx)(E.I.Item, {
                      value: "history",
                      children: r.T.Localize("#ugcsubjectpanel_history"),
                    }),
                  ],
                }),
                a === "reports" && (0, t.jsx)(M.lX, { subject: l }),
                a === "history" &&
                  (0, t.jsx)(M.B8, {
                    reportedContentID: l.reported_content_id,
                  }),
              ],
            }),
          });
        }
        var x = n(29385);
        function B(o) {
          const { publishedFileID: l } = o,
            e = (0, x.jE)();
          return (
            (0, L.useEffect)(() => {
              const a = (c) => {
                var P;
                ((P = c.detail) == null ? void 0 : P.publishedFileID) == l &&
                  e.invalidateQueries({ queryKey: k(l) });
              };
              return (
                window.addEventListener("ugc-moderation-resolved", a),
                () => window.removeEventListener("ugc-moderation-resolved", a)
              );
            }, [e, l]),
            (0, t.jsx)(V, { publishedFileID: l })
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
