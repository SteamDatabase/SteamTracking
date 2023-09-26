/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8120],
  {
    45811: (t) => {
      t.exports = {
        FAQContainer: "faqbbcode_FAQContainer_1BWX4",
        Section: "faqbbcode_Section_NWJUH",
        Note: "faqbbcode_Note_1Er-4",
        Important: "faqbbcode_Important_2LRZH",
        Warning: "faqbbcode_Warning_3G4C2",
        FAQImage: "faqbbcode_FAQImage_1sKwB",
      };
    },
    40993: (t, e, a) => {
      "use strict";
      a.d(e, { R: () => h });
      var s = a(89526),
        r = a(63903),
        n = a(54297),
        i = a(87178),
        o = a(19304),
        l = a(32765),
        m = a(24174),
        u = a(4116),
        d = a(14288),
        _ = a(29667),
        c = a(45811),
        p = a.n(c);
      const f = new Map([
          ...Array.from(d.Be.entries()),
          ...Array.from(d.YY.entries()),
          [
            "section",
            {
              Constructor: function (t) {
                let e = (0, d.im)(t.args, "id");
                e &&
                  "string" == typeof e &&
                  e.length > 0 &&
                  "#" === e[0] &&
                  (e = e.substring(1));
                const a = (0, d.im)(t.args, "style"),
                  r = (0, o.Z)(
                    p().Section,
                    "note" == a && p().Note,
                    "important" == a && p().Important,
                    "warning" == a && p().Warning,
                  );
                return s.createElement(
                  "div",
                  { id: e || void 0, className: r },
                  t.children,
                );
              },
              autocloses: !1,
            },
          ],
          [
            "img",
            {
              Constructor: function (t) {
                var e, a;
                const { showErrorInfo: r } = t.context;
                let o =
                  null === (e = null == t ? void 0 : t.children) || void 0 === e
                    ? void 0
                    : e.toString();
                if (
                  (null == o || null == o || 0 == o.length) &&
                  ((o =
                    null === (a = null == t ? void 0 : t.args) || void 0 === a
                      ? void 0
                      : a[""]),
                  null == o || null == o || 0 == o.length)
                )
                  return "";
                const l = (0, d.vZ)(o, t.language);
                return "string" == typeof l
                  ? ((o = l),
                    r
                      ? s.createElement(n.e, {
                          className: p().FAQImage,
                          src: o,
                        })
                      : ((o = o.replace("http://", "https://")),
                        s.createElement("img", {
                          className: p().FAQImage,
                          src: o,
                        })))
                  : s.createElement(i.j, {
                      className: p().FAQImage,
                      rgSources: l,
                    });
              },
              autocloses: !1,
            },
          ],
          [
            "exclude_realm",
            {
              Constructor: function (t) {
                const e = (0, d.im)(t.args);
                return ("global" == e &&
                  l.De.EREALM == r.IN.k_ESteamRealmGlobal) ||
                  ("china" == e && (0, l.h4)())
                  ? null
                  : s.createElement(s.Fragment, null, t.children);
              },
              autocloses: !1,
            },
          ],
        ]),
        h = (t) => {
          const { text: e, bShowErrorInfo: a } = t,
            r = s.useCallback(
              (t) =>
                new _.Ax(
                  new _.qL(
                    new u.So(new u.LT(), 0),
                    t,
                    [
                      {
                        urlRegExp: /youtu.be|youtube.com/i,
                        fnBBComponent: d.V2,
                      },
                    ],
                    {},
                  ),
                  t,
                ),
              [],
            ),
            n = s.useRef(new m.Z6(f, r));
          return s.createElement(
            "div",
            { className: p().FAQContainer },
            n.current.ParseBBCode(e, { showErrorInfo: a }),
          );
        };
    },
    50672: (t, e, a) => {
      "use strict";
      a.d(e, {
        xP: () => F,
        hS: () => E,
        cJ: () => y,
        wl: () => L,
        SP: () => I,
        EH: () => G,
        Ky: () => b,
        NV: () => Q,
      });
      var s = a(33940),
        r = a(52868),
        n = a.n(r),
        i = a(38072),
        o = a.n(i),
        l = a(50265),
        m = a(89526),
        u = a(42735),
        d = a(75457),
        _ = a(67328),
        c = a(63903),
        p = a(23801),
        f = a(26464),
        h = a(23217),
        g = a(32765);
      class A {
        constructor(t, e) {
          (this.m_summary = t),
            (this.m_mapStoredDrafts = e),
            (this.m_mapLocalUpdates = new Map());
          for (let t = d.Df.k_Lang_English; t < d.Df.k_Lang_MAX; t++)
            this.m_mapLocalUpdates.set(t, {});
        }
        BNeedsSaving(t) {
          if (void 0 !== t) {
            const e = this.m_mapLocalUpdates.get(t);
            return !!e.strTitle || !!e.strContent;
          }
          return Array.from(this.m_mapLocalUpdates.values()).some(
            (t) => !!t.strTitle || !!t.strContent,
          );
        }
        SaveDrafts() {
          var t, e, a, r;
          return (0, s.mG)(this, void 0, void 0, function* () {
            (0, p.X)(
              Boolean(
                null === (t = this.m_summary) || void 0 === t
                  ? void 0
                  : t.faq_id,
              ),
              "Attempting to save when we lack a FaqID in the summary object",
            );
            let s = u.s.k_EResultOK,
              n = new Array();
            for (let t = d.Df.k_Lang_English; t < d.Df.k_Lang_MAX; ++t)
              if (
                (this.m_mapLocalUpdates.get(t).strTitle &&
                  this.m_mapLocalUpdates.get(t).strTitle !==
                    (null === (e = this.m_mapStoredDrafts.get(t)) ||
                    void 0 === e
                      ? void 0
                      : e.title)) ||
                (this.m_mapLocalUpdates.get(t).strContent &&
                  this.m_mapLocalUpdates.get(t).strContent !==
                    (null === (a = this.m_mapStoredDrafts.get(t)) ||
                    void 0 === a
                      ? void 0
                      : a.content))
              ) {
                const e = this.GetDraftTitle(t),
                  a = this.GetDraftContent(t),
                  i = F.Get().UpdateDraft(
                    null === (r = this.m_summary) || void 0 === r
                      ? void 0
                      : r.faq_id,
                    t,
                    e,
                    a,
                  );
                i
                  .then((r) => {
                    r.eResult == u.s.k_EResultOK
                      ? (0, l.z)(() => {
                          this.m_mapStoredDrafts.has(t) ||
                            this.m_mapStoredDrafts.set(t, {}),
                            (this.m_mapStoredDrafts.get(t).title = e),
                            (this.m_mapStoredDrafts.get(t).content = a),
                            (this.m_mapStoredDrafts.get(t).timestamp =
                              r.rtUpdateTime),
                            (this.m_mapStoredDrafts.get(t).author_account_id =
                              g.L7.accountid.toString()),
                            (this.m_mapLocalUpdates.get(t).strTitle = null),
                            (this.m_mapLocalUpdates.get(t).strContent = null);
                          let s = !1;
                          this.m_summary.per_language_info.forEach((e) => {
                            t == e.language &&
                              ((s = !0),
                              (e.last_update_timestamp = Math.max(
                                e.last_update_timestamp,
                                r.rtUpdateTime,
                              )));
                          }),
                            s ||
                              this.m_summary.per_language_info.push({
                                language: t,
                                last_update_timestamp: r.rtUpdateTime,
                              });
                        })
                      : s == u.s.k_EResultOK &&
                        (console.error(
                          "FAQModel.SaveDraft: Response not ok " + r.eResult,
                          r,
                        ),
                        (s = r.eResult));
                  })
                  .catch((t) => {
                    console.error(
                      "FAQModel.SaveDrafts: Hit error " +
                        (0, h.l)(t).strErrorMsg,
                    ),
                      s == u.s.k_EResultOK && (s = u.s.k_EResultFail);
                  }),
                  n.push(i);
              }
            return yield Promise.all(n), s;
          });
        }
        GetFAQInternalName() {
          var t;
          return null === (t = this.m_summary) || void 0 === t
            ? void 0
            : t.internal_name;
        }
        GetDraftTitle(t) {
          var e;
          return null !== this.m_mapLocalUpdates.get(t).strTitle &&
            void 0 !== this.m_mapLocalUpdates.get(t).strTitle
            ? this.m_mapLocalUpdates.get(t).strTitle
            : null === (e = this.m_mapStoredDrafts.get(t)) || void 0 === e
            ? void 0
            : e.title;
        }
        GetDraftContent(t) {
          var e;
          return null !== this.m_mapLocalUpdates.get(t).strContent &&
            void 0 !== this.m_mapLocalUpdates.get(t).strContent
            ? this.m_mapLocalUpdates.get(t).strContent
            : null === (e = this.m_mapStoredDrafts.get(t)) || void 0 === e
            ? void 0
            : e.content;
        }
        GetDraftTitleWithFallback(t, e = c.IN.k_ESteamRealmGlobal) {
          var a, s, r, n, i, o;
          const l =
            e == c.IN.k_ESteamRealmChina
              ? d.Df.k_Lang_Simplified_Chinese
              : d.Df.k_Lang_English;
          return null !==
            (o =
              null !==
                (n =
                  null !==
                    (s =
                      null !== (a = this.m_mapLocalUpdates.get(t).strTitle) &&
                      void 0 !== a
                        ? a
                        : this.m_mapLocalUpdates.get(l).strTitle) &&
                  void 0 !== s
                    ? s
                    : null === (r = this.m_mapStoredDrafts.get(t)) ||
                      void 0 === r
                    ? void 0
                    : r.title) && void 0 !== n
                ? n
                : null === (i = this.m_mapStoredDrafts.get(l)) || void 0 === i
                ? void 0
                : i.title) && void 0 !== o
            ? o
            : "";
        }
        GetDraftContentWithFallback(t, e = c.IN.k_ESteamRealmGlobal) {
          var a, s, r, n, i, o;
          const l =
            e == c.IN.k_ESteamRealmChina
              ? d.Df.k_Lang_Simplified_Chinese
              : d.Df.k_Lang_English;
          return null !==
            (o =
              null !==
                (n =
                  null !==
                    (s =
                      null !== (a = this.m_mapLocalUpdates.get(t).strContent) &&
                      void 0 !== a
                        ? a
                        : this.m_mapLocalUpdates.get(l).strContent) &&
                  void 0 !== s
                    ? s
                    : null === (r = this.m_mapStoredDrafts.get(t)) ||
                      void 0 === r
                    ? void 0
                    : r.content) && void 0 !== n
                ? n
                : null === (i = this.m_mapStoredDrafts.get(l)) || void 0 === i
                ? void 0
                : i.content) && void 0 !== o
            ? o
            : "";
        }
        GetLastSavedDraftVersion(t) {
          return this.m_mapStoredDrafts.get(t);
        }
        BHasSomeTextForLanguage(t) {
          return Boolean(this.GetDraftContent(t) || this.GetDraftTitle(t));
        }
        SetDraftTitle(t, e) {
          var a;
          e ===
          (null === (a = this.m_mapStoredDrafts.get(t)) || void 0 === a
            ? void 0
            : a.title)
            ? (this.m_mapLocalUpdates.get(t).strTitle = null)
            : (this.m_mapLocalUpdates.get(t).strTitle = e);
        }
        SetDraftContent(t, e) {
          var a;
          e ===
          (null === (a = this.m_mapStoredDrafts.get(t)) || void 0 === a
            ? void 0
            : a.content)
            ? (this.m_mapLocalUpdates.get(t).strContent = null)
            : (this.m_mapLocalUpdates.get(t).strContent = e);
        }
        GetIncludedRealmList() {
          const t = new Array();
          return (
            this.m_summary.visible_in_global_realm &&
              t.push(c.IN.k_ESteamRealmGlobal),
            this.m_summary.visible_in_global_realm &&
              t.push(c.IN.k_ESteamRealmChina),
            0 == t.length && t.push(c.IN.k_ESteamRealmGlobal),
            (0, p.X)(
              t.length > 0,
              `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
            ),
            t
          );
        }
        BHasPublished() {
          return Boolean(
            this.m_summary.per_language_info.some(
              (t) => !!t.last_publish_timestamp,
            ),
          );
        }
        GetLastTimeLanguageUpdated(t) {
          var e, a;
          return null !==
            (a =
              null === (e = this.GetLastSavedDraftVersion(t)) || void 0 === e
                ? void 0
                : e.timestamp) && void 0 !== a
            ? a
            : 0;
        }
        GetFAQID() {
          return this.m_summary.faq_id;
        }
        GetSummary() {
          return this.m_summary;
        }
      }
      (0, s.gn)([l.LO], A.prototype, "m_mapLocalUpdates", void 0),
        (0, s.gn)([f.a], A.prototype, "BHasSomeTextForLanguage", null),
        (0, s.gn)([f.a], A.prototype, "GetLastTimeLanguageUpdated", null);
      var v = a(19094),
        S = a(29918);
      class F {
        static Get() {
          return F.s_Singleton || (F.s_Singleton = new F()), F.s_Singleton;
        }
        static Init(t) {
          F.Get().m_steamInterface = t;
        }
        constructor() {
          (this.m_mapFAQSummaries = new Map()),
            (this.m_mapFAQPublishedContent = new Map()),
            (this.m_mapFAQDrafts = new Map()),
            (this.m_bHasFAQEdit = !1),
            (this.m_steamInterface = null),
            "dev" == g.De.WEB_UNIVERSE && (window.g_FAQStore = this),
            g.De.IN_STEAMUI ||
              (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
        }
        SetUpWebAPIInterface() {
          const t = (0, g.kQ)("faqstore", "application_config"),
            e = null == t ? void 0 : t.webapi_token;
          this.m_steamInterface = new v.J(g.De.WEBAPI_BASE_URL, e);
        }
        ReadInitialPayload() {
          const t = (0, g.kQ)("faqstore", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CFAQStore loading payload: ", t),
            this.BIsConfigValid(t))
          ) {
            if (t.faqs)
              for (const e in t.faqs) {
                const a = t.faqs[e];
                (null == a ? void 0 : a.faq_id) == e &&
                  void 0 !== (null == a ? void 0 : a.language) &&
                  (this.m_mapFAQPublishedContent.has(e) ||
                    this.m_mapFAQPublishedContent.set(e, new Map()),
                  this.m_mapFAQPublishedContent.get(e).set(a.language, a));
              }
            if (t.alldrafts)
              for (const e in t.alldrafts) {
                const a = t.alldrafts[e];
                if (!(null == a ? void 0 : a.summary) || !a.draft) continue;
                this.m_mapFAQSummaries.set(e, a.summary);
                const s = new Map();
                for (const t of a.draft) s.set(t.language, t);
                this.m_mapFAQDrafts.set(
                  e,
                  new A(this.m_mapFAQSummaries.get(e), s),
                );
              }
            if (t.allfaqs)
              for (const e of t.allfaqs)
                e.faq_id &&
                  (this.m_mapFAQSummaries.has(e.faq_id) ||
                    this.m_mapFAQSummaries.set(e.faq_id, e));
            this.m_bHasFAQEdit = Boolean(t.has_faq_edit);
          } else
            "dev" == g.De.WEB_UNIVERSE &&
              console.error("CFAQStore Invalid payload");
        }
        BIsConfigValid(t) {
          const e = t;
          return !!(
            (e && e.faqs && "object" == typeof e.faqs) ||
            (e.alldrafts && "object" == typeof e.alldrafts) ||
            (e.allfaqs && Array.isArray(e.allfaqs))
          );
        }
        CreateFAQ(t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const e = _.gA.Init(S.jV);
            e.Body().set_steamid(g.JA.CLANSTEAMID),
              e.Body().set_internal_name(t);
            let a,
              s = u.s.k_EResultFail;
            try {
              const r = yield S.KF.Create(
                this.m_steamInterface.GetServiceTransport(),
                e,
              );
              if (((s = r.GetEResult()), s == u.s.k_EResultOK)) {
                a = r.Body().faq_id();
                const e = { faq_id: a, internal_name: t };
                this.m_mapFAQSummaries.set(a, e);
              } else
                console.error("FAQStore.CreateFAQ: Create request failed:", s);
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FAQStore.CreateFAQ: caught error " + e.strErrorMsg,
                e,
              );
            }
            return { eResult: s, strFaqId: a };
          });
        }
        UpdateDraft(t, e, a, r) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s = _.gA.Init(S.Go);
            s.Body().set_steamid(g.JA.CLANSTEAMID),
              s.Body().set_faq_id(t),
              s.Body().set_language(e),
              s.Body().set_content(r),
              s.Body().set_title(a);
            let n = u.s.k_EResultFail,
              i = 0;
            try {
              const t = yield S.KF.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                s,
              );
              (n = t.GetEResult()),
                n != u.s.k_EResultOK
                  ? console.error("FAQStore.UpdateDraft request failed:", n)
                  : (i = t.Body().last_update_timestamp());
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FAQStore.UpdateDraft: caught error " + e.strErrorMsg,
                e,
              );
            }
            return { eResult: n, rtUpdateTime: i };
          });
        }
        UpdateJsonData(t, e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const a = JSON.stringify(e),
              s = _.gA.Init(S.F2);
            s.Body().set_steamid(g.JA.CLANSTEAMID),
              s.Body().set_faq_id(t),
              s.Body().set_json_data(a);
            let r = u.s.k_EResultFail;
            try {
              (r = (yield S.KF.UpdateJsonData(
                this.m_steamInterface.GetServiceTransport(),
                s,
              )).GetEResult()),
                r != u.s.k_EResultOK
                  ? console.error("FAQStore.UpdateJsonData request failed:", r)
                  : (this.m_mapFAQSummaries.get(t).json_data = a);
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FAQStore.UpdateJsonData: caught error " + e.strErrorMsg,
                e,
              );
            }
            return r;
          });
        }
        GetFAQVersion(t, e, a) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s = _.gA.Init(S.dp);
            s.Body().set_steamid(g.JA.CLANSTEAMID),
              s.Body().set_faq_id(t),
              s.Body().set_version(e),
              s.Body().set_language(a);
            try {
              const t = yield S.KF.GetFAQVersion(
                  this.m_steamInterface.GetServiceTransport(),
                  s,
                ),
                e = t.GetEResult();
              if (e == u.s.k_EResultOK) return t.Body().faq().toObject();
              console.error("FAQStore.GetFAQVersion request failed:", e);
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FAQStore.GetFAQVersion: caught error " + e.strErrorMsg,
                e,
              );
            }
            return null;
          });
        }
        DeleteFAQ(t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const e = _.gA.Init(S.$H);
            e.Body().set_steamid(g.JA.CLANSTEAMID), e.Body().set_faq_id(t);
            let a = u.s.k_EResultFail;
            try {
              (a = (yield S.KF.Delete(
                this.m_steamInterface.GetServiceTransport(),
                e,
              )).GetEResult()),
                a != u.s.k_EResultOK
                  ? console.error("FAQStore.DeleteFAQ request failed:", a)
                  : (this.m_mapFAQDrafts.delete(t),
                    this.m_mapFAQPublishedContent.delete(t),
                    this.m_mapFAQSummaries.delete(t));
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FAQStore.DeleteFAQ: caught error " + e.strErrorMsg,
                e,
              );
            }
            return a;
          });
        }
        GetFAQPublishedContent(t, e) {
          const a = this.m_mapFAQPublishedContent.get(t);
          if (!a) return null;
          let s = a.get(e);
          return (
            !s &&
              F.sm_mapFallbackLanguages.has(e) &&
              (s = a.get(F.sm_mapFallbackLanguages.get(e))),
            s ||
              e == d.Df.k_Lang_English ||
              (0, g.h4)() ||
              (s = a.get(d.Df.k_Lang_English)),
            s
          );
        }
        GetFAQDraftContent(t) {
          return this.m_mapFAQDrafts.get(t);
        }
        GetAllFAQSummaries() {
          return Array.from(this.m_mapFAQSummaries.values());
        }
        GetFAQArticleSummary(t) {
          return this.m_mapFAQSummaries.get(t) || {};
        }
        LoadFAQDraftContent(t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (this.m_mapFAQDrafts.has(t)) return this.m_mapFAQDrafts.get(t);
            const e = _.gA.Init(S.hU);
            e.Body().set_steamid(g.JA.CLANSTEAMID), e.Body().set_faq_id(t);
            let a = u.s.k_EResultFail;
            try {
              const s = yield S.KF.GetAllDrafts(
                this.m_steamInterface.GetServiceTransport(),
                e,
              );
              if (((a = s.GetEResult()), a != u.s.k_EResultOK))
                return (
                  console.error(
                    "FaqStore.LoadFAQDraftContent request failed:",
                    a,
                  ),
                  null
                );
              {
                const e = s.Body().summary().toObject();
                this.m_mapFAQSummaries.set(t, e);
                const a = new Map();
                s.Body()
                  .draft()
                  .forEach((t) => a.set(t.language(), t.toObject()));
                const r = new A(this.m_mapFAQSummaries.get(t), a);
                return this.m_mapFAQDrafts.set(t, r), r;
              }
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FaqStore.LoadFAQDraftContent: exception " + e.strErrorMsg,
                e,
              );
            }
            return null;
          });
        }
        UpdateVisibility(t, e, a) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s = _.gA.Init(S.tv);
            s.Body().set_steamid(g.JA.CLANSTEAMID),
              s.Body().set_faq_id(t),
              s.Body().set_visible_in_global_realm(e),
              s.Body().set_visible_in_china_realm(a);
            let r = u.s.k_EResultFail;
            try {
              if (
                ((r = (yield S.KF.SetVisibility(
                  this.m_steamInterface.GetServiceTransport(),
                  s,
                )).GetEResult()),
                r === u.s.k_EResultOK)
              ) {
                const s = this.m_mapFAQSummaries.get(t);
                s &&
                  ((s.visible_in_global_realm = e),
                  (s.visible_in_china_realm = a),
                  this.m_mapFAQSummaries.set(t, s));
              } else console.error("FaqStore.UpdateVisibility: Failed " + r);
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FaqStore.UpdateVisibility: exception " + e.strErrorMsg,
                e,
              );
            }
            return r;
          });
        }
        PublishDraftByLanguage(t, e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return u.s.k_EResultOK;
            const a = _.gA.Init(S.SU);
            a.Body().set_steamid(g.JA.CLANSTEAMID),
              a.Body().set_faq_id(t),
              e.forEach((t) => a.Body().add_language(t));
            let s = u.s.k_EResultFail;
            try {
              const r = yield S.KF.PublishDraft(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (((s = r.GetEResult()), s === u.s.k_EResultOK)) {
                const a = this.m_mapFAQSummaries.get(t);
                a &&
                  (0, l.z)(() => {
                    this.m_mapFAQPublishedContent.has(t) ||
                      this.m_mapFAQPublishedContent.set(t, new Map()),
                      a.per_language_info.forEach((a) => {
                        var s;
                        const n = a.language;
                        if (e.indexOf(n) >= 0) {
                          a.last_publish_timestamp = Math.max(
                            a.last_publish_timestamp,
                            r.Body().last_publish_timestamp(),
                          );
                          const e =
                            null === (s = this.m_mapFAQDrafts.get(t)) ||
                            void 0 === s
                              ? void 0
                              : s.GetLastSavedDraftVersion(n);
                          this.m_mapFAQPublishedContent.get(t).set(n, e);
                        }
                      });
                  });
              } else
                console.error("FaqStore.PublishDraftByLanguage: Failed " + s);
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FaqStore.PublishDraftByLanguage: exception " + e.strErrorMsg,
                e,
              );
            }
            return s;
          });
        }
        UpdateInternalName(t, e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const a = _.gA.Init(S.sL);
            a.Body().set_steamid(g.JA.CLANSTEAMID),
              a.Body().set_faq_id(t),
              a.Body().set_internal_name(e);
            let s = u.s.k_EResultFail;
            try {
              (s = (yield S.KF.UpdateInternalName(
                this.m_steamInterface.GetServiceTransport(),
                a,
              )).GetEResult()),
                s === u.s.k_EResultOK
                  ? (0, l.z)(() => {
                      var a, s, r;
                      (null === (a = this.m_mapFAQSummaries.get(t)) ||
                      void 0 === a
                        ? void 0
                        : a.internal_name) &&
                        (this.m_mapFAQSummaries.get(t).internal_name = e),
                        (null ===
                          (r =
                            null === (s = this.m_mapFAQDrafts.get(t)) ||
                            void 0 === s
                              ? void 0
                              : s.GetSummary()) || void 0 === r
                          ? void 0
                          : r.internal_name) &&
                          (this.m_mapFAQDrafts
                            .get(t)
                            .GetSummary().internal_name = e);
                    })
                  : console.error("FaqStore.UpdateInternalName: Failed " + s);
            } catch (t) {
              const e = (0, h.l)(t);
              console.error(
                "FaqStore.UpdateInternalName: exception " + e.strErrorMsg,
                e,
              );
            }
            return s;
          });
        }
        GetLoadedDraftObjs() {
          return Array.from(this.m_mapFAQDrafts.values());
        }
        RemoveAllDirtyDrafts() {
          var t, e;
          const a =
            null ===
              (e =
                null === (t = this.GetLoadedDraftObjs()) || void 0 === t
                  ? void 0
                  : t.filter((t) => t.BNeedsSaving())) || void 0 === e
              ? void 0
              : e.map((t) => t.GetFAQID());
          null == a || a.forEach((t) => this.m_mapFAQDrafts.delete(t));
        }
        BHasFAQEdit() {
          return this.m_bHasFAQEdit;
        }
        ExportEnglishDraftToCrowdin(t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const e =
              g.De.COMMUNITY_BASE_URL +
              "faqs/" +
              g.JA.VANITY_ID +
              "/ajaxpushtocrowdin/" +
              E(t);
            yield n().get(e);
          });
        }
        ImportNonEnglishDraftsFromCrowdin(t, e, a) {
          var r, i;
          return (0, s.mG)(this, void 0, void 0, function* () {
            const s =
                g.De.COMMUNITY_BASE_URL +
                "faqs/" +
                g.JA.VANITY_ID +
                "/ajaxpullfromcrowdin/" +
                E(t),
              o = new FormData();
            o.append("sessionid", g.De.SESSIONID),
              o.append("languages", e.join(","));
            let l = null;
            try {
              const e = yield n().post(s, o, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                (null === (r = e.data) || void 0 === r ? void 0 : r.success) ==
                  u.s.k_EResultOK
              ) {
                const a = e.data.updated,
                  s =
                    null !== (i = null == a ? void 0 : a[t]) && void 0 !== i
                      ? i
                      : [];
                return (
                  s.length > 0 &&
                    (this.m_mapFAQSummaries.has(t) ||
                      this.m_mapFAQDrafts.has(t)) &&
                    (this.m_mapFAQDrafts.delete(t),
                    yield this.LoadFAQDraftContent(t)),
                  s
                );
              }
              l = { response: e };
            } catch (t) {
              l = t;
            }
            const m = (0, h.l)(l);
            return (
              console.error(
                "Could not import from crowdin",
                t,
                m.strErrorMsg,
                m,
              ),
              []
            );
          });
        }
        BHasLiveEnglishVersion(t) {
          return this.m_mapFAQSummaries
            .get(t)
            .per_language_info.some(
              (t) =>
                t.language == d.Df.k_Lang_English &&
                t.last_publish_timestamp > 0,
            );
        }
        GetNonEnglishDraftsToPublish(t) {
          return this.m_mapFAQSummaries
            .get(t)
            .per_language_info.filter((t) => {
              var e;
              return (
                t.language != d.Df.k_Lang_English &&
                t.last_update_timestamp >
                  (null !== (e = t.last_publish_timestamp) && void 0 !== e
                    ? e
                    : 0)
              );
            })
            .map((t) => t.language);
        }
      }
      (F.sm_mapFallbackLanguages = new Map([
        [d.Df.k_Lang_Spanish, d.Df.k_Lang_Latam_Spanish],
        [d.Df.k_Lang_Latam_Spanish, d.Df.k_Lang_Spanish],
        [d.Df.k_Lang_SteamChina_SChinese, d.Df.k_Lang_Simplified_Chinese],
      ])),
        (0, s.gn)([l.LO], F.prototype, "m_mapFAQSummaries", void 0),
        (0, s.gn)([l.aD], F.prototype, "RemoveAllDirtyDrafts", null);
      const D = /^[0-9a-fA-F]+$/;
      function y(t) {
        const e = null == t ? void 0 : t.replace(/-/g, "");
        if (16 != (null == e ? void 0 : e.length) || !D.test(e)) return null;
        return o().fromString(e, !0, 16).toString();
      }
      function E(t) {
        const e = ("0000000000000000" + o().fromString(t, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${e.slice(0, 4)}-${e.slice(4, 8)}-${e.slice(8, 12)}-${e.slice(
          12,
          16,
        )}`;
      }
      function Q(t, e) {
        return [t && F.Get().GetFAQPublishedContent(t, e), !0];
      }
      function L(t) {
        const [e, a] = m.useState(F.Get().GetFAQDraftContent(t)),
          [s, r] = m.useState(!!e);
        return (
          (0, m.useEffect)(() => {
            F.Get()
              .LoadFAQDraftContent(t)
              .then((t) => a(t))
              .finally(() => r(!0));
          }, [t]),
          [e, s]
        );
      }
      function G(t) {
        return [F.Get().GetFAQArticleSummary(t), !0];
      }
      function I() {
        const t = F.Get().GetAllFAQSummaries();
        return m.useRef([t, !0]).current;
      }
      function b(t, e, a) {
        const [s, r] = m.useState(null),
          [n, i] = m.useState(!1);
        return (
          (0, m.useEffect)(() => {
            F.Get().BHasFAQEdit() &&
              F.Get()
                .GetFAQVersion(t, e, a)
                .then((t) => r(t))
                .finally(() => i(!0));
          }, [t, e, a]),
          [s, n]
        );
      }
    },
  },
]);
