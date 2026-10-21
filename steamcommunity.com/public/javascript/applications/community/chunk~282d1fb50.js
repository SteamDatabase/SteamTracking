/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [97062],
    {
      17871: (M, j, n) => {
        "use strict";
        n.r(j),
          n.d(j, {
            ReportedSubjectList: () => L,
            default: () => A,
            useCommentThread: () => U,
          });
        var u = n(7850),
          p = n(46085),
          g = n(86067),
          d = n(86392),
          R = n(35038),
          C = n(64981),
          h = n(68495),
          f = n(20476),
          P = n(98112),
          D = n(88942),
          S = n(68312),
          K = n(85599),
          O = n(3166),
          y = n(30253),
          I = n.n(y),
          v = n(90626),
          b = n(36118),
          B = n(36707);
        function A(a) {
          const o = (0, p.w3)({ subject_type: C.lN, topic: a.gidTopic }),
            i = U(a.clanSteamID, h.Bv, a.gidForum, a.gidTopic);
          return (0, u.jsx)(L, {
            subjectType: C.lN,
            subjectGroupQuery: o,
            commentThreadQuery: i,
          });
        }
        function L(a) {
          const { subjectGroupQuery: o } = a,
            i = "floatingforumreportedsubjectslist",
            [m, l] = (0, v.useState)(() => localStorage[i] !== void 0);
          if (
            ((0, v.useMemo)(() => {
              o.data?.subjects?.sort(x);
            }, [o.data?.subjects]),
            !o.isSuccess || !o.data?.subjects || o.data.subjects.length === 0)
          )
            return null;
          const E = () => {
            m ? localStorage.removeItem(i) : localStorage.setItem(i, "1"),
              l(!m);
          };
          let e = 0;
          return (0, u.jsx)("div", {
            className: m
              ? y.FloatingSubjectListCtn
              : (a.inlineClassNames ?? ""),
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
                          onClick: E,
                          children: (0, u.jsx)(b.YNO, {}),
                        }),
                      ],
                    }),
                  }),
                  o.isError &&
                    (0, u.jsx)("div", {
                      className: "moderatorToolLink",
                      children: "Error",
                    }),
                  o.isLoading && (0, u.jsx)(K.t, {}),
                  o.isSuccess &&
                    (0, u.jsx)("div", {
                      style: { maxHeight: "20em", overflowY: "scroll" },
                      children: o.data.subjects.map((t) =>
                        t.coordinates
                          ? (0, u.jsx)(
                              N,
                              {
                                subject: t,
                                commentThreadQuery: a.commentThreadQuery,
                              },
                              t.reported_content_id,
                            )
                          : (0, u.jsx)(
                              "div",
                              {
                                className: (0, B.A)(
                                  "moderatorToolLink",
                                  y.ReportedSubjectRow,
                                ),
                                children: "Bug - inform Valve",
                              },
                              `bad-${e++}`,
                            ),
                      ),
                    }),
                ],
              }),
            }),
          });
        }
        function w(a, o) {
          if (a.length !== o.length) return a.length - o.length;
          for (let i = 0; i < a.length; i++) {
            const m = a.charCodeAt(i),
              l = o.charCodeAt(i);
            if (m !== l) return m - l;
          }
          return 0;
        }
        function x(a, o) {
          const i =
            a.unresolved_dispute_count + a.unresolved_report_count > 0 ? 1 : 0;
          return (
            (o.unresolved_dispute_count + o.unresolved_report_count > 0
              ? 1
              : 0) - i ||
            o.required_moderator_level - a.required_moderator_level ||
            w(a.coordinates?.comment ?? "", o.coordinates?.comment ?? "")
          );
        }
        function F(a) {
          for (;;) {
            const i = a.indexOf("[/quote]");
            if (i === -1) break;
            a = a.slice(i + 8);
          }
          return a.slice(0, 35);
        }
        function N(a) {
          const { subject: o, commentThreadQuery: i } = a,
            m = o.coordinates?.comment;
          let l = null;
          m === d.Ie && (l = "Topic");
          let E = "#NA";
          if (l === null && i.isSuccess) {
            let c = 1;
            for (const _ of i.data.comments ?? []) {
              if (_.gidcomment === m) {
                (l = F(_.text)), (E = `#${c}`);
                break;
              }
              c++;
            }
          }
          if (l === null && i.isSuccess) {
            if (o.subject_type === C.NC) l = "[Deleted]";
            else
              for (const c of i.data.deleted_comments ?? [])
                if (c.gidcomment === m) {
                  l = F(c.text);
                  break;
                }
          }
          l === null && (l = "[Comment]");
          let e;
          o.subject_type === C.lN
            ? (e = m === d.Ie ? `#forum_op_${o.coordinates?.topic}` : `#c${m}`)
            : o.subject_type === C.NC && (e = `#comment_${m}`);
          const t =
              o.unresolved_dispute_count > 0 || o.unresolved_report_count > 0,
            r = o.required_moderator_level === f.PV,
            s = o.required_moderator_level === f.lp;
          return (0, u.jsxs)("div", {
            className: (0, B.A)("moderatorToolLink", y.ReportedSubjectRow),
            children: [
              (0, u.jsxs)("a", {
                href: e,
                children: [
                  t &&
                    !r &&
                    !s &&
                    (0, u.jsx)("img", {
                      className: y.FlagIcon,
                      src: `${O.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  !t &&
                    (0, u.jsx)("span", {
                      className: y.FlagIcon,
                      children: "\xA0",
                    }),
                  t &&
                    r &&
                    (0, u.jsx)("span", {
                      className: (0, B.A)(y.FlagIcon, y.ValveOnlyFlag),
                      children: "VO",
                    }),
                  t &&
                    s &&
                    (0, u.jsx)("span", {
                      className: (0, B.A)(y.FlagIcon, y.SupervisorFlag),
                      children: "\u25B2",
                    }),
                  "\xA0",
                  E,
                  "\xA0",
                  l,
                ],
              }),
              (0, u.jsxs)("div", {
                className: y.SubjectReportSummary,
                children: [
                  "\xA0",
                  g.T.Localize(
                    "#forumsubjectlist_subjectreportsummary",
                    o.unresolved_report_count,
                    o.unresolved_dispute_count,
                  ),
                ],
              }),
            ],
          });
        }
        function U(a, o, i, m) {
          const l = (0, S.KV)();
          return (0, D.I)({
            queryKey: ["comment_thread", a, o, i, m],
            queryFn: async () => {
              const E = R.w.Init(P.ZP);
              return (
                E.Body().set_steamid(a),
                E.Body().set_comment_thread_type(o),
                i !== -1 && E.Body().set_gidfeature(i),
                m !== -1 && E.Body().set_gidfeature2(m),
                E.Body().set_include_deleted(!0),
                E.Body().set_oldest_first(!0),
                (await P.BE.GetCommentThread(l, E)).Body().toObject()
              );
            },
          });
        }
      },
      46085: (M, j, n) => {
        "use strict";
        n.d(j, {
          EC: () => l,
          KQ: () => m,
          Kt: () => x,
          Ky: () => v,
          N8: () => N,
          OI: () => O,
          YL: () => U,
          c3: () => E,
          lY: () => F,
          w3: () => B,
          wy: () => o,
          y4: () => a,
        });
        var u = n(72604),
          p = n(35038),
          g = n(98112),
          d = n(16277),
          R = n(68312),
          C = n(88942),
          h = n(29385),
          f = n(61739),
          P = n(86392);
        const D = "get_reported_content",
          S = "get_reported_content_by_id",
          K = "get_reported_content_audit_log",
          O = (e) => [D, JSON.stringify(e)],
          y = (e) => [S, e],
          I = (e) => [K, e];
        async function v(e, t) {
          return Promise.all([
            e.invalidateQueries({ queryKey: [D], exact: !1 }),
            e.invalidateQueries({ queryKey: y(t) }),
            e.invalidateQueries({ queryKey: I(t) }),
          ]);
        }
        function b(e, t) {
          return {
            queryKey: O(t),
            enabled: (0, P.NX)(t),
            queryFn: async () => {
              const r = p.w.Init(d.Mw);
              r.Body().set_coordinates(d.UC.fromObject(t));
              const s = await d.fL.GetReportedContent(e, r);
              if (!s.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + s.GetEResult(),
                );
              return s.Body().toObject();
            },
          };
        }
        function B(e) {
          const t = (0, R.KV)();
          return (0, C.I)(b(t, e));
        }
        function A(e, t) {
          return {
            queryKey: y(t),
            queryFn: async () => {
              const r = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              r.Body().set_reported_content_id(t);
              const s = await ContentModerationService.GetReportedContentByID(
                e,
                r,
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
        function L(e) {
          const t = useActiveServiceTransport();
          return useQuery(A(t, e));
        }
        function w(e, t) {
          return {
            queryKey: I(t),
            queryFn: async () => {
              if (!t) return;
              const r = p.w.Init(d.v5);
              return (
                r.Body().set_reported_content_id(t),
                (await d.fL.GetAuditLogByID(e, r)).Body().toObject()
              );
            },
          };
        }
        function x(e) {
          const t = (0, R.KV)();
          return (0, C.I)(w(t, e));
        }
        function F(e) {
          const t = (0, R.KV)(),
            r = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async (s) => {
              const c = p.w.Init(d.Qi);
              c.Body().set_reported_content_id(e),
                c.Body().set_new_level(s.eNewLevel),
                s.eReason && c.Body().set_reason(s.eReason),
                s.strNote && c.Body().set_note(s.strNote);
              const _ = await d.fL.EscalateSubjectByID(t, c);
              if (_.GetEResult() !== u.R)
                throw new Error(`Failed to escalate subject: ${_.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                v(r, e),
                r.invalidateQueries({ queryKey: ["get_claimed"] }),
                r.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function N() {
          const e = (0, R.KV)(),
            t = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async (r) => {
              const s = p.w.Init(d.Nr);
              s.Body().set_reported_content_id(r.reportedContentID);
              const c = await d.fL.SustainModerationByID(e, s);
              if (!c.BSuccess()) throw new Error("EResult " + c.GetEResult());
            },
            onSuccess: async (r, s) => {
              await v(t, s.reportedContentID),
                await t.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function U(e) {
          const t = (0, h.jE)(),
            r = (0, R.KV)();
          return (0, f.n)({
            mutationKey: ["release_subject", ...e],
            mutationFn: async () => {
              const s = p.w.Init(d.GD);
              for (const _ of e) {
                const T = new d.F9();
                T.set_reported_content_id(_),
                  s.Body().add_subjects_to_release(T);
              }
              const c = await d.fL.ReleaseSubjects(r, s);
              if (!c.BSuccess()) throw new Error("EResult " + c.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                t.invalidateQueries({ queryKey: ["get_claimed"] }),
                t.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ...e.map((s) => v(t, s)),
              ]);
            },
          });
        }
        function a(e, t) {
          const r = (0, R.KV)(),
            s = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async () => {
              const c = p.w.Init(d.LW);
              c.Body().set_reported_content_id(e), c.Body().set_details(t);
              const _ = await d.fL.OwnerDisputeModeration(r, c);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
            },
            onSuccess: async () => {
              await v(s, e);
            },
          });
        }
        function o(e, t) {
          const r = (0, h.jE)(),
            s = (0, R.KV)();
          return (0, f.n)({
            mutationFn: async () => {
              const c = p.w.Init(d.ps);
              c.Body().set_reported_content_id(e),
                c.Body().set_owner_dispute_details(t);
              const _ = await d.fL.UpdateSubjectByID(s, c);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
            },
            onSuccess: async () => {
              await v(r, e);
            },
          });
        }
        function i(e, t) {
          return {
            queryKey: ["reporterstats", t],
            queryFn: async () => {
              const r = p.w.Init(d.KD);
              r.Body().set_steamid(t);
              const s = await d.fL.GetReporterStats(e, r);
              if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
              return s.Body().toObject();
            },
          };
        }
        function m(e) {
          const t = (0, R.KV)();
          return (0, C.I)(i(t, e));
        }
        function l(e, t, r) {
          const s = (0, R.KV)(),
            c = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async (_) => {
              const T = p.w.Init(g.Er);
              T.Body().set_steamid(e),
                T.Body().set_comment_thread_id(t),
                T.Body().set_gidcomment(r),
                T.Body().set_reason(_.reason),
                T.Body().set_note(_.message);
              for (const W of _.sanctions) {
                const Q = new g.u6();
                Q.set_sanction(W.sanction),
                  W.days && Q.set_days(W.days),
                  T.Body().add_sanctions(Q);
              }
              const G = await g.BE.SanctionComment(s, T);
              if (!G.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${G.GetEResult()} (${G.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await c.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function E(e, t, r) {
          const s = (0, R.KV)(),
            c = (0, h.jE)();
          return (0, f.n)({
            mutationFn: async () => {
              const _ = p.w.Init(g.RX);
              _.Body().set_steamid(e),
                _.Body().set_comment_thread_id(t),
                _.Body().set_gidcomment(r),
                _.Body().set_report_action(g.du.Pn),
                _.Body().set_resolve(!0),
                await g.Vi.UpdateCommentReportState(s, _);
            },
            onSuccess: async () => {
              await c.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      68495: (M, j, n) => {
        "use strict";
        n.d(j, { Bv: () => f, Dq: () => C, Yd: () => S });
        const u = 0,
          p = 1,
          g = 2,
          d = 3,
          R = 4,
          C = 5,
          h = 6,
          f = 7,
          P = 8,
          D = 9,
          S = 10,
          K = 11,
          O = 12,
          y = 13,
          I = 14,
          v = 15,
          b = 16,
          B = 17,
          A = 18,
          L = 19,
          w = 20,
          x = 21;
      },
      30253: (M) => {
        M.exports = {
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
