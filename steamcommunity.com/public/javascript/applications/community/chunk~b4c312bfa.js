/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9870],
  {
    28819: (e, r, t) => {
      t.d(r, { KV: () => m, NP: () => w, YK: () => B, uq: () => b });
      var i = t(80613),
        n = t(89068),
        a = t(56545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.recommendationid || n.Sg(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  voted_up: { n: 3, br: n.qM.readBool, bw: n.gp.writeBool },
                  is_public: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  language: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(o.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.reaction_type || n.Sg(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  count: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.recommendationid || n.Sg(c.M()),
            s.initialize(this, e, 0, -1, [27, 40], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  appid: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  review: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  time_created: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: n.qM.readFloat, bw: n.gp.writeFloat },
                  language: {
                    n: 10,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: n.qM.readBool, bw: n.gp.writeBool },
                  is_public: { n: 13, br: n.qM.readBool, bw: n.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: n.qM.readFloat,
                    bw: n.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  refunded: { n: 38, br: n.qM.readBool, bw: n.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  reactions: { n: 40, c: l, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.appid || n.Sg(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(m.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.accountids_recommended || n.Sg(u.M()),
            s.initialize(this, e, 0, -1, [1, 3], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.requests || n.Sg(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { requests: { n: 1, c: w, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || n.Sg(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.recommendations || n.Sg(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { recommendations: { n: 1, c, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      var B;
      !(function (e) {
        (e.Update = function (e, r) {
          return e.SendMsg("UserReviews.Update#1", (0, a.I8)(o, r), d, {
            ePrivilege: 3,
          });
        }),
          (e.GetFriendsRecommendedApp = function (e, r) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, a.I8)(m, r),
              u,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, r) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, a.I8)(b, r),
              p,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(B || (B = {}));
    },
    25809: (e, r, t) => {
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
