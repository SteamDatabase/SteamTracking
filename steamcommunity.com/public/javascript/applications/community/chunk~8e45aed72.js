/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8120],
  {
    21571: (t) => {
      t.exports = {
        FAQContainer: "_1BWX4M92aix2fGQpo8Tef9",
        Section: "NWJUHKxCjy6Vt-eCIimPI",
        Note: "_1Er-4Hxpk4pCaLFH-pfsWw",
        Important: "_2LRZHyh5oSKIVVSSbFEj-b",
        Warning: "_3G4C2HQXXHXqyz5TmBAYM3",
        FAQImage: "_1sKwBm5oDNIVb9z5t0QrRY",
      };
    },
    19941: (t, e, a) => {
      "use strict";
      a.d(e, { R: () => f });
      var r = a(47427),
        s = a(38071),
        n = a(31659),
        o = a(28918),
        i = a(13129),
        l = a(37563),
        m = a(92309),
        d = a(20142),
        u = a(29525),
        c = a(58635),
        _ = a(21571),
        p = a.n(_);
      const h = new Map([
          ...Array.from(u.Be.entries()),
          ...Array.from(u.YY.entries()),
          [
            "section",
            {
              Constructor: function (t) {
                let e = (0, u.im)(t.args, "id");
                e &&
                  "string" == typeof e &&
                  e.length > 0 &&
                  "#" === e[0] &&
                  (e = e.substring(1));
                const a = (0, u.im)(t.args, "style"),
                  s = (0, i.Z)(
                    p().Section,
                    "note" == a && p().Note,
                    "important" == a && p().Important,
                    "warning" == a && p().Warning,
                  );
                return r.createElement(
                  "div",
                  { id: e || void 0, className: s },
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
                const { showErrorInfo: s } = t.context;
                let i =
                  null === (e = null == t ? void 0 : t.children) || void 0 === e
                    ? void 0
                    : e.toString();
                if (
                  (null == i || null == i || 0 == i.length) &&
                  ((i =
                    null === (a = null == t ? void 0 : t.args) || void 0 === a
                      ? void 0
                      : a[""]),
                  null == i || null == i || 0 == i.length)
                )
                  return "";
                const l = (0, u.vZ)(i, t.language);
                return "string" == typeof l
                  ? ((i = l),
                    s
                      ? r.createElement(n.e, {
                          className: p().FAQImage,
                          src: i,
                        })
                      : ((i = i.replace("http://", "https://")),
                        r.createElement("img", {
                          className: p().FAQImage,
                          src: i,
                        })))
                  : r.createElement(o.j, {
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
                const e = (0, u.im)(t.args);
                return ("global" == e &&
                  l.De.EREALM == s.IN.k_ESteamRealmGlobal) ||
                  ("china" == e && (0, l.h4)())
                  ? null
                  : r.createElement(r.Fragment, null, t.children);
              },
              autocloses: !1,
            },
          ],
        ]),
        f = (t) => {
          const { text: e, bShowErrorInfo: a } = t,
            s = r.useCallback(
              (t) =>
                new c.Ax(
                  new c.qL(
                    new d.So(new d.LT(), 0),
                    t,
                    [
                      {
                        urlRegExp: /youtu.be|youtube.com/i,
                        fnBBComponent: u.V2,
                      },
                    ],
                    {},
                  ),
                  t,
                ),
              [],
            ),
            n = r.useRef(new m.Z(h, s, l.De.LANGUAGE));
          return r.createElement(
            "div",
            { className: p().FAQContainer },
            n.current.ParseBBCode(e, { showErrorInfo: a }),
          );
        };
    },
    70811: (t, e, a) => {
      "use strict";
      a.d(e, {
        xP: () => A,
        hS: () => F,
        cJ: () => S,
        wl: () => D,
        SP: () => E,
        EH: () => Q,
        Ky: () => G,
        NV: () => y,
      });
      var r = a(85556),
        s = a(80751),
        n = a.n(s),
        o = a(8416),
        i = a(54842),
        l = a(47427),
        m = a(79545),
        d = a(38071),
        u = a(62210),
        c = a(16997),
        _ = a(16649),
        p = a(37563);
      class h {
        constructor(t, e) {
          (this.m_mapLocalUpdates = new Map()),
            (0, i.rC)(this),
            (this.m_summary = t),
            (this.m_mapStoredDrafts = e),
            (this.m_mapLocalUpdates = new Map());
          for (let t = 0; t < 31; t++) this.m_mapLocalUpdates.set(t, {});
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
          var t, e, a, s;
          return (0, r.mG)(this, void 0, void 0, function* () {
            (0, u.X)(
              Boolean(
                null === (t = this.m_summary) || void 0 === t
                  ? void 0
                  : t.faq_id,
              ),
              "Attempting to save when we lack a FaqID in the summary object",
            );
            let r = 1,
              n = new Array();
            for (let t = 0; t < 31; ++t)
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
                  o = A.Get().UpdateDraft(
                    null === (s = this.m_summary) || void 0 === s
                      ? void 0
                      : s.faq_id,
                    t,
                    e,
                    a,
                  );
                o
                  .then((s) => {
                    1 == s.eResult
                      ? (0, i.z)(() => {
                          this.m_mapStoredDrafts.has(t) ||
                            this.m_mapStoredDrafts.set(t, {}),
                            (this.m_mapStoredDrafts.get(t).title = e),
                            (this.m_mapStoredDrafts.get(t).content = a),
                            (this.m_mapStoredDrafts.get(t).timestamp =
                              s.rtUpdateTime),
                            (this.m_mapStoredDrafts.get(t).author_account_id =
                              p.L7.accountid.toString()),
                            (this.m_mapLocalUpdates.get(t).strTitle = null),
                            (this.m_mapLocalUpdates.get(t).strContent = null);
                          let r = !1;
                          this.m_summary.per_language_info.forEach((e) => {
                            t == e.language &&
                              ((r = !0),
                              (e.last_update_timestamp = Math.max(
                                e.last_update_timestamp,
                                s.rtUpdateTime,
                              )));
                          }),
                            r ||
                              this.m_summary.per_language_info.push({
                                language: t,
                                last_update_timestamp: s.rtUpdateTime,
                              });
                        })
                      : 1 == r &&
                        (console.error(
                          "FAQModel.SaveDraft: Response not ok " + s.eResult,
                          s,
                        ),
                        (r = s.eResult));
                  })
                  .catch((t) => {
                    console.error(
                      "FAQModel.SaveDrafts: Hit error " +
                        (0, _.l)(t).strErrorMsg,
                    ),
                      1 == r && (r = 2);
                  }),
                  n.push(o);
              }
            return yield Promise.all(n), r;
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
        GetDraftTitleWithFallback(t, e = d.IN.k_ESteamRealmGlobal) {
          var a, r, s, n, o, i;
          const l = e == d.IN.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (i =
              null !==
                (n =
                  null !==
                    (r =
                      null !== (a = this.m_mapLocalUpdates.get(t).strTitle) &&
                      void 0 !== a
                        ? a
                        : this.m_mapLocalUpdates.get(l).strTitle) &&
                  void 0 !== r
                    ? r
                    : null === (s = this.m_mapStoredDrafts.get(t)) ||
                        void 0 === s
                      ? void 0
                      : s.title) && void 0 !== n
                ? n
                : null === (o = this.m_mapStoredDrafts.get(l)) || void 0 === o
                  ? void 0
                  : o.title) && void 0 !== i
            ? i
            : "";
        }
        GetDraftContentWithFallback(t, e = d.IN.k_ESteamRealmGlobal) {
          var a, r, s, n, o, i;
          const l = e == d.IN.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (i =
              null !==
                (n =
                  null !==
                    (r =
                      null !== (a = this.m_mapLocalUpdates.get(t).strContent) &&
                      void 0 !== a
                        ? a
                        : this.m_mapLocalUpdates.get(l).strContent) &&
                  void 0 !== r
                    ? r
                    : null === (s = this.m_mapStoredDrafts.get(t)) ||
                        void 0 === s
                      ? void 0
                      : s.content) && void 0 !== n
                ? n
                : null === (o = this.m_mapStoredDrafts.get(l)) || void 0 === o
                  ? void 0
                  : o.content) && void 0 !== i
            ? i
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
              t.push(d.IN.k_ESteamRealmGlobal),
            this.m_summary.visible_in_global_realm &&
              t.push(d.IN.k_ESteamRealmChina),
            0 == t.length && t.push(d.IN.k_ESteamRealmGlobal),
            (0, u.X)(
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
      (0, r.gn)([i.LO], h.prototype, "m_mapLocalUpdates", void 0),
        (0, r.gn)([c.a], h.prototype, "BHasSomeTextForLanguage", null),
        (0, r.gn)([c.a], h.prototype, "GetLastTimeLanguageUpdated", null);
      var f = a(77581),
        g = a(10309);
      class A {
        static Get() {
          return A.s_Singleton || (A.s_Singleton = new A()), A.s_Singleton;
        }
        static Init(t) {
          A.Get().m_steamInterface = t;
        }
        constructor() {
          (this.m_mapFAQSummaries = new Map()),
            (this.m_mapFAQPublishedContent = new Map()),
            (this.m_mapFAQDrafts = new Map()),
            (this.m_bHasFAQEdit = !1),
            (this.m_steamInterface = null),
            (0, i.rC)(this),
            "dev" == p.De.WEB_UNIVERSE && (window.g_FAQStore = this),
            p.De.IN_STEAMUI ||
              (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
        }
        SetUpWebAPIInterface() {
          const t = (0, p.kQ)("faqstore", "application_config"),
            e = null == t ? void 0 : t.webapi_token;
          this.m_steamInterface = new f.J(p.De.WEBAPI_BASE_URL, e);
        }
        ReadInitialPayload() {
          const t = (0, p.kQ)("faqstore", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
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
                const r = new Map();
                for (const t of a.draft) r.set(t.language, t);
                this.m_mapFAQDrafts.set(
                  e,
                  new h(this.m_mapFAQSummaries.get(e), r),
                );
              }
            if (t.allfaqs)
              for (const e of t.allfaqs)
                e.faq_id &&
                  (this.m_mapFAQSummaries.has(e.faq_id) ||
                    this.m_mapFAQSummaries.set(e.faq_id, e));
            this.m_bHasFAQEdit = Boolean(t.has_faq_edit);
          } else
            "dev" == p.De.WEB_UNIVERSE &&
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            const e = m.gA.Init(g.jV);
            e.Body().set_steamid(p.JA.CLANSTEAMID),
              e.Body().set_internal_name(t);
            let a,
              r = 2;
            try {
              const s = yield g.KF.Create(
                this.m_steamInterface.GetServiceTransport(),
                e,
              );
              if (((r = s.GetEResult()), 1 == r)) {
                a = s.Body().faq_id();
                const e = { faq_id: a, internal_name: t };
                this.m_mapFAQSummaries.set(a, e);
              } else
                console.error("FAQStore.CreateFAQ: Create request failed:", r);
            } catch (t) {
              const e = (0, _.l)(t);
              console.error(
                "FAQStore.CreateFAQ: caught error " + e.strErrorMsg,
                e,
              );
            }
            return { eResult: r, strFaqId: a };
          });
        }
        UpdateDraft(t, e, a, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r = m.gA.Init(g.Go);
            r.Body().set_steamid(p.JA.CLANSTEAMID),
              r.Body().set_faq_id(t),
              r.Body().set_language(e),
              r.Body().set_content(s),
              r.Body().set_title(a);
            let n = 2,
              o = 0;
            try {
              const t = yield g.KF.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                r,
              );
              (n = t.GetEResult()),
                1 != n
                  ? console.error("FAQStore.UpdateDraft request failed:", n)
                  : (o = t.Body().last_update_timestamp());
            } catch (t) {
              const e = (0, _.l)(t);
              console.error(
                "FAQStore.UpdateDraft: caught error " + e.strErrorMsg,
                e,
              );
            }
            return { eResult: n, rtUpdateTime: o };
          });
        }
        UpdateJsonData(t, e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const a = JSON.stringify(e),
              r = m.gA.Init(g.F2);
            r.Body().set_steamid(p.JA.CLANSTEAMID),
              r.Body().set_faq_id(t),
              r.Body().set_json_data(a);
            let s = 2;
            try {
              (s = (yield g.KF.UpdateJsonData(
                this.m_steamInterface.GetServiceTransport(),
                r,
              )).GetEResult()),
                1 != s
                  ? console.error("FAQStore.UpdateJsonData request failed:", s)
                  : (this.m_mapFAQSummaries.get(t).json_data = a);
            } catch (t) {
              const e = (0, _.l)(t);
              console.error(
                "FAQStore.UpdateJsonData: caught error " + e.strErrorMsg,
                e,
              );
            }
            return s;
          });
        }
        GetFAQVersion(t, e, a) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r = m.gA.Init(g.dp);
            r.Body().set_steamid(p.JA.CLANSTEAMID),
              r.Body().set_faq_id(t),
              r.Body().set_version(e),
              r.Body().set_language(a);
            try {
              const t = yield g.KF.GetFAQVersion(
                  this.m_steamInterface.GetServiceTransport(),
                  r,
                ),
                e = t.GetEResult();
              if (1 == e) return t.Body().faq().toObject();
              console.error("FAQStore.GetFAQVersion request failed:", e);
            } catch (t) {
              const e = (0, _.l)(t);
              console.error(
                "FAQStore.GetFAQVersion: caught error " + e.strErrorMsg,
                e,
              );
            }
            return null;
          });
        }
        DeleteFAQ(t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const e = m.gA.Init(g.$H);
            e.Body().set_steamid(p.JA.CLANSTEAMID), e.Body().set_faq_id(t);
            let a = 2;
            try {
              (a = (yield g.KF.Delete(
                this.m_steamInterface.GetServiceTransport(),
                e,
              )).GetEResult()),
                1 != a
                  ? console.error("FAQStore.DeleteFAQ request failed:", a)
                  : (this.m_mapFAQDrafts.delete(t),
                    this.m_mapFAQPublishedContent.delete(t),
                    this.m_mapFAQSummaries.delete(t));
            } catch (t) {
              const e = (0, _.l)(t);
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
          let r = a.get(e);
          return (
            !r &&
              A.sm_mapFallbackLanguages.has(e) &&
              (r = a.get(A.sm_mapFallbackLanguages.get(e))),
            r || 0 == e || (0, p.h4)() || (r = a.get(0)),
            r
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.m_mapFAQDrafts.has(t)) return this.m_mapFAQDrafts.get(t);
            const e = m.gA.Init(g.hU);
            e.Body().set_steamid(p.JA.CLANSTEAMID), e.Body().set_faq_id(t);
            let a = 2;
            try {
              const r = yield g.KF.GetAllDrafts(
                this.m_steamInterface.GetServiceTransport(),
                e,
              );
              if (((a = r.GetEResult()), 1 != a))
                return (
                  console.error(
                    "FaqStore.LoadFAQDraftContent request failed:",
                    a,
                  ),
                  null
                );
              {
                const e = r.Body().summary().toObject();
                this.m_mapFAQSummaries.set(t, e);
                const a = new Map();
                r.Body()
                  .draft()
                  .forEach((t) => a.set(t.language(), t.toObject()));
                const s = new h(this.m_mapFAQSummaries.get(t), a);
                return this.m_mapFAQDrafts.set(t, s), s;
              }
            } catch (t) {
              const e = (0, _.l)(t);
              console.error(
                "FaqStore.LoadFAQDraftContent: exception " + e.strErrorMsg,
                e,
              );
            }
            return null;
          });
        }
        UpdateVisibility(t, e, a) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r = m.gA.Init(g.tv);
            r.Body().set_steamid(p.JA.CLANSTEAMID),
              r.Body().set_faq_id(t),
              r.Body().set_visible_in_global_realm(e),
              r.Body().set_visible_in_china_realm(a);
            let s = 2;
            try {
              if (
                ((s = (yield g.KF.SetVisibility(
                  this.m_steamInterface.GetServiceTransport(),
                  r,
                )).GetEResult()),
                1 === s)
              ) {
                const r = this.m_mapFAQSummaries.get(t);
                r &&
                  ((r.visible_in_global_realm = e),
                  (r.visible_in_china_realm = a),
                  this.m_mapFAQSummaries.set(t, r));
              } else console.error("FaqStore.UpdateVisibility: Failed " + s);
            } catch (t) {
              const e = (0, _.l)(t);
              console.error(
                "FaqStore.UpdateVisibility: exception " + e.strErrorMsg,
                e,
              );
            }
            return s;
          });
        }
        PublishDraftByLanguage(t, e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const a = m.gA.Init(g.SU);
            a.Body().set_steamid(p.JA.CLANSTEAMID),
              a.Body().set_faq_id(t),
              e.forEach((t) => a.Body().add_language(t));
            let r = 2;
            try {
              const s = yield g.KF.PublishDraft(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (((r = s.GetEResult()), 1 === r)) {
                const a = this.m_mapFAQSummaries.get(t);
                a &&
                  (0, i.z)(() => {
                    this.m_mapFAQPublishedContent.has(t) ||
                      this.m_mapFAQPublishedContent.set(t, new Map()),
                      a.per_language_info.forEach((a) => {
                        var r;
                        const n = a.language;
                        if (e.indexOf(n) >= 0) {
                          a.last_publish_timestamp = Math.max(
                            a.last_publish_timestamp,
                            s.Body().last_publish_timestamp(),
                          );
                          const e =
                            null === (r = this.m_mapFAQDrafts.get(t)) ||
                            void 0 === r
                              ? void 0
                              : r.GetLastSavedDraftVersion(n);
                          this.m_mapFAQPublishedContent.get(t).set(n, e);
                        }
                      });
                  });
              } else
                console.error("FaqStore.PublishDraftByLanguage: Failed " + r);
            } catch (t) {
              const e = (0, _.l)(t);
              console.error(
                "FaqStore.PublishDraftByLanguage: exception " + e.strErrorMsg,
                e,
              );
            }
            return r;
          });
        }
        UpdateInternalName(t, e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const a = m.gA.Init(g.sL);
            a.Body().set_steamid(p.JA.CLANSTEAMID),
              a.Body().set_faq_id(t),
              a.Body().set_internal_name(e);
            let r = 2;
            try {
              (r = (yield g.KF.UpdateInternalName(
                this.m_steamInterface.GetServiceTransport(),
                a,
              )).GetEResult()),
                1 === r
                  ? (0, i.z)(() => {
                      var a, r, s;
                      (null === (a = this.m_mapFAQSummaries.get(t)) ||
                      void 0 === a
                        ? void 0
                        : a.internal_name) &&
                        (this.m_mapFAQSummaries.get(t).internal_name = e),
                        (null ===
                          (s =
                            null === (r = this.m_mapFAQDrafts.get(t)) ||
                            void 0 === r
                              ? void 0
                              : r.GetSummary()) || void 0 === s
                          ? void 0
                          : s.internal_name) &&
                          (this.m_mapFAQDrafts
                            .get(t)
                            .GetSummary().internal_name = e);
                    })
                  : console.error("FaqStore.UpdateInternalName: Failed " + r);
            } catch (t) {
              const e = (0, _.l)(t);
              console.error(
                "FaqStore.UpdateInternalName: exception " + e.strErrorMsg,
                e,
              );
            }
            return r;
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            const e =
              p.De.COMMUNITY_BASE_URL +
              "faqs/" +
              p.JA.VANITY_ID +
              "/ajaxpushtocrowdin/" +
              F(t);
            yield n().get(e);
          });
        }
        ImportNonEnglishDraftsFromCrowdin(t, e, a) {
          var s, o;
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r =
                p.De.COMMUNITY_BASE_URL +
                "faqs/" +
                p.JA.VANITY_ID +
                "/ajaxpullfromcrowdin/" +
                F(t),
              i = new FormData();
            i.append("sessionid", p.De.SESSIONID),
              i.append("languages", e.join(","));
            let l = null;
            try {
              const e = yield n().post(r, i, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (s = e.data) || void 0 === s ? void 0 : s.success)
              ) {
                const a = e.data.updated,
                  r =
                    null !== (o = null == a ? void 0 : a[t]) && void 0 !== o
                      ? o
                      : [];
                return (
                  r.length > 0 &&
                    (this.m_mapFAQSummaries.has(t) ||
                      this.m_mapFAQDrafts.has(t)) &&
                    (this.m_mapFAQDrafts.delete(t),
                    yield this.LoadFAQDraftContent(t)),
                  r
                );
              }
              l = { response: e };
            } catch (t) {
              l = t;
            }
            const m = (0, _.l)(l);
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
              (t) => 0 == t.language && t.last_publish_timestamp > 0,
            );
        }
        GetNonEnglishDraftsToPublish(t) {
          return this.m_mapFAQSummaries
            .get(t)
            .per_language_info.filter((t) => {
              var e;
              return (
                0 != t.language &&
                t.last_update_timestamp >
                  (null !== (e = t.last_publish_timestamp) && void 0 !== e
                    ? e
                    : 0)
              );
            })
            .map((t) => t.language);
        }
      }
      (A.sm_mapFallbackLanguages = new Map([
        [5, 27],
        [27, 5],
        [29, 6],
      ])),
        (0, r.gn)([i.LO], A.prototype, "m_mapFAQSummaries", void 0),
        (0, r.gn)([i.aD], A.prototype, "RemoveAllDirtyDrafts", null);
      const v = /^[0-9a-fA-F]+$/;
      function S(t) {
        const e = null == t ? void 0 : t.replace(/-/g, "");
        if (16 != (null == e ? void 0 : e.length) || !v.test(e)) return null;
        return o.Z.fromString(e, !0, 16).toString();
      }
      function F(t) {
        const e = ("0000000000000000" + o.Z.fromString(t, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${e.slice(0, 4)}-${e.slice(4, 8)}-${e.slice(8, 12)}-${e.slice(12, 16)}`;
      }
      function y(t, e) {
        return [t && A.Get().GetFAQPublishedContent(t, e), !0];
      }
      function D(t) {
        const [e, a] = l.useState(A.Get().GetFAQDraftContent(t)),
          [r, s] = l.useState(!!e);
        return (
          (0, l.useEffect)(() => {
            A.Get()
              .LoadFAQDraftContent(t)
              .then((t) => a(t))
              .finally(() => s(!0));
          }, [t]),
          [e, r]
        );
      }
      function Q(t) {
        return [A.Get().GetFAQArticleSummary(t), !0];
      }
      function E() {
        const t = A.Get().GetAllFAQSummaries();
        return l.useRef([t, !0]).current;
      }
      function G(t, e, a) {
        const [r, s] = l.useState(null),
          [n, o] = l.useState(!1);
        return (
          (0, l.useEffect)(() => {
            A.Get().BHasFAQEdit() &&
              A.Get()
                .GetFAQVersion(t, e, a)
                .then((t) => s(t))
                .finally(() => o(!0));
          }, [t, e, a]),
          [r, n]
        );
      }
    },
  },
]);
