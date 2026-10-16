/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [97062],
    {
      17871: (I, P, r) => {
        "use strict";
        r.r(P),
          r.d(P, {
            ReportedSubjectList: () => F,
            default: () => x,
            useCommentThread: () => W,
          });
        var u = r(7850),
          p = r(46085),
          g = r(86067),
          d = r(86392),
          v = r(35038),
          C = r(64981),
          h = r(68495),
          f = r(20476),
          O = r(98112),
          M = r(88942),
          K = r(68312),
          A = r(85599),
          b = r(3166),
          y = r(30253),
          L = r.n(y),
          T = r(90626),
          w = r(36118),
          j = r(36707);
        function x(a) {
          const m = (0, p.w3)({ subject_type: C.lN, topic: a.gidTopic }),
            _ = W(a.clanSteamID, h.Bv, a.gidForum, a.gidTopic);
          return (0, u.jsx)(F, {
            subjectType: C.lN,
            subjectGroupQuery: m,
            commentThreadQuery: _,
          });
        }
        function F(a) {
          var m, _, E;
          const { subjectGroupQuery: l } = a,
            i = "floatingforumreportedsubjectslist",
            [e, t] = (0, T.useState)(() => localStorage[i] !== void 0);
          if (
            ((0, T.useMemo)(() => {
              var o, c;
              (c = (o = l.data) == null ? void 0 : o.subjects) == null ||
                c.sort(N);
            }, [(m = l.data) == null ? void 0 : m.subjects]),
            !l.isSuccess ||
              !((_ = l.data) != null && _.subjects) ||
              l.data.subjects.length === 0)
          )
            return null;
          const n = () => {
            e ? localStorage.removeItem(i) : localStorage.setItem(i, "1"),
              t(!e);
          };
          let s = 0;
          return (0, u.jsx)("div", {
            className: e
              ? y.FloatingSubjectListCtn
              : (E = a.inlineClassNames) != null
                ? E
                : "",
            children: (0, u.jsx)("div", {
              className: "rightbox",
              children: (0, u.jsxs)("div", {
                className: "content",
                children: [
                  (0, u.jsx)("div", {
                    className: "rightbox_list_header",
                    children: (0, u.jsxs)("span", {
                      className: y.SplitHeader,
                      children: [
                        (0, u.jsx)("div", {
                          className: "title",
                          children: g.T.Localize("#reportedsubjectlist_header"),
                        }),
                        (0, u.jsx)("button", {
                          className: y.PopoutButton,
                          onClick: n,
                          children: (0, u.jsx)(w.YNO, {}),
                        }),
                      ],
                    }),
                  }),
                  l.isError &&
                    (0, u.jsx)("div", {
                      className: "moderatorToolLink",
                      children: "Error",
                    }),
                  l.isLoading && (0, u.jsx)(A.t, {}),
                  l.isSuccess &&
                    (0, u.jsx)("div", {
                      style: { maxHeight: "20em", overflowY: "scroll" },
                      children: l.data.subjects.map((o) =>
                        o.coordinates
                          ? (0, u.jsx)(
                              Q,
                              {
                                subject: o,
                                commentThreadQuery: a.commentThreadQuery,
                              },
                              o.reported_content_id,
                            )
                          : (0, u.jsx)(
                              "div",
                              {
                                className: (0, j.A)(
                                  "moderatorToolLink",
                                  y.ReportedSubjectRow,
                                ),
                                children: "Bug - inform Valve",
                              },
                              `bad-${s++}`,
                            ),
                      ),
                    }),
                ],
              }),
            }),
          });
        }
        function U(a, m) {
          if (a.length !== m.length) return a.length - m.length;
          for (let _ = 0; _ < a.length; _++) {
            const E = a.charCodeAt(_),
              l = m.charCodeAt(_);
            if (E !== l) return E - l;
          }
          return 0;
        }
        function N(a, m) {
          var _, E, l, i;
          const e =
            a.unresolved_dispute_count + a.unresolved_report_count > 0 ? 1 : 0;
          return (
            (m.unresolved_dispute_count + m.unresolved_report_count > 0
              ? 1
              : 0) - e ||
            m.required_moderator_level - a.required_moderator_level ||
            U(
              (E = (_ = a.coordinates) == null ? void 0 : _.comment) != null
                ? E
                : "",
              (i = (l = m.coordinates) == null ? void 0 : l.comment) != null
                ? i
                : "",
            )
          );
        }
        function G(a) {
          for (;;) {
            const _ = a.indexOf("[/quote]");
            if (_ === -1) break;
            a = a.slice(_ + 8);
          }
          return a.slice(0, 35);
        }
        function Q(a) {
          var m, _, E, l;
          const { subject: i, commentThreadQuery: e } = a,
            t = (m = i.coordinates) == null ? void 0 : m.comment;
          let n = null;
          t === d.Ie && (n = "Topic");
          let s = "#NA";
          if (n === null && e.isSuccess) {
            let B = 1;
            for (const S of (_ = e.data.comments) != null ? _ : []) {
              if (S.gidcomment === t) {
                (n = G(S.text)), (s = `#${B}`);
                break;
              }
              B++;
            }
          }
          if (n === null && e.isSuccess) {
            if (i.subject_type === C.NC) n = "[Deleted]";
            else
              for (const B of (E = e.data.deleted_comments) != null ? E : [])
                if (B.gidcomment === t) {
                  n = G(B.text);
                  break;
                }
          }
          n === null && (n = "[Comment]");
          let o;
          i.subject_type === C.lN
            ? (o =
                t === d.Ie
                  ? `#forum_op_${((l = i.coordinates)) == null ? void 0 : l.topic}`
                  : `#c${t}`)
            : i.subject_type === C.NC && (o = `#comment_${t}`);
          const c =
              i.unresolved_dispute_count > 0 || i.unresolved_report_count > 0,
            R = i.required_moderator_level === f.PV,
            D = i.required_moderator_level === f.lp;
          return (0, u.jsxs)("div", {
            className: (0, j.A)("moderatorToolLink", y.ReportedSubjectRow),
            children: [
              (0, u.jsxs)("a", {
                href: o,
                children: [
                  c &&
                    !R &&
                    !D &&
                    (0, u.jsx)("img", {
                      className: y.FlagIcon,
                      src: `${b.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  !c &&
                    (0, u.jsx)("span", {
                      className: y.FlagIcon,
                      children: "\xA0",
                    }),
                  c &&
                    R &&
                    (0, u.jsx)("span", {
                      className: (0, j.A)(y.FlagIcon, y.ValveOnlyFlag),
                      children: "VO",
                    }),
                  c &&
                    D &&
                    (0, u.jsx)("span", {
                      className: (0, j.A)(y.FlagIcon, y.SupervisorFlag),
                      children: "\u25B2",
                    }),
                  "\xA0",
                  s,
                  "\xA0",
                  n,
                ],
              }),
              (0, u.jsxs)("div", {
                className: y.SubjectReportSummary,
                children: [
                  "\xA0",
                  g.T.Localize(
                    "#forumsubjectlist_subjectreportsummary",
                    i.unresolved_report_count,
                    i.unresolved_dispute_count,
                  ),
                ],
              }),
            ],
          });
        }
        function W(a, m, _, E) {
          const l = (0, K.KV)();
          return (0, M.I)({
            queryKey: ["comment_thread", a, m, _, E],
            queryFn: async () => {
              const i = v.w.Init(O.ZP);
              return (
                i.Body().set_steamid(a),
                i.Body().set_comment_thread_type(m),
                _ !== -1 && i.Body().set_gidfeature(_),
                E !== -1 && i.Body().set_gidfeature2(E),
                i.Body().set_include_deleted(!0),
                i.Body().set_oldest_first(!0),
                (await O.BE.GetCommentThread(l, i)).Body().toObject()
              );
            },
          });
        }
      },
      46085: (I, P, r) => {
        "use strict";
        r.d(P, {
          EC: () => l,
          KQ: () => E,
          Kt: () => N,
          Ky: () => T,
          N8: () => Q,
          OI: () => b,
          YL: () => W,
          c3: () => i,
          lY: () => G,
          w3: () => j,
          wy: () => m,
          y4: () => a,
        });
        var u = r(72604),
          p = r(35038),
          g = r(98112),
          d = r(16277),
          v = r(68312),
          C = r(88942),
          h = r(29385),
          f = r(61739),
          O = r(86392);
        const M = "get_reported_content",
          K = "get_reported_content_by_id",
          A = "get_reported_content_audit_log",
          b = (e) => [M, JSON.stringify(e)],
          y = (e) => [K, e],
          L = (e) => [A, e];
        async function T(e, t) {
          return Promise.all([
            e.invalidateQueries({ queryKey: [M], exact: !1 }),
            e.invalidateQueries({ queryKey: y(t) }),
            e.invalidateQueries({ queryKey: L(t) }),
          ]);
        }
        function w(e, t) {
          return {
            queryKey: b(t),
            enabled: (0, O.NX)(t),
            queryFn: async () => {
              const n = p.w.Init(d.Mw);
              n.Body().set_coordinates(d.UC.fromObject(t));
              const s = await d.fL.GetReportedContent(e, n);
              if (!s.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + s.GetEResult(),
                );
              return s.Body().toObject();
            },
          };
        }
        function j(e) {
          const t = (0, v.KV)();
          return (0, C.I)(w(t, e));
        }
        function x(e, t) {
          return {
            queryKey: y(t),
            queryFn: async () => {
              const n = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              n.Body().set_reported_content_id(t);
              const s = await ContentModerationService.GetReportedContentByID(
                e,
                n,
              );
              if (!s.BSuccess())
                throw new Error(
                  "Failed in GetReportedContentByID, EResult: " +
                    s.GetEResult(),
                );
              return s.Body().toObject();
            },
          };
        }
        function F(e) {
          const t = useActiveServiceTransport();
          return useQuery(x(t, e));
        }
        function U(e, t) {
          return {
            queryKey: L(t),
            queryFn: async () => {
              if (!t) return;
              const n = p.w.Init(d.v5);
              return (
                n.Body().set_reported_content_id(t),
                (await d.fL.GetAuditLogByID(e, n)).Body().toObject()
              );
            },
          };
        }
        function N(e) {
          const t = (0, v.KV)();
          return (0, C.I)(U(t, e));
        }
        function G(e) {
          const t = (0, v.KV)(),
            n = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async (s) => {
              const o = p.w.Init(d.Qi);
              o.Body().set_reported_content_id(e),
                o.Body().set_new_level(s.eNewLevel),
                s.eReason && o.Body().set_reason(s.eReason),
                s.strNote && o.Body().set_note(s.strNote);
              const c = await d.fL.EscalateSubjectByID(t, o);
              if (c.GetEResult() !== u.R)
                throw new Error(`Failed to escalate subject: ${c.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                T(n, e),
                n.invalidateQueries({ queryKey: ["get_claimed"] }),
                n.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function Q() {
          const e = (0, v.KV)(),
            t = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async (n) => {
              const s = p.w.Init(d.Nr);
              s.Body().set_reported_content_id(n.reportedContentID);
              const o = await d.fL.SustainModerationByID(e, s);
              if (!o.BSuccess()) throw new Error("EResult " + o.GetEResult());
            },
            onSuccess: async (n, s) => {
              await T(t, s.reportedContentID),
                await t.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function W(e) {
          const t = (0, h.jE)(),
            n = (0, v.KV)();
          return (0, f.n)({
            mutationKey: ["release_subject", ...e],
            mutationFn: async () => {
              const s = p.w.Init(d.GD);
              for (const c of e) {
                const R = new d.F9();
                R.set_reported_content_id(c),
                  s.Body().add_subjects_to_release(R);
              }
              const o = await d.fL.ReleaseSubjects(n, s);
              if (!o.BSuccess()) throw new Error("EResult " + o.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                t.invalidateQueries({ queryKey: ["get_claimed"] }),
                t.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ...e.map((s) => T(t, s)),
              ]);
            },
          });
        }
        function a(e, t) {
          const n = (0, v.KV)(),
            s = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async () => {
              const o = p.w.Init(d.LW);
              o.Body().set_reported_content_id(e), o.Body().set_details(t);
              const c = await d.fL.OwnerDisputeModeration(n, o);
              if (!c.BSuccess()) throw new Error("EResult " + c.GetEResult());
            },
            onSuccess: async () => {
              await T(s, e);
            },
          });
        }
        function m(e, t) {
          const n = (0, h.jE)(),
            s = (0, v.KV)();
          return (0, f.n)({
            mutationFn: async () => {
              const o = p.w.Init(d.ps);
              o.Body().set_reported_content_id(e),
                o.Body().set_owner_dispute_details(t);
              const c = await d.fL.UpdateSubjectByID(s, o);
              if (!c.BSuccess()) throw new Error("EResult " + c.GetEResult());
            },
            onSuccess: async () => {
              await T(n, e);
            },
          });
        }
        function _(e, t) {
          return {
            queryKey: ["reporterstats", t],
            queryFn: async () => {
              const n = p.w.Init(d.KD);
              n.Body().set_steamid(t);
              const s = await d.fL.GetReporterStats(e, n);
              if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
              return s.Body().toObject();
            },
          };
        }
        function E(e) {
          const t = (0, v.KV)();
          return (0, C.I)(_(t, e));
        }
        function l(e, t, n) {
          const s = (0, v.KV)(),
            o = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async (c) => {
              const R = p.w.Init(g.Er);
              R.Body().set_steamid(e),
                R.Body().set_comment_thread_id(t),
                R.Body().set_gidcomment(n),
                R.Body().set_reason(c.reason),
                R.Body().set_note(c.message);
              for (const B of c.sanctions) {
                const S = new g.u6();
                S.set_sanction(B.sanction),
                  B.days && S.set_days(B.days),
                  R.Body().add_sanctions(S);
              }
              const D = await g.BE.SanctionComment(s, R);
              if (!D.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${D.GetEResult()} (${D.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await o.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function i(e, t, n) {
          const s = (0, v.KV)(),
            o = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async () => {
              const c = p.w.Init(g.RX);
              c.Body().set_steamid(e),
                c.Body().set_comment_thread_id(t),
                c.Body().set_gidcomment(n),
                c.Body().set_report_action(g.du.Pn),
                c.Body().set_resolve(!0),
                await g.Vi.UpdateCommentReportState(s, c);
            },
            onSuccess: async () => {
              await o.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      68495: (I, P, r) => {
        "use strict";
        r.d(P, { Bv: () => f, Dq: () => C, Yd: () => K });
        const u = 0,
          p = 1,
          g = 2,
          d = 3,
          v = 4,
          C = 5,
          h = 6,
          f = 7,
          O = 8,
          M = 9,
          K = 10,
          A = 11,
          b = 12,
          y = 13,
          L = 14,
          T = 15,
          w = 16,
          j = 17,
          x = 18,
          F = 19,
          U = 20,
          N = 21;
      },
      30253: (I) => {
        I.exports = {
          FloatingSubjectListCtn: "_2Z4y2kIderxN4_alSJYYh8",
          SplitHeader: "_2B88BA7YbropfCtjJdn1yD",
          PopoutButton: "_3cujMozXvwTlTehPQtPJ7F",
          ReportedSubjectRow: "_32u0ZJiVZP0gaSLs5sdhUy",
          SubjectReportSummary: "_9Ygy5gJ500tkoDj_G546U",
          FlagIcon: "_2DMl8RTVaYtsJarLDt3hqF",
          ValveOnlyFlag: "-K7dp4xj1MBriG1APh1f4",
          SupervisorFlag: "_32OXEg2kS_2-BTKOec40kP",
        };
      },
    },
  ]);
})();
