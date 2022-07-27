/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9682],
  {
    66854: (e) => {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        App: "interactiverecommender_App_u3SD8",
        Login: "interactiverecommender_Login_3wfCR",
        Text: "interactiverecommender_Text_1PXPv",
        Container: "interactiverecommender_Container_2g8SX",
        TopSection: "interactiverecommender_TopSection_fR3i6",
        Header: "interactiverecommender_Header_2CDNs",
        Body: "interactiverecommender_Body_174-d",
        Spacer: "interactiverecommender_Spacer_1f2cz",
        BottomSection: "interactiverecommender_BottomSection_3A60h",
        VerticalBar: "interactiverecommender_VerticalBar_2qL2p",
        PlaytimeList: "interactiverecommender_PlaytimeList_3qtYu",
        Loading: "interactiverecommender_Loading_3pjYy",
        IdentityBlock: "interactiverecommender_IdentityBlock_qLWcn",
        Avatar: "interactiverecommender_Avatar_VmdbP",
        PersonalInfo: "interactiverecommender_PersonalInfo_2oJXF",
        Persona: "interactiverecommender_Persona_2vp7F",
        GameCount: "interactiverecommender_GameCount_1AIEP",
        TotalTime: "interactiverecommender_TotalTime_1tOWe",
        PlayedGame: "interactiverecommender_PlayedGame_sNb81",
        Ignored: "interactiverecommender_Ignored_30mws",
        PlaytimeInfo: "interactiverecommender_PlaytimeInfo_1UkGo",
        IgnoreToggle: "interactiverecommender_IgnoreToggle_3hXvg",
        Logo: "interactiverecommender_Logo_26qua",
        HoursPlayed: "interactiverecommender_HoursPlayed_3Ye_W",
        Title: "interactiverecommender_Title_Eucai",
        LastPlayed: "interactiverecommender_LastPlayed_1DwCl",
        UpdateSaveBlock: "interactiverecommender_UpdateSaveBlock_iaGmJ",
        UpdateButton: "interactiverecommender_UpdateButton_wcFtI",
        Enabled: "interactiverecommender_Enabled_3QyVu",
        RecommendationList: "interactiverecommender_RecommendationList_1krh3",
        List: "interactiverecommender_List_C6mYR",
        Updating: "interactiverecommender_Updating_1m954",
        NoRecommendationsMessage:
          "interactiverecommender_NoRecommendationsMessage_1Ps6j",
        RecommendationOptions:
          "interactiverecommender_RecommendationOptions_2F61j",
        Row: "interactiverecommender_Row_1sYIz",
        SecondRow: "interactiverecommender_SecondRow_K-rzA",
        OptionCheckbox: "interactiverecommender_OptionCheckbox_2Cb6n",
        Checkbox: "interactiverecommender_Checkbox_29uP5",
        WishlistCheckbox: "interactiverecommender_WishlistCheckbox_1cnxU",
        SaveUserSettingsButton:
          "interactiverecommender_SaveUserSettingsButton_1VRgd",
        OptionSlider: "interactiverecommender_OptionSlider_26ek6",
        Labels: "interactiverecommender_Labels_22UxF",
        Min: "interactiverecommender_Min_1uiM2",
        Max: "interactiverecommender_Max_17wCM",
        OptionalLabel: "interactiverecommender_OptionalLabel_1JIe5",
        OptionDropdown: "interactiverecommender_OptionDropdown_1dKx5",
        Label: "interactiverecommender_Label_XPFnC",
        OptionTagList: "interactiverecommender_OptionTagList_uNxeG",
        SelectedTag: "interactiverecommender_SelectedTag_2uInW",
        Close: "interactiverecommender_Close_2bZrr",
        RecommendationEntry: "interactiverecommender_RecommendationEntry_3opuX",
        BottomEntrySection: "interactiverecommender_BottomEntrySection_2U08C",
        WishlistSection: "interactiverecommender_WishlistSection_dS7Rz",
        Hidden: "interactiverecommender_Hidden_2teee",
        TopEntrySection: "interactiverecommender_TopEntrySection_1IvHp",
        LeftSection: "interactiverecommender_LeftSection_1shxg",
        Video: "interactiverecommender_Video_3oNv9",
        Revealed: "interactiverecommender_Revealed_3aiFy",
        UnMute: "interactiverecommender_UnMute_21t3_",
        RightSection: "interactiverecommender_RightSection_27p3s",
        CenterSection: "interactiverecommender_CenterSection_M9CWJ",
        CenterOption: "interactiverecommender_CenterOption_3mXMY",
        Name: "interactiverecommender_Name_2FQXD",
        Released: "interactiverecommender_Released_3EvdK",
        BarContainer: "interactiverecommender_BarContainer_3qWin",
        Bar: "interactiverecommender_Bar_16q7Q",
        Score: "interactiverecommender_Score_17yr_",
        Tags: "interactiverecommender_Tags_3KlI0",
        Tag: "interactiverecommender_Tag_1rNtz",
        Hovered: "interactiverecommender_Hovered_3b9wG",
        Wishlisted: "interactiverecommender_Wishlisted_2uh0O",
        PurchaseSection: "interactiverecommender_PurchaseSection_mjTZM",
        PurchaseBG: "interactiverecommender_PurchaseBG_2UHKw",
        Price: "interactiverecommender_Price_18mm0",
        WishlistFlag: "interactiverecommender_WishlistFlag_2TuuQ",
        SelectionBox: "interactiverecommender_SelectionBox_2W7pR",
        SuggestionInput: "interactiverecommender_SuggestionInput_3OdNp",
        SuggestionContainerOpen:
          "interactiverecommender_SuggestionContainerOpen_2NTkL",
        SuggestionsList: "interactiverecommender_SuggestionsList_2zgal",
        OptionSuggestion: "interactiverecommender_OptionSuggestion_3VKY5",
      };
    },
    83305: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => l });
      var a = i(70655),
        n = i(67294),
        s = i(17888),
        o = i(80533),
        r = i(30156);
      class l extends n.Component {
        OnEnter() {
          s.E.AddImpression(this.props.appID, this.props.snr);
        }
        render() {
          return n.createElement(
            o.h,
            { onEnter: this.OnEnter },
            this.props.children
          );
        }
      }
      (0, a.gn)([r.ak], l.prototype, "OnEnter", null);
    },
    17888: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => c });
      var a = i(70655),
        n = i(77636),
        s = i(90666),
        o = i(61939),
        r = i(99198);
      class l {
        constructor() {
          (this.m_mapAppToSNRs = new Map()), (this.m_rgImpressionsToAdd = []);
        }
        AddImpression(e, t) {
          let i = !1;
          n.jg.Get().BAppImpressionsAllowed()
            ? (this.m_mapAppToSNRs.has(e)
                ? -1 == this.m_mapAppToSNRs.get(e).indexOf(t) &&
                  (this.m_mapAppToSNRs.get(e).push(t), (i = !0))
                : (this.m_mapAppToSNRs.set(e, [t]), (i = !0)),
              i &&
                (this.m_rgImpressionsToAdd.push(`${e}@${t}`),
                this.UpdateCookie()))
            : "dev" === s.De.WEB_UNIVERSE &&
              console.log("Cookie Prefs: Not allowing App Impressions");
        }
        UpdateCookie() {
          const e = [
            (0, o.bG)("app_impressions") || "",
            ...this.m_rgImpressionsToAdd,
          ].join("|");
          this.m_rgImpressionsToAdd = [];
          encodeURIComponent(e).length <= 3200 &&
            (0, o.I1)("app_impressions", e);
        }
      }
      (0, a.gn)([(0, r.D)(1e3)], l.prototype, "UpdateCookie", null);
      const c = new l();
      window.g_ImpressionTracker = c;
    },
    82910: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => M });
      var a,
        n = i(70655),
        s = i(90666),
        o = i(29323),
        r = i(22188),
        l = i(67294),
        c = i(83305),
        d = i(95598),
        m = i(7573),
        p = i(41311),
        _ = i(30156),
        u = i(66854),
        g = i(58808),
        h = i.n(g),
        E = i(9669),
        v = i.n(E);
      !(function (e) {
        (e[(e.Unrequested = 0)] = "Unrequested"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Valid = 2)] = "Valid"),
          (e[(e.Failed = 3)] = "Failed"),
          (e[(e.Rerequest = 4)] = "Rerequest");
      })(a || (a = {}));
      class S {
        constructor() {
          (this.eState = a.Unrequested), (this.nExpirationTime = 0);
        }
        getData(e, t, i) {
          const n = this.eState == a.Pending || this.eState == a.Rerequest;
          return (
            this.isExpired() &&
              !n &&
              ((this.eState = a.Pending),
              t()
                .then((n) => {
                  if (this.eState == a.Rerequest)
                    return this.expireData(), void this.getData(e, t, i);
                  (this.data = i ? i(n) : n),
                    n
                      ? (this.delayNewData(e), (this.eState = a.Valid))
                      : (this.eState = a.Failed);
                })
                .catch((e) => {
                  (this.data = i(void 0)), (this.eState = a.Failed);
                })),
            this.data
          );
        }
        clearData() {
          (this.eState = a.Unrequested),
            (this.data = null),
            (this.nExpirationTime = 0);
        }
        setDataPending() {
          this.eState = a.Pending;
        }
        isDataPending() {
          return this.eState == a.Pending;
        }
        setData(e, t) {
          (this.data = t), this.delayNewData(e), (this.eState = a.Valid);
        }
        expireData() {
          this.nExpirationTime = 0;
        }
        isExpired() {
          const e = Date.now() / 1e3;
          return this.nExpirationTime < e;
        }
        delayNewData(e) {
          if (e <= 0) this.nExpirationTime = Number.MAX_SAFE_INTEGER;
          else {
            const t = Date.now() / 1e3;
            this.nExpirationTime = t + e;
          }
        }
        rerequestDataIfPending() {
          this.eState == a.Pending && (this.eState = a.Rerequest);
        }
        getCachedData() {
          return this.data;
        }
      }
      (0, n.gn)([r.LO], S.prototype, "data", void 0),
        (0, n.gn)([r.LO], S.prototype, "nExpirationTime", void 0);
      (0, n.gn)(
        [r.LO],
        class {
          constructor() {
            this.m_mapKeyToDataWrapper = new Map();
          }
          getAsyncDataWrapper(e) {
            let t;
            return (
              this.m_mapKeyToDataWrapper.has(e)
                ? (t = this.m_mapKeyToDataWrapper.get(e))
                : ((t = new S()), this.m_mapKeyToDataWrapper.set(e, t)),
              t
            );
          }
          clearKey(e) {
            this.m_mapKeyToDataWrapper.has(e) &&
              this.m_mapKeyToDataWrapper.get(e).clearData(),
              this.m_mapKeyToDataWrapper.delete(e);
          }
          getAllElements() {
            return Array.from(this.m_mapKeyToDataWrapper.values()).map((e) =>
              e.getCachedData()
            );
          }
          getAllElementsAndKeys() {
            let e = [],
              t = this.m_mapKeyToDataWrapper.entries(),
              i = t.next();
            for (; !i.done; )
              e.push({ key: i.value[0], data: i.value[1].getCachedData() }),
                (i = t.next());
            return e;
          }
        }.prototype,
        "m_mapKeyToDataWrapper",
        void 0
      );
      let T = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        BASE_URL: "",
        COMMUNITY_BASE_URL: "",
        STORE_BASE_URL: "",
        RELATIVE_URL: "",
        IMG_URL: "",
        IMG_URL_BASE: "",
        CDN_URL: "",
        RENDER_TIMESTAMP: 0,
        EXPLORE_URL: "",
        ACCOUNT_ID: 0,
        STEAM_ID: "",
        SESSION_ID: "",
        LOGIN_REDIRECT: "",
        AVATAR_URL: "",
        PERSONA_NAME: "",
        LINK_PARAM: "",
        NUM_POPULARITY_STEPS: 0,
        NUM_RECENCY_STEPS: 0,
        MAX_PLAYED_GAMES: 0,
        RESET_OPTIONS: !1,
        INCLUDE_PLAYED: !1,
        ALGORITHM: 0,
        REINFERENCE: !1,
        MODEL_VERSION: 0,
        PERSISTENT_IGNORE: !1,
        DEFAULT_RECENCY_SLIDER: 0,
        DEFAULT_POPULARITY_SLIDER: 0,
        DEFAULT_INCLUDED_TAGS: [],
        DEFAULT_EXCLUDED_TAGS: [],
        DEFAULT_IGNORED_PLAYED_APPS: [],
        EXCLUDE_WISHLIST: !1,
        USE_MICROTRAILERS: !1,
      };
      var y;
      !(function (e) {
        (e[(e.ClickThrough = 1)] = "ClickThrough"),
          (e[(e.AddToWishlist = 2)] = "AddToWishlist"),
          (e[(e.AddToCart = 3)] = "AddToCart");
      })(y || (y = {}));
      class R {
        constructor() {
          (this.m_rgFilterTags = []),
            (this.m_rgExcludeTags = []),
            (this.m_rgSavedFilterTags = []),
            (this.m_rgSavedExcludeTags = []),
            (this.m_mapAppDetailsCache = new Map()),
            (this.m_ResultDataCache = new S()),
            (this.m_InputAppsCache = new S()),
            (this.m_TagsCache = new S()),
            (this.m_TagNameMap = new Map()),
            (this.m_fPopularityValue = window.history.state
              ? window.history.state.popularity
              : 0.25),
            (this.m_fRecencyValue = window.history.state
              ? window.history.state.recency
              : 0),
            (this.m_bExcludeWishlisted =
              !!window.history.state && window.history.state.excludewishlisted),
            (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
            (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
            (this.m_bStateUpdated = !1),
            (this.m_bShouldMute = !0),
            (this.m_bIgnoredEdited = !1),
            (this.m_bUseMicrotrailers = !1),
            setInterval(() => {
              this.m_bStateUpdated &&
                (window.history.replaceState(
                  {
                    popularity: this.m_fPopularityValue,
                    recency: this.m_fRecencyValue,
                    excludewishlisted: this.m_bExcludeWishlisted,
                  },
                  ""
                ),
                (this.m_bStateUpdated = !1));
            }, 1e3),
            setInterval(() => {
              (this.m_fPopularityValue == this.m_fQueuedPopularityValue &&
                this.m_fQueuedRecencyValue == this.m_fRecencyValue) ||
                ((this.m_fPopularityValue = this.m_fQueuedPopularityValue),
                (this.m_fRecencyValue = this.m_fQueuedRecencyValue),
                (this.m_bStateUpdated = !0));
            }, 400);
        }
        Init() {
          (this.m_fPopularityValue = T.DEFAULT_POPULARITY_SLIDER),
            (this.m_fRecencyValue = T.DEFAULT_RECENCY_SLIDER),
            (this.m_rgSavedExcludeTags = [...T.DEFAULT_EXCLUDED_TAGS]),
            (this.m_rgSavedFilterTags = [...T.DEFAULT_INCLUDED_TAGS]),
            (this.m_rgExcludeTags = [...this.m_rgSavedExcludeTags]),
            (this.m_rgFilterTags = [...this.m_rgSavedFilterTags]),
            (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
            (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
            (this.m_bExcludeWishlisted = !1),
            (this.m_bStateUpdated = !0),
            (this.m_bExcludeWishlisted = T.EXCLUDE_WISHLIST),
            (this.m_bUseMicrotrailers = T.USE_MICROTRAILERS);
        }
        getDetails(e) {
          return (
            this.m_mapAppDetailsCache.has(e) ||
              this.m_mapAppDetailsCache.set(e, new S()),
            this.m_mapAppDetailsCache.get(e).getData(
              60,
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  return yield v().get(
                    `${T.BASE_URL}recommender/${T.STEAM_ID}/details?appid=${e}&sessionid=${T.SESSION_ID}`
                  );
                }),
              (e) => e.data
            )
          );
        }
        getResults(e, t, i, a) {
          const s = e ? "1" : "0",
            o = t ? `${t}` : "0",
            r = i ? "1" : "0",
            l = a ? `${a}` : "0";
          let c = "";
          const d = this.getInputApps();
          if (!d) return;
          let m = [];
          return (
            Object.keys(d).map((e) => {
              (d[e].i || d[e].ip) && m.push(d[e].a);
            }),
            m.length > 0 && (c = "&ignored=" + m.join()),
            this.m_ResultDataCache.getData(
              9999999,
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  return yield v().get(
                    `${T.BASE_URL}recommender/${T.STEAM_ID}/results?sessionid=${T.SESSION_ID}&steamid=${T.STEAM_ID}&include_played=${s}&algorithm=${o}&reinference=${r}&model_version=${l}${c}`
                  );
                }),
              (e) => e.data
            )
          );
        }
        areResultsExpired() {
          return this.m_ResultDataCache.isExpired();
        }
        getRecommendations() {
          const e = L.getResults(
            T.INCLUDE_PLAYED,
            T.ALGORITHM,
            T.REINFERENCE,
            T.MODEL_VERSION
          );
          return e ? e.recommendations : void 0;
        }
        getInputApps() {
          return this.m_InputAppsCache.getData(
            9999999,
            () =>
              (0, n.mG)(this, void 0, void 0, function* () {
                return yield v().get(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/inputs?sessionid=${T.SESSION_ID}&steamid=${T.STEAM_ID}`
                );
              }),
            (e) => e.data
          );
        }
        getAppInfo() {
          const e = L.getResults(
            T.INCLUDE_PLAYED,
            T.ALGORITHM,
            T.REINFERENCE,
            T.MODEL_VERSION
          );
          return e ? e.app_info : void 0;
        }
        getTags() {
          return this.m_TagsCache.getData(
            9999999,
            () =>
              (0, n.mG)(this, void 0, void 0, function* () {
                return yield v().get(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/tags?sessionid=${T.SESSION_ID}`
                );
              }),
            (e) => {
              this.m_TagNameMap.clear();
              for (const t of e.data) this.m_TagNameMap.set(t.tagid, t.name);
              return e.data;
            }
          );
        }
        getTagName(e) {
          return this.getTags(), this.m_TagNameMap.get(e);
        }
        getTagHeight() {
          return Math.max(
            this.m_rgFilterTags.length,
            this.m_rgExcludeTags.length
          );
        }
        onPopularityChanged(e) {
          this.m_fQueuedPopularityValue = Number(e.target.value);
        }
        onRecencyChanged(e) {
          this.m_fQueuedRecencyValue = Number(e.target.value);
        }
        onTagFilterAdd(e) {
          this.m_rgFilterTags.push(e), (this.m_bStateUpdated = !0);
        }
        onTagFilterRemove(e) {
          for (let t = 0; t < this.m_rgFilterTags.length; t++)
            if (this.m_rgFilterTags[t] == e) {
              this.m_rgFilterTags.splice(t, 1);
              break;
            }
          this.m_bStateUpdated = !0;
        }
        onTagExcludeAdd(e) {
          this.m_rgExcludeTags.push(e), (this.m_bStateUpdated = !0);
        }
        onTagExcludeRemove(e) {
          for (let t = 0; t < this.m_rgExcludeTags.length; t++)
            if (this.m_rgExcludeTags[t] == e) {
              this.m_rgExcludeTags.splice(t, 1);
              break;
            }
          this.m_bStateUpdated = !0;
        }
        doTagsPassFilter(e) {
          for (const t of this.m_rgFilterTags)
            if (-1 == e.indexOf(t)) return !1;
          return !0;
        }
        doTagsFailExclusion(e) {
          for (const t of this.m_rgExcludeTags)
            if (-1 != e.indexOf(t)) return !0;
          return !1;
        }
        onExcludeWishlistedToggled(e) {
          (this.m_bExcludeWishlisted = !this.m_bExcludeWishlisted),
            (this.m_bStateUpdated = !0);
        }
        onSaveUserSettings(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let e = [];
            const t = this.getInputApps();
            for (let i of t) (i.i || i.ip) && e.push(i.a);
            if (
              this.m_fRecencyValue == T.DEFAULT_RECENCY_SLIDER &&
              this.m_fPopularityValue == T.DEFAULT_POPULARITY_SLIDER &&
              this.m_rgFilterTags.slice().sort().join(",") ===
                this.m_rgSavedFilterTags.sort().join(",") &&
              this.m_rgExcludeTags.slice().sort().join(",") ===
                this.m_rgSavedExcludeTags.sort().join(",") &&
              e.slice().sort().join(",") ===
                T.DEFAULT_IGNORED_PLAYED_APPS.sort().join(",") &&
              this.m_bExcludeWishlisted == T.EXCLUDE_WISHLIST
            );
            else {
              let t = {
                session_id: T.SESSION_ID,
                recency_position: this.m_fRecencyValue,
                popularity_position: this.m_fPopularityValue,
                included_tags: this.m_rgFilterTags,
                excluded_tags: this.m_rgExcludeTags,
                ignored_played_apps: e,
                exclude_wishlist: this.m_bExcludeWishlisted,
              };
              (T.DEFAULT_RECENCY_SLIDER = this.m_fRecencyValue),
                (T.DEFAULT_POPULARITY_SLIDER = this.m_fPopularityValue),
                (T.DEFAULT_INCLUDED_TAGS = [...this.m_rgFilterTags]),
                (T.DEFAULT_EXCLUDED_TAGS = [...this.m_rgExcludeTags]),
                (this.m_rgSavedFilterTags = [...this.m_rgFilterTags]),
                (this.m_rgSavedExcludeTags = [...this.m_rgExcludeTags]),
                (T.DEFAULT_IGNORED_PLAYED_APPS = [...e]),
                (T.EXCLUDE_WISHLIST = this.m_bExcludeWishlisted),
                yield v().post(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/savesettings`,
                  t
                );
            }
          });
        }
        onToggleIgnore(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = this.getInputApps();
            for (let i of t)
              if (i.a == e) {
                i.i || i.ip ? ((i.i = !1), (i.ip = !1)) : (i.ip = !0);
                break;
              }
            this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !0);
          });
        }
        onUpdateWithIgnored() {
          this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !1);
        }
        onAppClicked(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let i = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: y.ClickThrough,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            yield v().post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, i);
          });
        }
        onAddToWishlist(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            L.getAppInfo()[e].w = !0;
            let i = { sessionid: T.SESSION_ID, appid: e };
            const a = yield v().post(
              `${T.BASE_URL}recommender/${T.STEAM_ID}/wishlist?snr=${T.LINK_PARAM}`,
              i
            );
            let n = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: y.AddToWishlist,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            return (
              yield v().post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, n),
              a
            );
          });
        }
        onGoToWishlist() {
          window.location.href = `${T.COMMUNITY_BASE_URL}profiles/${T.STEAM_ID}/wishlist`;
        }
        onAddToCart(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let i = { sessionid: T.SESSION_ID, appid: e };
            yield v().post(
              `${T.BASE_URL}recommender/${T.STEAM_ID}/cart?snr=${T.LINK_PARAM}`,
              i
            );
            let a = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: y.AddToCart,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            yield v().post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, a),
              (window.location.href = `${s.De.STORE_BASE_URL}cart`);
          });
        }
        onMuteClicked() {
          this.m_bShouldMute = !0;
        }
        onUnMuteClicked() {
          this.m_bShouldMute = !1;
        }
        shouldMute() {
          return this.m_bShouldMute;
        }
        shouldUseMicrotrailers() {
          return this.m_bUseMicrotrailers;
        }
      }
      (0, n.gn)([r.LO], R.prototype, "m_fPopularityValue", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_fRecencyValue", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_rgFilterTags", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_rgExcludeTags", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_fQueuedPopularityValue", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_fQueuedRecencyValue", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_bExcludeWishlisted", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_bShouldMute", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_bUseMicrotrailers", void 0),
        (0, n.gn)([r.LO], R.prototype, "m_bIgnoredEdited", void 0),
        (0, n.gn)([_.ak], R.prototype, "getTagHeight", null),
        (0, n.gn)([_.ak], R.prototype, "onPopularityChanged", null),
        (0, n.gn)([_.ak], R.prototype, "onRecencyChanged", null),
        (0, n.gn)([_.ak], R.prototype, "onTagFilterAdd", null),
        (0, n.gn)([_.ak], R.prototype, "onTagFilterRemove", null),
        (0, n.gn)([_.ak], R.prototype, "onTagExcludeAdd", null),
        (0, n.gn)([_.ak], R.prototype, "onTagExcludeRemove", null),
        (0, n.gn)([_.ak], R.prototype, "doTagsPassFilter", null),
        (0, n.gn)([_.ak], R.prototype, "doTagsFailExclusion", null),
        (0, n.gn)([_.ak], R.prototype, "onExcludeWishlistedToggled", null),
        (0, n.gn)([_.ak], R.prototype, "onSaveUserSettings", null),
        (0, n.gn)([_.ak], R.prototype, "onToggleIgnore", null),
        (0, n.gn)([_.ak], R.prototype, "onUpdateWithIgnored", null),
        (0, n.gn)([_.ak], R.prototype, "onAppClicked", null),
        (0, n.gn)([_.ak], R.prototype, "onAddToWishlist", null),
        (0, n.gn)([_.ak], R.prototype, "onGoToWishlist", null),
        (0, n.gn)([_.ak], R.prototype, "onAddToCart", null),
        (0, n.gn)([_.ak], R.prototype, "onMuteClicked", null),
        (0, n.gn)([_.ak], R.prototype, "onUnMuteClicked", null),
        (0, n.gn)([_.ak], R.prototype, "shouldMute", null),
        (0, n.gn)([_.ak], R.prototype, "shouldUseMicrotrailers", null);
      const L = new R();
      window.g_InteractiveRecommender = L;
      var A = i(23211);
      !(function () {
        let e = (0, s.kQ)("ir_config", "application_config");
        e && (Object.assign(T, e), L.Init());
      })();
      const N = ({ accountID: e }) => {
          const t = L.getInputApps(),
            i = Object.keys(t).length;
          let a = 0;
          return (
            Object.keys(t).map((e) => {
              a += t[e].p;
            }),
            l.createElement(
              "div",
              { className: u.IdentityBlock },
              l.createElement("img", {
                className: u.Avatar,
                src: T.AVATAR_URL,
              }),
              l.createElement(
                "div",
                { className: u.PersonalInfo },
                l.createElement(
                  "div",
                  { className: u.Persona },
                  T.PERSONA_NAME
                ),
                l.createElement(
                  "div",
                  { className: u.GameCount },
                  (0, p.Xx)("#PlaytimeList_RecentGames", i)
                ),
                l.createElement(
                  "div",
                  { className: u.TotalTime },
                  (0, p.Xx)("#PlaytimeList_HoursTotal", a)
                )
              )
            )
          );
        },
        f = ({ appID: e, name: t, hours: i, lastPlayed: a, ignored: n }) => {
          const s = `${T.CDN_URL}apps/${e}/header.jpg`,
            o = Date.now() / 1e3 - a;
          let r = "",
            c = "";
          return (
            a <= 86400
              ? (c = (0, p.Xx)("#PlaytimeList_LastPlayedMax"))
              : o > 31449600
              ? ((r = (0, p.vX)(a)),
                (c = (0, p.Xx)("#PlaytimeList_LastPlayed", r)))
              : ((r = (0, p.yW)(o)),
                (c = (0, p.Xx)("#PlaytimeList_LastPlayed", r))),
            l.createElement(
              "div",
              { className: (0, m.Z)(u.PlayedGame, n && u.Ignored) },
              l.createElement(
                "a",
                { href: `${T.BASE_URL}app/${e}?snr=${T.LINK_PARAM}` },
                l.createElement("img", { className: u.Logo, src: s })
              ),
              l.createElement(
                "div",
                { className: u.PlaytimeInfo },
                l.createElement(
                  "div",
                  { className: u.HoursPlayed },
                  (0, p.Xx)("#PlaytimeList_Hours", i)
                ),
                l.createElement("div", { className: u.Title }, t),
                l.createElement("div", { className: u.LastPlayed }, c),
                l.createElement(
                  "div",
                  {
                    className: u.IgnoreToggle,
                    onClick: () => L.onToggleIgnore(e),
                  },
                  (0, p.Xx)(
                    n ? "#PlaytimeList_UnIgnore" : "#PlaytimeList_Ignore"
                  )
                )
              )
            )
          );
        };
      let I = class extends l.Component {
        constructor(e) {
          super(e), (this.state = {});
        }
        render() {
          const e = L.getInputApps();
          let t = [];
          if (!e)
            return l.createElement(
              "div",
              { className: u.PlaytimeList },
              l.createElement(
                "div",
                { className: u.Header },
                (0, p.Xx)("#PlaytimeList_Header")
              ),
              l.createElement("div", { className: u.Loading })
            );
          L.getAppInfo();
          const i = e.slice().sort((e, t) => t.l - e.l);
          return (
            Object.keys(i).map((e) => {
              const a = i[e];
              t.push(
                l.createElement(f, {
                  key: "PlayedGame_" + a.a,
                  appID: a.a,
                  name: a.t,
                  hours: a.p,
                  lastPlayed: a.l,
                  ignored: a.i || a.ip,
                })
              );
            }),
            l.createElement(
              "div",
              { className: u.PlaytimeList },
              l.createElement(
                "div",
                { className: u.Header },
                (0, p.Xx)("#PlaytimeList_Header")
              ),
              l.createElement(N, { accountID: this.props.accountID }),
              l.createElement("div", { className: u.List }, t)
            )
          );
        }
      };
      I = (0, n.gn)([o.Pi], I);
      const D = ({
          titleLabel: e,
          minLabel: t,
          maxLabel: i,
          minValue: a,
          maxValue: n,
          value: s,
          onChange: o,
          sliderLabels: r,
        }) => {
          const c = r
              ? Math.round((r.length - 1) * ((s - a) / (n - a)))
              : void 0,
            d = r ? r[c] : "";
          return l.createElement(
            "div",
            { className: u.OptionSlider },
            l.createElement("div", { className: u.Title }, e),
            l.createElement(
              "div",
              { className: u.Labels },
              l.createElement("div", { className: u.Min }, t),
              l.createElement("div", { className: u.Max }, i)
            ),
            l.createElement("input", {
              type: "range",
              min: a,
              max: n,
              step: (n - a) / 100,
              value: s,
              onChange: o,
            }),
            l.createElement("div", { className: u.OptionalLabel }, d)
          );
        },
        C = ({ className: e, titleLabel: t, checked: i, onChange: a }) =>
          l.createElement(
            "label",
            { className: (0, m.Z)(u.OptionCheckbox, e && e) },
            l.createElement("input", {
              type: "checkbox",
              className: u.Checkbox,
              checked: i,
              onChange: a,
            }),
            t
          );
      let x = class extends l.Component {
        constructor(e) {
          super(e),
            (this.selectedtags = []),
            (this.rgTags = []),
            (this.selectedtags = [...e.selectedtags]),
            (this.state = { value: "", suggestions: [] });
        }
        componentDidMount() {
          const e = L.getTags();
          if (e)
            for (const t of e)
              this.rgTags.push({ id: parseInt(t.tagid), name: t.name });
        }
        onFetchRequested(e) {
          const t = e.value.trim().toLowerCase(),
            i = t.length,
            a =
              0 === i
                ? this.props.tagoptions.slice(0, 10)
                : this.props.tagoptions.filter(
                    (e) => e.name.toLowerCase().slice(0, i) === t
                  );
          this.setState({ suggestions: a });
        }
        onClearRequested() {}
        onChange(e, t) {
          this.setState({ value: t.newValue });
        }
        onKeyDown(e) {
          if (13 == e.keyCode)
            for (const t of this.props.tagoptions)
              if (t.name.toLowerCase() == this.state.value.toLowerCase()) {
                const i = {
                  suggestion: { id: t.id, name: t.name },
                  suggestionValue: t.name,
                  suggestionIndex: 0,
                  sectionIndex: 0,
                  method: "enter",
                };
                this.onSuggestionSelected(e, i);
                break;
              }
        }
        shouldRenderSuggestions(e) {
          return !0;
        }
        onSuggestionSelected(e, t) {
          for (const e of this.selectedtags) if (e == t.suggestion.id) return;
          this.selectedtags.push(t.suggestion.id),
            this.props.onAddTag(t.suggestion.id);
        }
        onRemoveSelectedTag(e) {
          for (let t = 0; t < this.selectedtags.length; t++)
            if (this.selectedtags[t] == e) {
              this.props.onRemoveTag(this.selectedtags[t]),
                this.selectedtags.splice(t, 1);
              break;
            }
        }
        render() {
          const e = {
            placeholder: (0, p.Xx)("#TagSelect"),
            value: this.state.value,
            onChange: this.onChange,
            onKeyDown: this.onKeyDown,
          };
          let t = [];
          for (const e of this.selectedtags) {
            let i = L.m_TagNameMap.get(e);
            t.push(
              l.createElement(
                "div",
                {
                  key: e,
                  className: u.SelectedTag,
                  onClick: (t) => this.onRemoveSelectedTag(e),
                },
                l.createElement("div", null, i),
                l.createElement("div", { className: u.Close }, "X")
              )
            );
          }
          return l.createElement(
            "div",
            { className: u.OptionTagList },
            l.createElement("div", { className: u.Label }, this.props.title),
            l.createElement(h(), {
              suggestions: this.state.suggestions,
              onSuggestionsFetchRequested: this.onFetchRequested,
              onSuggestionsClearRequested: this.onClearRequested,
              onSuggestionSelected: this.onSuggestionSelected,
              shouldRenderSuggestions: this.shouldRenderSuggestions,
              getSuggestionValue: (e) => e.name,
              renderSuggestion: (e) => l.createElement("div", null, e.name),
              inputProps: e,
              theme: {
                input: u.SuggestionInput,
                suggestion: u.OptionSuggestion,
                suggestionsList: u.SuggestionsList,
                suggestionsContainerOpen: u.SuggestionContainerOpen,
              },
            }),
            t
          );
        }
      };
      (0, n.gn)([r.LO], x.prototype, "selectedtags", void 0),
        (0, n.gn)([_.ak], x.prototype, "onFetchRequested", null),
        (0, n.gn)([_.ak], x.prototype, "onClearRequested", null),
        (0, n.gn)([_.ak], x.prototype, "onChange", null),
        (0, n.gn)([_.ak], x.prototype, "onKeyDown", null),
        (0, n.gn)([_.ak], x.prototype, "shouldRenderSuggestions", null),
        (0, n.gn)([_.ak], x.prototype, "onSuggestionSelected", null),
        (0, n.gn)([_.ak], x.prototype, "onRemoveSelectedTag", null),
        (x = (0, n.gn)([o.Pi], x));
      const P = (0, o.Pi)(() => {
        const e = L.getTags();
        let t = [];
        if (e)
          for (const i of e) t.push({ id: parseInt(i.tagid), name: i.name });
        const i = [
          (0, p.Xx)("#FilterAge_120"),
          (0, p.Xx)("#FilterAge_60"),
          (0, p.Xx)("#FilterAge_36"),
          (0, p.Xx)("#FilterAge_24"),
          (0, p.Xx)("#FilterAge_12"),
          (0, p.Xx)("#FilterAge_6"),
        ];
        let a = L.m_rgSavedExcludeTags,
          n = L.m_rgSavedFilterTags;
        return l.createElement(
          "div",
          { className: u.RecommendationOptions },
          l.createElement(
            "div",
            { className: (0, m.Z)(u.Row, u.FirstRow) },
            l.createElement(D, {
              minLabel: (0, p.Xx)("#Popularity_Popular"),
              titleLabel: (0, p.Xx)("#Popularity_Title"),
              maxLabel: (0, p.Xx)("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: L.m_fQueuedPopularityValue,
              onChange: L.onPopularityChanged,
            }),
            l.createElement(D, {
              minLabel: (0, p.Xx)("#Recency_Older"),
              titleLabel: (0, p.Xx)("#Recency_Title"),
              maxLabel: (0, p.Xx)("#Recency_Newer"),
              minValue: 0,
              maxValue: 1,
              value: L.m_fQueuedRecencyValue,
              onChange: L.onRecencyChanged,
              sliderLabels: i,
            })
          ),
          l.createElement(
            "div",
            { className: (0, m.Z)(u.Row, u.SecondRow) },
            l.createElement(x, {
              title: (0, p.Xx)("#TagFilterMultiple_Title"),
              tagoptions: t,
              selectedtags: n,
              key: "Filter" + n.toString(),
              onAddTag: L.onTagFilterAdd,
              onRemoveTag: L.onTagFilterRemove,
            }),
            l.createElement(x, {
              title: (0, p.Xx)("#TagExcludeMultiple_Title"),
              tagoptions: t,
              selectedtags: a,
              key: "Exclude" + a.toString(),
              onAddTag: L.onTagExcludeAdd,
              onRemoveTag: L.onTagExcludeRemove,
            }),
            l.createElement(C, {
              className: u.WishlistCheckbox,
              titleLabel: (0, p.Xx)("#ExcludeWishlisted"),
              checked: L.m_bExcludeWishlisted,
              onChange: L.onExcludeWishlistedToggled,
            }),
            l.createElement(
              "button",
              {
                className: u.SaveUserSettingsButton,
                onClick: L.onSaveUserSettings,
                title: (0, p.Xx)("#SaveUserSettingsTooltip"),
              },
              (0, p.Xx)("#SaveUserSettings")
            )
          )
        );
      });
      let U = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_videoRef = l.createRef()),
            (this.state = {
              hovered: !1,
              wishlisted: L.getAppInfo()[e.appID].w,
            });
        }
        componentDidMount() {
          this.m_videoRef.current.defaultMuted = !0;
        }
        componentDidUpdate() {
          if (
            this.state.hovered &&
            this.m_videoRef &&
            this.m_videoRef.current &&
            0 == this.m_videoRef.current.currentTime
          ) {
            const e = this.m_videoRef.current.play();
            e &&
              e.then(
                () => {},
                () => {}
              );
          }
        }
        OnHover() {
          this.setState({ hovered: !0 });
        }
        OnUnHover() {
          this.setState({ hovered: !1 }),
            this.m_videoRef &&
              this.m_videoRef.current &&
              ((this.m_videoRef.current.currentTime = 0),
              this.m_videoRef.current.pause());
        }
        onMuteToggle(e) {
          L.shouldMute()
            ? (L.onUnMuteClicked(),
              this.m_videoRef &&
                this.m_videoRef.current &&
                (this.m_videoRef.current.muted = !1))
            : (L.onMuteClicked(),
              this.m_videoRef &&
                this.m_videoRef.current &&
                (this.m_videoRef.current.muted = !0)),
            e.preventDefault(),
            e.stopPropagation();
        }
        onAddToWishlist(e) {
          L.onAddToWishlist(this.props.appID, this.props.rank),
            this.setState({ wishlisted: !0 }),
            e.preventDefault(),
            e.stopPropagation();
        }
        onGoToWishlist(e) {
          L.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
        }
        onAddToCart(e) {
          L.onAddToCart(this.props.appID, this.props.rank),
            e.preventDefault(),
            e.stopPropagation();
        }
        render() {
          const { appID: e, score: t, rank: i, width: a } = this.props,
            n =
              "https://steamcdn-a.akamaihd.net/steam/apps/" + e + "/header.jpg",
            s = L.getAppInfo()[e];
          if (!s) return l.createElement("div", null);
          const o = s.n,
            r =
              s.r > 0
                ? (0, p.Xx)("#Recommendation_ReleasedOn", (0, p.vX)(s.r))
                : "";
          let _ = [];
          if (s.t) {
            let t = 0;
            for (const i of s.t)
              if (
                (_.push(
                  l.createElement(
                    "div",
                    { key: `${e}_${i}`, className: u.Tag },
                    L.getTagName(i)
                  )
                ),
                t++,
                5 == t)
              )
                break;
          }
          const g = parseInt(u.smallentrywidth),
            h = parseInt(u.optionswrapwidth);
          let E = 112,
            v = !0;
          a < g ? ((E = 66), (v = !1)) : a < h && ((E = 87), (v = !1));
          const S = v && this.state.hovered,
            y = Math.min(Number(t) / 10, 1e3);
          Math.max(1, t);
          let R = !1,
            A = !1,
            N = !0,
            f = "",
            I = "",
            D = "",
            C = "";
          let x = "",
            P = !1,
            U = !0;
          if (S) {
            const e = L.getDetails(this.props.appID);
            e &&
              ((R = !0),
              (A = e.discount_pct > 0),
              (N = "0" == e.discount_price),
              "probably" ==
              document
                .createElement("video")
                .canPlayType('video/webm; codecs="vp8, vorbis"')
                ? L.shouldUseMicrotrailers() && e.microtrailer_webm
                  ? ((x = e.microtrailer_webm), (P = !0), (U = !1))
                  : (x = e.video_webm)
                : L.shouldUseMicrotrailers() && e.microtrailer_mp4
                ? ((x = e.microtrailer_mp4), (P = !0), (U = !1))
                : (x = e.video_mp4),
              (f = `-${e.discount_pct}%`),
              (I = e.base_price),
              (D = N ? (0, p.Xx)("#FreeToPlay") : e.discount_price),
              (C = e.description));
          }
          const w = x && x.length > 0;
          return l.createElement(
            c.Z,
            { appID: e, snr: T.LINK_PARAM },
            l.createElement(
              "a",
              {
                href: `${T.BASE_URL}app/${e}?snr=${T.LINK_PARAM}`,
                onClick: () => L.onAppClicked(e, i),
                className: (0, m.Z)(
                  u.RecommendationEntry,
                  "ds_flagged",
                  "ds_wishlist",
                  i > 30 && u.Hidden,
                  S && u.Hovered
                ),
                style: { top: Math.min(31, i) * E },
                onMouseEnter: this.OnHover,
                onMouseLeave: this.OnUnHover,
              },
              l.createElement(
                "div",
                { className: u.TopEntrySection },
                l.createElement(
                  "div",
                  { className: u.LeftSection },
                  l.createElement("img", {
                    className: (0, m.Z)(u.Logo, (!w || !S) && u.Revealed),
                    src: n,
                  }),
                  l.createElement("video", {
                    ref: this.m_videoRef,
                    className: (0, m.Z)(
                      "highlight_player_item",
                      "highlight_movie",
                      u.Video,
                      w && S && u.Revealed
                    ),
                    playsInline: !0,
                    autoPlay: !0,
                    muted: U && L.shouldMute(),
                    src: x,
                    loop: P,
                  }),
                  U &&
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(u.UnMute, w && u.Revealed),
                        onClick: (e) => this.onMuteToggle(e),
                      },
                      l.createElement(d.ffh, { muted: L.shouldMute() })
                    ),
                  this.state.wishlisted &&
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          "ds_flag",
                          "ds_wishlist_flag",
                          u.WishlistFlag
                        ),
                      },
                      (0, p.Xx)("#Recommendation_OnWishlist") + "  "
                    )
                ),
                l.createElement(
                  "div",
                  { className: u.RightSection },
                  l.createElement("div", { className: u.Name }, o),
                  l.createElement(
                    "div",
                    { className: u.CenterSection },
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          u.CenterOption,
                          u.CenterDefault,
                          S && u.Hidden
                        ),
                      },
                      l.createElement("div", { className: u.Released }, r),
                      l.createElement(
                        "div",
                        { className: u.BarContainer },
                        l.createElement("div", {
                          className: u.Bar,
                          style: { width: `${y}%` },
                        })
                      ),
                      l.createElement("div", { className: u.Tags }, _)
                    ),
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          u.CenterOption,
                          u.CenterHovered,
                          !S && u.Hidden
                        ),
                      },
                      C
                    )
                  ),
                  R &&
                    l.createElement(
                      "div",
                      { className: u.BottomEntrySection },
                      l.createElement(
                        "div",
                        {
                          className: (0, m.Z)(
                            "game_purchase_action",
                            u.PurchaseSection
                          ),
                        },
                        l.createElement(
                          "div",
                          {
                            className: (0, m.Z)(
                              "game_purchase_action_bg",
                              u.PurchaseBG
                            ),
                          },
                          A &&
                            l.createElement(
                              "div",
                              {
                                className:
                                  "discount_block game_purchase_discount",
                              },
                              l.createElement(
                                "div",
                                { className: "discount_pct" },
                                f
                              ),
                              l.createElement(
                                "div",
                                { className: "discount_prices" },
                                l.createElement(
                                  "div",
                                  { className: "discount_original_price" },
                                  I
                                ),
                                l.createElement(
                                  "div",
                                  { className: "discount_final_price" },
                                  D
                                )
                              )
                            ),
                          !A &&
                            l.createElement(
                              "div",
                              {
                                className: (0, m.Z)(
                                  "game_purchase_price",
                                  "price",
                                  u.Price
                                ),
                              },
                              D
                            ),
                          !N &&
                            l.createElement(
                              "div",
                              {
                                className: "btn_addtocart",
                                onClick: (e) => this.onAddToCart(e),
                              },
                              l.createElement(
                                "span",
                                {
                                  className:
                                    "btnv6_green_white_innerfade btn_medium",
                                },
                                l.createElement(
                                  "span",
                                  null,
                                  (0, p.Xx)("#btn_add_to_cart")
                                )
                              )
                            )
                        )
                      ),
                      !this.state.wishlisted &&
                        !N &&
                        l.createElement(
                          "div",
                          {
                            id: "add_to_wishlist_area",
                            className: u.WishlistSection,
                            onClick: (e) => this.onAddToWishlist(e),
                          },
                          l.createElement(
                            "div",
                            { className: "btnv6_blue_hoverfade btn_medium" },
                            l.createElement(
                              "span",
                              null,
                              (0, p.Xx)("#wishlist_add_to_wishlist")
                            )
                          )
                        ),
                      this.state.wishlisted &&
                        !N &&
                        l.createElement(
                          "div",
                          {
                            className: (0, m.Z)(
                              "btnv6_blue_hoverfade btn_medium",
                              "queue_btn_active",
                              u.Wishlisted,
                              u.WishlistSection
                            ),
                            "data-tooltip-text": (0, p.Xx)(
                              "#OnWishlistTooltip"
                            ),
                            onClick: (e) => this.onGoToWishlist(e),
                          },
                          l.createElement(
                            "span",
                            null,
                            l.createElement("img", {
                              src: `${T.IMG_URL_BASE}/v6/ico/ico_selected.png`,
                            }),
                            "  " + (0, p.Xx)("#OnWishlist")
                          )
                        )
                    )
                )
              )
            )
          );
        }
      };
      (0, n.gn)([_.ak], U.prototype, "OnHover", null),
        (0, n.gn)([_.ak], U.prototype, "OnUnHover", null),
        (0, n.gn)([_.ak], U.prototype, "onMuteToggle", null),
        (0, n.gn)([_.ak], U.prototype, "onAddToWishlist", null),
        (0, n.gn)([_.ak], U.prototype, "onGoToWishlist", null),
        (0, n.gn)([_.ak], U.prototype, "onAddToCart", null),
        (U = (0, n.gn)([o.Pi], U));
      let w = class extends l.Component {
        constructor(e) {
          super(e), (this.state = { sortedRecommendedApps: [] });
        }
        render() {
          const e = L.m_fRecencyValue * (T.NUM_RECENCY_STEPS - 1 - 0.001),
            t = Math.floor(e),
            i = t + 1,
            a = 1 - (e - t),
            n = 1 - a,
            s = L.m_fPopularityValue * (T.NUM_POPULARITY_STEPS - 1 - 0.001),
            o = Math.floor(s),
            r = o + 1,
            c = 1 - (s - o),
            d = 1 - c;
          let _ = [];
          _.push({ index: o * T.NUM_RECENCY_STEPS + t, weight: c * a }),
            _.push({ index: r * T.NUM_RECENCY_STEPS + t, weight: d * a }),
            _.push({ index: o * T.NUM_RECENCY_STEPS + i, weight: c * n }),
            _.push({ index: r * T.NUM_RECENCY_STEPS + i, weight: d * n });
          let g = new Map(),
            h = 0;
          const E = L.getRecommendations(),
            v = L.getAppInfo();
          let S = [];
          if (E) {
            for (const e of _) {
              const t = E[e.index];
              if (((h = Math.max(h, t.score_scale)), t))
                for (let i = 0; i < t.app_ids.length; i++) {
                  const a = t.app_ids[i];
                  if (
                    !v[a] ||
                    v[a].o ||
                    v[a].i ||
                    v[a].ti ||
                    (v[a].w && L.m_bExcludeWishlisted)
                  )
                    continue;
                  const n =
                    (g.get(a) || 0) + t.scores[i] * e.weight * t.score_scale;
                  g.set(a, n);
                }
            }
            g.forEach((e, t) => g.set(t, e / h));
            let e = [];
            g.forEach((t, i) => e.push({ appid: i, score: t })),
              (e = e.filter(
                (e) => v[e.appid].t && L.doTagsPassFilter(v[e.appid].t)
              )),
              (e = e.filter(
                (e) => v[e.appid].t && !L.doTagsFailExclusion(v[e.appid].t)
              )),
              (e = e.filter((e) => e.score > 0));
            let t = e.sort((e, t) => t.score - e.score);
            if (t.length > 0) {
              t = t.slice(0, 30);
              let e = 0;
              for (let i of t) (i.rank = e), e++;
              for (const e of t)
                S.push(
                  l.createElement(U, {
                    key: e.appid,
                    appID: e.appid,
                    score: e.score,
                    rank: e.rank,
                    width: this.props.width,
                  })
                );
            } else
              S.push(
                l.createElement(
                  "div",
                  {
                    key: "no_recommedations_due_to_filter",
                    className: u.NoRecommendationsMessage,
                  },
                  (0, p.Xx)("#NoRecommendationsDueToFilter")
                )
              );
          } else
            S.push(
              l.createElement("div", {
                key: "recommendations_loading",
                className: u.RecommendationsLoading,
              })
            );
          return l.createElement(
            "div",
            { className: u.RecommendationList },
            l.createElement(
              "div",
              { className: u.Header },
              (0, p.Xx)("#Recommendations_Header")
            ),
            l.createElement(P, null),
            l.createElement(
              "div",
              {
                className: (0, m.Z)(
                  u.List,
                  L.areResultsExpired() && u.Updating
                ),
              },
              S
            )
          );
        }
      };
      w = (0, n.gn)([o.Pi], w);
      let k = class extends l.Component {
        constructor() {
          super(...arguments), (this.state = { width: window.innerWidth });
        }
        updateDimensions() {
          this.setState({ width: window.innerWidth });
        }
        componentDidMount() {
          window.addEventListener("resize", this.updateDimensions);
        }
        ShowLoginDialog() {
          (0, A.Xt)();
        }
        render() {
          return s.L7.logged_in
            ? l.createElement(
                "div",
                {
                  className: u.App,
                  style: { height: 3840 + 26 * L.getTagHeight() },
                },
                l.createElement(
                  "div",
                  { className: u.Container },
                  l.createElement(
                    "div",
                    { className: u.TopSection },
                    l.createElement(
                      "div",
                      { className: u.Header },
                      (0, p.Xx)("#HeaderTitle")
                    ),
                    l.createElement(
                      "div",
                      { className: u.Body },
                      (0, p.Xx)("#HeaderBody1")
                    )
                  ),
                  l.createElement(
                    "div",
                    { className: u.BottomSection },
                    l.createElement(I, { accountID: s.L7.accountid }),
                    l.createElement("div", { className: u.VerticalBar }),
                    l.createElement(w, { width: this.state.width })
                  )
                )
              )
            : l.createElement(
                "div",
                { className: u.App },
                l.createElement(
                  "div",
                  { className: u.Login },
                  l.createElement(
                    "div",
                    { className: u.Text },
                    (0, p.Xx)("#LoginText")
                  ),
                  l.createElement(
                    "div",
                    {
                      className: (0, m.Z)(
                        "btn_green_white_innerfade",
                        " btn_medium"
                      ),
                      onClick: this.ShowLoginDialog,
                    },
                    l.createElement("span", null, (0, p.Xx)("#LoginButton"))
                  )
                )
              );
        }
      };
      (0, n.gn)([_.ak], k.prototype, "updateDimensions", null),
        (0, n.gn)([_.ak], k.prototype, "ShowLoginDialog", null),
        (k = (0, n.gn)([o.Pi], k));
      const M = k;
    },
  },
]);
