/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    byIC: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "AccountPreferencesRoutes", function () {
          return L;
        });
      var r = n("q1tI"),
        i = n.n(r),
        o = n("EC67"),
        a = n("mrSG"),
        s = n("vDqi"),
        c = n.n(s),
        l = n("2vnA"),
        u = (n("mgoM"), n("OS6B"), n("lkRc")),
        _ = n("hRO2"),
        f = n("OS8t"),
        m = _.Message;
      var p,
        y = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.version || f.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      version: { n: 1, br: f.d.readEnum, bw: f.h.writeEnum },
                      preference_state: {
                        n: 2,
                        br: f.d.readEnum,
                        bw: f.h.writeEnum,
                      },
                      content_customization: { n: 3, c: d },
                      valve_analytics: { n: 4, c: g },
                      third_party_analytics: { n: 5, c: h },
                      third_party_content: { n: 6, c: b },
                      utm_enabled: {
                        n: 7,
                        d: !0,
                        br: f.d.readBool,
                        bw: f.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = f.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return f.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return f.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new _.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return f.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              f.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAccountPrivacyCookiePreferences";
            }),
            t
          );
        })(m),
        d = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.recentapps || f.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      recentapps: { n: 1, br: f.d.readBool, bw: f.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = f.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return f.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return f.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new _.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return f.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              f.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAccountPrivacyCookiePreferences_ContentCustomization";
            }),
            t
          );
        })(m),
        g = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.product_impressions_tracking || f.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      product_impressions_tracking: {
                        n: 1,
                        br: f.d.readBool,
                        bw: f.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = f.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return f.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return f.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new _.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return f.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              f.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAccountPrivacyCookiePreferences_ValveAnalytics";
            }),
            t
          );
        })(m),
        h = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.google_analytics || f.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      google_analytics: {
                        n: 1,
                        br: f.d.readBool,
                        bw: f.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = f.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return f.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return f.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new _.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return f.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              f.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
            }),
            t
          );
        })(m),
        b = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.youtube || f.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      youtube: { n: 1, br: f.d.readBool, bw: f.h.writeBool },
                      vimeo: { n: 2, br: f.d.readBool, bw: f.h.writeBool },
                      sketchfab: { n: 3, br: f.d.readBool, bw: f.h.writeBool },
                      twitter: { n: 4, br: f.d.readBool, bw: f.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = f.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return f.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return f.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new _.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return f.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              f.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
            }),
            t
          );
        })(m),
        v = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.preferences || f.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { preferences: { n: 1, c: y } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = f.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return f.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return f.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new _.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return f.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              f.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAccountPrivacy_GetCookiePreferences_Response";
            }),
            t
          );
        })(m);
      !(function (e) {
        e.GetCookiePreferences = function (e, t) {
          return e.SendMsg("AccountPrivacy.GetCookiePreferences#1", t, v, {
            ePrivilege: 1,
          });
        };
      })(p || (p = {}));
      var C,
        T = n("TLQK"),
        E = (function () {
          function e(e) {
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
              0 == this.m_Preferences.version &&
                (this.m_Preferences.version = 1);
          }
          return (
            (e.prototype.GetVersion = function () {
              return this.m_Preferences.version;
            }),
            (e.prototype.GetPreferenceState = function () {
              return this.m_Preferences.preference_state;
            }),
            (e.prototype.BIsAllowAll = function () {
              return (
                1 == this.m_Preferences.preference_state ||
                0 == this.m_Preferences.preference_state
              );
            }),
            (e.prototype.BIsRejectAll = function () {
              return 2 == this.m_Preferences.preference_state;
            }),
            (e.prototype.SetPreferenceState = function (e) {
              if (this.m_Preferences.preference_state != e) {
                if (
                  ((this.m_Preferences.preference_state = e), 1 == e || 2 == e)
                ) {
                  var t = 1 == e;
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
            }),
            (e.prototype.GetRecentApps = function () {
              return this.m_Preferences.content_customization.recentapps;
            }),
            (e.prototype.ToggleRecentApps = function () {
              (this.m_Preferences.content_customization.recentapps = !this
                .m_Preferences.content_customization.recentapps),
                this.ProcessToggle();
            }),
            (e.prototype.GetImpressions = function () {
              return this.m_Preferences.valve_analytics
                .product_impressions_tracking;
            }),
            (e.prototype.ToggleImpressions = function () {
              (this.m_Preferences.valve_analytics.product_impressions_tracking = !this
                .m_Preferences.valve_analytics.product_impressions_tracking),
                this.ProcessToggle();
            }),
            (e.prototype.GetGoogleAnalytics = function () {
              return this.m_Preferences.third_party_analytics.google_analytics;
            }),
            (e.prototype.ToggleGoogleAnalytics = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                return Object(a.e)(this, function (e) {
                  return (
                    (this.m_Preferences.third_party_analytics.google_analytics = !this
                      .m_Preferences.third_party_analytics.google_analytics),
                    this.ProcessToggle(),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.GetSketchfab = function () {
              return this.m_Preferences.third_party_content.sketchfab;
            }),
            (e.prototype.ToggleSketchfab = function () {
              (this.m_Preferences.third_party_content.sketchfab = !this
                .m_Preferences.third_party_content.sketchfab),
                this.ProcessToggle();
            }),
            (e.prototype.GetVimeo = function () {
              return this.m_Preferences.third_party_content.vimeo;
            }),
            (e.prototype.ToggleVimeo = function () {
              (this.m_Preferences.third_party_content.vimeo = !this
                .m_Preferences.third_party_content.vimeo),
                this.ProcessToggle();
            }),
            (e.prototype.GetYouTube = function () {
              return this.m_Preferences.third_party_content.youtube;
            }),
            (e.prototype.ToggleYouTube = function () {
              (this.m_Preferences.third_party_content.youtube = !this
                .m_Preferences.third_party_content.youtube),
                this.ProcessToggle();
            }),
            (e.prototype.GetUTMEnabled = function () {
              return this.m_Preferences.utm_enabled;
            }),
            (e.prototype.ToggleUTMEnabled = function () {
              (this.m_Preferences.utm_enabled = !this.m_Preferences
                .utm_enabled),
                this.PostCookieSettings();
            }),
            (e.prototype.ProcessToggle = function () {
              (this.m_Preferences.preference_state = 3),
                this.PostCookieSettings();
            }),
            (e.prototype.PostCookieSettings = function () {
              var e, t;
              return Object(a.b)(this, void 0, void 0, function () {
                var n, r, i, o, s, l;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      (n =
                        u.d.STORE_BASE_URL +
                        "account/ajaxsetcookiepreferences"),
                        (r = new FormData()).set("sessionid", u.d.SESSIONID),
                        r.append(
                          "cookiepreferences",
                          JSON.stringify(this.m_Preferences)
                        ),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        [4, c.a.post(n, r, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        200 != (i = a.sent()).status ||
                        1 !=
                          (null === (e = null == i ? void 0 : i.data) ||
                          void 0 === e
                            ? void 0
                            : e.success)
                          ? window.ShowAlertDialog(
                              Object(T.f)("#CookiePref_Error"),
                              Object(T.f)("#CookiePref_ErrorNotSaved")
                            )
                          : 1 ==
                              (null === (t = null == i ? void 0 : i.data) ||
                              void 0 === t
                                ? void 0
                                : t.success) &&
                            ((o = i.data),
                            (s = o.transfer_urls),
                            (l = o.transfer_params),
                            s &&
                              l &&
                              this.TransferCookiePreferencesToSites(s, l)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        a.sent(),
                        window.ShowAlertDialog(
                          Object(T.f)("#CookiePref_Error"),
                          Object(T.f)("#CookiePref_ErrorNotSaved")
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.TransferCookiePreferencesToSites = function (e, t) {
              var n = new FormData();
              n.set("transfer_params", t);
              for (var r = 0, i = e; r < i.length; r++) {
                var o = i[r];
                c.a.post(o, n);
              }
            }),
            Object(a.c)([l.C], e.prototype, "m_Preferences", void 0),
            e
          );
        })(),
        O = n("TyAF"),
        P = n("Mgs7"),
        S = n("nNQW"),
        k = n("exH9"),
        B = n("qDk6"),
        R = n("hwrv"),
        N = n("ykc/"),
        j = n("av+R");
      var w = Object(O.a)(function () {
          var e = (function () {
              if (!C) {
                var e = Object(u.h)("cookiepreferences", "application_config");
                C = new E(e);
              }
              return C;
            })(),
            t = Object(R.a)(),
            n = Object(r.useCallback)(
              function () {
                e.SetPreferenceState(1);
              },
              [e]
            ),
            o = Object(r.useCallback)(
              function () {
                e.SetPreferenceState(2);
              },
              [e]
            );
          return i.a.createElement(
            N.a,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            i.a.createElement(
              "div",
              {
                className: Object(k.a)(
                  S.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.a.createElement(
                "div",
                null,
                Object(T.f)("#CookiePref_OptionalCookies_Title")
              )
            ),
            i.a.createElement(
              "div",
              { className: "account_settings_container" },
              i.a.createElement(
                B.a,
                { "flow-children": "row", className: S.ButtonGroup },
                i.a.createElement(
                  j.e,
                  {
                    className: Object(k.a)(
                      S.AllButton,
                      e.BIsRejectAll() ? S.ButtonHighlight : ""
                    ),
                    onClick: o,
                  },
                  Object(T.f)("#CookiePref_RejectAll")
                ),
                i.a.createElement(
                  j.e,
                  {
                    className: Object(k.a)(
                      S.AllButton,
                      e.BIsAllowAll() ? S.ButtonHighlight : ""
                    ),
                    onClick: n,
                  },
                  Object(T.f)("#CookiePref_AcceptAll")
                )
              ),
              i.a.createElement(D, { settings: e }),
              i.a.createElement(I, { settings: e }),
              i.a.createElement(M, { settings: e }),
              i.a.createElement(A, { settings: e })
            ),
            i.a.createElement(
              "div",
              {
                className: Object(k.a)(
                  S.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.a.createElement(
                "div",
                null,
                Object(T.f)("#CookiePref_TechnicallyNeccesary_Title")
              )
            ),
            i.a.createElement(
              "div",
              { className: "account_settings_container" },
              i.a.createElement(
                "p",
                null,
                Object(T.f)("#CookiePref_TechnicallyNeccesary_Desc")
              ),
              i.a.createElement(
                "div",
                { className: S.CookieGroup },
                i.a.createElement(
                  "div",
                  { className: S.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryTitle },
                    Object(T.f)("#CookiePref_SessionID_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryDesc },
                    Object(T.f)("#CookiePref_SessionID_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: S.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryTitle },
                    Object(T.f)("#CookiePref_ShoppingCart_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryDesc },
                    Object(T.f)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: S.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryTitle },
                    Object(T.f)("#CookiePref_SteamCountry_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryDesc },
                    Object(T.f)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: S.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryTitle },
                    Object(T.f)("#CookiePref_Timezone_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryDesc },
                    Object(T.f)("#CookiePref_Timezone_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: S.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryTitle },
                    Object(T.f)("#CookiePref_BirthTime_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryDesc },
                    Object(T.f)("#CookiePref_BirthTime_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: S.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryTitle },
                    Object(T.f)("#CookiePref_Login_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryDesc },
                    Object(T.f)("#CookiePref_Login_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: S.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryTitle },
                    Object(T.f)("#CookiePref_Language_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryDesc },
                    Object(T.f)("#CookiePref_Language_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: S.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryTitle },
                    Object(T.f)("#CookiePref_CookieSettings_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: S.NecessaryDesc },
                    Object(T.f)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            i.a.createElement(
              "div",
              {
                className: Object(k.a)(
                  S.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              i.a.createElement(
                "div",
                null,
                Object(T.f)("#PrivacySettings_Marketing_Header")
              )
            ),
            i.a.createElement(
              "div",
              { className: "account_settings_container" },
              i.a.createElement(G, { settings: e })
            ),
            null
          );
        }),
        D = Object(O.a)(function (e) {
          var t = e.settings,
            n = Object(r.useCallback)(
              function () {
                t.ToggleRecentApps();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: S.CookieGroup },
            i.a.createElement(
              "div",
              { className: S.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(T.f)("#CookiePref_Content_Title")
              ),
              i.a.createElement(
                "p",
                { className: S.SectionDescription },
                Object(T.f)("#CookiePref_Content_Desc")
              ),
              i.a.createElement(P.p, {
                onChange: n,
                label: Object(T.f)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: Object(T.f)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        I = Object(O.a)(function (e) {
          var t = e.settings,
            n = Object(r.useCallback)(
              function () {
                t.ToggleImpressions();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: S.CookieGroup },
            i.a.createElement(
              "div",
              { className: S.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(T.f)("#CookiePref_ValveAnalytics_Title")
              ),
              i.a.createElement(
                "p",
                { className: S.SectionDescription },
                Object(T.f)("#CookiePref_ValveAnalytics_Desc")
              ),
              i.a.createElement(P.p, {
                onChange: n,
                label: Object(T.f)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: Object(T.f)(
                  "#CookiePref_ValveAnalytics_ToggleDesc"
                ),
              })
            )
          );
        }),
        M = Object(O.a)(function (e) {
          var t = e.settings,
            n = Object(r.useCallback)(
              function () {
                t.ToggleGoogleAnalytics();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: S.CookieGroup },
            i.a.createElement(
              "div",
              { className: S.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(T.f)("#CookiePref_GoogleAnalytics_Title")
              ),
              i.a.createElement(
                "p",
                { className: S.SectionDescription },
                Object(T.f)("#CookiePref_GoogleAnalytics_Desc")
              ),
              i.a.createElement(P.p, {
                onChange: n,
                label: Object(T.f)("#CookiePref_GoogleAnalytics_ToggleLabel"),
                checked: t.GetGoogleAnalytics(),
                description: Object(T.f)(
                  "#CookiePref_GoogleAnalytics_ToggleDesc"
                ),
              })
            )
          );
        }),
        A = Object(O.a)(function (e) {
          var t = e.settings,
            n = Object(r.useCallback)(
              function () {
                t.ToggleYouTube();
              },
              [t]
            ),
            o = Object(r.useCallback)(
              function () {
                t.ToggleVimeo();
              },
              [t]
            ),
            a = Object(r.useCallback)(
              function () {
                t.ToggleSketchfab();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: S.CookieGroup },
            i.a.createElement(
              "div",
              { className: S.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(T.f)("#CookiePref_ThirdParty_Title")
              ),
              i.a.createElement(
                "p",
                { className: S.SectionDescription },
                Object(T.f)("#CookiePref_ThirdParty_Desc")
              ),
              i.a.createElement(P.p, {
                onChange: n,
                label: Object(T.f)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: Object(T.f)("#CookiePref_YouTube_Desc"),
              }),
              i.a.createElement(P.p, {
                onChange: o,
                label: Object(T.f)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: Object(T.f)("#CookiePref_Vimeo_Desc"),
              }),
              i.a.createElement(P.p, {
                onChange: a,
                label: Object(T.f)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: Object(T.f)("#CookiePref_Sketchfab_Desc"),
              })
            )
          );
        }),
        G = Object(O.a)(function (e) {
          var t = e.settings,
            n = Object(r.useCallback)(
              function () {
                t.ToggleUTMEnabled();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: S.CookieGroup },
            i.a.createElement(
              "div",
              { className: S.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(T.f)("#PrivacySettings_Marketing_Title")
              ),
              i.a.createElement(
                "p",
                { className: S.SectionDescription },
                Object(T.f)("#PrivacySettings_Marketing_Desc")
              ),
              i.a.createElement(P.p, {
                onChange: n,
                label: Object(T.f)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: Object(T.f)("#PrivacySettings_UTM_ToggleDesc"),
              })
            )
          );
        }),
        L = {
          CookieSettings: function () {
            return "/cookiepreferences";
          },
        };
      t.default = function (e) {
        var t = e.match.url,
          n = L;
        return i.a.createElement(
          o.d,
          null,
          i.a.createElement(
            o.b,
            { path: "" + t + n.CookieSettings() },
            i.a.createElement(w, null)
          )
        );
      };
    },
    hwrv: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      });
      var r,
        i = n("mrSG"),
        o = n("rHSA"),
        a = n("XxJJ"),
        s = [
          { index: 0, type: o.a.OK, category: "action" },
          { index: 1, type: o.a.CANCEL, category: "action" },
          { index: 2, type: o.a.SECONDARY, category: "action" },
          { index: 3, type: o.a.OPTIONS, category: "action" },
          { index: 4, type: o.a.BUMPER_LEFT, category: "action" },
          { index: 5, type: o.a.BUMPER_RIGHT, category: "action" },
          { index: 6, type: o.a.TRIGGER_LEFT, category: "action" },
          { index: 7, type: o.a.TRIGGER_RIGHT, category: "action" },
          { index: 8, type: o.a.SELECT, category: "action" },
          { index: 9, type: o.a.START, category: "action" },
          { index: 10, type: o.a.LSTICK_CLICK, category: "action" },
          { index: 11, type: o.a.RSTICK_CLICK, category: "action" },
          { index: 12, type: o.a.DIR_UP, category: "navigation" },
          { index: 13, type: o.a.DIR_DOWN, category: "navigation" },
          { index: 14, type: o.a.DIR_LEFT, category: "navigation" },
          { index: 15, type: o.a.DIR_RIGHT, category: "navigation" },
          { index: 16, type: o.a.STEAM_GUIDE, category: "action" },
          { index: 17, type: o.a.SELECT, category: "action" },
        ],
        c = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgGamepadStatus = []),
              t.SetSourceType(o.b.GAMEPAD),
              window.addEventListener("gamepadconnected", function (e) {
                t.m_bGamepadDetected ||
                  (t.OnGamepadDetected(), t.PollGamepads());
              }),
              t
            );
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.PollGamepads = function () {
              for (
                var e = navigator.getGamepads(), t = !1, n = 0;
                n < e.length;
                n++
              ) {
                var r = e[n];
                if (r) {
                  this.m_rgGamepadStatus[n] ||
                    (this.m_rgGamepadStatus[n] = { buttons: [] });
                  for (
                    var i = this.m_rgGamepadStatus[n], o = 0;
                    o < s.length;
                    o++
                  ) {
                    var a = s[o],
                      c = a.index;
                    r.buttons[c] &&
                      (r.buttons[c].pressed
                        ? ((t = !0),
                          i.buttons[c] ||
                            ((i.buttons[c] = !0), this.OnButtonDown(a.type)))
                        : i.buttons[c] &&
                          (this.OnButtonUp(a.type), (i.buttons[c] = !1)));
                  }
                }
              }
              document.hasFocus() || t
                ? requestAnimationFrame(this.PollGamepads)
                : (console.log("Lost focus - suspending gamepad polling"),
                  window.addEventListener(
                    "focusin",
                    this.OnWindowRegainedFocus
                  ));
            }),
            (t.prototype.OnWindowRegainedFocus = function () {
              window.removeEventListener("focusin", this.OnWindowRegainedFocus),
                this.PollGamepads();
            }),
            Object(i.c)([a.a], t.prototype, "PollGamepads", null),
            Object(i.c)([a.a], t.prototype, "OnWindowRegainedFocus", null),
            t
          );
        })(o.c),
        l = n("kyHq"),
        u = {
          A: o.a.OK,
          B: o.a.CANCEL,
          X: o.a.SECONDARY,
          Y: o.a.OPTIONS,
          SELECT: o.a.SELECT,
          START: o.a.START,
          LSHOULDER: o.a.BUMPER_LEFT,
          RSHOULDER: o.a.BUMPER_RIGHT,
          LTRIGGER: o.a.TRIGGER_LEFT,
          RTRIGGER: o.a.TRIGGER_RIGHT,
          LEFTSTICK_UP: o.a.DIR_UP,
          LEFTSTICK_RIGHT: o.a.DIR_RIGHT,
          LEFTSTICK_DOWN: o.a.DIR_DOWN,
          LEFTSTICK_LEFT: o.a.DIR_LEFT,
          LEFTSTICK_CLICK: o.a.LSTICK_CLICK,
          RIGHTSTICK_CLICK: o.a.RSTICK_CLICK,
          LeftStick: o.a.LSTICK_TOUCH,
          RightStick: o.a.RSTICK_TOUCH,
          LeftTrackpad: o.a.LPAD_TOUCH,
          LeftTrackpadClick: o.a.LPAD_CLICK,
          RightTrackpad: o.a.RPAD_TOUCH,
          RightTrackpadClick: o.a.RPAD_CLICK,
          RearLeftUpper: o.a.REAR_LEFT_UPPER,
          RearLeftLower: o.a.REAR_LEFT_LOWER,
          RearRightUpper: o.a.REAR_RIGHT_UPPER,
          RearRightLower: o.a.REAR_RIGHT_LOWER,
        },
        _ =
          (((r = {})[l.h.SystemKey0] = o.a.STEAM_GUIDE),
          (r[l.h.SystemKey1] = o.a.STEAM_QUICK_MENU),
          r),
        f = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgControllers = new Map()),
              "undefined" != typeof SteamClient &&
                ((t.m_hUnregisterControllerInput = SteamClient.Input.RegisterForControllerInputMessages(
                  t.HandleControllerInputMessages
                )),
                SteamClient.System.UI.RegisterForSystemKeyEvents(
                  t.HandleSystemKeyEvents
                )),
              t.SetSourceType(o.b.GAMEPAD),
              t
            );
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.HandleSystemKeyEvents = function (e) {
              var t = _[e.eKey];
              t && this.OnSystemButtonPress(t, e.nControllerIndex);
            }),
            (t.prototype.OnSystemButtonPress = function (e, t) {
              this.OnButtonDown(e, t), this.OnButtonUp(e, t);
            }),
            (t.prototype.GetController = function (e) {
              var t = this.m_rgControllers.get(e);
              return (
                t ||
                  ((t = { activeButtons: {} }), this.m_rgControllers.set(e, t)),
                t
              );
            }),
            (t.prototype.HandleControllerInputMessages = function (e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var r = n[t],
                  i = u[r.strActionName];
                if (null != i) {
                  var o = this.GetController(r.nController);
                  r.bState && !o.activeButtons[i]
                    ? ((o.activeButtons[i] = !0),
                      this.OnButtonDown(i, r.nController))
                    : !r.bState &&
                      o.activeButtons[i] &&
                      ((o.activeButtons[i] = !1),
                      this.OnButtonUp(i, r.nController));
                }
              }
            }),
            Object(i.c)([a.a], t.prototype, "HandleSystemKeyEvents", null),
            Object(i.c)(
              [a.a],
              t.prototype,
              "HandleControllerInputMessages",
              null
            ),
            t
          );
        })(o.c),
        m = n("X3Ds"),
        p = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_lastButtonDown = o.a.INVALID),
              n.SetSourceType(o.b.KEYBOARD),
              t.addEventListener("keydown", n.OnKeyDown),
              t.addEventListener("keyup", n.OnKeyUp),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.OnKeyDown = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                t != this.m_lastButtonDown &&
                (this.Reset(),
                this.OnButtonDown(t),
                (this.m_lastButtonDown = t),
                e.preventDefault());
            }),
            (t.prototype.OnKeyUp = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                (this.OnButtonUp(t),
                (this.m_lastButtonDown = o.a.INVALID),
                e.preventDefault());
            }),
            (t.prototype.Reset = function () {
              this.m_lastButtonDown != o.a.INVALID &&
                (this.OnButtonUp(this.m_lastButtonDown),
                (this.m_lastButtonDown = o.a.INVALID));
            }),
            (t.prototype.TranslateKey = function (e) {
              var t = e.code,
                n = e.ctrlKey,
                r =
                  m.q(e.target) &&
                  ("INPUT" === e.target.nodeName ||
                    "TEXTAREA" === e.target.nodeName);
              if (n)
                switch (t) {
                  case "Digit1":
                    return o.a.STEAM_GUIDE;
                  case "Digit2":
                    return o.a.STEAM_QUICK_MENU;
                  case "Digit3":
                    return o.a.SELECT;
                  case "Digit4":
                    return o.a.BUMPER_LEFT;
                  case "Digit5":
                    return o.a.BUMPER_RIGHT;
                  case "Digit6":
                    return o.a.LSTICK_CLICK;
                  case "Digit7":
                    return o.a.RSTICK_CLICK;
                  case "Digit8":
                    return o.a.OPTIONS;
                  case "Digit9":
                    return o.a.SELECT;
                  case "Digit0":
                    return o.a.START;
                }
              switch (t) {
                case "Escape":
                  return o.a.CANCEL;
                case "Enter":
                  return r ? o.a.INVALID : o.a.OK;
                case "Backspace":
                  return r ? o.a.INVALID : o.a.SECONDARY;
                case "ArrowUp":
                  return o.a.DIR_UP;
                case "ArrowDown":
                  return o.a.DIR_DOWN;
                case "ArrowLeft":
                  return o.a.DIR_LEFT;
                case "ArrowRight":
                  return o.a.DIR_RIGHT;
              }
              return o.a.INVALID;
            }),
            Object(i.c)([a.a], t.prototype, "OnKeyDown", null),
            Object(i.c)([a.a], t.prototype, "OnKeyUp", null),
            Object(i.c)([a.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        y = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_nAccumulatedMouseMovement = 0),
              (n.m_bFirstMouseUpdate = !0),
              n.SetSourceType(o.b.MOUSE),
              t.addEventListener("mousedown", n.OnMouseDown),
              t.addEventListener("mousemove", n.OnMouseMove),
              t.addEventListener("blur", n.Reset),
              n
            );
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.OnMouseDown = function (e) {
              e.defaultPrevented || this.OnNavigationTypeChanged(o.b.MOUSE);
            }),
            (t.prototype.OnMouseMove = function (e) {
              if (!e.defaultPrevented) {
                if (this.m_bFirstMouseUpdate)
                  return (
                    (this.m_nLastScreenX = e.screenX),
                    (this.m_nLastScreenY = e.screenY),
                    void (this.m_bFirstMouseUpdate = !1)
                  );
                (this.m_nAccumulatedMouseMovement +=
                  Math.abs(e.screenX - this.m_nLastScreenX) +
                  Math.abs(e.screenY - this.m_nLastScreenY)),
                  this.m_nAccumulatedMouseMovement > 500 &&
                    (this.Reset(), this.OnNavigationTypeChanged(o.b.MOUSE));
              }
            }),
            (t.prototype.Reset = function () {
              (this.m_nAccumulatedMouseMovement = 0),
                (this.m_bFirstMouseUpdate = !0);
            }),
            Object(i.c)([a.a], t.prototype, "OnMouseDown", null),
            Object(i.c)([a.a], t.prototype, "OnMouseMove", null),
            Object(i.c)([a.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        d = n("NxAk"),
        g = n("lkRc"),
        h = (function () {
          function e() {
            (this.m_GamepadNavigationController = new d.c()),
              g.d.IN_GAMEPADUI &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new f()
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new c()
                )),
              "dev" == g.d.WEB_UNIVERSE &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new p(window)
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new y(window)
                ));
          }
          return (
            (e.prototype.GetNavigationController = function () {
              return this.m_GamepadNavigationController;
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()),
                  "dev" == g.d.WEB_UNIVERSE &&
                    (window.g_StoreWebNavStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            e
          );
        })();
      function b() {
        var e = window.legacyWebFocusNavController;
        return e || h.Get().GetNavigationController();
      }
    },
    nNQW: function (e, t, n) {
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
    "ykc/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n.n(i),
        a = n("av+R"),
        s = n("yLGM"),
        c = n("opsS"),
        l = n("lkRc");
      function u(e) {
        var t = e.children,
          n = e.navTreeRef,
          i = Object(r.f)(e, ["children", "navTreeRef"]),
          u = o.a.useRef(),
          _ = Object(c.f)(u, n);
        if (l.d.IN_GAMEPADUI) {
          var f = window.__nav_tree_root;
          return o.a.createElement(
            a.b,
            Object(r.a)({}, i, {
              navTreeRef: _,
              secondary: !0,
              parentEmbeddedNavTree: f,
            }),
            o.a.createElement(s.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
  },
]);
