/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3515],
  {
    75487: (e, t, r) => {
      r.d(t, {
        $J: () => Re,
        BL: () => X,
        Gr: () => H,
        J6: () => qe,
        KP: () => Ie,
        QV: () => a,
        Xm: () => g,
        fe: () => ee,
        jd: () => he,
        ku: () => fe,
        nd: () => z,
        pS: () => Pe,
      });
      var i,
        a,
        s,
        n,
        o,
        l,
        c,
        u,
        m,
        _,
        d,
        B,
        g,
        p,
        y,
        b,
        M,
        w,
        S,
        f,
        z,
        R,
        T,
        v = r(80613),
        F = r.n(v),
        h = r(89068),
        k = r(56545),
        E = r(8114),
        W = r(15161),
        j = r(36003);
      !(function (e) {
        (e[(e.k_EUserTagReportNone = 0)] = "k_EUserTagReportNone"),
          (e[(e.k_EUserTagReportOffensive = 1)] = "k_EUserTagReportOffensive"),
          (e[(e.k_EUserTagReportMisapplied = 2)] =
            "k_EUserTagReportMisapplied"),
          (e[(e.k_EUserTagReportNotHelpful = 3)] =
            "k_EUserTagReportNotHelpful"),
          (e[(e.k_EUserTagReportSpoiler = 4)] = "k_EUserTagReportSpoiler"),
          (e[(e.k_EUserTagReportMAX = 5)] = "k_EUserTagReportMAX");
      })(i || (i = {})),
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
            (e[(e.k_EStoreDiscoveryQueueTypeDLCUpcoming = 15)] =
              "k_EStoreDiscoveryQueueTypeDLCUpcoming"),
            (e[(e.k_EStoreDiscoveryQueueTypeMAX = 16)] =
              "k_EStoreDiscoveryQueueTypeMAX");
        })(a || (a = {})),
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
        })(s || (s = {})),
        (function (e) {
          (e[(e.k_ENewReleaseNotificationType_Released = 0)] =
            "k_ENewReleaseNotificationType_Released"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedFromEarlyAccess = 1)] =
              "k_ENewReleaseNotificationType_ReleasedFromEarlyAccess"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedAsEarlyAccess = 2)] =
              "k_ENewReleaseNotificationType_ReleasedAsEarlyAccess"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedPreSale = 3)] =
              "k_ENewReleaseNotificationType_ReleasedPreSale"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedDemo = 4)] =
              "k_ENewReleaseNotificationType_ReleasedDemo");
        })(n || (n = {})),
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
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_EForceFeatureFilter_None = 0)] =
            "k_EForceFeatureFilter_None"),
            (e[(e.k_EForceFeatureFilter_IR_TopN = 1)] =
              "k_EForceFeatureFilter_IR_TopN"),
            (e[(e.k_EForceFeatureFilter_WishList = 2)] =
              "k_EForceFeatureFilter_WishList");
        })(l || (l = {})),
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
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EFeaturedAppTypeUpdateRound = 0)] =
            "k_EFeaturedAppTypeUpdateRound"),
            (e[(e.k_EFeaturedAppTypeLaunchRound = 1)] =
              "k_EFeaturedAppTypeLaunchRound"),
            (e[(e.k_EFeaturedAppTypeMAX = 2)] = "k_EFeaturedAppTypeMAX");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EFeaturedAppBonusRoundGrantReason_ValveDiscretion = 0)] =
            "k_EFeaturedAppBonusRoundGrantReason_ValveDiscretion"),
            (e[(e.k_EFeaturedAppBonusRoundGrantReason_ReachedTopSellers = 1)] =
              "k_EFeaturedAppBonusRoundGrantReason_ReachedTopSellers");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_ETesterStatusNone = 0)] = "k_ETesterStatusNone"),
            (e[(e.k_ETesterStatusPending = 1)] = "k_ETesterStatusPending"),
            (e[(e.k_ETesterStatusInvited = 2)] = "k_ETesterStatusInvited"),
            (e[(e.k_ETesterStatusGranted = 3)] = "k_ETesterStatusGranted"),
            (e[(e.k_ETesterStatusExpired = 4)] = "k_ETesterStatusExpired");
        })(_ || (_ = {})),
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
            (e[(e.k_EAppReportType_Broken = 13)] = "k_EAppReportType_Broken"),
            (e[(e.k_EAppReportType_AIContentReport = 14)] =
              "k_EAppReportType_AIContentReport");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EUserReviewScorePreference_Unset = 0)] =
            "k_EUserReviewScorePreference_Unset"),
            (e[(e.k_EUserReviewScorePreference_IncludeAll = 1)] =
              "k_EUserReviewScorePreference_IncludeAll"),
            (e[(e.k_EUserReviewScorePreference_ExcludeBombs = 2)] =
              "k_EUserReviewScorePreference_ExcludeBombs");
        })(B || (B = {})),
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
            (e[(e.k_EStoreUsabilityEvent_VRNav = 13)] =
              "k_EStoreUsabilityEvent_VRNav"),
            (e[(e.k_EStoreUsabilityEvent_DeveloperFollowedNav = 14)] =
              "k_EStoreUsabilityEvent_DeveloperFollowedNav"),
            (e[(e.k_EStoreUsabilityEvent_TrendingFree = 15)] =
              "k_EStoreUsabilityEvent_TrendingFree"),
            (e[(e.k_EStoreUsabilityEvent_HeroNav = 16)] =
              "k_EStoreUsabilityEvent_HeroNav"),
            (e[(e.k_EStoreUsabilityEvent_DeepDiscountsNav = 17)] =
              "k_EStoreUsabilityEvent_DeepDiscountsNav"),
            (e[(e.k_EStoreUsabilityEvent_ContentHubsNav = 18)] =
              "k_EStoreUsabilityEvent_ContentHubsNav"),
            (e[(e.k_EStoreUsabilityEvent_TabGridView = 19)] =
              "k_EStoreUsabilityEvent_TabGridView"),
            (e[(e.k_EStoreUsabilityEvent_TabListView = 20)] =
              "k_EStoreUsabilityEvent_TabListView"),
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
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EStoreUsabilityFrontPageScroll_Invalid = 0)] =
            "k_EStoreUsabilityFrontPageScroll_Invalid"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_TrendingFriends = 1)] =
              "k_EStoreUsabilityFrontPageScroll_TrendingFriends"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_DiscoveryQueue = 20)] =
              "k_EStoreUsabilityFrontPageScroll_DiscoveryQueue"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_Tier2 = 30)] =
              "k_EStoreUsabilityFrontPageScroll_Tier2"),
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
        })(p || (p = {})),
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
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_EPartnerLinkTrackingBackfillSource_None = 0)] =
            "k_EPartnerLinkTrackingBackfillSource_None"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Web = 1)] =
              "k_EPartnerLinkTrackingBackfillSource_Web"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Mobile = 2)] =
              "k_EPartnerLinkTrackingBackfillSource_Mobile"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Desktop = 3)] =
              "k_EPartnerLinkTrackingBackfillSource_Desktop");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EPlaytestInviteStatus_None = 0)] =
            "k_EPlaytestInviteStatus_None"),
            (e[(e.k_EPlaytestInviteStatus_Invited = 1)] =
              "k_EPlaytestInviteStatus_Invited"),
            (e[(e.k_EPlaytestInviteStatus_Rejected = 2)] =
              "k_EPlaytestInviteStatus_Rejected"),
            (e[(e.k_EPlaytestInviteStatus_Accepted = 3)] =
              "k_EPlaytestInviteStatus_Accepted"),
            (e[(e.k_EPlaytestInviteStatus_Archived = 4)] =
              "k_EPlaytestInviteStatus_Archived");
        })(M || (M = {})),
        (function (e) {
          (e[(e.k_EPlaytestMembershipSource_None = 0)] =
            "k_EPlaytestMembershipSource_None"),
            (e[(e.k_EPlaytestMembershipSource_Request = 1)] =
              "k_EPlaytestMembershipSource_Request"),
            (e[(e.k_EPlaytestMembershipSource_Invite = 2)] =
              "k_EPlaytestMembershipSource_Invite"),
            (e[(e.k_EPlaytestMembershipSource_PurchasedInvite = 3)] =
              "k_EPlaytestMembershipSource_PurchasedInvite"),
            (e[(e.k_EPlaytestMembershipSource_Purchase = 4)] =
              "k_EPlaytestMembershipSource_Purchase");
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_EPlaytestResetStatusNone = 0)] =
            "k_EPlaytestResetStatusNone"),
            (e[(e.k_EPlaytestResetStatusArchivingInvites = 1)] =
              "k_EPlaytestResetStatusArchivingInvites"),
            (e[(e.k_EPlaytestResetStatusRemovingPendingSignups = 2)] =
              "k_EPlaytestResetStatusRemovingPendingSignups"),
            (e[(e.k_EPlaytestResetStatusRemovingParticipants = 3)] =
              "k_EPlaytestResetStatusRemovingParticipants"),
            (e[(e.k_EPlaytestResetStatusRevokingCDKeys = 4)] =
              "k_EPlaytestResetStatusRevokingCDKeys"),
            (e[(e.k_EPlaytestResetStatusCleanup = 5)] =
              "k_EPlaytestResetStatusCleanup"),
            (e[(e.k_EPlaytestResetStatusFailed = 6)] =
              "k_EPlaytestResetStatusFailed"),
            (e[(e.k_EPlaytestResetStatusComplete = 7)] =
              "k_EPlaytestResetStatusComplete");
        })(S || (S = {})),
        (function (e) {
          (e[(e.k_EPlaytestLicenseChangeType_Unknown = 0)] =
            "k_EPlaytestLicenseChangeType_Unknown"),
            (e[(e.k_EPlaytestLicenseChangeType_Add = 1)] =
              "k_EPlaytestLicenseChangeType_Add"),
            (e[(e.k_EPlaytestLicenseChangeType_Remove = 2)] =
              "k_EPlaytestLicenseChangeType_Remove"),
            (e[(e.k_EPlaytestLicenseChangeType_Update = 3)] =
              "k_EPlaytestLicenseChangeType_Update");
        })(f || (f = {}));
      class U extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.activation_code || h.Sg(U.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  activation_code: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  purchase_platform: {
                    n: 2,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  is_request_from_client: {
                    n: 3,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = h.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Request";
        }
      }
      class q extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.transactionid || h.Sg(q.M()),
            v.Message.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  transactionid: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  packageid: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  purchase_status: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  line_items: { n: 18, c: O, r: !0, q: !0 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = h.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class O extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.packageid || h.Sg(O.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  packageid: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  appid: { n: 2, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = h.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class I extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.purchase_result_details || h.Sg(I.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: q },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = h.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Response";
        }
      }
      class C extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.language || h.Sg(C.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  language: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  country_code: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  favor_rarer_tags: {
                    n: 4,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Request";
        }
      }
      class P extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.tags || h.Sg(P.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { tags: { n: 1, c: N, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = h.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Response";
        }
      }
      class N extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.tagid || h.Sg(N.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  tagid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  name: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  weight: { n: 3, br: h.qM.readFloat, bw: h.gp.writeFloat },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = h.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetRecommendedTagsForUser_Response_Tag";
        }
      }
      class A extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.language || h.Sg(A.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  language: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = h.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Request";
        }
      }
      class x extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.tags || h.Sg(x.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { tags: { n: 1, c: D, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = h.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class D extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.tagid || h.Sg(D.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  tagid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  name: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = h.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class G extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.language || h.Sg(G.M()),
            v.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  language: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = h.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class L extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.tags || h.Sg(L.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { tags: { n: 1, c: Q, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = h.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class Q extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.tagid || h.Sg(Q.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  tagid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  english_name: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  name: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                  normalized_name: {
                    n: 4,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = h.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class H extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.language || h.Sg(H.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  language: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                  have_version_hash: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = h.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Request";
        }
      }
      class V extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.version_hash || h.Sg(V.M()),
            v.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  version_hash: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  tags: { n: 2, c: K, r: !0, q: !0 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = h.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response";
        }
      }
      class K extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.tagid || h.Sg(K.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  tagid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  name: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = h.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response_Tag";
        }
      }
      class $ extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.os_win || h.Sg($.M()),
            v.Message.initialize(this, e, 0, -1, [10, 16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  os_win: { n: 4, br: h.qM.readBool, bw: h.gp.writeBool },
                  os_mac: { n: 5, br: h.qM.readBool, bw: h.gp.writeBool },
                  os_linux: { n: 6, br: h.qM.readBool, bw: h.gp.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  exclude_dlc: { n: 14, br: h.qM.readBool, bw: h.gp.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = h.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT($.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class X extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.queue_type || h.Sg(X.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  queue_type: { n: 1, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  country_code: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  rebuild_queue: {
                    n: 3,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  settings_changed: {
                    n: 4,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  settings: { n: 5, c: $ },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  store_page_filter: { n: 12, c: E.S7 },
                  context: { n: 13, c: W.TS },
                  data_request: { n: 14, c: W.gn },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = h.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class J extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.appids || h.Sg(J.M()),
            v.Message.initialize(this, e, 0, -1, [1, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  settings: { n: 3, c: $ },
                  skipped: { n: 4, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                  exhausted: { n: 5, br: h.qM.readBool, bw: h.gp.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  store_items: { n: 8, c: W.vB, r: !0, q: !0 },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = h.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class Y extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.queue_type || h.Sg(Y.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  queue_type: { n: 1, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  store_page_filter: { n: 2, c: E.S7 },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = h.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Request";
        }
      }
      class Z extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.country_code || h.Sg(Z.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  country_code: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  settings: { n: 2, c: $ },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = h.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class ee extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.queue_type || h.Sg(ee.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  queue_type: { n: 1, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  appid: { n: 2, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  store_page_filter: { n: 3, c: E.S7 },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = h.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Request";
        }
      }
      class te extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class re extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.appid || h.Sg(re.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  store_appid: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  beta_appid: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = h.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Request";
        }
      }
      class ie extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.owned || h.Sg(ie.M()),
            v.Message.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  owned: { n: 1, br: h.qM.readBool, bw: h.gp.writeBool },
                  wishlist: { n: 2, br: h.qM.readBool, bw: h.gp.writeBool },
                  ignored: { n: 3, br: h.qM.readBool, bw: h.gp.writeBool },
                  following: { n: 4, br: h.qM.readBool, bw: h.gp.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: h.qM.readEnum,
                    pbr: h.qM.readPackedEnum,
                    bw: h.gp.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: h.qM.readEnum,
                    pbr: h.qM.readPackedEnum,
                    bw: h.gp.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: h.qM.readInt32,
                    pbr: h.qM.readPackedInt32,
                    bw: h.gp.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  queues: { n: 10, c: ae, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  beta_status: { n: 12, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = h.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class ae extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.type || h.Sg(ae.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  type: { n: 1, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  skipped: { n: 2, br: h.qM.readBool, bw: h.gp.writeBool },
                  items_remaining: {
                    n: 3,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  next_appid: {
                    n: 4,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  experimental_cohort: {
                    n: 5,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = h.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class se extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.steamid || h.Sg(se.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = h.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetGamesFollowed_Request";
        }
      }
      class ne extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appids || h.Sg(ne.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = h.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetGamesFollowed_Response";
        }
      }
      class oe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || h.Sg(oe.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = h.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetGamesFollowedCount_Request";
        }
      }
      class le extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.followed_game_count || h.Sg(le.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  followed_game_count: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = h.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetGamesFollowedCount_Response";
        }
      }
      class ce extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.appid || h.Sg(ce.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  report_type: { n: 2, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  report: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = h.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Request";
        }
      }
      class ue extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ue();
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Response";
        }
      }
      class me extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.primary_language || h.Sg(me.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  primary_language: {
                    n: 1,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  platform_mac: { n: 4, br: h.qM.readBool, bw: h.gp.writeBool },
                  platform_linux: {
                    n: 5,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                  additional_languages: {
                    n: 13,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = h.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class _e extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.tags_to_exclude || h.Sg(_e.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: { tags_to_exclude: { n: 1, c: de, r: !0, q: !0 } },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = h.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class de extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.tagid || h.Sg(de.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  tagid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  name: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  timestamp_added: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = h.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class Be extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.country_code || h.Sg(Be.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  country_code: {
                    n: 1,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = h.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Request";
        }
      }
      class ge extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.preferences || h.Sg(ge.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  preferences: { n: 1, c: me },
                  tag_preferences: { n: 2, c: _e },
                  content_descriptor_preferences: { n: 3, c: j.u2 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = h.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class pe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.num_apps || h.Sg(pe.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  num_apps: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  num_top_friends: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = h.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Request";
        }
      }
      class ye extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.trending_apps || h.Sg(ye.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: { trending_apps: { n: 1, c: be, r: !0, q: !0 } },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = h.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class be extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.appid || h.Sg(be.M()),
            v.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint64String,
                    pbr: h.qM.readPackedUint64String,
                    bw: h.gp.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = h.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class Me extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.packages_to_reserve || h.Sg(Me.M()),
            v.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  packages_to_reserve: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                  packages_to_unreserve: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = h.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Request";
        }
      }
      class we extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.reservation_status || h.Sg(we.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: { reservation_status: { n: 1, c: j.ke, r: !0, q: !0 } },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = h.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Response";
        }
      }
      class Se extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.edistributor || h.Sg(Se.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  edistributor: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  rtime_estimated_notification: {
                    n: 4,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  localization_token: {
                    n: 5,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  accountid: {
                    n: 6,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  rtime_created: {
                    n: 7,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = h.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CReservationPositionMessage";
        }
      }
      class fe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.settings || h.Sg(fe.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { settings: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = h.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Request";
        }
      }
      class ze extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ze();
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Response";
        }
      }
      class Re extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.edistributor || h.Sg(Re.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  edistributor: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = h.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Request";
        }
      }
      class Te extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Te();
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Response";
        }
      }
      class ve extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ve();
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Request";
        }
      }
      class Fe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.settings || h.Sg(Fe.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: { settings: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = h.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Response";
        }
      }
      class he extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new he();
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReloadAllReservationPositionMessages_Notification";
        }
      }
      class ke extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.accountid || h.Sg(ke.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  accountid: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  browserid: {
                    n: 2,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  backfill_source: {
                    n: 3,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = h.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_MigratePartnerLinkTracking_Notification";
        }
      }
      class Ee extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.appid || h.Sg(Ee.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  feedback: { n: 2, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = h.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Request";
        }
      }
      class We extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class je extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.appid || h.Sg(je.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = h.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Request";
        }
      }
      class Ue extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.prompt || h.Sg(Ue.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  prompt: { n: 1, br: h.qM.readBool, bw: h.gp.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: h.qM.readEnum,
                    bw: h.gp.writeEnum,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = h.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class qe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.appid || h.Sg(qe.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  allow_late_firing: {
                    n: 3,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = h.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Request";
        }
      }
      class Oe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.can_fire || h.Sg(Oe.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  can_fire: {
                    n: 1,
                    d: !1,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  time_staged: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  demo_release_date: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = h.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Response";
        }
      }
      class Ie extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.appid || h.Sg(Ie.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  allow_late_firing: {
                    n: 3,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = h.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Request";
        }
      }
      class Ce extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ce();
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Response";
        }
      }
      class Pe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.steamid || h.Sg(Pe.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  queue_type: { n: 2, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  store_page_filter: { n: 3, c: E.S7 },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = h.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Request";
        }
      }
      class Ne extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.appids || h.Sg(Ne.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = h.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Response";
        }
      }
      class Ae extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.preferences || h.Sg(Ae.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  preferences: { n: 1, c: me },
                  tag_preferences: { n: 2, c: _e },
                  content_descriptor_preferences: { n: 3, c: j.u2 },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = h.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ae.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      class xe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.appid || h.Sg(xe.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  steamid: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = h.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_RequestInvite_Request";
        }
      }
      class De extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.invites_remaining || h.Sg(De.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  invites_remaining: {
                    n: 1,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  status: { n: 2, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = h.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_RequestInvite_Response";
        }
      }
      class Ge extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.invite_ids || h.Sg(Ge.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  invite_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint64String,
                    pbr: h.qM.readPackedUint64String,
                    bw: h.gp.writeRepeatedUint64String,
                  },
                  status: { n: 2, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = h.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_UpdateInvites_Request";
        }
      }
      class Le extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.invites_updated || h.Sg(Le.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  invites_updated: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = h.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Le.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_UpdateInvites_Response";
        }
      }
      class Qe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.invite_id || h.Sg(Qe.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  invite_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = h.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Qe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Request";
        }
      }
      class He extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.invites || h.Sg(He.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: { invites: { n: 1, c: Ve, r: !0, q: !0 } },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = h.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(He.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Response";
        }
      }
      class Ve extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.invite_id || h.Sg(Ve.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  invite_id: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  appid: { n: 2, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  steamid_inviter: {
                    n: 3,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  status: { n: 4, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  time_created: {
                    n: 5,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  app_name: { n: 6, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = h.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ve.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Response_Invite";
        }
      }
      class Ke extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.limit || h.Sg(Ke.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  limit: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  time_before: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = h.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ke.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Request";
        }
      }
      class $e extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.invites || h.Sg($e.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: { invites: { n: 1, c: Xe, r: !0, q: !0 } },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = h.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT($e.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Response";
        }
      }
      class Xe extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.appid || h.Sg(Xe.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  steamid_invited: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  time_created: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  app_name: { n: 4, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = h.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Xe.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Response_Invite";
        }
      }
      class Je extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.appid || h.Sg(Je.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = h.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Je.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Request";
        }
      }
      class Ye extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.results || h.Sg(Ye.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: { results: { n: 1, c: Ze, r: !0, q: !0 } },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = h.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ye.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Response";
        }
      }
      class Ze extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.appid || h.Sg(Ze.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  status: { n: 2, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  invites_remaining: {
                    n: 3,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  time_joined: {
                    n: 4,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  packageid: {
                    n: 5,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  invites_sent: {
                    n: 6,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = h.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Ze.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Response_AppStatus";
        }
      }
      class et extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.appid || h.Sg(et.M()),
            v.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = h.w0(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(et.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteOptions_Request";
        }
      }
      class tt extends v.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.ineligible_friends || h.Sg(tt.M()),
            v.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  ineligible_friends: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = h.w0(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(tt.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (F().BinaryReader)(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (F().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (F().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteOptions_Response";
        }
      }
      !(function (e) {
        (e.RegisterCDKey = function (e, t) {
          return e.SendMsg("Store.RegisterCDKey#1", (0, k.I8)(U, t), I, {
            ePrivilege: 1,
          });
        }),
          (e.GetRecommendedTagsForUser = function (e, t) {
            return e.SendMsg(
              "Store.GetRecommendedTagsForUser#1",
              (0, k.I8)(C, t),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetMostPopularTags = function (e, t) {
            return e.SendMsg("Store.GetMostPopularTags#1", (0, k.I8)(A, t), x, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, t) {
            return e.SendMsg(
              "Store.GetLocalizedNameForTags#1",
              (0, k.I8)(G, t),
              L,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTagList = function (e, t) {
            return e.SendMsg("Store.GetTagList#1", (0, k.I8)(H, t), V, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, t) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", (0, k.I8)(X, t), J, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, t) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSettings#1",
              (0, k.I8)(Y, t),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SkipDiscoveryQueueItem = function (e, t) {
            return e.SendMsg(
              "Store.SkipDiscoveryQueueItem#1",
              (0, k.I8)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserGameInterestState = function (e, t) {
            return e.SendMsg(
              "Store.GetUserGameInterestState#1",
              (0, k.I8)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.GetGamesFollowed = function (e, t) {
            return e.SendMsg("Store.GetGamesFollowed#1", (0, k.I8)(se, t), ne, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetGamesFollowedCount = function (e, t) {
            return e.SendMsg(
              "Store.GetGamesFollowedCount#1",
              (0, k.I8)(oe, t),
              le,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, t) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSkippedApps#1",
              (0, k.I8)(Pe, t),
              Ne,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ReportApp = function (e, t) {
            return e.SendMsg("Store.ReportApp#1", (0, k.I8)(ce, t), ue, {
              ePrivilege: 3,
            });
          }),
          (e.GetStorePreferences = function (e, t) {
            return e.SendMsg(
              "Store.GetStorePreferences#1",
              (0, k.I8)(Be, t),
              ge,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetTrendingAppsAmongFriends = function (e, t) {
            return e.SendMsg(
              "Store.GetTrendingAppsAmongFriends#1",
              (0, k.I8)(pe, t),
              ye,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigratePartnerLinkTracking = function (e, t) {
            return e.SendNotification(
              "Store.MigratePartnerLinkTracking#1",
              (0, k.I8)(ke, t),
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePackageReservations = function (e, t) {
            return e.SendMsg(
              "Store.UpdatePackageReservations#1",
              (0, k.I8)(Me, t),
              we,
              { ePrivilege: 1 },
            );
          }),
          (e.GetWishlistDemoEmailStatus = function (e, t) {
            return e.SendMsg(
              "Store.GetWishlistDemoEmailStatus#1",
              (0, k.I8)(qe, t),
              Oe,
              { ePrivilege: 1 },
            );
          }),
          (e.QueueWishlistDemoEmailToFire = function (e, t) {
            return e.SendMsg(
              "Store.QueueWishlistDemoEmailToFire#1",
              (0, k.I8)(Ie, t),
              Ce,
              { ePrivilege: 1 },
            );
          }),
          (e.SetReservationPositionMessage = function (e, t) {
            return e.SendMsg(
              "Store.SetReservationPositionMessage#1",
              (0, k.I8)(fe, t),
              ze,
              { ePrivilege: 4 },
            );
          }),
          (e.DeleteReservationPositionMessage = function (e, t) {
            return e.SendMsg(
              "Store.DeleteReservationPositionMessage#1",
              (0, k.I8)(Re, t),
              Te,
              { ePrivilege: 4 },
            );
          }),
          (e.GetAllReservationPositionMessages = function (e, t) {
            return e.SendMsg(
              "Store.GetAllReservationPositionMessages#1",
              (0, k.I8)(ve, t),
              Fe,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.ReloadAllReservationPositionMessages = function (e, t) {
            return e.SendNotification(
              "Store.ReloadAllReservationPositionMessages#1",
              (0, k.I8)(he, t),
              { ePrivilege: 4 },
            );
          }),
          (e.SetCompatibilityFeedback = function (e, t) {
            return e.SendMsg(
              "Store.SetCompatibilityFeedback#1",
              (0, k.I8)(Ee, t),
              We,
              { ePrivilege: 1 },
            );
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, t) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              (0, k.I8)(je, t),
              Ue,
              { ePrivilege: 1 },
            );
          });
      })(z || (z = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: Ae,
          };
        })(R || (R = {})),
        (function (e) {
          (e.RequestInvite = function (e, t) {
            return e.SendMsg("Playtest.RequestInvite#1", (0, k.I8)(xe, t), De, {
              ePrivilege: 1,
            });
          }),
            (e.UpdateInvites = function (e, t) {
              return e.SendMsg(
                "Playtest.UpdateInvites#1",
                (0, k.I8)(Ge, t),
                Le,
                { ePrivilege: 1 },
              );
            }),
            (e.GetInvites = function (e, t) {
              return e.SendMsg("Playtest.GetInvites#1", (0, k.I8)(Qe, t), He, {
                ePrivilege: 1,
              });
            }),
            (e.GetInviteHistory = function (e, t) {
              return e.SendMsg(
                "Playtest.GetInviteHistory#1",
                (0, k.I8)(Ke, t),
                $e,
                { ePrivilege: 1 },
              );
            }),
            (e.GetUserStatus = function (e, t) {
              return e.SendMsg(
                "Playtest.GetUserStatus#1",
                (0, k.I8)(Je, t),
                Ye,
                { ePrivilege: 1 },
              );
            }),
            (e.GetInviteOptions = function (e, t) {
              return e.SendMsg(
                "Playtest.GetInviteOptions#1",
                (0, k.I8)(et, t),
                tt,
                { ePrivilege: 1 },
              );
            });
        })(T || (T = {}));
    },
  },
]);
