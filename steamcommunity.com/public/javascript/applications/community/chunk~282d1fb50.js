/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7062],
  {
    30253: (e) => {
      e.exports = {
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
    20978: (e) => {
      e.exports = {
        LoadingWrapper: "_2wAKy-0ZkO_vhbiQCP9MgE",
        Static: "_1QfwpLmLTSuiIRLDzdY_7l",
        none: "_1F0lzP-Krz_y5P9ewZEvBD",
        bottomCircle: "_2qjZm0dB7I6lcRkZhNTqvD",
        noString: "_1Sy0pXVZOdWbgouFyD2zJj",
        Throbber: "lYUEjD8Qh3GM_ZrZeLwpI",
        throbber_small: "_2zbyh5jEDlV5HVD3iUve-k",
        throbber_medium: "_2CphUsHNDgIWItNIzeIldY",
        throbber_large: "_1x18vR7Qop8v8_G8qSR6CL",
        throbber_center_wrapper: "_3IYPzqtvB2ZE7x710d5x2C",
        ThrobberText: "_21nVi2jNuF_prxLY1mAaKK",
        blur: "_1ctjA2yjeB21eCDj_r1mVz",
        ThrobberRoundLoop: "_1O-cWE6nuIVO3x6-Onw0IU",
        roundOuterOutline: "_1Vv--mA6PueyEKXXMTwljt",
        roundOuter: "_2K0LzwjOXDopMHoqY_v_CO",
        roundFill: "_3sQFkavAEPhliH6DiFmHRH",
        ThrobberFillLoop: "ofdi9VLSRZ5W98WsXVHiq",
        topCircle: "_1LZffuoDq-N25wNHckxsf",
        circlePulse: "_1XN6ZJ1l8nVoUxp1WnOBqw",
        ThrobberTopCircleLoop: "_1jALk36CiS_T9Pg7vBjpIQ",
        ThrobberBottomCircleLoop: "_1KvOgdKiNE9XuSYUau3hKW",
        roundThrobber15: "_2LGHpu_-ihfOhQwdfR3Kiy",
        roundThrobber14: "_2FGCneH2AemMrIrZnZskw_",
        roundThrobber13: "_1X-5j16jaQntVrZfadibyc",
        roundThrobber12: "_1pj1Q3Ef4FdHDdl9QEtpxp",
        roundThrobber11: "xFmZaMe5nZpoTc5PQBKn3",
        roundThrobber10: "_3MGYowzMQ6TwbH3fu9SVjt",
        roundThrobber09: "ktVJ42jiVhWEVV9O6z2FK",
        roundThrobber08: "_3s_7my869lIOj-1vnqJ39y",
        roundThrobber07: "_11MVp53Me_frOuaJfsQ4FE",
        roundThrobber06: "_2cl-maglen-RF0YQjShgqG",
        roundThrobber05: "_3-JE0FpIzECzeqtd5cyjGI",
        roundThrobber04: "_1xNIKvHdzLhBldONo6yIZs",
        roundThrobber03: "_1S17yicfcrPc11m83ydGp3",
        roundThrobber02: "_1-oUJqmCLOoGqVJz5dgj6J",
        roundThrobber01: "_2tXgejjqNKy6cSX1Lv7PrG",
        ThrobberRoundLoopThickness: "_1fs4RGcMBRzbQQirDBiFoM",
        throbber_xlarge: "_1gYeZMYKBDqNpVuw58_LCl",
        throbber_xxlarge: "_3j-p4JOqdpaF4obGtIeAB",
        ThrobberDelayAppear: "I3aEq3lbK7Pm8ujENvtri",
        Visible: "_2SwSJd-DlX2dRiDGxZWHI5",
        NewThrobber: "_1m8iQOSVziKDHiInrfskv_",
      };
    },
    10378: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          ReportedSubjectList: () => k,
          default: () => y,
          useCommentThread: () => S,
        });
      var s = r(7850),
        o = r(90182),
        c = r(43224),
        n = r(56545),
        i = r(34410),
        a = r(37226),
        l = r(15993),
        u = r(43261),
        d = r(88942),
        f = r(23809),
        b = r(22797),
        _ = r(78327),
        m = r(30253),
        h = r(90626),
        p = r(12155),
        j = r(52038);
      function y(e) {
        const t = (0, o.kZ)(i.lN, e.gidTopic),
          r = S(e.clanSteamID, a.Bv, e.gidForum, e.gidTopic);
        return (0, s.jsx)(k, {
          subjectType: i.lN,
          subjectGroupQuery: t,
          commentThreadQuery: r,
        });
      }
      function k(e) {
        var t, r, o;
        const { subjectGroupQuery: n } = e,
          i = "floatingforumreportedsubjectslist",
          [a, l] = (0, h.useState)(() => void 0 !== localStorage[i]);
        if (
          ((0, h.useMemo)(() => {
            var e, t;
            null ===
              (t =
                null === (e = n.data) || void 0 === e ? void 0 : e.subjects) ||
              void 0 === t ||
              t.sort(g);
          }, [null === (t = n.data) || void 0 === t ? void 0 : t.subjects]),
          !n.isSuccess ||
            !(null === (r = n.data) || void 0 === r ? void 0 : r.subjects) ||
            0 === n.data.subjects.length)
        )
          return null;
        let u = 0;
        return (0, s.jsx)("div", {
          className: a
            ? m.FloatingSubjectListCtn
            : null !== (o = e.inlineClassNames) && void 0 !== o
              ? o
              : "",
          children: (0, s.jsx)("div", {
            className: "rightbox",
            children: (0, s.jsxs)("div", {
              className: "content",
              children: [
                (0, s.jsx)("div", {
                  className: "rightbox_list_header",
                  children: (0, s.jsxs)("span", {
                    className: m.SplitHeader,
                    children: [
                      (0, s.jsx)("div", {
                        className: "title",
                        children: c.T.Localize("#reportedsubjectlist_header"),
                      }),
                      (0, s.jsx)("button", {
                        className: m.PopoutButton,
                        onClick: () => {
                          a
                            ? localStorage.removeItem(i)
                            : localStorage.setItem(i, "1"),
                            l(!a);
                        },
                        children: (0, s.jsx)(p.YNO, {}),
                      }),
                    ],
                  }),
                }),
                n.isError &&
                  (0, s.jsx)("div", {
                    className: "moderatorToolLink",
                    children: "Error",
                  }),
                n.isLoading && (0, s.jsx)(b.t, {}),
                n.isSuccess &&
                  (0, s.jsx)("div", {
                    style: { maxHeight: "20em", overflowY: "scroll" },
                    children: n.data.subjects.map((t) => {
                      var r, o;
                      return (
                        null ===
                          (o =
                            null === (r = t.additional_subject_data) ||
                            void 0 === r
                              ? void 0
                              : r.data) || void 0 === o
                          ? void 0
                          : o.length
                      )
                        ? (0, s.jsx)(
                            x,
                            {
                              subject: t,
                              commentThreadQuery: e.commentThreadQuery,
                            },
                            t.subject_id,
                          )
                        : (0, s.jsx)(
                            "div",
                            {
                              className: (0, j.A)(
                                "moderatorToolLink",
                                m.ReportedSubjectRow,
                              ),
                              children: "Bug - inform Valve",
                            },
                            "bad-" + u++,
                          );
                    }),
                  }),
              ],
            }),
          }),
        });
      }
      function g(e, t) {
        const r =
          e.unresolved_dispute_count + e.unresolved_report_count > 0 ? 1 : 0;
        return (
          (t.unresolved_dispute_count + t.unresolved_report_count > 0 ? 1 : 0) -
            r ||
          t.required_moderator_level - e.required_moderator_level ||
          (function (e, t) {
            if (e.length !== t.length) return e.length - t.length;
            for (let r = 0; r < e.length; r++) {
              const s = e.charCodeAt(r),
                o = t.charCodeAt(r);
              if (s !== o) return s - o;
            }
            return 0;
          })(e.subject_id, t.subject_id)
        );
      }
      function v(e) {
        for (;;) {
          const t = e.indexOf("[/quote]");
          if (-1 === t) break;
          e = e.slice(t + 8);
        }
        return e.slice(0, 35);
      }
      function x(e) {
        var t, r;
        const { subject: o, commentThreadQuery: n } = e;
        let a = null;
        "0" === o.subject_id && (a = "Topic");
        let u,
          d = "#NA";
        if (null === a && n.isSuccess) {
          let e = 1;
          for (const r of null !== (t = n.data.comments) && void 0 !== t
            ? t
            : []) {
            if (r.gidcomment === o.subject_id) {
              (a = v(r.text)), (d = `#${e}`);
              break;
            }
            e++;
          }
        }
        if (null === a && n.isSuccess)
          if (o.subject_type === i.NC) a = "[Deleted]";
          else
            for (const e of null !== (r = n.data.deleted_comments) &&
            void 0 !== r
              ? r
              : [])
              if (e.gidcomment === o.subject_id) {
                a = v(e.text);
                break;
              }
        null === a && (a = "[Comment]"),
          o.subject_type === i.lN
            ? (u =
                "0" === o.subject_id
                  ? `#forum_op_${o.subject_group_id}`
                  : `#c${o.subject_id}`)
            : o.subject_type === i.NC && (u = `#comment_${o.subject_id}`);
        const f =
            o.unresolved_dispute_count > 0 || o.unresolved_report_count > 0,
          b = o.required_moderator_level === l.PV,
          h = o.required_moderator_level === l.lp;
        return (0, s.jsxs)("div", {
          className: (0, j.A)("moderatorToolLink", m.ReportedSubjectRow),
          children: [
            (0, s.jsxs)("a", {
              href: u,
              children: [
                f &&
                  !b &&
                  !h &&
                  (0, s.jsx)("img", {
                    className: m.FlagIcon,
                    src: `${_.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                  }),
                !f &&
                  (0, s.jsx)("span", { className: m.FlagIcon, children: " " }),
                f &&
                  b &&
                  (0, s.jsx)("span", {
                    className: (0, j.A)(m.FlagIcon, m.ValveOnlyFlag),
                    children: "VO",
                  }),
                f &&
                  h &&
                  (0, s.jsx)("span", {
                    className: (0, j.A)(m.FlagIcon, m.SupervisorFlag),
                    children: "▲",
                  }),
                " ",
                d,
                " ",
                a,
              ],
            }),
            (0, s.jsxs)("div", {
              className: m.SubjectReportSummary,
              children: [
                " ",
                c.T.Localize(
                  "#forumsubjectlist_subjectreportsummary",
                  o.unresolved_report_count,
                  o.unresolved_dispute_count,
                ),
              ],
            }),
          ],
        });
      }
      function S(e, t, r, s) {
        const o = (0, f.KV)();
        return (0, d.I)({
          queryKey: ["comment_thread", e, t, r, s],
          queryFn: async () => {
            const c = n.w.Init(u.ZP);
            c.Body().set_steamid(e),
              c.Body().set_comment_thread_type(t),
              -1 !== r && c.Body().set_gidfeature(r),
              -1 !== s && c.Body().set_gidfeature2(s),
              c.Body().set_include_deleted(!0),
              c.Body().set_oldest_first(!0);
            return (await u.BE.GetCommentThread(o, c)).Body().toObject();
          },
        });
      }
    },
    90182: (e, t, r) => {
      "use strict";
      r.d(t, {
        EC: () => g,
        KQ: () => k,
        Kt: () => m,
        N8: () => p,
        c3: () => v,
        iW: () => b,
        kZ: () => _,
        lY: () => h,
        wy: () => y,
        y4: () => j,
      });
      var s = r(56545),
        o = r(99164),
        c = r(23809),
        n = r(88942),
        i = r(29385),
        a = r(61739),
        l = r(37085),
        u = r(43261);
      const d = "get_content_report_subject_group",
        f = "get_content_report_subject_audit_log";
      async function b(e, t, r, s) {
        return Promise.all([
          e.invalidateQueries({ queryKey: [d, t, r] }),
          e.invalidateQueries({ queryKey: [f, t, r, s] }),
        ]);
      }
      function _(e, t) {
        const r = (0, c.KV)();
        return (0, n.I)(
          (function (e, t, r) {
            return {
              queryKey: [d, t, r],
              queryFn: async () => {
                const c = s.w.Init(o.ge);
                c.Body().set_subject_type(t), c.Body().set_subject_group_id(r);
                const n = await o.fL.GetContentReportSubjectGroup(e, c);
                if (!n.BSuccess())
                  throw new Error(
                    "Failed in GetContentReportSubjectGroup, EResult: " +
                      n.GetEResult(),
                  );
                return n.Body().toObject();
              },
            };
          })(r, e, t),
        );
      }
      function m(e, t, r) {
        const i = (0, c.KV)();
        return (0, n.I)(
          (function (e, t, r, c) {
            return {
              queryKey: [f, t, r, c],
              queryFn: async () => {
                if (void 0 === t || void 0 === r || void 0 === c) return;
                const n = s.w.Init(o.Ru);
                return (
                  n.Body().set_subject_type(t),
                  n.Body().set_subject_group_id(r),
                  n.Body().set_subject_id(c),
                  (await o.fL.GetAuditLog(e, n)).Body().toObject()
                );
              },
            };
          })(i, e, t, r),
        );
      }
      function h(e, t, r) {
        const n = (0, c.KV)(),
          u = (0, i.jE)();
        return (0, a.n)({
          mutationFn: async (c) => {
            const i = s.w.Init(o.u5);
            i.Body().set_subject_type(e),
              i.Body().set_subject_group_id(t),
              i.Body().set_subject_id(r),
              i.Body().set_required_level(c.eNewLevel),
              c.eReason && i.Body().set_reason(c.eReason),
              c.strNote && i.Body().set_note(c.strNote);
            const a = await o.fL.EscalateSubject(n, i);
            if (a.GetEResult() !== l.R)
              throw new Error(`Failed to escalate subject: ${a.GetEMsg()}`);
          },
          onSuccess: async (s, o) => {
            await Promise.all([
              b(u, e, t, r),
              u.invalidateQueries({ queryKey: ["get_claimed"] }),
              u.invalidateQueries({ queryKey: ["get_subject_overview"] }),
            ]);
          },
        });
      }
      function p() {
        const e = (0, c.KV)(),
          t = (0, i.jE)();
        return (0, a.n)({
          mutationFn: async (t) => {
            const r = s.w.Init(o.j);
            r.Body().set_subject_type(t.eSubjectType),
              r.Body().set_subject_group_id(t.ulSubjectGroupID),
              r.Body().set_subject_id(t.ulSubjectID);
            await o.fL.SustainModeration(e, r);
          },
          onSuccess: async (e, r) => {
            await t.invalidateQueries({ queryKey: ["get_claimed"] }),
              await b(t, r.eSubjectType, r.ulSubjectGroupID, r.ulSubjectID);
          },
        });
      }
      function j(e, t, r, n, l) {
        const u = (0, c.KV)(),
          d = (0, i.jE)();
        return (0, a.n)({
          mutationFn: async () => {
            const c = s.w.Init(o.ZV);
            c.Body().set_steamid(e),
              c.Body().set_subject_type(t),
              c.Body().set_subject_group_id(r),
              c.Body().set_subject_id(n),
              c.Body().set_details(l);
            await o.fL.DisputeModerationForSubject(u, c);
          },
          onSuccess: async () => {
            await b(d, t, r, n);
          },
        });
      }
      function y(e, t, r, n) {
        const l = (0, i.jE)(),
          u = (0, c.KV)();
        return (0, a.n)({
          mutationFn: async () => {
            const c = s.w.Init(o.zF);
            c.Body().set_subject_type(e),
              c.Body().set_subject_group_id(t),
              c.Body().set_subject_id(r),
              c.Body().set_owner_dispute_details(n);
            const i = await o.fL.UpdateSubject(u, c);
            if (!i.BSuccess()) throw new Error("EResult " + i.GetEResult());
          },
          onSuccess: async () => {
            await b(l, e, t, r);
          },
        });
      }
      function k(e) {
        const t = (0, c.KV)();
        return (0, n.I)(
          (function (e, t) {
            return {
              queryKey: ["reporterstats", t],
              queryFn: async () => {
                const r = s.w.Init(o.KD);
                r.Body().set_steamid(t);
                const c = await o.fL.GetReporterStats(e, r);
                if (!c.BSuccess()) throw new Error("EResult " + c.GetEResult());
                return c.Body().toObject();
              },
            };
          })(t, e),
        );
      }
      function g(e, t, r) {
        const o = (0, c.KV)(),
          n = (0, i.jE)();
        return (0, a.n)({
          mutationFn: async (c) => {
            const n = s.w.Init(u.Er);
            n.Body().set_steamid(e),
              n.Body().set_comment_thread_id(t),
              n.Body().set_gidcomment(r),
              n.Body().set_reason(c.reason),
              n.Body().set_note(c.message);
            for (const e of c.sanctions) {
              const t = new u.u6();
              t.set_sanction(e.sanction),
                e.days && t.set_days(e.days),
                n.Body().add_sanctions(t);
            }
            const i = await u.BE.SanctionComment(o, n);
            if (!i.BSuccess())
              throw new Error(
                `SanctionComment failed. EResult: ${i.GetEResult()} (${i.GetErrorMessage()})`,
              );
          },
          onSuccess: async () => {
            await n.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
      function v(e, t, r) {
        const o = (0, c.KV)(),
          n = (0, i.jE)();
        return (0, a.n)({
          mutationFn: async () => {
            const c = s.w.Init(u.RX);
            c.Body().set_steamid(e),
              c.Body().set_comment_thread_id(t),
              c.Body().set_gidcomment(r),
              c.Body().set_report_action(u.du.Pn),
              c.Body().set_resolve(!0),
              await u.Vi.UpdateCommentReportState(o, c);
          },
          onSuccess: async () => {
            await n.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
    },
    37226: (e, t, r) => {
      "use strict";
      r.d(t, { Bv: () => o, Dq: () => s, Yd: () => c });
      const s = 5,
        o = 7,
        c = 10;
    },
    42248: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => c });
      var s = r(78327),
        o = r(22837);
      function c() {
        return s.TS.IN_CLIENT && (0, o.DOG)(s.TS.LAUNCHER_TYPE);
      }
    },
    22797: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => d });
      var s = r(7850),
        o = r(90626),
        c = r(52038),
        n = r(20978),
        i = r.n(n);
      const a =
        r.p +
        "images/applications/community/steam_spinner.png?v=valveisgoodatcaching";
      var l = r(42248),
        u = r(66418);
      const d = o.memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: d,
          static: b,
          msDelayAppear: _,
        } = e;
        let m = [i().LoadingWrapper, "SteamLogoThrobber", f(r)];
        const [h, p] = o.useState(!_),
          j = !(0, l.q)();
        return (
          (0, o.useEffect)(() => {
            if (h) return;
            const e = setTimeout(() => p(!0), _);
            return () => clearTimeout(e);
          }, [_, h]),
          void 0 === n && m.push(i().noString),
          t && m.push(t),
          b && m.push(i().Static),
          (0, s.jsxs)("div", {
            className: (0, c.A)(
              "center" == d && i().throbber_center_wrapper,
              !!_ && i().ThrobberDelayAppear,
              h && i().Visible,
            ),
            children: [
              h &&
                j &&
                (0, s.jsx)("div", {
                  className: m.join(" "),
                  children: (0, s.jsx)("div", {
                    className: i().NewThrobber,
                    children: (0, s.jsx)("img", { src: (0, u.YJ)(a) }),
                  }),
                }),
              Boolean(n) &&
                (0, s.jsx)("div", { className: i().ThrobberText, children: n }),
            ],
          })
        );
      });
      o.memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: a,
          static: l,
          msDelayAppear: u,
        } = e;
        let d = [i().LoadingWrapper, "SteamLogoThrobber", f(r)];
        const [_, m] = o.useState(!u);
        return (
          (0, o.useEffect)(() => {
            if (_) return;
            const e = setTimeout(() => m(!0), u);
            return () => clearTimeout(e);
          }, [u, _]),
          void 0 === n && d.push(i().noString),
          t && d.push(t),
          l && d.push(i().Static),
          (0, s.jsxs)("div", {
            className: (0, c.A)(
              "center" == a && i().throbber_center_wrapper,
              !!u && i().ThrobberDelayAppear,
              _ && i().Visible,
            ),
            children: [
              _ &&
                (0, s.jsx)("div", {
                  className: d.join(" "),
                  children: (0, s.jsxs)("div", {
                    className: i().Throbber,
                    children: [
                      (0, s.jsx)(b, { className: i().base }),
                      (0, s.jsx)(b, { className: i().blur }),
                    ],
                  }),
                }),
              Boolean(n) &&
                (0, s.jsx)("div", { className: i().ThrobberText, children: n }),
            ],
          })
        );
      });
      function f(e) {
        switch (e) {
          case "small":
            return i().throbber_small;
          case "medium":
            return i().throbber_medium;
          case "xlarge":
            return i().throbber_xlarge;
          case "xxlarge":
            return i().throbber_xxlarge;
          default:
            return i().throbber_large;
        }
      }
      function b(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          (0, s.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, s.jsxs)("g", {
                className: i().partCircle,
                children: [
                  (0, s.jsx)("path", {
                    className: i().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M201.432,101.166",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
                  }),
                ],
              }),
              (0, s.jsxs)("g", {
                className: i().mainOutline,
                children: [
                  (0, s.jsx)("path", {
                    className: i().roundFill,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundOuterOutline,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber01,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber02,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber03,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber04,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber05,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber06,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber07,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber08,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber09,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber10,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber11,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber12,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber13,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber14,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, s.jsx)("path", {
                    className: i().roundThrobber15,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                ],
              }),
              (0, s.jsx)("g", {
                className: i().bottomCircle,
                children: (0, s.jsx)("path", {
                  fill: "#ffffff",
                  d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
                }),
              }),
              (0, s.jsx)("g", {
                className: i().topCircle,
                children: (0, s.jsx)("circle", {
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "6",
                  strokeMiterlimit: "10",
                  cx: "161.731",
                  cy: "101.274",
                  r: "23.019",
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
