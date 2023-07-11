/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9682],
  {
    95398: (e) => {
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
    49633: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => l });
      var s = i(33940),
        a = i(89526),
        n = i(45437),
        r = i(74802),
        o = i(4306);
      class l extends a.Component {
        OnEnter() {
          n.E.AddImpression(this.props.appID, this.props.snr);
        }
        render() {
          return a.createElement(
            r.h,
            { onEnter: this.OnEnter },
            this.props.children,
          );
        }
      }
      (0, s.gn)([o.ak], l.prototype, "OnEnter", null);
    },
    23217: (e, t, i) => {
      "use strict";
      i.d(t, { l: () => r });
      var s = i(52868),
        a = i.n(s),
        n = i(54856);
      function r(e) {
        if (a().isCancel(e))
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
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
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
    45437: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => c });
      var s = i(33940),
        a = i(54671),
        n = i(32765),
        r = i(87361),
        o = i(37377);
      class l {
        constructor() {
          (this.m_mapAppToSNRs = new Map()), (this.m_rgImpressionsToAdd = []);
        }
        AddImpression(e, t) {
          let i = !1;
          a.jg.Get().BAppImpressionsAllowed()
            ? (this.m_mapAppToSNRs.has(e)
                ? -1 == this.m_mapAppToSNRs.get(e).indexOf(t) &&
                  (this.m_mapAppToSNRs.get(e).push(t), (i = !0))
                : (this.m_mapAppToSNRs.set(e, [t]), (i = !0)),
              i &&
                (this.m_rgImpressionsToAdd.push(`${e}@${t}`),
                this.UpdateCookie()))
            : "dev" === n.De.WEB_UNIVERSE &&
              console.log("Cookie Prefs: Not allowing App Impressions");
        }
        UpdateCookie() {
          const e = [
            (0, r.bG)("app_impressions") || "",
            ...this.m_rgImpressionsToAdd,
          ].join("|");
          this.m_rgImpressionsToAdd = [];
          encodeURIComponent(e).length <= 3200 &&
            (0, r.I1)("app_impressions", e);
        }
      }
      (0, s.gn)([(0, o.D)(1e3)], l.prototype, "UpdateCookie", null);
      const c = new l();
      window.g_ImpressionTracker = c;
    },
    42591: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => k });
      var s,
        a = i(33940),
        n = i(32765),
        r = i(88464),
        o = i(50265),
        l = i(89526),
        c = i(49633),
        d = i(701),
        m = i(19304),
        p = i(14826),
        _ = i(4306),
        u = i(95398),
        g = i(80292),
        h = i.n(g),
        E = i(52868),
        v = i.n(E);
      !(function (e) {
        (e[(e.Unrequested = 0)] = "Unrequested"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Valid = 2)] = "Valid"),
          (e[(e.Failed = 3)] = "Failed"),
          (e[(e.Rerequest = 4)] = "Rerequest");
      })(s || (s = {}));
      class S {
        constructor() {
          (this.eState = s.Unrequested), (this.nExpirationTime = 0);
        }
        getData(e, t, i) {
          const a = this.eState == s.Pending || this.eState == s.Rerequest;
          return (
            this.isExpired() &&
              !a &&
              ((this.eState = s.Pending),
              t()
                .then((a) => {
                  if (this.eState == s.Rerequest)
                    return this.expireData(), void this.getData(e, t, i);
                  (this.data = i ? i(a) : a),
                    a
                      ? (this.delayNewData(e), (this.eState = s.Valid))
                      : (this.eState = s.Failed);
                })
                .catch((e) => {
                  (this.data = i(void 0)), (this.eState = s.Failed);
                })),
            this.data
          );
        }
        clearData() {
          (this.eState = s.Unrequested),
            (this.data = null),
            (this.nExpirationTime = 0);
        }
        setDataPending() {
          this.eState = s.Pending;
        }
        isDataPending() {
          return this.eState == s.Pending;
        }
        setData(e, t) {
          (this.data = t), this.delayNewData(e), (this.eState = s.Valid);
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
          this.eState == s.Pending && (this.eState = s.Rerequest);
        }
        getCachedData() {
          return this.data;
        }
      }
      (0, a.gn)([o.LO], S.prototype, "data", void 0),
        (0, a.gn)([o.LO], S.prototype, "nExpirationTime", void 0);
      (0, a.gn)(
        [o.LO],
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
              e.getCachedData(),
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
        void 0,
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
                  "",
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
                (0, a.mG)(this, void 0, void 0, function* () {
                  return yield v().get(
                    `${T.BASE_URL}recommender/${T.STEAM_ID}/details?appid=${e}&sessionid=${T.SESSION_ID}`,
                  );
                }),
              (e) => e.data,
            )
          );
        }
        getResults(e, t, i, s) {
          const n = e ? "1" : "0",
            r = t ? `${t}` : "0",
            o = i ? "1" : "0",
            l = s ? `${s}` : "0";
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
                (0, a.mG)(this, void 0, void 0, function* () {
                  return yield v().get(
                    `${T.BASE_URL}recommender/${T.STEAM_ID}/results?sessionid=${T.SESSION_ID}&steamid=${T.STEAM_ID}&include_played=${n}&algorithm=${r}&reinference=${o}&model_version=${l}${c}`,
                  );
                }),
              (e) => e.data,
            )
          );
        }
        areResultsExpired() {
          return this.m_ResultDataCache.isExpired();
        }
        getRecommendations() {
          const e = f.getResults(
            T.INCLUDE_PLAYED,
            T.ALGORITHM,
            T.REINFERENCE,
            T.MODEL_VERSION,
          );
          return e ? e.recommendations : void 0;
        }
        getInputApps() {
          return this.m_InputAppsCache.getData(
            9999999,
            () =>
              (0, a.mG)(this, void 0, void 0, function* () {
                return yield v().get(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/inputs?sessionid=${T.SESSION_ID}&steamid=${T.STEAM_ID}`,
                );
              }),
            (e) => e.data,
          );
        }
        getAppInfo() {
          const e = f.getResults(
            T.INCLUDE_PLAYED,
            T.ALGORITHM,
            T.REINFERENCE,
            T.MODEL_VERSION,
          );
          return e ? e.app_info : void 0;
        }
        getTags() {
          return this.m_TagsCache.getData(
            9999999,
            () =>
              (0, a.mG)(this, void 0, void 0, function* () {
                return yield v().get(
                  `${T.BASE_URL}recommender/${T.STEAM_ID}/tags?sessionid=${T.SESSION_ID}`,
                );
              }),
            (e) => {
              this.m_TagNameMap.clear();
              for (const t of e.data) this.m_TagNameMap.set(t.tagid, t.name);
              return e.data;
            },
          );
        }
        getTagName(e) {
          return this.getTags(), this.m_TagNameMap.get(e);
        }
        getTagHeight() {
          return Math.max(
            this.m_rgFilterTags.length,
            this.m_rgExcludeTags.length,
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
          return (0, a.mG)(this, void 0, void 0, function* () {
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
                  t,
                );
            }
          });
        }
        onToggleIgnore(e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
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
          return (0, a.mG)(this, void 0, void 0, function* () {
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
          return (0, a.mG)(this, void 0, void 0, function* () {
            f.getAppInfo()[e].w = !0;
            let i = { sessionid: T.SESSION_ID, appid: e };
            const s = yield v().post(
              `${T.BASE_URL}recommender/${T.STEAM_ID}/wishlist?snr=${T.LINK_PARAM}`,
              i,
            );
            let a = {
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
              yield v().post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, a),
              s
            );
          });
        }
        onGoToWishlist() {
          window.location.href = `${T.COMMUNITY_BASE_URL}profiles/${T.STEAM_ID}/wishlist`;
        }
        onAddToCart(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let i = { sessionid: T.SESSION_ID, appid: e };
            yield v().post(
              `${T.BASE_URL}recommender/${T.STEAM_ID}/cart?snr=${T.LINK_PARAM}`,
              i,
            );
            let s = {
              account_id: T.ACCOUNT_ID,
              session_id: T.SESSION_ID,
              app_id: e,
              app_rank: t,
              action: y.AddToCart,
              algorithm: 1,
              setting_1: 100 * this.m_fPopularityValue,
              setting_2: 100 * this.m_fRecencyValue,
            };
            yield v().post(`${T.BASE_URL}recommender/${T.STEAM_ID}/stats`, s),
              (window.location.href = `${n.De.STORE_BASE_URL}cart`);
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
      (0, a.gn)([o.LO], R.prototype, "m_fPopularityValue", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_fRecencyValue", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_rgFilterTags", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_rgExcludeTags", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_fQueuedPopularityValue", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_fQueuedRecencyValue", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_bExcludeWishlisted", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_bShouldMute", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_bUseMicrotrailers", void 0),
        (0, a.gn)([o.LO], R.prototype, "m_bIgnoredEdited", void 0),
        (0, a.gn)([_.ak], R.prototype, "getTagHeight", null),
        (0, a.gn)([_.ak], R.prototype, "onPopularityChanged", null),
        (0, a.gn)([_.ak], R.prototype, "onRecencyChanged", null),
        (0, a.gn)([_.ak], R.prototype, "onTagFilterAdd", null),
        (0, a.gn)([_.ak], R.prototype, "onTagFilterRemove", null),
        (0, a.gn)([_.ak], R.prototype, "onTagExcludeAdd", null),
        (0, a.gn)([_.ak], R.prototype, "onTagExcludeRemove", null),
        (0, a.gn)([_.ak], R.prototype, "doTagsPassFilter", null),
        (0, a.gn)([_.ak], R.prototype, "doTagsFailExclusion", null),
        (0, a.gn)([_.ak], R.prototype, "onExcludeWishlistedToggled", null),
        (0, a.gn)([_.ak], R.prototype, "onSaveUserSettings", null),
        (0, a.gn)([_.ak], R.prototype, "onToggleIgnore", null),
        (0, a.gn)([_.ak], R.prototype, "onUpdateWithIgnored", null),
        (0, a.gn)([_.ak], R.prototype, "onAppClicked", null),
        (0, a.gn)([_.ak], R.prototype, "onAddToWishlist", null),
        (0, a.gn)([_.ak], R.prototype, "onGoToWishlist", null),
        (0, a.gn)([_.ak], R.prototype, "onAddToCart", null),
        (0, a.gn)([_.ak], R.prototype, "onMuteClicked", null),
        (0, a.gn)([_.ak], R.prototype, "onUnMuteClicked", null),
        (0, a.gn)([_.ak], R.prototype, "shouldMute", null),
        (0, a.gn)([_.ak], R.prototype, "shouldUseMicrotrailers", null);
      const f = new R();
      window.g_InteractiveRecommender = f;
      var A = i(32905);
      !(function () {
        let e = (0, n.kQ)("ir_config", "application_config");
        e && (Object.assign(T, e), f.Init());
      })();
      const L = ({ accountID: e }) => {
          const t = f.getInputApps(),
            i = Object.keys(t).length;
          let s = 0;
          return (
            Object.keys(t).map((e) => {
              s += t[e].p;
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
                  T.PERSONA_NAME,
                ),
                l.createElement(
                  "div",
                  { className: u.GameCount },
                  (0, p.Xx)("#PlaytimeList_RecentGames", i),
                ),
                l.createElement(
                  "div",
                  { className: u.TotalTime },
                  (0, p.Xx)("#PlaytimeList_HoursTotal", s),
                ),
              ),
            )
          );
        },
        C = ({ appID: e, name: t, hours: i, lastPlayed: s, ignored: a }) => {
          const n = `${T.CDN_URL}apps/${e}/header.jpg`,
            r = Date.now() / 1e3 - s;
          let o = "",
            c = "";
          return (
            s <= 86400
              ? (c = (0, p.Xx)("#PlaytimeList_LastPlayedMax"))
              : r > 31449600
              ? ((o = (0, p.vX)(s)),
                (c = (0, p.Xx)("#PlaytimeList_LastPlayed", o)))
              : ((o = (0, p.yW)(r)),
                (c = (0, p.Xx)("#PlaytimeList_LastPlayed", o))),
            l.createElement(
              "div",
              { className: (0, m.Z)(u.PlayedGame, a && u.Ignored) },
              l.createElement(
                "a",
                { href: `${T.BASE_URL}app/${e}?snr=${T.LINK_PARAM}` },
                l.createElement("img", { className: u.Logo, src: n }),
              ),
              l.createElement(
                "div",
                { className: u.PlaytimeInfo },
                l.createElement(
                  "div",
                  { className: u.HoursPlayed },
                  (0, p.Xx)("#PlaytimeList_Hours", i),
                ),
                l.createElement("div", { className: u.Title }, t),
                l.createElement("div", { className: u.LastPlayed }, c),
                l.createElement(
                  "div",
                  {
                    className: u.IgnoreToggle,
                    onClick: () => f.onToggleIgnore(e),
                  },
                  (0, p.Xx)(
                    a ? "#PlaytimeList_UnIgnore" : "#PlaytimeList_Ignore",
                  ),
                ),
              ),
            )
          );
        };
      let N = class extends l.Component {
        constructor(e) {
          super(e), (this.state = {});
        }
        render() {
          const e = f.getInputApps();
          let t = [];
          if (!e)
            return l.createElement(
              "div",
              { className: u.PlaytimeList },
              l.createElement(
                "div",
                { className: u.Header },
                (0, p.Xx)("#PlaytimeList_Header"),
              ),
              l.createElement("div", { className: u.Loading }),
            );
          f.getAppInfo();
          const i = e.slice().sort((e, t) => t.l - e.l);
          return (
            Object.keys(i).map((e) => {
              const s = i[e];
              t.push(
                l.createElement(C, {
                  key: "PlayedGame_" + s.a,
                  appID: s.a,
                  name: s.t,
                  hours: s.p,
                  lastPlayed: s.l,
                  ignored: s.i || s.ip,
                }),
              );
            }),
            l.createElement(
              "div",
              { className: u.PlaytimeList },
              l.createElement(
                "div",
                { className: u.Header },
                (0, p.Xx)("#PlaytimeList_Header"),
              ),
              l.createElement(L, { accountID: this.props.accountID }),
              l.createElement("div", { className: u.List }, t),
            )
          );
        }
      };
      N = (0, a.gn)([r.Pi], N);
      const I = ({
          titleLabel: e,
          minLabel: t,
          maxLabel: i,
          minValue: s,
          maxValue: a,
          value: n,
          onChange: r,
          sliderLabels: o,
        }) => {
          const c = o
              ? Math.round((o.length - 1) * ((n - s) / (a - s)))
              : void 0,
            d = o ? o[c] : "";
          return l.createElement(
            "div",
            { className: u.OptionSlider },
            l.createElement("div", { className: u.Title }, e),
            l.createElement(
              "div",
              { className: u.Labels },
              l.createElement("div", { className: u.Min }, t),
              l.createElement("div", { className: u.Max }, i),
            ),
            l.createElement("input", {
              type: "range",
              min: s,
              max: a,
              step: (a - s) / 100,
              value: n,
              onChange: r,
            }),
            l.createElement("div", { className: u.OptionalLabel }, d),
          );
        },
        D = ({ className: e, titleLabel: t, checked: i, onChange: s }) =>
          l.createElement(
            "label",
            { className: (0, m.Z)(u.OptionCheckbox, e && e) },
            l.createElement("input", {
              type: "checkbox",
              className: u.Checkbox,
              checked: i,
              onChange: s,
            }),
            t,
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
          const e = f.getTags();
          if (e)
            for (const t of e)
              this.rgTags.push({ id: parseInt(t.tagid), name: t.name });
        }
        onFetchRequested(e) {
          const t = e.value.trim().toLowerCase(),
            i = t.length,
            s =
              0 === i
                ? this.props.tagoptions.slice(0, 10)
                : this.props.tagoptions.filter(
                    (e) => e.name.toLowerCase().slice(0, i) === t,
                  );
          this.setState({ suggestions: s });
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
            let i = f.m_TagNameMap.get(e);
            t.push(
              l.createElement(
                "div",
                {
                  key: e,
                  className: u.SelectedTag,
                  onClick: (t) => this.onRemoveSelectedTag(e),
                },
                l.createElement("div", null, i),
                l.createElement("div", { className: u.Close }, "X"),
              ),
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
            t,
          );
        }
      };
      (0, a.gn)([o.LO], x.prototype, "selectedtags", void 0),
        (0, a.gn)([_.ak], x.prototype, "onFetchRequested", null),
        (0, a.gn)([_.ak], x.prototype, "onClearRequested", null),
        (0, a.gn)([_.ak], x.prototype, "onChange", null),
        (0, a.gn)([_.ak], x.prototype, "onKeyDown", null),
        (0, a.gn)([_.ak], x.prototype, "shouldRenderSuggestions", null),
        (0, a.gn)([_.ak], x.prototype, "onSuggestionSelected", null),
        (0, a.gn)([_.ak], x.prototype, "onRemoveSelectedTag", null),
        (x = (0, a.gn)([r.Pi], x));
      const P = (0, r.Pi)(() => {
        const e = f.getTags();
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
        let s = f.m_rgSavedExcludeTags,
          a = f.m_rgSavedFilterTags;
        return l.createElement(
          "div",
          { className: u.RecommendationOptions },
          l.createElement(
            "div",
            { className: (0, m.Z)(u.Row, u.FirstRow) },
            l.createElement(I, {
              minLabel: (0, p.Xx)("#Popularity_Popular"),
              titleLabel: (0, p.Xx)("#Popularity_Title"),
              maxLabel: (0, p.Xx)("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: f.m_fQueuedPopularityValue,
              onChange: f.onPopularityChanged,
            }),
            l.createElement(I, {
              minLabel: (0, p.Xx)("#Recency_Older"),
              titleLabel: (0, p.Xx)("#Recency_Title"),
              maxLabel: (0, p.Xx)("#Recency_Newer"),
              minValue: 0,
              maxValue: 1,
              value: f.m_fQueuedRecencyValue,
              onChange: f.onRecencyChanged,
              sliderLabels: i,
            }),
          ),
          l.createElement(
            "div",
            { className: (0, m.Z)(u.Row, u.SecondRow) },
            l.createElement(x, {
              title: (0, p.Xx)("#TagFilterMultiple_Title"),
              tagoptions: t,
              selectedtags: a,
              key: "Filter" + a.toString(),
              onAddTag: f.onTagFilterAdd,
              onRemoveTag: f.onTagFilterRemove,
            }),
            l.createElement(x, {
              title: (0, p.Xx)("#TagExcludeMultiple_Title"),
              tagoptions: t,
              selectedtags: s,
              key: "Exclude" + s.toString(),
              onAddTag: f.onTagExcludeAdd,
              onRemoveTag: f.onTagExcludeRemove,
            }),
            l.createElement(D, {
              className: u.WishlistCheckbox,
              titleLabel: (0, p.Xx)("#ExcludeWishlisted"),
              checked: f.m_bExcludeWishlisted,
              onChange: f.onExcludeWishlistedToggled,
            }),
            l.createElement(
              "button",
              {
                className: u.SaveUserSettingsButton,
                onClick: f.onSaveUserSettings,
                title: (0, p.Xx)("#SaveUserSettingsTooltip"),
              },
              (0, p.Xx)("#SaveUserSettings"),
            ),
          ),
        );
      });
      let U = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_videoRef = l.createRef()),
            (this.state = {
              hovered: !1,
              wishlisted: f.getAppInfo()[e.appID].w,
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
                () => {},
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
          f.shouldMute()
            ? (f.onUnMuteClicked(),
              this.m_videoRef &&
                this.m_videoRef.current &&
                (this.m_videoRef.current.muted = !1))
            : (f.onMuteClicked(),
              this.m_videoRef &&
                this.m_videoRef.current &&
                (this.m_videoRef.current.muted = !0)),
            e.preventDefault(),
            e.stopPropagation();
        }
        onAddToWishlist(e) {
          f.onAddToWishlist(this.props.appID, this.props.rank),
            this.setState({ wishlisted: !0 }),
            e.preventDefault(),
            e.stopPropagation();
        }
        onGoToWishlist(e) {
          f.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
        }
        onAddToCart(e) {
          f.onAddToCart(this.props.appID, this.props.rank),
            e.preventDefault(),
            e.stopPropagation();
        }
        render() {
          const { appID: e, score: t, rank: i, width: s } = this.props,
            a =
              "https://steamcdn-a.akamaihd.net/steam/apps/" + e + "/header.jpg",
            n = f.getAppInfo()[e];
          if (!n) return l.createElement("div", null);
          const r = n.n,
            o =
              n.r > 0
                ? (0, p.Xx)("#Recommendation_ReleasedOn", (0, p.vX)(n.r))
                : "";
          let _ = [];
          if (n.t) {
            let t = 0;
            for (const i of n.t)
              if (
                (_.push(
                  l.createElement(
                    "div",
                    { key: `${e}_${i}`, className: u.Tag },
                    f.getTagName(i),
                  ),
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
          s < g ? ((E = 66), (v = !1)) : s < h && ((E = 87), (v = !1));
          const S = v && this.state.hovered,
            y = Math.min(Number(t) / 10, 1e3);
          Math.max(1, t);
          let R = !1,
            A = !1,
            L = !0,
            C = "",
            N = "",
            I = "",
            D = "";
          let x = "",
            P = !1,
            U = !0;
          if (S) {
            const e = f.getDetails(this.props.appID);
            e &&
              ((R = !0),
              (A = e.discount_pct > 0),
              (L = "0" == e.discount_price),
              "probably" ==
              document
                .createElement("video")
                .canPlayType('video/webm; codecs="vp8, vorbis"')
                ? f.shouldUseMicrotrailers() && e.microtrailer_webm
                  ? ((x = e.microtrailer_webm), (P = !0), (U = !1))
                  : (x = e.video_webm)
                : f.shouldUseMicrotrailers() && e.microtrailer_mp4
                ? ((x = e.microtrailer_mp4), (P = !0), (U = !1))
                : (x = e.video_mp4),
              (C = `-${e.discount_pct}%`),
              (N = e.base_price),
              (I = L ? (0, p.Xx)("#FreeToPlay") : e.discount_price),
              (D = e.description));
          }
          const M = x && x.length > 0;
          return l.createElement(
            c.Z,
            { appID: e, snr: T.LINK_PARAM },
            l.createElement(
              "a",
              {
                href: `${T.BASE_URL}app/${e}?snr=${T.LINK_PARAM}`,
                onClick: () => f.onAppClicked(e, i),
                className: (0, m.Z)(
                  u.RecommendationEntry,
                  "ds_flagged",
                  "ds_wishlist",
                  i > 30 && u.Hidden,
                  S && u.Hovered,
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
                    className: (0, m.Z)(u.Logo, (!M || !S) && u.Revealed),
                    src: a,
                  }),
                  l.createElement("video", {
                    ref: this.m_videoRef,
                    className: (0, m.Z)(
                      "highlight_player_item",
                      "highlight_movie",
                      u.Video,
                      M && S && u.Revealed,
                    ),
                    playsInline: !0,
                    autoPlay: !0,
                    muted: U && f.shouldMute(),
                    src: x,
                    loop: P,
                  }),
                  U &&
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(u.UnMute, M && u.Revealed),
                        onClick: (e) => this.onMuteToggle(e),
                      },
                      l.createElement(d.ffh, { muted: f.shouldMute() }),
                    ),
                  this.state.wishlisted &&
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          "ds_flag",
                          "ds_wishlist_flag",
                          u.WishlistFlag,
                        ),
                      },
                      (0, p.Xx)("#Recommendation_OnWishlist") + "  ",
                    ),
                ),
                l.createElement(
                  "div",
                  { className: u.RightSection },
                  l.createElement("div", { className: u.Name }, r),
                  l.createElement(
                    "div",
                    { className: u.CenterSection },
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          u.CenterOption,
                          u.CenterDefault,
                          S && u.Hidden,
                        ),
                      },
                      l.createElement("div", { className: u.Released }, o),
                      l.createElement(
                        "div",
                        { className: u.BarContainer },
                        l.createElement("div", {
                          className: u.Bar,
                          style: { width: `${y}%` },
                        }),
                      ),
                      l.createElement("div", { className: u.Tags }, _),
                    ),
                    l.createElement(
                      "div",
                      {
                        className: (0, m.Z)(
                          u.CenterOption,
                          u.CenterHovered,
                          !S && u.Hidden,
                        ),
                      },
                      D,
                    ),
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
                            u.PurchaseSection,
                          ),
                        },
                        l.createElement(
                          "div",
                          {
                            className: (0, m.Z)(
                              "game_purchase_action_bg",
                              u.PurchaseBG,
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
                                C,
                              ),
                              l.createElement(
                                "div",
                                { className: "discount_prices" },
                                l.createElement(
                                  "div",
                                  { className: "discount_original_price" },
                                  N,
                                ),
                                l.createElement(
                                  "div",
                                  { className: "discount_final_price" },
                                  I,
                                ),
                              ),
                            ),
                          !A &&
                            l.createElement(
                              "div",
                              {
                                className: (0, m.Z)(
                                  "game_purchase_price",
                                  "price",
                                  u.Price,
                                ),
                              },
                              I,
                            ),
                          !L &&
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
                                  (0, p.Xx)("#btn_add_to_cart"),
                                ),
                              ),
                            ),
                        ),
                      ),
                      !this.state.wishlisted &&
                        !L &&
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
                              (0, p.Xx)("#wishlist_add_to_wishlist"),
                            ),
                          ),
                        ),
                      this.state.wishlisted &&
                        !L &&
                        l.createElement(
                          "div",
                          {
                            className: (0, m.Z)(
                              "btnv6_blue_hoverfade btn_medium",
                              "queue_btn_active",
                              u.Wishlisted,
                              u.WishlistSection,
                            ),
                            "data-tooltip-text": (0, p.Xx)(
                              "#OnWishlistTooltip",
                            ),
                            onClick: (e) => this.onGoToWishlist(e),
                          },
                          l.createElement(
                            "span",
                            null,
                            l.createElement("img", {
                              src: `${T.IMG_URL_BASE}/v6/ico/ico_selected.png`,
                            }),
                            "  " + (0, p.Xx)("#OnWishlist"),
                          ),
                        ),
                    ),
                ),
              ),
            ),
          );
        }
      };
      (0, a.gn)([_.ak], U.prototype, "OnHover", null),
        (0, a.gn)([_.ak], U.prototype, "OnUnHover", null),
        (0, a.gn)([_.ak], U.prototype, "onMuteToggle", null),
        (0, a.gn)([_.ak], U.prototype, "onAddToWishlist", null),
        (0, a.gn)([_.ak], U.prototype, "onGoToWishlist", null),
        (0, a.gn)([_.ak], U.prototype, "onAddToCart", null),
        (U = (0, a.gn)([r.Pi], U));
      let M = class extends l.Component {
        constructor(e) {
          super(e), (this.state = { sortedRecommendedApps: [] });
        }
        render() {
          const e = f.m_fRecencyValue * (T.NUM_RECENCY_STEPS - 1 - 0.001),
            t = Math.floor(e),
            i = t + 1,
            s = 1 - (e - t),
            a = 1 - s,
            n = f.m_fPopularityValue * (T.NUM_POPULARITY_STEPS - 1 - 0.001),
            r = Math.floor(n),
            o = r + 1,
            c = 1 - (n - r),
            d = 1 - c;
          let _ = [];
          _.push({ index: r * T.NUM_RECENCY_STEPS + t, weight: c * s }),
            _.push({ index: o * T.NUM_RECENCY_STEPS + t, weight: d * s }),
            _.push({ index: r * T.NUM_RECENCY_STEPS + i, weight: c * a }),
            _.push({ index: o * T.NUM_RECENCY_STEPS + i, weight: d * a });
          let g = new Map(),
            h = 0;
          const E = f.getRecommendations(),
            v = f.getAppInfo();
          let S = [];
          if (E) {
            for (const e of _) {
              const t = E[e.index];
              if (((h = Math.max(h, t.score_scale)), t))
                for (let i = 0; i < t.app_ids.length; i++) {
                  const s = t.app_ids[i];
                  if (
                    !v[s] ||
                    v[s].o ||
                    v[s].i ||
                    v[s].ti ||
                    (v[s].w && f.m_bExcludeWishlisted)
                  )
                    continue;
                  const a =
                    (g.get(s) || 0) + t.scores[i] * e.weight * t.score_scale;
                  g.set(s, a);
                }
            }
            g.forEach((e, t) => g.set(t, e / h));
            let e = [];
            g.forEach((t, i) => e.push({ appid: i, score: t })),
              (e = e.filter(
                (e) => v[e.appid].t && f.doTagsPassFilter(v[e.appid].t),
              )),
              (e = e.filter(
                (e) => v[e.appid].t && !f.doTagsFailExclusion(v[e.appid].t),
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
                  }),
                );
            } else
              S.push(
                l.createElement(
                  "div",
                  {
                    key: "no_recommedations_due_to_filter",
                    className: u.NoRecommendationsMessage,
                  },
                  (0, p.Xx)("#NoRecommendationsDueToFilter"),
                ),
              );
          } else
            S.push(
              l.createElement("div", {
                key: "recommendations_loading",
                className: u.RecommendationsLoading,
              }),
            );
          return l.createElement(
            "div",
            { className: u.RecommendationList },
            l.createElement(
              "div",
              { className: u.Header },
              (0, p.Xx)("#Recommendations_Header"),
            ),
            l.createElement(P, null),
            l.createElement(
              "div",
              {
                className: (0, m.Z)(
                  u.List,
                  f.areResultsExpired() && u.Updating,
                ),
              },
              S,
            ),
          );
        }
      };
      M = (0, a.gn)([r.Pi], M);
      let w = class extends l.Component {
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
          (0, A.X)();
        }
        render() {
          return n.L7.logged_in
            ? l.createElement(
                "div",
                {
                  className: u.App,
                  style: { height: 3840 + 26 * f.getTagHeight() },
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
                      (0, p.Xx)("#HeaderTitle"),
                    ),
                    l.createElement(
                      "div",
                      { className: u.Body },
                      (0, p.Xx)("#HeaderBody1"),
                    ),
                  ),
                  l.createElement(
                    "div",
                    { className: u.BottomSection },
                    l.createElement(N, { accountID: n.L7.accountid }),
                    l.createElement("div", { className: u.VerticalBar }),
                    l.createElement(M, { width: this.state.width }),
                  ),
                ),
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
                    (0, p.Xx)("#LoginText"),
                  ),
                  l.createElement(
                    "div",
                    {
                      className: (0, m.Z)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: this.ShowLoginDialog,
                    },
                    l.createElement("span", null, (0, p.Xx)("#LoginButton")),
                  ),
                ),
              );
        }
      };
      (0, a.gn)([_.ak], w.prototype, "updateDimensions", null),
        (0, a.gn)([_.ak], w.prototype, "ShowLoginDialog", null),
        (w = (0, a.gn)([r.Pi], w));
      const k = w;
    },
  },
]);
