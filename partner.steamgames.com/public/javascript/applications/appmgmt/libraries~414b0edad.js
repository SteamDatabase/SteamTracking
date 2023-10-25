/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2586],
  {
    74158: (e, r, t) => {
      t.d(r, {
        GJ: () => D,
        VK: () => F,
        cJ: () => X,
        d6: () => M,
        lV: () => u,
      });
      var i = t(45878),
        a = t(43898),
        n = t(67328),
        s = t(93067),
        o = t(76322);
      const l = i.Message;
      var c, u, _, m, d, p, B, y, b, g, S, w, F, E, f, R, M, z;
      !(function (e) {
        (e[(e.k_EUserTagReportNone = 0)] = "k_EUserTagReportNone"),
          (e[(e.k_EUserTagReportOffensive = 1)] = "k_EUserTagReportOffensive"),
          (e[(e.k_EUserTagReportMisapplied = 2)] =
            "k_EUserTagReportMisapplied"),
          (e[(e.k_EUserTagReportNotHelpful = 3)] =
            "k_EUserTagReportNotHelpful"),
          (e[(e.k_EUserTagReportSpoiler = 4)] = "k_EUserTagReportSpoiler"),
          (e[(e.k_EUserTagReportMAX = 5)] = "k_EUserTagReportMAX");
      })(c || (c = {})),
        (function (e) {
          (e[(e.k_EStoreDiscoveryQueueTypeNew = 0)] =
            "k_EStoreDiscoveryQueueTypeNew"),
            (e[(e.k_EStoreDiscoveryQueueTypeComingSoon = 1)] =
              "k_EStoreDiscoveryQueueTypeComingSoon"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommended = 2)] =
              "k_EStoreDiscoveryQueueTypeRecommended"),
            (e[(e.k_EStoreDiscoveryQueueTypeEveryNewRelease = 3)] =
              "k_EStoreDiscoveryQueueTypeEveryNewRelease"),
            (e[(e.k_EStoreDiscoveryQueueTypeMLRecommender = 5)] =
              "k_EStoreDiscoveryQueueTypeMLRecommender"),
            (e[(e.k_EStoreDiscoveryQueueTypeWishlistOnSale = 6)] =
              "k_EStoreDiscoveryQueueTypeWishlistOnSale"),
            (e[(e.k_EStoreDiscoveryQueueTypeDLC = 7)] =
              "k_EStoreDiscoveryQueueTypeDLC"),
            (e[(e.k_EStoreDiscoveryQueueTypeDLCOnSale = 8)] =
              "k_EStoreDiscoveryQueueTypeDLCOnSale"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommendedComingSoon = 9)] =
              "k_EStoreDiscoveryQueueTypeRecommendedComingSoon"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommendedFree = 10)] =
              "k_EStoreDiscoveryQueueTypeRecommendedFree"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommendedOnSale = 11)] =
              "k_EStoreDiscoveryQueueTypeRecommendedOnSale"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommendedDemos = 12)] =
              "k_EStoreDiscoveryQueueTypeRecommendedDemos"),
            (e[(e.k_EStoreDiscoveryQueueTypeDLCNewReleases = 13)] =
              "k_EStoreDiscoveryQueueTypeDLCNewReleases"),
            (e[(e.k_EStoreDiscoveryQueueTypeDLCTopSellers = 14)] =
              "k_EStoreDiscoveryQueueTypeDLCTopSellers"),
            (e[(e.k_EStoreDiscoveryQueueTypeMAX = 15)] =
              "k_EStoreDiscoveryQueueTypeMAX");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_ENewReleaseNotificationState_Initial = 0)] =
            "k_ENewReleaseNotificationState_Initial"),
            (e[(e.k_ENewReleaseNotificationState_Approved = 1)] =
              "k_ENewReleaseNotificationState_Approved"),
            (e[(e.k_ENewReleaseNotificationState_InProgress = 2)] =
              "k_ENewReleaseNotificationState_InProgress"),
            (e[(e.k_ENewReleaseNotificationState_Completed = 3)] =
              "k_ENewReleaseNotificationState_Completed"),
            (e[(e.k_ENewReleaseNotificationState_Canceled = 4)] =
              "k_ENewReleaseNotificationState_Canceled");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ENewReleaseNotificationType_Released = 0)] =
            "k_ENewReleaseNotificationType_Released"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedFromEarlyAccess = 1)] =
              "k_ENewReleaseNotificationType_ReleasedFromEarlyAccess"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedAsEarlyAccess = 2)] =
              "k_ENewReleaseNotificationType_ReleasedAsEarlyAccess"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedPreSale = 3)] =
              "k_ENewReleaseNotificationType_ReleasedPreSale");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EForceFeatureTarget_Invalid = 0)] =
            "k_EForceFeatureTarget_Invalid"),
            (e[(e.k_EForceFeatureTarget_AppOwners = 1)] =
              "k_EForceFeatureTarget_AppOwners"),
            (e[(e.k_EForceFeatureTarget_MinPlayTime = 2)] =
              "k_EForceFeatureTarget_MinPlayTime"),
            (e[(e.k_EForceFeatureTarget_AppFollower = 4)] =
              "k_EForceFeatureTarget_AppFollower"),
            (e[(e.k_EForceFeatureTarget_CreatorFollower = 8)] =
              "k_EForceFeatureTarget_CreatorFollower"),
            (e[(e.k_EForceFeatureTarget_OwnSomeCreatorApp = 16)] =
              "k_EForceFeatureTarget_OwnSomeCreatorApp"),
            (e[(e.k_EForceFeatureTarget_EarlierLastPlayedApp = 32)] =
              "k_EForceFeatureTarget_EarlierLastPlayedApp"),
            (e[(e.k_EForceFeatureTarget_LaterLastPlayedApp = 64)] =
              "k_EForceFeatureTarget_LaterLastPlayedApp"),
            (e[(e.k_EForceFeatureTarget_FollowSomeCreatorApp = 128)] =
              "k_EForceFeatureTarget_FollowSomeCreatorApp"),
            (e[(e.k_EForceFeatureTarget_PlaySomeCreatorApp = 256)] =
              "k_EForceFeatureTarget_PlaySomeCreatorApp"),
            (e[(e.k_EForceFeatureTarget_ExcludeAppOwner = 512)] =
              "k_EForceFeatureTarget_ExcludeAppOwner"),
            (e[(e.k_EForceFeatureTarget_AppWishList = 1024)] =
              "k_EForceFeatureTarget_AppWishList"),
            (e[(e.k_EForceFeatureTarget_SteamworksPublishers = 2048)] =
              "k_EForceFeatureTarget_SteamworksPublishers"),
            (e[(e.k_EForceFeatureTarget_MaxPlayTime = 4096)] =
              "k_EForceFeatureTarget_MaxPlayTime");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EForceFeatureFilter_None = 0)] =
            "k_EForceFeatureFilter_None"),
            (e[(e.k_EForceFeatureFilter_IR_TopN = 1)] =
              "k_EForceFeatureFilter_IR_TopN"),
            (e[(e.k_EForceFeatureFilter_WishList = 2)] =
              "k_EForceFeatureFilter_WishList");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_EDQCohort_None = 0)] = "k_EDQCohort_None"),
            (e[(e.k_EDQCohort_RecommendedForYouMay2019 = 1)] =
              "k_EDQCohort_RecommendedForYouMay2019"),
            (e[(e.k_EDQCohort_ExperimentalRecommenderMarch2019 = 2)] =
              "k_EDQCohort_ExperimentalRecommenderMarch2019"),
            (e[(e.k_EDQCohort_Sept2019Experiment = 3)] =
              "k_EDQCohort_Sept2019Experiment"),
            (e[(e.k_EDQCohort_Sept2019ComingSoon = 4)] =
              "k_EDQCohort_Sept2019ComingSoon"),
            (e[(e.k_EDQCohort_Sept2019Control = 5)] =
              "k_EDQCohort_Sept2019Control"),
            (e[(e.k_EDQCohort_Sept2019NoDLC = 6)] =
              "k_EDQCohort_Sept2019NoDLC"),
            (e[(e.k_EDQCohort_Sept2019NoComingSoon = 7)] =
              "k_EDQCohort_Sept2019NoComingSoon");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_EFeaturedAppTypeUpdateRound = 0)] =
            "k_EFeaturedAppTypeUpdateRound"),
            (e[(e.k_EFeaturedAppTypeLaunchRound = 1)] =
              "k_EFeaturedAppTypeLaunchRound"),
            (e[(e.k_EFeaturedAppTypeMAX = 2)] = "k_EFeaturedAppTypeMAX");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_EFeaturedAppBonusRoundGrantReason_ValveDiscretion = 0)] =
            "k_EFeaturedAppBonusRoundGrantReason_ValveDiscretion"),
            (e[(e.k_EFeaturedAppBonusRoundGrantReason_ReachedTopSellers = 1)] =
              "k_EFeaturedAppBonusRoundGrantReason_ReachedTopSellers");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_ETesterStatusNone = 0)] = "k_ETesterStatusNone"),
            (e[(e.k_ETesterStatusPending = 1)] = "k_ETesterStatusPending"),
            (e[(e.k_ETesterStatusInvited = 2)] = "k_ETesterStatusInvited"),
            (e[(e.k_ETesterStatusGranted = 3)] = "k_ETesterStatusGranted");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EAppReportType_Invalid = 0)] = "k_EAppReportType_Invalid"),
            (e[(e.k_EAppReportType_Scam = 1)] = "k_EAppReportType_Scam"),
            (e[(e.k_EAppReportType_Malware = 2)] = "k_EAppReportType_Malware"),
            (e[(e.k_EAppReportType_HateSpeech = 3)] =
              "k_EAppReportType_HateSpeech"),
            (e[(e.k_EAppReportType_Pornography = 4)] =
              "k_EAppReportType_Pornography"),
            (e[(e.k_EAppReportType_NonLabeledAdultContent = 5)] =
              "k_EAppReportType_NonLabeledAdultContent"),
            (e[(e.k_EAppReportType_Libelous = 6)] =
              "k_EAppReportType_Libelous"),
            (e[(e.k_EAppReportType_Offensive = 7)] =
              "k_EAppReportType_Offensive"),
            (e[(e.k_EAppReportType_ExploitsChildren = 8)] =
              "k_EAppReportType_ExploitsChildren"),
            (e[(e.k_EAppReportType_MtxWithNonSteamWalletPaymentMethods = 9)] =
              "k_EAppReportType_MtxWithNonSteamWalletPaymentMethods"),
            (e[(e.k_EAppReportType_CopyrightViolation = 10)] =
              "k_EAppReportType_CopyrightViolation"),
            (e[(e.k_EAppReportType_ViolatesLaws = 11)] =
              "k_EAppReportType_ViolatesLaws"),
            (e[(e.k_EAppReportType_Other = 12)] = "k_EAppReportType_Other"),
            (e[(e.k_EAppReportType_Broken = 13)] = "k_EAppReportType_Broken");
        })(S || (S = {})),
        (function (e) {
          (e[(e.k_EUserReviewScorePreference_Unset = 0)] =
            "k_EUserReviewScorePreference_Unset"),
            (e[(e.k_EUserReviewScorePreference_IncludeAll = 1)] =
              "k_EUserReviewScorePreference_IncludeAll"),
            (e[(e.k_EUserReviewScorePreference_ExcludeBombs = 2)] =
              "k_EUserReviewScorePreference_ExcludeBombs");
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_EStoreUsabilityEvent_MainCapNav = 1)] =
            "k_EStoreUsabilityEvent_MainCapNav"),
            (e[(e.k_EStoreUsabilityEvent_SpecialOffersNav = 2)] =
              "k_EStoreUsabilityEvent_SpecialOffersNav"),
            (e[(e.k_EStoreUsabilityEvent_TrendingFriendsNav = 3)] =
              "k_EStoreUsabilityEvent_TrendingFriendsNav"),
            (e[(e.k_EStoreUsabilityEvent_RecentlyUpdatedNav = 4)] =
              "k_EStoreUsabilityEvent_RecentlyUpdatedNav"),
            (e[(e.k_EStoreUsabilityEvent_PopularNewReleaseTab = 5)] =
              "k_EStoreUsabilityEvent_PopularNewReleaseTab"),
            (e[(e.k_EStoreUsabilityEvent_TopSellersTab = 6)] =
              "k_EStoreUsabilityEvent_TopSellersTab"),
            (e[(e.k_EStoreUsabilityEvent_UpcomingTab = 7)] =
              "k_EStoreUsabilityEvent_UpcomingTab"),
            (e[(e.k_EStoreUsabilityEvent_SpecialsTab = 8)] =
              "k_EStoreUsabilityEvent_SpecialsTab"),
            (e[(e.k_EStoreUsabilityEvent_UnderTenNav = 9)] =
              "k_EStoreUsabilityEvent_UnderTenNav"),
            (e[(e.k_EStoreUsabilityEvent_IRNav = 10)] =
              "k_EStoreUsabilityEvent_IRNav"),
            (e[(e.k_EStoreUsabilityEvent_CommunityRecommendationsNav = 11)] =
              "k_EStoreUsabilityEvent_CommunityRecommendationsNav"),
            (e[(e.k_EStoreUsabilityEvent_DeepDiveNav = 12)] =
              "k_EStoreUsabilityEvent_DeepDiveNav"),
            (e[(e.k_EStoreUsabilityEvent_App_MoreLikeThisScroll = 1e3)] =
              "k_EStoreUsabilityEvent_App_MoreLikeThisScroll"),
            (e[(e.k_EStoreUsabilityEvent_App_ViewTags = 1001)] =
              "k_EStoreUsabilityEvent_App_ViewTags"),
            (e[(e.k_EStoreUsabilityEvent_App_AllLanguages = 1002)] =
              "k_EStoreUsabilityEvent_App_AllLanguages"),
            (e[(e.k_EStoreUsabilityEvent_App_DeckLearnMore = 1003)] =
              "k_EStoreUsabilityEvent_App_DeckLearnMore"),
            (e[(e.k_EStoreUsabilityEvent_App_BroadcastPlayed = 1004)] =
              "k_EStoreUsabilityEvent_App_BroadcastPlayed"),
            (e[(e.k_EStoreUsabilityEvent_App_BroadcastHidden = 1005)] =
              "k_EStoreUsabilityEvent_App_BroadcastHidden"),
            (e[(e.k_EStoreUsabilityEvent_App_BroadcastMiniClosed = 1006)] =
              "k_EStoreUsabilityEvent_App_BroadcastMiniClosed");
        })(F || (F = {})),
        (function (e) {
          (e[(e.k_EStoreUsabilityFrontPageScroll_Invalid = 0)] =
            "k_EStoreUsabilityFrontPageScroll_Invalid"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_TrendingFriends = 1)] =
              "k_EStoreUsabilityFrontPageScroll_TrendingFriends"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_DiscoveryQueue = 20)] =
              "k_EStoreUsabilityFrontPageScroll_DiscoveryQueue"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_Curators = 40)] =
              "k_EStoreUsabilityFrontPageScroll_Curators"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_RecentUpdated = 60)] =
              "k_EStoreUsabilityFrontPageScroll_RecentUpdated"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_TabGroup = 80)] =
              "k_EStoreUsabilityFrontPageScroll_TabGroup"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_UnderTen = 100)] =
              "k_EStoreUsabilityFrontPageScroll_UnderTen"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_KeepScrolling = 120)] =
              "k_EStoreUsabilityFrontPageScroll_KeepScrolling"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_NoMoreContent = 1e3)] =
              "k_EStoreUsabilityFrontPageScroll_NoMoreContent");
        })(E || (E = {})),
        (function (e) {
          (e[(e.k_EPartnerLinkTrackingStoreLocation_Invalid = 0)] =
            "k_EPartnerLinkTrackingStoreLocation_Invalid"),
            (e[(e.k_EPartnerLinkTrackingStoreLocation_AppPage = 1)] =
              "k_EPartnerLinkTrackingStoreLocation_AppPage"),
            (e[(e.k_EPartnerLinkTrackingStoreLocation_PackagePage = 2)] =
              "k_EPartnerLinkTrackingStoreLocation_PackagePage"),
            (e[(e.k_EPartnerLinkTrackingStoreLocation_AnnouncementPage = 3)] =
              "k_EPartnerLinkTrackingStoreLocation_AnnouncementPage"),
            (e[(e.k_EPartnerLinkTrackingStoreLocation_SalePage = 4)] =
              "k_EPartnerLinkTrackingStoreLocation_SalePage");
        })(f || (f = {})),
        (function (e) {
          (e[(e.k_EPartnerLinkTrackingBackfillSource_None = 0)] =
            "k_EPartnerLinkTrackingBackfillSource_None"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Web = 1)] =
              "k_EPartnerLinkTrackingBackfillSource_Web"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Mobile = 2)] =
              "k_EPartnerLinkTrackingBackfillSource_Mobile"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Desktop = 3)] =
              "k_EPartnerLinkTrackingBackfillSource_Desktop");
        })(R || (R = {}));
      class T extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.activation_code || a.aR(T.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  activation_code: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  purchase_platform: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  is_request_from_client: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Request";
        }
      }
      class k extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.transactionid || a.aR(k.M()),
            l.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  transactionid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  packageid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  purchase_status: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  line_items: { n: 18, c: h, r: !0, q: !0 },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class h extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.packageid || a.aR(h.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  packageid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class v extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.purchase_result_details || a.aR(v.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: k },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Response";
        }
      }
      class W extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.language || a.aR(W.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Request";
        }
      }
      class U extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.tags || a.aR(U.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { tags: { n: 1, c: O, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class O extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.tagid || a.aR(O.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class C extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.language || a.aR(C.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class j extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.tags || a.aR(j.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { tags: { n: 1, c: A, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class A extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.tagid || a.aR(A.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  english_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  name: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  normalized_name: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class D extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.language || a.aR(D.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  have_version_hash: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Request";
        }
      }
      class I extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.version_hash || a.aR(I.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  version_hash: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  tags: { n: 2, c: N, r: !0, q: !0 },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response";
        }
      }
      class N extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.tagid || a.aR(N.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(N.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response_Tag";
        }
      }
      class P extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.os_win || a.aR(P.M()),
            l.initialize(this, e, 0, -1, [10, 16], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  os_win: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  os_mac: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  os_linux: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_dlc: { n: 14, br: a.FE.readBool, bw: a.Xc.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class X extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.queue_type || a.aR(X.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  rebuild_queue: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  settings_changed: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  settings: { n: 5, c: P },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  store_page_filter: { n: 12, c: s._v },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class L extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appids || a.aR(L.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  settings: { n: 3, c: P },
                  skipped: { n: 4, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  exhausted: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class x extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.queue_type || a.aR(x.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  store_page_filter: { n: 2, c: s._v },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Request";
        }
      }
      class Q extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.country_code || a.aR(Q.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  country_code: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  settings: { n: 2, c: P },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class G extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.queue_type || a.aR(G.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  store_page_filter: { n: 3, c: s._v },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Request";
        }
      }
      class q extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class K extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.appid || a.aR(K.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  store_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  beta_appid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(K.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Request";
        }
      }
      class V extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.owned || a.aR(V.M()),
            l.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  owned: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  wishlist: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  ignored: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  following: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  queues: { n: 10, c: H, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  beta_status: { n: 12, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(V.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class H extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.type || a.aR(H.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  skipped: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  items_remaining: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  next_appid: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  experimental_cohort: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class $ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.primary_language || a.aR($.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  primary_language: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  platform_mac: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  platform_linux: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  additional_languages: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class J extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.tags_to_exclude || a.aR(J.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { tags_to_exclude: { n: 1, c: Y, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class Y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.tagid || a.aR(Y.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  timestamp_added: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class Z extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Request";
        }
      }
      class ee extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.preferences || a.aR(ee.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  preferences: { n: 1, c: $ },
                  tag_preferences: { n: 2, c: J },
                  content_descriptor_preferences: { n: 3, c: o.cF },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = a.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class re extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.num_apps || a.aR(re.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  num_apps: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  num_top_friends: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Request";
        }
      }
      class te extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.trending_apps || a.aR(te.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { trending_apps: { n: 1, c: ie, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class ie extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.appid || a.aR(ie.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class ae extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.accountid || a.aR(ae.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  browserid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  backfill_source: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_MigratePartnerLinkTracking_Notification";
        }
      }
      class ne extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || a.aR(ne.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  feedback: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Request";
        }
      }
      class se extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class oe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.appid || a.aR(oe.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Request";
        }
      }
      class le extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.prompt || a.aR(le.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  prompt: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = a.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(le.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class ce extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.steamid || a.aR(ce.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  queue_type: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  store_page_filter: { n: 3, c: s._v },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Request";
        }
      }
      class ue extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appids || a.aR(ue.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Response";
        }
      }
      class _e extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.preferences || a.aR(_e.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  preferences: { n: 1, c: $ },
                  tag_preferences: { n: 2, c: J },
                  content_descriptor_preferences: { n: 3, c: o.cF },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = a.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_e.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      !(function (e) {
        (e.RegisterCDKey = function (e, r) {
          return e.SendMsg("Store.RegisterCDKey#1", (0, n.MD)(T, r), v, {
            ePrivilege: 1,
          });
        }),
          (e.GetMostPopularTags = function (e, r) {
            return e.SendMsg("Store.GetMostPopularTags#1", (0, n.MD)(W, r), U, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, r) {
            return e.SendMsg(
              "Store.GetLocalizedNameForTags#1",
              (0, n.MD)(C, r),
              j,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTagList = function (e, r) {
            return e.SendMsg("Store.GetTagList#1", (0, n.MD)(D, r), I, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", (0, n.MD)(X, r), L, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, r) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSettings#1",
              (0, n.MD)(x, r),
              Q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SkipDiscoveryQueueItem = function (e, r) {
            return e.SendMsg(
              "Store.SkipDiscoveryQueueItem#1",
              (0, n.MD)(G, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserGameInterestState = function (e, r) {
            return e.SendMsg(
              "Store.GetUserGameInterestState#1",
              (0, n.MD)(K, r),
              V,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, r) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSkippedApps#1",
              (0, n.MD)(ce, r),
              ue,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetStorePreferences = function (e, r) {
            return e.SendMsg(
              "Store.GetStorePreferences#1",
              (0, n.MD)(Z, r),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTrendingAppsAmongFriends = function (e, r) {
            return e.SendMsg(
              "Store.GetTrendingAppsAmongFriends#1",
              (0, n.MD)(re, r),
              te,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigratePartnerLinkTracking = function (e, r) {
            return e.SendNotification(
              "Store.MigratePartnerLinkTracking#1",
              (0, n.MD)(ae, r),
              { ePrivilege: 1 },
            );
          }),
          (e.SetCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.SetCompatibilityFeedback#1",
              (0, n.MD)(ne, r),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              (0, n.MD)(oe, r),
              le,
              { ePrivilege: 1 },
            );
          });
      })(M || (M = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: _e,
          };
        })(z || (z = {}));
    },
  },
]);
