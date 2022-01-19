/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    byIC: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "AccountPreferencesRoutes", function () {
          return A;
        });
      var n = r("q1tI"),
        i = r.n(n),
        o = r("EC67"),
        a = r("mrSG"),
        s = r("vDqi"),
        c = r.n(s),
        l = r("2vnA"),
        u = (r("mgoM"), r("OS6B"), r("lkRc")),
        f = r("hRO2"),
        _ = r("OS8t"),
        m = f.Message;
      var p,
        y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.version || _.a(t.M()),
              m.initialize(n, r, 0, -1, void 0, null),
              n
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
                      version: { n: 1, br: _.d.readEnum, bw: _.h.writeEnum },
                      preference_state: {
                        n: 2,
                        br: _.d.readEnum,
                        bw: _.h.writeEnum,
                      },
                      content_customization: { n: 3, c: d },
                      valve_analytics: { n: 4, c: b },
                      third_party_analytics: { n: 5, c: h },
                      third_party_content: { n: 6, c: g },
                      utm_enabled: {
                        n: 7,
                        d: !0,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new f.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new f.BinaryWriter();
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
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.recentapps || _.a(t.M()),
              m.initialize(n, r, 0, -1, void 0, null),
              n
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
                      recentapps: { n: 1, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new f.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new f.BinaryWriter();
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
        b = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.product_impressions_tracking || _.a(t.M()),
              m.initialize(n, r, 0, -1, void 0, null),
              n
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
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new f.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new f.BinaryWriter();
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
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.google_analytics || _.a(t.M()),
              m.initialize(n, r, 0, -1, void 0, null),
              n
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
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new f.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new f.BinaryWriter();
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
        g = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.youtube || _.a(t.M()),
              m.initialize(n, r, 0, -1, void 0, null),
              n
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
                      youtube: { n: 1, br: _.d.readBool, bw: _.h.writeBool },
                      vimeo: { n: 2, br: _.d.readBool, bw: _.h.writeBool },
                      sketchfab: { n: 3, br: _.d.readBool, bw: _.h.writeBool },
                      twitter: { n: 4, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new f.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new f.BinaryWriter();
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
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.preferences || _.a(t.M()),
              m.initialize(n, r, 0, -1, void 0, null),
              n
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
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new f.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new f.BinaryWriter();
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
      var P,
        k = r("TLQK"),
        C = (function () {
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
                var r, n, i, o, s, l;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      (r =
                        u.d.STORE_BASE_URL +
                        "account/ajaxsetcookiepreferences"),
                        (n = new FormData()).set("sessionid", u.d.SESSIONID),
                        n.append(
                          "cookiepreferences",
                          JSON.stringify(this.m_Preferences)
                        ),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        [4, c.a.post(r, n, { withCredentials: !0 })]
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
                              Object(k.f)("#CookiePref_Error"),
                              Object(k.f)("#CookiePref_ErrorNotSaved")
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
                          Object(k.f)("#CookiePref_Error"),
                          Object(k.f)("#CookiePref_ErrorNotSaved")
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
              var r = new FormData();
              r.set("transfer_params", t);
              for (var n = 0, i = e; n < i.length; n++) {
                var o = i[n];
                c.a.post(o, r);
              }
            }),
            Object(a.c)([l.C], e.prototype, "m_Preferences", void 0),
            e
          );
        })(),
        B = r("TyAF"),
        O = r("Mgs7"),
        j = r("nNQW"),
        T = r("exH9");
      var N = Object(B.a)(function () {
          var e = (function () {
              if (!P) {
                var e = Object(u.h)("cookiepreferences", "application_config");
                P = new C(e);
              }
              return P;
            })(),
            t = Object(n.useCallback)(
              function () {
                e.SetPreferenceState(1);
              },
              [e]
            ),
            r = Object(n.useCallback)(
              function () {
                e.SetPreferenceState(2);
              },
              [e]
            );
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(
              "div",
              {
                className: Object(T.a)(
                  j.CookieSettingsHeader,
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
                "div",
                { className: j.ButtonGroup },
                i.a.createElement(
                  "div",
                  {
                    className: Object(T.a)(
                      j.AllButton,
                      e.BIsRejectAll() ? j.ButtonHighlight : ""
                    ),
                    onClick: r,
                  },
                  Object(k.f)("#CookiePref_RejectAll")
                ),
                i.a.createElement(
                  "div",
                  {
                    className: Object(T.a)(
                      j.AllButton,
                      e.BIsAllowAll() ? j.ButtonHighlight : ""
                    ),
                    onClick: t,
                  },
                  Object(k.f)("#CookiePref_AcceptAll")
                )
              ),
              i.a.createElement(E, { settings: e }),
              i.a.createElement(S, { settings: e }),
              i.a.createElement(w, { settings: e }),
              i.a.createElement(z, { settings: e })
            ),
            i.a.createElement(
              "div",
              {
                className: Object(T.a)(
                  j.CookieSettingsHeader,
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
                { className: j.CookieGroup },
                i.a.createElement(
                  "div",
                  { className: j.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryTitle },
                    Object(k.f)("#CookiePref_SessionID_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryDesc },
                    Object(k.f)("#CookiePref_SessionID_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: j.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryTitle },
                    Object(k.f)("#CookiePref_ShoppingCart_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryDesc },
                    Object(k.f)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: j.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryTitle },
                    Object(k.f)("#CookiePref_SteamCountry_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryDesc },
                    Object(k.f)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: j.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryTitle },
                    Object(k.f)("#CookiePref_Timezone_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryDesc },
                    Object(k.f)("#CookiePref_Timezone_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: j.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryTitle },
                    Object(k.f)("#CookiePref_BirthTime_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryDesc },
                    Object(k.f)("#CookiePref_BirthTime_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: j.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryTitle },
                    Object(k.f)("#CookiePref_Login_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryDesc },
                    Object(k.f)("#CookiePref_Login_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: j.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryTitle },
                    Object(k.f)("#CookiePref_Language_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryDesc },
                    Object(k.f)("#CookiePref_Language_Desc")
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: j.NecessaryGroup },
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryTitle },
                    Object(k.f)("#CookiePref_CookieSettings_Title")
                  ),
                  i.a.createElement(
                    "span",
                    { className: j.NecessaryDesc },
                    Object(k.f)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            i.a.createElement(
              "div",
              {
                className: Object(T.a)(
                  j.CookieSettingsHeader,
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
              i.a.createElement(M, { settings: e })
            ),
            null
          );
        }),
        E = Object(B.a)(function (e) {
          var t = e.settings,
            r = Object(n.useCallback)(
              function () {
                t.ToggleRecentApps();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: j.CookieGroup },
            i.a.createElement(
              "div",
              { className: j.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_Content_Title")
              ),
              i.a.createElement(
                "p",
                { className: j.SectionDescription },
                Object(k.f)("#CookiePref_Content_Desc")
              ),
              i.a.createElement(O.p, {
                onChange: r,
                label: Object(k.f)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: Object(k.f)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        S = Object(B.a)(function (e) {
          var t = e.settings,
            r = Object(n.useCallback)(
              function () {
                t.ToggleImpressions();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: j.CookieGroup },
            i.a.createElement(
              "div",
              { className: j.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_ValveAnalytics_Title")
              ),
              i.a.createElement(
                "p",
                { className: j.SectionDescription },
                Object(k.f)("#CookiePref_ValveAnalytics_Desc")
              ),
              i.a.createElement(O.p, {
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
        w = Object(B.a)(function (e) {
          var t = e.settings,
            r = Object(n.useCallback)(
              function () {
                t.ToggleGoogleAnalytics();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: j.CookieGroup },
            i.a.createElement(
              "div",
              { className: j.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_GoogleAnalytics_Title")
              ),
              i.a.createElement(
                "p",
                { className: j.SectionDescription },
                Object(k.f)("#CookiePref_GoogleAnalytics_Desc")
              ),
              i.a.createElement(O.p, {
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
        z = Object(B.a)(function (e) {
          var t = e.settings,
            r = Object(n.useCallback)(
              function () {
                t.ToggleYouTube();
              },
              [t]
            ),
            o = Object(n.useCallback)(
              function () {
                t.ToggleVimeo();
              },
              [t]
            ),
            a = Object(n.useCallback)(
              function () {
                t.ToggleSketchfab();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: j.CookieGroup },
            i.a.createElement(
              "div",
              { className: j.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#CookiePref_ThirdParty_Title")
              ),
              i.a.createElement(
                "p",
                { className: j.SectionDescription },
                Object(k.f)("#CookiePref_ThirdParty_Desc")
              ),
              i.a.createElement(O.p, {
                onChange: r,
                label: Object(k.f)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: Object(k.f)("#CookiePref_YouTube_Desc"),
              }),
              i.a.createElement(O.p, {
                onChange: o,
                label: Object(k.f)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: Object(k.f)("#CookiePref_Vimeo_Desc"),
              }),
              i.a.createElement(O.p, {
                onChange: a,
                label: Object(k.f)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: Object(k.f)("#CookiePref_Sketchfab_Desc"),
              })
            )
          );
        }),
        M = Object(B.a)(function (e) {
          var t = e.settings,
            r = Object(n.useCallback)(
              function () {
                t.ToggleUTMEnabled();
              },
              [t]
            );
          return i.a.createElement(
            "div",
            { className: j.CookieGroup },
            i.a.createElement(
              "div",
              { className: j.CookieSection },
              i.a.createElement(
                "h2",
                null,
                Object(k.f)("#PrivacySettings_Marketing_Title")
              ),
              i.a.createElement(
                "p",
                { className: j.SectionDescription },
                Object(k.f)("#PrivacySettings_Marketing_Desc")
              ),
              i.a.createElement(O.p, {
                onChange: r,
                label: Object(k.f)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: Object(k.f)("#PrivacySettings_UTM_ToggleDesc"),
              })
            )
          );
        }),
        A = {
          CookieSettings: function () {
            return "/cookiepreferences";
          },
        };
      t.default = function (e) {
        var t = e.match.url,
          r = A;
        return i.a.createElement(
          o.d,
          null,
          i.a.createElement(
            o.b,
            { path: "" + t + r.CookieSettings() },
            i.a.createElement(N, null)
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
  },
]);
