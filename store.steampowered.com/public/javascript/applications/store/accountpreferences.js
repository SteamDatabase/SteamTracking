/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    OS6B: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      r("mgoM");
      var s = r("vDqi"),
        a = r.n(s),
        i = r("bxBv");
      function n(e) {
        if (a.a.isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof i.b)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    byIC: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "AccountPreferencesRoutes", function () {
          return W;
        });
      var s = r("q1tI"),
        a = r.n(s),
        i = r("EC67"),
        n = r("mrSG"),
        c = r("vDqi"),
        o = r.n(c),
        l = r("2vnA"),
        _ = (r("mgoM"), r("OS6B"), r("lkRc")),
        m = r("hRO2"),
        u = r("OS8t");
      const f = m.Message;
      class d extends f {
        constructor(e = null) {
          super(),
            d.prototype.version || u.a(d.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  version: { n: 1, br: u.d.readEnum, bw: u.h.writeEnum },
                  preference_state: {
                    n: 2,
                    br: u.d.readEnum,
                    bw: u.h.writeEnum,
                  },
                  content_customization: { n: 3, c: g },
                  valve_analytics: { n: 4, c: p },
                  third_party_analytics: { n: 5, c: y },
                  third_party_content: { n: 6, c: b },
                  utm_enabled: {
                    n: 7,
                    d: !0,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = u.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(d.M(), e, t);
        }
        static fromObject(e) {
          return u.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences";
        }
      }
      class g extends f {
        constructor(e = null) {
          super(),
            g.prototype.recentapps || u.a(g.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  recentapps: { n: 1, br: u.d.readBool, bw: u.h.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = u.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(g.M(), e, t);
        }
        static fromObject(e) {
          return u.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ContentCustomization";
        }
      }
      class p extends f {
        constructor(e = null) {
          super(),
            p.prototype.product_impressions_tracking || u.a(p.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  product_impressions_tracking: {
                    n: 1,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = u.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(p.M(), e, t);
        }
        static fromObject(e) {
          return u.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ValveAnalytics";
        }
      }
      class y extends f {
        constructor(e = null) {
          super(),
            y.prototype.google_analytics || u.a(y.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  google_analytics: {
                    n: 1,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = u.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(y.M(), e, t);
        }
        static fromObject(e) {
          return u.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
        }
      }
      class b extends f {
        constructor(e = null) {
          super(),
            b.prototype.youtube || u.a(b.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  youtube: { n: 1, br: u.d.readBool, bw: u.h.writeBool },
                  vimeo: { n: 2, br: u.d.readBool, bw: u.h.writeBool },
                  sketchfab: { n: 3, br: u.d.readBool, bw: u.h.writeBool },
                  twitter: { n: 4, br: u.d.readBool, bw: u.h.writeBool },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = u.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(b.M(), e, t);
        }
        static fromObject(e) {
          return u.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
        }
      }
      class h extends f {
        constructor(e = null) {
          super(),
            h.prototype.preferences || u.a(h.M()),
            f.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = { proto: h, fields: { preferences: { n: 1, c: d } } }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = u.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(h.M(), e, t);
        }
        static fromObject(e) {
          return u.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new m.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new m.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new m.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Response";
        }
      }
      var P;
      !(function (e) {
        e.GetCookiePreferences = function (e, t) {
          return e.SendMsg("AccountPrivacy.GetCookiePreferences#1", t, h, {
            ePrivilege: 1,
          });
        };
      })(P || (P = {}));
      var k = r("TLQK");
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
              let a = yield o.a.post(r, s, { withCredentials: !0 });
              if (
                200 != a.status ||
                1 !=
                  (null === (e = null == a ? void 0 : a.data) || void 0 === e
                    ? void 0
                    : e.success)
              )
                window.ShowAlertDialog(
                  Object(k.f)("#CookiePref_Error"),
                  Object(k.f)("#CookiePref_ErrorNotSaved")
                );
              else if (
                1 ==
                (null === (t = null == a ? void 0 : a.data) || void 0 === t
                  ? void 0
                  : t.success)
              ) {
                0;
                const { transfer_urls: e, transfer_params: t } = a.data;
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
      var v = r("TyAF"),
        B = r("Mgs7"),
        E = r("nNQW"),
        O = r("exH9"),
        T = r("qDk6"),
        j = r("hwrv"),
        N = r("ykc/"),
        S = r("av+R");
      let M;
      const w = Object(v.a)(() => {
          let e = (function () {
            if (!M) {
              let e = Object(_.h)("cookiepreferences", "application_config");
              M = new C(e);
            }
            return M;
          })();
          const t = Object(j.a)(),
            r = Object(s.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            i = Object(s.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return a.a.createElement(
            N.a,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            a.a.createElement(
              "div",
              {
                className: Object(O.a)(
                  E.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              a.a.createElement(
                "div",
                null,
                Object(k.f)("#CookiePref_OptionalCookies_Title")
              )
            ),
            a.a.createElement(
              "div",
              { className: "account_settings_container" },
              a.a.createElement(
                T.a,
                { "flow-children": "row", className: E.ButtonGroup },
                a.a.createElement(
                  S.e,
                  {
                    className: Object(O.a)(
                      E.AllButton,
                      e.BIsRejectAll() ? E.ButtonHighlight : ""
                    ),
                    onClick: i,
                  },
                  Object(k.f)("#CookiePref_RejectAll")
                ),
                a.a.createElement(
                  S.e,
                  {
                    className: Object(O.a)(
                      E.AllButton,
                      e.BIsAllowAll() ? E.ButtonHighlight : ""
                    ),
                    onClick: r,
                  },
                  Object(k.f)("#CookiePref_AcceptAll")
                )
              ),
              a.a.createElement(z, { settings: e }),
              a.a.createElement(A, { settings: e }),
              a.a.createElement(G, { settings: e }),
              a.a.createElement(R, { settings: e })
            ),
            a.a.createElement(
              "div",
              {
                className: Object(O.a)(
                  E.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              a.a.createElement(
                "div",
                null,
                Object(k.f)("#CookiePref_TechnicallyNeccesary_Title")
              )
            ),
            a.a.createElement(
              "div",
              { className: "account_settings_container" },
              a.a.createElement(
                "p",
                null,
                Object(k.f)("#CookiePref_TechnicallyNeccesary_Desc")
              ),
              a.a.createElement(
                "div",
                { className: E.CookieGroup },
                a.a.createElement(
                  "div",
                  { className: E.NecessaryGroup },
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryTitle },
                    Object(k.f)("#CookiePref_SessionID_Title")
                  ),
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryDesc },
                    Object(k.f)("#CookiePref_SessionID_Desc")
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: E.NecessaryGroup },
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryTitle },
                    Object(k.f)("#CookiePref_ShoppingCart_Title")
                  ),
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryDesc },
                    Object(k.f)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: E.NecessaryGroup },
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryTitle },
                    Object(k.f)("#CookiePref_SteamCountry_Title")
                  ),
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryDesc },
                    Object(k.f)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: E.NecessaryGroup },
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryTitle },
                    Object(k.f)("#CookiePref_Timezone_Title")
                  ),
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryDesc },
                    Object(k.f)("#CookiePref_Timezone_Desc")
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: E.NecessaryGroup },
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryTitle },
                    Object(k.f)("#CookiePref_BirthTime_Title")
                  ),
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryDesc },
                    Object(k.f)("#CookiePref_BirthTime_Desc")
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: E.NecessaryGroup },
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryTitle },
                    Object(k.f)("#CookiePref_Login_Title")
                  ),
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryDesc },
                    Object(k.f)("#CookiePref_Login_Desc")
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: E.NecessaryGroup },
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryTitle },
                    Object(k.f)("#CookiePref_Language_Title")
                  ),
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryDesc },
                    Object(k.f)("#CookiePref_Language_Desc")
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: E.NecessaryGroup },
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryTitle },
                    Object(k.f)("#CookiePref_CookieSettings_Title")
                  ),
                  a.a.createElement(
                    "span",
                    { className: E.NecessaryDesc },
                    Object(k.f)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            a.a.createElement(
              "div",
              {
                className: Object(O.a)(
                  E.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              a.a.createElement(
                "div",
                null,
                Object(k.f)("#PrivacySettings_Marketing_Header")
              )
            ),
            a.a.createElement(
              "div",
              { className: "account_settings_container" },
              a.a.createElement(D, { settings: e })
            ),
            null
          );
        }),
        z = Object(v.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return a.a.createElement(
            "div",
            { className: E.CookieGroup },
            a.a.createElement(
              "div",
              { className: E.CookieSection },
              a.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_Content_Title")
              ),
              a.a.createElement(
                "p",
                { className: E.SectionDescription },
                Object(k.f)("#CookiePref_Content_Desc")
              ),
              a.a.createElement(B.J, {
                onChange: r,
                label: Object(k.f)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: Object(k.f)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        A = Object(v.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return a.a.createElement(
            "div",
            { className: E.CookieGroup },
            a.a.createElement(
              "div",
              { className: E.CookieSection },
              a.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_ValveAnalytics_Title")
              ),
              a.a.createElement(
                "p",
                { className: E.SectionDescription },
                Object(k.f)("#CookiePref_ValveAnalytics_Desc")
              ),
              a.a.createElement(B.J, {
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
        G = Object(v.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleGoogleAnalytics();
            }, [t]);
          return a.a.createElement(
            "div",
            { className: E.CookieGroup },
            a.a.createElement(
              "div",
              { className: E.CookieSection },
              a.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_GoogleAnalytics_Title")
              ),
              a.a.createElement(
                "p",
                { className: E.SectionDescription },
                Object(k.f)("#CookiePref_GoogleAnalytics_Desc")
              ),
              a.a.createElement(B.J, {
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
        R = Object(v.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            i = Object(s.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            n = Object(s.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return a.a.createElement(
            "div",
            { className: E.CookieGroup },
            a.a.createElement(
              "div",
              { className: E.CookieSection },
              a.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_ThirdParty_Title")
              ),
              a.a.createElement(
                "p",
                { className: E.SectionDescription },
                Object(k.f)("#CookiePref_ThirdParty_Desc")
              ),
              a.a.createElement(B.J, {
                onChange: r,
                label: Object(k.f)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: Object(k.f)("#CookiePref_YouTube_Desc"),
              }),
              a.a.createElement(B.J, {
                onChange: i,
                label: Object(k.f)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: Object(k.f)("#CookiePref_Vimeo_Desc"),
              }),
              a.a.createElement(B.J, {
                onChange: n,
                label: Object(k.f)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: Object(k.f)("#CookiePref_Sketchfab_Desc"),
              })
            )
          );
        }),
        D = Object(v.a)((e) => {
          const { settings: t } = e,
            r = Object(s.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return a.a.createElement(
            "div",
            { className: E.CookieGroup },
            a.a.createElement(
              "div",
              { className: E.CookieSection },
              a.a.createElement(
                "h2",
                null,
                Object(k.f)("#PrivacySettings_Marketing_Title")
              ),
              a.a.createElement(
                "p",
                { className: E.SectionDescription },
                Object(k.f)("#PrivacySettings_Marketing_Desc")
              ),
              a.a.createElement(B.J, {
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
        return a.a.createElement(
          i.d,
          null,
          a.a.createElement(
            i.b,
            { path: `${t}${r.CookieSettings()}` },
            a.a.createElement(w, null)
          )
        );
      };
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
    "ykc/": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return _;
      });
      var s = r("mrSG"),
        a = r("q1tI"),
        i = r.n(a),
        n = r("av+R"),
        c = r("yLGM"),
        o = r("opsS"),
        l = r("lkRc");
      function _(e) {
        const { children: t, navTreeRef: r } = e,
          a = Object(s.c)(e, ["children", "navTreeRef"]),
          _ = i.a.useRef(),
          m = Object(o.g)(_, r);
        if (l.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return i.a.createElement(
            n.b,
            Object.assign({}, a, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.a.createElement(c.a, null, t)
          );
        }
        return i.a.createElement(i.a.Fragment, null, t);
      }
    },
  },
]);
