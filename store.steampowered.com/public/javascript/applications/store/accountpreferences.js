/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    byIC: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "AccountPreferencesRoutes", function () {
          return v;
        });
      var c,
        s = r("q1tI"),
        o = r.n(s),
        n = r("Ty5D"),
        l = r("mrSG"),
        i = r("2vnA"),
        _ = (r("bDQf"), r("lkRc")),
        a = r("vDqi"),
        f = r.n(a),
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
              var t;
              this.m_Preferences.preference_state != e &&
                ((1 != (this.m_Preferences.preference_state = e) && 2 != e) ||
                  ((t = 1 == e),
                  (this.m_Preferences.content_customization.recentapps = t),
                  (this.m_Preferences.third_party_analytics.google_analytics = t),
                  (this.m_Preferences.third_party_content.sketchfab = t),
                  (this.m_Preferences.third_party_content.twitter = t),
                  (this.m_Preferences.third_party_content.vimeo = t),
                  (this.m_Preferences.third_party_content.youtube = t),
                  (this.m_Preferences.valve_analytics.product_impressions_tracking = t)),
                this.PostCookieSettings());
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
              return Object(l.b)(this, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
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
            (e.prototype.ProcessToggle = function () {
              (this.m_Preferences.preference_state = 3),
                this.PostCookieSettings();
            }),
            (e.prototype.PostCookieSettings = function () {
              var i, a;
              return Object(l.b)(this, void 0, void 0, function () {
                var t, r, n, c, s, o;
                return Object(l.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        _.d.STORE_BASE_URL +
                        "account/ajaxsetcookiepreferences"),
                        (r = new FormData()).set("sessionid", _.d.SESSIONID),
                        r.append(
                          "cookiepreferences",
                          JSON.stringify(this.m_Preferences)
                        ),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, f.a.post(t, r, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        200 != (n = e.sent()).status ||
                        1 !=
                          (null === (i = null == n ? void 0 : n.data) ||
                          void 0 === i
                            ? void 0
                            : i.success)
                          ? window.ShowAlertDialog(
                              Object(m.f)("#CookiePref_Error"),
                              Object(m.f)("#CookiePref_ErrorNotSaved")
                            )
                          : 1 ==
                              (null === (a = null == n ? void 0 : n.data) ||
                              void 0 === a
                                ? void 0
                                : a.success) &&
                            ((c = n.data),
                            (s = c.transfer_urls),
                            (o = c.transfer_params),
                            s &&
                              o &&
                              this.TransferCookiePreferencesToSites(s, o)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        e.sent(),
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
            Object(l.c)([i.C], e.prototype, "m_Preferences", void 0),
            e
          );
        })(),
        u = r("TyAF"),
        h = r("Mgs7"),
        y = r("nNQW"),
        g = r("exH9");
      var P = Object(u.a)(function () {
          var e,
            t =
              (c ||
                ((e = Object(_.h)("cookiepreferences", "application_config")),
                (c = new p(e))),
              c),
            r = Object(s.useCallback)(
              function () {
                t.SetPreferenceState(1);
              },
              [t]
            ),
            n = Object(s.useCallback)(
              function () {
                t.SetPreferenceState(2);
              },
              [t]
            );
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              {
                className: Object(g.a)(
                  y.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              o.a.createElement(
                "div",
                null,
                Object(m.f)("#CookiePref_OptionalCookies_Title")
              )
            ),
            o.a.createElement(
              "div",
              { className: "account_settings_container" },
              o.a.createElement(
                "div",
                { className: y.ButtonGroup },
                o.a.createElement(
                  "div",
                  {
                    className: Object(g.a)(
                      y.AllButton,
                      t.BIsRejectAll() ? y.ButtonHighlight : ""
                    ),
                    onClick: n,
                  },
                  Object(m.f)("#CookiePref_RejectAll")
                ),
                o.a.createElement(
                  "div",
                  {
                    className: Object(g.a)(
                      y.AllButton,
                      t.BIsAllowAll() ? y.ButtonHighlight : ""
                    ),
                    onClick: r,
                  },
                  Object(m.f)("#CookiePref_AcceptAll")
                )
              ),
              o.a.createElement(k, { settings: t }),
              o.a.createElement(b, { settings: t }),
              o.a.createElement(d, { settings: t }),
              o.a.createElement(C, { settings: t })
            ),
            o.a.createElement(
              "div",
              {
                className: Object(g.a)(
                  y.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              o.a.createElement(
                "div",
                null,
                Object(m.f)("#CookiePref_TechnicallyNeccesary_Title")
              )
            ),
            o.a.createElement(
              "div",
              { className: "account_settings_container" },
              o.a.createElement(
                "p",
                null,
                Object(m.f)("#CookiePref_TechnicallyNeccesary_Desc")
              ),
              o.a.createElement(
                "div",
                { className: y.CookieGroup },
                o.a.createElement(
                  "div",
                  { className: y.NecessaryGroup },
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryTitle },
                    Object(m.f)("#CookiePref_SessionID_Title")
                  ),
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryDesc },
                    Object(m.f)("#CookiePref_SessionID_Desc")
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: y.NecessaryGroup },
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryTitle },
                    Object(m.f)("#CookiePref_ShoppingCart_Title")
                  ),
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryDesc },
                    Object(m.f)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: y.NecessaryGroup },
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryTitle },
                    Object(m.f)("#CookiePref_SteamCountry_Title")
                  ),
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryDesc },
                    Object(m.f)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: y.NecessaryGroup },
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryTitle },
                    Object(m.f)("#CookiePref_Timezone_Title")
                  ),
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryDesc },
                    Object(m.f)("#CookiePref_Timezone_Desc")
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: y.NecessaryGroup },
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryTitle },
                    Object(m.f)("#CookiePref_BirthTime_Title")
                  ),
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryDesc },
                    Object(m.f)("#CookiePref_BirthTime_Desc")
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: y.NecessaryGroup },
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryTitle },
                    Object(m.f)("#CookiePref_CookieSettings_Title")
                  ),
                  o.a.createElement(
                    "span",
                    { className: y.NecessaryDesc },
                    Object(m.f)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            null
          );
        }),
        k = Object(u.a)(function (e) {
          var t = e.settings,
            r = Object(s.useCallback)(
              function () {
                t.ToggleRecentApps();
              },
              [t]
            );
          return o.a.createElement(
            "div",
            { className: y.CookieGroup },
            o.a.createElement(
              "div",
              { className: y.CookieSection },
              o.a.createElement(
                "h2",
                null,
                Object(m.f)("#CookiePref_Content_Title")
              ),
              o.a.createElement(
                "p",
                { className: y.SectionDescription },
                Object(m.f)("#CookiePref_Content_Desc")
              ),
              o.a.createElement(h.o, {
                onChange: r,
                label: Object(m.f)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: Object(m.f)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        b = Object(u.a)(function (e) {
          var t = e.settings,
            r = Object(s.useCallback)(
              function () {
                t.ToggleImpressions();
              },
              [t]
            );
          return o.a.createElement(
            "div",
            { className: y.CookieGroup },
            o.a.createElement(
              "div",
              { className: y.CookieSection },
              o.a.createElement(
                "h2",
                null,
                Object(m.f)("#CookiePref_ValveAnalytics_Title")
              ),
              o.a.createElement(
                "p",
                { className: y.SectionDescription },
                Object(m.f)("#CookiePref_ValveAnalytics_Desc")
              ),
              o.a.createElement(h.o, {
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
            r = Object(s.useCallback)(
              function () {
                t.ToggleGoogleAnalytics();
              },
              [t]
            );
          return o.a.createElement(
            "div",
            { className: y.CookieGroup },
            o.a.createElement(
              "div",
              { className: y.CookieSection },
              o.a.createElement(
                "h2",
                null,
                Object(m.f)("#CookiePref_GoogleAnalytics_Title")
              ),
              o.a.createElement(
                "p",
                { className: y.SectionDescription },
                Object(m.f)("#CookiePref_GoogleAnalytics_Desc")
              ),
              o.a.createElement(h.o, {
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
            r = Object(s.useCallback)(
              function () {
                t.ToggleYouTube();
              },
              [t]
            ),
            n = Object(s.useCallback)(
              function () {
                t.ToggleVimeo();
              },
              [t]
            ),
            c = Object(s.useCallback)(
              function () {
                t.ToggleSketchfab();
              },
              [t]
            );
          return o.a.createElement(
            "div",
            { className: y.CookieGroup },
            o.a.createElement(
              "div",
              { className: y.CookieSection },
              o.a.createElement(
                "h2",
                null,
                Object(m.f)("#CookiePref_ThirdParty_Title")
              ),
              o.a.createElement(
                "p",
                { className: y.SectionDescription },
                Object(m.f)("#CookiePref_ThirdParty_Desc")
              ),
              o.a.createElement(h.o, {
                onChange: r,
                label: Object(m.f)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: Object(m.f)("#CookiePref_YouTube_Desc"),
              }),
              o.a.createElement(h.o, {
                onChange: n,
                label: Object(m.f)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: Object(m.f)("#CookiePref_Vimeo_Desc"),
              }),
              o.a.createElement(h.o, {
                onChange: c,
                label: Object(m.f)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: Object(m.f)("#CookiePref_Sketchfab_Desc"),
              })
            )
          );
        }),
        v = {
          CookieSettings: function () {
            return "/cookiepreferences";
          },
        };
      t.default = function (e) {
        var t = e.match.url;
        return o.a.createElement(
          n.d,
          null,
          o.a.createElement(
            n.b,
            { path: "" + t + v.CookieSettings() },
            o.a.createElement(P, null)
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
