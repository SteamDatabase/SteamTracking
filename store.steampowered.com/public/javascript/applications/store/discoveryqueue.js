/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [89672],
    {
      15860: (ee, k, t) => {
        "use strict";
        t.d(k, { L: () => K, c: () => r });
        var e = t(27386),
          h = t(76617),
          A = t(58632),
          l = t.n(A);
        function r(W, _) {
          return new (l())(
            async (M) => {
              const P = [...M],
                I = await e.xtC.GetPlayerLinkDetails(W, { steamids: P }),
                N = new Map();
              return (
                I.Body()
                  .accounts()
                  .forEach((F) => {
                    const z = F.toObject();
                    N.set(z.public_data.steamid, z);
                  }),
                P.map((F) => N.get(F) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ..._ },
          );
        }
        function K(W) {
          return (0, h.V)("PlayerLinkDetails", () => r(W));
        }
      },
      9682: (ee, k, t) => {
        "use strict";
        t.d(k, { KV: () => p, mJ: () => h, Bm: () => e, YK: () => re });
        var e = {};
        t.r(e), t.d(e, { Y: () => _ });
        var h = {};
        t.r(h), t.d(h, { r5: () => M, _Q: () => P, FB: () => I });
        var A = t(80613),
          l = t.n(A),
          r = t(75245),
          K = t(35038);
        const W = 0,
          _ = 1,
          M = 0,
          P = 1,
          I = 2;
        function N(J) {
          return "unknown EUserReviewFlaggedByDeveloperType ( " + J + " )";
        }
        function F(J) {
          return "unknown EUserReviewQuality ( " + J + " )";
        }
        function z(J) {
          return "unknown EUserReviewVoteTag ( " + J + " )";
        }
        function Z(J) {
          return "unknown EUserReviewAuditAction ( " + J + " )";
        }
        function Y(J) {
          return "unknown EUserReviewsAppReviewsFilter ( " + J + " )";
        }
        function X(J) {
          return "unknown EUserReviewsReviewType ( " + J + " )";
        }
        function ne(J) {
          return "unknown EUserReviewsPurchaseType ( " + J + " )";
        }
        function b(J) {
          return "unknown EReviewTagType ( " + J + " )";
        }
        function Q(J) {
          return "unknown EUserReviewBombPeriodType ( " + J + " )";
        }
        class s extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              s.prototype.recommendationid || r.Sg(s.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    recommendationid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    review_text: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    voted_up: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                    is_public: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    language: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    is_in_early_access: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    received_compensation: {
                      n: 7,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    comments_disabled: {
                      n: 8,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    hide_in_steam_china: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    saved_hardware_id: {
                      n: 10,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = r.w0(s.M())), s.sm_mbf;
          }
          toObject(n = !1) {
            return s.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(s.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(s.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new s();
            return s.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(s.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return s.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(s.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Update_Request";
          }
        }
        class B extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(), A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          toObject(n = !1) {
            return B.toObject(n, this);
          }
          static toObject(n, f) {
            return n ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(n) {
            return new B();
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new B();
            return B.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return n;
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return B.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {}
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Update_Response";
          }
        }
        class u extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              u.prototype.saved_hardware_id || r.Sg(u.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    saved_hardware_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = r.w0(u.M())), u.sm_mbf;
          }
          toObject(n = !1) {
            return u.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(u.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(u.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new u();
            return u.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(u.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return u.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(u.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_BackfillSavedHardware_Request";
          }
        }
        class g extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              g.prototype.num_backfilled || r.Sg(g.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    num_backfilled: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(n = !1) {
            return g.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(g.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(g.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new g();
            return g.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(g.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return g.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(g.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_BackfillSavedHardware_Response";
          }
        }
        class o extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              o.prototype.reaction_type || r.Sg(o.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    reaction_type: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    count: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(n = !1) {
            return o.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(o.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(o.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new o();
            return o.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(o.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return o.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(o.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_LoyaltyReaction";
          }
        }
        class c extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              c.prototype.id || r.Sg(c.M()),
              A.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    id: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    ranges: { n: 2, c: a, r: !0, q: !0 },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = r.w0(c.M())), c.sm_mbf;
          }
          toObject(n = !1) {
            return c.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(c.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(c.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new c();
            return c.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(c.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return c.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(c.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_Tag";
          }
        }
        class a extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              a.prototype.start || r.Sg(a.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    start: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    end: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = r.w0(a.M())), a.sm_mbf;
          }
          toObject(n = !1) {
            return a.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(a.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(a.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new a();
            return a.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(a.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return a.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(a.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_Tag_Range";
          }
        }
        class i extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              i.prototype.recommendationid || r.Sg(i.M()),
              A.Message.initialize(this, n, 0, -1, [27, 40, 54], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              i.sm_m ||
                (i.sm_m = {
                  proto: i,
                  fields: {
                    recommendationid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    review: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                    time_created: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    time_updated: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    votes_up: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    votes_down: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vote_score: {
                      n: 9,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    language: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    comment_count: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    voted_up: { n: 12, br: r.qM.readBool, bw: r.gp.writeBool },
                    is_public: { n: 13, br: r.qM.readBool, bw: r.gp.writeBool },
                    moderator_hidden: {
                      n: 14,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    flagged_by_developer: {
                      n: 15,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    report_score: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    steamid_moderator: {
                      n: 17,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid_developer: {
                      n: 18,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid_dev_responder: {
                      n: 19,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    developer_response: {
                      n: 20,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    time_developer_responded: {
                      n: 21,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    developer_flag_cleared: {
                      n: 22,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    written_during_early_access: {
                      n: 23,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    votes_funny: {
                      n: 24,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    received_compensation: {
                      n: 25,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    unverified_purchase: {
                      n: 26,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    review_qualities: {
                      n: 27,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    weighted_vote_score: {
                      n: 28,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    moderation_note: {
                      n: 29,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    payment_method: {
                      n: 30,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    playtime_2weeks: {
                      n: 31,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    playtime_forever: {
                      n: 32,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    last_playtime: {
                      n: 33,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    comments_disabled: {
                      n: 34,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    playtime_at_review: {
                      n: 35,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    approved_for_china: {
                      n: 36,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    ban_check_result: {
                      n: 37,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    refunded: { n: 38, br: r.qM.readBool, bw: r.gp.writeBool },
                    account_score_spend: {
                      n: 39,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    reactions: { n: 40, c: o, r: !0, q: !0 },
                    ipaddress: {
                      n: 41,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    hidden_in_steam_china: {
                      n: 42,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    steam_china_location: {
                      n: 43,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    category_ascii_pct: {
                      n: 44,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    category_meme_pct: {
                      n: 45,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    category_offtopic_pct: {
                      n: 46,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    category_uninformative_pct: {
                      n: 47,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    category_votefarming_pct: {
                      n: 48,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    deck_playtime_at_review: {
                      n: 49,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    is_bot_review_pct: {
                      n: 50,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    positivity_pct: {
                      n: 51,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    tags_with_ranges: { n: 54, c, r: !0, q: !0 },
                    saved_hardware_id: {
                      n: 56,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    hardware_cluster_id: {
                      n: 57,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = r.w0(i.M())), i.sm_mbf;
          }
          toObject(n = !1) {
            return i.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(i.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(i.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new i();
            return i.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(i.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return i.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(i.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "RecommendationDetails";
          }
        }
        class p extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              p.prototype.appid || r.Sg(p.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = r.w0(p.M())), p.sm_mbf;
          }
          toObject(n = !1) {
            return p.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(p.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(p.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new p();
            return p.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(p.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return p.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(p.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Request";
          }
        }
        class m extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              m.prototype.accountids_recommended || r.Sg(m.M()),
              A.Message.initialize(this, n, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    accountids_recommended: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    accountids_not_recommended: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(n = !1) {
            return m.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(m.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(m.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new m();
            return m.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(m.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return m.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(m.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Response";
          }
        }
        class C extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              C.prototype.requests || r.Sg(C.M()),
              A.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: { requests: { n: 1, c: D, r: !0, q: !0 } },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(n = !1) {
            return C.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(C.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(C.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new C();
            return C.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(C.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return C.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(C.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Request";
          }
        }
        class D extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              D.prototype.steamid || r.Sg(D.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = r.w0(D.M())), D.sm_mbf;
          }
          toObject(n = !1) {
            return D.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(D.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(D.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new D();
            return D.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(D.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return D.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(D.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
          }
        }
        class G extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              G.prototype.recommendations || r.Sg(G.M()),
              A.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { recommendations: { n: 1, c: i, r: !0, q: !0 } },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(n = !1) {
            return G.toObject(n, this);
          }
          static toObject(n, f) {
            return r.BT(G.M(), n, f);
          }
          static fromObject(n) {
            return r.Uq(G.M(), n);
          }
          static deserializeBinary(n) {
            let f = new (l().BinaryReader)(n),
              $ = new G();
            return G.deserializeBinaryFromReader($, f);
          }
          static deserializeBinaryFromReader(n, f) {
            return r.zj(G.MBF(), n, f);
          }
          serializeBinary() {
            var n = new (l().BinaryWriter)();
            return G.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, f) {
            r.i0(G.M(), n, f);
          }
          serializeBase64String() {
            var n = new (l().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Response";
          }
        }
        var re;
        ((J) => {
          function n(ie, te, v) {
            return ie.SendMsg("UserReviews.Update#1", (0, K.I8)(s, te, v), B, {
              ePrivilege: 3,
            });
          }
          J.Update = n;
          function f(ie, te, v) {
            return ie.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, K.I8)(u, te, v),
              g,
              { ePrivilege: 1 },
            );
          }
          J.BackfillSavedHardware = f;
          function $(ie, te, v) {
            return ie.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, K.I8)(p, te, v),
              m,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          J.GetFriendsRecommendedApp = $;
          function Ue(ie, te, v) {
            return ie.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, K.I8)(C, te, v),
              G,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          J.GetIndividualRecommendations = Ue;
        })(re || (re = {}));
      },
      94253: (ee, k, t) => {
        "use strict";
        t.d(k, {
          t5: () => re,
          os: () => te,
          Qt: () => $,
          CC: () => G,
          Oz: () => D,
          lu: () => J,
        });
        var e = t(23386),
          h = t(72609),
          A = t(68312),
          l = t(75233),
          r = t(80902),
          K = t(51614),
          W = t(90626),
          _ = t(45806),
          M = t(33828),
          P = t(48491),
          I = t(67705),
          N = t(72604),
          F = t(31224),
          z = t(7112);
        const Z = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function Y(v, j) {
          const x = await z.Qm.CanClaimItem(v, { language: j });
          if (x.GetEResult() != N.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + x.GetEResult(),
            );
          const U = x.Body().toObject(),
            ue = U.reward_item?.defid ? U.reward_item : void 0;
          return {
            bCanClaimNewItem: !!U.can_claim,
            bAlreadyClaimedCurrentItem: !!ue,
            appid: ue?.appid,
            community_item_type: ue?.community_item_type,
            community_item_class: ue?.community_item_class,
            rtNextClaimTime:
              (U.next_claim_time ?? 0) > 0 ? U.next_claim_time : void 0,
          };
        }
        async function X(v, j) {
          const x = await z.Qm.ClaimItem(v, { language: j });
          if (x.GetEResult() == N.Ze) return Y(v, j);
          if (x.GetEResult() != N.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + x.GetEResult(),
            );
          const U = x.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: U?.appid,
            community_item_type: U?.community_item_type,
            community_item_class: U?.community_item_class,
            rtNextClaimTime:
              (x.Body().next_claim_time() ?? 0) > 0
                ? x.Body().next_claim_time()
                : void 0,
          };
        }
        async function ne(v, j) {
          const x = await F.uy.ActivateProfileModifierItem(v, {
            communityitemid: j.communityitemid,
            appid: j.appid,
            activate: !0,
          });
          if (x.GetEResult() != N.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + x.GetEResult(),
            );
          return x.GetEResult();
        }
        async function b(v, j, x, U) {
          return (
            await z.Qm.GetCurrentDefinition(v, {
              sale_def_type: j,
              language: x,
              include_community_item_def: U,
            })
          )
            .Body()
            .toObject();
        }
        async function Q(v, j, x, U) {
          return (
            await z.Qm.GetClaimedSaleRewards(v, {
              sale_def_type: j,
              language: x,
              include_community_item_def: U,
            })
          )
            .Body()
            .toObject();
        }
        let s;
        function B() {
          const v = (0, _.q)();
          if (v) return v.GetServiceTransport();
          if (!s) {
            const j = (0, I.Fd)("loyalty_webapi_token", "application_config");
            s = j ? new P.D(h.TS.WEBAPI_BASE_URL, j) : (0, M.P)();
          }
          return s.GetServiceTransport();
        }
        async function u(v) {
          return Y(B(), v);
        }
        async function g(v) {
          return X(B(), v);
        }
        async function o(v) {
          return ne(B(), v);
        }
        const c = 300 * 1e3;
        let a = !1,
          i = null;
        const p = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: e.Ed,
        };
        function m(v) {
          return ["SaleItemCanClaim", v];
        }
        function C(v) {
          return {
            queryKey: m(v),
            queryFn: () => u(v),
            enabled: !a,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function D() {
          const v = h.TS.LANGUAGE,
            j = (0, l.jE)(),
            { data: x, isLoading: U } = (0, r.I)(C(v)),
            ue = x?.rtNextClaimTime;
          return (
            (0, W.useEffect)(() => {
              let pe = 0;
              if (ue) {
                const me = () => {
                  const Se = ue * 1e3 - Date.now();
                  if (Se <= 0) {
                    j.invalidateQueries({ queryKey: m(v) });
                    return;
                  }
                  pe = window.setTimeout(me, Se > c ? Se / 2 : Se);
                };
                me();
              }
              return () => window.clearTimeout(pe);
            }, [ue, v, j]),
            { ...(x ?? Z), bLoading: U }
          );
        }
        function G() {
          const v = (0, l.jE)(),
            { mutateAsync: j } = (0, K.n)({
              mutationFn: () => {
                if (i) {
                  const U = i;
                  return (i = null), Promise.resolve(U);
                }
                return a
                  ? Promise.resolve(v.getQueryData(m(h.TS.LANGUAGE)) ?? Z)
                  : g(h.TS.LANGUAGE);
              },
              onSuccess: (U) => v.setQueryData(m(h.TS.LANGUAGE), U),
            });
          return { fnClaimItem: (0, W.useCallback)(() => j(), [j]) };
        }
        function re() {
          return (0, K.n)({ mutationFn: (v) => o(v) });
        }
        function J() {
          const v = (0, l.jE)();
          return {
            fnSetClaimState: (0, W.useCallback)(
              (x) => {
                (a = !0),
                  (i = x.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...p,
                      }
                    : null),
                  v.setQueryData(m(h.TS.LANGUAGE), x);
              },
              [v],
            ),
          };
        }
        function n(v, j, x) {
          return ["SaleRewardsGetDefinition", v, j, x];
        }
        function f(v, j, x, U) {
          return {
            queryKey: n(j, x, U),
            queryFn: () => b(v, j, x, U),
            staleTime: 1 / 0,
          };
        }
        function $(v, j, x) {
          const U = (0, A.KV)();
          return (0, r.I)(f(U, v, j, x));
        }
        function Ue(v, j, x, U) {
          return ["GetClaimedSaleRewards", v, j, !!x, U];
        }
        function ie(v, j, x, U, ue) {
          return {
            queryKey: Ue(j, x, U, ue),
            queryFn: () => Q(v, j, x, U),
            staleTime: 1 / 0,
          };
        }
        function te(v, j, x, U) {
          const ue = (0, A.KV)();
          return (0, r.I)(ie(ue, v, j, x, U));
        }
      },
      63639: (ee, k, t) => {
        "use strict";
        t.d(k, { S: () => P });
        var e = t(7850),
          h = t(12997),
          A = t(90626),
          l = t(52438);
        const r = {
            name: "trailerPrefs",
            options: { path: "/", secure: !0, maxAge: 720 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          K = { flVolume: 0.8, bMuted: !0 };
        function W(I) {
          return I.flVolume === K.flVolume && I.bMuted === K.bMuted;
        }
        function _() {
          try {
            const I = (0, l.j_)(r);
            if (!I) return K;
            const N = JSON.parse(I);
            return {
              flVolume: typeof N.flVolume == "number" ? N.flVolume : K.flVolume,
              bMuted: typeof N.bMuted == "boolean" ? N.bMuted : K.bMuted,
            };
          } catch {
            return K;
          }
        }
        function M(I) {
          W(I) || Object.keys(I).length == 0
            ? (0, l.Y1)(r)
            : (0, l.eV)(r, JSON.stringify(I));
        }
        function P(I) {
          let { children: N } = I;
          const [F, z] = (0, A.useState)(() => _());
          return (
            (0, A.useEffect)(() => {
              M(F);
            }, [F]),
            (0, e.jsx)(h.v, {
              playerVolume: F.flVolume,
              setPlayerVolume: (Z) => z((Y) => ({ ...Y, flVolume: Z })),
              audioMuted: F.bMuted,
              setAudioMuted: (Z) => z((Y) => ({ ...Y, bMuted: Z })),
              children: N,
            })
          );
        }
      },
      72408: (ee, k, t) => {
        "use strict";
        t.d(k, { y3: () => dt, W3: () => ht, TK: () => ot, u4: () => lt });
        var e = t(7850),
          h = t(19298),
          A = t(29522),
          l = t(40358),
          r = t(72865),
          K = t(10134),
          W = t(62292),
          _ = t(80902),
          M = t(68312),
          P = t(72609),
          I = t(20125),
          N = t(98609);
        async function F(L, O) {
          const V = (0, I.Am)(N.TS.STORE_BASE_URL, O, N.iA.country_code);
          return (await (await fetch(V)).json()).rgRecommendedTags || [];
        }
        function z() {
          const L = (0, M.KV)(),
            O = P.iA.accountid;
          return (0, _.I)(Z(L, O));
        }
        function Z(L, O) {
          return {
            queryKey: Y(O),
            queryFn: async () => (O ? await F(L, O) : []),
            staleTime: 600 * 1e3,
          };
        }
        function Y(L) {
          return ["RecommendedTag", L ?? 0];
        }
        var X = t(54528),
          ne = t(96362),
          b = t(90626),
          Q = t(21690),
          s = t(36707),
          B = t(18210),
          u = t(3166),
          g = t(74732),
          o = t(31377),
          c = t(36054),
          a = t.n(c),
          i = t(63639),
          p = t(21721),
          m = t(25046),
          C = t(87249),
          D = t(50573),
          G = t(41032),
          re = t(47045),
          J = t(16412),
          n = t(36118),
          f = t(97996),
          $ = t(57589),
          Ue = t(83581),
          ie = t.n(Ue);
        function te(L, O) {
          b.useEffect(() => {
            if (!O || !O.onended || !L) return;
            let V = O.onended,
              le = setTimeout(() => {
                V();
              }, 6 * 1e3);
            return () => clearTimeout(le);
          }, [L, O]);
        }
        function v(L, O) {
          b.useEffect(() => {
            if (!L) return;
            const V = () => O(!0),
              q = () => O(!1);
            return (
              L.addEventListener("play", V),
              L.addEventListener("pause", q),
              () => {
                L.removeEventListener("play", V),
                  L.removeEventListener("pause", q);
              }
            );
          }, [O, L]);
        }
        function j(L, O, V, q) {
          return b.useCallback(() => {
            L == D.Tw
              ? O(!0)
              : L == D.g && V
                ? V.paused
                  ? V.play()
                  : V.pause()
                : L == D.Jh && q && (q.IsPaused() ? q.Play() : q.Pause());
          }, [L, V, q, O]);
        }
        function x(L, O, V, q, le, fe) {
          const [ge, Pe] = b.useState(!1);
          b.useEffect(() => {
            L && !ge
              ? O == D.g && V && q
                ? (V.pause(), Pe(!0))
                : O == D.Jh && le && fe && (le.Pause(), Pe(!0))
              : !L &&
                ge &&
                (O == D.g && V ? V.play() : O == D.Jh && le && le.Play(),
                Pe(!1));
          }, [O, L, ge, q, fe, V, le]);
        }
        var U = t(64271),
          ue = t(39905);
        const pe = new $.wd("TrailerAppVideo"),
          me = "bGameHighlightAutoplayDisabled";
        function Se(L) {
          const {
              id: O,
              bCurrentlyActive: V,
              autoPlayCookieName: q,
              trailerBaseID: le,
              showScreenshotInsteadOfMainCap: fe,
              autoplayCheckboxPosition: ge,
              refTogglePlayPause: Pe,
              bShowAOAutoPlayWarning: xe,
              ...Ve
            } = L,
            [Ke, $e] = b.useState(!1),
            [Le, Fe] = b.useState(!1),
            Ze = (0, G.$9)(),
            Ye = (0, m.BF)(O, le, !0, xe),
            { data: Xe } = (0, l.J$)(O),
            { data: at } = (0, l.lv)(O),
            be = (0, p.DT)(O),
            ke = (xe ?? !0) && Ye && !Ye.all_ages && Ze == "masked",
            tt = (0, G.AS)(),
            [rt, ut] = b.useState(!1),
            [nt, yt] = b.useState(D.Tw),
            [Re, At] = (0, b.useState)(null),
            [ze, vt] = (0, b.useState)(null),
            { bCookieLoaded: ft } = Ge(q, V, $e),
            st = ft;
          b.useEffect(() => {
            V && st && Ke && !ke && Fe(!0);
          }, [Ke, st, V, ke]),
            b.useEffect(() => {
              ke && Le && Ke && tt();
            }, [Le, ke, Ke, tt]);
          const St = (y) => {
              (0, f.lc)(q ?? me, String(!y), 365 * 10), $e(y), Fe(y);
            },
            ct = j(nt, Fe, ze, Re);
          b.useEffect(() => {
            Pe && (Pe.current = ct);
          }, [ct, Pe]);
          const E =
            fe && be && be.length > 0
              ? (0, p.bu)(be[0], "600x338")
              : at
                ? (0, p.b0)(at, "main_capsule")
                : void 0;
          return (0, e.jsxs)(h.Z, {
            className: ie().AppCarouselTrailerCtn,
            onMouseEnter: () => ut(!0),
            onMouseLeave: () => ut(!1),
            children: [
              (0, e.jsx)("button", {
                onClick: ct,
                "aria-label": ue.Z.Localize("#SaleTrailerCarousel_PlayPause"),
                children: (0, e.jsx)("img", {
                  className: (0, s.A)(
                    ie().AppMainCap,
                    nt != D.Tw && ie().Hidden,
                  ),
                  src: E,
                  alt: "",
                }),
              }),
              Xe &&
                (0, e.jsx)(et, {
                  appID: Xe.appid,
                  bAutoplayVideos: Ke,
                  autoplayCheckboxPosition: ge,
                  fnSetAutoPlayVideos: St,
                }),
              (0, e.jsx)(D.hj, {
                name: Xe?.name ?? "",
                trailerCategory: Ye?.trailer_category,
                trailerDisplay: nt,
                mouseOver: rt,
              }),
              (0, e.jsx)(Be, {
                eTrailerDisplay: nt,
                setTrailerDisplay: yt,
                featuredTrailer: Ye,
                fnSetMainTrailer: At,
                fnSetMicroTrailer: vt,
                loadedAndActive: st && V,
                setVideoShouldStart: Fe,
                bMouseOverVideo: rt,
                id: O,
                fnTogglePlayPause: ct,
                bAutoplayVideos: Ke,
                bVideoShouldStart: Le,
                ...Ve,
              }),
              ke &&
                Ke &&
                (0, e.jsxs)("div", {
                  className: ie().AOWarning,
                  children: [
                    (0, e.jsx)("div", {
                      className: ie().Text,
                      children: (0, B.we)("#StoreTrailer_AOWarning_1"),
                    }),
                    (0, e.jsx)("div", {
                      className: ie().Text,
                      children: (0, B.we)("#StoreTrailer_AOWarning_2"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Ne(L, O) {
          const [V, q] = b.useState(!1);
          return (
            b.useEffect(() => (L && (O(), q(!0)), () => q(!1)), [L, O]),
            { bCookieLoaded: V }
          );
        }
        function Ge(L, O, V) {
          const q = b.useCallback(() => {
            const le = (0, f.VY)(L ?? me),
              fe = !!(le && le.toLowerCase() === "true");
            V(!fe);
          }, [L, V]);
          return Ne(O, q);
        }
        function Be(L) {
          const {
              id: O,
              featuredTrailer: V,
              bSkipMicroTrailer: q,
              nFadeRatio: le,
              fnPlayPause: fe,
              bRequestPause: ge,
              fnComplete: Pe,
              eTrailerDisplay: xe,
              setTrailerDisplay: Ve,
              fnSetMainTrailer: Ke,
              fnSetMicroTrailer: $e,
              loadedAndActive: Le,
              setVideoShouldStart: Fe,
              fnTogglePlayPause: Ze,
              bAutoplayVideos: Ye,
              bVideoShouldStart: Xe,
            } = L,
            [at, be] = b.useState(!1),
            [ke, tt] = b.useState(!1),
            [rt, ut] = b.useState(!1),
            [nt, yt] = b.useState(!1),
            [Re, At] = (0, b.useState)(null),
            [ze, vt] = (0, b.useState)(null),
            { data: ft } = (0, l.J$)(O),
            st = !!V;
          b.useEffect(() => {
            let E = !1;
            Le &&
              ke &&
              st &&
              (E = xe === D.Tw || (xe === D.g && !rt) || (xe === D.Jh && !nt)),
              be(E),
              fe?.(Ye && E);
          }, [fe, xe, nt, rt, Le, Ye, ke, st]),
            v(ze, ut),
            b.useEffect(() => {
              Xe ||
                (Ve(D.Tw),
                be(!1),
                tt(!1),
                ze && (ze.pause(), (ze.currentTime = 0)),
                Re && (Re.Pause(), Re.SeekToStart()));
            }, [Xe, Re, ze, Ve]);
          const St = b.useRef(!1);
          b.useEffect(() => {
            if (Le && xe === D.Tw)
              if ((tt(!0), Xe)) {
                if (Re) {
                  pe.Debug("Starting microtrailer"), Ve(D.g);
                  const E = () => He(St, Ve, Re);
                  q || !ze
                    ? E()
                    : (ut(!0),
                      (ze.onended = E),
                      it(ze, "microtrailer", () => ut(!1)));
                }
              } else pe.Debug("Showing image");
          }, [Le, xe, q, Xe, Pe, Ve, Re, ze]),
            te(rt, ze),
            b.useEffect(() => {
              Le || Fe(!1);
            }, [Le, Fe]),
            x(!!ge, xe, ze, rt, Re, nt);
          const ct = (0, b.useCallback)((E) => {
            $e(E), vt(E);
          }, []);
          return !ft || !ft.visible || !V
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  at &&
                    (0, e.jsx)(h.Z, {
                      focusable: !0,
                      onClick: Ze,
                      className: ie().PlayButton,
                      children: (0, e.jsx)(n.IOc, {}),
                    }),
                  V.microtrailer &&
                    (0, e.jsx)("video", {
                      className: we(!0, xe),
                      ref: ct,
                      preload: "auto",
                      playsInline: !0,
                      muted: !0,
                      onClick: Ze,
                      children: (0, e.jsx)(C.Ck, { trailer: V }),
                    }),
                  (0, e.jsx)(d, {
                    trailer: V,
                    onRefChange: (E) => {
                      At(E), Ke(E);
                    },
                    eTrailerDisplay: xe,
                    fadeRatio: le,
                    onPlayPauseChange: yt,
                    onPlaybackEnd: Pe,
                  }),
                ],
              });
        }
        function d(L) {
          let {
            trailer: O,
            eTrailerDisplay: V,
            fadeRatio: q,
            onPlayPauseChange: le,
            onPlaybackEnd: fe,
            onRefChange: ge,
          } = L;
          const [Pe, xe] = (0, b.useState)(null);
          (0, b.useEffect)(() => {
            if (q !== void 0 && Pe) {
              let Ze = Pe.GetVolume() * q;
              Pe.SetVolume(Ze, !0);
            }
          }, [q, Pe]);
          let Ve = V != D.Jh,
            Ke = we(!1, V);
          const $e = (0, b.useMemo)(() => (0, m.hg)(O), [O]),
            Le = (0, b.useCallback)((Ze) => {
              xe(Ze), ge(Ze);
            }, []),
            Fe = (0, b.useCallback)(() => {
              le(!0);
            }, [le]);
          return (0, e.jsx)(i.S, {
            children: (0, e.jsx)("div", {
              className: Ke,
              children: (0, e.jsx)(U.P, {
                ref: Le,
                dashManifests: $e.rgDashTrailers,
                hlsManifest: $e.rgHlsTrailers[0],
                captionManifest: (0, m.Wv)(O),
                screenshot: "",
                altText: O.trailer_name,
                forcePause: Ve,
                muteWhenAutoplayBlocked: !0,
                onPlaybackEnd: fe,
                onPlaybackStart: Fe,
                onPlayPauseChange: le,
              }),
            }),
          });
        }
        function He(L, O, V) {
          L.current ||
            ((L.current = !0),
            pe.Debug("Starting main trailer"),
            O(D.Jh),
            V.Play());
        }
        function it(L, O, V) {
          L.play().catch((q) => {
            V(), pe.Warning(`Failed to play ${O}: `, q);
          });
        }
        function we(L, O) {
          return (0, s.A)({
            [ie().AppVideo]: !0,
            [ie().PlayFullTrailer]: O == D.Jh,
            [ie().PlayMicrotrailer]: O == D.g,
            [ie().NoTrailer]: O == D.Tw,
            [ie().Microtrailer]: L,
            [ie().Trailer]: !L,
          });
        }
        function et(L) {
          const {
              appID: O,
              bAutoplayVideos: V,
              fnSetAutoPlayVideos: q,
              autoplayCheckboxPosition: le,
            } = L,
            fe = { [le || "top"]: 0 };
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)("div", {
              onClick: (ge) => {
                ge.preventDefault(), ge.stopPropagation();
              },
              className: ie().AutoplayCheckboxCtn,
              children: (0, e.jsx)(
                J.Yh,
                {
                  controlled: !0,
                  checked: V,
                  className: ie().AutoplayCheckbox,
                  style: fe,
                  label: re.n.Localize("#StoreTrailer_AutoPlayVideos"),
                  onChange: q,
                },
                O,
              ),
            }),
          });
        }
        function dt(L) {
          const {
              appID: O,
              trailerBaseID: V,
              focused: q,
              skipMicroTrailer: le,
              autoPlayCookieName: fe,
              showAOAutoPlayWarning: ge,
              showScreenshotInsteadOfMainCap: Pe,
              fadeRatio: xe,
              fnPlayPause: Ve,
              refTogglePlayPause: Ke,
              bRequestPause: $e,
              fnComplete: Le,
            } = L,
            Fe = (0, A.$5)(O),
            { data: Ze } = (0, l.J$)(Fe),
            { data: Ye } = (0, l.qI)(Fe),
            { bIsIgnored: Xe } = ot(O),
            { bIsWishlisted: at } = lt(O),
            { bIsWishlisted: be } = lt(Ze?.related_items?.parent_appid),
            [ke, tt] = (0, Q.FD)();
          return (0, e.jsxs)(h.Z, {
            className: (0, s.A)(a().AppVideoCtn, "AppVideoCtn"),
            children: [
              (0, e.jsx)("div", {
                className: (0, s.A)(
                  a().WishlistBadge,
                  (at || be) && a().Active,
                ),
                children: (0, B.we)("#Sale_OnWishlist"),
              }),
              ke &&
                (0, e.jsx)(Q.Ff, {
                  eDisplay: tt,
                  className: a().DeckVerifiedLogo,
                  storeItemPlatform: Ye,
                }),
              (0, e.jsxs)("div", {
                className: a().VideoArea,
                children: [
                  (0, e.jsx)(gt, { appID: O }),
                  (0, e.jsx)(
                    Se,
                    {
                      id: Fe,
                      trailerBaseID: V,
                      bCurrentlyActive: q && !Xe,
                      autoplayCheckboxPosition: "top",
                      autoPlayCookieName: fe,
                      bShowAOAutoPlayWarning: ge,
                      bSkipMicroTrailer: le,
                      nFadeRatio: xe,
                      showScreenshotInsteadOfMainCap: Pe,
                      fnPlayPause: Ve,
                      refTogglePlayPause: Ke,
                      bRequestPause: $e,
                      fnComplete: Le,
                    },
                    O,
                  ),
                ],
              }),
            ],
          });
        }
        function ot(L) {
          const O = (0, K.BD)(L),
            V = (0, r.ru)(),
            { mutateAsync: q } = (0, W.Q)(L, !O, V);
          return { bIsIgnored: O, fnUpdateIgnored: q };
        }
        function gt(L) {
          const { appID: O } = L,
            V = (0, u.Qn)(),
            { bIsIgnored: q, fnUpdateIgnored: le } = ot(O);
          return (0, e.jsx)("div", {
            className: (0, s.A)(a().IgnoredCtn, q && a().Active),
            children: (0, e.jsxs)("div", {
              className: (0, s.A)(a().IgnoredInfo, q && a().Active),
              children: [
                (0, e.jsx)("div", {
                  className: a().IgnoredTitle,
                  children: (0, B.we)("#SaleTrailerCarousel_Ignored"),
                }),
                (0, e.jsx)("div", {
                  className: a().IgnoredDescription,
                  children: (0, B.we)(
                    "#SaleTrailerCarousel_IgnoredConfirmation",
                  ),
                }),
                (0, e.jsxs)(h.Z, {
                  className: (0, s.A)(a().UndoButton, a().UndoIgnoreButton),
                  onClick: le,
                  children: [
                    V &&
                      (0, e.jsx)(o.$m, {
                        button: g.g4.X,
                        type: o.wt.Light,
                        size: o.xY.Medium,
                      }),
                    (0, B.we)("#SaleTrailerCarousel_Undo"),
                  ],
                }),
              ],
            }),
          });
        }
        function lt(L) {
          const O = !!(0, X.bB)(L),
            V = (0, r.ru)(),
            { mutate: q } = (0, ne.s)(L, !O, V);
          return { bIsWishlisted: O, fnUpdateWishlist: q };
        }
        function ht(L) {
          const { data: O } = z(),
            V = b.useMemo(
              () =>
                new Map(
                  (O || []).map((fe) => fe.tagid).map((fe, ge) => [fe, ge]),
                ),
              [O],
            ),
            q = b.useMemo(() => new Map(L.map((fe, ge) => [fe, ge])), [L]);
          return b.useMemo(
            () =>
              L.slice().sort((fe, ge) =>
                V.has(fe) && !V.has(ge)
                  ? -1
                  : !V.has(fe) && V.has(ge)
                    ? 1
                    : V.has(fe)
                      ? V.get(fe) - (V.get(ge) ?? 0)
                      : q.get(fe) - q.get(ge),
              ),
            [q, V, L],
          );
        }
      },
      76617: (ee, k, t) => {
        "use strict";
        t.d(k, { V: () => _ });
        function e(M) {
          return Object.prototype.toString.call(M) === "[object Object]";
        }
        function h(M) {
          if (!e(M)) return !1;
          const P = M.constructor;
          if (typeof P > "u") return !0;
          const I = P.prototype;
          return !(
            !e(I) || !Object.prototype.hasOwnProperty.call(I, "isPrototypeOf")
          );
        }
        function A(...M) {
          return JSON.stringify(M, (P, I) => {
            if (h(I)) {
              const N = {};
              return (
                Object.keys(I)
                  .sort()
                  .forEach((F) => {
                    N[F] = I[F];
                  }),
                N
              );
            }
            return I;
          });
        }
        var l = t(90626),
          r = t(7850);
        const K = (0, l.createContext)({ instances: {}, factories: {} });
        function W(M) {
          const { name: P, fnFactory: I, children: N } = M,
            F = React.useContext(K),
            [z] = useState({}),
            Z = useMemo(
              () => ({
                instances: z,
                factories: { ...F.factories, [P]: I },
                parent: F,
              }),
              [z, P, F],
            );
          return jsx(K.Provider, { value: Z, children: N });
        }
        function _(M, P) {
          const I = (0, l.useContext)(K),
            N = typeof M == "string" ? M : A(...M);
          let F = I;
          for (; F; ) {
            if (N in F.instances) return F.instances[N];
            if (N in F.factories) break;
            F = F.parent;
          }
          const Z = (F?.factories[N] ?? P)();
          return ((F ?? I).instances[N] = Z), Z;
        }
      },
      90405: (ee, k, t) => {
        "use strict";
        t.d(k, { K: () => W, _: () => K });
        var e = t(7850),
          h = t(90626),
          A = t(81944),
          l = t(19298);
        const r = h.createContext({ enabled: !0 });
        function K(_) {
          const { enabled: M, children: P } = _,
            I = h.useMemo(() => ({ enabled: M }), [M]);
          return (0, e.jsx)(r.Provider, { value: I, children: P });
        }
        function W(_) {
          const {
              placeholderWidth: M,
              placeholderHeight: P,
              holdGamepadFocus: I = !1,
              onRender: N,
              style: F,
              mode: z = "JustLoad",
              children: Z,
              ...Y
            } = _,
            X = h.useContext(r),
            [ne, b] = h.useState(() => ({
              bRenderChildren: !X.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            Q = h.useRef(null),
            s = z === "LoadAndUnload" && X.enabled,
            B = h.useCallback(
              (c) => {
                b((a) => {
                  if (a.bRenderChildren === c || (a.bRenderChildren && !s))
                    return a;
                  let i = 0,
                    p = 0;
                  if (Q.current) {
                    const m = Q.current.getBoundingClientRect();
                    m && ((i = m.width), (p = m.height));
                  }
                  return (
                    c && N && N(),
                    {
                      bRenderChildren: c,
                      nPrevRenderWidth: i,
                      nPrevRenderHeight: p,
                    }
                  );
                });
              },
              [s, N],
            );
          h.useEffect(() => {
            X.enabled || B(!0);
          }, [X.enabled, B]);
          let u = F;
          if (!ne.bRenderChildren) {
            const c = ne.nPrevRenderWidth || M,
              a = ne.nPrevRenderHeight || P;
            (a !== void 0 || c !== void 0) &&
              (u = { ...F, minHeight: a, minWidth: c });
          }
          const g = s ? "repeated" : "once";
          let o = (0, e.jsx)(A.J, {
            containerRef: Q,
            style: u,
            ...Y,
            onVisibilityChange: B,
            trigger: g,
            children: ne.bRenderChildren && Z,
          });
          return (
            I &&
              (o = (0, e.jsx)(l.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: o,
              })),
            o
          );
        }
      },
      66825: (ee, k, t) => {
        "use strict";
        t.r(k), t.d(k, { default: () => z });
        var e = t(7850),
          h = t(90626),
          A = t(19298),
          l = t(55051),
          r = t(57810),
          K = t(179),
          W = t(36118),
          _ = t(6778),
          M = t(18210),
          P = t(56649),
          I = t.n(P),
          N = t(3166),
          F = t(85742);
        function z(Z) {
          const { appID: Y } = Z,
            X = (0, _.G)(),
            [ne] = (0, K.QD)("inqueue", "" + l.QV.qy),
            [b, Q] = (0, h.useState)(!1),
            s = (0, N.Qn)(),
            { eStoreDiscoveryQueueType: B, storePageFilter: u } =
              h.useMemo(() => {
                if (ne?.length > 0) {
                  const a = ne.split("_"),
                    i = Number(a[0]);
                  let p;
                  return (
                    a.length > 1 && (p = (0, r.bz)(a[1])),
                    { eStoreDiscoveryQueueType: i, storePageFilter: p }
                  );
                } else
                  return {
                    eStoreDiscoveryQueueType: l.QV.qy,
                    storePageFilter: void 0,
                  };
              }, [ne]),
            { showDiscoveryQueue: g } = (0, F.GV)(B, {
              includeAppID: Y,
              storePageFilter: u,
            }),
            o = h.useCallback(() => {
              Q(!0);
            }, []),
            c = (0, r.WX)(B, u);
          return !X || b
            ? null
            : (0, e.jsxs)(A.Z, {
                focusable: !0,
                className: I().DiscoveryQueueWidgetCtn,
                onSecondaryButton: o,
                onOKButton: g,
                onOKActionDescription: (0, M.we)(
                  "#DiscoveryQueue_ResumeWizard",
                ),
                onSecondaryActionDescription: (0, M.we)("#Button_Close"),
                children: [
                  (0, e.jsxs)("div", {
                    onClick: g,
                    className: I().WidgetText,
                    children: [
                      (0, e.jsx)(W.mcU, {}),
                      (0, M.we)("#DiscoveryQueue_ResumeWizard"),
                      c?.length > 0 && ": " + c,
                    ],
                  }),
                  !s &&
                    (0, e.jsx)("div", {
                      className: I().CloseButton,
                      onClick: o,
                      children: (0, e.jsx)(W.X, {}),
                    }),
                ],
              });
        }
      },
      77426: (ee, k, t) => {
        "use strict";
        t.d(k, { G: () => e });
        const e = {
          include_assets: !0,
          include_trailers: !0,
          include_basic_info: !0,
          include_tag_count: 20,
          include_release: !0,
          include_platforms: !0,
          include_screenshots: !0,
          include_reviews: !0,
        };
      },
      93125: (ee, k, t) => {
        "use strict";
        t.d(k, { A: () => i, D: () => a });
        var e = t(7850),
          h = t(90626),
          A = t(75844),
          l = t(18210),
          r = t(99412),
          K = t(5858),
          W = t(36707),
          _ = t(56420),
          M = t.n(_),
          P = Object.defineProperty,
          I = Object.getOwnPropertyDescriptor,
          N = (p, m, C, D) => {
            for (
              var G = D > 1 ? void 0 : D ? I(m, C) : m, re = p.length - 1, J;
              re >= 0;
              re--
            )
              (J = p[re]) && (G = (D ? J(m, C, G) : J(G)) || G);
            return D && G && P(m, C, G), G;
          };
        let F = class extends h.Component {
          static get hoverClass() {
            return M().hoverParent;
          }
          render() {
            const {
              persona: p,
              animating: m,
              className: C,
              size: D,
              dim: G,
              ...re
            } = this.props;
            let J = "";
            return (
              D == "medium"
                ? (J = M().Medium)
                : D == "large" && (J = M().Large),
              (0, e.jsxs)("div", {
                className: (0, W.A)(
                  M().SnoozeContainer,
                  p.online_state,
                  C,
                  m && M().animating,
                  J,
                  G && M().Dim,
                ),
                ...re,
                children: [
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, W.A)(M().SnoozeZ, M().Z1),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, W.A)(M().SnoozeZ, M().Z2),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, W.A)(M().SnoozeZ, M().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        F = N([A.PA], F);
        var z = t(88363),
          Z = t(36118),
          Y = t(70342),
          X = t.n(Y),
          ne = t(75975);
        const b = (0, A.PA)((p) => {
          const { persona: m, className: C, ...D } = p;
          if (!m || !m.is_online) return null;
          const G = m.HasStateFlag(z.R$),
            re = m.HasStateFlag(z.hs),
            J = m.m_eGamingDeviceType == r.LS$,
            n = m.m_eGamingDeviceType == r.ppM,
            f = !J && !n && !re && m.HasStateFlag(z.sr);
          return (0, e.jsxs)(h.Fragment, {
            children: [
              G &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    C,
                    X().PersonaStatusIcon,
                    X().MobilePhoneIcon,
                    (0, K.rO)(m),
                  ),
                  title: (0, l.we)("#Platform_Hint_Mobile"),
                  ...D,
                  children: (0, e.jsx)(ne.rf, {}),
                }),
              re &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    C,
                    X().PersonaStatusIcon,
                    X().VRIcon,
                    (0, K.rO)(m),
                  ),
                  title: (0, l.we)("#Platform_Hint_VR"),
                  ...D,
                  children: (0, e.jsx)(Z.MUh, {}),
                }),
              f &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    C,
                    X().PersonaStatusIcon,
                    X().BigPictureIcon,
                    (0, K.rO)(m),
                  ),
                  title: (0, l.we)("#Platform_Hint_BigPicture"),
                  ...D,
                  children: (0, e.jsx)(Z.bPr, {}),
                }),
              J &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    C,
                    X().PersonaStatusIcon,
                    X().SteamDeckIcon,
                    (0, K.rO)(m),
                  ),
                  title: (0, l.we)("#Platform_Hint_SteamDeck"),
                  ...D,
                  children: (0, e.jsx)(Z.DQe, {}),
                }),
              n &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    C,
                    X().PersonaStatusIcon,
                    X().SteamDeckIcon,
                    (0, K.rO)(m),
                  ),
                  title: (0, l.we)("#Platform_Hint_LegionGoS"),
                  ...D,
                  children: (0, e.jsx)(Z.DQe, {}),
                }),
            ],
          });
        });
        var Q = t(18828),
          s = t.n(Q),
          B = t(3166),
          u = Object.defineProperty,
          g = Object.getOwnPropertyDescriptor,
          o = (p, m, C, D) => {
            for (
              var G = D > 1 ? void 0 : D ? g(m, C) : m, re = p.length - 1, J;
              re >= 0;
              re--
            )
              (J = p[re]) && (G = (D ? J(m, C, G) : J(G)) || G);
            return D && G && u(m, C, G), G;
          };
        function c(p) {
          return (0, e.jsxs)(h.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: s().partyBeaconJoin,
                children: (0, l.we)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              p.persona.GetCurrentGameName(),
            ],
          });
        }
        let a = class extends h.Component {
          render() {
            const {
              className: p,
              onContextMenu: m,
              persona: C,
              eFriendRelationship: D,
              bIsSelf: G,
              bParenthesizeNicknames: re,
              strNickname: J,
              bCompactView: n,
              bHideGameName: f,
              bHideEnhancedRichPresenceLabel: $,
              bHideSnooze: Ue,
              bHideStatus: ie,
              renderStatus: te,
              renderRichPresence: v,
              bHidePersona: j,
              bDNDSet: x,
              bHasPartyBeacon: U,
              bHasGamePrivacy: ue,
              bNoMask: pe,
              bEllipsisName: me,
              bDropPadding: Se,
              ...Ne
            } = this.props;
            let Ge = null,
              Be = null,
              d = null,
              He = [
                p,
                s().personaNameAndStatusLabel,
                (0, K.rO)(C),
                n ? s().compactView : void 0,
                pe ? s().NoMask : void 0,
              ];
            U || C.has_public_party_beacon
              ? (Be = (0, e.jsx)(c, { persona: C }))
              : (0, r.aPS)(D)
                ? ((Be = (0, l.we)("#PersonaStateBlocked")),
                  He.push(s().blocked))
                : C.is_ingame
                  ? (!C.is_in_nonsteam_game || G || (0, r.S$u)(D)
                      ? (Be = C.GetCurrentGameName())
                      : (Be = (0, l.we)("#PersonaStateInNonSteamGame")),
                    !G && !j
                      ? (d = C.GetCurrentGameRichPresence())
                      : G &&
                        C.is_awayOrSnooze &&
                        (d = (0, l.we)("#PersonaStateAway")))
                  : C.m_broadcastAccountId &&
                    (Be = (0, l.we)("#PersonaStateWatchingBroadcast")),
              Be || (Be = C.GetLocalizedOnlineStatus()),
              te && (Be = te());
            let it = !j && !Ue;
            Ue === !1 && (it = !0),
              C.is_awayOrSnooze && it && (Ge = (0, e.jsx)(F, { persona: C }));
            let we = (0, e.jsx)(e.Fragment, {});
            m
              ? (we = (0, e.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: m,
                  children: (0, e.jsx)(Z.GB9, {}),
                }))
              : He.push(s().noContextMenu),
              j && He.push(s().hidePersona),
              v && (d = v()),
              (f || !d) && He.push(s().twoLine);
            const et = !C.is_ingame && !ie,
              dt = !$ && d,
              ot = Be && (!f || !dt),
              gt = (0, r.IDH)(B.TS.LAUNCHER_TYPE);
            let lt = J && !re,
              ht = lt ? J : C.m_strPlayerName,
              L = !j && (ot || et) && dt;
            return (0, e.jsxs)("div", {
              ...Ne,
              className: (0, W.A)(...He),
              onContextMenu: m,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, W.A)(
                    s().statusAndName,
                    L ? s().threeLines : void 0,
                  ),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, W.A)(
                        s().playerName,
                        me ? s().EllipsisName : void 0,
                      ),
                      children: [
                        ht || "\xA0",
                        re &&
                          J &&
                          (0, e.jsxs)("span", {
                            className: s().playerNickname,
                            children: ["(", J, ")"],
                          }),
                      ],
                    }),
                    x &&
                      (0, e.jsx)("div", {
                        className: s().DNDContainer,
                        title: (0, l.we)("#User_ToggleDoNotDisturb"),
                        children: (0, e.jsx)(Z.Aj0, {}),
                      }),
                    lt &&
                      (0, e.jsx)("span", {
                        className: s().playerNicknameBracket,
                        title: (0, l.we)("#isNickname"),
                        children: " *",
                      }),
                    (0, e.jsx)(b, { persona: C }),
                    Ge,
                    (C.m_bPlayerNamePending || C.m_bAvatarPending) &&
                      gt &&
                      (0, e.jsx)("div", {
                        className: s().PendingPersona,
                        title: (0, l.we)("#SteamChina_PendingPersonaName"),
                        children: (0, e.jsx)(Z.zD7, {}),
                      }),
                    we,
                  ],
                }),
                !j &&
                  (0, e.jsxs)("div", {
                    className: s().richPresenceContainer,
                    children: [
                      (ot || et) &&
                        (0, e.jsxs)("div", {
                          className: (0, W.A)(
                            s().gameName,
                            L ? s().threeLines : void 0,
                            s().richPresenceLabel,
                            Se && s().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            ue &&
                              (0, e.jsx)("div", {
                                className: s().gameIsPrivateIcon,
                                title: (0, l.we)("#User_GameInfoHidden"),
                                children: (0, e.jsx)(Z.jZl, {}),
                              }),
                            Be,
                          ],
                        }),
                      dt &&
                        (0, e.jsxs)("div", {
                          className: (0, W.A)(
                            s().richPresenceLabel,
                            Se && s().dropPadding,
                            "no-drag",
                          ),
                          children: [d, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        a = o([A.PA], a);
        const i = (0, A.PA)((p) => {
          const {
            persona: m,
            bParenthesizeNicknames: C,
            strNickname: D,
            bIgnorePersonaStatus: G,
            bDisableColoring: re,
            className: J,
            ...n
          } = p;
          let $ = D && !C ? D : m.m_strPlayerName;
          return (0, e.jsx)("span", {
            ...n,
            className: (0, W.A)(
              J,
              re && s().DisableColoring,
              !G && (0, K.rO)(m),
            ),
            children: (0, e.jsxs)("span", {
              className: s().playerName,
              children: [
                $ || "\xA0",
                C &&
                  D &&
                  (0, e.jsxs)("span", {
                    className: s().playerNickname,
                    children: ["(", D, ")"],
                  }),
              ],
            }),
          });
        });
      },
      46943: (ee, k, t) => {
        "use strict";
        t.d(k, { Ul: () => ne, xz: () => B, $Y: () => s, i8: () => Q });
        var e = t(7850),
          h = t(90626),
          A = t(75844),
          l = t(5858),
          r = t(36707),
          K = t(3166),
          W = t(13465);
        const _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          M =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          P =
            t.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var I = t(43047),
          N = t.n(I),
          F = t(71742),
          z = Object.defineProperty,
          Z = Object.getOwnPropertyDescriptor,
          Y = (u, g, o, c) => {
            for (
              var a = c > 1 ? void 0 : c ? Z(g, o) : g, i = u.length - 1, p;
              i >= 0;
              i--
            )
              (p = u[i]) && (a = (c ? p(g, o, a) : p(a)) || a);
            return c && a && z(g, o, a), a;
          };
        function X(u) {
          switch (u) {
            case "X-Small":
            case "Small":
              return _;
            case "Medium":
            case "MediumLarge":
              return M;
            case "Large":
            case "X-Large":
            case "FillArea":
              return P;
            default:
              return (0, F.z_)(u, `Unhandled size ${u}`), M;
          }
        }
        const ne = h.memo(function (g) {
            const {
                strAvatarURL: o,
                size: c = "Medium",
                className: a,
                statusStyle: i,
                statusPosition: p,
                children: m,
                ...C
              } = g,
              D = h.useMemo(() => {
                const G = [];
                return o && G.push(o), G.push(X(c)), G;
              }, [o, c]);
            return (0, e.jsxs)("div", {
              className: (0, r.A)(
                N().avatarHolder,
                "avatarHolder",
                "no-drag",
                c,
                a,
              ),
              ...C,
              children: [
                (0, e.jsx)("div", {
                  className: (0, r.A)(N().avatarStatus, "avatarStatus", p),
                  style: i,
                }),
                (0, e.jsx)(W.c, {
                  className: (0, r.A)(N().avatar, "avatar"),
                  rgSources: D,
                  draggable: !1,
                }),
                m,
              ],
            });
          }),
          b = h.memo(function (g) {
            const {
              strAvatarURL: o,
              size: c = "Medium",
              className: a,
              statusStyle: i,
              statusPosition: p,
              children: m,
              ...C
            } = g;
            return (0, e.jsxs)("div", {
              className: (0, r.A)(
                N().avatarHolder,
                "avatarHolder",
                "no-drag",
                c,
                a,
              ),
              ...C,
              children: [
                (0, e.jsx)("div", {
                  className: (0, r.A)(N().avatarStatus, "avatarStatus", p),
                  style: i,
                }),
                (0, e.jsx)("img", {
                  className: (0, r.A)(N().avatar, "avatar"),
                  src: o,
                  draggable: !1,
                }),
                m,
              ],
            });
          });
        let Q = class extends h.Component {
          render() {
            const {
              persona: u,
              size: g = "Medium",
              animatedAvatar: o,
              className: c,
              strBackupAvatarURL: a,
              ...i
            } = this.props;
            let p = "";
            return (
              o && o.image_small && o.image_small.length != 0
                ? (p = K.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + o.image_small)
                : u
                  ? ((p = u.avatar_url_medium),
                    g == "Small" || g == "X-Small"
                      ? (p = u.avatar_url)
                      : (g == "Large" || g == "X-Large" || g == "FillArea") &&
                        (p = u.avatar_url_full))
                  : a && (p = a),
              (0, e.jsx)(ne, {
                strAvatarURL: p,
                size: g,
                className: (0, r.A)((0, l.rO)(u), c),
                ...i,
              })
            );
          }
        };
        Q = Y([A.PA], Q);
        const s = (0, A.PA)((u) => {
          const {
            profileItem: g,
            className: o,
            bDisableAnimation: c,
            ...a
          } = u;
          if (!g || !g.image_small || g.image_small.length == 0) return null;
          let i = c ? g.image_large : g.image_small;
          return (
            i || (i = g.image_small),
            i.startsWith("https://") ||
              (i = K.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + i),
            (0, e.jsx)("div", {
              className: (0, r.A)(N().avatarFrame, o, "avatarFrame"),
              ...a,
              children: (0, e.jsx)("img", {
                className: N().avatarFrameImg,
                src: i,
              }),
            })
          );
        });
        let B = class extends h.Component {
          m_timer;
          constructor(u) {
            super(u),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let u = 0;
            switch (this.props.loopDuration) {
              case "Short":
                u = 2500;
                break;
              case "Medium":
                u = 5e3;
                break;
              case "Long":
                u = 1e4;
                break;
            }
            u != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                u,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(u) {
            this.props.loopDuration != u.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != u.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: u,
              animatedAvatar: g,
              avatarFrame: o,
              children: c,
              style: a,
              bLimitProfileFrameAnimationTime: i,
              bParentHovered: p,
              ...m
            } = this.props;
            m.onClick && (a = { ...a, cursor: "pointer" });
            const C = this.state.bAnimate ? (g ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(Q, {
                animatedAvatar: C,
                ...m,
                children: [
                  c,
                  (0, e.jsx)(s, {
                    profileItem: o ?? null,
                    bDisableAnimation: i && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        B = Y([A.PA], B);
      },
      21079: (ee, k, t) => {
        "use strict";
        t.d(k, {
          Dk: () => z,
          Mu: () => X,
          Y8: () => ne,
          ws: () => Z,
          zo: () => Y,
        });
        var e = t(72604),
          h = t(35038),
          A = t(83153),
          l = t(9682),
          r = t(41735),
          K = t.n(r),
          W = t(80902),
          _ = t(75233),
          M = t(68312),
          P = t(77187),
          I = t(3166),
          N = t(90626);
        function F(s) {
          return ["AppRelevanceStore", "FriendsRecommended", s];
        }
        function z(s) {
          const B = (0, M.KV)();
          return (0, W.I)({
            queryKey: F(s),
            queryFn: () => b(B, s),
            enabled: I.iA.logged_in,
          });
        }
        function Z() {
          const s = (0, _.jE)();
          return N.useCallback(
            (B, u) => {
              s.setQueryData(F(B), u);
            },
            [s],
          );
        }
        function Y(s) {
          return (0, W.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", s],
            queryFn: () => Q(s),
            enabled: I.iA.logged_in,
          });
        }
        function X() {
          return (0, P.PG)("App Relevance Store Top Sellers", {
            sort: A.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function ne() {
          const { data: s } = X();
          return s;
        }
        async function b(s, B) {
          const u = h.w.Init(l.KV);
          u.Body().set_appid(B);
          const g = await l.YK.GetFriendsRecommendedApp(s, u),
            o = g.GetEResult();
          if (o == e.R) return g.Body().toObject();
          throw `Error ${o} failed to call GetFriendsRecommendedApp ${B}`;
        }
        async function Q(s) {
          let B = { appid: s },
            u = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const o = (
            await K().get(
              `${I.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: B, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            o &&
              o.success == e.R &&
              (o.results.similar_played_apps &&
                (u.arrSimilarPlayedApps = o.results.similar_played_apps.map(
                  (c) => ({
                    appid: c.appid,
                    playtimeForever: c.playtime_forever,
                  }),
                )),
              o.results.recommended_by_ir && (u.bRecommendedByIR = !0)),
            u
          );
        }
      },
      813: (ee, k, t) => {
        "use strict";
        t.d(k, { $5: () => s, TB: () => Q, ac: () => ne });
        var e = t(40497),
          h = t(75233),
          A = t(14947),
          l = t(90626),
          r = t(76559),
          K = t(71742),
          W = t(3166),
          _ = t(60480),
          M = t(33512),
          P = t(55483),
          I = t(77291);
        const N = new WeakSet();
        function F(a = e.L) {
          if (typeof window > "u" || typeof document > "u" || N.has(a)) return;
          const i = (0, W.Fd)("groupvanityinfo", "application_config");
          (i === void 0 && document.readyState != "complete") ||
            (N.add(a), z(i) && (0, P.aA)(a, i));
        }
        function z(a) {
          const i = a;
          return i &&
            Array.isArray(i) &&
            i.length > 0 &&
            typeof i[0] == "object"
            ? typeof i[0].clanAccountID == "number" &&
                (typeof i[0].appid == "number" ||
                  typeof i[0].vanity_url == "string")
            : !1;
        }
        function Z(a) {
          return typeof a == "string" ? parseInt(a) : a;
        }
        function Y(a) {
          return typeof a == "string" ? Number.parseInt(a) : a;
        }
        class X {
          m_queryClient = e.L;
          m_boxCacheVersion = A.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            F(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((i) => {
                  (i?.type != "added" &&
                    i?.type != "updated" &&
                    i?.type != "removed") ||
                    ((0, P.yT)(i.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, A.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(i) {
            this.LazyInit(), z(i) && (0, P.aA)(this.m_queryClient, i);
          }
          BHasClanInfoLoaded(i) {
            return (
              (0, K.wT)(
                i.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, K.wT)(
                i.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(i.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(i) {
            return !!(0, P.Gt)(Y(i), this.ReadCache());
          }
          RegisterClanData(i) {
            this.LazyInit(), (0, P.aA)(this.m_queryClient, i);
          }
          async LoadOGGClanInfoForAppID(i) {
            return (
              this.LazyInit(),
              (i = Z(i)),
              (0, K.wT)(
                i != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              i == 0 ? null : (0, P.AB)(i, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(i) {
            return this.LazyInit(), (0, P.Rc)(i, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(i) {
            return this.LazyInit(), (0, P.Rc)(i, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(i) {
            return this.LoadClanInfoForClanAccountID(i.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(i) {
            return this.LazyInit(), (0, P.MR)(Y(i), this.m_queryClient);
          }
          GetOGGClanInfo(i) {
            const p = this.ReadCache();
            return typeof i == "string" ? (0, P.fy)(i, p) : (0, P.ko)(i, p);
          }
          GetClanSteamIDForAppID(i) {
            const p = (0, P.ko)(Z(i), this.ReadCache());
            return p ? r.b.InitFromClanID(p.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(i) {
            return (0, P.ko)(Z(i), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(i) {
            return (0, P.Gt)(i.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(i) {
            return this.BHasClanInfoLoadedByAccountID(i);
          }
          GetClanMemberCount(i) {
            return (0, P.ko)(Z(i), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(i) {
            return (
              (0, K.wT)(
                !!i,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, P.Gt)(Y(i), this.ReadCache())
            );
          }
          GetCreatorStoreURL(i) {
            let p = _.pF.GetCreatorHome(i);
            if (p) return p.GetCreatorHomeURL("developer");
            let m = this.GetClanInfoByClanAccountID(i.GetAccountID());
            return (
              W.TS.COMMUNITY_BASE_URL +
              (m.vanity_url
                ? "groups/" + m.vanity_url
                : "gid/" + i.ConvertTo64BitString())
            );
          }
        }
        const ne = new X();
        (0, I.V)("g_ClanStore", ne);
        function b() {
          const a = (0, h.jE)();
          return F(a), a;
        }
        function Q(a) {
          b();
          const { data: i, isPending: p } = (0, P.TB)(a ? Y(a) : void 0);
          return [!!a && p, i ?? void 0];
        }
        function s(a) {
          const i = b();
          (0, l.useEffect)(() => {
            a &&
              (0, P.MR)(Y(a), i).catch((p) =>
                console.error(`Failed to hint load clan info ${a}`, p),
              );
          }, [a, i]);
        }
        function B(a) {
          return b(), useClanInfoByVanityQuery(a).data ?? null;
        }
        function u(a) {
          b();
          const i = a ? Z(a) : void 0,
            { data: p, isPending: m } = useClanInfoByAppIDQuery(i);
          return { bLoadingClanInfo: !!i && m, clanInfo: p ?? null };
        }
        function g(a, i) {
          if (a.BIsOGGEvent()) return { bVisible: !1 };
          if (a.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (a.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            a.jsondata.clone_from_event_gid &&
            a.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (a.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const m = g_CreatorHomeStore.GetCreatorHome(a.clanSteamID);
          return m &&
            m.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : i
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function o(a, i) {
          return a.BIsOGGEvent()
            ? a.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : i
                  ? a.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function c(a) {
          return a.BIsOGGEvent()
            ? { bVisible: !1 }
            : a.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : a.BHasSaleEnabled()
                ? { bVisible: !0 }
                : a.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      57810: (ee, k, t) => {
        "use strict";
        t.d(k, {
          Bk: () => X,
          IH: () => B,
          Uf: () => s,
          WX: () => u,
          aI: () => Q,
          bz: () => ne,
        });
        var e = t(90626),
          h = t(14947),
          A = t(72604),
          l = t(35038),
          r = t(55051),
          K = t(8323),
          W = t(30096),
          _ = t(48473),
          M = t(3166),
          P = t(64868),
          I = t(49100),
          N = t(40497),
          F = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          Z = (g, o, c, a) => {
            for (
              var i = a > 1 ? void 0 : a ? z(o, c) : o, p = g.length - 1, m;
              p >= 0;
              p--
            )
              (m = g[p]) && (i = (a ? m(o, c, i) : m(i)) || i);
            return a && i && F(o, c, i), i;
          };
        function Y(g, o) {
          let c = g.toString();
          if (
            o?.strContentHubType != "newreleases" &&
            o?.strContentHubType != "upcoming"
          ) {
            const a = o?.nSaleTagID,
              i = o?.strContentHubType,
              p = o?.strContentHubCategory,
              m = o?.nContentHubTagID,
              C = o?.bDiscountsOnly,
              D = o?.bPrioritizeDiscounts,
              G = o?.strOptInName,
              re = o?.nOptInTagID,
              J = o?.nPruneTagID;
            a
              ? (c += "_" + a)
              : i &&
                ((c += "_" + i),
                i === "category" && p
                  ? (c += "_" + p)
                  : i === "tags" && m && (c += "_" + m),
                C ? (c += "_d") : D && (c += "_p"),
                G && re && J && (c += "_" + G));
          }
          return c;
        }
        function X(g) {
          return (0, _.bt)(JSON.stringify(g));
        }
        function ne(g) {
          return JSON.parse((0, _.he)(g));
        }
        const b = class It {
          m_transport;
          m_mapDiscoveryQueues = new Map();
          m_mapSkippedApps = new Map();
          m_mapSkippedAppCount = new Map();
          m_mapInClientCompleted = new Map();
          m_mapInClientCompletedCallback = new Map();
          m_setExhuasted = new Set();
          m_mapExhuastedCallback = new Map();
          GetTotalSkippedAppsForDiscoveryQueue(o, c) {
            const a = Y(o, c);
            return this.m_mapDiscoveryQueues.get(a)?.skipped ?? 0;
          }
          GetNumAppsSeenForDiscoveryQueue(o, c) {
            const a = Y(o, c);
            return this.m_mapSkippedAppCount.get(a) || 0;
          }
          GetSkippedAppKey(o, c, a) {
            const i = Y(c, a);
            return `${o}_${i}`;
          }
          GetInClientCompletedQueues(o, c) {
            const a = Y(o, c);
            return this.m_mapInClientCompleted.get(a) || 0;
          }
          GetInClientCompletedQueuesCallback(o, c) {
            const a = Y(o, c);
            return (
              this.m_mapInClientCompletedCallback.has(a) ||
                this.m_mapInClientCompletedCallback.set(a, new K.lu()),
              this.m_mapInClientCompletedCallback.get(a)
            );
          }
          GetExhaustedCallback(o, c) {
            const a = Y(o, c);
            return (
              this.m_mapExhuastedCallback.has(a) ||
                this.m_mapExhuastedCallback.set(a, (0, K.Jc)(!1)),
              this.m_mapExhuastedCallback.get(a)
            );
          }
          BIsExhausted(o, c) {
            const a = Y(o, c);
            return this.m_setExhuasted.has(a);
          }
          async LoadDiscoveryQueue(o, c, a) {
            const i = Y(o, a);
            if (!this.m_transport) return A.zi;
            try {
              const p = (0, I.cw)(this.m_transport, o, c, a);
              c && (await N.L.invalidateQueries({ queryKey: p.queryKey }));
              const m = await N.L.fetchQuery(p);
              return (
                this.m_mapDiscoveryQueues.set(i, m),
                m.exhausted
                  ? (this.m_setExhuasted.add(i),
                    this.GetExhaustedCallback(o, a).Set(!0))
                  : (this.m_setExhuasted.delete(i),
                    this.GetExhaustedCallback(o, a).Set(!1)),
                this.m_mapSkippedAppCount.set(i, m.skipped || 0),
                A.R
              );
            } catch (p) {
              return (
                console.warn(
                  "Error",
                  p,
                  "failed to get discovery queue type",
                  o,
                  "key",
                  i,
                ),
                A.zi
              );
            }
          }
          async GetDiscoveryQueueAppsOfType(o, c, a) {
            const i = Y(o, a);
            return !c && this.m_mapDiscoveryQueues.has(i)
              ? {
                  appids: this.m_mapDiscoveryQueues.get(i).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(i).exhausted,
                }
              : (await this.LoadDiscoveryQueue(o, c, a),
                {
                  appids: this.m_mapDiscoveryQueues.get(i).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(i).exhausted,
                });
          }
          async SkipDiscoveryQueueItem(o, c, a) {
            const i = this.GetSkippedAppKey(o, c, a);
            if (!this.m_mapSkippedApps.has(i)) {
              const p = Y(c, a),
                m = this.m_mapDiscoveryQueues.get(p)?.appids,
                C = m?.[m.length - 1] == o;
              this.m_mapSkippedApps.set(i, !0),
                this.m_mapSkippedAppCount.set(
                  p,
                  (this.m_mapSkippedAppCount.get(p) || 0) + 1,
                );
              const D = l.w.Init(r.fe);
              if (
                (D.Body().set_appid(o),
                D.Body().set_queue_type(c),
                (a?.nSaleTagID || a?.strContentHubType) &&
                  D.Body().set_store_page_filter((0, I.Jy)(a, !0)),
                !this.m_transport)
              ) {
                console.warn(
                  "Error",
                  "no transport",
                  "failed to skip appid ",
                  o,
                ),
                  this.m_mapSkippedApps.delete(i);
                return;
              }
              const re = (
                await r.nd.SkipDiscoveryQueueItem(this.m_transport, D)
              ).GetEResult();
              re != A.R && re != A.Ze
                ? (console.warn("Error", re, "failed to skip appid ", o),
                  this.m_mapSkippedApps.delete(i))
                : C && this.MarkDiscoveryQueueCompleted(c, a);
            }
          }
          MarkDiscoveryQueueCompleted(o, c) {
            const a = Y(o, c);
            if (this.m_mapInClientCompleted.has(a)) {
              const i = this.m_mapInClientCompleted.get(a) + 1;
              this.m_mapInClientCompleted.set(a, i),
                this.GetInClientCompletedQueuesCallback(o, c).Dispatch(i);
            } else
              this.m_mapInClientCompleted.set(a, 0),
                this.GetInClientCompletedQueuesCallback(o, c).Dispatch(0);
          }
          async LoadSkippedApps(o, c) {
            const a = Y(o, c),
              i = l.w.Init(r.pS);
            if (
              (i.Body().set_steamid(M.iA.steamid),
              i.Body().set_queue_type(o),
              (c?.nSaleTagID || c?.strContentHubType) &&
                i.Body().set_store_page_filter((0, I.Jy)(c, !0)),
              !this.m_transport)
            )
              return (
                console.warn(
                  "Failed to retrieve skipped apps for discovery queue, no transport.",
                  o,
                  c,
                ),
                []
              );
            const p = await r.nd.GetDiscoveryQueueSkippedApps(
              this.m_transport,
              i,
            );
            return p.GetEResult() === A.R
              ? p.Body().appids() || []
              : (console.warn(
                  "Failed to retrieve skipped apps for discovery queue.",
                  o,
                  c,
                  p.GetEResult(),
                ),
                []);
          }
          static s_DiscoveryQueueStore = null;
          static Init(o) {
            It.Get().m_transport = o;
          }
          static BHasTransport() {
            return !!It.Get().m_transport;
          }
          static Get() {
            return (
              this.s_DiscoveryQueueStore ||
                (this.s_DiscoveryQueueStore = new It()),
              this.s_DiscoveryQueueStore
            );
          }
          constructor() {
            (0, h.Gn)(this);
          }
        };
        Z([h.sH], b.prototype, "m_mapDiscoveryQueues", 2);
        let Q = b;
        function s(g, o) {
          const [c, a] = (0, e.useState)(
            Q.Get().GetInClientCompletedQueues(g, o),
          );
          return (
            (0, W.hL)(Q.Get().GetInClientCompletedQueuesCallback(g, o), a), c
          );
        }
        function B(g, o) {
          return (0, P.gc)(Q.Get().GetExhaustedCallback(g, o));
        }
        function u(g, o) {
          const c = e.useMemo(
            () => (0, M.Tc)("discovery_queue_name", "application_config"),
            [],
          );
          return typeof c == "string" && c.length > 0 ? c : "";
        }
      },
      35098: (ee, k, t) => {
        "use strict";
        t.d(k, { DW: () => N, js: () => P, mK: () => X, tb: () => Y });
        var e = t(90626),
          h = t(80902),
          A = t(54806),
          l = t(99412),
          r = t(68312),
          K = t(15369),
          W = t(5858),
          _ = t(76559),
          M = t(15860);
        function P(s) {
          const B = (0, r.KV)(),
            u = e.useContext(Z);
          return (0, h.I)(X(u, B, s));
        }
        function I(s) {
          const B = React.useRef(void 0),
            u = P(s);
          return u.data
            ? u
            : (B.current ||
                (B.current = new CPersonaStateImpl(
                  typeof s == "string"
                    ? new CSteamID(s)
                    : CSteamID.InitFromAccountID(s),
                )),
              { ...u, data: B.current });
        }
        function N(s) {
          const B = (0, r.KV)(),
            u = e.useContext(Z);
          return (0, A.E)({ queries: s.map((g) => X(u, B, g)) });
        }
        function F(s) {
          return ReactQueryClient.getQueryData(["PlayerSummary", s]);
        }
        function z(s) {
          const { loadPersonaState: B, children: u } = s,
            g = React.useMemo(() => ({ loadPersonaState: B }), [B]);
          return React.createElement(Z.Provider, { value: g }, u);
        }
        const Z = e.createContext({
          loadPersonaState: async (s, B) => {
            if (s == null) return null;
            const u = await b(B).load(
              _.b.InitFromAccountID(s).ConvertTo64BitString(),
            );
            return Q(_.b.InitFromAccountID(s), u);
          },
        });
        function Y() {
          return e.useContext(Z);
        }
        function X(s, B, u) {
          const g = typeof u == "string" ? new _.b(u).GetAccountID() : u;
          return {
            queryKey: ["PlayerSummary", g],
            queryFn: () => s.loadPersonaState(g, B),
            enabled: !!g,
          };
        }
        let ne;
        function b(s) {
          return (ne ??= (0, M.c)(s));
        }
        function Q(s, B) {
          let u = new W.Z(s);
          const g = B?.public_data,
            o = B?.private_data;
          return (
            (u.m_bInitialized = !!B),
            (u.m_ePersonaState = o?.persona_state ?? l.cU3),
            (u.m_strAvatarHash = g?.sha_digest_avatar
              ? (0, K.Kx)(g.sha_digest_avatar)
              : W.dV),
            (u.m_strPlayerName = g?.persona_name ?? s.ConvertTo64BitString()),
            (u.m_strAccountName = o?.account_name),
            o?.persona_state_flags &&
              (u.m_unPersonaStateFlags = o?.persona_state_flags),
            o?.game_id && (u.m_gameid = o?.game_id),
            o?.game_server_ip_address &&
              (u.m_unGameServerIP = o?.game_server_ip_address),
            o?.lobby_steam_id && (u.m_game_lobby_id = o?.lobby_steam_id),
            o?.game_extra_info && (u.m_strGameExtraInfo = o?.game_extra_info),
            g?.profile_url && (u.m_strProfileURL = g.profile_url),
            u
          );
        }
      },
      77187: (ee, k, t) => {
        "use strict";
        t.d(k, { E2: () => F, PG: () => Z });
        var e = t(7850),
          h = t(90626),
          A = t(80902),
          l = t(72604),
          r = t(35038),
          K = t(83153),
          W = t(84192),
          _ = t(10142),
          M = t(71742),
          P = t(68312);
        const I = h.createContext({}),
          N = () => h.useContext(I);
        function F(ne) {
          let { defaultOptions: b, children: Q } = ne,
            s = h.useMemo(() => ({ defaultOptions: b || {} }), [b]);
          return (0, e.jsx)(I.Provider, { value: s, children: Q });
        }
        const z = "StoreQueryStore";
        function Z(ne, b, Q, s) {
          let B = N();
          const u = (0, P.KV)();
          B ||
            (0, M.wT)(!1, "useStoreQuery called outside of a <StoreQueryRoot>");
          let g = B.defaultOptions;
          const o = h.useMemo(() => {
            let p = [];
            return (
              s?.content_descriptors_excluded
                ? (p = s.content_descriptors_excluded)
                : g?.content_descriptors_excluded &&
                  (p = g.content_descriptors_excluded),
              {
                ...b,
                filters: { content_descriptors_excluded: p, ...b.filters },
              }
            );
          }, [b, s, g]);
          let c;
          s?.override_country_code !== void 0
            ? (c = s.override_country_code)
            : g?.override_country_code !== void 0 &&
              (c = g.override_country_code);
          let a = { staleTime: 3600 * 1e3 };
          s?.reactQuery && (a = { ...a, ...s.reactQuery });
          const i = [z, o, Q ?? {}, s ?? {}];
          return (0, A.I)({
            queryKey: i,
            queryFn: () => Y(u, ne, o, Q ?? {}, c),
            ...a,
          });
        }
        async function Y(ne, b, Q, s, B) {
          const u = r.w.Init(K.iU);
          (0, W.rV)(u),
            s && (0, W.Bn)(u, s),
            B && u.Body().set_override_country_code(B),
            u.Body().set_query(K.nu.fromObject(Q)),
            u.Body().set_query_name(b);
          const g = await K.Fs.Query(ne, u);
          if (g.GetEResult() != l.R)
            throw `Error executing StoreQuery "${b}", EResult: ${g.GetEResult()}`;
          return new X(g, s);
        }
        class X {
          m_Items = void 0;
          m_rgItemIDs = void 0;
          m_metadata = void 0;
          constructor(b, Q) {
            this.ReadResults(b, Q);
          }
          GetItems() {
            return this.m_Items;
          }
          GetItemIDs() {
            return this.m_rgItemIDs;
          }
          GetMetadata() {
            return this.m_metadata;
          }
          ReadResults(b, Q) {
            this.m_Items ||
              ((0, M.wT)(
                b.Body().metadata().start() == 0,
                "Empty item list - expected to start at 0",
              ),
              (this.m_Items = []));
            const s = b.Body().ids() || [];
            if (
              ((this.m_rgItemIDs = s.map((B) => B.toObject())),
              b.Body().store_items())
            )
              for (const B of b.Body().store_items()) {
                const u = _.A.Get().ReadItem(B, Q);
                u && this.m_Items.push(u);
              }
            this.m_metadata = b.Body().metadata().toObject();
          }
        }
      },
      75975: (ee, k, t) => {
        "use strict";
        t.d(k, { Jl: () => M, nl: () => p, rf: () => i });
        var e = t(7850),
          h = t(36118),
          A = t(56718),
          l = t(3166);
        function r() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function K(m) {
          const C = m.filled ?? !0;
          return useInGamepadUI()
            ? C
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function W(m) {
          const C = m.filled ?? !0;
          return useInGamepadUI()
            ? C
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function M(m) {
          return (0, l.Qn)()
            ? (0, e.jsx)(A.MGO, { ...m })
            : (0, e.jsx)(h.Jlk, { ...m });
        }
        function P() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function I() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function N(m) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function F() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function z() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function Z(m) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function Y(m) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: m.className });
        }
        function X(m) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: m.className });
        }
        function ne(m) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: m.className })
            : jsx(SVG.CommentThread, { className: m.className });
        }
        function b() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function Q() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function s() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function B() {
          return jsx(GamepadSVG.Globe, {});
        }
        function u() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function g() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function o() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function c() {
          return jsx(GamepadSVG.Add, {});
        }
        function a() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function i() {
          return (0, e.jsx)(h.rfv, {});
        }
        function p() {
          return (0, l.Qn)() ? (0, e.jsx)(A.nl, {}) : (0, e.jsx)(h.jZW, {});
        }
      },
      6394: (ee, k, t) => {
        "use strict";
        t.d(k, { g: () => D });
        var e = t(7850),
          h = t(65946),
          A = t(90626),
          l = t(83153),
          r = t(6469),
          K = t(10142),
          W = t(77187),
          _ = t(6778),
          M = t(36707),
          P = t(18210),
          I = t(3166),
          N = t(57810),
          F = t(71477),
          z = t.n(F),
          Z = t(7112),
          Y = t(94253),
          X = t(41635),
          ne = t(80902),
          b = t(19298),
          Q = t(81944),
          s = t(40358),
          B = t(21721),
          u = t(15830),
          g = t(86048),
          o = t(64868);
        function c(te) {
          const {
              arrDiscoveryApps: v,
              onClick: j,
              className: x,
              bDisableAnimation: U = !1,
              children: ue,
              ...pe
            } = te,
            me = (0, I.Qn)(),
            [Se, Ne] = (0, A.useState)(!me),
            [Ge, Be] = (0, A.useState)(!1),
            d = (0, A.useRef)(Date.now()),
            He = 3e4,
            it = A.useCallback(
              (et) => {
                Be(et), me || Ne(et);
              },
              [me],
            ),
            we = A.useCallback(() => {
              (d.current = Date.now()), !me && Ge && Ne(!0);
            }, [me, Ge]);
          return (
            (0, o.$$)(() => {
              Date.now() - d.current > He && !me && Ne(!1);
            }, 5e3),
            (0, g.l6)(window, "scroll", we),
            (0, g.l6)(window, "mousemove", we),
            (0, e.jsx)(Q.J, {
              trigger: "repeated",
              onVisibilityChange: it,
              children: (0, e.jsxs)(b.Z, {
                focusable: !0,
                onGamepadFocus: () => Ne(!0),
                onMouseEnter: () => me && Ne(!0),
                onGamepadBlur: () => Ne(!1),
                onMouseLeave: () => me && Ne(!1),
                onActivate: j,
                onOKActionDescription: (0, P.we)("#DiscoveryQueue_OpenWizard"),
                className: (0, M.A)(
                  u.DiscoveryQueueWidgetCtn,
                  x,
                  v !== void 0 && u.Initialized,
                ),
                ...pe,
                children: [
                  (0, e.jsx)(i, { rgAppIDs: v, bAnimationEnabled: !U && Se }),
                  ue,
                ],
              }),
            })
          );
        }
        let a;
        function i(te) {
          const {
              rgAppIDs: v,
              bAnimationEnabled: j = !0,
              nCapsuleWidth: x = 320,
            } = te,
            [U, ue] = A.useState(null);
          return (
            A.useEffect(() => {
              if (!j || !U) return;
              a || (a = performance.now());
              const pe = U.offsetWidth;
              let me;
              const Se = () => {
                const Ge =
                  (((performance.now() - a) / 40) % (pe - 3 * x - 16)) + x;
                (U.style.transform = `translateX( -${Ge}px )`),
                  (me = requestAnimationFrame(Se));
              };
              return (
                (me = requestAnimationFrame(Se)), () => cancelAnimationFrame(me)
              );
            }, [U, j, x]),
            !v || !v.length
              ? null
              : (0, e.jsx)("div", {
                  className: u.AppCarouselPosition,
                  style: { "--capsule-width": `${x}px` },
                  children: (0, e.jsxs)("div", {
                    ref: ue,
                    className: (0, M.A)(u.AppCarouselCtn, "vt-scrollable"),
                    style: { transform: `translateX( -${x}px )` },
                    children: [
                      v.map((pe) =>
                        (0, e.jsx)(p, { appID: pe }, "Capsule_" + pe),
                      ),
                      [...v, ...v]
                        .slice(0, 3)
                        .map((pe, me) =>
                          (0, e.jsx)(p, { appID: pe }, `Capsule2_${me}_${pe}`),
                        ),
                    ],
                  }),
                })
          );
        }
        function p(te) {
          const { appID: v } = te,
            j = { appid: v },
            { data: x } = (0, s.J$)(j),
            U = (0, B.pd)(v),
            ue = (0, B.DT)(j) || [],
            { data: pe } = (0, s.lv)(j);
          if (!U) return null;
          let me = ue.length
            ? (0, B.bu)(ue[0], "600x338")
            : pe && (0, B.b0)(pe, "main_capsule");
          const Se = {
            backgroundImage: `radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgba(0, 0, 0, 1) 92.5%)${me ? `, url('${me}')` : ""}`,
          };
          return (0, e.jsxs)("div", {
            className: u.AppCapsuleCtn,
            style: Se,
            children: [
              (0, e.jsx)("div", {
                className: (0, M.A)(u.CapsuleColumn, u.LibraryImage),
                children: (0, e.jsx)("img", { src: U, alt: x?.name }),
              }),
              (0, e.jsx)("div", {
                className: u.CapsuleColumn,
                children: (0, e.jsx)("div", {
                  className: u.AppName,
                  children: x?.name,
                }),
              }),
            ],
          });
        }
        var m = t(85742),
          C = t(32994);
        function D(te) {
          return (0, _.G)()
            ? (0, e.jsxs)(G, {
                children: [
                  (0, e.jsx)(Ue, {}),
                  I.iA.logged_in
                    ? (0, e.jsx)(J, { ...te })
                    : (0, e.jsx)(f, { ...te }),
                ],
              })
            : null;
        }
        function G(te) {
          const [v, j] = (0, r.L2)();
          let x = (0, h.q3)(() => j.ExcludedContentDescriptor),
            U = A.useMemo(() => ({ content_descriptors_excluded: x }), [x]);
          return v
            ? null
            : (0, e.jsx)(W.E2, { defaultOptions: U, children: te.children });
        }
        function re(te, v) {
          const { data: j } = (0, ne.I)({
            queryKey: ["DiscoveryQueueLoader", te, v],
            queryFn: async () => {
              const { appids: x, exhausted: U } = await N.aI
                .Get()
                .GetDiscoveryQueueAppsOfType(te, !1, v);
              let ue = { ...m.LB, include_screenshots: !0 };
              return (
                await K.A.Get().QueueMultipleAppRequests(x ?? [], ue),
                { rgDiscoveryApps: x, exhausted: U }
              );
            },
            enabled: I.iA.logged_in,
          });
          return [j?.rgDiscoveryApps, j?.exhausted];
        }
        function J(te) {
          const {
              eStoreDiscoveryQueueType: v,
              strQueueDescriptionOverride: j,
              ...x
            } = te,
            { showDiscoveryQueue: U, bQueueVisible: ue } = (0, m.GV)(v, x),
            pe = (0, C.lI)(),
            [me, Se] = re(v, x.storePageFilter),
            Ne = ue || !!pe.data?.preferences?.disable_animated_marketing,
            Ge = A.useCallback(() => {
              !Se && U();
            }, [Se, U]),
            Be = A.useId();
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(c, {
              "aria-labelledby": Be,
              onClick: Ge,
              arrDiscoveryApps: me,
              bDisableAnimation: Ne,
              className: z().DiscoveryQueueWidget,
              children:
                !Se &&
                (0, e.jsx)(n, { id: Be, strQueueDescriptionOverride: j }),
            }),
          });
        }
        function n(te) {
          const { strQueueDescriptionOverride: v, id: j } = te,
            x = v ?? (0, P.we)("#DiscoveryQueue_WidgetHeader");
          return (0, e.jsxs)("div", {
            id: j,
            className: (0, M.A)(z().WidgetHeaderCtn, "WidgetHeaderCtn"),
            children: [
              (0, e.jsx)("div", {
                className: z().WidgetHeaderText,
                children: (0, P.we)("#DiscoveryQueue_WidgetHeader_Yours"),
              }),
              (0, e.jsx)("div", {
                className: z().WidgetHeaderSubText,
                children: x,
              }),
            ],
          });
        }
        function f(te) {
          const v = $(!0),
            j = A.useCallback(() => {
              window.location.href = `${I.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
            }, []);
          return (0, e.jsx)(c, {
            onClick: j,
            arrDiscoveryApps: v ? X.Nv(v) : void 0,
            children: (0, e.jsxs)("div", {
              className: (0, M.A)(z().WidgetHeaderCtn, "WidgetHeaderCtn"),
              children: [
                (0, e.jsx)("div", {
                  className: z().WidgetHeaderText,
                  children: (0, P.we)("#DiscoveryQueue_WidgetHeader_Yours"),
                }),
                (0, e.jsx)("div", {
                  className: z().WidgetHeaderSubText,
                  children: (0, P.we)("#DiscoveryQueue_WidgetHeader_LoggedOut"),
                }),
                (0, e.jsx)("div", {
                  className: z().LoginButton,
                  children: (0, P.we)("#DiscoveryQueue_Error_Login_Title"),
                }),
              ],
            }),
          });
        }
        function $(te) {
          let { data: v } = (0, W.PG)(
            "DiscoveryQueueWidget",
            {
              sort: l.Dq.Rm,
              start: 0,
              count: 12,
              filters: { type_filters: { include_games: !0 } },
            },
            { ...m.LB, include_screenshots: !0 },
            { reactQuery: { enabled: te, staleTime: 1 / 0 } },
          );
          return (0, A.useMemo)(
            () => v && v.GetItemIDs().map((j) => j.appid),
            [v],
          );
        }
        function Ue() {
          const te = (0, Y.Qt)(Z.L6.Jz, I.TS.LANGUAGE, !0),
            v = (0, I.Qn)();
          if (!te.data?.definition || (te.data?.reward_items?.length ?? 0) == 0)
            return null;
          const j = te?.data.reward_items ?? [];
          (0, X.fW)(j);
          const x = j.slice(0, 3);
          let U = null;
          return (
            I.iA.logged_in &&
              !v &&
              (U = (0, e.jsxs)(e.Fragment, {
                children: [
                  " - ",
                  (0, e.jsx)("a", {
                    href: I.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                    children: (0, P.we)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
                ],
              })),
            (0, e.jsxs)("div", {
              className: z().SaleTopSection,
              children: [
                (0, e.jsx)(ie, { rgRewardItems: x }),
                (0, e.jsxs)("div", {
                  className: z().SaleTextCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: z().BoldText,
                      children: (0, P.we)("#DiscoveryQueue_Widget_SaleDesc"),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, P.we)(
                          "#DiscoveryQueue_Widget_SaleTitle",
                          (0, P._l)(
                            te.data.definition.rtime_end_time ?? 0,
                            !1,
                            !1,
                            !1,
                            !1,
                          ),
                        ),
                        U,
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function ie(te) {
          const { rgRewardItems: v } = te,
            j = v.map((x) => {
              if (!x.community_definition || !x.community_definition.item_name)
                return null;
              const U = `${I.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${x.appid}/${x.community_definition.item_image_small}`;
              return (0, e.jsx)(
                "div",
                {
                  className: z().SaleSticker,
                  children: (0, e.jsx)("img", { src: U }),
                },
                x.community_definition.item_name.toString(),
              );
            });
          return (0, e.jsx)("div", {
            className: z().StickerArrangement,
            children: X.Nv(j),
          });
        }
      },
      87192: (ee, k, t) => {
        "use strict";
        t.r(k), t.d(k, { default: () => ut });
        var e = t(7850),
          h = t(90626),
          A = t(24660),
          l = t(19298),
          r = t(78365),
          K = t(20169),
          W = t(7112),
          _ = t(55051),
          M = t(68312),
          P = t(37740),
          I = t(72865),
          N = t(71568),
          F = t(6469),
          z = t(94253),
          Z = t(10142),
          Y = t(84676),
          X = t(36118),
          ne = t(51079),
          b = t(47689),
          Q = t(36707),
          s = t(18210),
          B = t(57589),
          u = t(13854),
          g = t(41672),
          o = t(3166),
          c = t(57810),
          a = t(40594);
        function i({
          nPercent: E,
          indeterminate: y,
          animate: S,
          className: T,
        }) {
          return jsx("div", {
            className: classnames(
              styles.ProgressBar,
              S && styles.AnimateProgress,
              y && styles.Indeterminate,
              T,
            ),
            style: { "--percent": E / 100 },
          });
        }
        const p = ({ nPercent: E, size: y = 120, strokeWidth: S = 20 }) => {
          const T = (y - S) / 2,
            H = 2 * Math.PI * T,
            R = H - (E / 100) * H,
            se = E == 100;
          return (0, e.jsx)("div", {
            className: (0, Q.A)({ [a.Circular]: !0, [a.Full]: se }),
            children: (0, e.jsxs)("svg", {
              width: y,
              height: y,
              style: { transform: "rotate(-90deg)" },
              children: [
                (0, e.jsx)("circle", {
                  cx: y / 2,
                  cy: y / 2,
                  r: T,
                  stroke: "#0c131d",
                  strokeWidth: S,
                  fill: "none",
                }),
                (0, e.jsx)("circle", {
                  cx: y / 2,
                  cy: y / 2,
                  r: T,
                  stroke: "#1a9fff",
                  strokeWidth: S,
                  fill: "none",
                  strokeDasharray: H,
                  strokeDashoffset: R,
                  style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
                }),
              ],
            }),
          });
        };
        var m = t(85599),
          C = t(21659),
          D = t(12742),
          G = t(62571),
          re = t(72408),
          J = t(48357),
          n = t(80104),
          f = t(27284),
          $ = t(31377),
          Ue = t(71421),
          ie = t(53113),
          te = t(74732),
          v = t(80902),
          j = t(99412),
          x = t(46943),
          U = t(93125),
          ue = t(76559),
          pe = t(813),
          me = t(60480),
          Se = t(14874),
          Ne = t(80702),
          Ge = t(21079),
          Be = t(57834),
          d = t.n(Be),
          He = t(35098),
          it = t(58612),
          we = t(24642);
        const et = new B.wd("AppRelevance").Debug;
        function dt(E, y) {
          const S = (0, h.useMemo)(
            () => F.Fm.Get().GetRecommendingCuratorsForApp(E) || [],
            [E],
          );
          return (0, v.I)({
            queryKey: ["RecommendingCurators", E],
            queryFn: () =>
              Promise.all(S?.map((T) => pe.ac.LoadClanInfoForClanAccountID(T))),
            enabled: !!y && S && S.length > 0,
          });
        }
        function ot(E) {
          const {
              appID: y,
              bShowAvatars: S,
              storeItem: T,
              bHideDescription: H,
              bShowCuratorInfo: R,
              bShowCreatorInfo: se,
            } = E,
            w = (0, it.Nd)(y),
            ae = (0, Ge.Dk)(y),
            he = (0, Ge.zo)(y),
            Ce = (0, Ge.Y8)(),
            ye = (0, v.I)({
              queryKey: ["SimilarPlayedAppsLoad", y],
              queryFn: () =>
                Z.A.Get().QueueMultipleAppRequests(
                  he.data.arrSimilarPlayedApps?.map((ce) => ce.appid),
                  { include_basic_info: !0, include_assets: !0 },
                ),
              enabled: he.isSuccess,
            }),
            We = dt(y, R),
            Me = (0, h.useMemo)(() => {
              let ce = [];
              return (
                T &&
                  ((ce = ce.concat(
                    T.GetAllFranchiseCreatorClans().map((Oe) => ({
                      nAccountID: Oe,
                      type: "franchise",
                    })),
                  )),
                  (ce = ce.concat(
                    T.GetAllDeveloperCreatorClans().map((Oe) => ({
                      nAccountID: Oe,
                      type: "developer",
                    })),
                  )),
                  (ce = ce.concat(
                    T.GetAllPublisherCreatorClans().map((Oe) => ({
                      nAccountID: Oe,
                      type: "publisher",
                    })),
                  )),
                  (ce = ce.filter((Oe) =>
                    F.Fm.Get().BIsFollowingCurator(Oe.nAccountID),
                  ))),
                ce
              );
            }, [T]),
            Ae = (0, v.I)({
              queryKey: ["FollowedCreators", y],
              queryFn: () =>
                pe.ac
                  .LoadClanInfoForClanAccountID(Me[0].nAccountID)
                  .then((ce) => ({ clanInfo: ce, type: Me[0].type })),
              enabled: !!se && Me && Me.length > 0,
            }),
            Ee = (0, v.I)({
              queryKey: ["PlayerSummaries", y, S],
              queryFn: async () => {
                let ce = [],
                  Oe = [],
                  mt = [];
                const pt = S ? 10 : 1;
                for (
                  let Ie = 0;
                  Ie < ae.data.accountids_recommended?.length && Ie < pt;
                  Ie++
                ) {
                  const Je = ue.b.InitFromAccountID(
                    ae.data.accountids_recommended[Ie],
                  );
                  ce.push(Je.ConvertTo64BitString());
                }
                for (
                  let Ie = 0;
                  Ie < w.data.in_wishlist?.length && Ie < pt;
                  Ie++
                ) {
                  const Je = new ue.b(w.data.in_wishlist[Ie].steamid);
                  Oe.push(Je.ConvertTo64BitString());
                }
                for (let Ie = 0; Ie < w.data.owns?.length && Ie < pt; Ie++) {
                  const Je = new ue.b(w.data.owns[Ie].steamid);
                  mt.push(Je.ConvertTo64BitString());
                }
                return {
                  rgRecommendedFriends: ce,
                  rgWishlistFriends: Oe,
                  rgOwnedFriends: mt,
                };
              },
              enabled: ae.isSuccess && w.isSuccess,
            });
          if (
            !Ce ||
            ye.isLoading ||
            he.isLoading ||
            ae.isLoading ||
            w.isLoading ||
            We.isLoading ||
            Ae.isLoading ||
            Ee.isLoading
          )
            return (0, e.jsx)(m.t, { size: "medium", position: "center" });
          let Qe = [];
          he.isSuccess &&
            he.data.arrSimilarPlayedApps &&
            he.data.arrSimilarPlayedApps.slice(0, 2).forEach((ce) => {
              const Oe = Z.A.Get().GetApp(ce.appid);
              Oe
                ? Qe.push(
                    (0, e.jsx)(
                      ht,
                      { lifetimePlaytime: ce.playtimeForever, storeItem: Oe },
                      ce.appid,
                    ),
                  )
                : console.error("Failed to load store data ", y);
            });
          const Te = Ce.GetItemIDs().findIndex((ce) => ce.appid === y),
            je = he.data?.bRecommendedByIR,
            _e = Qe.length > 0,
            qe = w.data?.owns?.length,
            oe = w.data?.in_wishlist?.length,
            De = ae.data?.accountids_recommended?.length;
          let ve = 0;
          return (
            qe > 0 && ve++,
            oe > 0 && ve++,
            De > 0 && ve++,
            je && ve++,
            Te >= 0 && ve++,
            Qe.length > 0 && ve++,
            R && We?.data?.length > 0 && ve++,
            se && Ae.data && ve++,
            et(
              "FriendsOwned: ",
              qe,
              " FriendsWishlisted: ",
              oe,
              "cRecommended: ",
              De,
            ),
            (0, e.jsxs)(e.Fragment, {
              children: [
                ve > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        className: d().WhyRelevant,
                        children: (0, s.we)("#DiscoveryQueue_WhyRelevant"),
                      }),
                      (0, e.jsxs)("div", {
                        role: "list",
                        className: d().RelevantCtn,
                        children: [
                          _e &&
                            (0, e.jsx)(le, {
                              header: (0, s.we)("#DiscoveryQueue_SimilarGames"),
                              children: (0, e.jsx)("div", {
                                className: d().ReleventSimilarAppsCtn,
                                children: Qe,
                              }),
                            }),
                          R &&
                            We?.data?.length > 0 &&
                            (0, e.jsx)(le, {
                              header: (0, s.we)(
                                "#ContentHub_Recommendation_Curators",
                              ),
                              children: (0, e.jsx)("div", {
                                className: (0, Q.A)(
                                  d().ReleventSimilarAppsCtn,
                                  d().RecommendingCuratorsCtn,
                                ),
                                children: We.data
                                  .filter(Boolean)
                                  .map((ce) =>
                                    (0, e.jsx)(
                                      lt,
                                      { curator: ce },
                                      "curator_" + ce.clanAccountID,
                                    ),
                                  ),
                              }),
                            }),
                          se &&
                            !!Ae.data &&
                            (0, e.jsx)(gt, { creatorInfo: Ae.data }),
                          Te >= 0 &&
                            (0, e.jsx)(le, {
                              header: (0, s.um)(
                                "#DiscoveryQueue_TopSellers",
                                (0, we.D)(Te + 1),
                                (0, e.jsx)("span", {
                                  className: d().RelevantTextBold,
                                }),
                              ),
                            }),
                          je &&
                            !_e &&
                            (0, e.jsx)(le, {
                              header: (0, s.we)(
                                "#DiscoveryQueue_RecommendedByIR",
                              ),
                            }),
                          (0, e.jsx)(L, {
                            bShowAvatars: S,
                            count: ae.data?.accountids_recommended?.length,
                            locToken: "#DiscoveryQueue_FriendsRecommended",
                            arrSteamIDs: Ee.data?.rgRecommendedFriends,
                          }),
                          (0, e.jsx)(L, {
                            bShowAvatars: S,
                            count: w.data?.owns?.length,
                            locToken: "#DiscoveryQueue_FriendsOwned",
                            arrSteamIDs: Ee.data?.rgOwnedFriends,
                          }),
                          (0, e.jsx)(L, {
                            bShowAvatars: S,
                            count: w.data?.in_wishlist?.length,
                            locToken: "#DiscoveryQueue_FriendsWishlisted",
                            arrSteamIDs: Ee.data?.rgWishlistFriends,
                          }),
                        ],
                      }),
                    ],
                  }),
                !H || ve == 0
                  ? (0, e.jsx)("div", {
                      className: (0, Q.A)(
                        d().AppDescription,
                        ve && d().Divider,
                      ),
                      children: T.GetShortDescription(),
                    })
                  : (0, e.jsx)("div", {
                      "aria-label": T.GetShortDescription(),
                    }),
              ],
            })
          );
        }
        function gt(E) {
          const { creatorInfo: y } = E;
          if (!y) return null;
          let S;
          switch (y.type) {
            case "publisher":
              S = "#ContentHub_Recommendation_FollowedPublisher";
              break;
            case "developer":
              S = "#ContentHub_Recommendation_FollowedDeveloper";
              break;
            case "franchise":
              S = "#ContentHub_Recommendation_FollowedFranchise";
              break;
          }
          return S
            ? (0, e.jsx)(le, {
                header: (0, s.PP)(
                  S,
                  (0, e.jsx)("span", {
                    className: d().RelevantTextBold,
                    children: y.clanInfo?.group_name,
                  }),
                ),
              })
            : null;
        }
        function lt(E) {
          const { curator: y } = E,
            { creatorHome: S } = (0, me.FV)(y?.clanAccountID);
          return !y || !S
            ? null
            : (0, e.jsx)(A.Ii, {
                href: S.GetCreatorHomeURL(null),
                children: (0, e.jsx)("img", { src: y.avatar_medium_url }),
              });
        }
        function ht(E) {
          const { lifetimePlaytime: y, storeItem: S } = E,
            T = (0, Se.DJ)(S);
          return (0, e.jsx)("div", {
            className: d().SimilarAppCtn,
            children: (0, e.jsx)(Ne.Q, {
              id: T,
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
              children: (0, e.jsx)("img", {
                className: d().SimilarAppImg,
                alt: S.GetName(),
                src: S.GetAssets().GetSmallCapsuleURL(),
              }),
            }),
          });
        }
        function L(E) {
          const { arrSteamIDs: y, count: S, locToken: T, bShowAvatars: H } = E;
          return S
            ? S == 1 && !H
              ? (0, e.jsx)(le, {
                  header: (0, s.PP)(
                    T + "_Single",
                    (0, e.jsx)(O, { steamid: y[0] }),
                  ),
                })
              : (0, e.jsx)(le, {
                  header: (0, s.um)(
                    T,
                    S,
                    (0, e.jsx)("span", { className: d().RelevantTextBold }),
                  ),
                  children:
                    H &&
                    y.length > 0 &&
                    (0, e.jsx)("div", {
                      className: d().FriendAvatarsCtn,
                      children:
                        S == 1
                          ? (0, e.jsx)(q, { steamid: y[0] })
                          : (0, e.jsx)(V, { arrSteamIDs: y }),
                    }),
                })
            : null;
        }
        function O(E) {
          const { steamid: y } = E,
            { data: S } = (0, He.js)(y);
          return !S || !S.m_bInitialized
            ? null
            : (0, e.jsx)("span", {
                "data-miniprofile": "s" + S.m_steamid.ConvertTo64BitString(),
                className: d().RelevantTextBold,
                children: S.m_strPlayerName,
              });
        }
        function V(E) {
          const { arrSteamIDs: y } = E,
            S = (0, He.DW)(y);
          return (0, e.jsx)(e.Fragment, {
            children: S.map(
              ({ data: T }) =>
                T &&
                (0, e.jsx)(
                  x.i8,
                  {
                    "data-miniprofile":
                      "s" + T.m_steamid.ConvertTo64BitString(),
                    persona: T,
                    size: "Small",
                    statusPosition: "right",
                  },
                  T.m_steamid.ConvertTo64BitString(),
                ),
            ),
          });
        }
        function q(E) {
          const { steamid: y } = E,
            { data: S } = (0, He.js)(y);
          return S
            ? (0, e.jsxs)(l.Z, {
                className: d().FriendBlockCtn,
                "data-miniprofile": "s" + y,
                children: [
                  (0, e.jsx)(x.i8, {
                    persona: S,
                    size: "Small",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)(U.D, {
                    className: d().PersonaStatus,
                    persona: S,
                    eFriendRelationship: j._UC,
                    bIsSelf: !1,
                    strNickname: null,
                    bParenthesizeNicknames: !1,
                    bCompactView: !1,
                    bNoMask: !0,
                  }),
                ],
              })
            : null;
        }
        function le(E) {
          const { children: y, header: S } = E;
          return (0, e.jsxs)("div", {
            className: d().RelevantItem,
            children: [
              (0, e.jsx)("div", {
                className: d().RelevantCheck,
                children: (0, e.jsx)(X.Jlk, {}),
              }),
              (0, e.jsxs)("div", {
                className: d().RelevantColumn,
                children: [
                  (0, e.jsx)("div", {
                    className: d().ReleventText,
                    children: S,
                  }),
                  y,
                ],
              }),
            ],
          });
        }
        var fe = t(29522),
          ge = t(77426);
        const Pe = new B.wd("DiscoveryQueueApp").Debug;
        function xe(E) {
          const {
              appID: y,
              nItemHeight: S,
              nItemWidth: T,
              selected: H,
              fnFocused: R,
              eStoreDiscoveryQueueType: se,
              storePageFilter: w,
              bPreferDemoStorePage: ae,
              elVideo: he,
              elDetails: Ce,
              appAriaIDs: ye,
            } = E,
            [We] = (0, Y.t7)(y, ge.G),
            Me = (0, o.Qn)(),
            Ee = (0, N.R7)()?.ownerWindow || window,
            Qe = Ve(We, se, w, ae),
            { bIsIgnored: Te, fnUpdateIgnored: je } = (0, re.TK)(y),
            { bIsWishlisted: _e, fnUpdateWishlist: qe } = (0, re.u4)(y),
            oe = h.useRef(void 0);
          if (
            (h.useEffect(() => {
              H && oe.current && oe.current.focus({ preventScroll: !0 });
            }, [H]),
            !We)
          )
            return (
              console.warn("Error: missing store item for appid ", y), null
            );
          const De = { width: T || void 0, height: S || void 0 };
          return (0, e.jsxs)(l.Z, {
            "aria-labelledby": (0, G.q)(
              ye.nameId,
              ye.tagsId,
              ye.reviewId,
              ye.relevanceId,
              ye.buttonsId,
            ),
            ref: oe,
            style: De,
            className: (0, Q.A)(d().DiscoveryQueueApp, H && d().Selected),
            onOptionsActionDescription: _e
              ? (0, s.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, s.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: qe,
            onOKActionDescription: (0, s.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              Ee.location.href = Qe;
            },
            onSecondaryActionDescription: Te
              ? (0, s.we)("#DiscoveryQueue_Undo")
              : (0, s.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: je,
            fnScrollIntoViewHandler: () => (R(), !0),
            children: [
              (0, e.jsx)("div", {
                className: (0, Q.A)(d().IgnoredCtn, Te && d().Active),
                children: (0, e.jsxs)("div", {
                  className: (0, Q.A)(d().IgnoredInfo, Te && d().Active),
                  children: [
                    (0, e.jsx)("div", {
                      className: d().IgnoredTitle,
                      children: (0, s.we)("#DiscoveryQueue_Ignored"),
                    }),
                    (0, e.jsx)("div", {
                      className: d().IgnoredDescription,
                      children: (0, s.we)(
                        "#DiscoveryQueue_IgnoredConfirmation",
                      ),
                    }),
                    (0, e.jsxs)(l.Z, {
                      className: (0, Q.A)(
                        d().QueueButton,
                        d().UndoIgnoreButton,
                      ),
                      onClick: je,
                      children: [
                        Me &&
                          (0, e.jsx)($.$m, {
                            button: te.g4.X,
                            type: $.wt.Light,
                            size: $.xY.Medium,
                          }),
                        (0, s.we)("#DiscoveryQueue_Undo"),
                      ],
                    }),
                  ],
                }),
              }),
              he,
              Ce,
            ],
          });
        }
        function Ve(E, y, S, T) {
          const H = (0, I.n9)();
          return h.useMemo(() => {
            if (!E) return;
            const se = (0, c.Bk)(S),
              w = y >= _.QV.qy ? "?inqueue=" + y + (S ? "_" + se : "") : "",
              ae = (0, I.bV)(H, E.GetStorePageURL(T) + w);
            return (0, ie.NT)(ae);
          }, [T, y, H, E, S]);
        }
        function Ke(E) {
          const {
              appID: y,
              bShowMinimizedDisplay: S,
              eStoreDiscoveryQueueType: T,
              storePageFilter: H,
              bPreferDemoStorePage: R,
              appAriaIDs: se,
            } = E,
            [w] = (0, Y.t7)(y, ge.G),
            ae = (0, fe.$5)(y),
            { bIsIgnored: he, fnUpdateIgnored: Ce } = (0, re.TK)(y),
            { bIsWishlisted: ye, fnUpdateWishlist: We } = (0, re.u4)(y),
            Me = Ve(w, T, H, R),
            Ae = (0, o.Qn)(),
            Ee = Ae;
          if (!w) return;
          const Qe = w.GetAssets().GetLibraryCapsuleURL(),
            Te = w.GetAssets().GetHeaderURL();
          return (0, e.jsxs)(l.Z, {
            className: d().AppDetailsCtn,
            children: [
              (0, e.jsxs)("div", {
                className: d().AppDetailsCtnTop,
                children: [
                  Qe &&
                    (0, e.jsxs)("a", {
                      className: (0, Q.A)(d().CapsuleLink),
                      href: Me,
                      children: [
                        (0, e.jsx)("img", {
                          className: d().AppLibraryHero,
                          src: Qe,
                        }),
                        Te &&
                          (0, e.jsx)("img", {
                            className: d().AppHeader,
                            src: Te,
                          }),
                      ],
                    }),
                  (0, e.jsxs)("div", {
                    id: se.nameId,
                    className: d().RightColumn,
                    children: [
                      (0, e.jsx)("a", {
                        className: (0, Q.A)(d().AppName),
                        href: Me,
                        children: w.GetName(),
                      }),
                      (0, e.jsx)(J.NF, { bSingleLineMode: !0, id: ae }),
                    ],
                  }),
                  (0, e.jsx)($e, {
                    rgTagIDs: w.GetTagIDs(),
                    ariaLabelID: se.tagsId,
                  }),
                  (0, e.jsx)("div", {
                    className: d().AppReviews,
                    id: se.reviewId,
                    children: (0, e.jsx)(n.J, {
                      bShowTooltip: !0,
                      bTruncateTotalReviews: S,
                      id: ae,
                    }),
                  }),
                  (0, e.jsx)("div", {
                    id: se.relevanceId,
                    className: d().AppRelevanceCtn,
                    children: (0, e.jsx)(ot, {
                      bHideDescription: Ae,
                      bShowAvatars: !S,
                      storeItem: w,
                      appID: y,
                    }),
                  }),
                ],
              }),
              !Ae &&
                (0, e.jsx)("div", {
                  className: d().AppActionButtonsCtn,
                  children: (0, e.jsx)("div", {
                    id: se.buttonsId,
                    className: d().AppActionJustButtonsCtn,
                    children: (0, e.jsxs)("div", {
                      className: d().ButtonsRowWrap,
                      children: [
                        w.BHasDemo() &&
                          (0, e.jsx)(f.j, {
                            id: ae,
                            className: (0, Q.A)(
                              d().QueueButton,
                              d().Primary,
                              d().Launch,
                            ),
                          }),
                        (0, e.jsxs)("a", {
                          className: (0, Q.A)(d().QueueButton, d().Primary),
                          href: Me,
                          children: [
                            Ee &&
                              (0, e.jsx)($.$m, {
                                button: te.g4.Y,
                                type: $.wt.Light,
                                size: $.xY.Medium,
                                additionalClassName: d().YGlyph,
                              }),
                            " ",
                            (0, s.we)("#DiscoveryQueue_ViewStorePage"),
                          ],
                        }),
                        (0, e.jsx)(Ue.he, {
                          toolTipContent: ye
                            ? (0, s.we)("#RemoveFromWishlist_ttip")
                            : (0, s.we)("#AddToWishlist_ttip"),
                          children: (0, e.jsxs)(l.Z, {
                            "aria-label": ye
                              ? (0, s.we)("#Sale_RemoveFromWishlist")
                              : (0, s.we)("#Sale_AddToWishlist"),
                            focusable: !0,
                            className: (0, Q.A)(
                              d().QueueButton,
                              ye && d().Active,
                            ),
                            onClick: We,
                            children: [
                              Ee &&
                                (0, e.jsx)($.$m, {
                                  button: te.g4.Y,
                                  type: $.wt.Light,
                                  size: $.xY.Medium,
                                  additionalClassName: d().YGlyph,
                                }),
                              ye
                                ? (0, e.jsx)(X.qnF, {})
                                : (0, e.jsx)(X.T4m, {}),
                            ],
                          }),
                        }),
                        (0, e.jsx)(Ue.he, {
                          toolTipContent: (0, s.we)(
                            "#SaleTrailerCarousel_IgnoreLink_ttip",
                          ),
                          children: (0, e.jsx)(l.Z, {
                            "aria-label": (0, s.we)(
                              "#DiscoveryQueue_IgnoreLink",
                            ),
                            focusable: !0,
                            className: (0, Q.A)(
                              d().QueueButton,
                              he && d().Active,
                            ),
                            onClick: Ce,
                            children: (0, e.jsx)(X.NtH, {}),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        }
        function $e(E) {
          const { rgTagIDs: y, ariaLabelID: S } = E,
            H = [...(0, re.W3)(y)].slice(0, 8);
          return (0, e.jsx)("div", {
            id: S,
            role: "list",
            className: d().AppTagsCtn,
            children: H.map((R) =>
              (0, e.jsx)(D.Fz, { className: d().TagEntry, tagID: R }, R),
            ),
          });
        }
        function Le() {
          const E = h.useId(),
            y = h.useId(),
            S = h.useId(),
            T = h.useId(),
            H = h.useId();
          return {
            nameId: E,
            tagsId: y,
            reviewId: S,
            relevanceId: T,
            buttonsId: H,
          };
        }
        var Fe = t(24245),
          Ze = t(85742),
          Ye = t(54528),
          Xe = t(94162);
        const at = new B.wd("DiscoveryQueueWizard").Debug,
          be = 1,
          ke = 1400,
          tt = "discoveryqueue2022";
        async function rt(E, y, S, T) {
          let H = [],
            R = !1;
          try {
            const { appids: se, exhausted: w } = await c.aI
              .Get()
              .GetDiscoveryQueueAppsOfType(E, y, T);
            (H = [...se]),
              (R = w),
              S && H.findIndex((ae) => ae === S) === -1 && H.unshift(S),
              await Z.A.Get().QueueMultipleAppRequests(H, {
                ...ge.G,
                ...Ze.LB,
              });
          } catch (se) {
            console.error("Failed getting discovery queue apps", se);
          }
          return { appids: H, exhausted: R };
        }
        function ut(E) {
          const [y, S] = h.useState(!1),
            T = (0, M.KV)();
          return (
            (0, h.useEffect)(() => {
              c.aI.Init(T), S(!0);
            }, [T]),
            y ? (0, e.jsx)(nt, { ...E }) : null
          );
        }
        function nt(E) {
          const {
              eStoreDiscoveryQueueType: y,
              fnCloseModal: S,
              includeAppID: T,
              storePageFilter: H,
              bPreferDemoStorePage: R,
              bShowAOAutoPlayWarning: se,
            } = E,
            [w, ae] = h.useState(0),
            [he, Ce] = h.useState(void 0),
            [ye, We] = h.useState(0),
            Ae = (0, N.R7)()?.ownerWindow || window,
            Ee = (0, I.ru)(tt),
            [Qe, Te] = h.useState(0),
            je = (0, P.b)();
          (0, g.E)("ArrowLeft", () => De(!1), !0, !0),
            (0, g.E)("Left", () => De(!1), !0, !0),
            (0, g.E)("ArrowRight", () => De(!0), !0, !0),
            (0, g.E)("Right", () => De(!0), !0, !0),
            (0, g.E)("Escape", () => S?.(), !0, !0),
            (0, g.E)("Esc", () => S?.(), !0, !0);
          const _e = h.useMemo(() => Ae.innerWidth < ke, [Ae]),
            { fnGetDiscoveryQueue: qe, rgAppIDs: oe } = ze(y, H, T);
          h.useEffect(() => {
            qe(!0), F.Fm.Get().HintLoad();
          }, []),
            h.useEffect(() => {
              const de = oe[w];
              de != he && (de && de != be && je.AddImpression(de, Ee), Ce(de));
            }, [je, w, he, oe, Ee]);
          const De = (de) => {
            const Bt = u.OQ(w + (de ? 1 : -1), 0, oe.length - 1);
            Bt != w &&
              (ae(Bt),
              at("New selected index: ", Bt, " Prev selected index: ", w));
          };
          h.useEffect(() => {
            oe?.length &&
              oe[w] !== be &&
              (Te((de) => de + 1),
              c.aI
                .Get()
                .SkipDiscoveryQueueItem(oe[w], y, H)
                .then(() => Te((de) => de - 1)));
          }, [y, w, oe, H]),
            h.useEffect(() => {
              oe.length != ye &&
                (We(oe.length), oe.length > ye && oe[w] == be && ae(w + 1));
            }, [ye, w, oe]);
          const [ve] = h.useState(new Map()),
            ce = (0, c.WX)(y, H),
            Oe = !(0, C.c5)() && w > 0,
            mt = !(0, C.c5)() && w < oe.length - 1,
            {
              refContainer: pt,
              bIsDragging: Ie,
              nDragOffset: Je,
              nDragSelectedOffsetIndex: Dt,
              handleTouchStart: Ct,
              handleTouchMove: Et,
              handleTouchEnd: Pt,
            } = Re((de) => ae(de), oe.length),
            xt = (de) => {
              de.target == de.currentTarget && (S?.(), de.stopPropagation());
            },
            bt = (de) => u.W(w + de, oe) && (u.LA(de, -1, 1) || Ie),
            Mt = (0, I.aL)(o.TS.STORE_BASE_URL + "explore?dq=widget"),
            Tt = !(0, o.Qn)() && !(0, Xe.$W)() && y === _.QV.qy,
            jt = (0, I.aL)(o.TS.STORE_BASE_URL + "explore/next/" + _.QV.qy),
            Ot = oe[w] !== be,
            { nQueueStart: Nt, nCount: Lt } = yt(w, oe);
          return (0, e.jsx)(ne.Ay, {
            feature: tt,
            children: (0, e.jsx)(l.Z, {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: d().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: K.iU.LAST,
              onCancelButton: () => S?.(),
              onCancelActionDescription: (0, s.we)("#Button_Close"),
              children: (0, e.jsxs)("div", {
                className: d().DiscoveryQueueWrapper,
                onClick: xt,
                children: [
                  ce.length > 0 &&
                    (0, e.jsx)(l.Z, {
                      "flow-children": "row",
                      className: d().DiscoveryQueueName,
                      children: ce,
                    }),
                  (0, e.jsxs)(l.Z, {
                    "flow-children": "row",
                    className: d().TopBarCtn,
                    children: [
                      (0, e.jsx)(l.Z, {
                        className: d().LearnMore,
                        children: (0, s.oW)(
                          "#DiscoveryQueue_LearnMore_Default",
                          (0, e.jsx)(A.Ii, {
                            className: d().LearnMoreLink,
                            href: (0, ie.NT)(Mt),
                          }),
                        ),
                      }),
                      Tt &&
                        (0, e.jsx)(l.Z, {
                          className: d().ClassicQueueLink,
                          children: (0, s.oW)(
                            "#DiscoveryQueue_ClassicQueue_Link",
                            (0, e.jsx)(A.Ii, {
                              className: d().LearnMoreLink,
                              href: (0, ie.NT)(jt),
                            }),
                          ),
                        }),
                      (0, e.jsx)(l.Z, {
                        className: d().ControlsCtn,
                        children: (0, e.jsx)(l.Z, {
                          focusable: !0,
                          className: d().QueueButton,
                          onClick: S,
                          "aria-label": (0, s.we)("#Button_Close"),
                          onActivate: () => S && S(),
                          children: (0, e.jsx)(X.X, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(l.Z, {
                    role: "button",
                    "aria-label": (0, s.we)("#Carousel_Next"),
                    onClick: () => De(!1),
                    className: (0, Q.A)(
                      d().QueueNavArrow,
                      d().LeftArrow,
                      Oe && d().Enable,
                    ),
                    children: (0, e.jsx)(X.l8x, { angle: 180 }),
                  }),
                  (0, e.jsx)(l.Z, {
                    role: "button",
                    "aria-label": (0, s.we)("#Carousel_Prev"),
                    onClick: () => De(!0),
                    className: (0, Q.A)(
                      d().QueueNavArrow,
                      d().RightArrow,
                      mt && d().Enable,
                    ),
                    children: (0, e.jsx)(X.l8x, { angle: 0 }),
                  }),
                  (0, e.jsx)(l.Z, {
                    ref: pt,
                    className: d().DiscoveryQueueItemsCtn,
                    focusable: !1,
                    onTouchStart: Ct,
                    onTouchMove: Et,
                    onTouchEnd: Pt,
                    children: [-2, -1, 0, 1, 2].map((de) =>
                      (0, e.jsx)(
                        "div",
                        {
                          className: (0, Q.A)({
                            [d().DiscoveryQueueItemPositioner]: !0,
                            [d().Dragging]: Ie,
                            [d().InRange]: bt(de),
                            [d().FarLeft]: de == -2,
                            [d().Left]: de == -1,
                            [d().Current]: de == 0,
                            [d().Right]: de == 1,
                            [d().FarRight]: de == 2,
                            [d().Selected]: de + Dt == 0,
                          }),
                          style: { "--dragOffsetX": `${Je}px` },
                          children:
                            bt(de) &&
                            (0, e.jsx)(At, {
                              eStoreDiscoveryQueueType: y,
                              storePageFilter: H,
                              rgAppIDs: oe,
                              index: w + de,
                              bShowMinimizedDisplay: _e,
                              selectedIndex: w,
                              bPreferDemoStorePage: !!R,
                              mapViewedAppCount: ve,
                              fnCloseModal: S,
                              fnLoadNextQueue: () => qe(!1),
                              fnAdvance: De,
                              bSkipAppRequestPending: Qe != 0,
                              showAOAutoPlayWarning: !!se,
                            }),
                        },
                        w + de,
                      ),
                    ),
                  }),
                  (0, e.jsx)(Fe.A, {
                    className: (0, Q.A)(!Ot && d().ProgressHidden),
                    showPriorAsActive: !0,
                    count: Lt,
                    selectedIndex: w - Nt,
                  }),
                ],
              }),
            }),
          });
        }
        function yt(E, y) {
          let S = 0;
          for (let R = 0; R < E; R++) y[R] == be && (S = R + 1);
          let T = 0;
          for (let R = E; R < y.length; R++)
            if (y[R] == be) {
              T = R;
              break;
            } else R == y.length - 1 && (T = y.length);
          const H = T - S;
          return { nQueueStart: S, nQueueEnd: T, nCount: H };
        }
        function Re(E, y) {
          const S = h.useRef(null),
            [T, H] = h.useState(0),
            [R, se] = h.useState(!1),
            [w, ae] = h.useState(0),
            he = h.useRef(0),
            Ce = 50;
          return {
            refContainer: S,
            bIsDragging: R,
            nDragOffset: T,
            nDragSelectedOffsetIndex: w,
            handleTouchStart: (Ae) => {
              se(!0), (he.current = Ae.touches[0].clientX), H(0), ae(0);
            },
            handleTouchMove: (Ae) => {
              if (!R) return;
              const Ee = Ae.touches[0].clientX - he.current;
              H(Ee), ae(T > Ce ? 1 : T < -Ce ? -1 : 0);
            },
            handleTouchEnd: () => {
              R &&
                (se(!1),
                T > Ce
                  ? E((Ae) => Math.max(Ae - 1, 0))
                  : T < -Ce && E((Ae) => Math.min(Ae + 1, y - 1)),
                H(0),
                ae(0));
            },
          };
        }
        function At(E) {
          const {
              eStoreDiscoveryQueueType: y,
              storePageFilter: S,
              rgAppIDs: T,
              index: H,
              bShowMinimizedDisplay: R,
              selectedIndex: se,
              bPreferDemoStorePage: w,
              mapViewedAppCount: ae,
              fnCloseModal: he,
              fnLoadNextQueue: Ce,
              fnAdvance: ye,
              bSkipAppRequestPending: We,
              showAOAutoPlayWarning: Me,
            } = E,
            [Ae, Ee] = h.useState(!1),
            Qe = Le(),
            Te = () => {
              se != H && ye(H > se);
            },
            je = se === H,
            _e = h.useRef(je);
          if (
            (h.useEffect(() => {
              const oe = _e.current;
              if (((_e.current = je), oe && !je)) {
                Ee(!0);
                const De = setTimeout(() => Ee(!1), 500);
                return () => {
                  clearTimeout(De);
                };
              }
            }, [je]),
            T[H] == be)
          ) {
            let oe = 0;
            for (let ve = H - 1; ve >= 0; ve--) T[ve] == be && (oe += 1);
            let De = 0;
            for (let ve = H - 1; ve >= 0 && T[ve] !== be; ve--) De++;
            return (
              ae.has(oe) ||
                ae.set(
                  oe,
                  c.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(y, S),
                ),
              (0, h.createElement)(vt, {
                ...E,
                key: se,
                selected: je,
                lastCard: se == T.length - 1,
                fnLoadNextQueue: Ce,
                fnCloseModal: he,
                summaryCardIndex: oe,
                eStoreDiscoveryQueueType: y,
                viewedAppCount: (ae.get(oe) || 0) + De,
                fnFocused: Te,
                fnAdvance: () => ye(!0),
                bSkipAppRequestPending: We,
              })
            );
          }
          const qe = je || _e.current || Ae;
          return (0, e.jsx)(xe, {
            appAriaIDs: Qe,
            eStoreDiscoveryQueueType: y,
            storePageFilter: S,
            selected: je,
            appID: T[H],
            bPreferDemoStorePage: w,
            fnFocused: Te,
            elVideo: (0, e.jsx)(re.y3, {
              appID: T[H],
              focused: qe,
              showAOAutoPlayWarning: Me,
              fnComplete: void 0,
            }),
            elDetails: (0, e.jsx)(Ke, {
              appID: T[H],
              bShowMinimizedDisplay: R,
              eStoreDiscoveryQueueType: y,
              storePageFilter: S,
              bPreferDemoStorePage: w,
              appAriaIDs: Qe,
            }),
          });
        }
        function ze(E, y, S) {
          const [T, H] = h.useState([]),
            R = (0, b.m)("DiscoveryQueueWizard");
          return {
            fnGetDiscoveryQueue: async (w) => {
              let { appids: ae } = await rt(E, !w, w && S, y);
              if (w && !ae.length) {
                let { appids: he } = await rt(E, !0, void 0, y);
                ae = he;
              }
              if (!R?.token?.reason) {
                const he = [...(T ?? []), ...ae, be];
                H(he);
              }
              at("Loaded new discovery queue apps: ", ae);
            },
            rgAppIDs: T,
          };
        }
        function vt(E) {
          const {
              eStoreDiscoveryQueueType: y,
              fnCloseModal: S,
              summaryCardIndex: T,
              lastCard: H,
              selected: R,
              fnLoadNextQueue: se,
              storePageFilter: w,
              fnDisplaySummaryReward: ae,
              viewedAppCount: he,
              fnFocused: Ce,
              fnAdvance: ye,
              bSkipAppRequestPending: We,
            } = E,
            [Me, Ae] = h.useState(!1),
            Ee = (0, o.Qn)(),
            Qe = (0, z.Qt)(W.L6.Jz, o.TS.LANGUAGE, !1),
            [Te, je] = h.useState(0),
            [_e, qe] = h.useState(0),
            { data: oe } = (0, Ye.F0)();
          h.useEffect(() => {
            R &&
              !Me &&
              oe &&
              F.Fm.Get()
                .HintLoad()
                .then(() => {
                  c.aI
                    .Get()
                    .LoadSkippedApps(y, w)
                    .then((Ie) => {
                      je(Ie.reduce((Je, Dt) => (oe.has(Dt) ? Je + 1 : Je), 0)),
                        qe(
                          Ie.reduce(
                            (Je, Dt) =>
                              F.Fm.Get().BIsGameIgnored(Dt) ? Je + 1 : Je,
                            0,
                          ),
                        ),
                        Ae(!0);
                    });
                });
          }, [Me, y, R, w, oe]);
          const [De, ve] = h.useState(!1),
            ce = (0, c.IH)(y, w),
            Oe = (0, b.m)("DiscoveryQueueSummary"),
            mt = async () => {
              if (!H) {
                ye();
                return;
              }
              De || (ve(!0), await se(), Oe?.token?.reason || ve(!1));
            };
          return (0, e.jsxs)(ft, {
            selected: R,
            fnFocused: Ce,
            fnOnContinue: mt,
            fnCloseModal: S,
            bLoaded: Me,
            children: [
              (0, e.jsxs)("div", {
                className: d().SummaryContentCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: d().SummaryTitle,
                    children: (0, s.we)("#DiscoveryQueue_SummaryTitle"),
                  }),
                  !ce &&
                    R &&
                    Qe.data?.definition &&
                    (0, e.jsx)(St, {
                      bSkipAppRequestPending: We,
                      summaryCardIdx: T,
                    }),
                  (0, e.jsx)("div", {
                    className: d().YourStats,
                    children: (0, s.we)("#DiscoveryQueue_YourStats"),
                  }),
                  (0, e.jsxs)(l.Z, {
                    "flow-children": "row",
                    className: d().SummaryGrid,
                    children: [
                      (0, e.jsxs)("div", {
                        className: d().GridItem,
                        children: [
                          (0, e.jsx)("div", {
                            className: d().GridTitle,
                            children: (0, s.we)("#DiscoveryQueue_ViewedCaps"),
                          }),
                          (0, e.jsx)("div", {
                            className: d().GridNumber,
                            children: (0, we.D)(he),
                          }),
                          (0, e.jsx)("div", {
                            className: d().GridSubTitle,
                            children: (0, s.we)("#DiscoveryQueue_Titles"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: d().GridItem,
                        children: [
                          (0, e.jsx)("div", {
                            className: d().GridTitle,
                            children: (0, s.we)(
                              "#DiscoveryQueue_WishlistedCaps",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: d().GridNumber,
                            children: (0, we.D)(Te),
                          }),
                          (0, e.jsx)(I.Fh, {
                            className: (0, Q.A)(d().GridSubTitle, d().TextLink),
                            href: (0, ie.NT)(o.TS.STORE_BASE_URL + "wishlist"),
                            children: (0, s.we)("#DiscoveryQueue_ViewWishlist"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: d().GridItem,
                        children: [
                          (0, e.jsx)("div", {
                            className: d().GridTitle,
                            children: (0, s.we)("#DiscoveryQueue_IgnoredCaps"),
                          }),
                          (0, e.jsx)("div", {
                            className: d().GridNumber,
                            children: (0, we.D)(_e),
                          }),
                          (0, e.jsx)(I.Fh, {
                            className: (0, Q.A)(d().GridSubTitle, d().TextLink),
                            href: (0, ie.NT)(
                              o.TS.STORE_BASE_URL + "account/notinterested",
                            ),
                            children: (0, s.we)("#DiscoveryQueue_ViewIgnored"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  !Ee &&
                    (0, e.jsxs)(l.Z, {
                      className: d().SummaryActionButtonsCtn,
                      children: [
                        (0, e.jsx)(l.Z, {
                          className: (0, Q.A)(d().QueueButton, d().Wide),
                          onClick: S,
                          children: (0, s.we)("#ActionButtonLabelDone"),
                        }),
                        !ce &&
                          (0, e.jsx)(l.Z, {
                            className: (0, Q.A)(
                              De && d().Disabled,
                              d().QueueButton,
                              d().Primary,
                              d().Wide,
                            ),
                            onClick: mt,
                            children: De
                              ? (0, s.we)("#Loading")
                              : (0, s.we)("#Button_Continue"),
                          }),
                      ],
                    }),
                ],
              }),
              !ce && (0, e.jsx)(e.Fragment, { children: !!ae && ae(T + 1) }),
            ],
          });
        }
        function ft(E) {
          const {
              children: y,
              selected: S,
              fnOnContinue: T,
              fnCloseModal: H,
              fnFocused: R,
              bLoaded: se,
            } = E,
            w = (0, I.aL)(o.TS.STORE_BASE_URL + "wishlist"),
            he = (0, N.R7)()?.ownerWindow || window,
            Ce = () => {
              he.location.href = (0, ie.NT)(w);
            },
            ye = h.useRef(void 0);
          return (
            h.useEffect(() => {
              S && ye.current && ye.current.focus({ preventScroll: !0 });
            }, [S]),
            (0, e.jsx)(r.YZ, {
              ref: ye,
              "aria-live": "polite",
              className: (0, Q.A)(
                d().SummaryCtn,
                d().DiscoveryQueueApp,
                S && d().Selected,
              ),
              onOptionsActionDescription: (0, s.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: Ce,
              onOKActionDescription: (0, s.we)("#Button_Continue"),
              onOKButton: () => {
                T();
              },
              onCancelActionDescription: (0, s.we)("#ActionButtonLabelDone"),
              onCancelButton: () => H && H(),
              fnScrollIntoViewHandler: () => (R(), !0),
              children: se
                ? y
                : (0, e.jsx)(m.t, {
                    className: d().DiscoveryQueueThrobber,
                    msDelayAppear: 200,
                    size: "large",
                    position: "center",
                  }),
            })
          );
        }
        function st() {
          return (0, e.jsx)(l.Z, {
            className: d().SaleRewardsCtn,
            children: (0, e.jsx)(m.t, { size: "large", position: "center" }),
          });
        }
        function St(E) {
          const { bSkipAppRequestPending: y, summaryCardIdx: S } = E;
          return y ? (0, e.jsx)(st, {}) : (0, e.jsx)(ct, { summaryCardIdx: S });
        }
        function ct(E) {
          const { summaryCardIdx: y } = E,
            S = (0, z.os)(W.L6.Jz, o.TS.LANGUAGE, !1, y.toString()),
            [T] = (0, Y.t7)(S?.data?.current_def?.appid, {}),
            H = (0, o.Qn)();
          if (!S?.data?.current_def || !T?.GetName().length)
            return (0, e.jsx)(st, {});
          const R = S.data.num_items_earned,
            se = S.data.current_def.num_items_per_def,
            w = se - R,
            ae = (R / se) * 100;
          return (0, e.jsxs)(l.Z, {
            className: d().SaleRewardsCtn,
            children: [
              (0, e.jsx)(p, { nPercent: ae, size: 70, strokeWidth: 12 }),
              (0, e.jsxs)(l.Z, {
                className: d().RewardStatusCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: d().SaleRewardAppTitle,
                    children: (0, s.we)(
                      `#DiscoveryQueue_SaleStatus_Title${w ? "" : "_Complete"}`,
                      (0, we.D)(R),
                      T.GetName(),
                    ),
                  }),
                  w > 0 &&
                    (0, e.jsx)("div", {
                      className: d().SaleRewardAppTitle,
                      children: (0, s.we)(
                        "#DiscoveryQueue_SaleStatus_Desc",
                        (0, we.D)(w),
                        T.GetName(),
                      ),
                    }),
                  !H &&
                    (0, e.jsx)("a", {
                      href: (0, ie.NT)(
                        o.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                      ),
                      children: (0, s.we)("#DiscoveryQueue_SaleStatus_Link"),
                    }),
                ],
              }),
            ],
          });
        }
      },
      6778: (ee, k, t) => {
        "use strict";
        t.d(k, { G: () => K });
        var e = t(90626),
          h = t(68312),
          A = t(57810),
          l = t(6469),
          r = t(98609);
        function K() {
          const [W, _] = (0, e.useState)(!r.iA.logged_in),
            [M] = (0, l.L2)(),
            P = (0, h.KV)();
          return (
            (0, e.useEffect)(() => {
              W || (A.aI.Init(P), _(!0));
            }, [W, P]),
            W && !M
          );
        }
      },
      24245: (ee, k, t) => {
        "use strict";
        t.d(k, { A: () => K });
        var e = t(7850),
          h = t(25599),
          A = t.n(h),
          l = t(19298),
          r = t(36707);
        function K(W) {
          const {
            className: _,
            showPriorAsActive: M,
            count: P,
            selectedIndex: I,
            fnNavigate: N,
          } = W;
          return (0, e.jsx)(l.Z, {
            "flow-children": "row",
            className: (0, r.A)(A().ProgressCtn, _),
            children: Array.from({ length: P }).map((F, z) =>
              (0, e.jsx)(
                "div",
                {
                  className: (0, r.A)({
                    [A().ProgressDot]: !0,
                    [A().ProgressDotActive]: M && z < I,
                    [A().ProgressDotSelected]: z == I,
                    [A().ProgressDotClickable]: !!N,
                  }),
                  onClick: N ? () => N(z) : void 0,
                },
                "dot_" + z,
              ),
            ),
          });
        }
      },
      10739: (ee, k, t) => {
        "use strict";
        t.r(k), t.d(k, { default: () => r });
        var e = t(7850),
          h = t(55051),
          A = t(90405),
          l = t(6394);
        function r() {
          return (0, e.jsx)(A.K, {
            placeholderHeight: "200px",
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsx)(l.g, { eStoreDiscoveryQueueType: h.QV.qy }),
          });
        }
      },
      99783: (ee, k, t) => {
        "use strict";
        t.r(k), t.d(k, { default: () => I });
        var e = t(7850),
          h = t(90626),
          A = t(55051),
          l = t(18210),
          r = t(6778),
          K = t(19298),
          W = t(3166),
          _ = t(96538),
          M = t(88003),
          P = t(85742);
        function I(N) {
          const F = (0, r.G)(),
            { showDiscoveryQueue: z } = (0, P.GV)(A.QV.qy),
            Z = h.useCallback(() => {
              W.iA.logged_in
                ? z()
                : (0, M.pg)(
                    (0, e.jsx)(_.KG, {
                      onOK: () => {
                        window.location.href = `${W.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                      },
                      strOKButtonText: (0, l.we)(
                        "#DiscoveryQueue_Error_Login_Title",
                      ),
                      strDescription: (0, l.we)("#DiscoveryQueue_Error_Login"),
                      strTitle: (0, l.we)("#DiscoveryQueue_Error_Login_Title"),
                    }),
                    window,
                  );
            }, [z]);
          return F
            ? (0, e.jsx)(K.Z, {
                children: (0, e.jsx)("a", {
                  onClick: Z,
                  className: "experiment-button",
                  children: (0, l.we)("#DiscoveryQueue_OpenWizard"),
                }),
              })
            : (0, e.jsx)("div", {
                className: "experiment-button-placeholder",
                children: "\xA0",
              });
        }
      },
      83581: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          AppCarouselTrailerCtn: "_2O2oGi6d4q3fJxsg-26cll",
          AutoplayCheckbox: "_1sEIT3Bh71g9JRzpjKvlIo",
          AppVideo: "_2YG6k4pQ2z4jwoRGrdPhbv",
          Microtrailer: "_2HvnbxzEFWWLlYvdP-FWFN",
          PlayFullTrailer: "_1yr-ANb75ms4sc2qaXuCYM",
          "microtrailer-trans-out": "_23fHbTINXOIsUypCFWMSTa",
          PlayMicrotrailer: "_2X47xgnvmgTDpH69RCBkZ7",
          "microtrailer-trans-in": "_25FSUgigrr0CQ9eVFmOuId",
          NoTrailer: "c42wWAo7Lp6uTn6LjeaO1",
          Trailer: "_27Hm281QxYE24wJqONIP0p",
          "trailer-trans-in": "_1nwjQUxY2CTD6YmThf7xQG",
          AppMainCap: "_1S2WeY58fI6yRef-8ArnWh",
          AppMainCapFadeIn: "_3fHap4fl2kZ5StUjb1DwDJ",
          PlayButton: "OsRdwk7Q3-sApCo2CDxtN",
          PlayButtonCapFadeIn: "_2o5mPh-Zx9EWF_H-KforbU",
          AutoplayCheckboxCtn: "_2J3J__8l3sk6LI4mpUfWDT",
          AOWarning: "_2IxWvaCkHcMl0aL8NM8v6T",
          Text: "_1r5F1Fy8uG639opEIjyS5Z",
          "capsule-trans-out": "YvTbl9XD-HkAs9W3pcEgp",
        };
      },
      36054: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          AppVideoCtn: "_3ASFJGw8T9-hDikhxRScDI",
          WishlistBadge: "_2LOILpLspWCbXnRmFuUbwx",
          Active: "-iU7fWthqJgfmhzrdV74K",
          DeckVerifiedLogo: "_2EVzMYr528F1dVAm4e88Sy",
          VideoArea: "_1otwTolVlX9PfKD2myNigb",
          IgnoredCtn: "_35ODHCvm13mJ5gOunwQzs9",
          IgnoredInfo: "_2SriIWC_6CHPZkjggKoxjb",
          IgnoredTitle: "_1D4RHomSRy25j1Qxl-dDPw",
          IgnoredDescription: "_29zcmLd8LJQ2FR33D1_Ph6",
          UndoIgnoreButton: "_1rPGVQftqLzqjH04tebuaT",
          UndoButton: "_1nz7pkRvV4rRrybZrUZu0R",
          Disabled: "_2JvEs3_qRtYncXG7WCALur",
        };
      },
      56649: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          DiscoveryQueueWidgetCtn: "_2H-U0RGd3Y9d6UKdhsGJgZ",
          WidgetText: "-B2PBNVH5puz13sQ8u0Qv",
          WidgetCapsule: "_1Bk7kRLnGpX5NKJgUqayYy",
          CloseButton: "VqFB0E0yCOFJ7UdleH5Nl",
          Y: "_31u523-OYDU23urGjLmZMv",
        };
      },
      15830: (ee) => {
        ee.exports = {
          DiscoveryQueueWidgetCtn: "_3PAP1PfUymQrLEveRsxQxP",
          WidgetHeaderCtn: "_3i8xWeKjrdNgEjml1PQRuq",
          AppCarouselPosition: "_1DaxYFphX9KPH-YWeuNTvO",
          Initialized: "gjxSD08f5aogKCSeys9k5",
          Spinner: "_3QqziF_w5iNtHF8dOkfrD0",
          AppCarouselCtn: "_2qPvUCeD7uiBSn261-Gg25",
          FadeIn: "Qc0gimNJ0GLAPE87EH3Gp",
          AppCapsuleCtn: "_3G65z75zOTQeHrXxszHO4b",
          AppName: "r6OCNSBahfTSSDTqXDVqY",
          LibraryImage: "_1QVat7gXKVzPNiStElIJCt",
          CapsuleColumn: "_3OUOaqR0a3uYqsWOZbfSSh",
        };
      },
      56420: (ee) => {
        ee.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
          Z2: "VmQTOrz5MPOWte5C9K7YS",
          Z3: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      18828: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
          threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
          blocked: "VTxPkslK1CSpKNFMgKg7d",
          richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
          playerName: "nOdcT-MoOaXGePXLyPe0H",
          playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
          EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
          DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
          playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
          richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
          gameName: "_1cB0qtF0paHWWyj1XNcnbG",
          dropPadding: "_3tEPYJ6xjX0d6akU-hhrs4",
          NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
          twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
          DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
          partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
          hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
          compactView: "_3bbRZyUiK-bfc5Qov6xukI",
          noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
          gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
          PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
        };
      },
      70342: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
        };
      },
      43047: (ee) => {
        ee.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      40594: (ee) => {
        ee.exports = {
          ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
          AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
          loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
          Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
          Circular: "_3wMS41OoTPnZyEddTVwzy_",
          Full: "_3t_UEZDy1QxxcYfn3TTvD2",
        };
      },
      71477: (ee) => {
        ee.exports = {
          WidgetHeaderCtn: "_2-tz2hqtOXPPtMnVPHNSdx",
          LaunchAction: "xD8XE561L4OLHkp9K3UIV",
          DiscoveryQueueWidget: "aKZCakHw7WVaUN3j36Nh",
          WidgetHeaderText: "_1mKVZY4-l46AZiZvctCEmx",
          WidgetHeaderSubText: "O2jA-VCFl9bmblncfI4k2",
          LoginButton: "_3u1HeR7JRPiiuKIT78j2Cc",
          Placeholder: "_3qFL88r7vVtG3lg2enLhfi",
          SaleTopSection: "_3Xj9phC0S8zL6qrQ5T1sUJ",
          StickerArrangement: "_1hvmhK7qgdrqLwH_Duphah",
          SaleSticker: "_19psoPSyaHlg76v5Cd9H-n",
          SaleTextCtn: "cwQNGPoPuJS67rykUgZdU",
          BoldText: "_1LS-qczKUuqKzg56ll_C0A",
        };
      },
      57834: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          DiscoveryQueueCarouselCtn: "_2u0N2gUX44_tavazJJb_QP",
          TextLink: "_3ZdNCUMz9KZMkwPZlO8zmi",
          DiscoveryQueueApp: "_1xJSMubUWBlahkrtb4IFTc",
          DiscoveryQueueWrapper: "_2BYaxM7mBfooJbZYzhEv4D",
          revealDiscoveryQueueWrapper: "brzQbY6Z8TH8Ww-rFL4E0",
          DiscoveryQueueItemsCtn: "_3q6eNRFBrPSFSGEn8uRFZ3",
          DiscoveryQueueItemPositioner: "_16tdfw6vxg9Hdy0KfCutXn",
          Selected: "_2aeAhZ2Y99YIR2-zD6l27U",
          InRange: "_1XPIeNMxObbkYolTEj0Bwh",
          Dragging: "_3fTO0TgoWEAo4zdaHOCTh0",
          FarLeft: "vkLp1smRjDnZg7XQcMqjk",
          Left: "_3gBoKuhIxMBjlxU7FZ2L3a",
          Current: "_2CgJDPFhM9rbjsq9n0c9I_",
          Right: "_1AGP_wKeaN9phzlq_2K9H7",
          FarRight: "hBGRzfrW2Obp7QpzYCi2L",
          AppDetailsCtn: "_2Zwt2P5vy4W9Ha5ePOv54U",
          AppDetailsCtnTop: "_3TkhdqIi1gqwMzexQDS8Ab",
          CapsuleLink: "_2m8YEKXvKa2bcFNjqXdJu7",
          AppLibraryHero: "_uGgOnTsOzgIVK9BHMTUV",
          AppHeader: "Vwr5XZLr5tOEaVLYbj1mZ",
          RightColumn: "VVNgZo2T-rubrTvNMPSoh",
          AppName: "_3lk6f1XI_loCIhBevOddHP",
          AppTagsCtn: "xXcRKEuacDG8kYtDXu6OH",
          TagEntry: "xmqBa8sZa4Xhgktfr43Uh",
          AppReviews: "_2alBMAZOarIyf-vIiNazRg",
          RelevantCtn: "_3sfhS6SCV1q8dTaRIpWCHB",
          RelevantColumn: "Ne2AhbYmPfTxwJVmj1FZP",
          RelevantItem: "_2OUHZGUrr0FugrwCwIm6dF",
          RelevantCheck: "_1BOH1zFTOxtlgKkeEANpYO",
          IgnoreLink: "fir3UBZYT6EAmdYWAdr3a",
          AppActionButtonsCtn: "_2IQHDn5ZvlB1ThhSb_lhX",
          AppActionJustButtonsCtn: "duAyQ1rUX78lMmmZY1V0n",
          QueueButton: "_22Bfzcdg2l-RQEn-qKSIol",
          ButtonsRowWrap: "_1plvU4aLu4hq22gYwThZnH",
          IgnoredCtn: "_3G1MYmgXVcweTUK5jtU_Ft",
          Active: "_2D_EZlAEopCvqU0_w21FdH",
          IgnoredInfo: "_2j-elz350f4ndxI9CBUbyW",
          IgnoredTitle: "_18alvCecAAMAsyM_6zCY2T",
          IgnoredDescription: "CmI-HxKbBH8PjoSk7IVPC",
          UndoIgnoreButton: "_2E3PfDDIiiKoy4iDQV7Ewl",
          AppDesc: "_3-6CubUJWYN2tbKvwS2N9n",
          YGlyph: "_3ncywKLa2mgKgbsj-g2wJi",
          SummaryContentCtn: "Tvu6zAI3kbdYjGQGbypuQ",
          SummaryTitle: "_2o4_HDWD3bRMkoJT4RfiMv",
          YourStats: "_3-iD7yn2dCmqp9AL5xuwLX",
          SummaryGrid: "_3vRcTzxpTSFxcxVm9BKrlQ",
          GridItem: "_2w3xjuBZIgZJPO9HAa5Hb0",
          GridTitle: "_7HEa84jCz03LkGTjIZa7c",
          GridNumber: "jM11lU9OD9-2Hlu3Akwtj",
          GridSubTitle: "_2n8wa2hMCjKHhvMsS0v3_k",
          SummaryActionButtonsCtn: "nqmYD9sGBA3BEmNjp6qYF",
          TopBarCtn: "_1ewUwegRciiNydBWSQRCX-",
          LearnMoreLink: "CiFk6OuYAQSbv_DGXoBSX",
          ControlsCtn: "_2Gy72TJcKqY9gqP5-TAmSk",
          Disabled: "_2xsPifNspMLcbkoUSA5Ujl",
          Primary: "_3o2jhEGrGiVndMjUbNpOw-",
          Launch: "_3SOZx68qVakLwDvAYBOPMG",
          Wide: "_1tFfTbcTKjlfSGsMOJvdf_",
          QueueNavArrow: "_2sZ7DAljYV5Xd-nbhtlmyM",
          Enable: "_2CTzbHZ-C-FfnXEtLZPv9q",
          RightArrow: "_30_0NBq3DkV-qL7Eyqva-t",
          LeftArrow: "_36Cln2gIYtwR3sPPcOi9bT",
          ReleventSimilarAppsCtn: "_2akaWEht7jMXdxPJFmf3WN",
          RecommendingCuratorsCtn: "_RZQ6JnUY6lQGmRcgHFNA",
          AppRelevanceCtn: "_367qBdIRU4xAYHt5cqhPVa",
          WhyRelevant: "_29ReJunMtLbnxbnixF6VdE",
          SimilarAppCtn: "_2fNR47HGs7tI_v1HC2-N1h",
          SimilarAppImg: "_1q8mEyt8Rp7JweHMRGm6hq",
          SimilarAppText: "YWLoeGgBPsjUtXywol3_O",
          FriendAvatarsCtn: "_2hxko0SvUWCZ30U4JH4TNn",
          RelevantTextBold: "_1Z_ek2XNBZbkZqyR-QSwlo",
          AppDescription: "_2mksBeuafFs1CMp0t5Z9gX",
          TradingCardCtn: "_13ZcoCKc8H09LSHp4C197Z",
          TradingCardImage: "_2ZB_x5Jq7JGDapJVPsCZTo",
          Bold: "_2P6WAN13LnRVRmRb-VNu_L",
          FriendBlockCtn: "_34aoCP80lDRK3cq6_V0YQ_",
          PersonaStatus: "_1AYnL3n86EbaOCKf18KKV8",
          ProgressHidden: "UdYhfFDOguxduU7c3PVpv",
          DiscoveryQueueName: "D7yeVCEwaFr6qNo_bPGCr",
          SaleRewardsCtn: "u42zSEWdGrvBDimhV4QNI",
          RewardStatusCtn: "_2C1i6xEuF431h_KHPB53zS",
          SaleRewardAppTitle: "_1-pK3SWEOk30eo-q0EKyH7",
        };
      },
      25599: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          ProgressCtn: "_3ed1Al-hFnjq4HQeLo6cIT",
          ProgressDot: "_2R187sMx7MTX5XQ2KN3Xnx",
          ProgressDotActive: "_3z2pS3DFn3MEl5ZPw6lsa9",
          ProgressDotSelected: "_1qJVCZsv51RtfBGao-PV8V",
          ProgressDotClickable: "jKfeFH4S6YhaeZ7RCZ8BN",
        };
      },
    },
  ]);
})();
