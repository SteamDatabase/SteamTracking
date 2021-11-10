/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [132],
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
        return v;
      }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return _;
        }),
        n.d(t, "b", function () {
          return b;
        });
      var s = n("mrSG"),
        a = n("Mgs7"),
        o = n("TLQK"),
        i = n("6Y59"),
        r = n("q1tI"),
        u = n("exH9"),
        l = n("fpVW"),
        c = n("IjL/"),
        d = n("TyAF"),
        m = n("3USw"),
        v = Object(d.a)(function (e) {
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "div",
              {
                className: Object(u.a)(
                  e.className ? e.className : m.SectionTitleHeader,
                  m.required_title
                ),
              },
              r.createElement(
                "div",
                { className: l.EventEditorTextTitle },
                e.title,
                Boolean(e.tooltip) && r.createElement(b, { tooltip: e.tooltip })
              ),
              r.createElement(_, {
                bIsMinimized: e.getMinimized(),
                fnToggleMinimize: e.toggleMinimized,
              })
            ),
            !e.getMinimized() && r.createElement(c.a, null, e.children)
          );
        });
      function p(e) {
        var t = r.useState(Boolean(e.bStartMinimized)),
          n = t[0],
          a = t[1];
        return r.createElement(
          v,
          Object(s.a)({}, e, {
            getMinimized: function () {
              return n;
            },
            toggleMinimized: function () {
              return a(!n);
            },
          }),
          e.children
        );
      }
      function _(e) {
        var t = e.bIsMinimized,
          n = e.fnToggleMinimize,
          s = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return r.createElement(
          a.d,
          { "data-tooltip-text": Object(o.f)(s), onClick: n },
          e.bIsMinimized
            ? r.createElement(i.H, null)
            : r.createElement(i.K, null)
        );
      }
      function b(e) {
        return r.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: Object(u.a)(l.HelperTooltip, "HelperTooltip"),
          },
          " ",
          r.createElement(i.A, null)
        );
      }
    },
    JCps: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return B;
      }),
        n.d(t, "b", function () {
          return H;
        });
      var s = n("mrSG"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("kLLr"),
        r = n("5izx"),
        u = n("XxJJ"),
        l = n("qiKp"),
        c = n("opsS"),
        d = n("lkRc"),
        m = [
          "mousemove",
          "keypress",
          "scroll",
          "wheel",
          "focusin",
          "touchstart",
          "touchmove",
        ],
        v = (function () {
          function e() {
            (this.m_callbackList = new l.a()),
              (this.m_timer = null),
              (this.m_bAreEventListenersRegistered = !1),
              "dev" == d.c.WEB_UNIVERSE && (window.g_FidgetStore = this);
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ResetFidgetTimer = function (e) {
              var t = this;
              this.m_timer && window.clearTimeout(this.m_timer);
              this.m_timer = window.setTimeout(function () {
                (t.m_timer = null), t.m_callbackList.Dispatch();
              }, 2e3);
            }),
            (e.prototype.BIsUserFidgeting = function () {
              return !!this.m_timer;
            }),
            (e.prototype.GetCallbackList = function () {
              return this.m_callbackList;
            }),
            (e.prototype.BRegisterEventListeners = function () {
              if (this.m_bAreEventListenersRegistered) return !1;
              for (var e = window, t = 0, n = m; t < n.length; t++) {
                var s = n[t];
                e.addEventListener(s, this.ResetFidgetTimer);
              }
              return (this.m_bAreEventListenersRegistered = !0), !0;
            }),
            (e.prototype.BUnregisterEventListeners = function () {
              if (!this.m_bAreEventListenersRegistered) return !1;
              for (var e = window, t = 0, n = m; t < n.length; t++) {
                var s = n[t];
                e.removeEventListener(s, this.ResetFidgetTimer);
              }
              return (this.m_bAreEventListenersRegistered = !1), !1;
            }),
            Object(s.c)([u.a], e.prototype, "ResetFidgetTimer", null),
            e
          );
        })();
      function p() {
        o.a.useEffect(function () {
          var e = v.Get().BRegisterEventListeners();
          return function () {
            e && v.Get().BUnregisterEventListeners();
          };
        }, []);
      }
      var _ = n("Qcoi"),
        b = n("vDqi"),
        f = n.n(b),
        A = n("X2UP"),
        Q = n("OS6B"),
        g = (function () {
          function e() {
            (this.m_mapQAndASessions = new Map()),
              (this.m_mapQAndAChangeCallbackList = new Map()),
              (this.m_mapQuestions = new Map()),
              (this.m_mapQuestionCallbackList = new Map()),
              (this.m_rgPendingQuestionGIDs = []),
              "dev" == d.c.WEB_UNIVERSE && (window.g_QAndAStore = this);
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.GetQAndACallbackList = function (e) {
              return (
                this.m_mapQAndAChangeCallbackList.has(e) ||
                  this.m_mapQAndAChangeCallbackList.set(e, new l.a()),
                this.m_mapQAndAChangeCallbackList.get(e)
              );
            }),
            (e.prototype.GetQuestionCallbackList = function (e) {
              return (
                this.m_mapQuestionCallbackList.has(e) ||
                  this.m_mapQuestionCallbackList.set(e, new l.a()),
                this.m_mapQuestionCallbackList.get(e)
              );
            }),
            (e.prototype.GetSession = function (e) {
              return this.m_mapQAndASessions.get(e);
            }),
            (e.prototype.GetQuestion = function (e) {
              return this.m_mapQuestions.get(e);
            }),
            (e.prototype.PreloadPosterProfiles = function (e, t) {
              for (var n = new Set(), s = 0, a = e; s < a.length; s++) {
                var o = a[s];
                n.add(
                  i.a
                    .InitFromAccountID(o.posterAccountID)
                    .ConvertTo64BitString()
                );
              }
              for (var r = Array.from(n); r.length > 0; ) {
                var u = r.splice(0, 500);
                _.a.LoadProfiles(u, t);
              }
            }),
            (e.prototype.LoadSession = function (e, t, n) {
              var a, o, i, r, u, l, c, m, v, p;
              return Object(s.b)(this, void 0, void 0, function () {
                var _, b, A, g, h, C, S, E, w, I, O, N, T, j, k, q, M;
                return Object(s.e)(this, function (U) {
                  switch (U.label) {
                    case 0:
                      (_ =
                        d.h.logged_in &&
                        (!this.m_mapQAndASessions.has(e) ||
                          this.m_mapQAndASessions.get(e).bUserCanModerate ||
                          this.m_rgPendingQuestionGIDs.length > 0 ||
                          t)),
                        (b = _
                          ? "/ajaxgetqandasessionforuser/"
                          : "/ajaxgetqandasession/"),
                        (A =
                          d.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          d.b.VANITY_ID +
                          b +
                          e),
                        (g = {}),
                        (h = null),
                        (U.label = 1);
                    case 1:
                      return (
                        U.trys.push([1, 3, , 4]),
                        [
                          4,
                          f.a.get(A, {
                            params: g,
                            cancelToken: null == n ? void 0 : n.token,
                          }),
                        ]
                      );
                    case 2:
                      if (
                        200 == (null == (C = U.sent()) ? void 0 : C.status) &&
                        1 ==
                          (null === (a = C.data) || void 0 === a
                            ? void 0
                            : a.success) &&
                        C.data.qanda &&
                        C.data.questions
                      ) {
                        for (
                          this.PreloadPosterProfiles(C.data.questions, n),
                            S = 0,
                            E = C.data.questions;
                          S < E.length;
                          S++
                        )
                          (w = E[S]),
                            (I = w.gidQuestion),
                            (O =
                              null !==
                                (i =
                                  null === (o = this.m_mapQuestions.get(I)) ||
                                  void 0 === o
                                    ? void 0
                                    : o.bUserUpVoted) && void 0 !== i
                                ? i
                                : w.bUserUpVoted),
                            (N = Object(s.a)(Object(s.a)({}, w), {
                              bUserUpVoted: O,
                            })),
                            this.m_mapQuestions.set(I, N),
                            this.GetQuestionCallbackList(I).Dispatch(N);
                        return (
                          (T =
                            null !==
                              (u =
                                null === (r = this.m_mapQAndASessions.get(e)) ||
                                void 0 === r
                                  ? void 0
                                  : r.bUserCanModerate) && void 0 !== u
                              ? u
                              : C.data.qanda.bUserCanModerate),
                          (j =
                            null !==
                              (c =
                                null === (l = this.m_mapQAndASessions.get(e)) ||
                                void 0 === l
                                  ? void 0
                                  : l.bUserCanAskQuestions) && void 0 !== c
                              ? c
                              : C.data.qanda.bUserCanAskQuestions),
                          (k = Object(s.a)(Object(s.a)({}, C.data.qanda), {
                            bUserCanModerate: T,
                            bUserCanAskQuestions: j,
                          })),
                          this.m_mapQAndASessions.set(e, k),
                          this.GetQAndACallbackList(e).Dispatch(k),
                          this.UpdatePendingQuestionList(
                            C.data.qanda.rgQuestionGIDs
                          ),
                          [2, 1]
                        );
                      }
                      return (h = { response: C }), [3, 4];
                    case 3:
                      return (q = U.sent()), (h = q), [3, 4];
                    case 4:
                      return (
                        (M = Object(Q.a)(h)),
                        console.error(
                          "Could not load Q&A",
                          e,
                          M.strErrorMsg,
                          M
                        ),
                        [
                          2,
                          null !==
                            (p =
                              null ===
                                (v =
                                  null ===
                                    (m = null == h ? void 0 : h.response) ||
                                  void 0 === m
                                    ? void 0
                                    : m.data) || void 0 === v
                                ? void 0
                                : v.success) && void 0 !== p
                            ? p
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.UpdatePendingQuestionList = function (e) {
              for (var t, n = new Set(), s = 0, a = e; s < a.length; s++) {
                var o = a[s],
                  i = this.m_mapQuestions.get(o);
                i.posterAccountID == d.h.accountid &&
                  1 == i.eState &&
                  n.add(i.gidQuestion);
              }
              if (this.m_rgPendingQuestionGIDs.length > 0)
                for (
                  var r = new Set(e), u = 0, l = this.m_rgPendingQuestionGIDs;
                  u < l.length;
                  u++
                ) {
                  o = l[u];
                  r.has(o) &&
                    1 ==
                      (null === (t = this.m_mapQuestions.get(o)) || void 0 === t
                        ? void 0
                        : t.eState) &&
                    n.add(o);
                }
              this.m_rgPendingQuestionGIDs = Array.from(n);
            }),
            (e.prototype.AskNewQuestion = function (e, t, n) {
              var a, o, i, r, u;
              return Object(s.b)(this, void 0, void 0, function () {
                var l, c, m, v, p, _;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        !d.h.logged_in ||
                        !d.c.SESSIONID ||
                        !(null === (a = this.m_mapQAndASessions.get(e)) ||
                        void 0 === a
                          ? void 0
                          : a.bUserCanAskQuestions)
                      )
                        return [2, 15];
                      (l =
                        d.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        d.b.VANITY_ID +
                        "/ajaxaskquestion/" +
                        e),
                        (c = new FormData()).append("sessionid", d.c.SESSIONID),
                        c.append("question", t),
                        (m = null),
                        (s.label = 1);
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          f.a.post(l, c, {
                            withCredentials: !0,
                            cancelToken: null == n ? void 0 : n.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (v = s.sent()) ? void 0 : v.status) &&
                        1 ==
                          (null === (o = v.data) || void 0 === o
                            ? void 0
                            : o.success)
                        ? (this.m_rgPendingQuestionGIDs.push(
                            v.data.gidQuestion
                          ),
                          !0,
                          this.LoadSession(e, true, n),
                          [2, 1])
                        : ((m = { response: v }), [3, 4]);
                    case 3:
                      return (p = s.sent()), (m = p), [3, 4];
                    case 4:
                      return (
                        (_ = Object(Q.a)(m)),
                        console.error(
                          "Could not upload question",
                          e,
                          t,
                          _.strErrorMsg,
                          _
                        ),
                        [
                          2,
                          null !==
                            (u =
                              null ===
                                (r =
                                  null ===
                                    (i = null == m ? void 0 : m.response) ||
                                  void 0 === i
                                    ? void 0
                                    : i.data) || void 0 === r
                                ? void 0
                                : r.success) && void 0 !== u
                            ? u
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.ModerateQuestion = function (e, t, n, a) {
              var o, i, r, u, l;
              return Object(s.b)(this, void 0, void 0, function () {
                var c, m, v, p, _, b;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        !d.h.logged_in ||
                        !d.c.SESSIONID ||
                        !(null === (o = this.m_mapQAndASessions.get(e)) ||
                        void 0 === o
                          ? void 0
                          : o.bUserCanModerate)
                      )
                        return [2, 15];
                      if (1 != n && 3 != n) return [2, 8];
                      if (this.m_mapQuestions.get(t).eState == n) return [2, 1];
                      (c =
                        d.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        d.b.VANITY_ID +
                        "/ajaxmoderatequestion/" +
                        e),
                        (m = new FormData()).append("sessionid", d.c.SESSIONID),
                        m.append("gidquestion", t),
                        m.append("action", 1 == n ? "show" : "hide"),
                        (v = null),
                        (s.label = 1);
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          f.a.post(c, m, {
                            withCredentials: !0,
                            cancelToken: null == a ? void 0 : a.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (p = s.sent()) ? void 0 : p.status) &&
                        1 ==
                          (null === (i = p.data) || void 0 === i
                            ? void 0
                            : i.success)
                        ? (!0, this.LoadSession(e, true, a), [2, 1])
                        : ((v = { response: p }), [3, 4]);
                    case 3:
                      return (_ = s.sent()), (v = _), [3, 4];
                    case 4:
                      return (
                        (b = Object(Q.a)(v)),
                        console.error(
                          "Could not moderate question",
                          e,
                          t,
                          n,
                          b.strErrorMsg,
                          b
                        ),
                        [
                          2,
                          null !==
                            (l =
                              null ===
                                (u =
                                  null ===
                                    (r = null == v ? void 0 : v.response) ||
                                  void 0 === r
                                    ? void 0
                                    : r.data) || void 0 === u
                                ? void 0
                                : u.success) && void 0 !== l
                            ? l
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.AnswerQuestion = function (e, t, n, a) {
              var o, i, r, u, l;
              return Object(s.b)(this, void 0, void 0, function () {
                var c, m, v, p, _, b;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        !d.h.logged_in ||
                        !d.c.SESSIONID ||
                        !(null === (o = this.m_mapQAndASessions.get(e)) ||
                        void 0 === o
                          ? void 0
                          : o.bUserCanAskQuestions)
                      )
                        return [2, 15];
                      (c =
                        d.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        d.b.VANITY_ID +
                        "/ajaxanswerquestion/" +
                        e),
                        (m = new FormData()).append("sessionid", d.c.SESSIONID),
                        m.append("gidquestion", t),
                        m.append("answer", n),
                        (v = null),
                        (s.label = 1);
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          f.a.post(c, m, {
                            withCredentials: !0,
                            cancelToken: null == a ? void 0 : a.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (p = s.sent()) ? void 0 : p.status) &&
                        1 ==
                          (null === (i = p.data) || void 0 === i
                            ? void 0
                            : i.success)
                        ? (!0, this.LoadSession(e, true, a), [2, 1])
                        : ((v = { response: p }), [3, 4]);
                    case 3:
                      return (_ = s.sent()), (v = _), [3, 4];
                    case 4:
                      return (
                        (b = Object(Q.a)(v)),
                        console.error(
                          "Could not upload answer",
                          e,
                          t,
                          n,
                          b.strErrorMsg,
                          b
                        ),
                        [
                          2,
                          null !==
                            (l =
                              null ===
                                (u =
                                  null ===
                                    (r = null == v ? void 0 : v.response) ||
                                  void 0 === r
                                    ? void 0
                                    : r.data) || void 0 === u
                                ? void 0
                                : u.success) && void 0 !== l
                            ? l
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.VoteOnQuestion = function (e, t, n, a) {
              var o, i, r, u, l;
              return Object(s.b)(this, void 0, void 0, function () {
                var c, m, v, p, _, b, A, g, h;
                return Object(s.e)(this, function (C) {
                  switch (C.label) {
                    case 0:
                      if (
                        !d.h.logged_in ||
                        !d.c.SESSIONID ||
                        !(null === (o = this.m_mapQAndASessions.get(e)) ||
                        void 0 === o
                          ? void 0
                          : o.bUserCanAskQuestions)
                      )
                        return [2, 15];
                      if (n === this.m_mapQuestions.get(t).bUserUpVoted)
                        return [2, 1];
                      (c = this.m_mapQuestions.get(t)),
                        (m = c.nVoteCount),
                        (v = m + (n ? 1 : -1)),
                        (c = Object(s.a)(Object(s.a)({}, c), {
                          nVoteCount: v,
                          bUserUpVoted: n,
                        })),
                        this.m_mapQuestions.set(t, c),
                        this.GetQuestionCallbackList(t).Dispatch(c),
                        (p =
                          d.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          d.b.VANITY_ID +
                          "/ajaxvoteforquestion/" +
                          e),
                        (_ = new FormData()).append("sessionid", d.c.SESSIONID),
                        _.append("gidquestion", t),
                        _.append("up", n ? "1" : "0"),
                        (b = null),
                        (C.label = 1);
                    case 1:
                      return (
                        C.trys.push([1, 3, , 4]),
                        [
                          4,
                          f.a.post(p, _, {
                            withCredentials: !0,
                            cancelToken: null == a ? void 0 : a.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (A = C.sent()) ? void 0 : A.status) &&
                        1 ==
                          (null === (i = A.data) || void 0 === i
                            ? void 0
                            : i.success)
                        ? [2, 1]
                        : ((b = { response: A }), [3, 4]);
                    case 3:
                      return (g = C.sent()), (b = g), [3, 4];
                    case 4:
                      return (
                        (c = Object(s.a)(Object(s.a)({}, c), {
                          nVoteCount: m,
                          bUserUpVoted: !n,
                        })),
                        this.m_mapQuestions.set(t, c),
                        this.GetQuestionCallbackList(t).Dispatch(c),
                        (h = Object(Q.a)(b)),
                        console.error(
                          "Could not upload vote",
                          e,
                          t,
                          n,
                          h.strErrorMsg,
                          h
                        ),
                        [
                          2,
                          null !==
                            (l =
                              null ===
                                (u =
                                  null ===
                                    (r = null == b ? void 0 : b.response) ||
                                  void 0 === r
                                    ? void 0
                                    : r.data) || void 0 === u
                                ? void 0
                                : u.success) && void 0 !== l
                            ? l
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            e
          );
        })();
      function h(e) {
        var t = this,
          n = Object(A.a)("useQAndASession"),
          a = o.a.useCallback(
            function (a) {
              return Object(s.b)(t, void 0, void 0, function () {
                var t, o;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (t =
                        null === (o = g.Get().GetSession(e)) || void 0 === o
                          ? void 0
                          : o.bUserCanAskQuestions)
                        ? [4, g.Get().AskNewQuestion(e, a, n)]
                        : [3, 2];
                    case 1:
                      (t = s.sent()), (s.label = 2);
                    case 2:
                      return [2, t];
                  }
                });
              });
            },
            [e, n]
          ),
          i = o.a.useCallback(
            function (t, s) {
              var a;
              return (
                (null === (a = g.Get().GetSession(e)) || void 0 === a
                  ? void 0
                  : a.bUserCanAskQuestions) &&
                g.Get().VoteOnQuestion(e, t, s, n)
              );
            },
            [e, n]
          ),
          r = o.a.useCallback(
            function (e) {
              for (
                var t,
                  n = !!e,
                  s = null == e ? void 0 : e.bUserCanModerate,
                  o = null == e ? void 0 : e.bUserCanAskQuestions,
                  r = [],
                  u = [],
                  l = [],
                  c = [],
                  d = 0,
                  m =
                    null !== (t = null == e ? void 0 : e.rgQuestionGIDs) &&
                    void 0 !== t
                      ? t
                      : [];
                d < m.length;
                d++
              ) {
                var v = m[d],
                  p = g.Get().GetQuestion(v);
                switch (null == p ? void 0 : p.eState) {
                  case 1:
                    r.push(v);
                    break;
                  case 2:
                    u.push(v);
                    break;
                  case 0:
                    l.push(v);
                    break;
                  case 3:
                    c.push(v);
                }
              }
              return (
                r.sort(function (e, t) {
                  return (
                    g.Get().GetQuestion(t).nVoteCount -
                    g.Get().GetQuestion(e).nVoteCount
                  );
                }),
                u.sort(function (e, t) {
                  return (
                    g.Get().GetQuestion(t).rtAnswerTime -
                    g.Get().GetQuestion(e).rtAnswerTime
                  );
                }),
                l.sort(function (e, t) {
                  return (
                    g.Get().GetQuestion(t).rtPostTime -
                    g.Get().GetQuestion(e).rtPostTime
                  );
                }),
                c.sort(function (e, t) {
                  return (
                    g.Get().GetQuestion(t).rtPostTime -
                    g.Get().GetQuestion(e).rtPostTime
                  );
                }),
                {
                  bIsLoaded: n,
                  bUserCanModerate: s,
                  bUserCanAskQuestions: o,
                  fnAskQuestion: a,
                  fnVoteOnQuestion: i,
                  rgModeratedQuestionGIDs: r,
                  rgAnsweredQuestionGIDs: u,
                  rgNewQuestionGIDs: l,
                  rgHiddenQuestionGIDs: c,
                }
              );
            },
            [a, i]
          ),
          u = o.a.useState(function () {
            return r(g.Get().GetSession(e));
          }),
          l = u[0],
          d = u[1],
          m = o.a.useCallback(
            function (e) {
              return d(r(e));
            },
            [r]
          );
        return (
          Object(c.d)(g.Get().GetQAndACallbackList(e), m),
          o.a.useEffect(
            function () {
              l.bIsLoaded || g.Get().LoadSession(e);
            },
            [l.bIsLoaded, e]
          ),
          l
        );
      }
      var C = null;
      function S(e) {
        var t,
          n,
          s,
          a = Object(A.a)("useReloadFunction"),
          i = o.a.useState(!1),
          r = i[0],
          u = i[1],
          l = o.a.useCallback(
            function () {
              u(!0);
              var t = g.Get().LoadSession(e, !1, a);
              return (
                t.then(function () {
                  return u(!1);
                }),
                t
              );
            },
            [e, a]
          ),
          d =
            ((t = l),
            (n = o.a.useRef(null)),
            (s = o.a.useCallback(function () {
              n.current && (n.current(), (n.current = null));
            }, [])),
            Object(c.d)(v.Get().GetCallbackList(), s),
            o.a.useEffect(function () {
              return function () {
                n.current = null;
              };
            }),
            o.a.useCallback(
              function () {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                v.Get().BIsUserFidgeting()
                  ? (n.current = function () {
                      return t.apply(void 0, e);
                    })
                  : ((n.current = null), t.apply(void 0, e));
              },
              [t]
            ));
        return (
          o.a.useEffect(
            function () {
              if (C) return function () {};
              return (
                (C = window.setInterval(d, 1e4)),
                function () {
                  return window.clearInterval(C);
                }
              );
            },
            [d]
          ),
          o.a.useMemo(
            function () {
              return { fnReload: l, bIsReloading: r };
            },
            [l, r]
          )
        );
      }
      function E(e) {
        var t = Object(A.a)("useQuestionModeratorActions"),
          n = o.a.useCallback(
            function (n, s) {
              var a;
              return (
                (null === (a = g.Get().GetSession(e)) || void 0 === a
                  ? void 0
                  : a.bUserCanModerate) && g.Get().AnswerQuestion(e, n, s, t)
              );
            },
            [e, t]
          ),
          s = o.a.useCallback(
            function (n, s) {
              var a;
              return (
                (null === (a = g.Get().GetSession(e)) || void 0 === a
                  ? void 0
                  : a.bUserCanModerate) && g.Get().ModerateQuestion(e, n, s, t)
              );
            },
            [e, t]
          );
        return o.a.useMemo(
          function () {
            return { fnAnswerQuestion: n, fnModerateQuestion: s };
          },
          [n, s]
        );
      }
      var w = n("Mgs7"),
        I = n("BFsE"),
        O = n("YLyR"),
        N = n("6Y59"),
        T = n("0OaU"),
        j = n("5E+2"),
        k = n("DisI"),
        q = n("exH9"),
        M = n("TLQK"),
        U = n("CdLH"),
        G = n("hII0"),
        L = n.n(G);
      function V(e) {
        var t = e.gidSession,
          n = e.gidQuestion,
          s = e.bUserCanModerate,
          a = e.bUserCanVote,
          i = e.fnVoteOnQuestion,
          r = e.rtNow,
          u = (function (e) {
            var t = o.a.useState(g.Get().GetQuestion(e)),
              n = t[0],
              s = t[1];
            Object(c.d)(g.Get().GetQuestionCallbackList(e), s);
            var a = o.a.useState(!!n),
              i = a[0];
            return a[1], [n, !!n || i];
          })(n),
          l = u[0];
        u[1];
        if (!l) return null;
        var d = r - l.rtPostTime,
          m = d < U.f.PerDay ? Object(M.q)(d) : Object(M.p)(l.rtPostTime),
          v = a
            ? function () {
                return i(n, !l.bUserUpVoted);
              }
            : null,
          p = a
            ? l.bUserUpVoted
              ? L.a.Vote_Positive
              : L.a.Vote_Ready
            : L.a.Vote_CannotVote,
          _ = Object(q.a)(
            L.a.Question,
            3 == l.eState && L.a.Hidden,
            1 == l.eState && L.a.Moderated,
            0 == l.eState && L.a.Unmoderated,
            2 == l.eState && L.a.Answered
          );
        return o.a.createElement(
          "div",
          { className: _ },
          o.a.createElement(
            "div",
            { className: L.a.QuestionCtn },
            o.a.createElement(P, { accountID: l.posterAccountID }),
            o.a.createElement(
              "div",
              { className: L.a.QuestionText },
              o.a.createElement(
                "div",
                { className: L.a.QuestionAndVotes },
                o.a.createElement(
                  "div",
                  { className: L.a.QuestionTitle },
                  l.strQuestionText
                ),
                o.a.createElement(
                  j.a,
                  {
                    toolTipContent:
                      a &&
                      (l.bUserUpVoted
                        ? Object(M.f)("#QAndA_VoteRemoveTooltip")
                        : Object(M.f)("#QAndA_VoteTooltip")),
                  },
                  o.a.createElement(
                    "div",
                    { className: Object(q.a)(p, L.a.Votes), onClick: v },
                    o.a.createElement(N.eb, { className: L.a.RateIcon }),
                    o.a.createElement(
                      "div",
                      { className: L.a.VoteCount },
                      Number(l.nVoteCount).toLocaleString()
                    )
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: L.a.QuestionStats },
                o.a.createElement(
                  "div",
                  { className: L.a.PostTime },
                  o.a.createElement(
                    O.g,
                    {
                      rtFullDate: l.rtPostTime,
                      className: L.a.PostTime,
                      stylesmodule: L.a,
                    },
                    m
                  )
                )
              )
            )
          ),
          l.rtAnswerTime && o.a.createElement(D, { question: l, rtNow: r }),
          s &&
            o.a.createElement(R, {
              gidSession: t,
              gidQuestion: n,
              eState: null == l ? void 0 : l.eState,
            })
        );
      }
      function D(e) {
        var t = e.question,
          n = e.rtNow,
          s = t.rtAnswerTime && n - t.rtAnswerTime,
          a =
            t.rtAnswerTime &&
            (s < U.f.PerDay ? Object(M.q)(s) : Object(M.p)(t.rtAnswerTime));
        return t.strAnswerText
          ? o.a.createElement(
              "div",
              { className: L.a.Answer },
              o.a.createElement(
                "div",
                { className: L.a.AnswerTitle },
                o.a.createElement(
                  "div",
                  { className: L.a.AnswerCheck },
                  o.a.createElement(N.p, { color: "#67c1f5" })
                ),
                Object(M.f)("#QAndA_ModeratorAnswerTitle")
              ),
              o.a.createElement(
                "div",
                { className: L.a.AnswerText },
                " ",
                t.strAnswerText,
                " "
              ),
              o.a.createElement(
                "div",
                { className: L.a.QuestionStats },
                o.a.createElement(
                  O.g,
                  {
                    rtFullDate: t.rtAnswerTime,
                    className: L.a.PostTime,
                    stylesmodule: L.a,
                  },
                  a
                )
              )
            )
          : o.a.createElement(
              "div",
              { className: L.a.AnswerTitle },
              o.a.createElement(
                "div",
                { className: L.a.AnswerCheck },
                o.a.createElement(N.p, { color: "#67c1f5" })
              ),
              Object(M.f)("#QAndA_AlreadyAnsweredTitle")
            );
      }
      function P(e) {
        var t,
          n = i.a.InitFromAccountID(e.accountID),
          s = n.ConvertTo64BitString(),
          a = Object(_.b)(n),
          r = a[0],
          u = a[1];
        return r
          ? null
          : o.a.createElement(
              "a",
              {
                href: d.c.COMMUNITY_BASE_URL + "profiles/" + s,
                className: L.a.PersonaName,
                "data-miniprofile": "s" + s,
              },
              null !== (t = null == u ? void 0 : u.persona_name) && void 0 !== t
                ? t
                : s
            );
      }
      function R(e) {
        var t = e.gidSession,
          n = e.gidQuestion,
          s = e.eState,
          a = E(t),
          i = a.fnAnswerQuestion,
          r = a.fnModerateQuestion,
          u = 0 == s || 3 == s,
          l = 3 != s,
          c = 1 == s;
        return o.a.createElement(
          "div",
          { className: L.a.ModeratorSection },
          Object(M.f)("#QAndA_ModeratorLabel"),
          o.a.createElement(
            "div",
            { className: L.a.ToolRow },
            o.a.createElement(x, {
              strPrompt: Object(M.f)("#QAndA_AnswerPrompt"),
              fnSubmit: function (e) {
                return i(n, e);
              },
            })
          ),
          o.a.createElement(
            "div",
            { className: L.a.ToolRow },
            Object(M.f)("#QAndA_ModeratorOtherOptionsLabel"),
            o.a.createElement(
              j.a,
              {
                toolTipContent: Object(M.f)(
                  "#QAndA_ModerateApproveButton_ttip"
                ),
              },
              o.a.createElement(
                w.d,
                {
                  onClick: function () {
                    return r(n, 1);
                  },
                  className: L.a.InputButton,
                  disabled: !u,
                },
                Object(M.f)("#QAndA_ModerateApproveButton")
              )
            ),
            o.a.createElement(
              j.a,
              { toolTipContent: Object(M.f)("#QAndA_ModerateHideButton_ttip") },
              o.a.createElement(
                w.d,
                {
                  onClick: function () {
                    return r(n, 3);
                  },
                  className: L.a.InputButton,
                  disabled: !l,
                },
                Object(M.f)("#QAndA_ModerateHideButton")
              )
            ),
            o.a.createElement(
              j.a,
              { toolTipContent: Object(M.f)("#QAndA_QuickAnswerButton_ttip") },
              o.a.createElement(
                w.d,
                {
                  onClick: function () {
                    return i(n, "");
                  },
                  className: L.a.InputButton,
                  disabled: !c,
                },
                Object(M.f)("#QAndA_QuickAnswerButton")
              )
            )
          )
        );
      }
      function B(e) {
        var t = e.gidSession;
        p();
        var n = h(t).bUserCanModerate;
        return o.a.createElement(
          "div",
          { className: L.a.QAFullPageView },
          o.a.createElement(H, { gidSession: t, bHalfOfFullPage: n }),
          n && o.a.createElement(y, { gidSession: t })
        );
      }
      function y(e) {
        var t = e.gidSession,
          n = h(t),
          s = n.bUserCanModerate,
          a = n.rgNewQuestionGIDs,
          i = n.rgHiddenQuestionGIDs,
          u = Object(r.c)(10);
        return s
          ? o.a.createElement(
              "div",
              {
                className: Object(q.a)(
                  L.a.QAModeratorColumn,
                  L.a.QASplitColumns
                ),
              },
              o.a.createElement(
                k.d,
                {
                  title: Object(M.f)("#QAndA_ModeratorViewHeader"),
                  className: L.a.ModeratorInstructions,
                },
                o.a.createElement(
                  "div",
                  { className: L.a.QuestionList },
                  a.map(function (e) {
                    return o.a.createElement(V, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: s,
                      bUserCanVote: !1,
                      rtNow: u,
                    });
                  })
                )
              ),
              o.a.createElement(
                k.d,
                {
                  title: Object(M.f)("#QAndA_HiddenQuestionsHeader"),
                  className: L.a.AnsweredSectionHeader,
                  bStartMinimized: !0,
                },
                o.a.createElement(
                  "div",
                  { className: L.a.QuestionList },
                  i.map(function (e) {
                    return o.a.createElement(V, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: s,
                      bUserCanVote: !1,
                      rtNow: u,
                    });
                  })
                )
              )
            )
          : null;
      }
      function H(e) {
        var t = this,
          n = e.gidSession,
          a = e.bHalfOfFullPage;
        p();
        var i = h(n),
          u = i.bIsLoaded,
          l = i.bUserCanAskQuestions,
          c = i.bUserCanModerate,
          d = i.fnAskQuestion,
          m = i.fnVoteOnQuestion,
          v = i.rgModeratedQuestionGIDs,
          _ = i.rgAnsweredQuestionGIDs,
          b = i.rgNewQuestionGIDs,
          f = S(n),
          A = f.fnReload,
          Q = f.bIsReloading,
          g = Object(r.c)(10),
          C = c && a,
          I = E(n).fnModerateQuestion;
        return o.a.createElement(
          "div",
          { className: Object(q.a)(L.a.QAMainCtn, a && L.a.QASplitColumns) },
          o.a.createElement(
            "div",
            { className: Object(q.a)(L.a.QAHeader, C && L.a.ModerationHeader) },
            o.a.createElement(
              w.d,
              {
                onClick: A,
                disabled: !u,
                className: Object(q.a)(
                  L.a.InputButton,
                  L.a.Reload,
                  Q && L.a.Reloading
                ),
              },
              o.a.createElement(
                "div",
                { className: L.a.ReloadIcon },
                o.a.createElement(N.S, null)
              )
            ),
            C
              ? o.a.createElement(
                  o.a.Fragment,
                  null,
                  Object(M.f)("#QAndA_ModeratorLabelHeader"),
                  o.a.createElement(
                    j.a,
                    {
                      toolTipContent: Object(M.f)(
                        "#QAndA_ModerateHideAllButton_ttip"
                      ),
                    },
                    o.a.createElement(
                      w.d,
                      {
                        onClick: function () {
                          return Object(s.b)(t, void 0, void 0, function () {
                            var e, t, n, a, o, i;
                            return Object(s.e)(this, function (s) {
                              switch (s.label) {
                                case 0:
                                  (e = 0), (t = [b, v, _]), (s.label = 1);
                                case 1:
                                  if (!(e < t.length)) return [3, 6];
                                  (n = t[e]), (a = 0), (o = n), (s.label = 2);
                                case 2:
                                  return a < o.length
                                    ? ((i = o[a]), [4, I(i, 3)])
                                    : [3, 5];
                                case 3:
                                  s.sent(), (s.label = 4);
                                case 4:
                                  return a++, [3, 2];
                                case 5:
                                  return e++, [3, 1];
                                case 6:
                                  return [2];
                              }
                            });
                          });
                        },
                        className: L.a.InputButton,
                      },
                      Object(M.f)("#QAndA_ModerateHideAllButton")
                    )
                  )
                )
              : l
              ? o.a.createElement(F, { fnAskQuestion: d })
              : u && o.a.createElement(z, null)
          ),
          v.length + _.length == 0
            ? o.a.createElement(
                "div",
                { className: L.a.NoQuestions },
                Object(M.f)("#QAndA_NoQuestionsYet")
              )
            : o.a.createElement(
                "div",
                { className: L.a.QuestionsCtn },
                o.a.createElement(
                  "div",
                  { className: L.a.InsetShadowTopCtn },
                  o.a.createElement("div", { className: L.a.InsetShadowTop })
                ),
                o.a.createElement(
                  "div",
                  { className: L.a.QuestionList },
                  u
                    ? v.map(function (e) {
                        return o.a.createElement(V, {
                          key: e,
                          gidSession: n,
                          gidQuestion: e,
                          bUserCanModerate: C,
                          bUserCanVote: l,
                          fnVoteOnQuestion: m,
                          rtNow: g,
                        });
                      })
                    : o.a.createElement(T.a, { position: "center" })
                ),
                _.length > 0 &&
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: L.a.AnsweredSectionHeader },
                      Object(M.f)("#QAndA_AnsweredQuestionsHeader")
                    ),
                    o.a.createElement(
                      "div",
                      { className: L.a.QuestionList },
                      _.map(function (e) {
                        return o.a.createElement(V, {
                          key: e,
                          gidSession: n,
                          gidQuestion: e,
                          bUserCanModerate: C,
                          bUserCanVote: l,
                          fnVoteOnQuestion: m,
                          rtNow: g,
                        });
                      })
                    )
                  )
              )
        );
      }
      function F(e) {
        var t = this,
          n = o.a.useState(!1),
          a = n[0],
          i = n[1],
          r = Object(A.a)("QuestionBox");
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: L.a.Description },
            Object(M.f)("#QAndA_HeaderDescription")
          ),
          o.a.createElement(x, {
            strPrompt: Object(M.f)("#QAndA_QuestionPrompt"),
            fnSubmit: function (n) {
              return Object(s.b)(t, void 0, void 0, function () {
                var t;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, e.fnAskQuestion(n)];
                    case 1:
                      return (
                        1 != (t = s.sent()) ||
                          r.token.reason ||
                          (i(!0),
                          window.setTimeout(function () {
                            r.token.reason || i(!1);
                          }, 1e3)),
                        [2, t]
                      );
                  }
                });
              });
            },
          }),
          o.a.createElement(
            "div",
            { className: Object(q.a)(L.a.QuestionACK, a && L.a.Visible) },
            Object(M.f)("#QAndA_QuestionWasPosted")
          )
        );
      }
      function x(e) {
        var t = this,
          n = e.strPrompt,
          a = e.fnSubmit,
          i = o.a.useState(""),
          r = i[0],
          u = i[1],
          l = o.a.useState(!1),
          c = l[0],
          d = l[1];
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: L.a.InputCtn },
            o.a.createElement(w.l, {
              type: "text",
              placeholder: n,
              maxLength: 512,
              value: r,
              onChange: function (e) {
                return u(e.target.value);
              },
            }),
            o.a.createElement(
              "div",
              { className: L.a.ButtonCtn },
              c &&
                o.a.createElement(
                  "div",
                  { className: L.a.SaveSpinner },
                  o.a.createElement(T.a, { size: "small", position: "center" })
                ),
              o.a.createElement(
                w.d,
                {
                  onClick: function () {
                    return Object(s.b)(t, void 0, void 0, function () {
                      return Object(s.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return d(!0), [4, a(r)];
                          case 1:
                            return 1 == e.sent() && u(""), d(!1), [2];
                        }
                      });
                    });
                  },
                  disabled: c || !r,
                  className: L.a.InputButton,
                },
                Object(M.f)("#QAndA_SubmitCommentButton")
              )
            )
          )
        );
      }
      function z(e) {
        return o.a.createElement(
          "div",
          { className: L.a.Description },
          o.a.createElement(
            "div",
            { className: L.a.LogInPrompt },
            Object(M.f)("#QAndA_LogInPrompt")
          ),
          !d.h.logged_in &&
            o.a.createElement(
              w.d,
              {
                onClick: I.a,
                className: Object(q.a)(L.a.SignInButton, L.a.InputButton),
              },
              Object(M.f)("#Login_SignIn")
            )
        );
      }
    },
    KVeB: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "QAndARoutes", function () {
          return u;
        });
      var s = n("JCps"),
        a = n("q1tI"),
        o = n("EC67"),
        i = n("WplJ"),
        r = n("lkRc"),
        u = {
          FullPageView: function (e, t) {
            return "/questions/" + e + "/view/" + t;
          },
        };
      function l(e) {
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
            path: u.FullPageView(":vanity_str", ":session_gid"),
            render: function (e) {
              return a.createElement(i.a, {
                config: {
                  "qanda-root": function () {
                    var t = e.match.params,
                      n = (t.vanity_str, t.session_gid);
                    return a.createElement(s.a, { gidSession: n });
                  },
                },
              });
            },
          }),
          a.createElement(o.c, { component: l })
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
