/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [60657],
    {
      67628: (q, re, f) => {
        "use strict";
        f.d(re, { xh: () => Se, AC: () => Re, u6: () => oe });
        var t = f(7850),
          C = f(90626),
          A = f(72604),
          ie = f(76559),
          O = f(7582),
          le = f(27066),
          B = f(8323),
          P = f(54963),
          ce = Object.defineProperty,
          de = Object.getOwnPropertyDescriptor,
          ue = (r, e, s, a) => {
            for (
              var o = a > 1 ? void 0 : a ? de(e, s) : e, i = r.length - 1, l;
              i >= 0;
              i--
            )
              (l = r[i]) && (o = (a ? l(e, s, o) : l(o)) || o);
            return a && o && ce(e, s, o), o;
          };
        const K = [
            "mousemove",
            "keypress",
            "scroll",
            "wheel",
            "focusin",
            "touchstart",
            "touchmove",
          ],
          me = 2e3,
          z = class k {
            m_callbackList = new B.lu();
            m_timer = null;
            m_bAreEventListenersRegistered = !1;
            static s_Singleton;
            static Get() {
              return k.s_Singleton || (k.s_Singleton = new k()), k.s_Singleton;
            }
            constructor() {}
            ResetFidgetTimer(e) {
              this.m_timer && window.clearTimeout(this.m_timer);
              const s = () => {
                (this.m_timer = null), this.m_callbackList.Dispatch();
              };
              this.m_timer = window.setTimeout(s, me);
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
              for (const s of K) e.addEventListener(s, this.ResetFidgetTimer);
              return (this.m_bAreEventListenersRegistered = !0), !0;
            }
            BUnregisterEventListeners() {
              if (!this.m_bAreEventListenersRegistered) return !1;
              const e = window;
              for (const s of K)
                e.removeEventListener(s, this.ResetFidgetTimer);
              return (this.m_bAreEventListenersRegistered = !1), !1;
            }
          };
        ue([le.o], z.prototype, "ResetFidgetTimer", 1);
        let F = z;
        function Y() {
          C.useEffect(() => {
            const r = F.Get().BRegisterEventListeners();
            return () => {
              r && F.Get().BUnregisterEventListeners();
            };
          }, []);
        }
        function Ae(r) {
          const e = C.useRef(null),
            s = C.useCallback(() => {
              e.current && (e.current(), (e.current = null));
            }, []);
          return (
            (0, P.hL)(F.Get().GetCallbackList(), s),
            C.useEffect(() => () => {
              e.current = null;
            }),
            C.useCallback(
              (...o) => {
                F.Get().BIsUserFidgeting()
                  ? (e.current = () => r(...o))
                  : ((e.current = null), r(...o));
              },
              [r],
            )
          );
        }
        var he = f(41735),
          j = f.n(he),
          G = f(47689),
          T = f(34592),
          m = f(3166);
        const y = 0,
          _ = 1,
          W = 2,
          L = 3,
          Fe = 4;
        class h {
          m_mapQAndASessions = new Map();
          m_mapQAndAChangeCallbackList = new Map();
          m_dashboardCallbackList = new B.lu();
          m_mapQuestions = new Map();
          m_mapQuestionCallbackList = new Map();
          m_rgPendingQuestionGIDs = [];
          static s_Singleton;
          static Get() {
            return h.s_Singleton || (h.s_Singleton = new h()), h.s_Singleton;
          }
          constructor() {}
          GetQAndACallbackList(e) {
            return (
              this.m_mapQAndAChangeCallbackList.has(e) ||
                this.m_mapQAndAChangeCallbackList.set(e, new B.lu()),
              this.m_mapQAndAChangeCallbackList.get(e)
            );
          }
          GetQuestionCallbackList(e) {
            return (
              this.m_mapQuestionCallbackList.has(e) ||
                this.m_mapQuestionCallbackList.set(e, new B.lu()),
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
          async LoadAllSessions(e) {
            if (!m.iA.logged_in || !(0, m.KC)()) return A.sW;
            const s =
                m.TS.COMMUNITY_BASE_URL +
                "questions/" +
                m.UF.VANITY_ID +
                "/ajaxgetqandasforgroup",
              a = {};
            let o = null;
            try {
              const l = await j().get(s, { params: a, cancelToken: e?.token });
              if (
                (console.log(l),
                l?.status == 200 && l.data?.success == A.R && l.data.qandas)
              ) {
                for (const c of l.data.qandas)
                  this.m_mapQAndASessions.set(c.gidSession, c);
                return (
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  A.R
                );
              }
              o = { response: l };
            } catch (l) {
              o = l;
            }
            const i = (0, T.H)(o);
            return (
              console.error(
                "Could not load question and answer sessions for group",
                i.strErrorMsg,
                i,
              ),
              o?.response?.data?.success ?? A.zi
            );
          }
          async CreateNewSession(e, s) {
            if (!m.iA.logged_in || !(0, m.KC)()) return A.sW;
            const a =
                m.TS.COMMUNITY_BASE_URL +
                "questions/" +
                m.UF.VANITY_ID +
                "/ajaxcreateqanda",
              o = new FormData();
            o.append("sessionid", (0, m.KC)()), o.append("name", e);
            let i = null;
            try {
              const c = await j().post(a, o, {
                withCredentials: !0,
                cancelToken: s?.token,
              });
              if (c?.status == 200 && c.data?.success == A.R && c.data.qanda)
                return (
                  this.m_mapQAndASessions.set(
                    c.data.qanda.gidSession,
                    c.data.qanda,
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  A.R
                );
              i = { response: c };
            } catch (c) {
              i = c;
            }
            const l = (0, T.H)(i);
            return (
              console.error("Could not create Q&A", e, l.strErrorMsg, l),
              i?.response?.data?.success ?? A.zi
            );
          }
          async RenameSession(e, s, a) {
            if (!m.iA.logged_in || !(0, m.KC)()) return A.sW;
            const o =
                m.TS.COMMUNITY_BASE_URL +
                "questions/" +
                m.UF.VANITY_ID +
                "/ajaxrenameqanda/" +
                e,
              i = new FormData();
            i.append("sessionid", (0, m.KC)()), i.append("name", s);
            let l = null;
            try {
              const d = await j().post(o, i, {
                withCredentials: !0,
                cancelToken: a?.token,
              });
              if (d?.status == 200 && d.data?.success == A.R)
                return (
                  (this.m_mapQAndASessions.get(e).strName = s),
                  this.GetQAndACallbackList(e).Dispatch(
                    this.m_mapQAndASessions.get(e),
                  ),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  A.R
                );
              l = { response: d };
            } catch (d) {
              l = d;
            }
            const c = (0, T.H)(l);
            return (
              console.error("Could not rename Q&A", e, s, c.strErrorMsg, c),
              l?.response?.data?.success ?? A.zi
            );
          }
          async DeleteSession(e, s) {
            if (!m.iA.logged_in || !(0, m.KC)()) return A.sW;
            const a =
                m.TS.COMMUNITY_BASE_URL +
                "questions/" +
                m.UF.VANITY_ID +
                "/ajaxdeleteqanda/" +
                e,
              o = new FormData();
            o.append("sessionid", (0, m.KC)());
            let i = null;
            try {
              const c = await j().post(a, o, {
                withCredentials: !0,
                cancelToken: s?.token,
              });
              if (c?.status == 200 && c.data?.success == A.R)
                return (
                  this.m_mapQAndASessions.delete(e),
                  this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
                  A.R
                );
              i = { response: c };
            } catch (c) {
              i = c;
            }
            const l = (0, T.H)(i);
            return (
              console.error("Could not delete Q&A", e, l.strErrorMsg, l),
              i?.response?.data?.success ?? A.zi
            );
          }
          async LoadSession(e, s, a) {
            const i =
                m.iA.logged_in &&
                (!this.m_mapQAndASessions.has(e) ||
                  this.m_mapQAndASessions.get(e).bUserCanModerate ||
                  this.m_rgPendingQuestionGIDs.length > 0 ||
                  s)
                  ? "/ajaxgetqandasessionforuser/"
                  : "/ajaxgetqandasession/",
              l =
                m.TS.COMMUNITY_BASE_URL + "questions/" + m.UF.VANITY_ID + i + e,
              c = {};
            let d = null;
            try {
              const Q = await j().get(l, { params: c, cancelToken: a?.token });
              if (
                Q?.status == 200 &&
                Q.data?.success == A.R &&
                Q.data.qanda &&
                Q.data.questions
              ) {
                for (const N of Q.data.questions) {
                  const I = N.gidQuestion,
                    M =
                      this.m_mapQuestions.get(I)?.bUserUpVoted ??
                      N.bUserUpVoted,
                    g = { ...N, bUserUpVoted: M };
                  this.m_mapQuestions.set(I, g),
                    this.GetQuestionCallbackList(I).Dispatch(g);
                }
                const x =
                    this.m_mapQAndASessions.get(e)?.bUserCanModerate ??
                    Q.data.qanda.bUserCanModerate,
                  w =
                    this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions ??
                    Q.data.qanda.bUserCanAskQuestions,
                  D = {
                    ...Q.data.qanda,
                    bUserCanModerate: x,
                    bUserCanAskQuestions: w,
                  };
                return (
                  this.m_mapQAndASessions.set(e, D),
                  this.GetQAndACallbackList(e).Dispatch(D),
                  this.UpdatePendingQuestionList(Q.data.qanda.rgQuestionGIDs),
                  A.R
                );
              }
              d = { response: Q };
            } catch (Q) {
              d = Q;
            }
            const p = (0, T.H)(d);
            return (
              console.error("Could not load Q&A", e, p.strErrorMsg, p),
              d?.response?.data?.success ?? A.zi
            );
          }
          UpdatePendingQuestionList(e) {
            const s = new Set();
            for (const a of e) {
              const o = this.m_mapQuestions.get(a);
              o.posterAccountID == m.iA.accountid &&
                o.eState == _ &&
                s.add(o.gidQuestion);
            }
            if (this.m_rgPendingQuestionGIDs.length > 0) {
              const a = new Set(e);
              for (const o of this.m_rgPendingQuestionGIDs)
                a.has(o) && this.m_mapQuestions.get(o)?.eState == _ && s.add(o);
            }
            this.m_rgPendingQuestionGIDs = Array.from(s);
          }
          async AskNewQuestion(e, s, a) {
            if (
              !m.iA.logged_in ||
              !(0, m.KC)() ||
              !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
            )
              return A.sW;
            const o =
                m.TS.COMMUNITY_BASE_URL +
                "questions/" +
                m.UF.VANITY_ID +
                "/ajaxaskquestion/" +
                e,
              i = new FormData();
            i.append("sessionid", (0, m.KC)()), i.append("question", s);
            let l = null;
            try {
              const d = await j().post(o, i, {
                withCredentials: !0,
                cancelToken: a?.token,
              });
              if (d?.status == 200 && d.data?.success == A.R)
                return (
                  this.m_rgPendingQuestionGIDs.push(d.data.gidQuestion),
                  this.LoadSession(e, !0, a),
                  A.R
                );
              l = { response: d };
            } catch (d) {
              l = d;
            }
            const c = (0, T.H)(l);
            return (
              console.error(
                "Could not upload question",
                e,
                s,
                c.strErrorMsg,
                c,
              ),
              l?.response?.data?.success ?? A.zi
            );
          }
          async ModerateQuestion(e, s, a, o) {
            if (
              !m.iA.logged_in ||
              !(0, m.KC)() ||
              !this.m_mapQAndASessions.get(e)?.bUserCanModerate
            )
              return A.sW;
            if (a != _ && a != L) return A.nO;
            if (this.m_mapQuestions.get(s).eState == a) return A.R;
            const l =
                m.TS.COMMUNITY_BASE_URL +
                "questions/" +
                m.UF.VANITY_ID +
                "/ajaxmoderatequestion/" +
                e,
              c = new FormData();
            c.append("sessionid", (0, m.KC)()),
              c.append("gidquestion", s),
              c.append("action", a == _ ? "show" : "hide");
            let d = null;
            try {
              const Q = await j().post(l, c, {
                withCredentials: !0,
                cancelToken: o?.token,
              });
              if (Q?.status == 200 && Q.data?.success == A.R)
                return this.LoadSession(e, !0, o), A.R;
              d = { response: Q };
            } catch (Q) {
              d = Q;
            }
            const p = (0, T.H)(d);
            return (
              console.error(
                "Could not moderate question",
                e,
                s,
                a,
                p.strErrorMsg,
                p,
              ),
              d?.response?.data?.success ?? A.zi
            );
          }
          async AnswerQuestion(e, s, a, o) {
            if (
              !m.iA.logged_in ||
              !(0, m.KC)() ||
              !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
            )
              return A.sW;
            const i =
                m.TS.COMMUNITY_BASE_URL +
                "questions/" +
                m.UF.VANITY_ID +
                "/ajaxanswerquestion/" +
                e,
              l = new FormData();
            l.append("sessionid", (0, m.KC)()),
              l.append("gidquestion", s),
              l.append("answer", a);
            let c = null;
            try {
              const p = await j().post(i, l, {
                withCredentials: !0,
                cancelToken: o?.token,
              });
              if (p?.status == 200 && p.data?.success == A.R)
                return this.LoadSession(e, !0, o), A.R;
              c = { response: p };
            } catch (p) {
              c = p;
            }
            const d = (0, T.H)(c);
            return (
              console.error(
                "Could not upload answer",
                e,
                s,
                a,
                d.strErrorMsg,
                d,
              ),
              c?.response?.data?.success ?? A.zi
            );
          }
          async VoteOnQuestion(e, s, a, o) {
            if (
              !m.iA.logged_in ||
              !(0, m.KC)() ||
              !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
            )
              return A.sW;
            if (a === this.m_mapQuestions.get(s).bUserUpVoted) return A.R;
            let i = this.m_mapQuestions.get(s);
            const l = i.nVoteCount,
              c = l + (a ? 1 : -1);
            (i = { ...i, nVoteCount: c, bUserUpVoted: a }),
              this.m_mapQuestions.set(s, i),
              this.GetQuestionCallbackList(s).Dispatch(i);
            const d =
                m.TS.COMMUNITY_BASE_URL +
                "questions/" +
                m.UF.VANITY_ID +
                "/ajaxvoteforquestion/" +
                e,
              p = new FormData();
            p.append("sessionid", (0, m.KC)()),
              p.append("gidquestion", s),
              p.append("up", a ? "1" : "0");
            let Q = null;
            try {
              const w = await j().post(d, p, {
                withCredentials: !0,
                cancelToken: o?.token,
              });
              if (w?.status == 200 && w.data?.success == A.R) return A.R;
              Q = { response: w };
            } catch (w) {
              Q = w;
            }
            (i = { ...i, nVoteCount: l, bUserUpVoted: !a }),
              this.m_mapQuestions.set(s, i),
              this.GetQuestionCallbackList(s).Dispatch(i);
            const x = (0, T.H)(Q);
            return (
              console.error("Could not upload vote", e, s, a, x.strErrorMsg, x),
              Q?.response?.data?.success ?? A.zi
            );
          }
        }
        function E(r) {
          const e = (0, G.m)("useQAndASession"),
            s = C.useCallback(
              async (d) =>
                h.Get().GetSession(r)?.bUserCanAskQuestions &&
                (await h.Get().AskNewQuestion(r, d, e)),
              [r, e],
            ),
            a = C.useCallback(
              (d, p) =>
                h.Get().GetSession(r)?.bUserCanAskQuestions &&
                h.Get().VoteOnQuestion(r, d, p, e),
              [r, e],
            ),
            o = C.useCallback(
              (d) => {
                const p = !!d,
                  Q = d?.strName,
                  x = d?.bUserCanModerate,
                  w = d?.bUserCanAskQuestions,
                  D = [],
                  N = [],
                  I = [],
                  M = [];
                for (const g of d?.rgQuestionGIDs ?? [])
                  switch (h.Get().GetQuestion(g)?.eState) {
                    case _:
                      D.push(g);
                      break;
                    case W:
                      N.push(g);
                      break;
                    case y:
                      I.push(g);
                      break;
                    case L:
                      M.push(g);
                      break;
                  }
                return (
                  D.sort(
                    (g, S) =>
                      h.Get().GetQuestion(S).nVoteCount -
                      h.Get().GetQuestion(g).nVoteCount,
                  ),
                  N.sort(
                    (g, S) =>
                      h.Get().GetQuestion(S).rtAnswerTime -
                      h.Get().GetQuestion(g).rtAnswerTime,
                  ),
                  I.sort(
                    (g, S) =>
                      h.Get().GetQuestion(S).rtPostTime -
                      h.Get().GetQuestion(g).rtPostTime,
                  ),
                  M.sort(
                    (g, S) =>
                      h.Get().GetQuestion(S).rtPostTime -
                      h.Get().GetQuestion(g).rtPostTime,
                  ),
                  {
                    bIsLoaded: p,
                    strName: Q,
                    bUserCanModerate: x,
                    bUserCanAskQuestions: w,
                    fnAskQuestion: s,
                    fnVoteOnQuestion: a,
                    rgModeratedQuestionGIDs: D,
                    rgAnsweredQuestionGIDs: N,
                    rgNewQuestionGIDs: I,
                    rgHiddenQuestionGIDs: M,
                  }
                );
              },
              [s, a],
            ),
            [i, l] = C.useState(() => o(h.Get().GetSession(r))),
            c = C.useCallback((d) => l(o(d)), [o]);
          return (
            (0, P.hL)(h.Get().GetQAndACallbackList(r), c),
            C.useEffect(() => {
              i.bIsLoaded || h.Get().LoadSession(r);
            }, [i.bIsLoaded, r]),
            i
          );
        }
        let V = null;
        function Qe(r) {
          const e = (0, G.m)("useReloadFunction"),
            [s, a] = C.useState(!1),
            o = C.useCallback(() => {
              a(!0);
              const l = h.Get().LoadSession(r, !1, e);
              return l.then(() => a(!1)), l;
            }, [r, e]),
            i = Ae(o);
          return (
            C.useEffect(
              () =>
                V
                  ? () => {}
                  : ((V = window.setInterval(i, 1e4)),
                    () => window.clearInterval(V)),
              [i],
            ),
            C.useMemo(() => ({ fnReload: o, bIsReloading: s }), [o, s])
          );
        }
        function Ce(r) {
          const [e, s] = C.useState(h.Get().GetQuestion(r));
          (0, P.hL)(h.Get().GetQuestionCallbackList(r), s);
          const [a, o] = C.useState(!!e);
          return [e, !!e || a];
        }
        function J(r) {
          const e = (0, G.m)("useQuestionModeratorActions"),
            s = C.useCallback(
              (o, i) =>
                h.Get().GetSession(r)?.bUserCanModerate &&
                h.Get().AnswerQuestion(r, o, i, e),
              [r, e],
            ),
            a = C.useCallback(
              (o, i) =>
                h.Get().GetSession(r)?.bUserCanModerate &&
                h.Get().ModerateQuestion(r, o, i, e),
              [r, e],
            );
          return C.useMemo(
            () => ({ fnAnswerQuestion: s, fnModerateQuestion: a }),
            [s, a],
          );
        }
        function pe() {
          const [r, e] = C.useState(h.Get().GetAllSessions());
          return (
            (0, P.hL)(h.Get().GetDashboardCallbackList(), e),
            C.useEffect(() => {
              r.length == 0 && h.Get().LoadAllSessions();
            }, [r.length]),
            r
          );
        }
        function fe() {
          const r = (0, G.m)("useCreateQAndAFn");
          return C.useCallback((e) => h.Get().CreateNewSession(e, r), [r]);
        }
        function ge() {
          const r = (0, G.m)("useRenameQAndAFn");
          return C.useCallback((e, s) => h.Get().RenameSession(e, s, r), [r]);
        }
        function xe() {
          const r = (0, G.m)("useDeleteQAndAFn");
          return C.useCallback((e) => h.Get().DeleteSession(e, r), [r]);
        }
        var v = f(19316),
          we = f(86390),
          X = f(18057),
          Z = f(2801),
          $ = f(88003),
          U = f(36118),
          ee = f(85599),
          R = f(71421),
          te = f(12932),
          b = f(36707),
          u = f(18210),
          ve = f(48473),
          se = f(36174),
          Ne = f(76048),
          n = f.n(Ne),
          be = f(35098),
          De = f(24642);
        function Se(r) {
          const e = pe();
          return (0, t.jsxs)("div", {
            className: n().QADashboardCtn,
            children: [
              (0, t.jsx)(je, {}),
              (0, t.jsxs)("div", {
                className: (0, b.A)(
                  n().DashboardRow,
                  n().DashboardColumnHeaders,
                ),
                children: [
                  (0, t.jsx)("div", {
                    className: n().QAndAName,
                    children: (0, u.we)("#QAndA_Column_Name"),
                  }),
                  (0, t.jsx)("div", {
                    className: n().GIDSession,
                    children: (0, u.we)("#QAndA_Column_GID"),
                  }),
                  (0, t.jsx)("div", {
                    className: n().QuestionCount,
                    children: (0, u.we)("#QAndA_Column_QuestionCount"),
                  }),
                  (0, t.jsx)("div", {
                    className: n().QAndADeleteColumn,
                    children: (0, u.we)("#QAndA_Column_DeleteButtons"),
                  }),
                ],
              }),
              e.map((s) => (0, t.jsx)(Ie, { qanda: s }, s.gidSession)),
            ],
          });
        }
        function je(r) {
          const e = C.useCallback(
            () =>
              (0, $.mK)((0, t.jsx)(Te, {}), window, {
                strTitle: (0, u.we)("#QAndA_CreateQAndA_Title"),
              }),
            [],
          );
          return (0, t.jsxs)("div", {
            className: n().DashboardHeader,
            children: [
              (0, t.jsx)("div", {
                className: n().DashboardHeaderTitle,
                children: (0, u.we)("#QAndA_Dashboard"),
              }),
              (0, t.jsx)("div", {
                className: n().DashboardHeaderButtonCtn,
                children: (0, t.jsx)(v.$n, {
                  onClick: e,
                  children: (0, u.we)("#QAndA_CreateQAndA_Button"),
                }),
              }),
            ],
          });
        }
        const ne = 120;
        function Te(r) {
          const e = fe(),
            [s, a] = C.useState("");
          return (0, t.jsx)(Z.o0, {
            strTitle: (0, u.we)("#QAndA_CreateQAndA_Title"),
            strDescription: (0, u.we)("#QAndA_CreateQAndA_Instructions"),
            strOKButtonText: (0, u.we)("#Button_Create"),
            onOK: () => e(s),
            bOKDisabled: s.length == 0,
            closeModal: r.closeModal,
            className: n().CreateQAndADialog,
            children: (0, t.jsx)(v.pd, {
              type: "text",
              className: n().NameInput,
              value: s,
              placeholder: (0, u.we)("#QAndA_EnterNamePrompt"),
              onFocus: (o) => o.target.select(),
              onChange: (o) => a(o.currentTarget.value),
              maxLength: ne,
            }),
          });
        }
        function Ie(r) {
          const { qanda: e } = r,
            s =
              m.TS.COMMUNITY_BASE_URL +
              "questions/" +
              m.UF.VANITY_ID +
              "/view/" +
              e.gidSession,
            a = C.useCallback(
              (o) => {
                o.stopPropagation(),
                  o.preventDefault(),
                  (0, $.mK)((0, t.jsx)(Ge, { qanda: e }), window, {
                    strTitle: (0, u.we)("#QAndA_CreateQAndA_Title"),
                  });
              },
              [e],
            );
          return (0, t.jsxs)("a", {
            className: n().DashboardRow,
            href: s,
            children: [
              (0, t.jsx)(_e, { qanda: e }),
              (0, t.jsx)("div", {
                className: n().GIDSession,
                children: e.gidSession,
              }),
              (0, t.jsx)("div", {
                className: n().QuestionCount,
                children: e.rgQuestionGIDs.length,
              }),
              (0, t.jsx)("div", {
                className: n().QAndADeleteColumn,
                children: (0, t.jsx)("div", {
                  className: n().DeleteButton,
                  onClick: a,
                  children: (0, t.jsx)(U.lMJ, {}),
                }),
              }),
            ],
          });
        }
        function _e(r) {
          const { qanda: e } = r,
            [s, a] = C.useState(!1),
            [o, i] = C.useState(e.strName),
            l = ge(),
            c = (x) => {
              x.stopPropagation(), x.preventDefault(), s || a(!0);
            },
            d = (x) => {
              x.stopPropagation(),
                x.preventDefault(),
                (0, ve.kd)(o, e.strName) != 0
                  ? l(e.gidSession, o).then(() => a(!1))
                  : a(!1);
            },
            p =
              e.strName.length > 0
                ? e.strName
                : (0, t.jsx)("span", {
                    className: n().Prompt,
                    children: (0, u.we)("#QAndA_EnterNamePrompt"),
                  }),
            Q = (0, t.jsxs)("div", {
              className: n().NameInput,
              children: [
                (0, t.jsx)(v.pd, {
                  type: "text",
                  className: n().NameInput,
                  value: o,
                  placeholder: (0, u.we)("#QAndA_EnterNamePrompt"),
                  onFocus: (x) => x.target.select(),
                  onChange: (x) => i(x.currentTarget.value),
                  maxLength: ne,
                }),
                (0, t.jsx)(v.jn, {
                  onClick: d,
                  className: n().InputButton,
                  children: (0, u.we)("#Button_Save"),
                }),
              ],
            });
          return (0, t.jsx)("div", {
            className: (0, b.A)(n().QAndAName, s && n().Editing),
            onClick: c,
            children: s ? Q : p,
          });
        }
        function Ge(r) {
          const { qanda: e } = r,
            s = xe();
          return (0, t.jsxs)(Z.o0, {
            strTitle: (0, u.we)("#QAndA_Column_DeleteButtons"),
            strDescription: (0, u.we)("#QAndA_DeleteQAndA_Instructions"),
            onOK: () => s(e.gidSession),
            closeModal: r.closeModal,
            className: n().DeleteQAndADialog,
            children: [
              (0, t.jsx)("div", {
                className: n().DeleteInfo,
                children: (0, u.we)("#QAndA_Column_Name") + ": " + e.strName,
              }),
              (0, t.jsx)("div", {
                className: n().DeleteInfo,
                children:
                  (0, u.we)("#QAndA_Column_QuestionCount") +
                  ": " +
                  e.rgQuestionGIDs.length,
              }),
            ],
          });
        }
        function H(r) {
          const {
              gidSession: e,
              gidQuestion: s,
              bUserCanModerate: a,
              bUserCanVote: o,
              fnVoteOnQuestion: i,
              rtNow: l,
            } = r,
            [c, d] = Ce(s);
          if (!c) return null;
          const p = l - c.rtPostTime,
            Q = p < se.Kp.PerDay ? (0, u.Hq)(p) : (0, u._l)(c.rtPostTime),
            x = o ? () => i(s, !c.bUserUpVoted) : null,
            w = o
              ? c.bUserUpVoted
                ? n().Vote_Positive
                : n().Vote_Ready
              : n().Vote_CannotVote,
            D = (0, b.A)(
              n().Question,
              c.eState == L && n().Hidden,
              c.eState == _ && n().Moderated,
              c.eState == y && n().Unmoderated,
              c.eState == W && n().Answered,
            );
          return (0, t.jsxs)("div", {
            className: D,
            children: [
              (0, t.jsxs)("div", {
                className: (0, b.A)(n().QuestionCtn, "questionCtn"),
                children: [
                  (0, t.jsx)(Me, { accountID: c.posterAccountID }),
                  (0, t.jsxs)("div", {
                    className: n().QuestionText,
                    children: [
                      (0, t.jsxs)("div", {
                        className: n().QuestionAndVotes,
                        children: [
                          (0, t.jsx)("div", {
                            className: n().QuestionTitle,
                            children: c.strQuestionText,
                          }),
                          (0, t.jsx)(R.he, {
                            toolTipContent:
                              o &&
                              (c.bUserUpVoted
                                ? (0, u.we)("#QAndA_VoteRemoveTooltip")
                                : (0, u.we)("#QAndA_VoteTooltip")),
                            children: (0, t.jsxs)("div", {
                              className: (0, b.A)(w, n().Votes),
                              onClick: x,
                              children: [
                                (0, t.jsx)(U.bfp, { className: n().RateIcon }),
                                (0, t.jsx)("div", {
                                  className: n().VoteCount,
                                  children: (0, De.D)(Number(c.nVoteCount)),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: n().QuestionStats,
                        children: (0, t.jsx)("div", {
                          className: n().PostTime,
                          children: (0, t.jsx)(X.gS, {
                            rtFullDate: c.rtPostTime,
                            className: n().PostTime,
                            stylesmodule: n(),
                            children: Q,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.rtAnswerTime && (0, t.jsx)(Le, { question: c, rtNow: l }),
              a &&
                (0, t.jsx)(Ue, {
                  gidSession: e,
                  gidQuestion: s,
                  eState: c?.eState,
                }),
            ],
          });
        }
        function Le(r) {
          const { question: e, rtNow: s } = r,
            a = e.rtAnswerTime && s - e.rtAnswerTime,
            o =
              e.rtAnswerTime &&
              (a < se.Kp.PerDay ? (0, u.Hq)(a) : (0, u._l)(e.rtAnswerTime));
          return e.strAnswerText
            ? (0, t.jsxs)("div", {
                className: n().Answer,
                children: [
                  (0, t.jsxs)("div", {
                    className: n().AnswerTitle,
                    children: [
                      (0, t.jsx)("div", {
                        className: n().AnswerCheck,
                        children: (0, t.jsx)(U.X4B, { color: "#67c1f5" }),
                      }),
                      (0, u.we)("#QAndA_ModeratorAnswerTitle"),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: n().AnswerText,
                    children: [" ", e.strAnswerText, " "],
                  }),
                  (0, t.jsx)("div", {
                    className: n().QuestionStats,
                    children: (0, t.jsx)(X.gS, {
                      rtFullDate: e.rtAnswerTime,
                      className: n().PostTime,
                      stylesmodule: n(),
                      children: o,
                    }),
                  }),
                ],
              })
            : (0, t.jsxs)("div", {
                className: n().AnswerTitle,
                children: [
                  (0, t.jsx)("div", {
                    className: n().AnswerCheck,
                    children: (0, t.jsx)(U.X4B, { color: "#67c1f5" }),
                  }),
                  (0, u.we)("#QAndA_AlreadyAnsweredTitle"),
                ],
              });
        }
        function He(r) {
          const e = CSteamID.InitFromAccountID(r.accountID),
            { data: s } = usePlayerSummary(r.accountID);
          return jsx("div", {
            className: styles.UserAvatar,
            children:
              !!s &&
              jsx("img", {
                src: s.avatar_url,
                "data-miniprofile": "s" + e.ConvertTo64BitString(),
              }),
          });
        }
        function Me(r) {
          const s = ie.b.InitFromAccountID(r.accountID).ConvertTo64BitString(),
            { isLoading: a, data: o } = (0, be.js)(r.accountID);
          return a
            ? null
            : (0, t.jsx)("a", {
                href: o.GetCommunityProfileURL(),
                className: n().PersonaName,
                "data-miniprofile": "s" + s,
                children: o?.m_strPlayerName ?? s,
              });
        }
        function Ue(r) {
          const { gidSession: e, gidQuestion: s, eState: a } = r,
            { fnAnswerQuestion: o, fnModerateQuestion: i } = J(e),
            l = () => i(s, _),
            c = () => i(s, L),
            d = () => o(s, ""),
            p = a == y || a == L,
            Q = a != L,
            x = a == _;
          return (0, t.jsxs)("div", {
            className: n().ModeratorSection,
            children: [
              (0, u.we)("#QAndA_ModeratorLabel"),
              (0, t.jsx)("div", {
                className: n().ToolRow,
                children: (0, t.jsx)(ae, {
                  strPrompt: (0, u.we)("#QAndA_AnswerPrompt"),
                  fnSubmit: (w) => o(s, w),
                }),
              }),
              (0, t.jsxs)("div", {
                className: n().ToolRow,
                children: [
                  (0, u.we)("#QAndA_ModeratorOtherOptionsLabel"),
                  (0, t.jsx)(R.he, {
                    toolTipContent: (0, u.we)(
                      "#QAndA_ModerateApproveButton_ttip",
                    ),
                    children: (0, t.jsx)(v.$n, {
                      onClick: l,
                      className: n().InputButton,
                      disabled: !p,
                      children: (0, u.we)("#QAndA_ModerateApproveButton"),
                    }),
                  }),
                  (0, t.jsx)(R.he, {
                    toolTipContent: (0, u.we)("#QAndA_ModerateHideButton_ttip"),
                    children: (0, t.jsx)(v.$n, {
                      onClick: c,
                      className: n().InputButton,
                      disabled: !Q,
                      children: (0, u.we)("#QAndA_ModerateHideButton"),
                    }),
                  }),
                  (0, t.jsx)(R.he, {
                    toolTipContent: (0, u.we)("#QAndA_QuickAnswerButton_ttip"),
                    children: (0, t.jsx)(v.$n, {
                      onClick: d,
                      className: n().InputButton,
                      disabled: !x,
                      children: (0, u.we)("#QAndA_QuickAnswerButton"),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Re(r) {
          const { gidSession: e } = r;
          Y();
          const { strName: s, bUserCanModerate: a } = E(e);
          return (0, t.jsxs)("div", {
            className: n().QAFullPageView,
            children: [
              (0, t.jsx)("div", {
                className: n().QAName,
                children:
                  (0, u.we)("#QAndA_Header") + (s?.length > 0 ? ": " + s : ""),
              }),
              (0, t.jsxs)("div", {
                className: n().QAColumns,
                children: [
                  (0, t.jsx)(oe, { gidSession: e, bHalfOfFullPage: a }),
                  a && (0, t.jsx)(ke, { gidSession: e }),
                ],
              }),
            ],
          });
        }
        function ke(r) {
          const { gidSession: e } = r,
            {
              bUserCanModerate: s,
              rgNewQuestionGIDs: a,
              rgHiddenQuestionGIDs: o,
            } = E(e),
            i = (0, O.P_)(10);
          return s
            ? (0, t.jsxs)("div", {
                className: (0, b.A)(n().QAModeratorColumn, n().QASplitColumns),
                children: [
                  (0, t.jsx)(te.qx, {
                    title: (0, u.we)("#QAndA_ModeratorViewHeader"),
                    className: n().ModeratorInstructions,
                    children: (0, t.jsx)("div", {
                      className: n().QuestionList,
                      children: a.map((l) =>
                        (0, t.jsx)(
                          H,
                          {
                            gidSession: e,
                            gidQuestion: l,
                            bUserCanModerate: s,
                            bUserCanVote: !1,
                            rtNow: i,
                          },
                          l,
                        ),
                      ),
                    }),
                  }),
                  (0, t.jsx)(te.qx, {
                    title: (0, u.we)("#QAndA_HiddenQuestionsHeader"),
                    className: n().AnsweredSectionHeader,
                    bStartMinimized: !0,
                    children: (0, t.jsx)("div", {
                      className: n().QuestionList,
                      children: o.map((l) =>
                        (0, t.jsx)(
                          H,
                          {
                            gidSession: e,
                            gidQuestion: l,
                            bUserCanModerate: s,
                            bUserCanVote: !1,
                            rtNow: i,
                          },
                          l,
                        ),
                      ),
                    }),
                  }),
                ],
              })
            : null;
        }
        function oe(r) {
          const { gidSession: e, bHalfOfFullPage: s } = r;
          Y();
          const {
              bIsLoaded: a,
              bUserCanAskQuestions: o,
              bUserCanModerate: i,
              fnAskQuestion: l,
              fnVoteOnQuestion: c,
              rgModeratedQuestionGIDs: d,
              rgAnsweredQuestionGIDs: p,
              rgNewQuestionGIDs: Q,
            } = E(e),
            { fnReload: x, bIsReloading: w } = Qe(e),
            D = (0, O.P_)(10),
            N = i && s,
            { fnModerateQuestion: I } = J(e),
            M = async () => {
              for (const g of [Q, d, p]) for (const S of g) await I(S, L);
            };
          return (0, t.jsxs)("div", {
            className: (0, b.A)(n().QAMainCtn, s && n().QASplitColumns),
            children: [
              (0, t.jsxs)("div", {
                className: (0, b.A)(n().QAHeader, N && n().ModerationHeader),
                children: [
                  (0, t.jsx)(v.$n, {
                    onClick: x,
                    disabled: !a,
                    className: (0, b.A)(
                      n().InputButton,
                      n().Reload,
                      w && n().Reloading,
                    ),
                    children: (0, t.jsx)("div", {
                      className: n().ReloadIcon,
                      children: (0, t.jsx)(U.MvQ, {}),
                    }),
                  }),
                  N
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, u.we)("#QAndA_ModeratorLabelHeader"),
                          (0, t.jsx)(R.he, {
                            toolTipContent: (0, u.we)(
                              "#QAndA_ModerateHideAllButton_ttip",
                            ),
                            children: (0, t.jsx)(v.$n, {
                              onClick: M,
                              className: n().InputButton,
                              children: (0, u.we)(
                                "#QAndA_ModerateHideAllButton",
                              ),
                            }),
                          }),
                        ],
                      })
                    : o
                      ? (0, t.jsx)(Be, { fnAskQuestion: l })
                      : a && (0, t.jsx)(Pe, {}),
                ],
              }),
              d.length + p.length == 0
                ? (0, t.jsx)("div", {
                    className: n().NoQuestions,
                    children: (0, u.we)("#QAndA_NoQuestionsYet"),
                  })
                : (0, t.jsxs)("div", {
                    className: n().QuestionsCtn,
                    children: [
                      (0, t.jsx)("div", {
                        className: n().InsetShadowTopCtn,
                        children: (0, t.jsx)("div", {
                          className: n().InsetShadowTop,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: n().QuestionList,
                        children: a
                          ? d.map((g) =>
                              (0, t.jsx)(
                                H,
                                {
                                  gidSession: e,
                                  gidQuestion: g,
                                  bUserCanModerate: N,
                                  bUserCanVote: o,
                                  fnVoteOnQuestion: c,
                                  rtNow: D,
                                },
                                g,
                              ),
                            )
                          : (0, t.jsx)(ee.t, { position: "center" }),
                      }),
                      p.length > 0 &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)("div", {
                              className: n().AnsweredSectionHeader,
                              children: (0, u.we)(
                                "#QAndA_AnsweredQuestionsHeader",
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: n().QuestionList,
                              children: p.map((g) =>
                                (0, t.jsx)(
                                  H,
                                  {
                                    gidSession: e,
                                    gidQuestion: g,
                                    bUserCanModerate: N,
                                    bUserCanVote: o,
                                    fnVoteOnQuestion: c,
                                    rtNow: D,
                                  },
                                  g,
                                ),
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
            ],
          });
        }
        function Be(r) {
          const [e, s] = C.useState(!1),
            a = (0, G.m)("QuestionBox"),
            o = async (i) => {
              const l = await r.fnAskQuestion(i);
              return (
                l == A.R &&
                  !a.token.reason &&
                  (s(!0),
                  window.setTimeout(() => {
                    a.token.reason || s(!1);
                  }, 1e3)),
                l
              );
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: n().Description,
                children: (0, u.we)("#QAndA_HeaderDescription"),
              }),
              (0, t.jsx)(ae, {
                strPrompt: (0, u.we)("#QAndA_QuestionPrompt"),
                fnSubmit: o,
              }),
              (0, t.jsx)("div", {
                className: (0, b.A)(n().QuestionACK, e && n().Visible),
                children: (0, u.we)("#QAndA_QuestionWasPosted"),
              }),
            ],
          });
        }
        function ae(r) {
          const { strPrompt: e, fnSubmit: s } = r,
            [a, o] = C.useState(""),
            [i, l] = C.useState(!1),
            c = async () => {
              l(!0), (await s(a)) == A.R && o(""), l(!1);
            };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className: n().InputCtn,
              children: [
                (0, t.jsx)(v.pd, {
                  type: "text",
                  placeholder: e,
                  maxLength: 512,
                  value: a,
                  onChange: (d) => o(d.target.value),
                }),
                (0, t.jsxs)("div", {
                  className: n().ButtonCtn,
                  children: [
                    i &&
                      (0, t.jsx)("div", {
                        className: n().SaveSpinner,
                        children: (0, t.jsx)(ee.t, {
                          size: "small",
                          position: "center",
                        }),
                      }),
                    (0, t.jsx)(v.$n, {
                      onClick: c,
                      disabled: i || !a,
                      className: n().InputButton,
                      children: (0, u.we)("#QAndA_SubmitCommentButton"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Pe(r) {
          return (0, t.jsxs)("div", {
            className: n().Description,
            children: [
              (0, t.jsx)("div", {
                className: n().LogInPrompt,
                children: (0, u.we)("#QAndA_LogInPrompt"),
              }),
              !m.iA.logged_in &&
                (0, t.jsx)(v.$n, {
                  onClick: we.vg,
                  className: (0, b.A)(n().SignInButton, n().InputButton),
                  children: (0, u.we)("#Login_SignIn"),
                }),
            ],
          });
        }
      },
      76048: (q) => {
        q.exports = {
          QAFullPageView: "_3tZpFqpGKrksArepdxSE5j",
          QAName: "_2mOBpH-Q1B2CGYjpyVcZvL",
          QAColumns: "pBgAbPu5S77EkhwULNJMQ",
          QAMainCtn: "hHqRc8tmJX5DmOC_J9OSu",
          QAModeratorColumn: "nfftCsjuFUxqo7oht5ZvS",
          QASplitColumns: "_1CRIgUwMI8-DV8bby3TWQb",
          ModeratorInstructions: "RqtnW1y7dqFHzNYQgEXMn",
          AnsweredSectionHeader: "_3cWpkis2Mqzl8A8xF-a9em",
          InputButton: "_1z1rtA-m0g-2LV2Vt1oofr",
          Reload: "_3LIo4Gupf-bEyoN38m0xLy",
          Reloading: "_1hooLg2kfnpqXDhLgPG6gH",
          SignInButton: "GRHnXc4HVJuz6yC7Gkr5k",
          QAHeader: "_3skHmzAqxcsZBq_tkNXLzN",
          QuestionACK: "_16zhk22TxzqPMUoz7I3WEB",
          Visible: "_2jHMeCl9ijq2--JlPwQ6Fz",
          QATitleRow: "_2qdcmBnuOzyLEABfqaT8qv",
          QATitle: "_1c7nCnSMqU4Ukz3wdWSqXF",
          Description: "_3eGNNYyxMkZO39myQDE1XE",
          InputCtn: "oF1kTvqJ3SFh3lHuR5ZHs",
          LogInPrompt: "_3Gbueor3CAgrLqcm5BgjPx",
          ButtonCtn: "_3kFHrlDJDcAvIcJq4lX8lD",
          SaveSpinner: "_20svvC9NhGF5A1hTD-y9kJ",
          QuestionsCtn: "_1W6uJMpV-79gv8A662-iKM",
          InsetShadowTopCtn: "ak9JV2IB-GQLWSc_4GpKB",
          InsetShadowTop: "_1C2e4GaJWY9UCfxJeu3Ifp",
          QuestionsHeader: "jUQG923rSCGTIp6iR40rb",
          QuestionsTitle: "_2CYLB3xFHbAEJS6Z-bSlKz",
          QuestionList: "_28dwOiBG4CQlQcXClFrN9K",
          NoQuestions: "_1R9HBMmOpYYYhZwQh1m5U1",
          Question: "_3BIOouufQgR-V7ivTXLZAm",
          Hidden: "_3XPCkzLM8mFswGMcSCywUA",
          QuestionCtn: "_31sLydaeDe38gXM5axlD9O",
          UserAvatar: "_2ojKekaqQWNpGw8G3x8l_r",
          PersonaName: "_3CaA53te3MV1l4rP0TmdB9",
          QuestionText: "_2NuCE315-vCtCSzxcT1qEm",
          QuestionAndVotes: "ChywOlxnWN_3W_lql2DeN",
          QuestionTitle: "_2AXcHkyp6G5iqdDfTZiwAg",
          QuestionStats: "_1DzgV6zsHS23fEBSvckX88",
          PostTime: "_2hfBugBzm8yU7a82qW2cHx",
          Votes: "_2IyuQJGwbrnTb3a7m8KsZ9",
          Vote_Ready: "_3_8_aVxn-PwduHvKlx36tI",
          Vote_Positive: "eWDCyQ-vvgH6BcvF4_o_e",
          RateIcon: "_2j0GwqqS7RK_-mNPfvuX0f",
          Vote_CannotVote: "_2Pq4zAswQX0s4q5BmDOcoK",
          DateAndTime: "_4VjnZ9DL9exM7YcbLbSh",
          Answer: "wNABP6_Qx7yRFrLkXK41M",
          AnswerTitle: "_1c4moP5DV4s2TT8XzHbSDw",
          AnswerCheck: "u8uV8ZaFofO6c9D42VGY2",
          AnswerText: "_3ar8cNQn3f1-OIjiWPPitA",
          ModerationHeader: "_37OKcYRfuIkylm4nu1umCb",
          ModeratorSection: "_3tP54OFg61u8qq9vrI1GA2",
          ToolRow: "_2c2voljR8QU6ly18xBe9Zx",
          ToolLabel: "_3prTNENecqxmB7UBSWgUyl",
          QADashboardCtn: "_32zJGAGkfjaRrwwUDmbx_Y",
          DashboardHeader: "_1R1EmLdoSBJK82hy_FSG9G",
          DashboardHeaderTitle: "_1cRHaKXhGTjxUnsyLMS0IW",
          DashboardHeaderButtonCtn: "uoLDQx7BVP24M7CtMdUVy",
          DashboardRow: "gpraRkr_GCHPzeFW5wUm7",
          GIDSession: "_3d_6fxEUu5QKFk1X6BmmdU",
          QuestionCount: "_3kZ9Sdx0fxIPNbawZ-iPRU",
          QAndADeleteColumn: "_363MyYnsIHR3suqCkDJb1a",
          QAndAName: "_2-5V8wZPsLM9riXorBMJ1F",
          Prompt: "_2ZFvNUfdh3b32ljUOOm1NB",
          Editing: "_1wUKv_abvHzqvyJg-4E_04",
          NameInput: "_3avr0gEWefqtJlQehAE4CH",
          DeleteButton: "o8aBaeNMu_AdleoGeHA_Z",
          DashboardColumnHeaders: "_2WOM0O_ir8k-lcFjHONR4_",
          CreateQAndADialog: "_1wBzuya0z43LtB3hBPU90I",
          DeleteQAndADialog: "_3valPN89TuPANLrExHyKuc",
          DeleteInfo: "_3EhGHfB3z9uPkO3ZTnwUVm",
        };
      },
    },
  ]);
})();
