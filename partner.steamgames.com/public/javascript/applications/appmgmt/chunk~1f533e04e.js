/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7076],
  {
    27174: (e, t, a) => {
      a.d(t, {
        $N: () => d,
        D_: () => o,
        FR: () => l,
        Vy: () => c,
        W4: () => u,
        f7: () => s,
        h1: () => r,
        hu: () => m,
      });
      const n = [1, 3, 2],
        i = [1, 3],
        o = [5, 4],
        s = [7, 6],
        r = {
          capsule: { width: 800, height: 450, rgAcceptableTypes: i },
          spotlight: { width: 2108, height: 460, rgAcceptableTypes: i },
          localized_store_app_spotlight: {
            width: 1100,
            height: 240,
            rgAcceptableTypes: i,
          },
          localized_store_app_spotlight_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: i,
          },
          background: { width: 1920, height: 622, rgAcceptableTypes: i },
          hero: { width: 0, height: 0, rgAcceptableTypes: i },
          email_full: { width: 800, height: 300, rgAcceptableTypes: i },
          email_centered: { width: 644, height: 300, rgAcceptableTypes: i },
          broadcast_left: { width: 155, height: 337, rgAcceptableTypes: i },
          broadcast_right: { width: 155, height: 337, rgAcceptableTypes: i },
          sale_header: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: n,
          },
          sale_overlay: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: n,
          },
          localized_image_group: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: i,
          },
          sale_section_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: n,
          },
          sale_section_title: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: n,
          },
          link_capsule: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: i,
          },
          product_banner: { width: 1100, height: 160, rgAcceptableTypes: i },
          product_mobile_banner: {
            width: 500,
            height: 160,
            rgAcceptableTypes: i,
          },
          product_banner_override: {
            width: 1100,
            height: 160,
            rgAcceptableTypes: i,
          },
          product_mobile_banner_override: {
            width: 500,
            height: 160,
            rgAcceptableTypes: i,
          },
          schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: i },
          tab_bar_background: {
            width: 1500,
            height: 100,
            rgAcceptableTypes: i,
          },
          sale_logo: { width: 940, height: 460, rgAcceptableTypes: i },
          bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: n },
          bestofyear_banner_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: n,
          },
          localized_marketing_message: {
            width: 570,
            height: 600,
            rgAcceptableTypes: n,
          },
          localized_optin_banner: {
            width: 1e3,
            height: 150,
            rgAcceptableTypes: i,
          },
          localized_marketingmessage_webm: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [5],
          },
          localized_marketingmessage_mp4: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [4],
          },
          localized_subtitles: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [6, 7],
          },
          localized_marketingmessage_poster: {
            width: 528,
            height: 297,
            rgAcceptableTypes: [1, 3],
          },
          localized_marketingmessage_background: {
            width: 570,
            height: 600,
            rgAcceptableTypes: i,
          },
          spotlight_art: { width: 306, height: 260, rgAcceptableTypes: n },
          old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: n },
          marketingmessage_art: {
            width: 570,
            height: 600,
            rgAcceptableTypes: n,
          },
          marketingmessage_art_2: {
            width: 570,
            height: 600,
            rgAcceptableTypes: n,
          },
          takeover_art: { width: 1850, height: 450, rgAcceptableTypes: n },
          takeover_webm_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [4],
          },
          takeover_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: n,
          },
          takeover_webm_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [4],
          },
          takeunder_art: { width: 940, height: 150, rgAcceptableTypes: n },
          takeunder_mobile_art: {
            width: 500,
            height: 160,
            rgAcceptableTypes: n,
          },
        };
      function l(e, t, a) {
        const n = r[a];
        return (
          !!n && !n.bDisableEnforceDimensions && e === n.width && t === n.height
        );
      }
      function d(e, t, a) {
        const n = r[a];
        return (
          !!n &&
          (!!n.bDisableEnforceDimensions || !(e < n.width || t < n.height))
        );
      }
      function m(e) {
        const t = r[e];
        return (
          t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7)
        );
      }
      function c(e, t) {
        return t.filter((t) => u(e, t));
      }
      function u(e, t) {
        return r[t].rgAcceptableTypes.includes(e);
      }
    },
    51688: (e, t, a) => {
      a.d(t, {
        MZ: () => z,
        a4: () => R,
        ac: () => S,
        bS: () => F,
        HL: () => w,
        oL: () => B,
        J7: () => k,
        PJ: () => T,
        bH: () => M,
        B3: () => U,
        wP: () => H,
        dn: () => A,
        $Y: () => D,
        sq: () => G,
        RQ: () => b,
        _L: () => C,
        z5: () => L,
        Vv: () => x,
      });
      var n = a(85556),
        i = a(54842),
        o = a(83682),
        s = a(38071);
      const r = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(31),
        localized_broadcast_left_image: new Array(31),
        localized_broadcast_right_image: new Array(31),
        broadcast_whitelist: [],
      };
      var l = a(35427),
        d = a(19399),
        m = a(62698),
        c = a(93243),
        u = a(58670),
        h = a(64936),
        p = a(15690),
        _ = a(62210),
        g = a(31846),
        v = a(45651),
        I = a(80445),
        f = (a(80751), a(47427), a(16649), a(37563));
      var y = a(45284),
        E = (a(46984), a(16997));
      (0, n.gn)(
        [E.a],
        class {
          constructor(e, t) {
            (this.m_eventModel = e), (this.m_entry = t);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : this.m_eventModel.startTime +
                  this.m_entry.delta_from_event_start_seconds;
          }
        }.prototype,
        "GetEventStartTime",
        null,
      );
      new Set([9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35]);
      const A = 593110,
        G = 39049601,
        b = 41316928,
        C = 4,
        D = 20;
      var S;
      !(function (e) {
        (e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (e[(e.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (e[(e.k_EEventStateVisible = 2)] = "k_EEventStateVisible");
      })(S || (S = {}));
      const L = [
        {
          label: "#Sale_BrowserSortOption_NewAndTrending",
          flavor: "newandtrending",
          tooltip: "#Sale_BrowserSortOption_NewAndTrending_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_TopWishlisted",
          flavor: "topwishlisted",
          tooltip: "#Sale_BrowserSortOption_TopWishlisted_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_TrendingWishlisted",
          flavor: "trendingwishlisted",
          tooltip: "#Sale_BrowserSortOption_TrendingWishlisted_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_PopularUpcoming",
          flavor: "popularcomingsoon",
          tooltip: "#Sale_BrowserSortOption_PopularUpcoming_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_MostPlayedDemo",
          flavor: "mostplayeddemo",
          tooltip: "#Sale_BrowserSortOption_MostPlayedDemo_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_DailyActiveUserDemo",
          flavor: "dailyactiveuserdemo",
          tooltip: "#Sale_BrowserSortOption_DailyActiveUserDemo_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_PlayedNowDemo",
          flavor: "playednowdemo",
          tooltip: "#Sale_BrowserSortOption_PlayedNowDemo_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_RecentlyReleased",
          flavor: "recentlyreleased",
          tooltip: "#Sale_BrowserSortOption_RecentlyReleased_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_PopularPurchased",
          flavor: "popularpurchased",
          tooltip: "#Sale_BrowserSortOption_PopularPurchased_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_PopularPurchasedDiscounted",
          flavor: "popularpurchaseddiscounted",
          tooltip: "#Sale_BrowserSortOption_PopularPurchasedDiscounted_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_Discounted",
          flavor: "discounted",
          tooltip: "#Sale_BrowserSortOption_Discounted_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_Price",
          flavor: "price",
          tooltip: "#Sale_BrowserSortOption_Price_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_NewAndTrending",
          flavor: "contenthub_newandtrending",
          tooltip: "#Sale_BrowserSortOption_ContentHub_NewAndTrending_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_TopSellers",
          flavor: "contenthub_topsellers",
          tooltip: "#Sale_BrowserSortOption_ContentHub_TopSellers_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_Popular",
          flavor: "contenthub_popular",
          tooltip: "#Sale_BrowserSortOption_ContentHub_Popular_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_TopRated",
          flavor: "contenthub_toprated",
          tooltip: "#Sale_BrowserSortOption_ContentHub_TopRated_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_Upcoming",
          flavor: "contenthub_upcoming",
          tooltip: "#Sale_BrowserSortOption_ContentHub_Upcoming_ttip",
        },
        {
          label: "#Sale_BrowserSortOption_ContentHub_All",
          flavor: "contenthub_all",
          tooltip: "#Sale_BrowserSortOption_ContentHub_All_ttip",
        },
      ];
      var T, w, B, F, O, j;
      function U(e) {
        return Boolean(null == e ? void 0 : e.store_filter)
          ? JSON.stringify(e.store_filter)
          : void 0;
      }
      !(function (e) {
        (e[(e.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr"),
          (e[(e.k_EStoreFilterClauseTypeAnd = 1)] =
            "k_EStoreFilterClauseTypeAnd"),
          (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
            "k_EStoreFilterClauseTypeStoreTag"),
          (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
            "k_EStoreFilterClauseTypeFeatureTag"),
          (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
            "k_EStoreFilterClauseTypeLanguage"),
          (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
            "k_EStoreFilterClauseTypeContentDescriptor"),
          (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
            "k_EStoreFilterClauseTypePrice"),
          (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
            "k_EStoreFilterClauseTypeAppType");
      })(T || (T = {})),
        (function (e) {
          (e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (e[(e.k_ELanguage = 1)] = "k_ELanguage"),
            (e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (e[(e.k_EUserPreference = 3)] = "k_EUserPreference"),
            (e[(e.k_EPrice = 4)] = "k_EPrice"),
            (e[(e.k_EAppType = 5)] = "k_EAppType");
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (e[(e.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(F || (F = {})),
        (function (e) {
          (e.Steam = "Steam"),
            (e.Facebook = "Facebook"),
            (e.Twitter = "Twitter"),
            (e.Reddit = "Reddit");
        })(O || (O = {})),
        (function (e) {
          (e.Summary = "summary"),
            (e.SummaryLargeImage = "summary_large_image");
        })(j || (j = {}));
      const R = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(31),
        localized_label_image: new Array(31),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var k;
      !(function (e) {
        (e[(e.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (e[(e.k_EContentHub = 1)] = "k_EContentHub");
      })(k || (k = {}));
      const z = Object.assign(
          Object.assign(
            {
              localized_subtitle: new Array(31),
              localized_summary: new Array(31),
              localized_title_image: new Array(31),
              localized_capsule_image: new Array(31),
              bSaleEnabled: !1,
              sale_show_creator: !1,
              sale_sections: [],
              sale_browsemore_text: "",
              sale_browsemore_url: "",
              sale_browsemore_color: "",
              sale_browsemore_bgcolor: "",
              localized_sale_header: new Array(31),
              localized_sale_overlay: new Array(31),
              localized_sale_product_banner: new Array(31),
              localized_sale_product_mobile_banner: new Array(31),
              localized_sale_logo: new Array(31),
              sale_font: "",
              sale_background_color: "",
              sale_header_offset: 530,
              referenced_appids: [],
            },
            r,
          ),
          { bScheduleEnabled: !1, scheduleEntries: [] },
        ),
        x = "old_announce_",
        H = 80,
        P = [
          "workshop",
          "patchnotes",
          "contenthub",
          "skip_megaphone",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
          "enable_steam_china",
          "disable_steam_global",
          "adult_only_content",
        ];
      class M {
        constructor() {
          (this.GID = void 0),
            (this.AnnouncementGID = void 0),
            (this.forumTopicGID = void 0),
            (this.type = 1),
            (this.appid = 0),
            (this.name = new Map()),
            (this.description = new Map()),
            (this.timestamp_loc_updated = new Map()),
            (this.startTime = void 0),
            (this.endTime = void 0),
            (this.visibilityStartTime = void 0),
            (this.visibilityEndTime = void 0),
            (this.m_nBuildID = void 0),
            (this.m_strBuildBranch = void 0),
            (this.postTime = void 0),
            (this.visibility_state = S.k_EEventStateUnpublished),
            (this.broadcaster = void 0),
            (this.jsondata = z),
            (this.nCommentCount = 0),
            (this.nVotesUp = 0),
            (this.nVotesDown = 0),
            (this.bOldAnnouncement = !1),
            (this.announcementClanSteamID = void 0),
            (this.loadedAllLanguages = !1),
            (this.bLoaded = !1),
            (this.deleteInProgress = !1),
            (this.vecTags = new Array()),
            (this.last_update_steamid = void 0),
            (this.rtime32_last_modified = void 0),
            (this.rtime32_last_solr_search_col_updated = void 0),
            (this.rtime32_last_local_modification = void 0),
            (this.rtime32_moderator_reviewed = void 0),
            (this.video_preview_type = void 0),
            (this.video_preview_id = void 0),
            (this.m_overrideCurrentDay = void 0),
            (0, i.rC)(this);
        }
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(e) {
          let t = new M(),
            a = JSON.parse(e);
          return (
            Object.assign(t, a),
            (t.name = new Map(a.name)),
            (t.description = new Map(a.description)),
            (t.vecTags = new Array(a.vecTags)),
            (t.clanSteamID = new l.K(a.clanSteamID)),
            (0, _.X)(
              t.clanSteamID && t.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
            ),
            a.broadcaster &&
              ((t.broadcaster = new l.K(a.broadcaster)),
              (0, _.X)(
                t.broadcaster && t.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  t.broadcaster.ConvertTo64BitString(),
              )),
            t
          );
        }
        toJSON(e) {
          let t = new Object();
          return (
            Object.assign(t, this),
            (t.name = Array.from(this.name)),
            (t.description = Array.from(this.description)),
            (t.tags = Array.from(this.vecTags)),
            (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
            t
          );
        }
        clone(e = !1) {
          let t = new M();
          return (
            (t.GID = this.GID),
            (t.AnnouncementGID = this.AnnouncementGID),
            (t.clanSteamID = this.clanSteamID),
            (t.bOldAnnouncement = this.bOldAnnouncement),
            (t.nCommentCount = this.nCommentCount),
            (t.nVotesUp = this.nVotesUp),
            (t.nVotesDown = this.nVotesDown),
            (t.forumTopicGID = this.forumTopicGID),
            (t.comment_type = this.comment_type),
            (t.gidfeature = this.gidfeature),
            (t.gidfeature2 = this.gidfeature2),
            (t.featured_app_tagid = this.featured_app_tagid),
            (t.creator_steamid = this.creator_steamid),
            (t.last_update_steamid = this.last_update_steamid),
            (t.rtime32_last_modified = this.rtime32_last_modified),
            (t.rtime32_last_solr_search_col_updated =
              this.rtime32_last_solr_search_col_updated),
            (t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
            (t.type = this.type),
            (t.appid = this.appid),
            (t.name = new Map()),
            this.name.forEach((e, a) => {
              t.name.set(a, e);
            }),
            (t.description = new Map()),
            this.description.forEach((e, a) => {
              t.description.set(a, e);
            }),
            (t.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((e, a) => {
              t.timestamp_loc_updated.set(a, e);
            }),
            (t.startTime = this.startTime),
            (t.endTime = this.endTime),
            (t.visibilityStartTime = this.visibilityStartTime),
            (t.visibilityEndTime = this.visibilityEndTime),
            (t.postTime = this.postTime),
            (t.visibility_state = this.visibility_state),
            (t.loadedAllLanguages = this.loadedAllLanguages),
            (t.bLoaded = this.bLoaded),
            (t.broadcaster = this.broadcaster
              ? new l.K(this.broadcaster.ConvertTo64BitString())
              : null),
            (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (t.vecTags = new Array()),
            e
              ? ((t.m_nBuildID = this.m_nBuildID),
                (t.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((e) => t.vecTags.push(e)))
              : this.vecTags.forEach((e) => {
                  P.includes(e) && t.vecTags.push(e);
                }),
            t
          );
        }
        GetLastReferencedSaleDayFromCapsules(e, t) {
          let a = t;
          return (
            null == e ||
              e.forEach((e) => {
                void 0 !== e.visibility_index &&
                  (a =
                    void 0 === a
                      ? e.visibility_index
                      : Math.max(a, e.visibility_index));
              }),
            a
          );
        }
        GetLastReferencedSaleDay() {
          var e;
          let t;
          for (const a of this.GetSaleSections())
            if ("tabs" === a.section_type) {
              if (
                (null === (e = a.tabs) || void 0 === e ? void 0 : e.length) > 0
              )
                for (const e of a.tabs)
                  t = this.GetLastReferencedSaleDayFromCapsules(e.capsules, t);
            } else t = this.GetLastReferencedSaleDayFromCapsules(a.capsules, t);
          return (
            this.jsondata.sale_num_headers > 1 &&
              (null == t || t < this.jsondata.sale_num_headers) &&
              (t = this.jsondata.sale_num_headers),
            t
          );
        }
        GetDayIndexFromEventStart() {
          let e = 0;
          const t = h.JW.GetTimeNowWithOverride();
          void 0 !== this.startTime &&
            t >= this.startTime &&
            (e = Math.floor((t - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (e = this.m_overrideCurrentDay);
          const a = this.GetLastReferencedSaleDay() || 0;
          return Math.min(e, a);
        }
        GetNameWithFallback(e) {
          const t = g.LJ.GetELanguageFallback(e);
          return this.name.get(e) || this.name.get(t);
        }
        GetGameTitle(e) {
          var t;
          return null === (t = p.Z.Get().GetApp(this.appid)) || void 0 === t
            ? void 0
            : t.GetName();
        }
        BInRealmGlobal() {
          return !this.BHasTag("disable_steam_global");
        }
        BInRealmChina() {
          return this.BHasTag("enable_steam_china");
        }
        BIsLanguageValidForRealms(e) {
          return (
            !(
              !this.BInRealmGlobal() ||
              !g.LJ.IsELanguageValidInRealm(e, s.IN.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !g.LJ.IsELanguageValidInRealm(e, s.IN.k_ESteamRealmChina)
            )
          );
        }
        GetImgArray(e) {
          let t = [];
          if (
            ("background" === e && (t = this.jsondata.localized_title_image),
            "capsule" === e)
          )
            t = this.jsondata.localized_capsule_image;
          else if ("spotlight" === e)
            t = this.jsondata.localized_spotlight_image;
          else if ("email_full" === e || "email_centered" === e)
            t = this.jsondata.email_setting
              ? this.jsondata.email_setting.sections[0].localized_image
              : [];
          else if ("broadcast_left" === e)
            t = this.jsondata.localized_broadcast_left_image;
          else if ("broadcast_right" === e)
            t = this.jsondata.localized_broadcast_right_image;
          else if ("sale_header" === e)
            if (this.jsondata.sale_num_headers > 1) {
              const e = Math.min(
                this.jsondata.sale_num_headers - 1,
                this.GetDayIndexFromEventStart(),
              );
              t = this.jsondata.localized_per_day_sales_header[e];
            } else t = this.jsondata.localized_sale_header;
          else
            "sale_logo" === e
              ? (t = this.jsondata.localized_sale_logo)
              : "sale_overlay" === e
              ? (t = this.jsondata.localized_sale_overlay)
              : "localized_image_group" === e ||
                "link_capsule" === e ||
                "product_banner_override" === e ||
                "product_mobile_banner_override" === e ||
                "sale_section_title" === e ||
                "schedule_track_art" === e
              ? (t = m.U8.GetLocalizedImageGroupForEditAsImgArray(
                  this.clanSteamID,
                ))
              : "product_banner" === e
              ? (t = this.jsondata.localized_sale_product_banner)
              : "product_mobile_banner" === e
              ? (t = this.jsondata.localized_sale_product_mobile_banner)
              : "bestofyear_banner" === e
              ? (t = this.jsondata.localized_bestofyear_banner)
              : "bestofyear_banner_mobile" === e
              ? (t = this.jsondata.localized_bestofyear_banner_mobile)
              : "localized_store_app_spotlight" === e
              ? (t = this.jsondata.localized_store_app_spotlight)
              : "localized_store_app_spotlight_mobile" === e &&
                (t = this.jsondata.localized_store_app_spotlight_mobile);
          return t;
        }
        GetImageURL(e, t = 0, a = m.FN.full) {
          const n = this.GetImgArray(e),
            i = n && n.length > t && null != n[t];
          return i && n[t].startsWith("http")
            ? n[t]
            : i
            ? m.aN.GenerateArtworkURLFromHashAndExtensions(
                this.clanSteamID,
                n[t],
                a,
              )
            : void 0;
        }
        GetImageHash(e, t = 0) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t]
            ? a[t].substr(0, a[t].length - 4)
            : null;
        }
        BHasSomeImage(e) {
          let t = this.GetImgArray(e);
          return t && t.some((e) => null != e && e.length > 0);
        }
        BHasImage(e, t) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t];
        }
        BHasAnnouncementGID() {
          return (
            null !== this.AnnouncementGID &&
            void 0 !== this.AnnouncementGID &&
            this.AnnouncementGID.length > 1
          );
        }
        GetAnnouncementGID() {
          return this.AnnouncementGID;
        }
        BHasForumTopicGID() {
          return (
            null !== this.forumTopicGID &&
            void 0 !== this.forumTopicGID &&
            this.forumTopicGID.length > 1
          );
        }
        GetForumTopicURL() {
          if (!this.BHasForumTopicGID()) return "";
          if (this.appid)
            return (
              f.De.COMMUNITY_BASE_URL +
              "app/" +
              this.appid +
              "/eventcomments/" +
              this.forumTopicGID
            );
          {
            const e = c.sV.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && e.vanity_url)
              return (
                f.De.COMMUNITY_BASE_URL +
                "groups/" +
                e.vanity_url +
                "/eventcomments/" +
                this.forumTopicGID
              );
          }
          return (
            f.De.COMMUNITY_BASE_URL +
            "gid/" +
            this.clanSteamID.ConvertTo64BitString() +
            "/eventcomments/" +
            this.forumTopicGID
          );
        }
        BIsEventInFuture() {
          return h.JW.GetTimeNowWithOverride() < this.startTime;
        }
        BHasEventEnded() {
          return this.endTime < h.JW.GetTimeNowWithOverride();
        }
        UpdateVoteCount(e, t) {
          "up" == e
            ? (this.nVotesUp = (0, v.Lh)(
                this.nVotesUp + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ))
            : "down" == e &&
              (this.nVotesDown = (0, v.Lh)(
                this.nVotesDown + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ));
        }
        GetImageFromBeginningOfDescription(e, t) {
          let a = this.GetDescriptionWithFallback(e);
          if (a) {
            let e = a.indexOf("[img]");
            if (-1 !== e && e < t) {
              e += 5;
              let t = a.indexOf("[/img]", e);
              if (-1 != t) {
                let n = a.substring(e, t).trim();
                if (0 != n.length) return (0, d.pd)(n);
              }
            }
          }
          return null;
        }
        GetImageURLWithFallback(e, t, a = m.FN.full) {
          var n, i;
          const o = this.GetImageURL(e, t, a);
          if (o && o.trim().length > 0) return o;
          const s = g.LJ.GetELanguageFallback(t);
          if (t != s) {
            const t = this.GetImageURL(e, s, a);
            if (t && t.trim().length > 0) return t;
          }
          const r = c.sV.GetClanInfoByClanAccountID(
            this.clanSteamID.GetAccountID(),
          );
          if ("capsule" == e) {
            let e = this.GetImageFromBeginningOfDescription(
              t,
              Number.MAX_VALUE,
            );
            if (e) return e;
            let a = this.appid;
            if (!a && r && ((r.is_creator_home && !r.is_ogg) || r.is_curator)) {
              if (
                !(null ===
                  (i =
                    null === (n = this.jsondata) || void 0 === n
                      ? void 0
                      : n.referenced_appids) || void 0 === i
                  ? void 0
                  : i.length)
              )
                return r.avatar_full_url;
              a = this.jsondata.referenced_appids[0];
            }
            const o = p.Z.Get().GetApp(a);
            return o
              ? o.GetAssets().GetMainCapsuleURL()
              : f.De.MEDIA_CDN_URL + "steam/apps/" + a + "/header.jpg";
          }
          return "background" == e &&
            r &&
            ((r.is_creator_home && !r.is_ogg) || r.is_curator)
            ? r.creator_page_bg_url
            : this.GetFallbackArtworkScreenshot();
        }
        GetFallbackArtworkScreenshot() {
          var e;
          if (this.appid) {
            p.Z.Get().QueueAppRequest(this.appid, { include_screenshots: !0 });
            const t = p.Z.Get().GetApp(this.appid);
            let a = Number(
              this.bOldAnnouncement
                ? this.AnnouncementGID
                : null == this.GID
                ? 0
                : this.GID,
            );
            return (null == t
              ? void 0
              : t.GetOnlyAllAgesSafeScreenshots().length) > 1
              ? ((a %= t.GetOnlyAllAgesSafeScreenshots().length),
                t.GetOnlyAllAgesSafeScreenshots()[a])
              : (null ===
                  (e =
                    null == t
                      ? void 0
                      : t.GetBothAllAgesSafeAndMatureScreenshots()) ||
                void 0 === e
                  ? void 0
                  : e.length) > 0
              ? ((a %= t.GetBothAllAgesSafeAndMatureScreenshots().length),
                t.GetBothAllAgesSafeAndMatureScreenshots()[a])
              : "";
          }
          if (this.clanSteamID) {
            const e = c.sV.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && ((e.is_creator_home && !e.is_ogg) || e.is_curator))
              return e.avatar_full_url;
          }
          return "";
        }
        BImageNeedScreenshotFallback(e, t) {
          let a = this.GetImageURL(e, t);
          if (!a || 0 == a.length) {
            const n = g.LJ.GetELanguageFallback(t);
            t != n && (a = this.GetImageURL(e, n));
          }
          return !a || 0 == a.length;
        }
        GetImageForSizeAsArrayWithFallback(e, t, a, n) {
          let i = new Array();
          this.BImageNeedScreenshotFallback(e, t) ||
            (i.push(this.GetImageURLWithFallback(e, t, a)),
            a != m.FN.full &&
              i.push(this.GetImageURLWithFallback(e, t, m.FN.full)));
          const o = this.GetFallbackArtworkScreenshot();
          return o && !n && i.push(o), i;
        }
        GetDescriptionWithFallback(e) {
          const t = g.LJ.GetELanguageFallback(e);
          return this.description.get(e) || this.description.get(t);
        }
        BIsImageSafeForAllAges(e, t) {
          var a;
          const n = c.sV.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            ),
            i = g.LJ.GetELanguageFallback(t);
          return (
            null != this.GetImageURL(e, t) ||
            (t != i && null != this.GetImageURL(e, i)) ||
            (this.appid &&
              (null === (a = p.Z.Get().GetApp(this.appid)) || void 0 === a
                ? void 0
                : a.BHasAgeSafeScreenshots())) ||
            (!this.appid &&
              n &&
              ((n.is_creator_home && !n.is_ogg) || n.is_curator))
          );
        }
        BIsVisibleEvent() {
          let e = Math.floor(h.JW.GetTimeNowWithOverride());
          return (
            this.visibility_state == S.k_EEventStateVisible &&
            e > this.visibilityStartTime &&
            (this.visibilityEndTime < 10 || e < this.visibilityEndTime)
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == S.k_EEventStateStaged;
        }
        GetStartTimeAndDateUnixSeconds() {
          return this.startTime;
        }
        GetEndTimeAndDateUnixSeconds() {
          return this.endTime;
        }
        GetPostTimeAndDateUnixSeconds() {
          return this.postTime;
        }
        GetVisibilityStartTimeAndDateUnixSeconds() {
          return this.visibilityStartTime;
        }
        BIsEventActionEnabled() {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > h.JW.GetTimeNowWithOverride() ||
              (1575396e3 == this.jsondata.action_end_time &&
                1606845600 > h.JW.GetTimeNowWithOverride()))
          );
        }
        BHasSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return !1;
          let t = this.jsondata.localized_subtitle[e];
          return null != t && "" != t;
        }
        GetSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return "";
          let t = this.jsondata.localized_subtitle[e];
          return t || "";
        }
        GetSubTitleWithLanguageFallback(e) {
          return this.jsondata
            ? g.LZ.GetWithFallback(this.jsondata.localized_subtitle, e)
            : "";
        }
        GetSubTitleWithSummaryFallback(e) {
          var t;
          return (
            g.LZ.GetWithFallback(
              null === (t = this.jsondata) || void 0 === t
                ? void 0
                : t.localized_subtitle,
              e,
            ) || M.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
          );
        }
        GetSummaryWithFallback(e, t) {
          var a;
          return (
            g.LZ.GetWithFallback(
              null === (a = this.jsondata) || void 0 === a
                ? void 0
                : a.localized_summary,
              e,
            ) ||
            M.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
          );
        }
        GetSummary(e) {
          var t;
          return g.LZ.Get(
            null === (t = this.jsondata) || void 0 === t
              ? void 0
              : t.localized_summary,
            e,
          );
        }
        BHasSummary(e) {
          return Boolean(this.GetSummary(e));
        }
        static GenerateSummaryFromText(e, t) {
          return e && 0 != e.trim().length
            ? ((e = (0, o.p8)(e, [
                "img",
                "h1",
                "h2",
                "h3",
                "spoiler",
                "table",
                "previewyoutube",
                "looping_media",
                "roomeffect",
                "sticker",
              ])),
              (e = (0, o.NO)(e)),
              (e = (0, y.W5)(e)),
              (0, y.oU)(e, t || 180))
            : "";
        }
        BHasTag(e) {
          return -1 != this.vecTags.indexOf(e);
        }
        BHasTagStartingWith(e) {
          return this.vecTags.some((t) => t.startsWith(e));
        }
        BIsOGGEvent() {
          return Boolean(this.appid) && this.appid > 0;
        }
        BShowLibrarySpotlight() {
          return Boolean(this.jsondata.library_spotlight);
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(e) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const t = h.JW.GetTimeNowWithOverride(),
            a = this.endTime ? this.endTime : t + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (e || (this.startTime - 600 <= t && t < a))
          );
        }
        BHasBroadcastForceBanner() {
          return this.jsondata.broadcast_force_banner;
        }
        BSaleShowBroadcastAtTopOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "broadcast" == e.section_type,
            )
          );
        }
        BSaleShowCuratorRecommendationAtBottomOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "curator_recommendation" == e.section_type,
            )
          );
        }
        GetBroadcastChatVisibility() {
          return this.jsondata.broadcastChatSetting || "hide";
        }
        GetBroadcastTitle(e) {
          var t;
          return (
            g.LZ.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
            (0, g.Xx)(
              null !== (t = this.jsondata.default_broadcast_title) &&
                void 0 !== t
                ? t
                : "#Broadcast_default_title_dev",
            )
          );
        }
        GetBroadcastWhitelist() {
          return this.jsondata.broadcast_whitelist;
        }
        GetBroadcastWhitelistAsSteamIDs() {
          return this.jsondata.broadcast_whitelist.map((e) =>
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        BIsBroadcastAccountIDWhiteListed(e) {
          return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
        }
        BHasSaleEnabled() {
          return this.jsondata.bSaleEnabled;
        }
        BHasSaleVanity() {
          return (
            this.jsondata.bSaleEnabled && Boolean(this.jsondata.sale_vanity_id)
          );
        }
        GetSaleVanity() {
          return this.jsondata.sale_vanity_id;
        }
        GetSaleURL() {
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              f.De.STORE_BASE_URL +
              "newshub/" +
              (this.appid
                ? "app/" + this.appid
                : "group/" + this.clanSteamID.GetAccountID()) +
              "/view/" +
              this.GID
            );
          if (this.BUsesContentHubForItemSource()) {
            const e = this.jsondata.source_content_hub;
            return e
              ? "string" == typeof e
                ? f.De.STORE_BASE_URL + "category/" + e
                : "category" == e.type
                ? f.De.STORE_BASE_URL + "category/" + e.category
                : "tags" == e.type
                ? f.De.STORE_BASE_URL +
                  "tags/" +
                  ((0, g.CE)() || "en") +
                  "/" +
                  e.tagid
                : "freetoplay" == e.type
                ? f.De.STORE_BASE_URL + "genre/Free%20to%20Play/"
                : "earlyaccess" == e.type
                ? f.De.STORE_BASE_URL + "genre/Early%20Access/"
                : f.De.STATS_BASE_URL + e.type
              : f.De.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          if (!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath) {
            if (u.bq.BHasCreatorHomeLoaded(this.clanSteamID)) {
              return (
                u.bq
                  .GetCreatorHome(this.clanSteamID)
                  .GetCreatorHomeURL("developer") +
                "sale/" +
                this.jsondata.sale_vanity_id
              );
            }
            return (
              f.De.STORE_BASE_URL +
              "curator/" +
              this.clanSteamID.GetAccountID() +
              "/sale/" +
              this.jsondata.sale_vanity_id
            );
          }
          return f.De.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections;
        }
        GetSaleSectionByID(e) {
          var t;
          return null === (t = this.jsondata.sale_sections) || void 0 === t
            ? void 0
            : t.find((t) => t.unique_id == e);
        }
        GetSaleSectionsByType(e) {
          var t;
          return null === (t = this.jsondata.sale_sections) || void 0 === t
            ? void 0
            : t.filter((t) => t.section_type == e);
        }
        GetSaleSectionCount() {
          return this.jsondata.sale_sections.length;
        }
        static AccumulateCapsuleListIDs(e, t, a, n) {
          e &&
            e.forEach((e) => {
              if (e) {
                t.has(e.type) && ((n && !n(e.id)) || a.add(e.id));
              }
            });
        }
        GetSaleItemOfType(e, t) {
          var a;
          if (!this.jsondata.sale_sections) return new Set();
          const n = new Set(e),
            i = new Set();
          if (
            ((0, _.X)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize && "dev" == f.De.WEB_UNIVERSE)
          )
            throw new Error(
              "GetSaleOfItemType called on a truncated jsondata.",
            );
          return (
            null === (a = this.jsondata.tagged_items) ||
              void 0 === a ||
              a.forEach((e) => {
                M.AccumulateCapsuleListIDs([e.capsule], n, i, t);
              }),
            this.jsondata.sale_sections.forEach((e) => {
              if ("items" === e.section_type)
                M.AccumulateCapsuleListIDs(e.capsules, n, i, t);
              else if ("tabs" === e.section_type && e.tabs)
                for (const a of e.tabs)
                  M.AccumulateCapsuleListIDs(a.capsules, n, i, t);
            }),
            i
          );
        }
        GetSaleItemCountOfType(e, t) {
          return this.GetSaleItemOfType(e, t).size;
        }
        GetSaleFeaturedAppsCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemosCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundlesCount(e) {
          return this.GetSaleItemCountOfType(["bundle"], e);
        }
        GetSaleFeaturedPackagesCount(e) {
          return this.GetSaleItemCountOfType(["sub"], e);
        }
        GetSaleFeaturedApps(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemos(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundles(e) {
          return this.GetSaleItemOfType(["bundle"], e);
        }
        GetSaleFeaturedPackages(e) {
          return this.GetSaleItemOfType(["sub"], e);
        }
        GetTaggedItems() {
          return this.jsondata.tagged_items || [];
        }
        BHasScheduleEnabled() {
          return this.jsondata.bScheduleEnabled;
        }
        GetEventType() {
          return this.type;
        }
        GetEventTypeAsString() {
          return (0, I.Sq)(this.type);
        }
        GetCategoryAsString() {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, g.Xx)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
            ? (0, g.Xx)("#PartnerEvent_SteamAwardVoteRequest")
            : this.BHasTag("steam_game_festival_artist_statement")
            ? (0, g.Xx)("#PartnerEvent_SteamGameFestival_ArtistState")
            : this.BHasTag("steam_game_festival_office_hour")
            ? (0, g.Xx)("#PartnerEvent_SteamGameFestival_OfficeHour")
            : this.BHasTag("steam_game_festival_broadcast") ||
              (this.BHasTagStartingWith("sale_nextfest_") && 11 == this.type)
            ? (0, g.Xx)("#PartnerEvent_SteamGameFestival_Broadcast")
            : this.GetEventTypeAsString();
        }
        GetAllTags() {
          return this.vecTags;
        }
        BMatchesAllTags(e) {
          let t = !0;
          return (
            null == e ||
              e.forEach((e) => {
                this.vecTags.includes(e) || (t = !1);
              }),
            t
          );
        }
        BAllowedSteamStoreSpotlight() {
          return Boolean(this.jsondata.store_spotlight);
        }
        BHasLibaryHomeSpotlight() {
          return Boolean(this.jsondata.library_home_spotlight);
        }
        BHasSaleProductBanners() {
          return (
            this.jsondata.bSaleEnabled &&
            (this.BHasSomeImage("product_banner") ||
              this.BHasSomeImage("product_banner_override"))
          );
        }
        GetSteamAwardCategory() {
          return this.jsondata.steam_award_category_suggestion;
        }
        GetSteamAwardNomineeCategories() {
          return this.jsondata.steam_award_category_voteids;
        }
        BIsLockedToGameOwners() {
          var e;
          return Boolean(
            null === (e = this.jsondata.ownership_requirement_info) ||
              void 0 === e
              ? void 0
              : e.bLockedToAppOwners,
          );
        }
        GetRequiredAppIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
            : [];
        }
        GetRequiredPackageIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
            : [];
        }
        BUseSubscriptionLayout() {
          return !!this.jsondata.sale_use_subscription_layout;
        }
        BIsLockedToPartnerAppRights() {
          var e;
          return Boolean(
            null === (e = this.jsondata.app_right_requirement_info) ||
              void 0 === e
              ? void 0
              : e.bLockedToPartnerAppRights,
          );
        }
        GetRequiredPartnerAppRights() {
          return this.jsondata.app_right_requirement_info;
        }
        GetValveAccessLog() {
          return Array.isArray(this.jsondata.valve_access_log)
            ? this.jsondata.valve_access_log
            : [];
        }
        BUsesContentHubForItemSource() {
          return (
            this.jsondata.item_source_type === k.k_EContentHub &&
            Boolean(this.jsondata.source_content_hub)
          );
        }
        GetContentHubType() {
          return this.BUsesContentHubForItemSource()
            ? null == this.jsondata.source_content_hub
              ? "games"
              : "string" == typeof this.jsondata.source_content_hub
              ? "category"
              : this.jsondata.source_content_hub.type
            : void 0;
        }
        GetContentHubCategory() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
            ? this.jsondata.source_content_hub
            : this.jsondata.source_content_hub.category;
        }
        GetContentHubTag() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
            ? 0
            : this.jsondata.source_content_hub.tagid;
        }
        GetContentHub() {
          return "string" == typeof this.jsondata.source_content_hub
            ? { type: "category", category: this.jsondata.source_content_hub }
            : this.jsondata.source_content_hub;
        }
        BContentHubDiscountedOnly() {
          return this.jsondata.content_hub_discounted_only;
        }
      }
      (0, n.gn)([i.LO], M.prototype, "GID", void 0),
        (0, n.gn)([i.LO], M.prototype, "AnnouncementGID", void 0),
        (0, n.gn)([i.LO], M.prototype, "forumTopicGID", void 0),
        (0, n.gn)([i.LO], M.prototype, "type", void 0),
        (0, n.gn)([i.LO], M.prototype, "appid", void 0),
        (0, n.gn)([i.LO], M.prototype, "name", void 0),
        (0, n.gn)([i.LO], M.prototype, "description", void 0),
        (0, n.gn)([i.LO], M.prototype, "timestamp_loc_updated", void 0),
        (0, n.gn)([i.LO], M.prototype, "startTime", void 0),
        (0, n.gn)([i.LO], M.prototype, "endTime", void 0),
        (0, n.gn)([i.LO], M.prototype, "visibilityStartTime", void 0),
        (0, n.gn)([i.LO], M.prototype, "visibilityEndTime", void 0),
        (0, n.gn)([i.LO], M.prototype, "m_nBuildID", void 0),
        (0, n.gn)([i.LO], M.prototype, "m_strBuildBranch", void 0),
        (0, n.gn)([i.LO], M.prototype, "postTime", void 0),
        (0, n.gn)([i.LO], M.prototype, "visibility_state", void 0),
        (0, n.gn)([i.LO], M.prototype, "broadcaster", void 0),
        (0, n.gn)([i.LO], M.prototype, "jsondata", void 0),
        (0, n.gn)([i.LO], M.prototype, "nCommentCount", void 0),
        (0, n.gn)([i.LO], M.prototype, "nVotesUp", void 0),
        (0, n.gn)([i.LO], M.prototype, "nVotesDown", void 0),
        (0, n.gn)([i.LO], M.prototype, "bOldAnnouncement", void 0),
        (0, n.gn)([i.LO], M.prototype, "announcementClanSteamID", void 0),
        (0, n.gn)([i.LO], M.prototype, "loadedAllLanguages", void 0),
        (0, n.gn)([i.LO], M.prototype, "bLoaded", void 0),
        (0, n.gn)([i.LO], M.prototype, "deleteInProgress", void 0),
        (0, n.gn)([i.LO], M.prototype, "vecTags", void 0),
        (0, n.gn)([i.LO], M.prototype, "last_update_steamid", void 0),
        (0, n.gn)([i.LO], M.prototype, "rtime32_last_modified", void 0),
        (0, n.gn)(
          [i.LO],
          M.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, n.gn)(
          [i.LO],
          M.prototype,
          "rtime32_last_local_modification",
          void 0,
        ),
        (0, n.gn)([i.LO], M.prototype, "rtime32_moderator_reviewed", void 0),
        (0, n.gn)([i.LO], M.prototype, "video_preview_type", void 0),
        (0, n.gn)([i.LO], M.prototype, "video_preview_id", void 0),
        (0, n.gn)([i.LO], M.prototype, "m_overrideCurrentDay", void 0);
    },
    37593: (e, t, a) => {
      a.d(t, { S: () => v });
      var n = a(85556),
        i = a(38071),
        o = a(80751),
        s = a.n(o),
        r = a(54842),
        l = a(16649),
        d = a(16997),
        m = a(45492),
        c = a(50423),
        u = a(31846),
        h = a(37563),
        p = a(62698),
        _ = a(12055),
        g = a(20029);
      class v {
        constructor(e) {
          (this.m_filesToUpload = r.LO.array()),
            (this.m_filesCompleted = []),
            (this.m_allCancelTokens = new Array()),
            (this.m_lastError = void 0),
            (this.m_fnSetImageURL = null),
            (0, r.rC)(this),
            (this.m_clanSteamID = e);
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        SetImageAllUrlFunction(e) {
          this.m_fnSetImageURL = e;
        }
        AddImage(e, t = 0, a, i) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = (0, g.Z)(e.name, t);
            return this.AddImageForLanguage(e, n, a, i);
          });
        }
        AddImageForLanguage(e, t, a, i) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = !1;
            return (
              yield new Promise((o) => {
                const s = new FileReader();
                (s.onload = () => {
                  const r = e.name.split(".").pop().toLowerCase();
                  let l = null;
                  !h.L7.is_support || ("webm" != r && "mp4" != r)
                    ? ((l = new Image()),
                      (l.onload = () => {
                        const s = new _.Mr(e, t, l, a, i);
                        (this.m_filesToUpload = [...this.m_filesToUpload, s]),
                          (n = !0),
                          o();
                      }))
                    : ((l = document.createElement("video")),
                      (l.onloadeddata = () => {
                        const s = new _.Mr(e, t, l, a, i);
                        (this.m_filesToUpload = [...this.m_filesToUpload, s]),
                          (n = !0),
                          o();
                      })),
                    (l.onerror = (e) => {
                      console.error(
                        "CClanImageUploader failed to load the image, details",
                        e,
                      ),
                        (n = !1),
                        o();
                    }),
                    (l.src = s.result.toString());
                }),
                  s.readAsDataURL(e);
              }),
              n
            );
          });
        }
        AddExistingClanImage(e, t = 0, a, i) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = p.aN.GetHashAndExt(e),
              o = p.aN.GenerateEditableArtworkURLFromHashAndExtension(
                this.m_clanSteamID,
                n,
              ),
              r = yield s()({ url: o, method: "GET", responseType: "blob" }),
              l = (0, c.Lh)(r.data, e.file_name);
            return yield this.AddImage(l, t, a, i);
          });
        }
        DeleteUploadImageByIndex(e) {
          this.m_filesToUpload.splice(e, 1),
            (this.m_filesToUpload = [...this.m_filesToUpload]);
        }
        DeleteUploadImage(e) {
          let t = this.m_filesToUpload.findIndex(
            (t) => e.file == t.file && e.uploadTime == t.uploadTime,
          );
          t >= 0 && this.DeleteUploadImageByIndex(t);
        }
        ClearImages() {
          this.m_filesToUpload = r.LO.array();
        }
        GetFilesUploaded() {
          return this.m_filesCompleted;
        }
        GetLastErrorFile() {
          return this.m_lastError;
        }
        GetCompletedFiles() {
          return this.m_filesCompleted.length;
        }
        GetTotalFiles() {
          return this.m_filesToUpload.length;
        }
        GetFilesToUpload() {
          return this.m_filesToUpload.map((e) => e.file);
        }
        GetUploadImages() {
          return this.m_filesToUpload;
        }
        BHasError() {
          return null != this.m_lastError;
        }
        BAllDone() {
          return (
            this.m_filesCompleted.length > 0 &&
            this.m_filesCompleted.length == this.m_filesToUpload.length
          );
        }
        BIsFileCompleted(e) {
          return -1 != this.m_filesCompleted.indexOf(e);
        }
        UploadAllImages(e, t, a, i, o) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = {};
            for (let e of this.m_filesToUpload)
              if (!this.BIsFileCompleted(e.file)) {
                const t = e.IsValidAssetType(a, i, o);
                if (t.error || t.needsCrop)
                  t.error &&
                    (this.m_lastError = {
                      file: e.file,
                      message: t.error,
                      status: 401,
                    });
                else {
                  e.status = "uploading";
                  n[`${e.uploadTime}/${e.file.name}`] = this.UploadFile({
                    uploadFile: e.file,
                    filename: e.file.name,
                    artworkType: t.match,
                    resizeRequests: e.GetResizeDimension(),
                    primaryLocalizeImage: e.localizedImageGroupPrimaryImage,
                    lang: e.language,
                    width: e.width,
                    height: e.height,
                  });
                }
              }
            const s = yield (0, m.bX)(n);
            return (
              Object.keys(s).forEach((a) => {
                const n = s[a],
                  i = this.m_filesToUpload.find(
                    (e) => `${e.uploadTime}/${e.file.name}` === a,
                  );
                if (i)
                  if (1 !== n.success)
                    (i.status = "failed"), (i.message = n.message);
                  else if (((i.status = "success"), this.m_fnSetImageURL))
                    if (n.origimagehash) {
                      const a = (0, g.C)(n.language, t, e);
                      p.U8.AddLocalizeImageUploaded(n.origimagehash, a);
                    } else {
                      const a = p.U8.GetClanImageByImageHash(
                        this.m_clanSteamID,
                        n.image_hash,
                      );
                      if (a) {
                        const n = (0, g.C)(i.language, t, e);
                        this.m_fnSetImageURL(i.type, a, n);
                      }
                    }
              }),
              s
            );
          });
        }
        CancelAllUploads() {
          for (let e of this.m_allCancelTokens)
            e.cancel((0, u.Xx)("#ImageUpload_CancelRequest"));
          this.m_allCancelTokens = new Array();
        }
        RetryAllFailedUploads() {
          this.CancelAllUploads(),
            this.UploadAllImages([i.IN.k_ESteamRealmGlobal], 0);
        }
        handleUploadRefresh(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield p.U8.LoadClanImages(this.m_clanSteamID, !0, e);
          });
        }
        UploadFile(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const {
              uploadFile: t,
              filename: a,
              artworkType: n,
              resizeRequests: i,
              primaryLocalizeImage: o,
              lang: r,
              width: d,
              height: m,
            } = e;
            let c = null;
            const u = new FormData();
            u.append("clanimage", t, a),
              u.append("sessionid", h.De.SESSIONID),
              n && u.append("arttype", n),
              i &&
                i.length > 0 &&
                u.append(
                  "resize",
                  i.map((e) => e.width + "x" + e.height).join(","),
                );
            let p = "/uploadimage/";
            o &&
              ((p = "/ajaxuploadlocalizedimage/"),
              u.append("origimagehash", o.image_hash),
              u.append("thumbhash", o.thumbnail_hash),
              u.append("extension", "" + o.file_type),
              u.append("language", "" + r));
            const _ = a.split(".").pop().toLocaleLowerCase();
            ("webm" != _ && "mp4" != _) ||
              (u.append("video_width", "" + d),
              u.append("video_height", "" + m));
            const g = s().CancelToken.source();
            this.m_allCancelTokens.push(g);
            let v =
                h.De.COMMUNITY_BASE_URL +
                "/gid/" +
                this.m_clanSteamID.ConvertTo64BitString() +
                p,
              I = {
                cancelToken: g.token,
                withCredentials: !0,
                headers: { "Content-Type": "multipart/form-data" },
              };
            try {
              (c = yield s().post(v, u, I)), this.m_filesCompleted.push(t);
            } catch (e) {
              (this.m_lastError = {
                file: t,
                status: e.response ? e.response.status : 500,
                message: (0, l.l)(e).strErrorMsg,
              }),
                (c = e.response);
            }
            return o || (yield this.handleUploadRefresh(g)), c.data;
          });
        }
        static SendResizeRequest(e, t, a, i, o) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n =
                h.De.COMMUNITY_BASE_URL +
                "/gid/" +
                t.ConvertTo64BitString() +
                "/resizeimage/",
              r = new FormData();
            return (
              r.append("imagehash", a),
              r.append("extension", i),
              r.append(
                "resize",
                o.map((e) => e.width + "x" + e.height).join(","),
              ),
              r.append("sessionid", h.De.SESSIONID),
              (yield s().post(n, r, { cancelToken: e.token })).data.count
            );
          });
        }
      }
      (0, n.gn)([r.LO], v.prototype, "m_filesToUpload", void 0),
        (0, n.gn)([r.LO], v.prototype, "m_filesCompleted", void 0),
        (0, n.gn)([r.LO], v.prototype, "m_lastError", void 0),
        (0, n.gn)([d.a], v.prototype, "AddImage", null),
        (0, n.gn)([d.a], v.prototype, "AddExistingClanImage", null),
        (0, n.gn)([d.a], v.prototype, "DeleteUploadImageByIndex", null),
        (0, n.gn)([d.a], v.prototype, "DeleteUploadImage", null),
        (0, n.gn)([d.a], v.prototype, "ClearImages", null);
    },
    12055: (e, t, a) => {
      a.d(t, { Mr: () => h, RB: () => m, nZ: () => c });
      var n = a(85556),
        i = a(54842),
        o = a(27174),
        s = a(50423),
        r = a(31846),
        l = a(62698);
      class d {
        constructor(e, t, a, n, s, r) {
          if (
            ((this.dataUrl = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.type = void 0),
            (this.status = void 0),
            (this.message = void 0),
            (this.fileType = 0),
            (0, i.rC)(this),
            (this.file = e),
            (this.fileType = l.aN.GetExtensionTypeFromURL(e.name)),
            (this.language = t),
            (this.uploadTime = Date.now()),
            (this.status = "pending"),
            a)
          ) {
            const e = (0, o.Vy)(this.fileType, a);
            let t = (0, l.S6)(s, r, e, !1);
            void 0 === t && (t = (0, l.S6)(s, r, e, !0)),
              (this.type = t || a[0]);
          }
          (this.height = r), (this.width = s), (this.dataUrl = n);
        }
        IsValidAssetType(e, t, a) {
          let n = 0,
            i = 0,
            s = !1,
            d = !e || 0 === e.length || e.includes(this.type);
          if (t) (n = t.width), (i = t.height), (s = !0);
          else if (this.type) {
            const e = o.h1[this.type];
            e &&
              ((n = e.width),
              (i = e.height),
              (s = !e.bDisableEnforceDimensions));
          }
          const m = this.width >= n && this.height >= i,
            c = s ? this.width === n && this.height === i : m,
            u = a && a != this.fileType,
            h =
              !!(e && e.length > 0) &&
              0 == (0, o.Vy)(this.fileType, e || []).length,
            _ = Boolean(p(this.fileType));
          let g = "",
            v = !1;
          return (
            d
              ? h
                ? (g = (0, r.Xx)("#ImageUpload_InvalidFileType"))
                : u
                ? (g = (0, r.Xx)(
                    "#ImageUpload_InvalidFormat",
                    l.aN.GetExtensionStringForFileType(a),
                  ))
                : c || _
                ? m
                  ? !c &&
                    _ &&
                    ((g = (0, r.Xx)("#ImageUpload_InvalidDimensions", n, i)),
                    (v = !0))
                  : (g = (0, r.Xx)("#ImageUpload_TooSmall", n, i))
                : (g = (0, r.Xx)("#ImageUpload_InvalidResolution", n, i))
              : (g = (0, r.Xx)("#ImageUpload_InvalidFormatSelected")),
            { error: g, needsCrop: v, match: this.type }
          );
        }
      }
      (0, n.gn)([i.LO], d.prototype, "dataUrl", void 0),
        (0, n.gn)([i.LO], d.prototype, "width", void 0),
        (0, n.gn)([i.LO], d.prototype, "height", void 0),
        (0, n.gn)([i.LO], d.prototype, "type", void 0),
        (0, n.gn)([i.LO], d.prototype, "status", void 0),
        (0, n.gn)([i.LO], d.prototype, "message", void 0);
      class m extends d {
        constructor(e, t, a, n) {
          super(e, t, n, a.src, a.videoWidth, a.videoHeight), (this.video = a);
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, o.$N)(this.video.videoWidth, this.video.videoHeight, e);
        }
        GetResizeDimension() {}
      }
      class c extends d {
        constructor(e, t, a) {
          super(e, t, a, URL.createObjectURL(e), 0, 0);
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, o.hu)(e);
        }
        GetResizeDimension() {}
      }
      function u(e) {
        const t = e.split(".").pop().toLocaleLowerCase();
        return "webm" == t || "mp4" == t;
      }
      class h extends d {
        constructor(e, t, a, n, o) {
          super(
            e,
            t,
            n,
            a.src,
            u(e.name) ? a.videoWidth : a.width,
            u(e.name) ? a.videoHeight : a.height,
          ),
            (this.bCropped = !1),
            (0, i.rC)(this),
            (this.media = a),
            (this.localizedImageGroupPrimaryImage = o);
        }
        ResetImage() {
          (this.height = this.media.height),
            (this.width = this.media.width),
            (this.dataUrl = this.media.src);
        }
        CropImage(e, t, a, i, o, r, l) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return new Promise((n, d) => {
              const m = p(l);
              if (!m) return void d("Invalid format provided");
              const c = document.createElement("canvas");
              (c.width = o), (c.height = r);
              c.getContext("2d").drawImage(this.media, e, t, a, i, 0, 0, o, r),
                c.toBlob((e) => {
                  const t = c.toDataURL(m);
                  3 !== l && t.startsWith("data:image/png")
                    ? d("Unable to encode into the requested file format")
                    : ((this.file = (0, s.Lh)(e, this.file.name)),
                      (this.width = o),
                      (this.height = r),
                      (this.dataUrl = t),
                      (this.uploadTime = Date.now()),
                      (this.bCropped = !0),
                      n());
                });
            });
          });
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, o.$N)(this.media.width, this.media.height, e);
        }
        GetResizeDimension() {
          return (function (e) {
            if ("background" === e)
              return [
                { width: 960, height: 311 },
                { width: 480, height: 156 },
              ];
            if ("capsule" === e)
              return [{ width: o.h1[e].width / 2, height: o.h1[e].height / 2 }];
            if ("spotlight" === e)
              return [{ width: o.h1[e].width / 2, height: o.h1[e].height / 2 }];
            return;
          })(this.type);
        }
      }
      function p(e) {
        switch (e) {
          case 3:
            return "image/png";
          case 1:
            return "image/jpeg";
        }
      }
      (0, n.gn)([i.LO], h.prototype, "bCropped", void 0);
    },
    20029: (e, t, a) => {
      a.d(t, { C: () => s, Z: () => r });
      var n = a(77936),
        i = a(38071),
        o = a(31846);
      function s(e, t, a) {
        if (((null != e && null != e) || (e = t), !a || 0 === a.length))
          return e;
        for (const t of a) if (o.LJ.IsELanguageValidInRealm(e, t)) return e;
        for (const e of a) if (o.LJ.IsELanguageValidInRealm(t, e)) return t;
        return a.includes(i.IN.k_ESteamRealmGlobal) ? 0 : 29;
      }
      function r(e, t = 0) {
        let a = e.lastIndexOf(".");
        -1 != a && (e = e.slice(0, a).toLowerCase());
        let i = null,
          o = 0;
        e.endsWith("korean") && ((i = 4), (o = 6));
        for (let t = 0; t < 31; ++t) {
          const a = (0, n.j_)(t);
          a.length <= o || (e.endsWith(a) && ((i = t), (o = a.length)));
        }
        return i || t;
      }
    },
    62698: (e, t, a) => {
      a.d(t, {
        FN: () => E,
        Fm: () => C,
        S6: () => A,
        U8: () => b,
        aN: () => G,
      });
      var n = a(85556),
        i = a(77936),
        o = a(80751),
        s = a.n(o),
        r = a(54842),
        l = a(47427),
        d = a(27174),
        m = a(35427),
        c = a(37593),
        u = a(29480),
        h = a(83999),
        p = a(62210),
        _ = a(16649),
        g = a(45492),
        v = (a(20417), a(46984)),
        I = a(37563),
        f = a(19399),
        y = a(908);
      var E;
      function A(e, t, a, n = !1) {
        if (a)
          for (let i of a) {
            if (n ? (0, d.$N)(e, t, i) : (0, d.FR)(e, t, i)) return i;
          }
      }
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(E || (E = {}));
      class G {
        constructor() {
          (this.m_mapClanToImages = new Map()),
            (this.m_mapClanImageLoadPromises = new Map()),
            (this.m_imageListChangeCallback = new Map()),
            (this.m_mapClanImageLoadState = new Map()),
            (this.m_mapImageIDToResolution = new Map()),
            (this.m_curLocImageGroup = null),
            (this.m_curLocImageGroupType = null),
            (this.m_vecClanImageDragListener = new Array()),
            (0, r.rC)(this);
        }
        BHasImageResolution(e) {
          return this.m_mapImageIDToResolution.has(e.imageid);
        }
        GetImageResolution(e) {
          return this.m_mapImageIDToResolution.get(e.imageid);
        }
        SetImageResolution(e, t) {
          this.m_mapImageIDToResolution.set(e.imageid, t);
        }
        GetImageListCallbackForClanAccountID(e) {
          return (
            this.m_imageListChangeCallback.has(e) ||
              this.m_imageListChangeCallback.set(e, new g.pB()),
            this.m_imageListChangeCallback.get(e)
          );
        }
        static GetExtensionStringForFileType(e) {
          switch (e) {
            case 1:
              return ".jpg";
            case 2:
              return ".gif";
            case 3:
              return ".png";
            case 5:
              return ".webm";
            case 4:
              return ".mp4";
            case 7:
              return ".srt";
            case 6:
              return ".vtt";
          }
        }
        static GetExtensionString(e) {
          return G.GetExtensionStringForFileType(e.file_type) || ".jpg";
        }
        static GetExtensionTypeFromURL(e) {
          return (0, y.qn)(e);
        }
        static GetHashAndExt(e) {
          return e.image_hash + G.GetExtensionString(e);
        }
        static GetThumbHashAndExt(e) {
          return e.thumbnail_hash + G.GetExtensionString(e);
        }
        AddClanImageDragListener(e) {
          -1 == this.m_vecClanImageDragListener.indexOf(e) &&
            this.m_vecClanImageDragListener.push(e);
        }
        RemoveClanImageDragListener(e) {
          let t = this.m_vecClanImageDragListener.indexOf(e);
          -1 != t && this.m_vecClanImageDragListener.splice(t, 1);
        }
        GetClanImageDragListener() {
          return this.m_vecClanImageDragListener;
        }
        BHasLoadedClanImages(e) {
          return this.m_mapClanToImages.has(e.GetAccountID());
        }
        LoadClanImages(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = e.GetAccountID();
            return (
              (!t && this.m_mapClanImageLoadPromises.has(n)) ||
                this.m_mapClanImageLoadPromises.set(
                  n,
                  this.InternalLoadClanImages(e, t, a),
                ),
              this.m_mapClanImageLoadPromises.get(n)
            );
          });
        }
        InternalLoadClanImages(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = e.GetAccountID();
            if (
              ((0, p.X)(e && 0 != n, "ClanSteamID missing:" + e),
              e && (!this.m_mapClanToImages.has(n) || t))
            ) {
              let t = {},
                i = null;
              const o =
                I.De.COMMUNITY_BASE_URL +
                "/gid/" +
                e.ConvertTo64BitString() +
                "/getimages/";
              i = yield s().get(o, {
                params: t,
                withCredentials: !0,
                cancelToken: a ? a.token : null,
              });
              for (let e of i.data.images) e.clanAccountID = n;
              (0, r.z)(() => {
                this.m_mapClanImageLoadState.set(n, { loaded: !0 }),
                  this.m_mapClanToImages.set(n, i.data.images),
                  this.GetImageListCallbackForClanAccountID(n).Dispatch(
                    i.data.images,
                  );
              });
            }
            return this.m_mapClanToImages.get(n);
          });
        }
        GetLoadState(e) {
          return this.m_mapClanImageLoadState.get(e.GetAccountID());
        }
        GetClanImages(e) {
          return this.GetClanImagesByAccount(e.GetAccountID());
        }
        GetClanImagesByAccount(e) {
          let t = this.m_mapClanToImages.get(e);
          return t || new Array();
        }
        GetFilteredClanImages(e, t) {
          let a = b.GetClanImages(e);
          return this.GetFilteredClanImagesList(a, t);
        }
        GetFilteredClanImagesList(e, t) {
          if (t && t.trim().length > 0) {
            t = t.trim().toLowerCase();
            let a = new Array();
            for (let n of e)
              n.file_name &&
                n.file_name.toLowerCase().indexOf(t) >= 0 &&
                a.push(n);
            return a;
          }
          return e;
        }
        GetClanImageByID(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.imageid == t) : null;
        }
        GetClanImageByURL(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.thumb_url == t || e.url == t) : null;
        }
        GetClanImageByFile(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.file_name == t.name) : null;
        }
        GetClanImageByImageHash(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.image_hash == t) : null;
        }
        DeleteClanImageByID(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let a = { sessionid: I.De.SESSIONID, imageid: t },
              n = e.GetAccountID(),
              i = yield s().get(
                I.De.COMMUNITY_BASE_URL +
                  "/gid/" +
                  e.ConvertTo64BitString() +
                  "/deleteimage/",
                { params: a },
              );
            if (!i || 200 != i.status || 1 != i.data.success) return i.data;
            let o = this.m_mapClanToImages.get(n),
              r = o.findIndex((e, a, n) => e.imageid == t);
            return (
              r >= 0 &&
                (o.splice(r, 1),
                this.GetImageListCallbackForClanAccountID(n).Dispatch([...o])),
              i.data
            );
          });
        }
        DeleteClanImage(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.DeleteClanImageByID(e, t.imageid);
          });
        }
        static GetHashFromHashAndExt(e) {
          let t = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - t.length);
        }
        static GetExtensionStringFromHashAndExt(e) {
          return e.substring(e.lastIndexOf("."));
        }
        static GenerateArtworkURLFromHashAndExtensions(e, t, a = E.full, n, o) {
          if (a != E.full || n) {
            let s = t.substring(t.lastIndexOf(".")),
              r = t.substring(0, t.length - s.length);
            return n && "localized_image_group" == o
              ? (0, f.OL)() +
                  e.GetAccountID() +
                  "/" +
                  r +
                  "/" +
                  (0, i.eV)((0, i.j_)(n)) +
                  s
              : (0, f.OL)() + e.GetAccountID() + "/" + r + a + s;
          }
          return (0, f.OL)() + e.GetAccountID() + "/" + t;
        }
        static GenerateEditableArtworkURLFromHashAndExtension(e, t, a) {
          let n =
            I.De.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            t;
          return a && (n += "&lang=" + a), n;
        }
        static GetMimeType(e) {
          let t = e.substr(e.length - 3);
          switch (t) {
            case "jpg":
              return "image/jpeg";
            case "gif":
              return "image/gif";
            case "png":
              return "image/png";
          }
          return "image/" + t;
        }
        AsyncGetImageResolution(e, t, a, i, o) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = t + G.GetExtensionString({ file_type: a }),
              s = G.GenerateEditableArtworkURLFromHashAndExtension(e, n);
            return yield this.AsyncGetImageResolutionInternal(s, i, o);
          });
        }
        AsyncGetImageResolutionInternal(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = { success: void 0 },
              i = new Image();
            (i.crossOrigin = "anonymous"),
              (i.onerror = (t) => {
                a ||
                  ((n.err_msg =
                    "Load fail on url " +
                    e +
                    " with error: " +
                    (0, _.l)(t).strErrorMsg),
                  console.error(n.err_msg)),
                  (n.success = 2);
              }),
              (i.onload = () => {
                (n.width = i.width),
                  (n.height = i.height),
                  (0, p.X)(
                    n.width > 0 && n.height > 0,
                    "unexpected image resolution discovered for strURL: " + e,
                  ),
                  (n.success = 1);
              }),
              (i.src = e),
              t.token.promise.catch((e) => {
                (i.onload = () => {}), (n.success = 52);
              });
            let o = 0;
            for (; void 0 === n.success && o < 100; )
              yield (0, v._R)(100), (o += 1);
            return (
              o >= 100 &&
                ((n.success = 16),
                (n.err_msg = "We timed out processing images")),
              n
            );
          });
        }
        AsyncOverlay(e, t, a, i, o, s) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n,
              r,
              l = new Image();
            (l.crossOrigin = "anonymous"),
              (l.onerror = (e) => {
                (n =
                  "Load fail on url " +
                  a +
                  " with error: " +
                  (0, _.l)(e).strErrorMsg),
                  console.error(n);
              }),
              (l.onload = () => {
                let e = new Image();
                (e.crossOrigin = "anonymous"),
                  (e.onerror = (e) => {
                    (n =
                      "Load fail on url " +
                      t +
                      " with error: " +
                      (0, _.l)(e).strErrorMsg),
                      console.error(n);
                  }),
                  (e.onload = () => {
                    try {
                      let t = document.createElement("canvas"),
                        a = t.getContext("2d");
                      (t.width = o), (t.height = s), a.drawImage(e, 0, 0, o, s);
                      let n = (o - l.width) / 2,
                        i = (s - l.height) / 2;
                      a.drawImage(l, n, i),
                        t.toBlob((e) => (r = e), "image/jpeg");
                    } catch (e) {
                      n =
                        "Failed during image processing for " +
                        i +
                        " with " +
                        e;
                    }
                  }),
                  (e.src = t);
              }),
              (l.src = a);
            let d = 0;
            for (; void 0 === r && d < 100; ) yield (0, v._R)(100), (d += 1);
            if (
              (d >= 100 &&
                void 0 === r &&
                (n = "AsyncOverlay - We timed out processing images"),
              n)
            )
              throw (console.log(n), { success: 2, err_msg: n });
            let m = new c.S(e),
              u = yield m.UploadFile({
                uploadFile: r,
                filename: i,
                width: s,
                height: s,
              });
            return u.image_hash + G.GetExtensionString(u);
          });
        }
        BDoesClanImageFileExistsOnCDNOrOrigin(e, t, a, i) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n =
                I.De.COMMUNITY_BASE_URL +
                "gid/" +
                t.ConvertTo64BitString() +
                "/hasclanimagefile",
              o = { image_hash_and_ext: a, lang: "" + i };
            return (
              1 ==
              (yield s().get(n, { params: o, cancelToken: e && e.token })).data
                .success
            );
          });
        }
        SetPrimaryImageForImageGroup(e, t) {
          (this.m_curLocImageGroup &&
            this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
            t == this.m_curLocImageGroupType) ||
            ((this.m_curLocImageGroup = {
              primaryImage: e,
              localized_images: [],
            }),
            (this.m_curLocImageGroupType = t),
            (this.m_curLocImageGroup.localized_images = (0, h.LG)(
              this.m_curLocImageGroup.localized_images,
              31,
              null,
            )));
        }
        ClearImageGroup() {
          (this.m_curLocImageGroup = null),
            (this.m_curLocImageGroupType = null);
        }
        GetLocalizedImageGroupForEdit() {
          return this.m_curLocImageGroup;
        }
        GetLocalizedImageGroupForEditAsURL(e, t) {
          let a = this.m_curLocImageGroup.primaryImage;
          return this.m_curLocImageGroup.localized_images[t]
            ? this.m_curLocImageGroup.localized_images[t]
            : G.GenerateArtworkURLFromHashAndExtensions(e, G.GetHashAndExt(a));
        }
        GetLocalizedImageGroupForEditAsImgArray(e) {
          return this.GetAllLocalizedGroupImages();
        }
        DetermineAvailableLocalizationForGroup(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let t = this.m_curLocImageGroup.primaryImage,
              a = m.K.InitFromClanID(t.clanAccountID),
              n = G.GetHashAndExt(t),
              i = [];
            for (let t = 0; t < 31; ++t)
              i.push(this.BDoesClanImageFileExistsOnCDNOrOrigin(e, a, n, t));
            let o = yield Promise.all(i);
            (0, r.z)(() => {
              for (let e = 0; e < 31; ++e)
                o[e] &&
                  (this.m_curLocImageGroup.localized_images[e] =
                    G.GenerateArtworkURLFromHashAndExtensions(
                      a,
                      n,
                      E.full,
                      e,
                      this.m_curLocImageGroupType,
                    ));
            });
          });
        }
        SetLocalizedImageGroupAtLang(e, t, a) {
          this.m_curLocImageGroup &&
            (this.m_curLocImageGroup.localized_images[e] = a
              ? G.GenerateArtworkURLFromHashAndExtensions(
                  t,
                  a,
                  E.full,
                  e,
                  this.m_curLocImageGroupType,
                )
              : null);
        }
        AddLocalizeImageUploaded(e, t) {
          let a = this.m_curLocImageGroup.primaryImage;
          if (a.image_hash == e) {
            let e = m.K.InitFromClanID(a.clanAccountID),
              n = G.GetHashAndExt(a);
            this.m_curLocImageGroup.localized_images[t] =
              G.GenerateArtworkURLFromHashAndExtensions(
                e,
                n,
                E.full,
                t,
                this.m_curLocImageGroupType,
              );
          }
        }
        GetAllLocalizedGroupImages() {
          return (
            (this.m_curLocImageGroup &&
              this.m_curLocImageGroup.localized_images) ||
            []
          );
        }
      }
      (0, n.gn)([r.LO], G.prototype, "m_mapClanToImages", void 0),
        (0, n.gn)([r.LO], G.prototype, "m_mapClanImageLoadState", void 0),
        (0, n.gn)([r.LO], G.prototype, "m_curLocImageGroup", void 0);
      const b = new G();
      function C(e) {
        const t = m.K.InitFromClanID(e),
          a = (0, u.T)("useLoadClanImages"),
          [n, i] = (0, l.useState)(() => b.BHasLoadedClanImages(t));
        return (
          (0, l.useEffect)(() => {
            const t = m.K.InitFromClanID(e);
            b.BHasLoadedClanImages(t) ||
              b.LoadClanImages(t, !1, a).then(() => i(!0));
          }, [e, a]),
          n
        );
      }
    },
    93243: (e, t, a) => {
      a.d(t, { KU: () => p, sV: () => h });
      var n = a(85556),
        i = a(80751),
        o = a.n(i),
        s = a(54842),
        r = a(47427),
        l = a(35427),
        d = a(62210),
        m = a(37563),
        c = a(58670);
      class u {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.rC)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, s.z)(() => {
              let e = (0, m.ip)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, d.X)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, d.X)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new l.K(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : 0,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        LoadOGGClanInfoForAppID(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              "string" == typeof e && (e = parseInt(e)),
              (0, d.X)(
                0 != e,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              0 == e)
            )
              return null;
            if (this.m_mapAppIDToClanInfo.has(e))
              return this.m_mapAppIDToClanInfo.get(e);
            let t = "appid_" + e;
            return (
              this.m_mapPromisesLoading.has(t) ||
                this.m_mapPromisesLoading.set(
                  t,
                  this.InternalLoadOGGClanInfoForAppID(e),
                ),
              this.m_mapPromisesLoading.get(t)
            );
          });
        }
        InternalLoadOGGClanInfoForAppID(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t =
              m.De.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
            let a = yield o().get(t, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(a.data), this.m_mapAppIDToClanInfo.get(e)
            );
          });
        }
        LoadOGGClanInfoForIdentifier(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              this.m_mapVanityToClanInfo.has(
                null == e ? void 0 : e.toLocaleLowerCase(),
              ))
            )
              return this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              );
            let t =
              "storevanity_" + (null == e ? void 0 : e.toLocaleLowerCase());
            return (
              this.m_mapPromisesLoading.has(t) ||
                this.m_mapPromisesLoading.set(
                  t,
                  this.InternalLoadOGGClanInfoForIdentifier(e),
                ),
              this.m_mapPromisesLoading.get(t)
            );
          });
        }
        InternalLoadOGGClanInfoForIdentifier(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t =
              m.De.COMMUNITY_BASE_URL +
              "games/" +
              e +
              "/ajaxgetvanityandclanid/";
            let a = yield o().get(t, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(a.data),
              this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
            );
          });
        }
        LoadOGGClanInfoForGroupVanity(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              this.m_mapVanityToClanInfo.has(
                null == e ? void 0 : e.toLocaleLowerCase(),
              ))
            )
              return this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              );
            let t = "community_name_" + e;
            return (
              this.m_mapPromisesLoading.has(t) ||
                this.m_mapPromisesLoading.set(
                  t,
                  this.InternalLoadOGGClanInfoForGroupVanity(
                    null == e ? void 0 : e.toLocaleLowerCase(),
                  ),
                ),
              this.m_mapPromisesLoading.get(t)
            );
          });
        }
        InternalLoadOGGClanInfoForGroupVanity(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t =
              m.De.COMMUNITY_BASE_URL +
              "groups/" +
              e +
              "/ajaxgetvanityandclanid/";
            let a = yield o().get(t, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(a.data),
              this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
            );
          });
        }
        LoadClanInfoForClanSteamID(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.LazyInit();
            let t = e.GetAccountID();
            if (this.m_mapClanAccountIDToClanInfo.has(t))
              return this.m_mapClanAccountIDToClanInfo.get(t);
            let a = "clanaccountid_" + t;
            return (
              this.m_mapPromisesLoading.has(a) ||
                this.m_mapPromisesLoading.set(
                  a,
                  this.InternalLoadClanInfoForClanSteamID(e),
                ),
              this.m_mapPromisesLoading.get(a)
            );
          });
        }
        LoadClanInfoForClanAccountID(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = l.K.InitFromClanID(e);
            return this.LoadClanInfoForClanSteamID(t);
          });
        }
        InternalLoadClanInfoForClanSteamID(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let t = e.GetAccountID();
            const a =
              m.De.COMMUNITY_BASE_URL +
              "gid/" +
              e.ConvertTo64BitString() +
              "/ajaxgetvanityandclanid/";
            let n = yield o().get(a, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(n.data),
              this.m_mapClanAccountIDToClanInfo.get(t)
            );
          });
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return l.K.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, d.X)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = c.bq.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let a = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            m.De.COMMUNITY_BASE_URL +
            (a.vanity_url
              ? "groups/" + a.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, n.gn)([s.LO], u.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.gn)([s.LO], u.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.gn)([s.LO], u.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.gn)([s.aD], u.prototype, "RegisterClanData", null),
        (0, n.gn)([s.aD], u.prototype, "InternalSetupValue", null);
      const h = new u();
      function p(e) {
        const [t, a] = (0, r.useState)(
            e ? h.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [n, i] = (0, r.useState)(!!e && !h.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, r.useEffect)(() => {
            if (e)
              if (h.BHasClanInfoLoadedByAccountID(e))
                a(h.GetClanInfoByClanAccountID(e)), i(!1);
              else {
                i(!0);
                const t = l.K.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                h.LoadClanInfoForClanSteamID(t).then((e) => {
                  a(e), i(!1);
                });
              }
            else a(void 0), i(!1);
          }, [e]),
          [n, t]
        );
      }
      window.g_ClanStore = h;
    },
    908: (e, t, a) => {
      a.d(t, { qn: () => n });
      a(47427);
      function n(e) {
        return (
          e.indexOf("?") > 0 && (e = e.split("?")[0]),
          e.endsWith(".jpg")
            ? 1
            : e.endsWith(".png")
            ? 3
            : e.endsWith(".gif")
            ? 2
            : e.endsWith(".mp4")
            ? 4
            : e.endsWith(".webm")
            ? 5
            : e.endsWith(".vtt")
            ? 6
            : e.endsWith(".srt")
            ? 7
            : e.endsWith(".webp")
            ? 10
            : void 0
        );
      }
    },
    58670: (e, t, a) => {
      a.d(t, { bq: () => h, iG: () => p });
      var n = a(85556),
        i = a(29480),
        o = a(80751),
        s = a.n(o),
        r = a(54842),
        l = a(47427),
        d = a(37563);
      class m {
        constructor(e) {
          (this.m_appidList = new Array()),
            (this.m_socialList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (0, r.rC)(this),
            (this.m_clanSteamID = e);
        }
        Initialize(e) {
          var t;
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            e.social && e.social.forEach((e) => this.m_socialList.push(e)),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags =
              null !== (t = e.clan_account_flags) && void 0 !== t ? t : 0),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(8 & this.m_clanAccountFlags);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetSocialList() {
          return this.m_socialList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  d.De.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  d.De.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return d.De.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            d.De.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        EnablePartnerEventEditorFlag() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.BIsPartnerEventEditorEnabled() ||
              (yield this.UpdateGroupFlagsFeature([2, 8], !0));
          });
        }
        UpdateGroupFlagsFeature(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let a = d.De.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              n = this.m_clanAccountFlags;
            if (
              (e.forEach((e) => {
                t ? (n |= e) : (n &= ~e);
              }),
              n == this.m_clanAccountFlags)
            )
              return;
            let i = new Array();
            1 & n && i.push(1),
              8 & n && i.push(8),
              2 & n && i.push(2),
              4 & n && i.push(4),
              16 & n && i.push(16),
              32 & n && i.push(32),
              64 & n && i.push(64);
            let o = new FormData();
            o.append("sessionid", d.De.SESSIONID),
              o.append("clan_account_id", this.GetClanAccountID().toString()),
              o.append("accountflags", JSON.stringify(i));
            let r = yield s().post(a, o);
            r &&
              200 == r.status &&
              1 == r.data.success &&
              (this.m_clanAccountFlags = n);
          });
        }
      }
      (0, n.gn)([r.LO], m.prototype, "m_appidList", void 0),
        (0, n.gn)([r.LO], m.prototype, "m_nFollowers", void 0),
        (0, n.gn)([r.LO], m.prototype, "m_clanAccountFlags", void 0);
      var c = a(35427);
      class u {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, r.rC)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, d.kQ)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                let t = Number(e.creator_clan_id),
                  a = c.K.InitFromClanID(t),
                  n = new m(a);
                n.Initialize(e),
                  (n.m_promise = u.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(t, n);
              });
            let t = (0, d.kQ)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static GetAsPromise(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return e;
          });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
            t[0].clan_account_id > 0 &&
            "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        LoadCreatorHome(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
            ) {
              let a = new m(e);
              (a.m_promise = this.InternalCreatorHome(a, t)),
                yield a.m_promise,
                this.m_mapClanToCreatorHome.set(e.GetAccountID(), a);
            }
            return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
          });
        }
        InternalCreatorHome(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let a = { get_appids: !0, l: d.De.LANGUAGE, origin: self.origin },
              n =
                d.De.STORE_BASE_URL +
                "curator/" +
                e.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              i = yield s().get(n, { params: a, cancelToken: t && t.token });
            return e.Initialize(i.data), e;
          });
        }
        LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
              let a = { appid: e },
                n = d.De.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                i = yield s().get(n, {
                  params: a,
                  cancelToken: t && t.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(e);
          });
        }
        SearchCreatorHomeStore(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = `${d.De.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              i = {
                term: e.replace(" ", "+"),
                require_creator: t,
                cc: d.De.COUNTRY,
                l: d.De.LANGUAGE,
                origin: self.origin,
              },
              o = new Array();
            const l = yield s().get(n, { params: i, cancelToken: a.token });
            return (
              l.data.curators &&
                (0, r.z)(() => {
                  l.data.curators.forEach((e) => {
                    if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                      let t = c.K.InitFromClanID(e.creator_clan_id),
                        a = new m(t);
                      a.Initialize(e),
                        this.m_mapClanToCreatorHome.set(e.creator_clan_id, a);
                    }
                    o.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                  });
                }),
              o
            );
          });
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, n.gn)([r.LO], u.prototype, "m_mapClanToCreatorHome", void 0),
        (0, n.gn)([r.LO], u.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, n.gn)([r.aD], u.prototype, "LazyInit", null);
      const h = new u();
      function p(e) {
        var t;
        const a = c.K.InitFromClanID(e),
          [n, o] = l.useState(h.GetCreatorHome(a)),
          s = (0, i.T)("useCreatorHome");
        return (
          l.useEffect(() => {
            const t = c.K.InitFromClanID(e);
            h.BHasCreatorHomeLoaded(t)
              ? n || o(h.GetCreatorHome(t))
              : h.LoadCreatorHome(t).then(() => {
                  var e;
                  (null === (e = null == s ? void 0 : s.token) || void 0 === e
                    ? void 0
                    : e.reason) || o(h.GetCreatorHome(t));
                });
          }, [
            null === (t = null == s ? void 0 : s.token) || void 0 === t
              ? void 0
              : t.reason,
            e,
            n,
          ]),
          n
        );
      }
      window.g_CreatorHomeStore = h;
    },
    44174: (e, t, a) => {
      a.d(t, { cA: () => E, j1: () => A, Jn: () => G });
      var n = a(85556),
        i = a(80751),
        o = a.n(i),
        s = a(54842),
        r = a(24289),
        l = a(77936),
        d = a(51688),
        m = a(35427);
      var c = a(83999),
        u = a(62210),
        h = a(16649),
        p = a(45492),
        _ = a(31846),
        g = a(45284),
        v = a(37563),
        I = a(47427);
      class f {
        constructor(e) {
          (0, u.X)(
            "number" == typeof e.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = e.appid),
            (this.date = e.date),
            (this.can_play = e.can_play),
            (this.playtime = e.playtime),
            (this.announcementid = e.announcementid);
        }
      }
      function y(e) {
        let t = "" + e;
        const a = _.LJ.GetELanguageFallback(e);
        return e != a && (t += "_" + a), t;
      }
      class E {
        constructor() {
          (this.m_mapExistingEvents = new Map()),
            (this.m_mapAnnouncementBodyToEvent = new Map()),
            (this.m_mapClanToGIDs = new Map()),
            (this.m_mapAppIDToGIDs = new Map()),
            (this.m_mapAdjacentAnnouncementGIDs = new Map()),
            (this.m_mapUpdatedApps = new Map()),
            (this.m_tsUpdatedAppsQueryTime = 0),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_rgQueuedEventsUniqueIDs = new Array()),
            (this.m_rgQueuedEventsForEditFlags = new Array()),
            (this.m_QueuedEventTimeout = new p.Ar()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.rC)(this);
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let t =
              ((e = "PartnerEventStore"),
              window.StoreDefaults ? window.StoreDefaults[e] : void 0);
            this.ValidateStoreDefault(t) &&
              t.forEach((e) => {
                if (e) {
                  let t = new m.K(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    this.m_mapExistingEvents.set(
                      d.Vv + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let a = (0, v.ip)("partnereventstore", "application_config");
            this.ValidateStoreDefault(a) &&
              a.forEach((e) => {
                if (e) {
                  let t = new m.K(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      d.Vv + e.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      d.Vv + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let n = (0, v.ip)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(n) &&
              (("dev" != v.De.WEB_UNIVERSE && "beta" != v.De.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: CPartnerEventStore loading adjacents gids payload: " +
                    n.length,
                ),
              n.forEach((e) => {
                e &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    e.announcementGID,
                    e.adjacents,
                  );
              })),
              "dev" == v.De.WEB_UNIVERSE &&
                console.log(
                  "PartnerEventStore Loaded events: " +
                    this.m_mapExistingEvents.size +
                    " with adjacent info: " +
                    this.m_mapExistingEvents.size,
                ),
              (this.m_bLoadedFromConfig = !0);
          }
          var e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            ("string" == typeof t[0].gid ||
              ("object" == typeof t[0].announcement_body &&
                "string" == typeof t[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].announcementGID &&
            Array.isArray(t[0].adjacents) &&
            (0 == t[0].adjacents.length || "string" == typeof t[0].adjacents[0])
          );
        }
        GetClanEventGIDs(e) {
          let t = this.m_mapClanToGIDs.get(e.GetAccountID());
          return t || [];
        }
        GetClanEventGIDsForApp(e) {
          let t = this.m_mapAppIDToGIDs.get(e);
          return t || [];
        }
        GetClanEventModel(e) {
          return this.m_mapExistingEvents.get(e);
        }
        BHasClanEventModel(e) {
          return this.m_mapExistingEvents.has(e);
        }
        BHasClanAnnouncementGID(e) {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            let t = this.m_mapAnnouncementBodyToEvent.get(e);
            return this.BHasClanEventModel(t);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(e) {
          return this.m_mapAnnouncementBodyToEvent.get(e);
        }
        GetClanEventFromAnnouncementGID(e) {
          return this.m_mapExistingEvents.get(
            this.m_mapAnnouncementBodyToEvent.get(e),
          );
        }
        DefaultEventSortFunction(e, t) {
          return e.startTime == t.startTime
            ? (0, g.eT)(e.GID, t.GID)
            : t.startTime - e.startTime;
        }
        RegisterClanEvents(e) {
          if (e)
            for (const t of e) {
              const e = this.GetEventLookupKey(t);
              if (!this.m_mapExistingEvents.has(e)) {
                const e = new m.K(t.clan_steamid);
                this.InsertEventModelFromClanEventData(e, t);
              }
            }
        }
        GetRankedClanEvents(e, t) {
          let a = [],
            n = e ? this.GetClanEventGIDs(e) : this.GetClanEventGIDsForApp(t);
          if (!n || 0 == n.length) return a;
          for (let e of n) {
            let t = this.GetClanEventModel(e);
            a.push(t);
          }
          return a.sort(this.DefaultEventSortFunction), a;
        }
        BIsOldAnnouncement(e) {
          return (
            (null == e.gid || null == e.gid || "0" == e.gid) &&
            e.announcement_body &&
            "0" != e.announcement_body.gid
          );
        }
        GetEventLookupKey(e) {
          return this.BIsOldAnnouncement(e)
            ? d.Vv + e.announcement_body.gid
            : e.gid;
        }
        InsertEventModelFromClanEventData(e, t) {
          let a = new d.bH();
          if (
            ((a.clanSteamID = e),
            (0, u.X)(
              a.clanSteamID && a.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                a.clanSteamID.ConvertTo64BitString() +
                " " +
                v.De.EUNIVERSE,
            ),
            (a.GID = this.GetEventLookupKey(t)),
            (a.bOldAnnouncement = this.BIsOldAnnouncement(t)),
            (a.appid = t.appid),
            (a.startTime = t.rtime32_start_time),
            (a.endTime = t.rtime32_end_time),
            (a.visibilityStartTime = t.rtime32_visibility_start),
            (a.visibilityEndTime = t.rtime32_visibility_end),
            (a.loadedAllLanguages = !1),
            (a.type = t.event_type),
            (a.nVotesUp = t.votes_up),
            (a.nVotesDown = t.votes_down),
            (a.comment_type = t.comment_type),
            (a.gidfeature = t.gidfeature),
            (a.gidfeature2 = t.gidfeature2),
            (a.featured_app_tagid = t.featured_app_tagid),
            (a.vecTags = new Array()),
            (a.creator_steamid = t.creator_steamid),
            (a.last_update_steamid = t.last_update_steamid),
            (a.rtime32_last_modified = t.rtime32_last_modified),
            (a.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
            (a.video_preview_type = t.video_preview_type),
            (a.video_preview_id = t.video_preview_id),
            (a.has_live_stream = t.has_live_stream),
            (a.live_stream_viewer_count = t.live_stream_viewer_count),
            (a.m_nBuildID = t.build_id),
            (a.m_strBuildBranch = t.build_branch),
            t.announcement_body)
          ) {
            let e = t.announcement_body;
            (a.AnnouncementGID = e.gid),
              a.name.set(e.language, e.headline),
              a.description.set(e.language, e.body),
              a.timestamp_loc_updated.clear(),
              (a.forumTopicGID = e.forum_topic_id),
              (a.nCommentCount = e.commentcount),
              (a.postTime = e.posttime),
              a.bOldAnnouncement && !e.hidden && (a.startTime = e.posttime),
              (a.announcementClanSteamID = new m.K(e.clanid)),
              e.tags &&
                e.tags.length > 0 &&
                e.tags.forEach((e) => a.vecTags.push(e)),
              !a.rtime32_last_solr_search_col_updated &&
                a.rtime32_last_modified &&
                ((a.rtime32_last_solr_search_col_updated =
                  a.rtime32_last_modified),
                (a.rtime32_last_modified = e.updatetime));
          } else
            (a.AnnouncementGID = "0"),
              (a.forumTopicGID = t.forum_topic_id),
              a.name.clear(),
              a.description.clear(),
              a.timestamp_loc_updated.clear(),
              (a.postTime = t.rtime32_start_time),
              (a.nCommentCount = t.comment_count),
              a.name.set(0, t.event_name),
              a.description.set(0, t.event_notes);
          t.broadcaster_accountid &&
            (a.broadcaster = new m.K(t.broadcaster_accountid));
          const n = d.MZ;
          try {
            a.jsondata = Object.assign(
              Object.assign({}, n),
              t.jsondata ? JSON.parse(t.jsondata) : void 0,
            );
          } catch (e) {
            const t = (0, h.l)(e);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  t.strErrorMsg,
                t,
              ),
              e)
            );
          }
          if (
            ((a.jsondata.localized_capsule_image = (0, c.LG)(
              a.jsondata.localized_capsule_image || [],
              31,
              null,
            )),
            (a.jsondata.localized_title_image = (0, c.LG)(
              a.jsondata.localized_title_image || [],
              31,
              null,
            )),
            (a.jsondata.localized_subtitle = (0, c.LG)(
              a.jsondata.localized_subtitle || [],
              31,
              null,
            )),
            (a.jsondata.localized_summary = (0, c.LG)(
              a.jsondata.localized_summary || [],
              31,
              null,
            )),
            (a.jsondata.localized_broadcast_title = (0, c.LG)(
              a.jsondata.localized_broadcast_title || [],
              31,
              null,
            )),
            (a.jsondata.localized_broadcast_left_image = (0, c.LG)(
              a.jsondata.localized_broadcast_left_image || [],
              31,
              null,
            )),
            (a.jsondata.localized_broadcast_right_image = (0, c.LG)(
              a.jsondata.localized_broadcast_right_image || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_header = (0, c.LG)(
              a.jsondata.localized_sale_header || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_overlay = (0, c.LG)(
              a.jsondata.localized_sale_overlay || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_product_banner = (0, c.LG)(
              a.jsondata.localized_sale_product_banner || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_product_mobile_banner = (0, c.LG)(
              a.jsondata.localized_sale_product_mobile_banner || [],
              31,
              null,
            )),
            (a.jsondata.localized_sale_logo = (0, c.LG)(
              a.jsondata.localized_sale_logo || [],
              31,
              null,
            )),
            void 0 !== a.jsondata.sale_num_headers)
          )
            for (let e = 0; e < a.jsondata.sale_num_headers; ++e)
              a.jsondata.localized_per_day_sales_header[e] = (0, c.LG)(
                a.jsondata.localized_per_day_sales_header[e],
                31,
                null,
              );
          return (
            a.jsondata.sale_sections &&
              a.jsondata.sale_sections.forEach((e, t) => {
                e.localized_label &&
                  (e.localized_label = (0, c.LG)(e.localized_label, 31, null)),
                  (a.jsondata.sale_sections[t] = Object.assign(
                    Object.assign({}, d.a4),
                    e,
                  ));
              }),
            a.jsondata.email_setting &&
              a.jsondata.email_setting.sections &&
              a.jsondata.email_setting.sections.forEach((e) => {
                void 0 !== e.localized_headline &&
                  null !== e.localized_headline &&
                  (e.localized_headline = (0, c.LG)(
                    e.localized_headline,
                    31,
                    null,
                  )),
                  void 0 !== e.localized_body &&
                    null !== e.localized_body &&
                    (e.localized_body = (0, c.LG)(e.localized_body, 31, null)),
                  void 0 !== e.localized_image &&
                    null !== e.localized_image &&
                    (e.localized_image = (0, c.LG)(
                      e.localized_image,
                      31,
                      null,
                    ));
              }),
            a.jsondata.localized_title_image.forEach((e, t) => {
              if (null != e && "http" == e.substr(0, 4)) {
                let n = e.lastIndexOf("/"),
                  i = e.substr(n + 1);
                a.jsondata.localized_title_image[t] = i;
              }
            }),
            t.published
              ? t.hidden
                ? (a.visibility_state = d.ac.k_EEventStateStaged)
                : (a.visibility_state = d.ac.k_EEventStateVisible)
              : (a.visibility_state = d.ac.k_EEventStateUnpublished),
            this.InsertUniqueEventGID(e.GetAccountID(), a.appid, a.GID),
            this.m_mapExistingEvents.set(a.GID, a),
            a.AnnouncementGID &&
              a.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(a.AnnouncementGID, a.GID),
            (a.bLoaded = !0),
            a
          );
        }
        HelperInitializeNumSalesHeaderArray(e) {
          if (e.jsondata.sale_num_headers > 1) {
            e.jsondata.localized_per_day_sales_header = [];
            for (let t = 0; t < e.jsondata.sale_num_headers; ++t)
              e.jsondata.localized_per_day_sales_header.push(
                (0, c.LG)([], 31, null),
              );
            e.m_overrideCurrentDay = 0;
          } else e.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(e) {
          let t = new Array();
          return (
            this.m_mapClanToGIDs.has(e.GetAccountID()) &&
              this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
                let a = this.m_mapExistingEvents.get(e);
                a && t.push(a);
              }),
            t
          );
        }
        QueueLoadPartnerEvent(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_mapExistingEvents.has(t)) return;
            this.m_rgQueuedEventsClanIDs.push(e),
              this.m_rgQueuedEventsUniqueIDs.push(t),
              this.m_rgQueuedEventsForEditFlags.push(Boolean(a)),
              this.m_PendingInfoPromise ||
                (this.m_PendingInfoPromise = new Promise(
                  (e) => (this.m_PendingInfoResolve = e),
                ));
            const n = this.m_PendingInfoPromise,
              i = () => {
                const e = this.m_PendingInfoResolve,
                  t = this.m_rgQueuedEventsClanIDs,
                  a = this.m_rgQueuedEventsUniqueIDs,
                  n = this.m_rgQueuedEventsForEditFlags;
                (this.m_PendingInfoPromise = null),
                  (this.m_rgQueuedEventsClanIDs = new Array()),
                  (this.m_rgQueuedEventsUniqueIDs = new Array()),
                  (this.m_rgQueuedEventsForEditFlags = new Array()),
                  this.InternalLoadPartnerEventList(t, a, n).then(() => e());
              };
            if (this.m_rgQueuedEventsClanIDs.length >= 30)
              this.m_QueuedEventTimeout.Cancel(), i();
            else if (!this.m_QueuedEventTimeout.IsScheduled()) {
              const e = 50;
              this.m_QueuedEventTimeout.Schedule(e, i);
            }
            return n;
          });
        }
        InternalLoadPartnerEventList(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = a.some((e) => e);
            const i =
                v.De.STORE_BASE_URL +
                (n
                  ? "events/ajaxgeteventdetailsforedit/"
                  : "events/ajaxgeteventdetails/"),
              s = y((0, l.jM)(v.De.LANGUAGE)),
              r = {
                clanid_list: e.join(","),
                uniqueid_list: t.join(","),
                lang_list: s,
                origin: self.origin,
              };
            try {
              const e = yield o().get(i, { params: r, withCredentials: n });
              this.RegisterClanEvents(e.data.events);
            } catch (e) {
              let t = (0, h.l)(e);
              console.error("GetEventDetails hit error " + t.strErrorMsg, t);
            }
          });
        }
        LoadAdjacentPartnerEvents(e, t, a, i, o, s, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadAdjacentPartnerEvents(
              e,
              void 0,
              t,
              a,
              i,
              o,
              s,
              r,
            );
          });
        }
        LoadAdjacentPartnerEventsByAnnouncement(e, t, a, i, o, s, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadAdjacentPartnerEvents(
              void 0,
              e,
              t,
              a,
              i,
              o,
              s,
              r,
            );
          });
        }
        LoadAdjacentPartnerEventsByEvent(e, t, a, i, o, s, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = t || e.clanSteamID;
            return e.bOldAnnouncement
              ? this.InternalLoadAdjacentPartnerEvents(
                  void 0,
                  e.AnnouncementGID,
                  n,
                  a,
                  i,
                  o,
                  s,
                  r,
                )
              : this.InternalLoadAdjacentPartnerEvents(
                  e.GID,
                  e.AnnouncementGID,
                  n,
                  a,
                  i,
                  o,
                  s,
                  r,
                );
          });
        }
        InternalLoadAdjacentPartnerEvents(e, t, a, i, r, d, c, u) {
          var p;
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = new Array();
            if (this.m_mapAdjacentAnnouncementGIDs.has(t)) {
              let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
                a = new Array();
              if (
                (e.forEach((e) => {
                  if (this.m_mapAnnouncementBodyToEvent.has(e)) {
                    let t = this.m_mapAnnouncementBodyToEvent.get(e);
                    n.push(this.m_mapExistingEvents.get(t));
                  } else a.push(e);
                }),
                a.length > 0)
              ) {
                (yield this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  null,
                  a,
                  u,
                )).forEach((e) => n.push(e));
              }
            } else {
              let _ =
                v.De.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
              const g = y((0, l.jM)(v.De.LANGUAGE));
              let I = {
                clan_accountid: a ? a.GetAccountID() : void 0,
                appid: i,
                count_before: r,
                count_after: d,
                gidevent: e,
                gidannouncement: t,
                lang_list: g,
                rtime_oldestevent: c ? c.rtime_oldestevent : void 0,
                require_tags:
                  c && c.require_tags ? c.require_tags.join(",") : void 0,
                exclude_tags:
                  c && c.exclude_tags ? c.exclude_tags.join(",") : void 0,
                require_no_tags: c ? c.require_no_tags : void 0,
                event_type_filter:
                  c && c.event_type_filter
                    ? c.event_type_filter.join(",")
                    : void 0,
                exclude_event_types:
                  c && c.exclude_event_types
                    ? c.exclude_event_types.join(",")
                    : void 0,
                origin: self.origin,
              };
              try {
                let r = yield o().get(_, {
                  params: I,
                  cancelToken: null == u ? void 0 : u.token,
                });
                if (
                  1 ==
                  (null === (p = null == r ? void 0 : r.data) || void 0 === p
                    ? void 0
                    : p.success)
                )
                  (0, s.z)(() => {
                    for (let e of r.data.events) {
                      let t = this.GetEventLookupKey(e);
                      if (!this.m_mapExistingEvents.has(t)) {
                        let t = new m.K(e.clan_steamid);
                        this.InsertEventModelFromClanEventData(a || t, e);
                      }
                      n.push(this.m_mapExistingEvents.get(t));
                    }
                    0 == n.length &&
                      (e && this.BHasClanEventModel(e)
                        ? n.push(this.m_mapExistingEvents.get(e))
                        : t &&
                          this.BHasClanAnnouncementGID(t) &&
                          n.push(this.GetClanEventFromAnnouncementGID(t)));
                  });
                else {
                  let e = (0, h.l)(null == r ? void 0 : r.data);
                  console.error(
                    "LoadAdjacentPartnerEvents Success but empty response:" +
                      i +
                      " clanAccount:" +
                      (a ? a.GetAccountID() : 0) +
                      " " +
                      e.strErrorMsg,
                    e,
                  );
                }
              } catch (e) {
                let t = (0, h.l)(e);
                52 != t.errorCode &&
                  console.error(
                    "LoadAdjacentPartnerEvents hit error on appid:" +
                      i +
                      " clanAccount:" +
                      (a ? a.GetAccountID() : 0) +
                      " " +
                      t.strErrorMsg,
                    t,
                  );
              }
            }
            return n;
          });
        }
        LoadPartnerEventsPageable(e, t, a = 0, i = 0) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = new Array(),
              r = v.De.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
              l = {
                clan_accountid: e ? e.GetAccountID() : void 0,
                appid: t,
                offset: a,
                count: i,
                l: v.De.LANGUAGE,
                origin: self.origin,
              };
            try {
              let e = yield o().get(r, { params: l });
              (0, s.z)(() => {
                for (let t of e.data.events) {
                  let e = this.GetEventLookupKey(t);
                  if (!this.m_mapExistingEvents.has(e)) {
                    let e = new m.K(t.clan_steamid);
                    this.InsertEventModelFromClanEventData(e, t);
                  }
                  n.push(this.m_mapExistingEvents.get(e));
                }
              });
            } catch (e) {
              console.error(
                "LoadClanEventInDateRange hit error " + (0, h.l)(e).strErrorMsg,
              );
            }
            return n;
          });
        }
        GetBestEventsForCurrentUser(e, t, a) {
          var i, r;
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = new Array(),
              l = {
                l: v.De.LANGUAGE,
                include_steam_blog: !0,
                filter_to_played_within_days: e,
                include_only_game_updates: t,
              },
              d = v.De.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
              c = yield o().get(d, {
                params: l,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
            if (!(null === (i = c.data) || void 0 === i ? void 0 : i.events)) {
              let e =
                (null === (r = c.data) || void 0 === r ? void 0 : r.err_msg) ||
                "";
              throw new Error(
                `GetBestEventsForCurrentUser request failed (${e})`,
              );
            }
            return (
              (0, s.z)(() => {
                for (let e of c.data.events) {
                  let t = this.GetEventLookupKey(e);
                  if (!this.m_mapExistingEvents.has(t)) {
                    let t = new m.K(e.clan_steamid);
                    this.InsertEventModelFromClanEventData(t, e);
                  }
                  let a = {
                    nAppPriority: e.nAppPriority,
                    bPossibleTakeOver: e.bPossibleTakeOver,
                    event: this.m_mapExistingEvents.get(t),
                  };
                  n.push(a);
                }
              }),
              n
            );
          });
        }
        LoadImportantEventsAroundToday(e, t, a, i, r, l) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = new Array(),
              d = new Array();
            d.push({ priority: 0, appids: t }),
              a && d.push({ priority: 1, appids: a }),
              i && d.push({ priority: 2, appids: i });
            let c = {
                count: e,
                strAppIDPriority: JSON.stringify({ prioritized_apps: d }),
                filterToEventTypes: l ? l.toString() : "",
                l: v.De.LANGUAGE,
              },
              u = v.De.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
              h = yield o().get(u, {
                params: c,
                withCredentials: !0,
                cancelToken: r.token,
              });
            return (
              (0, s.z)(() => {
                for (let e of h.data.events) {
                  let t = this.GetEventLookupKey(e);
                  if (!this.m_mapExistingEvents.has(t)) {
                    let t = new m.K(e.clan_steamid);
                    this.InsertEventModelFromClanEventData(t, e);
                  }
                  n.push(this.m_mapExistingEvents.get(t));
                }
              }),
              n
            );
          });
        }
        InsertUniqueEventGID(e, t, a) {
          this.m_mapClanToGIDs.has(e) ||
            this.m_mapClanToGIDs.set(e, new Array()),
            this.m_mapAppIDToGIDs.has(t) ||
              this.m_mapAppIDToGIDs.set(t, new Array());
          let n = this.m_mapClanToGIDs.get(e);
          -1 == n.indexOf(a) &&
            (n.push(a), this.m_mapAppIDToGIDs.get(t).push(a));
        }
        ResetModel() {}
        DeleteClanEvent(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.m_mapExistingEvents.has(t) &&
              (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
            let a = null,
              n = new URLSearchParams();
            return (
              n.append("sessionid", v.De.SESSIONID),
              n.append("bDelete", "1"),
              n.append("gid", t),
              (a = yield o().post(
                v.De.COMMUNITY_BASE_URL +
                  "/gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxcreateupdatedeletepartnerevents/",
                n,
              )),
              this.RemoveGIDFromList(e, t),
              a.data
            );
          });
        }
        RemoveGIDFromList(e, t) {
          if (
            (this.m_mapExistingEvents.delete(t),
            this.m_mapClanToGIDs.has(e.GetAccountID()))
          ) {
            let a = this.m_mapClanToGIDs.get(e.GetAccountID()),
              n = a.indexOf(t);
            n >= 0 && a.splice(n, 1);
          }
        }
        FlushEventFromCache(e, t) {
          if (e && this.m_mapExistingEvents.has(e)) {
            if (!t) {
              t = this.m_mapExistingEvents.get(e).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(e);
          }
          if (
            t &&
            (this.m_mapExistingEvents.has(d.Vv + t) &&
              this.m_mapExistingEvents.delete(d.Vv + t),
            this.m_mapAnnouncementBodyToEvent.has(t))
          ) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            this.m_mapExistingEvents.has(e) &&
              this.m_mapExistingEvents.delete(e),
              this.m_mapAnnouncementBodyToEvent.delete(t);
          }
        }
        InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          e,
          t,
          a,
          i,
          s,
          r = !1,
        ) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = y(r ? 0 : (0, l.jM)(v.De.LANGUAGE)),
              d = {
                appid: t,
                clan_accountid: e ? e.GetAccountID() : void 0,
                announcement_gid: i,
                event_gid: a,
                lang_list: n,
                last_modified_time: s || 0,
                origin: self.origin,
                for_edit: r,
              },
              c = null,
              h = null;
            if (r) {
              const a = (0, v.Zv)();
              "community" === a
                ? ((h = v.De.COMMUNITY_BASE_URL),
                  (h += e ? "gid/" + e.ConvertTo64BitString() : "ogg/" + t),
                  (h += "/"))
                : (h =
                    "partnerweb" === a
                      ? v.De.PARTNER_BASE_URL + "sales/"
                      : v.De.STORE_BASE_URL + "events/"),
                (h += "ajaxgetpartnereventforedit"),
                (c = { params: d, withCredentials: !0 });
            } else
              (h = v.De.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
                (c = { params: d, withCredentials: !1 });
            let p = (yield o().get(h, c)).data.event,
              _ = this.GetEventLookupKey(p);
            if (
              !this.m_mapExistingEvents.has(_) ||
              this.m_mapExistingEvents.get(_).rtime32_last_modified <
                p.rtime32_last_modified ||
              this.m_mapExistingEvents.get(_).rtime32_moderator_reviewed <
                p.rtime_mod_reviewed
            ) {
              (0, u.X)(
                p.clan_steamid,
                "ClanSteamID is missing from data we received",
              );
              let e = new m.K(p.clan_steamid);
              this.InsertEventModelFromClanEventData(e, p);
            }
            return this.m_mapExistingEvents.get(_);
          });
        }
        InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          e,
          t,
          a,
          i,
          o,
          s,
        ) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (a && this.m_mapExistingEvents.has(a))
              return this.m_mapExistingEvents.get(a);
            if (i) {
              if (this.m_mapExistingEvents.has(d.Vv + i))
                return this.m_mapExistingEvents.get(d.Vv + i);
              if (this.m_mapAnnouncementBodyToEvent.has(i)) {
                const e = this.m_mapAnnouncementBodyToEvent.get(i);
                if (this.m_mapExistingEvents.has(e))
                  return this.m_mapExistingEvents.get(e);
              }
            }
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              e,
              t,
              a,
              i,
              o,
              s,
            );
          });
        }
        LoadPartnerEventFromAnnoucementGID(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              e,
              void 0,
              t,
              a,
            );
          });
        }
        LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, a, i) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              e,
              void 0,
              void 0,
              t,
              a,
              i,
            );
          });
        }
        LoadPartnerEventFromClanEventGID(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              e,
              t,
              void 0,
              a,
            );
          });
        }
        LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, a, i) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              e,
              void 0,
              t,
              void 0,
              a,
              i,
            );
          });
        }
        LoadPartnerEventGeneric(e, t, a, i, o) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              e,
              t,
              a,
              i,
              o,
            );
          });
        }
        LoadHiddenPartnerEvent(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              e,
              null,
              t,
              null,
              0,
              !0,
            );
          });
        }
        LoadHiddenPartnerEventByAnnouncementGID(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              e,
              null,
              null,
              t,
              0,
              !0,
            );
          });
        }
        HintLoadImportantUpdates() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e = (0, r.zO)(36e5);
            if (e != this.m_tsUpdatedAppsQueryTime) {
              this.m_tsUpdatedAppsQueryTime = e;
              const t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
                a = v.De.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
                n = yield o().get(a, { params: t, withCredentials: !0 });
              n.data.apps &&
                n.data.apps.length > 0 &&
                (0, s.z)(() => {
                  const e = new Map(
                    n.data.apps.map((e) => [e.appid, new f(e)]),
                  );
                  this.m_mapUpdatedApps = e;
                });
            }
            return this.m_mapUpdatedApps;
          });
        }
        GetAppImportantUpdate(e) {
          return (
            this.HintLoadImportantUpdates().catch((e) => {
              console.log("UpdatedApps failed to load: ", e.response.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
          );
        }
        LoadClanEventLocalizationFromAnnouncementGID(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let a =
              v.De.COMMUNITY_BASE_URL +
              "gid/" +
              e.ConvertTo64BitString() +
              "/announcements/ajaxgetlocalization/" +
              t;
            return (yield o().get(a)).data.localization;
          });
        }
        LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = new Array(),
              i = v.De.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
              r = y((0, l.jM)(v.De.LANGUAGE));
            let d = null,
              c = null;
            if (e) {
              let t = new Array();
              e.forEach((e) => {
                this.m_mapExistingEvents.has(e)
                  ? n.push(this.m_mapExistingEvents.get(e))
                  : t.push(e);
              }),
                t.sort(),
                (d = t);
            }
            if (t) {
              let e = new Array();
              t.forEach((t) => {
                if (
                  this.m_mapAnnouncementBodyToEvent.has(t) &&
                  this.m_mapExistingEvents.has(
                    this.m_mapAnnouncementBodyToEvent.get(t),
                  )
                ) {
                  let e = this.m_mapAnnouncementBodyToEvent.get(t);
                  n.push(this.m_mapExistingEvents.get(e));
                } else e.push(t);
              }),
                e.sort(),
                (c = e);
            }
            if (!d && !c) return n;
            const u = new Array();
            for (
              ;
              (null == d ? void 0 : d.length) > 0 ||
              (null == c ? void 0 : c.length) > 0;

            ) {
              let e = {
                event_gids:
                  (null == d ? void 0 : d.length) > 0
                    ? null == d
                      ? void 0
                      : d.splice(0, 100).join(",")
                    : void 0,
                announcement_gids:
                  (null == c ? void 0 : c.length) > 0
                    ? null == c
                      ? void 0
                      : c.splice(0, 100).join(",")
                    : void 0,
                lang_list: r,
                origin: self.origin,
              };
              u.push(
                o().get(i, { params: e, cancelToken: a ? a.token : void 0 }),
              );
            }
            try {
              const e = yield Promise.all([...u]);
              let t = 0;
              (0, s.z)(() =>
                e.forEach((e) => {
                  if (e && e.data && e.data.events)
                    for (let t of e.data.events) {
                      let e = this.GetEventLookupKey(t);
                      if (!this.m_mapExistingEvents.has(e)) {
                        let e = new m.K(t.clan_steamid);
                        this.InsertEventModelFromClanEventData(e, t);
                      }
                      n.push(this.m_mapExistingEvents.get(e));
                    }
                  else {
                    const t = (0, h.l)(e);
                    console.error(
                      "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                        t.strErrorMsg,
                      t,
                    );
                  }
                  t += 1;
                }),
              );
            } catch (e) {
              const t = (0, h.l)(e);
              console.error(
                "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                  t.strErrorMsg,
                t,
              );
            }
            return n;
          });
        }
      }
      (0, n.gn)([s.LO], E.prototype, "m_mapExistingEvents", void 0),
        (0, n.gn)([s.LO], E.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, n.gn)([s.LO], E.prototype, "m_mapClanToGIDs", void 0),
        (0, n.gn)([s.LO], E.prototype, "m_mapAppIDToGIDs", void 0),
        (0, n.gn)([s.LO], E.prototype, "m_mapUpdatedApps", void 0),
        (0, n.gn)([s.aD], E.prototype, "Init", null),
        (0, n.gn)([s.aD], E.prototype, "RegisterClanEvents", null),
        (0, n.gn)(
          [s.aD],
          E.prototype,
          "InsertEventModelFromClanEventData",
          null,
        ),
        (0, n.gn)([s.aD], E.prototype, "DeleteClanEvent", null),
        (0, n.gn)([s.aD], E.prototype, "RemoveGIDFromList", null),
        (0, n.gn)([s.aD], E.prototype, "FlushEventFromCache", null);
      const A = new E();
      function G(e, t) {
        const [a, n] = (0, I.useState)(() => A.GetClanEventModel(t)),
          i = (0, I.useMemo)(() => m.K.InitFromClanID(e), [e]);
        return (
          (0, I.useEffect)(() => {
            a ||
              (A.Init(),
              A.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                i,
                t,
                0,
                !0,
              ).then(n));
          }, [i, t, a]),
          a
        );
      }
      window.g_PartnerEventStore = A;
    },
    80445: (e, t, a) => {
      a.d(t, { G1: () => i, Sq: () => o });
      var n = a(31846);
      function i(e) {
        switch (e) {
          case 29:
          case 27:
          case 2:
          case 4:
          case 5:
          case 6:
          case 8:
          case 7:
          case 9:
          case 11:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
          case 35:
          case 25:
          case 26:
          case 31:
          case 32:
          case 1:
          case 34:
            return !0;
        }
        return !1;
      }
      function o(e) {
        let t = "#PartnerEvent_" + e,
          a = (0, n.Xx)(t);
        return a != t ? a : (0, n.Xx)("#PartnerEvent_Other");
      }
    },
  },
]);
