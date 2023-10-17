/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1649],
  {
    48705: (e) => {
      e.exports = {
        SectionTitleHeader: "collapseablesection_SectionTitleHeader_1K5gA",
        required_title: "collapseablesection_required_title_29VCz",
      };
    },
    37331: (e) => {
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
    24166: (e, t, s) => {
      "use strict";
      s.d(t, { bC: () => Q, fU: () => A, mY: () => m, ug: () => _ });
      var n = s(57605),
        o = s(14826),
        i = s(701),
        a = s(89526),
        r = s(19304),
        l = s(52629),
        u = s(17547),
        d = s(88464),
        c = s(48705);
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
              Boolean(e.tooltip) && a.createElement(Q, { tooltip: e.tooltip }),
            ),
            a.createElement(A, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            }),
          ),
          !e.getMinimized() && a.createElement(u.SV, null, e.children),
        ),
      );
      function _(e) {
        const [t, s] = a.useState(Boolean(e.bStartMinimized));
        return a.createElement(
          m,
          Object.assign({}, e, {
            getMinimized: () => t,
            toggleMinimized: () => s(!t),
          }),
          e.children,
        );
      }
      function A(e) {
        const { bIsMinimized: t, fnToggleMinimize: s } = e,
          r = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return a.createElement(
          n.zx,
          { "data-tooltip-text": (0, o.Xx)(r), onClick: s },
          e.bIsMinimized
            ? a.createElement(i.YqJ, null)
            : a.createElement(i.gR, null),
        );
      }
      function Q(e) {
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
    50857: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => H, EI: () => W, kF: () => ee });
      var n = s(33940),
        o = s(89526),
        i = s(42735),
        a = s(47165),
        r = s(85651),
        l = s(26464),
        u = s(85246),
        d = s(4306),
        c = s(32765);
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
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        constructor() {
          (this.m_callbackList = new u.pB()),
            (this.m_timer = null),
            (this.m_bAreEventListenersRegistered = !1),
            "dev" == c.De.WEB_UNIVERSE && (window.g_FidgetStore = this);
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
        o.useEffect(() => {
          const e = _.Get().BRegisterEventListeners();
          return () => {
            e && _.Get().BUnregisterEventListeners();
          };
        }, []);
      }
      (0, n.gn)([l.a], _.prototype, "ResetFidgetTimer", null);
      var Q,
        v = s(24448),
        E = s(52868),
        p = s.n(E),
        g = s(58218),
        S = s(23217);
      !(function (e) {
        (e[(e.k_EQuestionStateNew = 0)] = "k_EQuestionStateNew"),
          (e[(e.k_EQuestionStateModerated = 1)] = "k_EQuestionStateModerated"),
          (e[(e.k_EQuestionStateAnswered = 2)] = "k_EQuestionStateAnswered"),
          (e[(e.k_EQuestionStateHidden = 3)] = "k_EQuestionStateHidden"),
          (e[(e.k_EQuestionStateDeleted = 4)] = "k_EQuestionStateDeleted");
      })(Q || (Q = {}));
      class C {
        static Get() {
          return C.s_Singleton || (C.s_Singleton = new C()), C.s_Singleton;
        }
        constructor() {
          (this.m_mapQAndASessions = new Map()),
            (this.m_mapQAndAChangeCallbackList = new Map()),
            (this.m_dashboardCallbackList = new u.pB()),
            (this.m_mapQuestions = new Map()),
            (this.m_mapQuestionCallbackList = new Map()),
            (this.m_rgPendingQuestionGIDs = []),
            "dev" == c.De.WEB_UNIVERSE && (window.g_QAndAStore = this);
        }
        GetQAndACallbackList(e) {
          return (
            this.m_mapQAndAChangeCallbackList.has(e) ||
              this.m_mapQAndAChangeCallbackList.set(e, new u.pB()),
            this.m_mapQAndAChangeCallbackList.get(e)
          );
        }
        GetQuestionCallbackList(e) {
          return (
            this.m_mapQuestionCallbackList.has(e) ||
              this.m_mapQuestionCallbackList.set(e, new u.pB()),
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
          const s = new Set();
          for (const t of e)
            s.add(
              a.K.InitFromAccountID(t.posterAccountID).ConvertTo64BitString(),
            );
          const n = Array.from(s);
          for (; n.length > 0; ) {
            const e = n.splice(0, 500);
            v.y$.LoadProfiles(e, t);
          }
        }
        LoadAllSessions(e) {
          var t, s, o, a;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!c.L7.logged_in || !c.De.SESSIONID)
              return i.s.k_EResultAccessDenied;
            const n =
                c.De.COMMUNITY_BASE_URL +
                "questions/" +
                c.JA.VANITY_ID +
                "/ajaxgetqandasforgroup",
              r = {};
            let l = null;
            try {
              const s = yield p().get(n, {
                params: r,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                (console.log(s),
                200 == (null == s ? void 0 : s.status) &&
                  (null === (t = s.data) || void 0 === t
                    ? void 0
                    : t.success) == i.s.k_EResultOK &&
                  s.data.qandas)
              ) {
                for (const e of s.data.qandas)
                  this.m_mapQAndASessions.set(e.gidSession, e);
                return (
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  i.s.k_EResultOK
                );
              }
              l = { response: s };
            } catch (e) {
              l = e;
            }
            const u = (0, S.l)(l);
            return (
              console.error(
                "Could not load question and answer sessions for group",
                u.strErrorMsg,
                u,
              ),
              null !==
                (a =
                  null ===
                    (o =
                      null === (s = null == l ? void 0 : l.response) ||
                      void 0 === s
                        ? void 0
                        : s.data) || void 0 === o
                    ? void 0
                    : o.success) && void 0 !== a
                ? a
                : i.s.k_EResultFail
            );
          });
        }
        CreateNewSession(e, t) {
          var s, o, a, r;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!c.L7.logged_in || !c.De.SESSIONID)
              return i.s.k_EResultAccessDenied;
            const n =
                c.De.COMMUNITY_BASE_URL +
                "questions/" +
                c.JA.VANITY_ID +
                "/ajaxcreateqanda",
              l = new FormData();
            l.append("sessionid", c.De.SESSIONID), l.append("name", e);
            let u = null;
            try {
              const e = yield p().post(n, l, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                (null === (s = e.data) || void 0 === s ? void 0 : s.success) ==
                  i.s.k_EResultOK &&
                e.data.qanda
              )
                return (
                  this.m_mapQAndASessions.set(
                    e.data.qanda.gidSession,
                    e.data.qanda,
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  i.s.k_EResultOK
                );
              u = { response: e };
            } catch (e) {
              u = e;
            }
            const d = (0, S.l)(u);
            return (
              console.error("Could not create Q&A", e, d.strErrorMsg, d),
              null !==
                (r =
                  null ===
                    (a =
                      null === (o = null == u ? void 0 : u.response) ||
                      void 0 === o
                        ? void 0
                        : o.data) || void 0 === a
                    ? void 0
                    : a.success) && void 0 !== r
                ? r
                : i.s.k_EResultFail
            );
          });
        }
        RenameSession(e, t, s) {
          var o, a, r, l;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!c.L7.logged_in || !c.De.SESSIONID)
              return i.s.k_EResultAccessDenied;
            const n =
                c.De.COMMUNITY_BASE_URL +
                "questions/" +
                c.JA.VANITY_ID +
                "/ajaxrenameqanda/" +
                e,
              u = new FormData();
            u.append("sessionid", c.De.SESSIONID), u.append("name", t);
            let d = null;
            try {
              const a = yield p().post(n, u, {
                withCredentials: !0,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                200 == (null == a ? void 0 : a.status) &&
                (null === (o = a.data) || void 0 === o ? void 0 : o.success) ==
                  i.s.k_EResultOK
              )
                return (
                  (this.m_mapQAndASessions.get(e).strName = t),
                  this.GetQAndACallbackList(e).Dispatch(
                    this.m_mapQAndASessions.get(e),
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  i.s.k_EResultOK
                );
              d = { response: a };
            } catch (e) {
              d = e;
            }
            const m = (0, S.l)(d);
            return (
              console.error("Could not rename Q&A", e, t, m.strErrorMsg, m),
              null !==
                (l =
                  null ===
                    (r =
                      null === (a = null == d ? void 0 : d.response) ||
                      void 0 === a
                        ? void 0
                        : a.data) || void 0 === r
                    ? void 0
                    : r.success) && void 0 !== l
                ? l
                : i.s.k_EResultFail
            );
          });
        }
        DeleteSession(e, t) {
          var s, o, a, r;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!c.L7.logged_in || !c.De.SESSIONID)
              return i.s.k_EResultAccessDenied;
            const n =
                c.De.COMMUNITY_BASE_URL +
                "questions/" +
                c.JA.VANITY_ID +
                "/ajaxdeleteqanda/" +
                e,
              l = new FormData();
            l.append("sessionid", c.De.SESSIONID);
            let u = null;
            try {
              const o = yield p().post(n, l, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == o ? void 0 : o.status) &&
                (null === (s = o.data) || void 0 === s ? void 0 : s.success) ==
                  i.s.k_EResultOK
              )
                return (
                  this.m_mapQAndASessions.delete(e),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  i.s.k_EResultOK
                );
              u = { response: o };
            } catch (e) {
              u = e;
            }
            const d = (0, S.l)(u);
            return (
              console.error("Could not delete Q&A", e, d.strErrorMsg, d),
              null !==
                (r =
                  null ===
                    (a =
                      null === (o = null == u ? void 0 : u.response) ||
                      void 0 === o
                        ? void 0
                        : o.data) || void 0 === a
                    ? void 0
                    : a.success) && void 0 !== r
                ? r
                : i.s.k_EResultFail
            );
          });
        }
        LoadSession(e, t, s) {
          var o, a, r, l, u, d, m, _, A, Q;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n =
                c.L7.logged_in &&
                (!this.m_mapQAndASessions.has(e) ||
                  this.m_mapQAndASessions.get(e).bUserCanModerate ||
                  this.m_rgPendingQuestionGIDs.length > 0 ||
                  t)
                  ? "/ajaxgetqandasessionforuser/"
                  : "/ajaxgetqandasession/",
              v =
                c.De.COMMUNITY_BASE_URL + "questions/" + c.JA.VANITY_ID + n + e,
              E = {};
            let g = null;
            try {
              const t = yield p().get(v, {
                params: E,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                (null === (o = t.data) || void 0 === o ? void 0 : o.success) ==
                  i.s.k_EResultOK &&
                t.data.qanda &&
                t.data.questions
              ) {
                this.PreloadPosterProfiles(t.data.questions, s);
                for (const e of t.data.questions) {
                  const t = e.gidQuestion,
                    s =
                      null !==
                        (r =
                          null === (a = this.m_mapQuestions.get(t)) ||
                          void 0 === a
                            ? void 0
                            : a.bUserUpVoted) && void 0 !== r
                        ? r
                        : e.bUserUpVoted,
                    n = Object.assign(Object.assign({}, e), {
                      bUserUpVoted: s,
                    });
                  this.m_mapQuestions.set(t, n),
                    this.GetQuestionCallbackList(t).Dispatch(n);
                }
                const n =
                    null !==
                      (u =
                        null === (l = this.m_mapQAndASessions.get(e)) ||
                        void 0 === l
                          ? void 0
                          : l.bUserCanModerate) && void 0 !== u
                      ? u
                      : t.data.qanda.bUserCanModerate,
                  o =
                    null !==
                      (m =
                        null === (d = this.m_mapQAndASessions.get(e)) ||
                        void 0 === d
                          ? void 0
                          : d.bUserCanAskQuestions) && void 0 !== m
                      ? m
                      : t.data.qanda.bUserCanAskQuestions,
                  c = Object.assign(Object.assign({}, t.data.qanda), {
                    bUserCanModerate: n,
                    bUserCanAskQuestions: o,
                  });
                return (
                  this.m_mapQAndASessions.set(e, c),
                  this.GetQAndACallbackList(e).Dispatch(c),
                  this.UpdatePendingQuestionList(t.data.qanda.rgQuestionGIDs),
                  i.s.k_EResultOK
                );
              }
              g = { response: t };
            } catch (e) {
              g = e;
            }
            const C = (0, S.l)(g);
            return (
              console.error("Could not load Q&A", e, C.strErrorMsg, C),
              null !==
                (Q =
                  null ===
                    (A =
                      null === (_ = null == g ? void 0 : g.response) ||
                      void 0 === _
                        ? void 0
                        : _.data) || void 0 === A
                    ? void 0
                    : A.success) && void 0 !== Q
                ? Q
                : i.s.k_EResultFail
            );
          });
        }
        UpdatePendingQuestionList(e) {
          var t;
          const s = new Set();
          for (const t of e) {
            const e = this.m_mapQuestions.get(t);
            e.posterAccountID == c.L7.accountid &&
              e.eState == Q.k_EQuestionStateModerated &&
              s.add(e.gidQuestion);
          }
          if (this.m_rgPendingQuestionGIDs.length > 0) {
            const n = new Set(e);
            for (const e of this.m_rgPendingQuestionGIDs)
              n.has(e) &&
                (null === (t = this.m_mapQuestions.get(e)) || void 0 === t
                  ? void 0
                  : t.eState) == Q.k_EQuestionStateModerated &&
                s.add(e);
          }
          this.m_rgPendingQuestionGIDs = Array.from(s);
        }
        AskNewQuestion(e, t, s) {
          var o, a, r, l, u;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              !c.L7.logged_in ||
              !c.De.SESSIONID ||
              !(null === (o = this.m_mapQAndASessions.get(e)) || void 0 === o
                ? void 0
                : o.bUserCanAskQuestions)
            )
              return i.s.k_EResultAccessDenied;
            const n =
                c.De.COMMUNITY_BASE_URL +
                "questions/" +
                c.JA.VANITY_ID +
                "/ajaxaskquestion/" +
                e,
              d = new FormData();
            d.append("sessionid", c.De.SESSIONID), d.append("question", t);
            let m = null;
            try {
              const t = yield p().post(n, d, {
                withCredentials: !0,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                (null === (a = t.data) || void 0 === a ? void 0 : a.success) ==
                  i.s.k_EResultOK
              ) {
                this.m_rgPendingQuestionGIDs.push(t.data.gidQuestion);
                const n = !0;
                return this.LoadSession(e, n, s), i.s.k_EResultOK;
              }
              m = { response: t };
            } catch (e) {
              m = e;
            }
            const _ = (0, S.l)(m);
            return (
              console.error(
                "Could not upload question",
                e,
                t,
                _.strErrorMsg,
                _,
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
                : i.s.k_EResultFail
            );
          });
        }
        ModerateQuestion(e, t, s, o) {
          var a, r, l, u, d;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              !c.L7.logged_in ||
              !c.De.SESSIONID ||
              !(null === (a = this.m_mapQAndASessions.get(e)) || void 0 === a
                ? void 0
                : a.bUserCanModerate)
            )
              return i.s.k_EResultAccessDenied;
            if (
              s != Q.k_EQuestionStateModerated &&
              s != Q.k_EQuestionStateHidden
            )
              return i.s.k_EResultInvalidParam;
            if (this.m_mapQuestions.get(t).eState == s) return i.s.k_EResultOK;
            const n =
                c.De.COMMUNITY_BASE_URL +
                "questions/" +
                c.JA.VANITY_ID +
                "/ajaxmoderatequestion/" +
                e,
              m = new FormData();
            m.append("sessionid", c.De.SESSIONID),
              m.append("gidquestion", t),
              m.append(
                "action",
                s == Q.k_EQuestionStateModerated ? "show" : "hide",
              );
            let _ = null;
            try {
              const t = yield p().post(n, m, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                (null === (r = t.data) || void 0 === r ? void 0 : r.success) ==
                  i.s.k_EResultOK
              ) {
                const t = !0;
                return this.LoadSession(e, t, o), i.s.k_EResultOK;
              }
              _ = { response: t };
            } catch (e) {
              _ = e;
            }
            const A = (0, S.l)(_);
            return (
              console.error(
                "Could not moderate question",
                e,
                t,
                s,
                A.strErrorMsg,
                A,
              ),
              null !==
                (d =
                  null ===
                    (u =
                      null === (l = null == _ ? void 0 : _.response) ||
                      void 0 === l
                        ? void 0
                        : l.data) || void 0 === u
                    ? void 0
                    : u.success) && void 0 !== d
                ? d
                : i.s.k_EResultFail
            );
          });
        }
        AnswerQuestion(e, t, s, o) {
          var a, r, l, u, d;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              !c.L7.logged_in ||
              !c.De.SESSIONID ||
              !(null === (a = this.m_mapQAndASessions.get(e)) || void 0 === a
                ? void 0
                : a.bUserCanAskQuestions)
            )
              return i.s.k_EResultAccessDenied;
            const n =
                c.De.COMMUNITY_BASE_URL +
                "questions/" +
                c.JA.VANITY_ID +
                "/ajaxanswerquestion/" +
                e,
              m = new FormData();
            m.append("sessionid", c.De.SESSIONID),
              m.append("gidquestion", t),
              m.append("answer", s);
            let _ = null;
            try {
              const t = yield p().post(n, m, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                (null === (r = t.data) || void 0 === r ? void 0 : r.success) ==
                  i.s.k_EResultOK
              ) {
                const t = !0;
                return this.LoadSession(e, t, o), i.s.k_EResultOK;
              }
              _ = { response: t };
            } catch (e) {
              _ = e;
            }
            const A = (0, S.l)(_);
            return (
              console.error(
                "Could not upload answer",
                e,
                t,
                s,
                A.strErrorMsg,
                A,
              ),
              null !==
                (d =
                  null ===
                    (u =
                      null === (l = null == _ ? void 0 : _.response) ||
                      void 0 === l
                        ? void 0
                        : l.data) || void 0 === u
                    ? void 0
                    : u.success) && void 0 !== d
                ? d
                : i.s.k_EResultFail
            );
          });
        }
        VoteOnQuestion(e, t, s, o) {
          var a, r, l, u, d;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              !c.L7.logged_in ||
              !c.De.SESSIONID ||
              !(null === (a = this.m_mapQAndASessions.get(e)) || void 0 === a
                ? void 0
                : a.bUserCanAskQuestions)
            )
              return i.s.k_EResultAccessDenied;
            if (s === this.m_mapQuestions.get(t).bUserUpVoted)
              return i.s.k_EResultOK;
            let n = this.m_mapQuestions.get(t);
            const m = n.nVoteCount,
              _ = m + (s ? 1 : -1);
            (n = Object.assign(Object.assign({}, n), {
              nVoteCount: _,
              bUserUpVoted: s,
            })),
              this.m_mapQuestions.set(t, n),
              this.GetQuestionCallbackList(t).Dispatch(n);
            const A =
                c.De.COMMUNITY_BASE_URL +
                "questions/" +
                c.JA.VANITY_ID +
                "/ajaxvoteforquestion/" +
                e,
              Q = new FormData();
            Q.append("sessionid", c.De.SESSIONID),
              Q.append("gidquestion", t),
              Q.append("up", s ? "1" : "0");
            let v = null;
            try {
              const e = yield p().post(A, Q, {
                withCredentials: !0,
                cancelToken: null == o ? void 0 : o.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                (null === (r = e.data) || void 0 === r ? void 0 : r.success) ==
                  i.s.k_EResultOK
              )
                return i.s.k_EResultOK;
              v = { response: e };
            } catch (e) {
              v = e;
            }
            (n = Object.assign(Object.assign({}, n), {
              nVoteCount: m,
              bUserUpVoted: !s,
            })),
              this.m_mapQuestions.set(t, n),
              this.GetQuestionCallbackList(t).Dispatch(n);
            const E = (0, S.l)(v);
            return (
              console.error("Could not upload vote", e, t, s, E.strErrorMsg, E),
              null !==
                (d =
                  null ===
                    (u =
                      null === (l = null == v ? void 0 : v.response) ||
                      void 0 === l
                        ? void 0
                        : l.data) || void 0 === u
                    ? void 0
                    : u.success) && void 0 !== d
                ? d
                : i.s.k_EResultFail
            );
          });
        }
      }
      function h(e) {
        const t = (0, g.T)("useQAndASession"),
          s = o.useCallback(
            (s) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                var n;
                return (
                  (null === (n = C.Get().GetSession(e)) || void 0 === n
                    ? void 0
                    : n.bUserCanAskQuestions) &&
                  (yield C.Get().AskNewQuestion(e, s, t))
                );
              }),
            [e, t],
          ),
          i = o.useCallback(
            (s, n) => {
              var o;
              return (
                (null === (o = C.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanAskQuestions) &&
                C.Get().VoteOnQuestion(e, s, n, t)
              );
            },
            [e, t],
          ),
          a = o.useCallback(
            (e) => {
              var t;
              const n = !!e,
                o = null == e ? void 0 : e.strName,
                a = null == e ? void 0 : e.bUserCanModerate,
                r = null == e ? void 0 : e.bUserCanAskQuestions,
                l = [],
                u = [],
                d = [],
                c = [];
              for (const s of null !==
                (t = null == e ? void 0 : e.rgQuestionGIDs) && void 0 !== t
                ? t
                : []) {
                const e = C.Get().GetQuestion(s);
                switch (null == e ? void 0 : e.eState) {
                  case Q.k_EQuestionStateModerated:
                    l.push(s);
                    break;
                  case Q.k_EQuestionStateAnswered:
                    u.push(s);
                    break;
                  case Q.k_EQuestionStateNew:
                    d.push(s);
                    break;
                  case Q.k_EQuestionStateHidden:
                    c.push(s);
                }
              }
              return (
                l.sort(
                  (e, t) =>
                    C.Get().GetQuestion(t).nVoteCount -
                    C.Get().GetQuestion(e).nVoteCount,
                ),
                u.sort(
                  (e, t) =>
                    C.Get().GetQuestion(t).rtAnswerTime -
                    C.Get().GetQuestion(e).rtAnswerTime,
                ),
                d.sort(
                  (e, t) =>
                    C.Get().GetQuestion(t).rtPostTime -
                    C.Get().GetQuestion(e).rtPostTime,
                ),
                c.sort(
                  (e, t) =>
                    C.Get().GetQuestion(t).rtPostTime -
                    C.Get().GetQuestion(e).rtPostTime,
                ),
                {
                  bIsLoaded: n,
                  strName: o,
                  bUserCanModerate: a,
                  bUserCanAskQuestions: r,
                  fnAskQuestion: s,
                  fnVoteOnQuestion: i,
                  rgModeratedQuestionGIDs: l,
                  rgAnsweredQuestionGIDs: u,
                  rgNewQuestionGIDs: d,
                  rgHiddenQuestionGIDs: c,
                }
              );
            },
            [s, i],
          ),
          [r, l] = o.useState(() => a(C.Get().GetSession(e))),
          u = o.useCallback((e) => l(a(e)), [a]);
        return (
          (0, d.Qg)(C.Get().GetQAndACallbackList(e), u),
          o.useEffect(() => {
            r.bIsLoaded || C.Get().LoadSession(e);
          }, [r.bIsLoaded, e]),
          r
        );
      }
      let k = null;
      function N(e) {
        const t = (0, g.T)("useReloadFunction"),
          [s, n] = o.useState(!1),
          i = o.useCallback(() => {
            n(!0);
            const s = C.Get().LoadSession(e, !1, t);
            return s.then(() => n(!1)), s;
          }, [e, t]),
          a = (function (e) {
            const t = o.useRef(null),
              s = o.useCallback(() => {
                t.current && (t.current(), (t.current = null));
              }, []);
            return (
              (0, d.Qg)(_.Get().GetCallbackList(), s),
              o.useEffect(() => () => {
                t.current = null;
              }),
              o.useCallback(
                (...s) => {
                  _.Get().BIsUserFidgeting()
                    ? (t.current = () => e(...s))
                    : ((t.current = null), e(...s));
                },
                [e],
              )
            );
          })(i);
        return (
          o.useEffect(() => {
            if (k) return () => {};
            return (
              (k = window.setInterval(a, 1e4)), () => window.clearInterval(k)
            );
          }, [a]),
          o.useMemo(() => ({ fnReload: i, bIsReloading: s }), [i, s])
        );
      }
      function D(e) {
        const t = (0, g.T)("useQuestionModeratorActions"),
          s = o.useCallback(
            (s, n) => {
              var o;
              return (
                (null === (o = C.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanModerate) && C.Get().AnswerQuestion(e, s, n, t)
              );
            },
            [e, t],
          ),
          n = o.useCallback(
            (s, n) => {
              var o;
              return (
                (null === (o = C.Get().GetSession(e)) || void 0 === o
                  ? void 0
                  : o.bUserCanModerate) && C.Get().ModerateQuestion(e, s, n, t)
              );
            },
            [e, t],
          );
        return o.useMemo(
          () => ({ fnAnswerQuestion: s, fnModerateQuestion: n }),
          [s, n],
        );
      }
      var b = s(57605),
        I = s(32905),
        f = s(21904),
        w = s(99307),
        T = s(57742),
        q = s(701),
        M = s(3301),
        G = s(84343),
        R = s(24166),
        L = s(19304),
        x = s(14826),
        U = s(81349),
        O = s(25508),
        V = s(37331),
        B = s.n(V);
      function H(e) {
        const t = (function () {
          const [e, t] = o.useState(C.Get().GetAllSessions());
          return (
            (0, d.Qg)(C.Get().GetDashboardCallbackList(), t),
            o.useEffect(() => {
              0 == e.length && C.Get().LoadAllSessions();
            }, [e.length]),
            e
          );
        })();
        return o.createElement(
          "div",
          { className: B().QADashboardCtn },
          o.createElement(P, null),
          o.createElement(
            "div",
            {
              className: (0, L.Z)(B().DashboardRow, B().DashboardColumnHeaders),
            },
            o.createElement(
              "div",
              { className: B().QAndAName },
              (0, x.Xx)("#QAndA_Column_Name"),
            ),
            o.createElement(
              "div",
              { className: B().GIDSession },
              (0, x.Xx)("#QAndA_Column_GID"),
            ),
            o.createElement(
              "div",
              { className: B().QuestionCount },
              (0, x.Xx)("#QAndA_Column_QuestionCount"),
            ),
            o.createElement(
              "div",
              { className: B().QAndADeleteColumn },
              (0, x.Xx)("#QAndA_Column_DeleteButtons"),
            ),
          ),
          t.map((e) => o.createElement(X, { key: e.gidSession, qanda: e })),
        );
      }
      function P(e) {
        const t = o.useCallback(
          () =>
            (0, T.x1)(o.createElement(F, null), window, {
              strTitle: (0, x.Xx)("#QAndA_CreateQAndA_Title"),
            }),
          [],
        );
        return o.createElement(
          "div",
          { className: B().DashboardHeader },
          o.createElement(
            "div",
            { className: B().DashboardHeaderTitle },
            (0, x.Xx)("#QAndA_Dashboard"),
          ),
          o.createElement(
            "div",
            { className: B().DashboardHeaderButtonCtn },
            o.createElement(
              b.zx,
              { onClick: t },
              (0, x.Xx)("#QAndA_CreateQAndA_Button"),
            ),
          ),
        );
      }
      const y = 120;
      function F(e) {
        const t = (function () {
            const e = (0, g.T)("useCreateQAndAFn");
            return o.useCallback((t) => C.Get().CreateNewSession(t, e), [e]);
          })(),
          [s, n] = o.useState("");
        return o.createElement(
          w.uH,
          {
            strTitle: (0, x.Xx)("#QAndA_CreateQAndA_Title"),
            strDescription: (0, x.Xx)("#QAndA_CreateQAndA_Instructions"),
            strOKButtonText: (0, x.Xx)("#Button_Create"),
            onOK: () => t(s),
            bOKDisabled: 0 == s.length,
            closeModal: e.closeModal,
            className: B().CreateQAndADialog,
          },
          o.createElement(b.II, {
            type: "text",
            className: B().NameInput,
            value: s,
            placeholder: (0, x.Xx)("#QAndA_EnterNamePrompt"),
            onFocus: (e) => e.target.select(),
            onChange: (e) => n(e.currentTarget.value),
            maxLength: y,
          }),
        );
      }
      function X(e) {
        const { qanda: t } = e,
          s =
            c.De.COMMUNITY_BASE_URL +
            "questions/" +
            c.JA.VANITY_ID +
            "/view/" +
            t.gidSession,
          n = o.useCallback(
            (e) => {
              e.stopPropagation(),
                e.preventDefault(),
                (0, T.x1)(o.createElement(z, { qanda: t }), window, {
                  strTitle: (0, x.Xx)("#QAndA_CreateQAndA_Title"),
                });
            },
            [t],
          );
        return o.createElement(
          "a",
          { className: B().DashboardRow, href: s },
          o.createElement(K, { qanda: t }),
          o.createElement("div", { className: B().GIDSession }, t.gidSession),
          o.createElement(
            "div",
            { className: B().QuestionCount },
            t.rgQuestionGIDs.length,
          ),
          o.createElement(
            "div",
            { className: B().QAndADeleteColumn },
            o.createElement(
              "div",
              { className: B().DeleteButton, onClick: n },
              o.createElement(q.rFk, null),
            ),
          ),
        );
      }
      function K(e) {
        const { qanda: t } = e,
          [s, n] = o.useState(!1),
          [i, a] = o.useState(t.strName),
          r = (function () {
            const e = (0, g.T)("useRenameQAndAFn");
            return o.useCallback((t, s) => C.Get().RenameSession(t, s, e), [e]);
          })(),
          l =
            t.strName.length > 0
              ? t.strName
              : o.createElement(
                  "span",
                  { className: B().Prompt },
                  (0, x.Xx)("#QAndA_EnterNamePrompt"),
                ),
          u = o.createElement(
            "div",
            { className: B().NameInput },
            o.createElement(b.II, {
              type: "text",
              className: B().NameInput,
              value: i,
              placeholder: (0, x.Xx)("#QAndA_EnterNamePrompt"),
              onFocus: (e) => e.target.select(),
              onChange: (e) => a(e.currentTarget.value),
              maxLength: y,
            }),
            o.createElement(
              b.KM,
              {
                onClick: (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    0 != (0, U.eT)(i, t.strName)
                      ? r(t.gidSession, i).then(() => n(!1))
                      : n(!1);
                },
                className: B().InputButton,
              },
              (0, x.Xx)("#Button_Save"),
            ),
          );
        return o.createElement(
          "div",
          {
            className: (0, L.Z)(B().QAndAName, s && B().Editing),
            onClick: (e) => {
              e.stopPropagation(), e.preventDefault(), s || n(!0);
            },
          },
          s ? u : l,
        );
      }
      function z(e) {
        const { qanda: t } = e,
          s = (function () {
            const e = (0, g.T)("useDeleteQAndAFn");
            return o.useCallback((t) => C.Get().DeleteSession(t, e), [e]);
          })();
        return o.createElement(
          w.uH,
          {
            strTitle: (0, x.Xx)("#QAndA_Column_DeleteButtons"),
            strDescription: (0, x.Xx)("#QAndA_DeleteQAndA_Instructions"),
            onOK: () => s(t.gidSession),
            closeModal: e.closeModal,
            className: B().DeleteQAndADialog,
          },
          o.createElement(
            "div",
            { className: B().DeleteInfo },
            (0, x.Xx)("#QAndA_Column_Name") + ": " + t.strName,
          ),
          o.createElement(
            "div",
            { className: B().DeleteInfo },
            (0, x.Xx)("#QAndA_Column_QuestionCount") +
              ": " +
              t.rgQuestionGIDs.length,
          ),
        );
      }
      function Y(e) {
        const {
            gidSession: t,
            gidQuestion: s,
            bUserCanModerate: n,
            bUserCanVote: i,
            fnVoteOnQuestion: a,
            rtNow: r,
          } = e,
          [l, u] = (function (e) {
            const [t, s] = o.useState(C.Get().GetQuestion(e));
            (0, d.Qg)(C.Get().GetQuestionCallbackList(e), s);
            const [n, i] = o.useState(!!t);
            return [t, !!t || n];
          })(s);
        if (!l) return null;
        const c = r - l.rtPostTime,
          m = c < O._H.PerDay ? (0, x.yW)(c) : (0, x.m9)(l.rtPostTime),
          _ = i ? () => a(s, !l.bUserUpVoted) : null,
          A = i
            ? l.bUserUpVoted
              ? B().Vote_Positive
              : B().Vote_Ready
            : B().Vote_CannotVote,
          v = (0, L.Z)(
            B().Question,
            l.eState == Q.k_EQuestionStateHidden && B().Hidden,
            l.eState == Q.k_EQuestionStateModerated && B().Moderated,
            l.eState == Q.k_EQuestionStateNew && B().Unmoderated,
            l.eState == Q.k_EQuestionStateAnswered && B().Answered,
          );
        return o.createElement(
          "div",
          { className: v },
          o.createElement(
            "div",
            { className: (0, L.Z)(B().QuestionCtn, "questionCtn") },
            o.createElement(Z, { accountID: l.posterAccountID }),
            o.createElement(
              "div",
              { className: B().QuestionText },
              o.createElement(
                "div",
                { className: B().QuestionAndVotes },
                o.createElement(
                  "div",
                  { className: B().QuestionTitle },
                  l.strQuestionText,
                ),
                o.createElement(
                  G.HP,
                  {
                    toolTipContent:
                      i &&
                      (l.bUserUpVoted
                        ? (0, x.Xx)("#QAndA_VoteRemoveTooltip")
                        : (0, x.Xx)("#QAndA_VoteTooltip")),
                  },
                  o.createElement(
                    "div",
                    { className: (0, L.Z)(A, B().Votes), onClick: _ },
                    o.createElement(q.KJh, { className: B().RateIcon }),
                    o.createElement(
                      "div",
                      { className: B().VoteCount },
                      Number(l.nVoteCount).toLocaleString(),
                    ),
                  ),
                ),
              ),
              o.createElement(
                "div",
                { className: B().QuestionStats },
                o.createElement(
                  "div",
                  { className: B().PostTime },
                  o.createElement(
                    f.Zg,
                    {
                      rtFullDate: l.rtPostTime,
                      className: B().PostTime,
                      stylesmodule: B(),
                    },
                    m,
                  ),
                ),
              ),
            ),
          ),
          l.rtAnswerTime && o.createElement(j, { question: l, rtNow: r }),
          n &&
            o.createElement(J, {
              gidSession: t,
              gidQuestion: s,
              eState: null == l ? void 0 : l.eState,
            }),
        );
      }
      function j(e) {
        const { question: t, rtNow: s } = e,
          n = t.rtAnswerTime && s - t.rtAnswerTime,
          i =
            t.rtAnswerTime &&
            (n < O._H.PerDay ? (0, x.yW)(n) : (0, x.m9)(t.rtAnswerTime));
        return t.strAnswerText
          ? o.createElement(
              "div",
              { className: B().Answer },
              o.createElement(
                "div",
                { className: B().AnswerTitle },
                o.createElement(
                  "div",
                  { className: B().AnswerCheck },
                  o.createElement(q.mKE, { color: "#67c1f5" }),
                ),
                (0, x.Xx)("#QAndA_ModeratorAnswerTitle"),
              ),
              o.createElement(
                "div",
                { className: B().AnswerText },
                " ",
                t.strAnswerText,
                " ",
              ),
              o.createElement(
                "div",
                { className: B().QuestionStats },
                o.createElement(
                  f.Zg,
                  {
                    rtFullDate: t.rtAnswerTime,
                    className: B().PostTime,
                    stylesmodule: B(),
                  },
                  i,
                ),
              ),
            )
          : o.createElement(
              "div",
              { className: B().AnswerTitle },
              o.createElement(
                "div",
                { className: B().AnswerCheck },
                o.createElement(q.mKE, { color: "#67c1f5" }),
              ),
              (0, x.Xx)("#QAndA_AlreadyAnsweredTitle"),
            );
      }
      function Z(e) {
        var t;
        const s = a.K.InitFromAccountID(e.accountID),
          n = s.ConvertTo64BitString(),
          [i, r] = (0, v.Gr)(s);
        return i
          ? null
          : o.createElement(
              "a",
              {
                href: c.De.COMMUNITY_BASE_URL + "profiles/" + n,
                className: B().PersonaName,
                "data-miniprofile": "s" + n,
              },
              null !== (t = null == r ? void 0 : r.persona_name) && void 0 !== t
                ? t
                : n,
            );
      }
      function J(e) {
        const { gidSession: t, gidQuestion: s, eState: n } = e,
          { fnAnswerQuestion: i, fnModerateQuestion: a } = D(t),
          r = n == Q.k_EQuestionStateNew || n == Q.k_EQuestionStateHidden,
          l = n != Q.k_EQuestionStateHidden,
          u = n == Q.k_EQuestionStateModerated;
        return o.createElement(
          "div",
          { className: B().ModeratorSection },
          (0, x.Xx)("#QAndA_ModeratorLabel"),
          o.createElement(
            "div",
            { className: B().ToolRow },
            o.createElement(se, {
              strPrompt: (0, x.Xx)("#QAndA_AnswerPrompt"),
              fnSubmit: (e) => i(s, e),
            }),
          ),
          o.createElement(
            "div",
            { className: B().ToolRow },
            (0, x.Xx)("#QAndA_ModeratorOtherOptionsLabel"),
            o.createElement(
              G.HP,
              {
                toolTipContent: (0, x.Xx)("#QAndA_ModerateApproveButton_ttip"),
              },
              o.createElement(
                b.zx,
                {
                  onClick: () => a(s, Q.k_EQuestionStateModerated),
                  className: B().InputButton,
                  disabled: !r,
                },
                (0, x.Xx)("#QAndA_ModerateApproveButton"),
              ),
            ),
            o.createElement(
              G.HP,
              { toolTipContent: (0, x.Xx)("#QAndA_ModerateHideButton_ttip") },
              o.createElement(
                b.zx,
                {
                  onClick: () => a(s, Q.k_EQuestionStateHidden),
                  className: B().InputButton,
                  disabled: !l,
                },
                (0, x.Xx)("#QAndA_ModerateHideButton"),
              ),
            ),
            o.createElement(
              G.HP,
              { toolTipContent: (0, x.Xx)("#QAndA_QuickAnswerButton_ttip") },
              o.createElement(
                b.zx,
                {
                  onClick: () => i(s, ""),
                  className: B().InputButton,
                  disabled: !u,
                },
                (0, x.Xx)("#QAndA_QuickAnswerButton"),
              ),
            ),
          ),
        );
      }
      function W(e) {
        const { gidSession: t } = e;
        A();
        const { strName: s, bUserCanModerate: n } = h(t);
        return o.createElement(
          "div",
          { className: B().QAFullPageView },
          o.createElement(
            "div",
            { className: B().QAName },
            (0, x.Xx)("#QAndA_Header") +
              ((null == s ? void 0 : s.length) > 0 ? ": " + s : ""),
          ),
          o.createElement(
            "div",
            { className: B().QAColumns },
            o.createElement(ee, { gidSession: t, bHalfOfFullPage: n }),
            n && o.createElement($, { gidSession: t }),
          ),
        );
      }
      function $(e) {
        const { gidSession: t } = e,
          {
            bUserCanModerate: s,
            rgNewQuestionGIDs: n,
            rgHiddenQuestionGIDs: i,
          } = h(t),
          a = (0, r.F_)(10);
        return s
          ? o.createElement(
              "div",
              {
                className: (0, L.Z)(B().QAModeratorColumn, B().QASplitColumns),
              },
              o.createElement(
                R.ug,
                {
                  title: (0, x.Xx)("#QAndA_ModeratorViewHeader"),
                  className: B().ModeratorInstructions,
                },
                o.createElement(
                  "div",
                  { className: B().QuestionList },
                  n.map((e) =>
                    o.createElement(Y, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: s,
                      bUserCanVote: !1,
                      rtNow: a,
                    }),
                  ),
                ),
              ),
              o.createElement(
                R.ug,
                {
                  title: (0, x.Xx)("#QAndA_HiddenQuestionsHeader"),
                  className: B().AnsweredSectionHeader,
                  bStartMinimized: !0,
                },
                o.createElement(
                  "div",
                  { className: B().QuestionList },
                  i.map((e) =>
                    o.createElement(Y, {
                      key: e,
                      gidSession: t,
                      gidQuestion: e,
                      bUserCanModerate: s,
                      bUserCanVote: !1,
                      rtNow: a,
                    }),
                  ),
                ),
              ),
            )
          : null;
      }
      function ee(e) {
        const { gidSession: t, bHalfOfFullPage: s } = e;
        A();
        const {
            bIsLoaded: i,
            bUserCanAskQuestions: a,
            bUserCanModerate: l,
            fnAskQuestion: u,
            fnVoteOnQuestion: d,
            rgModeratedQuestionGIDs: c,
            rgAnsweredQuestionGIDs: m,
            rgNewQuestionGIDs: _,
          } = h(t),
          { fnReload: v, bIsReloading: E } = N(t),
          p = (0, r.F_)(10),
          g = l && s,
          { fnModerateQuestion: S } = D(t);
        return o.createElement(
          "div",
          { className: (0, L.Z)(B().QAMainCtn, s && B().QASplitColumns) },
          o.createElement(
            "div",
            { className: (0, L.Z)(B().QAHeader, g && B().ModerationHeader) },
            o.createElement(
              b.zx,
              {
                onClick: v,
                disabled: !i,
                className: (0, L.Z)(
                  B().InputButton,
                  B().Reload,
                  E && B().Reloading,
                ),
              },
              o.createElement(
                "div",
                { className: B().ReloadIcon },
                o.createElement(q.Lao, null),
              ),
            ),
            g
              ? o.createElement(
                  o.Fragment,
                  null,
                  (0, x.Xx)("#QAndA_ModeratorLabelHeader"),
                  o.createElement(
                    G.HP,
                    {
                      toolTipContent: (0, x.Xx)(
                        "#QAndA_ModerateHideAllButton_ttip",
                      ),
                    },
                    o.createElement(
                      b.zx,
                      {
                        onClick: () =>
                          (0, n.mG)(this, void 0, void 0, function* () {
                            for (const e of [_, c, m])
                              for (const t of e)
                                yield S(t, Q.k_EQuestionStateHidden);
                          }),
                        className: B().InputButton,
                      },
                      (0, x.Xx)("#QAndA_ModerateHideAllButton"),
                    ),
                  ),
                )
              : a
              ? o.createElement(te, { fnAskQuestion: u })
              : i && o.createElement(ne, null),
          ),
          c.length + m.length == 0
            ? o.createElement(
                "div",
                { className: B().NoQuestions },
                (0, x.Xx)("#QAndA_NoQuestionsYet"),
              )
            : o.createElement(
                "div",
                { className: B().QuestionsCtn },
                o.createElement(
                  "div",
                  { className: B().InsetShadowTopCtn },
                  o.createElement("div", { className: B().InsetShadowTop }),
                ),
                o.createElement(
                  "div",
                  { className: B().QuestionList },
                  i
                    ? c.map((e) =>
                        o.createElement(Y, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: g,
                          bUserCanVote: a,
                          fnVoteOnQuestion: d,
                          rtNow: p,
                        }),
                      )
                    : o.createElement(M.V, { position: "center" }),
                ),
                m.length > 0 &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "div",
                      { className: B().AnsweredSectionHeader },
                      (0, x.Xx)("#QAndA_AnsweredQuestionsHeader"),
                    ),
                    o.createElement(
                      "div",
                      { className: B().QuestionList },
                      m.map((e) =>
                        o.createElement(Y, {
                          key: e,
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: g,
                          bUserCanVote: a,
                          fnVoteOnQuestion: d,
                          rtNow: p,
                        }),
                      ),
                    ),
                  ),
              ),
        );
      }
      function te(e) {
        const [t, s] = o.useState(!1),
          a = (0, g.T)("QuestionBox");
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: B().Description },
            (0, x.Xx)("#QAndA_HeaderDescription"),
          ),
          o.createElement(se, {
            strPrompt: (0, x.Xx)("#QAndA_QuestionPrompt"),
            fnSubmit: (t) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                const n = yield e.fnAskQuestion(t);
                return (
                  n != i.s.k_EResultOK ||
                    a.token.reason ||
                    (s(!0),
                    window.setTimeout(() => {
                      a.token.reason || s(!1);
                    }, 1e3)),
                  n
                );
              }),
          }),
          o.createElement(
            "div",
            { className: (0, L.Z)(B().QuestionACK, t && B().Visible) },
            (0, x.Xx)("#QAndA_QuestionWasPosted"),
          ),
        );
      }
      function se(e) {
        const { strPrompt: t, fnSubmit: s } = e,
          [a, r] = o.useState(""),
          [l, u] = o.useState(!1);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: B().InputCtn },
            o.createElement(b.II, {
              type: "text",
              placeholder: t,
              maxLength: 512,
              value: a,
              onChange: (e) => r(e.target.value),
            }),
            o.createElement(
              "div",
              { className: B().ButtonCtn },
              l &&
                o.createElement(
                  "div",
                  { className: B().SaveSpinner },
                  o.createElement(M.V, { size: "small", position: "center" }),
                ),
              o.createElement(
                b.zx,
                {
                  onClick: () =>
                    (0, n.mG)(this, void 0, void 0, function* () {
                      u(!0);
                      (yield s(a)) == i.s.k_EResultOK && r(""), u(!1);
                    }),
                  disabled: l || !a,
                  className: B().InputButton,
                },
                (0, x.Xx)("#QAndA_SubmitCommentButton"),
              ),
            ),
          ),
        );
      }
      function ne(e) {
        return o.createElement(
          "div",
          { className: B().Description },
          o.createElement(
            "div",
            { className: B().LogInPrompt },
            (0, x.Xx)("#QAndA_LogInPrompt"),
          ),
          !c.L7.logged_in &&
            o.createElement(
              b.zx,
              {
                onClick: I.X,
                className: (0, L.Z)(B().SignInButton, B().InputButton),
              },
              (0, x.Xx)("#Login_SignIn"),
            ),
        );
      }
    },
  },
]);
