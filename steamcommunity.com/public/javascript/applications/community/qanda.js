/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [132],
  {
    JCps: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return T;
      });
      var s = n("mrSG"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("kLLr"),
        r = n("Qcoi"),
        u = n("vDqi"),
        l = n.n(u),
        c = n("X2UP"),
        d = n("OS6B"),
        m = n("qiKp"),
        v = n("opsS"),
        p = n("lkRc"),
        _ = (function () {
          function e() {
            (this.m_mapQAndASessions = new Map()),
              (this.m_mapQAndAChangeCallbackList = new Map()),
              (this.m_mapQuestions = new Map()),
              (this.m_mapQuestionCallbackList = new Map()),
              "dev" == p.c.WEB_UNIVERSE && (window.g_FAQStore = this);
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.GetQAndACallbackList = function (e) {
              return (
                this.m_mapQAndAChangeCallbackList.has(e) ||
                  this.m_mapQAndAChangeCallbackList.set(e, new m.a()),
                this.m_mapQAndAChangeCallbackList.get(e)
              );
            }),
            (e.prototype.GetQuestionCallbackList = function (e) {
              return (
                this.m_mapQuestionCallbackList.has(e) ||
                  this.m_mapQuestionCallbackList.set(e, new m.a()),
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
              for (var u = Array.from(n); u.length > 0; ) {
                var l = u.splice(0, 500);
                r.a.LoadProfiles(l, t);
              }
            }),
            (e.prototype.LoadSession = function (e, t, n) {
              var a, o, i, r, u, c, m, v, _, b, A, Q;
              return Object(s.b)(this, void 0, void 0, function () {
                var f, h, S, C, g, E, I, q, w, O, T, k, N, j, U, L, V, D;
                return Object(s.e)(this, function (M) {
                  switch (M.label) {
                    case 0:
                      (f =
                        p.i.logged_in &&
                        (t ||
                          !this.m_mapQAndASessions.has(e) ||
                          this.m_mapQAndASessions.get(e).bUserCanModerate)),
                        (h = f
                          ? "/ajaxgetqandasessionforuser/"
                          : "/ajaxgetqandasession/"),
                        (S =
                          p.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          p.b.VANITY_ID +
                          h +
                          e),
                        (C = {}),
                        (g = null),
                        (M.label = 1);
                    case 1:
                      return (
                        M.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.get(S, {
                            params: C,
                            cancelToken: null == n ? void 0 : n.token,
                          }),
                        ]
                      );
                    case 2:
                      if (
                        200 == (null == (E = M.sent()) ? void 0 : E.status) &&
                        1 ==
                          (null === (a = E.data) || void 0 === a
                            ? void 0
                            : a.success) &&
                        E.data.qanda &&
                        E.data.questions
                      ) {
                        for (
                          this.PreloadPosterProfiles(E.data.questions, n),
                            I = 0,
                            q = E.data.questions;
                          I < q.length;
                          I++
                        )
                          (w = q[I]),
                            (O = w.gidQuestion),
                            (T =
                              null !==
                                (i =
                                  null === (o = this.m_mapQuestions.get(O)) ||
                                  void 0 === o
                                    ? void 0
                                    : o.bUserUpVoted) && void 0 !== i
                                ? i
                                : w.bUserUpVoted),
                            (k =
                              null !==
                                (u =
                                  null === (r = this.m_mapQuestions.get(O)) ||
                                  void 0 === r
                                    ? void 0
                                    : r.bHidden) && void 0 !== u
                                ? u
                                : w.bHidden),
                            (N = Object(s.a)(Object(s.a)({}, w), {
                              bUserUpVoted: T,
                              bHidden: k,
                            })),
                            this.m_mapQuestions.set(O, N),
                            this.GetQuestionCallbackList(O).Dispatch(N);
                        return (
                          (j =
                            null !==
                              (m =
                                null === (c = this.m_mapQAndASessions.get(e)) ||
                                void 0 === c
                                  ? void 0
                                  : c.bUserCanModerate) && void 0 !== m
                              ? m
                              : E.data.qanda.bUserCanModerate),
                          (U =
                            null !==
                              (_ =
                                null === (v = this.m_mapQAndASessions.get(e)) ||
                                void 0 === v
                                  ? void 0
                                  : v.bUserCanAskQuestions) && void 0 !== _
                              ? _
                              : E.data.qanda.bUserCanAskQuestions),
                          (L = Object(s.a)(Object(s.a)({}, E.data.qanda), {
                            bUserCanModerate: j,
                            bUserCanAskQuestions: U,
                          })),
                          this.m_mapQAndASessions.set(e, L),
                          this.GetQAndACallbackList(e).Dispatch(L),
                          [2, 1]
                        );
                      }
                      return (g = { response: E }), [3, 4];
                    case 3:
                      return (V = M.sent()), (g = V), [3, 4];
                    case 4:
                      return (
                        (D = Object(d.a)(g)),
                        console.error(
                          "Could not load Q&A",
                          e,
                          D.strErrorMsg,
                          D
                        ),
                        [
                          2,
                          null !==
                            (Q =
                              null ===
                                (A =
                                  null ===
                                    (b = null == g ? void 0 : g.response) ||
                                  void 0 === b
                                    ? void 0
                                    : b.data) || void 0 === A
                                ? void 0
                                : A.success) && void 0 !== Q
                            ? Q
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.AskNewQuestion = function (e, t, n) {
              var a, o, i, r, u;
              return Object(s.b)(this, void 0, void 0, function () {
                var c, m, v, _, b, A;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        !p.i.logged_in ||
                        !p.c.SESSIONID ||
                        !(null === (a = this.m_mapQAndASessions.get(e)) ||
                        void 0 === a
                          ? void 0
                          : a.bUserCanAskQuestions)
                      )
                        return [2, 15];
                      (c =
                        p.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        p.b.VANITY_ID +
                        "/ajaxaskquestion/" +
                        e),
                        (m = new FormData()).append("sessionid", p.c.SESSIONID),
                        m.append("question", t),
                        (v = null),
                        (s.label = 1);
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.post(c, m, {
                            withCredentials: !0,
                            cancelToken: null == n ? void 0 : n.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (_ = s.sent()) ? void 0 : _.status) &&
                        1 ==
                          (null === (o = _.data) || void 0 === o
                            ? void 0
                            : o.success)
                        ? (!0, this.LoadSession(e, true, n), [2, 1])
                        : ((v = { response: _ }), [3, 4]);
                    case 3:
                      return (b = s.sent()), (v = b), [3, 4];
                    case 4:
                      return (
                        (A = Object(d.a)(v)),
                        console.error(
                          "Could not upload question",
                          e,
                          t,
                          A.strErrorMsg,
                          A
                        ),
                        [
                          2,
                          null !==
                            (u =
                              null ===
                                (r =
                                  null ===
                                    (i = null == v ? void 0 : v.response) ||
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
              var o, i, r, u, c;
              return Object(s.b)(this, void 0, void 0, function () {
                var m, v, _, b, A, Q, f, h;
                return Object(s.e)(this, function (S) {
                  switch (S.label) {
                    case 0:
                      if (
                        !p.i.logged_in ||
                        !p.c.SESSIONID ||
                        !(null === (o = this.m_mapQAndASessions.get(e)) ||
                        void 0 === o
                          ? void 0
                          : o.bUserCanModerate)
                      )
                        return [2, 15];
                      if (1 != n && 3 != n) return [2, 8];
                      if (
                        ((m = this.m_mapQuestions.get(t)),
                        (v = 3 == n) === m.bHidden)
                      )
                        return [2, 1];
                      (m = Object(s.a)(Object(s.a)({}, m), { bHidden: v })),
                        this.m_mapQuestions.set(t, m),
                        this.GetQuestionCallbackList(t).Dispatch(m),
                        (_ =
                          p.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          p.b.VANITY_ID +
                          "/ajaxmoderatequestion/" +
                          e),
                        (b = new FormData()).append("sessionid", p.c.SESSIONID),
                        b.append("gidquestion", t),
                        b.append("action", v ? "hide" : "show"),
                        (A = null),
                        (S.label = 1);
                    case 1:
                      return (
                        S.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.post(_, b, {
                            withCredentials: !0,
                            cancelToken: null == a ? void 0 : a.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (Q = S.sent()) ? void 0 : Q.status) &&
                        1 ==
                          (null === (i = Q.data) || void 0 === i
                            ? void 0
                            : i.success)
                        ? (!0, this.LoadSession(e, true, a), [2, 1])
                        : ((A = { response: Q }), [3, 4]);
                    case 3:
                      return (f = S.sent()), (A = f), [3, 4];
                    case 4:
                      return (
                        (h = Object(d.a)(A)),
                        console.error(
                          "Could not moderate question",
                          e,
                          t,
                          n,
                          h.strErrorMsg,
                          h
                        ),
                        [
                          2,
                          null !==
                            (c =
                              null ===
                                (u =
                                  null ===
                                    (r = null == A ? void 0 : A.response) ||
                                  void 0 === r
                                    ? void 0
                                    : r.data) || void 0 === u
                                ? void 0
                                : u.success) && void 0 !== c
                            ? c
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.AnswerQuestion = function (e, t, n, a) {
              var o, i, r, u, c;
              return Object(s.b)(this, void 0, void 0, function () {
                var m, v, _, b, A, Q;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        !p.i.logged_in ||
                        !p.c.SESSIONID ||
                        !(null === (o = this.m_mapQAndASessions.get(e)) ||
                        void 0 === o
                          ? void 0
                          : o.bUserCanModerate)
                      )
                        return [2, 15];
                      (m =
                        p.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        p.b.VANITY_ID +
                        "/ajaxanswerquestion/" +
                        e),
                        (v = new FormData()).append("sessionid", p.c.SESSIONID),
                        v.append("gidquestion", t),
                        v.append("answer", n),
                        (_ = null),
                        (s.label = 1);
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.post(m, v, {
                            withCredentials: !0,
                            cancelToken: null == a ? void 0 : a.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (b = s.sent()) ? void 0 : b.status) &&
                        1 ==
                          (null === (i = b.data) || void 0 === i
                            ? void 0
                            : i.success)
                        ? (!0, this.LoadSession(e, true, a), [2, 1])
                        : ((_ = { response: b }), [3, 4]);
                    case 3:
                      return (A = s.sent()), (_ = A), [3, 4];
                    case 4:
                      return (
                        (Q = Object(d.a)(_)),
                        console.error(
                          "Could not upload answer",
                          e,
                          t,
                          n,
                          Q.strErrorMsg,
                          Q
                        ),
                        [
                          2,
                          null !==
                            (c =
                              null ===
                                (u =
                                  null ===
                                    (r = null == _ ? void 0 : _.response) ||
                                  void 0 === r
                                    ? void 0
                                    : r.data) || void 0 === u
                                ? void 0
                                : u.success) && void 0 !== c
                            ? c
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.VoteOnQuestion = function (e, t, n, a) {
              var o, i, r, u, c;
              return Object(s.b)(this, void 0, void 0, function () {
                var m, v, _, b, A, Q, f, h;
                return Object(s.e)(this, function (S) {
                  switch (S.label) {
                    case 0:
                      if (
                        !p.i.logged_in ||
                        !p.c.SESSIONID ||
                        !(null === (o = this.m_mapQAndASessions.get(e)) ||
                        void 0 === o
                          ? void 0
                          : o.bUserCanAskQuestions)
                      )
                        return [2, 15];
                      if (n === this.m_mapQuestions.get(t).bUserUpVoted)
                        return [2, 1];
                      (m = this.m_mapQuestions.get(t)),
                        (v = m.nVoteCount + (n ? 1 : -1)),
                        (m = Object(s.a)(Object(s.a)({}, m), {
                          nVoteCount: v,
                          bUserUpVoted: n,
                        })),
                        this.m_mapQuestions.set(t, m),
                        this.GetQuestionCallbackList(t).Dispatch(m),
                        (_ =
                          p.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          p.b.VANITY_ID +
                          "/ajaxvoteforquestion/" +
                          e),
                        (b = new FormData()).append("sessionid", p.c.SESSIONID),
                        b.append("gidquestion", t),
                        b.append("up", n ? "1" : "0"),
                        (A = null),
                        (S.label = 1);
                    case 1:
                      return (
                        S.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.post(_, b, {
                            withCredentials: !0,
                            cancelToken: null == a ? void 0 : a.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (Q = S.sent()) ? void 0 : Q.status) &&
                        1 ==
                          (null === (i = Q.data) || void 0 === i
                            ? void 0
                            : i.success)
                        ? (!0, this.LoadSession(e, true, a), [2, 1])
                        : ((A = { response: Q }), [3, 4]);
                    case 3:
                      return (f = S.sent()), (A = f), [3, 4];
                    case 4:
                      return (
                        (h = Object(d.a)(A)),
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
                            (c =
                              null ===
                                (u =
                                  null ===
                                    (r = null == A ? void 0 : A.response) ||
                                  void 0 === r
                                    ? void 0
                                    : r.data) || void 0 === u
                                ? void 0
                                : u.success) && void 0 !== c
                            ? c
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
      var b = n("Mgs7"),
        A = n("BFsE"),
        Q = n("YLyR"),
        f = n("6Y59"),
        h = n("0OaU"),
        S = n("5E+2"),
        C = n("exH9"),
        g = n("TLQK"),
        E = n("hII0"),
        I = n.n(E);
      function q(e) {
        var t = e.gidSession,
          n = e.gidQuestion,
          s = e.bUserCanModerate,
          a = e.bUserCanVote,
          i = (function (e) {
            var t = o.a.useState(_.Get().GetQuestion(e)),
              n = t[0],
              s = t[1];
            Object(v.d)(_.Get().GetQuestionCallbackList(e), s);
            var a = o.a.useState(!!n),
              i = a[0];
            return a[1], [n, !!n || i];
          })(n),
          r = i[0],
          u =
            (i[1],
            (function (e, t) {
              var n,
                s = o.a.useCallback(
                  function (n) {
                    return _.Get().VoteOnQuestion(e, t, n);
                  },
                  [e, t]
                );
              return (
                (null === (n = _.Get().GetSession(e)) || void 0 === n
                  ? void 0
                  : n.bUserCanAskQuestions) && s
              );
            })(t, n)),
          l = a
            ? function () {
                return u(!r.bUserUpVoted);
              }
            : null,
          c = a
            ? r.bUserUpVoted
              ? I.a.Vote_Positive
              : I.a.Vote_Ready
            : I.a.Vote_CannotVote,
          d = Date.now() / 1e3 - r.rtPostTime,
          m = d < 86400 ? Object(g.q)(d, !1, !0) : Object(g.p)(r.rtPostTime);
        return !r || ((null == r ? void 0 : r.bHidden) && !s)
          ? null
          : o.a.createElement(
              "div",
              { className: Object(C.a)(I.a.Question, r.bHidden && I.a.Hidden) },
              o.a.createElement(
                "div",
                { className: I.a.QuestionCtn },
                o.a.createElement(w, { accountID: r.posterAccountID }),
                o.a.createElement(
                  "div",
                  { className: I.a.QuestionText },
                  o.a.createElement(
                    "div",
                    { className: I.a.QuestionTitle },
                    r.strQuestionText
                  ),
                  o.a.createElement(
                    "div",
                    { className: I.a.QuestionStats },
                    o.a.createElement(
                      "div",
                      { className: I.a.PostTime },
                      o.a.createElement(
                        Q.g,
                        {
                          rtFullDate: r.rtPostTime,
                          className: I.a.PostTime,
                          stylesmodule: I.a,
                        },
                        m
                      )
                    ),
                    o.a.createElement(
                      S.a,
                      {
                        toolTipContent: r.bUserUpVoted
                          ? Object(g.f)("#QAndA_VoteRemoveTooltip")
                          : Object(g.f)("#QAndA_VoteTooltip"),
                      },
                      o.a.createElement(
                        "div",
                        { className: Object(C.a)(c, I.a.Votes), onClick: l },
                        o.a.createElement(f.eb, { className: I.a.RateIcon }),
                        o.a.createElement(
                          "div",
                          { className: I.a.VoteCount },
                          Number(r.nVoteCount).toLocaleString()
                        )
                      )
                    )
                  )
                )
              ),
              2 == r.eState &&
                !!r.rtAnswerTime &&
                o.a.createElement(
                  "div",
                  { className: I.a.Answer },
                  o.a.createElement(
                    "div",
                    { className: I.a.AnswerTitle },
                    Object(g.f)("#QAndA_ModeratorAnswerTitle")
                  ),
                  o.a.createElement(
                    "div",
                    { className: I.a.AnswerText },
                    " ",
                    r.strAnswerText,
                    " "
                  ),
                  o.a.createElement(
                    "div",
                    { className: I.a.QuestionStats },
                    o.a.createElement(
                      Q.g,
                      {
                        rtFullDate: r.rtAnswerTime,
                        className: I.a.PostTime,
                        stylesmodule: I.a,
                      },
                      m
                    )
                  )
                ),
              s &&
                o.a.createElement(O, {
                  gidSession: t,
                  gidQuestion: n,
                  bHidden: r.bHidden,
                })
            );
      }
      function w(e) {
        var t = i.a.InitFromAccountID(e.accountID),
          n = Object(r.b)(t),
          s = (n[0], n[1]);
        return o.a.createElement(
          "div",
          { className: I.a.UserAvatar },
          !!s &&
            o.a.createElement("img", {
              src: s.avatar_url,
              "data-miniprofile": "s" + t.ConvertTo64BitString(),
            })
        );
      }
      function O(e) {
        var t = e.gidSession,
          n = e.gidQuestion,
          a = e.bHidden,
          i = (function (e, t) {
            var n,
              a = this,
              i = Object(c.a)("useQAndASession"),
              r = o.a.useCallback(
                function (n) {
                  return Object(s.b)(a, void 0, void 0, function () {
                    return Object(s.e)(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return [4, _.Get().AnswerQuestion(e, t, n, i)];
                        case 1:
                          return [2, s.sent()];
                      }
                    });
                  });
                },
                [e, t, i]
              ),
              u = o.a.useCallback(
                function (n) {
                  return Object(s.b)(a, void 0, void 0, function () {
                    return Object(s.e)(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return [4, _.Get().ModerateQuestion(e, t, n, i)];
                        case 1:
                          return [2, s.sent()];
                      }
                    });
                  });
                },
                [e, t, i]
              );
            return (
              null === (n = _.Get().GetSession(e)) || void 0 === n
                ? void 0
                : n.bUserCanModerate
            )
              ? [r, u]
              : [null, null];
          })(t, n),
          r = i[0],
          u = i[1];
        return o.a.createElement(
          "div",
          { className: I.a.ModeratorSection },
          o.a.createElement(
            "div",
            { className: I.a.ToolRow },
            o.a.createElement(N, {
              strPrompt: Object(g.f)("#QAndA_AnswerPrompt"),
              fnSubmit: r,
            })
          ),
          o.a.createElement(
            "div",
            { className: I.a.ToolRow },
            o.a.createElement(
              b.d,
              {
                onClick: function () {
                  return u(a ? 1 : 3);
                },
                className: I.a.InputButton,
              },
              Object(g.f)(
                a ? "#QAndA_ModerateApproveButton" : "#QAndA_ModerateHideButton"
              )
            )
          )
        );
      }
      function T(e) {
        var t = e.gidSession,
          n = (function (e) {
            var t = this,
              n = o.a.useState(_.Get().GetSession(e)),
              a = n[0],
              i = n[1];
            Object(v.d)(_.Get().GetQAndACallbackList(e), i);
            var r = o.a.useState(!!a),
              u = r[0],
              l = r[1],
              d = Object(c.a)("useQAndASession"),
              m = o.a.useCallback(
                function () {
                  l(!1),
                    _.Get()
                      .LoadSession(e, !1, d)
                      .finally(function () {
                        return l(!0);
                      });
                },
                [e, d]
              ),
              p = o.a.useCallback(
                function (n) {
                  return Object(s.b)(t, void 0, void 0, function () {
                    return Object(s.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, _.Get().AskNewQuestion(e, n, d)];
                        case 1:
                          return [2, t.sent()];
                      }
                    });
                  });
                },
                [e, d]
              );
            return (
              o.a.useEffect(
                function () {
                  m();
                },
                [m]
              ),
              [a, m, p, u]
            );
          })(t),
          a = n[0],
          i = n[1],
          r = n[2],
          u = n[3];
        return o.a.createElement(
          "div",
          { className: I.a.QAMainCtn },
          o.a.createElement(
            "div",
            { className: I.a.QAHeader },
            o.a.createElement(
              b.d,
              {
                onClick: i,
                disabled: !u,
                className: Object(C.a)(I.a.InputButton, I.a.Reload),
              },
              o.a.createElement(f.S, null)
            ),
            (null == a ? void 0 : a.bUserCanAskQuestions)
              ? o.a.createElement(k, { fnAskQuestion: r })
              : u && o.a.createElement(j, null)
          ),
          o.a.createElement(
            "div",
            { className: I.a.QuestionsCtn },
            o.a.createElement(
              "div",
              { className: I.a.InsetShadowTopCtn },
              o.a.createElement("div", { className: I.a.InsetShadowTop })
            ),
            o.a.createElement(
              "div",
              { className: I.a.QuestionList },
              u
                ? null == a
                  ? void 0
                  : a.rgQuestionGIDs.map(function (e) {
                      return o.a.createElement(q, {
                        key: e,
                        gidSession: t,
                        gidQuestion: e,
                        bUserCanModerate: a.bUserCanModerate,
                        bUserCanVote: a.bUserCanAskQuestions,
                      });
                    })
                : o.a.createElement(h.a, { position: "center" })
            )
          )
        );
      }
      function k(e) {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: I.a.Description },
            Object(g.f)("#QAndA_HeaderDescription")
          ),
          o.a.createElement(N, {
            strPrompt: Object(g.f)("#QAndA_QuestionPrompt"),
            fnSubmit: e.fnAskQuestion,
          })
        );
      }
      function N(e) {
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
            { className: I.a.InputCtn },
            o.a.createElement(b.l, {
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
              { className: I.a.ButtonCtn },
              c &&
                o.a.createElement(
                  "div",
                  { className: I.a.SaveSpinner },
                  o.a.createElement(h.a, { size: "small", position: "center" })
                ),
              o.a.createElement(
                b.d,
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
                  className: I.a.InputButton,
                },
                Object(g.f)("#QAndA_SubmitCommentButton")
              )
            )
          )
        );
      }
      function j(e) {
        return o.a.createElement(
          "div",
          { className: I.a.Description },
          o.a.createElement(
            "div",
            { className: I.a.LogInPrompt },
            Object(g.f)("#QAndA_LogInPrompt")
          ),
          !p.i.logged_in &&
            o.a.createElement(
              b.d,
              {
                onClick: A.a,
                className: Object(C.a)(I.a.SignInButton, I.a.InputButton),
              },
              Object(g.f)("#Login_SignIn")
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
    X2UP: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var s = n("vDqi"),
        a = n.n(s),
        o = n("q1tI"),
        i = n.n(o);
      function r(e) {
        var t = i.a.useRef(a.a.CancelToken.source());
        return (
          i.a.useEffect(
            function () {
              var n = t.current;
              return function () {
                return n.cancel(e ? e + ": unmounting" : "unmounting");
              };
            },
            [e]
          ),
          t.current
        );
      }
    },
    hII0: function (e, t, n) {
      e.exports = {
        QAMainCtn: "questions_QAMainCtn_hHqRc",
        InsetShadowTopCtn: "questions_InsetShadowTopCtn_ak9JV",
        InputButton: "questions_InputButton_1z1rt",
        Reload: "questions_Reload_3LIo4",
        SignInButton: "questions_SignInButton_GRHnX",
        QAHeader: "questions_QAHeader_3skHm",
        QATitleRow: "questions_QATitleRow_2qdcm",
        QATitle: "questions_QATitle_1c7nC",
        Description: "questions_Description_3eGNN",
        InputCtn: "questions_InputCtn_oF1kT",
        LogInPrompt: "questions_LogInPrompt_3Gbue",
        ButtonCtn: "questions_ButtonCtn_3kFHr",
        SaveSpinner: "questions_SaveSpinner_20svv",
        QuestionsCtn: "questions_QuestionsCtn_1W6uJ",
        InsetShadowTop: "questions_InsetShadowTop_1C2e4",
        QuestionsHeader: "questions_QuestionsHeader_jUQG9",
        QuestionsTitle: "questions_QuestionsTitle_2CYLB",
        QuestionList: "questions_QuestionList_28dwO",
        Question: "questions_Question_3BIOo",
        Hidden: "questions_Hidden_3XPCk",
        QuestionCtn: "questions_QuestionCtn_31sLy",
        UserAvatar: "questions_UserAvatar_2ojKe",
        QuestionText: "questions_QuestionText_2NuCE",
        QuestionTitle: "questions_QuestionTitle_2AXcH",
        QuestionStats: "questions_QuestionStats_1DzgV",
        PostTime: "questions_PostTime_2hfBu",
        Votes: "questions_Votes_2IyuQ",
        RateIcon: "questions_RateIcon_2j0Gw",
        Vote_CannotVote: "questions_Vote_CannotVote_2Pq4z",
        Vote_Ready: "questions_Vote_Ready_3_8_a",
        Vote_Positive: "questions_Vote_Positive_eWDCy",
        DateAndTime: "questions_DateAndTime_4VjnZ",
        Answer: "questions_Answer_wNABP",
        AnswerTitle: "questions_AnswerTitle_1c4mo",
        AnswerText: "questions_AnswerText_3ar8c",
        ModeratorSection: "questions_ModeratorSection_3tP54",
        ToolRow: "questions_ToolRow_2c2vo",
        ToolLabel: "questions_ToolLabel_3prTN",
      };
    },
  },
]);
