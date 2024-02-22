/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5821],
  {
    3934: (e) => {
      e.exports = {
        AllButton: "_24Y_0sMrz5EywcAsFUstI1",
        ButtonHighlight: "_3OVHZhM_IefZqAOIsPxatj",
        CookieSettingsHeader: "_3R3iiUuAhP-0M-rdtCANeY",
        ButtonGroup: "YPn6VOod44mu0w34xdzDC",
        CookieGroup: "_25H3qBQ1Lfsfq8nwc3M0Fk",
        CookieSection: "_3IKt4dLdwzyZtMqAwvawdG",
        SectionDescription: "GA-wFr-pPreiaNq3wRump",
        NecessaryGroup: "_24o8cEsvGK0bE4hHyUGhfh",
        NecessaryTitle: "_3if8ZNUUN7eSTxlCJbdgav",
        NecessaryDesc: "_9NmWi9VzZyFLjcu_GW_70",
      };
    },
    28890: (e) => {
      e.exports = {
        NotificationSettingsHeader: "_2XOzkA8bF8HiEtnoYSLHGC",
        SectionDescription: "_3K5HBHn_mMUrazI_oUH12q",
        NotificationGroup: "_1_kCY5Jc71QX_9j4Q7brk",
        NotificationSection: "_3Sbby9pYJeX9b2Dcjx1Gbc",
        NotificationFeedToggle: "_30Nc3G1cpcJeZAQulOQYHB",
        NotificationDescription: "_3FSzSTDALgYgSmsyvkISnG",
        NotificationPrefDetails: "_152HTE3xZ88Xk7LEEPFE68",
        PrefDetailsToggle: "_3XAMDDm5D1pSZpakvjyRPk",
        Selected: "_3yrEIJRje6XiWe9BiIGY7P",
      };
    },
    13043: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => _ });
      var n = r(85556),
        i = r(47427),
        s = r(82493),
        a = r(4030),
        c = r(20417),
        o = r(37563),
        l = r(35643);
      function _(e) {
        const { children: t, navTreeRef: r } = e,
          _ = (0, n._T)(e, ["children", "navTreeRef"]),
          m = i.useRef(),
          f = (0, c.BE)(m, r),
          g = (0, o.id)(),
          p = window.__virtual_keyboard_client;
        if (g) {
          const e = window.__nav_tree_root;
          return i.createElement(
            s.Fe,
            Object.assign({}, _, {
              navTreeRef: f,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.createElement(
              l.o5,
              { factory: p },
              i.createElement(a.O, null, t),
            ),
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    58289: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { AccountPreferencesRoutes: () => U, default: () => M });
      var n = r(47427),
        i = r(8285),
        s = r(85556),
        a = r(54842),
        c = (r(16649), r(37563)),
        o = r(80751),
        l = r.n(o),
        _ = r(31846);
      class m {
        constructor(e) {
          (this.m_Preferences = void 0),
            (0, a.rC)(this),
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            const r = c.De.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              n = new FormData();
            n.set("sessionid", c.De.SESSIONID),
              n.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let i = yield l().post(r, n, { withCredentials: !0 });
              if (
                200 != i.status ||
                1 !=
                  (null === (e = null == i ? void 0 : i.data) || void 0 === e
                    ? void 0
                    : e.success)
              )
                window.ShowAlertDialog(
                  (0, _.Xx)("#CookiePref_Error"),
                  (0, _.Xx)("#CookiePref_ErrorNotSaved"),
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
                  (0, _.Xx)("#CookiePref_Error"),
                  (0, _.Xx)("#CookiePref_ErrorNotSaved"),
                );
            }
          });
        }
        TransferCookiePreferencesToSites(e, t) {
          const r = new FormData();
          r.set("transfer_params", t);
          for (const t of e) l().post(t, r);
        }
      }
      (0, s.gn)([a.LO], m.prototype, "m_Preferences", void 0);
      var f = r(27605),
        g = r(1485),
        p = r(3934),
        h = r(13129),
        d = r(91618),
        u = r(41130),
        P = r(13043),
        k = r(82493);
      let E;
      const N = (0, f.Pi)(() => {
          let e = (function () {
            if (!E) {
              let e = (0, c.kQ)("cookiepreferences", "application_config");
              E = new m(e);
            }
            return E;
          })();
          const t = (0, u.L)(),
            r = (0, n.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            i = (0, n.useCallback)(() => {
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
                    onClick: i,
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
                    onClick: r,
                  },
                  (0, _.Xx)("#CookiePref_AcceptAll"),
                ),
              ),
              n.createElement(y, { settings: e }),
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
        y = (0, f.Pi)((e) => {
          const { settings: t } = e,
            r = (0, n.useCallback)(() => {
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
                onChange: r,
                label: (0, _.Xx)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, _.Xx)("#CookiePref_Content_ToggleDesc"),
              }),
            ),
          );
        }),
        v = (0, f.Pi)((e) => {
          const { settings: t } = e,
            r = (0, n.useCallback)(() => {
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
                onChange: r,
                label: (0, _.Xx)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, _.Xx)("#CookiePref_ValveAnalytics_ToggleDesc"),
              }),
            ),
          );
        }),
        C = (0, f.Pi)((e) => {
          const { settings: t } = e,
            r = (0, n.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            i = (0, n.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            s = (0, n.useCallback)(() => {
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
                onChange: r,
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
                onChange: i,
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
                onChange: s,
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
            r = (0, n.useCallback)(() => {
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
                onChange: r,
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
            (0, a.rC)(this),
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
          let r = !1;
          for (let n of this.m_Preferences)
            if (t.notification_type == n.notification_type) {
              (n.notification_targets ^= e),
                1 != (1 & n.notification_targets) &&
                  (n.notification_targets = 0),
                (r = !0);
              break;
            }
          r && this.PostNotificationSettings(), (this.m_bUpdating = !1);
        }
        PostNotificationSettings() {
          var e, t;
          return (0, s.mG)(this, void 0, void 0, function* () {
            const r =
                c.De.STORE_BASE_URL + "account/ajaxsetnotificationsettings",
              n = new FormData();
            n.set("sessionid", c.De.SESSIONID),
              n.append(
                "notificationpreferences",
                JSON.stringify(this.m_Preferences),
              );
            try {
              let i = yield l().post(r, n, { withCredentials: !0 });
              200 != i.status ||
              1 !=
                (null === (e = null == i ? void 0 : i.data) || void 0 === e
                  ? void 0
                  : e.success)
                ? window.ShowAlertDialog(
                    (0, _.Xx)("#NotificationPref_Error"),
                    (0, _.Xx)("#NotificationPref_ErrorNotSaved"),
                  )
                : null === (t = null == i ? void 0 : i.data) ||
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
      (0, s.gn)([a.LO], T.prototype, "m_Preferences", void 0),
        (0, s.gn)([a.LO], T.prototype, "m_bUpdating", void 0);
      var b = r(28890),
        D = r(58538);
      let x;
      function X() {
        if (!x) {
          let e = (0, c.kQ)("notificationpreferences", "application_config");
          x = new T(e);
        }
        return x;
      }
      const A = (0, f.Pi)(() => {
          let e = X();
          const t = (0, u.L)();
          let r = [];
          for (const t of e.GetPreferences())
            r.push(n.createElement(G, { preferenceSetting: t }));
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
                r,
              ),
            ),
          );
        }),
        G = (0, f.Pi)((e) => {
          const { preferenceSetting: t } = e;
          let r = X();
          const i = (0, n.useCallback)(() => {
              r.ToggleTargetPreference(1, t);
            }, [t, r]),
            s = (0, n.useCallback)(() => {
              r.ToggleTargetPreference(8, t);
            }, [t, r]),
            a = (0, n.useCallback)(() => {
              r.ToggleTargetPreference(2, t);
            }, [t, r]),
            [c, o] = (0, n.useState)(!1),
            l = r.BUpdatingPreferences(),
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
                onChange: i,
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
                    [b.Selected]: c,
                  }),
                  onClick: () => o(!c),
                },
                n.createElement(D.vVQ, { direction: "down" }),
              ),
            ),
            c &&
              n.createElement(
                "div",
                { className: b.NotificationPrefDetails },
                n.createElement(g.ji, {
                  label: (0, _.Xx)("#NotificationSettings_SendToast"),
                  disabled: l || !m,
                  checked: p,
                  onChange: s,
                }),
                n.createElement(g.ji, {
                  label: (0, _.Xx)("#NotificationSettings_PushNotification"),
                  disabled: l || !m,
                  checked: f,
                  onChange: a,
                }),
              ),
          );
          var d;
        });
      var w = r(56480);
      const I = n.lazy(() =>
          Promise.all([
            r.e(460),
            r.e(9766),
            r.e(1021),
            r.e(3344),
            r.e(8820),
            r.e(6882),
            r.e(7247),
            r.e(9424),
            r.e(7695),
            r.e(3243),
            r.e(344),
            r.e(1720),
            r.e(5800),
          ]).then(r.bind(r, 53593)),
        ),
        B = { FamilyManagement: () => "/familymanagement" },
        U = Object.assign(
          {
            CookieSettings: () => "/cookiepreferences",
            NotificationSettings: () => "/notificationsettings",
          },
          B,
        ),
        M = (e) => {
          const t = e.match.url,
            r = U;
          return n.createElement(
            i.rs,
            null,
            n.createElement(i.AW, {
              path: `${t}${r.CookieSettings()}`,
              render: () =>
                n.createElement(w.d, {
                  config: {
                    "cookie-preferences": () => n.createElement(N, null),
                  },
                }),
            }),
            n.createElement(i.AW, {
              path: `${t}${r.NotificationSettings()}`,
              render: () =>
                n.createElement(w.d, {
                  config: {
                    "notification-settings": () => n.createElement(A, null),
                  },
                }),
            }),
            n.createElement(i.AW, {
              path: `${t}${r.FamilyManagement()}`,
              render: () =>
                n.createElement(w.d, {
                  config: {
                    "family-management": () => n.createElement(I, null),
                  },
                }),
            }),
          );
        };
    },
  },
]);
