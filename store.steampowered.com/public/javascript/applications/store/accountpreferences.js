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
        NotificationSendWhen: "_3YstFVBT36qZA8FvdzEAF",
        NotificationDescription: "_3FSzSTDALgYgSmsyvkISnG",
        NotificationPrefDetails: "_152HTE3xZ88Xk7LEEPFE68",
        PrefDetailsToggle: "_3XAMDDm5D1pSZpakvjyRPk",
        Selected: "_3yrEIJRje6XiWe9BiIGY7P",
      };
    },
    13043: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => _ });
      var r = n(85556),
        i = n(47427),
        s = n(82493),
        a = n(4030),
        c = n(20417),
        o = n(37563),
        l = n(35643);
      function _(e) {
        const { children: t, navTreeRef: n } = e,
          _ = (0, r._T)(e, ["children", "navTreeRef"]),
          m = i.useRef(),
          f = (0, c.BE)(m, n),
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
    58289: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { AccountPreferencesRoutes: () => U, default: () => M });
      var r = n(47427),
        i = n(8285),
        s = n(85556),
        a = n(54842),
        c = (n(16649), n(37563)),
        o = n(80751),
        l = n.n(o),
        _ = n(31846);
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
            const n = c.De.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              r = new FormData();
            r.set("sessionid", c.De.SESSIONID),
              r.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let i = yield l().post(n, r, { withCredentials: !0 });
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
          const n = new FormData();
          n.set("transfer_params", t);
          for (const t of e) l().post(t, n);
        }
      }
      (0, s.gn)([a.LO], m.prototype, "m_Preferences", void 0);
      var f = n(27605),
        g = n(1485),
        p = n(3934),
        d = n(13129),
        h = n(91618),
        u = n(41130),
        P = n(13043),
        k = n(82493);
      let N;
      const E = (0, f.Pi)(() => {
          let e = (function () {
            if (!N) {
              let e = (0, c.kQ)("cookiepreferences", "application_config");
              N = new m(e);
            }
            return N;
          })();
          const t = (0, u.L)(),
            n = (0, r.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            i = (0, r.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return r.createElement(
            P.p,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            r.createElement(
              "div",
              {
                className: (0, d.Z)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              r.createElement(
                "div",
                null,
                (0, _.Xx)("#CookiePref_OptionalCookies_Title"),
              ),
            ),
            r.createElement(
              "div",
              { className: "account_settings_container" },
              r.createElement(
                h.s,
                { "flow-children": "row", className: p.ButtonGroup },
                r.createElement(
                  k.Ks,
                  {
                    className: (0, d.Z)(
                      p.AllButton,
                      e.BIsRejectAll() ? p.ButtonHighlight : "",
                    ),
                    onClick: i,
                  },
                  (0, _.Xx)("#CookiePref_RejectAll"),
                ),
                r.createElement(
                  k.Ks,
                  {
                    className: (0, d.Z)(
                      p.AllButton,
                      e.BIsAllowAll() ? p.ButtonHighlight : "",
                    ),
                    onClick: n,
                  },
                  (0, _.Xx)("#CookiePref_AcceptAll"),
                ),
              ),
              r.createElement(y, { settings: e }),
              r.createElement(v, { settings: e }),
              r.createElement(C, { settings: e }),
            ),
            r.createElement(
              "div",
              {
                className: (0, d.Z)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              r.createElement(
                "div",
                null,
                (0, _.Xx)("#CookiePref_TechnicallyNeccesary_Title"),
              ),
            ),
            r.createElement(
              "div",
              { className: "account_settings_container" },
              r.createElement(
                "p",
                null,
                (0, _.Xx)("#CookiePref_TechnicallyNeccesary_Desc"),
              ),
              r.createElement(
                "div",
                { className: p.CookieGroup },
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_SessionID_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_SessionID_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_ShoppingCart_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_ShoppingCart_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_SteamCountry_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_SteamCountry_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Timezone_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Timezone_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_BirthTime_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_BirthTime_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Login_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Login_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Language_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Language_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_CookieSettings_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_CookieSettings_Desc"),
                  ),
                ),
              ),
            ),
            r.createElement(
              "div",
              {
                className: (0, d.Z)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              r.createElement(
                "div",
                null,
                (0, _.Xx)("#PrivacySettings_Marketing_Header"),
              ),
            ),
            r.createElement(
              "div",
              { className: "account_settings_container" },
              r.createElement(S, { settings: e }),
            ),
            null,
          );
        }),
        y = (0, f.Pi)((e) => {
          const { settings: t } = e,
            n = (0, r.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return r.createElement(
            "div",
            { className: p.CookieGroup },
            r.createElement(
              "div",
              { className: p.CookieSection },
              r.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_Content_Title"),
              ),
              r.createElement(
                "p",
                { className: p.SectionDescription },
                (0, _.Xx)("#CookiePref_Content_Desc"),
              ),
              r.createElement(g.gE, {
                onChange: n,
                label: (0, _.Xx)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, _.Xx)("#CookiePref_Content_ToggleDesc"),
              }),
            ),
          );
        }),
        v = (0, f.Pi)((e) => {
          const { settings: t } = e,
            n = (0, r.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return r.createElement(
            "div",
            { className: p.CookieGroup },
            r.createElement(
              "div",
              { className: p.CookieSection },
              r.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_ValveAnalytics_Title"),
              ),
              r.createElement(
                "p",
                { className: p.SectionDescription },
                (0, _.Xx)("#CookiePref_ValveAnalytics_Desc"),
              ),
              r.createElement(g.gE, {
                onChange: n,
                label: (0, _.Xx)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, _.Xx)("#CookiePref_ValveAnalytics_ToggleDesc"),
              }),
            ),
          );
        }),
        C = (0, f.Pi)((e) => {
          const { settings: t } = e,
            n = (0, r.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            i = (0, r.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            s = (0, r.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return r.createElement(
            "div",
            { className: p.CookieGroup },
            r.createElement(
              "div",
              { className: p.CookieSection },
              r.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_ThirdParty_Title"),
              ),
              r.createElement(
                "p",
                { className: p.SectionDescription },
                (0, _.Xx)("#CookiePref_ThirdParty_Desc"),
              ),
              r.createElement(g.gE, {
                onChange: n,
                label: (0, _.Xx)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: (0, _.kQ)(
                  "#CookiePref_YouTube_Desc",
                  r.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, _.Xx)("#CookiePref_YouTube_TogglePolicyName"),
                  ),
                ),
              }),
              r.createElement(g.gE, {
                onChange: i,
                label: (0, _.Xx)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: (0, _.kQ)(
                  "#CookiePref_Vimeo_Desc",
                  r.createElement(
                    "a",
                    { href: "https://vimeo.com/privacy", target: "_blank" },
                    (0, _.Xx)("#CookiePref_Vimeo_TogglePolicyName"),
                  ),
                ),
              }),
              r.createElement(g.gE, {
                onChange: s,
                label: (0, _.Xx)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: (0, _.kQ)(
                  "#CookiePref_Sketchfab_Desc",
                  r.createElement(
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
            n = (0, r.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return r.createElement(
            "div",
            { className: p.CookieGroup },
            r.createElement(
              "div",
              { className: p.CookieSection },
              r.createElement(
                "h2",
                null,
                (0, _.Xx)("#PrivacySettings_Marketing_Title"),
              ),
              r.createElement(
                "p",
                { className: p.SectionDescription },
                (0, _.Xx)("#PrivacySettings_Marketing_Desc"),
              ),
              r.createElement(g.gE, {
                onChange: n,
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
          let n = !1;
          for (let r of this.m_Preferences)
            if (t.notification_type == r.notification_type) {
              (r.notification_targets ^= e),
                1 != (1 & r.notification_targets) &&
                  (r.notification_targets = 0),
                (n = !0);
              break;
            }
          n && this.PostNotificationSettings(), (this.m_bUpdating = !1);
        }
        PostNotificationSettings() {
          var e, t;
          return (0, s.mG)(this, void 0, void 0, function* () {
            const n =
                c.De.STORE_BASE_URL + "account/ajaxsetnotificationsettings",
              r = new FormData();
            r.set("sessionid", c.De.SESSIONID),
              r.append(
                "notificationpreferences",
                JSON.stringify(this.m_Preferences),
              );
            try {
              let i = yield l().post(n, r, { withCredentials: !0 });
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
      var b = n(28890),
        D = n(58538);
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
          let n = [];
          for (const t of e.GetPreferences())
            n.push(r.createElement(G, { preferenceSetting: t }));
          return r.createElement(
            P.p,
            { navID: "StoreNotificationSettings", NavigationManager: t },
            r.createElement(
              "div",
              {
                className: (0, d.Z)(
                  b.NotificationSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              r.createElement(
                "div",
                null,
                (0, _.Xx)("#NotificationSettings_Title"),
              ),
            ),
            r.createElement(
              "div",
              { className: "account_settings_container" },
              r.createElement(
                "p",
                { className: b.SectionDescription },
                (0, _.Xx)("#NotificationSettings_Desc1"),
              ),
              r.createElement(
                "p",
                { className: b.SectionDescription },
                (0, _.Xx)("#NotificationSettings_Desc2"),
              ),
              r.createElement(
                "div",
                { className: "notification_settings_container" },
                r.createElement(
                  "div",
                  { className: b.NotificationSendWhen },
                  (0, _.Xx)("#NotificationSettings_SendMeWhen"),
                ),
                n,
              ),
            ),
          );
        }),
        G = (0, f.Pi)((e) => {
          const { preferenceSetting: t } = e;
          let n = X();
          const i = (0, r.useCallback)(() => {
              n.ToggleTargetPreference(1, t);
            }, [t, n]),
            s = (0, r.useCallback)(() => {
              n.ToggleTargetPreference(8, t);
            }, [t, n]),
            a = (0, r.useCallback)(() => {
              n.ToggleTargetPreference(2, t);
            }, [t, n]),
            [c, o] = (0, r.useState)(!1),
            l = n.BUpdatingPreferences(),
            m = 1 == (1 & t.notification_targets),
            f = 2 == (2 & t.notification_targets),
            p = 8 == (8 & t.notification_targets);
          return r.createElement(
            "div",
            { className: b.NotificationGroup },
            r.createElement(
              "div",
              { className: b.NotificationSection },
              r.createElement(g.fp, {
                className: b.NotificationFeedToggle,
                padding: "compact",
                onChange: i,
                disabled: l,
                bottomSeparator: "none",
                checked: m,
              }),
              r.createElement(
                "p",
                { className: b.NotificationDescription },
                ((h = t.notification_type),
                (0, _.Xx)("#SteamNotificationTypeDesc_" + h)),
              ),
              r.createElement(
                g.Yz,
                {
                  className: (0, d.Z)({
                    [b.PrefDetailsToggle]: !0,
                    [b.Selected]: c,
                  }),
                  onClick: () => o(!c),
                },
                r.createElement(D.vVQ, { direction: "down" }),
              ),
            ),
            c &&
              r.createElement(
                "div",
                { className: b.NotificationPrefDetails },
                r.createElement(g.ji, {
                  label: (0, _.Xx)("#NotificationSettings_SendToast"),
                  disabled: l || !m,
                  checked: p,
                  onChange: s,
                }),
                r.createElement(g.ji, {
                  label: (0, _.Xx)("#NotificationSettings_PushNotification"),
                  disabled: l || !m,
                  checked: f,
                  onChange: a,
                }),
              ),
          );
          var h;
        });
      var w = n(56480);
      const B = r.lazy(() =>
          Promise.all([
            n.e(460),
            n.e(9766),
            n.e(1021),
            n.e(3344),
            n.e(8820),
            n.e(6882),
            n.e(7247),
            n.e(9424),
            n.e(7695),
            n.e(3243),
            n.e(344),
            n.e(1720),
            n.e(5800),
          ]).then(n.bind(n, 53593)),
        ),
        I = { FamilyManagement: () => "/familymanagement" },
        U = Object.assign(
          {
            CookieSettings: () => "/cookiepreferences",
            NotificationSettings: () => "/notificationsettings",
          },
          I,
        ),
        M = (e) => {
          const t = e.match.url,
            n = U;
          return r.createElement(
            i.rs,
            null,
            r.createElement(i.AW, {
              path: `${t}${n.CookieSettings()}`,
              render: () =>
                r.createElement(w.d, {
                  config: {
                    "cookie-preferences": () => r.createElement(E, null),
                  },
                }),
            }),
            r.createElement(i.AW, {
              path: `${t}${n.NotificationSettings()}`,
              render: () =>
                r.createElement(w.d, {
                  config: {
                    "notification-settings": () => r.createElement(A, null),
                  },
                }),
            }),
            r.createElement(i.AW, {
              path: `${t}${n.FamilyManagement()}`,
              render: () =>
                r.createElement(w.d, {
                  config: {
                    "family-management": () => r.createElement(B, null),
                  },
                }),
            }),
          );
        };
    },
  },
]);
