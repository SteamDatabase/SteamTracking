/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [132],
  {
    "0OaU": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var s = n("q1tI"),
        o = n.n(s),
        a = n("6Y59"),
        i = n("2i24"),
        r = n.n(i);
      class l extends o.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(r.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(r.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(r.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(r.a.throbber_xxlarge)
            : e.push(r.a.throbber_large);
        }
        render() {
          let e = [r.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(r.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(r.a.Static);
          let t = o.a.createElement(
            "div",
            { className: e.join(" ") },
            o.a.createElement(
              "div",
              { className: r.a.Throbber },
              o.a.createElement(a.nb, { className: r.a.base }),
              o.a.createElement(a.nb, { className: r.a.blur })
            )
          );
          return o.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? r.a.throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              o.a.createElement(
                "div",
                { className: r.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
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
          return p;
        }),
        n.d(t, "b", function () {
          return b;
        });
      var s = n("Mgs7"),
        o = n("TLQK"),
        a = n("6Y59"),
        i = n("q1tI"),
        r = n("exH9"),
        l = n("fpVW"),
        u = n("IjL/"),
        c = n("TyAF"),
        d = n("3USw");
      const m = Object(c.a)((e) =>
        i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            {
              className: Object(r.a)(
                e.className ? e.className : d.SectionTitleHeader,
                d.required_title
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
            i.createElement(p, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            })
          ),
          !e.getMinimized() && i.createElement(u.a, null, e.children)
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
      function p(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          r = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return i.createElement(
          s.d,
          { "data-tooltip-text": Object(o.f)(r), onClick: n },
          e.bIsMinimized
            ? i.createElement(a.M, null)
            : i.createElement(a.P, null)
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
          i.createElement(a.E, null)
        );
      }
    },
    JCps: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return B;
      }),
        n.d(t, "b", function () {
          return y;
        });
      var s = n("mrSG"),
        o = n("q1tI"),
        a = n.n(o),
        i = (n("kyHq"), n("kLLr")),
        r = n("5izx"),
        l = n("XxJJ"),
        u = n("qiKp"),
        c = n("opsS"),
        d = n("lkRc");
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
          (this.m_callbackList = new u.a()),
            (this.m_timer = null),
            (this.m_bAreEventListenersRegistered = !1),
            "dev" == d.c.WEB_UNIVERSE && (window.g_FidgetStore = this);
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
      function p() {
        a.a.useEffect(() => {
          const e = _.Get().BRegisterEventListeners();
          return () => {
            e && _.Get().BUnregisterEventListeners();
          };
        }, []);
      }
      Object(s.b)([l.a], _.prototype, "ResetFidgetTimer", null);
      var b = n("Qcoi"),
        A = n("vDqi"),
        v = n.n(A),
        Q = (n("mgoM"), n("X2UP")),
        g = (n("AiWL"), n("OS6B"));
      class h {
        constructor() {
          (this.m_mapQAndASessions = new Map()),
            (this.m_mapQAndAChangeCallbackList = new Map()),
            (this.m_mapQuestions = new Map()),
            (this.m_mapQuestionCallbackList = new Map()),
            (this.m_rgPendingQuestionGIDs = []),
            "dev" == d.c.WEB_UNIVERSE && (window.g_QAndAStore = this);
        }
        static Get() {
          return h.s_Singleton || (h.s_Singleton = new h()), h.s_Singleton;
        }
        GetQAndACallbackList(e) {
          return (
            this.m_mapQAndAChangeCallbackList.has(e) ||
              this.m_mapQAndAChangeCallbackList.set(e, new u.a()),
            this.m_mapQAndAChangeCallbackList.get(e)
          );
        }
        GetQuestionCallbackList(e) {
          return (
            this.m_mapQuestionCallbackList.has(e) ||
              this.m_mapQuestionCallbackList.set(e, new u.a()),
            this.m_mapQuestionCallbackList.get(e)
          );
        }
        GetSession(e) {
          return this.m_mapQAndASessions.get(e);
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
        LoadSession(e, t, n) {
          var o, a, i, r, l, u, c, m, _, p;
          return Object(s.a)(this, void 0, void 0, function* () {
            const s =
                d.h.logged_in &&
                (!this.m_mapQAndASessions.has(e) ||
                  this.m_mapQAndASessions.get(e).bUserCanModerate ||
                  this.m_rgPendingQuestionGIDs.length > 0 ||
                  t)
                  ? "/ajaxgetqandasessionforuser/"
                  : "/ajaxgetqandasession/",
              b = d.c.COMMUNITY_BASE_URL + "questions/" + d.b.VANITY_ID + s + e,
              A = {};
            let Q = null;
            try {
              const t = yield v.a.get(b, {
                params: A,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (o = t.data) || void 0 === o
                    ? void 0
                    : o.success) &&
                t.data.qanda &&
                t.data.questions
              ) {
                this.PreloadPosterProfiles(t.data.questions, n);
                for (const e of t.data.questions) {
                  const t = e.gidQuestion,
                    n =
                      null !==
                        (i =
                          null === (a = this.m_mapQuestions.get(t)) ||
                          void 0 === a
                            ? void 0
                            : a.bUserUpVoted) && void 0 !== i
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
                  o =
                    null !==
                      (c =
                        null === (u = this.m_mapQAndASessions.get(e)) ||
                        void 0 === u
                          ? void 0
                          : u.bUserCanAskQuestions) && void 0 !== c
                      ? c
                      : t.data.qanda.bUserCanAskQuestions,
                  d = Object.assign(Object.assign({}, t.data.qanda), {
                    bUserCanModerate: s,
                    bUserCanAskQuestions: o,
                  });
                return (
                  this.m_mapQAndASessions.set(e, d),
                  this.GetQAndACallbackList(e).Dispatch(d),
                  this.UpdatePendingQuestionList(t.data.qanda.rgQuestionGIDs),
                  1
                );
              }
              Q = { response: t };
            } catch (e) {
              Q = e;
            }
            const h = Object(g.a)(Q);
            return (
              console.error("Could not load Q&A", e, h.strErrorMsg, h),
              null !==
                (p =
                  null ===
                    (_ =
                      null === (m = null == Q ? void 0 : Q.response) ||
                      void 0 === m
                        ? void 0
                        : m.data) || void 0 === _
                    ? void 0
                    : _.success) && void 0 !== p
                ? p
                : 2
            );
          });
        }
        UpdatePendingQuestionList(e) {
          var t;
          const n = new Set();
          for (const t of e) {
            const e = this.m_mapQuestions.get(t);
            e.posterAccountID == d.h.accountid &&
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
          var o, a, i, r, l;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (
              !d.h.logged_in ||
              !d.c.SESSIONID ||
              !(null === (o = this.m_mapQAndASessions.get(e)) || void 0 === o
                ? void 0
                : o.bUserCanAskQuestions)
            )
              return 15;
            const s =
                d.c.COMMUNITY_BASE_URL +
                "questions/" +
                d.b.VANITY_ID +
                "/ajaxaskquestion/" +
                e,
              u = new FormData();
            u.append("sessionid", d.c.SESSIONID), u.append("question", t);
            let c = null;
            try {
              const t = yield v.a.post(s, u, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a ? void 0 : a.success)
              ) {
                this.m_rgPendingQuestionGIDs.push(t.data.gidQuestion);
                const s = !0;
                return this.LoadSession(e, s, n), 1;
              }
              c = { response: t };
            } catch (e) {
              c = e;
            }
            const m = Object(g.a)(c);
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
                      null === (i = null == c ? void 0 : c.response) ||
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
        ModerateQuestion(e, t, n, o) {
          var a, i, r, l, u;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (
              !d.h.logged_in ||
              !d.c.SESSIONID ||
              !(null === (a = this.m_mapQAndASessions.get(e)) || void 0 === a
                ? void 0
                : a.bUserCanModerate)
            )
              return 15;
            if (1 != n && 3 != n) return 8;
            if (this.m_mapQuestions.get(t).eState == n) return 1;
            const s =
                d.c.COMMUNITY_BASE_URL +
                "questions/" +
                d.b.VANITY_ID +
                "/ajaxmoderatequestion/" +
                e,
              c = new FormData();
            c.append("sessionid", d.c.SESSIONID),
              c.append("gidquestion", t),
              c.append("action", 1 == n ? "show" : "hide");
            let m = null;
            try {
              const t = yield v.a.post(s, c, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (i = t.data) || void 0 === i ? void 0 : i.success)
              ) {
                const t = !0;
                return this.LoadSession(e, t, o), 1;
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
                (u =
                  null ===
                    (l =
                      null === (r = null == m ? void 0 : m.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== u
                ? u
                : 2
            );
          });
        }
        AnswerQuestion(e, t, n, o) {
          var a, i, r, l, u;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (
              !d.h.logged_in ||
              !d.c.SESSIONID ||
              !(null === (a = this.m_mapQAndASessions.get(e)) || void 0 === a
                ? void 0
                : a.bUserCanAskQuestions)
            )
              return 15;
            const s =
                d.c.COMMUNITY_BASE_URL +
                "questions/" +
                d.b.VANITY_ID +
                "/ajaxanswerquestion/" +
                e,
              c = new FormData();
            c.append("sessionid", d.c.SESSIONID),
              c.append("gidquestion", t),
              c.append("answer", n);
            let m = null;
            try {
              const t = yield v.a.post(s, c, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (i = t.data) || void 0 === i ? void 0 : i.success)
              ) {
                const t = !0;
                return this.LoadSession(e, t, o), 1;
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
                (u =
                  null ===
                    (l =
                      null === (r = null == m ? void 0 : m.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== u
                ? u
                : 2
            );
          });
        }
        VoteOnQuestion(e, t, n, o) {
          var a, i, r, l, u;
          return Object(s.a)(this, void 0, void 0, function* () {
            if (
              !d.h.logged_in ||
              !d.c.SESSIONID ||
              !(null === (a = this.m_mapQAndASessions.get(e)) || void 0 === a
                ? void 0
                : a.bUserCanAskQuestions)
            )
              return 15;
            if (n === this.m_mapQuestions.get(t).bUserUpVoted) return 1;
            let s = this.m_mapQuestions.get(t);
            const c = s.nVoteCount,
              m = c + (n ? 1 : -1);
            (s = Object.assign(Object.assign({}, s), {
              nVoteCount: m,
              bUserUpVoted: n,
            })),
              this.m_mapQuestions.set(t, s),
              this.GetQuestionCallbackList(t).Dispatch(s);
            const _ =
                d.c.COMMUNITY_BASE_URL +
                "questions/" +
                d.b.VANITY_ID +
                "/ajaxvoteforquestion/" +
                e,
              p = new FormData();
            p.append("sessionid", d.c.SESSIONID),
              p.append("gidquestion", t),
              p.append("up", n ? "1" : "0");
            let b = null;
            try {
              const e = yield v.a.post(_, p, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
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
              nVoteCount: c,
              bUserUpVoted: !n,
            })),
              this.m_mapQuestions.set(t, s),
              this.GetQuestionCallbackList(t).Dispatch(s);
            const A = Object(g.a)(b);
            return (
              console.error("Could not upload vote", e, t, n, A.strErrorMsg, A),
              null !==
                (u =
                  null ===
                    (l =
                      null === (r = null == b ? void 0 : b.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === l
                    ? void 0
                    : l.success) && void 0 !== u
                ? u
                : 2
            );
          });
        }
      }
      function f(e) {
        const t = Object(Q.a)("useQAndASession"),
          n = a.a.useCallback(
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
          o = a.a.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = h.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanAskQuestions) &&
                h.Get().VoteOnQuestion(e, n, s, t)
              );
            },
            [e, t]
          ),
          i = a.a.useCallback(
            (e) => {
              var t;
              const s = !!e,
                a = null == e ? void 0 : e.bUserCanModerate,
                i = null == e ? void 0 : e.bUserCanAskQuestions,
                r = [],
                l = [],
                u = [],
                c = [];
              for (const n of null !==
                (t = null == e ? void 0 : e.rgQuestionGIDs) && void 0 !== t
                ? t
                : []) {
                const e = h.Get().GetQuestion(n);
                switch (null == e ? void 0 : e.eState) {
                  case 1:
                    r.push(n);
                    break;
                  case 2:
                    l.push(n);
                    break;
                  case 0:
                    u.push(n);
                    break;
                  case 3:
                    c.push(n);
                }
              }
              return (
                r.sort(
                  (e, t) =>
                    h.Get().GetQuestion(t).nVoteCount -
                    h.Get().GetQuestion(e).nVoteCount
                ),
                l.sort(
                  (e, t) =>
                    h.Get().GetQuestion(t).rtAnswerTime -
                    h.Get().GetQuestion(e).rtAnswerTime
                ),
                u.sort(
                  (e, t) =>
                    h.Get().GetQuestion(t).rtPostTime -
                    h.Get().GetQuestion(e).rtPostTime
                ),
                c.sort(
                  (e, t) =>
                    h.Get().GetQuestion(t).rtPostTime -
                    h.Get().GetQuestion(e).rtPostTime
                ),
                {
                  bIsLoaded: s,
                  bUserCanModerate: a,
                  bUserCanAskQuestions: i,
                  fnAskQuestion: n,
                  fnVoteOnQuestion: o,
                  rgModeratedQuestionGIDs: r,
                  rgAnsweredQuestionGIDs: l,
                  rgNewQuestionGIDs: u,
                  rgHiddenQuestionGIDs: c,
                }
              );
            },
            [n, o]
          ),
          [r, l] = a.a.useState(() => i(h.Get().GetSession(e))),
          u = a.a.useCallback((e) => l(i(e)), [i]);
        return (
          Object(c.d)(h.Get().GetQAndACallbackList(e), u),
          a.a.useEffect(() => {
            r.bIsLoaded || h.Get().LoadSession(e);
          }, [r.bIsLoaded, e]),
          r
        );
      }
      let E = null;
      function C(e) {
        const t = Object(Q.a)("useReloadFunction"),
          [n, s] = a.a.useState(!1),
          o = a.a.useCallback(() => {
            s(!0);
            const n = h.Get().LoadSession(e, !1, t);
            return n.then(() => s(!1)), n;
          }, [e, t]),
          i = (function (e) {
            const t = a.a.useRef(null),
              n = a.a.useCallback(() => {
                t.current && (t.current(), (t.current = null));
              }, []);
            return (
              Object(c.d)(_.Get().GetCallbackList(), n),
              a.a.useEffect(() => () => {
                t.current = null;
              }),
              a.a.useCallback(
                (...n) => {
                  _.Get().BIsUserFidgeting()
                    ? (t.current = () => e(...n))
                    : ((t.current = null), e(...n));
                },
                [e]
              )
            );
          })(o);
        return (
          a.a.useEffect(() => {
            if (E) return () => {};
            return (
              (E = window.setInterval(i, 1e4)), () => window.clearInterval(E)
            );
          }, [i]),
          a.a.useMemo(() => ({ fnReload: o, bIsReloading: n }), [o, n])
        );
      }
      function S(e) {
        const t = Object(Q.a)("useQuestionModeratorActions"),
          n = a.a.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = h.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanModerate) && h.Get().AnswerQuestion(e, n, s, t)
              );
            },
            [e, t]
          ),
          s = a.a.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = h.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanModerate) && h.Get().ModerateQuestion(e, n, s, t)
              );
            },
            [e, t]
          );
        return a.a.useMemo(
          () => ({ fnAnswerQuestion: n, fnModerateQuestion: s }),
          [n, s]
        );
      }
      var w = n("Mgs7"),
        I = n("BFsE"),
        N = n("YLyR"),
        T = n("6Y59"),
        O = n("0OaU"),
        k = n("5E+2"),
        q = n("DisI"),
        M = n("exH9"),
        j = n("TLQK"),
        L = n("CdLH"),
        U = n("hII0"),
        G = n.n(U);
      function V(e) {
        const {
            gidSession: t,
            gidQuestion: n,
            bUserCanModerate: s,
            bUserCanVote: o,
            fnVoteOnQuestion: i,
            rtNow: r,
          } = e,
          [l, u] = (function (e) {
            const [t, n] = a.a.useState(h.Get().GetQuestion(e));
            Object(c.d)(h.Get().GetQuestionCallbackList(e), n);
            const [s, o] = a.a.useState(!!t);
            return [t, !!t || s];
          })(n);
        if (!l) return null;
        const d = r - l.rtPostTime,
          m = d < L.f.PerDay ? Object(j.p)(d) : Object(j.o)(l.rtPostTime),
          _ = o ? () => i(n, !l.bUserUpVoted) : null,
          p = o
            ? l.bUserUpVoted
              ? G.a.Vote_Positive
              : G.a.Vote_Ready
            : G.a.Vote_CannotVote,
          b = Object(M.a)(
            G.a.Question,
            3 == l.eState && G.a.Hidden,
            1 == l.eState && G.a.Moderated,
            0 == l.eState && G.a.Unmoderated,
            2 == l.eState && G.a.Answered
          );
        return a.a.createElement(
          "div",
          { className: b },
          a.a.createElement(
            "div",
            { className: G.a.QuestionCtn },
            a.a.createElement(P, { accountID: l.posterAccountID }),
            a.a.createElement(
              "div",
              { className: G.a.QuestionText },
              a.a.createElement(
                "div",
                { className: G.a.QuestionAndVotes },
                a.a.createElement(
                  "div",
                  { className: G.a.QuestionTitle },
                  l.strQuestionText
                ),
                a.a.createElement(
                  k.a,
                  {
                    toolTipContent:
                      o &&
                      (l.bUserUpVoted
                        ? Object(j.f)("#QAndA_VoteRemoveTooltip")
                        : Object(j.f)("#QAndA_VoteTooltip")),
                  },
                  a.a.createElement(
                    "div",
                    { className: Object(M.a)(p, G.a.Votes), onClick: _ },
                    a.a.createElement(T.ob, { className: G.a.RateIcon }),
                    a.a.createElement(
                      "div",
                      { className: G.a.VoteCount },
                      Number(l.nVoteCount).toLocaleString()
                    )
                  )
                )
              ),
              a.a.createElement(
                "div",
                { className: G.a.QuestionStats },
                a.a.createElement(
                  "div",
                  { className: G.a.PostTime },
                  a.a.createElement(
                    N.g,
                    {
                      rtFullDate: l.rtPostTime,
                      className: G.a.PostTime,
                      stylesmodule: G.a,
                    },
                    m
                  )
                )
              )
            )
          ),
          l.rtAnswerTime && a.a.createElement(D, { question: l, rtNow: r }),
          s &&
            a.a.createElement(R, {
              gidSession: t,
              gidQuestion: n,
              eState: null == l ? void 0 : l.eState,
            })
        );
      }
      function D(e) {
        const { question: t, rtNow: n } = e,
          s = t.rtAnswerTime && n - t.rtAnswerTime,
          o =
            t.rtAnswerTime &&
            (s < L.f.PerDay ? Object(j.p)(s) : Object(j.o)(t.rtAnswerTime));
        return t.strAnswerText
          ? a.a.createElement(
              "div",
              { className: G.a.Answer },
              a.a.createElement(
                "div",
                { className: G.a.AnswerTitle },
                a.a.createElement(
                  "div",
                  { className: G.a.AnswerCheck },
                  a.a.createElement(T.q, { color: "#67c1f5" })
                ),
                Object(j.f)("#QAndA_ModeratorAnswerTitle")
              ),
              a.a.createElement(
                "div",
                { className: G.a.AnswerText },
                " ",
                t.strAnswerText,
                " "
              ),
              a.a.createElement(
                "div",
                { className: G.a.QuestionStats },
                a.a.createElement(
                  N.g,
                  {
                    rtFullDate: t.rtAnswerTime,
                    className: G.a.PostTime,
                    stylesmodule: G.a,
                  },
                  o
                )
              )
            )
          : a.a.createElement(
              "div",
              { className: G.a.AnswerTitle },
              a.a.createElement(
                "div",
                { className: G.a.AnswerCheck },
                a.a.createElement(T.q, { color: "#67c1f5" })
              ),
              Object(j.f)("#QAndA_AlreadyAnsweredTitle")
            );
      }
      function P(e) {
        var t;
        const n = i.a.InitFromAccountID(e.accountID),
          s = n.ConvertTo64BitString(),
          [o, r] = Object(b.b)(n);
        return o
          ? null
          : a.a.createElement(
              "a",
              {
                href: d.c.COMMUNITY_BASE_URL + "profiles/" + s,
                className: G.a.PersonaName,
                "data-miniprofile": "s" + s,
              },
              null !== (t = null == r ? void 0 : r.persona_name) && void 0 !== t
                ? t
                : s
            );
      }
      function R(e) {
        const { gidSession: t, gidQuestion: n, eState: s } = e,
          { fnAnswerQuestion: o, fnModerateQuestion: i } = S(t),
          r = 0 == s || 3 == s,
          l = 3 != s,
          u = 1 == s;
        return a.a.createElement(
          "div",
          { className: G.a.ModeratorSection },
          Object(j.f)("#QAndA_ModeratorLabel"),
          a.a.createElement(
            "div",
            { className: G.a.ToolRow },
            a.a.createElement(F, {
              strPrompt: Object(j.f)("#QAndA_AnswerPrompt"),
              fnSubmit: (e) => o(n, e),
            })
          ),
          a.a.createElement(
            "div",
            { className: G.a.ToolRow },
            Object(j.f)("#QAndA_ModeratorOtherOptionsLabel"),
            a.a.createElement(
              k.a,
              {
                toolTipContent: Object(j.f)(
                  "#QAndA_ModerateApproveButton_ttip"
                ),
              },
              a.a.createElement(
                w.d,
                {
                  onClick: () => i(n, 1),
                  className: G.a.InputButton,
                  disabled: !r,
                },
                Object(j.f)("#QAndA_ModerateApproveButton")
              )
            ),
            a.a.createElement(
              k.a,
              { toolTipContent: Object(j.f)("#QAndA_ModerateHideButton_ttip") },
              a.a.createElement(
                w.d,
                {
                  onClick: () => i(n, 3),
                  className: G.a.InputButton,
                  disabled: !l,
                },
                Object(j.f)("#QAndA_ModerateHideButton")
              )
            ),
            a.a.createElement(
              k.a,
              { toolTipContent: Object(j.f)("#QAndA_QuickAnswerButton_ttip") },
              a.a.createElement(
                w.d,
                {
                  onClick: () => o(n, ""),
                  className: G.a.InputButton,
                  disabled: !u,
                },
                Object(j.f)("#QAndA_QuickAnswerButton")
              )
            )
          )
        );
      }
      function B(e) {
        const { gidSession: t } = e;
        p();
        const { bUserCanModerate: n } = f(t);
        return a.a.createElement(
          "div",
          { className: G.a.QAFullPageView },
          a.a.createElement(y, { gidSession: t, bHalfOfFullPage: n }),
          n && a.a.createElement(H, { gidSession: t })
        );
      }
      function H(e) {
        const { gidSession: t } = e,
          {
            bUserCanModerate: n,
            rgNewQuestionGIDs: s,
            rgHiddenQuestionGIDs: o,
          } = f(t),
          i = Object(r.c)(10);
        return n
          ? a.a.createElement(
              "div",
              {
                className: Object(M.a)(
                  G.a.QAModeratorColumn,
                  G.a.QASplitColumns
                ),
              },
              a.a.createElement(
                q.d,
                {
                  title: Object(j.f)("#QAndA_ModeratorViewHeader"),
                  className: G.a.ModeratorInstructions,
                },
                a.a.createElement(
                  "div",
                  { className: G.a.QuestionList },
                  s.map((e) =>
                    a.a.createElement(V, {
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
              a.a.createElement(
                q.d,
                {
                  title: Object(j.f)("#QAndA_HiddenQuestionsHeader"),
                  className: G.a.AnsweredSectionHeader,
                  bStartMinimized: !0,
                },
                a.a.createElement(
                  "div",
                  { className: G.a.QuestionList },
                  o.map((e) =>
                    a.a.createElement(V, {
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
      function y(e) {
        const { gidSession: t, bHalfOfFullPage: n } = e;
        p();
        const {
            bIsLoaded: o,
            bUserCanAskQuestions: i,
            bUserCanModerate: l,
            fnAskQuestion: u,
            fnVoteOnQuestion: c,
            rgModeratedQuestionGIDs: d,
            rgAnsweredQuestionGIDs: m,
            rgNewQuestionGIDs: _,
          } = f(t),
          { fnReload: b, bIsReloading: A } = C(t),
          v = Object(r.c)(10),
          Q = l && n,
          { fnModerateQuestion: g } = S(t);
        return a.a.createElement(
          "div",
          { className: Object(M.a)(G.a.QAMainCtn, n && G.a.QASplitColumns) },
          a.a.createElement(
            "div",
            { className: Object(M.a)(G.a.QAHeader, Q && G.a.ModerationHeader) },
            a.a.createElement(
              w.d,
              {
                onClick: b,
                disabled: !o,
                className: Object(M.a)(
                  G.a.InputButton,
                  G.a.Reload,
                  A && G.a.Reloading
                ),
              },
              a.a.createElement(
                "div",
                { className: G.a.ReloadIcon },
                a.a.createElement(T.X, null)
              )
            ),
            Q
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  Object(j.f)("#QAndA_ModeratorLabelHeader"),
                  a.a.createElement(
                    k.a,
                    {
                      toolTipContent: Object(j.f)(
                        "#QAndA_ModerateHideAllButton_ttip"
                      ),
                    },
                    a.a.createElement(
                      w.d,
                      {
                        onClick: () =>
                          Object(s.a)(this, void 0, void 0, function* () {
                            for (const e of [_, d, m])
                              for (const t of e) yield g(t, 3);
                          }),
                        className: G.a.InputButton,
                      },
                      Object(j.f)("#QAndA_ModerateHideAllButton")
                    )
                  )
                )
              : i
              ? a.a.createElement(x, { fnAskQuestion: u })
              : o && a.a.createElement(z, null)
          ),
          d.length + m.length == 0
            ? a.a.createElement(
                "div",
                { className: G.a.NoQuestions },
                Object(j.f)("#QAndA_NoQuestionsYet")
              )
            : a.a.createElement(
                "div",
                { className: G.a.QuestionsCtn },
                a.a.createElement(
                  "div",
                  { className: G.a.InsetShadowTopCtn },
                  a.a.createElement("div", { className: G.a.InsetShadowTop })
                ),
                a.a.createElement(
                  "div",
                  { className: G.a.QuestionList },
                  o
                    ? d.map((e) =>
                        a.a.createElement(V, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: Q,
                          bUserCanVote: i,
                          fnVoteOnQuestion: c,
                          rtNow: v,
                        })
                      )
                    : a.a.createElement(O.a, { position: "center" })
                ),
                m.length > 0 &&
                  a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      "div",
                      { className: G.a.AnsweredSectionHeader },
                      Object(j.f)("#QAndA_AnsweredQuestionsHeader")
                    ),
                    a.a.createElement(
                      "div",
                      { className: G.a.QuestionList },
                      m.map((e) =>
                        a.a.createElement(V, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: Q,
                          bUserCanVote: i,
                          fnVoteOnQuestion: c,
                          rtNow: v,
                        })
                      )
                    )
                  )
              )
        );
      }
      function x(e) {
        const [t, n] = a.a.useState(!1),
          o = Object(Q.a)("QuestionBox");
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            "div",
            { className: G.a.Description },
            Object(j.f)("#QAndA_HeaderDescription")
          ),
          a.a.createElement(F, {
            strPrompt: Object(j.f)("#QAndA_QuestionPrompt"),
            fnSubmit: (t) =>
              Object(s.a)(this, void 0, void 0, function* () {
                const s = yield e.fnAskQuestion(t);
                return (
                  1 != s ||
                    o.token.reason ||
                    (n(!0),
                    window.setTimeout(() => {
                      o.token.reason || n(!1);
                    }, 1e3)),
                  s
                );
              }),
          }),
          a.a.createElement(
            "div",
            { className: Object(M.a)(G.a.QuestionACK, t && G.a.Visible) },
            Object(j.f)("#QAndA_QuestionWasPosted")
          )
        );
      }
      function F(e) {
        const { strPrompt: t, fnSubmit: n } = e,
          [o, i] = a.a.useState(""),
          [r, l] = a.a.useState(!1);
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            "div",
            { className: G.a.InputCtn },
            a.a.createElement(w.m, {
              type: "text",
              placeholder: t,
              maxLength: 512,
              value: o,
              onChange: (e) => i(e.target.value),
            }),
            a.a.createElement(
              "div",
              { className: G.a.ButtonCtn },
              r &&
                a.a.createElement(
                  "div",
                  { className: G.a.SaveSpinner },
                  a.a.createElement(O.a, { size: "small", position: "center" })
                ),
              a.a.createElement(
                w.d,
                {
                  onClick: () =>
                    Object(s.a)(this, void 0, void 0, function* () {
                      l(!0);
                      1 == (yield n(o)) && i(""), l(!1);
                    }),
                  disabled: r || !o,
                  className: G.a.InputButton,
                },
                Object(j.f)("#QAndA_SubmitCommentButton")
              )
            )
          )
        );
      }
      function z(e) {
        return a.a.createElement(
          "div",
          { className: G.a.Description },
          a.a.createElement(
            "div",
            { className: G.a.LogInPrompt },
            Object(j.f)("#QAndA_LogInPrompt")
          ),
          !d.h.logged_in &&
            a.a.createElement(
              w.d,
              {
                onClick: I.a,
                className: Object(M.a)(G.a.SignInButton, G.a.InputButton),
              },
              Object(j.f)("#Login_SignIn")
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
        o = n("q1tI"),
        a = n("EC67"),
        i = n("WplJ"),
        r = n("lkRc");
      const l = { FullPageView: (e, t) => `/questions/${e}/view/${t}` };
      function u(e) {
        return "dev" !== r.c.WEB_UNIVERSE
          ? o.createElement(a.b, { to: "/" })
          : o.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/questions.tsx to see if this page has been added to the list of routes."
            );
      }
      t.default = function (e) {
        return o.createElement(
          a.e,
          null,
          o.createElement(a.c, {
            path: l.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              o.createElement(i.a, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: n } = e.match.params;
                    return o.createElement(s.a, { gidSession: n });
                  },
                },
              }),
          }),
          o.createElement(a.c, { component: u })
        );
      };
    },
    hII0: function (e, t, n) {
      e.exports = {
        QAFullPageView: "questions_QAFullPageView_3tZpF",
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
      };
    },
  },
]);
