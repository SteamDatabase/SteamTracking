/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5821],
  {
    74929: (e) => {
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
    16480: (e) => {
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
      r.d(t, { p: () => _ });
      var i = r(33940),
        n = r(89526),
        a = r(44026),
        s = r(17589),
        o = r(4306),
        c = r(32765),
        l = r(94952);
      function _(e) {
        const { children: t, navTreeRef: r } = e,
          _ = (0, i._T)(e, ["children", "navTreeRef"]),
          m = n.useRef(),
          f = (0, o.BE)(m, r),
          u = (0, c.id)(),
          g = window.__virtual_keyboard_client;
        if (
          ((0, n.useEffect)(() => {
            l.Wz.SetHookFactory(() => g);
          }, [g]),
          u)
        ) {
          const e = window.__nav_tree_root;
          return n.createElement(
            a.Fe,
            Object.assign({}, _, {
              navTreeRef: f,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            n.createElement(s.O, null, t),
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    38977: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { AccountPreferencesRoutes: () => $, default: () => q });
      var i = r(89526),
        n = r(59934),
        a = r(33940),
        s = r(50265),
        o = r(42735),
        c = (r(23217), r(32765)),
        l = r(45878),
        _ = r(43898),
        m = r(67328);
      const f = l.Message;
      var u, g, d;
      !(function (e) {
        (e[(e.k_EPrivacyCookiePreferenceState_DefaultAllowAll = 0)] =
          "k_EPrivacyCookiePreferenceState_DefaultAllowAll"),
          (e[(e.k_EPrivacyCookiePreferenceState_AllowAll = 1)] =
            "k_EPrivacyCookiePreferenceState_AllowAll"),
          (e[(e.k_EPrivacyCookiePreferenceState_RejectAll = 2)] =
            "k_EPrivacyCookiePreferenceState_RejectAll"),
          (e[(e.k_EPrivacyCookiePreferenceState_Customized = 3)] =
            "k_EPrivacyCookiePreferenceState_Customized"),
          (e[(e.k_EPrivacyCookiePreferenceState_DefaultRejectAll = 4)] =
            "k_EPrivacyCookiePreferenceState_DefaultRejectAll");
      })(u || (u = {})),
        (function (e) {
          (e[(e.k_EPrivacyCookiePreferencesVersion_Invalid = 0)] =
            "k_EPrivacyCookiePreferencesVersion_Invalid"),
            (e[(e.k_EPrivacyCookiePreferencesVersion_InitialRelease = 1)] =
              "k_EPrivacyCookiePreferencesVersion_InitialRelease"),
            (e[(e.k_EPrivacyCookiePreferencesVersion_LATEST = 1)] =
              "k_EPrivacyCookiePreferencesVersion_LATEST");
        })(g || (g = {}));
      class y extends f {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.version || _.aR(y.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  version: { n: 1, br: _.FE.readEnum, bw: _.Xc.writeEnum },
                  preference_state: {
                    n: 2,
                    br: _.FE.readEnum,
                    bw: _.Xc.writeEnum,
                  },
                  content_customization: { n: 3, c: p },
                  valve_analytics: { n: 4, c: P },
                  third_party_analytics: { n: 5, c: k },
                  third_party_content: { n: 6, c: h },
                  utm_enabled: {
                    n: 7,
                    d: !0,
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
          let t = new l.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences";
        }
      }
      class p extends f {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.recentapps || _.aR(p.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  recentapps: { n: 1, br: _.FE.readBool, bw: _.Xc.writeBool },
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
          let t = new l.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ContentCustomization";
        }
      }
      class P extends f {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.product_impressions_tracking || _.aR(P.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  product_impressions_tracking: {
                    n: 1,
                    br: _.FE.readBool,
                    bw: _.Xc.writeBool,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = _.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ValveAnalytics";
        }
      }
      class k extends f {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.google_analytics || _.aR(k.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  google_analytics: {
                    n: 1,
                    br: _.FE.readBool,
                    bw: _.Xc.writeBool,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = _.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
        }
      }
      class h extends f {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.youtube || _.aR(h.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  youtube: { n: 1, br: _.FE.readBool, bw: _.Xc.writeBool },
                  vimeo: { n: 2, br: _.FE.readBool, bw: _.Xc.writeBool },
                  sketchfab: { n: 3, br: _.FE.readBool, bw: _.Xc.writeBool },
                  twitter: { n: 4, br: _.FE.readBool, bw: _.Xc.writeBool },
                },
              }),
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
          let t = new l.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
        }
      }
      class E extends f {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Request";
        }
      }
      class v extends f {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.preferences || _.aR(v.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = { proto: v, fields: { preferences: { n: 1, c: y } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = _.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Response";
        }
      }
      !(function (e) {
        e.GetCookiePreferences = function (e, t) {
          return e.SendMsg(
            "AccountPrivacy.GetCookiePreferences#1",
            (0, m.MD)(E, t),
            v,
            { ePrivilege: 1 },
          );
        };
      })(d || (d = {}));
      var C = r(52868),
        S = r.n(C),
        N = r(14826);
      class T {
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
            (this.m_Preferences.preference_state !=
              u.k_EPrivacyCookiePreferenceState_DefaultAllowAll &&
              this.m_Preferences.preference_state !=
                u.k_EPrivacyCookiePreferenceState_AllowAll) ||
              ((this.m_Preferences.valve_analytics.product_impressions_tracking =
                !0),
              (this.m_Preferences.content_customization.recentapps = !0),
              (this.m_Preferences.third_party_analytics.google_analytics = !0),
              (this.m_Preferences.third_party_content.sketchfab = !0),
              (this.m_Preferences.third_party_content.twitter = !0),
              (this.m_Preferences.third_party_content.vimeo = !0),
              (this.m_Preferences.third_party_content.youtube = !0)),
            this.m_Preferences.version ==
              g.k_EPrivacyCookiePreferencesVersion_Invalid &&
              (this.m_Preferences.version =
                g.k_EPrivacyCookiePreferencesVersion_LATEST);
        }
        GetVersion() {
          return this.m_Preferences.version;
        }
        GetPreferenceState() {
          return this.m_Preferences.preference_state;
        }
        BIsAllowAll() {
          return (
            this.m_Preferences.preference_state ==
              u.k_EPrivacyCookiePreferenceState_AllowAll ||
            this.m_Preferences.preference_state ==
              u.k_EPrivacyCookiePreferenceState_DefaultAllowAll
          );
        }
        BIsRejectAll() {
          return (
            this.m_Preferences.preference_state ==
            u.k_EPrivacyCookiePreferenceState_RejectAll
          );
        }
        SetPreferenceState(e) {
          if (this.m_Preferences.preference_state != e) {
            if (
              ((this.m_Preferences.preference_state = e),
              e == u.k_EPrivacyCookiePreferenceState_AllowAll ||
                e == u.k_EPrivacyCookiePreferenceState_RejectAll)
            ) {
              let t = e == u.k_EPrivacyCookiePreferenceState_AllowAll;
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
          (this.m_Preferences.preference_state =
            u.k_EPrivacyCookiePreferenceState_Customized),
            this.PostCookieSettings();
        }
        PostCookieSettings() {
          var e, t;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const r = c.De.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              i = new FormData();
            i.set("sessionid", c.De.SESSIONID),
              i.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let n = yield S().post(r, i, { withCredentials: !0 });
              if (
                200 != n.status ||
                (null === (e = null == n ? void 0 : n.data) || void 0 === e
                  ? void 0
                  : e.success) != o.s.k_EResultOK
              )
                window.ShowAlertDialog(
                  (0, N.Xx)("#CookiePref_Error"),
                  (0, N.Xx)("#CookiePref_ErrorNotSaved"),
                );
              else if (
                (null === (t = null == n ? void 0 : n.data) || void 0 === t
                  ? void 0
                  : t.success) == o.s.k_EResultOK
              ) {
                0;
                const { transfer_urls: e, transfer_params: t } = n.data;
                e && t && this.TransferCookiePreferencesToSites(e, t);
              }
            } catch (e) {
              0,
                window.ShowAlertDialog(
                  (0, N.Xx)("#CookiePref_Error"),
                  (0, N.Xx)("#CookiePref_ErrorNotSaved"),
                );
            }
          });
        }
        TransferCookiePreferencesToSites(e, t) {
          const r = new FormData();
          r.set("transfer_params", t);
          for (const t of e) S().post(t, r);
        }
      }
      (0, a.gn)([s.LO], T.prototype, "m_Preferences", void 0);
      var B = r(88464),
        b = r(57605),
        w = r(74929),
        A = r(19304),
        z = r(51438),
        D = r(83145),
        R = r(66294),
        X = r(44026);
      let x;
      const M = (0, B.Pi)(() => {
          let e = (function () {
            if (!x) {
              let e = (0, c.kQ)("cookiepreferences", "application_config");
              x = new T(e);
            }
            return x;
          })();
          const t = (0, D.L)(),
            r = (0, i.useCallback)(() => {
              e.SetPreferenceState(u.k_EPrivacyCookiePreferenceState_AllowAll);
            }, [e]),
            n = (0, i.useCallback)(() => {
              e.SetPreferenceState(u.k_EPrivacyCookiePreferenceState_RejectAll);
            }, [e]);
          return i.createElement(
            R.p,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            i.createElement(
              "div",
              {
                className: (0, A.Z)(
                  w.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              i.createElement(
                "div",
                null,
                (0, N.Xx)("#CookiePref_OptionalCookies_Title"),
              ),
            ),
            i.createElement(
              "div",
              { className: "account_settings_container" },
              i.createElement(
                z.s,
                { "flow-children": "row", className: w.ButtonGroup },
                i.createElement(
                  X.Ks,
                  {
                    className: (0, A.Z)(
                      w.AllButton,
                      e.BIsRejectAll() ? w.ButtonHighlight : "",
                    ),
                    onClick: n,
                  },
                  (0, N.Xx)("#CookiePref_RejectAll"),
                ),
                i.createElement(
                  X.Ks,
                  {
                    className: (0, A.Z)(
                      w.AllButton,
                      e.BIsAllowAll() ? w.ButtonHighlight : "",
                    ),
                    onClick: r,
                  },
                  (0, N.Xx)("#CookiePref_AcceptAll"),
                ),
              ),
              i.createElement(F, { settings: e }),
              i.createElement(O, { settings: e }),
              i.createElement(G, { settings: e }),
            ),
            i.createElement(
              "div",
              {
                className: (0, A.Z)(
                  w.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              i.createElement(
                "div",
                null,
                (0, N.Xx)("#CookiePref_TechnicallyNeccesary_Title"),
              ),
            ),
            i.createElement(
              "div",
              { className: "account_settings_container" },
              i.createElement(
                "p",
                null,
                (0, N.Xx)("#CookiePref_TechnicallyNeccesary_Desc"),
              ),
              i.createElement(
                "div",
                { className: w.CookieGroup },
                i.createElement(
                  "div",
                  { className: w.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: w.NecessaryTitle },
                    (0, N.Xx)("#CookiePref_SessionID_Title"),
                  ),
                  i.createElement(
                    "span",
                    { className: w.NecessaryDesc },
                    (0, N.Xx)("#CookiePref_SessionID_Desc"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: w.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: w.NecessaryTitle },
                    (0, N.Xx)("#CookiePref_ShoppingCart_Title"),
                  ),
                  i.createElement(
                    "span",
                    { className: w.NecessaryDesc },
                    (0, N.Xx)("#CookiePref_ShoppingCart_Desc"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: w.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: w.NecessaryTitle },
                    (0, N.Xx)("#CookiePref_SteamCountry_Title"),
                  ),
                  i.createElement(
                    "span",
                    { className: w.NecessaryDesc },
                    (0, N.Xx)("#CookiePref_SteamCountry_Desc"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: w.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: w.NecessaryTitle },
                    (0, N.Xx)("#CookiePref_Timezone_Title"),
                  ),
                  i.createElement(
                    "span",
                    { className: w.NecessaryDesc },
                    (0, N.Xx)("#CookiePref_Timezone_Desc"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: w.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: w.NecessaryTitle },
                    (0, N.Xx)("#CookiePref_BirthTime_Title"),
                  ),
                  i.createElement(
                    "span",
                    { className: w.NecessaryDesc },
                    (0, N.Xx)("#CookiePref_BirthTime_Desc"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: w.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: w.NecessaryTitle },
                    (0, N.Xx)("#CookiePref_Login_Title"),
                  ),
                  i.createElement(
                    "span",
                    { className: w.NecessaryDesc },
                    (0, N.Xx)("#CookiePref_Login_Desc"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: w.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: w.NecessaryTitle },
                    (0, N.Xx)("#CookiePref_Language_Title"),
                  ),
                  i.createElement(
                    "span",
                    { className: w.NecessaryDesc },
                    (0, N.Xx)("#CookiePref_Language_Desc"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: w.NecessaryGroup },
                  i.createElement(
                    "span",
                    { className: w.NecessaryTitle },
                    (0, N.Xx)("#CookiePref_CookieSettings_Title"),
                  ),
                  i.createElement(
                    "span",
                    { className: w.NecessaryDesc },
                    (0, N.Xx)("#CookiePref_CookieSettings_Desc"),
                  ),
                ),
              ),
            ),
            i.createElement(
              "div",
              {
                className: (0, A.Z)(
                  w.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              i.createElement(
                "div",
                null,
                (0, N.Xx)("#PrivacySettings_Marketing_Header"),
              ),
            ),
            i.createElement(
              "div",
              { className: "account_settings_container" },
              i.createElement(j, { settings: e }),
            ),
            null,
          );
        }),
        F = (0, B.Pi)((e) => {
          const { settings: t } = e,
            r = (0, i.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return i.createElement(
            "div",
            { className: w.CookieGroup },
            i.createElement(
              "div",
              { className: w.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, N.Xx)("#CookiePref_Content_Title"),
              ),
              i.createElement(
                "p",
                { className: w.SectionDescription },
                (0, N.Xx)("#CookiePref_Content_Desc"),
              ),
              i.createElement(b.gE, {
                onChange: r,
                label: (0, N.Xx)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, N.Xx)("#CookiePref_Content_ToggleDesc"),
              }),
            ),
          );
        }),
        O = (0, B.Pi)((e) => {
          const { settings: t } = e,
            r = (0, i.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return i.createElement(
            "div",
            { className: w.CookieGroup },
            i.createElement(
              "div",
              { className: w.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, N.Xx)("#CookiePref_ValveAnalytics_Title"),
              ),
              i.createElement(
                "p",
                { className: w.SectionDescription },
                (0, N.Xx)("#CookiePref_ValveAnalytics_Desc"),
              ),
              i.createElement(b.gE, {
                onChange: r,
                label: (0, N.Xx)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, N.Xx)("#CookiePref_ValveAnalytics_ToggleDesc"),
              }),
            ),
          );
        }),
        G = (0, B.Pi)((e) => {
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
            { className: w.CookieGroup },
            i.createElement(
              "div",
              { className: w.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, N.Xx)("#CookiePref_ThirdParty_Title"),
              ),
              i.createElement(
                "p",
                { className: w.SectionDescription },
                (0, N.Xx)("#CookiePref_ThirdParty_Desc"),
              ),
              i.createElement(b.gE, {
                onChange: r,
                label: (0, N.Xx)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: (0, N.kQ)(
                  "#CookiePref_YouTube_Desc",
                  i.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, N.Xx)("#CookiePref_YouTube_TogglePolicyName"),
                  ),
                ),
              }),
              i.createElement(b.gE, {
                onChange: n,
                label: (0, N.Xx)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: (0, N.kQ)(
                  "#CookiePref_Vimeo_Desc",
                  i.createElement(
                    "a",
                    { href: "https://vimeo.com/privacy", target: "_blank" },
                    (0, N.Xx)("#CookiePref_Vimeo_TogglePolicyName"),
                  ),
                ),
              }),
              i.createElement(b.gE, {
                onChange: a,
                label: (0, N.Xx)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: (0, N.kQ)(
                  "#CookiePref_Sketchfab_Desc",
                  i.createElement(
                    "a",
                    { href: "https://sketchfab.com/privacy", target: "_blank" },
                    (0, N.Xx)("#CookiePref_Sketchfab_TogglePolicyName"),
                  ),
                ),
              }),
            ),
          );
        }),
        j = (0, B.Pi)((e) => {
          const { settings: t } = e,
            r = (0, i.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return i.createElement(
            "div",
            { className: w.CookieGroup },
            i.createElement(
              "div",
              { className: w.CookieSection },
              i.createElement(
                "h2",
                null,
                (0, N.Xx)("#PrivacySettings_Marketing_Title"),
              ),
              i.createElement(
                "p",
                { className: w.SectionDescription },
                (0, N.Xx)("#PrivacySettings_Marketing_Desc"),
              ),
              i.createElement(b.gE, {
                onChange: r,
                label: (0, N.Xx)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: (0, N.Xx)("#PrivacySettings_UTM_ToggleDesc"),
              }),
            ),
          );
        });
      var W = r(70534);
      class I {
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
                (i.notification_targets &
                  W._C.k_ESteamNotificationTarget_NotificationFeed) !=
                  W._C.k_ESteamNotificationTarget_NotificationFeed &&
                  (i.notification_targets =
                    W._C.k_ESteamNotificationTarget_Invalid),
                (r = !0);
              break;
            }
          r && this.PostNotificationSettings(), (this.m_bUpdating = !1);
        }
        PostNotificationSettings() {
          var e, t;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const r =
                c.De.STORE_BASE_URL + "account/ajaxsetnotificationsettings",
              i = new FormData();
            i.set("sessionid", c.De.SESSIONID),
              i.append(
                "notificationpreferences",
                JSON.stringify(this.m_Preferences),
              );
            try {
              let n = yield S().post(r, i, { withCredentials: !0 });
              200 != n.status ||
              (null === (e = null == n ? void 0 : n.data) || void 0 === e
                ? void 0
                : e.success) != o.s.k_EResultOK
                ? window.ShowAlertDialog(
                    (0, N.Xx)("#NotificationPref_Error"),
                    (0, N.Xx)("#NotificationPref_ErrorNotSaved"),
                  )
                : (null === (t = null == n ? void 0 : n.data) ||
                    void 0 === t ||
                    t.success,
                  o.s.k_EResultOK);
            } catch (e) {
              0,
                window.ShowAlertDialog(
                  (0, N.Xx)("#NotificationPref_Error"),
                  (0, N.Xx)("#NotificationPref_ErrorNotSaved"),
                );
            }
          });
        }
      }
      (0, a.gn)([s.LO], I.prototype, "m_Preferences", void 0),
        (0, a.gn)([s.LO], I.prototype, "m_bUpdating", void 0);
      var V = r(16480),
        H = r(16826);
      let L;
      function U() {
        if (!L) {
          let e = (0, c.kQ)("notificationpreferences", "application_config");
          L = new I(e);
        }
        return L;
      }
      const Y = (0, B.Pi)(() => {
          let e = U();
          const t = (0, D.L)();
          let r = [];
          for (const t of e.GetPreferences())
            r.push(i.createElement(Z, { preferenceSetting: t }));
          return i.createElement(
            R.p,
            { navID: "StoreNotificationSettings", NavigationManager: t },
            i.createElement(
              "div",
              {
                className: (0, A.Z)(
                  V.NotificationSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              i.createElement(
                "div",
                null,
                (0, N.Xx)("#NotificationSettings_Title"),
              ),
            ),
            i.createElement(
              "div",
              { className: "account_settings_container" },
              i.createElement(
                "p",
                { className: V.SectionDescription },
                (0, N.Xx)("#NotificationSettings_Desc1"),
              ),
              i.createElement(
                "p",
                { className: V.SectionDescription },
                (0, N.Xx)("#NotificationSettings_Desc2"),
              ),
              i.createElement(
                "div",
                { className: "notification_settings_container" },
                i.createElement(
                  "p",
                  null,
                  (0, N.Xx)("#NotificationSettings_SendMeWhen"),
                ),
                r,
              ),
            ),
          );
        }),
        Z = (0, B.Pi)((e) => {
          const { preferenceSetting: t } = e;
          let r = U();
          const n = (0, i.useCallback)(() => {
              r.ToggleTargetPreference(
                W._C.k_ESteamNotificationTarget_NotificationFeed,
                t,
              );
            }, [t, r]),
            a = (0, i.useCallback)(() => {
              r.ToggleTargetPreference(
                W._C.k_ESteamNotificationTarget_Steam,
                t,
              );
            }, [t, r]),
            s = (0, i.useCallback)(() => {
              r.ToggleTargetPreference(
                W._C.k_ESteamNotificationTarget_PushNotification,
                t,
              );
            }, [t, r]),
            [o, c] = (0, i.useState)(!1),
            l = r.BUpdatingPreferences(),
            _ =
              (t.notification_targets &
                W._C.k_ESteamNotificationTarget_NotificationFeed) ==
              W._C.k_ESteamNotificationTarget_NotificationFeed,
            m =
              (t.notification_targets &
                W._C.k_ESteamNotificationTarget_PushNotification) ==
              W._C.k_ESteamNotificationTarget_PushNotification,
            f =
              (t.notification_targets &
                W._C.k_ESteamNotificationTarget_Steam) ==
              W._C.k_ESteamNotificationTarget_Steam;
          return i.createElement(
            "div",
            { className: V.NotificationGroup },
            i.createElement(
              "div",
              { className: V.NotificationSection },
              i.createElement(b.fp, {
                className: V.NotificationFeedToggle,
                padding: "compact",
                onChange: n,
                disabled: l,
                bottomSeparator: "none",
                checked: _,
              }),
              i.createElement(
                "p",
                { className: V.NotificationDescription },
                ((u = t.notification_type),
                (0, N.Xx)("#SteamNotificationTypeDesc_" + u)),
              ),
              i.createElement(
                b.Yz,
                {
                  className: (0, A.Z)({
                    [V.PrefDetailsToggle]: !0,
                    [V.Selected]: o,
                  }),
                  onClick: () => c(!o),
                },
                i.createElement(H.vVQ, { direction: "down" }),
              ),
            ),
            o &&
              i.createElement(
                "div",
                { className: V.NotificationPrefDetails },
                i.createElement(b.ji, {
                  label: (0, N.Xx)("#NotificationSettings_SendToast"),
                  disabled: l || !_,
                  checked: f,
                  onChange: a,
                }),
                i.createElement(b.ji, {
                  label: (0, N.Xx)("#NotificationSettings_PushNotification"),
                  disabled: l || !_,
                  checked: m,
                  onChange: s,
                }),
              ),
          );
          var u;
        });
      var K = r(35993);
      const Q = {},
        $ = Object.assign(
          {
            CookieSettings: () => "/cookiepreferences",
            NotificationSettings: () => "/notificationsettings",
          },
          Q,
        ),
        q = (e) => {
          const t = e.match.url,
            r = $;
          return i.createElement(
            n.rs,
            null,
            i.createElement(n.AW, {
              path: `${t}${r.CookieSettings()}`,
              render: () =>
                i.createElement(K.d, {
                  config: {
                    "cookie-preferences": () => i.createElement(M, null),
                  },
                }),
            }),
            i.createElement(n.AW, {
              path: `${t}${r.NotificationSettings()}`,
              render: () =>
                i.createElement(K.d, {
                  config: {
                    "notification-settings": () => i.createElement(Y, null),
                  },
                }),
            }),
            !1,
          );
        };
    },
  },
]);
