/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2919],
  {
    72985: (e, t, r) => {
      r.d(t, {
        Ac: () => s,
        GZ: () => T,
        Ts: () => R,
        o0: () => p,
        q5: () => k,
        qF: () => b,
        yg: () => z,
      });
      var i = r(45878),
        a = r(43898),
        n = r(67328);
      const m = i.Message;
      var s, l, u, _, o, d, c, E, w, S, y, b, k, B, R;
      !(function (e) {
        (e[(e.k_EVirtualItemRewardEvent_Invalid = 0)] =
          "k_EVirtualItemRewardEvent_Invalid"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2013 = 1)] =
            "k_EVirtualItemRewardEvent_Winter2013"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2014 = 2)] =
            "k_EVirtualItemRewardEvent_Summer2014"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2018 = 3)] =
            "k_EVirtualItemRewardEvent_Winter2018"),
          (e[(e.k_EVirtualItemRewardEvent_LunarNewYear2019 = 4)] =
            "k_EVirtualItemRewardEvent_LunarNewYear2019"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2019 = 5)] =
            "k_EVirtualItemRewardEvent_Summer2019"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2019 = 6)] =
            "k_EVirtualItemRewardEvent_Winter2019"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2019Free = 7)] =
            "k_EVirtualItemRewardEvent_Winter2019Free"),
          (e[(e.k_EVirtualItemRewardEvent_LunarNewYear2020 = 8)] =
            "k_EVirtualItemRewardEvent_LunarNewYear2020"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2020 = 9)] =
            "k_EVirtualItemRewardEvent_Summer2020"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2020 = 10)] =
            "k_EVirtualItemRewardEvent_Winter2020"),
          (e[(e.k_EVirtualItemRewardEvent_LunarNewYear2021 = 11)] =
            "k_EVirtualItemRewardEvent_LunarNewYear2021"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2021 = 12)] =
            "k_EVirtualItemRewardEvent_Winter2021"),
          (e[(e.k_EVirtualItemRewardEven_LunarNewYear2022 = 13)] =
            "k_EVirtualItemRewardEven_LunarNewYear2022"),
          (e[(e.k_EVirtualItemRewardEvent_RacingSale2022 = 14)] =
            "k_EVirtualItemRewardEvent_RacingSale2022"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2022 = 15)] =
            "k_EVirtualItemRewardEvent_Summer2022"),
          (e[(e.k_EVirtualItemRewardEvent_Sim4F2P = 16)] =
            "k_EVirtualItemRewardEvent_Sim4F2P"),
          (e[(e.k_EVirtualItemRewardEvent_DyingLight2 = 17)] =
            "k_EVirtualItemRewardEvent_DyingLight2"),
          (e[(e.k_EVirtualItemRewardEvent_GameAwardDeckDrop = 18)] =
            "k_EVirtualItemRewardEvent_GameAwardDeckDrop"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2022 = 19)] =
            "k_EVirtualItemRewardEvent_Winter2022"),
          (e[(e.k_EVirtualItemRewardEvent_Lunar2023 = 20)] =
            "k_EVirtualItemRewardEvent_Lunar2023"),
          (e[(e.k_EVirtualItemRewardEvent_Spring2023 = 21)] =
            "k_EVirtualItemRewardEvent_Spring2023"),
          (e[(e.k_EVirtualItemRewardEvent_Summer2023 = 22)] =
            "k_EVirtualItemRewardEvent_Summer2023"),
          (e[(e.k_EVirtualItemRewardEvent_Autumn2023 = 23)] =
            "k_EVirtualItemRewardEvent_Autumn2023"),
          (e[(e.k_EVirtualItemRewardEvent_Winter2023 = 24)] =
            "k_EVirtualItemRewardEvent_Winter2023"),
          (e[(e.k_EVirtualItemRewardEvent_RedFallLaunch = 25)] =
            "k_EVirtualItemRewardEvent_RedFallLaunch"),
          (e[(e.k_EVirtualItemRewardEvent_PuzzleFest2023 = 26)] =
            "k_EVirtualItemRewardEvent_PuzzleFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_SportsFest2023 = 27)] =
            "k_EVirtualItemRewardEvent_SportsFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_NextFestSummer2023 = 28)] =
            "k_EVirtualItemRewardEvent_NextFestSummer2023"),
          (e[(e.k_EVirtualItemRewardEvent_StealthFest2023 = 29)] =
            "k_EVirtualItemRewardEvent_StealthFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_VisualNovelFest2023 = 30)] =
            "k_EVirtualItemRewardEvent_VisualNovelFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_StrategyFest2023 = 31)] =
            "k_EVirtualItemRewardEvent_StrategyFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_SchmupFest2023 = 32)] =
            "k_EVirtualItemRewardEvent_SchmupFest2023"),
          (e[(e.k_EVirtualItemRewardEvent_NextFestFall2023 = 33)] =
            "k_EVirtualItemRewardEvent_NextFestFall2023"),
          (e[(e.k_EVirtualItemRewardEvent_Halloween2023 = 34)] =
            "k_EVirtualItemRewardEvent_Halloween2023"),
          (e[(e.k_EVirtualItemRewardEvent_TechLandEvent = 35)] =
            "k_EVirtualItemRewardEvent_TechLandEvent");
      })(s || (s = {})),
        (function (e) {
          (e[(e.k_EVirtualItemRewardRarity_Invalid = 0)] =
            "k_EVirtualItemRewardRarity_Invalid"),
            (e[(e.k_EVirtualItemRewardRarity_Common = 1)] =
              "k_EVirtualItemRewardRarity_Common"),
            (e[(e.k_EVirtualItemRewardRarity_Uncommon = 2)] =
              "k_EVirtualItemRewardRarity_Uncommon"),
            (e[(e.k_EVirtualItemRewardRarity_Rare = 3)] =
              "k_EVirtualItemRewardRarity_Rare"),
            (e[(e.k_EVirtualItemRewardRarity_Extraordinary = 4)] =
              "k_EVirtualItemRewardRarity_Extraordinary"),
            (e[(e.k_EVirtualItemRewardRarity_Precious = 5)] =
              "k_EVirtualItemRewardRarity_Precious"),
            (e[(e.k_EVirtualItemRewardRarity_Unparalleled = 6)] =
              "k_EVirtualItemRewardRarity_Unparalleled");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EGameCardDropMethodInvalid = 0)] =
            "k_EGameCardDropMethodInvalid"),
            (e[(e.k_EGameCardDropMethodOneTimePurchase = 1)] =
              "k_EGameCardDropMethodOneTimePurchase"),
            (e[(e.k_EGameCardDropMethodFreeToPlay = 2)] =
              "k_EGameCardDropMethodFreeToPlay"),
            (e[(e.k_EGameCardDropMethodComboOTPFP2 = 3)] =
              "k_EGameCardDropMethodComboOTPFP2"),
            (e[(e.k_EGameCardDropMethodSalePurchase = 4)] =
              "k_EGameCardDropMethodSalePurchase"),
            (e[(e.k_EGameCardDropMethodOTPWithMicroTxn = 5)] =
              "k_EGameCardDropMethodOTPWithMicroTxn");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_ECommunityItemSalienType_Invalid = 0)] =
            "k_ECommunityItemSalienType_Invalid"),
            (e[(e.k_ECommunityItemSalienType_Hat = 1)] =
              "k_ECommunityItemSalienType_Hat"),
            (e[(e.k_ECommunityItemSalienType_Shirt = 2)] =
              "k_ECommunityItemSalienType_Shirt"),
            (e[(e.k_ECommunityItemSalienType_Cape = 3)] =
              "k_ECommunityItemSalienType_Cape");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ECommunityItemDropRate_Common = 0)] =
            "k_ECommunityItemDropRate_Common"),
            (e[(e.k_ECommunityItemDropRate_Uncommon = 1)] =
              "k_ECommunityItemDropRate_Uncommon"),
            (e[(e.k_ECommunityItemDropRate_Rare = 2)] =
              "k_ECommunityItemDropRate_Rare");
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_ECommunityItemAttribute_Invalid = 0)] =
            "k_ECommunityItemAttribute_Invalid"),
            (e[(e.k_ECommunityItemAttribute_CardBorder = 1)] =
              "k_ECommunityItemAttribute_CardBorder"),
            (e[(e.k_ECommunityItemAttribute_Level = 2)] =
              "k_ECommunityItemAttribute_Level"),
            (e[(e.k_ECommunityItemAttribute_IssueNumber = 3)] =
              "k_ECommunityItemAttribute_IssueNumber"),
            (e[(e.k_ECommunityItemAttribute_TradableTime = 4)] =
              "k_ECommunityItemAttribute_TradableTime"),
            (e[(e.k_ECommunityItemAttribute_StorePackageID = 5)] =
              "k_ECommunityItemAttribute_StorePackageID"),
            (e[(e.k_ECommunityItemAttribute_CommunityItemAppID = 6)] =
              "k_ECommunityItemAttribute_CommunityItemAppID"),
            (e[(e.k_ECommunityItemAttribute_CommunityItemType = 7)] =
              "k_ECommunityItemAttribute_CommunityItemType"),
            (e[(e.k_ECommunityItemAttribute_ProfileModiferEnabled = 8)] =
              "k_ECommunityItemAttribute_ProfileModiferEnabled"),
            (e[(e.k_ECommunityItemAttribute_ExpiryTime = 9)] =
              "k_ECommunityItemAttribute_ExpiryTime");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_ECommunityItemApprovalState_Invalid = 0)] =
            "k_ECommunityItemApprovalState_Invalid"),
            (e[(e.k_ECommunityItemApprovalState_DeveloperRequestsReview = 1)] =
              "k_ECommunityItemApprovalState_DeveloperRequestsReview"),
            (e[(e.k_ECommunityItemApprovalState_ApprovedByValve = 2)] =
              "k_ECommunityItemApprovalState_ApprovedByValve"),
            (e[
              (e.k_ECommunityItemApprovalState_ApprovalInvalidatedByEdits = 3)
            ] = "k_ECommunityItemApprovalState_ApprovalInvalidatedByEdits"),
            (e[(e.k_ECommunityItemApprovalState_ValveRequestsEdits = 4)] =
              "k_ECommunityItemApprovalState_ValveRequestsEdits"),
            (e[(e.k_ECommunityItemApprovalState_Released = 5)] =
              "k_ECommunityItemApprovalState_Released");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ETradabilityPreference_DontCare = 0)] =
            "k_ETradabilityPreference_DontCare"),
            (e[(e.k_ETradabilityPreference_PreferTradable = 1)] =
              "k_ETradabilityPreference_PreferTradable"),
            (e[(e.k_ETradabilityPreference_RequireTradable = 2)] =
              "k_ETradabilityPreference_RequireTradable"),
            (e[(e.k_ETradabilityPreference_PreferNotTradable = 3)] =
              "k_ETradabilityPreference_PreferNotTradable");
        })(E || (E = {})),
        (function (e) {
          (e[(e.k_ESummerSaleTaskUseDiscoveryQueue = 0)] =
            "k_ESummerSaleTaskUseDiscoveryQueue"),
            (e[(e.k_ESummerSaleTaskPlayAGame = 1)] =
              "k_ESummerSaleTaskPlayAGame"),
            (e[(e.k_ESummerSaleTaskViewFriendActivity = 2)] =
              "k_ESummerSaleTaskViewFriendActivity"),
            (e[(e.k_ESummerSaleTaskAddToWishlist = 3)] =
              "k_ESummerSaleTaskAddToWishlist"),
            (e[(e.k_ESummerSaleTaskReviewStorePreferences = 4)] =
              "k_ESummerSaleTaskReviewStorePreferences"),
            (e[(e.k_ESummerSaleTaskEarnAchievement = 5)] =
              "k_ESummerSaleTaskEarnAchievement"),
            (e[(e.k_ESummerSaleTaskVisitBroadcastPage = 6)] =
              "k_ESummerSaleTaskVisitBroadcastPage"),
            (e[(e.k_ESummerSaleTaskMarkReviewHelpful = 7)] =
              "k_ESummerSaleTaskMarkReviewHelpful"),
            (e[(e.k_ESummerSaleTaskFollowCurator = 8)] =
              "k_ESummerSaleTaskFollowCurator"),
            (e[(e.k_ESummerSaleTaskViewAProfile = 9)] =
              "k_ESummerSaleTaskViewAProfile"),
            (e[(e.k_ESummerSaleTaskViewATagPage = 10)] =
              "k_ESummerSaleTaskViewATagPage"),
            (e[(e.k_ESummerSaleTaskMarkNotInterested = 11)] =
              "k_ESummerSaleTaskMarkNotInterested"),
            (e[(e.k_ESummerSaleTaskViewVideosPage = 12)] =
              "k_ESummerSaleTaskViewVideosPage"),
            (e[(e.k_ESummerSaleTaskUploadAScreenshot = 13)] =
              "k_ESummerSaleTaskUploadAScreenshot"),
            (e[(e.k_ESummerSaleTaskPersonalizeProfile = 14)] =
              "k_ESummerSaleTaskPersonalizeProfile"),
            (e[(e.k_ESummerSaleTaskPersonalizeDiscoveryQueue = 15)] =
              "k_ESummerSaleTaskPersonalizeDiscoveryQueue");
        })(w || (w = {})),
        (function (e) {
          e[(e.k_EWinterSale2015ARG_Badge_RedHerring = 1)] =
            "k_EWinterSale2015ARG_Badge_RedHerring";
        })(S || (S = {})),
        (function (e) {
          (e[(e.k_ESpringCleaningEventYear_Invalid = 0)] =
            "k_ESpringCleaningEventYear_Invalid"),
            (e[(e.k_ESpringCleaningEventYear_2018 = 1)] =
              "k_ESpringCleaningEventYear_2018"),
            (e[(e.k_ESpringCleaningEventYear_2019 = 2)] =
              "k_ESpringCleaningEventYear_2019"),
            (e[(e.k_ESpringCleaningEventYear_2020 = 3)] =
              "k_ESpringCleaningEventYear_2020");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ESummerSale2021Genre_Invalid = 0)] =
            "k_ESummerSale2021Genre_Invalid"),
            (e[(e.k_ESummerSale2021Genre_Action = 1)] =
              "k_ESummerSale2021Genre_Action"),
            (e[(e.k_ESummerSale2021Genre_AdventureAndCasual = 2)] =
              "k_ESummerSale2021Genre_AdventureAndCasual"),
            (e[(e.k_ESummerSale2021Genre_RolePlaying = 3)] =
              "k_ESummerSale2021Genre_RolePlaying"),
            (e[(e.k_ESummerSale2021Genre_Strategy = 4)] =
              "k_ESummerSale2021Genre_Strategy"),
            (e[(e.k_ESummerSale2021Genre_Simulation = 5)] =
              "k_ESummerSale2021Genre_Simulation"),
            (e[(e.k_ESummerSale2021Genre_SportsAndRacing = 6)] =
              "k_ESummerSale2021Genre_SportsAndRacing"),
            (e[(e.k_ESummerSale2021Genre_Horror = 7)] =
              "k_ESummerSale2021Genre_Horror"),
            (e[(e.k_ESummerSale2021Genre_Survival = 8)] =
              "k_ESummerSale2021Genre_Survival"),
            (e[(e.k_ESummerSale2021Genre_OpenWorld = 9)] =
              "k_ESummerSale2021Genre_OpenWorld"),
            (e[(e.k_ESummerSale2021Genre_ScifiAndCyberpunk = 10)] =
              "k_ESummerSale2021Genre_ScifiAndCyberpunk"),
            (e[(e.k_ESummerSale2021Genre_MysteryAndDetective = 11)] =
              "k_ESummerSale2021Genre_MysteryAndDetective"),
            (e[(e.k_ESummerSale2021Genre_Space = 12)] =
              "k_ESummerSale2021Genre_Space"),
            (e[(e.k_ESummerSale2021Genre_RogueLike = 13)] =
              "k_ESummerSale2021Genre_RogueLike"),
            (e[(e.k_ESummerSale2021Genre_Anime = 14)] =
              "k_ESummerSale2021Genre_Anime");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_ESummerSale2021StoryChoice_Invalid = 0)] =
            "k_ESummerSale2021StoryChoice_Invalid"),
            (e[(e.k_ESummerSale2021StoryChoice_A = 1)] =
              "k_ESummerSale2021StoryChoice_A"),
            (e[(e.k_ESummerSale2021StoryChoice_B = 2)] =
              "k_ESummerSale2021StoryChoice_B");
        })(k || (k = {}));
      class I extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.communityitemid || a.aR(I.M()),
            m.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  owner: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  attributes: { n: 5, c: v, r: !0, q: !0 },
                  used: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  owner_origin: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  amount: {
                    n: 8,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
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
        static toObject(e, t) {
          return a.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem";
        }
      }
      class v extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.attributeid || a.aR(v.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  attributeid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  value: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
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
        static toObject(e, t) {
          return a.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem_Attribute";
        }
      }
      class p extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.filter_appids || a.aR(p.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  filter_appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityInventory_Request";
        }
      }
      class g extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.items || a.aR(g.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { items: { n: 1, c: I, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityInventory_Response";
        }
      }
      class f extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appid || a.aR(f.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  item_type: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  language: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  broadcast_channel_id: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  keyvalues_as_json: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Request";
        }
      }
      class F extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.item_definitions || a.aR(F.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { item_definitions: { n: 1, c: M, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response";
        }
      }
      class M extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.item_type || a.aR(M.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  item_type: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  item_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_title: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_description: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_small: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_large: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_key_values: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_series: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_class: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  editor_accountid: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  active: { n: 12, br: a.FE.readBool, bw: a.Xc.writeBool },
                  item_image_composed: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_composed_foil: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  deleted: { n: 15, br: a.FE.readBool, bw: a.Xc.writeBool },
                  item_last_changed: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  broadcast_channel_id: {
                    n: 17,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_movie_webm: {
                    n: 18,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_mp4: {
                    n: 19,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_webm_small: {
                    n: 20,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 21,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_internal_name: {
                    n: 22,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
        }
      }
      class z extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.appid || a.aR(z.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  activate: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Request";
        }
      }
      class C extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Response";
        }
      }
      class T extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.timestamp_start || a.aR(T.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  timestamp_start: {
                    n: 1,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_end: {
                    n: 2,
                    d: 4294967295,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
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
        static toObject(e, t) {
          return a.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Request";
        }
      }
      class h extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.num_trading_cards || a.aR(h.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  num_trading_cards: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
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
        static toObject(e, t) {
          return a.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Response";
        }
      }
      class V extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.eventid || a.aR(V.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  eventid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  include_inactive: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
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
        static toObject(e, t) {
          return a.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_VirtualItemRewardDefinition_Request";
        }
      }
      class W extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.eventid || a.aR(W.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  eventid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  item_bucket: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  active: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  rarity: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  package_to_grant: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  game_item_id: {
                    n: 7,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  community_item_class: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  community_item_type: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  loyalty_point_type: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  amount: {
                    n: 11,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  rtime_time_active: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  loyalty_reward_defid: {
                    n: 13,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  user_badge_to_grant: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  user_badge_level: {
                    n: 15,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  virtual_item_def_id: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
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
        static toObject(e, t) {
          return a.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVirtualItemRewardDefinition";
        }
      }
      class A extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.rewards || a.aR(A.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { rewards: { n: 1, c: W, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_VirtualItemRewardDefinition_Response";
        }
      }
      class D extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.eventid || a.aR(D.M()),
            m.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  eventid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  itemsdefs: { n: 2, c: W, r: !0, q: !0 },
                  action: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
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
        static toObject(e, t) {
          return a.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Request";
        }
      }
      !(function (e) {
        (e[(e.k_SetVirtualItemRewardDefinition_Add = 1)] =
          "k_SetVirtualItemRewardDefinition_Add"),
          (e[(e.k_SetVirtualItemRewardDefinition_Update = 2)] =
            "k_SetVirtualItemRewardDefinition_Update"),
          (e[(e.k_SetVirtualItemRewardDefinition_MarkInactive = 3)] =
            "k_SetVirtualItemRewardDefinition_MarkInactive"),
          (e[(e.k_SetVirtualItemRewardDefinition_Remove = 4)] =
            "k_SetVirtualItemRewardDefinition_Remove");
      })(B || (B = {}));
      class U extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Response";
        }
      }
      !(function (e) {
        (e.GetCommunityInventory = function (e, t) {
          return e.SendMsg(
            "Quest.GetCommunityInventory#1",
            (0, n.MD)(p, t),
            g,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetCommunityItemDefinitions = function (e, t) {
            return e.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, n.MD)(f, t),
              F,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }),
          (e.ActivateProfileModifierItem = function (e, t) {
            return e.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, n.MD)(z, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNumTradingCardsEarned = function (e, t) {
            return e.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, n.MD)(T, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, n.MD)(V, t),
              A,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.SetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, n.MD)(D, t),
              U,
              { ePrivilege: 4 },
            );
          });
      })(R || (R = {}));
    },
  },
]);
