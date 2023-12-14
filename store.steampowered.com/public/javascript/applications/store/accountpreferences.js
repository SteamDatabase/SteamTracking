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
    66294: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => _ });
      var n = i(33940),
        s = i(89526),
        r = i(44026),
        o = i(17589),
        a = i(4306),
        c = i(32765),
        l = i(94952);
      function _(e) {
        const { children: t, navTreeRef: i } = e,
          _ = (0, n._T)(e, ["children", "navTreeRef"]),
          m = s.useRef(),
          f = (0, a.BE)(m, i),
          g = (0, c.id)(),
          p = window.__virtual_keyboard_client;
        if (g) {
          const e = window.__nav_tree_root;
          return s.createElement(
            r.Fe,
            Object.assign({}, _, {
              navTreeRef: f,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            s.createElement(
              l.o5,
              { factory: p },
              s.createElement(o.O, null, t),
            ),
          );
        }
        return s.createElement(s.Fragment, null, t);
      }
    },
    14491: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { AccountPreferencesRoutes: () => H, default: () => R });
      var n = i(89526),
        s = i(59934),
        r = i(33940),
        o = i(59621),
        a = (i(23217), i(32765)),
        c = i(52868),
        l = i.n(c),
        _ = i(14826);
      class m {
        constructor(e) {
          (this.m_Preferences = void 0),
            (0, o.rC)(this),
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            const i = a.De.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              n = new FormData();
            n.set("sessionid", a.De.SESSIONID),
              n.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let s = yield l().post(i, n, { withCredentials: !0 });
              if (
                200 != s.status ||
                1 !=
                  (null === (e = null == s ? void 0 : s.data) || void 0 === e
                    ? void 0
                    : e.success)
              )
                window.ShowAlertDialog(
                  (0, _.Xx)("#CookiePref_Error"),
                  (0, _.Xx)("#CookiePref_ErrorNotSaved"),
                );
              else if (
                1 ==
                (null === (t = null == s ? void 0 : s.data) || void 0 === t
                  ? void 0
                  : t.success)
              ) {
                0;
                const { transfer_urls: e, transfer_params: t } = s.data;
                e && t && this.TransferCookiePreferencesToSites(e, t);
              }
            } catch (e) {
              0,
                window.ShowAlertDialog(
                  (0, _.Xx)("#CookiePref_Error"),
                  (0, _.Xx)("#CookiePref_ErrorNotSaved"),
                );
            }
          });
        }
        TransferCookiePreferencesToSites(e, t) {
          const i = new FormData();
          i.set("transfer_params", t);
          for (const t of e) l().post(t, i);
        }
      }
      (0, r.gn)([o.LO], m.prototype, "m_Preferences", void 0);
      var f = i(88464),
        g = i(57605),
        p = i(65841),
        h = i(19304),
        d = i(51438),
        u = i(83145),
        P = i(66294),
        k = i(44026);
      let N;
      const y = (0, f.Pi)(() => {
          let e = (function () {
            if (!N) {
              let e = (0, a.kQ)("cookiepreferences", "application_config");
              N = new m(e);
            }
            return N;
          })();
          const t = (0, u.L)(),
            i = (0, n.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            s = (0, n.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return n.createElement(
            P.p,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            n.createElement(
              "div",
              {
                className: (0, h.Z)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              n.createElement(
                "div",
                null,
                (0, _.Xx)("#CookiePref_OptionalCookies_Title"),
              ),
            ),
            n.createElement(
              "div",
              { className: "account_settings_container" },
              n.createElement(
                d.s,
                { "flow-children": "row", className: p.ButtonGroup },
                n.createElement(
                  k.Ks,
                  {
                    className: (0, h.Z)(
                      p.AllButton,
                      e.BIsRejectAll() ? p.ButtonHighlight : "",
                    ),
                    onClick: s,
                  },
                  (0, _.Xx)("#CookiePref_RejectAll"),
                ),
                n.createElement(
                  k.Ks,
                  {
                    className: (0, h.Z)(
                      p.AllButton,
                      e.BIsAllowAll() ? p.ButtonHighlight : "",
                    ),
                    onClick: i,
                  },
                  (0, _.Xx)("#CookiePref_AcceptAll"),
                ),
              ),
              n.createElement(E, { settings: e }),
              n.createElement(v, { settings: e }),
              n.createElement(C, { settings: e }),
            ),
            n.createElement(
              "div",
              {
                className: (0, h.Z)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              n.createElement(
                "div",
                null,
                (0, _.Xx)("#CookiePref_TechnicallyNeccesary_Title"),
              ),
            ),
            n.createElement(
              "div",
              { className: "account_settings_container" },
              n.createElement(
                "p",
                null,
                (0, _.Xx)("#CookiePref_TechnicallyNeccesary_Desc"),
              ),
              n.createElement(
                "div",
                { className: p.CookieGroup },
                n.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_SessionID_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_SessionID_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_ShoppingCart_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_ShoppingCart_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_SteamCountry_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_SteamCountry_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Timezone_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Timezone_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_BirthTime_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_BirthTime_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Login_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Login_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Language_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Language_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_CookieSettings_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_CookieSettings_Desc"),
                  ),
                ),
              ),
            ),
            n.createElement(
              "div",
              {
                className: (0, h.Z)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              n.createElement(
                "div",
                null,
                (0, _.Xx)("#PrivacySettings_Marketing_Header"),
              ),
            ),
            n.createElement(
              "div",
              { className: "account_settings_container" },
              n.createElement(S, { settings: e }),
            ),
            null,
          );
        }),
        E = (0, f.Pi)((e) => {
          const { settings: t } = e,
            i = (0, n.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return n.createElement(
            "div",
            { className: p.CookieGroup },
            n.createElement(
              "div",
              { className: p.CookieSection },
              n.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_Content_Title"),
              ),
              n.createElement(
                "p",
                { className: p.SectionDescription },
                (0, _.Xx)("#CookiePref_Content_Desc"),
              ),
              n.createElement(g.gE, {
                onChange: i,
                label: (0, _.Xx)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, _.Xx)("#CookiePref_Content_ToggleDesc"),
              }),
            ),
          );
        }),
        v = (0, f.Pi)((e) => {
          const { settings: t } = e,
            i = (0, n.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return n.createElement(
            "div",
            { className: p.CookieGroup },
            n.createElement(
              "div",
              { className: p.CookieSection },
              n.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_ValveAnalytics_Title"),
              ),
              n.createElement(
                "p",
                { className: p.SectionDescription },
                (0, _.Xx)("#CookiePref_ValveAnalytics_Desc"),
              ),
              n.createElement(g.gE, {
                onChange: i,
                label: (0, _.Xx)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, _.Xx)("#CookiePref_ValveAnalytics_ToggleDesc"),
              }),
            ),
          );
        }),
        C = (0, f.Pi)((e) => {
          const { settings: t } = e,
            i = (0, n.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            s = (0, n.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            r = (0, n.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return n.createElement(
            "div",
            { className: p.CookieGroup },
            n.createElement(
              "div",
              { className: p.CookieSection },
              n.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_ThirdParty_Title"),
              ),
              n.createElement(
                "p",
                { className: p.SectionDescription },
                (0, _.Xx)("#CookiePref_ThirdParty_Desc"),
              ),
              n.createElement(g.gE, {
                onChange: i,
                label: (0, _.Xx)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: (0, _.kQ)(
                  "#CookiePref_YouTube_Desc",
                  n.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, _.Xx)("#CookiePref_YouTube_TogglePolicyName"),
                  ),
                ),
              }),
              n.createElement(g.gE, {
                onChange: s,
                label: (0, _.Xx)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: (0, _.kQ)(
                  "#CookiePref_Vimeo_Desc",
                  n.createElement(
                    "a",
                    { href: "https://vimeo.com/privacy", target: "_blank" },
                    (0, _.Xx)("#CookiePref_Vimeo_TogglePolicyName"),
                  ),
                ),
              }),
              n.createElement(g.gE, {
                onChange: r,
                label: (0, _.Xx)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: (0, _.kQ)(
                  "#CookiePref_Sketchfab_Desc",
                  n.createElement(
                    "a",
                    { href: "https://sketchfab.com/privacy", target: "_blank" },
                    (0, _.Xx)("#CookiePref_Sketchfab_TogglePolicyName"),
                  ),
                ),
              }),
            ),
          );
        }),
        S = (0, f.Pi)((e) => {
          const { settings: t } = e,
            i = (0, n.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return n.createElement(
            "div",
            { className: p.CookieGroup },
            n.createElement(
              "div",
              { className: p.CookieSection },
              n.createElement(
                "h2",
                null,
                (0, _.Xx)("#PrivacySettings_Marketing_Title"),
              ),
              n.createElement(
                "p",
                { className: p.SectionDescription },
                (0, _.Xx)("#PrivacySettings_Marketing_Desc"),
              ),
              n.createElement(g.gE, {
                onChange: i,
                label: (0, _.Xx)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: (0, _.Xx)("#PrivacySettings_UTM_ToggleDesc"),
              }),
            ),
          );
        });
      class T {
        constructor(e) {
          (this.m_Preferences = void 0),
            (this.m_bUpdating = !1),
            (0, o.rC)(this),
            (this.m_Preferences = e);
        }
        GetPreferences() {
          return this.m_Preferences;
        }
        BUpdatingPreferences() {
          return this.m_bUpdating;
        }
        ToggleTargetPreference(e, t) {
          this.m_bUpdating = !0;
          let i = !1;
          for (let n of this.m_Preferences)
            if (t.notification_type == n.notification_type) {
              (n.notification_targets ^= e),
                1 != (1 & n.notification_targets) &&
                  (n.notification_targets = 0),
                (i = !0);
              break;
            }
          i && this.PostNotificationSettings(), (this.m_bUpdating = !1);
        }
        PostNotificationSettings() {
          var e, t;
          return (0, r.mG)(this, void 0, void 0, function* () {
            const i =
                a.De.STORE_BASE_URL + "account/ajaxsetnotificationsettings",
              n = new FormData();
            n.set("sessionid", a.De.SESSIONID),
              n.append(
                "notificationpreferences",
                JSON.stringify(this.m_Preferences),
              );
            try {
              let s = yield l().post(i, n, { withCredentials: !0 });
              200 != s.status ||
              1 !=
                (null === (e = null == s ? void 0 : s.data) || void 0 === e
                  ? void 0
                  : e.success)
                ? window.ShowAlertDialog(
                    (0, _.Xx)("#NotificationPref_Error"),
                    (0, _.Xx)("#NotificationPref_ErrorNotSaved"),
                  )
                : null === (t = null == s ? void 0 : s.data) ||
                  void 0 === t ||
                  t.success;
            } catch (e) {
              0,
                window.ShowAlertDialog(
                  (0, _.Xx)("#NotificationPref_Error"),
                  (0, _.Xx)("#NotificationPref_ErrorNotSaved"),
                );
            }
          });
        }
      }
      (0, r.gn)([o.LO], T.prototype, "m_Preferences", void 0),
        (0, r.gn)([o.LO], T.prototype, "m_bUpdating", void 0);
      var b = i(17560),
        D = i(16826);
      let x;
      function X() {
        if (!x) {
          let e = (0, a.kQ)("notificationpreferences", "application_config");
          x = new T(e);
        }
        return x;
      }
      const G = (0, f.Pi)(() => {
          let e = X();
          const t = (0, u.L)();
          let i = [];
          for (const t of e.GetPreferences())
            i.push(n.createElement(A, { preferenceSetting: t }));
          return n.createElement(
            P.p,
            { navID: "StoreNotificationSettings", NavigationManager: t },
            n.createElement(
              "div",
              {
                className: (0, h.Z)(
                  b.NotificationSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              n.createElement(
                "div",
                null,
                (0, _.Xx)("#NotificationSettings_Title"),
              ),
            ),
            n.createElement(
              "div",
              { className: "account_settings_container" },
              n.createElement(
                "p",
                { className: b.SectionDescription },
                (0, _.Xx)("#NotificationSettings_Desc1"),
              ),
              n.createElement(
                "p",
                { className: b.SectionDescription },
                (0, _.Xx)("#NotificationSettings_Desc2"),
              ),
              n.createElement(
                "div",
                { className: "notification_settings_container" },
                n.createElement(
                  "p",
                  null,
                  (0, _.Xx)("#NotificationSettings_SendMeWhen"),
                ),
                i,
              ),
            ),
          );
        }),
        A = (0, f.Pi)((e) => {
          const { preferenceSetting: t } = e;
          let i = X();
          const s = (0, n.useCallback)(() => {
              i.ToggleTargetPreference(1, t);
            }, [t, i]),
            r = (0, n.useCallback)(() => {
              i.ToggleTargetPreference(8, t);
            }, [t, i]),
            o = (0, n.useCallback)(() => {
              i.ToggleTargetPreference(2, t);
            }, [t, i]),
            [a, c] = (0, n.useState)(!1),
            l = i.BUpdatingPreferences(),
            m = 1 == (1 & t.notification_targets),
            f = 2 == (2 & t.notification_targets),
            p = 8 == (8 & t.notification_targets);
          return n.createElement(
            "div",
            { className: b.NotificationGroup },
            n.createElement(
              "div",
              { className: b.NotificationSection },
              n.createElement(g.fp, {
                className: b.NotificationFeedToggle,
                padding: "compact",
                onChange: s,
                disabled: l,
                bottomSeparator: "none",
                checked: m,
              }),
              n.createElement(
                "p",
                { className: b.NotificationDescription },
                ((d = t.notification_type),
                (0, _.Xx)("#SteamNotificationTypeDesc_" + d)),
              ),
              n.createElement(
                g.Yz,
                {
                  className: (0, h.Z)({
                    [b.PrefDetailsToggle]: !0,
                    [b.Selected]: a,
                  }),
                  onClick: () => c(!a),
                },
                n.createElement(D.vVQ, { direction: "down" }),
              ),
            ),
            a &&
              n.createElement(
                "div",
                { className: b.NotificationPrefDetails },
                n.createElement(g.ji, {
                  label: (0, _.Xx)("#NotificationSettings_SendToast"),
                  disabled: l || !m,
                  checked: p,
                  onChange: r,
                }),
                n.createElement(g.ji, {
                  label: (0, _.Xx)("#NotificationSettings_PushNotification"),
                  disabled: l || !m,
                  checked: f,
                  onChange: o,
                }),
              ),
          );
          var d;
        });
      var w = i(35993);
      const B = n.lazy(() =>
          Promise.all([
            i.e(3980),
            i.e(546),
            i.e(2848),
            i.e(1347),
            i.e(8820),
            i.e(4077),
            i.e(5819),
            i.e(1430),
            i.e(150),
            i.e(5114),
            i.e(5302),
            i.e(4383),
            i.e(6440),
            i.e(5800),
          ]).then(i.bind(i, 25389)),
        ),
        I = { FamilyManagement: () => "/familymanagement" },
        H = Object.assign(
          {
            CookieSettings: () => "/cookiepreferences",
            NotificationSettings: () => "/notificationsettings",
          },
          I,
        ),
        R = (e) => {
          const t = e.match.url,
            i = H;
          return n.createElement(
            s.rs,
            null,
            n.createElement(s.AW, {
              path: `${t}${i.CookieSettings()}`,
              render: () =>
                n.createElement(w.d, {
                  config: {
                    "cookie-preferences": () => n.createElement(y, null),
                  },
                }),
            }),
            n.createElement(s.AW, {
              path: `${t}${i.NotificationSettings()}`,
              render: () =>
                n.createElement(w.d, {
                  config: {
                    "notification-settings": () => n.createElement(G, null),
                  },
                }),
            }),
            n.createElement(s.AW, {
              path: `${t}${i.FamilyManagement()}`,
              render: () =>
                n.createElement(w.d, {
                  config: {
                    "family-management": () => n.createElement(B, null),
                  },
                }),
            }),
          );
        };
    },
  },
]);
