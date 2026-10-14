/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [89672],
    {
      15860: (R, J, e) => {
        "use strict";
        e.d(J, { L: () => z, c: () => r });
        var t = e(27386),
          g = e(76617),
          v = e(58632),
          d = e.n(v);
        function r(V, X) {
          return new (d())(
            async (N) => {
              const C = [...N],
                D = await t.xtC.GetPlayerLinkDetails(V, { steamids: C }),
                O = new Map();
              return (
                D.Body()
                  .accounts()
                  .forEach((w) => {
                    const F = w.toObject();
                    O.set(F.public_data.steamid, F);
                  }),
                C.map((w) => O.get(w) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...X },
          );
        }
        function z(V) {
          return (0, g.V)("PlayerLinkDetails", () => r(V));
        }
      },
      9682: (R, J, e) => {
        "use strict";
        e.d(J, { KV: () => S, mJ: () => g, Bm: () => t, YK: () => ve });
        var t = {};
        e.r(t), e.d(t, { Y: () => X });
        var g = {};
        e.r(g), e.d(g, { r5: () => N, _Q: () => C, FB: () => D });
        var v = e(80613),
          d = e.n(v),
          r = e(75245),
          z = e(35038);
        const V = 0,
          X = 1,
          N = 0,
          C = 1,
          D = 2;
        function O(oe) {
          return "unknown EUserReviewFlaggedByDeveloperType ( " + oe + " )";
        }
        function w(oe) {
          return "unknown EUserReviewQuality ( " + oe + " )";
        }
        function F(oe) {
          return "unknown EUserReviewVoteTag ( " + oe + " )";
        }
        function Y(oe) {
          return "unknown EUserReviewAuditAction ( " + oe + " )";
        }
        function H(oe) {
          return "unknown EUserReviewsAppReviewsFilter ( " + oe + " )";
        }
        function q(oe) {
          return "unknown EUserReviewsReviewType ( " + oe + " )";
        }
        function ne(oe) {
          return "unknown EUserReviewsPurchaseType ( " + oe + " )";
        }
        function I(oe) {
          return "unknown EReviewTagType ( " + oe + " )";
        }
        function W(oe) {
          return "unknown EUserReviewBombPeriodType ( " + oe + " )";
        }
        class i extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              i.prototype.recommendationid || r.Sg(i.M()),
              v.Message.initialize(this, n, 0, -1, void 0, null);
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
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = r.w0(i.M())), i.sm_mbf;
          }
          toObject(n = !1) {
            return i.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(i.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(i.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new i();
            return i.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(i.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return i.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(i.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Update_Request";
          }
        }
        class f extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(), v.Message.initialize(this, n, 0, -1, void 0, null);
          }
          toObject(n = !1) {
            return f.toObject(n, this);
          }
          static toObject(n, m) {
            return n ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(n) {
            return new f();
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new f();
            return f.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return n;
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return f.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {}
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Update_Response";
          }
        }
        class u extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              u.prototype.saved_hardware_id || r.Sg(u.M()),
              v.Message.initialize(this, n, 0, -1, void 0, null);
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
          static toObject(n, m) {
            return r.BT(u.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(u.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new u();
            return u.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(u.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return u.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(u.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_BackfillSavedHardware_Request";
          }
        }
        class y extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              y.prototype.num_backfilled || r.Sg(y.M()),
              v.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    num_backfilled: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = r.w0(y.M())), y.sm_mbf;
          }
          toObject(n = !1) {
            return y.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(y.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(y.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new y();
            return y.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(y.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return y.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(y.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_BackfillSavedHardware_Response";
          }
        }
        class o extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              o.prototype.reaction_type || r.Sg(o.M()),
              v.Message.initialize(this, n, 0, -1, void 0, null);
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
          static toObject(n, m) {
            return r.BT(o.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(o.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new o();
            return o.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(o.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return o.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(o.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_LoyaltyReaction";
          }
        }
        class l extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              l.prototype.id || r.Sg(l.M()),
              v.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    id: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    ranges: { n: 2, c: s, r: !0, q: !0 },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = r.w0(l.M())), l.sm_mbf;
          }
          toObject(n = !1) {
            return l.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(l.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(l.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new l();
            return l.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(l.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return l.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(l.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_Tag";
          }
        }
        class s extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              s.prototype.start || r.Sg(s.M()),
              v.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    start: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    end: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
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
          static toObject(n, m) {
            return r.BT(s.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(s.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new s();
            return s.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(s.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return s.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(s.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_Tag_Range";
          }
        }
        class a extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              a.prototype.recommendationid || r.Sg(a.M()),
              v.Message.initialize(this, n, 0, -1, [27, 40, 54], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
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
                    tags_with_ranges: { n: 54, c: l, r: !0, q: !0 },
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
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = r.w0(a.M())), a.sm_mbf;
          }
          toObject(n = !1) {
            return a.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(a.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(a.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new a();
            return a.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(a.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return a.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(a.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "RecommendationDetails";
          }
        }
        class S extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              S.prototype.appid || r.Sg(S.M()),
              v.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(n = !1) {
            return S.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(S.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(S.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new S();
            return S.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(S.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return S.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(S.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Request";
          }
        }
        class P extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              P.prototype.accountids_recommended || r.Sg(P.M()),
              v.Message.initialize(this, n, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
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
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = r.w0(P.M())), P.sm_mbf;
          }
          toObject(n = !1) {
            return P.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(P.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(P.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new P();
            return P.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(P.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return P.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(P.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Response";
          }
        }
        class te extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              te.prototype.requests || r.Sg(te.M()),
              v.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: { requests: { n: 1, c: Q, r: !0, q: !0 } },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = r.w0(te.M())), te.sm_mbf;
          }
          toObject(n = !1) {
            return te.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(te.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(te.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new te();
            return te.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(te.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return te.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(te.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Request";
          }
        }
        class Q extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Q.prototype.steamid || r.Sg(Q.M()),
              v.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(n = !1) {
            return Q.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(Q.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(Q.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new Q();
            return Q.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(Q.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(Q.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
          }
        }
        class se extends v.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              se.prototype.recommendations || r.Sg(se.M()),
              v.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: { recommendations: { n: 1, c: a, r: !0, q: !0 } },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = r.w0(se.M())), se.sm_mbf;
          }
          toObject(n = !1) {
            return se.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(se.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(se.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new se();
            return se.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(se.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return se.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(se.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Response";
          }
        }
        var ve;
        ((oe) => {
          function n(ae, _, A) {
            return ae.SendMsg("UserReviews.Update#1", (0, z.I8)(i, _, A), f, {
              ePrivilege: 3,
            });
          }
          oe.Update = n;
          function m(ae, _, A) {
            return ae.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, z.I8)(u, _, A),
              y,
              { ePrivilege: 1 },
            );
          }
          oe.BackfillSavedHardware = m;
          function k(ae, _, A) {
            return ae.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, z.I8)(S, _, A),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          oe.GetFriendsRecommendedApp = k;
          function $e(ae, _, A) {
            return ae.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, z.I8)(te, _, A),
              se,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          oe.GetIndividualRecommendations = $e;
        })(ve || (ve = {}));
      },
      94253: (R, J, e) => {
        "use strict";
        e.d(J, {
          t5: () => ve,
          os: () => _,
          Qt: () => k,
          CC: () => se,
          Oz: () => Q,
          lu: () => oe,
        });
        var t = e(23386),
          g = e(72609),
          v = e(68312),
          d = e(75233),
          r = e(80902),
          z = e(51614),
          V = e(90626),
          X = e(45806),
          N = e(33828),
          C = e(48491),
          D = e(67705),
          O = e(72604),
          w = e(31224),
          F = e(7112);
        const Y = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function H(A, T) {
          const b = await F.Qm.CanClaimItem(A, { language: T });
          if (b.GetEResult() != O.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + b.GetEResult(),
            );
          const G = b.Body().toObject(),
            ue = G.reward_item?.defid ? G.reward_item : void 0;
          return {
            bCanClaimNewItem: !!G.can_claim,
            bAlreadyClaimedCurrentItem: !!ue,
            appid: ue?.appid,
            community_item_type: ue?.community_item_type,
            community_item_class: ue?.community_item_class,
            rtNextClaimTime:
              (G.next_claim_time ?? 0) > 0 ? G.next_claim_time : void 0,
          };
        }
        async function q(A, T) {
          const b = await F.Qm.ClaimItem(A, { language: T });
          if (b.GetEResult() == O.Ze) return H(A, T);
          if (b.GetEResult() != O.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + b.GetEResult(),
            );
          const G = b.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: G?.appid,
            community_item_type: G?.community_item_type,
            community_item_class: G?.community_item_class,
            rtNextClaimTime:
              (b.Body().next_claim_time() ?? 0) > 0
                ? b.Body().next_claim_time()
                : void 0,
          };
        }
        async function ne(A, T) {
          const b = await w.uy.ActivateProfileModifierItem(A, {
            communityitemid: T.communityitemid,
            appid: T.appid,
            activate: !0,
          });
          if (b.GetEResult() != O.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + b.GetEResult(),
            );
          return b.GetEResult();
        }
        async function I(A, T, b, G) {
          return (
            await F.Qm.GetCurrentDefinition(A, {
              sale_def_type: T,
              language: b,
              include_community_item_def: G,
            })
          )
            .Body()
            .toObject();
        }
        async function W(A, T, b, G) {
          return (
            await F.Qm.GetClaimedSaleRewards(A, {
              sale_def_type: T,
              language: b,
              include_community_item_def: G,
            })
          )
            .Body()
            .toObject();
        }
        let i;
        function f() {
          const A = (0, X.q)();
          if (A) return A.GetServiceTransport();
          if (!i) {
            const T = (0, D.Fd)("loyalty_webapi_token", "application_config");
            i = T ? new C.D(g.TS.WEBAPI_BASE_URL, T) : (0, N.P)();
          }
          return i.GetServiceTransport();
        }
        async function u(A) {
          return H(f(), A);
        }
        async function y(A) {
          return q(f(), A);
        }
        async function o(A) {
          return ne(f(), A);
        }
        const l = 300 * 1e3;
        let s = !1,
          a = null;
        const S = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: t.Ed,
        };
        function P(A) {
          return ["SaleItemCanClaim", A];
        }
        function te(A) {
          return {
            queryKey: P(A),
            queryFn: () => u(A),
            enabled: !s,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function Q() {
          const A = g.TS.LANGUAGE,
            T = (0, d.jE)(),
            { data: b, isLoading: G } = (0, r.I)(te(A)),
            ue = b?.rtNextClaimTime;
          return (
            (0, V.useEffect)(() => {
              let ye = 0;
              if (ue) {
                const me = () => {
                  const De = ue * 1e3 - Date.now();
                  if (De <= 0) {
                    T.invalidateQueries({ queryKey: P(A) });
                    return;
                  }
                  ye = window.setTimeout(me, De > l ? De / 2 : De);
                };
                me();
              }
              return () => window.clearTimeout(ye);
            }, [ue, A, T]),
            { ...(b ?? Y), bLoading: G }
          );
        }
        function se() {
          const A = (0, d.jE)(),
            { mutateAsync: T } = (0, z.n)({
              mutationFn: () => {
                if (a) {
                  const G = a;
                  return (a = null), Promise.resolve(G);
                }
                return s
                  ? Promise.resolve(A.getQueryData(P(g.TS.LANGUAGE)) ?? Y)
                  : y(g.TS.LANGUAGE);
              },
              onSuccess: (G) => A.setQueryData(P(g.TS.LANGUAGE), G),
            });
          return { fnClaimItem: (0, V.useCallback)(() => T(), [T]) };
        }
        function ve() {
          return (0, z.n)({ mutationFn: (A) => o(A) });
        }
        function oe() {
          const A = (0, d.jE)();
          return {
            fnSetClaimState: (0, V.useCallback)(
              (b) => {
                (s = !0),
                  (a = b.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...S,
                      }
                    : null),
                  A.setQueryData(P(g.TS.LANGUAGE), b);
              },
              [A],
            ),
          };
        }
        function n(A, T, b) {
          return ["SaleRewardsGetDefinition", A, T, b];
        }
        function m(A, T, b, G) {
          return {
            queryKey: n(T, b, G),
            queryFn: () => I(A, T, b, G),
            staleTime: 1 / 0,
          };
        }
        function k(A, T, b) {
          const G = (0, v.KV)();
          return (0, r.I)(m(G, A, T, b));
        }
        function $e(A, T, b, G) {
          return ["GetClaimedSaleRewards", A, T, !!b, G];
        }
        function ae(A, T, b, G, ue) {
          return {
            queryKey: $e(T, b, G, ue),
            queryFn: () => W(A, T, b, G),
            staleTime: 1 / 0,
          };
        }
        function _(A, T, b, G) {
          const ue = (0, v.KV)();
          return (0, r.I)(ae(ue, A, T, b, G));
        }
      },
      63639: (R, J, e) => {
        "use strict";
        e.d(J, { S: () => C });
        var t = e(7850),
          g = e(12997),
          v = e(90626),
          d = e(52438);
        const r = {
            name: "trailerPrefs",
            options: { path: "/", secure: !0, maxAge: 720 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          z = { flVolume: 0.8, bMuted: !0 };
        function V(D) {
          return D.flVolume === z.flVolume && D.bMuted === z.bMuted;
        }
        function X() {
          try {
            const D = (0, d.j_)(r);
            if (!D) return z;
            const O = JSON.parse(D);
            return {
              flVolume: typeof O.flVolume == "number" ? O.flVolume : z.flVolume,
              bMuted: typeof O.bMuted == "boolean" ? O.bMuted : z.bMuted,
            };
          } catch {
            return z;
          }
        }
        function N(D) {
          V(D) || Object.keys(D).length == 0
            ? (0, d.Y1)(r)
            : (0, d.eV)(r, JSON.stringify(D));
        }
        function C(D) {
          let { children: O } = D;
          const [w, F] = (0, v.useState)(() => X());
          return (
            (0, v.useEffect)(() => {
              N(w);
            }, [w]),
            (0, t.jsx)(g.v, {
              playerVolume: w.flVolume,
              setPlayerVolume: (Y) => F((H) => ({ ...H, flVolume: Y })),
              audioMuted: w.bMuted,
              setAudioMuted: (Y) => F((H) => ({ ...H, bMuted: Y })),
              children: O,
            })
          );
        }
      },
      72408: (R, J, e) => {
        "use strict";
        e.d(J, { y3: () => St, W3: () => Dt, TK: () => mt, u4: () => ft });
        var t = e(7850),
          g = e(19298),
          v = e(29522),
          d = e(40358),
          r = e(72865),
          z = e(10134),
          V = e(62292),
          X = e(80902),
          N = e(68312),
          C = e(72609),
          D = e(20125),
          O = e(98609);
        async function w(x, M) {
          const L = (0, D.Am)(O.TS.STORE_BASE_URL, M, O.iA.country_code);
          return (await (await fetch(L)).json()).rgRecommendedTags || [];
        }
        function F() {
          const x = (0, N.KV)(),
            M = C.iA.accountid;
          return (0, X.I)(Y(x, M));
        }
        function Y(x, M) {
          return {
            queryKey: H(M),
            queryFn: async () => (M ? await w(x, M) : []),
            staleTime: 600 * 1e3,
          };
        }
        function H(x) {
          return ["RecommendedTag", x ?? 0];
        }
        var q = e(54528),
          ne = e(96362),
          I = e(90626),
          W = e(21690),
          i = e(36707),
          f = e(18210),
          u = e(3166),
          y = e(74732),
          o = e(31377),
          l = e(36054),
          s = e.n(l),
          a = e(63639),
          S = e(21721),
          P = e(25046),
          te = e(87249),
          Q = e(50573),
          se = e(41032),
          ve = e(47045),
          oe = e(16412),
          n = e(36118),
          m = e(97996),
          k = e(57589),
          $e = e(83581),
          ae = e.n($e);
        function _(x, M) {
          I.useEffect(() => {
            if (!M || !M.onended || !x) return;
            let L = M.onended,
              ie = setTimeout(() => {
                L();
              }, 6 * 1e3);
            return () => clearTimeout(ie);
          }, [x, M]);
        }
        function A(x, M) {
          I.useEffect(() => {
            if (!x) return;
            const L = () => M(!0),
              Z = () => M(!1);
            return (
              x.addEventListener("play", L),
              x.addEventListener("pause", Z),
              () => {
                x.removeEventListener("play", L),
                  x.removeEventListener("pause", Z);
              }
            );
          }, [M, x]);
        }
        function T(x, M, L, Z) {
          return I.useCallback(() => {
            x == Q.Tw
              ? M(!0)
              : x == Q.g && L
                ? L.paused
                  ? L.play()
                  : L.pause()
                : x == Q.Jh && Z && (Z.IsPaused() ? Z.Play() : Z.Pause());
          }, [x, L, Z, M]);
        }
        function b(x, M, L, Z, ie, de) {
          const [fe, Ee] = I.useState(!1);
          I.useEffect(() => {
            x && !fe
              ? M == Q.g && L && Z
                ? (L.pause(), Ee(!0))
                : M == Q.Jh && ie && de && (ie.Pause(), Ee(!0))
              : !x &&
                fe &&
                (M == Q.g && L ? L.play() : M == Q.Jh && ie && ie.Play(),
                Ee(!1));
          }, [M, x, fe, Z, de, L, ie]);
        }
        var G = e(64271),
          ue = e(39905);
        const ye = new k.wd("TrailerAppVideo"),
          me = "bGameHighlightAutoplayDisabled";
        function De(x) {
          const {
              id: M,
              bCurrentlyActive: L,
              autoPlayCookieName: Z,
              trailerBaseID: ie,
              showScreenshotInsteadOfMainCap: de,
              autoplayCheckboxPosition: fe,
              refTogglePlayPause: Ee,
              bShowAOAutoPlayWarning: Me,
              ...Ke
            } = x,
            [Qe, ke] = I.useState(!1),
            [Oe, Ne] = I.useState(!1),
            Ge = (0, se.$9)(),
            He = (0, P.BF)(M, ie, !0, Me),
            { data: Ze } = (0, d.J$)(M),
            { data: tt } = (0, d.lv)(M),
            Be = (0, S.DT)(M),
            Je = (Me ?? !0) && He && !He.all_ages && Ge == "masked",
            Re = (0, se.AS)(),
            [qe, st] = I.useState(!1),
            [et, pt] = I.useState(Q.Tw),
            [Ye, gt] = (0, I.useState)(null),
            [we, yt] = (0, I.useState)(null),
            { bCookieLoaded: ut } = Ve(Z, L, ke),
            rt = ut;
          I.useEffect(() => {
            L && rt && Qe && !Je && Ne(!0);
          }, [Qe, rt, L, Je]),
            I.useEffect(() => {
              Je && Oe && Qe && Re();
            }, [Oe, Je, Qe, Re]);
          const ht = (p) => {
              (0, m.lc)(Z ?? me, String(!p), 365 * 10), ke(p), Ne(p);
            },
            at = T(et, Ne, we, Ye);
          I.useEffect(() => {
            Ee && (Ee.current = at);
          }, [at, Ee]);
          const B =
            de && Be && Be.length > 0
              ? (0, S.bu)(Be[0], "600x338")
              : tt
                ? (0, S.b0)(tt, "main_capsule")
                : void 0;
          return (0, t.jsxs)(g.Z, {
            className: ae().AppCarouselTrailerCtn,
            onMouseEnter: () => st(!0),
            onMouseLeave: () => st(!1),
            children: [
              (0, t.jsx)("button", {
                onClick: at,
                "aria-label": ue.Z.Localize("#SaleTrailerCarousel_PlayPause"),
                children: (0, t.jsx)("img", {
                  className: (0, i.A)(
                    ae().AppMainCap,
                    et != Q.Tw && ae().Hidden,
                  ),
                  src: B,
                  alt: "",
                }),
              }),
              Ze &&
                (0, t.jsx)(ot, {
                  appID: Ze.appid,
                  bAutoplayVideos: Qe,
                  autoplayCheckboxPosition: fe,
                  fnSetAutoPlayVideos: ht,
                }),
              (0, t.jsx)(Q.hj, {
                name: Ze?.name ?? "",
                trailerCategory: He?.trailer_category,
                trailerDisplay: et,
                mouseOver: qe,
              }),
              (0, t.jsx)(nt, {
                eTrailerDisplay: et,
                setTrailerDisplay: pt,
                featuredTrailer: He,
                fnSetMainTrailer: gt,
                fnSetMicroTrailer: yt,
                loadedAndActive: rt && L,
                setVideoShouldStart: Ne,
                bMouseOverVideo: qe,
                id: M,
                fnTogglePlayPause: at,
                bAutoplayVideos: Qe,
                bVideoShouldStart: Oe,
                ...Ke,
              }),
              Je &&
                Qe &&
                (0, t.jsxs)("div", {
                  className: ae().AOWarning,
                  children: [
                    (0, t.jsx)("div", {
                      className: ae().Text,
                      children: (0, f.we)("#StoreTrailer_AOWarning_1"),
                    }),
                    (0, t.jsx)("div", {
                      className: ae().Text,
                      children: (0, f.we)("#StoreTrailer_AOWarning_2"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Fe(x, M) {
          const [L, Z] = I.useState(!1);
          return (
            I.useEffect(() => (x && (M(), Z(!0)), () => Z(!1)), [x, M]),
            { bCookieLoaded: L }
          );
        }
        function Ve(x, M, L) {
          const Z = I.useCallback(() => {
            const ie = (0, m.VY)(x ?? me),
              de = !!(ie && ie.toLowerCase() === "true");
            L(!de);
          }, [x, L]);
          return Fe(M, Z);
        }
        function nt(x) {
          const {
              id: M,
              featuredTrailer: L,
              bSkipMicroTrailer: Z,
              nFadeRatio: ie,
              fnPlayPause: de,
              bRequestPause: fe,
              fnComplete: Ee,
              eTrailerDisplay: Me,
              setTrailerDisplay: Ke,
              fnSetMainTrailer: Qe,
              fnSetMicroTrailer: ke,
              loadedAndActive: Oe,
              setVideoShouldStart: Ne,
              fnTogglePlayPause: Ge,
              bAutoplayVideos: He,
              bVideoShouldStart: Ze,
            } = x,
            [tt, Be] = I.useState(!1),
            [Je, Re] = I.useState(!1),
            [qe, st] = I.useState(!1),
            [et, pt] = I.useState(!1),
            [Ye, gt] = (0, I.useState)(null),
            [we, yt] = (0, I.useState)(null),
            { data: ut } = (0, d.J$)(M),
            rt = !!L;
          I.useEffect(() => {
            let B = !1;
            Oe &&
              Je &&
              rt &&
              (B = Me === Q.Tw || (Me === Q.g && !qe) || (Me === Q.Jh && !et)),
              Be(B),
              de?.(He && B);
          }, [de, Me, et, qe, Oe, He, Je, rt]),
            A(we, st),
            I.useEffect(() => {
              Ze ||
                (Ke(Q.Tw),
                Be(!1),
                Re(!1),
                we && (we.pause(), (we.currentTime = 0)),
                Ye && (Ye.Pause(), Ye.SeekToStart()));
            }, [Ze, Ye, we, Ke]);
          const ht = I.useRef(!1);
          I.useEffect(() => {
            if (Oe && Me === Q.Tw)
              if ((Re(!0), Ze)) {
                if (Ye) {
                  ye.Debug("Starting microtrailer"), Ke(Q.g);
                  const B = () => it(ht, Ke, Ye);
                  Z || !we
                    ? B()
                    : (st(!0),
                      (we.onended = B),
                      dt(we, "microtrailer", () => st(!1)));
                }
              } else ye.Debug("Showing image");
          }, [Oe, Me, Z, Ze, Ee, Ke, Ye, we]),
            _(qe, we),
            I.useEffect(() => {
              Oe || Ne(!1);
            }, [Oe, Ne]),
            b(!!fe, Me, we, qe, Ye, et);
          const at = (0, I.useCallback)((B) => {
            ke(B), yt(B);
          }, []);
          return !ut || !ut.visible || !L
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  tt &&
                    (0, t.jsx)(g.Z, {
                      focusable: !0,
                      onClick: Ge,
                      className: ae().PlayButton,
                      children: (0, t.jsx)(n.IOc, {}),
                    }),
                  L.microtrailer &&
                    (0, t.jsx)("video", {
                      className: Ue(!0, Me),
                      ref: at,
                      preload: "auto",
                      playsInline: !0,
                      muted: !0,
                      onClick: Ge,
                      children: (0, t.jsx)(te.Ck, { trailer: L }),
                    }),
                  (0, t.jsx)(c, {
                    trailer: L,
                    onRefChange: (B) => {
                      gt(B), Qe(B);
                    },
                    eTrailerDisplay: Me,
                    fadeRatio: ie,
                    onPlayPauseChange: pt,
                    onPlaybackEnd: Ee,
                  }),
                ],
              });
        }
        function c(x) {
          let {
            trailer: M,
            eTrailerDisplay: L,
            fadeRatio: Z,
            onPlayPauseChange: ie,
            onPlaybackEnd: de,
            onRefChange: fe,
          } = x;
          const [Ee, Me] = (0, I.useState)(null);
          (0, I.useEffect)(() => {
            if (Z !== void 0 && Ee) {
              let Ge = Ee.GetVolume() * Z;
              Ee.SetVolume(Ge, !0);
            }
          }, [Z, Ee]);
          let Ke = L != Q.Jh,
            Qe = Ue(!1, L);
          const ke = (0, I.useMemo)(() => (0, P.hg)(M), [M]),
            Oe = (0, I.useCallback)((Ge) => {
              Me(Ge), fe(Ge);
            }, []),
            Ne = (0, I.useCallback)(() => {
              ie(!0);
            }, [ie]);
          return (0, t.jsx)(a.S, {
            children: (0, t.jsx)("div", {
              className: Qe,
              children: (0, t.jsx)(G.P, {
                ref: Oe,
                dashManifests: ke.rgDashTrailers,
                hlsManifest: ke.rgHlsTrailers[0],
                captionManifest: (0, P.Wv)(M),
                screenshot: "",
                altText: M.trailer_name,
                forcePause: Ke,
                muteWhenAutoplayBlocked: !0,
                onPlaybackEnd: de,
                onPlaybackStart: Ne,
                onPlayPauseChange: ie,
              }),
            }),
          });
        }
        function it(x, M, L) {
          x.current ||
            ((x.current = !0),
            ye.Debug("Starting main trailer"),
            M(Q.Jh),
            L.Play());
        }
        function dt(x, M, L) {
          x.play().catch((Z) => {
            L(), ye.Warning(`Failed to play ${M}: `, Z);
          });
        }
        function Ue(x, M) {
          return (0, i.A)({
            [ae().AppVideo]: !0,
            [ae().PlayFullTrailer]: M == Q.Jh,
            [ae().PlayMicrotrailer]: M == Q.g,
            [ae().NoTrailer]: M == Q.Tw,
            [ae().Microtrailer]: x,
            [ae().Trailer]: !x,
          });
        }
        function ot(x) {
          const {
              appID: M,
              bAutoplayVideos: L,
              fnSetAutoPlayVideos: Z,
              autoplayCheckboxPosition: ie,
            } = x,
            de = { [ie || "top"]: 0 };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              onClick: (fe) => {
                fe.preventDefault(), fe.stopPropagation();
              },
              className: ae().AutoplayCheckboxCtn,
              children: (0, t.jsx)(
                oe.Yh,
                {
                  controlled: !0,
                  checked: L,
                  className: ae().AutoplayCheckbox,
                  style: de,
                  label: ve.n.Localize("#StoreTrailer_AutoPlayVideos"),
                  onChange: Z,
                },
                M,
              ),
            }),
          });
        }
        function St(x) {
          const {
              appID: M,
              trailerBaseID: L,
              focused: Z,
              skipMicroTrailer: ie,
              autoPlayCookieName: de,
              showAOAutoPlayWarning: fe,
              showScreenshotInsteadOfMainCap: Ee,
              fadeRatio: Me,
              fnPlayPause: Ke,
              refTogglePlayPause: Qe,
              bRequestPause: ke,
              fnComplete: Oe,
            } = x,
            Ne = (0, v.$5)(M),
            { data: Ge } = (0, d.J$)(Ne),
            { data: He } = (0, d.qI)(Ne),
            { bIsIgnored: Ze } = mt(M),
            { bIsWishlisted: tt } = ft(M),
            { bIsWishlisted: Be } = ft(Ge?.related_items?.parent_appid),
            [Je, Re] = (0, W.FD)();
          return (0, t.jsxs)(g.Z, {
            className: (0, i.A)(s().AppVideoCtn, "AppVideoCtn"),
            children: [
              (0, t.jsx)("div", {
                className: (0, i.A)(
                  s().WishlistBadge,
                  (tt || Be) && s().Active,
                ),
                children: (0, f.we)("#Sale_OnWishlist"),
              }),
              Je &&
                (0, t.jsx)(W.Ff, {
                  eDisplay: Re,
                  className: s().DeckVerifiedLogo,
                  storeItemPlatform: He,
                }),
              (0, t.jsxs)("div", {
                className: s().VideoArea,
                children: [
                  (0, t.jsx)(It, { appID: M }),
                  (0, t.jsx)(
                    De,
                    {
                      id: Ne,
                      trailerBaseID: L,
                      bCurrentlyActive: Z && !Ze,
                      autoplayCheckboxPosition: "top",
                      autoPlayCookieName: de,
                      bShowAOAutoPlayWarning: fe,
                      bSkipMicroTrailer: ie,
                      nFadeRatio: Me,
                      showScreenshotInsteadOfMainCap: Ee,
                      fnPlayPause: Ke,
                      refTogglePlayPause: Qe,
                      bRequestPause: ke,
                      fnComplete: Oe,
                    },
                    M,
                  ),
                ],
              }),
            ],
          });
        }
        function mt(x) {
          const M = (0, z.BD)(x),
            L = (0, r.ru)(),
            { mutateAsync: Z } = (0, V.Q)(x, !M, L);
          return { bIsIgnored: M, fnUpdateIgnored: Z };
        }
        function It(x) {
          const { appID: M } = x,
            L = (0, u.Qn)(),
            { bIsIgnored: Z, fnUpdateIgnored: ie } = mt(M);
          return (0, t.jsx)("div", {
            className: (0, i.A)(s().IgnoredCtn, Z && s().Active),
            children: (0, t.jsxs)("div", {
              className: (0, i.A)(s().IgnoredInfo, Z && s().Active),
              children: [
                (0, t.jsx)("div", {
                  className: s().IgnoredTitle,
                  children: (0, f.we)("#SaleTrailerCarousel_Ignored"),
                }),
                (0, t.jsx)("div", {
                  className: s().IgnoredDescription,
                  children: (0, f.we)(
                    "#SaleTrailerCarousel_IgnoredConfirmation",
                  ),
                }),
                (0, t.jsxs)(g.Z, {
                  className: (0, i.A)(s().UndoButton, s().UndoIgnoreButton),
                  onClick: ie,
                  children: [
                    L &&
                      (0, t.jsx)(o.$m, {
                        button: y.g4.X,
                        type: o.wt.Light,
                        size: o.xY.Medium,
                      }),
                    (0, f.we)("#SaleTrailerCarousel_Undo"),
                  ],
                }),
              ],
            }),
          });
        }
        function ft(x) {
          const M = !!(0, q.bB)(x),
            L = (0, r.ru)(),
            { mutate: Z } = (0, ne.s)(x, !M, L);
          return { bIsWishlisted: M, fnUpdateWishlist: Z };
        }
        function Dt(x) {
          const { data: M } = F(),
            L = I.useMemo(
              () =>
                new Map(
                  (M || []).map((de) => de.tagid).map((de, fe) => [de, fe]),
                ),
              [M],
            ),
            Z = I.useMemo(() => new Map(x.map((de, fe) => [de, fe])), [x]);
          return I.useMemo(
            () =>
              x
                .slice()
                .sort((de, fe) =>
                  L.has(de) && !L.has(fe)
                    ? -1
                    : !L.has(de) && L.has(fe)
                      ? 1
                      : L.has(de)
                        ? L.get(de) - (L.get(fe) ?? 0)
                        : Z.get(de) - Z.get(fe),
                ),
            [Z, L, x],
          );
        }
      },
      76617: (R, J, e) => {
        "use strict";
        e.d(J, { V: () => X });
        function t(N) {
          return Object.prototype.toString.call(N) === "[object Object]";
        }
        function g(N) {
          if (!t(N)) return !1;
          const C = N.constructor;
          if (typeof C > "u") return !0;
          const D = C.prototype;
          return !(
            !t(D) || !Object.prototype.hasOwnProperty.call(D, "isPrototypeOf")
          );
        }
        function v(...N) {
          return JSON.stringify(N, (C, D) => {
            if (g(D)) {
              const O = {};
              return (
                Object.keys(D)
                  .sort()
                  .forEach((w) => {
                    O[w] = D[w];
                  }),
                O
              );
            }
            return D;
          });
        }
        var d = e(90626),
          r = e(7850);
        const z = (0, d.createContext)({ instances: {}, factories: {} });
        function V(N) {
          const { name: C, fnFactory: D, children: O } = N,
            w = React.useContext(z),
            [F] = useState({}),
            Y = useMemo(
              () => ({
                instances: F,
                factories: { ...w.factories, [C]: D },
                parent: w,
              }),
              [F, C, w],
            );
          return jsx(z.Provider, { value: Y, children: O });
        }
        function X(N, C) {
          const D = (0, d.useContext)(z),
            O = typeof N == "string" ? N : v(...N);
          let w = D;
          for (; w; ) {
            if (O in w.instances) return w.instances[O];
            if (O in w.factories) break;
            w = w.parent;
          }
          const Y = (w?.factories[O] ?? C)();
          return ((w ?? D).instances[O] = Y), Y;
        }
      },
      90405: (R, J, e) => {
        "use strict";
        e.d(J, { K: () => V, _: () => z });
        var t = e(7850),
          g = e(90626),
          v = e(81944),
          d = e(19298);
        const r = g.createContext({ enabled: !0 });
        function z(X) {
          const { enabled: N, children: C } = X,
            D = g.useMemo(() => ({ enabled: N }), [N]);
          return (0, t.jsx)(r.Provider, { value: D, children: C });
        }
        function V(X) {
          const {
              placeholderWidth: N,
              placeholderHeight: C,
              holdGamepadFocus: D = !1,
              onRender: O,
              style: w,
              mode: F = "JustLoad",
              children: Y,
              ...H
            } = X,
            q = g.useContext(r),
            [ne, I] = g.useState(() => ({
              bRenderChildren: !q.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            W = g.useRef(null),
            i = F === "LoadAndUnload" && q.enabled,
            f = g.useCallback(
              (l) => {
                I((s) => {
                  if (s.bRenderChildren === l || (s.bRenderChildren && !i))
                    return s;
                  let a = 0,
                    S = 0;
                  if (W.current) {
                    const P = W.current.getBoundingClientRect();
                    P && ((a = P.width), (S = P.height));
                  }
                  return (
                    l && O && O(),
                    {
                      bRenderChildren: l,
                      nPrevRenderWidth: a,
                      nPrevRenderHeight: S,
                    }
                  );
                });
              },
              [i, O],
            );
          g.useEffect(() => {
            q.enabled || f(!0);
          }, [q.enabled, f]);
          let u = w;
          if (!ne.bRenderChildren) {
            const l = ne.nPrevRenderWidth || N,
              s = ne.nPrevRenderHeight || C;
            (s !== void 0 || l !== void 0) &&
              (u = { ...w, minHeight: s, minWidth: l });
          }
          const y = i ? "repeated" : "once";
          let o = (0, t.jsx)(v.J, {
            containerRef: W,
            style: u,
            ...H,
            onVisibilityChange: f,
            trigger: y,
            children: ne.bRenderChildren && Y,
          });
          return (
            D &&
              (o = (0, t.jsx)(d.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: o,
              })),
            o
          );
        }
      },
      66825: (R, J, e) => {
        "use strict";
        e.r(J), e.d(J, { default: () => F });
        var t = e(7850),
          g = e(90626),
          v = e(19298),
          d = e(55051),
          r = e(57810),
          z = e(179),
          V = e(36118),
          X = e(6778),
          N = e(18210),
          C = e(56649),
          D = e.n(C),
          O = e(3166),
          w = e(85742);
        function F(Y) {
          const { appID: H } = Y,
            q = (0, X.G)(),
            [ne] = (0, z.QD)("inqueue", "" + d.QV.qy),
            [I, W] = (0, g.useState)(!1),
            i = (0, O.Qn)(),
            { eStoreDiscoveryQueueType: f, storePageFilter: u } =
              g.useMemo(() => {
                if (ne?.length > 0) {
                  const s = ne.split("_"),
                    a = Number(s[0]);
                  let S;
                  return (
                    s.length > 1 && (S = (0, r.bz)(s[1])),
                    { eStoreDiscoveryQueueType: a, storePageFilter: S }
                  );
                } else
                  return {
                    eStoreDiscoveryQueueType: d.QV.qy,
                    storePageFilter: void 0,
                  };
              }, [ne]),
            { showDiscoveryQueue: y } = (0, w.GV)(f, {
              includeAppID: H,
              storePageFilter: u,
            }),
            o = g.useCallback(() => {
              W(!0);
            }, []),
            l = (0, r.WX)(f, u);
          return !q || I
            ? null
            : (0, t.jsxs)(v.Z, {
                focusable: !0,
                className: D().DiscoveryQueueWidgetCtn,
                onSecondaryButton: o,
                onOKButton: y,
                onOKActionDescription: (0, N.we)(
                  "#DiscoveryQueue_ResumeWizard",
                ),
                onSecondaryActionDescription: (0, N.we)("#Button_Close"),
                children: [
                  (0, t.jsxs)("div", {
                    onClick: y,
                    className: D().WidgetText,
                    children: [
                      (0, t.jsx)(V.mcU, {}),
                      (0, N.we)("#DiscoveryQueue_ResumeWizard"),
                      l?.length > 0 && ": " + l,
                    ],
                  }),
                  !i &&
                    (0, t.jsx)("div", {
                      className: D().CloseButton,
                      onClick: o,
                      children: (0, t.jsx)(V.X, {}),
                    }),
                ],
              });
        }
      },
      77426: (R, J, e) => {
        "use strict";
        e.d(J, { G: () => t });
        const t = {
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
      46943: (R, J, e) => {
        "use strict";
        e.d(J, { Ul: () => ne, xz: () => i, $Y: () => W, i8: () => I });
        var t = e(7850),
          g = e(90626),
          v = e(75844),
          d = e(5858),
          r = e(36707),
          z = e(3166),
          V = e(13465);
        const X =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          N =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          C =
            e.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var D = e(43047),
          O = e.n(D),
          w = e(71742),
          F = Object.defineProperty,
          Y = Object.getOwnPropertyDescriptor,
          H = (f, u, y, o) => {
            for (
              var l = o > 1 ? void 0 : o ? Y(u, y) : u, s = f.length - 1, a;
              s >= 0;
              s--
            )
              (a = f[s]) && (l = (o ? a(u, y, l) : a(l)) || l);
            return o && l && F(u, y, l), l;
          };
        function q(f) {
          switch (f) {
            case "X-Small":
            case "Small":
              return X;
            case "Medium":
            case "MediumLarge":
              return N;
            case "Large":
            case "X-Large":
            case "FillArea":
              return C;
            default:
              return (0, w.z_)(f, `Unhandled size ${f}`), N;
          }
        }
        const ne = g.memo(function (u) {
          const {
              strAvatarURL: y,
              size: o = "Medium",
              className: l,
              statusStyle: s,
              statusPosition: a,
              children: S,
              ...P
            } = u,
            te = g.useMemo(() => {
              const Q = [];
              return y && Q.push(y), Q.push(q(o)), Q;
            }, [y, o]);
          return (0, t.jsxs)("div", {
            className: (0, r.A)(
              O().avatarHolder,
              "avatarHolder",
              "no-drag",
              o,
              l,
            ),
            ...P,
            children: [
              (0, t.jsx)("div", {
                className: (0, r.A)(O().avatarStatus, "avatarStatus", a),
                style: s,
              }),
              (0, t.jsx)(V.c, {
                className: (0, r.A)(O().avatar, "avatar"),
                rgSources: te,
                draggable: !1,
              }),
              S,
            ],
          });
        });
        let I = class extends g.Component {
          render() {
            const {
              persona: f,
              size: u = "Medium",
              animatedAvatar: y,
              className: o,
              strBackupAvatarURL: l,
              ...s
            } = this.props;
            let a = "";
            return (
              y && y.image_small && y.image_small.length != 0
                ? (a = z.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + y.image_small)
                : f
                  ? ((a = f.avatar_url_medium),
                    u == "Small" || u == "X-Small"
                      ? (a = f.avatar_url)
                      : (u == "Large" || u == "X-Large" || u == "FillArea") &&
                        (a = f.avatar_url_full))
                  : l && (a = l),
              (0, t.jsx)(ne, {
                strAvatarURL: a,
                size: u,
                className: (0, r.A)((0, d.rO)(f), o),
                ...s,
              })
            );
          }
        };
        I = H([v.PA], I);
        const W = (0, v.PA)((f) => {
          const {
            profileItem: u,
            className: y,
            bDisableAnimation: o,
            ...l
          } = f;
          if (!u || !u.image_small || u.image_small.length == 0) return null;
          let s = o ? u.image_large : u.image_small;
          return (
            s || (s = u.image_small),
            s.startsWith("https://") ||
              (s = z.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
            (0, t.jsx)("div", {
              className: (0, r.A)(O().avatarFrame, y, "avatarFrame"),
              ...l,
              children: (0, t.jsx)("img", {
                className: O().avatarFrameImg,
                src: s,
              }),
            })
          );
        });
        let i = class extends g.Component {
          m_timer;
          constructor(f) {
            super(f),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let f = 0;
            switch (this.props.loopDuration) {
              case "Short":
                f = 2500;
                break;
              case "Medium":
                f = 5e3;
                break;
              case "Long":
                f = 1e4;
                break;
            }
            f != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                f,
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
          componentDidUpdate(f) {
            this.props.loopDuration != f.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != f.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: f,
              animatedAvatar: u,
              avatarFrame: y,
              children: o,
              style: l,
              bLimitProfileFrameAnimationTime: s,
              bParentHovered: a,
              ...S
            } = this.props;
            S.onClick && (l = { ...l, cursor: "pointer" });
            const P = this.state.bAnimate ? (u ?? void 0) : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(I, {
                animatedAvatar: P,
                ...S,
                children: [
                  o,
                  (0, t.jsx)(W, {
                    profileItem: y ?? null,
                    bDisableAnimation: s && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        i = H([v.PA], i);
      },
      21079: (R, J, e) => {
        "use strict";
        e.d(J, {
          Dk: () => F,
          Mu: () => q,
          Y8: () => ne,
          ws: () => Y,
          zo: () => H,
        });
        var t = e(72604),
          g = e(35038),
          v = e(83153),
          d = e(9682),
          r = e(41735),
          z = e.n(r),
          V = e(80902),
          X = e(75233),
          N = e(68312),
          C = e(77187),
          D = e(3166),
          O = e(90626);
        function w(i) {
          return ["AppRelevanceStore", "FriendsRecommended", i];
        }
        function F(i) {
          const f = (0, N.KV)();
          return (0, V.I)({
            queryKey: w(i),
            queryFn: () => I(f, i),
            enabled: D.iA.logged_in,
          });
        }
        function Y() {
          const i = (0, X.jE)();
          return O.useCallback(
            (f, u) => {
              i.setQueryData(w(f), u);
            },
            [i],
          );
        }
        function H(i) {
          return (0, V.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", i],
            queryFn: () => W(i),
            enabled: D.iA.logged_in,
          });
        }
        function q() {
          return (0, C.PG)("App Relevance Store Top Sellers", {
            sort: v.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function ne() {
          const { data: i } = q();
          return i;
        }
        async function I(i, f) {
          const u = g.w.Init(d.KV);
          u.Body().set_appid(f);
          const y = await d.YK.GetFriendsRecommendedApp(i, u),
            o = y.GetEResult();
          if (o == t.R) return y.Body().toObject();
          throw `Error ${o} failed to call GetFriendsRecommendedApp ${f}`;
        }
        async function W(i) {
          let f = { appid: i },
            u = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const o = (
            await z().get(
              `${D.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: f, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            o &&
              o.success == t.R &&
              (o.results.similar_played_apps &&
                (u.arrSimilarPlayedApps = o.results.similar_played_apps.map(
                  (l) => ({
                    appid: l.appid,
                    playtimeForever: l.playtime_forever,
                  }),
                )),
              o.results.recommended_by_ir && (u.bRecommendedByIR = !0)),
            u
          );
        }
      },
      813: (R, J, e) => {
        "use strict";
        e.d(J, { $5: () => i, TB: () => W, ac: () => ne });
        var t = e(40497),
          g = e(75233),
          v = e(14947),
          d = e(90626),
          r = e(76559),
          z = e(71742),
          V = e(3166),
          X = e(60480),
          N = e(33512),
          C = e(55483),
          D = e(77291);
        const O = new WeakSet();
        function w(s = t.L) {
          if (typeof window > "u" || typeof document > "u" || O.has(s)) return;
          const a = (0, V.Fd)("groupvanityinfo", "application_config");
          (a === void 0 && document.readyState != "complete") ||
            (O.add(s), F(a) && (0, C.aA)(s, a));
        }
        function F(s) {
          const a = s;
          return a &&
            Array.isArray(a) &&
            a.length > 0 &&
            typeof a[0] == "object"
            ? typeof a[0].clanAccountID == "number" &&
                (typeof a[0].appid == "number" ||
                  typeof a[0].vanity_url == "string")
            : !1;
        }
        function Y(s) {
          return typeof s == "string" ? parseInt(s) : s;
        }
        function H(s) {
          return typeof s == "string" ? Number.parseInt(s) : s;
        }
        class q {
          m_queryClient = t.L;
          m_boxCacheVersion = v.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            w(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((a) => {
                  (a?.type != "added" &&
                    a?.type != "updated" &&
                    a?.type != "removed") ||
                    ((0, C.yT)(a.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, v.h5)(() =>
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
          AddGroupVanities(a) {
            this.LazyInit(), F(a) && (0, C.aA)(this.m_queryClient, a);
          }
          BHasClanInfoLoaded(a) {
            return (
              (0, z.wT)(
                a.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, z.wT)(
                a.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(a.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(a) {
            return !!(0, C.Gt)(H(a), this.ReadCache());
          }
          RegisterClanData(a) {
            this.LazyInit(), (0, C.aA)(this.m_queryClient, a);
          }
          async LoadOGGClanInfoForAppID(a) {
            return (
              this.LazyInit(),
              (a = Y(a)),
              (0, z.wT)(
                a != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              a == 0 ? null : (0, C.AB)(a, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(a) {
            return this.LazyInit(), (0, C.Rc)(a, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(a) {
            return this.LazyInit(), (0, C.Rc)(a, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(a) {
            return this.LoadClanInfoForClanAccountID(a.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(a) {
            return this.LazyInit(), (0, C.MR)(H(a), this.m_queryClient);
          }
          GetOGGClanInfo(a) {
            const S = this.ReadCache();
            return typeof a == "string" ? (0, C.fy)(a, S) : (0, C.ko)(a, S);
          }
          GetClanSteamIDForAppID(a) {
            const S = (0, C.ko)(Y(a), this.ReadCache());
            return S ? r.b.InitFromClanID(S.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(a) {
            return (0, C.ko)(Y(a), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(a) {
            return (0, C.Gt)(a.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(a) {
            return this.BHasClanInfoLoadedByAccountID(a);
          }
          GetClanMemberCount(a) {
            return (0, C.ko)(Y(a), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(a) {
            return (
              (0, z.wT)(
                !!a,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, C.Gt)(H(a), this.ReadCache())
            );
          }
          GetCreatorStoreURL(a) {
            let S = X.pF.GetCreatorHome(a);
            if (S) return S.GetCreatorHomeURL("developer");
            let P = this.GetClanInfoByClanAccountID(a.GetAccountID());
            return (
              V.TS.COMMUNITY_BASE_URL +
              (P.vanity_url
                ? "groups/" + P.vanity_url
                : "gid/" + a.ConvertTo64BitString())
            );
          }
        }
        const ne = new q();
        (0, D.V)("g_ClanStore", ne);
        function I() {
          const s = (0, g.jE)();
          return w(s), s;
        }
        function W(s) {
          I();
          const { data: a, isPending: S } = (0, C.TB)(s ? H(s) : void 0);
          return [!!s && S, a ?? void 0];
        }
        function i(s) {
          const a = I();
          (0, d.useEffect)(() => {
            s &&
              (0, C.MR)(H(s), a).catch((S) =>
                console.error(`Failed to hint load clan info ${s}`, S),
              );
          }, [s, a]);
        }
        function f(s) {
          return I(), useClanInfoByVanityQuery(s).data ?? null;
        }
        function u(s) {
          I();
          const a = s ? Y(s) : void 0,
            { data: S, isPending: P } = useClanInfoByAppIDQuery(a);
          return { bLoadingClanInfo: !!a && P, clanInfo: S ?? null };
        }
        function y(s, a) {
          if (s.BIsOGGEvent()) return { bVisible: !1 };
          if (s.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (s.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            s.jsondata.clone_from_event_gid &&
            s.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (s.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const P = g_CreatorHomeStore.GetCreatorHome(s.clanSteamID);
          return P &&
            P.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : a
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function o(s, a) {
          return s.BIsOGGEvent()
            ? s.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : a
                  ? s.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function l(s) {
          return s.BIsOGGEvent()
            ? { bVisible: !1 }
            : s.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : s.BHasSaleEnabled()
                ? { bVisible: !0 }
                : s.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      57810: (R, J, e) => {
        "use strict";
        e.d(J, {
          Bk: () => q,
          IH: () => f,
          Uf: () => i,
          WX: () => u,
          aI: () => W,
          bz: () => ne,
        });
        var t = e(90626),
          g = e(14947),
          v = e(72604),
          d = e(35038),
          r = e(55051),
          z = e(8323),
          V = e(30096),
          X = e(48473),
          N = e(3166),
          C = e(64868),
          D = e(49100),
          O = e(40497),
          w = Object.defineProperty,
          F = Object.getOwnPropertyDescriptor,
          Y = (y, o, l, s) => {
            for (
              var a = s > 1 ? void 0 : s ? F(o, l) : o, S = y.length - 1, P;
              S >= 0;
              S--
            )
              (P = y[S]) && (a = (s ? P(o, l, a) : P(a)) || a);
            return s && a && w(o, l, a), a;
          };
        function H(y, o) {
          let l = y.toString();
          if (
            o?.strContentHubType != "newreleases" &&
            o?.strContentHubType != "upcoming"
          ) {
            const s = o?.nSaleTagID,
              a = o?.strContentHubType,
              S = o?.strContentHubCategory,
              P = o?.nContentHubTagID,
              te = o?.bDiscountsOnly,
              Q = o?.bPrioritizeDiscounts,
              se = o?.strOptInName,
              ve = o?.nOptInTagID,
              oe = o?.nPruneTagID;
            s
              ? (l += "_" + s)
              : a &&
                ((l += "_" + a),
                a === "category" && S
                  ? (l += "_" + S)
                  : a === "tags" && P && (l += "_" + P),
                te ? (l += "_d") : Q && (l += "_p"),
                se && ve && oe && (l += "_" + se));
          }
          return l;
        }
        function q(y) {
          return (0, X.bt)(JSON.stringify(y));
        }
        function ne(y) {
          return JSON.parse((0, X.he)(y));
        }
        const I = class vt {
          m_transport;
          m_mapDiscoveryQueues = new Map();
          m_mapSkippedApps = new Map();
          m_mapSkippedAppCount = new Map();
          m_mapInClientCompleted = new Map();
          m_mapInClientCompletedCallback = new Map();
          m_setExhuasted = new Set();
          m_mapExhuastedCallback = new Map();
          GetTotalSkippedAppsForDiscoveryQueue(o, l) {
            const s = H(o, l);
            return this.m_mapDiscoveryQueues.get(s)?.skipped ?? 0;
          }
          GetNumAppsSeenForDiscoveryQueue(o, l) {
            const s = H(o, l);
            return this.m_mapSkippedAppCount.get(s) || 0;
          }
          GetSkippedAppKey(o, l, s) {
            const a = H(l, s);
            return `${o}_${a}`;
          }
          GetInClientCompletedQueues(o, l) {
            const s = H(o, l);
            return this.m_mapInClientCompleted.get(s) || 0;
          }
          GetInClientCompletedQueuesCallback(o, l) {
            const s = H(o, l);
            return (
              this.m_mapInClientCompletedCallback.has(s) ||
                this.m_mapInClientCompletedCallback.set(s, new z.lu()),
              this.m_mapInClientCompletedCallback.get(s)
            );
          }
          GetExhaustedCallback(o, l) {
            const s = H(o, l);
            return (
              this.m_mapExhuastedCallback.has(s) ||
                this.m_mapExhuastedCallback.set(s, (0, z.Jc)(!1)),
              this.m_mapExhuastedCallback.get(s)
            );
          }
          BIsExhausted(o, l) {
            const s = H(o, l);
            return this.m_setExhuasted.has(s);
          }
          async LoadDiscoveryQueue(o, l, s) {
            const a = H(o, s);
            if (!this.m_transport) return v.zi;
            try {
              const S = (0, D.cw)(this.m_transport, o, l, s);
              l && (await O.L.invalidateQueries({ queryKey: S.queryKey }));
              const P = await O.L.fetchQuery(S);
              return (
                this.m_mapDiscoveryQueues.set(a, P),
                P.exhausted
                  ? (this.m_setExhuasted.add(a),
                    this.GetExhaustedCallback(o, s).Set(!0))
                  : (this.m_setExhuasted.delete(a),
                    this.GetExhaustedCallback(o, s).Set(!1)),
                this.m_mapSkippedAppCount.set(a, P.skipped || 0),
                v.R
              );
            } catch (S) {
              return (
                console.warn(
                  "Error",
                  S,
                  "failed to get discovery queue type",
                  o,
                  "key",
                  a,
                ),
                v.zi
              );
            }
          }
          async GetDiscoveryQueueAppsOfType(o, l, s) {
            const a = H(o, s);
            return !l && this.m_mapDiscoveryQueues.has(a)
              ? {
                  appids: this.m_mapDiscoveryQueues.get(a).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(a).exhausted,
                }
              : (await this.LoadDiscoveryQueue(o, l, s),
                {
                  appids: this.m_mapDiscoveryQueues.get(a).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(a).exhausted,
                });
          }
          async SkipDiscoveryQueueItem(o, l, s) {
            const a = this.GetSkippedAppKey(o, l, s);
            if (!this.m_mapSkippedApps.has(a)) {
              const S = H(l, s),
                P = this.m_mapDiscoveryQueues.get(S)?.appids,
                te = P?.[P.length - 1] == o;
              this.m_mapSkippedApps.set(a, !0),
                this.m_mapSkippedAppCount.set(
                  S,
                  (this.m_mapSkippedAppCount.get(S) || 0) + 1,
                );
              const Q = d.w.Init(r.fe);
              if (
                (Q.Body().set_appid(o),
                Q.Body().set_queue_type(l),
                (s?.nSaleTagID || s?.strContentHubType) &&
                  Q.Body().set_store_page_filter((0, D.Jy)(s, !0)),
                !this.m_transport)
              ) {
                console.warn(
                  "Error",
                  "no transport",
                  "failed to skip appid ",
                  o,
                ),
                  this.m_mapSkippedApps.delete(a);
                return;
              }
              const ve = (
                await r.nd.SkipDiscoveryQueueItem(this.m_transport, Q)
              ).GetEResult();
              ve != v.R && ve != v.Ze
                ? (console.warn("Error", ve, "failed to skip appid ", o),
                  this.m_mapSkippedApps.delete(a))
                : te && this.MarkDiscoveryQueueCompleted(l, s);
            }
          }
          MarkDiscoveryQueueCompleted(o, l) {
            const s = H(o, l);
            if (this.m_mapInClientCompleted.has(s)) {
              const a = this.m_mapInClientCompleted.get(s) + 1;
              this.m_mapInClientCompleted.set(s, a),
                this.GetInClientCompletedQueuesCallback(o, l).Dispatch(a);
            } else
              this.m_mapInClientCompleted.set(s, 0),
                this.GetInClientCompletedQueuesCallback(o, l).Dispatch(0);
          }
          async LoadSkippedApps(o, l) {
            const s = H(o, l),
              a = d.w.Init(r.pS);
            if (
              (a.Body().set_steamid(N.iA.steamid),
              a.Body().set_queue_type(o),
              (l?.nSaleTagID || l?.strContentHubType) &&
                a.Body().set_store_page_filter((0, D.Jy)(l, !0)),
              !this.m_transport)
            )
              return (
                console.warn(
                  "Failed to retrieve skipped apps for discovery queue, no transport.",
                  o,
                  l,
                ),
                []
              );
            const S = await r.nd.GetDiscoveryQueueSkippedApps(
              this.m_transport,
              a,
            );
            return S.GetEResult() === v.R
              ? S.Body().appids() || []
              : (console.warn(
                  "Failed to retrieve skipped apps for discovery queue.",
                  o,
                  l,
                  S.GetEResult(),
                ),
                []);
          }
          static s_DiscoveryQueueStore = null;
          static Init(o) {
            vt.Get().m_transport = o;
          }
          static BHasTransport() {
            return !!vt.Get().m_transport;
          }
          static Get() {
            return (
              this.s_DiscoveryQueueStore ||
                (this.s_DiscoveryQueueStore = new vt()),
              this.s_DiscoveryQueueStore
            );
          }
          constructor() {
            (0, g.Gn)(this);
          }
        };
        Y([g.sH], I.prototype, "m_mapDiscoveryQueues", 2);
        let W = I;
        function i(y, o) {
          const [l, s] = (0, t.useState)(
            W.Get().GetInClientCompletedQueues(y, o),
          );
          return (
            (0, V.hL)(W.Get().GetInClientCompletedQueuesCallback(y, o), s), l
          );
        }
        function f(y, o) {
          return (0, C.gc)(W.Get().GetExhaustedCallback(y, o));
        }
        function u(y, o) {
          const l = t.useMemo(
            () => (0, N.Tc)("discovery_queue_name", "application_config"),
            [],
          );
          return typeof l == "string" && l.length > 0 ? l : "";
        }
      },
      35098: (R, J, e) => {
        "use strict";
        e.d(J, { DW: () => O, js: () => C, mK: () => q, tb: () => H });
        var t = e(90626),
          g = e(80902),
          v = e(54806),
          d = e(99412),
          r = e(68312),
          z = e(15369),
          V = e(5858),
          X = e(76559),
          N = e(15860);
        function C(i) {
          const f = (0, r.KV)(),
            u = t.useContext(Y);
          return (0, g.I)(q(u, f, i));
        }
        function D(i) {
          const f = React.useRef(void 0),
            u = C(i);
          return u.data
            ? u
            : (f.current ||
                (f.current = new CPersonaStateImpl(
                  typeof i == "string"
                    ? new CSteamID(i)
                    : CSteamID.InitFromAccountID(i),
                )),
              { ...u, data: f.current });
        }
        function O(i) {
          const f = (0, r.KV)(),
            u = t.useContext(Y);
          return (0, v.E)({ queries: i.map((y) => q(u, f, y)) });
        }
        function w(i) {
          return ReactQueryClient.getQueryData(["PlayerSummary", i]);
        }
        function F(i) {
          const { loadPersonaState: f, children: u } = i,
            y = React.useMemo(() => ({ loadPersonaState: f }), [f]);
          return React.createElement(Y.Provider, { value: y }, u);
        }
        const Y = t.createContext({
          loadPersonaState: async (i, f) => {
            if (i == null) return null;
            const u = await I(f).load(
              X.b.InitFromAccountID(i).ConvertTo64BitString(),
            );
            return W(X.b.InitFromAccountID(i), u);
          },
        });
        function H() {
          return t.useContext(Y);
        }
        function q(i, f, u) {
          const y = typeof u == "string" ? new X.b(u).GetAccountID() : u;
          return {
            queryKey: ["PlayerSummary", y],
            queryFn: () => i.loadPersonaState(y, f),
            enabled: !!y,
          };
        }
        let ne;
        function I(i) {
          return (ne ??= (0, N.c)(i));
        }
        function W(i, f) {
          let u = new V.Z(i);
          const y = f?.public_data,
            o = f?.private_data;
          return (
            (u.m_bInitialized = !!f),
            (u.m_ePersonaState = o?.persona_state ?? d.cU3),
            (u.m_strAvatarHash = y?.sha_digest_avatar
              ? (0, z.Kx)(y.sha_digest_avatar)
              : V.dV),
            (u.m_strPlayerName = y?.persona_name ?? i.ConvertTo64BitString()),
            (u.m_strAccountName = o?.account_name),
            o?.persona_state_flags &&
              (u.m_unPersonaStateFlags = o?.persona_state_flags),
            o?.game_id && (u.m_gameid = o?.game_id),
            o?.game_server_ip_address &&
              (u.m_unGameServerIP = o?.game_server_ip_address),
            o?.lobby_steam_id && (u.m_game_lobby_id = o?.lobby_steam_id),
            o?.game_extra_info && (u.m_strGameExtraInfo = o?.game_extra_info),
            y?.profile_url && (u.m_strProfileURL = y.profile_url),
            u
          );
        }
      },
      77187: (R, J, e) => {
        "use strict";
        e.d(J, { E2: () => w, PG: () => Y });
        var t = e(7850),
          g = e(90626),
          v = e(80902),
          d = e(72604),
          r = e(35038),
          z = e(83153),
          V = e(84192),
          X = e(10142),
          N = e(71742),
          C = e(68312);
        const D = g.createContext({}),
          O = () => g.useContext(D);
        function w(ne) {
          let { defaultOptions: I, children: W } = ne,
            i = g.useMemo(() => ({ defaultOptions: I || {} }), [I]);
          return (0, t.jsx)(D.Provider, { value: i, children: W });
        }
        const F = "StoreQueryStore";
        function Y(ne, I, W, i) {
          let f = O();
          const u = (0, C.KV)();
          f ||
            (0, N.wT)(!1, "useStoreQuery called outside of a <StoreQueryRoot>");
          let y = f.defaultOptions;
          const o = g.useMemo(() => {
            let S = [];
            return (
              i?.content_descriptors_excluded
                ? (S = i.content_descriptors_excluded)
                : y?.content_descriptors_excluded &&
                  (S = y.content_descriptors_excluded),
              {
                ...I,
                filters: { content_descriptors_excluded: S, ...I.filters },
              }
            );
          }, [I, i, y]);
          let l;
          i?.override_country_code !== void 0
            ? (l = i.override_country_code)
            : y?.override_country_code !== void 0 &&
              (l = y.override_country_code);
          let s = { staleTime: 3600 * 1e3 };
          i?.reactQuery && (s = { ...s, ...i.reactQuery });
          const a = [F, o, W ?? {}, i ?? {}];
          return (0, v.I)({
            queryKey: a,
            queryFn: () => H(u, ne, o, W ?? {}, l),
            ...s,
          });
        }
        async function H(ne, I, W, i, f) {
          const u = r.w.Init(z.iU);
          (0, V.rV)(u),
            i && (0, V.Bn)(u, i),
            f && u.Body().set_override_country_code(f),
            u.Body().set_query(z.nu.fromObject(W)),
            u.Body().set_query_name(I);
          const y = await z.Fs.Query(ne, u);
          if (y.GetEResult() != d.R)
            throw `Error executing StoreQuery "${I}", EResult: ${y.GetEResult()}`;
          return new q(y, i);
        }
        class q {
          m_Items = void 0;
          m_rgItemIDs = void 0;
          m_metadata = void 0;
          constructor(I, W) {
            this.ReadResults(I, W);
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
          ReadResults(I, W) {
            this.m_Items ||
              ((0, N.wT)(
                I.Body().metadata().start() == 0,
                "Empty item list - expected to start at 0",
              ),
              (this.m_Items = []));
            const i = I.Body().ids() || [];
            if (
              ((this.m_rgItemIDs = i.map((f) => f.toObject())),
              I.Body().store_items())
            )
              for (const f of I.Body().store_items()) {
                const u = X.A.Get().ReadItem(f, W);
                u && this.m_Items.push(u);
              }
            this.m_metadata = I.Body().metadata().toObject();
          }
        }
      },
      6394: (R, J, e) => {
        "use strict";
        e.d(J, { g: () => Q });
        var t = e(7850),
          g = e(65946),
          v = e(90626),
          d = e(83153),
          r = e(6469),
          z = e(10142),
          V = e(77187),
          X = e(6778),
          N = e(36707),
          C = e(18210),
          D = e(3166),
          O = e(57810),
          w = e(71477),
          F = e.n(w),
          Y = e(7112),
          H = e(94253),
          q = e(41635),
          ne = e(80902),
          I = e(19298),
          W = e(81944),
          i = e(40358),
          f = e(21721),
          u = e(15830),
          y = e(86048),
          o = e(64868);
        function l(_) {
          const {
              arrDiscoveryApps: A,
              onClick: T,
              className: b,
              bDisableAnimation: G = !1,
              children: ue,
              ...ye
            } = _,
            me = (0, D.Qn)(),
            [De, Fe] = (0, v.useState)(!me),
            [Ve, nt] = (0, v.useState)(!1),
            c = (0, v.useRef)(Date.now()),
            it = 3e4,
            dt = v.useCallback(
              (ot) => {
                nt(ot), me || Fe(ot);
              },
              [me],
            ),
            Ue = v.useCallback(() => {
              (c.current = Date.now()), !me && Ve && Fe(!0);
            }, [me, Ve]);
          return (
            (0, o.$$)(() => {
              Date.now() - c.current > it && !me && Fe(!1);
            }, 5e3),
            (0, y.l6)(window, "scroll", Ue),
            (0, y.l6)(window, "mousemove", Ue),
            (0, t.jsx)(W.J, {
              trigger: "repeated",
              onVisibilityChange: dt,
              children: (0, t.jsxs)(I.Z, {
                focusable: !0,
                onGamepadFocus: () => Fe(!0),
                onMouseEnter: () => me && Fe(!0),
                onGamepadBlur: () => Fe(!1),
                onMouseLeave: () => me && Fe(!1),
                onActivate: T,
                onOKActionDescription: (0, C.we)("#DiscoveryQueue_OpenWizard"),
                className: (0, N.A)(
                  u.DiscoveryQueueWidgetCtn,
                  b,
                  A !== void 0 && u.Initialized,
                ),
                ...ye,
                children: [
                  (0, t.jsx)(a, { rgAppIDs: A, bAnimationEnabled: !G && De }),
                  ue,
                ],
              }),
            })
          );
        }
        let s;
        function a(_) {
          const {
              rgAppIDs: A,
              bAnimationEnabled: T = !0,
              nCapsuleWidth: b = 320,
            } = _,
            [G, ue] = v.useState(null);
          return (
            v.useEffect(() => {
              if (!T || !G) return;
              s || (s = performance.now());
              const ye = G.offsetWidth;
              let me;
              const De = () => {
                const Ve =
                  (((performance.now() - s) / 40) % (ye - 3 * b - 16)) + b;
                (G.style.transform = `translateX( -${Ve}px )`),
                  (me = requestAnimationFrame(De));
              };
              return (
                (me = requestAnimationFrame(De)), () => cancelAnimationFrame(me)
              );
            }, [G, T, b]),
            !A || !A.length
              ? null
              : (0, t.jsx)("div", {
                  className: u.AppCarouselPosition,
                  style: { "--capsule-width": `${b}px` },
                  children: (0, t.jsxs)("div", {
                    ref: ue,
                    className: (0, N.A)(u.AppCarouselCtn, "vt-scrollable"),
                    style: { transform: `translateX( -${b}px )` },
                    children: [
                      A.map((ye) =>
                        (0, t.jsx)(S, { appID: ye }, "Capsule_" + ye),
                      ),
                      [...A, ...A]
                        .slice(0, 3)
                        .map((ye, me) =>
                          (0, t.jsx)(S, { appID: ye }, `Capsule2_${me}_${ye}`),
                        ),
                    ],
                  }),
                })
          );
        }
        function S(_) {
          const { appID: A } = _,
            T = { appid: A },
            { data: b } = (0, i.J$)(T),
            G = (0, f.pd)(A),
            ue = (0, f.DT)(T) || [],
            { data: ye } = (0, i.lv)(T);
          if (!G) return null;
          let me = ue.length
            ? (0, f.bu)(ue[0], "600x338")
            : ye && (0, f.b0)(ye, "main_capsule");
          const De = {
            backgroundImage: `radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgba(0, 0, 0, 1) 92.5%)${me ? `, url('${me}')` : ""}`,
          };
          return (0, t.jsxs)("div", {
            className: u.AppCapsuleCtn,
            style: De,
            children: [
              (0, t.jsx)("div", {
                className: (0, N.A)(u.CapsuleColumn, u.LibraryImage),
                children: (0, t.jsx)("img", { src: G, alt: b?.name }),
              }),
              (0, t.jsx)("div", {
                className: u.CapsuleColumn,
                children: (0, t.jsx)("div", {
                  className: u.AppName,
                  children: b?.name,
                }),
              }),
            ],
          });
        }
        var P = e(85742),
          te = e(32994);
        function Q(_) {
          return (0, X.G)()
            ? (0, t.jsxs)(se, {
                children: [
                  (0, t.jsx)($e, {}),
                  D.iA.logged_in
                    ? (0, t.jsx)(oe, { ..._ })
                    : (0, t.jsx)(m, { ..._ }),
                ],
              })
            : null;
        }
        function se(_) {
          const [A, T] = (0, r.L2)();
          let b = (0, g.q3)(() => T.ExcludedContentDescriptor),
            G = v.useMemo(() => ({ content_descriptors_excluded: b }), [b]);
          return A
            ? null
            : (0, t.jsx)(V.E2, { defaultOptions: G, children: _.children });
        }
        function ve(_, A) {
          const { data: T } = (0, ne.I)({
            queryKey: ["DiscoveryQueueLoader", _, A],
            queryFn: async () => {
              const { appids: b, exhausted: G } = await O.aI
                .Get()
                .GetDiscoveryQueueAppsOfType(_, !1, A);
              let ue = { ...P.LB, include_screenshots: !0 };
              return (
                await z.A.Get().QueueMultipleAppRequests(b ?? [], ue),
                { rgDiscoveryApps: b, exhausted: G }
              );
            },
            enabled: D.iA.logged_in,
          });
          return [T?.rgDiscoveryApps, T?.exhausted];
        }
        function oe(_) {
          const {
              eStoreDiscoveryQueueType: A,
              strQueueDescriptionOverride: T,
              ...b
            } = _,
            { showDiscoveryQueue: G, bQueueVisible: ue } = (0, P.GV)(A, b),
            ye = (0, te.lI)(),
            [me, De] = ve(A, b.storePageFilter),
            Fe = ue || !!ye.data?.preferences?.disable_animated_marketing,
            Ve = v.useCallback(() => {
              !De && G();
            }, [De, G]),
            nt = v.useId();
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(l, {
              "aria-labelledby": nt,
              onClick: Ve,
              arrDiscoveryApps: me,
              bDisableAnimation: Fe,
              className: F().DiscoveryQueueWidget,
              children:
                !De &&
                (0, t.jsx)(n, { id: nt, strQueueDescriptionOverride: T }),
            }),
          });
        }
        function n(_) {
          const { strQueueDescriptionOverride: A, id: T } = _,
            b = A ?? (0, C.we)("#DiscoveryQueue_WidgetHeader");
          return (0, t.jsxs)("div", {
            id: T,
            className: (0, N.A)(F().WidgetHeaderCtn, "WidgetHeaderCtn"),
            children: [
              (0, t.jsx)("div", {
                className: F().WidgetHeaderText,
                children: (0, C.we)("#DiscoveryQueue_WidgetHeader_Yours"),
              }),
              (0, t.jsx)("div", {
                className: F().WidgetHeaderSubText,
                children: b,
              }),
            ],
          });
        }
        function m(_) {
          const A = k(!0),
            T = v.useCallback(() => {
              window.location.href = `${D.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
            }, []);
          return (0, t.jsx)(l, {
            onClick: T,
            arrDiscoveryApps: A ? q.Nv(A) : void 0,
            children: (0, t.jsxs)("div", {
              className: (0, N.A)(F().WidgetHeaderCtn, "WidgetHeaderCtn"),
              children: [
                (0, t.jsx)("div", {
                  className: F().WidgetHeaderText,
                  children: (0, C.we)("#DiscoveryQueue_WidgetHeader_Yours"),
                }),
                (0, t.jsx)("div", {
                  className: F().WidgetHeaderSubText,
                  children: (0, C.we)("#DiscoveryQueue_WidgetHeader_LoggedOut"),
                }),
                (0, t.jsx)("div", {
                  className: F().LoginButton,
                  children: (0, C.we)("#DiscoveryQueue_Error_Login_Title"),
                }),
              ],
            }),
          });
        }
        function k(_) {
          let { data: A } = (0, V.PG)(
            "DiscoveryQueueWidget",
            {
              sort: d.Dq.Rm,
              start: 0,
              count: 12,
              filters: { type_filters: { include_games: !0 } },
            },
            { ...P.LB, include_screenshots: !0 },
            { reactQuery: { enabled: _, staleTime: 1 / 0 } },
          );
          return (0, v.useMemo)(
            () => A && A.GetItemIDs().map((T) => T.appid),
            [A],
          );
        }
        function $e() {
          const _ = (0, H.Qt)(Y.L6.Jz, D.TS.LANGUAGE, !0),
            A = (0, D.Qn)();
          if (!_.data?.definition || (_.data?.reward_items?.length ?? 0) == 0)
            return null;
          const T = _?.data.reward_items ?? [];
          (0, q.fW)(T);
          const b = T.slice(0, 3);
          let G = null;
          return (
            D.iA.logged_in &&
              !A &&
              (G = (0, t.jsxs)(t.Fragment, {
                children: [
                  " - ",
                  (0, t.jsx)("a", {
                    href: D.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                    children: (0, C.we)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
                ],
              })),
            (0, t.jsxs)("div", {
              className: F().SaleTopSection,
              children: [
                (0, t.jsx)(ae, { rgRewardItems: b }),
                (0, t.jsxs)("div", {
                  className: F().SaleTextCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: F().BoldText,
                      children: (0, C.we)("#DiscoveryQueue_Widget_SaleDesc"),
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, C.we)(
                          "#DiscoveryQueue_Widget_SaleTitle",
                          (0, C._l)(
                            _.data.definition.rtime_end_time ?? 0,
                            !1,
                            !1,
                            !1,
                            !1,
                          ),
                        ),
                        G,
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function ae(_) {
          const { rgRewardItems: A } = _,
            T = A.map((b) => {
              if (!b.community_definition || !b.community_definition.item_name)
                return null;
              const G = `${D.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${b.appid}/${b.community_definition.item_image_small}`;
              return (0, t.jsx)(
                "div",
                {
                  className: F().SaleSticker,
                  children: (0, t.jsx)("img", { src: G }),
                },
                b.community_definition.item_name.toString(),
              );
            });
          return (0, t.jsx)("div", {
            className: F().StickerArrangement,
            children: q.Nv(T),
          });
        }
      },
      87192: (R, J, e) => {
        "use strict";
        e.r(J), e.d(J, { default: () => st });
        var t = e(7850),
          g = e(90626),
          v = e(24660),
          d = e(19298),
          r = e(78365),
          z = e(20169),
          V = e(7112),
          X = e(55051),
          N = e(68312),
          C = e(37740),
          D = e(72865),
          O = e(71568),
          w = e(6469),
          F = e(94253),
          Y = e(10142),
          H = e(84676),
          q = e(36118),
          ne = e(51079),
          I = e(47689),
          W = e(36707),
          i = e(18210),
          f = e(57589),
          u = e(13854),
          y = e(41672),
          o = e(3166),
          l = e(57810),
          s = e(40594);
        function a({
          nPercent: B,
          indeterminate: p,
          animate: h,
          className: E,
        }) {
          return jsx("div", {
            className: classnames(
              styles.ProgressBar,
              h && styles.AnimateProgress,
              p && styles.Indeterminate,
              E,
            ),
            style: { "--percent": B / 100 },
          });
        }
        const S = ({ nPercent: B, size: p = 120, strokeWidth: h = 20 }) => {
          const E = (p - h) / 2,
            K = 2 * Math.PI * E,
            U = K - (B / 100) * K,
            ee = B == 100;
          return (0, t.jsx)("div", {
            className: (0, W.A)({ [s.Circular]: !0, [s.Full]: ee }),
            children: (0, t.jsxs)("svg", {
              width: p,
              height: p,
              style: { transform: "rotate(-90deg)" },
              children: [
                (0, t.jsx)("circle", {
                  cx: p / 2,
                  cy: p / 2,
                  r: E,
                  stroke: "#0c131d",
                  strokeWidth: h,
                  fill: "none",
                }),
                (0, t.jsx)("circle", {
                  cx: p / 2,
                  cy: p / 2,
                  r: E,
                  stroke: "#1a9fff",
                  strokeWidth: h,
                  fill: "none",
                  strokeDasharray: K,
                  strokeDashoffset: U,
                  style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
                }),
              ],
            }),
          });
        };
        var P = e(85599),
          te = e(21659),
          Q = e(12742),
          se = e(62571),
          ve = e(72408),
          oe = e(48357),
          n = e(80104),
          m = e(27284),
          k = e(31377),
          $e = e(71421),
          ae = e(53113),
          _ = e(74732),
          A = e(80902),
          T = e(99412),
          b = e(46943),
          G = e(93125),
          ue = e(76559),
          ye = e(813),
          me = e(60480),
          De = e(14874),
          Fe = e(80702),
          Ve = e(21079),
          nt = e(57834),
          c = e.n(nt),
          it = e(35098),
          dt = e(58612),
          Ue = e(24642);
        const ot = new f.wd("AppRelevance").Debug;
        function St(B, p) {
          const h = (0, g.useMemo)(
            () => w.Fm.Get().GetRecommendingCuratorsForApp(B) || [],
            [B],
          );
          return (0, A.I)({
            queryKey: ["RecommendingCurators", B],
            queryFn: () =>
              Promise.all(h?.map((E) => ye.ac.LoadClanInfoForClanAccountID(E))),
            enabled: !!p && h && h.length > 0,
          });
        }
        function mt(B) {
          const {
              appID: p,
              bShowAvatars: h,
              storeItem: E,
              bHideDescription: K,
              bShowCuratorInfo: U,
              bShowCreatorInfo: ee,
            } = B,
            j = (0, dt.Nd)(p),
            $ = (0, Ve.Dk)(p),
            pe = (0, Ve.zo)(p),
            Ce = (0, Ve.Y8)(),
            ge = (0, A.I)({
              queryKey: ["SimilarPlayedAppsLoad", p],
              queryFn: () =>
                Y.A.Get().QueueMultipleAppRequests(
                  pe.data.arrSimilarPlayedApps?.map((le) => le.appid),
                  { include_basic_info: !0, include_assets: !0 },
                ),
              enabled: pe.isSuccess,
            }),
            Le = St(p, U),
            Pe = (0, g.useMemo)(() => {
              let le = [];
              return (
                E &&
                  ((le = le.concat(
                    E.GetAllFranchiseCreatorClans().map((je) => ({
                      nAccountID: je,
                      type: "franchise",
                    })),
                  )),
                  (le = le.concat(
                    E.GetAllDeveloperCreatorClans().map((je) => ({
                      nAccountID: je,
                      type: "developer",
                    })),
                  )),
                  (le = le.concat(
                    E.GetAllPublisherCreatorClans().map((je) => ({
                      nAccountID: je,
                      type: "publisher",
                    })),
                  )),
                  (le = le.filter((je) =>
                    w.Fm.Get().BIsFollowingCurator(je.nAccountID),
                  ))),
                le
              );
            }, [E]),
            he = (0, A.I)({
              queryKey: ["FollowedCreators", p],
              queryFn: () =>
                ye.ac
                  .LoadClanInfoForClanAccountID(Pe[0].nAccountID)
                  .then((le) => ({ clanInfo: le, type: Pe[0].type })),
              enabled: !!ee && Pe && Pe.length > 0,
            }),
            be = (0, A.I)({
              queryKey: ["PlayerSummaries", p, h],
              queryFn: async () => {
                let le = [],
                  je = [],
                  lt = [];
                const ct = h ? 10 : 1;
                for (
                  let Ie = 0;
                  Ie < $.data.accountids_recommended?.length && Ie < ct;
                  Ie++
                ) {
                  const ze = ue.b.InitFromAccountID(
                    $.data.accountids_recommended[Ie],
                  );
                  le.push(ze.ConvertTo64BitString());
                }
                for (
                  let Ie = 0;
                  Ie < j.data.in_wishlist?.length && Ie < ct;
                  Ie++
                ) {
                  const ze = new ue.b(j.data.in_wishlist[Ie].steamid);
                  je.push(ze.ConvertTo64BitString());
                }
                for (let Ie = 0; Ie < j.data.owns?.length && Ie < ct; Ie++) {
                  const ze = new ue.b(j.data.owns[Ie].steamid);
                  lt.push(ze.ConvertTo64BitString());
                }
                return {
                  rgRecommendedFriends: le,
                  rgWishlistFriends: je,
                  rgOwnedFriends: lt,
                };
              },
              enabled: $.isSuccess && j.isSuccess,
            });
          if (
            !Ce ||
            ge.isLoading ||
            pe.isLoading ||
            $.isLoading ||
            j.isLoading ||
            Le.isLoading ||
            he.isLoading ||
            be.isLoading
          )
            return (0, t.jsx)(P.t, { size: "medium", position: "center" });
          let We = [];
          pe.isSuccess &&
            pe.data.arrSimilarPlayedApps &&
            pe.data.arrSimilarPlayedApps.slice(0, 2).forEach((le) => {
              const je = Y.A.Get().GetApp(le.appid);
              je
                ? We.push(
                    (0, t.jsx)(
                      Dt,
                      { lifetimePlaytime: le.playtimeForever, storeItem: je },
                      le.appid,
                    ),
                  )
                : console.error("Failed to load store data ", p);
            });
          const Te = Ce.GetItemIDs().findIndex((le) => le.appid === p),
            xe = pe.data?.bRecommendedByIR,
            Xe = We.length > 0,
            _e = j.data?.owns?.length,
            re = j.data?.in_wishlist?.length,
            Se = $.data?.accountids_recommended?.length;
          let Ae = 0;
          return (
            _e > 0 && Ae++,
            re > 0 && Ae++,
            Se > 0 && Ae++,
            xe && Ae++,
            Te >= 0 && Ae++,
            We.length > 0 && Ae++,
            U && Le?.data?.length > 0 && Ae++,
            ee && he.data && Ae++,
            ot(
              "FriendsOwned: ",
              _e,
              " FriendsWishlisted: ",
              re,
              "cRecommended: ",
              Se,
            ),
            (0, t.jsxs)(t.Fragment, {
              children: [
                Ae > 0 &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: c().WhyRelevant,
                        children: (0, i.we)("#DiscoveryQueue_WhyRelevant"),
                      }),
                      (0, t.jsxs)("div", {
                        role: "list",
                        className: c().RelevantCtn,
                        children: [
                          Xe &&
                            (0, t.jsx)(ie, {
                              header: (0, i.we)("#DiscoveryQueue_SimilarGames"),
                              children: (0, t.jsx)("div", {
                                className: c().ReleventSimilarAppsCtn,
                                children: We,
                              }),
                            }),
                          U &&
                            Le?.data?.length > 0 &&
                            (0, t.jsx)(ie, {
                              header: (0, i.we)(
                                "#ContentHub_Recommendation_Curators",
                              ),
                              children: (0, t.jsx)("div", {
                                className: (0, W.A)(
                                  c().ReleventSimilarAppsCtn,
                                  c().RecommendingCuratorsCtn,
                                ),
                                children: Le.data
                                  .filter(Boolean)
                                  .map((le) =>
                                    (0, t.jsx)(
                                      ft,
                                      { curator: le },
                                      "curator_" + le.clanAccountID,
                                    ),
                                  ),
                              }),
                            }),
                          ee &&
                            !!he.data &&
                            (0, t.jsx)(It, { creatorInfo: he.data }),
                          Te >= 0 &&
                            (0, t.jsx)(ie, {
                              header: (0, i.um)(
                                "#DiscoveryQueue_TopSellers",
                                (0, Ue.D)(Te + 1),
                                (0, t.jsx)("span", {
                                  className: c().RelevantTextBold,
                                }),
                              ),
                            }),
                          xe &&
                            !Xe &&
                            (0, t.jsx)(ie, {
                              header: (0, i.we)(
                                "#DiscoveryQueue_RecommendedByIR",
                              ),
                            }),
                          (0, t.jsx)(x, {
                            bShowAvatars: h,
                            count: $.data?.accountids_recommended?.length,
                            locToken: "#DiscoveryQueue_FriendsRecommended",
                            arrSteamIDs: be.data?.rgRecommendedFriends,
                          }),
                          (0, t.jsx)(x, {
                            bShowAvatars: h,
                            count: j.data?.owns?.length,
                            locToken: "#DiscoveryQueue_FriendsOwned",
                            arrSteamIDs: be.data?.rgOwnedFriends,
                          }),
                          (0, t.jsx)(x, {
                            bShowAvatars: h,
                            count: j.data?.in_wishlist?.length,
                            locToken: "#DiscoveryQueue_FriendsWishlisted",
                            arrSteamIDs: be.data?.rgWishlistFriends,
                          }),
                        ],
                      }),
                    ],
                  }),
                !K || Ae == 0
                  ? (0, t.jsx)("div", {
                      className: (0, W.A)(
                        c().AppDescription,
                        Ae && c().Divider,
                      ),
                      children: E.GetShortDescription(),
                    })
                  : (0, t.jsx)("div", {
                      "aria-label": E.GetShortDescription(),
                    }),
              ],
            })
          );
        }
        function It(B) {
          const { creatorInfo: p } = B;
          if (!p) return null;
          let h;
          switch (p.type) {
            case "publisher":
              h = "#ContentHub_Recommendation_FollowedPublisher";
              break;
            case "developer":
              h = "#ContentHub_Recommendation_FollowedDeveloper";
              break;
            case "franchise":
              h = "#ContentHub_Recommendation_FollowedFranchise";
              break;
          }
          return h
            ? (0, t.jsx)(ie, {
                header: (0, i.PP)(
                  h,
                  (0, t.jsx)("span", {
                    className: c().RelevantTextBold,
                    children: p.clanInfo?.group_name,
                  }),
                ),
              })
            : null;
        }
        function ft(B) {
          const { curator: p } = B,
            { creatorHome: h } = (0, me.FV)(p?.clanAccountID);
          return !p || !h
            ? null
            : (0, t.jsx)(v.Ii, {
                href: h.GetCreatorHomeURL(null),
                children: (0, t.jsx)("img", { src: p.avatar_medium_url }),
              });
        }
        function Dt(B) {
          const { lifetimePlaytime: p, storeItem: h } = B,
            E = (0, De.DJ)(h);
          return (0, t.jsx)("div", {
            className: c().SimilarAppCtn,
            children: (0, t.jsx)(Fe.Q, {
              id: E,
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
              children: (0, t.jsx)("img", {
                className: c().SimilarAppImg,
                alt: h.GetName(),
                src: h.GetAssets().GetSmallCapsuleURL(),
              }),
            }),
          });
        }
        function x(B) {
          const { arrSteamIDs: p, count: h, locToken: E, bShowAvatars: K } = B;
          return h
            ? h == 1 && !K
              ? (0, t.jsx)(ie, {
                  header: (0, i.PP)(
                    E + "_Single",
                    (0, t.jsx)(M, { steamid: p[0] }),
                  ),
                })
              : (0, t.jsx)(ie, {
                  header: (0, i.um)(
                    E,
                    h,
                    (0, t.jsx)("span", { className: c().RelevantTextBold }),
                  ),
                  children:
                    K &&
                    p.length > 0 &&
                    (0, t.jsx)("div", {
                      className: c().FriendAvatarsCtn,
                      children:
                        h == 1
                          ? (0, t.jsx)(Z, { steamid: p[0] })
                          : (0, t.jsx)(L, { arrSteamIDs: p }),
                    }),
                })
            : null;
        }
        function M(B) {
          const { steamid: p } = B,
            { data: h } = (0, it.js)(p);
          return !h || !h.m_bInitialized
            ? null
            : (0, t.jsx)("span", {
                "data-miniprofile": "s" + h.m_steamid.ConvertTo64BitString(),
                className: c().RelevantTextBold,
                children: h.m_strPlayerName,
              });
        }
        function L(B) {
          const { arrSteamIDs: p } = B,
            h = (0, it.DW)(p);
          return (0, t.jsx)(t.Fragment, {
            children: h.map(
              ({ data: E }) =>
                E &&
                (0, t.jsx)(
                  b.i8,
                  {
                    "data-miniprofile":
                      "s" + E.m_steamid.ConvertTo64BitString(),
                    persona: E,
                    size: "Small",
                    statusPosition: "right",
                  },
                  E.m_steamid.ConvertTo64BitString(),
                ),
            ),
          });
        }
        function Z(B) {
          const { steamid: p } = B,
            { data: h } = (0, it.js)(p);
          return h
            ? (0, t.jsxs)(d.Z, {
                className: c().FriendBlockCtn,
                "data-miniprofile": "s" + p,
                children: [
                  (0, t.jsx)(b.i8, {
                    persona: h,
                    size: "Small",
                    statusPosition: "right",
                  }),
                  (0, t.jsx)(G.D, {
                    className: c().PersonaStatus,
                    persona: h,
                    eFriendRelationship: T._UC,
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
        function ie(B) {
          const { children: p, header: h } = B;
          return (0, t.jsxs)("div", {
            className: c().RelevantItem,
            children: [
              (0, t.jsx)("div", {
                className: c().RelevantCheck,
                children: (0, t.jsx)(q.Jlk, {}),
              }),
              (0, t.jsxs)("div", {
                className: c().RelevantColumn,
                children: [
                  (0, t.jsx)("div", {
                    className: c().ReleventText,
                    children: h,
                  }),
                  p,
                ],
              }),
            ],
          });
        }
        var de = e(29522),
          fe = e(77426);
        const Ee = new f.wd("DiscoveryQueueApp").Debug;
        function Me(B) {
          const {
              appID: p,
              nItemHeight: h,
              nItemWidth: E,
              selected: K,
              fnFocused: U,
              eStoreDiscoveryQueueType: ee,
              storePageFilter: j,
              bPreferDemoStorePage: $,
              elVideo: pe,
              elDetails: Ce,
              appAriaIDs: ge,
            } = B,
            [Le] = (0, H.t7)(p, fe.G),
            Pe = (0, o.Qn)(),
            be = (0, O.R7)()?.ownerWindow || window,
            We = Ke(Le, ee, j, $),
            { bIsIgnored: Te, fnUpdateIgnored: xe } = (0, ve.TK)(p),
            { bIsWishlisted: Xe, fnUpdateWishlist: _e } = (0, ve.u4)(p),
            re = g.useRef(void 0);
          if (
            (g.useEffect(() => {
              K && re.current && re.current.focus({ preventScroll: !0 });
            }, [K]),
            !Le)
          )
            return (
              console.warn("Error: missing store item for appid ", p), null
            );
          const Se = { width: E || void 0, height: h || void 0 };
          return (0, t.jsxs)(d.Z, {
            "aria-labelledby": (0, se.q)(
              ge.nameId,
              ge.tagsId,
              ge.reviewId,
              ge.relevanceId,
              ge.buttonsId,
            ),
            ref: re,
            style: Se,
            className: (0, W.A)(c().DiscoveryQueueApp, K && c().Selected),
            onOptionsActionDescription: Xe
              ? (0, i.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, i.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: _e,
            onOKActionDescription: (0, i.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              be.location.href = We;
            },
            onSecondaryActionDescription: Te
              ? (0, i.we)("#DiscoveryQueue_Undo")
              : (0, i.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: xe,
            fnScrollIntoViewHandler: () => (U(), !0),
            children: [
              (0, t.jsx)("div", {
                className: (0, W.A)(c().IgnoredCtn, Te && c().Active),
                children: (0, t.jsxs)("div", {
                  className: (0, W.A)(c().IgnoredInfo, Te && c().Active),
                  children: [
                    (0, t.jsx)("div", {
                      className: c().IgnoredTitle,
                      children: (0, i.we)("#DiscoveryQueue_Ignored"),
                    }),
                    (0, t.jsx)("div", {
                      className: c().IgnoredDescription,
                      children: (0, i.we)(
                        "#DiscoveryQueue_IgnoredConfirmation",
                      ),
                    }),
                    (0, t.jsxs)(d.Z, {
                      className: (0, W.A)(
                        c().QueueButton,
                        c().UndoIgnoreButton,
                      ),
                      onClick: xe,
                      children: [
                        Pe &&
                          (0, t.jsx)(k.$m, {
                            button: _.g4.X,
                            type: k.wt.Light,
                            size: k.xY.Medium,
                          }),
                        (0, i.we)("#DiscoveryQueue_Undo"),
                      ],
                    }),
                  ],
                }),
              }),
              pe,
              Ce,
            ],
          });
        }
        function Ke(B, p, h, E) {
          const K = (0, D.n9)();
          return g.useMemo(() => {
            if (!B) return;
            const ee = (0, l.Bk)(h),
              j = p >= X.QV.qy ? "?inqueue=" + p + (h ? "_" + ee : "") : "",
              $ = (0, D.bV)(K, B.GetStorePageURL(E) + j);
            return (0, ae.NT)($);
          }, [E, p, K, B, h]);
        }
        function Qe(B) {
          const {
              appID: p,
              bShowMinimizedDisplay: h,
              eStoreDiscoveryQueueType: E,
              storePageFilter: K,
              bPreferDemoStorePage: U,
              appAriaIDs: ee,
            } = B,
            [j] = (0, H.t7)(p, fe.G),
            $ = (0, de.$5)(p),
            { bIsIgnored: pe, fnUpdateIgnored: Ce } = (0, ve.TK)(p),
            { bIsWishlisted: ge, fnUpdateWishlist: Le } = (0, ve.u4)(p),
            Pe = Ke(j, E, K, U),
            he = (0, o.Qn)(),
            be = he;
          if (!j) return;
          const We = j.GetAssets().GetLibraryCapsuleURL(),
            Te = j.GetAssets().GetHeaderURL();
          return (0, t.jsxs)(d.Z, {
            className: c().AppDetailsCtn,
            children: [
              (0, t.jsxs)("div", {
                className: c().AppDetailsCtnTop,
                children: [
                  We &&
                    (0, t.jsxs)("a", {
                      className: (0, W.A)(c().CapsuleLink),
                      href: Pe,
                      children: [
                        (0, t.jsx)("img", {
                          className: c().AppLibraryHero,
                          src: We,
                        }),
                        Te &&
                          (0, t.jsx)("img", {
                            className: c().AppHeader,
                            src: Te,
                          }),
                      ],
                    }),
                  (0, t.jsxs)("div", {
                    id: ee.nameId,
                    className: c().RightColumn,
                    children: [
                      (0, t.jsx)("a", {
                        className: (0, W.A)(c().AppName),
                        href: Pe,
                        children: j.GetName(),
                      }),
                      (0, t.jsx)(oe.NF, { bSingleLineMode: !0, id: $ }),
                    ],
                  }),
                  (0, t.jsx)(ke, {
                    rgTagIDs: j.GetTagIDs(),
                    ariaLabelID: ee.tagsId,
                  }),
                  (0, t.jsx)("div", {
                    className: c().AppReviews,
                    id: ee.reviewId,
                    children: (0, t.jsx)(n.J, {
                      bShowTooltip: !0,
                      bTruncateTotalReviews: h,
                      id: $,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    id: ee.relevanceId,
                    className: c().AppRelevanceCtn,
                    children: (0, t.jsx)(mt, {
                      bHideDescription: he,
                      bShowAvatars: !h,
                      storeItem: j,
                      appID: p,
                    }),
                  }),
                ],
              }),
              !he &&
                (0, t.jsx)("div", {
                  className: c().AppActionButtonsCtn,
                  children: (0, t.jsx)("div", {
                    id: ee.buttonsId,
                    className: c().AppActionJustButtonsCtn,
                    children: (0, t.jsxs)("div", {
                      className: c().ButtonsRowWrap,
                      children: [
                        j.BHasDemo() &&
                          (0, t.jsx)(m.j, {
                            id: $,
                            className: (0, W.A)(
                              c().QueueButton,
                              c().Primary,
                              c().Launch,
                            ),
                          }),
                        (0, t.jsxs)("a", {
                          className: (0, W.A)(c().QueueButton, c().Primary),
                          href: Pe,
                          children: [
                            be &&
                              (0, t.jsx)(k.$m, {
                                button: _.g4.Y,
                                type: k.wt.Light,
                                size: k.xY.Medium,
                                additionalClassName: c().YGlyph,
                              }),
                            " ",
                            (0, i.we)("#DiscoveryQueue_ViewStorePage"),
                          ],
                        }),
                        (0, t.jsx)($e.he, {
                          toolTipContent: ge
                            ? (0, i.we)("#RemoveFromWishlist_ttip")
                            : (0, i.we)("#AddToWishlist_ttip"),
                          children: (0, t.jsxs)(d.Z, {
                            "aria-label": ge
                              ? (0, i.we)("#Sale_RemoveFromWishlist")
                              : (0, i.we)("#Sale_AddToWishlist"),
                            focusable: !0,
                            className: (0, W.A)(
                              c().QueueButton,
                              ge && c().Active,
                            ),
                            onClick: Le,
                            children: [
                              be &&
                                (0, t.jsx)(k.$m, {
                                  button: _.g4.Y,
                                  type: k.wt.Light,
                                  size: k.xY.Medium,
                                  additionalClassName: c().YGlyph,
                                }),
                              ge
                                ? (0, t.jsx)(q.qnF, {})
                                : (0, t.jsx)(q.T4m, {}),
                            ],
                          }),
                        }),
                        (0, t.jsx)($e.he, {
                          toolTipContent: (0, i.we)(
                            "#SaleTrailerCarousel_IgnoreLink_ttip",
                          ),
                          children: (0, t.jsx)(d.Z, {
                            "aria-label": (0, i.we)(
                              "#DiscoveryQueue_IgnoreLink",
                            ),
                            focusable: !0,
                            className: (0, W.A)(
                              c().QueueButton,
                              pe && c().Active,
                            ),
                            onClick: Ce,
                            children: (0, t.jsx)(q.NtH, {}),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        }
        function ke(B) {
          const { rgTagIDs: p, ariaLabelID: h } = B,
            K = [...(0, ve.W3)(p)].slice(0, 8);
          return (0, t.jsx)("div", {
            id: h,
            role: "list",
            className: c().AppTagsCtn,
            children: K.map((U) =>
              (0, t.jsx)(Q.Fz, { className: c().TagEntry, tagID: U }, U),
            ),
          });
        }
        function Oe() {
          const B = g.useId(),
            p = g.useId(),
            h = g.useId(),
            E = g.useId(),
            K = g.useId();
          return {
            nameId: B,
            tagsId: p,
            reviewId: h,
            relevanceId: E,
            buttonsId: K,
          };
        }
        var Ne = e(24245),
          Ge = e(85742),
          He = e(54528),
          Ze = e(94162);
        const tt = new f.wd("DiscoveryQueueWizard").Debug,
          Be = 1,
          Je = 1400,
          Re = "discoveryqueue2022";
        async function qe(B, p, h, E) {
          let K = [],
            U = !1;
          try {
            const { appids: ee, exhausted: j } = await l.aI
              .Get()
              .GetDiscoveryQueueAppsOfType(B, p, E);
            (K = [...ee]),
              (U = j),
              h && K.findIndex(($) => $ === h) === -1 && K.unshift(h),
              await Y.A.Get().QueueMultipleAppRequests(K, {
                ...fe.G,
                ...Ge.LB,
              });
          } catch (ee) {
            console.error("Failed getting discovery queue apps", ee);
          }
          return { appids: K, exhausted: U };
        }
        function st(B) {
          const [p, h] = g.useState(!1),
            E = (0, N.KV)();
          return (
            (0, g.useEffect)(() => {
              l.aI.Init(E), h(!0);
            }, [E]),
            p ? (0, t.jsx)(et, { ...B }) : null
          );
        }
        function et(B) {
          const {
              eStoreDiscoveryQueueType: p,
              fnCloseModal: h,
              includeAppID: E,
              storePageFilter: K,
              bPreferDemoStorePage: U,
              bShowAOAutoPlayWarning: ee,
            } = B,
            [j, $] = g.useState(0),
            [pe, Ce] = g.useState(void 0),
            [ge, Le] = g.useState(0),
            he = (0, O.R7)()?.ownerWindow || window,
            be = (0, D.ru)(Re),
            [We, Te] = g.useState(0),
            xe = (0, C.b)();
          (0, y.E)("ArrowLeft", () => Se(!1), !0, !0),
            (0, y.E)("Left", () => Se(!1), !0, !0),
            (0, y.E)("ArrowRight", () => Se(!0), !0, !0),
            (0, y.E)("Right", () => Se(!0), !0, !0),
            (0, y.E)("Escape", () => h?.(), !0, !0),
            (0, y.E)("Esc", () => h?.(), !0, !0);
          const Xe = g.useMemo(() => he.innerWidth < Je, [he]),
            { fnGetDiscoveryQueue: _e, rgAppIDs: re } = we(p, K, E);
          g.useEffect(() => {
            _e(!0), w.Fm.Get().HintLoad();
          }, []),
            g.useEffect(() => {
              const ce = re[j];
              ce != pe && (ce && ce != Be && xe.AddImpression(ce, be), Ce(ce));
            }, [xe, j, pe, re, be]);
          const Se = (ce) => {
            const Bt = u.OQ(j + (ce ? 1 : -1), 0, re.length - 1);
            Bt != j &&
              ($(Bt),
              tt("New selected index: ", Bt, " Prev selected index: ", j));
          };
          g.useEffect(() => {
            re?.length &&
              re[j] !== Be &&
              (Te((ce) => ce + 1),
              l.aI
                .Get()
                .SkipDiscoveryQueueItem(re[j], p, K)
                .then(() => Te((ce) => ce - 1)));
          }, [p, j, re, K]),
            g.useEffect(() => {
              re.length != ge &&
                (Le(re.length), re.length > ge && re[j] == Be && $(j + 1));
            }, [ge, j, re]);
          const [Ae] = g.useState(new Map()),
            le = (0, l.WX)(p, K),
            je = !(0, te.c5)() && j > 0,
            lt = !(0, te.c5)() && j < re.length - 1,
            {
              refContainer: ct,
              bIsDragging: Ie,
              nDragOffset: ze,
              nDragSelectedOffsetIndex: At,
              handleTouchStart: bt,
              handleTouchMove: Et,
              handleTouchEnd: Mt,
            } = Ye((ce) => $(ce), re.length),
            Pt = (ce) => {
              ce.target == ce.currentTarget && (h?.(), ce.stopPropagation());
            },
            Ct = (ce) => u.W(j + ce, re) && (u.LA(ce, -1, 1) || Ie),
            Tt = (0, D.aL)(o.TS.STORE_BASE_URL + "explore?dq=widget"),
            xt = !(0, o.Qn)() && !(0, Ze.$W)() && p === X.QV.qy,
            jt = (0, D.aL)(o.TS.STORE_BASE_URL + "explore/next/" + X.QV.qy),
            Ot = re[j] !== Be,
            { nQueueStart: Lt, nCount: Wt } = pt(j, re);
          return (0, t.jsx)(ne.Ay, {
            feature: Re,
            children: (0, t.jsx)(d.Z, {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: c().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: z.iU.LAST,
              onCancelButton: () => h?.(),
              onCancelActionDescription: (0, i.we)("#Button_Close"),
              children: (0, t.jsxs)("div", {
                className: c().DiscoveryQueueWrapper,
                onClick: Pt,
                children: [
                  le.length > 0 &&
                    (0, t.jsx)(d.Z, {
                      "flow-children": "row",
                      className: c().DiscoveryQueueName,
                      children: le,
                    }),
                  (0, t.jsxs)(d.Z, {
                    "flow-children": "row",
                    className: c().TopBarCtn,
                    children: [
                      (0, t.jsx)(d.Z, {
                        className: c().LearnMore,
                        children: (0, i.oW)(
                          "#DiscoveryQueue_LearnMore_Default",
                          (0, t.jsx)(v.Ii, {
                            className: c().LearnMoreLink,
                            href: (0, ae.NT)(Tt),
                          }),
                        ),
                      }),
                      xt &&
                        (0, t.jsx)(d.Z, {
                          className: c().ClassicQueueLink,
                          children: (0, i.oW)(
                            "#DiscoveryQueue_ClassicQueue_Link",
                            (0, t.jsx)(v.Ii, {
                              className: c().LearnMoreLink,
                              href: (0, ae.NT)(jt),
                            }),
                          ),
                        }),
                      (0, t.jsx)(d.Z, {
                        className: c().ControlsCtn,
                        children: (0, t.jsx)(d.Z, {
                          focusable: !0,
                          className: c().QueueButton,
                          onClick: h,
                          "aria-label": (0, i.we)("#Button_Close"),
                          onActivate: () => h && h(),
                          children: (0, t.jsx)(q.X, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(d.Z, {
                    role: "button",
                    "aria-label": (0, i.we)("#Carousel_Next"),
                    onClick: () => Se(!1),
                    className: (0, W.A)(
                      c().QueueNavArrow,
                      c().LeftArrow,
                      je && c().Enable,
                    ),
                    children: (0, t.jsx)(q.l8x, { angle: 180 }),
                  }),
                  (0, t.jsx)(d.Z, {
                    role: "button",
                    "aria-label": (0, i.we)("#Carousel_Prev"),
                    onClick: () => Se(!0),
                    className: (0, W.A)(
                      c().QueueNavArrow,
                      c().RightArrow,
                      lt && c().Enable,
                    ),
                    children: (0, t.jsx)(q.l8x, { angle: 0 }),
                  }),
                  (0, t.jsx)(d.Z, {
                    ref: ct,
                    className: c().DiscoveryQueueItemsCtn,
                    focusable: !1,
                    onTouchStart: bt,
                    onTouchMove: Et,
                    onTouchEnd: Mt,
                    children: [-2, -1, 0, 1, 2].map((ce) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className: (0, W.A)({
                            [c().DiscoveryQueueItemPositioner]: !0,
                            [c().Dragging]: Ie,
                            [c().InRange]: Ct(ce),
                            [c().FarLeft]: ce == -2,
                            [c().Left]: ce == -1,
                            [c().Current]: ce == 0,
                            [c().Right]: ce == 1,
                            [c().FarRight]: ce == 2,
                            [c().Selected]: ce + At == 0,
                          }),
                          style: { "--dragOffsetX": `${ze}px` },
                          children:
                            Ct(ce) &&
                            (0, t.jsx)(gt, {
                              eStoreDiscoveryQueueType: p,
                              storePageFilter: K,
                              rgAppIDs: re,
                              index: j + ce,
                              bShowMinimizedDisplay: Xe,
                              selectedIndex: j,
                              bPreferDemoStorePage: !!U,
                              mapViewedAppCount: Ae,
                              fnCloseModal: h,
                              fnLoadNextQueue: () => _e(!1),
                              fnAdvance: Se,
                              bSkipAppRequestPending: We != 0,
                              showAOAutoPlayWarning: !!ee,
                            }),
                        },
                        j + ce,
                      ),
                    ),
                  }),
                  (0, t.jsx)(Ne.A, {
                    className: (0, W.A)(!Ot && c().ProgressHidden),
                    showPriorAsActive: !0,
                    count: Wt,
                    selectedIndex: j - Lt,
                  }),
                ],
              }),
            }),
          });
        }
        function pt(B, p) {
          let h = 0;
          for (let U = 0; U < B; U++) p[U] == Be && (h = U + 1);
          let E = 0;
          for (let U = B; U < p.length; U++)
            if (p[U] == Be) {
              E = U;
              break;
            } else U == p.length - 1 && (E = p.length);
          const K = E - h;
          return { nQueueStart: h, nQueueEnd: E, nCount: K };
        }
        function Ye(B, p) {
          const h = g.useRef(null),
            [E, K] = g.useState(0),
            [U, ee] = g.useState(!1),
            [j, $] = g.useState(0),
            pe = g.useRef(0),
            Ce = 50;
          return {
            refContainer: h,
            bIsDragging: U,
            nDragOffset: E,
            nDragSelectedOffsetIndex: j,
            handleTouchStart: (he) => {
              ee(!0), (pe.current = he.touches[0].clientX), K(0), $(0);
            },
            handleTouchMove: (he) => {
              if (!U) return;
              const be = he.touches[0].clientX - pe.current;
              K(be), $(E > Ce ? 1 : E < -Ce ? -1 : 0);
            },
            handleTouchEnd: () => {
              U &&
                (ee(!1),
                E > Ce
                  ? B((he) => Math.max(he - 1, 0))
                  : E < -Ce && B((he) => Math.min(he + 1, p - 1)),
                K(0),
                $(0));
            },
          };
        }
        function gt(B) {
          const {
              eStoreDiscoveryQueueType: p,
              storePageFilter: h,
              rgAppIDs: E,
              index: K,
              bShowMinimizedDisplay: U,
              selectedIndex: ee,
              bPreferDemoStorePage: j,
              mapViewedAppCount: $,
              fnCloseModal: pe,
              fnLoadNextQueue: Ce,
              fnAdvance: ge,
              bSkipAppRequestPending: Le,
              showAOAutoPlayWarning: Pe,
            } = B,
            [he, be] = g.useState(!1),
            We = Oe(),
            Te = () => {
              ee != K && ge(K > ee);
            },
            xe = ee === K,
            Xe = g.useRef(xe);
          if (
            (g.useEffect(() => {
              const re = Xe.current;
              if (((Xe.current = xe), re && !xe)) {
                be(!0);
                const Se = setTimeout(() => be(!1), 500);
                return () => {
                  clearTimeout(Se);
                };
              }
            }, [xe]),
            E[K] == Be)
          ) {
            let re = 0;
            for (let Ae = K - 1; Ae >= 0; Ae--) E[Ae] == Be && (re += 1);
            let Se = 0;
            for (let Ae = K - 1; Ae >= 0 && E[Ae] !== Be; Ae--) Se++;
            return (
              $.has(re) ||
                $.set(
                  re,
                  l.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(p, h),
                ),
              (0, g.createElement)(yt, {
                ...B,
                key: ee,
                selected: xe,
                lastCard: ee == E.length - 1,
                fnLoadNextQueue: Ce,
                fnCloseModal: pe,
                summaryCardIndex: re,
                eStoreDiscoveryQueueType: p,
                viewedAppCount: ($.get(re) || 0) + Se,
                fnFocused: Te,
                fnAdvance: () => ge(!0),
                bSkipAppRequestPending: Le,
              })
            );
          }
          const _e = xe || Xe.current || he;
          return (0, t.jsx)(Me, {
            appAriaIDs: We,
            eStoreDiscoveryQueueType: p,
            storePageFilter: h,
            selected: xe,
            appID: E[K],
            bPreferDemoStorePage: j,
            fnFocused: Te,
            elVideo: (0, t.jsx)(ve.y3, {
              appID: E[K],
              focused: _e,
              showAOAutoPlayWarning: Pe,
              fnComplete: void 0,
            }),
            elDetails: (0, t.jsx)(Qe, {
              appID: E[K],
              bShowMinimizedDisplay: U,
              eStoreDiscoveryQueueType: p,
              storePageFilter: h,
              bPreferDemoStorePage: j,
              appAriaIDs: We,
            }),
          });
        }
        function we(B, p, h) {
          const [E, K] = g.useState([]),
            U = (0, I.m)("DiscoveryQueueWizard");
          return {
            fnGetDiscoveryQueue: async (j) => {
              let { appids: $ } = await qe(B, !j, j && h, p);
              if (j && !$.length) {
                let { appids: pe } = await qe(B, !0, void 0, p);
                $ = pe;
              }
              if (!U?.token?.reason) {
                const pe = [...(E ?? []), ...$, Be];
                K(pe);
              }
              tt("Loaded new discovery queue apps: ", $);
            },
            rgAppIDs: E,
          };
        }
        function yt(B) {
          const {
              eStoreDiscoveryQueueType: p,
              fnCloseModal: h,
              summaryCardIndex: E,
              lastCard: K,
              selected: U,
              fnLoadNextQueue: ee,
              storePageFilter: j,
              fnDisplaySummaryReward: $,
              viewedAppCount: pe,
              fnFocused: Ce,
              fnAdvance: ge,
              bSkipAppRequestPending: Le,
            } = B,
            [Pe, he] = g.useState(!1),
            be = (0, o.Qn)(),
            We = (0, F.Qt)(V.L6.Jz, o.TS.LANGUAGE, !1),
            [Te, xe] = g.useState(0),
            [Xe, _e] = g.useState(0),
            { data: re } = (0, He.F0)();
          g.useEffect(() => {
            U &&
              !Pe &&
              re &&
              w.Fm.Get()
                .HintLoad()
                .then(() => {
                  l.aI
                    .Get()
                    .LoadSkippedApps(p, j)
                    .then((Ie) => {
                      xe(Ie.reduce((ze, At) => (re.has(At) ? ze + 1 : ze), 0)),
                        _e(
                          Ie.reduce(
                            (ze, At) =>
                              w.Fm.Get().BIsGameIgnored(At) ? ze + 1 : ze,
                            0,
                          ),
                        ),
                        he(!0);
                    });
                });
          }, [Pe, p, U, j, re]);
          const [Se, Ae] = g.useState(!1),
            le = (0, l.IH)(p, j),
            je = (0, I.m)("DiscoveryQueueSummary"),
            lt = async () => {
              if (!K) {
                ge();
                return;
              }
              Se || (Ae(!0), await ee(), je?.token?.reason || Ae(!1));
            };
          return (0, t.jsxs)(ut, {
            selected: U,
            fnFocused: Ce,
            fnOnContinue: lt,
            fnCloseModal: h,
            bLoaded: Pe,
            children: [
              (0, t.jsxs)("div", {
                className: c().SummaryContentCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: c().SummaryTitle,
                    children: (0, i.we)("#DiscoveryQueue_SummaryTitle"),
                  }),
                  !le &&
                    U &&
                    We.data?.definition &&
                    (0, t.jsx)(ht, {
                      bSkipAppRequestPending: Le,
                      summaryCardIdx: E,
                    }),
                  (0, t.jsx)("div", {
                    className: c().YourStats,
                    children: (0, i.we)("#DiscoveryQueue_YourStats"),
                  }),
                  (0, t.jsxs)(d.Z, {
                    "flow-children": "row",
                    className: c().SummaryGrid,
                    children: [
                      (0, t.jsxs)("div", {
                        className: c().GridItem,
                        children: [
                          (0, t.jsx)("div", {
                            className: c().GridTitle,
                            children: (0, i.we)("#DiscoveryQueue_ViewedCaps"),
                          }),
                          (0, t.jsx)("div", {
                            className: c().GridNumber,
                            children: (0, Ue.D)(pe),
                          }),
                          (0, t.jsx)("div", {
                            className: c().GridSubTitle,
                            children: (0, i.we)("#DiscoveryQueue_Titles"),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: c().GridItem,
                        children: [
                          (0, t.jsx)("div", {
                            className: c().GridTitle,
                            children: (0, i.we)(
                              "#DiscoveryQueue_WishlistedCaps",
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: c().GridNumber,
                            children: (0, Ue.D)(Te),
                          }),
                          (0, t.jsx)(D.Fh, {
                            className: (0, W.A)(c().GridSubTitle, c().TextLink),
                            href: (0, ae.NT)(o.TS.STORE_BASE_URL + "wishlist"),
                            children: (0, i.we)("#DiscoveryQueue_ViewWishlist"),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: c().GridItem,
                        children: [
                          (0, t.jsx)("div", {
                            className: c().GridTitle,
                            children: (0, i.we)("#DiscoveryQueue_IgnoredCaps"),
                          }),
                          (0, t.jsx)("div", {
                            className: c().GridNumber,
                            children: (0, Ue.D)(Xe),
                          }),
                          (0, t.jsx)(D.Fh, {
                            className: (0, W.A)(c().GridSubTitle, c().TextLink),
                            href: (0, ae.NT)(
                              o.TS.STORE_BASE_URL + "account/notinterested",
                            ),
                            children: (0, i.we)("#DiscoveryQueue_ViewIgnored"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  !be &&
                    (0, t.jsxs)(d.Z, {
                      className: c().SummaryActionButtonsCtn,
                      children: [
                        (0, t.jsx)(d.Z, {
                          className: (0, W.A)(c().QueueButton, c().Wide),
                          onClick: h,
                          children: (0, i.we)("#ActionButtonLabelDone"),
                        }),
                        !le &&
                          (0, t.jsx)(d.Z, {
                            className: (0, W.A)(
                              Se && c().Disabled,
                              c().QueueButton,
                              c().Primary,
                              c().Wide,
                            ),
                            onClick: lt,
                            children: Se
                              ? (0, i.we)("#Loading")
                              : (0, i.we)("#Button_Continue"),
                          }),
                      ],
                    }),
                ],
              }),
              !le && (0, t.jsx)(t.Fragment, { children: !!$ && $(E + 1) }),
            ],
          });
        }
        function ut(B) {
          const {
              children: p,
              selected: h,
              fnOnContinue: E,
              fnCloseModal: K,
              fnFocused: U,
              bLoaded: ee,
            } = B,
            j = (0, D.aL)(o.TS.STORE_BASE_URL + "wishlist"),
            pe = (0, O.R7)()?.ownerWindow || window,
            Ce = () => {
              pe.location.href = (0, ae.NT)(j);
            },
            ge = g.useRef(void 0);
          return (
            g.useEffect(() => {
              h && ge.current && ge.current.focus({ preventScroll: !0 });
            }, [h]),
            (0, t.jsx)(r.YZ, {
              ref: ge,
              "aria-live": "polite",
              className: (0, W.A)(
                c().SummaryCtn,
                c().DiscoveryQueueApp,
                h && c().Selected,
              ),
              onOptionsActionDescription: (0, i.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: Ce,
              onOKActionDescription: (0, i.we)("#Button_Continue"),
              onOKButton: () => {
                E();
              },
              onCancelActionDescription: (0, i.we)("#ActionButtonLabelDone"),
              onCancelButton: () => K && K(),
              fnScrollIntoViewHandler: () => (U(), !0),
              children: ee
                ? p
                : (0, t.jsx)(P.t, {
                    className: c().DiscoveryQueueThrobber,
                    msDelayAppear: 200,
                    size: "large",
                    position: "center",
                  }),
            })
          );
        }
        function rt() {
          return (0, t.jsx)(d.Z, {
            className: c().SaleRewardsCtn,
            children: (0, t.jsx)(P.t, { size: "large", position: "center" }),
          });
        }
        function ht(B) {
          const { bSkipAppRequestPending: p, summaryCardIdx: h } = B;
          return p ? (0, t.jsx)(rt, {}) : (0, t.jsx)(at, { summaryCardIdx: h });
        }
        function at(B) {
          const { summaryCardIdx: p } = B,
            h = (0, F.os)(V.L6.Jz, o.TS.LANGUAGE, !1, p.toString()),
            [E] = (0, H.t7)(h?.data?.current_def?.appid, {}),
            K = (0, o.Qn)();
          if (!h?.data?.current_def || !E?.GetName().length)
            return (0, t.jsx)(rt, {});
          const U = h.data.num_items_earned,
            ee = h.data.current_def.num_items_per_def,
            j = ee - U,
            $ = (U / ee) * 100;
          return (0, t.jsxs)(d.Z, {
            className: c().SaleRewardsCtn,
            children: [
              (0, t.jsx)(S, { nPercent: $, size: 70, strokeWidth: 12 }),
              (0, t.jsxs)(d.Z, {
                className: c().RewardStatusCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: c().SaleRewardAppTitle,
                    children: (0, i.we)(
                      `#DiscoveryQueue_SaleStatus_Title${j ? "" : "_Complete"}`,
                      (0, Ue.D)(U),
                      E.GetName(),
                    ),
                  }),
                  j > 0 &&
                    (0, t.jsx)("div", {
                      className: c().SaleRewardAppTitle,
                      children: (0, i.we)(
                        "#DiscoveryQueue_SaleStatus_Desc",
                        (0, Ue.D)(j),
                        E.GetName(),
                      ),
                    }),
                  !K &&
                    (0, t.jsx)("a", {
                      href: (0, ae.NT)(
                        o.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                      ),
                      children: (0, i.we)("#DiscoveryQueue_SaleStatus_Link"),
                    }),
                ],
              }),
            ],
          });
        }
      },
      6778: (R, J, e) => {
        "use strict";
        e.d(J, { G: () => z });
        var t = e(90626),
          g = e(68312),
          v = e(57810),
          d = e(6469),
          r = e(98609);
        function z() {
          const [V, X] = (0, t.useState)(!r.iA.logged_in),
            [N] = (0, d.L2)(),
            C = (0, g.KV)();
          return (
            (0, t.useEffect)(() => {
              V || (v.aI.Init(C), X(!0));
            }, [V, C]),
            V && !N
          );
        }
      },
      24245: (R, J, e) => {
        "use strict";
        e.d(J, { A: () => z });
        var t = e(7850),
          g = e(25599),
          v = e.n(g),
          d = e(19298),
          r = e(36707);
        function z(V) {
          const {
            className: X,
            showPriorAsActive: N,
            count: C,
            selectedIndex: D,
            fnNavigate: O,
          } = V;
          return (0, t.jsx)(d.Z, {
            "flow-children": "row",
            className: (0, r.A)(v().ProgressCtn, X),
            children: Array.from({ length: C }).map((w, F) =>
              (0, t.jsx)(
                "div",
                {
                  className: (0, r.A)({
                    [v().ProgressDot]: !0,
                    [v().ProgressDotActive]: N && F < D,
                    [v().ProgressDotSelected]: F == D,
                    [v().ProgressDotClickable]: !!O,
                  }),
                  onClick: O ? () => O(F) : void 0,
                },
                "dot_" + F,
              ),
            ),
          });
        }
      },
      10739: (R, J, e) => {
        "use strict";
        e.r(J), e.d(J, { default: () => r });
        var t = e(7850),
          g = e(55051),
          v = e(90405),
          d = e(6394);
        function r() {
          return (0, t.jsx)(v.K, {
            placeholderHeight: "200px",
            rootMargin: "0px 0px 100% 0px",
            children: (0, t.jsx)(d.g, { eStoreDiscoveryQueueType: g.QV.qy }),
          });
        }
      },
      99783: (R, J, e) => {
        "use strict";
        e.r(J), e.d(J, { default: () => D });
        var t = e(7850),
          g = e(90626),
          v = e(55051),
          d = e(18210),
          r = e(6778),
          z = e(19298),
          V = e(3166),
          X = e(96538),
          N = e(88003),
          C = e(85742);
        function D(O) {
          const w = (0, r.G)(),
            { showDiscoveryQueue: F } = (0, C.GV)(v.QV.qy),
            Y = g.useCallback(() => {
              V.iA.logged_in
                ? F()
                : (0, N.pg)(
                    (0, t.jsx)(X.KG, {
                      onOK: () => {
                        window.location.href = `${V.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                      },
                      strOKButtonText: (0, d.we)(
                        "#DiscoveryQueue_Error_Login_Title",
                      ),
                      strDescription: (0, d.we)("#DiscoveryQueue_Error_Login"),
                      strTitle: (0, d.we)("#DiscoveryQueue_Error_Login_Title"),
                    }),
                    window,
                  );
            }, [F]);
          return w
            ? (0, t.jsx)(z.Z, {
                children: (0, t.jsx)("a", {
                  onClick: Y,
                  className: "experiment-button",
                  children: (0, d.we)("#DiscoveryQueue_OpenWizard"),
                }),
              })
            : (0, t.jsx)("div", {
                className: "experiment-button-placeholder",
                children: "\xA0",
              });
        }
      },
      83581: (R) => {
        R.exports = {
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
          BackgroundAnimation: "_1G9QIfwsMh2XRR-bMBE97j",
          "ItemFocusAnim-darkerGrey-nocolor": "_2bun2taA5e3StPJT3cs6jH",
          "ItemFocusAnim-darkerGrey": "_39J4X61tugDHvSmGBzKD7p",
          "ItemFocusAnim-darkGreySettings": "_13-B6AE59KUQ-ABnyKYXkP",
          "ItemFocusAnim-darkGrey": "_2xXdz148UoxpJlfyVlUo0D",
          "ItemFocusAnim-grey": "_3-Rh6nRz4sRZLRVEQKPefw",
          "ItemFocusAnim-translucent-white-10": "_1b0mYc5KheDLRLQoHqAqhU",
          "ItemFocusAnim-translucent-white-20": "_3WVHjFeBrJOv0Xsqd7X2Vp",
          "ItemFocusAnimBorder-darkGrey": "_1TaBFa6F_r2oTJvni2yNqQ",
          "ItemFocusAnim-green": "_1dPdL7c_2dvq8gAaWTSq04",
          focusAnimation: "_3BX0kUvHLGH3mZJG4BP4cc",
          hoverAnimation: "_1om-YMcnj-8DLjL_ek0CxW",
          "capsule-trans-out": "YvTbl9XD-HkAs9W3pcEgp",
        };
      },
      36054: (R) => {
        R.exports = {
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
          BackgroundAnimation: "_64dUS3S7fOwtNFhEALHhx",
          "ItemFocusAnim-darkerGrey-nocolor": "UXmjEpq-9pbtC7T5d0MPv",
          "ItemFocusAnim-darkerGrey": "_1olTI2tKYS6IUSkIpca3Qo",
          "ItemFocusAnim-darkGreySettings": "_3JjCik6ZoOCqrb2F2DUuI1",
          "ItemFocusAnim-darkGrey": "_37RRjG54p7sk3Yvb-5BDVv",
          "ItemFocusAnim-grey": "yOH4BAo3sriSZckG9yR1g",
          "ItemFocusAnim-translucent-white-10": "_1USieHqb4yVt2P3Okqs7hF",
          "ItemFocusAnim-translucent-white-20": "_2MtHgIAnILIt8d4PMuS5mi",
          "ItemFocusAnimBorder-darkGrey": "_dHmntK-X7hqNpoiZplVM",
          "ItemFocusAnim-green": "_3CT6dHnuA3SYWZrgk1Sf1Y",
          focusAnimation: "_34YOI6hVEDmEAWHAHlUXon",
          hoverAnimation: "_1UXiQtSunyxlP1LxWHXACi",
        };
      },
      56649: (R) => {
        R.exports = {
          "duration-app-launch": "800ms",
          DiscoveryQueueWidgetCtn: "_2H-U0RGd3Y9d6UKdhsGJgZ",
          WidgetText: "-B2PBNVH5puz13sQ8u0Qv",
          WidgetCapsule: "_1Bk7kRLnGpX5NKJgUqayYy",
          CloseButton: "VqFB0E0yCOFJ7UdleH5Nl",
          Y: "_31u523-OYDU23urGjLmZMv",
          BackgroundAnimation: "_1Xi-pSFWHdnqUZoL9mamhN",
          "ItemFocusAnim-darkerGrey-nocolor": "_30Zb423phvCDs3xM0hkaEE",
          "ItemFocusAnim-darkerGrey": "_1Mo4iXhlaRXgVjaGtq25YK",
          "ItemFocusAnim-darkGreySettings": "_2aBd-VP3SEE24KKFVyFsXv",
          "ItemFocusAnim-darkGrey": "_1D2t7t4aiQ0ispLkkxifr6",
          "ItemFocusAnim-grey": "_1xesYd5e59XN1JMVEsnIMY",
          "ItemFocusAnim-translucent-white-10": "_3z6L5JKa2Pwmh3aybbPsQa",
          "ItemFocusAnim-translucent-white-20": "_2q3ozadFkqcmuym9HPNbMO",
          "ItemFocusAnimBorder-darkGrey": "_1_c11GGKP0higc2_MkDCPO",
          "ItemFocusAnim-green": "_2-IPzUY6n_ibf285Pd6tDB",
          focusAnimation: "_39M5pNzI36diq2nKXni--u",
          hoverAnimation: "-rg5cQ0xDoWfXZW4k4Rug",
        };
      },
      15830: (R) => {
        R.exports = {
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
      43047: (R) => {
        R.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      40594: (R) => {
        R.exports = {
          ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
          AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
          loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
          Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
          Circular: "_3wMS41OoTPnZyEddTVwzy_",
          Full: "_3t_UEZDy1QxxcYfn3TTvD2",
        };
      },
      71477: (R) => {
        R.exports = {
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
      57834: (R) => {
        R.exports = {
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
          BackgroundAnimation: "_3tn052OQVu3Bbdx7lAg8v3",
          "ItemFocusAnim-darkerGrey-nocolor": "WFiTs9SPGUObvgDncLEFm",
          "ItemFocusAnim-darkerGrey": "_18LH9gSLwgTgUzIl1C0-pq",
          "ItemFocusAnim-darkGreySettings": "_3bomS6MjDv4c5XbYu2Caqu",
          "ItemFocusAnim-darkGrey": "_3BW-wlgbU7_7zOW8-2d7OI",
          "ItemFocusAnim-grey": "_2PCW9DVf1EkOJw0pwtlWSj",
          "ItemFocusAnim-translucent-white-10": "A-_kb_s9v8pLyRrldCupj",
          "ItemFocusAnim-translucent-white-20": "_1fugsBQAve_CPDYfcK5fou",
          "ItemFocusAnimBorder-darkGrey": "_1X5xeHixS4XJusrPGRQ4nL",
          "ItemFocusAnim-green": "guH2fAOEkfwuIvOhn0oHl",
          focusAnimation: "_2XCqyPQ8Leg6L1dwSjpULK",
          hoverAnimation: "zU1NJEk7QqOdsECL2PI2d",
        };
      },
      25599: (R) => {
        R.exports = {
          "duration-app-launch": "800ms",
          ProgressCtn: "_3ed1Al-hFnjq4HQeLo6cIT",
          ProgressDot: "_2R187sMx7MTX5XQ2KN3Xnx",
          ProgressDotActive: "_3z2pS3DFn3MEl5ZPw6lsa9",
          ProgressDotSelected: "_1qJVCZsv51RtfBGao-PV8V",
          ProgressDotClickable: "jKfeFH4S6YhaeZ7RCZ8BN",
          BackgroundAnimation: "_3B8qOyTqC7rzOP_X5kvWK-",
          "ItemFocusAnim-darkerGrey-nocolor": "_2wYIdqvoWTU_8MPGJtV4j",
          "ItemFocusAnim-darkerGrey": "_5noNLXRGVi51cgI8nYBAm",
          "ItemFocusAnim-darkGreySettings": "_3UqXfp4k1blu2wv57exkEd",
          "ItemFocusAnim-darkGrey": "_6iLF1QqShrpEW0UiF0x2o",
          "ItemFocusAnim-grey": "PuZXrV7q9vI7p-jK9x2pN",
          "ItemFocusAnim-translucent-white-10": "_2RwwslrDVdOXePDy6QCEkZ",
          "ItemFocusAnim-translucent-white-20": "_1VijReQZ-moslCOSkJYKIt",
          "ItemFocusAnimBorder-darkGrey": "_1HaTvS9ANJY56lTVTb35I3",
          "ItemFocusAnim-green": "_3mF4OtweD7vY2bcN6piLTq",
          focusAnimation: "rpa_zF1YXxbH3-m1-AI6Q",
          hoverAnimation: "_2WTZTfL3dbXnfZM3Ly10Jo",
        };
      },
    },
  ]);
})();
