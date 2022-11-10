/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5821],
  {
    20893: (e) => {
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
    34425: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => _ });
      var s = r(70655),
        i = r(67294),
        n = r(7707),
        a = r(27745),
        o = r(64839),
        c = r(90666),
        l = r(9198);
      function _(e) {
        const { children: t, navTreeRef: r } = e,
          _ = (0, s._T)(e, ["children", "navTreeRef"]),
          m = i.useRef(),
          u = (0, o.BE)(m, r),
          f = (0, c.id)(),
          y = window.__virtual_keyboard_client;
        if (
          ((0, i.useEffect)(() => {
            l.Wz.SetHookFactory(() => y);
          }, [y]),
          f)
        ) {
          const e = window.__nav_tree_root;
          return i.createElement(
            n.Fe,
            Object.assign({}, _, {
              navTreeRef: u,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.createElement(a.O, null, t)
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    86531: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { AccountPreferencesRoutes: () => G, default: () => F });
      var s = r(67294),
        i = r(78587),
        n = r(70655),
        a = r(9669),
        o = r.n(a),
        c = r(22188),
        l = (r(26149), r(93976), r(90666)),
        _ = r(33019),
        m = r(40110);
      const u = _.Message;
      class f extends u {
        constructor(e = null) {
          super(),
            f.prototype.version || m.aR(f.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  version: { n: 1, br: m.FE.readEnum, bw: m.Xc.writeEnum },
                  preference_state: {
                    n: 2,
                    br: m.FE.readEnum,
                    bw: m.Xc.writeEnum,
                  },
                  content_customization: { n: 3, c: y },
                  valve_analytics: { n: 4, c: d },
                  third_party_analytics: { n: 5, c: g },
                  third_party_content: { n: 6, c: h },
                  utm_enabled: {
                    n: 7,
                    d: !0,
                    br: m.FE.readBool,
                    bw: m.Xc.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = m.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return m.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return m.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences";
        }
      }
      class y extends u {
        constructor(e = null) {
          super(),
            y.prototype.recentapps || m.aR(y.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  recentapps: { n: 1, br: m.FE.readBool, bw: m.Xc.writeBool },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = m.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return m.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ContentCustomization";
        }
      }
      class d extends u {
        constructor(e = null) {
          super(),
            d.prototype.product_impressions_tracking || m.aR(d.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  product_impressions_tracking: {
                    n: 1,
                    br: m.FE.readBool,
                    bw: m.Xc.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = m.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return m.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return m.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ValveAnalytics";
        }
      }
      class g extends u {
        constructor(e = null) {
          super(),
            g.prototype.google_analytics || m.aR(g.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  google_analytics: {
                    n: 1,
                    br: m.FE.readBool,
                    bw: m.Xc.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = m.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return m.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return m.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
        }
      }
      class h extends u {
        constructor(e = null) {
          super(),
            h.prototype.youtube || m.aR(h.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  youtube: { n: 1, br: m.FE.readBool, bw: m.Xc.writeBool },
                  vimeo: { n: 2, br: m.FE.readBool, bw: m.Xc.writeBool },
                  sketchfab: { n: 3, br: m.FE.readBool, bw: m.Xc.writeBool },
                  twitter: { n: 4, br: m.FE.readBool, bw: m.Xc.writeBool },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = m.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return m.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return m.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
        }
      }
      class p extends u {
        constructor(e = null) {
          super(),
            p.prototype.preferences || m.aR(p.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = { proto: p, fields: { preferences: { n: 1, c: f } } }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = m.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return m.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return m.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
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
      var k = r(41311);
      class B {
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
              ((this.m_Preferences.valve_analytics.product_impressions_tracking =
                !0),
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
                (this.m_Preferences.valve_analytics.product_impressions_tracking =
                  t);
            }
            this.PostCookieSettings();
          }
        }
        GetRecentApps() {
          return this.m_Preferences.content_customization.recentapps;
        }
        ToggleRecentApps() {
          (this.m_Preferences.content_customization.recentapps =
            !this.m_Preferences.content_customization.recentapps),
            this.ProcessToggle();
        }
        GetImpressions() {
          return this.m_Preferences.valve_analytics
            .product_impressions_tracking;
        }
        ToggleImpressions() {
          (this.m_Preferences.valve_analytics.product_impressions_tracking =
            !this.m_Preferences.valve_analytics.product_impressions_tracking),
            this.ProcessToggle();
        }
        GetGoogleAnalytics() {
          return this.m_Preferences.third_party_analytics.google_analytics;
        }
        ToggleGoogleAnalytics() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            (this.m_Preferences.third_party_analytics.google_analytics =
              !this.m_Preferences.third_party_analytics.google_analytics),
              this.ProcessToggle();
          });
        }
        GetSketchfab() {
          return this.m_Preferences.third_party_content.sketchfab;
        }
        ToggleSketchfab() {
          (this.m_Preferences.third_party_content.sketchfab =
            !this.m_Preferences.third_party_content.sketchfab),
            this.ProcessToggle();
        }
        GetVimeo() {
          return this.m_Preferences.third_party_content.vimeo;
        }
        ToggleVimeo() {
          (this.m_Preferences.third_party_content.vimeo =
            !this.m_Preferences.third_party_content.vimeo),
            this.ProcessToggle();
        }
        GetYouTube() {
          return this.m_Preferences.third_party_content.youtube;
        }
        ToggleYouTube() {
          (this.m_Preferences.third_party_content.youtube =
            !this.m_Preferences.third_party_content.youtube),
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            const r = l.De.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              s = new FormData();
            s.set("sessionid", l.De.SESSIONID),
              s.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let i = yield o().post(r, s, { withCredentials: !0 });
              if (
                200 != i.status ||
                1 !=
                  (null === (e = null == i ? void 0 : i.data) || void 0 === e
                    ? void 0
                    : e.success)
              )
                window.ShowAlertDialog(
                  (0, k.Xx)("#CookiePref_Error"),
                  (0, k.Xx)("#CookiePref_ErrorNotSaved")
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
                  (0, k.Xx)("#CookiePref_Error"),
                  (0, k.Xx)("#CookiePref_ErrorNotSaved")
                );
            }
          });
        }
        TransferCookiePreferencesToSites(e, t) {
          const r = new FormData();
          r.set("transfer_params", t);
          for (const t of e) o().post(t, r);
        }
      }
      (0, n.gn)([c.LO], B.prototype, "m_Preferences", void 0);
      var C = r(29323),
        b = r(48341),
        v = r(20893),
        T = r(7573),
        E = r(35921),
        N = r(71174),
        S = r(34425),
        w = r(7707);
      let z;
      const M = (0, C.Pi)(() => {
          let e = (function () {
            if (!z) {
              let e = (0, l.kQ)("cookiepreferences", "application_config");
              z = new B(e);
            }
            return z;
          })();
          const t = (0, N.L)(),
            r = (0, s.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            i = (0, s.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return s.createElement(
            S.p,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            s.createElement(
              "div",
              {
                className: (0, T.Z)(
                  v.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.createElement(
                "div",
                null,
                (0, k.Xx)("#CookiePref_OptionalCookies_Title")
              )
            ),
            s.createElement(
              "div",
              { className: "account_settings_container" },
              s.createElement(
                E.s,
                { "flow-children": "row", className: v.ButtonGroup },
                s.createElement(
                  w.Ks,
                  {
                    className: (0, T.Z)(
                      v.AllButton,
                      e.BIsRejectAll() ? v.ButtonHighlight : ""
                    ),
                    onClick: i,
                  },
                  (0, k.Xx)("#CookiePref_RejectAll")
                ),
                s.createElement(
                  w.Ks,
                  {
                    className: (0, T.Z)(
                      v.AllButton,
                      e.BIsAllowAll() ? v.ButtonHighlight : ""
                    ),
                    onClick: r,
                  },
                  (0, k.Xx)("#CookiePref_AcceptAll")
                )
              ),
              s.createElement(X, { settings: e }),
              s.createElement(x, { settings: e }),
              s.createElement(A, { settings: e }),
              s.createElement(D, { settings: e })
            ),
            s.createElement(
              "div",
              {
                className: (0, T.Z)(
                  v.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.createElement(
                "div",
                null,
                (0, k.Xx)("#CookiePref_TechnicallyNeccesary_Title")
              )
            ),
            s.createElement(
              "div",
              { className: "account_settings_container" },
              s.createElement(
                "p",
                null,
                (0, k.Xx)("#CookiePref_TechnicallyNeccesary_Desc")
              ),
              s.createElement(
                "div",
                { className: v.CookieGroup },
                s.createElement(
                  "div",
                  { className: v.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: v.NecessaryTitle },
                    (0, k.Xx)("#CookiePref_SessionID_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: v.NecessaryDesc },
                    (0, k.Xx)("#CookiePref_SessionID_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: v.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: v.NecessaryTitle },
                    (0, k.Xx)("#CookiePref_ShoppingCart_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: v.NecessaryDesc },
                    (0, k.Xx)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: v.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: v.NecessaryTitle },
                    (0, k.Xx)("#CookiePref_SteamCountry_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: v.NecessaryDesc },
                    (0, k.Xx)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: v.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: v.NecessaryTitle },
                    (0, k.Xx)("#CookiePref_Timezone_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: v.NecessaryDesc },
                    (0, k.Xx)("#CookiePref_Timezone_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: v.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: v.NecessaryTitle },
                    (0, k.Xx)("#CookiePref_BirthTime_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: v.NecessaryDesc },
                    (0, k.Xx)("#CookiePref_BirthTime_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: v.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: v.NecessaryTitle },
                    (0, k.Xx)("#CookiePref_Login_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: v.NecessaryDesc },
                    (0, k.Xx)("#CookiePref_Login_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: v.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: v.NecessaryTitle },
                    (0, k.Xx)("#CookiePref_Language_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: v.NecessaryDesc },
                    (0, k.Xx)("#CookiePref_Language_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: v.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: v.NecessaryTitle },
                    (0, k.Xx)("#CookiePref_CookieSettings_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: v.NecessaryDesc },
                    (0, k.Xx)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            s.createElement(
              "div",
              {
                className: (0, T.Z)(
                  v.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.createElement(
                "div",
                null,
                (0, k.Xx)("#PrivacySettings_Marketing_Header")
              )
            ),
            s.createElement(
              "div",
              { className: "account_settings_container" },
              s.createElement(R, { settings: e })
            ),
            null
          );
        }),
        X = (0, C.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return s.createElement(
            "div",
            { className: v.CookieGroup },
            s.createElement(
              "div",
              { className: v.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, k.Xx)("#CookiePref_Content_Title")
              ),
              s.createElement(
                "p",
                { className: v.SectionDescription },
                (0, k.Xx)("#CookiePref_Content_Desc")
              ),
              s.createElement(b.gE, {
                onChange: r,
                label: (0, k.Xx)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, k.Xx)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        x = (0, C.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return s.createElement(
            "div",
            { className: v.CookieGroup },
            s.createElement(
              "div",
              { className: v.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, k.Xx)("#CookiePref_ValveAnalytics_Title")
              ),
              s.createElement(
                "p",
                { className: v.SectionDescription },
                (0, k.Xx)("#CookiePref_ValveAnalytics_Desc")
              ),
              s.createElement(b.gE, {
                onChange: r,
                label: (0, k.Xx)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, k.Xx)("#CookiePref_ValveAnalytics_ToggleDesc"),
              })
            )
          );
        }),
        A = (0, C.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleGoogleAnalytics();
            }, [t]);
          return s.createElement(
            "div",
            { className: v.CookieGroup },
            s.createElement(
              "div",
              { className: v.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, k.Xx)("#CookiePref_GoogleAnalytics_Title")
              ),
              s.createElement(
                "p",
                { className: v.SectionDescription },
                (0, k.Xx)("#CookiePref_GoogleAnalytics_Desc")
              ),
              s.createElement(b.gE, {
                onChange: r,
                label: (0, k.Xx)("#CookiePref_GoogleAnalytics_ToggleLabel"),
                checked: t.GetGoogleAnalytics(),
                description: (0, k.Xx)(
                  "#CookiePref_GoogleAnalytics_ToggleDesc"
                ),
              })
            )
          );
        }),
        D = (0, C.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            i = (0, s.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            n = (0, s.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return s.createElement(
            "div",
            { className: v.CookieGroup },
            s.createElement(
              "div",
              { className: v.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, k.Xx)("#CookiePref_ThirdParty_Title")
              ),
              s.createElement(
                "p",
                { className: v.SectionDescription },
                (0, k.Xx)("#CookiePref_ThirdParty_Desc")
              ),
              s.createElement(b.gE, {
                onChange: r,
                label: (0, k.Xx)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: (0, k.Xx)("#CookiePref_YouTube_Desc"),
              }),
              s.createElement(b.gE, {
                onChange: i,
                label: (0, k.Xx)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: (0, k.Xx)("#CookiePref_Vimeo_Desc"),
              }),
              s.createElement(b.gE, {
                onChange: n,
                label: (0, k.Xx)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: (0, k.Xx)("#CookiePref_Sketchfab_Desc"),
              })
            )
          );
        }),
        R = (0, C.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return s.createElement(
            "div",
            { className: v.CookieGroup },
            s.createElement(
              "div",
              { className: v.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, k.Xx)("#PrivacySettings_Marketing_Title")
              ),
              s.createElement(
                "p",
                { className: v.SectionDescription },
                (0, k.Xx)("#PrivacySettings_Marketing_Desc")
              ),
              s.createElement(b.gE, {
                onChange: r,
                label: (0, k.Xx)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: (0, k.Xx)("#PrivacySettings_UTM_ToggleDesc"),
              })
            )
          );
        }),
        G = { CookieSettings: () => "/cookiepreferences" },
        F = (e) => {
          const t = e.match.url,
            r = G;
          return s.createElement(
            i.rs,
            null,
            s.createElement(
              i.AW,
              { path: `${t}${r.CookieSettings()}` },
              s.createElement(M, null)
            )
          );
        };
    },
  },
]);
