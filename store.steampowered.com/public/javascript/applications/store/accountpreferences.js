/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5821],
  {
    65841: (e) => {
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
    17560: (e) => {
      e.exports = {
        NotificationSettingsHeader:
          "notificationsettings_NotificationSettingsHeader_2XOzk",
        SectionDescription: "notificationsettings_SectionDescription_3K5HB",
        NotificationGroup: "notificationsettings_NotificationGroup_1_kCY",
        NotificationSection: "notificationsettings_NotificationSection_3Sbby",
        NotificationFeedToggle:
          "notificationsettings_NotificationFeedToggle_30Nc3",
        NotificationDescription:
          "notificationsettings_NotificationDescription_3FSzS",
        NotificationPrefDetails:
          "notificationsettings_NotificationPrefDetails_152HT",
        PrefDetailsToggle: "notificationsettings_PrefDetailsToggle_3XAMD",
        Selected: "notificationsettings_Selected_3yrEI",
      };
    },
    66294: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => m });
      var i = r(33940),
        n = r(89526),
        a = r(44026),
        s = r(17589),
        o = r(4306),
        c = r(32765),
        l = r(94952);
      function m(e) {
        const { children: t, navTreeRef: r } = e,
          m = (0, i._T)(e, ["children", "navTreeRef"]),
          _ = n.useRef(),
          u = (0, o.BE)(_, r),
          f = (0, c.id)(),
          d = window.__virtual_keyboard_client;
        if (
          ((0, n.useEffect)(() => {
            l.Wz.SetHookFactory(() => d);
          }, [d]),
          f)
        ) {
          const e = window.__nav_tree_root;
          return n.createElement(
            a.Fe,
            Object.assign({}, m, {
              navTreeRef: u,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.createElement(s.O, null, t)
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    71283: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { AccountPreferencesRoutes: () => J, default: () => ee });
      var i = r(89526),
        n = r(59934),
        a = r(33940),
        s = r(52868),
        o = r.n(s),
        c = r(50265),
        l = (r(46132), r(23217), r(32765)),
        m = r(45878),
        _ = r(29063);
      const u = m.Message;
      class f extends u {
        constructor(e = null) {
          super(),
            f.prototype.version || _.aR(f.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  version: { n: 1, br: _.FE.readEnum, bw: _.Xc.writeEnum },
                  preference_state: {
                    n: 2,
                    br: _.FE.readEnum,
                    bw: _.Xc.writeEnum,
                  },
                  content_customization: { n: 3, c: d },
                  valve_analytics: { n: 4, c: g },
                  third_party_analytics: { n: 5, c: y },
                  third_party_content: { n: 6, c: p },
                  utm_enabled: {
                    n: 7,
                    d: !0,
                    br: _.FE.readBool,
                    bw: _.Xc.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = _.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences";
        }
      }
      class d extends u {
        constructor(e = null) {
          super(),
            d.prototype.recentapps || _.aR(d.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  recentapps: { n: 1, br: _.FE.readBool, bw: _.Xc.writeBool },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = _.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ContentCustomization";
        }
      }
      class g extends u {
        constructor(e = null) {
          super(),
            g.prototype.product_impressions_tracking || _.aR(g.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  product_impressions_tracking: {
                    n: 1,
                    br: _.FE.readBool,
                    bw: _.Xc.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = _.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ValveAnalytics";
        }
      }
      class y extends u {
        constructor(e = null) {
          super(),
            y.prototype.google_analytics || _.aR(y.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  google_analytics: {
                    n: 1,
                    br: _.FE.readBool,
                    bw: _.Xc.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = _.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
        }
      }
      class p extends u {
        constructor(e = null) {
          super(),
            p.prototype.youtube || _.aR(p.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  youtube: { n: 1, br: _.FE.readBool, bw: _.Xc.writeBool },
                  vimeo: { n: 2, br: _.FE.readBool, bw: _.Xc.writeBool },
                  sketchfab: { n: 3, br: _.FE.readBool, bw: _.Xc.writeBool },
                  twitter: { n: 4, br: _.FE.readBool, bw: _.Xc.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = _.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
        }
      }
      class h extends u {
        constructor(e = null) {
          super(),
            h.prototype.preferences || _.aR(h.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = { proto: h, fields: { preferences: { n: 1, c: f } } }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = _.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Response";
        }
      }
      var B;
      !(function (e) {
        e.GetCookiePreferences = function (e, t) {
          return e.SendMsg("AccountPrivacy.GetCookiePreferences#1", t, h, {
            ePrivilege: 1,
          });
        };
      })(B || (B = {}));
      var b = r(14826);
      class P {
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
          return (0, a.mG)(this, void 0, void 0, function* () {
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
          return (0, a.mG)(this, void 0, void 0, function* () {
            const r = l.De.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              i = new FormData();
            i.set("sessionid", l.De.SESSIONID),
              i.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let n = yield o().post(r, i, { withCredentials: !0 });
              if (
                200 != n.status ||
                1 !=
                  (null === (e = null == n ? void 0 : n.data) || void 0 === e
                    ? void 0
                    : e.success)
              )
                window.ShowAlertDialog(
                  (0, b.Xx)("#CookiePref_Error"),
                  (0, b.Xx)("#CookiePref_ErrorNotSaved")
                );
              else if (
                1 ==
                (null === (t = null == n ? void 0 : n.data) || void 0 === t
                  ? void 0
                  : t.success)
              ) {
                0;
                const { transfer_urls: e, transfer_params: t } = n.data;
                e && t && this.TransferCookiePreferencesToSites(e, t);
              }
            } catch (e) {
              0,
                window.ShowAlertDialog(
                  (0, b.Xx)("#CookiePref_Error"),
                  (0, b.Xx)("#CookiePref_ErrorNotSaved")
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
      (0, a.gn)([c.LO], P.prototype, "m_Preferences", void 0);
      var N = r(88464),
        v = r(57605),
        k = r(65841),
        E = r(19304),
        S = r(51438),
        T = r(83145),
        C = r(66294),
        w = r(44026);
      let z;
      const M = (0, N.Pi)(() => {
          let e = (function () {
            if (!z) {
              let e = (0, l.kQ)("cookiepreferences", "application_config");
              z = new P(e);
            }
            return z;
          })();
          const t = (0, T.L)(),
            r = (0, i.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            n = (0, i.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return i.createElement(
            C.p,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            i.createElement(
              "div",
              {
                className: (0, E.Z)(
                  k.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.createElement(
                "div",
                null,
                (0, b.Xx)("#CookiePref_OptionalCookies_Title")
              )
            ),
            i.createElement(
              "div",
              { className: "account_settings_container" },
              i.createElement(
                S.s,
                { "flow-children": "row", className: k.ButtonGroup },
                i.createElement(
                  w.Ks,
                  {
                    className: (0, E.Z)(
                      k.AllButton,
                      e.BIsRejectAll() ? k.ButtonHighlight : ""
                    ),
                    onClick: n,
                  },
                  (0, b.Xx)("#CookiePref_RejectAll")
                ),
                i.createElement(
                  w.Ks,
                  {
                    className: (0, E.Z)(
                      k.AllButton,
                      e.BIsAllowAll() ? k.ButtonHighlight : ""
                    ),
                    onClick: r,
                  },
                  (0, b.Xx)("#CookiePref_AcceptAll")
                )
              ),
              i.createElement(R, { settings: e }),
              i.createElement(F, { settings: e }),
              i.createElement(X, { settings: e }),
              i.createElement(D, { settings: e })
            ),
            i.createElement(
              "div",
              {
                className: (0, E.Z)(
                  k.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.createElement(
                "div",
                null,
                (0, b.Xx)("#CookiePref_TechnicallyNeccesary_Title")
              )
            ),
            i.createElement(
              "div",
              { className: "account_settings_container" },
              i.createElement(
                "p",
                null,
                (0, b.Xx)("#CookiePref_TechnicallyNeccesary_Desc")
              ),
              i.createElement(
                "div",
                { className: k.CookieGroup },
                i.createElement(
                  "div",
                  { className: k.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: k.NecessaryTitle },
                    (0, b.Xx)("#CookiePref_SessionID_Title")
                  ),
                  i.createElement(
                    "span",
                    { className: k.NecessaryDesc },
                    (0, b.Xx)("#CookiePref_SessionID_Desc")
                  )
                ),
                i.createElement(
                  "div",
                  { className: k.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: k.NecessaryTitle },
                    (0, b.Xx)("#CookiePref_ShoppingCart_Title")
                  ),
                  i.createElement(
                    "span",
                    { className: k.NecessaryDesc },
                    (0, b.Xx)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                i.createElement(
                  "div",
                  { className: k.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: k.NecessaryTitle },
                    (0, b.Xx)("#CookiePref_SteamCountry_Title")
                  ),
                  i.createElement(
                    "span",
                    { className: k.NecessaryDesc },
                    (0, b.Xx)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                i.createElement(
                  "div",
                  { className: k.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: k.NecessaryTitle },
                    (0, b.Xx)("#CookiePref_Timezone_Title")
                  ),
                  i.createElement(
                    "span",
                    { className: k.NecessaryDesc },
                    (0, b.Xx)("#CookiePref_Timezone_Desc")
                  )
                ),
                i.createElement(
                  "div",
                  { className: k.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: k.NecessaryTitle },
                    (0, b.Xx)("#CookiePref_BirthTime_Title")
                  ),
                  i.createElement(
                    "span",
                    { className: k.NecessaryDesc },
                    (0, b.Xx)("#CookiePref_BirthTime_Desc")
                  )
                ),
                i.createElement(
                  "div",
                  { className: k.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: k.NecessaryTitle },
                    (0, b.Xx)("#CookiePref_Login_Title")
                  ),
                  i.createElement(
                    "span",
                    { className: k.NecessaryDesc },
                    (0, b.Xx)("#CookiePref_Login_Desc")
                  )
                ),
                i.createElement(
                  "div",
                  { className: k.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: k.NecessaryTitle },
                    (0, b.Xx)("#CookiePref_Language_Title")
                  ),
                  i.createElement(
                    "span",
                    { className: k.NecessaryDesc },
                    (0, b.Xx)("#CookiePref_Language_Desc")
                  )
                ),
                i.createElement(
                  "div",
                  { className: k.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: k.NecessaryTitle },
                    (0, b.Xx)("#CookiePref_CookieSettings_Title")
                  ),
                  i.createElement(
                    "span",
                    { className: k.NecessaryDesc },
                    (0, b.Xx)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            i.createElement(
              "div",
              {
                className: (0, E.Z)(
                  k.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.createElement(
                "div",
                null,
                (0, b.Xx)("#PrivacySettings_Marketing_Header")
              )
            ),
            i.createElement(
              "div",
              { className: "account_settings_container" },
              i.createElement(x, { settings: e })
            ),
            null
          );
        }),
        R = (0, N.Pi)((e) => {
          const { settings: t } = e,
            r = (0, i.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return i.createElement(
            "div",
            { className: k.CookieGroup },
            i.createElement(
              "div",
              { className: k.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, b.Xx)("#CookiePref_Content_Title")
              ),
              i.createElement(
                "p",
                { className: k.SectionDescription },
                (0, b.Xx)("#CookiePref_Content_Desc")
              ),
              i.createElement(v.gE, {
                onChange: r,
                label: (0, b.Xx)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, b.Xx)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        F = (0, N.Pi)((e) => {
          const { settings: t } = e,
            r = (0, i.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return i.createElement(
            "div",
            { className: k.CookieGroup },
            i.createElement(
              "div",
              { className: k.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, b.Xx)("#CookiePref_ValveAnalytics_Title")
              ),
              i.createElement(
                "p",
                { className: k.SectionDescription },
                (0, b.Xx)("#CookiePref_ValveAnalytics_Desc")
              ),
              i.createElement(v.gE, {
                onChange: r,
                label: (0, b.Xx)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, b.Xx)("#CookiePref_ValveAnalytics_ToggleDesc"),
              })
            )
          );
        }),
        X = (0, N.Pi)((e) => {
          const { settings: t } = e,
            r = (0, i.useCallback)(() => {
              t.ToggleGoogleAnalytics();
            }, [t]);
          return i.createElement(
            "div",
            { className: k.CookieGroup },
            i.createElement(
              "div",
              { className: k.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, b.Xx)("#CookiePref_GoogleAnalytics_Title")
              ),
              i.createElement(
                "p",
                { className: k.SectionDescription },
                (0, b.Xx)("#CookiePref_GoogleAnalytics_Desc")
              ),
              i.createElement(v.gE, {
                onChange: r,
                label: (0, b.Xx)("#CookiePref_GoogleAnalytics_ToggleLabel"),
                checked: t.GetGoogleAnalytics(),
                description: (0, b.kQ)(
                  "#CookiePref_GoogleAnalytics_ToggleDesc",
                  i.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, b.Xx)("#CookiePref_GoogleAnalytics_TogglePolicyName")
                  )
                ),
              })
            )
          );
        }),
        D = (0, N.Pi)((e) => {
          const { settings: t } = e,
            r = (0, i.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            n = (0, i.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            a = (0, i.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return i.createElement(
            "div",
            { className: k.CookieGroup },
            i.createElement(
              "div",
              { className: k.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, b.Xx)("#CookiePref_ThirdParty_Title")
              ),
              i.createElement(
                "p",
                { className: k.SectionDescription },
                (0, b.Xx)("#CookiePref_ThirdParty_Desc")
              ),
              i.createElement(v.gE, {
                onChange: r,
                label: (0, b.Xx)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: (0, b.kQ)(
                  "#CookiePref_YouTube_Desc",
                  i.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, b.Xx)("#CookiePref_YouTube_TogglePolicyName")
                  )
                ),
              }),
              i.createElement(v.gE, {
                onChange: n,
                label: (0, b.Xx)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: (0, b.kQ)(
                  "#CookiePref_Vimeo_Desc",
                  i.createElement(
                    "a",
                    { href: "https://vimeo.com/privacy", target: "_blank" },
                    (0, b.Xx)("#CookiePref_Vimeo_TogglePolicyName")
                  )
                ),
              }),
              i.createElement(v.gE, {
                onChange: a,
                label: (0, b.Xx)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: (0, b.kQ)(
                  "#CookiePref_Sketchfab_Desc",
                  i.createElement(
                    "a",
                    { href: "https://sketchfab.com/privacy", target: "_blank" },
                    (0, b.Xx)("#CookiePref_Sketchfab_TogglePolicyName")
                  )
                ),
              })
            )
          );
        }),
        x = (0, N.Pi)((e) => {
          const { settings: t } = e,
            r = (0, i.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return i.createElement(
            "div",
            { className: k.CookieGroup },
            i.createElement(
              "div",
              { className: k.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, b.Xx)("#PrivacySettings_Marketing_Title")
              ),
              i.createElement(
                "p",
                { className: k.SectionDescription },
                (0, b.Xx)("#PrivacySettings_Marketing_Desc")
              ),
              i.createElement(v.gE, {
                onChange: r,
                label: (0, b.Xx)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: (0, b.Xx)("#PrivacySettings_UTM_ToggleDesc"),
              })
            )
          );
        }),
        A = m.Message;
      class W extends A {
        constructor(e = null) {
          super(),
            W.prototype.notification_id || _.aR(W.M()),
            A.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  notification_id: {
                    n: 1,
                    br: _.FE.readUint64String,
                    bw: _.Xc.writeUint64String,
                  },
                  notification_targets: {
                    n: 2,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  notification_type: {
                    n: 3,
                    br: _.FE.readEnum,
                    bw: _.Xc.writeEnum,
                  },
                  body_data: {
                    n: 4,
                    br: _.FE.readString,
                    bw: _.Xc.writeString,
                  },
                  read: { n: 7, br: _.FE.readBool, bw: _.Xc.writeBool },
                  timestamp: {
                    n: 8,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  hidden: { n: 9, br: _.FE.readBool, bw: _.Xc.writeBool },
                  expiry: { n: 10, br: _.FE.readUint32, bw: _.Xc.writeUint32 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = _.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationData";
        }
      }
      class G extends A {
        constructor(e = null) {
          super(),
            G.prototype.notifications || _.aR(G.M()),
            A.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  notifications: { n: 1, c: W, r: !0, q: !0 },
                  confirmation_count: {
                    n: 2,
                    br: _.FE.readInt32,
                    bw: _.Xc.writeInt32,
                  },
                  pending_gift_count: {
                    n: 3,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  pending_friend_count: {
                    n: 5,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  unread_count: {
                    n: 6,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = _.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Response";
        }
      }
      class O extends A {
        constructor(e = null) {
          super(),
            O.prototype.notification_type || _.aR(O.M()),
            A.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  notification_type: {
                    n: 1,
                    br: _.FE.readEnum,
                    bw: _.Xc.writeEnum,
                  },
                  notification_targets: {
                    n: 2,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = _.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationPreference";
        }
      }
      class j extends A {
        constructor(e = null) {
          super(), A.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Response";
        }
      }
      class U extends A {
        constructor(e = null) {
          super(),
            U.prototype.preferences || _.aR(U.M()),
            A.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { preferences: { n: 1, c: O, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = _.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Response";
        }
      }
      class H extends A {
        constructor(e = null) {
          super(), A.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_NotificationsReceived_Notification";
        }
      }
      var I, V;
      !(function (e) {
        (e.GetSteamNotifications = function (e, t) {
          return e.SendMsg("SteamNotification.GetSteamNotifications#1", t, G, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.MarkNotificationsRead = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.HideNotification = function (e, t) {
            return e.SendNotification(
              "SteamNotification.HideNotification#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.SetPreferences = function (e, t) {
            return e.SendMsg("SteamNotification.SetPreferences#1", t, j, {
              ePrivilege: 1,
            });
          }),
          (e.GetPreferences = function (e, t) {
            return e.SendMsg("SteamNotification.GetPreferences#1", t, U, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(I || (I = {})),
        (function (e) {
          e.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: H,
          };
        })(V || (V = {}));
      class L {
        constructor(e) {
          (this.m_bUpdating = !1), (this.m_Preferences = e);
        }
        GetPreferences() {
          return this.m_Preferences;
        }
        BUpdatingPreferences() {
          return this.m_bUpdating;
        }
        ToggleTargetPreference(e, t) {
          this.m_bUpdating = !0;
          let r = !1;
          for (let i of this.m_Preferences)
            if (t.notification_type == i.notification_type) {
              (i.notification_targets ^= e),
                1 != (1 & i.notification_targets) &&
                  (i.notification_targets = 0),
                (r = !0);
              break;
            }
          r && this.PostNotificationSettings(), (this.m_bUpdating = !1);
        }
        PostNotificationSettings() {
          var e, t;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const r =
                l.De.STORE_CHECKOUT_BASE_URL +
                "account/ajaxsetnotificationsettings",
              i = new FormData();
            i.set("sessionid", l.De.SESSIONID),
              i.append(
                "notificationpreferences",
                JSON.stringify(this.m_Preferences)
              );
            try {
              let n = yield o().post(r, i, { withCredentials: !0 });
              200 != n.status ||
              1 !=
                (null === (e = null == n ? void 0 : n.data) || void 0 === e
                  ? void 0
                  : e.success)
                ? window.ShowAlertDialog(
                    (0, b.Xx)("#NotificationPref_Error"),
                    (0, b.Xx)("#NotificationPref_ErrorNotSaved")
                  )
                : null === (t = null == n ? void 0 : n.data) ||
                  void 0 === t ||
                  t.success;
            } catch (e) {
              0,
                window.ShowAlertDialog(
                  (0, b.Xx)("#NotificationPref_Error"),
                  (0, b.Xx)("#NotificationPref_ErrorNotSaved")
                );
            }
          });
        }
      }
      (0, a.gn)([c.LO], L.prototype, "m_Preferences", void 0),
        (0, a.gn)([c.LO], L.prototype, "m_bUpdating", void 0);
      var Y = r(17560),
        Z = r(16826);
      let Q;
      function $() {
        if (!Q) {
          let e = (0, l.kQ)("notificationpreferences", "application_config");
          Q = new L(e);
        }
        return Q;
      }
      const K = (0, N.Pi)(() => {
          let e = $();
          const t = (0, T.L)();
          let r = [];
          for (const t of e.GetPreferences())
            r.push(i.createElement(q, { preferenceSetting: t }));
          return i.createElement(
            C.p,
            { navID: "StoreNotificationSettings", NavigationManager: t },
            i.createElement(
              "div",
              {
                className: (0, E.Z)(
                  Y.NotificationSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.createElement(
                "div",
                null,
                (0, b.Xx)("#NotificationSettings_Title")
              )
            ),
            i.createElement(
              "div",
              { className: "account_settings_container" },
              i.createElement(
                "p",
                { className: Y.SectionDescription },
                (0, b.Xx)("#NotificationSettings_Desc1")
              ),
              i.createElement(
                "p",
                { className: Y.SectionDescription },
                (0, b.Xx)("#NotificationSettings_Desc2")
              ),
              i.createElement(
                "div",
                { className: "notification_settings_container" },
                i.createElement(
                  "p",
                  null,
                  (0, b.Xx)("#NotificationSettings_SendMeWhen")
                ),
                r
              )
            )
          );
        }),
        q = (0, N.Pi)((e) => {
          const { preferenceSetting: t } = e;
          let r = $();
          const n = (0, i.useCallback)(() => {
              r.ToggleTargetPreference(1, t);
            }, [t, r]),
            a = (0, i.useCallback)(() => {
              r.ToggleTargetPreference(8, t);
            }, [t, r]),
            s = (0, i.useCallback)(() => {
              r.ToggleTargetPreference(2, t);
            }, [t, r]),
            [o, c] = (0, i.useState)(!1),
            l = r.BUpdatingPreferences(),
            m = 1 == (1 & t.notification_targets),
            _ = 2 == (2 & t.notification_targets),
            u = 8 == (8 & t.notification_targets);
          return i.createElement(
            "div",
            { className: Y.NotificationGroup },
            i.createElement(
              "div",
              { className: Y.NotificationSection },
              i.createElement(v.fp, {
                className: Y.NotificationFeedToggle,
                padding: "compact",
                onChange: n,
                disabled: l,
                checked: m,
              }),
              i.createElement(
                "p",
                { className: Y.NotificationDescription },
                ((f = t.notification_type),
                (0, b.Xx)("#SteamNotificationTypeDesc_" + f))
              ),
              i.createElement(
                v.Yz,
                {
                  className: (0, E.Z)({
                    [Y.PrefDetailsToggle]: !0,
                    [Y.Selected]: o,
                  }),
                  onClick: () => c(!o),
                },
                i.createElement(Z.vVQ, { direction: "down" })
              )
            ),
            o &&
              i.createElement(
                "div",
                { className: Y.NotificationPrefDetails },
                i.createElement(v.ji, {
                  label: (0, b.Xx)("#NotificationSettings_SendToast"),
                  disabled: l || !m,
                  checked: u,
                  onChange: a,
                }),
                i.createElement(v.ji, {
                  label: (0, b.Xx)("#NotificationSettings_PushNotification"),
                  disabled: l || !m,
                  checked: _,
                  onChange: s,
                })
              )
          );
          var f;
        }),
        J = {
          CookieSettings: () => "/cookiepreferences",
          NotificationSettings: () => "/notificationsettings",
        },
        ee = (e) => {
          const t = e.match.url,
            r = J;
          return i.createElement(
            n.rs,
            null,
            i.createElement(
              n.AW,
              { path: `${t}${r.CookieSettings()}` },
              i.createElement(M, null)
            ),
            i.createElement(
              n.AW,
              { path: `${t}${r.NotificationSettings()}` },
              i.createElement(K, null)
            )
          );
        };
    },
  },
]);
