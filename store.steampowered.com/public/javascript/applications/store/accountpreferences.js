/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    byIC: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "AccountPreferencesRoutes", function () {
          return N;
        });
      var n,
        c = r("q1tI"),
        s = r.n(c),
        a = r("EC67"),
        o = r("mrSG"),
        i = r("2vnA"),
        l = (r("bDQf"), r("lkRc")),
        _ = r("vDqi"),
        f = r.n(_),
        m = r("TLQK"),
        p = (function () {
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
              return Object(o.b)(this, void 0, void 0, function () {
                return Object(o.e)(this, function (e) {
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
              return Object(o.b)(this, void 0, void 0, function () {
                var r, n, c, s, a, i;
                return Object(o.e)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      (r =
                        l.d.STORE_BASE_URL +
                        "account/ajaxsetcookiepreferences"),
                        (n = new FormData()).set("sessionid", l.d.SESSIONID),
                        n.append(
                          "cookiepreferences",
                          JSON.stringify(this.m_Preferences)
                        ),
                        (o.label = 1);
                    case 1:
                      return (
                        o.trys.push([1, 3, , 4]),
                        [4, f.a.post(r, n, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        200 != (c = o.sent()).status ||
                        1 !=
                          (null === (e = null == c ? void 0 : c.data) ||
                          void 0 === e
                            ? void 0
                            : e.success)
                          ? window.ShowAlertDialog(
                              Object(m.f)("#CookiePref_Error"),
                              Object(m.f)("#CookiePref_ErrorNotSaved")
                            )
                          : 1 ==
                              (null === (t = null == c ? void 0 : c.data) ||
                              void 0 === t
                                ? void 0
                                : t.success) &&
                            ((s = c.data),
                            (a = s.transfer_urls),
                            (i = s.transfer_params),
                            a &&
                              i &&
                              this.TransferCookiePreferencesToSites(a, i)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        o.sent(),
                        window.ShowAlertDialog(
                          Object(m.f)("#CookiePref_Error"),
                          Object(m.f)("#CookiePref_ErrorNotSaved")
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
              for (var n = 0, c = e; n < c.length; n++) {
                var s = c[n];
                f.a.post(s, r);
              }
            }),
            Object(o.c)([i.C], e.prototype, "m_Preferences", void 0),
            e
          );
        })(),
        u = r("TyAF"),
        h = r("Mgs7"),
        g = r("nNQW"),
        y = r("exH9");
      var P = Object(u.a)(function () {
          var e = (function () {
              if (!n) {
                var e = Object(l.h)("cookiepreferences", "application_config");
                n = new p(e);
              }
              return n;
            })(),
            t = Object(c.useCallback)(
              function () {
                e.SetPreferenceState(1);
              },
              [e]
            ),
            r = Object(c.useCallback)(
              function () {
                e.SetPreferenceState(2);
              },
              [e]
            );
          return s.a.createElement(
            "div",
            null,
            s.a.createElement(
              "div",
              {
                className: Object(y.a)(
                  g.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.a.createElement(
                "div",
                null,
                Object(m.f)("#CookiePref_OptionalCookies_Title")
              )
            ),
            s.a.createElement(
              "div",
              { className: "account_settings_container" },
              s.a.createElement(
                "div",
                { className: g.ButtonGroup },
                s.a.createElement(
                  "div",
                  {
                    className: Object(y.a)(
                      g.AllButton,
                      e.BIsRejectAll() ? g.ButtonHighlight : ""
                    ),
                    onClick: r,
                  },
                  Object(m.f)("#CookiePref_RejectAll")
                ),
                s.a.createElement(
                  "div",
                  {
                    className: Object(y.a)(
                      g.AllButton,
                      e.BIsAllowAll() ? g.ButtonHighlight : ""
                    ),
                    onClick: t,
                  },
                  Object(m.f)("#CookiePref_AcceptAll")
                )
              ),
              s.a.createElement(b, { settings: e }),
              s.a.createElement(k, { settings: e }),
              s.a.createElement(d, { settings: e }),
              s.a.createElement(C, { settings: e })
            ),
            s.a.createElement(
              "div",
              {
                className: Object(y.a)(
                  g.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.a.createElement(
                "div",
                null,
                Object(m.f)("#CookiePref_TechnicallyNeccesary_Title")
              )
            ),
            s.a.createElement(
              "div",
              { className: "account_settings_container" },
              s.a.createElement(
                "p",
                null,
                Object(m.f)("#CookiePref_TechnicallyNeccesary_Desc")
              ),
              s.a.createElement(
                "div",
                { className: g.CookieGroup },
                s.a.createElement(
                  "div",
                  { className: g.NecessaryGroup },
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryTitle },
                    Object(m.f)("#CookiePref_SessionID_Title")
                  ),
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryDesc },
                    Object(m.f)("#CookiePref_SessionID_Desc")
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: g.NecessaryGroup },
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryTitle },
                    Object(m.f)("#CookiePref_ShoppingCart_Title")
                  ),
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryDesc },
                    Object(m.f)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: g.NecessaryGroup },
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryTitle },
                    Object(m.f)("#CookiePref_SteamCountry_Title")
                  ),
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryDesc },
                    Object(m.f)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: g.NecessaryGroup },
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryTitle },
                    Object(m.f)("#CookiePref_Timezone_Title")
                  ),
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryDesc },
                    Object(m.f)("#CookiePref_Timezone_Desc")
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: g.NecessaryGroup },
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryTitle },
                    Object(m.f)("#CookiePref_BirthTime_Title")
                  ),
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryDesc },
                    Object(m.f)("#CookiePref_BirthTime_Desc")
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: g.NecessaryGroup },
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryTitle },
                    Object(m.f)("#CookiePref_Login_Title")
                  ),
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryDesc },
                    Object(m.f)("#CookiePref_Login_Desc")
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: g.NecessaryGroup },
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryTitle },
                    Object(m.f)("#CookiePref_Language_Title")
                  ),
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryDesc },
                    Object(m.f)("#CookiePref_Language_Desc")
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: g.NecessaryGroup },
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryTitle },
                    Object(m.f)("#CookiePref_CookieSettings_Title")
                  ),
                  s.a.createElement(
                    "span",
                    { className: g.NecessaryDesc },
                    Object(m.f)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            s.a.createElement(
              "div",
              {
                className: Object(y.a)(
                  g.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.a.createElement(
                "div",
                null,
                Object(m.f)("#PrivacySettings_Marketing_Header")
              )
            ),
            s.a.createElement(
              "div",
              { className: "account_settings_container" },
              s.a.createElement(v, { settings: e })
            ),
            null
          );
        }),
        b = Object(u.a)(function (e) {
          var t = e.settings,
            r = Object(c.useCallback)(
              function () {
                t.ToggleRecentApps();
              },
              [t]
            );
          return s.a.createElement(
            "div",
            { className: g.CookieGroup },
            s.a.createElement(
              "div",
              { className: g.CookieSection },
              s.a.createElement(
                "h2",
                null,
                Object(m.f)("#CookiePref_Content_Title")
              ),
              s.a.createElement(
                "p",
                { className: g.SectionDescription },
                Object(m.f)("#CookiePref_Content_Desc")
              ),
              s.a.createElement(h.p, {
                onChange: r,
                label: Object(m.f)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: Object(m.f)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        k = Object(u.a)(function (e) {
          var t = e.settings,
            r = Object(c.useCallback)(
              function () {
                t.ToggleImpressions();
              },
              [t]
            );
          return s.a.createElement(
            "div",
            { className: g.CookieGroup },
            s.a.createElement(
              "div",
              { className: g.CookieSection },
              s.a.createElement(
                "h2",
                null,
                Object(m.f)("#CookiePref_ValveAnalytics_Title")
              ),
              s.a.createElement(
                "p",
                { className: g.SectionDescription },
                Object(m.f)("#CookiePref_ValveAnalytics_Desc")
              ),
              s.a.createElement(h.p, {
                onChange: r,
                label: Object(m.f)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: Object(m.f)(
                  "#CookiePref_ValveAnalytics_ToggleDesc"
                ),
              })
            )
          );
        }),
        d = Object(u.a)(function (e) {
          var t = e.settings,
            r = Object(c.useCallback)(
              function () {
                t.ToggleGoogleAnalytics();
              },
              [t]
            );
          return s.a.createElement(
            "div",
            { className: g.CookieGroup },
            s.a.createElement(
              "div",
              { className: g.CookieSection },
              s.a.createElement(
                "h2",
                null,
                Object(m.f)("#CookiePref_GoogleAnalytics_Title")
              ),
              s.a.createElement(
                "p",
                { className: g.SectionDescription },
                Object(m.f)("#CookiePref_GoogleAnalytics_Desc")
              ),
              s.a.createElement(h.p, {
                onChange: r,
                label: Object(m.f)("#CookiePref_GoogleAnalytics_ToggleLabel"),
                checked: t.GetGoogleAnalytics(),
                description: Object(m.f)(
                  "#CookiePref_GoogleAnalytics_ToggleDesc"
                ),
              })
            )
          );
        }),
        C = Object(u.a)(function (e) {
          var t = e.settings,
            r = Object(c.useCallback)(
              function () {
                t.ToggleYouTube();
              },
              [t]
            ),
            n = Object(c.useCallback)(
              function () {
                t.ToggleVimeo();
              },
              [t]
            ),
            a = Object(c.useCallback)(
              function () {
                t.ToggleSketchfab();
              },
              [t]
            );
          return s.a.createElement(
            "div",
            { className: g.CookieGroup },
            s.a.createElement(
              "div",
              { className: g.CookieSection },
              s.a.createElement(
                "h2",
                null,
                Object(m.f)("#CookiePref_ThirdParty_Title")
              ),
              s.a.createElement(
                "p",
                { className: g.SectionDescription },
                Object(m.f)("#CookiePref_ThirdParty_Desc")
              ),
              s.a.createElement(h.p, {
                onChange: r,
                label: Object(m.f)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: Object(m.f)("#CookiePref_YouTube_Desc"),
              }),
              s.a.createElement(h.p, {
                onChange: n,
                label: Object(m.f)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: Object(m.f)("#CookiePref_Vimeo_Desc"),
              }),
              s.a.createElement(h.p, {
                onChange: a,
                label: Object(m.f)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: Object(m.f)("#CookiePref_Sketchfab_Desc"),
              })
            )
          );
        }),
        v = Object(u.a)(function (e) {
          var t = e.settings,
            r = Object(c.useCallback)(
              function () {
                t.ToggleUTMEnabled();
              },
              [t]
            );
          return s.a.createElement(
            "div",
            { className: g.CookieGroup },
            s.a.createElement(
              "div",
              { className: g.CookieSection },
              s.a.createElement(
                "h2",
                null,
                Object(m.f)("#PrivacySettings_Marketing_Title")
              ),
              s.a.createElement(
                "p",
                { className: g.SectionDescription },
                Object(m.f)("#PrivacySettings_Marketing_Desc")
              ),
              s.a.createElement(h.p, {
                onChange: r,
                label: Object(m.f)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: Object(m.f)("#PrivacySettings_UTM_ToggleDesc"),
              })
            )
          );
        }),
        N = {
          CookieSettings: function () {
            return "/cookiepreferences";
          },
        };
      t.default = function (e) {
        var t = e.match.url,
          r = N;
        return s.a.createElement(
          a.d,
          null,
          s.a.createElement(
            a.b,
            { path: "" + t + r.CookieSettings() },
            s.a.createElement(P, null)
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
