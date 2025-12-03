/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2006],
  {
    31540: (e, t, r) => {
      r.d(t, { Wv: () => i });
      var i,
        n,
        a = r(80613),
        s = r.n(a),
        o = r(89068),
        l = r(56545);
      !(function (e) {
        (e[(e.k_EClanAccountFlag_None = 0)] = "k_EClanAccountFlag_None"),
          (e[(e.k_EClanAccountFlag_TrustedPress = 1)] =
            "k_EClanAccountFlag_TrustedPress"),
          (e[(e.k_EClanAccountFlag_AllowClanImages = 2)] =
            "k_EClanAccountFlag_AllowClanImages"),
          (e[(e.k_EClanAccountFlag_AllowRSSFeed = 4)] =
            "k_EClanAccountFlag_AllowRSSFeed"),
          (e[(e.k_EClanAccountFlag_AllowPartnerEventEditor = 8)] =
            "k_EClanAccountFlag_AllowPartnerEventEditor"),
          (e[(e.k_EClanAccountFlag_AllowFAQEditing = 16)] =
            "k_EClanAccountFlag_AllowFAQEditing"),
          (e[(e.k_EClanAccountFlag_AllowSalePageEditing = 32)] =
            "k_EClanAccountFlag_AllowSalePageEditing"),
          (e[(e.k_EClanAccountFlag_AllowSalePagePublishWithoutReview = 64)] =
            "k_EClanAccountFlag_AllowSalePagePublishWithoutReview"),
          (e[(e.k_EClanAccountFlag_AllowInSteamChina = 128)] =
            "k_EClanAccountFlag_AllowInSteamChina");
      })(i || (i = {}));
      class c extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.steamid || o.Sg(c.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  accept: { n: 2, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = o.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class m extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new m();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.steamid || o.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  rtime_oldest_date: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = o.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.snippets || o.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { snippets: { n: 1, c: _, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = o.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.gid || o.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  gid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  hidden: { n: 3, br: o.qM.readBool, bw: o.gp.writeBool },
                  published: { n: 4, br: o.qM.readBool, bw: o.gp.writeBool },
                  rtime32_start_time: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  event_name: {
                    n: 6,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  event_type: { n: 7, br: o.qM.readEnum, bw: o.gp.writeEnum },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = o.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.requests || o.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  requests: { n: 1, c: g, r: !0, q: !0 },
                  cursor: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = o.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || o.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  branch: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = o.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.matches || o.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  matches: { n: 1, c: y, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = o.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || o.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  build_id: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  branch: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = o.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, l.I8)(c, t), m, {
            ePrivilege: 1,
          });
        }),
          (e.GetDraftAndRecentPartnerEventSnippet = function (e, t) {
            return e.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, l.I8)(u, t),
              d,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, l.I8)(p, t),
              h,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          });
      })(n || (n = {}));
    },
    55374: (e, t, r) => {
      r.d(t, { K_: () => s, dU: () => y, eb: () => a, eh: () => g });
      var i,
        n,
        a,
        s,
        o = r(80613),
        l = r.n(o),
        c = r(89068),
        m = r(56545),
        u = r(36003);
      !(function (e) {
        (e[(e.k_EStoreCuratorRecommendationState_Recommended = 0)] =
          "k_EStoreCuratorRecommendationState_Recommended"),
          (e[(e.k_EStoreCuratorRecommendationState_NotRecommended = 1)] =
            "k_EStoreCuratorRecommendationState_NotRecommended"),
          (e[(e.k_EStoreCuratorRecommendationState_Informative = 2)] =
            "k_EStoreCuratorRecommendationState_Informative"),
          (e[(e.k_EStoreCuratorRecommendationState_CreatedApp = 3)] =
            "k_EStoreCuratorRecommendationState_CreatedApp");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_EStoreCuratorListType_Unknown = 0)] =
            "k_EStoreCuratorListType_Unknown"),
            (e[(e.k_EStoreCuratorListType_Grid = 1)] =
              "k_EStoreCuratorListType_Grid"),
            (e[(e.k_EStoreCuratorListType_Ordered = 2)] =
              "k_EStoreCuratorListType_Ordered"),
            (e[(e.k_EStoreCuratorListType_AutoDLC = 3)] =
              "k_EStoreCuratorListType_AutoDLC"),
            (e[(e.k_EStoreCuratorListType_SaleList = 4)] =
              "k_EStoreCuratorListType_SaleList");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_EStoreCuratorListState_Hidden = 0)] =
            "k_EStoreCuratorListState_Hidden"),
            (e[(e.k_EStoreCuratorListState_Public = 1)] =
              "k_EStoreCuratorListState_Public"),
            (e[(e.k_EStoreCuratorListState_Featured = 2)] =
              "k_EStoreCuratorListState_Featured");
        })(a || (a = {}));
      class d extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || c.Sg(d.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  clanid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  link_url: { n: 3, br: c.qM.readString, bw: c.gp.writeString },
                  link_text: {
                    n: 4,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  blurb: { n: 5, br: c.qM.readString, bw: c.gp.writeString },
                  time_recommended: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  comment_count: {
                    n: 7,
                    br: c.qM.readInt32,
                    bw: c.gp.writeInt32,
                  },
                  upvote_count: {
                    n: 8,
                    br: c.qM.readInt32,
                    bw: c.gp.writeInt32,
                  },
                  accountid_creator: {
                    n: 9,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  recommendation_state: {
                    n: 10,
                    br: c.qM.readEnum,
                    bw: c.gp.writeEnum,
                  },
                  received_compensation: {
                    n: 11,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  received_for_free: {
                    n: 12,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = c.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_RecommendedApp";
        }
      }
      class _ extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.listid || c.Sg(_.M()),
            o.Message.initialize(this, e, 0, -1, [10, 12, 13, 14], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  listid: {
                    n: 1,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  title: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  blurb: { n: 3, br: c.qM.readString, bw: c.gp.writeString },
                  link: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                  list_state: { n: 5, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  sort_order: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  time_created: {
                    n: 7,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  accountid: {
                    n: 9,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  apps: { n: 10, c: p, r: !0, q: !0 },
                  list_type: { n: 11, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  title_localization: { n: 12, c: u.O2, r: !0, q: !0 },
                  blurb_localization: { n: 13, c: u.O2, r: !0, q: !0 },
                  link_localization: { n: 14, c: u.O2, r: !0, q: !0 },
                  sale_clan_steamid: {
                    n: 15,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  sale_clan_event_gid: {
                    n: 16,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  list_jsondata: {
                    n: 17,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  clan_account_id: {
                    n: 18,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = c.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_ListDetails";
        }
      }
      class p extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.recommended_app || c.Sg(p.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  recommended_app: { n: 1, c: d },
                  blurb: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  sort_order: {
                    n: 3,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = c.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_ListDetails_ListItem";
        }
      }
      class g extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || c.Sg(g.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  list_state: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  start: { n: 3, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  count: { n: 4, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  return_total_only: {
                    n: 5,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  return_metadata_only: {
                    n: 6,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  max_apps: { n: 7, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                  sale_clan_event_gid: {
                    n: 8,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetLists_Request";
        }
      }
      class h extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.list_details || c.Sg(h.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  list_details: { n: 1, c: _, r: !0, q: !0 },
                  total: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetLists_Response";
        }
      }
      class y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || c.Sg(y.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  listid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Request";
        }
      }
      class f extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.list_details || c.Sg(f.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = { proto: f, fields: { list_details: { n: 1, c: _ } } }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Response";
        }
      }
      !(function (e) {
        (e.GetLists = function (e, t) {
          return e.SendMsg("StoreCuration.GetLists#1", (0, m.I8)(g, t), h, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetListDetails = function (e, t) {
            return e.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, m.I8)(y, t),
              f,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(s || (s = {}));
    },
    10622: (e, t, r) => {
      r.d(t, { Z: () => _, dV: () => u.d, rO: () => d, tp: () => u.t });
      var i = r(34629),
        n = r(14947),
        a = r(31561),
        s = r(51006),
        o = r(61859),
        l = r(22837),
        c = r(95679),
        m = r(78327),
        u = r(85044);
      function d(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
                ? (t = "watchingbroadcast")
                : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      class _ {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = l.p2.k_EPersonaStateOffline),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = u.d),
            (this.m_strAccountName = ""),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0),
            (this.m_bCommunityBanned = void 0),
            (this.m_eGamingDeviceType = l.zm.k_EGamingDeviceType_Unknown),
            (this.m_mapRichPresence = n.sH.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, n.Gn)(this),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = l.p2.k_EPersonaStateOffline),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            this.m_mapRichPresence.clear(),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0),
            (this.m_eGamingDeviceType = l.zm.k_EGamingDeviceType_Unknown);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        get is_online() {
          return (
            this.m_ePersonaState != l.p2.k_EPersonaStateOffline &&
            this.m_ePersonaState != l.p2.k_EPersonaStateInvisible
          );
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          var e;
          return (
            0 !=
            ((null !== (e = this.m_unPersonaStateFlags) && void 0 !== e
              ? e
              : 0) &
              c.nE.k_EPersonaStateFlag_InJoinableGame)
          );
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return null != this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return (
            this.m_ePersonaState == l.p2.k_EPersonaStateAway ||
            this.m_ePersonaState == l.p2.k_EPersonaStateSnooze
          );
        }
        HasStateFlag(e) {
          var t;
          return (
            0 !=
            ((null !== (t = this.m_unPersonaStateFlags) && void 0 !== t
              ? t
              : 0) &
              e)
          );
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          this.m_ePersonaState != l.p2.k_EPersonaStateOffline && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(c.nE.k_EPersonaStateFlag_Golden);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            s.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        HasRichPresenceForViewGameInfo() {
          return !!(
            this.m_mapRichPresence.has("status") ||
            this.m_mapRichPresence.has("connect") ||
            this.m_mapRichPresence.has("connect_private")
          );
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let e = s.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (
            this.HasStateFlag(c.nE.k_EPersonaStateFlag_RemotePlayTogether)
          )
            return (0, o.we)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetCurrentGameStatus() {
          return (
            this.GetCurrentGameRichPresence() ||
            this.m_mapRichPresence.get("status") ||
            ""
          );
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const r = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= r > 86400 ? e : r > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.we)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!m.TS.IN_MOBILE || e <= 60) && (0, a.tB)(e);
          let t = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.we)("#PersonaStateLastSeen_JustNow")
            : (0, o.we)("#PersonaStateLastSeen", (0, o.Hq)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case l.p2.k_EPersonaStateOffline:
            case l.p2.k_EPersonaStateInvisible:
              return this.GetOfflineStatusTime();
            case l.p2.k_EPersonaStateOnline:
              return (0, o.we)("#PersonaStateOnline");
            case l.p2.k_EPersonaStateBusy:
              return (0, o.we)("#PersonaStateBusy");
            case l.p2.k_EPersonaStateAway:
              return (0, o.we)("#PersonaStateAway");
            case l.p2.k_EPersonaStateSnooze:
              return (0, o.we)("#PersonaStateSnooze");
            case l.p2.k_EPersonaStateLookingToTrade:
              return (0, o.we)("#PersonaStateLookingToTrade");
            case l.p2.k_EPersonaStateLookingToPlay:
              return (0, o.we)("#PersonaStateLookingToPlay");
            default:
              return "";
          }
        }
        get has_public_party_beacon() {
          return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
        }
        get player_group() {
          return this.m_mapRichPresence.has("steam_player_group")
            ? this.m_mapRichPresence.get("steam_player_group")
            : "";
        }
        get player_group_size() {
          return this.m_mapRichPresence.has("steam_player_group_size")
            ? Number.parseInt(
                this.m_mapRichPresence.get("steam_player_group_size"),
              )
            : 0;
        }
        get online_state() {
          return this.is_online
            ? this.is_ingame
              ? "in-game"
              : this.m_broadcastAccountId
                ? "watchingbroadcast"
                : "online"
            : "offline";
        }
        BHasAvatarSet() {
          return this.m_strAvatarHash != u.d;
        }
        get avatar_url() {
          return (0, u.t)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, u.t)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, u.t)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, r) {
          if (t.has_public_party_beacon) {
            if (!r.has_public_party_beacon) return -1;
          } else {
            if (r.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!r.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!r.is_awayOrSnooze) return 1;
              } else if (r.is_awayOrSnooze) return -1;
            } else if (r.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!r.is_online) return -1;
          } else if (r.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!r.is_awayOrSnooze) return 1;
            } else if (r.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${m.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${m.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, i.Cg)([n.sH], _.prototype, "m_bInitialized", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_ePersonaState", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_unGamePlayedAppID", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_gameid", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_unPersonaStateFlags", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_strPlayerName", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_strAvatarHash", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_strAccountName", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_rtLastSeenOnline", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_strGameExtraInfo", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_unGameServerIP", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_unGameServerPort", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_game_lobby_id", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_bPlayerNamePending", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_bAvatarPending", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_broadcastId", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_broadcastAccountId", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_broadcastAppId", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_broadcastViewerCount", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_strBroadcastTitle", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_bCommunityBanned", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_eGamingDeviceType", void 0),
        (0, i.Cg)([n.sH], _.prototype, "m_bNameInitialized", void 0);
    },
    4796: (e, t, r) => {
      r.d(t, {
        Ao: () => w,
        SM: () => i,
        TB: () => B,
        W$: () => b,
        Yp: () => S,
        _5: () => v,
        ac: () => f,
      });
      var i,
        n = r(34629),
        a = r(41735),
        s = r.n(a),
        o = r(14947),
        l = r(90626),
        c = r(22837),
        m = r(17720),
        u = r(81393),
        d = r(78327),
        _ = r(67165),
        p = r(26161),
        g = r(31540),
        h = r(60746);
      !(function (e) {
        (e[(e.Sale = 0)] = "Sale"),
          (e[(e.UpdateLandingPage = 1)] = "UpdateLandingPage"),
          (e[(e.CreatorHome = 2)] = "CreatorHome");
      })(i || (i = {}));
      class y {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, o.Gn)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, o.h5)(() => {
              let e = (0, d.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, o.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, u.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, u.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new m.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : c.gS.k_Lang_English,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            curator_title: e.curator_title,
            curator_description: e.curator_description,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, u.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(e))
            return this.m_mapAppIDToClanInfo.get(e);
          let t = "appid_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const t =
            d.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let r = null;
          try {
            r = (await s().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return r
            ? (this.InternalSetupValue(r), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "storevanity_" + (null == e ? void 0 : e.toLocaleLowerCase());
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const t =
            d.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let r = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  null == e ? void 0 : e.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            d.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let r = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let r = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = m.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const r =
            d.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let i = await s().get(r, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(i.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return m.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, u.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = _.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            d.TS.COMMUNITY_BASE_URL +
            (r.vanity_url
              ? "groups/" + r.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, n.Cg)([o.sH], y.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.Cg)([o.sH], y.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.Cg)([o.sH], y.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.Cg)([o.XI], y.prototype, "RegisterClanData", null),
        (0, n.Cg)([o.XI], y.prototype, "InternalSetupValue", null);
      const f = new y();
      function B(e) {
        const [t, r] = (0, l.useState)(
            e ? f.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [i, n] = (0, l.useState)(!!e && !f.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, l.useEffect)(() => {
            if (e)
              if (f.BHasClanInfoLoadedByAccountID(e))
                r(f.GetClanInfoByClanAccountID(e)), n(!1);
              else {
                n(!0);
                const t = m.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                f.LoadClanInfoForClanSteamID(t)
                  .then((e) => {
                    r(null != e ? e : void 0), n(!1);
                  })
                  .catch((t) =>
                    console.error(`Failed to load clan info ${e}`, t),
                  );
              }
            else r(void 0), n(!1);
          }, [e]),
          [i, t]
        );
      }
      function b(e) {
        const [t, r] = (0, l.useState)(f.GetOGGClanInfo(e));
        return (
          (0, l.useEffect)(() => {
            t || f.LoadOGGClanInfoForGroupVanity(e).then(r);
          }, [t, e]),
          t
        );
      }
      function S(e) {
        const t = e.BIsOGGEvent(),
          r = h.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        if (t) return { bVisible: !1 };
        if (e.GetEventType() == c.Mv.k_ECreatorHome) return { bVisible: !1 };
        if (e.BHasSaleEnabled()) return { bVisible: !0 };
        if (
          e.jsondata.clone_from_event_gid &&
          e.jsondata.clone_from_sale_enabled
        )
          return { bVisible: !0 };
        if (e.clanSteamID.GetAccountID() == (0, p.H)()) return { bVisible: !1 };
        const i = _.pF.GetCreatorHome(e.clanSteamID);
        return i &&
          i.BHasClanAccountFlagSet(g.Wv.k_EClanAccountFlag_AllowSalePageEditing)
          ? { bVisible: !0 }
          : r
            ? { bVisible: !0, bValveOnly: !0 }
            : { bVisible: !1 };
      }
      function v(e) {
        const t = e.BIsOGGEvent(),
          r = h.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        return t
          ? e.BHasSaleEnabled()
            ? { bVisible: !0 }
            : d.TS.EUNIVERSE == c.Bn.k_EUniversePublic
              ? { bVisible: !1 }
              : r && e.GetEventType() == c.Mv.k_EMajorUpdateEvent
                ? { bVisible: !0, bValveOnly: !0 }
                : { bVisible: !1 }
          : { bVisible: !1 };
      }
      function w(e) {
        const t = e.BIsOGGEvent();
        h.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        return t || e.GetEventType() != c.Mv.k_ECreatorHome
          ? { bVisible: !1 }
          : e.BHasSaleEnabled()
            ? { bVisible: !0 }
            : (e.clanSteamID.GetAccountID(), (0, p.H)(), { bVisible: !1 });
      }
      window.g_ClanStore = f;
    },
    67165: (e, t, r) => {
      r.d(t, {
        mD: () => k,
        ie: () => j,
        A2: () => U,
        R7: () => L,
        pF: () => P,
        FV: () => O,
        $$: () => W,
      });
      var i,
        n,
        a = r(34629),
        s = r(22837),
        o = r(56545),
        l = r(80613),
        c = r.n(l),
        m = r(89068);
      !(function (e) {
        (e[(e.k_EAppDevsRelationship_Unknown = 0)] =
          "k_EAppDevsRelationship_Unknown"),
          (e[(e.k_EAppDevsRelationship_Publisher = 1)] =
            "k_EAppDevsRelationship_Publisher"),
          (e[(e.k_EAppDevsRelationship_Developer = 2)] =
            "k_EAppDevsRelationship_Developer"),
          (e[(e.k_EAppDevsRelationship_Publisher_Developer = 3)] =
            "k_EAppDevsRelationship_Publisher_Developer"),
          (e[(e.k_EAppDevsRelationship_MacPortDeveloper = 4)] =
            "k_EAppDevsRelationship_MacPortDeveloper"),
          (e[(e.k_EAppDevsRelationship_LinuxPortDeveloper = 5)] =
            "k_EAppDevsRelationship_LinuxPortDeveloper"),
          (e[(e.k_EAppDevsRelationship_Franchise = 6)] =
            "k_EAppDevsRelationship_Franchise"),
          (e[(e.k_EAppDevsRelationship_MAX = 7)] =
            "k_EAppDevsRelationship_MAX");
      })(i || (i = {}));
      class u extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || m.Sg(u.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  linkname: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  json: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = m.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class d extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.clan_account_id || m.Sg(d.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = m.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class _ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || m.Sg(_.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  link: { n: 2, c: u },
                  remove: {
                    n: 3,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = m.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || m.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = m.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.links || m.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { links: { n: 1, c: u, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = m.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.clan_account_ids || m.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = m.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.results || m.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { results: { n: 1, c: d, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = m.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.partnerid || m.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  partnerid: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = m.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class b extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.results || m.Sg(b.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { results: { n: 1, c: S, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = m.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class S extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clan_accountid || m.Sg(S.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = m.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, o.I8)(_, t),
            p,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, o.I8)(g, t),
              h,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, o.I8)(y, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, o.I8)(B, t),
              b,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(n || (n = {}));
      var v = r(55374),
        w = r(88942),
        I = r(41735),
        C = r.n(I),
        M = r(14947),
        A = r(37085),
        T = r(31540),
        R = r(78327);
      class E {
        constructor(e) {
          (this.m_appidList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_linkedEvent = void 0),
            (this.m_mapListInfo = new Map()),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (0, M.Gn)(this),
            (this.m_clanSteamID = e);
        }
        Initialize(e) {
          var t, r;
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags =
              null !== (t = e.clan_account_flags) && void 0 !== t ? t : 0),
            (this.m_linkedEvent = e.linked_event),
            (this.m_mapListInfo = new Map(
              Object.entries(
                null !== (r = e.list_info) && void 0 !== r ? r : {},
              ),
            )),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(
            this.m_clanAccountFlags &
              T.Wv.k_EClanAccountFlag_AllowPartnerEventEditor,
          );
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  R.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  R.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return R.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            R.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        GetLinkedEventGID() {
          return this.m_linkedEvent;
        }
        GetListInfo() {
          return this.m_mapListInfo;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature(
              [
                T.Wv.k_EClanAccountFlag_AllowClanImages,
                T.Wv.k_EClanAccountFlag_AllowPartnerEventEditor,
              ],
              !0,
            ));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let r = R.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            i = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (i |= e) : (i &= ~e);
            }),
            i == this.m_clanAccountFlags)
          )
            return;
          let n = new Array();
          i & T.Wv.k_EClanAccountFlag_TrustedPress &&
            n.push(T.Wv.k_EClanAccountFlag_TrustedPress),
            i & T.Wv.k_EClanAccountFlag_AllowPartnerEventEditor &&
              n.push(T.Wv.k_EClanAccountFlag_AllowPartnerEventEditor),
            i & T.Wv.k_EClanAccountFlag_AllowClanImages &&
              n.push(T.Wv.k_EClanAccountFlag_AllowClanImages),
            i & T.Wv.k_EClanAccountFlag_AllowRSSFeed &&
              n.push(T.Wv.k_EClanAccountFlag_AllowRSSFeed),
            i & T.Wv.k_EClanAccountFlag_AllowFAQEditing &&
              n.push(T.Wv.k_EClanAccountFlag_AllowFAQEditing),
            i & T.Wv.k_EClanAccountFlag_AllowSalePageEditing &&
              n.push(T.Wv.k_EClanAccountFlag_AllowSalePageEditing),
            i & T.Wv.k_EClanAccountFlag_AllowSalePagePublishWithoutReview &&
              n.push(T.Wv.k_EClanAccountFlag_AllowSalePagePublishWithoutReview);
          let a = new FormData();
          a.append("sessionid", R.TS.SESSIONID),
            a.append("clan_account_id", this.GetClanAccountID().toString()),
            a.append("accountflags", JSON.stringify(n));
          let s = await C().post(r, a);
          s &&
            200 == s.status &&
            s.data.success == A.d.k_EResultOK &&
            (this.m_clanAccountFlags = i);
        }
      }
      (0, a.Cg)([M.sH], E.prototype, "m_appidList", void 0),
        (0, a.Cg)([M.sH], E.prototype, "m_nFollowers", void 0),
        (0, a.Cg)([M.sH], E.prototype, "m_clanAccountFlags", void 0);
      var z = r(96059),
        G = r(17720);
      class F {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (this.m_serviceTransport = void 0),
            (0, M.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, R.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                const t = Number(e.creator_clan_id),
                  r = G.b.InitFromClanID(t),
                  i = new E(r);
                i.Initialize(e),
                  (i.m_promise = F.GetAsPromise(i)),
                  this.m_mapClanToCreatorHome.set(t, i);
              });
            const t = (0, R.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        GetServiceTransport() {
          if (!this.m_serviceTransport) {
            const e = (0, R.Tc)("loyalty_webapi_token", "application_config"),
              t = new z.D(R.TS.WEBAPI_BASE_URL, e || void 0);
            this.m_serviceTransport = t.GetServiceTransport();
          }
          return this.m_serviceTransport;
        }
        static async GetAsPromise(e) {
          return e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
              t[0].clan_account_id > 0 &&
              "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, t = !1, r) {
          if (
            (this.LazyInit(),
            t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let t = new E(e);
            (t.m_promise = this.InternalCreatorHome(t, r)),
              await t.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let r = { get_appids: !0, l: R.TS.LANGUAGE, origin: self.origin },
            i =
              R.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            n = await C().get(i, { params: r, cancelToken: t && t.token });
          return e.Initialize(n.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let r = { appid: e },
              i = R.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              n = await C().get(i, {
                params: r,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, n.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, r) {
          let i = `${R.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            n = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: R.TS.COUNTRY,
              l: R.TS.LANGUAGE,
              origin: self.origin,
            },
            a = new Array();
          const s = await C().get(i, { params: n, cancelToken: r.token });
          return (
            s.data.curators &&
              (0, M.h5)(() => {
                s.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = G.b.InitFromClanID(e.creator_clan_id),
                      r = new E(t);
                    r.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
                  }
                  a.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            a
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, a.Cg)([M.sH], F.prototype, "m_mapClanToCreatorHome", void 0),
        (0, a.Cg)([M.sH], F.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, a.Cg)([M.XI], F.prototype, "LazyInit", null);
      const P = new F();
      window.g_CreatorHomeStore = P;
      class D {
        constructor() {
          (this.m_mapListInfo = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, M.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, R.Tc)("creator_home_list_info", "application_config");
            if (this.ValidateCreatorHomeTitles(e))
              for (const [
                t,
                { title: r, description: i, listtileimage: n },
              ] of Object.entries(null != e ? e : {}))
                r &&
                  this.m_mapListInfo.set(t, {
                    title: null != r ? r : "",
                    description: (null == i ? void 0 : i.length) ? i : void 0,
                    imageUrl: (null == n ? void 0 : n.length) ? n : void 0,
                  });
            this.m_bLoadedFromConfig = !0;
          }
        }
        ValidateCreatorHomeTitles(e) {
          return null != e && "object" == typeof e && !Array.isArray(e);
        }
        GetListTitle(e) {
          var t;
          return (
            this.LazyInit(),
            e
              ? null === (t = this.m_mapListInfo.get(e)) || void 0 === t
                ? void 0
                : t.title
              : void 0
          );
        }
        GetListSubtitle(e) {
          var t;
          return (
            this.LazyInit(),
            e
              ? null === (t = this.m_mapListInfo.get(e)) || void 0 === t
                ? void 0
                : t.description
              : void 0
          );
        }
        GetListtileImage(e) {
          var t;
          return (
            this.LazyInit(),
            e
              ? null === (t = this.m_mapListInfo.get(e)) || void 0 === t
                ? void 0
                : t.imageUrl
              : void 0
          );
        }
      }
      (0, a.Cg)([M.sH], D.prototype, "m_mapListInfo", void 0),
        (0, a.Cg)([M.XI], D.prototype, "LazyInit", null);
      const L = new D();
      function U(e) {
        const t = G.b.InitFromClanID(e);
        return {
          queryKey: ["CreatorHome", e],
          initialData: () => P.GetCreatorHome(t),
          queryFn: async () => {
            const t = G.b.InitFromClanID(e);
            return await P.LoadCreatorHome(t, !0);
          },
        };
      }
      function O(e) {
        const { data: t, isFetching: r, refetch: i } = (0, w.I)(U(e));
        return { creatorHome: t, isFetching: r, refetch: i };
      }
      function k(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetAllListsQuery", e],
          queryFn: async () => {
            const r = P.GetServiceTransport(),
              i = o.w.Init(v.eh);
            i
              .Body()
              .set_steamid(
                new G.b(
                  e,
                  R.TS.EUNIVERSE,
                  s.Tm.k_EAccountTypeClan,
                  0,
                ).ConvertTo64BitString(),
              ),
              i.Body().set_count(100);
            const n = await v.K_.GetLists(r, i);
            return n.BSuccess()
              ? n
                  .Body()
                  .list_details()
                  .filter(
                    (e) =>
                      t ||
                      e.list_state() != v.eb.k_EStoreCuratorListState_Hidden,
                  )
              : null;
          },
          enabled: e > 0,
        };
      }
      function W(e, t) {
        const { data: r, isFetching: i, refetch: n } = (0, w.I)(k(e, t));
        return { lists: r, isFetching: i, refetch: n };
      }
      function j(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetListsDetailsQuery", e, t],
          queryFn: async () => {
            var r;
            const i = P.GetServiceTransport(),
              n = o.w.Init(v.dU);
            n
              .Body()
              .set_steamid(
                new G.b(
                  e,
                  R.TS.EUNIVERSE,
                  s.Tm.k_EAccountTypeClan,
                  0,
                ).ConvertTo64BitString(),
              ),
              n.Body().set_listid(t);
            const a = await v.K_.GetListDetails(i, n);
            return a.BSuccess() &&
              null !== (r = a.Body().list_details()) &&
              void 0 !== r
              ? r
              : null;
          },
          enabled: e > 0,
        };
      }
      window.g_CreatorHomeListInfoStore = L;
    },
    60746: (e, t, r) => {
      r.d(t, { KN: () => S, Nh: () => g, Ec: () => v });
      var i = r(34629),
        n = r(41735),
        a = r.n(n),
        s = r(14947),
        o = r(37085),
        l = r(56545),
        c = r(37403),
        m = r(6144),
        u = r(6419),
        d = r(78327),
        _ = r(68797);
      class p {
        constructor(e) {
          (this.m_setShownEvents = new Set()),
            (this.m_setReadEvents = new Set()),
            (this.m_rgPendingUpload = []),
            (this.m_schUpload = new m.LU()),
            (this.m_bUploading = !1),
            (this.m_CMInterface = e);
        }
        MarkEventShown(e, t, r) {
          let i = this.MakeKey(e, r);
          if (this.m_setShownEvents.has(i)) return !1;
          this.m_setShownEvents.add(i);
          let n = new c.kZ();
          return (
            n.set_event_gid(e),
            n.set_clanid(t),
            n.set_display_location(r),
            n.set_mark_shown(!0),
            this.QueueForUpload(n),
            !0
          );
        }
        MarkEventRead(e, t, r) {
          let i = this.MakeKey(e, r);
          if (this.m_setReadEvents.has(i)) return !1;
          this.m_setReadEvents.add(i);
          let n = new c.kZ();
          return (
            n.set_event_gid(e),
            n.set_clanid(t),
            n.set_display_location(r),
            n.set_mark_read(!0),
            this.QueueForUpload(n),
            !0
          );
        }
        MakeKey(e, t) {
          return `${e}_${t}`;
        }
        QueueForUpload(e) {
          this.m_rgPendingUpload.push(e), this.ScheduleUpload();
        }
        ScheduleUpload() {
          this.m_bUploading ||
            (this.m_rgPendingUpload.length >= 30
              ? this.UploadPendingData()
              : this.m_schUpload.IsScheduled() ||
                this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
        async Flush() {
          if (!this.m_bUploading) return this.UploadPendingData();
        }
        async UploadPendingData() {
          if (this.m_bUploading) return;
          this.m_schUpload.Cancel();
          let e = this.m_rgPendingUpload.splice(0, 30);
          if (0 == e.length) return;
          let t = !1;
          if (this.m_CMInterface) {
            let r = l.w.Init(c.wS);
            for (let t of e) r.Body().add_markings(t);
            this.m_bUploading = !0;
            let i = await c.BE.MarkPartnerEventsForUser(
              this.m_CMInterface.GetServiceTransport(),
              r,
            );
            (this.m_bUploading = !1), (t = i.GetEResult() == o.d.k_EResultOK);
          } else {
            if (!d.iA.logged_in) return;
            let r = e.map((e) => e.toObject()),
              i = (0, d.xv)() + "actions/ajaxmarkpartnerevents";
            const n = new FormData();
            n.append("sessionid", d.TS.SESSIONID),
              n.append("request", JSON.stringify(r));
            try {
              t =
                (await a().post(i, n, { withCredentials: !0 })).data.success ==
                o.d.k_EResultOK;
            } catch (e) {
              let t = (0, _.H)(e);
              console.error(
                "CPartnerEventUserTracking.UploadPendingData error " +
                  t.strErrorMsg,
                t,
              );
            }
          }
          t
            ? this.m_rgPendingUpload.length > 0 && this.ScheduleUpload()
            : (console.log(
                "Saving news event state failed. Will try again soon!",
              ),
              (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(e)),
              this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
      }
      (0, i.Cg)([u.o], p.prototype, "UploadPendingData", null);
      var g,
        h = r(17720),
        y = r(81393),
        f = r(90626),
        B = r(26161);
      class b {
        constructor(e) {
          (this.clanid = void 0),
            (this.appid = 0),
            (this.can_edit = !1),
            (this.owns_app = !1),
            (this.follows_app = !1),
            (this.support_user = !1),
            (this.valve_admin = !1),
            (this.limited_user = !1),
            (this.event_ignored = new Array()),
            (this.event_followed = new Array()),
            (this.event_followed_flags = new Array()),
            (0, s.Gn)(this),
            (this.clanid = e);
        }
      }
      (0, i.Cg)([s.sH], b.prototype, "clanid", void 0),
        (0, i.Cg)([s.sH], b.prototype, "appid", void 0),
        (0, i.Cg)([s.sH], b.prototype, "can_edit", void 0),
        (0, i.Cg)([s.sH], b.prototype, "owns_app", void 0),
        (0, i.Cg)([s.sH], b.prototype, "follows_app", void 0),
        (0, i.Cg)([s.sH], b.prototype, "support_user", void 0),
        (0, i.Cg)([s.sH], b.prototype, "valve_admin", void 0),
        (0, i.Cg)([s.sH], b.prototype, "limited_user", void 0),
        (0, i.Cg)([s.sH], b.prototype, "event_ignored", void 0),
        (0, i.Cg)([s.sH], b.prototype, "event_followed", void 0),
        (0, i.Cg)([s.sH], b.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(g || (g = {}));
      class S {
        constructor() {
          (this.m_mapClanToUserPermissions = new Map()),
            (this.m_mapAnnounceGIDToVote = new Map()),
            (this.m_setReadEventGIDs = new Set()),
            (this.m_tracker = void 0),
            (this.m_cm = void 0),
            (this.m_bIsPresentationMode = (0, d.Bu)()),
            (0, s.Gn)(this);
        }
        static Get() {
          return (
            (0, y.wT)(
              !!S.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            S.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!S.s_EventUserStore;
        }
        static async InitGlobal(e) {
          if (!S.s_EventUserStore) {
            const t = new S();
            await t.Init(e),
              (S.s_EventUserStore = t),
              "dev" == d.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        static BIsInited() {
          return Boolean(S.s_EventUserStore);
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new p(e));
          const t = (0, d.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, s.h5)(() => {
              t.forEach((e) => {
                let t = new b(e.clanid),
                  r = { result: t, promise: S.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(r, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, r);
              });
            }),
            ("dev" != d.TS.WEB_UNIVERSE && "beta" != d.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let r = (0, d.Fd)("uservotes", "application_config");
          r &&
            (0, s.h5)(() => {
              r.forEach((e) => {
                let t = !!e.voted_up || (!e.voted_down && void 0);
                this.m_mapAnnounceGIDToVote.set(e.clanAnnouncementGID, t);
              });
            });
        }
        GetTracker() {
          return this.m_tracker;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanid &&
            "number" == typeof t[0].appid
          );
        }
        RecordEventShown(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            this.m_tracker.MarkEventShown(
              e.GID,
              e.clanSteamID.GetAccountID(),
              t,
            );
        }
        RecordEventRead(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            (this.HasEventBeenRead(e.GID) ||
              (this.SetEventAsRead(e.GID),
              this.m_tracker.MarkEventRead(
                e.GID,
                e.clanSteamID.GetAccountID(),
                t,
              )));
        }
        SetEventAsRead(e) {
          this.m_setReadEventGIDs.add(e);
        }
        HasEventBeenRead(e) {
          return this.m_setReadEventGIDs.has(e);
        }
        static async RemapToPromise(e) {
          return e;
        }
        BIsUserLoggedIn() {
          return d.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return (
            this.m_mapClanToUserPermissions.has(e) &&
            this.m_mapClanToUserPermissions.get(e).bLoaded
          );
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new b(0);
          const t = e.GetAccountID();
          this.m_mapClanToUserPermissions.has(t) ||
            this.LoadSingleAppEventPermissions(e);
          return this.m_mapClanToUserPermissions.get(t).result;
        }
        BFollowsEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_followed.indexOf(t)
          );
        }
        BFollowsEventAndNotifiedBy(e, t, r) {
          let i = this.GetPartnerEventPermissions(e),
            n = i.event_followed.indexOf(t);
          return -1 !== n && (i.event_followed_flags[n] & r) == r;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            r = this.m_mapClanToUserPermissions.get(t);
          return (
            r ||
              ((r = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new b(t),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(t, r)),
            r.promise
          );
        }
        CopyFromResponseToTrack(e, t) {
          var r, i, n, a;
          (e.result.appid = null !== (r = t.appid) && void 0 !== r ? r : 0),
            (e.result.can_edit = !!t.can_edit),
            (e.result.clanid = t.appid),
            (e.result.event_followed =
              null !== (i = t.event_followed) && void 0 !== i ? i : []),
            (e.result.event_ignored =
              null !== (n = t.event_ignored) && void 0 !== n ? n : []),
            (e.result.event_followed_flags =
              null !== (a = t.event_followed_flags) && void 0 !== a ? a : []),
            (e.result.follows_app = !!t.follows_app),
            (e.result.owns_app = !!t.owns_app),
            (e.result.limited_user = !!t.limited_user),
            (t.support_user || t.valve_admin) && this.m_bIsPresentationMode
              ? ((e.result.can_edit = !0),
                (e.result.support_user = !1),
                (e.result.valve_admin = !1))
              : ((e.result.support_user = !!t.support_user),
                (e.result.valve_admin = !!t.valve_admin)),
            (e.bLoaded = !0);
        }
        async InternalLoadSingleAppEventPermissions(e) {
          let t = null,
            r = e.GetAccountID(),
            i = !Boolean(d.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(r)) {
            let t = new b(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(r, {
              result: t,
              promise: S.RemapToPromise(t),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(d.iA.logged_in)) {
              let n =
                  d.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                s = {};
              if (
                ("partnerweb" == (0, d.yK)()
                  ? ((n =
                      d.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() }))
                  : "store" == (0, d.yK)() &&
                    ((n =
                      d.TS.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() })),
                (t = await a().get(n, { params: s, withCredentials: !0 })),
                t && t.data.success == o.d.k_EResultOK)
              ) {
                let e = this.m_mapClanToUserPermissions.get(r);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" +
                    (0, _.H)(null == t ? void 0 : t.data).strErrorMsg,
                ),
                  (i = !0);
            }
          } catch (e) {
            if (
              ((t = e.response),
              (i = !0),
              e &&
                void 0 !== e.response &&
                void 0 !== e.response.data &&
                void 0 !== e.response.data.success &&
                e.response.data.success == o.d.k_EResultNotLoggedOn)
            );
            else {
              const t = (0, _.H)(e);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  r +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            i &&
              (0, s.h5)(() => {
                var e;
                let i = this.m_mapClanToUserPermissions.get(r);
                (i.result.appid =
                  null !== (e = null == t ? void 0 : t.data.appid) &&
                  void 0 !== e
                    ? e
                    : 0),
                  (i.result.can_edit = !1),
                  (i.result.clanid = t && t.data ? t.data.clanid : 0),
                  (i.result.event_followed = new Array()),
                  (i.result.event_ignored = new Array()),
                  (i.result.event_followed_flags = new Array()),
                  (i.result.follows_app = !1),
                  (i.result.owns_app = !1),
                  (i.result.support_user = !1),
                  (i.result.valve_admin = !1),
                  (i.result.limited_user = !1),
                  (i.bLoaded = !0);
              });
          }
          return this.m_mapClanToUserPermissions.get(r).result;
        }
        async SetFollowOrUnfollowEvent(e, t, r, i, n) {
          let o = this.GetPartnerEventPermissions(r),
            l = o.event_followed.indexOf(i),
            c = 0;
          -1 !== l &&
            ((c = o.event_followed_flags[l]), e ? (n = c & ~n) : (n |= c));
          let m = 0 == n,
            u =
              ("store" === (0, d.yK)()
                ? d.TS.STORE_BASE_URL + "events"
                : d.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  r.ConvertTo64BitString()) +
              (m ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            _ = new URLSearchParams();
          _.append("sessionid", d.TS.SESSIONID),
            _.append("ignore", "" + t),
            _.append("gid", i),
            _.append("notification_flag", "" + n),
            _.append("clan_accountid", "" + r.GetAccountID());
          await a().post(u, _, { withCredentials: !0 });
          (0, s.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(r.GetAccountID()),
              a = null,
              s = null,
              o = null,
              l = null;
            m
              ? ((a = t ? e.result.event_ignored : e.result.event_followed),
                (o = t ? null : e.result.event_followed_flags))
              : t
                ? ((a = e.result.event_followed),
                  (o = e.result.event_followed_flags),
                  (s = e.result.event_ignored))
                : ((a = e.result.event_ignored),
                  (s = e.result.event_followed),
                  (l = e.result.event_followed_flags));
            let c = a.indexOf(i);
            if ((c > -1 && (a.splice(c, 1), o && o.splice(c, 1)), s)) {
              let e = s.indexOf(i);
              -1 == e ? (s.push(i), l && l.push(n)) : l && (l[e] = n);
            }
          });
        }
        async Vote(e, t, r) {
          if (!e || !e.AnnouncementGID) return !1;
          const i = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (i === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, s.h5)(() => {
              !0 === i && e.UpdateVoteCount("up", -1),
                !1 === i && e.UpdateVoteCount("down", -1),
                !0 === t && e.UpdateVoteCount("up", 1),
                !1 === t && e.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let r = l.w.Init(c.QU);
            return (
              r.Body().set_announcementid(e.AnnouncementGID),
              r.Body().set_vote_up(!!t),
              r.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              (
                await c.BE.RateClanAnnouncement(
                  this.m_cm.GetServiceTransport(),
                  r,
                )
              ).GetEResult() == o.d.k_EResultOK
            );
          }
          {
            const i = (0, d.yK)(),
              n =
                "community" == i || "steamtv" == i
                  ? d.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : d.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              s = new URLSearchParams();
            s.append("sessionid", d.TS.SESSIONID),
              s.append("voteup", t ? "1" : "0"),
              s.append("clanid", "" + e.clanSteamID.GetAccountID()),
              s.append("ajax", "1");
            const l = { withCredentials: !0, cancelToken: r.token };
            return (await a().post(n, s, l)).data.success == o.d.k_EResultOK;
          }
        }
        async LoadMyVote(e, t) {
          if (null == e ? void 0 : e.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let r;
            if (this.m_cm) {
              let t = l.w.Init(c.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let i = await c.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              i.GetEResult() == o.d.k_EResultOK &&
                (r =
                  !!i.Body().voted_up() || (!i.Body().voted_down() && void 0));
            } else {
              const i = "store" == (0, d.yK)(),
                n = i
                  ? d.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : d.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                s = { gid: i ? e.AnnouncementGID : void 0 },
                o = await a().get(n, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: s,
                });
              r = !!o.data.voted_up || (!o.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, r), r;
          }
        }
        SetVote(e, t) {
          this.m_mapAnnounceGIDToVote.set(e, t);
        }
        BHasMyVote(e) {
          return (
            !!e.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(e) {
          return e.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(e) {
          if (e.BHasEmailEnabled()) return !0;
          if (e.clanSteamID.GetAccountID() == (0, B.H)()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (d.UF.IS_OGG || d.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
      }
      function v(e) {
        const [t, r] = (0, f.useState)(
            S.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          i = h.b.InitFromClanID(e),
          [n, a] = (0, f.useState)(S.Get().GetPartnerEventPermissions(i));
        return (
          (0, f.useEffect)(() => {
            if (!t) {
              const t = h.b.InitFromClanID(e);
              S.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  a(e), r(!0);
                });
            }
          }, [t, e]),
          n
        );
      }
      (0, i.Cg)([s.sH], S.prototype, "m_mapClanToUserPermissions", void 0),
        (0, i.Cg)([s.sH], S.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, i.Cg)([s.sH], S.prototype, "m_setReadEventGIDs", void 0),
        (0, i.Cg)([s.XI], S.prototype, "CopyFromResponseToTrack", null);
    },
    26161: (e, t, r) => {
      r.d(t, { H: () => a });
      var i = r(22837),
        n = r(30470);
      const a = () =>
        n.TS.EUNIVERSE === i.Bn.k_EUniverseBeta ? 2581 : 45267781;
    },
  },
]);
