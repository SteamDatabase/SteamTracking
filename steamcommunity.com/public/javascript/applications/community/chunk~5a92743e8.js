/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7942],
  {
    80381: (e, r, t) => {
      t.d(r, { K9: () => u, Vy: () => m, fG: () => w, tR: () => d });
      var i = t(45878),
        n = t(29063);
      t(84321);
      const a = i.Message;
      class s extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new s();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new s();
          return s.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.reaction_type || n.aR(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  count: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.recommendationid || n.aR(c.M()),
            a.initialize(this, e, 0, -1, [40], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
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
                  reactions: { n: 40, c: o, r: !0, q: !0 },
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
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.appid || n.aR(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.accountids_recommended || n.aR(l.M()),
            a.initialize(this, e, 0, -1, [1, 3], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
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
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.requests || n.aR(m.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { requests: { n: 1, c: u, r: !0, q: !0 } },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.steamid || n.aR(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class b extends a {
        constructor(e = null) {
          super(),
            b.prototype.recommendations || n.aR(b.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { recommendations: { n: 1, c, r: !0, q: !0 } },
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
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      var w;
      !(function (e) {
        (e.Update = function (e, r) {
          return e.SendMsg("UserReviews.Update#1", r, s, { ePrivilege: 3 });
        }),
          (e.GetFriendsRecommendedApp = function (e, r) {
            return e.SendMsg("UserReviews.GetFriendsRecommendedApp#1", r, l, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetIndividualRecommendations = function (e, r) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              r,
              b,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          });
      })(w || (w = {}));
    },
  },
]);
