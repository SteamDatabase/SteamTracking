/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [134],
  {
    "3USw": function (e, t, n) {
      e.exports = {
        SectionTitleHeader: "collapseablesection_SectionTitleHeader_2g5oN",
        required_title: "collapseablesection_required_title_3yDPZ",
      };
    },
    DisI: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return m;
      }),
        n.d(t, "d", function () {
          return _;
        }),
        n.d(t, "a", function () {
          return A;
        }),
        n.d(t, "b", function () {
          return b;
        });
      var s = n("Mgs7"),
        a = n("TLQK"),
        o = n("6Y59"),
        i = n("q1tI"),
        r = n("exH9"),
        l = n("fpVW"),
        c = n("IjL/"),
        d = n("TyAF"),
        u = n("3USw");
      const m = Object(d.a)((e) =>
        i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            {
              className: Object(r.a)(
                e.className ? e.className : u.SectionTitleHeader,
                u.required_title
              ),
            },
            i.createElement(
              "div",
              {
                className: Object(r.a)(
                  l.EventEditorTextTitle,
                  "EventEditorTextTitle"
                ),
              },
              e.title,
              Boolean(e.tooltip) && i.createElement(b, { tooltip: e.tooltip })
            ),
            i.createElement(A, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            })
          ),
          !e.getMinimized() && i.createElement(c.a, null, e.children)
        )
      );
      function _(e) {
        const [t, n] = i.useState(Boolean(e.bStartMinimized));
        return i.createElement(
          m,
          Object.assign({}, e, {
            getMinimized: () => t,
            toggleMinimized: () => n(!t),
          }),
          e.children
        );
      }
      function A(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          r = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return i.createElement(
          s.d,
          { "data-tooltip-text": Object(a.f)(r), onClick: n },
          e.bIsMinimized
            ? i.createElement(o.M, null)
            : i.createElement(o.P, null)
        );
      }
      function b(e) {
        return i.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: Object(r.a)(l.HelperTooltip, "HelperTooltip"),
          },
          " ",
          i.createElement(o.E, null)
        );
      }
    },
    JCps: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return R;
      }),
        n.d(t, "b", function () {
          return J;
        }),
        n.d(t, "c", function () {
          return Z;
        });
      var s = n("mrSG"),
        a = n("q1tI"),
        o = n.n(a),
        i = (n("kyHq"), n("kLLr")),
        r = n("5izx"),
        l = n("XxJJ"),
        c = n("qiKp"),
        d = n("opsS"),
        u = n("lkRc");
      const m = [
        "mousemove",
        "keypress",
        "scroll",
        "wheel",
        "focusin",
        "touchstart",
        "touchmove",
      ];
      class _ {
        constructor() {
          (this.m_callbackList = new c.a()),
            (this.m_timer = null),
            (this.m_bAreEventListenersRegistered = !1),
            "dev" == u.c.WEB_UNIVERSE && (window.g_FidgetStore = this);
        }
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        ResetFidgetTimer(e) {
          this.m_timer && window.clearTimeout(this.m_timer);
          this.m_timer = window.setTimeout(() => {
            (this.m_timer = null), this.m_callbackList.Dispatch();
          }, 2e3);
        }
        BIsUserFidgeting() {
          return !!this.m_timer;
        }
        GetCallbackList() {
          return this.m_callbackList;
        }
        BRegisterEventListeners() {
          if (this.m_bAreEventListenersRegistered) return !1;
          const e = window;
          for (const t of m) e.addEventListener(t, this.ResetFidgetTimer);
          return (this.m_bAreEventListenersRegistered = !0), !0;
        }
        BUnregisterEventListeners() {
          if (!this.m_bAreEventListenersRegistered) return !1;
          const e = window;
          for (const t of m) e.removeEventListener(t, this.ResetFidgetTimer);
          return (this.m_bAreEventListenersRegistered = !1), !1;
        }
      }
      function A() {
        o.a.useEffect(() => {
          const e = _.Get().BRegisterEventListeners();
          return () => {
            e && _.Get().BUnregisterEventListeners();
          };
        }, []);
      }
      Object(s.b)([l.a], _.prototype, "ResetFidgetTimer", null);
      var b = n("Qcoi"),
        v = n("vDqi"),
        Q = n.n(v),
        p = (n("mgoM"), n("X2UP")),
        g = (n("AiWL"), n("OS6B"));
      class h {
        constructor() {
          (this.m_mapQAndASessions = new Map()),
            (this.m_mapQAndAChangeCallbackList = new Map()),
            (this.m_dashboardCallbackList = new c.a()),
            (this.m_mapQuestions = new Map()),
            (this.m_mapQuestionCallbackList = new Map()),
            (this.m_rgPendingQuestionGIDs = []),
            "dev" == u.c.WEB_UNIVERSE && (window.g_QAndAStore = this);
        }
        static Get() {
          return h.s_Singleton || (h.s_Singleton = new h()), h.s_Singleton;
        }
        GetQAndACallbackList(e) {
          return (
            this.m_mapQAndAChangeCallbackList.has(e) ||
              this.m_mapQAndAChangeCallbackList.set(e, new c.a()),
            this.m_mapQAndAChangeCallbackList.get(e)
          );
        }
        GetQuestionCallbackList(e) {
          return (
            this.m_mapQuestionCallbackList.has(e) ||
              this.m_mapQuestionCallbackList.set(e, new c.a()),
            this.m_mapQuestionCallbackList.get(e)
          );
        }
        GetDashboardCallbackList() {
          return this.m_dashboardCallbackList;
        }
        GetSession(e) {
          return this.m_mapQAndASessions.get(e);
        }
        GetAllSessions() {
          return Array.from(this.m_mapQAndASessions.values());
        }
        GetQuestion(e) {
          return this.m_mapQuestions.get(e);
        }
        PreloadPosterProfiles(e, t) {
          const n = new Set();
          for (const t of e)
            n.add(
              i.a.InitFromAccountID(t.posterAccountID).ConvertTo64BitString()
            );
          const s = Array.from(n);
          for (; s.length > 0; ) {
            const e = s.splice(0, 500);
            b.a.LoadProfiles(e, t);
          }
        }
        LoadAllSessions(e) {
          var t, n, a, o;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (!u.h.logged_in || !u.c.SESSIONID) return 15;
            const s =
                u.c.COMMUNITY_BASE_URL +
                "questions/" +
                u.b.VANITY_ID +
                "/ajaxgetqandasforgroup",
              i = {};
            let r = null;
            try {
              const n = yield Q.a.get(s, {
                params: i,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                (console.log(n),
                200 == (null == n ? void 0 : n.status) &&
                  1 ==
                    (null === (t = n.data) || void 0 === t
                      ? void 0
                      : t.success) &&
                  n.data.qandas)
              ) {
                for (const e of n.data.qandas)
                  this.m_mapQAndASessions.set(e.gidSession, e);
                return (
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              }
              r = { response: n };
            } catch (e) {
              r = e;
            }
            const l = Object(g.a)(r);
            return (
              console.error(
                "Could not load question and answer sessions for group",
                l.strErrorMsg,
                l
              ),
              null !==
                (o =
                  null ===
                    (a =
                      null === (n = null == r ? void 0 : r.response) ||
                      void 0 === n
                        ? void 0
                        : n.data) || void 0 === a
                    ? void 0
                    : a.success) && void 0 !== o
                ? o
                : 2
            );
          });
        }
        CreateNewSession(e, t) {
          var n, a, o, i;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (!u.h.logged_in || !u.c.SESSIONID) return 15;
            const s =
                u.c.COMMUNITY_BASE_URL +
                "questions/" +
                u.b.VANITY_ID +
                "/ajaxcreateqanda",
              r = new FormData();
            r.append("sessionid", u.c.SESSIONID), r.append("name", e);
            let l = null;
            try {
              const e = yield Q.a.post(s, r, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (n = e.data) || void 0 === n
                    ? void 0
                    : n.success) &&
                e.data.qanda
              )
                return (
                  this.m_mapQAndASessions.set(
                    e.data.qanda.gidSession,
                    e.data.qanda
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              l = { response: e };
            } catch (e) {
              l = e;
            }
            const c = Object(g.a)(l);
            return (
              console.error("Could not create Q&A", e, c.strErrorMsg, c),
              null !==
                (i =
                  null ===
                    (o =
                      null === (a = null == l ? void 0 : l.response) ||
                      void 0 === a
                        ? void 0
                        : a.data) || void 0 === o
                    ? void 0
                    : o.success) && void 0 !== i
                ? i
                : 2
            );
          });
        }
        RenameSession(e, t, n) {
          var a, o, i, r;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (!u.h.logged_in || !u.c.SESSIONID) return 15;
            const s =
                u.c.COMMUNITY_BASE_URL +
                "questions/" +
                u.b.VANITY_ID +
                "/ajaxrenameqanda/" +
                e,
              l = new FormData();
            l.append("sessionid", u.c.SESSIONID), l.append("name", t);
            let c = null;
            try {
              const o = yield Q.a.post(s, l, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == o ? void 0 : o.status) &&
                1 ==
                  (null === (a = o.data) || void 0 === a ? void 0 : a.success)
              )
                return (
                  (this.m_mapQAndASessions.get(e).strName = t),
                  this.GetQAndACallbackList(e).Dispatch(
                    this.m_mapQAndASessions.get(e)
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              c = { response: o };
            } catch (e) {
              c = e;
            }
            const d = Object(g.a)(c);
            return (
              console.error("Could not rename Q&A", e, t, d.strErrorMsg, d),
              null !==
                (r =
                  null ===
                    (i =
                      null === (o = null == c ? void 0 : c.response) ||
                      void 0 === o
                        ? void 0
                        : o.data) || void 0 === i
                    ? void 0
                    : i.success) && void 0 !== r
                ? r
                : 2
            );
          });
        }
        DeleteSession(e, t) {
          var n, a, o, i;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (!u.h.logged_in || !u.c.SESSIONID) return 15;
            const s =
                u.c.COMMUNITY_BASE_URL +
                "questions/" +
                u.b.VANITY_ID +
                "/ajaxdeleteqanda/" +
                e,
              r = new FormData();
            r.append("sessionid", u.c.SESSIONID);
            let l = null;
            try {
              const a = yield Q.a.post(s, r, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == a ? void 0 : a.status) &&
                1 ==
                  (null === (n = a.data) || void 0 === n ? void 0 : n.success)
              )
                return (
                  this.m_mapQAndASessions.delete(e),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              l = { response: a };
            } catch (e) {
              l = e;
            }
            const c = Object(g.a)(l);
            return (
              console.error("Could not delete Q&A", e, c.strErrorMsg, c),
              null !==
                (i =
                  null ===
                    (o =
                      null === (a = null == l ? void 0 : l.response) ||
                      void 0 === a
                        ? void 0
                        : a.data) || void 0 === o
                    ? void 0
                    : o.success) && void 0 !== i
                ? i
                : 2
            );
          });
        }
        LoadSession(e, t, n) {
          var a, o, i, r, l, c, d, m, _, A;
          return Object(s.a)(this, void 0, void 0, function* () {
            const s =
                u.h.logged_in &&
                (!this.m_mapQAndASessions.has(e) ||
                  this.m_mapQAndASessions.get(e).bUserCanModerate ||
                  this.m_rgPendingQuestionGIDs.length > 0 ||
                  t)
                  ? "/ajaxgetqandasessionforuser/"
                  : "/ajaxgetqandasession/",
              b = u.c.COMMUNITY_BASE_URL + "questions/" + u.b.VANITY_ID + s + e,
              v = {};
            let p = null;
            try {
              const t = yield Q.a.get(b, {
                params: v,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a
                    ? void 0
                    : a.success) &&
                t.data.qanda &&
                t.data.questions
              ) {
                this.PreloadPosterProfiles(t.data.questions, n);
                for (const e of t.data.questions) {
                  const t = e.gidQuestion,
                    n =
                      null !==
                        (i =
                          null === (o = this.m_mapQuestions.get(t)) ||
                          void 0 === o
                            ? void 0
                            : o.bUserUpVoted) && void 0 !== i
                        ? i
                        : e.bUserUpVoted,
                    s = Object.assign(Object.assign({}, e), {
                      bUserUpVoted: n,
                    });
                  this.m_mapQuestions.set(t, s),
                    this.GetQuestionCallbackList(t).Dispatch(s);
                }
                const s =
                    null !==
                      (l =
                        null === (r = this.m_mapQAndASessions.get(e)) ||
                        void 0 === r
                          ? void 0
                          : r.bUserCanModerate) && void 0 !== l
                      ? l
                      : t.data.qanda.bUserCanModerate,
                  a =
                    null !==
                      (d =
                        null === (c = this.m_mapQAndASessions.get(e)) ||
                        void 0 === c
                          ? void 0
                          : c.bUserCanAskQuestions) && void 0 !== d
                      ? d
                      : t.data.qanda.bUserCanAskQuestions,
                  u = Object.assign(Object.assign({}, t.data.qanda), {
                    bUserCanModerate: s,
                    bUserCanAskQuestions: a,
                  });
                return (
                  this.m_mapQAndASessions.set(e, u),
                  this.GetQAndACallbackList(e).Dispatch(u),
                  this.UpdatePendingQuestionList(t.data.qanda.rgQuestionGIDs),
                  1
                );
              }
              p = { response: t };
            } catch (e) {
              p = e;
            }
            const h = Object(g.a)(p);
            return (
              console.error("Could not load Q&A", e, h.strErrorMsg, h),
              null !==
                (A =
                  null ===
                    (_ =
                      null === (m = null == p ? void 0 : p.response) ||
                      void 0 === m
                        ? void 0
                        : m.data) || void 0 === _
                    ? void 0
                    : _.success) && void 0 !== A
                ? A
                : 2
            );
          });
        }
        UpdatePendingQuestionList(e) {
          var t;
          const n = new Set();
          for (const t of e) {
            const e = this.m_mapQuestions.get(t);
            e.posterAccountID == u.h.accountid &&
              1 == e.eState &&
              n.add(e.gidQuestion);
          }
          if (this.m_rgPendingQuestionGIDs.length > 0) {
            const s = new Set(e);
            for (const e of this.m_rgPendingQuestionGIDs)
              s.has(e) &&
                1 ==
                  (null === (t = this.m_mapQuestions.get(e)) || void 0 === t
                    ? void 0
                    : t.eState) &&
                n.add(e);
          }
          this.m_rgPendingQuestionGIDs = Array.from(n);
        }
        AskNewQuestion(e, t, n) {
          var a, o, i, r, l;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (
              !u.h.logged_in ||
              !u.c.SESSIONID ||
              !(null === (a = this.m_mapQAndASessions.get(e)) || void 0 === a
                ? void 0
                : a.bUserCanAskQuestions)
            )
              return 15;
            const s =
                u.c.COMMUNITY_BASE_URL +
                "questions/" +
                u.b.VANITY_ID +
                "/ajaxaskquestion/" +
                e,
              c = new FormData();
            c.append("sessionid", u.c.SESSIONID), c.append("question", t);
            let d = null;
            try {
              const t = yield Q.a.post(s, c, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (o = t.data) || void 0 === o ? void 0 : o.success)
              ) {
                this.m_rgPendingQuestionGIDs.push(t.data.gidQuestion);
                const s = !0;
                return this.LoadSession(e, s, n), 1;
              }
              d = { response: t };
            } catch (e) {
              d = e;
            }
            const m = Object(g.a)(d);
            return (
              console.error(
                "Could not upload question",
                e,
                t,
                m.strErrorMsg,
                m
              ),
              null !==
                (l =
                  null ===
                    (r =
                      null === (i = null == d ? void 0 : d.response) ||
                      void 0 === i
                        ? void 0
                        : i.data) || void 0 === r
                    ? void 0
                    : r.success) && void 0 !== l
                ? l
                : 2
            );
          });
        }
        ModerateQuestion(e, t, n, a) {
          var o, i, r, l, c;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (
              !u.h.logged_in ||
              !u.c.SESSIONID ||
              !(null === (o = this.m_mapQAndASessions.get(e)) || void 0 === o
                ? void 0
                : o.bUserCanModerate)
            )
              return 15;
            if (1 != n && 3 != n) return 8;
            if (this.m_mapQuestions.get(t).eState == n) return 1;
            const s =
                u.c.COMMUNITY_BASE_URL +
                "questions/" +
                u.b.VANITY_ID +
                "/ajaxmoderatequestion/" +
                e,
              d = new FormData();
            d.append("sessionid", u.c.SESSIONID),
              d.append("gidquestion", t),
              d.append("action", 1 == n ? "show" : "hide");
            let m = null;
            try {
              const t = yield Q.a.post(s, d, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (i = t.data) || void 0 === i ? void 0 : i.success)
              ) {
                const t = !0;
                return this.LoadSession(e, t, a), 1;
              }
              m = { response: t };
            } catch (e) {
              m = e;
            }
            const _ = Object(g.a)(m);
            return (
              console.error(
                "Could not moderate question",
                e,
                t,
                n,
                _.strErrorMsg,
                _
              ),
              null !==
                (c =
                  null ===
                    (l =
                      null === (r = null == m ? void 0 : m.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== c
                ? c
                : 2
            );
          });
        }
        AnswerQuestion(e, t, n, a) {
          var o, i, r, l, c;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (
              !u.h.logged_in ||
              !u.c.SESSIONID ||
              !(null === (o = this.m_mapQAndASessions.get(e)) || void 0 === o
                ? void 0
                : o.bUserCanAskQuestions)
            )
              return 15;
            const s =
                u.c.COMMUNITY_BASE_URL +
                "questions/" +
                u.b.VANITY_ID +
                "/ajaxanswerquestion/" +
                e,
              d = new FormData();
            d.append("sessionid", u.c.SESSIONID),
              d.append("gidquestion", t),
              d.append("answer", n);
            let m = null;
            try {
              const t = yield Q.a.post(s, d, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (i = t.data) || void 0 === i ? void 0 : i.success)
              ) {
                const t = !0;
                return this.LoadSession(e, t, a), 1;
              }
              m = { response: t };
            } catch (e) {
              m = e;
            }
            const _ = Object(g.a)(m);
            return (
              console.error(
                "Could not upload answer",
                e,
                t,
                n,
                _.strErrorMsg,
                _
              ),
              null !==
                (c =
                  null ===
                    (l =
                      null === (r = null == m ? void 0 : m.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== c
                ? c
                : 2
            );
          });
        }
        VoteOnQuestion(e, t, n, a) {
          var o, i, r, l, c;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (
              !u.h.logged_in ||
              !u.c.SESSIONID ||
              !(null === (o = this.m_mapQAndASessions.get(e)) || void 0 === o
                ? void 0
                : o.bUserCanAskQuestions)
            )
              return 15;
            if (n === this.m_mapQuestions.get(t).bUserUpVoted) return 1;
            let s = this.m_mapQuestions.get(t);
            const d = s.nVoteCount,
              m = d + (n ? 1 : -1);
            (s = Object.assign(Object.assign({}, s), {
              nVoteCount: m,
              bUserUpVoted: n,
            })),
              this.m_mapQuestions.set(t, s),
              this.GetQuestionCallbackList(t).Dispatch(s);
            const _ =
                u.c.COMMUNITY_BASE_URL +
                "questions/" +
                u.b.VANITY_ID +
                "/ajaxvoteforquestion/" +
                e,
              A = new FormData();
            A.append("sessionid", u.c.SESSIONID),
              A.append("gidquestion", t),
              A.append("up", n ? "1" : "0");
            let b = null;
            try {
              const e = yield Q.a.post(_, A, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (i = e.data) || void 0 === i ? void 0 : i.success)
              )
                return 1;
              b = { response: e };
            } catch (e) {
              b = e;
            }
            (s = Object.assign(Object.assign({}, s), {
              nVoteCount: d,
              bUserUpVoted: !n,
            })),
              this.m_mapQuestions.set(t, s),
              this.GetQuestionCallbackList(t).Dispatch(s);
            const v = Object(g.a)(b);
            return (
              console.error("Could not upload vote", e, t, n, v.strErrorMsg, v),
              null !==
                (c =
                  null ===
                    (l =
                      null === (r = null == b ? void 0 : b.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== c
                ? c
                : 2
            );
          });
        }
      }
      function C(e) {
        const t = Object(p.a)("useQAndASession"),
          n = o.a.useCallback(
            (n) =>
              Object(s.a)(this, void 0, void 0, function* () {
                var s;
                return (
                  (null === (s = h.Get().GetSession(e)) || void 0 === s
                    ? void 0
                    : s.bUserCanAskQuestions) &&
                  (yield h.Get().AskNewQuestion(e, n, t))
                );
              }),
            [e, t]
          ),
          a = o.a.useCallback(
            (n, s) => {
              var a;
              return (
                (null === (a = h.Get().GetSession(e)) || void 0 === a
                  ? void 0
                  : a.bUserCanAskQuestions) &&
                h.Get().VoteOnQuestion(e, n, s, t)
              );
            },
            [e, t]
          ),
          i = o.a.useCallback(
            (e) => {
              var t;
              const s = !!e,
                o = null == e ? void 0 : e.strName,
                i = null == e ? void 0 : e.bUserCanModerate,
                r = null == e ? void 0 : e.bUserCanAskQuestions,
                l = [],
                c = [],
                d = [],
                u = [];
              for (const n of null !==
                (t = null == e ? void 0 : e.rgQuestionGIDs) && void 0 !== t
                ? t
                : []) {
                const e = h.Get().GetQuestion(n);
                switch (null == e ? void 0 : e.eState) {
                  case 1:
                    l.push(n);
                    break;
                  case 2:
                    c.push(n);
                    break;
                  case 0:
                    d.push(n);
                    break;
                  case 3:
                    u.push(n);
                }
              }
              return (
                l.sort(
                  (e, t) =>
                    h.Get().GetQuestion(t).nVoteCount -
                    h.Get().GetQuestion(e).nVoteCount
                ),
                c.sort(
                  (e, t) =>
                    h.Get().GetQuestion(t).rtAnswerTime -
                    h.Get().GetQuestion(e).rtAnswerTime
                ),
                d.sort(
                  (e, t) =>
                    h.Get().GetQuestion(t).rtPostTime -
                    h.Get().GetQuestion(e).rtPostTime
                ),
                u.sort(
                  (e, t) =>
                    h.Get().GetQuestion(t).rtPostTime -
                    h.Get().GetQuestion(e).rtPostTime
                ),
                {
                  bIsLoaded: s,
                  strName: o,
                  bUserCanModerate: i,
                  bUserCanAskQuestions: r,
                  fnAskQuestion: n,
                  fnVoteOnQuestion: a,
                  rgModeratedQuestionGIDs: l,
                  rgAnsweredQuestionGIDs: c,
                  rgNewQuestionGIDs: d,
                  rgHiddenQuestionGIDs: u,
                }
              );
            },
            [n, a]
          ),
          [r, l] = o.a.useState(() => i(h.Get().GetSession(e))),
          c = o.a.useCallback((e) => l(i(e)), [i]);
        return (
          Object(d.d)(h.Get().GetQAndACallbackList(e), c),
          o.a.useEffect(() => {
            r.bIsLoaded || h.Get().LoadSession(e);
          }, [r.bIsLoaded, e]),
          r
        );
      }
      let f = null;
      function S(e) {
        const t = Object(p.a)("useReloadFunction"),
          [n, s] = o.a.useState(!1),
          a = o.a.useCallback(() => {
            s(!0);
            const n = h.Get().LoadSession(e, !1, t);
            return n.then(() => s(!1)), n;
          }, [e, t]),
          i = (function (e) {
            const t = o.a.useRef(null),
              n = o.a.useCallback(() => {
                t.current && (t.current(), (t.current = null));
              }, []);
            return (
              Object(d.d)(_.Get().GetCallbackList(), n),
              o.a.useEffect(() => () => {
                t.current = null;
              }),
              o.a.useCallback(
                (...n) => {
                  _.Get().BIsUserFidgeting()
                    ? (t.current = () => e(...n))
                    : ((t.current = null), e(...n));
                },
                [e]
              )
            );
          })(a);
        return (
          o.a.useEffect(() => {
            if (f) return () => {};
            return (
              (f = window.setInterval(i, 1e4)), () => window.clearInterval(f)
            );
          }, [i]),
          o.a.useMemo(() => ({ fnReload: a, bIsReloading: n }), [a, n])
        );
      }
      function E(e) {
        const t = Object(p.a)("useQuestionModeratorActions"),
          n = o.a.useCallback(
            (n, s) => {
              var a;
              return (
                (null === (a = h.Get().GetSession(e)) || void 0 === a
                  ? void 0
                  : a.bUserCanModerate) && h.Get().AnswerQuestion(e, n, s, t)
              );
            },
            [e, t]
          ),
          s = o.a.useCallback(
            (n, s) => {
              var a;
              return (
                (null === (a = h.Get().GetSession(e)) || void 0 === a
                  ? void 0
                  : a.bUserCanModerate) && h.Get().ModerateQuestion(e, n, s, t)
              );
            },
            [e, t]
          );
        return o.a.useMemo(
          () => ({ fnAnswerQuestion: n, fnModerateQuestion: s }),
          [n, s]
        );
      }
      var N = n("Mgs7"),
        I = n("BFsE"),
        O = n("YLyR"),
        w = n("Jqb/"),
        D = n("ka0M"),
        q = n("6Y59"),
        T = n("0OaU"),
        j = n("5E+2"),
        k = n("DisI"),
        M = n("exH9"),
        G = n("TLQK"),
        L = n("bS9Q"),
        U = n("CdLH"),
        V = n("hII0"),
        B = n.n(V);
      function R(e) {
        const t = (function () {
          const [e, t] = o.a.useState(h.Get().GetAllSessions());
          return (
            Object(d.d)(h.Get().GetDashboardCallbackList(), t),
            o.a.useEffect(() => {
              0 == e.length && h.Get().LoadAllSessions();
            }, [e.length]),
            e
          );
        })();
        return o.a.createElement(
          "div",
          { className: B.a.QADashboardCtn },
          o.a.createElement(P, null),
          o.a.createElement(
            "div",
            {
              className: Object(M.a)(
                B.a.DashboardRow,
                B.a.DashboardColumnHeaders
              ),
            },
            o.a.createElement(
              "div",
              { className: B.a.QAndAName },
              Object(G.f)("#QAndA_Column_Name")
            ),
            o.a.createElement(
              "div",
              { className: B.a.GIDSession },
              Object(G.f)("#QAndA_Column_GID")
            ),
            o.a.createElement(
              "div",
              { className: B.a.QuestionCount },
              Object(G.f)("#QAndA_Column_QuestionCount")
            ),
            o.a.createElement(
              "div",
              { className: B.a.QAndADeleteColumn },
              Object(G.f)("#QAndA_Column_DeleteButtons")
            )
          ),
          t.map((e) => o.a.createElement(y, { key: e.gidSession, qanda: e }))
        );
      }
      function P(e) {
        const t = o.a.useCallback(
          () =>
            Object(D.b)(o.a.createElement(H, null), window, {
              strTitle: Object(G.f)("#QAndA_CreateQAndA_Title"),
            }),
          []
        );
        return o.a.createElement(
          "div",
          { className: B.a.DashboardHeader },
          o.a.createElement(
            "div",
            { className: B.a.DashboardHeaderTitle },
            Object(G.f)("#QAndA_Dashboard")
          ),
          o.a.createElement(
            "div",
            { className: B.a.DashboardHeaderButtonCtn },
            o.a.createElement(
              N.d,
              { onClick: t },
              Object(G.f)("#QAndA_CreateQAndA_Button")
            )
          )
        );
      }
      function H(e) {
        const t = (function () {
            const e = Object(p.a)("useCreateQAndAFn");
            return o.a.useCallback((t) => h.Get().CreateNewSession(t, e), [e]);
          })(),
          [n, s] = o.a.useState("");
        return o.a.createElement(
          w.e,
          {
            strTitle: Object(G.f)("#QAndA_CreateQAndA_Title"),
            strDescription: Object(G.f)("#QAndA_CreateQAndA_Instructions"),
            strOKButtonText: Object(G.f)("#Button_Create"),
            onOK: () => t(n),
            bOKDisabled: 0 == n.length,
            closeModal: e.closeModal,
            className: B.a.CreateQAndADialog,
          },
          o.a.createElement(N.m, {
            type: "text",
            className: B.a.NameInput,
            value: n,
            placeholder: Object(G.f)("#QAndA_EnterNamePrompt"),
            onFocus: (e) => e.target.select(),
            onChange: (e) => s(e.currentTarget.value),
            maxLength: 120,
          })
        );
      }
      function y(e) {
        const { qanda: t } = e,
          n =
            u.c.COMMUNITY_BASE_URL +
            "questions/" +
            u.b.VANITY_ID +
            "/view/" +
            t.gidSession,
          s = o.a.useCallback(
            (e) => {
              e.stopPropagation(),
                e.preventDefault(),
                Object(D.b)(o.a.createElement(x, { qanda: t }), window, {
                  strTitle: Object(G.f)("#QAndA_CreateQAndA_Title"),
                });
            },
            [t]
          );
        return o.a.createElement(
          "a",
          { className: B.a.DashboardRow, href: n },
          o.a.createElement(F, { qanda: t }),
          o.a.createElement("div", { className: B.a.GIDSession }, t.gidSession),
          o.a.createElement(
            "div",
            { className: B.a.QuestionCount },
            t.rgQuestionGIDs.length
          ),
          o.a.createElement(
            "div",
            { className: B.a.QAndADeleteColumn },
            o.a.createElement(
              "div",
              { className: B.a.DeleteButton, onClick: s },
              o.a.createElement(q.pb, null)
            )
          )
        );
      }
      function F(e) {
        const { qanda: t } = e,
          [n, s] = o.a.useState(!1),
          [a, i] = o.a.useState(t.strName),
          r = (function () {
            const e = Object(p.a)("useRenameQAndAFn");
            return o.a.useCallback((t, n) => h.Get().RenameSession(t, n, e), [
              e,
            ]);
          })(),
          l =
            t.strName.length > 0
              ? t.strName
              : o.a.createElement(
                  "span",
                  { className: B.a.Prompt },
                  Object(G.f)("#QAndA_EnterNamePrompt")
                ),
          c = o.a.createElement(
            "div",
            { className: B.a.NameInput },
            o.a.createElement(N.m, {
              type: "text",
              className: B.a.NameInput,
              value: a,
              placeholder: Object(G.f)("#QAndA_EnterNamePrompt"),
              onFocus: (e) => e.target.select(),
              onChange: (e) => i(e.currentTarget.value),
              maxLength: 120,
            }),
            o.a.createElement(
              N.r,
              {
                onClick: (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    0 != Object(L.e)(a, t.strName)
                      ? r(t.gidSession, a).then(() => s(!1))
                      : s(!1);
                },
                className: B.a.InputButton,
              },
              Object(G.f)("#Button_Save")
            )
          );
        return o.a.createElement(
          "div",
          {
            className: Object(M.a)(B.a.QAndAName, n && B.a.Editing),
            onClick: (e) => {
              e.stopPropagation(), e.preventDefault(), n || s(!0);
            },
          },
          n ? c : l
        );
      }
      function x(e) {
        const { qanda: t } = e,
          n = (function () {
            const e = Object(p.a)("useDeleteQAndAFn");
            return o.a.useCallback((t) => h.Get().DeleteSession(t, e), [e]);
          })();
        return o.a.createElement(
          w.e,
          {
            strTitle: Object(G.f)("#QAndA_Column_DeleteButtons"),
            strDescription: Object(G.f)("#QAndA_DeleteQAndA_Instructions"),
            onOK: () => n(t.gidSession),
            closeModal: e.closeModal,
            className: B.a.DeleteQAndADialog,
          },
          o.a.createElement(
            "div",
            { className: B.a.DeleteInfo },
            Object(G.f)("#QAndA_Column_Name") + ": " + t.strName
          ),
          o.a.createElement(
            "div",
            { className: B.a.DeleteInfo },
            Object(G.f)("#QAndA_Column_QuestionCount") +
              ": " +
              t.rgQuestionGIDs.length
          )
        );
      }
      function Y(e) {
        const {
            gidSession: t,
            gidQuestion: n,
            bUserCanModerate: s,
            bUserCanVote: a,
            fnVoteOnQuestion: i,
            rtNow: r,
          } = e,
          [l, c] = (function (e) {
            const [t, n] = o.a.useState(h.Get().GetQuestion(e));
            Object(d.d)(h.Get().GetQuestionCallbackList(e), n);
            const [s, a] = o.a.useState(!!t);
            return [t, !!t || s];
          })(n);
        if (!l) return null;
        const u = r - l.rtPostTime,
          m = u < U.f.PerDay ? Object(G.p)(u) : Object(G.o)(l.rtPostTime),
          _ = a ? () => i(n, !l.bUserUpVoted) : null,
          A = a
            ? l.bUserUpVoted
              ? B.a.Vote_Positive
              : B.a.Vote_Ready
            : B.a.Vote_CannotVote,
          b = Object(M.a)(
            B.a.Question,
            3 == l.eState && B.a.Hidden,
            1 == l.eState && B.a.Moderated,
            0 == l.eState && B.a.Unmoderated,
            2 == l.eState && B.a.Answered
          );
        return o.a.createElement(
          "div",
          { className: b },
          o.a.createElement(
            "div",
            { className: B.a.QuestionCtn },
            o.a.createElement(K, { accountID: l.posterAccountID }),
            o.a.createElement(
              "div",
              { className: B.a.QuestionText },
              o.a.createElement(
                "div",
                { className: B.a.QuestionAndVotes },
                o.a.createElement(
                  "div",
                  { className: B.a.QuestionTitle },
                  l.strQuestionText
                ),
                o.a.createElement(
                  j.a,
                  {
                    toolTipContent:
                      a &&
                      (l.bUserUpVoted
                        ? Object(G.f)("#QAndA_VoteRemoveTooltip")
                        : Object(G.f)("#QAndA_VoteTooltip")),
                  },
                  o.a.createElement(
                    "div",
                    { className: Object(M.a)(A, B.a.Votes), onClick: _ },
                    o.a.createElement(q.ob, { className: B.a.RateIcon }),
                    o.a.createElement(
                      "div",
                      { className: B.a.VoteCount },
                      Number(l.nVoteCount).toLocaleString()
                    )
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: B.a.QuestionStats },
                o.a.createElement(
                  "div",
                  { className: B.a.PostTime },
                  o.a.createElement(
                    O.g,
                    {
                      rtFullDate: l.rtPostTime,
                      className: B.a.PostTime,
                      stylesmodule: B.a,
                    },
                    m
                  )
                )
              )
            )
          ),
          l.rtAnswerTime && o.a.createElement(z, { question: l, rtNow: r }),
          s &&
            o.a.createElement(W, {
              gidSession: t,
              gidQuestion: n,
              eState: null == l ? void 0 : l.eState,
            })
        );
      }
      function z(e) {
        const { question: t, rtNow: n } = e,
          s = t.rtAnswerTime && n - t.rtAnswerTime,
          a =
            t.rtAnswerTime &&
            (s < U.f.PerDay ? Object(G.p)(s) : Object(G.o)(t.rtAnswerTime));
        return t.strAnswerText
          ? o.a.createElement(
              "div",
              { className: B.a.Answer },
              o.a.createElement(
                "div",
                { className: B.a.AnswerTitle },
                o.a.createElement(
                  "div",
                  { className: B.a.AnswerCheck },
                  o.a.createElement(q.q, { color: "#67c1f5" })
                ),
                Object(G.f)("#QAndA_ModeratorAnswerTitle")
              ),
              o.a.createElement(
                "div",
                { className: B.a.AnswerText },
                " ",
                t.strAnswerText,
                " "
              ),
              o.a.createElement(
                "div",
                { className: B.a.QuestionStats },
                o.a.createElement(
                  O.g,
                  {
                    rtFullDate: t.rtAnswerTime,
                    className: B.a.PostTime,
                    stylesmodule: B.a,
                  },
                  a
                )
              )
            )
          : o.a.createElement(
              "div",
              { className: B.a.AnswerTitle },
              o.a.createElement(
                "div",
                { className: B.a.AnswerCheck },
                o.a.createElement(q.q, { color: "#67c1f5" })
              ),
              Object(G.f)("#QAndA_AlreadyAnsweredTitle")
            );
      }
      function K(e) {
        var t;
        const n = i.a.InitFromAccountID(e.accountID),
          s = n.ConvertTo64BitString(),
          [a, r] = Object(b.b)(n);
        return a
          ? null
          : o.a.createElement(
              "a",
              {
                href: u.c.COMMUNITY_BASE_URL + "profiles/" + s,
                className: B.a.PersonaName,
                "data-miniprofile": "s" + s,
              },
              null !== (t = null == r ? void 0 : r.persona_name) && void 0 !== t
                ? t
                : s
            );
      }
      function W(e) {
        const { gidSession: t, gidQuestion: n, eState: s } = e,
          { fnAnswerQuestion: a, fnModerateQuestion: i } = E(t),
          r = 0 == s || 3 == s,
          l = 3 != s,
          c = 1 == s;
        return o.a.createElement(
          "div",
          { className: B.a.ModeratorSection },
          Object(G.f)("#QAndA_ModeratorLabel"),
          o.a.createElement(
            "div",
            { className: B.a.ToolRow },
            o.a.createElement(ee, {
              strPrompt: Object(G.f)("#QAndA_AnswerPrompt"),
              fnSubmit: (e) => a(n, e),
            })
          ),
          o.a.createElement(
            "div",
            { className: B.a.ToolRow },
            Object(G.f)("#QAndA_ModeratorOtherOptionsLabel"),
            o.a.createElement(
              j.a,
              {
                toolTipContent: Object(G.f)(
                  "#QAndA_ModerateApproveButton_ttip"
                ),
              },
              o.a.createElement(
                N.d,
                {
                  onClick: () => i(n, 1),
                  className: B.a.InputButton,
                  disabled: !r,
                },
                Object(G.f)("#QAndA_ModerateApproveButton")
              )
            ),
            o.a.createElement(
              j.a,
              { toolTipContent: Object(G.f)("#QAndA_ModerateHideButton_ttip") },
              o.a.createElement(
                N.d,
                {
                  onClick: () => i(n, 3),
                  className: B.a.InputButton,
                  disabled: !l,
                },
                Object(G.f)("#QAndA_ModerateHideButton")
              )
            ),
            o.a.createElement(
              j.a,
              { toolTipContent: Object(G.f)("#QAndA_QuickAnswerButton_ttip") },
              o.a.createElement(
                N.d,
                {
                  onClick: () => a(n, ""),
                  className: B.a.InputButton,
                  disabled: !c,
                },
                Object(G.f)("#QAndA_QuickAnswerButton")
              )
            )
          )
        );
      }
      function J(e) {
        const { gidSession: t } = e;
        A();
        const { strName: n, bUserCanModerate: s } = C(t);
        return o.a.createElement(
          "div",
          { className: B.a.QAFullPageView },
          o.a.createElement(
            "div",
            { className: B.a.QAName },
            Object(G.f)("#QAndA_Header") +
              ((null == n ? void 0 : n.length) > 0 ? ": " + n : "")
          ),
          o.a.createElement(
            "div",
            { className: B.a.QAColumns },
            o.a.createElement(Z, { gidSession: t, bHalfOfFullPage: s }),
            s && o.a.createElement(X, { gidSession: t })
          )
        );
      }
      function X(e) {
        const { gidSession: t } = e,
          {
            bUserCanModerate: n,
            rgNewQuestionGIDs: s,
            rgHiddenQuestionGIDs: a,
          } = C(t),
          i = Object(r.c)(10);
        return n
          ? o.a.createElement(
              "div",
              {
                className: Object(M.a)(
                  B.a.QAModeratorColumn,
                  B.a.QASplitColumns
                ),
              },
              o.a.createElement(
                k.d,
                {
                  title: Object(G.f)("#QAndA_ModeratorViewHeader"),
                  className: B.a.ModeratorInstructions,
                },
                o.a.createElement(
                  "div",
                  { className: B.a.QuestionList },
                  s.map((e) =>
                    o.a.createElement(Y, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: n,
                      bUserCanVote: !1,
                      rtNow: i,
                    })
                  )
                )
              ),
              o.a.createElement(
                k.d,
                {
                  title: Object(G.f)("#QAndA_HiddenQuestionsHeader"),
                  className: B.a.AnsweredSectionHeader,
                  bStartMinimized: !0,
                },
                o.a.createElement(
                  "div",
                  { className: B.a.QuestionList },
                  a.map((e) =>
                    o.a.createElement(Y, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: n,
                      bUserCanVote: !1,
                      rtNow: i,
                    })
                  )
                )
              )
            )
          : null;
      }
      function Z(e) {
        const { gidSession: t, bHalfOfFullPage: n } = e;
        A();
        const {
            bIsLoaded: a,
            bUserCanAskQuestions: i,
            bUserCanModerate: l,
            fnAskQuestion: c,
            fnVoteOnQuestion: d,
            rgModeratedQuestionGIDs: u,
            rgAnsweredQuestionGIDs: m,
            rgNewQuestionGIDs: _,
          } = C(t),
          { fnReload: b, bIsReloading: v } = S(t),
          Q = Object(r.c)(10),
          p = l && n,
          { fnModerateQuestion: g } = E(t);
        return o.a.createElement(
          "div",
          { className: Object(M.a)(B.a.QAMainCtn, n && B.a.QASplitColumns) },
          o.a.createElement(
            "div",
            { className: Object(M.a)(B.a.QAHeader, p && B.a.ModerationHeader) },
            o.a.createElement(
              N.d,
              {
                onClick: b,
                disabled: !a,
                className: Object(M.a)(
                  B.a.InputButton,
                  B.a.Reload,
                  v && B.a.Reloading
                ),
              },
              o.a.createElement(
                "div",
                { className: B.a.ReloadIcon },
                o.a.createElement(q.X, null)
              )
            ),
            p
              ? o.a.createElement(
                  o.a.Fragment,
                  null,
                  Object(G.f)("#QAndA_ModeratorLabelHeader"),
                  o.a.createElement(
                    j.a,
                    {
                      toolTipContent: Object(G.f)(
                        "#QAndA_ModerateHideAllButton_ttip"
                      ),
                    },
                    o.a.createElement(
                      N.d,
                      {
                        onClick: () =>
                          Object(s.a)(this, void 0, void 0, function* () {
                            for (const e of [_, u, m])
                              for (const t of e) yield g(t, 3);
                          }),
                        className: B.a.InputButton,
                      },
                      Object(G.f)("#QAndA_ModerateHideAllButton")
                    )
                  )
                )
              : i
              ? o.a.createElement($, { fnAskQuestion: c })
              : a && o.a.createElement(te, null)
          ),
          u.length + m.length == 0
            ? o.a.createElement(
                "div",
                { className: B.a.NoQuestions },
                Object(G.f)("#QAndA_NoQuestionsYet")
              )
            : o.a.createElement(
                "div",
                { className: B.a.QuestionsCtn },
                o.a.createElement(
                  "div",
                  { className: B.a.InsetShadowTopCtn },
                  o.a.createElement("div", { className: B.a.InsetShadowTop })
                ),
                o.a.createElement(
                  "div",
                  { className: B.a.QuestionList },
                  a
                    ? u.map((e) =>
                        o.a.createElement(Y, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: p,
                          bUserCanVote: i,
                          fnVoteOnQuestion: d,
                          rtNow: Q,
                        })
                      )
                    : o.a.createElement(T.a, { position: "center" })
                ),
                m.length > 0 &&
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: B.a.AnsweredSectionHeader },
                      Object(G.f)("#QAndA_AnsweredQuestionsHeader")
                    ),
                    o.a.createElement(
                      "div",
                      { className: B.a.QuestionList },
                      m.map((e) =>
                        o.a.createElement(Y, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: p,
                          bUserCanVote: i,
                          fnVoteOnQuestion: d,
                          rtNow: Q,
                        })
                      )
                    )
                  )
              )
        );
      }
      function $(e) {
        const [t, n] = o.a.useState(!1),
          a = Object(p.a)("QuestionBox");
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: B.a.Description },
            Object(G.f)("#QAndA_HeaderDescription")
          ),
          o.a.createElement(ee, {
            strPrompt: Object(G.f)("#QAndA_QuestionPrompt"),
            fnSubmit: (t) =>
              Object(s.a)(this, void 0, void 0, function* () {
                const s = yield e.fnAskQuestion(t);
                return (
                  1 != s ||
                    a.token.reason ||
                    (n(!0),
                    window.setTimeout(() => {
                      a.token.reason || n(!1);
                    }, 1e3)),
                  s
                );
              }),
          }),
          o.a.createElement(
            "div",
            { className: Object(M.a)(B.a.QuestionACK, t && B.a.Visible) },
            Object(G.f)("#QAndA_QuestionWasPosted")
          )
        );
      }
      function ee(e) {
        const { strPrompt: t, fnSubmit: n } = e,
          [a, i] = o.a.useState(""),
          [r, l] = o.a.useState(!1);
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: B.a.InputCtn },
            o.a.createElement(N.m, {
              type: "text",
              placeholder: t,
              maxLength: 512,
              value: a,
              onChange: (e) => i(e.target.value),
            }),
            o.a.createElement(
              "div",
              { className: B.a.ButtonCtn },
              r &&
                o.a.createElement(
                  "div",
                  { className: B.a.SaveSpinner },
                  o.a.createElement(T.a, { size: "small", position: "center" })
                ),
              o.a.createElement(
                N.d,
                {
                  onClick: () =>
                    Object(s.a)(this, void 0, void 0, function* () {
                      l(!0);
                      1 == (yield n(a)) && i(""), l(!1);
                    }),
                  disabled: r || !a,
                  className: B.a.InputButton,
                },
                Object(G.f)("#QAndA_SubmitCommentButton")
              )
            )
          )
        );
      }
      function te(e) {
        return o.a.createElement(
          "div",
          { className: B.a.Description },
          o.a.createElement(
            "div",
            { className: B.a.LogInPrompt },
            Object(G.f)("#QAndA_LogInPrompt")
          ),
          !u.h.logged_in &&
            o.a.createElement(
              N.d,
              {
                onClick: I.a,
                className: Object(M.a)(B.a.SignInButton, B.a.InputButton),
              },
              Object(G.f)("#Login_SignIn")
            )
        );
      }
    },
    KVeB: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "QAndARoutes", function () {
          return l;
        });
      var s = n("JCps"),
        a = n("q1tI"),
        o = n("EC67"),
        i = n("WplJ"),
        r = n("lkRc");
      const l = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      function c(e) {
        return "dev" !== r.c.WEB_UNIVERSE
          ? a.createElement(o.b, { to: "/" })
          : a.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/questions.tsx to see if this page has been added to the list of routes."
            );
      }
      t.default = function (e) {
        return a.createElement(
          o.e,
          null,
          a.createElement(o.c, {
            path: l.Dashboard(":vanity_str"),
            render: (e) =>
              a.createElement(i.a, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return a.createElement(s.a, { vanity_str: t });
                  },
                },
              }),
          }),
          a.createElement(o.c, {
            path: l.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              a.createElement(i.a, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: n } = e.match.params;
                    return a.createElement(s.b, { gidSession: n });
                  },
                },
              }),
          }),
          a.createElement(o.c, { component: c })
        );
      };
    },
    hII0: function (e, t, n) {
      e.exports = {
        QAFullPageView: "questions_QAFullPageView_3tZpF",
        QAName: "questions_QAName_2mOBp",
        QAColumns: "questions_QAColumns_pBgAb",
        QAMainCtn: "questions_QAMainCtn_hHqRc",
        QAModeratorColumn: "questions_QAModeratorColumn_nfftC",
        QASplitColumns: "questions_QASplitColumns_1CRIg",
        ModeratorInstructions: "questions_ModeratorInstructions_RqtnW",
        AnsweredSectionHeader: "questions_AnsweredSectionHeader_3cWpk",
        InputButton: "questions_InputButton_1z1rt",
        Reload: "questions_Reload_3LIo4",
        Reloading: "questions_Reloading_1hooL",
        SignInButton: "questions_SignInButton_GRHnX",
        QAHeader: "questions_QAHeader_3skHm",
        QuestionACK: "questions_QuestionACK_16zhk",
        Visible: "questions_Visible_2jHMe",
        QATitleRow: "questions_QATitleRow_2qdcm",
        QATitle: "questions_QATitle_1c7nC",
        Description: "questions_Description_3eGNN",
        InputCtn: "questions_InputCtn_oF1kT",
        LogInPrompt: "questions_LogInPrompt_3Gbue",
        ButtonCtn: "questions_ButtonCtn_3kFHr",
        SaveSpinner: "questions_SaveSpinner_20svv",
        QuestionsCtn: "questions_QuestionsCtn_1W6uJ",
        InsetShadowTopCtn: "questions_InsetShadowTopCtn_ak9JV",
        InsetShadowTop: "questions_InsetShadowTop_1C2e4",
        QuestionsHeader: "questions_QuestionsHeader_jUQG9",
        QuestionsTitle: "questions_QuestionsTitle_2CYLB",
        QuestionList: "questions_QuestionList_28dwO",
        NoQuestions: "questions_NoQuestions_1R9HB",
        Question: "questions_Question_3BIOo",
        Hidden: "questions_Hidden_3XPCk",
        QuestionCtn: "questions_QuestionCtn_31sLy",
        UserAvatar: "questions_UserAvatar_2ojKe",
        PersonaName: "questions_PersonaName_3CaA5",
        QuestionText: "questions_QuestionText_2NuCE",
        QuestionAndVotes: "questions_QuestionAndVotes_ChywO",
        QuestionTitle: "questions_QuestionTitle_2AXcH",
        QuestionStats: "questions_QuestionStats_1DzgV",
        PostTime: "questions_PostTime_2hfBu",
        Votes: "questions_Votes_2IyuQ",
        Vote_Ready: "questions_Vote_Ready_3_8_a",
        Vote_Positive: "questions_Vote_Positive_eWDCy",
        RateIcon: "questions_RateIcon_2j0Gw",
        Vote_CannotVote: "questions_Vote_CannotVote_2Pq4z",
        DateAndTime: "questions_DateAndTime_4VjnZ",
        Answer: "questions_Answer_wNABP",
        AnswerTitle: "questions_AnswerTitle_1c4mo",
        AnswerCheck: "questions_AnswerCheck_u8uV8",
        AnswerText: "questions_AnswerText_3ar8c",
        ModerationHeader: "questions_ModerationHeader_37OKc",
        ModeratorSection: "questions_ModeratorSection_3tP54",
        ToolRow: "questions_ToolRow_2c2vo",
        ToolLabel: "questions_ToolLabel_3prTN",
        QADashboardCtn: "questions_QADashboardCtn_32zJG",
        DashboardHeader: "questions_DashboardHeader_1R1Em",
        DashboardHeaderTitle: "questions_DashboardHeaderTitle_1cRHa",
        DashboardHeaderButtonCtn: "questions_DashboardHeaderButtonCtn_uoLDQ",
        DashboardRow: "questions_DashboardRow_gpraR",
        GIDSession: "questions_GIDSession_3d_6f",
        QuestionCount: "questions_QuestionCount_3kZ9S",
        QAndADeleteColumn: "questions_QAndADeleteColumn_363My",
        QAndAName: "questions_QAndAName_2-5V8",
        Prompt: "questions_Prompt_2ZFvN",
        Editing: "questions_Editing_1wUKv",
        NameInput: "questions_NameInput_3avr0",
        DeleteButton: "questions_DeleteButton_o8aBa",
        DashboardColumnHeaders: "questions_DashboardColumnHeaders_2WOM0",
        CreateQAndADialog: "questions_CreateQAndADialog_1wBzu",
        DeleteQAndADialog: "questions_DeleteQAndADialog_3valP",
        DeleteInfo: "questions_DeleteInfo_3EhGH",
      };
    },
  },
]);
