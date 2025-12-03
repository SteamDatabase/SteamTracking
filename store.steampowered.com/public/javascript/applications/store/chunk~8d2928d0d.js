/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3615],
  {
    30756: (e, t, r) => {
      r.d(t, { g: () => Ot });
      var i,
        n,
        a,
        s,
        o,
        l,
        m = r(22837),
        c = r(58222),
        u = r(41735),
        d = r.n(u),
        g = r(65946),
        B = r(90626),
        _ = r(89128),
        p = r(75933),
        b = r(39733),
        y = r(37085),
        M = r(81393),
        w = r(56545),
        f = r(80613),
        z = r.n(f),
        S = r(89068);
      !(function (e) {
        (e[(e.k_EPromoPlanAssociationType_Unknown = 0)] =
          "k_EPromoPlanAssociationType_Unknown"),
          (e[(e.k_EPromoPlanAssociationType_Spotlight = 1)] =
            "k_EPromoPlanAssociationType_Spotlight"),
          (e[(e.k_EPromoPlanAssociationType_MarketingMessage = 2)] =
            "k_EPromoPlanAssociationType_MarketingMessage"),
          (e[(e.k_EPromoPlanAssociationType_Takeover = 3)] =
            "k_EPromoPlanAssociationType_Takeover"),
          (e[(e.k_EPromoPlanAssociationType_Takeunder = 4)] =
            "k_EPromoPlanAssociationType_Takeunder"),
          (e[(e.k_EPromoPlanAssociationType_ContentHub_Takeover = 5)] =
            "k_EPromoPlanAssociationType_ContentHub_Takeover"),
          (e[(e.k_EPromoPlanAssociationType_DailyDeal = 6)] =
            "k_EPromoPlanAssociationType_DailyDeal"),
          (e[(e.k_EPromoPlanAssociationType_OptIn = 7)] =
            "k_EPromoPlanAssociationType_OptIn"),
          (e[(e.k_EPromoPlanAssociationType_Giveaway = 8)] =
            "k_EPromoPlanAssociationType_Giveaway"),
          (e[(e.k_EPromoPlanAssociationType_SteamChina_Takeover = 9)] =
            "k_EPromoPlanAssociationType_SteamChina_Takeover"),
          (e[(e.k_EPromoPlanAssociationType_DiscountEvent = 10)] =
            "k_EPromoPlanAssociationType_DiscountEvent"),
          (e[(e.k_EPromoPlanAssociationType_SaleEventGID = 11)] =
            "k_EPromoPlanAssociationType_SaleEventGID"),
          (e[
            (e.k_EPromoPlanAssociationType_MarketingMessageMajorUpdateGID = 12)
          ] = "k_EPromoPlanAssociationType_MarketingMessageMajorUpdateGID"),
          (e[(e.k_EPromoPlanAssociationType_MAX = 13)] =
            "k_EPromoPlanAssociationType_MAX");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_EPromotionNotification_Unknown = 0)] =
            "k_EPromotionNotification_Unknown"),
            (e[(e.k_EPromotionNotification_AssetRequest = 1)] =
              "k_EPromotionNotification_AssetRequest"),
            (e[(e.k_EPromotionNotification_AssetRequest_Reminder = 2)] =
              "k_EPromotionNotification_AssetRequest_Reminder"),
            (e[(e.k_EPromotionNotification_AssetRequest_Submitted = 3)] =
              "k_EPromotionNotification_AssetRequest_Submitted"),
            (e[(e.k_EPromotionNotification_MAX = 4)] =
              "k_EPromotionNotification_MAX");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_EPromotionEventInvite_Invalid = 0)] =
            "k_EPromotionEventInvite_Invalid"),
            (e[(e.k_EPromotionEventInvite_DailyDeal = 1)] =
              "k_EPromotionEventInvite_DailyDeal"),
            (e[(e.k_EPromotionEventInvite_MidWeekDeal = 2)] =
              "k_EPromotionEventInvite_MidWeekDeal"),
            (e[(e.k_EPromotionEventInvite_WeekendDeal = 3)] =
              "k_EPromotionEventInvite_WeekendDeal"),
            (e[(e.k_EPromotionEventInvite_AssetAndActionRequest = 4)] =
              "k_EPromotionEventInvite_AssetAndActionRequest");
        })(a || (a = {}));
      class R extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.promotion_id || S.Sg(R.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  partner_readonly_jsondata: {
                    n: 10,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  partner_writable_jsondata: {
                    n: 11,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  assets_readonly_jsondata: {
                    n: 12,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  assets_writable_jsondata: {
                    n: 13,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  last_update_time: {
                    n: 9,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = S.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan";
        }
      }
      class v extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.plan || S.Sg(v.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m || (v.sm_m = { proto: v, fields: { plan: { n: 1, c: R } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = S.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class h extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.promotion_id || S.Sg(h.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = S.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class P extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.plan || S.Sg(P.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  plan: { n: 1, c: R },
                  promotion_id: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = S.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class F extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (z().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class j extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.promotion_id || S.Sg(j.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = S.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class T extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.plan || S.Sg(T.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m || (T.sm_m = { proto: T, fields: { plan: { n: 1, c: R } } }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = S.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class W extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (z().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class q extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.plan || S.Sg(q.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { plan: { n: 1, c: R, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = S.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class I extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.oldest_rtime || S.Sg(I.M()),
            f.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  oldest_rtime: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  newest_rtime: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  promotion_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: S.qM.readString,
                    bw: S.gp.writeRepeatedString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = S.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Request";
        }
      }
      class O extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.plans || S.Sg(O.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { plans: { n: 1, c: R, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = S.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Response";
        }
      }
      class C extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.type || S.Sg(C.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  type: { n: 1, br: S.qM.readEnum, bw: S.gp.writeEnum },
                  gid: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  promotion_planid: {
                    n: 3,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = S.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromoAssociation";
        }
      }
      class U extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.requested || S.Sg(U.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { requested: { n: 1, c: C, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = S.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Request";
        }
      }
      class E extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.matching || S.Sg(E.M()),
            f.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  matching: { n: 1, c: C, r: !0, q: !0 },
                  plans: { n: 2, c: R, r: !0, q: !0 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = S.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Response";
        }
      }
      class A extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.rtime || S.Sg(A.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  rtime: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  upto_rtime: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = S.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Request";
        }
      }
      class D extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.plans || S.Sg(D.M()),
            f.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  plans: { n: 1, c: R, r: !0, q: !0 },
                  deleted_plan_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: S.qM.readFixed64String,
                    pbr: S.qM.readPackedFixed64String,
                    bw: S.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = S.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Response";
        }
      }
      class x extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.promotion_id || S.Sg(x.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = S.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class k extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class N extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.token || S.Sg(N.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  token: { n: 1, br: S.qM.readString, bw: S.gp.writeString },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = S.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class G extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.plan || S.Sg(G.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { plan: { n: 1, c: R, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = S.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class L extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appids || S.Sg(L.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                  exclude_sales: {
                    n: 2,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  exclude_direct_featuring: {
                    n: 3,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = S.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Request";
        }
      }
      class V extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.plans || S.Sg(V.M()),
            f.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  plans: { n: 1, c: R, r: !0, q: !0 },
                  apps_included_in_sales: { n: 2, c: H, r: !0, q: !0 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = S.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response";
        }
      }
      class H extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appids || S.Sg(H.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = S.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
        }
      }
      class K extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.partnerid || S.Sg(K.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  partnerid: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  start_date: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  end_date: { n: 6, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  show_hidden: { n: 4, br: S.qM.readBool, bw: S.gp.writeBool },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = S.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Request";
        }
      }
      class X extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.plans || S.Sg(X.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: { plans: { n: 1, c: R, r: !0, q: !0 } },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = S.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Response";
        }
      }
      class Y extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.input_access_key || S.Sg(Y.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = S.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class J extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.plan || S.Sg(J.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m || (J.sm_m = { proto: J, fields: { plan: { n: 1, c: R } } }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = S.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class Z extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.promotion_id || S.Sg(Z.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  value: { n: 2, br: S.qM.readBool, bw: S.gp.writeBool },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = S.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
        }
      }
      class $ extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
        }
      }
      class Q extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.promotion_id || S.Sg(Q.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: S.qM.readEnum,
                    bw: S.gp.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = S.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class ee extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class te extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.promotion_id || S.Sg(te.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = S.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class re extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.results || S.Sg(re.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { results: { n: 1, c: ie, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = S.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class ie extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.notification_id || S.Sg(ie.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  notification_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  status: { n: 5, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  type: { n: 6, br: S.qM.readEnum, bw: S.gp.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = S.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class ne extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.promotion_id || S.Sg(ne.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = S.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class ae extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class se extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.promotion_id || S.Sg(se.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  add: { n: 2, br: S.qM.readBool, bw: S.gp.writeBool },
                  email_address: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = S.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class oe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new oe();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class le extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.clan_account_id || S.Sg(le.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  rtime_sale_start: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtime_sale_end: {
                    n: 4,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  daily_deal_gid: {
                    n: 5,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 6,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  create_asset_request: {
                    n: 7,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  partner_id: {
                    n: 8,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  advertising_appid: {
                    n: 9,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = S.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Request";
        }
      }
      class me extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.clan_account_id || S.Sg(me.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  daily_deal_gid: {
                    n: 3,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 4,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  asset_request_gid: {
                    n: 5,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  advertising_appid: {
                    n: 6,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = S.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Response";
        }
      }
      class ce extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.total_gross_sales_usdx100 || S.Sg(ce.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  total_gross_sales_usdx100: {
                    n: 1,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  total_gross_returns_usdx100: {
                    n: 2,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  total_net_tax_usdx100: {
                    n: 3,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  steam_gross_sales_usdx100: {
                    n: 4,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  steam_gross_returns_usdx100: {
                    n: 5,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  steam_net_tax_usdx100: {
                    n: 6,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  in_game_gross_sales_usdx100: {
                    n: 7,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  in_game_gross_returns_usdx100: {
                    n: 8,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  in_game_net_tax_usdx100: {
                    n: 9,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  total_net_sales_usdx100: {
                    n: 10,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  steam_net_sales_usdx100: {
                    n: 11,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  in_game_net_sales_usdx100: {
                    n: 12,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  steam_gross_units_sold: {
                    n: 13,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  steam_gross_units_returned: {
                    n: 14,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                  gross_units_activated: {
                    n: 15,
                    br: S.qM.readInt64String,
                    bw: S.gp.writeInt64String,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = S.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_SummarySaleResult";
        }
      }
      class ue extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.promotionids || S.Sg(ue.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  promotionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint64String,
                    pbr: S.qM.readPackedUint64String,
                    bw: S.gp.writeRepeatedUint64String,
                  },
                  partnerid: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = S.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Request";
        }
      }
      class de extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.sales || S.Sg(de.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  sales: { n: 1, c: _e, r: !0, q: !0 },
                  partial_access: {
                    n: 2,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = S.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response";
        }
      }
      class ge extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.rtime_date || S.Sg(ge.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  rtime_date: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  date: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  summary_sales: { n: 3, c: ce },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = S.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales";
        }
      }
      class Be extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.appid || S.Sg(Be.M()),
            f.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  packageid: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  secondary_product_id: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  summary_sales: { n: 4, c: ce },
                  daily_promo_sales: { n: 5, c: ge, r: !0, q: !0 },
                  package_billing_type: {
                    n: 6,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = S.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product";
        }
      }
      class _e extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.promotionid || S.Sg(_e.M()),
            f.Message.initialize(this, e, 0, -1, [2, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  promotionid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  daily_promo_sales: { n: 2, c: ge, r: !0, q: !0 },
                  summary_sales: { n: 3, c: ce },
                  products: { n: 4, c: Be, r: !0, q: !0 },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = S.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData";
        }
      }
      class pe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.request_list || S.Sg(pe.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: { request_list: { n: 1, c: be, r: !0, q: !0 } },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = S.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
        }
      }
      class be extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.clan_account_id || S.Sg(be.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = S.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
        }
      }
      class ye extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.plans || S.Sg(ye.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: { plans: { n: 1, c: R, r: !0, q: !0 } },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = S.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
        }
      }
      class Me extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.rtstart || S.Sg(Me.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  rtstart: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  rtend: { n: 2, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  include_packages: {
                    n: 3,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  filter_modified_sales_rank: {
                    n: 4,
                    d: !0,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = S.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
        }
      }
      class we extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.package_details || S.Sg(we.M()),
            f.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  package_details: { n: 1, c: fe, r: !0, q: !0 },
                  app_details: { n: 2, c: ze, r: !0, q: !0 },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = S.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
        }
      }
      class fe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.package_id || S.Sg(fe.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  package_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discount_id: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discount_name: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  discount_percentage: {
                    n: 4,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  original_price_usd: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discount_price_usd: {
                    n: 6,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 7,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 8,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = S.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
        }
      }
      class ze extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.appid || S.Sg(ze.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  cheapest_package_id: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  cheapest_discount_id: {
                    n: 4,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  cheapest_discount_name: {
                    n: 5,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  package_original_price_usd: {
                    n: 6,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discounted_price_usd: {
                    n: 7,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discount_percentage: {
                    n: 8,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 9,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 10,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  num_discounted_packages: {
                    n: 11,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  modified_sales_rank: {
                    n: 12,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = S.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
        }
      }
      class Se extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.account_id || S.Sg(Se.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  account_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  include_published: {
                    n: 2,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = S.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
        }
      }
      class Re extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.clans || S.Sg(Re.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { clans: { n: 1, c: he, r: !0, q: !0 } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = S.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
        }
      }
      class ve extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.clan_account_id || S.Sg(ve.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  name: { n: 3, br: S.qM.readString, bw: S.gp.writeString },
                  published: { n: 4, br: S.qM.readBool, bw: S.gp.writeBool },
                  start_time: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  end_time: { n: 6, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  external_sale_event_type: {
                    n: 7,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = S.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
        }
      }
      class he extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.clan_account_id || S.Sg(he.M()),
            f.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  clan_name: {
                    n: 2,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  is_creator_home: {
                    n: 3,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  sale_pages: { n: 4, c: ve, r: !0, q: !0 },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = S.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
        }
      }
      class Pe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.partner_id || S.Sg(Pe.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  partner_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = S.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
        }
      }
      class Fe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.advertising_apps || S.Sg(Fe.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: { advertising_apps: { n: 1, c: je, r: !0, q: !0 } },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = S.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
        }
      }
      class je extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.appid || S.Sg(je.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  app_name: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  itemid: { n: 3, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = S.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
        }
      }
      class Te extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.spotlight_due_date || S.Sg(Te.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = S.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class We extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.inviteid || S.Sg(We.M()),
            f.Message.initialize(this, e, 0, -1, [16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  inviteid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  type: { n: 6, br: S.qM.readEnum, bw: S.gp.writeEnum },
                  accept_account: {
                    n: 7,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  deadlines: { n: 14, c: Te },
                  notify_partner: {
                    n: 15,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: S.qM.readString,
                    bw: S.gp.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  cancelled: { n: 18, br: S.qM.readBool, bw: S.gp.writeBool },
                  rtime32_cancel_time: {
                    n: 19,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  require_sale_page: {
                    n: 20,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  require_sale_page_type: {
                    n: 21,
                    br: S.qM.readEnum,
                    bw: S.gp.writeEnum,
                  },
                  admin_notes: {
                    n: 22,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  partner_notes: {
                    n: 23,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = S.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class qe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.invite || S.Sg(qe.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  invite: { n: 1, c: We },
                  queue_email_to_send: {
                    n: 2,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = S.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class Ie extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.inviteid || S.Sg(Ie.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  inviteid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = S.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class Oe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.inviteid || S.Sg(Oe.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  packageid: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  bundleid: { n: 4, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = S.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class Ce extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.invites || S.Sg(Ce.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: { invites: { n: 1, c: We, r: !0, q: !0 } },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = S.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class Ue extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.inviteid || S.Sg(Ue.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  inviteid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = S.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class Ee extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ee();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class Ae extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.inviteid || S.Sg(Ae.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  inviteid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = S.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Ae.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class De extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.accountid || S.Sg(De.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  accountid: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = S.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class xe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.targets || S.Sg(xe.M()),
            f.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  targets: { n: 1, c: De, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: S.qM.readString,
                    bw: S.gp.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = S.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class ke extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.inviteid || S.Sg(ke.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  inviteid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  rtdatechosen: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discount_days: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  discount_info: {
                    n: 4,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  skip_discount_event: {
                    n: 5,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = S.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class Ne extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.gid || S.Sg(Ne.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  gid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = S.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class Ge extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.inviteid || S.Sg(Ge.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  inviteid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = S.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class Le extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Le();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      class Ve extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.opt_in_name || S.Sg(Ve.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  partner_id: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = S.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Ve.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Request";
        }
      }
      class He extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.stats || S.Sg(He.M()),
            f.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  stats: { n: 1, c: Ke, r: !0, q: !0 },
                  appid_without_permissions: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = S.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(He.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response";
        }
      }
      class Ke extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.appid || S.Sg(Ke.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rt_start_time: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rt_end_time: {
                    n: 4,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  demo_player_count: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  wishlist_count: {
                    n: 6,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  player_wishlist_count: {
                    n: 7,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  rt_last_update_time: {
                    n: 9,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = S.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Ke.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
        }
      }
      !(function (e) {
        (e.CreatePlan = function (e, t) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, w.I8)(v, t),
            h,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, w.I8)(v, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, w.I8)(P, t),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, w.I8)(P, t),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, w.I8)(P, t),
              F,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, w.I8)(x, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, w.I8)(j, t),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, w.I8)(W, t),
              q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanCompletedInDateRange = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, w.I8)(I, t),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByAssociationID = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByAssociationID#1",
              (0, w.I8)(U, t),
              E,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlansUpdatedSince = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, w.I8)(A, t),
              D,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, w.I8)(N, t),
              G,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllPlansForApps = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, w.I8)(L, t),
              V,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetAllPlansForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForPartner#1",
              (0, w.I8)(K, t),
              X,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, w.I8)(Y, t),
              J,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.MarkLocalizationAssetComplete = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, w.I8)(Z, t),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, w.I8)(Q, t),
              ee,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, w.I8)(te, t),
              re,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, w.I8)(ne, t),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, w.I8)(se, t),
              oe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanSalesDaily = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanSalesDaily#1",
              (0, w.I8)(ue, t),
              de,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanForSalePages = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, w.I8)(pe, t),
              ye,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.CreateSalePageForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, w.I8)(le, t),
              me,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUpcomingScheduledDiscounts = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, w.I8)(Me, t),
              we,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetSalePageCandidatesForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, w.I8)(Se, t),
              Re,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAdvertisingAppsForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, w.I8)(Pe, t),
              Fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(s || (s = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, w.I8)(qe, t),
              Ie,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, w.I8)(Oe, t),
                Ce,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, w.I8)(ke, t),
                Ne,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, w.I8)(Ge, t),
                Le,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, w.I8)(Ue, t),
                Ee,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, w.I8)(Ae, t),
                xe,
                { ePrivilege: 4 },
              );
            });
        })(o || (o = {})),
        (function (e) {
          e.GetOptInDemoStats = function (e, t) {
            return e.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, w.I8)(Ve, t),
              He,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(l || (l = {}));
      var Xe = r(20194),
        Ye = r(72034),
        Je = r(30470),
        Ze = r(24484);
      function $e(e, t) {
        const [r] = (0, B.useState)(() =>
          (function () {
            const e = (0, Ze.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            return (
              (0, M.wT)(
                e,
                "GetPromotionWriteAccess: promotion operation token is missing",
              ),
              e
                ? new Ye.D(Je.TS.WEBAPI_BASE_URL, e).GetServiceTransport()
                : null
            );
          })(),
        );
        return (0, Xe.I)({
          queryKey: ["usePromotionPlanBySalePage", t],
          queryFn: async () => {
            const i = w.w.Init(pe),
              n = new be();
            n.set_clan_account_id(e),
              n.set_gid_clan_event(t),
              i.Body().add_request_list(n);
            const a = await s.GetPromotionPlanForSalePages(r, i);
            if (a.GetEResult() != y.d.k_EResultOK)
              throw new Error(
                `Error from PromotionPlanBySalePage: ${a.GetEResult()}`,
              );
            return a
              .Body()
              .plans()
              .map((e) => e.promotion_id());
          },
          placeholderData: null,
          enabled: Boolean(r),
        }).data;
      }
      var Qe = r(60746),
        et = r(34824),
        tt = r(53835),
        rt = r(84811),
        it = r(34629),
        nt = r(51706),
        at = r(61859),
        st = r(84933),
        ot = r(56330),
        lt = r.n(ot),
        mt = r(22797),
        ct = r(78327),
        ut = r(68797);
      const dt = new (class {
        async DeleteForumTopic(e, t, r, i, n) {
          let a =
            ct.TS.COMMUNITY_BASE_URL +
            "forum/" +
            e.GetAccountID() +
            "/" +
            t +
            "/deletetopic/";
          null != r && "" != r && (a += r + "/");
          const s = new FormData();
          s.append("sessionid", ct.TS.SESSIONID), s.append("gidforumtopic", i);
          let o = await d().post(a, s, {
            withCredentials: !0,
            cancelToken: n.token,
          });
          if (o.data.success != y.d.k_EResultOK) throw o.data;
          return o.data;
        }
      })();
      class gt extends B.Component {
        static m_uniqueError = 0;
        m_forumTopicGID;
        m_clanSteamID;
        m_cancelSignal = d().CancelToken.source();
        constructor(e) {
          super(e),
            (this.state = {
              dialogState: this.props.bNoConfirmationNeeded
                ? "waiting"
                : "confirmation",
              bDeleteCommentThread: !1,
            });
        }
        componentDidMount() {
          this.props.bNoConfirmationNeeded && this.OnDelete();
        }
        OnDeleteEventSuccessCallback() {
          this.props.partnerEventStore.ResetModel(),
            this.state.bDeleteCommentThread
              ? dt
                  .DeleteForumTopic(
                    this.m_clanSteamID,
                    "Event",
                    void 0,
                    this.m_forumTopicGID,
                    this.m_cancelSignal,
                  )
                  .then(this.OnDeleteForumTopicSuccessCallback)
                  .catch(this.OnDeleteForumTopicFailureCallback)
              : this.setState({ dialogState: "success" });
        }
        OnDeleteForumTopicSuccessCallback() {
          this.setState({ dialogState: "success" });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("component unmounted");
        }
        OnDeleteEventFailureCallback(e) {
          this.setState({ dialogState: "error", ...(0, ut.H)(e) });
        }
        OnDeleteForumTopicFailureCallback(e) {
          this.setState({
            dialogState: "failed_thread_delete",
            ...(0, ut.H)(e),
          });
        }
        SetToWaiting() {
          "waiting" != this.state.dialogState &&
            this.setState({ dialogState: "waiting" });
        }
        OnDelete() {
          const { eventModel: e, partnerEventStore: t } = this.props;
          let r = e.clanSteamID,
            i = e.GID,
            n = e.AnnouncementGID;
          (this.m_forumTopicGID = e.forumTopicGID),
            (this.m_clanSteamID = r),
            !this.props.eventModel.bOldAnnouncement &&
            i &&
            "0" != i &&
            i != m.kF
              ? (this.SetToWaiting(),
                t
                  .DeleteClanEvent(r, i)
                  .then(this.OnDeleteEventSuccessCallback)
                  .catch(this.OnDeleteEventFailureCallback))
              : this.props.eventModel.bOldAnnouncement
                ? (this.SetToWaiting(),
                  t
                    .DeleteOldAnnouncement(r, n)
                    .then(this.OnDeleteEventSuccessCallback)
                    .catch(this.OnDeleteEventFailureCallback))
                : (t.ResetModel(), this.setState({ dialogState: "success" }));
        }
        OnChangeDeleteForum() {
          this.setState({
            bDeleteCommentThread: !this.state.bDeleteCommentThread,
          });
        }
        render() {
          let e = this.props.eventModel,
            t = this.props.closeModal,
            r = "",
            i = new Array();
          switch (this.state.dialogState) {
            case "confirmation":
              let n = e.GetNameWithFallback((0, m.sf)(ct.TS.LANGUAGE)),
                a = e.BIsVisibleEvent()
                  ? "#EventDisplay_AreYouSure_Visible"
                  : "#EventDisplay_AreYouSure";
              (r = (0, at.we)(a, n)),
                (t = this.OnDelete),
                e.BHasForumTopicGID() &&
                  i.push(
                    B.createElement(
                      "div",
                      { key: "WantToDeleteCmtThread", className: lt().Padding },
                      B.createElement("input", {
                        type: "checkbox",
                        id: "del_cmt_post",
                        name: "del_cmt_post",
                        defaultChecked: this.state.bDeleteCommentThread,
                        onChange: this.OnChangeDeleteForum,
                      }),
                      B.createElement(
                        "label",
                        { htmlFor: "del_cmt_post" },
                        (0, at.we)("#EventDisplay_DeleteEvent_Comment"),
                      ),
                    ),
                  );
              break;
            case "waiting":
              (r = (0, at.we)("#EventDisplay_DeleteEvent_InProgress")),
                i.push(B.createElement(mt.t, { key: "throbber" }));
              break;
            case "error":
              (r = (0, at.we)("#EventDisplay_DeleteEvent_Error")),
                i.push(
                  B.createElement(
                    "div",
                    {
                      key: "deleteerror_" + ++gt.m_uniqueError,
                      className: lt().ErrorStyles,
                    },
                    this.state.strErrorMsg,
                  ),
                );
              break;
            case "failed_thread_delete":
              (r = (0, at.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
                i.push(
                  B.createElement(
                    "div",
                    {
                      key: "deleteerror_" + ++gt.m_uniqueError,
                      className: lt().ErrorStyles,
                    },
                    this.state.strErrorMsg,
                  ),
                ),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
              break;
            case "success":
              (r = (0, at.we)("#EventDisplay_DeleteEvent_Success")),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
          }
          return B.createElement(
            nt.o0,
            {
              strTitle: (0, at.we)("#EventDisplay_DeleteEvent"),
              strDescription: r,
              onCancel: this.props.closeModal,
              onOK: t,
              bAlertDialog: "confirmation" != this.state.dialogState,
              bOKDisabled: "waiting" == this.state.dialogState,
              bDestructiveWarning: "error" == this.state.dialogState,
            },
            i,
          );
        }
      }
      (0, it.Cg)([st.oI], gt.prototype, "OnDeleteEventSuccessCallback", null),
        (0, it.Cg)(
          [st.oI],
          gt.prototype,
          "OnDeleteForumTopicSuccessCallback",
          null,
        ),
        (0, it.Cg)([st.oI], gt.prototype, "OnDeleteEventFailureCallback", null),
        (0, it.Cg)(
          [st.oI],
          gt.prototype,
          "OnDeleteForumTopicFailureCallback",
          null,
        ),
        (0, it.Cg)([st.oI], gt.prototype, "SetToWaiting", null),
        (0, it.Cg)([st.oI], gt.prototype, "OnDelete", null),
        (0, it.Cg)([st.oI], gt.prototype, "OnChangeDeleteForum", null);
      var Bt = r(75113),
        _t = r(96971),
        pt = r(95695),
        bt = r(738),
        yt = r(52038),
        Mt = r(56011);
      function wt(e, t) {
        if (!e || !e.BIsClanAccount()) return !1;
        const r = Qe.KN.Get().GetPartnerEventPermissions(e);
        return !!r && (t ? r.valve_admin : r.valve_admin || r.support_user);
      }
      var ft = r(14947),
        zt = r(1501),
        St = r(35400),
        Rt = r(36735),
        vt = r(90316);
      function ht(e) {
        const { eventModel: t } = e,
          r = (0, g.q3)(() => t.jsondata.sale_sections);
        return (0, B.useMemo)(
          () =>
            r?.some(
              (e) =>
                ("quiz" == e.section_type &&
                  e.quiz?.track_with_cozy_cottage_doors) ||
                "quest" == e.section_type ||
                "rewards" == e.section_type,
            ),
          [r],
        )
          ? B.createElement(Ft, { ...e })
          : null;
      }
      const Pt = "Answered as: ";
      function Ft(e) {
        const { eventModel: t } = e,
          [r, i] = (0, B.useState)(!1),
          n = (0, St.Tn)();
        if (
          ((0, B.useEffect)(() => {
            St.hH
              .Get()
              .LoadDoorData()
              .then(() => i(!0));
          }, []),
          !r)
        )
          return null;
        const a = t.GetSaleSectionsByType("quiz"),
          s = [],
          o =
            1 == a?.length &&
            ("scenario" == a[0].quiz.quiz_type ||
              "branching" == a[0].quiz.quiz_type) &&
            a[0].quiz.answer_categories?.length > 0;
        if (o)
          s.push({ label: "State: Reset the Quiz", data: -1 }),
            s.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: Pt + e.category_name,
                data: e.door_index,
              })),
            ),
            s.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: "Rewarded as: " + e.category_name,
                data: e.door_index,
              })),
            );
        else {
          const e = St.hH.Get().GetMaxDoor();
          for (let t = -1; t <= e; ++t)
            s.push({ label: "Doors Opened " + (t + 1), data: t });
        }
        const l = t.GetSaleSectionsByType("rewards"),
          m = l?.length > 0 ? l[0] : null;
        return B.createElement(
          B.Fragment,
          null,
          B.createElement(
            "a",
            {
              className: (0, yt.A)(pt.Button, vt.AdminButton),
              onClick: (e) => {
                (0, bt.pg)(
                  B.createElement(nt.o0, {
                    strTitle: (0, at.we)("#Dialog_AreYouSure"),
                    strDescription:
                      "Reload page after you hit OK; will not grant virtual reward items a second itme",
                    onOK: () => St.hH.Get().CloseAllDoors(ct.UF.CLANACCOUNTID),
                  }),
                  (0, Mt.uX)(e),
                );
              },
            },
            "Reset All Doors",
          ),
          B.createElement(tt.m, {
            strDropDownClassName: (0, yt.A)(pt.DropDownScroll),
            rgOptions: s,
            selectedOption: n,
            label: "Minigame States:",
            onChange: (e) => {
              const t = new Array();
              if (o)
                (0, ft.h5)(() => {
                  if (
                    ((0, St.Sp)(-1),
                    zt.N.Get().ClearAnswersAndCategories(),
                    -1 != e.data)
                  ) {
                    const r = a[0].quiz.answer_categories.find(
                      (t) => t.door_index == e.data,
                    );
                    r &&
                      a[0].quiz.questions
                        .filter((e) => e.answers?.length > 0)
                        .forEach((e, t) => {
                          let i = e.answers.findIndex((e) =>
                            e.category_ids?.includes(r.category_id),
                          );
                          i < 0 && (i = 0),
                            zt.N.Get().SetAnswerCategory(
                              t,
                              e.answers[i].category_ids,
                            ),
                            zt.N.Get().SetAnswer(t, e.answers[i]);
                        }),
                      e.label.toString().startsWith(Pt) ||
                        ((0, St.my)(0, !0),
                        (0, St.my)(e.data, !0),
                        t.push(0),
                        t.push(e.data));
                  }
                });
              else {
                for (let r = 0; r <= e.data; ++r) t.push(r);
                (0, St.Sp)(e.data);
              }
              if (
                m &&
                m.rewards?.reward_items?.length > 0 &&
                e.data > -1 &&
                !e.label.toString().startsWith(Pt)
              ) {
                const e = t
                    .map((e) =>
                      (function (e, t) {
                        if (e && "rewards" == e.section_type) {
                          const r = e.rewards.reward_items?.filter(
                            (e) => e.item_bucket == t,
                          );
                          if (r?.length > 0)
                            return r.map((e) => ({
                              appid: e.appid,
                              item_type: e.community_item_type,
                              amount: "1",
                            }));
                        }
                        return null;
                      })(m, e),
                    )
                    .filter(Boolean),
                  r = new Array();
                e.forEach((e) => r.push(...e)),
                  (0, Rt.l5)(m.rewards?.reward_items[0].appid, r);
              }
            },
          }),
        );
      }
      var jt = r(95034),
        Tt = r(12155),
        Wt = r(32754),
        qt = r(77021),
        It = r(67165);
      function Ot(e) {
        const {
            eventModel: t,
            partnerEventStore: r,
            addtionalAdminButtons: i,
            fnOnUpdateSaleDayIndex: n,
            bSupportsSticky: a = !1,
          } = e,
          s = (0, ct.Qn)(),
          o = (0, _t.MU)(),
          [l, c] = B.useState(!1),
          u = (0, g.q3)(() =>
            (function (e) {
              let t;
              e?.BHasSaleEnabled() &&
                (e.GetSaleSectionCount() > 0 &&
                  e.GetSaleSections().forEach((e) => {
                    (0, _.ye)(e.section_type) &&
                      !(0, _.CU)(e) &&
                      e.capsules.forEach((e) => {
                        void 0 !== e.visibility_index &&
                          (void 0 === t || t < e.visibility_index) &&
                          (t = e.visibility_index);
                      });
                  }),
                e.jsondata.sale_num_headers > 1 &&
                  (void 0 === t || t < e.jsondata.sale_num_headers) &&
                  (t = e.jsondata.sale_num_headers));
              return t;
            })(t),
          ),
          [d, p] = B.useState(t ? t.GetDayIndexFromEventStart() : 0),
          [b, y, M, w] = (0, g.q3)(() => [
            t.visibility_state,
            t.jsondata.bSaleEnabled,
            t.GID,
            t.clanSteamID.GetAccountID(),
          ]),
          f = (0, Qe.Ec)(w),
          [z, S] = B.useState(a),
          { bVisible: R, ref: v } = (0, st.hd)(),
          h = (e) => {
            (0, bt.pg)(
              B.createElement(gt, {
                eventModel: t,
                onDeleteSuccessAndCloseDialog: () => c(!0),
                partnerEventStore: r,
              }),
              (0, Mt.uX)(e),
            );
          },
          P = (0, qt.ty)(),
          { creatorHome: F } = (0, It.FV)(w);
        if (l)
          return B.createElement(Bt.OG, {
            eventModel: t,
            route: Bt.PH.k_eCommunityAdminPage,
          });
        if ((f.can_edit || f.support_user) && !s && !P) {
          const e = [];
          if (void 0 !== u)
            for (let t = 0; t <= u; ++t)
              e.push({
                label: (0, at.we)("#SalePage_Admin_SaleEventDay", t + 1),
                data: t,
              });
          const s = (0, ct.yK)(),
            l = "community" == s,
            c = "store" == s,
            g = ct.iA.is_support && wt(t.clanSteamID, !0),
            f = z && !R,
            P = t.GetEventType() == m.Mv.k_ECreatorHome,
            j = P && F?.GetLinkedEventGID() == t.GID,
            T =
              (b == _.zv.k_EEventStateVisible ||
                b == _.zv.k_EEventStateUnlisted) &&
              (!P || j),
            W = b == _.zv.k_EEventStateStaged;
          return B.createElement(
            rt.tH,
            null,
            B.createElement("div", {
              className: (0, yt.A)(
                vt.DisplayAdminPanel_TopSpacer,
                f && vt.Sticky,
              ),
            }),
            B.createElement(
              "div",
              {
                className: (0, yt.A)({
                  [vt.DisplayAdminPanel]: !0,
                  [vt.Locked]: l,
                  [vt.Sticky]: f,
                }),
              },
              B.createElement(
                "span",
                { className: vt.DisplayAdminPanel_Title },
                (0, at.we)("#EventDisplay_Admin_Title"),
              ),
              B.createElement(
                "div",
                {
                  className: (0, yt.A)(
                    vt.DisplayAdminPanel_ctn,
                    f && vt.Sticky,
                  ),
                },
                i,
                i &&
                  B.createElement(
                    "span",
                    { className: vt.DisplayAdminPanel_Spacer },
                    " ",
                  ),
                B.createElement(
                  Bt.tj,
                  {
                    eventModel: t,
                    route: Bt.PH.k_eCommunityEdit,
                    className: (0, yt.A)(pt.Button, vt.AdminButton),
                  },
                  P
                    ? (0, at.we)("#EventEditor_Edit_Page")
                    : (0, at.we)("#EventEditor_Edit"),
                ),
                Boolean(r && "community" == (0, ct.yK)()) &&
                  B.createElement(
                    "span",
                    { className: pt.Button + " " + vt.AdminButton, onClick: h },
                    (0, at.we)("#EventDisplay_DeleteEvent"),
                  ),
                !T &&
                  B.createElement(
                    B.Fragment,
                    null,
                    B.createElement(
                      Bt.tj,
                      {
                        eventModel: t,
                        route: Bt.PH.k_eCommunityPublish,
                        className: (0, yt.A)(pt.Button, vt.AdminButton),
                      },
                      (0, at.we)(
                        W
                          ? "#EventEditor_Publish_VisibleNow"
                          : "#Button_Publish",
                      ),
                    ),
                  ),
                B.createElement(
                  Bt.tj,
                  {
                    eventModel: t,
                    route: Bt.PH.k_eCommunityAdminPage,
                    className: (0, yt.A)(pt.Button, vt.AdminButton),
                  },
                  (0, at.we)("#EventDisplay_Events"),
                ),
                Boolean(void 0 !== u && e.length > 0) &&
                  B.createElement(tt.m, {
                    strDropDownClassName: pt.DropDownScroll,
                    rgOptions: e,
                    selectedOption: Math.min(u, d),
                    onChange: (e) => {
                      p(e.data), n(e.data);
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                Boolean(t.jsondata.bSaleEnabled && o && !P) &&
                  B.createElement(
                    Bt.tj,
                    {
                      eventModel: t,
                      route: Bt.PH.k_eStoreSalePage,
                      className: (0, yt.A)(pt.Button, vt.AdminButton),
                    },
                    (0, at.we)("#EventDisplay_SalesPage"),
                  ),
                Boolean(y && ct.iA.is_support && M) &&
                  B.createElement(
                    "a",
                    {
                      href:
                        ct.TS.STATS_BASE_URL +
                        "sales/details/?gid=" +
                        M +
                        "&clanid=" +
                        w,
                      target: ct.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, yt.A)(
                        pt.Button,
                        vt.AdminButton,
                        pt.ValveOnlyBackground,
                      ),
                    },
                    (0, at.we)("#EventDisplay_StatsPage"),
                  ),
                Boolean(y && ct.iA.is_support && M && !P) &&
                  B.createElement(
                    "a",
                    {
                      href:
                        ct.TS.PARTNER_BASE_URL +
                        "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                        M +
                        "&saleclanaccountid=" +
                        w,
                      target: ct.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, yt.A)(
                        pt.Button,
                        vt.AdminButton,
                        pt.ValveOnlyBackground,
                      ),
                    },
                    (0, at.we)("#EventDisplay_InvitationPlannerPage"),
                  ),
                Boolean(y && g && M) &&
                  B.createElement(At, {
                    clanAccountID: t.clanSteamID.GetAccountID(),
                    gidClanEvent: M,
                  }),
                Boolean(y && g && _.bv == w && t.GetContentHubCategory()) &&
                  B.createElement(
                    "a",
                    {
                      href: `${ct.TS.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                      target: ct.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, yt.A)(
                        pt.Button,
                        vt.AdminButton,
                        pt.ValveOnlyBackground,
                      ),
                    },
                    (0, at.we)("#EventDisplay_CategoryEditor"),
                  ),
                Boolean(T && (c || (o && !l))) &&
                  B.createElement(
                    Bt.tj,
                    {
                      eventModel: t,
                      route: y
                        ? Bt.PH.k_eCommunityPreviewSale
                        : Bt.PH.k_eCommunityView,
                      className: (0, yt.A)(pt.Button, vt.AdminButton),
                    },
                    (0, at.we)(
                      y
                        ? "#EventDisplay_PreviewOnCommunity"
                        : "#EventDisplay_ViewOnCommunity",
                    ),
                  ),
                Boolean(T && l) &&
                  B.createElement(
                    Bt.tj,
                    {
                      eventModel: t,
                      route: Bt.PH.k_eStoreView,
                      className: (0, yt.A)(pt.Button, vt.AdminButton),
                    },
                    (0, at.we)("#EventDisplay_ViewOnStore"),
                  ),
                B.createElement(ht, { eventModel: t }),
                B.createElement(Ut, { eventModel: t }),
                Boolean(ct.iA.is_support) &&
                  B.createElement(Ct, { eventModel: t }),
                f &&
                  B.createElement(
                    "div",
                    {
                      className: vt.DisplayAdminPanelClose,
                      onClick: () => S(!1),
                    },
                    B.createElement(
                      Wt.Gq,
                      {
                        toolTipContent: (0, at.we)(
                          "#EventDisplay_Admin_Close_ttip",
                        ),
                      },
                      B.createElement(Tt.X, null),
                    ),
                  ),
                !z &&
                  a &&
                  B.createElement(
                    "div",
                    {
                      className: vt.DisplayAdminPanelClose,
                      onClick: () => S(!0),
                    },
                    B.createElement(
                      Wt.Gq,
                      {
                        toolTipContent: (0, at.we)(
                          "#EventDisplay_Admin_Reopen_ttip",
                        ),
                      },
                      B.createElement(Tt.i3G, { angle: 0 }),
                    ),
                  ),
              ),
            ),
            B.createElement("div", {
              className: vt.DisplayAdminPanelMarker,
              ref: v,
            }),
          );
        }
        return B.createElement("span", null);
      }
      function Ct(e) {
        const { eventModel: t } = e,
          r = (0, et.Fb)(),
          [i] = (0, jt.QD)(p.jD, void 0);
        return Boolean(
          r &&
            t.jsondata?.bSaleEnabled &&
            t.jsondata?.sale_sections?.length > 0,
        )
          ? B.createElement(
              B.Fragment,
              null,
              B.createElement(
                "a",
                {
                  className: (0, yt.A)(
                    pt.Button,
                    vt.AdminButton,
                    pt.ValveOnlyBackground,
                  ),
                  onClick: () => {
                    const e = t.jsondata.sale_sections.find(
                        (e) => "tabs" == e.section_type,
                      ),
                      n =
                        i ||
                        (e?.tabs?.length > 0 && e.tabs[0].unique_id) ||
                        null,
                      a = new Array();
                    t.jsondata.sale_sections.forEach((e) => {
                      (0, et.Jz)(e) &&
                        a.push({
                          ...r,
                          insertion_requirement: null,
                          sectionID: e.unique_id,
                          tabID: n,
                          insertionIndex: 0,
                          force_preview_mode: !0,
                        });
                    }),
                      (0, et.YH)(a);
                  },
                },
                "(VO) Inject Capsule",
              ),
              B.createElement(
                "a",
                {
                  className: (0, yt.A)(
                    pt.Button,
                    vt.AdminButton,
                    pt.ValveOnlyBackground,
                  ),
                  onClick: (e) =>
                    (0, bt.pg)(
                      B.createElement(nt.o0, {
                        strTitle: "Clear Rewards for Summer 2022",
                        onOK: async () => {
                          const e = new FormData();
                          e.append("sessionid", ct.TS.SESSIONID),
                            e.append(
                              "clan_accountid",
                              "" + ct.UF.CLANACCOUNTID,
                            ),
                            e.append(
                              "event_id",
                              "" + c.LH.k_EVirtualItemRewardEvent_Summer2022,
                            );
                          const t = await d().post(
                            `${ct.TS.STORE_BASE_URL}saleaction/ajaxgresetopendoorrewards`,
                            e,
                            { withCredentials: !0 },
                          );
                          console.log("ajaxgresetopendoorrewards", t);
                        },
                      }),
                      (0, Mt.uX)(e),
                    ),
                },
                "( VO ) Clear Summer 2022 Rewards",
              ),
            )
          : null;
      }
      function Ut(e) {
        const { eventModel: t } = e,
          r = (0, g.q3)(() => t.jsondata.sale_sections),
          i = (0, B.useMemo)(
            () => r?.find((e) => "badge_progress" == e.section_type),
            [r],
          );
        return i?.badge_progress?.levels?.length > 0 && ct.iA.is_support
          ? B.createElement(Et, { section: i })
          : null;
      }
      function Et(e) {
        const { section: t } = e,
          r = (0, b.fy)(t.badge_progress?.event_badgeid),
          i = (0, g.q3)(() => t.badge_progress.levels),
          n = Math.max(...i.map((e) => e.level));
        if (!r) return null;
        const a = [];
        for (let e = 0; e <= n; ++e) a.push({ label: "Level " + e, data: e });
        return B.createElement(tt.m, {
          strDropDownClassName: (0, yt.A)(
            pt.DropDownScroll,
            pt.ValveOnlyBackground,
          ),
          rgOptions: a,
          selectedOption: r.level,
          onChange: (e) =>
            (0, b.Du)({
              badgeid: t.badge_progress?.event_badgeid,
              level: e.data,
            }),
        });
      }
      function At(e) {
        const { clanAccountID: t, gidClanEvent: r } = e,
          i = $e(t, r);
        return i
          ? B.createElement(
              B.Fragment,
              null,
              i.map((e) =>
                B.createElement(
                  "a",
                  {
                    key: e,
                    href: `${ct.TS.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
                    target: ct.TS.IN_CLIENT ? "" : "_blank",
                    className: (0, yt.A)(
                      pt.Button,
                      vt.AdminButton,
                      pt.ValveOnlyBackground,
                    ),
                  },
                  (0, at.we)("#EventDisplay_PromotionEditor"),
                ),
              ),
            )
          : null;
      }
    },
    44894: (e, t, r) => {
      r.d(t, { A: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
