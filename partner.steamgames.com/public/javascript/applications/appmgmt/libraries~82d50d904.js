/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9603],
  {
    38139: (e, t, r) => {
      r.d(t, {
        FE: () => me,
        eQ: () => ee,
        eY: () => y,
        pQ: () => w,
        tE: () => R,
        xs: () => oe,
      });
      var i = r(45878),
        a = r(43898),
        n = r(67328);
      const s = i.Message;
      var o, l, m, u, d, c, _, y, B, w, R;
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
      })(o || (o = {})),
        (function (e) {
          e[(e.k_ELoyaltyRewardDefID_Invalid = 0)] =
            "k_ELoyaltyRewardDefID_Invalid";
        })(l || (l = {})),
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
        })(m || (m = {})),
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
        })(u || (u = {})),
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
              "k_ELoyaltyRewardReactionType_Wild");
        })(d || (d = {})),
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
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ELoyaltyRewardsQuerySort_TimeCreated = 1)] =
            "k_ELoyaltyRewardsQuerySort_TimeCreated"),
            (e[(e.k_ELoyaltyRewardsQuerySort_RedemptionRank = 2)] =
              "k_ELoyaltyRewardsQuerySort_RedemptionRank");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ELoyaltyRewardQueryFilter_Animated = 1)] =
            "k_ELoyaltyRewardQueryFilter_Animated"),
            (e[(e.k_ELoyaltyRewardQueryFilter_NotAnimated = 2)] =
              "k_ELoyaltyRewardQueryFilter_NotAnimated"),
            (e[(e.k_ELoyaltyRewardQueryFilter_Bundle = 3)] =
              "k_ELoyaltyRewardQueryFilter_Bundle");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ERewardDefinitionsAction_Invalid = 0)] =
            "k_ERewardDefinitionsAction_Invalid"),
            (e[(e.k_ERewardDefinitionsAction_Add = 1)] =
              "k_ERewardDefinitionsAction_Add"),
            (e[(e.k_ERewardDefinitionsAction_Update = 2)] =
              "k_ERewardDefinitionsAction_Update"),
            (e[(e.k_ERewardDefinitionsAction_Delete = 3)] =
              "k_ERewardDefinitionsAction_Delete");
        })(B || (B = {}));
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || a.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.summary || a.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  summary: { n: 1, c: g },
                  timestamp_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  auditid_highwater: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
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
          return "CLoyaltyRewards_GetSummary_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.points || a.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  points: {
                    n: 1,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  points_earned: {
                    n: 2,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  points_spent: {
                    n: 3,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
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
          return "CLoyaltyRewards_GetSummary_Response_Summary";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.amount || a.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  amount: {
                    n: 1,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  ecurrency: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.points || a.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  points: {
                    n: 1,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
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
          return "CLoyaltyRewards_GetPointsForSpend_Response";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.defid || a.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  defid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  expected_points_cost: {
                    n: 2,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Request";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.defid || a.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  defid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  num_levels: {
                    n: 2,
                    d: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
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
          return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.defid || a.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  defid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
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
          return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.communityitemid || a.aR(M.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  bundle_community_item_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
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
          return "CLoyaltyRewards_RedeemPoints_Response";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.customization_type || a.aR(k.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
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
        static toObject(e, t) {
          return a.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.purchaseid || a.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
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
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.customization_type || a.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  new_level: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
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
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.serial_number || a.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  serial_number: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  controller_code: {
                    n: 2,
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
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.granted_profile_modifier || a.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  granted_profile_modifier: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
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
        static toObject(e, t) {
          return a.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.target_type || a.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  target_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  targetid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  reactionid: {
                    n: 3,
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
          return "CLoyaltyRewards_AddReaction_Request";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Response";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.target_type || a.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  target_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  targetid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
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
        static toObject(e, t) {
          return a.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Request";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.reactionids || a.aR(j.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  reactionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
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
        static toObject(e, t) {
          return a.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Response";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || a.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
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
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.total || a.aR(L.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  total: { n: 1, c: U, r: !0, q: !0 },
                  user_reviews: { n: 2, c: U, r: !0, q: !0 },
                  ugc: { n: 3, c: U, r: !0, q: !0 },
                  profile: { n: 4, c: U, r: !0, q: !0 },
                  forum_topics: { n: 5, c: U, r: !0, q: !0 },
                  comments: { n: 6, c: U, r: !0, q: !0 },
                  total_given: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  total_received: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  total_points_given: {
                    n: 9,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  total_points_received: {
                    n: 10,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
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
        static toObject(e, t) {
          return a.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.reactionid || a.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  reactionid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  given: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  received: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  points_given: {
                    n: 4,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  points_received: {
                    n: 5,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
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
        static toObject(e, t) {
          return a.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Request";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.reactions || a.aR(X.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: { reactions: { n: 3, c: G, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.reactionid || a.aR(G.M()),
            s.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  reactionid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  points_cost: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  points_transferred: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  valid_target_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  valid_ugc_types: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
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
        static toObject(e, t) {
          return a.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
        }
      }
      class V extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.points_cost || a.aR(N.M()),
            s.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  points_cost: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  upgrade_points_cost: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  purchasable_customization_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  upgradable_customization_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  max_slots_per_type: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  max_upgradable_level: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
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
        static toObject(e, t) {
          return a.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Request";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.apps || a.aR(q.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { apps: { n: 1, c: Q, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || a.aR(Q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  has_items_anyone_can_purchase: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  event_app: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  hero_carousel_image: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
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
        static toObject(e, t) {
          return a.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
        }
      }
      class Y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.appid || a.aR(Y.M()),
            s.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  defid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  type: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  community_item_class: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  community_item_type: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  point_cost: {
                    n: 6,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  timestamp_created: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_available: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_available_end: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  quantity: {
                    n: 10,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  internal_description: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  active: { n: 12, br: a.FE.readBool, bw: a.Xc.writeBool },
                  community_item_data: { n: 13, c: H },
                  bundle_defids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  usable_duration: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  bundle_discount: {
                    n: 17,
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
        static toObject(e, t) {
          return a.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.item_name || a.aR(H.M()),
            s.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  item_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_title: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_description: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_small: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_image_large: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_webm: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_mp4: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_webm_small: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  animated: { n: 8, br: a.FE.readBool, bw: a.Xc.writeBool },
                  badge_data: { n: 9, c: K, r: !0, q: !0 },
                  profile_theme_id: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
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
        static toObject(e, t) {
          return a.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_CommunityItemData";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.level || a.aR(K.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  level: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  image: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
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
        static toObject(e, t) {
          return a.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_BadgeData";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.bonusid || a.aR($.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  bonusid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  active: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  points: { n: 4, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  timestamp_start: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_end: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  internal_description: {
                    n: 7,
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
        static toObject(e, t) {
          return a.TA($.M(), e, t);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardPurchaseBonus";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.bonuses || a.aR(Z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { bonuses: { n: 1, c: $, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.appids || a.aR(ee.M()),
            s.initialize(
              this,
              e,
              0,
              -1,
              [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18],
              null,
            );
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  time_available: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  community_item_classes: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  language: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  count: { n: 5, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  cursor: { n: 6, br: a.FE.readString, bw: a.Xc.writeString },
                  sort: {
                    n: 7,
                    d: _.k_ELoyaltyRewardsQuerySort_TimeCreated,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sort_descending: {
                    n: 8,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  reward_types: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  excluded_community_item_classes: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  definitionids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  filters: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  filter_match_all_category_tags: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  filter_match_any_category_tags: {
                    n: 14,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  contains_definitionids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  include_direct_purchase_disabled: {
                    n: 16,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  excluded_content_descriptors: {
                    n: 17,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  excluded_appids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  search_term: {
                    n: 19,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
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
        static toObject(e, t) {
          return a.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Request";
        }
      }
      class te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.definitions || a.aR(te.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  definitions: { n: 1, c: Y, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  count: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  next_cursor: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
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
        static toObject(e, t) {
          return a.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Response";
        }
      }
      class re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.requests || a.aR(re.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { requests: { n: 1, c: ee, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
        }
      }
      class ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.responses || a.aR(ie.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: { responses: { n: 1, c: ae, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(ie.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
        }
      }
      class ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.eresult || a.aR(ae.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  eresult: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  response: { n: 2, c: te },
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
        static toObject(e, t) {
          return a.TA(ae.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
        }
      }
      class ne extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.steamid || a.aR(ne.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
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
        static toObject(e, t) {
          return a.TA(ne.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Request";
        }
      }
      class se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.active_definitions || a.aR(se.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  active_definitions: { n: 1, c: Y, r: !0, q: !0 },
                  inactive_definitions: { n: 2, c: Y, r: !0, q: !0 },
                  bundle_definitions: { n: 3, c: Y, r: !0, q: !0 },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = a.Bh(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(se.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEquippedProfileItems_Response";
        }
      }
      class oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.language || a.aR(oe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
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
        static toObject(e, t) {
          return a.TA(oe.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Request";
        }
      }
      class le extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.communityitemid || a.aR(le.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  next_claim_time: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  reward_item: { n: 3, c: Y },
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
        static toObject(e, t) {
          return a.TA(le.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Response";
        }
      }
      class me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.language || a.aR(me.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(me.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Request";
        }
      }
      class ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.can_claim || a.aR(ue.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  can_claim: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  next_claim_time: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  reward_item: { n: 3, c: Y },
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
        static toObject(e, t) {
          return a.TA(ue.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Response";
        }
      }
      class de extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.sale_reward_def_id || a.aR(de.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  sale_reward_def_id: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  virtual_item_reward_event_id: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_start_time: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_end_time: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = a.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(de.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamItemRewardDefinition";
        }
      }
      class ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.virtual_item_reward_event_id || a.aR(ce.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  virtual_item_reward_event_id: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
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
        static toObject(e, t) {
          return a.TA(ce.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetRewardDefinitions_Request";
        }
      }
      class _e extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.definitions || a.aR(_e.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: { definitions: { n: 1, c: de, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(_e.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_GetRewardDefinitions_Response";
        }
      }
      class ye extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.definitions || a.aR(ye.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  definitions: { n: 1, c: de, r: !0, q: !0 },
                  action: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = a.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(ye.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_SetRewardDefinitions_Request";
        }
      }
      class Be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_SetRewardDefinitions_Response";
        }
      }
      !(function (e) {
        (e.GetPointsForSpend = function (e, t) {
          return e.SendMsg(
            "LoyaltyRewards.GetPointsForSpend#1",
            (0, n.MD)(E, t),
            f,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetSummary = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, n.MD)(b, t),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.RedeemPoints = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, n.MD)(S, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForBadgeLevel = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, n.MD)(z, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsToUpgradeItem = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, n.MD)(F, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomization = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, n.MD)(k, t),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, n.MD)(I, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterForSteamDeckRewards = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, n.MD)(h, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.AddReaction = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, n.MD)(W, t),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.GetReactions = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, n.MD)(O, t),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReactionsSummaryForUser = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, n.MD)(D, t),
              L,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetReactionConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, n.MD)(P, t),
              X,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileCustomizationsConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, n.MD)(V, t),
              N,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEligibleApps = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, n.MD)(x, t),
              q,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetActivePurchaseBonuses = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, n.MD)(J, t),
              Z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.QueryRewardItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, n.MD)(ee, t),
              te,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.BatchedQueryRewardItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, n.MD)(re, t),
              ie,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetEquippedProfileItems = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, n.MD)(ne, t),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(w || (w = {})),
        (function (e) {
          (e.ClaimItem = function (e, t) {
            return e.SendMsg(
              "SaleItemRewards.ClaimItem#1",
              (0, n.MD)(oe, t),
              le,
              { ePrivilege: 1 },
            );
          }),
            (e.CanClaimItem = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.CanClaimItem#1",
                (0, n.MD)(me, t),
                ue,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetRewardDefinitions = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.GetRewardDefinitions#1",
                (0, n.MD)(ce, t),
                _e,
                { bConstMethod: !0, ePrivilege: 4 },
              );
            }),
            (e.SetRewardDefinitions = function (e, t) {
              return e.SendMsg(
                "SaleItemRewards.SetRewardDefinitions#1",
                (0, n.MD)(ye, t),
                Be,
                { ePrivilege: 4 },
              );
            });
        })(R || (R = {}));
    },
    72985: (e, t, r) => {
      r.d(t, { Ts: () => E, o0: () => z, yg: () => I });
      var i = r(45878),
        a = r(43898),
        n = r(67328);
      const s = i.Message;
      var o, l, m, u, d, c, _, y, B, w, R, b, p, g, E;
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
      })(o || (o = {})),
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
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_ECommunityItemSalienType_Invalid = 0)] =
            "k_ECommunityItemSalienType_Invalid"),
            (e[(e.k_ECommunityItemSalienType_Hat = 1)] =
              "k_ECommunityItemSalienType_Hat"),
            (e[(e.k_ECommunityItemSalienType_Shirt = 2)] =
              "k_ECommunityItemSalienType_Shirt"),
            (e[(e.k_ECommunityItemSalienType_Cape = 3)] =
              "k_ECommunityItemSalienType_Cape");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_ECommunityItemDropRate_Common = 0)] =
            "k_ECommunityItemDropRate_Common"),
            (e[(e.k_ECommunityItemDropRate_Uncommon = 1)] =
              "k_ECommunityItemDropRate_Uncommon"),
            (e[(e.k_ECommunityItemDropRate_Rare = 2)] =
              "k_ECommunityItemDropRate_Rare");
        })(d || (d = {})),
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
        })(c || (c = {})),
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
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ETradabilityPreference_DontCare = 0)] =
            "k_ETradabilityPreference_DontCare"),
            (e[(e.k_ETradabilityPreference_PreferTradable = 1)] =
              "k_ETradabilityPreference_PreferTradable"),
            (e[(e.k_ETradabilityPreference_RequireTradable = 2)] =
              "k_ETradabilityPreference_RequireTradable"),
            (e[(e.k_ETradabilityPreference_PreferNotTradable = 3)] =
              "k_ETradabilityPreference_PreferNotTradable");
        })(y || (y = {})),
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
        })(B || (B = {})),
        (function (e) {
          e[(e.k_EWinterSale2015ARG_Badge_RedHerring = 1)] =
            "k_EWinterSale2015ARG_Badge_RedHerring";
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_ESpringCleaningEventYear_Invalid = 0)] =
            "k_ESpringCleaningEventYear_Invalid"),
            (e[(e.k_ESpringCleaningEventYear_2018 = 1)] =
              "k_ESpringCleaningEventYear_2018"),
            (e[(e.k_ESpringCleaningEventYear_2019 = 2)] =
              "k_ESpringCleaningEventYear_2019"),
            (e[(e.k_ESpringCleaningEventYear_2020 = 3)] =
              "k_ESpringCleaningEventYear_2020");
        })(R || (R = {})),
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
        })(p || (p = {}));
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.communityitemid || a.aR(f.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
                  attributes: { n: 5, c: S, r: !0, q: !0 },
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
          return "CQuest_CommunityItem";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.attributeid || a.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
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
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem_Attribute";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.filter_appids || a.aR(z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
          return "CQuest_GetCommunityInventory_Request";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.items || a.aR(F.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { items: { n: 1, c: f, r: !0, q: !0 } },
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
          return "CQuest_GetCommunityInventory_Response";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || a.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
          return "CQuest_GetCommunityItemDefinitions_Request";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.item_definitions || a.aR(k.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { item_definitions: { n: 1, c: T, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.item_type || a.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
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
          return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.appid || a.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
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
          return "CQuest_ActivateProfileModifierItem_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Response";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.timestamp_start || a.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
          return "CQuest_GetNumTradingCardsEarned_Request";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.num_trading_cards || a.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  num_trading_cards: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
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
        static toObject(e, t) {
          return a.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Response";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.eventid || a.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  eventid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  include_inactive: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
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
          return "CQuest_VirtualItemRewardDefinition_Request";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.eventid || a.aR(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
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
          return "CVirtualItemRewardDefinition";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.rewards || a.aR(O.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { rewards: { n: 1, c: A, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_VirtualItemRewardDefinition_Response";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.eventid || a.aR(j.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  eventid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  itemsdefs: { n: 2, c: A, r: !0, q: !0 },
                  action: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
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
        static toObject(e, t) {
          return a.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
      })(g || (g = {}));
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Response";
        }
      }
      !(function (e) {
        (e.GetCommunityInventory = function (e, t) {
          return e.SendMsg(
            "Quest.GetCommunityInventory#1",
            (0, n.MD)(z, t),
            F,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetCommunityItemDefinitions = function (e, t) {
            return e.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, n.MD)(M, t),
              k,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }),
          (e.ActivateProfileModifierItem = function (e, t) {
            return e.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, n.MD)(I, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNumTradingCardsEarned = function (e, t) {
            return e.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, n.MD)(h, t),
              C,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, n.MD)(W, t),
              O,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.SetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, n.MD)(j, t),
              D,
              { ePrivilege: 4 },
            );
          });
      })(E || (E = {}));
    },
    14952: (e, t, r) => {
      r.d(t, { b2: () => o });
      var i = r(45878),
        a = r(43898),
        n = r(67328);
      const s = i.Message;
      var o, l, m, u, d;
      !(function (e) {
        (e[(e.k_ESteamAwardCategoryID_Invalid = 0)] =
          "k_ESteamAwardCategoryID_Invalid"),
          (e[(e.k_ESteamAwardCategoryID_2020_GameOfTheYear = 50)] =
            "k_ESteamAwardCategoryID_2020_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2020_VRGameOfTheYear = 51)] =
            "k_ESteamAwardCategoryID_2020_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2020_LaborOfLove = 52)] =
            "k_ESteamAwardCategoryID_2020_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2020_BetterWithFriends = 53)] =
            "k_ESteamAwardCategoryID_2020_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2020_OutstandingVisualStyle = 54)] =
            "k_ESteamAwardCategoryID_2020_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2020_MostInnovativeGameplay = 55)] =
            "k_ESteamAwardCategoryID_2020_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2020_BestGameYouSuckAt = 56)] =
            "k_ESteamAwardCategoryID_2020_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2020_BestSoundtrack = 57)] =
            "k_ESteamAwardCategoryID_2020_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2020_OutstandingStoryRichGame = 58)] =
            "k_ESteamAwardCategoryID_2020_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2020_SitBackAndRelax = 59)] =
            "k_ESteamAwardCategoryID_2020_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2020_MAX = 60)] =
            "k_ESteamAwardCategoryID_2020_MAX"),
          (e[(e.k_ESteamAwardCategoryID_2021_GameOfTheYear = 61)] =
            "k_ESteamAwardCategoryID_2021_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2021_VRGameOfTheYear = 62)] =
            "k_ESteamAwardCategoryID_2021_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2021_LaborOfLove = 63)] =
            "k_ESteamAwardCategoryID_2021_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2021_BetterWithFriends = 64)] =
            "k_ESteamAwardCategoryID_2021_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2021_OutstandingVisualStyle = 65)] =
            "k_ESteamAwardCategoryID_2021_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2021_MostInnovativeGameplay = 66)] =
            "k_ESteamAwardCategoryID_2021_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2021_BestGameYouSuckAt = 67)] =
            "k_ESteamAwardCategoryID_2021_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2021_BestSoundtrack = 68)] =
            "k_ESteamAwardCategoryID_2021_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2021_OutstandingStoryRichGame = 69)] =
            "k_ESteamAwardCategoryID_2021_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2021_SitBackAndRelax = 70)] =
            "k_ESteamAwardCategoryID_2021_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2021_MAX = 71)] =
            "k_ESteamAwardCategoryID_2021_MAX"),
          (e[(e.k_ESteamAwardCategoryID_2022_GameOfTheYear = 72)] =
            "k_ESteamAwardCategoryID_2022_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2022_VRGameOfTheYear = 73)] =
            "k_ESteamAwardCategoryID_2022_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2022_LaborOfLove = 74)] =
            "k_ESteamAwardCategoryID_2022_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2022_BetterWithFriends = 75)] =
            "k_ESteamAwardCategoryID_2022_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2022_OutstandingVisualStyle = 76)] =
            "k_ESteamAwardCategoryID_2022_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2022_MostInnovativeGameplay = 77)] =
            "k_ESteamAwardCategoryID_2022_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2022_BestGameYouSuckAt = 78)] =
            "k_ESteamAwardCategoryID_2022_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2022_BestSoundtrack = 79)] =
            "k_ESteamAwardCategoryID_2022_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2022_OutstandingStoryRichGame = 80)] =
            "k_ESteamAwardCategoryID_2022_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2022_SitBackAndRelax = 81)] =
            "k_ESteamAwardCategoryID_2022_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2022_BestGameOnTheGo = 82)] =
            "k_ESteamAwardCategoryID_2022_BestGameOnTheGo"),
          (e[(e.k_ESteamAwardCategoryID_2022_MAX = 83)] =
            "k_ESteamAwardCategoryID_2022_MAX"),
          (e[(e.k_ESteamAwardCategoryID_2023_GameOfTheYear = 90)] =
            "k_ESteamAwardCategoryID_2023_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2023_VRGameOfTheYear = 91)] =
            "k_ESteamAwardCategoryID_2023_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2023_LaborOfLove = 92)] =
            "k_ESteamAwardCategoryID_2023_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2023_BestGameOnDeck = 93)] =
            "k_ESteamAwardCategoryID_2023_BestGameOnDeck"),
          (e[(e.k_ESteamAwardCategoryID_2023_BetterWithFriends = 94)] =
            "k_ESteamAwardCategoryID_2023_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2023_OutstandingVisualStyle = 95)] =
            "k_ESteamAwardCategoryID_2023_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2023_MostInnovativeGameplay = 96)] =
            "k_ESteamAwardCategoryID_2023_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2023_BestGameYouSuckAt = 97)] =
            "k_ESteamAwardCategoryID_2023_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2023_BestSoundtrack = 98)] =
            "k_ESteamAwardCategoryID_2023_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2023_OutstandingStoryRichGame = 99)] =
            "k_ESteamAwardCategoryID_2023_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2023_SitBackAndRelax = 100)] =
            "k_ESteamAwardCategoryID_2023_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2023_MAX = 101)] =
            "k_ESteamAwardCategoryID_2023_MAX");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_EVoteDefinitionFlag_None = 0)] =
            "k_EVoteDefinitionFlag_None"),
            (e[(e.k_EVoteDefinitionFlag_OnlyVR = 1)] =
              "k_EVoteDefinitionFlag_OnlyVR"),
            (e[(e.k_EVoteDefinitionFlag_SteamDeck = 2)] =
              "k_EVoteDefinitionFlag_SteamDeck"),
            (e[(e.k_EVoteDefinitionFlag_LaborOfLove = 3)] =
              "k_EVoteDefinitionFlag_LaborOfLove");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_ESteamAwardsNominationSource_Invalid = 0)] =
            "k_ESteamAwardsNominationSource_Invalid"),
            (e[(e.k_ESteamAwardsNominationSource_StorePage = 1)] =
              "k_ESteamAwardsNominationSource_StorePage"),
            (e[(e.k_ESteamAwardsNominationSource_Recommendation = 2)] =
              "k_ESteamAwardsNominationSource_Recommendation"),
            (e[(e.k_ESteamAwardsNominationSource_ModalSearch = 3)] =
              "k_ESteamAwardsNominationSource_ModalSearch"),
            (e[(e.k_ESteamAwardsNominationSource_PartnerEvent = 4)] =
              "k_ESteamAwardsNominationSource_PartnerEvent");
        })(m || (m = {}));
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.voteid || a.aR(c.M()),
            s.initialize(this, e, 0, -1, [5, 7], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  voteid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  active: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  start_time: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  end_time: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  app_discounts: { n: 5, c: _, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  groups: { n: 7, c: y, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  localization: { n: 9, c: B },
                  reveal_time: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  flag: { n: 13, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || a.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  discount: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.groupid || a.aR(y.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  groupid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  group_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  app_discounts: { n: 3, c: _, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.title || a.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  title: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  title_linebreak: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || a.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  sale_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.votes || a.aR(R.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { votes: { n: 1, c, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || a.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  sale_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  language: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitionsForEvents_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.definitions || a.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { definitions: { n: 1, c, r: !0, q: !0 } },
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
          return "CStore_GetVoteDefinitionsForEvents_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.category_id || a.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  category_id: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  category_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  appid: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  write_in_name: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  store_appid: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  developer_id: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
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
          return "CSteamAwardsNomination";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.nominations || a.aR(f.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { nominations: { n: 1, c: g, r: !0, q: !0 } },
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
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, n.MD)(w, t),
            R,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetVoteDefinitionsForEvents = function (e, t) {
            return e.SendMsg(
              "StoreSales.GetVoteDefinitionsForEvents#1",
              (0, n.MD)(b, t),
              p,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          });
      })(u || (u = {})),
        (function (e) {
          e.GetUserNominations = function (e, t) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, n.MD)(E, t),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(d || (d = {}));
    },
  },
]);
