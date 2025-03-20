/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9870],
  {
    40594: (e) => {
      e.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    28819: (e, r, t) => {
      "use strict";
      t.d(r, { KV: () => u, NP: () => g, YK: () => i, uq: () => b });
      var i,
        n = t(80613),
        a = t.n(n),
        s = t(89068),
        o = t(56545);
      class l extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.recommendationid || s.Sg(l.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  voted_up: { n: 3, br: s.qM.readBool, bw: s.gp.writeBool },
                  is_public: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  language: { n: 5, br: s.qM.readString, bw: s.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class c extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.reaction_type || s.Sg(c.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  count: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class m extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.recommendationid || s.Sg(m.M()),
            n.Message.initialize(this, e, 0, -1, [27, 40], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  appid: { n: 3, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  review: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                  time_created: {
                    n: 5,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  language: {
                    n: 10,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: s.qM.readBool, bw: s.gp.writeBool },
                  is_public: { n: 13, br: s.qM.readBool, bw: s.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: s.qM.readFloat,
                    bw: s.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  refunded: { n: 38, br: s.qM.readBool, bw: s.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  reactions: { n: 40, c, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(m.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class u extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || s.Sg(u.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.accountids_recommended || s.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.requests || s.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { requests: { n: 1, c: g, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || s.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  appid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.recommendations || s.Sg(B.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { recommendations: { n: 1, c: m, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, r) {
          return e.SendMsg("UserReviews.Update#1", (0, o.I8)(l, r), d, {
            ePrivilege: 3,
          });
        }),
          (e.GetFriendsRecommendedApp = function (e, r) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, o.I8)(u, r),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, r) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, o.I8)(b, r),
              B,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(i || (i = {}));
    },
    31011: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => o, z: () => s });
      var i = t(90626),
        n = t(52038),
        a = t(40594);
      function s({ nPercent: e, indeterminate: r, animate: t, className: s }) {
        return i.createElement("div", {
          className: (0, n.A)(
            a.ProgressBar,
            t && a.AnimateProgress,
            r && a.Indeterminate,
            s,
          ),
          style: { "--percent": e / 100 },
        });
      }
      const o = ({ nPercent: e, size: r = 120, strokeWidth: t = 20 }) => {
        const s = (r - t) / 2,
          o = 2 * Math.PI * s,
          l = o - (e / 100) * o,
          d = 100 == e;
        return i.createElement(
          "div",
          { className: (0, n.A)({ [a.Circular]: !0, [a.Full]: d }) },
          i.createElement(
            "svg",
            { width: r, height: r, style: { transform: "rotate(-90deg)" } },
            i.createElement("circle", {
              cx: r / 2,
              cy: r / 2,
              r: s,
              stroke: "#0c131d",
              strokeWidth: t,
              fill: "none",
            }),
            i.createElement("circle", {
              cx: r / 2,
              cy: r / 2,
              r: s,
              stroke: "#1a9fff",
              strokeWidth: t,
              fill: "none",
              strokeDasharray: o,
              strokeDashoffset: l,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
    },
    25809: (e, r, t) => {
      "use strict";
      t.d(r, { l: () => n });
      var i = t(61859);
      function n(e, r = "#Played_", t = !1) {
        if (e >= 120) {
          let t = e / 60;
          t = Math.round(10 * t) / 10;
          let n = i.pf.GetPreferredLocales(),
            a = t.toLocaleString(n, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            });
          return (0, i.we)(r + "Hours", a);
        }
        return t && 1 == e
          ? (0, i.we)(r + "Minute", e)
          : (0, i.we)(r + "Minutes", e);
      }
    },
  },
]);
