/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1649],
  {
    11209: (e) => {
      e.exports = {
        SectionTitleHeader: "collapseablesection_SectionTitleHeader_1K5gA",
        required_title: "collapseablesection_required_title_29VCz",
      };
    },
    85007: (e) => {
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
    56164: (e, t, n) => {
      "use strict";
      n.d(t, { bC: () => v, fU: () => _, mY: () => m, ug: () => A });
      var s = n(1485),
        o = n(31846),
        i = n(62613),
        a = n(47427),
        r = n(13129),
        l = n(71741),
        u = n(10162),
        d = n(27605),
        c = n(11209);
      const m = (0, d.Pi)((e) =>
        a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            {
              className: (0, r.Z)(
                e.className ? e.className : "",
                c.SectionTitleHeader,
                c.required_title,
                "SectionTitleHeader",
              ),
            },
            a.createElement(
              "div",
              {
                className: (0, r.Z)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e.title,
              Boolean(e.tooltip) && a.createElement(v, { tooltip: e.tooltip }),
            ),
            a.createElement(_, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            }),
          ),
          !e.getMinimized() && a.createElement(u.SV, null, e.children),
        ),
      );
      function A(e) {
        const [t, n] = a.useState(Boolean(e.bStartMinimized));
        return a.createElement(
          m,
          Object.assign({}, e, {
            getMinimized: () => t,
            toggleMinimized: () => n(!t),
          }),
          e.children,
        );
      }
      function _(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          r = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return a.createElement(
          s.zx,
          { "data-tooltip-text": (0, o.Xx)(r), onClick: n },
          e.bIsMinimized
            ? a.createElement(i.YqJ, null)
            : a.createElement(i.gR, null),
        );
      }
      function v(e) {
        return a.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: (0, r.Z)(l.HelperTooltip, "HelperTooltip"),
          },
          " ",
          a.createElement(i.WWB, null),
        );
      }
    },
    97504: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => H, EI: () => K, kF: () => W });
      var s = n(85556),
        o = n(47427),
        i = n(35427),
        a = n(64936),
        r = n(16997),
        l = n(45492),
        u = n(20417),
        d = n(37563);
      const c = [
        "mousemove",
        "keypress",
        "scroll",
        "wheel",
        "focusin",
        "touchstart",
        "touchmove",
      ];
      class m {
        static Get() {
          return m.s_Singleton || (m.s_Singleton = new m()), m.s_Singleton;
        }
        constructor() {
          (this.m_callbackList = new l.pB()),
            (this.m_timer = null),
            (this.m_bAreEventListenersRegistered = !1),
            "dev" == d.De.WEB_UNIVERSE && (window.g_FidgetStore = this);
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
          for (const t of c) e.addEventListener(t, this.ResetFidgetTimer);
          return (this.m_bAreEventListenersRegistered = !0), !0;
        }
        BUnregisterEventListeners() {
          if (!this.m_bAreEventListenersRegistered) return !1;
          const e = window;
          for (const t of c) e.removeEventListener(t, this.ResetFidgetTimer);
          return (this.m_bAreEventListenersRegistered = !1), !1;
        }
      }
      function A() {
        o.useEffect(() => {
          const e = m.Get().BRegisterEventListeners();
          return () => {
            e && m.Get().BUnregisterEventListeners();
          };
        }, []);
      }
      (0, s.gn)([r.a], m.prototype, "ResetFidgetTimer", null);
      var _ = n(80751),
        v = n.n(_),
        Q = n(29480),
        p = n(16649);
      class g {
        static Get() {
          return g.s_Singleton || (g.s_Singleton = new g()), g.s_Singleton;
        }
        constructor() {
          (this.m_mapQAndASessions = new Map()),
            (this.m_mapQAndAChangeCallbackList = new Map()),
            (this.m_dashboardCallbackList = new l.pB()),
            (this.m_mapQuestions = new Map()),
            (this.m_mapQuestionCallbackList = new Map()),
            (this.m_rgPendingQuestionGIDs = []),
            "dev" == d.De.WEB_UNIVERSE && (window.g_QAndAStore = this);
        }
        GetQAndACallbackList(e) {
          return (
            this.m_mapQAndAChangeCallbackList.has(e) ||
              this.m_mapQAndAChangeCallbackList.set(e, new l.pB()),
            this.m_mapQAndAChangeCallbackList.get(e)
          );
        }
        GetQuestionCallbackList(e) {
          return (
            this.m_mapQuestionCallbackList.has(e) ||
              this.m_mapQuestionCallbackList.set(e, new l.pB()),
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
        LoadAllSessions(e) {
          var t, n, o, i;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!d.L7.logged_in || !d.De.SESSIONID) return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxgetqandasforgroup",
              a = {};
            let r = null;
            try {
              const n = yield v().get(s, {
                params: a,
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
            const l = (0, p.l)(r);
            return (
              console.error(
                "Could not load question and answer sessions for group",
                l.strErrorMsg,
                l,
              ),
              null !==
                (i =
                  null ===
                    (o =
                      null === (n = null == r ? void 0 : r.response) ||
                      void 0 === n
                        ? void 0
                        : n.data) || void 0 === o
                    ? void 0
                    : o.success) && void 0 !== i
                ? i
                : 2
            );
          });
        }
        CreateNewSession(e, t) {
          var n, o, i, a;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!d.L7.logged_in || !d.De.SESSIONID) return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxcreateqanda",
              r = new FormData();
            r.append("sessionid", d.De.SESSIONID), r.append("name", e);
            let l = null;
            try {
              const e = yield v().post(s, r, {
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
                    e.data.qanda,
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              l = { response: e };
            } catch (e) {
              l = e;
            }
            const u = (0, p.l)(l);
            return (
              console.error("Could not create Q&A", e, u.strErrorMsg, u),
              null !==
                (a =
                  null ===
                    (i =
                      null === (o = null == l ? void 0 : l.response) ||
                      void 0 === o
                        ? void 0
                        : o.data) || void 0 === i
                    ? void 0
                    : i.success) && void 0 !== a
                ? a
                : 2
            );
          });
        }
        RenameSession(e, t, n) {
          var o, i, a, r;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!d.L7.logged_in || !d.De.SESSIONID) return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxrenameqanda/" +
                e,
              l = new FormData();
            l.append("sessionid", d.De.SESSIONID), l.append("name", t);
            let u = null;
            try {
              const i = yield v().post(s, l, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == i ? void 0 : i.status) &&
                1 ==
                  (null === (o = i.data) || void 0 === o ? void 0 : o.success)
              )
                return (
                  (this.m_mapQAndASessions.get(e).strName = t),
                  this.GetQAndACallbackList(e).Dispatch(
                    this.m_mapQAndASessions.get(e),
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              u = { response: i };
            } catch (e) {
              u = e;
            }
            const c = (0, p.l)(u);
            return (
              console.error("Could not rename Q&A", e, t, c.strErrorMsg, c),
              null !==
                (r =
                  null ===
                    (a =
                      null === (i = null == u ? void 0 : u.response) ||
                      void 0 === i
                        ? void 0
                        : i.data) || void 0 === a
                    ? void 0
                    : a.success) && void 0 !== r
                ? r
                : 2
            );
          });
        }
        DeleteSession(e, t) {
          var n, o, i, a;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!d.L7.logged_in || !d.De.SESSIONID) return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxdeleteqanda/" +
                e,
              r = new FormData();
            r.append("sessionid", d.De.SESSIONID);
            let l = null;
            try {
              const o = yield v().post(s, r, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == o ? void 0 : o.status) &&
                1 ==
                  (null === (n = o.data) || void 0 === n ? void 0 : n.success)
              )
                return (
                  this.m_mapQAndASessions.delete(e),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  1
                );
              l = { response: o };
            } catch (e) {
              l = e;
            }
            const u = (0, p.l)(l);
            return (
              console.error("Could not delete Q&A", e, u.strErrorMsg, u),
              null !==
                (a =
                  null ===
                    (i =
                      null === (o = null == l ? void 0 : l.response) ||
                      void 0 === o
                        ? void 0
                        : o.data) || void 0 === i
                    ? void 0
                    : i.success) && void 0 !== a
                ? a
                : 2
            );
          });
        }
        LoadSession(e, t, n) {
          var o, i, a, r, l, u, c, m, A, _;
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s =
                d.L7.logged_in &&
                (!this.m_mapQAndASessions.has(e) ||
                  this.m_mapQAndASessions.get(e).bUserCanModerate ||
                  this.m_rgPendingQuestionGIDs.length > 0 ||
                  t)
                  ? "/ajaxgetqandasessionforuser/"
                  : "/ajaxgetqandasession/",
              Q =
                d.De.COMMUNITY_BASE_URL + "questions/" + d.JA.VANITY_ID + s + e,
              g = {};
            let C = null;
            try {
              const t = yield v().get(Q, {
                params: g,
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
                for (const e of t.data.questions) {
                  const t = e.gidQuestion,
                    n =
                      null !==
                        (a =
                          null === (i = this.m_mapQuestions.get(t)) ||
                          void 0 === i
                            ? void 0
                            : i.bUserUpVoted) && void 0 !== a
                        ? a
                        : e.bUserUpVoted,
                    s = Object.assign(Object.assign({}, e), {
                      bUserUpVoted: n,
                    });
                  this.m_mapQuestions.set(t, s),
                    this.GetQuestionCallbackList(t).Dispatch(s);
                }
                const n =
                    null !==
                      (l =
                        null === (r = this.m_mapQAndASessions.get(e)) ||
                        void 0 === r
                          ? void 0
                          : r.bUserCanModerate) && void 0 !== l
                      ? l
                      : t.data.qanda.bUserCanModerate,
                  s =
                    null !==
                      (c =
                        null === (u = this.m_mapQAndASessions.get(e)) ||
                        void 0 === u
                          ? void 0
                          : u.bUserCanAskQuestions) && void 0 !== c
                      ? c
                      : t.data.qanda.bUserCanAskQuestions,
                  o = Object.assign(Object.assign({}, t.data.qanda), {
                    bUserCanModerate: n,
                    bUserCanAskQuestions: s,
                  });
                return (
                  this.m_mapQAndASessions.set(e, o),
                  this.GetQAndACallbackList(e).Dispatch(o),
                  this.UpdatePendingQuestionList(t.data.qanda.rgQuestionGIDs),
                  1
                );
              }
              C = { response: t };
            } catch (e) {
              C = e;
            }
            const h = (0, p.l)(C);
            return (
              console.error("Could not load Q&A", e, h.strErrorMsg, h),
              null !==
                (_ =
                  null ===
                    (A =
                      null === (m = null == C ? void 0 : C.response) ||
                      void 0 === m
                        ? void 0
                        : m.data) || void 0 === A
                    ? void 0
                    : A.success) && void 0 !== _
                ? _
                : 2
            );
          });
        }
        UpdatePendingQuestionList(e) {
          var t;
          const n = new Set();
          for (const t of e) {
            const e = this.m_mapQuestions.get(t);
            e.posterAccountID == d.L7.accountid &&
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
          var o, i, a, r, l;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              !d.L7.logged_in ||
              !d.De.SESSIONID ||
              !(null === (o = this.m_mapQAndASessions.get(e)) || void 0 === o
                ? void 0
                : o.bUserCanAskQuestions)
            )
              return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxaskquestion/" +
                e,
              u = new FormData();
            u.append("sessionid", d.De.SESSIONID), u.append("question", t);
            let c = null;
            try {
              const t = yield v().post(s, u, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (i = t.data) || void 0 === i ? void 0 : i.success)
              ) {
                this.m_rgPendingQuestionGIDs.push(t.data.gidQuestion);
                const s = !0;
                return this.LoadSession(e, s, n), 1;
              }
              c = { response: t };
            } catch (e) {
              c = e;
            }
            const m = (0, p.l)(c);
            return (
              console.error(
                "Could not upload question",
                e,
                t,
                m.strErrorMsg,
                m,
              ),
              null !==
                (l =
                  null ===
                    (r =
                      null === (a = null == c ? void 0 : c.response) ||
                      void 0 === a
                        ? void 0
                        : a.data) || void 0 === r
                    ? void 0
                    : r.success) && void 0 !== l
                ? l
                : 2
            );
          });
        }
        ModerateQuestion(e, t, n, o) {
          var i, a, r, l, u;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              !d.L7.logged_in ||
              !d.De.SESSIONID ||
              !(null === (i = this.m_mapQAndASessions.get(e)) || void 0 === i
                ? void 0
                : i.bUserCanModerate)
            )
              return 15;
            if (1 != n && 3 != n) return 8;
            if (this.m_mapQuestions.get(t).eState == n) return 1;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxmoderatequestion/" +
                e,
              c = new FormData();
            c.append("sessionid", d.De.SESSIONID),
              c.append("gidquestion", t),
              c.append("action", 1 == n ? "show" : "hide");
            let m = null;
            try {
              const t = yield v().post(s, c, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a ? void 0 : a.success)
              ) {
                const t = !0;
                return this.LoadSession(e, t, o), 1;
              }
              m = { response: t };
            } catch (e) {
              m = e;
            }
            const A = (0, p.l)(m);
            return (
              console.error(
                "Could not moderate question",
                e,
                t,
                n,
                A.strErrorMsg,
                A,
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
          var i, a, r, l, u;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              !d.L7.logged_in ||
              !d.De.SESSIONID ||
              !(null === (i = this.m_mapQAndASessions.get(e)) || void 0 === i
                ? void 0
                : i.bUserCanAskQuestions)
            )
              return 15;
            const s =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxanswerquestion/" +
                e,
              c = new FormData();
            c.append("sessionid", d.De.SESSIONID),
              c.append("gidquestion", t),
              c.append("answer", n);
            let m = null;
            try {
              const t = yield v().post(s, c, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a ? void 0 : a.success)
              ) {
                const t = !0;
                return this.LoadSession(e, t, o), 1;
              }
              m = { response: t };
            } catch (e) {
              m = e;
            }
            const A = (0, p.l)(m);
            return (
              console.error(
                "Could not upload answer",
                e,
                t,
                n,
                A.strErrorMsg,
                A,
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
          var i, a, r, l, u;
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              !d.L7.logged_in ||
              !d.De.SESSIONID ||
              !(null === (i = this.m_mapQAndASessions.get(e)) || void 0 === i
                ? void 0
                : i.bUserCanAskQuestions)
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
            const A =
                d.De.COMMUNITY_BASE_URL +
                "questions/" +
                d.JA.VANITY_ID +
                "/ajaxvoteforquestion/" +
                e,
              _ = new FormData();
            _.append("sessionid", d.De.SESSIONID),
              _.append("gidquestion", t),
              _.append("up", n ? "1" : "0");
            let Q = null;
            try {
              const e = yield v().post(A, _, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (a = e.data) || void 0 === a ? void 0 : a.success)
              )
                return 1;
              Q = { response: e };
            } catch (e) {
              Q = e;
            }
            (s = Object.assign(Object.assign({}, s), {
              nVoteCount: c,
              bUserUpVoted: !n,
            })),
              this.m_mapQuestions.set(t, s),
              this.GetQuestionCallbackList(t).Dispatch(s);
            const g = (0, p.l)(Q);
            return (
              console.error("Could not upload vote", e, t, n, g.strErrorMsg, g),
              null !==
                (u =
                  null ===
                    (l =
                      null === (r = null == Q ? void 0 : Q.response) ||
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
      function C(e) {
        const t = (0, Q.T)("useQAndASession"),
          n = o.useCallback(
            (n) =>
              (0, s.mG)(this, void 0, void 0, function* () {
                var s;
                return (
                  (null === (s = g.Get().GetSession(e)) || void 0 === s
                    ? void 0
                    : s.bUserCanAskQuestions) &&
                  (yield g.Get().AskNewQuestion(e, n, t))
                );
              }),
            [e, t],
          ),
          i = o.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = g.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanAskQuestions) &&
                g.Get().VoteOnQuestion(e, n, s, t)
              );
            },
            [e, t],
          ),
          a = o.useCallback(
            (e) => {
              var t;
              const s = !!e,
                o = null == e ? void 0 : e.strName,
                a = null == e ? void 0 : e.bUserCanModerate,
                r = null == e ? void 0 : e.bUserCanAskQuestions,
                l = [],
                u = [],
                d = [],
                c = [];
              for (const n of null !==
                (t = null == e ? void 0 : e.rgQuestionGIDs) && void 0 !== t
                ? t
                : []) {
                const e = g.Get().GetQuestion(n);
                switch (null == e ? void 0 : e.eState) {
                  case 1:
                    l.push(n);
                    break;
                  case 2:
                    u.push(n);
                    break;
                  case 0:
                    d.push(n);
                    break;
                  case 3:
                    c.push(n);
                }
              }
              return (
                l.sort(
                  (e, t) =>
                    g.Get().GetQuestion(t).nVoteCount -
                    g.Get().GetQuestion(e).nVoteCount,
                ),
                u.sort(
                  (e, t) =>
                    g.Get().GetQuestion(t).rtAnswerTime -
                    g.Get().GetQuestion(e).rtAnswerTime,
                ),
                d.sort(
                  (e, t) =>
                    g.Get().GetQuestion(t).rtPostTime -
                    g.Get().GetQuestion(e).rtPostTime,
                ),
                c.sort(
                  (e, t) =>
                    g.Get().GetQuestion(t).rtPostTime -
                    g.Get().GetQuestion(e).rtPostTime,
                ),
                {
                  bIsLoaded: s,
                  strName: o,
                  bUserCanModerate: a,
                  bUserCanAskQuestions: r,
                  fnAskQuestion: n,
                  fnVoteOnQuestion: i,
                  rgModeratedQuestionGIDs: l,
                  rgAnsweredQuestionGIDs: u,
                  rgNewQuestionGIDs: d,
                  rgHiddenQuestionGIDs: c,
                }
              );
            },
            [n, i],
          ),
          [r, l] = o.useState(() => a(g.Get().GetSession(e))),
          d = o.useCallback((e) => l(a(e)), [a]);
        return (
          (0, u.Qg)(g.Get().GetQAndACallbackList(e), d),
          o.useEffect(() => {
            r.bIsLoaded || g.Get().LoadSession(e);
          }, [r.bIsLoaded, e]),
          r
        );
      }
      let h = null;
      function S(e) {
        const t = (0, Q.T)("useReloadFunction"),
          [n, s] = o.useState(!1),
          i = o.useCallback(() => {
            s(!0);
            const n = g.Get().LoadSession(e, !1, t);
            return n.then(() => s(!1)), n;
          }, [e, t]),
          a = (function (e) {
            const t = o.useRef(null),
              n = o.useCallback(() => {
                t.current && (t.current(), (t.current = null));
              }, []);
            return (
              (0, u.Qg)(m.Get().GetCallbackList(), n),
              o.useEffect(() => () => {
                t.current = null;
              }),
              o.useCallback(
                (...n) => {
                  m.Get().BIsUserFidgeting()
                    ? (t.current = () => e(...n))
                    : ((t.current = null), e(...n));
                },
                [e],
              )
            );
          })(i);
        return (
          o.useEffect(() => {
            if (h) return () => {};
            return (
              (h = window.setInterval(a, 1e4)), () => window.clearInterval(h)
            );
          }, [a]),
          o.useMemo(() => ({ fnReload: i, bIsReloading: n }), [i, n])
        );
      }
      function E(e) {
        const t = (0, Q.T)("useQuestionModeratorActions"),
          n = o.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = g.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanModerate) && g.Get().AnswerQuestion(e, n, s, t)
              );
            },
            [e, t],
          ),
          s = o.useCallback(
            (n, s) => {
              var o;
              return (
                (null === (o = g.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanModerate) && g.Get().ModerateQuestion(e, n, s, t)
              );
            },
            [e, t],
          );
        return o.useMemo(
          () => ({ fnAnswerQuestion: n, fnModerateQuestion: s }),
          [n, s],
        );
      }
      var N = n(1485),
        b = n(80212),
        D = n(24827),
        I = n(50898),
        f = n(90069),
        w = n(62613),
        T = n(46882),
        q = n(59728),
        k = n(56164),
        G = n(13129),
        M = n(31846),
        L = n(45284),
        x = n(46984),
        U = n(85007),
        V = n.n(U),
        B = n(51915);
      function H(e) {
        const t = (function () {
          const [e, t] = o.useState(g.Get().GetAllSessions());
          return (
            (0, u.Qg)(g.Get().GetDashboardCallbackList(), t),
            o.useEffect(() => {
              0 == e.length && g.Get().LoadAllSessions();
            }, [e.length]),
            e
          );
        })();
        return o.createElement(
          "div",
          { className: V().QADashboardCtn },
          o.createElement(R, null),
          o.createElement(
            "div",
            {
              className: (0, G.Z)(V().DashboardRow, V().DashboardColumnHeaders),
            },
            o.createElement(
              "div",
              { className: V().QAndAName },
              (0, M.Xx)("#QAndA_Column_Name"),
            ),
            o.createElement(
              "div",
              { className: V().GIDSession },
              (0, M.Xx)("#QAndA_Column_GID"),
            ),
            o.createElement(
              "div",
              { className: V().QuestionCount },
              (0, M.Xx)("#QAndA_Column_QuestionCount"),
            ),
            o.createElement(
              "div",
              { className: V().QAndADeleteColumn },
              (0, M.Xx)("#QAndA_Column_DeleteButtons"),
            ),
          ),
          t.map((e) => o.createElement(y, { key: e.gidSession, qanda: e })),
        );
      }
      function R(e) {
        const t = o.useCallback(
          () =>
            (0, f.x1)(o.createElement(O, null), window, {
              strTitle: (0, M.Xx)("#QAndA_CreateQAndA_Title"),
            }),
          [],
        );
        return o.createElement(
          "div",
          { className: V().DashboardHeader },
          o.createElement(
            "div",
            { className: V().DashboardHeaderTitle },
            (0, M.Xx)("#QAndA_Dashboard"),
          ),
          o.createElement(
            "div",
            { className: V().DashboardHeaderButtonCtn },
            o.createElement(
              N.zx,
              { onClick: t },
              (0, M.Xx)("#QAndA_CreateQAndA_Button"),
            ),
          ),
        );
      }
      const P = 120;
      function O(e) {
        const t = (function () {
            const e = (0, Q.T)("useCreateQAndAFn");
            return o.useCallback((t) => g.Get().CreateNewSession(t, e), [e]);
          })(),
          [n, s] = o.useState("");
        return o.createElement(
          I.uH,
          {
            strTitle: (0, M.Xx)("#QAndA_CreateQAndA_Title"),
            strDescription: (0, M.Xx)("#QAndA_CreateQAndA_Instructions"),
            strOKButtonText: (0, M.Xx)("#Button_Create"),
            onOK: () => t(n),
            bOKDisabled: 0 == n.length,
            closeModal: e.closeModal,
            className: V().CreateQAndADialog,
          },
          o.createElement(N.II, {
            type: "text",
            className: V().NameInput,
            value: n,
            placeholder: (0, M.Xx)("#QAndA_EnterNamePrompt"),
            onFocus: (e) => e.target.select(),
            onChange: (e) => s(e.currentTarget.value),
            maxLength: P,
          }),
        );
      }
      function y(e) {
        const { qanda: t } = e,
          n =
            d.De.COMMUNITY_BASE_URL +
            "questions/" +
            d.JA.VANITY_ID +
            "/view/" +
            t.gidSession,
          s = o.useCallback(
            (e) => {
              e.stopPropagation(),
                e.preventDefault(),
                (0, f.x1)(o.createElement(F, { qanda: t }), window, {
                  strTitle: (0, M.Xx)("#QAndA_CreateQAndA_Title"),
                });
            },
            [t],
          );
        return o.createElement(
          "a",
          { className: V().DashboardRow, href: n },
          o.createElement(X, { qanda: t }),
          o.createElement("div", { className: V().GIDSession }, t.gidSession),
          o.createElement(
            "div",
            { className: V().QuestionCount },
            t.rgQuestionGIDs.length,
          ),
          o.createElement(
            "div",
            { className: V().QAndADeleteColumn },
            o.createElement(
              "div",
              { className: V().DeleteButton, onClick: s },
              o.createElement(w.rFk, null),
            ),
          ),
        );
      }
      function X(e) {
        const { qanda: t } = e,
          [n, s] = o.useState(!1),
          [i, a] = o.useState(t.strName),
          r = (function () {
            const e = (0, Q.T)("useRenameQAndAFn");
            return o.useCallback((t, n) => g.Get().RenameSession(t, n, e), [e]);
          })(),
          l =
            t.strName.length > 0
              ? t.strName
              : o.createElement(
                  "span",
                  { className: V().Prompt },
                  (0, M.Xx)("#QAndA_EnterNamePrompt"),
                ),
          u = o.createElement(
            "div",
            { className: V().NameInput },
            o.createElement(N.II, {
              type: "text",
              className: V().NameInput,
              value: i,
              placeholder: (0, M.Xx)("#QAndA_EnterNamePrompt"),
              onFocus: (e) => e.target.select(),
              onChange: (e) => a(e.currentTarget.value),
              maxLength: P,
            }),
            o.createElement(
              N.KM,
              {
                onClick: (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    0 != (0, L.eT)(i, t.strName)
                      ? r(t.gidSession, i).then(() => s(!1))
                      : s(!1);
                },
                className: V().InputButton,
              },
              (0, M.Xx)("#Button_Save"),
            ),
          );
        return o.createElement(
          "div",
          {
            className: (0, G.Z)(V().QAndAName, n && V().Editing),
            onClick: (e) => {
              e.stopPropagation(), e.preventDefault(), n || s(!0);
            },
          },
          n ? u : l,
        );
      }
      function F(e) {
        const { qanda: t } = e,
          n = (function () {
            const e = (0, Q.T)("useDeleteQAndAFn");
            return o.useCallback((t) => g.Get().DeleteSession(t, e), [e]);
          })();
        return o.createElement(
          I.uH,
          {
            strTitle: (0, M.Xx)("#QAndA_Column_DeleteButtons"),
            strDescription: (0, M.Xx)("#QAndA_DeleteQAndA_Instructions"),
            onOK: () => n(t.gidSession),
            closeModal: e.closeModal,
            className: V().DeleteQAndADialog,
          },
          o.createElement(
            "div",
            { className: V().DeleteInfo },
            (0, M.Xx)("#QAndA_Column_Name") + ": " + t.strName,
          ),
          o.createElement(
            "div",
            { className: V().DeleteInfo },
            (0, M.Xx)("#QAndA_Column_QuestionCount") +
              ": " +
              t.rgQuestionGIDs.length,
          ),
        );
      }
      function z(e) {
        const {
            gidSession: t,
            gidQuestion: n,
            bUserCanModerate: s,
            bUserCanVote: i,
            fnVoteOnQuestion: a,
            rtNow: r,
          } = e,
          [l, d] = (function (e) {
            const [t, n] = o.useState(g.Get().GetQuestion(e));
            (0, u.Qg)(g.Get().GetQuestionCallbackList(e), n);
            const [s, i] = o.useState(!!t);
            return [t, !!t || s];
          })(n);
        if (!l) return null;
        const c = r - l.rtPostTime,
          m = c < x._H.PerDay ? (0, M.yW)(c) : (0, M.m9)(l.rtPostTime),
          A = i ? () => a(n, !l.bUserUpVoted) : null,
          _ = i
            ? l.bUserUpVoted
              ? V().Vote_Positive
              : V().Vote_Ready
            : V().Vote_CannotVote,
          v = (0, G.Z)(
            V().Question,
            3 == l.eState && V().Hidden,
            1 == l.eState && V().Moderated,
            0 == l.eState && V().Unmoderated,
            2 == l.eState && V().Answered,
          );
        return o.createElement(
          "div",
          { className: v },
          o.createElement(
            "div",
            { className: (0, G.Z)(V().QuestionCtn, "questionCtn") },
            o.createElement(Y, { accountID: l.posterAccountID }),
            o.createElement(
              "div",
              { className: V().QuestionText },
              o.createElement(
                "div",
                { className: V().QuestionAndVotes },
                o.createElement(
                  "div",
                  { className: V().QuestionTitle },
                  l.strQuestionText,
                ),
                o.createElement(
                  q.HP,
                  {
                    toolTipContent:
                      i &&
                      (l.bUserUpVoted
                        ? (0, M.Xx)("#QAndA_VoteRemoveTooltip")
                        : (0, M.Xx)("#QAndA_VoteTooltip")),
                  },
                  o.createElement(
                    "div",
                    { className: (0, G.Z)(_, V().Votes), onClick: A },
                    o.createElement(w.KJh, { className: V().RateIcon }),
                    o.createElement(
                      "div",
                      { className: V().VoteCount },
                      Number(l.nVoteCount).toLocaleString(),
                    ),
                  ),
                ),
              ),
              o.createElement(
                "div",
                { className: V().QuestionStats },
                o.createElement(
                  "div",
                  { className: V().PostTime },
                  o.createElement(
                    D.Zg,
                    {
                      rtFullDate: l.rtPostTime,
                      className: V().PostTime,
                      stylesmodule: V(),
                    },
                    m,
                  ),
                ),
              ),
            ),
          ),
          l.rtAnswerTime && o.createElement(j, { question: l, rtNow: r }),
          s &&
            o.createElement(Z, {
              gidSession: t,
              gidQuestion: n,
              eState: null == l ? void 0 : l.eState,
            }),
        );
      }
      function j(e) {
        const { question: t, rtNow: n } = e,
          s = t.rtAnswerTime && n - t.rtAnswerTime,
          i =
            t.rtAnswerTime &&
            (s < x._H.PerDay ? (0, M.yW)(s) : (0, M.m9)(t.rtAnswerTime));
        return t.strAnswerText
          ? o.createElement(
              "div",
              { className: V().Answer },
              o.createElement(
                "div",
                { className: V().AnswerTitle },
                o.createElement(
                  "div",
                  { className: V().AnswerCheck },
                  o.createElement(w.mKE, { color: "#67c1f5" }),
                ),
                (0, M.Xx)("#QAndA_ModeratorAnswerTitle"),
              ),
              o.createElement(
                "div",
                { className: V().AnswerText },
                " ",
                t.strAnswerText,
                " ",
              ),
              o.createElement(
                "div",
                { className: V().QuestionStats },
                o.createElement(
                  D.Zg,
                  {
                    rtFullDate: t.rtAnswerTime,
                    className: V().PostTime,
                    stylesmodule: V(),
                  },
                  i,
                ),
              ),
            )
          : o.createElement(
              "div",
              { className: V().AnswerTitle },
              o.createElement(
                "div",
                { className: V().AnswerCheck },
                o.createElement(w.mKE, { color: "#67c1f5" }),
              ),
              (0, M.Xx)("#QAndA_AlreadyAnsweredTitle"),
            );
      }
      function Y(e) {
        var t;
        const n = i.K.InitFromAccountID(e.accountID).ConvertTo64BitString(),
          { isLoading: s, data: a } = (0, B.IE)(e.accountID);
        return s
          ? null
          : o.createElement(
              "a",
              {
                href: a.GetCommunityProfileURL(),
                className: V().PersonaName,
                "data-miniprofile": "s" + n,
              },
              null !== (t = null == a ? void 0 : a.m_strPlayerName) &&
                void 0 !== t
                ? t
                : n,
            );
      }
      function Z(e) {
        const { gidSession: t, gidQuestion: n, eState: s } = e,
          { fnAnswerQuestion: i, fnModerateQuestion: a } = E(t),
          r = 0 == s || 3 == s,
          l = 3 != s,
          u = 1 == s;
        return o.createElement(
          "div",
          { className: V().ModeratorSection },
          (0, M.Xx)("#QAndA_ModeratorLabel"),
          o.createElement(
            "div",
            { className: V().ToolRow },
            o.createElement(ee, {
              strPrompt: (0, M.Xx)("#QAndA_AnswerPrompt"),
              fnSubmit: (e) => i(n, e),
            }),
          ),
          o.createElement(
            "div",
            { className: V().ToolRow },
            (0, M.Xx)("#QAndA_ModeratorOtherOptionsLabel"),
            o.createElement(
              q.HP,
              {
                toolTipContent: (0, M.Xx)("#QAndA_ModerateApproveButton_ttip"),
              },
              o.createElement(
                N.zx,
                {
                  onClick: () => a(n, 1),
                  className: V().InputButton,
                  disabled: !r,
                },
                (0, M.Xx)("#QAndA_ModerateApproveButton"),
              ),
            ),
            o.createElement(
              q.HP,
              { toolTipContent: (0, M.Xx)("#QAndA_ModerateHideButton_ttip") },
              o.createElement(
                N.zx,
                {
                  onClick: () => a(n, 3),
                  className: V().InputButton,
                  disabled: !l,
                },
                (0, M.Xx)("#QAndA_ModerateHideButton"),
              ),
            ),
            o.createElement(
              q.HP,
              { toolTipContent: (0, M.Xx)("#QAndA_QuickAnswerButton_ttip") },
              o.createElement(
                N.zx,
                {
                  onClick: () => i(n, ""),
                  className: V().InputButton,
                  disabled: !u,
                },
                (0, M.Xx)("#QAndA_QuickAnswerButton"),
              ),
            ),
          ),
        );
      }
      function K(e) {
        const { gidSession: t } = e;
        A();
        const { strName: n, bUserCanModerate: s } = C(t);
        return o.createElement(
          "div",
          { className: V().QAFullPageView },
          o.createElement(
            "div",
            { className: V().QAName },
            (0, M.Xx)("#QAndA_Header") +
              ((null == n ? void 0 : n.length) > 0 ? ": " + n : ""),
          ),
          o.createElement(
            "div",
            { className: V().QAColumns },
            o.createElement(W, { gidSession: t, bHalfOfFullPage: s }),
            s && o.createElement(J, { gidSession: t }),
          ),
        );
      }
      function J(e) {
        const { gidSession: t } = e,
          {
            bUserCanModerate: n,
            rgNewQuestionGIDs: s,
            rgHiddenQuestionGIDs: i,
          } = C(t),
          r = (0, a.F_)(10);
        return n
          ? o.createElement(
              "div",
              {
                className: (0, G.Z)(V().QAModeratorColumn, V().QASplitColumns),
              },
              o.createElement(
                k.ug,
                {
                  title: (0, M.Xx)("#QAndA_ModeratorViewHeader"),
                  className: V().ModeratorInstructions,
                },
                o.createElement(
                  "div",
                  { className: V().QuestionList },
                  s.map((e) =>
                    o.createElement(z, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: n,
                      bUserCanVote: !1,
                      rtNow: r,
                    }),
                  ),
                ),
              ),
              o.createElement(
                k.ug,
                {
                  title: (0, M.Xx)("#QAndA_HiddenQuestionsHeader"),
                  className: V().AnsweredSectionHeader,
                  bStartMinimized: !0,
                },
                o.createElement(
                  "div",
                  { className: V().QuestionList },
                  i.map((e) =>
                    o.createElement(z, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: n,
                      bUserCanVote: !1,
                      rtNow: r,
                    }),
                  ),
                ),
              ),
            )
          : null;
      }
      function W(e) {
        const { gidSession: t, bHalfOfFullPage: n } = e;
        A();
        const {
            bIsLoaded: i,
            bUserCanAskQuestions: r,
            bUserCanModerate: l,
            fnAskQuestion: u,
            fnVoteOnQuestion: d,
            rgModeratedQuestionGIDs: c,
            rgAnsweredQuestionGIDs: m,
            rgNewQuestionGIDs: _,
          } = C(t),
          { fnReload: v, bIsReloading: Q } = S(t),
          p = (0, a.F_)(10),
          g = l && n,
          { fnModerateQuestion: h } = E(t);
        return o.createElement(
          "div",
          { className: (0, G.Z)(V().QAMainCtn, n && V().QASplitColumns) },
          o.createElement(
            "div",
            { className: (0, G.Z)(V().QAHeader, g && V().ModerationHeader) },
            o.createElement(
              N.zx,
              {
                onClick: v,
                disabled: !i,
                className: (0, G.Z)(
                  V().InputButton,
                  V().Reload,
                  Q && V().Reloading,
                ),
              },
              o.createElement(
                "div",
                { className: V().ReloadIcon },
                o.createElement(w.Lao, null),
              ),
            ),
            g
              ? o.createElement(
                  o.Fragment,
                  null,
                  (0, M.Xx)("#QAndA_ModeratorLabelHeader"),
                  o.createElement(
                    q.HP,
                    {
                      toolTipContent: (0, M.Xx)(
                        "#QAndA_ModerateHideAllButton_ttip",
                      ),
                    },
                    o.createElement(
                      N.zx,
                      {
                        onClick: () =>
                          (0, s.mG)(this, void 0, void 0, function* () {
                            for (const e of [_, c, m])
                              for (const t of e) yield h(t, 3);
                          }),
                        className: V().InputButton,
                      },
                      (0, M.Xx)("#QAndA_ModerateHideAllButton"),
                    ),
                  ),
                )
              : r
              ? o.createElement($, { fnAskQuestion: u })
              : i && o.createElement(te, null),
          ),
          c.length + m.length == 0
            ? o.createElement(
                "div",
                { className: V().NoQuestions },
                (0, M.Xx)("#QAndA_NoQuestionsYet"),
              )
            : o.createElement(
                "div",
                { className: V().QuestionsCtn },
                o.createElement(
                  "div",
                  { className: V().InsetShadowTopCtn },
                  o.createElement("div", { className: V().InsetShadowTop }),
                ),
                o.createElement(
                  "div",
                  { className: V().QuestionList },
                  i
                    ? c.map((e) =>
                        o.createElement(z, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: g,
                          bUserCanVote: r,
                          fnVoteOnQuestion: d,
                          rtNow: p,
                        }),
                      )
                    : o.createElement(T.V, { position: "center" }),
                ),
                m.length > 0 &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "div",
                      { className: V().AnsweredSectionHeader },
                      (0, M.Xx)("#QAndA_AnsweredQuestionsHeader"),
                    ),
                    o.createElement(
                      "div",
                      { className: V().QuestionList },
                      m.map((e) =>
                        o.createElement(z, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: g,
                          bUserCanVote: r,
                          fnVoteOnQuestion: d,
                          rtNow: p,
                        }),
                      ),
                    ),
                  ),
              ),
        );
      }
      function $(e) {
        const [t, n] = o.useState(!1),
          i = (0, Q.T)("QuestionBox");
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: V().Description },
            (0, M.Xx)("#QAndA_HeaderDescription"),
          ),
          o.createElement(ee, {
            strPrompt: (0, M.Xx)("#QAndA_QuestionPrompt"),
            fnSubmit: (t) =>
              (0, s.mG)(this, void 0, void 0, function* () {
                const s = yield e.fnAskQuestion(t);
                return (
                  1 != s ||
                    i.token.reason ||
                    (n(!0),
                    window.setTimeout(() => {
                      i.token.reason || n(!1);
                    }, 1e3)),
                  s
                );
              }),
          }),
          o.createElement(
            "div",
            { className: (0, G.Z)(V().QuestionACK, t && V().Visible) },
            (0, M.Xx)("#QAndA_QuestionWasPosted"),
          ),
        );
      }
      function ee(e) {
        const { strPrompt: t, fnSubmit: n } = e,
          [i, a] = o.useState(""),
          [r, l] = o.useState(!1);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: V().InputCtn },
            o.createElement(N.II, {
              type: "text",
              placeholder: t,
              maxLength: 512,
              value: i,
              onChange: (e) => a(e.target.value),
            }),
            o.createElement(
              "div",
              { className: V().ButtonCtn },
              r &&
                o.createElement(
                  "div",
                  { className: V().SaveSpinner },
                  o.createElement(T.V, { size: "small", position: "center" }),
                ),
              o.createElement(
                N.zx,
                {
                  onClick: () =>
                    (0, s.mG)(this, void 0, void 0, function* () {
                      l(!0);
                      1 == (yield n(i)) && a(""), l(!1);
                    }),
                  disabled: r || !i,
                  className: V().InputButton,
                },
                (0, M.Xx)("#QAndA_SubmitCommentButton"),
              ),
            ),
          ),
        );
      }
      function te(e) {
        return o.createElement(
          "div",
          { className: V().Description },
          o.createElement(
            "div",
            { className: V().LogInPrompt },
            (0, M.Xx)("#QAndA_LogInPrompt"),
          ),
          !d.L7.logged_in &&
            o.createElement(
              N.zx,
              {
                onClick: b.X,
                className: (0, G.Z)(V().SignInButton, V().InputButton),
              },
              (0, M.Xx)("#Login_SignIn"),
            ),
        );
      }
    },
  },
]);
