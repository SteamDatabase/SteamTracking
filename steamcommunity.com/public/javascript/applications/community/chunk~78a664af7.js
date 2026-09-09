/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8010],
  {
    84670: (e) => {
      e.exports = {
        ModerateDialogCtn: "_1JFB_3Ek9uIS-ml-7C1V3",
        Flag: "_24i0Jj7bXsdJSJdDY0a4e9",
        ModerateCtn: "_2f8lQGhpOdBN1nDokNV-_v",
        ModerationActionButtons: "_3vIg4OosURoc-guanZbMot",
        OwnerDisputeCtn: "_3o0wdHIoLEIVk2tOl2OyB1",
        EditButton: "MtttYfwYqnHlqj832CGXL",
        ValveOnly: "_1mtaTCIJfR1JZhSZpaPzUo",
        SupervisorOnly: "_2dWYzwO95xQRO7W66aSsH7",
        AcquitIcon: "HA6Hw6Hc332GoPbma_9sZ",
        SanctionIcon: "_3WS1gYqe89ISF4mi7dvtBU",
      };
    },
    16339: (e) => {
      e.exports = {
        AvatarHolder: "_1_sHcxv9rQdANehiviVZR4",
        Avatar: "_3qaudpkfSKoxlwfA-deQLX",
        Offline: "_2G4b7NcQECHtFR_D28hqQG",
        Online: "_2-QtgoeBaZrzBPhoKaud5x",
        AvatarStatus: "_3pbKzT087jaL2EeQO1qsaR",
        InGame: "_2K3Q_r66P06VLgIPo-DYsv",
        AwayOrSnooze: "_3VrE4NMh7NJt0aKikAbOA3",
        WatchingBroadcast: "FhCJhs583_Ocqm0UT9y_d",
        AvatarFrame: "_3ZPXpi9X8K-n17XiGgTMdU",
        AvatarFrameImg: "Uk4DBWxeyo7Tn8SAl8afe",
      };
    },
    98580: (e) => {
      e.exports = {
        BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
        SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
        OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
        MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
        ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
      };
    },
    30770: (e) => {
      e.exports = {
        EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
        BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
        EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
        ReasonTextArea: "_2Y0347paZ_xn2vI7jgBpkJ",
      };
    },
    59884: (e) => {
      e.exports = {
        BlockList: "F2uRfcfN3gZAD8WCNOVq6",
        BlockListItem: "eti_An9vsSQWyfrrZgqZO",
        DefaultItem: "zvsH8nLNLnBES_qChiT1v",
      };
    },
    20609: (e) => {
      e.exports = { ContentReportsTable: "vOw0zIvYhKvicImwO2-XL" };
    },
    1990: (e) => {
      e.exports = {
        narrowWidth: "500px",
        GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
        GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
        Active: "_8XjrTFzaSA8ubHvHCu44L",
        Sticky: "_3dlxz6KBJpvmA-qsVAzxs8",
        GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
        GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
        ChecklistMode: "_3blAkLFfSQrJjGklUKOP7e",
        GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
        checklistBox: "_1idkU7IA8dDPOIbsU-dRkJ",
        StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
        VOWarning: "_3LaJynPDFfccGWUEtdltlt",
        StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
        StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
        StatusInfo: "_38gm-PDPbi6lw1-aiH81HR",
        StatusIncomplete: "ZGxYVjsUSjHLRHIWkx4-L",
      };
    },
    25215: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => ve });
      var s = n(7850),
        r = n(43224),
        i = n(63987),
        a = n(55184),
        o = n(90314),
        l = n(4340),
        c = n(90182),
        u = n(22797),
        d = n(18519),
        p = n(39832),
        m = n(78327),
        h = n(98682),
        j = n(20609),
        _ = n.n(j);
      function g(e) {
        const { subject: t } = e;
        return t ? (0, s.jsx)(y, { ...e }) : (0, s.jsx)(b, {});
      }
      function b(e) {
        return (0, s.jsx)("div", {
          children: (0, s.jsxs)("table", {
            children: [
              (0, s.jsx)("thead", {
                children: (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("th", { children: "Date" }),
                    (0, s.jsx)("th", { children: "Actor" }),
                    (0, s.jsx)("th", { children: "Action" }),
                    (0, s.jsx)("th", { children: "Details" }),
                  ],
                }),
              }),
              (0, s.jsx)("tbody", {
                children: (0, s.jsx)("tr", {
                  children: (0, s.jsx)("td", {
                    colSpan: 4,
                    children: r.T.Localize("#subjectauditlog_noentries"),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function y(e) {
        var t, n, i, a, o;
        const { subject: l } = e,
          d = (0, c.Kt)(
            null == l ? void 0 : l.subject_type,
            null == l ? void 0 : l.subject_group_id,
            null == l ? void 0 : l.subject_id,
          ),
          p =
            null !==
              (i =
                null ===
                  (n =
                    null === (t = null == d ? void 0 : d.data) || void 0 === t
                      ? void 0
                      : t.entries) || void 0 === n
                  ? void 0
                  : n.length) && void 0 !== i
              ? i
              : 0,
          m =
            null !==
              (o =
                null === (a = d.data) || void 0 === a ? void 0 : a.entries) &&
            void 0 !== o
              ? o
              : [];
        return (
          m.sort((e, t) => t.timestamp - e.timestamp),
          (0, s.jsx)("div", {
            children:
              p > 0 &&
              (0, s.jsxs)("table", {
                children: [
                  (0, s.jsx)("thead", {
                    children: (0, s.jsxs)("tr", {
                      children: [
                        (0, s.jsx)("th", { children: "Date" }),
                        (0, s.jsx)("th", { children: "Actor" }),
                        (0, s.jsx)("th", { children: "Action" }),
                        (0, s.jsx)("th", { children: "Details" }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("tbody", {
                    children: [
                      void 0 === d &&
                        (0, s.jsx)("tr", {
                          children: (0, s.jsx)("td", {
                            colSpan: 4,
                            children: r.T.Localize(
                              "#subjectauditlog_noentries",
                            ),
                          }),
                        }),
                      d &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            d.isLoading &&
                              (0, s.jsx)("tr", {
                                children: (0, s.jsx)("td", {
                                  colSpan: 4,
                                  children: (0, s.jsx)(u.t, {}),
                                }),
                              }),
                            d.isError &&
                              (0, s.jsx)("tr", {
                                children: (0, s.jsx)("td", {
                                  colSpan: 4,
                                  children: r.T.Localize(
                                    "#subjectauditlog_error",
                                  ),
                                }),
                              }),
                            d.isSuccess &&
                              0 === p &&
                              (0, s.jsx)("tr", {
                                children: (0, s.jsx)("td", {
                                  colSpan: 4,
                                  children: r.T.Localize(
                                    "#subjectauditlog_noentries",
                                  ),
                                }),
                              }),
                            d.isSuccess &&
                              p > 0 &&
                              m.map((e) =>
                                (0, s.jsx)(v, { entry: e }, e.timestamp),
                              ),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
          })
        );
      }
      function v(e) {
        var t, n;
        const { entry: r } = e,
          a = (0, d.jn)(r.actor_steamid);
        return a.isSuccess && a.data
          ? (0, s.jsxs)("tr", {
              children: [
                (0, s.jsx)("td", { children: (0, p.P0)(r.timestamp, !1, "") }),
                (0, s.jsxs)("td", {
                  children: [
                    (0, s.jsx)("a", {
                      href: `${m.TS.COMMUNITY_BASE_URL}profiles/${r.actor_steamid}`,
                      children: (0, s.jsx)("span", {
                        children:
                          null ===
                            (n =
                              null === (t = a.data) || void 0 === t
                                ? void 0
                                : t.public_data) || void 0 === n
                            ? void 0
                            : n.persona_name,
                      }),
                    }),
                    " ",
                    "(",
                    (0, s.jsx)("a", {
                      href: `/moderation/activity/${r.actor_steamid}`,
                      children: "activity",
                    }),
                    ")",
                  ],
                }),
                (0, s.jsxs)("td", {
                  children: [
                    (0, i.fg)(r.action),
                    r.automated_action &&
                      (0, s.jsx)(s.Fragment, { children: " (Automated)" }),
                  ],
                }),
                (0, s.jsx)("td", {
                  children: (0, s.jsx)(B, {
                    eAction: r.action,
                    jsonData: r.additional_json_data,
                  }),
                }),
              ],
            })
          : null;
      }
      function B(e) {
        const { eAction: t, jsonData: n } = e;
        let r = {};
        switch ((n && (r = JSON.parse(n)), t)) {
          case a.Hd:
            return (0, s.jsxs)(s.Fragment, {
              children: ["Report ID: ", r.report_id],
            });
          case a._F:
            return (0, s.jsxs)(s.Fragment, {
              children: [
                "Reason: ",
                (0, i.Jt)(r.reason),
                r.resolution !== o.CC &&
                  r.resolution !== o.S6 &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("br", {}),
                      "Resolution: ",
                      (0, i.l)(r.resolution),
                    ],
                  }),
                r.sanctions &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("br", {}),
                      "Sanctions: ",
                      r.sanctions.map(i.cB).join(", "),
                    ],
                  }),
              ],
            });
          case a.Nu:
            return (0, s.jsxs)(s.Fragment, {
              children: ["Report ID: ", r.report_id],
            });
          case a.XP:
            return (0, s.jsx)(s.Fragment, {
              children: JSON.stringify(r, null, "\t"),
            });
          case a.YI:
            return (0, s.jsxs)(s.Fragment, {
              children: ["New level: ", (0, i.ar)(r.level)],
            });
          case a._7:
            return (0, s.jsxs)(s.Fragment, {
              children: ["Report ID: ", r.report_id],
            });
          default:
            return null;
        }
      }
      function x(e) {
        var t;
        const { subject: n } = e,
          i = n && n.reports && n.reports.length > 0;
        return (0, s.jsx)("table", {
          className: _().ContentReportsTable,
          children: (0, s.jsxs)("tbody", {
            children: [
              !i &&
                (0, s.jsx)("tr", {
                  children: (0, s.jsx)("td", {
                    colSpan: 4,
                    children: r.T.Localize("#contentreportslist_noreports"),
                  }),
                }),
              i &&
                (null === (t = n.reports) || void 0 === t
                  ? void 0
                  : t.map((e) => (0, s.jsx)(A, { report: e }, e.report_id))),
            ],
          }),
        });
      }
      function A(e) {
        var t, n;
        const { report: a } = e,
          c = (0, d.jn)(a.reporter_steamid);
        if (!c.isSuccess) return null;
        if (!(null === (t = c.data) || void 0 === t ? void 0 : t.public_data))
          return null;
        const u = !!a.time_disputed && a.dispute_resolved === o.z_,
          j =
            a.resolved !== o.z_ &&
            (!a.time_disputed || a.dispute_resolved !== o.z_),
          _ = 0 !== a.time_dispute_resolved,
          g = a.resolved === o.CC;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: (0, p.P0)(a.time_reported, !1, "") }),
            (0, s.jsxs)("td", {
              children: [
                (0, s.jsx)("a", {
                  href: `${m.TS.COMMUNITY_BASE_URL}profiles/${a.reporter_steamid}`,
                  children: (0, s.jsx)(h.wm, {
                    playerLinkDetails: c.data,
                    size: "X-Small",
                    alt: "Reporter",
                  }),
                }),
                " ",
                (0, s.jsx)("a", {
                  href: `${m.TS.COMMUNITY_BASE_URL}profiles/${a.reporter_steamid}`,
                  children: (0, s.jsx)("span", {
                    children:
                      null === (n = c.data.public_data) || void 0 === n
                        ? void 0
                        : n.persona_name,
                  }),
                }),
              ],
            }),
            (0, s.jsx)("td", {
              children:
                a.report_reason !== l.OQ &&
                (0, s.jsx)("span", { children: (0, i.Jt)(a.report_reason) }),
            }),
            (0, s.jsxs)("td", {
              children: [
                g &&
                  !u &&
                  !_ &&
                  (0, s.jsx)("span", {
                    children: r.T.Localize(
                      "#contentreportslist_acquitted_at",
                      (0, p.P0)(a.time_resolved, !1, ""),
                    ),
                  }),
                j &&
                  !g &&
                  !u &&
                  !_ &&
                  (0, s.jsx)("span", {
                    children: r.T.Localize(
                      "#contentreportslist_resolved_at",
                      (0, p.P0)(a.time_resolved, !1, ""),
                    ),
                  }),
                u &&
                  !_ &&
                  (0, s.jsx)("span", {
                    children: r.T.Localize(
                      "#contentreportslist_disputed_at",
                      (0, p.P0)(a.time_disputed, !1, ""),
                    ),
                  }),
                _ &&
                  (0, s.jsx)("span", {
                    children: r.T.Localize(
                      "#contentreportslist_dispute_resolved_at",
                      (0, p.P0)(a.time_dispute_resolved, !1, ""),
                    ),
                  }),
                !u && (0, s.jsx)("span", { children: a.report_text }),
                u &&
                  (0, s.jsxs)("span", {
                    children: [
                      (0, s.jsx)("br", {}),
                      "Original: ",
                      a.report_text,
                      (0, s.jsx)("br", {}),
                      "Dispute: ",
                      a.dispute_details,
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var f = n(15993),
        S = n(90626),
        w = n(65843),
        M = n(30770),
        C = n.n(M),
        T = n(45699),
        R = n(76217),
        k = n(83392),
        z = n(48474);
      function E(e) {
        const { subject: t, onClose: n } = e,
          [i, a] = (0, S.useState)(f.PV),
          o = (0, c.lY)(t.subject_type, t.subject_group_id, t.subject_id),
          l = (0, S.useRef)(null);
        return (0, s.jsxs)(R.Z, {
          className: C().EscalateSubjectDialogCtn,
          children: [
            (0, s.jsx)(R.Z, {
              children: r.T.Localize("#moderation_escalation_description"),
            }),
            (0, s.jsxs)("select", {
              className: C().EscalationLevelSelect,
              value: i,
              onChange: (e) => a(parseInt(e.target.value)),
              children: [
                (0, s.jsx)("option", {
                  value: f.HH,
                  children: r.T.Localize("#moderation_escalationlevel_any"),
                }),
                (0, s.jsx)("option", {
                  value: f.lp,
                  children: r.T.Localize(
                    "#moderation_escalationlevel_supervisor",
                  ),
                }),
                (0, s.jsx)("option", {
                  value: f.PV,
                  children: r.T.Localize("#moderation_escalationlevel_valve"),
                }),
              ],
            }),
            (0, s.jsx)("label", {
              children: r.T.Localize("#moderation_escalation_escalationnote"),
            }),
            (0, s.jsx)(T.dO, { className: C().ReasonTextArea, ref: l }),
            (0, s.jsxs)(k.s, {
              direction: "row",
              justify: "end",
              children: [
                (0, s.jsx)(T.fu, {
                  onClick: n,
                  children: w.u.Localize("#moderation_cancel"),
                }),
                (0, s.jsx)(z.$, {
                  onClick: async () => {
                    var e;
                    const t =
                      null === (e = l.current) || void 0 === e
                        ? void 0
                        : e.value;
                    await o.mutateAsync({ eNewLevel: i, strNote: t }), n();
                  },
                  loading: o.isPending,
                  children: r.T.Localize("#moderation_escalation_escalate"),
                }),
              ],
            }),
          ],
        });
      }
      var I = n(64115),
        U = n(98580),
        F = n.n(U),
        L = n(59884),
        q = n.n(L),
        Q = n(55388);
      function O(e) {
        const [t, n] = (0, S.useState)(null),
          [r, a] = (0, S.useState)([]),
          [o, l] = (0, S.useState)(!1),
          [c, u] = (0, S.useState)(!1);
        let d = e.reasons;
        for (const e of r) d = d[e].children;
        const p = null !== t ? (0, i.V$)(t) : null,
          m = null !== t ? (0, i.GA)(t) : null,
          h = () => {
            null !== t
              ? n(null)
              : 0 === r.length
                ? e.onSelect(null)
                : a(r.slice(0, -1));
          };
        return (0, s.jsxs)("div", {
          children: [
            null === t &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    className: q().BlockList,
                    children: d.map((t, o) => {
                      const l = () => {
                        if ((0, i.Ju)(t)) {
                          const e = [...r];
                          e.push(o), a(e);
                        } else {
                          if (!(0, i.X$)(t))
                            throw new Error("This should be unreachable.");
                          (0, i.V$)(t.value) || (0, i.GA)(t.value)
                            ? n(t.value)
                            : e.onSelect(t.value);
                        }
                      };
                      return (0, i.Ur)(t)
                        ? (0, s.jsx)(
                            T.Ii,
                            {
                              className: q().BlockListItem,
                              href: t.url,
                              children: w.u.Localize(t.strLocToken),
                            },
                            t.url,
                          )
                        : (0, s.jsxs)(
                            R.Z,
                            {
                              onActivate: l,
                              className: q().BlockListItem,
                              children: [
                                (0, s.jsx)("span", {
                                  children: (0, i.Ju)(t)
                                    ? w.u.Localize(t.strLocToken)
                                    : (0, i.Jt)(t.value),
                                }),
                                (0, i.Ju)(t) &&
                                  (0, s.jsx)("span", { children: "▶" }),
                              ],
                            },
                            o,
                          );
                    }),
                  }),
                  (0, s.jsx)(Q.n9, { onClick: h, children: "Back" }),
                ],
              }),
            null !== t &&
              (0, s.jsxs)("div", {
                className: q().BlockList,
                children: [
                  (0, s.jsx)("div", {
                    className: q().BlockListItem,
                    children: (0, i.Jt)(t),
                  }),
                  null !== p &&
                    (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("input", {
                          type: "checkbox",
                          checked: o,
                          onChange: (e) => l(e.target.checked),
                        }),
                        " Targeted at women",
                      ],
                    }),
                  null !== m &&
                    (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("input", {
                          type: "checkbox",
                          checked: c,
                          onChange: (e) => u(e.target.checked),
                        }),
                        " Deepfake",
                      ],
                    }),
                  (0, s.jsxs)("div", {
                    className: q().BottomButtons,
                    children: [
                      (0, s.jsx)(Q.n9, { onClick: h, children: "Back" }),
                      (0, s.jsx)(Q.n9, {
                        onClick: () => {
                          let n = t;
                          null !== n &&
                            (o && null !== (0, i.V$)(n) && (n = (0, i.V$)(n)),
                            c && null !== (0, i.GA)(n) && (n = (0, i.GA)(n)),
                            e.onSelect(n));
                        },
                        children: "Continue",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var D,
        N,
        W = n(52038),
        P = n(81393),
        K = n(37085),
        G = n(88942),
        V = n(22837),
        H = n(80613),
        J = n.n(H),
        Z = n(89068),
        X = n(56545);
      class Y extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.quicktext_id || Z.Sg(Y.M()),
            H.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  requires_update: {
                    n: 2,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                  title: { n: 3, br: Z.qM.readString, bw: Z.gp.writeString },
                  hidden: { n: 4, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  approved: { n: 5, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  help_request_types: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: Z.qM.readUint32,
                    pbr: Z.qM.readPackedUint32,
                    bw: Z.gp.writeRepeatedUint32,
                  },
                  content: { n: 7, c: $ },
                  button_text: {
                    n: 8,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  replacement: { n: 9, br: Z.qM.readBool, bw: Z.gp.writeBool },
                  payment_methods: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: Z.qM.readUint32,
                    pbr: Z.qM.readPackedUint32,
                    bw: Z.gp.writeRepeatedUint32,
                  },
                  appids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: Z.qM.readUint32,
                    pbr: Z.qM.readPackedUint32,
                    bw: Z.gp.writeRepeatedUint32,
                  },
                  escalation_level: {
                    n: 12,
                    br: Z.qM.readEnum,
                    bw: Z.gp.writeEnum,
                  },
                  partner_only: {
                    n: 13,
                    br: Z.qM.readBool,
                    bw: Z.gp.writeBool,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = Z.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (J().BinaryReader)(e),
            n = new Y();
          return Y.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (J().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (J().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickText";
        }
      }
      class $ extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.content || Z.Sg($.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  content: { n: 1, br: Z.qM.readString, bw: Z.gp.writeString },
                  major_revision: {
                    n: 2,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  minor_revision: {
                    n: 3,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  author: { n: 4, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                  last_update: {
                    n: 5,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  language: { n: 6, br: Z.qM.readInt32, bw: Z.gp.writeInt32 },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = Z.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT($.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (J().BinaryReader)(e),
            n = new $();
          return $.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (J().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (J().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickTextContent";
        }
      }
      class ee extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.quicktext_id || Z.Sg(ee.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: Z.qM.readUint32,
                    bw: Z.gp.writeUint32,
                  },
                  language: { n: 2, br: Z.qM.readString, bw: Z.gp.writeString },
                  from_sql: { n: 3, br: Z.qM.readBool, bw: Z.gp.writeBool },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = Z.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (J().BinaryReader)(e),
            n = new ee();
          return ee.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (J().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (J().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Request";
        }
      }
      class te extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.quicktext || Z.Sg(te.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  quicktext: { n: 1, c: Y },
                  english_reference: { n: 2, c: $ },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = Z.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (J().BinaryReader)(e),
            n = new te();
          return te.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (J().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (J().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Response";
        }
      }
      class ne extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || Z.Sg(ne.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                  log_type: { n: 2, br: Z.qM.readString, bw: Z.gp.writeString },
                  version_string: {
                    n: 3,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  log_contents: {
                    n: 4,
                    br: Z.qM.readString,
                    bw: Z.gp.writeString,
                  },
                  request_id: {
                    n: 5,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = Z.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (J().BinaryReader)(e),
            n = new ne();
          return ne.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (J().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (J().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Request";
        }
      }
      class se extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.id || Z.Sg(se.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  id: {
                    n: 1,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = Z.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (J().BinaryReader)(e),
            n = new se();
          return se.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (J().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (J().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Response";
        }
      }
      class re extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.appid || Z.Sg(re.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  appid: { n: 1, br: Z.qM.readUint32, bw: Z.gp.writeUint32 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = Z.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (J().BinaryReader)(e),
            n = new re();
          return re.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (J().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (J().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Request";
        }
      }
      class ie extends H.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.request_id || Z.Sg(ie.M()),
            H.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  request_id: {
                    n: 1,
                    br: Z.qM.readUint64String,
                    bw: Z.gp.writeUint64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = Z.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return Z.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return Z.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (J().BinaryReader)(e),
            n = new ie();
          return ie.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Z.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (J().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Z.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (J().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Response";
        }
      }
      !(function (e) {
        e.GetQuickText = function (e, t, n) {
          return e.SendMsg(
            "SupportAgents.GetQuickText#1",
            (0, X.I8)(ee, t, n),
            te,
            { bConstMethod: !0, ePrivilege: 5 },
          );
        };
      })(D || (D = {})),
        (function (e) {
          (e.UploadUserApplicationLog = function (e, t, n) {
            return e.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, X.I8)(ne, t, n),
              se,
              { ePrivilege: 1 },
            );
          }),
            (e.GetApplicationLogDemand = function (e, t, n) {
              return e.SendMsg(
                "HelpRequestLogs.GetApplicationLogDemand#1",
                (0, X.I8)(re, t, n),
                ie,
                { ePrivilege: 1 },
              );
            });
        })(N || (N = {}));
      var ae = n(23809),
        oe = n(4869);
      function le(e) {
        const [t, n] = (0, S.useState)(null),
          [a, o] = (0, S.useState)("main"),
          [l, c] = (0, S.useState)(!1),
          [d, p] = (0, S.useState)(!1),
          [h, j] = (0, S.useState)(null),
          [_, g] = (0, S.useState)(null),
          [b, y] = (0, S.useState)(null),
          [v, B] = (0, S.useState)(!1),
          [x, A] = (0, S.useState)(!1),
          [w, M] = (0, S.useState)(f.HH),
          [C, T] = (0, S.useState)(""),
          k =
            void 0 !== e.rtContentCreatedAt &&
            (Date.now() / 1e3 - e.rtContentCreatedAt) / 2592e3,
          z = l || d || h || _ || b || v || x,
          E =
            ((U = e.authorSteamID),
            (0, G.I)({
              queryKey: ["get_primary_language_for_user", U],
              queryFn: async () => {
                if ("0" === U || !U) throw new Error("Invalid steamid");
                const e = await fetch(
                    `${m.TS.COMMUNITY_BASE_URL}profiles/${U}/ajaxlanguagepreferences`,
                  ),
                  t = await e.json();
                if (t.success === K.R) return t.preferences;
                throw new Error(
                  "Failed GetPrimaryLanguageForUser. EResult: " + t.success,
                );
              },
            }));
        var U;
        let L = V.Bhc;
        if (E.isSuccess) {
          const e = E.data;
          void 0 !== e.pref_primary_language && -1 !== e.pref_primary_language
            ? (L = e.pref_primary_language)
            : void 0 !== e.last_logon_langauge &&
              -1 !== e.last_logon_langauge &&
              (L = e.last_logon_langauge);
        }
        const q = (function (e, t) {
          const n = (0, ae.KV)();
          return (0, G.I)({
            queryKey: ["get_quick_text", e, t],
            queryFn: async () => {
              if (null == e || void 0 === t) return null;
              const s = X.w.Init(ee);
              s.Body().set_quicktext_id(e),
                s.Body().set_language((0, V.LgB)(t));
              const r = await D.GetQuickText(n, s);
              if (r.GetEResult() !== K.R)
                throw new Error(
                  "useQuickText failed with EResult " + r.GetEResult(),
                );
              return r.Body().toObject();
            },
            enabled: void 0 !== e,
          });
        })((0, i.AH)(t), L);
        (0, S.useEffect)(() => {
          var e, t, n, s, r, i, a;
          T(
            null !==
              (a =
                null !==
                  (s =
                    null ===
                      (n =
                        null ===
                          (t =
                            null === (e = q.data) || void 0 === e
                              ? void 0
                              : e.quicktext) || void 0 === t
                          ? void 0
                          : t.content) || void 0 === n
                      ? void 0
                      : n.content) && void 0 !== s
                  ? s
                  : null ===
                        (i =
                          null === (r = q.data) || void 0 === r
                            ? void 0
                            : r.english_reference) || void 0 === i
                    ? void 0
                    : i.content) && void 0 !== a
              ? a
              : "",
          );
        }, [q.data, E.data]);
        const N = !1,
          H = !1,
          J = !1;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            "reason" === a &&
              (0, s.jsx)(O, {
                reasons: i.UL,
                onSelect: (e) => {
                  n(e), o("main");
                },
              }),
            "main" === a &&
              (0, s.jsxs)(R.Z, {
                children: [
                  (0, s.jsxs)(R.Z, {
                    className: F().SanctionForm,
                    children: [
                      e.sanctionMutation.isError &&
                        (0, s.jsxs)("div", {
                          className: (0, W.A)(F().OneColumn, F().ErrorMessage),
                          children: [
                            (0, s.jsx)(oe.Q9b, {}),
                            " Error: ",
                            e.sanctionMutation.error.message,
                          ],
                        }),
                      (0, s.jsx)("label", {
                        htmlFor: "reason",
                        children: "Reason:",
                      }),
                      (0, s.jsx)("button", {
                        id: "reason",
                        className: F().ClickableText,
                        onClick: () => o("reason"),
                        children:
                          null === t
                            ? r.T.Localize(
                                "#commentsanctiondialog_selectreason",
                              )
                            : (0, i.Jt)(t),
                      }),
                      (0, s.jsxs)("label", {
                        className: F().OneColumn,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            checked: l,
                            onChange: (e) => c(e.target.checked),
                          }),
                          " Delete",
                        ],
                      }),
                      (0, s.jsxs)("label", {
                        className: F().OneColumn,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            checked: d,
                            onChange: (e) => p(e.target.checked),
                          }),
                          " Issue Warning",
                        ],
                      }),
                      k &&
                        !!h &&
                        (0, s.jsxs)("div", {
                          className: (0, W.A)(F().OneColumn, F().ErrorMessage),
                          children: [
                            (0, s.jsx)(oe.Q9b, {}),
                            " Content is older than 30 days. Are you sure you want to ban?",
                          ],
                        }),
                      e.clanSteamID &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "hubban",
                              children: "Ban from hub:",
                            }),
                            (0, s.jsxs)("select", {
                              id: "hubban",
                              onChange: (e) =>
                                j(
                                  "0" === e.target.value
                                    ? null
                                    : parseInt(e.target.value),
                                ),
                              value: null != h ? h : 0,
                              children: [
                                (0, s.jsx)("option", {
                                  value: "0",
                                  children: "Do not ban",
                                }),
                                (0, s.jsx)("option", {
                                  value: "1",
                                  children: "1 day",
                                }),
                                (0, s.jsx)("option", {
                                  value: "3",
                                  children: "3 days",
                                }),
                                (0, s.jsx)("option", {
                                  value: "7",
                                  children: "7 days",
                                }),
                                (0, s.jsx)("option", {
                                  value: "14",
                                  children: "14 days",
                                }),
                                (0, s.jsx)("option", {
                                  value: "30",
                                  children: "30 days",
                                }),
                                (0, s.jsx)("option", {
                                  value: "90",
                                  children: "3 months",
                                }),
                                (0, s.jsx)("option", {
                                  value: "365",
                                  children: "1 year",
                                }),
                                (0, s.jsx)("option", {
                                  value: "-1",
                                  children: "Permanent",
                                }),
                              ],
                            }),
                            N,
                          ],
                        }),
                      k &&
                        !!_ &&
                        (0, s.jsxs)("div", {
                          className: (0, W.A)(F().OneColumn, F().ErrorMessage),
                          children: [
                            (0, s.jsx)(oe.Q9b, {}),
                            " Content is older than 30 days. Are you sure you want to ban?",
                          ],
                        }),
                      (0, s.jsx)("label", {
                        htmlFor: "communityban",
                        children: "Ban from community:",
                      }),
                      (0, s.jsxs)("select", {
                        id: "communityban",
                        onChange: (e) =>
                          g(
                            "0" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != _ ? _ : 0,
                        children: [
                          (0, s.jsx)("option", {
                            value: "0",
                            children: "Do not ban",
                          }),
                          (0, s.jsx)("option", {
                            value: "1",
                            children: "1 day",
                          }),
                          (0, s.jsx)("option", {
                            value: "3",
                            children: "3 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "7",
                            children: "7 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "14",
                            children: "14 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "30",
                            children: "30 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "90",
                            children: "3 months",
                          }),
                          (0, s.jsx)("option", {
                            value: "365",
                            children: "1 year",
                          }),
                          (0, s.jsx)("option", {
                            value: "-1",
                            children: "Permanent",
                          }),
                        ],
                      }),
                      H,
                      (0, s.jsx)("label", {
                        htmlFor: "deletecomments",
                        children: "Delete comments since:",
                      }),
                      (0, s.jsxs)("select", {
                        id: "deletecomments",
                        disabled: x,
                        onChange: (e) =>
                          y(
                            "-1" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != b ? b : -1,
                        children: [
                          (0, s.jsx)("option", {
                            value: "-1",
                            children: "Do not delete",
                          }),
                          (0, s.jsx)("option", {
                            value: "1",
                            children: "1 day",
                          }),
                          (0, s.jsx)("option", {
                            value: "7",
                            children: "7 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "14",
                            children: "14 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "30",
                            children: "30 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "0",
                            children: "All comments",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("span", {
                        className: F().OneColumn,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            checked: v,
                            onChange: (e) => B(e.target.checked),
                          }),
                          " Permanent trade ban",
                        ],
                      }),
                      J,
                      (0, s.jsxs)("span", {
                        className: F().OneColumn,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            checked: x,
                            onChange: (e) => A(e.target.checked),
                          }),
                          " Mark as suspicious",
                        ],
                      }),
                      (0, s.jsx)("label", {
                        htmlFor: "escalateto",
                        children: "Escalate to",
                      }),
                      (0, s.jsxs)("select", {
                        id: "escalateto",
                        onChange: (e) => M(parseInt(e.target.value)),
                        value: w,
                        children: [
                          (0, s.jsx)("option", {
                            value: f.HH,
                            children: "Do not escalate",
                          }),
                          (0, s.jsx)("option", {
                            value: f.lp,
                            children: "Supervisor",
                          }),
                          (0, s.jsx)("option", {
                            value: f.PV,
                            children: "Valve",
                          }),
                        ],
                      }),
                      (0, s.jsx)("textarea", {
                        className: (0, W.A)(F().OneColumn, F().MessageTextArea),
                        placeholder: "Message to send (required)",
                        value: C,
                        onChange: (e) => T(e.target.value),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(R.Z, {
                    className: F().BottomButtons,
                    children: [
                      e.sanctionMutation.isPending &&
                        (0, s.jsx)(u.t, { size: "small" }),
                      !e.sanctionMutation.isPending &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(Q.Oh, {
                              onClick: e.onCancel,
                              children: "Cancel",
                            }),
                            (0, s.jsx)(Q.n9, {
                              onClick: async () => {
                                (0, P.wT)(
                                  null !== t,
                                  "eReason must be non-null to sanction",
                                );
                                const n = [];
                                l && n.push({ sanction: I.EF }),
                                  d && n.push({ sanction: I.Cv }),
                                  h && n.push({ sanction: I.ME, days: h }),
                                  _ && n.push({ sanction: I.sR, days: _ }),
                                  b && n.push({ sanction: I.bX, days: b }),
                                  v && n.push({ sanction: I.Fh, days: -1 }),
                                  x && n.push({ sanction: I.X5 }),
                                  w === f.lp
                                    ? n.push({
                                        sanction: I.nw,
                                        escalate_to: f.lp,
                                      })
                                    : w === f.PV &&
                                      n.push({
                                        sanction: I.nw,
                                        escalate_to: f.PV,
                                      }),
                                  await e.sanctionMutation.mutateAsync({
                                    sanctions: n,
                                    message: C.trim(),
                                    reason: t,
                                  }),
                                  e.onSanction();
                              },
                              disabled:
                                null === t || !z || 0 === C.trim().length,
                              children: "Sanction",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var ce = n(32754),
        ue = n(62490),
        de = n(84670),
        pe = n.n(de),
        me = n(84811),
        he = n(9154),
        je = n(37049),
        _e = n(38135),
        ge = n(68255),
        be = n(12155),
        ye = n(28491);
      function ve(e) {
        const { subject: t } = e,
          [n, i] = (0, S.useState)(!1),
          a =
            t &&
            (t.unresolved_report_count > 0 || t.unresolved_dispute_count > 0),
          o = (0, s.jsx)(ye.W, {
            onClick: () => i(!0),
            children: (0, s.jsxs)(k.s, {
              direction: "row",
              justify: "between",
              align: "baseline",
              gap: "1",
              children: [
                a &&
                  (0, s.jsx)("img", {
                    className: pe().Flag,
                    src: `${m.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                  }),
                r.T.Localize("#commentsanctiondialog_moderate"),
                t &&
                  t.required_moderator_level === f.PV &&
                  (0, s.jsx)("span", {
                    className: pe().ValveOnly,
                    children: "(VO)",
                  }),
                t &&
                  t.required_moderator_level === f.lp &&
                  (0, s.jsx)("span", {
                    className: pe().SupervisorOnly,
                    children: "(Supervisor)",
                  }),
              ],
            }),
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            n && (0, s.jsx)(xe, { onClose: () => i(!1), ...e }),
            t &&
              (0, s.jsx)(ce.Gq, {
                toolTipContent: (0, s.jsx)(Be, { subject: t }),
                direction: "bottom",
                nDelayShowMS: 0,
                children: o,
              }),
            !t && o,
          ],
        });
      }
      function Be(e) {
        const { subject: t } = e,
          n = (0, S.useMemo)(() => {
            var e;
            const n = (0, ue.D5)(
              null !== (e = null == t ? void 0 : t.reports) && void 0 !== e
                ? e
                : [],
              (e) => e.report_reason,
            );
            return n.sort((e, t) => e[1] - t[1]), n;
          }, [t.reports]);
        return 0 === n.length
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  children: r.T.Localize("#reasonlist_title"),
                }),
                n.map(([e, t]) =>
                  (0, s.jsx)(
                    "div",
                    {
                      children: r.T.Localize(
                        "#reasonlist_reasonwithcount",
                        (0, i.Jt)(e),
                        t,
                      ),
                    },
                    e,
                  ),
                ),
              ],
            });
      }
      function xe(e) {
        var t, n, i;
        const {
            sanctionMutation: a,
            acquitMutation: l,
            subject: c,
            subjectKey: u,
            clanSteamID: d,
            authorSteamID: p,
            onClose: h,
          } = e,
          [j, _] = (0, S.useState)("main"),
          b = [
            {
              name: "Reports",
              key: "reports",
              contents: (0, s.jsx)(me.tH, {
                children: (0, s.jsx)(x, { subject: c }),
              }),
            },
            {
              name: "History",
              key: "history",
              contents: (0, s.jsx)(me.tH, {
                children: (0, s.jsx)(g, { subject: c }),
              }),
            },
            {
              name: "Details",
              key: "details",
              contents: (0, s.jsx)(me.tH, { children: e.children }),
            },
          ];
        let y = 0,
          v = 0;
        if (c)
          for (const e of c.reports)
            e.time_resolved && !e.time_disputed && y++,
              e.time_dispute_resolved && v++;
        const B = void 0 !== c && !c.owner_dispute_time && c.resolved === o.S6,
          A = void 0 !== c && !!c.owner_dispute_time;
        return (0, s.jsx)(je.wA, {
          onlyPopoutIfNeeded: !0,
          popupHeight: 340,
          popupWidth: 640,
          strTitle: "Moderate subject",
          children: (0, s.jsx)(he.eV, {
            bAllowFullSize: !0,
            title: "Moderate",
            "aria-describedby": "moderate",
            onCancel: e.onClose,
            className: pe().ModerateDialog,
            children: (0, s.jsx)(ge.f3, {
              children: (0, s.jsx)(ge.a3, {
                children: (0, s.jsxs)("div", {
                  className: pe().ModerateDialogCtn,
                  children: [
                    "main" === j &&
                      (0, s.jsxs)("div", {
                        className: pe().ModerateCtn,
                        children: [
                          (0, s.jsxs)("div", {
                            className: pe().ModerationData,
                            children: [
                              (0, s.jsxs)("div", {
                                children: [
                                  null !==
                                    (t =
                                      null == c
                                        ? void 0
                                        : c.unresolved_report_count) &&
                                  void 0 !== t
                                    ? t
                                    : 0,
                                  " unresolved / ",
                                  y,
                                  " resolved / ",
                                  null !==
                                    (n =
                                      null == c
                                        ? void 0
                                        : c.unresolved_dispute_count) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                                  " disputed / ",
                                  v,
                                  " disputes resolved",
                                ],
                              }),
                              (0, s.jsx)(_e.V, { tabs: b }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: pe().ModerationActionButtons,
                            children: [
                              (0, s.jsx)("button", {
                                onClick: () => _("sanction"),
                                children: (0, s.jsxs)(k.s, {
                                  direction: "row",
                                  justify: "center",
                                  align: "center",
                                  children: [
                                    (0, s.jsx)(be.X, {
                                      className: pe().SanctionIcon,
                                    }),
                                    " Sanction",
                                  ],
                                }),
                              }),
                              (0, s.jsx)(Se, {
                                subject: c,
                                acquitMutation: l,
                                onClose: h,
                              }),
                              (0, s.jsx)(we, { ...e, subject: c, onClose: h }),
                              (0, s.jsx)(T.fu, {
                                disabled: !e.subject,
                                onClick: () => _("escalate"),
                                children: r.T.Localize(
                                  "#moderation_escalation_escalate",
                                ),
                              }),
                              !A &&
                                (0, s.jsx)("button", {
                                  disabled: !B,
                                  onClick: () => _("ownerdispute"),
                                  children: "Owner Dispute",
                                }),
                              A &&
                                (0, s.jsxs)("span", {
                                  children: [
                                    (0, s.jsx)("a", {
                                      href: `${m.TS.HELP_BASE_URL}tickermaster/ticket/${c.owner_dispute_details}`,
                                      children: r.T.Localize(
                                        "#moderation_already_owner_disputed",
                                      ),
                                    }),
                                    (0, s.jsx)("button", {
                                      onClick: () =>
                                        _("editownerdisputedetails"),
                                      className: pe().EditButton,
                                      children: (0, s.jsx)(be.ffu, {}),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    "escalate" === j &&
                      (0, s.jsx)(E, { subject: u, onClose: () => _("main") }),
                    "sanction" === j &&
                      (0, s.jsx)(le, {
                        subject: u,
                        clanSteamID: d,
                        authorSteamID: p,
                        sanctionMutation: a,
                        onSanction: () => {
                          e.onClose(),
                            1 === window.location.href.split("#").length &&
                              "0" !== u.subject_id &&
                              (window.location.href += "#c" + u.subject_id),
                            window.location.reload();
                        },
                        onCancel: () => _("main"),
                      }),
                    "ownerdispute" === j &&
                      (0, s.jsx)(fe, {
                        subject: u,
                        authorSteamId: p,
                        onClose: () => _("main"),
                      }),
                    "editownerdisputedetails" === j &&
                      (0, s.jsx)(Ae, {
                        subject: u,
                        onClose: () => _("main"),
                        currentDetails:
                          null !==
                            (i =
                              null == c ? void 0 : c.owner_dispute_details) &&
                          void 0 !== i
                            ? i
                            : "",
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function Ae(e) {
        const { subject: t, onClose: n, currentDetails: i } = e,
          [a, o] = (0, S.useState)(i),
          l = (0, c.wy)(t.subject_type, t.subject_group_id, t.subject_id, a);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("label", {
              children: [
                r.T.Localize("#moderation_editownerdisputedetails_label"),
                (0, s.jsx)("input", {
                  type: "text",
                  value: a,
                  onChange: (e) => o(e.target.value),
                }),
              ],
            }),
            (0, s.jsxs)(k.s, {
              justify: "between",
              direction: "row",
              children: [
                (0, s.jsx)(T.fu, {
                  onClick: async () => {
                    await l.mutateAsync(), n();
                  },
                  children: r.T.Localize(
                    "#moderation_editownerdisputedetails_save",
                  ),
                }),
                (0, s.jsx)(z.$, {
                  onClick: n,
                  loading: l.isPending,
                  children: r.T.Localize("#moderation_ownerdispute_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      function fe(e) {
        const { authorSteamId: t, subject: n, onClose: i } = e,
          [a, o] = (0, S.useState)(""),
          l = (0, c.y4)(t, n.subject_type, n.subject_group_id, n.subject_id, a);
        return (0, s.jsxs)(R.Z, {
          className: pe().OwnerDisputeCtn,
          children: [
            (0, s.jsx)("div", {
              children: r.T.Localize("#moderation_ownerdispute_description"),
            }),
            (0, s.jsxs)("label", {
              children: [
                r.T.Localize("#moderation_ownerdispute_ticketmastercode"),
                " ",
                (0, s.jsx)("input", {
                  type: "text",
                  value: a,
                  onChange: (e) => o(e.target.value),
                }),
              ],
            }),
            (0, s.jsxs)(k.s, {
              justify: "between",
              direction: "row",
              children: [
                (0, s.jsx)(T.fu, {
                  onClick: async () => {
                    await l.mutateAsync(), i();
                  },
                  children: r.T.Localize("#moderation_ownerdispute_dispute"),
                }),
                (0, s.jsx)(T.fu, {
                  onClick: i,
                  children: r.T.Localize("#moderation_ownerdispute_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      function Se(e) {
        const { acquitMutation: t, onClose: n, subject: i } = e,
          a =
            i &&
            (i.unresolved_report_count > 0 || i.unresolved_dispute_count > 0);
        return (0, s.jsx)("button", {
          onClick: async () => {
            await t.mutateAsync(void 0), n();
          },
          disabled: !a,
          children: (0, s.jsxs)(k.s, {
            direction: "row",
            justify: "center",
            align: "center",
            children: [
              (0, s.jsx)(be.jlt, { className: pe().AcquitIcon }),
              " ",
              r.T.Localize("#moderation_actions_acquit"),
            ],
          }),
        });
      }
      function we(e) {
        const { subject: t, subjectKey: n, onClose: i } = e,
          a =
            t &&
            t.resolved !== o.z_ &&
            (t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0),
          l = (0, c.N8)();
        return (0, s.jsx)("button", {
          onClick: async () => {
            await l.mutateAsync({
              eSubjectType: n.subject_type,
              ulSubjectGroupID: n.subject_group_id,
              ulSubjectID: n.subject_id,
            }),
              i();
          },
          disabled: !a,
          children: r.T.Localize("#moderation_actions_sustain"),
        });
      }
    },
    99171: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => i });
      var s = n(66418);
      const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function i(e, t) {
        let n = "0000000000000000000000000000000000000000";
        "string" == typeof e
          ? (n = e)
          : e &&
            (n =
              (function (e) {
                if (!e) return "";
                return (
                  "function" == typeof e[Symbol.iterator]
                    ? Array.from(e)
                    : Object.values(e).filter((e) => "number" == typeof e)
                )
                  .map((e) => e.toString(16).padStart(2, "0"))
                  .join("");
              })(e) || n);
        let i = ".jpg";
        "0000000000000000000000000000000000000000" === n && (n = r),
          44 == n.length && ((i = n.slice(-4)), (n = n.slice(0, 40)));
        let a = s.TS.AVATAR_BASE_URL;
        switch (
          (a ||
            ((a = s.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += n.slice(0, 2) + "/")),
          (a += n),
          t)
        ) {
          case "X-Small":
          case "Small":
            break;
          case "Medium":
          case "MediumLarge":
            a += "_medium";
            break;
          case "Large":
          case "X-Large":
          case "FillArea":
            a += "_full";
        }
        return (a += i), a;
      }
    },
    98682: (e, t, n) => {
      "use strict";
      n.d(t, { Ul: () => j, wm: () => _ });
      var s = n(7850);
      const r =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
        i =
          n.p +
          "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
        a =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
      var o = n(22837),
        l = n(90626);
      function c(e) {
        const { rgSources: t, onIncrementalError: n, alt: r, ...i } = e,
          [a, o] = (0, l.useState)(0),
          c = t[a];
        return (0, s.jsx)("img", {
          onError: (e) => {
            o((e) => e + 1), null == n || n(e, c, a);
          },
          alt: r,
          ...i,
          src: c,
        });
      }
      var u = n(66418),
        d = n(64238),
        p = n.n(d),
        m = n(16339),
        h = n(99171);
      function j(e) {
        const {
            avatarURL: t,
            size: n,
            statusStyle: o,
            statusPosition: l,
            className: d,
            children: h,
            isOnline: j,
            isInGame: _,
            isWatchingBroadcast: g,
            isAwayOrSnooze: b,
            alt: y,
          } = e,
          v = [];
        return (
          t && v.push(t),
          v.push(
            (function (e) {
              switch (e) {
                case "X-Small":
                case "Small":
                  return (0, u.YJ)(r);
                case "Medium":
                case "MediumLarge":
                  return (0, u.YJ)(a);
                case "Large":
                case "X-Large":
                case "FillArea":
                  return (0, u.YJ)(i);
              }
            })(null != n ? n : "Medium"),
          ),
          (0, s.jsxs)("div", {
            className: p()(
              m.AvatarHolder,
              {
                [m.Offline]: !j,
                [m.Online]: j,
                [m.InGame]: _,
                [m.WatchingBroadcast]: g,
                [m.AwayOrSnooze]: b,
              },
              d,
            ),
            "data-size": n,
            "data-status-position": l,
            children: [
              (0, s.jsx)("div", { className: m.AvatarStatus, style: o }),
              (0, s.jsx)(c, {
                className: p()(m.Avatar),
                rgSources: v,
                draggable: !1,
                alt: y,
              }),
              h,
            ],
          })
        );
      }
      function _(e) {
        var t, n, r, i, a, l, c;
        const {
          playerLinkDetails: d,
          animatedAvatar: p,
          avatarFrame: m,
          size: _,
          ...g
        } = e;
        let b = (0, h.t)(
          null === (t = d.public_data) || void 0 === t
            ? void 0
            : t.sha_digest_avatar,
          _,
        );
        return (
          (null === (n = null == p ? void 0 : p.image_small) || void 0 === n
            ? void 0
            : n.length) &&
            (b = u.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + p.image_small),
          (0, s.jsx)(j, {
            avatarURL: b,
            size: _,
            isOnline:
              (null === (r = d.private_data) || void 0 === r
                ? void 0
                : r.persona_state) === o.UXk,
            isInGame:
              void 0 !==
              (null === (i = d.private_data) || void 0 === i
                ? void 0
                : i.game_id),
            isWatchingBroadcast:
              void 0 !==
              (null === (a = d.private_data) || void 0 === a
                ? void 0
                : a.watching_broadcast_accountid),
            isAwayOrSnooze:
              (null === (l = d.private_data) || void 0 === l
                ? void 0
                : l.persona_state) === o.PrD ||
              (null === (c = d.private_data) || void 0 === c
                ? void 0
                : c.persona_state) === o.vPz,
            ...g,
          })
        );
      }
    },
    11333: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => l, c: () => o });
      var s = n(78619),
        r = n(49845),
        i = n(58632),
        a = n.n(i);
      function o(e, t) {
        return new (a())(
          async (t) => {
            const n = [...t],
              r = await s.xtC.GetPlayerLinkDetails(e, { steamids: n }),
              i = new Map();
            return (
              r
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  i.set(t.public_data.steamid, t);
                }),
              n.map((e) => {
                var t;
                return null !== (t = i.get(e)) && void 0 !== t ? t : null;
              })
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function l(e) {
        return (0, r.V)("PlayerLinkDetails", () => o(e));
      }
    },
    18519: (e, t, n) => {
      "use strict";
      n.d(t, { jn: () => d });
      var s = n(66418),
        r = n(23809),
        i = n(29233),
        a = n(88942),
        o = n(11333);
      const l = 1;
      function c(e) {
        return ["PlayerLinkDetails", e];
      }
      function u(e, t) {
        const n =
          "number" == typeof t
            ? i.b2.InitFromAccountID(t, s.TS.EUNIVERSE).ConvertTo64BitString()
            : t;
        return {
          queryKey: c(n),
          queryFn: async () => {
            if (n) {
              return (function (e) {
                var t, n, s, r, i;
                return (
                  null === (t = null == e ? void 0 : e.private_data) ||
                    void 0 === t ||
                    delete t.account_name,
                  null === (n = null == e ? void 0 : e.public_data) ||
                    void 0 === n ||
                    delete n.account_flags,
                  null === (s = null == e ? void 0 : e.public_data) ||
                    void 0 === s ||
                    delete s.ban_expires_time,
                  null === (r = null == e ? void 0 : e.public_data) ||
                    void 0 === r ||
                    delete r.privacy_state,
                  (null === (i = null == e ? void 0 : e.public_data) ||
                  void 0 === i
                    ? void 0
                    : i.profile_state) !== l &&
                    (null == e || delete e.private_data),
                  e
                );
              })(await e.load(n));
            }
            return null;
          },
          enabled: !!n,
        };
      }
      function d(e) {
        const t = (0, r.KV)(),
          n = (0, o.L)(t);
        return (0, a.I)(u(n, e));
      }
    },
    90182: (e, t, n) => {
      "use strict";
      n.d(t, {
        EC: () => B,
        KQ: () => v,
        Kt: () => j,
        N8: () => g,
        c3: () => x,
        iW: () => m,
        kZ: () => h,
        lY: () => _,
        wy: () => y,
        y4: () => b,
      });
      var s = n(56545),
        r = n(99164),
        i = n(23809),
        a = n(88942),
        o = n(29385),
        l = n(61739),
        c = n(37085),
        u = n(43261);
      const d = "get_content_report_subject_group",
        p = "get_content_report_subject_audit_log";
      async function m(e, t, n, s) {
        return Promise.all([
          e.invalidateQueries({ queryKey: [d, t, n] }),
          e.invalidateQueries({ queryKey: [p, t, n, s] }),
        ]);
      }
      function h(e, t) {
        const n = (0, i.KV)();
        return (0, a.I)(
          (function (e, t, n) {
            return {
              queryKey: [d, t, n],
              queryFn: async () => {
                const i = s.w.Init(r.ge);
                i.Body().set_subject_type(t), i.Body().set_subject_group_id(n);
                const a = await r.fL.GetContentReportSubjectGroup(e, i);
                if (!a.BSuccess())
                  throw new Error(
                    "Failed in GetContentReportSubjectGroup, EResult: " +
                      a.GetEResult(),
                  );
                return a.Body().toObject();
              },
            };
          })(n, e, t),
        );
      }
      function j(e, t, n) {
        const o = (0, i.KV)();
        return (0, a.I)(
          (function (e, t, n, i) {
            return {
              queryKey: [p, t, n, i],
              queryFn: async () => {
                if (void 0 === t || void 0 === n || void 0 === i) return;
                const a = s.w.Init(r.Ru);
                return (
                  a.Body().set_subject_type(t),
                  a.Body().set_subject_group_id(n),
                  a.Body().set_subject_id(i),
                  (await r.fL.GetAuditLog(e, a)).Body().toObject()
                );
              },
            };
          })(o, e, t, n),
        );
      }
      function _(e, t, n) {
        const a = (0, i.KV)(),
          u = (0, o.jE)();
        return (0, l.n)({
          mutationFn: async (i) => {
            const o = s.w.Init(r.u5);
            o.Body().set_subject_type(e),
              o.Body().set_subject_group_id(t),
              o.Body().set_subject_id(n),
              o.Body().set_required_level(i.eNewLevel),
              i.eReason && o.Body().set_reason(i.eReason),
              i.strNote && o.Body().set_note(i.strNote);
            const l = await r.fL.EscalateSubject(a, o);
            if (l.GetEResult() !== c.R)
              throw new Error(`Failed to escalate subject: ${l.GetEMsg()}`);
          },
          onSuccess: async (s, r) => {
            await Promise.all([
              m(u, e, t, n),
              u.invalidateQueries({ queryKey: ["get_claimed"] }),
              u.invalidateQueries({ queryKey: ["get_subject_overview"] }),
            ]);
          },
        });
      }
      function g() {
        const e = (0, i.KV)(),
          t = (0, o.jE)();
        return (0, l.n)({
          mutationFn: async (t) => {
            const n = s.w.Init(r.j);
            n.Body().set_subject_type(t.eSubjectType),
              n.Body().set_subject_group_id(t.ulSubjectGroupID),
              n.Body().set_subject_id(t.ulSubjectID);
            await r.fL.SustainModeration(e, n);
          },
          onSuccess: async (e, n) => {
            await t.invalidateQueries({ queryKey: ["get_claimed"] }),
              await m(t, n.eSubjectType, n.ulSubjectGroupID, n.ulSubjectID);
          },
        });
      }
      function b(e, t, n, a, c) {
        const u = (0, i.KV)(),
          d = (0, o.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = s.w.Init(r.ZV);
            i.Body().set_steamid(e),
              i.Body().set_subject_type(t),
              i.Body().set_subject_group_id(n),
              i.Body().set_subject_id(a),
              i.Body().set_details(c);
            await r.fL.DisputeModerationForSubject(u, i);
          },
          onSuccess: async () => {
            await m(d, t, n, a);
          },
        });
      }
      function y(e, t, n, a) {
        const c = (0, o.jE)(),
          u = (0, i.KV)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = s.w.Init(r.zF);
            i.Body().set_subject_type(e),
              i.Body().set_subject_group_id(t),
              i.Body().set_subject_id(n),
              i.Body().set_owner_dispute_details(a);
            const o = await r.fL.UpdateSubject(u, i);
            if (!o.BSuccess()) throw new Error("EResult " + o.GetEResult());
          },
          onSuccess: async () => {
            await m(c, e, t, n);
          },
        });
      }
      function v(e) {
        const t = (0, i.KV)();
        return (0, a.I)(
          (function (e, t) {
            return {
              queryKey: ["reporterstats", t],
              queryFn: async () => {
                const n = s.w.Init(r.KD);
                n.Body().set_steamid(t);
                const i = await r.fL.GetReporterStats(e, n);
                if (!i.BSuccess()) throw new Error("EResult " + i.GetEResult());
                return i.Body().toObject();
              },
            };
          })(t, e),
        );
      }
      function B(e, t, n) {
        const r = (0, i.KV)(),
          a = (0, o.jE)();
        return (0, l.n)({
          mutationFn: async (i) => {
            const a = s.w.Init(u.Er);
            a.Body().set_steamid(e),
              a.Body().set_comment_thread_id(t),
              a.Body().set_gidcomment(n),
              a.Body().set_reason(i.reason),
              a.Body().set_note(i.message);
            for (const e of i.sanctions) {
              const t = new u.u6();
              t.set_sanction(e.sanction),
                e.days && t.set_days(e.days),
                a.Body().add_sanctions(t);
            }
            const o = await u.BE.SanctionComment(r, a);
            if (!o.BSuccess())
              throw new Error(
                `SanctionComment failed. EResult: ${o.GetEResult()} (${o.GetErrorMessage()})`,
              );
          },
          onSuccess: async () => {
            await a.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
      function x(e, t, n) {
        const r = (0, i.KV)(),
          a = (0, o.jE)();
        return (0, l.n)({
          mutationFn: async () => {
            const i = s.w.Init(u.RX);
            i.Body().set_steamid(e),
              i.Body().set_comment_thread_id(t),
              i.Body().set_gidcomment(n),
              i.Body().set_report_action(u.du.Pn),
              i.Body().set_resolve(!0),
              await u.Vi.UpdateCommentReportState(r, i);
          },
          onSuccess: async () => {
            await a.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
    },
    49845: (e, t, n) => {
      "use strict";
      function s(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function r(...e) {
        return JSON.stringify(e, (e, t) => {
          if (
            (function (e) {
              if (!s(e)) return !1;
              const t = e.constructor;
              if (void 0 === t) return !0;
              const n = t.prototype;
              return (
                !!s(n) &&
                !!Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
              );
            })(t)
          ) {
            const e = {};
            return (
              Object.keys(t)
                .sort()
                .forEach((n) => {
                  e[n] = t[n];
                }),
              e
            );
          }
          return t;
        });
      }
      n.d(t, { V: () => o });
      var i = n(90626);
      n(7850);
      const a = (0, i.createContext)({ instances: {}, factories: {} });
      function o(e, t) {
        var n;
        const s = (0, i.useContext)(a),
          o = "string" == typeof e ? e : r(...e);
        let l = s;
        for (; l; ) {
          if (o in l.instances) return l.instances[o];
          if (o in l.factories) break;
          l = l.parent;
        }
        const c = (
          null !== (n = null == l ? void 0 : l.factories[o]) && void 0 !== n
            ? n
            : t
        )();
        return ((null != l ? l : s).instances[o] = c), c;
      }
    },
    95034: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bm: () => a,
        QD: () => l,
        f3: () => i,
        iV: () => u,
        ip: () => c,
        le: () => o,
      });
      var s = n(90626),
        r = n(92757);
      function i(e, t) {
        let n;
        if ("string" == typeof e) n = e;
        else if ("location" in e) n = e.location.search;
        else {
          if (!("search" in e)) return;
          n = e.search;
        }
        const s = new URLSearchParams(n.substring(1));
        if (s.has(t)) {
          const e = s.getAll(t);
          return e[e.length - 1];
        }
      }
      function a(e, t, n, s = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        if (null != n && null != n) {
          if (r.get(t) == n) return;
          r.set(t, n);
        } else {
          if (!r.has(t)) return;
          r.delete(t);
        }
        s
          ? e.replace(`?${r.toString()}`, { ...e.location.state })
          : e.push(`?${r.toString()}`);
      }
      function o(e, t, n) {
        a(e, t, n, !0);
      }
      function l(e, t) {
        const n = (0, r.W6)(),
          o = (0, r.zy)(),
          l = (0, s.useMemo)(() => {
            const n = i(o.search, e);
            return null != n && null != n
              ? null != t && null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [o.search, e, t]),
          c = (0, s.useCallback)(
            (t, s = !1) => {
              a(n, e, null != t && null != t ? String(t) : null, s);
            },
            [n, e],
          );
        return [l, c];
      }
      function c(e, t, n = !1) {
        const s = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            s.delete(e), null != n && null != n && s.append(e, n);
          }
        n
          ? e.replace(`?${s.toString()}`, { ...e.location.state })
          : e.push(`?${s.toString()}`);
      }
      function u(e, t) {
        c(e, t, !0);
      }
    },
    38135: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => j, a: () => _ });
      var s = n(7850),
        r = n(90626),
        i = n(52038),
        a = n(61859),
        o = n(95034),
        l = n(1990),
        c = n.n(l),
        u = n(32754),
        d = n(51272),
        p = n(76217),
        m = n(84143),
        h = n(92757);
      function j(e) {
        const {
            tabs: t,
            bDisableRouting: n,
            startingTab: a,
            controlledTab: l,
            OnTabChanged: u,
            classNameCtn: d,
            classNameTab: j,
            classNameTabContent: _,
            preferredFocus: b,
            bVerticalTabs: y,
            bSticky: v,
            bChecklistMode: B,
          } = e,
          x = (0, h.zy)(),
          A = (0, h.W6)(),
          [f, S] = (0, r.useState)(() => {
            var e;
            return (
              a ||
              (!n &&
              (0, o.f3)(x, "tab") &&
              null !== (e = (0, o.f3)(x, "tab")) &&
              void 0 !== e
                ? e
                : "")
            );
          });
        (0, r.useEffect)(() => {
          if (!e.bDisableRouting && x) {
            const e = (0, o.f3)(x, "tab");
            e && S(e);
          }
        }, [x, x.key, e.bDisableRouting, S]);
        const w = r.useCallback(
            (e) => {
              S(e.key),
                n || (0, o.Bm)(A, "tab", e.key),
                null == u || u(e.key),
                e.onClick && e.onClick(e);
            },
            [n, A, u],
          ),
          M = t.filter((e) => !e.hidden);
        if (!M.length) return null;
        const C = null != l ? l : f,
          T = M.find((e) => e.key === C) || M[0],
          R = b ? (null != a ? a : M[0].key) : void 0,
          k = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(p.Z, {
                className: (0, i.A)(
                  c().GraphicalAssetsTabs,
                  y && c().GraphicalAssetsTabsVertical,
                  B && c().ChecklistMode,
                  v && c().Sticky,
                  d,
                ),
                navEntryPreferPosition: b ? m.iU.PREFERRED_CHILD : m.iU.FIRST,
                children: M.map((e, t) =>
                  (0, s.jsx)(
                    g,
                    {
                      tab: e,
                      OnTabClick: w,
                      classNameTab: j,
                      active: e.key === T.key,
                      preferredFocus: R === e.key,
                    },
                    e.key,
                  ),
                ),
              }),
              T && (0, s.jsx)(p.Z, { className: _, children: T.contents }),
            ],
          });
        return y
          ? (0, s.jsx)(p.Z, {
              className: (0, i.A)(c().GraphicalAssetsTabsLayoutVertical),
              children: k,
            })
          : k;
      }
      function _(e) {
        const { statusType: t = "success", bShowStatusBox: n, children: r } = e;
        let a = "";
        return (
          "success" === t
            ? (a = c().StatusSuccess)
            : "danger" === t
              ? (a = c().StatusDanger)
              : "caution" === t
                ? (a = c().StatusCaution)
                : "info" === t
                  ? (a = c().StatusInfo)
                  : "incomplete" === t && (a = c().StatusIncomplete),
          (0, s.jsx)("div", {
            className: (0, i.A)(
              c().GraphicalAssetStatus,
              a,
              n ? c().checklistBox : "",
            ),
            children: r,
          })
        );
      }
      function g(e) {
        const {
          tab: t,
          OnTabClick: n,
          classNameTab: r,
          active: o,
          preferredFocus: l,
        } = e;
        return (0, s.jsx)(d.e7, {
          condition: Boolean(t.statusToolTip || t.tooltip),
          wrap: (e) =>
            (0, s.jsx)(u.he, {
              toolTipContent: t.statusToolTip || t.tooltip,
              children: e,
            }),
          children: (0, s.jsxs)(p.Z, {
            className: (0, i.A)(
              c().GraphicalAssetsTab,
              o && c().Active,
              o && "ActiveTab",
              r,
            ),
            onActivate: () => n(t),
            preferredFocus: l,
            children: [
              Boolean(t.vo_warning) &&
                (0, s.jsx)(u.he, {
                  toolTipContent: t.vo_warning,
                  children: (0, s.jsx)("div", {
                    className: c().VOWarning,
                    children: (0, a.we)("#EventEditor_VOWarning"),
                  }),
                }),
              t.status,
              t.name,
            ],
          }),
        });
      }
    },
  },
]);
