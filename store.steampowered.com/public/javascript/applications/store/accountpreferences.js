/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    byIC: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "AccountPreferencesRoutes", function () {
          return W;
        });
      var s = r("q1tI"),
        i = r.n(s),
        a = r("EC67"),
        n = r("mrSG"),
        c = r("vDqi"),
        o = r.n(c),
        l = r("2vnA"),
        _ = (r("msu0"), r("TqgT"), r("/Q1a")),
        m = r("hRO2"),
        f = r("3dpo");
      const u = m.Message;
      class d extends u {
        constructor(e = null) {
          super(),
            d.prototype.version || f.a(d.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  version: { n: 1, br: f.d.readEnum, bw: f.h.writeEnum },
                  preference_state: {
                    n: 2,
                    br: f.d.readEnum,
                    bw: f.h.writeEnum,
                  },
                  content_customization: { n: 3, c: y },
                  valve_analytics: { n: 4, c: b },
                  third_party_analytics: { n: 5, c: h },
                  third_party_content: { n: 6, c: g },
                  utm_enabled: {
                    n: 7,
                    d: !0,
                    br: f.d.readBool,
                    bw: f.h.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = f.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return f.g(d.M(), e, t);
        }
        static fromObject(e) {
          return f.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences";
        }
      }
      class y extends u {
        constructor(e = null) {
          super(),
            y.prototype.recentapps || f.a(y.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  recentapps: { n: 1, br: f.d.readBool, bw: f.h.writeBool },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = f.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return f.g(y.M(), e, t);
        }
        static fromObject(e) {
          return f.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ContentCustomization";
        }
      }
      class b extends u {
        constructor(e = null) {
          super(),
            b.prototype.product_impressions_tracking || f.a(b.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  product_impressions_tracking: {
                    n: 1,
                    br: f.d.readBool,
                    bw: f.h.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = f.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return f.g(b.M(), e, t);
        }
        static fromObject(e) {
          return f.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ValveAnalytics";
        }
      }
      class h extends u {
        constructor(e = null) {
          super(),
            h.prototype.google_analytics || f.a(h.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  google_analytics: {
                    n: 1,
                    br: f.d.readBool,
                    bw: f.h.writeBool,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = f.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return f.g(h.M(), e, t);
        }
        static fromObject(e) {
          return f.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
        }
      }
      class g extends u {
        constructor(e = null) {
          super(),
            g.prototype.youtube || f.a(g.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  youtube: { n: 1, br: f.d.readBool, bw: f.h.writeBool },
                  vimeo: { n: 2, br: f.d.readBool, bw: f.h.writeBool },
                  sketchfab: { n: 3, br: f.d.readBool, bw: f.h.writeBool },
                  twitter: { n: 4, br: f.d.readBool, bw: f.h.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = f.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return f.g(g.M(), e, t);
        }
        static fromObject(e) {
          return f.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
        }
      }
      class p extends u {
        constructor(e = null) {
          super(),
            p.prototype.preferences || f.a(p.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = { proto: p, fields: { preferences: { n: 1, c: d } } }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = f.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return f.g(p.M(), e, t);
        }
        static fromObject(e) {
          return f.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Response";
        }
      }
      var P;
      !(function (e) {
        e.GetCookiePreferences = function (e, t) {
          return e.SendMsg("AccountPrivacy.GetCookiePreferences#1", t, p, {
            ePrivilege: 1,
          });
        };
      })(P || (P = {}));
      var k = r("GXif");
      class C {
        constructor(e) {
          (this.m_Preferences = e),
            (this.m_Preferences.content_customization &&
              !Array.isArray(this.m_Preferences.content_customization)) ||
              (this.m_Preferences.content_customization = {}),
            (this.m_Preferences.third_party_analytics &&
              !Array.isArray(this.m_Preferences.third_party_analytics)) ||
              (this.m_Preferences.third_party_analytics = {}),
            (this.m_Preferences.third_party_content &&
              !Array.isArray(this.m_Preferences.third_party_content)) ||
              (this.m_Preferences.third_party_content = {}),
            (this.m_Preferences.valve_analytics &&
              !Array.isArray(this.m_Preferences.valve_analytics)) ||
              (this.m_Preferences.valve_analytics = {}),
            (void 0 !== this.m_Preferences.utm_enabled &&
              null !== this.m_Preferences.utm_enabled) ||
              (this.m_Preferences.utm_enabled = !0),
            (0 != this.m_Preferences.preference_state &&
              1 != this.m_Preferences.preference_state) ||
              ((this.m_Preferences.valve_analytics.product_impressions_tracking = !0),
              (this.m_Preferences.content_customization.recentapps = !0),
              (this.m_Preferences.third_party_analytics.google_analytics = !0),
              (this.m_Preferences.third_party_content.sketchfab = !0),
              (this.m_Preferences.third_party_content.twitter = !0),
              (this.m_Preferences.third_party_content.vimeo = !0),
              (this.m_Preferences.third_party_content.youtube = !0)),
            0 == this.m_Preferences.version && (this.m_Preferences.version = 1);
        }
        GetVersion() {
          return this.m_Preferences.version;
        }
        GetPreferenceState() {
          return this.m_Preferences.preference_state;
        }
        BIsAllowAll() {
          return (
            1 == this.m_Preferences.preference_state ||
            0 == this.m_Preferences.preference_state
          );
        }
        BIsRejectAll() {
          return 2 == this.m_Preferences.preference_state;
        }
        SetPreferenceState(e) {
          if (this.m_Preferences.preference_state != e) {
            if (((this.m_Preferences.preference_state = e), 1 == e || 2 == e)) {
              let t = 1 == e;
              (this.m_Preferences.content_customization.recentapps = t),
                (this.m_Preferences.third_party_analytics.google_analytics = t),
                (this.m_Preferences.third_party_content.sketchfab = t),
                (this.m_Preferences.third_party_content.twitter = t),
                (this.m_Preferences.third_party_content.vimeo = t),
                (this.m_Preferences.third_party_content.youtube = t),
                (this.m_Preferences.valve_analytics.product_impressions_tracking = t);
            }
            this.PostCookieSettings();
          }
        }
        GetRecentApps() {
          return this.m_Preferences.content_customization.recentapps;
        }
        ToggleRecentApps() {
          (this.m_Preferences.content_customization.recentapps = !this
            .m_Preferences.content_customization.recentapps),
            this.ProcessToggle();
        }
        GetImpressions() {
          return this.m_Preferences.valve_analytics
            .product_impressions_tracking;
        }
        ToggleImpressions() {
          (this.m_Preferences.valve_analytics.product_impressions_tracking = !this
            .m_Preferences.valve_analytics.product_impressions_tracking),
            this.ProcessToggle();
        }
        GetGoogleAnalytics() {
          return this.m_Preferences.third_party_analytics.google_analytics;
        }
        ToggleGoogleAnalytics() {
          return Object(n.a)(this, void 0, void 0, function* () {
            (this.m_Preferences.third_party_analytics.google_analytics = !this
              .m_Preferences.third_party_analytics.google_analytics),
              this.ProcessToggle();
          });
        }
        GetSketchfab() {
          return this.m_Preferences.third_party_content.sketchfab;
        }
        ToggleSketchfab() {
          (this.m_Preferences.third_party_content.sketchfab = !this
            .m_Preferences.third_party_content.sketchfab),
            this.ProcessToggle();
        }
        GetVimeo() {
          return this.m_Preferences.third_party_content.vimeo;
        }
        ToggleVimeo() {
          (this.m_Preferences.third_party_content.vimeo = !this.m_Preferences
            .third_party_content.vimeo),
            this.ProcessToggle();
        }
        GetYouTube() {
          return this.m_Preferences.third_party_content.youtube;
        }
        ToggleYouTube() {
          (this.m_Preferences.third_party_content.youtube = !this.m_Preferences
            .third_party_content.youtube),
            this.ProcessToggle();
        }
        GetUTMEnabled() {
          return this.m_Preferences.utm_enabled;
        }
        ToggleUTMEnabled() {
          (this.m_Preferences.utm_enabled = !this.m_Preferences.utm_enabled),
            this.PostCookieSettings();
        }
        ProcessToggle() {
          (this.m_Preferences.preference_state = 3), this.PostCookieSettings();
        }
        PostCookieSettings() {
          var e, t;
          return Object(n.a)(this, void 0, void 0, function* () {
            const r = _.d.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              s = new FormData();
            s.set("sessionid", _.d.SESSIONID),
              s.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let i = yield o.a.post(r, s, { withCredentials: !0 });
              if (
                200 != i.status ||
                1 !=
                  (null === (e = null == i ? void 0 : i.data) || void 0 === e
                    ? void 0
                    : e.success)
              )
                window.ShowAlertDialog(
                  Object(k.f)("#CookiePref_Error"),
                  Object(k.f)("#CookiePref_ErrorNotSaved")
                );
              else if (
                1 ==
                (null === (t = null == i ? void 0 : i.data) || void 0 === t
                  ? void 0
                  : t.success)
              ) {
                0;
                const { transfer_urls: e, transfer_params: t } = i.data;
                e && t && this.TransferCookiePreferencesToSites(e, t);
              }
            } catch (e) {
              0,
                window.ShowAlertDialog(
                  Object(k.f)("#CookiePref_Error"),
                  Object(k.f)("#CookiePref_ErrorNotSaved")
                );
            }
          });
        }
        TransferCookiePreferencesToSites(e, t) {
          const r = new FormData();
          r.set("transfer_params", t);
          for (const t of e) o.a.post(t, r);
        }
      }
      Object(n.b)([l.C], C.prototype, "m_Preferences", void 0);
      var B = r("TyAF"),
        v = r("7ast"),
        T = r("nNQW"),
        O = r("GbHM"),
        j = r("Lsvi"),
        N = r("Sn0s"),
        E = r("lo3/"),
        S = r("fsrB");
      let w;
      const z = Object(B.a)(() => {
          let e = (function () {
            if (!w) {
              let e = Object(_.h)("cookiepreferences", "application_config");
              w = new C(e);
            }
            return w;
          })();
          const t = Object(N.a)(),
            r = Object(s.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            a = Object(s.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return i.a.createElement(
            E.a,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            i.a.createElement(
              "div",
              {
                className: Object(O.a)(
                  T.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.a.createElement(
                "div",
                null,
                Object(k.f)("#CookiePref_OptionalCookies_Title")
              )
            ),
            i.a.createElement(
              "div",
              { className: "account_settings_container" },
              i.a.createElement(
                j.a,
                { "flow-children": "row", className: T.ButtonGroup },
                i.a.createElement(
                  S.e,
                  {
                    className: Object(O.a)(
                      T.AllButton,
                      e.BIsRejectAll() ? T.ButtonHighlight : ""
                    ),
                    onClick: a,
                  },
                  Object(k.f)("#CookiePref_RejectAll")
                ),
                i.a.createElement(
                  S.e,
                  {
                    className: Object(O.a)(
                      T.AllButton,
                      e.BIsAllowAll() ? T.ButtonHighlight : ""
                    ),
                    onClick: r,
                  },
                  Object(k.f)("#CookiePref_AcceptAll")
                )
              ),
              i.a.createElement(M, { settings: e }),
              i.a.createElement(A, { settings: e }),
              i.a.createElement(G, { settings: e }),
              i.a.createElement(D, { settings: e })
            ),
            i.a.createElement(
              "div",
              {
                className: Object(O.a)(
                  T.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.a.createElement(
                "div",
                null,
                Object(k.f)("#CookiePref_TechnicallyNeccesary_Title")
              )
            ),
            i.a.createElement(
              "div",
              { className: "account_settings_container" },
              i.a.createElement(
                "p",
                null,
                Object(k.f)("#CookiePref_TechnicallyNeccesary_Desc")
              ),
              i.a.createElement(
                "div",
                { className: T.CookieGroup },
                i.a.createElement(
                  "div",
                  { className: T.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryTitle },
                    Object(k.f)("#CookiePref_SessionID_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryDesc },
                    Object(k.f)("#CookiePref_SessionID_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: T.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryTitle },
                    Object(k.f)("#CookiePref_ShoppingCart_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryDesc },
                    Object(k.f)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: T.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryTitle },
                    Object(k.f)("#CookiePref_SteamCountry_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryDesc },
                    Object(k.f)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: T.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryTitle },
                    Object(k.f)("#CookiePref_Timezone_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryDesc },
                    Object(k.f)("#CookiePref_Timezone_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: T.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryTitle },
                    Object(k.f)("#CookiePref_BirthTime_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryDesc },
                    Object(k.f)("#CookiePref_BirthTime_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: T.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryTitle },
                    Object(k.f)("#CookiePref_Login_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryDesc },
                    Object(k.f)("#CookiePref_Login_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: T.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryTitle },
                    Object(k.f)("#CookiePref_Language_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryDesc },
                    Object(k.f)("#CookiePref_Language_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: T.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryTitle },
                    Object(k.f)("#CookiePref_CookieSettings_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: T.NecessaryDesc },
                    Object(k.f)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            i.a.createElement(
              "div",
              {
                className: Object(O.a)(
                  T.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.a.createElement(
                "div",
                null,
                Object(k.f)("#PrivacySettings_Marketing_Header")
              )
            ),
            i.a.createElement(
              "div",
              { className: "account_settings_container" },
              i.a.createElement(R, { settings: e })
            ),
            null
          );
        }),
        M = Object(B.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return i.a.createElement(
            "div",
            { className: T.CookieGroup },
            i.a.createElement(
              "div",
              { className: T.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_Content_Title")
              ),
              i.a.createElement(
                "p",
                { className: T.SectionDescription },
                Object(k.f)("#CookiePref_Content_Desc")
              ),
              i.a.createElement(v.J, {
                onChange: r,
                label: Object(k.f)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: Object(k.f)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        A = Object(B.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return i.a.createElement(
            "div",
            { className: T.CookieGroup },
            i.a.createElement(
              "div",
              { className: T.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_ValveAnalytics_Title")
              ),
              i.a.createElement(
                "p",
                { className: T.SectionDescription },
                Object(k.f)("#CookiePref_ValveAnalytics_Desc")
              ),
              i.a.createElement(v.J, {
                onChange: r,
                label: Object(k.f)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: Object(k.f)(
                  "#CookiePref_ValveAnalytics_ToggleDesc"
                ),
              })
            )
          );
        }),
        G = Object(B.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleGoogleAnalytics();
            }, [t]);
          return i.a.createElement(
            "div",
            { className: T.CookieGroup },
            i.a.createElement(
              "div",
              { className: T.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_GoogleAnalytics_Title")
              ),
              i.a.createElement(
                "p",
                { className: T.SectionDescription },
                Object(k.f)("#CookiePref_GoogleAnalytics_Desc")
              ),
              i.a.createElement(v.J, {
                onChange: r,
                label: Object(k.f)("#CookiePref_GoogleAnalytics_ToggleLabel"),
                checked: t.GetGoogleAnalytics(),
                description: Object(k.f)(
                  "#CookiePref_GoogleAnalytics_ToggleDesc"
                ),
              })
            )
          );
        }),
        D = Object(B.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            a = Object(s.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            n = Object(s.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return i.a.createElement(
            "div",
            { className: T.CookieGroup },
            i.a.createElement(
              "div",
              { className: T.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_ThirdParty_Title")
              ),
              i.a.createElement(
                "p",
                { className: T.SectionDescription },
                Object(k.f)("#CookiePref_ThirdParty_Desc")
              ),
              i.a.createElement(v.J, {
                onChange: r,
                label: Object(k.f)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: Object(k.f)("#CookiePref_YouTube_Desc"),
              }),
              i.a.createElement(v.J, {
                onChange: a,
                label: Object(k.f)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: Object(k.f)("#CookiePref_Vimeo_Desc"),
              }),
              i.a.createElement(v.J, {
                onChange: n,
                label: Object(k.f)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: Object(k.f)("#CookiePref_Sketchfab_Desc"),
              })
            )
          );
        }),
        R = Object(B.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return i.a.createElement(
            "div",
            { className: T.CookieGroup },
            i.a.createElement(
              "div",
              { className: T.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#PrivacySettings_Marketing_Title")
              ),
              i.a.createElement(
                "p",
                { className: T.SectionDescription },
                Object(k.f)("#PrivacySettings_Marketing_Desc")
              ),
              i.a.createElement(v.J, {
                onChange: r,
                label: Object(k.f)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: Object(k.f)("#PrivacySettings_UTM_ToggleDesc"),
              })
            )
          );
        }),
        W = { CookieSettings: () => "/cookiepreferences" };
      t.default = (e) => {
        const t = e.match.url,
          r = W;
        return i.a.createElement(
          a.d,
          null,
          i.a.createElement(
            a.b,
            { path: `${t}${r.CookieSettings()}` },
            i.a.createElement(z, null)
          )
        );
      };
    },
    "lo3/": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return _;
      });
      var s = r("mrSG"),
        i = r("q1tI"),
        a = r.n(i),
        n = r("fsrB"),
        c = r("ez+p"),
        o = r("hCpY"),
        l = r("/Q1a");
      function _(e) {
        const { children: t, navTreeRef: r } = e,
          i = Object(s.c)(e, ["children", "navTreeRef"]),
          _ = a.a.useRef(),
          m = Object(o.g)(_, r);
        if (l.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return a.a.createElement(
            n.b,
            Object.assign({}, i, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            a.a.createElement(c.a, null, t)
          );
        }
        return a.a.createElement(a.a.Fragment, null, t);
      }
    },
    nNQW: function (e, t, r) {
      e.exports = {
        AllButton: "cookiesettings_AllButton_24Y_0",
        ButtonHighlight: "cookiesettings_ButtonHighlight_3OVHZ",
        CookieSettingsHeader: "cookiesettings_CookieSettingsHeader_3R3ii",
        ButtonGroup: "cookiesettings_ButtonGroup_YPn6V",
        CookieGroup: "cookiesettings_CookieGroup_25H3q",
        CookieSection: "cookiesettings_CookieSection_3IKt4",
        SectionDescription: "cookiesettings_SectionDescription_GA-wF",
        NecessaryGroup: "cookiesettings_NecessaryGroup_24o8c",
        NecessaryTitle: "cookiesettings_NecessaryTitle_3if8Z",
        NecessaryDesc: "cookiesettings_NecessaryDesc_9NmWi",
      };
    },
  },
]);
