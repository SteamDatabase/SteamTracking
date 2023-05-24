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
      r.d(t, { p: () => _ });
      var s = r(33940),
        i = r(89526),
        n = r(44026),
        o = r(17589),
        a = r(4306),
        c = r(32765),
        l = r(94952);
      function _(e) {
        const { children: t, navTreeRef: r } = e,
          _ = (0, s._T)(e, ["children", "navTreeRef"]),
          m = i.useRef(),
          f = (0, a.BE)(m, r),
          g = (0, c.id)(),
          d = window.__virtual_keyboard_client;
        if (
          ((0, i.useEffect)(() => {
            l.Wz.SetHookFactory(() => d);
          }, [d]),
          g)
        ) {
          const e = window.__nav_tree_root;
          return i.createElement(
            n.Fe,
            Object.assign({}, _, {
              navTreeRef: f,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.createElement(o.O, null, t)
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    23217: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => o });
      var s = r(52868),
        i = r.n(s),
        n = r(54856);
      function o(e) {
        if (i().isCancel(e))
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
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.response.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
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
            if ("object" == typeof e && e instanceof n.gA)
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
    14491: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { AccountPreferencesRoutes: () => M, default: () => B });
      var s = r(89526),
        i = r(59934),
        n = r(33940),
        o = r(50265),
        a = (r(23217), r(32765)),
        c = r(52868),
        l = r.n(c),
        _ = r(14826);
      class m {
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
          return (0, n.mG)(this, void 0, void 0, function* () {
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            const r = a.De.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              s = new FormData();
            s.set("sessionid", a.De.SESSIONID),
              s.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let i = yield l().post(r, s, { withCredentials: !0 });
              if (
                200 != i.status ||
                1 !=
                  (null === (e = null == i ? void 0 : i.data) || void 0 === e
                    ? void 0
                    : e.success)
              )
                window.ShowAlertDialog(
                  (0, _.Xx)("#CookiePref_Error"),
                  (0, _.Xx)("#CookiePref_ErrorNotSaved")
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
                  (0, _.Xx)("#CookiePref_ErrorNotSaved")
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
      (0, n.gn)([o.LO], m.prototype, "m_Preferences", void 0);
      var f = r(88464),
        g = r(57605),
        d = r(65841),
        p = r(19304),
        u = r(90699),
        h = r(83145),
        P = r(66294),
        k = r(44026);
      let E;
      const y = (0, f.Pi)(() => {
          let e = (function () {
            if (!E) {
              let e = (0, a.kQ)("cookiepreferences", "application_config");
              E = new m(e);
            }
            return E;
          })();
          const t = (0, h.L)(),
            r = (0, s.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            i = (0, s.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return s.createElement(
            P.p,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            s.createElement(
              "div",
              {
                className: (0, p.Z)(
                  d.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.createElement(
                "div",
                null,
                (0, _.Xx)("#CookiePref_OptionalCookies_Title")
              )
            ),
            s.createElement(
              "div",
              { className: "account_settings_container" },
              s.createElement(
                u.s,
                { "flow-children": "row", className: d.ButtonGroup },
                s.createElement(
                  k.Ks,
                  {
                    className: (0, p.Z)(
                      d.AllButton,
                      e.BIsRejectAll() ? d.ButtonHighlight : ""
                    ),
                    onClick: i,
                  },
                  (0, _.Xx)("#CookiePref_RejectAll")
                ),
                s.createElement(
                  k.Ks,
                  {
                    className: (0, p.Z)(
                      d.AllButton,
                      e.BIsAllowAll() ? d.ButtonHighlight : ""
                    ),
                    onClick: r,
                  },
                  (0, _.Xx)("#CookiePref_AcceptAll")
                )
              ),
              s.createElement(N, { settings: e }),
              s.createElement(C, { settings: e }),
              s.createElement(v, { settings: e }),
              s.createElement(T, { settings: e })
            ),
            s.createElement(
              "div",
              {
                className: (0, p.Z)(
                  d.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.createElement(
                "div",
                null,
                (0, _.Xx)("#CookiePref_TechnicallyNeccesary_Title")
              )
            ),
            s.createElement(
              "div",
              { className: "account_settings_container" },
              s.createElement(
                "p",
                null,
                (0, _.Xx)("#CookiePref_TechnicallyNeccesary_Desc")
              ),
              s.createElement(
                "div",
                { className: d.CookieGroup },
                s.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_SessionID_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_SessionID_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_ShoppingCart_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_ShoppingCart_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_SteamCountry_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_SteamCountry_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Timezone_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Timezone_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_BirthTime_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_BirthTime_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Login_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Login_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_Language_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_Language_Desc")
                  )
                ),
                s.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  s.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, _.Xx)("#CookiePref_CookieSettings_Title")
                  ),
                  s.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, _.Xx)("#CookiePref_CookieSettings_Desc")
                  )
                )
              )
            ),
            s.createElement(
              "div",
              {
                className: (0, p.Z)(
                  d.CookieSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.createElement(
                "div",
                null,
                (0, _.Xx)("#PrivacySettings_Marketing_Header")
              )
            ),
            s.createElement(
              "div",
              { className: "account_settings_container" },
              s.createElement(S, { settings: e })
            ),
            null
          );
        }),
        N = (0, f.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return s.createElement(
            "div",
            { className: d.CookieGroup },
            s.createElement(
              "div",
              { className: d.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_Content_Title")
              ),
              s.createElement(
                "p",
                { className: d.SectionDescription },
                (0, _.Xx)("#CookiePref_Content_Desc")
              ),
              s.createElement(g.gE, {
                onChange: r,
                label: (0, _.Xx)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, _.Xx)("#CookiePref_Content_ToggleDesc"),
              })
            )
          );
        }),
        C = (0, f.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return s.createElement(
            "div",
            { className: d.CookieGroup },
            s.createElement(
              "div",
              { className: d.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_ValveAnalytics_Title")
              ),
              s.createElement(
                "p",
                { className: d.SectionDescription },
                (0, _.Xx)("#CookiePref_ValveAnalytics_Desc")
              ),
              s.createElement(g.gE, {
                onChange: r,
                label: (0, _.Xx)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, _.Xx)("#CookiePref_ValveAnalytics_ToggleDesc"),
              })
            )
          );
        }),
        v = (0, f.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleGoogleAnalytics();
            }, [t]);
          return s.createElement(
            "div",
            { className: d.CookieGroup },
            s.createElement(
              "div",
              { className: d.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_GoogleAnalytics_Title")
              ),
              s.createElement(
                "p",
                { className: d.SectionDescription },
                (0, _.Xx)("#CookiePref_GoogleAnalytics_Desc")
              ),
              s.createElement(g.gE, {
                onChange: r,
                label: (0, _.Xx)("#CookiePref_GoogleAnalytics_ToggleLabel"),
                checked: t.GetGoogleAnalytics(),
                description: (0, _.kQ)(
                  "#CookiePref_GoogleAnalytics_ToggleDesc",
                  s.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, _.Xx)("#CookiePref_GoogleAnalytics_TogglePolicyName")
                  )
                ),
              })
            )
          );
        }),
        T = (0, f.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            i = (0, s.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            n = (0, s.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return s.createElement(
            "div",
            { className: d.CookieGroup },
            s.createElement(
              "div",
              { className: d.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, _.Xx)("#CookiePref_ThirdParty_Title")
              ),
              s.createElement(
                "p",
                { className: d.SectionDescription },
                (0, _.Xx)("#CookiePref_ThirdParty_Desc")
              ),
              s.createElement(g.gE, {
                onChange: r,
                label: (0, _.Xx)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: (0, _.kQ)(
                  "#CookiePref_YouTube_Desc",
                  s.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, _.Xx)("#CookiePref_YouTube_TogglePolicyName")
                  )
                ),
              }),
              s.createElement(g.gE, {
                onChange: i,
                label: (0, _.Xx)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: (0, _.kQ)(
                  "#CookiePref_Vimeo_Desc",
                  s.createElement(
                    "a",
                    { href: "https://vimeo.com/privacy", target: "_blank" },
                    (0, _.Xx)("#CookiePref_Vimeo_TogglePolicyName")
                  )
                ),
              }),
              s.createElement(g.gE, {
                onChange: n,
                label: (0, _.Xx)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: (0, _.kQ)(
                  "#CookiePref_Sketchfab_Desc",
                  s.createElement(
                    "a",
                    { href: "https://sketchfab.com/privacy", target: "_blank" },
                    (0, _.Xx)("#CookiePref_Sketchfab_TogglePolicyName")
                  )
                ),
              })
            )
          );
        }),
        S = (0, f.Pi)((e) => {
          const { settings: t } = e,
            r = (0, s.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return s.createElement(
            "div",
            { className: d.CookieGroup },
            s.createElement(
              "div",
              { className: d.CookieSection },
              s.createElement(
                "h2",
                null,
                (0, _.Xx)("#PrivacySettings_Marketing_Title")
              ),
              s.createElement(
                "p",
                { className: d.SectionDescription },
                (0, _.Xx)("#PrivacySettings_Marketing_Desc")
              ),
              s.createElement(g.gE, {
                onChange: r,
                label: (0, _.Xx)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: (0, _.Xx)("#PrivacySettings_UTM_ToggleDesc"),
              })
            )
          );
        });
      class b {
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
          for (let s of this.m_Preferences)
            if (t.notification_type == s.notification_type) {
              (s.notification_targets ^= e),
                1 != (1 & s.notification_targets) &&
                  (s.notification_targets = 0),
                (r = !0);
              break;
            }
          r && this.PostNotificationSettings(), (this.m_bUpdating = !1);
        }
        PostNotificationSettings() {
          var e, t;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const r =
                a.De.STORE_CHECKOUT_BASE_URL +
                "account/ajaxsetnotificationsettings",
              s = new FormData();
            s.set("sessionid", a.De.SESSIONID),
              s.append(
                "notificationpreferences",
                JSON.stringify(this.m_Preferences)
              );
            try {
              let i = yield l().post(r, s, { withCredentials: !0 });
              200 != i.status ||
              1 !=
                (null === (e = null == i ? void 0 : i.data) || void 0 === e
                  ? void 0
                  : e.success)
                ? window.ShowAlertDialog(
                    (0, _.Xx)("#NotificationPref_Error"),
                    (0, _.Xx)("#NotificationPref_ErrorNotSaved")
                  )
                : null === (t = null == i ? void 0 : i.data) ||
                  void 0 === t ||
                  t.success;
            } catch (e) {
              0,
                window.ShowAlertDialog(
                  (0, _.Xx)("#NotificationPref_Error"),
                  (0, _.Xx)("#NotificationPref_ErrorNotSaved")
                );
            }
          });
        }
      }
      (0, n.gn)([o.LO], b.prototype, "m_Preferences", void 0),
        (0, n.gn)([o.LO], b.prototype, "m_bUpdating", void 0);
      var D = r(17560),
        x = r(16826);
      let X;
      function G() {
        if (!X) {
          let e = (0, a.kQ)("notificationpreferences", "application_config");
          X = new b(e);
        }
        return X;
      }
      const A = (0, f.Pi)(() => {
          let e = G();
          const t = (0, h.L)();
          let r = [];
          for (const t of e.GetPreferences())
            r.push(s.createElement(w, { preferenceSetting: t }));
          return s.createElement(
            P.p,
            { navID: "StoreNotificationSettings", NavigationManager: t },
            s.createElement(
              "div",
              {
                className: (0, p.Z)(
                  D.NotificationSettingsHeader,
                  "account_header_line noicon"
                ),
              },
              s.createElement(
                "div",
                null,
                (0, _.Xx)("#NotificationSettings_Title")
              )
            ),
            s.createElement(
              "div",
              { className: "account_settings_container" },
              s.createElement(
                "p",
                { className: D.SectionDescription },
                (0, _.Xx)("#NotificationSettings_Desc1")
              ),
              s.createElement(
                "p",
                { className: D.SectionDescription },
                (0, _.Xx)("#NotificationSettings_Desc2")
              ),
              s.createElement(
                "div",
                { className: "notification_settings_container" },
                s.createElement(
                  "p",
                  null,
                  (0, _.Xx)("#NotificationSettings_SendMeWhen")
                ),
                r
              )
            )
          );
        }),
        w = (0, f.Pi)((e) => {
          const { preferenceSetting: t } = e;
          let r = G();
          const i = (0, s.useCallback)(() => {
              r.ToggleTargetPreference(1, t);
            }, [t, r]),
            n = (0, s.useCallback)(() => {
              r.ToggleTargetPreference(8, t);
            }, [t, r]),
            o = (0, s.useCallback)(() => {
              r.ToggleTargetPreference(2, t);
            }, [t, r]),
            [a, c] = (0, s.useState)(!1),
            l = r.BUpdatingPreferences(),
            m = 1 == (1 & t.notification_targets),
            f = 2 == (2 & t.notification_targets),
            d = 8 == (8 & t.notification_targets);
          return s.createElement(
            "div",
            { className: D.NotificationGroup },
            s.createElement(
              "div",
              { className: D.NotificationSection },
              s.createElement(g.fp, {
                className: D.NotificationFeedToggle,
                padding: "compact",
                onChange: i,
                disabled: l,
                checked: m,
              }),
              s.createElement(
                "p",
                { className: D.NotificationDescription },
                ((u = t.notification_type),
                (0, _.Xx)("#SteamNotificationTypeDesc_" + u))
              ),
              s.createElement(
                g.Yz,
                {
                  className: (0, p.Z)({
                    [D.PrefDetailsToggle]: !0,
                    [D.Selected]: a,
                  }),
                  onClick: () => c(!a),
                },
                s.createElement(x.vVQ, { direction: "down" })
              )
            ),
            a &&
              s.createElement(
                "div",
                { className: D.NotificationPrefDetails },
                s.createElement(g.ji, {
                  label: (0, _.Xx)("#NotificationSettings_SendToast"),
                  disabled: l || !m,
                  checked: d,
                  onChange: n,
                }),
                s.createElement(g.ji, {
                  label: (0, _.Xx)("#NotificationSettings_PushNotification"),
                  disabled: l || !m,
                  checked: f,
                  onChange: o,
                })
              )
          );
          var u;
        }),
        M = {
          CookieSettings: () => "/cookiepreferences",
          NotificationSettings: () => "/notificationsettings",
        },
        B = (e) => {
          const t = e.match.url,
            r = M;
          return s.createElement(
            i.rs,
            null,
            s.createElement(
              i.AW,
              { path: `${t}${r.CookieSettings()}` },
              s.createElement(y, null)
            ),
            s.createElement(
              i.AW,
              { path: `${t}${r.NotificationSettings()}` },
              s.createElement(A, null)
            )
          );
        };
    },
  },
]);
