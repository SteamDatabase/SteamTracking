/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2829],
  {
    59067: (e, r, t) => {
      t.d(r, { K9: () => v, Vy: () => p, fG: () => m, tR: () => y });
      var i = t(45878),
        n = t(43898),
        a = t(67328);
      const s = i.Message;
      var o, c, d, l, u, m;
      !(function (e) {
        (e[(e.k_EUserReviewFlaggedByDeveloperType_None = 0)] =
          "k_EUserReviewFlaggedByDeveloperType_None"),
          (e[(e.k_EUserReviewFlaggedByDeveloperType_Abusive = 1)] =
            "k_EUserReviewFlaggedByDeveloperType_Abusive"),
          (e[(e.k_EUserReviewFlaggedByDeveloperType_OffTopic = 2)] =
            "k_EUserReviewFlaggedByDeveloperType_OffTopic"),
          (e[
            (e.k_EUserReviewFlaggedByDeveloperType_ViolatesCommunityGuidelines = 3)
          ] =
            "k_EUserReviewFlaggedByDeveloperType_ViolatesCommunityGuidelines");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_EUserReviewQuality_NotDetermined = 0)] =
            "k_EUserReviewQuality_NotDetermined"),
            (e[(e.k_EUserReviewQuality_Poor = 1)] =
              "k_EUserReviewQuality_Poor"),
            (e[(e.k_EUserReviewQuality_Good = 2)] =
              "k_EUserReviewQuality_Good");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EUserReviewVoteTag_None = 0)] = "k_EUserReviewVoteTag_None"),
            (e[(e.k_EUserReviewVoteTag_Funny = 1)] =
              "k_EUserReviewVoteTag_Funny");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EUserReviewAuditAction_Invalid = 0)] =
            "k_EUserReviewAuditAction_Invalid"),
            (e[(e.k_EUserReviewAuditAction_Banned = 1)] =
              "k_EUserReviewAuditAction_Banned"),
            (e[(e.k_EUserReviewAuditAction_Unbanned = 2)] =
              "k_EUserReviewAuditAction_Unbanned"),
            (e[(e.k_EUserReviewAuditAction_FlaggedByDeveloper = 3)] =
              "k_EUserReviewAuditAction_FlaggedByDeveloper"),
            (e[(e.k_EUserReviewAuditAction_ClearedFlaggedByDeveloper = 4)] =
              "k_EUserReviewAuditAction_ClearedFlaggedByDeveloper"),
            (e[(e.k_EUserReviewAuditAction_VoteBanUsers = 5)] =
              "k_EUserReviewAuditAction_VoteBanUsers"),
            (e[(e.k_EUserReviewAuditAction_ClearVoteBanUsers = 6)] =
              "k_EUserReviewAuditAction_ClearVoteBanUsers"),
            (e[(e.k_EUserReviewAuditAction_ClearReports = 7)] =
              "k_EUserReviewAuditAction_ClearReports"),
            (e[(e.k_EUserReviewAuditAction_ClearedContentCheck = 8)] =
              "k_EUserReviewAuditAction_ClearedContentCheck"),
            (e[(e.k_EUserReviewAuditAction_MarkedAsSuspicious = 9)] =
              "k_EUserReviewAuditAction_MarkedAsSuspicious");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EUserReviewBombPeriodType_OffTopic = 0)] =
            "k_EUserReviewBombPeriodType_OffTopic"),
            (e[(e.k_EUserReviewBombPeriodType_PendingReview = 1)] =
              "k_EUserReviewBombPeriodType_PendingReview"),
            (e[(e.k_EUserReviewBombPeriodType_Testing = 2)] =
              "k_EUserReviewBombPeriodType_Testing");
        })(u || (u = {}));
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.recommendationid || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  voted_up: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
                  is_public: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  language: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.reaction_type || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  count: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.recommendationid || n.aR(B.M()),
            s.initialize(this, e, 0, -1, [40], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  appid: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  review: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  time_created: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  votes_up: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  vote_score: { n: 9, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  language: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  voted_up: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
                  is_public: { n: 13, br: n.FE.readBool, bw: n.Xc.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  review_quality: {
                    n: 27,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: n.FE.readFloat,
                    bw: n.Xc.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  refunded: { n: 38, br: n.FE.readBool, bw: n.Xc.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  reactions: { n: 40, c: b, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.accountids_recommended || n.aR(R.M()),
            s.initialize(this, e, 0, -1, [1, 3], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.requests || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { requests: { n: 1, c: v, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.steamid || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.recommendations || n.aR(g.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { recommendations: { n: 1, c: B, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, r) {
          return e.SendMsg("UserReviews.Update#1", (0, a.MD)(w, r), _, {
            ePrivilege: 3,
          });
        }),
          (e.GetFriendsRecommendedApp = function (e, r) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, a.MD)(y, r),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, r) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, a.MD)(p, r),
              g,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(m || (m = {}));
    },
  },
]);
