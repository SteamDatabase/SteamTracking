/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4317],
  {
    83935: (e, t, r) => {
      r.d(t, {
        GB: () => X,
        Pk: () => o,
        Pw: () => l,
        RY: () => h,
        Sm: () => P,
        a9: () => u,
        bA: () => j,
        l3: () => H,
        pt: () => R,
      });
      var i,
        a,
        n,
        s,
        o,
        l,
        y,
        d,
        u,
        c = r(80613),
        m = r.n(c),
        _ = r(89068),
        w = r(56545);
      !(function (e) {
        (e[(e.k_ELoyaltyRewardAuditType_Invalid = 0)] =
          "k_ELoyaltyRewardAuditType_Invalid"),
          (e[(e.k_ELoyaltyRewardAuditType_Purchase = 1)] =
            "k_ELoyaltyRewardAuditType_Purchase"),
          (e[(e.k_ELoyaltyRewardAuditType_RefundOrChargeback = 2)] =
            "k_ELoyaltyRewardAuditType_RefundOrChargeback"),
          (e[(e.k_ELoyaltyRewardAuditType_SupportGrant = 3)] =
            "k_ELoyaltyRewardAuditType_SupportGrant"),
          (e[(e.k_ELoyaltyRewardAuditType_PointRedemption = 4)] =
            "k_ELoyaltyRewardAuditType_PointRedemption"),
          (e[(e.k_ELoyaltyRewardAuditType_PointClawback = 5)] =
            "k_ELoyaltyRewardAuditType_PointClawback"),
          (e[(e.k_ELoyaltyRewardAuditType_PointRedemptionForBadgeLevel = 6)] =
            "k_ELoyaltyRewardAuditType_PointRedemptionForBadgeLevel"),
          (e[(e.k_ELoyaltyRewardAuditType_SpendingBackfill = 7)] =
            "k_ELoyaltyRewardAuditType_SpendingBackfill"),
          (e[(e.k_ELoyaltyRewardAuditType_PointRedemptionForItemUpgrade = 9)] =
            "k_ELoyaltyRewardAuditType_PointRedemptionForItemUpgrade"),
          (e[(e.k_ELoyaltyRewardAuditType_PointRedemptionForTransaction = 10)] =
            "k_ELoyaltyRewardAuditType_PointRedemptionForTransaction"),
          (e[(e.k_ELoyaltyRewardAuditType_SupportRegrantItem = 19)] =
            "k_ELoyaltyRewardAuditType_SupportRegrantItem"),
          (e[(e.k_ELoyaltyRewardAuditType_TransferRequest = 20)] =
            "k_ELoyaltyRewardAuditType_TransferRequest"),
          (e[(e.k_ELoyaltyRewardAuditType_Transferred = 21)] =
            "k_ELoyaltyRewardAuditType_Transferred"),
          (e[(e.k_ELoyaltyRewardAuditType_UserReviewReaction = 22)] =
            "k_ELoyaltyRewardAuditType_UserReviewReaction"),
          (e[
            (e.k_ELoyaltyRewardAuditType_UserReviewReaction_PointsTransferred = 23)
          ] = "k_ELoyaltyRewardAuditType_UserReviewReaction_PointsTransferred"),
          (e[(e.k_ELoyaltyRewardAuditType_LaunchBackfill_Purchase = 24)] =
            "k_ELoyaltyRewardAuditType_LaunchBackfill_Purchase"),
          (e[
            (e.k_ELoyaltyRewardAuditType_LaunchBackfill_RefundOrChargeback = 25)
          ] = "k_ELoyaltyRewardAuditType_LaunchBackfill_RefundOrChargeback"),
          (e[(e.k_ELoyaltyRewardAuditType_UGCReaction = 26)] =
            "k_ELoyaltyRewardAuditType_UGCReaction"),
          (e[(e.k_ELoyaltyRewardAuditType_UGCReaction_PointsTransferred = 27)] =
            "k_ELoyaltyRewardAuditType_UGCReaction_PointsTransferred"),
          (e[(e.k_ELoyaltyRewardAuditType_SupportSetBadgeLevel = 28)] =
            "k_ELoyaltyRewardAuditType_SupportSetBadgeLevel"),
          (e[(e.k_ELoyaltyRewardAuditType_UserReviewReaction_Removed = 29)] =
            "k_ELoyaltyRewardAuditType_UserReviewReaction_Removed"),
          (e[(e.k_ELoyaltyRewardAuditType_UGCReaction_Removed = 30)] =
            "k_ELoyaltyRewardAuditType_UGCReaction_Removed"),
          (e[(e.k_ELoyaltyRewardAuditType_Auction_Bid = 31)] =
            "k_ELoyaltyRewardAuditType_Auction_Bid"),
          (e[(e.k_ELoyaltyRewardAuditType_Auction_BidCancelled = 32)] =
            "k_ELoyaltyRewardAuditType_Auction_BidCancelled"),
          (e[(e.k_ELoyaltyRewardAuditType_Auction_WinningBid = 33)] =
            "k_ELoyaltyRewardAuditType_Auction_WinningBid"),
          (e[(e.k_ELoyaltyRewardAuditType_GrantedFromPackage = 34)] =
            "k_ELoyaltyRewardAuditType_GrantedFromPackage"),
          (e[
            (e.k_ELoyaltyRewardAuditType_PointRedemptionForProfileCustomization = 35)
          ] =
            "k_ELoyaltyRewardAuditType_PointRedemptionForProfileCustomization"),
          (e[(e.k_ELoyaltyRewardAuditType_ProfileReaction = 36)] =
            "k_ELoyaltyRewardAuditType_ProfileReaction"),
          (e[
            (e.k_ELoyaltyRewardAuditType_ProfileReaction_PointsTransferred = 37)
          ] = "k_ELoyaltyRewardAuditType_ProfileReaction_PointsTransferred"),
          (e[(e.k_ELoyaltyRewardAuditType_ProfileReaction_Removed = 38)] =
            "k_ELoyaltyRewardAuditType_ProfileReaction_Removed"),
          (e[
            (e.k_ELoyaltyRewardAuditType_PointRedemptionForProfileCustomizationUpgrade = 39)
          ] =
            "k_ELoyaltyRewardAuditType_PointRedemptionForProfileCustomizationUpgrade"),
          (e[(e.k_ELoyaltyRewardAuditType_ForumTopicReaction = 40)] =
            "k_ELoyaltyRewardAuditType_ForumTopicReaction"),
          (e[
            (e.k_ELoyaltyRewardAuditType_ForumTopicReaction_PointsTransferred = 41)
          ] = "k_ELoyaltyRewardAuditType_ForumTopicReaction_PointsTransferred"),
          (e[(e.k_ELoyaltyRewardAuditType_ForumTopicReaction_Removed = 42)] =
            "k_ELoyaltyRewardAuditType_ForumTopicReaction_Removed"),
          (e[(e.k_ELoyaltyRewardAuditType_CommentReaction = 43)] =
            "k_ELoyaltyRewardAuditType_CommentReaction"),
          (e[
            (e.k_ELoyaltyRewardAuditType_CommentReaction_PointsTransferred = 44)
          ] = "k_ELoyaltyRewardAuditType_CommentReaction_PointsTransferred"),
          (e[(e.k_ELoyaltyRewardAuditType_CommentReaction_Removed = 45)] =
            "k_ELoyaltyRewardAuditType_CommentReaction_Removed"),
          (e[(e.k_ELoyaltyRewardAuditType_SteamDeckRewards = 46)] =
            "k_ELoyaltyRewardAuditType_SteamDeckRewards"),
          (e[(e.k_ELoyaltyRewardAuditType_SupportGrantReward = 47)] =
            "k_ELoyaltyRewardAuditType_SupportGrantReward"),
          (e[(e.k_ELoyaltyRewardAuditType_PointRedemptionForFreeItem = 48)] =
            "k_ELoyaltyRewardAuditType_PointRedemptionForFreeItem");
      })(i || (i = {})),
        (function (e) {
          e[(e.k_ELoyaltyRewardDefID_Invalid = 0)] =
            "k_ELoyaltyRewardDefID_Invalid";
        })(a || (a = {})),
        (function (e) {
          (e[(e.k_ELoyaltyRewardType_Invalid = 0)] =
            "k_ELoyaltyRewardType_Invalid"),
            (e[(e.k_ELoyaltyRewardType_VirtualItemReward = 1)] =
              "k_ELoyaltyRewardType_VirtualItemReward"),
            (e[(e.k_ELoyaltyRewardType_Badge = 2)] =
              "k_ELoyaltyRewardType_Badge"),
            (e[(e.k_ELoyaltyRewardType_CommunityItemLevelUpgrade = 3)] =
              "k_ELoyaltyRewardType_CommunityItemLevelUpgrade"),
            (e[(e.k_ELoyaltyRewardType_CartDiscount = 4)] =
              "k_ELoyaltyRewardType_CartDiscount"),
            (e[(e.k_ELoyaltyRewardType_Bundle = 5)] =
              "k_ELoyaltyRewardType_Bundle"),
            (e[(e.k_ELoyaltyRewardType_AutoGeneratedBundle = 6)] =
              "k_ELoyaltyRewardType_AutoGeneratedBundle");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_ELoyaltyRewardPointTransferType_Invalid = 0)] =
            "k_ELoyaltyRewardPointTransferType_Invalid"),
            (e[(e.k_ELoyaltyRewardPointTransferType_Support = 1)] =
              "k_ELoyaltyRewardPointTransferType_Support"),
            (e[(e.k_ELoyaltyRewardPointTransferType_Review = 2)] =
              "k_ELoyaltyRewardPointTransferType_Review"),
            (e[(e.k_ELoyaltyRewardPointTransferType_UGC = 3)] =
              "k_ELoyaltyRewardPointTransferType_UGC"),
            (e[(e.k_ELoyaltyRewardPointTransferType_Profile = 4)] =
              "k_ELoyaltyRewardPointTransferType_Profile"),
            (e[(e.k_ELoyaltyRewardPointTransferType_ForumTopic = 5)] =
              "k_ELoyaltyRewardPointTransferType_ForumTopic"),
            (e[(e.k_ELoyaltyRewardPointTransferType_Comment = 6)] =
              "k_ELoyaltyRewardPointTransferType_Comment");
        })(s || (s = {})),
        (function (e) {
          (e[(e.k_ELoyaltyRewardReactionType_Invalid = 0)] =
            "k_ELoyaltyRewardReactionType_Invalid"),
            (e[(e.k_ELoyaltyRewardReactionType_DeepThoughts = 1)] =
              "k_ELoyaltyRewardReactionType_DeepThoughts"),
            (e[(e.k_ELoyaltyRewardReactionType_Heartwarming = 2)] =
              "k_ELoyaltyRewardReactionType_Heartwarming"),
            (e[(e.k_ELoyaltyRewardReactionType_Hilarious = 3)] =
              "k_ELoyaltyRewardReactionType_Hilarious"),
            (e[(e.k_ELoyaltyRewardReactionType_HotTake = 4)] =
              "k_ELoyaltyRewardReactionType_HotTake"),
            (e[(e.k_ELoyaltyRewardReactionType_Poetry = 5)] =
              "k_ELoyaltyRewardReactionType_Poetry"),
            (e[(e.k_ELoyaltyRewardReactionType_ExtraHelpful = 6)] =
              "k_ELoyaltyRewardReactionType_ExtraHelpful"),
            (e[(e.k_ELoyaltyRewardReactionType_GottaHaveIt = 7)] =
              "k_ELoyaltyRewardReactionType_GottaHaveIt"),
            (e[(e.k_ELoyaltyRewardReactionType_Michelangelo = 8)] =
              "k_ELoyaltyRewardReactionType_Michelangelo"),
            (e[(e.k_ELoyaltyRewardReactionType_Treasure = 9)] =
              "k_ELoyaltyRewardReactionType_Treasure"),
            (e[(e.k_ELoyaltyRewardReactionType_MindBlown = 10)] =
              "k_ELoyaltyRewardReactionType_MindBlown"),
            (e[(e.k_ELoyaltyRewardReactionType_GoldenUnicorn = 11)] =
              "k_ELoyaltyRewardReactionType_GoldenUnicorn"),
            (e[(e.k_ELoyaltyRewardReactionType_MadScientist = 12)] =
              "k_ELoyaltyRewardReactionType_MadScientist"),
            (e[(e.k_ELoyaltyRewardReactionType_Clever = 13)] =
              "k_ELoyaltyRewardReactionType_Clever"),
            (e[(e.k_ELoyaltyRewardReactionType_WarmBlanket = 14)] =
              "k_ELoyaltyRewardReactionType_WarmBlanket"),
            (e[(e.k_ELoyaltyRewardReactionType_Saucy = 15)] =
              "k_ELoyaltyRewardReactionType_Saucy"),
            (e[(e.k_ELoyaltyRewardReactionType_SlowClap = 16)] =
              "k_ELoyaltyRewardReactionType_SlowClap"),
            (e[(e.k_ELoyaltyRewardReactionType_TakeMyPoints = 17)] =
              "k_ELoyaltyRewardReactionType_TakeMyPoints"),
            (e[(e.k_ELoyaltyRewardReactionType_Wholesome = 18)] =
              "k_ELoyaltyRewardReactionType_Wholesome"),
            (e[(e.k_ELoyaltyRewardReactionType_Jester = 19)] =
              "k_ELoyaltyRewardReactionType_Jester"),
            (e[(e.k_ELoyaltyRewardReactionType_FancyPants = 20)] =
              "k_ELoyaltyRewardReactionType_FancyPants"),
            (e[(e.k_ELoyaltyRewardReactionType_Whoa = 21)] =
              "k_ELoyaltyRewardReactionType_Whoa"),
            (e[(e.k_ELoyaltyRewardReactionType_SuperStar = 22)] =
              "k_ELoyaltyRewardReactionType_SuperStar"),
            (e[(e.k_ELoyaltyRewardReactionType_Wild = 23)] =
              "k_ELoyaltyRewardReactionType_Wild"),
            (e[(e.k_ELoyaltyRewardReactionType_Award = 24)] =
              "k_ELoyaltyRewardReactionType_Award"),
            (e[(e.k_ELoyaltyRewardReactionType_Beautiful = 25)] =
              "k_ELoyaltyRewardReactionType_Beautiful"),
            (e[(e.k_ELoyaltyRewardReactionType_VIP = 26)] =
              "k_ELoyaltyRewardReactionType_VIP"),
            (e[(e.k_ELoyaltyRewardReactionType_OnFire = 27)] =
              "k_ELoyaltyRewardReactionType_OnFire"),
            (e[(e.k_ELoyaltyRewardReactionType_Funny = 28)] =
              "k_ELoyaltyRewardReactionType_Funny"),
            (e[(e.k_ELoyaltyRewardReactionType_OneHundred = 29)] =
              "k_ELoyaltyRewardReactionType_OneHundred"),
            (e[(e.k_ELoyaltyRewardReactionType_LifeSaver = 30)] =
              "k_ELoyaltyRewardReactionType_LifeSaver"),
            (e[(e.k_ELoyaltyRewardReactionType_Perfect = 31)] =
              "k_ELoyaltyRewardReactionType_Perfect"),
            (e[(e.k_ELoyaltyRewardReactionType_PlusOne = 32)] =
              "k_ELoyaltyRewardReactionType_PlusOne"),
            (e[(e.k_ELoyaltyRewardReactionType_Smart = 33)] =
              "k_ELoyaltyRewardReactionType_Smart"),
            (e[(e.k_ELoyaltyRewardReactionType_PureGold = 34)] =
              "k_ELoyaltyRewardReactionType_PureGold"),
            (e[(e.k_ELoyaltyRewardReactionType_Coffee = 35)] =
              "k_ELoyaltyRewardReactionType_Coffee");
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_ELoyaltyRewardReactionTargetType_Invalid = 0)] =
            "k_ELoyaltyRewardReactionTargetType_Invalid"),
            (e[(e.k_ELoyaltyRewardReactionTargetType_UserReview = 1)] =
              "k_ELoyaltyRewardReactionTargetType_UserReview"),
            (e[(e.k_ELoyaltyRewardReactionTargetType_UGC = 2)] =
              "k_ELoyaltyRewardReactionTargetType_UGC"),
            (e[(e.k_ELoyaltyRewardReactionTargetType_Profile = 3)] =
              "k_ELoyaltyRewardReactionTargetType_Profile"),
            (e[(e.k_ELoyaltyRewardReactionTargetType_ForumTopic = 4)] =
              "k_ELoyaltyRewardReactionTargetType_ForumTopic"),
            (e[(e.k_ELoyaltyRewardReactionTargetType_Comment = 5)] =
              "k_ELoyaltyRewardReactionTargetType_Comment");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_ELoyaltyRewardsQuerySort_TimeCreated = 1)] =
            "k_ELoyaltyRewardsQuerySort_TimeCreated"),
            (e[(e.k_ELoyaltyRewardsQuerySort_RedemptionRank = 2)] =
              "k_ELoyaltyRewardsQuerySort_RedemptionRank");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ELoyaltyRewardQueryFilter_Animated = 1)] =
            "k_ELoyaltyRewardQueryFilter_Animated"),
            (e[(e.k_ELoyaltyRewardQueryFilter_NotAnimated = 2)] =
              "k_ELoyaltyRewardQueryFilter_NotAnimated"),
            (e[(e.k_ELoyaltyRewardQueryFilter_Bundle = 3)] =
              "k_ELoyaltyRewardQueryFilter_Bundle"),
            (e[(e.k_ELoyaltyRewardQueryFilter_Tiled = 4)] =
              "k_ELoyaltyRewardQueryFilter_Tiled");
        })(d || (d = {}));
      class R extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.steamid || _.Sg(R.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  steamid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = _.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Request";
        }
      }
      class p extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.summary || _.Sg(p.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  summary: { n: 1, c: B },
                  timestamp_updated: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  auditid_highwater: {
                    n: 3,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = _.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response";
        }
      }
      class B extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.points || _.Sg(B.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  points: {
                    n: 1,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                  points_earned: {
                    n: 2,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                  points_spent: {
                    n: 3,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = _.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response_Summary";
        }
      }
      class g extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.amount || _.Sg(g.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  amount: {
                    n: 1,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                  ecurrency: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = _.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Request";
        }
      }
      class b extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.points || _.Sg(b.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  points: {
                    n: 1,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = _.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Response";
        }
      }
      class M extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.defid || _.Sg(M.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  defid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  expected_points_cost: {
                    n: 2,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = _.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Request";
        }
      }
      class f extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.defid || _.Sg(f.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  defid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  num_levels: {
                    n: 2,
                    d: 1,
                    br: _.qM.readInt32,
                    bw: _.gp.writeInt32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = _.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
        }
      }
      class z extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.defid || _.Sg(z.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  defid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = _.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
        }
      }
      class T extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.communityitemid || _.Sg(T.M()),
            c.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  bundle_community_item_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint64String,
                    pbr: _.qM.readPackedUint64String,
                    bw: _.gp.writeRepeatedUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = _.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Response";
        }
      }
      class S extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.customization_type || _.Sg(S.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  customization_type: {
                    n: 1,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = _.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
        }
      }
      class L extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.purchaseid || _.Sg(L.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = _.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
        }
      }
      class k extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.customization_type || _.Sg(k.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  customization_type: {
                    n: 1,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                  new_level: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = _.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
        }
      }
      class E extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
        }
      }
      class q extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.serial_number || _.Sg(q.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  serial_number: {
                    n: 1,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  controller_code: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = _.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
        }
      }
      class W extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.granted_profile_modifier || _.Sg(W.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  granted_profile_modifier: {
                    n: 1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = _.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
        }
      }
      class h extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.target_type || _.Sg(h.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  target_type: { n: 1, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  targetid: {
                    n: 2,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  reactionid: {
                    n: 3,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = _.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Request";
        }
      }
      class F extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Response";
        }
      }
      class j extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.target_type || _.Sg(j.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  target_type: { n: 1, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  targetid: {
                    n: 2,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = _.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Request";
        }
      }
      class v extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.reactionids || _.Sg(v.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  reactionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = _.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Response";
        }
      }
      class I extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || _.Sg(I.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = _.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
        }
      }
      class U extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.total || _.Sg(U.M()),
            c.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  total: { n: 1, c: O, r: !0, q: !0 },
                  user_reviews: { n: 2, c: O, r: !0, q: !0 },
                  ugc: { n: 3, c: O, r: !0, q: !0 },
                  profile: { n: 4, c: O, r: !0, q: !0 },
                  forum_topics: { n: 5, c: O, r: !0, q: !0 },
                  comments: { n: 6, c: O, r: !0, q: !0 },
                  total_given: {
                    n: 7,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  total_received: {
                    n: 8,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  total_points_given: {
                    n: 9,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                  total_points_received: {
                    n: 10,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = _.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
        }
      }
      class O extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.reactionid || _.Sg(O.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  reactionid: { n: 1, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  given: { n: 2, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  received: { n: 3, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  points_given: {
                    n: 4,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                  points_received: {
                    n: 5,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = _.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
        }
      }
      class P extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Request";
        }
      }
      class C extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.reactions || _.Sg(C.M()),
            c.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { reactions: { n: 3, c: A, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = _.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response";
        }
      }
      class A extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.reactionid || _.Sg(A.M()),
            c.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  reactionid: { n: 1, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  points_cost: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  points_transferred: {
                    n: 3,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  valid_target_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: _.qM.readEnum,
                    pbr: _.qM.readPackedEnum,
                    bw: _.gp.writeRepeatedEnum,
                  },
                  valid_ugc_types: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  purchaseable: { n: 6, br: _.qM.readBool, bw: _.gp.writeBool },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = _.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
        }
      }
      class G extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
        }
      }
      class x extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.points_cost || _.Sg(x.M()),
            c.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  points_cost: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  upgrade_points_cost: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  purchasable_customization_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: _.qM.readEnum,
                    pbr: _.qM.readPackedEnum,
                    bw: _.gp.writeRepeatedEnum,
                  },
                  upgradable_customization_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: _.qM.readEnum,
                    pbr: _.qM.readPackedEnum,
                    bw: _.gp.writeRepeatedEnum,
                  },
                  max_slots_per_type: {
                    n: 5,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  max_upgradable_level: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = _.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
        }
      }
      class N extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Request";
        }
      }
      class Q extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.apps || _.Sg(Q.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { apps: { n: 1, c: D, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = _.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response";
        }
      }
      class D extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid || _.Sg(D.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  has_items_anyone_can_purchase: {
                    n: 2,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  event_app: { n: 3, br: _.qM.readBool, bw: _.gp.writeBool },
                  hero_carousel_image: {
                    n: 4,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  owned: { n: 5, br: _.qM.readBool, bw: _.gp.writeBool },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = _.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
        }
      }
      class H extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || _.Sg(H.M()),
            c.Message.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  defid: { n: 2, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  type: { n: 3, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  community_item_class: {
                    n: 4,
                    br: _.qM.readInt32,
                    bw: _.gp.writeInt32,
                  },
                  community_item_type: {
                    n: 5,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  point_cost: {
                    n: 6,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                  timestamp_created: {
                    n: 7,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  timestamp_available: {
                    n: 9,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  timestamp_available_end: {
                    n: 14,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  quantity: {
                    n: 10,
                    br: _.qM.readInt64String,
                    bw: _.gp.writeInt64String,
                  },
                  internal_description: {
                    n: 11,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  active: { n: 12, br: _.qM.readBool, bw: _.gp.writeBool },
                  community_item_data: { n: 13, c: K },
                  bundle_defids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  usable_duration: {
                    n: 16,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  bundle_discount: {
                    n: 17,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  timestamp_free_until: {
                    n: 18,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = _.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition";
        }
      }
      class K extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.item_name || _.Sg(K.M()),
            c.Message.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  item_name: {
                    n: 1,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  item_title: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  item_description: {
                    n: 3,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  item_image_small: {
                    n: 4,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  item_image_large: {
                    n: 5,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  item_movie_webm: {
                    n: 6,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  item_movie_mp4: {
                    n: 7,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  item_movie_webm_small: {
                    n: 10,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 11,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  animated: { n: 8, br: _.qM.readBool, bw: _.gp.writeBool },
                  badge_data: { n: 9, c: $, r: !0, q: !0 },
                  profile_theme_id: {
                    n: 12,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  tiled: { n: 13, br: _.qM.readBool, bw: _.gp.writeBool },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = _.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_CommunityItemData";
        }
      }
      class $ extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.level || _.Sg($.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  level: { n: 1, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                  image: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = _.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT($.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_BadgeData";
        }
      }
      class V extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.bonusid || _.Sg(V.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  bonusid: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  appid: { n: 2, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  active: { n: 3, br: _.qM.readBool, bw: _.gp.writeBool },
                  points: { n: 4, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                  timestamp_start: {
                    n: 5,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  timestamp_end: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  internal_description: {
                    n: 7,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = _.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardPurchaseBonus";
        }
      }
      class J extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
        }
      }
      class Y extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.bonuses || _.Sg(Y.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { bonuses: { n: 1, c: V, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = _.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
        }
      }
      class X extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.appids || _.Sg(X.M()),
            c.Message.initialize(
              this,
              e,
              0,
              -1,
              [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
              null,
            );
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  time_available: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  community_item_classes: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: _.qM.readInt32,
                    pbr: _.qM.readPackedInt32,
                    bw: _.gp.writeRepeatedInt32,
                  },
                  language: { n: 4, br: _.qM.readString, bw: _.gp.writeString },
                  count: { n: 5, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                  cursor: { n: 6, br: _.qM.readString, bw: _.gp.writeString },
                  sort: {
                    n: 7,
                    d: y.k_ELoyaltyRewardsQuerySort_TimeCreated,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                  sort_descending: {
                    n: 8,
                    d: !0,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  reward_types: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: _.qM.readEnum,
                    pbr: _.qM.readPackedEnum,
                    bw: _.gp.writeRepeatedEnum,
                  },
                  excluded_community_item_classes: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: _.qM.readInt32,
                    pbr: _.qM.readPackedInt32,
                    bw: _.gp.writeRepeatedInt32,
                  },
                  definitionids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  filters: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: _.qM.readEnum,
                    pbr: _.qM.readPackedEnum,
                    bw: _.gp.writeRepeatedEnum,
                  },
                  filter_match_all_category_tags: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeRepeatedString,
                  },
                  filter_match_any_category_tags: {
                    n: 14,
                    r: !0,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeRepeatedString,
                  },
                  contains_definitionids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  include_direct_purchase_disabled: {
                    n: 16,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  excluded_content_descriptors: {
                    n: 17,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  excluded_appids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  excluded_store_tagids: {
                    n: 19,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  store_tagids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  search_term: {
                    n: 21,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = _.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Request";
        }
      }
      class Z extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.definitions || _.Sg(Z.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  definitions: { n: 1, c: H, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: _.qM.readInt32,
                    bw: _.gp.writeInt32,
                  },
                  count: { n: 3, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                  next_cursor: {
                    n: 4,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = _.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Response";
        }
      }
      class ee extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.requests || _.Sg(ee.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { requests: { n: 1, c: X, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = _.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
        }
      }
      class te extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.responses || _.Sg(te.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { responses: { n: 1, c: re, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = _.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
        }
      }
      class re extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.eresult || _.Sg(re.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  eresult: { n: 1, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                  response: { n: 2, c: Z },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = _.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
        }
      }
      class ie extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || _.Sg(ie.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  language: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = _.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Request";
        }
      }
      class ae extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.active_definitions || _.Sg(ae.M()),
            c.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  active_definitions: { n: 1, c: H, r: !0, q: !0 },
                  inactive_definitions: { n: 2, c: H, r: !0, q: !0 },
                  bundle_definitions: { n: 3, c: H, r: !0, q: !0 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = _.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Response";
        }
      }
      !(function (e) {
        (e.GetPointsForSpend = function (e, t) {
          return e.SendMsg(
            "LoyaltyRewards.GetPointsForSpend#1",
            (0, w.I8)(g, t),
            b,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetSummary = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, w.I8)(R, t),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RedeemPoints = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, w.I8)(M, t),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForBadgeLevel = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, w.I8)(f, t),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsToUpgradeItem = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, w.I8)(z, t),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomization = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, w.I8)(S, t),
              L,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, w.I8)(k, t),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterForSteamDeckRewards = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, w.I8)(q, t),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.AddReaction = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, w.I8)(h, t),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.GetReactions = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, w.I8)(j, t),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReactionsSummaryForUser = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, w.I8)(I, t),
              U,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetReactionConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, w.I8)(P, t),
              C,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileCustomizationsConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, w.I8)(G, t),
              x,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEligibleApps = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, w.I8)(N, t),
              Q,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetActivePurchaseBonuses = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, w.I8)(J, t),
              Y,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.QueryRewardItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, w.I8)(X, t),
              Z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BatchedQueryRewardItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, w.I8)(ee, t),
              te,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEquippedProfileItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, w.I8)(ie, t),
              ae,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(u || (u = {}));
    },
  },
]);
