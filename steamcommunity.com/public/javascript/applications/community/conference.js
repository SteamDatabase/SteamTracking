/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "3sYe": function (e, t, r) {
      e.exports = {
        BroadcastChat: "broadcastchat_BroadcastChat_3URK7",
        ChatEntry: "broadcastchat_ChatEntry_3soy-",
        ChatPanel: "broadcastchat_ChatPanel_2ZCAI",
        ChatMessages: "broadcastchat_ChatMessages_3M5L0",
        EmoticonContainer: "broadcastchat_EmoticonContainer_1wa4o",
        ChatSend: "broadcastchat_ChatSend_3JUnD",
        ChatBox: "broadcastchat_ChatBox_2qfgS",
        ChatControls: "broadcastchat_ChatControls_1TekO",
        MessageChat: "broadcastchat_MessageChat_22PB4",
        MessageName: "broadcastchat_MessageName_BJe6C",
        MessageContents: "broadcastchat_MessageContents_PNYZa",
        EmoticonsOnly: "broadcastchat_EmoticonsOnly_gFjH8",
        MessageNotification: "broadcastchat_MessageNotification_3Xb4_",
        MessageError: "broadcastchat_MessageError_8MzyW",
        minHeightZero: "broadcastchat_minHeightZero_r7HLM",
        ChatLoginButton: "broadcastchat_ChatLoginButton_2TAQo",
        RateLimitProgressBarContainer:
          "broadcastchat_RateLimitProgressBarContainer_JPqUG",
        RateLimitProgressBar: "broadcastchat_RateLimitProgressBar_1EcVK",
        TimedProgressBarContainer:
          "broadcastchat_TimedProgressBarContainer_39xGj",
        wrapper: "broadcastchat_wrapper_2vz6R",
        pie: "broadcastchat_pie_1k4dS",
        spinner: "broadcastchat_spinner_3nRh5",
        rota: "broadcastchat_rota_1xXh6",
        filler: "broadcastchat_filler_3Eegk",
        fill: "broadcastchat_fill_2tyuX",
        mask: "broadcastchat_mask_1V4Ke",
        SelectedUserNameCtn: "broadcastchat_SelectedUserNameCtn_3K4QX",
        SelectedUserName: "broadcastchat_SelectedUserName_c907V",
        FlairContainer: "broadcastchat_FlairContainer_166wp",
        RoleFlairContainer: "broadcastchat_RoleFlairContainer_1QRJ2",
      };
    },
    "5STL": function (e, t, r) {
      e.exports = {
        ConferenceHome: "conferencepages_ConferenceHome_3tSqD",
        LeftCol: "conferencepages_LeftCol_19xFd",
        AgendaToggle: "conferencepages_AgendaToggle_1rjE0",
        CollapseBtn: "conferencepages_CollapseBtn_2RCNd",
        CalendarBtn: "conferencepages_CalendarBtn_22bby",
        MainCol: "conferencepages_MainCol_1qlkn",
        InteractionCtn: "conferencepages_InteractionCtn_39uHL",
        BroadcastCtn: "conferencepages_BroadcastCtn_240cu",
        videoContainerSizer: "conferencepages_videoContainerSizer_twsjQ",
        ChatColumn: "conferencepages_ChatColumn_2ldId",
        ChatTitle: "conferencepages_ChatTitle_3CjWm",
        QAColumn: "conferencepages_QAColumn_1RCLw",
        TabControlsCtn: "conferencepages_TabControlsCtn_1HJDD",
        Close: "conferencepages_Close_3cKbt",
        ShowBothTabs: "conferencepages_ShowBothTabs_fZBE8",
        ChatTab: "conferencepages_ChatTab_3WoUg",
        QATab: "conferencepages_QATab_1An5O",
        InnerChatTab: "conferencepages_InnerChatTab_1g3oa",
        Active: "conferencepages_Active_3PSCm",
        ChatStack: "conferencepages_ChatStack_1ogmv",
      };
    },
    "5znp": function (e, t, r) {
      e.exports = {
        FriendsListInsetShadowCtn:
          "insetshadow_FriendsListInsetShadowCtn_1qeW3",
        FriendListInsetShadowTop: "insetshadow_FriendListInsetShadowTop_1osHa",
        FriendListInsetShadowBottom:
          "insetshadow_FriendListInsetShadowBottom_2OoTJ",
      };
    },
    Cksw: function (e, t, r) {
      e.exports = {
        GraphicalAssetsTabs: "tabbar_GraphicalAssetsTabs_3oSHT",
        GraphicalAssetsTab: "tabbar_GraphicalAssetsTab_3lJb_",
        Active: "tabbar_Active_8XjrT",
        GraphicalAssetStatus: "tabbar_GraphicalAssetStatus_25U4F",
        VOWarning: "tabbar_VOWarning_3LaJy",
        StatusSuccess: "tabbar_StatusSuccess_1iIRV",
        StatusDanger: "tabbar_StatusDanger_UxdQK",
        StatusCaution: "tabbar_StatusCaution_E9t9j",
      };
    },
    JCps: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return O;
      });
      var n = r("mrSG"),
        i = r("q1tI"),
        a = r.n(i),
        o = r("kLLr"),
        s = r("Qcoi"),
        u = r("vDqi"),
        c = r.n(u),
        l = r("X2UP"),
        d = r("OS6B"),
        m = r("qiKp"),
        f = r("opsS"),
        p = r("lkRc"),
        b = (function () {
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
              for (var r = new Set(), n = 0, i = e; n < i.length; n++) {
                var a = i[n];
                r.add(
                  o.a
                    .InitFromAccountID(a.posterAccountID)
                    .ConvertTo64BitString()
                );
              }
              for (var u = Array.from(r); u.length > 0; ) {
                var c = u.splice(0, 500);
                s.a.LoadProfiles(c, t);
              }
            }),
            (e.prototype.LoadSession = function (e, t, r) {
              var i, a, o, s, u, l, m, f, b, B, h, y;
              return Object(n.b)(this, void 0, void 0, function () {
                var _, g, v, S, w, M, z, C, R, F, O, j, T, W, I, U, A, E;
                return Object(n.e)(this, function (N) {
                  switch (N.label) {
                    case 0:
                      (_ =
                        p.i.logged_in &&
                        (t ||
                          !this.m_mapQAndASessions.has(e) ||
                          this.m_mapQAndASessions.get(e).bUserCanModerate)),
                        (g = _
                          ? "/ajaxgetqandasessionforuser/"
                          : "/ajaxgetqandasession/"),
                        (v =
                          p.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          p.b.VANITY_ID +
                          g +
                          e),
                        (S = {}),
                        (w = null),
                        (N.label = 1);
                    case 1:
                      return (
                        N.trys.push([1, 3, , 4]),
                        [
                          4,
                          c.a.get(v, {
                            params: S,
                            cancelToken: null == r ? void 0 : r.token,
                          }),
                        ]
                      );
                    case 2:
                      if (
                        200 == (null == (M = N.sent()) ? void 0 : M.status) &&
                        1 ==
                          (null === (i = M.data) || void 0 === i
                            ? void 0
                            : i.success) &&
                        M.data.qanda &&
                        M.data.questions
                      ) {
                        for (
                          this.PreloadPosterProfiles(M.data.questions, r),
                            z = 0,
                            C = M.data.questions;
                          z < C.length;
                          z++
                        )
                          (R = C[z]),
                            (F = R.gidQuestion),
                            (O =
                              null !==
                                (o =
                                  null === (a = this.m_mapQuestions.get(F)) ||
                                  void 0 === a
                                    ? void 0
                                    : a.bUserUpVoted) && void 0 !== o
                                ? o
                                : R.bUserUpVoted),
                            (j =
                              null !==
                                (u =
                                  null === (s = this.m_mapQuestions.get(F)) ||
                                  void 0 === s
                                    ? void 0
                                    : s.bHidden) && void 0 !== u
                                ? u
                                : R.bHidden),
                            (T = Object(n.a)(Object(n.a)({}, R), {
                              bUserUpVoted: O,
                              bHidden: j,
                            })),
                            this.m_mapQuestions.set(F, T),
                            this.GetQuestionCallbackList(F).Dispatch(T);
                        return (
                          (W =
                            null !==
                              (m =
                                null === (l = this.m_mapQAndASessions.get(e)) ||
                                void 0 === l
                                  ? void 0
                                  : l.bUserCanModerate) && void 0 !== m
                              ? m
                              : M.data.qanda.bUserCanModerate),
                          (I =
                            null !==
                              (b =
                                null === (f = this.m_mapQAndASessions.get(e)) ||
                                void 0 === f
                                  ? void 0
                                  : f.bUserCanAskQuestions) && void 0 !== b
                              ? b
                              : M.data.qanda.bUserCanAskQuestions),
                          (U = Object(n.a)(Object(n.a)({}, M.data.qanda), {
                            bUserCanModerate: W,
                            bUserCanAskQuestions: I,
                          })),
                          this.m_mapQAndASessions.set(e, U),
                          this.GetQAndACallbackList(e).Dispatch(U),
                          [2, 1]
                        );
                      }
                      return (w = { response: M }), [3, 4];
                    case 3:
                      return (A = N.sent()), (w = A), [3, 4];
                    case 4:
                      return (
                        (E = Object(d.a)(w)),
                        console.error(
                          "Could not load Q&A",
                          e,
                          E.strErrorMsg,
                          E
                        ),
                        [
                          2,
                          null !==
                            (y =
                              null ===
                                (h =
                                  null ===
                                    (B = null == w ? void 0 : w.response) ||
                                  void 0 === B
                                    ? void 0
                                    : B.data) || void 0 === h
                                ? void 0
                                : h.success) && void 0 !== y
                            ? y
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.AskNewQuestion = function (e, t, r) {
              var i, a, o, s, u;
              return Object(n.b)(this, void 0, void 0, function () {
                var l, m, f, b, B, h;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (
                        !p.i.logged_in ||
                        !p.c.SESSIONID ||
                        !(null === (i = this.m_mapQAndASessions.get(e)) ||
                        void 0 === i
                          ? void 0
                          : i.bUserCanAskQuestions)
                      )
                        return [2, 15];
                      (l =
                        p.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        p.b.VANITY_ID +
                        "/ajaxaskquestion/" +
                        e),
                        (m = new FormData()).append("sessionid", p.c.SESSIONID),
                        m.append("question", t),
                        (f = null),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          c.a.post(l, m, {
                            withCredentials: !0,
                            cancelToken: null == r ? void 0 : r.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (b = n.sent()) ? void 0 : b.status) &&
                        1 ==
                          (null === (a = b.data) || void 0 === a
                            ? void 0
                            : a.success)
                        ? (!0, this.LoadSession(e, true, r), [2, 1])
                        : ((f = { response: b }), [3, 4]);
                    case 3:
                      return (B = n.sent()), (f = B), [3, 4];
                    case 4:
                      return (
                        (h = Object(d.a)(f)),
                        console.error(
                          "Could not upload question",
                          e,
                          t,
                          h.strErrorMsg,
                          h
                        ),
                        [
                          2,
                          null !==
                            (u =
                              null ===
                                (s =
                                  null ===
                                    (o = null == f ? void 0 : f.response) ||
                                  void 0 === o
                                    ? void 0
                                    : o.data) || void 0 === s
                                ? void 0
                                : s.success) && void 0 !== u
                            ? u
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.ModerateQuestion = function (e, t, r, i) {
              var a, o, s, u, l;
              return Object(n.b)(this, void 0, void 0, function () {
                var m, f, b, B, h, y, _, g;
                return Object(n.e)(this, function (v) {
                  switch (v.label) {
                    case 0:
                      if (
                        !p.i.logged_in ||
                        !p.c.SESSIONID ||
                        !(null === (a = this.m_mapQAndASessions.get(e)) ||
                        void 0 === a
                          ? void 0
                          : a.bUserCanModerate)
                      )
                        return [2, 15];
                      if (1 != r && 3 != r) return [2, 8];
                      if (
                        ((m = this.m_mapQuestions.get(t)),
                        (f = 3 == r) === m.bHidden)
                      )
                        return [2, 1];
                      (m = Object(n.a)(Object(n.a)({}, m), { bHidden: f })),
                        this.m_mapQuestions.set(t, m),
                        this.GetQuestionCallbackList(t).Dispatch(m),
                        (b =
                          p.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          p.b.VANITY_ID +
                          "/ajaxmoderatequestion/" +
                          e),
                        (B = new FormData()).append("sessionid", p.c.SESSIONID),
                        B.append("gidquestion", t),
                        B.append("action", f ? "hide" : "show"),
                        (h = null),
                        (v.label = 1);
                    case 1:
                      return (
                        v.trys.push([1, 3, , 4]),
                        [
                          4,
                          c.a.post(b, B, {
                            withCredentials: !0,
                            cancelToken: null == i ? void 0 : i.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (y = v.sent()) ? void 0 : y.status) &&
                        1 ==
                          (null === (o = y.data) || void 0 === o
                            ? void 0
                            : o.success)
                        ? (!0, this.LoadSession(e, true, i), [2, 1])
                        : ((h = { response: y }), [3, 4]);
                    case 3:
                      return (_ = v.sent()), (h = _), [3, 4];
                    case 4:
                      return (
                        (g = Object(d.a)(h)),
                        console.error(
                          "Could not moderate question",
                          e,
                          t,
                          r,
                          g.strErrorMsg,
                          g
                        ),
                        [
                          2,
                          null !==
                            (l =
                              null ===
                                (u =
                                  null ===
                                    (s = null == h ? void 0 : h.response) ||
                                  void 0 === s
                                    ? void 0
                                    : s.data) || void 0 === u
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
            (e.prototype.AnswerQuestion = function (e, t, r, i) {
              var a, o, s, u, l;
              return Object(n.b)(this, void 0, void 0, function () {
                var m, f, b, B, h, y;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (
                        !p.i.logged_in ||
                        !p.c.SESSIONID ||
                        !(null === (a = this.m_mapQAndASessions.get(e)) ||
                        void 0 === a
                          ? void 0
                          : a.bUserCanModerate)
                      )
                        return [2, 15];
                      (m =
                        p.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        p.b.VANITY_ID +
                        "/ajaxanswerquestion/" +
                        e),
                        (f = new FormData()).append("sessionid", p.c.SESSIONID),
                        f.append("gidquestion", t),
                        f.append("answer", r),
                        (b = null),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          c.a.post(m, f, {
                            withCredentials: !0,
                            cancelToken: null == i ? void 0 : i.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (B = n.sent()) ? void 0 : B.status) &&
                        1 ==
                          (null === (o = B.data) || void 0 === o
                            ? void 0
                            : o.success)
                        ? (!0, this.LoadSession(e, true, i), [2, 1])
                        : ((b = { response: B }), [3, 4]);
                    case 3:
                      return (h = n.sent()), (b = h), [3, 4];
                    case 4:
                      return (
                        (y = Object(d.a)(b)),
                        console.error(
                          "Could not upload answer",
                          e,
                          t,
                          r,
                          y.strErrorMsg,
                          y
                        ),
                        [
                          2,
                          null !==
                            (l =
                              null ===
                                (u =
                                  null ===
                                    (s = null == b ? void 0 : b.response) ||
                                  void 0 === s
                                    ? void 0
                                    : s.data) || void 0 === u
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
            (e.prototype.VoteOnQuestion = function (e, t, r, i) {
              var a, o, s, u, l;
              return Object(n.b)(this, void 0, void 0, function () {
                var m, f, b, B, h, y, _, g;
                return Object(n.e)(this, function (v) {
                  switch (v.label) {
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
                      if (r === this.m_mapQuestions.get(t).bUserUpVoted)
                        return [2, 1];
                      (m = this.m_mapQuestions.get(t)),
                        (f = m.nVoteCount + (r ? 1 : -1)),
                        (m = Object(n.a)(Object(n.a)({}, m), {
                          nVoteCount: f,
                          bUserUpVoted: r,
                        })),
                        this.m_mapQuestions.set(t, m),
                        this.GetQuestionCallbackList(t).Dispatch(m),
                        (b =
                          p.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          p.b.VANITY_ID +
                          "/ajaxvoteforquestion/" +
                          e),
                        (B = new FormData()).append("sessionid", p.c.SESSIONID),
                        B.append("gidquestion", t),
                        B.append("up", r ? "1" : "0"),
                        (h = null),
                        (v.label = 1);
                    case 1:
                      return (
                        v.trys.push([1, 3, , 4]),
                        [
                          4,
                          c.a.post(b, B, {
                            withCredentials: !0,
                            cancelToken: null == i ? void 0 : i.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (y = v.sent()) ? void 0 : y.status) &&
                        1 ==
                          (null === (o = y.data) || void 0 === o
                            ? void 0
                            : o.success)
                        ? (!0, this.LoadSession(e, true, i), [2, 1])
                        : ((h = { response: y }), [3, 4]);
                    case 3:
                      return (_ = v.sent()), (h = _), [3, 4];
                    case 4:
                      return (
                        (g = Object(d.a)(h)),
                        console.error(
                          "Could not upload vote",
                          e,
                          t,
                          r,
                          g.strErrorMsg,
                          g
                        ),
                        [
                          2,
                          null !==
                            (l =
                              null ===
                                (u =
                                  null ===
                                    (s = null == h ? void 0 : h.response) ||
                                  void 0 === s
                                    ? void 0
                                    : s.data) || void 0 === u
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
      var B = r("Mgs7"),
        h = r("BFsE"),
        y = r("YLyR"),
        _ = r("6Y59"),
        g = r("0OaU"),
        v = r("5E+2"),
        S = r("exH9"),
        w = r("TLQK"),
        M = r("hII0"),
        z = r.n(M);
      function C(e) {
        var t = e.gidSession,
          r = e.gidQuestion,
          n = e.bUserCanModerate,
          i = e.bUserCanVote,
          o = (function (e) {
            var t = a.a.useState(b.Get().GetQuestion(e)),
              r = t[0],
              n = t[1];
            Object(f.d)(b.Get().GetQuestionCallbackList(e), n);
            var i = a.a.useState(!!r),
              o = i[0];
            return i[1], [r, !!r || o];
          })(r),
          s = o[0],
          u =
            (o[1],
            (function (e, t) {
              var r,
                n = a.a.useCallback(
                  function (r) {
                    return b.Get().VoteOnQuestion(e, t, r);
                  },
                  [e, t]
                );
              return (
                (null === (r = b.Get().GetSession(e)) || void 0 === r
                  ? void 0
                  : r.bUserCanAskQuestions) && n
              );
            })(t, r)),
          c = i
            ? function () {
                return u(!s.bUserUpVoted);
              }
            : null,
          l = i
            ? s.bUserUpVoted
              ? z.a.Vote_Positive
              : z.a.Vote_Ready
            : z.a.Vote_CannotVote,
          d = Date.now() / 1e3 - s.rtPostTime,
          m = d < 86400 ? Object(w.q)(d, !1, !0) : Object(w.p)(s.rtPostTime);
        return !s || ((null == s ? void 0 : s.bHidden) && !n)
          ? null
          : a.a.createElement(
              "div",
              { className: Object(S.a)(z.a.Question, s.bHidden && z.a.Hidden) },
              a.a.createElement(
                "div",
                { className: z.a.QuestionCtn },
                a.a.createElement(R, { accountID: s.posterAccountID }),
                a.a.createElement(
                  "div",
                  { className: z.a.QuestionText },
                  a.a.createElement(
                    "div",
                    { className: z.a.QuestionTitle },
                    s.strQuestionText
                  ),
                  a.a.createElement(
                    "div",
                    { className: z.a.QuestionStats },
                    a.a.createElement(
                      "div",
                      { className: z.a.PostTime },
                      a.a.createElement(
                        y.g,
                        {
                          rtFullDate: s.rtPostTime,
                          className: z.a.PostTime,
                          stylesmodule: z.a,
                        },
                        m
                      )
                    ),
                    a.a.createElement(
                      v.a,
                      {
                        toolTipContent: s.bUserUpVoted
                          ? Object(w.f)("#QAndA_VoteRemoveTooltip")
                          : Object(w.f)("#QAndA_VoteTooltip"),
                      },
                      a.a.createElement(
                        "div",
                        { className: Object(S.a)(l, z.a.Votes), onClick: c },
                        a.a.createElement(_.eb, { className: z.a.RateIcon }),
                        a.a.createElement(
                          "div",
                          { className: z.a.VoteCount },
                          Number(s.nVoteCount).toLocaleString()
                        )
                      )
                    )
                  )
                )
              ),
              2 == s.eState &&
                !!s.rtAnswerTime &&
                a.a.createElement(
                  "div",
                  { className: z.a.Answer },
                  a.a.createElement(
                    "div",
                    { className: z.a.AnswerTitle },
                    Object(w.f)("#QAndA_ModeratorAnswerTitle")
                  ),
                  a.a.createElement(
                    "div",
                    { className: z.a.AnswerText },
                    " ",
                    s.strAnswerText,
                    " "
                  ),
                  a.a.createElement(
                    "div",
                    { className: z.a.QuestionStats },
                    a.a.createElement(
                      y.g,
                      {
                        rtFullDate: s.rtAnswerTime,
                        className: z.a.PostTime,
                        stylesmodule: z.a,
                      },
                      m
                    )
                  )
                ),
              n &&
                a.a.createElement(F, {
                  gidSession: t,
                  gidQuestion: r,
                  bHidden: s.bHidden,
                })
            );
      }
      function R(e) {
        var t = o.a.InitFromAccountID(e.accountID),
          r = Object(s.b)(t),
          n = (r[0], r[1]);
        return a.a.createElement(
          "div",
          { className: z.a.UserAvatar },
          !!n &&
            a.a.createElement("img", {
              src: n.avatar_url,
              "data-miniprofile": "s" + t.ConvertTo64BitString(),
            })
        );
      }
      function F(e) {
        var t = e.gidSession,
          r = e.gidQuestion,
          i = e.bHidden,
          o = (function (e, t) {
            var r,
              i = this,
              o = Object(l.a)("useQAndASession"),
              s = a.a.useCallback(
                function (r) {
                  return Object(n.b)(i, void 0, void 0, function () {
                    return Object(n.e)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, b.Get().AnswerQuestion(e, t, r, o)];
                        case 1:
                          return [2, n.sent()];
                      }
                    });
                  });
                },
                [e, t, o]
              ),
              u = a.a.useCallback(
                function (r) {
                  return Object(n.b)(i, void 0, void 0, function () {
                    return Object(n.e)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, b.Get().ModerateQuestion(e, t, r, o)];
                        case 1:
                          return [2, n.sent()];
                      }
                    });
                  });
                },
                [e, t, o]
              );
            return (
              null === (r = b.Get().GetSession(e)) || void 0 === r
                ? void 0
                : r.bUserCanModerate
            )
              ? [s, u]
              : [null, null];
          })(t, r),
          s = o[0],
          u = o[1];
        return a.a.createElement(
          "div",
          { className: z.a.ModeratorSection },
          a.a.createElement(
            "div",
            { className: z.a.ToolRow },
            a.a.createElement(T, {
              strPrompt: Object(w.f)("#QAndA_AnswerPrompt"),
              fnSubmit: s,
            })
          ),
          a.a.createElement(
            "div",
            { className: z.a.ToolRow },
            a.a.createElement(
              B.d,
              {
                onClick: function () {
                  return u(i ? 1 : 3);
                },
                className: z.a.InputButton,
              },
              Object(w.f)(
                i ? "#QAndA_ModerateApproveButton" : "#QAndA_ModerateHideButton"
              )
            )
          )
        );
      }
      function O(e) {
        var t = e.gidSession,
          r = (function (e) {
            var t = this,
              r = a.a.useState(b.Get().GetSession(e)),
              i = r[0],
              o = r[1];
            Object(f.d)(b.Get().GetQAndACallbackList(e), o);
            var s = a.a.useState(!!i),
              u = s[0],
              c = s[1],
              d = Object(l.a)("useQAndASession"),
              m = a.a.useCallback(
                function () {
                  c(!1),
                    b
                      .Get()
                      .LoadSession(e, !1, d)
                      .finally(function () {
                        return c(!0);
                      });
                },
                [e, d]
              ),
              p = a.a.useCallback(
                function (r) {
                  return Object(n.b)(t, void 0, void 0, function () {
                    return Object(n.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, b.Get().AskNewQuestion(e, r, d)];
                        case 1:
                          return [2, t.sent()];
                      }
                    });
                  });
                },
                [e, d]
              );
            return (
              a.a.useEffect(
                function () {
                  m();
                },
                [m]
              ),
              [i, m, p, u]
            );
          })(t),
          i = r[0],
          o = r[1],
          s = r[2],
          u = r[3];
        return a.a.createElement(
          "div",
          { className: z.a.QAMainCtn },
          a.a.createElement(
            "div",
            { className: z.a.QAHeader },
            a.a.createElement(
              B.d,
              {
                onClick: o,
                disabled: !u,
                className: Object(S.a)(z.a.InputButton, z.a.Reload),
              },
              a.a.createElement(_.S, null)
            ),
            (null == i ? void 0 : i.bUserCanAskQuestions)
              ? a.a.createElement(j, { fnAskQuestion: s })
              : u && a.a.createElement(W, null)
          ),
          a.a.createElement(
            "div",
            { className: z.a.QuestionsCtn },
            a.a.createElement(
              "div",
              { className: z.a.InsetShadowTopCtn },
              a.a.createElement("div", { className: z.a.InsetShadowTop })
            ),
            a.a.createElement(
              "div",
              { className: z.a.QuestionList },
              u
                ? null == i
                  ? void 0
                  : i.rgQuestionGIDs.map(function (e) {
                      return a.a.createElement(C, {
                        key: e,
                        gidSession: t,
                        gidQuestion: e,
                        bUserCanModerate: i.bUserCanModerate,
                        bUserCanVote: i.bUserCanAskQuestions,
                      });
                    })
                : a.a.createElement(g.a, { position: "center" })
            )
          )
        );
      }
      function j(e) {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            "div",
            { className: z.a.Description },
            Object(w.f)("#QAndA_HeaderDescription")
          ),
          a.a.createElement(T, {
            strPrompt: Object(w.f)("#QAndA_QuestionPrompt"),
            fnSubmit: e.fnAskQuestion,
          })
        );
      }
      function T(e) {
        var t = this,
          r = e.strPrompt,
          i = e.fnSubmit,
          o = a.a.useState(""),
          s = o[0],
          u = o[1],
          c = a.a.useState(!1),
          l = c[0],
          d = c[1];
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            "div",
            { className: z.a.InputCtn },
            a.a.createElement(B.l, {
              type: "text",
              placeholder: r,
              maxLength: 512,
              value: s,
              onChange: function (e) {
                return u(e.target.value);
              },
            }),
            a.a.createElement(
              "div",
              { className: z.a.ButtonCtn },
              l &&
                a.a.createElement(
                  "div",
                  { className: z.a.SaveSpinner },
                  a.a.createElement(g.a, { size: "small", position: "center" })
                ),
              a.a.createElement(
                B.d,
                {
                  onClick: function () {
                    return Object(n.b)(t, void 0, void 0, function () {
                      return Object(n.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return d(!0), [4, i(s)];
                          case 1:
                            return 1 == e.sent() && u(""), d(!1), [2];
                        }
                      });
                    });
                  },
                  disabled: l || !s,
                  className: z.a.InputButton,
                },
                Object(w.f)("#QAndA_SubmitCommentButton")
              )
            )
          )
        );
      }
      function W(e) {
        return a.a.createElement(
          "div",
          { className: z.a.Description },
          a.a.createElement(
            "div",
            { className: z.a.LogInPrompt },
            Object(w.f)("#QAndA_LogInPrompt")
          ),
          !p.i.logged_in &&
            a.a.createElement(
              B.d,
              {
                onClick: h.a,
                className: Object(S.a)(z.a.SignInButton, z.a.InputButton),
              },
              Object(w.f)("#Login_SignIn")
            )
        );
      }
    },
    JsZI: function (e, t, r) {
      e.exports = {
        UpcomingEventsCtn: "conferenceevents_UpcomingEventsCtn_2bWup",
        SectionTitle: "conferenceevents_SectionTitle_7MpRs",
        EventSchedCtn: "conferenceevents_EventSchedCtn_Tn2Ur",
        EventItemCtn: "conferenceevents_EventItemCtn_z6qIM",
        Title: "conferenceevents_Title_2EqgH",
        SessionTime: "conferenceevents_SessionTime__Ikar",
        ActiveEventCtn: "conferenceevents_ActiveEventCtn_2lP0C",
        LiveNote: "conferenceevents_LiveNote_3zSJm",
        LiveIcon: "conferenceevents_LiveIcon_38GJh",
        EventDescription: "conferenceevents_EventDescription_3hKDo",
        EventsScheduleCtn: "conferenceevents_EventsScheduleCtn_33-47",
        ReminderContainer: "conferenceevents_ReminderContainer_2vLZT",
        OnlyIcon: "conferenceevents_OnlyIcon_3fZIS",
        PastEventsCtn: "conferenceevents_PastEventsCtn_3pfjF",
      };
    },
    Lfwj: function (e, t, r) {
      e.exports = {
        BroadcastChatCtn: "conferencebroadcast_BroadcastChatCtn_28b1v",
      };
    },
    N2vu: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return $;
      }),
        r.d(t, "c", function () {
          return Z;
        }),
        r.d(t, "b", function () {
          return ee;
        }),
        r.d(t, "h", function () {
          return te;
        }),
        r.d(t, "d", function () {
          return re;
        }),
        r.d(t, "f", function () {
          return ne;
        }),
        r.d(t, "e", function () {
          return ie;
        }),
        r.d(t, "g", function () {
          return ae;
        });
      var n,
        i = r("mrSG"),
        a = r("vDqi"),
        o = r.n(a),
        s = r("2lpH"),
        u = r.n(s),
        c = r("2vnA"),
        l = r("q1tI"),
        d = r.n(l),
        m = r("kyHq"),
        f = r("bxBv"),
        p = r("r64O"),
        b = r("XxJJ"),
        B = r("OS6B"),
        h = r("lkRc"),
        y = (function () {
          function e(e, t) {
            (this.m_summary = e),
              (this.m_mapStoredDrafts = t),
              (this.m_mapLocalUpdates = new Map());
            for (var r = 0; r < 30; r++) this.m_mapLocalUpdates.set(r, {});
          }
          return (
            (e.prototype.BNeedsSaving = function (e) {
              if (void 0 !== e) {
                var t = this.m_mapLocalUpdates.get(e);
                return !!t.strTitle || !!t.strContent;
              }
              return Array.from(this.m_mapLocalUpdates.values()).some(function (
                e
              ) {
                return !!e.strTitle || !!e.strContent;
              });
            }),
            (e.prototype.SaveDrafts = function () {
              var e, t, r, n;
              return Object(i.b)(this, void 0, void 0, function () {
                var a,
                  o,
                  s,
                  u,
                  l,
                  d = this;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      for (
                        Object(p.a)(
                          Boolean(
                            null === (e = this.m_summary) || void 0 === e
                              ? void 0
                              : e.faq_id
                          ),
                          "Attempting to save when we lack a FaqID in the summary object"
                        ),
                          a = 1,
                          o = new Array(),
                          s = function (e) {
                            if (
                              (u.m_mapLocalUpdates.get(e).strTitle &&
                                u.m_mapLocalUpdates.get(e).strTitle !==
                                  (null === (t = u.m_mapStoredDrafts.get(e)) ||
                                  void 0 === t
                                    ? void 0
                                    : t.title)) ||
                              (u.m_mapLocalUpdates.get(e).strContent &&
                                u.m_mapLocalUpdates.get(e).strContent !==
                                  (null === (r = u.m_mapStoredDrafts.get(e)) ||
                                  void 0 === r
                                    ? void 0
                                    : r.content))
                            ) {
                              var i = u.GetDraftTitle(e),
                                s = u.GetDraftContent(e),
                                l = $.Get().UpdateDraft(
                                  null === (n = u.m_summary) || void 0 === n
                                    ? void 0
                                    : n.faq_id,
                                  e,
                                  i,
                                  s
                                );
                              l
                                .then(function (t) {
                                  1 == t.eResult
                                    ? Object(c.G)(function () {
                                        d.m_mapStoredDrafts.has(e) ||
                                          d.m_mapStoredDrafts.set(e, {}),
                                          (d.m_mapStoredDrafts.get(
                                            e
                                          ).title = i),
                                          (d.m_mapStoredDrafts.get(
                                            e
                                          ).content = s),
                                          (d.m_mapStoredDrafts.get(
                                            e
                                          ).timestamp = t.rtUpdateTime),
                                          (d.m_mapStoredDrafts.get(
                                            e
                                          ).author_account_id = h.i.accountid.toString()),
                                          (d.m_mapLocalUpdates.get(
                                            e
                                          ).strTitle = null),
                                          (d.m_mapLocalUpdates.get(
                                            e
                                          ).strContent = null);
                                        var r = !1;
                                        d.m_summary.per_language_info.forEach(
                                          function (n) {
                                            e == n.language &&
                                              ((r = !0),
                                              (n.last_update_timestamp = Math.max(
                                                n.last_update_timestamp,
                                                t.rtUpdateTime
                                              )));
                                          }
                                        ),
                                          r ||
                                            d.m_summary.per_language_info.push({
                                              language: e,
                                              last_update_timestamp:
                                                t.rtUpdateTime,
                                            });
                                      })
                                    : 1 == a &&
                                      (console.error(
                                        "FAQModel.SaveDraft: Response not ok " +
                                          t.eResult,
                                        t
                                      ),
                                      (a = t.eResult));
                                })
                                .catch(function (e) {
                                  console.error(
                                    "FAQModel.SaveDrafts: Hit error " +
                                      Object(B.a)(e).strErrorMsg
                                  ),
                                    1 == a && (a = 2);
                                }),
                                o.push(l);
                            }
                          },
                          u = this,
                          l = 0;
                        l < 30;
                        ++l
                      )
                        s(l);
                      return [4, Promise.all(o)];
                    case 1:
                      return i.sent(), [2, a];
                  }
                });
              });
            }),
            (e.prototype.GetFAQInternalName = function () {
              var e;
              return null === (e = this.m_summary) || void 0 === e
                ? void 0
                : e.internal_name;
            }),
            (e.prototype.GetDraftTitle = function (e) {
              var t;
              return null !== this.m_mapLocalUpdates.get(e).strTitle &&
                void 0 !== this.m_mapLocalUpdates.get(e).strTitle
                ? this.m_mapLocalUpdates.get(e).strTitle
                : null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
                ? void 0
                : t.title;
            }),
            (e.prototype.GetDraftContent = function (e) {
              var t;
              return null !== this.m_mapLocalUpdates.get(e).strContent &&
                void 0 !== this.m_mapLocalUpdates.get(e).strContent
                ? this.m_mapLocalUpdates.get(e).strContent
                : null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
                ? void 0
                : t.content;
            }),
            (e.prototype.GetDraftTitleWithFallback = function (e, t) {
              var r, n, i, a, o, s;
              void 0 === t && (t = m.f.k_ESteamRealmGlobal);
              var u = t == m.f.k_ESteamRealmChina ? 6 : 0;
              return null !==
                (s =
                  null !==
                    (a =
                      null !==
                        (n =
                          null !==
                            (r = this.m_mapLocalUpdates.get(e).strTitle) &&
                          void 0 !== r
                            ? r
                            : this.m_mapLocalUpdates.get(u).strTitle) &&
                      void 0 !== n
                        ? n
                        : null === (i = this.m_mapStoredDrafts.get(e)) ||
                          void 0 === i
                        ? void 0
                        : i.title) && void 0 !== a
                    ? a
                    : null === (o = this.m_mapStoredDrafts.get(u)) ||
                      void 0 === o
                    ? void 0
                    : o.title) && void 0 !== s
                ? s
                : "";
            }),
            (e.prototype.GetDraftContentWithFallback = function (e, t) {
              var r, n, i, a, o, s;
              void 0 === t && (t = m.f.k_ESteamRealmGlobal);
              var u = t == m.f.k_ESteamRealmChina ? 6 : 0;
              return null !==
                (s =
                  null !==
                    (a =
                      null !==
                        (n =
                          null !==
                            (r = this.m_mapLocalUpdates.get(e).strContent) &&
                          void 0 !== r
                            ? r
                            : this.m_mapLocalUpdates.get(u).strContent) &&
                      void 0 !== n
                        ? n
                        : null === (i = this.m_mapStoredDrafts.get(e)) ||
                          void 0 === i
                        ? void 0
                        : i.content) && void 0 !== a
                    ? a
                    : null === (o = this.m_mapStoredDrafts.get(u)) ||
                      void 0 === o
                    ? void 0
                    : o.content) && void 0 !== s
                ? s
                : "";
            }),
            (e.prototype.GetLastSavedDraftVersion = function (e) {
              return this.m_mapStoredDrafts.get(e);
            }),
            (e.prototype.BHasSomeTextForLanguage = function (e) {
              return Boolean(this.GetDraftContent(e) || this.GetDraftTitle(e));
            }),
            (e.prototype.SetDraftTitle = function (e, t) {
              var r;
              t ===
              (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
                ? void 0
                : r.title)
                ? (this.m_mapLocalUpdates.get(e).strTitle = null)
                : (this.m_mapLocalUpdates.get(e).strTitle = t);
            }),
            (e.prototype.SetDraftContent = function (e, t) {
              var r;
              t ===
              (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
                ? void 0
                : r.content)
                ? (this.m_mapLocalUpdates.get(e).strContent = null)
                : (this.m_mapLocalUpdates.get(e).strContent = t);
            }),
            (e.prototype.GetIncludedRealmList = function () {
              var e = new Array();
              return (
                this.m_summary.visible_in_global_realm &&
                  e.push(m.f.k_ESteamRealmGlobal),
                this.m_summary.visible_in_global_realm &&
                  e.push(m.f.k_ESteamRealmChina),
                0 == e.length && e.push(m.f.k_ESteamRealmGlobal),
                Object(p.a)(
                  e.length > 0,
                  "FAQ " +
                    this.m_summary.faq_id +
                    " is currently configured so that no realms are valid for display."
                ),
                e
              );
            }),
            (e.prototype.BHasPublished = function () {
              return Boolean(
                this.m_summary.per_language_info.some(function (e) {
                  return !!e.last_publish_timestamp;
                })
              );
            }),
            (e.prototype.GetLastTimeLanguageUpdated = function (e) {
              var t, r;
              return null !==
                (r =
                  null === (t = this.GetLastSavedDraftVersion(e)) ||
                  void 0 === t
                    ? void 0
                    : t.timestamp) && void 0 !== r
                ? r
                : 0;
            }),
            (e.prototype.GetFAQID = function () {
              return this.m_summary.faq_id;
            }),
            (e.prototype.GetSummary = function () {
              return this.m_summary;
            }),
            Object(i.c)([c.C], e.prototype, "m_mapLocalUpdates", void 0),
            Object(i.c)([b.a], e.prototype, "BHasSomeTextForLanguage", null),
            Object(i.c)([b.a], e.prototype, "GetLastTimeLanguageUpdated", null),
            e
          );
        })(),
        _ = r("WBba"),
        g = r("hRO2"),
        v = r("OS8t"),
        S = g.Message,
        w = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faq_id || v.a(t.M()),
              S.initialize(n, r, 0, -1, [6], null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: v.d.readBool,
                        bw: v.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: v.d.readBool,
                        bw: v.h.writeBool,
                      },
                      json_data: {
                        n: 5,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                      per_language_info: { n: 6, c: M, r: !0, q: !0 },
                      url_code: {
                        n: 7,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQSummary";
            }),
            t
          );
        })(S),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.language || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      language: {
                        n: 1,
                        br: v.d.readUint32,
                        bw: v.h.writeUint32,
                      },
                      last_update_timestamp: {
                        n: 2,
                        br: v.d.readFixed32,
                        bw: v.h.writeFixed32,
                      },
                      last_publish_timestamp: {
                        n: 3,
                        br: v.d.readFixed32,
                        bw: v.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQSummary_CLanguageInfo";
            }),
            t
          );
        })(S),
        z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faq_id || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      language: {
                        n: 2,
                        br: v.d.readUint32,
                        bw: v.h.writeUint32,
                      },
                      version: {
                        n: 3,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      content: {
                        n: 4,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                      title: { n: 5, br: v.d.readString, bw: v.h.writeString },
                      timestamp: {
                        n: 6,
                        br: v.d.readFixed32,
                        bw: v.h.writeFixed32,
                      },
                      author_account_id: {
                        n: 7,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQContent";
            }),
            t
          );
        })(S),
        C = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                      json_data: {
                        n: 3,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Create_Request";
            }),
            t
          );
        })(S),
        R = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faq_id || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Create_Response";
            }),
            t
          );
        })(S),
        F = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Request";
            }),
            t
          );
        })(S),
        O = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return S.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Response";
            }),
            t
          );
        })(S),
        j = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      internal_name: {
                        n: 3,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateInternalName_Request";
            }),
            t
          );
        })(S),
        T = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return S.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateInternalName_Response";
            }),
            t
          );
        })(S),
        W = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      json_data: {
                        n: 3,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateJsonData_Request";
            }),
            t
          );
        })(S),
        I = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return S.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateJsonData_Response";
            }),
            t
          );
        })(S),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: v.d.readBool,
                        bw: v.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: v.d.readBool,
                        bw: v.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Request";
            }),
            t
          );
        })(S),
        A = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return S.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Response";
            }),
            t
          );
        })(S),
        E = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: v.d.readUint32,
                        bw: v.h.writeUint32,
                      },
                      content: {
                        n: 4,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                      title: { n: 5, br: v.d.readString, bw: v.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Request";
            }),
            t
          );
        })(S),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.last_update_timestamp || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      last_update_timestamp: {
                        n: 1,
                        br: v.d.readFixed32,
                        bw: v.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Response";
            }),
            t
          );
        })(S),
        D = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: v.d.readUint32,
                        bw: v.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Request";
            }),
            t
          );
        })(S),
        x = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.last_publish_timestamp || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      last_publish_timestamp: {
                        n: 1,
                        br: v.d.readFixed32,
                        bw: v.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Response";
            }),
            t
          );
        })(S),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faq || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: z } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PreviewDraft_Response";
            }),
            t
          );
        })(S),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faq || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: z } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQ_Response";
            }),
            t
          );
        })(S),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: v.d.readUint32,
                        bw: v.h.writeUint32,
                      },
                      version: {
                        n: 4,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQVersion_Request";
            }),
            t
          );
        })(S),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faq || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: z } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQVersion_Response";
            }),
            t
          );
        })(S),
        Q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Request";
            }),
            t
          );
        })(S),
        k = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.summary || v.a(t.M()),
              S.initialize(n, r, 0, -1, [2], null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      summary: { n: 1, c: w },
                      draft: { n: 2, c: z, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Response";
            }),
            t
          );
        })(S),
        V = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faq || v.a(t.M()),
              S.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { faq: { n: 1, c: w, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllFAQsForClan_Response";
            }),
            t
          );
        })(S),
        H = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faqs || v.a(t.M()),
              S.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { faqs: { n: 1, c: z, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
            }),
            t
          );
        })(S),
        K = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return S.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_CheckFAQPermissions_Response";
            }),
            t
          );
        })(S),
        J = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.faqs || v.a(t.M()),
              S.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faqs: { n: 1, c: Y, r: !0, q: !0 },
                      num_total_results: {
                        n: 2,
                        br: v.d.readInt32,
                        bw: v.h.writeInt32,
                      },
                      next_cursor: {
                        n: 3,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SearchFAQs_Response";
            }),
            t
          );
        })(S),
        Y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.articleid || v.a(t.M()),
              S.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      articleid: {
                        n: 1,
                        br: v.d.readUint64String,
                        bw: v.h.writeUint64String,
                      },
                      name: { n: 2, br: v.d.readString, bw: v.h.writeString },
                      content: {
                        n: 3,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                      clan_accountid: {
                        n: 4,
                        br: v.d.readUint32,
                        bw: v.h.writeUint32,
                      },
                      url_code: {
                        n: 5,
                        br: v.d.readString,
                        bw: v.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = v.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return v.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return v.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new g.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return v.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new g.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              v.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new g.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
            }),
            t
          );
        })(S);
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", t, R, { ePrivilege: 1 });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", t, O, { ePrivilege: 1 });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateInternalName#1", t, T, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", t, I, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", t, A, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", t, N, { ePrivilege: 1 });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", t, x, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", t, G, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", t, P, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", t, L, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, k, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", t, V, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              t,
              H,
              { ePrivilege: 1 }
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg("ClanFAQS.CheckFAQPermissions#1", t, K, {
              ePrivilege: 1,
            });
          }),
          (e.SearchFAQs = function (e, t) {
            return e.SendMsg("ClanFAQS.SearchFAQs#1", t, J, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(n || (n = {}));
      var $ = (function () {
          function e() {
            (this.m_mapFAQSummaries = new Map()),
              (this.m_mapFAQPublishedContent = new Map()),
              (this.m_mapFAQDrafts = new Map()),
              (this.m_bHasFAQEdit = !1),
              (this.m_steamInterface = null),
              "dev" == h.c.WEB_UNIVERSE && (window.g_FAQStore = this),
              h.c.IN_LIBRARY ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.Init = function (t) {
              e.Get().m_steamInterface = t;
            }),
            (e.prototype.SetUpWebAPIInterface = function () {
              var e = Object(h.g)("faqstore", "application_config"),
                t = null == e ? void 0 : e.webapi_token;
              this.m_steamInterface = new _.a(h.c.WEBAPI_BASE_URL, t);
            }),
            (e.prototype.ReadInitialPayload = function () {
              var e = Object(h.g)("faqstore", "application_config");
              if (
                (("dev" != h.c.WEB_UNIVERSE && "beta" != h.c.WEB_UNIVERSE) ||
                  console.log("DEV_DEBUG: CFAQStore loading payload: ", e),
                this.BIsConfigValid(e))
              ) {
                if (e.faqs)
                  for (var t in e.faqs) {
                    var r = e.faqs[t];
                    (null == r ? void 0 : r.faq_id) == t &&
                      void 0 !== (null == r ? void 0 : r.language) &&
                      (this.m_mapFAQPublishedContent.has(t) ||
                        this.m_mapFAQPublishedContent.set(t, new Map()),
                      this.m_mapFAQPublishedContent.get(t).set(r.language, r));
                  }
                if (e.alldrafts)
                  for (var t in e.alldrafts) {
                    var n = e.alldrafts[t];
                    if ((null == n ? void 0 : n.summary) && n.draft) {
                      this.m_mapFAQSummaries.set(t, n.summary);
                      for (
                        var i = new Map(), a = 0, o = n.draft;
                        a < o.length;
                        a++
                      ) {
                        var s = o[a];
                        i.set(s.language, s);
                      }
                      this.m_mapFAQDrafts.set(
                        t,
                        new y(this.m_mapFAQSummaries.get(t), i)
                      );
                    }
                  }
                if (e.allfaqs)
                  for (var u = 0, c = e.allfaqs; u < c.length; u++) {
                    var l = c[u];
                    l.faq_id &&
                      (this.m_mapFAQSummaries.has(l.faq_id) ||
                        this.m_mapFAQSummaries.set(l.faq_id, l));
                  }
                this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
              } else
                "dev" == h.c.WEB_UNIVERSE && console.error("Invalid payload");
            }),
            (e.prototype.BIsConfigValid = function (e) {
              var t = e;
              return !!(
                (t && t.faqs && "object" == typeof t.faqs) ||
                (t.alldrafts && "object" == typeof t.alldrafts) ||
                (t.allfaqs && Array.isArray(t.allfaqs))
              );
            }),
            (e.prototype.CreateFAQ = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, r, a, o, s, u, c;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (t = f.b.Init(C)).Body().set_steamid(h.b.CLANSTEAMID),
                        t.Body().set_internal_name(e),
                        (r = 2),
                        (a = void 0),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.Create(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        1 == (r = o.GetEResult())
                          ? ((a = o.Body().faq_id()),
                            (s = { faq_id: a, internal_name: e }),
                            this.m_mapFAQSummaries.set(a, s))
                          : console.error(
                              "FAQStore.CreateFAQ: Create request failed:",
                              r
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (u = i.sent()),
                        (c = Object(B.a)(u)),
                        console.error(
                          "FAQStore.CreateFAQ: caught error " + c.strErrorMsg,
                          c
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { eResult: r, strFaqId: a }];
                  }
                });
              });
            }),
            (e.prototype.UpdateDraft = function (e, t, r, a) {
              return Object(i.b)(this, void 0, void 0, function () {
                var o, s, u, c, l, d;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (o = f.b.Init(E)).Body().set_steamid(h.b.CLANSTEAMID),
                        o.Body().set_faq_id(e),
                        o.Body().set_language(t),
                        o.Body().set_content(a),
                        o.Body().set_title(r),
                        (s = 2),
                        (u = 0),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.UpdateDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            o
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (c = i.sent()),
                        1 != (s = c.GetEResult())
                          ? console.error(
                              "FAQStore.UpdateDraft request failed:",
                              s
                            )
                          : (u = c.Body().last_update_timestamp()),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (l = i.sent()),
                        (d = Object(B.a)(l)),
                        console.error(
                          "FAQStore.UpdateDraft: caught error " + d.strErrorMsg,
                          d
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { eResult: s, rtUpdateTime: u }];
                  }
                });
              });
            }),
            (e.prototype.UpdateJsonData = function (e, t) {
              return Object(i.b)(this, void 0, void 0, function () {
                var r, a, o, s, u, c;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (r = JSON.stringify(t)),
                        (a = f.b.Init(W)).Body().set_steamid(h.b.CLANSTEAMID),
                        a.Body().set_faq_id(e),
                        a.Body().set_json_data(r),
                        (o = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.UpdateJsonData(
                            this.m_steamInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (s = i.sent()),
                        1 != (o = s.GetEResult())
                          ? console.error(
                              "FAQStore.UpdateJsonData request failed:",
                              o
                            )
                          : (this.m_mapFAQSummaries.get(e).json_data = r),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (u = i.sent()),
                        (c = Object(B.a)(u)),
                        console.error(
                          "FAQStore.UpdateJsonData: caught error " +
                            c.strErrorMsg,
                          c
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, o];
                  }
                });
              });
            }),
            (e.prototype.GetFAQVersion = function (e, t, r) {
              return Object(i.b)(this, void 0, void 0, function () {
                var a, o, s, u, c;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (a = f.b.Init(q)).Body().set_steamid(h.b.CLANSTEAMID),
                        a.Body().set_faq_id(e),
                        a.Body().set_version(t),
                        a.Body().set_language(r),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.GetFAQVersion(
                            this.m_steamInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        1 == (s = o.GetEResult())
                          ? [2, o.Body().faq().toObject()]
                          : (console.error(
                              "FAQStore.GetFAQVersion request failed:",
                              s
                            ),
                            [3, 4])
                      );
                    case 3:
                      return (
                        (u = i.sent()),
                        (c = Object(B.a)(u)),
                        console.error(
                          "FAQStore.GetFAQVersion: caught error " +
                            c.strErrorMsg,
                          c
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (e.prototype.DeleteFAQ = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, r, a, o, s;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (t = f.b.Init(F)).Body().set_steamid(h.b.CLANSTEAMID),
                        t.Body().set_faq_id(e),
                        (r = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.Delete(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = i.sent()),
                        1 != (r = a.GetEResult())
                          ? console.error(
                              "FAQStore.DeleteFAQ request failed:",
                              r
                            )
                          : (this.m_mapFAQDrafts.delete(e),
                            this.m_mapFAQPublishedContent.delete(e),
                            this.m_mapFAQSummaries.delete(e)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = i.sent()),
                        (s = Object(B.a)(o)),
                        console.error(
                          "FAQStore.DeleteFAQ: caught error " + s.strErrorMsg,
                          s
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, r];
                  }
                });
              });
            }),
            (e.prototype.GetFAQPublishedContent = function (t, r) {
              var n = this.m_mapFAQPublishedContent.get(t);
              if (!n) return null;
              var i = n.get(r);
              return (
                !i &&
                  e.sm_mapFallbackLanguages.has(r) &&
                  (i = n.get(e.sm_mapFallbackLanguages.get(r))),
                i || 0 == r || Object(m.a)(h.c.EREALM) || (i = n.get(0)),
                i
              );
            }),
            (e.prototype.GetFAQDraftContent = function (e) {
              return this.m_mapFAQDrafts.get(e);
            }),
            (e.prototype.GetAllFAQSummaries = function () {
              return Array.from(this.m_mapFAQSummaries.values());
            }),
            (e.prototype.GetFAQArticleSummary = function (e) {
              return this.m_mapFAQSummaries.get(e) || {};
            }),
            (e.prototype.LoadFAQDraftContent = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, r, a, o, s, u, c, l;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (this.m_mapFAQDrafts.has(e))
                        return [2, this.m_mapFAQDrafts.get(e)];
                      (t = f.b.Init(Q)).Body().set_steamid(h.b.CLANSTEAMID),
                        t.Body().set_faq_id(e),
                        (r = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.GetAllDrafts(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = i.sent()),
                        1 != (r = a.GetEResult())
                          ? (console.error(
                              "FaqStore.LoadFAQDraftContent request failed:",
                              r
                            ),
                            [2, null])
                          : ((o = a.Body().summary().toObject()),
                            this.m_mapFAQSummaries.set(e, o),
                            (s = new Map()),
                            a
                              .Body()
                              .draft()
                              .forEach(function (e) {
                                return s.set(e.language(), e.toObject());
                              }),
                            (u = new y(this.m_mapFAQSummaries.get(e), s)),
                            this.m_mapFAQDrafts.set(e, u),
                            [2, u])
                      );
                    case 3:
                      return (
                        (c = i.sent()),
                        (l = Object(B.a)(c)),
                        console.error(
                          "FaqStore.LoadFAQDraftContent: exception " +
                            l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (e.prototype.UpdateVisibility = function (e, t, r) {
              return Object(i.b)(this, void 0, void 0, function () {
                var a, o, s, u, c, l;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (a = f.b.Init(U)).Body().set_steamid(h.b.CLANSTEAMID),
                        a.Body().set_faq_id(e),
                        a.Body().set_visible_in_global_realm(t),
                        a.Body().set_visible_in_china_realm(r),
                        (o = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.SetVisibility(
                            this.m_steamInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (s = i.sent()),
                        1 === (o = s.GetEResult())
                          ? (u = this.m_mapFAQSummaries.get(e)) &&
                            ((u.visible_in_global_realm = t),
                            (u.visible_in_china_realm = r),
                            this.m_mapFAQSummaries.set(e, u))
                          : console.error(
                              "FaqStore.UpdateVisibility: Failed " + o
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (c = i.sent()),
                        (l = Object(B.a)(c)),
                        console.error(
                          "FaqStore.UpdateVisibility: exception " +
                            l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, o];
                  }
                });
              });
            }),
            (e.prototype.PublishDraftByLanguage = function (e, t) {
              return Object(i.b)(this, void 0, void 0, function () {
                var r,
                  a,
                  o,
                  s,
                  u,
                  l,
                  d = this;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!t || 0 == t.length) return [2, 1];
                      (r = f.b.Init(D)).Body().set_steamid(h.b.CLANSTEAMID),
                        r.Body().set_faq_id(e),
                        t.forEach(function (e) {
                          return r.Body().add_language(e);
                        }),
                        (a = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.PublishDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        1 === (a = o.GetEResult())
                          ? (s = this.m_mapFAQSummaries.get(e)) &&
                            Object(c.G)(function () {
                              d.m_mapFAQPublishedContent.has(e) ||
                                d.m_mapFAQPublishedContent.set(e, new Map()),
                                s.per_language_info.forEach(function (r) {
                                  var n,
                                    i = r.language;
                                  if (t.indexOf(i) >= 0) {
                                    r.last_publish_timestamp = Math.max(
                                      r.last_publish_timestamp,
                                      o.Body().last_publish_timestamp()
                                    );
                                    var a =
                                      null === (n = d.m_mapFAQDrafts.get(e)) ||
                                      void 0 === n
                                        ? void 0
                                        : n.GetLastSavedDraftVersion(i);
                                    d.m_mapFAQPublishedContent.get(e).set(i, a);
                                  }
                                });
                            })
                          : console.error(
                              "FaqStore.PublishDraftByLanguage: Failed " + a
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (u = i.sent()),
                        (l = Object(B.a)(u)),
                        console.error(
                          "FaqStore.PublishDraftByLanguage: exception " +
                            l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, a];
                  }
                });
              });
            }),
            (e.prototype.UpdateInternalName = function (e, t) {
              return Object(i.b)(this, void 0, void 0, function () {
                var r,
                  a,
                  o,
                  s,
                  u,
                  l = this;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (r = f.b.Init(j)).Body().set_steamid(h.b.CLANSTEAMID),
                        r.Body().set_faq_id(e),
                        r.Body().set_internal_name(t),
                        (a = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          n.UpdateInternalName(
                            this.m_steamInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        1 === (a = o.GetEResult())
                          ? Object(c.G)(function () {
                              var r, n, i;
                              (null === (r = l.m_mapFAQSummaries.get(e)) ||
                              void 0 === r
                                ? void 0
                                : r.internal_name) &&
                                (l.m_mapFAQSummaries.get(e).internal_name = t),
                                (null ===
                                  (i =
                                    null === (n = l.m_mapFAQDrafts.get(e)) ||
                                    void 0 === n
                                      ? void 0
                                      : n.GetSummary()) || void 0 === i
                                  ? void 0
                                  : i.internal_name) &&
                                  (l.m_mapFAQDrafts
                                    .get(e)
                                    .GetSummary().internal_name = t);
                            })
                          : console.error(
                              "FaqStore.UpdateInternalName: Failed " + a
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (s = i.sent()),
                        (u = Object(B.a)(s)),
                        console.error(
                          "FaqStore.UpdateInternalName: exception " +
                            u.strErrorMsg,
                          u
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, a];
                  }
                });
              });
            }),
            (e.prototype.GetLoadedDraftObjs = function () {
              return Array.from(this.m_mapFAQDrafts.values());
            }),
            (e.prototype.RemoveAllDirtyDrafts = function () {
              var e,
                t,
                r = this,
                n =
                  null ===
                    (t =
                      null === (e = this.GetLoadedDraftObjs()) || void 0 === e
                        ? void 0
                        : e.filter(function (e) {
                            return e.BNeedsSaving();
                          })) || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return e.GetFAQID();
                      });
              null == n ||
                n.forEach(function (e) {
                  return r.m_mapFAQDrafts.delete(e);
                });
            }),
            (e.prototype.BHasFAQEdit = function () {
              return this.m_bHasFAQEdit;
            }),
            (e.prototype.ExportEnglishDraftToCrowdin = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t;
                return Object(i.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t =
                          h.c.COMMUNITY_BASE_URL +
                          "faqs/" +
                          h.b.VANITY_ID +
                          "/ajaxpushtocrowdin/" +
                          ee(e)),
                        [4, o.a.get(t)]
                      );
                    case 1:
                      return r.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.ImportNonEnglishDraftsFromCrowdin = function (
              e,
              t,
              r
            ) {
              var n;
              return Object(i.b)(this, void 0, void 0, function () {
                var a, s, u, c, l, d;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (a =
                        h.c.COMMUNITY_BASE_URL +
                        "faqs/" +
                        h.b.VANITY_ID +
                        "/ajaxpullfromcrowdin/" +
                        ee(e)),
                        (s = new FormData()).append("sessionid", h.c.SESSIONID),
                        s.append("languages", t.join(",")),
                        (u = null),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          o.a.post(a, s, {
                            withCredentials: !0,
                            cancelToken: null == r ? void 0 : r.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (c = i.sent()) ? void 0 : c.status) &&
                        1 ==
                          (null === (n = c.data) || void 0 === n
                            ? void 0
                            : n.success)
                        ? [2, c.data.updated[e]]
                        : ((u = { response: c }), [3, 4]);
                    case 3:
                      return (l = i.sent()), (u = l), [3, 4];
                    case 4:
                      return (
                        (d = Object(B.a)(u)),
                        console.error(
                          "Could not import from crowdin",
                          e,
                          d.strErrorMsg,
                          d
                        ),
                        [2, []]
                      );
                  }
                });
              });
            }),
            (e.sm_mapFallbackLanguages = new Map([
              [5, 27],
              [27, 5],
              [29, 6],
            ])),
            Object(i.c)([c.C], e.prototype, "m_mapFAQSummaries", void 0),
            Object(i.c)([c.k], e.prototype, "RemoveAllDirtyDrafts", null),
            e
          );
        })(),
        X = /^[0-9a-fA-F]+$/;
      function Z(e) {
        var t = null == e ? void 0 : e.replace(/-/g, "");
        return 16 == (null == t ? void 0 : t.length) && X.test(t)
          ? u.a.fromString(t, !0, 16).toString()
          : null;
      }
      function ee(e) {
        var t = ("0000000000000000" + u.a.fromString(e, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return (
          t.slice(0, 4) +
          "-" +
          t.slice(4, 8) +
          "-" +
          t.slice(8, 12) +
          "-" +
          t.slice(12, 16)
        );
      }
      function te(e, t) {
        return [e && $.Get().GetFAQPublishedContent(e, t), !0];
      }
      function re(e) {
        var t = d.a.useState($.Get().GetFAQDraftContent(e)),
          r = t[0],
          n = t[1],
          i = d.a.useState(!!r),
          a = i[0],
          o = i[1];
        return (
          Object(l.useEffect)(
            function () {
              $.Get()
                .LoadFAQDraftContent(e)
                .then(function (e) {
                  return n(e);
                })
                .finally(function () {
                  return o(!0);
                });
            },
            [e]
          ),
          [r, a]
        );
      }
      function ne(e) {
        return [$.Get().GetFAQArticleSummary(e), !0];
      }
      function ie() {
        var e = $.Get().GetAllFAQSummaries();
        return d.a.useRef([e, !0]).current;
      }
      function ae(e, t, r) {
        var n = d.a.useState(null),
          i = n[0],
          a = n[1],
          o = d.a.useState(!1),
          s = o[0],
          u = o[1];
        return (
          Object(l.useEffect)(
            function () {
              $.Get().BHasFAQEdit() &&
                $.Get()
                  .GetFAQVersion(e, t, r)
                  .then(function (e) {
                    return a(e);
                  })
                  .finally(function () {
                    return u(!0);
                  });
            },
            [e, t, r]
          ),
          [i, s]
        );
      }
    },
    PpkI: function (e, t, r) {
      e.exports = {
        ConferencePageCtn: "landing_ConferencePageCtn_oP_SP",
        ConferenceContentsCtn: "landing_ConferenceContentsCtn_1HPPR",
        ConferenceHeaderCtn: "landing_ConferenceHeaderCtn_1AbLq",
        LogoImage: "landing_LogoImage_3i2i5",
        ConferenceDateRange: "landing_ConferenceDateRange_2FSEt",
      };
    },
    WcT4: function (e, t, r) {
      e.exports = {
        FAQContainer: "faqbbcode_FAQContainer_2PQsW",
        Section: "faqbbcode_Section_bjwwI",
        Note: "faqbbcode_Note_XjQ8g",
        Important: "faqbbcode_Important_mRx2I",
        Warning: "faqbbcode_Warning_3Hvtr",
        FAQImage: "faqbbcode_FAQImage_3Eebt",
      };
    },
    X2UP: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r("vDqi"),
        i = r.n(n),
        a = r("q1tI"),
        o = r.n(a);
      function s(e) {
        var t = o.a.useRef(i.a.CancelToken.source());
        return (
          o.a.useEffect(
            function () {
              var r = t.current;
              return function () {
                return r.cancel(e ? e + ": unmounting" : "unmounting");
              };
            },
            [e]
          ),
          t.current
        );
      }
    },
    eN6m: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return mr;
      });
      var n = r("mrSG"),
        i = r("2vnA"),
        a = r("TyAF"),
        o = r("q1tI"),
        s = r.n(o),
        u = r("TtDX"),
        c = r("vDqi"),
        l = r.n(c),
        d = r("A5MU"),
        m = r("bxBv"),
        f = r("u2yL"),
        p = r("WBba"),
        b = r("kLLr"),
        B = r("hRO2"),
        h = r("OS8t"),
        y = B.Message;
      var _ = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      thumbnail_upload_address: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      thumbnail_upload_token: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      thumbnail_interval_seconds: {
                        n: 4,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      heartbeat_interval_seconds: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BeginBroadcastSession_Response";
            }),
            t
          );
        })(y),
        g = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_EndBroadcastSession_Response";
            }),
            t
          );
        })(y),
        v = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_token || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      upload_token: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      upload_address: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 3,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      enable_replay: {
                        n: 6,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      http_address: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StartBroadcastUpload_Response";
            }),
            t
          );
        })(y),
        S = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      upload_token: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      upload_address: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      http_address: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 5,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      heartbeat_interval_seconds: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      is_rtmp: { n: 7, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastUploadStarted_Notification";
            }),
            t
          );
        })(y),
        w = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.gameid || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      gameid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      num_viewers: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      permission: {
                        n: 4,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      is_rtmp: { n: 5, br: h.d.readBool, bw: h.h.writeBool },
                      seconds_delay: {
                        n: 6,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      is_publisher: {
                        n: 7,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      thumbnail_url: {
                        n: 8,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      update_interval: {
                        n: 9,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      is_uploading: {
                        n: 10,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      duration: {
                        n: 11,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      is_replay: { n: 12, br: h.d.readBool, bw: h.h.writeBool },
                      is_capturing_vod: {
                        n: 13,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_store_whitelisted: {
                        n: 14,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastStatus_Response";
            }),
            t
          );
        })(y),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.thumbnail_url || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      thumbnail_url: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      update_interval: {
                        n: 2,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      num_viewers: {
                        n: 3,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      duration: { n: 4, br: h.d.readInt32, bw: h.h.writeInt32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastThumbnail_Response";
            }),
            t
          );
        })(y),
        z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.response || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      response: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                      mpd_url: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_id: {
                        n: 3,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      gameid: {
                        n: 4,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      title: { n: 5, br: h.d.readString, bw: h.h.writeString },
                      num_viewers: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      permission: {
                        n: 7,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      is_rtmp: { n: 8, br: h.d.readBool, bw: h.h.writeBool },
                      seconds_delay: {
                        n: 9,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      viewer_token: {
                        n: 10,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      hls_m3u8_master_url: {
                        n: 11,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      heartbeat_interval: {
                        n: 12,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      thumbnail_url: {
                        n: 13,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      is_webrtc: { n: 14, br: h.d.readBool, bw: h.h.writeBool },
                      webrtc_session_id: {
                        n: 15,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      webrtc_offer_sdp: {
                        n: 16,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      webrtc_turn_server: {
                        n: 17,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      is_replay: { n: 18, br: h.d.readBool, bw: h.h.writeBool },
                      duration: {
                        n: 19,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      cdn_auth_url_parameters: {
                        n: 20,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WatchBroadcast_Response";
            }),
            t
          );
        })(y);
      var C = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.success || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      success: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_InviteToBroadcast_Response";
            }),
            t
          );
        })(y),
        R = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SendBroadcastStateToServer_Response";
            }),
            t
          );
        })(y),
        F = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      state: { n: 2, br: h.d.readEnum, bw: h.h.writeEnum },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastViewerState_Notification";
            }),
            t
          );
        })(y);
      var O,
        j,
        T = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WaitingBroadcastViewer_Notification";
            }),
            t
          );
        })(y),
        W = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      broadcast_relay_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      upload_result: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      too_many_poor_uploads: {
                        n: 4,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StopBroadcastUpload_Notification";
            }),
            t
          );
        })(y),
        I = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SessionClosed_Notification";
            }),
            t
          );
        })(y),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      num_viewers: {
                        n: 2,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastStatus_Notification";
            }),
            t
          );
        })(y),
        A = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      broadcast_channel_name: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_channel_avatar: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastChannelLive_Notification";
            }),
            t
          );
        })(y),
        E = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.thumbnail_upload_token || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      thumbnail_upload_token: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      thumbnail_broadcast_session_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      thumbnail_data: {
                        n: 3,
                        br: h.d.readBytes,
                        bw: h.h.writeBytes,
                      },
                      thumbnail_width: {
                        n: 4,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      thumbnail_height: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SendThumbnailToRelay_Notification";
            }),
            t
          );
        })(y),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcaster_steamid || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcaster_steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_ViewerBroadcastInvite_Notification";
            }),
            t
          );
        })(y),
        D = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, [4], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      flair_group_ids: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatInfo_Response";
            }),
            t
          );
        })(y),
        x = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      message: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      instance_id: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      language: {
                        n: 4,
                        d: 0,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      country_code: {
                        n: 5,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Request";
            }),
            t
          );
        })(y),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.persona_name || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      persona_name: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      in_game: { n: 2, br: h.d.readBool, bw: h.h.writeBool },
                      result: { n: 3, br: h.d.readInt32, bw: h.h.writeInt32 },
                      cooldown_time_seconds: {
                        n: 4,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Response";
            }),
            t
          );
        })(y),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      flair: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Request";
            }),
            t
          );
        })(y),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.result || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      result: { n: 1, br: h.d.readInt32, bw: h.h.writeInt32 },
                      chat_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      flair: { n: 3, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Response";
            }),
            t
          );
        })(y),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      muted: { n: 3, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Request";
            }),
            t
          );
        })(y),
        Q = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Response";
            }),
            t
          );
        })(y),
        k = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Request";
            }),
            t
          );
        })(y),
        V = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Response";
            }),
            t
          );
        })(y),
        H = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.persona_names || h.a(t.M()),
              y.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { persona_names: { n: 1, c: K, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response";
            }),
            t
          );
        })(y),
        K = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steam_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steam_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      persona: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
            }),
            t
          );
        })(y),
        J = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StartBuildClip_Response";
            }),
            t
          );
        })(y),
        Y = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBuildClipStatus_Response";
            }),
            t
          );
        })(y),
        $ = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SetClipDetails_Response";
            }),
            t
          );
        })(y),
        X = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      video_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      channel_id: {
                        n: 3,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      app_id: { n: 4, br: h.d.readUint32, bw: h.h.writeUint32 },
                      accountid_broadcaster: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      accountid_clipmaker: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      video_description: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      start_time: {
                        n: 8,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      length_milliseconds: {
                        n: 9,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 10,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetClipDetails_Response";
            }),
            t
          );
        })(y),
        Z = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SetRTMPInfo_Response";
            }),
            t
          );
        })(y),
        ee = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_permission || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_permission: {
                        n: 1,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      rtmp_host: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      rtmp_token: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_delay: {
                        n: 4,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      app_id: { n: 5, br: h.d.readUint32, bw: h.h.writeUint32 },
                      required_app_id: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      broadcast_chat_permission: {
                        n: 7,
                        br: h.d.readEnum,
                        bw: h.h.writeEnum,
                      },
                      broadcast_buffer: {
                        n: 8,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      steamid: {
                        n: 9,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      chat_rate_limit: {
                        n: 10,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      enable_replay: {
                        n: 11,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetRTMPInfo_Response";
            }),
            t
          );
        })(y),
        te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_stats || h.a(t.M()),
              y.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { upload_stats: { n: 1, c: re, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response";
            }),
            t
          );
        })(y),
        re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_result || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      upload_result: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      time_stopped: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      seconds_uploaded: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      max_viewers: {
                        n: 4,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      resolution_x: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      resolution_y: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      avg_bandwidth: {
                        n: 7,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      total_bytes: {
                        n: 8,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      app_id: { n: 9, br: h.d.readUint32, bw: h.h.writeUint32 },
                      total_unique_viewers: {
                        n: 10,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      total_seconds_watched: {
                        n: 11,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      time_started: {
                        n: 12,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      upload_id: {
                        n: 13,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      local_address: {
                        n: 14,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      remote_address: {
                        n: 15,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      frames_per_second: {
                        n: 16,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      num_representations: {
                        n: 17,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      app_name: {
                        n: 18,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      is_replay: { n: 19, br: h.d.readBool, bw: h.h.writeBool },
                      session_id: {
                        n: 20,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
            }),
            t
          );
        })(y),
        ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.viewer_stats || h.a(t.M()),
              y.initialize(n, r, 0, -1, [1, 2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      viewer_stats: { n: 1, c: ie, r: !0, q: !0 },
                      country_stats: { n: 2, c: ae, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response";
            }),
            t
          );
        })(y),
        ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.time || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      time: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                      num_viewers: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
            }),
            t
          );
        })(y),
        ae = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.country_code || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      country_code: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      num_viewers: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
            }),
            t
          );
        })(y),
        oe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStartResult_Response";
            }),
            t
          );
        })(y),
        se = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStopped_Response";
            }),
            t
          );
        })(y),
        ue = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Response";
            }),
            t
          );
        })(y),
        ce = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.sdp_mid || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      sdp_mid: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      sdp_mline_index: {
                        n: 2,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      candidate: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTC_Candidate";
            }),
            t
          );
        })(y),
        le = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddHostCandidate_Response";
            }),
            t
          );
        })(y),
        de = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Response";
            }),
            t
          );
        })(y),
        me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.candidate_generation || h.a(t.M()),
              y.initialize(n, r, 0, -1, [2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      candidate_generation: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      candidates: { n: 2, c: ce, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCGetHostCandidates_Response";
            }),
            t
          );
        })(y),
        fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCNeedTURNServer_Notification";
            }),
            t
          );
        })(y),
        pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.turn_server || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      turn_server: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCLookupTURNServer_Response";
            }),
            t
          );
        })(y),
        be = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      viewer_steamid: {
                        n: 3,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      viewer_token: {
                        n: 4,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStart_Notification";
            }),
            t
          );
        })(y),
        Be = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      answer: { n: 3, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Notification";
            }),
            t
          );
        })(y),
        he = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || h.a(t.M()),
              y.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      candidate: { n: 3, c: ce },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Notification";
            }),
            t
          );
        })(y);
      !(function (e) {
        (e.BeginBroadcastSession = function (e, t) {
          return e.SendMsg("Broadcast.BeginBroadcastSession#1", t, _, {
            ePrivilege: 1,
          });
        }),
          (e.EndBroadcastSession = function (e, t) {
            return e.SendMsg("Broadcast.EndBroadcastSession#1", t, g, {
              ePrivilege: 1,
            });
          }),
          (e.StartBroadcastUpload = function (e, t) {
            return e.SendMsg("Broadcast.StartBroadcastUpload#1", t, v, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastUploadStop = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WatchBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.WatchBroadcast#1", t, z, {
              ePrivilege: 2,
            });
          }),
          (e.HeartbeatBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.HeartbeatBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.StopWatchingBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.StopWatchingBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastStatus#1", t, w, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastThumbnail = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastThumbnail#1", t, M, {
              ePrivilege: 2,
            });
          }),
          (e.InviteToBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.InviteToBroadcast#1", t, C, {
              ePrivilege: 1,
            });
          }),
          (e.SendBroadcastStateToServer = function (e, t) {
            return e.SendMsg("Broadcast.SendBroadcastStateToServer#1", t, R, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastSessionHeartbeat = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.GetBroadcastChatInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatInfo#1", t, D, {
              ePrivilege: 2,
            });
          }),
          (e.PostChatMessage = function (e, t) {
            return e.SendMsg("Broadcast.PostChatMessage#1", t, G, {
              ePrivilege: 3,
            });
          }),
          (e.UpdateChatMessageFlair = function (e, t) {
            return e.SendMsg("Broadcast.UpdateChatMessageFlair#1", t, q, {
              ePrivilege: 1,
            });
          }),
          (e.MuteBroadcastChatUser = function (e, t) {
            return e.SendMsg("Broadcast.MuteBroadcastChatUser#1", t, Q, {
              ePrivilege: 3,
            });
          }),
          (e.RemoveUserChatText = function (e, t) {
            return e.SendMsg("Broadcast.RemoveUserChatText#1", t, V, {
              ePrivilege: 3,
            });
          }),
          (e.GetBroadcastChatUserNames = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", t, H, {
              ePrivilege: 1,
            });
          }),
          (e.StartBuildClip = function (e, t) {
            return e.SendMsg("Broadcast.StartBuildClip#1", t, J, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBuildClipStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBuildClipStatus#1", t, Y, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.SetClipDetails#1", t, $, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.GetClipDetails#1", t, X, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.SetRTMPInfo#1", t, Z, {
              ePrivilege: 1,
            });
          }),
          (e.GetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetRTMPInfo#1", t, ee, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.NotifyWebRTCHaveTURNServer = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WebRTCStartResult = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStartResult#1", t, oe, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCStopped = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStopped#1", t, se, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCSetAnswer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCSetAnswer#1", t, ue, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCLookupTURNServer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCLookupTURNServer#1", t, pe, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddHostCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddHostCandidate#1", t, le, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddViewerCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddViewerCandidate#1", t, de, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCGetHostCandidates = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", t, me, {
              ePrivilege: 1,
            });
          }),
          (e.GetBroadcastUploadStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastUploadStats#1", t, te, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastViewerStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastViewerStats#1", t, ne, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          });
      })(O || (O = {})),
        (function (e) {
          (e.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: F,
          }),
            (e.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: T,
            }),
            (e.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: S,
            }),
            (e.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: W,
            }),
            (e.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: I,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: N,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: U,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: A,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: E,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: fe,
            }),
            (e.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: be,
            }),
            (e.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: Be,
            }),
            (e.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: he,
            });
        })(j || (j = {}));
      var ye = B.Message;
      var _e,
        ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_CreateBroadcastChannel_Response";
            }),
            t
          );
        })(ye),
        ve = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      steamid: {
                        n: 3,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelID_Response";
            }),
            t
          );
        })(ye),
        Se = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ye.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(ye),
        we = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.unique_name || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      unique_name: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      owner_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      name: { n: 3, br: h.d.readString, bw: h.h.writeString },
                      language: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      headline: {
                        n: 5,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      summary: {
                        n: 6,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      schedule: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      rules: { n: 8, br: h.d.readString, bw: h.h.writeString },
                      panels: { n: 9, br: h.d.readString, bw: h.h.writeString },
                      is_partnered: {
                        n: 10,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(ye),
        Me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.replace_image_hash || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      replace_image_hash: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelImage_Response";
            }),
            t
          );
        })(ye),
        ze = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.images || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { images: { n: 1, c: Ce, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response";
            }),
            t
          );
        })(ye),
        Ce = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.image_type || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      image_type: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                      image_path: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      image_index: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response_Images";
            }),
            t
          );
        })(ye),
        Re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.links || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { links: { n: 1, c: Fe, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response";
            }),
            t
          );
        })(ye),
        Fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.link_index || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      link_index: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      url: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      link_description: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      left: { n: 4, br: h.d.readUint32, bw: h.h.writeUint32 },
                      top: { n: 5, br: h.d.readUint32, bw: h.h.writeUint32 },
                      width: { n: 6, br: h.d.readUint32, bw: h.h.writeUint32 },
                      height: { n: 7, br: h.d.readUint32, bw: h.h.writeUint32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
            }),
            t
          );
        })(ye),
        Oe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ye.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
            }),
            t
          );
        })(ye),
        je = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_live || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_live: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                      is_disabled: {
                        n: 2,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      appid: { n: 3, br: h.d.readUint32, bw: h.h.writeUint32 },
                      viewers: {
                        n: 4,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      views: {
                        n: 5,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      broadcaster_steamid: {
                        n: 6,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      subscribers: {
                        n: 9,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      unique_name: {
                        n: 10,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_session_id: {
                        n: 11,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelStatus_Response";
            }),
            t
          );
        })(ye),
        Te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      name: { n: 3, br: h.d.readString, bw: h.h.writeString },
                      appid: { n: 4, br: h.d.readUint32, bw: h.h.writeUint32 },
                      viewers: {
                        n: 5,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      views: {
                        n: 6,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      headline: {
                        n: 9,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      avatar_url: {
                        n: 10,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcaster_steamid: {
                        n: 11,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      subscribers: {
                        n: 12,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      background_url: {
                        n: 13,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      is_featured: {
                        n: 14,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_disabled: {
                        n: 15,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_live: { n: 16, br: h.d.readBool, bw: h.h.writeBool },
                      language: {
                        n: 17,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      reports: {
                        n: 18,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      is_partnered: {
                        n: 19,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GetBroadcastChannelEntry";
            }),
            t
          );
        })(ye),
        We = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetFollowedChannels_Response";
            }),
            t
          );
        })(ye),
        Ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSubscribedChannels_Response";
            }),
            t
          );
        })(ye),
        Ue = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_FollowBroadcastChannel_Response";
            }),
            t
          );
        })(ye),
        Ae = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_subscribed || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_subscribed: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SubscribeBroadcastChannel_Response";
            }),
            t
          );
        })(ye),
        Ee = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ye.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ReportBroadcastChannel_Response";
            }),
            t
          );
        })(ye),
        Ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_subscribed: {
                        n: 2,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelInteraction_Response";
            }),
            t
          );
        })(ye),
        De = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [5], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                      name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      image: { n: 3, br: h.d.readString, bw: h.h.writeString },
                      viewers: {
                        n: 4,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      channels: { n: 5, c: Te, r: !0, q: !0 },
                      release_date: {
                        n: 6,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      developer: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      publisher: {
                        n: 8,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Game";
            }),
            t
          );
        })(ye),
        xe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: De, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetGames_Response";
            }),
            t
          );
        })(ye),
        Ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChannels_Response";
            }),
            t
          );
        })(ye),
        Pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasters || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { broadcasters: { n: 1, c: qe, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
            }),
            t
          );
        })(ye),
        qe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      rtmp_token: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
            }),
            t
          );
        })(ye),
        Le = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.issuer_steamid || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      issuer_steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      time_expires: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      permanent: { n: 4, br: h.d.readBool, bw: h.h.writeBool },
                      name: { n: 5, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatBan";
            }),
            t
          );
        })(ye),
        Qe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      duration: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      permanent: { n: 4, br: h.d.readBool, bw: h.h.writeBool },
                      undo: { n: 5, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Request";
            }),
            t
          );
        })(ye),
        ke = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ye.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Response";
            }),
            t
          );
        })(ye),
        Ve = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Le, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatBans_Response";
            }),
            t
          );
        })(ye),
        He = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      moderator_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      undo: { n: 3, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Request";
            }),
            t
          );
        })(ye),
        Ke = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ye.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Response";
            }),
            t
          );
        })(ye),
        Je = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Request";
            }),
            t
          );
        })(ye),
        Ye = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatModerator";
            }),
            t
          );
        })(ye),
        $e = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Ye, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Response";
            }),
            t
          );
        })(ye),
        Xe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ye.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddWordBan_Response";
            }),
            t
          );
        })(ye),
        Ze = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      results: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: h.d.readString,
                        bw: h.h.writeRepeatedString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetWordBans_Response";
            }),
            t
          );
        })(ye),
        et = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Request";
            }),
            t
          );
        })(ye),
        tt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      flair_group_ids: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: h.d.readUint64String,
                        bw: h.h.writeRepeatedUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Response";
            }),
            t
          );
        })(ye),
        rt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Search_Response";
            }),
            t
          );
        })(ye),
        nt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.stream_live_email || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      stream_live_email: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      stream_live_notification: {
                        n: 2,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSteamTVUserSettings_Response";
            }),
            t
          );
        })(ye),
        it = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ye.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetSteamTVUserSettings_Response";
            }),
            t
          );
        })(ye),
        at = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetMyBroadcastChannels_Response";
            }),
            t
          );
        })(ye),
        ot = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { broadcasts: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Takeover";
            }),
            t
          );
        })(ye),
        st = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: Te, r: !0, q: !0 },
                      appid: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                      title: { n: 3, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_SingleGame";
            }),
            t
          );
        })(ye),
        ut = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                      game_name: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast: { n: 3, c: Te },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GameListEntry";
            }),
            t
          );
        })(ye),
        ct = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.entries || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      entries: { n: 1, c: ut, r: !0, q: !0 },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_GameList";
            }),
            t
          );
        })(ye),
        lt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: Te, r: !0, q: !0 },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_QuickExplore";
            }),
            t
          );
        })(ye),
        dt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: Te, r: !0, q: !0 },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_ConveyorBelt";
            }),
            t
          );
        })(ye),
        mt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast: { n: 1, c: Te },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      chat_group_id: {
                        n: 3,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_WatchParty";
            }),
            t
          );
        })(ye),
        ft = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast: { n: 1, c: Te },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Developer";
            }),
            t
          );
        })(ye),
        pt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.title || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      title: { n: 1, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Event";
            }),
            t
          );
        })(ye),
        bt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.template_type || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      template_type: {
                        n: 1,
                        br: h.d.readEnum,
                        bw: h.h.writeEnum,
                      },
                      takeover: { n: 2, c: ot },
                      single_game: { n: 3, c: st },
                      game_list: { n: 4, c: ct },
                      quick_explore: { n: 5, c: lt },
                      conveyor_belt: { n: 6, c: dt },
                      watch_party: { n: 7, c: mt },
                      developer: { n: 8, c: ft },
                      event: { n: 9, c: pt },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageContentRow";
            }),
            t
          );
        })(ye),
        Bt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.rows || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { rows: { n: 1, c: bt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetHomePageContents_Response";
            }),
            t
          );
        })(ye),
        ht = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || h.a(t.M()),
              ye.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      channel_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      app_id: { n: 3, br: h.d.readUint32, bw: h.h.writeUint32 },
                      broadcaster_steamid: {
                        n: 4,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      creator_steamid: {
                        n: 5,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      video_description: {
                        n: 6,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      live_time: {
                        n: 7,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      length_ms: {
                        n: 8,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 9,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_BroadcastClipInfo";
            }),
            t
          );
        })(ye),
        yt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.clips || h.a(t.M()),
              ye.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      clips: { n: 1, c: ht, r: !0, q: !0 },
                      thumbnail_host: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelClips_Response";
            }),
            t
          );
        })(ye),
        _t = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ye.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AppCheer_Response";
            }),
            t
          );
        })(ye);
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, ge, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, ve, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, Se, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, we, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, Me, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, ze, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              t,
              Oe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, Re, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              Pe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, We, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, Ie, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, je, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, Ue, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, Ae, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, yt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, Ee, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              t,
              Ne,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, xe, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetChannels#1", t, Ge, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddChatBan = function (e, t) {
            return e.SendMsg("SteamTV.AddChatBan#1", t, ke, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, Ve, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, Ke, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, $e, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, Xe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, Ze, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, tt, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, rt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, nt, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, it, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, at, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, Bt, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, _t, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(_e || (_e = {}));
      var gt,
        vt,
        St = r("qiKp"),
        wt = r("TLQK"),
        Mt = r("XxJJ"),
        zt = r("lkRc"),
        Ct = B.Message,
        Rt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.bincremental || h.a(t.M()),
              Ct.initialize(n, r, 0, -1, [2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      bincremental: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      friends: { n: 2, c: Ft, r: !0, q: !0 },
                      max_friend_count: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      active_friend_count: {
                        n: 4,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      friends_limit_hit: {
                        n: 5,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CMsgClientFriendsList";
            }),
            t
          );
        })(Ct),
        Ft = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.ulfriendid || h.a(t.M()),
              Ct.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      ulfriendid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      efriendrelationship: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CMsgClientFriendsList_Friend";
            }),
            t
          );
        })(Ct),
        Ot = B.Message,
        jt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.groupid || h.a(t.M()),
              Ot.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      groupid: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      accountid_members: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListCategory";
            }),
            t
          );
        })(Ot),
        Tt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.categories || h.a(t.M()),
              Ot.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { categories: { n: 1, c: jt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetCategories_Response";
            }),
            t
          );
        })(Ot),
        Wt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.accountid || h.a(t.M()),
              Ot.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      accountid: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      clanid: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                      chat_group_id: {
                        n: 3,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListFavoriteEntry";
            }),
            t
          );
        })(Ot),
        It = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || h.a(t.M()),
              Ot.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { favorites: { n: 1, c: Wt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFavorites_Response";
            }),
            t
          );
        })(Ot),
        Ut = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Ot.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_SetFavorites_Response";
            }),
            t
          );
        })(Ot),
        At = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || h.a(t.M()),
              Ot.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { favorites: { n: 1, c: Wt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_FavoritesChanged_Notification";
            }),
            t
          );
        })(Ot),
        Et = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Ot.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Request";
            }),
            t
          );
        })(Ot),
        Nt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.friendslist || h.a(t.M()),
              Ot.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { friendslist: { n: 1, c: Rt } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new B.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new B.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new B.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Response";
            }),
            t
          );
        })(Ot);
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, Tt, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, Nt, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, It, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, Ut, {
              ePrivilege: 1,
            });
          });
      })(gt || (gt = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: At,
          };
        })(vt || (vt = {}));
      var Dt = r("oFam"),
        xt = r("kyHq"),
        Gt = r("uobO"),
        Pt = (function () {
          function e() {
            (this.m_mapPlayerCache = new Map()),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_strBannedPattern = ""),
              (this.m_strCleanPattern = ""),
              (this.m_regexBannedWords = null),
              (this.m_regexCleanWords = null),
              (this.m_bShownFilterTip = !1),
              (this.m_TextFilterPreferences = new xt.i());
            var e = new Dt.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (this.m_TextFilterWords = new Dt.n());
          }
          return (
            (e.prototype.Init = function (e, t, r) {
              return (
                void 0 === e && (e = 0),
                void 0 === t && (t = null),
                void 0 === r && (r = null),
                Object(n.b)(this, void 0, void 0, function () {
                  return Object(n.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (this.m_unAccountID = e),
                          (this.m_Transport = t),
                          (this.m_Storage = r),
                          (this.m_strBannedWords = ""),
                          (this.m_strProfanityWords = ""),
                          (this.m_strCleanWords = ""),
                          [4, this.LoadFilter()]
                        );
                      case 1:
                        return n.sent(), [4, this.LoadTextFilterPreferences()];
                      case 2:
                        return n.sent(), [4, this.LoadTextFilterWords()];
                      case 3:
                        return n.sent(), [4, this.RequestUpdatedSettings()];
                      case 4:
                        return n.sent(), [4, this.RequestFriendsList()];
                      case 5:
                        return n.sent(), [4, this.LoadLanguage(zt.c.LANGUAGE)];
                      case 6:
                        return (
                          n.sent(),
                          "english" === zt.c.LANGUAGE
                            ? [3, 8]
                            : [4, this.LoadLanguage("english")]
                        );
                      case 7:
                        n.sent(), (n.label = 8);
                      case 8:
                        return this.OnFilterDataChanged(), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.LoadTextFilterPreferences = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_TextFilterPreferences"
                            ),
                          ]
                        : [3, 2];
                    case 1:
                      (e = t.sent()) && (this.m_TextFilterPreferences = e),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveTextFilterPreferences = function () {
              this.m_Storage &&
                this.m_Storage.StoreObject(
                  "CTextFilterStore_TextFilterPreferences",
                  this.m_TextFilterPreferences
                );
            }),
            (e.prototype.LoadTextFilterWords = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_TextFilterWords"
                            ),
                          ]
                        : [3, 2];
                    case 1:
                      (e = t.sent()) &&
                        (this.m_TextFilterWords = Dt.n.fromObject(e)),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveTextFilterWords = function () {
              this.m_Storage &&
                this.m_Storage.StoreObject(
                  "CTextFilterStore_TextFilterWords",
                  this.m_TextFilterWords.toObject()
                );
            }),
            (e.prototype.LoadFilter = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(n.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_strBannedPattern"
                            ),
                          ]
                        : [3, 3];
                    case 1:
                      return (
                        (e = r.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            "CTextFilterStore_strCleanPattern"
                          ),
                        ]
                      );
                    case 2:
                      (t = r.sent()),
                        null != e && null != t && this.BRebuildFilter(e, t),
                        (r.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveFilter = function () {
              this.m_Storage &&
                (this.m_Storage.StoreObject(
                  "CTextFilterStore_strBannedPattern",
                  this.m_strBannedPattern
                ),
                this.m_Storage.StoreObject(
                  "CTextFilterStore_strCleanPattern",
                  this.m_strCleanPattern
                ));
            }),
            (e.prototype.RequestUpdatedSettings = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, a, o, s, u;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new Dt.a()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = m.b.Init(Dt.b)),
                            [
                              4,
                              Dt.o.GetCommunityPreferences(this.m_Transport, t),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().preferences()), [3, 5]
                      );
                    case 3:
                      return (
                        (s = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.e)(),
                        }),
                        [
                          4,
                          l.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetcommunitypreferences",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (u = n.sent()),
                        (e = Dt.a.fromObject(u.data.preferences)),
                        (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return n.sent(), [3, 7];
                    case 7:
                      if (
                        (this.UpdateCommunityPreferences(e),
                        e.text_filter_words_revision() ===
                          this.m_TextFilterWords.text_filter_words_revision())
                      )
                        return [3, 15];
                      if (
                        ((i = new Dt.n()), 0 === e.text_filter_words_revision())
                      )
                        return [3, 14];
                      n.label = 8;
                    case 8:
                      return (
                        n.trys.push([8, 13, , 14]),
                        this.m_Transport
                          ? ((a = m.b.Init(Dt.e)),
                            [4, Dt.o.GetTextFilterWords(this.m_Transport, a)])
                          : [3, 10]
                      );
                    case 9:
                      return (o = n.sent()), (i = o.Body().words()), [3, 12];
                    case 10:
                      return (
                        (s = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.e)(),
                        }),
                        [
                          4,
                          l.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgettextfiltercustomwords",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 11:
                      (u = n.sent()),
                        (i = Dt.n.fromObject(u.data.words)),
                        (n.label = 12);
                    case 12:
                      return [3, 14];
                    case 13:
                      return n.sent(), [3, 14];
                    case 14:
                      this.UpdateTextFilterWords(i), (n.label = 15);
                    case 15:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateCommunityPreferences = function (e) {
              var t = !1;
              e.text_filter_setting() !==
                this.m_TextFilterPreferences.eTextFilterSetting &&
                ((this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
                (t = !0)),
                e.text_filter_ignore_friends() !==
                  this.m_TextFilterPreferences.bIgnoreFriends &&
                  ((this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
                  (t = !0)),
                t && this.SaveTextFilterPreferences();
            }),
            Object.defineProperty(e.prototype, "TextFilterPreferences", {
              get: function () {
                return this.m_TextFilterPreferences;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.UpdateTextFilterWords = function (e) {
              (this.m_TextFilterWords = e), this.SaveTextFilterWords();
            }),
            (e.prototype.RequestFriendsList = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, a;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new Rt()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = m.b.Init(Et)),
                            [4, gt.GetFriendsList(this.m_Transport, t)])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().friendslist()), [3, 5]
                      );
                    case 3:
                      return (
                        (i = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.e)(),
                        }),
                        [
                          4,
                          l.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetfriendslist",
                            { params: i, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (a = n.sent()),
                        (e = Rt.fromObject(a.data.friendslist)),
                        (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return n.sent(), [3, 7];
                    case 7:
                      return this.SetFriendsList(e), [2];
                  }
                });
              });
            }),
            (e.prototype.SetFriendsList = function (e) {
              e.bincremental() || this.m_mapPlayerCache.clear();
              for (var t = 0, r = e.friends(); t < r.length; t++) {
                var n = r[t],
                  i = new b.a(n.ulfriendid());
                if (i.BIsIndividualAccount()) {
                  var a = n.efriendrelationship();
                  this.m_mapPlayerCache.set(i.GetAccountID(), a);
                }
              }
            }),
            (e.prototype.BIsFriend = function (e) {
              return (
                !!this.m_mapPlayerCache.has(e) &&
                3 == this.m_mapPlayerCache.get(e)
              );
            }),
            (e.prototype.LoadLanguage = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, i, a, o, s;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = "1"),
                        (r =
                          zt.c.COMMUNITY_CDN_URL +
                          "textfilter/gettextfilterdictionary?type=banned&language=" +
                          e +
                          "&v=" +
                          t +
                          "&origin=" +
                          Object(zt.e)()),
                        (n.label = 1);
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, l.a.get(r)];
                    case 2:
                      return (
                        (o = n.sent()),
                        (this.m_strBannedWords += o.data),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          i
                        ),
                        [3, 4]
                      );
                    case 4:
                      (r =
                        zt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=profanity&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(zt.e)()),
                        (n.label = 5);
                    case 5:
                      return n.trys.push([5, 7, , 8]), [4, l.a.get(r)];
                    case 6:
                      return (
                        (o = n.sent()),
                        (this.m_strProfanityWords += o.data),
                        [3, 8]
                      );
                    case 7:
                      return (
                        (a = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          a
                        ),
                        [3, 8]
                      );
                    case 8:
                      (r =
                        zt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=clean_public&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(zt.e)()),
                        (n.label = 9);
                    case 9:
                      return n.trys.push([9, 11, , 12]), [4, l.a.get(r)];
                    case 10:
                      return (
                        (o = n.sent()),
                        (this.m_strCleanWords += o.data),
                        [3, 12]
                      );
                    case 11:
                      return (
                        (s = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          s
                        ),
                        [3, 12]
                      );
                    case 12:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.AppendPattern = function (e, t) {
              return "" !== t && ("" !== e && (e += "|"), (e += t)), e;
            }),
            (e.prototype.CreatePattern = function (e) {
              var t = e.filter(function (e) {
                return "" !== e;
              });
              return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
            }),
            (e.prototype.OnFilterDataChanged = function () {
              var e = new RegExp(/\s*[\r\n]+\s*/g),
                t = [],
                r = [];
              switch (this.m_TextFilterPreferences.eTextFilterSetting) {
                case 0:
                case 3:
                  break;
                case 2:
                  t = t.concat(this.m_strBannedWords.split(e));
                  break;
                default:
                  t = t.concat(
                    this.m_strProfanityWords.split(e),
                    this.m_strBannedWords.split(e)
                  );
              }
              (t = t.concat(
                this.m_TextFilterWords.text_filter_custom_banned_words()
              )),
                (r = (r = this.m_strCleanWords.split(e)).concat(
                  this.m_TextFilterWords.text_filter_custom_clean_words()
                ));
              var n = this.CreatePattern(t),
                i = this.CreatePattern(r);
              "" != i && (i = "^(" + i + ")$"),
                this.BRebuildFilter(n, i) && this.SaveFilter();
            }),
            (e.prototype.BRebuildFilter = function (e, t) {
              if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
                return !1;
              if (((this.m_regexBannedWords = null), "" !== e))
                try {
                  this.m_regexBannedWords = new RegExp(e, "ugi");
                } catch (e) {
                  console.warn("Couldn't compile textfilter bannedwords regex"),
                    Object(Gt.a)().ReportError(
                      new Error(
                        "Couldn't compile textfilter bannedwords regex: " + e
                      )
                    );
                }
              if (((this.m_regexCleanWords = null), "" !== t))
                try {
                  this.m_regexCleanWords = new RegExp(t, "ugi");
                } catch (e) {
                  console.warn("Couldn't compile textfilter cleanwords regex"),
                    Object(Gt.a)().ReportError(
                      new Error(
                        "Couldn't compile textfilter cleanwords regex: " + e
                      )
                    );
                }
              return (
                (this.m_strBannedPattern = e), (this.m_strCleanPattern = t), !0
              );
            }),
            (e.prototype.CreateProfanityReplacement = function (e) {
              return "♥".repeat(e);
            }),
            (e.prototype.BHasFilter = function () {
              return null != this.m_regexBannedWords;
            }),
            (e.prototype.BShownFilterTip = function () {
              return this.m_bShownFilterTip;
            }),
            (e.prototype.SetFilterTipShown = function (e) {
              this.m_bShownFilterTip = e;
            }),
            (e.prototype.FilterText = function (e, t) {
              var r = this;
              if (!this.m_regexBannedWords) return t;
              var n = 0;
              "string" == typeof e && "" !== e
                ? (n = new b.a(e).GetAccountID())
                : "number" == typeof e && (n = e);
              return !t ||
                n == this.m_unAccountID ||
                (this.m_TextFilterPreferences.bIgnoreFriends &&
                  this.BIsFriend(n))
                ? t
                : t.replace(this.m_regexBannedWords, function (e) {
                    return r.m_regexCleanWords &&
                      0 == e.search(r.m_regexCleanWords)
                      ? e
                      : r.CreateProfanityReplacement(e.length);
                  });
            }),
            Object(n.c)([i.C], e.prototype, "m_TextFilterPreferences", void 0),
            Object(n.c)([i.C], e.prototype, "m_mapPlayerCache", void 0),
            Object(n.c)([i.C], e.prototype, "m_regexBannedWords", void 0),
            Object(n.c)([i.C], e.prototype, "m_regexCleanWords", void 0),
            Object(n.c)([i.k], e.prototype, "UpdateCommunityPreferences", null),
            Object(n.c)([i.k], e.prototype, "SetFriendsList", null),
            Object(n.c)([i.k], e.prototype, "BRebuildFilter", null),
            e
          );
        })(),
        qt = (function () {
          function e() {
            this.m_mapChats = new Map();
          }
          return (
            (e.prototype.GetChat = function (e, t) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(t);
            }),
            (e.prototype.GetOrCreateChat = function (e, t) {
              var r = this.GetChat(e, t);
              return r || ((r = new Lt()), this.m_mapChats.set(e || t, r)), r;
            }),
            Object(n.c)([i.C], e.prototype, "m_mapChats", void 0),
            e
          );
        })(),
        Lt = (function () {
          function e() {
            (this.m_ulBroadcastChannelID = ""),
              (this.m_ulChatID = ""),
              (this.m_strFlairGroupID = ""),
              (this.m_bAutoScroll = !0),
              (this.m_ulBroadcastID = ""),
              (this.m_ulBroadcastSteamID = ""),
              (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_cConsecutiveErrors = 0),
              (this.m_nNudgeFactorMS = 0),
              (this.m_nLastSleepMS = 0),
              (this.m_bReconnecting = !1),
              (this.m_unInstanceID = Math.floor(4294967296 * Math.random())),
              (this.m_strUserSteamID = ""),
              (this.m_regexUserEmoticons = null),
              (this.m_chatScheduledFunc = null),
              (this.m_webAPIInterface = null),
              (this.m_textFilterStore = null),
              (this.m_bHasAddedWelcomeChat = !1),
              (this.m_mapMutedUsers = {}),
              (this.m_mapChannelModeratorUsers = new Map()),
              (this.m_mapBroadcastModeratorUsers = new Map()),
              (this.m_nRateLimitSeconds = 0),
              (this.m_bRateLimited = !1),
              (this.m_rgChatMessages = []),
              (this.m_webAPIInterface = new p.a(
                zt.c.WEBAPI_BASE_URL,
                zt.i.webapi_token
              ));
          }
          return (
            (e.prototype.InitTextFilter = function () {
              this.m_textFilterStore = new Pt();
              var e = 0;
              "" !== zt.i.steamid && (e = new b.a(zt.i.steamid).GetAccountID());
              this.m_textFilterStore.Init(e, null, new f.a());
            }),
            Object.defineProperty(e.prototype, "TextFilterStore", {
              get: function () {
                return this.m_textFilterStore;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetBroadcastSteamID = function () {
              return this.m_ulBroadcastSteamID;
            }),
            (e.prototype.GetUserSteamID = function () {
              return this.m_strUserSteamID;
            }),
            (e.prototype.StartForSteamID = function (e, t) {
              (this.m_webAPIInterface = new p.a(
                zt.c.WEBAPI_BASE_URL,
                zt.i.webapi_token
              )),
                (this.m_ulBroadcastSteamID = e),
                (this.m_ulBroadcastID = t),
                this.InitTextFilter(),
                this.RequestChatInfo();
            }),
            (e.prototype.StartForChannel = function (e) {
              (this.m_webAPIInterface = new p.a(
                zt.c.WEBAPI_BASE_URL,
                zt.i.webapi_token
              )),
                (this.m_ulBroadcastChannelID = e),
                (this.m_strUserSteamID = zt.i.steamid),
                this.InitTextFilter(),
                this.JoinChannelChat();
            }),
            (e.prototype.Stop = function () {
              this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
            }),
            (e.prototype.SendMessage = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  i,
                  a,
                  o,
                  s,
                  u,
                  c = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (0 == (t = e.trim()).length) return [2];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        (r = void 0),
                        (i = void 0),
                        (a = void 0),
                        this.m_webApiToken
                          ? ((o = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            o.append("message", t),
                            o.append(
                              "instance_id",
                              this.m_unInstanceID.toString()
                            ),
                            [
                              4,
                              l.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/PostChatMessage/v0001?access_token=" +
                                  this.m_webApiToken,
                                o
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (i = n.sent()), (a = i.data && i.data.response), [3, 5]
                      );
                    case 3:
                      return (
                        (s = m.b.Init(x)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          message: t,
                          instance_id: this.m_unInstanceID.toString(),
                        }),
                        [
                          4,
                          O.PostChatMessage(
                            this.m_webAPIInterface.GetServiceTransport(),
                            s
                          ),
                        ]
                      );
                    case 4:
                      (r = n.sent()),
                        (a = {
                          result: r.GetEResult(),
                          cooldown_time_seconds: r
                            .Body()
                            .cooldown_time_seconds(),
                          in_game: r.Body().in_game(),
                          persona_name: r.Body().persona_name(),
                        }),
                        (n.label = 5);
                    case 5:
                      return a && a.result && 1 != a.result
                        ? ((u = ""),
                          (u =
                            17 == a.result
                              ? Object(wt.f)("#BroadcastChat_YouMuted")
                              : 84 == a.result
                              ? Object(wt.f)(
                                  "#BroadcastChat_Cooldown",
                                  a.cooldown_time_seconds
                                )
                              : Object(wt.f)(
                                  "#BroadcastChat_FailedToSendMsg",
                                  t
                                )),
                          this.m_rgChatMessages.push({
                            type: d.a.Error,
                            msg: u,
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: a.in_game,
                            persona_name: a.persona_name,
                            steamid: "",
                          }),
                          [2])
                        : (this.m_nRateLimitSeconds ||
                            (this.m_nRateLimitSeconds =
                              a.cooldown_time_seconds),
                          this.m_nRateLimitSeconds &&
                            ((this.m_bRateLimited = !0),
                            setTimeout(function () {
                              return (c.m_bRateLimited = !1);
                            }, 1e3 * this.m_nRateLimitSeconds)),
                          [3, 7]);
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: d.a.Error,
                          msg: Object(wt.f)(
                            "#BroadcastChat_FailedToSendMsg",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RequestChatInfo = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  a,
                  o = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (this.m_cConsecutiveErrors = 0),
                        (this.m_bReconnecting = !1),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        (t = {
                          steamid: this.m_ulBroadcastSteamID,
                          broadcastid: this.m_ulBroadcastID,
                          sessionid: zt.c.SESSIONID,
                        }),
                        [
                          4,
                          l.a.get(
                            zt.c.CHAT_BASE_URL + "broadcast/getchatinfo",
                            {
                              params: t,
                              withCredentials: !0,
                              cancelToken: null == e ? void 0 : e.token,
                            }
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (r = n.sent()),
                        (e && e.token.reason) ||
                          Object(i.G)(function () {
                            var e = r.data;
                            (o.m_strChatURL = e.view_url_template),
                              (o.m_ulChatID = e.chat_id),
                              (o.m_strFlairGroupID =
                                e.flair_group_ids && e.flair_group_ids[0]),
                              e.blocked &&
                                console.log("User is blocked from chat"),
                              e.steamid && (o.m_strUserSteamID = e.steamid),
                              e.token && (o.m_webApiToken = e.token),
                              e.emoticons && o.SetOwnedEmoticons(e.emoticons),
                              o.m_bHasAddedWelcomeChat ||
                                (o.m_rgChatMessages.push({
                                  type: d.a.Notification,
                                  msg: Object(wt.f)(
                                    "#BroadcastChat_DefaultMessage"
                                  ),
                                  client_ts: Number(new Date()),
                                  instance_id: o.m_unInstanceID,
                                  in_game: !1,
                                  persona_name: "",
                                  steamid: "",
                                }),
                                (o.m_bHasAddedWelcomeChat = !0)),
                              o.m_mapBroadcastModeratorUsers.clear(),
                              e.moderators_steamid &&
                                e.moderators_steamid.forEach(function (e) {
                                  return o.m_mapBroadcastModeratorUsers.set(
                                    e,
                                    !0
                                  );
                                }),
                              (o.m_chatScheduledFunc = new St.b()),
                              o.m_chatScheduledFunc.Schedule(0, o.RequestLoop);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (a = n.sent()),
                        console.error(a),
                        console.log("Failed to get chat info!"),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.JoinChannelChat = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        (e = m.b.Init(et)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          _e.JoinChat(
                            this.m_webAPIInterface.GetServiceTransport(),
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (t = n.sent()).Body().chat_id &&
                        t.Body().view_url_template
                        ? ((this.m_strChatURL = t.Body().view_url_template()),
                          (this.m_ulChatID = t.Body().chat_id()),
                          (this.m_strFlairGroupID =
                            t.Body().flair_group_ids() &&
                            t.Body().flair_group_ids()[0]),
                          this.FetchChatModerators(),
                          (this.m_rgChatMessages = []),
                          this.m_rgChatMessages.push({
                            type: d.a.Notification,
                            msg: Object(wt.f)("#BroadcastChat_DefaultMessage"),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          (this.m_bHasAddedWelcomeChat = !0),
                          (this.m_chatScheduledFunc = new St.b()),
                          this.m_chatScheduledFunc.Schedule(
                            0,
                            this.RequestLoop
                          ),
                          [3, 3])
                        : (console.log("Failed to join channel chat"), [2]);
                    case 2:
                      return (
                        (r = n.sent()),
                        console.error(r),
                        console.log("Failed to join chat!"),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.FetchChatModerators = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = m.b.Init(Je)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          _e.GetChatModerators(
                            this.m_webAPIInterface.GetServiceTransport(),
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (t = n.sent()),
                        (r = t.Body().results()),
                        (i = new Map()),
                        r.forEach(function (e) {
                          i.set(e.steamid(), !0);
                        }),
                        (this.m_mapChannelModeratorUsers = i),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.RequestLoop = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  i,
                  a,
                  o,
                  s,
                  u,
                  c,
                  m,
                  f,
                  p,
                  b,
                  B,
                  h,
                  y = this;
                return Object(n.e)(this, function (_) {
                  switch (_.label) {
                    case 0:
                      (e = {}),
                        (t = this.m_strChatURL.replace(
                          "{0}",
                          this.m_nNextChatTS.toString()
                        )) == this.m_strChatURL &&
                          this.m_nNextChatTS > 0 &&
                          (e.t = this.m_nNextChatTS),
                        (_.label = 1);
                    case 1:
                      return (
                        _.trys.push([1, 3, , 4]), [4, l.a.get(t, { params: e })]
                      );
                    case 2:
                      if (
                        ((r = _.sent()),
                        (i = r.data),
                        (this.m_cConsecutiveErrors = 0),
                        (a = i.messages
                          .map(function (e) {
                            return Object(n.a)(Object(n.a)({}, e), {
                              type: d.a.Chat,
                              client_ts: Number(new Date()),
                            });
                          })
                          .filter(function (e) {
                            return !y.IsUserMutedLocally(e.steamid);
                          })),
                        (h = this.m_rgChatMessages).push.apply(h, a),
                        (o = this.m_bAutoScroll ? 150 : 300),
                        this.m_rgChatMessages.length > o &&
                          this.m_rgChatMessages.splice(
                            0,
                            this.m_rgChatMessages.length - o
                          ),
                        i.muted)
                      )
                        for (s = 0, u = i.muted; s < u.length; s++)
                          (c = u[s]),
                            (m =
                              c.muted == this.m_strUserSteamID
                                ? Object(wt.f)(
                                    "#BroadcastChat_YouMuted",
                                    c.persona_name
                                  )
                                : Object(wt.f)(
                                    "#BroadcastChat_UserMuted",
                                    c.persona_name
                                  )),
                            this.m_rgChatMessages.push({
                              type: d.a.Notification,
                              msg: m,
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            });
                      if (i.remove_msgs)
                        for (f = 0, p = i.remove_msgs; f < p.length; f++)
                          (b = p[f]), this.RemoveUserMessagesLocal(b.steamid);
                      if (
                        ((B = 0),
                        null == this.m_tsFirstRequest ||
                          0 == this.m_nNextChatTS ||
                          i.initial_delay)
                      ) {
                        if ("undefined" === i.initial_delay)
                          return (
                            console.log(
                              "Need initial_delay to know when to request first chat message"
                            ),
                            [2]
                          );
                        (this.m_tsFirstRequest =
                          performance.now() + i.initial_delay),
                          (this.m_nFromFirstRequestMS = 0),
                          (this.m_nNextChatTS = i.next_request),
                          (B = i.initial_delay);
                      } else {
                        if (i.next_request < this.m_nNextChatTS)
                          return console.log("Next request in past"), [2];
                        (this.m_nFromFirstRequestMS +=
                          i.next_request - this.m_nNextChatTS),
                          (this.m_nNextChatTS = i.next_request),
                          (B =
                            this.m_tsFirstRequest +
                            this.m_nFromFirstRequestMS -
                            performance.now() +
                            this.m_nNudgeFactorMS);
                      }
                      return (
                        this.m_bReconnecting && (this.m_bReconnecting = !1),
                        (this.m_nLastSleepMS = B),
                        B < 0 && (B = 0),
                        this.m_chatScheduledFunc.Schedule(B, this.RequestLoop),
                        [3, 4]
                      );
                    case 3:
                      if (
                        (_.sent(),
                        console.log(
                          "Failed to get chat messages. Previous sleep set to: " +
                            this.m_nLastSleepMS +
                            " firstReq: " +
                            this.m_tsFirstRequest +
                            " firstFromRequest: " +
                            this.m_nFromFirstRequestMS +
                            " nudge: " +
                            this.m_nNudgeFactorMS
                        ),
                        this.m_cConsecutiveErrors++,
                        (this.m_nNudgeFactorMS += 10),
                        this.m_cConsecutiveErrors >= 4)
                      ) {
                        if (null == this.m_tsFirstRequest)
                          return (
                            this.m_rgChatMessages.push({
                              type: d.a.Error,
                              msg: Object(wt.f)(
                                "#BroadcastChat_UnableToJoinChat"
                              ),
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            }),
                            [2]
                          );
                        (this.m_cConsecutiveErrors = 0),
                          (this.m_bReconnecting = !0),
                          this.SyncChat();
                      }
                      return (
                        this.m_chatScheduledFunc.Schedule(
                          500,
                          this.RequestLoop
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.GetUserEmoticons = function () {
              return this.m_regexUserEmoticons;
            }),
            (e.prototype.SetOwnedEmoticons = function (e) {
              for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                n.length >= 2 && ":" == n[0]
                  ? t.push(n.substr(1, n.length - 2))
                  : t.push(n);
              }
              var i = ":(" + t.join("|") + "):";
              this.m_regexUserEmoticons = new RegExp(i, "g");
            }),
            (e.prototype.UpdateBroadcastChatModerator = function (e, t, r) {
              return Object(n.b)(this, void 0, void 0, function () {
                var i, a, o;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [3, 6];
                    case 1:
                      return (
                        n.trys.push([1, 4, , 5]),
                        (i = m.b.Init(He)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                          moderator_steamid: e,
                          undo: !t,
                        }),
                        [
                          4,
                          _e.AddChatModerator(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 2:
                      return (
                        n.sent(),
                        (o = Object(wt.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: d.a.Notification,
                          msg: o,
                        }),
                        [4, this.FetchChatModerators()]
                      );
                    case 3:
                      return n.sent(), [3, 5];
                    case 4:
                      return (
                        n.sent(),
                        (o = Object(wt.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: d.a.Error, msg: o }),
                        [3, 5]
                      );
                    case 5:
                      return [3, 10];
                    case 6:
                      (a = new FormData()).append(
                        "broadcaststeamid",
                        this.m_ulBroadcastSteamID
                      ),
                        a.append("moderatorsteamid", e),
                        a.append("bAdd", t ? "1" : "0"),
                        a.append("sessionid", zt.c.SESSIONID),
                        (n.label = 7);
                    case 7:
                      return (
                        n.trys.push([7, 9, , 10]),
                        [
                          4,
                          l.a.post(
                            zt.c.CHAT_BASE_URL +
                              "broadcast/ajaxupdatechannelmod",
                            a
                          ),
                        ]
                      );
                    case 8:
                      return (
                        n.sent(),
                        this.m_mapBroadcastModeratorUsers.set(e, t),
                        (o = Object(wt.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: d.a.Notification,
                          msg: o,
                        }),
                        [3, 10]
                      );
                    case 9:
                      return (
                        n.sent(),
                        (o = Object(wt.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: d.a.Error, msg: o }),
                        [3, 10]
                      );
                    case 10:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateUserChatBan = function (e, t, r, i, a, o) {
              return Object(n.b)(this, void 0, void 0, function () {
                var s, u, c, d;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (s = this.m_ulBroadcastSteamID),
                        (u = this.m_strUserSteamID),
                        this.m_ulBroadcastChannelID
                          ? ((c = m.b.Init(Qe)).SetBodyFields({
                              broadcast_channel_id: this.m_ulBroadcastChannelID,
                              chatter_steamid: e,
                              duration: 3600 * r,
                              permanent: i,
                              undo: o,
                            }),
                            [
                              4,
                              _e.AddChatBan(
                                this.m_webAPIInterface.GetServiceTransport(),
                                c
                              ),
                            ])
                          : [3, 2]
                      );
                    case 1:
                      return n.sent(), [3, 6];
                    case 2:
                      (d = new FormData()).append("broadcaststeamid", s),
                        d.append("issuersteamid", u),
                        d.append("chattersteamid", e),
                        d.append("bantype", t),
                        d.append("duration", r.toString()),
                        d.append("perm", i ? "1" : "0"),
                        d.append("sessionid", zt.c.SESSIONID),
                        (n.label = 3);
                    case 3:
                      return (
                        n.trys.push([3, 5, , 6]),
                        [
                          4,
                          l.a.post(
                            zt.c.CHAT_BASE_URL + "broadcast/ajaxupdateusermute",
                            d
                          ),
                        ]
                      );
                    case 4:
                      return (
                        n.sent(),
                        0 == t
                          ? delete this.m_mapMutedUsers[e]
                          : (this.m_mapMutedUsers[e] = a),
                        [3, 6]
                      );
                    case 5:
                      return (
                        n.sent(),
                        console.log("Failed to update mute for " + a),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.MuteUserForSession = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i, a;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      if (this.m_ulBroadcastSteamID == e) return [2];
                      if (
                        ((r =
                          this.m_ulBroadcastSteamID == this.m_strUserSteamID),
                        this.m_mapMutedUsers[e])
                      )
                        return [3, 7];
                      (this.m_mapMutedUsers[e] = t), (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((i = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            i.append("user_steamid", e),
                            i.append("muted", "1"),
                            [
                              4,
                              l.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                  this.m_webApiToken,
                                i
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (a = m.b.Init(L)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !0,
                        }),
                        [
                          4,
                          O.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        n.sent(),
                        r &&
                          (this.m_rgChatMessages.push({
                            type: d.a.Error,
                            msg: Object(wt.f)(
                              "#BroadcastChat_UserMuteFailed",
                              t
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          delete this.m_mapMutedUsers[e]),
                        [3, 7]
                      );
                    case 7:
                      return (
                        r ||
                          this.m_rgChatMessages.push({
                            type: d.a.Notification,
                            msg: Object(wt.f)(
                              "#BroadcastChat_UserMutedLocal",
                              t
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UnmuteUserForSession = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      if (
                        (this.m_mapMutedUsers[e] &&
                          delete this.m_mapMutedUsers[e],
                        !(this.m_ulBroadcastSteamID == this.m_strUserSteamID))
                      )
                        return [3, 8];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((r = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            r.append("user_steamid", e),
                            r.append("muted", "0"),
                            [
                              4,
                              l.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                  this.m_webApiToken,
                                r
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (i = m.b.Init(L)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !1,
                        }),
                        [
                          4,
                          O.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return (
                        this.m_rgChatMessages.push({
                          type: d.a.Notification,
                          msg: Object(wt.f)(
                            "#BroadcastChat_UserUnmutedLocal",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: d.a.Error,
                          msg: Object(wt.f)(
                            "#BroadcastChat_UserUnmuteFailed",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [3, 9];
                    case 8:
                      this.m_rgChatMessages.push({
                        type: d.a.Notification,
                        msg: Object(wt.f)("#BroadcastChat_UserUnmutedLocal", t),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                        (n.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RemoveUserMessagesLocal = function (e) {
              this.m_rgChatMessages = this.m_rgChatMessages.filter(function (
                t
              ) {
                return t.steamid !== e;
              });
            }),
            (e.prototype.RemoveUserMessagesServer = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((r = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            r.append("user_steamid", e),
                            [
                              4,
                              l.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/RemoveUserChatText/v0001/?access_token=" +
                                  this.m_webApiToken,
                                r
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (i = m.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                        }),
                        [
                          4,
                          O.RemoveUserChatText(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: d.a.Error,
                          msg: Object(wt.f)(
                            "#BroadcastChat_RemoveMessagesFailed",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateChatMessageFlair = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.m_webApiToken
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append(
                            "flair",
                            "^" + this.m_strFlairGroupID + "^:" + e + ":"
                          ),
                          [
                            4,
                            l.a.post(
                              zt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return n.sent(), [3, 4];
                    case 2:
                      return (
                        (r = m.b.Init(P)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          flair: "^" + this.m_strFlairGroupID + "^:" + e + ":",
                        }),
                        [
                          4,
                          O.UpdateChatMessageFlair(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 3:
                      n.sent(), (n.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.IsUserMutedLocally = function (e) {
              return Boolean(this.m_mapMutedUsers[e]);
            }),
            (e.prototype.BIsUserBroadcastModerator = function (e) {
              return this.m_mapBroadcastModeratorUsers.has(e);
            }),
            (e.prototype.IsUserBroadcaster = function (e) {
              return e === this.m_ulBroadcastSteamID;
            }),
            (e.prototype.SyncChat = function () {
              (this.m_tsFirstRequest = null),
                (this.m_nFromFirstRequestMS = 0),
                (this.m_nNextChatTS = 0),
                (this.m_rgChatMessages = []);
            }),
            Object(n.c)(
              [i.C],
              e.prototype,
              "m_mapChannelModeratorUsers",
              void 0
            ),
            Object(n.c)(
              [i.C],
              e.prototype,
              "m_mapBroadcastModeratorUsers",
              void 0
            ),
            Object(n.c)([i.C], e.prototype, "m_nRateLimitSeconds", void 0),
            Object(n.c)([i.C], e.prototype, "m_bRateLimited", void 0),
            Object(n.c)([i.C], e.prototype, "m_rgChatMessages", void 0),
            Object(n.c)([Mt.a], e.prototype, "FetchChatModerators", null),
            Object(n.c)([Mt.a], e.prototype, "RequestLoop", null),
            Object(n.c)([Mt.a], e.prototype, "MuteUserForSession", null),
            e
          );
        })(),
        Qt = new qt();
      window.g_BroadcastChatStore = Qt;
      var kt = r("1BdX"),
        Vt = r("a5LV"),
        Ht = r("Z9dU"),
        Kt = r.n(Ht),
        Jt = r("y+6m"),
        Yt = r("Gorr"),
        $t = r("0QoN"),
        Xt = r("gPCo"),
        Zt = r("5znp"),
        er = r.n(Zt),
        tr = function () {
          return s.a.createElement(
            "div",
            { className: er.a.FriendsListInsetShadowCtn },
            s.a.createElement("div", {
              className: er.a.FriendListInsetShadowTop,
            })
          );
        },
        rr = function () {
          return s.a.createElement(
            "div",
            { className: er.a.FriendsListInsetShadowCtn },
            s.a.createElement("div", {
              className: er.a.FriendListInsetShadowBottom,
            })
          );
        },
        nr = r("6Y59"),
        ir = r("exH9"),
        ar = r("opsS"),
        or = r("3sYe"),
        sr = r.n(or),
        ur = new RegExp("ː([^ː]*)ː", "g"),
        cr =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      var lr = function (e) {
          var t = e.userType,
            r = e.msg,
            n = e.presenterInfo;
          if ("presenter" === t)
            return o.createElement(
              "span",
              null,
              o.createElement(
                Xt.b,
                {
                  name: n.name,
                  title: n.title,
                  photo: n.photo,
                  company: n.company,
                  bioString: n.bio,
                },
                o.createElement(
                  "a",
                  {
                    className: Object(ir.a)(
                      sr.a.MessageName,
                      sr.a.MessagePresenter
                    ),
                    href: zt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          var i = null;
          return (
            "broadcaster" === t
              ? (i = sr.a.MessageBroadcaster)
              : "moderator" === t && (i = sr.a.MessageModerator),
            o.createElement(
              "span",
              null,
              o.createElement(
                "a",
                {
                  className: Object(ir.a)(sr.a.MessageName, i),
                  href: zt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                  "data-miniprofile": "s" + r.steamid,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                r.persona_name
              )
            )
          );
        },
        dr = function (e) {
          switch (e.userType) {
            case "presenter":
              return o.createElement(
                "span",
                {
                  className: sr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(wt.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                o.createElement(nr.g, null)
              );
            case "moderator":
              return o.createElement(
                "span",
                {
                  className: sr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(wt.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                o.createElement(nr.h, null)
              );
            case "broadcaster":
              return o.createElement(
                "span",
                {
                  className: sr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(wt.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                o.createElement(nr.f, null)
              );
            default:
              return null;
          }
        },
        mr = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              (r.m_chat = null),
              (r.messagesContainer = o.createRef()),
              (r.textInput = o.createRef()),
              (r.state = { message: "" }),
              r
            );
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.StartChat();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this.m_chat && this.m_chat.m_bAutoScroll && this.ScrollToBottom(),
                (this.props.steamID === e.steamID &&
                  this.props.broadcastID === e.broadcastID &&
                  this.props.broadcastChannelID === e.broadcastChannelID) ||
                  this.StartChat();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_chat && this.m_chat.Stop();
            }),
            (t.prototype.StartChat = function () {
              this.m_chat && this.m_chat.Stop(),
                (this.m_chat = Qt.GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID
                )),
                this.props.broadcastChannelID
                  ? this.m_chat.StartForChannel(this.props.broadcastChannelID)
                  : this.props.steamID &&
                    this.props.steamID &&
                    this.props.broadcastID &&
                    (this.m_chat.StartForSteamID(
                      this.props.steamID,
                      this.props.broadcastID
                    ),
                    this.ScrollToBottom());
            }),
            (t.prototype.ChatBoxChange = function (e) {
              this.setState({ message: e.target.value });
            }),
            (t.prototype.ChatBoxKeypress = function (e) {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (this.SendMessage(), e.preventDefault());
            }),
            (t.prototype.SendMessage = function (e) {
              this.m_chat.m_bRateLimited ||
                (this.m_chat.SendMessage(this.state.message),
                this.setState({ message: "" }),
                e && e.preventDefault());
            }),
            (t.prototype.IsTrustedDomain = function (e) {
              return !!e.match(cr);
            }),
            (t.prototype.AddLinksEmoticons = function (e, t) {
              t && this.m_chat.GetUserEmoticons();
              for (var r = e.split(ur), n = [], i = 0; i < r.length; i += 1)
                i % 2 == 1
                  ? n.push(
                      o.createElement(Yt.b, {
                        emoticonHoverStore: Vt.b,
                        key: i,
                        emoticon: r[i],
                        large: !0,
                      })
                    )
                  : n.push(r[i]);
              return n;
            }),
            (t.prototype.HandleScroll = function (e) {
              var t =
                e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                e.currentTarget.scrollHeight - 6;
              this.m_chat && (this.m_chat.m_bAutoScroll = t);
            }),
            (t.prototype.ScrollToBottom = function () {
              this.messagesContainer &&
                this.messagesContainer.current &&
                (this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight);
            }),
            (t.prototype.OnContextMenu = function (e, t) {
              var r = this;
              if (t.type !== d.a.Chat) return null;
              var n = [],
                i = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
                a = this.m_chat.BIsUserBroadcastModerator(
                  this.m_chat.GetUserSteamID()
                );
              ((zt.i && zt.i.is_support) || i || a
                ? n.push(
                    o.createElement(
                      Jt.d,
                      {
                        key: "remove",
                        onSelected: function () {
                          return r.m_chat.RemoveUserMessagesServer(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_RemoveMessages")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "updatebanh",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            12,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_half_Mute")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "updateband",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            24,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_day_Mute")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "updatebanw",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            168,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_week_Mute")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "updatebanp",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            0,
                            !0,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_perm_Mute")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "removeban",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            0,
                            0,
                            !1,
                            t.persona_name,
                            !0
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_Unmute")
                    )
                  )
                : this.m_chat.IsUserMutedLocally(t.steamid)
                ? n.push(
                    o.createElement(
                      Jt.d,
                      {
                        key: "unmuteuser",
                        onSelected: function () {
                          return r.m_chat.UnmuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_UnmuteLocal")
                    )
                  )
                : n.push(
                    o.createElement(
                      Jt.d,
                      {
                        key: "muteuser",
                        onSelected: function () {
                          return r.m_chat.MuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_MuteLocal")
                    )
                  ),
              (zt.i && zt.i.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                t.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                  ? n.push(
                      o.createElement(
                        Jt.d,
                        {
                          key: "removemod",
                          onSelected: function () {
                            return r.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !1,
                              t.persona_name
                            );
                          },
                        },
                        Object(wt.f)("#BroadcastChat_Remove_Moderator")
                      )
                    )
                  : n.push(
                      o.createElement(
                        Jt.d,
                        {
                          key: "addmod",
                          onSelected: function () {
                            return r.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !0,
                              t.persona_name
                            );
                          },
                        },
                        Object(wt.f)("#BroadcastChat_Add_Moderator")
                      )
                    ));
              return n.length
                ? Object(u.a)(
                    o.createElement(
                      Jt.c,
                      null,
                      o.createElement(
                        "div",
                        { className: sr.a.SelectedUserNameCtn },
                        Object(wt.f)("#BroadcastChat_User"),
                        o.createElement("br", null),
                        o.createElement(
                          "span",
                          { className: sr.a.SelectedUserName },
                          t.persona_name
                        )
                      ),
                      n
                    ),
                    e
                  )
                : null;
            }),
            (t.prototype.OnEmoticonSelected = function (e, t) {
              void 0 === t && (t = !1),
                this.setState({ message: this.state.message + "ː" + e + "ː" }),
                this.textInput &&
                  this.textInput.current &&
                  this.textInput.current.focus();
            }),
            (t.prototype.OnFlairSelected = function (e) {
              this.m_chat.UpdateChatMessageFlair(e),
                this.textInput &&
                  this.textInput.current &&
                  this.textInput.current.focus();
            }),
            (t.prototype.GetTypeClassName = function (e) {
              return e.type === d.a.Notification
                ? sr.a.MessageNotification
                : e.type === d.a.Error
                ? sr.a.MessageError
                : sr.a.MessageChat;
            }),
            (t.prototype.FormatMessage = function (e, t) {
              if (e.type === d.a.Chat) {
                var r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
                return this.AddLinksEmoticons(r, !1);
              }
              return e.msg;
            }),
            (t.prototype.RenderUserChatLine = function (e, t, r) {
              var n = this,
                i = r ? r.get(e.steamid) : void 0,
                a =
                  e.type === d.a.Chat
                    ? (function (e, t, r) {
                        return r
                          ? "presenter"
                          : t.GetBroadcastSteamID() === e
                          ? "broadcaster"
                          : t.BIsUserBroadcastModerator(e)
                          ? "moderator"
                          : "";
                      })(e.steamid, this.m_chat, i)
                    : "";
              return o.createElement(
                "div",
                {
                  key: e.instance_id + "_" + e.client_ts + "_" + t,
                  className: this.GetTypeClassName(e),
                  onContextMenu: function (t) {
                    return n.OnContextMenu(t, e);
                  },
                },
                e.type === d.a.Chat && o.createElement(dr, { userType: a }),
                e.flair &&
                  o.createElement(
                    "span",
                    { className: sr.a.FlairContainer },
                    this.AddLinksEmoticons(e.flair, !1)
                  ),
                e.type === d.a.Chat &&
                  o.createElement(lr, {
                    userType: a,
                    msg: e,
                    presenterInfo: i,
                  }),
                e.type === d.a.Chat &&
                  this.m_chat.GetBroadcastSteamID() === e.steamid &&
                  o.createElement(
                    "span",
                    {
                      className:
                        sr.a.MessageNotification + " " + sr.a.MessageContents,
                    },
                    " (" + Object(wt.f)("#BroadcastChat_Broadcaster") + ")"
                  ),
                e.type === d.a.Chat &&
                  this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
                  o.createElement(
                    "span",
                    {
                      className:
                        sr.a.MessageNotification + " " + sr.a.MessageContents,
                    },
                    " (" + Object(wt.f)("#BroadcastChat_Moderator") + ")"
                  ),
                o.createElement(
                  "span",
                  {
                    className:
                      sr.a.MessageContents +
                      " " +
                      (this.AddLinksEmoticons(e.msg, !1).filter(function (e) {
                        return e && "string" == typeof e;
                      }).length
                        ? ""
                        : sr.a.EmoticonsOnly),
                  },
                  e.type === d.a.Chat ? " : " : "",
                  this.FormatMessage(e, this.m_chat.TextFilterStore)
                )
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.m_chat ? this.m_chat.m_rgChatMessages : [],
                r = this.m_chat
                  ? kt.b.GetPresenterMapForBroadcasterSteamID(
                      this.m_chat.GetBroadcastSteamID()
                    )
                  : void 0;
              return o.createElement(
                "div",
                {
                  className: sr.a.ChatPanel,
                  style: this.props.hidden ? { display: "none" } : void 0,
                },
                o.createElement(tr, null),
                o.createElement(
                  "div",
                  {
                    className: sr.a.ChatMessages + " " + Kt.a.minHeightZero,
                    onScroll: this.HandleScroll,
                    ref: this.messagesContainer,
                  },
                  t.map(function (t, n) {
                    return e.RenderUserChatLine(t, n, r);
                  })
                ),
                o.createElement(rr, null),
                zt.i && zt.i.logged_in && this.m_chat
                  ? o.createElement(
                      "div",
                      {
                        className: Object(ir.a)(
                          sr.a.ChatEntryCtn,
                          "ChatEntryCtn"
                        ),
                      },
                      o.createElement(
                        "div",
                        {
                          className: Object(ir.a)(sr.a.ChatEntry, "ChatEntry"),
                        },
                        o.createElement(
                          "form",
                          { className: "" + Kt.a.chatEntryControls },
                          o.createElement("textarea", {
                            className: Kt.a.chatTextarea,
                            placeholder: Object(wt.f)(
                              "#BroadcastChat_EnterResponse"
                            ),
                            onKeyPress: this.ChatBoxKeypress,
                            onChange: this.ChatBoxChange,
                            value: this.state.message,
                            ref: this.textInput,
                          }),
                          this.m_chat.m_bRateLimited &&
                            o.createElement(fr, {
                              nSeconds: this.m_chat.m_nRateLimitSeconds,
                              bRateLimited: this.m_chat.m_bRateLimited,
                            }),
                          o.createElement(
                            "button",
                            {
                              className:
                                Kt.a.chatSubmitButton +
                                " " +
                                (this.state.message ? "" : Kt.a.disabled),
                              title: Object(wt.f)("#ChatEntryButton_Submit"),
                              onClick: this.SendMessage,
                            },
                            o.createElement(nr.cb, null)
                          )
                        ),
                        o.createElement(
                          "div",
                          {
                            style: { height: "50px" },
                            className: "" + Kt.a.chatEntryActionsContainer,
                          },
                          o.createElement(
                            "div",
                            { className: Kt.a.chatEntryActionsGroup },
                            o.createElement($t.a, {
                              disabled: !1,
                              OnEmoticonSelected: this.OnEmoticonSelected,
                              rtLastAckedNewEmoticons: Number.MAX_VALUE,
                              emoticonStore: this.props.emoticonStore,
                              emoticonHoverStore: Vt.b,
                            }),
                            this.m_chat.m_strFlairGroupID &&
                              this.props.emoticonStore.flair_list &&
                              this.props.emoticonStore.GetFlairListByGroupID(
                                this.m_chat.m_strFlairGroupID
                              ).length
                              ? o.createElement($t.a, {
                                  disabled: !1,
                                  OnEmoticonSelected: this.OnFlairSelected,
                                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                                  emoticonStore: this.props.emoticonStore,
                                  emoticonHoverStore: Vt.b,
                                  strFlairGroupID: this.m_chat
                                    .m_strFlairGroupID,
                                  title: Object(wt.f)("#ChatEntryButton_Flair"),
                                  buttonIcon: o.createElement(nr.i, null),
                                })
                              : null
                          )
                        )
                      )
                    )
                  : null
              );
            }),
            Object(n.c)([i.C], t.prototype, "m_chat", void 0),
            Object(n.c)([ar.a], t.prototype, "StartChat", null),
            Object(n.c)([ar.a], t.prototype, "ChatBoxChange", null),
            Object(n.c)([ar.a], t.prototype, "ChatBoxKeypress", null),
            Object(n.c)([ar.a], t.prototype, "SendMessage", null),
            Object(n.c)([ar.a], t.prototype, "HandleScroll", null),
            Object(n.c)([ar.a], t.prototype, "OnContextMenu", null),
            Object(n.c)([ar.a], t.prototype, "OnEmoticonSelected", null),
            Object(n.c)([ar.a], t.prototype, "OnFlairSelected", null),
            Object(n.c)([ar.a], t.prototype, "RenderUserChatLine", null),
            (t = Object(n.c)([a.a], t))
          );
        })(o.Component),
        fr = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              return o.createElement(
                "div",
                { className: sr.a.TimedProgressBarContainer },
                o.createElement(
                  "div",
                  { className: sr.a.wrapper },
                  o.createElement("div", {
                    className: sr.a.spinner + " " + sr.a.pie,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  }),
                  o.createElement("div", {
                    className: sr.a.filler + " " + sr.a.pie,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  }),
                  o.createElement("div", {
                    className: sr.a.mask,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  })
                )
              );
            }),
            t
          );
        })(o.Component);
    },
    erIC: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "ConferenceRoutes", function () {
          return me;
        });
      var n = r("q1tI"),
        i = r("EC67"),
        a = r("WplJ"),
        o = r("rcjX"),
        s = r("mgoM"),
        u = r("kLLr"),
        c = r("N2vu"),
        l = r("lkRc"),
        d = (function () {
          function e() {
            (this.m_mapConferences = new Map()),
              (this.m_mapConferenceCallback = new Map());
          }
          return (
            (e.prototype.GetConferenceInfo = function (e) {
              return this.m_mapConferences.get(e);
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()),
                  e.s_Singleton.Init(),
                  "dev" == l.c.WEB_UNIVERSE &&
                    (window.g_ConferenceStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(l.g)("conferenceinfo", "application_config");
              if (this.ValidateStoreDefault(e)) {
                var t = Object(s.d)(l.c.LANGUAGE),
                  r = Object(c.c)(e.clan_faq_about_page),
                  n = c.a.Get().GetFAQPublishedContent(r, t),
                  i = Object(o.d)(e.localized_logo, t, n.timestamp),
                  a = {
                    strConferenceID: e.vanity,
                    rtStartTime: e.start_rtime,
                    rtEndTime: e.end_rtime,
                    clanSteamID: new u.a(e.event_group_steamid),
                    broadcastSteamID: new u.a(e.broadcast_steamid),
                    bPartnerOnly: e.partner_only,
                    faqAboutPage: n,
                    strLocalizedLogos: "string" == typeof i ? [i] : i,
                    globalQandASessionID: e.global_qanda_session_id,
                  };
                this.m_mapConferences.set(e.vanity, a);
              }
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              var t = e;
              return (
                !(!t || "object" != typeof t) &&
                "string" == typeof t.event_group_steamid &&
                "number" == typeof t.start_rtime &&
                "number" == typeof t.end_rtime
              );
            }),
            e
          );
        })(),
        m = r("IjL/"),
        f = r("YLyR"),
        p = r("UxvL"),
        b = r("fbnN"),
        B = r("TLQK");
      function h(e) {
        e.conferenceInfo;
        return "dev" != l.c.WEB_UNIVERSE ? null : n.createElement("div", null);
      }
      var y = r("mrSG"),
        _ = r("WF3T"),
        g = r("9w6b"),
        v = (function () {
          function e() {
            this.m_inFlight = null;
          }
          return (
            (e.prototype.LoadInitialCalendarData = function (e, t) {
              return Object(y.b)(this, void 0, void 0, function () {
                return Object(y.e)(this, function (r) {
                  return (
                    this.m_inFlight ||
                      (this.m_inFlight = this.InternalLoadInitialCalendarData(
                        e,
                        t
                      )),
                    [2, this.m_inFlight]
                  );
                });
              });
            }),
            (e.prototype.InternalLoadInitialCalendarData = function (e, t) {
              return Object(y.b)(this, void 0, void 0, function () {
                var r, n;
                return Object(y.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        g.a.IsInitialized() || g.a.InitGlobal(),
                        Object(_.c)({
                          collectionid: t,
                          bSectionByDay: !0,
                          rtCalendarEnd: e,
                        }),
                        (r = Object(_.b)()),
                        (n = Object(l.g)(
                          "conference_calendar",
                          "application_config"
                        ))
                          ? ("dev" == l.c.WEB_UNIVERSE &&
                              console.log(
                                "Conference LandingPage loading initial events: " +
                                  n.length,
                                n
                              ),
                            [4, r.RegisterCalendarEventsAndModels(n)])
                          : [3, 2]
                      );
                    case 1:
                      i.sent(), (i.label = 2);
                    case 2:
                      return (
                        r.SetFilteredView(function (e) {
                          return !0;
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.Get = function () {
              return e.m_singleton || (e.m_singleton = new e()), e.m_singleton;
            }),
            e
          );
        })(),
        S = r("1BdX"),
        w = r("5izx"),
        M = r("6oCP"),
        z = r("fA8f"),
        C = r("cGQe"),
        R = r("r3N9"),
        F = r("GiuM"),
        O = r("opsS");
      function j(e) {
        var t = e.displayLocation,
          r = e.fnChangeModalEvent,
          i = n.useState(null),
          a = i[0],
          o = i[1],
          s = Object(F.d)("emgid", null),
          c = s[0],
          l = s[1],
          d = Object(F.d)("emclan", null),
          m = d[0],
          f = d[1];
        return (
          Object(O.d)(r, function (e, t) {
            l(e), f(u.a.InitFromClanID(t).ConvertTo64BitString());
          }),
          n.useEffect(
            function () {
              if (null != c && null != m) {
                var e = new u.a(m);
                M.d
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(e, c, 0)
                  .then(o);
              }
            },
            [c, m]
          ),
          a
            ? n.createElement(R.a, {
                appid: a.appid,
                trackingLocation: t,
                announcementGID: a.GetAnnouncementGID(),
                partnerEventStore: M.d,
                eventModel: a,
                showAppHeader: !0,
                closeModal: function () {
                  o(null), f(null), l(null);
                },
              })
            : null
        );
      }
      var T = r("gPCo"),
        W = r("0OaU"),
        I = r("r64O"),
        U = r("qiKp"),
        A = r("exH9"),
        E = r("Z1oF"),
        N = r("CdLH"),
        D = r("JsZI");
      function x(e) {
        var t = Object(_.b)(),
          r = Object(w.b)(),
          i = t.GetActiveEventsAt(r) || [],
          a = n.useState(new U.a())[0];
        return 0 == t.GetNumEventsLoaded()
          ? n.createElement(
              "div",
              null,
              Object(B.f)("#Conference_No_Schedule_Yet")
            )
          : n.createElement(
              "div",
              { className: D.EventsScheduleCtn },
              n.createElement(j, { displayLocation: 6, fnChangeModalEvent: a }),
              n.createElement(L, { rgActiveEvents: i }),
              n.createElement(P, {
                rgActiveEvents: i,
                fnDisplayModalEvent: function (e, t) {
                  return a.Dispatch(e, t);
                },
              })
            );
      }
      function G(e) {
        return n.createElement(
          V,
          Object(y.a)({}, e),
          n.createElement(x, Object(y.a)({}, e))
        );
      }
      function P(e) {
        var t = e.rgActiveEvents,
          r = Object(_.b)(),
          i = Object(w.b)(),
          a = r
            .GetCalendarItemsInTimeRange(i + 1)
            .rgCalendarItems.filter(function (e) {
              return !t.some(function (t) {
                return t.GID == e.unique_id;
              });
            })
            .sort(function (e, t) {
              return e.start_time - t.start_time;
            });
        return 0 == a.length
          ? n.createElement(
              "div",
              null,
              Object(B.f)("#Conference_No_More_Schedule")
            )
          : n.createElement(
              "div",
              { className: D.UpcomingEventsCtn },
              n.createElement(
                "div",
                { className: D.SectionTitle },
                Object(B.f)("#Conference_ScheduleNext")
              ),
              n.createElement(
                "div",
                { className: D.EventSchedCtn },
                a.map(function (r, i) {
                  return n.createElement(q, {
                    key: r.unique_id,
                    bDisplayAsUpNext: Boolean(0 == i && t.length >= 1),
                    calendarItem: r,
                    fnDisplayModalEvent: e.fnDisplayModalEvent,
                  });
                })
              )
            );
      }
      function q(e) {
        var t = e.calendarItem,
          r = e.bDisplayAsUpNext,
          i = e.fnDisplayModalEvent,
          a = M.d.GetClanEventModel(t.unique_id),
          o = Object(s.d)(l.c.LANGUAGE),
          u = Object(w.b)(),
          c = a.GetStartTimeAndDateUnixSeconds(),
          d = Object(N.b)(new Date(1e3 * u), new Date(1e3 * c));
        return n.createElement(
          "div",
          {
            className: D.EventItemCtn,
            onClick: function () {
              return i(a.GID, a.clanSteamID.GetAccountID());
            },
          },
          n.createElement(
            "div",
            { className: D.Title },
            a.GetNameWithFallback(o)
          ),
          n.createElement(
            "div",
            { className: D.SessionTime },
            !d && n.createElement("div", null, Object(B.k)(c, !0)),
            n.createElement(
              "div",
              null,
              Boolean(r && d)
                ? Object(B.f)(
                    "#Conference_StartInMin",
                    Math.max(1, Math.floor((c - u) / 60))
                  )
                : Object(B.f)("#Conference_StartsAt", Object(E.h)(c))
            )
          ),
          n.createElement(
            "div",
            { className: Object(A.a)(D.ReminderContainer, D.OnlyIcon) },
            n.createElement(C.a, {
              eventModel: a,
              eventGID: a.GID,
              lang: o,
              bOnlyShowIcon: !0,
              bExpandLeft: !0,
              bShowStartTime: !1,
            })
          )
        );
      }
      function L(e) {
        var t = e.rgActiveEvents;
        if (!t || 0 == t.length) return null;
        Object(I.a)(
          1 == t.length,
          "Unexpected number of active events in the conference tool"
        );
        var r = t[0],
          i = Object(s.d)(l.c.LANGUAGE),
          a = S.a.ParseEventModelPresenters(r, i);
        return n.createElement(
          "div",
          { className: D.ActiveEventCtn },
          n.createElement(
            "div",
            { className: D.LiveNote },
            n.createElement("div", { className: D.LiveIcon }),
            "Live Now!"
          ),
          n.createElement(
            "div",
            { className: D.Title },
            r.GetNameWithFallback(i)
          ),
          Boolean(a) &&
            a.map(function (e) {
              return n.createElement(
                T.b,
                {
                  key: "presenter_" + e.name,
                  name: e.name,
                  title: e.title,
                  photo: e.photo,
                  company: e.company,
                  bioString: e.bio,
                },
                n.createElement("div", null, e.name)
              );
            }),
          n.createElement(
            "div",
            { className: D.EventDescription },
            r.GetSummaryWithFallback(i)
          )
        );
      }
      function Q(e) {
        var t = e.conferenceInfo,
          r = Object(_.b)(),
          i = Object(w.b)(),
          a = r.GetActiveEventsAt(i) || [],
          o = n.useState(new U.a())[0],
          s = r
            .GetCalendarItemsInTimeRange(t.rtStartTime - 1, i)
            .rgCalendarItems.filter(function (e) {
              return !a.some(function (t) {
                return t.GID == e.unique_id;
              });
            })
            .sort(function (e, t) {
              return e.start_time - t.start_time;
            });
        return 0 == s.length
          ? n.createElement(
              "div",
              null,
              Object(B.f)("#Conference_NoPastEvents")
            )
          : n.createElement(
              "div",
              { className: D.PastEventsCtn },
              n.createElement(j, { displayLocation: 6, fnChangeModalEvent: o }),
              s.map(function (e) {
                var t = M.d.GetClanEventModel(e.unique_id);
                return n.createElement(z.a, {
                  key: "row" + e.unique_id,
                  eventModel: t,
                  calendarEvent: e,
                  bSuppressHoverEffects: !1,
                  mode: "wide",
                  fnOnClicked: function () {
                    return o.Dispatch(t.GID, t.clanSteamID.GetAccountID());
                  },
                });
              })
            );
      }
      function k(e) {
        return n.createElement(
          V,
          Object(y.a)({}, e),
          n.createElement(Q, Object(y.a)({}, e))
        );
      }
      function V(e) {
        var t = e.conferenceInfo,
          r = Object(n.useState)(!0),
          i = r[0],
          a = r[1];
        return (
          Object(n.useEffect)(
            function () {
              v.Get()
                .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                .finally(function () {
                  return a(!1);
                });
            },
            [t.rtEndTime, t.strConferenceID]
          ),
          i
            ? n.createElement(W.a, null)
            : n.createElement(n.Fragment, null, e.children)
        );
      }
      var H = r("knQc"),
        K = r("Lfwj"),
        J = r("eN6m"),
        Y = r("trWU"),
        $ = r("nWbB"),
        X = r("boaH");
      function Z(e) {
        var t = e.conferenceInfo.broadcastSteamID.ConvertTo64BitString();
        return n.createElement(
          m.a,
          null,
          n.createElement(Y.a, {
            steamIDBroadcast: t,
            watchLocation: 5,
            bStartMuted: !0,
          })
        );
      }
      function ee(e) {
        var t = e.conferenceInfo.broadcastSteamID.ConvertTo64BitString(),
          r = X.a.GetBroadcast(t);
        return n.createElement(
          "div",
          {
            className: Object(A.a)(
              K.BroadcastChatCtn,
              e.className ? "" + e.className : ""
            ),
          },
          n.createElement(
            m.a,
            null,
            n.createElement(J.a, {
              emoticonStore: $.g,
              watchLocation: 5,
              steamID: t,
              broadcastID: r ? r.m_ulBroadcastID : void 0,
            })
          )
        );
      }
      var te = r("6Y59"),
        re = r("5STL"),
        ne = r("JCps"),
        ie = r("5E+2");
      function ae(e) {
        var t = e.conferenceInfo,
          r = n.useState(!1),
          i = r[0],
          a = r[1];
        return n.createElement(
          "div",
          { className: re.ConferenceHome },
          n.createElement(
            "div",
            { className: Object(A.a)(re.LeftCol, i ? "Active" : "Hidden") },
            n.createElement(
              "div",
              { className: re.AgendaCtn },
              n.createElement(G, { conferenceInfo: t }),
              n.createElement(
                "div",
                {
                  className: re.AgendaToggle,
                  onClick: function () {
                    a(!i);
                  },
                },
                n.createElement(
                  "div",
                  { className: re.CollapseBtn },
                  n.createElement(te.q, { angle: 0 })
                ),
                n.createElement(
                  "div",
                  { className: re.CalendarBtn },
                  n.createElement(te.j, null)
                )
              )
            )
          ),
          n.createElement(
            "div",
            { className: re.MainCol },
            n.createElement(
              "div",
              { className: re.BroadcastCtn },
              n.createElement(Z, { conferenceInfo: t }),
              n.createElement("div", { className: re.videoContainerSizer })
            ),
            n.createElement(oe, { conferenceInfo: t })
          )
        );
      }
      function oe(e) {
        var t = e.conferenceInfo,
          r = n.useState(!0),
          i = r[0],
          a = r[1],
          o = n.useState(!0),
          s = o[0],
          u = o[1];
        return n.createElement(
          "div",
          { className: re.InteractionCtn },
          n.createElement(
            "div",
            { className: re.TabControlsCtn },
            n.createElement(
              "div",
              {
                className: Object(A.a)(
                  re.InnerChatTab,
                  re.ChatTab,
                  i ? re.Active : ""
                ),
                onClick: function () {
                  a(!0), u(!1);
                },
              },
              Object(B.f)("#Conference_Tab_Chat")
            ),
            n.createElement(
              "div",
              {
                className: Object(A.a)(
                  re.InnerChatTab,
                  re.QATab,
                  s ? re.Active : ""
                ),
                onClick: function () {
                  a(!1), u(!0);
                },
              },
              Object(B.f)("#Conference_Tab_QandA")
            ),
            n.createElement(
              ie.a,
              { toolTipContent: Object(B.f)("#QAndA_ChatToggle_ShowBoth") },
              n.createElement(
                "div",
                {
                  className: re.ShowBothTabs,
                  onClick: function () {
                    a(!0), u(!0);
                  },
                },
                n.createElement(te.Y, null)
              )
            )
          ),
          n.createElement(
            "div",
            { className: re.ChatStack },
            Boolean((i && s) || (!s && !i)) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: re.ChatColumn },
                  n.createElement(ee, {
                    conferenceInfo: t,
                    className: re.ChatCtn,
                  })
                ),
                n.createElement(
                  "div",
                  { className: re.QAColumn },
                  n.createElement(ne.a, { gidSession: t.globalQandASessionID })
                )
              ),
            Boolean(i && !s) &&
              n.createElement(ee, { conferenceInfo: t, className: re.ChatCtn }),
            Boolean(!i && s) &&
              n.createElement(ne.a, { gidSession: t.globalQandASessionID })
          )
        );
      }
      function se(e) {
        var t = e.conferenceInfo;
        if (!t.faqAboutPage)
          return n.createElement(
            "div",
            null,
            Object(B.f)("#Conference_NoAbout")
          );
        var r = t.faqAboutPage,
          i = r.title,
          a = r.content,
          o = r.timestamp;
        return n.createElement(
          "div",
          null,
          n.createElement("div", null, i),
          n.createElement(H.a, { text: a, bShowErrorInfo: !1 }),
          n.createElement(
            "div",
            null,
            Object(B.n)(
              "#Confernece_About_LastUpdated",
              n.createElement(f.a, { dateAndTime: o, bSingleLine: !0 })
            )
          )
        );
      }
      function ue(e) {
        var t = e.conferenceInfo;
        return n.createElement(k, { conferenceInfo: t });
      }
      var ce = r("PpkI");
      function le(e) {
        var t = e.strVanity,
          r = d.Get().GetConferenceInfo(t);
        return r
          ? n.createElement(
              "div",
              { className: ce.ConferencePageCtn },
              n.createElement(de, { conferenceInfo: r }),
              n.createElement(h, { conferenceInfo: r })
            )
          : n.createElement("div", null, Object(B.f)("#Conference_Invalid"));
      }
      function de(e) {
        var t = e.conferenceInfo,
          r = function (e) {
            return window.sessionStorage.setItem(
              "conferenceCurrentTab",
              "?tab=" + e.key
            );
          },
          i = [
            {
              name: Object(B.f)("#Conference_tab_Home"),
              key: "live",
              contents: n.createElement(
                m.a,
                null,
                n.createElement(ae, { conferenceInfo: t })
              ),
              onClick: r,
            },
            {
              name: Object(B.f)("#Conference_tab_Past"),
              key: "past",
              contents: n.createElement(
                m.a,
                null,
                n.createElement(ue, { conferenceInfo: t })
              ),
              onClick: r,
            },
            {
              name: Object(B.f)("#Conference_tab_Info"),
              key: "about",
              contents: n.createElement(
                m.a,
                null,
                n.createElement(se, { conferenceInfo: t })
              ),
              onClick: r,
            },
          ];
        return n.createElement(
          "div",
          { className: ce.ConferenceContentsCtn },
          n.createElement(
            "div",
            { className: ce.ConferenceHeaderCtn },
            n.createElement(p.a, {
              className: ce.LogoImage,
              rgSources: t.strLocalizedLogos,
            }),
            n.createElement(
              "div",
              { className: ce.ConferenceDateRange },
              n.createElement(f.c, {
                rtStartDate: t.rtStartTime,
                rtEndDate: t.rtEndTime,
              })
            )
          ),
          n.createElement(b.a, { tabs: i })
        );
      }
      var me = {
        LandingPage: function (e) {
          return "/conference/" + e;
        },
      };
      t.default = function (e) {
        return n.createElement(
          i.e,
          null,
          n.createElement(i.c, {
            path: me.LandingPage(":vanity_str"),
            render: function (e) {
              return n.createElement(a.a, {
                config: {
                  "conference-root": function () {
                    var t = e.match.params.vanity_str;
                    return n.createElement(le, {
                      strVanity: t.toLocaleLowerCase(),
                    });
                  },
                },
              });
            },
          }),
          n.createElement(i.c, { component: fe })
        );
      };
      function fe(e) {
        return "dev" !== l.c.WEB_UNIVERSE
          ? n.createElement(i.b, { to: "/" })
          : n.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/conference.tsx to see if this page has been added to the list of routes."
            );
      }
    },
    fbnN: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return p;
      });
      var n = r("mrSG"),
        i = r("q1tI"),
        a = r("EC67"),
        o = r("exH9"),
        s = r("TLQK"),
        u = r("GiuM"),
        c = r("Cksw"),
        l = r.n(c),
        d = r("5E+2"),
        m = r("+d9t"),
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { activeTab: "" }), t;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.startingTab
                ? this.setState({ activeTab: this.props.startingTab })
                : !this.props.bDisableRouting &&
                  this.props.location &&
                  this.setState({
                    activeTab: Object(u.a)(this.props.location, "tab"),
                  });
            }),
            (t.prototype.componentDidUpdate = function (e) {
              !this.props.bDisableRouting &&
                this.props.location &&
                this.props.location.key !== e.location.key &&
                this.setState({
                  activeTab: Object(u.a)(this.props.location, "tab"),
                });
            }),
            (t.prototype.OnTabClick = function (e) {
              this.setState({ activeTab: e.key }),
                !this.props.bDisableRouting &&
                  this.props.history &&
                  Object(u.b)(this.props.history, "tab", e.key),
                e.onClick && e.onClick(e);
            }),
            (t.prototype.render = function () {
              var e = this,
                t =
                  this.props.tabs.find(function (t) {
                    return t.key === e.state.activeTab;
                  }) || this.props.tabs[0];
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "div",
                  { className: l.a.GraphicalAssetsTabs },
                  this.props.tabs.map(function (r) {
                    if (!r.hidden) {
                      var n = "";
                      return (
                        "success" === r.statusType
                          ? (n = l.a.StatusSuccess)
                          : "danger" === r.statusType
                          ? (n = l.a.StatusDanger)
                          : "caution" === r.statusType &&
                            (n = l.a.StatusCaution),
                        i.createElement(
                          m.a,
                          {
                            key: r.key,
                            condition: Boolean(r.statusToolTip),
                            wrap: function (e) {
                              return i.createElement(
                                d.a,
                                { toolTipContent: r.statusToolTip },
                                e
                              );
                            },
                          },
                          i.createElement(
                            "div",
                            {
                              key: r.key,
                              className:
                                l.a.GraphicalAssetsTab +
                                " " +
                                (r.key === t.key ? l.a.Active : ""),
                              onClick: function () {
                                return e.OnTabClick(r);
                              },
                            },
                            Boolean(r.vo_warning) &&
                              i.createElement(
                                d.a,
                                { toolTipContent: r.vo_warning },
                                i.createElement(
                                  "div",
                                  { className: l.a.VOWarning },
                                  Object(s.f)("#EventEditor_VOWarning")
                                )
                              ),
                            Boolean(r.status) &&
                              i.createElement(
                                "div",
                                {
                                  className: Object(o.a)(
                                    l.a.GraphicalAssetStatus,
                                    n
                                  ),
                                },
                                r.status
                              ),
                            r.name
                          )
                        )
                      );
                    }
                    return null;
                  })
                ),
                i.createElement("div", null, t && t.contents)
              );
            }),
            t
          );
        })(i.Component),
        p = Object(a.j)(f);
    },
    hII0: function (e, t, r) {
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
    knQc: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return h;
      });
      var n = r("mrSG"),
        i = r("q1tI"),
        a = r("kyHq"),
        o = r("02Wr"),
        s = r("UxvL"),
        u = r("exH9"),
        c = r("lkRc"),
        l = r("ZeAL"),
        d = r("nrKv"),
        m = r("rcjX"),
        f = r("zvcZ"),
        p = r("WcT4"),
        b = r.n(p),
        B = new Map(
          Object(n.g)(Array.from(m.c.entries()), Array.from(m.e.entries()), [
            [
              "section",
              {
                Constructor: function (e) {
                  var t = Object(m.f)(e.args, "id");
                  t &&
                    "string" == typeof t &&
                    t.length > 0 &&
                    "#" === t[0] &&
                    (t = t.substring(1));
                  var r = Object(m.f)(e.args, "style"),
                    n = Object(u.a)(
                      b.a.Section,
                      "note" == r && b.a.Note,
                      "important" == r && b.a.Important,
                      "warning" == r && b.a.Warning
                    );
                  return i.createElement(
                    "div",
                    { id: t || void 0, className: n },
                    e.children
                  );
                },
                autocloses: !1,
              },
            ],
            [
              "img",
              {
                Constructor: function (e) {
                  var t,
                    r,
                    n = e.context.showErrorInfo,
                    a =
                      null === (t = null == e ? void 0 : e.children) ||
                      void 0 === t
                        ? void 0
                        : t.toString();
                  if (
                    !(
                      (null != a && null != a && 0 != a.length) ||
                      (null !=
                        (a =
                          null === (r = null == e ? void 0 : e.args) ||
                          void 0 === r
                            ? void 0
                            : r[""]) &&
                        null != a &&
                        0 != a.length)
                    )
                  )
                    return "";
                  var u = Object(m.d)(a, e.language);
                  return "string" == typeof u
                    ? ((a = u),
                      n
                        ? i.createElement(o.a, {
                            className: b.a.FAQImage,
                            src: a,
                          })
                        : ((a = a.replace("http://", "https://")),
                          i.createElement("img", {
                            className: b.a.FAQImage,
                            src: a,
                          })))
                    : i.createElement(s.a, {
                        className: b.a.FAQImage,
                        rgSources: u,
                      });
                },
                autocloses: !1,
              },
            ],
            [
              "exclude_realm",
              {
                Constructor: function (e) {
                  var t = Object(m.f)(e.args);
                  return ("global" == t &&
                    c.c.EREALM == a.f.k_ESteamRealmGlobal) ||
                    ("china" == t && c.c.EREALM == a.f.k_ESteamRealmChina)
                    ? null
                    : i.createElement(i.Fragment, null, e.children);
                },
                autocloses: !1,
              },
            ],
          ])
        ),
        h = function (e) {
          var t = e.text,
            r = e.bShowErrorInfo,
            n = i.useCallback(function (e) {
              return new f.b(
                new f.c(
                  new d.c(new d.b(), 0),
                  e,
                  [{ urlRegExp: /youtu.be|youtube.com/i, fnBBComponent: m.q }],
                  {}
                ),
                e
              );
            }, []),
            a = i.useRef(new l.a(B, n));
          return i.createElement(
            "div",
            { className: b.a.FAQContainer },
            a.current.ParseBBCode(t, { showErrorInfo: r })
          );
        };
    },
  },
]);
