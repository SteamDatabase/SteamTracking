/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2079],
  {
    54330: (e, r, t) => {
      t.d(r, { u: () => d });
      var i = t(37085),
        s = t(8527),
        a = t(20194),
        n = t(41735),
        l = t.n(n),
        m = t(90626);
      function d(e) {
        const r = (0, a.I)({
          queryKey: ["useMilestoneByAppID", e],
          queryFn: async () => {
            const r = `${s.TS.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
              t = { appid: e },
              a = await l().get(r, { params: t });
            if (a?.data?.success == i.d.k_EResultOK) return a.data.milestones;
            throw new Error("failed to load milestonse for appid " + e);
          },
          enabled: Boolean(e),
        });
        return m.useMemo(() => r?.data, [e, r.isLoading]);
      }
    },
    85842: (e, r, t) => {
      t.d(r, {
        HX: () => w,
        Qo: () => i,
        RE: () => f,
        _8: () => s,
        eJ: () => l,
        ei: () => D,
        rA: () => R,
        tb: () => a,
      });
      var i,
        s,
        a,
        n,
        l,
        m = t(80613),
        d = t.n(m),
        c = t(89068),
        u = t(56545);
      !(function (e) {
        (e[(e.k_EPartnerDeadlineTypeInvalid = 0)] =
          "k_EPartnerDeadlineTypeInvalid"),
          (e[(e.k_EPartnerDeadlineTypeTest1 = 1)] =
            "k_EPartnerDeadlineTypeTest1"),
          (e[(e.k_EPartnerDeadlineTypeTest2 = 2)] =
            "k_EPartnerDeadlineTypeTest2"),
          (e[(e.k_EPartnerDeadlineType_DailyDeals_Invite = 3)] =
            "k_EPartnerDeadlineType_DailyDeals_Invite"),
          (e[(e.k_EPartnerDeadlineType_NextFest_PressPreview = 4)] =
            "k_EPartnerDeadlineType_NextFest_PressPreview"),
          (e[(e.k_EPartnerDeadlineType_NextFest_DemoBuildReview = 5)] =
            "k_EPartnerDeadlineType_NextFest_DemoBuildReview"),
          (e[(e.k_EPartnerDeadlineType_AssetRequest = 6)] =
            "k_EPartnerDeadlineType_AssetRequest"),
          (e[(e.k_EPartnerDeadlineType_MidWeekDeal = 7)] =
            "k_EPartnerDeadlineType_MidWeekDeal"),
          (e[(e.k_EPartnerDeadlineType_WeekendDeal = 8)] =
            "k_EPartnerDeadlineType_WeekendDeal"),
          (e[(e.k_EPartnerDeadlineType_SeasonPassMilestone = 9)] =
            "k_EPartnerDeadlineType_SeasonPassMilestone"),
          (e[(e.k_EPartnerDeadlineType_TaxRequirement = 10)] =
            "k_EPartnerDeadlineType_TaxRequirement");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_EPartnerDeadlineStatusActive = 0)] =
            "k_EPartnerDeadlineStatusActive"),
            (e[(e.k_EPartnerDeadlineStatusComplete = 1)] =
              "k_EPartnerDeadlineStatusComplete");
        })(s || (s = {})),
        (function (e) {
          (e[(e.k_EPartnerDimiss_Invalid = 0)] = "k_EPartnerDimiss_Invalid"),
            (e[(e.k_EPartnerDimiss_Dismiss = 1)] = "k_EPartnerDimiss_Dismiss"),
            (e[(e.k_EPartnerDimiss_Pinned = 2)] = "k_EPartnerDimiss_Pinned");
        })(a || (a = {}));
      class o extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.partnerid || c.Sg(o.M()),
            m.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  partnerid: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  accountid: {
                    n: 13,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  type: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  status: { n: 3, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  due_date: { n: 4, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  email_days_before_due: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: c.qM.readUint32,
                    pbr: c.qM.readPackedUint32,
                    bw: c.gp.writeRepeatedUint32,
                  },
                  gid: {
                    n: 6,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  store_item_type: {
                    n: 7,
                    br: c.qM.readEnum,
                    bw: c.gp.writeEnum,
                  },
                  store_item_id: {
                    n: 8,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  discount_event_id: {
                    n: 9,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  required_rights: {
                    n: 11,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  description_jsondata: {
                    n: 10,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  send_email_on_creation: {
                    n: 12,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = c.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(o.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline";
        }
      }
      class B extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.deadlineid || c.Sg(B.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  deadlineid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  accountid: {
                    n: 8,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  type: { n: 3, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  gid: {
                    n: 4,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  store_item_type: {
                    n: 5,
                    br: c.qM.readEnum,
                    bw: c.gp.writeEnum,
                  },
                  store_item_id: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  discount_event_id: {
                    n: 7,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = c.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadlineLookUpKey";
        }
      }
      class _ extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.partnerid || c.Sg(_.M()),
            m.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  partnerid: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  accountid: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  start_date: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  end_date: { n: 3, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  include_complete: {
                    n: 4,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  lookup_key: { n: 5, c: B, r: !0, q: !0 },
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
        static toObject(e, r) {
          return c.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Request";
        }
      }
      class b extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.deadlines || c.Sg(b.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { deadlines: { n: 1, c: g, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Response";
        }
      }
      class g extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.deadlineid || c.Sg(g.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  deadlineid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  data: { n: 2, c: o },
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
        static toObject(e, r) {
          return c.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Response_Result";
        }
      }
      class y extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.type || c.Sg(y.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  type: { n: 1, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  start_date: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  end_date: { n: 3, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  include_complete: {
                    n: 4,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  store_item_type: {
                    n: 7,
                    br: c.qM.readEnum,
                    bw: c.gp.writeEnum,
                  },
                  store_item_id: {
                    n: 8,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
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
        static toObject(e, r) {
          return c.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlineByTimeRange_Request";
        }
      }
      class M extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.deadlines || c.Sg(M.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { deadlines: { n: 1, c: p, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = c.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlineByTimeRange_Response";
        }
      }
      class p extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.deadlineid || c.Sg(p.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  deadlineid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  data: { n: 2, c: o },
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
        static toObject(e, r) {
          return c.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlineByTimeRange_Response_Result";
        }
      }
      class w extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.state || c.Sg(w.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  state: { n: 1, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  accountid: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  key_json: { n: 3, br: c.qM.readString, bw: c.gp.writeString },
                  partnerid: {
                    n: 4,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  rtime_create: {
                    n: 5,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  rtime_validity: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  dismiss_id: {
                    n: 7,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = c.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDismissPinData";
        }
      }
      class f extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.dismiss_list || c.Sg(f.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { dismiss_list: { n: 1, c: w, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_CreateDismiss_Request";
        }
      }
      class z extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.dismiss_list || c.Sg(z.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { dismiss_list: { n: 1, c: w, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = c.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_CreateDismiss_Response";
        }
      }
      class R extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.partnerid || c.Sg(R.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  partnerid: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  accountid: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  rtime_after: {
                    n: 3,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = c.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_GetDismissTimeRange_Request";
        }
      }
      class T extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.dismiss_list || c.Sg(T.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { dismiss_list: { n: 1, c: w, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = c.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_GetDismissTimeRange_Response";
        }
      }
      class D extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.dismiss_id || c.Sg(D.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  dismiss_id: {
                    n: 7,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = c.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(D.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_DeleteDismiss_Request";
        }
      }
      class S extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let r = new (d().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_DeleteDismiss_Response";
        }
      }
      !(function (e) {
        (e.GetDeadlinesForPartner = function (e, r) {
          return e.SendMsg(
            "PartnerDeadline.GetDeadlinesForPartner#1",
            (0, u.I8)(_, r),
            b,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetDeadlineByTimeRange = function (e, r) {
            return e.SendMsg(
              "PartnerDeadline.GetDeadlineByTimeRange#1",
              (0, u.I8)(y, r),
              M,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(n || (n = {})),
        (function (e) {
          (e.CreateDismiss = function (e, r) {
            return e.SendMsg(
              "PartnerDismiss.CreateDismiss#1",
              (0, u.I8)(f, r),
              z,
              { ePrivilege: 1 },
            );
          }),
            (e.GetDismissTimeRange = function (e, r) {
              return e.SendMsg(
                "PartnerDismiss.GetDismissTimeRange#1",
                (0, u.I8)(R, r),
                T,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.DeleteDismiss = function (e, r) {
              return e.SendMsg(
                "PartnerDismiss.DeleteDismiss#1",
                (0, u.I8)(D, r),
                S,
                { ePrivilege: 1 },
              );
            });
        })(l || (l = {}));
    },
  },
]);
