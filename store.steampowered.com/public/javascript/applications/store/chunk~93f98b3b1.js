/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [875],
  {
    83935: (e, t, r) => {
      r.d(t, {
        Cs: () => M,
        Dj: () => ee,
        GB: () => X,
        IL: () => N,
        L: () => J,
        P$: () => S,
        Pk: () => o,
        Pw: () => l,
        RY: () => j,
        Sm: () => C,
        _h: () => m,
        a9: () => c,
        bA: () => L,
        jK: () => q,
        kT: () => n,
        l3: () => H,
        mo: () => f,
        pt: () => B,
        vT: () => d,
        zq: () => ie,
      });
      var i,
        a,
        n,
        s,
        o,
        l,
        m,
        d,
        c,
        y = r(80613),
        u = r.n(y),
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
        })(m || (m = {})),
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
      class B extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.steamid || _.Sg(B.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  steamid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
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
          let t = new (u().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Request";
        }
      }
      class g extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.summary || _.Sg(g.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  summary: { n: 1, c: p },
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
          let t = new (u().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response";
        }
      }
      class p extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.points || _.Sg(p.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
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
          let t = new (u().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response_Summary";
        }
      }
      class R extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.amount || _.Sg(R.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
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
          let t = new (u().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Request";
        }
      }
      class b extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.points || _.Sg(b.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Response";
        }
      }
      class M extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.defid || _.Sg(M.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Request";
        }
      }
      class f extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.defid || _.Sg(f.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
        }
      }
      class z extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.defid || _.Sg(z.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
        }
      }
      class T extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.communityitemid || _.Sg(T.M()),
            y.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Response";
        }
      }
      class S extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.customization_type || _.Sg(S.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
        }
      }
      class h extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.purchaseid || _.Sg(h.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
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
          let t = new (u().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
        }
      }
      class q extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.customization_type || _.Sg(q.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
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
          let t = new (u().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
        }
      }
      class W extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
        }
      }
      class v extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.serial_number || _.Sg(v.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
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
          let t = new (u().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
        }
      }
      class I extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.granted_profile_modifier || _.Sg(I.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  granted_profile_modifier: {
                    n: 1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
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
          let t = new (u().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
        }
      }
      class j extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.target_type || _.Sg(j.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
                  reactionid: {
                    n: 3,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
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
          let t = new (u().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Request";
        }
      }
      class F extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (u().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Response";
        }
      }
      class L extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.target_type || _.Sg(L.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  target_type: { n: 1, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  targetid: {
                    n: 2,
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
          let t = new (u().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Request";
        }
      }
      class k extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.reactionids || _.Sg(k.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
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
          let t = new (u().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Response";
        }
      }
      class E extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.steamid || _.Sg(E.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  steamid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = _.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
        }
      }
      class O extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.total || _.Sg(O.M()),
            y.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  total: { n: 1, c: U, r: !0, q: !0 },
                  user_reviews: { n: 2, c: U, r: !0, q: !0 },
                  ugc: { n: 3, c: U, r: !0, q: !0 },
                  profile: { n: 4, c: U, r: !0, q: !0 },
                  forum_topics: { n: 5, c: U, r: !0, q: !0 },
                  comments: { n: 6, c: U, r: !0, q: !0 },
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
          let t = new (u().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
        }
      }
      class U extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.reactionid || _.Sg(U.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
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
          let t = new (u().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
        }
      }
      class C extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (u().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Request";
        }
      }
      class P extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.reactions || _.Sg(P.M()),
            y.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { reactions: { n: 3, c: A, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = _.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response";
        }
      }
      class A extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.reactionid || _.Sg(A.M()),
            y.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
        }
      }
      class G extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (u().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
        }
      }
      class x extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.points_cost || _.Sg(x.M()),
            y.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
        }
      }
      class N extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (u().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Request";
        }
      }
      class D extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.apps || _.Sg(D.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { apps: { n: 1, c: Q, r: !0, q: !0 } },
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
          let t = new (u().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response";
        }
      }
      class Q extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || _.Sg(Q.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
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
          let t = new (u().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
        }
      }
      class H extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || _.Sg(H.M()),
            y.Message.initialize(this, e, 0, -1, [15], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition";
        }
      }
      class K extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.item_name || _.Sg(K.M()),
            y.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
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
                  badge_data: { n: 9, c: V, r: !0, q: !0 },
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
          let t = new (u().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_CommunityItemData";
        }
      }
      class V extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.level || _.Sg(V.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  level: { n: 1, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                  image: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
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
          let t = new (u().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_BadgeData";
        }
      }
      class $ extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.bonusid || _.Sg($.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
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
          let t = new (u().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardPurchaseBonus";
        }
      }
      class J extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (u().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
        }
      }
      class Y extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.bonuses || _.Sg(Y.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { bonuses: { n: 1, c: $, r: !0, q: !0 } },
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
          let t = new (u().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
        }
      }
      class X extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.appids || _.Sg(X.M()),
            y.Message.initialize(
              this,
              e,
              0,
              -1,
              [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
              null,
            );
        }
        static sm_m;
        static sm_mbf;
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
                    d: m.k_ELoyaltyRewardsQuerySort_TimeCreated,
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
          let t = new (u().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Request";
        }
      }
      class Z extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.definitions || _.Sg(Z.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Response";
        }
      }
      class ee extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.requests || _.Sg(ee.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
        }
      }
      class te extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.responses || _.Sg(te.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
        }
      }
      class re extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.eresult || _.Sg(re.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
        }
      }
      class ie extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || _.Sg(ie.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Request";
        }
      }
      class ae extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.active_definitions || _.Sg(ae.M()),
            y.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (u().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
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
            (0, w.I8)(R, t),
            b,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetSummary = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, w.I8)(B, t),
              g,
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
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, w.I8)(q, t),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterForSteamDeckRewards = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, w.I8)(v, t),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.AddReaction = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, w.I8)(j, t),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.GetReactions = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, w.I8)(L, t),
              k,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReactionsSummaryForUser = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, w.I8)(E, t),
              O,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetReactionConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, w.I8)(C, t),
              P,
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
              D,
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
      })(c || (c = {}));
    },
    17645: (e, t, r) => {
      r.d(t, {
        c3: () => B,
        wt: () => _,
        Ju: () => z,
        R4: () => S,
        L6: () => i,
        Qm: () => n,
      });
      var i,
        a,
        n,
        s = r(80613),
        o = r.n(s),
        l = r(89068),
        m = r(56545),
        d = r(83935);
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.item_type || l.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  item_type: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  item_name: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_title: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_description: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_image_small: {
                    n: 6,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_image_large: {
                    n: 7,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_key_values: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_series: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_class: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  editor_accountid: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  active: { n: 12, br: l.qM.readBool, bw: l.gp.writeBool },
                  item_image_composed: {
                    n: 13,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_image_composed_foil: {
                    n: 14,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  deleted: { n: 15, br: l.qM.readBool, bw: l.gp.writeBool },
                  item_last_changed: {
                    n: 16,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  broadcast_channel_id: {
                    n: 17,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_movie_webm: {
                    n: 18,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_movie_mp4: {
                    n: 19,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_movie_webm_small: {
                    n: 20,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 21,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_internal_name: {
                    n: 22,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = l.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CommunityItemDefinition";
        }
      }
      !(function (e) {
        (e[(e.k_ESaleRewardDefType_Invalid = 0)] =
          "k_ESaleRewardDefType_Invalid"),
          (e[(e.k_ESaleRewardDefType_ClaimItem = 1)] =
            "k_ESaleRewardDefType_ClaimItem"),
          (e[(e.k_ESaleRewardDefType_DiscoveryQueue = 2)] =
            "k_ESaleRewardDefType_DiscoveryQueue");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_ERewardDefinitionsAction_Invalid = 0)] =
            "k_ERewardDefinitionsAction_Invalid"),
            (e[(e.k_ERewardDefinitionsAction_Add = 1)] =
              "k_ERewardDefinitionsAction_Add"),
            (e[(e.k_ERewardDefinitionsAction_Update = 2)] =
              "k_ERewardDefinitionsAction_Update"),
            (e[(e.k_ERewardDefinitionsAction_Delete = 3)] =
              "k_ERewardDefinitionsAction_Delete");
        })(a || (a = {}));
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || l.Sg(y.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  community_item_type: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  community_item_class: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  community_definition: { n: 4, c },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = l.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SaleReward_ItemDefinition";
        }
      }
      class u extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.communityitemid || l.Sg(u.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  time_granted: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_definition: { n: 3, c: y },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = l.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SaleItemRewardGrant";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.language || l.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = l.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Request";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.communityitemid || l.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  next_claim_time: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  reward_item: { n: 3, c: d.l3 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Response";
        }
      }
      class B extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.language || l.Sg(B.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = l.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Request";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.can_claim || l.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  can_claim: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                  next_claim_time: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  reward_item: { n: 3, c: d.l3 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = l.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Response";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.sale_reward_def_id || l.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  sale_reward_def_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  virtual_item_reward_event_id: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  rtime_start_time: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  rtime_end_time: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  num_items_per_def: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  reward_def_type: {
                    n: 7,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamItemRewardDefinition";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.virtual_item_reward_event_id || l.Sg(R.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  virtual_item_reward_event_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = l.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetRewardDefinitions_Request";
        }
      }
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.definitions || l.Sg(b.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { definitions: { n: 1, c: p, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = l.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetRewardDefinitions_Response";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.definitions || l.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  definitions: { n: 1, c: p, r: !0, q: !0 },
                  action: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = l.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_SetRewardDefinitions_Request";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.definitions || l.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { definitions: { n: 1, c: p, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_SetRewardDefinitions_Response";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.sale_def_type || l.Sg(z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  sale_def_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  include_community_item_def: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = l.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetClaimedSaleRewards_Request";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.num_items_granted || l.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  num_items_granted: {
                    n: 1,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  num_items_earned: {
                    n: 2,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  current_def: { n: 3, c: p },
                  reward_items: { n: 4, c: u, r: !0, q: !0 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetClaimedSaleRewards_Response";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.sale_def_type || l.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  sale_def_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  include_community_item_def: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetCurrentDefinition_Request";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.definition || l.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  definition: { n: 1, c: p },
                  reward_items: { n: 2, c: y, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = l.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetCurrentDefinition_Response";
        }
      }
      !(function (e) {
        (e.ClaimItem = function (e, t) {
          return e.SendMsg("SaleItemRewards.ClaimItem#1", (0, m.I8)(_, t), w, {
            ePrivilege: 1,
          });
        }),
          (e.CanClaimItem = function (e, t) {
            return e.SendMsg(
              "SaleItemRewards.CanClaimItem#1",
              (0, m.I8)(B, t),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetRewardDefinitions = function (e, t) {
            return e.SendMsg(
              "SaleItemRewards.GetRewardDefinitions#1",
              (0, m.I8)(R, t),
              b,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.SetRewardDefinitions = function (e, t) {
            return e.SendMsg(
              "SaleItemRewards.SetRewardDefinitions#1",
              (0, m.I8)(M, t),
              f,
              { ePrivilege: 4 },
            );
          }),
          (e.GetClaimedSaleRewards = function (e, t) {
            return e.SendMsg(
              "SaleItemRewards.GetClaimedSaleRewards#1",
              (0, m.I8)(z, t),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetCurrentDefinition = function (e, t) {
            return e.SendMsg(
              "SaleItemRewards.GetCurrentDefinition#1",
              (0, m.I8)(S, t),
              h,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(n || (n = {}));
    },
    60383: (e, t, r) => {
      r.d(t, { J: () => o });
      var i = r(34629),
        a = r(90626),
        n = r(56011),
        s = r(84933);
      class o extends a.Component {
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        m_observer = null;
        m_refElement = a.createRef();
        m_elTracked = null;
        m_bPreviouslyIntersecting = !1;
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
        }
        GetBoundingClientRect() {
          return this.m_refElement.current
            ? this.m_refElement.current.getBoundingClientRect()
            : null;
        }
        DestroyObserver() {
          this.m_observer &&
            (this.m_observer.disconnect(),
            (this.m_observer = null),
            (this.m_elTracked = null));
        }
        componentWillUnmount() {
          this.DestroyObserver();
        }
        componentDidMount() {
          this.UpdateObserver(null);
        }
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            (e.rootMargin != this.m_observer.rootMargin ||
              e.thresholds != this.m_observer.thresholds) &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              this.props.thresholds && (e.threshold = this.props.thresholds),
              (this.m_observer = (0, s.md)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return n.Kf(e, (e) => {
            const t = this.props.horizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(o.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let r = !1;
          for (const t of e)
            if (t.isIntersecting) {
              r = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != r &&
            ((this.m_bPreviouslyIntersecting = r),
            this.props.onVisibilityChange && this.props.onVisibilityChange(r),
            r && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let {
            onVisibilityChange: e,
            rootMargin: t,
            trigger: r,
            horizontal: i,
            ...n
          } = this.props;
          return a.createElement(
            "div",
            { ref: this.m_refElement, ...n },
            this.props.children,
          );
        }
      }
      (0, i.Cg)([s.oI], o.prototype, "OnIntersection", null);
    },
  },
]);
