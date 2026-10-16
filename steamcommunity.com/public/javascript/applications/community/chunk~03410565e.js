/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [60657],
    {
      67628: (Z, Ce, f) => {
        "use strict";
        f.d(Ce, { xh: () => Fe, AC: () => Ye, u6: () => Ae });
        var t = f(7850),
          C = f(90626),
          v = f(72604),
          pe = f(76559),
          $ = f(7582),
          fe = f(27066),
          E = f(8323),
          V = f(54963),
          ee = Object.defineProperty,
          ge = Object.getOwnPropertyDescriptor,
          _e = (a, e, s) =>
            e in a
              ? ee(a, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (a[e] = s),
          we = (a, e, s, o) => {
            for (
              var r = o > 1 ? void 0 : o ? ge(e, s) : e, i = a.length - 1, l;
              i >= 0;
              i--
            )
              (l = a[i]) && (r = (o ? l(e, s, r) : l(r)) || r);
            return o && r && ee(e, s, r), r;
          },
          q = (a, e, s) => _e(a, typeof e != "symbol" ? e + "" : e, s);
        const te = [
            "mousemove",
            "keypress",
            "scroll",
            "wheel",
            "focusin",
            "touchstart",
            "touchmove",
          ],
          xe = 2e3,
          K = class F {
            constructor() {
              q(this, "m_callbackList", new E.lu()),
                q(this, "m_timer", null),
                q(this, "m_bAreEventListenersRegistered", !1);
            }
            static Get() {
              return F.s_Singleton || (F.s_Singleton = new F()), F.s_Singleton;
            }
            ResetFidgetTimer(e) {
              this.m_timer && window.clearTimeout(this.m_timer);
              const s = () => {
                (this.m_timer = null), this.m_callbackList.Dispatch();
              };
              this.m_timer = window.setTimeout(s, xe);
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
              for (const s of te) e.addEventListener(s, this.ResetFidgetTimer);
              return (this.m_bAreEventListenersRegistered = !0), !0;
            }
            BUnregisterEventListeners() {
              if (!this.m_bAreEventListenersRegistered) return !1;
              const e = window;
              for (const s of te)
                e.removeEventListener(s, this.ResetFidgetTimer);
              return (this.m_bAreEventListenersRegistered = !1), !1;
            }
          };
        q(K, "s_Singleton"), we([fe.o], K.prototype, "ResetFidgetTimer", 1);
        let y = K;
        function se() {
          C.useEffect(() => {
            const a = y.Get().BRegisterEventListeners();
            return () => {
              a && y.Get().BUnregisterEventListeners();
            };
          }, []);
        }
        function be(a) {
          const e = C.useRef(null),
            s = C.useCallback(() => {
              e.current && (e.current(), (e.current = null));
            }, []);
          return (
            (0, V.hL)(y.Get().GetCallbackList(), s),
            C.useEffect(() => () => {
              e.current = null;
            }),
            C.useCallback(
              (...r) => {
                y.Get().BIsUserFidgeting()
                  ? (e.current = () => a(...r))
                  : ((e.current = null), a(...r));
              },
              [a],
            )
          );
        }
        var Ne = f(41735),
          G = f.n(Ne),
          U = f(47689),
          L = f(34592),
          Q = f(3166),
          De = Object.defineProperty,
          Se = (a, e, s) =>
            e in a
              ? De(a, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (a[e] = s),
          R = (a, e, s) => Se(a, typeof e != "symbol" ? e + "" : e, s);
        const z = 0,
          M = 1,
          ne = 2,
          k = 3,
          tt = 4,
          oe = class H {
            constructor() {
              R(this, "m_mapQAndASessions", new Map()),
                R(this, "m_mapQAndAChangeCallbackList", new Map()),
                R(this, "m_dashboardCallbackList", new E.lu()),
                R(this, "m_mapQuestions", new Map()),
                R(this, "m_mapQuestionCallbackList", new Map()),
                R(this, "m_rgPendingQuestionGIDs", []);
            }
            static Get() {
              return H.s_Singleton || (H.s_Singleton = new H()), H.s_Singleton;
            }
            GetQAndACallbackList(e) {
              return (
                this.m_mapQAndAChangeCallbackList.has(e) ||
                  this.m_mapQAndAChangeCallbackList.set(e, new E.lu()),
                this.m_mapQAndAChangeCallbackList.get(e)
              );
            }
            GetQuestionCallbackList(e) {
              return (
                this.m_mapQuestionCallbackList.has(e) ||
                  this.m_mapQuestionCallbackList.set(e, new E.lu()),
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
              var s, o, r, i;
              if (!Q.iA.logged_in || !(0, Q.KC)()) return v.sW;
              const l =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  "/ajaxgetqandasforgroup",
                m = {};
              let u = null;
              try {
                const c = await G().get(l, {
                  params: m,
                  cancelToken: e == null ? void 0 : e.token,
                });
                if (
                  (console.log(c),
                  (c == null ? void 0 : c.status) == 200 &&
                    ((s = c.data) == null ? void 0 : s.success) == v.R &&
                    c.data.qandas)
                ) {
                  for (const d of c.data.qandas)
                    this.m_mapQAndASessions.set(d.gidSession, d);
                  return (
                    this.m_dashboardCallbackList.Dispatch(
                      this.GetAllSessions(),
                    ),
                    v.R
                  );
                }
                u = { response: c };
              } catch (c) {
                u = c;
              }
              const A = (0, L.H)(u);
              return (
                console.error(
                  "Could not load question and answer sessions for group",
                  A.strErrorMsg,
                  A,
                ),
                (i =
                  (r =
                    (o = u == null ? void 0 : u.response) == null
                      ? void 0
                      : o.data) == null
                    ? void 0
                    : r.success) != null
                  ? i
                  : v.zi
              );
            }
            async CreateNewSession(e, s) {
              var o, r, i, l;
              if (!Q.iA.logged_in || !(0, Q.KC)()) return v.sW;
              const m =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  "/ajaxcreateqanda",
                u = new FormData();
              u.append("sessionid", (0, Q.KC)()), u.append("name", e);
              let A = null;
              try {
                const d = await G().post(m, u, {
                  withCredentials: !0,
                  cancelToken: s == null ? void 0 : s.token,
                });
                if (
                  (d == null ? void 0 : d.status) == 200 &&
                  ((o = d.data) == null ? void 0 : o.success) == v.R &&
                  d.data.qanda
                )
                  return (
                    this.m_mapQAndASessions.set(
                      d.data.qanda.gidSession,
                      d.data.qanda,
                    ),
                    this.m_dashboardCallbackList.Dispatch(
                      this.GetAllSessions(),
                    ),
                    v.R
                  );
                A = { response: d };
              } catch (d) {
                A = d;
              }
              const c = (0, L.H)(A);
              return (
                console.error("Could not create Q&A", e, c.strErrorMsg, c),
                (l =
                  (i =
                    (r = A == null ? void 0 : A.response) == null
                      ? void 0
                      : r.data) == null
                    ? void 0
                    : i.success) != null
                  ? l
                  : v.zi
              );
            }
            async RenameSession(e, s, o) {
              var r, i, l, m;
              if (!Q.iA.logged_in || !(0, Q.KC)()) return v.sW;
              const u =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  "/ajaxrenameqanda/" +
                  e,
                A = new FormData();
              A.append("sessionid", (0, Q.KC)()), A.append("name", s);
              let c = null;
              try {
                const p = await G().post(u, A, {
                  withCredentials: !0,
                  cancelToken: o == null ? void 0 : o.token,
                });
                if (
                  (p == null ? void 0 : p.status) == 200 &&
                  ((r = p.data) == null ? void 0 : r.success) == v.R
                )
                  return (
                    (this.m_mapQAndASessions.get(e).strName = s),
                    this.GetQAndACallbackList(e).Dispatch(
                      this.m_mapQAndASessions.get(e),
                    ),
                    this.m_dashboardCallbackList.Dispatch(
                      this.GetAllSessions(),
                    ),
                    v.R
                  );
                c = { response: p };
              } catch (p) {
                c = p;
              }
              const d = (0, L.H)(c);
              return (
                console.error("Could not rename Q&A", e, s, d.strErrorMsg, d),
                (m =
                  (l =
                    (i = c == null ? void 0 : c.response) == null
                      ? void 0
                      : i.data) == null
                    ? void 0
                    : l.success) != null
                  ? m
                  : v.zi
              );
            }
            async DeleteSession(e, s) {
              var o, r, i, l;
              if (!Q.iA.logged_in || !(0, Q.KC)()) return v.sW;
              const m =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  "/ajaxdeleteqanda/" +
                  e,
                u = new FormData();
              u.append("sessionid", (0, Q.KC)());
              let A = null;
              try {
                const d = await G().post(m, u, {
                  withCredentials: !0,
                  cancelToken: s == null ? void 0 : s.token,
                });
                if (
                  (d == null ? void 0 : d.status) == 200 &&
                  ((o = d.data) == null ? void 0 : o.success) == v.R
                )
                  return (
                    this.m_mapQAndASessions.delete(e),
                    this.m_dashboardCallbackList.Dispatch(
                      this.GetAllSessions(),
                    ),
                    v.R
                  );
                A = { response: d };
              } catch (d) {
                A = d;
              }
              const c = (0, L.H)(A);
              return (
                console.error("Could not delete Q&A", e, c.strErrorMsg, c),
                (l =
                  (i =
                    (r = A == null ? void 0 : A.response) == null
                      ? void 0
                      : r.data) == null
                    ? void 0
                    : i.success) != null
                  ? l
                  : v.zi
              );
            }
            async LoadSession(e, s, o) {
              var r, i, l, m, u, A, c, d, p, _;
              const x =
                  Q.iA.logged_in &&
                  (!this.m_mapQAndASessions.has(e) ||
                    this.m_mapQAndASessions.get(e).bUserCanModerate ||
                    this.m_rgPendingQuestionGIDs.length > 0 ||
                    s)
                    ? "/ajaxgetqandasessionforuser/"
                    : "/ajaxgetqandasession/",
                I =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  x +
                  e,
                N = {};
              let b = null;
              try {
                const S = await G().get(I, {
                  params: N,
                  cancelToken: o == null ? void 0 : o.token,
                });
                if (
                  (S == null ? void 0 : S.status) == 200 &&
                  ((r = S.data) == null ? void 0 : r.success) == v.R &&
                  S.data.qanda &&
                  S.data.questions
                ) {
                  for (const J of S.data.questions) {
                    const X = J.gidQuestion,
                      et =
                        (l =
                          (i = this.m_mapQuestions.get(X)) == null
                            ? void 0
                            : i.bUserUpVoted) != null
                          ? l
                          : J.bUserUpVoted,
                      ve = { ...J, bUserUpVoted: et };
                    this.m_mapQuestions.set(X, ve),
                      this.GetQuestionCallbackList(X).Dispatch(ve);
                  }
                  const Ze =
                      (u =
                        (m = this.m_mapQAndASessions.get(e)) == null
                          ? void 0
                          : m.bUserCanModerate) != null
                        ? u
                        : S.data.qanda.bUserCanModerate,
                    $e =
                      (c =
                        (A = this.m_mapQAndASessions.get(e)) == null
                          ? void 0
                          : A.bUserCanAskQuestions) != null
                        ? c
                        : S.data.qanda.bUserCanAskQuestions,
                    Qe = {
                      ...S.data.qanda,
                      bUserCanModerate: Ze,
                      bUserCanAskQuestions: $e,
                    };
                  return (
                    this.m_mapQAndASessions.set(e, Qe),
                    this.GetQAndACallbackList(e).Dispatch(Qe),
                    this.UpdatePendingQuestionList(S.data.qanda.rgQuestionGIDs),
                    v.R
                  );
                }
                b = { response: S };
              } catch (S) {
                b = S;
              }
              const D = (0, L.H)(b);
              return (
                console.error("Could not load Q&A", e, D.strErrorMsg, D),
                (_ =
                  (p =
                    (d = b == null ? void 0 : b.response) == null
                      ? void 0
                      : d.data) == null
                    ? void 0
                    : p.success) != null
                  ? _
                  : v.zi
              );
            }
            UpdatePendingQuestionList(e) {
              var s;
              const o = new Set();
              for (const r of e) {
                const i = this.m_mapQuestions.get(r);
                i.posterAccountID == Q.iA.accountid &&
                  i.eState == M &&
                  o.add(i.gidQuestion);
              }
              if (this.m_rgPendingQuestionGIDs.length > 0) {
                const r = new Set(e);
                for (const i of this.m_rgPendingQuestionGIDs)
                  r.has(i) &&
                    ((s = this.m_mapQuestions.get(i)) == null
                      ? void 0
                      : s.eState) == M &&
                    o.add(i);
              }
              this.m_rgPendingQuestionGIDs = Array.from(o);
            }
            async AskNewQuestion(e, s, o) {
              var r, i, l, m, u;
              if (
                !Q.iA.logged_in ||
                !(0, Q.KC)() ||
                !(
                  (r = this.m_mapQAndASessions.get(e)) != null &&
                  r.bUserCanAskQuestions
                )
              )
                return v.sW;
              const A =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  "/ajaxaskquestion/" +
                  e,
                c = new FormData();
              c.append("sessionid", (0, Q.KC)()), c.append("question", s);
              let d = null;
              try {
                const _ = await G().post(A, c, {
                  withCredentials: !0,
                  cancelToken: o == null ? void 0 : o.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((i = _.data) == null ? void 0 : i.success) == v.R
                )
                  return (
                    this.m_rgPendingQuestionGIDs.push(_.data.gidQuestion),
                    this.LoadSession(e, !0, o),
                    v.R
                  );
                d = { response: _ };
              } catch (_) {
                d = _;
              }
              const p = (0, L.H)(d);
              return (
                console.error(
                  "Could not upload question",
                  e,
                  s,
                  p.strErrorMsg,
                  p,
                ),
                (u =
                  (m =
                    (l = d == null ? void 0 : d.response) == null
                      ? void 0
                      : l.data) == null
                    ? void 0
                    : m.success) != null
                  ? u
                  : v.zi
              );
            }
            async ModerateQuestion(e, s, o, r) {
              var i, l, m, u, A;
              if (
                !Q.iA.logged_in ||
                !(0, Q.KC)() ||
                !(
                  (i = this.m_mapQAndASessions.get(e)) != null &&
                  i.bUserCanModerate
                )
              )
                return v.sW;
              if (o != M && o != k) return v.nO;
              if (this.m_mapQuestions.get(s).eState == o) return v.R;
              const d =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  "/ajaxmoderatequestion/" +
                  e,
                p = new FormData();
              p.append("sessionid", (0, Q.KC)()),
                p.append("gidquestion", s),
                p.append("action", o == M ? "show" : "hide");
              let _ = null;
              try {
                const x = await G().post(d, p, {
                  withCredentials: !0,
                  cancelToken: r == null ? void 0 : r.token,
                });
                if (
                  (x == null ? void 0 : x.status) == 200 &&
                  ((l = x.data) == null ? void 0 : l.success) == v.R
                )
                  return this.LoadSession(e, !0, r), v.R;
                _ = { response: x };
              } catch (x) {
                _ = x;
              }
              const w = (0, L.H)(_);
              return (
                console.error(
                  "Could not moderate question",
                  e,
                  s,
                  o,
                  w.strErrorMsg,
                  w,
                ),
                (A =
                  (u =
                    (m = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : m.data) == null
                    ? void 0
                    : u.success) != null
                  ? A
                  : v.zi
              );
            }
            async AnswerQuestion(e, s, o, r) {
              var i, l, m, u, A;
              if (
                !Q.iA.logged_in ||
                !(0, Q.KC)() ||
                !(
                  (i = this.m_mapQAndASessions.get(e)) != null &&
                  i.bUserCanAskQuestions
                )
              )
                return v.sW;
              const c =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  "/ajaxanswerquestion/" +
                  e,
                d = new FormData();
              d.append("sessionid", (0, Q.KC)()),
                d.append("gidquestion", s),
                d.append("answer", o);
              let p = null;
              try {
                const w = await G().post(c, d, {
                  withCredentials: !0,
                  cancelToken: r == null ? void 0 : r.token,
                });
                if (
                  (w == null ? void 0 : w.status) == 200 &&
                  ((l = w.data) == null ? void 0 : l.success) == v.R
                )
                  return this.LoadSession(e, !0, r), v.R;
                p = { response: w };
              } catch (w) {
                p = w;
              }
              const _ = (0, L.H)(p);
              return (
                console.error(
                  "Could not upload answer",
                  e,
                  s,
                  o,
                  _.strErrorMsg,
                  _,
                ),
                (A =
                  (u =
                    (m = p == null ? void 0 : p.response) == null
                      ? void 0
                      : m.data) == null
                    ? void 0
                    : u.success) != null
                  ? A
                  : v.zi
              );
            }
            async VoteOnQuestion(e, s, o, r) {
              var i, l, m, u, A;
              if (
                !Q.iA.logged_in ||
                !(0, Q.KC)() ||
                !(
                  (i = this.m_mapQAndASessions.get(e)) != null &&
                  i.bUserCanAskQuestions
                )
              )
                return v.sW;
              if (o === this.m_mapQuestions.get(s).bUserUpVoted) return v.R;
              let c = this.m_mapQuestions.get(s);
              const d = c.nVoteCount,
                p = d + (o ? 1 : -1);
              (c = { ...c, nVoteCount: p, bUserUpVoted: o }),
                this.m_mapQuestions.set(s, c),
                this.GetQuestionCallbackList(s).Dispatch(c);
              const _ =
                  Q.TS.COMMUNITY_BASE_URL +
                  "questions/" +
                  Q.UF.VANITY_ID +
                  "/ajaxvoteforquestion/" +
                  e,
                w = new FormData();
              w.append("sessionid", (0, Q.KC)()),
                w.append("gidquestion", s),
                w.append("up", o ? "1" : "0");
              let x = null;
              try {
                const N = await G().post(_, w, {
                  withCredentials: !0,
                  cancelToken: r == null ? void 0 : r.token,
                });
                if (
                  (N == null ? void 0 : N.status) == 200 &&
                  ((l = N.data) == null ? void 0 : l.success) == v.R
                )
                  return v.R;
                x = { response: N };
              } catch (N) {
                x = N;
              }
              (c = { ...c, nVoteCount: d, bUserUpVoted: !o }),
                this.m_mapQuestions.set(s, c),
                this.GetQuestionCallbackList(s).Dispatch(c);
              const I = (0, L.H)(x);
              return (
                console.error(
                  "Could not upload vote",
                  e,
                  s,
                  o,
                  I.strErrorMsg,
                  I,
                ),
                (A =
                  (u =
                    (m = x == null ? void 0 : x.response) == null
                      ? void 0
                      : m.data) == null
                    ? void 0
                    : u.success) != null
                  ? A
                  : v.zi
              );
            }
          };
        R(oe, "s_Singleton");
        let g = oe;
        function Y(a) {
          const e = (0, U.m)("useQAndASession"),
            s = C.useCallback(
              async (u) => {
                var A;
                return (
                  ((A = g.Get().GetSession(a)) == null
                    ? void 0
                    : A.bUserCanAskQuestions) &&
                  (await g.Get().AskNewQuestion(a, u, e))
                );
              },
              [a, e],
            ),
            o = C.useCallback(
              (u, A) => {
                var c;
                return (
                  ((c = g.Get().GetSession(a)) == null
                    ? void 0
                    : c.bUserCanAskQuestions) &&
                  g.Get().VoteOnQuestion(a, u, A, e)
                );
              },
              [a, e],
            ),
            r = C.useCallback(
              (u) => {
                var A;
                const c = !!u,
                  d = u == null ? void 0 : u.strName,
                  p = u == null ? void 0 : u.bUserCanModerate,
                  _ = u == null ? void 0 : u.bUserCanAskQuestions,
                  w = [],
                  x = [],
                  I = [],
                  N = [];
                for (const b of (A = u == null ? void 0 : u.rgQuestionGIDs) !=
                null
                  ? A
                  : []) {
                  const D = g.Get().GetQuestion(b);
                  switch (D == null ? void 0 : D.eState) {
                    case M:
                      w.push(b);
                      break;
                    case ne:
                      x.push(b);
                      break;
                    case z:
                      I.push(b);
                      break;
                    case k:
                      N.push(b);
                      break;
                  }
                }
                return (
                  w.sort(
                    (b, D) =>
                      g.Get().GetQuestion(D).nVoteCount -
                      g.Get().GetQuestion(b).nVoteCount,
                  ),
                  x.sort(
                    (b, D) =>
                      g.Get().GetQuestion(D).rtAnswerTime -
                      g.Get().GetQuestion(b).rtAnswerTime,
                  ),
                  I.sort(
                    (b, D) =>
                      g.Get().GetQuestion(D).rtPostTime -
                      g.Get().GetQuestion(b).rtPostTime,
                  ),
                  N.sort(
                    (b, D) =>
                      g.Get().GetQuestion(D).rtPostTime -
                      g.Get().GetQuestion(b).rtPostTime,
                  ),
                  {
                    bIsLoaded: c,
                    strName: d,
                    bUserCanModerate: p,
                    bUserCanAskQuestions: _,
                    fnAskQuestion: s,
                    fnVoteOnQuestion: o,
                    rgModeratedQuestionGIDs: w,
                    rgAnsweredQuestionGIDs: x,
                    rgNewQuestionGIDs: I,
                    rgHiddenQuestionGIDs: N,
                  }
                );
              },
              [s, o],
            ),
            [i, l] = C.useState(() => r(g.Get().GetSession(a))),
            m = C.useCallback((u) => l(r(u)), [r]);
          return (
            (0, V.hL)(g.Get().GetQAndACallbackList(a), m),
            C.useEffect(() => {
              i.bIsLoaded || g.Get().LoadSession(a);
            }, [i.bIsLoaded, a]),
            i
          );
        }
        let W = null;
        function je(a) {
          const e = (0, U.m)("useReloadFunction"),
            [s, o] = C.useState(!1),
            r = C.useCallback(() => {
              o(!0);
              const l = g.Get().LoadSession(a, !1, e);
              return l.then(() => o(!1)), l;
            }, [a, e]),
            i = be(r);
          return (
            C.useEffect(
              () =>
                W
                  ? () => {}
                  : ((W = window.setInterval(i, 1e4)),
                    () => window.clearInterval(W)),
              [i],
            ),
            C.useMemo(() => ({ fnReload: r, bIsReloading: s }), [r, s])
          );
        }
        function Te(a) {
          const [e, s] = C.useState(g.Get().GetQuestion(a));
          (0, V.hL)(g.Get().GetQuestionCallbackList(a), s);
          const [o, r] = C.useState(!!e);
          return [e, !!e || o];
        }
        function ae(a) {
          const e = (0, U.m)("useQuestionModeratorActions"),
            s = C.useCallback(
              (r, i) => {
                var l;
                return (
                  ((l = g.Get().GetSession(a)) == null
                    ? void 0
                    : l.bUserCanModerate) && g.Get().AnswerQuestion(a, r, i, e)
                );
              },
              [a, e],
            ),
            o = C.useCallback(
              (r, i) => {
                var l;
                return (
                  ((l = g.Get().GetSession(a)) == null
                    ? void 0
                    : l.bUserCanModerate) &&
                  g.Get().ModerateQuestion(a, r, i, e)
                );
              },
              [a, e],
            );
          return C.useMemo(
            () => ({ fnAnswerQuestion: s, fnModerateQuestion: o }),
            [s, o],
          );
        }
        function Ie() {
          const [a, e] = C.useState(g.Get().GetAllSessions());
          return (
            (0, V.hL)(g.Get().GetDashboardCallbackList(), e),
            C.useEffect(() => {
              a.length == 0 && g.Get().LoadAllSessions();
            }, [a.length]),
            a
          );
        }
        function Ge() {
          const a = (0, U.m)("useCreateQAndAFn");
          return C.useCallback((e) => g.Get().CreateNewSession(e, a), [a]);
        }
        function Le() {
          const a = (0, U.m)("useRenameQAndAFn");
          return C.useCallback((e, s) => g.Get().RenameSession(e, s, a), [a]);
        }
        function Me() {
          const a = (0, U.m)("useDeleteQAndAFn");
          return C.useCallback((e) => g.Get().DeleteSession(e, a), [a]);
        }
        var j = f(19316),
          Ue = f(86390),
          re = f(18057),
          ie = f(2801),
          le = f(88003),
          P = f(36118),
          de = f(85599),
          B = f(71421),
          ue = f(12932),
          T = f(36707),
          h = f(18210),
          Re = f(48473),
          ce = f(36174),
          ke = f(76048),
          n = f.n(ke),
          Pe = f(35098),
          Be = f(24642);
        function Fe(a) {
          const e = Ie();
          return (0, t.jsxs)("div", {
            className: n().QADashboardCtn,
            children: [
              (0, t.jsx)(He, {}),
              (0, t.jsxs)("div", {
                className: (0, T.A)(
                  n().DashboardRow,
                  n().DashboardColumnHeaders,
                ),
                children: [
                  (0, t.jsx)("div", {
                    className: n().QAndAName,
                    children: (0, h.we)("#QAndA_Column_Name"),
                  }),
                  (0, t.jsx)("div", {
                    className: n().GIDSession,
                    children: (0, h.we)("#QAndA_Column_GID"),
                  }),
                  (0, t.jsx)("div", {
                    className: n().QuestionCount,
                    children: (0, h.we)("#QAndA_Column_QuestionCount"),
                  }),
                  (0, t.jsx)("div", {
                    className: n().QAndADeleteColumn,
                    children: (0, h.we)("#QAndA_Column_DeleteButtons"),
                  }),
                ],
              }),
              e.map((s) => (0, t.jsx)(Ve, { qanda: s }, s.gidSession)),
            ],
          });
        }
        function He(a) {
          const e = C.useCallback(
            () =>
              (0, le.mK)((0, t.jsx)(Ee, {}), window, {
                strTitle: (0, h.we)("#QAndA_CreateQAndA_Title"),
              }),
            [],
          );
          return (0, t.jsxs)("div", {
            className: n().DashboardHeader,
            children: [
              (0, t.jsx)("div", {
                className: n().DashboardHeaderTitle,
                children: (0, h.we)("#QAndA_Dashboard"),
              }),
              (0, t.jsx)("div", {
                className: n().DashboardHeaderButtonCtn,
                children: (0, t.jsx)(j.$n, {
                  onClick: e,
                  children: (0, h.we)("#QAndA_CreateQAndA_Button"),
                }),
              }),
            ],
          });
        }
        const me = 120;
        function Ee(a) {
          const e = Ge(),
            [s, o] = C.useState("");
          return (0, t.jsx)(ie.o0, {
            strTitle: (0, h.we)("#QAndA_CreateQAndA_Title"),
            strDescription: (0, h.we)("#QAndA_CreateQAndA_Instructions"),
            strOKButtonText: (0, h.we)("#Button_Create"),
            onOK: () => e(s),
            bOKDisabled: s.length == 0,
            closeModal: a.closeModal,
            className: n().CreateQAndADialog,
            children: (0, t.jsx)(j.pd, {
              type: "text",
              className: n().NameInput,
              value: s,
              placeholder: (0, h.we)("#QAndA_EnterNamePrompt"),
              onFocus: (r) => r.target.select(),
              onChange: (r) => o(r.currentTarget.value),
              maxLength: me,
            }),
          });
        }
        function Ve(a) {
          const { qanda: e } = a,
            s =
              Q.TS.COMMUNITY_BASE_URL +
              "questions/" +
              Q.UF.VANITY_ID +
              "/view/" +
              e.gidSession,
            o = C.useCallback(
              (r) => {
                r.stopPropagation(),
                  r.preventDefault(),
                  (0, le.mK)((0, t.jsx)(ye, { qanda: e }), window, {
                    strTitle: (0, h.we)("#QAndA_CreateQAndA_Title"),
                  });
              },
              [e],
            );
          return (0, t.jsxs)("a", {
            className: n().DashboardRow,
            href: s,
            children: [
              (0, t.jsx)(qe, { qanda: e }),
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
                  onClick: o,
                  children: (0, t.jsx)(P.lMJ, {}),
                }),
              }),
            ],
          });
        }
        function qe(a) {
          const { qanda: e } = a,
            [s, o] = C.useState(!1),
            [r, i] = C.useState(e.strName),
            l = Le(),
            m = (d) => {
              d.stopPropagation(), d.preventDefault(), s || o(!0);
            },
            u = (d) => {
              d.stopPropagation(),
                d.preventDefault(),
                (0, Re.kd)(r, e.strName) != 0
                  ? l(e.gidSession, r).then(() => o(!1))
                  : o(!1);
            },
            A =
              e.strName.length > 0
                ? e.strName
                : (0, t.jsx)("span", {
                    className: n().Prompt,
                    children: (0, h.we)("#QAndA_EnterNamePrompt"),
                  }),
            c = (0, t.jsxs)("div", {
              className: n().NameInput,
              children: [
                (0, t.jsx)(j.pd, {
                  type: "text",
                  className: n().NameInput,
                  value: r,
                  placeholder: (0, h.we)("#QAndA_EnterNamePrompt"),
                  onFocus: (d) => d.target.select(),
                  onChange: (d) => i(d.currentTarget.value),
                  maxLength: me,
                }),
                (0, t.jsx)(j.jn, {
                  onClick: u,
                  className: n().InputButton,
                  children: (0, h.we)("#Button_Save"),
                }),
              ],
            });
          return (0, t.jsx)("div", {
            className: (0, T.A)(n().QAndAName, s && n().Editing),
            onClick: m,
            children: s ? c : A,
          });
        }
        function ye(a) {
          const { qanda: e } = a,
            s = Me();
          return (0, t.jsxs)(ie.o0, {
            strTitle: (0, h.we)("#QAndA_Column_DeleteButtons"),
            strDescription: (0, h.we)("#QAndA_DeleteQAndA_Instructions"),
            onOK: () => s(e.gidSession),
            closeModal: a.closeModal,
            className: n().DeleteQAndADialog,
            children: [
              (0, t.jsx)("div", {
                className: n().DeleteInfo,
                children: (0, h.we)("#QAndA_Column_Name") + ": " + e.strName,
              }),
              (0, t.jsx)("div", {
                className: n().DeleteInfo,
                children:
                  (0, h.we)("#QAndA_Column_QuestionCount") +
                  ": " +
                  e.rgQuestionGIDs.length,
              }),
            ],
          });
        }
        function O(a) {
          const {
              gidSession: e,
              gidQuestion: s,
              bUserCanModerate: o,
              bUserCanVote: r,
              fnVoteOnQuestion: i,
              rtNow: l,
            } = a,
            [m, u] = Te(s);
          if (!m) return null;
          const A = l - m.rtPostTime,
            c = A < ce.Kp.PerDay ? (0, h.Hq)(A) : (0, h._l)(m.rtPostTime),
            d = r ? () => i(s, !m.bUserUpVoted) : null,
            p = r
              ? m.bUserUpVoted
                ? n().Vote_Positive
                : n().Vote_Ready
              : n().Vote_CannotVote,
            _ = (0, T.A)(
              n().Question,
              m.eState == k && n().Hidden,
              m.eState == M && n().Moderated,
              m.eState == z && n().Unmoderated,
              m.eState == ne && n().Answered,
            );
          return (0, t.jsxs)("div", {
            className: _,
            children: [
              (0, t.jsxs)("div", {
                className: (0, T.A)(n().QuestionCtn, "questionCtn"),
                children: [
                  (0, t.jsx)(Ke, { accountID: m.posterAccountID }),
                  (0, t.jsxs)("div", {
                    className: n().QuestionText,
                    children: [
                      (0, t.jsxs)("div", {
                        className: n().QuestionAndVotes,
                        children: [
                          (0, t.jsx)("div", {
                            className: n().QuestionTitle,
                            children: m.strQuestionText,
                          }),
                          (0, t.jsx)(B.he, {
                            toolTipContent:
                              r &&
                              (m.bUserUpVoted
                                ? (0, h.we)("#QAndA_VoteRemoveTooltip")
                                : (0, h.we)("#QAndA_VoteTooltip")),
                            children: (0, t.jsxs)("div", {
                              className: (0, T.A)(p, n().Votes),
                              onClick: d,
                              children: [
                                (0, t.jsx)(P.bfp, { className: n().RateIcon }),
                                (0, t.jsx)("div", {
                                  className: n().VoteCount,
                                  children: (0, Be.D)(Number(m.nVoteCount)),
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
                          children: (0, t.jsx)(re.gS, {
                            rtFullDate: m.rtPostTime,
                            className: n().PostTime,
                            stylesmodule: n(),
                            children: c,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              m.rtAnswerTime && (0, t.jsx)(Oe, { question: m, rtNow: l }),
              o &&
                (0, t.jsx)(ze, {
                  gidSession: e,
                  gidQuestion: s,
                  eState: m == null ? void 0 : m.eState,
                }),
            ],
          });
        }
        function Oe(a) {
          const { question: e, rtNow: s } = a,
            o = e.rtAnswerTime && s - e.rtAnswerTime,
            r =
              e.rtAnswerTime &&
              (o < ce.Kp.PerDay ? (0, h.Hq)(o) : (0, h._l)(e.rtAnswerTime));
          return e.strAnswerText
            ? (0, t.jsxs)("div", {
                className: n().Answer,
                children: [
                  (0, t.jsxs)("div", {
                    className: n().AnswerTitle,
                    children: [
                      (0, t.jsx)("div", {
                        className: n().AnswerCheck,
                        children: (0, t.jsx)(P.X4B, { color: "#67c1f5" }),
                      }),
                      (0, h.we)("#QAndA_ModeratorAnswerTitle"),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: n().AnswerText,
                    children: [" ", e.strAnswerText, " "],
                  }),
                  (0, t.jsx)("div", {
                    className: n().QuestionStats,
                    children: (0, t.jsx)(re.gS, {
                      rtFullDate: e.rtAnswerTime,
                      className: n().PostTime,
                      stylesmodule: n(),
                      children: r,
                    }),
                  }),
                ],
              })
            : (0, t.jsxs)("div", {
                className: n().AnswerTitle,
                children: [
                  (0, t.jsx)("div", {
                    className: n().AnswerCheck,
                    children: (0, t.jsx)(P.X4B, { color: "#67c1f5" }),
                  }),
                  (0, h.we)("#QAndA_AlreadyAnsweredTitle"),
                ],
              });
        }
        function st(a) {
          const e = CSteamID.InitFromAccountID(a.accountID),
            { data: s } = usePlayerSummary(a.accountID);
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
        function Ke(a) {
          var e;
          const o = pe.b.InitFromAccountID(a.accountID).ConvertTo64BitString(),
            { isLoading: r, data: i } = (0, Pe.js)(a.accountID);
          return r
            ? null
            : (0, t.jsx)("a", {
                href: i.GetCommunityProfileURL(),
                className: n().PersonaName,
                "data-miniprofile": "s" + o,
                children:
                  (e = i == null ? void 0 : i.m_strPlayerName) != null ? e : o,
              });
        }
        function ze(a) {
          const { gidSession: e, gidQuestion: s, eState: o } = a,
            { fnAnswerQuestion: r, fnModerateQuestion: i } = ae(e),
            l = () => i(s, M),
            m = () => i(s, k),
            u = () => r(s, ""),
            A = o == z || o == k,
            c = o != k,
            d = o == M;
          return (0, t.jsxs)("div", {
            className: n().ModeratorSection,
            children: [
              (0, h.we)("#QAndA_ModeratorLabel"),
              (0, t.jsx)("div", {
                className: n().ToolRow,
                children: (0, t.jsx)(he, {
                  strPrompt: (0, h.we)("#QAndA_AnswerPrompt"),
                  fnSubmit: (p) => r(s, p),
                }),
              }),
              (0, t.jsxs)("div", {
                className: n().ToolRow,
                children: [
                  (0, h.we)("#QAndA_ModeratorOtherOptionsLabel"),
                  (0, t.jsx)(B.he, {
                    toolTipContent: (0, h.we)(
                      "#QAndA_ModerateApproveButton_ttip",
                    ),
                    children: (0, t.jsx)(j.$n, {
                      onClick: l,
                      className: n().InputButton,
                      disabled: !A,
                      children: (0, h.we)("#QAndA_ModerateApproveButton"),
                    }),
                  }),
                  (0, t.jsx)(B.he, {
                    toolTipContent: (0, h.we)("#QAndA_ModerateHideButton_ttip"),
                    children: (0, t.jsx)(j.$n, {
                      onClick: m,
                      className: n().InputButton,
                      disabled: !c,
                      children: (0, h.we)("#QAndA_ModerateHideButton"),
                    }),
                  }),
                  (0, t.jsx)(B.he, {
                    toolTipContent: (0, h.we)("#QAndA_QuickAnswerButton_ttip"),
                    children: (0, t.jsx)(j.$n, {
                      onClick: u,
                      className: n().InputButton,
                      disabled: !d,
                      children: (0, h.we)("#QAndA_QuickAnswerButton"),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Ye(a) {
          const { gidSession: e } = a;
          se();
          const { strName: s, bUserCanModerate: o } = Y(e);
          return (0, t.jsxs)("div", {
            className: n().QAFullPageView,
            children: [
              (0, t.jsx)("div", {
                className: n().QAName,
                children:
                  (0, h.we)("#QAndA_Header") +
                  ((s == null ? void 0 : s.length) > 0 ? ": " + s : ""),
              }),
              (0, t.jsxs)("div", {
                className: n().QAColumns,
                children: [
                  (0, t.jsx)(Ae, { gidSession: e, bHalfOfFullPage: o }),
                  o && (0, t.jsx)(We, { gidSession: e }),
                ],
              }),
            ],
          });
        }
        function We(a) {
          const { gidSession: e } = a,
            {
              bUserCanModerate: s,
              rgNewQuestionGIDs: o,
              rgHiddenQuestionGIDs: r,
            } = Y(e),
            i = (0, $.P_)(10);
          return s
            ? (0, t.jsxs)("div", {
                className: (0, T.A)(n().QAModeratorColumn, n().QASplitColumns),
                children: [
                  (0, t.jsx)(ue.qx, {
                    title: (0, h.we)("#QAndA_ModeratorViewHeader"),
                    className: n().ModeratorInstructions,
                    children: (0, t.jsx)("div", {
                      className: n().QuestionList,
                      children: o.map((l) =>
                        (0, t.jsx)(
                          O,
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
                  (0, t.jsx)(ue.qx, {
                    title: (0, h.we)("#QAndA_HiddenQuestionsHeader"),
                    className: n().AnsweredSectionHeader,
                    bStartMinimized: !0,
                    children: (0, t.jsx)("div", {
                      className: n().QuestionList,
                      children: r.map((l) =>
                        (0, t.jsx)(
                          O,
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
        function Ae(a) {
          const { gidSession: e, bHalfOfFullPage: s } = a;
          se();
          const {
              bIsLoaded: o,
              bUserCanAskQuestions: r,
              bUserCanModerate: i,
              fnAskQuestion: l,
              fnVoteOnQuestion: m,
              rgModeratedQuestionGIDs: u,
              rgAnsweredQuestionGIDs: A,
              rgNewQuestionGIDs: c,
            } = Y(e),
            { fnReload: d, bIsReloading: p } = je(e),
            _ = (0, $.P_)(10),
            w = i && s,
            { fnModerateQuestion: x } = ae(e),
            I = async () => {
              for (const N of [c, u, A]) for (const b of N) await x(b, k);
            };
          return (0, t.jsxs)("div", {
            className: (0, T.A)(n().QAMainCtn, s && n().QASplitColumns),
            children: [
              (0, t.jsxs)("div", {
                className: (0, T.A)(n().QAHeader, w && n().ModerationHeader),
                children: [
                  (0, t.jsx)(j.$n, {
                    onClick: d,
                    disabled: !o,
                    className: (0, T.A)(
                      n().InputButton,
                      n().Reload,
                      p && n().Reloading,
                    ),
                    children: (0, t.jsx)("div", {
                      className: n().ReloadIcon,
                      children: (0, t.jsx)(P.MvQ, {}),
                    }),
                  }),
                  w
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, h.we)("#QAndA_ModeratorLabelHeader"),
                          (0, t.jsx)(B.he, {
                            toolTipContent: (0, h.we)(
                              "#QAndA_ModerateHideAllButton_ttip",
                            ),
                            children: (0, t.jsx)(j.$n, {
                              onClick: I,
                              className: n().InputButton,
                              children: (0, h.we)(
                                "#QAndA_ModerateHideAllButton",
                              ),
                            }),
                          }),
                        ],
                      })
                    : r
                      ? (0, t.jsx)(Je, { fnAskQuestion: l })
                      : o && (0, t.jsx)(Xe, {}),
                ],
              }),
              u.length + A.length == 0
                ? (0, t.jsx)("div", {
                    className: n().NoQuestions,
                    children: (0, h.we)("#QAndA_NoQuestionsYet"),
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
                        children: o
                          ? u.map((N) =>
                              (0, t.jsx)(
                                O,
                                {
                                  gidSession: e,
                                  gidQuestion: N,
                                  bUserCanModerate: w,
                                  bUserCanVote: r,
                                  fnVoteOnQuestion: m,
                                  rtNow: _,
                                },
                                N,
                              ),
                            )
                          : (0, t.jsx)(de.t, { position: "center" }),
                      }),
                      A.length > 0 &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)("div", {
                              className: n().AnsweredSectionHeader,
                              children: (0, h.we)(
                                "#QAndA_AnsweredQuestionsHeader",
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: n().QuestionList,
                              children: A.map((N) =>
                                (0, t.jsx)(
                                  O,
                                  {
                                    gidSession: e,
                                    gidQuestion: N,
                                    bUserCanModerate: w,
                                    bUserCanVote: r,
                                    fnVoteOnQuestion: m,
                                    rtNow: _,
                                  },
                                  N,
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
        function Je(a) {
          const [e, s] = C.useState(!1),
            o = (0, U.m)("QuestionBox"),
            r = async (i) => {
              const l = await a.fnAskQuestion(i);
              return (
                l == v.R &&
                  !o.token.reason &&
                  (s(!0),
                  window.setTimeout(() => {
                    o.token.reason || s(!1);
                  }, 1e3)),
                l
              );
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: n().Description,
                children: (0, h.we)("#QAndA_HeaderDescription"),
              }),
              (0, t.jsx)(he, {
                strPrompt: (0, h.we)("#QAndA_QuestionPrompt"),
                fnSubmit: r,
              }),
              (0, t.jsx)("div", {
                className: (0, T.A)(n().QuestionACK, e && n().Visible),
                children: (0, h.we)("#QAndA_QuestionWasPosted"),
              }),
            ],
          });
        }
        function he(a) {
          const { strPrompt: e, fnSubmit: s } = a,
            [o, r] = C.useState(""),
            [i, l] = C.useState(!1),
            m = async () => {
              l(!0), (await s(o)) == v.R && r(""), l(!1);
            };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className: n().InputCtn,
              children: [
                (0, t.jsx)(j.pd, {
                  type: "text",
                  placeholder: e,
                  maxLength: 512,
                  value: o,
                  onChange: (u) => r(u.target.value),
                }),
                (0, t.jsxs)("div", {
                  className: n().ButtonCtn,
                  children: [
                    i &&
                      (0, t.jsx)("div", {
                        className: n().SaveSpinner,
                        children: (0, t.jsx)(de.t, {
                          size: "small",
                          position: "center",
                        }),
                      }),
                    (0, t.jsx)(j.$n, {
                      onClick: m,
                      disabled: i || !o,
                      className: n().InputButton,
                      children: (0, h.we)("#QAndA_SubmitCommentButton"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Xe(a) {
          return (0, t.jsxs)("div", {
            className: n().Description,
            children: [
              (0, t.jsx)("div", {
                className: n().LogInPrompt,
                children: (0, h.we)("#QAndA_LogInPrompt"),
              }),
              !Q.iA.logged_in &&
                (0, t.jsx)(j.$n, {
                  onClick: Ue.vg,
                  className: (0, T.A)(n().SignInButton, n().InputButton),
                  children: (0, h.we)("#Login_SignIn"),
                }),
            ],
          });
        }
      },
      76048: (Z) => {
        Z.exports = {
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
